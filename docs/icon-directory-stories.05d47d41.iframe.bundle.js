"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[5106],{

/***/ 99678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var toolkit_themes_shared_design_system_src_text_and_typography_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44311);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var _storybook_chrome_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82370);
/* harmony import */ var _storybook_chrome_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_storybook_chrome_map_js__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */




/**
 * @import MozMessageBar from "chrome://global/content/elements/moz-message-bar.mjs"
 * @import MozToggle from "chrome://global/content/elements/moz-toggle.mjs"
 *
 * @typedef {string} FolderPath An in-tree folder path that has relevant files.
 * @typedef {string} FilePath An in-tree path to a file.
 * @typedef {string} FileName An in-tree file name (leaf name e.g. arrow.svg).
 * @typedef {string} ChromeUri A chrome:// URI
 * @typedef {{ chromeUri: ChromeUri, fileName: FileName, filePath: FilePath }} FileInfo
 * Info about a file in the chrome-map.
 * @typedef {Map<FolderPath, FileInfo[]>} BundleFileInfoMap
 * Map of chrome URI bundle prefix to file info objects.
 * @typedef {Values<IconSize>} IconSizeValue
 */

var SUCCESS_MESSAGE_DURATION_MS = 3000;
var IconSize = Object.freeze({
  Normalize: "normalize",
  Full: "full"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Docs/Icon Directory",
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
 * Group the icons for display.
 *
 * @param {BundleFileInfoMap} bundleFileInfoMap
 * @returns {BundleFileInfoMap}
 */
function prioritizeGroups(bundleFileInfoMap) {
  /** @type {FolderPath[]} */
  var bundleGroupings = ["browser/themes", "toolkit/themes", "browser/components", "toolkit/components"];
  var newGroups = new Map(bundleGroupings.map(
  /**
   * @param {FolderPath} bg
   * @returns {[FolderPath, FileInfo[]]}
   */
  function (bg) {
    return [bg, []];
  }));
  var _iterator = _createForOfIteratorHelper(bundleFileInfoMap.keys()),
    _step;
  try {
    var _loop = function _loop() {
      var _newGroups$get;
      var group = _step.value;
      var bundleGroup = bundleGroupings.find(function (bg) {
        return group.startsWith(bg);
      }) || group;
      if (!newGroups.has(bundleGroup)) {
        newGroups.set(bundleGroup, []);
      }
      (_newGroups$get = newGroups.get(bundleGroup)).push.apply(_newGroups$get, _toConsumableArray(bundleFileInfoMap.get(group)));
    };
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return newGroups;
}

/**
 * Build icon data from chrome-map, organizing icons by directory.
 *
 * @returns {BundleFileInfoMap}
 */
function buildIconData() {
  var _chromeMap = _slicedToArray((_storybook_chrome_map_js__WEBPACK_IMPORTED_MODULE_2___default()), 3),
    prefixMap = _chromeMap[0],
    sourceMap = _chromeMap[2];

  // Build reverse lookup: bundleDir -> chromePrefix
  var reversePrefixMap = new Map();
  for (var _i = 0, _Object$entries = Object.entries(prefixMap); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      chromePrefix = _Object$entries$_i[0],
      bundleDirs = _Object$entries$_i[1];
    var _iterator2 = _createForOfIteratorHelper(bundleDirs),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var dir = _step2.value;
        reversePrefixMap.set(dir, chromePrefix);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }

  /**
   * @param {FilePath} bundlePath
   * @returns {ChromeUri | null}
   */
  function resolveToChrome(bundlePath) {
    var dirPath = bundlePath;
    while (dirPath.includes("/")) {
      var lastSlash = dirPath.lastIndexOf("/");
      var _dir = dirPath.substring(0, lastSlash);
      var remainder = bundlePath.substring(_dir.length + 1);
      var _chromePrefix = reversePrefixMap.get(_dir);
      if (_chromePrefix) {
        return _chromePrefix + remainder;
      }
      dirPath = _dir;
    }
    return null;
  }

  /** @type {BundleFileInfoMap} */
  var bundleFileInfoMap = new Map();
  for (var _i2 = 0, _Object$entries2 = Object.entries(sourceMap); _i2 < _Object$entries2.length; _i2++) {
    var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
      bundlePath = _Object$entries2$_i[0],
      _Object$entries2$_i$ = _slicedToArray(_Object$entries2$_i[1], 1),
      srcPath = _Object$entries2$_i$[0];
    if (!bundlePath.endsWith(".svg")) {
      continue;
    }
    var chromeUri = resolveToChrome(bundlePath);
    if (!chromeUri || !(chromeUri.startsWith("chrome://browser/") || chromeUri.startsWith("chrome://global/"))) {
      continue;
    }
    var lastSlash = srcPath.lastIndexOf("/");
    var bundleDir = srcPath.substring(0, lastSlash);
    var fileName = srcPath.substring(lastSlash + 1);
    if (!bundleFileInfoMap.has(bundleDir)) {
      bundleFileInfoMap.set(bundleDir, []);
    }
    bundleFileInfoMap.get(bundleDir).push({
      chromeUri: chromeUri,
      fileName: fileName,
      filePath: srcPath
    });
  }
  var _iterator3 = _createForOfIteratorHelper(bundleFileInfoMap.values()),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var icons = _step3.value;
      icons.sort(function (a, b) {
        return a.fileName.localeCompare(b.fileName);
      });
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return prioritizeGroups(bundleFileInfoMap);
}
var iconData = buildIconData();

/**
 * Convert RGB color string to hex format.
 *
 * @param {string} rgb A CSS RGB value.
 * @returns {string} A CSS hex value.
 */
function rgbToHex(rgb) {
  var match = rgb.match(/\d+/g);
  if (!match || match.length < 3) {
    return "#000000";
  }
  return "#" + match.slice(0, 3).map(function (n) {
    return parseInt(n, 10).toString(16).padStart(2, "0");
  }).join("");
}

/**
 * Browsable, searchable directory of SVG icons available in the Firefox
 * codebase, grouped by source directory with chrome:// URI previews.
 *
 * @property {string} filter Current search filter text
 * @property {string} fillColor Hex color for icon fill
 * @property {string} strokeColor Hex color for icon stroke
 * @property {IconSizeValue} iconSize Icon display size mode
 */
var IconDirectory = /*#__PURE__*/function (_LitElement) {
  function IconDirectory() {
    var _this;
    _classCallCheck(this, IconDirectory);
    _this = _callSuper(this, IconDirectory);
    _this.filter = "";
    _this.fillColor = "";
    _this.strokeColor = "";
    /** @type {IconSizeValue} */
    _this.iconSize = IconSize.Normalize;
    /** @type {number | undefined} */
    _this._successMessageTimeout = undefined;
    return _this;
  }
  _inherits(IconDirectory, _LitElement);
  return _createClass(IconDirectory, [{
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _superPropGet(IconDirectory, "disconnectedCallback", this, 3)([]);
      clearTimeout(this._successMessageTimeout);
    }

    /**
     * Initialize color values from computed styles on first render.
     */
  }, {
    key: "firstUpdated",
    value: function firstUpdated() {
      var probe = this.renderRoot.querySelector("#color-probe");
      var probeStyles = getComputedStyle(probe);
      this.fillColor = rgbToHex(probeStyles.fill);
      this.strokeColor = rgbToHex(probeStyles.stroke);
    }

    /** @type {MozMessageBar} */
  }, {
    key: "successMessageBar",
    get: function get() {
      return this.renderRoot.querySelector("#success-message");
    }

    /** @param {CustomEvent & { query: string }} e */
  }, {
    key: "handleSearch",
    value: function handleSearch(e) {
      this.filter = e.detail.query.toLowerCase();
    }

    /** @param {InputEvent & { target: HTMLInputElement }} e */
  }, {
    key: "handleFillChange",
    value: function handleFillChange(e) {
      this.fillColor = e.target.value;
      this.style.setProperty("--icon-item-fill", this.fillColor);
    }

    /** @param {InputEvent & { target: HTMLInputElement }} e */
  }, {
    key: "handleStrokeChange",
    value: function handleStrokeChange(e) {
      this.strokeColor = e.target.value;
      this.style.setProperty("--icon-item-stroke", this.strokeColor);
    }

    /** @param {MouseEvent & { target: HTMLButtonElement }} e */
  }, {
    key: "handleCopy",
    value: (function () {
      var _handleCopy = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
        var target;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              target = _ref.target;
              _context.prev = 1;
              this.hideSuccessMessage(true);
              _context.next = 5;
              return navigator.clipboard.writeText(target.dataset.url);
            case 5:
              this.showSuccessMessage(target);
              _context.next = 11;
              break;
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              console.error("Failed to copy to clipboard:", _context.t0);
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[1, 8]]);
      }));
      function handleCopy(_x) {
        return _handleCopy.apply(this, arguments);
      }
      return handleCopy;
    }()
    /**
     * Show the success message popover, then hide it after SUCCESS_MESSAGE_DURATION_MS.
     *
     * @param {HTMLElement} source The element that triggered the success message.
     */
    )
  }, {
    key: "showSuccessMessage",
    value: function showSuccessMessage(source) {
      var _this2 = this;
      this.successMessageBar.removeAttribute("hiding");
      this.successMessageBar.showPopover({
        source: source
      });
      clearTimeout(this._successMessageTimeout);
      this._successMessageTimeout = setTimeout(function () {
        _this2.hideSuccessMessage();
      }, SUCCESS_MESSAGE_DURATION_MS);
    }

    /**
     * Hide the success message popover with fade-out animation.
     *
     * @param {boolean} instant If we should instantly hide (default: false).
     */
  }, {
    key: "hideSuccessMessage",
    value: function hideSuccessMessage() {
      var _this3 = this;
      var instant = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (instant) {
        this.successMessageBar.hidePopover();
        return;
      }
      this.successMessageBar.setAttribute("hiding", "");
      this.successMessageBar.addEventListener("transitionend", function () {
        _this3.successMessageBar.hidePopover();
        _this3.successMessageBar.removeAttribute("hiding");
      }, {
        once: true
      });
    }

    /**
     * Filter icons based on current search query.
     *
     * @param {FileInfo[]} icons
     * @returns {FileInfo[]}
     */
  }, {
    key: "filteredIcons",
    value: function filteredIcons(icons) {
      var _this4 = this;
      if (!this.filter) {
        return icons;
      }
      return icons.filter(function (_ref2) {
        var chromeUri = _ref2.chromeUri,
          filePath = _ref2.filePath;
        return filePath.toLowerCase().includes(_this4.filter) || chromeUri.toLowerCase().includes(_this4.filter);
      });
    }

    /**
     * @param {FolderPath} dirKey
     * @param {FileInfo[]} icons
     */
  }, {
    key: "iconGroupTemplate",
    value: function iconGroupTemplate(dirKey, icons) {
      var _this5 = this;
      var filtered = this.filteredIcons(icons);
      if (!filtered.length) {
        return "";
      }
      return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <moz-card .heading=", " type=\"accordion\" expanded>\n        ", "\n      </moz-card>\n    "])), dirKey, (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n          <div class=\"icon-list\">\n            ", "\n          </div>\n        "])), filtered.map(function (_ref3) {
        var chromeUri = _ref3.chromeUri,
          fileName = _ref3.fileName;
        return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n                <moz-box-item>\n                  <div class=\"icon-item\">\n                    <img\n                      class=", "\n                      src=", "\n                      alt=\"\"\n                    />\n                    <button\n                      class=\"icon-name text-truncated-ellipsis\"\n                      data-url=", "\n                      @click=", "\n                      aria-description=\"Copy chrome URL\"\n                      aria-expanded=\"false\"\n                      title=", "\n                    >\n                      ", "\n                    </button>\n                  </div>\n                </moz-box-item>\n              "])), (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.classMap)({
          "icon-12": fileName.endsWith("-12.svg"),
          "icon-24": fileName.endsWith("-24.svg")
        }), chromeUri, chromeUri, _this5.handleCopy, "".concat(fileName, " \u2014 Copy chrome:// URL"), fileName);
      })));
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;
      return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      <link\n        rel=\"stylesheet\"\n        href=\"", "\"\n      />\n      <div class=\"sticky-header\">\n        <moz-page-header\n          heading=\"Icon Directory\"\n          description=\"View icons available in Firefox Desktop. Click the file name to copy the chrome:// URL.\"\n        ></moz-page-header>\n        <moz-input-search\n          placeholder=\"Filter icons...\"\n          @MozInputSearch:search=", "\n        ></moz-input-search>\n        <span id=\"color-probe\"></span>\n        <div class=\"view-controls\">\n          <moz-input-color\n            label=\"Fill\"\n            value=", "\n            @change=", "\n          ></moz-input-color>\n          <moz-input-color\n            label=\"Stroke\"\n            value=", "\n            @change=", "\n          ></moz-input-color>\n          <moz-toggle\n            label=\"Show full size icons\"\n            @toggle=", "\n          ></moz-toggle>\n        </div>\n      </div>\n      ", "\n      <moz-message-bar\n        id=\"success-message\"\n        type=\"success\"\n        message=\"Copied!\"\n        popover=\"manual\"\n      ></moz-message-bar>\n    "])), toolkit_themes_shared_design_system_src_text_and_typography_css__WEBPACK_IMPORTED_MODULE_0__, this.handleSearch, this.fillColor, this.handleFillChange, this.strokeColor, this.handleStrokeChange, /** @param {CustomEvent & { target: MozToggle }} e */
      function (e) {
        return _this6.iconSize = e.target.pressed ? IconSize.Full : IconSize.Normalize;
      }, _toConsumableArray(iconData.entries()).map(function (_ref4) {
        var _ref5 = _slicedToArray(_ref4, 2),
          dirKey = _ref5[0],
          icons = _ref5[1];
        return _this6.iconGroupTemplate(dirKey, icons);
      }));
    }
  }]);
}(chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.LitElement);
_defineProperty(IconDirectory, "properties", {
  filter: {
    type: String,
    state: true
  },
  fillColor: {
    type: String,
    state: true
  },
  strokeColor: {
    type: String,
    state: true
  },
  iconSize: {
    type: String,
    reflect: true
  }
});
_defineProperty(IconDirectory, "styles", (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    :host {\n      --icon-item-width: 125px;\n      --icon-item-padding: var(--space-small);\n      --icon-item-fill: var(--icon-color);\n      /*\n       * The rgbToHex function doesn't work with oklch...\n       * Use --color-accent-primary manual conversion to hex so the stroke is more visible.\n       */\n      --icon-item-stroke: light-dark(#0062fa, #00cadb);\n      --icon-item-width-content: calc(\n        var(--icon-item-width) - 2 * var(--icon-item-padding)\n      );\n\n      display: flex;\n      flex-direction: column;\n      gap: var(--space-large);\n    }\n\n    .sticky-header {\n      position: sticky;\n      inset-block-start: 0;\n      background-color: var(--background-color-canvas);\n      z-index: 1;\n      margin-inline: calc(-1 * var(--space-large));\n      padding-inline: var(--space-large);\n      padding-block-end: var(--space-small);\n      display: flex;\n      flex-direction: column;\n      gap: var(--space-small);\n      border-bottom: var(--border-width) solid var(--border-color);\n    }\n\n    #color-probe {\n      display: none;\n      fill: var(--icon-item-fill);\n      stroke: var(--icon-item-stroke);\n    }\n\n    moz-box-item {\n      --box-padding: var(--icon-item-padding);\n    }\n\n    .view-controls {\n      display: flex;\n      align-items: center;\n      gap: var(--space-large);\n    }\n\n    .icon-list {\n      display: grid;\n      grid-template-columns: repeat(\n        auto-fill,\n        minmax(var(--icon-item-width), 1fr)\n      );\n      gap: var(--space-small);\n    }\n\n    .icon-item {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n\n      img {\n        -moz-context-properties: fill, stroke;\n        fill: var(--icon-item-fill);\n        stroke: var(--icon-item-stroke);\n\n        :host([iconsize=\"normalize\"]) & {\n          width: 16px;\n          aspect-ratio: 1;\n\n          &.icon-12 {\n            width: 12px;\n          }\n\n          &.icon-24 {\n            width: 24px;\n          }\n        }\n\n        :host([iconsize=\"full\"]) & {\n          max-width: var(--icon-item-width-content);\n        }\n      }\n    }\n\n    .icon-name {\n      font-size: var(--font-size-small);\n      width: var(--icon-item-width-content);\n      margin: var(--icon-item-padding) auto 0;\n\n      button& {\n        appearance: none;\n        border: none;\n        background: none;\n        cursor: pointer;\n        padding: 0;\n      }\n    }\n\n    #success-message {\n      position-area: end center;\n      margin: 0;\n      transition: opacity 250ms;\n      box-shadow: var(--box-shadow-popup);\n\n      &:not(:popover-open) {\n        display: none;\n      }\n\n      &[hiding] {\n        opacity: 0;\n      }\n    }\n  "]))));
customElements.define("icon-directory", IconDirectory);
var Default = function Default() {
  return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["<icon-directory></icon-directory>"])));
};

/***/ })

}]);
//# sourceMappingURL=icon-directory-stories.05d47d41.iframe.bundle.js.map