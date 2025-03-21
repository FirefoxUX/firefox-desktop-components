"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[569,8220,404],{

/***/ 88220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozBoxBase)
/* harmony export */ });
/* harmony import */ var toolkit_themes_shared_design_system_text_and_typography_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37108);
/* harmony import */ var toolkit_content_widgets_moz_box_moz_box_common_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42575);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45717);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73689);


/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * Base class for moz-box-* elements providing common properties and templates.
 *
 * @property {string} label - The text for the label element.
 * @property {string} description - The text for the description element.
 * @property {string} iconSrc - The src for an optional icon.
 */
class MozBoxBase extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.MozLitElement {
  static properties = {
    label: {
      type: String,
      fluent: true
    },
    description: {
      type: String,
      fluent: true
    },
    iconSrc: {
      type: String
    }
  };
  constructor() {
    super();
    this.label = "";
    this.description = "";
    this.iconSrc = "";
  }
  get labelEl() {
    return this.renderRoot.querySelector(".label");
  }
  get descriptionEl() {
    return this.renderRoot.querySelector(".description");
  }
  get iconEl() {
    return this.renderRoot.querySelector(".icon");
  }
  stylesTemplate() {
    return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_box_moz_box_common_css__WEBPACK_IMPORTED_MODULE_1__}"
      />
      <link
        rel="stylesheet"
        href="${toolkit_themes_shared_design_system_text_and_typography_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
    `;
  }
  textTemplate() {
    return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<div
      class=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.classMap)({
      "text-content": true,
      "has-icon": this.iconSrc,
      "has-description": this.description
    })}
    >
      ${this.iconTemplate()}${this.labelTemplate()}${this.descriptionTemplate()}
    </div>`;
  }
  labelTemplate() {
    if (!this.label) {
      return "";
    }
    return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<span class="label">${this.label}</span>`;
  }
  iconTemplate() {
    if (!this.iconSrc) {
      return "";
    }
    return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<img src=${this.iconSrc} role="presentation" class="icon" />`;
  }
  descriptionTemplate() {
    if (!this.description) {
      return "";
    }
    return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<span class="description text-deemphasized">
      ${this.description}
    </span>`;
  }
}

/***/ }),

/***/ 30404:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozBoxItem)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_box_moz_box_item_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68969);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45717);
/* harmony import */ var _moz_box_base_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88220);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * A custom element used for highlighting important information and/or providing
 * context for specific settings.
 *
 * @tagname moz-box-item
 * @property {string} label - Label for the button.
 * @property {string} description - Descriptive text for the button.
 * @property {string} iconSrc - The src for an optional icon shown next to the label.
 * @property {string} layout - Layout style for the box content, either "default" or "large-icon".
 * @slot default - Slot for the box item's content, which overrides label and description.
 */
class MozBoxItem extends _moz_box_base_mjs__WEBPACK_IMPORTED_MODULE_2__["default"] {
  static properties = {
    layout: {
      type: String,
      reflect: true
    }
  };
  static queries = {
    defaultSlotEl: "slot:not([name])"
  };
  constructor() {
    super();
    this.layout = "default";
  }
  stylesTemplate() {
    return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`${super.stylesTemplate()}
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_box_moz_box_item_css__WEBPACK_IMPORTED_MODULE_0__}"
      />`;
  }
  render() {
    return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      ${this.stylesTemplate()}
      <div class="box-container">
        ${this.label ? super.textTemplate() : _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`<slot></slot>`}
      </div>
    `;
  }
}
customElements.define("moz-box-item", MozBoxItem);

/***/ }),

/***/ 35429:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Default": () => (/* binding */ Default),
/* harmony export */   "LargeIconLayout": () => (/* binding */ LargeIconLayout),
/* harmony export */   "WithDescription": () => (/* binding */ WithDescription),
/* harmony export */   "WithIcon": () => (/* binding */ WithIcon),
/* harmony export */   "WithSlottedContent": () => (/* binding */ WithSlottedContent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45717);
/* harmony import */ var _moz_box_item_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30404);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "UI Widgets/Box Item",
  component: "moz-box-item",
  argTypes: {
    l10nId: {
      options: ["moz-box-item-label", "moz-box-item-label-description"],
      control: {
        type: "select"
      }
    }
  },
  parameters: {
    status: "in-development",
    fluent: `
moz-box-item-label =
  .label = I'm a box item
moz-box-item-label-description =
  .label = I'm a box item
  .description = Some description of the item
    `
  }
});
const Template = ({
  l10nId,
  iconSrc,
  slottedContent,
  layout
}) => _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
  <style>
    .container {
      width: 300px;
    }

    .slotted {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
    }

    img {
      width: 150px;
      margin-block-end: var(--space-large);
    }
  </style>
  <div class="container">
    <moz-box-item
      data-l10n-id=${l10nId}
      iconsrc=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(iconSrc)}
      layout=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(layout)}
    >
      ${slottedContent ? _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`<div class="slotted">
            <img src="chrome://global/skin/illustrations/security-error.svg" />
            <span>This is an example message</span>
            <span class="text-deemphasized">
              Message description would go down here
            </span>
          </div>` : ""}
    </moz-box-item>
  </div>
`;
const Default = Template.bind({});
Default.args = {
  l10nId: "moz-box-item-label",
  disabled: false,
  iconSrc: "",
  slottedContent: false
};
const WithDescription = Template.bind({});
WithDescription.args = {
  ...Default.args,
  l10nId: "moz-box-item-label-description"
};
const WithIcon = Template.bind({});
WithIcon.args = {
  ...WithDescription.args,
  iconSrc: "chrome://global/skin/icons/highlights.svg"
};
const WithSlottedContent = Template.bind({});
WithSlottedContent.args = {
  slottedContent: true
};
const LargeIconLayout = Template.bind({});
LargeIconLayout.args = {
  ...WithIcon.args,
  iconSrc: "chrome://global/skin/icons/info.svg",
  layout: "large-icon"
};

/***/ }),

/***/ 42575:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-box-common.03a7368cecc87735599f.css";

/***/ }),

/***/ 68969:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-box-item.eb0b3f90a21d8eb3528b.css";

/***/ }),

/***/ 37108:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "text-and-typography.f1f851251a78b8016f44.css";

/***/ })

}]);
//# sourceMappingURL=moz-box-moz-box-item-stories.ac5661b9.iframe.bundle.js.map