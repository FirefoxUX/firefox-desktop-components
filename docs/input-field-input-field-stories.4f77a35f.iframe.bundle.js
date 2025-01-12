"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[5702],{

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

/***/ 4693:
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
/* harmony import */ var lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45717);
/* harmony import */ var _login_password_field_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54001);
/* harmony import */ var _login_username_field_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82578);
/* harmony import */ var _login_origin_field_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60891);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// eslint-disable-next-line import/no-unresolved




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/Credential Management/Input Fields"
});
window.MozXULElement.insertFTLIfNeeded("browser/aboutLogins.ftl");
const LoginUsernameField = ({
  value,
  readonly
}) => {
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
    defaultValue: "username"
  },
  readonly: {
    control: "boolean",
    defaultValue: false
  }
};
const LoginOriginField = ({
  value,
  readonly
}) => {
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
    defaultValue: "https://example.com"
  },
  readonly: {
    control: "boolean",
    defaultValue: false
  }
};
const LoginPasswordField = ({
  readonly,
  visible,
  value = "longpassword".repeat(2)
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
    defaultValue: true
  },
  visible: {
    control: "boolean",
    defaultValue: false
  }
};
const LoginPasswordFieldDisplayMode = ({
  visible,
  value = "longpassword".repeat(2)
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
    defaultValue: false
  }
};
const LoginPasswordFieldEditMode = ({
  visible,
  value = "longpassword".repeat(2)
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
    defaultValue: false
  }
};

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

/***/ 64196:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "input-field.bcaff3aef712aca9f6fa.css";

/***/ }),

/***/ 46565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "common.d2c1b3186a09c5fd1fdd.css";

/***/ })

}]);
//# sourceMappingURL=input-field-input-field-stories.4f77a35f.iframe.bundle.js.map