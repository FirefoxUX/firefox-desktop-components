"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[7969],{

/***/ 55412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AITabImage: () => (/* binding */ AITabImage)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_aitab_page_aitab_image_aitab_image_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96562);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * Images are 16:9 and reserve their space while loading. Nothing renders
 * without a src or once loading fails.
 *
 * @property {string} src - Image URL.
 * @property {string} alt - Alternative text; empty marks the image decorative.
 */
class AITabImage extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    src: {
      type: String
    },
    alt: {
      type: String
    },
    failed: {
      type: Boolean,
      state: true
    }
  };
  constructor() {
    super();
    this.src = "";
    this.alt = "";
    this.failed = false;
  }
  willUpdate(changedProperties) {
    if (changedProperties.has("src")) {
      this.failed = false;
    }
  }
  render() {
    if (!this.src || this.failed) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_aitab_page_aitab_image_aitab_image_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <div class="aitab-image">
        <img
          class="aitab-image-img"
          src=${this.src}
          alt=${this.alt ?? ""}
          loading="lazy"
          @error=${() => this.failed = true}
        />
      </div>
    `;
  }
}
customElements.define("aitab-image", AITabImage);

/***/ }),

/***/ 81341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Large: () => (/* binding */ Large),
/* harmony export */   Medium: () => (/* binding */ Medium),
/* harmony export */   Thumbnail: () => (/* binding */ Thumbnail),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var chrome_browser_content_aiwindow_components_aitab_image_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55412);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */


// eslint-disable-next-line import-x/no-unassigned-import

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/AI Window/AI Tab Image",
  component: "aitab-image",
  argTypes: {
    src: {
      control: {
        type: "text"
      }
    },
    alt: {
      control: {
        type: "text"
      }
    },
    width: {
      control: {
        type: "number"
      }
    }
  }
});
const Template = ({
  src,
  alt,
  width
}) => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <aitab-image
    style=${`inline-size: ${width}px`}
    src=${src}
    alt=${alt}
  ></aitab-image>
`;
const SRC = "chrome://browser/content/aiwindow/assets/aitab-error-kit.svg";
const Large = Template.bind({});
Large.args = {
  src: SRC,
  alt: "Smart Page illustration",
  width: 640
};
const Medium = Template.bind({});
Medium.args = {
  src: SRC,
  alt: "Smart Page illustration",
  width: 374
};
const Thumbnail = Template.bind({});
Thumbnail.args = {
  src: SRC,
  alt: "Smart Page illustration",
  width: 144
};

/***/ }),

/***/ 96562:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aitab-image.95ab63db1a75d96210fa.css";

/***/ })

}]);
//# sourceMappingURL=components-aitab-page-aitab-image-aitab-image-stories.b30439fd.iframe.bundle.js.map