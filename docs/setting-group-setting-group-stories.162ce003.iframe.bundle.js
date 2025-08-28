"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[7550],{

/***/ 49534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrowserLayout: () => (/* binding */ BrowserLayout),
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
browser-layout-label =
  .label = Browser layout
browser-layout-radio-horizontal =
  .label = Horizontal tabs
  .description = Displayed at the top of the browser
browser-layout-radio-vertical =
  .label = Vertical tabs
  .description = Displayed on the side, in the sidebar
browser-layout-sidebar =
  .label = Show sidebar
  .description = Quickly access bookmarks, tabs from your phone, AI chatbots, and more without leaving your main view
`
  }
});
function getSetting() {
  return {
    value: true,
    on() {},
    off() {},
    userChange() {},
    visible: () => true,
    getControlConfig: c => c
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
const BrowserLayout = Template.bind({});
BrowserLayout.args = {
  config: {
    id: "browser-layout-example",
    l10nId: "browser-layout-label",
    items: [{
      id: "tabs-layout",
      control: "moz-radio-group",
      options: [{
        id: "horizontal-tabs",
        l10nId: "browser-layout-radio-horizontal",
        value: true
      }, {
        id: "vertical-tabs",
        l10nId: "browser-layout-radio-vertical",
        value: false
      }]
    }, {
      id: "show-sidebar",
      l10nId: "browser-layout-sidebar"
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



const CLICK_HANDLERS = ["moz-box-link"];
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
  static queries = {
    controlEls: {
      all: "setting-control"
    }
  };
  createRenderRoot() {
    return this;
  }
  async getUpdateComplete() {
    let result = await super.getUpdateComplete();
    await Promise.all([...this.controlEls].map(el => el.updateComplete));
    return result;
  }

  /**
   * Notify child controls when their input has fired an event. When controls
   * are nested the parent receives events for the nested controls, so this is
   * actually easier to manage here; it also registers fewer listeners.
   */
  onChange(e) {
    let inputEl = e.target;
    let control = inputEl.control;
    control?.onChange(inputEl);
  }
  onClick(e) {
    if (!CLICK_HANDLERS.includes(e.target.localName)) {
      return;
    }
    let inputEl = e.target;
    let control = inputEl.control;
    control?.onClick(e);
  }
  itemTemplate(item) {
    let setting = this.getSetting(item.id);
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<setting-control
      .setting=${setting}
      .config=${item}
      .getSetting=${this.getSetting}
    ></setting-control>`;
  }
  render() {
    if (!this.config) {
      return "";
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<moz-fieldset
      data-l10n-id=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(this.config.l10nId)}
      @change=${this.onChange}
      @click=${this.onClick}
      >${this.config.items.map(item => this.itemTemplate(item))}</moz-fieldset
    >`;
  }
}
customElements.define("setting-group", SettingGroup);

/***/ })

}]);
//# sourceMappingURL=setting-group-setting-group-stories.162ce003.iframe.bundle.js.map