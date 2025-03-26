"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1305],{

/***/ 51305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozBoxItem)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_box_item_moz_box_item_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31749);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45717);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73689);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * A custom element used for highlighting important information and/or providing
 * context for specific settings.
 *
 * @tagname moz-box-item
 * @property {string} label - Label for the button.
 * @property {string} description - Descriptive text for the button.
 * @property {string} iconSrc - The src for an optional icon shown next to the label.
 * @property {string} layout - Layout style for the box content, either "default" or "large-icon".
 * @slot default - Slot for the box item's content, which overrides label and description.
 */
class MozBoxItem extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozBoxBase {
  static properties = {
    layout: {
      type: String,
      reflect: true
    }
  };
  static queries = {
    defaultSlotEl: "slot:not([name])"
  };
  constructor() {
    super();
    this.layout = "default";
  }
  stylesTemplate() {
    return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`${super.stylesTemplate()}
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_box_item_moz_box_item_css__WEBPACK_IMPORTED_MODULE_0__}"
      />`;
  }
  render() {
    return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      ${this.stylesTemplate()}
      <div class="box-container">
        ${this.label ? super.textTemplate() : _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`<slot></slot>`}
      </div>
    `;
  }
}
customElements.define("moz-box-item", MozBoxItem);

/***/ }),

/***/ 31749:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-box-item.eb0b3f90a21d8eb3528b.css";

/***/ })

}]);
//# sourceMappingURL=1305.534c6f61.iframe.bundle.js.map