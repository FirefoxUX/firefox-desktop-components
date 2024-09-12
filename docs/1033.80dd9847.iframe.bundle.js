"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[1033,6570,8825,9896],{

/***/ 46570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozFieldset)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_fieldset_moz_fieldset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12876);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45717);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73689);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * Fieldset wrapper to lay out form inputs consistently.
 *
 * @tagname moz-fieldset
 * @property {string} label - The label for the fieldset's legend.
 * @property {string} description - The description for the fieldset.
 */
class MozFieldset extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    label: {
      type: String,
      fluent: true
    },
    description: {
      type: String,
      fluent: true
    }
  };
  render() {
    return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_fieldset_moz_fieldset_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <fieldset
        aria-describedby=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.description ? "description" : null)}
      >
        <legend part="label">${this.label}</legend>
        ${this.description ? _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`<p id="description" class="text-deemphasized">
              ${this.description}
            </p>` : ""}
        <div id="inputs" part="inputs">
          <slot></slot>
        </div>
      </fieldset>
    `;
  }
}
customElements.define("moz-fieldset", MozFieldset);

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

/***/ 75295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MozRadio": () => (/* binding */ MozRadio),
/* harmony export */   "MozRadioGroup": () => (/* binding */ MozRadioGroup)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_radio_group_moz_radio_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73681);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45717);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73689);
/* harmony import */ var chrome_global_content_elements_moz_label_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58825);
/* harmony import */ var chrome_global_content_elements_moz_fieldset_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46570);
/* harmony import */ var chrome_global_content_elements_moz_support_link_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49896);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

const NAVIGATION_FORWARD = "forward";
const NAVIGATION_BACKWARD = "backward";
const NAVIGATION_VALUE = {
  [NAVIGATION_FORWARD]: 1,
  [NAVIGATION_BACKWARD]: -1
};
const DIRECTION_RIGHT = "Right";
const DIRECTION_LEFT = "Left";
const NAVIGATION_DIRECTIONS = {
  LTR: {
    FORWARD: DIRECTION_RIGHT,
    BACKWARD: DIRECTION_LEFT
  },
  RTL: {
    FORWARD: DIRECTION_LEFT,
    BACKWARD: DIRECTION_RIGHT
  }
};

/**
 * Element used to group and associate moz-radio buttons so that they function
 * as a single form-control element.
 *
 * @tagname moz-radio-group
 * @property {boolean} disabled - Whether or not the fieldset is disabled.
 * @property {string} label - Label for the group of moz-radio elements.
 * @property {string} name
 *  Input name of the radio group. Propagates to moz-radio children.
 * @property {string} value
 *  Selected value for the group. Changing the value updates the checked
 *  state of moz-radio children and vice versa.
 * @slot default - The radio group's content, intended for moz-radio elements.
 */
class MozRadioGroup extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  #radioButtons = [];
  #value;
  static properties = {
    disabled: {
      type: Boolean,
      reflect: true
    },
    label: {
      type: String,
      fluent: true
    },
    name: {
      type: String
    }
  };
  static queries = {
    defaultSlot: "slot:not([name])",
    fieldset: "moz-fieldset"
  };
  set value(newValue) {
    this.#value = newValue;
    this.#radioButtons.forEach(button => {
      button.checked = this.value === button.value;
    });
    this.syncFocusState();
  }
  get value() {
    return this.#value;
  }
  get focusableIndex() {
    if (this.#value) {
      let selectedIndex = this.#radioButtons.findIndex(button => button.value === this.#value && !button.disabled);
      if (selectedIndex !== -1) {
        return selectedIndex;
      }
    }
    return this.#radioButtons.findIndex(button => !button.disabled);
  }
  constructor() {
    super();
    this.disabled = false;
    this.addEventListener("keydown", e => this.handleKeydown(e));
  }
  firstUpdated() {
    this.syncStateToRadioButtons();
  }
  async getUpdateComplete() {
    await super.getUpdateComplete();
    await Promise.all(this.#radioButtons.map(button => button.updateComplete));
  }
  syncStateToRadioButtons() {
    this.#radioButtons = this.defaultSlot?.assignedElements().filter(el => el.localName === "moz-radio");
    this.#radioButtons.forEach(button => {
      if (button.checked && this.value == undefined) {
        this.value = button.value;
      }
      button.name = this.name;
    });
    this.syncFocusState();
  }
  syncFocusState() {
    let focusableIndex = this.focusableIndex;
    this.#radioButtons.forEach((button, index) => {
      button.inputTabIndex = focusableIndex === index ? 0 : -1;
    });
  }

  // NB: We may need to revise this to avoid bugs when we add more focusable
  // elements to moz-radio-group / moz-radio.
  handleKeydown(event) {
    let directions = this.getNavigationDirections();
    switch (event.key) {
      case "Down":
      case "ArrowDown":
      case directions.FORWARD:
      case `Arrow${directions.FORWARD}`:
        {
          event.preventDefault();
          this.navigate(NAVIGATION_FORWARD);
          break;
        }
      case "Up":
      case "ArrowUp":
      case directions.BACKWARD:
      case `Arrow${directions.BACKWARD}`:
        {
          event.preventDefault();
          this.navigate(NAVIGATION_BACKWARD);
          break;
        }
    }
  }
  getNavigationDirections() {
    if (this.isDocumentRTL) {
      return NAVIGATION_DIRECTIONS.RTL;
    }
    return NAVIGATION_DIRECTIONS.LTR;
  }
  get isDocumentRTL() {
    if (typeof Services !== "undefined") {
      return Services.locale.isAppLocaleRTL;
    }
    return document.dir === "rtl";
  }
  navigate(direction) {
    let currentIndex = this.focusableIndex;
    let indexStep = this.#radioButtons.length + NAVIGATION_VALUE[direction];
    for (let i = 1; i < this.#radioButtons.length; i++) {
      let nextIndex = (currentIndex + indexStep * i) % this.#radioButtons.length;
      if (!this.#radioButtons[nextIndex].disabled) {
        this.#radioButtons[nextIndex].click();
        return;
      }
    }
  }
  willUpdate(changedProperties) {
    if (changedProperties.has("name")) {
      this.handleSetName();
    }
    if (changedProperties.has("disabled")) {
      this.#radioButtons.forEach(button => {
        button.requestUpdate();
      });
    }
  }
  handleSetName() {
    this.#radioButtons.forEach(button => {
      button.name = this.name;
    });
  }

  // Re-dispatch change event so it's re-targeted to moz-radio-group.
  handleChange(event) {
    event.stopPropagation();
    this.dispatchEvent(new Event(event.type));
  }
  render() {
    return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <moz-fieldset
        part="fieldset"
        role="radiogroup"
        ?disabled=${this.disabled}
        label=${this.label}
        exportparts="inputs"
      >
        <slot
          @slotchange=${this.syncStateToRadioButtons}
          @change=${this.handleChange}
        ></slot>
      </moz-fieldset>
    `;
  }
}
customElements.define("moz-radio-group", MozRadioGroup);

