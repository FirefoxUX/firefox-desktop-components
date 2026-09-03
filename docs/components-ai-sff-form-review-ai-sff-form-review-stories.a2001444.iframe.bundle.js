"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1252,3433,5944,6284,9240],{

/***/ 3928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AiSffFormReview: () => (/* binding */ AiSffFormReview)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_ai_sff_form_review_ai_sff_form_review_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97908);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82242);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(616);
/* harmony import */ var chrome_browser_content_aiwindow_modules_SmartFormFillConstants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26729);
/* harmony import */ var chrome_global_content_elements_moz_button_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79240);
/* harmony import */ var chrome_global_content_elements_moz_button_group_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51252);
/* harmony import */ var chrome_global_content_elements_moz_input_text_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65944);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */





// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import


/** @typedef {import("chrome://global/content/vendor/lit.all.mjs").TemplateResult} TemplateResult */
/** @typedef {import("chrome://global/content/elements/moz-input-text.mjs").default} MozInputText */
/** @typedef {import("chrome://browser/content/aiwindow/modules/SmartFormFillConstants.mjs").FormReviewField} FormReviewField */
/** @typedef {import("chrome://browser/content/aiwindow/modules/SmartFormFillConstants.mjs").FormReviewActionType} FormReviewActionType */
/** @typedef {import("chrome://browser/content/aiwindow/modules/SmartFormFillConstants.mjs").FormReviewErrorType} FormReviewErrorType */
/** @typedef {import("chrome://browser/content/aiwindow/modules/SmartFormFillConstants.mjs").FormReviewState} FormReviewState */

/**
 * @typedef {object} FillFormActionDetail
 * @property {Array<{id: string, value: string}>} fields List of fields to fill
 */

/**
 * Smart Form Fill form fill review component
 */
class AiSffFormReview extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.MozLitElement {
  #reviewFieldsElement = null;
  #reviewFieldsObserver = null;
  #reviewedAllFields = false;
  static properties = {
    fields: {
      type: Array
    },
    state: {
      type: String
    },
    errorType: {
      type: String
    },
    filling: {
      type: Boolean
    }
  };
  static queries = {
    firstReviewField: "moz-input-text",
    reviewFields: ".form-review-fields",
    stopButton: ".form-review-stop",
    closeButton: ".form-review-close"
  };

  /**
   * Creates a form review component in progress state
   */
  constructor() {
    super();

    /** @type {Array<FormReviewField>} */
    this.fields = [];

    /** @type {FormReviewState} */
    this.state = chrome_browser_content_aiwindow_modules_SmartFormFillConstants_mjs__WEBPACK_IMPORTED_MODULE_3__.FORM_REVIEW_STATES.PROGRESS;

    /** @type {FormReviewErrorType | null} */
    this.errorType = null;

    /** @type {boolean} */
    this.filling = false;
  }

  /**
   * Sends ready event so value generation can begin
   *
   * @returns {void}
   */
  firstUpdated() {
    this.#focusCurrentState();
    this.dispatchEvent(new CustomEvent(chrome_browser_content_aiwindow_modules_SmartFormFillConstants_mjs__WEBPACK_IMPORTED_MODULE_3__.FORM_REVIEW_READY_EVENT, {
      bubbles: true
    }));
  }

