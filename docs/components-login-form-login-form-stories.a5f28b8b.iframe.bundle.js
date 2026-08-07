"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[3084,4920,5944,6369],{

/***/ 9538:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-input-text.e2dcc636077bbb3379c2.css";

/***/ }),

/***/ 19609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddLoginForm: () => (/* binding */ AddLoginForm),
/* harmony export */   EditLoginForm: () => (/* binding */ EditLoginForm),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var _login_form_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81536);
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

/***/ 24920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozInputUrl)
/* harmony export */ });
/* harmony import */ var chrome_global_content_elements_moz_input_text_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65944);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



/**
 * A URL input custom element.
 *
 * @tagname moz-input-url
 * @property {string} label - The text of the label element
 * @property {string} name - The name of the input control
 * @property {string} value - The value of the input control
 * @property {boolean} disabled - The disabled state of the input control
 * @property {boolean} readonly - The readonly state of the input control
 * @property {string} iconSrc - The src for an optional icon
 * @property {string} description - The text for the description element that helps describe the input control
 * @property {string} supportPage - Name of the SUMO support page to link to.
 * @property {string} placeholder - Text to display when the input has no value.
 */
class MozInputUrl extends chrome_global_content_elements_moz_input_text_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
  inputTemplate() {
    return super.inputTemplate({
      type: "url"
    });
  }
}
customElements.define("moz-input-url", MozInputUrl);

/***/ }),

/***/ 27064:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "login-form.ce34869f4b0c2497fc46.css";

/***/ }),

/***/ 38415:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "login-message-popup.5a667034fd10b1499851.css";

/***/ }),

/***/ 63084:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozInputPassword)
/* harmony export */ });
/* harmony import */ var chrome_global_content_elements_moz_input_text_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65944);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



/**
 * A password input custom element.
 *
 * @tagname moz-input-password
 * @property {string} label - The text of the label element
 * @property {string} name - The name of the input control
 * @property {string} value - The value of the input control
 * @property {boolean} disabled - The disabled state of the input control
 * @property {boolean} readonly - The readonly state of the input control
 * @property {string} iconSrc - The src for an optional icon
 * @property {string} description - The text for the description element that helps describe the input control
 * @property {string} supportPage - Name of the SUMO support page to link to.
 * @property {string} placeholder - Text to display when the input has no value.
 */
class MozInputPassword extends chrome_global_content_elements_moz_input_text_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
  inputTemplate() {
    return super.inputTemplate({
      type: "password"
    });
  }
}
customElements.define("moz-input-password", MozInputPassword);

/***/ }),

/***/ 65944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozInputText)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_input_text_moz_input_text_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9538);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * A text input custom element.
 *
 * @tagname moz-input-text
 * @property {string} label - The text of the label element
 * @property {string} name - The name of the input control
 * @property {string} value - The value of the input control
 * @property {boolean} disabled - The disabled state of the input control
 * @property {boolean} readonly - The readonly state of the input control
 * @property {string} iconSrc - The src for an optional icon
 * @property {string} description - The text for the description element that helps describe the input control
 * @property {string} supportPage - Name of the SUMO support page to link to.
 * @property {string} placeholder - Text to display when the input has no value.
 * @property {string} ariaLabel - The aria-label text when there is no visible label.
 * @property {string} ariaDescription - The aria-description text when there is no visible description.
 */
class MozInputText extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozBaseInputElement {
  static properties = {
    placeholder: {
      type: String,
      fluent: true
    },
    readonly: {
      type: Boolean,
      reflect: true
    }
  };
  static inputLayout = "block";
  constructor() {
    super();
    this.value = "";
    this.readonly = false;
  }
  inputStylesTemplate() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<link
      rel="stylesheet"
      href="${toolkit_content_widgets_moz_input_text_moz_input_text_css__WEBPACK_IMPORTED_MODULE_0__}"
    />`;
  }
  handleInput(e) {
    this.value = e.target.value;
  }
  inputTemplate(options = {}) {
    let {
      type = "text",
      classes,
      styles,
      inputValue
    } = options;
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <input
        id="input"
        type=${type}
        class=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(classes)}
        style=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(styles)}
        name=${this.name}
        .value=${inputValue || this.value}
        ?disabled=${this.disabled || this.parentDisabled}
        ?readonly=${this.readonly}
        accesskey=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.accessKey)}
        placeholder=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.placeholder)}
        aria-label=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.ariaLabel ?? undefined)}
        aria-describedby="description"
        aria-description=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.hasDescription ? undefined : this.ariaDescription)}
        @input=${this.handleInput}
        @change=${this.redispatchEvent}
      />
    `;
  }
}
customElements.define("moz-input-text", MozInputText);

