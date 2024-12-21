"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[3365,2877],{

/***/ 12877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozInputText)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_input_text_moz_input_text_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80342);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45717);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73689);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * A text input custom element.
 *
 * @tagname moz-input-text
 * @property {string} label - The text of the label element
 * @property {string} name - The name of the input control
 * @property {string} value - The value of the input control
 * @property {boolean} disabled - The disabled state of the input control
 * @property {string} iconSrc - The src for an optional icon
 * @property {string} description - The text for the description element that helps describe the input control
 * @property {string} supportPage - Name of the SUMO support page to link to.
 * @property {string} placeholder - Text to display when the input has no value.
 */
class MozInputText extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozBaseInputElement {
  static properties = {
    placeholder: {
      type: String,
      fluent: true
    }
  };
  static inputLayout = "block";
  constructor() {
    super();
    this.value = "";
  }
  inputStylesTemplate() {
    return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`<link
      rel="stylesheet"
      href="${toolkit_content_widgets_moz_input_text_moz_input_text_css__WEBPACK_IMPORTED_MODULE_0__}"
    />`;
  }
  handleInput(e) {
    this.value = e.target.value;
  }
  inputTemplate() {
    return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <input
        id="input"
        type="text"
        name=${this.name}
        value=${this.value}
        ?disabled=${this.disabled}
        accesskey=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.accessKey)}
        placeholder=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.placeholder)}
        aria-describedby="description"
        @input=${this.handleInput}
        @change=${this.redispatchEvent}
      />
    `;
  }
}
customElements.define("moz-input-text", MozInputText);

/***/ }),

/***/ 81832:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Default": () => (/* binding */ Default),
/* harmony export */   "Disabled": () => (/* binding */ Disabled),
/* harmony export */   "WithAccesskey": () => (/* binding */ WithAccesskey),
/* harmony export */   "WithDescription": () => (/* binding */ WithDescription),
/* harmony export */   "WithIcon": () => (/* binding */ WithIcon),
/* harmony export */   "WithPlaceholder": () => (/* binding */ WithPlaceholder),
/* harmony export */   "WithSlottedDescription": () => (/* binding */ WithSlottedDescription),
/* harmony export */   "WithSlottedSupportLink": () => (/* binding */ WithSlottedSupportLink),
/* harmony export */   "WithSupportLink": () => (/* binding */ WithSupportLink),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45717);
/* harmony import */ var _moz_input_text_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12877);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "UI Widgets/Input Text",
  component: "moz-input-text",
  argTypes: {
    l10nId: {
      options: ["moz-input-text-label", "moz-input-text-placeholder", "moz-input-text-description", "moz-input-text-label-wrapped"],
      control: {
        type: "select"
      }
    }
  },
  parameters: {
    status: "in-development",
    handles: ["change", "input"],
    fluent: `
moz-input-text-label =
  .label = This is a text input
moz-input-text-placeholder =
  .label = This is a text input
  .placeholder = Placeholder text here
moz-input-text-description =
  .label = This is a text input
  .description = This is a description for the text input
  .placeholder = Placeholder text here
moz-input-text-label-wrapped =
  .label = Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tristique justo leo, ac pellentesque lacus gravida vitae. Nam pellentesque suscipit venenatis.
    `
  }
});
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
  hasSlottedSupportLink
}) => _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
  <moz-input-text
    name=${name}
    value=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(value || null)}
    iconsrc=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(iconSrc || null)}
    ?disabled=${disabled}
    data-l10n-id=${l10nId}
    support-page=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(supportPage || null)}
    accesskey=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(accessKey || null)}
  >
    ${hasSlottedDescription ? _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`<div slot="description">${description}</div>` : ""}
    ${hasSlottedSupportLink ? _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`<a slot="support-link" href="www.example.com">Click me!</a>` : ""}
  </moz-input-text>
`;
const Default = Template.bind({});
Default.args = {
  name: "example-moz-input-text",
  value: "",
  iconSrc: "",
  disabled: false,
  l10nId: "moz-input-text-label",
  supportPage: "",
  accessKey: "",
  hasSlottedDescription: false,
  hasSlottedSupportLink: false
};
const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  ...Default.args,
  l10nId: "moz-input-text-placeholder"
};
const WithIcon = Template.bind({});
WithIcon.args = {
  ...Default.args,
  iconSrc: "chrome://global/skin/icons/highlights.svg"
};
const WithDescription = Template.bind({});
WithDescription.args = {
  ...Default.args,
  l10nId: "moz-input-text-description"
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
  l10nId: "moz-input-text-description",
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
  l10nId: "moz-input-text-description"
};
const WithSlottedSupportLink = Template.bind({});
WithSlottedSupportLink.args = {
  ...Default.args,
  hasSlottedSupportLink: true,
  l10nId: "moz-input-text-description"
};

/***/ }),

/***/ 80342:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-input-text.63687a98fff0be7b9a17.css";

/***/ })

}]);
//# sourceMappingURL=moz-input-text-moz-input-text-stories.a9836c9e.iframe.bundle.js.map