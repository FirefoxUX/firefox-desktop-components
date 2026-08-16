"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[160,226,1279,2776,4920,5944,6284,7752,7912,8102,8400,9240],{

/***/ 2671:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppliedMemoriesButton: () => (/* binding */ AppliedMemoriesButton)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_ai_chat_content_chat_assistant_footer_applied_memories_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52944);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82242);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_elements_moz_box_group_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30160);
/* harmony import */ var chrome_global_content_elements_moz_box_item_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98102);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import


/**
 * AppliedMemoriesButton
 *
 * TODO: Currently using placeholder "Highlights" icon which will be replaced
 * with the memories icon once ready
 *
 * Custom element that renders the "Memories applied" pill and popover for
 * a single assistant message. The popover shows a list of applied
 * memories and allows the user to:
 *   - Remove an individual applied memory.
 *   - Retry the message without any applied memories.
 *   - Manage memories (links to about:preferences#manageMemories).
 *
 * @property {string|null} messageId
 *   Identifier for the assistant message this control belongs to.
 *
 * @property {Array<object>} appliedMemories
 *   List of applied memories for the message. The component will render up
 *   to the first 5 items in the popover.
 *
 * @property {boolean} open
 *   Whether the popover is currently open. This is typically controlled
 *   internally when the button is clicked and also reflected via the
 *   "toggle-applied-memories" event.
 *
 * @property {boolean} showCallout
 *   When true, the popover opens automatically and displays a callout banner.
 *   Set by the parent on the first message where memories are applied.
 *
 * Events dispatched:
 *   - "toggle-applied-memories"
 *       detail: { messageId, open }
 *   - "remove-applied-memory"
 *       detail: { memoryId }
 *   - "retry-without-memories"
 *       detail: { messageId }
 *   - "manage-memories"
 *   - "open-memories-learn-more"
 */
class AppliedMemoriesButton extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.MozLitElement {
  static properties = {
    messageId: {
      type: String,
      attribute: "message-id"
    },
    appliedMemories: {
      attribute: false
    },
    open: {
      type: Boolean,
      reflect: false
    },
    showCallout: {
      type: Boolean
    }
  };
  #showCalloutState = false;
  constructor() {
    super();
    this.messageId = null;
    this.appliedMemories = [];
    this.open = false;
    this.showCallout = false;
    this._onDocumentClick = this._onDocumentClick.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
  }
  connectedCallback() {
    super.connectedCallback();
    document.addEventListener("click", this._onDocumentClick);
    this.addEventListener("keydown", this._onKeyDown);
  }
  disconnectedCallback() {
    document.removeEventListener("click", this._onDocumentClick);
    this.removeEventListener("keydown", this._onKeyDown);
    super.disconnectedCallback();
  }
  willUpdate(changedProperties) {
    super.willUpdate(changedProperties);
    if (changedProperties.has("showCallout") && this.showCallout) {
      this.#showCalloutState = true;
    }
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("showCallout")) {
      this.#syncCalloutOpenState();
    }
  }
  #syncCalloutOpenState() {
    // If showCallout is true and the popover is not already open, force it open.
    if (!this.showCallout || this.open) {
      return;
    }
    this.open = true;
    this.toggleAttribute("data-open", true);
    this.updateComplete.then(() => this.#focusDeleteButtonAt(0));
    this.#dispatchToggleAppliedMemories({
      isOpen: true
    });
  }
  #dispatchToggleAppliedMemories({
    isOpen
  }) {
    this.dispatchEvent(new CustomEvent("toggle-applied-memories", {
      bubbles: true,
      composed: true,
      detail: {
        messageId: this.messageId,
        open: isOpen
      }
    }));
  }
  get _hasMemories() {
    return Array.isArray(this.appliedMemories) && !!this.appliedMemories.length;
  }
  get _visibleMemories() {
    return this.appliedMemories.slice(0, 5);
  }
  #onTriggerClick(event) {
    event.stopPropagation();
    if (!this._hasMemories) {
      return;
    }
    this.open = !this.open;
    if (!this.open) {
      this.#showCalloutState = false;
    }
    this.toggleAttribute("data-open", this.open);
    if (this.open) {
      this.updateComplete.then(() => this.#focusDeleteButtonAt(0));
    }
    this.#dispatchToggleAppliedMemories({
      isOpen: this.open
    });
  }
  _onPopoverClick(event) {
    event.stopPropagation();
  }
  _onDocumentClick() {
    if (!this.open) {
      return;
    }
    this.#closePopover();
  }
  _onKeyDown(event) {
    if (!this.open) {
      return;
    }
    switch (event.key) {
      case "Escape":
        event.preventDefault();
        event.stopPropagation();
        this.#closePopover();
        this.shadowRoot.querySelector(".memories-trigger")?.focus();
        break;
      case "Tab":
        if (!event.shiftKey && this.shadowRoot.activeElement === this.shadowRoot.querySelector(".retry-without-memories-button")) {
          this.#closePopover();
        }
        break;
      case "ArrowDown":
        event.preventDefault();
        this.#moveDeleteFocus(1);
        break;
      case "ArrowUp":
        event.preventDefault();
        this.#moveDeleteFocus(-1);
        break;
      case "Home":
        event.preventDefault();
        this.#focusDeleteButtonAt(0);
        break;
      case "End":
        event.preventDefault();
        this.#focusDeleteButtonAt(-1);
        break;
    }
  }
  get #deleteButtons() {
    const popover = this.shadowRoot.querySelector(".popover");
    return popover ? [...popover.querySelectorAll(".memories-remove-button")] : [];
  }
  #moveDeleteFocus(direction) {
    const items = this.#deleteButtons;
    if (!items.length) {
      return;
    }
    const active = this.shadowRoot.activeElement;
    const currentIndex = items.indexOf(active);
    const nextIndex = (currentIndex + direction + items.length) % items.length;
    this.#focusDeleteButtonAt(nextIndex);
  }
  #focusDeleteButtonAt(index) {
    const items = this.#deleteButtons;
    if (!items.length) {
      return;
    }
    if (index < 0) {
      index = items.length + index;
    }
    items.forEach((item, i) => {
      item.tabIndex = i === index ? 0 : -1;
    });
    items[index].focus();
  }
  #closePopover() {
    this.open = false;
    this.#showCalloutState = false;
    this.toggleAttribute("data-open", false);
    this.requestUpdate();
    this.#dispatchToggleAppliedMemories({
      isOpen: false
    });
  }
  _onRemoveMemory(event, memory) {
    event.stopPropagation();
    this.dispatchEvent(new CustomEvent("remove-applied-memory", {
      bubbles: true,
      composed: true,
      detail: {
        memory,
        messageId: this.messageId
      }
    }));
  }
  _onRetryWithoutMemories(event) {
    event.stopPropagation();
    this.dispatchEvent(new CustomEvent("retry-without-memories", {
      bubbles: true,
      composed: true,
      detail: {
        messageId: this.messageId
      }
    }));
  }
  _onManageMemories() {
    this.dispatchEvent(new CustomEvent("manage-memories", {
      bubbles: true,
      composed: true
    }));
  }
  renderCallout() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      <div class="memories-callout">
        <p
          class="memories-callout-description"
          data-l10n-id="aiwindow-memories-callout-description"
        ></p>
        <button
          class="memories-callout-learn-more"
          data-focusable
          data-l10n-id="aiwindow-memories-learn-more"
          @click=${() => {
      this.dispatchEvent(new CustomEvent("open-memories-learn-more", {
        bubbles: true,
        composed: true
      }));
    }}
        ></button>
      </div>
    `;
  }
  renderPopover() {
    if (!this._hasMemories) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.nothing;
    }
    const isOpen = this.open || this.#showCalloutState;
    const visibleMemories = this._visibleMemories;
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      <div
        class="popover ${isOpen ? "open" : ""}"
        role="dialog"
        data-l10n-id="aiwindow-applied-memories-popover"
        data-l10n-attrs="aria-label"
        ?inert=${!isOpen}
        @click=${event => this._onPopoverClick(event)}
      >
        ${this.#showCalloutState ? this.renderCallout() : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.nothing}

        <moz-box-group
          class="memories-list"
          role="list"
          data-l10n-id="aiwindow-applied-memories-list"
          data-l10n-attrs="aria-label"
        >
          ${visibleMemories.map(memory => {
      return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
              <moz-box-item
                class="memories-list-item"
                role="listitem"
                .label=${memory.memory_summary}
              >
                <moz-button
                  class="memories-remove-button"
                  tabindex="-1"
                  type="ghost"
                  size="small"
                  iconsrc="chrome://global/skin/icons/delete.svg"
                  data-l10n-id="aiwindow-delete-memory-button"
                  data-l10n-args=${JSON.stringify({
        summary: memory.memory_summary
      })}
                  @click=${event => this._onRemoveMemory(event, memory)}
                  slot="actions"
                ></moz-button>
              </moz-box-item>
            `;
    })}
        </moz-box-group>

        <div id="manage-memories-row" class="popover-action-row">
          <moz-button
            type="ghost"
            size="default"
            iconsrc="chrome://global/skin/icons/settings.svg"
            iconposition="start"
            class="popover-action-row-button manage-memories-button"
            data-l10n-id="aiwindow-manage-memories"
            data-l10n-attrs="label"
            @click=${() => this._onManageMemories()}
          ></moz-button>
        </div>

        <div id="retry-without-memories-row" class="popover-action-row">
          <moz-button
            type="ghost"
            size="default"
            iconsrc="chrome://global/skin/icons/reload.svg"
            iconposition="start"
            class="popover-action-row-button retry-without-memories-button"
            data-l10n-id="aiwindow-retry-without-memories"
            data-l10n-attrs="label"
            @click=${event => this._onRetryWithoutMemories(event)}
          ></moz-button>
        </div>
      </div>
    `;
  }
  render() {
    if (!this._hasMemories) {
      return null;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_ai_chat_content_chat_assistant_footer_applied_memories_button_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <moz-button
        class="memories-trigger"
        type="ghost"
        size="small"
        iconposition="start"
        iconsrc="chrome://browser/content/aiwindow/assets/memories-on.svg"
        aria-haspopup="dialog"
        aria-expanded=${this.open && this._hasMemories}
        data-l10n-id="aiwindow-memories-used"
        data-l10n-attrs="label"
        @click=${event => this.#onTriggerClick(event)}
      ></moz-button>

      ${this.renderPopover()}
    `;
  }
}
customElements.define("applied-memories-button", AppliedMemoriesButton);

/***/ }),

/***/ 5054:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AIWebsiteConfirmation: () => (/* binding */ AIWebsiteConfirmation)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_ai_website_confirmation_ai_website_confirmation_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65554);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);
/* harmony import */ var chrome_browser_content_aiwindow_components_ai_website_select_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99486);
/* harmony import */ var chrome_global_content_elements_moz_button_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79240);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

const SELECTION_CHANGE_EVENT = "ai-website-confirmation:selection-change";
const CLOSE_CONFIRMATION_EVENT = "ai-website-confirmation:close";
const SUBMIT_CONFIRMATION_EVENT = "ai-website-confirmation:submit";

/**
 * A container component for listing and managing multiple AI website selects
 *
 * @property {Array} tabs - Array of tab objects with properties:
 *   {string} linkedPanel - Id of the linked panel (used for associating with tab objects)
 *   {string} title - Display name for the tab
 *   {string} iconSrc - URL for the tab favicon
 *   {string} url - URL of the tab
 *   {boolean} checked - Selection state of the tab
 * @property {object} confirmActionL10n - Fluent IDs for confirm action button:
 *   {string} disabled - L10n ID when button is disabled (no selection)
 *   {string} enabled - L10n ID when button is enabled (has selection)
 * @property {string} actionType - Type of action being performed ("close_tabs" or "group_tabs"), this is passed through in
 * dispatched events for parent handling
 * @property {string} tabGroupLabel - Label of the tab group being acted on, used for context in dispatched events
 */
class AIWebsiteConfirmation extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    tabs: {
      type: Array
    },
    confirmActionL10n: {
      type: Object
    },
    actionType: {
      type: String
    },
    tabGroupLabel: {
      type: String
    }
  };
  constructor() {
    super();
    this.tabs = [];
    // Default to close tabs fluent strings
    this.confirmActionL10n = {
      disabled: "smart-window-confirm-close-tab",
      enabled: "smart-window-confirm-close-tabs"
    };
    this.actionType = "";
    this.tabGroupLabel = "";
  }

  /**
   * Handle selection changes from child ai-website-select components
   *
   * @param {CustomEvent} event - The change event from ai-website-select
   */
  handleSelectChange(event) {
    event.stopPropagation();
    const {
      token,
      checked
    } = event.detail;

    // Use key rows by token because linkedPanel is empty for unloaded tabs
    this.tabs = this.tabs.map(tab => tab.token === token ? {
      ...tab,
      checked
    } : tab);
    this.dispatchSelectionEvent();
  }

  /**
   * Handle Toggle All
   */
  handleToggleAll() {
    if (this.tabs.every(tab => tab.checked)) {
      this.deselectAll();
    } else {
      this.selectAll();
    }
  }

  /**
   * Select all tabs
   */
  selectAll() {
    this.tabs = this.tabs.map(tab => ({
      ...tab,
      checked: true
    }));
    this.dispatchSelectionEvent();
  }

  /**
   * Deselect all tabs
   */
  deselectAll() {
    this.tabs = this.tabs.map(tab => ({
      ...tab,
      checked: false
    }));
    this.dispatchSelectionEvent();
  }

  /**
   * Get currently selected tabs
   *
   * @returns {Array} Array of selected tab objects
   */
  getSelectedTabs() {
    return this.tabs.filter(tab => tab.checked);
  }

  /**
   * Handle close button click
   */
  handleClose() {
    const closeEvent = new CustomEvent(CLOSE_CONFIRMATION_EVENT, {
      bubbles: true,
      composed: true,
      detail: {
        actionType: this.actionType
      }
    });
    this.dispatchEvent(closeEvent);
  }

  /**
   * Handle confirm button click
   */
  handleConfirm() {
    const selectedTabs = this.getSelectedTabs();
    if (selectedTabs.length === 0) {
      return;
    }
    const closeEvent = new CustomEvent(SUBMIT_CONFIRMATION_EVENT, {
      bubbles: true,
      composed: true,
      detail: {
        selectedTabs,
        tabGroupLabel: this.tabGroupLabel
      }
    });
    this.dispatchEvent(closeEvent);
  }

  /**
   * Dispatch selection event helper
   */
  dispatchSelectionEvent() {
    const selectionEvent = new CustomEvent(SELECTION_CHANGE_EVENT, {
      bubbles: true,
      composed: true,
      detail: {
        selectedTabs: this.getSelectedTabs(),
        allTabs: this.tabs
      }
    });
    this.dispatchEvent(selectionEvent);
  }
  render() {
    const allSelected = this.tabs.length && this.tabs.every(tab => tab.checked);
    const toggleButtonL10nId = allSelected ? "smart-window-confirm-deselect-all" : "smart-window-confirm-select-all";
    const selectedCount = this.tabs.filter(tab => tab.checked).length;
    const confirmButtonDisabled = selectedCount === 0;
    const confirmButtonL10nId = confirmButtonDisabled ? this.confirmActionL10n.disabled : this.confirmActionL10n.enabled;
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_ai_website_confirmation_ai_website_confirmation_css__WEBPACK_IMPORTED_MODULE_0__}"
      />

      <moz-button
        class="close-button"
        iconSrc="chrome://global/skin/icons/close.svg"
        @click=${this.handleClose}
        type="ghost icon"
        data-l10n-id="smart-window-close-confirm"
      >
      </moz-button>
      <div class="ai-website-confirmation-wrapper">
        <div class="ai-website-confirmation-container">
          <div class="tabs-list-wrapper">
            <div class="fade-overlay fade-top"></div>
            <div
              class="tabs-list"
              @ai-website-select:change=${this.handleSelectChange}
            >
              ${this.tabs.map(tab => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
                  <ai-website-select
                    .token=${tab.token}
                    .linkedPanel=${tab.linkedPanel}
                    .label=${tab.title}
                    .iconSrc=${tab.iconSrc}
                    .url=${tab.url}
                    .checked=${tab.checked}
                  ></ai-website-select>
                `)}
            </div>
            <div class="fade-overlay fade-bottom"></div>
          </div>
          <div class="actions-section">
            <moz-button
              type="neutral"
              @click=${this.handleToggleAll}
              data-l10n-id=${toggleButtonL10nId}
            >
            </moz-button>
            <moz-button
              @click=${this.handleConfirm}
              type="primary"
              ?disabled=${confirmButtonDisabled}
              data-l10n-id=${confirmButtonL10nId}
              data-l10n-args=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(confirmButtonDisabled ? undefined : JSON.stringify({
      count: selectedCount
    }))}
            >
            </moz-button>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define("ai-website-confirmation", AIWebsiteConfirmation);

/***/ }),

/***/ 5136:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "website-chip-container.2dc0db9a8b938372c127.css";

/***/ }),

/***/ 6266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AIWebsiteChip: () => (/* binding */ AIWebsiteChip)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_ai_website_chip_ai_website_chip_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39894);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * A website chip component for tagging and displaying websites.
 *
 * Two types:
 * - in-line: Supports empty state with "@" symbol + "Tag a tab or site" placeholder
 *   - default: favicon + text
 *   - hover: favicon + text (identical to default)
 *   - empty: "@" symbol + "Tag a tab or site" text
 * - context-chip: No empty state support
 *   - default: favicon + text
 *   - hover (removable): remove button + text
 *   - hover (non-removable): favicon + text (identical to default)
 *
 * @property {string} type - Type of chip: "in-line" or "context-chip"
 * @property {"default" | "small"} size - Chip size
 * @property {string} label - The text content of the chip
 * @property {string} iconSrc - Favicon or icon URL
 * @property {string} href - URL for the link (used with context-chip type)
 * @property {boolean} removable - Whether the chip shows a remove button on hover (default false)
 * @property {string} itemRole - ARIA role for the inner element
 */
class AIWebsiteChip extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  // Forward focus to the inner element for keyboard navigation.
  static shadowRootOptions = {
    ...chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement.shadowRootOptions,
    delegatesFocus: true
  };
  static properties = {
    type: {
      type: String,
      reflect: true
    },
    size: {
      type: String,
      reflect: true
    },
    label: {
      type: String
    },
    iconSrc: {
      type: String
    },
    href: {
      type: String
    },
    removable: {
      type: Boolean
    },
    itemRole: {
      type: String
    }
  };
  #parentHost = null;
  constructor() {
    super();
    this.type = "in-line";
    this.size = "default";
    this.label = "";
    this.iconSrc = "";
    this.href = "";
    this.removable = false;
    this.itemRole = "";
  }
  connectedCallback() {
    super.connectedCallback();
    this.#parentHost = this.getRootNode()?.host;
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    // Dispatch only when the parent is still connected: Chip was removed by
    // the user and not due to the parent unmounting.
    if (this.#parentHost?.isConnected) {
      this.#parentHost.dispatchEvent(new CustomEvent("ai-website-chip:disconnected", {
        bubbles: true,
        composed: true,
        detail: {
          label: this.label,
          type: this.type
        }
      }));
    }
    this.#parentHost = null;
  }
  get #isEmpty() {
    return this.type === "in-line" && !this.label;
  }
  get #isRemovable() {
    return this.removable;
  }
  #handleClick() {
    this.dispatchEvent(new CustomEvent("ai-website-chip:click", {
      bubbles: true,
      composed: true,
      detail: {
        label: this.label
      }
    }));
  }
  #handleRemove(e) {
    e.stopPropagation();
    e.preventDefault();
    this.dispatchEvent(new CustomEvent("ai-website-chip:remove", {
      bubbles: true,
      composed: true,
      detail: {
        label: this.label
      }
    }));
  }
  #handleAnchorClick(e) {
    if (!this.href) {
      return;
    }
    e.preventDefault();
    const hasModifier = e.shiftKey || e.metaKey || e.ctrlKey || e.altKey || e.button !== 0;
    this.dispatchEvent(new CustomEvent("AIChatContent:OpenLink", {
      bubbles: true,
      composed: true,
      detail: {
        url: this.href,
        preferSwitchToTab: !hasModifier,
        shiftKey: e.shiftKey,
        metaKey: e.metaKey,
        ctrlKey: e.ctrlKey,
        altKey: e.altKey,
        button: e.button
      }
    }));
  }
  render() {
    const isEmpty = this.#isEmpty;
    const isRemovable = this.#isRemovable;
    let iconTemplate;
    if (isEmpty) {
      iconTemplate = (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span class="chip-at">@</span>`;
    } else {
      iconTemplate = (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<img
        class="chip-icon"
        src=${this.iconSrc || "chrome://global/skin/icons/defaultFavicon.svg"}
        @error=${e => {
        e.target.src = "chrome://global/skin/icons/defaultFavicon.svg";
      }}
        alt=""
      />`;
    }
    const removeButton = isRemovable ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<button
          class="chip-remove"
          @click=${this.#handleRemove}
          data-l10n-id="aiwindow-website-chip-remove-button"
        >
          <img
            class="chip-remove-icon"
            src="chrome://global/skin/icons/close.svg"
            alt=""
          />
        </button>` : null;
    const labelTemplate = isEmpty ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span
          class="chip-label"
          data-l10n-id="aiwindow-website-chip-placeholder"
        ></span>` : (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span class="chip-label">${this.label}</span>`;
    const chipContent = (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      ${iconTemplate} ${removeButton} ${labelTemplate}
    `;
    const chipElement = this.href ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<a
          class="chip"
          part="chip"
          role=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.itemRole || undefined)}
          ?data-removable=${isRemovable}
          href=${this.href}
          @click=${this.#handleAnchorClick}
        >
          ${chipContent}
        </a>` : (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<button
          class="chip"
          part="chip"
          role=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.itemRole || undefined)}
          ?data-empty=${isEmpty}
          ?data-removable=${isRemovable}
          @click=${this.#handleClick}
        >
          ${chipContent}
        </button>`;
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_ai_website_chip_ai_website_chip_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      ${chipElement}
    `;
  }
}
customElements.define("ai-website-chip", AIWebsiteChip);

/***/ }),

/***/ 9538:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-input-text.e2dcc636077bbb3379c2.css";

/***/ }),

/***/ 9583:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "panel-item.b8a3a645ed7a75455f31.css";

/***/ }),

/***/ 15314:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ai-grouped-chip-container.993bc6275ac4262f1259.css";

/***/ }),

/***/ 15768:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SmartwindowOverflowRowMixin: () => (/* binding */ SmartwindowOverflowRowMixin)
/* harmony export */ });
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * Renders and collapses overflowing items matching the defined selectors.
 *
 * @param {typeof import("chrome://global/content/lit-utils.mjs").MozLitElement} BaseElement
 * @returns {typeof BaseElement}
 */
const SmartwindowOverflowRowMixin = BaseElement => class extends BaseElement {
  static properties = {
    visibleCount: {
      type: Number,
      state: true
    }
  };
  #resizeObserver = null;
  #lastWidth = null;
  #measureRaf = 0;
  constructor() {
    super();
    this.visibleCount = Infinity;
  }

  /**
   * @returns {string} Selector for the flex row.
   */
  get overflowContainerSelector() {
    return ".smartwindow-overflow-row";
  }

  /**
   * @returns {string} Selector for the items.
   */
  get overflowItemSelector() {
    return ":scope > [role='listitem']";
  }

  /**
   * @returns {?string} Selector for the “+n more” button.
   */
  get overflowTriggerSelector() {
    return ".overflow-more";
  }

  /**
   * @returns {number} Cap applied on top of what fits.
   */
  get maxInlineItems() {
    return Infinity;
  }

  /**
   * @returns {?number} Fixed inline count skips measurement.
   */
  get inlineItemCount() {
    return null;
  }

  /**
   * @returns {boolean} Whether the inline count comes from measuring.
   */
  get isWidthAware() {
    return !Number.isFinite(this.inlineItemCount);
  }

  /**
   * @returns {Array} The overflowing items.
   */
  get overflowItems() {
    return [];
  }

  /**
   * Whether a width-aware measure is scheduled. Exposed for tests to await.
   *
   * @returns {boolean}
   */
  get isMeasuring() {
    return !!this.#measureRaf;
  }
  connectedCallback() {
    super.connectedCallback();
    if (this.hasUpdated) {
      this.syncOverflowMode();
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.#stopMeasuring();
  }
  updated(changed) {
    /* Getters are consumer-defined and measuring is a no-op for an unchanged
       count. Run on every render to ensure we don’t measure a stale tree. */
    super.updated(changed);
    this.syncOverflowMode();
  }

  /* Apply the current overflow mode. */
  syncOverflowMode() {
    if (this.isWidthAware) {
      this.#observeWidth();
      this.scheduleOverflowMeasure();
      return;
    }
    this.#stopMeasuring();
    this.#setVisibleCount(Math.max(0, this.inlineItemCount));
  }

  /* Measure next frame so layout has settled. */
  scheduleOverflowMeasure() {
    if (this.#measureRaf || !this.isWidthAware) {
      return;
    }
    this.#measureRaf = requestAnimationFrame(() => {
      this.#measureRaf = 0;
      this.#measureOverflow();
    });
  }
  #observeWidth() {
    this.#resizeObserver ??= new ResizeObserver(entries => {
      const inlineSize = entries[0]?.contentBoxSize?.[0]?.inlineSize;
      if (inlineSize == null || inlineSize === this.#lastWidth) {
        return;
      }
      this.#lastWidth = inlineSize;
      this.scheduleOverflowMeasure();
    });
    this.#resizeObserver.observe(this);
  }
  #stopMeasuring() {
    this.#resizeObserver?.disconnect();
    this.#resizeObserver = null;
    this.#lastWidth = null;
    cancelAnimationFrame(this.#measureRaf);
    this.#measureRaf = 0;
  }
  #setVisibleCount(count) {
    if (this.visibleCount !== count) {
      this.visibleCount = count;
    }
  }
  #measureOverflow() {
    const container = this.renderRoot?.querySelector(this.overflowContainerSelector);
    const items = this.overflowItems;
    if (!container || !items.length) {
      return;
    }
    const children = [...container.querySelectorAll(this.overflowItemSelector)];
    // A stale render would measure the wrong nodes.
    if (children.length !== items.length) {
      return;
    }
    const columnGap = parseFloat(getComputedStyle(container).columnGap) || 0;
    const cumulativeItemWidths = [0];
    for (const child of children) {
      cumulativeItemWidths.push(cumulativeItemWidths.at(-1) + child.getBoundingClientRect().width + columnGap);
    }

    // The trigger is only rendered if the row overflows.
    if (children.length <= this.maxInlineItems && cumulativeItemWidths.at(-1) - columnGap <= container.clientWidth) {
      this.#setVisibleCount(children.length);
      return;
    }
    const trigger = this.overflowTriggerSelector ? container.querySelector(this.overflowTriggerSelector) : null;
    const triggerWidth = trigger?.getBoundingClientRect().width ?? 0;
    let visibleCount = Math.min(children.length, this.maxInlineItems);
    while (visibleCount && cumulativeItemWidths[visibleCount] + triggerWidth > container.clientWidth) {
      visibleCount--;
    }
    this.#setVisibleCount(visibleCount);
  }
};

/***/ }),

/***/ 18400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozSupportLink),
/* harmony export */   formatUTMParams: () => (/* binding */ formatUTMParams)
/* harmony export */ });
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

window.MozXULElement?.insertFTLIfNeeded("toolkit/global/mozSupportLink.ftl");

/**
 * An extension of the anchor element that helps create links to Mozilla's
 * support documentation. This should be used for SUMO links only - other "Learn
 * more" links can use the regular anchor element.
 *
 * @tagname moz-support-link
 * @attribute {string} support-page - Short-hand string from SUMO to the specific support page.
 * @attribute {string} utm-content - UTM parameter for a URL, if it is an AMO URL.
 * @attribute {string} data-l10n-id - Fluent ID used to generate the text content.
 */
class MozSupportLink extends HTMLAnchorElement {
  static SUPPORT_URL = "https://www.mozilla.org/";
  static get observedAttributes() {
    return ["support-page", "utm-content"];
  }

  /**
   * Handles setting up the SUPPORT_URL preference getter.
   * Without this, the tests for this component may not behave
   * as expected.
   *
   * @memberof MozSupportLink
   */
  #register() {
    if (window.document.nodePrincipal?.isSystemPrincipal) {
      ChromeUtils.defineESModuleGetters(MozSupportLink, {
        BrowserUtils: "resource://gre/modules/BrowserUtils.sys.mjs"
      });

      // eslint-disable-next-line no-shadow
      let {
        XPCOMUtils
      } = window.XPCOMUtils ? window : ChromeUtils.importESModule("resource://gre/modules/XPCOMUtils.sys.mjs");
      XPCOMUtils.defineLazyPreferenceGetter(MozSupportLink, "SUPPORT_URL", "app.support.baseURL", "", null, val => Services.urlFormatter.formatURL(val));
    } else if (!window.IS_STORYBOOK) {
      MozSupportLink.SUPPORT_URL = window.RPMGetFormatURLPref("app.support.baseURL");
    }
  }
  connectedCallback() {
    this.#register();
    this.#setHref();
    this.setAttribute("target", "_blank");
    this.addEventListener("click", this);
    if (!this.getAttribute("data-l10n-id") && !this.getAttribute("data-l10n-name") && !this.childElementCount) {
      document.l10n.setAttributes(this, "moz-support-link-text");
    }
    document.l10n.translateFragment(this);
  }
  disconnectedCallback() {
    this.removeEventListener("click", this);
  }
  get supportPage() {
    return this.getAttribute("support-page");
  }
  set supportPage(val) {
    this.setAttribute("support-page", val);
  }
  handleEvent(e) {
    if (e.type == "click") {
      if (window.openTrustedLinkIn) {
        let where = MozSupportLink.BrowserUtils.whereToOpenLink(e, false, true);
        if (where == "current") {
          where = "tab";
        }
        e.preventDefault();
        openTrustedLinkIn(this.href, where);
      }
    }
  }
  attributeChangedCallback(attrName) {
    if (attrName === "support-page" || attrName === "utm-content") {
      this.#setHref();
    }
  }
  #setHref() {
    let supportPage = this.getAttribute("support-page") ?? "";
    let base = MozSupportLink.SUPPORT_URL + supportPage;
    this.href = this.hasAttribute("utm-content") ? formatUTMParams(this.getAttribute("utm-content"), base) : base;
  }
}
customElements.define("moz-support-link", MozSupportLink, {
  extends: "a"
});

/**
 * Adds UTM parameters to a given URL, if it is an AMO URL.
 *
 * @param {string} contentAttribute
 *        Identifies the part of the UI with which the link is associated.
 * @param {string} url
 * @returns {string}
 *          The url with UTM parameters if it is an AMO URL.
 *          Otherwise the url in unmodified form.
 */
function formatUTMParams(contentAttribute, url) {
  if (!contentAttribute) {
    return url;
  }
  let parsedUrl = new URL(url);
  let domain = `.${parsedUrl.hostname}`;
  if (!domain.endsWith(".mozilla.org") &&
  // For testing: addons-dev.allizom.org and addons.allizom.org
  !domain.endsWith(".allizom.org")) {
    return url;
  }
  parsedUrl.searchParams.set("utm_source", "firefox-browser");
  parsedUrl.searchParams.set("utm_medium", "firefox-browser");
  parsedUrl.searchParams.set("utm_content", contentAttribute);
  return parsedUrl.href;
}

/***/ }),

/***/ 22356:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "chat-assistant-error.fcb349f926eef4a96928.css";

/***/ }),

/***/ 23066:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-box-group.eec2be21217d4c36b8b2.css";

/***/ }),

/***/ 24920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozInputUrl)
/* harmony export */ });
/* harmony import */ var chrome_global_content_elements_moz_input_text_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65944);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



/**
 * A URL input custom element.
 *
 * @tagname moz-input-url
 * @property {string} label - The text of the label element
 * @property {string} name - The name of the input control
 * @property {string} value - The value of the input control
 * @property {boolean} disabled - The disabled state of the input control
 * @property {boolean} readonly - The readonly state of the input control
 * @property {string} iconSrc - The src for an optional icon
 * @property {string} description - The text for the description element that helps describe the input control
 * @property {string} supportPage - Name of the SUMO support page to link to.
 * @property {string} placeholder - Text to display when the input has no value.
 */
class MozInputUrl extends chrome_global_content_elements_moz_input_text_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
  inputTemplate() {
    return super.inputTemplate({
      type: "url"
    });
  }
}
customElements.define("moz-input-url", MozInputUrl);

/***/ }),

