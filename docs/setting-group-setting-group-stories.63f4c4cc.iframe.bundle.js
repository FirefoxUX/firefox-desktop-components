"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[3654,5944,7550],{

/***/ 5540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingControl: () => (/* binding */ SettingControl),
/* harmony export */   SettingNotDefinedError: () => (/* binding */ SettingNotDefinedError)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var chrome_browser_content_preferences_widgets_setting_element_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76664);
/* harmony import */ var chrome_global_content_elements_moz_input_folder_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13654);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */





/** @import { LitElement, Ref, TemplateResult } from "chrome://global/content/vendor/lit.all.mjs" */
/** @import { SettingElementConfig } from "chrome://browser/content/preferences/widgets/setting-element.mjs" */
/** @import { Setting } from "chrome://global/content/preferences/Setting.mjs" */

/**
 * @typedef {object} SettingNestedConfig
 * @property {SettingControlConfig[]} [items] Additional nested SettingControls to render.
 * @property {SettingOptionConfig[]} [options]
 * Additional nested plain elements to render (may have SettingControls nested within them, though).
 */

/**
 * @typedef {object} SettingOptionConfigExtensions
 * @property {string} [control]
 * The element tag to render, default assumed based on parent control.
 * @property {any} [value] A value to set on the option.
 * @property {boolean} [disabled] If the option should be disabled.
 * @property {boolean} [hidden] If the option should be hidden.
 * @property {any} [key] A key to identify this option.
 */

/**
 * @typedef {object} SettingControlConfigExtensions
 * @property {string} id
 * The ID for the Setting, also set in the DOM unless overridden with controlAttrs.id
 * @property {string} [control] The element to render, default to "moz-checkbox".
 * @property {string} [controllingExtensionInfo]
 * ExtensionSettingStore id for checking if a setting is controlled by an extension.
 */

/**
 * @typedef {SettingOptionConfigExtensions & SettingElementConfig & SettingNestedConfig} SettingOptionConfig
 * @typedef {SettingControlConfigExtensions & SettingElementConfig & SettingNestedConfig} SettingControlConfig
 * @typedef {{ control: SettingControl } & HTMLElement} SettingControlChild
 */

/**
 * @template T=Event
 * @typedef {T & { target: SettingControlChild }} SettingControlEvent
 * SettingControlEvent simplifies the types in this file, but causes issues when
 * doing more involved work when used in Setting.mjs. When casting the
 * `event.target` to a more specific type like MozButton (or even
 * HTMLButtonElement) it gets flagged as being too different from SettingControlChild.
 */

/**
 * Mapping of parent control tag names to the literal tag name for their
 * expected children. eg. "moz-radio-group"->literal`moz-radio`.
 */
const KNOWN_OPTIONS = new Map([["moz-radio-group", (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.literal)`moz-radio`], ["moz-select", (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.literal)`moz-option`], ["moz-visual-picker", (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.literal)`moz-visual-picker-item`]]);

/**
 * Mapping of parent control tag names to the expected slot for their children.
 * If there's no entry here for a control then it's expected that its children
 * should go in the default slot.
 *
 * @type Map<string, string>
 */
