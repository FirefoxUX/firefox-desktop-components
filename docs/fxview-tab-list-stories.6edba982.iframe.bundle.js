"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[3013],{

/***/ 64646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FxviewTabRow": () => (/* binding */ FxviewTabRow),
/* harmony export */   "VirtualList": () => (/* binding */ VirtualList),
/* harmony export */   "default": () => (/* binding */ FxviewTabList)
/* harmony export */ });
/* harmony import */ var browser_components_firefoxview_fxview_tab_row_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81529);
/* harmony import */ var toolkit_themes_osx_global_in_content_common_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96567);
/* harmony import */ var browser_components_contextualidentity_content_usercontext_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77575);
/* harmony import */ var browser_components_firefoxview_fxview_tab_list_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29165);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1659);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68164);
/* harmony import */ var _helpers_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58474);




/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */





const NOW_THRESHOLD_MS = 91000;
const FXVIEW_ROW_HEIGHT_PX = 32;
const lazy = {};
let XPCOMUtils;

if (!window.IS_STORYBOOK) {
  XPCOMUtils = ChromeUtils.importESModule(
    "resource://gre/modules/XPCOMUtils.sys.mjs"
  ).XPCOMUtils;
  XPCOMUtils.defineLazyPreferenceGetter(
    lazy,
    "virtualListEnabledPref",
    "browser.firefox-view.virtual-list.enabled"
  );
  ChromeUtils.defineLazyGetter(lazy, "relativeTimeFormat", () => {
    return new Services.intl.RelativeTimeFormat(undefined, {
      style: "narrow",
    });
  });

  ChromeUtils.defineESModuleGetters(lazy, {
    BrowserUtils: "resource://gre/modules/BrowserUtils.sys.mjs",
  });
}

/**
 * A list of clickable tab items
 *
 * @property {boolean} compactRows - Whether to hide the URL and date/time for each tab.
 * @property {string} dateTimeFormat - Expected format for date and/or time
 * @property {string} hasPopup - The aria-haspopup attribute for the secondary action, if required
 * @property {number} maxTabsLength - The max number of tabs for the list
 * @property {boolean} pinnedTabsGridView - Whether to show pinned tabs in a grid view
 * @property {Array} tabItems - Items to show in the tab list
 * @property {string} searchQuery - The query string to highlight, if provided.
 * @property {string} secondaryActionClass - The class used to style the secondary action element
 * @property {string} tertiaryActionClass - The class used to style the tertiary action element
 */
