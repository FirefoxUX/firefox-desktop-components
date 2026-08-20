"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[2776,4920,5944,6284,6841,7912,9240],{

/***/ 9538:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-input-text.e2dcc636077bbb3379c2.css";

/***/ }),

/***/ 24920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozInputUrl)
/* harmony export */ });
/* harmony import */ var chrome_global_content_elements_moz_input_text_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65944);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



/**
 * A URL input custom element.
 *
 * @tagname moz-input-url
 * @property {string} label - The text of the label element
 * @property {string} name - The name of the input control
 * @property {string} value - The value of the input control
 * @property {boolean} disabled - The disabled state of the input control
 * @property {boolean} readonly - The readonly state of the input control
 * @property {string} iconSrc - The src for an optional icon
 * @property {string} description - The text for the description element that helps describe the input control
 * @property {string} supportPage - Name of the SUMO support page to link to.
 * @property {string} placeholder - Text to display when the input has no value.
 */
class MozInputUrl extends chrome_global_content_elements_moz_input_text_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
  inputTemplate() {
    return super.inputTemplate({
      type: "url"
    });
  }
}
customElements.define("moz-input-url", MozInputUrl);

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

/***/ 27912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozTextarea)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_textarea_moz_textarea_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58210);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_elements_moz_input_text_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65944);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * A textarea custom element.
 *
 * @tagname moz-textarea
 * @property {string} label - The text of the label element.
 * @property {string} name - The name of the textarea control.
 * @property {string} value - The value of the textarea control.
 * @property {boolean} disabled - The disabled state of the textarea control.
 * @property {boolean} readonly - The readonly state of the textarea control.
 * @property {string} description - The text for the description element that helps describe the textarea control.
 * @property {string} supportPage - Name of the SUMO support page to link to.
 * @property {string} placeholder - Text to display when the textarea has no value.
 * @property {string} iconSrc - The src for an optional icon.
 * @property {string} ariaLabel - The aria-label text when there is no visible label.
 * @property {string} ariaDescription - The aria-description text when there is no visible description.
 * @property {number} rows - The number of visible text rows.
 */
class MozTextarea extends chrome_global_content_elements_moz_input_text_mjs__WEBPACK_IMPORTED_MODULE_2__["default"] {
  static properties = {
    ...chrome_global_content_elements_moz_input_text_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].properties,
    rows: {
      type: Number,
      reflect: true
    }
  };
  constructor() {
    super();
    this.rows = 2;
  }
  inputStylesTemplate() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      ${super.inputStylesTemplate()}
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_textarea_moz_textarea_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
    `;
  }
  inputTemplate() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <textarea
        id="input"
        name=${this.name}
        rows=${this.rows}
        .value=${this.value}
        ?disabled=${this.disabled || this.parentDisabled}
        ?readonly=${this.readonly}
        accesskey=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.accessKey)}
        placeholder=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.placeholder)}
        aria-label=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.ariaLabel ?? undefined)}
        aria-describedby="description"
        aria-description=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.hasDescription ? undefined : this.ariaDescription)}
        @input=${this.handleInput}
        @change=${this.redispatchEvent}
      ></textarea>
    `;
  }
}
customElements.define("moz-textarea", MozTextarea);

/***/ }),

/***/ 30082:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-button.f67d7f67c6092f201516.css";

/***/ }),

/***/ 32984:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "agent-monitor-item.cf4bf29ff3b277e08a95.css";

/***/ }),

/***/ 44494:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-select.89c3c748542a8264e4a1.css";

/***/ }),

/***/ 58132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MonitorIcon: () => (/* binding */ MonitorIcon)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_monitors_display_monitors_display_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63232);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * Small badge showing the monitor watch icon in a violet square.
 *
 * @property {"large"|"small"} size - Icon size. "large" (default) or "small"
 *   (about 5px smaller). Reflected so CSS can target it via :host([size]).
 */
