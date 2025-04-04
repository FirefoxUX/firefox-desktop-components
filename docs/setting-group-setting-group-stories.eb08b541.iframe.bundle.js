"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[7550],{

/***/ 49534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Group: () => (/* binding */ Group),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11540);
/* harmony import */ var chrome_browser_content_preferences_widgets_setting_group_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92360);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/Settings/Setting Group",
  component: "setting-group",
  parameters: {
    status: "in-development",
    handles: ["click", "input", "change"],
    fluent: `
group-example-label =
  .label = Group Label
  .description = Could have a description as well.
checkbox-example-input =
  .label = Checkbox example of setting-control
  .description = Could have a description like moz-checkbox.
checkbox-example-input2 =
  .label = Another checkbox
`
  }
});
function getSetting() {
  return {
    value: true,
    on() {},
    off() {},
    userChange() {},
    visible: () => true
  };
}
const Template = ({
  config
}) => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <setting-group .config=${config} .getSetting=${getSetting}></setting-group>
`;
const Group = Template.bind({});
Group.args = {
  config: {
    id: "group-example",
    l10nId: "group-example-label",
    items: [{
      id: "checkbox-example",
      l10nId: "checkbox-example-input"
    }, {
      id: "checkbox-example2",
      l10nId: "checkbox-example-input2",
      supportPage: "example-support",
      iconSrc: "chrome://global/skin/icons/highlights.svg"
    }]
  }
};

/***/ }),

/***/ 92360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingGroup: () => (/* binding */ SettingGroup)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11540);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48334);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



class SettingGroup extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.MozLitElement {
  static properties = {
    config: {
      type: Object
    },
    groupId: {
      type: String
    },
    // getSetting should be Preferences.getSetting from preferencesBindings.js
    getSetting: {
      type: Function
    }
  };
  createRenderRoot() {
    return this;
  }
  itemTemplate(item) {
    let setting = this.getSetting(item.id);
    if (!setting.visible) {
      return "";
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<setting-control
      .setting=${setting}
      .config=${item}
    ></setting-control>`;
  }
  xulCheckboxTemplate(item, setting) {
    let result;
    let checkbox = document.createXULElement("checkbox");
    checkbox.id = item.id;
    document.l10n.setAttributes(checkbox, item.l10nId);
    checkbox.addEventListener("command", e => setting.userChange(e.target.checked));
    checkbox.checked = setting.value;
    if (item.supportPage) {
      let container = document.createXULElement("hbox");
      container.setAttribute("align", "center");
      let supportLink = document.createElement("a", {
        is: "moz-support-link"
      });
      supportLink.supportPage = item.supportPage;
      checkbox.classList.add("tail-with-learn-more");
      container.append(checkbox, supportLink);
      result = container;
    } else {
      result = checkbox;
    }
    if (item.subcategory) {
      result.dataset.subcategory = item.subcategory;
    }
    return result;
  }
  xulItemTemplate(item) {
    let setting = this.getSetting(item.id);
    if (!setting.visible) {
      return "";
    }
    switch (item.control) {
      case "checkbox":
      default:
        return this.xulCheckboxTemplate(item, setting);
    }
  }
  render() {
    if (!this.config) {
      return "";
    }
    if (window.IS_STORYBOOK || Services.prefs.getBoolPref("settings.revamp.design", false)) {
      return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<moz-fieldset data-l10n-id=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(this.config.l10nId)}
        >${this.config.items.map(item => this.itemTemplate(item))}</moz-fieldset
      >`;
    }
    return this.config.items.map(item => this.xulItemTemplate(item));
  }
}
customElements.define("setting-group", SettingGroup);

/***/ })

}]);
//# sourceMappingURL=setting-group-setting-group-stories.eb08b541.iframe.bundle.js.map