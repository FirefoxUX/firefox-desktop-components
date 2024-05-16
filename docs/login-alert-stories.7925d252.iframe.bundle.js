"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[7250],{

/***/ 21870:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginAlert": () => (/* binding */ LoginAlert),
/* harmony export */   "LoginBreachAlert": () => (/* binding */ LoginBreachAlert),
/* harmony export */   "VulnerablePasswordAlert": () => (/* binding */ VulnerablePasswordAlert)
/* harmony export */ });
/* harmony import */ var browser_components_aboutlogins_content_components_login_alert_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56355);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73689);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



class LoginAlert extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static get properties() {
    return {
      variant: {
        type: String,
        reflect: true
      },
      icon: {
        type: String
      },
      titleId: {
        type: String
      }
    };
  }
  render() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <link
        rel="stylesheet"
        href="${browser_components_aboutlogins_content_components_login_alert_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <img src=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.icon)} />
      <h3 data-l10n-id=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.titleId)}></h3>
      <div>
        <slot name="action"></slot>
      </div>
      <slot name="content"></slot>
    `;
  }
}
class VulnerablePasswordAlert extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static get properties() {
    return {
      hostname: {
        type: String,
        reflect: true
      }
    };
  }
  constructor() {
    super();
    this.hostname = "";
  }
  render() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <link
        rel="stylesheet"
        href="${browser_components_aboutlogins_content_components_login_alert_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <login-alert
        variant="info"
        icon="chrome://browser/content/aboutlogins/icons/vulnerable-password.svg"
        titleId="about-logins-vulnerable-alert-title"
      >
        <div slot="content">
          <span
            class="alert-text"
            data-l10n-id="about-logins-vulnerable-alert-text2"
          ></span>
          <a
            class="alert-link"
            data-l10n-id="about-logins-vulnerable-alert-link"
            data-l10n-args=${JSON.stringify({
      hostname: this.hostname
    })}
            href=${this.hostname}
            rel="noreferrer"
            target="_blank"
          ></a>
        </div>
        <a
          slot="action"
          class="alert-learn-more-link"
          data-l10n-id="about-logins-vulnerable-alert-learn-more-link"
          href="https://support.mozilla.org/1/firefox/114.0.1/Darwin/en-CA/lockwise-alerts"
          rel="noreferrer"
          target="_blank"
        ></a>
      </login-alert>
    `;
  }
}
class LoginBreachAlert extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static get properties() {
    return {
      date: {
        type: Number,
        reflect: true
      },
      hostname: {
        type: String,
        reflect: true
      }
    };
  }
  constructor() {
    super();
    this.date = 0;
    this.hostname = "";
  }
  get displayHostname() {
    try {
      return new URL(this.hostname).hostname;
    } catch (err) {
      return this.hostname;
    }
  }
  render() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <link
        rel="stylesheet"
        href="${browser_components_aboutlogins_content_components_login_alert_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <login-alert
        variant="error"
        icon="chrome://browser/content/aboutlogins/icons/breached-website.svg"
        titleId="about-logins-breach-alert-title"
      >
        <div slot="content">
          <h4
            data-l10n-id="about-logins-breach-alert-date"
            data-l10n-args=${JSON.stringify({
      date: this.date
    })}
          ></h4>
          <span data-l10n-id="breach-alert-text"></span>
          <a
            data-l10n-id="about-logins-breach-alert-link"
            data-l10n-args=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.guard)([this.hostname], () => JSON.stringify({
      hostname: this.displayHostname
    }))}
            href=${this.hostname}
            rel="noreferrer"
            target="_blank"
          ></a>
        </div>
      </login-alert>
    `;
  }
}
customElements.define("login-vulnerable-password-alert", VulnerablePasswordAlert);
customElements.define("login-breach-alert", LoginBreachAlert);
customElements.define("login-alert", LoginAlert);

/***/ }),

/***/ 76638:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicLoginAlert": () => (/* binding */ BasicLoginAlert),
/* harmony export */   "LoginBreachAlert": () => (/* binding */ LoginBreachAlert),
/* harmony export */   "VulnerablePasswordAlert": () => (/* binding */ VulnerablePasswordAlert),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45717);
/* harmony import */ var _login_alert_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21870);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// eslint-disable-next-line import/no-unresolved


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/Credential Management/Login Alert",
  component: "login-alert"
});
window.MozXULElement.insertFTLIfNeeded("browser/aboutLogins.ftl");
const BasicLoginAlert = ({
  variant,
  icon
}) => {
  return lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
    <login-alert
      .variant=${variant}
      .icon=${icon}
      titleId="about-logins-login-intro-heading-message"
    >
      <a slot="action"> Some action </a>
      <div slot="content">
        Alert extra content, could be a description for more context.
      </div>
    </login-alert>
  `;
};
BasicLoginAlert.argTypes = {
  variant: {
    options: ["info", "error", "warning"],
    control: {
      type: "radio"
    },
    defaultValue: "info"
  },
  icon: {
    options: {
      info: "chrome://global/skin/icons/info-filled.svg",
      "breached-website": "chrome://browser/content/aboutlogins/icons/breached-website.svg",
      "vulnerable-password": "chrome://browser/content/aboutlogins/icons/vulnerable-password.svg"
    },
    control: {
      type: "select"
    },
    defaultValue: "chrome://global/skin/icons/info-filled.svg"
  }
};
const VulnerablePasswordAlert = ({
  hostname
}) => lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
    <login-vulnerable-password-alert
      .hostname=${hostname}
    ></login-vulnerable-password-alert>
  `;
VulnerablePasswordAlert.args = {
  hostname: "https://www.example.com"
};
const LoginBreachAlert = ({
  date,
  hostname
}) => lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
    <login-breach-alert
      .date=${date}
      .hostname=${hostname}
    ></login-breach-alert>
  `;
LoginBreachAlert.argTypes = {
  date: {
    control: {
      type: "date"
    },
    defaultValue: 1684849435571
  },
  hostname: {
    control: {
      type: "text"
    },
    defaultValue: "https://www.example.com"
  }
};

/***/ }),

/***/ 56355:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "login-alert.5d1637e293f3d7f018e3.css";

/***/ })

}]);
//# sourceMappingURL=login-alert-stories.7925d252.iframe.bundle.js.map