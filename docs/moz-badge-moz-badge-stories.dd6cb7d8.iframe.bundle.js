"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[2928,9254],{

/***/ 32928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozBadge)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_badge_moz_badge_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61138);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * A simple badge element that can be used to indicate status or convey simple messages
 *
 * @tagname moz-badge
 * @property {string} label - Text to display on the badge
 * @property {string} iconSrc - The src for an optional icon shown next to the label
 * @property {string} title - The title of the badge, appears as a tooltip on hover
 */
class MozBadge extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    label: {
      type: String,
      fluent: true
    },
    iconSrc: {
      type: String
    },
    title: {
      type: String,
      fluent: true,
      mapped: true
    }
  };
  constructor() {
    super();
    this.label = "";
  }
  render() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_badge_moz_badge_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <div class="moz-badge" title=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.title)}>
        ${this.iconSrc ? (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<img class="moz-badge-icon" src=${this.iconSrc} role="presentation"></img>` : ""}
        <span class="moz-badge-label">${this.label}</span>
      </div>
    `;
  }
}
customElements.define("moz-badge", MozBadge);

/***/ }),

/***/ 50521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   WithIcon: () => (/* binding */ WithIcon),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var _moz_badge_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32928);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "UI Widgets/Badge",
  component: "moz-badge",
  argTypes: {
    label: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    status: "in-development",
    fluent: `
moz-badge =
    .label = Beta
    .title = Beta experiment
`
  }
});
const Template = ({
  label,
  iconSrc,
  title,
  l10nId
}) => (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <moz-badge
    label=${label}
    iconSrc=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(iconSrc)}
    title=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(title)}
    data-l10n-id=${l10nId}
  ></moz-badge>
`;
const Default = Template.bind({});
Default.args = {
  label: "Beta",
  l10nId: "moz-badge"
};
const WithIcon = Template.bind({});
WithIcon.args = {
  label: "Beta",
  iconSrc: "chrome://global/skin/icons/info.svg",
  l10nId: "moz-badge"
};

/***/ }),

/***/ 61138:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-badge.fbdb74fc5b3385a32dee.css";

/***/ })

}]);
//# sourceMappingURL=moz-badge-moz-badge-stories.dd6cb7d8.iframe.bundle.js.map