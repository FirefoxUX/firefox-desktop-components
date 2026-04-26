"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[6440],{

/***/ 34594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var toolkit_themes_shared_design_system_src_text_and_typography_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44311);
/* harmony import */ var browser_components_preferences_widgets_update_information_update_information_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57404);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(616);


/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



class UpdateInformation extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    version: {
      type: String
    },
    distribution: {
      type: String
    },
    distributionId: {
      type: String
    },
    releaseNotesURL: {
      type: String
    }
  };
  constructor() {
    super();

    /** @type {string} */
    this.version = "";

    /** @type {string} */
    this.distribution = "";

    /** @type {string} */
    this.distributionId = "";

    /** @type {string} */
    this.releaseNotesURL = "";
  }
  labelTemplate() {
    if (!this.version) {
      return "";
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__.html)`<div class="label-wrapper">
      <span
        class="label"
        id="label"
        data-l10n-id="update-application-version"
        data-l10n-args=${JSON.stringify({
      version: this.version
    })}
      >
        <a
          id="releasenotes"
          target="_blank"
          aria-describedby="label"
          data-l10n-name="learn-more"
          href=${this.releaseNotesURL}
          part="support-link"
          ?hidden=${!this.releaseNotesURL}
        ></a>
      </span>
    </div>`;
  }
  descriptionTemplate() {
    if (!this.distribution && !this.distributionId) {
      return "";
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__.html)`<div class="description-wrapper text-deemphasized">
      <span class="description" id="distribution"> ${this.distribution}</span>
      <span class="description" id="distributionId">
        ${this.distributionId}</span
      >
    </div>`;
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_preferences_widgets_update_information_update_information_css__WEBPACK_IMPORTED_MODULE_1__}"
      />
      <link
        rel="stylesheet"
        href="${toolkit_themes_shared_design_system_src_text_and_typography_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <moz-box-item>
        <div class="text-container">
          ${this.labelTemplate()} ${this.descriptionTemplate()}
        </div>
      </moz-box-item>
    `;
  }
}
customElements.define("update-information", UpdateInformation);

/***/ }),

/***/ 57404:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "update-information.4386d77a8cee3628b828.css";

/***/ }),

/***/ 84119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var chrome_browser_content_preferences_widgets_update_information_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34594);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/Settings/Update Information",
  component: "update-information",
  parameters: {
    status: "in-development"
  }
});
const Template = ({
  version = "",
  distribution = "",
  distributionId = "",
  releaseNotesURL = ""
}) => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <div style="max-width: 500px">
    <update-information
      version=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(version)}
      distribution=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(distribution)}
      distributionId=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(distributionId)}
      releaseNotesURL=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(releaseNotesURL)}
    ></update-information>
  </div>
`;
const Default = Template.bind({});
Default.args = {
  version: "149.0a1 (2026-01-30) (64-bit)",
  distribution: "distribution about text",
  distributionId: "distribution id",
  releaseNotesURL: "https://www.firefox.com/en-US/releases/"
};

/***/ })

}]);
//# sourceMappingURL=update-information-update-information-stories.2bda6a69.iframe.bundle.js.map