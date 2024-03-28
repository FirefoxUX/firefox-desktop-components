"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[7802],{

/***/ 99053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozButton)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_button_moz_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54078);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1659);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68164);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * A button with multiple types and two sizes.
 *
 * @tagname moz-button
 * @property {string} label - The button's label, will be overridden by slotted content.
 * @property {string} type - The button type.
 *   Options: default, primary, destructive, icon, icon ghost, ghost.
 * @property {string} size - The button size.
 *   Options: default, small.
 * @property {boolean} disabled - The disabled state.
 * @property {string} title - The button's title attribute, used in shadow DOM and therefore not as an attribute on moz-button.
 * @property {string} titleAttribute - Internal, map title attribute to the title JS property.
 * @property {string} tooltipText - Set the title property, the title attribute will be used first.
 * @property {string} ariaLabel - The button's arial-label attribute, used in shadow DOM and therefore not as an attribute on moz-button.
 * @property {string} ariaLabelAttribute - Internal, map aria-label attribute to the ariaLabel JS property.
 * @property {HTMLButtonElement} buttonEl - The internal button element in the shadow DOM.
 * @slot default - The button's content, overrides label property.
 * @fires click - The click event.
 */
class MozButton extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static shadowRootOptions = {
    ..._lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  static properties = {
    label: { type: String, reflect: true },
    type: { type: String, reflect: true },
    size: { type: String, reflect: true },
    disabled: { type: Boolean, reflect: true },
    title: { type: String, state: true },
    titleAttribute: { type: String, attribute: "title", reflect: true },
    tooltipText: { type: String },
    ariaLabelAttribute: {
      type: String,
      attribute: "aria-label",
      reflect: true,
    },
    ariaLabel: { type: String, state: true },
  };

  static queries = {
    buttonEl: "button",
  };

  constructor() {
    super();
    this.type = "default";
    this.size = "default";
    this.disabled = false;
  }

  willUpdate(changes) {
    if (changes.has("titleAttribute")) {
      this.title = this.titleAttribute;
      this.titleAttribute = null;
    }
    if (changes.has("ariaLabelAttribute")) {
      this.ariaLabel = this.ariaLabelAttribute;
      this.ariaLabelAttribute = null;
    }
  }

  render() {
    return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_button_moz_button_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <button
        type=${this.type}
        size=${this.size}
        ?disabled=${this.disabled}
        title=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.title || this.tooltipText)}
        aria-label=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.ariaLabel)}
        part="button"
      >
        <slot>${this.label}</slot>
      </button>
    `;
  }
}
customElements.define("moz-button", MozButton);


/***/ }),

/***/ 99683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Default": () => (/* binding */ Default),
/* harmony export */   "DefaultSmall": () => (/* binding */ DefaultSmall),
/* harmony export */   "Destructive": () => (/* binding */ Destructive),
/* harmony export */   "Icon": () => (/* binding */ Icon),
/* harmony export */   "IconGhost": () => (/* binding */ IconGhost),
/* harmony export */   "IconSmall": () => (/* binding */ IconSmall),
/* harmony export */   "Primary": () => (/* binding */ Primary),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1659);
/* harmony import */ var _moz_button_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99053);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


// eslint-disable-next-line import/no-unassigned-import


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "UI Widgets/Moz Button",
  component: "moz-button",
  argTypes: {
    l10nId: {
      options: [
        "moz-button-labelled",
        "moz-button-titled",
        "moz-button-aria-labelled",
      ],
      control: { type: "select" },
    },
    size: {
      options: ["default", "small"],
      control: { type: "radio" },
    },
  },
  parameters: {
    actions: {
      handles: ["click"],
    },
    status: "in-development",
    fluent: `
moz-button-labelled = Button
moz-button-primary = Primary
moz-button-destructive = Destructive
moz-button-titled =
  .title = View logins
moz-button-aria-labelled =
  .aria-label = View logins
`,
  },
});

const Template = ({ type, size, l10nId, iconUrl, disabled }) => _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
  <style>
    moz-button[type~="icon"]::part(button) {
      background-image: url("${iconUrl}");
    }
  </style>
  <moz-button
    data-l10n-id=${l10nId}
    type=${type}
    size=${size}
    ?disabled=${disabled}
  ></moz-button>
`;

const Default = Template.bind({});
Default.args = {
  type: "default",
  size: "default",
  l10nId: "moz-button-labelled",
  iconUrl: "chrome://global/skin/icons/more.svg",
  disabled: false,
};
const DefaultSmall = Template.bind({});
DefaultSmall.args = {
  type: "default",
  size: "small",
  l10nId: "moz-button-labelled",
  iconUrl: "chrome://global/skin/icons/more.svg",
  disabled: false,
};
const Primary = Template.bind({});
Primary.args = {
  ...Default.args,
  type: "primary",
  l10nId: "moz-button-primary",
};
const Destructive = Template.bind({});
Destructive.args = {
  ...Default.args,
  type: "destructive",
  l10nId: "moz-button-destructive",
};
const Icon = Template.bind({});
Icon.args = {
  ...Default.args,
  type: "icon",
  l10nId: "moz-button-titled",
};
const IconSmall = Template.bind({});
IconSmall.args = {
  ...Icon.args,
  size: "small",
};
const IconGhost = Template.bind({});
IconGhost.args = {
  ...Icon.args,
  type: "icon ghost",
};


/***/ }),

/***/ 54078:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-button.04e6045c8700138cd5d7.css";

/***/ })

}]);
//# sourceMappingURL=moz-button-moz-button-stories.82fcad07.iframe.bundle.js.map