/**
 * Input element that allows a user to select one option from a group of options.
 *
 * @tagname moz-radio
 * @property {boolean} checked - Whether or not the input is selected.
 * @property {string} description - Description for the input.
 * @property {boolean} disabled - Whether or not the input is disabled.
 * @property {string} iconSrc - Path to an icon displayed next to the input.
 * @property {number} inputTabIndex - Tabindex of the input element.
 * @property {string} label - Label for the radio input.
 * @property {string} name
 *  Name of the input control, set by the associated moz-radio-group element.
 * @property {string} supportPage - Name of the SUMO support page to link to.
 * @property {number} value - Value of the radio input.
 */
class MozRadio extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  #controller;
  static properties = {
    accessKey: {
      type: String,
      state: true
    },
    accessKeyAttribute: {
      type: String,
      attribute: "accesskey",
      reflect: true
    },
    checked: {
      type: Boolean,
      reflect: true
    },
    description: {
      type: String,
      fluent: true
    },
    disabled: {
      type: Boolean,
      reflect: true
    },
    iconSrc: {
      type: String
    },
    inputTabIndex: {
      type: Number,
      state: true
    },
    label: {
      type: String,
      fluent: true
    },
    name: {
      type: String,
      attribute: false
    },
    supportPage: {
      type: String,
      attribute: "support-page"
    },
    value: {
      type: String
    }
  };
  static queries = {
    radioButton: "#radio-button",
    labelEl: "label",
    icon: ".icon",
    descriptionEl: "#description"
  };
  constructor() {
    super();
    this.checked = false;
    this.disabled = false;
  }
  connectedCallback() {
    super.connectedCallback();
    let hostRadioGroup = this.parentElement || this.getRootNode().host;
    if (!(hostRadioGroup instanceof MozRadioGroup)) {
      console.error("moz-radio can only be used in moz-radio-group element.");
    }
    this.#controller = hostRadioGroup;
  }
  willUpdate(changedProperties) {
    // Handle setting checked directly via JS.
    if (changedProperties.has("checked") && this.checked && this.#controller.value && this.value !== this.#controller.value) {
      this.#controller.value = this.value;
    }
    // Handle un-checking directly via JS. If the checked input is un-checked,
    // the value of the associated moz-radio-group needs to be un-set.
    if (changedProperties.has("checked") && !this.checked && this.#controller.value && this.value === this.#controller.value) {
      this.#controller.value = "";
    }
    if (changedProperties.has("disabled")) {
      // Prevent enabling a radio button if containing radio-group is disabled.
      if (this.disabled === false && this.#controller.disabled) {
        this.disabled = true;
      } else if (this.checked || !this.#controller.value) {
        // Update buttons via moz-radio-group for proper keyboard nav behavior.
        this.#controller.syncFocusState();
      }
    }
    if (changedProperties.has("accessKeyAttribute")) {
      this.accessKey = this.accessKeyAttribute;
      this.accessKeyAttribute = null;
    }
  }
  handleClick() {
    this.#controller.value = this.value;
    this.focus();
  }

  // Re-dispatch change event so it propagates out of moz-radio.
  handleChange(e) {
    this.dispatchEvent(new Event(e.type, e));
  }

  // Delegate click to the input element.
  click() {
    this.radioButton.click();
    this.focus();
  }

  // Delegate focus to the input element.
  focus() {
    this.radioButton.focus();
  }
  iconTemplate() {
    if (this.iconSrc) {
      return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`<img src=${this.iconSrc} role="presentation" class="icon" />`;
    }
    return "";
  }
  inputTemplate() {
    return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`<input
      type="radio"
      id="radio-button"
      value=${this.value}
      name=${this.name}
      .checked=${this.checked}
      aria-checked=${this.checked}
      aria-describedby="description"
      tabindex=${this.inputTabIndex}
      ?disabled=${this.disabled || this.#controller.disabled}
      accesskey=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.accessKey)}
      @click=${this.handleClick}
      @change=${this.handleChange}
    />`;
  }
  labelTemplate() {
    return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`<span class="label-content">
      ${this.iconTemplate()}
      <span class="text">${this.label}</span>
      ${this.supportLinkTemplate()}
    </span>`;
  }
  descriptionTemplate() {
    return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <span id="description" class="description text-deemphasized">
        ${this.description ?? _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`<slot name="description"></slot>`}
      </span>
    `;
  }
  supportLinkTemplate() {
    return this.supportPage ? _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`<a
          is="moz-support-link"
          support-page=${this.supportPage}
          part="support-link"
        ></a>` : _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`<slot name="support-link"></slot>`;
  }
  render() {
    return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_radio_group_moz_radio_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <label
        part="label"
        is="moz-label"
        shownaccesskey=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.accessKey)}
      >
        ${this.inputTemplate()}${this.labelTemplate()}
      </label>
      ${this.descriptionTemplate()}
    `;
  }
}
customElements.define("moz-radio", MozRadio);

