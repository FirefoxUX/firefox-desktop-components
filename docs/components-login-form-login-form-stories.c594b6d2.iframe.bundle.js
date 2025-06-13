"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[6369],{

/***/ 1132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginForm: () => (/* binding */ LoginForm)
/* harmony export */ });
/* harmony import */ var toolkit_components_satchel_megalist_content_components_login_form_login_form_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27064);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11540);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48334);
/* harmony import */ var chrome_browser_content_aboutlogins_components_input_field_login_origin_field_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5314);
/* harmony import */ var chrome_browser_content_aboutlogins_components_input_field_login_username_field_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47844);
/* harmony import */ var chrome_browser_content_aboutlogins_components_input_field_login_password_field_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38507);
/* harmony import */ var chrome_browser_content_aboutlogins_components_login_message_popup_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95491);

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
  #shouldShowWarning(field, input, warning) {
    if (!input.checkValidity()) {
      // FIXME: for some reason checkValidity does not apply the :invalid style
      // to the field. For now, we reset the input value to "" apply :invalid
      // styling.
      input.value = "";
      input.focus();
      warning.setAttribute("message", input.validationMessage);
      warning.classList.add("invalid-input");
      field.setAttribute("aria-describedby", warning.id);
      return true;
    }
    field.removeAttribute("aria-describedby");
    this.#removeWarning(warning);
    return false;
  }
  onInput(e) {
    const field = e.target;
    const warning = field.name === "origin" ? this.originWarning : this.passwordWarning;
    if (field.input.checkValidity()) {
      this.#removeWarning(warning);
      field.removeAttribute("aria-describedby");
    }
  }
  onCancel(e) {
    e.preventDefault();
    const loginForm = {
      origin: this.originValue || this.originField.input.value,
      username: this.usernameField.input.value.trim(),
      password: this.passwordField.value
    };
    this.onClose(loginForm);
  }
  onSubmit(e) {
    e.preventDefault();
    if (!this.#isFormValid()) {
      return;
    }
    const loginForm = {
      origin: this.originValue || this.originField.input.value,
      username: this.usernameField.input.value.trim(),
      password: this.passwordField.value
    };
    this.onSaveClick(loginForm);
  }
  #isFormValid() {
    let originError = false;
    let passwordError = false;
    passwordError = this.#shouldShowWarning(this.passwordField, this.passwordField.input, this.passwordWarning);
    if (this.type !== "edit") {
      originError = this.#shouldShowWarning(this.originField, this.originField.input, this.originWarning);
    }
    if (passwordError || originError) {
      return false;
    }
    return true;
  }
  #toggleDeleteCard() {
    this._showDeleteCard = !this._showDeleteCard;
  }
  #renderDeleteCard() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)` <link
        rel="stylesheet"
        href="${toolkit_components_satchel_megalist_content_components_login_form_login_form_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <moz-card class="remove-login-card">
        <div class="remove-card-back">
          <moz-button
            type="icon ghost"
            iconSrc="chrome://browser/skin/back.svg"
            data-l10n-id="contextual-manager-passwords-remove-login-card-back-message"
            @click=${this.#toggleDeleteCard}
          >
          </moz-button>
        </div>
        <div class="remove-card-text">
          <h3
            data-l10n-id="contextual-manager-passwords-remove-login-card-title"
          ></h3>
          <p
            data-l10n-id="contextual-manager-passwords-remove-login-card-message"
          ></p>
        </div>
        <moz-button-group>
          <moz-button
            data-l10n-id="contextual-manager-passwords-remove-login-card-cancel-button"
            @click=${this.#toggleDeleteCard}
          >
          </moz-button>
          <moz-button
            type="destructive"
            data-l10n-id="contextual-manager-passwords-remove-login-card-remove-button"
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
    const heading = this.type !== "edit" ? "contextual-manager-passwords-create-label" : "contextual-manager-passwords-edit-label";
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<link
        rel="stylesheet"
        href="${toolkit_components_satchel_megalist_content_components_login_form_login_form_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <moz-card>
        ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.when)(this.type === "edit", () => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
            <div class="delete-login-button-container">
              <moz-button
                class="delete-login-button"
                data-l10n-id="contextual-manager-passwords-remove-label"
                type="icon"
                iconSrc="chrome://global/skin/icons/delete.svg"
                @click=${this.#toggleDeleteCard}
              ></moz-button>
            </div>
          `)}

        <form
          role="region"
          aria-labelledby="moz-fieldset-id"
          @submit=${e => this.onSubmit(e)}
        >
          <moz-fieldset id="moz-fieldset-id" data-l10n-id=${heading}>
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
                id="origin-alert"
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
                id="password-alert"
                role="alert"
                isNewLogin
                arrowdirection="down"
              ></password-warning>
            </div>
            <moz-button-group>
              <moz-button
                data-l10n-id="login-item-cancel-button"
                @click=${this.onCancel}
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

/***/ 5314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11540);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48334);
/* harmony import */ var _input_field_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16026);
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
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
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
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
      ${(0,_input_field_mjs__WEBPACK_IMPORTED_MODULE_2__.stylesTemplate)()}
      ${this.readonly ? this.readonlyTemplate : (0,_input_field_mjs__WEBPACK_IMPORTED_MODULE_2__.editableFieldTemplate)({
      type: "url",
      value: this.value,
      required: this.required,
      labelL10nId: "login-item-origin-label",
      noteL10nId: "contextual-manager-passwords-origin-tooltip",
      inputL10nId: "login-item-origin",
      onBlur: e => this.addHTTPSPrefix(e)
    })}
    `;
  }
}
customElements.define("login-origin-field", LoginOriginField);

/***/ }),

