"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[7183],{

/***/ 2810:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ai-sff-tab-selector.70931993a6f92b7d77a1.css";

/***/ }),

/***/ 7739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var _ai_sff_tab_selector_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77814);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



const DEFAULT_FAVICON = "chrome://global/skin/icons/defaultFavicon.svg";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/AI Window/Smart Form Fill Tab Selector",
  component: "ai-sff-tab-selector",
  argTypes: {
    suggestedTabs: {
      control: "object"
    },
    otherTabs: {
      control: "object"
    }
  },
  parameters: {
    status: "in-development",
    actions: {
      handles: ["toggle"]
    },
    fluent: `
ai-smart-form-fill-edit-sources = Edit sources
ai-smart-form-fill-suggested-tabs = Suggested tabs
ai-smart-form-fill-other-tabs = Other tabs
ai-smart-form-fill-tab-select-toggle =
    .aria-label = Toggle tab selection for { $tabTitle }
ai-smart-form-fill-cancel-tab-select =
    .label = Cancel
ai-smart-form-fill-accept-tab-select =
    .label = Done
    `
  }
});
const Template = ({
  suggestedTabs,
  otherTabs
}) => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <ai-sff-tab-selector
    .suggestedTabs=${suggestedTabs}
    .otherTabs=${otherTabs}
  ></ai-sff-tab-selector>
