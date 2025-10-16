"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[4636],{

/***/ 2309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11540);
/* harmony import */ var _components_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91771);
/* harmony import */ var toolkit_themes_shared_design_system_tokens_table_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86724);
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */




/* DS styles */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Docs/Component Statuses",
  parameters: {
    options: {
      showPanel: false
    },
    docs: {
      source: {
        state: "closed"
      }
    }
  }
});

/**
 * A component that displays the UI Widget Reusable Library components.
 *
 * Features:
 * - Lists all reusable UI components from toolkit/content/widgets
 * - Provides direct links to:
 *   - Individual component
 *   - Component source code in SearchFox
 *   - Related Bugzilla ticket
 * - Shows implementation progress status for each component
 *
 * @see {@link https://bugzilla.mozilla.org/show_bug.cgi?id=1795301} Main tracking bug
 */
var ComponentStatusList = /*#__PURE__*/function (_LitElement) {
  function ComponentStatusList() {
    var _this;
    _classCallCheck(this, ComponentStatusList);
    _this = _callSuper(this, ComponentStatusList);
    _this._components = Array.isArray(_components_json__WEBPACK_IMPORTED_MODULE_1__ === null || _components_json__WEBPACK_IMPORTED_MODULE_1__ === void 0 ? void 0 : _components_json__WEBPACK_IMPORTED_MODULE_1__.items) ? _components_json__WEBPACK_IMPORTED_MODULE_1__.items : [];
    return _this;
  }
  _inherits(ComponentStatusList, _LitElement);
  return _createClass(ComponentStatusList, [{
    key: "render",
    value: function render() {
      return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <link rel=\"stylesheet\" href=", " />\n      <header>\n        <h1>Component Statuses</h1>\n        <p>\n          Tracking\n          <a\n            href=\"https://bugzilla.mozilla.org/show_bug.cgi?id=1795301\"\n            target=\"_blank\"\n            rel=\"noreferrer\"\n            >reusable components</a\n          >\n          from\n          <code>toolkit/content/widgets</code>.\n        </p>\n      </header>\n      <div class=\"table-wrapper\">", "</div>\n    "])), toolkit_themes_shared_design_system_tokens_table_css__WEBPACK_IMPORTED_MODULE_2__, this._renderTable());
    }

    /********  Helpers *********/
    // Get story Id href
  }, {
    key: "_storyHrefFromId",
    value: function _storyHrefFromId(storyId) {
      return storyId ? "/?path=/story/".concat(storyId) : "#";
    }
  }, {
    key: "_renderLinkGroup",
    value: function _renderLinkGroup(it) {
      var storyHref = this._storyHrefFromId(it.storyId);
      var links = [["Story", storyHref, {
        top: true
      }]];
      if (it.sourceUrl) {
        links.push(["Source", it.sourceUrl, {
          top: false
        }]);
      }
      var bugUrl = it.bugUrl;
      if (bugUrl && /bugzilla\.mozilla\.org/.test(bugUrl)) {
        links.push(["Bugzilla", bugUrl, {
          top: false
        }]);
      }
      return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      ", "\n    "])), links.map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 3),
          label = _ref2[0],
          href = _ref2[1],
          _ref2$ = _ref2[2],
          opts = _ref2$ === void 0 ? {} : _ref2$;
        return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n          <a\n            href=", "\n            rel=\"noreferrer\"\n            target=", "\n          >\n            ", "\n          </a>\n        "])), href, opts.top ? "_top" : "_blank", label);
      }));
    }
  }, {
    key: "_renderTable",
    value: function _renderTable() {
      var _this2 = this;
      return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      <table class=\"token-table\">\n        <thead>\n          <tr>\n            <th>Component</th>\n            <th>Status</th>\n            <th>Links</th>\n          </tr>\n        </thead>\n        <tbody>\n          ", "\n        </tbody>\n      </table>\n    "])), this._components.map(function (it) {
        var _it$status;
        return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n              <tr>\n                <td>\n                  <a\n                    href=", "\n                    target=\"_top\"\n                    rel=\"noreferrer\"\n                  >\n                    ", "\n                  </a>\n                </td>\n                <td>", "</td>\n                <td>", "</td>\n              </tr>\n            "])), _this2._storyHrefFromId(it.storyId), it.component, (_it$status = it.status) !== null && _it$status !== void 0 ? _it$status : "unknown", _this2._renderLinkGroup(it));
      }));
    }
  }]);
}(chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.LitElement);
_defineProperty(ComponentStatusList, "properties", {
  _components: {
    state: true
  }
});
_defineProperty(ComponentStatusList, "styles", (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    tr td:first-of-type {\n      color-scheme: unset;\n    }\n\n    tr td {\n      border-bottom-color: var(--border-color);\n    }\n\n    /* the button look */\n    a {\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      padding: var(--space-xsmall) var(--space-small);\n      border: var(--border-width) solid var(--border-color);\n      border-radius: var(--border-radius-small);\n      background: var(--button-background-color);\n      color: var(--link-color); /* prevent visited purple */\n      text-decoration: none;\n      line-height: 1;\n      min-inline-size: 0;\n      cursor: pointer;\n    }\n\n    /* hover/active */\n    a:hover {\n      background: var(--button-background-color-hover);\n    }\n\n    /* arrow only on external buttons */\n    a[target=\"_blank\"]::after {\n      content: \"\u2197\" !important; /* wins over any earlier content:none */\n      margin-inline-start: var(--space-small);\n      font-size: var(--font-size-small);\n      line-height: 1;\n      opacity: 0.8;\n    }\n  "]))));
customElements.define("component-status-list", ComponentStatusList);
var Default = function Default() {
  return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["<component-status-list></component-status-list>"])));
};

