"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[2750],{

/***/ 24284:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storybook_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94015);
/* harmony import */ var _storybook_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _storybook_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _storybook_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_storybook_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(chrome://global/skin/in-content/common.css);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n:root {\n  /* override --in-content-page-background from common-shared.css */\n  background-color: transparent;\n  --fxview-background-color: var(--newtab-background-color, var(--in-content-page-background));\n  --fxview-background-color-secondary: var(--newtab-background-color-secondary, #FFFFFF);\n  --fxview-element-background-hover: color-mix(in srgb, var(--fxview-background-color) 90%, currentColor);\n  --fxview-element-background-active: color-mix(in srgb, var(--fxview-background-color) 80%, currentColor);\n  --fxview-text-primary-color: var(--newtab-text-primary-color, var(--in-content-page-color));\n  --fxview-text-color-hover: var(--newtab-text-primary-color);\n  --fxview-primary-action-background: var(--newtab-primary-action-background, #0061e0);\n\n  /* ensure utility button hover states match those of the rest of the page */\n  --in-content-button-background-hover: var(--fxview-element-background-hover);\n  --in-content-button-background-active: var(--fxview-element-background-active);\n  --in-content-button-text-color-hover: var(--fxview-text-color-hover);\n\n  --fxview-sidebar-width: 286px;\n  --fxview-margin-top: 72px;\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --fxview-element-background-hover: color-mix(in srgb, var(--fxview-background-color) 80%, white);\n    --fxview-element-background-active: color-mix(in srgb, var(--fxview-background-color) 60%, white);\n    --newtab-background-color-secondary: #42414d;\n    --newtab-primary-action-background: #00ddff;\n  }\n}\n\n@media (prefers-contrast) {\n  :root {\n    --fxview-element-background-hover: ButtonText;\n    --fxview-element-background-active: ButtonText;\n    --fxview-text-color-hover: ButtonFace;\n    --newtab-primary-action-background: LinkText;\n    --newtab-background-color-secondary: Canvas;\n  }\n}\n\nbody {\n  display: grid;\n  grid-template-columns: var(--fxview-sidebar-width) 1fr;\n  background-color: var(--fxview-background-color);\n  color: var(--fxview-text-primary-color);\n  margin-block-start: var(--fxview-margin-top);\n}\n\n#pages {\n  width: 90%;\n  margin: 0 auto;\n  max-width: 1136px;\n}\n\nfxview-category-button[name=\"overview\"]::part(icon) {\n  background-image: url(\"chrome://mozapps/skin/extensions/category-discover.svg\");\n}\nfxview-category-button[name=\"opentabs\"]::part(icon) {\n  background-image: url(\"chrome://mozapps/skin/extensions/category-discover.svg\");\n}\nfxview-category-button[name=\"recently-closed\"]::part(icon) {\n  background-image: url(\"chrome://mozapps/skin/extensions/category-discover.svg\");\n}\nfxview-category-button[name=\"synced-tabs\"]::part(icon) {\n  background-image: url(\"chrome://mozapps/skin/extensions/category-discover.svg\");\n}\nfxview-category-button[name=\"history\"]::part(icon) {\n  background-image: url(\"chrome://mozapps/skin/extensions/category-discover.svg\");\n}\n\n@media (max-width: 52rem) {\n  :root {\n    --fxview-sidebar-width: 82px;\n  }\n}\n\n@media (min-width: 120rem) {\n  #pages {\n    margin-inline-start: 148px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./../firefoxview/firefoxview-next.css"],"names":[],"mappings":"AAAA;;6DAE6D;;AAI7D;EACE,iEAAiE;EACjE,6BAA6B;EAC7B,4FAA4F;EAC5F,sFAAsF;EACtF,uGAAuG;EACvG,wGAAwG;EACxG,2FAA2F;EAC3F,2DAA2D;EAC3D,oFAAoF;;EAEpF,2EAA2E;EAC3E,4EAA4E;EAC5E,8EAA8E;EAC9E,oEAAoE;;EAEpE,6BAA6B;EAC7B,yBAAyB;AAC3B;;AAEA;EACE;IACE,gGAAgG;IAChG,iGAAiG;IACjG,4CAA4C;IAC5C,2CAA2C;EAC7C;AACF;;AAEA;EACE;IACE,6CAA6C;IAC7C,8CAA8C;IAC9C,qCAAqC;IACrC,4CAA4C;IAC5C,2CAA2C;EAC7C;AACF;;AAEA;EACE,aAAa;EACb,sDAAsD;EACtD,gDAAgD;EAChD,uCAAuC;EACvC,4CAA4C;AAC9C;;AAEA;EACE,UAAU;EACV,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,+EAA+E;AACjF;AACA;EACE,+EAA+E;AACjF;AACA;EACE,+EAA+E;AACjF;AACA;EACE,+EAA+E;AACjF;AACA;EACE,+EAA+E;AACjF;;AAEA;EACE;IACE,4BAA4B;EAC9B;AACF;;AAEA;EACE;IACE,0BAA0B;EAC5B;AACF","sourcesContent":["/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n @import url(\"chrome://global/skin/in-content/common.css\");\n\n:root {\n  /* override --in-content-page-background from common-shared.css */\n  background-color: transparent;\n  --fxview-background-color: var(--newtab-background-color, var(--in-content-page-background));\n  --fxview-background-color-secondary: var(--newtab-background-color-secondary, #FFFFFF);\n  --fxview-element-background-hover: color-mix(in srgb, var(--fxview-background-color) 90%, currentColor);\n  --fxview-element-background-active: color-mix(in srgb, var(--fxview-background-color) 80%, currentColor);\n  --fxview-text-primary-color: var(--newtab-text-primary-color, var(--in-content-page-color));\n  --fxview-text-color-hover: var(--newtab-text-primary-color);\n  --fxview-primary-action-background: var(--newtab-primary-action-background, #0061e0);\n\n  /* ensure utility button hover states match those of the rest of the page */\n  --in-content-button-background-hover: var(--fxview-element-background-hover);\n  --in-content-button-background-active: var(--fxview-element-background-active);\n  --in-content-button-text-color-hover: var(--fxview-text-color-hover);\n\n  --fxview-sidebar-width: 286px;\n  --fxview-margin-top: 72px;\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --fxview-element-background-hover: color-mix(in srgb, var(--fxview-background-color) 80%, white);\n    --fxview-element-background-active: color-mix(in srgb, var(--fxview-background-color) 60%, white);\n    --newtab-background-color-secondary: #42414d;\n    --newtab-primary-action-background: #00ddff;\n  }\n}\n\n@media (prefers-contrast) {\n  :root {\n    --fxview-element-background-hover: ButtonText;\n    --fxview-element-background-active: ButtonText;\n    --fxview-text-color-hover: ButtonFace;\n    --newtab-primary-action-background: LinkText;\n    --newtab-background-color-secondary: Canvas;\n  }\n}\n\nbody {\n  display: grid;\n  grid-template-columns: var(--fxview-sidebar-width) 1fr;\n  background-color: var(--fxview-background-color);\n  color: var(--fxview-text-primary-color);\n  margin-block-start: var(--fxview-margin-top);\n}\n\n#pages {\n  width: 90%;\n  margin: 0 auto;\n  max-width: 1136px;\n}\n\nfxview-category-button[name=\"overview\"]::part(icon) {\n  background-image: url(\"chrome://mozapps/skin/extensions/category-discover.svg\");\n}\nfxview-category-button[name=\"opentabs\"]::part(icon) {\n  background-image: url(\"chrome://mozapps/skin/extensions/category-discover.svg\");\n}\nfxview-category-button[name=\"recently-closed\"]::part(icon) {\n  background-image: url(\"chrome://mozapps/skin/extensions/category-discover.svg\");\n}\nfxview-category-button[name=\"synced-tabs\"]::part(icon) {\n  background-image: url(\"chrome://mozapps/skin/extensions/category-discover.svg\");\n}\nfxview-category-button[name=\"history\"]::part(icon) {\n  background-image: url(\"chrome://mozapps/skin/extensions/category-discover.svg\");\n}\n\n@media (max-width: 52rem) {\n  :root {\n    --fxview-sidebar-width: 82px;\n  }\n}\n\n@media (min-width: 120rem) {\n  #pages {\n    margin-inline-start: 148px;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ 22750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93379);
/* harmony import */ var _storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_firefoxview_next_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24284);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_firefoxview_next_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_firefoxview_next_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
//# sourceMappingURL=2750.37946676.iframe.bundle.js.map