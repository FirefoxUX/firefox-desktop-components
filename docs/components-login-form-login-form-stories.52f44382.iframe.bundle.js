"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[4877],{

/***/ 55156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editableFieldTemplate": () => (/* binding */ editableFieldTemplate),
/* harmony export */   "stylesTemplate": () => (/* binding */ stylesTemplate)
/* harmony export */ });
/* harmony import */ var browser_components_aboutlogins_content_components_input_field_input_field_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64196);
/* harmony import */ var toolkit_themes_linux_global_in_content_common_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46565);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45717);


/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


const stylesTemplate = () => chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`
  <link rel="stylesheet" href="${toolkit_themes_linux_global_in_content_common_css__WEBPACK_IMPORTED_MODULE_1__}" />
  <link
    rel="stylesheet"
    href="${browser_components_aboutlogins_content_components_input_field_input_field_css__WEBPACK_IMPORTED_MODULE_0__}"
  />
`;
const editableFieldTemplate = ({
  type,
  value,
  disabled,
  required,
  onFocus,
  onBlur,
  labelL10nId,
  noteL10nId
}) => chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`
  <label
    for="input"
    class="field-label"
    data-l10n-id=${labelL10nId}
    tabindex="-1"
  >
  </label>
  <input
    id="input"
    class="input-field"
    type=${type}
    value=${value}
    aria-describedby="explainer"
    ?disabled=${disabled}
    ?required=${required}
    @focus=${onFocus}
    @blur=${onBlur}
  />
  <span
    id="explainer"
    role="note"
    class="explainer text-deemphasized"
    data-l10n-id=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(noteL10nId)}
  ></span>
`;

/***/ }),

/***/ 60891:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73689);
/* harmony import */ var _input_field_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55156);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



class LoginOriginField extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.MozLitElement {
  static properties = {
    value: {
      type: String,
      reflect: true
    },
    name: {
      type: String
    },
    readonly: {
      type: Boolean,
      reflect: true
    },
    required: {
      type: Boolean,
      reflect: true
    },
    onOriginClick: {
      type: Function
    }
  };
  static queries = {
    input: "input"
  };
  constructor() {
    super();
    this.value = "";
  }
  addHTTPSPrefix(e) {
    const input = e.composedTarget;
    let originValue = input.value.trim();
    if (!originValue) {
      return;
    }
    if (!originValue.match(/:\/\//)) {
      input.value = "https://" + originValue;
    }
  }
  get readonlyTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
      <label
        for="origin"
        class="field-label"
        data-l10n-id="login-item-origin-label"
      >
      </label>
      <a
        id="origin"
        class="origin-input"
        dir="auto"
        target="_blank"
        rel="noreferrer"
        name="origin"
        href=${this.value}
        @click=${this.onOriginClick}
      >
        ${this.value}
      </a>
    `;
  }
  render() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
      ${(0,_input_field_mjs__WEBPACK_IMPORTED_MODULE_2__.stylesTemplate)()}
      ${this.readonly ? this.readonlyTemplate : (0,_input_field_mjs__WEBPACK_IMPORTED_MODULE_2__.editableFieldTemplate)({
      type: "url",
      value: this.value,
      required: this.required,
      labelL10nId: "login-item-origin-label",
      noteL10nId: "passwords-origin-tooltip",
      onBlur: e => this.addHTTPSPrefix(e)
    })}
    `;
  }
}
customElements.define("login-origin-field", LoginOriginField);

/***/ }),

/***/ 54001:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73689);
/* harmony import */ var _input_field_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55156);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




