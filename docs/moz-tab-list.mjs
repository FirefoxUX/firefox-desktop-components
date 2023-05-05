/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import {
  html,
  ifDefined,
  styleMap,
} from "chrome://global/content/vendor/lit.all.mjs";
import { MozLitElement } from "chrome://global/content/lit-utils.mjs";

const NOW_THRESHOLD_MS = 91000;
const lazy = {};
let XPCOMUtils;

if (!window.IS_STORYBOOK) {
  XPCOMUtils = ChromeUtils.importESModule(
    "resource://gre/modules/XPCOMUtils.sys.mjs"
  ).XPCOMUtils;
  XPCOMUtils.defineLazyGetter(lazy, "relativeTimeFormat", () => {
    return new Services.intl.RelativeTimeFormat(undefined, {
      style: "narrow",
    });
  });

  ChromeUtils.defineESModuleGetters(lazy, {
    BrowserUtils: "resource://gre/modules/BrowserUtils.sys.mjs",
    PlacesUIUtils: "resource:///modules/PlacesUIUtils.sys.mjs",
  });
}

/**
 * A list of clickable tab items
 *
 * @property {string} dateTimeFormat - Expected format for date and/or time
 * @property {string} hasPopup - The aria-haspopup attribute for the secondary action, if required
 * @property {number} maxTabsLength - The max number of tabs for the list
 * @property {Array} tabItems - Items to show in the tab list
 */
export default class MozTabList extends MozLitElement {
  constructor() {
    super();
    window.MozXULElement.insertFTLIfNeeded("toolkit/branding/brandings.ftl");
    window.MozXULElement.insertFTLIfNeeded("browser/mozTabList.ftl");
    this.activeIndex = 0;
    this.currentActiveElementId = "moz-tab-row-main";
    this.hasPopup = null;
    this.dateTimeFormat = "relative";
    this.maxTabsLength = 25;
    this.tabItems = [];
    this.#register();
  }

  static properties = {
    activeIndex: { type: Number },
    currentActiveElementId: { type: String },
    dateTimeFormat: { type: String },
    hasPopup: { type: String },
    maxTabsLength: { type: Number },
    tabItems: { type: Array },
  };

  static queries = {
    rowEls: { all: "moz-tab-row" },
  };

  willUpdate(changes) {
    this.activeIndex = Math.min(
      Math.max(this.activeIndex, 0),
      this.tabItems.length - 1
    );

    if (changes.has("dateTimeFormat")) {
      if (this.dateTimeFormat == "relative" && !window.IS_STORYBOOK) {
        this.intervalID = setInterval(
          () => this.onIntervalUpdate(),
          this.timeMsPref
        );
      } else {
        clearInterval(this.intervalID);
      }
    }
  }

