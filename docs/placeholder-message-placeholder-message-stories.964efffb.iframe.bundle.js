"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[3906],{

/***/ 12670:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "placeholder-message.83d18224512c3b78ca01.css";

/***/ }),

/***/ 13469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   WithSupportPage: () => (/* binding */ WithSupportPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11540);
/* harmony import */ var chrome_browser_content_preferences_widgets_placeholder_message_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47732);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/Settings/Placeholder Message",
  component: "placeholder-message",
  argTypes: {
    l10nId: {
      options: ["placeholder-message-label", "placeholder-message-label-description"],
      control: {
        type: "select"
      }
    }
  },
  parameters: {
    status: "in-development",
    fluent: `
placeholder-message-label =
  .label = You are not signed in
placeholder-message-label-description =
  .label = You are not signed in
  .description = With a Mozilla account, you can sync your bookmarks, history, tabs, passwords, add-ons, and settings across all your devices.
    `
  }
});
const Template = ({
  imageSrc = "",
  l10nId = "",
  supportPage = ""
}) => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <div style="max-width: 500px">
    <placeholder-message
      imageSrc=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(imageSrc)}
      data-l10n-id=${l10nId}
      support-page=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(supportPage)}
    ></placeholder-message>
  </div>
`;
const Default = Template.bind({});
Default.args = {
  imageSrc: "chrome://global/skin/illustrations/security-error.svg",
  l10nId: "placeholder-message-label-description",
  supportPage: ""
};
const WithSupportPage = Template.bind({});
WithSupportPage.args = {
  ...Default.args,
  supportPage: "test"
};

/***/ }),

/***/ 47732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var toolkit_themes_shared_design_system_src_text_and_typography_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44311);
/* harmony import */ var browser_components_preferences_widgets_placeholder_message_placeholder_message_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12670);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48334);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11540);


/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



class PlaceholderMessage extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    imageSrc: {
      type: String
    },
    label: {
      type: String,
      fluent: true
    },
    description: {
      type: String,
      fluent: true
    },
    supportPage: {
      type: String,
      attribute: "support-page"
    }
  };
  constructor() {
    super();

    /** @type {string} */
    this.imageSrc = "";

    /** @type {string} */
    this.label = "";

    /** @type {string} */
    this.description = "";

    /** @type {string} */
    this.supportPage = "";
  }
  labelTemplate() {
    if (!this.label) {
      return "";
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__.html)`<div class="label-wrapper">
      <span class="label heading-medium" id="label">${this.label}</span>${!this.description ? this.supportLinkTemplate() : ""}
    </div>`;
  }
  descriptionTemplate() {
    if (!this.description) {
      return "";
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__.html)`<div class="description-wrapper">
      <span class="description" id="description"> ${this.description}</span
      >${this.supportLinkTemplate()}
    </div>`;
  }
  supportLinkTemplate() {
    if (!this.supportPage) {
      return "";
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__.html)`<a
      is="moz-support-link"
      class="support-link"
      support-page=${this.supportPage}
      part="support-link"
      aria-describedby="label description"
    ></a>`;
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_preferences_widgets_placeholder_message_placeholder_message_css__WEBPACK_IMPORTED_MODULE_1__}"
      />
      <link
        rel="stylesheet"
        href="${toolkit_themes_shared_design_system_src_text_and_typography_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <moz-box-item>
        <div class="placeholder-container">
          <img src=${this.imageSrc} role="presentation" />
          <div class="text-container">
            ${this.labelTemplate()} ${this.descriptionTemplate()}
          </div>
        </div>
      </moz-box-item>
    `;
  }
}
customElements.define("placeholder-message", PlaceholderMessage);

/***/ })

}]);
//# sourceMappingURL=placeholder-message-placeholder-message-stories.964efffb.iframe.bundle.js.map