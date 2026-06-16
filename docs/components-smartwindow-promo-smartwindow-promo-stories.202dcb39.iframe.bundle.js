"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[583,9572],{

/***/ 2246:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-promo.febe6b1106953d83a9c2.css";

/***/ }),

/***/ 72562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SmartwindowPromo: () => (/* binding */ SmartwindowPromo)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_smartwindow_promo_smartwindow_promo_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84846);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);
/* harmony import */ var chrome_global_content_elements_moz_promo_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89572);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



// eslint-disable-next-line import/no-unassigned-import

const SMARTWINDOW_PROMO_EVENTS = window.IS_STORYBOOK ? Object.freeze({
  PRIMARY: "SmartWindowPromo:PrimaryAction",
  CLOSE: "SmartWindowPromo:Close",
  IMPRESSION: "SmartWindowPromo:Impression"
}) : ChromeUtils.importESModule("resource:///modules/asrouter/SmartWindowNewTabPromo.sys.mjs").SMARTWINDOW_PROMO_EVENTS;

/**
 * Renders an asrouter-driven promotional message inside the AI window.
 * Receives a resolved message via the `message` property and dispatches
 * `SmartWindowPromo:PrimaryAction` / `SmartWindowPromo:Close` /
 * `SmartWindowPromo:Impression` events.
 *
 * @property {object|null} message - Resolved promo content
 */
class SmartwindowPromo extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    message: {
      type: Object
    }
  };
  #impressionFired = false;
  #onVisibilityChange = () => this.#maybeFireImpression();
  constructor() {
    super();
    this.message = null;
  }
  connectedCallback() {
    super.connectedCallback();
    if (!this.#maybeFireImpression()) {
      this.ownerDocument.addEventListener("visibilitychange", this.#onVisibilityChange);
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.ownerDocument.removeEventListener("visibilitychange", this.#onVisibilityChange);
  }
  #maybeFireImpression() {
    if (this.#impressionFired || this.ownerDocument.visibilityState !== "visible") {
      return this.#impressionFired;
    }
    this.#impressionFired = true;
    this.ownerDocument.removeEventListener("visibilitychange", this.#onVisibilityChange);
    this.#dispatch(SMARTWINDOW_PROMO_EVENTS.IMPRESSION);
    return true;
  }
  #dispatch(type) {
    this.dispatchEvent(new CustomEvent(type, {
      bubbles: true,
      composed: true
    }));
  }
  #handlePrimary = () => this.#dispatch(SMARTWINDOW_PROMO_EVENTS.PRIMARY);
  #handleClose = () => this.#dispatch(SMARTWINDOW_PROMO_EVENTS.CLOSE);
  render() {
    const content = this.message ?? {};
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_smartwindow_promo_smartwindow_promo_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <moz-promo
        type=${content.type ?? "vibrant"}
        heading=${content.heading ?? ""}
        message=${content.message ?? ""}
        imagesrc=${content.imageSrc ?? ""}
        imagealignment=${content.imageAlignment ?? "start"}
        imagewidth=${content.imageWidth ?? "small"}
        imagedisplay=${content.imageDisplay ?? "padded"}
      >
        ${content.secondaryActionText ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<moz-button
              slot="actions"
              type="ghost"
              @click=${this.#handleClose}
            >
              ${content.secondaryActionText}
            </moz-button>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
        ${content.primaryActionText ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<moz-button
              slot="actions"
              type="primary"
              @click=${this.#handlePrimary}
            >
              ${content.primaryActionText}
            </moz-button>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
      </moz-promo>
    `;
  }
}
customElements.define("smartwindow-promo", SmartwindowPromo);

/***/ }),

/***/ 76103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   DefaultType: () => (/* binding */ DefaultType),
/* harmony export */   LongCopy: () => (/* binding */ LongCopy),
/* harmony export */   NoImage: () => (/* binding */ NoImage),
/* harmony export */   PrimaryActionOnly: () => (/* binding */ PrimaryActionOnly),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var chrome_browser_content_aiwindow_components_smartwindow_promo_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72562);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/AI Window/Smartwindow Promo",
  component: "smartwindow-promo",
  argTypes: {
    type: {
      options: ["default", "vibrant"],
      control: {
        type: "select"
      }
    },
    imageAlignment: {
      options: ["start", "end", "center"],
      control: {
        type: "select"
      }
    },
    imageWidth: {
      options: ["small", "large"],
      control: {
        type: "radio"
      }
    },
    imageDisplay: {
      options: ["cover", "padded"],
      control: {
        type: "radio"
      }
    }
  },
  parameters: {
    status: "in-development",
    docs: {
      description: {
        component: "An asrouter-driven promotional card rendered inside the AI window. Receives resolved content (heading, message, image, action labels) via the `message` property and dispatches `SmartWindowPromo:PrimaryAction`, `SmartWindowPromo:Close`, and `SmartWindowPromo:Impression` events."
      }
    }
  }
});
const Template = ({
  type,
  heading,
  message,
  imageSrc,
  imageAlignment,
  imageWidth,
  imageDisplay,
  primaryActionText,
  secondaryActionText
}) => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <div style="width: 360px; padding: 16px;">
    <smartwindow-promo
      .message=${{
  type,
  heading,
  message,
  imageSrc,
  imageAlignment,
  imageWidth,
  imageDisplay,
  primaryActionText,
  secondaryActionText
}}
      @SmartWindowPromo:PrimaryAction=${() =>
// eslint-disable-next-line no-console
console.log("SmartWindowPromo:PrimaryAction")}
      @SmartWindowPromo:Close=${() =>
// eslint-disable-next-line no-console
console.log("SmartWindowPromo:Close")}
      @SmartWindowPromo:Impression=${() =>
// eslint-disable-next-line no-console
console.log("SmartWindowPromo:Impression")}
    ></smartwindow-promo>
  </div>
`;
const Default = Template.bind({});
Default.args = {
  type: "vibrant",
  heading: "Make Smart Window your default?",
  message: "Firefox will open in Smart Window every time.",
  imageSrc: "chrome://browser/content/aiwindow/assets/smart-window-promo-default.svg",
  imageAlignment: "start",
  imageWidth: "small",
  imageDisplay: "padded",
  primaryActionText: "Set as default",
  secondaryActionText: "Not now"
};
const PrimaryActionOnly = Template.bind({});
PrimaryActionOnly.args = {
  ...Default.args,
  secondaryActionText: ""
};
const NoImage = Template.bind({});
NoImage.args = {
  ...Default.args,
  imageSrc: ""
};
const DefaultType = Template.bind({});
DefaultType.args = {
  ...Default.args,
  type: "default"
};
const LongCopy = Template.bind({});
LongCopy.args = {
  ...Default.args,
  heading: "A longer heading to verify wrapping inside the promo card",
  message: "A much longer message to confirm wrapping and spacing within the promo card across different image sizes and alignments."
};

/***/ }),

/***/ 84846:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "smartwindow-promo.d478ecf5695789cff822.css";

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
 * @property {string} imageWidth - How big the image is sized. Can be "default", "small" or "large".
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
//# sourceMappingURL=components-smartwindow-promo-smartwindow-promo-stories.202dcb39.iframe.bundle.js.map