"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[42,4576,5036,7026],{

/***/ 15550:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-page-header.3c8ed3a1b3bc0a1847bb.css";

/***/ }),

/***/ 20042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MozBreadcrumb: () => (/* binding */ MozBreadcrumb),
/* harmony export */   MozBreadcrumbGroup: () => (/* binding */ MozBreadcrumbGroup)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_breadcrumb_group_moz_breadcrumb_group_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29556);
/* harmony import */ var toolkit_content_widgets_moz_breadcrumb_group_moz_breadcrumb_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91150);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11540);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48334);


/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



window.MozXULElement?.insertFTLIfNeeded("toolkit/global/mozBreadcrumbGroup.ftl");

/**
 * @tagname moz-breadcrumb
 * @property {string} href
 * @property {string} label
 */

class MozBreadcrumb extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.MozLitElement {
  static properties = {
    href: {
      type: String
    },
    label: {
      type: String,
      fluent: true
    },
    ariaCurrent: {
      attribute: "aria-current",
      type: String
    }
  };
  constructor() {
    super();
    this.label = "";
    this.href = "";
  }
  render() {
    const labelTemplate = this.label || (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<slot></slot>`;
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_breadcrumb_group_moz_breadcrumb_css__WEBPACK_IMPORTED_MODULE_1__}"
      />
      ${this.ariaCurrent ? labelTemplate : (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<a href=${this.href}>${labelTemplate}</a>`}
    `;
  }
}
customElements.define("moz-breadcrumb", MozBreadcrumb);

/**
 * @tagname moz-breadcrumb-group
 */
class MozBreadcrumbGroup extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.MozLitElement {
  /**
   * @type {MutationObserver | void}
   */
  #observer;

  /**
   * Fired when a breadcrumb is either
   * added or removed from the DOM, at which
   * an update is requested to re-render breadcrumbs.
   *
   * @type {MutationCallback}
   */
  #onBreadcrumbMutation(mutations) {
    for (const mutation of mutations) {
      if (mutation.type === "childList") {
        this.requestUpdate();
      }
    }
  }

  /**
   * @type {Array<MozBreadcrumb>}
   */
  get breadcrumbs() {
    /**
     * @type {NodeListOf<MozBreadcrumb>}
     */
    const breadcrumbElements = this.querySelectorAll("moz-breadcrumb");
    return Array.from(breadcrumbElements);
  }
  setupBreadcrumbs() {
    const {
      breadcrumbs
    } = this;
    return breadcrumbs.map((breadcrumb, i) => {
      breadcrumb.setAttribute("slot", i + "");
      if (i === breadcrumbs.length - 1) {
        breadcrumb.setAttribute("aria-current", "page");
      }
      return breadcrumb;
    });
  }
  update() {
    super.update();
    this.setupBreadcrumbs();
  }
  firstUpdated() {
    if (!this.#observer) {
      this.#observer = new MutationObserver((mutations, observer) => this.#onBreadcrumbMutation(mutations, observer));
      this.#observer.observe(this, {
        childList: true
      });
    }
  }
  disconnectedCallback() {
    if (this.#observer) {
      this.#observer.disconnect();
      this.#observer = undefined;
    }
    super.disconnectedCallback();
  }
  render() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_breadcrumb_group_moz_breadcrumb_group_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <nav data-l10n-id="moz-breadcrumb-group-nav">
        <ol>
          ${this.breadcrumbs.map((breadcrumb, i) => {
      return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<li>
              <slot name=${i}></slot>
            </li>`;
    })}
        </ol>
      </nav>
    `;
  }
}
customElements.define("moz-breadcrumb-group", MozBreadcrumbGroup);

/***/ }),

/***/ 29556:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-breadcrumb-group.3c9c6c0fccb47045b0c3.css";

/***/ }),

/***/ 37519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   NarrowWidth: () => (/* binding */ NarrowWidth),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11540);
/* harmony import */ var _moz_breadcrumb_group_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20042);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "UI Widgets/Breadcrumb Group",
  component: "moz-breadcrumbs-group",
  parameters: {
    status: "in-development",
    fluent: `
