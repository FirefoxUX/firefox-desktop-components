"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[8115,1372],{

/***/ 1372:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozBoxButton)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_box_button_moz_box_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68337);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45717);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73689);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



const NAVIGATION_TYPE_ICONS = {
  subpage: "chrome://global/skin/icons/arrow-right.svg"
};

/**
 * A button custom element used for navigating between sub-pages and/or opening
 * dialogs or external links.
 *
 * @tagname moz-box-button
 * @property {string} label - Label for the button.
 * @property {string} type - Type of box button, either "subpage" or "external".
 */
class MozBoxButton extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static shadowRootOptions = {
    ..._lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement.shadowRootOptions,
    delegatesFocus: true
  };
  static properties = {
    label: {
      type: String,
      fluent: true
    },
    type: {
      type: String
    }
  };
  static queries = {
    buttonEl: "button",
    navIcon: ".nav-icon"
  };
  constructor() {
    super();
    this.type = "subpage";
  }
  click() {
    this.buttonEl.click();
  }
  render() {
    return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_box_button_moz_box_button_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <button>
        ${this.label}
        <img
          class="nav-icon"
          src=${NAVIGATION_TYPE_ICONS[this.type]}
          role="presentation"
        />
      </button>
    `;
  }
}
customElements.define("moz-box-button", MozBoxButton);

/***/ }),

/***/ 94392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Default": () => (/* binding */ Default),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45717);
/* harmony import */ var _moz_box_button_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1372);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "UI Widgets/Box Button",
  component: "moz-box-button",
  parameters: {
    status: "in-development",
    fluent: `
moz-box-button-label =
  .label = Click me to navigate!
    `
  }
});
const Template = ({
  l10nId
}) => _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
  <div style="width: 300px">
    <moz-box-button data-l10n-id=${l10nId}></moz-box-button>
  </div>
`;
const Default = Template.bind({});
Default.args = {
  l10nId: "moz-box-button-label"
};

/***/ }),

/***/ 68337:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-box-button.71a8327c5d6fed9fb2aa.css";

/***/ })

}]);
//# sourceMappingURL=moz-box-button-moz-box-button-stories.0f8ed3ea.iframe.bundle.js.map