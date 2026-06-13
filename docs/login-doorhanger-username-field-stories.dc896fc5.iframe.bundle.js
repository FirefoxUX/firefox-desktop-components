"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[5220,5944],{

/***/ 9538:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-input-text.e015f422ed2849722cfb.css";

/***/ }),

/***/ 11333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var browser_components_passwordmgr_content_login_doorhanger_username_field_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86827);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_elements_moz_input_text_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65944);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * Username input for the save/update password doorhanger. Wraps a XUL
 * autocomplete input with an optional dropmarker for showing saved login
 * suggestions.
 *
 * @tagname login-doorhanger-username-field
 * @property {string} label - The text of the label element.
 * @property {string} name - The name of the input control.
 * @property {string} value - The value of the input control.
 * @property {boolean} disabled - The disabled state of the input control.
 * @property {string} placeholder - Text to display when the input has no value.
 * @property {string} autocompleteSearch - Value for the autocompletesearch attribute, enabling XUL autocomplete.
 * @property {string} autocompletePopup - The autocompletepopup attribute forwarded to the inner input.
 * @property {string} maxRows - The maxrows attribute forwarded to the inner input.
 * @property {string} maxDropmarkerRows - The maxdropmarkerrows attribute forwarded to the inner input.
 * @property {boolean} showDropmarker - When true, shows the autocomplete dropdown arrow inside the input.
 */
class LoginDoorhangerUsernameField extends chrome_global_content_elements_moz_input_text_mjs__WEBPACK_IMPORTED_MODULE_2__["default"] {
  static properties = {
    autocompleteSearch: {
      type: String,
      attribute: "autocompletesearch"
    },
    autocompletePopup: {
      type: String,
      attribute: "autocompletepopup"
    },
    maxRows: {
      type: String,
      attribute: "maxrows"
    },
    maxDropmarkerRows: {
      type: String,
      attribute: "maxdropmarkerrows"
    },
    showDropmarker: {
      type: Boolean
    }
  };
  constructor() {
    super();
    this.showDropmarker = false;
  }
  get inputEl() {
    return this.shadowRoot?.querySelector("#input") ?? null;
  }
  get dropmarkerEl() {
    return this.shadowRoot?.querySelector(".ac-dropmarker") ?? null;
  }

  /** @param {MouseEvent} e */
  #handleDropmarkerMousedown(e) {
    e.preventDefault();
  }
  #handleDropmarkerClick() {
    this.dispatchEvent(new CustomEvent("dropmarker-click", {
      bubbles: true
    }));
  }
  inputStylesTemplate() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      ${super.inputStylesTemplate()}
      <link
        rel="stylesheet"
        href="${browser_components_passwordmgr_content_login_doorhanger_username_field_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
    `;
  }
  inputTemplate(options = {}) {
    let {
      classes,
      styles,
      inputValue
    } = options;
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <div
        class="autocomplete-container${this.showDropmarker ? " has-dropmarker" : ""}"
      >
        <input
          id="input"
          is="autocomplete-input"
          part="input"
          type="text"
          class=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(classes)}
          style=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(styles)}
          name=${this.name}
          .value=${inputValue || this.value}
          ?disabled=${this.disabled || this.parentDisabled}
          ?readonly=${this.readonly}
          accesskey=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.accessKey)}
          placeholder=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.placeholder)}
          aria-label=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.ariaLabel ?? undefined)}
          aria-describedby="description"
          aria-description=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.hasDescription ? undefined : this.ariaDescription)}
          autocompletesearch=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.autocompleteSearch)}
          autocompletepopup=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.autocompletePopup)}
          maxrows=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.maxRows)}
          maxdropmarkerrows=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.maxDropmarkerRows)}
          @input=${this.handleInput}
          @change=${this.redispatchEvent}
        />
        <span
          class="ac-dropmarker"
          ?hidden=${!this.showDropmarker}
          @mousedown=${this.#handleDropmarkerMousedown}
          @click=${this.#handleDropmarkerClick}
        ></span>
      </div>
    `;
  }
}
customElements.define("login-doorhanger-username-field", LoginDoorhangerUsernameField);

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

/***/ 67400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   WithDropmarker: () => (/* binding */ WithDropmarker),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var _login_doorhanger_username_field_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11333);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// eslint-disable-next-line import/no-unresolved


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/Credential Management/Doorhanger Username Field",
  component: "login-doorhanger-username-field",
  parameters: {
    status: "in-development",
    handles: ["change", "input", "dropmarker-click"],
    fluent: `
login-doorhanger-username-label =
  .label = Username:
    `
  }
});
const Template = ({
  name: fieldName,
  value,
  disabled,
  l10nId,
  showDropmarker
}) => (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <login-doorhanger-username-field
    name=${fieldName}
    value=${(0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(value || null)}
    ?disabled=${disabled}
    ?showdropmarker=${showDropmarker}
    data-l10n-id=${l10nId}
  ></login-doorhanger-username-field>
`;
const Default = Template.bind({});
Default.args = {
  name: "doorhanger-username",
  value: "",
  disabled: false,
  l10nId: "login-doorhanger-username-label",
  showDropmarker: false
};
const WithDropmarker = Template.bind({});
WithDropmarker.args = {
  ...Default.args,
  value: "user@example.com",
  showDropmarker: true
};

/***/ }),

/***/ 86827:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "login-doorhanger-username-field.a3be0d0d17b30b0a25c4.css";

/***/ })

}]);
//# sourceMappingURL=login-doorhanger-username-field-stories.dc896fc5.iframe.bundle.js.map