class FxviewTabList extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.MozLitElement {
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
    this.pinnedTabs = [];
    this.pinnedTabsGridView = false;
    this.unpinnedTabs = [];
    this.compactRows = false;
    this.updatesPaused = true;
    this.#register();
  }

  static properties = {
    activeIndex: { type: Number },
    compactRows: { type: Boolean },
    currentActiveElementId: { type: String },
    dateTimeFormat: { type: String },
    hasPopup: { type: String },
    maxTabsLength: { type: Number },
    pinnedTabsGridView: { type: Boolean },
    tabItems: { type: Array },
    updatesPaused: { type: Boolean },
    searchQuery: { type: String },
    secondaryActionClass: { type: String },
    tertiaryActionClass: { type: String },
  };

  static queries = {
    rowEls: { all: "fxview-tab-row" },
    rootVirtualListEl: "virtual-list",
  };

  willUpdate(changes) {
    this.activeIndex = Math.min(
      Math.max(this.activeIndex, 0),
      this.tabItems.length - 1
    );

    if (changes.has("dateTimeFormat") || changes.has("updatesPaused")) {
      this.clearIntervalTimer();
      if (
        !this.updatesPaused &&
        this.dateTimeFormat == "relative" &&
        !window.IS_STORYBOOK
      ) {
        this.startIntervalTimer();
        this.onIntervalUpdate();
      }
    }

    // Move pinned tabs to the beginning of the list
    if (this.pinnedTabsGridView) {
      // Can set maxTabsLength to -1 to have no max
      this.unpinnedTabs = this.tabItems.filter(
        tab => !tab.indicators?.includes("pinned")
      );
      this.pinnedTabs = this.tabItems.filter(tab =>
        tab.indicators?.includes("pinned")
      );
      if (this.maxTabsLength > 0) {
        this.unpinnedTabs = this.unpinnedTabs.slice(0, this.maxTabsLength);
      }
      this.tabItems = [...this.pinnedTabs, ...this.unpinnedTabs];
    } else if (this.maxTabsLength > 0) {
      this.tabItems = this.tabItems.slice(0, this.maxTabsLength);
    }
  }

  startIntervalTimer() {
    this.clearIntervalTimer();
    this.intervalID = setInterval(
      () => this.onIntervalUpdate(),
      this.timeMsPref
    );
  }

  clearIntervalTimer() {
    if (this.intervalID) {
      clearInterval(this.intervalID);
      delete this.intervalID;
    }
  }

  #register() {
    if (!window.IS_STORYBOOK) {
      XPCOMUtils.defineLazyPreferenceGetter(
        this,
        "timeMsPref",
        "browser.tabs.firefox-view.updateTimeMs",
        NOW_THRESHOLD_MS,
        () => {
          this.clearIntervalTimer();
          if (!this.isConnected) {
            return;
          }
          this.startIntervalTimer();
          this.requestUpdate();
        }
      );
    }
  }

  connectedCallback() {
    super.connectedCallback();
    if (
      !this.updatesPaused &&
      this.dateTimeFormat === "relative" &&
      !window.IS_STORYBOOK
    ) {
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
    Array.from(this.rowEls).forEach(fxviewTabRow =>
      fxviewTabRow.requestUpdate()
    );
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
      if (
        (this.pinnedTabsGridView &&
          this.activeIndex >= this.pinnedTabs.length) ||
        !this.pinnedTabsGridView
      ) {
        this.focusPrevRow();
      }
    } else if (e.code == "ArrowDown") {
      // Focus either the link or button of the next row based on this.currentActiveElementId
      e.preventDefault();
      if (
        this.pinnedTabsGridView &&
        this.activeIndex < this.pinnedTabs.length
      ) {
        this.focusIndex(this.pinnedTabs.length);
      } else {
        this.focusNextRow();
      }
    } else if (e.code == "ArrowRight") {
      // Focus either the link or the button in the current row and
      // set this.currentActiveElementId to that element's ID
      e.preventDefault();
      if (document.dir == "rtl") {
        this.moveFocusLeft(fxviewTabRow);
      } else {
        this.moveFocusRight(fxviewTabRow);
      }
    } else if (e.code == "ArrowLeft") {
      // Focus either the link or the button in the current row and
      // set this.currentActiveElementId to that element's ID
      e.preventDefault();
      if (document.dir == "rtl") {
        this.moveFocusRight(fxviewTabRow);
      } else {
        this.moveFocusLeft(fxviewTabRow);
      }
    }
  }

  moveFocusRight(fxviewTabRow) {
    if (
      this.pinnedTabsGridView &&
      fxviewTabRow.indicators?.includes("pinned")
    ) {
      this.focusNextRow();
    } else if (
      (fxviewTabRow.indicators?.includes("soundplaying") ||
        fxviewTabRow.indicators?.includes("muted")) &&
      this.currentActiveElementId === "fxview-tab-row-main"
    ) {
      this.currentActiveElementId = fxviewTabRow.focusMediaButton();
    } else if (
      this.currentActiveElementId === "fxview-tab-row-media-button" ||
      this.currentActiveElementId === "fxview-tab-row-main"
    ) {
      this.currentActiveElementId = fxviewTabRow.focusSecondaryButton();
    } else if (
      fxviewTabRow.tertiaryButtonEl &&
      this.currentActiveElementId === "fxview-tab-row-secondary-button"
    ) {
      this.currentActiveElementId = fxviewTabRow.focusTertiaryButton();
    }
  }

  moveFocusLeft(fxviewTabRow) {
    if (
      this.pinnedTabsGridView &&
      (fxviewTabRow.indicators?.includes("pinned") ||
        (this.currentActiveElementId === "fxview-tab-row-main" &&
          this.activeIndex === this.pinnedTabs.length))
    ) {
      this.focusPrevRow();
    } else if (
      this.currentActiveElementId === "fxview-tab-row-tertiary-button"
    ) {
      this.currentActiveElementId = fxviewTabRow.focusSecondaryButton();
    } else if (
      (fxviewTabRow.indicators?.includes("soundplaying") ||
        fxviewTabRow.indicators?.includes("muted")) &&
      this.currentActiveElementId === "fxview-tab-row-secondary-button"
    ) {
      this.currentActiveElementId = fxviewTabRow.focusMediaButton();
    } else {
      this.currentActiveElementId = fxviewTabRow.focusLink();
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
    if (
      ((this.pinnedTabsGridView && index > this.pinnedTabs.length) ||
        !this.pinnedTabsGridView) &&
      lazy.virtualListEnabledPref
    ) {
      let row = this.rootVirtualListEl.getItem(index - this.pinnedTabs.length);
      if (!row) {
        return;
      }
      let subList = this.rootVirtualListEl.getSubListForItem(
        index - this.pinnedTabs.length
      );
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
      row.scrollIntoView({ block: "center" });
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
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.html`
      <fxview-tab-row
        exportparts="secondary-button"
        class=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.classMap)({
          pinned:
            this.pinnedTabsGridView && tabItem.indicators?.includes("pinned"),
        })}
        ?active=${i == this.activeIndex}
        ?compact=${this.compactRows}
        .hasPopup=${this.hasPopup}
        .containerObj=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.ifDefined)(tabItem.containerObj)}
        .currentActiveElementId=${this.currentActiveElementId}
        .dateTimeFormat=${this.dateTimeFormat}
        .favicon=${tabItem.icon}
        .indicators=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.ifDefined)(tabItem.indicators)}
        .pinnedTabsGridView=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.ifDefined)(this.pinnedTabsGridView)}
        .primaryL10nId=${tabItem.primaryL10nId}
        .primaryL10nArgs=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.ifDefined)(tabItem.primaryL10nArgs)}
        role=${this.pinnedTabsGridView && tabItem.indicators?.includes("pinned")
          ? "none"
          : "listitem"}
        .secondaryL10nId=${tabItem.secondaryL10nId}
        .secondaryL10nArgs=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.ifDefined)(tabItem.secondaryL10nArgs)}
        .tertiaryL10nId=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.ifDefined)(tabItem.tertiaryL10nId)}
        .tertiaryL10nArgs=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.ifDefined)(tabItem.tertiaryL10nArgs)}
        .secondaryActionClass=${this.secondaryActionClass}
        .tertiaryActionClass=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.ifDefined)(this.tertiaryActionClass)}
        .sourceClosedId=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.ifDefined)(tabItem.sourceClosedId)}
        .sourceWindowId=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.ifDefined)(tabItem.sourceWindowId)}
        .closedId=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.ifDefined)(tabItem.closedId || tabItem.closedId)}
        .searchQuery=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.ifDefined)(this.searchQuery)}
        .tabElement=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.ifDefined)(tabItem.tabElement)}
        .time=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.ifDefined)(time)}
        .timeMsPref=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.ifDefined)(this.timeMsPref)}
        .title=${tabItem.title}
        .url=${tabItem.url}
      ></fxview-tab-row>
    `;
  };

  render() {
    if (this.searchQuery && this.tabItems.length === 0) {
      return this.#emptySearchResultsTemplate();
    }
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.html`
      <link
        rel="stylesheet"
        href="${browser_components_firefoxview_fxview_tab_list_css__WEBPACK_IMPORTED_MODULE_3__}"
      />
      ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.when)(
        this.pinnedTabsGridView && this.pinnedTabs.length,
        () => chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.html`
          <div
            id="fxview-tab-list"
            class="fxview-tab-list pinned"
            data-l10n-id="firefoxview-pinned-tabs"
            role="tablist"
            @keydown=${this.handleFocusElementInRow}
          >
            ${this.pinnedTabs.map((tabItem, i) =>
              this.itemTemplate(tabItem, i)
            )}
          </div>
        `
      )}
      <div
        id="fxview-tab-list"
        class="fxview-tab-list"
        data-l10n-id="firefoxview-tabs"
        role="list"
        @keydown=${this.handleFocusElementInRow}
      >
        ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.when)(
          lazy.virtualListEnabledPref,
          () => chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.html`
            <virtual-list
              .activeIndex=${this.activeIndex}
              .pinnedTabsIndexOffset=${this.pinnedTabsGridView
                ? this.pinnedTabs.length
                : 0}
              .items=${this.pinnedTabsGridView
                ? this.unpinnedTabs
                : this.tabItems}
              .template=${this.itemTemplate}
            ></virtual-list>
          `
        )}
        ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.when)(
          !lazy.virtualListEnabledPref,
          () => chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.html`
            ${this.tabItems.map((tabItem, i) => this.itemTemplate(tabItem, i))}
          `
        )}
      </div>
      <slot name="menu"></slot>
    `;
  }

  #emptySearchResultsTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.html` <fxview-empty-state
      class="search-results"
      headerLabel="firefoxview-search-results-empty"
      .headerArgs=${{ query: this.searchQuery }}
      isInnerCard
    >
    </fxview-empty-state>`;
  }
}
customElements.define("fxview-tab-list", FxviewTabList);

/**
 * A tab item that displays favicon, title, url, and time of last access
 *
 * @property {boolean} active - Should current item have focus on keydown
 * @property {boolean} compact - Whether to hide the URL and date/time for this tab.
 * @property {object} containerObj - Info about an open tab's container if within one
 * @property {string} currentActiveElementId - ID of currently focused element within each tab item
 * @property {string} dateTimeFormat - Expected format for date and/or time
 * @property {string} hasPopup - The aria-haspopup attribute for the secondary action, if required
 * @property {string} indicators - An array of tab indicators if any are present
 * @property {number} closedId - The tab ID for when the tab item was closed.
 * @property {number} sourceClosedId - The closedId of the closed window its from if applicable
 * @property {number} sourceWindowId - The sessionstore id of the window its from if applicable
 * @property {string} favicon - The favicon for the tab item.
 * @property {boolean} pinnedTabsGridView - Whether the show pinned tabs in a grid view
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
class FxviewTabRow extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.MozLitElement {
  constructor() {
    super();
    this.active = false;
    this.currentActiveElementId = "fxview-tab-row-main";
  }

  static properties = {
    active: { type: Boolean },
    compact: { type: Boolean },
    containerObj: { type: Object },
    currentActiveElementId: { type: String },
    dateTimeFormat: { type: String },
    favicon: { type: String },
    hasPopup: { type: String },
    indicators: { type: Array },
    pinnedTabsGridView: { type: Boolean },
    primaryL10nId: { type: String },
    primaryL10nArgs: { type: String },
    secondaryL10nId: { type: String },
    secondaryL10nArgs: { type: String },
    secondaryActionClass: { type: String },
    tertiaryL10nId: { type: String },
    tertiaryL10nArgs: { type: String },
    tertiaryActionClass: { type: String },
    closedId: { type: Number },
    sourceClosedId: { type: Number },
    sourceWindowId: { type: String },
    tabElement: { type: Object },
    time: { type: Number },
    title: { type: String },
    timeMsPref: { type: Number },
    url: { type: String },
    searchQuery: { type: String },
  };

  static queries = {
    mainEl: "#fxview-tab-row-main",
    secondaryButtonEl: "#fxview-tab-row-secondary-button:not([hidden])",
    tertiaryButtonEl: "#fxview-tab-row-tertiary-button",
    mediaButtonEl: "#fxview-tab-row-media-button",
    pinnedTabButtonEl: "button#fxview-tab-row-main",
  };

  get currentFocusable() {
    let focusItem = this.renderRoot.getElementById(this.currentActiveElementId);
    if (!focusItem) {
      focusItem = this.renderRoot.getElementById("fxview-tab-row-main");
    }
    return focusItem;
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("keydown", this.handleKeydown);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("keydown", this.handleKeydown);
  }

  handleKeydown(e) {
    if (
      this.active &&
      this.pinnedTabsGridView &&
      this.indicators?.includes("pinned") &&
      e.key === "m" &&
      e.ctrlKey
    ) {
      this.muteOrUnmuteTab();
    }
  }

  focus() {
    this.currentFocusable.focus();
  }

  focusSecondaryButton() {
    this.secondaryButtonEl.focus();
    return this.secondaryButtonEl.id;
  }

  focusTertiaryButton() {
    this.tertiaryButtonEl.focus();
    return this.tertiaryButtonEl.id;
  }

  focusMediaButton() {
    this.mediaButtonEl.focus();
    return this.mediaButtonEl.id;
  }

  focusLink() {
    this.mainEl.focus();
    return this.mainEl.id;
  }

  dateFluentArgs(timestamp, dateTimeFormat) {
    if (dateTimeFormat === "date" || dateTimeFormat === "dateTime") {
      return JSON.stringify({ date: timestamp });
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
    return !window.IS_STORYBOOK
      ? lazy.BrowserUtils.formatURIStringForDisplay(uriString)
      : uriString;
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

  getContainerClasses() {
    let containerClasses = ["fxview-tab-row-container-indicator", "icon"];
    if (this.containerObj) {
      let { icon, color } = this.containerObj;
      containerClasses.push(`identity-icon-${icon}`);
      containerClasses.push(`identity-color-${color}`);
    }
    return containerClasses;
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
          new CustomEvent("fxview-tab-list-primary-action", {
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
      (this.pinnedTabsGridView &&
        this.indicators?.includes("pinned") &&
        event.type == "contextmenu") ||
      (event.type == "click" && event.detail && !event.altKey) ||
      // detail=0 is from keyboard
      (event.type == "click" && !event.detail)
    ) {
      event.preventDefault();
      this.dispatchEvent(
        new CustomEvent("fxview-tab-list-secondary-action", {
          bubbles: true,
          composed: true,
          detail: { originalEvent: event, item: this },
        })
      );
    }
  }

  tertiaryActionHandler(event) {
    if (
      (event.type == "click" && event.detail && !event.altKey) ||
      // detail=0 is from keyboard
      (event.type == "click" && !event.detail)
    ) {
      event.preventDefault();
      this.dispatchEvent(
        new CustomEvent("fxview-tab-list-tertiary-action", {
          bubbles: true,
          composed: true,
          detail: { originalEvent: event, item: this },
        })
      );
    }
  }

  muteOrUnmuteTab(e) {
    e?.preventDefault();
    // If the tab has no sound playing, the mute/unmute button will be removed when toggled.
    // We should move the focus to the right in that case. This does not apply to pinned tabs
    // on the Open Tabs page.
    let shouldMoveFocus =
      (!this.pinnedTabsGridView ||
        (!this.indicators.includes("pinned") && this.pinnedTabsGridView)) &&
      this.mediaButtonEl &&
      !this.indicators.includes("soundplaying") &&
      this.currentActiveElementId === "fxview-tab-row-media-button";

    // detail=0 is from keyboard
    if (e?.type == "click" && !e?.detail && shouldMoveFocus) {
      let tabList = this.getRootNode().host;
      if (document.dir == "rtl") {
        tabList.moveFocusLeft(this);
      } else {
        tabList.moveFocusRight(this);
      }
    }
    this.tabElement.toggleMuteAudio();
  }

  #faviconTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.html`<span
      class="${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.classMap)({
        "fxview-tab-row-favicon-wrapper": true,
        pinned: this.indicators?.includes("pinned"),
        pinnedOnNewTab: this.indicators?.includes("pinnedOnNewTab"),
        attention: this.indicators?.includes("attention"),
        bookmark: this.indicators?.includes("bookmark"),
      })}"
    >
      <span
        class="fxview-tab-row-favicon icon"
        id="fxview-tab-row-favicon"
        style=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.styleMap)({
          backgroundImage: `url(${this.getImageUrl(this.favicon, this.url)})`,
        })}
      ></span>
      ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.when)(
        this.pinnedTabsGridView &&
          this.indicators?.includes("pinned") &&
          (this.indicators?.includes("muted") ||
            this.indicators?.includes("soundplaying")),
        () => chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.html`
          <button
            class="fxview-tab-row-pinned-media-button ghost-button icon-button"
            id="fxview-tab-row-media-button"
            tabindex="-1"
            data-l10n-id=${this.indicators?.includes("muted")
              ? "fxviewtabrow-unmute-tab-button-no-context"
              : "fxviewtabrow-mute-tab-button-no-context"}
            muted=${this.indicators?.includes("muted")}
            soundplaying=${this.indicators?.includes("soundplaying") &&
            !this.indicators?.includes("muted")}
            @click=${this.muteOrUnmuteTab}
          ></button>
        `
      )}
    </span>`;
  }

  #pinnedTabItemTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.html` <button
      class="fxview-tab-row-main ghost-button semi-transparent"
      id="fxview-tab-row-main"
      aria-haspopup=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.ifDefined)(this.hasPopup)}
      data-l10n-id=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.ifDefined)(this.primaryL10nId)}
      data-l10n-args=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.ifDefined)(this.primaryL10nArgs)}
      tabindex=${this.active &&
      this.currentActiveElementId === "fxview-tab-row-main"
        ? "0"
        : "-1"}
      role="tab"
      @click=${this.primaryActionHandler}
      @keydown=${this.primaryActionHandler}
      @contextmenu=${this.secondaryActionHandler}
    >
      ${this.#faviconTemplate()}
    </button>`;
  }

  #unpinnedTabItemTemplate() {
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

    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.html`<a
        href=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.ifDefined)(this.url)}
        class="fxview-tab-row-main"
        id="fxview-tab-row-main"
        tabindex=${this.active &&
        this.currentActiveElementId === "fxview-tab-row-main"
          ? "0"
          : "-1"}
        data-l10n-id=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.ifDefined)(this.primaryL10nId)}
        data-l10n-args=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.ifDefined)(this.primaryL10nArgs)}
        @click=${this.primaryActionHandler}
        @keydown=${this.primaryActionHandler}
        title=${!this.primaryL10nId ? this.url : null}
      >
        ${this.#faviconTemplate()}
        <span
          class="fxview-tab-row-title text-truncated-ellipsis"
          id="fxview-tab-row-title"
          dir="auto"
        >
          ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.when)(
            this.searchQuery,
            () => this.#highlightSearchMatches(this.searchQuery, title),
            () => title
          )}
        </span>
        <span class=${this.getContainerClasses().join(" ")}></span>
        <span
          class="fxview-tab-row-url text-truncated-ellipsis"
          id="fxview-tab-row-url"
          ?hidden=${this.compact}
        >
          ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.when)(
            this.searchQuery,
            () =>
              this.#highlightSearchMatches(
                this.searchQuery,
                this.formatURIForDisplay(this.url)
              ),
            () => this.formatURIForDisplay(this.url)
          )}
        </span>
        <span
          class="fxview-tab-row-date"
          id="fxview-tab-row-date"
          ?hidden=${this.compact}
        >
          <span
            ?hidden=${relativeString || !dateString}
            data-l10n-id=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.ifDefined)(dateString)}
            data-l10n-args=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.ifDefined)(dateArgs)}
          ></span>
          <span ?hidden=${!relativeString}>${relativeString}</span>
        </span>
        <span
          class="fxview-tab-row-time"
          id="fxview-tab-row-time"
          ?hidden=${this.compact || !timeString}
          data-timestamp=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.ifDefined)(this.time)}
          data-l10n-id=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.ifDefined)(timeString)}
          data-l10n-args=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.ifDefined)(timeArgs)}
        >
        </span>
      </a>
      ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.when)(
        this.indicators?.includes("soundplaying") ||
          this.indicators?.includes("muted"),
        () => chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.html`<button
        class=fxview-tab-row-button ghost-button icon-button semi-transparent"
        id="fxview-tab-row-media-button"
        data-l10n-id=${
          this.indicators?.includes("muted")
            ? "fxviewtabrow-unmute-tab-button-no-context"
            : "fxviewtabrow-mute-tab-button-no-context"
        }
        muted=${this.indicators?.includes("muted")}
        soundplaying=${
          this.indicators?.includes("soundplaying") &&
          !this.indicators?.includes("muted")
        }
        @click=${this.muteOrUnmuteTab}
        tabindex="${
          this.active &&
          this.currentActiveElementId === "fxview-tab-row-media-button"
            ? "0"
            : "-1"
        }"
      ></button>`,
        () => chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.html`<span></span>`
      )}
      ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.when)(
        this.secondaryL10nId && this.secondaryActionHandler,
        () => chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.html`<button
          class=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.classMap)({
            "fxview-tab-row-button": true,
            "ghost-button": true,
            "icon-button": true,
            "semi-transparent": true,
            [this.secondaryActionClass]: this.secondaryActionClass,
          })}
          id="fxview-tab-row-secondary-button"
          data-l10n-id=${this.secondaryL10nId}
          data-l10n-args=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.ifDefined)(this.secondaryL10nArgs)}
          aria-haspopup=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.ifDefined)(this.hasPopup)}
          @click=${this.secondaryActionHandler}
          tabindex="${this.active &&
          this.currentActiveElementId === "fxview-tab-row-secondary-button"
            ? "0"
            : "-1"}"
        ></button>`
      )}
      ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.when)(
        this.tertiaryL10nId && this.tertiaryActionHandler,
        () => chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.html`<button
          class=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.classMap)({
            "fxview-tab-row-button": true,
            "ghost-button": true,
            "icon-button": true,
            "semi-transparent": true,
            [this.tertiaryActionClass]: this.tertiaryActionClass,
          })}
          id="fxview-tab-row-tertiary-button"
          data-l10n-id=${this.tertiaryL10nId}
          data-l10n-args=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.ifDefined)(this.tertiaryL10nArgs)}
          aria-haspopup=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.ifDefined)(this.hasPopup)}
          @click=${this.tertiaryActionHandler}
          tabindex="${this.active &&
          this.currentActiveElementId === "fxview-tab-row-tertiary-button"
            ? "0"
            : "-1"}"
        ></button>`
      )}`;
  }

  render() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.html`
      ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.when)(
        this.containerObj,
        () => chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.html`
          <link
            rel="stylesheet"
            href="${browser_components_contextualidentity_content_usercontext_css__WEBPACK_IMPORTED_MODULE_2__}"
          />
        `
      )}
      <link
        rel="stylesheet"
        href="${toolkit_themes_osx_global_in_content_common_css__WEBPACK_IMPORTED_MODULE_1__}"
      />
      <link
        rel="stylesheet"
        href="${browser_components_firefoxview_fxview_tab_row_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.when)(
        this.pinnedTabsGridView && this.indicators?.includes("pinned"),
        this.#pinnedTabItemTemplate.bind(this),
        this.#unpinnedTabItemTemplate.bind(this)
      )}
    `;
  }

  /**
   * Find all matches of query within the given string, and compute the result
   * to be rendered.
   *
   * @param {string} query
   * @param {string} string
   */
  #highlightSearchMatches(query, string) {
    const fragments = [];
    const regex = RegExp((0,_helpers_mjs__WEBPACK_IMPORTED_MODULE_6__.escapeRegExp)(query), "dgi");
    let prevIndexEnd = 0;
    let result;
    while ((result = regex.exec(string)) !== null) {
      const [indexStart, indexEnd] = result.indices[0];
      fragments.push(string.substring(prevIndexEnd, indexStart));
      fragments.push(
        chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.html`<strong>${string.substring(indexStart, indexEnd)}</strong>`
      );
      prevIndexEnd = regex.lastIndex;
    }
    fragments.push(string.substring(prevIndexEnd));
    return fragments;
  }
}

customElements.define("fxview-tab-row", FxviewTabRow);

class VirtualList extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.MozLitElement {
  static properties = {
    items: { type: Array },
    template: { type: Function },
    activeIndex: { type: Number },
    itemOffset: { type: Number },
    maxRenderCountEstimate: { type: Number, state: true },
    itemHeightEstimate: { type: Number, state: true },
    isAlwaysVisible: { type: Boolean },
    isVisible: { type: Boolean, state: true },
    isSubList: { type: Boolean },
    pinnedTabsIndexOffset: { type: Number },
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
    this.maxRenderCountEstimate = Math.max(
      40,
      2 * Math.ceil(window.innerHeight / this.itemHeightEstimate)
    );
    this.isSubList = false;
    this.isVisible = false;
    this.intersectionObserver = new IntersectionObserver(
      ([entry]) => (this.isVisible = entry.isIntersecting),
      { root: this.ownerDocument }
    );
    this.resizeObserver = new ResizeObserver(([entry]) => {
      if (entry.contentRect?.height > 0) {
        // Update properties on top-level virtual-list
        this.parentElement.itemHeightEstimate = entry.contentRect.height;
        this.parentElement.maxRenderCountEstimate = Math.max(
          40,
          2 * Math.ceil(window.innerHeight / this.itemHeightEstimate)
        );
      }
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.intersectionObserver.disconnect();
    this.resizeObserver.disconnect();
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
      return this.getSubListForItem(index)?.getItem(
        index % this.maxRenderCountEstimate
      );
    }
    return this.children[index];
  }

  willUpdate(changedProperties) {
    if (changedProperties.has("items") && !this.isSubList) {
      this.subListItems = [];
      for (let i = 0; i < this.items.length; i += this.maxRenderCountEstimate) {
        this.subListItems.push(
          this.items.slice(i, i + this.maxRenderCountEstimate)
        );
      }
      this.triggerIntersectionObserver();
    }
  }

  recalculateAfterWindowResize() {
    this.maxRenderCountEstimate = Math.max(
      40,
      2 * Math.ceil(window.innerHeight / this.itemHeightEstimate)
    );
  }

  firstUpdated() {
    this.intersectionObserver.observe(this);
    if (this.isSubList && this.children[0]) {
      this.resizeObserver.observe(this.children[0]);
    }
  }

  updated(changedProperties) {
    this.updateListHeight(changedProperties);
  }

  updateListHeight(changedProperties) {
    if (
      changedProperties.has("isAlwaysVisible") ||
      changedProperties.has("isVisible")
    ) {
      this.style.height =
        this.isAlwaysVisible || this.isVisible
          ? "auto"
          : `${this.items.length * this.itemHeightEstimate}px`;
    }
  }

  get renderItems() {
    return this.isSubList ? this.items : this.subListItems;
  }

  subListTemplate = (data, i) => {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.html`<virtual-list
      .template=${this.template}
      .items=${data}
      .itemHeightEstimate=${this.itemHeightEstimate}
      .itemOffset=${i * this.maxRenderCountEstimate +
      this.pinnedTabsIndexOffset}
      .isAlwaysVisible=${i ==
      parseInt(this.activeIndex / this.maxRenderCountEstimate, 10)}
      isSubList
    ></virtual-list>`;
  };

  itemTemplate = (data, i) =>
    this.template(data, this.itemOffset + i + this.pinnedTabsIndexOffset);

  render() {
    if (this.isAlwaysVisible || this.isVisible) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.html`
        ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.repeat)(
          this.renderItems,
          (data, i) => i,
          this.isSubList ? this.itemTemplate : this.subListTemplate
        )}
      `;
    }
    return "";
  }
}

customElements.define("virtual-list", VirtualList);


/***/ }),

/***/ 58474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOGGING_PREF": () => (/* binding */ LOGGING_PREF),
/* harmony export */   "MAX_TABS_FOR_RECENT_BROWSING": () => (/* binding */ MAX_TABS_FOR_RECENT_BROWSING),
/* harmony export */   "NOW_THRESHOLD_MS": () => (/* binding */ NOW_THRESHOLD_MS),
/* harmony export */   "convertTimestamp": () => (/* binding */ convertTimestamp),
/* harmony export */   "createFaviconElement": () => (/* binding */ createFaviconElement),
/* harmony export */   "escapeHtmlEntities": () => (/* binding */ escapeHtmlEntities),
/* harmony export */   "escapeRegExp": () => (/* binding */ escapeRegExp),
/* harmony export */   "formatURIForDisplay": () => (/* binding */ formatURIForDisplay),
/* harmony export */   "getImageUrl": () => (/* binding */ getImageUrl),
/* harmony export */   "getLogger": () => (/* binding */ getLogger),
/* harmony export */   "isSearchEnabled": () => (/* binding */ isSearchEnabled),
/* harmony export */   "navigateToLink": () => (/* binding */ navigateToLink),
/* harmony export */   "placeLinkOnClipboard": () => (/* binding */ placeLinkOnClipboard),
/* harmony export */   "searchTabList": () => (/* binding */ searchTabList)
/* harmony export */ });
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const lazy = {};
const loggersByName = new Map();

ChromeUtils.defineESModuleGetters(lazy, {
  BrowserUtils: "resource://gre/modules/BrowserUtils.sys.mjs",
  Log: "resource://gre/modules/Log.sys.mjs",
  PlacesUIUtils: "resource:///modules/PlacesUIUtils.sys.mjs",
  PlacesUtils: "resource://gre/modules/PlacesUtils.sys.mjs",
});

ChromeUtils.defineLazyGetter(lazy, "relativeTimeFormat", () => {
  return new Services.intl.RelativeTimeFormat(undefined, { style: "narrow" });
});

const { XPCOMUtils } = ChromeUtils.importESModule(
  "resource://gre/modules/XPCOMUtils.sys.mjs"
);
XPCOMUtils.defineLazyPreferenceGetter(
  lazy,
  "searchEnabledPref",
  "browser.firefox-view.search.enabled"
);

// Cutoff of 1.5 minutes + 1 second to determine what text string to display
const NOW_THRESHOLD_MS = 91000;

// Configure logging level via this pref
const LOGGING_PREF = "browser.tabs.firefox-view.logLevel";

const MAX_TABS_FOR_RECENT_BROWSING = 5;

function formatURIForDisplay(uriString) {
  return lazy.BrowserUtils.formatURIStringForDisplay(uriString);
}

function convertTimestamp(
  timestamp,
  fluentStrings,
  _nowThresholdMs = NOW_THRESHOLD_MS
) {
  if (!timestamp) {
    // It's marginally better to show nothing instead of "53 years ago"
    return "";
  }
  const elapsed = Date.now() - timestamp;
  let formattedTime;
  if (elapsed <= _nowThresholdMs) {
    // Use a different string for very recent timestamps
    formattedTime = fluentStrings.formatValueSync(
      "firefoxview-just-now-timestamp"
    );
  } else {
    formattedTime = lazy.relativeTimeFormat.formatBestUnit(new Date(timestamp));
  }
  return formattedTime;
}

function createFaviconElement(image, targetURI = "") {
  let favicon = document.createElement("div");
  favicon.style.backgroundImage = `url('${getImageUrl(image, targetURI)}')`;
  favicon.classList.add("favicon");
  return favicon;
}

function getImageUrl(icon, targetURI) {
  return icon ? lazy.PlacesUIUtils.getImageURL(icon) : `page-icon:${targetURI}`;
}

/**
 * This function doesn't just copy the link to the clipboard, it creates a
 * URL object on the clipboard, so when it's pasted into an application that
 * supports it, it displays the title as a link.
 */
function placeLinkOnClipboard(title, uri) {
  let node = {
    type: 0,
    title,
    uri,
  };

  // Copied from doCommand/placesCmd_copy in PlacesUIUtils.sys.mjs

  // This is a little hacky, but there is a lot of code in Places that handles
  // clipboard stuff, so it's easier to reuse.

  // This order is _important_! It controls how this and other applications
  // select data to be inserted based on type.
  let contents = [
    { type: lazy.PlacesUtils.TYPE_X_MOZ_URL, entries: [] },
    { type: lazy.PlacesUtils.TYPE_HTML, entries: [] },
    { type: lazy.PlacesUtils.TYPE_PLAINTEXT, entries: [] },
  ];

  contents.forEach(function (content) {
    content.entries.push(lazy.PlacesUtils.wrapNode(node, content.type));
  });

  let xferable = Cc["@mozilla.org/widget/transferable;1"].createInstance(
    Ci.nsITransferable
  );
  xferable.init(null);

  function addData(type, data) {
    xferable.addDataFlavor(type);
    xferable.setTransferData(type, lazy.PlacesUtils.toISupportsString(data));
  }

  contents.forEach(function (content) {
    addData(content.type, content.entries.join(lazy.PlacesUtils.endl));
  });

  Services.clipboard.setData(xferable, null, Ci.nsIClipboard.kGlobalClipboard);
}

/**
 * Check the user preference to enable search functionality in Firefox View.
 *
 * @returns {boolean} The preference value.
 */
function isSearchEnabled() {
  return lazy.searchEnabledPref;
}

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
  return tabList.filter(
    ({ title, url }) => regex.test(title) || regex.test(url)
  );
}

/**
 * Get or create a logger, whose log-level is controlled by a pref
 *
 * @param {string} loggerName - Creating named loggers helps differentiate log messages from different
                                components or features.
 */

function getLogger(loggerName) {
  if (!loggersByName.has(loggerName)) {
    let logger = lazy.Log.repository.getLogger(`FirefoxView.${loggerName}`);
    logger.manageLevelFromPref(LOGGING_PREF);
    logger.addAppender(
      new lazy.Log.ConsoleAppender(new lazy.Log.BasicFormatter())
    );
    loggersByName.set(loggerName, logger);
  }
  return loggersByName.get(loggerName);
}

function escapeHtmlEntities(text) {
  return (text || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function navigateToLink(e) {
  let currentWindow =
    e.target.ownerGlobal.browsingContext.embedderWindowGlobal.browsingContext
      .window;
  if (currentWindow.openTrustedLinkIn) {
    let where = lazy.BrowserUtils.whereToOpenLink(
      e.detail.originalEvent,
      false,
      true
    );
    if (where == "current") {
      where = "tab";
    }
    currentWindow.openTrustedLinkIn(e.originalTarget.url, where);
  }
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
/* harmony import */ var lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1659);
/* harmony import */ var browser_components_firefoxview_fxview_tab_list_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64646);
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


// eslint-disable-next-line import/no-unassigned-import

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
    tabItems = _ref.tabItems;
  return (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  <style>\n    main {\n      max-width: 750px;\n    }\n    fxview-tab-list.menu::part(secondary-button) {\n      background-image: url(\"chrome://global/skin/icons/more.svg\");\n    }\n    fxview-tab-list.dismiss::part(secondary-button) {\n      background-image: url(\"chrome://global/skin/icons/close.svg\");\n    }\n    :host panel-item::part(button) {\n      padding-inline-start: 12px;\n      cursor: pointer;\n    }\n  </style>\n  <main>\n    <fxview-tab-list\n      class=", "\n      .hasPopup=", "\n      .dateTimeFormat=", "\n      .maxTabsLength=", "\n      .tabItems=", "\n      @fxview-tab-list-secondary-action=", "\n      @fxview-tab-list-primary-action=", "\n    >\n      <panel-list slot=\"menu\">\n        <panel-item data-l10n-id=\"fxviewtabrow-delete\"></panel-item>\n        <panel-item\n          data-l10n-id=\"fxviewtabrow-forget-about-this-site\"\n        ></panel-item>\n        <hr />\n        <panel-item data-l10n-id=\"fxviewtabrow-open-in-window\"></panel-item>\n        <panel-item\n          data-l10n-id=\"fxviewtabrow-open-in-private-window\"\n        ></panel-item>\n        <hr />\n        <panel-item data-l10n-id=\"fxviewtabrow-add-bookmark\"></panel-item>\n        <panel-item data-l10n-id=\"fxviewtabrow-save-to-pocket\"></panel-item>\n        <panel-item data-l10n-id=\"fxviewtabrow-copy-link\"></panel-item>\n      </panel-list>\n    </fxview-tab-list>\n  </main>\n"])), listClass, hasPopup, dateTimeFormat, maxTabsLength, tabItems, secondaryAction, primaryAction);
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
  tabItems: tabItems
};
var DateAndTime = Template.bind({});
DateAndTime.args = {
  listClass: "menu",
  dateTimeFormat: "dateTime",
  maxTabsLength: MAX_TABS_LENGTH,
  primaryAction: primaryAction,
  secondaryAction: secondaryAction,
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
  tabItems: recentlyClosedItems
};

/***/ }),

/***/ 77575:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "usercontext.e15f3b34573d5ea3086a.css";

/***/ }),

/***/ 29165:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fxview-tab-list.3be4f6ba0ca64baad02d.css";

/***/ }),

/***/ 81529:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fxview-tab-row.8249eab8f48082d1ceb7.css";

/***/ }),

/***/ 96567:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "common.1d46b4c17f883eaf5065.css";

/***/ })

}]);
//# sourceMappingURL=fxview-tab-list-stories.6edba982.iframe.bundle.js.map