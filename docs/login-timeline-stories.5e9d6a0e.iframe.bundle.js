"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1890],{

/***/ 13492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Timeline)
/* harmony export */ });
/* harmony import */ var browser_components_aboutlogins_content_components_login_timeline_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48514);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



class Timeline extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static get properties() {
    return {
      history: {
        type: Array
      }
    };
  }
  constructor() {
    super();
    this.history = [];
  }
  render() {
    this.history = this.history.filter(historyPoint => historyPoint.time);
    this.history.sort((a, b) => a.time - b.time);
    let columns = "auto";

    // Add each history event to the timeline
    let points = this.history.map((entry, index) => {
      if (index > 0) {
        // add a gap between previous point and current one
        columns += ` ${entry.time - this.history[index - 1].time}fr auto`;
      }
      let columnNumber = 2 * index + 1;
      let styles = (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.styleMap)({
        gridColumn: columnNumber
      });
      return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
        <svg
          style=${styles}
          class="point"
          viewBox="0 0 300 150"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="150" cy="75" r="75" />
        </svg>
        <div
          style=${styles}
          class="date"
          data-l10n-id="login-item-timeline-point-date"
          data-l10n-args=${JSON.stringify({
        datetime: entry.time
      })}
        ></div>
        <div
          style=${styles}
          class="action"
          data-l10n-id=${entry.actionId}
        ></div>
      `;
    });
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aboutlogins_content_components_login_timeline_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <div
        class="timeline ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.classMap)({
      empty: !this.history.length
    })}"
        style=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.styleMap)({
      gridTemplateColumns: columns
    })}
      >
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        ${points}
      </div>
    `;
  }
}
customElements.define("login-timeline", Timeline);

/***/ }),

/***/ 48514:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "login-timeline.9667b6f14d8b34a25326.css";

/***/ }),

/***/ 76970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllSameDayTimeline: () => (/* binding */ AllSameDayTimeline),
/* harmony export */   EmptyTimeline: () => (/* binding */ EmptyTimeline),
/* harmony export */   TypicalTimeline: () => (/* binding */ TypicalTimeline),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var _aboutlogins_content_components_login_timeline_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13492);
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


// Imported for side-effects.

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/Credential Management/Timeline",
  component: "login-timeline"
});
window.MozXULElement.insertFTLIfNeeded("browser/aboutLogins.ftl");
var Template = function Template(_ref) {
  var historyItems = _ref.historyItems;
  return (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  <login-timeline .history=", "></login-timeline>\n"])), historyItems);
};
var ACTION_ID_CREATED = "login-item-timeline-action-created";
var ACTION_ID_UPDATED = "login-item-timeline-action-updated";
var ACTION_ID_USED = "login-item-timeline-action-used";
var EmptyTimeline = Template.bind({});
EmptyTimeline.args = {
  historyItems: []
};
var TypicalTimeline = Template.bind({});
TypicalTimeline.args = {
  historyItems: [{
    actionId: ACTION_ID_CREATED,
    time: 1463526500267
  }, {
    actionId: ACTION_ID_UPDATED,
    time: 1653621219569
  }, {
    actionId: ACTION_ID_USED,
    time: 1561813190300
  }]
};
var AllSameDayTimeline = Template.bind({});
AllSameDayTimeline.args = {
  historyItems: [{
    actionId: ACTION_ID_CREATED,
    time: 1463526500267
  }, {
    actionId: ACTION_ID_UPDATED,
    time: 1463526500267
  }, {
    actionId: ACTION_ID_USED,
    time: 1463526500267
  }]
};

/***/ })

}]);
//# sourceMappingURL=login-timeline-stories.5e9d6a0e.iframe.bundle.js.map