"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1829,8220],{

/***/ 88220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozBoxBase)
/* harmony export */ });
/* harmony import */ var toolkit_themes_shared_design_system_text_and_typography_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37108);
/* harmony import */ var toolkit_content_widgets_moz_box_moz_box_common_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42575);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45717);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73689);


/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * Base class for moz-box-* elements providing common properties and templates.
 *
 * @property {string} label - The text for the label element.
 * @property {string} description - The text for the description element.
 * @property {string} iconSrc - The src for an optional icon.
 */
class MozBoxBase extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.MozLitElement {
  static properties = {
    label: {
      type: String,
      fluent: true
    },
    description: {
      type: String,
      fluent: true
    },
    iconSrc: {
      type: String
    }
  };
  constructor() {
    super();
    this.label = "";
    this.description = "";
    this.iconSrc = "";
  }
  get labelEl() {
    return this.renderRoot.querySelector(".label");
  }
  get descriptionEl() {
    return this.renderRoot.querySelector(".description");
  }
  get iconEl() {
    return this.renderRoot.querySelector(".icon");
  }
  stylesTemplate() {
    return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_box_moz_box_common_css__WEBPACK_IMPORTED_MODULE_1__}"
      />
      <link
        rel="stylesheet"
        href="${toolkit_themes_shared_design_system_text_and_typography_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
    `;
  }
  textTemplate() {
    return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<div
      class=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.classMap)({
      "text-content": true,
      "has-icon": this.iconSrc,
      "has-description": this.description
    })}
    >
      ${this.iconTemplate()}${this.labelTemplate()}${this.descriptionTemplate()}
    </div>`;
  }
  labelTemplate() {
    if (!this.label) {
      return "";
    }
    return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<span class="label">${this.label}</span>`;
  }
  iconTemplate() {
    if (!this.iconSrc) {
      return "";
    }
    return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<img src=${this.iconSrc} role="presentation" class="icon" />`;
  }
  descriptionTemplate() {
    if (!this.description) {
      return "";
    }
    return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<span class="description text-deemphasized">
      ${this.description}
    </span>`;
  }
}

/***/ }),

/***/ 57760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozBoxButton)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_box_moz_box_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8474);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45717);
/* harmony import */ var _moz_box_base_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88220);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * A button custom element used for navigating between sub-pages or opening
 * dialogs.
 *
 * @tagname moz-box-button
 * @property {string} label - Label for the button.
 * @property {string} description - Descriptive text for the button.
 * @property {string} iconSrc - The src for an optional icon shown next to the label.
 * @property {boolean} disabled - Whether or not the button is disabled.
 */
class MozBoxButton extends _moz_box_base_mjs__WEBPACK_IMPORTED_MODULE_2__["default"] {
  static shadowRootOptions = {
    ...super.shadowRootOptions,
    delegatesFocus: true
  };
  static properties = {
    disabled: {
      type: Boolean
    }
  };
  static queries = {
    buttonEl: "button",
    navIcon: ".nav-icon"
  };
  constructor() {
    super();
    this.disabled = false;
  }
  click() {
    this.buttonEl.click();
  }
  render() {
    return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      ${super.stylesTemplate()}
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_box_moz_box_button_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <button ?disabled=${this.disabled}>
        ${super.textTemplate()}
        <img
          class="icon nav-icon"
          src="chrome://global/skin/icons/arrow-right.svg"
          role="presentation"
        />
      </button>
    `;
  }
}
customElements.define("moz-box-button", MozBoxButton);

/***/ }),

/***/ 8474:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-box-button.f72ccfbb59c41931c188.css";

/***/ }),

/***/ 42575:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-box-common.03a7368cecc87735599f.css";

/***/ }),

/***/ 37108:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "text-and-typography.f1f851251a78b8016f44.css";

/***/ })

}]);
//# sourceMappingURL=1829.9d619d7a.iframe.bundle.js.map