moz-breadcrumb-first =
  .label = First page
moz-breadcrumb-second =
  .label = Previous page
moz-breadcrumb-third =
  .label = Current page
    `
  }
});
const Template = ({
  l10nId,
  width,
  slot
}) => {
  return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
    <style>
      ${width ? `moz-breadcrumb-group {
            width: ${width}px;
            overflow: hidden;
          }` : ""}
    </style>
    <moz-breadcrumb-group slot=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(slot)}>
      <moz-breadcrumb
        href="about#firstpage"
        data-l10n-id=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(l10nId + "-first")}
      ></moz-breadcrumb>
      <moz-breadcrumb
        data-l10n-id=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(l10nId + "-second")}
        href="about#prevpage"
      ></moz-breadcrumb>
      <moz-breadcrumb
        href="about#currentpage"
        data-l10n-id=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(l10nId + "-third")}
      ></moz-breadcrumb>
    </moz-breadcrumb-group>
  `;
};
const Default = Template.bind({});
Default.args = {
  l10nId: "moz-breadcrumb"
};
const NarrowWidth = Template.bind({});
NarrowWidth.args = {
  ...Default.args,
  width: 180
};

/***/ }),

/***/ 57881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   WithBackButton: () => (/* binding */ WithBackButton),
/* harmony export */   WithBreadcrumbs: () => (/* binding */ WithBreadcrumbs),
/* harmony export */   WithDescription: () => (/* binding */ WithDescription),
/* harmony export */   WithIcon: () => (/* binding */ WithIcon),
/* harmony export */   WithSupportPage: () => (/* binding */ WithSupportPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11540);
/* harmony import */ var _moz_page_header_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64576);
/* harmony import */ var _moz_breadcrumb_group_moz_breadcrumb_group_stories_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37519);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "UI Widgets/Page Header",
  component: "moz-page-header",
  argTypes: {
    l10nId: {
      options: ["moz-page-header-heading", "moz-page-header-description", "moz-page-header-long"],
      control: {
        type: "select"
      }
    }
  },
  parameters: {
    status: "in-development",
    fluent: `
moz-page-header-heading =
  .heading = This is the page heading
moz-page-header-description =
  .heading = This is the page heading
  .description = This is a description of the page
moz-page-header-long =
  .heading = Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum libero enim, luctus eu ante a, maximus imperdiet mi. Suspendisse sodales, nisi et commodo malesuada, lectus.
  .description = Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum libero enim, luctus eu ante a, maximus imperdiet mi. Suspendisse sodales, nisi et commodo malesuada, lectus.
moz-breadcrumb-first =
  .label = First page
moz-breadcrumb-second =
  .label = Previous page
moz-breadcrumb-third =
  .label = Current page
    `
  }
});
const Template = ({
  l10nId,
  backButton,
  iconSrc,
  supportPage,
  showBreadcrumbs
}) => (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <moz-page-header
    data-l10n-id=${l10nId}
    iconsrc=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(iconSrc)}
    support-page=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(supportPage)}
    ?backbutton=${backButton}
  >
    ${showBreadcrumbs ? (0,_moz_breadcrumb_group_moz_breadcrumb_group_stories_mjs__WEBPACK_IMPORTED_MODULE_2__.Default)({
  slot: "breadcrumbs",
  ..._moz_breadcrumb_group_moz_breadcrumb_group_stories_mjs__WEBPACK_IMPORTED_MODULE_2__.Default.args
}) : ""}
  </moz-page-header>
