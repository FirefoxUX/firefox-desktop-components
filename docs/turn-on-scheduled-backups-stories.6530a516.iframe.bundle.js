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

/***/ 881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecommendedFolder": () => (/* binding */ RecommendedFolder),
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
  backupFilePath
}) => lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
  <moz-card style="width: 27.8rem;">
    <turn-on-scheduled-backups
      .backupFilePath=${backupFilePath}
    ></turn-on-scheduled-backups>
  </moz-card>
`;
const RecommendedFolder = Template.bind({});
RecommendedFolder.args = {
  backupFilePath: "Documents"
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
        <details id="moz-card-details">
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

module.exports = __webpack_require__.p + "turn-on-scheduled-backups.cd47b47dfacf92e7bd47.css";

/***/ }),

/***/ 48058:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-card.a11b60fd25ab6480bd49.css";

/***/ })

}]);
//# sourceMappingURL=turn-on-scheduled-backups-stories.6530a516.iframe.bundle.js.map