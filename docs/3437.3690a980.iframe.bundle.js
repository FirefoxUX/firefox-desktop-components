"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[3437],{

/***/ 93437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MozOption": () => (/* binding */ MozOption),
/* harmony export */   "default": () => (/* binding */ MozSelect)
/* harmony export */ });
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45717);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73689);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * A select dropdown with options provided via custom `moz-option` elements.
 *
 * @tagname moz-select
 * @property {string} label - The text of the label element
 * @property {string} name - The name of the input control
 * @property {string} value - The value of the selected option
 * @property {boolean} disabled - The disabled state of the input control
 * @property {string} iconSrc - The src for an optional icon
 * @property {string} description - The text for the description element that helps describe the input control
 * @property {string} supportPage - Name of the SUMO support page to link to.
 * @property {array} options - The array of options, populated by <moz-option> children in the
 *     default slot. Do not set directly, these will be overridden by <moz-option> children.
 */
class MozSelect extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.MozBaseInputElement {
  static properties = {
    options: {
      type: Array,
      state: true
    }
  };
  static inputLayout = "block";
  constructor() {
    super();
    this.value = "";
    this.options = [];
    this.slotRef = (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.createRef)();
    this.optionsMutationObserver = new MutationObserver(this.populateOptions.bind(this));
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.optionsMutationObserver.observe(this, {
      attributeFilter: ["label", "value"],
      childList: true,
      subtree: true
    });
  }
  update(changedProperties) {
    super.update(changedProperties);
    if (this.hasUpdated && changedProperties.has("options")) {
      // Match the select's value on initial render or options change.
      this.value = this.inputEl.value;
    }
  }

  /**
   * Internal - populates the select element with options from the light DOM slot.
   */
  populateOptions() {
    this.options = [];
    for (const node of this.slotRef.value.assignedNodes()) {
      if (node.localName === "moz-option") {
        const optionValue = node.getAttribute("value");
        const optionLabel = node.getAttribute("label");
        this.options.push({
          value: optionValue,
          label: optionLabel
        });
      }
    }
  }

  /**
   * Handles change events and updates the selected value.
   *
   * @param {Event} event
   * @memberof MozSelect
   */
  handleStateChange(event) {
    this.value = event.target.value;
  }
  inputTemplate() {
    return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
      <select
        id="input"
        name=${this.name}
        accesskey=${this.accessKey}
        @input=${this.handleStateChange}
        @change=${this.redispatchEvent}
        .disabled=${this.disabled}
        aria-describedby="description"
      >
        ${this.options.map(option => _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
            <option
              value=${option.value}
              ?selected=${option.value === this.value}
            >
              ${option.label}
            </option>
          `)}
      </select>
      <slot
        @slotchange=${this.populateOptions}
        hidden
        ${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ref)(this.slotRef)}
      ></slot>
    `;
  }
}
customElements.define("moz-select", MozSelect);

/**
 * A custom option element for use in moz-select.
 *
 * @tagname moz-option
 * @property {string} value - The value of the option
 * @property {string} label - The label of the option
 */
class MozOption extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.MozLitElement {
  static properties = {
    // Reflect the attribute so that moz-select can detect changes with a MutationObserver
    value: {
      type: String,
      reflect: true
    },
    // Reflect the attribute so that moz-select can detect changes with a MutationObserver
    label: {
      type: String,
      reflect: true
    }
  };
  constructor() {
    super();
    this.value = "";
    this.label = "";
  }
  render() {
    // This is just a placeholder to pass values into moz-select.
    return "";
  }
}
customElements.define("moz-option", MozOption);

/***/ })

}]);
//# sourceMappingURL=3437.3690a980.iframe.bundle.js.map