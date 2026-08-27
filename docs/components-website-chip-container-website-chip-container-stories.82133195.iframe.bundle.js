"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[9,6284,7752,9240],{

/***/ 5136:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "website-chip-container.2dc0db9a8b938372c127.css";

/***/ }),

/***/ 6266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AIWebsiteChip: () => (/* binding */ AIWebsiteChip)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_ai_website_chip_ai_website_chip_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39894);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * A website chip component for tagging and displaying websites.
 *
 * Two types:
 * - in-line: Supports empty state with "@" symbol + "Tag a tab or site" placeholder
 *   - default: favicon + text
 *   - hover: favicon + text (identical to default)
 *   - empty: "@" symbol + "Tag a tab or site" text
 * - context-chip: No empty state support
 *   - default: favicon + text
 *   - hover (removable): remove button + text
 *   - hover (non-removable): favicon + text (identical to default)
 *
 * @property {string} type - Type of chip: "in-line" or "context-chip"
 * @property {"default" | "small"} size - Chip size
 * @property {string} label - The text content of the chip
 * @property {string} iconSrc - Favicon or icon URL
 * @property {string} href - URL for the link (used with context-chip type)
 * @property {boolean} removable - Whether the chip shows a remove button on hover (default false)
 * @property {string} itemRole - ARIA role for the inner element
 */
