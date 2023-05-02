"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[9514],{

/***/ 58685:
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(chrome://global/skin/in-content/common.css);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n:host {\n  display: flex;\n  flex-direction: column;\n  text-align: start;\n  width: 22.34em;\n}\n\nh1 {\n  font-size: 1.30em;\n  font-weight: normal;\n  margin-block: 0 16px;\n  min-height: 1em;\n}\n\nol {\n  padding-inline-start: 24px;\n  margin-block: 16px 0;\n}\n\nli:not(:last-child) {\n  margin-block-end: 16px;\n}\n\ninput[type=\"checkbox\"] {\n  margin-block: 0;\n}\n\ndiv[name=\"page-loading\"] > .buttons > button {\n  color: transparent;\n}\n\n.loading-block {\n  background-color: var(--in-content-button-background);\n  border-radius: 4px;\n  opacity: 0.4;\n  margin-block-start: 16px;\n}\n\n.loading-block.large {\n  height: 36px;\n}\n\n.loading-block.small {\n  height: 16px;\n}\n\n.buttons {\n  margin-block-start: 16px;\n}\n\n.deemphasized-text {\n  font-size: 0.84em;\n}\n\n@media not (prefers-contrast) {\n  .deemphasized-text {\n    color: var(--in-content-deemphasized-text);\n  }\n}\n\nfieldset {\n  border: 0;\n}\n\nlabel:not([hidden]) {\n  display: flex;\n  align-items: center;\n  width: fit-content;\n}\n\n#wizard-deck > div {\n  display: flex;\n  flex-direction: column;\n}\n\n#browser-profile-selector {\n  display: flex;\n  align-items: center;\n  padding: 8px;\n  margin: 0;\n  font-weight: unset;\n}\n\n.migrator-icon {\n  content: url(chrome://global/skin/icons/defaultFavicon.svg);\n  height: 32px;\n  width: 32px;\n  -moz-context-properties: fill;\n  fill: currentColor;\n}\n\n.migrator-icon,\n.migrator-description,\n.dropdown-icon {\n  pointer-events: none;\n}\n\n.dropdown-icon {\n  content: url(\"chrome://global/skin/icons/arrow-down.svg\");\n  -moz-context-properties: fill;\n  fill: currentColor;\n  height: 16px;\n  width: 16px;\n}\n\n.migrator-description {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: center;\n  align-items: start;\n  margin-inline-start: 11px;\n}\n\n#profile-name:empty {\n  display: none;\n}\n\n#profile-name {\n  font-size: 0.73em;\n  text-transform: uppercase;\n}\n\n/**\n * Until we address bug 1823489, it's not that easy to apply styles on\n * the panel-list. We work around this by setting the CSS variable for\n * the border instead.\n */\nslot::slotted(panel-list),\nslot::slotted(panel) {\n  --in-content-box-border-color: transparent;\n}\n\ndiv[name=\"page-selection\"]:not([show-import-all]) #select-all,\ndiv[name=\"page-selection\"][show-import-all][single-item] #select-all,\ndiv[name=\"page-selection\"]:not([show-import-all]) summary {\n  display: none;\n}\n\ndiv[name=\"page-selection\"][show-import-all]:not([single-item]) label:not(#select-all)  {\n  margin-inline-start: 24px;\n}\n\ndiv[name=\"page-selection\"][show-import-all] #select-all  {\n  display: flex;\n}\n\ndiv[name=\"page-selection\"][migrator-type=\"browser\"] > .buttons > #import-from-file,\ndiv[name=\"page-selection\"][migrator-type=\"file\"] > .buttons > #import,\ndiv[name=\"page-selection\"][migrator-type=\"file\"] > .resource-selection-details,\ndiv[name=\"page-selection\"][migrator-type=\"file\"] > .resource-selection-preamble,\ndiv[name=\"page-selection\"][show-import-all] .resource-selection-preamble {\n  display: none;\n}\n\n.resource-selection-preamble {\n  margin-block-start: 16px;\n}\n\ndetails[open] .expand-collapse-icon {\n  content: url(\"chrome://browser/skin/zoom-out.svg\");\n}\n\n.expand-collapse-icon {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  content: url(\"chrome://global/skin/icons/plus.svg\");\n  grid-area: b;\n  -moz-context-properties: fill;\n  fill: currentColor;\n  justify-self: end;\n  margin-inline-end: 8px;\n}\n\ndetails:not([open]) summary {\n  margin-block-end: 16px;\n}\n\nsummary {\n  cursor: pointer;\n}\n\n#resource-type-list {\n  padding: 0;\n}\n\n#resource-type-list > label {\n  margin-block-start: 16px;\n}\n\n:host(:not([dialog-mode])) .cancel-close,\n:host(:not([dialog-mode])) .done-button,\n:host([dialog-mode]) .continue-button {\n  display: none;\n}\n\n.resource-progress {\n  display: grid;\n  gap: 16px;\n}\n\n.resource-progress-group {\n  display: grid;\n  grid-template-columns: min-content auto;\n  grid-template-areas: \"icon type\"\n                       \"icon status\";\n  align-items: center;\n  justify-items: start;\n}\n\n.resource-progress-group[hidden] {\n  display: none;\n}\n\n.success-text {\n  grid-area: status;\n}\n\n.progress-icon {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  content: url(\"chrome://browser/skin/migration/success.svg\");\n  -moz-context-properties: fill;\n  fill: var(--in-content-success-icon-color);\n  margin-inline-end: 8px;\n}\n\n.error-icon {\n  content: url(\"chrome://global/skin/icons/error.svg\");\n  -moz-context-properties: fill;\n  fill: var(--in-content-danger-button-background);\n  margin-inline-end: 8px;\n}\n\n.page-portrait-icon {\n  width: 16px;\n  height: 16px;\n  content: url(\"chrome://global/skin/icons/page-portrait.svg\");\n  -moz-context-properties: fill;\n  fill: currentColor;\n  vertical-align: middle;\n}\n\n.safari-icon-3dots {\n  width: 16px;\n  height: 16px;\n  vertical-align: middle;\n  content: url(\"chrome://browser/skin/migration/safari-icon-3dots.svg\");\n  -moz-context-properties: fill, stroke;\n  fill: currentColor;\n  stroke: color-mix(in srgb, currentColor 10%, transparent 90%);\n}\n\n.no-browsers-found-message {\n  display: flex;\n}\n\n.error-message {\n  display: flex;\n  align-items: start;\n}\n\n.no-resources-found {\n  font-size: 0.84em;\n  margin-block-start: 16px;\n}\n\ndiv[name=\"page-selection\"]:not([no-resources]) .no-resources-found,\ndiv[name=\"page-selection\"][no-resources] .hide-on-error {\n  display: none;\n}\n\n/**\n * Workaround for bug 1671784, which shows a slight outline around the\n * rotating masked element.\n */\n.progress-icon-parent {\n  border-radius: 0.01px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n}\n\ndiv[name=\"page-selection\"][show-import-all] .resource-selection-details {\n  padding-inline-start: 8px;\n}\n\n.resource-selection-details > summary {\n  list-style: none;\n  display: grid;\n  grid-template-areas: \"a b\"\n                       \"c b\";\n  margin-block: 16px 0;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .progress-icon:not(.completed) {\n    content: url(\"chrome://browser/skin/tabbrowser/hourglass.svg\");\n    fill: var(--in-content-deemphasized-text);\n  }\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .progress-icon:not(.completed) {\n    content: \"\";\n    background-image: conic-gradient(rgba(255, 255, 255, 0.31) 0%, rgba(255, 189, 79, 0.57) 38%, rgba(255, 74, 162, 0.79) 70%, rgb(144, 89, 255) 100%);\n    mask: url(\"chrome://browser/skin/migration/progress-mask.svg\");\n    mask-composite: exclude;\n  }\n\n  .progress-icon:not(.completed) {\n    animation-name: rotate;\n    animation-duration: 1s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n  }\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n", "",{"version":3,"sources":["webpack://./../../themes/shared/migration/migration-wizard.css"],"names":[],"mappings":"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","sourcesContent":["/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n@import url(\"chrome://global/skin/in-content/common.css\");\n\n:host {\n  display: flex;\n  flex-direction: column;\n  text-align: start;\n  width: 22.34em;\n}\n\nh1 {\n  font-size: 1.30em;\n  font-weight: normal;\n  margin-block: 0 16px;\n  min-height: 1em;\n}\n\nol {\n  padding-inline-start: 24px;\n  margin-block: 16px 0;\n}\n\nli:not(:last-child) {\n  margin-block-end: 16px;\n}\n\ninput[type=\"checkbox\"] {\n  margin-block: 0;\n}\n\ndiv[name=\"page-loading\"] > .buttons > button {\n  color: transparent;\n}\n\n.loading-block {\n  background-color: var(--in-content-button-background);\n  border-radius: 4px;\n  opacity: 0.4;\n  margin-block-start: 16px;\n}\n\n.loading-block.large {\n  height: 36px;\n}\n\n.loading-block.small {\n  height: 16px;\n}\n\n.buttons {\n  margin-block-start: 16px;\n}\n\n.deemphasized-text {\n  font-size: 0.84em;\n}\n\n@media not (prefers-contrast) {\n  .deemphasized-text {\n    color: var(--in-content-deemphasized-text);\n  }\n}\n\nfieldset {\n  border: 0;\n}\n\nlabel:not([hidden]) {\n  display: flex;\n  align-items: center;\n  width: fit-content;\n}\n\n#wizard-deck > div {\n  display: flex;\n  flex-direction: column;\n}\n\n#browser-profile-selector {\n  display: flex;\n  align-items: center;\n  padding: 8px;\n  margin: 0;\n  font-weight: unset;\n}\n\n.migrator-icon {\n  content: url(chrome://global/skin/icons/defaultFavicon.svg);\n  height: 32px;\n  width: 32px;\n  -moz-context-properties: fill;\n  fill: currentColor;\n}\n\n.migrator-icon,\n.migrator-description,\n.dropdown-icon {\n  pointer-events: none;\n}\n\n.dropdown-icon {\n  content: url(\"chrome://global/skin/icons/arrow-down.svg\");\n  -moz-context-properties: fill;\n  fill: currentColor;\n  height: 16px;\n  width: 16px;\n}\n\n.migrator-description {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: center;\n  align-items: start;\n  margin-inline-start: 11px;\n}\n\n#profile-name:empty {\n  display: none;\n}\n\n#profile-name {\n  font-size: 0.73em;\n  text-transform: uppercase;\n}\n\n/**\n * Until we address bug 1823489, it's not that easy to apply styles on\n * the panel-list. We work around this by setting the CSS variable for\n * the border instead.\n */\nslot::slotted(panel-list),\nslot::slotted(panel) {\n  --in-content-box-border-color: transparent;\n}\n\ndiv[name=\"page-selection\"]:not([show-import-all]) #select-all,\ndiv[name=\"page-selection\"][show-import-all][single-item] #select-all,\ndiv[name=\"page-selection\"]:not([show-import-all]) summary {\n  display: none;\n}\n\ndiv[name=\"page-selection\"][show-import-all]:not([single-item]) label:not(#select-all)  {\n  margin-inline-start: 24px;\n}\n\ndiv[name=\"page-selection\"][show-import-all] #select-all  {\n  display: flex;\n}\n\ndiv[name=\"page-selection\"][migrator-type=\"browser\"] > .buttons > #import-from-file,\ndiv[name=\"page-selection\"][migrator-type=\"file\"] > .buttons > #import,\ndiv[name=\"page-selection\"][migrator-type=\"file\"] > .resource-selection-details,\ndiv[name=\"page-selection\"][migrator-type=\"file\"] > .resource-selection-preamble,\ndiv[name=\"page-selection\"][show-import-all] .resource-selection-preamble {\n  display: none;\n}\n\n.resource-selection-preamble {\n  margin-block-start: 16px;\n}\n\ndetails[open] .expand-collapse-icon {\n  content: url(\"chrome://browser/skin/zoom-out.svg\");\n}\n\n.expand-collapse-icon {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  content: url(\"chrome://global/skin/icons/plus.svg\");\n  grid-area: b;\n  -moz-context-properties: fill;\n  fill: currentColor;\n  justify-self: end;\n  margin-inline-end: 8px;\n}\n\ndetails:not([open]) summary {\n  margin-block-end: 16px;\n}\n\nsummary {\n  cursor: pointer;\n}\n\n#resource-type-list {\n  padding: 0;\n}\n\n#resource-type-list > label {\n  margin-block-start: 16px;\n}\n\n:host(:not([dialog-mode])) .cancel-close,\n:host(:not([dialog-mode])) .done-button,\n:host([dialog-mode]) .continue-button {\n  display: none;\n}\n\n.resource-progress {\n  display: grid;\n  gap: 16px;\n}\n\n.resource-progress-group {\n  display: grid;\n  grid-template-columns: min-content auto;\n  grid-template-areas: \"icon type\"\n                       \"icon status\";\n  align-items: center;\n  justify-items: start;\n}\n\n.resource-progress-group[hidden] {\n  display: none;\n}\n\n.success-text {\n  grid-area: status;\n}\n\n.progress-icon {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  content: url(\"chrome://browser/skin/migration/success.svg\");\n  -moz-context-properties: fill;\n  fill: var(--in-content-success-icon-color);\n  margin-inline-end: 8px;\n}\n\n.error-icon {\n  content: url(\"chrome://global/skin/icons/error.svg\");\n  -moz-context-properties: fill;\n  fill: var(--in-content-danger-button-background);\n  margin-inline-end: 8px;\n}\n\n.page-portrait-icon {\n  width: 16px;\n  height: 16px;\n  content: url(\"chrome://global/skin/icons/page-portrait.svg\");\n  -moz-context-properties: fill;\n  fill: currentColor;\n  vertical-align: middle;\n}\n\n.safari-icon-3dots {\n  width: 16px;\n  height: 16px;\n  vertical-align: middle;\n  content: url(\"chrome://browser/skin/migration/safari-icon-3dots.svg\");\n  -moz-context-properties: fill, stroke;\n  fill: currentColor;\n  stroke: color-mix(in srgb, currentColor 10%, transparent 90%);\n}\n\n.no-browsers-found-message {\n  display: flex;\n}\n\n.error-message {\n  display: flex;\n  align-items: start;\n}\n\n.no-resources-found {\n  font-size: 0.84em;\n  margin-block-start: 16px;\n}\n\ndiv[name=\"page-selection\"]:not([no-resources]) .no-resources-found,\ndiv[name=\"page-selection\"][no-resources] .hide-on-error {\n  display: none;\n}\n\n/**\n * Workaround for bug 1671784, which shows a slight outline around the\n * rotating masked element.\n */\n.progress-icon-parent {\n  border-radius: 0.01px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n}\n\ndiv[name=\"page-selection\"][show-import-all] .resource-selection-details {\n  padding-inline-start: 8px;\n}\n\n.resource-selection-details > summary {\n  list-style: none;\n  display: grid;\n  grid-template-areas: \"a b\"\n                       \"c b\";\n  margin-block: 16px 0;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .progress-icon:not(.completed) {\n    content: url(\"chrome://browser/skin/tabbrowser/hourglass.svg\");\n    fill: var(--in-content-deemphasized-text);\n  }\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .progress-icon:not(.completed) {\n    content: \"\";\n    background-image: conic-gradient(rgba(255, 255, 255, 0.31) 0%, rgba(255, 189, 79, 0.57) 38%, rgba(255, 74, 162, 0.79) 70%, rgb(144, 89, 255) 100%);\n    mask: url(\"chrome://browser/skin/migration/progress-mask.svg\");\n    mask-composite: exclude;\n  }\n\n  .progress-icon:not(.completed) {\n    animation-name: rotate;\n    animation-duration: 1s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n  }\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ 19514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93379);
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_migration_wizard_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58685);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_migration_wizard_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_migration_wizard_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
//# sourceMappingURL=9514.5e051bbd.iframe.bundle.js.map