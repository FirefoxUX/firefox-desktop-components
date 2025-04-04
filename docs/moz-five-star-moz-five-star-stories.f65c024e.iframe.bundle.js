"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1972,7406],{

/***/ 30077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   FiveStar: () => (/* binding */ FiveStar),
/* harmony export */   Selectable: () => (/* binding */ Selectable),
/* harmony export */   WithTitle: () => (/* binding */ WithTitle),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11540);
/* harmony import */ var _moz_five_star_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81972);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "UI Widgets/Five Star",
  component: "moz-five-star",
  parameters: {
    status: "in-development",
    fluent: `
moz-five-star-title =
  .title = This is the title
moz-five-star-aria-label =
  .aria-label = This is the aria-label
    `,
    actions: {
      handles: ["select"]
    }
  }
});
const Template = ({
  rating,
  ariaLabel,
  l10nId,
  selectable,
  selectedHandler
}) => (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <div style="max-width: 400px">
    <moz-five-star
      rating=${rating}
      aria-label=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(ariaLabel)}
      data-l10n-id=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(l10nId)}
      data-l10n-attrs="aria-label, title"
      ?selectable=${selectable}
      @select=${selectedHandler}
    >
    </moz-five-star>
  </div>
`;
const FiveStar = Template.bind({});
FiveStar.args = {
  rating: 5.0,
  l10nId: "moz-five-star-aria-label"
};
const WithTitle = Template.bind({});
WithTitle.args = {
  ...FiveStar.args,
  rating: 0,
  l10nId: "moz-five-star-title"
};
const Selectable = Template.bind({});
Selectable.args = {
  selectable: true,
  selectedHandler: e => alert(`Selected rating: ${e.detail.rating}`)
};
const Default = Template.bind({});
Default.args = {
  rating: 3.33
};

/***/ }),

/***/ 49314:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-five-star.aa11adde439672040f7c.css";

/***/ }),

/***/ 81972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozFiveStar)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_five_star_moz_five_star_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49314);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11540);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48334);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



window.MozXULElement?.insertFTLIfNeeded("toolkit/global/mozFiveStar.ftl");

/**
 * @typedef {HTMLSpanElement} MozFiveStarRatingStarElement
 */

/**
 * @typedef {{
 *   rating: number
 *   fill: 'full' | 'half' | 'empty'
 * }} MozFiveStarRenderedStarState
 */

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
    },
    selectable: {
      type: Boolean
    }
  };
  constructor() {
    super();

    /**
     * The initial rating that is also dynamically updated to the selected
     * rating if {@link selectable} is set to true.
     *
     * @type {number}
     */
    this.rating = 0;

    /**
     * Whether the stars in the component are selectable.
     *
     * @type {boolean}
     */
    this.selectable = false;
  }
  static get queries() {
    return {
      starEls: {
        all: ".rating-star"
      },
      starsWrapperEl: ".stars"
    };
  }

  /**
   * @returns {Array<MozFiveStarRenderedStarState>}
   */
  getStars() {
    /**
     * @type {Array<MozFiveStarRenderedStarState>}
     */
    let stars = [];
    let roundedRating = Math.round(this.rating * 2) / 2;
    for (let i = 1; i <= 5; i++) {
      if (i <= roundedRating) {
        stars.push({
          rating: i,
          fill: "full"
        });
      } else if (i - roundedRating === 0.5) {
        stars.push({
          rating: i,
          fill: "half"
        });
      } else {
        stars.push({
          rating: i,
          fill: "empty"
        });
      }
    }
    return stars;
  }

  /**
   * @param {MozFiveStarRatingStarElement} ratingStarElement
   * @returns
   */
  getStarElementRating(ratingStarElement) {
    const stringRating = ratingStarElement.getAttribute("rating") || "";
    return parseInt(stringRating, 10);
  }

  /**
   * @param {MouseEvent} e
   */
  onClick(e) {
    if (!this.selectable) {
      return;
    }
    /**
     * @type {MozFiveStarRatingStarElement}
     */
    const ratingStarElement = /**@type {object} */e.target;
    this.rating = this.getStarElementRating(ratingStarElement);
    this.dispatchEvent(new CustomEvent("select", {
      detail: {
        rating: this.rating
      }
    }));
  }
  render() {
    const {
      rating,
      selectable,
      title
    } = this;
    const starsTitle = title || selectable;
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_five_star_moz_five_star_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <div
        class="stars"
        role="img"
        data-l10n-id=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(starsTitle ? undefined : "moz-five-star-rating")}
        data-l10n-args=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(starsTitle ? undefined : JSON.stringify({
      rating
    }))}
      >
        ${this.getStars().map(({
      rating: ratingValue,
      fill
    }) => {
      return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span
            class=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.classMap)({
        "rating-star": true,
        selectable
      })}
            fill=${fill}
            rating=${ratingValue}
            @click=${this.onClick}
            data-l10n-id=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(selectable ? "moz-five-star-rating-rate-text" : undefined)}
            data-l10n-args=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(selectable ? JSON.stringify({
        rating: ratingValue
      }) : undefined)}
          ></span>`;
    })}
      </div>
    `;
  }
}
customElements.define("moz-five-star", MozFiveStar);

/***/ })

}]);
//# sourceMappingURL=moz-five-star-moz-five-star-stories.f65c024e.iframe.bundle.js.map