class AIWebsiteChip extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  // Forward focus to the inner element for keyboard navigation.
  static shadowRootOptions = {
    ...chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement.shadowRootOptions,
    delegatesFocus: true
  };
  static properties = {
    type: {
      type: String,
      reflect: true
    },
    size: {
      type: String,
      reflect: true
    },
    label: {
      type: String
    },
    iconSrc: {
      type: String
    },
    href: {
      type: String
    },
    removable: {
      type: Boolean
    },
    itemRole: {
      type: String
    }
  };
  #parentHost = null;
  constructor() {
    super();
    this.type = "in-line";
    this.size = "default";
    this.label = "";
    this.iconSrc = "";
    this.href = "";
    this.removable = false;
    this.itemRole = "";
  }
  connectedCallback() {
    super.connectedCallback();
    this.#parentHost = this.getRootNode()?.host;
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    // Dispatch only when the parent is still connected: Chip was removed by
    // the user and not due to the parent unmounting.
    if (this.#parentHost?.isConnected) {
      this.#parentHost.dispatchEvent(new CustomEvent("ai-website-chip:disconnected", {
        bubbles: true,
        composed: true,
        detail: {
          label: this.label,
          type: this.type
        }
      }));
    }
    this.#parentHost = null;
  }
  get #isEmpty() {
    return this.type === "in-line" && !this.label;
  }
  get #isRemovable() {
    return this.removable;
  }
  #handleClick() {
    this.dispatchEvent(new CustomEvent("ai-website-chip:click", {
      bubbles: true,
      composed: true,
      detail: {
        label: this.label
      }
    }));
  }
  #handleRemove(e) {
    e.stopPropagation();
    e.preventDefault();
    this.dispatchEvent(new CustomEvent("ai-website-chip:remove", {
      bubbles: true,
      composed: true,
      detail: {
        label: this.label
      }
    }));
  }
  #handleAnchorClick(e) {
    if (!this.href) {
      return;
    }
    e.preventDefault();
    const hasModifier = e.shiftKey || e.metaKey || e.ctrlKey || e.altKey || e.button !== 0;
    this.dispatchEvent(new CustomEvent("AIChatContent:OpenLink", {
      bubbles: true,
      composed: true,
      detail: {
        url: this.href,
        preferSwitchToTab: !hasModifier,
        shiftKey: e.shiftKey,
        metaKey: e.metaKey,
        ctrlKey: e.ctrlKey,
        altKey: e.altKey,
        button: e.button
      }
    }));
  }
  render() {
    const isEmpty = this.#isEmpty;
    const isRemovable = this.#isRemovable;
    let iconTemplate;
    if (isEmpty) {
      iconTemplate = (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span class="chip-at">@</span>`;
    } else {
      iconTemplate = (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<img
        class="chip-icon"
        src=${this.iconSrc || "chrome://global/skin/icons/defaultFavicon.svg"}
        @error=${e => {
        e.target.src = "chrome://global/skin/icons/defaultFavicon.svg";
      }}
        alt=""
      />`;
    }
    const removeButton = isRemovable ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<button
          class="chip-remove"
          @click=${this.#handleRemove}
          data-l10n-id="aiwindow-website-chip-remove-button"
        >
          <img
            class="chip-remove-icon"
            src="chrome://global/skin/icons/close.svg"
            alt=""
          />
        </button>` : null;
    const labelTemplate = isEmpty ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span
          class="chip-label"
          data-l10n-id="aiwindow-website-chip-placeholder"
        ></span>` : (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span class="chip-label">${this.label}</span>`;
    const chipContent = (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      ${iconTemplate} ${removeButton} ${labelTemplate}
    `;
    const chipElement = this.href ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<a
          class="chip"
          part="chip"
          role=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.itemRole || undefined)}
          ?data-removable=${isRemovable}
          href=${this.href}
          @click=${this.#handleAnchorClick}
        >
          ${chipContent}
        </a>` : (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<button
          class="chip"
          part="chip"
          role=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.itemRole || undefined)}
          ?data-empty=${isEmpty}
          ?data-removable=${isRemovable}
          @click=${this.#handleClick}
        >
          ${chipContent}
        </button>`;
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_ai_website_chip_ai_website_chip_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      ${chipElement}
    `;
  }
}
customElements.define("ai-website-chip", AIWebsiteChip);

/***/ }),

/***/ 9583:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "panel-item.b8a3a645ed7a75455f31.css";

/***/ }),

/***/ 15314:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ai-grouped-chip-container.993bc6275ac4262f1259.css";

/***/ }),

/***/ 15768:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SmartwindowOverflowRowMixin: () => (/* binding */ SmartwindowOverflowRowMixin)
/* harmony export */ });
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * Renders and collapses overflowing items matching the defined selectors.
 *
 * @param {typeof import("chrome://global/content/lit-utils.mjs").MozLitElement} BaseElement
 * @returns {typeof BaseElement}
 */
const SmartwindowOverflowRowMixin = BaseElement => class extends BaseElement {
  static properties = {
    visibleCount: {
      type: Number,
      state: true
    }
  };
  #resizeObserver = null;
  #lastWidth = null;
  #measureRaf = 0;
  #widthChanged = true;
  constructor() {
    super();
    this.visibleCount = Infinity;
  }

  /**
   * @returns {string} Selector for the flex row.
   */
  get overflowContainerSelector() {
    return ".smartwindow-overflow-row";
  }

  /**
   * @returns {string} Selector for the items.
   */
  get overflowItemSelector() {
    return ":scope > [role='listitem']";
  }

  /**
   * @returns {?string} Selector for the “+n more” button.
   */
  get overflowTriggerSelector() {
    return ".overflow-more";
  }

  /**
   * @returns {number} Cap applied on top of what fits.
   */
  get maxInlineItems() {
    return Infinity;
  }

  /**
   * @returns {?number} Fixed inline count skips measurement.
   */
  get inlineItemCount() {
    return null;
  }

  /**
   * @returns {boolean} Whether the inline count comes from measuring.
   */
  get isWidthAware() {
    return !Number.isFinite(this.inlineItemCount);
  }

  /**
   * @returns {Array} The overflowing items.
   */
  get overflowItems() {
    return [];
  }

  /**
   * Whether a width-aware measure is scheduled. Exposed for tests to await.
   *
   * @returns {boolean}
   */
  get isMeasuring() {
    return !!this.#measureRaf;
  }
  connectedCallback() {
    super.connectedCallback();
    if (this.hasUpdated) {
      this.syncOverflowMode();
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.#stopMeasuring();
  }
  updated(changed) {
    /* Getters are consumer-defined and measuring is a no-op for an unchanged
       count. Run on every render to ensure we don’t measure a stale tree. */
    super.updated(changed);
    this.syncOverflowMode();
  }

  /* Apply the current overflow mode. */
  syncOverflowMode() {
    if (this.isWidthAware) {
      this.#observeWidth();
      this.scheduleOverflowMeasure();
      return;
    }
    this.#stopMeasuring();
    this.#setVisibleCount(Math.max(0, this.inlineItemCount));
  }

  /* Measure next frame so layout has settled. */
  scheduleOverflowMeasure() {
    if (this.#measureRaf || !this.isWidthAware) {
      return;
    }
    this.#measureRaf = requestAnimationFrame(() => {
      this.#measureRaf = 0;
      this.#measureOverflow();
    });
  }
  #observeWidth() {
    this.#resizeObserver ??= new ResizeObserver(entries => {
      const inlineSize = entries[0]?.contentBoxSize?.[0]?.inlineSize;
      if (inlineSize == null || inlineSize === this.#lastWidth) {
        return;
      }
      this.#lastWidth = inlineSize;
      this.#widthChanged = true;
      this.scheduleOverflowMeasure();
    });
    this.#resizeObserver.observe(this);
  }
  #stopMeasuring() {
    this.#resizeObserver?.disconnect();
    this.#resizeObserver = null;
    this.#lastWidth = null;
    cancelAnimationFrame(this.#measureRaf);
    this.#measureRaf = 0;
  }
  #setVisibleCount(count) {
    if (this.visibleCount !== count) {
      this.visibleCount = count;
    }
  }
  #measureOverflow() {
    const container = this.renderRoot?.querySelector(this.overflowContainerSelector);
    const items = this.overflowItems;
    if (!container || !items.length) {
      return;
    }
    const children = [...container.querySelectorAll(this.overflowItemSelector)];
    // A stale render would measure the wrong nodes.
    if (children.length !== items.length) {
      return;
    }
    const columnGap = parseFloat(getComputedStyle(container).columnGap) || 0;
    const cumulativeItemWidths = [0];
    for (const child of children) {
      cumulativeItemWidths.push(cumulativeItemWidths.at(-1) + child.getBoundingClientRect().width + columnGap);
    }

    // The trigger is only rendered if the row overflows.
    if (children.length <= this.maxInlineItems && cumulativeItemWidths.at(-1) - columnGap <= container.clientWidth) {
      this.#setVisibleCount(children.length);
      return;
    }
    const trigger = this.overflowTriggerSelector ? container.querySelector(this.overflowTriggerSelector) : null;
    const triggerWidth = trigger?.getBoundingClientRect().width ?? 0;
    let visibleCount = Math.min(children.length, this.maxInlineItems);
    while (visibleCount && cumulativeItemWidths[visibleCount] + triggerWidth > container.clientWidth) {
      visibleCount--;
    }
    // Only reveal more items when the row got wider.
    if (visibleCount > this.visibleCount && !this.#widthChanged) {
      return;
    }
    this.#widthChanged = false;
    this.#setVisibleCount(visibleCount);
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
  #lastFormattedText = null;
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
    let text = this.textContent;
    if (!MozTextLabel.#underlineAccesskey || !accessKey && !this.#lastFormattedAccessKey || this.#lastFormattedAccessKey == accessKey && this.#lastFormattedText == text || !text || !text.trim()) {
      return;
    }
    this.#stopMutationObserver();
    try {
      this.#formatAccessKey(accessKey);
    } finally {
      this.#lastFormattedText = this.textContent;
      queueMicrotask(() => {
        this.#startMutationObserver();
        // ensure the access key is formatted
        this.formatAccessKey();
      });
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

/***/ 27534:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "panel-list.f8ec98ea7fbdd82a86da.css";

/***/ }),

/***/ 30082:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-button.e874513288adb958d186.css";

/***/ }),

/***/ 37752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelItem: () => (/* binding */ PanelItem),
/* harmony export */   PanelList: () => (/* binding */ PanelList)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_panel_list_panel_item_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9583);
/* harmony import */ var toolkit_content_widgets_panel_list_panel_list_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27534);


/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

class PanelList extends HTMLElement {
  static get observedAttributes() {
    return ["open"];
  }
  static get fragment() {
    if (!this._template) {
      let parser = new DOMParser();
      let cssPath = toolkit_content_widgets_panel_list_panel_list_css__WEBPACK_IMPORTED_MODULE_1__;
      let doc = parser.parseFromString(`
          <template>
            <link rel="stylesheet" href=${cssPath}>
            <div class="arrow top" role="presentation"></div>
            <div class="list" role="presentation">
              <slot></slot>
            </div>
            <div class="arrow bottom" role="presentation"></div>
          </template>
        `, "text/html");
      this._template = document.importNode(doc.querySelector("template"), true);
    }
    return this._template.content.cloneNode(true);
  }
  constructor() {
    super();
    this.attachShadow({
      mode: "open"
    });
    this.shadowRoot.appendChild(this.constructor.fragment);
  }
  connectedCallback() {
    this.setAttribute("role", "menu");
    this.initializePopover();
  }

  // Let the XUL panel handle the positioning and alignment of the
  // panel-list. Submenus also don't support popover as they need
  // to be anchored to the parent panel-list.
  supportsPopover() {
    return !this.parentIsXULPanel() && !this.lastAnchorNode?.hasSubmenu && this.getAttribute("slot") !== "submenu";
  }
  initializePopover() {
    if (this.supportsPopover() && !this.hasAttribute("popover")) {
      this.setAttribute("popover", "auto");
    } else if (!this.supportsPopover() && this.hasAttribute("popover")) {
      this.removeAttribute("popover");
    }
  }
  attributeChangedCallback(name, oldVal, newVal) {
    if (name == "open" && newVal != oldVal) {
      if (this.open) {
        this.onShow();
      } else {
        this.onHide();
      }
    }
  }
  get open() {
    return this.hasAttribute("open");
  }
  set open(val) {
    this.toggleAttribute("open", val);
  }
  get stayOpen() {
    return this.hasAttribute("stay-open");
  }
  set stayOpen(val) {
    this.toggleAttribute("stay-open", val);
  }

  /**
   * Whether an item is activated by a mouse release over it even when the press
   * happened elsewhere, so that the panel can be opened and an item chosen with
   * a single click. Suitable for panels that open on mousedown.
   *
   * @type {boolean}
   */
  get clickOnMouseup() {
    return this.hasAttribute("click-on-mouseup");
  }
  set clickOnMouseup(val) {
    this.toggleAttribute("click-on-mouseup", val);
  }
  getTargetForEvent(event) {
    if (!event) {
      return null;
    }
    if (event._savedComposedTarget) {
      return event._savedComposedTarget;
    }
    if (event.composed) {
      event._savedComposedTarget = event.composedTarget || event.composedPath()[0];
    }
    return event._savedComposedTarget || event.target;
  }
  show(triggeringEvent, target) {
    // Re-arming the triggeringEvent guard in handleEvent() on an open list
    // would make it ignore the event currently being dispatched.
    if (this.open) {
      return;
    }
    this.triggeringEvent = triggeringEvent;
    this.lastAnchorNode = target || this.getTargetForEvent(this.triggeringEvent);
    this.wasOpenedByKeyboard = triggeringEvent && (triggeringEvent.inputSource == MouseEvent.MOZ_SOURCE_KEYBOARD || triggeringEvent.inputSource == MouseEvent.MOZ_SOURCE_UNKNOWN || triggeringEvent.key);
    if (this.supportsPopover()) {
      const autohideDisabled = this.hasServices() ? Services.prefs.getBoolPref("ui.popup.disable_autohide", false) : false;
      // A contextmenu event is dispatched during the button press on most
      // platforms, so the release that follows would light-dismiss an auto
      // popover. Manual popovers are exempt from light dismiss; the listeners
      // from addHideListeners() dismiss them.
      const lightDismissable = !autohideDisabled && triggeringEvent?.type != "contextmenu";
      this.setAttribute("popover", lightDismissable ? "auto" : "manual");
    }

    // Bug 2010864 - We need to set `open` to true before calling this.onShow()
    // when the panel-list supports popover, otherwise the panel
    // height and width will be 0 and will be positioned incorrectly
    // when calling setAlign.
    this.open = true;
    if (this.parentIsXULPanel()) {
      this.toggleAttribute("inxulpanel", true);
      let panel = this.parentElement;
      panel.hidden = false;
      // Bug 1842070 - There appears to be a race here where panel-lists
      // embedded in XUL panels won't appear during the first call to show()
      // without waiting for a mix of rAF and another tick of the event
      // loop.
      requestAnimationFrame(() => {
        setTimeout(() => {
          panel.openPopup(this.lastAnchorNode, "after_start", 0, 0, false, false, this.triggeringEvent);
        }, 0);
      });
    } else {
      this.toggleAttribute("inxulpanel", false);
    }
  }
  hide(triggeringEvent, {
    force = false
  } = {}, eventTarget) {
    // It's possible this is being used in an unprivileged context, in which
    // case it won't have access to Services / Services will be undeclared.
    const autohideDisabled = this.hasServices() ? Services.prefs.getBoolPref("ui.popup.disable_autohide", false) : false;
    if (autohideDisabled && !force) {
      // Don't hide if this wasn't "forced" (using escape or click in menu).
      return;
    }
    let openingEvent = this.triggeringEvent;
    this.triggeringEvent = triggeringEvent;
    this.open = false;
    if (this.parentIsXULPanel()) {
      // It's possible that we're being programattically hidden, in which
      // case, we need to hide the XUL panel we're embedded in. If, however,
      // we're being hidden because the XUL panel is being hidden, calling
      // hidePopup again on it is a no-op.
      let panel = this.parentElement;
      panel.hidePopup();
    }
    let target = eventTarget || this.getTargetForEvent(openingEvent);
    // Refocus the button that opened the menu if we have one.
    if (target && this.wasOpenedByKeyboard) {
      target.focus();
    }
  }
  toggle(triggeringEvent, target = null) {
    if (this.open) {
      this.hide(triggeringEvent, {
        force: true
      }, target);
    } else {
      this.show(triggeringEvent, target);
    }
  }
  hasServices() {
    // Safely check for Services without throwing a ReferenceError.
    return typeof Services !== "undefined";
  }
  isDocumentRTL() {
    if (this.hasServices()) {
      return Services.locale.isAppLocaleRTL;
    }
    return document.dir === "rtl";
  }
  parentIsXULPanel() {
    const XUL_NS = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
    return this.parentElement?.namespaceURI == XUL_NS && this.parentElement?.localName == "panel";
  }

  // FIXME: Bug 2022047 - Using anchor positioning would significantly
  // reduce the complexity of this function.
  async setAlign() {
    const hostElement = this.parentElement || this.getRootNode().host;
    if (!hostElement) {
      // This could get called before we're added to the DOM.
      // Nothing to do in that case.
      return;
    }

    // Set the showing attribute to hide the panel until its alignment is set.
    this.setAttribute("showing", "true");
    // Tell the host element to hide any overflow in case the panel extends off
    // the page before the alignment is set. A popover skips it: mutating the
    // host's overflow reconstructs its frame, which makes every scrollable
    // descendant dispatch a `scroll` event it never scrolled for (bug 2066409),
    // and `addHideListeners()` reads that as the anchor moving away.
    const hideHostOverflow = !this.supportsPopover();
    if (hideHostOverflow) {
      hostElement.style.overflow = "hidden";
    }

    // Wait for a layout flush, then find the bounds.
    let {
      anchorBottom,
      // distance from the bottom of the anchor el to top of viewport.
      anchorLeft,
      anchorTop,
      anchorWidth,
      panelHeight,
      panelWidth,
      winHeight,
      winScrollY,
      winScrollX,
      clientWidth
    } = await new Promise(resolve => {
      this.style.left = 0;
      this.style.top = 0;
      this.style.minWidth = "";
      requestAnimationFrame(() => setTimeout(() => {
        let target = this.lastAnchorNode || this.getTargetForEvent(this.triggeringEvent);
        let anchorElement = target || hostElement;
        // It's possible this is being used in a context where windowUtils is
        // not available. In that case, fallback to using the element.
        let getBounds = el => window.windowUtils ? window.windowUtils.getBoundsWithoutFlushing(el) : el.getBoundingClientRect();
        // Use y since top is reserved.
        let anchorBounds = getBounds(anchorElement);
        let panelBounds = getBounds(this);
        let clientWidth = document.scrollingElement.clientWidth;
        let panelHeight = this.scrollHeight > panelBounds.height ? this.scrollHeight : panelBounds.height;
        resolve({
          anchorBottom: anchorBounds.bottom,
          anchorHeight: anchorBounds.height,
          anchorLeft: anchorBounds.left,
          anchorTop: anchorBounds.top,
          anchorWidth: anchorBounds.width,
          panelHeight,
          panelWidth: panelBounds.width,
          winHeight: innerHeight,
          winScrollX: scrollX,
          winScrollY: scrollY,
          clientWidth
        });
      }, 0));
    });

    // If we're embedded in a XUL panel, let it handle alignment.
    if (!this.parentIsXULPanel()) {
      // Calculate the left/right alignment.
      let align;
      let leftOffset;
      let effectivePanelWidth = this.hasAttribute("min-width-from-anchor") ? Math.max(panelWidth, anchorWidth) : panelWidth;
      let leftAlignX = anchorLeft;
      let rightAlignX = anchorLeft + anchorWidth - effectivePanelWidth;
      if (this.isDocumentRTL()) {
        // Prefer aligning on the right. Fall back to left if the right-aligned
        // panel would overflow the left viewport edge (rightAlignX < 0), or if
        // the anchor's right edge exceeds the viewport width (which would place
        // the right-aligned panel off-screen on the right).
        align = rightAlignX < 0 || anchorLeft + anchorWidth > clientWidth ? "left" : "right";
      } else {
        // Prefer aligning on the left.
        align = leftAlignX + effectivePanelWidth > clientWidth ? "right" : "left";
      }
      const alignX = align === "left" ? leftAlignX : rightAlignX;
      leftOffset = Math.max(0, Math.min(alignX, clientWidth - effectivePanelWidth));
      let bottomSpaceY = winHeight - anchorBottom;
      let valign;
      let topOffset;
      const VIEWPORT_PANEL_MIN_MARGIN = 10; // 10px ensures that the panel is not flush with the viewport.
      const roundedAnchorBottom = Math.round(anchorBottom);
      const roundedBottomSpaceY = Math.round(bottomSpaceY);
      const roundedAnchorTop = Math.round(anchorTop);
      const roundedPanelHeight = Math.round(panelHeight);

      // Only want to valign top when there's more space between the bottom of the anchor element and the top of the viewport.
      // If there's more space between the bottom of the anchor element and the bottom of the viewport, we valign bottom.
      if (roundedAnchorBottom > roundedBottomSpaceY && roundedAnchorBottom + roundedPanelHeight + VIEWPORT_PANEL_MIN_MARGIN > winHeight) {
        // Never want to have a negative value for topOffset, so ensure it's at least 10px.
        topOffset = Math.max(roundedAnchorTop - roundedPanelHeight, VIEWPORT_PANEL_MIN_MARGIN);
        // Provide a max-height for larger elements which will provide scrolling as needed.
        this.style.maxHeight = `${roundedAnchorTop - VIEWPORT_PANEL_MIN_MARGIN}px`;
        valign = "top";
      } else {
        topOffset = roundedAnchorBottom;
        this.style.maxHeight = `${roundedBottomSpaceY - VIEWPORT_PANEL_MIN_MARGIN}px`;
        valign = "bottom";
      }

      // Set the alignments and show the panel.
      this.setAttribute("align", align);
      this.setAttribute("valign", valign);
      if (hideHostOverflow) {
        hostElement.style.overflow = "";
      }
      // Decide positioning based on where this panel will be rendered
      const offsetParentIsBody = this.supportsPopover() || this.offsetParent === document?.body || !this.offsetParent;
      if (offsetParentIsBody) {
        // viewport-based
        this.style.left = `${Math.round(leftOffset + winScrollX)}px`;
        this.style.top = `${Math.round(topOffset + winScrollY)}px`;
      } else {
        // container-relative
        const offsetParentRect = this.offsetParent.getBoundingClientRect();
        this.style.left = `${Math.round(leftOffset - offsetParentRect.left)}px`;
        this.style.top = `${Math.round(topOffset - offsetParentRect.top)}px`;
      }
    }
    this.style.minWidth = this.hasAttribute("min-width-from-anchor") ? `${Math.round(anchorWidth)}px` : "";
    this.removeAttribute("showing");
  }
  addHideListeners() {
    if (this.hasAttribute("stay-open") && !this.lastAnchorNode?.hasSubmenu) {
      // This is intended for inspection in Storybook.
      return;
    }
    // Hide when a panel-item is clicked in the list.
    this.addEventListener("click", this);
    // Allows submenus to stopPropagation when focus is already in the menu
    this.addEventListener("keydown", this);
    // We need Escape/Tab/ArrowDown to work when opened with the mouse.
    document.addEventListener("keydown", this);
    // Hide when a click is initiated outside the panel.
    document.addEventListener("mousedown", this);
    // Hide if focus changes and the panel isn't in focus.
    document.addEventListener("focusin", this);
    // Reset for focus tracking, we treat the first focusin differently.
    this.focusHasChanged = false;
    // Hide on resize, scroll or losing window focus
    window.addEventListener("scroll", this, {
      capture: true
    });
    window.addEventListener("resize", this);
    window.addEventListener("blur", this);
    if (this.parentIsXULPanel()) {
      this.parentElement.addEventListener("popuphidden", this);
    }
  }
  removeHideListeners() {
    this.removeEventListener("click", this);
    this.removeEventListener("keydown", this);
    document.removeEventListener("keydown", this);
    document.removeEventListener("mousedown", this);
    document.removeEventListener("focusin", this);
    window.removeEventListener("resize", this);
    window.removeEventListener("scroll", this, {
      capture: true
    });
    window.removeEventListener("blur", this);
    if (this.parentIsXULPanel()) {
      this.parentElement.removeEventListener("popuphidden", this);
    }
  }
  handleEvent(e) {
    // Ignore the event if it caused the panel to open.
    if (e == this.triggeringEvent) {
      return;
    }
    let target = this.getTargetForEvent(e);
    let inPanelList = e.composed ? e.composedPath().some(el => el == this) : e.target.closest && e.target.closest("panel-list") == this;
    switch (e.type) {
      case "resize":
      case "scroll":
        if (!inPanelList) {
          this.hide();
        }
        break;
      case "blur":
      case "popuphidden":
        this.hide();
        break;
      case "click":
        if (inPanelList) {
          this.hide(undefined, {
            force: true
          });
        } else {
          // Avoid falling through to the default click handler of the parent.
          e.stopPropagation();
        }
        break;
      case "mousedown":
        // Close if there's a click started outside the panel.
        if (!inPanelList) {
          this.hide();
        }
        break;
      case "keydown":
        if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Tab") {
          // Ignore tabbing with a modifer other than shift.
          if (e.key === "Tab" && (e.altKey || e.ctrlKey || e.metaKey)) {
            return;
          }

          // Don't scroll the page or let the regular tab order take effect.
          e.preventDefault();

          // Prevents the host panel list from responding to these events while
          // the submenu is active.
          e.stopPropagation();

          // Keep moving to the next/previous element sibling until we find a
          // panel-item that isn't hidden.
          let moveForward = e.key === "ArrowDown" || e.key === "Tab" && !e.shiftKey;
          let nextItem = moveForward ? this.focusWalker.nextNode() : this.focusWalker.previousNode();

          // If the next item wasn't found, try looping to the top/bottom.
          if (!nextItem) {
            this.focusWalker.currentNode = this;
            if (moveForward) {
              nextItem = this.focusWalker.firstChild();
            } else {
              nextItem = this.focusWalker.lastChild();
            }
          }
          break;
        } else if (e.key === "Escape") {
          this.hide(undefined, {
            force: true
          });
        } else if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
          // Check if any of the children have an accesskey for this letter.
          let item = this.querySelector(`[accesskey="${e.key.toLowerCase()}"],
              [accesskey="${e.key.toUpperCase()}"]`);
          if (item) {
            // Prevent the host from receiving input events for this keypress.
            e.preventDefault();
            item.click();
          }
        }
        break;
      case "focusin":
        if (this.triggeringEvent && target == this.getTargetForEvent(this.triggeringEvent) && !this.focusHasChanged) {
          // There will be a focusin after the mousedown that opens the panel
          // using the mouse. Ignore the first focusin event if it's on the
          // triggering target.
          this.focusHasChanged = true;
        } else {
          // Just record that there was a focusin event.
          this.focusHasChanged = true;
        }
        break;
    }
  }

  /**
   * A TreeWalker that can be used to focus elements. The returned element will
   * be the element that has gained focus based on the requested movement
   * through the tree.
   *
   * Example:
   *
   *   this.focusWalker.currentNode = this;
   *   // Focus and get the first focusable child.
   *   let focused = this.focusWalker.nextNode();
   *   // Focus the second focusable child.
   *   this.focusWalker.nextNode();
   */
  get focusWalker() {
    if (!this._focusWalker) {
      this._focusWalker = document.createTreeWalker(this, NodeFilter.SHOW_ELEMENT, {
        acceptNode: node => {
          // No need to look at hidden nodes.
          if (node.hidden) {
            return NodeFilter.FILTER_REJECT;
          }

          // Focus the node, if it worked then this is the node we want.
          node.focus();
          if (node === node.getRootNode().activeElement) {
            return NodeFilter.FILTER_ACCEPT;
          }

          // Continue into child nodes if the parent couldn't be focused.
          return NodeFilter.FILTER_SKIP;
        }
      });
    }
    return this._focusWalker;
  }
  async setSubmenuAlign() {
    const hostElement = this.lastAnchorNode.parentElement || this.getRootNode().host;
    // The showing attribute allows layout of the panel while remaining hidden
    // from the user until alignment is set.
    this.setAttribute("showing", "true");

    // The rAF + setTimeout matches setAlign() so the submenu is laid out before
    // its width is measured. Without the setTimeout the width can read as 0 and
    // the overflow check picks the wrong side.
    let {
      anchorLeft,
      anchorWidth,
      anchorTop,
      parentPanelTop,
      panelWidth,
      clientWidth
    } = await new Promise(resolve => {
      requestAnimationFrame(() => setTimeout(() => {
        // It's possible this is being used in a context where windowUtils is
        // not available. In that case, fallback to using the element.
        let getBounds = el => window.windowUtils ? window.windowUtils.getBoundsWithoutFlushing(el) : el.getBoundingClientRect();
        // submenu item in the parent panel list
        let anchorBounds = getBounds(this.lastAnchorNode);
        let parentPanelBounds = getBounds(hostElement);
        let panelBounds = getBounds(this);
        let clientWidth = document.scrollingElement.clientWidth;
        resolve({
          anchorLeft: anchorBounds.left,
          anchorWidth: anchorBounds.width,
          anchorTop: anchorBounds.top,
          parentPanelTop: parentPanelBounds.top,
          panelWidth: panelBounds.width,
          clientWidth
        });
      }, 0));
    });
    let align = hostElement.getAttribute("align");

    // we use document.scrollingElement.clientWidth to exclude the width
    // of vertical scrollbars, because its inclusion can cause the submenu
    // to open to the wrong side and be overlapped by the scrollbar.
    if (align == "left" && anchorLeft + anchorWidth + panelWidth < clientWidth) {
      this.style.left = `${anchorWidth}px`;
      this.style.right = "";
    } else {
      this.style.right = `${anchorWidth}px`;
      this.style.left = "";
    }
    let topOffset = anchorTop - parentPanelTop - (parseFloat(window.getComputedStyle(this)?.paddingTop) || 0);
    this.style.top = `${topOffset}px`;
    this.removeAttribute("showing");
  }
  async onShow() {
    this.sendEvent("showing");
    if (this.lastAnchorNode?.hasSubmenu) {
      await this.setSubmenuAlign();
    } else {
      await this.setAlign();
    }

    // If the panel was hidden during async alignment, bail out.
    if (!this.open) {
      return;
    }

    // Call showPopover() after positioning is set up
    if (this.supportsPopover()) {
      try {
        this.showPopover();
      } catch (ex) {
        console.error("Failed to show popover:", ex);
      }
    }

    // Register hide listeners after the popover is shown, so that a second
    // panel-list opening doesn't have conflicting document-level event
    // handlers with a first panel-list that hasn't been auto-dismissed yet.
    this.addHideListeners();

    // Always reset this regardless of how the panel list is opened
    // so the first child will be focusable.
    this.focusWalker.currentNode = this;

    // Wait until the next paint for the alignment to be set and panel to be
    // visible.
    requestAnimationFrame(() => {
      if (this.wasOpenedByKeyboard) {
        // Focus the first focusable panel-item if opened by keyboard.
        this.focusWalker.currentNode = this;
        this.focusWalker.nextNode();
      }
      this.lastAnchorNode?.setAttribute("aria-expanded", "true");
      this.sendEvent("shown");
    });
  }
  onHide() {
    if (this.supportsPopover()) {
      try {
        this.hidePopover();
      } catch (ex) {
        // hidePopover may throw if the popover was already hidden or was never shown
      }
    }
    requestAnimationFrame(() => {
      this.sendEvent("hidden");
      this.lastAnchorNode?.setAttribute("aria-expanded", "false");
    });
    this.removeHideListeners();
  }
  sendEvent(name, detail) {
    this.dispatchEvent(new CustomEvent(name, {
      detail,
      bubbles: true,
      composed: true
    }));
  }
}
customElements.define("panel-list", PanelList);
class PanelItem extends HTMLElement {
  #initialized = false;
  #defaultSlot;
  #badge;
  static get observedAttributes() {
    return ["accesskey", "type", "disabled", "badge-type", "aria-haspopup"];
  }
  constructor() {
    super();
    this.attachShadow({
      mode: "open"
    });
    let style = document.createElement("link");
    style.rel = "stylesheet";
    style.href = toolkit_content_widgets_panel_list_panel_item_css__WEBPACK_IMPORTED_MODULE_0__;
    this.button = document.createElement("button");
    this.#setButtonAttributes();
    this.button.setAttribute("part", "button");
    // Use a XUL label element if possible to show the accesskey.
    this.label = document.createXULElement ? document.createXULElement("label") : document.createElement("span");
    this.label.setAttribute("part", "label");
    this.button.appendChild(this.label);
    this.#updateBadge();
    let supportLinkSlot = document.createElement("slot");
    supportLinkSlot.name = "support-link";
    this.#defaultSlot = document.createElement("slot");
    this.#defaultSlot.style.display = "none";
    this.shadowRoot.append(style, this.button, supportLinkSlot, this.#defaultSlot);
  }
  connectedCallback() {
    if (!this._l10nRootConnected && document.l10n) {
      document.l10n.connectRoot(this.shadowRoot);
      this._l10nRootConnected = true;
    }
    this.panel = this.getRootNode()?.host?.closest("panel-list") || this.closest("panel-list");
    if (!this.#initialized) {
      this.#initialized = true;
      // When click listeners are added to the panel-item it creates a node in
      // the a11y tree for this element. This breaks the association between the
      // menu and the button[role="menuitem"] in this shadow DOM and causes
      // announcement issues with screen readers. (bug 995064)
      this.setAttribute("role", "presentation");
      this.#setLabelContents();

      // When our content changes, move the text into the label. It doesn't work
      // with a <slot>, unfortunately.
      new MutationObserver(() => this.#setLabelContents()).observe(this, {
        characterData: true,
        childList: true,
        subtree: true
      });
      if (this.hasSubmenu) {
        this.panel.setAttribute("has-submenu", "");
        this.icon = document.createElement("div");
        this.icon.setAttribute("class", "submenu-icon");
        this.button.appendChild(this.icon);
        this.submenuSlot = document.createElement("slot");
        this.submenuSlot.name = "submenu";
        this.shadowRoot.append(this.submenuSlot);
        this.setSubmenuContents();
      }
    }
    this.button.addEventListener("mouseup", this);
    if (this.panel) {
      this.panel.addEventListener("hidden", this);
      this.panel.addEventListener("shown", this);
    }
    if (this.hasSubmenu) {
      this.addEventListener("mouseenter", this);
      this.addEventListener("mouseleave", this);
      this.addEventListener("keydown", this);
    }
  }
  disconnectedCallback() {
    if (this._l10nRootConnected) {
      document.l10n.disconnectRoot(this.shadowRoot);
      this._l10nRootConnected = false;
    }
    this.button.removeEventListener("mouseup", this);
    if (this.panel) {
      this.panel.removeEventListener("hidden", this);
      this.panel.removeEventListener("shown", this);
      this.panel = null;
    }
    if (this.hasSubmenu) {
      this.removeEventListener("mouseenter", this);
      this.removeEventListener("mouseleave", this);
      this.removeEventListener("keydown", this);
    }
  }
  get hasSubmenu() {
    return this.hasAttribute("submenu");
  }
  attributeChangedCallback(name, oldVal, newVal) {
    if (name === "accesskey") {
      // Bug 1037709 - Accesskey doesn't work in shadow DOM.
      // Ideally we'd have the accesskey set in shadow DOM, and on
      // attributeChangedCallback we'd just update the shadow DOM accesskey.

      // Skip this change event if we caused it.
      if (this._modifyingAccessKey) {
        this._modifyingAccessKey = false;
        return;
      }
      this.label.accessKey = newVal || "";

      // Bug 1588156 - Accesskey is not ignored for hidden non-input elements.
      // Since the accesskey won't be ignored, we need to remove it ourselves
      // when the panel is closed, and move it back when it opens.
      if (!this.panel || !this.panel.open) {
        // When the panel isn't open, just store the key for later.
        this._accessKey = newVal || null;
        this._modifyingAccessKey = true;
        this.accessKey = "";
      } else {
        this._accessKey = null;
      }
    } else if (name === "type" || name === "disabled" || name === "aria-haspopup") {
      this.#setButtonAttributes();
    } else if (name === "badge-type") {
      this.#updateBadge();
    }
  }
  #setButtonAttributes() {
    if (this.type == "checkbox") {
      this.button.setAttribute("role", "menuitemcheckbox");
      this.button.setAttribute("aria-checked", this.checked);
    } else {
      this.button.setAttribute("role", "menuitem");
      this.button.removeAttribute("aria-checked");
    }
    this.button.toggleAttribute("disabled", this.disabled);
    if (this.hasAttribute("aria-haspopup")) {
      this.button.setAttribute("aria-haspopup", this.getAttribute("aria-haspopup"));
    } else {
      this.button.removeAttribute("aria-haspopup");
    }
  }
  #updateBadge() {
    if (this.hasAttribute("badge-type")) {
      if (!this.#badge) {
        this.#badge = document.createElement("moz-badge");
        this.label.after(this.#badge);
      }
      this.#badge.setAttribute("type", this.getAttribute("badge-type"));
    } else if (this.#badge) {
      this.#badge.remove();
      this.#badge = null;
    }
  }
  #setLabelContents() {
    this.label.textContent = this.#defaultSlot.assignedNodes().map(node => node.textContent).join("");
  }
  setSubmenuContents() {
    this.submenuPanel = this.submenuSlot.assignedNodes()[0];
    if (this.submenuPanel) {
      this.shadowRoot.append(this.submenuPanel);
    }
  }
  get disabled() {
    return this.hasAttribute("disabled");
  }
  set disabled(val) {
    this.toggleAttribute("disabled", val);
  }
  get checked() {
    if (this.type !== "checkbox") {
      return false;
    }
    return this.hasAttribute("checked");
  }
  set checked(val) {
    if (this.type == "checkbox") {
      this.toggleAttribute("checked", val);
      this.button.setAttribute("aria-checked", !!val);
    }
  }
  get type() {
    return this.getAttribute("type") || "button";
  }
  set type(val) {
    this.setAttribute("type", val);
  }
  click() {
    this.button.click();
  }
  focus() {
    this.button.focus();
  }
  setArrowKeyRTL() {
    let arrowOpenKey = "ArrowRight";
    let arrowCloseKey = "ArrowLeft";
    if (this.submenuPanel.isDocumentRTL()) {
      arrowOpenKey = "ArrowLeft";
      arrowCloseKey = "ArrowRight";
    }
    return [arrowOpenKey, arrowCloseKey];
  }
  handleEvent(e) {
    // Bug 1588156 - Accesskey is not ignored for hidden non-input elements.
    // Since the accesskey won't be ignored, we need to remove it ourselves
    // when the panel is closed, and move it back when it opens.
    switch (e.type) {
      case "shown":
        if (this._accessKey) {
          this.accessKey = this._accessKey;
          this._accessKey = null;
        }
        break;
      case "hidden":
        if (this.accessKey) {
          this._accessKey = this.accessKey;
          this._modifyingAccessKey = true;
          this.accessKey = "";
        }
        break;
      case "mouseenter":
      case "mouseleave":
        this.submenuPanel.toggle(e);
        break;
      case "keydown":
        {
          let [arrowOpenKey, arrowCloseKey] = this.setArrowKeyRTL();
          if (e.key === arrowOpenKey) {
            this.submenuPanel.show(e, e.target);
            // Don't let the arrow key scroll the page, which would trigger the
            // panel's scroll-hide listener and immediately close the submenu.
            e.preventDefault();
            e.stopPropagation();
          }
          if (e.key === arrowCloseKey) {
            this.submenuPanel.hide(e, {
              force: true
            }, e.target);
            e.preventDefault();
            e.stopPropagation();
          }
          break;
        }
      case "mouseup":
        {
          let event = /** @type {MouseEvent} */e;
          if (
          // preventClickEvent is undefined outside of chrome contexts.
          !event.preventClickEvent || !this.panel?.clickOnMouseup || e.button != 0) {
            break;
          }

          // A click event would be fired on the nearest common ancestor of
          // the mousedown and mouseup elements. We want to retarget the
          // click to the panel-item where mouseup happened so we prevent
          // the native click and synthesize one on the panel-list.
          // This enables opening a panel-list and choosing an item with a
          // single click.

          event.preventClickEvent();
          this.button.dispatchEvent(new PointerEvent("click", {
            bubbles: true,
            composed: true,
            view: event.view,
            shiftKey: event.shiftKey,
            ctrlKey: event.ctrlKey,
            altKey: event.altKey,
            metaKey: event.metaKey,
            screenX: event.screenX,
            screenY: event.screenY,
            clientX: event.clientX,
            clientY: event.clientY,
            button: event.button
            // The inputSource of the click event will always be MOZ_SOURCE_UNKNOWN.
          }));
          break;
        }
    }
  }
}
customElements.define("panel-item", PanelItem);

/***/ }),

/***/ 39092:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebsiteChipContainer: () => (/* binding */ WebsiteChipContainer)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_website_chip_container_website_chip_container_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5136);
/* harmony import */ var browser_components_aiwindow_ui_components_smartwindow_overflow_row_smartwindow_overflow_row_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57822);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(616);
/* harmony import */ var chrome_browser_content_aiwindow_components_SmartwindowOverflowRow_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15768);
/* harmony import */ var chrome_browser_content_aiwindow_components_ai_website_chip_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6266);
/* harmony import */ var chrome_browser_content_aiwindow_components_ai_grouped_chip_container_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63022);
/* harmony import */ var chrome_global_content_elements_moz_button_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79240);
/* harmony import */ var chrome_browser_content_aiwindow_components_smartwindow_panel_list_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(55362);


/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */





// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import


/** @typedef {import("chrome://browser/content/urlbar/SmartbarInput.mjs").ContextWebsite} ContextWebsite */

/**
 * Container for rendering website chips
 */
class WebsiteChipContainer extends (0,chrome_browser_content_aiwindow_components_SmartwindowOverflowRow_mjs__WEBPACK_IMPORTED_MODULE_4__.SmartwindowOverflowRowMixin)(chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement) {
  static properties = {
    websites: {
      type: Array
    },
    chipType: {
      type: String
    },
    removable: {
      type: Boolean
    },
    shouldGroupChips: {
      type: Boolean
    },
    // true if we want 3 or more chips to display as ai-grouped-chip-container
    autoOverflow: {
      type: Boolean
    },
    visibleChipCount: {
      type: Number
    },
    chipSize: {
      type: String,
      attribute: "chip-size",
      reflect: true
    },
    isPanelOpen: {
      type: Boolean,
      state: true
    }
  };
  constructor() {
    super();
    /** @type {ContextWebsite[]} */
    this.websites = [];
    this.chipType = "context-chip";
    this.removable = false;
    this.shouldGroupChips = false;
    this.autoOverflow = false;
    this.visibleChipCount = null;
    this.chipSize = "default";
    this.isPanelOpen = false;
  }
  get overflowContainerSelector() {
    return ".chip-container-scroller";
  }
  get inlineItemCount() {
    return this.visibleChipCount;
  }
  get overflowItems() {
    return this.#isAutoOverflowing ? this.websites : [];
  }
  get #isGrouped() {
    return this.shouldGroupChips && this.websites.length > 2;
  }
  get #isAutoOverflowing() {
    return this.autoOverflow && !this.#isGrouped;
  }
  #panel() {
    return this.renderRoot.querySelector("smartwindow-panel-list");
  }
  #onToggleClick(event) {
    const panel = this.#panel();
    if (panel) {
      panel.anchor = event.currentTarget;
      panel.toggle(event);
    }
  }
  #onOverflowItemSelected(event) {
    const url = event.detail?.id;
    this.#panel()?.hide();
    if (!url) {
      return;
    }
    this.dispatchEvent(new CustomEvent("AIChatContent:OpenLink", {
      bubbles: true,
      composed: true,
      detail: {
        url,
        preferSwitchToTab: true
      }
    }));
  }
  #onRemoveWebsite(website, event) {
    event.stopPropagation();
    this.dispatchEvent(new CustomEvent("ai-website-chip:remove", {
      bubbles: true,
      composed: true,
      detail: {
        url: website.url,
        label: website.label
      }
    }));
  }
  #renderStackedChips(website) {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__.html)`<ai-website-chip
      .type=${this.chipType}
      .size=${this.chipSize}
      .label=${website.label}
      .href=${website.url}
      .iconSrc=${website.iconSrc ?? ""}
      .removable=${this.removable}
      @ai-website-chip:remove=${e => this.#onRemoveWebsite(website, e)}
    ></ai-website-chip>`;
  }
  #renderGroupedChips(chips) {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__.html)`<ai-grouped-chip-container
      .chips=${chips}
    ></ai-grouped-chip-container>`;
  }
  #renderChip(website) {
    return website.historyDeleted ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__.html)`<div class="chip-history-deleted">
          <img
            class="chip-history-deleted-icon"
            src="chrome://global/skin/icons/defaultFavicon.svg"
            alt=""
          />
          <span data-l10n-id="aiwindow-website-chip-history-deleted"></span>
        </div>` : this.#renderStackedChips(website);
  }
  #renderSmartwindowOverflowRow() {
    const visibleCount = Math.min(this.visibleCount, this.websites.length);
    const overflow = this.websites.slice(visibleCount);
    const hasOverflow = !!overflow.length;
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__.html)`<div
      class="chip-container-scroller smartwindow-overflow-row"
      role="list"
    >
      ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__.repeat)(this.websites, website => website, (website, index) => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__.html)`<span role="listitem" ?data-overflow=${index >= visibleCount}
            >${this.#renderChip(website)}</span
          >`)}
      <moz-button
        class="overflow-more"
        type="ghost"
        ?data-overflow=${!hasOverflow}
        .ariaHasPopup=${"menu"}
        .ariaExpanded=${String(this.isPanelOpen)}
        data-l10n-id="smartwindow-assistant-citations-more-label"
        data-l10n-args=${JSON.stringify({
      count: overflow.length
    })}
        @click=${this.#onToggleClick}
      ></moz-button>
      ${hasOverflow ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__.html)`<smartwindow-panel-list
            .groups=${[{
      items: overflow.map(website => ({
        id: website.url,
        label: website.label,
        icon: website.iconSrc
      }))
    }]}
            @shown=${() => this.isPanelOpen = true}
            @hidden=${() => this.isPanelOpen = false}
            @item-selected=${this.#onOverflowItemSelected}
          ></smartwindow-panel-list>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__.nothing}
    </div>`;
  }
  #renderScrollerRow() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__.html)`<div class="chip-container-scroller" role="list">
      ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__.repeat)(this.websites, website => website, website => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__.html)`<span role="listitem">${this.#renderChip(website)}</span>`)}
    </div>`;
  }
  #renderChips() {
    if (this.#isGrouped) {
      return this.#renderGroupedChips(this.websites);
    }
    return this.#isAutoOverflowing ? this.#renderSmartwindowOverflowRow() : this.#renderScrollerRow();
  }
  render() {
    if (!this.websites.length) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__.nothing;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_smartwindow_overflow_row_smartwindow_overflow_row_css__WEBPACK_IMPORTED_MODULE_1__}"
      />
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_website_chip_container_website_chip_container_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <div class="chip-container">${this.#renderChips()}</div>
    `;
  }
}
customElements.define("website-chip-container", WebsiteChipContainer);

