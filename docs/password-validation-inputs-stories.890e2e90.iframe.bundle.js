"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[48,6606],{

/***/ 17240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PasswordRulesTooltip)
/* harmony export */ });
/* harmony import */ var browser_components_backup_content_password_rules_tooltip_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62782);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11540);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48334);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * The widget for enabling password protection if the backup is not yet
 * encrypted.
 */
class PasswordRulesTooltip extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    hasEmail: {
      type: Boolean
    },
    tooShort: {
      type: Boolean
    },
    open: {
      type: Boolean
    }
  };
  static get queries() {
    return {
      passwordRulesEl: "#password-rules-wrapper"
    };
  }
  constructor() {
    super();
    this.hasEmail = false;
    this.tooShort = false;
    this._onResize = null;
  }
  _debounce(fn, delay) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn(...args), delay);
    };
  }
  _handleResize() {
    if (this.open) {
      this.positionPopover();
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this._onResize = this._debounce(() => this._handleResize(), 200);
    window.addEventListener("resize", this._onResize);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._onResize) {
      window.removeEventListener("resize", this._onResize);
    }
  }
  show() {
    this.passwordRulesEl.showPopover();
    this.positionPopover();
  }
  hide() {
    this.passwordRulesEl.hidePopover();
  }
  positionPopover() {
    const anchorRect = this.getBoundingClientRect();
    const isWideViewport = window.innerWidth >= 1200;
    const leftPos = anchorRect.left;
    if (isWideViewport) {
      // Position to the right of the input
      const topPos = anchorRect.top;
      this.passwordRulesEl.style.left = `${leftPos}px`;
      this.passwordRulesEl.style.top = `${topPos}px`;
    } else {
      // Position below the input
      const topPos = anchorRect.bottom;
      this.passwordRulesEl.style.left = `${leftPos}px`;
      this.passwordRulesEl.style.top = `${topPos}px`;
    }
  }
  _onBeforeToggle(e) {
    this.open = e.newState == "open";
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_backup_content_password_rules_tooltip_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <div
        id="password-rules-wrapper"
        role="tooltip"
        aria-describedby="password-rules-header"
        popover="manual"
        @beforetoggle=${this._onBeforeToggle}
      >
        <h2
          id="password-rules-header"
          data-l10n-id="password-rules-header"
        ></h2>
        <ul>
          <li class=${this.tooShort && "warning"}>
            <span
              data-l10n-id="password-rules-length-description"
              class="rule-description"
              aria-labelledby="password-rules-header"
            ></span>
          </li>
          <li class=${this.hasEmail && "warning"}>
            <span
              data-l10n-id="password-rules-email-description"
              class="rule-description"
              aria-labelledby="password-rules-header"
            ></span>
          </li>
        </ul>
      </div>
    `;
  }
}
customElements.define("password-rules-tooltip", PasswordRulesTooltip);

/***/ }),

/***/ 29023:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11540);
/* harmony import */ var chrome_global_content_elements_moz_card_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30048);
/* harmony import */ var _password_validation_inputs_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63706);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// eslint-disable-next-line import/no-unresolved



window.MozXULElement.insertFTLIfNeeded("browser/backupSettings.ftl");
window.MozXULElement.insertFTLIfNeeded("branding/brand.ftl");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/Backup/Password Inputs",
  component: "password-validation-inputs",
  argTypes: {}
});
const Template = () => (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <moz-card style="position: relative; width: 25rem;">
    <password-validation-inputs></password-validation-inputs>
  </moz-card>
`;
const Default = Template.bind({});

/***/ }),

/***/ 30048:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozCard)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_card_moz_card_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44170);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11540);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48334);

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
 * is visible. You can use the "expanded" attribute to force the accordion
 * card to show its content on initial render.
 *
 * @property {string} heading - The heading text that will be used for the card.
 * @property {string} iconSrc - Path to the icon that should be displayed in the card.
 * @property {string} type - (optional) The type of card. No type specified
 *   will be the default card. The other available type is "accordion"
 * @property {boolean} expanded - A flag to indicate whether the card is
 *  expanded or not. Can be used to expand the content section of the
 *  accordion card on initial render.
 * @slot content - The content to show inside of the card.
 */
