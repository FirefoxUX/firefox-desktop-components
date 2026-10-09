"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[4637],{

/***/ 20590:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aitab-error.02f338de4866b14d69e3.css";

/***/ }),

/***/ 37856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AITabError: () => (/* binding */ AITabError)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_aitab_page_aitab_error_aitab_error_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20590);
/* harmony import */ var browser_components_aiwindow_ui_components_aitab_page_aitab_base_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58676);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82242);


/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * Error component for the non-existent or unavailable pages for AITab
 */
class AITabError extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.MozLitElement {
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_aitab_page_aitab_base_css__WEBPACK_IMPORTED_MODULE_1__}"
      />
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_aitab_page_aitab_error_aitab_error_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <main class="aitab-error">
        <div class="aitab-error-wrapper">
          <img
            class="aitab-error-image"
            src="chrome://browser/content/aiwindow/assets/aitab-error-kit.svg"
            alt=""
          />
          <div class="aitab-error-text-group" role="alert">
            <h1
              class="aitab-error-heading"
              data-l10n-id="aitab-page-error-heading"
            ></h1>
            <p
              class="aitab-error-description"
              data-l10n-id="aitab-page-error-description"
            ></p>
          </div>
        </div>
      </main>
    `;
  }
}
customElements.define("aitab-error", AITabError);

/***/ }),

/***/ 56185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var chrome_browser_content_aiwindow_components_aitab_error_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37856);
/* harmony import */ var _aitab_story_font_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67092);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */


// eslint-disable-next-line import/no-unassigned-import


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/AI Window/AI Tab Error",
  component: "aitab-error",
  decorators: [_aitab_story_font_mjs__WEBPACK_IMPORTED_MODULE_2__.withHeadingFont],
  parameters: {
    fluent: `
aitab-page-error-heading = This page isn’t available anymore.
aitab-page-error-description = Some other supplementary string.
    `
  }
});
const Template = () => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<aitab-error></aitab-error>`;
const Default = Template.bind({});
Default.args = {};

/***/ }),

/***/ 58676:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aitab-base.8bc08c273fa87d7183bc.css";

/***/ }),

/***/ 67092:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   withHeadingFont: () => (/* binding */ withHeadingFont)
/* harmony export */ });
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/**
 * Storybook-only source for the "Mozilla Headline" heading font used by
 * aitab-base.css. Not packaged in Firefox.
 *
 * In Firefox, AITabParent downloads MozillaHeadline-SemiBold.ttf from the
 * ai-window-aitab Remote Settings collection and aitab-page installs the bytes
 * with FontFace. Storybook has no parent actor, and the Remote Settings CDN
 * sends no CORS headers, so stories load the same family, weight and width
 * from Google Fonts instead. If the Remote Settings file is replaced, update
 * FONT_URL to match.
 */
const FONT_URL = "https://fonts.googleapis.com/css2?family=Mozilla+Headline:wdth,wght@87.5,600&display=swap";

/**
 * Story decorator that adds the heading font stylesheet to the preview
 * document once. @font-face rules apply inside shadow roots from there.
 *
 * @param {Function} story
 */
function withHeadingFont(story) {
  if (!document.querySelector(`link[href="${FONT_URL}"]`)) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = FONT_URL;
    document.head.append(link);
  }
  return story();
}

/***/ })

}]);
//# sourceMappingURL=components-aitab-page-aitab-error-aitab-error-stories.5bfd541b.iframe.bundle.js.map