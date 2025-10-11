"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1836,3532,4469,6592],{

/***/ 3952:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "turn-on-scheduled-backups.8e8de014647d940b2c2d.css";

/***/ }),

/***/ 12390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TurnOffScheduledBackups)
/* harmony export */ });
/* harmony import */ var browser_components_backup_content_turn_off_scheduled_backups_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95380);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11540);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48334);

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
  close() {
    this.dispatchEvent(new CustomEvent("dialogCancel", {
      bubbles: true,
      composed: true
    }));
  }
  handleConfirm() {
    this.dispatchEvent(new CustomEvent("BackupUI:DisableScheduledBackups", {
      bubbles: true
    }));
  }
  contentTemplate() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
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
            @click=${this.close}
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
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
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

/***/ 13532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozMessageBar)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_message_bar_moz_message_bar_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83506);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11540);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48334);
/* harmony import */ var chrome_global_content_elements_moz_button_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31836);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



// eslint-disable-next-line import/no-unassigned-import

window.MozXULElement?.insertFTLIfNeeded("toolkit/global/mozMessageBar.ftl");
const messageTypeToIconData = {
  info: {
    iconSrc: "chrome://global/skin/icons/info-filled.svg",
    l10nId: "moz-message-bar-icon-info"
  },
  warning: {
    iconSrc: "chrome://global/skin/icons/warning.svg",
    l10nId: "moz-message-bar-icon-warning"
  },
  success: {
    iconSrc: "chrome://global/skin/icons/check-filled.svg",
    l10nId: "moz-message-bar-icon-success"
  },
  error: {
    iconSrc: "chrome://global/skin/icons/error.svg",
    l10nId: "moz-message-bar-icon-error"
  },
  critical: {
    iconSrc: "chrome://global/skin/icons/error.svg",
    l10nId: "moz-message-bar-icon-error"
  }
};

/**
 * A simple message bar element that can be used to display
 * important information to users.
 *
 * @tagname moz-message-bar
 * @property {string} type - The type of the displayed message.
 * @property {string} heading - The heading of the message.
 * @property {string} message - The message text.
 * @property {boolean} dismissable - Whether or not the element is dismissable.
 * @property {string} messageL10nId - l10n ID for the message.
 * @property {string} messageL10nArgs - Any args needed for the message l10n ID.
 * @fires message-bar:close
 *  Custom event indicating that message bar was closed.
 * @fires message-bar:user-dismissed
 *  Custom event indicating that message bar was dismissed by the user.
 */

class MozMessageBar extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static queries = {
    actionsSlot: "slot[name=actions]",
    actionsEl: ".actions",
    closeButton: "moz-button.close",
    messageEl: ".message",
    supportLinkSlot: "slot[name=support-link]"
  };
  static properties = {
    type: {
      type: String
    },
    heading: {
      type: String,
      fluent: true
    },
    message: {
      type: String,
      fluent: true
    },
    dismissable: {
      type: Boolean
    },
    messageL10nId: {
      type: String
    },
    messageL10nArgs: {
      type: String
    }
  };
  constructor() {
    super();
    this.type = "info";
    this.dismissable = false;
  }
  onActionSlotchange() {
    let actions = this.actionsSlot.assignedNodes();
    this.actionsEl.classList.toggle("active", actions.length);
  }
  onLinkSlotChange() {
    this.messageEl.classList.toggle("has-link-after", !!this.supportLinkEls.length);
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "alert");
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.dispatchEvent(new CustomEvent("message-bar:close"));
  }
  get supportLinkEls() {
    return this.supportLinkSlot.assignedElements();
  }
  iconTemplate() {
    let iconData = messageTypeToIconData[this.type];
    if (iconData) {
      let {
        iconSrc,
        l10nId
      } = iconData;
      return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
        <div class="icon-container">
          <img
            class="icon"
            src=${iconSrc}
            data-l10n-id=${l10nId}
            data-l10n-attrs="alt"
          />
        </div>
      `;
    }
    return "";
  }
  headingTemplate() {
    if (this.heading) {
      return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<strong class="heading">${this.heading}</strong>`;
    }
    return "";
  }
  closeButtonTemplate({
    size
  } = {}) {
    if (this.dismissable) {
      return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
        <moz-button
          type="icon ghost"
          class="close"
          size=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(size)}
          data-l10n-id="moz-message-bar-close-button"
          @click=${this.dismiss}
        ></moz-button>
      `;
    }
    return "";
  }
  render() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_message_bar_moz_message_bar_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <div class="container">
        <div class="content">
          <div class="text-container">
            ${this.iconTemplate()}
            <div class="text-content">
              ${this.headingTemplate()}
              <div>
                <span
                  class="message"
                  data-l10n-id=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.messageL10nId)}
                  data-l10n-args=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(JSON.stringify(this.messageL10nArgs))}
                >
                  ${this.message}
                </span>
                <span class="link">
                  <slot
                    name="support-link"
                    @slotchange=${this.onLinkSlotChange}
                  ></slot>
                </span>
              </div>
            </div>
          </div>
          <span class="actions">
            <slot name="actions" @slotchange=${this.onActionSlotchange}></slot>
          </span>
        </div>
        ${this.closeButtonTemplate()}
      </div>
    `;
  }
  dismiss() {
    this.dispatchEvent(new CustomEvent("message-bar:user-dismissed"));
    this.close();
  }
  close() {
    this.remove();
  }
}
customElements.define("moz-message-bar", MozMessageBar);

/***/ }),

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
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
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
          <li class=${this.tooShort && "warning"}>
            <span
              data-l10n-id="password-rules-length-description"
              class="rule-description"
            ></span>
          </li>
          <li class=${this.hasEmail && "warning"}>
            <span
              data-l10n-id="password-rules-email-description"
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

/***/ 19483:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "restore-from-backup.c66090830cf8ee31f066.css";

/***/ }),

/***/ 20703:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "preferences.c53c8a97ed25f6f0abfa.css";

/***/ }),

/***/ 30082:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-button.8f169f1865bcd610d148.css";

/***/ }),

/***/ 30585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ERROR_L10N_IDS: () => (/* binding */ ERROR_L10N_IDS),
/* harmony export */   getErrorL10nId: () => (/* binding */ getErrorL10nId)
/* harmony export */ });
/* harmony import */ var chrome_browser_content_backup_backup_constants_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43039);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



/**
 * Any recovery error messaging should be defined in Fluent with both
 * a `heading` attribute and a `message` attribute.
 */
const ERROR_L10N_IDS = Object.freeze({
  [chrome_browser_content_backup_backup_constants_mjs__WEBPACK_IMPORTED_MODULE_0__.ERRORS.UNAUTHORIZED]: "backup-service-error-incorrect-password",
  [chrome_browser_content_backup_backup_constants_mjs__WEBPACK_IMPORTED_MODULE_0__.ERRORS.CORRUPTED_ARCHIVE]: "backup-service-error-corrupt-file",
  [chrome_browser_content_backup_backup_constants_mjs__WEBPACK_IMPORTED_MODULE_0__.ERRORS.UNSUPPORTED_BACKUP_VERSION]: "backup-service-error-unsupported-version",
  [chrome_browser_content_backup_backup_constants_mjs__WEBPACK_IMPORTED_MODULE_0__.ERRORS.UNINITIALIZED]: "backup-service-error-went-wrong",
  [chrome_browser_content_backup_backup_constants_mjs__WEBPACK_IMPORTED_MODULE_0__.ERRORS.FILE_SYSTEM_ERROR]: "backup-service-error-went-wrong",
  [chrome_browser_content_backup_backup_constants_mjs__WEBPACK_IMPORTED_MODULE_0__.ERRORS.DECRYPTION_FAILED]: "backup-service-error-went-wrong",
  [chrome_browser_content_backup_backup_constants_mjs__WEBPACK_IMPORTED_MODULE_0__.ERRORS.RECOVERY_FAILED]: "backup-service-error-recovery-failed",
  [chrome_browser_content_backup_backup_constants_mjs__WEBPACK_IMPORTED_MODULE_0__.ERRORS.UNKNOWN]: "backup-service-error-went-wrong",
  [chrome_browser_content_backup_backup_constants_mjs__WEBPACK_IMPORTED_MODULE_0__.ERRORS.INTERNAL_ERROR]: "backup-service-error-went-wrong",
  [chrome_browser_content_backup_backup_constants_mjs__WEBPACK_IMPORTED_MODULE_0__.ERRORS.UNSUPPORTED_APPLICATION]: "backup-service-error-unsupported-application"
});

/**
 * @param {number} errorCode
 *   Error code from backup-constants.mjs:ERRORS
 * @returns {string}
 *   L10N ID for error messaging for the given error code; the L10N
 *   ID should have both a `heading` and a `message` attribute
 */
function getErrorL10nId(errorCode) {
  return ERROR_L10N_IDS[errorCode] ?? ERROR_L10N_IDS[chrome_browser_content_backup_backup_constants_mjs__WEBPACK_IMPORTED_MODULE_0__.ERRORS.UNKNOWN];
}

/***/ }),

/***/ 31836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozButton)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_button_moz_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30082);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11540);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48334);
/* harmony import */ var chrome_global_content_elements_moz_label_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36592);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



