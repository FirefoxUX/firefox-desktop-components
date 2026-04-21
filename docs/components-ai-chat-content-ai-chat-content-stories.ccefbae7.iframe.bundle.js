"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1279],{

/***/ 2671:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppliedMemoriesButton: () => (/* binding */ AppliedMemoriesButton)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_ai_chat_content_chat_assistant_footer_applied_memories_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52944);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82242);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(616);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */




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
    this.updateComplete.then(() => this.#focusItemAt(0));
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
      this.updateComplete.then(() => this.#focusItemAt(0));
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
        this.#closePopover();
        this.shadowRoot.querySelector(".memories-trigger")?.focus();
        break;
      case "ArrowDown":
        event.preventDefault();
        this.#moveFocus(1);
        break;
      case "ArrowUp":
        event.preventDefault();
        this.#moveFocus(-1);
        break;
      case "Home":
        event.preventDefault();
        this.#focusItemAt(0);
        break;
      case "End":
        event.preventDefault();
        this.#focusItemAt(-1);
        break;
    }
  }
  get #menuItems() {
    const popover = this.shadowRoot.querySelector(".popover");
    return popover ? [...popover.querySelectorAll("[data-focusable]")] : [];
  }
  #moveFocus(direction) {
    const items = this.#menuItems;
    if (!items.length) {
      return;
    }
    const active = this.shadowRoot.activeElement;
    const currentIndex = items.indexOf(active);
    const nextIndex = (currentIndex + direction + items.length) % items.length;
    this.#focusItemAt(nextIndex);
  }
  #focusItemAt(index) {
    const items = this.#menuItems;
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
          role="menuitem"
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
        role="menu"
        data-l10n-id="aiwindow-applied-memories-popover"
        data-l10n-attrs="aria-label"
        ?inert=${!isOpen}
        @click=${event => this._onPopoverClick(event)}
      >
        ${this.#showCalloutState ? this.renderCallout() : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.nothing}

        <ul class="memories-list" role="none">
          ${visibleMemories.map(memory => {
      // @todo Bug 2010069
      // Localize aria-label
      return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
              <li class="memories-list-item" role="none">
                <span class="memories-list-label"
                  >${memory.memory_summary}</span
                >
                <moz-button
                  class="memories-remove-button"
                  role="menuitem"
                  data-focusable
                  type="ghost"
                  size="small"
                  iconsrc="chrome://global/skin/icons/close.svg"
                  aria-label="Remove this memory"
                  @click=${event => this._onRemoveMemory(event, memory)}
                ></moz-button>
              </li>
            `;
    })}
        </ul>

        <div class="popover-action-row" role="none">
          <moz-button
            type="ghost"
            size="default"
            iconsrc="chrome://global/skin/icons/settings.svg"
            iconposition="start"
            role="menuitem"
            data-focusable
            class="popover-action-row-button manage-memories-button"
            data-l10n-id="aiwindow-manage-memories"
            data-l10n-attrs="label"
            @click=${() => this._onManageMemories()}
          ></moz-button>
        </div>

        <div class="popover-action-row" role="none">
          <moz-button
            type="ghost"
            size="default"
            iconsrc="chrome://global/skin/icons/reload.svg"
            iconposition="start"
            role="menuitem"
            data-focusable
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
        aria-haspopup="menu"
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

/***/ 5136:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "website-chip-container.812f4c868802475dd875.css";

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
 * @property {string} label - The text content of the chip
 * @property {string} iconSrc - Favicon or icon URL
 * @property {string} href - URL for the link (used with context-chip type)
 * @property {boolean} removable - Whether the chip shows a remove button on hover (default false)
 */
class AIWebsiteChip extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    type: {
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
    }
  };
  #parentHost = null;
  constructor() {
    super();
    this.type = "in-line";
    this.label = "";
    this.iconSrc = "";
    this.href = "";
    this.removable = false;
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
          ?data-removable=${isRemovable}
          href=${this.href}
          target="_blank"
        >
          ${chipContent}
        </a>` : (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<button
          class="chip"
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

/***/ 22356:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "chat-assistant-error.aeee1560dc561f9e3358.css";

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
 * These are the only reliable identifiers as the HTTP status codes
 * do not propagate to the front-end.
 */
const ERROR_CODES = {
  BUDGET_EXCEEDED: 1,
  RATE_LIMIT_EXCEEDED: 2,
  CHAT_MAX_LENGTH: 3,
  ACCOUNT_ERROR: 4
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
      case ERROR_CODES.ACCOUNT_ERROR:
        this.errorText = {
          header: "smartwindow-assistant-error-account-header"
        };
        this.actionButton = {
          label: "smartwindow-signin-btn",
          action: this.openAccountSignIn.bind(this)
        };
        break;
      default:
        this.setGenericError();
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
        ></h3>
        ${this.errorText?.body ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<p
              class="chat-assistant-error__body"
              data-l10n-id=${this.errorText?.body}
            ></p>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.nothing}
        ${this.actionButton ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<moz-button
              class="chat-assistant-error__button"
              data-l10n-id=${this.actionButton?.label}
              size="small"
              @click=${this.actionButton?.action}
            ></moz-button>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.nothing}
      </div>
    `;
  }
}
customElements.define("chat-assistant-error", ChatAssistantError);

/***/ }),

/***/ 36490:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "chat-assistant-loader.bd537c3f25617137d65d.css";

/***/ }),

/***/ 39092:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebsiteChipContainer: () => (/* binding */ WebsiteChipContainer)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_website_chip_container_website_chip_container_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5136);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82242);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(616);
/* harmony import */ var chrome_browser_content_aiwindow_components_ai_website_chip_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6266);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */




// eslint-disable-next-line import/no-unassigned-import


/** @typedef {import("chrome://browser/content/urlbar/SmartbarInput.mjs").ContextWebsite} ContextWebsite */

/**
 * Container for rendering a horizontally scrollable row of website chips
 */
class WebsiteChipContainer extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.MozLitElement {
  static properties = {
    websites: {
      type: Array
    },
    chipType: {
      type: String
    },
    removable: {
      type: Boolean
    }
  };
  constructor() {
    super();
    /** @type {ContextWebsite[]} */
    this.websites = [];
    this.chipType = "context-chip";
    this.removable = false;
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
  render() {
    if (!this.websites.length) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.nothing;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_website_chip_container_website_chip_container_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <div class="chip-container">
        <div class="scroller" role="list">
          ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.repeat)(this.websites, website => website.url, website => website.historyDeleted ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<div class="chip-history-deleted" role="listitem">
                    <img
                      class="chip-history-deleted-icon"
                      src="chrome://global/skin/icons/defaultFavicon.svg"
                    />
                    <span
                      data-l10n-id="aiwindow-website-chip-history-deleted"
                    ></span>
                  </div>` : (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<ai-website-chip
                    .type=${this.chipType}
                    .label=${website.label}
                    .href=${website.url}
                    .iconSrc=${website.iconSrc ?? ""}
                    .removable=${this.removable}
                    @ai-website-chip:remove=${e => this.#onRemoveWebsite(website, e)}
                  ></ai-website-chip>`)}
        </div>
      </div>
    `;
  }
}
customElements.define("website-chip-container", WebsiteChipContainer);

/***/ }),

/***/ 39894:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ai-website-chip.1e9303af98b32f4d06e8.css";

/***/ }),

/***/ 52944:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "applied-memories-button.7bad9744b0b012202a10.css";

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
      retry: "retry-message"
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
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_ai_chat_content_chat_assistant_footer_assistant_message_footer_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <div class="footer">
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
 * Loader/spinner visible while the assistant is thinking
 *
 * isSearch - true when this component is being used for loading a search handoff action
 */
class ChatAssistantLoader extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.MozLitElement {
  static properties = {
    isSearch: {
      type: Boolean
    }
  };
  constructor() {
    super();
    this.isSearch = false;
  }
  connectedCallback() {
    super.connectedCallback();
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_ai_chat_content_chat_assistant_loader_chat_assistant_loader_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <!-- TO DO: add fluent string when UX writing team finished copy - https://bugzilla.mozilla.org/show_bug.cgi?id=2014907 -->
      <div
        class="chat-assistant-loader"
        aria-label=" ${this.isSearch ? `` : `Loading assistant response`}"
      >
        <span class="chat-assistant-loader__spinner"></span>
        ${this.isSearch ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
              <p class="chat-assistant-loader__text">Analyzing web search</p>
            ` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.nothing}
      </div>
    `;
  }
}
customElements.define("chat-assistant-loader", ChatAssistantLoader);

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
/* harmony import */ var chrome_browser_content_aiwindow_components_website_chip_container_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39092);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

const FOLLOW_UP_QTY = 2;

/**
 * A custom element for managing AI Chat Content
 */
class AIChatContent extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    assistantIsLoading: {
      type: Boolean
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
  #scrollClickHandler = null;
  #scrollRafId = null;
  constructor() {
    super();
    this.assistantIsLoading = false;
    this.conversationState = [];
    this.followUpSuggestions = [];
    this.errorObj = null;
    this.isSearching = false;

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
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.#overflowObserver?.disconnect();
    this.#overflowObserver = null;
    this.#teardownScrollListener();
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

  /**
   * Initialize event listeners for AI chat content events
   */

  #initEventListeners() {
    this.addEventListener("aiChatContentActor:message", this.messageEvent.bind(this));
    this.addEventListener("aiChatContentActor:truncate", this.truncateEvent.bind(this));
    this.addEventListener("aiChatContentActor:remove-applied-memory", this.removeAppliedMemoryEvent.bind(this));
    this.addEventListener("aiChatContentActor:seen-urls", this.#handleSeenUrls.bind(this));
    this.addEventListener("aiChatError:retry-message", this.retryUserMessageAfterError.bind(this));
    this.addEventListener("SmartWindowPrompt:prompt-selected", this.#onFollowUpSelected.bind(this));
    this.addEventListener("aiChatError:new-chat", this.openNewChatAfterError.bind(this));
    this.addEventListener("aiChatError:sign-in", this.openAccountSignInAfterError.bind(this));
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
      const btn = this.#jumpButton;
      if (!wrapper || !btn) {
        return;
      }
      this.#scrollHandler = () => {
        if (this.#scrollRafId) {
          return;
        }
        this.#scrollRafId = requestAnimationFrame(() => {
          this.#scrollRafId = null;
          const distanceFromBottom = wrapper.scrollHeight - wrapper.scrollTop - wrapper.clientHeight;
          const threshold = wrapper.clientHeight * 0.5;
          const show = distanceFromBottom > threshold;
          const atBottom = distanceFromBottom < 1;
          if (btn.hasAttribute("visible") !== show) {
            btn.toggleAttribute("visible", show);
            btn.toggleAttribute("disabled", !show);
          }
          if (wrapper.hasAttribute("scrolled-to-bottom") !== atBottom) {
            wrapper.toggleAttribute("scrolled-to-bottom", atBottom);
          }
        });
      };
      this.#scrollClickHandler = () => {
        wrapper.scrollTop = wrapper.scrollHeight;
      };
      wrapper.addEventListener("scroll", this.#scrollHandler);
      btn.addEventListener("click", this.#scrollClickHandler);
    });
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
    if (this.#scrollClickHandler) {
      this.#jumpButton?.removeEventListener("click", this.#scrollClickHandler);
      this.#scrollClickHandler = null;
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
      case "user":
        this.#checkConversationState(message);
        this.handleUserPromptEvent(event);
        break;
      case "assistant-message-complete":
        this.#setMessageCompleteAttr(message);
        break;
      // Used to clear the conversation state via side effects ( new conv id )
      case "clear-conversation":
        this.#checkConversationState(message);
    }
  }
  #setMessageCompleteAttr(message) {
    this.assistantIsLoading = false;
    const assistantLastMessage = this.conversationState.findLast(msg => msg?.messageId === message.content.id);
    if (assistantLastMessage) {
      assistantLastMessage.isLastChunk = true;
    }
    this.requestUpdate();
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

    // If the conversation ID has changed, reset the conversation state
    if (convIdChanged || isReloadingSameConvo) {
      this.conversationState = [];
      this.followUpSuggestions = [];
      this.assistantIsLoading = false;
      this.isSearching = false;
      if (convIdChanged) {
        this.shadowRoot?.querySelector(".chat-inner-wrapper")?.style.removeProperty("--content-height");
      }
      this.requestUpdate();
    }
  }
  handleLoadingEvent(event) {
    const {
      isSearching
    } = event.detail;
    this.isSearching = !!isSearching;
    this.assistantIsLoading = true;
    this.requestUpdate();
  }
  handleErrorEvent(error) {
    this.assistantIsLoading = false;
    this.isSearching = false;
    this.errorObj = error;
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
      this.assistantIsLoading = true;
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

  /**
   * Handle AI response events
   *
   * @param {CustomEvent} event - The custom event containing the response
   */

  handleAIResponseEvent(event) {
    this.isSearching = false;
    this.assistantIsLoading = false;
    const {
      convId,
      ordinal,
      id: messageId,
      content,
      memoriesApplied,
      showMemoriesCallout,
      webSearchQueries,
      followUpSuggestions = [],
      isPreviousMessage
    } = event.detail;
    if (typeof content.body !== "string" || !content.body) {
      return;
    }

    // favor web search display over follow ups.
    this.followUpSuggestions = webSearchQueries.length ? [] : followUpSuggestions.slice(0, FOLLOW_UP_QTY);
    this.conversationState[ordinal] = {
      role: "assistant",
      convId,
      messageId,
      body: content.body,
      appliedMemories: memoriesApplied ?? [],
      showCallout: showMemoriesCallout ?? false,
      searchTokens: webSearchQueries ?? [],
      isLastChunk: !!isPreviousMessage
    };
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
  #renderMessage(msg, chips) {
    if (!msg) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <div class=${`chat-bubble chat-bubble-${msg.role}`}>
        ${chips?.length ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<website-chip-container
              .websites=${chips}
            ></website-chip-container>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
        <ai-chat-message
          .message=${msg.body}
          .role=${msg.role}
          .messageId=${msg.messageId}
          .searchTokens=${msg.searchTokens || []}
          .conversationId=${this.conversationId}
          .seenUrls=${this.seenUrls}
        ></ai-chat-message>
        ${msg.role === "assistant" && msg.isLastChunk ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
              <assistant-message-footer
                .messageId=${msg.messageId}
                .appliedMemories=${msg.appliedMemories}
                .showCallout=${msg.showCallout}
              ></assistant-message-footer>
            ` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
      </div>
    `;
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
  #renderLoader() {
    if (!this.assistantIsLoading) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<chat-assistant-loader
      .isSearch=${this.isSearching}
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
  #renderMessages() {
    let lastContextPageUrl;
    return this.conversationState.map(msg => {
      const chips = this.#getVisibleChips(msg, lastContextPageUrl);
      if (msg?.role === "user") {
        lastContextPageUrl = msg.pageUrl;
      }
      return this.#renderMessage(msg, chips);
    });
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_ai_chat_content_ai_chat_content_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <div class="chat-content-wrapper">
        <div class="chat-inner-wrapper">
          ${this.#renderMessages()} ${this.#renderFollowUpSuggestions()}
          ${this.#renderLoader()} ${this.#renderError()}
        </div>
      </div>
      <moz-button
        class="jump-to-bottom-button"
        data-l10n-id="aiwindow-jump-to-bottom"
        data-l10n-attrs="aria-label,tooltiptext"
        iconsrc="chrome://global/skin/icons/shaft-arrow-down.svg"
        disabled
      ></moz-button>
    `;
  }
}
customElements.define("ai-chat-content", AIChatContent);

/***/ }),

/***/ 76055:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assistant-message-footer.99ef17ae8f5043082561.css";

/***/ }),

/***/ 91062:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ai-chat-content.b4732888065b21f34350.css";

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

/***/ })

}]);
//# sourceMappingURL=components-ai-chat-content-ai-chat-content-stories.ccefbae7.iframe.bundle.js.map