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
 *       detail: { messageId, index, memory }
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
  _onRemoveMemory(event, index) {
    event.stopPropagation();
    if (!Array.isArray(this.appliedMemories)) {
      return;
    }
    const memory = this.appliedMemories[index];

    // Remove memory visually, but update will be done by parent
    this.appliedMemories = this.appliedMemories.filter((_, i) => {
      return i !== index;
    });
    this.dispatchEvent(new CustomEvent("remove-applied-memory", {
      bubbles: true,
      composed: true,
      detail: {
        messageId: this.messageId,
        index,
        memory
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

  // TODO: Update formatting function once shape of memories passed is confirmed
  _formatMemoryLabel(memory) {
    if (typeof memory === "string") {
      return memory;
    }
    return "";
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
          ${visibleMemories.map((memory, index) => {
      const label = this._formatMemoryLabel(memory);
      if (!label) {
        return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.nothing;
      }

      // @todo Bug 2010069
      // Localize aria-label
      return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
              <li class="memories-list-item">
                <span class="memories-list-label">${label}</span>
                <moz-button
                  class="memories-remove-button"
                  type="ghost"
                  size="small"
                  iconsrc="chrome://global/skin/icons/close.svg"
                  aria-label="Remove this memory"
                  @click=${event => this._onRemoveMemory(event, index)}
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
        iconsrc="chrome://global/skin/icons/highlights.svg"
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

/***/ 52944:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "applied-memories-button.42a6d0cdb0613f5b3207.css";

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

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



// eslint-disable-next-line import/no-unassigned-import


/**
 * A custom element for managing AI Chat Content
 */
class AIChatContent extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    conversationState: {
      type: Array
    },
    tokens: {
      type: Object
    }
  };
  constructor() {
    super();
    this.conversationState = [];
  }
  connectedCallback() {
    super.connectedCallback();
    this.#initEventListeners();
  }

  /**
   * Initialize event listeners for AI chat content events
   */

  #initEventListeners() {
    this.addEventListener("aiChatContentActor:message", this.messageEvent.bind(this));
  }
  messageEvent(event) {
    const message = event.detail;
    if (message.role === "assistant") {
      this.handleAIResponseEvent(event);
      return;
    }
    this.handleUserPromptEvent(event);
  }

  /**
   *  Handle user prompt events
   *
   * @param {CustomEvent} event - The custom event containing the user prompt
   */

  handleUserPromptEvent(event) {
    const {
      content
    } = event.detail;
    this.conversationState.push({
      role: "user",
      body: content.body
    });
    this.requestUpdate();
  }

  /**
   * Handle AI response events
   *
   * @param {CustomEvent} event - The custom event containing the response
   */

  handleAIResponseEvent(event) {
    // TODO (bug 2009434): update reference to insights
    const {
      ordinal,
      id: messageId,
      content,
      memoriesApplied,
      tokens
    } = event.detail;
    this.conversationState[ordinal] = {
      role: "assistant",
      messageId,
      body: content.body,
      appliedMemories: memoriesApplied ?? [],
      searchTokens: tokens?.search || []
    };
    this.requestUpdate();
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_ai_chat_content_ai_chat_content_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <div class="chat-content-wrapper">
        ${this.conversationState.map(msg => {
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
    })}
      </div>
    `;
  }
}
customElements.define("ai-chat-content", AIChatContent);

/***/ }),

/***/ 76055:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assistant-message-footer.9d0eff049cdb656a7d83.css";

/***/ }),

/***/ 91062:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ai-chat-content.14e0c9a12bf92f40e507.css";

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
//# sourceMappingURL=components-ai-chat-content-ai-chat-content-stories.7a101ca8.iframe.bundle.js.map