window.MozXULElement?.insertFTLIfNeeded("toolkit/global/mozButton.ftl");

// eslint-disable-next-line import/no-unassigned-import


/**
 * Controls moz-button behavior when menuId property is set.
 * Helps to integrate moz-button with panel-list.
 */
class MenuController {
  /** @type {HTMLElement} */
  host;

  /** @type {string} */
  #menuId;

  /** @type {HTMLElement | null} */
  #menuEl;

  /** @type {boolean} */
  #hostIsSplitButton;
  constructor(host) {
    this.host = host;
    host.addController(this);
  }
  hostConnected() {
    this.hostUpdated();
  }
  hostDisconnected() {
    this.#menuId = null;
    this.#menuEl = null;
    this.removePanelListListeners();
  }
  hostUpdated() {
    let hostMenuId = this.host.menuId;
    let hostIsSplitButton = this.host.isSplitButton;
    if (this.#menuId === hostMenuId && this.#hostIsSplitButton === hostIsSplitButton) {
      return;
    }
    if (this.#menuEl?.localName == "panel-list") {
      this.panelListCleanUp();
    }
    this.#menuId = hostMenuId;
    this.#hostIsSplitButton = hostIsSplitButton;

    // Check to see if a menuId has been added to host, or changed
    if (this.#menuId) {
      this.#menuEl = this.getPanelList();
      if (this.#menuEl?.localName == "panel-list") {
        this.panelListSetUp();
      }
    }

    // Check to see if menuId has been removed from host
    if (!this.#menuId) {
      this.#menuEl = null;
      this.host.removeController(this);
    }
  }

  /**
   * Retrieves the panel-list element matching the host's menuId.
   * @returns {HTMLElement | null}
   */
  getPanelList() {
    let root = this.host.getRootNode();
    let menuEl = null;
    while (root) {
      menuEl = root.querySelector?.(`#${this.#menuId}`);
      if (menuEl) {
        break;
      }
      if (root instanceof ShadowRoot) {
        root = root.host?.getRootNode();
      } else {
        break;
      }
    }
    return menuEl;
  }

  /**
   * Handles opening/closing the panel-list when the host is clicked or activated via keyboard.
   * @param {MouseEvent|KeyboardEvent} event
   */
  openPanelList = event => {
    if (event.type == "mousedown" && event.button == 0 || event.inputSource == MouseEvent.MOZ_SOURCE_KEYBOARD || !event.detail) {
      if (this.#hostIsSplitButton) {
        this.#menuEl?.toggle(event, this.host.chevronButtonEl);
      } else {
        this.#menuEl?.toggle(event, this.host);
      }
    }
  };

  /**
   * Removes event listeners related to panel-list from the host.
   */
  removePanelListListeners() {
    if (this.#hostIsSplitButton) {
      this.host.chevronButtonEl?.removeEventListener("click", this.openPanelList);
      this.host.chevronButtonEl?.removeEventListener("mousedown", this.openPanelList);
    } else {
      this.host.removeEventListener("click", this.openPanelList);
      this.host.removeEventListener("mousedown", this.openPanelList);
    }
  }

  /**
   * Sets up the host for integration with panel-list,
   * adding necessary event listeners and ARIA attributes.
   */
  panelListSetUp() {
    if (this.#hostIsSplitButton) {
      this.host.chevronButtonEl?.addEventListener("click", this.openPanelList);
      this.host.chevronButtonEl?.addEventListener("mousedown", this.openPanelList);
    } else {
      this.host.addEventListener("click", this.openPanelList);
      this.host.addEventListener("mousedown", this.openPanelList);
    }
    this.host.ariaHasPopup = "menu";
    this.host.ariaExpanded = this.#menuEl?.open ? "true" : "false";
  }

  /**
   * Cleans up panel-list integration,
   * removing event listeners and clearing ARIA attributes.
   */
  panelListCleanUp() {
    this.removePanelListListeners();
    this.host.ariaHasPopup = null;
    this.host.ariaExpanded = null;
  }
}

/**
 * A button with multiple types and two sizes.
 *
 * @tagname moz-button
 * @property {string} label - The button's label, will be overridden by slotted content.
 * @property {string} type - The button type.
 *   Options: default, primary, destructive, icon, icon ghost, ghost.
 * @property {string} size - The button size.
 *   Options: default, small.
 * @property {boolean} disabled - The disabled state.
 * @property {string} title - The button's title attribute, used in shadow DOM and therefore not as an attribute on moz-button.
 * @property {string} titleAttribute - Internal, map title attribute to the title JS property.
 * @property {string} tooltipText - Set the title property, the title attribute will be used first.
 * @property {string} ariaLabel - The button's aria-label attribute, used in shadow DOM and therefore not as an attribute on moz-button.
 * @property {string} ariaHasPopup - The button's aria-haspopup attribute, that indicates that a popup element can be triggered by the button.
 * @property {string} ariaExpanded - The button's aria-expanded attribute, that indicates whether or not the controlled elements are displayed or hidden.
 * @property {string} iconSrc - Path to the icon that should be displayed in the button.
 * @property {string} ariaLabelAttribute - Internal, map aria-label attribute to the ariaLabel JS property.
 * @property {string} ariaHasPopupAttribute - Internal, map aria-haspopup attribute to the ariaHasPopup JS property.
 * @property {string} ariaExpandedAttribute - Internal, map aria-expanded attribute to the ariaExpanded JS property.
 * @property {string} hasVisibleLabel - Internal, tracks whether or not the button has a visible label.
 * @property {boolean} attention - Show a dot notification on the button if true.
 * @property {boolean} parentDisabled - When the parent of this component is disabled.
 * @property {string} iconPosition - The icon's position relative to the button label.
 *   Options: start, end.
 * @property {string} menuId - A CSS selector string that identifies the associated menu element controlled by the button.
 * @property {HTMLButtonElement} buttonEl - The internal button element in the shadow DOM.
 * @property {HTMLButtonElement} slotEl - The internal slot element in the shadow DOM.
 * @cssproperty [--button-outer-padding-inline] - Used to set the outer inline padding of toolbar style buttons
 * @csspropert [--button-outer-padding-block] - Used to set the outer block padding of toolbar style buttons.
 * @cssproperty [--button-outer-padding-inline-start] - Used to set the outer inline-start padding of toolbar style buttons
 * @cssproperty [--button-outer-padding-inline-end] - Used to set the outer inline-end padding of toolbar style buttons
 * @cssproperty [--button-outer-padding-block-start] - Used to set the outer block-start padding of toolbar style buttons
 * @cssproperty [--button-outer-padding-block-end] - Used to set the outer block-end padding of toolbar style buttons
 * @slot default - The button's content, overrides label property.
 * @fires click - The click event.
 */
class MozButton extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static shadowRootOptions = {
    ..._lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement.shadowRootOptions,
    delegatesFocus: true
  };
  static properties = {
    label: {
      type: String,
      reflect: true,
      fluent: true
    },
    type: {
      type: String,
      reflect: true
    },
    size: {
      type: String,
      reflect: true
    },
    disabled: {
      type: Boolean,
      reflect: true
    },
    title: {
      type: String,
      mapped: true
    },
    tooltipText: {
      type: String,
      fluent: true
    },
    ariaLabel: {
      type: String,
      mapped: true
    },
    ariaHasPopup: {
      type: String,
      mapped: true
    },
    ariaExpanded: {
      type: String,
      mapped: true
    },
    iconSrc: {
      type: String
    },
    hasVisibleLabel: {
      type: Boolean,
      state: true
    },
    accessKey: {
      type: String,
      mapped: true
    },
    attention: {
      type: Boolean
    },
    iconPosition: {
      type: String,
      reflect: true
    },
    menuId: {
      type: String,
      reflect: true
    },
    parentDisabled: {
      type: Boolean
    }
  };
  static queries = {
    buttonEl: "#main-button",
    chevronButtonEl: "#chevron-button",
    slotEl: "slot",
    backgroundEl: "#main-button .button-background"
  };
  constructor() {
    super();
    this.type = "default";
    this.size = "default";
    this.disabled = false;
    this.hasVisibleLabel = !!this.label;
    this.attention = false;
    this.iconPosition = "start";
    this.menuId = "";
    this.parentDisabled = undefined;
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("menuId")) {
      if (this.menuId && !this._menuController) {
        this._menuController = new MenuController(this);
      }
      if (!this.menuId && this._menuController) {
        this._menuController = null;
      }
    }
  }
  get isSplitButton() {
    return this.type === "split";
  }

  // Delegate clicks on host to the button element.
  click() {
    this.buttonEl.click();
  }
  checkForLabelText() {
    this.hasVisibleLabel = this.slotEl?.assignedNodes().some(node => node.textContent.trim());
  }
  labelTemplate() {
    if (this.label) {
      return this.label;
    }
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<slot @slotchange=${this.checkForLabelText}></slot>`;
  }
  iconTemplate(position) {
    if (this.iconSrc && position == this.iconPosition) {
      return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<img src=${this.iconSrc} role="presentation" />`;
    }
    return null;
  }
  chevronButtonTemplate() {
    if (this.isSplitButton) {
      return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<button
        id="chevron-button"
        size=${this.size}
        ?disabled=${this.disabled || this.parentDisabled}
        data-l10n-id="moz-button-more-options"
        aria-labelledby="main-button chevron-button"
        aria-expanded=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.ariaExpanded)}
        aria-haspopup=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.ariaHasPopup)}
        @click=${e => e.stopPropagation()}
        @mousedown=${e => e.stopPropagation()}
      >
        <span class="button-background" type=${this.type} size=${this.size}>
          <img
            src="chrome://global/skin/icons/arrow-down.svg"
            role="presentation"
          />
        </span>
      </button>`;
    }
    return null;
  }
  render() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_button_moz_button_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <button
        id="main-button"
        ?disabled=${this.disabled || this.parentDisabled}
        title=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.title || this.tooltipText)}
        aria-label=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.ariaLabel)}
        aria-expanded=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.isSplitButton ? undefined : this.ariaExpanded)}
        aria-haspopup=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.isSplitButton ? undefined : this.ariaHasPopup)}
        accesskey=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.accessKey)}
      >
        <span
          class=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.classMap)({
      labelled: this.label || this.hasVisibleLabel,
      "button-background": true,
      badged: (this.iconSrc || this.type.includes("icon")) && this.attention
    })}
          part="button"
          type=${this.type}
          size=${this.size}
        >
          ${this.iconTemplate("start")}
          <label
            is="moz-label"
            shownaccesskey=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.accessKey)}
            part="moz-button-label"
          >
            ${this.labelTemplate()}
          </label>
          ${this.iconTemplate("end")}
        </span>
      </button>
      ${this.chevronButtonTemplate()}
    `;
  }
}
customElements.define("moz-button", MozButton);

