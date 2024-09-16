"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[8347],{

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
  onFocus,
  onBlur,
  labelL10nId,
  noteL10nId
}) => chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`
    <label for="input" class="field-label" data-l10n-id=${labelL10nId}> </label>
    <input
      id="input"
      class="input-field"
      type=${type}
      value=${value}
      aria-describedby="explainer"
      ?disabled=${disabled}
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
    readonly: {
      type: Boolean,
      reflect: true
    }
  };
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
      labelL10nId: "login-item-origin-label",
      noteL10nId: "passwords-origin-tooltip"
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
    _value: {
      type: String,
      state: true
    },
    readonly: {
      type: Boolean,
      reflect: true
    },
    visible: {
      type: Boolean,
      reflect: true
    }
  };
  static queries = {
    input: "input",
    button: "button"
  };
  set value(newValue) {
    this._value = newValue;
  }
  get #type() {
    return this.visible ? "text" : "password";
  }
  get #password() {
    return this.readonly && !this.visible ? LoginPasswordField.CONCEALED_PASSWORD_TEXT : this._value;
  }
  #revealIconSrc(concealed) {
    return concealed ? "chrome://browser/content/aboutlogins/icons/password-hide.svg" : "chrome://browser/content/aboutlogins/icons/password.svg";
  }
  render() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
      ${(0,_input_field_mjs__WEBPACK_IMPORTED_MODULE_2__.stylesTemplate)()}
      ${(0,_input_field_mjs__WEBPACK_IMPORTED_MODULE_2__.editableFieldTemplate)({
      type: this.#type,
      value: this.#password,
      labelId: "login-item-password-label",
      disabled: this.readonly,
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
        @click=${this.toggleVisibility}
      ></moz-button>
    `;
  }
  handleFocus(ev) {
    if (ev.relatedTarget !== this.button) {
      this.visible = true;
    }
  }
  handleBlur(ev) {
    if (ev.relatedTarget !== this.button) {
      this.visible = false;
    }
  }
  toggleVisibility() {
    this.visible = !this.visible;
    if (this.visible) {
      this.onPasswordVisible?.();
    }
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
    readonly: {
      type: Boolean,
      reflect: true
    }
  };
  render() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
      ${(0,_input_field_mjs__WEBPACK_IMPORTED_MODULE_2__.stylesTemplate)()}
      ${(0,_input_field_mjs__WEBPACK_IMPORTED_MODULE_2__.editableFieldTemplate)({
      type: "text",
      value: this.value,
      disabled: this.readonly,
      labelL10nId: "login-item-username-label",
      noteL10nId: "passwords-username-tooltip"
    })}
    `;
  }
}
customElements.define("login-username-field", LoginUsernameField);

/***/ }),

/***/ 36831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginForm": () => (/* binding */ LoginForm)
/* harmony export */ });
/* harmony import */ var toolkit_components_satchel_megalist_content_LoginFormComponent_login_form_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90647);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73689);
/* harmony import */ var chrome_browser_content_aboutlogins_components_input_field_login_origin_field_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60891);
/* harmony import */ var chrome_browser_content_aboutlogins_components_input_field_login_username_field_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82578);
/* harmony import */ var chrome_browser_content_aboutlogins_components_input_field_login_password_field_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54001);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/* eslint-disable-next-line import/no-unassigned-import, mozilla/no-browser-refs-in-toolkit */

/* eslint-disable-next-line import/no-unassigned-import, mozilla/no-browser-refs-in-toolkit */

/* eslint-disable-next-line import/no-unassigned-import, mozilla/no-browser-refs-in-toolkit */

class LoginForm extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    type: {
      type: String,
      reflect: true
    }
  };
  render() {
    const heading = this.type !== "edit" ? "passwords-create-label" : "passwords-edit-label";
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`<link
        rel="stylesheet"
        href="${toolkit_components_satchel_megalist_content_LoginFormComponent_login_form_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <moz-card>
        ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.when)(this.type === "edit", () => chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
            <div class="delete-login-button-container">
              <moz-button
                class="delete-login-button"
                type="icon"
                iconSrc="chrome://global/skin/icons/delete.svg"
              ></moz-button>
            </div>
          `)}
        <form>
          <moz-fieldset data-l10n-id=${heading}>
            <login-origin-field></login-origin-field>
            <login-username-field></login-username-field>
            <login-password-field></login-password-field>
            <moz-button-group>
              <moz-button data-l10n-id="login-item-cancel-button"></moz-button>
              <moz-button
                data-l10n-id="login-item-save-new-button"
                type="primary"
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

/***/ 53295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddLoginForm": () => (/* binding */ AddLoginForm),
/* harmony export */   "EditLoginForm": () => (/* binding */ EditLoginForm),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45717);
/* harmony import */ var _login_form_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36831);
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

/***/ 90647:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "login-form.7c43629b7a2bf2301af3.css";

/***/ }),

/***/ 46565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "common.d2c1b3186a09c5fd1fdd.css";

/***/ })

}]);
//# sourceMappingURL=LoginFormComponent-login-form-stories.c52f06c7.iframe.bundle.js.map