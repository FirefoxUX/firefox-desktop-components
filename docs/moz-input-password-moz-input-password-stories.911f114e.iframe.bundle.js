"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1020,2966,3616],{

/***/ 9538:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-input-text.924e6291805dbccf217d.css";

/***/ }),

/***/ 52169:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   Disabled: () => (/* binding */ Disabled),
/* harmony export */   WithAccesskey: () => (/* binding */ WithAccesskey),
/* harmony export */   WithEllipsizedLabel: () => (/* binding */ WithEllipsizedLabel),
/* harmony export */   WithIcon: () => (/* binding */ WithIcon),
/* harmony export */   WithPlaceholder: () => (/* binding */ WithPlaceholder),
/* harmony export */   WithSlottedDescription: () => (/* binding */ WithSlottedDescription),
/* harmony export */   WithSlottedSupportLink: () => (/* binding */ WithSlottedSupportLink),
/* harmony export */   WithSupportLink: () => (/* binding */ WithSupportLink),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   withDescription: () => (/* binding */ withDescription)
/* harmony export */ });
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11540);
/* harmony import */ var _moz_input_password_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73616);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "UI Widgets/Input Password",
  component: "moz-input-password",
  argTypes: {
    l10nId: {
      options: ["moz-input-password-label", "moz-input-password-placeholder", "moz-input-password-description", "moz-input-password-label-wrapped"],
      control: {
        type: "select"
      }
    }
  },
  parameters: {
    status: "in-development",
    handles: ["change", "input"],
    fluent: `
moz-input-password-label =
  .label = Password:
moz-input-password-placeholder =
  .label = Password:
  .placeholder = Placeholder text
moz-input-password-description =
  .label = Password:
  .description = Description for the password input
  .placeholder = Placeholder text
moz-input-password-label-wrapped =
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
  hasSlottedSupportLink,
  ellipsized
}) => (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <moz-input-password
    name=${name}
    value=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(value || null)}
    iconsrc=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(iconSrc || null)}
    ?disabled=${disabled}
    data-l10n-id=${l10nId}
    support-page=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(supportPage || null)}
    accesskey=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(accessKey || null)}
    class=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.classMap)({
  "text-truncated-ellipsis": ellipsized
})}
  >
    ${hasSlottedDescription ? (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<div slot="description">${description}</div>` : ""}
    ${hasSlottedSupportLink ? (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<a slot="support-link" href="www.example.com">Click me!</a>` : ""}
  </moz-input-password>
`;
const Default = Template.bind({});
Default.args = {
  name: "example-moz-input-password",
  value: "",
  iconSrc: "",
  disabled: false,
  l10nId: "moz-input-password-label",
  supportPage: "",
  accessKey: "",
  hasSlottedDescription: false,
  hasSlottedSupportLink: false
};
const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  ...Default.args,
  l10nId: "moz-input-password-placeholder"
};
const WithIcon = Template.bind({});
WithIcon.args = {
  ...Default.args,
  iconSrc: "chrome://global/skin/icons/highlights.svg"
};
const withDescription = Template.bind({});
withDescription.args = {
  ...Default.args,
  l10nId: "moz-input-password-description"
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
  l10nId: "moz-input-password-description",
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
  l10nId: "moz-input-password-description"
};
const WithSlottedSupportLink = Template.bind({});
WithSlottedSupportLink.args = {
  ...Default.args,
  hasSlottedSupportLink: true,
  l10nId: "moz-input-password-description"
};
const WithEllipsizedLabel = Template.bind({});
WithEllipsizedLabel.args = {
  ...Default.args,
  ellipsized: true,
  l10nId: "moz-input-password-label-wrapped"
};

/***/ }),

/***/ 73616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozInputPassword)
/* harmony export */ });
/* harmony import */ var chrome_global_content_elements_moz_input_text_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91020);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



/**
 * A password input custom element.
 *
 * @tagname moz-input-password
 * @property {string} label - The text of the label element
 * @property {string} name - The name of the input control
 * @property {string} value - The value of the input control
 * @property {boolean} disabled - The disabled state of the input control
 * @property {boolean} readonly - The readonly state of the input control
 * @property {string} iconSrc - The src for an optional icon
 * @property {string} description - The text for the description element that helps describe the input control
 * @property {string} supportPage - Name of the SUMO support page to link to.
 * @property {string} placeholder - Text to display when the input has no value.
 */
class MozInputPassword extends chrome_global_content_elements_moz_input_text_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
  inputTemplate() {
    return super.inputTemplate({
      type: "password"
    });
  }
}
customElements.define("moz-input-password", MozInputPassword);

/***/ }),

/***/ 91020:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozInputText)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_input_text_moz_input_text_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9538);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11540);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48334);

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
 * @property {boolean} readonly - The readonly state of the input control
 * @property {string} iconSrc - The src for an optional icon
 * @property {string} description - The text for the description element that helps describe the input control
 * @property {string} supportPage - Name of the SUMO support page to link to.
 * @property {string} placeholder - Text to display when the input has no value.
 * @property {string} ariaLabel - The aria-label text when there is no visible label.
 * @property {string} ariaDescription - The aria-description text when there is no visible description.
 */
class MozInputText extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozBaseInputElement {
  static properties = {
    placeholder: {
      type: String,
      fluent: true
    },
    readonly: {
      type: Boolean,
      reflect: true
    }
  };
  static inputLayout = "block";
  constructor() {
    super();
    this.value = "";
    this.readonly = false;
  }
  inputStylesTemplate() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<link
      rel="stylesheet"
      href="${toolkit_content_widgets_moz_input_text_moz_input_text_css__WEBPACK_IMPORTED_MODULE_0__}"
    />`;
  }
  handleInput(e) {
    this.value = e.target.value;
  }
  inputTemplate(options = {}) {
    let {
      type = "text",
      classes,
      styles,
      inputValue
    } = options;
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <input
        id="input"
        type=${type}
        class=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(classes)}
        style=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(styles)}
        name=${this.name}
        .value=${inputValue || this.value}
        ?disabled=${this.disabled || this.parentDisabled}
        ?readonly=${this.readonly}
        accesskey=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.accessKey)}
        placeholder=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.placeholder)}
        aria-label=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.ariaLabel ?? undefined)}
        aria-describedby="description"
        aria-description=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.hasDescription ? undefined : this.ariaDescription)}
        @input=${this.handleInput}
        @change=${this.redispatchEvent}
      />
    `;
  }
}
customElements.define("moz-input-text", MozInputText);

/***/ })

}]);
//# sourceMappingURL=moz-input-password-moz-input-password-stories.911f114e.iframe.bundle.js.map