/***/ }),

/***/ 36592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var toolkit_content_widgets_moz_label_moz_label_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76150);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * An extension of the label element that provides accesskey styling and
 * formatting as well as click handling logic.
 *
 * @tagname moz-label
 * @attribute {string} accesskey - Key used for keyboard access.
 * @attribute {string} shownaccesskey - Key to underline but not set as
 *   accesskey, this is useful to work around an issue where multiple accesskeys
 *   on the same element cause it to be focused isntead of activated.
 */
class MozTextLabel extends HTMLLabelElement {
  #insertSeparator = false;
  #alwaysAppendAccessKey = false;
  #lastFormattedAccessKey = null;
  #observer = null;

  // Default to underlining accesskeys for Windows and Linux.
  static #underlineAccesskey = !navigator.platform.includes("Mac");
  static get observedAttributes() {
    return ["accesskey", "shownaccesskey"];
  }
  static stylesheetUrl = toolkit_content_widgets_moz_label_moz_label_css__WEBPACK_IMPORTED_MODULE_0__;
  constructor() {
    super();
    this.#register();
    this.addEventListener("click", this._onClick);
  }
  #register() {
    if (window.IS_STORYBOOK) {
      MozTextLabel.#underlineAccesskey = true;
    } else if (typeof Services !== "undefined") {
      MozTextLabel.#underlineAccesskey = !!Services.prefs.getIntPref("ui.key.menuAccessKey", Number(!navigator.platform.includes("Mac")));
      if (MozTextLabel.#underlineAccesskey) {
        try {
          const nsIPrefLocalizedString = Ci.nsIPrefLocalizedString;
          const prefNameInsertSeparator = "intl.menuitems.insertseparatorbeforeaccesskeys";
          const prefNameAlwaysAppendAccessKey = "intl.menuitems.alwaysappendaccesskeys";
          let val = Services.prefs.getComplexValue(prefNameInsertSeparator, nsIPrefLocalizedString).data;
          this.#insertSeparator = val == "true";
          val = Services.prefs.getComplexValue(prefNameAlwaysAppendAccessKey, nsIPrefLocalizedString).data;
          this.#alwaysAppendAccessKey = val == "true";
        } catch (e) {
          this.#insertSeparator = this.#alwaysAppendAccessKey = true;
        }
      }
    }
  }
  #startMutationObserver() {
    if (!this.#observer) {
      return;
    }
    this.#observer.observe(this, {
      characterData: true,
      childList: true,
      subtree: true
    });
  }
  #stopMutationObserver() {
    if (!this.#observer) {
      return;
    }
    this.#observer.disconnect();
  }
  connectedCallback() {
    this.#setStyles();
    this.formatAccessKey();
    if (!this.#observer) {
      this.#observer = new MutationObserver(() => {
        this.#lastFormattedAccessKey = null;
        this.formatAccessKey();
      });
      this.#startMutationObserver();
    }
  }
  disconnectedCallback() {
    if (this.#observer) {
      this.#stopMutationObserver();
      this.#observer = null;
    }
  }

  // Bug 1820588 - we may want to generalize this into
  // MozHTMLElement.insertCssIfNeeded(style)
  #setStyles() {
    let root = this.getRootNode();
    if (root.__mozLabelCssAdded) {
      return;
    }
    let container = root.head ?? root;
    for (let link of container.querySelectorAll("link")) {
      if (link.getAttribute("href") == this.constructor.stylesheetUrl) {
        return;
      }
    }
    let style = document.createElement("link");
    style.rel = "stylesheet";
    style.href = this.constructor.stylesheetUrl;
    container.appendChild(style);
    root.__mozLabelCssAdded = true;
  }
  set textContent(val) {
    super.textContent = val;
    this.#lastFormattedAccessKey = null;
    this.formatAccessKey();
  }
  get textContent() {
    return super.textContent;
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (oldValue == newValue) {
      return;
    }

    // Note that this is only happening when "accesskey" attribute changes.
    this.formatAccessKey();
  }
  _onClick() {
    let controlElement = this.labeledControlElement;
    if (!controlElement || this.disabled) {
      return;
    }
    controlElement.focus();
    if ((controlElement.localName == "checkbox" || controlElement.localName == "radio") && controlElement.getAttribute("disabled") == "true") {
      return;
    }
    if (controlElement.localName == "checkbox") {
      controlElement.checked = !controlElement.checked;
    } else if (controlElement.localName == "radio") {
      controlElement.control.selectedItem = controlElement;
    }
  }
  set accessKey(val) {
    this.setAttribute("accesskey", val);
    let control = this.labeledControlElement;
    if (control) {
      control.setAttribute("accesskey", val);
    }
  }
  get accessKey() {
    let accessKey = this.getAttribute("accesskey");
    return accessKey ? accessKey[0] : null;
  }
  get labeledControlElement() {
    let control = this.control;
    return control ? document.getElementById(control) : null;
  }
  set control(val) {
    this.setAttribute("control", val);
  }
  get control() {
    return this.getAttribute("control");
  }

  // This is used to match the rendering of accesskeys from nsTextBoxFrame.cpp (i.e. when the
  // label uses [value]). So this is just for when we have textContent.
  formatAccessKey() {
    // Skip doing any DOM manipulation whenever possible:
    let accessKey = this.accessKey || this.getAttribute("shownaccesskey");
    if (!MozTextLabel.#underlineAccesskey || this.#lastFormattedAccessKey == accessKey || !this.textContent || !this.textContent.trim()) {
      return;
    }
    this.#stopMutationObserver();
    try {
      this.#formatAccessKey(accessKey);
    } finally {
      queueMicrotask(() => this.#startMutationObserver());
    }
  }
  #formatAccessKey(accessKey) {
    this.#lastFormattedAccessKey = accessKey;
    if (this.accessKeySpan) {
      // Clear old accesskey
      mergeElement(this.accessKeySpan);
      this.accessKeySpan = null;
    }
    if (this.hiddenColon) {
      mergeElement(this.hiddenColon);
      this.hiddenColon = null;
    }
    if (this.accessKeyParens) {
      this.accessKeyParens.remove();
      this.accessKeyParens = null;
    }

    // If we used to have an accessKey but not anymore, we're done here
    if (!accessKey) {
      return;
    }
    let labelText = this.textContent;
    let accessKeyIndex = -1;
    if (!this.#alwaysAppendAccessKey) {
      accessKeyIndex = labelText.indexOf(accessKey);
      if (accessKeyIndex < 0) {
        // Try again in upper case
        accessKeyIndex = labelText.toUpperCase().indexOf(accessKey.toUpperCase());
      }
    } else if (labelText.endsWith(`(${accessKey.toUpperCase()})`)) {
      accessKeyIndex = labelText.length - (1 + accessKey.length); // = index of accessKey.
    }
    const HTML_NS = "http://www.w3.org/1999/xhtml";
    this.accessKeySpan = document.createElementNS(HTML_NS, "span");
    this.accessKeySpan.className = "accesskey";

    // Note that if you change the following code, see the comment of
    // nsTextBoxFrame::UpdateAccessTitle.

    // If accesskey is in the string, underline it:
    if (accessKeyIndex >= 0) {
      wrapChar(this, this.accessKeySpan, accessKeyIndex);
      return;
    }

    // If accesskey is not in string, append in parentheses
    // If end is colon, we should insert before colon.
    // i.e., "label:" -> "label(X):"
    let colonHidden = false;
    if (/:$/.test(labelText)) {
      labelText = labelText.slice(0, -1);
      this.hiddenColon = document.createElementNS(HTML_NS, "span");
      this.hiddenColon.className = "hiddenColon";
      this.hiddenColon.style.display = "none";
      // Hide the last colon by using span element.
      // I.e., label<span style="display:none;">:</span>
      wrapChar(this, this.hiddenColon, labelText.length);
      colonHidden = true;
    }
    // If end is space(U+20),
    // we should not add space before parentheses.
    let endIsSpace = false;
    if (/ $/.test(labelText)) {
      endIsSpace = true;
    }
    this.accessKeyParens = document.createElementNS("http://www.w3.org/1999/xhtml", "span");
    this.appendChild(this.accessKeyParens);
    if (this.#insertSeparator && !endIsSpace) {
      this.accessKeyParens.textContent = " (";
    } else {
      this.accessKeyParens.textContent = "(";
    }
    this.accessKeySpan.textContent = accessKey.toUpperCase();
    this.accessKeyParens.appendChild(this.accessKeySpan);
    if (!colonHidden) {
      this.accessKeyParens.appendChild(document.createTextNode(")"));
    } else {
      this.accessKeyParens.appendChild(document.createTextNode("):"));
    }
  }
}
customElements.define("moz-label", MozTextLabel, {
  extends: "label"
});
function mergeElement(element) {
  // If the element has been removed already, return:
  if (!element.isConnected) {
    return;
  }
  // `isInstance` isn't available to web content (i.e. Storybook) so we need to
  // fallback to using `instanceof`.
  if (Text.hasOwnProperty("isInstance") ? Text.isInstance(element.previousSibling) :
  // eslint-disable-next-line mozilla/use-isInstance
  element.previousSibling instanceof Text) {
    element.previousSibling.appendData(element.textContent);
  } else {
    element.parentNode.insertBefore(element.firstChild, element);
  }
  element.remove();
}
function wrapChar(parentNode, element, index) {
  let treeWalker = document.createNodeIterator(parentNode, NodeFilter.SHOW_TEXT, null);
  let node = treeWalker.nextNode();
  while (index >= node.length) {
    index -= node.length;
    node = treeWalker.nextNode();
  }
  if (index) {
    node = node.splitText(index);
  }
  node.parentNode.insertBefore(element, node);
  if (node.length > 1) {
    node.splitText(1);
  }
  element.appendChild(node);
}

