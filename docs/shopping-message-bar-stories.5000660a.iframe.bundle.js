"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[7328],{

/***/ 38582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var browser_components_shopping_content_shopping_page_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57143);
/* harmony import */ var browser_components_shopping_content_shopping_message_bar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53665);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73689);
/* harmony import */ var chrome_global_content_elements_moz_message_bar_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46949);


/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*-
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* eslint-env mozilla/remote-page */




// eslint-disable-next-line import/no-unassigned-import

const SHOPPING_SIDEBAR_ACTIVE_PREF = "browser.shopping.experience2023.active";
const SHOW_KEEP_SIDEBAR_CLOSED_MESSAGE_PREF = "browser.shopping.experience2023.showKeepSidebarClosedMessage";
const SHOPPING_AUTO_OPEN_SIDEBAR_PREF = "browser.shopping.experience2023.autoOpen.userEnabled";
class ShoppingMessageBar extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.MozLitElement {
  #MESSAGE_TYPES_RENDER_TEMPLATE_MAPPING = new Map([["stale", () => this.staleWarningTemplate()], ["generic-error", () => this.genericErrorTemplate()], ["not-enough-reviews", () => this.notEnoughReviewsTemplate()], ["product-not-available", () => this.productNotAvailableTemplate()], ["thanks-for-reporting", () => this.thanksForReportingTemplate()], ["product-not-available-reported", () => this.productNotAvailableReportedTemplate()], ["analysis-in-progress", () => this.analysisInProgressTemplate()], ["reanalysis-in-progress", () => this.reanalysisInProgressTemplate()], ["page-not-supported", () => this.pageNotSupportedTemplate()], ["thank-you-for-feedback", () => this.thankYouForFeedbackTemplate()], ["keep-closed", () => this.keepClosedTemplate()]]);
  static properties = {
    type: {
      type: String
    },
    productUrl: {
      type: String,
      reflect: true
    },
    progress: {
      type: Number,
      reflect: true
    }
  };
  static get queries() {
    return {
      reAnalysisButtonEl: "#message-bar-reanalysis-button",
      productAvailableBtnEl: "#message-bar-report-product-available-btn",
      yesKeepClosedButtonEl: "#yes-keep-closed-button",
      noThanksButtonEl: "#no-thanks-button"
    };
  }
  onClickAnalysisButton() {
    this.dispatchEvent(new CustomEvent("ReanalysisRequested", {
      bubbles: true,
      composed: true
    }));
    Glean.shopping.surfaceReanalyzeClicked.record();
  }
  onClickProductAvailable() {
    this.dispatchEvent(new CustomEvent("ReportedProductAvailable", {
      bubbles: true,
      composed: true
    }));
  }
  handleNoThanksClick() {
    RPMSetPref(SHOPPING_SIDEBAR_ACTIVE_PREF, false);
    RPMSetPref(SHOW_KEEP_SIDEBAR_CLOSED_MESSAGE_PREF, false);
    this.dispatchEvent(new CustomEvent("HideKeepClosedMessage", {
      bubbles: true,
      composed: true
    }));
    Glean.shopping.surfaceNoThanksButtonClicked.record();
  }
  handleKeepClosedClick() {
    RPMSetPref(SHOPPING_SIDEBAR_ACTIVE_PREF, false);
    RPMSetPref(SHOW_KEEP_SIDEBAR_CLOSED_MESSAGE_PREF, false);
    RPMSetPref(SHOPPING_AUTO_OPEN_SIDEBAR_PREF, false);
    this.dispatchEvent(new CustomEvent("HideKeepClosedMessage", {
      bubbles: true,
      composed: true
    }));
    Glean.shopping.surfaceYesKeepClosedButtonClicked.record();
  }
  staleWarningTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<div class="shopping-message-bar">
      <span class="icon"></span>
      <article id="message-bar-container" aria-labelledby="header">
        <span
          data-l10n-id="shopping-message-bar-warning-stale-analysis-message-2"
        ></span>
        <button
          id="message-bar-reanalysis-button"
          class="small-button shopping-button"
          data-l10n-id="shopping-message-bar-warning-stale-analysis-button"
          @click=${this.onClickAnalysisButton}
        ></button>
      </article>
    </div>`;
  }
  genericErrorTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<moz-message-bar
      data-l10n-attrs="heading, message"
      type="warning"
      data-l10n-id="shopping-message-bar-generic-error"
    >
    </moz-message-bar>`;
  }
  notEnoughReviewsTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<moz-message-bar
      data-l10n-attrs="heading, message"
      type="warning"
      data-l10n-id="shopping-message-bar-warning-not-enough-reviews"
    >
    </moz-message-bar>`;
  }
  productNotAvailableTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<moz-message-bar
      data-l10n-attrs="heading, message"
      type="warning"
      data-l10n-id="shopping-message-bar-warning-product-not-available"
    >
      <button
        slot="actions"
        id="message-bar-report-product-available-btn"
        class="small-button shopping-button"
        data-l10n-id="shopping-message-bar-warning-product-not-available-button2"
        @click=${this.onClickProductAvailable}
      ></button>
    </moz-message-bar>`;
  }
  thanksForReportingTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<moz-message-bar
      data-l10n-attrs="heading, message"
      type="info"
      data-l10n-id="shopping-message-bar-thanks-for-reporting"
    >
    </moz-message-bar>`;
  }
  productNotAvailableReportedTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<moz-message-bar
      data-l10n-attrs="heading, message"
      type="warning"
      data-l10n-id="shopping-message-bar-warning-product-not-available-reported"
    >
    </moz-message-bar>`;
  }
  analysisInProgressTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<div
      class="shopping-message-bar analysis-in-progress"
      style=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.styleMap)({
      "--analysis-progress-pcent": `${this.progress}%`
    })}
    >
      <span class="icon"></span>
      <article
        id="message-bar-container"
        aria-labelledby="header"
        type="analysis"
      >
        <strong
          id="header"
          data-l10n-id="shopping-message-bar-analysis-in-progress-with-amount"
          data-l10n-args="${JSON.stringify({
      percentage: Math.round(this.progress)
    })}"
        ></strong>
        <span
          data-l10n-id="shopping-message-bar-analysis-in-progress-message2"
        ></span>
      </article>
    </div>`;
  }
  reanalysisInProgressTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<div
      class="shopping-message-bar"
      id="reanalysis-in-progress-message"
      style=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.styleMap)({
      "--analysis-progress-pcent": `${this.progress}%`
    })}
    >
      <span class="icon"></span>
      <article
        id="message-bar-container"
        aria-labelledby="header"
        type="re-analysis"
      >
        <span
          id="header"
          data-l10n-id="shopping-message-bar-analysis-in-progress-with-amount"
          data-l10n-args="${JSON.stringify({
      percentage: Math.round(this.progress)
    })}"
        ></span>
      </article>
    </div>`;
  }
  pageNotSupportedTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<moz-message-bar
      data-l10n-attrs="heading, message"
      type="warning"
      data-l10n-id="shopping-message-bar-page-not-supported"
    >
    </moz-message-bar>`;
  }
  thankYouForFeedbackTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<moz-message-bar
      data-l10n-attrs="heading"
      type="success"
      dismissable
      data-l10n-id="shopping-survey-thanks"
    >
    </moz-message-bar>`;
  }
  keepClosedTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<moz-message-bar
      data-l10n-attrs="heading, message"
      type="info"
      data-l10n-id="shopping-message-bar-keep-closed-header"
    >
      <moz-button-group slot="actions">
        <button
          id="no-thanks-button"
          class="small-button shopping-button"
          data-l10n-id="shopping-message-bar-keep-closed-dismiss-button"
          @click=${this.handleNoThanksClick}
        ></button>
        <button
          id="yes-keep-closed-button"
          class="primary small-button shopping-button"
          data-l10n-id="shopping-message-bar-keep-closed-accept-button"
          @click=${this.handleKeepClosedClick}
        ></button>
      </moz-button-group>
    </moz-message-bar>`;
  }
  render() {
    let messageBarTemplate = this.#MESSAGE_TYPES_RENDER_TEMPLATE_MAPPING.get(this.type)();
    if (messageBarTemplate) {
      if (this.type == "stale") {
        Glean.shopping.surfaceStaleAnalysisShown.record();
      }
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`
        <link
          rel="stylesheet"
          href="${browser_components_shopping_content_shopping_message_bar_css__WEBPACK_IMPORTED_MODULE_1__}"
        />
        <link
          rel="stylesheet"
          href="${browser_components_shopping_content_shopping_page_css__WEBPACK_IMPORTED_MODULE_0__}"
        />
        ${messageBarTemplate}
      `;
    }
    return null;
  }
}
customElements.define("shopping-message-bar", ShoppingMessageBar);

/***/ }),

/***/ 15872:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozButton)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_button_moz_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54078);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45717);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73689);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * A button with multiple types and two sizes.
 *
 * @tagname moz-button
 * @property {string} label - The button's label, will be overridden by slotted content.
 * @property {string} type - The button type.
 *   Options: default, primary, destructive, icon, icon ghost, ghost.
 * @property {string} size - The button size.
 *   Options: default, small.
 * @property {boolean} disabled - The disabled state.
 * @property {string} title - The button's title attribute, used in shadow DOM and therefore not as an attribute on moz-button.
 * @property {string} titleAttribute - Internal, map title attribute to the title JS property.
 * @property {string} tooltipText - Set the title property, the title attribute will be used first.
 * @property {string} ariaLabel - The button's arial-label attribute, used in shadow DOM and therefore not as an attribute on moz-button.
 * @property {string} iconSrc - Path to the icon that should be displayed in the button.
 * @property {string} ariaLabelAttribute - Internal, map aria-label attribute to the ariaLabel JS property.
 * @property {string} hasVisibleLabel - Internal, tracks whether or not the button has a visible label.
 * @property {HTMLButtonElement} buttonEl - The internal button element in the shadow DOM.
 * @property {HTMLButtonElement} slotEl - The internal slot element in the shadow DOM.
 * @slot default - The button's content, overrides label property.
 * @fires click - The click event.
 */
class MozButton extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static shadowRootOptions = {
    ..._lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement.shadowRootOptions,
    delegatesFocus: true
  };
  static properties = {
    label: {
      type: String,
      reflect: true
    },
    type: {
      type: String,
      reflect: true
    },
    size: {
      type: String,
      reflect: true
    },
    disabled: {
      type: Boolean,
      reflect: true
    },
    title: {
      type: String,
      state: true
    },
    titleAttribute: {
      type: String,
      attribute: "title",
      reflect: true
    },
    tooltipText: {
      type: String
    },
    ariaLabelAttribute: {
      type: String,
      attribute: "aria-label",
      reflect: true
    },
    ariaLabel: {
      type: String,
      state: true
    },
    iconSrc: {
      type: String
    },
    hasVisibleLabel: {
      type: Boolean,
      state: true
    }
  };
  static queries = {
    buttonEl: "button",
    slotEl: "slot"
  };
  constructor() {
    super();
    this.type = "default";
    this.size = "default";
    this.disabled = false;
    this.hasVisibleLabel = !!this.label;
  }
  willUpdate(changes) {
    if (changes.has("titleAttribute")) {
      this.title = this.titleAttribute;
      this.titleAttribute = null;
    }
    if (changes.has("ariaLabelAttribute")) {
      this.ariaLabel = this.ariaLabelAttribute;
      this.ariaLabelAttribute = null;
    }
  }

  // Delegate clicks on host to the button element.
  click() {
    this.buttonEl.click();
  }
  checkForLabelText() {
    this.hasVisibleLabel = this.slotEl.assignedNodes().some(node => node.textContent.trim());
  }
  render() {
    return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_button_moz_button_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <button
        type=${this.type}
        size=${this.size}
        ?disabled=${this.disabled}
        title=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.title || this.tooltipText)}
        aria-label=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.ariaLabel)}
        part="button"
        class=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.classMap)({
      labelled: this.label || this.hasVisibleLabel
    })}
      >
        ${this.iconSrc ? _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`<img src=${this.iconSrc} role="presentation" />` : ""}
        <slot @slotchange=${this.checkForLabelText}>${this.label}</slot>
      </button>
    `;
  }
}
customElements.define("moz-button", MozButton);

