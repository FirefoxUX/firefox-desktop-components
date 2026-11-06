"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[5944,6284,7912,7993,9240,9417],{

/***/ 359:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ai-window-shared.f6fa6cbf1038c12a8f3e.css";

/***/ }),

/***/ 6704:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ai-clarifying-question.1518e4d2e8c8eb3fa539.css";

/***/ }),

/***/ 8665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   LongText: () => (/* binding */ LongText),
/* harmony export */   NoRecommendation: () => (/* binding */ NoRecommendation),
/* harmony export */   SecondQuestion: () => (/* binding */ SecondQuestion),
/* harmony export */   ShortCharacterLimit: () => (/* binding */ ShortCharacterLimit),
/* harmony export */   SingleQuestion: () => (/* binding */ SingleQuestion),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_content_ai_window_shared_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(359);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var chrome_browser_content_aiwindow_components_ai_clarifying_question_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48000);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



const QUESTIONS = [{
  id: "coverage",
  question: "What should the report cover?",
  options: [{
    id: "kit",
    label: "The whole cold-night kit",
    description: "The cold nights",
    recommended: true
  }, {
    id: "jacket",
    label: "Just the jacket",
    description: "The page you are on, on its own"
  }, {
    id: "sleep",
    label: "Sleeping bag and pad",
    description: "The sleep system on its own"
  }]
}, {
  id: "owned",
  question: "Is there anything you already own that you'd like to keep using?",
  options: [{
    id: "none",
    label: "Nothing yet, start from scratch",
    description: "I'll price a full kit",
    recommended: true
  }, {
    id: "bag",
    label: "I have a sleeping bag",
    description: "I'll work around it"
  }, {
    id: "stove",
    label: "I have a stove",
    description: "Hot food is already covered"
  }]
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/AI Window/Clarifying question",
  component: "ai-clarifying-question",
  argTypes: {
    questions: {
      control: "object"
    },
    currentIndex: {
      control: {
        type: "number",
        min: 0
      }
    },
    maxCustomAnswerLength: {
      control: "number"
    }
  },
  parameters: {
    actions: {
      handles: ["ai-clarifying-question:answer", "ai-clarifying-question:close"]
    },
    fluent: `
ai-clarifying-question-progress = Question { $current } of { $total }
ai-clarifying-question-recommended = Recommended
ai-clarifying-question-custom-answer =
    .placeholder = Something else
    .aria-label = Something else
ai-clarifying-question-skip =
    .label = Skip
ai-clarifying-question-send =
    .label = Send
ai-clarifying-question-close =
    .title = Close questions
    `
  }
});
const Template = ({
  questions,
  currentIndex,
  maxCustomAnswerLength
}) => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
  <link
    rel="stylesheet"
    href="${browser_components_aiwindow_ui_content_ai_window_shared_css__WEBPACK_IMPORTED_MODULE_0__}"
  />
  <ai-clarifying-question
    .questions=${questions}
    .currentIndex=${currentIndex}
    .maxCustomAnswerLength=${maxCustomAnswerLength}
  ></ai-clarifying-question>
