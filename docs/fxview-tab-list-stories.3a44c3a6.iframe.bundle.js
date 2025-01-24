"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[3013,5872,8825],{

/***/ 54090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FxviewTabListBase": () => (/* binding */ FxviewTabListBase),
/* harmony export */   "FxviewTabRow": () => (/* binding */ FxviewTabRow),
/* harmony export */   "FxviewTabRowBase": () => (/* binding */ FxviewTabRowBase),
/* harmony export */   "VirtualList": () => (/* binding */ VirtualList)
/* harmony export */ });
/* harmony import */ var browser_components_firefoxview_fxview_tab_row_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81529);
/* harmony import */ var browser_components_firefoxview_fxview_tab_list_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29165);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73689);
/* harmony import */ var _search_helpers_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64930);
/* harmony import */ var chrome_global_content_elements_moz_button_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15872);


/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




// eslint-disable-next-line import/no-unassigned-import

const NOW_THRESHOLD_MS = 91000;
const FXVIEW_ROW_HEIGHT_PX = 32;
const lazy = {};
let XPCOMUtils;
if (!window.IS_STORYBOOK) {
  XPCOMUtils = ChromeUtils.importESModule("resource://gre/modules/XPCOMUtils.sys.mjs").XPCOMUtils;
  XPCOMUtils.defineLazyPreferenceGetter(lazy, "virtualListEnabledPref", "browser.firefox-view.virtual-list.enabled");
  ChromeUtils.defineLazyGetter(lazy, "relativeTimeFormat", () => {
    return new Services.intl.RelativeTimeFormat(undefined, {
      style: "narrow"
    });
  });
  ChromeUtils.defineESModuleGetters(lazy, {
    BrowserUtils: "resource://gre/modules/BrowserUtils.sys.mjs"
  });
}

/**
 * A list of clickable tab items
 *
 * @property {boolean} compactRows - Whether to hide the URL and date/time for each tab.
 * @property {string} dateTimeFormat - Expected format for date and/or time
 * @property {string} hasPopup - The aria-haspopup attribute for the secondary action, if required
 * @property {number} maxTabsLength - The max number of tabs for the list
 * @property {Array} tabItems - Items to show in the tab list
 * @property {string} searchQuery - The query string to highlight, if provided.
 * @property {string} secondaryActionClass - The class used to style the secondary action element
 * @property {string} tertiaryActionClass - The class used to style the tertiary action element
 */
