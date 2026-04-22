"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[9572],{

/***/ 2246:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-promo.7c68870cf0155238898f.css";

/***/ }),

/***/ 89572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozPromo)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_promo_moz_promo_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2246);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * A promotional callout element.
 *
 * @tagname moz-promo
 * @property {string} type - The type of promo, can be either
 *  "default" or "vibrant". Determines the colors of the promotional
 *  element
 * @property {string} heading - The heading of the promo element.
 * @property {string} message - The message of the promo element.
 * @property {string} imageSrc - The main image of the promo element.
 * @property {string} imageAlignment - How the image should be aligned. Can be "start", "end", "center".
 * @property {string} imageWidth - How big the image is sized. Can be "default" or "large".
 * @property {string} imageDisplay - Whether the image touches the edge of the promo or has a little bit of padding around it. Can be "cover" or "padded".
 */
class MozPromo extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static queries = {
    actionsSlot: "slot[name=actions]",
    supportLinkSlot: "slot[name=support-link]",
    actionsSupportWrapper: ".actions-and-support-link-wrapper"
  };
  static properties = {
    type: {
      type: String,
      reflect: true
    },
    heading: {
      type: String,
      fluent: true
    },
    message: {
      type: String,
      fluent: true
    },
    imageSrc: {
      type: String,
      reflect: true
    },
    imageWidth: {
      type: String,
      reflect: true
    },
    imageAlignment: {
      type: String,
      reflect: true
    },
    imageDisplay: {
      type: String,
      reflect: true
    }
  };
  constructor() {
    super();
    this.type = "default";
    this.imageAlignment = "start";
    this.imageWidth = "small";
    this.imageDisplay = "padded";
  }
  handleSlotChange() {
    let hasActions = this.actionsSlot.assignedNodes().length;
    let hasSupport = this.supportLinkSlot.assignedNodes().length;
    this.actionsSupportWrapper.classList.toggle("active", hasActions || hasSupport);
  }
  headingTemplate() {
    if (this.heading) {
      return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<h2 class="heading heading-medium">${this.heading}</h2>`;
    }
    return "";
  }
  imageTemplate() {
    if (this.imageSrc) {
      return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
        <div class="image-container"><img src=${this.imageSrc} alt="" /></div>
      `;
    }
    return "";
  }
  render() {
    let imageStartAligned = this.imageAlignment == "start";
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)` <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_promo_moz_promo_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <div class="container">
        ${imageStartAligned ? this.imageTemplate() : ""}
        <div class="text-container">
          ${this.headingTemplate()}
          <p class="message">
            ${this.message}<span class="actions-and-support-link-wrapper">
              <slot name="actions" @slotchange=${this.handleSlotChange}></slot>
              <slot
                name="support-link"
                @slotchange=${this.handleSlotChange}
              ></slot>
            </span>
          </p>
        </div>
        ${!imageStartAligned ? this.imageTemplate() : ""}
      </div>`;
  }
}
customElements.define("moz-promo", MozPromo);

/***/ })

}]);
//# sourceMappingURL=9572.c10b71c4.iframe.bundle.js.map