class MonitorIcon extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    size: {
      type: String,
      reflect: true
    }
  };
  constructor() {
    super();
    this.size = "large";
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_monitors_display_monitors_display_css__WEBPACK_IMPORTED_MODULE_0__}"
      />

      <div class="icon-container" aria-hidden="true">
        <span class="icon"></span>
      </div>
    `;
  }
}
customElements.define("monitor-icon", MonitorIcon);

/***/ }),

/***/ 58210:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-textarea.001a8c41c1f9d5819f5a.css";

/***/ }),

/***/ 62776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MozOption: () => (/* binding */ MozOption),
/* harmony export */   "default": () => (/* binding */ MozSelect)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_select_moz_select_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44494);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/** @import { TemplateResult } from "chrome://global/content/vendor/lit.all.mjs" */

/**
 * @typedef {object} SelectOption
 * @property {string} value - The value of the option.
 * @property {string} label - The display label of the option.
 * @property {string} [iconSrc] - The icon source URL for the option.
 * @property {boolean} [disabled] - Whether the option is disabled.
 * @property {boolean} [hidden] - Whether the option is hidden.
 */

/**
 * A select dropdown with options provided via custom `moz-option` elements.
 *
 * @tagname moz-select
 * @property {string} label - The text of the label element
 * @property {string} size - The select size.
 *   Options: default, small.
 * @property {string} name - The name of the input control
 * @property {string} value - The value of the selected option
 * @property {boolean} disabled - The disabled state of the input control
 * @property {string} iconSrc - The src for an optional icon
 * @property {string} description - The text for the description element that helps describe the input control
 * @property {string} supportPage - Name of the SUMO support page to link to.
 * @property {string} ariaLabel - The aria-label text when there is no visible label.
 * @property {string} ariaDescription - The aria-description text when there is no visible description.
 * @property {SelectOption[]} options - The array of options, populated by <moz-option> children in the
 *     default slot. Do not set directly, these will be overridden by <moz-option> children.
 * @property {SelectOption} selectedOption - The currently selected option object.
 * @property {number} selectedIndex - The index of the currently selected option.
 * @property {boolean} usePanelList - Whether or not to render a panel. Depends on options using icons.
 */
class MozSelect extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozBaseInputElement {
  static properties = {
    size: {
      type: String,
      reflect: true
    },
    options: {
      type: Array,
      state: true
    },
    selectedOption: {
      type: Object,
      state: true
    },
    selectedIndex: {
      type: Number,
      state: true
    },
    usePanelList: {
      type: Boolean,
      state: true
    }
  };
  static inputLayout = "block";
  static queries = {
    panelList: "panel-list",
    panelTrigger: ".panel-trigger"
  };
  constructor() {
    super();
    this.size = "default";
    this.value = "";
    this.options = [];
    this.usePanelList = false;
    this.selectedOption = null;
    this.selectedIndex = 0;
    this.slotRef = (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    this.optionsMutationObserver = new MutationObserver(this.populateOptions.bind(this));
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.optionsMutationObserver.observe(this, {
      attributeFilter: ["label", "value", "iconsrc", "disabled", "hidden"],
      childList: true,
      subtree: true
    });
  }
  update(changedProperties) {
    super.update(changedProperties);
    if (this.hasUpdated && changedProperties.has("options")) {
      // Match the select's value on initial render or options change.
      this.value = this.inputEl.value;
    }
  }
  willUpdate(changedProperties) {
    super.willUpdate(changedProperties);
    if (changedProperties.has("value") || changedProperties.has("options")) {
      this.selectedIndex = this.options.findIndex(opt => opt.value === this.value);
      this.selectedOption = this.options[this.selectedIndex] ?? this.options[0];
    }
  }
  updated() {
    if (this.panelTrigger && this.panelList && this.panelTrigger.popoverTargetElement !== this.panelList) {
      this.panelTrigger.popoverTargetElement = this.panelList;
    }
  }

  /**
   * Gets the icon source for the currently selected option.
   *
   * @returns {string} The icon source URL or empty string.
   */
  get _selectedOptionIconSrc() {
    return this.selectedOption?.iconSrc ?? "";
  }

  /**
   * Internal - populates the select element with options from the light DOM slot.
   */
  populateOptions() {
    if (!this.slotRef.value) {
      this.options = [];
      this.usePanelList = false;
      return;
    }
    let options = [];
    for (const node of this.slotRef.value.assignedNodes()) {
      if (node.localName === "moz-option") {
        options.push({
          value: node.getAttribute("value"),
          label: node.getAttribute("label"),
          iconSrc: node.getAttribute("iconsrc"),
          disabled: node.getAttribute("disabled") !== null,
          hidden: node.getAttribute("hidden") !== null
        });
      } else if (node.localName === "hr") {
        options.push({
          separator: true
        });
      }
    }
    this.options = options;
    this.usePanelList = options.some(opt => opt.iconSrc);

    // Default to first option if no value set to match native select behavior.
    if (this.usePanelList && !this.value && this.options.length) {
      this.value = this.options[0].value;
    }
  }

  /**
   * Handles change events and updates the selected value.
   *
   * @param {Event} event
   * @memberof MozSelect
   */
  handleStateChange(event) {
    this.value = event.target.value;
  }

  /**
   * Handles change events from the panel-list and dispatches a change event.
   *
   * @param {Event} event - The click event from panel-item selection.
   */
  handlePanelChange(event) {
    this.handleStateChange(event);
    this.redispatchEvent(new Event("change", {
      bubbles: true
    }));
  }

  /**
   * Handles the panel being hidden and returns focus to the trigger button.
   */
  handlePanelHidden() {
    let active = document.activeElement;
    if (!active || active === document.body || active === this) {
      this.panelTrigger?.focus();
    }
  }

  /**
   * Handles mousedown events to open the panel for mouse clicks.
   * Note: panel-list's handleEvent() ignores the triggeringEvent by
   * reference, preventing the panel from immediately closing.
   *
   * @param {MouseEvent} event - The mousedown event.
   */
  handlePanelMousedown(event) {
    if (event.button !== 0) {
      return;
    }
    /**
     * Bug 2017668 - This is required for the "Default search engine"
     * and private search engine moz-selects. Otherwise, clicking on one
     * of the select elements, using arrow keys to navigate, and then clicking
     * on the other select element will cause focus to jump between the two
     * moz-select elements while toggling their respective panels.
     */
    if (navigator.platform.includes("Mac")) {
      this.panelTrigger?.focus();
    }
    this.panelList?.toggle(event, this.panelTrigger);
  }

  /**
   * Handles click events from keyboard activation (Space/Enter from button).
   * Mouse clicks are handled by mousedown, so we filter those out here.
   *
   * @param {MouseEvent} event - The click event.
   */
  handlePanelClick(event) {
    // Only handle keyboard-initiated clicks. Mouse clicks are handled
    // by mousedown. event.detail is 0 for keyboard clicks, >0 for
    // mouse clicks.
    event.preventDefault();
    if (event.detail === 0) {
      this.panelList?.toggle(event);
    }
  }

  /**
   * Toggles the panel-list open/closed state.
   * Called by keyboard handlers and potentially other event handlers.
   *
   * @param {Event} event - The triggering event.
   */
  togglePanel(event) {
    this.panelList?.toggle(event);
  }

  /**
   * Handles keyboard events on the panel trigger button.
   * Arrow keys change selection (Windows/Linux) or open the panel (Mac).
   * Space and Enter open the panel.
   *
   * @param {KeyboardEvent} event - The keyboard event.
   */
  handlePanelKeydown(event) {
    if (this.panelList?.open) {
      return;
    }
    switch (event.key) {
      case "ArrowDown":
      case "ArrowUp":
        event.preventDefault();
        if (navigator.platform.includes("Mac")) {
          this.togglePanel(event);
        } else {
          this.selectNextOption(event.key === "ArrowDown" ? 1 : -1);
        }
        break;
      case "Enter":
        event.preventDefault();
        this.togglePanel(event);
        break;
    }
  }

  /**
   * Selects the next enabled option in the given direction. Skips disabled and
   * hidden options.
   *
   * @param {number} direction - The direction to move (1 for next, -1 for
   * previous).
   */
  selectNextOption(direction) {
    let currentIndex = this.selectedIndex;
    let options = this.options;
    for (let i = 1; i < options.length; i++) {
      let nextIndex = currentIndex + direction * i;
      let nextOption = options[nextIndex];
      if (nextOption && !nextOption.disabled && !nextOption.hidden && !nextOption.separator) {
        this.value = nextOption.value;
        this.redispatchEvent(new Event("change", {
          bubbles: true
        }));
        return;
      }
    }
  }

  /**
   * @type {MozBaseInputElement['inputStylesTemplate']}
   */
  inputStylesTemplate() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)` <link
      rel="stylesheet"
      href="${toolkit_content_widgets_moz_select_moz_select_css__WEBPACK_IMPORTED_MODULE_0__}"
    />`;
  }

  /**
   * Renders the icon for the currently selected option.
   *
   * @returns {TemplateResult | null}
   */
  selectedOptionIconTemplate() {
    if (this._selectedOptionIconSrc) {
      return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<img
        src=${this._selectedOptionIconSrc}
        role="presentation"
        class="select-option-icon"
      />`;
    }
    return null;
  }

  /**
   * Renders the native select element (used when options don't have icons).
   *
   * @returns {TemplateResult}
   */
  selectTemplate() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<select
      id="input"
      name=${this.name}
      .value=${this.value}
      accesskey=${this.accessKey}
      @input=${this.handleStateChange}
      @change=${this.redispatchEvent}
      ?disabled=${this.disabled || this.parentDisabled}
      size=${this.size}
      aria-label=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.ariaLabel ?? undefined)}
      aria-describedby="description"
      aria-description=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.hasDescription ? undefined : this.ariaDescription)}
    >
      ${this.options.map(option => option.separator ? (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<hr />` : (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
              <option
                value=${option.value}
                .selected=${option.value == this.value}
                ?disabled=${option.disabled}
                ?hidden=${option.hidden}
              >
                ${option.label}
              </option>
            `)}
    </select>`;
  }

  /**
   * Renders the button trigger for the panel-list (used when options have
   * icons).
   *
   * @returns {TemplateResult}
   */
  panelTargetTemplate() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<button
      id="input"
      name=${this.name}
      .value=${this.value}
      class="panel-trigger"
      type="button"
      role="combobox"
      aria-label=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.ariaLabel)}
      aria-description=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.hasDescription ? undefined : this.ariaDescription)}
      aria-describedby="description"
      aria-haspopup="menu"
      aria-expanded=${this.panelList?.open ? "true" : "false"}
      accesskey=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.accessKey)}
      @mousedown=${this.handlePanelMousedown}
      @click=${this.handlePanelClick}
      @keydown=${this.handlePanelKeydown}
      ?disabled=${this.disabled || this.parentDisabled}
      size=${this.size}
    >
      <span class="panel-trigger-text">${this.selectedOption?.label}</span>
    </button>`;
  }

  /**
   * Renders the panel-list dropdown menu (used when options have icons).
   *
   * @returns {TemplateResult}
   */
  panelListTemplate() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<panel-list
      .value=${this.value}
      min-width-from-anchor
      @click=${this.handlePanelChange}
      @hidden=${this.handlePanelHidden}
    >
      ${this.options.map(option => option.separator ? (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<hr />` : (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<panel-item
              .value=${option.value}
              ?selected=${option.value == this.value}
              ?disabled=${option.disabled}
              ?hidden=${option.hidden}
              icon=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(option.iconSrc)}
              style=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.styleMap)(option.iconSrc ? {
      "--select-item-icon-url": `url(${option.iconSrc})`
    } : {})}
            >
              ${option.label}
            </panel-item>`)}
    </panel-list>`;
  }

  /**
   * Renders the main input template with either a native select or panel-list.
   *
   * @returns {TemplateResult}
   */
  inputTemplate() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <div
        class=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.classMap)({
      "select-wrapper": true,
      "with-icon": !!this._selectedOptionIconSrc
    })}
      >
        ${this.selectedOptionIconTemplate()}
        ${!this.usePanelList ? this.selectTemplate() : this.panelTargetTemplate()}
        <img
          src="chrome://global/skin/icons/arrow-down.svg"
          role="presentation"
          class="select-chevron-icon"
        />
      </div>
      ${this.usePanelList ? this.panelListTemplate() : ""}
      <slot
        @slotchange=${this.populateOptions}
        hidden
        ${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ref)(this.slotRef)}
      ></slot>
    `;
  }
}
customElements.define("moz-select", MozSelect);

