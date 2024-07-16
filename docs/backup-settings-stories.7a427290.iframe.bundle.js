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
/* harmony import */ var chrome_browser_content_backup_turn_off_scheduled_backups_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84647);
/* harmony import */ var chrome_browser_content_backup_restore_from_backup_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43902);
/* harmony import */ var chrome_browser_content_backup_enable_backup_encryption_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76194);
/* harmony import */ var chrome_browser_content_backup_disable_backup_encryption_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14537);


/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import


/**
 * The widget for managing the BackupService that is embedded within the main
 * document of about:settings / about:preferences.
 */
class BackupSettings extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.MozLitElement {
  #placeholderIconURL = "chrome://global/skin/icons/page-portrait.svg";
  static properties = {
    backupServiceState: {
      type: Object
    },
    recoveryErrorCode: {
      type: Number
    },
    recoveryInProgress: {
      type: Boolean
    },
    _enableEncryptionTypeAttr: {
      type: String
    }
  };
  static get queries() {
    return {
      scheduledBackupsButtonEl: "#backup-toggle-scheduled-button",
      changePasswordButtonEl: "#backup-change-password-button",
      disableBackupEncryptionEl: "disable-backup-encryption",
      disableBackupEncryptionDialogEl: "#disable-backup-encryption-dialog",
      enableBackupEncryptionEl: "enable-backup-encryption",
      enableBackupEncryptionDialogEl: "#enable-backup-encryption-dialog",
      turnOnScheduledBackupsDialogEl: "#turn-on-scheduled-backups-dialog",
      turnOnScheduledBackupsEl: "turn-on-scheduled-backups",
      turnOffScheduledBackupsEl: "turn-off-scheduled-backups",
      turnOffScheduledBackupsDialogEl: "#turn-off-scheduled-backups-dialog",
      restoreFromBackupEl: "restore-from-backup",
      restoreFromBackupButtonEl: "#backup-toggle-restore-button",
      restoreFromBackupDescriptionEl: "#backup-restore-description",
      restoreFromBackupDialogEl: "#restore-from-backup-dialog",
      sensitiveDataCheckboxInputEl: "#backup-sensitive-data-checkbox-input",
      passwordControlsEl: "#backup-password-controls",
      lastBackupLocationInputEl: "#last-backup-location",
      lastBackupFileNameEl: "#last-backup-filename",
      lastBackupDateEl: "#last-backup-date",
      backupLocationShowButtonEl: "#backup-location-show",
      backupLocationEditButtonEl: "#backup-location-edit",
      scheduledBackupsDescriptionEl: "#scheduled-backups-description"
    };
  }

