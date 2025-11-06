"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[7550],{

/***/ 19100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingElement: () => (/* binding */ SettingElement),
/* harmony export */   spread: () => (/* binding */ spread)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11540);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48334);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * A Lit directive that applies all properties of an object to a DOM element.
 *
 * This directive interprets keys in the provided props object as follows:
 * - Keys starting with `?` set or remove boolean attributes using `toggleAttribute`.
 * - Keys starting with `.` set properties directly on the element.
 * - Keys starting with `@` are currently not supported and will throw an error.
 * - All other keys are applied as regular attributes using `setAttribute`.
 *
 * It avoids reapplying values that have not changed, but does not currently
 * remove properties that were previously set and are no longer present in the new input.
 *
 * This directive is useful to "spread" an object of attributes/properties declaratively onto an
 * element in a Lit template.
 */
class SpreadDirective extends chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.Directive {
  /**
   * A record of previously applied properties to avoid redundant updates.
   * @type {Record<string, unknown>}
   */
  #prevProps = {};

  /**
   * Render nothing by default as all changes are made in update using DOM APIs
   * on the element directly.
   * @returns {typeof nothing}
   */
  render() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.nothing;
  }

  /**
   * Apply props to the element using DOM APIs, updating only changed values.
   * @param {AttributePart} part - The part of the template this directive is bound to.
   * @param {[Record<string, unknown>]} propsArray - An array with a single object containing props to apply.
   * @returns {typeof noChange} - Indicates to Lit that no re-render is needed.
   */
  update(part, [props]) {
    // TODO: This doesn't clear any values that were set in previous calls if
    // they are no longer present.
    // It isn't entirely clear to me (mstriemer) what we should do if a prop is
    // removed, or if the prop has changed from say ?foo to foo. By not
    // implementing the auto-clearing hopefully the consumer will do something
    // that fits their use case.

    /** @type {HTMLElement} */
    let el = part.element;
    for (let [key, value] of Object.entries(props)) {
      // Skip if the value hasn't changed since the last update.
      if (value === this.#prevProps[key]) {
        continue;
      }

      // Update the element based on the property key matching Lit's templates:
      //   ?key -> el.toggleAttribute(key, value)
      //   .key -> el.key = value
      //   key -> el.setAttribute(key, value)
      if (key.startsWith("?")) {
        el.toggleAttribute(key.slice(1), Boolean(value));
      } else if (key.startsWith(".")) {
        el[key.slice(1)] = value;
      } else if (key.startsWith("@")) {
        throw new Error(`Event listeners are not yet supported with spread (${key})`);
      } else {
        el.setAttribute(key, String(value));
      }
    }

    // Save current props for comparison in the next update.
    this.#prevProps = props;
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.noChange;
  }
}
const spread = (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.directive)(SpreadDirective);
class SettingElement extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.MozLitElement {
  /**
   * The default properties that the setting element accepts.
   *
   * @param {PreferencesSettingsConfig} config
   * @returns {Record<string, any>}
   */
  getCommonPropertyMapping(config) {
    /**
     * @type {Record<string, any>}
     */
    const result = {
      id: config.id,
      "data-l10n-args": config.l10nArgs ? JSON.stringify(config.l10nArgs) : undefined,
      ".iconSrc": config.iconSrc,
      "data-subcategory": config.subcategory,
      ...config.controlAttrs
    };
    if (config.supportPage) {
      result[".supportPage"] = config.supportPage;
    }
    if (config.l10nId) {
      result["data-l10n-id"] = config.l10nId;
    }
    return result;
  }
}

/***/ }),

/***/ 49534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoxGroup: () => (/* binding */ BoxGroup),
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
  .label = Complicated grouping
  .description = This group is showing that there can be a complicated config, not necessarily that this level of nesting should be used.
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
cookies-and-site-data =
  .label = Cookies and Site Data
  .description = Manage and delete cookies, history, cache, and site settings.
clear-browsing-data =
    .label = Clear browsing data
storage-usage =
  .label = Your stored cookies, site data, and cache are currently using { $value } { $unit } of disk space.
manage-browsing-data =
  .label = Manage browsing data
manage-exceptions =
  .label = Manage exceptions
  .description = You can specify which websites are always or never allowed to use cookies and site data.
radio-example-input =
  .label = This is a radio group
  .description = With a lovely description.
radio-one =
  .label = One
  .description = This is the first option.
radio-two =
  .label = Two