/***/ }),

/***/ 46949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozMessageBar)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_message_bar_moz_message_bar_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84296);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45717);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73689);
/* harmony import */ var chrome_global_content_elements_moz_button_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15872);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



// eslint-disable-next-line import/no-unassigned-import

const messageTypeToIconData = {
  info: {
    iconSrc: "chrome://global/skin/icons/info-filled.svg",
    l10nId: "moz-message-bar-icon-info"
  },
  warning: {
    iconSrc: "chrome://global/skin/icons/warning.svg",
    l10nId: "moz-message-bar-icon-warning"
  },
  success: {
    iconSrc: "chrome://global/skin/icons/check-filled.svg",
    l10nId: "moz-message-bar-icon-success"
  },
  error: {
    iconSrc: "chrome://global/skin/icons/error.svg",
    l10nId: "moz-message-bar-icon-error"
  },
  critical: {
    iconSrc: "chrome://global/skin/icons/error.svg",
    l10nId: "moz-message-bar-icon-error"
  }
};

/**
 * A simple message bar element that can be used to display
 * important information to users.
 *
 * @tagname moz-message-bar
 * @property {string} type - The type of the displayed message.
 * @property {string} heading - The heading of the message.
 * @property {string} message - The message text.
 * @property {boolean} dismissable - Whether or not the element is dismissable.
 * @property {string} messageL10nId - l10n ID for the message.
 * @property {string} messageL10nArgs - Any args needed for the message l10n ID.
 * @fires message-bar:close
 *  Custom event indicating that message bar was closed.
 * @fires message-bar:user-dismissed
 *  Custom event indicating that message bar was dismissed by the user.
 */