/**
 * A custom option element for use in moz-select.
 *
 * @tagname moz-option
 * @property {string} value - The value of the option
 * @property {string} label - The label of the option
 * @property {string} iconSrc - The path to the icon of the the option
 * @property {boolean} disabled - Whether the option is disabled
 * @property {boolean} hidden - Whether the option is hidden
 */
class MozOption extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    // Reflect the attribute so that moz-select can detect changes with a MutationObserver
    value: {
      type: String,
      reflect: true
    },
    // Reflect the attribute so that moz-select can detect changes with a MutationObserver
    label: {
      type: String,
      reflect: true,
      fluent: true
    },
    iconSrc: {
      type: String,
      reflect: true
    },
    disabled: {
      type: Boolean,
      reflect: true
    },
    hidden: {
      type: Boolean,
      reflect: true
    }
  };
  constructor() {
    super();
    this.value = "";
    this.label = "";
    this.iconSrc = "";
    this.disabled = false;
    this.hidden = false;
  }
  render() {
    // This is just a placeholder to pass values into moz-select.
    return "";
  }
}
customElements.define("moz-option", MozOption);

/***/ }),

/***/ 63232:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "monitors-display.8ba453ff7103c0e4ac90.css";

/***/ }),

/***/ 65944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozInputText)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_input_text_moz_input_text_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9538);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * A text input custom element.
 *
 * @tagname moz-input-text
 * @property {string} label - The text of the label element
 * @property {string} name - The name of the input control
 * @property {string} value - The value of the input control
 * @property {boolean} disabled - The disabled state of the input control
 * @property {boolean} readonly - The readonly state of the input control
 * @property {string} iconSrc - The src for an optional icon
 * @property {string} description - The text for the description element that helps describe the input control
 * @property {string} supportPage - Name of the SUMO support page to link to.
 * @property {string} placeholder - Text to display when the input has no value.
 * @property {string} ariaLabel - The aria-label text when there is no visible label.
 * @property {string} ariaDescription - The aria-description text when there is no visible description.
 */
class MozInputText extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozBaseInputElement {
  static properties = {
    placeholder: {
      type: String,
      fluent: true
    },
    readonly: {
      type: Boolean,
      reflect: true
    }
  };
  static inputLayout = "block";
  constructor() {
    super();
    this.value = "";
    this.readonly = false;
  }
  inputStylesTemplate() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<link
      rel="stylesheet"
      href="${toolkit_content_widgets_moz_input_text_moz_input_text_css__WEBPACK_IMPORTED_MODULE_0__}"
    />`;
  }
  handleInput(e) {
    this.value = e.target.value;
  }
  inputTemplate(options = {}) {
    let {
      type = "text",
      classes,
      styles,
      inputValue
    } = options;
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <input
        id="input"
        type=${type}
        class=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(classes)}
        style=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(styles)}
        name=${this.name}
        .value=${inputValue || this.value}
        ?disabled=${this.disabled || this.parentDisabled}
        ?readonly=${this.readonly}
        accesskey=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.accessKey)}
        placeholder=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.placeholder)}
        aria-label=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.ariaLabel ?? undefined)}
        aria-describedby="description"
        aria-description=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.hasDescription ? undefined : this.ariaDescription)}
        @input=${this.handleInput}
        @change=${this.redispatchEvent}
      />
    `;
  }
}
customElements.define("moz-input-text", MozInputText);

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

