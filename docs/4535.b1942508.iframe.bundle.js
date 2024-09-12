"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[4535],{

/***/ 34535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozFiveStar)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_five_star_moz_five_star_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32248);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45717);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73689);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



window.MozXULElement?.insertFTLIfNeeded("toolkit/global/mozFiveStar.ftl");

/**
 * The visual representation is five stars, each of them either empty,
 * half-filled or full. The fill state is derived from the rating,
 * rounded to the nearest half.
 *
 * @tagname moz-five-star
 * @property {number} rating - The rating out of 5.
 * @property {string} title - The title text.
 */
class MozFiveStar extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    rating: {
      type: Number,
      reflect: true
    },
    title: {
      type: String
    }
  };
  static get queries() {
    return {
      starEls: {
        all: ".rating-star"
      },
      starsWrapperEl: ".stars"
    };
  }
  getStarsFill() {
    let starFill = [];
    let roundedRating = Math.round(this.rating * 2) / 2;
    for (let i = 1; i <= 5; i++) {
      if (i <= roundedRating) {
        starFill.push("full");
      } else if (i - roundedRating === 0.5) {
        starFill.push("half");
      } else {
        starFill.push("empty");
      }
    }
    return starFill;
  }
  render() {
    let starFill = this.getStarsFill();
    return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_five_star_moz_five_star_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <div
        class="stars"
        role="img"
        data-l10n-id=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.title ? undefined : "moz-five-star-rating")}
        data-l10n-args=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.title ? undefined : JSON.stringify({
      rating: this.rating ?? 0
    }))}
      >
        ${starFill.map(fill => _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`<span class="rating-star" fill="${fill}"></span>`)}
      </div>
    `;
  }
}
customElements.define("moz-five-star", MozFiveStar);

/***/ }),

/***/ 32248:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-five-star.632b0b4846b1efe66c0e.css";

/***/ })

}]);
//# sourceMappingURL=4535.b1942508.iframe.bundle.js.map