`;
const Default = Template.bind({});
Default.args = {
  questions: QUESTIONS,
  currentIndex: 0,
  maxCustomAnswerLength: 500
};
const SecondQuestion = Template.bind({});
SecondQuestion.args = {
  ...Default.args,
  currentIndex: 1
};
const SingleQuestion = Template.bind({});
SingleQuestion.args = {
  ...Default.args,
  questions: [QUESTIONS[0]]
};
const NoRecommendation = Template.bind({});
NoRecommendation.args = {
  ...Default.args,
  questions: [{
    ...QUESTIONS[0],
    options: QUESTIONS[0].options.map(option => ({
      ...option,
      recommended: false
    }))
  }]
};
const LongText = Template.bind({});
LongText.args = {
  ...Default.args,
  questions: [{
    id: "long",
    question: "Which parts of the trip should the report focus on, given the forecast lows and how far you plan to hike in and out each day?",
    options: [{
      id: "a",
      label: "Everything you need to stay warm overnight, from the sleeping system to hot food without a campfire",
      description: "Covers the bag, pad, layers and a stove, priced as a full kit",
      recommended: true
    }, {
      id: "b",
      label: "Only the clothing layers",
      description: "Jacket, base layers and accessories"
    }]
  }]
};
const ShortCharacterLimit = Template.bind({});
ShortCharacterLimit.args = {
  ...Default.args,
  maxCustomAnswerLength: 20
};

/***/ }),

/***/ 9538:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-input-text.19a26c0cb2cf504d67a9.css";

/***/ }),

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

/***/ 27912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MozTextarea: () => (/* binding */ MozTextarea)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_textarea_moz_textarea_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58210);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_elements_moz_input_text_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65944);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/// <reference path="./moz-textarea.tagmap.d.ts" />




/**
 * A textarea custom element.
 *
 * @tagname moz-textarea
 * @property {string} label - The text of the label element.
 * @property {string} name - The name of the textarea control.
 * @property {string} value - The value of the textarea control.
 * @property {boolean} disabled - The disabled state of the textarea control.
 * @property {boolean} readonly - The readonly state of the textarea control.
 * @property {boolean} required - The required state of the textarea control
 * @property {string} description - The text for the description element that helps describe the textarea control.
 * @property {string} supportPage - Name of the SUMO support page to link to.
 * @property {string} placeholder - Text to display when the textarea has no value.
 * @property {number} maxLength - The maximum number of characters the textarea accepts.
 * @property {string} iconSrc - The src for an optional icon.
 * @property {string} ariaLabel - The aria-label text when there is no visible label.
 * @property {string} ariaDescription - The aria-description text when there is no visible description.
 * @property {string} title - The title attribute, mapped onto the inner textarea.
 * @property {number} rows - The number of visible text rows.
 */
class MozTextarea extends chrome_global_content_elements_moz_input_text_mjs__WEBPACK_IMPORTED_MODULE_2__.MozInputText {
  static properties = {
    ...chrome_global_content_elements_moz_input_text_mjs__WEBPACK_IMPORTED_MODULE_2__.MozInputText.properties,
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
        ?required=${this.required}
        accesskey=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.accessKey)}
        placeholder=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.placeholder)}
        maxlength=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.maxLength)}
        aria-label=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.ariaLabel ?? undefined)}
        aria-describedby="description"
        aria-description=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.hasDescription ? undefined : this.ariaDescription)}
        title=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.title)}
        @input=${this.handleInput}
        @change=${this.redispatchEvent}
      ></textarea>
    `;
  }
}
customElements.define("moz-textarea", MozTextarea);

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

/***/ 30082:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-button.298a931ca5fde5f08ef2.css";

/***/ }),

/***/ 48000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AIClarifyingQuestion: () => (/* binding */ AIClarifyingQuestion)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_ai_clarifying_question_ai_clarifying_question_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6704);
/* harmony import */ var toolkit_themes_shared_design_system_src_text_and_typography_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44311);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82242);
/* harmony import */ var chrome_global_content_elements_moz_button_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79240);
/* harmony import */ var chrome_global_content_elements_moz_textarea_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27912);


/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



// eslint-disable-next-line import-x/no-unassigned-import

// eslint-disable-next-line import-x/no-unassigned-import

const ANSWER_EVENT = "ai-clarifying-question:answer";
const CLOSE_EVENT = "ai-clarifying-question:close";
const DEFAULT_MAX_CUSTOM_ANSWER_LENGTH = 500;

/**
 * @typedef {object} ClarifyingQuestionOption
 * @property {string} id - Identifier reported back in the answer event.
 * @property {string} label - Main text of the option.
 * @property {string} [description] - Secondary text under the label.
 * @property {boolean} [recommended] - Shows the "Recommended" badge and highlight.
 */

/**
 * @typedef {object} ClarifyingQuestion
 * @property {string} id - Identifier reported back in the answer event.
 * @property {string} question - The question text.
 * @property {ClarifyingQuestionOption[]} options - The listed answers.
 */

/**
 * Shows one clarifying question from an AI flow, with numbered options, a
 * free-text "Something else" answer and Skip. The component doesn't track
 * progress through the questions: the owner passes `questions` and
 * `currentIndex`, listens for the events below and moves to the next question.
 *
 * Events (bubbling, composed):
 *   - "ai-clarifying-question:answer"
 *       detail: { questionId, questionIndex, optionId, text }
 *       A listed option sets optionId and text to its label. A custom answer
 *       sets optionId to null and text to what was typed. Skip sets optionId
 *       to null and text to "".
 *   - "ai-clarifying-question:close"
 *       detail: { questionId, questionIndex }
 *
 * @property {ClarifyingQuestion[]} questions - All questions in the flow.
 * @property {number} currentIndex - Index of the question to show.
 * @property {number} maxCustomAnswerLength - Character limit for the custom answer.
 */
