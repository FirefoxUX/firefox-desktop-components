"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[803,6284,9240],{

/***/ 9802:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "asrouter-newtab-message.e8e6c18d458b89f22bcc.css";

/***/ }),

/***/ 14617:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlockOnSecondaryButton: () => (/* binding */ BlockOnSecondaryButton),
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   DismissOnSecondaryButton: () => (/* binding */ DismissOnSecondaryButton),
/* harmony export */   NoImage: () => (/* binding */ NoImage),
/* harmony export */   WithSecondaryButton: () => (/* binding */ WithSecondaryButton),
/* harmony export */   WithoutDismissButton: () => (/* binding */ WithoutDismissButton),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var _asrouter_newtab_message_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83136);
/* harmony import */ var _asrouter_newtab_message_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9802);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// eslint-disable-next-line import/no-unresolved



window.MozXULElement.insertFTLIfNeeded("browser/newtab/newtab.ftl");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/ASRouter/ASRouter New Tab Message",
  component: "asrouter-newtab-message",
  argTypes: {}
});
const Template = ({
  messageData
}) => (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <style>
    .asrouter-newtab-message-wrapper {
      background-color: var(--background-color-canvas);
      border: 2px solid var(--card-border-color);
      color: var(--text-color);
      border-radius: var(--border-radius-large);
      margin-block: 0 var(--space-xlarge);
      margin-inline: auto;
      overflow: hidden;
      max-width: 904px;
    }
  </style>
  <div class="asrouter-newtab-message-wrapper">
    <asrouter-newtab-message
      .messageData=${messageData}
      .cssOverride=${_asrouter_newtab_message_css__WEBPACK_IMPORTED_MODULE_2__}
      .handleBlock=${() => console.warn("handleBlock called — message permanently blocked")}
      .handleDismiss=${() => console.warn("handleDismiss called — DISMISS telemetry sent, message closed")}
      .handleClose=${() => console.warn("handleClose called — message closed")}
      .handleClick=${source => console.warn(`handleClick called — CLICK telemetry sent, source: ${source}`)}
    ></asrouter-newtab-message>
  </div>
`;
const BASE_MESSAGE = {
  id: "TEST_ASROUTER_NEWTAB_MESSAGE",
  template: "newtab_message",
  content: {
    messageType: "ASRouterNewTabMessage",
    // eslint-disable-next-line mozilla/no-newtab-refs-outside-newtab
    imageSrc: "chrome://newtab/content/data/content/assets/kit-in-circle.svg",
    heading: "Test Heading",
    body: "This is a test message body.",
    primaryButton: {
      label: "Primary Action",
      action: {
        type: "OPEN_URL",
        data: {
          args: "https://www.mozilla.org/"
        }
      }
    }
  },
  trigger: {
    id: "newtabMessageCheck"
  },
  groups: []
};
const Default = Template.bind({});
Default.args = {
  messageData: BASE_MESSAGE
};
const WithSecondaryButton = Template.bind({});
WithSecondaryButton.args = {
  messageData: {
    ...BASE_MESSAGE,
    content: {
      ...BASE_MESSAGE.content,
      secondaryButton: {
        label: "Not now",
        action: {
          type: "CANCEL"
        }
      }
    }
  }
};
const WithoutDismissButton = Template.bind({});
WithoutDismissButton.args = {
  messageData: {
    ...BASE_MESSAGE,
    content: {
      ...BASE_MESSAGE.content,
      hideDismissButton: true
    }
  }
};
const DismissOnSecondaryButton = Template.bind({});
DismissOnSecondaryButton.args = {
  messageData: {
    ...BASE_MESSAGE,
    content: {
      ...BASE_MESSAGE.content,
      secondaryButton: {
        label: "Not Now",
        action: {
          dismiss: true
        }
      }
    }
  }
};
const BlockOnSecondaryButton = Template.bind({});
BlockOnSecondaryButton.args = {
  messageData: {
    ...BASE_MESSAGE,
    content: {
      ...BASE_MESSAGE.content,
      secondaryButton: {
        label: "No Thanks",
        action: {
          type: "BLOCK_MESSAGE",
          data: {
            id: "TEST_ASROUTER_NEWTAB_MESSAGE"
          }
        }
      }
    }
  }
};
const NoImage = Template.bind({});
NoImage.args = {
  messageData: {
    ...BASE_MESSAGE,
    content: {
      ...BASE_MESSAGE.content,
      imageSrc: ""
    }
  }
};

/***/ }),

/***/ 26284:
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
    if ((controlElement.localName == "checkbox" || controlElement.localName == "radio") && controlElement.hasAttribute("disabled")) {
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

/***/ 30082:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-button.f67d7f67c6092f201516.css";

/***/ }),

/***/ 76150:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-label.af54a5f841ff0af78b0d.css";

/***/ }),

/***/ 79240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozButton)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_button_moz_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30082);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);
/* harmony import */ var chrome_global_content_elements_moz_label_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26284);

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
  /** @type {MozButton} */
  host;

  /** @type {string | null} */
  #menuId;

  /** @type {HTMLElement | null} */
  #menuEl;

  /** @type {boolean} */
  #hostIsSplitButton;

  /**
   * @param {MozButton} host
   */
  constructor(host) {
    this.host = host;
    host.addController(this);
  }
  hostConnected() {
    this.hostUpdated();
  }
  hostDisconnected() {
    this.removePanelListListeners();
    this.#menuId = null;
    this.#menuEl = null;
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
    if (event.type == "click") {
      event.preventDefault();
    }
    if (event.type == "mousedown" && event.button == 0 || event.inputSource == MouseEvent.MOZ_SOURCE_KEYBOARD || !event.detail) {
      if (this.#hostIsSplitButton) {
        this.#menuEl?.toggle(event, this.host.chevronButtonEl);
      } else {
        this.#menuEl?.toggle(event, this.host);
      }
    }
  };

  /**
   * Listener for shown/hidden that keeps the host's open attribute up to date.
   *
   * @param {CustomEvent} event
   *   The shown or hidden event.
   */
  #updateOpenAttr = event => {
    if (event.type == "shown") {
      this.host.toggleAttribute("open", true);
    } else if (event.type == "hidden") {
      this.host.removeAttribute("open");
    }
  };

  /**
   * Removes event listeners related to panel-list.
   */
  removePanelListListeners() {
    if (this.#hostIsSplitButton) {
      this.host.chevronButtonEl?.removeEventListener("click", this.openPanelList);
      this.host.chevronButtonEl?.removeEventListener("mousedown", this.openPanelList);
    } else {
      this.host.removeEventListener("click", this.openPanelList);
      this.host.removeEventListener("mousedown", this.openPanelList);
    }
    this.#menuEl?.removeEventListener("shown", this.#updateOpenAttr);
    this.#menuEl?.removeEventListener("hidden", this.#updateOpenAttr);
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
    this.#menuEl.addEventListener("shown", this.#updateOpenAttr);
    this.#menuEl.addEventListener("hidden", this.#updateOpenAttr);
    this.host.ariaHasPopup = "menu";
    this.host.ariaExpanded = this.#menuEl.open ? "true" : "false";
    this.host.toggleAttribute("open", this.#menuEl.open);
    let triggerEl = this.#hostIsSplitButton ? this.host.chevronButtonEl : this.host.buttonEl;
    if (triggerEl) {
      triggerEl.popoverTargetElement = this.#menuEl;
    }
  }

  /**
   * Cleans up panel-list integration,
   * removing event listeners and clearing ARIA attributes.
   */
  panelListCleanUp() {
    this.removePanelListListeners();
    this.host.ariaHasPopup = null;
    this.host.ariaExpanded = null;
    this.host.removeAttribute("open");
    let triggerEl = this.#hostIsSplitButton ? this.host.chevronButtonEl : this.host.buttonEl;
    if (triggerEl) {
      triggerEl.popoverTargetElement = null;
    }
  }
}

/**
 * A button with multiple types and three sizes.
 *
 * @tagname moz-button
 * @property {string} label - The button's label, will be overridden by slotted content.
 * @property {string} type - The button type.
 *   Options: default, primary, destructive, icon, icon ghost, ghost.
 * @property {string} size - The button size.
 *   Options: default, small, large.
 * @property {boolean} disabled - The disabled state.
 * @property {string} title - The button's title attribute, used in shadow DOM and therefore not as an attribute on moz-button.
 * @property {string} titleAttribute - Internal, map title attribute to the title JS property.
 * @property {string} tooltipText - Set the title property, the title attribute will be used first.
 * @property {string} ariaLabel - The button's aria-label attribute, used in shadow DOM and therefore not as an attribute on moz-button.
 * @property {string} ariaHasPopup - The button's aria-haspopup attribute, that indicates that a popup element can be triggered by the button.
 * @property {string} ariaExpanded - The button's aria-expanded attribute, that indicates whether or not the controlled elements are displayed or hidden.
 * @property {string} ariaPressed - The button's aria-pressed attribute, used in shadow DOM and therefore not as an attribute on moz-button.
 * @property {string} iconSrc - Path to the icon that should be displayed in the button.
 * @property {string} ariaLabelAttribute - Internal, map aria-label attribute to the ariaLabel JS property.
 * @property {string} ariaHasPopupAttribute - Internal, map aria-haspopup attribute to the ariaHasPopup JS property.
 * @property {string} ariaExpandedAttribute - Internal, map aria-expanded attribute to the ariaExpanded JS property.
 * @property {string} ariaPressedAttribute - Internal, map aria-pressed attribute to the ariaPressed JS property.
 * @property {string} hasVisibleLabel - Internal, tracks whether or not the button has a visible label.
 * @property {boolean} attention - Show a dot notification on the button if true.
 * @property {boolean} parentDisabled - When the parent of this component is disabled.
 * @property {string} iconPosition - The icon's position relative to the button label.
 *   Options: start, end.
 * @property {string} menuId - A CSS selector string that identifies the associated menu element controlled by the button.
 * @property {HTMLButtonElement} buttonEl - The internal button element in the shadow DOM.
 * @property {HTMLButtonElement} slotEl - The internal slot element in the shadow DOM.
 * @cssproperty [--button-outer-padding-inline] - Used to set the outer inline padding of toolbar style buttons
 * @cssproperty [--button-outer-padding-block] - Used to set the outer block padding of toolbar style buttons.
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
    ariaPressed: {
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
    this.performUpdate();
    this.buttonEl?.click();
  }
  checkForLabelText() {
    this.hasVisibleLabel = this.slotEl?.assignedNodes().some(node => node.textContent.trim());
  }
  labelTemplate() {
    if (this.label) {
      return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span class="text" .textContent=${this.label}></span>`;
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
        <span
          class="button-background"
          part="chevron-button"
          type=${this.type}
          size=${this.size}
        >
          <img
            src="chrome://global/skin/icons/arrow-down${this.size === "small" ? "-12" : ""}.svg"
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
        aria-pressed=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.ariaPressed)}
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