/***/ }),

/***/ 42346:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "disable-backup-encryption.ab465ac83584db13a46f.css";

/***/ }),

/***/ 43039:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ERRORS: () => (/* binding */ ERRORS),
/* harmony export */   STEPS: () => (/* binding */ STEPS)
/* harmony export */ });
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const ERRORS = Object.freeze({
  /** Error state to be used for error management */
  NONE: 0,
  /** User is not authorized to restore a backup archive */
  UNAUTHORIZED: 1,
  /** Selected backup archive can't be restored because it is corrupt */
  CORRUPTED_ARCHIVE: 2,
  /**
   * Selected backup archive can't be restored because the backup manifest
   * version is too old, from the future, or invalid
   */
  UNSUPPORTED_BACKUP_VERSION: 3,
  /** Backup service was not started or is not running */
  UNINITIALIZED: 4,
  /** Could not read from or write to the file system */
  FILE_SYSTEM_ERROR: 5,
  /** Encryption of backup archive failed */
  ENCRYPTION_FAILED: 6,
  /** Decryption of backup archive failed */
  DECRYPTION_FAILED: 7,
  /** Recovery of backup failed without a more specific cause */
  RECOVERY_FAILED: 8,
  /** Unknown error with backup system without a more specific cause */
  UNKNOWN: 9,
  /**
   * Backup system tried to enable backup encryption but it was
   * already enabled
   */
  ENCRYPTION_ALREADY_ENABLED: 10,
  /**
   * Backup system tried to disable backup encryption but it was
   * already disabled
   */
  ENCRYPTION_ALREADY_DISABLED: 11,
  /** User supplied a new password that is not a valid password */
  INVALID_PASSWORD: 12,
  /**
   * An error internal to the code that is likely caused by a bug
   * or other programmer error.
   */
  INTERNAL_ERROR: 13,
  /**
   * A backup cannot be recovered because the backup file was created
   * by a different application than the currently running application
   */
  UNSUPPORTED_APPLICATION: 14
});

/**
 * These are steps that the BackupService or any of its subcomponents might
 * be going through during configuration, creation, deletion of or restoration
 * from a backup. This is used to provide extra information to our error
 * telemetry.
 */
const STEPS = Object.freeze({
  /**
   * This is the initial step upon creating a backup before any other steps
   * begin.
   */
  CREATE_BACKUP_ENTRYPOINT: 1,
  /**
   * Determine the final destination for the written archive.
   */
  CREATE_BACKUP_RESOLVE_DESTINATION: 2,
  /**
   * Generate the manifest object for the backup.
   */
  CREATE_BACKUP_CREATE_MANIFEST: 3,
  /**
   * Create the main `backups` working directory in the profile directory if it
   * doesn't already exist.
   */
  CREATE_BACKUP_CREATE_BACKUPS_FOLDER: 4,
  /**
   * Create the staging directory for the backup.
   */
  CREATE_BACKUP_CREATE_STAGING_FOLDER: 5,
  /**
   * Attempt to load the encryption state if one exists.
   */
  CREATE_BACKUP_LOAD_ENCSTATE: 6,
  /**
   * Run the backup routine for each BackupResource.
   */
  CREATE_BACKUP_RUN_BACKUP: 7,
  /**
   * After populating with the data from each BackupResource, verify that
   * the manifest adheres to the BackupManifest schema.
   */
  CREATE_BACKUP_VERIFY_MANIFEST: 8,
  /**
   * Write the backup manifest to the staging directory.
   */
  CREATE_BACKUP_WRITE_MANIFEST: 9,
  /**
   * Rename the staging directory with the time code, and clear out any
   * expired directories.
   */
  CREATE_BACKUP_FINALIZE_STAGING: 10,
  /**
   * Compress the staging directory into a single file.
   */
  CREATE_BACKUP_COMPRESS_STAGING: 11,
  /**
   * Generate the single-file archive.
   */
  CREATE_BACKUP_CREATE_ARCHIVE: 12,
  /**
   * Finalize the single-file archive and move it into the destination
   * directory.
   */
  CREATE_BACKUP_FINALIZE_ARCHIVE: 13
});

/***/ }),

/***/ 44029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EnableBackupEncryption)
/* harmony export */ });
/* harmony import */ var browser_components_backup_content_enable_backup_encryption_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72195);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11540);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48334);
/* harmony import */ var chrome_global_content_elements_moz_message_bar_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13532);
/* harmony import */ var chrome_browser_content_backup_password_validation_inputs_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63706);
/* harmony import */ var chrome_browser_content_backup_backup_constants_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43039);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import



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
const ERROR_L10N_IDS = Object.freeze({
  [chrome_browser_content_backup_backup_constants_mjs__WEBPACK_IMPORTED_MODULE_5__.ERRORS.INVALID_PASSWORD]: "backup-error-password-requirements",
  [chrome_browser_content_backup_backup_constants_mjs__WEBPACK_IMPORTED_MODULE_5__.ERRORS.UNKNOWN]: "backup-error-retry"
});

/**
 * @param {number} errorCode Error code from backup-constants.mjs
 * @returns {string} Localization ID for error message
 */
function getErrorL10nId(errorCode) {
  return ERROR_L10N_IDS[errorCode] ?? ERROR_L10N_IDS[chrome_browser_content_backup_backup_constants_mjs__WEBPACK_IMPORTED_MODULE_5__.ERRORS.UNKNOWN];
}

/**
 * The widget for enabling password protection if the backup is not yet
 * encrypted.
 */
