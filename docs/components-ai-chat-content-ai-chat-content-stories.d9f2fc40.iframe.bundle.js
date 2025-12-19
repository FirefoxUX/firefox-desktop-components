"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1279],{

/***/ 75706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AIChatContent: () => (/* binding */ AIChatContent)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_ai_chat_content_ai_chat_content_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91062);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * A custom element for managing AI Chat Content
 */
class AIChatContent extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    conversationState: {
      type: Array
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
   * @param {CustomeEvent} event - The custom event containing the user prompt
   */

  handleUserPromptEvent(event) {
    const {
      content
    } = event.detail;
    this.conversationState = [...this.conversationState, {
      role: "user",
      content
    }];
    this.requestUpdate();
  }

  /**
   * Handle AI response events
   *
   * @param {CustomEvent} event - The custom event containing the response
   */

  handleAIResponseEvent(event) {
    const {
      content,
      latestAssistantMessageIndex
    } = event.detail;
    if (!this.conversationState[latestAssistantMessageIndex]) {
      this.conversationState[latestAssistantMessageIndex] = {
        role: "assistant",
        content: ""
      };
    }
    this.conversationState[latestAssistantMessageIndex] = {
      ...this.conversationState[latestAssistantMessageIndex],
      content
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
        ${this.conversationState.map(msg => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<ai-chat-message .message=${msg}></ai-chat-message>`)}
      </div>
    `;
  }
}
customElements.define("ai-chat-content", AIChatContent);

/***/ }),

/***/ 91062:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ai-chat-content.0bfa645ae09b5e1aa2f4.css";

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
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/AI Window/AI Chat Content",
  component: "ai-chat-content",
  argTypes: {
    conversationState: {
      control: {
        type: "object"
      }
    }
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
    content: "What is the weather like today?"
  }]
};
const Conversation = Template.bind({});
Conversation.args = {
  conversationState: [{
    role: "user",
    content: "Test: What is the weather like today?"
  }, {
    role: "assistant",
    content: "Test: I don't have access to real-time weather data, but I can help you with other tasks!"
  }, {
    role: "user",
    content: "Test: Can you help me with coding?"
  }, {
    role: "assistant",
    content: "Test: Yes, I can help you with coding! What programming language or problem are you working on?"
  }]
};

/***/ })

}]);
//# sourceMappingURL=components-ai-chat-content-ai-chat-content-stories.d9f2fc40.iframe.bundle.js.map