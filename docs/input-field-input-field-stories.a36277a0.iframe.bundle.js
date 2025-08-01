"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[7206],{

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
      type: "text",
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

/***/ 6847:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginOriginField: () => (/* binding */ LoginOriginField),
/* harmony export */   LoginPasswordField: () => (/* binding */ LoginPasswordField),
/* harmony export */   LoginPasswordFieldDisplayMode: () => (/* binding */ LoginPasswordFieldDisplayMode),
/* harmony export */   LoginPasswordFieldEditMode: () => (/* binding */ LoginPasswordFieldEditMode),
/* harmony export */   LoginUsernameField: () => (/* binding */ LoginUsernameField),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11540);
/* harmony import */ var _login_password_field_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38507);
/* harmony import */ var _login_username_field_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47844);
/* harmony import */ var _login_origin_field_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5314);
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
  return (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
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
  return (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
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
  return (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
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
  return (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
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
  return (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
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
    concealed: {
      type: Boolean,
      reflect: true
    },
    required: {
      type: Boolean,
      reflect: true
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
    this.concealed = true;
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("input", e => {
      this.value = e.composedTarget.value;
    });
  }
  get #type() {
    return this.concealed ? "password" : "text";
  }
  get #password() {
    return !this.newPassword && this.concealed ? LoginPasswordField.CONCEALED_PASSWORD_TEXT : this.value;
  }
  updated(changedProperties) {
    if (changedProperties.has("concealed") && !changedProperties.concealed) {
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
      noteL10nId: "contextual-manager-passwords-password-tooltip-2"
    })}
    `;
  }
  handleFocus() {
    this.concealed = false;
  }
  handleBlur(ev) {
    if (ev.relatedTarget === this.label) {
      return;
    }
    this.concealed = true;
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

module.exports = __webpack_require__.p + "input-field.47ed11342a00b25babe0.css";

/***/ }),

/***/ 56652:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "common.7048def0475a42d207f6.css";

/***/ })

}]);
//# sourceMappingURL=input-field-input-field-stories.a36277a0.iframe.bundle.js.map