"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[3741],{

/***/ 4043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   NaturalLanguage: () => (/* binding */ NaturalLanguage),
/* harmony export */   Search: () => (/* binding */ Search),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var chrome_browser_content_aiwindow_components_chat_assistant_loader_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71526);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/AI Window/Chat Assistant Loader",
  component: "chat-assistant-loader",
  parameters: {
    fluent: `smartwindow-nl-thinking = Looking for matching tabs...`
  },
  argTypes: {
    mode: {
      control: {
        type: "select"
      },
      options: ["default", "search", "nl"]
    }
  }
});
const Template = ({
  mode
}) => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <chat-assistant-loader .mode=${mode ?? "default"}></chat-assistant-loader>
`;
const Default = Template.bind({});
const Search = Template.bind({});
Search.args = {
  mode: "search"
};
const NaturalLanguage = Template.bind({});
NaturalLanguage.args = {
  mode: "nl"
};

/***/ }),

/***/ 36490:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "chat-assistant-loader.6004fb14a3268ebe9ba0.css";

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
    let ariaLabel = "";
    let iconTemplate;
    let textTemplate = chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.nothing;
    switch (this.mode) {
      case "search":
        iconTemplate = (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
          <span class="chat-assistant-loader__spinner"></span>
        `;
        textTemplate = (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
          <p class="chat-assistant-loader__text">Analyzing web search</p>
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
        ariaLabel = "Loading assistant response";
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
        aria-label=${ariaLabel || chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.nothing}
      >
        ${iconTemplate}${textTemplate}
      </div>
    `;
  }
}
customElements.define("chat-assistant-loader", ChatAssistantLoader);

/***/ })

}]);
//# sourceMappingURL=components-ai-chat-content-chat-assistant-loader-chat-assistant-loader-stories.a32e6909.iframe.bundle.js.map