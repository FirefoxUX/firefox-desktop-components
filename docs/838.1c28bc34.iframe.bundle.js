"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[838],{

/***/ 83913:
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
___CSS_LOADER_EXPORT___.push([module.id, "/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this file,\n * You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n/* Permissions */\n\n.highlighting-group {\n  --section-highlight-background-color: color-mix(in srgb, var(--in-content-accent-color) 20%, transparent);\n}\n\n.permission-icon {\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n  margin-inline-end: 0.2em;\n}\n\n.permission-icon,\n.privacy-detailedoption .checkbox-label-box,\n.extra-information-label > image,\n.arrowhead,\n.reload-tabs-button,\n.content-blocking-warning-image {\n  -moz-context-properties: fill;\n  fill: currentColor;\n}\n\n.geo-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/geo.svg);\n}\n\n.xr-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/xr.svg);\n}\n\n.camera-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/camera.svg);\n}\n\n.microphone-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/microphone.svg);\n}\n\n.speaker-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/speaker.svg);\n}\n\n.desktop-notification-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/desktop-notification.svg);\n}\n\n.autoplay-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/autoplay-media.svg);\n}\n\n.midi-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/midi.svg);\n}\n\n/* Content Blocking */\n\n/* Override styling that sets descriptions as grey */\n#trackingGroup description.indent,\n#trackingGroup .indent > description {\n  color: inherit;\n}\n\n[data-subcategory=\"trackingprotection\"] {\n  margin-top: 10px;\n}\n\n#trackingProtectionShield {\n  list-style-image: url(\"chrome://browser/skin/controlcenter/tracking-protection.svg\");\n  -moz-context-properties: fill, fill-opacity;\n  fill: currentColor;\n  fill-opacity: 0.5;\n  width: 64px;\n  height: 64px;\n  margin-inline-end: 10px;\n}\n\n.privacy-detailedoption,\n#fpiIncompatibilityWarning {\n  margin: 3px 0;\n}\n\n#fpiIncompatibilityWarning {\n  background-color: var(--section-highlight-background-color);\n}\n\n#fpiIncompatibilityWarning,\n#contentBlockingCategories {\n  margin-top: 16px;\n}\n\n.privacy-detailedoption {\n  border-color: var(--in-content-box-border-color);\n}\n\n.privacy-detailedoption.disabled {\n  opacity: 0.5;\n}\n\n.privacy-detailedoption.disabled .radio-check {\n  opacity: 1;\n}\n\n.privacy-detailedoption > .indent {\n  margin-inline-end: 22px;\n}\n\n.arrowhead {\n  border-radius: 2px;\n  min-height: 20px;\n  min-width: 20px;\n  max-height: 20px;\n  max-width: 20px;\n  list-style-image: url(\"chrome://global/skin/icons/arrow-down-12.svg\");\n  background-color: transparent;\n  padding: 3px;\n}\n\n.arrowhead:not([disabled]):hover {\n  cursor: pointer;\n}\n\n.arrowhead.up {\n  list-style-image: url(\"chrome://global/skin/icons/arrow-up-12.svg\");\n}\n\n.privacy-detailedoption.expanded:not(.selected) .reload-tabs {\n  display: none;\n}\n\n.content-blocking-warning.reload-tabs:not([hidden]) {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.content-blocking-reload-desc-container {\n  /* 345px is enough for (almost) twice the size of the default English\n   * string at default font sizes. If this and the button do not fit\n   * on one line, the button will get wrapped to the next line and this\n   * item will stretch to fill all available space. */\n  flex: 1 1 345px;\n  display: flex;\n  align-self: center;\n}\n\n.content-blocking-reload-description {\n  line-height: 1.8em;\n  margin-inline-end: 5px;\n}\n\n.reload-tabs-button {\n  max-height: 30px;\n  min-height: 30px;\n  padding: 0 20px;\n  list-style-image: url(\"chrome://global/skin/icons/reload.svg\");\n  align-self: center;\n}\n\n.reload-tabs-button .button-icon {\n  margin: 0 6px;\n  color: inherit;\n}\n\n.reload-tabs-button .button-text {\n  color: inherit;\n}\n\n.privacy-detailedoption.selected .content-blocking-warning {\n  background-color: var(--section-highlight-background-color);\n}\n\n.privacy-detailedoption.selected .arrowhead {\n  display: none;\n}\n\n.privacy-detailedoption.selected {\n  border-color: var(--in-content-accent-color);\n}\n\n@media (prefers-contrast) {\n  .privacy-detailedoption.selected {\n    outline: 2px solid var(--in-content-accent-color);\n  }\n}\n\n@media not (prefers-contrast) {\n  .privacy-detailedoption {\n    background-color: rgba(215, 215, 219, 0.1);\n  }\n\n  .privacy-detailedoption.selected {\n    background-color: var(--section-highlight-background-color);\n  }\n}\n\n.content-blocking-warning-title,\n.privacy-detailedoption .radio-label-box {\n  font-weight: bold;\n}\n\n.privacy-detailedoption:not(.expanded, .selected) .privacy-extra-information {\n  visibility: collapse;\n}\n\n.extra-information-label {\n  margin-top: 18px;\n}\n\n/* Apply display: block to the containers of all the category information, as\n * without this the flex-wrapped blocks inside don't stretch vertically to\n * enclose their content. */\n.privacy-detailedoption > .indent {\n  display: block;\n}\n\n.privacy-detailedoption.expanded .privacy-extra-information,\n.privacy-detailedoption.selected .privacy-extra-information {\n  display: flex;\n  flex-direction: column;\n  align-content: stretch;\n}\n\n.privacy-extra-information > .indent {\n  margin-bottom: 18px;\n}\n\n.privacy-extra-information > .custom-option {\n  margin: 10px 0;\n}\n\n.content-blocking-warning {\n  /* Match .indent's horizontal padding, minus the border added via .info-box-container: */\n  padding-inline: calc(22px - 1px);\n  margin: 10px 0;\n}\n\n.content-blocking-warning:not([hidden]) + .content-blocking-warning {\n  margin-top: 0;\n}\n\n.content-blocking-extra-blocking-desc {\n  margin-inline-start: 0.5em;\n  position: relative;\n  top: 0.65em;\n}\n\n.content-blocking-label,\n.doh-label {\n  display: list-item;\n  line-height: 1.2em;\n}\n\n.content-blocking-warning-image {\n  list-style-image: url(\"chrome://global/skin/icons/warning.svg\");\n  margin-inline-end: 6px;\n}\n\n#blockCookiesMenu {\n  width: 450px;\n}\n\n#blockCookiesMenu,\n#trackingProtectionMenu {\n  margin: 0;\n}\n\n#changeBlockListLink {\n  margin-inline-start: 56px;\n}\n\n#telemetry-container {\n  margin-block: 4px;\n  line-height: 1.8em;\n  width: 100%;\n}\n\n.privacy-detailedoption-description {\n  font-size: 90%;\n  opacity: 0.6;\n}\n\n.warning-description {\n  background: url(chrome://global/skin/icons/warning.svg) no-repeat 0 5px;\n  opacity: 0.6;\n  -moz-context-properties: fill, stroke;\n  fill: #d7b600;\n  stroke: white;\n  padding-inline-start: 20px;\n}\n\n.reject-trackers-warning-icon:-moz-locale-dir(rtl) {\n  background-position-x: right 0;\n}\n\n#contentBlockingChangeCookieSettings {\n  padding: 0.25em 0.75em;\n  margin: 4px 8px;\n}\n\n#deleteOnCloseNote {\n  margin-top: 8px;\n  margin-inline-end: 32px;\n}\n\n#submitHealthReportBox {\n  display: inline-flex;\n}\n\n/* Address bar */\n\n.firefoxSuggestOptionBox {\n  /* With this value we're trying to keep the apparent vertical space between\n     option boxes the same as the apparent vertical space between the labels of\n     the checkboxes above the Firefox Suggest subsection. */\n  margin-block-start: 18px;\n}\n\n.firefoxSuggestOptionBox:first-of-type {\n  /* Similar here: Make the apparent vertical space between the last checkbox\n     and first option box the same as elsewhere. */\n  margin-block-start: 11px;\n}\n\n#firefoxSuggestInfoBox {\n  margin-block-start: 16px;\n}\n\n#openSearchEnginePreferences {\n  margin-block-start: .5em;\n}\n\n#dismissedSuggestions,\n#openSearchEnginePreferences.extraMargin {\n  margin-block-start: 2em;\n}\n\n#dohDescription,\n#dohLearnMore,\n#dohStatusSection {\n  line-height: 1.8em;\n}\n", "",{"version":3,"sources":["webpack://./../../themes/shared/preferences/privacy.css"],"names":[],"mappings":"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","sourcesContent":["/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this file,\n * You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n/* Permissions */\n\n.highlighting-group {\n  --section-highlight-background-color: color-mix(in srgb, var(--in-content-accent-color) 20%, transparent);\n}\n\n.permission-icon {\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n  margin-inline-end: 0.2em;\n}\n\n.permission-icon,\n.privacy-detailedoption .checkbox-label-box,\n.extra-information-label > image,\n.arrowhead,\n.reload-tabs-button,\n.content-blocking-warning-image {\n  -moz-context-properties: fill;\n  fill: currentColor;\n}\n\n.geo-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/geo.svg);\n}\n\n.xr-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/xr.svg);\n}\n\n.camera-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/camera.svg);\n}\n\n.microphone-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/microphone.svg);\n}\n\n.speaker-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/speaker.svg);\n}\n\n.desktop-notification-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/desktop-notification.svg);\n}\n\n.autoplay-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/autoplay-media.svg);\n}\n\n.midi-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/midi.svg);\n}\n\n/* Content Blocking */\n\n/* Override styling that sets descriptions as grey */\n#trackingGroup description.indent,\n#trackingGroup .indent > description {\n  color: inherit;\n}\n\n[data-subcategory=\"trackingprotection\"] {\n  margin-top: 10px;\n}\n\n#trackingProtectionShield {\n  list-style-image: url(\"chrome://browser/skin/controlcenter/tracking-protection.svg\");\n  -moz-context-properties: fill, fill-opacity;\n  fill: currentColor;\n  fill-opacity: 0.5;\n  width: 64px;\n  height: 64px;\n  margin-inline-end: 10px;\n}\n\n.privacy-detailedoption,\n#fpiIncompatibilityWarning {\n  margin: 3px 0;\n}\n\n#fpiIncompatibilityWarning {\n  background-color: var(--section-highlight-background-color);\n}\n\n#fpiIncompatibilityWarning,\n#contentBlockingCategories {\n  margin-top: 16px;\n}\n\n.privacy-detailedoption {\n  border-color: var(--in-content-box-border-color);\n}\n\n.privacy-detailedoption.disabled {\n  opacity: 0.5;\n}\n\n.privacy-detailedoption.disabled .radio-check {\n  opacity: 1;\n}\n\n.privacy-detailedoption > .indent {\n  margin-inline-end: 22px;\n}\n\n.arrowhead {\n  border-radius: 2px;\n  min-height: 20px;\n  min-width: 20px;\n  max-height: 20px;\n  max-width: 20px;\n  list-style-image: url(\"chrome://global/skin/icons/arrow-down-12.svg\");\n  background-color: transparent;\n  padding: 3px;\n}\n\n.arrowhead:not([disabled]):hover {\n  cursor: pointer;\n}\n\n.arrowhead.up {\n  list-style-image: url(\"chrome://global/skin/icons/arrow-up-12.svg\");\n}\n\n.privacy-detailedoption.expanded:not(.selected) .reload-tabs {\n  display: none;\n}\n\n.content-blocking-warning.reload-tabs:not([hidden]) {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.content-blocking-reload-desc-container {\n  /* 345px is enough for (almost) twice the size of the default English\n   * string at default font sizes. If this and the button do not fit\n   * on one line, the button will get wrapped to the next line and this\n   * item will stretch to fill all available space. */\n  flex: 1 1 345px;\n  display: flex;\n  align-self: center;\n}\n\n.content-blocking-reload-description {\n  line-height: 1.8em;\n  margin-inline-end: 5px;\n}\n\n.reload-tabs-button {\n  max-height: 30px;\n  min-height: 30px;\n  padding: 0 20px;\n  list-style-image: url(\"chrome://global/skin/icons/reload.svg\");\n  align-self: center;\n}\n\n.reload-tabs-button .button-icon {\n  margin: 0 6px;\n  color: inherit;\n}\n\n.reload-tabs-button .button-text {\n  color: inherit;\n}\n\n.privacy-detailedoption.selected .content-blocking-warning {\n  background-color: var(--section-highlight-background-color);\n}\n\n.privacy-detailedoption.selected .arrowhead {\n  display: none;\n}\n\n.privacy-detailedoption.selected {\n  border-color: var(--in-content-accent-color);\n}\n\n@media (prefers-contrast) {\n  .privacy-detailedoption.selected {\n    outline: 2px solid var(--in-content-accent-color);\n  }\n}\n\n@media not (prefers-contrast) {\n  .privacy-detailedoption {\n    background-color: rgba(215, 215, 219, 0.1);\n  }\n\n  .privacy-detailedoption.selected {\n    background-color: var(--section-highlight-background-color);\n  }\n}\n\n.content-blocking-warning-title,\n.privacy-detailedoption .radio-label-box {\n  font-weight: bold;\n}\n\n.privacy-detailedoption:not(.expanded, .selected) .privacy-extra-information {\n  visibility: collapse;\n}\n\n.extra-information-label {\n  margin-top: 18px;\n}\n\n/* Apply display: block to the containers of all the category information, as\n * without this the flex-wrapped blocks inside don't stretch vertically to\n * enclose their content. */\n.privacy-detailedoption > .indent {\n  display: block;\n}\n\n.privacy-detailedoption.expanded .privacy-extra-information,\n.privacy-detailedoption.selected .privacy-extra-information {\n  display: flex;\n  flex-direction: column;\n  align-content: stretch;\n}\n\n.privacy-extra-information > .indent {\n  margin-bottom: 18px;\n}\n\n.privacy-extra-information > .custom-option {\n  margin: 10px 0;\n}\n\n.content-blocking-warning {\n  /* Match .indent's horizontal padding, minus the border added via .info-box-container: */\n  padding-inline: calc(22px - 1px);\n  margin: 10px 0;\n}\n\n.content-blocking-warning:not([hidden]) + .content-blocking-warning {\n  margin-top: 0;\n}\n\n.content-blocking-extra-blocking-desc {\n  margin-inline-start: 0.5em;\n  position: relative;\n  top: 0.65em;\n}\n\n.content-blocking-label,\n.doh-label {\n  display: list-item;\n  line-height: 1.2em;\n}\n\n.content-blocking-warning-image {\n  list-style-image: url(\"chrome://global/skin/icons/warning.svg\");\n  margin-inline-end: 6px;\n}\n\n#blockCookiesMenu {\n  width: 450px;\n}\n\n#blockCookiesMenu,\n#trackingProtectionMenu {\n  margin: 0;\n}\n\n#changeBlockListLink {\n  margin-inline-start: 56px;\n}\n\n#telemetry-container {\n  margin-block: 4px;\n  line-height: 1.8em;\n  width: 100%;\n}\n\n.privacy-detailedoption-description {\n  font-size: 90%;\n  opacity: 0.6;\n}\n\n.warning-description {\n  background: url(chrome://global/skin/icons/warning.svg) no-repeat 0 5px;\n  opacity: 0.6;\n  -moz-context-properties: fill, stroke;\n  fill: #d7b600;\n  stroke: white;\n  padding-inline-start: 20px;\n}\n\n.reject-trackers-warning-icon:-moz-locale-dir(rtl) {\n  background-position-x: right 0;\n}\n\n#contentBlockingChangeCookieSettings {\n  padding: 0.25em 0.75em;\n  margin: 4px 8px;\n}\n\n#deleteOnCloseNote {\n  margin-top: 8px;\n  margin-inline-end: 32px;\n}\n\n#submitHealthReportBox {\n  display: inline-flex;\n}\n\n/* Address bar */\n\n.firefoxSuggestOptionBox {\n  /* With this value we're trying to keep the apparent vertical space between\n     option boxes the same as the apparent vertical space between the labels of\n     the checkboxes above the Firefox Suggest subsection. */\n  margin-block-start: 18px;\n}\n\n.firefoxSuggestOptionBox:first-of-type {\n  /* Similar here: Make the apparent vertical space between the last checkbox\n     and first option box the same as elsewhere. */\n  margin-block-start: 11px;\n}\n\n#firefoxSuggestInfoBox {\n  margin-block-start: 16px;\n}\n\n#openSearchEnginePreferences {\n  margin-block-start: .5em;\n}\n\n#dismissedSuggestions,\n#openSearchEnginePreferences.extraMargin {\n  margin-block-start: 2em;\n}\n\n#dohDescription,\n#dohLearnMore,\n#dohStatusSection {\n  line-height: 1.8em;\n}\n"],"sourceRoot":""}]);
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

/***/ 80838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93379);
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_privacy_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83913);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_privacy_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_privacy_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
//# sourceMappingURL=838.1c28bc34.iframe.bundle.js.map