/***/ }),

/***/ 49896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozSupportLink),
/* harmony export */   "formatUTMParams": () => (/* binding */ formatUTMParams)
/* harmony export */ });
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

window.MozXULElement?.insertFTLIfNeeded("toolkit/global/mozSupportLink.ftl");

/**
 * An extension of the anchor element that helps create links to Mozilla's
 * support documentation. This should be used for SUMO links only - other "Learn
 * more" links can use the regular anchor element.
 *
 * @tagname moz-support-link
 * @attribute {string} support-page - Short-hand string from SUMO to the specific support page.
 * @attribute {string} utm-content - UTM parameter for a URL, if it is an AMO URL.
 * @attribute {string} data-l10n-id - Fluent ID used to generate the text content.
 */
class MozSupportLink extends HTMLAnchorElement {
  static SUPPORT_URL = "https://www.mozilla.org/";
  static get observedAttributes() {
    return ["support-page", "utm-content"];
  }

  /**
   * Handles setting up the SUPPORT_URL preference getter.
   * Without this, the tests for this component may not behave
   * as expected.
   * @private
   * @memberof MozSupportLink
   */
  #register() {
    if (window.document.nodePrincipal?.isSystemPrincipal) {
      ChromeUtils.defineESModuleGetters(MozSupportLink, {
        BrowserUtils: "resource://gre/modules/BrowserUtils.sys.mjs"
      });

      // eslint-disable-next-line no-shadow
      let {
        XPCOMUtils
      } = window.XPCOMUtils ? window : ChromeUtils.importESModule("resource://gre/modules/XPCOMUtils.sys.mjs");
      XPCOMUtils.defineLazyPreferenceGetter(MozSupportLink, "SUPPORT_URL", "app.support.baseURL", "", null, val => Services.urlFormatter.formatURL(val));
    } else if (!window.IS_STORYBOOK) {
      MozSupportLink.SUPPORT_URL = window.RPMGetFormatURLPref("app.support.baseURL");
    }
  }
  connectedCallback() {
    this.#register();
    this.#setHref();
    this.setAttribute("target", "_blank");
    this.addEventListener("click", this);
    if (!this.getAttribute("data-l10n-id") && !this.getAttribute("data-l10n-name") && !this.childElementCount) {
      document.l10n.setAttributes(this, "moz-support-link-text");
    }
    document.l10n.translateFragment(this);
  }
  disconnectedCallback() {
    this.removeEventListener("click", this);
  }
  handleEvent(e) {
    if (e.type == "click") {
      if (window.openTrustedLinkIn) {
        let where = MozSupportLink.BrowserUtils.whereToOpenLink(e, false, true);
        if (where == "current") {
          where = "tab";
        }
        e.preventDefault();
        openTrustedLinkIn(this.href, where);
      }
    }
  }
  attributeChangedCallback(attrName) {
    if (attrName === "support-page" || attrName === "utm-content") {
      this.#setHref();
    }
  }
  #setHref() {
    let supportPage = this.getAttribute("support-page") ?? "";
    let base = MozSupportLink.SUPPORT_URL + supportPage;
    this.href = this.hasAttribute("utm-content") ? formatUTMParams(this.getAttribute("utm-content"), base) : base;
  }
}
customElements.define("moz-support-link", MozSupportLink, {
  extends: "a"
});

