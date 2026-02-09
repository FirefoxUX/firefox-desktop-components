"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[5859],{

/***/ 15625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Budget: () => (/* binding */ Budget),
/* harmony export */   Connection: () => (/* binding */ Connection),
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   Long: () => (/* binding */ Long),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var chrome_browser_content_aiwindow_components_chat_assistant_error_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27984);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/AI Window/Chat Assistant Error",
  component: "chat-assistant-error",
  argTypes: {
    errorStatus: {
      control: "select",
      options: [400, 413, 429, 500]
    },
    actionButton: {
      control: "object"
    },
    errorText: {
      control: "object"
    }
  },
  parameters: {
    fluent: `
smartwindow-assistant-error-generic-header = We could not proceed with your request, please try again.
smartwindow-assistant-error-budget-header = You’ve hit the maximum number of interactions allowed in a single day. Your access will reset at midnight ET.
smartwindow-assistant-error-budget-body = You can still search and navigate in Smart Window but chat functionality will be limited.
smartwindow-assistant-error-long-message-header = This chat has reached the maximum length. Clear the chat or start a new conversation to continue.
smartwindow-assistant-error-connection-header = Connection was lost or unsuccessful. Check your connection and try again.
smartwindow-retry-btn = Retry
smartwindow-switch-btn = Switch to Classic Window
smartwindow-clear-btn = Clear chat
    `
  }
});
const Template = ({
  errorStatus,
  errorText,
  actionButton
}) => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <chat-assistant-error
    .errorStatus=${errorStatus}
    .errorText=${errorText}
    .actionButton=${actionButton}
  ></chat-assistant-error>
`;
const Default = Template.bind({});
Default.args = {
  errorStatus: 400,
  errorText: {
    header: "smartwindow-assistant-error-generic-header"
  },
  actionButton: null
};
const Budget = Template.bind({});
Budget.args = {
  errorStatus: 429,
  errorText: {
    header: "smartwindow-assistant-error-budget-header",
    body: "smartwindow-assistant-error-budget-body"
  },
  actionButton: {
    label: "smartwindow-switch-btn"
  }
};
const Long = Template.bind({});
Long.args = {
  errorStatus: 413,
  errorText: {
    header: "smartwindow-assistant-error-long-message-header"
  },
  actionButton: null
};
const Connection = Template.bind({});
Connection.args = {
  errorStatus: 500,
  errorText: {
    header: "smartwindow-assistant-error-connection-header"
  },
  actionButton: {
    label: "smartwindow-retry-btn"
  }
};

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
  connectedCallback() {
    super.connectedCallback();
  }
  willUpdate(changed) {
    if (changed.has("errorStatus")) {
      this.getErrorInformation();
    }
  }

  // TO DO: implement action buttons functionality

  /* https://mozilla-hub.atlassian.net/browse/GENAI-2863
  also needs its own error message/functionality */

  /* https://mozilla-hub.atlassian.net/browse/GENAI-3168
  retryAssistantMessage() {
    console.log("retrying..");
  }
  */

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
    if (this.errorStatus === 413) {
      this.errorText = {
        header: "smartwindow-assistant-error-long-message-header"
      };
      // this.actionButton = {
      //   label: "smartwindow-clear-btn",
      //   action: this.clearChat,
      // };
      return;
    }
    if (this.errorStatus === 429) {
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
    if (this.errorStatus >= 499 && this.errorStatus <= 512) {
      this.errorText = {
        header: "smartwindow-assistant-error-connection-header"
      };
      // this.actionButton = {
      //   label: "smartwindow-retry-btn",
      //   action: this.retryAssistantMessage,
      // };
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

/***/ })

}]);
//# sourceMappingURL=components-ai-chat-content-chat-assistant-error-chat-assistant-error-stories.afa05426.iframe.bundle.js.map