class FxviewTabListBase extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.MozLitElement {
  constructor() {
    super();
    window.MozXULElement.insertFTLIfNeeded("toolkit/branding/brandings.ftl");
    window.MozXULElement.insertFTLIfNeeded("browser/fxviewTabList.ftl");
    this.activeIndex = 0;
    this.currentActiveElementId = "fxview-tab-row-main";
    this.hasPopup = null;
    this.dateTimeFormat = "relative";
    this.maxTabsLength = 25;
    this.tabItems = [];
    this.compactRows = false;
    this.updatesPaused = true;
    this.#register();
  }
  static properties = {
    activeIndex: {
      type: Number
    },
    compactRows: {
      type: Boolean
    },
    currentActiveElementId: {
      type: String
    },
    dateTimeFormat: {
      type: String
    },
    hasPopup: {
      type: String
    },
    maxTabsLength: {
      type: Number
    },
    tabItems: {
      type: Array
    },
    updatesPaused: {
      type: Boolean
    },
    searchQuery: {
      type: String
    },
    secondaryActionClass: {
      type: String
    },
    tertiaryActionClass: {
      type: String
    }
  };
  static queries = {
    emptyState: "fxview-empty-state",
    rowEls: {
      all: "fxview-tab-row"
    },
    rootVirtualListEl: "virtual-list"
  };
  willUpdate(changes) {
    this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.tabItems.length - 1);
    if (changes.has("dateTimeFormat") || changes.has("updatesPaused")) {
      this.clearIntervalTimer();
      if (!this.updatesPaused && this.dateTimeFormat == "relative" && !window.IS_STORYBOOK) {
        this.startIntervalTimer();
        this.onIntervalUpdate();
      }
    }
    if (this.maxTabsLength > 0) {
      this.tabItems = this.tabItems.slice(0, this.maxTabsLength);
    }
  }
  startIntervalTimer() {
    this.clearIntervalTimer();
    this.intervalID = setInterval(() => this.onIntervalUpdate(), this.timeMsPref);
  }
  clearIntervalTimer() {
    if (this.intervalID) {
      clearInterval(this.intervalID);
      delete this.intervalID;
    }
  }
  #register() {
    if (!window.IS_STORYBOOK) {
      XPCOMUtils.defineLazyPreferenceGetter(this, "timeMsPref", "browser.tabs.firefox-view.updateTimeMs", NOW_THRESHOLD_MS, () => {
        this.clearIntervalTimer();
        if (!this.isConnected) {
          return;
        }
        this.startIntervalTimer();
        this.requestUpdate();
      });
    }
  }
  connectedCallback() {
    super.connectedCallback();
    if (!this.updatesPaused && this.dateTimeFormat === "relative" && !window.IS_STORYBOOK) {
      this.startIntervalTimer();
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.clearIntervalTimer();
  }
  async getUpdateComplete() {
    await super.getUpdateComplete();
    await Promise.all(Array.from(this.rowEls).map(item => item.updateComplete));
  }
  onIntervalUpdate() {
    this.requestUpdate();
    Array.from(this.rowEls).forEach(fxviewTabRow => fxviewTabRow.requestUpdate());
  }

  /**
   * Focuses the expected element (either the link or button) within fxview-tab-row
   * The currently focused/active element ID within a row is stored in this.currentActiveElementId
   */
  handleFocusElementInRow(e) {
    let fxviewTabRow = e.target;
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
        fxviewTabRow.moveFocusLeft();
      } else {
        fxviewTabRow.moveFocusRight();
      }
    } else if (e.code == "ArrowLeft") {
      // Focus either the link or the button in the current row and
      // set this.currentActiveElementId to that element's ID
      e.preventDefault();
      if (document.dir == "rtl") {
        fxviewTabRow.moveFocusRight();
      } else {
        fxviewTabRow.moveFocusLeft();
      }
    }
  }
  focusPrevRow() {
    this.focusIndex(this.activeIndex - 1);
  }
  focusNextRow() {
    this.focusIndex(this.activeIndex + 1);
  }
  async focusIndex(index) {
    // Focus link or button of item
    if (lazy.virtualListEnabledPref) {
      let row = this.rootVirtualListEl.getItem(index);
      if (!row) {
        return;
      }
      let subList = this.rootVirtualListEl.getSubListForItem(index);
      if (!subList) {
        return;
      }
      this.activeIndex = index;

      // In Bug 1866845, these manual updates to the sublists should be removed
      // and scrollIntoView() should also be iterated on so that we aren't constantly
      // moving the focused item to the center of the viewport
      for (const sublist of Array.from(this.rootVirtualListEl.children)) {
        await sublist.requestUpdate();
        await sublist.updateComplete;
      }
      row.scrollIntoView({
        block: "center"
      });
      row.focus();
    } else if (index >= 0 && index < this.rowEls?.length) {
      this.rowEls[index].focus();
      this.activeIndex = index;
    }
  }
  shouldUpdate(changes) {
    if (changes.has("updatesPaused")) {
      if (this.updatesPaused) {
        this.clearIntervalTimer();
      }
    }
    return !this.updatesPaused;
  }
  itemTemplate = (tabItem, i) => {
    let time;
    if (tabItem.time || tabItem.closedAt) {
      let stringTime = (tabItem.time || tabItem.closedAt).toString();
      // Different APIs return time in different units, so we use
      // the length to decide if it's milliseconds or nanoseconds.
      if (stringTime.length === 16) {
        time = (tabItem.time || tabItem.closedAt) / 1000;
      } else {
        time = tabItem.time || tabItem.closedAt;
      }
    }
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`
      <fxview-tab-row
        ?active=${i == this.activeIndex}
        ?compact=${this.compactRows}
        .currentActiveElementId=${this.currentActiveElementId}
        .favicon=${tabItem.icon}
        .primaryL10nId=${tabItem.primaryL10nId}
        .primaryL10nArgs=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(tabItem.primaryL10nArgs)}
        .secondaryL10nId=${tabItem.secondaryL10nId}
        .secondaryL10nArgs=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(tabItem.secondaryL10nArgs)}
        .tertiaryL10nId=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(tabItem.tertiaryL10nId)}
        .tertiaryL10nArgs=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(tabItem.tertiaryL10nArgs)}
        .secondaryActionClass=${this.secondaryActionClass}
        .tertiaryActionClass=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.tertiaryActionClass)}
        .sourceClosedId=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(tabItem.sourceClosedId)}
        .sourceWindowId=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(tabItem.sourceWindowId)}
        .closedId=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(tabItem.closedId || tabItem.closedId)}
        role="listitem"
        .tabElement=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(tabItem.tabElement)}
        .time=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(time)}
        .title=${tabItem.title}
        .url=${tabItem.url}
        .searchQuery=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.searchQuery)}
        .timeMsPref=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.timeMsPref)}
        .hasPopup=${this.hasPopup}
        .dateTimeFormat=${this.dateTimeFormat}
      ></fxview-tab-row>
    `;
  };
  stylesheets() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<link
      rel="stylesheet"
      href="${browser_components_firefoxview_fxview_tab_list_css__WEBPACK_IMPORTED_MODULE_1__}"
    />`;
  }
  render() {
    if (this.searchQuery && !this.tabItems.length) {
      return this.emptySearchResultsTemplate();
    }
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`
      ${this.stylesheets()}
      <div
        id="fxview-tab-list"
        class="fxview-tab-list"
        data-l10n-id="firefoxview-tabs"
        role="list"
        @keydown=${this.handleFocusElementInRow}
      >
        ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.when)(lazy.virtualListEnabledPref, () => chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`
            <virtual-list
              .activeIndex=${this.activeIndex}
              .items=${this.tabItems}
              .template=${this.itemTemplate}
            ></virtual-list>
          `, () => chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`${this.tabItems.map((tabItem, i) => this.itemTemplate(tabItem, i))}`)}
      </div>
      <slot name="menu"></slot>
    `;
  }
  emptySearchResultsTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html` <fxview-empty-state
      class="search-results"
      headerLabel="firefoxview-search-results-empty"
      .headerArgs=${{
      query: this.searchQuery
    }}
      isInnerCard
    >
    </fxview-empty-state>`;
  }
}
customElements.define("fxview-tab-list", FxviewTabListBase);

/**
 * A tab item that displays favicon, title, url, and time of last access
 *
 * @property {boolean} active - Should current item have focus on keydown
 * @property {boolean} compact - Whether to hide the URL and date/time for this tab.
 * @property {string} currentActiveElementId - ID of currently focused element within each tab item
 * @property {string} dateTimeFormat - Expected format for date and/or time
 * @property {string} hasPopup - The aria-haspopup attribute for the secondary action, if required
 * @property {number} closedId - The tab ID for when the tab item was closed.
 * @property {number} sourceClosedId - The closedId of the closed window its from if applicable
 * @property {number} sourceWindowId - The sessionstore id of the window its from if applicable
 * @property {string} favicon - The favicon for the tab item.
 * @property {string} primaryL10nId - The l10n id used for the primary action element
 * @property {string} primaryL10nArgs - The l10n args used for the primary action element
 * @property {string} secondaryL10nId - The l10n id used for the secondary action button
 * @property {string} secondaryL10nArgs - The l10n args used for the secondary action element
 * @property {string} secondaryActionClass - The class used to style the secondary action element
 * @property {string} tertiaryL10nId - The l10n id used for the tertiary action button
 * @property {string} tertiaryL10nArgs - The l10n args used for the tertiary action element
 * @property {string} tertiaryActionClass - The class used to style the tertiary action element
 * @property {object} tabElement - The MozTabbrowserTab element for the tab item.
 * @property {number} time - The timestamp for when the tab was last accessed.
 * @property {string} title - The title for the tab item.
 * @property {string} url - The url for the tab item.
 * @property {number} timeMsPref - The frequency in milliseconds of updates to relative time
 * @property {string} searchQuery - The query string to highlight, if provided.
 */
class FxviewTabRowBase extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.MozLitElement {
  static properties = {
    active: {
      type: Boolean
    },
    compact: {
      type: Boolean
    },
    currentActiveElementId: {
      type: String
    },
    dateTimeFormat: {
      type: String
    },
    favicon: {
      type: String
    },
    hasPopup: {
      type: String
    },
    primaryL10nId: {
      type: String
    },
    primaryL10nArgs: {
      type: String
    },
    secondaryL10nId: {
      type: String
    },
    secondaryL10nArgs: {
      type: String
    },
    secondaryActionClass: {
      type: String
    },
    tertiaryL10nId: {
      type: String
    },
    tertiaryL10nArgs: {
      type: String
    },
    tertiaryActionClass: {
      type: String
    },
    closedId: {
      type: Number
    },
    sourceClosedId: {
      type: Number
    },
    sourceWindowId: {
      type: String
    },
    tabElement: {
      type: Object
    },
    time: {
      type: Number
    },
    title: {
      type: String
    },
    timeMsPref: {
      type: Number
    },
    url: {
      type: String
    },
    searchQuery: {
      type: String
    }
  };
  constructor() {
    super();
    this.active = false;
    this.currentActiveElementId = "fxview-tab-row-main";
  }
  static queries = {
    mainEl: "#fxview-tab-row-main",
    secondaryButtonEl: "#fxview-tab-row-secondary-button:not([hidden])",
    tertiaryButtonEl: "#fxview-tab-row-tertiary-button"
  };
  get currentFocusable() {
    let focusItem = this.renderRoot.getElementById(this.currentActiveElementId);
    if (!focusItem) {
      focusItem = this.renderRoot.getElementById("fxview-tab-row-main");
    }
    return focusItem;
  }
  focus() {
    this.currentFocusable.focus();
  }
  focusSecondaryButton() {
    let tabList = this.getRootNode().host;
    this.secondaryButtonEl.focus();
    tabList.currentActiveElementId = this.secondaryButtonEl.id;
  }
  focusTertiaryButton() {
    let tabList = this.getRootNode().host;
    this.tertiaryButtonEl.focus();
    tabList.currentActiveElementId = this.tertiaryButtonEl.id;
  }
  focusLink() {
    let tabList = this.getRootNode().host;
    this.mainEl.focus();
    tabList.currentActiveElementId = this.mainEl.id;
  }
  moveFocusRight() {
    if (this.currentActiveElementId === "fxview-tab-row-main") {
      this.focusSecondaryButton();
    } else if (this.tertiaryButtonEl && this.currentActiveElementId === "fxview-tab-row-secondary-button") {
      this.focusTertiaryButton();
    }
  }
  moveFocusLeft() {
    if (this.currentActiveElementId === "fxview-tab-row-tertiary-button") {
      this.focusSecondaryButton();
    } else {
      this.focusLink();
    }
  }
  dateFluentArgs(timestamp, dateTimeFormat) {
    if (dateTimeFormat === "date" || dateTimeFormat === "dateTime") {
      return JSON.stringify({
        date: timestamp
      });
    }
    return null;
  }
  dateFluentId(timestamp, dateTimeFormat, _nowThresholdMs = NOW_THRESHOLD_MS) {
    if (!timestamp) {
      return null;
    }
    if (dateTimeFormat === "relative") {
      const elapsed = Date.now() - timestamp;
      if (elapsed <= _nowThresholdMs || !lazy.relativeTimeFormat) {
        // Use a different string for very recent timestamps
        return "fxviewtabrow-just-now-timestamp";
      }
      return null;
    } else if (dateTimeFormat === "date" || dateTimeFormat === "dateTime") {
      return "fxviewtabrow-date";
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
      return "fxviewtabrow-time";
    }
    return null;
  }
  formatURIForDisplay(uriString) {
    return !window.IS_STORYBOOK ? lazy.BrowserUtils.formatURIStringForDisplay(uriString) : uriString;
  }
  getImageUrl(icon, targetURI) {
    if (window.IS_STORYBOOK) {
      return `chrome://global/skin/icons/defaultFavicon.svg`;
    }
    if (!icon) {
      if (targetURI?.startsWith("moz-extension")) {
        return "chrome://mozapps/skin/extensions/extension.svg";
      }
      return `chrome://global/skin/icons/defaultFavicon.svg`;
    }
    // If the icon is not for website (doesn't begin with http), we
    // display it directly. Otherwise we go through the page-icon
    // protocol to try to get a cached version. We don't load
    // favicons directly.
    if (icon.startsWith("http")) {
      return `page-icon:${targetURI}`;
    }
    return icon;
  }
  primaryActionHandler(event) {
    if (event.type == "click" && !event.altKey || event.type == "keydown" && event.code == "Enter" || event.type == "keydown" && event.code == "Space") {
      event.preventDefault();
      if (!window.IS_STORYBOOK) {
        this.dispatchEvent(new CustomEvent("fxview-tab-list-primary-action", {
          bubbles: true,
          composed: true,
          detail: {
            originalEvent: event,
            item: this
          }
        }));
      }
    }
  }
  secondaryActionHandler(event) {
    if (event.type == "click" && event.detail && !event.altKey ||
    // detail=0 is from keyboard
    event.type == "click" && !event.detail) {
      event.preventDefault();
      this.dispatchEvent(new CustomEvent("fxview-tab-list-secondary-action", {
        bubbles: true,
        composed: true,
        detail: {
          originalEvent: event,
          item: this
        }
      }));
    }
  }
  tertiaryActionHandler(event) {
    if (event.type == "click" && event.detail && !event.altKey ||
    // detail=0 is from keyboard
    event.type == "click" && !event.detail) {
      event.preventDefault();
      this.dispatchEvent(new CustomEvent("fxview-tab-list-tertiary-action", {
        bubbles: true,
        composed: true,
        detail: {
          originalEvent: event,
          item: this
        }
      }));
    }
  }

  /**
   * Find all matches of query within the given string, and compute the result
   * to be rendered.
   *
   * @param {string} query
   * @param {string} string
   */
  highlightSearchMatches(query, string) {
    const fragments = [];
    const regex = RegExp((0,_search_helpers_mjs__WEBPACK_IMPORTED_MODULE_4__.escapeRegExp)(query), "dgi");
    let prevIndexEnd = 0;
    let result;
    while ((result = regex.exec(string)) !== null) {
      const [indexStart, indexEnd] = result.indices[0];
      fragments.push(string.substring(prevIndexEnd, indexStart));
      fragments.push(chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<strong>${string.substring(indexStart, indexEnd)}</strong>`);
      prevIndexEnd = regex.lastIndex;
    }
    fragments.push(string.substring(prevIndexEnd));
    return fragments;
  }
  stylesheets() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<link
      rel="stylesheet"
      href="${browser_components_firefoxview_fxview_tab_row_css__WEBPACK_IMPORTED_MODULE_0__}"
    />`;
  }
  faviconTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<span
      class="fxview-tab-row-favicon icon"
      id="fxview-tab-row-favicon"
      style=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.styleMap)({
      backgroundImage: `url(${this.getImageUrl(this.favicon, this.url)})`
    })}
    ></span>`;
  }
  titleTemplate() {
    const title = this.title;
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<span
      class="fxview-tab-row-title text-truncated-ellipsis"
      id="fxview-tab-row-title"
      dir="auto"
    >
      ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.when)(this.searchQuery, () => this.highlightSearchMatches(this.searchQuery, title), () => title)}
    </span>`;
  }
  urlTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<span
      class="fxview-tab-row-url text-truncated-ellipsis"
      id="fxview-tab-row-url"
    >
      ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.when)(this.searchQuery, () => this.highlightSearchMatches(this.searchQuery, this.formatURIForDisplay(this.url)), () => this.formatURIForDisplay(this.url))}
    </span>`;
  }
  dateTemplate() {
    const relativeString = this.relativeTime(this.time, this.dateTimeFormat, !window.IS_STORYBOOK ? this.timeMsPref : NOW_THRESHOLD_MS);
    const dateString = this.dateFluentId(this.time, this.dateTimeFormat, !window.IS_STORYBOOK ? this.timeMsPref : NOW_THRESHOLD_MS);
    const dateArgs = this.dateFluentArgs(this.time, this.dateTimeFormat);
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<span class="fxview-tab-row-date" id="fxview-tab-row-date">
      <span
        ?hidden=${relativeString || !dateString}
        data-l10n-id=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(dateString)}
        data-l10n-args=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(dateArgs)}
      ></span>
      <span ?hidden=${!relativeString}>${relativeString}</span>
    </span>`;
  }
  timeTemplate() {
    const timeString = this.timeFluentId(this.dateTimeFormat);
    const time = this.time;
    const timeArgs = JSON.stringify({
      time
    });
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<span
      class="fxview-tab-row-time"
      id="fxview-tab-row-time"
      ?hidden=${!timeString}
      data-timestamp=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.time)}
      data-l10n-id=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(timeString)}
      data-l10n-args=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(timeArgs)}
    >
    </span>`;
  }
  getIconSrc(actionClass) {
    let iconSrc;
    switch (actionClass) {
      case "delete-button":
        iconSrc = "chrome://global/skin/icons/delete.svg";
        break;
      case "dismiss-button":
        iconSrc = "chrome://global/skin/icons/close.svg";
        break;
      case "options-button":
        iconSrc = "chrome://global/skin/icons/more.svg";
        break;
      default:
        iconSrc = null;
        break;
    }
    return iconSrc;
  }
  secondaryButtonTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.when)(this.secondaryL10nId && this.secondaryActionHandler, () => chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<moz-button
          type="icon ghost"
          class=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.classMap)({
      "fxview-tab-row-button": true,
      [this.secondaryActionClass]: this.secondaryActionClass
    })}
          id="fxview-tab-row-secondary-button"
          data-l10n-id=${this.secondaryL10nId}
          data-l10n-args=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.secondaryL10nArgs)}
          aria-haspopup=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.hasPopup)}
          @click=${this.secondaryActionHandler}
          tabindex="${this.active && this.currentActiveElementId === "fxview-tab-row-secondary-button" ? "0" : "-1"}"
          iconSrc=${this.getIconSrc(this.secondaryActionClass)}
        ></moz-button>`)}`;
  }
  tertiaryButtonTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.when)(this.tertiaryL10nId && this.tertiaryActionHandler, () => chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<moz-button
          type="icon ghost"
          class=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.classMap)({
      "fxview-tab-row-button": true,
      [this.tertiaryActionClass]: this.tertiaryActionClass
    })}
          id="fxview-tab-row-tertiary-button"
          data-l10n-id=${this.tertiaryL10nId}
          data-l10n-args=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.tertiaryL10nArgs)}
          aria-haspopup=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.hasPopup)}
          @click=${this.tertiaryActionHandler}
          tabindex="${this.active && this.currentActiveElementId === "fxview-tab-row-tertiary-button" ? "0" : "-1"}"
          iconSrc=${this.getIconSrc(this.tertiaryActionClass)}
        ></moz-button>`)}`;
  }
}
class FxviewTabRow extends FxviewTabRowBase {
  render() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`
      ${this.stylesheets()}
      <a
        href=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.url)}
        class="fxview-tab-row-main"
        id="fxview-tab-row-main"
        tabindex=${this.active && this.currentActiveElementId === "fxview-tab-row-main" ? "0" : "-1"}
        data-l10n-id=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.primaryL10nId)}
        data-l10n-args=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.primaryL10nArgs)}
        @click=${this.primaryActionHandler}
        @keydown=${this.primaryActionHandler}
        title=${!this.primaryL10nId ? this.url : null}
      >
        ${this.faviconTemplate()} ${this.titleTemplate()}
        ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.when)(!this.compact, () => chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`${this.urlTemplate()} ${this.dateTemplate()}
            ${this.timeTemplate()}`)}
      </a>
      ${this.secondaryButtonTemplate()} ${this.tertiaryButtonTemplate()}
    `;
  }
}
customElements.define("fxview-tab-row", FxviewTabRow);
class VirtualList extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.MozLitElement {
  static properties = {
    items: {
      type: Array
    },
    template: {
      type: Function
    },
    activeIndex: {
      type: Number
    },
    itemOffset: {
      type: Number
    },
    maxRenderCountEstimate: {
      type: Number,
      state: true
    },
    itemHeightEstimate: {
      type: Number,
      state: true
    },
    isAlwaysVisible: {
      type: Boolean
    },
    isVisible: {
      type: Boolean,
      state: true
    },
    isSubList: {
      type: Boolean
    },
    pinnedTabsIndexOffset: {
      type: Number
    }
  };
  createRenderRoot() {
    return this;
  }
  constructor() {
    super();
    this.activeIndex = 0;
    this.itemOffset = 0;
    this.pinnedTabsIndexOffset = 0;
    this.items = [];
    this.subListItems = [];
    this.itemHeightEstimate = FXVIEW_ROW_HEIGHT_PX;
    this.maxRenderCountEstimate = Math.max(40, 2 * Math.ceil(window.innerHeight / this.itemHeightEstimate));
    this.isSubList = false;
    this.isVisible = false;
    this.intersectionObserver = new IntersectionObserver(([entry]) => {
      this.isVisible = entry.isIntersecting;
    }, {
      root: this.ownerDocument
    });
    this.selfResizeObserver = new ResizeObserver(() => {
      // Trigger the intersection observer once the tab rows have rendered
      this.triggerIntersectionObserver();
    });
    this.childResizeObserver = new ResizeObserver(([entry]) => {
      if (entry.contentRect?.height > 0) {
        // Update properties on top-level virtual-list
        this.parentElement.itemHeightEstimate = entry.contentRect.height;
        this.parentElement.maxRenderCountEstimate = Math.max(40, 2 * Math.ceil(window.innerHeight / this.itemHeightEstimate));
      }
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.intersectionObserver.disconnect();
    this.childResizeObserver.disconnect();
    this.selfResizeObserver.disconnect();
  }
  triggerIntersectionObserver() {
    this.intersectionObserver.unobserve(this);
    this.intersectionObserver.observe(this);
  }
  getSubListForItem(index) {
    if (this.isSubList) {
      throw new Error("Cannot get sublist for item");
    }
    return this.children[parseInt(index / this.maxRenderCountEstimate, 10)];
  }
  getItem(index) {
    if (!this.isSubList) {
      return this.getSubListForItem(index)?.getItem(index % this.maxRenderCountEstimate);
    }
    return this.children[index];
  }
  willUpdate(changedProperties) {
    if (changedProperties.has("items") && !this.isSubList) {
      this.subListItems = [];
      for (let i = 0; i < this.items.length; i += this.maxRenderCountEstimate) {
        this.subListItems.push(this.items.slice(i, i + this.maxRenderCountEstimate));
      }
    }
  }
  recalculateAfterWindowResize() {
    this.maxRenderCountEstimate = Math.max(40, 2 * Math.ceil(window.innerHeight / this.itemHeightEstimate));
  }
  firstUpdated() {
    this.intersectionObserver.observe(this);
    this.selfResizeObserver.observe(this);
    if (this.isSubList && this.children[0]) {
      this.childResizeObserver.observe(this.children[0]);
    }
  }
  updated(changedProperties) {
    this.updateListHeight(changedProperties);
    if (changedProperties.has("items") && !this.isSubList) {
      this.triggerIntersectionObserver();
    }
  }
  updateListHeight(changedProperties) {
    if (changedProperties.has("isAlwaysVisible") || changedProperties.has("isVisible")) {
      this.style.height = this.isAlwaysVisible || this.isVisible ? "auto" : `${this.items.length * this.itemHeightEstimate}px`;
    }
  }
  get renderItems() {
    return this.isSubList ? this.items : this.subListItems;
  }
  subListTemplate = (data, i) => {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<virtual-list
      .template=${this.template}
      .items=${data}
      .itemHeightEstimate=${this.itemHeightEstimate}
      .itemOffset=${i * this.maxRenderCountEstimate + this.pinnedTabsIndexOffset}
      .isAlwaysVisible=${i == parseInt(this.activeIndex / this.maxRenderCountEstimate, 10)}
      isSubList
    ></virtual-list>`;
  };
  itemTemplate = (data, i) => this.template(data, this.itemOffset + i + this.pinnedTabsIndexOffset);
  render() {
    if (this.isAlwaysVisible || this.isVisible) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`
        ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.repeat)(this.renderItems, (data, i) => i, this.isSubList ? this.itemTemplate : this.subListTemplate)}
      `;
    }
    return "";
  }
}
customElements.define("virtual-list", VirtualList);

