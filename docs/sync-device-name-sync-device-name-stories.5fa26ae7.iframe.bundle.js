"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[4540],{

/***/ 44670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48334);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11540);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * A custom element that manages the display and editing of a Device name
 * in Firefox Sync settings section.
 *
 * @tagname sync-device-name
 * @property {string} value - The current value of the device name.
 * @property {string} defaultValue - Default device name shown in the input field when empty.
 * @property {boolean} disabled - The disabled state of the device name component.
 * @property {boolean} _isInEditMode - Whether the component is currently in edit mode.
 */
class SyncDeviceName extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.MozLitElement {
  static properties = {
    value: {
      type: String
    },
    defaultValue: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    _isInEditMode: {
      type: Boolean,
      state: true
    }
  };
  static queries = {
    inputTextEl: "#fxaSyncComputerName",
    changeBtnEl: "#fxaChangeDeviceName"
  };
  constructor() {
    super();

    /** @type {string} */
    this.value = "";

    /** @type {string} */
    this.defaultValue = "";

    /** @type {boolean} */
    this.disabled = false;

    /** @type {boolean} */
    this._isInEditMode = false;
  }
  setFocus() {
    this.updateComplete.then(() => {
      const targetEl = this._isInEditMode ? this.inputTextEl : this.changeBtnEl;
      targetEl?.focus();
    });
  }
  onDeviceNameChange() {
    this._isInEditMode = true;
    this.setFocus();
  }
  onDeviceNameCancel() {
    this._isInEditMode = false;
    this.setFocus();
  }
  onDeviceNameSave() {
    const inputVal = this.inputTextEl.value?.trim();
    this.value = inputVal === "" ? this.defaultValue : inputVal;
    this._isInEditMode = false;
    this.setFocus();
  }

  /**
   * Handles key presses in the device name input.
   * Pressing Enter saves the name, pressing Escape cancels editing.
   *
   * @param {KeyboardEvent} event
   */
  onDeviceNameKeyDown(event) {
    switch (event.key) {
      case "Enter":
        event.preventDefault();
        this.onDeviceNameSave();
        break;
      case "Escape":
        event.preventDefault();
        this.onDeviceNameCancel();
        break;
    }
  }
  displayDeviceNameTemplate() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<moz-button
      id="fxaChangeDeviceName"
      data-l10n-id="sync-device-name-change-2"
      data-l10n-attrs="accesskey"
      slot="actions"
      @click=${this.onDeviceNameChange}
      ?disabled=${this.disabled}
    ></moz-button>`;
  }
  editDeviceNameTemplate() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<moz-input-text
        id="fxaSyncComputerName"
        data-l10n-id="sync-device-name-input"
        data-l10n-args=${JSON.stringify({
      placeholder: this.defaultValue
    })}
        .value=${this.value}
        @keydown=${this.onDeviceNameKeyDown}
      ></moz-input-text>
      <moz-button
        id="fxaCancelChangeDeviceName"
        data-l10n-id="sync-device-name-cancel"
        data-l10n-attrs="accesskey"
        slot="actions"
        @click=${this.onDeviceNameCancel}
      ></moz-button>
      <moz-button
        id="fxaSaveChangeDeviceName"
        data-l10n-id="sync-device-name-save"
        data-l10n-attrs="accesskey"
        slot="actions"
        @click=${this.onDeviceNameSave}
      ></moz-button>`;
  }
  render() {
    let label = "";
    if (!this._isInEditMode) {
      label = this.value == "" ? this.defaultValue : this.value;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <moz-box-item label=${label}>
        ${this._isInEditMode ? this.editDeviceNameTemplate() : this.displayDeviceNameTemplate()}
      </moz-box-item>
    `;
  }
}
customElements.define("sync-device-name", SyncDeviceName);

/***/ }),

/***/ 88755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   Disabled: () => (/* binding */ Disabled),
/* harmony export */   WithDefaultValue: () => (/* binding */ WithDefaultValue),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11540);
/* harmony import */ var chrome_browser_content_preferences_widgets_sync_device_name_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44670);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/Settings/Sync Device Name",
  component: "sync-device-name",
  parameters: {
    status: "in-development"
  }
});
window.MozXULElement.insertFTLIfNeeded("browser/preferences/preferences.ftl");
const Template = ({
  value = "",
  defaultValue = "",
  disabled = false
}) => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <div style="max-width: 500px">
    <sync-device-name
      value=${value}
      defaultvalue=${defaultValue}
      ?disabled=${disabled}
    ></sync-device-name>
  </div>
`;
const Default = Template.bind({});
Default.args = {
  value: "My Device Name",
  disabled: false
};
const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
  ...Default.args,
  defaultValue: "My Default Device Name"
};
const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true
};

/***/ })

}]);
//# sourceMappingURL=sync-device-name-sync-device-name-stories.5fa26ae7.iframe.bundle.js.map