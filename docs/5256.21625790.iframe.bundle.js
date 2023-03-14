"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[5256],{

/***/ 23237:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_storybook_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94015);
/* harmony import */ var _components_storybook_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_storybook_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_storybook_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _components_storybook_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_storybook_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _components_storybook_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_components_storybook_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n.searchbar-engine-image {\n  width: 16px;\n  height: 16px;\n  list-style-image: url(\"chrome://global/skin/icons/defaultFavicon.svg\");\n  -moz-context-properties: fill;\n  fill: currentColor;\n}\n\n.search-one-offs:not([hidden]) {\n  display: block;\n  width: 100%;\n}\n\n.search-panel-one-offs-header {\n  display: block;\n}\n\n.search-panel-header {\n  font-weight: normal;\n  margin: 0;\n}\n\n.search-panel-header > label {\n  margin-top: 2px;\n  margin-bottom: 1px;\n  opacity: .6;\n}\n\n/* Make the contrast stronger in dark mode */\n:root[lwt-toolbar-field-focus-brighttext] .search-panel-header > label {\n  opacity: 1;\n}\n\n/**\n * The borders of the various elements are specified as follows.\n *\n * The current engine always has a bottom border.\n * The search results never have a border.\n *\n * When the search results are not collapsed:\n * - The elements underneath the search results all have a top border.\n *\n * When the search results are collapsed:\n * - The elements underneath the search results all have a bottom border.\n */\n\n.search-panel-current-engine {\n  align-items: center;\n  border-top: none !important;\n  padding-inline: 8px;\n}\n\n.search-panel-one-offs:not([hidden]),\n.search-panel-one-offs-container {\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n}\n\n.search-panel-one-offs {\n  margin: 0 !important;\n  /* Bug 1108841: prevent font-size from affecting the layout */\n  line-height: 0;\n  flex-wrap: wrap;\n}\n\n.searchbar-engine-one-off-item {\n  appearance: none;\n  display: inline-flex;\n  background-color: transparent;\n  border: none;\n  min-width: 32px;\n  height: 32px;\n  margin-inline-end: 8px;\n  margin-block: 0;\n  padding: 0;\n  color: inherit;\n  border-radius: var(--toolbarbutton-border-radius);\n}\n\n@media (-moz-platform: windows) {\n  .searchbar-engine-one-off-item:focus-visible {\n    outline: none;\n  }\n}\n\n/* We don't handle `:active` because it doesn't work on the search or settings\n   buttons due to event.preventDefault() in SearchOneOffs._on_mousedown(). */\n.searchbar-engine-one-off-item:not([selected]):hover {\n  background-color: var(--autocomplete-popup-hover-background);\n  color: inherit;\n}\n\n.searchbar-engine-one-off-item[selected] {\n  background-color: var(--autocomplete-popup-highlight-background);\n  color: var(--autocomplete-popup-highlight-color);\n}\n\n.searchbar-engine-one-off-item > .button-box > .button-text {\n  display: none;\n}\n\n.searchbar-engine-one-off-item > .button-box > .button-icon {\n  margin-inline: 0;\n  width: 16px;\n  height: 16px;\n}\n\n.search-panel-tree {\n  background: transparent;\n  color: inherit;\n}\n\n.search-panel-tree > .autocomplete-richlistitem {\n  padding: 1px 3px;\n}\n\n.search-panel-tree > .autocomplete-richlistitem:hover {\n  background-color: var(--autocomplete-popup-hover-background);\n}\n\n.search-panel-tree > .autocomplete-richlistitem > .ac-type-icon {\n  display: flex;\n  width: 14px;\n  height: 14px;\n  margin-inline-end: 7px;\n}\n\n.search-panel-tree > .autocomplete-richlistitem[originaltype=\"fromhistory\"] > .ac-type-icon {\n  list-style-image: url(\"chrome://browser/skin/history.svg\");\n  -moz-context-properties: fill;\n  fill: currentColor;\n  fill-opacity: 0.6;\n}\n\n.search-panel-tree > .autocomplete-richlistitem[originaltype=\"fromhistory\"][selected] > .ac-type-icon {\n  fill-opacity: 1;\n}\n\n.searchbar-separator {\n  appearance: none;\n  margin: var(--panel-separator-margin);\n  padding: 0;\n  border: 0;\n  border-top: 1px solid var(--autocomplete-popup-separator-color);\n  color: inherit;\n}\n\n.search-panel-tree[collapsed=true] + .searchbar-separator {\n  display: none;\n}\n\n.search-setting-button {\n  max-height: 32px;\n  align-self: end;\n  margin-inline: 0;\n}\n\n.search-setting-button > .button-box > .button-icon {\n  list-style-image: url(\"chrome://global/skin/icons/settings.svg\");\n  -moz-context-properties: fill, fill-opacity;\n  fill: currentColor;\n  fill-opacity: var(--urlbar-icon-fill-opacity);\n}\n\n@media (-moz-platform: windows-win10) {\n  #PopupSearchAutoComplete {\n    --panel-border-radius: var(--arrowpanel-border-radius);\n  }\n}\n\n@media (-moz-platform: macos) {\n  #PopupSearchAutoComplete {\n    border-radius: 4px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./../../themes/shared/searchbar.css"],"names":[],"mappings":"AAAA;;6DAE6D;;AAE7D;EACE,WAAW;EACX,YAAY;EACZ,sEAAsE;EACtE,6BAA6B;EAC7B,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,WAAW;AACb;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,WAAW;AACb;;AAEA,4CAA4C;AAC5C;EACE,UAAU;AACZ;;AAEA;;;;;;;;;;;EAWE;;AAEF;EACE,mBAAmB;EACnB,2BAA2B;EAC3B,mBAAmB;AACrB;;AAEA;;EAEE,aAAa;EACb,mBAAmB;EACnB,OAAO;AACT;;AAEA;EACE,oBAAoB;EACpB,6DAA6D;EAC7D,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,oBAAoB;EACpB,6BAA6B;EAC7B,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,sBAAsB;EACtB,eAAe;EACf,UAAU;EACV,cAAc;EACd,iDAAiD;AACnD;;AAEA;EACE;IACE,aAAa;EACf;AACF;;AAEA;4EAC4E;AAC5E;EACE,4DAA4D;EAC5D,cAAc;AAChB;;AAEA;EACE,gEAAgE;EAChE,gDAAgD;AAClD;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,4DAA4D;AAC9D;;AAEA;EACE,aAAa;EACb,WAAW;EACX,YAAY;EACZ,sBAAsB;AACxB;;AAEA;EACE,0DAA0D;EAC1D,6BAA6B;EAC7B,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,qCAAqC;EACrC,UAAU;EACV,SAAS;EACT,+DAA+D;EAC/D,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,gEAAgE;EAChE,2CAA2C;EAC3C,kBAAkB;EAClB,6CAA6C;AAC/C;;AAEA;EACE;IACE,sDAAsD;EACxD;AACF;;AAEA;EACE;IACE,kBAAkB;EACpB;AACF","sourcesContent":["/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n.searchbar-engine-image {\n  width: 16px;\n  height: 16px;\n  list-style-image: url(\"chrome://global/skin/icons/defaultFavicon.svg\");\n  -moz-context-properties: fill;\n  fill: currentColor;\n}\n\n.search-one-offs:not([hidden]) {\n  display: block;\n  width: 100%;\n}\n\n.search-panel-one-offs-header {\n  display: block;\n}\n\n.search-panel-header {\n  font-weight: normal;\n  margin: 0;\n}\n\n.search-panel-header > label {\n  margin-top: 2px;\n  margin-bottom: 1px;\n  opacity: .6;\n}\n\n/* Make the contrast stronger in dark mode */\n:root[lwt-toolbar-field-focus-brighttext] .search-panel-header > label {\n  opacity: 1;\n}\n\n/**\n * The borders of the various elements are specified as follows.\n *\n * The current engine always has a bottom border.\n * The search results never have a border.\n *\n * When the search results are not collapsed:\n * - The elements underneath the search results all have a top border.\n *\n * When the search results are collapsed:\n * - The elements underneath the search results all have a bottom border.\n */\n\n.search-panel-current-engine {\n  align-items: center;\n  border-top: none !important;\n  padding-inline: 8px;\n}\n\n.search-panel-one-offs:not([hidden]),\n.search-panel-one-offs-container {\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n}\n\n.search-panel-one-offs {\n  margin: 0 !important;\n  /* Bug 1108841: prevent font-size from affecting the layout */\n  line-height: 0;\n  flex-wrap: wrap;\n}\n\n.searchbar-engine-one-off-item {\n  appearance: none;\n  display: inline-flex;\n  background-color: transparent;\n  border: none;\n  min-width: 32px;\n  height: 32px;\n  margin-inline-end: 8px;\n  margin-block: 0;\n  padding: 0;\n  color: inherit;\n  border-radius: var(--toolbarbutton-border-radius);\n}\n\n@media (-moz-platform: windows) {\n  .searchbar-engine-one-off-item:focus-visible {\n    outline: none;\n  }\n}\n\n/* We don't handle `:active` because it doesn't work on the search or settings\n   buttons due to event.preventDefault() in SearchOneOffs._on_mousedown(). */\n.searchbar-engine-one-off-item:not([selected]):hover {\n  background-color: var(--autocomplete-popup-hover-background);\n  color: inherit;\n}\n\n.searchbar-engine-one-off-item[selected] {\n  background-color: var(--autocomplete-popup-highlight-background);\n  color: var(--autocomplete-popup-highlight-color);\n}\n\n.searchbar-engine-one-off-item > .button-box > .button-text {\n  display: none;\n}\n\n.searchbar-engine-one-off-item > .button-box > .button-icon {\n  margin-inline: 0;\n  width: 16px;\n  height: 16px;\n}\n\n.search-panel-tree {\n  background: transparent;\n  color: inherit;\n}\n\n.search-panel-tree > .autocomplete-richlistitem {\n  padding: 1px 3px;\n}\n\n.search-panel-tree > .autocomplete-richlistitem:hover {\n  background-color: var(--autocomplete-popup-hover-background);\n}\n\n.search-panel-tree > .autocomplete-richlistitem > .ac-type-icon {\n  display: flex;\n  width: 14px;\n  height: 14px;\n  margin-inline-end: 7px;\n}\n\n.search-panel-tree > .autocomplete-richlistitem[originaltype=\"fromhistory\"] > .ac-type-icon {\n  list-style-image: url(\"chrome://browser/skin/history.svg\");\n  -moz-context-properties: fill;\n  fill: currentColor;\n  fill-opacity: 0.6;\n}\n\n.search-panel-tree > .autocomplete-richlistitem[originaltype=\"fromhistory\"][selected] > .ac-type-icon {\n  fill-opacity: 1;\n}\n\n.searchbar-separator {\n  appearance: none;\n  margin: var(--panel-separator-margin);\n  padding: 0;\n  border: 0;\n  border-top: 1px solid var(--autocomplete-popup-separator-color);\n  color: inherit;\n}\n\n.search-panel-tree[collapsed=true] + .searchbar-separator {\n  display: none;\n}\n\n.search-setting-button {\n  max-height: 32px;\n  align-self: end;\n  margin-inline: 0;\n}\n\n.search-setting-button > .button-box > .button-icon {\n  list-style-image: url(\"chrome://global/skin/icons/settings.svg\");\n  -moz-context-properties: fill, fill-opacity;\n  fill: currentColor;\n  fill-opacity: var(--urlbar-icon-fill-opacity);\n}\n\n@media (-moz-platform: windows-win10) {\n  #PopupSearchAutoComplete {\n    --panel-border-radius: var(--arrowpanel-border-radius);\n  }\n}\n\n@media (-moz-platform: macos) {\n  #PopupSearchAutoComplete {\n    border-radius: 4px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 23645:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 94015:
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ 85256:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93379);
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_searchbar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23237);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_searchbar_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_searchbar_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ 93379:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

}]);
//# sourceMappingURL=5256.21625790.iframe.bundle.js.map