/***/ }),

/***/ 39894:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ai-website-chip.7967f398a94dae999098.css";

/***/ }),

/***/ 45042:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "smartwindow-panel-list.7f35deb841b05b4eb70c.css";

/***/ }),

/***/ 52253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutoWidthOverflow: () => (/* binding */ AutoWidthOverflow),
/* harmony export */   CountBasedGrouping: () => (/* binding */ CountBasedGrouping),
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   NoOverflow: () => (/* binding */ NoOverflow),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var chrome_browser_content_aiwindow_components_website_chip_container_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39092);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/AI Window/Website Chip Container",
  component: "website-chip-container",
  parameters: {
    fluent: `
smartwindow-assistant-citations-more-label = +{ $count } more
    `
  },
  // Constrained container to simulate a chat bubble.
  decorators: [(story, context) => context.parameters.frame === false ? story() : (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
            <div
              style="
                display: inline-block;
                ${context.parameters.frameWidth ? `width: ${context.parameters.frameWidth};` : ""}
                padding: 16px;
                box-sizing: border-box;
                border: 1px dashed #ccc;
              "
            >
              ${story()}
            </div>
          `]
});
const makeWebsites = count => Array.from({
  length: count
}, (_, index) => ({
  url: `https://example.com/${index + 1}`,
  label: `Example Site ${index + 1}`,
  iconSrc: "chrome://branding/content/icon16.png"
}));
const Default = () => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <website-chip-container
    .chipType=${"context-chip"}
    .websites=${makeWebsites(3)}
    .removable=${true}
  ></website-chip-container>
