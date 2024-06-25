"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[273],{

/***/ 90430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADDON_ID": () => (/* reexport safe */ _chunk_WFFRPTHA_mjs__WEBPACK_IMPORTED_MODULE_0__.ADDON_ID),
/* harmony export */   "CLEAR_ID": () => (/* reexport safe */ _chunk_WFFRPTHA_mjs__WEBPACK_IMPORTED_MODULE_0__.CLEAR_ID),
/* harmony export */   "CYCLIC_KEY": () => (/* reexport safe */ _chunk_WFFRPTHA_mjs__WEBPACK_IMPORTED_MODULE_0__.CYCLIC_KEY),
/* harmony export */   "EVENT_ID": () => (/* reexport safe */ _chunk_WFFRPTHA_mjs__WEBPACK_IMPORTED_MODULE_0__.EVENT_ID),
/* harmony export */   "PANEL_ID": () => (/* reexport safe */ _chunk_WFFRPTHA_mjs__WEBPACK_IMPORTED_MODULE_0__.PANEL_ID),
/* harmony export */   "PARAM_KEY": () => (/* reexport safe */ _chunk_WFFRPTHA_mjs__WEBPACK_IMPORTED_MODULE_0__.PARAM_KEY),
/* harmony export */   "action": () => (/* reexport safe */ _chunk_WFFRPTHA_mjs__WEBPACK_IMPORTED_MODULE_0__.action),
/* harmony export */   "actions": () => (/* reexport safe */ _chunk_WFFRPTHA_mjs__WEBPACK_IMPORTED_MODULE_0__.actions),
/* harmony export */   "config": () => (/* reexport safe */ _chunk_WFFRPTHA_mjs__WEBPACK_IMPORTED_MODULE_0__.config),
/* harmony export */   "configureActions": () => (/* reexport safe */ _chunk_WFFRPTHA_mjs__WEBPACK_IMPORTED_MODULE_0__.configureActions)
/* harmony export */ });
/* harmony import */ var _chunk_WFFRPTHA_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25067);



/***/ }),

/***/ 49945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FxviewSearchTextbox)
/* harmony export */ });
/* harmony import */ var browser_components_firefoxview_fxview_search_textbox_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50746);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73689);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



const SEARCH_DEBOUNCE_RATE_MS = 500;

/**
 * A search box that displays a search icon and is clearable. Updates to the
 * search query trigger a `fxview-search-textbox-query` event with the current
 * query value.
 *
 * There is no actual searching done here. That needs to be implemented by the
 * `fxview-search-textbox-query` event handler. `searchTabList()` from
 * `search-helpers.mjs` can be used as a starting point.
 *
 * @property {string} placeholder
 *   The placeholder text for the search box.
 * @property {number} size
 *   The width (number of characters) of the search box.
 * @property {string} pageName
 *   The hash for the page name that the search input is located on.
 */
class FxviewSearchTextbox extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    placeholder: {
      type: String
    },
    size: {
      type: Number
    },
    pageName: {
      type: String
    }
  };
  static queries = {
    clearButton: ".clear-icon",
    input: "input"
  };
  #query = "";
  #searchTimer;
  disconnectedCallback() {
    super.disconnectedCallback();
    clearTimeout(this.#searchTimer);
  }
  focus() {
    this.input.focus();
  }
  blur() {
    this.input.blur();
  }
  onInput(event) {
    this.#query = event.target.value.trim();
    event.preventDefault();
    this.onSearch();
  }

  /**
   * Handler for query updates from keyboard input, and textbox clears from 'X'
   * button.
   */
  onSearch() {
    clearTimeout(this.#searchTimer);
    this.#searchTimer = setTimeout(() => this.#dispatchQueryEvent(), SEARCH_DEBOUNCE_RATE_MS);
    this.requestUpdate();
  }
  clear(event) {
    if (event.type == "click" || event.type == "keydown" && event.code == "Enter" || event.type == "keydown" && event.code == "Space") {
      this.#query = "";
      event.preventDefault();
      this.onSearch();
    }
  }
  #dispatchQueryEvent() {
    window.scrollTo(0, 0);
    this.dispatchEvent(new CustomEvent("fxview-search-textbox-query", {
      bubbles: true,
      composed: true,
      detail: {
        query: this.#query
      }
    }));
    if (!window.IS_STORYBOOK) {
      Services.telemetry.recordEvent("firefoxview_next", "search_initiated", "search", null, {
        page: this.pageName
      });
    }
  }
  render() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
    <link rel="stylesheet" href="${browser_components_firefoxview_fxview_search_textbox_css__WEBPACK_IMPORTED_MODULE_0__}" />
    <div class="search-container">
      <div class="search-icon"></div>
      <input
        type="search"
        .placeholder=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.placeholder)}
        .size=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.size)}
        .value=${this.#query}
        @input=${this.onInput}
      ></input>
      <div
        class="clear-icon"
        role="button"
        tabindex="0"
        ?hidden=${!this.#query}
        @click=${this.clear}
        @keydown=${this.clear}
        data-l10n-id="firefoxview-search-text-box-clear-button"
      ></div>
    </div>`;
  }
}
customElements.define("fxview-search-textbox", FxviewSearchTextbox);

/***/ }),

/***/ 61163:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Default": () => (/* binding */ Default),
/* harmony export */   "SearchBoxWithCustomSize": () => (/* binding */ SearchBoxWithCustomSize),
/* harmony export */   "SearchBoxWithPlaceholder": () => (/* binding */ SearchBoxWithPlaceholder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90430);
/* harmony import */ var lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45717);
/* harmony import */ var browser_components_firefoxview_fxview_search_textbox_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49945);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/Firefox View/Search Textbox",
  component: "fxview-search-textbox",
  argTypes: {
    size: {
      control: {
        type: "number",
        min: 1,
        step: 1
      }
    }
  }
});
var Template = function Template(_ref) {
  var placeholder = _ref.placeholder,
    size = _ref.size;
  return (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  <style>\n    fxview-search-textbox {\n      --fxview-border: var(--in-content-border-color);\n      --fxview-text-primary-color: var(--in-content-page-color);\n      --fxview-element-background-hover: var(\n        --in-content-button-background-hover\n      );\n      --fxview-text-color-hover: var(--in-content-button-text-color-hover);\n    }\n  </style>\n  <fxview-search-textbox\n    placeholder=", "\n    size=", "\n    @fxview-search-textbox-query=", "\n  ></fxview-search-textbox>\n"])), (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(placeholder), (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(size), (0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)("fxview-search-textbox-query"));
};
var Default = Template.bind({});
Default.args = {
  placeholder: ""
};
var SearchBoxWithPlaceholder = Template.bind({});
SearchBoxWithPlaceholder.args = _objectSpread(_objectSpread({}, Default.args), {}, {
  placeholder: "Search"
});
var SearchBoxWithCustomSize = Template.bind({});
SearchBoxWithCustomSize.args = _objectSpread(_objectSpread({}, Default.args), {}, {
  size: 32
});

/***/ }),

/***/ 50746:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fxview-search-textbox.b66aa1bb366f31e196c7.css";

/***/ })

}]);
//# sourceMappingURL=fxview-search-textbox-stories.bb9f9a47.iframe.bundle.js.map