class AIClarifyingQuestion extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.MozLitElement {
  static properties = {
    questions: {
      type: Array
    },
    currentIndex: {
      type: Number
    },
    maxCustomAnswerLength: {
      type: Number
    },
    customAnswer: {
      type: String,
      state: true
    }
  };
  static queries = {
    customAnswerInput: "moz-textarea"
  };
  constructor() {
    super();
    this.questions = [];
    this.currentIndex = 0;
    this.maxCustomAnswerLength = DEFAULT_MAX_CUSTOM_ANSWER_LENGTH;
    this.customAnswer = "";
  }
  #shownQuestionKey = null;
  willUpdate() {
    const questionKey = `${this.currentIndex}:${this.currentQuestion?.id}`;
    if (questionKey != this.#shownQuestionKey) {
      this.#shownQuestionKey = questionKey;
      this.customAnswer = "";
    }
  }
  get currentQuestion() {
    return this.questions?.[this.currentIndex] ?? null;
  }
  get #trimmedCustomAnswer() {
    return this.customAnswer.trim();
  }
  #dispatchAnswer(optionId, text) {
    this.dispatchEvent(new CustomEvent(ANSWER_EVENT, {
      bubbles: true,
      composed: true,
      detail: {
        questionId: this.currentQuestion?.id ?? null,
        questionIndex: this.currentIndex,
        optionId,
        text
      }
    }));
  }
  handleOptionClick(option) {
    this.#dispatchAnswer(option.id, option.label);
  }
  handleCustomAnswerInput(event) {
    this.customAnswer = event.target.value;
  }
  handleCustomAnswerKeydown(event) {
    if (event.key == "Enter" && !event.shiftKey && !event.isComposing) {
      event.preventDefault();
      if (this.#trimmedCustomAnswer) {
        this.handleSendOrSkip();
      }
    }
  }
  handleSendOrSkip() {
    this.#dispatchAnswer(null, this.#trimmedCustomAnswer);
  }
  handleCustomAnswerIconClick() {
    this.customAnswerInput.focus();
  }
  handleClose() {
    this.dispatchEvent(new CustomEvent(CLOSE_EVENT, {
      bubbles: true,
      composed: true,
      detail: {
        questionId: this.currentQuestion?.id ?? null,
        questionIndex: this.currentIndex
      }
    }));
  }
  optionTemplate(option, index) {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      <li>
        <button
          type="button"
          class="option"
          ?data-recommended=${option.recommended}
          @click=${() => this.handleOptionClick(option)}
        >
          <span class="option-number" aria-hidden="true">${index + 1}</span>
          <span class="option-text">
            ${option.recommended ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<span
                  class="recommended-badge"
                  data-l10n-id="ai-clarifying-question-recommended"
                ></span>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.nothing}
            <span class="option-label">${option.label}</span>
            ${option.description ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<span class="option-description"
                  >${option.description}</span
                >` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.nothing}
          </span>
          ${option.recommended ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<img
                class="option-arrow"
                src="chrome://global/skin/icons/shaft-arrow-right.svg"
                alt=""
              />` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.nothing}
        </button>
      </li>
    `;
  }
  render() {
    const question = this.currentQuestion;
    if (!question) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.nothing;
    }
    const hasCustomAnswer = !!this.#trimmedCustomAnswer;
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      <link
        rel="stylesheet"
        href="${toolkit_themes_shared_design_system_src_text_and_typography_css__WEBPACK_IMPORTED_MODULE_1__}"
      />
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_ai_clarifying_question_ai_clarifying_question_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <moz-button
        class="close-button"
        type="ghost icon"
        size="small"
        iconSrc="resource://content-accessible/close-12.svg"
        data-l10n-id="ai-clarifying-question-close"
        @click=${this.handleClose}
      ></moz-button>
      <div class="ai-clarifying-question-wrapper">
        <div class="question-header">
          <p
            class="question-progress text-deemphasized"
            data-l10n-id="ai-clarifying-question-progress"
            data-l10n-args=${JSON.stringify({
      current: this.currentIndex + 1,
      total: this.questions.length
    })}
          ></p>
          <h2 class="question-text" id="question-text">${question.question}</h2>
        </div>
        <ol class="options" aria-labelledby="question-text">
          ${question.options?.map((option, index) => this.optionTemplate(option, index))}
        </ol>
        <div class="custom-answer">
          <img
            class="custom-answer-icon"
            src="chrome://global/skin/icons/edit-outline.svg"
            alt=""
            @click=${this.handleCustomAnswerIconClick}
          />
          <moz-textarea
            class="custom-answer-input"
            rows="1"
            data-l10n-id="ai-clarifying-question-custom-answer"
            .value=${this.customAnswer}
            .maxLength=${this.maxCustomAnswerLength}
            @input=${this.handleCustomAnswerInput}
            @keydown=${this.handleCustomAnswerKeydown}
          ></moz-textarea>
          <moz-button
            class="custom-answer-button"
            type="ghost"
            data-l10n-id=${hasCustomAnswer ? "ai-clarifying-question-send" : "ai-clarifying-question-skip"}
            @click=${this.handleSendOrSkip}
          ></moz-button>
        </div>
      </div>
    `;
  }
}
customElements.define("ai-clarifying-question", AIClarifyingQuestion);

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