`;
const AutoWidthOverflow = () => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <div
    style="
      resize: horizontal;
      overflow: auto;
      inline-size: 500px;
      min-inline-size: 160px;
      max-inline-size: 100%;
      padding: 16px;
      box-sizing: border-box;
      border: 1px dashed #ccc;
    "
  >
    <website-chip-container
      .websites=${makeWebsites(6)}
      .autoOverflow=${true}
    ></website-chip-container>
  </div>
`;
// This story has its own decorator frame
AutoWidthOverflow.parameters = {
  frame: false
};
const NoOverflow = () => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <website-chip-container
    .websites=${makeWebsites(2)}
    .autoOverflow=${true}
  ></website-chip-container>
`;
const CountBasedGrouping = () => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <website-chip-container
    .websites=${makeWebsites(6)}
    .shouldGroupChips=${true}
  ></website-chip-container>
`;

/***/ }),

/***/ 55362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SmartwindowPanelList: () => (/* binding */ SmartwindowPanelList)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_smartwindow_panel_list_smartwindow_panel_list_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45042);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);
/* harmony import */ var chrome_global_content_elements_panel_list_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37752);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



// eslint-disable-next-line import/no-unassigned-import


/**
 * A generic panel list component for displaying grouped items in a popup.
 *
 * This component is agnostic to the data it displays - consumers control
 * all logic including filtering, truncation, and special item handling.
 *
 * @typedef {{id: string, label: string, icon?: string, l10nId?: string, description?: string, descriptionL10nId?: string}} ListItem
 * @typedef {{items: ListItem[], headerL10nId?: string, header?: string}} ItemGroup
 * @property {ItemGroup[]} groups - Grouped list items to display
 * @property {string} placeholderL10nId - Fluent ID for empty state message
 * @property {object} anchor - Positioning anchor {left, top, width, height}
 */
