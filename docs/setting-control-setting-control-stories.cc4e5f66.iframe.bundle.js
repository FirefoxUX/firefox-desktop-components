"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[8050],{

/***/ 56225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Checkbox: () => (/* binding */ Checkbox),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11540);
/* harmony import */ var chrome_browser_content_preferences_widgets_setting_control_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87480);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/Settings/Setting Control",
  component: "setting-control",
  parameters: {
    status: "in-development",
    handles: ["click", "input", "change"],
    fluent: `
checkbox-example-input =
  .label = Checkbox example of setting-control
  .description = Could have a description like moz-checkbox.
`
  }
});
const Template = ({
  config,
  setting
}) => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <setting-control .config=${config} .setting=${setting}></setting-control>
`;
const Checkbox = Template.bind({});
Checkbox.args = {
  config: {
    id: "checkbox-example",
    l10nId: "checkbox-example-input"
  },
  setting: {
    value: true,
    on() {},
    off() {},
    userChange() {}
  }
};

/***/ }),

/***/ 87480:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingControl: () => (/* binding */ SettingControl)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11540);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48334);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



class SettingControl extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.MozLitElement {
  #lastSetting;
  static properties = {
    setting: {
      type: Object
    },
    config: {
      type: Object
    },
    value: {}
  };
  static queries = {
    inputEl: "#input"
  };
  createRenderRoot() {
    return this;
  }
  onSettingChange = () => {
    this.value = this.setting.value;
  };
  willUpdate(changedProperties) {
    if (changedProperties.has("setting")) {
      if (this.#lastSetting) {
        this.#lastSetting.off("change", this.onSettingChange);
      }
      this.#lastSetting = this.setting;
      this.value = this.getValue();
      this.setting.on("change", this.onSettingChange);
    }
  }
  getValue() {
    return this.setting.value;
  }
  onChange(e) {
    this.setting.userChange(e.target.checked);
    this.value = this.getValue();
  }
  render() {
    let {
      config
    } = this;
    switch (config.control) {
      case "checkbox":
      default:
        return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<moz-checkbox
          id="input"
          data-l10n-id=${config.l10nId}
          .iconSrc=${config.iconSrc}
          .checked=${this.value}
          .supportPage=${this.config.supportPage}
          data-subcategory=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(this.config.subcategory)}
          @change=${this.onChange}
        ></moz-checkbox>`;
    }
  }
}
customElements.define("setting-control", SettingControl);

/***/ })

}]);
//# sourceMappingURL=setting-control-setting-control-stories.cc4e5f66.iframe.bundle.js.map