  /**
   * Moves focus to the first meaningful control after a state transition.
   *
   * @param {Map<string, unknown>} changedProperties
   *   Properties changed by the completed update.
   * @returns {void}
   */
  updated(changedProperties) {
    super.updated(changedProperties);
    if (!changedProperties.has("state")) {
      return;
    }
    this.#focusCurrentState();
    this.#observeReviewFields();
  }
  #observeReviewFields() {
    this.#stopObservingReviewFields();
    this.#reviewedAllFields = false;
    if (this.state !== chrome_browser_content_aiwindow_modules_SmartFormFillConstants_mjs__WEBPACK_IMPORTED_MODULE_3__.FORM_REVIEW_STATES.REVIEW || !this.reviewFields) {
      return;
    }
    this.#reviewFieldsElement = this.reviewFields;
    this.#reviewFieldsElement.addEventListener("scroll", this.#updateReviewCompletion);
    this.#reviewFieldsObserver = new ResizeObserver(this.#updateReviewCompletion);
    this.#reviewFieldsObserver.observe(this.#reviewFieldsElement);
  }
  #stopObservingReviewFields() {
    this.#reviewFieldsObserver?.disconnect();
    this.#reviewFieldsObserver = null;
    this.#reviewFieldsElement?.removeEventListener("scroll", this.#updateReviewCompletion);
    this.#reviewFieldsElement = null;
  }
  #updateReviewCompletion = () => {
    if (this.#reviewedAllFields || !this.#reviewFieldsElement) {
      return;
    }
    const {
      scrollTop,
      scrollHeight,
      clientHeight
    } = this.#reviewFieldsElement;
    if (scrollHeight - scrollTop - clientHeight > 1) {
      return;
    }
    this.#reviewedAllFields = true;
    this.#stopObservingReviewFields();
    this.requestUpdate();
  };
  disconnectedCallback() {
    super.disconnectedCallback();
    this.#stopObservingReviewFields();
  }

  /**
   * Focuses the primary control for the current state.
   *
   * @returns {void}
   */
  #focusCurrentState() {
    // TODO Bug 2062498 - Ensure screen readers announce context for each state
    switch (this.state) {
      case chrome_browser_content_aiwindow_modules_SmartFormFillConstants_mjs__WEBPACK_IMPORTED_MODULE_3__.FORM_REVIEW_STATES.PROGRESS:
        this.stopButton?.focus();
        break;
      case chrome_browser_content_aiwindow_modules_SmartFormFillConstants_mjs__WEBPACK_IMPORTED_MODULE_3__.FORM_REVIEW_STATES.REVIEW:
        this.#focusFirstReviewField();
        break;
      case chrome_browser_content_aiwindow_modules_SmartFormFillConstants_mjs__WEBPACK_IMPORTED_MODULE_3__.FORM_REVIEW_STATES.FINAL:
        this.closeButton?.focus();
        break;
    }
  }

  /**
   * Focuses the first review field after its internal input is rendered.
   *
   * @returns {Promise<void>}
   */
  async #focusFirstReviewField() {
    const field = this.firstReviewField;
    if (!field) {
      return;
    }
    await field.updateComplete;
    if (this.state === chrome_browser_content_aiwindow_modules_SmartFormFillConstants_mjs__WEBPACK_IMPORTED_MODULE_3__.FORM_REVIEW_STATES.REVIEW && field.isConnected) {
      field.focus();
    }
  }

  /**
   * Dispatches an action from the review component to its dialog host.
   *
   * @param {FormReviewActionType} type
   *   The action being requested.
   * @param {FillFormActionDetail} [detail]
   *   Data associated with the action.
   * @returns {void}
   */
  #dispatchAction(type, detail) {
    this.dispatchEvent(new CustomEvent(type, {
      bubbles: true,
      composed: true,
      detail
    }));
  }

  /**
   * Saves an edited generated value for its corresponding form field.
   *
   * @param {InputEvent & {currentTarget: MozInputText}} event
   *   The input event containing the edited value.
   * @param {string} fieldId The identifier of the edited form field.
   *
   * @returns {void}
   */
  #handleInput(event, fieldId) {
    if (this.filling) {
      return;
    }
    this.fields = this.fields.map(field => field.id === fieldId ? {
      ...field,
      value: event.currentTarget.value
    } : field);
  }

  /**
   * Requests that the current reviewed values be filled into the form.
   *
   * @returns {void}
   */
  #handleFill() {
    if (this.filling || !this.#reviewedAllFields) {
      return;
    }
    this.filling = true;
    this.#dispatchAction(chrome_browser_content_aiwindow_modules_SmartFormFillConstants_mjs__WEBPACK_IMPORTED_MODULE_3__.FORM_REVIEW_ACTIONS.FILL_FORM, {
      fields: this.fields.map(({
        id,
        value
      }) => ({
        id,
        value
      }))
    });
  }

  /**
   * Cancels review without requesting that any values be filled.
   *
   * @returns {void}
   */
  #handleCancel() {
    if (this.filling) {
      return;
    }
    this.#dispatchAction(chrome_browser_content_aiwindow_modules_SmartFormFillConstants_mjs__WEBPACK_IMPORTED_MODULE_3__.FORM_REVIEW_ACTIONS.CANCEL);
  }

  /**
   * Requests cancellation of suggestion generation.
   *
   * @returns {void}
   */
  #handleStop() {
    this.#dispatchAction(chrome_browser_content_aiwindow_modules_SmartFormFillConstants_mjs__WEBPACK_IMPORTED_MODULE_3__.FORM_REVIEW_ACTIONS.STOP);
  }

  /**
   * Requests that the completed dialog be closed.
   *
   * @returns {void}
   */
  #handleClose() {
    this.#dispatchAction(chrome_browser_content_aiwindow_modules_SmartFormFillConstants_mjs__WEBPACK_IMPORTED_MODULE_3__.FORM_REVIEW_ACTIONS.CLOSE);
  }

  /**
   * Renders an editable generated value with the detected field label.
   *
   * @param {FormReviewField} field The generated field value to render.
   *
   * @returns {TemplateResult}
   */
  #renderReviewField(field) {
    const label = field.label || field.placeholder || field.name || "";
    const usesGenericLabel = !label;
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      <moz-input-text
        .value=${field.value}
        .label=${label}
        .disabled=${this.filling}
        data-l10n-id=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(usesGenericLabel ? "ai-smart-form-fill-field" : undefined)}
        @input=${event => this.#handleInput(event, field.id)}
      ></moz-input-text>
    `;
  }

  /**
   * Renders the editable list of generated values and its fill and cancel
   * actions.
   *
   * @returns {TemplateResult}
   */
  #renderReview() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      <section
        class="form-review-dialog"
        aria-labelledby="form-review-heading"
        aria-describedby="form-review-description"
      >
        <h1
          id="form-review-heading"
          data-l10n-id="ai-smart-form-fill-review-heading"
        ></h1>
        <p
          id="form-review-description"
          data-l10n-id="ai-smart-form-fill-review-description"
        ></p>
        <div class="form-review-fields">
          ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.repeat)(this.fields, field => field.id, field => this.#renderReviewField(field))}
        </div>
        <moz-button-group class="form-review-actions">
          <moz-button
            .disabled=${this.filling}
            data-l10n-id="ai-smart-form-fill-cancel-review"
            @click=${this.#handleCancel}
          ></moz-button>
          <moz-button
            type="primary"
            .disabled=${this.filling || !this.#reviewedAllFields}
            data-l10n-id="ai-smart-form-fill-fill-form"
            @click=${this.#handleFill}
          ></moz-button>
        </moz-button-group>
      </section>
    `;
  }

  /**
   * Renders the suggestion-generation progress indicator and stop action.
   *
   * @returns {TemplateResult}
   */
  #renderProgress() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      <section
        class="form-review-dialog form-review-progress"
        aria-labelledby="form-review-progress-label"
      >
        <img
          class="form-review-progress-icon"
          src="chrome://global/skin/icons/loading.svg"
          alt=""
        />
        <span
          id="form-review-progress-label"
          class="form-review-progress-label"
          data-l10n-id="ai-smart-form-fill-finding-suggestions"
        ></span>
        <moz-button
          class="form-review-stop"
          icon-src="chrome://browser/content/aiwindow/assets/stop-generation.svg"
          data-l10n-id="ai-smart-form-fill-stop-finding-suggestions"
          @click=${this.#handleStop}
        ></moz-button>
      </section>
    `;
  }

  /**
   * Renders the success or failure result and its close action.
   *
   * @returns {TemplateResult}
   */
  #renderFinal() {
    const hasErrors = this.errorType !== null;
    let headingId = "ai-smart-form-fill-success-heading";
    let descriptionId = "ai-smart-form-fill-success-description";
    if (this.errorType === chrome_browser_content_aiwindow_modules_SmartFormFillConstants_mjs__WEBPACK_IMPORTED_MODULE_3__.FORM_REVIEW_ERRORS.NO_SUGGESTIONS) {
      headingId = "ai-smart-form-fill-no-suggestions-heading";
      descriptionId = "ai-smart-form-fill-no-suggestions-description";
    } else if (hasErrors) {
      headingId = "ai-smart-form-fill-error-heading";
      descriptionId = "ai-smart-form-fill-error-description";
    }
    const icon = hasErrors ? "chrome://global/skin/icons/error.svg" : "chrome://global/skin/icons/check-filled.svg";
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      <section
        class="form-review-dialog"
        aria-labelledby="form-review-final-heading"
        aria-describedby="form-review-final-description"
      >
        <h1 id="form-review-final-heading" class="form-review-final-heading">
          <img class="form-review-status-icon" src=${icon} alt="" />
          <span data-l10n-id=${headingId}></span>
        </h1>
        <p id="form-review-final-description" data-l10n-id=${descriptionId}></p>
        <moz-button-group class="form-review-actions">
          <moz-button
            class="form-review-close"
            type="primary"
            data-l10n-id="ai-smart-form-fill-close-review"
            @click=${this.#handleClose}
          ></moz-button>
        </moz-button-group>
      </section>
    `;
  }

  /**
   * Renders the view associated with the component's current state.
   *
   * @returns {TemplateResult}
   */
  render() {
    let content;
    switch (this.state) {
      case chrome_browser_content_aiwindow_modules_SmartFormFillConstants_mjs__WEBPACK_IMPORTED_MODULE_3__.FORM_REVIEW_STATES.PROGRESS:
        content = this.#renderProgress();
        break;
      case chrome_browser_content_aiwindow_modules_SmartFormFillConstants_mjs__WEBPACK_IMPORTED_MODULE_3__.FORM_REVIEW_STATES.REVIEW:
        content = this.#renderReview();
        break;
      case chrome_browser_content_aiwindow_modules_SmartFormFillConstants_mjs__WEBPACK_IMPORTED_MODULE_3__.FORM_REVIEW_STATES.FINAL:
        content = this.#renderFinal();
        break;
      default:
        content = this.#renderReview();
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_ai_sff_form_review_ai_sff_form_review_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      ${content}
    `;
  }
}
customElements.define("ai-sff-form-review", AiSffFormReview);

/***/ }),

/***/ 9538:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-input-text.1017744b4c3644805ab8.css";

/***/ }),

/***/ 11258:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-button-group.4b3da672913bb0fc2d88.css";

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

/***/ 26729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FORM_REVIEW_ACTIONS: () => (/* binding */ FORM_REVIEW_ACTIONS),
/* harmony export */   FORM_REVIEW_ERRORS: () => (/* binding */ FORM_REVIEW_ERRORS),
/* harmony export */   FORM_REVIEW_READY_EVENT: () => (/* binding */ FORM_REVIEW_READY_EVENT),
/* harmony export */   FORM_REVIEW_STATES: () => (/* binding */ FORM_REVIEW_STATES),
/* harmony export */   MAX_SELECTED_TABS: () => (/* binding */ MAX_SELECTED_TABS),
/* harmony export */   SUPPORTED_INPUT_TYPES: () => (/* binding */ SUPPORTED_INPUT_TYPES),
/* harmony export */   VALID_FORM_REVIEW_ACTIONS: () => (/* binding */ VALID_FORM_REVIEW_ACTIONS),
/* harmony export */   VALID_FORM_REVIEW_GENERATION_ERRORS: () => (/* binding */ VALID_FORM_REVIEW_GENERATION_ERRORS)
/* harmony export */ });
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/**
 * @typedef {object} FormReviewField
 * @property {string} id The stable ID of the detected form field.
 * @property {string} label The label detected for the form field.
 * @property {string} placeholder The form field’s placeholder text.
 * @property {string} name The form field’s name attribute.
 * @property {string} value The generated or user-edited field value.
 */

/** @typedef {"fill-form" | "cancel" | "stop" | "close"} FormReviewActionType */

/**
 * @typedef {object} FormReviewAction
 * @property {FormReviewActionType} type The action requested by the user.
 * @property {Array<{id: string, value: string}>} [fields]
 *   The reviewed field values included with a fill action.
 */

/**
 * @typedef {object} FormReviewFillResult
 * @property {boolean} hasErrors Whether the requested operation encountered an error.
 * @property {boolean} cancelled Whether the requested operation was cancelled.
 */

/** @typedef {"progress" | "review" | "final"} FormReviewState */

/** @typedef {"generation-failed" | "no-suggestions"} FormReviewGenerationErrorType */

/** @typedef {FormReviewGenerationErrorType | "fill-failed"} FormReviewErrorType */

/**
 * @typedef {
 *   {fields: Array<FormReviewField>} |
 *   {errorType: FormReviewGenerationErrorType}
 * } FormReviewGenerationResult
 */

/**
 * How many tabs are allowed to be selected by the user as context
 * to generate form field values.
 */
const MAX_SELECTED_TABS = 5;
const FORM_REVIEW_READY_EVENT = "SmartFormFillReview:Ready";

/**
 * Actions the user initiates in the form review dialog
 */
const FORM_REVIEW_ACTIONS = Object.freeze({
  FILL_FORM: "fill-form",
  CANCEL: "cancel",
  STOP: "stop",
  CLOSE: "close"
});

/**
 * List of valid actions from the form review dialog
 */
const VALID_FORM_REVIEW_ACTIONS = Object.freeze(Object.values(FORM_REVIEW_ACTIONS));

/**
 * The states the form review dialog can be in
 */
const FORM_REVIEW_STATES = Object.freeze({
  PROGRESS: "progress",
  REVIEW: "review",
  FINAL: "final"
});

/**
 * Errors displayed by the form review dialog
 */
const FORM_REVIEW_ERRORS = Object.freeze({
  GENERATION_FAILED: "generation-failed",
  NO_SUGGESTIONS: "no-suggestions",
  FILL_FAILED: "fill-failed"
});

/**
 * Errors that can occur while generating form suggestions
 */
const VALID_FORM_REVIEW_GENERATION_ERRORS = Object.freeze([FORM_REVIEW_ERRORS.GENERATION_FAILED, FORM_REVIEW_ERRORS.NO_SUGGESTIONS]);

/**
 * Input types supported by Smart Form Fill
 */
const SUPPORTED_INPUT_TYPES = ["text", "email", "tel", "number", "search", "month"];

/***/ }),

/***/ 30082:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-button.e874513288adb958d186.css";

/***/ }),

/***/ 42785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FromReviewError: () => (/* binding */ FromReviewError),
/* harmony export */   NoSuggestions: () => (/* binding */ NoSuggestions),
/* harmony export */   Progress: () => (/* binding */ Progress),
/* harmony export */   Review: () => (/* binding */ Review),
/* harmony export */   ScrollableReview: () => (/* binding */ ScrollableReview),
/* harmony export */   Success: () => (/* binding */ Success),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var chrome_browser_content_aiwindow_modules_SmartFormFillConstants_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26729);
/* harmony import */ var _ai_sff_form_review_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3928);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




const FIELDS = [{
  id: "first-name",
  label: "First name",
  placeholder: "",
  name: "firstName",
  value: "Katherine"
}, {
  id: "last-name",
  label: "Last name",
  placeholder: "",
  name: "lastName",
  value: "Johnson"
}, {
  id: "email",
  label: "Email address",
  placeholder: "name@example.com",
  name: "email",
  value: "katherine@example.com"
}, {
  id: "phone",
  label: "",
  placeholder: "Phone number",
  name: "phone",
  value: "555-0100"
}, {
  id: "company",
  label: "",
  placeholder: "",
  name: "Company",
  value: "Mozilla"
}, {
  id: "unlabelled-field",
  label: "",
  placeholder: "",
  name: "",
  value: "Generated value"
}];
const SCROLLABLE_FIELDS = Array.from({
  length: 20
}, (_, index) => ({
  id: `field-${index + 1}`,
  label: `Field ${index + 1}`,
  placeholder: "",
  name: `field-${index + 1}`,
  value: `Generated value ${index + 1}`
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/AI Window/Smart Form Fill Form Review",
  component: "ai-sff-form-review",
  argTypes: {
    fields: {
      control: "object"
    },
    state: {
      control: "select",
      options: Object.values(chrome_browser_content_aiwindow_modules_SmartFormFillConstants_mjs__WEBPACK_IMPORTED_MODULE_1__.FORM_REVIEW_STATES)
    },
    errorType: {
      control: "select",
      options: [null, ...Object.values(chrome_browser_content_aiwindow_modules_SmartFormFillConstants_mjs__WEBPACK_IMPORTED_MODULE_1__.FORM_REVIEW_ERRORS)]
    }
  },
  parameters: {
    status: "in-development",
    actions: {
      handles: Object.values(chrome_browser_content_aiwindow_modules_SmartFormFillConstants_mjs__WEBPACK_IMPORTED_MODULE_1__.FORM_REVIEW_ACTIONS)
    },
    fluent: `
ai-smart-form-fill-fill-form =
    .label = Fill form
ai-smart-form-fill-review-heading = Review suggestions
ai-smart-form-fill-review-description = Edit or delete anything that’s not correct.
ai-smart-form-fill-field =
    .label = Field
ai-smart-form-fill-cancel-review =
    .label = Cancel
ai-smart-form-fill-finding-suggestions = Finding suggestions
ai-smart-form-fill-stop-finding-suggestions =
    .aria-label = Stop finding suggestions
ai-smart-form-fill-success-heading = Form filled with suggestions
ai-smart-form-fill-success-description = Check the form. Review the filled fields and update anything that looks off or missing before submitting.
ai-smart-form-fill-no-suggestions-heading = No suggestions found
ai-smart-form-fill-no-suggestions-description = Smart Form Fill wasn’t able to generate any suggestions for this form.
ai-smart-form-fill-error-heading = Something happened catch-all headline
ai-smart-form-fill-error-description = General explanation that maybe its the connection, or something else happened, and to try again
ai-smart-form-fill-close-review =
    .label = Close
    `
  }
});
const Template = ({
  fields,
  state,
  errorType
}) => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <ai-sff-form-review
    .fields=${fields}
    .state=${state}
    .errorType=${errorType}
  ></ai-sff-form-review>
`;
const Progress = Template.bind({});
Progress.args = {
  fields: FIELDS,
  state: chrome_browser_content_aiwindow_modules_SmartFormFillConstants_mjs__WEBPACK_IMPORTED_MODULE_1__.FORM_REVIEW_STATES.PROGRESS,
  errorType: null
};
const Review = Template.bind({});
Review.args = {
  fields: FIELDS,
  state: chrome_browser_content_aiwindow_modules_SmartFormFillConstants_mjs__WEBPACK_IMPORTED_MODULE_1__.FORM_REVIEW_STATES.REVIEW,
  errorType: null
};
const ScrollableReview = Template.bind({});
ScrollableReview.args = {
  fields: SCROLLABLE_FIELDS,
  state: chrome_browser_content_aiwindow_modules_SmartFormFillConstants_mjs__WEBPACK_IMPORTED_MODULE_1__.FORM_REVIEW_STATES.REVIEW,
  errorType: null
};
const Success = Template.bind({});
Success.args = {
  fields: FIELDS,
  state: chrome_browser_content_aiwindow_modules_SmartFormFillConstants_mjs__WEBPACK_IMPORTED_MODULE_1__.FORM_REVIEW_STATES.FINAL,
  errorType: null
};
const FromReviewError = Template.bind({});
FromReviewError.args = {
  fields: FIELDS,
  state: chrome_browser_content_aiwindow_modules_SmartFormFillConstants_mjs__WEBPACK_IMPORTED_MODULE_1__.FORM_REVIEW_STATES.FINAL,
  errorType: chrome_browser_content_aiwindow_modules_SmartFormFillConstants_mjs__WEBPACK_IMPORTED_MODULE_1__.FORM_REVIEW_ERRORS.GENERATION_FAILED
};
const NoSuggestions = Template.bind({});
NoSuggestions.args = {
  fields: [],
  state: chrome_browser_content_aiwindow_modules_SmartFormFillConstants_mjs__WEBPACK_IMPORTED_MODULE_1__.FORM_REVIEW_STATES.FINAL,
  errorType: chrome_browser_content_aiwindow_modules_SmartFormFillConstants_mjs__WEBPACK_IMPORTED_MODULE_1__.FORM_REVIEW_ERRORS.NO_SUGGESTIONS
};

/***/ }),