/***/ 58210:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-textarea.7ddff8f57b36238cd9c2.css";

/***/ }),

/***/ 65944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MozInputText: () => (/* binding */ MozInputText)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_input_text_moz_input_text_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9538);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/// <reference path="./moz-input-text.tagmap.d.ts" />




/**
 * A text input custom element.
 *
 * @tagname moz-input-text
 * @property {string} label - The text of the label element
 * @property {string} name - The name of the input control
 * @property {string} value - The value of the input control
 * @property {boolean} disabled - The disabled state of the input control
 * @property {boolean} readonly - The readonly state of the input control
 * @property {boolean} required - The required state of the input control
 * @property {string} iconSrc - The src for an optional icon
 * @property {string} description - The text for the description element that helps describe the input control
 * @property {string} supportPage - Name of the SUMO support page to link to.
 * @property {string} placeholder - Text to display when the input has no value.
 * @property {number} maxLength - The maximum number of characters the input accepts.
 * @property {string} ariaLabel - The aria-label text when there is no visible label.
 * @property {string} ariaDescription - The aria-description text when there is no visible description.
 * @property {string} title - The title attribute, mapped onto the inner input.
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
    },
    required: {
      type: Boolean,
      reflect: true
    },
    maxLength: {
      type: Number
    }
  };
  static inputLayout = "block";
  constructor() {
    super();
    this.value = "";
    this.readonly = false;
    this.required = false;
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
        ?required=${this.required}
        accesskey=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.accessKey)}
        placeholder=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.placeholder)}
        maxlength=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.maxLength)}
        aria-label=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.ariaLabel ?? undefined)}
        aria-describedby="description"
        aria-description=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.hasDescription ? undefined : this.ariaDescription)}
        title=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.title)}
        @input=${this.handleInput}
        @change=${this.redispatchEvent}
      />
    `;
  }
  requiredIndicatorTemplate() {
    return this.required ? (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span class="required-indicator" aria-hidden="true">*</span>` : "";
  }
}
customElements.define("moz-input-text", MozInputText);

/***/ }),

/***/ 79240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MozButton: () => (/* binding */ MozButton)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_button_moz_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30082);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);
/* harmony import */ var chrome_global_content_elements_moz_label_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26284);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/// <reference path="./moz-button.tagmap.d.ts" />



window.MozXULElement?.insertFTLIfNeeded("toolkit/global/mozButton.ftl");

// eslint-disable-next-line import-x/no-unassigned-import


/**
 * Controller for moz-buttons with popovers.
 */
class PopoverController {
  /** @type {MozButton} */
  host;

  /** @type {HTMLElement | null} */
  triggerEl = null;

  /** @type {HTMLElement | null} */
  listenerTargetEl = null;

  /** @type {HTMLElement | null} */
  popoverEl = null;

  /**
   * @type {string}
   *
   * The ID of the popover element.
   */
  get popoverTarget() {
    return this.host.popoverTarget;
  }

  /**
   * @type {string}
   *
   * The default value of the aria-haspopup attribute that should be set on the
   * host. Consumers can override this.
   */
  get ariaHasPopupDefault() {
    return "dialog";
  }