/***/ 82145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Create: () => (/* binding */ Create),
/* harmony export */   DisplayCollapsed: () => (/* binding */ DisplayCollapsed),
/* harmony export */   DisplayExpanded: () => (/* binding */ DisplayExpanded),
/* harmony export */   Editing: () => (/* binding */ Editing),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var chrome_browser_content_aiwindow_components_agent_monitor_item_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86360);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/AI Window/Agent Monitor Item",
  component: "agent-monitor-item",
  argTypes: {
    agent: {
      control: "object"
    },
    mode: {
      control: "select",
      options: ["display", "create"]
    },
    expanded: {
      control: "boolean"
    },
    editing: {
      control: "boolean"
    }
  }
});
const AGENT = {
  id: "agent-sony",
  monitorName: "Nike Men's Vomero Plus Running Shoes",
  url: "soundnest.com/audio/sony-wh-1000xm5",
  faviconText: "S",
  faviconColor: "#e8663a",
  value: "$299",
  valueMeta: "checked 2:14 PM / was $299",
  condition: "",
  conditionPresets: [],
  status: {
    label: "$278 ▼ −7%",
    kind: "triggered"
  },
  cadence: "Auto / on-device",
  history: [{
    when: "Today 2:14 PM",
    oldValue: "$299",
    newValue: "$278",
    note: "−7%"
  }, {
    when: "Jun 24",
    flag: "possible change",
    note: "no notification",
    low: true
  }, {
    when: "Jun 17",
    oldValue: "$319",
    newValue: "$299",
    note: "first checked"
  }]
};
const Template = ({
  agent,
  mode,
  expanded,
  editing
}) => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <div style="max-width: 416px;">
    <agent-monitor-item
      .agent=${agent}
      mode=${mode}
      ?expanded=${expanded}
      ?editing=${editing}
    ></agent-monitor-item>
  </div>