/***/ }),

/***/ 64930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "escapeRegExp": () => (/* binding */ escapeRegExp),
/* harmony export */   "searchTabList": () => (/* binding */ searchTabList)
/* harmony export */ });
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * Escape special characters for regular expressions from a string.
 *
 * @param {string} string
 *   The string to sanitize.
 * @returns {string} The sanitized string.
 */
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Search a tab list for items that match the given query.
 */
function searchTabList(query, tabList) {
  const regex = RegExp(escapeRegExp(query), "i");
  return tabList.filter(({
    title,
    url
  }) => regex.test(title) || regex.test(url));
}

/***/ }),

/***/ 15872:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozButton)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_button_moz_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54078);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45717);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73689);
/* harmony import */ var chrome_global_content_elements_moz_label_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58825);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




// eslint-disable-next-line import/no-unassigned-import


/**
 * A button with multiple types and two sizes.
 *
 * @tagname moz-button
 * @property {string} label - The button's label, will be overridden by slotted content.
 * @property {string} type - The button type.
 *   Options: default, primary, destructive, icon, icon ghost, ghost.
 * @property {string} size - The button size.
 *   Options: default, small.
 * @property {boolean} disabled - The disabled state.
 * @property {string} title - The button's title attribute, used in shadow DOM and therefore not as an attribute on moz-button.
 * @property {string} titleAttribute - Internal, map title attribute to the title JS property.
 * @property {string} tooltipText - Set the title property, the title attribute will be used first.
 * @property {string} ariaLabel - The button's arial-label attribute, used in shadow DOM and therefore not as an attribute on moz-button.
 * @property {string} iconSrc - Path to the icon that should be displayed in the button.
 * @property {string} ariaLabelAttribute - Internal, map aria-label attribute to the ariaLabel JS property.
 * @property {string} hasVisibleLabel - Internal, tracks whether or not the button has a visible label.
 * @property {HTMLButtonElement} buttonEl - The internal button element in the shadow DOM.
 * @property {HTMLButtonElement} slotEl - The internal slot element in the shadow DOM.
 * @cssproperty [--button-outer-padding-inline] - Used to set the outer inline padding of toolbar style buttons
 * @csspropert [--button-outer-padding-block] - Used to set the outer block padding of toolbar style buttons.
 * @cssproperty [--button-outer-padding-inline-start] - Used to set the outer inline-start padding of toolbar style buttons
 * @cssproperty [--button-outer-padding-inline-end] - Used to set the outer inline-end padding of toolbar style buttons
 * @cssproperty [--button-outer-padding-block-start] - Used to set the outer block-start padding of toolbar style buttons
 * @cssproperty [--button-outer-padding-block-end] - Used to set the outer block-end padding of toolbar style buttons
 * @slot default - The button's content, overrides label property.
 * @fires click - The click event.
 */
