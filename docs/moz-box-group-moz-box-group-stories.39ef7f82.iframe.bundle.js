"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[356,1020,3450,9402],{

/***/ 9402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozInputFolder)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_input_folder_moz_input_folder_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42572);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11540);
/* harmony import */ var chrome_global_content_elements_moz_input_text_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91020);

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

/***/ 9538:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-input-text.924e6291805dbccf217d.css";

/***/ }),

/***/ 16237:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   List: () => (/* binding */ List),
/* harmony export */   ListWithHeaderAndFooter: () => (/* binding */ ListWithHeaderAndFooter),
/* harmony export */   Reorderable: () => (/* binding */ Reorderable),
/* harmony export */   Scrollable: () => (/* binding */ Scrollable),
/* harmony export */   Wrapped: () => (/* binding */ Wrapped),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11540);
/* harmony import */ var _moz_box_group_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20356);
/* harmony import */ var chrome_browser_content_preferences_widgets_setting_control_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87480);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



// eslint-disable-next-line mozilla/no-browser-refs-in-toolkit

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "UI Widgets/Box Group",
  component: "moz-box-group",
  argTypes: {
    type: {
      options: Object.keys(_moz_box_group_mjs__WEBPACK_IMPORTED_MODULE_1__.GROUP_TYPES),
      mapping: _moz_box_group_mjs__WEBPACK_IMPORTED_MODULE_1__.GROUP_TYPES,
      control: "select"
    }
  },
  parameters: {
    status: "in-development",
    fluent: `
moz-box-item =
  .label = I'm a box item
  .description = I'm part of a group
moz-box-button-1 =
  .label = I'm a box button in a group
moz-box-button-2 =
  .label = I'm another box button in a group
moz-box-link =
  .label = I'm a box link in a group
moz-box-delete-action =
  .title = Delete I'm a box item
moz-box-edit-action =
  .title = Edit I'm a box item
moz-box-toggle-action =
  .aria-label = Toggle I'm a box item
moz-box-more-action =
  .title = More options, I'm a box item
moz-box-item-reorderable-1 =
  .label = I'm box item number 1
moz-box-item-reorderable-2 =
  .label = I'm box item number 2
moz-box-item-reorderable-3 =
  .label = I'm box item number 3
moz-box-item-reorderable-4 =
  .label = I'm box item number 4
moz-box-item-reorderable-5 =
  .label = I'm box item number 5
moz-box-item-header =
  .label = I'm a header box item
moz-box-button-footer =
  .label = I'm a footer box button
    `
  }
});
function basicTemplate({
  type,
  hasHeader,
  hasFooter,
  wrapped
}) {
  return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<moz-box-group type=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(type)}>
      ${hasHeader ? (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<moz-box-item
            slot="header"
            data-l10n-id="moz-box-item-header"
          ></moz-box-item>` : ""}
      ${getInnerElements(type, wrapped)}
      ${hasFooter ? (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<moz-box-button
            slot="footer"
            data-l10n-id="moz-box-button-footer"
          ></moz-box-button>` : ""}
    </moz-box-group>
    ${type == "list" ? (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<moz-button class="delete" @click=${appendItem}>
          Add an item
        </moz-button>` : ""}`;
}
function getInnerElements(type) {
  if (type == _moz_box_group_mjs__WEBPACK_IMPORTED_MODULE_1__.GROUP_TYPES.reorderable) {
    return reorderableElements();
  }
  return basicElements();
}
function reorderableElements() {
  return Array.from({
    length: 5
  }).map((_, i) => {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<moz-box-item
      data-l10n-id=${`moz-box-item-reorderable-${i + 1}`}
    >
      <moz-button
        iconsrc="chrome://global/skin/icons/edit-outline.svg"
        data-l10n-id="moz-box-edit-action"
        slot="actions-start"
      ></moz-button>
      <moz-toggle
        slot="actions"
        pressed
        data-l10n-id="moz-box-toggle-action"
      ></moz-toggle>
    </moz-box-item>`;
  });
}
function basicElements() {
  return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<moz-box-item data-l10n-id="moz-box-item">
      <moz-button
        iconsrc="chrome://global/skin/icons/edit-outline.svg"
        data-l10n-id="moz-box-edit-action"
        type="ghost"
        slot="actions"
      ></moz-button>
      <moz-toggle
        slot="actions"
        pressed
        data-l10n-id="moz-box-toggle-action"
      ></moz-toggle>
      <moz-button
        iconsrc="chrome://global/skin/icons/more.svg"
        data-l10n-id="moz-box-more-action"
        slot="actions-start"
      ></moz-button>
    </moz-box-item>
    <moz-box-link data-l10n-id="moz-box-link"></moz-box-link>
    <moz-box-button data-l10n-id="moz-box-button-1"></moz-box-button>
    <moz-box-item data-l10n-id="moz-box-item">
      <moz-button
        iconsrc="chrome://global/skin/icons/edit-outline.svg"
        data-l10n-id="moz-box-edit-action"
        type="ghost"
        slot="actions-start"
      ></moz-button>
      <moz-button
        iconsrc="chrome://global/skin/icons/more.svg"
        data-l10n-id="moz-box-more-action"
        slot="actions-start"
      ></moz-button>
    </moz-box-item>
    <moz-box-button data-l10n-id="moz-box-button-2"></moz-box-button>`;
}
const appendItem = event => {
  let group = event.target.getRootNode().querySelector("moz-box-group");
  let boxItem = document.createElement("moz-box-item");
  boxItem.label = "New box item";
  boxItem.description = "New items are added to the list";
  let actionButton = document.createElement("moz-button");
  actionButton.addEventListener("click", () => boxItem.remove());
  actionButton.iconSrc = "chrome://global/skin/icons/delete.svg";
  actionButton.slot = "actions";
  actionButton.setAttribute("data-l10n-id", "moz-box-delete-action");
  boxItem.append(actionButton);
  group.prepend(boxItem);
};

// Example with all child elements wrapped in setting-control/setting-group,
// which is the most common use case in Firefox preferences.
function wrappedTemplate({
  type,
  hasHeader,
  hasFooter
}) {
  return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<setting-control
    .config=${getConfig({
    type,
    hasHeader,
    hasFooter
  })}
    .setting=${DEFAULT_SETTING}
    .getSetting=${getSetting}
  ></setting-control>`;
}
const getConfig = ({
  type,
  hasHeader,
  hasFooter
}) => ({
  id: "exampleWrapped",
  control: "moz-box-group",
  controlAttrs: {
    type
  },
  items: [...(hasHeader ? [{
    id: "header",
    control: "moz-box-item",
    l10nId: "moz-box-item-header",
    controlAttrs: {
      slot: "header "
    }
  }] : []), {
    id: "item1",
    control: "moz-box-item",
    l10nId: "moz-box-item",
    options: [{
      id: "slotted-button",
      control: "moz-button",
      l10nId: "moz-box-edit-action",
      iconSrc: "chrome://global/skin/icons/edit-outline.svg",
      controlAttrs: {
        type: "ghost",
        slot: "actions"
      }
    }, {
      id: "slotted-toggle",
      control: "moz-toggle",
      l10nId: "moz-box-toggle-action",
      controlAttrs: {
        slot: "actions"
      }
    }, {
      id: "slotted-icon-button",
      control: "moz-button",
      l10nId: "moz-box-more-action",
      iconSrc: "chrome://global/skin/icons/more.svg",
      controlAttrs: {
        slot: "actions"
      }
    }]
  }, {
    id: "link1",
    control: "moz-box-link",
    l10nId: "moz-box-link"
  }, {
    id: "button1",
    control: "moz-box-button",
    l10nId: "moz-box-button-1"
  }, {
    id: "item2",
    control: "moz-box-item",
    l10nId: "moz-box-item",
    options: [{
      id: "slotted-button-start",
      control: "moz-button",
      l10nId: "moz-box-edit-action",
      iconSrc: "chrome://global/skin/icons/edit-outline.svg",
      controlAttrs: {
        type: "ghost",
        slot: "actions-start"
      }
    }, {
      id: "slotted-icon-button-start",
      control: "moz-button",
      l10nId: "moz-box-more-action",
      iconSrc: "chrome://global/skin/icons/more.svg",
      controlAttrs: {
        slot: "actions-start"
      }
    }]
  }, {
    id: "button2",
    control: "moz-box-button",
    l10nId: "moz-box-button-2"
  }, ...(hasFooter ? [{
    id: "footer",
    control: "moz-box-button",
    l10nId: "moz-box-button-footer",
    controlAttrs: {
      slot: "footer "
    }
  }] : [])]
});
const DEFAULT_SETTING = {
  value: 1,
  on() {},
  off() {},
  userChange() {},
  getControlConfig: c => c,
  controllingExtensionInfo: {},
  visible: true
};
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
  type,
  hasHeader,
  hasFooter,
  scrollable,
  wrapped
}) => (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <style>
    moz-box-group {
      --box-group-max-height: ${scrollable ? "250px" : "unset"};
    }

    .delete {
      margin-top: var(--space-medium);
    }
  </style>
  ${wrapped ? wrappedTemplate({
  type,
  hasHeader,
  hasFooter
}) : basicTemplate({
  type,
  hasHeader,
  hasFooter,
  wrapped
})}
`;
const Default = Template.bind({});
Default.args = {
  type: "default",
  hasHeader: false,
  hasFooter: false,
  scrollable: false,
  wrapped: false
};
const List = Template.bind({});
List.args = {
  ...Default.args,
  type: "list"
};
const Reorderable = Template.bind({});
Reorderable.args = {
  ...Default.args,
  type: "reorderable"
};
const ListWithHeaderAndFooter = Template.bind({});
ListWithHeaderAndFooter.args = {
  ...List.args,
  hasHeader: true,
  hasFooter: true
};
const Scrollable = Template.bind({});
Scrollable.args = {
  ...ListWithHeaderAndFooter.args,
  scrollable: true
};
const Wrapped = Template.bind({});
Wrapped.args = {
  ...ListWithHeaderAndFooter.args,
  wrapped: true
};

/***/ }),

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




/** @import { AttributePart } from "chrome://global/content/vendor/lit.all.mjs" */

/**
 * @typedef {object} SettingElementConfig
 * @property {string} [id] - The ID for the Setting, this should match the layout id
 * @property {string} [l10nId] - The Fluent l10n ID for the setting
 * @property {Record<string, string>} [l10nArgs] - An object containing l10n IDs and their values that will be translated with Fluent
 * @property {Record<string, any>} [controlAttrs] - An object of additional attributes to be set on the control. These can be used to further customize the control for example a message bar of the warning type, or what dialog a button should open
 * @property {string} [iconSrc] - A path to the icon for the control (if the control supports one)
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
      ...config.controlAttrs
    };
  }
}

/***/ }),

/***/ 20356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GROUP_TYPES: () => (/* binding */ GROUP_TYPES),
/* harmony export */   "default": () => (/* binding */ MozBoxGroup)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_box_group_moz_box_group_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23066);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11540);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48334);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



