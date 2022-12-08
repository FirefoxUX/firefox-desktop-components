"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[7195],{

/***/ 4513:
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
___CSS_LOADER_EXPORT___.push([module.id, "/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n#urlbar {\n  --urlbar-box-bgcolor: var(--toolbar-field-focus-background-color);\n  --urlbar-box-focus-bgcolor: var(--button-bgcolor);\n  --urlbar-box-hover-bgcolor: var(--button-hover-bgcolor);\n}\n\n@media (-moz-platform: windows) {\n  /* The window background is white due to no accentcolor in the lightweight\n     theme. It can't be changed to transparent when there is no compositor\n     (Win 7 in classic / basic theme), or else dragging and focus become\n     broken. So instead just show the normal titlebar in that case, and override\n     the window color as transparent when the compositor is available. */\n  @media (-moz-windows-compositor: 0) {\n    :root[tabsintitlebar]:not([inDOMFullscreen]) #titlebar:-moz-lwtheme {\n      visibility: visible;\n    }\n\n    /* Prevent accent color overriding the window background for\n     * light and dark theme on Aero Basic. This is copied from browser-aero.css. */\n    @media (-moz-windows-default-theme) {\n      :root {\n        background-color: rgb(185,209,234) !important;\n      }\n      :root:-moz-window-inactive {\n        background-color: rgb(215,228,242) !important;\n      }\n    }\n  }\n\n  /* Add a fog for background tabs to be visible on Windows 7 glass window background */\n  @media (-moz-platform: windows-win7) {\n    @media (-moz-windows-default-theme) {\n      #TabsToolbar {\n        background-image: radial-gradient(ellipse at bottom, rgba(255,255,255,0.8), rgba(255,255,255,0.5) 80%, transparent);\n        color: black;\n        --toolbarbutton-icon-fill: currentColor;\n      }\n    }\n  }\n\n  @media (-moz-windows-glass) {\n    /* Make the menubar text readable on aero glass (copied from browser-aero.css). */\n    #toolbar-menubar {\n      text-shadow: 0 0 .5em white, 0 0 .5em white, 0 1px 0 rgba(255,255,255,.4);\n    }\n\n    #main-menubar:not(:-moz-window-inactive) {\n      background-color: rgba(255,255,255,.5);\n      color: black;\n      border-radius: 4px;\n    }\n  }\n\n  @media (-moz-platform: windows-win7),\n         (-moz-platform: windows-win8) {\n    @media (-moz-windows-compositor) {\n      :root {\n        background: transparent !important;\n      }\n\n      /* Remove lwtheme borders from toolbars in non-maximized windows. */\n      #toolbar-menubar,\n      #TabsToolbar {\n        border-inline-style: none !important;\n      }\n    }\n\n    /* Use proper menu text styling in Win7 classic mode. On Windows 8, we use\n       these colors so tabs and menus are legible against the window accent color.\n       These colors are copied from browser.css. */\n    @media (-moz-windows-compositor: 0),\n           (-moz-windows-default-theme: 0),\n           (-moz-platform: windows-win8) {\n      :root[tabsintitlebar] {\n        color: CaptionText;\n      }\n\n      :root[tabsintitlebar]:-moz-window-inactive {\n        color: InactiveCaptionText;\n      }\n    }\n  }\n\n  /* Restored windows get an artificial border on windows, because the lwtheme background\n   * overlaps the regular window border. That isn't the case for us, so we avoid painting\n   * over the native border with our custom borders. These are !important to avoid\n   * specificity-wars with the selectors that add these borders. */\n  @media (-moz-windows-classic),\n         (-moz-windows-compositor: 0) and (-moz-windows-default-theme) {\n    #navigator-toolbox {\n      background-image: none !important;\n    }\n  }\n  @media (-moz-windows-glass) {\n    #navigator-toolbox {\n      border-top: none !important;\n      box-shadow: none !important;\n      padding-top: 0 !important;\n    }\n  }\n  @media (-moz-platform: windows-win8) {\n    #navigator-toolbox {\n      border-top: none !important;\n    }\n  }\n}\n", "",{"version":3,"sources":["webpack://./../../themes/shared/light-dark-overrides.css"],"names":[],"mappings":"AAAA;;6DAE6D;;AAE7D;EACE,iEAAiE;EACjE,iDAAiD;EACjD,uDAAuD;AACzD;;AAEA;EACE;;;;wEAIsE;EACtE;IACE;MACE,mBAAmB;IACrB;;IAEA;kFAC8E;IAC9E;MACE;QACE,6CAA6C;MAC/C;MACA;QACE,6CAA6C;MAC/C;IACF;EACF;;EAEA,qFAAqF;EACrF;IACE;MACE;QACE,mHAAmH;QACnH,YAAY;QACZ,uCAAuC;MACzC;IACF;EACF;;EAEA;IACE,iFAAiF;IACjF;MACE,yEAAyE;IAC3E;;IAEA;MACE,sCAAsC;MACtC,YAAY;MACZ,kBAAkB;IACpB;EACF;;EAEA;;IAEE;MACE;QACE,kCAAkC;MACpC;;MAEA,mEAAmE;MACnE;;QAEE,oCAAoC;MACtC;IACF;;IAEA;;kDAE8C;IAC9C;;;MAGE;QACE,kBAAkB;MACpB;;MAEA;QACE,0BAA0B;MAC5B;IACF;EACF;;EAEA;;;kEAGgE;EAChE;;IAEE;MACE,iCAAiC;IACnC;EACF;EACA;IACE;MACE,2BAA2B;MAC3B,2BAA2B;MAC3B,yBAAyB;IAC3B;EACF;EACA;IACE;MACE,2BAA2B;IAC7B;EACF;AACF","sourcesContent":["/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n#urlbar {\n  --urlbar-box-bgcolor: var(--toolbar-field-focus-background-color);\n  --urlbar-box-focus-bgcolor: var(--button-bgcolor);\n  --urlbar-box-hover-bgcolor: var(--button-hover-bgcolor);\n}\n\n@media (-moz-platform: windows) {\n  /* The window background is white due to no accentcolor in the lightweight\n     theme. It can't be changed to transparent when there is no compositor\n     (Win 7 in classic / basic theme), or else dragging and focus become\n     broken. So instead just show the normal titlebar in that case, and override\n     the window color as transparent when the compositor is available. */\n  @media (-moz-windows-compositor: 0) {\n    :root[tabsintitlebar]:not([inDOMFullscreen]) #titlebar:-moz-lwtheme {\n      visibility: visible;\n    }\n\n    /* Prevent accent color overriding the window background for\n     * light and dark theme on Aero Basic. This is copied from browser-aero.css. */\n    @media (-moz-windows-default-theme) {\n      :root {\n        background-color: rgb(185,209,234) !important;\n      }\n      :root:-moz-window-inactive {\n        background-color: rgb(215,228,242) !important;\n      }\n    }\n  }\n\n  /* Add a fog for background tabs to be visible on Windows 7 glass window background */\n  @media (-moz-platform: windows-win7) {\n    @media (-moz-windows-default-theme) {\n      #TabsToolbar {\n        background-image: radial-gradient(ellipse at bottom, rgba(255,255,255,0.8), rgba(255,255,255,0.5) 80%, transparent);\n        color: black;\n        --toolbarbutton-icon-fill: currentColor;\n      }\n    }\n  }\n\n  @media (-moz-windows-glass) {\n    /* Make the menubar text readable on aero glass (copied from browser-aero.css). */\n    #toolbar-menubar {\n      text-shadow: 0 0 .5em white, 0 0 .5em white, 0 1px 0 rgba(255,255,255,.4);\n    }\n\n    #main-menubar:not(:-moz-window-inactive) {\n      background-color: rgba(255,255,255,.5);\n      color: black;\n      border-radius: 4px;\n    }\n  }\n\n  @media (-moz-platform: windows-win7),\n         (-moz-platform: windows-win8) {\n    @media (-moz-windows-compositor) {\n      :root {\n        background: transparent !important;\n      }\n\n      /* Remove lwtheme borders from toolbars in non-maximized windows. */\n      #toolbar-menubar,\n      #TabsToolbar {\n        border-inline-style: none !important;\n      }\n    }\n\n    /* Use proper menu text styling in Win7 classic mode. On Windows 8, we use\n       these colors so tabs and menus are legible against the window accent color.\n       These colors are copied from browser.css. */\n    @media (-moz-windows-compositor: 0),\n           (-moz-windows-default-theme: 0),\n           (-moz-platform: windows-win8) {\n      :root[tabsintitlebar] {\n        color: CaptionText;\n      }\n\n      :root[tabsintitlebar]:-moz-window-inactive {\n        color: InactiveCaptionText;\n      }\n    }\n  }\n\n  /* Restored windows get an artificial border on windows, because the lwtheme background\n   * overlaps the regular window border. That isn't the case for us, so we avoid painting\n   * over the native border with our custom borders. These are !important to avoid\n   * specificity-wars with the selectors that add these borders. */\n  @media (-moz-windows-classic),\n         (-moz-windows-compositor: 0) and (-moz-windows-default-theme) {\n    #navigator-toolbox {\n      background-image: none !important;\n    }\n  }\n  @media (-moz-windows-glass) {\n    #navigator-toolbox {\n      border-top: none !important;\n      box-shadow: none !important;\n      padding-top: 0 !important;\n    }\n  }\n  @media (-moz-platform: windows-win8) {\n    #navigator-toolbox {\n      border-top: none !important;\n    }\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ 67195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93379);
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_light_dark_overrides_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4513);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_light_dark_overrides_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_light_dark_overrides_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
//# sourceMappingURL=7195.f05fc1d4.iframe.bundle.js.map