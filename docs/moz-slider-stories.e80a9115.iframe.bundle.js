"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[7019],{

/***/ 23776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozSlider)
/* harmony export */ });
/* harmony import */ var toolkit_components_reader_moz_slider_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38924);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73689);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * A range slider component that can be used to select a value.
 *
 * @tagname moz-slider
 * @property {number} min - The minimum value of the slider.
 * @property {number} max - The maximum value of the slider.
 * @property {number} value - The initial value of the slider.
 * @property {number} ticks - The number of tick marks to display under the slider.
 * @property {Array<string>} tickLabels - A list containing the tick label strings.
 * @property {string} label - The label text for the slider.
 * @property {string} sliderIcon  - The url of the slider icon.
 */

class MozSlider extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    min: {
      type: Number
    },
    max: {
      type: Number
    },
    value: {
      type: Number
    },
    ticks: {
      type: Number
    },
    tickLabels: {
      type: Array,
      attribute: "tick-labels"
    },
    label: {
      type: String
    },
    sliderIcon: {
      type: String,
      attribute: "slider-icon"
    }
  };
  static get queries() {
    return {
      tickMarks: "datalist",
      sliderTrack: "#inputSlider"
    };
  }
  constructor() {
    super();
    this.ticks = 0;
    this.tickLabels = [];
    this.sliderIcon = "";
  }
  getStepSize() {
    const stepSize = (this.max - this.min) / (this.ticks - 1);
    return stepSize;
  }
  setupIcon() {
    if (this.sliderIcon) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`<div class="icon-container">
        <img class="icon" role="presentation" src=${this.sliderIcon} />
      </div> `;
    }
    return "";
  }
  ticksTemplate() {
    if (this.ticks > 0) {
      let tickList = [];
      let value = this.min;
      let stepSize = this.getStepSize();
      let className = "";
      for (let i = 0; i < this.ticks; i++) {
        let optionId = "";
        let label = "";
        if (this.tickLabels.length) {
          if (i == 0) {
            optionId = "inline-start-label";
            label = this.tickLabels[0];
          } else if (i == this.ticks - 1) {
            optionId = "inline-end-label";
            label = this.tickLabels[1];
          }
        } else {
          className = "no-tick-labels";
        }
        tickList.push(chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`<option
            id=${optionId}
            value=${parseFloat(value).toFixed(2)}
            label=${label}
          ></option>`);
        value += stepSize;
      }
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
        <datalist id="slider-ticks" class=${className}>${tickList}</datalist>
      `;
    }
    return "";
  }
  handleChange(event) {
    this.value = event.target.value;
    this.dispatchEvent(new CustomEvent("slider-changed", {
      detail: this.value
    }));
  }
  render() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <link
        rel="stylesheet"
        href="${toolkit_components_reader_moz_slider_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <div class="container">
        <label class="slider-label" for="inputSlider">${this.label}</label>
        ${this.setupIcon()}
        <div class="slider-container">
          <input
            id="inputSlider"
            max=${this.max}
            min=${this.min}
            step=${this.getStepSize()}
            type="range"
            .value=${this.value}
            list="slider-ticks"
            @change=${this.handleChange}
          />
          ${this.ticksTemplate()}
        </div>
      </div>
    `;
  }
}
customElements.define("moz-slider", MozSlider);

/***/ }),

/***/ 11209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Default": () => (/* binding */ Default),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _content_widgets_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_reader_moz_slider_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23776);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/Reader View/Slider",
  component: "moz-slider",
  argTypes: {},
  parameters: {
    status: "stable",
    fluent: `moz-slider-label =
      .label = Slider test
      `
  }
});
const Template = ({
  min,
  max,
  value,
  ticks,
  labelL10nId,
  sliderIcon
}) => _content_widgets_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
  <moz-slider
    min=${min}
    max=${max}
    value=${value}
    ticks=${ticks}
    tick-labels='["Narrow", "Wide"]'
    data-l10n-id=${labelL10nId}
    data-l10n-attrs="label"
    slider-icon=${sliderIcon}
  ></moz-slider>
`;
const Default = Template.bind({});
Default.args = {
  min: 0,
  max: 4,
  value: 2,
  ticks: 9,
  labelL10nId: "moz-slider-label",
  sliderIcon: "chrome://global/skin/icons/defaultFavicon.svg"
};

/***/ }),

/***/ 38924:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-slider.bc897e294ec867d01648.css";

/***/ })

}]);
//# sourceMappingURL=moz-slider-stories.e80a9115.iframe.bundle.js.map