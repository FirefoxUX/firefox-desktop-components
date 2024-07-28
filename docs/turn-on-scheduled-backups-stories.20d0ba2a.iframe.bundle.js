"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[7032],{

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

/***/ 881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomLocation": () => (/* binding */ CustomLocation),
/* harmony export */   "Default": () => (/* binding */ Default),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_elements_moz_card_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63922);
/* harmony import */ var _turn_on_scheduled_backups_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2369);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// eslint-disable-next-line import/no-unresolved



window.MozXULElement.insertFTLIfNeeded("locales-preview/backupSettings.ftl");
window.MozXULElement.insertFTLIfNeeded("branding/brand.ftl");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/Backup/Turn On Scheduled Backups",
  component: "turn-on-scheduled-backups",
  argTypes: {}
});
const Template = ({
  defaultPath,
  _newPath,
  defaultLabel,
  _newLabel
}) => lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
  <moz-card style="width: 27.8rem;">
    <turn-on-scheduled-backups
      defaultPath=${defaultPath}
      _newPath=${(0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(_newPath)}
      defaultLabel=${defaultLabel}
      _newLabel=${(0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(_newLabel)}
    ></turn-on-scheduled-backups>
  </moz-card>
`;
const Default = Template.bind({});
Default.args = {
  defaultPath: "/Some/User/Documents",
  defaultLabel: "Documents"
};
const CustomLocation = Template.bind({});
CustomLocation.args = {
  ...Default.args,
  _newPath: "/Some/Test/Custom/Dir",
  _newLabel: "Dir"
};

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

/***/ 95010:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "turn-on-scheduled-backups.248485c58c1837c59e65.css";

/***/ }),

/***/ 48058:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-card.d9ac61c4de254bf74cdf.css";

/***/ })

}]);
//# sourceMappingURL=turn-on-scheduled-backups-stories.20d0ba2a.iframe.bundle.js.map