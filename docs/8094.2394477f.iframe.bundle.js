"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[8094],{

/***/ 81362:
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(chrome://global/skin/global.css);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n@namespace html url(\"http://www.w3.org/1999/xhtml\");\n\n@media (-moz-platform: macos) {\n  #topBar {\n    appearance: auto;\n    -moz-default-appearance: toolbar;\n    -moz-window-dragging: drag;\n    align-items: center;\n    justify-content: center;\n  }\n}\n\n@media not (-moz-platform: macos) {\n  #topBar {\n    border-bottom: 1px solid ThreeDShadow;\n    padding-inline-start: 10px;\n    background-color: Field;\n    color: FieldText;\n  }\n}\n\n/* View buttons */\n@media not (-moz-platform: macos) {\n  #viewGroup > radio {\n    appearance: none;\n    list-style-image: none;\n    min-width: 4.5em;\n    margin: 0;\n    padding: 3px;\n  }\n\n  #viewGroup > radio > .radio-label-box {\n    margin: 0;\n    padding: 0 6px;\n  }\n\n  #viewGroup:focus-visible > radio[focused=\"true\"] > .radio-label-box {\n    outline: var(--default-focusring);\n  }\n\n  #viewGroup .radio-icon {\n    background-image: url(\"chrome://browser/skin/pageInfo.png\");\n    width: 32px;\n    height: 32px;\n    /* Avoid anti-aliasing seams in HiDPI */\n    image-rendering: crisp-edges;\n  }\n\n  #generalTab .radio-icon {\n    background-position-x: 0;\n  }\n\n  #mediaTab .radio-icon {\n    background-position-x: -32px;\n  }\n\n  #permTab .radio-icon {\n    background-position-x: -96px;\n  }\n\n  #securityTab .radio-icon {\n    background-position-x: -128px;\n  }\n}\n\n@media (-moz-platform: linux) {\n  #viewGroup > radio {\n    color: FieldText;\n  }\n\n  #viewGroup > radio[selected=\"true\"] {\n    background-color: SelectedItem;\n    color: SelectedItemText;\n  }\n}\n\n@media (-moz-platform: windows) {\n  #viewGroup {\n    padding-inline-start: 10px;\n  }\n\n  #viewGroup > radio:hover {\n    background-color: #E0E8F6;\n    color: black;\n  }\n\n  #viewGroup > radio[selected=\"true\"] {\n    background-color: #C1D2EE;\n    color: black;\n  }\n\n  #viewGroup > radio:is(:hover, [selected=\"true\"]) .radio-icon {\n    background-position-y: -32px;\n  }\n}\n\n@media (-moz-platform: macos) {\n  #viewGroup {\n    margin: 4px 0 9px;\n  }\n\n  #viewGroup > radio,\n  #viewGroup > toolbarbutton {\n    flex-direction: column;\n    align-items: center;\n    appearance: auto;\n    -moz-default-appearance: toolbarbutton;\n    font: menu;\n    margin: 0;\n    padding: 0 6px;\n    height: 22px;\n  }\n\n  @media (-moz-mac-big-sur-theme: 0) {\n    #viewGroup > radio[selected=true],\n    #viewGroup > toolbarbutton[checked=true] {\n      color: #FFF !important;\n      text-shadow: rgba(0, 0, 0, 0.4) 0 1px;\n    }\n  }\n}\n\n/* Misc */\ntree {\n  margin: .5em;\n}\n\nhtml|input {\n  background: transparent;\n  border: none;\n  padding: 0;\n}\n\nhtml|input.header {\n  margin-inline-start: 0;\n}\n\n#imagecontainerbox {\n  margin: .5em;\n  background: white;\n  overflow: auto;\n  border: 1px solid ThreeDLightShadow;\n}\n\nhtml|input:disabled {\n  font-style: italic;\n}\n\n@media (-moz-platform: macos) {\n  .help-button {\n    appearance: auto;\n    -moz-default-appearance: -moz-mac-help-button;\n  }\n}\n\n/* General Tab */\n\n@media (-moz-platform: linux) {\n  #generalPanel > #titletext {\n    margin-inline-start: 5px;\n  }\n}\n\n#securityBox description {\n  margin-inline-start: 10px;\n}\n\n#general-security-identity {\n  white-space: pre-wrap;\n  line-height: 2em;\n}\n\n/* Media Tab */\n#imagetree {\n  min-height: 10em;\n  margin-block: 2px 0;\n}\n\n#mediaSplitter {\n  background: none;\n  appearance: none;\n  border-style: none;\n}\n\n@media not (-moz-platform: macos) {\n  #mediaSplitter {\n    height: .8em;\n  }\n}\n\n#mediaTable {\n  margin-bottom: 2em;\n}\n\n#mediaLabelColumn {\n  min-width: 10em;\n}\n\ntreechildren::-moz-tree-cell-text(broken) {\n  font-style: italic;\n  color: graytext;\n}\n\n/* Permissions Tab */\n\n#permList {\n  appearance: auto;\n  -moz-default-appearance: listbox;\n  margin: .5em;\n  overflow: auto;\n  color: FieldText;\n}\n\n.permission {\n  padding: 6px 7px;\n  border-bottom: 1px dotted ThreeDShadow;\n}\n\n.permissionLabel {\n  font-weight: bold;\n}\n\n.permission:hover {\n  background-color: -moz-dialog;\n  color: -moz-DialogText;\n}\n\n/* Security Tab */\n\n#securityPanel table {\n  margin-bottom: 1em;\n}\n", "",{"version":3,"sources":["webpack://./../../themes/shared/pageInfo.css"],"names":[],"mappings":"AAAA;;6DAE6D;AAG7D,mDAAmD;;AAEnD;EACE;IACE,gBAAgB;IAChB,gCAAgC;IAChC,0BAA0B;IAC1B,mBAAmB;IACnB,uBAAuB;EACzB;AACF;;AAEA;EACE;IACE,qCAAqC;IACrC,0BAA0B;IAC1B,uBAAuB;IACvB,gBAAgB;EAClB;AACF;;AAEA,iBAAiB;AACjB;EACE;IACE,gBAAgB;IAChB,sBAAsB;IACtB,gBAAgB;IAChB,SAAS;IACT,YAAY;EACd;;EAEA;IACE,SAAS;IACT,cAAc;EAChB;;EAEA;IACE,iCAAiC;EACnC;;EAEA;IACE,2DAA2D;IAC3D,WAAW;IACX,YAAY;IACZ,uCAAuC;IACvC,4BAA4B;EAC9B;;EAEA;IACE,wBAAwB;EAC1B;;EAEA;IACE,4BAA4B;EAC9B;;EAEA;IACE,4BAA4B;EAC9B;;EAEA;IACE,6BAA6B;EAC/B;AACF;;AAEA;EACE;IACE,gBAAgB;EAClB;;EAEA;IACE,8BAA8B;IAC9B,uBAAuB;EACzB;AACF;;AAEA;EACE;IACE,0BAA0B;EAC5B;;EAEA;IACE,yBAAyB;IACzB,YAAY;EACd;;EAEA;IACE,yBAAyB;IACzB,YAAY;EACd;;EAEA;IACE,4BAA4B;EAC9B;AACF;;AAEA;EACE;IACE,iBAAiB;EACnB;;EAEA;;IAEE,sBAAsB;IACtB,mBAAmB;IACnB,gBAAgB;IAChB,sCAAsC;IACtC,UAAU;IACV,SAAS;IACT,cAAc;IACd,YAAY;EACd;;EAEA;IACE;;MAEE,sBAAsB;MACtB,qCAAqC;IACvC;EACF;AACF;;AAEA,SAAS;AACT;EACE,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,cAAc;EACd,mCAAmC;AACrC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE;IACE,gBAAgB;IAChB,6CAA6C;EAC/C;AACF;;AAEA,gBAAgB;;AAEhB;EACE;IACE,wBAAwB;EAC1B;AACF;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA,cAAc;AACd;EACE,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE;IACE,YAAY;EACd;AACF;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA,oBAAoB;;AAEpB;EACE,gBAAgB;EAChB,gCAAgC;EAChC,YAAY;EACZ,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,sCAAsC;AACxC;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,6BAA6B;EAC7B,sBAAsB;AACxB;;AAEA,iBAAiB;;AAEjB;EACE,kBAAkB;AACpB","sourcesContent":["/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n@import url(\"chrome://global/skin/global.css\");\n@namespace html url(\"http://www.w3.org/1999/xhtml\");\n\n@media (-moz-platform: macos) {\n  #topBar {\n    appearance: auto;\n    -moz-default-appearance: toolbar;\n    -moz-window-dragging: drag;\n    align-items: center;\n    justify-content: center;\n  }\n}\n\n@media not (-moz-platform: macos) {\n  #topBar {\n    border-bottom: 1px solid ThreeDShadow;\n    padding-inline-start: 10px;\n    background-color: Field;\n    color: FieldText;\n  }\n}\n\n/* View buttons */\n@media not (-moz-platform: macos) {\n  #viewGroup > radio {\n    appearance: none;\n    list-style-image: none;\n    min-width: 4.5em;\n    margin: 0;\n    padding: 3px;\n  }\n\n  #viewGroup > radio > .radio-label-box {\n    margin: 0;\n    padding: 0 6px;\n  }\n\n  #viewGroup:focus-visible > radio[focused=\"true\"] > .radio-label-box {\n    outline: var(--default-focusring);\n  }\n\n  #viewGroup .radio-icon {\n    background-image: url(\"chrome://browser/skin/pageInfo.png\");\n    width: 32px;\n    height: 32px;\n    /* Avoid anti-aliasing seams in HiDPI */\n    image-rendering: crisp-edges;\n  }\n\n  #generalTab .radio-icon {\n    background-position-x: 0;\n  }\n\n  #mediaTab .radio-icon {\n    background-position-x: -32px;\n  }\n\n  #permTab .radio-icon {\n    background-position-x: -96px;\n  }\n\n  #securityTab .radio-icon {\n    background-position-x: -128px;\n  }\n}\n\n@media (-moz-platform: linux) {\n  #viewGroup > radio {\n    color: FieldText;\n  }\n\n  #viewGroup > radio[selected=\"true\"] {\n    background-color: SelectedItem;\n    color: SelectedItemText;\n  }\n}\n\n@media (-moz-platform: windows) {\n  #viewGroup {\n    padding-inline-start: 10px;\n  }\n\n  #viewGroup > radio:hover {\n    background-color: #E0E8F6;\n    color: black;\n  }\n\n  #viewGroup > radio[selected=\"true\"] {\n    background-color: #C1D2EE;\n    color: black;\n  }\n\n  #viewGroup > radio:is(:hover, [selected=\"true\"]) .radio-icon {\n    background-position-y: -32px;\n  }\n}\n\n@media (-moz-platform: macos) {\n  #viewGroup {\n    margin: 4px 0 9px;\n  }\n\n  #viewGroup > radio,\n  #viewGroup > toolbarbutton {\n    flex-direction: column;\n    align-items: center;\n    appearance: auto;\n    -moz-default-appearance: toolbarbutton;\n    font: menu;\n    margin: 0;\n    padding: 0 6px;\n    height: 22px;\n  }\n\n  @media (-moz-mac-big-sur-theme: 0) {\n    #viewGroup > radio[selected=true],\n    #viewGroup > toolbarbutton[checked=true] {\n      color: #FFF !important;\n      text-shadow: rgba(0, 0, 0, 0.4) 0 1px;\n    }\n  }\n}\n\n/* Misc */\ntree {\n  margin: .5em;\n}\n\nhtml|input {\n  background: transparent;\n  border: none;\n  padding: 0;\n}\n\nhtml|input.header {\n  margin-inline-start: 0;\n}\n\n#imagecontainerbox {\n  margin: .5em;\n  background: white;\n  overflow: auto;\n  border: 1px solid ThreeDLightShadow;\n}\n\nhtml|input:disabled {\n  font-style: italic;\n}\n\n@media (-moz-platform: macos) {\n  .help-button {\n    appearance: auto;\n    -moz-default-appearance: -moz-mac-help-button;\n  }\n}\n\n/* General Tab */\n\n@media (-moz-platform: linux) {\n  #generalPanel > #titletext {\n    margin-inline-start: 5px;\n  }\n}\n\n#securityBox description {\n  margin-inline-start: 10px;\n}\n\n#general-security-identity {\n  white-space: pre-wrap;\n  line-height: 2em;\n}\n\n/* Media Tab */\n#imagetree {\n  min-height: 10em;\n  margin-block: 2px 0;\n}\n\n#mediaSplitter {\n  background: none;\n  appearance: none;\n  border-style: none;\n}\n\n@media not (-moz-platform: macos) {\n  #mediaSplitter {\n    height: .8em;\n  }\n}\n\n#mediaTable {\n  margin-bottom: 2em;\n}\n\n#mediaLabelColumn {\n  min-width: 10em;\n}\n\ntreechildren::-moz-tree-cell-text(broken) {\n  font-style: italic;\n  color: graytext;\n}\n\n/* Permissions Tab */\n\n#permList {\n  appearance: auto;\n  -moz-default-appearance: listbox;\n  margin: .5em;\n  overflow: auto;\n  color: FieldText;\n}\n\n.permission {\n  padding: 6px 7px;\n  border-bottom: 1px dotted ThreeDShadow;\n}\n\n.permissionLabel {\n  font-weight: bold;\n}\n\n.permission:hover {\n  background-color: -moz-dialog;\n  color: -moz-DialogText;\n}\n\n/* Security Tab */\n\n#securityPanel table {\n  margin-bottom: 1em;\n}\n"],"sourceRoot":""}]);
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

/***/ 8094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93379);
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_pageInfo_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81362);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_pageInfo_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_pageInfo_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
//# sourceMappingURL=8094.2394477f.iframe.bundle.js.map