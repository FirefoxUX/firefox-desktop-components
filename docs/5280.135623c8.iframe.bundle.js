"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[5280],{

/***/ 32558:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-input-color.8ecb2cd5a169b8a377cd.css";

/***/ }),

/***/ 55280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozInputColor)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_input_color_moz_input_color_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32558);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11540);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48334);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * @tagname moz-input-color
 * @property {string} [value] - A CSS hex value of the initial color shown in the swatch area.
 * @property {string} [name] - Any name that will be associated with the component's nested `input` element. Useful when used in `form`s.
 * @property {string} label - The text of the label.
 */
class MozInputColor extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    value: {
      type: String
    },
    name: {
      type: String
    },
    label: {
      type: String,
      fluent: true
    }
  };
  static queries = {
    inputEl: ".swatch"
  };
  static shadowRootOptions = {
    ..._lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement.shadowRootOptions,
    delegatesFocus: true
  };
  constructor() {
    super();
    this.name = "";
    this.label = "";
    this.value = "";
  }

  /**
   * @param {Event} e
   */
  updateInputFromEvent(e) {
    /**
     * @type {HTMLInputElement}
     */
    const input = /** @type {object} */e.target;
    this.value = input.value;
  }

  /**
   * Dispatches an event from the host element so that outside
   * listeners can react to these events
   *
   * @param {Event} e
   * @memberof MozBaseInputElement
   */
  redispatchEvent(e) {
    this.updateInputFromEvent(e);
    let {
      bubbles,
      cancelable,
      composed,
      type
    } = e;
    let newEvent = new Event(type, {
      bubbles,
      cancelable,
      composed
    });
    this.dispatchEvent(newEvent);
  }
  render() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_input_color_moz_input_color_css__WEBPACK_IMPORTED_MODULE_0__}"
      />

      <label>
        <input
          type="color"
          name=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.name)}
          .value=${this.value}
          class="swatch"
          @input=${this.updateInputFromEvent}
          @change=${this.redispatchEvent}
        />
        <span>${this.label}</span>
        <img
          class="icon"
          alt=""
          src="chrome://global/skin/icons/edit-outline.svg"
        />
      </label>
    `;
  }
}
customElements.define("moz-input-color", MozInputColor);

/***/ })

}]);
//# sourceMappingURL=5280.135623c8.iframe.bundle.js.map