/***/ 26284:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var toolkit_content_widgets_moz_label_moz_label_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76150);

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
          this.#insertSeparator = Services.locale.insertSeparatorBeforeAccesskeys;
          this.#alwaysAppendAccessKey = Services.locale.alwaysAppendAccesskeys;
        } catch {
          this.#insertSeparator = this.#alwaysAppendAccessKey = true;
        }
      }
    }
  }
  #startMutationObserver() {
    if (!this.#observer) {
      return;
    }
    this.#observer.observe(this, {
      characterData: true,
      childList: true,
      subtree: true
    });
  }
  #stopMutationObserver() {
    if (!this.#observer) {
      return;
    }
    this.#observer.disconnect();
  }
  connectedCallback() {
    this.#setStyles();
    this.formatAccessKey();
    if (!this.#observer) {
      this.#observer = new MutationObserver(() => {
        this.#lastFormattedAccessKey = null;
        this.formatAccessKey();
      });
      this.#startMutationObserver();
    }
  }
  disconnectedCallback() {
    if (this.#observer) {
      this.#stopMutationObserver();
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
    if ((controlElement.localName == "checkbox" || controlElement.localName == "radio") && controlElement.hasAttribute("disabled")) {
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
    this.#stopMutationObserver();
    try {
      this.#formatAccessKey(accessKey);
    } finally {
      queueMicrotask(() => this.#startMutationObserver());
    }
  }
  #formatAccessKey(accessKey) {
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

/***/ 27482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KitMention: () => (/* binding */ KitMention)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_kit_mention_kit_mention_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83222);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




// Slightly longer than the 4.04s animation baked into kit.svg, to leave
// slack for setTimeout drift (background throttling, streaming jank) so
// the tail of the animation isn't clipped.
const VISIBLE_MS = 4200;

/**
 * Easter-egg overlay that plays the Kit animation once per conversation
 * when triggered with a `MENTION_DEFINITE` payload.
 *
 * Positioning is controlled by the `variant` attribute (`sidebar` or
 * `fullpage`); the two variants anchor to different layout contexts
 * because the chrome `<ai-window>` and the embedded chat-content document
 * have different viewports.
 */
class KitMention extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    variant: {
      type: String,
      reflect: true
    },
    show: {
      type: Boolean,
      state: true
    }
  };
  #shownForConvId = null;
  #hideTimeoutId = null;
  constructor() {
    super();
    this.show = false;
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.#hideTimeoutId !== null) {
      clearTimeout(this.#hideTimeoutId);
      this.#hideTimeoutId = null;
    }
  }
  trigger({
    value,
    convId
  } = {}) {
    if (value !== "MENTION_DEFINITE") {
      return;
    }
    if (this.#shownForConvId === convId) {
      return;
    }
    this.#shownForConvId = convId;
    this.show = true;
    this.#hideTimeoutId = setTimeout(() => {
      this.#hideTimeoutId = null;
      this.show = false;
    }, VISIBLE_MS);
  }
  reset() {
    this.#shownForConvId = null;
    this.show = false;
    if (this.#hideTimeoutId !== null) {
      clearTimeout(this.#hideTimeoutId);
      this.#hideTimeoutId = null;
    }
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_kit_mention_kit_mention_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      ${this.show ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<img
            src="chrome://browser/content/aiwindow/assets/kit.svg"
            alt=""
            aria-hidden="true"
          />` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
    `;
  }
}
customElements.define("kit-mention", KitMention);

/***/ }),

/***/ 27534:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "panel-list.8c017ce5f1bd100e68ad.css";

/***/ }),

/***/ 27912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozTextarea)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_textarea_moz_textarea_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58210);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_elements_moz_input_text_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65944);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * A textarea custom element.
 *
 * @tagname moz-textarea
 * @property {string} label - The text of the label element.
 * @property {string} name - The name of the textarea control.
 * @property {string} value - The value of the textarea control.
 * @property {boolean} disabled - The disabled state of the textarea control.
 * @property {boolean} readonly - The readonly state of the textarea control.
 * @property {string} description - The text for the description element that helps describe the textarea control.
 * @property {string} supportPage - Name of the SUMO support page to link to.
 * @property {string} placeholder - Text to display when the textarea has no value.
 * @property {string} iconSrc - The src for an optional icon.
 * @property {string} ariaLabel - The aria-label text when there is no visible label.
 * @property {string} ariaDescription - The aria-description text when there is no visible description.
 * @property {number} rows - The number of visible text rows.
 */
class MozTextarea extends chrome_global_content_elements_moz_input_text_mjs__WEBPACK_IMPORTED_MODULE_2__["default"] {
  static properties = {
    ...chrome_global_content_elements_moz_input_text_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].properties,
    rows: {
      type: Number,
      reflect: true
    }
  };
  constructor() {
    super();
    this.rows = 2;
  }
  inputStylesTemplate() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      ${super.inputStylesTemplate()}
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_textarea_moz_textarea_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
    `;
  }
  inputTemplate() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <textarea
        id="input"
        name=${this.name}
        rows=${this.rows}
        .value=${this.value}
        ?disabled=${this.disabled || this.parentDisabled}
        ?readonly=${this.readonly}
        accesskey=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.accessKey)}
        placeholder=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.placeholder)}
        aria-label=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.ariaLabel ?? undefined)}
        aria-describedby="description"
        aria-description=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.hasDescription ? undefined : this.ariaDescription)}
        @input=${this.handleInput}
        @change=${this.redispatchEvent}
      ></textarea>
    `;
  }
}
customElements.define("moz-textarea", MozTextarea);

/***/ }),

/***/ 27984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatAssistantError: () => (/* binding */ ChatAssistantError)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_ai_chat_content_chat_assistant_error_chat_assistant_error_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22356);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82242);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(616);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */




/**
 * Numeric error codes received from the back-end via error.error.
 * Codes 1-6 are MLPA spec codes; 7 is set locally for Fastly-blocked 406s
 * (e.g. when the user's IP is blocked behind a VPN).
 */
const ERROR_CODES = {
  BUDGET_EXCEEDED: 1,
  RATE_LIMIT_EXCEEDED: 2,
  CHAT_MAX_LENGTH: 3,
  MAX_USERS_REACHED: 4,
  UPSTREAM_RATE_LIMIT: 5,
  FASTLY_WAF_RATE_LIMIT: 6,
  FASTLY_BLOCKED: 7
};

/**
 * Shows an error message based on an error code
 */
class ChatAssistantError extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.MozLitElement {
  /**
   * @typedef {object} ErrorObject
   * @property {number|string} [error] - Error subcode - number for 429, string for others
   */
  static properties = {
    error: {
      type: Object
    },
    actionButton: {
      type: Object
    },
    errorText: {
      type: Object
    }
  };
  constructor() {
    super();
    this.setGenericError();
  }
  willUpdate(changed) {
    if (changed.has("error")) {
      this.getErrorInformation();
    }
  }
  openNewChat() {
    const event = new CustomEvent("aiChatError:new-chat", {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }
  openAccountSignIn() {
    const event = new CustomEvent("aiChatError:sign-in", {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }
  retryAssistantMessage() {
    const event = new CustomEvent("aiChatError:retry-message", {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }
  setGenericError() {
    this.errorText = {
      header: "smartwindow-assistant-error-generic-header"
    };
    this.actionButton = {
      label: "smartwindow-retry-btn",
      action: this.retryAssistantMessage.bind(this)
    };
  }
  getErrorInformation() {
    if (!this.error) {
      return;
    }
    if (this.error.clientReason === "fxaTokenUnavailable") {
      this.errorText = {
        header: "smartwindow-assistant-error-account-header"
      };
      this.actionButton = {
        label: "smartwindow-signin-btn",
        action: this.openAccountSignIn.bind(this)
      };
      return;
    }
    switch (this.error.error) {
      case ERROR_CODES.CHAT_MAX_LENGTH:
        this.errorText = {
          header: "smartwindow-assistant-error-max-length-header"
        };
        this.actionButton = {
          label: "smartwindow-clear-btn",
          action: this.openNewChat.bind(this)
        };
        break;
      case ERROR_CODES.RATE_LIMIT_EXCEEDED:
      case ERROR_CODES.UPSTREAM_RATE_LIMIT:
      case ERROR_CODES.FASTLY_WAF_RATE_LIMIT:
        this.errorText = {
          header: "smartwindow-assistant-error-many-requests-header"
        };
        this.actionButton = null;
        break;
      case ERROR_CODES.BUDGET_EXCEEDED:
        this.errorText = {
          header: "smartwindow-assistant-error-budget-header",
          body: "smartwindow-assistant-error-budget-body"
        };
        this.actionButton = null;
        break;
      case ERROR_CODES.MAX_USERS_REACHED:
        this.errorText = {
          header: "smartwindow-assistant-error-capacity-header"
        };
        this.actionButton = null;
        break;
      case ERROR_CODES.FASTLY_BLOCKED:
        this.errorText = {
          header: "smartwindow-assistant-error-request-blocked-header"
        };
        this.actionButton = null;
        break;
      default:
        this.setGenericError();
        if (this.error.httpStatus) {
          this.errorText = {
            header: "smartwindow-assistant-error-http-header",
            args: {
              status: this.error.httpStatus
            }
          };
        }
        break;
    }
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_ai_chat_content_chat_assistant_error_chat_assistant_error_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <div class="chat-assistant-error">
        <h3
          class="chat-assistant-error__header"
          data-l10n-id=${this.errorText?.header}
          data-l10n-args=${this.errorText?.args ? JSON.stringify(this.errorText.args) : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.nothing}
        ></h3>
        ${this.errorText?.body ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<p
              class="chat-assistant-error__body"
              data-l10n-id=${this.errorText?.body}
            ></p>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.nothing}
        ${this.actionButton ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<moz-button
              class="chat-assistant-error__button"
              data-l10n-id=${this.actionButton?.label}
              size="small"
              type="ghost"
              @click=${this.actionButton?.action}
            ></moz-button>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.nothing}
      </div>
    `;
  }
}
customElements.define("chat-assistant-error", ChatAssistantError);

/***/ }),

/***/ 30082:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-button.f67d7f67c6092f201516.css";

/***/ }),

/***/ 30160:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GROUP_TYPES: () => (/* binding */ GROUP_TYPES),
/* harmony export */   "default": () => (/* binding */ MozBoxGroup)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_box_group_moz_box_group_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23066);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



const GROUP_TYPES = {
  list: "list",
  reorderable: "reorderable-list"
};

/**
 * An element used to group combinations of moz-box-item, moz-box-link, and
 * moz-box-button elements and provide the expected styles.
 *
 * @tagname moz-box-group
 * @property {string} type
 *   The type of the group, either "list", "reorderable-list", or undefined.
 *   Note that "reorderable-list" only works with moz-box-item elements for now.
 * @slot default - Slot for rendering various moz-box-* elements.
 * @slot static - Slot for rendering non-reorderable moz-box-item elements.
 * @slot <index> - Slots used to assign moz-box-* elements to <li> elements when
 *   the group is type="list".
 * @slot <static-index>
 *   Slots used to render moz-box-item elements that are not intended to be reorderable
 *   when the group is type="reorderable-list".
 * @fires reorder
 *  Fired when items are reordered via drag-and-drop or keyboard shortcuts.
 *  The detail object contains draggedElement, targetElement, position, draggedIndex, targetIndex, and insertAt.
 * @fires scroll
 *  Re-dispatched on the host when a scroll container in the shadow tree
 *  scrolls, so light DOM listeners can observe scrolls that wouldn't otherwise
 *  cross the shadow boundary.
 */

class MozBoxGroup extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  #tabbable = true;
  static properties = {
    type: {
      type: String
    },
    listItems: {
      type: Array,
      state: true
    },
    staticItems: {
      type: Array,
      state: true
    }
  };
  static queries = {
    reorderableList: "moz-reorderable-list",
    headerSlot: "slot[name='header']",
    footerSlot: "slot[name='footer']"
  };
  constructor() {
    super();
    /** @type {Element[]} */
    this.listItems = [];
    /** @type {Element[]} */
    this.staticItems = [];
    this.listMutationObserver = new MutationObserver(this.updateItems.bind(this));
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.listMutationObserver.observe(this, {
      attributeFilter: ["hidden"],
      subtree: true,
      childList: true
    });
    // Capture scrolls from any scroll container in component shadow tree.
    this.renderRoot.addEventListener("scroll", this.#forwardScroll, {
      capture: true
    });
    this.updateItems();
  }

  // Re-dispatch on the host so light DOM listeners (e.g. an anchored
  // panel-list's hide-on-scroll) see scrolls that can't cross the shadow root.
  #forwardScroll = () => {
    this.dispatchEvent(new Event("scroll", {
      composed: true
    }));
  };

  /**
   * Whether this group renders its items as a list.
   *
   * @returns {boolean}
   */
  get isListType() {
    return this.type == GROUP_TYPES.list || this.type == GROUP_TYPES.reorderable;
  }
  contentTemplate() {
    if (this.type == GROUP_TYPES.reorderable) {
      return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<moz-reorderable-list
        class="scroll-container"
        itemselector="moz-box-item:not([static])"
        dragselector=".handle"
        @reorder=${this.handleReorder}
      >
        ${this.slotTemplate()}
      </moz-reorderable-list>`;
    }
    return this.slotTemplate();
  }
  slotTemplate() {
    let isReorderable = this.type == GROUP_TYPES.reorderable;
    if (this.isListType) {
      let listTag = isReorderable ? (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.literal)`ol` : (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.literal)`ul`;
      return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.staticHtml)`<${listTag}
          tabindex="-1"
          role=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(isReorderable ? "listbox" : undefined)}
          class="list scroll-container"
          aria-orientation="vertical"
          @keydown=${this.handleKeydown}
          @focusin=${this.handleFocus}
          @focusout=${this.handleBlur}
        >
          ${this.listItems.map((_, i) => {
        return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<li
              role=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(isReorderable ? "presentation" : undefined)}
            >
              <slot name=${i}></slot>
            </li> `;
      })}
          ${this.staticItems?.map((_, i) => {
        return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<li
              role=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(isReorderable ? "presentation" : undefined)}
            >
              <slot name=${`static-${i}`}></slot>
            </li> `;
      })}
        </${listTag}>
        <slot hidden></slot>
        ${isReorderable ? (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<slot name="static" hidden></slot>` : ""}`;
    }
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div class="scroll-container" tabindex="-1">
      <slot></slot>
    </div>`;
  }

  /**
   * Returns the moz-box element for a list item: either the item itself
   * if it matches, or the first moz-box descendant (e.g. when the item is
   * a setting-control wrapper). Returns null if neither is a moz-box element.
   *
   * @param {Element} listItem
   * @returns {Element | null}
   */
  getMozBoxElement(listItem) {
    let selector = "moz-box-item, moz-box-link, moz-box-button";
    if (listItem.matches(selector)) {
      return listItem;
    }
    return listItem.querySelector(selector);
  }

  /**
   * Resets the tabindex on an item so it participates in focus traversal
   * again. moz-box-item in list is made focusable directly; other items defer to
   * their inner focusable descendants.
   *
   * @param {Element} item
   */
  restoreTabindex(item) {
    let element = this.getMozBoxElement(item);
    if (element?.localName === "moz-box-item") {
      if (this.isListType) {
        element.setAttribute("tabindex", "0");
      } else {
        element.removeAttribute("tabindex");
      }
    } else {
      item.removeAttribute("tabindex");
    }
  }

  /**
   * Sets role option on the item's underlying moz-box element when
   * the group renders as a reorderable list, and removes it otherwise.
   *
   * @param {Element} item
   */
  updateOptionRole(item) {
    let option = this.getMozBoxElement(item);
    if (option && this.type == GROUP_TYPES.reorderable) {
      option.setAttribute("role", "option");
    } else {
      option?.removeAttribute("role");
    }
  }

  /**
   * Reorder an array based on the reorder event. For consumers that store
   * the items in an array, you can use this to get the new ordering after the
   * reorder operation.
   *
   * @example
   * onReorder(event) {
   *   this.items = event.target.reorderArrayFromEvent(this.items, event);
   *   this.saveItems(this.items);
   * }
   *
   * @param {any[]} array The array of items that represent this group.
   * @param {CustomEvent} event The reorder event dispatched from this group.
   * @returns {any[]} The reordered array.
   */
  reorderArrayFromEvent(array, event) {
    let {
      draggedIndex,
      insertAt
    } = event.detail;
    array = Array.from(array);
    let [moved] = array.splice(draggedIndex, 1);
    array.splice(insertAt, 0, moved);
    return array;
  }

  /**
   * Handles reordering of items in the list.
   *
   * @param {object} event - Event object or wrapper containing detail from moz-reorderable-list.
   * @param {object} event.detail - Detail object from moz-reorderable-list.evaluateKeyDownEvent or drag-and-drop event.
   * @param {Element} event.detail.draggedElement - The element being reordered.
   * @param {Element} event.detail.targetElement - The target element to reorder relative to.
   * @param {number} event.detail.position - Position relative to target (-1 for before, 0 for after).
   * @param {number} event.detail.draggedIndex - The index of the element being reordered.
   * @param {number} event.detail.targetIndex - The index of the target element.
   * @param {number} event.detail.insertAt - The index at which to insert the draggedElement after removing it from its original position.
   */
  handleReorder(event) {
    let {
      targetIndex
    } = event.detail;
    this.dispatchEvent(new CustomEvent("reorder", {
      bubbles: true,
      detail: event.detail
    }));

    /**
     * Without requesting an animation frame, we will lose focus within
     * the box group when using Ctrl + Shift + ArrowDown. The focus will
     * move to the browser chrome which is unexpected.
     *
     */
    requestAnimationFrame(() => {
      this.listItems[targetIndex]?.focus();
    });
  }
  handleKeydown(event) {
    let item = event.originalTarget;
    if (item.localName === "moz-box-item" && item.isDraggable) {
      let detail = this.reorderableList.evaluateKeyDownEvent(event);
      if (detail) {
        event.preventDefault();
        event.stopPropagation();
        this.handleReorder({
          detail
        });
        return;
      }
    }

    // Plain arrows are for navigation between rows. Any modifier
    // means this isn't a navigation key.
    if (event.ctrlKey || event.shiftKey || event.altKey || event.metaKey) {
      return;
    }
    let positionElement = event.target.closest("[position]");
    if (!positionElement) {
      // If the user has clicked on the MozBoxGroup it may get keydown events
      // even if there is no focused element within it. Then the event target
      // will be the <ul> and we won't find an element with [position].
      return;
    }
    let positionAttr = positionElement.getAttribute("position");
    let currentPosition = parseInt(positionAttr);
    let allItems = [...this.listItems, ...this.staticItems];
    switch (event.key) {
      case "Down":
      case "ArrowDown":
        {
          event.preventDefault();
          let nextItem = allItems[currentPosition + 1];
          nextItem?.focus(event);
          break;
        }
      case "Up":
      case "ArrowUp":
        {
          event.preventDefault();
          let prevItem = allItems[currentPosition - 1];
          prevItem?.focus(event);
          break;
        }
    }
  }
  handleFocus(event) {
    if (this.#tabbable) {
      let activeElement = event.target.closest("[position]");
      if (!activeElement) {
        // Focus landed on the list container itself (e.g. clicking on
        // whitespace)
        return;
      }
      this.#tabbable = false;
      let activeMozBox = this.getMozBoxElement(activeElement);
      let allItems = [...this.listItems, ...this.staticItems];
      allItems.forEach(item => {
        let element = this.getMozBoxElement(item);
        // For moz-box-item, tabindex applies directly to it. Other elements
        // delegate focus to an inner control.
        if (element?.localName === "moz-box-item") {
          element.setAttribute("tabindex", element === activeMozBox ? "0" : "-1");
        } else {
          item.setAttribute("tabindex", "-1");
        }
      });
    }
  }
  handleBlur() {
    if (!this.#tabbable) {
      this.#tabbable = true;
      let allItems = [...this.listItems, ...this.staticItems];
      allItems.forEach(item => {
        this.restoreTabindex(item);
      });
    }
  }
  updateItems() {
    /** @type {Element[]} */
    let listItems = [];
    /** @type {Element[]} */
    let staticItems = [];
    [...this.children].forEach(child => {
      if (child.slot === "header" || child.slot === "footer" || child.hidden) {
        return;
      }
      if (child.slot.includes("static")) {
        staticItems.push(child);
      } else {
        listItems.push(child);
      }
    });
    this.listItems = listItems;
    this.staticItems = staticItems;
  }
  render() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_box_group_moz_box_group_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <slot name="header"></slot>
      ${this.contentTemplate()}
      <slot name="footer"></slot>
    `;
  }
  updated(changedProperties) {
    let headerNode = this.headerSlot.assignedNodes()[0];
    let footerNode = this.footerSlot.assignedNodes().at(-1);
    headerNode?.classList.add("first");
    footerNode?.classList.add("last");
    if (changedProperties.has("listItems") && this.listItems.length) {
      this.listItems.forEach((item, i) => {
        if (this.isListType) {
          item.slot = i;
        }
        item.setAttribute("position", i);
        item.classList.toggle("first", i == 0 && !headerNode);
        item.classList.toggle("last", i == this.listItems.length - 1 && !this.staticItems.length && !footerNode);
        this.restoreTabindex(item);
        this.updateOptionRole(item);
      });
      if (!this.#tabbable) {
        this.#tabbable = true;
      }
    }
    if (changedProperties.has("staticItems") && this.staticItems.length) {
      this.staticItems.forEach((item, i) => {
        item.slot = `static-${i}`;
        item.setAttribute("position", this.listItems.length + i);
        let staticEl = item.querySelector("moz-box-item") ?? item;
        staticEl.setAttribute("static", "");
        item.classList.toggle("first", i == 0 && !this.listItems.length && !headerNode);
        item.classList.toggle("last", i == this.staticItems.length - 1 && !footerNode);
        this.restoreTabindex(item);
        this.updateOptionRole(item);
      });
    }
    if (changedProperties.has("type") && this.isListType) {
      this.updateItems();
    }
  }
}
customElements.define("moz-box-group", MozBoxGroup);

/***/ }),

/***/ 30226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozCheckbox)
/* harmony export */ });
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82242);
/* harmony import */ var chrome_global_content_elements_moz_label_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26284);
/* harmony import */ var chrome_global_content_elements_moz_support_link_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18400);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import


/**
 * A checkbox input with a label.
 *
 * @tagname moz-checkbox
 * @property {string} label - The text of the label element
 * @property {string} name - The name of the checkbox input control
 * @property {string} value - The value of the checkbox input control
 * @property {boolean} checked - The state of the checkbox element,
 *  also controls whether the checkbox is initially rendered as
 *  being checked.
 * @property {boolean} disabled - The disabled state of the checkbox input
 * @property {string} iconSrc - The src for an optional icon
 * @property {string} description - The text for the description element that helps describe the checkbox
 * @property {string} supportPage - Name of the SUMO support page to link to.
 * @property {string} ariaLabel - The aria-label text when there is no visible label.
 * @property {string} ariaDescription - The aria-description text when there is no visible description.
 */
class MozCheckbox extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.MozBaseInputElement {
  static properties = {
    checked: {
      type: Boolean,
      reflect: true
    }
  };
  static activatedProperty = "checked";
  constructor() {
    super();
    this.checked = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.defaultChecked = this.getAttribute("checked") || this.checked;
    this.checked = !!this.defaultChecked;
    let val = this.getAttribute("value");
    if (!val) {
      this.defaultValue = "on";
      this.value = "on";
    } else {
      this.defaultValue = val;
      this.value = val;
    }
    this.setFormValue(this.value);
  }

  /**
   * Handles click events and keeps the checkbox checked value in sync
   *
   * @param {Event} event
   * @memberof MozCheckbox
   */
  handleStateChange(event) {
    this.checked = event.target.checked;
    if (this.checked) {
      this.setFormValue(this.value);
    } else {
      this.setFormValue(null);
    }
  }
  formResetCallback() {
    this.checked = this.defaultChecked;
    this.value = this.defaultValue;
  }
  inputTemplate() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<input
      id="input"
      type="checkbox"
      name=${this.name}
      .value=${this.value}
      .checked=${this.checked}
      @click=${this.handleStateChange}
      @change=${this.redispatchEvent}
      ?disabled=${this.disabled || this.parentDisabled}
      aria-label=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(this.ariaLabel ?? undefined)}
      aria-describedby="description"
      aria-description=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(this.hasDescription ? undefined : this.ariaDescription)}
      accesskey=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(this.accessKey)}
    />`;
  }
}
customElements.define("moz-checkbox", MozCheckbox);

/***/ }),

/***/ 32984:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "agent-monitor-item.cf4bf29ff3b277e08a95.css";

/***/ }),

/***/ 36490:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "chat-assistant-loader.9603966d791a86ac9dad.css";

/***/ }),

/***/ 37752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelItem: () => (/* binding */ PanelItem),
/* harmony export */   PanelList: () => (/* binding */ PanelList)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_panel_list_panel_item_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9583);
/* harmony import */ var toolkit_content_widgets_panel_list_panel_list_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27534);


/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

class PanelList extends HTMLElement {
  static get observedAttributes() {
    return ["open"];
  }
  static get fragment() {
    if (!this._template) {
      let parser = new DOMParser();
      let cssPath = toolkit_content_widgets_panel_list_panel_list_css__WEBPACK_IMPORTED_MODULE_1__;
      let doc = parser.parseFromString(`
          <template>
            <link rel="stylesheet" href=${cssPath}>
            <div class="arrow top" role="presentation"></div>
            <div class="list" role="presentation">
              <slot></slot>
            </div>
            <div class="arrow bottom" role="presentation"></div>
          </template>
        `, "text/html");
      this._template = document.importNode(doc.querySelector("template"), true);
    }
    return this._template.content.cloneNode(true);
  }
  constructor() {
    super();
    this.attachShadow({
      mode: "open"
    });
    this.shadowRoot.appendChild(this.constructor.fragment);
  }
  connectedCallback() {
    this.setAttribute("role", "menu");
    this.initializePopover();
  }

  // Let the XUL panel handle the positioning and alignment of the
  // panel-list. Submenus also don't support popover as they need
  // to be anchored to the parent panel-list.
  supportsPopover() {
    return !this.parentIsXULPanel() && !this.lastAnchorNode?.hasSubmenu && this.getAttribute("slot") !== "submenu";
  }
  initializePopover() {
    if (this.supportsPopover() && !this.hasAttribute("popover")) {
      this.setAttribute("popover", "auto");
    } else if (!this.supportsPopover() && this.hasAttribute("popover")) {
      this.removeAttribute("popover");
    }
  }
  attributeChangedCallback(name, oldVal, newVal) {
    if (name == "open" && newVal != oldVal) {
      if (this.open) {
        this.onShow();
      } else {
        this.onHide();
      }
    }
  }
  get open() {
    return this.hasAttribute("open");
  }
  set open(val) {
    this.toggleAttribute("open", val);
  }
  get stayOpen() {
    return this.hasAttribute("stay-open");
  }
  set stayOpen(val) {
    this.toggleAttribute("stay-open", val);
  }
  getTargetForEvent(event) {
    if (!event) {
      return null;
    }
    if (event._savedComposedTarget) {
      return event._savedComposedTarget;
    }
    if (event.composed) {
      event._savedComposedTarget = event.composedTarget || event.composedPath()[0];
    }
    return event._savedComposedTarget || event.target;
  }
  show(triggeringEvent, target) {
    this.triggeringEvent = triggeringEvent;
    this.lastAnchorNode = target || this.getTargetForEvent(this.triggeringEvent);
    this.wasOpenedByKeyboard = triggeringEvent && (triggeringEvent.inputSource == MouseEvent.MOZ_SOURCE_KEYBOARD || triggeringEvent.inputSource == MouseEvent.MOZ_SOURCE_UNKNOWN || triggeringEvent.key);
    if (this.supportsPopover()) {
      const autohideDisabled = this.hasServices() ? Services.prefs.getBoolPref("ui.popup.disable_autohide", false) : false;
      // A contextmenu event is dispatched during the button press on most
      // platforms, so the release that follows would light-dismiss an auto
      // popover. Manual popovers are exempt from light dismiss; the listeners
      // from addHideListeners() dismiss them.
      const lightDismissable = !autohideDisabled && triggeringEvent?.type != "contextmenu";
      this.setAttribute("popover", lightDismissable ? "auto" : "manual");
    }

    // Bug 2010864 - We need to set `open` to true before calling this.onShow()
    // when the panel-list supports popover, otherwise the panel
    // height and width will be 0 and will be positioned incorrectly
    // when calling setAlign.
    this.open = true;
    if (this.parentIsXULPanel()) {
      this.toggleAttribute("inxulpanel", true);
      let panel = this.parentElement;
      panel.hidden = false;
      // Bug 1842070 - There appears to be a race here where panel-lists
      // embedded in XUL panels won't appear during the first call to show()
      // without waiting for a mix of rAF and another tick of the event
      // loop.
      requestAnimationFrame(() => {
        setTimeout(() => {
          panel.openPopup(this.lastAnchorNode, "after_start", 0, 0, false, false, this.triggeringEvent);
        }, 0);
      });
    } else {
      this.toggleAttribute("inxulpanel", false);
    }
  }
  hide(triggeringEvent, {
    force = false
  } = {}, eventTarget) {
    // It's possible this is being used in an unprivileged context, in which
    // case it won't have access to Services / Services will be undeclared.
    const autohideDisabled = this.hasServices() ? Services.prefs.getBoolPref("ui.popup.disable_autohide", false) : false;
    if (autohideDisabled && !force) {
      // Don't hide if this wasn't "forced" (using escape or click in menu).
      return;
    }
    let openingEvent = this.triggeringEvent;
    this.triggeringEvent = triggeringEvent;
    this.open = false;
    if (this.parentIsXULPanel()) {
      // It's possible that we're being programattically hidden, in which
      // case, we need to hide the XUL panel we're embedded in. If, however,
      // we're being hidden because the XUL panel is being hidden, calling
      // hidePopup again on it is a no-op.
      let panel = this.parentElement;
      panel.hidePopup();
    }
    let target = eventTarget || this.getTargetForEvent(openingEvent);
    // Refocus the button that opened the menu if we have one.
    if (target && this.wasOpenedByKeyboard) {
      target.focus();
    }
  }
  toggle(triggeringEvent, target = null) {
    if (this.open) {
      this.hide(triggeringEvent, {
        force: true
      }, target);
    } else {
      this.show(triggeringEvent, target);
    }
  }
  hasServices() {
    // Safely check for Services without throwing a ReferenceError.
    return typeof Services !== "undefined";
  }
  isDocumentRTL() {
    if (this.hasServices()) {
      return Services.locale.isAppLocaleRTL;
    }
    return document.dir === "rtl";
  }
  parentIsXULPanel() {
    const XUL_NS = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
    return this.parentElement?.namespaceURI == XUL_NS && this.parentElement?.localName == "panel";
  }