class MozMessageBar extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static queries = {
    actionsSlot: "slot[name=actions]",
    actionsEl: ".actions",
    closeButton: "moz-button.close",
    supportLinkSlot: "slot[name=support-link]"
  };
  static properties = {
    type: {
      type: String
    },
    heading: {
      type: String
    },
    message: {
      type: String
    },
    dismissable: {
      type: Boolean
    },
    messageL10nId: {
      type: String
    },
    messageL10nArgs: {
      type: String
    }
  };
  constructor() {
    super();
    window.MozXULElement?.insertFTLIfNeeded("toolkit/global/mozMessageBar.ftl");
    this.type = "info";
    this.dismissable = false;
  }
  onSlotchange() {
    let actions = this.actionsSlot.assignedNodes();
    this.actionsEl.classList.toggle("active", actions.length);
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "alert");
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.dispatchEvent(new CustomEvent("message-bar:close"));
  }
  get supportLinkEls() {
    return this.supportLinkSlot.assignedElements();
  }
  iconTemplate() {
    let iconData = messageTypeToIconData[this.type];
    if (iconData) {
      let {
        iconSrc,
        l10nId
      } = iconData;
      return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
        <div class="icon-container">
          <img
            class="icon"
            src=${iconSrc}
            data-l10n-id=${l10nId}
            data-l10n-attrs="alt"
          />
        </div>
      `;
    }
    return "";
  }
  headingTemplate() {
    if (this.heading) {
      return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`<strong class="heading">${this.heading}</strong>`;
    }
    return "";
  }
  closeButtonTemplate({
    size
  } = {}) {
    if (this.dismissable) {
      return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
        <moz-button
          type="icon ghost"
          class="close"
          size=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(size)}
          data-l10n-id="moz-message-bar-close-button"
          @click=${this.dismiss}
        ></moz-button>
      `;
    }
    return "";
  }
  render() {
    return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_message_bar_moz_message_bar_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <div class="container">
        <div class="content">
          <div class="text-container">
            ${this.iconTemplate()}
            <div class="text-content">
              ${this.headingTemplate()}
              <div>
                <span
                  class="message"
                  data-l10n-id=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.messageL10nId)}
                  data-l10n-args=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(JSON.stringify(this.messageL10nArgs))}
                >
                  ${this.message}
                </span>
                <span class="link">
                  <slot name="support-link"></slot>
                </span>
              </div>
            </div>
          </div>
          <span class="actions">
            <slot name="actions" @slotchange=${this.onSlotchange}></slot>
          </span>
        </div>
        ${this.closeButtonTemplate()}
      </div>
    `;
  }
  dismiss() {
    this.dispatchEvent(new CustomEvent("message-bar:user-dismissed"));
    this.close();
  }
  close() {
    this.remove();
  }
}
customElements.define("moz-message-bar", MozMessageBar);

/***/ }),

/***/ 98161:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultShoppingMessageBar": () => (/* binding */ DefaultShoppingMessageBar),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45717);
/* harmony import */ var browser_components_shopping_content_shopping_message_bar_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38582);
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// eslint-disable-next-line import/no-unresolved

// eslint-disable-next-line import/no-unassigned-import

window.MozXULElement.insertFTLIfNeeded("browser/shopping.ftl");
window.MozXULElement.insertFTLIfNeeded("toolkit/branding/brandings.ftl");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/Shopping/Shopping Message Bar",
  component: "shopping-message-bar",
  argTypes: {
    type: {
      control: {
        type: "select"
      },
      options: ["stale", "generic-error", "not-enough-reviews", "product-not-available", "product-not-available-reported", "thanks-for-reporting", "analysis-in-progress", "reanalysis-in-progress", "page-not-supported", "thank-you-for-feedback"]
    }
  },
  parameters: {
    status: "in-development",
    actions: {
      handles: ["click"]
    }
  }
});
var Template = function Template(_ref) {
  var type = _ref.type,
    progress = _ref.progress;
  return (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  <shopping-message-bar\n    type=", "\n    progress=", "\n  ></shopping-message-bar>\n"])), (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(type), (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(progress));
};
var DefaultShoppingMessageBar = Template.bind({});
DefaultShoppingMessageBar.args = {
  type: "stale",
  progress: 0
};

/***/ }),

/***/ 53665:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "shopping-message-bar.70ce85ff4e48cc311a96.css";

/***/ }),

/***/ 57143:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "shopping-page.6a31e49ef5f99086bbbc.css";

/***/ }),

/***/ 54078:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-button.23df0832914dcc7f1980.css";

/***/ }),

/***/ 84296:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-message-bar.a0c47882cf100c1990dc.css";

/***/ })

}]);
//# sourceMappingURL=shopping-message-bar-stories.5000660a.iframe.bundle.js.map