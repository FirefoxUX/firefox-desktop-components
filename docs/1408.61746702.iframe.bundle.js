"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1408],{

/***/ 11138:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-box-button.37d32a907c31df13f12d.css";

/***/ }),

/***/ 21408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozBoxButton)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_box_button_moz_box_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11138);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * A button custom element used for navigating between sub-pages or opening
 * dialogs.
 *
 * @tagname moz-box-button
 * @property {string} label - Label for the button.
 * @property {string} description - Descriptive text for the button.
 * @property {string} iconSrc - The src for an optional icon shown next to the label.
 * @property {boolean} disabled - Whether or not the button is disabled.
 * @property {string} accesskey - Key used for keyboard access.
 * @property {boolean} parentDisabled - Disabled by the parent's state, see MozBaseInputElement.
 */
class MozBoxButton extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozBoxBase {
  static shadowRootOptions = {
    ...super.shadowRootOptions,
    delegatesFocus: true
  };
  static properties = {
    disabled: {
      type: Boolean
    },
    accessKey: {
      type: String,
      mapped: true,
      fluent: true
    },
    parentDisabled: {
      type: Boolean,
      state: true
    }
  };
  static queries = {
    buttonEl: "button",
    navIcon: ".nav-icon"
  };
  constructor() {
    super();
    this.disabled = false;
  }
  click() {
    this.buttonEl.click();
  }
  labelTemplate() {
    if (!this.label) {
      return "";
    }
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<label
      is="moz-label"
      class="label"
      shownaccesskey=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.accessKey)}
    >
      ${this.label}
    </label>`;
  }
  render() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      ${super.stylesTemplate()}
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_box_button_moz_box_button_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <button
        class="button"
        ?disabled=${this.disabled || this.parentDisabled}
        accesskey=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.accessKey)}
      >
        ${super.textTemplate()}
        <img
          class="icon nav-icon"
          src="chrome://global/skin/icons/arrow-right.svg"
          alt=""
        />
      </button>
    `;
  }
}
customElements.define("moz-box-button", MozBoxButton);

/***/ })

}]);
//# sourceMappingURL=1408.61746702.iframe.bundle.js.map