  /**
   * @type {string[]}
   *
   * The events that are expected to be fired when the popover element is shown
   * and hidden.
   */
  get popoverToggledEvents() {
    return ["toggle"];
  }

  /**
   * @param {MozButton} host
   */
  constructor(host) {
    this.host = host;
    host.addController(this);
  }
  hostConnected() {
    if (!this.popoverTarget) {
      return;
    }
    this.popoverEl = this.getPopover();
    if (this.popoverEl) {
      this.popoverSetUp();
    }
  }
  hostDisconnected() {
    this.removeListeners();
    this.popoverEl = null;
  }

  /**
   * Gets the element in the host that opens the popover. This should never be
   * null.
   *
   * @returns {HTMLElement}
   */
  getTriggerEl() {
    return this.host.buttonEl;
  }

  /**
   * Gets the element that receives the click and mousedown listeners that
   * toggle the popover.
   *
   * @returns {HTMLElement}
   */
  getListenerTargetEl() {
    return this.host;
  }

  /**
   * Retrieves the element matching the host's popoverTarget.
   *
   * @returns {HTMLElement | null}
   */
  getPopover() {
    let root = this.host.getRootNode();
    let popoverEl = null;
    while (root) {
      popoverEl = root.querySelector?.(`#${this.popoverTarget}`);
      if (popoverEl) {
        break;
      }
      if (root instanceof ShadowRoot) {
        root = root.host?.getRootNode();
      } else {
        break;
      }
    }
    return popoverEl;
  }