class MozButton extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static shadowRootOptions = {
    ..._lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement.shadowRootOptions,
    delegatesFocus: true
  };
  static properties = {
    label: {
      type: String,
      reflect: true,
      fluent: true
    },
    type: {
      type: String,
      reflect: true
    },
    size: {
      type: String,
      reflect: true
    },
    disabled: {
      type: Boolean,
      reflect: true
    },
    title: {
      type: String,
      mapped: true
    },
    tooltipText: {
      type: String,
      fluent: true
    },
    ariaLabel: {
      type: String,
      mapped: true
    },
    iconSrc: {
      type: String
    },
    hasVisibleLabel: {
      type: Boolean,
      state: true
    },
    accessKey: {
      type: String,
      mapped: true,
      fluent: true
    }
  };
  static queries = {
    buttonEl: "button",
    slotEl: "slot",
    backgroundEl: ".button-background"
  };
  constructor() {
    super();
    this.type = "default";
    this.size = "default";
    this.disabled = false;
    this.hasVisibleLabel = !!this.label;
  }

  // Delegate clicks on host to the button element.
  click() {
    this.buttonEl.click();
  }
  checkForLabelText() {
    this.hasVisibleLabel = this.slotEl?.assignedNodes().some(node => node.textContent.trim());
  }
  labelTemplate() {
    if (this.label) {
      return this.label;
    }
    return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`<slot @slotchange=${this.checkForLabelText}></slot>`;
  }
  render() {
    return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_button_moz_button_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <button
        ?disabled=${this.disabled}
        title=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.title || this.tooltipText)}
        aria-label=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.ariaLabel)}
        accesskey=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.accessKey)}
      >
        <span
          class=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.classMap)({
      labelled: this.label || this.hasVisibleLabel,
      "button-background": true
    })}
          part="button"
          type=${this.type}
          size=${this.size}
        >
          ${this.iconSrc ? _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`<img src=${this.iconSrc} role="presentation" />` : ""}
          <label
            is="moz-label"
            shownaccesskey=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.accessKey)}
            part="moz-button-label"
          >
            ${this.labelTemplate()}
          </label>
        </span>
      </button>
    `;
  }
}
customElements.define("moz-button", MozButton);

/***/ }),

/***/ 58825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var toolkit_content_widgets_moz_label_moz_label_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83230);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * An extension of the label element that provides accesskey styling and
 * formatting as well as click handling logic.
 *
 * @tagname moz-label
 * @attribute {string} accesskey - Key used for keyboard access.
 * @attribute {string} shownaccesskey - Key to underline but not set as
 *   accesskey, this is useful to work around an issue where multiple accesskeys
 *   on the same element cause it to be focused isntead of activated.
 */
class MozTextLabel extends HTMLLabelElement {
  #insertSeparator = false;
  #alwaysAppendAccessKey = false;
  #lastFormattedAccessKey = null;
  #observer = null;

  // Default to underlining accesskeys for Windows and Linux.
  static #underlineAccesskey = !navigator.platform.includes("Mac");
  static get observedAttributes() {
    return ["accesskey", "shownaccesskey"];
  }
  static stylesheetUrl = toolkit_content_widgets_moz_label_moz_label_css__WEBPACK_IMPORTED_MODULE_0__;
  constructor() {
    super();
    this.#register();
    this.addEventListener("click", this._onClick);
  }
  #register() {
    if (window.IS_STORYBOOK) {
      MozTextLabel.#underlineAccesskey = true;
    } else if (typeof Services !== "undefined") {
      MozTextLabel.#underlineAccesskey = !!Services.prefs.getIntPref("ui.key.menuAccessKey", Number(!navigator.platform.includes("Mac")));
      if (MozTextLabel.#underlineAccesskey) {
        try {
          const nsIPrefLocalizedString = Ci.nsIPrefLocalizedString;
          const prefNameInsertSeparator = "intl.menuitems.insertseparatorbeforeaccesskeys";
          const prefNameAlwaysAppendAccessKey = "intl.menuitems.alwaysappendaccesskeys";
          let val = Services.prefs.getComplexValue(prefNameInsertSeparator, nsIPrefLocalizedString).data;
          this.#insertSeparator = val == "true";
          val = Services.prefs.getComplexValue(prefNameAlwaysAppendAccessKey, nsIPrefLocalizedString).data;
          this.#alwaysAppendAccessKey = val == "true";
        } catch (e) {
          this.#insertSeparator = this.#alwaysAppendAccessKey = true;
        }
      }
    }
  }
  connectedCallback() {
    this.#setStyles();
    this.formatAccessKey();
    if (!this.#observer) {
      this.#observer = new MutationObserver(() => {
        this.formatAccessKey();
      }).observe(this, {
        characterData: true,
        childList: true,
        subtree: true
      });
    }
  }
  disconnectedCallback() {
    if (this.#observer) {
      this.#observer.disconnect();
      this.#observer = null;
    }
  }

  // Bug 1820588 - we may want to generalize this into
  // MozHTMLElement.insertCssIfNeeded(style)
  #setStyles() {
    let root = this.getRootNode();
    if (root.__mozLabelCssAdded) {
      return;
    }
    let container = root.head ?? root;
    for (let link of container.querySelectorAll("link")) {
      if (link.getAttribute("href") == this.constructor.stylesheetUrl) {
        return;
      }
    }
    let style = document.createElement("link");
    style.rel = "stylesheet";
    style.href = this.constructor.stylesheetUrl;
    container.appendChild(style);
    root.__mozLabelCssAdded = true;
  }
  set textContent(val) {
    super.textContent = val;
    this.#lastFormattedAccessKey = null;
    this.formatAccessKey();
  }
  get textContent() {
    return super.textContent;
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (oldValue == newValue) {
      return;
    }

    // Note that this is only happening when "accesskey" attribute changes.
    this.formatAccessKey();
  }
  _onClick() {
    let controlElement = this.labeledControlElement;
    if (!controlElement || this.disabled) {
      return;
    }
    controlElement.focus();
    if ((controlElement.localName == "checkbox" || controlElement.localName == "radio") && controlElement.getAttribute("disabled") == "true") {
      return;
    }
    if (controlElement.localName == "checkbox") {
      controlElement.checked = !controlElement.checked;
    } else if (controlElement.localName == "radio") {
      controlElement.control.selectedItem = controlElement;
    }
  }
  set accessKey(val) {
    this.setAttribute("accesskey", val);
    let control = this.labeledControlElement;
    if (control) {
      control.setAttribute("accesskey", val);
    }
  }
  get accessKey() {
    let accessKey = this.getAttribute("accesskey");
    return accessKey ? accessKey[0] : null;
  }
  get labeledControlElement() {
    let control = this.control;
    return control ? document.getElementById(control) : null;
  }
  set control(val) {
    this.setAttribute("control", val);
  }
  get control() {
    return this.getAttribute("control");
  }

  // This is used to match the rendering of accesskeys from nsTextBoxFrame.cpp (i.e. when the
  // label uses [value]). So this is just for when we have textContent.
  formatAccessKey() {
    // Skip doing any DOM manipulation whenever possible:
    let accessKey = this.accessKey || this.getAttribute("shownaccesskey");
    if (!MozTextLabel.#underlineAccesskey || this.#lastFormattedAccessKey == accessKey || !this.textContent || !this.textContent.trim()) {
      return;
    }
    this.#lastFormattedAccessKey = accessKey;
    if (this.accessKeySpan) {
      // Clear old accesskey
      mergeElement(this.accessKeySpan);
      this.accessKeySpan = null;
    }
    if (this.hiddenColon) {
      mergeElement(this.hiddenColon);
      this.hiddenColon = null;
    }
    if (this.accessKeyParens) {
      this.accessKeyParens.remove();
      this.accessKeyParens = null;
    }

    // If we used to have an accessKey but not anymore, we're done here
    if (!accessKey) {
      return;
    }
    let labelText = this.textContent;
    let accessKeyIndex = -1;
    if (!this.#alwaysAppendAccessKey) {
      accessKeyIndex = labelText.indexOf(accessKey);
      if (accessKeyIndex < 0) {
        // Try again in upper case
        accessKeyIndex = labelText.toUpperCase().indexOf(accessKey.toUpperCase());
      }
    } else if (labelText.endsWith(`(${accessKey.toUpperCase()})`)) {
      accessKeyIndex = labelText.length - (1 + accessKey.length); // = index of accessKey.
    }
    const HTML_NS = "http://www.w3.org/1999/xhtml";
    this.accessKeySpan = document.createElementNS(HTML_NS, "span");
    this.accessKeySpan.className = "accesskey";

    // Note that if you change the following code, see the comment of
    // nsTextBoxFrame::UpdateAccessTitle.

    // If accesskey is in the string, underline it:
    if (accessKeyIndex >= 0) {
      wrapChar(this, this.accessKeySpan, accessKeyIndex);
      return;
    }

    // If accesskey is not in string, append in parentheses
    // If end is colon, we should insert before colon.
    // i.e., "label:" -> "label(X):"
    let colonHidden = false;
    if (/:$/.test(labelText)) {
      labelText = labelText.slice(0, -1);
      this.hiddenColon = document.createElementNS(HTML_NS, "span");
      this.hiddenColon.className = "hiddenColon";
      this.hiddenColon.style.display = "none";
      // Hide the last colon by using span element.
      // I.e., label<span style="display:none;">:</span>
      wrapChar(this, this.hiddenColon, labelText.length);
      colonHidden = true;
    }
    // If end is space(U+20),
    // we should not add space before parentheses.
    let endIsSpace = false;
    if (/ $/.test(labelText)) {
      endIsSpace = true;
    }
    this.accessKeyParens = document.createElementNS("http://www.w3.org/1999/xhtml", "span");
    this.appendChild(this.accessKeyParens);
    if (this.#insertSeparator && !endIsSpace) {
      this.accessKeyParens.textContent = " (";
    } else {
      this.accessKeyParens.textContent = "(";
    }
    this.accessKeySpan.textContent = accessKey.toUpperCase();
    this.accessKeyParens.appendChild(this.accessKeySpan);
    if (!colonHidden) {
      this.accessKeyParens.appendChild(document.createTextNode(")"));
    } else {
      this.accessKeyParens.appendChild(document.createTextNode("):"));
    }
  }
}
customElements.define("moz-label", MozTextLabel, {
  extends: "label"
});
function mergeElement(element) {
  // If the element has been removed already, return:
  if (!element.isConnected) {
    return;
  }
  // `isInstance` isn't available to web content (i.e. Storybook) so we need to
  // fallback to using `instanceof`.
  if (Text.hasOwnProperty("isInstance") ? Text.isInstance(element.previousSibling) :
  // eslint-disable-next-line mozilla/use-isInstance
  element.previousSibling instanceof Text) {
    element.previousSibling.appendData(element.textContent);
  } else {
    element.parentNode.insertBefore(element.firstChild, element);
  }
  element.remove();
}
function wrapChar(parentNode, element, index) {
  let treeWalker = document.createNodeIterator(parentNode, NodeFilter.SHOW_TEXT, null);
  let node = treeWalker.nextNode();
  while (index >= node.length) {
    index -= node.length;
    node = treeWalker.nextNode();
  }
  if (index) {
    node = node.splitText(index);
  }
  node.parentNode.insertBefore(element, node);
  if (node.length > 1) {
    node.splitText(1);
  }
  element.appendChild(node);
}

/***/ }),

/***/ 24520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateAndTime": () => (/* binding */ DateAndTime),
/* harmony export */   "DateOnly": () => (/* binding */ DateOnly),
/* harmony export */   "RecentlyClosed": () => (/* binding */ RecentlyClosed),
/* harmony export */   "RelativeTime": () => (/* binding */ RelativeTime),
/* harmony export */   "TimeOnly": () => (/* binding */ TimeOnly),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45717);
/* harmony import */ var browser_components_firefoxview_fxview_tab_list_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54090);
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



var DATE_TIME_FORMATS = {
  relative: "relative",
  dateTime: "dateTime",
  date: "date",
  time: "time"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/Firefox View/Tab List",
  component: "fxview-tab-list",
  argTypes: {
    dateTimeFormat: {
      options: Object.keys(DATE_TIME_FORMATS),
      mapping: DATE_TIME_FORMATS,
      control: {
        type: "select"
      }
    }
  }
});
var Template = function Template(_ref) {
  var listClass = _ref.listClass,
    dateTimeFormat = _ref.dateTimeFormat,
    hasPopup = _ref.hasPopup,
    maxTabsLength = _ref.maxTabsLength,
    primaryAction = _ref.primaryAction,
    secondaryAction = _ref.secondaryAction,
    secondaryActionClass = _ref.secondaryActionClass,
    tabItems = _ref.tabItems;
  return (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  <style>\n    main {\n      max-width: 750px;\n    }\n    fxview-tab-list.menu::part(secondary-button) {\n      background-image: url(\"chrome://global/skin/icons/more.svg\");\n    }\n    fxview-tab-list.dismiss::part(secondary-button) {\n      background-image: url(\"chrome://global/skin/icons/close.svg\");\n    }\n    :host panel-item::part(button) {\n      padding-inline-start: 12px;\n      cursor: pointer;\n    }\n  </style>\n  <main>\n    <fxview-tab-list\n      class=", "\n      .hasPopup=", "\n      .dateTimeFormat=", "\n      .maxTabsLength=", "\n      .tabItems=", "\n      .updatesPaused=", "\n      .secondaryActionClass=", "\n      @fxview-tab-list-secondary-action=", "\n      @fxview-tab-list-primary-action=", "\n    >\n      <panel-list slot=\"menu\">\n        <panel-item data-l10n-id=\"fxviewtabrow-delete\"></panel-item>\n        <panel-item\n          data-l10n-id=\"fxviewtabrow-forget-about-this-site\"\n        ></panel-item>\n        <hr />\n        <panel-item data-l10n-id=\"fxviewtabrow-open-in-window\"></panel-item>\n        <panel-item\n          data-l10n-id=\"fxviewtabrow-open-in-private-window\"\n        ></panel-item>\n        <hr />\n        <panel-item data-l10n-id=\"fxviewtabrow-add-bookmark\"></panel-item>\n        <panel-item data-l10n-id=\"fxviewtabrow-save-to-pocket\"></panel-item>\n        <panel-item data-l10n-id=\"fxviewtabrow-copy-link\"></panel-item>\n      </panel-list>\n    </fxview-tab-list>\n  </main>\n"])), listClass, hasPopup, dateTimeFormat, maxTabsLength, tabItems, false, secondaryActionClass, secondaryAction, primaryAction);
};
var MAX_TABS_LENGTH = 25;
var secondaryAction = function secondaryAction(e) {
  e.target.querySelector("panel-list").toggle(e.detail.originalEvent);
};
var primaryAction = function primaryAction() {
  // Open in new tab
};
var tabItems = [{
  icon: "chrome://global/skin/icons/defaultFavicon.svg",
  title: "Example Domain",
  url: "example.net",
  time: 1678141738136,
  primaryL10nId: "fxviewtabrow-tabs-list-tab",
  primaryL10nArgs: JSON.stringify({
    targetURI: "example.net"
  }),
  secondaryL10nId: "fxviewtabrow-options-menu-button",
  secondaryL10nArgs: JSON.stringify({
    tabTitle: "Example Domain"
  })
}, {
  icon: "chrome://global/skin/icons/defaultFavicon.svg",
  title: "Example Domain",
  url: "example.org",
  time: 1678141738136,
  primaryL10nId: "fxviewtabrow-tabs-list-tab",
  primaryL10nArgs: JSON.stringify({
    targetURI: "example.org"
  }),
  secondaryL10nId: "fxviewtabrow-options-menu-button",
  secondaryL10nArgs: JSON.stringify({
    tabTitle: "Example Domain"
  })
}, {
  icon: "chrome://global/skin/icons/defaultFavicon.svg",
  title: "Example Domain",
  url: "example.com",
  time: 1678141738136,
  primaryL10nId: "fxviewtabrow-tabs-list-tab",
  primaryL10nArgs: JSON.stringify({
    targetURI: "example.com"
  }),
  secondaryL10nId: "fxviewtabrow-options-menu-button",
  secondaryL10nArgs: JSON.stringify({
    tabTitle: "Example Domain"
  })
}];
var recentlyClosedItems = [{
  icon: "chrome://global/skin/icons/defaultFavicon.svg",
  title: "Example Domain",
  url: "example.net",
  tabid: 1,
  time: 1678141738136,
  primaryL10nId: "fxviewtabrow-tabs-list-tab",
  primaryL10nArgs: JSON.stringify({
    targetURI: "example.net"
  }),
  secondaryL10nId: "fxviewtabrow-dismiss-tab-button",
  secondaryL10nArgs: JSON.stringify({
    tabTitle: "Example Domain"
  })
}, {
  icon: "chrome://global/skin/icons/defaultFavicon.svg",
  title: "Example Domain",
  url: "example.org",
  tabid: 2,
  time: 1678141738136,
  primaryL10nId: "fxviewtabrow-tabs-list-tab",
  primaryL10nArgs: JSON.stringify({
    targetURI: "example.net"
  }),
  secondaryL10nId: "fxviewtabrow-dismiss-tab-button",
  secondaryL10nArgs: JSON.stringify({
    tabTitle: "Example Domain"
  })
}, {
  icon: "chrome://global/skin/icons/defaultFavicon.svg",
  title: "Example Domain",
  url: "example.com",
  tabid: 3,
  time: 1678141738136,
  primaryL10nId: "fxviewtabrow-tabs-list-tab",
  primaryL10nArgs: JSON.stringify({
    targetURI: "example.net"
  }),
  secondaryL10nId: "fxviewtabrow-dismiss-tab-button",
  secondaryL10nArgs: JSON.stringify({
    tabTitle: "Example Domain"
  })
}];
var RelativeTime = Template.bind({});
RelativeTime.args = {
  listClass: "menu",
  dateTimeFormat: "relative",
  hasPopup: "menu",
  maxTabsLength: MAX_TABS_LENGTH,
  primaryAction: primaryAction,
  secondaryAction: secondaryAction,
  secondaryActionClass: "options-button",
  tabItems: tabItems
};
var DateAndTime = Template.bind({});
DateAndTime.args = {
  listClass: "menu",
  dateTimeFormat: "dateTime",
  maxTabsLength: MAX_TABS_LENGTH,
  primaryAction: primaryAction,
  secondaryAction: secondaryAction,
  secondaryActionClass: "options-button",
  tabItems: tabItems
};
var DateOnly = Template.bind({});
DateOnly.args = {
  listClass: "menu",
  dateTimeFormat: "date",
  hasPopup: "menu",
  maxTabsLength: MAX_TABS_LENGTH,
  primaryAction: primaryAction,
  secondaryAction: secondaryAction,
  secondaryActionClass: "options-button",
  tabItems: tabItems
};
var TimeOnly = Template.bind({});
TimeOnly.args = {
  listClass: "menu",
  dateTimeFormat: "time",
  hasPopup: "menu",
  maxTabsLength: MAX_TABS_LENGTH,
  primaryAction: primaryAction,
  secondaryAction: secondaryAction,
  secondaryActionClass: "options-button",
  tabItems: tabItems
};
var RecentlyClosed = Template.bind({});
RecentlyClosed.args = {
  listClass: "dismiss",
  dateTimeFormat: "relative",
  hasPopup: null,
  maxTabsLength: MAX_TABS_LENGTH,
  primaryAction: primaryAction,
  secondaryAction: function secondaryAction() {},
  secondaryActionClass: "dismiss-button",
  tabItems: recentlyClosedItems
};

/***/ }),

/***/ 29165:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fxview-tab-list.cb9c9be18ded822be2b2.css";

/***/ }),

/***/ 81529:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fxview-tab-row.350af055ef90a62c4e67.css";

/***/ }),

/***/ 54078:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-button.a48882edf284d66ca04d.css";

/***/ }),

/***/ 83230:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-label.af54a5f841ff0af78b0d.css";

/***/ })

}]);
//# sourceMappingURL=fxview-tab-list-stories.3a44c3a6.iframe.bundle.js.map