const GROUP_TYPES = {
  list: "list",
  reorderable: "reorderable-list"
};

/**
 * An element used to group combinations of moz-box-item, moz-box-link, and
 * moz-box-button elements and provide the expected styles.
 *
 * @tagname moz-box-group
 * @property {string} type
 *   The type of the group, either "list", "reorderable-list", or undefined.
 *   Note that "reorderable-list" only works with moz-box-item elements for now.
 * @slot default - Slot for rendering various moz-box-* elements.
 * @slot <index> - Slots used to assign moz-box-* elements to <li> elements when
 *   the group is type="list".
 */
class MozBoxGroup extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  #tabbable = true;
  static properties = {
    type: {
      type: String
    },
    listItems: {
      type: Array,
      state: true
    }
  };
  static queries = {
    reorderableList: "moz-reorderable-list",
    headerSlot: "slot[name='header']",
    footerSlot: "slot[name='footer']"
  };
  constructor() {
    super();
    this.listItems = [];
    this.listMutationObserver = new MutationObserver(this.updateItems.bind(this));
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.listMutationObserver.observe(this, {
      attributeFilter: ["hidden"],
      subtree: true,
      childList: true
    });
    this.updateItems();
  }
  contentTemplate() {
    if (this.type == GROUP_TYPES.reorderable) {
      return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<moz-reorderable-list
        class="scroll-container"
        itemselector="moz-box-item"
        dragselector=".handle"
        @reorder=${this.handleReorder}
      >
        ${this.slotTemplate()}
      </moz-reorderable-list>`;
    }
    return this.slotTemplate();
  }
  slotTemplate() {
    if (this.type == GROUP_TYPES.list || this.type == GROUP_TYPES.reorderable) {
      let listTag = this.type == GROUP_TYPES.reorderable ? (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.literal)`ol` : (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.literal)`ul`;
      return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.staticHtml)`<${listTag}
          tabindex="-1"
          class="list scroll-container"
          aria-orientation="vertical"
          @keydown=${this.handleKeydown}
          @focusin=${this.handleFocus}
          @focusout=${this.handleBlur}
        >
          ${this.listItems.map((_, i) => {
        return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<li>
              <slot name=${i}></slot>
            </li> `;
      })}
        </${listTag}>
        <slot hidden></slot>`;
    }
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div class="scroll-container">
      <slot></slot>
    </div>`;
  }
  handleReorder(event) {
    let {
      draggedElement,
      targetElement,
      position
    } = event.detail;
    let parent = targetElement.parentNode;
    let moveBefore = position === -1;
    if (moveBefore) {
      parent.insertBefore(draggedElement, targetElement);
    } else {
      parent.insertBefore(draggedElement, targetElement.nextElementSibling);
    }
    draggedElement.focus();
    this.updateItems();
  }
  handleKeydown(event) {
    if (this.type == GROUP_TYPES.reorderable && event.originalTarget == event.target.handleEl) {
      let detail = this.reorderableList.evaluateKeyDownEvent(event);
      if (detail) {
        event.stopPropagation();
        this.handleReorder({
          detail
        });
        return;
      }
    }
    let positionAttr = event.target.getAttribute("position") ??
    // handles the case where an interactive element is nested in a moz-box-item
    event.target.closest("[position]").getAttribute("position");
    let currentPosition = parseInt(positionAttr);
    switch (event.key) {
      case "Down":
      case "ArrowDown":
        {
          event.preventDefault();
          let nextItem = this.listItems[currentPosition + 1];
          nextItem?.focus(event);
          break;
        }
      case "Up":
      case "ArrowUp":
        {
          event.preventDefault();
          let prevItem = this.listItems[currentPosition - 1];
          prevItem?.focus(event);
          break;
        }
    }
  }
  handleFocus() {
    if (this.#tabbable) {
      this.#tabbable = false;
      this.listItems.forEach(item => {
        item.setAttribute("tabindex", "-1");
      });
    }
  }
  handleBlur() {
    if (!this.#tabbable) {
      this.#tabbable = true;
      this.listItems.forEach(item => {
        item.removeAttribute("tabindex");
      });
    }
  }
  updateItems() {
    this.listItems = [...this.children].filter(child => child.slot !== "header" && child.slot !== "footer" && !child.hidden);
  }
  render() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_box_group_moz_box_group_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <slot name="header"></slot>
      ${this.contentTemplate()}
      <slot name="footer"></slot>
    `;
  }
  updated(changedProperties) {
    let headerNode = this.headerSlot.assignedNodes()[0];
    let footerNode = this.footerSlot.assignedNodes().at(-1);
    headerNode?.classList.add("first");
    footerNode?.classList.add("last");
    if (changedProperties.has("listItems") && this.listItems.length) {
      this.listItems.forEach((item, i) => {
        if (this.type == GROUP_TYPES.list || this.type == GROUP_TYPES.reorderable) {
          item.slot = i;
          item.setAttribute("position", i);
        }
        item.classList.toggle("first", i == 0 && !headerNode);
        item.classList.toggle("last", i == this.listItems.length - 1 && !footerNode);
      });
    }
    if (changedProperties.has("type") && (this.type == GROUP_TYPES.list || this.type == GROUP_TYPES.reorderable)) {
      this.updateItems();
    }
  }
}
customElements.define("moz-box-group", MozBoxGroup);

/***/ }),

