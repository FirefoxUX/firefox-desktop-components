"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[5161],{

/***/ 12679:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DangerButton": () => (/* binding */ DangerButton),
/* harmony export */   "DisabledButton": () => (/* binding */ DisabledButton),
/* harmony export */   "GhostIconButton": () => (/* binding */ GhostIconButton),
/* harmony export */   "PrimaryButton": () => (/* binding */ PrimaryButton),
/* harmony export */   "RegularButton": () => (/* binding */ RegularButton),
/* harmony export */   "SmallButton": () => (/* binding */ SmallButton),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45717);
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "UI Widgets/Button",
  component: "button",
  argTypes: {
    size: {
      options: ["default", "small"],
      control: {
        type: "radio"
      }
    }
  },
  parameters: {
    actions: {
      handles: ["click"]
    },
    status: "stable",
    fluent: "\nbutton-regular = Regular\nbutton-primary = Primary\nbutton-disabled = Disabled\nbutton-danger = Danger\nbutton-small = Small\n    "
  }
});
var Template = function Template(_ref) {
  var disabled = _ref.disabled,
    primary = _ref.primary,
    l10nId = _ref.l10nId,
    ghostButton = _ref.ghostButton,
    icon = _ref.icon,
    dangerButton = _ref.dangerButton,
    size = _ref.size;
  return (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    <style>\n      .icon-button {\n        background-image: url(\"", "\");\n      }\n    </style>\n    <button\n      ?disabled=", "\n      class=", "\n      data-l10n-id=", "\n    ></button>\n  "])), icon, disabled, (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.classMap)({
    primary: primary,
    "ghost-button": ghostButton,
    "icon-button": icon,
    "danger-button": dangerButton,
    "small-button": size === "small"
  }), l10nId);
};
var RegularButton = Template.bind({});
RegularButton.args = {
  l10nId: "button-regular",
  primary: false,
  disabled: false,
  size: "default"
};
var PrimaryButton = Template.bind({});
PrimaryButton.args = {
  l10nId: "button-primary",
  primary: true,
  disabled: false,
  size: "default"
};
var DisabledButton = Template.bind({});
DisabledButton.args = {
  l10nId: "button-disabled",
  primary: false,
  disabled: true,
  size: "default"
};
var DangerButton = Template.bind({});
DangerButton.args = {
  l10nId: "button-danger",
  primary: true,
  disabled: false,
  dangerButton: true,
  size: "default"
};
var GhostIconButton = Template.bind({});
GhostIconButton.args = {
  icon: "chrome://browser/skin/login.svg",
  disabled: false,
  ghostButton: true,
  size: "default"
};
var SmallButton = Template.bind({});
SmallButton.args = {
  l10nId: "button-small",
  primary: true,
  disabled: false,
  size: "small"
};

/***/ })

}]);
//# sourceMappingURL=button-stories.975ce09d.iframe.bundle.js.map