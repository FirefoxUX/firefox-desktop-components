"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[8582],{

/***/ 88582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozBoxGroup)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_box_group_moz_box_group_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88359);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45717);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73689);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * An element used to group combinations of moz-box-item, moz-box-link, and
 * moz-box-button elements and provide the expected styles.
 *
 * @tagname moz-box-group
 * * @slot default - Slot for rendering various moz-box-* elements.
 */
class MozBoxGroup extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  render() {
    return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_box_group_moz_box_group_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <slot></slot>
    `;
  }
}
customElements.define("moz-box-group", MozBoxGroup);

/***/ }),

/***/ 88359:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-box-group.46d3a9817f2eaf2b3d02.css";

/***/ })

}]);
//# sourceMappingURL=8582.e275008c.iframe.bundle.js.map