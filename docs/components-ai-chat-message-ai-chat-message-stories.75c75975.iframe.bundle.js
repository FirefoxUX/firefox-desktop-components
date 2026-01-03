"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[8591],{

/***/ 29334:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ai-chat-message.8d4177dffc6ad4d2d189.css";

/***/ }),

/***/ 65839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssistantMessage: () => (/* binding */ AssistantMessage),
/* harmony export */   UserMessage: () => (/* binding */ UserMessage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var chrome_browser_content_aiwindow_components_ai_chat_message_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98826);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/AI Window/AI Chat Message",
  component: "ai-chat-message",
  argTypes: {
    role: {
      options: ["user", "assistant"],
      control: {
        type: "select"
      }
    },
    content: {
      control: {
        type: "text"
      }
    }
  }
});
const Template = ({
  role,
  content
}) => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <ai-chat-message .message=${{
  role,
  content
}}></ai-chat-message>
`;
const UserMessage = Template.bind({});
UserMessage.args = {
  role: "user",
  content: "Test: What is the weather like today?"
};
const AssistantMessage = Template.bind({});
AssistantMessage.args = {
  role: "assistant",
  content: "Test: I don't have access to real-time weather data, but I can help you with other tasks!"
};

/***/ }),

/***/ 98826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AIChatMessage: () => (/* binding */ AIChatMessage)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_ai_chat_message_ai_chat_message_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29334);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * A custom element for managing AI Chat Content
 */
class AIChatMessage extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  /**
   * @member {object} message - {role:"user"|"assistant" , content: string}
   */

  static properties = {
    role: {
      type: String
    },
    message: {
      type: String
    }
  };
  constructor() {
    super();
  }
  connectedCallback() {
    super.connectedCallback();
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_ai_chat_message_ai_chat_message_css__WEBPACK_IMPORTED_MODULE_0__}"
      />

      <article>
        <div class=${"message-" + this.role}>
          <!-- TODO: Add markdown parsing here -->
          ${this.message}
        </div>
      </article>
    `;
  }
}
customElements.define("ai-chat-message", AIChatMessage);

/***/ })

}]);
//# sourceMappingURL=components-ai-chat-message-ai-chat-message-stories.75c75975.iframe.bundle.js.map