  // FIXME: Bug 2022047 - Using anchor positioning would significantly
  // reduce the complexity of this function.
  async setAlign() {
    const hostElement = this.parentElement || this.getRootNode().host;
    if (!hostElement) {
      // This could get called before we're added to the DOM.
      // Nothing to do in that case.
      return;
    }

    // Set the showing attribute to hide the panel until its alignment is set.
    this.setAttribute("showing", "true");
    // Tell the host element to hide any overflow in case the panel extends off
    // the page before the alignment is set.
    hostElement.style.overflow = "hidden";

    // Wait for a layout flush, then find the bounds.
    let {
      anchorBottom,
      // distance from the bottom of the anchor el to top of viewport.
      anchorLeft,
      anchorTop,
      anchorWidth,
      panelHeight,
      panelWidth,
      winHeight,
      winScrollY,
      winScrollX,
      clientWidth
    } = await new Promise(resolve => {
      this.style.left = 0;
      this.style.top = 0;
      this.style.minWidth = "";
      requestAnimationFrame(() => setTimeout(() => {
        let target = this.lastAnchorNode || this.getTargetForEvent(this.triggeringEvent);
        let anchorElement = target || hostElement;
        // It's possible this is being used in a context where windowUtils is
        // not available. In that case, fallback to using the element.
        let getBounds = el => window.windowUtils ? window.windowUtils.getBoundsWithoutFlushing(el) : el.getBoundingClientRect();
        // Use y since top is reserved.
        let anchorBounds = getBounds(anchorElement);
        let panelBounds = getBounds(this);
        let clientWidth = document.scrollingElement.clientWidth;
        let panelHeight = this.scrollHeight > panelBounds.height ? this.scrollHeight : panelBounds.height;
        resolve({
          anchorBottom: anchorBounds.bottom,
          anchorHeight: anchorBounds.height,
          anchorLeft: anchorBounds.left,
          anchorTop: anchorBounds.top,
          anchorWidth: anchorBounds.width,
          panelHeight,
          panelWidth: panelBounds.width,
          winHeight: innerHeight,
          winScrollX: scrollX,
          winScrollY: scrollY,
          clientWidth
        });
      }, 0));
    });

    // If we're embedded in a XUL panel, let it handle alignment.
    if (!this.parentIsXULPanel()) {
      // Calculate the left/right alignment.
      let align;
      let leftOffset;
      let effectivePanelWidth = this.hasAttribute("min-width-from-anchor") ? Math.max(panelWidth, anchorWidth) : panelWidth;
      let leftAlignX = anchorLeft;
      let rightAlignX = anchorLeft + anchorWidth - effectivePanelWidth;
      if (this.isDocumentRTL()) {
        // Prefer aligning on the right. Fall back to left if the right-aligned
        // panel would overflow the left viewport edge (rightAlignX < 0), or if
        // the anchor's right edge exceeds the viewport width (which would place
        // the right-aligned panel off-screen on the right).
        align = rightAlignX < 0 || anchorLeft + anchorWidth > clientWidth ? "left" : "right";
      } else {
        // Prefer aligning on the left.
        align = leftAlignX + effectivePanelWidth > clientWidth ? "right" : "left";
      }
      const alignX = align === "left" ? leftAlignX : rightAlignX;
      leftOffset = Math.max(0, Math.min(alignX, clientWidth - effectivePanelWidth));
      let bottomSpaceY = winHeight - anchorBottom;
      let valign;
      let topOffset;
      const VIEWPORT_PANEL_MIN_MARGIN = 10; // 10px ensures that the panel is not flush with the viewport.
      const roundedAnchorBottom = Math.round(anchorBottom);
      const roundedBottomSpaceY = Math.round(bottomSpaceY);
      const roundedAnchorTop = Math.round(anchorTop);
      const roundedPanelHeight = Math.round(panelHeight);

      // Only want to valign top when there's more space between the bottom of the anchor element and the top of the viewport.
      // If there's more space between the bottom of the anchor element and the bottom of the viewport, we valign bottom.
      if (roundedAnchorBottom > roundedBottomSpaceY && roundedAnchorBottom + roundedPanelHeight + VIEWPORT_PANEL_MIN_MARGIN > winHeight) {
        // Never want to have a negative value for topOffset, so ensure it's at least 10px.
        topOffset = Math.max(roundedAnchorTop - roundedPanelHeight, VIEWPORT_PANEL_MIN_MARGIN);
        // Provide a max-height for larger elements which will provide scrolling as needed.
        this.style.maxHeight = `${roundedAnchorTop - VIEWPORT_PANEL_MIN_MARGIN}px`;
        valign = "top";
      } else {
        topOffset = roundedAnchorBottom;
        this.style.maxHeight = `${roundedBottomSpaceY - VIEWPORT_PANEL_MIN_MARGIN}px`;
        valign = "bottom";
      }

      // Set the alignments and show the panel.
      this.setAttribute("align", align);
      this.setAttribute("valign", valign);
      hostElement.style.overflow = "";
      // Decide positioning based on where this panel will be rendered
      const offsetParentIsBody = this.supportsPopover() || this.offsetParent === document?.body || !this.offsetParent;
      if (offsetParentIsBody) {
        // viewport-based
        this.style.left = `${Math.round(leftOffset + winScrollX)}px`;
        this.style.top = `${Math.round(topOffset + winScrollY)}px`;
      } else {
        // container-relative
        const offsetParentRect = this.offsetParent.getBoundingClientRect();
        this.style.left = `${Math.round(leftOffset - offsetParentRect.left)}px`;
        this.style.top = `${Math.round(topOffset - offsetParentRect.top)}px`;
      }
    }
    this.style.minWidth = this.hasAttribute("min-width-from-anchor") ? `${Math.round(anchorWidth)}px` : "";
    this.removeAttribute("showing");
  }
  addHideListeners() {
    if (this.hasAttribute("stay-open") && !this.lastAnchorNode?.hasSubmenu) {
      // This is intended for inspection in Storybook.
      return;
    }
    // Hide when a panel-item is clicked in the list.
    this.addEventListener("click", this);
    // Allows submenus to stopPropagation when focus is already in the menu
    this.addEventListener("keydown", this);
    // We need Escape/Tab/ArrowDown to work when opened with the mouse.
    document.addEventListener("keydown", this);
    // Hide when a click is initiated outside the panel.
    document.addEventListener("mousedown", this);
    // Hide if focus changes and the panel isn't in focus.
    document.addEventListener("focusin", this);
    // Reset for focus tracking, we treat the first focusin differently.
    this.focusHasChanged = false;
    // Hide on resize, scroll or losing window focus
    window.addEventListener("scroll", this, {
      capture: true
    });
    window.addEventListener("resize", this);
    window.addEventListener("blur", this);
    if (this.parentIsXULPanel()) {
      this.parentElement.addEventListener("popuphidden", this);
    }
  }
  removeHideListeners() {
    this.removeEventListener("click", this);
    this.removeEventListener("keydown", this);
    document.removeEventListener("keydown", this);
    document.removeEventListener("mousedown", this);
    document.removeEventListener("focusin", this);
    window.removeEventListener("resize", this);
    window.removeEventListener("scroll", this, {
      capture: true
    });
    window.removeEventListener("blur", this);
    if (this.parentIsXULPanel()) {
      this.parentElement.removeEventListener("popuphidden", this);
    }
  }
  handleEvent(e) {
    // Ignore the event if it caused the panel to open.
    if (e == this.triggeringEvent) {
      return;
    }
    let target = this.getTargetForEvent(e);
    let inPanelList = e.composed ? e.composedPath().some(el => el == this) : e.target.closest && e.target.closest("panel-list") == this;
    switch (e.type) {
      case "resize":
      case "scroll":
        if (!inPanelList) {
          this.hide();
        }
        break;
      case "blur":
      case "popuphidden":
        this.hide();
        break;
      case "click":
        if (inPanelList) {
          this.hide(undefined, {
            force: true
          });
        } else {
          // Avoid falling through to the default click handler of the parent.
          e.stopPropagation();
        }
        break;
      case "mousedown":
        // Close if there's a click started outside the panel.
        if (!inPanelList) {
          this.hide();
        }
        break;
      case "keydown":
        if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Tab") {
          // Ignore tabbing with a modifer other than shift.
          if (e.key === "Tab" && (e.altKey || e.ctrlKey || e.metaKey)) {
            return;
          }

          // Don't scroll the page or let the regular tab order take effect.
          e.preventDefault();

          // Prevents the host panel list from responding to these events while
          // the submenu is active.
          e.stopPropagation();

          // Keep moving to the next/previous element sibling until we find a
          // panel-item that isn't hidden.
          let moveForward = e.key === "ArrowDown" || e.key === "Tab" && !e.shiftKey;
          let nextItem = moveForward ? this.focusWalker.nextNode() : this.focusWalker.previousNode();

          // If the next item wasn't found, try looping to the top/bottom.
          if (!nextItem) {
            this.focusWalker.currentNode = this;
            if (moveForward) {
              nextItem = this.focusWalker.firstChild();
            } else {
              nextItem = this.focusWalker.lastChild();
            }
          }
          break;
        } else if (e.key === "Escape") {
          this.hide(undefined, {
            force: true
          });
        } else if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
          // Check if any of the children have an accesskey for this letter.
          let item = this.querySelector(`[accesskey="${e.key.toLowerCase()}"],
              [accesskey="${e.key.toUpperCase()}"]`);
          if (item) {
            // Prevent the host from receiving input events for this keypress.
            e.preventDefault();
            item.click();
          }
        }
        break;
      case "focusin":
        if (this.triggeringEvent && target == this.getTargetForEvent(this.triggeringEvent) && !this.focusHasChanged) {
          // There will be a focusin after the mousedown that opens the panel
          // using the mouse. Ignore the first focusin event if it's on the
          // triggering target.
          this.focusHasChanged = true;
        } else {
          // Just record that there was a focusin event.
          this.focusHasChanged = true;
        }
        break;
    }
  }

  /**
   * A TreeWalker that can be used to focus elements. The returned element will
   * be the element that has gained focus based on the requested movement
   * through the tree.
   *
   * Example:
   *
   *   this.focusWalker.currentNode = this;
   *   // Focus and get the first focusable child.
   *   let focused = this.focusWalker.nextNode();
   *   // Focus the second focusable child.
   *   this.focusWalker.nextNode();
   */
  get focusWalker() {
    if (!this._focusWalker) {
      this._focusWalker = document.createTreeWalker(this, NodeFilter.SHOW_ELEMENT, {
        acceptNode: node => {
          // No need to look at hidden nodes.
          if (node.hidden) {
            return NodeFilter.FILTER_REJECT;
          }

          // Focus the node, if it worked then this is the node we want.
          node.focus();
          if (node === node.getRootNode().activeElement) {
            return NodeFilter.FILTER_ACCEPT;
          }

          // Continue into child nodes if the parent couldn't be focused.
          return NodeFilter.FILTER_SKIP;
        }
      });
    }
    return this._focusWalker;
  }
  async setSubmenuAlign() {
    const hostElement = this.lastAnchorNode.parentElement || this.getRootNode().host;
    // The showing attribute allows layout of the panel while remaining hidden
    // from the user until alignment is set.
    this.setAttribute("showing", "true");

    // The rAF + setTimeout matches setAlign() so the submenu is laid out before
    // its width is measured. Without the setTimeout the width can read as 0 and
    // the overflow check picks the wrong side.
    let {
      anchorLeft,
      anchorWidth,
      anchorTop,
      parentPanelTop,
      panelWidth,
      clientWidth
    } = await new Promise(resolve => {
      requestAnimationFrame(() => setTimeout(() => {
        // It's possible this is being used in a context where windowUtils is
        // not available. In that case, fallback to using the element.
        let getBounds = el => window.windowUtils ? window.windowUtils.getBoundsWithoutFlushing(el) : el.getBoundingClientRect();
        // submenu item in the parent panel list
        let anchorBounds = getBounds(this.lastAnchorNode);
        let parentPanelBounds = getBounds(hostElement);
        let panelBounds = getBounds(this);
        let clientWidth = document.scrollingElement.clientWidth;
        resolve({
          anchorLeft: anchorBounds.left,
          anchorWidth: anchorBounds.width,
          anchorTop: anchorBounds.top,
          parentPanelTop: parentPanelBounds.top,
          panelWidth: panelBounds.width,
          clientWidth
        });
      }, 0));
    });
    let align = hostElement.getAttribute("align");

    // we use document.scrollingElement.clientWidth to exclude the width
    // of vertical scrollbars, because its inclusion can cause the submenu
    // to open to the wrong side and be overlapped by the scrollbar.
    if (align == "left" && anchorLeft + anchorWidth + panelWidth < clientWidth) {
      this.style.left = `${anchorWidth}px`;
      this.style.right = "";
    } else {
      this.style.right = `${anchorWidth}px`;
      this.style.left = "";
    }
    let topOffset = anchorTop - parentPanelTop - (parseFloat(window.getComputedStyle(this)?.paddingTop) || 0);
    this.style.top = `${topOffset}px`;
    this.removeAttribute("showing");
  }
  async onShow() {
    this.sendEvent("showing");
    if (this.lastAnchorNode?.hasSubmenu) {
      await this.setSubmenuAlign();
    } else {
      await this.setAlign();
    }

    // If the panel was hidden during async alignment, bail out.
    if (!this.open) {
      return;
    }

    // Call showPopover() after positioning is set up
    if (this.supportsPopover()) {
      try {
        this.showPopover();
      } catch (ex) {
        console.error("Failed to show popover:", ex);
      }
    }

    // Register hide listeners after the popover is shown, so that a second
    // panel-list opening doesn't have conflicting document-level event
    // handlers with a first panel-list that hasn't been auto-dismissed yet.
    this.addHideListeners();

    // Always reset this regardless of how the panel list is opened
    // so the first child will be focusable.
    this.focusWalker.currentNode = this;

    // Wait until the next paint for the alignment to be set and panel to be
    // visible.
    requestAnimationFrame(() => {
      if (this.wasOpenedByKeyboard) {
        // Focus the first focusable panel-item if opened by keyboard.
        this.focusWalker.currentNode = this;
        this.focusWalker.nextNode();
      }
      this.lastAnchorNode?.setAttribute("aria-expanded", "true");
      this.sendEvent("shown");
    });
  }
  onHide() {
    if (this.supportsPopover()) {
      try {
        this.hidePopover();
      } catch (ex) {
        // hidePopover may throw if the popover was already hidden or was never shown
      }
    }
    requestAnimationFrame(() => {
      this.sendEvent("hidden");
      this.lastAnchorNode?.setAttribute("aria-expanded", "false");
    });
    this.removeHideListeners();
  }
  sendEvent(name, detail) {
    this.dispatchEvent(new CustomEvent(name, {
      detail,
      bubbles: true,
      composed: true
    }));
  }
}
customElements.define("panel-list", PanelList);
class PanelItem extends HTMLElement {
  #initialized = false;
  #defaultSlot;
  #badge;
  static get observedAttributes() {
    return ["accesskey", "type", "disabled", "badge-type", "aria-haspopup"];
  }
  constructor() {
    super();
    this.attachShadow({
      mode: "open"
    });
    let style = document.createElement("link");
    style.rel = "stylesheet";
    style.href = toolkit_content_widgets_panel_list_panel_item_css__WEBPACK_IMPORTED_MODULE_0__;
    this.button = document.createElement("button");
    this.#setButtonAttributes();
    this.button.setAttribute("part", "button");
    // Use a XUL label element if possible to show the accesskey.
    this.label = document.createXULElement ? document.createXULElement("label") : document.createElement("span");
    this.label.setAttribute("part", "label");
    this.button.appendChild(this.label);
    this.#updateBadge();
    let supportLinkSlot = document.createElement("slot");
    supportLinkSlot.name = "support-link";
    this.#defaultSlot = document.createElement("slot");
    this.#defaultSlot.style.display = "none";
    this.shadowRoot.append(style, this.button, supportLinkSlot, this.#defaultSlot);
  }
  connectedCallback() {
    if (!this._l10nRootConnected && document.l10n) {
      document.l10n.connectRoot(this.shadowRoot);
      this._l10nRootConnected = true;
    }
    this.panel = this.getRootNode()?.host?.closest("panel-list") || this.closest("panel-list");
    if (!this.#initialized) {
      this.#initialized = true;
      // When click listeners are added to the panel-item it creates a node in
      // the a11y tree for this element. This breaks the association between the
      // menu and the button[role="menuitem"] in this shadow DOM and causes
      // announcement issues with screen readers. (bug 995064)
      this.setAttribute("role", "presentation");
      this.#setLabelContents();

      // When our content changes, move the text into the label. It doesn't work
      // with a <slot>, unfortunately.
      new MutationObserver(() => this.#setLabelContents()).observe(this, {
        characterData: true,
        childList: true,
        subtree: true
      });
      if (this.hasSubmenu) {
        this.panel.setAttribute("has-submenu", "");
        this.icon = document.createElement("div");
        this.icon.setAttribute("class", "submenu-icon");
        this.button.appendChild(this.icon);
        this.submenuSlot = document.createElement("slot");
        this.submenuSlot.name = "submenu";
        this.shadowRoot.append(this.submenuSlot);
        this.setSubmenuContents();
      }
    }
    this.button.addEventListener("mouseup", this);
    if (this.panel) {
      this.panel.addEventListener("hidden", this);
      this.panel.addEventListener("shown", this);
    }
    if (this.hasSubmenu) {
      this.addEventListener("mouseenter", this);
      this.addEventListener("mouseleave", this);
      this.addEventListener("keydown", this);
    }
  }
  disconnectedCallback() {
    if (this._l10nRootConnected) {
      document.l10n.disconnectRoot(this.shadowRoot);
      this._l10nRootConnected = false;
    }
    this.button.removeEventListener("mouseup", this);
    if (this.panel) {
      this.panel.removeEventListener("hidden", this);
      this.panel.removeEventListener("shown", this);
      this.panel = null;
    }
    if (this.hasSubmenu) {
      this.removeEventListener("mouseenter", this);
      this.removeEventListener("mouseleave", this);
      this.removeEventListener("keydown", this);
    }
  }
  get hasSubmenu() {
    return this.hasAttribute("submenu");
  }
  attributeChangedCallback(name, oldVal, newVal) {
    if (name === "accesskey") {
      // Bug 1037709 - Accesskey doesn't work in shadow DOM.
      // Ideally we'd have the accesskey set in shadow DOM, and on
      // attributeChangedCallback we'd just update the shadow DOM accesskey.

      // Skip this change event if we caused it.
      if (this._modifyingAccessKey) {
        this._modifyingAccessKey = false;
        return;
      }
      this.label.accessKey = newVal || "";

      // Bug 1588156 - Accesskey is not ignored for hidden non-input elements.
      // Since the accesskey won't be ignored, we need to remove it ourselves
      // when the panel is closed, and move it back when it opens.
      if (!this.panel || !this.panel.open) {
        // When the panel isn't open, just store the key for later.
        this._accessKey = newVal || null;
        this._modifyingAccessKey = true;
        this.accessKey = "";
      } else {
        this._accessKey = null;
      }
    } else if (name === "type" || name === "disabled" || name === "aria-haspopup") {
      this.#setButtonAttributes();
    } else if (name === "badge-type") {
      this.#updateBadge();
    }
  }
  #setButtonAttributes() {
    if (this.type == "checkbox") {
      this.button.setAttribute("role", "menuitemcheckbox");
      this.button.setAttribute("aria-checked", this.checked);
    } else {
      this.button.setAttribute("role", "menuitem");
      this.button.removeAttribute("aria-checked");
    }
    this.button.toggleAttribute("disabled", this.disabled);
    if (this.hasAttribute("aria-haspopup")) {
      this.button.setAttribute("aria-haspopup", this.getAttribute("aria-haspopup"));
    } else {
      this.button.removeAttribute("aria-haspopup");
    }
  }
  #updateBadge() {
    if (this.hasAttribute("badge-type")) {
      if (!this.#badge) {
        this.#badge = document.createElement("moz-badge");
        this.label.after(this.#badge);
      }
      this.#badge.setAttribute("type", this.getAttribute("badge-type"));
    } else if (this.#badge) {
      this.#badge.remove();
      this.#badge = null;
    }
  }
  #setLabelContents() {
    this.label.textContent = this.#defaultSlot.assignedNodes().map(node => node.textContent).join("");
  }
  setSubmenuContents() {
    this.submenuPanel = this.submenuSlot.assignedNodes()[0];
    if (this.submenuPanel) {
      this.shadowRoot.append(this.submenuPanel);
    }
  }
  get disabled() {
    return this.hasAttribute("disabled");
  }
  set disabled(val) {
    this.toggleAttribute("disabled", val);
  }
  get checked() {
    if (this.type !== "checkbox") {
      return false;
    }
    return this.hasAttribute("checked");
  }
  set checked(val) {
    if (this.type == "checkbox") {
      this.toggleAttribute("checked", val);
      this.button.setAttribute("aria-checked", !!val);
    }
  }
  get type() {
    return this.getAttribute("type") || "button";
  }
  set type(val) {
    this.setAttribute("type", val);
  }
  click() {
    this.button.click();
  }
  focus() {
    this.button.focus();
  }
  setArrowKeyRTL() {
    let arrowOpenKey = "ArrowRight";
    let arrowCloseKey = "ArrowLeft";
    if (this.submenuPanel.isDocumentRTL()) {
      arrowOpenKey = "ArrowLeft";
      arrowCloseKey = "ArrowRight";
    }
    return [arrowOpenKey, arrowCloseKey];
  }
  handleEvent(e) {
    // Bug 1588156 - Accesskey is not ignored for hidden non-input elements.
    // Since the accesskey won't be ignored, we need to remove it ourselves
    // when the panel is closed, and move it back when it opens.
    switch (e.type) {
      case "shown":
        if (this._accessKey) {
          this.accessKey = this._accessKey;
          this._accessKey = null;
        }
        break;
      case "hidden":
        if (this.accessKey) {
          this._accessKey = this.accessKey;
          this._modifyingAccessKey = true;
          this.accessKey = "";
        }
        break;
      case "mouseenter":
      case "mouseleave":
        this.submenuPanel.toggle(e);
        break;
      case "keydown":
        {
          let [arrowOpenKey, arrowCloseKey] = this.setArrowKeyRTL();
          if (e.key === arrowOpenKey) {
            this.submenuPanel.show(e, e.target);
            // Don't let the arrow key scroll the page, which would trigger the
            // panel's scroll-hide listener and immediately close the submenu.
            e.preventDefault();
            e.stopPropagation();
          }
          if (e.key === arrowCloseKey) {
            this.submenuPanel.hide(e, {
              force: true
            }, e.target);
            e.preventDefault();
            e.stopPropagation();
          }
          break;
        }
      case "mouseup":
        {
          let event = /** @type {MouseEvent} */e;
          if (
          // preventClickEvent is undefined outside of chrome contexts.
          !event.preventClickEvent || this.panel?.lastAnchorNode?.role != "combobox" || e.button != 0) {
            break;
          }

          // A click event would be fired on the nearest common ancestor of
          // the mousedown and mouseup elements. We want to retarget the
          // click to the panel-item where mouseup happened so we prevent
          // the native click and synthesize one on the panel-list.
          // This enables opening a panel-list and choosing an item with a
          // single click.

          event.preventClickEvent();
          this.button.dispatchEvent(new PointerEvent("click", {
            bubbles: true,
            composed: true,
            view: event.view,
            shiftKey: event.shiftKey,
            ctrlKey: event.ctrlKey,
            altKey: event.altKey,
            metaKey: event.metaKey,
            screenX: event.screenX,
            screenY: event.screenY,
            clientX: event.clientX,
            clientY: event.clientY,
            button: event.button
            // The inputSource of the click event will always be MOZ_SOURCE_UNKNOWN.
          }));
          break;
        }
    }
  }
}
customElements.define("panel-item", PanelItem);

/***/ }),

/***/ 39092:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebsiteChipContainer: () => (/* binding */ WebsiteChipContainer)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_website_chip_container_website_chip_container_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5136);
/* harmony import */ var browser_components_aiwindow_ui_components_smartwindow_overflow_row_smartwindow_overflow_row_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57822);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(616);
/* harmony import */ var chrome_browser_content_aiwindow_components_SmartwindowOverflowRow_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15768);
/* harmony import */ var chrome_browser_content_aiwindow_components_ai_website_chip_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6266);
/* harmony import */ var chrome_browser_content_aiwindow_components_ai_grouped_chip_container_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63022);
/* harmony import */ var chrome_global_content_elements_moz_button_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79240);
/* harmony import */ var chrome_browser_content_aiwindow_components_smartwindow_panel_list_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(55362);


/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */





// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import


/** @typedef {import("chrome://browser/content/urlbar/SmartbarInput.mjs").ContextWebsite} ContextWebsite */

/**
 * Container for rendering website chips
 */
class WebsiteChipContainer extends (0,chrome_browser_content_aiwindow_components_SmartwindowOverflowRow_mjs__WEBPACK_IMPORTED_MODULE_4__.SmartwindowOverflowRowMixin)(chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement) {
  static properties = {
    websites: {
      type: Array
    },
    chipType: {
      type: String
    },
    removable: {
      type: Boolean
    },
    shouldGroupChips: {
      type: Boolean
    },
    // true if we want 3 or more chips to display as ai-grouped-chip-container
    autoOverflow: {
      type: Boolean
    },
    visibleChipCount: {
      type: Number
    },
    chipSize: {
      type: String,
      attribute: "chip-size",
      reflect: true
    },
    isPanelOpen: {
      type: Boolean,
      state: true
    }
  };
  constructor() {
    super();
    /** @type {ContextWebsite[]} */
    this.websites = [];
    this.chipType = "context-chip";
    this.removable = false;
    this.shouldGroupChips = false;
    this.autoOverflow = false;
    this.visibleChipCount = null;
    this.chipSize = "default";
    this.isPanelOpen = false;
  }
  get overflowContainerSelector() {
    return ".chip-container-scroller";
  }
  get inlineItemCount() {
    return this.visibleChipCount;
  }
  get overflowItems() {
    return this.#isAutoOverflowing ? this.websites : [];
  }
  get #isGrouped() {
    return this.shouldGroupChips && this.websites.length > 2;
  }
  get #isAutoOverflowing() {
    return this.autoOverflow && !this.#isGrouped;
  }
  #panel() {
    return this.renderRoot.querySelector("smartwindow-panel-list");
  }
  #onToggleClick(event) {
    const panel = this.#panel();
    if (panel) {
      panel.anchor = event.currentTarget;
      panel.toggle(event);
    }
  }
  #onOverflowItemSelected(event) {
    const url = event.detail?.id;
    this.#panel()?.hide();
    if (!url) {
      return;
    }
    this.dispatchEvent(new CustomEvent("AIChatContent:OpenLink", {
      bubbles: true,
      composed: true,
      detail: {
        url,
        preferSwitchToTab: true
      }
    }));
  }
  #onRemoveWebsite(website, event) {
    event.stopPropagation();
    this.dispatchEvent(new CustomEvent("ai-website-chip:remove", {
      bubbles: true,
      composed: true,
      detail: {
        url: website.url,
        label: website.label
      }
    }));
  }
  #renderStackedChips(website) {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__.html)`<ai-website-chip
      .type=${this.chipType}
      .size=${this.chipSize}
      .label=${website.label}
      .href=${website.url}
      .iconSrc=${website.iconSrc ?? ""}
      .removable=${this.removable}
      @ai-website-chip:remove=${e => this.#onRemoveWebsite(website, e)}
    ></ai-website-chip>`;
  }
  #renderGroupedChips(chips) {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__.html)`<ai-grouped-chip-container
      .chips=${chips}
    ></ai-grouped-chip-container>`;
  }
  #renderChip(website) {
    return website.historyDeleted ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__.html)`<div class="chip-history-deleted">
          <img
            class="chip-history-deleted-icon"
            src="chrome://global/skin/icons/defaultFavicon.svg"
            alt=""
          />
          <span data-l10n-id="aiwindow-website-chip-history-deleted"></span>
        </div>` : this.#renderStackedChips(website);
  }
  #renderSmartwindowOverflowRow() {
    const visibleCount = Math.min(this.visibleCount, this.websites.length);
    const overflow = this.websites.slice(visibleCount);
    const hasOverflow = !!overflow.length;
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__.html)`<div
      class="chip-container-scroller smartwindow-overflow-row"
      role="list"
    >
      ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__.repeat)(this.websites, website => website, (website, index) => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__.html)`<span role="listitem" ?data-overflow=${index >= visibleCount}
            >${this.#renderChip(website)}</span
          >`)}
      <moz-button
        class="overflow-more"
        type="ghost"
        ?data-overflow=${!hasOverflow}
        .ariaHasPopup=${"menu"}
        .ariaExpanded=${String(this.isPanelOpen)}
        data-l10n-id="smartwindow-assistant-citations-more-label"
        data-l10n-args=${JSON.stringify({
      count: overflow.length
    })}
        @click=${this.#onToggleClick}
      ></moz-button>
      ${hasOverflow ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__.html)`<smartwindow-panel-list
            .groups=${[{
      items: overflow.map(website => ({
        id: website.url,
        label: website.label,
        icon: website.iconSrc
      }))
    }]}
            @shown=${() => this.isPanelOpen = true}
            @hidden=${() => this.isPanelOpen = false}
            @item-selected=${this.#onOverflowItemSelected}
          ></smartwindow-panel-list>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__.nothing}
    </div>`;
  }
  #renderScrollerRow() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__.html)`<div class="chip-container-scroller" role="list">
      ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__.repeat)(this.websites, website => website, website => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__.html)`<span role="listitem">${this.#renderChip(website)}</span>`)}
    </div>`;
  }
  #renderChips() {
    if (this.#isGrouped) {
      return this.#renderGroupedChips(this.websites);
    }
    return this.#isAutoOverflowing ? this.#renderSmartwindowOverflowRow() : this.#renderScrollerRow();
  }
  render() {
    if (!this.websites.length) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__.nothing;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_smartwindow_overflow_row_smartwindow_overflow_row_css__WEBPACK_IMPORTED_MODULE_1__}"
      />
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_website_chip_container_website_chip_container_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <div class="chip-container">${this.#renderChips()}</div>
    `;
  }
}
customElements.define("website-chip-container", WebsiteChipContainer);

/***/ }),

/***/ 39894:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ai-website-chip.7967f398a94dae999098.css";

/***/ }),

/***/ 44494:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-select.89c3c748542a8264e4a1.css";

/***/ }),

/***/ 45042:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "smartwindow-panel-list.c445c992372913db3719.css";

/***/ }),

/***/ 46616:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "chat-assistant-citations.efc0361faf6050baa784.css";

/***/ }),

/***/ 52944:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "applied-memories-button.ec7ca8508ae5250c118e.css";

/***/ }),

/***/ 55362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SmartwindowPanelList: () => (/* binding */ SmartwindowPanelList)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_smartwindow_panel_list_smartwindow_panel_list_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45042);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);
/* harmony import */ var chrome_global_content_elements_panel_list_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37752);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



// eslint-disable-next-line import/no-unassigned-import


/**
 * A generic panel list component for displaying grouped items in a popup.
 *
 * This component is agnostic to the data it displays - consumers control
 * all logic including filtering, truncation, and special item handling.
 *
 * @typedef {{id: string, label: string, icon?: string, l10nId?: string, description?: string}} ListItem
 * @typedef {{items: ListItem[], headerL10nId?: string, header?: string}} ItemGroup
 * @property {ItemGroup[]} groups - Grouped list items to display
 * @property {string} placeholderL10nId - Fluent ID for empty state message
 * @property {object} anchor - Positioning anchor {left, top, width, height}
 */
