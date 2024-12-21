"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[9075],{

/***/ 80165:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ColorInput)
/* harmony export */ });
/* harmony import */ var toolkit_components_reader_color_input_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64104);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73689);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * @tagname color-input
 * @property {string} color - The initial color value as a hex code.
 * @property {string} propName - The property that the color input sets.
 * @property {string} l10nId - l10nId for label text.
 */
class ColorInput extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    color: {
      type: String
    },
    propName: {
      type: String,
      attribute: "prop-name"
    },
    l10nId: {
      type: String,
      attribute: "data-l10n-id"
    }
  };
  static queries = {
    inputEl: "#color-swatch"
  };
  handleColorInput(event) {
    this.color = event.target.value;
    this.dispatchEvent(new CustomEvent("color-picked", {
      detail: this.color
    }));
  }

  /* Function to launch color picker when the user clicks anywhere in the container. */
  handleClick(event) {
    // If the user directly clicks the color swatch, no need to propagate click.
    if (event.target.matches("input")) {
      return;
    }
    this.inputEl.click();
  }
  render() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <link
        rel="stylesheet"
        href="${toolkit_components_reader_color_input_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <div class="color-input-container" @click="${this.handleClick}">
        <input
          type="color"
          name="${this.propName}"
          .value="${this.color}"
          id="color-swatch"
          @input="${this.handleColorInput}"
        />
        <label for="color-swatch" data-l10n-id=${this.l10nId}></label>
        <div class="icon-container">
          <img
            class="icon"
            role="presentation"
            src="chrome://global/skin/icons/edit-outline.svg"
          />
        </div>
      </div>
    `;
  }
}
customElements.define("color-input", ColorInput);

/***/ }),

/***/ 94484:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Default": () => (/* binding */ Default),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _content_widgets_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_reader_color_input_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80165);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/Reader View/Color Input",
  component: "color-input",
  argTypes: {},
  parameters: {
    status: "stable",
    fluent: `moz-color-input-label = Background`
  }
});
const Template = ({
  color,
  propName,
  labelL10nId
}) => _content_widgets_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
  <color-input
    color=${color}
    data-l10n-id=${labelL10nId}
    prop-name=${propName}
  ></color-input>
`;
const Default = Template.bind({});
Default.args = {
  propName: "background",
  color: "#7293C9",
  labelL10nId: "moz-color-input-label"
};

/***/ }),

/***/ 64104:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "color-input.48131f490b85b4f83ff4.css";

/***/ })

}]);
//# sourceMappingURL=color-input-stories.973f636c.iframe.bundle.js.map