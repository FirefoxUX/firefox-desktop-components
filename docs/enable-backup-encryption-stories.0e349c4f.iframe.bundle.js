"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[6349],{

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

/***/ 35118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePassword": () => (/* binding */ ChangePassword),
/* harmony export */   "SetPassword": () => (/* binding */ SetPassword),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_elements_moz_card_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63922);
/* harmony import */ var _enable_backup_encryption_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76194);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// eslint-disable-next-line import/no-unresolved



window.MozXULElement.insertFTLIfNeeded("locales-preview/backupSettings.ftl");
window.MozXULElement.insertFTLIfNeeded("branding/brand.ftl");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/Backup/Enable Encryption",
  component: "enable-backup-encryption",
  argTypes: {
    type: {
      control: {
        type: "select"
      },
      options: ["set-password", "change-password"]
    }
  }
});
const Template = ({
  type
}) => lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
  <moz-card style="width: 23.94rem;">
    <enable-backup-encryption type=${type}></enable-backup-encryption>
  </moz-card>
`;
const SetPassword = Template.bind({});
SetPassword.args = {
  type: "set-password"
};
const ChangePassword = Template.bind({});
ChangePassword.args = {
  type: "change-password"
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

/***/ 38955:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "enable-backup-encryption.f5d87f71a0b71cd78b54.css";

/***/ }),

/***/ 48058:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-card.d9ac61c4de254bf74cdf.css";

/***/ })

}]);
//# sourceMappingURL=enable-backup-encryption-stories.0e349c4f.iframe.bundle.js.map