  #register() {
    if (!window.IS_STORYBOOK) {
      XPCOMUtils.defineLazyPreferenceGetter(
        this,
        "timeMsPref",
        "browser.tabs.firefox-view.updateTimeMs",
        NOW_THRESHOLD_MS,
        (prefName, oldVal, newVal) => {
          if (!this.isConnected) {
            return;
          }
          clearInterval(this.intervalID);
          this.intervalID = setInterval(() => {
            this.onIntervalUpdate();
          }, newVal);
          this.requestUpdate();
        }
      );
    }
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.dateTimeFormat === "relative" && !window.IS_STORYBOOK) {
      this.intervalID = setInterval(
        () => this.onIntervalUpdate(),
        this.timeMsPref
      );
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.intervalID) {
      clearInterval(this.intervalID);
    }
  }

  async getUpdateComplete() {
    await super.getUpdateComplete();
    await Promise.all(Array.from(this.rowEls).map(item => item.updateComplete));
  }

  onIntervalUpdate() {
    this.requestUpdate();
    Array.from(this.rowEls).forEach(mozTabRow => mozTabRow.requestUpdate());
  }

  /**
   * Focuses the expected element (either the link or button) within moz-tab-row
   * The currently focused/active element ID within a row is stored in this.currentActiveElementId
   */
  handleFocusElementInRow(e) {
    let mozTabRow = e.target;
    if (e.code == "ArrowUp") {
      // Focus either the link or button of the previous row based on this.currentActiveElementId
      e.preventDefault();
      this.focusPrevRow();
    } else if (e.code == "ArrowDown") {
      // Focus either the link or button of the next row based on this.currentActiveElementId
      e.preventDefault();
      this.focusNextRow();
    } else if (e.code == "ArrowRight") {
      // Focus either the link or the button in the current row and
      // set this.currentActiveElementId to that element's ID
      e.preventDefault();
      if (document.dir == "rtl") {
        this.currentActiveElementId = mozTabRow.focusLink();
      } else {
        this.currentActiveElementId = mozTabRow.focusButton();
      }
    } else if (e.code == "ArrowLeft") {
      // Focus either the link or the button in the current row and
      // set this.currentActiveElementId to that element's ID
      e.preventDefault();
      if (document.dir == "rtl") {
        this.currentActiveElementId = mozTabRow.focusButton();
      } else {
        this.currentActiveElementId = mozTabRow.focusLink();
      }
    }
  }

  focusPrevRow() {
    // Focus link or button of item above
    let previousIndex = this.activeIndex - 1;
    if (previousIndex >= 0) {
      this.rowEls[previousIndex].focus();
      this.activeIndex = previousIndex;
    }
  }

  focusNextRow() {
    // Focus link or button of item below
    let nextIndex = this.activeIndex + 1;
    if (nextIndex < this.rowEls.length) {
      this.rowEls[nextIndex].focus();
      this.activeIndex = nextIndex;
    }
  }

  // Use a relative URL in storybook to get faster reloads on style changes.
  static stylesheetUrl = window.IS_STORYBOOK
    ? "./moz-tab-list.css"
    : "chrome://browser/content/moz-tab-list.css";

  render() {
    this.tabItems = this.tabItems.slice(0, this.maxTabsLength);
    const {
      activeIndex,
      currentActiveElementId,
      dateTimeFormat,
      hasPopup,
      tabItems,
    } = this;
    return html`
      <link rel="stylesheet" href=${this.constructor.stylesheetUrl} />
      <div
        id="moz-tab-list"
        class="moz-tab-list"
        role="list"
        @keydown=${this.handleFocusElementInRow}
      >
        ${tabItems.map(
          (tabItem, i) =>
            html`
              <moz-tab-row
                exportparts="secondary-button"
                ?active=${i == activeIndex}
                .hasPopup=${hasPopup}
                .currentActiveElementId=${currentActiveElementId}
                .dateTimeFormat=${dateTimeFormat}
                .favicon=${tabItem.icon}
                .primaryL10nId=${tabItem.primaryL10nId}
                .primaryL10nArgs=${ifDefined(tabItem.primaryL10nArgs)}
                role="listitem"
                .secondaryL10nId=${tabItem.secondaryL10nId}
                .secondaryL10nArgs=${ifDefined(tabItem.secondaryL10nArgs)}
                .tabid=${ifDefined(tabItem.tabid || tabItem.closedId)}
                .time=${(tabItem.time || tabItem.closedAt).toString().length ===
                16
                  ? (tabItem.time || tabItem.closedAt) / 1000
                  : tabItem.time || tabItem.closedAt}
                .timeMsPref=${ifDefined(this.timeMsPref)}
                .title=${tabItem.title}
                .url=${tabItem.url}
              >
              </moz-tab-row>
            `
        )}
      </div>
      <slot name="menu"></slot>
    `;
  }
}
customElements.define("moz-tab-list", MozTabList);