const ITEM_SLOT_BY_PARENT = new Map([["moz-checkbox", "nested"], ["moz-input-email", "nested"], ["moz-input-folder", "nested"], ["moz-input-number", "nested"], ["moz-input-password", "nested"], ["moz-input-search", "nested"], ["moz-input-tel", "nested"], ["moz-input-text", "nested"], ["moz-input-url", "nested"], ["moz-radio", "nested"], ["moz-radio-group", "nested"],
// NOTE: moz-select does not support the nested slot.
["moz-toggle", "nested"]]);
class SettingNotDefinedError extends Error {
  /** @param {string} settingId */
  constructor(settingId) {
    super(`No Setting with id "${settingId}". Did you register it with Preferences.addSetting()?`);
    this.name = "SettingNotDefinedError";
    this.settingId = settingId;
  }
}
class SettingControl extends chrome_browser_content_preferences_widgets_setting_element_mjs__WEBPACK_IMPORTED_MODULE_1__.SettingElement {
  static SettingNotDefinedError = SettingNotDefinedError;
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
    },
    tabIndex: {
      type: Number,
      reflect: true
    },
    showEnableExtensionMessage: {
      type: Boolean,
      state: true
    },
    isDisablingExtension: {
      type: Boolean,
      state: true
    }
  };

  /**
   * @type {Setting | undefined}
   */
  #lastSetting;
  constructor() {
    super();
    /** @type {Ref<LitElement>} */
    this.controlRef = (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.createRef)();

    /** @type {Ref<LitElement>} */
    this.controlledMessageBarRef = (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.createRef)();

    /** @type {Ref<LitElement>} */
    this.enableMessageBarRef = (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.createRef)();

    /**
     * @type {Preferences['getSetting'] | undefined}
     */
    this.getSetting = undefined;

    /**
     * @type {Setting | undefined}
     */
    this.setting = undefined;

    /**
     * @type {SettingControlConfig | undefined}
     */
    this.config = undefined;

    /**
     * @type {boolean | undefined}
     */
    this.parentDisabled = undefined;

    /**
     * @type {boolean}
     */
    this.showEnableExtensionMessage = false;

    /**
     * @type {boolean}
     */
    this.isDisablingExtension = false;
  }
  createRenderRoot() {
    return this;
  }
  focus() {
    this.controlEl.focus();
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
   * @type {SettingElement['willUpdate']}
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
    if (!this.setting) {
      throw new SettingNotDefinedError(this.config.id);
    }
    this.id = `setting-control-${this.config.id}`;
    let prevHidden = this.hidden;
    this.hidden = !this.setting.visible;
    if (prevHidden != this.hidden) {
      this.dispatchEvent(new Event("visibility-change", {
        bubbles: true
      }));
    }
  }
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
    control.requestUpdate?.();
  }

  /**
   * The default properties that controls and options accept.
   * Note: for the disabled property, a setting can either be locked,
   * or controlled by an extension but not both.
   *
   * @override
   * @param {SettingElementConfig} config
   */
  getCommonPropertyMapping(config) {
    return {
      ...super.getCommonPropertyMapping(config),
      ".setting": this.setting,
      ".control": this
    };
  }

  /**
   * The default properties for an option.
   *
   * @param {SettingOptionConfig} config
   */
  getOptionPropertyMapping(config) {
    return {
      ...this.getCommonPropertyMapping(config),
      ".value": config.value,
      ".disabled": config.disabled,
      ".hidden": config.hidden
    };
  }

  /**
   * The default properties for this control.
   *
   * @param {SettingControlConfig} config
   */
  getControlPropertyMapping(config) {
    return {
      ...this.getCommonPropertyMapping(config),
      ".parentDisabled": this.parentDisabled,
      "?disabled": this.setting.disabled || this.setting.locked || this.isDisabledByExtension(),
      // Hide moz-message-bar directly to maintain the role=alert functionality.
      // This setting-control will be visually hidden in CSS.
      ".hidden": config.control == "moz-message-bar" && this.hidden
    };
  }
  getValue() {
    return this.setting.value;
  }
  setValue = () => {
    this.value = this.setting.value;
  };

  /**
   * @param {HTMLElement} el
   * @returns {any}
   */
  controlValue(el) {
    let Cls = el.constructor;
    if ("activatedProperty" in Cls && Cls.activatedProperty && el.localName != "moz-radio") {
      return el[(/** @type {keyof typeof el} */Cls.activatedProperty)];
    }
    if (el instanceof chrome_global_content_elements_moz_input_folder_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]) {
      return el.folder;
    }
    return "value" in el ? el.value : null;
  }

  /**
   * Called by our parent when our input changed.
   *
   * @param {SettingControlChild} el
   */
  onChange(el) {
    this.setting.userChange(this.controlValue(el));
  }

  /**
   * Called by our parent when our input is clicked.
   *
   * @param {MouseEvent} event
   */
  onClick(event) {
    this.setting.userClick(event);
  }

  /**
   * Called by our parent when items are reordered. The reorder event is
   * a CustomEvent that bubbles from reorderable moz-box-group elements when
   * items are reordered via drag-and-drop or keyboard shortcuts.
   *
   * The detail object of the reorder event contains the following properties:
   *
   * - `draggedElement`: The element that was reordered.
   * - `targetElement`: The element that the dragged element was reordered relative to.
   * - `position`: The position of the drop relative to the target element. -1
   *   means before, 0 means after.
   * - `draggedIndex`: The original index of the element being reordered.
   * - `targetIndex`: The new index of the draggedElement after reordering.
   *
   * @param {CustomEvent} event
   */
  onReorder(event) {
    this.setting.userReorder(event);
  }
  async disableExtension() {
    this.isDisablingExtension = true;
    this.showEnableExtensionMessage = true;
    await this.setting.disableControllingExtension();
    this.isDisablingExtension = false;
  }
  isControlledByExtension() {
    return this.setting.controllingExtensionInfo?.id && this.setting.controllingExtensionInfo?.name;
  }
  isDisabledByExtension() {
    return this.isControlledByExtension() && !this.setting.controllingExtensionInfo.allowControl;
  }
  handleEnableExtensionDismiss() {
    this.showEnableExtensionMessage = false;
  }

  /**
   * @param {MouseEvent} event
   */
  navigateToAddons(event) {
    let link = /** @type {HTMLAnchorElement} */event.target;
    if (link.matches("a[data-l10n-name='addons-link']")) {
      event.preventDefault();
      // @ts-ignore
      let mainWindow = window.browsingContext.topChromeWindow;
      mainWindow.BrowserAddonUI.openAddonsMgr("addons://list/extension");
    }
  }
  get extensionName() {
    return this.setting.controllingExtensionInfo.name;
  }
  get extensionMessageId() {
    return this.setting.controllingExtensionInfo.l10nId;
  }

  /**
   * Prepare nested item config and settings.
   *
   * @param {SettingControlConfig | SettingOptionConfig} config
   * @returns {TemplateResult[]}
   */
  itemsTemplate(config) {
    if (!config.items) {
      return [];
    }
    const itemArgs = config.items.map(i => ({
      config: i,
      setting: this.getSetting(i.id)
    }));
    let control = config.control || "moz-checkbox";
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.repeat)(itemArgs, item => item.config.key || item.config.id, item => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<setting-control
          .config=${item.config}
          .setting=${item.setting}
          .getSetting=${this.getSetting}
          slot=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(item.config.slot || ITEM_SLOT_BY_PARENT.get(control))}
        ></setting-control>`);
  }

  /**
   * Prepares any children (and any of its children's children) that this element may need.
   *
   * @param {SettingOptionConfig} config
   * @returns {TemplateResult[]}
   */
  optionsTemplate(config) {
    if (!config.options) {
      return [];
    }
    let control = config.control || "moz-checkbox";
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.repeat)(config.options, opt => opt.key, opt => {
      let optionTag = opt.control ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.unsafeStatic)(opt.control) : KNOWN_OPTIONS.get(control);
      let spreadValues = (0,chrome_browser_content_preferences_widgets_setting_element_mjs__WEBPACK_IMPORTED_MODULE_1__.spread)(this.getOptionPropertyMapping(opt));
      let children = "items" in opt ? this.itemsTemplate(opt) : this.optionsTemplate(opt);
      if (opt.control == "a" && opt.controlAttrs?.is == "moz-support-link") {
        // The `is` attribute must be set when the element is first added to the
        // DOM. We need to mark that up manually, since `spread()` uses
        // `el.setAttribute()` to set attributes it receives.
        return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<a is="moz-support-link" ${spreadValues}>${children}</a>`;
      }
      return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.staticHtml)`<${optionTag} ${spreadValues}>${children}</${optionTag}>`;
    });
  }
  get extensionSupportPage() {
    return this.setting.controllingExtensionInfo.supportPage;
  }
  render() {
    // Allow the Setting to override the static config if necessary.
    this.config = this.setting.getControlConfig(this.config);
    let {
      config
    } = this;
    let control = config.control || "moz-checkbox";
    let nestedSettings = "items" in config ? this.itemsTemplate(config) : this.optionsTemplate(config);

    // Get the properties for this element: id, fluent, disabled, etc.
    // These will be applied to the control using the spread directive.
    let controlProps = this.getControlPropertyMapping(config);
    let tag = (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.unsafeStatic)(control);
    let messageBar;

    // NOTE: the showEnableMessage message bar should ONLY appear when
    // there are no extensions controlling the setting.
    if (this.isControlledByExtension()) {
      let args = {
        name: this.extensionName
      };
      let supportPage = this.extensionSupportPage;
      messageBar = (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<moz-message-bar
        class="extension-controlled-message-bar"
        ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ref)(this.controlledMessageBarRef)}
        .messageL10nId=${this.extensionMessageId}
        .messageL10nArgs=${args}
      >
        ${supportPage ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<a
              is="moz-support-link"
              slot="support-link"
              support-page=${supportPage}
            ></a>` : ""}
        <moz-button
          slot="actions"
          @click=${this.disableExtension}
          ?disabled=${this.isDisablingExtension}
          data-l10n-id="disable-extension"
        ></moz-button>
      </moz-message-bar>`;
    } else if (this.showEnableExtensionMessage) {
      messageBar = (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<moz-message-bar
        class="reenable-extensions-message-bar"
        dismissable=""
        ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ref)(this.enableMessageBarRef)}
        @message-bar:user-dismissed=${this.handleEnableExtensionDismiss}
      >
        <span
          @click=${this.navigateToAddons}
          slot="message"
          data-l10n-id="extension-controlled-enable-2"
        >
          <a data-l10n-name="addons-link" href="#"></a>
        </span>
      </moz-message-bar>`;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.staticHtml)`
    ${messageBar}
    <${tag}
      ${(0,chrome_browser_content_preferences_widgets_setting_element_mjs__WEBPACK_IMPORTED_MODULE_1__.spread)(controlProps)}
      ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ref)(this.controlRef)}
      tabindex=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(this.tabIndex)}
    >${nestedSettings}</${tag}>`;
  }
}
customElements.define("setting-control", SettingControl);

/***/ }),

/***/ 9538:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-input-text.924e6291805dbccf217d.css";

/***/ }),

/***/ 13654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozInputFolder)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_input_folder_moz_input_folder_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42572);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_elements_moz_input_text_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65944);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



window.MozXULElement?.insertFTLIfNeeded("toolkit/global/mozInputFolder.ftl");

/**
 * An input folder custom element.
 *
 * @tagname moz-input-folder
 *
 * @property {string} label - The text of the label element
 * @property {string} name - The name of the input control
 * @property {string} value - The path to the selected folder
 * @property {boolean} disabled - The disabled state of the component
 * @property {string} iconSrc - The src for an optional icon in the label
 * @property {string} description - The text for the description element that helps describe the input control
 * @property {string} supportPage - Name of the SUMO support page to link to.
 * @property {string} placeholder - Text to display when the input has no value.
 * @property {string} displayValue - The value of the input control if it's different from the component value.
 * @property {string} dialogTitle - Text to display as a file picker dialog title.
 * @property {object} folder - The file object that represents the selected folder.
 */

class MozInputFolder extends chrome_global_content_elements_moz_input_text_mjs__WEBPACK_IMPORTED_MODULE_2__["default"] {
  #folder;
  static properties = {
    displayValue: {
      type: String
    },
    dialogTitle: {
      type: String,
      fluent: true
    },
    _inputIconSrc: {
      type: String,
      state: true
    }
  };
  static queries = {
    chooseFolderButtonEl: "#choose-folder-button"
  };
  constructor() {
    super();
    this.readonly = true;
    this.displayValue = "";
    this.dialogTitle = "";
    this._inputIconSrc = "";
    this.#folder = null;
  }
  willUpdate(changedProperties) {
    super.willUpdate(changedProperties);
    if (changedProperties.has("readonly")) {
      this.readonly = true;
    }
    if (changedProperties.has("value")) {
      if (this.value == "") {
        this.#folder = null;
        this._inputIconSrc = "";
      } else if (!this.#folder || this.value != this.#folder.path) {
        let currentValue = this.value;
        this.getFolderFromPath(this.value).then(folder => {
          if (this.value === currentValue) {
            this.#folder = folder;
            this._inputIconSrc = this.getInputIconSrc(this.#folder);
          }
        });
      } else {
        this._inputIconSrc = this.getInputIconSrc(this.#folder);
      }
    }
  }
  get folder() {
    return this.#folder;
  }
  hasServices() {
    // Safely check for Services without throwing a ReferenceError.
    return typeof Services !== "undefined";
  }
  async getFolderFromPath(path) {
    let folder = null;
    try {
      folder = await IOUtils.getDirectory(path);
    } catch (e) {
      //Not a valid path
      console.error("The error occurred while attempting to get directory from the moz-input-folder value");
    }
    return folder;
  }
  getInputIconSrc(folder) {
    if (!folder || !this.hasServices()) {
      let defaultIconSrc = "chrome://global/skin/icons/folder.svg";
      return defaultIconSrc;
    }
    let fph = Services.io.getProtocolHandler("file").QueryInterface(Ci.nsIFileProtocolHandler);
    let iconUrlSpec = fph.getURLSpecFromDir(folder);
    let inputIconSrc = "moz-icon://" + iconUrlSpec + "?size=16";
    return inputIconSrc;
  }
  async openFolderPicker() {
    let folderPicker = Cc["@mozilla.org/filepicker;1"].createInstance(Ci.nsIFilePicker);
    let mode = Ci.nsIFilePicker.modeGetFolder;
    folderPicker.init(window.browsingContext, this.dialogTitle, mode);
    folderPicker.appendFilters(Ci.nsIFilePicker.filterAll);
    if (this.#folder && (await IOUtils.exists(this.#folder.path))) {
      folderPicker.displayDirectory = this.#folder;
    }
    let result = await new Promise(resolve => folderPicker.open(resolve));
    if (result != Ci.nsIFilePicker.returnOK || this.value == folderPicker.file.path) {
      if (Cu.isInAutomation) {
        // Dispatch a test-only event so we can tell that the dialog is closing.
        this.dispatchEvent(new CustomEvent("moz-input-folder-picker-close"));
      }
      return;
    }
    this.#folder = folderPicker.file;
    this.value = this.#folder.path;
    this.dispatchEvent(new Event("input", {
      bubbles: true
    }));
    this.dispatchEvent(new Event("change", {
      bubbles: true
    }));
  }
  inputStylesTemplate() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<link
      rel="stylesheet"
      href="${toolkit_content_widgets_moz_input_folder_moz_input_folder_css__WEBPACK_IMPORTED_MODULE_0__}"
    />`;
  }
  inputTemplate() {
    let inputValue = this.displayValue || this.value;
    let classes, styles;
    if (this._inputIconSrc) {
      classes = (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.classMap)({
        "with-icon": true
      });
      styles = (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.styleMap)({
        "--input-background-icon": `url(${this._inputIconSrc})`
      });
    }
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <div class="container">
        ${super.inputTemplate({
      classes,
      styles,
      inputValue
    })}
        <moz-button
          id="choose-folder-button"
          data-l10n-id="choose-folder-button"
          data-l10n-attrs="accesskey"
          ?disabled=${this.disabled || this.parentDisabled}
          @click=${this.openFolderPicker}
        ></moz-button>
      </div>
    `;
  }
}
customElements.define("moz-input-folder", MozInputFolder);

/***/ }),

/***/ 42572:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-input-folder.043761f7caa2043cd685.css";

/***/ }),

/***/ 42717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoxGroup: () => (/* binding */ BoxGroup),
/* harmony export */   BrowserLayout: () => (/* binding */ BrowserLayout),
/* harmony export */   Group: () => (/* binding */ Group),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var chrome_browser_content_preferences_widgets_setting_group_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97959);
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

/***/ 65944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozInputText)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_input_text_moz_input_text_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9538);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * A text input custom element.
 *
 * @tagname moz-input-text
 * @property {string} label - The text of the label element
 * @property {string} name - The name of the input control
 * @property {string} value - The value of the input control
 * @property {boolean} disabled - The disabled state of the input control
 * @property {boolean} readonly - The readonly state of the input control
 * @property {string} iconSrc - The src for an optional icon
 * @property {string} description - The text for the description element that helps describe the input control
 * @property {string} supportPage - Name of the SUMO support page to link to.
 * @property {string} placeholder - Text to display when the input has no value.
 * @property {string} ariaLabel - The aria-label text when there is no visible label.
 * @property {string} ariaDescription - The aria-description text when there is no visible description.
 */
class MozInputText extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozBaseInputElement {
  static properties = {
    placeholder: {
      type: String,
      fluent: true
    },
    readonly: {
      type: Boolean,
      reflect: true
    }
  };
  static inputLayout = "block";
  constructor() {
    super();
    this.value = "";
    this.readonly = false;
  }
  inputStylesTemplate() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<link
      rel="stylesheet"
      href="${toolkit_content_widgets_moz_input_text_moz_input_text_css__WEBPACK_IMPORTED_MODULE_0__}"
    />`;
  }
  handleInput(e) {
    this.value = e.target.value;
  }
  inputTemplate(options = {}) {
    let {
      type = "text",
      classes,
      styles,
      inputValue
    } = options;
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <input
        id="input"
        type=${type}
        class=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(classes)}
        style=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(styles)}
        name=${this.name}
        .value=${inputValue || this.value}
        ?disabled=${this.disabled || this.parentDisabled}
        ?readonly=${this.readonly}
        accesskey=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.accessKey)}
        placeholder=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.placeholder)}
        aria-label=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.ariaLabel ?? undefined)}
        aria-describedby="description"
        aria-description=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.hasDescription ? undefined : this.ariaDescription)}
        @input=${this.handleInput}
        @change=${this.redispatchEvent}
      />
    `;
  }
}
customElements.define("moz-input-text", MozInputText);

/***/ }),

/***/ 76664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingElement: () => (/* binding */ SettingElement),
/* harmony export */   spread: () => (/* binding */ spread)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82242);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/** @import { AttributePart } from "chrome://global/content/vendor/lit.all.mjs" */

/**
 * @typedef {object} SettingElementConfig
 * @property {string} [id] - The ID for the Setting, this should match the layout id
 * @property {string} [l10nId] - The Fluent l10n ID for the setting
 * @property {Record<string, string>} [l10nArgs] - An object containing l10n IDs and their values that will be translated with Fluent
 * @property {Record<string, any>} [controlAttrs] - An object of additional attributes to be set on the control. These can be used to further customize the control for example a message bar of the warning type, or what dialog a button should open
 * @property {string} [iconSrc] - A path to the icon for the control (if the control supports one)
 * @property {string} [slot] - The named slot for the control
 * @property {string} [supportPage] - The SUMO support page slug for the setting
 * @property {string} [subcategory] - The sub-category slug used for direct linking to a setting from SUMO
 */

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
   *
   * @type {Record<string, unknown>}
   */
  #prevProps = {};

  /**
   * Render nothing by default as all changes are made in update using DOM APIs
   * on the element directly.
   *
   * @param {Record<string, unknown>} props The props to apply to this element.
   */
  // eslint-disable-next-line no-unused-vars
  render(props) {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.nothing;
  }

  /**
   * Apply props to the element using DOM APIs, updating only changed values.
   *
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
        // @ts-ignore
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
   * @param {SettingElementConfig} config
   */
  getCommonPropertyMapping(config) {
    return {
      id: config.id,
      "data-l10n-id": config.l10nId ? config.l10nId : undefined,
      "data-l10n-args": config.l10nArgs ? JSON.stringify(config.l10nArgs) : undefined,
      ".iconSrc": config.iconSrc,
      "data-subcategory": config.subcategory,
      ".supportPage": config.supportPage != undefined ? config.supportPage : undefined,
      slot: config.slot,
      ...config.controlAttrs
    };
  }
}

/***/ }),

/***/ 97959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingGroup: () => (/* binding */ SettingGroup)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var chrome_browser_content_preferences_widgets_setting_element_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76664);
/* harmony import */ var chrome_browser_content_preferences_widgets_setting_control_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5540);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */





/**
 * @import { SettingElementConfig } from "chrome://browser/content/preferences/widgets/setting-element.mjs"
 * @import { SettingControlConfig, SettingControlEvent } from "../setting-control/setting-control.mjs"
 * @import { Preferences } from "chrome://global/content/preferences/Preferences.mjs"
 * @import { TemplateResult } from "chrome://global/content/vendor/lit.all.mjs";
 */

/**
 * @typedef {object} SettingGroupConfigExtensions
 * @property {SettingControlConfig[]} items Array of SettingControlConfigs to render.
 * @property {number} [headingLevel] A heading level to create the legend as (1-6).
 * @property {boolean} [inProgress]
 * Hide this section unless the browser.settings-redesign.enabled or
 * browser.settings-redesign.<groupid>.enabled prefs are true.
 * @property {"default"|"always"|"never"} [card]
 * Whether to use a card. Default: use a card after SRD or in a sub-pane.
 */
/** @typedef {SettingElementConfig & SettingGroupConfigExtensions} SettingGroupConfig */

const CLICK_HANDLERS = new Set(["dialog-button", "moz-box-button", "moz-box-item", "moz-box-link", "moz-button", "moz-box-group", "moz-message-bar"]);
const REORDER_HANDLERS = new Set(["moz-box-group"]);

/**
 * Enumish of attribute names used for changing setting-group and groupbox
 * visibilities based on the visibility of child setting-controls.
 */
const HiddenAttr = Object.freeze({
  /** Attribute used to hide elements without using the hidden attribute. */
  Self: "data-hidden-by-setting-group",
  /** Attribute used to signal that this element should not be searchable. */
  Search: "data-hidden-from-search"
});
class SettingGroup extends chrome_browser_content_preferences_widgets_setting_element_mjs__WEBPACK_IMPORTED_MODULE_1__.SettingElement {
  static properties = {
    config: {
      type: Object
    },
    groupId: {
      type: String
    },
    getSetting: {
      type: Function
    },
    srdEnabled: {
      type: Boolean
    },
    inSubPane: {
      type: Boolean
    }
  };
  static queries = {
    allControlEls: {
      all: "setting-control"
    },
    fieldsetEl: "moz-fieldset"
  };

  /**
   * Immediate child control elements. See {@link SettingGroup.allControlEls} to
   * get all ancestors.
   */
  get childControlEls() {
    // @ts-expect-error bug 1997478
    return [...this.fieldsetEl.children].filter(child => child instanceof chrome_browser_content_preferences_widgets_setting_control_mjs__WEBPACK_IMPORTED_MODULE_2__.SettingControl);
  }
  constructor() {
    super();

    /**
     * @type {Preferences['getSetting'] | undefined}
     */
    this.getSetting = undefined;

    /**
     * @type {SettingGroupConfig | undefined}
     */
    this.config = undefined;

    /**
     * Set by initSettingGroup based on browser.settings-redesign.enabled.
     */
    this.srdEnabled = false;
    /**
     * Set by setting-pane if this is a sub pane so we can render cards even if SRD is off.
     */
    this.inSubPane = false;
  }
  createRenderRoot() {
    return this;
  }
  willUpdate() {
    if (!this.srdEnabled) {
      this.classList.toggle("subcategory", this.config?.headingLevel == 1);
    }
  }
  async handleVisibilityChange() {
    await this.updateComplete;
    let hasVisibleControls = this.childControlEls.some(el => !el.hidden);
    let groupbox = /** @type {XULElement} */this.closest("groupbox");
    if (hasVisibleControls) {
      if (this.hasAttribute(HiddenAttr.Self)) {
        this.removeAttribute(HiddenAttr.Self);
        this.removeAttribute(HiddenAttr.Search);
      }
      if (groupbox && groupbox.hasAttribute(HiddenAttr.Self)) {
        groupbox.removeAttribute(HiddenAttr.Search);
        groupbox.removeAttribute(HiddenAttr.Self);
      }
    } else {
      this.setAttribute(HiddenAttr.Self, "");
      this.setAttribute(HiddenAttr.Search, "true");
      if (groupbox && !groupbox.hasAttribute(HiddenAttr.Search)) {
        groupbox.setAttribute(HiddenAttr.Search, "true");
        groupbox.setAttribute(HiddenAttr.Self, "");
      }
    }
  }
  async getUpdateComplete() {
    let result = await super.getUpdateComplete();
    // @ts-expect-error bug 1997478
    await Promise.all([...this.allControlEls].map(el => el.updateComplete));
    return result;
  }

  /**
   * Notify child controls when their input has fired an event. When controls
   * are nested the parent receives events for the nested controls, so this is
   * actually easier to manage here; it also registers fewer listeners.
   *
   * @param {SettingControlEvent<InputEvent>} e
   */
  onChange(e) {
    let inputEl = e.target;
    inputEl.control?.onChange(inputEl);
  }

  /**
   * Notify child controls when their input has been clicked. When controls
   * are nested the parent receives events for the nested controls, so this is
   * actually easier to manage here; it also registers fewer listeners.
   *
   * @param {SettingControlEvent<MouseEvent>} e
   */
  onClick(e) {
    let inputEl = e.target;
    if (!CLICK_HANDLERS.has(inputEl.localName)) {
      return;
    }
    inputEl.control?.onClick(e);
  }

  /**
   * Notify child controls when items have been reordered. The reorder event is
   * a CustomEvent that bubbles from reorderable moz-box-group elements when
   * items are reordered via drag-and-drop or keyboard shortcuts.
   *
   * The detail object of the reorder event contains the following properties:
   *
   * - `draggedElement`: The element that was reordered.
   * - `targetElement`: The element that the dragged element was reordered relative to.
   * - `position`: The position of the drop relative to the target element. -1
   *   means before, 0 means after.
   * - `draggedIndex`: The original index of the element being reordered.
   * - `targetIndex`: The new index of the draggedElement after reordering.
   *
   * @param {SettingControlEvent<CustomEvent>} e
   */
  onReorder(e) {
    let inputEl = e.target;
    if (!REORDER_HANDLERS.has(inputEl.localName)) {
      return;
    }
    inputEl.control?.onReorder(e);
  }

  /**
   * @param {SettingControlConfig} item
   */
  itemTemplate(item) {
    let setting = this.getSetting(item.id);
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<setting-control
      .setting=${setting}
      .config=${item}
      .getSetting=${this.getSetting}
    ></setting-control>`;
  }

  /**
   * @param {TemplateResult} content The content to render in a container.
   */
  containerTemplate(content) {
    if ((this.srdEnabled || this.inSubPane || this.config.card == "always") && this.config.card != "never") {
      return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<moz-card>${content}</moz-card>`;
    }
    return content;
  }
  render() {
    if (!this.config) {
      return "";
    }
    return this.containerTemplate((0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<moz-fieldset
        .headingLevel=${this.srdEnabled ? 2 : this.config.headingLevel}
        @change=${this.onChange}
        @toggle=${this.onChange}
        @click=${this.onClick}
        @reorder=${this.onReorder}
        @visibility-change=${this.handleVisibilityChange}
        ${(0,chrome_browser_content_preferences_widgets_setting_element_mjs__WEBPACK_IMPORTED_MODULE_1__.spread)(this.getCommonPropertyMapping(this.config))}
        >${this.config.items.map(item => this.itemTemplate(item))}</moz-fieldset
      >`);
  }
}
customElements.define("setting-group", SettingGroup);

/***/ })

}]);
//# sourceMappingURL=setting-group-setting-group-stories.63f4c4cc.iframe.bundle.js.map