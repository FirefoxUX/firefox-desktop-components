"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[6598],{

/***/ 69687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MozPageNavButton": () => (/* binding */ MozPageNavButton),
/* harmony export */   "default": () => (/* binding */ MozPageNav)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_page_nav_moz_page_nav_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16737);
/* harmony import */ var toolkit_content_widgets_moz_page_nav_moz_page_nav_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13487);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73689);
/* harmony import */ var chrome_global_content_elements_moz_support_link_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49896);


/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



// eslint-disable-next-line import/no-unassigned-import


/**
 * A grouping of navigation buttons that is displayed at the page level,
 * intended to change the selected view, provide a heading, and have links
 * to external resources.
 *
 * @tagname moz-page-nav
 * @property {string} currentView - The currently selected view.
 * @property {string} heading - A heading to be displayed at the top of the navigation.
 * @slot [default] - Used to append moz-page-nav-button elements to the navigation.
 */
class MozPageNav extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.MozLitElement {
  static properties = {
    currentView: {
      type: String
    },
    heading: {
      type: String
    }
  };
  static queries = {
    headingEl: "#page-nav-header",
    primaryNavGroupSlot: ".primary-nav-group slot",
    secondaryNavGroupSlot: "#secondary-nav-group slot"
  };
  get pageNavButtons() {
    return this.primaryNavGroupSlot.assignedNodes().filter(node => node?.localName === "moz-page-nav-button" && !node.hidden);
  }
  get secondaryNavButtons() {
    return this.secondaryNavGroupSlot.assignedNodes().filter(node => node?.localName === "moz-page-nav-button" && !node.hidden);
  }
  onChangeView(e) {
    this.currentView = e.target.view;
  }
  handleFocus(e) {
    if (e.key == "ArrowDown" || e.key == "ArrowRight") {
      e.preventDefault();
      this.focusNextView();
    } else if (e.key == "ArrowUp" || e.key == "ArrowLeft") {
      e.preventDefault();
      this.focusPreviousView();
    }
  }
  focusPreviousView() {
    let pageNavButtons = this.pageNavButtons;
    let currentIndex = pageNavButtons.findIndex(b => b.selected);
    let prev = pageNavButtons[currentIndex - 1];
    if (prev) {
      prev.activate();
      prev.buttonEl.focus();
    }
  }
  focusNextView() {
    let pageNavButtons = this.pageNavButtons;
    let currentIndex = pageNavButtons.findIndex(b => b.selected);
    let next = pageNavButtons[currentIndex + 1];
    if (next) {
      next.activate();
      next.buttonEl.focus();
    }
  }
  onSecondaryNavChange() {
    this.secondaryNavGroupSlot.assignedElements()?.forEach(el => {
      el.classList.add("secondary-nav-item");
    });
  }
  render() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_page_nav_moz_page_nav_css__WEBPACK_IMPORTED_MODULE_1__}"
      />
      <nav>
        <h1 class="page-nav-header" id="page-nav-header">${this.heading}</h1>
        <div
          class="primary-nav-group"
          role="tablist"
          aria-orientation="vertical"
          aria-labelledby="page-nav-header"
        >
          <slot
            @change-view=${this.onChangeView}
            @keydown=${this.handleFocus}
          ></slot>
        </div>
        <div id="secondary-nav-group" role="group">
          <slot
            name="secondary-nav"
            @slotchange=${this.onSecondaryNavChange}
          ></slot>
        </div>
      </nav>
    `;
  }
  updated() {
    let isViewSelected = false;
    let assignedPageNavButtons = this.pageNavButtons;
    for (let button of assignedPageNavButtons) {
      button.selected = button.view == this.currentView;
      isViewSelected = isViewSelected || button.selected;
    }
    if (!isViewSelected && assignedPageNavButtons.length) {
      // Current page nav has no matching view, reset to the first view.
      assignedPageNavButtons[0].activate();
    }
  }
}
customElements.define("moz-page-nav", MozPageNav);

/**
 * A navigation button intended to change the selected view within a page.
 *
 * @tagname moz-page-nav-button
 * @property {string} href - (optional) The url for an external link if not a support page URL
 * @property {string} iconSrc - The chrome:// url for the icon used for the button.
 * @property {boolean} selected - Whether or not the button is currently selected.
 * @property {string} supportPage - (optional) The short name for the support page a secondary link should launch to
 * @slot [default] - Used to append the l10n string to the button.
 */
class MozPageNavButton extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.MozLitElement {
  static properties = {
    iconSrc: {
      type: String
    },
    href: {
      type: String
    },
    selected: {
      type: Boolean
    },
    supportPage: {
      type: String,
      attribute: "support-page"
    }
  };
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "none");
  }
  static queries = {
    buttonEl: "button",
    linkEl: "a"
  };
  get view() {
    return this.getAttribute("view");
  }
  activate() {
    this.dispatchEvent(new CustomEvent("change-view", {
      bubbles: true,
      composed: true
    }));
  }
  itemTemplate() {
    if (this.href || this.supportPage) {
      return this.linkTemplate();
    }
    return this.buttonTemplate();
  }
  buttonTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`
      <button
        aria-selected=${this.selected}
        tabindex=${this.selected ? 0 : -1}
        role="tab"
        ?selected=${this.selected}
        @click=${this.activate}
      >
        ${this.innerContentTemplate()}
      </button>
    `;
  }
  linkTemplate() {
    if (this.supportPage) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`
        <a
          is="moz-support-link"
          class="moz-page-nav-link"
          support-page=${this.supportPage}
        >
          ${this.innerContentTemplate()}
        </a>
      `;
    }
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`
      <a href=${this.href} class="moz-page-nav-link" target="_blank">
        ${this.innerContentTemplate()}
      </a>
    `;
  }
  innerContentTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`
      ${this.iconSrc ? chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<img
            class="page-nav-icon"
            src=${this.iconSrc}
            role="presentation"
          />` : ""}
      <slot></slot>
    `;
  }
  render() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_page_nav_moz_page_nav_button_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      ${this.itemTemplate()}
    `;
  }
}
customElements.define("moz-page-nav-button", MozPageNavButton);

/***/ }),

/***/ 36108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Default": () => (/* binding */ Default),
/* harmony export */   "WithFooterLinks": () => (/* binding */ WithFooterLinks),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45717);
/* harmony import */ var _moz_page_nav_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69687);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


// eslint-disable-next-line import/no-unassigned-import

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "UI Widgets/Page Nav",
  component: "moz-page-nav",
  parameters: {
    status: "in-development",
    actions: {
      handles: ["change-view"]
    },
    fluent: `