/**
 * A tab item that displays favicon, title, url, and time of last access
 *
 * @property {boolean} active - Should current item have focus on keydown
 * @property {string} currentActiveElementId - ID of currently focused element within each tab item
 * @property {string} dateTimeFormat - Expected format for date and/or time
 * @property {string} hasPopup - The aria-haspopup attribute for the secondary action, if required
 * @property {number} tabid - The tab ID for when the tab item.
 * @property {string} favicon - The favicon for the tab item.
 * @property {string} primaryL10nId - The l10n id used for the primary action element
 * @property {string} primaryL10nArgs - The l10n args used for the primary action element
 * @property {string} secondaryL10nId - The l10n id used for the secondary action button
 * @property {string} secondaryL10nArgs - The l10n args used for the secondary action element
 * @property {number} time - The timestamp for when the tab was last accessed.
 * @property {string} title - The title for the tab item.
 * @property {string} url - The url for the tab item.
 * @property {number} timeMsPref - The frequency in milliseconds of updates to relative time
 */
export class MozTabRow extends MozLitElement {
  constructor() {
    super();
    this.active = false;
    this.currentActiveElementId = "moz-tab-row-main";
  }

  static properties = {
    active: { type: Boolean },
    currentActiveElementId: { type: String },
    dateTimeFormat: { type: String },
    favicon: { type: String },
    hasPopup: { type: String },
    primaryL10nId: { type: String },
    primaryL10nArgs: { type: String },
    secondaryL10nId: { type: String },
    secondaryL10nArgs: { type: String },
    tabid: { type: Number },
    time: { type: Number },
    title: { type: String },
    timeMsPref: { type: Number },
    url: { type: String },
  };

  static queries = {
    mainEl: ".moz-tab-row-main",
    buttonEl: ".moz-tab-row-button:not([hidden])",
  };

  get currentFocusable() {
    return this.renderRoot.getElementById(this.currentActiveElementId);
  }

  connectedCallback() {
    super.connectedCallback();
  }

  focus() {
    this.currentFocusable.focus();
  }

  focusButton() {
    this.buttonEl.focus();
    return this.buttonEl.id;
  }

  focusLink() {
    this.mainEl.focus();
    return this.mainEl.id;
  }

  // Use a relative URL in storybook to get faster reloads on style changes.
  static stylesheetUrl = window.IS_STORYBOOK
    ? "./moz-tab-row.css"
    : "chrome://browser/content/moz-tab-row.css";

  dateFluentArgs(timestamp, dateTimeFormat) {
    if (dateTimeFormat === "date" || dateTimeFormat === "dateTime") {
      return JSON.stringify({ date: timestamp });
    }
    return null;
  }

  dateFluentId(timestamp, dateTimeFormat, _nowThresholdMs = NOW_THRESHOLD_MS) {
    if (!timestamp) {
      return "";
    }
    if (dateTimeFormat === "relative") {
      const elapsed = Date.now() - timestamp;
      if (elapsed <= _nowThresholdMs || !lazy.relativeTimeFormat) {
        // Use a different string for very recent timestamps
        return "mztabrow-just-now-timestamp";
      }
      return null;
    } else if (dateTimeFormat === "date" || dateTimeFormat === "dateTime") {
      return "mztabrow-date";
    }
    return null;
  }

  relativeTime(timestamp, dateTimeFormat, _nowThresholdMs = NOW_THRESHOLD_MS) {
    if (dateTimeFormat === "relative") {
      const elapsed = Date.now() - timestamp;
      if (elapsed > _nowThresholdMs && lazy.relativeTimeFormat) {
        return lazy.relativeTimeFormat.formatBestUnit(new Date(timestamp));
      }
    }
    return null;
  }

  timeFluentId(dateTimeFormat) {
    if (dateTimeFormat === "time" || dateTimeFormat === "dateTime") {
      return "mztabrow-time";
    }
    return null;
  }

  formatURIForDisplay(uriString) {
    return !window.IS_STORYBOOK
      ? lazy.BrowserUtils.formatURIStringForDisplay(uriString)
      : uriString;
  }

  getImageUrl(icon, targetURI) {
    if (!window.IS_STORYBOOK) {
      return icon
        ? lazy.PlacesUIUtils.getImageURL(icon)
        : `page-icon:${targetURI}`;
    }
    return `chrome://global/skin/icons/defaultFavicon.svg`;
  }

