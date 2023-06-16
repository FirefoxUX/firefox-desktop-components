"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[7822],{

/***/ 82748:
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
___CSS_LOADER_EXPORT___.push([module.id, "/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n.translations-panel-view {\n  font: menu;\n  width: 31em;\n}\n\n:where(#translations-panel) :is(description, label, menulist) {\n  margin: 0;\n}\n\n.translations-panel-header {\n  text-align: initial;\n  padding: var(--arrowpanel-padding);\n  padding-bottom: 0;\n}\n\nimage.translations-panel-gear-icon {\n  /* Override the panel-info-button with a gear icon. */\n  list-style-image: url(chrome://global/skin/icons/settings.svg);\n}\n\n.translations-panel-content {\n  padding: var(--arrowpanel-padding);\n  gap: var(--arrowpanel-padding);\n}\n\n#translations-panel-lang-selection > label:first-child {\n  margin-block-start: 0;\n}\n\n#translations-panel-lang-selection > label {\n  margin-block: var(--arrowpanel-padding) 6px;\n}\n\n/* The default styling is to dim the default, but here override it so that it still uses\n   the primary color. */\n.translations-panel-footer > button[default][disabled=\"true\"] {\n  color: var(--button-primary-color);\n  background-color: var(--button-primary-bgcolor);\n}\n\n#translations-panel-translate-hint-action {\n  appearance: none;\n  background-color: var(--button-bgcolor);\n  border-radius: 4px;\n  color: var(--button-color);\n  padding: 8px 16px;\n  font-size: 0.9em;\n}\n\n#translations-panel-translate-hint-action:hover {\n  background-color: var(--button-hover-bgcolor);\n}\n\n#translations-panel-translate-hint-action:hover:active {\n  background-color: var(--button-active-bgcolor);\n}\n\n#translations-panel-translate-hint-action:focus-visible {\n  outline: var(--focus-outline);\n  outline-offset: var(--focus-outline-offset);\n}\n\n#translations-panel-error-message-hint {\n  margin-inline-start: 21px;\n  margin-block: 8px;\n}\n\n#translations-panel-error-message {\n  font-weight: 600;\n}\n\n.translations-panel-error-icon {\n  -moz-context-properties: fill;\n  fill: currentColor;\n  list-style-image: url(chrome://global/skin/icons/error.svg);\n  margin-inline-end: 5px;\n  width: 16px;\n}\n\n.translations-panel-error-header {\n  align-items: start;\n}\n\n#translations-panel-error {\n  border: 1px solid currentColor;\n  border-radius: 4px;\n  padding: 12px;\n}\n", "",{"version":3,"sources":["webpack://./../../themes/shared/translations/panel.css"],"names":[],"mappings":"AAAA;;6DAE6D;;AAE7D;EACE,UAAU;EACV,WAAW;AACb;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,mBAAmB;EACnB,kCAAkC;EAClC,iBAAiB;AACnB;;AAEA;EACE,qDAAqD;EACrD,8DAA8D;AAChE;;AAEA;EACE,kCAAkC;EAClC,8BAA8B;AAChC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;uBACuB;AACvB;EACE,kCAAkC;EAClC,+CAA+C;AACjD;;AAEA;EACE,gBAAgB;EAChB,uCAAuC;EACvC,kBAAkB;EAClB,0BAA0B;EAC1B,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,6CAA6C;AAC/C;;AAEA;EACE,8CAA8C;AAChD;;AAEA;EACE,6BAA6B;EAC7B,2CAA2C;AAC7C;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,6BAA6B;EAC7B,kBAAkB;EAClB,2DAA2D;EAC3D,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,8BAA8B;EAC9B,kBAAkB;EAClB,aAAa;AACf","sourcesContent":["/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n.translations-panel-view {\n  font: menu;\n  width: 31em;\n}\n\n:where(#translations-panel) :is(description, label, menulist) {\n  margin: 0;\n}\n\n.translations-panel-header {\n  text-align: initial;\n  padding: var(--arrowpanel-padding);\n  padding-bottom: 0;\n}\n\nimage.translations-panel-gear-icon {\n  /* Override the panel-info-button with a gear icon. */\n  list-style-image: url(chrome://global/skin/icons/settings.svg);\n}\n\n.translations-panel-content {\n  padding: var(--arrowpanel-padding);\n  gap: var(--arrowpanel-padding);\n}\n\n#translations-panel-lang-selection > label:first-child {\n  margin-block-start: 0;\n}\n\n#translations-panel-lang-selection > label {\n  margin-block: var(--arrowpanel-padding) 6px;\n}\n\n/* The default styling is to dim the default, but here override it so that it still uses\n   the primary color. */\n.translations-panel-footer > button[default][disabled=\"true\"] {\n  color: var(--button-primary-color);\n  background-color: var(--button-primary-bgcolor);\n}\n\n#translations-panel-translate-hint-action {\n  appearance: none;\n  background-color: var(--button-bgcolor);\n  border-radius: 4px;\n  color: var(--button-color);\n  padding: 8px 16px;\n  font-size: 0.9em;\n}\n\n#translations-panel-translate-hint-action:hover {\n  background-color: var(--button-hover-bgcolor);\n}\n\n#translations-panel-translate-hint-action:hover:active {\n  background-color: var(--button-active-bgcolor);\n}\n\n#translations-panel-translate-hint-action:focus-visible {\n  outline: var(--focus-outline);\n  outline-offset: var(--focus-outline-offset);\n}\n\n#translations-panel-error-message-hint {\n  margin-inline-start: 21px;\n  margin-block: 8px;\n}\n\n#translations-panel-error-message {\n  font-weight: 600;\n}\n\n.translations-panel-error-icon {\n  -moz-context-properties: fill;\n  fill: currentColor;\n  list-style-image: url(chrome://global/skin/icons/error.svg);\n  margin-inline-end: 5px;\n  width: 16px;\n}\n\n.translations-panel-error-header {\n  align-items: start;\n}\n\n#translations-panel-error {\n  border: 1px solid currentColor;\n  border-radius: 4px;\n  padding: 12px;\n}\n"],"sourceRoot":""}]);
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

/***/ 97822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93379);
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_panel_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82748);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_panel_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_panel_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
//# sourceMappingURL=7822.b31f2528.iframe.bundle.js.map