class MozCard extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static queries = {
    detailsEl: "#moz-card-details",
    headingEl: "#heading",
    contentEl: "#content",
    summaryEl: "summary",
    contentSlotEl: "#content-slot"
  };
  static properties = {
    heading: {
      type: String,
      fluent: true
    },
    iconSrc: {
      type: String
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
    this.type = "default";
    this.expanded = false;
  }
  headingTemplate() {
    if (!this.heading) {
      return "";
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <div id="heading-wrapper" part="moz-card-heading-wrapper">
        ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.when)(this.type == "accordion", () => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div class="chevron-icon"></div>`)}
        ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.when)(!!this.iconSrc, () => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<img
              id="heading-icon"
              src=${this.iconSrc}
              role="presentation"
            />`)}
        <span id="heading" title=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.heading)} part="heading"
          >${this.heading}</span
        >
      </div>
    `;
  }
  cardTemplate() {
    if (this.type === "accordion") {
      return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
        <details
          id="moz-card-details"
          @toggle=${this.onToggle}
          ?open=${this.expanded}
        >
          <summary part="summary">${this.headingTemplate()}</summary>
          <div id="content"><slot id="content-slot"></slot></div>
        </details>
      `;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <div id="moz-card-details">
        ${this.headingTemplate()}
        <div id="content" aria-describedby="content">
          <slot></slot>
        </div>
      </div>
    `;
  }
  onToggle() {
    this.expanded = this.detailsEl.open;
    this.dispatchEvent(new ToggleEvent("toggle", {
      newState: this.detailsEl.open ? "open" : "closed",
      oldState: this.detailsEl.open ? "closed" : "open"
    }));
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
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

/***/ 44170:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-card.d302a3911a68d76f2067.css";

/***/ }),

/***/ 62782:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "password-rules-tooltip.7bf614ee40389a534862.css";

/***/ }),

/***/ 63706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PasswordValidationInputs)
/* harmony export */ });
/* harmony import */ var browser_components_backup_content_password_validation_inputs_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78312);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11540);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48334);
/* harmony import */ var chrome_browser_content_backup_password_rules_tooltip_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17240);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




// eslint-disable-next-line import/no-unassigned-import


/**
 * The widget for enabling password protection if the backup is not yet
 * encrypted.
 */
class PasswordValidationInputs extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    _hasEmail: {
      type: Boolean,
      state: true
    },
    _passwordsMatch: {
      type: Boolean,
      state: true
    },
    _passwordsValid: {
      type: Boolean,
      state: true
    },
    _tooShort: {
      type: Boolean,
      state: true
    },
    createPasswordLabelL10nId: {
      type: String,
      reflect: true,
      attribute: "create-password-label-l10n-id"
    },
    embeddedFxBackupOptIn: {
      type: Boolean,
      reflect: true,
      attribute: "embedded-fx-backup-opt-in"
    }
  };
  static get queries() {
    return {
      formEl: "#password-inputs-form",
      inputNewPasswordEl: "#new-password-input",
      inputRepeatPasswordEl: "#repeat-password-input",
      passwordRulesEl: "#password-rules",
      repeatPasswordErrorEl: "#repeat-password-error"
    };
  }
  constructor() {
    super();
    this._tooShort = true;
    this._hasEmail = false;
    this._passwordsMatch = false;
    this._passwordsValid = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this._onKeydown = e => {
      if (e.key === "Escape" && this.passwordRulesEl.open) {
        this.passwordRulesEl.hide();
        e.stopPropagation();
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", this._onKeydown, true);
  }
  disconnectedCallback() {
    document.removeEventListener("keydown", this._onKeydown, true);
    super.disconnectedCallback();
  }
  setInputValidity(input, isValid, describedById = null) {
    input.setAttribute("aria-invalid", isValid ? "false" : "true");
    if (describedById) {
      input.setAttribute("aria-describedby", describedById);
    } else {
      input.removeAttribute("aria-describedby");
    }
  }
  reset() {
    this.formEl?.reset();
    if (this.inputNewPasswordEl) {
      this.inputNewPasswordEl.revealPassword = false;
      this.setInputValidity(this.inputNewPasswordEl, true);
    }
    if (this.inputRepeatPasswordEl) {
      this.inputRepeatPasswordEl.revealPassword = false;
      this.setInputValidity(this.inputRepeatPasswordEl, true);
    }
    this._hasEmail = false;
    this._tooShort = true;
    this._passwordsMatch = false;
    this._passwordsValid = false;
  }
  handleFocusNewPassword() {
    this.passwordRulesEl.show();
  }
  handleBlurNewPassword(event) {
    if (event.target.checkValidity()) {
      this.passwordRulesEl.hide();
    }
  }
  handleChangeNewPassword() {
    this.updatePasswordValidity();
  }
  handleChangeRepeatPassword() {
    this.updatePasswordValidity();
  }
  updatePasswordValidity() {
    const emailRegex = /^[\w!#$%&'*+/=?^`{|}~.-]+@[A-Z0-9-]+\.[A-Z0-9.-]+$/i;
    const l10n = new Localization(["browser/backupSettings.ftl"], true);
    this._hasEmail = emailRegex.test(this.inputNewPasswordEl.value);
    if (this._hasEmail) {
      const invalid_password_email_l10n_message = l10n.formatValueSync("password-validity-has-email");
      this.inputNewPasswordEl.setCustomValidity(invalid_password_email_l10n_message);
    } else {
      this.inputNewPasswordEl.setCustomValidity("");
    }
    const newPassValidity = this.inputNewPasswordEl.validity;
    this._tooShort = newPassValidity?.valueMissing || newPassValidity?.tooShort;
    const newInvalid = !newPassValidity?.valid;
    this.setInputValidity(this.inputNewPasswordEl, !newInvalid, "password-rules-tooltip");
    this._passwordsMatch = this.inputNewPasswordEl.value == this.inputRepeatPasswordEl.value;
    if (!this._passwordsMatch) {
      this.inputRepeatPasswordEl.setCustomValidity(l10n.formatValueSync("password-validity-do-not-match"));
      this.setInputValidity(this.inputRepeatPasswordEl, false, "repeat-password-error");
      document.l10n.setAttributes(this.repeatPasswordErrorEl, "password-validity-do-not-match");
    } else {
      this.inputRepeatPasswordEl.setCustomValidity("");
      this.setInputValidity(this.inputRepeatPasswordEl, true);
    }
    const repeatPassValidity = this.inputRepeatPasswordEl.validity;
    this._passwordsValid = newPassValidity?.valid && repeatPassValidity?.valid && this._passwordsMatch;
  }

  /**
   * Dispatches a custom event whenever validity changes.
   *
   * @param {Map<string, any>} changedProperties a Map of recently changed properties and their new values
   */
  updated(changedProperties) {
    if (!changedProperties.has("_passwordsValid")) {
      return;
    }
    if (this._passwordsValid) {
      this.dispatchEvent(new CustomEvent("ValidPasswordsDetected", {
        bubbles: true,
        composed: true,
        detail: {
          password: this.inputNewPasswordEl.value
        }
      }));
    } else {
      this.dispatchEvent(new CustomEvent("InvalidPasswordsDetected", {
        bubbles: true,
        composed: true
      }));
    }
  }
  contentTemplate() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <div id="password-inputs-wrapper" aria-live="polite">
        <form id="password-inputs-form">
          <!--TODO: (bug 1909983) change first input field label for the "change-password" dialog-->
          <label id="new-password-label" for="new-password-input">
            <div id="new-password-label-wrapper-span-input">
              <span
                id="new-password-span"
                data-l10n-id=${this.createPasswordLabelL10nId || "enable-backup-encryption-create-password-label"}
              ></span>
              <input
                type="password"
                id="new-password-input"
                minlength="8"
                required
                aria-describedby="password-rules-tooltip"
                @input=${this.handleChangeNewPassword}
                @blur=${this.handleBlurNewPassword}
                @mouseenter=${this.handleFocusNewPassword}
                @focus=${this.handleFocusNewPassword}
              />
              <!--TODO: (bug 1909984) improve how we read out the first input field for screen readers-->
            </div>
          </label>
          <!--TODO: (bug 1909984) look into how the tooltip vs dialog behaves when pressing the ESC key-->
          <password-rules-tooltip
            id="password-rules"
            role="tooltip"
            .hasEmail=${this._hasEmail}
            .tooShort=${this._tooShort}
            ?embedded-fx-backup-opt-in=${this.embeddedFxBackupOptIn}
          ></password-rules-tooltip>
          <label id="repeat-password-label" for="repeat-password-input">
            <span
              id="repeat-password-span"
              data-l10n-id="enable-backup-encryption-repeat-password-label"
            ></span>
            <input
              type="password"
              id="repeat-password-input"
              required
              @input=${this.handleChangeRepeatPassword}
            />
            <span
              id="repeat-password-error"
              role="alert"
              class="field-error"
            ></span>
          </label>
        </form>
      </div>
    `;
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_backup_content_password_validation_inputs_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      ${this.contentTemplate()}
    `;
  }
}
customElements.define("password-validation-inputs", PasswordValidationInputs);

/***/ }),

/***/ 78312:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "password-validation-inputs.9d90898b91a04b0775bd.css";

/***/ })

}]);
//# sourceMappingURL=password-validation-inputs-stories.890e2e90.iframe.bundle.js.map