class SmartwindowPanelList extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static shadowRootOptions = {
    ...chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement.shadowRootOptions,
    delegatesFocus: true
  };
  static properties = {
    groups: {
      type: Array
    },
    anchor: {
      type: Object
    },
    placeholderL10nId: {
      type: String
    },
    alwaysOpen: {
      type: Boolean
    },
    sidebarMode: {
      type: Boolean,
      reflect: true
    }
  };
  #panelList = null;
  #anchorElement = null;
  constructor() {
    super();
    this.groups = [];
    this.anchor = null;
    this.placeholderL10nId = "";
    this.alwaysOpen = false;
    this.sidebarMode = false;
  }
  get #hasCustomItems() {
    const itemsHost = this.#panelList ?? this;
    return [...itemsHost.children].some(element => element.localName !== "panel-item" && !element.classList.contains("panel-item-container"));
  }
  get #isCommandMode() {
    return this.getAttribute("data-triggered-by") === "inline-command";
  }
  firstUpdated() {
    this.#panelList = this.shadowRoot.querySelector("panel-list");
    this.#panelList.addEventListener("shown", () => {
      // The command palette sizes/positions to the smartbar and
      // should recompute as soon as it opens
      if (this.#isCommandMode) {
        this.#reposition();
      } else if (this.sidebarMode) {
        this.#clampToViewport();
      }
    });
    // Consumers may pass their own items as child elements.
    this.#maybeMoveChildrenIntoPanel();
    if (this.alwaysOpen) {
      this.show();
    }
  }
  #maybeMoveChildrenIntoPanel() {
    const custom = Array.from(this.children);
    if (!custom.length) {
      return;
    }
    this.#panelList.append(...custom);
  }
  #clampToViewport() {
    const panelEl = this.#panelList;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const panelRect = panelEl.getBoundingClientRect();
    const margin = parseFloat(getComputedStyle(panelEl).marginInlineStart) || 0;
    const effectiveWidth = Math.min(panelRect.width, viewportWidth - 2 * margin);
    const effectiveHeight = Math.min(panelRect.height, viewportHeight);
    let x = parseFloat(panelEl.style.left) || 0;
    let y = parseFloat(panelEl.style.top) || 0;
    x = Math.max(0, Math.min(x, viewportWidth - effectiveWidth - 2 * margin));
    y = Math.max(0, Math.min(y, viewportHeight - effectiveHeight));
    panelEl.style.left = `${x}px`;
    panelEl.style.top = `${y}px`;
  }
  #reposition() {
    requestAnimationFrame(() => {
      const anchorElement = this.#anchorElement;
      if (!anchorElement || !this.#panelList?.open) {
        return;
      }
      const panelEl = this.#panelList;
      const anchorRect = anchorElement.getBoundingClientRect();
      const panelHeight = panelEl.scrollHeight;
      const valign = panelEl.getAttribute("valign");
      const VIEWPORT_PANEL_MIN_MARGIN = 10;
      let topOffset;
      if (valign === "top") {
        topOffset = Math.max(anchorRect.top - panelHeight, VIEWPORT_PANEL_MIN_MARGIN);
      } else {
        topOffset = anchorRect.bottom;
      }
      // Command mode spans the full width of its anchor (the smartbar) and
      // left-aligns to it
      if (this.#isCommandMode) {
        panelEl.style.width = `${anchorRect.width}px`;
        panelEl.style.left = `${anchorRect.left + window.scrollX}px`;
      } else {
        panelEl.style.width = "";
      }
      panelEl.style.top = `${topOffset + window.scrollY}px`;
      this.#clampToViewport();
    });
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("anchor")) {
      // If anchor is an element use it directly,
      // otherwise we can use the positioned span.
      this.#anchorElement = this.anchor instanceof Element ? this.anchor : this.renderRoot.querySelector(".smartwindow-panel-list-anchor");
    }
    if (this.#panelList?.open && (changedProperties.has("anchor") || changedProperties.has("groups"))) {
      this.#reposition();
    }
  }
  async show(triggeringEvent = null) {
    await this.updateComplete;
    this.#panelList.show(triggeringEvent, this.#anchorElement);
  }
  async hide() {
    await this.updateComplete;
    this.#panelList.hide();
  }
  async toggle(triggeringEvent = null) {
    await this.updateComplete;
    this.#panelList.toggle(triggeringEvent, this.#anchorElement);
  }
  handlePanelClick(e) {
    const panelItem = e.target.closest("panel-item") ?? e.target.closest(".panel-item-container")?.querySelector("panel-item");
    if (panelItem && !panelItem.classList.contains("panel-section-header")) {
      const event = new CustomEvent("item-selected", {
        detail: {
          id: panelItem.itemId,
          label: panelItem.itemLabel || panelItem.textContent.trim(),
          icon: panelItem.itemIcon
        },
        bubbles: true,
        composed: true,
        cancelable: true
      });
      this.dispatchEvent(event);
    }
  }
  handleKeyDown(e) {
    this.dispatchEvent(new CustomEvent("panel-keydown", {
      detail: {
        originalEvent: e
      },
      bubbles: true,
      composed: true
    }));
  }

  // -------------------------
  // Render helpers
  // -------------------------

  #isEmpty() {
    return !this.groups.length || this.groups.every(g => !g.items?.length);
  }
  #renderAnchor() {
    if (!this.anchor || this.anchor instanceof Element) {
      return null;
    }
    const rect = this.getBoundingClientRect();
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span
      class="smartwindow-panel-list-anchor"
      style=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.styleMap)({
      "--anchor-left": `${this.anchor.left - rect.left}px`,
      "--anchor-top": `${this.anchor.top - rect.top}px`,
      "--anchor-width": `${this.anchor.width}px`,
      "--anchor-height": `${this.anchor.height}px`
    })}
    ></span>`;
  }
  #renderEmptyState() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<panel-item
      disabled
      role="presentation"
      class="panel-section-header"
      data-l10n-id=${this.placeholderL10nId}
    ></panel-item>`;
  }
  #renderGroupHeader(headerL10nId) {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<panel-item
      disabled
      role="presentation"
      class="panel-section-header"
      data-l10n-id=${headerL10nId}
    ></panel-item>`;
  }
  #renderPlainHeader(header) {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<panel-item
      disabled
      role="presentation"
      class="panel-section-header"
    >
      ${header}
    </panel-item>`;
  }
  #computeItemStyles(item) {
    const styles = {};
    if (item.icon) {
      styles["--panel-item-icon-url"] = `url(${item.icon})`;
    }
    return styles;
  }
  #renderItem(item) {
    const hasDescription = !!item.description;
    const panelItem = (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<panel-item
      .itemId=${item.id}
      .itemLabel=${item.label}
      icon=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(!hasDescription && item.icon ? "true" : undefined)}
      data-l10n-id=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(item.l10nId)}
      style=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.styleMap)(hasDescription ? {} : this.#computeItemStyles(item))}
    >
      ${item.l10nId ? "" : item.label}
    </panel-item>`;
    if (!hasDescription) {
      return panelItem;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div class="panel-item-container">
      ${item.icon ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span class="panel-item-icon" aria-hidden="true">
            <img class="panel-item-icon-image" src=${item.icon} alt="" />
          </span>` : ""}
      <div class="panel-item-text">
        ${panelItem}
        <div class="panel-item-description">${item.description}</div>
      </div>
    </div>`;
  }
  #renderGroup(group) {
    if (!group.items?.length) {
      return null;
    }
    let header = null;
    if (group.headerL10nId) {
      header = this.#renderGroupHeader(group.headerL10nId);
    } else if (group.header) {
      header = this.#renderPlainHeader(group.header);
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      ${header}
      ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.repeat)(group.items, item => item.id, item => this.#renderItem(item))}
    `;
  }
  #renderGroups() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.repeat)(this.groups, (_group, index) => index, group => this.#renderGroup(group));
  }
  #renderContent() {
    // Custom items were moved into `panel-list`.
    if (this.#hasCustomItems) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing;
    }
    return this.#isEmpty() ? this.#renderEmptyState() : this.#renderGroups();
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_smartwindow_panel_list_smartwindow_panel_list_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      ${this.#renderAnchor()}
      <panel-list
        @click=${this.handlePanelClick}
        @keydown=${this.handleKeyDown}
      >
        ${this.#renderContent()}
      </panel-list>
    `;
  }
}
customElements.define("smartwindow-panel-list", SmartwindowPanelList);

/***/ }),

/***/ 56653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssistantMessageFooter: () => (/* binding */ AssistantMessageFooter)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_ai_chat_content_chat_assistant_footer_assistant_message_footer_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76055);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82242);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(616);
/* harmony import */ var chrome_browser_content_aiwindow_components_applied_memories_button_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2671);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



// eslint-disable-next-line import/no-unassigned-import


/**
 * AssistantMessageFooter
 *
 * TODO: Currently using placeholder "Edit Copy" icon which will be replaced
 * with the copy icon once ready
 *
 * Custom element that renders the footer controls for an assistant message
 * in the AI Window chat UI. The footer includes:
 *   - A copy button for copying the assistant response.
 *   - A retry button for regenerating the response.
 *   - An applied memories button for viewing and/or deleting applied memories.
 *   - Thumbs up/down feedback buttons.
 *
 * Data updates and network behavior are controlled by its parent.
 *
 * @property {string|null} messageId
 *   Identifier of the assistant message this footer is associated with.
 *
 * @property {Array<object>} appliedMemories
 *   List of applied memories for the message. Passed through to the
 *   <applied-memories-button> child.
 *
 * Events dispatched:
 *   - "copy-message"
 *       detail: { messageId }
 *   - "retry-message"
 *       detail: { messageId }
 *   - "thumbs-up"
 *       detail: { messageId }
 *   - "thumbs-down"
 *       detail: { messageId }
 */
class AssistantMessageFooter extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.MozLitElement {
  static properties = {
    messageId: {
      type: String,
      attribute: "message-id"
    },
    appliedMemories: {
      attribute: false
    },
    showCallout: {
      type: Boolean
    }
  };
  constructor() {
    super();
    this.messageId = null;
    this.appliedMemories = [];
    this.showCallout = false;
  }
  static eventBehaviors = {
    bubbles: true,
    composed: true
  };
  static get events() {
    return {
      copy: "copy-message",
      retry: "retry-message",
      thumbsUp: "thumbs-up",
      thumbsDown: "thumbs-down"
    };
  }
  #emit(type, detail) {
    this.dispatchEvent(new CustomEvent(type, {
      ...this.constructor.eventBehaviors,
      ...(detail !== undefined ? {
        detail
      } : {})
    }));
  }
  #emitCopy() {
    this.#emit(this.constructor.events.copy, {
      messageId: this.messageId
    });
  }
  #emitRetry() {
    this.#emit(this.constructor.events.retry, {
      messageId: this.messageId
    });
  }
  #emitThumbsUp() {
    this.#emit(this.constructor.events.thumbsUp, {
      messageId: this.messageId
    });
  }
  #emitThumbsDown() {
    this.#emit(this.constructor.events.thumbsDown, {
      messageId: this.messageId
    });
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_ai_chat_content_chat_assistant_footer_assistant_message_footer_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <div class="footer">
        <moz-button
          data-l10n-id="aiwindow-thumbs-up"
          data-l10n-attrs="tooltiptext,aria-label"
          class="footer-icon-button thumbs-up-button"
          type="ghost"
          size="small"
          iconsrc="chrome://global/skin/icons/thumbs-up-20.svg"
          @click=${() => {
      this.#emitThumbsUp();
    }}
        >
        </moz-button>
        <moz-button
          data-l10n-id="aiwindow-thumbs-down"
          data-l10n-attrs="tooltiptext,aria-label"
          class="footer-icon-button thumbs-down-button"
          type="ghost"
          size="small"
          iconsrc="chrome://global/skin/icons/thumbs-down-20.svg"
          @click=${() => {
      this.#emitThumbsDown();
    }}
        >
        </moz-button>
        <moz-button
          data-l10n-id="aiwindow-copy-message"
          data-l10n-attrs="tooltiptext,aria-label"
          class="footer-icon-button copy-button"
          type="ghost"
          size="small"
          iconsrc="chrome://global/skin/icons/edit-copy.svg"
          @click=${() => {
      this.#emitCopy();
    }}
        >
        </moz-button>
        <moz-button
          data-l10n-id="aiwindow-retry"
          data-l10n-attrs="tooltiptext,aria-label"
          type="ghost"
          size="small"
          iconsrc="chrome://global/skin/icons/reload.svg"
          class="footer-icon-button retry-button"
          @click=${() => {
      this.#emitRetry();
    }}
        >
        </moz-button>
        <applied-memories-button
          .messageId=${this.messageId}
          .appliedMemories=${this.appliedMemories ?? []}
          .showCallout=${this.showCallout}
        >
        </applied-memories-button>
      </div>
    `;
  }
}
customElements.define("assistant-message-footer", AssistantMessageFooter);

/***/ }),

/***/ 57822:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "smartwindow-overflow-row.7a554b3715d4ee8975b6.css";

/***/ }),

/***/ 58132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MonitorIcon: () => (/* binding */ MonitorIcon)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_monitors_display_monitors_display_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63232);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * Small badge showing the monitor watch icon in a violet square.
 *
 * @property {"large"|"small"} size - Icon size. "large" (default) or "small"
 *   (about 5px smaller). Reflected so CSS can target it via :host([size]).
 */
class MonitorIcon extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    size: {
      type: String,
      reflect: true
    }
  };
  constructor() {
    super();
    this.size = "large";
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_monitors_display_monitors_display_css__WEBPACK_IMPORTED_MODULE_0__}"
      />

      <div class="icon-container" aria-hidden="true">
        <span class="icon"></span>
      </div>
    `;
  }
}
customElements.define("monitor-icon", MonitorIcon);

/***/ }),

/***/ 58210:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-textarea.001a8c41c1f9d5819f5a.css";

/***/ }),

/***/ 62776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MozOption: () => (/* binding */ MozOption),
/* harmony export */   "default": () => (/* binding */ MozSelect)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_select_moz_select_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44494);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/** @import { TemplateResult } from "chrome://global/content/vendor/lit.all.mjs" */

/**
 * @typedef {object} SelectOption
 * @property {string} value - The value of the option.
 * @property {string} label - The display label of the option.
 * @property {string} [iconSrc] - The icon source URL for the option.
 * @property {boolean} [disabled] - Whether the option is disabled.
 * @property {boolean} [hidden] - Whether the option is hidden.
 */

/**
 * A select dropdown with options provided via custom `moz-option` elements.
 *
 * @tagname moz-select
 * @property {string} label - The text of the label element
 * @property {string} size - The select size.
 *   Options: default, small.
 * @property {string} name - The name of the input control
 * @property {string} value - The value of the selected option
 * @property {boolean} disabled - The disabled state of the input control
 * @property {string} iconSrc - The src for an optional icon
 * @property {string} description - The text for the description element that helps describe the input control
 * @property {string} supportPage - Name of the SUMO support page to link to.
 * @property {string} ariaLabel - The aria-label text when there is no visible label.
 * @property {string} ariaDescription - The aria-description text when there is no visible description.
 * @property {SelectOption[]} options - The array of options, populated by <moz-option> children in the
 *     default slot. Do not set directly, these will be overridden by <moz-option> children.
 * @property {SelectOption} selectedOption - The currently selected option object.
 * @property {number} selectedIndex - The index of the currently selected option.
 * @property {boolean} usePanelList - Whether or not to render a panel. Depends on options using icons.
 */
class MozSelect extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozBaseInputElement {
  static properties = {
    size: {
      type: String,
      reflect: true
    },
    options: {
      type: Array,
      state: true
    },
    selectedOption: {
      type: Object,
      state: true
    },
    selectedIndex: {
      type: Number,
      state: true
    },
    usePanelList: {
      type: Boolean,
      state: true
    }
  };
  static inputLayout = "block";
  static queries = {
    panelList: "panel-list",
    panelTrigger: ".panel-trigger"
  };
  constructor() {
    super();
    this.size = "default";
    this.value = "";
    this.options = [];
    this.usePanelList = false;
    this.selectedOption = null;
    this.selectedIndex = 0;
    this.slotRef = (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    this.optionsMutationObserver = new MutationObserver(this.populateOptions.bind(this));
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.optionsMutationObserver.observe(this, {
      attributeFilter: ["label", "value", "iconsrc", "disabled", "hidden"],
      childList: true,
      subtree: true
    });
  }
  update(changedProperties) {
    super.update(changedProperties);
    if (this.hasUpdated && changedProperties.has("options")) {
      // Match the select's value on initial render or options change.
      this.value = this.inputEl.value;
    }
  }
  willUpdate(changedProperties) {
    super.willUpdate(changedProperties);
    if (changedProperties.has("value") || changedProperties.has("options")) {
      this.selectedIndex = this.options.findIndex(opt => opt.value === this.value);
      this.selectedOption = this.options[this.selectedIndex] ?? this.options[0];
    }
  }
  updated() {
    if (this.panelTrigger && this.panelList && this.panelTrigger.popoverTargetElement !== this.panelList) {
      this.panelTrigger.popoverTargetElement = this.panelList;
    }
  }

  /**
   * Gets the icon source for the currently selected option.
   *
   * @returns {string} The icon source URL or empty string.
   */
  get _selectedOptionIconSrc() {
    return this.selectedOption?.iconSrc ?? "";
  }

  /**
   * Internal - populates the select element with options from the light DOM slot.
   */
  populateOptions() {
    if (!this.slotRef.value) {
      this.options = [];
      this.usePanelList = false;
      return;
    }
    let options = [];
    for (const node of this.slotRef.value.assignedNodes()) {
      if (node.localName === "moz-option") {
        options.push({
          value: node.getAttribute("value"),
          label: node.getAttribute("label"),
          iconSrc: node.getAttribute("iconsrc"),
          disabled: node.getAttribute("disabled") !== null,
          hidden: node.getAttribute("hidden") !== null
        });
      } else if (node.localName === "hr") {
        options.push({
          separator: true
        });
      }
    }
    this.options = options;
    this.usePanelList = options.some(opt => opt.iconSrc);

    // Default to first option if no value set to match native select behavior.
    if (this.usePanelList && !this.value && this.options.length) {
      this.value = this.options[0].value;
    }
  }

  /**
   * Handles change events and updates the selected value.
   *
   * @param {Event} event
   * @memberof MozSelect
   */
  handleStateChange(event) {
    this.value = event.target.value;
  }

  /**
   * Handles change events from the panel-list and dispatches a change event.
   *
   * @param {Event} event - The click event from panel-item selection.
   */
  handlePanelChange(event) {
    this.handleStateChange(event);
    this.redispatchEvent(new Event("change", {
      bubbles: true
    }));
  }

  /**
   * Handles the panel being hidden and returns focus to the trigger button.
   */
  handlePanelHidden() {
    let active = document.activeElement;
    if (!active || active === document.body || active === this) {
      this.panelTrigger?.focus();
    }
  }

  /**
   * Handles mousedown events to open the panel for mouse clicks.
   * Note: panel-list's handleEvent() ignores the triggeringEvent by
   * reference, preventing the panel from immediately closing.
   *
   * @param {MouseEvent} event - The mousedown event.
   */
  handlePanelMousedown(event) {
    if (event.button !== 0) {
      return;
    }
    /**
     * Bug 2017668 - This is required for the "Default search engine"
     * and private search engine moz-selects. Otherwise, clicking on one
     * of the select elements, using arrow keys to navigate, and then clicking
     * on the other select element will cause focus to jump between the two
     * moz-select elements while toggling their respective panels.
     */
    if (navigator.platform.includes("Mac")) {
      this.panelTrigger?.focus();
    }
    this.panelList?.toggle(event, this.panelTrigger);
  }

  /**
   * Handles click events from keyboard activation (Space/Enter from button).
   * Mouse clicks are handled by mousedown, so we filter those out here.
   *
   * @param {MouseEvent} event - The click event.
   */
  handlePanelClick(event) {
    // Only handle keyboard-initiated clicks. Mouse clicks are handled
    // by mousedown. event.detail is 0 for keyboard clicks, >0 for
    // mouse clicks.
    event.preventDefault();
    if (event.detail === 0) {
      this.panelList?.toggle(event);
    }
  }

  /**
   * Toggles the panel-list open/closed state.
   * Called by keyboard handlers and potentially other event handlers.
   *
   * @param {Event} event - The triggering event.
   */
  togglePanel(event) {
    this.panelList?.toggle(event);
  }

  /**
   * Handles keyboard events on the panel trigger button.
   * Arrow keys change selection (Windows/Linux) or open the panel (Mac).
   * Space and Enter open the panel.
   *
   * @param {KeyboardEvent} event - The keyboard event.
   */
  handlePanelKeydown(event) {
    if (this.panelList?.open) {
      return;
    }
    switch (event.key) {
      case "ArrowDown":
      case "ArrowUp":
        event.preventDefault();
        if (navigator.platform.includes("Mac")) {
          this.togglePanel(event);
        } else {
          this.selectNextOption(event.key === "ArrowDown" ? 1 : -1);
        }
        break;
      case "Enter":
        event.preventDefault();
        this.togglePanel(event);
        break;
    }
  }

  /**
   * Selects the next enabled option in the given direction. Skips disabled and
   * hidden options.
   *
   * @param {number} direction - The direction to move (1 for next, -1 for
   * previous).
   */
  selectNextOption(direction) {
    let currentIndex = this.selectedIndex;
    let options = this.options;
    for (let i = 1; i < options.length; i++) {
      let nextIndex = currentIndex + direction * i;
      let nextOption = options[nextIndex];
      if (nextOption && !nextOption.disabled && !nextOption.hidden && !nextOption.separator) {
        this.value = nextOption.value;
        this.redispatchEvent(new Event("change", {
          bubbles: true
        }));
        return;
      }
    }
  }

  /**
   * @type {MozBaseInputElement['inputStylesTemplate']}
   */
  inputStylesTemplate() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)` <link
      rel="stylesheet"
      href="${toolkit_content_widgets_moz_select_moz_select_css__WEBPACK_IMPORTED_MODULE_0__}"
    />`;
  }

  /**
   * Renders the icon for the currently selected option.
   *
   * @returns {TemplateResult | null}
   */
  selectedOptionIconTemplate() {
    if (this._selectedOptionIconSrc) {
      return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<img
        src=${this._selectedOptionIconSrc}
        role="presentation"
        class="select-option-icon"
      />`;
    }
    return null;
  }

  /**
   * Renders the native select element (used when options don't have icons).
   *
   * @returns {TemplateResult}
   */
  selectTemplate() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<select
      id="input"
      name=${this.name}
      .value=${this.value}
      accesskey=${this.accessKey}
      @input=${this.handleStateChange}
      @change=${this.redispatchEvent}
      ?disabled=${this.disabled || this.parentDisabled}
      size=${this.size}
      aria-label=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.ariaLabel ?? undefined)}
      aria-describedby="description"
      aria-description=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.hasDescription ? undefined : this.ariaDescription)}
    >
      ${this.options.map(option => option.separator ? (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<hr />` : (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
              <option
                value=${option.value}
                .selected=${option.value == this.value}
                ?disabled=${option.disabled}
                ?hidden=${option.hidden}
              >
                ${option.label}
              </option>
            `)}
    </select>`;
  }

  /**
   * Renders the button trigger for the panel-list (used when options have
   * icons).
   *
   * @returns {TemplateResult}
   */
  panelTargetTemplate() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<button
      id="input"
      name=${this.name}
      .value=${this.value}
      class="panel-trigger"
      type="button"
      role="combobox"
      aria-label=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.ariaLabel)}
      aria-description=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.hasDescription ? undefined : this.ariaDescription)}
      aria-describedby="description"
      aria-haspopup="menu"
      aria-expanded=${this.panelList?.open ? "true" : "false"}
      accesskey=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.accessKey)}
      @mousedown=${this.handlePanelMousedown}
      @click=${this.handlePanelClick}
      @keydown=${this.handlePanelKeydown}
      ?disabled=${this.disabled || this.parentDisabled}
      size=${this.size}
    >
      <span class="panel-trigger-text">${this.selectedOption?.label}</span>
    </button>`;
  }

  /**
   * Renders the panel-list dropdown menu (used when options have icons).
   *
   * @returns {TemplateResult}
   */
  panelListTemplate() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<panel-list
      .value=${this.value}
      min-width-from-anchor
      @click=${this.handlePanelChange}
      @hidden=${this.handlePanelHidden}
    >
      ${this.options.map(option => option.separator ? (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<hr />` : (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<panel-item
              .value=${option.value}
              ?selected=${option.value == this.value}
              ?disabled=${option.disabled}
              ?hidden=${option.hidden}
              icon=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(option.iconSrc)}
              style=${option.iconSrc ? `--select-item-icon-url: url(${option.iconSrc})` : ""}
            >
              ${option.label}
            </panel-item>`)}
    </panel-list>`;
  }

  /**
   * Renders the main input template with either a native select or panel-list.
   *
   * @returns {TemplateResult}
   */
  inputTemplate() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <div
        class=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.classMap)({
      "select-wrapper": true,
      "with-icon": !!this._selectedOptionIconSrc
    })}
      >
        ${this.selectedOptionIconTemplate()}
        ${!this.usePanelList ? this.selectTemplate() : this.panelTargetTemplate()}
        <img
          src="chrome://global/skin/icons/arrow-down.svg"
          role="presentation"
          class="select-chevron-icon"
        />
      </div>
      ${this.usePanelList ? this.panelListTemplate() : ""}
      <slot
        @slotchange=${this.populateOptions}
        hidden
        ${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ref)(this.slotRef)}
      ></slot>
    `;
  }
}
customElements.define("moz-select", MozSelect);

/**
 * A custom option element for use in moz-select.
 *
 * @tagname moz-option
 * @property {string} value - The value of the option
 * @property {string} label - The label of the option
 * @property {string} iconSrc - The path to the icon of the the option
 * @property {boolean} disabled - Whether the option is disabled
 * @property {boolean} hidden - Whether the option is hidden
 */
class MozOption extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    // Reflect the attribute so that moz-select can detect changes with a MutationObserver
    value: {
      type: String,
      reflect: true
    },
    // Reflect the attribute so that moz-select can detect changes with a MutationObserver
    label: {
      type: String,
      reflect: true,
      fluent: true
    },
    iconSrc: {
      type: String,
      reflect: true
    },
    disabled: {
      type: Boolean,
      reflect: true
    },
    hidden: {
      type: Boolean,
      reflect: true
    }
  };
  constructor() {
    super();
    this.value = "";
    this.label = "";
    this.iconSrc = "";
    this.disabled = false;
    this.hidden = false;
  }
  render() {
    // This is just a placeholder to pass values into moz-select.
    return "";
  }
}
customElements.define("moz-option", MozOption);

/***/ }),

/***/ 63022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AIGroupedChipContainer: () => (/* binding */ AIGroupedChipContainer)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_ai_grouped_chip_container_ai_grouped_chip_container_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15314);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82242);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(616);
/* harmony import */ var chrome_browser_content_aiwindow_components_smartwindow_panel_list_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55362);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */




// eslint-disable-next-line import/no-unassigned-import


/**
 * Container for rendering 3 or more grouped chips inside the chat content
 */
class AIGroupedChipContainer extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.MozLitElement {
  static properties = {
    chips: {
      type: Array
    },
    isPanelOpen: {
      type: Boolean,
      state: true
    }
  };
  constructor() {
    super();
    this.chips = [];
    this.isPanelOpen = false;
  }

  // Keep this mousedown from reaching panel-list's document-level light-dismiss
  // listener, so the panel stays open until the click handler runs toggle().
  // Otherwise mousedown closes it and the click reopens it.
  #onTriggerMousedown(event) {
    event.stopPropagation();
  }
  #toggleGroupedPanel(event) {
    const panel = this.shadowRoot.querySelector("smartwindow-panel-list");
    panel.anchor = event.currentTarget;
    panel.toggle();
  }
  #closeGroupedPanel() {
    this.shadowRoot.querySelector("smartwindow-panel-list")?.hide();
  }
  #onItemSelected(event) {
    const url = event.detail?.id;
    if (url) {
      this.dispatchEvent(new CustomEvent("AIChatContent:OpenLink", {
        bubbles: true,
        composed: true,
        detail: {
          url,
          preferSwitchToTab: true
        }
      }));
    }
    this.#closeGroupedPanel();
  }
  render() {
    const chipsGroups = [{
      items: this.chips.map(w => ({
        id: w.url,
        label: w.label,
        icon: w.iconSrc
      }))
    }];
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_ai_grouped_chip_container_ai_grouped_chip_container_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <button
        class="grouped-chips"
        id="grouped-chips-trigger"
        aria-haspopup="menu"
        aria-expanded=${this.isPanelOpen}
        ?data-is-smartwindow-panel-open=${this.isPanelOpen}
        @mousedown=${e => this.#onTriggerMousedown(e)}
        @click=${e => this.#toggleGroupedPanel(e)}
      >
        <span class="grouped-chips__favicon-group">
          ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.repeat)(this.chips, (chip, index) => `${chip.url}-${index}`, chip => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<img
                class="grouped-chips__favicon"
                src=${chip.iconSrc || "chrome://global/skin/icons/defaultFavicon.svg"}
                alt=""
                @error=${e => {
      e.target.src = "chrome://global/skin/icons/defaultFavicon.svg";
    }}
              />`)}
        </span>
        <span
          class="grouped-chips__label"
          data-l10n-id="smart-window-context-chips-tag-count"
          data-l10n-args=${JSON.stringify({
      tags: this.chips.length
    })}
        ></span>
        <img
          class="grouped-chips__arrow-icon"
          src="chrome://global/skin/icons/arrow-down-12.svg"
          alt=""
        />
      </button>
      <smartwindow-panel-list
        .groups=${chipsGroups}
        @shown=${() => this.isPanelOpen = true}
        @hidden=${() => this.isPanelOpen = false}
        @item-selected=${e => this.#onItemSelected(e)}
      ></smartwindow-panel-list>
    `;
  }
}
customElements.define("ai-grouped-chip-container", AIGroupedChipContainer);

/***/ }),

/***/ 63232:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "monitors-display.8ba453ff7103c0e4ac90.css";

/***/ }),

/***/ 65554:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ai-website-confirmation.d8b2ed0dce7df3a8165b.css";

/***/ }),

/***/ 65944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozInputText)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_input_text_moz_input_text_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9538);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * A text input custom element.
 *
 * @tagname moz-input-text
 * @property {string} label - The text of the label element
 * @property {string} name - The name of the input control
 * @property {string} value - The value of the input control
 * @property {boolean} disabled - The disabled state of the input control
 * @property {boolean} readonly - The readonly state of the input control
 * @property {string} iconSrc - The src for an optional icon
 * @property {string} description - The text for the description element that helps describe the input control
 * @property {string} supportPage - Name of the SUMO support page to link to.
 * @property {string} placeholder - Text to display when the input has no value.
 * @property {string} ariaLabel - The aria-label text when there is no visible label.
 * @property {string} ariaDescription - The aria-description text when there is no visible description.
 */
class MozInputText extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozBaseInputElement {
  static properties = {
    placeholder: {
      type: String,
      fluent: true
    },
    readonly: {
      type: Boolean,
      reflect: true
    }
  };
  static inputLayout = "block";
  constructor() {
    super();
    this.value = "";
    this.readonly = false;
  }
  inputStylesTemplate() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<link
      rel="stylesheet"
      href="${toolkit_content_widgets_moz_input_text_moz_input_text_css__WEBPACK_IMPORTED_MODULE_0__}"
    />`;
  }
  handleInput(e) {
    this.value = e.target.value;
  }
  inputTemplate(options = {}) {
    let {
      type = "text",
      classes,
      styles,
      inputValue
    } = options;
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <input
        id="input"
        type=${type}
        class=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(classes)}
        style=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(styles)}
        name=${this.name}
        .value=${inputValue || this.value}
        ?disabled=${this.disabled || this.parentDisabled}
        ?readonly=${this.readonly}
        accesskey=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.accessKey)}
        placeholder=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.placeholder)}
        aria-label=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.ariaLabel ?? undefined)}
        aria-describedby="description"
        aria-description=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.hasDescription ? undefined : this.ariaDescription)}
        @input=${this.handleInput}
        @change=${this.redispatchEvent}
      />
    `;
  }
}
customElements.define("moz-input-text", MozInputText);

/***/ }),

/***/ 67134:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ai-action-confirmation.846062355a45ad842377.css";

/***/ }),

/***/ 69214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AIActionConfirmation: () => (/* binding */ AIActionConfirmation)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_ai_action_confirmation_ai_action_confirmation_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67134);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);
/* harmony import */ var chrome_global_content_elements_moz_button_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79240);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



// eslint-disable-next-line import/no-unassigned-import

const DEFAULT_FAVICON = "chrome://global/skin/icons/defaultFavicon.svg";

/**
 * Tab shown in the confirmation card.
 *
 * @typedef {object} TabSelectionData
 * @property {string} url - Tab URL
 * @property {string} title - Display title
 * @property {string} [iconSrc] - Favicon URL
 */

/**
 * Confirmation card for a completed NL browser action.
 *
 * @property {string} labelL10nId - Fluent ID for the label
 * @property {object} labelL10nArgs - Arguments for the label
 * @property {boolean} canUndo - Whether the undo button should be shown
 * @property {boolean} isExpanded - Whether the affected tabs list is visible
 * @property {TabSelectionData[]} tabs - Affected tabs
 */
