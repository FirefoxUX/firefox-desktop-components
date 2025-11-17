"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[48,201,1836,3532,6592],{

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

/**
 * @typedef {"info" | "warning" | "success" | "error"} MozMessageBarType
 */

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
    supportLinkSlot: "slot[name=support-link]",
    supportLinkHolder: ".link"
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
    supportPage: {
      type: String
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

    /**
     * The type of the displayed message.
     *
     * @type {MozMessageBarType}
     */
    this.type = "info";

    /**
     * Whether or not the element is dismissable.
     *
     * @type {boolean}
     */
    this.dismissable = false;

    /**
     * The message text.
     *
     * @type {string | undefined}
     */
    this.message = undefined;

    /**
     * l10n ID for the message.
     *
     * @type {string | undefined}
     */
    this.messageL10nId = undefined;

    /**
     * Any args needed for the message l10n ID.
     *
     * @type {Record<string, string> | undefined}
     */
    this.messageL10nArgs = undefined;

    /**
     * The heading of the message.
     *
     * @type {string | undefined}
     */
    this.heading = undefined;

    /**
     * The support page stub.
     *
     * @type {string | undefined}
     */
    this.supportPage = undefined;
  }
  onActionSlotchange() {
    let actions = this.actionsSlot.assignedNodes();
    this.actionsEl.classList.toggle("active", actions.length);
  }
  onLinkSlotChange() {
    this.messageEl.classList.toggle("has-link-after", !!this.supportLinkEls.length || !!this.supportPage);
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
    if (this.supportPage) {
      return this.supportLinkHolder.children;
    }
    return this.supportLinkSlot.assignedElements();
  }
  supportLinkTemplate() {
    if (this.supportPage) {
      return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<a
        is="moz-support-link"
        support-page=${this.supportPage}
        part="support-link"
        aria-describedby="heading message"
      ></a>`;
    }
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<slot
      name="support-link"
      @slotchange=${this.onLinkSlotChange}
    ></slot>`;
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
                <slot name="message">
                  <span
                    id="message"
                    class=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.when)(this.supportPage, () => "message has-link-after", () => "message")}
                    data-l10n-id=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.messageL10nId)}
                    data-l10n-args=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(JSON.stringify(this.messageL10nArgs))}
                  >
                    ${this.message}
                  </span>
                </slot>
                <span class="link"> ${this.supportLinkTemplate()} </span>
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
    const popover = this.passwordRulesEl;
    const isWideViewport = window.innerWidth >= 1200;
    const isRTL = document.dir === "rtl";

    // Calculate top position
    const topPos = isWideViewport ? anchorRect.top + anchorRect.height / 2 : anchorRect.bottom;
    popover.style.top = `${topPos}px`;
    popover.style.right = isRTL ? "auto" : "inherit";
    popover.style.left = isRTL ? "inherit" : "auto";
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

/***/ 30082:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-button.8f169f1865bcd610d148.css";

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
   *
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
   *
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
          this.#insertSeparator = Services.locale.insertSeparatorBeforeAccesskeys;
          this.#alwaysAppendAccessKey = Services.locale.alwaysAppendAccesskeys;
        } catch {
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

/***/ 37808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangePassword: () => (/* binding */ ChangePassword),
/* harmony export */   ChangePasswordError: () => (/* binding */ ChangePasswordError),
/* harmony export */   SetPassword: () => (/* binding */ SetPassword),
/* harmony export */   SetPasswordError: () => (/* binding */ SetPasswordError),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11540);
/* harmony import */ var chrome_global_content_elements_moz_card_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30048);
/* harmony import */ var chrome_browser_content_backup_backup_constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43039);
/* harmony import */ var _enable_backup_encryption_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44029);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// eslint-disable-next-line import/no-unresolved




window.MozXULElement.insertFTLIfNeeded("browser/backupSettings.ftl");
window.MozXULElement.insertFTLIfNeeded("branding/brand.ftl");
const SELECTABLE_ERRORS = {
  "(none)": 0,
  ...chrome_browser_content_backup_backup_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.ERRORS
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/Backup/Enable Encryption",
  component: "enable-backup-encryption",
  argTypes: {
    type: {
      control: {
        type: "select"
      },
      options: ["set-password", "change-password"]
    },
    enableEncryptionErrorCode: {
      options: Object.keys(SELECTABLE_ERRORS),
      mapping: SELECTABLE_ERRORS,
      control: {
        type: "select"
      }
    },
    rerunEncryptionErrorCode: {
      options: Object.keys(SELECTABLE_ERRORS),
      mapping: SELECTABLE_ERRORS,
      control: {
        type: "select"
      }
    }
  }
});
const Template = ({
  type,
  enableEncryptionErrorCode,
  rerunEncryptionErrorCode
}) => (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <moz-card style="width: 23.94rem; position: relative;">
    <enable-backup-encryption
      type=${type}
      .enableEncryptionErrorCode=${enableEncryptionErrorCode}
      .rerunEncryptionErrorCode=${rerunEncryptionErrorCode}
    ></enable-backup-encryption>
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
const SetPasswordError = Template.bind({});
SetPasswordError.args = {
  type: "set-password",
  enableEncryptionErrorCode: chrome_browser_content_backup_backup_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.ERRORS.INVALID_PASSWORD
};
const ChangePasswordError = Template.bind({});
ChangePasswordError.args = {
  type: "change-password",
  rerunEncryptionErrorCode: chrome_browser_content_backup_backup_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.ERRORS.INVALID_PASSWORD
};

/***/ }),

/***/ 43039:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ERRORS: () => (/* binding */ ERRORS),
/* harmony export */   STEPS: () => (/* binding */ STEPS),
/* harmony export */   errorString: () => (/* binding */ errorString)
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
function errorString(errorCodeToLookup) {
  for (let [errorName, errorCode] of Object.entries(ERRORS)) {
    if (errorCode == errorCodeToLookup) {
      return errorName;
    }
  }
  return "UNDEFINED_ERROR";
}

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
          data-l10n-id="settings-sensitive-data-encryption-description"
        >
        </span>
        <a
          id="backup-enable-encryption-learn-more-link"
          is="moz-support-link"
          support-page="firefox-backup"
          data-l10n-id="enable-backup-encryption-support-link"
          utm-content="add-password"
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
    this.passwordRulesEl.hide();
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

module.exports = __webpack_require__.p + "password-validation-inputs.9d90898b91a04b0775bd.css";

/***/ }),

/***/ 83506:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-message-bar.ed09b992746623424667.css";

/***/ })

}]);
//# sourceMappingURL=enable-backup-encryption-stories.7763896f.iframe.bundle.js.map