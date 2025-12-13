"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[190,392],{

/***/ 5953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   WithDescription: () => (/* binding */ WithDescription),
/* harmony export */   WithIcon: () => (/* binding */ WithIcon),
/* harmony export */   WithSupportLink: () => (/* binding */ WithSupportLink),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var _moz_box_link_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30392);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "UI Widgets/Box Link",
  component: "moz-box-link",
  argTypes: {
    l10nId: {
      options: ["moz-box-link-label", "moz-box-link-label-description"],
      control: {
        type: "select"
      }
    }
  },
  parameters: {
    status: "in-development",
    fluent: `
moz-box-link-label =
  .label = Click me to navigate!
moz-box-link-label-description =
  .label = Click me to navigate!
  .description = Some description of the link
    `
  }
});
const Template = ({
  l10nId,
  href,
  supportPage,
  iconSrc
}) => (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <div style="width: 300px">
    <moz-box-link
      data-l10n-id=${l10nId}
      href=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(href)}
      iconSrc=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(iconSrc)}
      support-page=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(supportPage)}
    ></moz-box-link>
  </div>
`;
const Default = Template.bind({});
Default.args = {
  l10nId: "moz-box-link-label",
  href: "https://example.com"
};
const WithDescription = Template.bind({});
WithDescription.args = {
  ...Default.args,
  l10nId: "moz-box-link-label-description"
};
const WithSupportLink = Template.bind({});
WithSupportLink.args = {
  ...Default.args,
  supportPage: "test"
};
const WithIcon = Template.bind({});
WithIcon.args = {
  ...Default.args,
  iconSrc: "chrome://global/skin/icons/highlights.svg"
};

/***/ }),

/***/ 30392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozBoxLink)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_box_link_moz_box_link_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41366);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82242);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(616);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



window.MozXULElement?.insertFTLIfNeeded("toolkit/global/mozBoxBase.ftl");

/**
 * A link with a box-like shape that allows for custom title and description.
 *
 * @tagname moz-box-link
 * @property {string} label - Label for the button.
 * @property {string} description - Descriptive text for the button.
 * @property {string} iconSrc - The src for an optional icon.
 * @property {string} href - The href of the link.
 * @property {string} supportPage - Whether or not the link is to a support page.
 */
class MozBoxLink extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.MozBoxBase {
  static shadowRootOptions = {
    ...super.shadowRootOptions,
    delegatesFocus: true
  };
  static properties = {
    href: {
      type: String
    },
    supportPage: {
      type: String,
      attribute: "support-page"
    }
  };
  constructor() {
    super();
    this.href = "";
    this.supportPage = "";
  }
  stylesTemplate() {
    const styles = super.stylesTemplate();
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`${styles}<link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_box_link_moz_box_link_css__WEBPACK_IMPORTED_MODULE_0__}"
      />`;
  }
  navIconTemplate() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<img
      class="icon nav-icon"
      src="chrome://global/skin/icons/open-in-new.svg"
      role="presentation"
    />`;
  }
  render() {
    const template = (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`${this.textTemplate()}${this.navIconTemplate()}`;
    const {
      supportPage
    } = this;
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      ${this.stylesTemplate()}
      ${supportPage ? (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<a
            class="button"
            is="moz-support-link"
            support-page=${supportPage}
            data-l10n-id="moz-box-link-anchor"
          >
            ${template}
          </a>` : (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<a
            class="button"
            href=${this.href}
            target="_blank"
            data-l10n-id="moz-box-link-anchor"
          >
            ${template}
          </a>`}
    `;
  }
}
customElements.define("moz-box-link", MozBoxLink);

/***/ }),

/***/ 41366:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-box-link.cc87bb2d7f9265c16d8e.css";

/***/ })

}]);
//# sourceMappingURL=moz-box-link-moz-box-link-stories.6b839a60.iframe.bundle.js.map