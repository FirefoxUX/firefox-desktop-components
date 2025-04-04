"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1020,9402],{

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
    if (!folder) {
      return "";
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
    if (this.#folder) {
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

module.exports = __webpack_require__.p + "moz-input-text.56f85620c987d329223a.css";

/***/ }),

/***/ 42572:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-input-folder.1dd40be29bca178b898a.css";

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
 */
class MozInputText extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozBaseInputElement {
  static properties = {
    placeholder: {
      type: String,
      fluent: true
    },
    readonly: {
      type: Boolean,
      mapped: true
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
        value=${inputValue || this.value}
        ?disabled=${this.disabled || this.parentDisabled}
        ?readonly=${this.readonly}
        accesskey=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.accessKey)}
        placeholder=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.placeholder)}
        aria-describedby="description"
        @input=${this.handleInput}
        @change=${this.redispatchEvent}
      />
    `;
  }
}
customElements.define("moz-input-text", MozInputText);

/***/ })

}]);
//# sourceMappingURL=9402.166b9c34.iframe.bundle.js.map