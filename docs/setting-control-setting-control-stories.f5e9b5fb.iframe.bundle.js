"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[8050],{

/***/ 38626:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "setting-control.0cf7be30bb8594bc36c4.css";

/***/ }),

/***/ 56225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Checkbox: () => (/* binding */ Checkbox),
/* harmony export */   ExtensionControlled: () => (/* binding */ ExtensionControlled),
/* harmony export */   Radio: () => (/* binding */ Radio),
/* harmony export */   Select: () => (/* binding */ Select),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var browser_components_preferences_widgets_setting_control_setting_control_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38626);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11540);
/* harmony import */ var chrome_browser_content_preferences_widgets_setting_control_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87480);

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
select-example-input =
  .label = Select example of setting-control
  .description = Could have a description like moz-select.
select-option-0 =
  .label = Option 0
select-option-1 =
  .label = Option 1
select-option-2 =
  .label = Option 2
radio-example-input =
  .label = Radio example of setting-control
  .description = Could have a description like moz-radio-group.
radio-option-0 =
  .label = Option 0
radio-option-1 =
  .label = Option 1
  .description = It's a full moz-radio
radio-option-2 =
  .label = Option 2
extension-controlled-input =
  .label = Setting controlled by extension
extension-controlled-message = <strong>My Extension</strong> requires Controlled Setting.
`
  }
});
const Template = ({
  config,
  setting
}) => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
  <link
    rel="stylesheet"
    href="${browser_components_preferences_widgets_setting_control_setting_control_css__WEBPACK_IMPORTED_MODULE_0__}"
  /><setting-control .config=${config} .setting=${setting}></setting-control>
`;
const DEFAULT_SETTING = {
  value: 1,
  on() {},
  off() {},
  userChange() {},
  getControlConfig: c => c,
  controllingExtensionInfo: {},
  visible: true
};
const Checkbox = Template.bind({});
Checkbox.args = {
  config: {
    id: "checkbox-example",
    l10nId: "checkbox-example-input"
  },
  setting: DEFAULT_SETTING
};
const Select = Template.bind({});
Select.args = {
  config: {
    id: "select-example",
    l10nId: "select-example-input",
    control: "moz-select",
    supportPage: "example-support",
    options: [{
      value: 0,
      l10nId: "select-option-0"
    }, {
      value: 1,
      l10nId: "select-option-1"
    }, {
      value: 2,
      l10nId: "select-option-2"
    }]
  },
  setting: DEFAULT_SETTING
};
const Radio = Template.bind({});
Radio.args = {
  config: {
    id: "radio-example",
    l10nId: "radio-example-input",
    control: "moz-radio-group",
    supportPage: "example-support",
    options: [{
      value: 0,
      l10nId: "radio-option-0"
    }, {
      value: 1,
      l10nId: "radio-option-1",
      supportPage: "support-page"
    }, {
      value: 2,
      l10nId: "radio-option-2"
    }]
  },
  setting: DEFAULT_SETTING
};
const ExtensionControlled = Template.bind({});
ExtensionControlled.args = {
  config: {
    id: "extension-controlled-example",
    l10nId: "extension-controlled-input",
    pref: "privacy.userContext.enabled",
    controllingExtensionInfo: {
      storeId: "privacy.containers",
      /* Example of a Fluent string used for the message bar:
       * extension-controlled-message = <strong>{ $name }</strong> requires Container Tabs.
       * */
      l10nId: "extension-controlled-message"
    }
  },
  setting: {
    ...DEFAULT_SETTING,
    controllingExtensionInfo: {
      id: "extension-controlled-example",
      l10nId: "extension-controlled-message",
      name: "My Extension"
    }
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




/** @import MozCheckbox from "../../../../../toolkit/content/widgets/moz-checkbox/moz-checkbox.mjs"*/
/** @import { Setting } from "chrome://global/content/preferences/Setting.mjs"; */

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

/**
 * Mapping of parent control tag names to the literal tag name for their
 * expected children. eg. "moz-radio-group"->literal`moz-radio`.
 * @type Map<string, literal>
 */
const KNOWN_OPTIONS = new Map([["moz-radio-group", (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.literal)`moz-radio`], ["moz-select", (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.literal)`moz-option`], ["moz-visual-picker", (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.literal)`moz-visual-picker-item`]]);

/**
 * Mapping of parent control tag names to the expected slot for their children.
 * If there's no entry here for a control then it's expected that its children
 * should go in the default slot.
 * @type Map<string, string>
 */
const ITEM_SLOT_BY_PARENT = new Map([["moz-checkbox", "nested"], ["moz-input-text", "nested"], ["moz-input-search", "nested"], ["moz-input-folder", "nested"], ["moz-input-password", "nested"], ["moz-radio-group", "nested"],
// NOTE: moz-select does not support the nested slot.
["moz-toggle", "nested"]]);
class SettingControl extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.MozLitElement {
  /**
   * @type {Setting | undefined}
   */
  #lastSetting;
  static properties = {
    setting: {
      type: Object
    },
    config: {
      type: Object
    },
    value: {},
    parentDisabled: {
      type: Boolean
    }
  };
  constructor() {
    super();
    this.controlRef = (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.createRef)();

    /**
     * @type {Preferences['getSetting'] | undefined}
     */
    this.getSetting = undefined;

    /**
     * @type {Setting | undefined}
     */
    this.setting = undefined;

    /**
     * @type {PreferencesSettingsConfig | undefined}
     */
    this.config = undefined;

    /**
     * @type {boolean | undefined}
     */
    this.parentDisabled = undefined;
  }
  createRenderRoot() {
    return this;
  }
  focus() {
    this.controlRef.value.focus();
  }
  get controlEl() {
    return this.controlRef.value;
  }
  async getUpdateComplete() {
    let result = await super.getUpdateComplete();
    await this.controlEl?.updateComplete;
    return result;
  }
  onSettingChange = () => {
    this.setValue();
    this.requestUpdate();
  };

  /**
   * @type {MozLitElement['willUpdate']}
   */
  willUpdate(changedProperties) {
    if (changedProperties.has("setting")) {
      if (this.#lastSetting) {
        this.#lastSetting.off("change", this.onSettingChange);
      }
      this.#lastSetting = this.setting;
      this.setValue();
      this.setting.on("change", this.onSettingChange);
    }
    let prevHidden = this.hidden;
    this.hidden = !this.setting.visible;
    if (prevHidden != this.hidden) {
      this.dispatchEvent(new Event("visibility-change", {
        bubbles: true
      }));
    }
  }

  /**
   * @type {MozLitElement['updated']}
   */
  updated() {
    const control = this.controlRef?.value;
    if (!control) {
      return;
    }

    // Set the value based on the control's API.
    if ("checked" in control) {
      control.checked = this.value;
    } else if ("pressed" in control) {
      control.pressed = this.value;
    } else if ("value" in control) {
      control.value = this.value;
    }
    control.requestUpdate();
  }

  /**
   * The default properties that controls and options accept.
   * Note: for the disabled property, a setting can either be locked,
   * or controlled by an extension but not both.
   *
   * @param {PreferencesSettingsConfig} config
   * @returns {Record<string, any>}
   */
  getCommonPropertyMapping(config) {
    return {
      id: config.id,
      "data-l10n-id": config.l10nId,
      "data-l10n-args": config.l10nArgs ? JSON.stringify(config.l10nArgs) : undefined,
      ".iconSrc": config.iconSrc,
      ".supportPage": config.supportPage,
      ".setting": this.setting,
      ".control": this,
      "data-subcategory": config.subcategory,
      ...config.controlAttrs
    };
  }

  /**
   * The default properties for an option.
   */
  getOptionPropertyMapping(config) {
    const props = this.getCommonPropertyMapping(config);
    props[".value"] = config.value;
    return props;
  }

  /**
   * The default properties for this control.
   */
  getControlPropertyMapping(config) {
    const props = this.getCommonPropertyMapping(config);
    props[".parentDisabled"] = this.parentDisabled;
    props["?disabled"] = this.setting.disabled || this.setting.locked || this.isControlledByExtension();
    return props;
  }
  getValue() {
    return this.setting.value;
  }
  setValue = () => {
    this.value = this.setting.value;
  };

  /**
   * @param {MozCheckbox | HTMLInputElement} el
   * @returns {boolean | string | undefined}
   */
  controlValue(el) {
    if (el.constructor.activatedProperty && el.localName != "moz-radio") {
      return el[el.constructor.activatedProperty];
    } else if (el.localName == "moz-input-folder") {
      return el.folder;
    }
    return el.value;
  }

  // Called by our parent when our input changed.
  onChange(el) {
    this.setting.userChange(this.controlValue(el));
  }
  onClick(event) {
    this.setting.userClick(event);
  }
  async disableExtension() {
    await this.setting.disableControllingExtension();
  }
  isControlledByExtension() {
    return this.setting.controllingExtensionInfo?.id && this.setting.controllingExtensionInfo?.name;
  }
  get extensionName() {
    return this.setting.controllingExtensionInfo.name;
  }
  get extensionMessageId() {
    return this.setting.controllingExtensionInfo.l10nId;
  }
  render() {
    // Allow the Setting to override the static config if necessary.
    this.config = this.setting.getControlConfig(this.config);
    let {
      config
    } = this;
    let control = config.control || "moz-checkbox";
    let getItemArgs = items => items?.map(i => ({
      config: i,
      setting: this.getSetting(i.id)
    })) || [];

    // Prepare nested item config and settings.
    let itemArgs = getItemArgs(config.items);
    let itemTemplate = opts => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<setting-control
        .config=${opts.config}
        .setting=${opts.setting}
        .getSetting=${this.getSetting}
        slot=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(ITEM_SLOT_BY_PARENT.get(control))}
      ></setting-control>`;
    let nestedSettings = itemArgs.map(itemTemplate);

    // Prepare any children that this element may need.
    let controlChildren = chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.nothing;
    if (config.options) {
      controlChildren = config.options.map(opt => {
        let optionTag = opt.control ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.unsafeStatic)(opt.control) : KNOWN_OPTIONS.get(control);
        return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.staticHtml)`<${optionTag}
          ${spread(this.getOptionPropertyMapping(opt))}
        >${opt.items ? getItemArgs(opt.items).map(itemTemplate) : ""}</${optionTag}>`;
      });
    }

    // Get the properties for this element: id, fluent, disabled, etc.
    // These will be applied to the control using the spread directive.
    let controlProps = this.getControlPropertyMapping(config);
    let tag = (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.unsafeStatic)(control);
    let messageBar;
    if (this.isControlledByExtension()) {
      let args = {
        name: this.extensionName
      };
      messageBar = (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<moz-message-bar
        class="extension-controlled-message-bar"
        .messageL10nId=${this.extensionMessageId}
        .messageL10nArgs=${args}
      >
        <moz-button
          slot="actions"
          @click=${this.disableExtension}
          data-l10n-id="disable-extension"
        ></moz-button>
      </moz-message-bar>`;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.staticHtml)`
    ${messageBar}
    <${tag}
      ${spread(controlProps)}
      ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ref)(this.controlRef)}
    >${controlChildren}${nestedSettings}</${tag}>`;
  }
}
customElements.define("setting-control", SettingControl);

/***/ })

}]);
//# sourceMappingURL=setting-control-setting-control-stories.f5e9b5fb.iframe.bundle.js.map