/**
 * Adds UTM parameters to a given URL, if it is an AMO URL.
 *
 * @param {string} contentAttribute
 *        Identifies the part of the UI with which the link is associated.
 * @param {string} url
 * @returns {string}
 *          The url with UTM parameters if it is an AMO URL.
 *          Otherwise the url in unmodified form.
 */
function formatUTMParams(contentAttribute, url) {
  if (!contentAttribute) {
    return url;
  }
  let parsedUrl = new URL(url);
  let domain = `.${parsedUrl.hostname}`;
  if (!domain.endsWith(".mozilla.org") &&
  // For testing: addons-dev.allizom.org and addons.allizom.org
  !domain.endsWith(".allizom.org")) {
    return url;
  }
  parsedUrl.searchParams.set("utm_source", "firefox-browser");
  parsedUrl.searchParams.set("utm_medium", "firefox-browser");
  parsedUrl.searchParams.set("utm_content", contentAttribute);
  return parsedUrl.href;
}

/***/ }),

/***/ 12876:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-fieldset.cb2816ffa0cfb884d245.css";

/***/ }),

/***/ 83230:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-label.af54a5f841ff0af78b0d.css";

/***/ }),

/***/ 73681:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-radio.1b6653a2242cadb7af3d.css";

/***/ })

}]);
//# sourceMappingURL=1033.80dd9847.iframe.bundle.js.map