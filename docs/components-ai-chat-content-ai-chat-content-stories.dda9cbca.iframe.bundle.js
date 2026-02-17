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
 * Custom element that renders the “Memories applied” pill and popover for
 * a single assistant message. The popover shows a list of applied
 * memories and allows the user to:
 *   - Remove an individual applied memory.
 *   - Retry the message without any applied memories.
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
 * Events dispatched:
 *   - "toggle-applied-memories"
 *       detail: { messageId, open }
 *   - "remove-applied-memory"
 *       detail: { memoryId }
 *   - "retry-without-memories"
 *       detail: { messageId }
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
    }
  };
  constructor() {
    super();
    this.messageId = null;
    this.appliedMemories = [];
    this.open = false;
    this._onDocumentClick = this._onDocumentClick.bind(this);
  }
  connectedCallback() {
    super.connectedCallback();
    document.addEventListener("click", this._onDocumentClick);
  }
  disconnectedCallback() {
    document.removeEventListener("click", this._onDocumentClick);
    super.disconnectedCallback();
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
    this.toggleAttribute("data-open", this.open);
    this.dispatchEvent(new CustomEvent("toggle-applied-memories", {
      bubbles: true,
      composed: true,
      detail: {
        messageId: this.messageId,
        open: this.open
      }
    }));
  }
  _onPopoverClick(event) {
    event.stopPropagation();
  }
  _onDocumentClick() {
    if (!this.open) {
      return;
    }
    this.open = false;
    this.toggleAttribute("data-open", false);
    this.requestUpdate();
    this.dispatchEvent(new CustomEvent("toggle-applied-memories", {
      bubbles: true,
      composed: true,
      detail: {
        messageId: this.messageId,
        open: false
      }
    }));
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
  renderPopover() {
    if (!this._hasMemories) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.nothing;
    }
    const isOpen = this.open;
    const visibleMemories = this._visibleMemories;
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      <div
        class="popover ${isOpen ? "open" : ""}"
        role="region"
        aria-hidden=${!isOpen}
        @click=${event => this._onPopoverClick(event)}
      >
        <ul class="memories-list">
          ${visibleMemories.map(memory => {
      // @todo Bug 2010069
      // Localize aria-label
      return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
              <li class="memories-list-item">
                <span class="memories-list-label"
                  >${memory.memory_summary}</span
                >
                <moz-button
                  class="memories-remove-button"
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

        <div class="retry-row">
          <moz-button
            type="ghost"
            size="default"
            iconsrc="chrome://global/skin/icons/reload.svg"
            iconposition="start"
            class="retry-row-button"
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

/***/ 22356:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "chat-assistant-error.a2ed751e21ec3efb103a.css";

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



const ERROR_TYPES = {
  PAYLOAD_TOO_LARGE: 413,
  RATE_LIMIT: 429,
  SERVER_ERROR_MIN: 500,
  SERVER_ERROR_MAX: 599
};

/**
 * Shows an error message based on an error status
 */
class ChatAssistantError extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.MozLitElement {
  static properties = {
    errorStatus: {
      type: Number
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
    this.actionButton = null;
    this.errorText = {
      header: "smartwindow-assistant-error-generic-header"
    };
  }
  willUpdate(changed) {
    if (changed.has("errorStatus")) {
      this.getErrorInformation();
    }
  }

  // TO DO: implement action buttons functionality

  /* https://mozilla-hub.atlassian.net/browse/GENAI-2863
  also needs its own error message/functionality */

  retryAssistantMessage() {
    const event = new CustomEvent("aiChatError:retry-message", {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  /* https://mozilla-hub.atlassian.net/browse/GENAI-3170
  switchToClassic() {
    console.log("switch to classic..");
  }
  */

  /* https://mozilla-hub.atlassian.net/browse/GENAI-3171
  clearChat() {
    console.log("open a new chat..");
  }
  */

  getErrorInformation() {
    if (this.errorStatus === ERROR_TYPES.PAYLOAD_TOO_LARGE) {
      this.errorText = {
        header: "smartwindow-assistant-error-long-message-header"
      };
      // this.actionButton = {
      //   label: "smartwindow-clear-btn",
      //   action: this.clearChat,
      // };
      return;
    }
    if (this.errorStatus === ERROR_TYPES.RATE_LIMIT) {
      this.errorText = {
        header: "smartwindow-assistant-error-budget-header",
        body: "smartwindow-assistant-error-budget-body"
      };
      // this.actionButton = {
      //   label: "smartwindow-switch-btn",
      //   action: this.switchToClassic,
      // };
      return;
    }
    if (this.errorStatus >= ERROR_TYPES.SERVER_ERROR_MIN && this.errorStatus <= ERROR_TYPES.SERVER_ERROR_MAX) {
      this.actionButton = {
        label: "smartwindow-retry-btn",
        action: this.retryAssistantMessage.bind(this)
      };
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

/***/ 52944:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "applied-memories-button.f3524caa71c039f8f946.css";

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
 *   - "retry-without-memories"
 *       detail: { messageId }
 *   - "remove-applied-memory"
 *       (re-dispatched from the applied memories button)
 *       detail: { messageId, index, memory }
 *   - "toggle-applied-memories"
 *       (re-dispatched from the applied memories button)
 *       detail: { messageId, open }
 */
class AssistantMessageFooter extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.MozLitElement {
  static properties = {
    messageId: {
      type: String,
      attribute: "message-id"
    },
    appliedMemories: {
      attribute: false
    }
  };
  constructor() {
    super();
    this.messageId = null;
    this.appliedMemories = [];
  }
  static eventBehaviors = {
    bubbles: true,
    composed: true
  };
  static get events() {
    return {
      copy: "copy-message",
      retry: "retry-message",
      toggleMemories: "toggle-applied-memories",
      removeMemory: "remove-applied-memory",
      retryWithoutMemories: "retry-without-memories"
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
  #onAppliedMemoriesToggle(event) {
    this.#emit(this.constructor.events.toggleMemories, event.detail);
  }
  #onRemoveAppliedMemory(event) {
    this.#emit(this.constructor.events.removeMemory, event.detail);
  }
  #onRetryWithoutMemories(event) {
    this.#emit(this.constructor.events.retryWithoutMemories, event.detail ?? {
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
          @toggle-applied-memories=${event => {
      this.#onAppliedMemoriesToggle(event);
    }}
          @remove-applied-memory=${event => {
      this.#onRemoveAppliedMemory(event);
    }}
          @retry-without-memories=${event => {
      this.#onRetryWithoutMemories(event);
    }}
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

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import


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
    errorStatus: {
      type: String
    },
    isSearching: {
      type: Boolean
    },
    searchQuery: {
      type: String
    },
    showErrorMessage: {
      type: Boolean
    },
    tokens: {
      type: Object
    }
  };
  constructor() {
    super();
    this.assistantIsLoading = false;
    this.conversationState = [];
    this.errorStatus = null;
    this.followUpSuggestions = [];
    this.isSearching = false;
    this.searchQuery = null;
    this.showErrorMessage = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.#initEventListeners();
    this.dispatchEvent(new CustomEvent("AIChatContent:Ready", {
      bubbles: true
    }));
    this.#initFooterActionListeners();
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
    this.addEventListener("aiChatError:retry-message", this.retryUserMessageAfterError.bind(this));
    this.addEventListener("SmartWindowPrompt:prompt-selected", this.#onFollowUpSelected.bind(this));
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
  messageEvent(event) {
    const message = event.detail;
    if (message?.content?.isError) {
      this.handleErrorEvent(message?.content?.status);
      return;
    }
    this.showErrorMessage = false;
    this.#checkConversationState(message);
    switch (message.role) {
      case "loading":
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
      // Used to clear the conversation state via side effects ( new conv id )
      case "clear-conversation":
        this.#checkConversationState(message);
    }
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
    }
  }
  handleLoadingEvent(event) {
    const {
      isSearching
    } = event.detail;
    this.isSearching = !!isSearching;
    this.assistantIsLoading = true;
    this.requestUpdate();
    this.#scrollToBottom();
  }
  handleErrorEvent(errorStatus) {
    this.assistantIsLoading = false;
    this.isSearching = false;
    this.errorStatus = errorStatus;
    this.showErrorMessage = true;
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
      ordinal
    } = event.detail;
    this.assistantIsLoading = true;
    this.conversationState[ordinal] = {
      role: "user",
      body: content.body,
      convId,
      ordinal
    };
    this.requestUpdate();
    this.#scrollToBottom();
  }
  retryUserMessageAfterError() {
    const lastMessage = this.conversationState.at(-1);
    this.#dispatchAction("retry-after-error", {
      ...lastMessage,
      content: {
        type: "text",
        body: lastMessage.body
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
      tokens,
      webSearchQueries
    } = event.detail;
    if (typeof content.body !== "string" || !content.body) {
      return;
    }

    // The "webSearchQueries" are coming from a conversation that is being initialized
    // and "tokens" are streaming in from a live conversation.
    const searchTokens = webSearchQueries ?? tokens?.search ?? [];

    // Prefer showing web search handoff over followup suggestions.
    this.followUpSuggestions = searchTokens.length ? [] : (tokens?.followup ?? []).slice(0, 2);
    this.conversationState[ordinal] = {
      role: "assistant",
      convId,
      messageId,
      body: content.body,
      appliedMemories: memoriesApplied ?? [],
      searchTokens
    };
    this.requestUpdate();
    this.#scrollToBottom();
  }
  #scrollToBottom() {
    this.updateComplete.then(() => {
      const wrapper = this.shadowRoot?.querySelector(".chat-content-wrapper");
      wrapper?.lastElementChild?.scrollIntoView({
        behavior: "smooth",
        block: "end"
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
  #renderMessage(msg) {
    if (!msg) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <div class=${`chat-bubble chat-bubble-${msg.role}`}>
        <ai-chat-message
          .message=${msg.body}
          .role=${msg.role}
          .searchTokens=${msg.searchTokens || []}
        ></ai-chat-message>
        ${msg.role === "assistant" ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
              <assistant-message-footer
                .messageId=${msg.messageId}
                .appliedMemories=${msg.appliedMemories}
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
    if (!this.showErrorMessage) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<chat-assistant-error
      .errorStatus=${this.errorStatus}
    ></chat-assistant-error>`;
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_ai_chat_content_ai_chat_content_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <div class="chat-content-wrapper">
        ${this.conversationState.map(msg => this.#renderMessage(msg))}
        ${this.#renderFollowUpSuggestions()} ${this.#renderLoader()}
        ${this.#renderError()}
      </div>
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

module.exports = __webpack_require__.p + "ai-chat-content.7c198383ed4d4d2415bb.css";

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
//# sourceMappingURL=components-ai-chat-content-ai-chat-content-stories.dda9cbca.iframe.bundle.js.map