class EnableBackupEncryption extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    // internal state
    _inputPassValue: {
      type: String,
      state: true
    },
    _passwordsMatch: {
      type: Boolean,
      state: true
    },
    // passed from parents
    supportBaseLink: {
      type: String
    },
    /**
     * The "type" attribute changes the layout.
     *
     * @see VALID_TYPES
     */
    type: {
      type: String,
      reflect: true
    },
    // managed by BackupUIChild
    enableEncryptionErrorCode: {
      type: Number
    },
    rerunEncryptionErrorCode: {
      type: Number
    }
  };
  static get queries() {
    return {
      cancelButtonEl: "#backup-enable-encryption-cancel-button",
      confirmButtonEl: "#backup-enable-encryption-confirm-button",
      contentEl: "#backup-enable-encryption-content",
      textHeaderEl: "#backup-enable-encryption-header",
      textDescriptionEl: "#backup-enable-encryption-description",
      passwordInputsEl: "#backup-enable-encryption-password-inputs",
      errorEl: "#enable-backup-encryption-error"
    };
  }
  constructor() {
    super();
    this.supportBaseLink = "";
    this.type = VALID_TYPES.SET_PASSWORD;
    this._inputPassValue = "";
    this._passwordsMatch = false;
    this.enableEncryptionErrorCode = 0;
    this.rerunEncryptionErrorCode = 0;
  }
  connectedCallback() {
    super.connectedCallback();
    // Listening to events from child <password-validation-inputs>
    this.addEventListener("ValidPasswordsDetected", this);
    this.addEventListener("InvalidPasswordsDetected", this);
  }
  handleEvent(event) {
    if (event.type == "ValidPasswordsDetected") {
      let {
        password
      } = event.detail;
      this._passwordsMatch = true;
      this._inputPassValue = password;
    } else if (event.type == "InvalidPasswordsDetected") {
      this._passwordsMatch = false;
      this._inputPassValue = "";
    }
  }
  close() {
    this.dispatchEvent(new CustomEvent("dialogCancel", {
      bubbles: true,
      composed: true
    }));
    this.reset();
  }
  reset() {
    this._inputPassValue = "";
    this._passwordsMatch = false;
    this.passwordInputsEl.reset();
    this.enableEncryptionErrorCode = 0;
  }
  handleConfirm() {
    switch (this.type) {
      case VALID_TYPES.SET_PASSWORD:
        this.dispatchEvent(new CustomEvent("BackupUI:EnableEncryption", {
          bubbles: true,
          detail: {
            password: this._inputPassValue
          }
        }));
        break;
      case VALID_TYPES.CHANGE_PASSWORD:
        this.dispatchEvent(new CustomEvent("BackupUI:RerunEncryption", {
          bubbles: true,
          detail: {
            password: this._inputPassValue
          }
        }));
        break;
    }
  }
  descriptionTemplate() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <div id="backup-enable-encryption-description">
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
      </div>
    `;
  }
  buttonGroupTemplate() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <moz-button-group id="backup-enable-encryption-button-group">
        <moz-button
          id="backup-enable-encryption-cancel-button"
          @click=${this.close}
          data-l10n-id="enable-backup-encryption-cancel-button"
        ></moz-button>
        <moz-button
          id="backup-enable-encryption-confirm-button"
          @click=${this.handleConfirm}
          type="primary"
          data-l10n-id="enable-backup-encryption-confirm-button"
          ?disabled=${!this._passwordsMatch}
        ></moz-button>
      </moz-button-group>
    `;
  }
  errorTemplate() {
    let messageId = this.enableEncryptionErrorCode ? getErrorL10nId(this.enableEncryptionErrorCode) : getErrorL10nId(this.rerunEncryptionErrorCode);
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <moz-message-bar
        id="enable-backup-encryption-error"
        type="error"
        .messageL10nId=${messageId}
      ></moz-message-bar>
    `;
  }
  contentTemplate() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <div
        id="backup-enable-encryption-wrapper"
        aria-labelledby="backup-enable-encryption-header"
        aria-describedby="backup-enable-encryption-description"
      >
        <h1
          id="backup-enable-encryption-header"
          class="heading-medium"
          data-l10n-id=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(VALID_L10N_IDS.get(this.type))}
        ></h1>
        <div id="backup-enable-encryption-content">
          ${this.type === VALID_TYPES.SET_PASSWORD ? this.descriptionTemplate() : null}
          <password-validation-inputs
            id="backup-enable-encryption-password-inputs"
            .supportBaseLink=${this.supportBaseLink}
          >
          </password-validation-inputs>

          ${this.enableEncryptionErrorCode || this.rerunEncryptionErrorCode ? this.errorTemplate() : null}
        </div>
        ${this.buttonGroupTemplate()}
      </div>
    `;
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
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

/***/ 45603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RestoreFromBackup)
/* harmony export */ });
/* harmony import */ var browser_components_backup_content_restore_from_backup_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19483);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11540);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48334);
/* harmony import */ var chrome_browser_content_backup_backup_constants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43039);
/* harmony import */ var chrome_browser_content_backup_backup_errors_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30585);
/* harmony import */ var chrome_global_content_elements_moz_message_bar_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13532);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */






// eslint-disable-next-line import/no-unassigned-import


/**
 * The widget for allowing users to select and restore from a
 * a backup file.
 */
