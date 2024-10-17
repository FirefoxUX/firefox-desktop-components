"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[2303],{

/***/ 3186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var toolkit_components_satchel_megalist_content_LoginLine_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25797);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73689);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



class LoginLine extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    value: {
      type: String
    },
    labelL10nId: {
      type: String
    },
    lineType: {
      type: String
    },
    inputType: {
      type: String
    },
    favIcon: {
      type: String
    },
    alert: {
      type: Boolean
    },
    onLineClick: {
      type: Function
    }
  };
  #copyTimeoutID;
  static get queries() {
    return {
      lineContainer: ".line-container"
    };
  }
  #canCopy() {
    return this.lineType !== "origin";
  }
  #addCopyAttr() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.#canCopy() ? "data-after" : undefined);
  }
  #handleCopyAnimation() {
    if (!this.lineContainer.classList.contains("copied")) {
      this.lineContainer.classList.add("copied");
      this.#copyTimeoutID = setTimeout(() => {
        this.lineContainer.classList.remove("copied");
        this.#copyTimeoutID = null;
      }, 4000);
    }
  }
  async #onClick() {
    const isAuthorized = await this.onLineClick();
    if (!isAuthorized || !this.#canCopy()) {
      return;
    }
    this.#handleCopyAnimation();
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("click", this.#onClick);
    this.addEventListener("keypress", async e => {
      if (e.code === "Enter" || e.code === "Space") {
        e.preventDefault();
        await this.#onClick();
      }
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.#copyTimeoutID) {
      clearTimeout(this.#copyTimeoutID);
    }
  }
  constructor() {
    super();
    this.favIcon = "";
    this.#copyTimeoutID = null;
  }
  render() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <link
        rel="stylesheet"
        href="${toolkit_components_satchel_megalist_content_LoginLine_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <div class="line-container">
        <div class="input-container">
          <div class="label-container">
            <label
              data-l10n-id=${this.labelL10nId}
              data-l10n-attrs=${this.#addCopyAttr()}
              class="input-label"
              for="login-line-input"
            ></label>
            ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.when)(this.alert, () => chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html` <img
                  data-l10n-id="alert-icon"
                  class="alert-icon"
                  src="chrome://global/skin/icons/warning-fill-12.svg"
                />`)}
          </div>
          <div class="value-container">
            ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.when)(this.favIcon, () => chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html` <img
                  data-l10n-id="website-icon"
                  class="fav-icon"
                  src=${this.favIcon}
                />`)}
            <input
              class="input-field"
              id="login-line-input"
              value=${this.value}
              type=${this.inputType}
              readonly
            />
          </div>
        </div>
        ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.when)(this.#canCopy(), () => {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
            <div class="copy-container">
              <img
                data-l10n-id="copy-icon"
                class="copy-icon"
                src="chrome://global/skin/icons/edit-copy.svg"
              />
              <img
                data-l10n-id="check-icon"
                class="check-icon"
                src="chrome://global/skin/icons/check-filled.svg"
              />
            </div>
          `;
    })}
      </div>
    `;
  }
}
class ConcealedLoginLine extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    value: {
      type: String
    },
    labelL10nId: {
      type: String
    },
    alert: {
      type: Boolean
    },
    visible: {
      type: Boolean
    },
    onLineClick: {
      type: Function
    },
    onButtonClick: {
      type: Function
    }
  };
  static CONCEALED_VALUE_TEXT = " ".repeat(8);
  static get queries() {
    return {
      loginLine: "login-line",
      revealBtn: "moz-button"
    };
  }
  get #inputType() {
    return !this.visible ? "password" : "text";
  }
  get #displayValue() {
    return !this.visible ? ConcealedLoginLine.CONCEALED_VALUE_TEXT : this.value;
  }
  get #revealBtnLabel() {
    return !this.visible ? "show-password-button" : "hide-password-button";
  }
  #revealIconSrc() {
    return this.visible ? /* eslint-disable-next-line mozilla/no-browser-refs-in-toolkit */
    "chrome://browser/content/aboutlogins/icons/password-hide.svg" : /* eslint-disable-next-line mozilla/no-browser-refs-in-toolkit */
    "chrome://browser/content/aboutlogins/icons/password.svg";
  }
  async #onRevealButtonClick() {
    const isAuthorized = await this.onButtonClick();
    if (!isAuthorized) {
      return;
    }
    this.revealBtn.setAttribute("data-l10n-id", this.#revealBtnLabel);
  }
  render() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html` <link
        rel="stylesheet"
        href="${toolkit_components_satchel_megalist_content_LoginLine_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <login-line
        role="option"
        tabindex="-1"
        data-l10n-id="password-login-line"
        lineType="password"
        inputType=${this.#inputType}
        labelL10nId=${this.labelL10nId}
        .value=${this.#displayValue}
        ?alert=${this.alert}
        .onLineClick=${this.onLineClick}
        }
      >
      </login-line>
      <div class="reveal-button-container">
        <moz-button
          role="option"
          class="reveal-button"
          type="icon ghost"
          data-l10n-id=${this.#revealBtnLabel}
          iconSrc=${this.#revealIconSrc()}
          @keypress=${async e => {
      if (e.code === "Enter") {
        await this.#onRevealButtonClick();
      }
    }}
          @click=${this.#onRevealButtonClick}
        ></moz-button>
      </div>`;
  }
}
customElements.define("login-line", LoginLine);
customElements.define("concealed-login-line", ConcealedLoginLine);