class SmartwindowPanelList extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static shadowRootOptions = {
    ...chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement.shadowRootOptions,
    delegatesFocus: true
  };
  static properties = {
    groups: {
      type: Array
    },
    anchor: {
      type: Object
    },
    placeholderL10nId: {
      type: String
    },
    alwaysOpen: {
      type: Boolean
    },
    sidebarMode: {
      type: Boolean,
      reflect: true
    },
    selectedItemId: {
      type: String
    }
  };
  #panelList = null;
  #anchorElement = null;
  constructor() {
    super();
    this.groups = [];
    this.anchor = null;
    this.placeholderL10nId = "";
    this.alwaysOpen = false;
    this.sidebarMode = false;
    this.selectedItemId = null;
  }
  willUpdate(changedProperties) {
    // Reset the active selection to the first item
    // so there is always a highlighted default.
    if (changedProperties.has("groups")) {
      const [first] = this.#selectableItems();
      const firstId = first?.id ?? null;
      if (this.selectedItemId !== firstId) {
        this.selectedItemId = firstId;
      }
    }
  }
  #selectableItems() {
    return this.groups.flatMap(group => group.items ?? []);
  }

  /**
   * Moves the active selection
   *
   * @param {number} delta
   */
  moveSelection(delta) {
    const items = this.#selectableItems();
    if (!items.length) {
      return;
    }
    const current = items.findIndex(item => item.id === this.selectedItemId);
    const start = current === -1 ? 0 : current;
    const next = (start + delta + items.length) % items.length;
    this.selectedItemId = items[next].id;
  }

  /**
   * @returns {object|null} The currently selected item
   */
  getSelectedItem() {
    return this.#selectableItems().find(item => item.id === this.selectedItemId) ?? null;
  }
  get #hasCustomItems() {
    const itemsHost = this.#panelList ?? this;
    return [...itemsHost.children].some(element => element.localName !== "panel-item" && !element.classList.contains("panel-item-container"));
  }
  get #isCommandMode() {
    return this.getAttribute("data-triggered-by") === "inline-command";
  }
  firstUpdated() {
    this.#panelList = this.shadowRoot.querySelector("panel-list");
    this.#panelList.addEventListener("shown", () => {
      // The command palette sizes/positions to the smartbar and
      // should recompute as soon as it opens
      if (this.#isCommandMode) {
        this.#reposition();
      } else if (this.sidebarMode) {
        this.#clampToViewport();
      }
    });
    // Consumers may pass their own items as child elements.
    this.#maybeMoveChildrenIntoPanel();
    if (this.alwaysOpen) {
      this.show();
    }
  }
  #maybeMoveChildrenIntoPanel() {
    const custom = Array.from(this.children);
    if (!custom.length) {
      return;
    }
    this.#panelList.append(...custom);
  }
  #clampToViewport() {
    const panelEl = this.#panelList;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const panelRect = panelEl.getBoundingClientRect();
    const margin = parseFloat(getComputedStyle(panelEl).marginInlineStart) || 0;
    const effectiveWidth = Math.min(panelRect.width, viewportWidth - 2 * margin);
    const effectiveHeight = Math.min(panelRect.height, viewportHeight);
    let x = parseFloat(panelEl.style.left) || 0;
    let y = parseFloat(panelEl.style.top) || 0;
    x = Math.max(0, Math.min(x, viewportWidth - effectiveWidth - 2 * margin));
    y = Math.max(0, Math.min(y, viewportHeight - effectiveHeight));
    panelEl.style.left = `${x}px`;
    panelEl.style.top = `${y}px`;
  }
  #reposition() {
    requestAnimationFrame(() => {
      const anchorElement = this.#anchorElement;
      if (!anchorElement || !this.#panelList?.open) {
        return;
      }
      const panelEl = this.#panelList;
      const anchorRect = anchorElement.getBoundingClientRect();
      const panelHeight = panelEl.scrollHeight;
      const valign = panelEl.getAttribute("valign");
      const VIEWPORT_PANEL_MIN_MARGIN = 10;
      let topOffset;
      if (valign === "top") {
        topOffset = Math.max(anchorRect.top - panelHeight, VIEWPORT_PANEL_MIN_MARGIN);
      } else {
        topOffset = anchorRect.bottom;
      }
      // Command mode spans the full width of its anchor (the smartbar) and
      // left-aligns to it
      if (this.#isCommandMode) {
        panelEl.style.width = `${anchorRect.width}px`;
        panelEl.style.left = `${anchorRect.left + window.scrollX}px`;
      } else {
        panelEl.style.width = "";
      }
      panelEl.style.top = `${topOffset + window.scrollY}px`;
      this.#clampToViewport();
    });
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("anchor")) {
      // If anchor is an element use it directly,
      // otherwise we can use the positioned span.
      this.#anchorElement = this.anchor instanceof Element ? this.anchor : this.renderRoot.querySelector(".smartwindow-panel-list-anchor");
    }
    if (this.#panelList?.open && (changedProperties.has("anchor") || changedProperties.has("groups"))) {
      this.#reposition();
    }
  }
  async show(triggeringEvent = null) {
    await this.updateComplete;
    this.#panelList.show(triggeringEvent, this.#anchorElement);
  }
  async hide() {
    await this.updateComplete;
    this.#panelList.hide();
  }
  async toggle(triggeringEvent = null) {
    await this.updateComplete;
    this.#panelList.toggle(triggeringEvent, this.#anchorElement);
  }
  handlePanelClick(e) {
    const panelItem = e.target.closest("panel-item") ?? e.target.closest(".panel-item-container")?.querySelector("panel-item");
    if (panelItem && !panelItem.classList.contains("panel-section-header")) {
      const event = new CustomEvent("item-selected", {
        detail: {
          id: panelItem.itemId,
          label: panelItem.itemLabel || panelItem.textContent.trim(),
          icon: panelItem.itemIcon
        },
        bubbles: true,
        composed: true,
        cancelable: true
      });
      this.dispatchEvent(event);
    }
  }
  handleKeyDown(e) {
    this.dispatchEvent(new CustomEvent("panel-keydown", {
      detail: {
        originalEvent: e
      },
      bubbles: true,
      composed: true
    }));
  }

  // -------------------------
  // Render helpers
  // -------------------------

  #isEmpty() {
    return !this.groups.length || this.groups.every(g => !g.items?.length);
  }
  #renderAnchor() {
    if (!this.anchor || this.anchor instanceof Element) {
      return null;
    }
    const rect = this.getBoundingClientRect();
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span
      class="smartwindow-panel-list-anchor"
      style=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.styleMap)({
      "--anchor-left": `${this.anchor.left - rect.left}px`,
      "--anchor-top": `${this.anchor.top - rect.top}px`,
      "--anchor-width": `${this.anchor.width}px`,
      "--anchor-height": `${this.anchor.height}px`
    })}
    ></span>`;
  }
  #renderEmptyState() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<panel-item
      disabled
      role="presentation"
      class="panel-section-header"
      data-l10n-id=${this.placeholderL10nId}
    ></panel-item>`;
  }
  #renderGroupHeader(headerL10nId) {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<panel-item
      disabled
      role="presentation"
      class="panel-section-header"
      data-l10n-id=${headerL10nId}
    ></panel-item>`;
  }
  #renderPlainHeader(header) {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<panel-item
      disabled
      role="presentation"
      class="panel-section-header"
    >
      ${header}
    </panel-item>`;
  }
  #computeItemStyles(item) {
    const styles = {};
    if (item.icon) {
      styles["--panel-item-icon-url"] = `url(${item.icon})`;
    }
    return styles;
  }
  #renderItem(item, isSelected = false) {
    const hasDescription = !!item.description || !!item.descriptionL10nId;
    const panelItem = (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<panel-item
      .itemId=${item.id}
      .itemLabel=${item.label ?? ""}
      icon=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(!hasDescription && item.icon ? "true" : undefined)}
      class=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(isSelected && !hasDescription ? "selected" : undefined)}
      data-l10n-id=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(item.l10nId)}
      style=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.styleMap)(hasDescription ? {} : this.#computeItemStyles(item))}
    >
      ${item.l10nId ? "" : item.label}
    </panel-item>`;
    if (!hasDescription) {
      return panelItem;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div
      class=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.classMap)({
      "panel-item-container": true,
      selected: isSelected
    })}
    >
      ${item.icon ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span class="panel-item-icon" aria-hidden="true">
            <img class="panel-item-icon-image" src=${item.icon} alt="" />
          </span>` : ""}
      <div class="panel-item-text">
        ${panelItem}
        <div
          class="panel-item-description"
          data-l10n-id=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(item.descriptionL10nId)}
        >
          ${item.descriptionL10nId ? "" : item.description}
        </div>
      </div>
    </div>`;
  }
  #renderGroup(group) {
    if (!group.items?.length) {
      return null;
    }
    let header = null;
    if (group.headerL10nId) {
      header = this.#renderGroupHeader(group.headerL10nId);
    } else if (group.header) {
      header = this.#renderPlainHeader(group.header);
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      ${header}
      ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.repeat)(group.items, item => item.id, item => this.#renderItem(item, this.#isCommandMode && item.id === this.selectedItemId))}
    `;
  }
  #renderGroups() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.repeat)(this.groups, (_group, index) => index, group => this.#renderGroup(group));
  }
  #renderContent() {
    // Custom items were moved into `panel-list`.
    if (this.#hasCustomItems) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing;
    }
    return this.#isEmpty() ? this.#renderEmptyState() : this.#renderGroups();
  }
  #renderCommandFooter() {
    if (!this.#isCommandMode || this.#hasCustomItems || this.#isEmpty()) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<panel-item
      disabled
      role="note"
      class="panel-section-header panel-command-footer"
      data-l10n-id="smartbar-command-coming-soon"
    ></panel-item>`;
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_smartwindow_panel_list_smartwindow_panel_list_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      ${this.#renderAnchor()}
      <panel-list
        @click=${this.handlePanelClick}
        @keydown=${this.handleKeyDown}
      >
        ${this.#renderContent()} ${this.#renderCommandFooter()}
      </panel-list>
    `;
  }
}
customElements.define("smartwindow-panel-list", SmartwindowPanelList);

