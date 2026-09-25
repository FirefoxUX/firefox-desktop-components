"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[5808],{

/***/ 28164:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "private-browsing-mask-intro.06ba6d7428e32988897a.css";

/***/ }),

/***/ 85840:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KitIntro: () => (/* binding */ KitIntro),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var _privatebrowsing_content_private_browsing_mask_intro_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95222);
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


// Imported for side-effects: defines <private-browsing-mask-intro>.

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/Private Browsing Window/Kit Intro Animation",
  component: "private-browsing-mask-intro",
  parameters: {
    docs: {
      description: {
        component: "The one-time \"kit\" intro on the private-browsing mask. With `play`, the kit\nbounces inside the circular window then drops out as the mask fades in; without it,\nonly the mask shows. In the product it is gated behind `browser.privateWindowRedesign.enabled`\nand shown once per profile; Storybook always renders it. Toggle **play** to replay."
      }
    }
  },
  argTypes: {
    play: {
      control: "boolean",
      description: "Play the intro (vs. render the final resting state)."
    }
  },
  args: {
    play: true
  }
});
var Template = function Template(_ref) {
  var play = _ref.play;
  return (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  <div style=\"padding: 24px;\">\n    <private-browsing-mask-intro .play=", "></private-browsing-mask-intro>\n  </div>\n"])), play);
};
var KitIntro = Template.bind({});
KitIntro.args = {
  play: true
};

/***/ }),

/***/ 95222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PrivateBrowsingMaskIntro)
/* harmony export */ });
/* harmony import */ var browser_components_privatebrowsing_content_private_browsing_mask_intro_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28164);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * Private-browsing "kit" intro on the fox mask; animates when `play` is set.
 */
class PrivateBrowsingMaskIntro extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    play: {
      type: Boolean
    }
  };
  constructor() {
    super();
    this.play = false;
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_privatebrowsing_content_private_browsing_mask_intro_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <div class="circle ${this.play ? "playing" : ""}">
        <div class="kit"></div>
        <div class="mask"></div>
      </div>
    `;
  }
}
customElements.define("private-browsing-mask-intro", PrivateBrowsingMaskIntro);

/***/ })

}]);
//# sourceMappingURL=private-browsing-kit-intro-stories.f53159a0.iframe.bundle.js.map