"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[3359,9896],{

/***/ 49896:
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
      ChromeUtils.defineESModuleGetters(MozSupportLink, {
        BrowserUtils: "resource://gre/modules/BrowserUtils.sys.mjs"
      });

      // eslint-disable-next-line no-shadow
      let {
        XPCOMUtils
      } = window.XPCOMUtils ? window : ChromeUtils.importESModule("resource://gre/modules/XPCOMUtils.sys.mjs");
      XPCOMUtils.defineLazyPreferenceGetter(MozSupportLink, "SUPPORT_URL", "app.support.baseURL", "", null, val => Services.urlFormatter.formatURL(val));
    } else if (!window.IS_STORYBOOK) {
      MozSupportLink.SUPPORT_URL = window.RPMGetFormatURLPref("app.support.baseURL");
    }
  }
  connectedCallback() {
    this.#register();
    this.#setHref();
    this.setAttribute("target", "_blank");
    this.addEventListener("click", this);
    if (!this.getAttribute("data-l10n-id") && !this.getAttribute("data-l10n-name") && !this.childElementCount) {
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
        let where = MozSupportLink.BrowserUtils.whereToOpenLink(e, false, true);
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
    this.href = this.hasAttribute("utm-content") ? formatUTMParams(this.getAttribute("utm-content"), base) : base;
  }
}
customElements.define("moz-support-link", MozSupportLink, {
  extends: "a"
});

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
  if (!domain.endsWith(".mozilla.org") &&
  // For testing: addons-dev.allizom.org and addons.allizom.org
  !domain.endsWith(".allizom.org")) {
    return url;
  }
  parsedUrl.searchParams.set("utm_source", "firefox-browser");
  parsedUrl.searchParams.set("utm_medium", "firefox-browser");
  parsedUrl.searchParams.set("utm_content", contentAttribute);
  return parsedUrl.href;
}

/***/ }),

/***/ 23764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Primary": () => (/* binding */ Primary),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "withAMOUrl": () => (/* binding */ withAMOUrl),
/* harmony export */   "withFluentId": () => (/* binding */ withFluentId)
/* harmony export */ });
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45717);
/* harmony import */ var _moz_support_link_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49896);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



MozXULElement.insertFTLIfNeeded("locales-preview/moz-support-link-storybook.ftl");
MozXULElement.insertFTLIfNeeded("toolkit/global/mozSupportLink.ftl");
const fluentStrings = ["storybook-amo-test", "storybook-fluent-test", "moz-support-link-text"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "UI Widgets/Support Link",
  component: "moz-support-link",
  argTypes: {
    "data-l10n-id": {
      options: [fluentStrings[0], fluentStrings[1], fluentStrings[2]],
      control: {
        type: "select"
      }
    },
    onClick: {
      action: "clicked"
    }
  },
  parameters: {
    status: "stable"
  }
});
const Template = ({
  "data-l10n-id": dataL10nId,
  "support-page": supportPage,
  "utm-content": utmContent
}) => _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
  <a
    is="moz-support-link"
    data-l10n-id=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(dataL10nId)}
    support-page=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(supportPage)}
    utm-content=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(utmContent)}
  >
  </a>
`;
const withAMOUrl = Template.bind({});
withAMOUrl.args = {
  "data-l10n-id": fluentStrings[0],
  "support-page": "addons",
  "utm-content": "promoted-addon-badge"
};
const Primary = Template.bind({});
Primary.args = {
  "support-page": "preferences",
  "utm-content": ""
};
const withFluentId = Template.bind({});
withFluentId.args = {
  "data-l10n-id": fluentStrings[1],
  "support-page": "preferences",
  "utm-content": ""
};

/***/ })

}]);
//# sourceMappingURL=moz-support-link-moz-support-link-stories.7f4d725c.iframe.bundle.js.map