class AIActionConfirmation extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  #tabsListRef = (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.createRef)();
  #resizeObserver = null;
  #observedList = null;
  #scrollAnimationId = null;
  static properties = {
    labelL10nId: {
      type: String
    },
    labelL10nArgs: {
      type: Object
    },
    tabs: {
      type: Array
    },
    canUndo: {
      type: Boolean
    },
    isExpanded: {
      type: Boolean,
      attribute: "is-expanded",
      reflect: true
    }
  };
  constructor() {
    super();
    this.labelL10nId = null;
    this.labelL10nArgs = null;
    this.tabs = [];
    this.canUndo = false;
    this.isExpanded = false;
  }
  #handleUndo() {
    this.dispatchEvent(new CustomEvent("action-confirmation-undo", {
      bubbles: true,
      composed: true
    }));
  }
  #handleToggle() {
    if (!this.tabs.length) {
      return;
    }
    this.isExpanded = !this.isExpanded;
    this.dispatchEvent(new CustomEvent("action-confirmation-toggle", {
      detail: {
        isExpanded: this.isExpanded
      },
      bubbles: true,
      composed: true
    }));
  }

  /**
   * Open URL or switch to tab. URL if it is already open.
   *
   * @param {MouseEvent} event
   * @param {TabSelectionData} tab
   */
  #handleTabClick(event, tab) {
    event.preventDefault();
    const {
      shiftKey,
      metaKey,
      ctrlKey,
      altKey,
      button
    } = event;
    // Modifier clicks forwards to the parent actor for resolving.
    const hasModifier = shiftKey || metaKey || ctrlKey || altKey || button !== 0;
    this.dispatchEvent(new CustomEvent("AIChatContent:OpenLink", {
      bubbles: true,
      composed: true,
      detail: {
        url: tab.url,
        preferSwitchToTab: !hasModifier,
        shiftKey,
        metaKey,
        ctrlKey,
        altKey,
        button
      }
    }));
  }

  /**
   * Toggles the `data-overflowing` attribute on the scroll container to control
   * the CSS scroll indicators (top line and bottom fade). These visual cues
   * only appear when the tabs list exceeds the container height.
   */
  #updateOverflowState = () => {
    const list = this.#tabsListRef.value;
    const scroller = list?.parentElement;
    if (!list || !scroller) {
      return;
    }
    const overflowing = list.scrollHeight - list.clientHeight > 1;
    if (overflowing !== scroller.hasAttribute("data-overflowing")) {
      scroller.toggleAttribute("data-overflowing", overflowing);
    }
    this.#updateListScrollFade();
  };

  /**
   * Handles scroll events from the tabs list.
   *
   * Returns early if CSS `animation-timeline: scroll()` is supported.
   */
  #handleScroll = () => {
    if (CSS.supports("animation-timeline", "scroll()")) {
      return;
    }
    this.#updateListScrollFade();
  };
  #updateListScrollFade() {
    if (CSS.supports("animation-timeline", "scroll()")) {
      return;
    }
    // Only run animation if there is not already an animation request for
    // the current frame.
    if (this.#scrollAnimationId) {
      return;
    }
    this.#scrollAnimationId = requestAnimationFrame(() => {
      this.#scrollAnimationId = null;
      const list = this.#tabsListRef.value;
      const scroller = list?.parentElement;
      if (!list || !scroller) {
        return;
      }
      const {
        scrollTop,
        scrollHeight,
        clientHeight
      } = list;
      const maxScroll = scrollHeight - clientHeight;
      const progress = maxScroll > 0 ? scrollTop / maxScroll : 0;
      scroller.style.setProperty("--action-confirmation-scroll-progress", progress.toFixed(3));
    });
  }

  /**
   * @param {TabSelectionData} tab
   */
  #renderTab(tab) {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <li>
        <a
          class="action-confirmation-tab"
          href=${tab.url}
          title=${tab.url}
          @click=${e => this.#handleTabClick(e, tab)}
        >
          <img
            class="action-confirmation-tab-icon"
            alt=""
            src=${tab.iconSrc || DEFAULT_FAVICON}
          />
          <span class="action-confirmation-tab-label">${tab.title}</span>
        </a>
      </li>
    `;
  }
  updated() {
    // Observe the list to ensure the overflow is correct across layout changes.
    const list = this.#tabsListRef.value ?? null;
    if (list === this.#observedList) {
      return;
    }
    if (!this.#resizeObserver) {
      this.#resizeObserver = new ResizeObserver(() => this.#updateOverflowState());
    }
    if (this.#observedList) {
      this.#resizeObserver.unobserve(this.#observedList);
      this.#observedList.removeEventListener("scroll", this.#handleScroll);
    }
    if (list) {
      this.#resizeObserver.observe(list);
      list.addEventListener("scroll", this.#handleScroll);
    }
    this.#observedList = list;
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.#resizeObserver?.disconnect();
    this.#resizeObserver = null;
    this.#observedList?.removeEventListener("scroll", this.#handleScroll);
    this.#observedList = null;
    if (this.#scrollAnimationId) {
      cancelAnimationFrame(this.#scrollAnimationId);
      this.#scrollAnimationId = null;
    }
  }
  render() {
    const isExpandable = !!this.tabs.length;
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_ai_action_confirmation_ai_action_confirmation_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <div class="action-confirmation-wrapper">
        <div class="action-confirmation-header">
          <button
            type="button"
            class="action-confirmation-summary"
            ?disabled=${!isExpandable}
            aria-expanded=${isExpandable ? this.isExpanded : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
            aria-controls=${isExpandable && this.isExpanded ? "action-confirmation-tabs" : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
            @click=${this.#handleToggle}
          >
            <span class="action-confirmation-icon" aria-hidden="true"></span>
            <span
              class="action-confirmation-label"
              data-l10n-id=${this.labelL10nId || chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
              data-l10n-args=${this.labelL10nArgs ? JSON.stringify(this.labelL10nArgs) : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
            ></span>
          </button>
          ${this.canUndo ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
                <moz-button
                  class="action-confirmation-undo"
                  type="ghost"
                  @click=${this.#handleUndo}
                  data-l10n-id="smartwindow-nl-undo-button"
                ></moz-button>
              ` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
        </div>
        ${isExpandable && this.isExpanded ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
              <div class="action-confirmation-scroller">
                <ul
                  id="action-confirmation-tabs"
                  class="action-confirmation-tabs"
                  ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ref)(this.#tabsListRef)}
                >
                  ${this.tabs.map(tab => this.#renderTab(tab))}
                </ul>
              </div>
            ` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
      </div>
    `;
  }
}
customElements.define("ai-action-confirmation", AIActionConfirmation);

/***/ }),

/***/ 70020:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-box-item.30f3c101fd935bbcdb92.css";

/***/ }),

/***/ 71526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatAssistantLoader: () => (/* binding */ ChatAssistantLoader)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_ai_chat_content_chat_assistant_loader_chat_assistant_loader_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36490);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82242);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(616);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */




/**
 * Loader shown while the assistant is preparing a response.
 *
 * @property {string} mode - "search" | "nl" | "default"
 */
class ChatAssistantLoader extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.MozLitElement {
  static properties = {
    mode: {
      type: String
    }
  };
  constructor() {
    super();
    this.mode = "default";
  }
  render() {
    let iconTemplate;
    let textTemplate = chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.nothing;
    switch (this.mode) {
      case "search":
        iconTemplate = (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
          <span class="chat-assistant-loader__spinner"></span>
        `;
        textTemplate = (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
          <p
            class="chat-assistant-loader__text"
            data-l10n-id="smartwindow-search-loader-text"
          ></p>
        `;
        break;
      case "nl":
        iconTemplate = (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
          <span class="chat-assistant-loader__nl-icon"></span>
        `;
        textTemplate = (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
          <p
            class="chat-assistant-loader__nl-text"
            data-l10n-id="smartwindow-nl-thinking"
          ></p>
        `;
        break;
      default:
        iconTemplate = (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
          <span class="chat-assistant-loader__spinner"></span>
        `;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_ai_chat_content_chat_assistant_loader_chat_assistant_loader_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <div
        class="chat-assistant-loader"
        role="status"
        data-l10n-id=${this.mode === "default" ? "smartwindow-loading-assistant-response" : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.nothing}
        data-l10n-attrs=${this.mode === "default" ? "aria-label" : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.nothing}
      >
        ${iconTemplate}${textTemplate}
      </div>
    `;
  }
}
customElements.define("chat-assistant-loader", ChatAssistantLoader);

/***/ }),

/***/ 71818:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ai-website-select.17a148d40f1c8c33fd1f.css";

/***/ }),

/***/ 73846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CLIENT_ERROR_MESSAGES: () => (/* binding */ CLIENT_ERROR_MESSAGES),
/* harmony export */   CLIENT_ERROR_SOURCES: () => (/* binding */ CLIENT_ERROR_SOURCES),
/* harmony export */   asString: () => (/* binding */ asString),
/* harmony export */   classifyClientErrorSource: () => (/* binding */ classifyClientErrorSource),
/* harmony export */   dispatchClientError: () => (/* binding */ dispatchClientError),
/* harmony export */   extractClientErrorFields: () => (/* binding */ extractClientErrorFields),
/* harmony export */   installClientErrorListeners: () => (/* binding */ installClientErrorListeners),
/* harmony export */   normalizeClientErrorMessage: () => (/* binding */ normalizeClientErrorMessage),
/* harmony export */   serializeClientErrorDetail: () => (/* binding */ serializeClientErrorDetail)
/* harmony export */ });
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * Shared vocabulary and helpers for the smart_window.client_error event.
 *
 * The event is recorded in the parent process by
 * SmartWindowTelemetry.recordClientError(), but the Smart Window UI that
 * reports failures runs in two documents: the chrome document, which can call
 * Glean directly, and the about:aichatcontent document, which lives in a
 * content process and has to relay through AIChatContentChild/Parent. Keeping
 * the key sets, the field extraction and the message normalization here means
 * both sides describe a failure the same way, whichever route it takes.
 */

const CLIENT_ERROR_EVENT = "AIChatContent:ClientError";

// Error objects already reported, so a single failure that is both explicitly
// captured (e.g. a markdown render error) and rethrown into the window
// "error"/"unhandledrejection" listeners is only emitted once.
const reportedErrors = new WeakSet();

/**
 * Reporting surfaces a failure can be attributed to. Each one is a place the
 * Smart Window UI installs a report hook: Lit's update cycle (recognised from
 * the stack), the markdown setHTML() call, the actor message path, and
 * everything else that reaches a window "error"/"unhandledrejection"
 * listener.
 */
const CLIENT_ERROR_SOURCES = new Set(["lit-render", "markdown", "message-data", "uncaught"]);

/**
 * Every message key the event can carry. Raw exception text is never
 * recorded, so a failure has to map onto one of:
 *   - a surface with a single obvious failure mode (lit_render_failed,
 *     markdown_render_failed, invalid_message_data, message_dispatch_failed)
 *   - the engine message texts we hit often enough to want split out
 *     (property_read_failure, not_a_function, not_iterable)
 *   - runtime_error for anything else. The error type is not lost, it stays
 *     in the event's `name` extra.
 */
const CLIENT_ERROR_MESSAGES = new Set(["invalid_message_data", "lit_render_failed", "markdown_render_failed", "message_dispatch_failed", "not_a_function", "not_iterable", "property_read_failure", "runtime_error"]);
const SOURCE_MESSAGE_KEYS = {
  "lit-render": "lit_render_failed",
  markdown: "markdown_render_failed",
  "message-data": "invalid_message_data"
};

/**
 * @param {unknown} value
 * @returns {string} The value when it is a string, "" otherwise.
 */
function asString(value) {
  return typeof value === "string" ? value : "";
}

/**
 * Pull the event's fields off a thrown value. Anything can be thrown,
 * including plain strings and objects from another realm, so nothing here
 * assumes an Error. The property names match the event's extra keys so these
 * fields can travel from a content process to the parent without being
 * renamed on the way.
 *
 * @param {unknown} error
 * @returns {{name: string, message: string, filename: string, lineno: number}}
 */
function extractClientErrorFields(error) {
  if (typeof error === "string") {
    return {
      name: "",
      message: error,
      filename: "",
      lineno: 0
    };
  }
  if (!error || typeof error !== "object") {
    return {
      name: "",
      message: "",
      filename: "",
      lineno: 0
    };
  }
  return {
    name: asString(error.name),
    message: asString(error.message),
    filename: asString(error.fileName),
    lineno: Number.isFinite(error.lineNumber) ? error.lineNumber : 0
  };
}

/**
 * Resolve the stable message key for a failure. Raw exception text only ever
 * feeds the heuristics below, it is never returned.
 *
 * @param {object} options
 * @param {string} options.source
 *   A member of CLIENT_ERROR_SOURCES.
 * @param {string} [options.messageKey]
 *   Key the reporter already settled on, for failures whose meaning is only
 *   known where they were caught (the actor's message_dispatch_failed).
 * @param {string} [options.message]
 *   Raw exception message, matched against known engine texts.
 * @returns {string} A member of CLIENT_ERROR_MESSAGES.
 */
function normalizeClientErrorMessage({
  source,
  messageKey,
  message
}) {
  const key = asString(messageKey);
  if (key) {
    if (CLIENT_ERROR_MESSAGES.has(key)) {
      return key;
    }
    console.warn(`ClientErrorTelemetry: unknown message key ${JSON.stringify(key)}, deriving one instead`);
  }
  if (SOURCE_MESSAGE_KEYS[source]) {
    return SOURCE_MESSAGE_KEYS[source];
  }
  const text = asString(message).toLowerCase();
  if (text.includes("cannot read properties of undefined") || text.includes("cannot read properties of null") || text.includes("can't access property")) {
    return "property_read_failure";
  }
  if (text.includes("is not a function")) {
    return "not_a_function";
  }
  if (text.includes("is not iterable")) {
    return "not_iterable";
  }
  return "runtime_error";
}

/**
 * Classify a thrown value as a Lit render failure or a generic uncaught error
 * based on whether its stack passes through the Lit library.
 *
 * @param {unknown} error
 * @returns {"lit-render" | "uncaught"}
 */
function classifyClientErrorSource(error) {
  return error && typeof error.stack === "string" && error.stack.includes("lit.all.mjs") ? "lit-render" : "uncaught";
}

/**
 * Report the failures that reach a window: uncaught exceptions and unhandled
 * rejections. Both Smart Window documents want these, but they report them
 * differently, so the caller supplies the reporter.
 *
 * @param {Window} target
 *   The window to listen on.
 * @param {Function} report
 *   Called with (error, source) for each failure.
 * @returns {Function} Removes both listeners.
 */
function installClientErrorListeners(target, report) {
  const reportSafely = error => {
    try {
      report(error, classifyClientErrorSource(error));
    } catch (e) {
      // Never let reporting a failure cause another one.
      console.warn("Could not report Smart Window client error:", e);
    }
  };
  const onError = event => {
    // ErrorEvent shape: { error, message, filename, lineno }. When `error` is
    // null (cross-realm or stack-stripped), the event's own fields are all
    // there is to go on.
    reportSafely(event.error ?? {
      name: "Error",
      message: event.message ?? "",
      fileName: event.filename ?? "",
      lineNumber: event.lineno ?? 0
    });
  };
  const onUnhandledRejection = event => reportSafely(event.reason);
  target.addEventListener("error", onError);
  target.addEventListener("unhandledrejection", onUnhandledRejection);
  return () => {
    target.removeEventListener("error", onError);
    target.removeEventListener("unhandledrejection", onUnhandledRejection);
  };
}

/**
 * Build the detail payload sent up the AIChatContent:ClientError event chain.
 *
 * @param {unknown} error
 * @param {string} source
 *   A member of CLIENT_ERROR_SOURCES.
 * @param {string} [messageKey]
 *   A member of CLIENT_ERROR_MESSAGES, when the reporter knows what the
 *   failure means and does not want the parent to derive a key from the
 *   source or the message text.
 * @returns {{source: string, messageKey: string, name: string, message: string, filename: string, lineno: number}}
 */
function serializeClientErrorDetail(error, source, messageKey = "") {
  return {
    source,
    messageKey,
    ...extractClientErrorFields(error)
  };
}

/**
 * Dispatch a client-error event from a target inside the AI Chat Content
 * document. Bubbles + composes through shadow roots so the actor's top-level
 * listener catches it.
 *
 * @param {EventTarget} target
 * @param {unknown} error
 * @param {string} source
 */
function dispatchClientError(target, error, source) {
  if (error && typeof error === "object") {
    if (reportedErrors.has(error)) {
      return;
    }
    reportedErrors.add(error);
  }
  target.dispatchEvent(new CustomEvent(CLIENT_ERROR_EVENT, {
    bubbles: true,
    composed: true,
    detail: serializeClientErrorDetail(error, source)
  }));
}

/***/ }),

/***/ 75706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AIChatContent: () => (/* binding */ AIChatContent)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_ai_chat_content_ai_chat_content_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91062);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);
/* harmony import */ var chrome_browser_content_aiwindow_components_assistant_message_footer_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56653);
/* harmony import */ var chrome_browser_content_aiwindow_components_chat_assistant_error_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27984);
/* harmony import */ var chrome_browser_content_aiwindow_components_chat_assistant_loader_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71526);
/* harmony import */ var chrome_browser_content_aiwindow_components_chat_assistant_citations_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95396);
/* harmony import */ var chrome_browser_content_aiwindow_components_website_chip_container_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39092);
/* harmony import */ var chrome_browser_content_aiwindow_components_ai_website_confirmation_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5054);
/* harmony import */ var chrome_browser_content_aiwindow_components_ai_action_confirmation_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(69214);
/* harmony import */ var chrome_browser_content_aiwindow_components_kit_mention_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(27482);
/* harmony import */ var chrome_browser_content_aiwindow_components_agent_monitor_item_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(86360);
/* harmony import */ var chrome_global_content_elements_moz_textarea_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(27912);
/* harmony import */ var chrome_browser_content_aiwindow_modules_ClientErrorTelemetry_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(73846);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import



/**
 * @typedef {import("chrome://browser/content/aiwindow/components/ai-action-confirmation.mjs").TabSelectionData} TabSelectionData
 */

const FOLLOW_UP_QTY = 2;
// Stand-in "error" for invalid message data, which has no error object of its
// own. Reusing one object lets dispatchClientError's dedup skip a burst of
// repeated invalid-data reports instead of sending an IPC message each time.
const INVALID_MESSAGE_DATA = {};
/**
 * UI labels for tool results and follow-ups.
 */
const UI_TYPES = {
  WEBSITE_CONFIRMATION: "website-confirmation",
  TAB_GROUP_CONFIRMATION: "tab-group-confirmation",
  AI_ACTION_RESULT: "ai-action-result",
  CANCELLED_COMPONENT: "cancelled-component",
  ACTION_LOG: "action-log",
  RETRY_COMPONENT: "retry-component",
  AGENT_MONITOR: "agent-monitor-item"
};
/**
 * UI update types for communicating user interactions with tool UIs back to the actor.
 */
const UI_UPDATE_TYPES = {
  CONFIRMATION_TAB_SELECTION: "confirmation-tab-selection",
  CANCEL_TAB_SELECTION: "cancel-tab-selection",
  CONFIRM_TAB_GROUP_SELECTION: "confirm-tab-group-selection",
  CONFIRM_OPEN_AND_GROUP_TABS_SELECTION: "confirm-open-and-group-tabs-selection",
  UNDO_TAB_CLOSE: "undo-tab-close",
  UNDO_TAB_GROUP: "undo-tab-group",
  RETRY_PROMPT: "retry-prompt",
  CREATE_WATCH: "create-watch",
  CANCEL_WATCH: "cancel-watch",
  UPDATE_WATCH: "update-watch",
  DELETE_WATCH: "delete-watch",
  PAUSE_WATCH: "pause-watch",
  CHECK_WATCH: "check-watch",
  SAVE_WATCH_DRAFT: "save-watch-draft"
};
const CONFIRMATION_UI_TYPES = [UI_TYPES.WEBSITE_CONFIRMATION, UI_TYPES.TAB_GROUP_CONFIRMATION];

/**
 * Map action types to their corresponding undo update types
 *
 * open_tabs is deliberately absent - every outcome (opening a tab,
 * switching to one, or opening+grouping a mix of new and already-open
 * tabs) is trivially reversible through normal browsing (back button,
 * switching back, closing/ungrouping), unlike close_tabs where undo
 * exists to prevent real data loss. canUndo below checks for an entry
 * here, so its button correctly doesn't render for open_tabs.
 */
const ACTION_TYPE_TO_UNDO_UPDATE_TYPE = {
  close_tabs: UI_UPDATE_TYPES.UNDO_TAB_CLOSE,
  group_tabs: UI_UPDATE_TYPES.UNDO_TAB_GROUP
};

/**
 * Per-actionType config for the tab-group confirmation card: which l10n
 * strings the confirm button uses, and which update type submitting it
 * dispatches. Add a new entry here to support another action type -
 * #renderTabGroupConfirmation itself shouldn't need to change.
 */
const TAB_GROUP_ACTION_CONFIG = {
  group_tabs: {
    confirmActionL10n: {
      disabled: "smart-window-confirm-group-tab",
      enabled: "smart-window-confirm-group-tabs"
    },
    updateType: UI_UPDATE_TYPES.CONFIRM_TAB_GROUP_SELECTION
  },
  open_tabs: {
    confirmActionL10n: {
      disabled: "smart-window-confirm-open-tab",
      enabled: "smart-window-confirm-open-tabs"
    },
    updateType: UI_UPDATE_TYPES.CONFIRM_OPEN_AND_GROUP_TABS_SELECTION
  }
};

/**
 * Mapping of cancelled UI types to their retry message L10n IDs
 */
const RETRY_MESSAGE_L10N_MAP = {
  "website-confirmation": "smartwindow-nl-retry-message",
  "tab-group-confirmation": "smartwindow-nl-retry-group-tabs-message"
};

/**
 * A custom element for managing AI Chat Content
 */
