"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[4045],{

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
    if (!backupFile) {
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
            data-l10n-id="restore-from-backup-confirm-button"
          ></moz-button>
        </moz-button-group>
      </div>
    `;
  }
  descriptionTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <div id="restore-from-backup-description">
        <span
          id="restore-from-backup-description-span"
          data-l10n-id="restore-from-backup-description-with-metadata"
          data-l10n-args=${JSON.stringify({
      date: new Date(this.backupFileInfo?.date).getTime()
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

/***/ 1881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackupFound": () => (/* binding */ BackupFound),
/* harmony export */   "EncryptedBackupFound": () => (/* binding */ EncryptedBackupFound),
/* harmony export */   "NoBackupFound": () => (/* binding */ NoBackupFound),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_elements_moz_card_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63922);
/* harmony import */ var _restore_from_backup_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43902);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// eslint-disable-next-line import/no-unresolved

// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

window.MozXULElement.insertFTLIfNeeded("locales-preview/backupSettings.ftl");
window.MozXULElement.insertFTLIfNeeded("branding/brand.ftl");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/Backup/Restore from Backup",
  component: "restore-from-backup",
  argTypes: {}
});
const Template = ({
  backupFilePath,
  backupFileToRestore,
  backupFileInfo
}) => lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
  <moz-card style="width: fit-content;">
    <restore-from-backup
      .backupFilePath=${backupFilePath}
      .backupFileToRestore=${backupFileToRestore}
      .backupFileInfo=${backupFileInfo}
    ></restore-from-backup>
  </moz-card>
`;
const BackupFound = Template.bind({});
BackupFound.args = {
  backupFilePath: "/Some/User/Documents",
  backupFileToRestore: "/Some/User/Documents/Firefox Backup/backup.html",
  backupFileInfo: {
    date: new Date(),
    isEncrypted: null
  }
};
const EncryptedBackupFound = Template.bind({});
EncryptedBackupFound.args = {
  backupFilePath: "/Some/User/Documents",
  backupFileToRestore: "/Some/User/Documents/Firefox Backup/backup.html",
  backupFileInfo: {
    date: new Date(),
    isEncrypted: true
  }
};
const NoBackupFound = Template.bind({});

/***/ }),

/***/ 63922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozCard)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_card_moz_card_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48058);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73689);

/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*-
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * Cards contain content and actions about a single subject.
 * There are two card types:
 * The default type where no type attribute is required and the card
 * will have no extra functionality.
 *
 * The "accordion" type will initially not show any content. The card
 * will contain an arrow to expand the card so that all of the content
 * is visible.
 *
 *
 * @property {string} heading - The heading text that will be used for the card.
 * @property {string} icon - (optional) A flag to indicate the header should include an icon
 * @property {string} type - (optional) The type of card. No type specified
 *   will be the default card. The other available type is "accordion"
 * @slot content - The content to show inside of the card.
 */
class MozCard extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static queries = {
    detailsEl: "#moz-card-details",
    headingEl: "#heading",
    contentSlotEl: "#content"
  };
  static properties = {
    heading: {
      type: String
    },
    icon: {
      type: Boolean
    },
    type: {
      type: String,
      reflect: true
    },
    expanded: {
      type: Boolean
    }
  };
  constructor() {
    super();
    this.expanded = false;
    this.type = "default";
  }
  headingTemplate() {
    if (!this.heading) {
      return "";
    }
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <div id="heading-wrapper">
        ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.when)(this.type == "accordion", () => chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`<div class="chevron-icon"></div>`)}
        ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.when)(this.icon, () => chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`<div part="icon" id="heading-icon" role="presentation"></div>`)}
        <span id="heading">${this.heading}</span>
      </div>
    `;
  }
  cardTemplate() {
    if (this.type === "accordion") {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
        <details id="moz-card-details" @toggle="${this.onToggle}">
          <summary>${this.headingTemplate()}</summary>
          <div id="content"><slot></slot></div>
        </details>
      `;
    }
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      ${this.headingTemplate()}
      <div id="content" aria-describedby="content">
        <slot></slot>
      </div>
    `;
  }
  /**
   * Handles the click event on the chevron icon.
   *
   * Without this, the click event would be passed to
   * toggleDetails which would force the details element
   * to stay open.
   *
   * @memberof MozCard
   */
  onDetailsClick() {
    this.toggleDetails();
  }

  /**
   * @param {boolean} force - Used to force open or force close the
   * details element.
   * @memberof MozCard
   */
  toggleDetails(force) {
    this.detailsEl.open = force ?? !this.detailsEl.open;
  }
  onToggle() {
    this.dispatchEvent(new ToggleEvent("toggle", {
      newState: this.detailsEl.open ? "open" : "closed",
      oldState: this.detailsEl.open ? "closed" : "open"
    }));
  }
  render() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_card_moz_card_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <article
        class="moz-card"
        aria-labelledby=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.heading ? "heading" : undefined)}
      >
        ${this.cardTemplate()}
      </article>
    `;
  }
}
customElements.define("moz-card", MozCard);

/***/ }),

/***/ 38647:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "restore-from-backup.5d7846f5ff6861a69814.css";

/***/ }),

/***/ 48058:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-card.d9ac61c4de254bf74cdf.css";

/***/ })

}]);
//# sourceMappingURL=restore-from-backup-stories.6368cbb9.iframe.bundle.js.map