/***/ }),

/***/ 63090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordCard": () => (/* binding */ PasswordCard)
/* harmony export */ });
/* harmony import */ var toolkit_components_satchel_megalist_content_PasswordCard_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62525);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73689);
/* harmony import */ var chrome_global_content_megalist_LoginLine_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3186);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



/* eslint-disable-next-line import/no-unassigned-import */

const DIRECTIONS = {
  ArrowUp: -1,
  ArrowLeft: -1,
  ArrowDown: 1,
  ArrowRight: 1
};
class PasswordCard extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    origin: {
      type: Object
    },
    username: {
      type: Object
    },
    password: {
      type: Object
    },
    messageToViewModel: {
      type: Function
    },
    reauthCommandHandler: {
      type: Function
    }
  };
  static get queries() {
    return {
      originLine: ".line-item[linetype='origin']",
      usernameLine: ".line-item[linetype='username']",
      passwordLine: "concealed-login-line",
      editBtn: ".edit-button"
    };
  }
  #focusableElementsList;
  #focusableElementsMap;

  /**
   * Returns the first focusable element of the next password card componenet.
   * If the user is navigating down, then the next focusable element should be the edit button,
   * and if the user is navigating up, then it should be the origin line.
   *
   * @param {string} keyCode - The code associated with a keypress event. Either 'ArrowUp' or 'ArrowDown'.
   * @returns {HTMLElement | null} The first focusable element of the next password-card.
   */
  #getNextFocusableElement(keyCode) {
    return keyCode === "ArrowDown" ? this.nextElementSibling?.originLine : this.previousElementSibling?.editBtn;
  }
  async firstUpdated() {
    this.#focusableElementsMap = new Map();
    let index = 0;
    for (const el of this.shadowRoot.querySelectorAll(".line-item")) {
      if (el === this.passwordLine) {
        await el.updateComplete;
        this.#focusableElementsMap.set(el.loginLine, index++);
        this.#focusableElementsMap.set(el.revealBtn.buttonEl, index++);
      } else {
        this.#focusableElementsMap.set(el, index++);
      }
    }
    this.#focusableElementsMap.set(this.editBtn.buttonEl, index);
    this.#focusableElementsList = Array.from(this.#focusableElementsMap.keys());
  }
  #handleKeydown(e) {
    const element = e.composedTarget;
    const focusInternal = offset => {
      const index = this.#focusableElementsMap.get(element);
      this.#focusableElementsList[index + offset].focus();
    };
    switch (e.code) {
      case "ArrowUp":
        e.preventDefault();
        if (this.#focusableElementsMap.get(element) === 0) {
          this.#getNextFocusableElement(e.code)?.focus();
        } else {
          focusInternal(DIRECTIONS[e.code]);
        }
        break;
      case "ArrowDown":
        e.preventDefault();
        if (this.#focusableElementsMap.get(element) === this.#focusableElementsList.length - 1) {
          this.#getNextFocusableElement(e.code)?.focus();
        } else {
          focusInternal(DIRECTIONS[e.code]);
        }
        break;
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("keydown", e => this.#handleKeydown(e), {
      capture: true
    });
  }
  handleCommand(commandId, lineIndex) {
    this.messageToViewModel("Command", {
      commandId,
      snapshotId: lineIndex
    });
  }
  onEditButtonClick() {
    // TODO: Implement me!
  }
  #onOriginLineClick(lineIndex) {
    this.handleCommand("OpenLink", lineIndex);
  }
  #onCopyButtonClick(lineIndex) {
    this.handleCommand("Copy", lineIndex);
  }
  #onPasswordRevealClick(concealed, lineIndex) {
    if (concealed) {
      this.handleCommand("Reveal", lineIndex);
    } else {
      this.handleCommand("Conceal", lineIndex);
    }
  }
  renderOriginField() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <login-line
        tabindex="-1"
        role="option"
        class="line-item"
        data-l10n-id="origin-login-line"
        data-l10n-args="${JSON.stringify({
      url: this.origin.value
    })}"
        inputType="text"
        lineType="origin"
        labelL10nId="passwords-origin-label"
        .value=${this.origin.value}
        .favIcon=${this.origin.valueIcon}
        ?alert=${this.origin.breached}
        .onLineClick=${() => {
      this.#onOriginLineClick(this.origin.lineIndex);
      return true;
    }}
      >
      </login-line>
    `;
  }
  renderUsernameField() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <login-line
        tabindex="-1"
        role="option"
        class="line-item"
        data-l10n-id="username-login-line"
        data-l10n-args="${JSON.stringify({
      username: this.username.value
    })}"
        inputType="text"
        lineType="username"
        labelL10nId="passwords-username-label"
        .value=${this.username.value}
        .onLineClick=${() => {
      this.#onCopyButtonClick(this.username.lineIndex);
      return true;
    }}
        ?alert=${this.username.value.length === 0}
      >
      </login-line>
    `;
  }
  renderPasswordField() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <concealed-login-line
        class="line-item"
        labelL10nId="passwords-password-label"
        .value=${this.password.value}
        .visible=${!this.password.concealed}
        ?alert=${this.password.vulnerable}
        .onLineClick=${() => this.reauthCommandHandler(() => this.#onCopyButtonClick(this.password.lineIndex))}
        .onButtonClick=${() => this.reauthCommandHandler(() => this.#onPasswordRevealClick(this.password.concealed, this.password.lineIndex))}
      >
      </concealed-login-line>
    `;
  }
  renderButton() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`<div class="edit-line-container" role="option">
      <moz-button
        data-l10n-id="edit-login-button"
        class="edit-button"
        @click=${this.onEditButtonClick}
      ></moz-button>
    </div>`;
  }
  render() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <link
        rel="stylesheet"
        href="${toolkit_components_satchel_megalist_content_PasswordCard_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      ${this.renderOriginField()} ${this.renderUsernameField()}
      ${this.renderPasswordField()} ${this.renderButton()}
    `;
  }
}
customElements.define("password-card", PasswordCard);

/***/ }),