  /**
   * Handles opening/closing the popover when the trigger element is clicked or
   * activated via the keyboard.
   *
   * @param {MouseEvent|KeyboardEvent} event
   */
  #trigger = event => {
    if (event.type == "click") {
      event.preventDefault();
    }
    if (event.type == "mousedown" && event.button == 0 || event.inputSource == MouseEvent.MOZ_SOURCE_KEYBOARD || !event.detail) {
      this.togglePopover(event);
    }
  };

  /**
   * Toggles the popover.
   *
   * @param {MouseEvent|KeyboardEvent} _event
   */
  togglePopover(_event) {
    this.popoverEl?.togglePopover();
  }

  /**
   * Listener for the popover events defined in popoverToggledEvents.
   *
   * @param {Event} _event
   */
  onPopoverToggled(_event) {
    let isOpen = !!this.popoverEl?.matches(":popover-open");
    this.updateOpenAttr(isOpen);
  }

  /**
   * Updates host's open attribute and ariaExpanded.
   *
   * @param {boolean} isOpen
   */
  updateOpenAttr(isOpen) {
    this.host.toggleAttribute("open", isOpen);
    this.host.ariaExpanded = isOpen ? "true" : "false";
  }

  /**
   * Removes event listeners.
   */
  removeListeners() {
    this.listenerTargetEl?.removeEventListener("click", this.#trigger);
    this.listenerTargetEl?.removeEventListener("mousedown", this.#trigger);
    for (let e of this.popoverToggledEvents) {
      this.popoverEl?.removeEventListener(e, this.#onPopoverToggled);
    }
    this.#onPopoverToggled = null;
  }

  /**
   * Sets up the host for integration with the popover,
   * adding necessary event listeners and ARIA attributes.
   */
  popoverSetUp() {
    this.triggerEl = this.getTriggerEl();
    this.listenerTargetEl = this.getListenerTargetEl();
    this.listenerTargetEl.addEventListener("click", this.#trigger);
    this.listenerTargetEl.addEventListener("mousedown", this.#trigger);
    this.#onPopoverToggled = event => this.onPopoverToggled(event);
    for (let e of this.popoverToggledEvents) {
      this.popoverEl?.addEventListener(e, this.#onPopoverToggled);
    }
    this.updateOpenAttr(false);
    this.triggerEl.popoverTargetElement = this.popoverEl;

    // Update the host's ariaHasPopup.
    this.host.requestUpdate();
  }

  /**
   * Cleans up popover integration,
   * removing event listeners and clearing ARIA attributes.
   */
  popoverCleanUp() {
    this.removeListeners();
    this.host.ariaExpanded = null;
    this.host.removeAttribute("open");
    if (this.triggerEl) {
      this.triggerEl.popoverTargetElement = null;
      this.triggerEl = null;
    }
    this.listenerTargetEl = null;

    // Update the host's ariaHasPopup.
    this.host.requestUpdate();
  }

  /**
   * Cleans up the popover integration and detaches from the host.
   */
  destroy() {
    this.popoverCleanUp();
    this.popoverEl = null;
    this.host.removeController(this);
  }

  /** @type {Function} */
  #onPopoverToggled;
}

/**
 * Controls moz-button behavior when menuId property is set.
 * Helps to integrate moz-button with panel-list.
 */
class MenuController extends PopoverController {
  get popoverTarget() {
    return this.host.menuId;
  }
  get ariaHasPopupDefault() {
    return "menu";
  }
  get popoverToggledEvents() {
    return ["shown", "hidden"];
  }
  getTriggerEl() {
    return this.host.isSplitButton ? this.host.chevronButtonEl : this.host.buttonEl;
  }
  getListenerTargetEl() {
    return this.host.isSplitButton ? this.host.chevronButtonEl : this.host;
  }
  onPopoverToggled(event) {
    let isOpen = event?.type == "shown";
    this.updateOpenAttr(isOpen);
  }
  popoverCleanUp() {
    if (this.popoverEl?.localName == "panel-list") {
      super.popoverCleanUp();
    }
  }
  popoverSetUp() {
    if (this.popoverEl?.localName == "panel-list") {
      super.popoverSetUp();
    }
  }
  togglePopover(event) {
    this.popoverEl?.toggle(event, this.host.isSplitButton ? this.host.chevronButtonEl : this.host);
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
 * @property {string} ariaChecked - The button's aria-checked attribute, used in shadow DOM and therefore not as an attribute on moz-button.
 * @property {string} ariaSelected - The button's aria-selected attribute, used in shadow DOM and therefore not as an attribute on moz-button.
 * @property {string} buttonRole - The button's role attribute in shadow DOM.
 * @property {string} iconSrc - Path to the icon that should be displayed in the button.
 * @property {string} hasVisibleLabel - Internal, tracks whether or not the button has a visible label.
 * @property {boolean} attention - Show a dot notification on the button if true.
 * @property {boolean} parentDisabled - When the parent of this component is disabled.
 * @property {string} iconPosition - The icon's position relative to the button label.
 *   Options: start, end.
 * @property {string} menuId - The ID of the menu element controlled by the button.
 * @property {string} popoverTarget - The ID of the popover element controlled by the button. Either a menuId or popoverTarget may be specified but not both.
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
    ariaChecked: {
      type: String,
      mapped: true
    },
    ariaSelected: {
      type: String,
      mapped: true
    },
    buttonRole: {
      type: String
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
      mapped: true,
      fluent: true
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
    },
    popoverTarget: {
      type: String,
      reflect: true
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
    /** @type {string | undefined} */
    this.iconSrc = undefined;
    this.menuId = "";
    this.parentDisabled = undefined;
    this.popoverTarget = "";
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("menuId") || changedProperties.has("popoverTarget") || changedProperties.has("type")) {
      // If the button has a menuId, hook up a MenuController. If it has a
      // popoverTarget, hook up a PopoverController. If it has both, prefer the
      // menuId.
      this._popoverController?.destroy();
      this._popoverController = null;
      if (this.menuId) {
        this._popoverController = new MenuController(this);
      } else if (this.popoverTarget) {
        this._popoverController = new PopoverController(this);
      }
    }
  }
  get isSplitButton() {
    return this.type === "split";
  }
  get ariaHasPopup() {
    if (this.#ariaHasPopupConsumerValue) {
      return this.#ariaHasPopupConsumerValue;
    }
    return this._popoverController?.ariaHasPopupDefault;
  }
  set ariaHasPopup(value) {
    this.#ariaHasPopupConsumerValue = value;
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
        role=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.buttonRole)}
        aria-label=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.ariaLabel)}
        aria-expanded=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.isSplitButton ? undefined : this.ariaExpanded)}
        aria-haspopup=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.isSplitButton ? undefined : this.ariaHasPopup)}
        aria-pressed=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.ariaPressed)}
        aria-checked=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.ariaChecked)}
        aria-selected=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.ariaSelected)}
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

  /** @type {string} */
  #ariaHasPopupConsumerValue;
}
customElements.define("moz-button", MozButton);

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
//# sourceMappingURL=components-ai-clarifying-question-ai-clarifying-question-stories.8106b0e7.iframe.bundle.js.map