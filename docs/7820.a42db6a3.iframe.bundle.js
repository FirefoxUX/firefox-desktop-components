"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[7820],{

/***/ 41366:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-box-link.cc87bb2d7f9265c16d8e.css";

/***/ }),

/***/ 87820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozBoxLink)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_box_link_moz_box_link_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41366);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48334);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11540);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



window.MozXULElement?.insertFTLIfNeeded("toolkit/global/mozBoxBase.ftl");

/**
 * A link with a box-like shape that allows for custom title and description.
 *
 * @tagname moz-box-link
 * @property {string} label - Label for the button.
 * @property {string} description - Descriptive text for the button.
 * @property {string} iconSrc - The src for an optional icon.
 * @property {string} href - The href of the link.
 * @property {string} supportPage - Whether or not the link is to a support page.
 */
class MozBoxLink extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.MozBoxBase {
  static properties = {
    href: {
      type: String
    },
    supportPage: {
      type: String,
      attribute: "support-page"
    }
  };
  constructor() {
    super();
    this.href = "";
    this.supportPage = "";
  }
  stylesTemplate() {
    const styles = super.stylesTemplate();
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`${styles}<link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_box_link_moz_box_link_css__WEBPACK_IMPORTED_MODULE_0__}"
      />`;
  }
  navIconTemplate() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<img
      class="icon nav-icon"
      src="chrome://global/skin/icons/open-in-new.svg"
      role="presentation"
    />`;
  }
  render() {
    const template = (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`${this.textTemplate()}${this.navIconTemplate()}`;
    const {
      supportPage
    } = this;
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      ${this.stylesTemplate()}
      ${supportPage ? (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<a
            class="button"
            is="moz-support-link"
            support-page=${supportPage}
            data-l10n-id="moz-box-link-anchor"
          >
            ${template}
          </a>` : (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<a
            class="button"
            href=${this.href}
            target="_blank"
            data-l10n-id="moz-box-link-anchor"
          >
            ${template}
          </a>`}
    `;
  }
}
customElements.define("moz-box-link", MozBoxLink);

/***/ })

}]);
//# sourceMappingURL=7820.a42db6a3.iframe.bundle.js.map