radio-three =
  .label = Three
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
    getControlConfig: c => c,
    controllingExtensionInfo: {}
  };
}
const Template = ({
  config
}) => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <setting-group .config=${config} .getSetting=${getSetting}></setting-group>
`;
const BOX_GROUP_CONFIG = {
  id: "data-usage-group",
  control: "moz-box-group",
  items: [{
    id: "data-usage",
    l10nId: "storage-usage",
    control: "moz-box-item",
    controlAttrs: {
      "data-l10n-args": JSON.stringify({
        value: 1.8,
        unit: "GB"
      })
    }
  }, {
    id: "manage-browsing-data",
    l10nId: "manage-browsing-data",
    control: "moz-box-button"
  }, {
    id: "manage-exceptions",
    l10nId: "manage-exceptions",
    control: "moz-box-button"
  }]
};
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
      iconSrc: "chrome://global/skin/icons/highlights.svg",
      items: [{
        id: "checkbox-example",
        l10nId: "checkbox-example-input"
      }, {
        id: "radio-example",
        l10nId: "radio-example-input",
        control: "moz-radio-group",
        options: [{
          l10nId: "radio-one",
          value: "one"
        }, {
          l10nId: "radio-two",
          value: "two",
          items: [BOX_GROUP_CONFIG]
        }, {
          l10nId: "radio-three",
          value: "three"
        }]
      }]
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
const BoxGroup = Template.bind({});
BoxGroup.args = {
  config: {
    id: "cookies-data",
    l10nId: "cookies-and-site-data",
    supportPage: "sure",
    items: [{
      l10nId: "clear-browsing-data",
      control: "moz-box-button",
      controlAttrs: {
        iconsrc: "chrome://browser/skin/flame.svg"
      }
    }, BOX_GROUP_CONFIG]
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
/* harmony import */ var chrome_browser_content_preferences_widgets_setting_element_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19100);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/** @import { SettingControl } from "../setting-control/setting-control.mjs"; */
/** @import {PreferencesSettingsConfig, Preferences} from "chrome://global/content/preferences/Preferences.mjs" */

const CLICK_HANDLERS = new Set(["dialog-button", "moz-box-button", "moz-box-item", "moz-box-link", "moz-button", "moz-box-group"]);
class SettingGroup extends chrome_browser_content_preferences_widgets_setting_element_mjs__WEBPACK_IMPORTED_MODULE_1__.SettingElement {
  constructor() {
    super();

    /**
     * @type {Preferences['getSetting'] | undefined}
     */
    this.getSetting = undefined;

    /**
     * @type {PreferencesSettingsConfig | undefined}
     */
    this.config = undefined;
  }
  static properties = {
    config: {
      type: Object
    },
    groupId: {
      type: String
    },
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
  async handleVisibilityChange() {
    await this.updateComplete;
    let visibleControls = [...this.controlEls].filter(el => !el.hidden);
    if (!visibleControls.length) {
      this.hidden = true;
    } else {
      this.hidden = false;
    }
    // FIXME: We need to replace this.closest() once the SettingGroup
    // provides its own card wrapper/groupbox replacement element.
    let closestGroupbox = this.closest("groupbox");
    if (!closestGroupbox) {
      return;
    }
    if (this.hidden) {
      // Can't rely on .hidden for the toplevel groupbox because
      // of the pane hiding/showing code potentially changing the
      // hidden attribute.
      closestGroupbox.style.display = "none";
    } else {
      closestGroupbox.style.display = "";
    }
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
    if (!CLICK_HANDLERS.has(e.target.localName)) {
      return;
    }
    let inputEl = e.target;
    let control = inputEl.control;
    control?.onClick(e);
  }

  /**
   * @param {PreferencesSettingsConfig} item
   */
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
      .headingLevel=${this.config.headingLevel}
      @change=${this.onChange}
      @toggle=${this.onChange}
      @click=${this.onClick}
      @visibility-change=${this.handleVisibilityChange}
      ${(0,chrome_browser_content_preferences_widgets_setting_element_mjs__WEBPACK_IMPORTED_MODULE_1__.spread)(this.getCommonPropertyMapping(this.config))}
      >${this.config.items.map(item => this.itemTemplate(item))}</moz-fieldset
    >`;
  }
}
customElements.define("setting-group", SettingGroup);

/***/ })

}]);
//# sourceMappingURL=setting-group-setting-group-stories.8bfb3b0f.iframe.bundle.js.map