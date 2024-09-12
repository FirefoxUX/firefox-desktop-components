"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[7802,5872,8825],{

/***/ 15872:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozButton)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_button_moz_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54078);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45717);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73689);
/* harmony import */ var chrome_global_content_elements_moz_label_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58825);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




// eslint-disable-next-line import/no-unassigned-import


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
 * @property {string} ariaLabel - The button's arial-label attribute, used in shadow DOM and therefore not as an attribute on moz-button.
 * @property {string} iconSrc - Path to the icon that should be displayed in the button.
 * @property {string} ariaLabelAttribute - Internal, map aria-label attribute to the ariaLabel JS property.
 * @property {string} hasVisibleLabel - Internal, tracks whether or not the button has a visible label.
 * @property {HTMLButtonElement} buttonEl - The internal button element in the shadow DOM.
 * @property {HTMLButtonElement} slotEl - The internal slot element in the shadow DOM.
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
      state: true
    },
    titleAttribute: {
      type: String,
      attribute: "title",
      reflect: true
    },
    tooltipText: {
      type: String,
      fluent: true
    },
    ariaLabelAttribute: {
      type: String,
      attribute: "aria-label",
      reflect: true
    },
    ariaLabel: {
      type: String,
      state: true
    },
    iconSrc: {
      type: String
    },
    hasVisibleLabel: {
      type: Boolean,
      state: true
    },
    accessKeyAttribute: {
      type: String,
      attribute: "accesskey",
      reflect: true
    },
    accessKey: {
      type: String,
      state: true
    }
  };
  static queries = {
    buttonEl: "button",
    slotEl: "slot"
  };
  constructor() {
    super();
    this.type = "default";
    this.size = "default";
    this.disabled = false;
    this.hasVisibleLabel = !!this.label;
  }
  willUpdate(changes) {
    if (changes.has("titleAttribute")) {
      this.title = this.titleAttribute;
      this.titleAttribute = null;
    }
    if (changes.has("ariaLabelAttribute")) {
      this.ariaLabel = this.ariaLabelAttribute;
      this.ariaLabelAttribute = null;
    }
    if (changes.has("accessKeyAttribute")) {
      this.accessKey = this.accessKeyAttribute;
      this.accessKeyAttribute = null;
    }
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
    return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`<slot @slotchange=${this.checkForLabelText}></slot>`;
  }
  render() {
    return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_button_moz_button_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <button
        type=${this.type}
        size=${this.size}
        ?disabled=${this.disabled}
        title=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.title || this.tooltipText)}
        aria-label=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.ariaLabel)}
        part="button"
        class=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.classMap)({
      labelled: this.label || this.hasVisibleLabel
    })}
        accesskey=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.accessKey)}
      >
        ${this.iconSrc ? _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`<img src=${this.iconSrc} role="presentation" />` : ""}
        <label
          is="moz-label"
          part="label"
          shownaccesskey=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.accessKey)}
        >
          ${this.labelTemplate()}
        </label>
      </button>
    `;
  }
}
customElements.define("moz-button", MozButton);

/***/ }),

/***/ 92459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Default": () => (/* binding */ Default),
/* harmony export */   "DefaultSmall": () => (/* binding */ DefaultSmall),
/* harmony export */   "Destructive": () => (/* binding */ Destructive),
/* harmony export */   "Icon": () => (/* binding */ Icon),
/* harmony export */   "IconGhost": () => (/* binding */ IconGhost),
/* harmony export */   "IconSmall": () => (/* binding */ IconSmall),
/* harmony export */   "IconText": () => (/* binding */ IconText),
/* harmony export */   "Primary": () => (/* binding */ Primary),
/* harmony export */   "WithAccesskey": () => (/* binding */ WithAccesskey),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45717);
/* harmony import */ var _moz_button_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15872);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "UI Widgets/Button",
  component: "moz-button",
  argTypes: {
    l10nId: {
      options: ["moz-button-labelled", "moz-button-titled", "moz-button-aria-labelled"],
      control: {
        type: "select"
      }
    },
    size: {
      options: ["default", "small"],
      control: {
        type: "radio"
      }
    },
    type: {
      options: ["default", "primary", "destructive", "icon", "icon ghost"],
      control: {
        type: "select"
      }
    }
  },
  parameters: {
    actions: {
      handles: ["click"]
    },
    status: "stable",
    fluent: `
moz-button-labelled =
  .label = Button
moz-button-primary = Primary
moz-button-destructive = Destructive
moz-button-titled =
  .title = View logins
moz-button-aria-labelled =
  .aria-label = View logins
`
  }
});
const Template = ({
  type,
  size,
  l10nId,
  iconSrc,
  disabled,
  accesskey,
  clickHandler
}) => _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
  <moz-button
    @click=${clickHandler}
    data-l10n-id=${l10nId}
    data-l10n-attrs="label"
    type=${type}
    size=${size}
    ?disabled=${disabled}
    iconSrc=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(iconSrc)}
    accesskey=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(accesskey)}
  ></moz-button>
`;
const Default = Template.bind({});
Default.args = {
  type: "default",
  size: "default",
  l10nId: "moz-button-labelled",
  iconSrc: "",
  disabled: false
};
const DefaultSmall = Template.bind({});
DefaultSmall.args = {
  type: "default",
  size: "small",
  l10nId: "moz-button-labelled",
  iconSrc: "",
  disabled: false
};
const Primary = Template.bind({});
Primary.args = {
  ...Default.args,
  type: "primary",
  l10nId: "moz-button-primary"
};
const Destructive = Template.bind({});
Destructive.args = {
  ...Default.args,
  type: "destructive",
  l10nId: "moz-button-destructive"
};
const Icon = Template.bind({});
Icon.args = {
  ...Default.args,
  iconSrc: "chrome://global/skin/icons/more.svg",
  l10nId: "moz-button-titled"
};
const IconSmall = Template.bind({});
IconSmall.args = {
  ...Icon.args,
  size: "small"
};
const IconGhost = Template.bind({});
IconGhost.args = {
  ...Icon.args,
  type: "ghost"
};
const IconText = Template.bind({});
IconText.args = {
  type: "default",
  size: "default",
  iconSrc: "chrome://global/skin/icons/edit-copy.svg",
  l10nId: "moz-button-labelled"
};
const WithAccesskey = Template.bind({});
WithAccesskey.args = {
  ...Default.args,
  accesskey: "t",
  clickHandler: () => alert("Activating the accesskey clicks the button")
};

/***/ }),

/***/ 58825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var toolkit_content_widgets_moz_label_moz_label_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83230);

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
  connectedCallback() {
    this.#setStyles();
    this.formatAccessKey();
    if (!this.#observer) {
      this.#observer = new MutationObserver(() => {
        this.formatAccessKey();
      }).observe(this, {
        characterData: true,
        childList: true,
        subtree: true
      });
    }
  }
  disconnectedCallback() {
    if (this.#observer) {
      this.#observer.disconnect();
      this.#observer = null;
    }
  }

  // Bug 1820588 - we may want to generalize this into
  // MozHTMLElement.insertCssIfNeeded(style)
  #setStyles() {
    let root = this.getRootNode();
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

/***/ 54078:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-button.9ba424e28de41739b434.css";

/***/ }),

/***/ 83230:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-label.af54a5f841ff0af78b0d.css";

/***/ })

}]);
//# sourceMappingURL=moz-button-moz-button-stories.a581aea9.iframe.bundle.js.map