class AIChatContent extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    assistantIsLoading: {
      type: Boolean
    },
    assistantResponseAnnouncement: {
      type: String,
      state: true
    },
    conversationState: {
      type: Array
    },
    followUpSuggestions: {
      type: Array
    },
    errorObj: {
      type: Object
    },
    isSearching: {
      type: Boolean
    },
    tokens: {
      type: Object
    },
    seenUrls: {
      type: Object
    },
    conversationId: {
      type: String
    }
  };
  #lastScrollReq = null;
  #overflowObserver = null;
  #scrollHandler = null;
  #jumpClickHandler = null;
  #scrollRafId = null;
  #removeClientErrorListeners = null;
  #pendingAnnouncementMessageId = null;
  #scrollPositions = new Map();
  #actionResultExpandState = new Map();
  #uiRenderMap = null;
  // English fallback until connectedCallback()'s l10n lookup resolves.
  #defaultTabGroupLabel = "Tab Group";
  constructor() {
    super();
    this.assistantIsLoading = false;
    this.assistantResponseAnnouncement = "";
    this.conversationState = [];
    this.followUpSuggestions = [];
    this.errorObj = null;
    this.isSearching = false;

    // Initialize UI render map
    this.#uiRenderMap = {
      [UI_TYPES.TAB_GROUP_CONFIRMATION]: msg => this.#renderTabGroupConfirmation(msg),
      [UI_TYPES.WEBSITE_CONFIRMATION]: msg => this.#renderWebsiteConfirmation(msg),
      [UI_TYPES.AI_ACTION_RESULT]: msg => this.#renderActionResult(msg),
      [UI_TYPES.CANCELLED_COMPONENT]: () => this.#renderCancelledComponent(),
      [UI_TYPES.RETRY_COMPONENT]: msg => this.#renderRetryComponent(msg),
      [UI_TYPES.AGENT_MONITOR]: msg => this.#renderAgentMonitorComponent(msg)
    };

    /**
     * The set of URLs that have been seen by the conversation. Used for determining
     * if a URL will be unfurled or not.
     *
     * @type {Set<string>}
     */
    this.seenUrls = new Set();

    /**
     * The current conversationId for the seenUrls.
     *
     * @type {null | string}
     */
    this.conversationId = null;
  }
  connectedCallback() {
    super.connectedCallback();
    this.#initEventListeners();
    this.dispatchEvent(new CustomEvent("AIChatContent:Ready", {
      bubbles: true
    }));
    this.#initFooterActionListeners();
    this.#initOverflowObserver();
    this.#initScrollListener();
    this.#removeClientErrorListeners = (0,chrome_browser_content_aiwindow_modules_ClientErrorTelemetry_mjs__WEBPACK_IMPORTED_MODULE_13__.installClientErrorListeners)(window, (error, source) => (0,chrome_browser_content_aiwindow_modules_ClientErrorTelemetry_mjs__WEBPACK_IMPORTED_MODULE_13__.dispatchClientError)(this, error, source));
    this.#scrollPositions.clear();
    this.ownerDocument.l10n.formatValue("smart-window-default-tab-group-label").then(label => {
      if (label) {
        this.#defaultTabGroupLabel = label;
        this.requestUpdate();
      }
    }).catch(() => {});
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.#overflowObserver?.disconnect();
    this.#overflowObserver = null;
    this.#teardownScrollListener();
    this.#removeClientErrorListeners?.();
    this.#removeClientErrorListeners = null;
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    // When the conversation is replaced (e.g. switching to a tab with an empty
    // sidebar) no scroll event fires, so recompute the jump-to-bottom button
    // here to avoid it lingering from the previous conversation.
    if (changedProperties.has("conversationState")) {
      this.#updateJumpButtonState();
    }
  }
  #dispatchAction(action, detail) {
    this.dispatchEvent(new CustomEvent("AIChatContent:DispatchAction", {
      bubbles: true,
      composed: true,
      detail: {
        action,
        ...(detail ?? {})
      }
    }));
  }

  // ai-window sends its mode (sidebar/fullpage) over the actor once the content
  // is ready; reflect it as an attribute so styles can key off it.
  #handleSetMode(event) {
    const mode = event.detail?.mode;
    if (mode) {
      this.setAttribute("mode", mode);
    }
  }

  /**
   * Initialize event listeners for AI chat content events
   */
  #initEventListeners() {
    this.addEventListener("aiChatContentActor:message", this.messageEvent.bind(this));
    this.addEventListener("aiChatContentActor:truncate", this.truncateEvent.bind(this));
    this.addEventListener("aiChatContentActor:remove-applied-memory", this.removeAppliedMemoryEvent.bind(this));
    this.addEventListener("aiChatContentActor:seen-urls", this.#handleSeenUrls.bind(this));
    this.addEventListener("aiChatContentActor:set-generating", this.#handleSetGenerating.bind(this));
    this.addEventListener("aiChatContentActor:assets-ready", this.#handleAssetsReady.bind(this));
    this.addEventListener("aiChatContentActor:set-mode", this.#handleSetMode.bind(this));
    this.addEventListener("aiChatError:retry-message", this.retryUserMessageAfterError.bind(this));
    this.addEventListener("SmartWindowPrompt:prompt-selected", this.#onFollowUpSelected.bind(this));
    this.addEventListener("aiChatError:new-chat", this.openNewChatAfterError.bind(this));
    this.addEventListener("aiChatError:sign-in", this.openAccountSignInAfterError.bind(this));
    this.addEventListener("ai-chat-message:complete", event => {
      const {
        messageId,
        text
      } = event.detail ?? {};
      if (messageId && messageId === this.#pendingAnnouncementMessageId) {
        this.#pendingAnnouncementMessageId = null;
        this.assistantResponseAnnouncement = text || "";
      }
    });
  }

  /**
   * Initialize event listeners for footer actions (retry, copy, etc.)
   * emitted by child components.
   */

  #initFooterActionListeners() {
    this.addEventListener("copy-message", event => {
      const {
        messageId
      } = event.detail ?? {};
      const text = this.#getAssistantMessageBody(messageId);
      this.#dispatchAction("copy", {
        messageId,
        text
      });
    });
    this.addEventListener("copy-table", event => {
      const {
        messageId,
        lineRange
      } = event.detail ?? {};
      const text = this.#getAssistantMessageBody(messageId);
      const tableMarkdown = text.split("\n").slice(lineRange[0], lineRange[1]).join("\n");
      this.#dispatchAction("copy-table", {
        messageId,
        text: tableMarkdown
      });
    });
    this.addEventListener("retry-message", event => {
      this.#dispatchAction("retry", event.detail);
    });
    this.addEventListener("retry-without-memories", event => {
      this.#dispatchAction("retry-without-memories", event.detail);
    });
    this.addEventListener("remove-applied-memory", event => {
      this.#dispatchAction("remove-applied-memory", event.detail);
    });
    this.addEventListener("toggle-applied-memories", event => {
      this.#dispatchAction("toggle-applied-memories", event.detail);
    });
    this.addEventListener("manage-memories", event => {
      this.#dispatchAction("manage-memories", event.detail);
    });
    this.addEventListener("open-memories-learn-more", event => {
      this.#dispatchAction("open-memories-learn-more", event.detail);
    });
    this.addEventListener("thumbs-up", event => {
      this.#dispatchAction("thumbs-up", event.detail);
    });
    this.addEventListener("thumbs-down", event => {
      this.#dispatchAction("thumbs-down", event.detail);
    });
  }
  #initOverflowObserver() {
    this.#overflowObserver = new ResizeObserver(() => {
      const wrapper = this.shadowRoot.querySelector(".chat-content-wrapper");
      const innerWrapper = this.shadowRoot.querySelector(".chat-inner-wrapper");
      if (!wrapper || !innerWrapper) {
        return;
      }
      const hasContent = innerWrapper.children.length;
      // Use a 10px threshold to avoid false positives from layout differences
      const thresholdPadding = 10;
      wrapper.toggleAttribute("overflowing", hasContent && wrapper.scrollHeight > wrapper.clientHeight + thresholdPadding);

      // Recompute the jump-to-bottom button after content resizes (e.g.
      // switching to an empty/short conversation) since no scroll event
      // fires in that case and the button would otherwise stay visible.
      this.#updateJumpButtonState();
    });
    this.updateComplete.then(() => {
      this.#overflowObserver.observe(this.shadowRoot.querySelector(".chat-inner-wrapper"));
    });
  }
  get #wrapper() {
    return this.shadowRoot?.querySelector(".chat-content-wrapper");
  }
  get #jumpButton() {
    return this.shadowRoot?.querySelector(".jump-to-bottom-button");
  }
  #initScrollListener() {
    this.updateComplete.then(() => {
      if (!this.isConnected) {
        return;
      }
      const wrapper = this.#wrapper;
      const jumpButton = this.#jumpButton;
      if (!wrapper || !jumpButton) {
        return;
      }
      this.#scrollHandler = () => {
        if (this.#scrollRafId) {
          return;
        }
        this.#scrollRafId = requestAnimationFrame(() => {
          this.#scrollRafId = null;
          this.#updateJumpButtonState();
        });
      };
      this.#jumpClickHandler = () => {
        wrapper.scrollTop = wrapper.scrollHeight;
      };
      wrapper.addEventListener("scroll", this.#scrollHandler);
      jumpButton.addEventListener("click", this.#jumpClickHandler);
    });
  }
  #updateJumpButtonState() {
    const wrapper = this.#wrapper;
    const jumpButton = this.#jumpButton;
    if (!wrapper || !jumpButton) {
      return;
    }
    const distanceFromBottom = wrapper.scrollHeight - wrapper.scrollTop - wrapper.clientHeight;
    const threshold = wrapper.clientHeight * 0.5;
    const show = distanceFromBottom > threshold;
    const atBottom = distanceFromBottom < 1;
    if (jumpButton.hasAttribute("visible") !== show) {
      jumpButton.toggleAttribute("visible", show);
      jumpButton.toggleAttribute("disabled", !show);
    }
    if (wrapper.hasAttribute("scrolled-to-bottom") !== atBottom) {
      wrapper.toggleAttribute("scrolled-to-bottom", atBottom);
    }
  }
  #teardownScrollListener() {
    if (this.#scrollRafId) {
      cancelAnimationFrame(this.#scrollRafId);
      this.#scrollRafId = null;
    }
    if (this.#scrollHandler) {
      this.#wrapper?.removeEventListener("scroll", this.#scrollHandler);
      this.#scrollHandler = null;
    }
    if (this.#jumpClickHandler) {
      this.#jumpButton?.removeEventListener("click", this.#jumpClickHandler);
      this.#jumpClickHandler = null;
    }
  }
  #getAssistantMessageBody(messageId) {
    if (!messageId) {
      return "";
    }
    const msg = this.conversationState.find(m => {
      return m?.role === "assistant" && m?.messageId === messageId;
    });
    return msg?.body ?? "";
  }
  #onFollowUpSelected(event) {
    event.stopPropagation();
    this.followUpSuggestions = [];
    this.dispatchEvent(new CustomEvent("AIChatContent:DispatchFollowUp", {
      detail: {
        text: event.detail.text
      },
      bubbles: true
    }));
  }

  /**
   * Add new seen URLs to the current conversation.
   *
   * @param {object} event
   * @param {object} event.detail
   * @param {string} event.detail.conversationId
   * @param {Set<string>} event.detail.seenUrls
   */
  #handleSeenUrls({
    detail: {
      conversationId,
      seenUrls
    }
  }) {
    if (this.conversationId == conversationId) {
      this.seenUrls = this.seenUrls.union(seenUrls);
    } else {
      this.conversationId = conversationId;
      this.seenUrls = seenUrls;
    }
  }
  messageEvent(event) {
    const message = event.detail;

    // Only bail on shapes that can't be handled at all (null, non-object).
    // Unknown roles fall through to the switch's default arm below, so adding
    // a new role doesn't require touching telemetry.
    if (!message || typeof message !== "object") {
      (0,chrome_browser_content_aiwindow_modules_ClientErrorTelemetry_mjs__WEBPACK_IMPORTED_MODULE_13__.dispatchClientError)(this, INVALID_MESSAGE_DATA, "message-data");
      return;
    }
    if (message?.content?.isError) {
      this.handleErrorEvent(message?.content);
      return;
    }
    this.errorObj = null;
    switch (message.role) {
      case "loading":
        this.#checkConversationState(message);
        this.handleLoadingEvent(event);
        break;
      case "assistant":
        this.#checkConversationState(message);
        this.handleAIResponseEvent(event);
        break;
      case "tool":
        this.#checkConversationState(message);
        this.handleToolMessageEvent(event);
        break;
      case "user":
        this.#checkConversationState(message);
        this.handleUserPromptEvent(event);
        break;
      case "assistant-message-complete":
        this.#setMessageComplete(message);
        break;
      case "restored-all-messages-in-a-conversation":
        this.#restoreChatScrollPosition(message.convId);
        break;
      // Used to clear the conversation state via side effects ( new conv id )
      case "clear-conversation":
        this.#checkConversationState(message);
    }
  }
  #handleSetGenerating(event) {
    this.assistantIsLoading = !!event.detail?.isGenerating;
    if (!this.assistantIsLoading) {
      this.isSearching = false;
    }
    this.requestUpdate();
  }

  /**
   * Apply the history assets resolved by the parent (page thumbnail and favicon
   * status) to a message's history results. Reassigns a fresh
   * historyResultsMap so the ai-chat-message sees a changed reference and
   * recalculates its grid loading state.
   *
   * @param {CustomEvent} event
   * @param {string} event.detail.messageId
   * @param {Array<{url: string, image: string|null, hasFavicon: boolean}>} event.detail.images
   */
  #handleAssetsReady(event) {
    const {
      messageId,
      images
    } = event.detail ?? {};
    if (!messageId || !images?.length) {
      return;
    }
    const entry = this.conversationState.find(msg => msg?.messageId === messageId);
    if (!entry) {
      return;
    }
    let changed = false;
    if (entry.historyResultsMap) {
      for (const {
        url,
        image,
        hasFavicon
      } of images) {
        const record = entry.historyResultsMap.get(url);
        if (!record) {
          continue;
        }
        if (record.image !== image) {
          record.image = image;
          changed = true;
        }
        if (record.hasFavicon !== hasFavicon) {
          record.hasFavicon = hasFavicon;
          changed = true;
        }
      }
      if (changed) {
        // New Map reference so Lit sees a changed prop and ai-chat-message
        // re-renders, in-place mutations above alone won't trigger a change
        entry.historyResultsMap = new Map(entry.historyResultsMap);
      }
    }
    if (entry.citations?.length) {
      const faviconByUrl = new Map(images.map(({
        url,
        hasFavicon
      }) => [url, hasFavicon]));
      let citationsChanged = false;
      const citations = entry.citations.map(citation => {
        if (!faviconByUrl.has(citation.url)) {
          return citation;
        }
        const hasFavicon = faviconByUrl.get(citation.url);
        // TODO (Bug 2060835): Citations get a default favicon when Places don’t
        // already have one stored for the URL.
        if (citation.hasFavicon === hasFavicon) {
          return citation;
        }
        citationsChanged = true;
        return {
          ...citation,
          hasFavicon
        };
      });
      if (citationsChanged) {
        entry.citations = citations;
        changed = true;
      }
    }
    if (!changed) {
      return;
    }
    this.requestUpdate();
  }

  /**
   * Ask the parent to resolve favicon availability for citation URLs.
   *
   * @param {string} messageId
   * @param {Array<{url: string}>} citations
   */
  #requestCitationFavicons(messageId, citations) {
    const items = citations.filter(citation => citation?.url && citation.hasFavicon === undefined).map(citation => ({
      url: citation.url
    }));
    if (!items.length) {
      return;
    }
    this.dispatchEvent(new CustomEvent("AIChatContent:RequestAssets", {
      bubbles: true,
      composed: true,
      detail: {
        conversationId: this.conversationId,
        messageId,
        items
      }
    }));
  }
  async #restoreChatScrollPosition(convId) {
    await this.updateComplete;

    // Making sure we check if convId hasn't changed while we awaited
    const lastMessage = this.conversationState.findLast(m => m.convId === convId);
    if (!lastMessage) {
      return;
    }

    // Wait a frame to ensure the footer and its children are visible
    await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
    const wrapper = this.#wrapper;
    if (!wrapper) {
      return;
    }
    const savedPosition = this.#scrollPositions.get(convId);
    if (savedPosition?.contentHeight) {
      this.shadowRoot?.querySelector(".chat-inner-wrapper")?.style.setProperty("--content-height", savedPosition.contentHeight);
    }
    const goToBottom = !savedPosition || savedPosition.wasAtBottom || savedPosition.wasWaitingForResponse;
    if (!goToBottom) {
      wrapper.scrollTo({
        top: savedPosition.scrollTop,
        behavior: "instant"
      });
      return;
    }
    const lastChild = this.shadowRoot.querySelector(".chat-inner-wrapper")?.lastElementChild;
    if (lastChild) {
      lastChild.scrollIntoView({
        block: "end",
        behavior: "instant"
      });
      return;
    }
    wrapper.scrollTo({
      top: wrapper.scrollHeight,
      behavior: "instant"
    });
  }
  get #kitMention() {
    return this.shadowRoot?.querySelector("kit-mention");
  }
  #setMessageComplete(message) {
    const messageId = message.content?.id;
    if (!messageId) {
      return;
    }
    const assistantLastMessage = this.conversationState.findLast(msg => msg?.messageId === messageId);
    if (assistantLastMessage) {
      assistantLastMessage.isLastChunk = true;
      // Freeze the message's own snapshot from the completion event so it
      // matches the URLs it lists; later searches won't alter it.
      const records = message.historyResults;
      if (records?.length) {
        assistantLastMessage.historyResultsMap = new Map(records.map(record => [record.url, record]));
      }
      if (message.citations?.length) {
        assistantLastMessage.citations = message.citations;
        this.#requestCitationFavicons(messageId, message.citations);
      }
    }
    this.#pendingAnnouncementMessageId = messageId;
    this.assistantResponseAnnouncement = "";
    this.requestUpdate();
  }
  #clearAssistantResponseAnnouncement() {
    this.#pendingAnnouncementMessageId = null;
    this.assistantResponseAnnouncement = "";
  }

  /**
   * Check if conversationState needs to be cleared
   *
   * @param {ChatMessage} message
   */
  #checkConversationState(message) {
    // Use find/findLast instead of at(0)/at(-1) because
    // conversationState is a sparse array indexed by ordinal and
    // at() can land on a hole (undefined) after truncation.
    const lastMessage = this.conversationState.findLast(m => m);
    const firstMessage = this.conversationState.find(m => m);
    const isReloadingSameConvo = firstMessage && firstMessage.convId === message.convId && firstMessage.ordinal === message.ordinal;
    const convIdChanged = message.convId !== lastMessage?.convId;
    if (convIdChanged && lastMessage?.convId && this.#wrapper) {
      this.saveScrollPosition(lastMessage, this.#wrapper);
    }

    // If the conversation ID has changed, reset the conversation state
    if (convIdChanged || isReloadingSameConvo) {
      this.conversationState = [];
      this.followUpSuggestions = [];
      this.#clearAssistantResponseAnnouncement();
      this.isSearching = false;
      this.#kitMention?.reset();
      if (convIdChanged) {
        this.shadowRoot?.querySelector(".chat-inner-wrapper")?.style.removeProperty("--content-height");
      }
      this.requestUpdate();
    }
  }

  /* Saves the scroll position when we switch tabs */
  saveScrollPosition(lastMessage, wrapper) {
    const innerWrapper = this.shadowRoot.querySelector(".chat-inner-wrapper");

    // if element is near the bottom (50px or less)
    // we scroll all the way to the end as default
    let wasAtBottom = true;
    const lastChild = innerWrapper?.lastElementChild;
    if (lastChild) {
      const lastChildRect = lastChild.getBoundingClientRect();
      const wrapperRect = wrapper.getBoundingClientRect();
      wasAtBottom = lastChildRect.bottom <= wrapperRect.bottom + 50;
    }
    const wasWaitingForResponse = this.assistantIsLoading || this.isSearching || lastMessage.role !== "assistant" || !lastMessage.isLastChunk;
    this.#scrollPositions.set(lastMessage.convId, {
      scrollTop: wrapper.scrollTop,
      wasAtBottom,
      wasWaitingForResponse,
      contentHeight: innerWrapper?.style.getPropertyValue("--content-height") || null
    });
  }
  handleLoadingEvent(event) {
    const {
      isSearching
    } = event.detail;
    this.#clearAssistantResponseAnnouncement();
    this.isSearching = !!isSearching;
    this.requestUpdate();
  }
  handleErrorEvent(error) {
    this.isSearching = false;
    this.errorObj = error;
    this.requestUpdate();
  }

  /**
   * Handle tool role messages produced when a toolcall completes
   *
   * @param {CustomEvent} event
   */
  handleToolMessageEvent(event) {
    const {
      convId,
      ordinal,
      content,
      actionLog
    } = event.detail ?? {};
    if (!content?.name || !actionLog?.uiType) {
      return;
    }

    // uiTypes that this conversation knows how to render as tool UI
    const ACCEPTED_UI_TYPES = [UI_TYPES.ACTION_LOG];
    if (!ACCEPTED_UI_TYPES.includes(actionLog.uiType)) {
      return;
    }
    this.conversationState[ordinal] = {
      role: "tool",
      uiType: actionLog.uiType,
      convId,
      ordinal,
      toolCallId: content.tool_call_id,
      toolName: content.name,
      pendingLabel: actionLog.pendingLabel,
      row: actionLog.row
    };
    this.requestUpdate();
  }

  /**
   *  Handle user prompt events
   *
   * @param {CustomEvent} event - The custom event containing the user prompt
   */

  handleUserPromptEvent(event) {
    this.followUpSuggestions = [];
    const {
      convId,
      content,
      ordinal,
      isPreviousMessage
    } = event.detail;
    if (!isPreviousMessage) {
      this.#clearAssistantResponseAnnouncement();
    }
    this.conversationState[ordinal] = {
      role: "user",
      body: content.body,
      contextMentions: content.contextMentions,
      pageUrl: content.contextPageUrl ?? null,
      convId,
      ordinal
    };
    this.requestUpdate();
    if (!isPreviousMessage) {
      this.#scrollUserMessageIntoView();
    }
  }
  retryUserMessageAfterError() {
    const lastMessage = this.conversationState.findLast(m => m);
    if (!lastMessage) {
      return;
    }
    this.#dispatchAction("retry-after-error", {
      ...lastMessage,
      content: {
        type: "text",
        body: lastMessage.body,
        contextMentions: lastMessage.contextMentions
      }
    });
  }
  #isAIResponseValid(content, toolUIData) {
    return typeof content?.body === "string" && content.body || !!content?.l10nId || !!toolUIData;
  }

  /**
   * Handle AI response events
   *
   * @param {CustomEvent} event - The custom event containing the response
   */

  handleAIResponseEvent(event) {
    this.isSearching = false;
    const {
      convId,
      ordinal,
      id: messageId,
      content,
      memoriesApplied,
      showMemoriesCallout,
      webSearchQueries = [],
      followUpSuggestions = [],
      isPreviousMessage,
      toolUIData,
      toolUIDraft,
      kit,
      isRestored,
      historyResults = [],
      citations = []
    } = event.detail;
    if (!this.#isAIResponseValid(content, toolUIData)) {
      return;
    }

    // favor web search display over follow ups.
    this.followUpSuggestions = webSearchQueries.length ? [] : followUpSuggestions.slice(0, FOLLOW_UP_QTY);
    const isLastChunk = !!isPreviousMessage || !!this.conversationState[ordinal]?.isLastChunk;

    // History results travel on the message, build this message's snapshot Map
    // from the records the parent dispatched, keyed by URL.
    const historyResultsMap = historyResults.length ? new Map(historyResults.map(record => [record.url, record])) : undefined;
    this.conversationState[ordinal] = {
      role: "assistant",
      convId,
      messageId,
      body: content.body,
      messageL10n: content.l10nId ? {
        id: content.l10nId,
        args: content.l10nArgs,
        link: content.link
      } : null,
      appliedMemories: memoriesApplied ?? [],
      showCallout: showMemoriesCallout ?? false,
      isLastChunk,
      toolUIData,
      toolUIDraft,
      historyResultsMap,
      citations,
      isRestored
    };
    if (citations.length) {
      this.#requestCitationFavicons(messageId, citations);
    }
    if (kit && !isPreviousMessage) {
      this.#kitMention?.trigger({
        value: kit,
        convId
      });
    }
    this.requestUpdate();
  }
  #scrollUserMessageIntoView() {
    let scrollReq = {};
    this.#lastScrollReq = scrollReq;
    this.updateComplete.then(() => {
      const msgs = this.shadowRoot?.querySelectorAll(".chat-bubble-user");
      if (!msgs?.length) {
        return;
      }
      let lastMessage = msgs[msgs.length - 1];
      requestAnimationFrame(() => {
        if (scrollReq !== this.#lastScrollReq) {
          return;
        }
        let elTop = lastMessage.offsetTop;
        lastMessage.parentNode.style.setProperty("--content-height", `calc(${elTop}px + 100% - var(--smart-window-top-spacing-chat))`);
        requestAnimationFrame(() => {
          if (scrollReq == this.#lastScrollReq) {
            lastMessage.scrollIntoView({
              block: "start"
            });
          }
        });
      });
    });
  }
  truncateEvent(event) {
    const {
      messageId
    } = event.detail ?? {};
    if (!messageId) {
      return;
    }
    const idx = this.conversationState.findIndex(m => {
      return m?.role === "assistant" && m?.messageId === messageId;
    });
    if (idx === -1) {
      return;
    }
    this.conversationState = this.conversationState.slice(0, idx);
    this.requestUpdate();
  }
  removeAppliedMemoryEvent(event) {
    const {
      messageId,
      memoryId
    } = event.detail ?? {};
    const msg = this.conversationState.find(m => {
      return m?.role === "assistant" && m?.messageId === messageId;
    });
    msg.appliedMemories = msg.appliedMemories.filter(memory => memory?.id !== memoryId);
    this.requestUpdate();
  }
  openNewChatAfterError() {
    const event = new CustomEvent("AIChatContent:DispatchNewChat", {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  /**
   * Returns the chips to display for a message, suppressing the current-tab
   * chip when the page context hasn't changed since the previous user message.
   *
   * @param {object} msg - A conversationState entry.
   * @param {string|null} lastContextPageUrl - The page URL of the preceding
   * user message, or undefined if there is none.
   * @returns {ContextWebsite[]}
   */
  #getVisibleChips(msg, lastContextPageUrl) {
    // If this message is on the same page as the previous message,
    // hide the page URL chip to avoid showing duplicate page context
    if (!msg || msg.role !== "user" || !msg.contextMentions?.length) {
      return [];
    }
    const currentPageUrl = msg.pageUrl;
    const shouldHideDuplicatePageChip = currentPageUrl && currentPageUrl === lastContextPageUrl;
    if (shouldHideDuplicatePageChip) {
      return msg.contextMentions.filter(chip => URL.parse(chip.url)?.href !== currentPageUrl);
    }
    return msg.contextMentions;
  }
  openAccountSignInAfterError() {
    const event = new CustomEvent("AIChatContent:AccountSignIn", {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }
  #buildTabsRow(labelL10nId, tabs) {
    return tabs.length ? [{
      labelL10nId,
      items: tabs.map(tab => ({
        url: tab.url,
        label: tab.title
      }))
    }] : [];
  }
  #getCloseTabsData(confirmedData) {
    const selectedTabs = confirmedData.selectedTabs || [];
    const tabCount = selectedTabs.length;
    const rows = this.#buildTabsRow("smart-window-closed-tabs-row-label", selectedTabs);
    return {
      labelL10nId: "smart-window-closed-tabs-label",
      labelL10nArgs: {
        count: tabCount
      },
      summaryL10nId: "smart-window-closed-tabs-summary",
      summaryL10nArgs: {
        count: tabCount
      },
      rows
    };
  }
  #getRestoreTabsData(originalClosedTabs) {
    const restoredCount = originalClosedTabs.length;
    // Format rows to show both closed and restored tabs
    const rows = [{
      labelL10nId: "smart-window-closed-tabs-row-label",
      items: originalClosedTabs.map(({
        url,
        title
      }) => ({
        url,
        label: title
      }))
    }, {
      labelL10nId: "smart-window-restored-row-label",
      labelL10nArgs: {
        count: restoredCount
      }
      // Design opted out of showing items here.
    }];
    return {
      labelL10nId: "smart-window-closed-and-restored-label",
      summaryL10nId: "smart-window-restore-success-summary",
      summaryL10nArgs: {
        count: restoredCount
      },
      rows
    };
  }
  #getGroupTabsData(confirmedData) {
    const selectedTabs = confirmedData.selectedTabs || [];
    const tabCount = selectedTabs.length;
    const group = confirmedData.group || {};
    const rows = this.#buildTabsRow("smart-window-grouped-tabs-row-label", selectedTabs);
    return {
      labelL10nId: "smart-window-grouped-tabs-label",
      labelL10nArgs: {
        count: tabCount
      },
      summaryL10nId: "smart-window-grouped-tabs-summary",
      summaryL10nArgs: {
        count: tabCount,
        label: group.label || this.#defaultTabGroupLabel
      },
      rows
    };
  }
  #getSwitchedTabData(tab) {
    return {
      labelL10nId: "smart-window-switched-tab-label",
      summaryL10nId: "smart-window-switched-tab-summary",
      summaryL10nArgs: {
        title: tab?.title || tab?.url || ""
      },
      rows: []
    };
  }
  #getOpenTabsData(confirmedData) {
    // A single already-open tab was switched to, not opened - no group,
    // no "opened" wording.
    if (confirmedData.switched) {
      return this.#getSwitchedTabData(confirmedData.selectedTabs?.[0]);
    }
    const selectedTabs = confirmedData.selectedTabs || [];
    const tabCount = selectedTabs.length;

    // Every selected tab was already open - nothing was actually opened,
    // so this reads the same as a plain group_tabs result.
    if (tabCount && confirmedData.mergedCount === tabCount) {
      return this.#getGroupTabsData(confirmedData);
    }
    const group = confirmedData.group || {};
    // A tab group is only created for 2+ tabs (see
    // ToolUI#handleOpenAndGroupTabsSelection) - group.label is only ever
    // set in that case, never for a single opened tab.
    const hasGroup = !!group.label;
    const rows = this.#buildTabsRow("smart-window-opened-tabs-row-label", selectedTabs);
    return {
      labelL10nId: "smart-window-opened-tabs-label",
      labelL10nArgs: {
        count: tabCount
      },
      summaryL10nId: hasGroup ? "smart-window-opened-tabs-summary-group" : "smart-window-opened-tabs-summary-single",
      summaryL10nArgs: hasGroup ? {
        count: tabCount,
        label: group.label || this.#defaultTabGroupLabel
      } : {
        count: tabCount
      },
      rows
    };
  }
  #getUngroupedTabsData(originalGroupedTabs) {
    const ungroupedCount = originalGroupedTabs.length;
    // Format rows to show both grouped and ungrouped tabs
    const rows = [{
      labelL10nId: "smart-window-grouped-tabs-row-label",
      labelL10nArgs: {},
      items: originalGroupedTabs.map(({
        url,
        title
      }) => ({
        url,
        label: title
      }))
    }, {
      labelL10nId: "smart-window-ungrouped-row-label",
      labelL10nArgs: {
        count: ungroupedCount
      },
      // Design opted out of showing items here, similar to restored tabs
      items: []
    }];
    return {
      labelL10nId: "smart-window-grouped-and-ungrouped-label",
      summaryL10nId: "smart-window-ungroup-success-summary",
      summaryL10nArgs: {
        count: ungroupedCount
      },
      rows
    };
  }
  #getActionResultData(confirmedData, wasRestored) {
    const actionType = confirmedData.actionType;
    if (!actionType) {
      return null;
    }
    const methodMap = {
      group_tabs: wasRestored ? () => this.#getUngroupedTabsData(confirmedData.originalGroupedTabs || []) : () => this.#getGroupTabsData(confirmedData),
      close_tabs: wasRestored ? () => this.#getRestoreTabsData(confirmedData.originalClosedTabs || []) : () => this.#getCloseTabsData(confirmedData),
      // No wasRestored branch yet - open_tabs has no undo support (see
      // ACTION_TYPE_TO_UNDO_UPDATE_TYPE above).
      open_tabs: () => this.#getOpenTabsData(confirmedData)
    };
    const method = methodMap[actionType];
    return method ? method() : null;
  }

  /**
   * Render a turn's tool calls as a single grouped action log container
   *
   * @param {Array<object>} toolMsgs - one entry per tool call this turn
   * @param {boolean} isComplete - whether the turn has finished
   * @param {number} groupIndex - this group's index in the render items
   */
  #renderActionLogGroup(toolMsgs, isComplete, groupIndex) {
    const finalMessage = {
      l10nId: "action-log-completed-steps",
      l10nArgs: {
        count: toolMsgs.length
      }
    };
    const summary = isComplete ? finalMessage : toolMsgs[toolMsgs.length - 1]?.pendingLabel;
    const key = `action-log:${toolMsgs[0]?.id ?? toolMsgs[0]?.messageId ?? groupIndex}`;
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <ai-action-result
        .labelL10nId=${summary?.l10nId}
        .labelL10nArgs=${summary?.l10nArgs}
        .labelLink=${summary?.link ?? null}
        .rows=${this.#buildGroupedActionLogRows(toolMsgs)}
        .isLoading=${!isComplete}
        .isExpanded=${this.#actionResultExpandState.get(key) ?? false}
        @action-result-toggle=${e => this.#actionResultExpandState.set(key, !!e.detail?.isExpanded)}
      ></ai-action-result>
    `;
  }

  /**
   * Render the appropriate tool UI for a tool message, if applicable.
   *
   * @param {object} msg - A conversationState entry.
   * @returns {TemplateResult|nothing} - The rendered tool UI or nothing if not applicable.
   */
  #renderToolUI(msg) {
    if (!msg.toolUIData) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing;
    }
    const toolUIData = msg.toolUIData;

    // For restored confirmation UIs, we want to show the rety component instead of the original confirmation UI.
    // We will store the original uiType in a property called cancelledUiType so we can use it to show a unique retry message.
    if (CONFIRMATION_UI_TYPES.includes(toolUIData.uiType) && msg.isRestored) {
      toolUIData.properties = {
        ...toolUIData.properties,
        cancelledUiType: toolUIData.uiType
      };
      toolUIData.uiType = UI_TYPES.RETRY_COMPONENT;
    }
    const renderFn = this.#uiRenderMap[toolUIData.uiType];
    return renderFn ? renderFn(msg) : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing;
  }
  #handleConfirmationSubmit = (event, messageId, toolCallId) => {
    this.#dispatchToolUIUpdate({
      messageId,
      toolCallId,
      updateType: UI_UPDATE_TYPES.CONFIRMATION_TAB_SELECTION,
      updateData: event.detail
    });
  };
  #handleConfirmationClose = (event, messageId, toolCallId) => {
    this.#dispatchToolUIUpdate({
      messageId,
      toolCallId,
      updateType: UI_UPDATE_TYPES.CANCEL_TAB_SELECTION,
      updateData: event.detail
    });
  };
  #handleMonitorSubmit = (event, messageId, toolCallId) => {
    // The display card reuses submit for edits; create only happens from the
    // "create" card.
    const isEdit = event.detail?.mode === "display";
    this.#dispatchToolUIUpdate({
      messageId,
      toolCallId,
      updateType: isEdit ? UI_UPDATE_TYPES.UPDATE_WATCH : UI_UPDATE_TYPES.CREATE_WATCH,
      updateData: event.detail
    });
  };
  #handleMonitorCancel = (event, messageId, toolCallId) => {
    /* TODO: Bug 2055336 - Add cancel monitor view */
    this.#dispatchToolUIUpdate({
      messageId,
      toolCallId,
      updateType: UI_UPDATE_TYPES.CANCEL_WATCH,
      updateData: event.detail
    });
  };
  #handleMonitorAction = (event, messageId, toolCallId, updateType) => {
    this.#dispatchToolUIUpdate({
      messageId,
      toolCallId,
      updateType,
      updateData: event.detail
    });
  };
  #renderAgentMonitorComponent(msg) {
    const {
      messageId,
      toolUIData,
      toolUIDraft
    } = msg;
    const toolCallId = toolUIData.toolCallId;
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<agent-monitor-item
      mode=${toolUIData.properties?.mode ?? "create"}
      .agent=${toolUIData.properties?.agent}
      .draft=${toolUIDraft}
      @agent-monitor-item:draft-change=${event => this.#handleMonitorAction(event, messageId, toolCallId, UI_UPDATE_TYPES.SAVE_WATCH_DRAFT)}
      @agent-monitor-item:submit=${event => this.#handleMonitorSubmit(event, messageId, toolCallId)}
      @agent-monitor-item:cancel=${event => this.#handleMonitorCancel(event, messageId, toolCallId)}
      @agent-monitor-item:delete=${event => this.#handleMonitorAction(event, messageId, toolCallId, UI_UPDATE_TYPES.DELETE_WATCH)}
      @agent-monitor-item:pause=${event => this.#handleMonitorAction(event, messageId, toolCallId, UI_UPDATE_TYPES.PAUSE_WATCH)}
      @agent-monitor-item:check-now=${event => this.#handleMonitorAction(event, messageId, toolCallId, UI_UPDATE_TYPES.CHECK_WATCH)}
    ></agent-monitor-item>`;
  }
  #handleTabGroupActionSubmit = (event, messageId, toolCallId, updateType) => {
    this.#dispatchToolUIUpdate({
      messageId,
      toolCallId,
      updateType,
      updateData: event.detail
    });
  };
  #renderTabGroupConfirmation(msg) {
    const toolUIData = msg.toolUIData;
    const actionType = toolUIData.properties?.actionType || "group_tabs";
    const {
      confirmActionL10n,
      updateType
    } = TAB_GROUP_ACTION_CONFIG[actionType] ?? TAB_GROUP_ACTION_CONFIG.group_tabs;
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <ai-website-confirmation
        .tabs=${toolUIData.properties?.tabs || []}
        .tabGroupLabel=${toolUIData.properties?.tabGroupLabel}
        .confirmActionL10n=${confirmActionL10n}
        .actionType=${actionType}
        @ai-website-confirmation:submit=${event => this.#handleTabGroupActionSubmit(event, msg.messageId, toolUIData.toolCallId, updateType)}
        @ai-website-confirmation:close=${event => this.#handleConfirmationClose(event, msg.messageId, toolUIData.toolCallId)}
      ></ai-website-confirmation>
    `;
  }
  #renderWebsiteConfirmation(msg) {
    const toolUIData = msg.toolUIData;
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <ai-website-confirmation
        .tabs=${toolUIData.properties?.tabs || []}
        .confirmActionL10n=${{
      disabled: "smart-window-confirm-close-tab",
      enabled: "smart-window-confirm-close-tabs"
    }}
        .actionType=${"close_tabs"}
        @ai-website-confirmation:submit=${event => this.#handleConfirmationSubmit(event, msg.messageId, toolUIData.toolCallId)}
        @ai-website-confirmation:close=${event => this.#handleConfirmationClose(event, msg.messageId, toolUIData.toolCallId)}
      ></ai-website-confirmation>
    `;
  }
  #renderActionResult(msg) {
    const {
      messageId,
      toolUIData
    } = msg;
    // Extract the confirmed selections and operation data
    const confirmedData = toolUIData.properties?.confirmedData || {};
    const wasRestored = confirmedData.wasRestored || false;
    const actionType = confirmedData.actionType;
    if (!actionType) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing;
    }

    // Get the data object for the action result component
    const actionResultData = this.#getActionResultData(confirmedData, wasRestored);
    const undoOperationIds = confirmedData.operationIds ?? [];
    const undoUpdateType = ACTION_TYPE_TO_UNDO_UPDATE_TYPE[actionType];

    // Undo needs both something to undo (recorded operation ids) and a way
    // to undo it (an update type registered for this action type - e.g.
    // open_tabs has none, so it's never undoable regardless of ids).
    let canUndo = !wasRestored && !!undoOperationIds.length && !!undoUpdateType;
    // Override can undo if explicitly dismissed
    if (toolUIData.properties?.undoDismissed) {
      canUndo = false;
    }
    const onUndo = canUndo && undoUpdateType ? () => this.#dispatchToolUIUpdate({
      messageId,
      toolCallId: toolUIData.toolCallId,
      updateType: undoUpdateType,
      updateData: {
        operationIds: undoOperationIds,
        selectedTabs: confirmedData.selectedTabs || [],
        actionTimestamp: confirmedData.actionTimestamp
      }
    }) : undefined;
    const tabs = this.#getConfirmationTabs(confirmedData, wasRestored);
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <ai-action-confirmation
        .labelL10nId=${actionResultData.labelL10nId}
        .labelL10nArgs=${actionResultData.labelL10nArgs}
        .tabs=${tabs}
        .canUndo=${canUndo}
        .isExpanded=${this.#actionResultExpandState.get(messageId) ?? false}
        @action-confirmation-toggle=${e => this.#actionResultExpandState.set(messageId, e.detail.isExpanded)}
        @action-confirmation-undo=${onUndo}
      ></ai-action-confirmation>
    `;
  }

  /**
   * Build the list of affected tabs.
   *
   * @param {object} confirmedData - The confirmed action data
   * @param {boolean} wasRestored - Whether the action has been undone
   * @returns {Array<TabSelectionData>}
   */
  #getConfirmationTabs(confirmedData, wasRestored) {
    let sourceTabs = confirmedData.originalClosedTabs;
    if (!wasRestored) {
      sourceTabs = confirmedData.selectedTabs;
    } else if (confirmedData.actionType === "group_tabs") {
      sourceTabs = confirmedData.originalGroupedTabs;
    }
    return (sourceTabs ?? []).map(tab => ({
      url: tab.url,
      title: tab.title,
      iconSrc: tab.iconSrc || (tab.url ? `page-icon:${tab.url}` : "")
    }));
  }
  #renderCancelledComponent() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div data-l10n-id="smart-window-cancelled-label"></div>`;
  }
  #renderRetryComponent(msg) {
    const cancelledUiType = msg.toolUIData?.properties?.cancelledUiType;
    const retryL10nId = RETRY_MESSAGE_L10N_MAP[cancelledUiType] || "smartwindow-nl-retry-message";
    const toolUIData = msg.toolUIData;
    const originalPrompt = toolUIData.properties?.originalUserPrompt || "";
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <div>
        <p data-l10n-id=${retryL10nId}></p>
        <moz-button
          class="tool-retry-button"
          @click=${() => this.#handleRetryClick(msg.messageId, toolUIData.toolCallId, originalPrompt)}
          data-l10n-id="smartwindow-nl-retry-tool-button"
        ></moz-button>
      </div>
    `;
  }
  #handleRetryClick = (messageId, toolCallId, originalPrompt) => {
    this.#dispatchToolUIUpdate({
      messageId,
      toolCallId,
      updateType: UI_UPDATE_TYPES.RETRY_PROMPT,
      updateData: {
        prompt: originalPrompt
      }
    });
  };
  #dispatchToolUIUpdate(data) {
    this.dispatchEvent(new CustomEvent("AIChatContent:ToolUIUpdate", {
      bubbles: true,
      composed: true,
      detail: data
    }));
  }
  #renderMessage(msg, chips) {
    if (!msg) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing;
    }

    // Check if this is a retry component that should be rendered at the top
    const isRetryComponent = msg.toolUIData?.uiType === UI_TYPES.RETRY_COMPONENT;
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div class=${`chat-bubble chat-bubble-${msg.role}`}>
      ${chips?.length ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<website-chip-container
            class="chat-bubble-chips"
            shouldGroupChips
            .websites=${chips}
          ></website-chip-container>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
      <div class="chat-bubble-inner">
        ${msg.role === "assistant" && isRetryComponent ? this.#renderToolUI(msg) : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
        <ai-chat-message
          .message=${msg.body}
          .messageL10n=${msg.messageL10n}
          .role=${msg.role}
          .messageId=${msg.messageId}
          .complete=${msg.role === "assistant" && !!msg.isLastChunk}
          .conversationId=${this.conversationId}
          .seenUrls=${this.seenUrls}
          .historyResults=${msg.historyResultsMap}
        ></ai-chat-message>
        ${msg.role === "assistant" && msg.toolUIData && !isRetryComponent ? this.#renderToolUI(msg) : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
        ${msg.role === "assistant" && msg.isLastChunk && msg.citations?.length ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<chat-assistant-citations
              .citations=${msg.citations}
            ></chat-assistant-citations>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
        ${msg.role === "assistant" && msg.isLastChunk ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
              <assistant-message-footer
                .messageId=${msg.messageId}
                .appliedMemories=${msg.appliedMemories}
                .showCallout=${msg.showCallout}
              ></assistant-message-footer>
            ` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
      </div>
    </div>`;
  }
  #renderFollowUpSuggestions() {
    if (!this.followUpSuggestions?.length) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<smartwindow-prompts
      .prompts=${this.followUpSuggestions.map(text => ({
      text,
      type: "followup"
    }))}
      mode="followup"
    ></smartwindow-prompts>`;
  }
  #renderLoader(suppress) {
    // The spinner is suppressed while an action log is processing (its animated
    // label already communicates progress) and once the reply is streaming (its
    // text is already visible). It only shows while waiting with nothing else on
    // screen yet.
    if (!this.assistantIsLoading || suppress) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<chat-assistant-loader
      .mode=${this.isSearching ? "search" : "default"}
    ></chat-assistant-loader>`;
  }
  #renderError() {
    if (!this.errorObj) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<chat-assistant-error
      .error=${this.errorObj}
    ></chat-assistant-error>`;
  }

  /**
   * Build the render list one turn at a time.
   *
   * The model creates an empty assistant placeholder before tools run so by
   * ordinal the assistant has a lower index than the toolcall messages it produces.
   * We buffer per turn so action log UI render above the assistant reply,
   * flipping that ordinal order for display
   *
   * @return {Array<{ type: string, msg: object, contextPageUrl?: string }>}
   */
  #buildTurnRenderItems() {
    const items = [];
    let lastContextPageUrl;
    let pendingActionLogs = [];
    let pendingAssistantMessage = null;
    let pendingAssistantContextUrl;

    // Commit the current turn's buffered action logs and assistant reply into
    // items. Action log render above the assistant message
    //
    // isComplete marks whether the turn has finished
    const appendPendingAssistantTurn = isComplete => {
      if (!pendingActionLogs.length && !pendingAssistantMessage) {
        return;
      }

      // Emit one grouped action-log item per turn carrying all the tool
      // messages of that turn. The renderer collapses them into a single
      // <ai-action-result> with one row per tool.
      if (pendingActionLogs.length) {
        items.push({
          type: "action-log",
          msgs: pendingActionLogs,
          isComplete
        });
      }
      if (pendingAssistantMessage) {
        items.push({
          type: "message",
          msg: pendingAssistantMessage,
          contextPageUrl: pendingAssistantContextUrl
        });
      }
      pendingActionLogs = [];
      pendingAssistantMessage = null;
      pendingAssistantContextUrl = undefined;
    };
    for (const msg of this.conversationState) {
      if (!msg) {
        continue;
      }

      // Hold tool UI messages for the current turn
      if (msg.uiType === UI_TYPES.ACTION_LOG) {
        pendingActionLogs.push(msg);
        continue;
      }

      // Hold the assistant reply
      // If a previous assistant is still pending, commit it first, so it isn't dropped
      if (msg.role === "assistant") {
        if (pendingAssistantMessage) {
          appendPendingAssistantTurn(true);
        }
        pendingAssistantMessage = msg;
        pendingAssistantContextUrl = lastContextPageUrl;
        continue;
      }

      // A user or any other role ends the previous turn. Commit first then push.
      appendPendingAssistantTurn(true);

      // Capture the previous context URL for this message's duplicate-chip check,
      // then update lastContextPageUrl for subsequent messages.
      const contextPageUrl = lastContextPageUrl;
      if (msg.role === "user") {
        lastContextPageUrl = msg.pageUrl;
      }
      items.push({
        type: "message",
        msg,
        contextPageUrl
      });
    }

    // Commit anything still pending at end of loop. The action log is finished
    // once the turn's reply starts streaming (its tools are done by then) or the
    // whole turn completes, so it doesn't keep shimmering through response
    // generation.
    const replyStarted = !!pendingAssistantMessage?.body;
    appendPendingAssistantTurn(!this.assistantIsLoading || replyStarted);
    return items;
  }

  /**
   * Collect the per-tool rows for the grouped action log card
   *
   * @param {Array<object>} toolMsgs
   * @returns {Array<{ labelL10nId?: string, labelL10nArgs?: object, label?: string, items: Array }>}
   */
  #buildGroupedActionLogRows(toolMsgs) {
    return toolMsgs.map(msg => msg.row).filter(Boolean);
  }
  #renderMessages(items) {
    return items.map((item, i) => {
      const {
        type,
        msgs,
        msg,
        isComplete,
        contextPageUrl
      } = item;
      if (type === "action-log") {
        return this.#renderActionLogGroup(msgs, isComplete, i);
      }
      const chips = this.#getVisibleChips(msg, contextPageUrl);
      return this.#renderMessage(msg, chips);
    });
  }
  render() {
    const renderItems = this.#buildTurnRenderItems();
    const actionLogInProgress = renderItems.some(item => item.type === "action-log" && item.isComplete === false);
    // Once the reply is streaming, its text is already visible, so the spinner
    // isn't needed (and shouldn't reappear now that the action log completes as
    // soon as the reply starts).
    const lastItem = renderItems.at(-1);
    const replyStreaming = lastItem?.type === "message" && lastItem.msg?.role === "assistant" && !!lastItem.msg?.body;
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_ai_chat_content_ai_chat_content_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <div class="chat-content-wrapper" tabindex="-1">
        <div class="chat-inner-wrapper">
          ${this.#renderMessages(renderItems)}
          ${this.#renderFollowUpSuggestions()}
          ${this.#renderLoader(actionLogInProgress || replyStreaming)}
          ${this.#renderError()}
        </div>
      </div>
      <div class="fullpage-top-blur"></div>
      <div class="fullpage-top-scrim"></div>
      <kit-mention variant="sidebar"></kit-mention>
      <div
        class="assistant-response-announcer"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        ${this.assistantResponseAnnouncement}
      </div>
      <moz-button
        class="jump-to-bottom-button"
        data-l10n-id="aiwindow-jump-to-bottom"
        data-l10n-attrs="aria-label,tooltiptext"
        iconsrc="chrome://global/skin/icons/shaft-arrow-down.svg"
        disabled
        type="ghost icon"
      ></moz-button>
    `;
  }
}
customElements.define("ai-chat-content", AIChatContent);

/***/ }),

/***/ 76055:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assistant-message-footer.f2fd37e0b4a7e547621a.css";

/***/ }),

/***/ 76150:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-label.af54a5f841ff0af78b0d.css";

/***/ }),

/***/ 79240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozButton)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_button_moz_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30082);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);
/* harmony import */ var chrome_global_content_elements_moz_label_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26284);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



window.MozXULElement?.insertFTLIfNeeded("toolkit/global/mozButton.ftl");

// eslint-disable-next-line import/no-unassigned-import


/**
 * Controls moz-button behavior when menuId property is set.
 * Helps to integrate moz-button with panel-list.
 */
class MenuController {
  /** @type {MozButton} */
  host;

  /** @type {string | null} */
  #menuId;

  /** @type {HTMLElement | null} */
  #menuEl;

  /** @type {boolean} */
  #hostIsSplitButton;

  /**
   * @param {MozButton} host
   */
  constructor(host) {
    this.host = host;
    host.addController(this);
  }
  hostConnected() {
    this.hostUpdated();
  }
  hostDisconnected() {
    this.removePanelListListeners();
    this.#menuId = null;
    this.#menuEl = null;
  }
  hostUpdated() {
    let hostMenuId = this.host.menuId;
    let hostIsSplitButton = this.host.isSplitButton;
    if (this.#menuId === hostMenuId && this.#hostIsSplitButton === hostIsSplitButton) {
      return;
    }
    if (this.#menuEl?.localName == "panel-list") {
      this.panelListCleanUp();
    }
    this.#menuId = hostMenuId;
    this.#hostIsSplitButton = hostIsSplitButton;

    // Check to see if a menuId has been added to host, or changed
    if (this.#menuId) {
      this.#menuEl = this.getPanelList();
      if (this.#menuEl?.localName == "panel-list") {
        this.panelListSetUp();
      }
    }

    // Check to see if menuId has been removed from host
    if (!this.#menuId) {
      this.#menuEl = null;
      this.host.removeController(this);
    }
  }

  /**
   * Retrieves the panel-list element matching the host's menuId.
   *
   * @returns {HTMLElement | null}
   */
  getPanelList() {
    let root = this.host.getRootNode();
    let menuEl = null;
    while (root) {
      menuEl = root.querySelector?.(`#${this.#menuId}`);
      if (menuEl) {
        break;
      }
      if (root instanceof ShadowRoot) {
        root = root.host?.getRootNode();
      } else {
        break;
      }
    }
    return menuEl;
  }

  /**
   * Handles opening/closing the panel-list when the host is clicked or activated via keyboard.
   *
   * @param {MouseEvent|KeyboardEvent} event
   */
  openPanelList = event => {
    if (event.type == "click") {
      event.preventDefault();
    }
    if (event.type == "mousedown" && event.button == 0 || event.inputSource == MouseEvent.MOZ_SOURCE_KEYBOARD || !event.detail) {
      if (this.#hostIsSplitButton) {
        this.#menuEl?.toggle(event, this.host.chevronButtonEl);
      } else {
        this.#menuEl?.toggle(event, this.host);
      }
    }
  };

  /**
   * Listener for shown/hidden that keeps the host's open attribute up to date.
   *
   * @param {CustomEvent} event
   *   The shown or hidden event.
   */
  #updateOpenAttr = event => {
    if (event.type == "shown") {
      this.host.toggleAttribute("open", true);
    } else if (event.type == "hidden") {
      this.host.removeAttribute("open");
    }
  };

  /**
   * Removes event listeners related to panel-list.
   */
  removePanelListListeners() {
    if (this.#hostIsSplitButton) {
      this.host.chevronButtonEl?.removeEventListener("click", this.openPanelList);
      this.host.chevronButtonEl?.removeEventListener("mousedown", this.openPanelList);
    } else {
      this.host.removeEventListener("click", this.openPanelList);
      this.host.removeEventListener("mousedown", this.openPanelList);
    }
    this.#menuEl?.removeEventListener("shown", this.#updateOpenAttr);
    this.#menuEl?.removeEventListener("hidden", this.#updateOpenAttr);
  }

  /**
   * Sets up the host for integration with panel-list,
   * adding necessary event listeners and ARIA attributes.
   */
  panelListSetUp() {
    if (this.#hostIsSplitButton) {
      this.host.chevronButtonEl?.addEventListener("click", this.openPanelList);
      this.host.chevronButtonEl?.addEventListener("mousedown", this.openPanelList);
    } else {
      this.host.addEventListener("click", this.openPanelList);
      this.host.addEventListener("mousedown", this.openPanelList);
    }
    this.#menuEl.addEventListener("shown", this.#updateOpenAttr);
    this.#menuEl.addEventListener("hidden", this.#updateOpenAttr);
    this.host.ariaHasPopup = "menu";
    this.host.ariaExpanded = this.#menuEl.open ? "true" : "false";
    this.host.toggleAttribute("open", this.#menuEl.open);
    let triggerEl = this.#hostIsSplitButton ? this.host.chevronButtonEl : this.host.buttonEl;
    if (triggerEl) {
      triggerEl.popoverTargetElement = this.#menuEl;
    }
  }

  /**
   * Cleans up panel-list integration,
   * removing event listeners and clearing ARIA attributes.
   */
  panelListCleanUp() {
    this.removePanelListListeners();
    this.host.ariaHasPopup = null;
    this.host.ariaExpanded = null;
    this.host.removeAttribute("open");
    let triggerEl = this.#hostIsSplitButton ? this.host.chevronButtonEl : this.host.buttonEl;
    if (triggerEl) {
      triggerEl.popoverTargetElement = null;
    }
  }
}

/**
 * A button with multiple types and three sizes.
 *
 * @tagname moz-button
 * @property {string} label - The button's label, will be overridden by slotted content.
 * @property {string} type - The button type.
 *   Options: default, primary, destructive, icon, icon ghost, ghost.
 * @property {string} size - The button size.
 *   Options: default, small, large.
 * @property {boolean} disabled - The disabled state.
 * @property {string} title - The button's title attribute, used in shadow DOM and therefore not as an attribute on moz-button.
 * @property {string} titleAttribute - Internal, map title attribute to the title JS property.
 * @property {string} tooltipText - Set the title property, the title attribute will be used first.
 * @property {string} ariaLabel - The button's aria-label attribute, used in shadow DOM and therefore not as an attribute on moz-button.
 * @property {string} ariaHasPopup - The button's aria-haspopup attribute, that indicates that a popup element can be triggered by the button.
 * @property {string} ariaExpanded - The button's aria-expanded attribute, that indicates whether or not the controlled elements are displayed or hidden.
 * @property {string} ariaPressed - The button's aria-pressed attribute, used in shadow DOM and therefore not as an attribute on moz-button.
 * @property {string} iconSrc - Path to the icon that should be displayed in the button.
 * @property {string} ariaLabelAttribute - Internal, map aria-label attribute to the ariaLabel JS property.
 * @property {string} ariaHasPopupAttribute - Internal, map aria-haspopup attribute to the ariaHasPopup JS property.
 * @property {string} ariaExpandedAttribute - Internal, map aria-expanded attribute to the ariaExpanded JS property.
 * @property {string} ariaPressedAttribute - Internal, map aria-pressed attribute to the ariaPressed JS property.
 * @property {string} hasVisibleLabel - Internal, tracks whether or not the button has a visible label.
 * @property {boolean} attention - Show a dot notification on the button if true.
 * @property {boolean} parentDisabled - When the parent of this component is disabled.
 * @property {string} iconPosition - The icon's position relative to the button label.
 *   Options: start, end.
 * @property {string} menuId - A CSS selector string that identifies the associated menu element controlled by the button.
 * @property {HTMLButtonElement} buttonEl - The internal button element in the shadow DOM.
 * @property {HTMLButtonElement} slotEl - The internal slot element in the shadow DOM.
 * @cssproperty [--button-outer-padding-inline] - Used to set the outer inline padding of toolbar style buttons
 * @cssproperty [--button-outer-padding-block] - Used to set the outer block padding of toolbar style buttons.
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
    ariaHasPopup: {
      type: String,
      mapped: true
    },
    ariaExpanded: {
      type: String,
      mapped: true
    },
    ariaPressed: {
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
      mapped: true
    },
    attention: {
      type: Boolean
    },
    iconPosition: {
      type: String,
      reflect: true
    },
    menuId: {
      type: String,
      reflect: true
    },
    parentDisabled: {
      type: Boolean
    }
  };
  static queries = {
    buttonEl: "#main-button",
    chevronButtonEl: "#chevron-button",
    slotEl: "slot",
    backgroundEl: "#main-button .button-background"
  };
  constructor() {
    super();
    this.type = "default";
    this.size = "default";
    this.disabled = false;
    this.hasVisibleLabel = !!this.label;
    this.attention = false;
    this.iconPosition = "start";
    this.menuId = "";
    this.parentDisabled = undefined;
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("menuId")) {
      if (this.menuId && !this._menuController) {
        this._menuController = new MenuController(this);
      }
      if (!this.menuId && this._menuController) {
        this._menuController = null;
      }
    }
  }
  get isSplitButton() {
    return this.type === "split";
  }

  // Delegate clicks on host to the button element.
  click() {
    this.performUpdate();
    this.buttonEl?.click();
  }
  checkForLabelText() {
    this.hasVisibleLabel = this.slotEl?.assignedNodes().some(node => node.textContent.trim());
  }
  labelTemplate() {
    if (this.label) {
      return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span class="text" .textContent=${this.label}></span>`;
    }
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<slot @slotchange=${this.checkForLabelText}></slot>`;
  }
  iconTemplate(position) {
    if (this.iconSrc && position == this.iconPosition) {
      return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<img src=${this.iconSrc} role="presentation" />`;
    }
    return null;
  }
  chevronButtonTemplate() {
    if (this.isSplitButton) {
      return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<button
        id="chevron-button"
        size=${this.size}
        ?disabled=${this.disabled || this.parentDisabled}
        data-l10n-id="moz-button-more-options"
        aria-labelledby="main-button chevron-button"
        aria-expanded=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.ariaExpanded)}
        aria-haspopup=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.ariaHasPopup)}
        @click=${e => e.stopPropagation()}
        @mousedown=${e => e.stopPropagation()}
      >
        <span
          class="button-background"
          part="chevron-button"
          type=${this.type}
          size=${this.size}
        >
          <img
            src="chrome://global/skin/icons/arrow-down${this.size === "small" ? "-12" : ""}.svg"
            role="presentation"
          />
        </span>
      </button>`;
    }
    return null;
  }
  render() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_button_moz_button_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <button
        id="main-button"
        ?disabled=${this.disabled || this.parentDisabled}
        title=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.title || this.tooltipText)}
        aria-label=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.ariaLabel)}
        aria-expanded=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.isSplitButton ? undefined : this.ariaExpanded)}
        aria-haspopup=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.isSplitButton ? undefined : this.ariaHasPopup)}
        aria-pressed=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.ariaPressed)}
        accesskey=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.accessKey)}
      >
        <span
          class=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.classMap)({
      labelled: this.label || this.hasVisibleLabel,
      "button-background": true,
      badged: (this.iconSrc || this.type.includes("icon")) && this.attention
    })}
          part="button"
          type=${this.type}
          size=${this.size}
        >
          ${this.iconTemplate("start")}
          <label
            is="moz-label"
            shownaccesskey=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.accessKey)}
            part="moz-button-label"
          >
            ${this.labelTemplate()}
          </label>
          ${this.iconTemplate("end")}
        </span>
      </button>
      ${this.chevronButtonTemplate()}
    `;
  }
}
customElements.define("moz-button", MozButton);

/***/ }),

