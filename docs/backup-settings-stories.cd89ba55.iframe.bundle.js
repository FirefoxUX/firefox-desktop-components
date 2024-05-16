"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[3015],{

/***/ 34562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BackupSettings)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73689);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * The widget for managing the BackupService that is embedded within the main
 * document of about:settings / about:preferences.
 */
class BackupSettings extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.MozLitElement {
  static properties = {
    backupServiceState: {
      type: Object
    }
  };

  /**
   * Creates a BackupSettings instance and sets the initial default
   * state.
   */
  constructor() {
    super();
    this.backupServiceState = {
      backupInProgress: false
    };
  }

  /**
   * Dispatches the BackupUI:InitWidget custom event upon being attached to the
   * DOM, which registers with BackupUIChild for BackupService state updates.
   */
  connectedCallback() {
    super.connectedCallback();
    this.dispatchEvent(new CustomEvent("BackupUI:InitWidget", {
      bubbles: true
    }));
  }
  render() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`<div>
      Backup in progress:
      ${this.backupServiceState.backupInProgress ? "Yes" : "No"}
    </div>`;
  }
}
customElements.define("backup-settings", BackupSettings);

/***/ }),

/***/ 4832:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackingUpInProgress": () => (/* binding */ BackingUpInProgress),
/* harmony export */   "BackingUpNotInProgress": () => (/* binding */ BackingUpNotInProgress),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45717);
/* harmony import */ var _backup_settings_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34562);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// eslint-disable-next-line import/no-unresolved


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/Backup/Backup Settings",
  component: "backup-settings",
  argTypes: {}
});
const Template = ({
  backupServiceState
}) => lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
  <backup-settings .backupServiceState=${backupServiceState}></backup-settings>
`;
const BackingUpNotInProgress = Template.bind({});
BackingUpNotInProgress.args = {
  backupServiceState: {
    backupInProgress: false
  }
};
const BackingUpInProgress = Template.bind({});
BackingUpInProgress.args = {
  backupServiceState: {
    backupInProgress: true
  }
};

/***/ })

}]);
//# sourceMappingURL=backup-settings-stories.cd89ba55.iframe.bundle.js.map