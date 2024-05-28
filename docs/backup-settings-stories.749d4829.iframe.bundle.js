"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[3015],{

/***/ 34562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BackupSettings)
/* harmony export */ });
/* harmony import */ var browser_components_backup_content_backup_settings_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81715);
/* harmony import */ var browser_themes_shared_preferences_preferences_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9024);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73689);
/* harmony import */ var chrome_browser_content_backup_turn_on_scheduled_backups_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2369);


/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




// eslint-disable-next-line import/no-unassigned-import


/**
 * The widget for managing the BackupService that is embedded within the main
 * document of about:settings / about:preferences.
 */
class BackupSettings extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.MozLitElement {
  static properties = {
    backupServiceState: {
      type: Object
    }
  };
  static get queries() {
    return {
      scheduledBackupsButtonEl: "#backup-toggle-scheduled-button",
      turnOnScheduledBackupsDialogEl: "#turn-on-scheduled-backups-dialog",
      turnOnScheduledBackupsEl: "turn-on-scheduled-backups"
    };
  }

  /**
   * Creates a BackupPreferences instance and sets the initial default
   * state.
   */
  constructor() {
    super();
    this.backupServiceState = {
      backupFilePath: "Documents",
      // TODO: make save location configurable (bug 1895943)
      backupInProgress: false,
      scheduledBackupsEnabled: false
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
    this.addEventListener("scheduledBackupsCancel", this);
    this.addEventListener("scheduledBackupsConfirm", this);
  }
  handleEvent(event) {
    switch (event.type) {
      case "scheduledBackupsConfirm":
        this.turnOnScheduledBackupsDialogEl.close();
        this.dispatchEvent(new CustomEvent("BackupUI:ScheduledBackupsConfirm", {
          bubbles: true,
          composed: true
        }));
        break;
      case "scheduledBackupsCancel":
        this.turnOnScheduledBackupsDialogEl.close();
        break;
    }
  }
  handleShowScheduledBackups() {
    if (!this.backupServiceState.scheduledBackupsEnabled && this.turnOnScheduledBackupsDialogEl) {
      this.turnOnScheduledBackupsDialogEl.showModal();
    }
  }
  turnOnScheduledBackupsDialogTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<dialog id="turn-on-scheduled-backups-dialog">
      <turn-on-scheduled-backups
        .backupFilePath=${this.backupServiceState.backupFilePath}
      ></turn-on-scheduled-backups>
    </dialog>`;
  }
  render() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<link
        rel="stylesheet"
        href="${browser_themes_shared_preferences_preferences_css__WEBPACK_IMPORTED_MODULE_1__}"
      />
      <link
        rel="stylesheet"
        href="${browser_components_backup_content_backup_settings_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <div id="scheduled-backups">
        <div>
          Backup in progress:
          ${this.backupServiceState.backupInProgress ? "Yes" : "No"}
        </div>

        ${this.turnOnScheduledBackupsDialogTemplate()}

        <moz-button
          id="backup-toggle-scheduled-button"
          @click=${this.handleShowScheduledBackups}
          data-l10n-id="settings-data-backup-toggle"
        ></moz-button>
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


window.MozXULElement.insertFTLIfNeeded("locales-preview/backupSettings.ftl");
window.MozXULElement.insertFTLIfNeeded("branding/brand.ftl");
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
    backupFilePath: "Documents",
    backupInProgress: false,
    scheduledBackupsEnabled: false
  }
};
const BackingUpInProgress = Template.bind({});
BackingUpInProgress.args = {
  backupServiceState: {
    backupFilePath: "Documents",
    backupInProgress: true,
    scheduledBackupsEnabled: false
  }
};

/***/ }),

/***/ 2369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TurnOnScheduledBackups)
/* harmony export */ });
/* harmony import */ var browser_components_backup_content_turn_on_scheduled_backups_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95010);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73689);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * The widget for showing available options when users want to turn on
 * scheduled backups.
 */
class TurnOnScheduledBackups extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    backupFilePath: {
      type: String
    },
    showPasswordOptions: {
      type: Boolean,
      reflect: true
    }
  };
  static get queries() {
    return {
      cancelButtonEl: "#backup-turn-on-scheduled-cancel-button",
      confirmButtonEl: "#backup-turn-on-scheduled-confirm-button",
      passwordOptionsCheckboxEl: "#sensitive-data-checkbox-input",
      passwordOptionsExpandedEl: "#passwords",
      recommendedFolderInputEl: "#backup-location-filepicker-input"
    };
  }
  constructor() {
    super();
    this.backupFilePath = null;
    this.showPasswordOptions = false;
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
  handleChooseLocation() {
    // TODO: show file picker (bug 1895943)
  }
  handleCancel() {
    this.dispatchEvent(new CustomEvent("scheduledBackupsCancel", {
      bubbles: true,
      composed: true
    }));
    this.showPasswordOptions = false;
    this.passwordOptionsCheckboxEl.checked = false;
  }
  handleConfirm() {
    /**
     * TODO:
     * We should pass save location to BackupUIParent here (bug 1895943).
     * If encryption is enabled via this dialog, ensure a password is set and pass it to BackupUIParent (bug 1895981).
     * Before confirmation, verify passwords match and FxA format rules (bug 1896772).
     */
    this.dispatchEvent(new CustomEvent("scheduledBackupsConfirm", {
      bubbles: true,
      composed: true
    }));
    this.showPasswordOptions = false;
    this.passwordOptionsCheckboxEl.checked = false;
  }
  handleTogglePasswordOptions() {
    this.showPasswordOptions = this.passwordOptionsCheckboxEl?.checked;
  }
  allOptionsTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <fieldset id="all-controls">
        <fieldset id="backup-location-controls">
          <label
            id="backup-location-label"
            for="backup-location-filepicker-input"
            data-l10n-id="turn-on-scheduled-backups-location-label"
          ></label>
          <!-- TODO: show folder icon (bug 1895943) -->
          <div id="backup-location-filepicker">
            <input
              id="backup-location-filepicker-input"
              type="text"
              readonly
              data-l10n-id="turn-on-scheduled-backups-location-default-folder"
              data-l10n-args=${JSON.stringify({
      recommendedFolder: this.backupFilePath
    })}
              data-l10n-attrs="value"
            />
            <moz-button
              id="backup-location-filepicker-button"
              @click=${this.handleChooseLocation}
              data-l10n-id="turn-on-scheduled-backups-location-choose-button"
              aria-controls="backup-location-filepicker-input"
            ></moz-button>
          </div>
        </fieldset>

        <fieldset id="sensitive-data-controls">
          <div id="sensitive-data-checkbox">
            <label
              id="sensitive-data-checkbox-label"
              for="sensitive-data-checkbox-input"
              aria-controls="passwords"
              aria-expanded=${this.showPasswordOptions}
            >
              <input
                id="sensitive-data-checkbox-input"
                value=${this.showPasswordOptions}
                @click=${this.handleTogglePasswordOptions}
                type="checkbox"
              />
              <span
                id="sensitive-data-checkbox-span"
                data-l10n-id="turn-on-scheduled-backups-encryption-label"
              ></span>
            </label>
            <span
              class="text-deemphasized"
              data-l10n-id="turn-on-scheduled-backups-encryption-description"
            ></span>
          </div>

          ${this.showPasswordOptions ? this.passwordOptionsTemplate() : null}
        </fieldset>
      </fieldset>
    `;
  }
  passwordOptionsTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
    <fieldset id="passwords">
      <label id="new-password-label" for="new-password-input">
        <span id="new-password-span" data-l10n-id="turn-on-scheduled-backups-encryption-create-password-label"></span>
        <input type="password" id="new-password-input"/>
    </label>
      <label id="repeat-password-label" for="repeat-password-input">
        <span id="repeat-password-span" data-l10n-id="turn-on-scheduled-backups-encryption-repeat-password-label"></span>
        <input type="password" id="repeat-password-input"/>
      </label>
    </fieldset>
  </fieldset>`;
  }
  contentTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <div
        id="backup-turn-on-scheduled-wrapper"
        aria-labelledby="backup-turn-on-scheduled-header"
        aria-describedby="backup-turn-on-scheduled-description"
      >
        <h1
          id="backup-turn-on-scheduled-header"
          data-l10n-id="turn-on-scheduled-backups-header"
        ></h1>
        <main id="backup-turn-on-scheduled-content">
          <div id="backup-turn-on-scheduled-description">
            <span
              id="backup-turn-on-scheduled-description-span"
              data-l10n-id="turn-on-scheduled-backups-description"
            ></span>
            <a
              id="backup-turn-on-scheduled-learn-more-link"
              is="moz-support-link"
              support-page="todo-backup"
              data-l10n-id="turn-on-scheduled-backups-support-link"
            ></a>
          </div>
          ${this.allOptionsTemplate()}
        </main>

        <moz-button-group id="backup-turn-on-scheduled-button-group">
          <moz-button
            id="backup-turn-on-scheduled-cancel-button"
            @click=${this.handleCancel}
            data-l10n-id="turn-on-scheduled-backups-cancel-button"
          ></moz-button>
          <moz-button
            id="backup-turn-on-scheduled-confirm-button"
            @click=${this.handleConfirm}
            type="primary"
            data-l10n-id="turn-on-scheduled-backups-confirm-button"
          ></moz-button>
        </moz-button-group>
      </div>
    `;
  }
  render() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <link
        rel="stylesheet"
        href="${browser_components_backup_content_turn_on_scheduled_backups_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      ${this.contentTemplate()}
    `;
  }
}
customElements.define("turn-on-scheduled-backups", TurnOnScheduledBackups);

/***/ }),

/***/ 81715:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "backup-settings.4bab32b0258c5ea99752.css";

/***/ }),

/***/ 95010:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "turn-on-scheduled-backups.cd47b47dfacf92e7bd47.css";

/***/ }),

/***/ 9024:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "preferences.0a4c39ffae25cce88176.css";

/***/ })

}]);
//# sourceMappingURL=backup-settings-stories.749d4829.iframe.bundle.js.map