`;
const Default = Template.bind({});
Default.args = {
  l10nId: "moz-page-header-heading",
  iconSrc: "",
  backButton: false,
  showBreadcrumbs: false
};
const WithBackButton = Template.bind({});
WithBackButton.args = {
  ...Default.args,
  backButton: true
};
const WithIcon = Template.bind({});
WithIcon.args = {
  ...WithBackButton.args,
  iconSrc: "chrome://global/skin/icons/highlights.svg"
};
const WithDescription = Template.bind({});
WithDescription.args = {
  ...WithBackButton.args,
  l10nId: "moz-page-header-description"
};
const WithSupportPage = Template.bind({});
WithSupportPage.args = {
  ...WithDescription.args,
  supportPage: "test"
};
const WithBreadcrumbs = Template.bind({});
WithBreadcrumbs.args = {
  ...WithBackButton.args,
  showBreadcrumbs: true
};

/***/ }),

/***/ 64576:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozPageHeader)
/* harmony export */ });
/* harmony import */ var toolkit_themes_shared_design_system_src_text_and_typography_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44311);
/* harmony import */ var toolkit_content_widgets_moz_page_header_moz_page_header_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15550);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11540);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48334);


/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



window.MozXULElement?.insertFTLIfNeeded("toolkit/global/mozPageHeader.ftl");

/**
 * A header component for providing context about a specific page.
 *
 * @tagname moz-page-header
 * @property {string} heading - The page title text.
 * @property {string} description - Secondary text shown under the heading.
 * @property {string} iconSrc - The src for an optional icon.
 * @property {string} supportPage - Optional URL for a related support article.
 * @property {boolean} backButton - Whether or not the header should include a back button.
 * @slot breadcrumbs - Container for a <moz-breadcrumb-group, shown above the heading.
 * @fires navigate-back
 *  Event indicating the backwards navigation should occur.
 */
class MozPageHeader extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.MozLitElement {
  static properties = {
    heading: {
      type: String,
      fluent: true
    },
    description: {
      type: String,
      fluent: true
    },
    iconSrc: {
      type: String
    },
    supportPage: {
      type: String,
      attribute: "support-page"
    },
    backButton: {
      type: Boolean
    }
  };
  constructor() {
    super();
    this.heading = "";
    this.description = "";
    this.iconSrc = "";
    this.supportPage = "";
    this.backButton = false;
  }
  backButtonTemplate() {
    if (!this.backButton) {
      return "";
    }
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<moz-button
      type="ghost"
      data-l10n-id="back-nav-button-title"
      iconsrc="chrome://global/skin/icons/arrow-left.svg"
      class="back-button"
      @click=${this.handleBack}
    ></moz-button>`;
  }
  iconTemplate() {
    if (!this.iconSrc) {
      return "";
    }
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<img src=${this.iconSrc} role="presentation" class="icon" />`;
  }
  descriptionTemplate() {
    if (!this.description) {
      return "";
    }
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<span class="description" id="description">
        ${this.description}
      </span>
      ${this.supportLinkTemplate()}`;
  }
  supportLinkTemplate() {
    if (!this.supportPage) {
      return "";
    }
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<a
      is="moz-support-link"
      support-page=${this.supportPage}
      part="support-link"
      class="support-link"
      aria-describedby=${this.description ? "description" : "heading"}
    ></a>`;
  }
  handleBack() {
    this.dispatchEvent(new Event("navigate-back"));
  }
  render() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_page_header_moz_page_header_css__WEBPACK_IMPORTED_MODULE_1__}"
      />
      <link
        rel="stylesheet"
        href="${toolkit_themes_shared_design_system_src_text_and_typography_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <div class="page-header-container">
        <slot name="breadcrumbs"></slot>
        <div class="heading">
          ${this.backButtonTemplate()}${this.iconTemplate()}
          <h1 id="heading">${this.heading}</h1>
          ${!this.description ? this.supportLinkTemplate() : ""}
        </div>
        ${this.descriptionTemplate()}
      </div>
    `;
  }
}
customElements.define("moz-page-header", MozPageHeader);

/***/ }),

/***/ 91150:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-breadcrumb.ad10d0dbb7433ab82dc6.css";

/***/ })

}]);
//# sourceMappingURL=moz-page-header-moz-page-header-stories.62c3b31f.iframe.bundle.js.map