class RestoreFromBackup extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  #placeholderFileIconURL = "chrome://global/skin/icons/page-portrait.svg";
  static properties = {
    _fileIconURL: {
      type: String
    },
    aboutWelcomeEmbedded: {
      type: Boolean
    },
    backupServiceState: {
      type: Object
    }
  };
  static get queries() {
    return {
      filePicker: "#backup-filepicker-input",
      passwordInput: "#backup-password-input",
      cancelButtonEl: "#restore-from-backup-cancel-button",
      confirmButtonEl: "#restore-from-backup-confirm-button",
      chooseButtonEl: "#backup-filepicker-button",
      errorMessageEl: "#restore-from-backup-error"
    };
  }
  get isIncorrectPassword() {
    return this.backupServiceState?.recoveryErrorCode === chrome_browser_content_backup_backup_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.ERRORS.UNAUTHORIZED;
  }
  constructor() {
    super();
    this._fileIconURL = "";
    // Set the default state
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
      lastBackupFileName: "",
      supportBaseLink: "",
      backupInProgress: false,
      recoveryInProgress: false,
      recoveryErrorCode: chrome_browser_content_backup_backup_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.ERRORS.NONE
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

    // If we have a backup file, but not the associated info, fetch the info
    if (this.backupServiceState?.backupFileToRestore && !this.backupServiceState?.backupFileInfo) {
      this.getBackupFileInfo();
    }
    this.addEventListener("BackupUI:SelectNewFilepickerPath", this);

    // Resize the textarea when the window is resized
    if (this.aboutWelcomeEmbedded) {
      this._handleWindowResize = () => this.resizeTextarea();
      window.addEventListener("resize", this._handleWindowResize);
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._handleWindowResize) {
      window.removeEventListener("resize", this._handleWindowResize);
      this._handleWindowResize = null;
    }
  }
  updated(changedProperties) {
    super.updated(changedProperties);

    // Resize the textarea. This only runs once on initial render,
    // and once each time one of our reactive properties is changed.
    if (this.aboutWelcomeEmbedded) {
      this.resizeTextarea();
    }
    if (changedProperties.has("backupServiceState")) {
      // If we got a recovery error, recoveryInProgress should be false
      const inProgress = this.backupServiceState.recoveryInProgress && !this.backupServiceState.recoveryErrorCode;
      this.dispatchEvent(new CustomEvent("BackupUI:RecoveryProgress", {
        bubbles: true,
        composed: true,
        detail: {
          recoveryInProgress: inProgress
        }
      }));
    }
  }
  handleEvent(event) {
    if (event.type == "BackupUI:SelectNewFilepickerPath") {
      let {
        path,
        iconURL
      } = event.detail;
      this._fileIconURL = iconURL;
      this.getBackupFileInfo(path);
    }
  }
  async handleChooseBackupFile() {
    this.dispatchEvent(new CustomEvent("BackupUI:ShowFilepicker", {
      bubbles: true,
      composed: true,
      detail: {
        win: window.browsingContext,
        filter: "filterHTML",
        displayDirectoryPath: this.backupServiceState?.backupFileToRestore
      }
    }));
  }
  getBackupFileInfo(pathToFile = null) {
    let backupFile = pathToFile || this.backupServiceState?.backupFileToRestore;
    if (!backupFile) {
      return;
    }
    this.dispatchEvent(new CustomEvent("BackupUI:GetBackupFileInfo", {
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
    let backupFile = this.backupServiceState?.backupFileToRestore;
    if (!backupFile || this.backupServiceState?.recoveryInProgress) {
      return;
    }
    let backupPassword = this.passwordInput?.value;
    this.dispatchEvent(new CustomEvent("BackupUI:RestoreFromBackupFile", {
      bubbles: true,
      composed: true,
      detail: {
        backupFile,
        backupPassword
      }
    }));
  }
  handleTextareaResize() {
    this.resizeTextarea();
  }

  /**
   * Resizes the textarea to adjust to the size of the content within
   */
  resizeTextarea() {
    const target = this.filePicker;
    if (!target) {
      return;
    }
    const hasValue = target.value && !!target.value.trim().length;
    target.style.height = "auto";
    if (hasValue) {
      target.style.height = target.scrollHeight + "px";
    }
  }
  applyContentCustomizations() {
    if (this.aboutWelcomeEmbedded) {
      this.style.setProperty("--button-group-justify-content", "flex-start");
      this.style.setProperty("--label-font-weight", "600");
    }
  }
  controlsTemplate() {
    let iconURL = this.#placeholderFileIconURL;
    if (this.backupServiceState?.backupFileToRestore && !this.aboutWelcomeEmbedded) {
      iconURL = this._fileIconURL || this.#placeholderFileIconURL;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <fieldset id="backup-restore-controls">
        <fieldset id="backup-filepicker-controls">
          <label
            id="backup-filepicker-label"
            for="backup-filepicker-input"
            data-l10n-id="restore-from-backup-filepicker-label"
          ></label>
          <div
            id="backup-filepicker"
            class=${this.aboutWelcomeEmbedded ? "aw-embedded-filepicker" : ""}
          >
            ${this.inputTemplate(iconURL)}
            <moz-button
              id="backup-filepicker-button"
              @click=${this.handleChooseBackupFile}
              data-l10n-id="restore-from-backup-file-choose-button"
              aria-controls="backup-filepicker-input"
            ></moz-button>
          </div>

          ${!this.backupServiceState?.backupFileInfo ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<a
                id="restore-from-backup-no-backup-file-link"
                slot="support-link"
                is="moz-support-link"
                support-page="firefox-backup"
                data-l10n-id="restore-from-backup-no-backup-file-link"
              ></a>` : null}
          ${this.backupServiceState?.backupFileInfo ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<p
                id="restore-from-backup-backup-found-info"
                data-l10n-id="backup-file-creation-date-and-device"
                data-l10n-args=${JSON.stringify({
      machineName: this.backupServiceState.backupFileInfo.deviceName ?? "",
      date: this.backupServiceState.backupFileInfo.date ? new Date(this.backupServiceState.backupFileInfo.date).getTime() : 0
    })}
              ></p>` : null}
        </fieldset>

        <fieldset id="password-entry-controls">
          ${this.backupServiceState?.backupFileInfo?.isEncrypted ? this.passwordEntryTemplate() : null}
        </fieldset>
      </fieldset>
    `;
  }
  inputTemplate(iconURL) {
    const styles = (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.styleMap)(iconURL ? {
      backgroundImage: `url(${iconURL})`
    } : {});
    const backupFileName = this.backupServiceState?.backupFileToRestore || "";
    if (this.aboutWelcomeEmbedded) {
      return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
        <textarea
          id="backup-filepicker-input"
          rows="1"
          readonly
          .value=${backupFileName}
          style=${styles}
          @input=${this.handleTextareaResize}
        ></textarea>
      `;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <input
        id="backup-filepicker-input"
        type="text"
        readonly
        .value=${backupFileName}
        style=${styles}
      />
    `;
  }
  passwordEntryTemplate() {
    const isInvalid = this.isIncorrectPassword;
    const describedBy = isInvalid ? "backup-password-error" : "backup-password-description";
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)` <fieldset id="backup-password">
      <label id="backup-password-label" for="backup-password-input">
        <span
          id="backup-password-span"
          data-l10n-id="restore-from-backup-password-label"
        ></span>
        <input
          type="password"
          id="backup-password-input"
          aria-invalid=${String(isInvalid)}
          aria-describedby=${describedBy}
        />
      </label>
      ${isInvalid ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
            <span
              id="backup-password-error"
              class="field-error"
              data-l10n-id="backup-service-error-incorrect-password"
            >
              <a
                id="backup-incorrect-password-support-link"
                slot="support-link"
                is="moz-support-link"
                support-page="firefox-backup"
                data-l10n-name="incorrect-password-support-link"
              ></a>
            </span>
          ` : (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<label
            id="backup-password-description"
            data-l10n-id="restore-from-backup-password-description"
          ></label> `}
    </fieldset>`;
  }
  contentTemplate() {
    let buttonL10nId = !this.backupServiceState?.recoveryInProgress ? "restore-from-backup-confirm-button" : "restore-from-backup-restoring-button";
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <div
        id="restore-from-backup-wrapper"
        aria-labelledby="restore-from-backup-header"
        aria-describedby="restore-from-backup-description"
      >
        ${this.aboutWelcomeEmbedded ? null : this.headerTemplate()}
        <main id="restore-from-backup-content">
          ${this.backupServiceState?.recoveryErrorCode ? this.errorTemplate() : null}
          ${!this.aboutWelcomeEmbedded && this.backupServiceState?.backupFileInfo ? this.descriptionTemplate() : null}
          ${this.controlsTemplate()}
        </main>

        <moz-button-group id="restore-from-backup-button-group">
          ${this.aboutWelcomeEmbedded ? null : this.cancelButtonTemplate()}
          <moz-button
            id="restore-from-backup-confirm-button"
            @click=${this.handleConfirm}
            type="primary"
            data-l10n-id=${buttonL10nId}
            ?disabled=${!this.backupServiceState?.backupFileToRestore || this.backupServiceState?.recoveryInProgress}
          ></moz-button>
        </moz-button-group>
      </div>
    `;
  }
  headerTemplate() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <h1
        id="restore-from-backup-header"
        class="heading-medium"
        data-l10n-id="restore-from-backup-header"
      ></h1>
    `;
  }
  cancelButtonTemplate() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <moz-button
        id="restore-from-backup-cancel-button"
        @click=${this.handleCancel}
        data-l10n-id="restore-from-backup-cancel-button"
      ></moz-button>
    `;
  }
  descriptionTemplate() {
    let {
      date
    } = this.backupServiceState?.backupFileInfo || {};
    let dateTime = date && new Date(date).getTime();
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <moz-message-bar
        id="restore-from-backup-description"
        type="info"
        data-l10n-id="restore-from-backup-description-with-metadata"
        data-l10n-args=${JSON.stringify({
      date: dateTime
    })}
      >
        <a
          id="restore-from-backup-learn-more-link"
          slot="support-link"
          is="moz-support-link"
          support-page="firefox-backup"
          data-l10n-id="restore-from-backup-support-link"
        ></a>
      </moz-message-bar>
    `;
  }
  errorTemplate() {
    // We handle incorrect password errors in the password input
    if (this.isIncorrectPassword) {
      return null;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <moz-message-bar
        id="restore-from-backup-error"
        type="error"
        data-l10n-id=${(0,chrome_browser_content_backup_backup_errors_mjs__WEBPACK_IMPORTED_MODULE_4__.getErrorL10nId)(this.backupServiceState?.recoveryErrorCode)}
      >
      </moz-message-bar>
    `;
  }
  render() {
    this.applyContentCustomizations();
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
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

/***/ 58777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BackupSettings)
/* harmony export */ });
/* harmony import */ var browser_components_backup_content_backup_settings_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93297);
/* harmony import */ var browser_themes_shared_preferences_preferences_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20703);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11540);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48334);
/* harmony import */ var chrome_browser_content_backup_backup_errors_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30585);
/* harmony import */ var chrome_browser_content_backup_backup_constants_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43039);
/* harmony import */ var chrome_browser_content_backup_turn_on_scheduled_backups_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59164);
/* harmony import */ var chrome_browser_content_backup_turn_off_scheduled_backups_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12390);
/* harmony import */ var chrome_browser_content_backup_restore_from_backup_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45603);
/* harmony import */ var chrome_browser_content_backup_enable_backup_encryption_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(44029);
/* harmony import */ var chrome_browser_content_backup_disable_backup_encryption_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(92378);


/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */






// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

