"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[8150],{

/***/ 13713:
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
___CSS_LOADER_EXPORT___.push([module.id, "/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n@namespace html url(\"http://www.w3.org/1999/xhtml\");\n\n/* General popup rules */\n\n#PopupAutoComplete > richlistbox > richlistitem {\n  min-height: 20px;\n  border: 0;\n  border-radius: 0;\n  padding: 0 1px;\n}\n\n#PopupAutoComplete > richlistbox > richlistitem > .ac-site-icon {\n  margin-inline: 4px 0;\n}\n\n#PopupAutoComplete > richlistbox > richlistitem > .ac-login-item {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n\n#PopupAutoComplete > richlistbox > richlistitem > .ac-login-item > .ac-settings-button {\n  visibility: hidden;\n  height: 16px;\n  width: 16px;\n  border: 0;\n  color: inherit;\n  -moz-context-properties: fill;\n  fill: currentColor;\n  margin-inline: 8px;\n  cursor: pointer;\n  background: url(\"chrome://global/skin/icons/settings.svg\") center no-repeat;\n}\n\n#PopupAutoComplete > richlistbox > richlistitem:is(:hover, [selected]) > .ac-login-item > .ac-settings-button {\n  visibility: visible;\n}\n\n#PopupAutoComplete > richlistbox > richlistitem > .ac-title {\n  font: icon;\n  margin-inline-start: 4px;\n}\n\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"importableLearnMore\"] {\n  padding-bottom: 2px;\n  padding-inline-start: 21px;\n}\n\n#PopupAutoComplete > richlistbox {\n  padding: 0;\n}\n\n/* Popup states */\n\n.autocomplete-richlistitem:hover {\n  background-color: var(--arrowpanel-dimmed);\n}\n\n.autocomplete-richlistitem[selected] {\n  background-color: SelectedItem;\n  color: SelectedItemText;\n}\n\n/* Autocomplete richlistitem support for a two-line label display */\n\n#PopupAutoComplete > richlistbox > richlistitem > .two-line-wrapper {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  gap: 8px;\n  margin: 0;\n  min-width: 0;\n}\n\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"login\"] > .ac-site-icon,\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"possible-username\"] > .ac-site-icon,\n#PopupAutoComplete > richlistbox > richlistitem > .two-line-wrapper > .ac-site-icon {\n  display: block;\n  margin-inline: 4px;\n}\n\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"possible-username\"] > .ac-site-icon {\n  visibility: hidden;\n}\n\n#PopupAutoComplete > richlistbox > richlistitem > .two-line-wrapper > .labels-wrapper {\n  /* The text should flex while the icon should not */\n  flex: 1;\n  /* min-width is needed to get the text-overflow: ellipsis to work for the children */\n  min-width: 0;\n}\n\n#PopupAutoComplete > richlistbox > richlistitem > .two-line-wrapper > .labels-wrapper > .label-row {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"generatedPassword\"] > .two-line-wrapper > .labels-wrapper > .generated-password-autosave,\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"importableLearnMore\"] > .ac-title,\n#PopupAutoComplete > richlistbox > richlistitem > .two-line-wrapper > .labels-wrapper > .line2-label {\n  padding-top: 2px !important;\n  opacity: .6;\n}\n\n/* Login form autocompletion (with and without origin showing) and generated passwords */\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"generatedPassword\"] > .two-line-wrapper > .ac-site-icon,\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"loginWithOrigin\"] > .two-line-wrapper > .ac-site-icon,\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"login\"] > .ac-site-icon {\n  fill: GrayText;\n}\n\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"importableLogins\"] > .two-line-wrapper > .ac-site-icon {\n  fill: GrayText;\n  list-style-image: url(chrome://browser/skin/import.svg);\n}\n\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"generatedPassword\"][selected] > .two-line-wrapper > .ac-site-icon,\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"importableLogins\"][selected] > .two-line-wrapper > .ac-site-icon,\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"loginWithOrigin\"][selected] > .two-line-wrapper > .ac-site-icon,\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"login\"] > .ac-site-icon[selected] {\n  fill: SelectedItemText;\n}\n\n/* Login form autocompletion */\n#PopupAutoComplete > richlistbox > richlistitem > .two-line-wrapper {\n  padding: 4px;\n  padding-inline-start: 0;\n}\n\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"generatedPassword\"]:not([collapsed=\"true\"]) {\n  /* Workaround bug 451997 and/or bug 492645 */\n  display: block;\n}\n\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"generatedPassword\"] > .two-line-wrapper > .labels-wrapper > .line2-label > span {\n  /* The font-family is only adjusted on the inner span so that the\n     line-height of .line2-label matches that of .line1-label */\n  font-family: monospace;\n}\n\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"generatedPassword\"] > .two-line-wrapper > .labels-wrapper > .generated-password-autosave > span {\n  /* The font-* properties are only adjusted on the inner span so that the\n     line-height of .generated-password-autosave matches that of .line1-label */\n  font-style: italic;\n  font-size: 0.85em;\n  white-space: normal;\n}\n\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"login\"] + richlistitem[originaltype=\"generatedPassword\"],\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"loginWithOrigin\"] + richlistitem[originaltype=\"generatedPassword\"] {\n  /* Separator between logins and generated passwords. This uses --panel-separator-color from default\n   * themes since autocomplete doesn't yet switch to dark. */\n  border-top: 1px solid hsla(210,4%,10%,.14);\n}\n\n/* Insecure field warning */\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"insecureWarning\"] {\n  background-color: var(--arrowpanel-dimmed);\n  border-bottom: 1px solid var(--panel-separator-color);\n  padding-block: 4px;\n}\n\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"insecureWarning\"][selected] {\n  background-color: var(--arrowpanel-dimmed-further);\n  color: -moz-DialogText;\n}\n\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"insecureWarning\"] > .ac-title {\n  color: var(--grey-60);\n  font-size: 1em;\n}\n\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"insecureWarning\"] > .ac-title .ac-emphasize-text-title {\n  font-weight: 600;\n}\n\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"insecureWarning\"][selected] > .ac-title {\n  color: inherit;\n}\n\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"insecureWarning\"] > .ac-site-icon {\n  list-style-image: url(chrome://global/skin/icons/security-broken.svg);\n  -moz-context-properties: fill;\n  fill: var(--grey-60);\n}\n", "",{"version":3,"sources":["webpack://./../../themes/shared/autocomplete.css"],"names":[],"mappings":"AAAA;;6DAE6D;;AAE7D,mDAAmD;;AAEnD,wBAAwB;;AAExB;EACE,gBAAgB;EAChB,SAAS;EACT,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,SAAS;EACT,cAAc;EACd,6BAA6B;EAC7B,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,2EAA2E;AAC7E;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,wBAAwB;AAC1B;;AAEA;EACE,mBAAmB;EACnB,0BAA0B;AAC5B;;AAEA;EACE,UAAU;AACZ;;AAEA,iBAAiB;;AAEjB;EACE,0CAA0C;AAC5C;;AAEA;EACE,8BAA8B;EAC9B,uBAAuB;AACzB;;AAEA,mEAAmE;;AAEnE;EACE,sBAAsB;EACtB,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,SAAS;EACT,YAAY;AACd;;AAEA;;;EAGE,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,mDAAmD;EACnD,OAAO;EACP,oFAAoF;EACpF,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;;;EAGE,2BAA2B;EAC3B,WAAW;AACb;;AAEA,wFAAwF;AACxF;;;EAGE,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,uDAAuD;AACzD;;AAEA;;;;EAIE,sBAAsB;AACxB;;AAEA,8BAA8B;AAC9B;EACE,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,4CAA4C;EAC5C,cAAc;AAChB;;AAEA;EACE;+DAC6D;EAC7D,sBAAsB;AACxB;;AAEA;EACE;+EAC6E;EAC7E,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;;EAEE;4DAC0D;EAC1D,0CAA0C;AAC5C;;AAEA,2BAA2B;AAC3B;EACE,0CAA0C;EAC1C,qDAAqD;EACrD,kBAAkB;AACpB;;AAEA;EACE,kDAAkD;EAClD,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,qEAAqE;EACrE,6BAA6B;EAC7B,oBAAoB;AACtB","sourcesContent":["/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n@namespace html url(\"http://www.w3.org/1999/xhtml\");\n\n/* General popup rules */\n\n#PopupAutoComplete > richlistbox > richlistitem {\n  min-height: 20px;\n  border: 0;\n  border-radius: 0;\n  padding: 0 1px;\n}\n\n#PopupAutoComplete > richlistbox > richlistitem > .ac-site-icon {\n  margin-inline: 4px 0;\n}\n\n#PopupAutoComplete > richlistbox > richlistitem > .ac-login-item {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n\n#PopupAutoComplete > richlistbox > richlistitem > .ac-login-item > .ac-settings-button {\n  visibility: hidden;\n  height: 16px;\n  width: 16px;\n  border: 0;\n  color: inherit;\n  -moz-context-properties: fill;\n  fill: currentColor;\n  margin-inline: 8px;\n  cursor: pointer;\n  background: url(\"chrome://global/skin/icons/settings.svg\") center no-repeat;\n}\n\n#PopupAutoComplete > richlistbox > richlistitem:is(:hover, [selected]) > .ac-login-item > .ac-settings-button {\n  visibility: visible;\n}\n\n#PopupAutoComplete > richlistbox > richlistitem > .ac-title {\n  font: icon;\n  margin-inline-start: 4px;\n}\n\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"importableLearnMore\"] {\n  padding-bottom: 2px;\n  padding-inline-start: 21px;\n}\n\n#PopupAutoComplete > richlistbox {\n  padding: 0;\n}\n\n/* Popup states */\n\n.autocomplete-richlistitem:hover {\n  background-color: var(--arrowpanel-dimmed);\n}\n\n.autocomplete-richlistitem[selected] {\n  background-color: SelectedItem;\n  color: SelectedItemText;\n}\n\n/* Autocomplete richlistitem support for a two-line label display */\n\n#PopupAutoComplete > richlistbox > richlistitem > .two-line-wrapper {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  gap: 8px;\n  margin: 0;\n  min-width: 0;\n}\n\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"login\"] > .ac-site-icon,\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"possible-username\"] > .ac-site-icon,\n#PopupAutoComplete > richlistbox > richlistitem > .two-line-wrapper > .ac-site-icon {\n  display: block;\n  margin-inline: 4px;\n}\n\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"possible-username\"] > .ac-site-icon {\n  visibility: hidden;\n}\n\n#PopupAutoComplete > richlistbox > richlistitem > .two-line-wrapper > .labels-wrapper {\n  /* The text should flex while the icon should not */\n  flex: 1;\n  /* min-width is needed to get the text-overflow: ellipsis to work for the children */\n  min-width: 0;\n}\n\n#PopupAutoComplete > richlistbox > richlistitem > .two-line-wrapper > .labels-wrapper > .label-row {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"generatedPassword\"] > .two-line-wrapper > .labels-wrapper > .generated-password-autosave,\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"importableLearnMore\"] > .ac-title,\n#PopupAutoComplete > richlistbox > richlistitem > .two-line-wrapper > .labels-wrapper > .line2-label {\n  padding-top: 2px !important;\n  opacity: .6;\n}\n\n/* Login form autocompletion (with and without origin showing) and generated passwords */\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"generatedPassword\"] > .two-line-wrapper > .ac-site-icon,\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"loginWithOrigin\"] > .two-line-wrapper > .ac-site-icon,\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"login\"] > .ac-site-icon {\n  fill: GrayText;\n}\n\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"importableLogins\"] > .two-line-wrapper > .ac-site-icon {\n  fill: GrayText;\n  list-style-image: url(chrome://browser/skin/import.svg);\n}\n\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"generatedPassword\"][selected] > .two-line-wrapper > .ac-site-icon,\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"importableLogins\"][selected] > .two-line-wrapper > .ac-site-icon,\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"loginWithOrigin\"][selected] > .two-line-wrapper > .ac-site-icon,\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"login\"] > .ac-site-icon[selected] {\n  fill: SelectedItemText;\n}\n\n/* Login form autocompletion */\n#PopupAutoComplete > richlistbox > richlistitem > .two-line-wrapper {\n  padding: 4px;\n  padding-inline-start: 0;\n}\n\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"generatedPassword\"]:not([collapsed=\"true\"]) {\n  /* Workaround bug 451997 and/or bug 492645 */\n  display: block;\n}\n\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"generatedPassword\"] > .two-line-wrapper > .labels-wrapper > .line2-label > span {\n  /* The font-family is only adjusted on the inner span so that the\n     line-height of .line2-label matches that of .line1-label */\n  font-family: monospace;\n}\n\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"generatedPassword\"] > .two-line-wrapper > .labels-wrapper > .generated-password-autosave > span {\n  /* The font-* properties are only adjusted on the inner span so that the\n     line-height of .generated-password-autosave matches that of .line1-label */\n  font-style: italic;\n  font-size: 0.85em;\n  white-space: normal;\n}\n\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"login\"] + richlistitem[originaltype=\"generatedPassword\"],\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"loginWithOrigin\"] + richlistitem[originaltype=\"generatedPassword\"] {\n  /* Separator between logins and generated passwords. This uses --panel-separator-color from default\n   * themes since autocomplete doesn't yet switch to dark. */\n  border-top: 1px solid hsla(210,4%,10%,.14);\n}\n\n/* Insecure field warning */\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"insecureWarning\"] {\n  background-color: var(--arrowpanel-dimmed);\n  border-bottom: 1px solid var(--panel-separator-color);\n  padding-block: 4px;\n}\n\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"insecureWarning\"][selected] {\n  background-color: var(--arrowpanel-dimmed-further);\n  color: -moz-DialogText;\n}\n\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"insecureWarning\"] > .ac-title {\n  color: var(--grey-60);\n  font-size: 1em;\n}\n\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"insecureWarning\"] > .ac-title .ac-emphasize-text-title {\n  font-weight: 600;\n}\n\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"insecureWarning\"][selected] > .ac-title {\n  color: inherit;\n}\n\n#PopupAutoComplete > richlistbox > richlistitem[originaltype=\"insecureWarning\"] > .ac-site-icon {\n  list-style-image: url(chrome://global/skin/icons/security-broken.svg);\n  -moz-context-properties: fill;\n  fill: var(--grey-60);\n}\n"],"sourceRoot":""}]);
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

/***/ 18150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93379);
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_autocomplete_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13713);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_autocomplete_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_autocomplete_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
//# sourceMappingURL=8150.0a7840f8.iframe.bundle.js.map