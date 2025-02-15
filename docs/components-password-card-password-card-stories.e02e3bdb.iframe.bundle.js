"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[3475],{

/***/ 92743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var toolkit_components_satchel_megalist_content_components_login_line_login_line_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5363);
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
        href="${toolkit_components_satchel_megalist_content_components_login_line_login_line_css__WEBPACK_IMPORTED_MODULE_0__}"
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
    const dataL10nId = this.alert ? "password-login-line-with-alert" : "password-login-line";
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html` <link
        rel="stylesheet"
        href="${toolkit_components_satchel_megalist_content_components_login_line_login_line_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <login-line
        role="option"
        tabindex="-1"
        data-l10n-id=${dataL10nId}
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

/***/ 88176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordCard": () => (/* binding */ PasswordCard)
/* harmony export */ });
/* harmony import */ var toolkit_components_satchel_megalist_content_components_password_card_password_card_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53378);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73689);
/* harmony import */ var chrome_global_content_megalist_components_login_line_login_line_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92743);

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
    },
    onPasswordRevealClick: {
      type: Function
    },
    handleEditButtonClick: {
      type: Function
    },
    handleViewAlertClick: {
      type: Function
    }
  };
  static get queries() {
    return {
      originLine: ".line-item[linetype='origin']",
      usernameLine: ".line-item[linetype='username']",
      passwordLine: "concealed-login-line",
      editBtn: ".edit-button",
      viewAlertBtn: ".view-alert-button"
    };
  }
  #focusableElementsList;
  #focusableElementsMap;
  #hasAlert() {
    return this.origin.breached || !this.username.value.length || this.password.vulnerable;
  }
  #getNextFocusableElement() {
    return this.nextElementSibling?.originLine;
  }
  #getPrevFocusableElement() {
    const prevSibling = this.previousElementSibling;
    if (!prevSibling) {
      return null;
    }
    return prevSibling.#hasAlert() ? prevSibling.viewAlertBtn : prevSibling.editBtn;
  }
  async firstUpdated() {
    this.#focusableElementsMap = new Map();
    const buttons = this.shadowRoot.querySelectorAll("moz-button");
    const lineItems = this.shadowRoot.querySelectorAll(".line-item");
    let index = 0;
    for (const el of lineItems) {
      if (el === this.passwordLine) {
        await el.updateComplete;
        this.#focusableElementsMap.set(el.loginLine, index++);
        this.#focusableElementsMap.set(el.revealBtn.buttonEl, index++);
      } else {
        this.#focusableElementsMap.set(el, index++);
      }
    }
    for (const el of buttons) {
      this.#focusableElementsMap.set(el.buttonEl, index);
      index++;
    }
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
          this.#getPrevFocusableElement()?.focus();
        } else {
          focusInternal(DIRECTIONS[e.code]);
        }
        break;
      case "ArrowDown":
        e.preventDefault();
        if (this.#focusableElementsMap.get(element) === this.#focusableElementsList.length - 1) {
          this.#getNextFocusableElement()?.focus();
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
  #recordInteractionType(type) {
    Glean.contextualManager.recordsInteraction.record({
      interaction_type: type
    });
  }
  async onEditButtonClick() {
    this.#recordInteractionType("edit");
    const isAuthenticated = await this.reauthCommandHandler(() => this.messageToViewModel("Command", {
      commandId: "Edit",
      snapshotId: this.password.lineIndex
    }));
    if (!isAuthenticated) {
      return;
    }
    this.handleEditButtonClick();
  }
  onViewAlertClick() {
    this.handleViewAlertClick();
    this.#recordInteractionType("view_alert");
  }
  #onOriginLineClick(lineIndex) {
    this.handleCommand("OpenLink", lineIndex);
    this.#recordInteractionType("url_navigate");
  }
  #onCopyButtonClick(lineIndex) {
    this.handleCommand("Copy", lineIndex);
  }
  renderOriginField() {
    const dataL10nId = this.origin.breached ? "origin-login-line-with-alert" : "origin-login-line";
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <login-line
        tabindex="-1"
        role="option"
        class="line-item"
        data-l10n-id=${dataL10nId}
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
    const dataL10nId = !this.username.value.length ? "username-login-line-with-alert" : "username-login-line";
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <login-line
        tabindex="-1"
        role="option"
        class="line-item"
        data-l10n-id=${dataL10nId}
        data-l10n-args="${JSON.stringify({
      username: this.username.value
    })}"
        inputType="text"
        lineType="username"
        labelL10nId="passwords-username-label"
        .value=${this.username.value}
        .onLineClick=${() => {
      this.#onCopyButtonClick(this.username.lineIndex);
      this.#recordInteractionType("copy_username");
      return true;
    }}
        ?alert=${!this.username.value.length}
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
        .onLineClick=${() => {
      this.reauthCommandHandler(() => {
        this.#onCopyButtonClick(this.password.lineIndex);
      });
      this.#recordInteractionType("copy_password");
    }}
        .onButtonClick=${() => {
      const interactionType = this.password.concealed ? "view_password" : "hide_password";
      this.#recordInteractionType(interactionType);
      this.reauthCommandHandler(() => this.onPasswordRevealClick(this.password.concealed, this.password.lineIndex));
    }}
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
  renderViewAlertField() {
    if (!this.#hasAlert()) {
      return "";
    }
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <moz-message-bar type="warning" data-l10n-id="view-alert-heading">
        <moz-button
          class="view-alert-button"
          data-l10n-id="view-alert-button"
          slot="actions"
          type="icon"
          iconSrc="chrome://browser/skin/forward.svg"
          @click=${this.onViewAlertClick}
        >
        </moz-button>
      </moz-message-bar>
    `;
  }
  render() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <link
        rel="stylesheet"
        href="${toolkit_components_satchel_megalist_content_components_password_card_password_card_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      ${this.renderOriginField()} ${this.renderUsernameField()}
      ${this.renderPasswordField()} ${this.renderButton()}
      ${this.renderViewAlertField()}
    `;
  }
}
customElements.define("password-card", PasswordCard);

/***/ }),

/***/ 79958:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllAlertsOn": () => (/* binding */ AllAlertsOn),
/* harmony export */   "Default": () => (/* binding */ Default),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45717);
/* harmony import */ var _password_card_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88176);
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

/***/ 5363:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "login-line.6204908c1a0e679d1eb4.css";

/***/ }),

/***/ 53378:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "password-card.3675af91aff9e58139b0.css";

/***/ })

}]);
//# sourceMappingURL=components-password-card-password-card-stories.e02e3bdb.iframe.bundle.js.map