class LoginPasswordField extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.MozLitElement {
  static CONCEALED_PASSWORD_TEXT = " ".repeat(8);
  static properties = {
    value: {
      type: String
    },
    name: {
      type: String
    },
    newPassword: {
      type: Boolean
    },
    visible: {
      type: Boolean,
      reflect: true
    },
    required: {
      type: Boolean,
      reflect: true
    },
    onRevealClick: {
      type: Function
    }
  };
  static queries = {
    input: "input",
    label: "label",
    button: "moz-button"
  };
  constructor() {
    super();
    this.value = "";
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("input", e => {
      this.value = e.composedTarget.value;
    });
  }
  get #type() {
    return this.visible ? "text" : "password";
  }
  get #password() {
    return !this.newPassword && !this.visible ? LoginPasswordField.CONCEALED_PASSWORD_TEXT : this.value;
  }
  #revealIconSrc(concealed) {
    return concealed ? "chrome://browser/content/aboutlogins/icons/password-hide.svg" : "chrome://browser/content/aboutlogins/icons/password.svg";
  }
  updated(changedProperties) {
    if (changedProperties.has("visible") && !changedProperties.visible) {
      this.input.selectionStart = this.value.length;
    }
  }
  render() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
      ${(0,_input_field_mjs__WEBPACK_IMPORTED_MODULE_2__.stylesTemplate)()}
      ${(0,_input_field_mjs__WEBPACK_IMPORTED_MODULE_2__.editableFieldTemplate)({
      type: this.#type,
      value: this.#password,
      labelId: "login-item-password-label",
      disabled: this.readonly,
      required: this.required,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      labelL10nId: "login-item-password-label",
      noteL10nId: "passwords-password-tooltip"
    })}
      <moz-button
        data-l10n-id=${this.visible ? "login-item-password-conceal-checkbox" : "login-item-password-reveal-checkbox"}
        class="reveal-password-button"
        type="icon ghost"
        iconSrc=${this.#revealIconSrc(this.visible)}
        @mousedown=${() => {
      /* Programmatically focus the button on mousedown instead of waiting for focus on click
       * because the blur event occurs before the click event.
       */
      this.button.focus();
    }}
        @click=${this.onRevealClick}
      ></moz-button>
    `;
  }
  handleFocus() {
    if (this.visible) {
      return;
    }
    this.onRevealClick();
  }
  handleBlur(ev) {
    if (ev.relatedTarget === this.button || ev.relatedTarget === this.label) {
      return;
    }
    if (!this.visible) {
      return;
    }
    this.onRevealClick();
  }
}
customElements.define("login-password-field", LoginPasswordField);

/***/ }),

/***/ 82578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73689);
/* harmony import */ var _input_field_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55156);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



class LoginUsernameField extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.MozLitElement {
  static properties = {
    value: {
      type: String,
      reflect: true
    },
    name: {
      type: String
    },
    readonly: {
      type: Boolean,
      reflect: true
    },
    required: {
      type: Boolean,
      reflect: true
    }
  };
  static queries = {
    input: "input"
  };
  constructor() {
    super();
    this.value = "";
  }
  render() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
      ${(0,_input_field_mjs__WEBPACK_IMPORTED_MODULE_2__.stylesTemplate)()}
      ${(0,_input_field_mjs__WEBPACK_IMPORTED_MODULE_2__.editableFieldTemplate)({
      type: "text",
      value: this.value,
      disabled: this.readonly,
      required: this.required,
      labelL10nId: "login-item-username-label",
      noteL10nId: "passwords-username-tooltip"
    })}
    `;
  }
}
customElements.define("login-username-field", LoginUsernameField);

/***/ }),

/***/ 45645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagePopup": () => (/* binding */ MessagePopup),
/* harmony export */   "OriginWarning": () => (/* binding */ OriginWarning),
/* harmony export */   "PasswordWarning": () => (/* binding */ PasswordWarning)
/* harmony export */ });
/* harmony import */ var browser_components_aboutlogins_content_components_login_message_popup_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63707);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73689);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



const stylesTemplate = () => chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html` <link
    rel="stylesheet"
    href="${browser_components_aboutlogins_content_components_login_message_popup_css__WEBPACK_IMPORTED_MODULE_0__}"
  />`;
