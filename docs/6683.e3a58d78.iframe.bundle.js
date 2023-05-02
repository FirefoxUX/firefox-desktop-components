"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[6683],{

/***/ 73865:
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
___CSS_LOADER_EXPORT___.push([module.id, "/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n@namespace html url(\"http://www.w3.org/1999/xhtml\");\n\n/**\n * Our OS integration code toggles whether system colors should return light or\n * dark values based on the luminosity of the toolbar background. Because themes\n * can style panels to have a different background color than the toolbar, we\n * need specific overrides for system colors used in light or dark themes.\n */\n#editBookmarkPanel:-moz-lwtheme {\n  color-scheme: light;\n}\n\n:root[lwt-popup-brighttext] #editBookmarkPanel {\n  color-scheme: dark;\n}\n\n#editBookmarkPanel > .panel-subview-body {\n  padding-bottom: 0;\n}\n\nhtml|div#editBookmarkPanelFaviconContainer {\n  display: flex;\n}\n\n#editBookmarkPanelInfoArea {\n  overflow: hidden;\n  padding: 4px var(--arrowpanel-padding) 0;\n  flex: none;\n}\n\nhtml|img#editBookmarkPanelFavicon[src] {\n  box-sizing: content-box;\n  width: 32px;\n  height: 32px;\n  padding: 5px;\n  background-color: #F9F9FA;\n  box-shadow: inset 0 0 0 1px rgba(0,0,0,.1);\n  border-radius: 6px;\n  margin-top: 10px;\n  margin-inline-start: 10px;\n  margin-bottom: -52px; /* margin-top + paddings + height */\n}\n\n#editBookmarkPanelImage {\n  border-radius: 4px;\n  height: 150px;\n  background-image: -moz-element(#editBookmarkPanelImageCanvas);\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin: 0;\n}\n\n/* Implements editBookmarkPanel resizing on folderTree un-collapse. */\n#editBMPanel_folderTree {\n  min-width: 27em;\n}\n\n#editBMPanel_newFolderButton {\n  appearance: none;\n  margin: 0;\n  border: 0;\n  border-radius: 4px;\n  background-color: var(--button-bgcolor);\n  color: var(--button-color, inherit);\n  font-weight: 600;\n  min-width: 0;\n  padding: 8px 16px;\n\n  /* This button is deeper in the visual hierarchy than others (notably the\n     buttons at the bottom of the panel), so it should be slightly smaller. */\n  font-size: 90%;\n}\n\n#editBMPanel_newFolderButton:hover {\n  background-color: var(--button-hover-bgcolor);\n}\n\n#editBMPanel_newFolderButton:hover:active {\n  background-color: var(--button-active-bgcolor);\n}\n\n#editBookmarkPanel > #editBookmarkHeaderSeparator,\n#editBookmarkPanel > .panel-subview-body > #editBookmarkSeparator {\n  margin-bottom: 0;\n  margin-inline: 16px;\n}\n\n#editBookmarkPanel {\n  font: caption;\n}\n\n#editBookmarkPanelContent > label:not(.editBMPanel_nameRow) {\n  padding-top: var(--arrowpanel-padding);\n}\n\n#editBookmarkPanelContent > #editBMPanel_folderTreeRow,\n#editBookmarkPanelContent > #editBMPanel_folderTreeRow > #editBMPanel_newFolderBox,\n#editBookmarkPanelContent > #editBMPanel_tagsSelectorRow {\n  padding-top: 4px;\n}\n\n#editBookmarkPanelContent label[control] {\n  margin: 0;\n  margin-bottom: 4px;\n}\n\n#editBookmarkPanel .caption-label {\n  display: none;\n}\n\n#editBookmarkPanelContent {\n  padding: 0.8em var(--arrowpanel-padding) var(--arrowpanel-padding);\n}\n\n#editBMPanel_selectionCount {\n  padding-top: 0.8em;\n}\n\n#editBookmarkPanelBottomContent {\n  padding: 0 var(--arrowpanel-padding) calc(var(--arrowpanel-padding) / 2);\n}\n\n#editBookmarkPanelBottomContent > checkbox {\n  margin-inline-start: 0;\n}\n\n#editBookmarkPanel_showForNewBookmarks > .checkbox-label-box > .checkbox-label {\n  opacity: 0.7;\n}\n\n#editBookmarkPanelBottomButtons > button {\n  margin-top: 0;\n}\n\n#editBookmarkPanel .expander-up > .button-box > .button-text,\n#editBookmarkPanel .expander-down > .button-box > .button-text {\n  display: none;\n}\n\n#editBookmarkPanel .expander-up,\n#editBookmarkPanel .expander-down {\n  appearance: none; /* override button.css */\n  -moz-context-properties: fill;\n  fill: currentColor;\n  margin: 0;\n  margin-inline-start: 4px;\n  min-width: 32px;\n  min-height: 32px;\n  color: var(--button-color);\n  background-color: var(--button-bgcolor);\n  border-radius: 4px;\n}\n\n#editBookmarkPanel .expander-up:hover,\n#editBookmarkPanel .expander-down:hover {\n  background-color: var(--button-hover-bgcolor);\n}\n\n#editBookmarkPanel .expander-up:hover:active,\n#editBookmarkPanel .expander-down:hover:active {\n  /**\n   * We override the colour here because on macOS, buttons default to\n   * having :hover:active buttons have color -moz-buttonactivetext\n   */\n  color: var(--button-color);\n  background-color: var(--button-active-bgcolor);\n}\n\n#editBookmarkPanel .expander-up {\n  list-style-image: url(\"chrome://global/skin/icons/arrow-up.svg\");\n}\n\n#editBookmarkPanel .expander-down {\n  list-style-image: url(\"chrome://global/skin/icons/arrow-down.svg\");\n}\n\n#editBMPanel_folderMenuList {\n  margin: 0;\n}\n\n#editBookmarkPanelContent > html|input,\n#editBookmarkPanelContent > hbox > html|input {\n  appearance: none;\n  padding: 8px;\n  border-radius: 4px;\n  border: 1px solid var(--input-border-color, ThreeDShadow);\n  background-color: var(--input-bgcolor, Field);\n  color: var(--input-color, FieldText);\n  margin: 0;\n}\n\n/* Focus outlines */\n\n#editBookmarkPanel .expander-up:focus-visible,\n#editBookmarkPanel .expander-down:focus-visible,\n#editBMPanel_newFolderButton:focus-visible {\n  outline: var(--focus-outline);\n  outline-offset: var(--focus-outline-offset);\n}\n\n#editBMPanel_folderTree:focus-visible,\n#editBMPanel_tagsSelector:focus-visible,\n#editBookmarkPanelContent > html|input:focus-visible,\n#editBookmarkPanelContent > hbox > html|input:focus-visible {\n  border-color: transparent;\n  outline: var(--focus-outline);\n  outline-offset: -1px;\n}\n", "",{"version":3,"sources":["webpack://./../../themes/shared/places/editBookmarkPanel.css"],"names":[],"mappings":"AAAA;;6DAE6D;;AAE7D,mDAAmD;;AAEnD;;;;;EAKE;AACF;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,wCAAwC;EACxC,UAAU;AACZ;;AAEA;EACE,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,yBAAyB;EACzB,0CAA0C;EAC1C,kBAAkB;EAClB,gBAAgB;EAChB,yBAAyB;EACzB,oBAAoB,EAAE,mCAAmC;AAC3D;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,6DAA6D;EAC7D,4BAA4B;EAC5B,sBAAsB;EACtB,SAAS;AACX;;AAEA,qEAAqE;AACrE;EACE,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,SAAS;EACT,SAAS;EACT,kBAAkB;EAClB,uCAAuC;EACvC,mCAAmC;EACnC,gBAAgB;EAChB,YAAY;EACZ,iBAAiB;;EAEjB;6EAC2E;EAC3E,cAAc;AAChB;;AAEA;EACE,6CAA6C;AAC/C;;AAEA;EACE,8CAA8C;AAChD;;AAEA;;EAEE,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,sCAAsC;AACxC;;AAEA;;;EAGE,gBAAgB;AAClB;;AAEA;EACE,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kEAAkE;AACpE;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,wEAAwE;AAC1E;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;;EAEE,aAAa;AACf;;AAEA;;EAEE,gBAAgB,EAAE,wBAAwB;EAC1C,6BAA6B;EAC7B,kBAAkB;EAClB,SAAS;EACT,wBAAwB;EACxB,eAAe;EACf,gBAAgB;EAChB,0BAA0B;EAC1B,uCAAuC;EACvC,kBAAkB;AACpB;;AAEA;;EAEE,6CAA6C;AAC/C;;AAEA;;EAEE;;;IAGE;EACF,0BAA0B;EAC1B,8CAA8C;AAChD;;AAEA;EACE,gEAAgE;AAClE;;AAEA;EACE,kEAAkE;AACpE;;AAEA;EACE,SAAS;AACX;;AAEA;;EAEE,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;EAClB,yDAAyD;EACzD,6CAA6C;EAC7C,oCAAoC;EACpC,SAAS;AACX;;AAEA,mBAAmB;;AAEnB;;;EAGE,6BAA6B;EAC7B,2CAA2C;AAC7C;;AAEA;;;;EAIE,yBAAyB;EACzB,6BAA6B;EAC7B,oBAAoB;AACtB","sourcesContent":["/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n@namespace html url(\"http://www.w3.org/1999/xhtml\");\n\n/**\n * Our OS integration code toggles whether system colors should return light or\n * dark values based on the luminosity of the toolbar background. Because themes\n * can style panels to have a different background color than the toolbar, we\n * need specific overrides for system colors used in light or dark themes.\n */\n#editBookmarkPanel:-moz-lwtheme {\n  color-scheme: light;\n}\n\n:root[lwt-popup-brighttext] #editBookmarkPanel {\n  color-scheme: dark;\n}\n\n#editBookmarkPanel > .panel-subview-body {\n  padding-bottom: 0;\n}\n\nhtml|div#editBookmarkPanelFaviconContainer {\n  display: flex;\n}\n\n#editBookmarkPanelInfoArea {\n  overflow: hidden;\n  padding: 4px var(--arrowpanel-padding) 0;\n  flex: none;\n}\n\nhtml|img#editBookmarkPanelFavicon[src] {\n  box-sizing: content-box;\n  width: 32px;\n  height: 32px;\n  padding: 5px;\n  background-color: #F9F9FA;\n  box-shadow: inset 0 0 0 1px rgba(0,0,0,.1);\n  border-radius: 6px;\n  margin-top: 10px;\n  margin-inline-start: 10px;\n  margin-bottom: -52px; /* margin-top + paddings + height */\n}\n\n#editBookmarkPanelImage {\n  border-radius: 4px;\n  height: 150px;\n  background-image: -moz-element(#editBookmarkPanelImageCanvas);\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin: 0;\n}\n\n/* Implements editBookmarkPanel resizing on folderTree un-collapse. */\n#editBMPanel_folderTree {\n  min-width: 27em;\n}\n\n#editBMPanel_newFolderButton {\n  appearance: none;\n  margin: 0;\n  border: 0;\n  border-radius: 4px;\n  background-color: var(--button-bgcolor);\n  color: var(--button-color, inherit);\n  font-weight: 600;\n  min-width: 0;\n  padding: 8px 16px;\n\n  /* This button is deeper in the visual hierarchy than others (notably the\n     buttons at the bottom of the panel), so it should be slightly smaller. */\n  font-size: 90%;\n}\n\n#editBMPanel_newFolderButton:hover {\n  background-color: var(--button-hover-bgcolor);\n}\n\n#editBMPanel_newFolderButton:hover:active {\n  background-color: var(--button-active-bgcolor);\n}\n\n#editBookmarkPanel > #editBookmarkHeaderSeparator,\n#editBookmarkPanel > .panel-subview-body > #editBookmarkSeparator {\n  margin-bottom: 0;\n  margin-inline: 16px;\n}\n\n#editBookmarkPanel {\n  font: caption;\n}\n\n#editBookmarkPanelContent > label:not(.editBMPanel_nameRow) {\n  padding-top: var(--arrowpanel-padding);\n}\n\n#editBookmarkPanelContent > #editBMPanel_folderTreeRow,\n#editBookmarkPanelContent > #editBMPanel_folderTreeRow > #editBMPanel_newFolderBox,\n#editBookmarkPanelContent > #editBMPanel_tagsSelectorRow {\n  padding-top: 4px;\n}\n\n#editBookmarkPanelContent label[control] {\n  margin: 0;\n  margin-bottom: 4px;\n}\n\n#editBookmarkPanel .caption-label {\n  display: none;\n}\n\n#editBookmarkPanelContent {\n  padding: 0.8em var(--arrowpanel-padding) var(--arrowpanel-padding);\n}\n\n#editBMPanel_selectionCount {\n  padding-top: 0.8em;\n}\n\n#editBookmarkPanelBottomContent {\n  padding: 0 var(--arrowpanel-padding) calc(var(--arrowpanel-padding) / 2);\n}\n\n#editBookmarkPanelBottomContent > checkbox {\n  margin-inline-start: 0;\n}\n\n#editBookmarkPanel_showForNewBookmarks > .checkbox-label-box > .checkbox-label {\n  opacity: 0.7;\n}\n\n#editBookmarkPanelBottomButtons > button {\n  margin-top: 0;\n}\n\n#editBookmarkPanel .expander-up > .button-box > .button-text,\n#editBookmarkPanel .expander-down > .button-box > .button-text {\n  display: none;\n}\n\n#editBookmarkPanel .expander-up,\n#editBookmarkPanel .expander-down {\n  appearance: none; /* override button.css */\n  -moz-context-properties: fill;\n  fill: currentColor;\n  margin: 0;\n  margin-inline-start: 4px;\n  min-width: 32px;\n  min-height: 32px;\n  color: var(--button-color);\n  background-color: var(--button-bgcolor);\n  border-radius: 4px;\n}\n\n#editBookmarkPanel .expander-up:hover,\n#editBookmarkPanel .expander-down:hover {\n  background-color: var(--button-hover-bgcolor);\n}\n\n#editBookmarkPanel .expander-up:hover:active,\n#editBookmarkPanel .expander-down:hover:active {\n  /**\n   * We override the colour here because on macOS, buttons default to\n   * having :hover:active buttons have color -moz-buttonactivetext\n   */\n  color: var(--button-color);\n  background-color: var(--button-active-bgcolor);\n}\n\n#editBookmarkPanel .expander-up {\n  list-style-image: url(\"chrome://global/skin/icons/arrow-up.svg\");\n}\n\n#editBookmarkPanel .expander-down {\n  list-style-image: url(\"chrome://global/skin/icons/arrow-down.svg\");\n}\n\n#editBMPanel_folderMenuList {\n  margin: 0;\n}\n\n#editBookmarkPanelContent > html|input,\n#editBookmarkPanelContent > hbox > html|input {\n  appearance: none;\n  padding: 8px;\n  border-radius: 4px;\n  border: 1px solid var(--input-border-color, ThreeDShadow);\n  background-color: var(--input-bgcolor, Field);\n  color: var(--input-color, FieldText);\n  margin: 0;\n}\n\n/* Focus outlines */\n\n#editBookmarkPanel .expander-up:focus-visible,\n#editBookmarkPanel .expander-down:focus-visible,\n#editBMPanel_newFolderButton:focus-visible {\n  outline: var(--focus-outline);\n  outline-offset: var(--focus-outline-offset);\n}\n\n#editBMPanel_folderTree:focus-visible,\n#editBMPanel_tagsSelector:focus-visible,\n#editBookmarkPanelContent > html|input:focus-visible,\n#editBookmarkPanelContent > hbox > html|input:focus-visible {\n  border-color: transparent;\n  outline: var(--focus-outline);\n  outline-offset: -1px;\n}\n"],"sourceRoot":""}]);
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

/***/ 96683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93379);
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_editBookmarkPanel_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73865);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_editBookmarkPanel_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_editBookmarkPanel_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
//# sourceMappingURL=6683.e3a58d78.iframe.bundle.js.map