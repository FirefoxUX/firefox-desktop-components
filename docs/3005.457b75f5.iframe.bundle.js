"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[3005],{

/***/ 45051:
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
___CSS_LOADER_EXPORT___.push([module.id, "/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n/*** Status and progress indicator ***/\n#downloads-button {\n  --download-progress-pcent: 0%;\n}\n\n#downloads-indicator-anchor {\n  min-width: 16px;\n  min-height: 16px;\n  -moz-context-properties: fill, fill-opacity;\n  list-style-image: url(\"chrome://browser/skin/downloads/downloads.svg\");\n}\n\n#downloads-button[progress] > .toolbarbutton-badge-stack > #downloads-indicator-anchor > #downloads-indicator-icon,\n#downloads-button[animate][notification] > .toolbarbutton-badge-stack > #downloads-indicator-anchor > #downloads-indicator-icon {\n  visibility: hidden;\n}\n\n#wrapper-downloads-button > #downloads-button > .toolbarbutton-badge-stack > #downloads-indicator-anchor > #downloads-indicator-icon {\n  visibility: visible;\n}\n\n#downloads-button[attention=\"success\"] > .toolbarbutton-badge-stack > #downloads-indicator-anchor > #downloads-indicator-icon {\n  fill: var(--toolbarbutton-icon-fill-attention);\n  fill-opacity: 1;\n}\n\n#downloads-button > .toolbarbutton-badge-stack > .toolbarbutton-animatable-box {\n  pointer-events: none;\n  -moz-context-properties: fill, fill-opacity, stroke;\n  grid-area: initial;\n  top: calc(50% - 10px); /* Vertically center the 20px tall animatable image */\n  left: calc(50% - 10px); /* Horizontally center the 20px wide animatable image */\n  width: 20px; /* Width of each frame within the SVG sprite */\n  height: 20px; /* Height of each frame within the SVG sprite */\n  /* Animation is not directional and shouldn't be reversed in RTL */\n  direction: ltr;\n  /* Revert to the xul.css user agent stylesheet's z-index value (auto) for\n  stack children, to ensure the badge (the last child of the stack) appears in\n  front of the animatable boxes */\n  z-index: revert;\n}\n\n/* Hide progress and state animations in customize mode */\ntoolbarpaletteitem > #downloads-button > .toolbarbutton-badge-stack > .toolbarbutton-animatable-box,\ntoolbarpaletteitem > #downloads-button > .toolbarbutton-badge-stack > #downloads-indicator-progress-outer {\n  display: none;\n}\n\n#downloads-indicator-start-box > .toolbarbutton-animatable-image,\n#downloads-indicator-finish-box > .toolbarbutton-animatable-image {\n  visibility: hidden;\n}\n\n/* Button progress indication */\n#downloads-button > .toolbarbutton-badge-stack > #downloads-indicator-progress-outer {\n  visibility: hidden;\n  top: calc(50% - 9px); /* Vertically center the 18px tall animatable image */\n  left: calc(50% - 9px); /* Horizontally center the 18px wide animatable image */\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  border: 1px solid currentColor;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#downloads-button[progress]:not([notification]) > .toolbarbutton-badge-stack > #downloads-indicator-progress-outer {\n  visibility: visible;\n}\n\n#downloads-indicator-progress-inner {\n  width: 14px;\n  height: 14px;\n  /*\n    From javascript side we update the --download-progress-pcent variable to show the current progress\n   */\n  background: conic-gradient(var(--toolbarbutton-icon-fill-attention) var(--download-progress-pcent), transparent var(--download-progress-pcent));\n  border-radius: 50%;\n}\n\n/*** Status badges ***/\n\n#downloads-button[attention=\"info\"] > .toolbarbutton-badge-stack > .toolbarbutton-badge,\n#downloads-button[attention=\"warning\"] > .toolbarbutton-badge-stack > .toolbarbutton-badge,\n#downloads-button[attention=\"severe\"] > .toolbarbutton-badge-stack > .toolbarbutton-badge {\n  display: block;\n  box-shadow: none;\n  /* \"!important\" is necessary to override the rule in toolbarbutton.css */\n  margin: -7px 0 0 !important;\n  margin-inline-end: -4px !important;\n  min-width: 12px;\n  min-height: 12px;\n  -moz-context-properties: fill;\n  background-size: 12px;\n}\n\n#downloads-button[attention=\"info\"] > .toolbarbutton-badge-stack > .toolbarbutton-badge {\n  background: url(chrome://browser/skin/notification-fill-12.svg)  no-repeat center;\n  fill: var(--panel-banner-item-info-icon-bgcolor);\n}\n\n#downloads-button[attention=\"warning\"] > .toolbarbutton-badge-stack > .toolbarbutton-badge {\n  background: url(chrome://global/skin/icons/warning-fill-12.svg) no-repeat center;\n  fill: var(--warning-icon-bgcolor);\n}\n\n#downloads-button[attention=\"severe\"] > .toolbarbutton-badge-stack > .toolbarbutton-badge {\n  background: url(chrome://browser/skin/notification-fill-12.svg) no-repeat center;\n  fill: rgb(226,40,80);\n}\n\ntoolbar[brighttext] #downloads-button[attention=\"severe\"] > .toolbarbutton-badge-stack > .toolbarbutton-badge {\n  fill: rgb(255,132,138);\n}\n\n#downloads-button[animate] > .toolbarbutton-badge-stack > .toolbarbutton-badge {\n  /* Don't display the badge until after the animation has cleared. */\n  display: none;\n}\n\n/*** Download notifications (transitions between downloading states) ***/\n\n#downloads-indicator-start-image {\n  --anim-steps: 16;\n\n  list-style-image: url(\"chrome://browser/skin/downloads/notification-start-animation.svg\");\n  width: calc(20px * (var(--anim-steps) + 1));\n  height: 20px;\n\n  fill: currentColor;\n  fill-opacity: 1;\n  stroke: currentColor;\n\n  /* initial state for animation */\n  transform: translateX(0);\n}\n#downloads-button[attention=\"success\"] > .toolbarbutton-badge-stack > #downloads-indicator-start-box > #downloads-indicator-start-image {\n  /* Match the download icon color in the initial animation frames\n     to the current color of the indicator */\n  stroke: var(--toolbarbutton-icon-fill-attention);\n}\n#downloads-button[washidden] > .toolbarbutton-badge-stack > #downloads-indicator-start-box > #downloads-indicator-start-image {\n  /* Hide the download icon in the first few animation frames, when the button was just un-hidden */\n  stroke: transparent;\n}\n\n#downloads-button[animate][notification=\"start\"] > .toolbarbutton-badge-stack > #downloads-indicator-start-box > #downloads-indicator-start-image {\n  visibility: visible;\n  /* Upon changing the animation-duration below, please keep the\n     setTimeout() identical in indicator.js#_showNotification.\n  */\n  animation-name: downloadsButtonNotification;\n  animation-duration: calc(var(--anim-steps) * 16.667ms);\n  animation-timing-function: steps(var(--anim-steps));\n\n  /* end state for animation: */\n  transform: translateX(calc(var(--anim-steps) * -20px));\n}\n\n#downloads-indicator-finish-image {\n  --anim-frames: 26;\n  --anim-steps: calc(var(--anim-frames) + 100); /* Add 100 frames for doing the pause in the middle */\n\n  fill: var(--toolbarbutton-icon-fill-attention);\n  fill-opacity: 1;\n  stroke: var(--toolbarbutton-icon-fill-attention);\n\n  list-style-image: url(\"chrome://browser/skin/downloads/notification-finish-animation.svg\");\n  width: calc(20px * (var(--anim-frames) + 1));\n  height: 20px;\n\n  /* initial state for animation */\n  transform: translateX(0);\n}\n#downloads-button[open] > .toolbarbutton-badge-stack > #downloads-indicator-finish-box > #downloads-indicator-finish-image {\n stroke: currentColor;\n}\n\n#downloads-button[animate][notification=\"finish\"] > .toolbarbutton-badge-stack > #downloads-indicator-finish-box > #downloads-indicator-finish-image {\n  visibility: visible;\n  animation-name: downloadsButtonFinishedNotification;\n  animation-duration: calc(var(--anim-steps) * 16.667ms);\n\n  /* end state for animation: */\n  transform: translateX(calc(var(--anim-frames) * -20px));\n}\n\n@keyframes downloadsButtonNotification {\n  from {\n    transform: translateX(0);\n  }\n}\n\n@keyframes downloadsButtonFinishedNotification {\n  from {\n    animation-timing-function: steps(18);\n    transform: translateX(0);\n  }\n  14.28% { /* 18th frame (18/126) */\n    transform: translateX(calc(18 * -20px));\n  }\n  93.65% { /* Wait 100 frames of time, but resume from 18th frame (118/126) */\n    animation-timing-function: steps(8);\n    transform: translateX(calc(18 * -20px));\n  }\n}\n", "",{"version":3,"sources":["webpack://./../../themes/shared/downloads/indicator.css"],"names":[],"mappings":"AAAA;;6DAE6D;;AAE7D,sCAAsC;AACtC;EACE,6BAA6B;AAC/B;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,2CAA2C;EAC3C,sEAAsE;AACxE;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,8CAA8C;EAC9C,eAAe;AACjB;;AAEA;EACE,oBAAoB;EACpB,mDAAmD;EACnD,kBAAkB;EAClB,qBAAqB,EAAE,qDAAqD;EAC5E,sBAAsB,EAAE,uDAAuD;EAC/E,WAAW,EAAE,8CAA8C;EAC3D,YAAY,EAAE,+CAA+C;EAC7D,kEAAkE;EAClE,cAAc;EACd;;iCAE+B;EAC/B,eAAe;AACjB;;AAEA,yDAAyD;AACzD;;EAEE,aAAa;AACf;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA,+BAA+B;AAC/B;EACE,kBAAkB;EAClB,oBAAoB,EAAE,qDAAqD;EAC3E,qBAAqB,EAAE,uDAAuD;EAC9E,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,8BAA8B;EAC9B,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ;;IAEE;EACF,+IAA+I;EAC/I,kBAAkB;AACpB;;AAEA,sBAAsB;;AAEtB;;;EAGE,cAAc;EACd,gBAAgB;EAChB,wEAAwE;EACxE,2BAA2B;EAC3B,kCAAkC;EAClC,eAAe;EACf,gBAAgB;EAChB,6BAA6B;EAC7B,qBAAqB;AACvB;;AAEA;EACE,iFAAiF;EACjF,gDAAgD;AAClD;;AAEA;EACE,gFAAgF;EAChF,iCAAiC;AACnC;;AAEA;EACE,gFAAgF;EAChF,oBAAoB;AACtB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,mEAAmE;EACnE,aAAa;AACf;;AAEA,wEAAwE;;AAExE;EACE,gBAAgB;;EAEhB,yFAAyF;EACzF,2CAA2C;EAC3C,YAAY;;EAEZ,kBAAkB;EAClB,eAAe;EACf,oBAAoB;;EAEpB,gCAAgC;EAChC,wBAAwB;AAC1B;AACA;EACE;4CAC0C;EAC1C,gDAAgD;AAClD;AACA;EACE,iGAAiG;EACjG,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB;;GAEC;EACD,2CAA2C;EAC3C,sDAAsD;EACtD,mDAAmD;;EAEnD,6BAA6B;EAC7B,sDAAsD;AACxD;;AAEA;EACE,iBAAiB;EACjB,4CAA4C,EAAE,qDAAqD;;EAEnG,8CAA8C;EAC9C,eAAe;EACf,gDAAgD;;EAEhD,0FAA0F;EAC1F,4CAA4C;EAC5C,YAAY;;EAEZ,gCAAgC;EAChC,wBAAwB;AAC1B;AACA;CACC,oBAAoB;AACrB;;AAEA;EACE,mBAAmB;EACnB,mDAAmD;EACnD,sDAAsD;;EAEtD,6BAA6B;EAC7B,uDAAuD;AACzD;;AAEA;EACE;IACE,wBAAwB;EAC1B;AACF;;AAEA;EACE;IACE,oCAAoC;IACpC,wBAAwB;EAC1B;EACA,SAAS,wBAAwB;IAC/B,uCAAuC;EACzC;EACA,SAAS,kEAAkE;IACzE,mCAAmC;IACnC,uCAAuC;EACzC;AACF","sourcesContent":["/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n/*** Status and progress indicator ***/\n#downloads-button {\n  --download-progress-pcent: 0%;\n}\n\n#downloads-indicator-anchor {\n  min-width: 16px;\n  min-height: 16px;\n  -moz-context-properties: fill, fill-opacity;\n  list-style-image: url(\"chrome://browser/skin/downloads/downloads.svg\");\n}\n\n#downloads-button[progress] > .toolbarbutton-badge-stack > #downloads-indicator-anchor > #downloads-indicator-icon,\n#downloads-button[animate][notification] > .toolbarbutton-badge-stack > #downloads-indicator-anchor > #downloads-indicator-icon {\n  visibility: hidden;\n}\n\n#wrapper-downloads-button > #downloads-button > .toolbarbutton-badge-stack > #downloads-indicator-anchor > #downloads-indicator-icon {\n  visibility: visible;\n}\n\n#downloads-button[attention=\"success\"] > .toolbarbutton-badge-stack > #downloads-indicator-anchor > #downloads-indicator-icon {\n  fill: var(--toolbarbutton-icon-fill-attention);\n  fill-opacity: 1;\n}\n\n#downloads-button > .toolbarbutton-badge-stack > .toolbarbutton-animatable-box {\n  pointer-events: none;\n  -moz-context-properties: fill, fill-opacity, stroke;\n  grid-area: initial;\n  top: calc(50% - 10px); /* Vertically center the 20px tall animatable image */\n  left: calc(50% - 10px); /* Horizontally center the 20px wide animatable image */\n  width: 20px; /* Width of each frame within the SVG sprite */\n  height: 20px; /* Height of each frame within the SVG sprite */\n  /* Animation is not directional and shouldn't be reversed in RTL */\n  direction: ltr;\n  /* Revert to the xul.css user agent stylesheet's z-index value (auto) for\n  stack children, to ensure the badge (the last child of the stack) appears in\n  front of the animatable boxes */\n  z-index: revert;\n}\n\n/* Hide progress and state animations in customize mode */\ntoolbarpaletteitem > #downloads-button > .toolbarbutton-badge-stack > .toolbarbutton-animatable-box,\ntoolbarpaletteitem > #downloads-button > .toolbarbutton-badge-stack > #downloads-indicator-progress-outer {\n  display: none;\n}\n\n#downloads-indicator-start-box > .toolbarbutton-animatable-image,\n#downloads-indicator-finish-box > .toolbarbutton-animatable-image {\n  visibility: hidden;\n}\n\n/* Button progress indication */\n#downloads-button > .toolbarbutton-badge-stack > #downloads-indicator-progress-outer {\n  visibility: hidden;\n  top: calc(50% - 9px); /* Vertically center the 18px tall animatable image */\n  left: calc(50% - 9px); /* Horizontally center the 18px wide animatable image */\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  border: 1px solid currentColor;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#downloads-button[progress]:not([notification]) > .toolbarbutton-badge-stack > #downloads-indicator-progress-outer {\n  visibility: visible;\n}\n\n#downloads-indicator-progress-inner {\n  width: 14px;\n  height: 14px;\n  /*\n    From javascript side we update the --download-progress-pcent variable to show the current progress\n   */\n  background: conic-gradient(var(--toolbarbutton-icon-fill-attention) var(--download-progress-pcent), transparent var(--download-progress-pcent));\n  border-radius: 50%;\n}\n\n/*** Status badges ***/\n\n#downloads-button[attention=\"info\"] > .toolbarbutton-badge-stack > .toolbarbutton-badge,\n#downloads-button[attention=\"warning\"] > .toolbarbutton-badge-stack > .toolbarbutton-badge,\n#downloads-button[attention=\"severe\"] > .toolbarbutton-badge-stack > .toolbarbutton-badge {\n  display: block;\n  box-shadow: none;\n  /* \"!important\" is necessary to override the rule in toolbarbutton.css */\n  margin: -7px 0 0 !important;\n  margin-inline-end: -4px !important;\n  min-width: 12px;\n  min-height: 12px;\n  -moz-context-properties: fill;\n  background-size: 12px;\n}\n\n#downloads-button[attention=\"info\"] > .toolbarbutton-badge-stack > .toolbarbutton-badge {\n  background: url(chrome://browser/skin/notification-fill-12.svg)  no-repeat center;\n  fill: var(--panel-banner-item-info-icon-bgcolor);\n}\n\n#downloads-button[attention=\"warning\"] > .toolbarbutton-badge-stack > .toolbarbutton-badge {\n  background: url(chrome://global/skin/icons/warning-fill-12.svg) no-repeat center;\n  fill: var(--warning-icon-bgcolor);\n}\n\n#downloads-button[attention=\"severe\"] > .toolbarbutton-badge-stack > .toolbarbutton-badge {\n  background: url(chrome://browser/skin/notification-fill-12.svg) no-repeat center;\n  fill: rgb(226,40,80);\n}\n\ntoolbar[brighttext] #downloads-button[attention=\"severe\"] > .toolbarbutton-badge-stack > .toolbarbutton-badge {\n  fill: rgb(255,132,138);\n}\n\n#downloads-button[animate] > .toolbarbutton-badge-stack > .toolbarbutton-badge {\n  /* Don't display the badge until after the animation has cleared. */\n  display: none;\n}\n\n/*** Download notifications (transitions between downloading states) ***/\n\n#downloads-indicator-start-image {\n  --anim-steps: 16;\n\n  list-style-image: url(\"chrome://browser/skin/downloads/notification-start-animation.svg\");\n  width: calc(20px * (var(--anim-steps) + 1));\n  height: 20px;\n\n  fill: currentColor;\n  fill-opacity: 1;\n  stroke: currentColor;\n\n  /* initial state for animation */\n  transform: translateX(0);\n}\n#downloads-button[attention=\"success\"] > .toolbarbutton-badge-stack > #downloads-indicator-start-box > #downloads-indicator-start-image {\n  /* Match the download icon color in the initial animation frames\n     to the current color of the indicator */\n  stroke: var(--toolbarbutton-icon-fill-attention);\n}\n#downloads-button[washidden] > .toolbarbutton-badge-stack > #downloads-indicator-start-box > #downloads-indicator-start-image {\n  /* Hide the download icon in the first few animation frames, when the button was just un-hidden */\n  stroke: transparent;\n}\n\n#downloads-button[animate][notification=\"start\"] > .toolbarbutton-badge-stack > #downloads-indicator-start-box > #downloads-indicator-start-image {\n  visibility: visible;\n  /* Upon changing the animation-duration below, please keep the\n     setTimeout() identical in indicator.js#_showNotification.\n  */\n  animation-name: downloadsButtonNotification;\n  animation-duration: calc(var(--anim-steps) * 16.667ms);\n  animation-timing-function: steps(var(--anim-steps));\n\n  /* end state for animation: */\n  transform: translateX(calc(var(--anim-steps) * -20px));\n}\n\n#downloads-indicator-finish-image {\n  --anim-frames: 26;\n  --anim-steps: calc(var(--anim-frames) + 100); /* Add 100 frames for doing the pause in the middle */\n\n  fill: var(--toolbarbutton-icon-fill-attention);\n  fill-opacity: 1;\n  stroke: var(--toolbarbutton-icon-fill-attention);\n\n  list-style-image: url(\"chrome://browser/skin/downloads/notification-finish-animation.svg\");\n  width: calc(20px * (var(--anim-frames) + 1));\n  height: 20px;\n\n  /* initial state for animation */\n  transform: translateX(0);\n}\n#downloads-button[open] > .toolbarbutton-badge-stack > #downloads-indicator-finish-box > #downloads-indicator-finish-image {\n stroke: currentColor;\n}\n\n#downloads-button[animate][notification=\"finish\"] > .toolbarbutton-badge-stack > #downloads-indicator-finish-box > #downloads-indicator-finish-image {\n  visibility: visible;\n  animation-name: downloadsButtonFinishedNotification;\n  animation-duration: calc(var(--anim-steps) * 16.667ms);\n\n  /* end state for animation: */\n  transform: translateX(calc(var(--anim-frames) * -20px));\n}\n\n@keyframes downloadsButtonNotification {\n  from {\n    transform: translateX(0);\n  }\n}\n\n@keyframes downloadsButtonFinishedNotification {\n  from {\n    animation-timing-function: steps(18);\n    transform: translateX(0);\n  }\n  14.28% { /* 18th frame (18/126) */\n    transform: translateX(calc(18 * -20px));\n  }\n  93.65% { /* Wait 100 frames of time, but resume from 18th frame (118/126) */\n    animation-timing-function: steps(8);\n    transform: translateX(calc(18 * -20px));\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ 23005:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93379);
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_indicator_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45051);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_indicator_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_indicator_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
//# sourceMappingURL=3005.457b75f5.iframe.bundle.js.map