const MessagePopup = ({
  l10nid,
  message,
  webTitle = "",
  role
}) => {
  return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html` <div class="tooltip-container" role=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(role)}>
    <div class="arrow-box">
      <p
        class="tooltip-message"
        data-l10n-id=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(l10nid)}
        data-l10n-args=${JSON.stringify({
    webTitle
  })}
      >
        ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(message)}
      </p>
    </div>
  </div>`;
};
class PasswordWarning extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static get properties() {
    return {
      isNewLogin: {
        type: Boolean,
        reflect: true
      },
      webTitle: {
        type: String,
        reflect: true
      },
      arrowDirection: {
        type: String
      },
      message: {
        type: String
      },
      role: {
        type: String
      }
    };
  }
  constructor() {
    super();
    this.isNewLogin = false;
    this.arrowDirection = "left";
  }
  render() {
    if (this.message) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`${stylesTemplate()}
      ${MessagePopup({
        message: this.message,
        role: this.role
      })}`;
    }
    return this.isNewLogin ? chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`${stylesTemplate()}
        ${MessagePopup({
      l10nid: "about-logins-add-password-tooltip",
      role: this.role
    })}` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`${stylesTemplate()}
        ${MessagePopup({
      l10nid: "about-logins-edit-password-tooltip",
      webTitle: this.webTitle,
      role: this.role
    })}`;
  }
}
class OriginWarning extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static get properties() {
    return {
      l10nId: {
        type: String
      },
      message: {
        type: String
      },
      arrowDirection: {
        type: String
      },
      role: {
        type: String
      }
    };
  }
  constructor() {
    super();
    this.arrowDirection = "left";
  }
  render() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`${stylesTemplate()}
    ${MessagePopup({
      l10nid: this.l10nId,
      message: this.message,
      role: this.role
    })}`;
  }
}
customElements.define("password-warning", PasswordWarning);
customElements.define("origin-warning", OriginWarning);

/***/ }),

/***/ 21668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginForm": () => (/* binding */ LoginForm)
/* harmony export */ });
/* harmony import */ var toolkit_components_satchel_megalist_content_components_login_form_login_form_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97246);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73689);
/* harmony import */ var chrome_browser_content_aboutlogins_components_input_field_login_origin_field_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60891);
/* harmony import */ var chrome_browser_content_aboutlogins_components_input_field_login_username_field_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82578);
/* harmony import */ var chrome_browser_content_aboutlogins_components_input_field_login_password_field_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54001);
/* harmony import */ var chrome_browser_content_aboutlogins_components_login_message_popup_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45645);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/* eslint-disable-next-line import/no-unassigned-import, mozilla/no-browser-refs-in-toolkit */

/* eslint-disable-next-line import/no-unassigned-import, mozilla/no-browser-refs-in-toolkit */

/* eslint-disable-next-line import/no-unassigned-import, mozilla/no-browser-refs-in-toolkit */


/* eslint-disable-next-line import/no-unassigned-import, mozilla/no-browser-refs-in-toolkit */

