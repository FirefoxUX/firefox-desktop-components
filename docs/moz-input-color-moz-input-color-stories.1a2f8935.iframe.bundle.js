"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1101,4483],{

/***/ 54483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozInputColor)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_input_color_moz_input_color_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84941);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45717);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73689);

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
    return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
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

/***/ }),

/***/ 59947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Default": () => (/* binding */ Default),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45717);
/* harmony import */ var _moz_input_color_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54483);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "UI Widgets/Input Color",
  component: "moz-input-color",
  argTypes: {},
  parameters: {
    status: "in-development",
    fluent: `
moz-input-color-label =
  .label = Background
    `
  }
});
const Template = ({
  value,
  label,
  l10nId
}) => {
  return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
    <moz-input-color
      value=${value}
      label=${label}
      data-l10n-id=${l10nId}
    ></moz-input-color>
  `;
};
const Default = Template.bind({});
Default.args = {
  value: "#7293C9",
  l10nId: "moz-input-color-label"
};

/***/ }),

/***/ 84941:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-input-color.13c55b866c5a9aeb0dab.css";

/***/ })

}]);
//# sourceMappingURL=moz-input-color-moz-input-color-stories.1a2f8935.iframe.bundle.js.map