/***/ 23066:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-box-group.bdb2145d284eeb75557e.css";

/***/ }),

/***/ 42572:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-input-folder.043761f7caa2043cd685.css";

/***/ }),

/***/ 87480:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingControl: () => (/* binding */ SettingControl),
/* harmony export */   SettingNotDefinedError: () => (/* binding */ SettingNotDefinedError)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11540);
/* harmony import */ var chrome_browser_content_preferences_widgets_setting_element_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19100);
/* harmony import */ var chrome_global_content_elements_moz_input_folder_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9402);
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
const ITEM_SLOT_BY_PARENT = new Map([["moz-checkbox", "nested"], ["moz-input-text", "nested"], ["moz-input-search", "nested"], ["moz-input-folder", "nested"], ["moz-input-password", "nested"], ["moz-radio", "nested"], ["moz-radio-group", "nested"],
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
    control.requestUpdate();
  }

  /**
   * The default properties that controls and options accept.
   * Note: for the disabled property, a setting can either be locked,
   * or controlled by an extension but not both.
   *
   * @override
   * @param {SettingElementConfig} config
   * @returns {ReturnType<SettingElement['getCommonPropertyMapping']>}
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
    const props = this.getCommonPropertyMapping(config);
    props[".value"] = config.value;
    props[".disabled"] = config.disabled;
    props[".hidden"] = config.hidden;
    return props;
  }

  /**
   * The default properties for this control.
   *
   * @param {SettingControlConfig} config
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
  async disableExtension() {
    this.isDisablingExtension = true;
    this.showEnableExtensionMessage = true;
    await this.setting.disableControllingExtension();
    this.isDisablingExtension = false;
  }
  isControlledByExtension() {
    return this.setting.controllingExtensionInfo?.id && this.setting.controllingExtensionInfo?.name;
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
    return itemArgs.map(item => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<setting-control
          .config=${item.config}
          .setting=${item.setting}
          .getSetting=${this.getSetting}
          slot=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(ITEM_SLOT_BY_PARENT.get(control))}
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
    return config.options.map(opt => {
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

/***/ 91020:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozInputText)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_input_text_moz_input_text_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9538);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11540);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48334);

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

/***/ })

}]);
//# sourceMappingURL=moz-box-group-moz-box-group-stories.39ef7f82.iframe.bundle.js.map