"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[8625],{

/***/ 13900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultLetterGrade: () => (/* binding */ DefaultLetterGrade),
/* harmony export */   LetterGradeWithDescription: () => (/* binding */ LetterGradeWithDescription),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11540);
/* harmony import */ var browser_components_shopping_content_letter_grade_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79763);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// eslint-disable-next-line import/no-unresolved


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/Shopping/Letter Grade",
  component: "letter-grade",
  argTypes: {
    letter: {
      control: {
        type: "select",
        options: ["A", "B", "C", "D", "F"]
      }
    },
    showdescription: {
      control: {
        type: "boolean"
      }
    }
  },
  parameters: {
    status: "in-development",
    fluent: "\nshopping-letter-grade-description-ab = Reliable reviews\nshopping-letter-grade-description-c = Only some reliable reviews\nshopping-letter-grade-description-df = Unreliable reviews\nshopping-letter-grade-tooltip =\n  .title = this is tooltip\n    "
  }
});
var Template = function Template(_ref) {
  var letter = _ref.letter,
    showdescription = _ref.showdescription;
  return (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  <letter-grade\n    letter=", "\n    ?showdescription=", "\n  ></letter-grade>\n"])), (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(letter), (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(showdescription));
};
var DefaultLetterGrade = Template.bind({});
DefaultLetterGrade.args = {
  letter: "A",
  showdescription: null
};
var LetterGradeWithDescription = Template.bind({});
LetterGradeWithDescription.args = _objectSpread(_objectSpread({}, DefaultLetterGrade.args), {}, {
  showdescription: true
});

/***/ }),

/***/ 21129:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "letter-grade.4bec18081ae0a9d0845c.css";

/***/ }),

/***/ 79763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var browser_components_shopping_content_letter_grade_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21129);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11540);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48334);

/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*-
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



const VALID_LETTER_GRADE_L10N_IDS = new Map([["A", "shopping-letter-grade-description-ab"], ["B", "shopping-letter-grade-description-ab"], ["C", "shopping-letter-grade-description-c"], ["D", "shopping-letter-grade-description-df"], ["F", "shopping-letter-grade-description-df"]]);
class LetterGrade extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  #descriptionL10N;
  static properties = {
    letter: {
      type: String,
      reflect: true
    },
    showdescription: {
      type: Boolean,
      reflect: true
    }
  };
  get fluentStrings() {
    if (!this._fluentStrings) {
      this._fluentStrings = new Localization(["browser/shopping.ftl"], true);
    }
    return this._fluentStrings;
  }
  descriptionTemplate() {
    if (this.showdescription) {
      return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<p
        id="letter-grade-description"
        data-l10n-id=${this.#descriptionL10N}
      ></p>`;
    }
    return null;
  }
  render() {
    // Do not render if letter is invalid
    if (!VALID_LETTER_GRADE_L10N_IDS.has(this.letter)) {
      return null;
    }
    this.#descriptionL10N = VALID_LETTER_GRADE_L10N_IDS.get(this.letter);
    let tooltipL10NArgs;
    // Do not localize tooltip if using Storybook.
    if (!window.IS_STORYBOOK) {
      const localizedDescription = this.fluentStrings.formatValueSync(this.#descriptionL10N);
      tooltipL10NArgs = `{"letter": "${this.letter}", "description": "${localizedDescription}"}`;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_shopping_content_letter_grade_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <article
        id="letter-grade-wrapper"
        data-l10n-id="shopping-letter-grade-tooltip"
        data-l10n-attrs="title"
        data-l10n-args=${tooltipL10NArgs}
      >
        <p id="letter-grade-term">${this.letter}</p>
        ${this.descriptionTemplate()}
      </article>
    `;
  }
}
customElements.define("letter-grade", LetterGrade);

/***/ })

}]);
//# sourceMappingURL=letter-grade-stories.9accc7f7.iframe.bundle.js.map