"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[5702],{

/***/ 36051:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editableFieldTemplate": () => (/* binding */ editableFieldTemplate),
/* harmony export */   "stylesTemplate": () => (/* binding */ stylesTemplate)
/* harmony export */ });
/* harmony import */ var browser_components_aboutlogins_content_components_input_field_input_field_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64196);
/* harmony import */ var toolkit_themes_osx_global_in_content_common_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96567);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1659);


/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



const stylesTemplate = () =>
  chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`
    <link rel="stylesheet" href="${toolkit_themes_osx_global_in_content_common_css__WEBPACK_IMPORTED_MODULE_1__}" />
    <link
      rel="stylesheet"
      href="${browser_components_aboutlogins_content_components_input_field_input_field_css__WEBPACK_IMPORTED_MODULE_0__}"
    />
  `;

const editableFieldTemplate = ({
  type,
  value,
  inputId,
  disabled,
  onFocus,
  onBlur,
}) =>
  chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<input
    class="input-field"
    data-l10n-id=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(inputId)}
    type=${type}
    value=${value}
    ?disabled=${disabled}
    @focus=${onFocus}
    @blur=${onBlur}
  />`;


/***/ }),

/***/ 98988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginOriginField": () => (/* binding */ LoginOriginField),
/* harmony export */   "LoginPasswordField": () => (/* binding */ LoginPasswordField),
/* harmony export */   "LoginPasswordFieldDisplayMode": () => (/* binding */ LoginPasswordFieldDisplayMode),
/* harmony export */   "LoginPasswordFieldEditMode": () => (/* binding */ LoginPasswordFieldEditMode),
/* harmony export */   "LoginUsernameField": () => (/* binding */ LoginUsernameField),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1659);
/* harmony import */ var _login_password_field_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91054);
/* harmony import */ var _login_username_field_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95911);
/* harmony import */ var _login_origin_field_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54249);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// eslint-disable-next-line import/no-unresolved

// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/Credential Management/Input Fields",
});

window.MozXULElement.insertFTLIfNeeded("browser/aboutLogins.ftl");

const LoginUsernameField = ({ value, readonly }) => {
  return lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
    <div style="max-width: 500px">
      <login-username-field .value=${value} .readonly=${readonly}>
      </login-username-field>
    </div>
  `;
};

LoginUsernameField.argTypes = {
  value: {
    control: "text",
    defaultValue: "username",
  },
  readonly: {
    control: "boolean",
    defaultValue: false,
  },
};

const LoginOriginField = ({ value, readonly }) => {
  return lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
    <div style="max-width: 500px">
      <login-origin-field .value=${value} .readonly=${readonly}>
      </login-origin-field>
    </div>
  `;
};

LoginOriginField.argTypes = {
  value: {
    control: "text",
    defaultValue: "https://example.com",
  },
  readonly: {
    control: "boolean",
    defaultValue: false,
  },
};

const LoginPasswordField = ({
  readonly,
  visible,
  value = "longpassword".repeat(2),
}) => {
  return lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
    <div style="max-width: 500px">
      <login-password-field
        .value=${value}
        .readonly=${readonly}
        .visible=${visible}
        .onPasswordVisible=${() => alert("auth...")}
      >
      </login-password-field>
    </div>
  `;
};

LoginPasswordField.argTypes = {
  readonly: {
    control: "boolean",
    defaultValue: true,
  },
  visible: {
    control: "boolean",
    defaultValue: false,
  },
};

const LoginPasswordFieldDisplayMode = ({
  visible,
  value = "longpassword".repeat(2),
}) => {
  return lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
    <div style="max-width: 500px">
      <login-password-field
        .value=${value}
        .readonly=${true}
        .visible=${visible}
      >
      </login-password-field>
    </div>
  `;
};

LoginPasswordFieldDisplayMode.argTypes = {
  visible: {
    control: "boolean",
    defaultValue: false,
  },
};

const LoginPasswordFieldEditMode = ({
  visible,
  value = "longpassword".repeat(2),
}) => {
  return lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
    <div style="max-width: 500px">
      <login-password-field
        .value=${value}
        .readonly=${false}
        .visible=${visible}
      >
      </login-password-field>
    </div>
  `;
};

LoginPasswordFieldEditMode.argTypes = {
  visible: {
    control: "boolean",
    defaultValue: false,
  },
};


/***/ }),

/***/ 54249:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1659);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68164);
/* harmony import */ var _input_field_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36051);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




class LoginOriginField extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.MozLitElement {
  static properties = {
    value: { type: String, reflect: true },
    readonly: { type: Boolean, reflect: true },
  };

  get readonlyTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
      <a
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
      <label class="field-label" data-l10n-id="login-item-origin-label"></label>
      ${this.readonly
        ? this.readonlyTemplate
        : (0,_input_field_mjs__WEBPACK_IMPORTED_MODULE_2__.editableFieldTemplate)({
            type: "url",
            value: this.value,
          })}
    `;
  }
}

customElements.define("login-origin-field", LoginOriginField);


/***/ }),

/***/ 91054:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1659);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68164);
/* harmony import */ var _input_field_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36051);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */





class LoginPasswordField extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.MozLitElement {
  static CONCEALED_PASSWORD_TEXT = " ".repeat(8);

  static properties = {
    _value: { type: String, state: true },
    readonly: { type: Boolean, reflect: true },
    visible: { type: Boolean, reflect: true },
  };

  static queries = {
    input: "input",
    button: "button",
  };

  set value(newValue) {
    this._value = newValue;
  }

  get #type() {
    return this.visible ? "text" : "password";
  }

  get #password() {
    return this.readonly && !this.visible
      ? LoginPasswordField.CONCEALED_PASSWORD_TEXT
      : this._value;
  }

  render() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
      ${(0,_input_field_mjs__WEBPACK_IMPORTED_MODULE_2__.stylesTemplate)()}
      <label
        class="field-label"
        data-l10n-id="login-item-password-label"
      ></label>
      ${(0,_input_field_mjs__WEBPACK_IMPORTED_MODULE_2__.editableFieldTemplate)({
        type: this.#type,
        value: this.#password,
        labelId: "login-item-password-label",
        disabled: this.readonly,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
      })}
      <button
        class=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.classMap)({
          revealed: this.visible,
          "reveal-password-button": true,
        })}
        data-l10n-id="login-item-password-reveal-checkbox"
        @click=${this.toggleVisibility}
      ></button>
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
    this.input.focus();
  }
}

customElements.define("login-password-field", LoginPasswordField);


/***/ }),

/***/ 95911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1659);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68164);
/* harmony import */ var _input_field_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36051);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




class LoginUsernameField extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.MozLitElement {
  static properties = {
    value: { type: String, reflect: true },
    readonly: { type: Boolean, reflect: true },
  };

  render() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
      ${(0,_input_field_mjs__WEBPACK_IMPORTED_MODULE_2__.stylesTemplate)()}
      <label
        class="field-label"
        data-l10n-id="login-item-username-label"
      ></label>
      ${(0,_input_field_mjs__WEBPACK_IMPORTED_MODULE_2__.editableFieldTemplate)({
        type: "text",
        value: this.value,
        disabled: this.readonly,
      })}
    `;
  }
}

customElements.define("login-username-field", LoginUsernameField);


/***/ }),

/***/ 64196:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "input-field.715f7f9c3aaf457b1a58.css";

/***/ }),

/***/ 96567:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "common.1d46b4c17f883eaf5065.css";

/***/ })

}]);
//# sourceMappingURL=input-field-input-field-stories.55d67b5d.iframe.bundle.js.map