const BACKUP_ERROR_CODE_PREF_NAME = "browser.backup.errorCode";

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
    backupErrorCode: {
      type: Number
    },
    _enableEncryptionTypeAttr: {
      type: String
    }
  };
  static get queries() {
    return {
      scheduledBackupsButtonEl: "#backup-toggle-scheduled-button",
      triggerBackupButtonEl: "#backup-trigger-button",
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
      scheduledBackupsDescriptionEl: "#scheduled-backups-description",
      backupErrorBarEl: "#create-backup-error"
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
      lastBackupFileName: "",
      supportBaseLink: "",
      backupInProgress: false,
      recoveryInProgress: false,
      recoveryErrorCode: 0
    };
    this.backupErrorCode = this.#readBackupErrorPref();
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
    this.addEventListener("dialogCancel", this);
    this.addEventListener("restoreFromBackupConfirm", this);
    this.addEventListener("restoreFromBackupChooseFile", this);
  }
  #readBackupErrorPref() {
    return Services.prefs.getIntPref(BACKUP_ERROR_CODE_PREF_NAME);
  }
  handleErrorBarDismiss = () => {
    // Reset the pref and reactive state; Lit will re-render without the bar.
    Services.prefs.setIntPref(BACKUP_ERROR_CODE_PREF_NAME, chrome_browser_content_backup_backup_constants_mjs__WEBPACK_IMPORTED_MODULE_5__.ERRORS.NONE);
    this.backupErrorCode = 0;
  };
  handleEvent(event) {
    switch (event.type) {
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
    }
  }
  handleBackupTrigger() {
    this.dispatchEvent(new CustomEvent("BackupUI:TriggerCreateBackup", {
      bubbles: true
    }));
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
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
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
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<dialog
      id="turn-on-scheduled-backups-dialog"
      class="backup-dialog"
    >
      <turn-on-scheduled-backups
        defaultlabel=${fileName}
        defaultpath=${path}
        defaulticonurl=${iconURL}
        .supportBaseLink=${this.backupServiceState.supportBaseLink}
      ></turn-on-scheduled-backups>
    </dialog>`;
  }
  turnOffScheduledBackupsDialogTemplate() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<dialog id="turn-off-scheduled-backups-dialog">
      <turn-off-scheduled-backups></turn-off-scheduled-backups>
    </dialog>`;
  }
  restoreFromBackupDialogTemplate() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<dialog id="restore-from-backup-dialog">
      <restore-from-backup></restore-from-backup>
    </dialog>`;
  }
  restoreFromBackupTemplate() {
    let descriptionL10nID = this.backupServiceState.scheduledBackupsEnabled ? "settings-data-backup-scheduled-backups-on-restore-description" : "settings-data-backup-scheduled-backups-off-restore-description";
    let restoreButtonL10nID = this.backupServiceState.scheduledBackupsEnabled ? "settings-data-backup-scheduled-backups-on-restore-choose" : "settings-data-backup-scheduled-backups-off-restore-choose";
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<section id="restore-from-backup">
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
          data-l10n-id=${restoreButtonL10nID}
        ></moz-button>
        <div
          id="backup-restore-description"
          data-l10n-id=${descriptionL10nID}
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
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<dialog
      id="enable-backup-encryption-dialog"
      class="backup-dialog"
    >
      <enable-backup-encryption
        type=${this._enableEncryptionTypeAttr}
        .supportBaseLink=${this.backupServiceState.supportBaseLink}
      ></enable-backup-encryption>
    </dialog>`;
  }
  disableBackupEncryptionDialogTemplate() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<dialog id="disable-backup-encryption-dialog">
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
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      <div id="last-backup-info">
        <div
          id="last-backup-date"
          data-l10n-id="settings-data-backup-last-backup-date"
          data-l10n-args=${JSON.stringify(backupDateArgs)}
        ></div>
        <div
          id="last-backup-filename"
          data-l10n-id="settings-data-backup-last-backup-filename"
          data-l10n-args=${JSON.stringify(backupFileNameArgs)}
        ></div>
      </div>
    `;
  }
  backupLocationTemplate() {
    let iconURL = this.backupServiceState.defaultParent.iconURL || this.#placeholderIconURL;
    let {
      backupDirPath
    } = this.backupServiceState;
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      <div id="last-backup-location-control">
        <span data-l10n-id="settings-data-backup-last-backup-location"></span>
        <input
          id="last-backup-location"
          class="backup-location-filepicker-input"
          type="text"
          readonly
          .value=${backupDirPath}
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
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<section id="backup-password-controls">
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
      ${this.backupServiceState.encryptionEnabled ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<moz-button
            id="backup-change-password-button"
            @click=${this.handleChangePassword}
            data-l10n-id="settings-data-change-password"
          ></moz-button>` : null}
    </section>`;
  }
  errorBarTemplate() {
    const l10nId = (0,chrome_browser_content_backup_backup_errors_mjs__WEBPACK_IMPORTED_MODULE_4__.getErrorL10nId)(this.backupErrorCode);
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      <moz-message-bar
        type="error"
        id="create-backup-error"
        dismissable
        data-l10n-id=${l10nId}
        @message-bar:user-dismissed=${this.handleErrorBarDismiss}
      ></moz-message-bar>
    `;
  }
  updated() {
    if (this.backupServiceState.scheduledBackupsEnabled) {
      let input = this.lastBackupLocationInputEl;
      input.setSelectionRange(input.value.length, input.value.length);
    }
  }
  render() {
    let scheduledBackupsEnabledL10nID = this.backupServiceState.scheduledBackupsEnabled ? "settings-data-backup-scheduled-backups-on" : "settings-data-backup-scheduled-backups-off";
    let backupTriggerL10nID = this.backupServiceState.backupInProgress ? "settings-data-backup-in-progress-button" : "settings-data-backup-trigger-button";
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<link
        rel="stylesheet"
        href="${browser_themes_shared_preferences_preferences_css__WEBPACK_IMPORTED_MODULE_1__}"
      />
      <link
        rel="stylesheet"
        href="${browser_components_backup_content_backup_settings_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      ${this.backupErrorCode ? this.errorBarTemplate() : null}
      ${this.turnOnScheduledBackupsDialogTemplate()}
      ${this.turnOffScheduledBackupsDialogTemplate()}
      ${this.enableBackupEncryptionDialogTemplate()}
      ${this.disableBackupEncryptionDialogTemplate()}

      <section id="scheduled-backups">
        <div class="backups-control">
          <span
            id="scheduled-backups-enabled"
            data-l10n-id=${scheduledBackupsEnabledL10nID}
            class="heading-medium"
          ></span>

          <moz-button
            id="backup-trigger-button"
            @click=${this.handleBackupTrigger}
            data-l10n-id=${backupTriggerL10nID}
            ?disabled=${this.backupServiceState.backupInProgress || !this.backupServiceState.scheduledBackupsEnabled}
          ></moz-button>

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

/***/ 59164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TurnOnScheduledBackups)
/* harmony export */ });
/* harmony import */ var browser_components_backup_content_turn_on_scheduled_backups_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3952);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11540);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48334);
/* harmony import */ var chrome_global_content_elements_moz_message_bar_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13532);
/* harmony import */ var chrome_browser_content_backup_password_validation_inputs_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63706);
/* harmony import */ var chrome_browser_content_backup_backup_constants_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43039);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import


const ENABLE_ERROR_L10N_IDS = Object.freeze({
  [chrome_browser_content_backup_backup_constants_mjs__WEBPACK_IMPORTED_MODULE_5__.ERRORS.FILE_SYSTEM_ERROR]: "turn-on-scheduled-backups-error-file-system",
  [chrome_browser_content_backup_backup_constants_mjs__WEBPACK_IMPORTED_MODULE_5__.ERRORS.INVALID_PASSWORD]: "backup-error-password-requirements",
  [chrome_browser_content_backup_backup_constants_mjs__WEBPACK_IMPORTED_MODULE_5__.ERRORS.UNKNOWN]: "backup-error-retry"
});

/**
 * @param {number} errorCode Error code from backup-constants.mjs
 * @returns {string} Localization ID for error message
 */
function getEnableErrorL10nId(errorCode) {
  return ENABLE_ERROR_L10N_IDS[errorCode] ?? ENABLE_ERROR_L10N_IDS[chrome_browser_content_backup_backup_constants_mjs__WEBPACK_IMPORTED_MODULE_5__.ERRORS.UNKNOWN];
}

/**
 * The widget for showing available options when users want to turn on
 * scheduled backups.
 */