/***/ 83222:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "kit-mention.152e8c9ebfe4d09683e9.css";

/***/ }),

/***/ 86360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AgentMonitorItem: () => (/* binding */ AgentMonitorItem)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_agent_monitor_item_agent_monitor_item_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32984);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);
/* harmony import */ var chrome_global_content_elements_moz_input_text_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65944);
/* harmony import */ var chrome_global_content_elements_moz_input_url_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24920);
/* harmony import */ var chrome_global_content_elements_moz_textarea_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27912);
/* harmony import */ var chrome_global_content_elements_moz_select_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62776);
/* harmony import */ var chrome_global_content_elements_moz_button_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79240);
/* harmony import */ var chrome_browser_content_aiwindow_components_monitor_icon_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(58132);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

const SCHEDULE_TYPES = Object.freeze({
  DAILY: "daily",
  WEEKLY: "weekly"
});
const SCHEDULE_ICON = "chrome://browser/skin/calendar-24.svg";
const TIME_ICON = "chrome://browser/skin/history-20.svg";
const MAX_WATCH_URLS = 5;

// How long to coalesce typing before mirroring the form to the host
const DRAFT_PERSIST_DELAY_MS = 250;

// Check times offered by the create card in 30-minute increments
const TIME_OPTIONS = Array.from({
  length: 48
}, (_, i) => {
  const hour24 = Math.floor(i / 2);
  const minute = i % 2 ? 30 : 0;

  // Create a date object with the specific time for localization
  const timeDate = new Date();
  timeDate.setHours(hour24, minute, 0, 0);

  // Use toLocaleTimeString for locale-appropriate formatting
  const label = timeDate.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  });
  return {
    value: `${String(hour24).padStart(2, "0")}:${String(minute).padStart(2, "0")}`,
    label
  };
});

// Indexed by the weekday values used by the scheduler (0 = Sunday)
const WEEKDAYS = [{
  value: 0,
  ftlId: "ai-tasks-alert-weekday-sunday"
}, {
  value: 1,
  ftlId: "ai-tasks-alert-weekday-monday"
}, {
  value: 2,
  ftlId: "ai-tasks-alert-weekday-tuesday"
}, {
  value: 3,
  ftlId: "ai-tasks-alert-weekday-wednesday"
}, {
  value: 4,
  ftlId: "ai-tasks-alert-weekday-thursday"
}, {
  value: 5,
  ftlId: "ai-tasks-alert-weekday-friday"
}, {
  value: 6,
  ftlId: "ai-tasks-alert-weekday-saturday"
}];

/**
 * A single monitor card:
 * It has three modes and is host-agnostic - monitor data comes
 * in via the 'agent' property and every action is a bubbling CustomEvent for
 * the host to handle. The host also decides the collapse affordance (chat uses
 * the chevron; the page can click-to-expand), so the component only exposes
 * 'expanded'/'editing' state
 *
 * Modes:
 *  - "display": collapsed shows the head  with a chevron and
 *    expanded reveals the value, condition, actions and change history.
 *  - "create": the full form used when setting up a new monitor.
 *
 * Dispatches:
 *  - agent-monitor-item:toggle       detail: { expanded }
 *  - agent-monitor-item:edit-toggle  detail: { editing }
 *  - agent-monitor-item:submit       detail: { mode, id, monitorName, condition, watchUrls, schedule }
 *  - agent-monitor-item:draft-change detail: { draft: MonitorDraft|null }
 *  - agent-monitor-item:cancel
 *  - agent-monitor-item:delete       detail: { id }
 *  - agent-monitor-item:pause        detail: { id, paused }
 *  - agent-monitor-item:check-now    detail: { id }
 *  - agent-monitor-item:open         detail: { id, url }
 *
 * @property {Agent} agent - Monitor data:
 *  {
 *    id: string,
 *    monitorName: string,
 *    url: string,
 *    faviconText?: string,      // 1-2 char fallback favicon glyph
 *    faviconColor?: string,     // fallback favicon background
 *    value?: string,            // current value, e.g. "$278"
 *    valueMeta?: string,        // e.g. "checked 2:14 PM · was $299"
 *    condition?: string,        // e.g. "the price drops below $270"
 *    conditionPresets?: string[],
 *    status?: { label: string, kind?: "watching"|"paused" },
 *    cadence?: string,
 *    history?: Array<{ when: string, oldValue?: string, newValue?: string,
 *                      note?: string, flag?: string, low?: boolean }>,
 *  }
 * @property {?MonitorDraft} draft - In-progress form state to restore over the
 *  values seeded from 'agent'. The card only renders it, the host owns it:
 *  every edit is mirrored back out via 'agent-monitor-item:draft-change' so an
 *  unsubmitted form survives the card being torn down and rebuilt.
 *  {
 *    editing?: boolean,        // reopen the edit form the draft belongs to
 *    monitorName?: string,
 *    condition?: string,
 *    watchUrls?: string[],
 *    pendingUrl?: string,
 *    schedule?: { frequency: string, time: string, weekday: number },
 *  }
 * @property {"display"|"create"} mode - Which card layout to render
 * @property {boolean} expanded - Whether the display card is expanded
 * @property {boolean} editing - Whether the editable condition field is shown
 * @property {boolean} showLastResult - Whether to show the last check result chip (defaults to false)
 */
