"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[3110,6284,9417],{

/***/ 15515:
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ 26284:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chrome_global_content_elements_styles_mixin_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49417);
/* harmony import */ var toolkit_content_widgets_moz_label_moz_label_css_css_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80322);
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
class MozTextLabel extends (0,chrome_global_content_elements_styles_mixin_mjs__WEBPACK_IMPORTED_MODULE_0__.StylesMixin)(HTMLLabelElement, toolkit_content_widgets_moz_label_moz_label_css_css_module__WEBPACK_IMPORTED_MODULE_1__["default"]) {
  #insertSeparator = false;
  #alwaysAppendAccessKey = false;
  #lastFormattedAccessKey = null;
  #lastFormattedText = null;
  #observer = null;
  #centerCropEnabled = false;

  // Default to underlining accesskeys for Windows and Linux.
  static #underlineAccesskey = !navigator.platform.includes("Mac");
  static get observedAttributes() {
    return ["accesskey", "shownaccesskey", "enable-center-crop"];
  }
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
    super.connectedCallback();
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
  set textContent(val) {
    if (this.#centerCropEnabled) {
      this.setAttribute("value", val);
      return;
    }
    super.textContent = val;
    this.#lastFormattedAccessKey = null;
    this.formatAccessKey();
  }
  get textContent() {
    if (this.#centerCropEnabled) {
      return this.getAttribute("value");
    }
    return super.textContent;
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (oldValue == newValue) {
      return;
    }
    if (attrName == "enable-center-crop") {
      if (newValue === null) {
        this.removeAttribute("crop");
        this.#centerCropEnabled = false;
      } else {
        if (!this.hasAttribute("value")) {
          this.setAttribute("value", this.textContent || "");
        }
        this.setAttribute("crop", "center");
        this.#centerCropEnabled = true;
      }
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

/***/ 29065:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 36133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccessKey: () => (/* binding */ AccessKey),
/* harmony export */   AccessKeyNotInLabel: () => (/* binding */ AccessKeyNotInLabel),
/* harmony export */   DisabledCheckbox: () => (/* binding */ DisabledCheckbox),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var _moz_label_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26284);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



const fluentStrings = ["moz-label-default-label", "moz-label-label-with-colon", "moz-label-label-disabled"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "UI Widgets/Label",
  component: "moz-label",
  argTypes: {
    inputType: {
      options: ["checkbox", "radio"],
      control: {
        type: "select"
      }
    },
    l10nId: {
      options: fluentStrings,
      control: {
        type: "select"
      }
    },
    textContent: {
      table: {
        disable: true
      }
    },
    "data-l10n-id": {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    status: {
      type: "stable",
      links: [{
        title: "Learn more",
        href: "?path=/docs/ui-widgets-label-readme--page#component-status"
      }]
    },
    fluent: `
moz-label-default-label = I love cheese 🧀
moz-label-label-with-colon = I love cheese 🧀:
moz-label-label-disabled = I love cheese 🧀
    `
  }
});
const Template = ({
  accesskey,
  inputType,
  disabled,
  l10nId
}) => (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <style>
    div {
      display: flex;
      align-items: center;
    }

    label {
      margin-inline-end: 8px;
    }
  </style>
  <div>
    <label
      is="moz-label"
      accesskey=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(accesskey)}
      data-l10n-id=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(l10nId)}
      for="cheese"
    >
    </label>
    <input
      type=${inputType}
      name="cheese"
      id="cheese"
      ?disabled=${disabled}
      checked
    />
  </div>
`;
const AccessKey = Template.bind({});
AccessKey.args = {
  accesskey: "c",
  inputType: "checkbox",
  disabled: false,
  l10nId: "moz-label-default-label"
};
const AccessKeyNotInLabel = Template.bind({});
AccessKeyNotInLabel.args = {
  ...AccessKey.args,
  accesskey: "x",
  l10nId: "moz-label-label-with-colon"
};
const DisabledCheckbox = Template.bind({});
DisabledCheckbox.args = {
  ...AccessKey.args,
  disabled: true,
  l10nId: "moz-label-label-disabled"
};

/***/ }),

/***/ 49417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StylesMixin: () => (/* binding */ StylesMixin)
/* harmony export */ });
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * Extend a custom element with automatic support for including its styles in
 * the host Document or ShadowRoot.
 *
 * @template {new (...args: any[]) => HTMLElement & {
 *   connectedCallback?(): void;
 * }} T
 * @param {T} klass
 * @param {...CSSStyleSheet} styles
 */
const StylesMixin = (klass, ...styles) => class StylesMixinKlass extends klass {
  static styles = styles;
  /** @type {WeakSet<Document | ShadowRoot>} */
  static #styledRoots = new WeakSet();

  /**
   * Adopt our styles into the root if we haven't seen this root yet.
   *
   * @param {Document | ShadowRoot} root
   */
  static #setStylesOnRoot(root) {
    if (!this.#styledRoots.has(root)) {
      this.#styledRoots.add(root);
      root.adoptedStyleSheets.push(...styles);
    }
  }
  #setStyles() {
    let rootNode = this.getRootNode();
    if (rootNode instanceof Document || rootNode instanceof ShadowRoot) {
      StylesMixinKlass.#setStylesOnRoot(rootNode);
    }
  }
  connectedCallback() {
    super.connectedCallback?.();
    this.#setStyles();
  }
};

/***/ }),

/***/ 80322:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _browser_components_storybook_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15515);
/* harmony import */ var _browser_components_storybook_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_browser_components_storybook_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _browser_components_storybook_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29065);
/* harmony import */ var _browser_components_storybook_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_browser_components_storybook_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _browser_components_storybook_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_browser_components_storybook_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

label span.accesskey {
  text-decoration: underline;
  text-decoration-skip-ink: none;
}

label[enable-center-crop] {
  text-wrap: nowrap;
}
`, "",{"version":3,"sources":["webpack://./../../../toolkit/content/widgets/moz-label/moz-label.css"],"names":[],"mappings":"AAAA;;6DAE6D;;AAE7D;EACE,0BAA0B;EAC1B,8BAA8B;AAChC;;AAEA;EACE,iBAAiB;AACnB","sourcesContent":["/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\nlabel span.accesskey {\n  text-decoration: underline;\n  text-decoration-skip-ink: none;\n}\n\nlabel[enable-center-crop] {\n  text-wrap: nowrap;\n}\n"],"sourceRoot":""}]);
// Exports
var ___CSS_LOADER_STYLE_SHEET___ = new CSSStyleSheet();
___CSS_LOADER_STYLE_SHEET___.replaceSync(___CSS_LOADER_EXPORT___.toString());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_STYLE_SHEET___);


/***/ })

}]);
//# sourceMappingURL=moz-label-moz-label-stories.dd29824c.iframe.bundle.js.map