/***/ 83136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ASRouterNewTabMessage)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82242);
/* harmony import */ var chrome_global_content_elements_moz_button_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79240);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// This component participates in newtab train-hopping and is packaged into the
// newtab folder at build-time, so chrome://newtab refs are intentional here.
/* eslint-disable mozilla/no-newtab-refs-outside-newtab */



// eslint-disable-next-line import/no-unassigned-import

const DEFAULT_CSS = "chrome://newtab/content/data/content/external-components/asrouter-newtab-message/asrouter-newtab-message.css";

// Polling cadence for re-evaluating the message's declarative `content.states`
// targeting while the message is visible.
const POLL_INTERVAL_MS = 3000;

// Action types that, when present on a button's `action`, are dispatched
// directly into New Tab's Redux store via the injected `dispatch` instead
// of being forwarded to SpecialMessageActions in the parent process. This
// is a deliberate, narrow boundary crossing — only the types listed here
// are allowed to reach into HNT internals. Long-term, these should migrate
// to a stable train-hop-compatible SpecialMessageActions API.
const NEWTAB_DISPATCH_ACTION_TYPES = new Set(["WIDGETS_OPT_IN"]);
class ASRouterNewTabMessage extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.MozLitElement {
  static properties = {
    messageData: {
      type: Object
    },
    cssOverride: {
      type: String
    },
    /**
     * These are injected by New Tab's MessageWrapper component, and should
     * be called in order to do message management operations. See the
     * README.md for this component for more details.
     */
    handleDismiss: {
      type: Function
    },
    handleClick: {
      type: Function
    },
    handleBlock: {
      type: Function
    },
    handleClose: {
      type: Function
    },
    isIntersecting: {
      type: Boolean
    },
    /**
     * Injected by New Tab's MessageWrapper. When a button's action type is
     * in `NEWTAB_DISPATCH_ACTION_TYPES`, the action is forwarded to this
     * dispatch instead of going through SpecialMessageActions.
     */
    dispatch: {
      type: Function
    },
    /**
     * Internal reactive state holding the content overlay from the first
     * `content.states` entry whose `targeting` currently matches, or null when
     * none match (base content). Re-evaluated when the message scrolls into
     * view, when the tab becomes visible, and on a recurring poll.
     */
    _matchedContent: {
      state: true
    }
  };
  #pollTimer = null;
  #onVisibilityChange = null;
  #reachedFinalState = false;
  connectedCallback() {
    super.connectedCallback();
    if (!this.messageData?.content?.states?.length) {
      return;
    }
    this.#onVisibilityChange = () => this.#evaluateStates();
    this.ownerDocument.addEventListener("visibilitychange", this.#onVisibilityChange);
    this.#startPolling();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.#teardownTriggers();
  }

  /**
   * isIntersecting is set by the newtab MessageWrapper after its
   * IntersectionObserver fires, which can land after connectedCallback, so
   * evaluating here - rather than eagerly in connectedCallback - makes the
   * first evaluation deterministic instead of racing that prop.
   *
   * @param {Map} changedProperties
   */
  updated(changedProperties) {
    if (changedProperties.has("isIntersecting") && this.isIntersecting) {
      this.#evaluateStates();
    }
  }
  #teardownTriggers() {
    this.#stopPolling();
    if (this.#onVisibilityChange) {
      this.ownerDocument.removeEventListener("visibilitychange", this.#onVisibilityChange);
      this.#onVisibilityChange = null;
    }
  }
  #startPolling() {
    if (this.#pollTimer) {
      return;
    }
    this.#pollTimer = globalThis.setInterval(() => this.#evaluateStates(), POLL_INTERVAL_MS);
  }
  #stopPolling() {
    if (this.#pollTimer) {
      globalThis.clearInterval(this.#pollTimer);
      this.#pollTimer = null;
    }
  }

