"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[8220],{

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
      "has-icon": this.iconSrc
    })}
    >
      ${this.labelTemplate()}${this.descriptionTemplate()}
    </div>`;
  }
  labelTemplate() {
    if (!this.label) {
      return "";
    }
    return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<span class="label-wrapper">
      ${this.iconTemplate()}<span class="label">${this.label}</span>
    </span>`;
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

/***/ 42575:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-box-common.603cf2342ade33fb2658.css";

/***/ }),

/***/ 37108:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "text-and-typography.f1f851251a78b8016f44.css";

/***/ })

}]);
//# sourceMappingURL=8220.4d8f758a.iframe.bundle.js.map