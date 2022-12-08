"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[933],{

/***/ 15392:
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
___CSS_LOADER_EXPORT___.push([module.id, "/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n/* These styles are intended to mimic XUL trees and the XUL search box. */\n\nhtml {\n  height: 100%;\n  box-sizing: border-box;\n}\n\nbody {\n  height: 100%;\n  margin: 0;\n  font: message-box;\n  background-color: Field;\n  color: FieldText;\n  user-select: none;\n}\n\n/* The content-container holds the non-scrollable header and the scrollable\n   content area.\n*/\n.content-container {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n}\n\n/* The content header is not scrollable */\n.content-header {\n  flex: 0 1 auto;\n}\n\n/* The main content area is scrollable and fills the rest of the area */\n.content-scrollable {\n  flex: 1 1 auto;\n  overflow: auto;\n}\n\n.emptyListInfo {\n  cursor: default;\n  padding: 3em 1em;\n  text-align: center;\n}\n\n.list,\n.item-tabs-list {\n  display: flex;\n  flex-flow: column;\n  flex-grow: 1;\n}\n\n.item.client {\n  opacity: 1;\n  max-height: unset;\n  display: unset;\n}\n\n.item.client.closed .item-tabs-list {\n  display: none;\n}\n\n.item {\n  display: inline-block;\n  opacity: 1;\n  flex: 1;\n  min-width: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  outline: none;\n}\n\n.item.selected > .item-title-container {\n  background-color: -moz-cellhighlight;\n  color: -moz-cellhighlighttext;\n}\n\n.item.selected:focus > .item-title-container {\n  background-color: SelectedItem;\n  color: SelectedItemText;\n}\n\n.item.client .item-twisty-container {\n  min-width: 12px;\n  height: 12px;\n  background-image: url(\"chrome://global/skin/icons/arrow-down-12.svg\");\n  -moz-context-properties: fill, fill-opacity;\n  fill: currentColor;\n  fill-opacity: 1;\n}\n\n.item.client.closed .item-twisty-container {\n  background-image: url(\"chrome://global/skin/icons/arrow-right-12.svg\");\n}\n\n.item.client.closed .item-twisty-container:dir(rtl) {\n  background-image: url(\"chrome://global/skin/icons/arrow-left-12.svg\");\n}\n\n.client .item.tab > .item-title-container {\n  padding-inline-start: 35px;\n}\n\n.item.tab > .item-title-container {\n  padding-inline-start: 20px;\n}\n\n.item.client[clientType] > .item-title-container > .item-icon-container {\n  -moz-context-properties: fill;\n  fill: currentColor;\n}\n\n.item.client[clientType=phone] > .item-title-container > .item-icon-container {\n  background-image: url(\"chrome://browser/skin/device-phone.svg\");\n}\n\n.item.client[clientType=tablet] > .item-title-container > .item-icon-container {\n  background-image: url(\"chrome://browser/skin/device-tablet.svg\");\n}\n\n.item.client[clientType=desktop] > .item-title-container > .item-icon-container {\n  background-image: url(\"chrome://browser/skin/device-desktop.svg\");\n}\n\n.item.client[clientType=tv] > .item-title-container > .item-icon-container {\n  background-image: url(\"chrome://browser/skin/device-tv.svg\");\n}\n\n.item.client[clientType=vr] > .item-title-container > .item-icon-container {\n  background-image: url(\"chrome://browser/skin/device-vr.svg\");\n}\n\n.item.tab > .item-title-container > .item-icon-container {\n  background-image: url(\"chrome://global/skin/icons/defaultFavicon.svg\");\n  -moz-context-properties: fill;\n  fill: currentColor;\n}\n\n.item-icon-container {\n  min-width: 16px;\n  max-width: 16px;\n  min-height: 16px;\n  max-height: 16px;\n  margin-inline: 5px;\n  background-size: 16px 16px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.item-title-container {\n  display: flex;\n  flex-flow: row;\n  overflow: hidden;\n  flex-grow: 1;\n  align-items: center;\n  padding: 4px;\n}\n\n.item-title {\n  flex-grow: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin: 1px 0 0;\n  margin-inline-end: 6px;\n  line-height: 1.3;\n  cursor: default;\n}\n\n.item[hidden] {\n  opacity: 0;\n  max-height: 0;\n  transition: opacity 150ms ease-in-out, max-height 150ms ease-in-out 150ms;\n}\n\n.item.empty .item-title-container {\n  color: #aeaeae;\n}\n\n.client .item.empty > .item-title-container {\n  padding-inline-start: 35px;\n}\n\n.sync-state > p {\n  padding-inline: 10px;\n}\n\n.text-link {\n  color: rgb(0, 149, 221);\n  cursor: pointer;\n}\n\n.text-link:hover {\n  text-decoration: underline;\n}\n\n.text-link,\n.text-link:focus {\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\n\n.deck .sync-state {\n  display: none;\n  opacity: 0;\n  transition: opacity 1.5s;\n  border-top: 1px solid #bdbdbd;\n}\n\n.deck .sync-state.tabs-container {\n  border-top: 0;\n}\n\n.deck .sync-state.selected {\n  display: unset;\n  opacity: 100;\n}\n\n.deck .syncIllustration,\n.deck .syncIllustrationIssue {\n  height: 174px;\n  margin: 38px 8px 15px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.deck .syncIllustration {\n  background-image: url(chrome://browser/skin/fxa/sync-illustration.svg);\n}\n\n.deck .syncIllustrationIssue {\n  background-image: url(chrome://browser/skin/fxa/sync-illustration-issue.svg);\n}\n\n.deck .instructions {\n  text-align: center;\n  color: GrayText;\n  padding: 0 11px;\n  max-width: 15em;\n  margin: 0 auto;\n}\n\nbody[lwt-sidebar] .deck .instructions {\n  color: inherit;\n  opacity: .6;\n}\n\n.deck .button {\n  display: block;\n  background-color: #0060df;\n  color: white;\n  border: 0;\n  border-radius: 2px;\n  margin: 15px auto;\n  padding: 8px;\n  text-shadow: none;\n  width: calc(100% - 22px);\n  max-width: 200px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.deck .button:hover {\n  background-color: #003eaa;\n}\n\n.deck .button:hover:active {\n  background-color: #002275;\n}\n\n.sidebar-search-container {\n  display: flex;\n  padding: 4px;\n}\n\n.sidebar-search-container:not(.selected) {\n  display: none;\n}\n\n.tabsFilter {\n  flex-grow: 1;\n}\n\n/* Themed sidebars */\n\nbody[lwt-sidebar] {\n  background-color: var(--lwt-sidebar-background-color);\n  color: var(--lwt-sidebar-text-color);\n  scrollbar-color: rgba(204,204,204,.5) rgba(230,230,235,.5);\n}\n\nbody[lwt-sidebar-brighttext] {\n  scrollbar-color: rgba(249,249,250,.4) rgba(20,20,25,.3);\n}\n\nbody[lwt-sidebar] .item.selected > .item-title-container {\n  background-color: hsla(0,0%,80%,.3);\n  color: inherit;\n}\n\nbody[lwt-sidebar-brighttext] .item.selected > .item-title-container {\n  background-color: rgba(249,249,250,.1);\n}\n\nbody[lwt-sidebar-highlight] .item.selected:focus > .item-title-container {\n  background-color: var(--lwt-sidebar-highlight-background-color);\n  color: var(--lwt-sidebar-highlight-text-color);\n}\n\n/* Apply crisp rendering for favicons at exactly 2dppx resolution */\n@media (resolution: 2dppx) {\n  .tabs-container .item-tabs-list .item-icon-container {\n    image-rendering: -moz-crisp-edges;\n  }\n}\n\n/* Platform specific styling */\n@media (-moz-platform: macos) {\n  body {\n     /* let the -moz-appearance of the sidebar shine through */\n    background-color: transparent;\n  }\n\n  .item-title-container {\n    box-sizing: border-box;\n    align-items: center;\n    height: 24px;\n    font-size: 12px;\n  }\n\n  .item-title {\n    margin: 0;\n  }\n\n  body:not([lwt-sidebar]) .item.selected:not(:focus) > .item-title-container {\n    appearance: auto;\n    -moz-default-appearance: -moz-mac-source-list-selection;\n    -moz-font-smoothing-background-color: -moz-mac-source-list-selection;\n  }\n\n  body:not([lwt-sidebar-highlight]) .item.selected:focus > .item-title-container {\n    appearance: auto;\n    -moz-default-appearance: -moz-mac-active-source-list-selection;\n    -moz-font-smoothing-background-color: -moz-mac-active-source-list-selection;\n  }\n}\n\n@media (-moz-platform: windows) {\n  .client .item.tab > .item-title-container {\n    padding-inline-start: 26px;\n  }\n\n  .item.tab > .item-title-container {\n    padding-inline-start: 14px;\n  }\n\n  .item-icon-container {\n    min-width: 16px;\n    max-width: 16px;\n    min-height: 16px;\n    max-height: 16px;\n    margin-inline-end: 5px;\n    background-size: 16px 16px;\n    background-repeat: no-repeat;\n    background-position: center;\n  }\n}\n", "",{"version":3,"sources":["webpack://./../../themes/shared/syncedtabs/sidebar.css"],"names":[],"mappings":"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","sourcesContent":["/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n/* These styles are intended to mimic XUL trees and the XUL search box. */\n\nhtml {\n  height: 100%;\n  box-sizing: border-box;\n}\n\nbody {\n  height: 100%;\n  margin: 0;\n  font: message-box;\n  background-color: Field;\n  color: FieldText;\n  user-select: none;\n}\n\n/* The content-container holds the non-scrollable header and the scrollable\n   content area.\n*/\n.content-container {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n}\n\n/* The content header is not scrollable */\n.content-header {\n  flex: 0 1 auto;\n}\n\n/* The main content area is scrollable and fills the rest of the area */\n.content-scrollable {\n  flex: 1 1 auto;\n  overflow: auto;\n}\n\n.emptyListInfo {\n  cursor: default;\n  padding: 3em 1em;\n  text-align: center;\n}\n\n.list,\n.item-tabs-list {\n  display: flex;\n  flex-flow: column;\n  flex-grow: 1;\n}\n\n.item.client {\n  opacity: 1;\n  max-height: unset;\n  display: unset;\n}\n\n.item.client.closed .item-tabs-list {\n  display: none;\n}\n\n.item {\n  display: inline-block;\n  opacity: 1;\n  flex: 1;\n  min-width: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  outline: none;\n}\n\n.item.selected > .item-title-container {\n  background-color: -moz-cellhighlight;\n  color: -moz-cellhighlighttext;\n}\n\n.item.selected:focus > .item-title-container {\n  background-color: SelectedItem;\n  color: SelectedItemText;\n}\n\n.item.client .item-twisty-container {\n  min-width: 12px;\n  height: 12px;\n  background-image: url(\"chrome://global/skin/icons/arrow-down-12.svg\");\n  -moz-context-properties: fill, fill-opacity;\n  fill: currentColor;\n  fill-opacity: 1;\n}\n\n.item.client.closed .item-twisty-container {\n  background-image: url(\"chrome://global/skin/icons/arrow-right-12.svg\");\n}\n\n.item.client.closed .item-twisty-container:dir(rtl) {\n  background-image: url(\"chrome://global/skin/icons/arrow-left-12.svg\");\n}\n\n.client .item.tab > .item-title-container {\n  padding-inline-start: 35px;\n}\n\n.item.tab > .item-title-container {\n  padding-inline-start: 20px;\n}\n\n.item.client[clientType] > .item-title-container > .item-icon-container {\n  -moz-context-properties: fill;\n  fill: currentColor;\n}\n\n.item.client[clientType=phone] > .item-title-container > .item-icon-container {\n  background-image: url(\"chrome://browser/skin/device-phone.svg\");\n}\n\n.item.client[clientType=tablet] > .item-title-container > .item-icon-container {\n  background-image: url(\"chrome://browser/skin/device-tablet.svg\");\n}\n\n.item.client[clientType=desktop] > .item-title-container > .item-icon-container {\n  background-image: url(\"chrome://browser/skin/device-desktop.svg\");\n}\n\n.item.client[clientType=tv] > .item-title-container > .item-icon-container {\n  background-image: url(\"chrome://browser/skin/device-tv.svg\");\n}\n\n.item.client[clientType=vr] > .item-title-container > .item-icon-container {\n  background-image: url(\"chrome://browser/skin/device-vr.svg\");\n}\n\n.item.tab > .item-title-container > .item-icon-container {\n  background-image: url(\"chrome://global/skin/icons/defaultFavicon.svg\");\n  -moz-context-properties: fill;\n  fill: currentColor;\n}\n\n.item-icon-container {\n  min-width: 16px;\n  max-width: 16px;\n  min-height: 16px;\n  max-height: 16px;\n  margin-inline: 5px;\n  background-size: 16px 16px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.item-title-container {\n  display: flex;\n  flex-flow: row;\n  overflow: hidden;\n  flex-grow: 1;\n  align-items: center;\n  padding: 4px;\n}\n\n.item-title {\n  flex-grow: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin: 1px 0 0;\n  margin-inline-end: 6px;\n  line-height: 1.3;\n  cursor: default;\n}\n\n.item[hidden] {\n  opacity: 0;\n  max-height: 0;\n  transition: opacity 150ms ease-in-out, max-height 150ms ease-in-out 150ms;\n}\n\n.item.empty .item-title-container {\n  color: #aeaeae;\n}\n\n.client .item.empty > .item-title-container {\n  padding-inline-start: 35px;\n}\n\n.sync-state > p {\n  padding-inline: 10px;\n}\n\n.text-link {\n  color: rgb(0, 149, 221);\n  cursor: pointer;\n}\n\n.text-link:hover {\n  text-decoration: underline;\n}\n\n.text-link,\n.text-link:focus {\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\n\n.deck .sync-state {\n  display: none;\n  opacity: 0;\n  transition: opacity 1.5s;\n  border-top: 1px solid #bdbdbd;\n}\n\n.deck .sync-state.tabs-container {\n  border-top: 0;\n}\n\n.deck .sync-state.selected {\n  display: unset;\n  opacity: 100;\n}\n\n.deck .syncIllustration,\n.deck .syncIllustrationIssue {\n  height: 174px;\n  margin: 38px 8px 15px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.deck .syncIllustration {\n  background-image: url(chrome://browser/skin/fxa/sync-illustration.svg);\n}\n\n.deck .syncIllustrationIssue {\n  background-image: url(chrome://browser/skin/fxa/sync-illustration-issue.svg);\n}\n\n.deck .instructions {\n  text-align: center;\n  color: GrayText;\n  padding: 0 11px;\n  max-width: 15em;\n  margin: 0 auto;\n}\n\nbody[lwt-sidebar] .deck .instructions {\n  color: inherit;\n  opacity: .6;\n}\n\n.deck .button {\n  display: block;\n  background-color: #0060df;\n  color: white;\n  border: 0;\n  border-radius: 2px;\n  margin: 15px auto;\n  padding: 8px;\n  text-shadow: none;\n  width: calc(100% - 22px);\n  max-width: 200px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.deck .button:hover {\n  background-color: #003eaa;\n}\n\n.deck .button:hover:active {\n  background-color: #002275;\n}\n\n.sidebar-search-container {\n  display: flex;\n  padding: 4px;\n}\n\n.sidebar-search-container:not(.selected) {\n  display: none;\n}\n\n.tabsFilter {\n  flex-grow: 1;\n}\n\n/* Themed sidebars */\n\nbody[lwt-sidebar] {\n  background-color: var(--lwt-sidebar-background-color);\n  color: var(--lwt-sidebar-text-color);\n  scrollbar-color: rgba(204,204,204,.5) rgba(230,230,235,.5);\n}\n\nbody[lwt-sidebar-brighttext] {\n  scrollbar-color: rgba(249,249,250,.4) rgba(20,20,25,.3);\n}\n\nbody[lwt-sidebar] .item.selected > .item-title-container {\n  background-color: hsla(0,0%,80%,.3);\n  color: inherit;\n}\n\nbody[lwt-sidebar-brighttext] .item.selected > .item-title-container {\n  background-color: rgba(249,249,250,.1);\n}\n\nbody[lwt-sidebar-highlight] .item.selected:focus > .item-title-container {\n  background-color: var(--lwt-sidebar-highlight-background-color);\n  color: var(--lwt-sidebar-highlight-text-color);\n}\n\n/* Apply crisp rendering for favicons at exactly 2dppx resolution */\n@media (resolution: 2dppx) {\n  .tabs-container .item-tabs-list .item-icon-container {\n    image-rendering: -moz-crisp-edges;\n  }\n}\n\n/* Platform specific styling */\n@media (-moz-platform: macos) {\n  body {\n     /* let the -moz-appearance of the sidebar shine through */\n    background-color: transparent;\n  }\n\n  .item-title-container {\n    box-sizing: border-box;\n    align-items: center;\n    height: 24px;\n    font-size: 12px;\n  }\n\n  .item-title {\n    margin: 0;\n  }\n\n  body:not([lwt-sidebar]) .item.selected:not(:focus) > .item-title-container {\n    appearance: auto;\n    -moz-default-appearance: -moz-mac-source-list-selection;\n    -moz-font-smoothing-background-color: -moz-mac-source-list-selection;\n  }\n\n  body:not([lwt-sidebar-highlight]) .item.selected:focus > .item-title-container {\n    appearance: auto;\n    -moz-default-appearance: -moz-mac-active-source-list-selection;\n    -moz-font-smoothing-background-color: -moz-mac-active-source-list-selection;\n  }\n}\n\n@media (-moz-platform: windows) {\n  .client .item.tab > .item-title-container {\n    padding-inline-start: 26px;\n  }\n\n  .item.tab > .item-title-container {\n    padding-inline-start: 14px;\n  }\n\n  .item-icon-container {\n    min-width: 16px;\n    max-width: 16px;\n    min-height: 16px;\n    max-height: 16px;\n    margin-inline-end: 5px;\n    background-size: 16px 16px;\n    background-repeat: no-repeat;\n    background-position: center;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ 70933:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93379);
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_sidebar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15392);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_sidebar_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_sidebar_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
//# sourceMappingURL=933.e46fb430.iframe.bundle.js.map