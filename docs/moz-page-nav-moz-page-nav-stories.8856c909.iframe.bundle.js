"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[324,1256,9714],{

/***/ 10139:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-page-nav-button.97bbe52a28eabfa3e32c.css";

/***/ }),

/***/ 19714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MozPageNavButton: () => (/* binding */ MozPageNavButton),
/* harmony export */   "default": () => (/* binding */ MozPageNav)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_page_nav_moz_page_nav_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10139);
/* harmony import */ var toolkit_content_widgets_moz_page_nav_moz_page_nav_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89472);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11540);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48334);
/* harmony import */ var chrome_global_content_elements_moz_support_link_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70324);


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
 * @slot [subheading] - Used to append page specific search input or notification to the nav.
 */
class MozPageNav extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.MozLitElement {
  static properties = {
    currentView: {
      type: String
    },
    heading: {
      type: String,
      fluent: true
    }
  };
  static queries = {
    headingEl: "#page-nav-heading",
    primaryNavGroupSlot: ".primary-nav-group slot",
    secondaryNavGroupSlot: "#secondary-nav-group slot"
  };
  get pageNavButtons() {
    return this.getVisibleSlottedChildren(this.primaryNavGroupSlot);
  }
  get secondaryNavButtons() {
    return this.getVisibleSlottedChildren(this.secondaryNavGroupSlot);
  }
  getVisibleSlottedChildren(el) {
    return el?.assignedElements().filter(element => element?.localName === "moz-page-nav-button" && this.checkElementVisibility(element));
  }
  checkElementVisibility(element) {
    let computedStyles = window.getComputedStyle(element);
    return !element.hidden && computedStyles.getPropertyValue("display") !== "none" && computedStyles.getPropertyValue("visibility") !== "hidden" && computedStyles.getPropertyValue("opacity") > 0;
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
  onSecondaryNavChange(event) {
    let secondaryNavElements = event.target.assignedElements();
    this.hasSecondaryNav = !!secondaryNavElements.length;
    secondaryNavElements?.forEach(el => {
      el.classList.add("secondary-nav-item");
    });
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_page_nav_moz_page_nav_css__WEBPACK_IMPORTED_MODULE_1__}"
      />
      <div class="page-nav-heading-wrapper">
        <div class="logo"></div>
        <h1 class="page-nav-heading" id="page-nav-heading">${this.heading}</h1>
      </div>
      <slot name="subheading"></slot>
      <nav>
        <div
          class="primary-nav-group"
          role="tablist"
          aria-orientation="vertical"
          aria-labelledby="page-nav-heading"
        >
          <slot
            @change-view=${this.onChangeView}
            @keydown=${this.handleFocus}
          ></slot>
        </div>
        ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.when)(this.hasSecondaryNav, () => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<hr />`)}
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
      type: String,
      reflect: true
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
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
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
      return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
        <a
          is="moz-support-link"
          class="moz-page-nav-link"
          support-page=${this.supportPage}
        >
          ${this.innerContentTemplate()}
        </a>
      `;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      <a href=${this.href} class="moz-page-nav-link" target="_blank">
        ${this.innerContentTemplate()}
      </a>
    `;
  }
  innerContentTemplate() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      ${this.iconSrc ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<img
            class="page-nav-icon"
            src=${this.iconSrc}
            role="presentation"
          />` : ""}
      <slot></slot>
    `;
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
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

/***/ 70324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozSupportLink),
/* harmony export */   formatUTMParams: () => (/* binding */ formatUTMParams)
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
  get supportPage() {
    return this.getAttribute("support-page");
  }
  set supportPage(val) {
    this.setAttribute("support-page", val);
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

/***/ 89472:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-page-nav.17f1925446003b487851.css";

/***/ }),

/***/ 89527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   WithFooterLinks: () => (/* binding */ WithFooterLinks),
/* harmony export */   WithSearch: () => (/* binding */ WithSearch),
/* harmony export */   WithSearchScroll: () => (/* binding */ WithSearchScroll),
/* harmony export */   WithoutIcons: () => (/* binding */ WithoutIcons),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11540);
/* harmony import */ var _moz_page_nav_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19714);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



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
moz-page-nav-search-input =
  .aria-label = Search Storybook
  .placeholder = Search Storybook
     `
  }
});
const Template = ({
  hasFooterLinks,
  hasIcons,
  showSearch,
  scrollable
}) => {
  let iconSrc = hasIcons ? "chrome://global/skin/icons/settings.svg" : undefined;
  let maxHeight = scrollable ? "190px" : "initial";
  return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
    <style>
      #page {
        height: 100%;
        display: flex;
        max-height: ${maxHeight};

        @media (max-width: 52rem) {
          grid-template-columns: 82px 1fr;
        }
      }
      moz-page-nav {
        height: 100%;
        margin-inline-start: 10px;
        --page-nav-margin-top: 10px;

        @media (max-width: 52rem) {
          margin-inline-start: 0;
        }
      }
    </style>
    <div id="page">
      <moz-page-nav data-l10n-id="moz-page-nav-heading">
        ${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.when)(showSearch, () => (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<moz-input-search
              slot="subheading"
              data-l10n-id="moz-page-nav-search-input"
            ></moz-input-search>`)}
        <moz-page-nav-button
          view="view-one"
          data-l10n-id="moz-page-nav-button-one"
          iconSrc=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(iconSrc)}
        >
        </moz-page-nav-button>
        <moz-page-nav-button
          view="view-two"
          data-l10n-id="moz-page-nav-button-two"
          iconSrc=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(iconSrc)}
        >
        </moz-page-nav-button>
        <moz-page-nav-button
          view="view-three"
          data-l10n-id="moz-page-nav-button-three"
          iconSrc=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(iconSrc)}
        >
        </moz-page-nav-button>
        ${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.when)(hasFooterLinks, () => (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)` <moz-page-nav-button
                support-page="test"
                data-l10n-id="moz-page-nav-button-four"
                iconSrc=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(iconSrc)}
                slot="secondary-nav"
              >
              </moz-page-nav-button>
              <moz-page-nav-button
                href="https://www.example.com"
                data-l10n-id="moz-page-nav-button-five"
                iconSrc=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(iconSrc)}
                slot="secondary-nav"
              >
              </moz-page-nav-button>`)}
      </moz-page-nav>
      <main></main>
    </div>
  `;
};
const Default = Template.bind({});
Default.args = {
  hasFooterLinks: false,
  hasIcons: true,
  showSearch: false,
  scrollable: false
};
const WithFooterLinks = Template.bind({});
WithFooterLinks.args = {
  ...Default.args,
  hasFooterLinks: true
};
const WithoutIcons = Template.bind({});
WithoutIcons.args = {
  ...Default.args,
  hasIcons: false
};
const WithSearch = Template.bind({});
WithSearch.args = {
  ...Default.args,
  showSearch: true
};
const WithSearchScroll = Template.bind({});
WithSearchScroll.args = {
  ...Default.args,
  showSearch: true,
  scrollable: true
};

/***/ })

}]);
//# sourceMappingURL=moz-page-nav-moz-page-nav-stories.8856c909.iframe.bundle.js.map