/***/ }),

/***/ 86724:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "tokens-table.36f0d82b0329fdd828ba.css";

/***/ }),

/***/ 91771:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"generatedAt":"2025-10-16T06:24:34.332Z","count":28,"items":[{"component":"moz-badge","title":"UI Widgets/Badge","status":"in-development","storyId":"ui-widgets-badge--default","storyUrl":"https://firefoxux.github.io/firefox-desktop-components/?path=/story/ui-widgets-badge--default","sourceUrl":"https://searchfox.org/firefox-main/source/toolkit/content/widgets/moz-badge","bugUrl":"https://bugzilla.mozilla.org/show_bug.cgi?id=1987750"},{"component":"moz-box-button","title":"UI Widgets/Box Button","status":"in-development","storyId":"ui-widgets-box-button--default","storyUrl":"https://firefoxux.github.io/firefox-desktop-components/?path=/story/ui-widgets-box-button--default","sourceUrl":"https://searchfox.org/firefox-main/source/toolkit/content/widgets/moz-box-button","bugUrl":"https://bugzilla.mozilla.org/show_bug.cgi?id=1855803"},{"component":"moz-box-group","title":"UI Widgets/Box Group","status":"in-development","storyId":"ui-widgets-box-group--default","storyUrl":"https://firefoxux.github.io/firefox-desktop-components/?path=/story/ui-widgets-box-group--default","sourceUrl":"https://searchfox.org/firefox-main/source/toolkit/content/widgets/moz-box-group","bugUrl":"https://bugzilla.mozilla.org/show_bug.cgi?id=1941000"},{"component":"moz-box-item","title":"UI Widgets/Box Item","status":"in-development","storyId":"ui-widgets-box-item--default","storyUrl":"https://firefoxux.github.io/firefox-desktop-components/?path=/story/ui-widgets-box-item--default","sourceUrl":"https://searchfox.org/firefox-main/source/toolkit/content/widgets/moz-box-item","bugUrl":"https://bugzilla.mozilla.org/show_bug.cgi?id=1956560"},{"component":"moz-box-link","title":"UI Widgets/Box Link","status":"in-development","storyId":"ui-widgets-box-link--default","storyUrl":"https://firefoxux.github.io/firefox-desktop-components/?path=/story/ui-widgets-box-link--default","sourceUrl":"https://searchfox.org/firefox-main/source/toolkit/content/widgets/moz-box-link","bugUrl":"https://bugzilla.mozilla.org/show_bug.cgi?id=1941939"},{"component":"moz-breadcrumb-group","title":"UI Widgets/Breadcrumb Group","status":"in-development","storyId":"ui-widgets-breadcrumb-group--default","storyUrl":"https://firefoxux.github.io/firefox-desktop-components/?path=/story/ui-widgets-breadcrumb-group--default","sourceUrl":"https://searchfox.org/firefox-main/source/toolkit/content/widgets/moz-breadcrumb-group","bugUrl":"https://bugzilla.mozilla.org/show_bug.cgi?id=1948410"},{"component":"moz-button","title":"UI Widgets/Button","status":"stable","storyId":"ui-widgets-button--default","storyUrl":"https://firefoxux.github.io/firefox-desktop-components/?path=/story/ui-widgets-button--default","sourceUrl":"https://searchfox.org/firefox-main/source/toolkit/content/widgets/moz-button","bugUrl":"https://bugzilla.mozilla.org/show_bug.cgi?id=1855803"},{"component":"moz-button-group","title":"UI Widgets/Button Group","status":"stable","storyId":"ui-widgets-button-group--default","storyUrl":"https://firefoxux.github.io/firefox-desktop-components/?path=/story/ui-widgets-button-group--default","sourceUrl":"https://searchfox.org/firefox-main/source/toolkit/content/widgets/moz-button-group","bugUrl":"https://bugzilla.mozilla.org/show_bug.cgi?id=1801325"},{"component":"moz-card","title":"UI Widgets/Card","status":"stable","storyId":"ui-widgets-card--default","storyUrl":"https://firefoxux.github.io/firefox-desktop-components/?path=/story/ui-widgets-card--default","sourceUrl":"https://searchfox.org/firefox-main/source/toolkit/content/widgets/moz-card","bugUrl":"https://bugzilla.mozilla.org/show_bug.cgi?id=1846844"},{"component":"moz-checkbox","title":"UI Widgets/Checkbox","status":"in-development","storyId":"ui-widgets-checkbox--default","storyUrl":"https://firefoxux.github.io/firefox-desktop-components/?path=/story/ui-widgets-checkbox--default","sourceUrl":"https://searchfox.org/firefox-main/source/toolkit/content/widgets/moz-checkbox","bugUrl":"https://bugzilla.mozilla.org/show_bug.cgi?id=1894485"},{"component":"moz-fieldset","title":"UI Widgets/Fieldset","status":"in-development","storyId":"ui-widgets-fieldset--default","storyUrl":"https://firefoxux.github.io/firefox-desktop-components/?path=/story/ui-widgets-fieldset--default","sourceUrl":"https://searchfox.org/firefox-main/source/toolkit/content/widgets/moz-fieldset","bugUrl":"https://bugzilla.mozilla.org/show_bug.cgi?id=1980498"},{"component":"moz-five-star","title":"UI Widgets/Five Star","status":"in-development","storyId":"ui-widgets-five-star--default","storyUrl":"https://firefoxux.github.io/firefox-desktop-components/?path=/story/ui-widgets-five-star--default","sourceUrl":"https://searchfox.org/firefox-main/source/toolkit/content/widgets/moz-five-star","bugUrl":"https://bugzilla.mozilla.org/show_bug.cgi?id=1856385"},{"component":"moz-input-color","title":"UI Widgets/Input Color","status":"in-development","storyId":"ui-widgets-input-color--default","storyUrl":"https://firefoxux.github.io/firefox-desktop-components/?path=/story/ui-widgets-input-color--default","sourceUrl":"https://searchfox.org/firefox-main/source/toolkit/content/widgets/moz-input-color","bugUrl":"https://bugzilla.mozilla.org/show_bug.cgi?id=1889950"},{"component":"moz-input-folder","title":"UI Widgets/Input Folder","status":"in-development","storyId":"ui-widgets-input-folder--default","storyUrl":"https://firefoxux.github.io/firefox-desktop-components/?path=/story/ui-widgets-input-folder--default","sourceUrl":"https://searchfox.org/firefox-main/source/toolkit/content/widgets/moz-input-folder","bugUrl":"https://bugzilla.mozilla.org/show_bug.cgi?id=1941432"},{"component":"moz-input-password","title":"UI Widgets/Input Password","status":"in-development","storyId":"ui-widgets-input-password--default","storyUrl":"https://firefoxux.github.io/firefox-desktop-components/?path=/story/ui-widgets-input-password--default","sourceUrl":"https://searchfox.org/firefox-main/source/toolkit/content/widgets/moz-input-password","bugUrl":"https://bugzilla.mozilla.org/show_bug.cgi?id=1941060"},{"component":"moz-input-search","title":"UI Widgets/Input Search","status":"in-development","storyId":"ui-widgets-input-search--default","storyUrl":"https://firefoxux.github.io/firefox-desktop-components/?path=/story/ui-widgets-input-search--default","sourceUrl":"https://searchfox.org/firefox-main/source/toolkit/content/widgets/moz-input-search","bugUrl":"https://bugzilla.mozilla.org/show_bug.cgi?id=1801329"},{"component":"moz-input-text","title":"UI Widgets/Input Text","status":"in-development","storyId":"ui-widgets-input-text--default","storyUrl":"https://firefoxux.github.io/firefox-desktop-components/?path=/story/ui-widgets-input-text--default","sourceUrl":"https://searchfox.org/firefox-main/source/toolkit/content/widgets/moz-input-text","bugUrl":"https://bugzilla.mozilla.org/show_bug.cgi?id=1912089"},{"component":"moz-label","title":"UI Widgets/Label","status":"stable","storyId":"ui-widgets-label--accesskey","storyUrl":"https://firefoxux.github.io/firefox-desktop-components/?path=/story/ui-widgets-label--accesskey","sourceUrl":"https://searchfox.org/firefox-main/source/toolkit/content/widgets/moz-label","bugUrl":"https://bugzilla.mozilla.org/show_bug.cgi?id=1878744"},{"component":"moz-message-bar","title":"UI Widgets/Message Bar","status":"stable","storyId":"ui-widgets-message-bar--default","storyUrl":"https://firefoxux.github.io/firefox-desktop-components/?path=/story/ui-widgets-message-bar--default","sourceUrl":"https://searchfox.org/firefox-main/source/toolkit/content/widgets/moz-message-bar","bugUrl":"https://bugzilla.mozilla.org/show_bug.cgi?id=1837469"},{"component":"moz-page-nav","title":"UI Widgets/Page Nav","status":"in-development","storyId":"ui-widgets-page-nav--default","storyUrl":"https://firefoxux.github.io/firefox-desktop-components/?path=/story/ui-widgets-page-nav--default","sourceUrl":"https://searchfox.org/firefox-main/source/toolkit/content/widgets/moz-page-nav","bugUrl":"https://bugzilla.mozilla.org/show_bug.cgi?id=1878042"},{"component":"moz-promo","title":"UI Widgets/Promo","status":"in-development","storyId":"ui-widgets-promo--default","storyUrl":"https://firefoxux.github.io/firefox-desktop-components/?path=/story/ui-widgets-promo--default","sourceUrl":"https://searchfox.org/firefox-main/source/toolkit/content/widgets/moz-promo","bugUrl":"https://bugzilla.mozilla.org/show_bug.cgi?id=1966422"},{"component":"moz-radio-group","title":"UI Widgets/Radio Group","status":"in-development","storyId":"ui-widgets-radio-group--default","storyUrl":"https://firefoxux.github.io/firefox-desktop-components/?path=/story/ui-widgets-radio-group--default","sourceUrl":"https://searchfox.org/firefox-main/source/toolkit/content/widgets/moz-radio-group","bugUrl":"https://bugzilla.mozilla.org/show_bug.cgi?id=1894497"},{"component":"moz-reorderable-list","title":"UI Widgets/Reorderable List","status":"in-development","storyId":"ui-widgets-reorderable-list--default","storyUrl":"https://firefoxux.github.io/firefox-desktop-components/?path=/story/ui-widgets-reorderable-list--default","sourceUrl":"https://searchfox.org/firefox-main/source/toolkit/content/widgets/moz-reorderable-list","bugUrl":"https://bugzilla.mozilla.org/show_bug.cgi?id=1828933"},{"component":"moz-select","title":"UI Widgets/Select","status":"in-development","storyId":"ui-widgets-select--default","storyUrl":"https://firefoxux.github.io/firefox-desktop-components/?path=/story/ui-widgets-select--default","sourceUrl":"https://searchfox.org/firefox-main/source/toolkit/content/widgets/moz-select","bugUrl":"https://bugzilla.mozilla.org/show_bug.cgi?id=1931441"},{"component":"moz-support-link","title":"UI Widgets/Support Link","status":"stable","storyId":"ui-widgets-support-link--withamourl","storyUrl":"https://firefoxux.github.io/firefox-desktop-components/?path=/story/ui-widgets-support-link--withamourl","sourceUrl":"https://searchfox.org/firefox-main/source/toolkit/content/widgets/moz-support-link","bugUrl":"https://bugzilla.mozilla.org/show_bug.cgi?id=1801924"},{"component":"moz-toggle","title":"UI Widgets/Toggle","status":"stable","storyId":"ui-widgets-toggle--default","storyUrl":"https://firefoxux.github.io/firefox-desktop-components/?path=/story/ui-widgets-toggle--default","sourceUrl":"https://searchfox.org/firefox-main/source/toolkit/content/widgets/moz-toggle","bugUrl":"https://bugzilla.mozilla.org/show_bug.cgi?id=1799466"},{"component":"moz-visual-picker","title":"UI Widgets/Visual Picker","status":"in-development","storyId":"ui-widgets-visual-picker--default","storyUrl":"https://firefoxux.github.io/firefox-desktop-components/?path=/story/ui-widgets-visual-picker--default","sourceUrl":"https://searchfox.org/firefox-main/source/toolkit/content/widgets/moz-visual-picker","bugUrl":"https://bugzilla.mozilla.org/show_bug.cgi?id=1941063"},{"component":"panel-list","title":"UI Widgets/Panel List","status":"stable","storyId":"ui-widgets-panel-list--simple","storyUrl":"https://firefoxux.github.io/firefox-desktop-components/?path=/story/ui-widgets-panel-list--simple","sourceUrl":"https://searchfox.org/firefox-main/source/toolkit/content/widgets/panel-list","bugUrl":"https://bugzilla.mozilla.org/show_bug.cgi?id=1811282"}]}');

/***/ })

}]);
//# sourceMappingURL=component-status-component-status-stories.7897f633.iframe.bundle.js.map