/***/ 51252:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PLATFORM_LINUX: () => (/* binding */ PLATFORM_LINUX),
/* harmony export */   PLATFORM_MACOS: () => (/* binding */ PLATFORM_MACOS),
/* harmony export */   PLATFORM_WINDOWS: () => (/* binding */ PLATFORM_WINDOWS),
/* harmony export */   "default": () => (/* binding */ MozButtonGroup)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_button_group_moz_button_group_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11258);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



const PLATFORM_LINUX = "linux";
const PLATFORM_MACOS = "macosx";
const PLATFORM_WINDOWS = "win";

/**
 * A grouping of buttons. Primary button order will be set automatically based
 * on class="primary", type="submit" or autofocus attribute. Set slot="primary"
 * on a primary button that does not have primary styling to set its position.
 *
 * @tagname moz-button-group
 * @property {string} platform - The detected platform, set automatically.
 */
class MozButtonGroup extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static queries = {
    defaultSlotEl: "slot:not([name])",
    primarySlotEl: "slot[name=primary]"
  };
  static properties = {
    platform: {
      state: true
    }
  };
  constructor() {
    super();
    this.#detectPlatform();
  }
  #detectPlatform() {
    if (typeof AppConstants !== "undefined") {
      this.platform = AppConstants.platform;
    } else if (navigator.platform.includes("Linux")) {
      this.platform = PLATFORM_LINUX;
    } else if (navigator.platform.includes("Mac")) {
      this.platform = PLATFORM_MACOS;
    } else {
      this.platform = PLATFORM_WINDOWS;
    }
  }
  onSlotchange() {
    for (let child of this.defaultSlotEl.assignedNodes()) {
      if (!(child instanceof Element)) {
        // Text nodes won't support classList or getAttribute.
        continue;
      }
      switch (child.localName) {
        case "button":
          if (child.classList.contains("primary") || child.getAttribute("type") == "submit" || child.hasAttribute("autofocus") || child.hasAttribute("default")) {
            child.slot = "primary";
          }
          break;
        case "moz-button":
          if (child.type == "primary" || child.type == "destructive") {
            child.slot = "primary";
          }
          break;
      }
    }
    this.#reorderLightDom();
  }
  #reorderLightDom() {
    let primarySlottedChildren = [...this.primarySlotEl.assignedNodes()];
    if (this.platform == PLATFORM_WINDOWS) {
      primarySlottedChildren.reverse();
      for (let child of primarySlottedChildren) {
        child.parentElement.prepend(child);
      }
    } else {
      for (let child of primarySlottedChildren) {
        // Ensure the primary buttons are at the end of the light DOM.
        child.parentElement.append(child);
      }
    }
  }
  updated(changedProperties) {
    if (changedProperties.has("platform")) {
      this.#reorderLightDom();
    }
  }
  render() {
    let slots = [(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)` <slot @slotchange=${this.onSlotchange}></slot> `, (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)` <slot name="primary"></slot> `];
    if (this.platform == PLATFORM_WINDOWS) {
      slots = [slots[1], slots[0]];
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_button_group_moz_button_group_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      ${slots}
    `;
  }
}
customElements.define("moz-button-group", MozButtonGroup);

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
 * @property {boolean} required - The required state of the input control
 * @property {string} iconSrc - The src for an optional icon
 * @property {string} description - The text for the description element that helps describe the input control
 * @property {string} supportPage - Name of the SUMO support page to link to.
 * @property {string} placeholder - Text to display when the input has no value.
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

/***/ 97908:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ai-sff-form-review.7f6662bba72519f773a5.css";

/***/ })

}]);
//# sourceMappingURL=components-ai-sff-form-review-ai-sff-form-review-stories.a2001444.iframe.bundle.js.map