/***/ }),

/***/ 57822:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "smartwindow-overflow-row.7a554b3715d4ee8975b6.css";

/***/ }),

/***/ 63022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AIGroupedChipContainer: () => (/* binding */ AIGroupedChipContainer)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_ai_grouped_chip_container_ai_grouped_chip_container_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15314);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82242);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(616);
/* harmony import */ var chrome_browser_content_aiwindow_components_smartwindow_panel_list_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55362);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */




// eslint-disable-next-line import/no-unassigned-import


/**
 * Container for rendering 3 or more grouped chips inside the chat content
 */
class AIGroupedChipContainer extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.MozLitElement {
  static properties = {
    chips: {
      type: Array
    },
    isPanelOpen: {
      type: Boolean,
      state: true
    }
  };
  constructor() {
    super();
    this.chips = [];
    this.isPanelOpen = false;
  }

  // Keep this mousedown from reaching panel-list's document-level light-dismiss
  // listener, so the panel stays open until the click handler runs toggle().
  // Otherwise mousedown closes it and the click reopens it.
  #onTriggerMousedown(event) {
    event.stopPropagation();
  }
  #toggleGroupedPanel(event) {
    const panel = this.shadowRoot.querySelector("smartwindow-panel-list");
    panel.anchor = event.currentTarget;
    panel.toggle();
  }
  #closeGroupedPanel() {
    this.shadowRoot.querySelector("smartwindow-panel-list")?.hide();
  }
  #onItemSelected(event) {
    const url = event.detail?.id;
    if (url) {
      this.dispatchEvent(new CustomEvent("AIChatContent:OpenLink", {
        bubbles: true,
        composed: true,
        detail: {
          url,
          preferSwitchToTab: true
        }
      }));
    }
    this.#closeGroupedPanel();
  }
  render() {
    const chipsGroups = [{
      items: this.chips.map(w => ({
        id: w.url,
        label: w.label,
        icon: w.iconSrc
      }))
    }];
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_ai_grouped_chip_container_ai_grouped_chip_container_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <button
        class="grouped-chips"
        id="grouped-chips-trigger"
        aria-haspopup="menu"
        aria-expanded=${this.isPanelOpen}
        ?data-is-smartwindow-panel-open=${this.isPanelOpen}
        @mousedown=${e => this.#onTriggerMousedown(e)}
        @click=${e => this.#toggleGroupedPanel(e)}
      >
        <span class="grouped-chips__favicon-group">
          ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.repeat)(this.chips, (chip, index) => `${chip.url}-${index}`, chip => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<img
                class="grouped-chips__favicon"
                src=${chip.iconSrc || "chrome://global/skin/icons/defaultFavicon.svg"}
                alt=""
                @error=${e => {
      e.target.src = "chrome://global/skin/icons/defaultFavicon.svg";
    }}
              />`)}
        </span>
        <span
          class="grouped-chips__label"
          data-l10n-id="smart-window-context-chips-tag-count"
          data-l10n-args=${JSON.stringify({
      tags: this.chips.length
    })}
        ></span>
        <img
          class="grouped-chips__arrow-icon"
          src="chrome://global/skin/icons/arrow-down-12.svg"
          alt=""
        />
      </button>
      <smartwindow-panel-list
        .groups=${chipsGroups}
        @shown=${() => this.isPanelOpen = true}
        @hidden=${() => this.isPanelOpen = false}
        @item-selected=${e => this.#onItemSelected(e)}
      ></smartwindow-panel-list>
    `;
  }
}
customElements.define("ai-grouped-chip-container", AIGroupedChipContainer);

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

/***/ })

}]);
//# sourceMappingURL=components-website-chip-container-website-chip-container-stories.82133195.iframe.bundle.js.map