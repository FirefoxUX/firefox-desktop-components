"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[4586],{

/***/ 79055:
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(chrome://browser/skin/downloads/progressmeter.css);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(chrome://browser/skin/downloads/download-blockedStates.css);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n/*** Panel and outer controls ***/\n\n#downloadsListBox {\n  background: transparent;\n  color: inherit;\n  appearance: none;\n  border: 0;\n  margin: 0;\n  /* We have an explicit width set by l10n, but we still want to fill our\n   * container if it's wider. */\n  min-width: 100%;\n}\n\n@media not (prefers-contrast) {\n  #downloadsListBox[disabled] {\n    opacity: var(--downloads-item-disabled-opacity) !important;\n  }\n}\n\n@media (prefers-contrast) {\n  #downloadsListBox[disabled] {\n    color: GrayText;\n  }\n}\n\n#emptyDownloads {\n  padding: 1.5em 8px 2.1em;\n  margin: 0;\n  pointer-events: none;\n}\n\n#downloadsListBox > richlistitem {\n  /* Leave space for the 32x32 icon with 16px vertical padding, and/or\n   * the text in the item, with the same padding, whichever is bigger: */\n  min-height: max(48px, calc(16px + 2em));\n  padding-inline-end: 4px;\n  margin: 0 0 8px;\n  border-radius: 4px;\n}\n\n.downloadMainArea {\n  padding-block: 8px;\n  padding-inline-start: 4px;\n  border-radius: 4px;\n}\n\n#downloadsListBox > richlistitem[state=\"1\"][exists].hoveringMainArea:hover,\n#downloadsListBox > richlistitem.openWhenFinished.hoveringMainArea:hover,\n#downloadsListBox > richlistitem[verdict]:hover,\n#downloadsListBox > richlistitem.openWhenFinished:hover,\n.downloadsPanelFooterButton:hover {\n  background-color: var(--panel-item-hover-bgcolor);\n}\n\n#downloadsListBox > richlistitem[state=\"1\"][exists].hoveringMainArea:hover:active,\n#downloadsListBox > richlistitem.openWhenFinished.hoveringMainArea:hover:active,\n#downloadsListBox > richlistitem[verdict]:hover:active,\n.downloadsPanelFooterButton[open=\"true\"] {\n  background-color: var(--panel-item-active-bgcolor);\n}\n\n#downloadsListBox:focus-visible > richlistitem[selected],\n#downloadsListBox[force-focus-visible]:focus > richlistitem[selected],\n.downloadButton:focus-visible,\n#downloadsSummary:focus-visible,\n.downloadsPanelFooterButton:focus-visible {\n  outline: var(--focus-outline);\n  outline-offset: var(--focus-outline-inset);\n}\n\n#downloadsListBox > richlistitem[verdict=\"Insecure\"] .downloadDetails,\n#downloadsListBox > richlistitem[verdict=\"Malware\"] .downloadDetails {\n  color: #C50042;\n  /* The details text usually gets an opacity reduction, but for the error\n     states we disable that, because it would reduce the contrast too much. */\n  opacity: inherit;\n}\n\n:root[lwt-popup-brighttext] #downloadsListBox > richlistitem[verdict=\"Insecure\"] .downloadDetails,\n:root[lwt-popup-brighttext] #downloadsListBox > richlistitem[verdict=\"Malware\"] .downloadDetails {\n  color: #FF848B;\n}\n\n.downloadTypeIcon {\n  margin-inline-end: 0.7em;\n}\n\n#downloadsPanel-blockedSubview-buttons {\n  margin-top: 1.5em;\n}\n\n#downloadsSummary {\n  background: var(--arrowpanel-dimmed);\n  border-top: 1px solid var(--panel-separator-color);\n  /* Reserve the same space as the button and separator in download items. */\n  padding-inline-end: 59px;\n  -moz-user-focus: normal;\n}\n\n#downloadsSummary > .downloadTypeIcon {\n  list-style-image: url(\"chrome://browser/skin/downloads/download-summary.svg\");\n}\n\n#downloadsSummaryDescription {\n  color: -moz-nativehyperlinktext;\n}\n\n:root[lwt-popup-brighttext] #downloadsSummaryDescription {\n  color: #75baff; /* --blue-30 */\n}\n\n/*** List items and similar elements in the summary ***/\n#downloadsSummary {\n  min-height: var(--downloads-item-height);\n}\n\n#downloadsListBox > richlistitem {\n  background: transparent;\n  color: inherit;\n}\n\n#downloadsListBox > richlistitem:last-child {\n  margin-bottom: 0;\n}\n\n.downloadTypeIcon {\n  width: 32px;\n  height: 32px;\n}\n\n#downloadsSummaryDescription,\n.downloadTarget {\n  margin: 0;\n}\n\n#downloadsSummaryDetails,\n.downloadDetails {\n  font-size: calc(100% * var(--downloads-item-font-size-factor));\n  opacity: var(--downloads-item-details-opacity);\n  /* Use calc() to keep the height consistent with .downloadTarget, so that the\n     progress bar can be vertically centered. */\n  margin: 4px 0 calc(1em / var(--downloads-item-font-size-factor) - 1em);\n}\n\n/* When hovering the mouse pointer over the item, instead of the normal message\n   we display a more detailed one. For blocked downloads the entire area shows\n   the hover message, for other downloads only the main area does. */\n#downloadsListBox > richlistitem[verdict]:hover > .downloadMainArea > .downloadContainer > .downloadDetailsNormal,\n#downloadsListBox > richlistitem[verdict]:not(:hover) > .downloadMainArea > .downloadContainer > .downloadDetailsHover,\n.downloadMainArea:hover > .downloadContainer > .downloadDetailsNormal,\n#downloadsListBox > richlistitem:not([verdict]) > .downloadMainArea:not(:hover) > .downloadContainer > .downloadDetailsHover {\n  display: none;\n}\n\n/* When hovering the action button in particular, instead of the usual hover\n   message we display the command associated with the button. */\n#downloadsListBox > richlistitem.downloadHoveringButton > .downloadMainArea > .downloadContainer > .downloadDetailsNormal,\n#downloadsListBox > richlistitem.downloadHoveringButton > .downloadMainArea > .downloadContainer > .downloadDetailsHover,\n#downloadsListBox > richlistitem:not(.downloadHoveringButton) > .downloadMainArea > .downloadContainer > .downloadDetailsButtonHover {\n  display: none;\n}\n\n.downloadButton {\n  appearance: none;\n  min-width: 32px;\n  height: 32px;\n  margin: 0;\n  margin-inline-start: 4px;\n  border: 1px solid transparent;\n  padding: 0;\n  background: transparent;\n  color: inherit;\n  border-radius: 4px;\n  --button-hover-bgcolor: var(--panel-item-hover-bgcolor);\n  --button-hover-color: inherit;\n  --button-active-bgcolor: var(--panel-item-active-bgcolor);\n  --button-active-color: inherit;\n}\n\n.downloadButton > .button-box > .button-icon {\n  width: 16px;\n  height: 16px;\n  margin: 1px;\n  -moz-context-properties: fill;\n  fill: currentColor;\n}\n\n.downloadButton > .button-box > .button-text {\n  margin: 0 !important;\n  padding: 0;\n}\n\n@media (prefers-contrast) {\n  .downloadButton {\n    background-color: ButtonFace;\n    color: ButtonText;\n    border-color: currentColor;\n    --button-hover-bgcolor: SelectedItem;\n    --button-hover-color: SelectedItemText;\n    --button-active-bgcolor: ButtonFace;\n    --button-active-color: ButtonText;\n  }\n}\n\n.downloadButton:hover:not(:active) {\n  background-color: var(--button-hover-bgcolor);\n  color: var(--button-hover-color);\n  border-color: var(--button-hover-bgcolor);\n}\n.downloadButton:hover:active {\n  background-color: var(--button-active-bgcolor);\n  color: var(--button-active-color);\n}\n\n/*** Button icons ***/\n\n.downloadIconCancel > .button-box > .button-icon {\n  list-style-image: url(\"chrome://global/skin/icons/close.svg\");\n}\n\n.downloadIconShow > .button-box > .button-icon {\n  list-style-image: url(\"chrome://global/skin/icons/folder.svg\");\n}\n\n@media (-moz-platform: macos) {\n  .downloadIconShow > .button-box > .button-icon {\n    list-style-image: url(\"chrome://global/skin/icons/search-glass.svg\");\n  }\n}\n\n.downloadIconRetry > .button-box > .button-icon {\n  list-style-image: url(\"chrome://global/skin/icons/reload.svg\");\n}\n\n.downloadIconSubviewArrow > .button-box > .button-icon {\n  list-style-image: url(\"chrome://global/skin/icons/arrow-left.svg\");\n}\n\n.downloadIconSubviewArrow > .button-box > .button-icon:-moz-locale-dir(ltr) {\n  list-style-image: url(\"chrome://global/skin/icons/arrow-right.svg\");\n}\n\n/*** Blocked subview ***/\n#downloadsPanel-blockedSubview-title {\n  font-size: calc(100% * var(--downloads-item-font-size-factor));\n  margin-bottom: 1.5em;\n}\n\n#downloadsPanel-blockedSubview-details1,\n#downloadsPanel-blockedSubview-details2 {\n  font-size: calc(100% * var(--downloads-item-font-size-factor));\n  margin-bottom: 0.5em;\n  opacity: var(--downloads-item-details-opacity);\n}\n\n/*** Toolbarseparator ***/\n#downloadsFooterButtons > toolbarseparator {\n  margin-inline: 0;\n}\n", "",{"version":3,"sources":["webpack://./../../themes/shared/downloads/downloads.inc.css"],"names":[],"mappings":"AAAA;;6DAE6D;;AAK7D,iCAAiC;;AAEjC;EACE,uBAAuB;EACvB,cAAc;EACd,gBAAgB;EAChB,SAAS;EACT,SAAS;EACT;+BAC6B;EAC7B,eAAe;AACjB;;AAEA;EACE;IACE,0DAA0D;EAC5D;AACF;;AAEA;EACE;IACE,eAAe;EACjB;AACF;;AAEA;EACE,wBAAwB;EACxB,SAAS;EACT,oBAAoB;AACtB;;AAEA;EACE;wEACsE;EACtE,uCAAuC;EACvC,uBAAuB;EACvB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;;;;;EAKE,iDAAiD;AACnD;;AAEA;;;;EAIE,kDAAkD;AACpD;;AAEA;;;;;EAKE,6BAA6B;EAC7B,0CAA0C;AAC5C;;AAEA;;EAEE,cAAc;EACd;6EAC2E;EAC3E,gBAAgB;AAClB;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,oCAAoC;EACpC,kDAAkD;EAClD,0EAA0E;EAC1E,wBAAwB;EACxB,uBAAuB;AACzB;;AAEA;EACE,6EAA6E;AAC/E;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,cAAc,EAAE,cAAc;AAChC;;AAEA,uDAAuD;AACvD;EACE,wCAAwC;AAC1C;;AAEA;EACE,uBAAuB;EACvB,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;;EAEE,SAAS;AACX;;AAEA;;EAEE,8DAA8D;EAC9D,8CAA8C;EAC9C;+CAC6C;EAC7C,sEAAsE;AACxE;;AAEA;;oEAEoE;AACpE;;;;EAIE,aAAa;AACf;;AAEA;+DAC+D;AAC/D;;;EAGE,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,YAAY;EACZ,SAAS;EACT,wBAAwB;EACxB,6BAA6B;EAC7B,UAAU;EACV,uBAAuB;EACvB,cAAc;EACd,kBAAkB;EAClB,uDAAuD;EACvD,6BAA6B;EAC7B,yDAAyD;EACzD,8BAA8B;AAChC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,WAAW;EACX,6BAA6B;EAC7B,kBAAkB;AACpB;;AAEA;EACE,oBAAoB;EACpB,UAAU;AACZ;;AAEA;EACE;IACE,4BAA4B;IAC5B,iBAAiB;IACjB,0BAA0B;IAC1B,oCAAoC;IACpC,sCAAsC;IACtC,mCAAmC;IACnC,iCAAiC;EACnC;AACF;;AAEA;EACE,6CAA6C;EAC7C,gCAAgC;EAChC,yCAAyC;AAC3C;AACA;EACE,8CAA8C;EAC9C,iCAAiC;AACnC;;AAEA,qBAAqB;;AAErB;EACE,6DAA6D;AAC/D;;AAEA;EACE,8DAA8D;AAChE;;AAEA;EACE;IACE,oEAAoE;EACtE;AACF;;AAEA;EACE,8DAA8D;AAChE;;AAEA;EACE,kEAAkE;AACpE;;AAEA;EACE,mEAAmE;AACrE;;AAEA,wBAAwB;AACxB;EACE,8DAA8D;EAC9D,oBAAoB;AACtB;;AAEA;;EAEE,8DAA8D;EAC9D,oBAAoB;EACpB,8CAA8C;AAChD;;AAEA,yBAAyB;AACzB;EACE,gBAAgB;AAClB","sourcesContent":["/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n@import \"chrome://browser/skin/downloads/progressmeter.css\";\n@import \"chrome://browser/skin/downloads/download-blockedStates.css\";\n\n/*** Panel and outer controls ***/\n\n#downloadsListBox {\n  background: transparent;\n  color: inherit;\n  appearance: none;\n  border: 0;\n  margin: 0;\n  /* We have an explicit width set by l10n, but we still want to fill our\n   * container if it's wider. */\n  min-width: 100%;\n}\n\n@media not (prefers-contrast) {\n  #downloadsListBox[disabled] {\n    opacity: var(--downloads-item-disabled-opacity) !important;\n  }\n}\n\n@media (prefers-contrast) {\n  #downloadsListBox[disabled] {\n    color: GrayText;\n  }\n}\n\n#emptyDownloads {\n  padding: 1.5em 8px 2.1em;\n  margin: 0;\n  pointer-events: none;\n}\n\n#downloadsListBox > richlistitem {\n  /* Leave space for the 32x32 icon with 16px vertical padding, and/or\n   * the text in the item, with the same padding, whichever is bigger: */\n  min-height: max(48px, calc(16px + 2em));\n  padding-inline-end: 4px;\n  margin: 0 0 8px;\n  border-radius: 4px;\n}\n\n.downloadMainArea {\n  padding-block: 8px;\n  padding-inline-start: 4px;\n  border-radius: 4px;\n}\n\n#downloadsListBox > richlistitem[state=\"1\"][exists].hoveringMainArea:hover,\n#downloadsListBox > richlistitem.openWhenFinished.hoveringMainArea:hover,\n#downloadsListBox > richlistitem[verdict]:hover,\n#downloadsListBox > richlistitem.openWhenFinished:hover,\n.downloadsPanelFooterButton:hover {\n  background-color: var(--panel-item-hover-bgcolor);\n}\n\n#downloadsListBox > richlistitem[state=\"1\"][exists].hoveringMainArea:hover:active,\n#downloadsListBox > richlistitem.openWhenFinished.hoveringMainArea:hover:active,\n#downloadsListBox > richlistitem[verdict]:hover:active,\n.downloadsPanelFooterButton[open=\"true\"] {\n  background-color: var(--panel-item-active-bgcolor);\n}\n\n#downloadsListBox:focus-visible > richlistitem[selected],\n#downloadsListBox[force-focus-visible]:focus > richlistitem[selected],\n.downloadButton:focus-visible,\n#downloadsSummary:focus-visible,\n.downloadsPanelFooterButton:focus-visible {\n  outline: var(--focus-outline);\n  outline-offset: var(--focus-outline-inset);\n}\n\n#downloadsListBox > richlistitem[verdict=\"Insecure\"] .downloadDetails,\n#downloadsListBox > richlistitem[verdict=\"Malware\"] .downloadDetails {\n  color: #C50042;\n  /* The details text usually gets an opacity reduction, but for the error\n     states we disable that, because it would reduce the contrast too much. */\n  opacity: inherit;\n}\n\n:root[lwt-popup-brighttext] #downloadsListBox > richlistitem[verdict=\"Insecure\"] .downloadDetails,\n:root[lwt-popup-brighttext] #downloadsListBox > richlistitem[verdict=\"Malware\"] .downloadDetails {\n  color: #FF848B;\n}\n\n.downloadTypeIcon {\n  margin-inline-end: 0.7em;\n}\n\n#downloadsPanel-blockedSubview-buttons {\n  margin-top: 1.5em;\n}\n\n#downloadsSummary {\n  background: var(--arrowpanel-dimmed);\n  border-top: 1px solid var(--panel-separator-color);\n  /* Reserve the same space as the button and separator in download items. */\n  padding-inline-end: 59px;\n  -moz-user-focus: normal;\n}\n\n#downloadsSummary > .downloadTypeIcon {\n  list-style-image: url(\"chrome://browser/skin/downloads/download-summary.svg\");\n}\n\n#downloadsSummaryDescription {\n  color: -moz-nativehyperlinktext;\n}\n\n:root[lwt-popup-brighttext] #downloadsSummaryDescription {\n  color: #75baff; /* --blue-30 */\n}\n\n/*** List items and similar elements in the summary ***/\n#downloadsSummary {\n  min-height: var(--downloads-item-height);\n}\n\n#downloadsListBox > richlistitem {\n  background: transparent;\n  color: inherit;\n}\n\n#downloadsListBox > richlistitem:last-child {\n  margin-bottom: 0;\n}\n\n.downloadTypeIcon {\n  width: 32px;\n  height: 32px;\n}\n\n#downloadsSummaryDescription,\n.downloadTarget {\n  margin: 0;\n}\n\n#downloadsSummaryDetails,\n.downloadDetails {\n  font-size: calc(100% * var(--downloads-item-font-size-factor));\n  opacity: var(--downloads-item-details-opacity);\n  /* Use calc() to keep the height consistent with .downloadTarget, so that the\n     progress bar can be vertically centered. */\n  margin: 4px 0 calc(1em / var(--downloads-item-font-size-factor) - 1em);\n}\n\n/* When hovering the mouse pointer over the item, instead of the normal message\n   we display a more detailed one. For blocked downloads the entire area shows\n   the hover message, for other downloads only the main area does. */\n#downloadsListBox > richlistitem[verdict]:hover > .downloadMainArea > .downloadContainer > .downloadDetailsNormal,\n#downloadsListBox > richlistitem[verdict]:not(:hover) > .downloadMainArea > .downloadContainer > .downloadDetailsHover,\n.downloadMainArea:hover > .downloadContainer > .downloadDetailsNormal,\n#downloadsListBox > richlistitem:not([verdict]) > .downloadMainArea:not(:hover) > .downloadContainer > .downloadDetailsHover {\n  display: none;\n}\n\n/* When hovering the action button in particular, instead of the usual hover\n   message we display the command associated with the button. */\n#downloadsListBox > richlistitem.downloadHoveringButton > .downloadMainArea > .downloadContainer > .downloadDetailsNormal,\n#downloadsListBox > richlistitem.downloadHoveringButton > .downloadMainArea > .downloadContainer > .downloadDetailsHover,\n#downloadsListBox > richlistitem:not(.downloadHoveringButton) > .downloadMainArea > .downloadContainer > .downloadDetailsButtonHover {\n  display: none;\n}\n\n.downloadButton {\n  appearance: none;\n  min-width: 32px;\n  height: 32px;\n  margin: 0;\n  margin-inline-start: 4px;\n  border: 1px solid transparent;\n  padding: 0;\n  background: transparent;\n  color: inherit;\n  border-radius: 4px;\n  --button-hover-bgcolor: var(--panel-item-hover-bgcolor);\n  --button-hover-color: inherit;\n  --button-active-bgcolor: var(--panel-item-active-bgcolor);\n  --button-active-color: inherit;\n}\n\n.downloadButton > .button-box > .button-icon {\n  width: 16px;\n  height: 16px;\n  margin: 1px;\n  -moz-context-properties: fill;\n  fill: currentColor;\n}\n\n.downloadButton > .button-box > .button-text {\n  margin: 0 !important;\n  padding: 0;\n}\n\n@media (prefers-contrast) {\n  .downloadButton {\n    background-color: ButtonFace;\n    color: ButtonText;\n    border-color: currentColor;\n    --button-hover-bgcolor: SelectedItem;\n    --button-hover-color: SelectedItemText;\n    --button-active-bgcolor: ButtonFace;\n    --button-active-color: ButtonText;\n  }\n}\n\n.downloadButton:hover:not(:active) {\n  background-color: var(--button-hover-bgcolor);\n  color: var(--button-hover-color);\n  border-color: var(--button-hover-bgcolor);\n}\n.downloadButton:hover:active {\n  background-color: var(--button-active-bgcolor);\n  color: var(--button-active-color);\n}\n\n/*** Button icons ***/\n\n.downloadIconCancel > .button-box > .button-icon {\n  list-style-image: url(\"chrome://global/skin/icons/close.svg\");\n}\n\n.downloadIconShow > .button-box > .button-icon {\n  list-style-image: url(\"chrome://global/skin/icons/folder.svg\");\n}\n\n@media (-moz-platform: macos) {\n  .downloadIconShow > .button-box > .button-icon {\n    list-style-image: url(\"chrome://global/skin/icons/search-glass.svg\");\n  }\n}\n\n.downloadIconRetry > .button-box > .button-icon {\n  list-style-image: url(\"chrome://global/skin/icons/reload.svg\");\n}\n\n.downloadIconSubviewArrow > .button-box > .button-icon {\n  list-style-image: url(\"chrome://global/skin/icons/arrow-left.svg\");\n}\n\n.downloadIconSubviewArrow > .button-box > .button-icon:-moz-locale-dir(ltr) {\n  list-style-image: url(\"chrome://global/skin/icons/arrow-right.svg\");\n}\n\n/*** Blocked subview ***/\n#downloadsPanel-blockedSubview-title {\n  font-size: calc(100% * var(--downloads-item-font-size-factor));\n  margin-bottom: 1.5em;\n}\n\n#downloadsPanel-blockedSubview-details1,\n#downloadsPanel-blockedSubview-details2 {\n  font-size: calc(100% * var(--downloads-item-font-size-factor));\n  margin-bottom: 0.5em;\n  opacity: var(--downloads-item-details-opacity);\n}\n\n/*** Toolbarseparator ***/\n#downloadsFooterButtons > toolbarseparator {\n  margin-inline: 0;\n}\n"],"sourceRoot":""}]);
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

/***/ 24586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93379);
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_downloads_inc_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79055);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_downloads_inc_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_downloads_inc_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
//# sourceMappingURL=4586.6a8ebe15.iframe.bundle.js.map