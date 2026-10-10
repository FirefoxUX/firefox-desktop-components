"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[3869],{

/***/ 14093:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var chrome_browser_content_aiwindow_components_aitab_footer_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68260);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */


// eslint-disable-next-line import/no-unassigned-import

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/AI Window/AI Tab Footer",
  component: "aitab-footer",
  parameters: {
    fluent: `
aitab-page-made-with = Made with <span data-l10n-name="brand">Smart Window</span>
    `
  }
});
const Template = () => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<aitab-footer></aitab-footer>`;
const Default = Template.bind({});
Default.args = {};

/***/ }),

/***/ 58676:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aitab-base.8bc08c273fa87d7183bc.css";

/***/ }),

/***/ 68260:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AITabFooter: () => (/* binding */ AITabFooter)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_aitab_page_aitab_footer_aitab_footer_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84418);
/* harmony import */ var browser_components_aiwindow_ui_components_aitab_page_aitab_base_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58676);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82242);


/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * "Made with Smart Window" credit at the bottom of a generated AI Tab page.
 */
class AITabFooter extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.MozLitElement {
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_aitab_page_aitab_base_css__WEBPACK_IMPORTED_MODULE_1__}"
      />
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_aitab_page_aitab_footer_aitab_footer_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <footer class="aitab-footer">
        <p class="aitab-made-with" data-l10n-id="aitab-page-made-with">
          <span class="aitab-made-with-brand" data-l10n-name="brand"></span>
        </p>
      </footer>
    `;
  }
}
customElements.define("aitab-footer", AITabFooter);

/***/ }),

/***/ 84418:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aitab-footer.80d4bd9670f18249c057.css";

/***/ })

}]);
//# sourceMappingURL=components-aitab-page-aitab-footer-aitab-footer-stories.8c961e83.iframe.bundle.js.map