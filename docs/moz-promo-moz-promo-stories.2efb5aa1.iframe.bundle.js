"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1512,4806],{

/***/ 2246:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-promo.49357a147fe2ef3add8b.css";

/***/ }),

/***/ 61512:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozPromo)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_promo_moz_promo_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2246);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11540);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48334);

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
 * @property {string} iconAlignment - How the icon should be aligned. Can be "start", "end", "center".
 */
class MozPromo extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
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
    imageAlignment: {
      type: String,
      reflect: true
    }
  };
  constructor() {
    super();
    this.type = "default";
    this.imageAlignment = "start";
  }
  updated(changedProperties) {
    // super.updated?.(changedProperties);
    if (changedProperties.has("imageSrc") && this.imageSrc) {
      this.style.setProperty("--promo-image-url", `url("${this.imageSrc}")`);
    }
  }
  headingTemplate() {
    if (this.heading) {
      return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<strong class="heading heading-medium"
        >${this.heading}</strong
      >`;
    }
    return "";
  }
  imageTemplate() {
    if (this.imageSrc) {
      return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)` <div class="image-container"></div> `;
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
          <p class="message">${this.message}</p>
        </div>
        ${!imageStartAligned ? this.imageTemplate() : ""}
      </div>`;
  }
}
customElements.define("moz-promo", MozPromo);

/***/ }),

/***/ 71505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   ImageAtCenter: () => (/* binding */ ImageAtCenter),
/* harmony export */   ImageAtEnd: () => (/* binding */ ImageAtEnd),
/* harmony export */   ImageAtStart: () => (/* binding */ ImageAtStart),
/* harmony export */   RectangleImage: () => (/* binding */ RectangleImage),
/* harmony export */   SquareImage: () => (/* binding */ SquareImage),
/* harmony export */   Vibrant: () => (/* binding */ Vibrant),
/* harmony export */   WithHeading: () => (/* binding */ WithHeading),
/* harmony export */   WithWrappedMessage: () => (/* binding */ WithWrappedMessage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11540);
/* harmony import */ var _moz_promo_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61512);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



const fluentStrings = ["moz-promo-message", "moz-promo-message-heading", "moz-promo-message-heading-long"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "UI Widgets/Promo",
  component: "moz-promo",
  argTypes: {
    type: {
      options: ["default", "vibrant"],
      control: {
        type: "select"
      }
    },
    l10nId: {
      options: fluentStrings,
      control: {
        type: "select"
      }
    },
    heading: {
      table: {
        disable: true
      }
    },
    message: {
      table: {
        disable: true
      }
    },
    width: {
      control: {
        type: "number"
      }
    },
    imageAlignment: {
      options: ["start", "end", "center"],
      control: {
        type: "select"
      }
    }
  },
  parameters: {
    status: "in-development",
    fluent: `
moz-promo-message =
  .message = Information about a new feature to check out
moz-promo-message-heading =
  .heading = Check out this new feature
  .message = Information about a new feature to check out
moz-promo-message-heading-long =
  .heading = A longer version of the heading to check for text wrapping, neat!
  .message = A much longer message to check text wrapping within the promotional element. A much longer message to check text wrapping within the promotional element.  
    `
  }
});
const Template = ({
  type,
  heading,
  message,
  l10nId,
  width,
  imageSrc,
  imageAlignment
}) => (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <div style="width: ${width}px">
    <moz-promo
      type=${type}
      heading=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(heading)}
      message=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(message)}
      data-l10n-id=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(l10nId)}
      imageSrc=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(imageSrc)}
      imageAlignment=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(imageAlignment)}
    ></moz-promo>
  </div>
`;
const Default = Template.bind({});
Default.args = {
  width: 600,
  type: "default",
  l10nId: "moz-promo-message"
};
const Vibrant = Template.bind({});
Vibrant.args = {
  ...Default.args,
  type: "vibrant"
};
const WithHeading = Template.bind({});
WithHeading.args = {
  ...Vibrant.args,
  l10nId: "moz-promo-message-heading"
};
const WithWrappedMessage = Template.bind({});
WithWrappedMessage.args = {
  ...Vibrant.args,
  width: 400,
  l10nId: "moz-promo-message-heading-long"
};
const ImageAtStart = Template.bind({});
ImageAtStart.args = {
  ...Default.args,
  imageSrc: "chrome://global/skin/illustrations/about-license.svg",
  imageAlignment: "start"
};
const ImageAtEnd = Template.bind({});
ImageAtEnd.args = {
  ...ImageAtStart.args,
  imageAlignment: "end"
};
const ImageAtCenter = Template.bind({});
ImageAtCenter.args = {
  ...ImageAtStart.args,
  imageAlignment: "center"
};
const SquareImage = Template.bind({});
SquareImage.args = {
  ...ImageAtStart.args
};
const RectangleImage = Template.bind({});
RectangleImage.args = {
  ...ImageAtStart.args,
  imageSrc: "chrome://global/content/aboutconfig/background.svg"
};

/***/ })

}]);
//# sourceMappingURL=moz-promo-moz-promo-stories.2efb5aa1.iframe.bundle.js.map