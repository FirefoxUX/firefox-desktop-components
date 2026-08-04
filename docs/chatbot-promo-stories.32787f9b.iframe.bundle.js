"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[4614,9572],{

/***/ 2246:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-promo.febe6b1106953d83a9c2.css";

/***/ }),

/***/ 12205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   LongCopy: () => (/* binding */ LongCopy),
/* harmony export */   NoButtons: () => (/* binding */ NoButtons),
/* harmony export */   PrimaryActionOnly: () => (/* binding */ PrimaryActionOnly),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var chrome_browser_content_genai_content_chatbot_promo_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43908);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


// eslint-disable-next-line import/no-unassigned-import

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/GenAI/Chatbot Promo",
  component: "chatbot-promo",
  argTypes: {
    type: {
      options: ["default", "vibrant"],
      control: {
        type: "select"
      }
    }
  },
  parameters: {
    status: "in-development",
    docs: {
      description: {
        component: "An asrouter-driven promotional card rendered in the chatbot sidebar footer. Receives resolved content (heading, message, action labels) via the `message` property and dispatches `ChatbotPromo:PrimaryAction`, `ChatbotPromo:Close`, and `ChatbotPromo:Impression` events. The surrounding gradient background comes from the `.promo-active` rule in chat.css and so is not reproduced here."
      }
    }
  }
});
const Template = ({
  type,
  heading,
  message,
  primaryActionText,
  additionalActionText
}) => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <div style="width: 360px; padding: 16px;">
    <chatbot-promo
      .message=${{
  type,
  heading,
  message,
  primaryActionText,
  additionalActionText
}}
      @ChatbotPromo:PrimaryAction=${() =>
// eslint-disable-next-line no-console
console.log("ChatbotPromo:PrimaryAction")}
      @ChatbotPromo:Close=${() =>
// eslint-disable-next-line no-console
console.log("ChatbotPromo:Close")}
      @ChatbotPromo:Impression=${() =>
// eslint-disable-next-line no-console
console.log("ChatbotPromo:Impression")}
    ></chatbot-promo>
  </div>
`;
const Default = Template.bind({});
Default.args = {
  type: "default",
  heading: "Give your AI the full picture",
  message: "In Smart Window, AI reads every page and tab you have open, not just this sidebar. Skip the copy-paste and just ask.",
  primaryActionText: "Try Smart Window",
  additionalActionText: "Dismiss"
};
const PrimaryActionOnly = Template.bind({});
PrimaryActionOnly.args = {
  ...Default.args,
  additionalActionText: ""
};
const NoButtons = Template.bind({});
NoButtons.args = {
  ...Default.args,
  primaryActionText: "",
  additionalActionText: ""
};
const LongCopy = Template.bind({});
LongCopy.args = {
  ...Default.args,
  heading: "A longer heading to verify wrapping inside the promo card",
  message: "A much longer message to confirm wrapping and spacing within the promo card when the sidebar is narrow and the copy runs to several lines."
};

/***/ }),

/***/ 43908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatbotPromo: () => (/* binding */ ChatbotPromo)
/* harmony export */ });
/* harmony import */ var browser_components_genai_content_chatbot_promo_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81754);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);
/* harmony import */ var chrome_global_content_elements_moz_promo_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89572);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



// eslint-disable-next-line import/no-unassigned-import


// Event names are owned by the handler module so both sides stay in sync. In
// Storybook the sys.mjs isn't reachable, so fall back to inline literals.
const SIDEBAR_CHATBOT_PROMO_EVENTS = window.IS_STORYBOOK ? Object.freeze({
  PRIMARY: "ChatbotPromo:PrimaryAction",
  CLOSE: "ChatbotPromo:Close",
  IMPRESSION: "ChatbotPromo:Impression"
}) : ChromeUtils.importESModule("resource:///modules/asrouter/SidebarChatBotPromo.sys.mjs").SIDEBAR_CHATBOT_PROMO_EVENTS;

/**
 * Renders a promotional card in the chatbot sidebar footer. Receives resolved
 * content via the `message` property and dispatches
 * `ChatbotPromo:PrimaryAction` / `ChatbotPromo:Close` / `ChatbotPromo:Impression`
 * events. All messaging-system behavior (content resolution, impressions,
 * button actions) lives in SidebarChatBotPromo.sys.mjs; this element only
 * renders and reports interactions.
 *
 * @property {object|null} message - Resolved promo content
 */
class ChatbotPromo extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
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
  updated(changedProperties) {
    // Arm impression detection once content arrives. If the document isn't
    // visible yet, wait for it so impressions only count when actually shown.
    if (changedProperties.has("message") && this.message && !this.#impressionFired && !this.#maybeFireImpression()) {
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
    this.#dispatch(SIDEBAR_CHATBOT_PROMO_EVENTS.IMPRESSION);
    return true;
  }
  #dispatch(type) {
    this.dispatchEvent(new CustomEvent(type, {
      bubbles: true,
      composed: true
    }));
  }
  #handlePrimary = () => this.#dispatch(SIDEBAR_CHATBOT_PROMO_EVENTS.PRIMARY);
  #handleClose = () => this.#dispatch(SIDEBAR_CHATBOT_PROMO_EVENTS.CLOSE);
  render() {
    const content = this.message;
    if (!content) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_genai_content_chatbot_promo_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <div class="promo-container">
        <moz-promo
          type=${content.type ?? "default"}
          heading=${content.heading ?? ""}
          message=${content.message ?? ""}
        >
          ${content.additionalActionText || content.primaryActionText ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div class="chatbot-promo-footer" slot="actions">
                ${content.additionalActionText ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<moz-button type="default" @click=${this.#handleClose}>
                      ${content.additionalActionText}
                    </moz-button>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
                ${content.primaryActionText ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<moz-button
                      type="default"
                      @click=${this.#handlePrimary}
                    >
                      ${content.primaryActionText}
                    </moz-button>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
              </div>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
        </moz-promo>
      </div>
    `;
  }
}
customElements.define("chatbot-promo", ChatbotPromo);

/***/ }),

/***/ 81754:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "chatbot-promo.10932d68e2961e0fad7d.css";

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
//# sourceMappingURL=chatbot-promo-stories.32787f9b.iframe.bundle.js.map