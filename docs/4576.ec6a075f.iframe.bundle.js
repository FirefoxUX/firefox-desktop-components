"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[4576],{

/***/ 15550:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-page-header.3c8ed3a1b3bc0a1847bb.css";

/***/ }),

/***/ 64576:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozPageHeader)
/* harmony export */ });
/* harmony import */ var toolkit_themes_shared_design_system_text_and_typography_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48308);
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
        href="${toolkit_themes_shared_design_system_text_and_typography_css__WEBPACK_IMPORTED_MODULE_0__}"
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

/***/ })

}]);
//# sourceMappingURL=4576.ec6a075f.iframe.bundle.js.map