class TurnOnScheduledBackups extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  #placeholderIconURL = "chrome://global/skin/icons/page-portrait.svg";
  static properties = {
    backupServiceState: {
      type: Object
    },
    // passed in from parents
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
    supportBaseLink: {
      type: String
    },
    embeddedFxBackupOptIn: {
      type: Boolean,
      reflect: true,
      attribute: "embedded-fx-backup-opt-in"
    },
    hideFilePathChooser: {
      type: Boolean,
      reflect: true,
      attribute: "hide-file-path-chooser"
    },
    hideSecondaryButton: {
      type: Boolean,
      reflect: true,
      attribute: "hide-secondary-button"
    },
    filePathLabelL10nId: {
      type: String,
      reflect: true,
      attribute: "file-path-label-l10n-id"
    },
    turnOnBackupHeaderL10nId: {
      type: String,
      reflect: true,
      attribute: "turn-on-backup-header-l10n-id"
    },
    createPasswordLabelL10nId: {
      type: String,
      reflect: true,
      attribute: "create-password-label-l10n-id"
    },
    turnOnBackupConfirmBtnL10nId: {
      type: String,
      reflect: true,
      attribute: "turn-on-backup-confirm-btn-l10n-id"
    },
    turnOnBackupCancelBtnL10nId: {
      type: String,
      reflect: true,
      attribute: "turn-on-backup-cancel-btn-l10n-id"
    },
    // internal state
    _newIconURL: {
      type: String,
      state: true
    },
    _newLabel: {
      type: String,
      state: true
    },
    _newPath: {
      type: String,
      state: true
    },
    _showPasswordOptions: {
      type: Boolean,
      reflect: true,
      state: true
    },
    _passwordsMatch: {
      type: Boolean,
      state: true
    },
    _inputPassValue: {
      type: String,
      state: true
    },
    // managed by BackupUIChild
    enableBackupErrorCode: {
      type: Number
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
      errorEl: "#enable-backup-encryption-error"
    };
  }
  constructor() {
    super();
    this.backupServiceState = {};
    this.defaultIconURL = "";
    this.defaultLabel = "";
    this.defaultPath = "";
    this._newIconURL = "";
    this._newLabel = "";
    this._newPath = "";
    this._showPasswordOptions = false;
    this._passwordsMatch = false;
    this.enableBackupErrorCode = 0;
  }
  connectedCallback() {
    super.connectedCallback();
    this.dispatchEvent(new CustomEvent("BackupUI:InitWidget", {
      bubbles: true
    }));

    // listen to events from BackupUIChild
    this.addEventListener("BackupUI:SelectNewFilepickerPath", this);

    // listen to events from <password-validation-inputs>
    this.addEventListener("ValidPasswordsDetected", this);
    this.addEventListener("InvalidPasswordsDetected", this);
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
    } else if (event.type == "ValidPasswordsDetected") {
      let {
        password
      } = event.detail;
      this._passwordsMatch = true;
      this._inputPassValue = password;
    } else if (event.type == "InvalidPasswordsDetected") {
      this._passwordsMatch = false;
      this._inputPassValue = "";
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
  close() {
    this.dispatchEvent(new CustomEvent("dialogCancel", {
      bubbles: true,
      composed: true
    }));
    this.reset();
  }
  handleConfirm() {
    let detail;
    if (this._newPath) {
      detail = {
        parentDirPath: this._newPath
      };
    } else if (this.backupServiceState?.backupDirPath) {
      detail = {
        parentDirPath: this.backupServiceState?.backupDirPath
      };
    } else {
      detail = {
        parentDirPath: this.defaultPath
      };
    }
    if (this._showPasswordOptions && this._passwordsMatch) {
      detail.password = this._inputPassValue;
    }
    this.dispatchEvent(new CustomEvent("BackupUI:EnableScheduledBackups", {
      bubbles: true,
      detail
    }));
  }
  handleTogglePasswordOptions() {
    this._showPasswordOptions = this.passwordOptionsCheckboxEl?.checked;
    this._passwordsMatch = false;
  }
  updated(changedProperties) {
    super.updated?.(changedProperties);
    if (changedProperties.has("hideFilePathChooser")) {
      // If hideFilePathChooser is true, show password options
      this._showPasswordOptions = !!this.hideFilePathChooser;

      // Uncheck the checkbox if it exists
      if (this.passwordOptionsCheckboxEl) {
        this.passwordOptionsCheckboxEl.checked = this._showPasswordOptions;
      }
    }
  }
  reset() {
    this._showPasswordOptions = false;
    this.passwordOptionsCheckboxEl.checked = false;
    this._passwordsMatch = false;
    this._inputPassValue = "";
    this.enableBackupErrorCode = 0;
    // we don't want to reset the path when embedded in the spotlight
    if (!this.embeddedFxBackupOptIn) {
      this._newPath = "";
      this._newIconURL = "";
      this._newLabel = "";
    }
    if (this.passwordOptionsExpandedEl) {
      /** @type {import("./password-validation-inputs.mjs").default} */
      const passwordElement = this.passwordOptionsExpandedEl;
      passwordElement.reset();
    }
  }
  defaultFilePathInputTemplate() {
    let filename = this.defaultLabel;
    let iconURL = this.defaultIconURL || this.#placeholderIconURL;
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
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
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <input
        id="backup-location-filepicker-input-custom"
        class="backup-location-filepicker-input"
        type="text"
        readonly
        .value=${filename}
        style=${`background-image: url(${iconURL})`}
      />
    `;
  }
  errorTemplate() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <moz-message-bar
        id="enable-backup-encryption-error"
        type="error"
        .messageL10nId=${getEnableErrorL10nId(this.enableBackupErrorCode)}
      ></moz-message-bar>
    `;
  }
  allOptionsTemplate() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <fieldset id="all-controls">
        <div id="backup-location-controls">
          <label
            id="backup-location-label"
            for="backup-location-filepicker-input"
            data-l10n-id=${this.filePathLabelL10nId || "turn-on-scheduled-backups-location-label"}
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
        </div>
        <fieldset id="sensitive-data-controls">
          <div id="sensitive-data-checkbox">
            <label
              id="sensitive-data-checkbox-label"
              for="sensitive-data-checkbox-input"
              aria-controls="passwords"
              aria-expanded=${this._showPasswordOptions}
            >
              <input
                id="sensitive-data-checkbox-input"
                .value=${this._showPasswordOptions}
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

          ${this._showPasswordOptions ? this.passwordsTemplate() : null}
        </fieldset>
      </fieldset>
    `;
  }
  passwordsTemplate() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <password-validation-inputs
        id="passwords"
        .supportBaseLink=${this.supportBaseLink}
        .createPasswordLabelL10nId=${this.createPasswordLabelL10nId}
        ?embedded-fx-backup-opt-in=${this.embeddedFxBackupOptIn}
      ></password-validation-inputs>
    `;
  }
  contentTemplate() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <form
        id="backup-turn-on-scheduled-wrapper"
        aria-labelledby="backup-turn-on-scheduled-header"
        aria-describedby="backup-turn-on-scheduled-description"
        part="form"
      >
        <h1
          id="backup-turn-on-scheduled-header"
          class="heading-medium"
          data-l10n-id=${this.turnOnBackupHeaderL10nId || "turn-on-scheduled-backups-header"}
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
          ${this.enableBackupErrorCode ? this.errorTemplate() : null}
        </main>

        <moz-button-group id="backup-turn-on-scheduled-button-group">
          <moz-button
            id="backup-turn-on-scheduled-cancel-button"
            @click=${this.close}
            data-l10n-id=${this.turnOnBackupCancelBtnL10nId || "turn-on-scheduled-backups-cancel-button"}
          ></moz-button>
          <moz-button
            id="backup-turn-on-scheduled-confirm-button"
            form="backup-turn-on-scheduled-wrapper"
            @click=${this.handleConfirm}
            type="primary"
            data-l10n-id=${this.turnOnBackupConfirmBtnL10nId || "turn-on-scheduled-backups-confirm-button"}
            ?disabled=${this._showPasswordOptions && !this._passwordsMatch}
          ></moz-button>
        </moz-button-group>
      </form>
    `;
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
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

/***/ 62782:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "password-rules-tooltip.4e287829a93e7f0ce985.css";

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
    createPasswordLabelL10nId: {
      type: String,
      reflect: true,
      attribute: "create-password-label-l10n-id"
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
    this._tooShort = true;
    this._hasEmail = false;
    this._passwordsMatch = false;
    this._passwordsValid = false;
    this._tooltipFocus = false;
  }
  reset() {
    this.formEl.reset();
    this._showRules = false;
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
    this._passwordsMatch = this.inputNewPasswordEl.value == this.inputRepeatPasswordEl.value;
    if (!this._passwordsMatch) {
      const passwords_do_not_match_l10n_message = l10n.formatValueSync("password-validity-do-not-match");
      this.inputRepeatPasswordEl.setCustomValidity(passwords_do_not_match_l10n_message);
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
            .hasEmail=${this._hasEmail}
            .tooShort=${this._tooShort}
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

/***/ 67004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EncryptionEnabled: () => (/* binding */ EncryptionEnabled),
/* harmony export */   ExistingBackup: () => (/* binding */ ExistingBackup),
/* harmony export */   ScheduledBackupsDisabled: () => (/* binding */ ScheduledBackupsDisabled),
/* harmony export */   ScheduledBackupsEnabled: () => (/* binding */ ScheduledBackupsEnabled),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11540);
/* harmony import */ var _backup_settings_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58777);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// eslint-disable-next-line import/no-unresolved


window.MozXULElement.insertFTLIfNeeded("browser/backupSettings.ftl");
window.MozXULElement.insertFTLIfNeeded("branding/brand.ftl");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/Backup/Backup Settings",
  component: "backup-settings",
  argTypes: {}
});
const Template = ({
  backupServiceState
}) => (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
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

/***/ 72195:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "enable-backup-encryption.8d743fbc875915662a93.css";

/***/ }),

/***/ 76150:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-label.af54a5f841ff0af78b0d.css";

/***/ }),

/***/ 78312:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "password-validation-inputs.bb28741d7e8bce533020.css";

/***/ }),

/***/ 83506:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-message-bar.38f3800a4c3d5cfc4354.css";

/***/ }),

/***/ 92378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DisableBackupEncryption)
/* harmony export */ });
/* harmony import */ var browser_components_backup_content_disable_backup_encryption_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42346);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11540);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48334);
/* harmony import */ var chrome_global_content_elements_moz_message_bar_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13532);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




// eslint-disable-next-line import/no-unassigned-import

const ERROR_L10N_ID = "backup-error-retry";

/**
 * The widget for disabling password protection if the backup is already
 * encrypted.
 */
class DisableBackupEncryption extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    // managed by BackupUIChild
    disableEncryptionErrorCode: {
      type: Number
    }
  };
  static get queries() {
    return {
      cancelButtonEl: "#backup-disable-encryption-cancel-button",
      confirmButtonEl: "#backup-disable-encryption-confirm-button",
      errorEl: "#disable-backup-encryption-error"
    };
  }
  constructor() {
    super();
    this.disableEncryptionErrorCode = 0;
  }
  close() {
    this.dispatchEvent(new CustomEvent("dialogCancel", {
      bubbles: true,
      composed: true
    }));
    this.reset();
  }
  reset() {
    this.disableEncryptionErrorCode = 0;
  }
  handleConfirm() {
    this.dispatchEvent(new CustomEvent("BackupUI:DisableEncryption", {
      bubbles: true
    }));
  }
  errorTemplate() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <moz-message-bar
        id="disable-backup-encryption-error"
        type="error"
        .messageL10nId=${ERROR_L10N_ID}
      ></moz-message-bar>
    `;
  }
  contentTemplate() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
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
          ${this.disableEncryptionErrorCode ? this.errorTemplate() : null}
        </main>

        <moz-button-group id="backup-disable-encryption-button-group">
          <moz-button
            id="backup-disable-encryption-cancel-button"
            @click=${this.close}
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
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
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

/***/ 93297:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "backup-settings.af2f902397e655ca3926.css";

/***/ }),

/***/ 95380:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "turn-off-scheduled-backups.f6dd564377752133c9c4.css";

/***/ })

}]);
//# sourceMappingURL=backup-settings-stories.eec2b892.iframe.bundle.js.map