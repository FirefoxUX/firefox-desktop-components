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
  static shadowRootOptions = {
    ...chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement.shadowRootOptions,
    delegatesFocus: true
  };
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
  #handleLineClick() {
    if (!this.#canCopy()) {
      return;
    }
    if (!this.lineContainer.classList.contains("copied")) {
      this.lineContainer.classList.add("copied");
      this.#copyTimeoutID = setTimeout(() => {
        this.lineContainer.classList.remove("copied");
        this.#copyTimeoutID = null;
      }, 4000);
    }
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
      <div
        class="line-container"
        tabindex="0"
        @click=${() => this.#handleLineClick()}
        @keypress=${e => {
      if (e.code == "Enter") {
        this.#handleLineClick();
      }
    }}
      >
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
                src="chrome://global/skin/icons/check.svg"
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
  render() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html` <link
        rel="stylesheet"
        href="${toolkit_components_satchel_megalist_content_LoginLine_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <login-line
        tabIndex="0"
        data-l10n-id="password-login-line"
        lineType="password"
        inputType=${this.#inputType}
        labelL10nId=${this.labelL10nId}
        .value=${this.#displayValue}
        ?alert=${this.alert}
        @click=${this.onLineClick}
        @keypress=${e => {
      if (e.key === "Enter") {
        this.onLineClick();
      }
    }}
      >
      </login-line>
      <div class="reveal-button-container">
        <moz-button
          class="reveal-button"
          type="icon ghost"
          data-l10n-id=${this.#revealBtnLabel}
          iconSrc=${this.#revealIconSrc()}
          @mousedown=${e => e.preventDefault()}
          @keypress=${e => {
      if (e.key === "Enter") {
        this.revealBtn.setAttribute("data-l10n-id", this.#revealBtnLabel);
        this.loginLine.focus();
        this.onButtonClick();
      }
    }}
          @click=${() => {
      this.revealBtn.setAttribute("data-l10n-id", this.#revealBtnLabel);
      this.onButtonClick();
    }}
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
const LOGIN_FIELDS_LENGTH = 3;
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
    }
  };
  static shadowRootOptions = {
    ...chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement.shadowRootOptions,
    delegatesFocus: true
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
   * @returns {HTMLDivElement | MozButton | null} The first focusable element of the next password-card.
   */
  #getNextFocusableElement(keyCode) {
    const cardIndex = Math.floor(this.origin.lineIndex / LOGIN_FIELDS_LENGTH);
    const passwordCards = this.parentNode.querySelectorAll("password-card");
    const nextCardIndex = cardIndex + DIRECTIONS[keyCode];
    if (nextCardIndex < 0 || nextCardIndex >= passwordCards.length) {
      return null;
    }
    const nextPasswordCard = passwordCards[nextCardIndex];
    return keyCode === "ArrowDown" ? nextPasswordCard.originLine.lineContainer : nextPasswordCard.editBtn;
  }
  async firstUpdated() {
    this.#focusableElementsMap = new Map();
    let index = 0;
    for (const el of this.shadowRoot.querySelectorAll(".line-item")) {
      await el.updateComplete;
      if (el === this.passwordLine) {
        this.#focusableElementsMap.set(el.loginLine.lineContainer, index++);
        this.#focusableElementsMap.set(el.revealBtn.buttonEl, index++);
      } else {
        this.#focusableElementsMap.set(el.lineContainer, index++);
      }
    }
    this.#focusableElementsMap.set(this.editBtn.buttonEl, index);
    this.#focusableElementsList = Array.from(this.#focusableElementsMap.keys());
  }
  #handleKeydown(element, e) {
    const targetIsPasswordLine = this.passwordLine.loginLine.lineContainer === element;
    const targetIsRevealButton = this.passwordLine.revealBtn.buttonEl === element;
    const focusInternal = offset => {
      const index = this.#focusableElementsMap.get(element);
      this.#focusableElementsList[index + offset].focus();
    };
    switch (e.code) {
      case "ArrowUp":
        if (this.#focusableElementsMap.get(element) === 0) {
          const nextFocusableElement = this.#getNextFocusableElement(e.code);
          nextFocusableElement?.focus();
        } else if (targetIsRevealButton) {
          focusInternal(-2);
        } else {
          focusInternal(DIRECTIONS[e.code]);
        }
        break;
      case "ArrowDown":
        if (this.#focusableElementsMap.get(element) === this.#focusableElementsList.length - 1) {
          const nextFocusableElement = this.#getNextFocusableElement(e.code);
          nextFocusableElement?.focus();
        } else if (targetIsPasswordLine) {
          focusInternal(2);
        } else {
          focusInternal(DIRECTIONS[e.code]);
        }
        break;
      case "ArrowRight":
        if (targetIsPasswordLine) {
          focusInternal(DIRECTIONS[e.code]);
        }
        break;
      case "ArrowLeft":
        if (targetIsRevealButton) {
          focusInternal(DIRECTIONS[e.code]);
        }
        break;
      default:
        return;
    }
    e.stopPropagation();
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("keydown", e => {
      const element = e.composedTarget;
      this.#handleKeydown(element, e);
    }, {
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
  onCopyButtonClick(lineIndex) {
    this.handleCommand("Copy", lineIndex);
  }
  onPasswordRevealClick(concealed, lineIndex) {
    if (concealed) {
      this.handleCommand("Reveal", lineIndex);
    } else {
      this.handleCommand("Conceal", lineIndex);
    }
  }
  renderOriginField() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <login-line
        role="option"
        tabIndex="0"
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
        @click=${() => this.#onOriginLineClick(this.origin.lineIndex)}
        @keypress=${e => {
      if (e.key === "Enter") {
        this.#onOriginLineClick(this.origin.lineIndex);
      }
    }}
      >
      </login-line>
    `;
  }
  renderUsernameField() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <login-line
        tabIndex="0"
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
        ?alert=${this.username.value.length === 0}
        @click=${() => this.onCopyButtonClick(this.username.lineIndex)}
        @keypress=${e => {
      if (e.key === "Enter") {
        this.onCopyButtonClick(this.username.lineIndex);
      }
    }}
      >
      </login-line>
    `;
  }
  renderPasswordField() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <concealed-login-line
        role="option"
        class="line-item"
        labelL10nId="passwords-password-label"
        .value=${this.password.value}
        .visible=${!this.password.concealed}
        ?alert=${this.password.vulnerable}
        .onLineClick=${() => this.onCopyButtonClick(this.password.lineIndex)}
        }}
        .onButtonClick=${() => this.onPasswordRevealClick(this.password.concealed, this.password.lineIndex)}
      >
      </concealed-login-line>
    `;
  }
  renderButton() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`<div class="edit-line-container" role="option">
      <moz-button
        data-l10n-id="edit-login-button"
        class="edit-button"
        @mousedown=${e => e.preventDefault()}
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

module.exports = __webpack_require__.p + "LoginLine.17a90dac449f50455982.css";

/***/ }),

/***/ 62525:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "PasswordCard.d0121da2c2cc38f0b9d9.css";

/***/ })

}]);
//# sourceMappingURL=PasswordCard-stories.a3b4887e.iframe.bundle.js.map