"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1948,6494],{

/***/ 7941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   Disabled: () => (/* binding */ Disabled),
/* harmony export */   PreselectedValue: () => (/* binding */ PreselectedValue),
/* harmony export */   WithAccesskey: () => (/* binding */ WithAccesskey),
/* harmony export */   WithDescription: () => (/* binding */ WithDescription),
/* harmony export */   WithIcon: () => (/* binding */ WithIcon),
/* harmony export */   WithSlottedDescription: () => (/* binding */ WithSlottedDescription),
/* harmony export */   WithSlottedSupportLink: () => (/* binding */ WithSlottedSupportLink),
/* harmony export */   WithSupportLink: () => (/* binding */ WithSupportLink),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11540);
/* harmony import */ var _moz_select_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31948);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "UI Widgets/Select",
  component: "moz-select",
  argTypes: {
    l10nId: {
      options: ["moz-select-label", "moz-select-description"],
      control: {
        type: "select"
      }
    },
    label: {
      table: {
        disable: true
      }
    },
    description: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    status: "in-development",
    handles: ["change", "input"],
    fluent: `
moz-select-label =
  .label = Select an option
moz-select-description =
  .label = Select an option
  .description = This is a description for the select dropdown
    `
  }
});
const DEFAULT_OPTIONS = [{
  value: "1",
  label: "Option 1"
}, {
  value: "2",
  label: "Option 2"
}, {
  value: "3",
  label: "Option 3"
}];
const OTHER_OPTIONS = [{
  value: "A",
  label: "Option A"
}, {
  value: "B",
  label: "Option B"
}, {
  value: "C",
  label: "Option C"
}, {
  value: "D",
  label: "Option D"
}];
const Template = ({
  name,
  value,
  iconSrc,
  disabled,
  l10nId,
  description,
  supportPage,
  accessKey,
  hasSlottedDescription,
  useOtherOptions,
  options = useOtherOptions ? OTHER_OPTIONS : DEFAULT_OPTIONS,
  hasSlottedSupportLink
}) => (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <div style="width:300px">
    <moz-select
      name=${name}
      value=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(value || null)}
      iconsrc=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(iconSrc || null)}
      ?disabled=${disabled}
      data-l10n-id=${l10nId}
      support-page=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(supportPage || null)}
      accesskey=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(accessKey || null)}
    >
      ${hasSlottedDescription ? (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<div slot="description">${description}</div>` : ""}
      ${hasSlottedSupportLink ? (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<a slot="support-link" href="www.example.com">Click me!</a>` : ""}
      ${options.map(opt => (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<moz-option value=${opt.value} label=${opt.label}></moz-option>`)}
    </moz-select>
  </div>
`;
const Default = Template.bind({});
Default.args = {
  name: "example-moz-select",
  value: "",
  iconSrc: "",
  disabled: false,
  l10nId: "moz-select-label",
  description: "",
  supportPage: "",
  accessKey: "",
  hasSlottedDescription: false,
  useOtherOptions: false,
  hasSlottedSupportLink: false
};
const WithIcon = Template.bind({});
WithIcon.args = {
  ...Default.args,
  iconSrc: "chrome://global/skin/icons/highlights.svg"
};
const WithDescription = Template.bind({});
WithDescription.args = {
  ...Default.args,
  l10nId: "moz-select-description"
};
const WithSlottedDescription = Template.bind({});
WithSlottedDescription.args = {
  ...Default.args,
  description: "This is a custom slotted description.",
  hasSlottedDescription: true
};
const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true
};
const WithAccesskey = Template.bind({});
WithAccesskey.args = {
  ...Default.args,
  accessKey: "s"
};
const WithSupportLink = Template.bind({});
WithSupportLink.args = {
  ...Default.args,
  supportPage: "support-page",
  l10nId: "moz-select-description"
};
const WithSlottedSupportLink = Template.bind({});
WithSlottedSupportLink.args = {
  ...Default.args,
  hasSlottedSupportLink: true,
  l10nId: "moz-select-description"
};
const PreselectedValue = Template.bind({});
PreselectedValue.args = {
  ...Default.args,
  value: "2"
};

/***/ }),

/***/ 31948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MozOption: () => (/* binding */ MozOption),
/* harmony export */   "default": () => (/* binding */ MozSelect)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_select_moz_select_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44494);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11540);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48334);

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
class MozSelect extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozBaseInputElement {
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
    this.slotRef = (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.createRef)();
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

  /**
   * @type {MozBaseInputElement['inputStylesTemplate']}
   */
  inputStylesTemplate() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)` <link
      rel="stylesheet"
      href="${toolkit_content_widgets_moz_select_moz_select_css__WEBPACK_IMPORTED_MODULE_0__}"
    />`;
  }
  inputTemplate() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <div class="select-wrapper">
        <select
          id="input"
          name=${this.name}
          accesskey=${this.accessKey}
          @input=${this.handleStateChange}
          @change=${this.redispatchEvent}
          ?disabled=${this.disabled || this.parentDisabled}
          aria-describedby="description"
        >
          ${this.options.map(option => (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
              <option
                value=${option.value}
                ?selected=${option.value === this.value}
              >
                ${option.label}
              </option>
            `)}
        </select>
      </div>
      <slot
        @slotchange=${this.populateOptions}
        hidden
        ${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ref)(this.slotRef)}
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
class MozOption extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
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

/***/ }),

/***/ 44494:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-select.c5c0dbfd84f1c363c915.css";

/***/ })

}]);
//# sourceMappingURL=moz-select-moz-select-stories.5530bc4b.iframe.bundle.js.map