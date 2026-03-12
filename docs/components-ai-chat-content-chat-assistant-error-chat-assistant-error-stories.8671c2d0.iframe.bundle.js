"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[5859],{

/***/ 15625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Budget: () => (/* binding */ Budget),
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   ManyRequests: () => (/* binding */ ManyRequests),
/* harmony export */   MaxLength: () => (/* binding */ MaxLength),
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
    error: {
      control: "object"
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
smartwindow-assistant-error-generic-header = Something went wrong. Please try again.
smartwindow-assistant-error-budget-header = You’ve reached today’s chat limit.
smartwindow-assistant-error-budget-body = You can still browse in this window. Chat will be available again after midnight ET.
smartwindow-assistant-error-many-requests-header = Please wait a moment and try again. Too many messages were sent in a short time.
smartwindow-assistant-error-max-length-header = It’s time to start a new chat. This one’s reached its length limit.
smartwindow-retry-btn = Try Again
smartwindow-clear-btn = New chat
    `
  }
});
const Template = ({
  error,
  errorText,
  actionButton
}) => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <chat-assistant-error
    .error=${error}
    .errorText=${errorText}
    .actionButton=${actionButton}
  ></chat-assistant-error>
`;
const Default = Template.bind({});
Default.args = {
  error: {
    error: "generic error message that is not a number"
  },
  errorText: {
    header: "smartwindow-assistant-error-generic-header"
  },
  actionButton: {
    label: "smartwindow-retry-btn"
  }
};
const Budget = Template.bind({});
Budget.args = {
  error: {
    error: 1
  },
  errorText: {
    header: "smartwindow-assistant-error-budget-header",
    body: "smartwindow-assistant-error-budget-body"
  }
};
const ManyRequests = Template.bind({});
ManyRequests.args = {
  error: {
    error: 2
  },
  errorText: {
    header: "smartwindow-assistant-error-many-requests-header"
  }
};
const MaxLength = Template.bind({});
MaxLength.args = {
  error: {
    error: 3
  },
  errorText: {
    header: "smartwindow-assistant-error-max-length-header"
  },
  actionButton: {
    label: "smartwindow-clear-btn"
  }
};

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

/***/ })

}]);
//# sourceMappingURL=components-ai-chat-content-chat-assistant-error-chat-assistant-error-stories.8671c2d0.iframe.bundle.js.map