/***/ }),

/***/ 72735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessagePopup: () => (/* binding */ MessagePopup),
/* harmony export */   OriginWarning: () => (/* binding */ OriginWarning),
/* harmony export */   PasswordWarning: () => (/* binding */ PasswordWarning)
/* harmony export */ });
/* harmony import */ var browser_components_aboutlogins_content_components_login_message_popup_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38415);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);

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

/***/ }),

/***/ 81536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginForm: () => (/* binding */ LoginForm)
/* harmony export */ });
/* harmony import */ var toolkit_components_satchel_megalist_content_components_login_form_login_form_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27064);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);
/* harmony import */ var chrome_global_content_elements_moz_input_url_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24920);
/* harmony import */ var chrome_global_content_elements_moz_input_text_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65944);
/* harmony import */ var chrome_global_content_elements_moz_input_password_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63084);
/* harmony import */ var chrome_browser_content_aboutlogins_components_login_message_popup_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72735);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import


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
    _showDeleteCard: {
      type: Boolean,
      state: true
    },
    _originInvalid: {
      type: Boolean,
      state: true
    },
    _passwordInvalid: {
      type: Boolean,
      state: true
    }
  };
  static queries = {
    formEl: "form",
    originField: "moz-input-url",
    usernameField: "moz-input-text",
    passwordField: "moz-input-password",
    originWarning: "origin-warning",
    passwordWarning: "password-warning"
  };
  constructor() {
    super();
    this.originValue = "";
    this.usernameValue = "";
    this.passwordValue = "";
    this._showDeleteCard = false;
    this._originInvalid = false;
    this._passwordInvalid = false;
  }
  async firstUpdated() {
    const mozButtonGroup = this.shadowRoot.querySelector("moz-button-group");
    // Wait for the button group to complete its update cycle since it might reorder its slots.
    await mozButtonGroup.updateComplete;
    this.#handleKeyPressOnLastButton(mozButtonGroup);
    await this.passwordField.updateComplete;
    this.passwordField.inputEl.setAttribute("aria-required", "true");
    if (this.originField) {
      await this.originField.updateComplete;
      this.originField.inputEl.setAttribute("aria-required", "true");
    }
  }
  #revealPassword() {
    this.passwordField.inputEl.type = "text";
  }
  #concealPassword() {
    this.passwordField.inputEl.type = "password";
  }
  #addHTTPSPrefix() {
    const originValue = this.originField.value.trim();
    if (originValue && !originValue.match(/:\/\//)) {
      this.originField.value = "https://" + originValue;
    }
  }
  #renderReadonlyOrigin() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <div class="origin-field-readonly">
        <label
          for="origin-link"
          class="field-label"
          data-l10n-id="login-item-origin-label"
        ></label>
        <a
          id="origin-link"
          class="origin-input"
          dir="auto"
          target="_blank"
          rel="noreferrer"
          href=${this.originValue}
          @click=${this.onOriginClick}
        >
          ${this.originValue}
        </a>
      </div>
    `;
  }
  #handleKeyPressOnLastButton(mozButtonGroup) {
    const handleKeyPress = e => {
      if (e.key !== "Tab") {
        return;
      }
      const notifMsgBar = this.parentElement.querySelector("notification-message-bar");
      if (!notifMsgBar) {
        return;
      }
      e.preventDefault();
      const mozMsgBar = notifMsgBar.shadowRoot.querySelector("moz-message-bar");
      const mozButtonGroup = mozMsgBar.querySelector("moz-button-group");
      if (mozButtonGroup) {
        const firstSlot = mozButtonGroup.shadowRoot.querySelector("slot");
        const firstButton = firstSlot.assignedElements()[0];
        firstButton.focus();
        return;
      }
      const primaryActionButton = mozMsgBar.querySelector("#primary-action");
      primaryActionButton.focus();
    };
    const slots = mozButtonGroup.shadowRoot.querySelectorAll("slot");
    const lastSlot = slots[slots.length - 1];
    const lastButton = lastSlot.assignedElements()[0];
    lastButton.addEventListener("keydown", e => handleKeyPress(e));
  }
  #removeWarning(warning) {
    if (warning.classList.contains("invalid-input")) {
      warning.classList.remove("invalid-input");
    }
  }
  #shouldShowWarning(field, warning) {
    const input = field.inputEl;
    input.required = true;
    const fieldInvalid = warning === this.originWarning ? this._originInvalid : this._passwordInvalid;
    if (!input.checkValidity() || fieldInvalid) {
      // FIXME: for some reason checkValidity does not apply the :invalid style
      // to the field. For now, we reset the input value to "" apply :invalid
      // styling.
      field.value = "";
      input.value = "";
      input.focus();
      warning.setAttribute("message", input.validationMessage);
      warning.classList.add("invalid-input");
      input.setAttribute("aria-describedby", warning.id);
      if (warning === this.originWarning) {
        this._originInvalid = true;
      } else if (warning === this.passwordWarning) {
        this._passwordInvalid = true;
      }
      return true;
    }
    input.removeAttribute("aria-describedby");
    this.#removeWarning(warning);
    if (warning === this.originWarning) {
      this._originInvalid = false;
    } else if (warning === this.passwordWarning) {
      this._passwordInvalid = false;
    }
    return false;
  }
  onInput(e) {
    const field = e.target;
    const warning = field.name === "origin" ? this.originWarning : this.passwordWarning;
    field.inputEl.required = true;
    const isValid = field.inputEl.checkValidity();
    if (isValid) {
      this.#removeWarning(warning);
      field.inputEl.removeAttribute("aria-describedby");
    }
    if (field.name === "origin") {
      this._originInvalid = !isValid;
    } else if (field.name === "password") {
      this._passwordInvalid = !isValid;
    }
  }
  onCancel(e) {
    e.preventDefault();
    const loginFromForm = {
      origin: this.originValue || this.originField?.value,
      username: this.usernameField.value.trim(),
      password: this.passwordField.value
    };
    this.onClose(loginFromForm);
  }
  onSubmit(e) {
    e.preventDefault();
    if (!this.#isFormValid()) {
      return;
    }
    const loginFromForm = {
      origin: this.originValue || this.originField?.value,
      username: this.usernameField.value.trim(),
      password: this.passwordField.value
    };
    this.onSaveClick(loginFromForm);
  }
  #isFormValid() {
    let originError = false;
    let passwordError = false;
    passwordError = this.#shouldShowWarning(this.passwordField, this.passwordWarning);
    if (this.type !== "edit") {
      originError = this.#shouldShowWarning(this.originField, this.originWarning);
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
    const getIconSrc = () => {
      return document.dir === "rtl" ?
      // eslint-disable-next-line mozilla/no-browser-refs-in-toolkit
      "chrome://browser/skin/forward.svg" :
      // eslint-disable-next-line mozilla/no-browser-refs-in-toolkit
      "chrome://browser/skin/back.svg";
    };
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)` <link
        rel="stylesheet"
        href="${toolkit_components_satchel_megalist_content_components_login_form_login_form_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <moz-card class="remove-login-card">
        <div class="remove-card-back">
          <moz-button
            type="icon ghost"
            iconSrc=${getIconSrc()}
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
    const heading = this.type !== "edit" ? "contextual-manager-passwords-create-label" : "contextual-manager-passwords-update-label";
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
            ${this.type === "edit" ? this.#renderReadonlyOrigin() : (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
                  <div class="field-container">
                    <moz-input-url
                      name="origin"
                      aria-describedby="origin-description"
                      data-l10n-id="contextual-manager-passwords-origin-field"
                      .value=${this.originValue}
                      @input=${e => this.onInput(e)}
                      @change=${() => this.#addHTTPSPrefix()}
                    ></moz-input-url>
                    <p
                      id="origin-description"
                      role="note"
                      class="field-description"
                      data-l10n-id="contextual-manager-passwords-origin-field-description"
                    ></p>
                    <origin-warning
                      id="origin-alert"
                      role="alert"
                      arrowdirection="down"
                    ></origin-warning>
                  </div>
                `}
            <div class="field-container">
              <moz-input-text
                name="username"
                aria-describedby="username-description"
                data-l10n-id="contextual-manager-passwords-username-field"
                .value=${this.usernameValue}
              ></moz-input-text>
              <p
                id="username-description"
                role="note"
                class="field-description"
                data-l10n-id="contextual-manager-passwords-username-field-description"
              ></p>
            </div>
            <div class="field-container">
              <moz-input-password
                name="password"
                aria-describedby="password-description"
                data-l10n-id="contextual-manager-passwords-password-field"
                .value=${this.passwordValue}
                @input=${e => this.onInput(e)}
                @focusin=${() => this.#revealPassword()}
                @focusout=${() => this.#concealPassword()}
              ></moz-input-password>
              <p
                id="password-description"
                role="note"
                class="field-description"
                data-l10n-id="contextual-manager-passwords-password-field-description"
              ></p>
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

/***/ })

}]);
//# sourceMappingURL=components-login-form-login-form-stories.a5f28b8b.iframe.bundle.js.map