class LoginForm extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    type: {
      type: String,
      reflect: true
    },
    onSaveClick: {
      type: Function
    },
    onDeleteClick: {
      type: Function
    },
    onClose: {
      type: Function
    },
    onOriginClick: {
      type: Function
    },
    originValue: {
      type: String
    },
    usernameValue: {
      type: String
    },
    passwordValue: {
      type: String
    },
    passwordVisible: {
      type: Boolean
    },
    onPasswordRevealClick: {
      type: Function
    },
    _showDeleteCard: {
      type: Boolean,
      state: true
    }
  };
  static queries = {
    formEl: "form",
    originField: "login-origin-field",
    usernameField: "login-username-field",
    passwordField: "login-password-field",
    originWarning: "origin-warning",
    passwordWarning: "password-warning"
  };
  constructor() {
    super();
    this.originValue = "";
    this.usernameValue = "";
    this.passwordValue = "";
    this._showDeleteCard = false;
    this.onPasswordRevealClick = () => {
      this.passwordVisible = !this.passwordVisible;
    };
  }
  #removeWarning(warning) {
    if (warning.classList.contains("invalid-input")) {
      warning.classList.remove("invalid-input");
    }
  }
  #shouldShowWarning(input, warning) {
    if (!input.checkValidity()) {
      warning.setAttribute("message", input.validationMessage);
      warning.classList.add("invalid-input");
      return true;
    }
    this.#removeWarning(warning);
    return false;
  }
  onInput(e) {
    const field = e.target;
    const warning = field.name === "origin" ? this.originWarning : this.passwordWarning;
    if (field.input.checkValidity()) {
      this.#removeWarning(warning);
    }
  }
  onSubmit(e) {
    e.preventDefault();
    if (this.type !== "edit" && this.#shouldShowWarning(this.originField.input, this.originWarning)) {
      return;
    }
    if (this.#shouldShowWarning(this.passwordField.input, this.passwordWarning)) {
      return;
    }
    const loginForm = {
      origin: this.originValue || this.originField.input.value,
      username: this.usernameField.input.value.trim(),
      password: this.passwordField.value
    };
    this.onSaveClick(loginForm);
  }
  #toggleDeleteCard() {
    this._showDeleteCard = !this._showDeleteCard;
  }
  #renderDeleteCard() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html` <link
        rel="stylesheet"
        href="${toolkit_components_satchel_megalist_content_components_login_form_login_form_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <moz-card class="remove-login-card">
        <div class="remove-card-back">
          <moz-button
            type="icon ghost"
            iconSrc="chrome://browser/skin/back.svg"
            @click=${this.#toggleDeleteCard}
          >
          </moz-button>
          <p data-l10n-id="passwords-remove-login-card-back-message"></p>
        </div>
        <div class="remove-card-text">
          <h3 data-l10n-id="passwords-remove-login-card-title"></h3>
          <p data-l10n-id="passwords-remove-login-card-message"></p>
        </div>
        <moz-button-group>
          <moz-button
            data-l10n-id="passwords-remove-login-card-cancel-button"
            @click=${this.#toggleDeleteCard}
          >
          </moz-button>
          <moz-button
            type="destructive"
            data-l10n-id="passwords-remove-login-card-remove-button"
            @click=${this.onDeleteClick}
          >
          </moz-button>
        </moz-button-group>
      </moz-card>`;
  }
  render() {
    if (this._showDeleteCard) {
      return this.#renderDeleteCard();
    }
    const heading = this.type !== "edit" ? "passwords-create-label" : "passwords-edit-label";
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`<link
        rel="stylesheet"
        href="${toolkit_components_satchel_megalist_content_components_login_form_login_form_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <moz-card>
        ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.when)(this.type === "edit", () => chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
            <div class="delete-login-button-container">
              <moz-button
                class="delete-login-button"
                data-l10n-id="passwords-remove-label"
                type="icon"
                iconSrc="chrome://global/skin/icons/delete.svg"
                @click=${this.#toggleDeleteCard}
              ></moz-button>
            </div>
          `)}

        <form
          role="region"
          aria-label=${heading}
          @submit=${e => this.onSubmit(e)}
        >
          <moz-fieldset data-l10n-id=${heading}>
            <div class="field-container">
              <login-origin-field
                name="origin"
                required
                ?readonly=${this.type === "edit"}
                value=${this.originValue}
                @input=${e => this.onInput(e)}
                .onOriginClick=${this.onOriginClick}
              >
              </login-origin-field>
              <origin-warning
                role="alert"
                arrowdirection="down"
              ></origin-warning>
            </div>
            <login-username-field
              name="username"
              value=${this.usernameValue}
            ></login-username-field>
            <div class="field-container">
              <login-password-field
                name="password"
                required
                ?visible=${this.passwordVisible}
                ?newPassword=${this.type !== "edit"}
                .value=${this.passwordValue}
                .onRevealClick=${this.onPasswordRevealClick}
                @input=${e => this.onInput(e)}
              ></login-password-field>
              <password-warning
                role="alert"
                isNewLogin
                arrowdirection="down"
              ></password-warning>
            </div>
            <moz-button-group>
              <moz-button
                data-l10n-id="login-item-cancel-button"
                @click=${this.onClose}
              ></moz-button>
              <moz-button
                data-l10n-id="login-item-save-new-button"
                type="primary"
                @click=${() => this.formEl.requestSubmit()}
              >
              </moz-button>
            </moz-button-group>
          </moz-fieldset>
        </form>
      </moz-card>`;
  }
}
customElements.define("login-form", LoginForm);

/***/ }),

/***/ 7523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddLoginForm": () => (/* binding */ AddLoginForm),
/* harmony export */   "EditLoginForm": () => (/* binding */ EditLoginForm),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45717);
/* harmony import */ var _login_form_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21668);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// eslint-disable-next-line import/no-unresolved


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/Credential Management/Login Form",
  component: "login-form"
});
window.MozXULElement.insertFTLIfNeeded("preview/megalist.ftl");
const AddLoginForm = () => lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`<login-form type="add"></login-form>`;
const EditLoginForm = () => lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`<login-form type="edit"></login-form>`;

/***/ }),

/***/ 64196:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "input-field.bcaff3aef712aca9f6fa.css";

/***/ }),

/***/ 63707:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "login-message-popup.3384c64cdc31112aad49.css";

/***/ }),

/***/ 97246:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "login-form.61e65675456ca3ab84fa.css";

/***/ }),

/***/ 46565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "common.d2c1b3186a09c5fd1fdd.css";

/***/ })

}]);
//# sourceMappingURL=components-login-form-login-form-stories.52f44382.iframe.bundle.js.map