/***/ 2869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllAlertsOn": () => (/* binding */ AllAlertsOn),
/* harmony export */   "Default": () => (/* binding */ Default),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45717);
/* harmony import */ var _PasswordCard_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63090);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// eslint-disable-next-line import/no-unresolved


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/Credential Management/Password Card",
  component: "PasswordCard",
  argTypes: {
    website: {
      control: {
        type: "object"
      }
    },
    username: {
      control: {
        type: "object"
      }
    },
    password: {
      control: {
        type: "object"
      }
    }
  }
});
window.MozXULElement.insertFTLIfNeeded("preview/megalist.ftl");
const Template = ({
  website,
  username,
  password
}) => {
  return lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
    <password-card
      role="group"
      .origin=${website}
      .username=${username}
      .password=${password}
      .messageToViewModel=${() => {}}
      .reauthCommandHandler=${() => true}
    >
    </password-card>
  `;
};
const Default = Template.bind({});
Default.args = {
  website: {
    value: "website.com",
    breached: false,
    valueIcon: "chrome://global/skin/icons/defaultFavicon.svg"
  },
  username: {
    value: "username"
  },
  password: {
    value: "password",
    vulnerable: false,
    concealed: true
  }
};
const AllAlertsOn = Template.bind({});
AllAlertsOn.args = {
  website: {
    value: "website.com",
    breached: true,
    valueIcon: "chrome://global/skin/icons/defaultFavicon.svg"
  },
  username: {
    value: ""
  },
  password: {
    value: "password",
    vulnerable: true,
    concealed: true
  }
};

/***/ }),

/***/ 25797:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "LoginLine.6d71ed0ed61d44a370d6.css";

/***/ }),

/***/ 62525:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "PasswordCard.d0121da2c2cc38f0b9d9.css";

/***/ })

}]);
//# sourceMappingURL=PasswordCard-stories.28b04298.iframe.bundle.js.map