/***/ 13893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddLoginForm: () => (/* binding */ AddLoginForm),
/* harmony export */   EditLoginForm: () => (/* binding */ EditLoginForm),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11540);
/* harmony import */ var _login_form_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1132);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// eslint-disable-next-line import/no-unresolved


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/Credential Management/Login Form",
  component: "login-form"
});

// eslint-disable-next-line mozilla/no-browser-refs-in-toolkit
window.MozXULElement.insertFTLIfNeeded("browser/contextual-manager.ftl");
const AddLoginForm = () => (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<login-form type="add"></login-form>`;
const EditLoginForm = () => (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<login-form type="edit"></login-form>`;

/***/ }),

/***/ 16026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editableFieldTemplate: () => (/* binding */ editableFieldTemplate),
/* harmony export */   stylesTemplate: () => (/* binding */ stylesTemplate)
/* harmony export */ });
/* harmony import */ var browser_components_aboutlogins_content_components_input_field_input_field_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50342);
/* harmony import */ var toolkit_themes_linux_global_in_content_common_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56652);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11540);


/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


const stylesTemplate = () => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
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
  noteL10nId,
  inputL10nId
}) => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
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
    data-l10n-id=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(inputL10nId)}
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

/***/ 27064:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "login-form.5912c32a8cedef84b638.css";

/***/ }),

/***/ 38415:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "login-message-popup.97afa8e00f1b6672a175.css";

/***/ }),

/***/ 38507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11540);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48334);
/* harmony import */ var _input_field_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16026);
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
    return concealed ? "chrome://global/skin/icons/eye-slash.svg" : "chrome://global/skin/icons/eye.svg";
  }
  updated(changedProperties) {
    if (changedProperties.has("visible") && !changedProperties.visible) {
      this.input.selectionStart = this.value.length;
    }
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
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
      noteL10nId: "contextual-manager-passwords-password-tooltip"
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

/***/ 47844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11540);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48334);
/* harmony import */ var _input_field_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16026);
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
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
      ${(0,_input_field_mjs__WEBPACK_IMPORTED_MODULE_2__.stylesTemplate)()}
      ${(0,_input_field_mjs__WEBPACK_IMPORTED_MODULE_2__.editableFieldTemplate)({
      type: "text",
      value: this.value,
      disabled: this.readonly,
      required: this.required,
      labelL10nId: "login-item-username-label",
      noteL10nId: "contextual-manager-passwords-username-tooltip"
    })}
    `;
  }
}
customElements.define("login-username-field", LoginUsernameField);

/***/ }),

/***/ 50342:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "input-field.23a947a184395a60f05c.css";

/***/ }),

/***/ 56652:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "common.7048def0475a42d207f6.css";

/***/ }),

/***/ 95491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessagePopup: () => (/* binding */ MessagePopup),
/* harmony export */   OriginWarning: () => (/* binding */ OriginWarning),
/* harmony export */   PasswordWarning: () => (/* binding */ PasswordWarning)
/* harmony export */ });
/* harmony import */ var browser_components_aboutlogins_content_components_login_message_popup_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38415);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11540);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48334);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



const stylesTemplate = () => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)` <link
    rel="stylesheet"
    href="${browser_components_aboutlogins_content_components_login_message_popup_css__WEBPACK_IMPORTED_MODULE_0__}"
  />`;
const MessagePopup = ({
  l10nid,
  message,
  webTitle = "",
  role
}) => {
  return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)` <div class="tooltip-container" role=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(role)}>
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
      return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`${stylesTemplate()}
      ${MessagePopup({
        message: this.message,
        role: this.role
      })}`;
    }
    return this.isNewLogin ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`${stylesTemplate()}
        ${MessagePopup({
      l10nid: "about-logins-add-password-tooltip",
      role: this.role
    })}` : (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`${stylesTemplate()}
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
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`${stylesTemplate()}
    ${MessagePopup({
      l10nid: this.l10nId,
      message: this.message,
      role: this.role
    })}`;
  }
}
customElements.define("password-warning", PasswordWarning);
customElements.define("origin-warning", OriginWarning);

/***/ })

}]);
//# sourceMappingURL=components-login-form-login-form-stories.c594b6d2.iframe.bundle.js.map