"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[9613],{

/***/ 22987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozMessageBar)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_message_bar_moz_message_bar_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84296);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1659);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68164);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




const messageTypeToIconData = {
  info: {
    iconSrc: "chrome://global/skin/icons/info-filled.svg",
    l10nId: "moz-message-bar-icon-info",
  },
  warning: {
    iconSrc: "chrome://global/skin/icons/warning.svg",
    l10nId: "moz-message-bar-icon-warning",
  },
  success: {
    iconSrc: "chrome://global/skin/icons/check-filled.svg",
    l10nId: "moz-message-bar-icon-success",
  },
  error: {
    iconSrc: "chrome://global/skin/icons/error.svg",
    l10nId: "moz-message-bar-icon-error",
  },
  critical: {
    iconSrc: "chrome://global/skin/icons/error.svg",
    l10nId: "moz-message-bar-icon-error",
  },
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
 *  @fires message-bar:user-dismissed
 *  Custom event indicating that message bar was dismissed by the user.
 */

class MozMessageBar extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static queries = {
    actionsSlotEl: "slot[name=actions]",
    actionsEl: ".actions",
    closeButtonEl: "button.close",
    supportLinkSlotEl: "slot[name=support-link]",
  };

  static properties = {
    type: { type: String },
    heading: { type: String },
    message: { type: String },
    dismissable: { type: Boolean },
    messageL10nId: { type: String },
    messageL10nArgs: { type: String },
  };

  constructor() {
    super();
    window.MozXULElement?.insertFTLIfNeeded("toolkit/global/mozMessageBar.ftl");
    this.type = "info";
    this.dismissable = false;
  }

  onSlotchange() {
    let actions = this.actionsSlotEl.assignedNodes();
    this.actionsEl.classList.toggle("active", actions.length);
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "status");
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.dispatchEvent(new CustomEvent("message-bar:close"));
  }

  get supportLinkEls() {
    return this.supportLinkSlotEl.assignedElements();
  }

  iconTemplate() {
    let iconData = messageTypeToIconData[this.type];
    if (iconData) {
      let { iconSrc, l10nId } = iconData;
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

  closeButtonTemplate() {
    if (this.dismissable) {
      return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
        <button
          class="close ghost-button"
          data-l10n-id="moz-message-bar-close-button"
          @click=${this.dismiss}
        ></button>
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
                  data-l10n-args=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(
                    JSON.stringify(this.messageL10nArgs)
                  )}
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

/***/ 58280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Default": () => (/* binding */ Default),
/* harmony export */   "Dismissable": () => (/* binding */ Dismissable),
/* harmony export */   "WithActionButton": () => (/* binding */ WithActionButton),
/* harmony export */   "WithHeading": () => (/* binding */ WithHeading),
/* harmony export */   "WithSupportLink": () => (/* binding */ WithSupportLink),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1659);
/* harmony import */ var _moz_message_bar_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22987);
/* harmony import */ var _moz_support_link_moz_support_link_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67505);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
/* eslint-disable import/no-unassigned-import */





const fluentStrings = [
  "moz-message-bar-message",
  "moz-message-bar-message-heading",
  "moz-message-bar-message-heading-long",
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "UI Widgets/Message Bar",
  component: "moz-message-bar",
  argTypes: {
    type: {
      options: ["info", "warning", "success", "error"],
      control: { type: "select" },
    },
    l10nId: {
      options: fluentStrings,
      control: { type: "select" },
    },
    heading: {
      table: {
        disable: true,
      },
    },
    message: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    status: "stable",
    fluent: `
moz-message-bar-message =
  .message = For your information message
moz-message-bar-message-heading =
  .heading = Heading
  .message = For your information message
moz-message-bar-message-heading-long =
  .heading = A longer heading to check text wrapping in the message bar
  .message = Some message that we use to check text wrapping. Some message that we use to check text wrapping.
moz-message-bar-button = Click me!
    `,
  },
});

const Template = ({
  type,
  heading,
  message,
  l10nId,
  dismissable,
  hasSupportLink,
  hasActionButton,
}) => _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
  <moz-message-bar
    type=${type}
    heading=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(heading)}
    message=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(message)}
    data-l10n-id=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(l10nId)}
    data-l10n-attrs="heading, message"
    ?dismissable=${dismissable}
  >
    ${hasSupportLink
      ? _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
          <a
            is="moz-support-link"
            support-page="addons"
            slot="support-link"
          ></a>
        `
      : ""}
    ${hasActionButton
      ? _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
          <button data-l10n-id="moz-message-bar-button" slot="actions"></button>
        `
      : ""}
  </moz-message-bar>