`;
const Default = Template.bind({});
Default.args = {
  suggestedTabs: [{
    id: "linkedin",
    title: "Firstname Lastname - LinkedIn",
    url: "linkedin.com/in/firstnamelastname",
    favicon: DEFAULT_FAVICON,
    pressed: true
  }, {
    id: "resume",
    title: "My Resume - Firstname Lastname",
    url: "PDF document",
    favicon: DEFAULT_FAVICON,
    pressed: true
  }],
  otherTabs: [{
    id: "airbnb",
    title: "Cabins in Colorado - Airbnb",
    url: "airbnb.com/colorado-cabins",
    favicon: DEFAULT_FAVICON,
    pressed: false
  }, {
    id: "gmail",
    title: "Inbox - name@gmail.com",
    url: "mail.google.com/inbox",
    favicon: DEFAULT_FAVICON,
    pressed: false
  }, {
    id: "mozilla",
    title: "Mozilla",
    url: "mozilla.org",
    favicon: DEFAULT_FAVICON,
    pressed: false
  }, {
    id: "github",
    title: "GitHub",
    url: "github.com",
    favicon: DEFAULT_FAVICON,
    pressed: false
  }, {
    id: "wikipedia",
    title: "Wikipedia",
    url: "wikipedia.org",
    favicon: DEFAULT_FAVICON,
    pressed: false
  }, {
    id: "reddit",
    title: "Reddit",
    url: "reddit.com",
    favicon: DEFAULT_FAVICON,
    pressed: false
  }, {
    id: "youtube",
    title: "YouTube",
    url: "youtube.com",
    favicon: DEFAULT_FAVICON,
    pressed: false
  }, {
    id: "mdn",
    title: "MDN Web Docs",
    url: "developer.mozilla.org",
    favicon: DEFAULT_FAVICON,
    pressed: false
  }]
};

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

/***/ 77814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AiSffTabSelector: () => (/* binding */ AiSffTabSelector)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_ai_sff_tab_selector_ai_sff_tab_selector_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2810);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82242);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(616);
/* harmony import */ var chrome_browser_content_aiwindow_modules_SmartFormFillConstants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26729);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */





/**
 * Interface for choosing tabs to use in Smart Form Fill
 */
class AiSffTabSelector extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.MozLitElement {
  static properties = {
    suggestedTabs: {
      type: Array
    },
    otherTabs: {
      type: Array
    }
  };
  constructor() {
    super();
    this.suggestedTabs = [];
    this.otherTabs = [];
  }
  get #selectedTabIds() {
    return [...this.suggestedTabs, ...this.otherTabs].filter(tab => tab.pressed).map(tab => tab.id);
  }
  #updateTab(tabs, tabId, pressed) {
    return tabs.map(tab => tab.id === tabId ? {
      ...tab,
      pressed
    } : tab);
  }
  #handleTabToggle(event, tabId) {
    const {
      pressed
    } = event.currentTarget;
    this.suggestedTabs = this.#updateTab(this.suggestedTabs, tabId, pressed);
    this.otherTabs = this.#updateTab(this.otherTabs, tabId, pressed);
  }
  #handleAccept() {
    const selectedTabIds = this.#selectedTabIds;
    if (!selectedTabIds.length || selectedTabIds.length > chrome_browser_content_aiwindow_modules_SmartFormFillConstants_mjs__WEBPACK_IMPORTED_MODULE_3__.MAX_SELECTED_TABS) {
      return;
    }
    this.dispatchEvent(new CustomEvent("tabs-selected", {
      bubbles: true,
      composed: true,
      detail: {
        selectedTabIds
      }
    }));
  }
  #handleCancel() {
    this.dispatchEvent(new CustomEvent("cancel", {
      bubbles: true,
      composed: true
    }));
  }
  #renderTabList(tabLabelFluentId, tabs, selectedTabCount, scrollable = false) {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      <moz-box-group type="list" class=${scrollable ? "scrollable" : ""}>
        <moz-box-item slot="header">
          <h2 data-l10n-id=${tabLabelFluentId}></h2>
        </moz-box-item>

        ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.repeat)(tabs, tab => tab.id, tab => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
            <moz-box-item
              .label=${tab.title || tab.url}
              .description=${tab.url}
              .iconSrc=${tab.favicon}
            >
              <moz-toggle
                slot="actions"
                data-l10n-id="ai-smart-form-fill-tab-select-toggle"
                data-l10n-args=${JSON.stringify({
      tabTitle: tab.title
    })}
                .pressed=${tab.pressed}
                .disabled=${selectedTabCount >= chrome_browser_content_aiwindow_modules_SmartFormFillConstants_mjs__WEBPACK_IMPORTED_MODULE_3__.MAX_SELECTED_TABS && !tab.pressed}
                @toggle=${event => this.#handleTabToggle(event, tab.id)}
              ></moz-toggle>
            </moz-box-item>
          `)}
      </moz-box-group>
    `;
  }
  render() {
    const selectedTabCount = this.#selectedTabIds.length;
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_ai_sff_tab_selector_ai_sff_tab_selector_css__WEBPACK_IMPORTED_MODULE_0__}"
      />

      <div class="tab-selector-dialog">
        <h1 data-l10n-id="ai-smart-form-fill-edit-sources"></h1>

        ${this.#renderTabList("ai-smart-form-fill-suggested-tabs", this.suggestedTabs, selectedTabCount)}
        ${this.#renderTabList("ai-smart-form-fill-other-tabs", this.otherTabs, selectedTabCount, true)}

        <moz-button-group>
          <moz-button
            data-l10n-id="ai-smart-form-fill-cancel-tab-select"
            @click=${this.#handleCancel}
          ></moz-button>
          <moz-button
            data-l10n-id="ai-smart-form-fill-accept-tab-select"
            type="primary"
            .disabled=${selectedTabCount == 0 || selectedTabCount > chrome_browser_content_aiwindow_modules_SmartFormFillConstants_mjs__WEBPACK_IMPORTED_MODULE_3__.MAX_SELECTED_TABS}
            @click=${this.#handleAccept}
          ></moz-button>
        </moz-button-group>
      </div>
    `;
  }
}
customElements.define("ai-sff-tab-selector", AiSffTabSelector);

/***/ })

}]);
//# sourceMappingURL=components-ai-sff-tab-selector-ai-sff-tab-selector-stories.cddea87e.iframe.bundle.js.map