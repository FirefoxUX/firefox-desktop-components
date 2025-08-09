"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[8050],{

/***/ 56225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Checkbox: () => (/* binding */ Checkbox),
/* harmony export */   Select: () => (/* binding */ Select),
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
select-example-input =
  .label = Select example of setting-control
  .description = Could have a description like moz-select.
select-option-0 =
  .label = Option 0
select-option-1 =
  .label = Option 1
select-option-2 =
  .label = Option 2
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
    userChange() {},
    getControlConfig: c => c
  }
};
const Select = Template.bind({});
Select.args = {
  config: {
    id: "select-example",
    l10nId: "select-example-input",
    control: "moz-select",
    supportPage: "example-support",
    options: [{
      value: "0",
      l10nId: "select-option-0"
    }, {
      value: "1",
      l10nId: "select-option-1"
    }, {
      value: "2",
      l10nId: "select-option-2"
    }]
  },
  setting: {
    value: "1",
    on() {},
    off() {},
    userChange() {},
    getControlConfig: c => c
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
 * @type Map<string, HTMLElement>
 */
const controlInstances = new Map();
function getControlInstance(control = "moz-checkbox") {
  if (!controlInstances.has(control)) {
    controlInstances.set(control, document.createElement(control));
  }
  return controlInstances.get(control);
}
class SettingControl extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.MozLitElement {
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
  }
  createRenderRoot() {
    return this;
  }
  get controlEl() {
    return this.controlRef.value;
  }
  async getUpdateComplete() {
    let result = await super.getUpdateComplete();
    await this.controlEl.updateComplete;
    return result;
  }
  onSettingChange = () => {
    this.setValue();
    this.requestUpdate();
  };
  willUpdate(changedProperties) {
    if (changedProperties.has("setting")) {
      if (this.#lastSetting) {
        this.#lastSetting.off("change", this.onSettingChange);
      }
      this.#lastSetting = this.setting;
      this.setValue();
      this.setting.on("change", this.onSettingChange);
    }
    this.hidden = !this.setting.visible;
  }

  /**
   * The default properties that a control accepts.
   */
  getPropertyMapping(config) {
    const props = {
      id: config.id,
      "data-l10n-id": config.l10nId,
      ".iconSrc": config.iconSrc,
      ".supportPage": config.supportPage,
      ".parentDisabled": this.parentDisabled,
      ".control": this,
      "data-subcategory": config.subcategory,
      "?disabled": this.setting.locked,
      ...config.controlAttrs
    };
    if (config.l10nArgs) {
      props["data-l10n-args"] = JSON.stringify(config.l10nArgs);
    }

    // Set the value based on the control's API.
    let instance = getControlInstance(config.control);
    if ("checked" in instance) {
      props[".checked"] = this.value;
    } else if ("pressed" in instance) {
      props[".pressed"] = this.value;
    } else if ("value" in instance) {
      props[".value"] = this.value;
    }
    return props;
  }
  getValue() {
    return this.setting.value;
  }
  setValue = () => {
    this.value = this.setting.value;
  };
  controlValue(el) {
    if (el.constructor.activatedProperty) {
      return el[el.constructor.activatedProperty];
    }
    return el.value;
  }

  // Called by our parent when our input changed.
  onChange(el) {
    this.setting.userChange(this.controlValue(el));
  }
  render() {
    // Allow the Setting to override the static config if necessary.
    this.config = this.setting.getControlConfig(this.config);
    let {
      config
    } = this;

    // Prepare nested item config and settings.
    let itemArgs = config.items?.map(i => ({
      config: i,
      setting: this.getSetting(i.id)
    })) || [];
    let nestedSettings = itemArgs.map(opts => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<setting-control
          .config=${opts.config}
          .setting=${opts.setting}
          .getSetting=${this.getSetting}
          slot="nested"
        ></setting-control>`);

    // Get the properties for this element: id, fluent, disabled, etc.
    // These will be applied to the control using the spread directive.
    let controlProps = this.getPropertyMapping(config);

    // Prepare any children that this element may need.
    let controlChildren = chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.nothing;
    if (config.control == "moz-select") {
      controlChildren = config.options.map(opt => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<moz-option
            .value=${opt.value}
            data-l10n-id=${opt.l10nId}
            data-l10n-args=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(opt.l10nArgs && JSON.stringify(opt.l10nArgs))}
          ></moz-option>`);
    }
    let tag = (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.unsafeStatic)(config.control || "moz-checkbox");
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.staticHtml)`<${tag}
      ${spread(controlProps)}
      ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ref)(this.controlRef)}
    >${controlChildren}${nestedSettings}</${tag}>`;
  }
}
customElements.define("setting-control", SettingControl);

/***/ })

}]);
//# sourceMappingURL=setting-control-setting-control-stories.fff54983.iframe.bundle.js.map