`;

const Default = Template.bind({});
Default.args = {
  type: "info",
  l10nId: "moz-message-bar-message",
  dismissable: false,
  hasSupportLink: false,
  hasActionButton: false,
};

const Dismissable = Template.bind({});
Dismissable.args = {
  type: "info",
  l10nId: "moz-message-bar-message",
  dismissable: true,
  hasSupportLink: false,
  hasActionButton: false,
};

const WithActionButton = Template.bind({});
WithActionButton.args = {
  type: "info",
  l10nId: "moz-message-bar-message",
  dismissable: false,
  hasSupportLink: false,
  hasActionButton: true,
};

const WithSupportLink = Template.bind({});
WithSupportLink.args = {
  type: "info",
  l10nId: "moz-message-bar-message",
  dismissable: false,
  hasSupportLink: true,
  hasActionButton: false,
};

const WithHeading = Template.bind({});
WithHeading.args = {
  ...Default.args,
  l10nId: "moz-message-bar-message-heading",
};


/***/ }),

/***/ 67505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozSupportLink),
/* harmony export */   "formatUTMParams": () => (/* binding */ formatUTMParams)
/* harmony export */ });
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

window.MozXULElement?.insertFTLIfNeeded("toolkit/global/mozSupportLink.ftl");

/**
 * An extension of the anchor element that helps create links to Mozilla's
 * support documentation. This should be used for SUMO links only - other "Learn
 * more" links can use the regular anchor element.
 *
 * @tagname moz-support-link
 * @attribute {string} support-page - Short-hand string from SUMO to the specific support page.
 * @attribute {string} utm-content - UTM parameter for a URL, if it is an AMO URL.
 * @attribute {string} data-l10n-id - Fluent ID used to generate the text content.
 */
class MozSupportLink extends HTMLAnchorElement {
  static SUPPORT_URL = "https://www.mozilla.org/";
  static get observedAttributes() {
    return ["support-page", "utm-content"];
  }

  /**
   * Handles setting up the SUPPORT_URL preference getter.
   * Without this, the tests for this component may not behave
   * as expected.
   * @private
   * @memberof MozSupportLink
   */
  #register() {
    if (window.document.nodePrincipal?.isSystemPrincipal) {
      // eslint-disable-next-line no-shadow
      let { XPCOMUtils } = window.XPCOMUtils
        ? window
        : ChromeUtils.importESModule(
            "resource://gre/modules/XPCOMUtils.sys.mjs"
          );
      XPCOMUtils.defineLazyPreferenceGetter(
        MozSupportLink,
        "SUPPORT_URL",
        "app.support.baseURL",
        "",
        null,
        val => Services.urlFormatter.formatURL(val)
      );
    } else if (!window.IS_STORYBOOK) {
      MozSupportLink.SUPPORT_URL = window.RPMGetFormatURLPref(
        "app.support.baseURL"
      );
    }
  }

  connectedCallback() {
    this.#register();
    this.#setHref();
    this.setAttribute("target", "_blank");
    this.addEventListener("click", this);
    if (
      !this.getAttribute("data-l10n-id") &&
      !this.getAttribute("data-l10n-name") &&
      !this.childElementCount
    ) {
      document.l10n.setAttributes(this, "moz-support-link-text");
    }
    document.l10n.translateFragment(this);
  }

  disconnectedCallback() {
    this.removeEventListener("click", this);
  }

  handleEvent(e) {
    if (e.type == "click") {
      if (window.openTrustedLinkIn) {
        let where = whereToOpenLink(e, false, true);
        if (where == "current") {
          where = "tab";
        }
        e.preventDefault();
        openTrustedLinkIn(this.href, where);
      }
    }
  }

  attributeChangedCallback(attrName) {
    if (attrName === "support-page" || attrName === "utm-content") {
      this.#setHref();
    }
  }

  #setHref() {
    let supportPage = this.getAttribute("support-page") ?? "";
    let base = MozSupportLink.SUPPORT_URL + supportPage;
    this.href = this.hasAttribute("utm-content")
      ? formatUTMParams(this.getAttribute("utm-content"), base)
      : base;
  }
}
customElements.define("moz-support-link", MozSupportLink, { extends: "a" });

/**
 * Adds UTM parameters to a given URL, if it is an AMO URL.
 *
 * @param {string} contentAttribute
 *        Identifies the part of the UI with which the link is associated.
 * @param {string} url
 * @returns {string}
 *          The url with UTM parameters if it is an AMO URL.
 *          Otherwise the url in unmodified form.
 */
function formatUTMParams(contentAttribute, url) {
  if (!contentAttribute) {
    return url;
  }
  let parsedUrl = new URL(url);
  let domain = `.${parsedUrl.hostname}`;
  if (
    !domain.endsWith(".mozilla.org") &&
    // For testing: addons-dev.allizom.org and addons.allizom.org
    !domain.endsWith(".allizom.org")
  ) {
    return url;
  }

  parsedUrl.searchParams.set("utm_source", "firefox-browser");
  parsedUrl.searchParams.set("utm_medium", "firefox-browser");
  parsedUrl.searchParams.set("utm_content", contentAttribute);
  return parsedUrl.href;
}


/***/ }),

/***/ 84296:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-message-bar.40d4f63812f81ab3bb80.css";

/***/ })

}]);
//# sourceMappingURL=moz-message-bar-moz-message-bar-stories.bc8a8927.iframe.bundle.js.map