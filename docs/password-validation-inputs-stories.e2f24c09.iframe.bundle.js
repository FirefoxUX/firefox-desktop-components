"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[3967,3922],{

/***/ 67378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PasswordRulesTooltip)
/* harmony export */ });
/* harmony import */ var browser_components_backup_content_password_rules_tooltip_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49154);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73689);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * The widget for enabling password protection if the backup is not yet
 * encrypted.
 */
class PasswordRulesTooltip extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    hasCommon: {
      type: Boolean
    },
    hasEmail: {
      type: Boolean
    },
    tooShort: {
      type: Boolean
    },
    supportBaseLink: {
      type: String
    }
  };
  static get queries() {
    return {
      passwordRulesEl: "#password-rules-wrapper"
    };
  }
  constructor() {
    super();
    this.hasCommon = false;
    this.hasEmail = false;
    this.tooShort = false;
    this.supportBaseLink = "";
  }
  getRuleStateConstants(hasInvalidCondition) {
    if (hasInvalidCondition) {
      return {
        class: "warning",
        icon: "chrome://global/skin/icons/warning.svg",
        l10nId: "password-rules-a11y-warning"
      };
    }
    return {
      class: "success",
      icon: "chrome://global/skin/icons/check-filled.svg",
      l10nId: "password-rules-a11y-success"
    };
  }
  render() {
    let lengthConstants = this.getRuleStateConstants(this.tooShort);
    let emailConstants = this.getRuleStateConstants(this.hasEmail);
    // TODO: (bug 1905140) read list of common passwords - default to success state for now
    let commonConstants = this.getRuleStateConstants(this.hasCommon);
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <link
        rel="stylesheet"
        href="${browser_components_backup_content_password_rules_tooltip_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <div id="password-rules-wrapper" aria-live="polite">
        <h2
          id="password-rules-header"
          data-l10n-id="password-rules-header"
        ></h2>
        <ul>
          <li>
            <img
              data-l10n-id=${lengthConstants.l10nId}
              class="icon ${lengthConstants.class}"
              src=${lengthConstants.icon}
            />
            <span
              data-l10n-id="password-rules-length-description"
              class="rule-description"
            ></span>
          </li>
          <li>
            <img
              data-l10n-id=${emailConstants.l10nId}
              class="icon ${emailConstants.class}"
              src=${emailConstants.icon}
            />
            <span
              data-l10n-id="password-rules-email-description"
              class="rule-description"
            ></span>
          </li>
          <li>
            <img
              data-l10n-id=${commonConstants.l10nId}
              class="icon ${commonConstants.class}"
              src=${commonConstants.icon}
            />
            <span
              data-l10n-id="password-rules-common-description"
              class="rule-description"
            ></span>
          </li>
          <li>
            <img
              class="icon"
              src="chrome://browser/skin/preferences/category-privacy-security.svg"
            />
            <span data-l10n-id="password-rules-disclaimer"
              ><a
                data-l10n-name="password-support-link"
                target="_blank"
                href=${`${this.supportBaseLink}password-strength`}
              ></a
            ></span>
          </li>
        </ul>
      </div>
    `;
  }
}
customElements.define("password-rules-tooltip", PasswordRulesTooltip);

/***/ }),

/***/ 52294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PasswordValidationInputs)
/* harmony export */ });
/* harmony import */ var browser_components_backup_content_password_validation_inputs_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61115);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73689);
/* harmony import */ var chrome_browser_content_backup_password_rules_tooltip_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67378);

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
    _hasCommon: {
      type: Boolean,
      state: true
    },
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
    _showRules: {
      type: Boolean,
      state: true
    },
    _tooShort: {
      type: Boolean,
      state: true
    },
    /**
     * If, by chance, there is focus on a focusable element in the tooltip,
     * track the focus state so that we can keep the tooltip open.
     */
    _tooltipFocus: {
      type: Boolean,
      state: true
    },
    supportBaseLink: {
      type: String
    }
  };
  static get queries() {
    return {
      formEl: "#password-inputs-form",
      inputNewPasswordEl: "#new-password-input",
      inputRepeatPasswordEl: "#repeat-password-input",
      passwordRulesEl: "#password-rules"
    };
  }
  constructor() {
    super();
    this.supportBaseLink = "";
    this._tooShort = true;
    this._hasCommon = false;
    this._hasEmail = false;
    this._passwordsMatch = false;
    this._passwordsValid = false;
    this._tooltipFocus = false;
  }
  reset() {
    this.formEl.reset();
    this._showRules = false;
    this._hasCommon = false;
    this._hasEmail = false;
    this._tooShort = true;
    this._passwordsMatch = false;
    this._passwordsValid = false;
    this._tooltipFocus = false;
  }
  handleFocusNewPassword() {
    this._showRules = true;
  }
  handleBlurNewPassword(event) {
    this._showRules = !event.target.checkValidity();
  }
  handleChangeNewPassword() {
    this.updatePasswordValidity();
  }
  handleChangeRepeatPassword() {
    this.updatePasswordValidity();
  }
  updatePasswordValidity() {
    const emailRegex = /^[\w!#$%&'*+/=?^`{|}~.-]+@[A-Z0-9-]+\.[A-Z0-9.-]+$/i;
    this._hasEmail = emailRegex.test(this.inputNewPasswordEl.value);
    if (this._hasEmail) {
      // TODO: we need a localized string for this error (bug 1909983)
      this.inputNewPasswordEl.setCustomValidity("TODO: no emails");
    } else {
      this.inputNewPasswordEl.setCustomValidity("");
    }
    const newPassValidity = this.inputNewPasswordEl.validity;
    this._tooShort = newPassValidity?.valueMissing || newPassValidity?.tooShort;
    this._passwordsMatch = this.inputNewPasswordEl.value == this.inputRepeatPasswordEl.value;
    if (!this._passwordsMatch) {
      // TODO: we need a localized string for this error  (bug 1909983)
      this.inputRepeatPasswordEl.setCustomValidity("TODO: not matching");
    } else {
      this.inputRepeatPasswordEl.setCustomValidity("");
    }
    const repeatPassValidity = this.inputRepeatPasswordEl.validity;
    this._passwordsValid = newPassValidity?.valid && repeatPassValidity?.valid && this._passwordsMatch;

    /**
     * This step may involve async validation with BackupService. For instance, we have to
     * check against a list of common passwords (bug 1905140) and display an error message if an
     * issue occurs (bug 1905145).
     */
  }
  handleTooltipFocus() {
    this._tooltipFocus = true;
  }
  handleTooltipBlur() {
    this._tooltipFocus = false;
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
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <div id="password-inputs-wrapper" aria-live="polite">
        <form id="password-inputs-form">
          <!--TODO: (bug 1909983) change first input field label for the "change-password" dialog-->
          <label id="new-password-label" for="new-password-input">
            <div id="new-password-label-wrapper-span-input">
              <span
                id="new-password-span"
                data-l10n-id="enable-backup-encryption-create-password-label"
              ></span>
              <input
                type="password"
                id="new-password-input"
                minlength="8"
                required
                @input=${this.handleChangeNewPassword}
                @focus=${this.handleFocusNewPassword}
                @blur=${this.handleBlurNewPassword}
              />
              <!--TODO: (bug 1909984) improve how we read out the first input field for screen readers-->
            </div>
          </label>
          <!--TODO: (bug 1909984) look into how the tooltip vs dialog behaves when pressing the ESC key-->
          <password-rules-tooltip
            id="password-rules"
            class=${!this._showRules && !this._tooltipFocus ? "hidden" : ""}
            .hasCommon=${this._hasCommon}
            .hasEmail=${this._hasEmail}
            .tooShort=${this._tooShort}
            .supportBaseLink=${this.supportBaseLink}
            @focus=${this.handleTooltipFocus}
            @blur=${this.handleTooltipBlur}
          ></password-rules-tooltip>
          <label id="repeat-password-label" for="repeat-password-input">
            <span
              id="repeat-password-span"
              data-l10n-id="enable-backup-encryption-repeat-password-label"
            ></span>
            <input
              type="password"
              id="repeat-password-input"
              minlength="8"
              required
              @input=${this.handleChangeRepeatPassword}
            />
          </label>
        </form>
      </div>
    `;
  }
  render() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
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

/***/ 24709:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Default": () => (/* binding */ Default),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_elements_moz_card_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63922);
/* harmony import */ var _password_validation_inputs_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52294);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// eslint-disable-next-line import/no-unresolved



window.MozXULElement.insertFTLIfNeeded("locales-preview/backupSettings.ftl");
window.MozXULElement.insertFTLIfNeeded("branding/brand.ftl");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/Backup/Password Inputs",
  component: "password-validation-inputs",
  argTypes: {}
});
const Template = () => lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
  <moz-card style="position: relative; width: 25rem;">
    <password-validation-inputs></password-validation-inputs>
  </moz-card>
`;
const Default = Template.bind({});

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
 * is visible. You can use the "expanded" attribute to force the accordion
 * card to show its content on initial render.
 *
 *
 * @property {string} heading - The heading text that will be used for the card.
 * @property {string} icon - (optional) A flag to indicate the header should include an icon
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
    this.type = "default";
    this.expanded = false;
  }
  headingTemplate() {
    if (!this.heading) {
      return "";
    }
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <div id="heading-wrapper">
        ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.when)(this.type == "accordion", () => chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`<div class="chevron-icon"></div>`)}
        ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.when)(this.icon, () => chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`<div part="icon" id="heading-icon" role="presentation"></div>`)}
        <span id="heading" title=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.heading)} part="heading"
          >${this.heading}</span
        >
      </div>
    `;
  }
  cardTemplate() {
    if (this.type === "accordion") {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
        <details
          id="moz-card-details"
          @toggle="${this.onToggle}"
          ?open=${this.expanded}
        >
          <summary part="summary">${this.headingTemplate()}</summary>
          <div id="content"><slot></slot></div>
        </details>
      `;
    }
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
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

/***/ 49154:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "password-rules-tooltip.2f46b8b6ff81717b007d.css";

/***/ }),

/***/ 61115:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "password-validation-inputs.bdfc44f0779cbe50ecc7.css";

/***/ }),

/***/ 48058:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-card.902fea065284e16a7756.css";

/***/ })

}]);
//# sourceMappingURL=password-validation-inputs-stories.e2f24c09.iframe.bundle.js.map