  /**
   * Creates a BackupPreferences instance and sets the initial default
   * state.
   */
  constructor() {
    super();
    this.backupServiceState = {
      backupDirPath: "",
      backupFileToRestore: null,
      backupFileInfo: null,
      defaultParent: {
        fileName: "",
        path: "",
        iconURL: ""
      },
      encryptionEnabled: false,
      scheduledBackupsEnabled: false,
      lastBackupDate: null,
      lastBackupFileName: ""
    };
    this.recoveryInProgress = false;
    this.recoveryErrorCode = 0;
    this._enableEncryptionTypeAttr = "";
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
    this.addEventListener("turnOnScheduledBackups", this);
    this.addEventListener("turnOffScheduledBackups", this);
    this.addEventListener("dialogCancel", this);
    this.addEventListener("getBackupFileInfo", this);
    this.addEventListener("enableEncryption", this);
    this.addEventListener("rerunEncryption", this);
    this.addEventListener("disableEncryption", this);
    this.addEventListener("restoreFromBackupConfirm", this);
    this.addEventListener("restoreFromBackupChooseFile", this);
  }
  handleEvent(event) {
    switch (event.type) {
      case "turnOnScheduledBackups":
        this.turnOnScheduledBackupsDialogEl.close();
        this.dispatchEvent(new CustomEvent("BackupUI:ToggleScheduledBackups", {
          bubbles: true,
          composed: true,
          detail: {
            ...event.detail,
            isScheduledBackupsEnabled: true
          }
        }));
        break;
      case "turnOffScheduledBackups":
        this.turnOffScheduledBackupsDialogEl.close();
        this.dispatchEvent(new CustomEvent("BackupUI:ToggleScheduledBackups", {
          bubbles: true,
          composed: true,
          detail: {
            isScheduledBackupsEnabled: false
          }
        }));
        break;
      case "dialogCancel":
        if (this.turnOnScheduledBackupsDialogEl.open) {
          this.turnOnScheduledBackupsDialogEl.close();
        } else if (this.turnOffScheduledBackupsDialogEl.open) {
          this.turnOffScheduledBackupsDialogEl.close();
        } else if (this.restoreFromBackupDialogEl.open) {
          this.restoreFromBackupDialogEl.close();
        } else if (this.disableBackupEncryptionDialogEl.open) {
          this.disableBackupEncryptionDialogEl.close();
        } else if (this.enableBackupEncryptionDialogEl.open) {
          this.enableBackupEncryptionDialogEl.close();
        }
        break;
      case "restoreFromBackupConfirm":
        this.dispatchEvent(new CustomEvent("BackupUI:RestoreFromBackupFile", {
          bubbles: true,
          composed: true,
          detail: {
            backupFile: event.detail.backupFile,
            backupPassword: event.detail.backupPassword
          }
        }));
        break;
      case "restoreFromBackupChooseFile":
        this.dispatchEvent(new CustomEvent("BackupUI:RestoreFromBackupChooseFile", {
          bubbles: true,
          composed: true
        }));
        break;
      case "getBackupFileInfo":
        this.dispatchEvent(new CustomEvent("BackupUI:GetBackupFileInfo", {
          bubbles: true,
          composed: true,
          detail: {
            backupFile: event.detail.backupFile
          }
        }));
        break;
      case "enableEncryption":
        this.enableBackupEncryptionDialogEl.close();
        this.dispatchEvent(new CustomEvent("BackupUI:ToggleEncryption", {
          bubbles: true,
          composed: true,
          detail: {
            ...event.detail,
            isEncryptionEnabled: true
          }
        }));
        break;
      case "rerunEncryption":
        this.enableBackupEncryptionDialogEl.close();
        this.dispatchEvent(new CustomEvent("BackupUI:RerunEncryption", {
          bubbles: true,
          composed: true,
          detail: {
            ...event.detail
          }
        }));
        break;
      case "disableEncryption":
        this.disableBackupEncryptionDialogEl.close();
        this.dispatchEvent(new CustomEvent("BackupUI:ToggleEncryption", {
          bubbles: true,
          composed: true,
          detail: {
            isEncryptionEnabled: false
          }
        }));
        break;
    }
  }
  handleShowScheduledBackups() {
    if (!this.backupServiceState.scheduledBackupsEnabled && this.turnOnScheduledBackupsDialogEl) {
      this.turnOnScheduledBackupsDialogEl.showModal();
    } else if (this.backupServiceState.scheduledBackupsEnabled && this.turnOffScheduledBackupsDialogEl) {
      this.turnOffScheduledBackupsDialogEl.showModal();
    }
  }
  async handleToggleBackupEncryption(event) {
    event.preventDefault();

    // Checkbox was unchecked, meaning encryption is already enabled and should be disabled.
    let toggledToDisable = !event.target.checked && this.backupServiceState.encryptionEnabled;
    if (toggledToDisable && this.disableBackupEncryptionDialogEl) {
      this.disableBackupEncryptionDialogEl.showModal();
    } else {
      this._enableEncryptionTypeAttr = "set-password";
      await this.updateComplete;
      this.enableBackupEncryptionDialogEl.showModal();
    }
  }
  async handleChangePassword() {
    if (this.enableBackupEncryptionDialogEl) {
      this._enableEncryptionTypeAttr = "change-password";
      await this.updateComplete;
      this.enableBackupEncryptionDialogEl.showModal();
    }
  }
  scheduledBackupsDescriptionTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`
      <div
        id="scheduled-backups-description"
        data-l10n-id="settings-data-backup-scheduled-backups-description"
      >
        <!--TODO: finalize support page links (bug 1900467)-->
        <a
          is="moz-support-link"
          support-page="todo-backup"
          data-l10n-name="support-link"
        ></a>
      </div>
    `;
  }
  turnOnScheduledBackupsDialogTemplate() {
    let {
      fileName,
      path,
      iconURL
    } = this.backupServiceState.defaultParent;
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<dialog id="turn-on-scheduled-backups-dialog">
      <turn-on-scheduled-backups
        defaultlabel=${fileName}
        defaultpath=${path}
        defaulticonurl=${iconURL}
      ></turn-on-scheduled-backups>
    </dialog>`;
  }
  turnOffScheduledBackupsDialogTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<dialog id="turn-off-scheduled-backups-dialog">
      <turn-off-scheduled-backups></turn-off-scheduled-backups>
    </dialog>`;
  }
  restoreFromBackupDialogTemplate() {
    let {
      backupFilePath,
      backupFileToRestore,
      backupFileInfo
    } = this.backupServiceState;
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<dialog id="restore-from-backup-dialog">
      <restore-from-backup
        .backupFilePath=${backupFilePath}
        .backupFileToRestore=${backupFileToRestore}
        .backupFileInfo=${backupFileInfo}
        .recoveryInProgress=${this.recoveryInProgress}
        .recoveryErrorCode=${this.recoveryErrorCode}
      ></restore-from-backup>
    </dialog>`;
  }
  restoreFromBackupTemplate() {
    let descriptionL10nID = this.backupServiceState.scheduledBackupsEnabled ? "settings-data-backup-scheduled-backups-on-restore-description" : "settings-data-backup-scheduled-backups-off-restore-description";
    let restoreButtonL10nID = this.backupServiceState.scheduledBackupsEnabled ? "settings-data-backup-scheduled-backups-on-restore-choose" : "settings-data-backup-scheduled-backups-off-restore-choose";
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<section id="restore-from-backup"">
      ${this.restoreFromBackupDialogTemplate()}
      <div class="backups-control">
        <span
          id="restore-header"
          data-l10n-id="settings-data-backup-restore-header"
          class="heading-medium"
        ></span>
        <moz-button
          id="backup-toggle-restore-button"
          @click=${this.handleShowRestoreDialog}
          data-l10n-id="${restoreButtonL10nID}"
        ></moz-button>
        <div
          id="backup-restore-description"
          data-l10n-id="${descriptionL10nID}"
        ></div>
      </div>
    </section>`;
  }
  handleShowRestoreDialog() {
    if (this.restoreFromBackupDialogEl) {
      this.restoreFromBackupDialogEl.showModal();
    }
  }
  handleShowBackupLocation() {
    this.dispatchEvent(new CustomEvent("BackupUI:ShowBackupLocation", {
      bubbles: true
    }));
  }
  handleEditBackupLocation() {
    this.dispatchEvent(new CustomEvent("BackupUI:EditBackupLocation", {
      bubbles: true
    }));
  }
  enableBackupEncryptionDialogTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<dialog id="enable-backup-encryption-dialog">
      <enable-backup-encryption
        type=${this._enableEncryptionTypeAttr}
      ></enable-backup-encryption>
    </dialog>`;
  }
  disableBackupEncryptionDialogTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<dialog id="disable-backup-encryption-dialog">
      <disable-backup-encryption></disable-backup-encryption>
    </dialog>`;
  }
  lastBackupInfoTemplate() {
    // The lastBackupDate is stored in preferences, which only accepts
    // 32-bit signed values, so we automatically divide it by 1000 before
    // storing it. We need to re-multiply it by 1000 to get Fluent to render
    // the right time.
    let backupDateArgs = {
      date: this.backupServiceState.lastBackupDate * 1000
    };
    let backupFileNameArgs = {
      fileName: this.backupServiceState.lastBackupFileName
    };
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`
      <div id="last-backup-info">
        <div
          id="last-backup-date"
          data-l10n-id="settings-data-backup-last-backup-date"
          data-l10n-args="${JSON.stringify(backupDateArgs)}"
        ></div>
        <div
          id="last-backup-filename"
          data-l10n-id="settings-data-backup-last-backup-filename"
          data-l10n-args="${JSON.stringify(backupFileNameArgs)}"
        ></div>
      </div>
    `;
  }
  backupLocationTemplate() {
    let iconURL = this.backupServiceState.defaultParent.iconURL || this.#placeholderIconURL;
    let {
      backupDirPath
    } = this.backupServiceState;
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`
      <div id="last-backup-location-control">
        <span data-l10n-id="settings-data-backup-last-backup-location"></span>
        <input
          id="last-backup-location"
          class="backup-location-filepicker-input"
          type="text"
          readonly
          value="${backupDirPath}"
          style=${`background-image: url(${iconURL})`}></input>
        <moz-button
          id="backup-location-show"
          @click=${this.handleShowBackupLocation}
          data-l10n-id="settings-data-backup-last-backup-location-show-in-folder"
        ></moz-button>
        <moz-button
          id="backup-location-edit"
          @click=${this.handleEditBackupLocation}
          data-l10n-id="settings-data-backup-last-backup-location-edit"
        ></moz-button>
      </div>
    `;
  }
  sensitiveDataTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<section id="backup-password-controls">
      <!-- TODO: we can use the moz-checkbox reusable component once it is ready (bug 1901635)-->
      <div id="backup-sensitive-data-checkbox">
        <label
          id="backup-sensitive-data-checkbox-label"
          for="backup-sensitive-data-checkbox-input"
        >
          <input
            id="backup-sensitive-data-checkbox-input"
            @click=${this.handleToggleBackupEncryption}
            type="checkbox"
            .checked=${this.backupServiceState.encryptionEnabled}
          />
          <span
            id="backup-sensitive-data-checkbox-span"
            data-l10n-id="settings-data-toggle-encryption-label"
          ></span>
        </label>
        <div
          id="backup-sensitive-data-checkbox-description"
          class="text-deemphasized"
        >
          <span
            id="backup-sensitive-data-checkbox-description-span"
            data-l10n-id="settings-data-toggle-encryption-description"
          ></span>
          <!--TODO: finalize support page links (bug 1900467)-->
          <a
            id="settings-data-toggle-encryption-learn-more-link"
            is="moz-support-link"
            support-page="todo-backup"
            data-l10n-id="settings-data-toggle-encryption-support-link"
          ></a>
        </div>
      </div>
      ${this.backupServiceState.encryptionEnabled ? chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<moz-button
            id="backup-change-password-button"
            @click=${this.handleChangePassword}
            data-l10n-id="settings-data-change-password"
          ></moz-button>` : null}
    </section>`;
  }
  updated() {
    if (this.backupServiceState.scheduledBackupsEnabled) {
      let input = this.lastBackupLocationInputEl;
      input.setSelectionRange(input.value.length, input.value.length);
    }
  }
  render() {
    let scheduledBackupsEnabledL10nID = this.backupServiceState.scheduledBackupsEnabled ? "settings-data-backup-scheduled-backups-on" : "settings-data-backup-scheduled-backups-off";
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<link
        rel="stylesheet"
        href="${browser_themes_shared_preferences_preferences_css__WEBPACK_IMPORTED_MODULE_1__}"
      />
      <link
        rel="stylesheet"
        href="${browser_components_backup_content_backup_settings_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      ${this.turnOnScheduledBackupsDialogTemplate()}
      ${this.turnOffScheduledBackupsDialogTemplate()}
      ${this.enableBackupEncryptionDialogTemplate()}
      ${this.disableBackupEncryptionDialogTemplate()}

      <section id="scheduled-backups">
        <div class="backups-control">
          <span
            id="scheduled-backups-enabled"
            data-l10n-id="${scheduledBackupsEnabledL10nID}"
            class="heading-medium"
          ></span>

          <moz-button
            id="backup-toggle-scheduled-button"
            @click=${this.handleShowScheduledBackups}
            data-l10n-id="settings-data-backup-toggle"
          ></moz-button>

          ${this.backupServiceState.scheduledBackupsEnabled ? null : this.scheduledBackupsDescriptionTemplate()}
        </div>

        ${this.backupServiceState.lastBackupDate ? this.lastBackupInfoTemplate() : null}
        ${this.backupServiceState.scheduledBackupsEnabled ? this.backupLocationTemplate() : null}
        ${this.backupServiceState.scheduledBackupsEnabled ? this.sensitiveDataTemplate() : null}
      </section>

      ${this.restoreFromBackupTemplate()} `;
  }
}
customElements.define("backup-settings", BackupSettings);

/***/ }),

/***/ 4832:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EncryptionEnabled": () => (/* binding */ EncryptionEnabled),
/* harmony export */   "ExistingBackup": () => (/* binding */ ExistingBackup),
/* harmony export */   "ScheduledBackupsDisabled": () => (/* binding */ ScheduledBackupsDisabled),
/* harmony export */   "ScheduledBackupsEnabled": () => (/* binding */ ScheduledBackupsEnabled),
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
const ScheduledBackupsDisabled = Template.bind({});
ScheduledBackupsDisabled.args = {
  backupServiceState: {
    backupDirPath: "/Some/User/Documents",
    defaultParent: {
      path: "/Some/User/Documents",
      fileName: "Documents"
    },
    scheduledBackupsEnabled: false
  }
};
const ScheduledBackupsEnabled = Template.bind({});
ScheduledBackupsEnabled.args = {
  backupServiceState: {
    backupDirPath: "/Some/User/Documents",
    defaultParent: {
      path: "/Some/User/Documents",
      fileName: "Documents"
    },
    scheduledBackupsEnabled: true
  }
};
const ExistingBackup = Template.bind({});
ExistingBackup.args = {
  backupServiceState: {
    backupDirPath: "/Some/User/Documents",
    defaultParent: {
      path: "/Some/User/Documents",
      fileName: "Documents"
    },
    scheduledBackupsEnabled: true,
    lastBackupDate: 1719625747,
    lastBackupFileName: "FirefoxBackup_default_123123123.html"
  }
};
const EncryptionEnabled = Template.bind({});
EncryptionEnabled.args = {
  backupServiceState: {
    backupDirPath: "/Some/User/Documents",
    defaultParent: {
      path: "/Some/User/Documents",
      fileName: "Documents"
    },
    scheduledBackupsEnabled: true,
    encryptionEnabled: true,
    lastBackupDate: 1719625747,
    lastBackupFileName: "FirefoxBackup_default_123123123.html"
  }
};

/***/ }),

/***/ 14537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DisableBackupEncryption)
/* harmony export */ });
/* harmony import */ var browser_components_backup_content_disable_backup_encryption_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12163);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73689);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * The widget for disabling password protection if the backup is already
 * encrypted.
 */
class DisableBackupEncryption extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static get queries() {
    return {
      cancelButtonEl: "#backup-disable-encryption-cancel-button",
      confirmButtonEl: "#backup-disable-encryption-confirm-button"
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
  handleCancel() {
    this.dispatchEvent(new CustomEvent("dialogCancel", {
      bubbles: true,
      composed: true
    }));
  }
  handleConfirm() {
    this.dispatchEvent(new CustomEvent("disableEncryption", {
      bubbles: true,
      composed: true
    }));
  }
  contentTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <div
        id="backup-disable-encryption-wrapper"
        aria-labelledby="backup-disable-encryption-header"
        aria-describedby="backup-disable-encryption-description"
      >
        <h1
          id="backup-disable-encryption-header"
          class="heading-medium"
          data-l10n-id="disable-backup-encryption-header"
        ></h1>
        <main id="backup-disable-encryption-content">
          <div id="backup-disable-encryption-description">
            <span
              id="backup-disable-encryption-description-span"
              data-l10n-id="disable-backup-encryption-description"
            >
              <!--TODO: finalize support page links (bug 1900467)-->
            </span>
            <a
              id="backup-disable-encryption-learn-more-link"
              is="moz-support-link"
              support-page="todo-backup"
              data-l10n-id="disable-backup-encryption-support-link"
            ></a>
          </div>
        </main>

        <moz-button-group id="backup-disable-encryption-button-group">
          <moz-button
            id="backup-disable-encryption-cancel-button"
            @click=${this.handleCancel}
            data-l10n-id="disable-backup-encryption-cancel-button"
          ></moz-button>
          <moz-button
            id="backup-disable-encryption-confirm-button"
            @click=${this.handleConfirm}
            type="primary"
            data-l10n-id="disable-backup-encryption-confirm-button"
          ></moz-button>
        </moz-button-group>
      </div>
    `;
  }
  render() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <link
        rel="stylesheet"
        href="${browser_components_backup_content_disable_backup_encryption_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      ${this.contentTemplate()}
    `;
  }
}
customElements.define("disable-backup-encryption", DisableBackupEncryption);

/***/ }),

/***/ 76194:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EnableBackupEncryption)
/* harmony export */ });
/* harmony import */ var browser_components_backup_content_enable_backup_encryption_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38955);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73689);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * Valid attributes for the enable-backup-encryption dialog type.
 *
 * @see EnableBackupEncryption.type
 */
const VALID_TYPES = Object.freeze({
  SET_PASSWORD: "set-password",
  CHANGE_PASSWORD: "change-password"
});
const VALID_L10N_IDS = new Map([[VALID_TYPES.SET_PASSWORD, "enable-backup-encryption-header"], [VALID_TYPES.CHANGE_PASSWORD, "change-backup-encryption-header"]]);

/**
 * The widget for enabling password protection if the backup is not yet
 * encrypted.
 */
class EnableBackupEncryption extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    passwordsMatch: {
      type: Boolean,
      reflect: true
    },
    passwordsRequired: {
      type: Boolean,
      reflect: true
    },
    /**
     * The "type" attribute changes the layout.
     *
     * @see VALID_TYPES
     */
    type: {
      type: String,
      reflect: true
    }
  };
  static get queries() {
    return {
      cancelButtonEl: "#backup-enable-encryption-cancel-button",
      confirmButtonEl: "#backup-enable-encryption-confirm-button",
      inputNewPasswordEl: "#new-password-input",
      inputRepeatPasswordEl: "#repeat-password-input",
      textDescriptionEl: "#backup-enable-encryption-description"
    };
  }
  constructor() {
    super();
    this.passwordsMatch = false;
    this.passwordsRequired = true;
    this.type = VALID_TYPES.SET_PASSWORD;
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
  handleCancel() {
    this.dispatchEvent(new CustomEvent("dialogCancel", {
      bubbles: true,
      composed: true
    }));
    this.resetChanges();
  }
  handleConfirm() {
    switch (this.type) {
      case VALID_TYPES.SET_PASSWORD:
        this.dispatchEvent(new CustomEvent("enableEncryption", {
          bubbles: true,
          composed: true,
          detail: {
            password: this.inputNewPasswordEl.value
          }
        }));
        break;
      case VALID_TYPES.CHANGE_PASSWORD:
        this.dispatchEvent(new CustomEvent("rerunEncryption", {
          bubbles: true,
          composed: true,
          detail: {
            password: this.inputNewPasswordEl.value
          }
        }));
        break;
    }
    this.resetChanges();
  }
  handleChangeNewPassword() {
    this.updatePasswordValidity();
  }
  handleChangeRepeatPassword() {
    this.updatePasswordValidity();
  }
  updatePasswordValidity() {
    // If the "required" attribute was previously removed, add it back
    // to make password validation work as expected.
    if (!this.passwordsRequired) {
      this.passwordsRequired = true;
    }
    let isNewPasswordInputValid = this.inputNewPasswordEl?.checkValidity();
    let isRepeatPasswordInputValid = this.inputRepeatPasswordEl?.checkValidity();
    /**
     * TODO: Before confirmation, verify FxA format rules (bug 1896772).
     * This step may involve async validation with BackupService. For instance, we have to
     * check against a list of common passwords (bug 1905140) and display a message if an
     * issue occurs (bug 1905145).
     */
    this.passwordsMatch = isNewPasswordInputValid && isRepeatPasswordInputValid && this.inputNewPasswordEl.value == this.inputRepeatPasswordEl.value;
  }
  resetChanges() {
    this.passwordsMatch = false;
    this.inputNewPasswordEl.value = "";
    this.inputRepeatPasswordEl.value = "";
    // Temporarily remove "required" attribute to remove styles for invalid inputs.
    // The attribute will be added again when we run validation.
    this.passwordsRequired = false;
  }
  contentTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <form
        id="backup-enable-encryption-wrapper"
        aria-labelledby="backup-enable-encryption-header"
        aria-describedby="backup-enable-encryption-description"
      >
        <h1
          id="backup-enable-encryption-header"
          class="heading-medium"
          data-l10n-id=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(VALID_L10N_IDS.get(this.type))}
        ></h1>
        <main id="backup-enable-encryption-content">
          ${this.type === VALID_TYPES.SET_PASSWORD ? chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html` <div id="backup-enable-encryption-description">
                <span
                  id="backup-enable-encryption-description-span"
                  data-l10n-id="enable-backup-encryption-description"
                >
                  <!--TODO: finalize support page links (bug 1900467)-->
                </span>
                <a
                  id="backup-enable-encryption-learn-more-link"
                  is="moz-support-link"
                  support-page="todo-backup"
                  data-l10n-id="enable-backup-encryption-support-link"
                ></a>
              </div>` : null}

          <fieldset id="passwords">
            <label id="new-password-label" for="new-password-input">
              <span
                id="new-password-span"
                data-l10n-id="enable-backup-encryption-create-password-label"
              ></span>
              <input
                type="password"
                id="new-password-input"
                ?required=${this.passwordsRequired}
                @input=${this.handleChangeNewPassword}
              />
            </label>
            <label id="repeat-password-label" for="repeat-password-input">
              <span
                id="repeat-password-span"
                data-l10n-id="enable-backup-encryption-repeat-password-label"
              ></span>
              <input
                type="password"
                id="repeat-password-input"
                ?required=${this.passwordsRequired}
                @input=${this.handleChangeRepeatPassword}
              />
            </label>
          </fieldset>
        </main>

        <moz-button-group id="backup-enable-encryption-button-group">
          <moz-button
            id="backup-enable-encryption-cancel-button"
            @click=${this.handleCancel}
            data-l10n-id="enable-backup-encryption-cancel-button"
          ></moz-button>
          <moz-button
            id="backup-enable-encryption-confirm-button"
            @click=${this.handleConfirm}
            type="primary"
            data-l10n-id="enable-backup-encryption-confirm-button"
            ?disabled=${!this.passwordsMatch}
          ></moz-button>
        </moz-button-group>
      </form>
    `;
  }
  render() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <link
        rel="stylesheet"
        href="${browser_components_backup_content_enable_backup_encryption_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      ${this.contentTemplate()}
    `;
  }
}
customElements.define("enable-backup-encryption", EnableBackupEncryption);

/***/ }),

/***/ 43902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RestoreFromBackup)
/* harmony export */ });
/* harmony import */ var browser_components_backup_content_restore_from_backup_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38647);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73689);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * The widget for allowing users to select and restore from a
 * a backup file.
 */
class RestoreFromBackup extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  #placeholderFileIconURL = "chrome://global/skin/icons/page-portrait.svg";
  static properties = {
    backupFilePath: {
      type: String
    },
    backupFileToRestore: {
      type: String,
      reflect: true
    },
    backupFileInfo: {
      type: Object
    },
    _fileIconURL: {
      type: String
    },
    recoveryInProgress: {
      type: Boolean
    },
    recoveryErrorCode: {
      type: Number
    }
  };
  static get queries() {
    return {
      filePicker: "#backup-filepicker-input",
      passwordInput: "#backup-password-input",
      cancelButtonEl: "#restore-from-backup-cancel-button",
      confirmButtonEl: "#restore-from-backup-confirm-button",
      chooseButtonEl: "#backup-filepicker-button"
    };
  }
  constructor() {
    super();
    this._fileIconURL = "";
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
    if (this.backupFileToRestore && !this.backupFileInfo) {
      this.getBackupFileInfo();
    }
    this.addEventListener("BackupUI:SelectNewFilepickerPath", this);
  }
  handleEvent(event) {
    if (event.type == "BackupUI:SelectNewFilepickerPath") {
      let {
        path,
        iconURL
      } = event.detail;
      this.backupFileToRestore = path;
      this._fileIconURL = iconURL;
    }
  }
  willUpdate(changedProperties) {
    if (changedProperties.has("backupFileToRestore")) {
      this.backupFileInfo = null;
      this.getBackupFileInfo();
    }
  }
  async handleChooseBackupFile() {
    this.dispatchEvent(new CustomEvent("BackupUI:ShowFilepicker", {
      bubbles: true,
      detail: {
        win: window.browsingContext,
        filter: "filterHTML",
        displayDirectoryPath: this.backupFileToRestore
      }
    }));
  }
  getBackupFileInfo() {
    let backupFile = this.backupFileToRestore;
    if (!backupFile) {
      return;
    }
    this.dispatchEvent(new CustomEvent("getBackupFileInfo", {
      bubbles: true,
      composed: true,
      detail: {
        backupFile
      }
    }));
  }
  handleCancel() {
    this.dispatchEvent(new CustomEvent("dialogCancel", {
      bubbles: true,
      composed: true
    }));
  }
  handleConfirm() {
    let backupFile = this.backupFileToRestore;
    if (!backupFile || this.recoveryInProgress) {
      return;
    }
    let backupPassword = this.passwordInput?.value;
    this.dispatchEvent(new CustomEvent("restoreFromBackupConfirm", {
      bubbles: true,
      composed: true,
      detail: {
        backupFile,
        backupPassword
      }
    }));
  }
  controlsTemplate() {
    let iconURL = this.backupFileToRestore && (this._fileIconURL || this.#placeholderFileIconURL);
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <fieldset id="backup-restore-controls">
        <fieldset id="backup-filepicker-controls">
          <label
            id="backup-filepicker-label"
            for="backup-filepicker-input"
            data-l10n-id="restore-from-backup-filepicker-label"
          ></label>
          <div id="backup-filepicker">
            <input
              id="backup-filepicker-input"
              type="text"
              readonly
              value=${this.backupFileToRestore}
              style="background-image: url(${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(iconURL)})"
            />
            <moz-button
              id="backup-filepicker-button"
              @click=${this.handleChooseBackupFile}
              data-l10n-id="restore-from-backup-file-choose-button"
              aria-controls="backup-filepicker-input"
            ></moz-button>
          </div>
        </fieldset>

        <fieldset id="password-entry-controls">
          ${this.backupFileInfo?.isEncrypted ? this.passwordEntryTemplate() : null}
        </fieldset>
      </fieldset>
    `;
  }
  passwordEntryTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html` <fieldset id="backup-password">
      <label id="backup-password-label" for="backup-password-input">
        <span
          id="backup-password-span"
          data-l10n-id="restore-from-backup-password-label"
        ></span>
        <input type="password" id="backup-password-input" />
      </label>
      <label
        id="backup-password-description"
        data-l10n-id="restore-from-backup-password-description"
      ></label>
    </fieldset>`;
  }
  contentTemplate() {
    let buttonL10nId = !this.recoveryInProgress ? "restore-from-backup-confirm-button" : "restore-from-backup-restoring-button";
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <div
        id="restore-from-backup-wrapper"
        aria-labelledby="restore-from-backup-header"
        aria-describedby="restore-from-backup-description"
      >
        <h1
          id="restore-from-backup-header"
          class="heading-medium"
          data-l10n-id="restore-from-backup-header"
        ></h1>
        <main id="restore-from-backup-content">
          ${this.backupFileInfo ? this.descriptionTemplate() : null}
          ${this.controlsTemplate()}
        </main>

        <moz-button-group id="restore-from-backup-button-group">
          <moz-button
            id="restore-from-backup-cancel-button"
            @click=${this.handleCancel}
            data-l10n-id="restore-from-backup-cancel-button"
          ></moz-button>
          <moz-button
            id="restore-from-backup-confirm-button"
            @click=${this.handleConfirm}
            type="primary"
            data-l10n-id="${buttonL10nId}"
            ?disabled=${!this.backupFileToRestore || this.recoveryInProgress}
          ></moz-button>
        </moz-button-group>
      </div>
    `;
  }
  descriptionTemplate() {
    let {
      date
    } = this.backupFileInfo;
    let dateTime = date && new Date(date).getTime();
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <div id="restore-from-backup-description">
        <span
          id="restore-from-backup-description-span"
          data-l10n-id="restore-from-backup-description-with-metadata"
          data-l10n-args=${JSON.stringify({
      date: dateTime
    })}
        ></span>
        <a
          id="restore-from-backup-learn-more-link"
          is="moz-support-link"
          support-page="todo-backup"
          data-l10n-id="restore-from-backup-support-link"
        ></a>
      </div>
    `;
  }
  render() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <link
        rel="stylesheet"
        href="${browser_components_backup_content_restore_from_backup_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      ${this.contentTemplate()}
    `;
  }
}
customElements.define("restore-from-backup", RestoreFromBackup);

/***/ }),

/***/ 84647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TurnOffScheduledBackups)
/* harmony export */ });
/* harmony import */ var browser_components_backup_content_turn_off_scheduled_backups_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12578);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73689);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * The widget for showing available options when users want to turn on
 * scheduled backups.
 */
class TurnOffScheduledBackups extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static get queries() {
    return {
      cancelButtonEl: "#backup-turn-off-scheduled-cancel-button",
      confirmButtonEl: "#backup-turn-off-scheduled-confirm-button"
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
  handleCancel() {
    this.dispatchEvent(new CustomEvent("dialogCancel", {
      bubbles: true,
      composed: true
    }));
  }
  handleConfirm() {
    this.dispatchEvent(new CustomEvent("turnOffScheduledBackups", {
      bubbles: true,
      composed: true
    }));
  }
  contentTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <div
        id="backup-turn-off-scheduled-wrapper"
        aria-labelledby="backup-turn-off-scheduled-header"
        aria-describedby="backup-turn-off-scheduled-description"
      >
        <h1
          id="backup-turn-off-scheduled-header"
          class="heading-medium"
          data-l10n-id="turn-off-scheduled-backups-header"
        ></h1>
        <main id="backup-turn-off-scheduled-content">
          <div id="backup-turn-off-scheduled-description">
            <span
              id="backup-turn-off-scheduled-description-span"
              data-l10n-id="turn-off-scheduled-backups-description"
            ></span>
            <!--TODO: finalize support page links (bug 1900467)-->
            <a
              id="backup-turn-off-scheduled-learn-more-link"
              is="moz-support-link"
              support-page="todo-backup"
              data-l10n-id="turn-off-scheduled-backups-support-link"
            ></a>
          </div>
        </main>

        <moz-button-group id="backup-turn-off-scheduled-button-group">
          <moz-button
            id="backup-turn-off-scheduled-cancel-button"
            @click=${this.handleCancel}
            data-l10n-id="turn-off-scheduled-backups-cancel-button"
          ></moz-button>
          <moz-button
            id="backup-turn-off-scheduled-confirm-button"
            @click=${this.handleConfirm}
            type="primary"
            data-l10n-id="turn-off-scheduled-backups-confirm-button"
          ></moz-button>
        </moz-button-group>
      </div>
    `;
  }
  render() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <link
        rel="stylesheet"
        href="${browser_components_backup_content_turn_off_scheduled_backups_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      ${this.contentTemplate()}
    `;
  }
}
customElements.define("turn-off-scheduled-backups", TurnOffScheduledBackups);

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
  #placeholderIconURL = "chrome://global/skin/icons/page-portrait.svg";
  static properties = {
    defaultIconURL: {
      type: String,
      reflect: true
    },
    defaultLabel: {
      type: String,
      reflect: true
    },
    defaultPath: {
      type: String,
      reflect: true
    },
    _newIconURL: {
      type: String
    },
    _newLabel: {
      type: String
    },
    _newPath: {
      type: String
    },
    showPasswordOptions: {
      type: Boolean,
      reflect: true
    },
    passwordsMatch: {
      type: Boolean,
      reflect: true
    }
  };
  static get queries() {
    return {
      cancelButtonEl: "#backup-turn-on-scheduled-cancel-button",
      confirmButtonEl: "#backup-turn-on-scheduled-confirm-button",
      filePathButtonEl: "#backup-location-filepicker-button",
      filePathInputCustomEl: "#backup-location-filepicker-input-custom",
      filePathInputDefaultEl: "#backup-location-filepicker-input-default",
      passwordOptionsCheckboxEl: "#sensitive-data-checkbox-input",
      passwordOptionsExpandedEl: "#passwords",
      inputNewPasswordEl: "#new-password-input",
      inputRepeatPasswordEl: "#repeat-password-input"
    };
  }
  constructor() {
    super();
    this.defaultIconURL = "";
    this.defaultLabel = "";
    this.defaultPath = "";
    this._newIconURL = "";
    this._newLabel = "";
    this._newPath = "";
    this.showPasswordOptions = false;
    this.passwordsMatch = false;
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
    this.addEventListener("BackupUI:SelectNewFilepickerPath", this);
  }
  handleEvent(event) {
    if (event.type == "BackupUI:SelectNewFilepickerPath") {
      let {
        path,
        filename,
        iconURL
      } = event.detail;
      this._newPath = path;
      this._newLabel = filename;
      this._newIconURL = iconURL;
    }
  }
  async handleChooseLocation() {
    this.dispatchEvent(new CustomEvent("BackupUI:ShowFilepicker", {
      bubbles: true,
      detail: {
        win: window.browsingContext
      }
    }));
  }
  handleCancel() {
    this.dispatchEvent(new CustomEvent("dialogCancel", {
      bubbles: true,
      composed: true
    }));
    this.resetChanges();
  }
  handleConfirm() {
    /**
     * TODO:
     * Before confirmation, verify passwords match and FxA format rules (bug 1896772).
     */
    let detail = {
      parentDirPath: this._newPath || this.defaultPath
    };
    if (this.showPasswordOptions && this.passwordsMatch) {
      detail.password = this.inputNewPasswordEl.value;
    }
    this.dispatchEvent(new CustomEvent("turnOnScheduledBackups", {
      bubbles: true,
      composed: true,
      detail
    }));
    this.resetChanges();
  }
  handleTogglePasswordOptions() {
    this.showPasswordOptions = this.passwordOptionsCheckboxEl?.checked;
    this.passwordsMatch = false;
  }
  handleChangeNewPassword() {
    this.updatePasswordValidity();
  }
  handleChangeRepeatPassword() {
    this.updatePasswordValidity();
  }
  updatePasswordValidity() {
    let isNewPasswordInputValid = this.inputNewPasswordEl?.checkValidity();
    let isRepeatPasswordInputValid = this.inputRepeatPasswordEl?.checkValidity();
    this.passwordsMatch = isNewPasswordInputValid && isRepeatPasswordInputValid && this.inputNewPasswordEl.value == this.inputRepeatPasswordEl.value;
  }
  resetChanges() {
    this._newPath = "";
    this._newIconURL = "";
    this._newLabel = "";
    this.showPasswordOptions = false;
    this.passwordOptionsCheckboxEl.checked = false;
    this.passwordsMatch = false;
  }
  defaultFilePathInputTemplate() {
    let filename = this.defaultLabel;
    let iconURL = this.defaultIconURL || this.#placeholderIconURL;
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <input
        id="backup-location-filepicker-input-default"
        class="backup-location-filepicker-input"
        type="text"
        readonly
        data-l10n-id="turn-on-scheduled-backups-location-default-folder"
        data-l10n-args=${JSON.stringify({
      recommendedFolder: filename
    })}
        data-l10n-attrs="value"
        style=${`background-image: url(${iconURL})`}
      />
    `;
  }
  customFilePathInputTemplate() {
    let filename = this._newLabel;
    let iconURL = this._newIconURL || this.#placeholderIconURL;
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <input
        id="backup-location-filepicker-input-custom"
        class="backup-location-filepicker-input"
        type="text"
        readonly
        value=${filename}
        style=${`background-image: url(${iconURL})`}
      />
    `;
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
          <div id="backup-location-filepicker">
            ${!this._newPath ? this.defaultFilePathInputTemplate() : this.customFilePathInputTemplate()}
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
        <input type="password" id="new-password-input" required @input=${this.handleChangeNewPassword}/>
    </label>
      <label id="repeat-password-label" for="repeat-password-input">
        <span id="repeat-password-span" data-l10n-id="turn-on-scheduled-backups-encryption-repeat-password-label"></span>
        <input type="password" id="repeat-password-input" required @input=${this.handleChangeRepeatPassword}/>
      </label>
    </fieldset>
  </fieldset>`;
  }
  contentTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <form
        id="backup-turn-on-scheduled-wrapper"
        aria-labelledby="backup-turn-on-scheduled-header"
        aria-describedby="backup-turn-on-scheduled-description"
      >
        <h1
          id="backup-turn-on-scheduled-header"
          class="heading-medium"
          data-l10n-id="turn-on-scheduled-backups-header"
        ></h1>
        <main id="backup-turn-on-scheduled-content">
          <div id="backup-turn-on-scheduled-description">
            <span
              id="backup-turn-on-scheduled-description-span"
              data-l10n-id="turn-on-scheduled-backups-description"
            ></span>
            <!--TODO: finalize support page links (bug 1900467)-->
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
            form="backup-turn-on-scheduled-wrapper"
            @click=${this.handleConfirm}
            type="primary"
            data-l10n-id="turn-on-scheduled-backups-confirm-button"
            ?disabled=${this.showPasswordOptions && !this.passwordsMatch}
          ></moz-button>
        </moz-button-group>
      </form>
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

module.exports = __webpack_require__.p + "backup-settings.0c6694ae948fe9149154.css";

/***/ }),

/***/ 12163:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "disable-backup-encryption.ab465ac83584db13a46f.css";

/***/ }),

/***/ 38955:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "enable-backup-encryption.f5d87f71a0b71cd78b54.css";

/***/ }),

/***/ 38647:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "restore-from-backup.5d7846f5ff6861a69814.css";

/***/ }),

/***/ 12578:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "turn-off-scheduled-backups.f6dd564377752133c9c4.css";

/***/ }),

/***/ 95010:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "turn-on-scheduled-backups.75031d48df987444e78f.css";

/***/ }),

/***/ 9024:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "preferences.c86cb8cdf625b0a4c60e.css";

/***/ })

}]);
//# sourceMappingURL=backup-settings-stories.7a427290.iframe.bundle.js.map