  /**
   * Ask the parent to evaluate every `content.states` entry's `targeting` (in
   * one round-trip) and swap in the first matching entry's content overlay.
   * States are evaluated in order, so list them most- to least-specific.
   * Skipped until the message has scrolled into view, while the tab is
   * backgrounded, and once a `final` state has been reached. The result is
   * applied asynchronously via setMatchedState().
   */
  #evaluateStates() {
    if (this.#reachedFinalState) {
      return;
    }
    const states = this.messageData?.content?.states;
    if (!states?.length) {
      return;
    }
    if (this.ownerDocument.visibilityState !== "visible" || !this.isIntersecting) {
      return;
    }
    this.dispatchEvent(new CustomEvent("ASRouterNewTabMessage:EvaluateTargeting", {
      bubbles: true,
      detail: {
        targetings: states.map(state => state.targeting)
      }
    }));
  }

  /**
   * Called by ASRouterNewTabMessageChild with the index of the first
   * `content.states` entry whose targeting matched (or -1 for none), selecting
   * the content overlay applied by #currentContent().
   *
   * @param {number} index
   */
  setMatchedState(index) {
    if (this.#reachedFinalState) {
      return;
    }
    const states = this.messageData?.content?.states ?? [];
    const matched = index >= 0 ? states[index] : null;
    this._matchedContent = matched?.content ?? null;
    // A state can opt out of all further re-evaluation once reached (e.g. a
    // terminal "completed" state), so a finished message stops polling and
    // stops reacting to visibility changes rather than being able to bounce
    // back out of the final state.
    if (matched?.final) {
      this.#reachedFinalState = true;
      this.#teardownTriggers();
    }
  }

  /**
   * Returns the effective content, overlaying the matched state's content (see
   * #evaluateStates / setMatchedState). Used by both render() and the button
   * handlers so the displayed UI and the action it triggers stay in sync.
   *
   * @returns {object} The (possibly overlaid) content.
   */
  #currentContent() {
    const content = this.messageData?.content ?? {};
    return this._matchedContent ? {
      ...content,
      ...this._matchedContent
    } : content;
  }

  /**
   * Executes a SpecialMessageAction by dispatching an event that will be caught
   * by the ASRouterNewTabMessage JSWindowActor pair and forwarded to
   * SpecialMessageActions.handleAction() in the parent process.
   *
   * @param {object} action - The action object to execute
   * @param {string} action.type - The action type (e.g., "OPEN_URL", "OPEN_SIDEBAR")
   * @param {*} action.data - Action-specific data
   *
   * @example
   * this.specialMessageAction({
   *   type: "OPEN_SIDEBAR",
   *   data: "viewGenaiChatSidebar"
   * });
   */
  specialMessageAction(action) {
    // Actions whose type is in the allowlist are dispatched directly into
    // New Tab's Redux store via the injected `dispatch`. Everything else
    // flows through the JSWindowActor pair to SpecialMessageActions in the
    // parent process.
    if (NEWTAB_DISPATCH_ACTION_TYPES.has(action?.type) && this.dispatch) {
      this.dispatch(action);
      return;
    }
    this.dispatchEvent(new CustomEvent("ASRouterNewTabMessage:SpecialMessageAction", {
      bubbles: true,
      detail: {
        action
      }
    }));
  }
  #handleXButton() {
    this.handleBlock?.();
    this.#handleDismiss();
  }
  #handleDismiss() {
    this.handleDismiss?.();
  }
  #handlePrimaryButton() {
    const {
      primaryButton
    } = this.#currentContent();
    this.handleClick?.("primary-button");
    if (primaryButton?.action?.type) {
      this.specialMessageAction(primaryButton.action);
    }
    if (primaryButton?.action?.dismiss) {
      this.#handleDismiss();
    }
  }
  #handleSecondaryButton() {
    const {
      secondaryButton
    } = this.#currentContent();
    this.handleClick?.("secondary-button");
    if (secondaryButton?.action?.type) {
      this.specialMessageAction(secondaryButton.action);
    }
    if (secondaryButton?.action?.dismiss) {
      this.#handleDismiss();
    }
  }
  #renderHeading(value) {
    if (!value) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.nothing;
    }
    if (typeof value === "string") {
      return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<h2 id="asrouter-newtab-message-heading">${value}</h2>`;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<h2
      id="asrouter-newtab-message-heading"
      data-l10n-id=${value.string_id}
    ></h2>`;
  }
  #renderBody(value) {
    if (!value) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.nothing;
    }
    if (typeof value === "string") {
      return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<p>${value}</p>`;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<p data-l10n-id=${value.string_id}></p>`;
  }
  #renderSecondaryButton(secondaryButton) {
    if (!secondaryButton) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.nothing;
    }
    // Each button's moz-button `type` can be overridden from content (e.g. so a
    // step-style message can render both buttons non-primary); defaults keep
    // the primary/secondary styling.
    const type = secondaryButton.type ?? "default";
    return typeof secondaryButton.label === "string" ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<moz-button
          type=${type}
          @click=${this.#handleSecondaryButton.bind(this)}
          >${secondaryButton.label}</moz-button
        >` : (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<moz-button
          type=${type}
          @click=${this.#handleSecondaryButton.bind(this)}
          data-l10n-id=${secondaryButton.label.string_id}
        ></moz-button>`;
  }
  #renderPrimaryButtonContent(primaryButton) {
    if (!primaryButton) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.nothing;
    }
    const type = primaryButton.type ?? "primary";
    if (typeof primaryButton.label === "string") {
      return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<moz-button
        type=${type}
        iconSrc=${primaryButton.iconSrc || chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.nothing}
        @click=${this.#handlePrimaryButton.bind(this)}
        >${primaryButton.label}</moz-button
      >`;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<moz-button
      type=${type}
      iconSrc=${primaryButton.iconSrc || chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.nothing}
      @click=${this.#handlePrimaryButton.bind(this)}
      data-l10n-id=${primaryButton.label.string_id}
    ></moz-button>`;
  }

  /**
   * Whether the message supplies alternate image variants (narrow and/or
   * responsive). This opts the message into the flush image treatment: a
   * full-bleed banner in the narrow (vertical) layout and a full-height,
   * flush image column in the medium and wide layouts.
   *
   * @param {object} content - The message content object.
   * @returns {boolean}
   */
  #hasResponsiveImage(content) {
    return Boolean(content?.imageSrcResponsive || content?.imageSrcDarkResponsive || content?.imageSrcNarrow || content?.imageSrcDarkNarrow);
  }

  /**
   * Renders the message image. When only `imageSrc` is provided it renders a
   * single light-mode image sized as a fixed thumbnail. When alternate variants
   * are supplied, it renders a <picture> that swaps the source based on color
   * scheme and viewport width across three tiers, matching the layout
   * breakpoints in the stylesheet:
   *   - responsive banner below 724px,
   *   - narrow (portrait) column between 724px and 1072px,
   *   - base image column at/above 1072px (also the <img> fallback).
   * Dark-scheme sources are listed before the scheme-agnostic light sources so
   * the first matching <source> wins correctly in either color scheme. The
   * flush treatment is driven by the `has-responsive-image` class on the host
   * <aside> (see `#hasResponsiveImage`).
   *
   * @param {object} content - The message content object.
   */
  #renderImage(content) {
    const imageSrc = content?.imageSrc;
    if (!imageSrc) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.nothing;
    }
    const {
      imageSrcDark,
      imageSrcNarrow,
      imageSrcDarkNarrow,
      imageSrcResponsive,
      imageSrcDarkResponsive
    } = content;
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<picture class="message-image">
      ${imageSrcDark ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<source
            srcset=${imageSrcDark}
            media="(min-width: 1072px) and (prefers-color-scheme: dark)"
          />` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.nothing}
      ${imageSrcDarkNarrow ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<source
            srcset=${imageSrcDarkNarrow}
            media="(min-width: 724px) and (max-width: 1071.98px) and (prefers-color-scheme: dark)"
          />` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.nothing}
      ${imageSrcDarkResponsive ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<source
            srcset=${imageSrcDarkResponsive}
            media="(max-width: 723.98px) and (prefers-color-scheme: dark)"
          />` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.nothing}
      ${imageSrcNarrow ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<source
            srcset=${imageSrcNarrow}
            media="(min-width: 724px) and (max-width: 1071.98px)"
          />` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.nothing}
      ${imageSrcResponsive ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<source
            srcset=${imageSrcResponsive}
            media="(max-width: 723.98px)"
          />` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.nothing}
      <img src=${imageSrc} alt="" />
    </picture>`;
  }
  #renderPrimaryButton(primaryButton, secondaryButton) {
    if (!primaryButton && !secondaryButton) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.nothing;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<moz-button-group class="button-group">
      ${this.#renderPrimaryButtonContent(primaryButton)}
      ${this.#renderSecondaryButton(secondaryButton)}
    </moz-button-group>`;
  }
  render() {
    const content = this.#currentContent();
    const CSS_HREF = this.cssOverride || DEFAULT_CSS;
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
      <link rel="stylesheet" href=${CSS_HREF} />
      <aside
        class=${["asrouter-newtab-message", content?.hideDismissButton ? "no-dismiss" : "", this.#hasResponsiveImage(content) ? "has-responsive-image" : ""].filter(Boolean).join(" ")}
        aria-labelledby=${content?.heading ? "asrouter-newtab-message-heading" : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.nothing}
      >
        ${content?.hideDismissButton ? chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.nothing : (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<div class="dismiss-button">
              <moz-button
                type="icon ghost"
                size="small"
                iconSrc="chrome://global/skin/icons/close.svg"
                data-l10n-id="newtab-activation-window-message-dismiss-button"
                @click=${this.#handleXButton.bind(this)}
              ></moz-button>
            </div>`}
        <div class="message-inner">
          ${this.#renderImage(content)}
          <div class="message-content">
            ${this.#renderHeading(content?.heading)}
            ${this.#renderBody(content?.body)}
            ${this.#renderPrimaryButton(content?.primaryButton, content?.secondaryButton)}
          </div>
        </div>
      </aside>
    `;
  }
}
customElements.define("asrouter-newtab-message", ASRouterNewTabMessage);

/***/ })

}]);
//# sourceMappingURL=components-asrouter-newtab-message-asrouter-newtab-message-stories.03cf3a5d.iframe.bundle.js.map