  primaryActionHandler(event) {
    if (
      (event.type == "click" && !event.altKey) ||
      (event.type == "keydown" && event.code == "Enter") ||
      (event.type == "keydown" && event.code == "Space")
    ) {
      event.preventDefault();
      if (!window.IS_STORYBOOK) {
        this.dispatchEvent(
          new CustomEvent("moz-tab-list-primary-action", {
            bubbles: true,
            composed: true,
            detail: { originalEvent: event, item: this },
          })
        );
      }
    }
  }

  secondaryActionHandler(event) {
    if (
      (event.type == "click" && event.detail && !event.altKey) ||
      // detail=0 is from keyboard
      (event.type == "click" && !event.detail)
    ) {
      event.preventDefault();
      this.dispatchEvent(
        new CustomEvent("moz-tab-list-secondary-action", {
          bubbles: true,
          composed: true,
          detail: { originalEvent: event, item: this },
        })
      );
    }
  }

  render() {
    const title = this.title;
    const relativeString = this.relativeTime(
      this.time,
      this.dateTimeFormat,
      !window.IS_STORYBOOK ? this.timeMsPref : NOW_THRESHOLD_MS
    );
    const dateString = this.dateFluentId(
      this.time,
      this.dateTimeFormat,
      !window.IS_STORYBOOK ? this.timeMsPref : NOW_THRESHOLD_MS
    );
    const dateArgs = this.dateFluentArgs(this.time, this.dateTimeFormat);
    const timeString = this.timeFluentId(this.dateTimeFormat);
    const time = this.time;
    const timeArgs = JSON.stringify({ time });
    return html`
      <link
        rel="stylesheet"
        href="chrome://global/skin/in-content/common.css"
      />
      <link rel="stylesheet" href=${this.constructor.stylesheetUrl} />
      <a
        href=${this.url}
        class="moz-tab-row-main"
        id="moz-tab-row-main"
        tabindex=${this.active &&
        this.currentActiveElementId === "moz-tab-row-main"
          ? "0"
          : "-1"}
        data-l10n-id=${this.primaryL10nId}
        data-l10n-args=${ifDefined(this.primaryL10nArgs)}
        @click=${this.primaryActionHandler}
        @keydown=${this.primaryActionHandler}
      >
        <span
          class="moz-tab-row-favicon icon"
          id="moz-tab-row-favicon"
          style=${styleMap({
            backgroundImage: `url(${this.getImageUrl(this.favicon, this.url)})`,
          })}
        ></span>
        <span class="moz-tab-row-title" id="moz-tab-row-title">
          ${title}
        </span>
        <span class="moz-tab-row-url" id="moz-tab-row-url">
          ${this.formatURIForDisplay(this.url)}
        </span>
        <span class="moz-tab-row-date" id="moz-tab-row-date">
          <span
            ?hidden=${relativeString || !dateString}
            data-l10n-id=${ifDefined(dateString)}
            data-l10n-args=${ifDefined(dateArgs)}
          ></span>
          <span ?hidden=${!relativeString}>${relativeString}</span>
        </span>
        <span
          class="moz-tab-row-time"
          id="moz-tab-row-time"
          ?hidden=${!timeString}
          data-timestamp=${this.time}
          data-l10n-id=${ifDefined(timeString)}
          data-l10n-args=${timeArgs}
        >
        </span>
      </a>
      <button
        class="moz-tab-row-button ghost-button icon-button semi-transparent"
        id="moz-tab-row-secondary-button"
        part="secondary-button"
        data-l10n-id=${this.secondaryL10nId}
        data-l10n-args=${ifDefined(this.secondaryL10nArgs)}
        aria-haspopup=${ifDefined(this.hasPopup)}
        @click=${this.secondaryActionHandler}
        tabindex="${this.active &&
        this.currentActiveElementId === "moz-tab-row-secondary-button"
          ? "0"
          : "-1"}"
      ></button>
    `;
  }
}

customElements.define("moz-tab-row", MozTabRow);
