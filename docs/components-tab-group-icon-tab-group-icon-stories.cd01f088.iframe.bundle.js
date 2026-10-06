"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[5439],{

/***/ 8038:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "tab-group-icon.e5dc8513779f3a659ff7.css";

/***/ }),

/***/ 60796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllColors: () => (/* binding */ AllColors),
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   Sized: () => (/* binding */ Sized),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var browser_themes_shared_tabbrowser_tab_tokens_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79439);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var chrome_browser_content_aiwindow_components_tab_group_icon_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62410);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/AI Window/Tab Group Icon",
  component: "tab-group-icon",
  argTypes: {
    label: {
      control: "text"
    },
    color: {
      control: "select",
      options: ["blue", "cyan", "gray", "green", "orange", "pink", "purple", "red", "yellow"]
    }
  }
});

// The colors come from the --tab-group-* tokens, which the AI Window documents
// pull in through ai-window-shared.css.
const tabGroupTokens = (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<link
  rel="stylesheet"
  href="${browser_themes_shared_tabbrowser_tab_tokens_css__WEBPACK_IMPORTED_MODULE_0__}"
/>`;
const Template = ({
  label,
  color
}) => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
  ${tabGroupTokens}
  <tab-group-icon .label=${label} .color=${color}></tab-group-icon>
`;
const Default = Template.bind({});
Default.args = {
  label: "Trip planning",
  color: "blue"
};
const AllColors = () => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
  ${tabGroupTokens}
  <div style="display: flex; flex-wrap: wrap; gap: 8px;">
    ${["blue", "cyan", "gray", "green", "orange", "pink", "purple", "red", "yellow"].map(color => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<tab-group-icon .label=${color} .color=${color}></tab-group-icon>`)}
  </div>
`;

// The icon draws its label at --font-size-small; a consumer that wants a bigger
// icon overrides the size, and the font size with it.
const Sized = () => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
  ${tabGroupTokens}
  <tab-group-icon
    style="--tab-group-icon-size: 32px; --tab-group-icon-font-size: 20px;"
    label="Trip planning"
    color="purple"
  ></tab-group-icon>
`;

/***/ }),

/***/ 62410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabGroupIcon: () => (/* binding */ TabGroupIcon)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_tab_group_icon_tab_group_icon_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * Stands in for a tab group's favicon, mirroring the tab group label: a box in
 * the group's color holding the first character of its name. The name is always
 * shown next to it, so the character is hidden from assistive technology.
 * Consumers size it with --tab-group-icon-size and --tab-group-icon-font-size.
 *
 * @property {string} label - Tab group name, of which the first character shows
 * @property {string} color - Tab group color name, as used by --tab-group-*
 */
class TabGroupIcon extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    label: {
      type: String
    },
    color: {
      type: String,
      reflect: true
    }
  };
  constructor() {
    super();
    this.label = "";
    this.color = "";
  }
  willUpdate(changedProperties) {
    if (!changedProperties.has("color")) {
      return;
    }
    // On this element, since a custom property substitutes where it is
    // declared rather than where it is used.
    const color = this.color || "gray";
    this.style.setProperty("--tab-group-color", `var(--tab-group-${color})`);
    this.style.setProperty("--tab-group-text-color", `var(--tab-group-${color}-text)`);
  }

  // Array.from() so an astral first character is not cut in half.
  get #initial() {
    return (Array.from(this.label?.trim() ?? "")[0] ?? "").toUpperCase();
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_tab_group_icon_tab_group_icon_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <span aria-hidden="true">${this.#initial}</span>
    `;
  }
}
customElements.define("tab-group-icon", TabGroupIcon);

/***/ }),

/***/ 79439:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "tab.tokens.fac864ffcef7b9588b59.css";

/***/ })

}]);
//# sourceMappingURL=components-tab-group-icon-tab-group-icon-stories.cd01f088.iframe.bundle.js.map