`;
const DisplayCollapsed = Template.bind({});
DisplayCollapsed.args = {
  agent: {
    ...AGENT,
    status: {
      label: "Watching",
      kind: "watching"
    }
  },
  mode: "display",
  expanded: false,
  editing: false
};
const DisplayExpanded = Template.bind({});
DisplayExpanded.args = {
  agent: AGENT,
  mode: "display",
  expanded: true,
  editing: false
};
const Editing = Template.bind({});
Editing.args = {
  agent: AGENT,
  mode: "display",
  expanded: true,
  editing: true
};
const Create = Template.bind({});
Create.args = {
  agent: {
    ...AGENT,
    monitorName: "",
    value: "",
    valueMeta: "found on this page just now",
    status: null,
    history: []
  },
  mode: "create",
  expanded: false,
  editing: false
};

/***/ }),

/***/ 86360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AgentMonitorItem: () => (/* binding */ AgentMonitorItem)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_agent_monitor_item_agent_monitor_item_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32984);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);
/* harmony import */ var chrome_global_content_elements_moz_input_text_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65944);
/* harmony import */ var chrome_global_content_elements_moz_input_url_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24920);
/* harmony import */ var chrome_global_content_elements_moz_textarea_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27912);
/* harmony import */ var chrome_global_content_elements_moz_select_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62776);
/* harmony import */ var chrome_global_content_elements_moz_button_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79240);
/* harmony import */ var chrome_browser_content_aiwindow_components_monitor_icon_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(58132);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

const SCHEDULE_TYPES = Object.freeze({
  DAILY: "daily",
  WEEKLY: "weekly"
});
const SCHEDULE_ICON = "chrome://browser/skin/calendar-24.svg";
const TIME_ICON = "chrome://browser/skin/history-20.svg";
const MAX_WATCH_URLS = 5;

// How long to coalesce typing before mirroring the form to the host
const DRAFT_PERSIST_DELAY_MS = 250;

// Check times offered by the create card in 30-minute increments
const TIME_OPTIONS = Array.from({
  length: 48
}, (_, i) => {
  const hour24 = Math.floor(i / 2);
  const minute = i % 2 ? 30 : 0;

  // Create a date object with the specific time for localization
  const timeDate = new Date();
  timeDate.setHours(hour24, minute, 0, 0);

  // Use toLocaleTimeString for locale-appropriate formatting
  const label = timeDate.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  });
  return {
    value: `${String(hour24).padStart(2, "0")}:${String(minute).padStart(2, "0")}`,
    label
  };
});

// Indexed by the weekday values used by the scheduler (0 = Sunday)
const WEEKDAYS = [{
  value: 0,
  ftlId: "ai-tasks-alert-weekday-sunday"
}, {
  value: 1,
  ftlId: "ai-tasks-alert-weekday-monday"
}, {
  value: 2,
  ftlId: "ai-tasks-alert-weekday-tuesday"
}, {
  value: 3,
  ftlId: "ai-tasks-alert-weekday-wednesday"
}, {
  value: 4,
  ftlId: "ai-tasks-alert-weekday-thursday"
}, {
  value: 5,
  ftlId: "ai-tasks-alert-weekday-friday"
}, {
  value: 6,
  ftlId: "ai-tasks-alert-weekday-saturday"
}];

/**
 * A single monitor card:
 * It has three modes and is host-agnostic - monitor data comes
 * in via the 'agent' property and every action is a bubbling CustomEvent for
 * the host to handle. The host also decides the collapse affordance (chat uses
 * the chevron; the page can click-to-expand), so the component only exposes
 * 'expanded'/'editing' state
 *
 * Modes:
 *  - "display": collapsed shows the head  with a chevron and
 *    expanded reveals the value, condition, actions and change history.
 *  - "create": the full form used when setting up a new monitor.
 *
 * Dispatches:
 *  - agent-monitor-item:toggle       detail: { expanded }
 *  - agent-monitor-item:edit-toggle  detail: { editing }
 *  - agent-monitor-item:submit       detail: { mode, id, monitorName, condition, watchUrls, schedule }
 *  - agent-monitor-item:draft-change detail: { draft: MonitorDraft|null }
 *  - agent-monitor-item:cancel
 *  - agent-monitor-item:delete       detail: { id }
 *  - agent-monitor-item:pause        detail: { id, paused }
 *  - agent-monitor-item:check-now    detail: { id }
 *  - agent-monitor-item:open         detail: { id, url }
 *
 * @property {Agent} agent - Monitor data:
 *  {
 *    id: string,
 *    monitorName: string,
 *    url: string,
 *    faviconText?: string,      // 1-2 char fallback favicon glyph
 *    faviconColor?: string,     // fallback favicon background
 *    value?: string,            // current value, e.g. "$278"
 *    valueMeta?: string,        // e.g. "checked 2:14 PM · was $299"
 *    condition?: string,        // e.g. "the price drops below $270"
 *    conditionPresets?: string[],
 *    status?: { label: string, kind?: "watching"|"paused" },
 *    cadence?: string,
 *    history?: Array<{ when: string, oldValue?: string, newValue?: string,
 *                      note?: string, flag?: string, low?: boolean }>,
 *  }
 * @property {?MonitorDraft} draft - In-progress form state to restore over the
 *  values seeded from 'agent'. The card only renders it, the host owns it:
 *  every edit is mirrored back out via 'agent-monitor-item:draft-change' so an
 *  unsubmitted form survives the card being torn down and rebuilt.
 *  {
 *    editing?: boolean,        // reopen the edit form the draft belongs to
 *    monitorName?: string,
 *    condition?: string,
 *    watchUrls?: string[],
 *    pendingUrl?: string,
 *    schedule?: { frequency: string, time: string, weekday: number },
 *  }
 * @property {"display"|"create"} mode - Which card layout to render
 * @property {boolean} expanded - Whether the display card is expanded
 * @property {boolean} editing - Whether the editable condition field is shown
 * @property {boolean} showLastResult - Whether to show the last check result chip (defaults to false)
 */
class AgentMonitorItem extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    agent: {
      type: Object
    },
    draft: {
      type: Object
    },
    mode: {
      type: String,
      reflect: true
    },
    expanded: {
      type: Boolean,
      reflect: true
    },
    editing: {
      type: Boolean,
      reflect: true
    },
    showLastResult: {
      type: Boolean
    },
    checkFrequency: {
      type: String,
      state: true
    },
    scheduleTime: {
      type: String,
      state: true
    },
    scheduleWeekday: {
      type: Number,
      state: true
    },
    alertDescription: {
      type: String,
      state: true
    },
    pageUrls: {
      type: Array,
      state: true
    },
    pendingUrl: {
      type: String,
      state: true
    },
    pendingUrlError: {
      type: String,
      state: true
    }
  };
  constructor() {
    super();
    this.agent = {};
    this.draft = null;
    this.mode = "display";
    this.expanded = false;
    this.editing = false;
    this.showLastResult = false;
    this.checkFrequency = SCHEDULE_TYPES.DAILY;
    this.scheduleTime = "09:00";
    this.scheduleWeekday = 1;
    this.alertDescription = "";
    this.pageUrls = [];
    this.pendingUrl = "";
    this.pendingUrlError = "";
    this.#draftName = null;
  }
  #draftName;
  #draftPersistTimer = null;
  willUpdate(changed) {
    if (changed.has("agent")) {
      this.#seedFromAgent();
    }
    if (changed.has("agent") || changed.has("draft")) {
      this.#applyDraft();
    }
  }
  disconnectedCallback() {
    if (this.#draftPersistTimer) {
      this.#flushDraft();
    }
    super.disconnectedCallback();
  }
  #seedFromAgent() {
    this.#draftName = null;
    const {
      watchUrls,
      url,
      condition,
      expanded
    } = this.agent ?? {};
    let seededUrls = [];
    if (watchUrls?.length) {
      seededUrls = watchUrls;
    } else if (url) {
      seededUrls = [url];
    }
    this.pageUrls = seededUrls.filter(u => u?.trim().length);
    this.alertDescription = condition ?? "";
    this.pendingUrl = "";
    this.pendingUrlError = "";

    // If the agent data includes an expanded state, apply it
    if (expanded !== undefined) {
      this.expanded = expanded;
    }

    // Seed the schedule fields from an existing monitor so edit mode reflects
    // its current scheduled
    const schedule = this.agent?.schedule;
    if (schedule) {
      this.checkFrequency = schedule.frequency ?? this.checkFrequency;
      this.scheduleTime = schedule.time ?? this.scheduleTime;
      this.scheduleWeekday = schedule.weekday ? Number(schedule.weekday) : this.scheduleWeekday;
    }
  }

  /**
   * Restores an unsubmitted form over the values seeded from 'agent'.
   */
  #applyDraft() {
    if (!this.draft) {
      return;
    }
    const {
      editing,
      monitorName,
      condition,
      watchUrls,
      pendingUrl,
      schedule
    } = this.draft;

    // A draft only outlives the card while an edit is unsubmitted, so reopen
    // the form the user was in the middle of. The edit affordances live in the
    // expanded body, so the card has to come back expanded to show them.
    if (editing) {
      this.editing = true;
      this.expanded = true;
    }
    if (monitorName !== undefined) {
      this.#draftName = monitorName;
    }
    if (condition !== undefined) {
      this.alertDescription = condition;
    }
    if (watchUrls) {
      this.pageUrls = [...watchUrls];
    }
    if (pendingUrl !== undefined) {
      this.pendingUrl = pendingUrl;
    }
    if (schedule?.frequency) {
      this.checkFrequency = schedule.frequency;
    }
    if (schedule?.time) {
      this.scheduleTime = schedule.time;
    }
    if (schedule?.weekday !== undefined) {
      this.scheduleWeekday = Number(schedule.weekday);
    }
  }

  /**
   * Mirrors the in-progress form out to the host.
   *
   * @param {object} [options]
   * @param {boolean} [options.debounce] - Coalesce rapid edits, for typing
   */
  #persistDraft({
    debounce = false
  } = {}) {
    if (this.mode !== "create" && !this.editing) {
      return;
    }
    this.#clearDraftTimer();
    if (!debounce) {
      this.#flushDraft();
      return;
    }
    this.#draftPersistTimer = setTimeout(() => this.#flushDraft(), DRAFT_PERSIST_DELAY_MS);
  }
  #flushDraft() {
    this.#clearDraftTimer();
    this.#dispatch("agent-monitor-item:draft-change", {
      draft: {
        editing: this.editing,
        monitorName: this.#monitorName,
        condition: this.alertDescription,
        watchUrls: [...this.pageUrls],
        pendingUrl: this.pendingUrl,
        schedule: {
          frequency: this.checkFrequency,
          time: this.scheduleTime,
          weekday: this.scheduleWeekday
        }
      }
    });
  }
  #discardDraft() {
    this.#clearDraftTimer();
    this.#dispatch("agent-monitor-item:draft-change", {
      draft: null
    });
  }
  #clearDraftTimer() {
    if (this.#draftPersistTimer) {
      clearTimeout(this.#draftPersistTimer);
      this.#draftPersistTimer = null;
    }
  }
  #dispatch(type, detail) {
    this.dispatchEvent(new CustomEvent(type, {
      detail,
      bubbles: true,
      composed: true
    }));
  }
  get #monitorName() {
    return this.#draftName ?? this.agent?.monitorName ?? "";
  }
  get #isFormValid() {
    const hasDescription = this.alertDescription?.trim().length > 0;
    const hasValidUrl = !!this.pageUrls.length;
    return hasDescription && hasValidUrl && !this.pendingUrlError;
  }
  #onNameInput(event) {
    this.#draftName = event.target.value;
    // Typing coalesces, a change (blur) flushes right away
    this.#persistDraft({
      debounce: event.type === "input"
    });
  }
  #onCardClick(e) {
    if (e.target.closest("button, moz-button")) {
      return;
    }
    this.#onToggle(e);
  }
  #onToggle() {
    this.expanded = !this.expanded;
    this.#dispatch("agent-monitor-item:toggle", {
      expanded: this.expanded
    });
  }
  #onEditToggle() {
    this.editing = !this.editing;
    // Opening the form is itself worth remembering, so an edit session that
    // hasn't been typed in yet survives too. Leaving discards the edit.
    if (this.editing) {
      this.#persistDraft();
    } else {
      this.#discardDraft();
    }
    this.#dispatch("agent-monitor-item:edit-toggle", {
      editing: this.editing
    });
  }
  #onConditionInput(event) {
    this.alertDescription = event.target.value;
    this.#persistDraft({
      debounce: event.type === "input"
    });
  }
  #onPresetClick(preset) {
    this.alertDescription = preset;
    this.#persistDraft();
  }

  // TODO: Bug 2054529 - share this URL validation with about:tools' create form
  async #validateUrl(url) {
    const value = url.trim();
    if (!value) {
      return {
        valid: true,
        error: ""
      };
    }
    try {
      const {
        protocol
      } = new URL(value);
      if (protocol !== "http:" && protocol !== "https:") {
        const error = await document.l10n.formatValue("ai-tasks-alert-error-http-only");
        return {
          valid: false,
          error
        };
      }
      return {
        valid: true,
        error: ""
      };
    } catch {
      const error = await document.l10n.formatValue("ai-tasks-alert-error-invalid-url");
      return {
        valid: false,
        error
      };
    }
  }
  async #validatePendingUrl() {
    this.pendingUrlError = this.pendingUrl.trim() ? (await this.#validateUrl(this.pendingUrl)).error : "";
  }
  async #addUrl() {
    const url = this.pendingUrl.trim();
    if (!url) {
      return;
    }
    const {
      valid,
      error
    } = await this.#validateUrl(url);
    if (!valid) {
      this.pendingUrlError = error;
      return;
    }
    if (this.pageUrls.includes(url)) {
      this.pendingUrlError = await document.l10n.formatValue("ai-tasks-alert-error-duplicate-url");
      return;
    }
    if (this.pageUrls.length >= MAX_WATCH_URLS) {
      this.pendingUrlError = await document.l10n.formatValue("ai-tasks-alert-error-max-urls", {
        count: MAX_WATCH_URLS
      });
      return;
    }
    this.pageUrls = [...this.pageUrls, url];
    this.pendingUrl = "";
    this.pendingUrlError = "";
    this.#persistDraft();
  }
  #removeUrl(url) {
    this.pageUrls = this.pageUrls.filter(u => u !== url);
    this.#persistDraft();
  }
  #displayUrl(url) {
    try {
      return new URL(url).hostname;
    } catch {
      return url;
    }
  }
  #onPendingUrlInput(event) {
    this.pendingUrl = event.target.value;
    this.#validatePendingUrl();
    this.#persistDraft({
      debounce: true
    });
  }
  #onPendingUrlKeydown(event) {
    if (event.key !== "Enter") {
      return;
    }
    event.preventDefault();
    this.#addUrl();
  }
  #onCancel() {
    // Cancelling drops the whole card, and with it the draft the host holds,
    // so this only has to stop a coalesced edit from landing after that
    this.#clearDraftTimer();
    this.#dispatch("agent-monitor-item:cancel", {});
  }
  #onSubmit() {
    if (!this.#isFormValid) {
      return;
    }
    // The host drops the draft as it commits the form, so make sure a coalesced
    // edit can't land after that and resurrect it
    this.#clearDraftTimer();
    const isCreateMode = this.mode === "create";
    this.#dispatch("agent-monitor-item:submit", {
      mode: this.mode,
      id: this.agent?.id,
      monitorName: this.#monitorName,
      condition: this.alertDescription.trim(),
      watchUrls: [...this.pageUrls],
      schedule: {
        frequency: this.checkFrequency,
        time: this.scheduleTime,
        weekday: this.scheduleWeekday
      },
      autoExpandAndCheck: isCreateMode // Signal to expand and check after creation
    });
    // Exit edit mode after saving
    if (this.editing) {
      this.editing = false;
      this.#dispatch("agent-monitor-item:edit-toggle", {
        editing: false
      });
    }
  }
  #renderStatusChip() {
    const statusInfo = this.agent?.status;
    if (!statusInfo?.kind) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing;
    }
    const l10nId = statusInfo.kind === "watching" ? "ai-tasks-alert-status-watching" : "ai-tasks-alert-status-paused";
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <span
        class="status-chip ${statusInfo.kind}"
        data-kind=${statusInfo.kind}
        data-l10n-id=${l10nId}
      >
      </span>
    `;
  }
  #renderLastCheckedCondition() {
    // Get the most recent history item (first in array) to show its condition status
    const historyItems = this.agent?.history ?? [];
    const mostRecentItem = historyItems.length ? historyItems[0] : null;
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      ${mostRecentItem && mostRecentItem.conditionMet !== undefined ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span
            class="status-chip"
            data-l10n-id=${mostRecentItem.conditionMet ? "ai-tasks-alert-last-result-met" : "ai-tasks-alert-last-result-not-met"}
          ></span>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
    `;
  }
  #renderConditionField() {
    const presets = this.agent?.conditionPresets ?? [];
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <div class="field">
        <moz-textarea
          class="monitor-condition-input"
          data-l10n-id="ai-tasks-alert-alert"
          data-l10n-attrs="placeholder,label,description"
          .value=${this.alertDescription}
          @input=${this.#onConditionInput}
          @change=${this.#onConditionInput}
        ></moz-textarea>
        ${presets.length ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div class="chip-row">
              ${presets.map(preset => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<moz-button
                    class="chip ${preset === this.alertDescription ? "selected" : ""}"
                    label=${preset}
                    @click=${() => this.#onPresetClick(preset)}
                  ></moz-button>`)}
            </div>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
      </div>
    `;
  }
  #renderPagesField() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <div class="field">
        <div class="pages-container">
          <div class="page-input-row">
            <moz-input-url
              class="form-input page-url-input ${this.pendingUrlError ? "error" : ""}"
              data-l10n-id="ai-tasks-alert-pages"
              data-l10n-attrs="placeholder,label"
              data-l10n-args=${JSON.stringify({
      maxPages: MAX_WATCH_URLS
    })}
              .value=${this.pendingUrl}
              @input=${this.#onPendingUrlInput}
              @keydown=${this.#onPendingUrlKeydown}
              @blur=${() => this.#validatePendingUrl()}
            ></moz-input-url>
            <moz-button
              size="small"
              type="icon ghost"
              class="add-page-btn"
              iconsrc="chrome://global/skin/icons/plus.svg"
              data-l10n-id="ai-tasks-alert-add-url"
              data-l10n-attrs="aria-label"
              ?disabled=${this.pageUrls.length >= MAX_WATCH_URLS}
              @click=${() => this.#addUrl()}
            ></moz-button>
          </div>
          ${this.pendingUrlError ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div class="error-message">${this.pendingUrlError}</div>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
          ${this.pageUrls.length ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div class="page-pills-row">
                ${this.pageUrls.map(url => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span class="page-pill">
                      <span class="page-pill-url"
                        >${this.#displayUrl(url)}</span
                      >
                      <button
                        type="button"
                        class="page-pill-remove"
                        data-l10n-id="ai-tasks-alert-remove-page-label"
                        data-l10n-attrs="aria-label"
                        @click=${() => this.#removeUrl(url)}
                      ></button>
                    </span>`)}
              </div>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
        </div>
      </div>
    `;
  }
  #transformHistoryItem(item) {
    // Only process items with valid timestamps
    if (!item.checkedAt) {
      return null;
    }

    // Format the timestamp
    const date = new Date(item.checkedAt);
    const displayTime = date.toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric"
    }) + " - " + date.toLocaleTimeString(undefined, {
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    });

    // Handle error status
    if (item.status === "error") {
      return {
        when: displayTime,
        conditionMet: undefined,
        note: item.resultExplanation || "",
        noteL10nId: "smartwindow-agent-monitor-history-check-failed",
        status: item.status,
        low: true
      };
    }

    // Handle conditionMet cases
    if (item.conditionMet) {
      return {
        when: displayTime,
        conditionMet: true,
        note: item.resultExplanation || "",
        status: item.status,
        low: false
      };
    }

    // Handle condition not met
    return {
      when: displayTime,
      conditionMet: false,
      note: item.resultExplanation || "",
      noteL10nId: item.resultExplanation ? null : "smartwindow-agent-monitor-history-no-match",
      status: item.status,
      low: true
    };
  }
  #renderHistory() {
    const historyItems = this.agent?.history ?? [];
    if (!historyItems.length) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <div
        class="section-toggle"
        data-l10n-id="ai-tasks-alert-change-history"
      ></div>
      <div class="history">
        ${historyItems.map(item => {
      const normalizedItem = this.#transformHistoryItem(item);

      // Skip items without valid timestamps
      if (!normalizedItem) {
        return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing;
      }
      return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div class="history-item">
            <span class="when">${normalizedItem.when}</span>
            ${normalizedItem.conditionMet !== undefined ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span
                  class="condition-badge ${normalizedItem.conditionMet ? "met" : "not-met"}"
                  data-l10n-id=${normalizedItem.conditionMet ? "ai-tasks-alert-condition-met" : "ai-tasks-alert-condition-not-met"}
                ></span>` : (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span>-</span>`}
            ${(() => {
        if (normalizedItem.noteL10nId) {
          return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span
                  data-l10n-id=${normalizedItem.noteL10nId}
                ></span>`;
        }
        if (normalizedItem.note) {
          return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span>${normalizedItem.note}</span>`;
        }
        return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing;
      })()}
          </div>`;
    })}
      </div>
      <div class="history-note">
        <p data-l10n-id="ai-tasks-alert-change-history-description"></p>
      </div>
    `;
  }
  #onFrequencyChange(event) {
    this.checkFrequency = event.target.value;
    this.#persistDraft();
  }
  #onScheduleTimeChange(event) {
    this.scheduleTime = event.target.value;
    this.#persistDraft();
  }
  #onWeekdayChange(event) {
    this.scheduleWeekday = Number(event.target.value);
    this.#persistDraft();
  }
  #renderScheduleSummary() {
    const schedule = this.agent?.schedule;
    if (!schedule) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing;
    }

    // Convert HH:MM string to a Date object for Fluent formatting
    // Use a fixed date to ensure consistent formatting
    const [hours, minutes] = schedule.time.split(":").map(Number);
    const timeDate = new Date();
    timeDate.setHours(hours, minutes, 0, 0);
    if (schedule.frequency === SCHEDULE_TYPES.WEEKLY) {
      // Map weekday index to the specific Fluent string ID
      const weekdayFluent = ["ai-tasks-alert-schedule-weekly-sunday", "ai-tasks-alert-schedule-weekly-monday", "ai-tasks-alert-schedule-weekly-tuesday", "ai-tasks-alert-schedule-weekly-wednesday", "ai-tasks-alert-schedule-weekly-thursday", "ai-tasks-alert-schedule-weekly-friday", "ai-tasks-alert-schedule-weekly-saturday"];
      const fluentId = weekdayFluent[schedule.weekday];
      if (fluentId) {
        return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div class="monitor-row">
          <span
            class="val"
            data-l10n-id=${fluentId}
            data-l10n-args=${JSON.stringify({
          time: timeDate.getTime()
        })}
          ></span>
        </div>`;
      }
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <span
        class="val"
        data-l10n-id="ai-tasks-alert-schedule-daily-at"
        data-l10n-args=${JSON.stringify({
      time: timeDate.getTime()
    })}
      ></span>
    `;
  }
  #renderTimeField() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div class="form-section-half">
      <label
        class="form-label"
        data-l10n-id="ai-tasks-alert-time-label"
      ></label>
      <moz-select
        class="form-select"
        .value=${this.scheduleTime}
        @change=${this.#onScheduleTimeChange}
      >
        ${TIME_OPTIONS.map(opt => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<moz-option
              value=${opt.value}
              label=${opt.label}
              iconsrc=${TIME_ICON}
            ></moz-option>`)}
      </moz-select>
    </div>`;
  }
  #renderScheduler() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <div class="form-row">
        <div class="schedule-container">
          <div class="form-section-half">
            <label
              class="form-label"
              data-l10n-id="ai-tasks-alert-check-label"
            ></label>
            <moz-select
              class="form-select"
              .value=${this.checkFrequency}
              @change=${this.#onFrequencyChange}
            >
              <moz-option
                value=${SCHEDULE_TYPES.DAILY}
                data-l10n-id="ai-tasks-alert-schedule-daily"
                iconsrc=${SCHEDULE_ICON}
              ></moz-option>
              <moz-option
                value=${SCHEDULE_TYPES.WEEKLY}
                data-l10n-id="ai-tasks-alert-schedule-weekly"
                iconsrc=${SCHEDULE_ICON}
              ></moz-option>
            </moz-select>
          </div>
          ${this.checkFrequency === SCHEDULE_TYPES.WEEKLY ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div class="form-section-half">
                <label
                  class="form-label"
                  data-l10n-id="ai-tasks-alert-day-label"
                ></label>
                <moz-select
                  class="form-select"
                  value=${this.scheduleWeekday}
                  @change=${this.#onWeekdayChange}
                >
                  ${WEEKDAYS.map(day => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<moz-option
                        value=${day.value}
                        data-l10n-id=${day.ftlId}
                        iconsrc=${SCHEDULE_ICON}
                      ></moz-option>`)}
                </moz-select>
              </div>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
        </div>
        ${this.#renderTimeField()}
      </div>
    `;
  }
  #renderCreate() {
    const agent = this.agent ?? {};
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <div class="monitor-card">
        <div class="title-container">
          <monitor-icon size="small"></monitor-icon>
          <h2
            class="monitor-card-state-title"
            data-l10n-id="ai-tasks-alert-modal-title"
          ></h2>
        </div>
        <div class="monitor-card-head">
          <div class="monitor-name-field">
            <moz-input-text
              class="monitor-name-input"
              data-l10n-id="ai-tasks-alert-name"
              data-l10n-attrs="label"
              .value=${this.#monitorName}
              @input=${this.#onNameInput}
              @change=${this.#onNameInput}
            ></moz-input-text>
          </div>
        </div>
        ${agent.value ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div class="monitor-value">
              <span class="now">${agent.value}</span>
              ${agent.valueMeta ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span class="from">${agent.valueMeta}</span>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
            </div>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
        ${this.#renderConditionField()} ${this.#renderPagesField()}
        ${this.#renderScheduler()}

        <div class="monitor-card-actions">
          <span class="spacer"></span>
          <moz-button
            id="cancel-create-button"
            type="default"
            data-l10n-id="ai-tasks-alert-cancel-button"
            data-l10n-attrs="label"
            @click=${this.#onCancel}
          ></moz-button>
          <moz-button
            type="primary"
            data-l10n-id="ai-tasks-alert-create-button"
            data-l10n-attrs="label"
            @click=${this.#onSubmit}
          ></moz-button>
        </div>
      </div>
    `;
  }
  #renderDisplay() {
    const agent = this.agent ?? {};
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <div class="monitor-card chatcard" @click=${this.#onCardClick}>
        <div class="monitor-card-head">
          ${this.#renderStatusChip()}
          <span class="monitor-card-title"
            ><span class="monitor-card-name">${agent.monitorName}</span></span
          >
          <span class="spacer"></span>
          ${this.showLastResult ? this.#renderLastCheckedCondition() : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
          <button
            type="button"
            class="chev"
            aria-expanded=${this.expanded}
            data-l10n-id="ai-tasks-alert-show-details"
            data-l10n-attrs="aria-label"
            @click=${this.#onToggle}
          ></button>
        </div>
        ${this.expanded ? this.#renderExpand() : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
      </div>
    `;
  }
  #renderExpand() {
    const agent = this.agent ?? {};
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <div class="watch-expand" @click=${e => e.stopPropagation()}>
        ${agent.value ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div class="monitor-value">
              <span class="now">${agent.value}</span>
              ${agent.valueMeta ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span class="from">${agent.valueMeta}</span>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
            </div>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
        ${this.editing ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`${this.#renderConditionField()} ${this.#renderPagesField()}
            ${this.#renderScheduler()}` : (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div class="task-section">
                <div
                  class="task-header"
                  data-l10n-id="ai-tasks-alert-the-alert"
                ></div>
                <div class="task-content">${agent.condition}</div>
              </div>
              ${agent.watchUrls?.length ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div class="url-section">
                    <div
                      class="section-toggle"
                      data-l10n-id="ai-tasks-alert-on-this-page"
                    ></div>
                    <div class="url-chips">
                      ${agent.watchUrls.map(url => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span class="url-chip"
                            >${this.#displayUrl(url)}</span
                          >`)}
                    </div>
                  </div>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
              <div class="monitor-row">${this.#renderScheduleSummary()}</div>`}
        ${!this.editing ? this.#renderHistory() : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}

        <div class="monitor-card-actions">
          ${!this.editing ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<moz-button
                  id="edit-button"
                  type="default"
                  @click=${this.#onEditToggle}
                  data-l10n-id="ai-tasks-alert-edit-button"
                  data-l10n-attrs="label"
                ></moz-button>
                <moz-button
                  type="default"
                  @click=${() => {
      const isPaused = agent.status?.kind === "paused";
      this.#dispatch("agent-monitor-item:pause", {
        id: agent.id,
        paused: !isPaused
      });
    }}
                  data-l10n-id=${agent.status?.kind === "paused" ? "ai-tasks-alert-resume-button" : "ai-tasks-alert-pause-button"}
                  data-l10n-attrs="label"
                ></moz-button>
                <moz-button
                  type="default"
                  @click=${() => this.#dispatch("agent-monitor-item:check-now", {
      id: agent.id
    })}
                  data-l10n-id="ai-tasks-alert-check-now-button"
                  data-l10n-attrs="label"
                ></moz-button>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}

          <span class="spacer"></span>
          ${this.editing ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)` <moz-button
                  id="cancel-edit-button"
                  type="secondary"
                  @click=${this.#onEditToggle}
                  data-l10n-id="ai-tasks-alert-cancel-button"
                  data-l10n-attrs="label"
                ></moz-button
                ><moz-button
                  type="primary"
                  @click=${this.#onSubmit}
                  data-l10n-id="ai-tasks-alert-save-button"
                  data-l10n-attrs="label"
                ></moz-button>` : (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
                <moz-button
                  class="delete-button"
                  type="icon"
                  iconsrc="chrome://global/skin/icons/delete.svg"
                  data-l10n-id="ai-tasks-alert-delete-button"
                  data-l10n-attrs="aria-label"
                  @click=${() => this.#dispatch("agent-monitor-item:delete", {
      id: agent.id
    })}
                ></moz-button>
              `}
        </div>
      </div>
    `;
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_agent_monitor_item_agent_monitor_item_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      ${this.mode === "create" ? this.#renderCreate() : this.#renderDisplay()}
    `;
  }
}
customElements.define("agent-monitor-item", AgentMonitorItem);

/***/ })

}]);
//# sourceMappingURL=components-agent-monitor-item-agent-monitor-item-stories.a805298b.iframe.bundle.js.map