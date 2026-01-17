"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[3779],{

/***/ 6266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AIWebsiteChip: () => (/* binding */ AIWebsiteChip)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_ai_website_chip_ai_website_chip_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39894);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * A website chip component for tagging and displaying websites.
 *
 * Two types:
 * - in-line: Not removable, supports empty state with "@" symbol + "Tag a tab or site" placeholder
 *   - default: favicon + text
 *   - hover: favicon + text (identical to default)
 *   - empty: "@" symbol + "Tag a tab or site" text
 * - context-chip: Removable, no empty state support
 *   - default: favicon + text
 *   - hover: remove button + text
 *
 * @property {string} type - Type of chip: "in-line" or "context-chip"
 * @property {string} label - The text content of the chip
 * @property {string} iconSrc - Favicon or icon URL
 * @property {string} href - URL for the link (used with context-chip type)
 */
class AIWebsiteChip extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    type: {
      type: String,
      reflect: true
    },
    label: {
      type: String
    },
    iconSrc: {
      type: String
    },
    href: {
      type: String
    }
  };
  constructor() {
    super();
    this.type = "in-line";
    this.label = "";
    this.iconSrc = "";
    this.href = "";
  }
  get #isEmpty() {
    return this.type === "in-line" && !this.label;
  }
  get #isRemovable() {
    return this.type === "context-chip";
  }
  #handleClick() {
    this.dispatchEvent(new CustomEvent("ai-website-chip:click", {
      bubbles: true,
      composed: true,
      detail: {
        label: this.label
      }
    }));
  }
  #handleRemove(e) {
    e.stopPropagation();
    e.preventDefault();
    this.dispatchEvent(new CustomEvent("ai-website-chip:remove", {
      bubbles: true,
      composed: true,
      detail: {
        label: this.label
      }
    }));
  }
  render() {
    const isEmpty = this.#isEmpty;
    const isRemovable = this.#isRemovable;
    const isLink = this.type === "context-chip" && this.href;
    let iconTemplate;
    if (isEmpty) {
      iconTemplate = (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span class="chip-at">@</span>`;
    } else if (this.iconSrc) {
      iconTemplate = (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<img class="chip-icon" src=${this.iconSrc} alt="" />`;
    }
    const removeButton = isRemovable ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<button
          class="chip-remove"
          @click=${this.#handleRemove}
          data-l10n-id="aiwindow-website-chip-remove-button"
        >
          <img
            class="chip-remove-icon"
            src="chrome://global/skin/icons/close.svg"
            alt=""
          />
        </button>` : null;
    const labelTemplate = isEmpty ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span
          class="chip-label"
          data-l10n-id="aiwindow-website-chip-placeholder"
        ></span>` : (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span class="chip-label">${this.label}</span>`;
    const chipContent = (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      ${iconTemplate} ${removeButton} ${labelTemplate}
    `;
    const chipElement = isLink ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<a
          class="chip"
          ?data-removable=${isRemovable}
          href=${this.href}
          target="_blank"
        >
          ${chipContent}
        </a>` : (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div
          class="chip"
          ?data-empty=${isEmpty}
          ?data-removable=${isRemovable}
          @click=${this.#handleClick}
        >
          ${chipContent}
        </div>`;
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_ai_website_chip_ai_website_chip_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      ${chipElement}
    `;
  }
}
customElements.define("ai-website-chip", AIWebsiteChip);

/***/ }),

/***/ 39894:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ai-website-chip.384045da7962602bdc9c.css";

/***/ }),

/***/ 82559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContextChip: () => (/* binding */ ContextChip),
/* harmony export */   InLineCollection: () => (/* binding */ InLineCollection),
/* harmony export */   InLineDefault: () => (/* binding */ InLineDefault),
/* harmony export */   InLineEmpty: () => (/* binding */ InLineEmpty),
/* harmony export */   MixedCollection: () => (/* binding */ MixedCollection),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var chrome_browser_content_aiwindow_components_ai_website_chip_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6266);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/AI Window/Website Chip",
  component: "ai-website-chip",
  argTypes: {
    type: {
      control: "select",
      options: ["in-line", "context-chip"]
    },
    label: {
      control: "text"
    },
    iconSrc: {
      control: "text"
    },
    href: {
      control: "text"
    }
  },
  parameters: {
    fluent: `
aiwindow-website-chip-placeholder = Tag a tab or site
aiwindow-website-chip-remove-button =
  .aria-label = Remove
    `
  }
});
const Template = ({
  type,
  label,
  iconSrc,
  href
}) => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <ai-website-chip
    .type=${type}
    .label=${label}
    .iconSrc=${iconSrc}
    .href=${href || ""}
  ></ai-website-chip>
`;
const InLineDefault = Template.bind({});
InLineDefault.args = {
  type: "in-line",
  label: "mozilla.org",
  iconSrc: "chrome://branding/content/about-logo.svg"
};
const InLineEmpty = Template.bind({});
InLineEmpty.args = {
  type: "in-line",
  label: "",
  iconSrc: ""
};
const InLineCollection = () => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <div style="display: flex; flex-wrap: wrap; gap: 8px;">
    <ai-website-chip
      type="in-line"
      label="mozilla.org"
      iconSrc="chrome://branding/content/icon16.png"
    ></ai-website-chip>
    <ai-website-chip type="in-line" label=""></ai-website-chip>
  </div>
`;
const ContextChip = Template.bind({});
ContextChip.args = {
  type: "context-chip",
  label: "example.com",
  iconSrc: "chrome://branding/content/icon16.png"
};
const MixedCollection = () => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <div style="display: flex; flex-wrap: wrap; gap: 8px;">
    <ai-website-chip
      type="in-line"
      label="mozilla.org"
      iconSrc="chrome://branding/content/icon16.png"
    ></ai-website-chip>
    <ai-website-chip type="in-line" label=""></ai-website-chip>
    <ai-website-chip
      type="context-chip"
      label="example.com"
      iconSrc="chrome://branding/content/about-logo.svg"
      href="https://example.com"
    ></ai-website-chip>
  </div>
`;

/***/ })

}]);
//# sourceMappingURL=components-ai-website-chip-ai-website-chip-stories.0de72d1b.iframe.bundle.js.map