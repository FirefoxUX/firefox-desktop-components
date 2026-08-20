"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[392],{

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

  // Keep description outside the <a> so it is not part of the accessible name.
  // Expose it (and "Opens in a new tab") via aria-describedby instead.
  opensInNewTabTemplate() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<span
      id="opens-in-new-tab"
      hidden
      data-l10n-id="moz-box-link-opens-in-new-tab"
    ></span>`;
  }
  labelTemplate() {
    const {
      supportPage,
      label,
      description
    } = this;
    const describedBy = description ? "description opens-in-new-tab" : "opens-in-new-tab";
    // Wrap label in <span> so moz-support-link does not treat the link as
    // unlabelled and overwrite it with the default "Learn more" string.
    let labelTextTemplate = label ? (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<span>${label}</span>` : "";
    if (supportPage) {
      return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<a
        class="label box-link-anchor"
        is="moz-support-link"
        support-page=${supportPage}
        data-l10n-id="moz-box-link-anchor"
        aria-describedby=${describedBy}
        >${labelTextTemplate}</a
      >`;
    }
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<a
      class="label box-link-anchor"
      href=${this.href}
      target="_blank"
      data-l10n-id="moz-box-link-anchor"
      aria-describedby=${describedBy}
      >${labelTextTemplate}</a
    >`;
  }
  render() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      ${this.stylesTemplate()}
      <div class="button">
        ${this.textTemplate()} ${this.navIconTemplate()}
        ${this.opensInNewTabTemplate()}
      </div>
    `;
  }
}
customElements.define("moz-box-link", MozBoxLink);

/***/ }),

/***/ 41366:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-box-link.ffd4145a6dea1d220357.css";

/***/ })

}]);
//# sourceMappingURL=392.3567b43a.iframe.bundle.js.map