moz-page-nav-button-one = View 1
  .title = View 1
moz-page-nav-button-two = View 2
  .title = View 2
moz-page-nav-button-three = View 3
  .title = View 3
moz-page-nav-button-four = Support Link
  .title = Support Link
moz-page-nav-button-five = External Link
  .title = External Link
moz-page-nav-heading =
  .heading = Heading
     `
  }
});
const Template = ({
  hasFooterLinks
}) => _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
  <style>
    #page {
      height: 100%;
      display: flex;

      @media (max-width: 52rem) {
        grid-template-columns: 82px 1fr;
      }
    }
    moz-page-nav {
      margin-inline-start: 10px;
      --page-nav-margin-top: 10px;

      @media (max-width: 52rem) {
        margin-inline-start: 0;
      }
    }
  </style>
  <div id="page">
    <moz-page-nav data-l10n-id="moz-page-nav-heading" data-l10n-attrs="heading">
      <moz-page-nav-button
        view="view-one"
        data-l10n-id="moz-page-nav-button-one"
        iconSrc="chrome://browser/skin/preferences/category-general.svg"
      >
      </moz-page-nav-button>
      <moz-page-nav-button
        view="view-two"
        data-l10n-id="moz-page-nav-button-two"
        iconSrc="chrome://browser/skin/preferences/category-general.svg"
      >
      </moz-page-nav-button>
      <moz-page-nav-button
        view="view-three"
        data-l10n-id="moz-page-nav-button-three"
        iconSrc="chrome://browser/skin/preferences/category-general.svg"
      >
      </moz-page-nav-button>
      ${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.when)(hasFooterLinks, () => _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html` <moz-page-nav-button
            support-page="test"
            data-l10n-id="moz-page-nav-button-four"
            iconSrc="chrome://browser/skin/preferences/category-general.svg"
            slot="secondary-nav"
          >
          </moz-page-nav-button>
          <moz-page-nav-button
            href="https://www.example.com"
            data-l10n-id="moz-page-nav-button-five"
            iconSrc="chrome://browser/skin/preferences/category-general.svg"
            slot="secondary-nav"
          >
          </moz-page-nav-button>`)}
    </moz-page-nav>
    <main></main>
  </div>
`;
const Default = Template.bind({});
Default.args = {
  hasFooterLinks: false
};
const WithFooterLinks = Template.bind({});
WithFooterLinks.args = {
  hasFooterLinks: true
};

/***/ }),

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

/***/ 16737:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-page-nav-button.8c6b88ea51851c1ac840.css";

/***/ }),

/***/ 13487:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-page-nav.2892f22041b8119e67c9.css";

/***/ })

}]);
//# sourceMappingURL=moz-page-nav-moz-page-nav-stories.cdb5e294.iframe.bundle.js.map