class AgentMonitorItem extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    agent: {
      type: Object
    },
    draft: {
      type: Object
    },
    mode: {
      type: String,
      reflect: true
    },
    expanded: {
      type: Boolean,
      reflect: true
    },
    editing: {
      type: Boolean,
      reflect: true
    },
    showLastResult: {
      type: Boolean
    },
    checkFrequency: {
      type: String,
      state: true
    },
    scheduleTime: {
      type: String,
      state: true
    },
    scheduleWeekday: {
      type: Number,
      state: true
    },
    alertDescription: {
      type: String,
      state: true
    },
    pageUrls: {
      type: Array,
      state: true
    },
    pendingUrl: {
      type: String,
      state: true
    },
    pendingUrlError: {
      type: String,
      state: true
    }
  };
  constructor() {
    super();
    this.agent = {};
    this.draft = null;
    this.mode = "display";
    this.expanded = false;
    this.editing = false;
    this.showLastResult = false;
    this.checkFrequency = SCHEDULE_TYPES.DAILY;
    this.scheduleTime = "09:00";
    this.scheduleWeekday = 1;
    this.alertDescription = "";
    this.pageUrls = [];
    this.pendingUrl = "";
    this.pendingUrlError = "";
    this.#draftName = null;
  }
  #draftName;
  #draftPersistTimer = null;
  willUpdate(changed) {
    if (changed.has("agent")) {
      this.#seedFromAgent();
    }
    if (changed.has("agent") || changed.has("draft")) {
      this.#applyDraft();
    }
  }
  disconnectedCallback() {
    if (this.#draftPersistTimer) {
      this.#flushDraft();
    }
    super.disconnectedCallback();
  }
  #seedFromAgent() {
    this.#draftName = null;
    const {
      watchUrls,
      url,
      condition,
      expanded
    } = this.agent ?? {};
    let seededUrls = [];
    if (watchUrls?.length) {
      seededUrls = watchUrls;
    } else if (url) {
      seededUrls = [url];
    }
    this.pageUrls = seededUrls.filter(u => u?.trim().length);
    this.alertDescription = condition ?? "";
    this.pendingUrl = "";
    this.pendingUrlError = "";

    // If the agent data includes an expanded state, apply it
    if (expanded !== undefined) {
      this.expanded = expanded;
    }

    // Seed the schedule fields from an existing monitor so edit mode reflects
    // its current scheduled
    const schedule = this.agent?.schedule;
    if (schedule) {
      this.checkFrequency = schedule.frequency ?? this.checkFrequency;
      this.scheduleTime = schedule.time ?? this.scheduleTime;
      this.scheduleWeekday = schedule.weekday ? Number(schedule.weekday) : this.scheduleWeekday;
    }
  }

  /**
   * Restores an unsubmitted form over the values seeded from 'agent'.
   */
  #applyDraft() {
    if (!this.draft) {
      return;
    }
    const {
      editing,
      monitorName,
      condition,
      watchUrls,
      pendingUrl,
      schedule
    } = this.draft;

    // A draft only outlives the card while an edit is unsubmitted, so reopen
    // the form the user was in the middle of. The edit affordances live in the
    // expanded body, so the card has to come back expanded to show them.
    if (editing) {
      this.editing = true;
      this.expanded = true;
    }
    if (monitorName !== undefined) {
      this.#draftName = monitorName;
    }
    if (condition !== undefined) {
      this.alertDescription = condition;
    }
    if (watchUrls) {
      this.pageUrls = [...watchUrls];
    }
    if (pendingUrl !== undefined) {
      this.pendingUrl = pendingUrl;
    }
    if (schedule?.frequency) {
      this.checkFrequency = schedule.frequency;
    }
    if (schedule?.time) {
      this.scheduleTime = schedule.time;
    }
    if (schedule?.weekday !== undefined) {
      this.scheduleWeekday = Number(schedule.weekday);
    }
  }

  /**
   * Mirrors the in-progress form out to the host.
   *
   * @param {object} [options]
   * @param {boolean} [options.debounce] - Coalesce rapid edits, for typing
   */
  #persistDraft({
    debounce = false
  } = {}) {
    if (this.mode !== "create" && !this.editing) {
      return;
    }
    this.#clearDraftTimer();
    if (!debounce) {
      this.#flushDraft();
      return;
    }
    this.#draftPersistTimer = setTimeout(() => this.#flushDraft(), DRAFT_PERSIST_DELAY_MS);
  }
  #flushDraft() {
    this.#clearDraftTimer();
    this.#dispatch("agent-monitor-item:draft-change", {
      draft: {
        editing: this.editing,
        monitorName: this.#monitorName,
        condition: this.alertDescription,
        watchUrls: [...this.pageUrls],
        pendingUrl: this.pendingUrl,
        schedule: {
          frequency: this.checkFrequency,
          time: this.scheduleTime,
          weekday: this.scheduleWeekday
        }
      }
    });
  }
  #discardDraft() {
    this.#clearDraftTimer();
    this.#dispatch("agent-monitor-item:draft-change", {
      draft: null
    });
  }
  #clearDraftTimer() {
    if (this.#draftPersistTimer) {
      clearTimeout(this.#draftPersistTimer);
      this.#draftPersistTimer = null;
    }
  }
  #dispatch(type, detail) {
    this.dispatchEvent(new CustomEvent(type, {
      detail,
      bubbles: true,
      composed: true
    }));
  }
  get #monitorName() {
    return this.#draftName ?? this.agent?.monitorName ?? "";
  }
  get #isFormValid() {
    const hasDescription = this.alertDescription?.trim().length > 0;
    const hasValidUrl = !!this.pageUrls.length;
    return hasDescription && hasValidUrl && !this.pendingUrlError;
  }
  #onNameInput(event) {
    this.#draftName = event.target.value;
    // Typing coalesces, a change (blur) flushes right away
    this.#persistDraft({
      debounce: event.type === "input"
    });
  }
  #onCardClick(e) {
    if (e.target.closest("button, moz-button")) {
      return;
    }
    this.#onToggle(e);
  }
  #onToggle() {
    this.expanded = !this.expanded;
    this.#dispatch("agent-monitor-item:toggle", {
      expanded: this.expanded
    });
  }
  #onEditToggle() {
    this.editing = !this.editing;
    // Opening the form is itself worth remembering, so an edit session that
    // hasn't been typed in yet survives too. Leaving discards the edit.
    if (this.editing) {
      this.#persistDraft();
    } else {
      this.#discardDraft();
    }
    this.#dispatch("agent-monitor-item:edit-toggle", {
      editing: this.editing
    });
  }
  #onConditionInput(event) {
    this.alertDescription = event.target.value;
    this.#persistDraft({
      debounce: event.type === "input"
    });
  }
  #onPresetClick(preset) {
    this.alertDescription = preset;
    this.#persistDraft();
  }

  // TODO: Bug 2054529 - share this URL validation with about:tools' create form
  async #validateUrl(url) {
    const value = url.trim();
    if (!value) {
      return {
        valid: true,
        error: ""
      };
    }
    try {
      const {
        protocol
      } = new URL(value);
      if (protocol !== "http:" && protocol !== "https:") {
        const error = await document.l10n.formatValue("ai-tasks-alert-error-http-only");
        return {
          valid: false,
          error
        };
      }
      return {
        valid: true,
        error: ""
      };
    } catch {
      const error = await document.l10n.formatValue("ai-tasks-alert-error-invalid-url");
      return {
        valid: false,
        error
      };
    }
  }
  async #validatePendingUrl() {
    this.pendingUrlError = this.pendingUrl.trim() ? (await this.#validateUrl(this.pendingUrl)).error : "";
  }
  async #addUrl() {
    const url = this.pendingUrl.trim();
    if (!url) {
      return;
    }
    const {
      valid,
      error
    } = await this.#validateUrl(url);
    if (!valid) {
      this.pendingUrlError = error;
      return;
    }
    if (this.pageUrls.includes(url)) {
      this.pendingUrlError = await document.l10n.formatValue("ai-tasks-alert-error-duplicate-url");
      return;
    }
    if (this.pageUrls.length >= MAX_WATCH_URLS) {
      this.pendingUrlError = await document.l10n.formatValue("ai-tasks-alert-error-max-urls", {
        count: MAX_WATCH_URLS
      });
      return;
    }
    this.pageUrls = [...this.pageUrls, url];
    this.pendingUrl = "";
    this.pendingUrlError = "";
    this.#persistDraft();
  }
  #removeUrl(url) {
    this.pageUrls = this.pageUrls.filter(u => u !== url);
    this.#persistDraft();
  }
  #displayUrl(url) {
    try {
      return new URL(url).hostname;
    } catch {
      return url;
    }
  }
  #onPendingUrlInput(event) {
    this.pendingUrl = event.target.value;
    this.#validatePendingUrl();
    this.#persistDraft({
      debounce: true
    });
  }
  #onPendingUrlKeydown(event) {
    if (event.key !== "Enter") {
      return;
    }
    event.preventDefault();
    this.#addUrl();
  }
  #onCancel() {
    // Cancelling drops the whole card, and with it the draft the host holds,
    // so this only has to stop a coalesced edit from landing after that
    this.#clearDraftTimer();
    this.#dispatch("agent-monitor-item:cancel", {});
  }
  #onSubmit() {
    if (!this.#isFormValid) {
      return;
    }
    // The host drops the draft as it commits the form, so make sure a coalesced
    // edit can't land after that and resurrect it
    this.#clearDraftTimer();
    const isCreateMode = this.mode === "create";
    this.#dispatch("agent-monitor-item:submit", {
      mode: this.mode,
      id: this.agent?.id,
      monitorName: this.#monitorName,
      condition: this.alertDescription.trim(),
      watchUrls: [...this.pageUrls],
      schedule: {
        frequency: this.checkFrequency,
        time: this.scheduleTime,
        weekday: this.scheduleWeekday
      },
      autoExpandAndCheck: isCreateMode // Signal to expand and check after creation
    });
    // Exit edit mode after saving
    if (this.editing) {
      this.editing = false;
      this.#dispatch("agent-monitor-item:edit-toggle", {
        editing: false
      });
    }
  }
  #renderStatusChip() {
    const statusInfo = this.agent?.status;
    if (!statusInfo?.kind) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing;
    }
    const l10nId = statusInfo.kind === "watching" ? "ai-tasks-alert-status-watching" : "ai-tasks-alert-status-paused";
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <span
        class="status-chip ${statusInfo.kind}"
        data-kind=${statusInfo.kind}
        data-l10n-id=${l10nId}
      >
      </span>
    `;
  }
  #renderLastCheckedCondition() {
    // Get the most recent history item (first in array) to show its condition status
    const historyItems = this.agent?.history ?? [];
    const mostRecentItem = historyItems.length ? historyItems[0] : null;
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      ${mostRecentItem && mostRecentItem.conditionMet !== undefined ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span
            class="status-chip"
            data-l10n-id=${mostRecentItem.conditionMet ? "ai-tasks-alert-last-result-met" : "ai-tasks-alert-last-result-not-met"}
          ></span>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
    `;
  }
  #renderConditionField() {
    const presets = this.agent?.conditionPresets ?? [];
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <div class="field">
        <moz-textarea
          class="monitor-condition-input"
          data-l10n-id="ai-tasks-alert-alert"
          data-l10n-attrs="placeholder,label,description"
          .value=${this.alertDescription}
          @input=${this.#onConditionInput}
          @change=${this.#onConditionInput}
        ></moz-textarea>
        ${presets.length ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div class="chip-row">
              ${presets.map(preset => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<moz-button
                    class="chip ${preset === this.alertDescription ? "selected" : ""}"
                    label=${preset}
                    @click=${() => this.#onPresetClick(preset)}
                  ></moz-button>`)}
            </div>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
      </div>
    `;
  }
  #renderPagesField() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <div class="field">
        <div class="pages-container">
          <div class="page-input-row">
            <moz-input-url
              class="form-input page-url-input ${this.pendingUrlError ? "error" : ""}"
              data-l10n-id="ai-tasks-alert-pages"
              data-l10n-attrs="placeholder,label"
              data-l10n-args=${JSON.stringify({
      maxPages: MAX_WATCH_URLS
    })}
              .value=${this.pendingUrl}
              @input=${this.#onPendingUrlInput}
              @keydown=${this.#onPendingUrlKeydown}
              @blur=${() => this.#validatePendingUrl()}
            ></moz-input-url>
            <moz-button
              size="small"
              type="icon ghost"
              class="add-page-btn"
              iconsrc="chrome://global/skin/icons/plus.svg"
              data-l10n-id="ai-tasks-alert-add-url"
              data-l10n-attrs="aria-label"
              ?disabled=${this.pageUrls.length >= MAX_WATCH_URLS}
              @click=${() => this.#addUrl()}
            ></moz-button>
          </div>
          ${this.pendingUrlError ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div class="error-message">${this.pendingUrlError}</div>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
          ${this.pageUrls.length ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div class="page-pills-row">
                ${this.pageUrls.map(url => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span class="page-pill">
                      <span class="page-pill-url"
                        >${this.#displayUrl(url)}</span
                      >
                      <button
                        type="button"
                        class="page-pill-remove"
                        data-l10n-id="ai-tasks-alert-remove-page-label"
                        data-l10n-attrs="aria-label"
                        @click=${() => this.#removeUrl(url)}
                      ></button>
                    </span>`)}
              </div>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
        </div>
      </div>
    `;
  }
  #transformHistoryItem(item) {
    // Only process items with valid timestamps
    if (!item.checkedAt) {
      return null;
    }

    // Format the timestamp
    const date = new Date(item.checkedAt);
    const displayTime = date.toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric"
    }) + " - " + date.toLocaleTimeString(undefined, {
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    });

    // Handle error status
    if (item.status === "error") {
      return {
        when: displayTime,
        conditionMet: undefined,
        note: item.resultExplanation || "",
        noteL10nId: "smartwindow-agent-monitor-history-check-failed",
        status: item.status,
        low: true
      };
    }

    // Handle conditionMet cases
    if (item.conditionMet) {
      return {
        when: displayTime,
        conditionMet: true,
        note: item.resultExplanation || "",
        status: item.status,
        low: false
      };
    }

    // Handle condition not met
    return {
      when: displayTime,
      conditionMet: false,
      note: item.resultExplanation || "",
      noteL10nId: item.resultExplanation ? null : "smartwindow-agent-monitor-history-no-match",
      status: item.status,
      low: true
    };
  }
  #renderHistory() {
    const historyItems = this.agent?.history ?? [];
    if (!historyItems.length) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <div
        class="section-toggle"
        data-l10n-id="ai-tasks-alert-change-history"
      ></div>
      <div class="history">
        ${historyItems.map(item => {
      const normalizedItem = this.#transformHistoryItem(item);

      // Skip items without valid timestamps
      if (!normalizedItem) {
        return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing;
      }
      return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div class="history-item">
            <span class="when">${normalizedItem.when}</span>
            ${normalizedItem.conditionMet !== undefined ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span
                  class="condition-badge ${normalizedItem.conditionMet ? "met" : "not-met"}"
                  data-l10n-id=${normalizedItem.conditionMet ? "ai-tasks-alert-condition-met" : "ai-tasks-alert-condition-not-met"}
                ></span>` : (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span>-</span>`}
            ${(() => {
        if (normalizedItem.noteL10nId) {
          return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span
                  data-l10n-id=${normalizedItem.noteL10nId}
                ></span>`;
        }
        if (normalizedItem.note) {
          return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span>${normalizedItem.note}</span>`;
        }
        return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing;
      })()}
          </div>`;
    })}
      </div>
      <div class="history-note">
        <p data-l10n-id="ai-tasks-alert-change-history-description"></p>
      </div>
    `;
  }
  #onFrequencyChange(event) {
    this.checkFrequency = event.target.value;
    this.#persistDraft();
  }
  #onScheduleTimeChange(event) {
    this.scheduleTime = event.target.value;
    this.#persistDraft();
  }
  #onWeekdayChange(event) {
    this.scheduleWeekday = Number(event.target.value);
    this.#persistDraft();
  }
  #renderScheduleSummary() {
    const schedule = this.agent?.schedule;
    if (!schedule) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing;
    }

    // Convert HH:MM string to a Date object for Fluent formatting
    // Use a fixed date to ensure consistent formatting
    const [hours, minutes] = schedule.time.split(":").map(Number);
    const timeDate = new Date();
    timeDate.setHours(hours, minutes, 0, 0);
    if (schedule.frequency === SCHEDULE_TYPES.WEEKLY) {
      // Map weekday index to the specific Fluent string ID
      const weekdayFluent = ["ai-tasks-alert-schedule-weekly-sunday", "ai-tasks-alert-schedule-weekly-monday", "ai-tasks-alert-schedule-weekly-tuesday", "ai-tasks-alert-schedule-weekly-wednesday", "ai-tasks-alert-schedule-weekly-thursday", "ai-tasks-alert-schedule-weekly-friday", "ai-tasks-alert-schedule-weekly-saturday"];
      const fluentId = weekdayFluent[schedule.weekday];
      if (fluentId) {
        return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div class="monitor-row">
          <span
            class="val"
            data-l10n-id=${fluentId}
            data-l10n-args=${JSON.stringify({
          time: timeDate.getTime()
        })}
          ></span>
        </div>`;
      }
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <span
        class="val"
        data-l10n-id="ai-tasks-alert-schedule-daily-at"
        data-l10n-args=${JSON.stringify({
      time: timeDate.getTime()
    })}
      ></span>
    `;
  }
  #renderTimeField() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div class="form-section-half">
      <label
        class="form-label"
        data-l10n-id="ai-tasks-alert-time-label"
      ></label>
      <moz-select
        class="form-select"
        .value=${this.scheduleTime}
        @change=${this.#onScheduleTimeChange}
      >
        ${TIME_OPTIONS.map(opt => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<moz-option
              value=${opt.value}
              label=${opt.label}
              iconsrc=${TIME_ICON}
            ></moz-option>`)}
      </moz-select>
    </div>`;
  }
  #renderScheduler() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <div class="form-row">
        <div class="schedule-container">
          <div class="form-section-half">
            <label
              class="form-label"
              data-l10n-id="ai-tasks-alert-check-label"
            ></label>
            <moz-select
              class="form-select"
              .value=${this.checkFrequency}
              @change=${this.#onFrequencyChange}
            >
              <moz-option
                value=${SCHEDULE_TYPES.DAILY}
                data-l10n-id="ai-tasks-alert-schedule-daily"
                iconsrc=${SCHEDULE_ICON}
              ></moz-option>
              <moz-option
                value=${SCHEDULE_TYPES.WEEKLY}
                data-l10n-id="ai-tasks-alert-schedule-weekly"
                iconsrc=${SCHEDULE_ICON}
              ></moz-option>
            </moz-select>
          </div>
          ${this.checkFrequency === SCHEDULE_TYPES.WEEKLY ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div class="form-section-half">
                <label
                  class="form-label"
                  data-l10n-id="ai-tasks-alert-day-label"
                ></label>
                <moz-select
                  class="form-select"
                  value=${this.scheduleWeekday}
                  @change=${this.#onWeekdayChange}
                >
                  ${WEEKDAYS.map(day => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<moz-option
                        value=${day.value}
                        data-l10n-id=${day.ftlId}
                        iconsrc=${SCHEDULE_ICON}
                      ></moz-option>`)}
                </moz-select>
              </div>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
        </div>
        ${this.#renderTimeField()}
      </div>
    `;
  }
  #renderCreate() {
    const agent = this.agent ?? {};
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <div class="monitor-card">
        <div class="title-container">
          <monitor-icon size="small"></monitor-icon>
          <h2
            class="monitor-card-state-title"
            data-l10n-id="ai-tasks-alert-modal-title"
          ></h2>
        </div>
        <div class="monitor-card-head">
          <div class="monitor-name-field">
            <moz-input-text
              class="monitor-name-input"
              data-l10n-id="ai-tasks-alert-name"
              data-l10n-attrs="label"
              .value=${this.#monitorName}
              @input=${this.#onNameInput}
              @change=${this.#onNameInput}
            ></moz-input-text>
          </div>
        </div>
        ${agent.value ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div class="monitor-value">
              <span class="now">${agent.value}</span>
              ${agent.valueMeta ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span class="from">${agent.valueMeta}</span>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
            </div>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
        ${this.#renderConditionField()} ${this.#renderPagesField()}
        ${this.#renderScheduler()}

        <div class="monitor-card-actions">
          <span class="spacer"></span>
          <moz-button
            id="cancel-create-button"
            type="default"
            data-l10n-id="ai-tasks-alert-cancel-button"
            data-l10n-attrs="label"
            @click=${this.#onCancel}
          ></moz-button>
          <moz-button
            type="primary"
            data-l10n-id="ai-tasks-alert-create-button"
            data-l10n-attrs="label"
            @click=${this.#onSubmit}
          ></moz-button>
        </div>
      </div>
    `;
  }
  #renderDisplay() {
    const agent = this.agent ?? {};
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <div class="monitor-card chatcard" @click=${this.#onCardClick}>
        <div class="monitor-card-head">
          ${this.#renderStatusChip()}
          <span class="monitor-card-title"
            ><span class="monitor-card-name">${agent.monitorName}</span></span
          >
          <span class="spacer"></span>
          ${this.showLastResult ? this.#renderLastCheckedCondition() : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
          <button
            type="button"
            class="chev"
            aria-expanded=${this.expanded}
            data-l10n-id="ai-tasks-alert-show-details"
            data-l10n-attrs="aria-label"
            @click=${this.#onToggle}
          ></button>
        </div>
        ${this.expanded ? this.#renderExpand() : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
      </div>
    `;
  }
  #renderExpand() {
    const agent = this.agent ?? {};
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <div class="watch-expand" @click=${e => e.stopPropagation()}>
        ${agent.value ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div class="monitor-value">
              <span class="now">${agent.value}</span>
              ${agent.valueMeta ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span class="from">${agent.valueMeta}</span>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
            </div>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
        ${this.editing ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`${this.#renderConditionField()} ${this.#renderPagesField()}
            ${this.#renderScheduler()}` : (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div class="task-section">
                <div
                  class="task-header"
                  data-l10n-id="ai-tasks-alert-the-alert"
                ></div>
                <div class="task-content">${agent.condition}</div>
              </div>
              ${agent.watchUrls?.length ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div class="url-section">
                    <div
                      class="section-toggle"
                      data-l10n-id="ai-tasks-alert-on-this-page"
                    ></div>
                    <div class="url-chips">
                      ${agent.watchUrls.map(url => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span class="url-chip"
                            >${this.#displayUrl(url)}</span
                          >`)}
                    </div>
                  </div>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
              <div class="monitor-row">${this.#renderScheduleSummary()}</div>`}
        ${!this.editing ? this.#renderHistory() : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}

        <div class="monitor-card-actions">
          ${!this.editing ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<moz-button
                  id="edit-button"
                  type="default"
                  @click=${this.#onEditToggle}
                  data-l10n-id="ai-tasks-alert-edit-button"
                  data-l10n-attrs="label"
                ></moz-button>
                <moz-button
                  type="default"
                  @click=${() => {
      const isPaused = agent.status?.kind === "paused";
      this.#dispatch("agent-monitor-item:pause", {
        id: agent.id,
        paused: !isPaused
      });
    }}
                  data-l10n-id=${agent.status?.kind === "paused" ? "ai-tasks-alert-resume-button" : "ai-tasks-alert-pause-button"}
                  data-l10n-attrs="label"
                ></moz-button>
                <moz-button
                  type="default"
                  @click=${() => this.#dispatch("agent-monitor-item:check-now", {
      id: agent.id
    })}
                  data-l10n-id="ai-tasks-alert-check-now-button"
                  data-l10n-attrs="label"
                ></moz-button>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}

          <span class="spacer"></span>
          ${this.editing ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)` <moz-button
                  id="cancel-edit-button"
                  type="secondary"
                  @click=${this.#onEditToggle}
                  data-l10n-id="ai-tasks-alert-cancel-button"
                  data-l10n-attrs="label"
                ></moz-button
                ><moz-button
                  type="primary"
                  @click=${this.#onSubmit}
                  data-l10n-id="ai-tasks-alert-save-button"
                  data-l10n-attrs="label"
                ></moz-button>` : (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
                <moz-button
                  class="delete-button"
                  type="icon"
                  iconsrc="chrome://global/skin/icons/delete.svg"
                  data-l10n-id="ai-tasks-alert-delete-button"
                  data-l10n-attrs="aria-label"
                  @click=${() => this.#dispatch("agent-monitor-item:delete", {
      id: agent.id
    })}
                ></moz-button>
              `}
        </div>
      </div>
    `;
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_agent_monitor_item_agent_monitor_item_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      ${this.mode === "create" ? this.#renderCreate() : this.#renderDisplay()}
    `;
  }
}
customElements.define("agent-monitor-item", AgentMonitorItem);

/***/ }),

/***/ 91062:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ai-chat-content.063b9e874e6a23116bc1.css";

/***/ }),

/***/ 94751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Conversation: () => (/* binding */ Conversation),
/* harmony export */   Empty: () => (/* binding */ Empty),
/* harmony export */   SingleUserMessage: () => (/* binding */ SingleUserMessage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var chrome_browser_content_aiwindow_components_ai_chat_content_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75706);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/AI Window/AI Chat Content",
  component: "ai-chat-content",
  argTypes: {
    conversationState: {
      control: {
        type: "object"
      }
    }
  },
  parameters: {
    fluent: `
aiwindow-memories-used =
  .label = Memories used
aiwindow-retry-without-memories =
  .label = Retry without memories
aiwindow-retry =
  .tooltiptext = Retry
aiwindow-copy-message =
  .tooltiptext = Copy
    `
  }
});
const Template = ({
  conversationState
}) => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <ai-chat-content .conversationState=${conversationState}></ai-chat-content>
`;
const Empty = Template.bind({});
Empty.args = {
  conversationState: []
};
const SingleUserMessage = Template.bind({});
SingleUserMessage.args = {
  conversationState: [{
    role: "user",
    body: "What is the weather like today?"
  }]
};
const Conversation = Template.bind({});
Conversation.args = {
  conversationState: [{
    role: "user",
    body: "What is the weather like today?"
  }, {
    role: "assistant",
    messageId: "a1",
    body: "I don't have access to real-time weather data, but I can help you with other tasks!",
    appliedMemories: []
  }, {
    role: "user",
    body: "Can you help me with coding?"
  }, {
    role: "assistant",
    messageId: "a2",
    body: "Yes, I can help you with coding! What programming language or problem are you working on?",
    appliedMemories: ["Looking for help with coding", "Looking for real time weather data"]
  }]
};

/***/ }),

/***/ 95396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatAssistantCitations: () => (/* binding */ ChatAssistantCitations)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_ai_chat_content_chat_assistant_citations_chat_assistant_citations_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46616);
/* harmony import */ var browser_components_aiwindow_ui_components_smartwindow_overflow_row_smartwindow_overflow_row_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57822);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82242);
/* harmony import */ var chrome_browser_content_aiwindow_components_SmartwindowOverflowRow_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15768);
/* harmony import */ var chrome_global_content_elements_moz_button_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79240);
/* harmony import */ var chrome_browser_content_aiwindow_components_ai_website_chip_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6266);
/* harmony import */ var chrome_browser_content_aiwindow_components_smartwindow_panel_list_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55362);


/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import


/**
 * A citation source.
 *
 * @typedef {object} Citation
 * @property {string} url - Source URL
 * @property {string} [title] - Display title
 * @property {string} [faviconUrl] - Favicon URL
 * @property {boolean} [hasFavicon] - Whether we already have a favicon stored for this URL
 */

/**
 * Renders citation pills for an assistant chat message.
 *
 * @property {Citation[]} citations - The sources to display.
 */
class ChatAssistantCitations extends (0,chrome_browser_content_aiwindow_components_SmartwindowOverflowRow_mjs__WEBPACK_IMPORTED_MODULE_4__.SmartwindowOverflowRowMixin)(chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.MozLitElement) {
  static properties = {
    citations: {
      type: Array,
      attribute: false
    },
    isPanelOpen: {
      type: Boolean,
      state: true
    }
  };
  constructor() {
    super();
    this.citations = [];
    this.isPanelOpen = false;
  }

  /**
   * @returns {string} Selector for the citations row.
   */
  get overflowContainerSelector() {
    return ".citations";
  }

  /**
   * @returns {string} Selector for the “+n more” button.
   */
  get overflowTriggerSelector() {
    return ".citations-more";
  }

  /**
   * @returns {Citation[]} The items the row measures against.
   */
  get overflowItems() {
    return this.citations ?? [];
  }
  #panel() {
    return this.shadowRoot.querySelector("smartwindow-panel-list");
  }
  #onToggleClick(event) {
    const panel = this.#panel();
    if (panel) {
      panel.anchor = event.currentTarget;
      panel.toggle(event);
    }
  }
  #onPanelOpenLink() {
    this.#panel()?.hide();
  }
  #label(citation) {
    return citation.title || (URL.parse(citation.url)?.hostname ?? citation.url);
  }
  #titleText(citation) {
    return citation.title || citation.url;
  }
  #icon(citation) {
    if (citation.faviconUrl) {
      return citation.faviconUrl;
    }
    return citation.hasFavicon ? `page-icon:${citation.url}` : "chrome://global/skin/icons/defaultFavicon.svg";
  }
  #renderPill(citation, {
    itemRole,
    showTitle
  } = {}) {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<ai-website-chip
      type="context-chip"
      size="small"
      role=${itemRole ? "presentation" : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.nothing}
      .itemRole=${itemRole ?? ""}
      title=${showTitle ? this.#titleText(citation) : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.nothing}
      .label=${this.#label(citation)}
      .href=${citation.url}
      .iconSrc=${this.#icon(citation)}
    ></ai-website-chip>`;
  }
  render() {
    if (!this.citations?.length) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.nothing;
    }
    const visibleCount = Math.min(this.visibleCount, this.citations.length);
    const citationsOverflow = this.citations.slice(visibleCount);
    const hasOverflow = !!citationsOverflow.length;
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_smartwindow_overflow_row_smartwindow_overflow_row_css__WEBPACK_IMPORTED_MODULE_1__}"
      />
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_ai_chat_content_chat_assistant_citations_chat_assistant_citations_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <div class="citations smartwindow-overflow-row" role="list">
        ${this.citations.map((citation, index) => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<span role="listitem" ?data-overflow=${index >= visibleCount}
              >${this.#renderPill(citation, {
      showTitle: true
    })}</span
            >`)}
        <moz-button
          class="citations-more"
          type="ghost"
          ?data-overflow=${!hasOverflow}
          .ariaHasPopup=${"menu"}
          .ariaExpanded=${String(this.isPanelOpen)}
          data-l10n-id="smartwindow-assistant-citations-more-label"
          data-l10n-args=${JSON.stringify({
      count: citationsOverflow.length
    })}
          @click=${this.#onToggleClick}
        ></moz-button>
        ${hasOverflow ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<smartwindow-panel-list
              @shown=${() => this.isPanelOpen = true}
              @hidden=${() => this.isPanelOpen = false}
              @AIChatContent:OpenLink=${this.#onPanelOpenLink}
            >
              ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.repeat)(citationsOverflow, citation => citation.url, citation => this.#renderPill(citation, {
      itemRole: "menuitem"
    }))}
            </smartwindow-panel-list>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.nothing}
      </div>
    `;
  }
}
customElements.define("chat-assistant-citations", ChatAssistantCitations);

/***/ }),

/***/ 98102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozBoxItem)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_box_item_moz_box_item_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70020);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);
/* harmony import */ var chrome_global_content_elements_moz_box_group_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30160);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




window.MozXULElement?.insertFTLIfNeeded("toolkit/global/mozBoxBase.ftl");
const DIRECTION_RIGHT = "Right";
const DIRECTION_LEFT = "Left";
const NAVIGATION_DIRECTIONS = {
  LTR: {
    FORWARD: DIRECTION_RIGHT,
    BACKWARD: DIRECTION_LEFT
  },
  RTL: {
    FORWARD: DIRECTION_LEFT,
    BACKWARD: DIRECTION_RIGHT
  }
};
const NAVIGATION_FORWARD = "forward";
const NAVIGATION_BACKWARD = "backward";
const NAVIGATION_VALUE = {
  [NAVIGATION_FORWARD]: 1,
  [NAVIGATION_BACKWARD]: -1
};

/**
 * A custom element used for highlighting important information and/or providing
 * context for specific settings.
 *
 * @tagname moz-box-item
 * @property {string} label - Label for the button.
 * @property {string} description - Descriptive text for the button.
 * @property {string} iconSrc - The src for an optional icon shown next to the label.
 * @property {string} supportPage - The name of the SUMO support page to link to.
 * @property {"default"|"medium-icon"|"large-icon"} layout - Layout style for the box content.
 * @slot default - Slot for the box item's content, which overrides label and description.
 * @slot support-link - Slot for custom support link element.
 * @slot description - Slot for custom description content.
 * @slot actions - Slot for the actions positioned at the end of the component container.
 * @slot actions-start - Slot for the actions positioned at the start of the component container.
 */
class MozBoxItem extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozBoxBase {
  #actionEls = [];
  static properties = {
    layout: {
      type: String,
      reflect: true
    },
    supportPage: {
      type: String,
      attribute: "support-page"
    },
    _hasSlottedSupportLink: {
      type: Boolean,
      state: true
    },
    _hasSlottedDescription: {
      type: Boolean,
      state: true
    }
  };
  static queries = {
    defaultSlotEl: "slot:not([name])",
    actionsStartSlotEl: "slot[name=actions-start]",
    actionsSlotEl: "slot[name=actions]",
    handleEl: ".handle"
  };
  constructor() {
    super();
    this.layout = "default";
    this._hasSlottedDescription = false;
    this.addEventListener("keydown", e => this.handleKeydown(e));
  }
  get hasSupportPage() {
    return this.supportPage || this._hasSlottedSupportLink;
  }
  get hasDescription() {
    return this.description || this._hasSlottedDescription;
  }

  /** @param {Event} e */
  checkSlottedSupportLink(e) {
    this._hasSlottedSupportLink = !!e.target?.assignedNodes()?.length;
  }

  /** @param {Event} e */
  checkSlottedDescription(e) {
    this._hasSlottedDescription = !!e.target?.assignedNodes()?.length;
  }
  firstUpdated() {
    this.getActionEls();
  }
  handleKeydown(event) {
    // Find which action element the event came from
    let target = this.#actionEls.find(el => el.contains(event.target));
    if (!target) {
      return;
    }
    let directions = this.getNavigationDirections();
    switch (event.key) {
      case directions.FORWARD:
      case `Arrow${directions.FORWARD}`:
        {
          this.navigate(target, NAVIGATION_FORWARD);
          break;
        }
      case directions.BACKWARD:
      case `Arrow${directions.BACKWARD}`:
        {
          this.navigate(target, NAVIGATION_BACKWARD);
          break;
        }
      case "ArrowUp":
      case "Up":
      case "ArrowDown":
      case "Down":
        {
          if (this.isFocusable) {
            event.stopPropagation();
          }
        }
    }
  }

  /**
   * Navigate between action elements, skipping disabled elements.
   *
   * @param {HTMLElement} target - The currently focused action element
   * @param {NAVIGATION_FORWARD | NAVIGATION_BACKWARD} direction - The navigation direction
   */
  navigate(target, direction) {
    let actionEls = this.#actionEls;
    let currentIndex = actionEls.indexOf(target);
    let step = NAVIGATION_VALUE[direction];
    for (let nextIndex = currentIndex + step; nextIndex >= 0 && nextIndex < actionEls.length; nextIndex += step) {
      let nextItem = actionEls[nextIndex];
      nextItem.focus();
      if (nextItem.contains(this.getRootNode().activeElement)) {
        // If the next item became focused then we've navigated. This skips
        // disabled elements or elements that can never receive focus.
        return;
      }
    }
  }
  getNavigationDirections() {
    if (this.isDocumentRTL) {
      return NAVIGATION_DIRECTIONS.RTL;
    }
    return NAVIGATION_DIRECTIONS.LTR;
  }
  get isDocumentRTL() {
    if (typeof Services !== "undefined") {
      return Services.locale.isAppLocaleRTL;
    }
    return document.dir === "rtl";
  }
  get isDraggable() {
    const reorderableParent = this.closest("moz-box-group");
    return reorderableParent?.type == chrome_global_content_elements_moz_box_group_mjs__WEBPACK_IMPORTED_MODULE_3__.GROUP_TYPES.reorderable && this.slot != "header" && this.slot != "footer" && !this.slot.includes("static");
  }

  /**
   * Whether the item itself can receive focus, rather than delegating
   * focus to one of its action elements.
   *
   * @returns {boolean}
   */
  get isFocusable() {
    return this.hasAttribute("tabindex");
  }

  /**
   * Focuses the item, or delegates to an action element when the item
   * isn't directly focusable.
   *
   * @param {KeyboardEvent} [event]
   */
  focus(event) {
    if (this.isFocusable) {
      super.focus();
      return;
    }
    if (event?.key == "Up" || event?.key == "ArrowUp") {
      let actionEls = this.actionsSlotEl.assignedElements();
      let lastActions = actionEls.length ? actionEls : this.actionsStartSlotEl?.assignedElements();
      let lastAction = lastActions?.[lastActions.length - 1];
      lastAction?.focus();
    } else {
      let firstAction = this.actionsStartSlotEl?.assignedElements()?.[0] ?? this.actionsSlotEl.assignedElements()?.[0];
      firstAction?.focus();
    }
  }
  getActionEls() {
    let startActions = this.actionsStartSlotEl?.assignedElements() ?? [];
    let endActions = this.actionsSlotEl.assignedElements();
    this.#actionEls = [...startActions, ...endActions];
  }
  stylesTemplate() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`${super.stylesTemplate()}
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_box_item_moz_box_item_css__WEBPACK_IMPORTED_MODULE_0__}"
      />`;
  }
  slotTemplate(name) {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <span
        role="group"
        aria-labelledby="label"
        aria-describedby="description"
        class="actions"
        @slotchange=${this.getActionEls}
      >
        <slot name=${name}></slot>
      </span>
    `;
  }
  descriptionTemplate() {
    if (!this.description) {
      return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<slot
        class="description text-deemphasized"
        id="description"
        name="description"
        @slotchange=${this.checkSlottedDescription}
      ></slot>`;
    }
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span class="description text-deemphasized" id="description"
      >${this.description}</span
    >`;
  }
  textTemplate() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div
      class=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.classMap)({
      "text-content": true,
      "has-icon": this.iconSrc,
      "has-description": this.hasDescription,
      "has-support-page": this.hasSupportPage
    })}
    >
      ${this.iconTemplate()}
      <span class="label-wrapper">
        ${this.labelTemplate()}${!this.hasDescription ? this.supportPageTemplate() : ""}
      </span>
      <span class="description-wrapper">
        ${this.descriptionTemplate()}${this.hasDescription ? this.supportPageTemplate() : ""}
      </span>
    </div>`;
  }
  supportPageTemplate() {
    if (this.supportPage) {
      return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<a
        class="support-page"
        is="moz-support-link"
        support-page=${this.supportPage}
        part="support-link"
        aria-describedby=${this.description ? "description" : "label"}
      ></a>`;
    }
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<slot
      name="support-link"
      class="support-page"
      @slotchange=${this.checkSlottedSupportLink}
    ></slot>`;
  }
  handleTemplate() {
    if (!this.isDraggable) {
      return "";
    }
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span
      class="handle"
      data-l10n-id=${this.label ? "moz-box-item-reorder-handle-named" : "moz-box-item-reorder-handle"}
      data-l10n-args=${this.label ? JSON.stringify({
      item: this.label
    }) : undefined}
    ></span>`;
  }
  render() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      ${this.stylesTemplate()}
      <div class="box-container">
        ${this.handleTemplate()} ${this.slotTemplate("actions-start")}
        <div class="box-content">
          ${this.label ? this.textTemplate() : (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<slot></slot>`}
        </div>
        ${this.slotTemplate("actions")}
      </div>
    `;
  }
}
customElements.define("moz-box-item", MozBoxItem);

/***/ }),

/***/ 99486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AIWebsiteSelect: () => (/* binding */ AIWebsiteSelect)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_ai_website_select_ai_website_select_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71818);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);
/* harmony import */ var chrome_global_content_elements_moz_checkbox_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30226);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



// eslint-disable-next-line import/no-unassigned-import

const CHANGE_EVENT = "ai-website-select:change";

/**
 * A website select component for listing and selecting tabs
 *
 * @property {string} token - Per-row id that maps to the tab's permanentKey
 * @property {string} linkedPanel - Id of the linked panel (used for associating with tab objects)
 * @property {string} label - The text content (tab name)
 * @property {string} iconSrc - Favicon or icon URL
 * @property {string} url - URL for the link
 * @property {boolean} checked - Whether this item is selected
 */
class AIWebsiteSelect extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    token: {
      type: String
    },
    linkedPanel: {
      type: String
    },
    label: {
      type: String
    },
    iconSrc: {
      type: String
    },
    url: {
      type: String
    },
    checked: {
      type: Boolean,
      reflect: true
    }
  };
  constructor() {
    super();
    this.token = "";
    this.linkedPanel = "";
    this.label = "";
    this.iconSrc = "";
    this.url = "";
    this.checked = false;
  }

  /**
   * Handle checkbox state changes and dispatch custom event
   * This allows parent containers to manage state centrally
   *
   * @param {Event} event - The change event from the checkbox
   */
  handleCheckboxChange(event) {
    // Prevent the default checkbox behavior if we want controlled component
    event.stopPropagation();
    const newCheckedState = event.target.checked;

    // Dispatch custom event with all relevant data for parent container
    const changeEvent = new CustomEvent(CHANGE_EVENT, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {
        token: this.token,
        linkedPanel: this.linkedPanel,
        label: this.label,
        url: this.url,
        iconSrc: this.iconSrc,
        checked: newCheckedState
      }
    });
    this.dispatchEvent(changeEvent);

    // Only update internal state if not prevented by parent
    if (!changeEvent.defaultPrevented) {
      this.checked = newCheckedState;
    }
  }

  /**
   * Programmatically set checked state
   *
   * @param {boolean} checked - The new checked state
   */
  setChecked(checked) {
    if (this.checked === checked) {
      return;
    }
    // Directly dispatch the custom event instead of calling handleCheckboxChange
    const changeEvent = new CustomEvent(CHANGE_EVENT, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {
        token: this.token,
        linkedPanel: this.linkedPanel,
        label: this.label,
        url: this.url,
        iconSrc: this.iconSrc,
        checked
      }
    });
    this.dispatchEvent(changeEvent);

    // Only update internal state if not prevented by parent
    if (!changeEvent.defaultPrevented) {
      this.checked = checked;
    }
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_ai_website_select_ai_website_select_css__WEBPACK_IMPORTED_MODULE_0__}"
      />

      <moz-checkbox
        class="website-select-checkbox text-truncated-ellipsis"
        .checked=${this.checked}
        @change=${this.handleCheckboxChange}
        name=${this.linkedPanel}
        value=${this.linkedPanel}
        label=${this.label}
        iconSrc=${this.iconSrc || "chrome://global/skin/icons/defaultFavicon.svg"}
        aria-label=${this.label}
      ></moz-checkbox>
    `;
  }
}
customElements.define("ai-website-select", AIWebsiteSelect);

/***/ })

}]);
//# sourceMappingURL=components-ai-chat-content-ai-chat-content-stories.36f5a2db.iframe.bundle.js.map