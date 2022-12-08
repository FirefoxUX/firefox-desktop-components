"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[7358],{

/***/ 56017:
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
___CSS_LOADER_EXPORT___.push([module.id, "/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n/**\n * UrlbarProviderTabToSearch\n */\n\n.urlbarView-row[dynamicType=onboardTabToSearch] > .urlbarView-row-inner {\n  min-height: 64px !important; /* Overriding :root:not([uidensity=compact]) .urlbarView-row-inner { min-height } in urlbarView.inc.css */\n  align-items: center;\n}\n\n.urlbarView-row[dynamicType=onboardTabToSearch] > .urlbarView-row-inner > .urlbarView-no-wrap {\n  align-items: center;\n}\n\n.urlbarView-row[dynamicType=onboardTabToSearch]:hover > .urlbarView-row-inner {\n  background-color: var(--arrowpanel-dimmed);\n}\n\n.urlbarView-row[dynamicType=onboardTabToSearch] > .urlbarView-row-inner[selected] {\n  background: var(--autocomplete-popup-highlight-background);\n  color: var(--autocomplete-popup-highlight-color);\n  fill-opacity: 1;\n}\n\n/* Icon */\n.urlbarView-row[dynamicType=onboardTabToSearch] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-favicon {\n  min-width: 32px;\n  height: 32px;\n  color: var(--urlbar-popup-url-color);\n  -moz-context-properties: fill;\n}\n\n.urlbarView-row[dynamicType=onboardTabToSearch] > .urlbarView-row-inner[selected] > .urlbarView-no-wrap > .urlbarView-favicon {\n  color: inherit;\n}\n\n.urlbarView-dynamic-onboardTabToSearch-text-container {\n  display: flex;\n  flex-direction: column;\n}\n\n/* First row of text. */\n.urlbarView-dynamic-onboardTabToSearch-first-row-container {\n  display: flex;\n  align-items: end;\n}\n.urlbarView-results[wrap] > .urlbarView-row[dynamicType=onboardTabToSearch] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-dynamic-onboardTabToSearch-text-container > .urlbarView-dynamic-onboardTabToSearch-first-row-container {\n  flex-wrap: wrap;\n}\n.urlbarView-results[wrap] > .urlbarView-row[dynamicType=onboardTabToSearch] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-dynamic-onboardTabToSearch-text-container > .urlbarView-dynamic-onboardTabToSearch-first-row-container > * {\n  max-width: 100%;\n  flex-basis: 100%;\n}\n.urlbarView-results[wrap] > .urlbarView-row[dynamicType=onboardTabToSearch] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-dynamic-onboardTabToSearch-text-container > .urlbarView-dynamic-onboardTabToSearch-first-row-container > .urlbarView-title-separator {\n  visibility: collapse;\n}\n.urlbarView-row[dynamicType=onboardTabToSearch] > .urlbarView-row-inner[selected] > .urlbarView-no-wrap > .urlbarView-dynamic-onboardTabToSearch-text-container > .urlbarView-dynamic-onboardTabToSearch-first-row-container > .urlbarView-action {\n  color: var(--autocomplete-popup-highlight-color);\n}\n@media (prefers-reduced-motion: no-preference) {\n  .urlbarView-results:not([wrap]) > .urlbarView-row > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-dynamic-onboardTabToSearch-text-container > .urlbarView-dynamic-onboardTabToSearch-first-row-container > .urlbarView-action[slide-in] {\n    animation-name: urlbarView-action-slide-in;\n    animation-duration: 350ms;\n    animation-timing-function: var(--animation-easing-function);\n  }\n}\n\n/* Description text. */\n.urlbarView-dynamic-onboardTabToSearch-description {\n  margin-block-start: 2px;\n}\n.urlbarView-results[wrap] > .urlbarView-row[dynamicType=onboardTabToSearch] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-dynamic-onboardTabToSearch-text-container > .urlbarView-dynamic-onboardTabToSearch-description {\n  max-width: 100%;\n  flex-basis: 100%;\n}\n.urlbarView-row[dynamicType=onboardTabToSearch] > .urlbarView-row-inner:not([selected]) > .urlbarView-no-wrap > .urlbarView-dynamic-onboardTabToSearch-text-container > .urlbarView-dynamic-onboardTabToSearch-description {\n  opacity: 0.6;\n}\n\n/* CSS for Calculator */\n.urlbarView-row[dynamicType=calculator] > .urlbarView-row-inner[selected] {\n  background-color: var(--autocomplete-popup-highlight-background);\n  color: var(--autocomplete-popup-highlight-color);\n}\n\n.urlbarView-row[dynamicType=calculator] > .urlbarView-row-inner:hover {\n  background: var(--arrowpanel-dimmed);\n}\n\n.urlbarView-dynamic-calculator-action {\n  font-size: .85em;\n  font-weight: normal;\n  visibility: collapse;\n}\n\n.urlbarView-row[dynamicType=calculator] > .urlbarView-row-inner:hover .urlbarView-dynamic-calculator-action,\n.urlbarView-row[dynamicType=calculator] > .urlbarView-row-inner[selected] .urlbarView-dynamic-calculator-action {\n  visibility: visible;\n}\n\n.urlbarView-dynamic-calculator-action::before {\n  content: \"\\2014\";\n  margin: 0 .4em;\n  opacity: 0.6;\n}\n\n/** UrlbarProviderUnitConversion **/\n.urlbarView-row[dynamicType=unitConversion] > .urlbarView-row-inner:hover {\n  background: var(--autocomplete-popup-hover-background);\n}\n\n.urlbarView-row[dynamicType=unitConversion] > .urlbarView-row-inner[selected] {\n  background: var(--autocomplete-popup-highlight-background);\n  color: var(--autocomplete-popup-highlight-color);\n  fill-opacity: 1;\n}\n\n.urlbarView-dynamic-unitConversion-action {\n\tfont-size: .85em;\n\tfont-weight: normal;\n\tvisibility: collapse;\n}\n\n.urlbarView-dynamic-unitConversion-action::before {\n\tcontent: \"\\2014\";\n\tmargin: 0 .4em;\n\topacity: 0.6;\n}\n\n.urlbarView-row[dynamicType=unitConversion] > .urlbarView-row-inner:hover .urlbarView-dynamic-unitConversion-action,\n.urlbarView-row[dynamicType=unitConversion] > .urlbarView-row-inner[selected] .urlbarView-dynamic-unitConversion-action {\n\tvisibility: visible;\n}\n\n.urlbarView-row[dynamicType=unitConversion] > .urlbarView-row-inner:hover .urlbarView-dynamic-unitConversion-action {\n\tcolor: var(--urlbar-popup-action-color);\n}\n\n.urlbarView-row[dynamicType=unitConversion] > .urlbarView-row-inner[selected] .urlbarView-dynamic-unitConversion-action {\n  color: var(--autocomplete-popup-highlight-color);\n}\n\n.urlbarView-row[dynamicType=quickactions] > .urlbarView-row-inner {\n  align-items: start;\n}\n\n.urlbarView-row[dynamicType=quickactions] .urlbarView-dynamic-quickactions-buttons {\n  display: flex;\n  flex-grow: 1;\n  gap: 0.9em 1.8em;\n  max-width: 100%;\n}\n\n#urlbar[searchmodesource=actions] .urlbarView-row[dynamicType=quickactions] .urlbarView-dynamic-quickactions-buttons {\n  flex-wrap: wrap;\n}\n\n.urlbarView-results[wrap] > .urlbarView-row[dynamicType=quickactions] > .urlbarView-row-inner {\n  flex-wrap: unset;\n}\n\n.urlbarView-row[dynamicType=quickactions] .urlbarView-quickaction-row {\n  box-shadow: 0px 0px 1px rgba(128, 128, 142, 0.9), 0px 0px 4px rgba(128, 128, 142, 0.5);\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  padding: .5em;\n  margin-top: 2px;\n  position: relative;\n  overflow: hidden;\n  min-width: 16px;\n}\n\n.urlbarView-row[dynamicType=quickactions] .urlbarView-quickaction-row[disabled] {\n  opacity: .4;\n}\n\n.urlbarView-row[dynamicType=quickactions] .urlbarView-label {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 11px;\n  font-weight: 500;\n}\n\n.urlbarView-row[dynamicType=quickactions] .urlbarView-favicon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.urlbarView-row[dynamicType=quickactions] .urlbarView-favicon-img {\n  width: 16px;\n  height: 16px;\n}\n\n.urlbarView-row[dynamicType=quickactions][label]::before {\n  top: -1em;\n  margin-inline-start: 6px;\n}\n\n.urlbarView-row[dynamicType=quickactions] .urlbarView-quickaction-row:hover:not([disabled]):not([selected]) {\n  background-color: var(--autocomplete-popup-hover-background);\n}\n\n.urlbarView-row[dynamicType=quickactions] .urlbarView-quickaction-row[selected] {\n  background-color: var(--autocomplete-popup-highlight-background);\n  color: var(--autocomplete-popup-highlight-color);\n}\n\n.urlbarView-row[dynamicType=quickactions] .urlbarView-title {\n  display: flex;\n}\n\n/**\n * UrlbarProviderContextualSearch\n */\n\n.urlbarView-row[dynamicType=contextualSearch] .urlbarView-title[overflow] {\n  mask-image: linear-gradient(to left, transparent, black 2em);\n}\n\n.urlbarView-row[dynamicType=contextualSearch] .urlbarView-title[overflow]:-moz-locale-dir(rtl) {\n  mask-image: linear-gradient(to right, transparent, black 2em);\n}\n\n.urlbarView-row[dynamicType=contextualSearch] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-title-separator.urlbarView-dynamic-contextualSearch-separator {\n  visibility: visible;\n}\n\n.urlbarView-row[dynamicType=contextualSearch] .urlbarView-dynamic-contextualSearch-description {\n  font-size: 0.85em;\n}\n\n.urlbarView-row[dynamicType=contextualSearch]:hover > .urlbarView-row-inner {\n  background-color: var(--autocomplete-popup-hover-background);\n}\n", "",{"version":3,"sources":["webpack://./../../themes/shared/urlbar-dynamic-results.css"],"names":[],"mappings":"AAAA;;6DAE6D;;AAE7D;;EAEE;;AAEF;EACE,2BAA2B,EAAE,yGAAyG;EACtI,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,0DAA0D;EAC1D,gDAAgD;EAChD,eAAe;AACjB;;AAEA,SAAS;AACT;EACE,eAAe;EACf,YAAY;EACZ,oCAAoC;EACpC,6BAA6B;AAC/B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA,uBAAuB;AACvB;EACE,aAAa;EACb,gBAAgB;AAClB;AACA;EACE,eAAe;AACjB;AACA;EACE,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,oBAAoB;AACtB;AACA;EACE,gDAAgD;AAClD;AACA;EACE;IACE,0CAA0C;IAC1C,yBAAyB;IACzB,2DAA2D;EAC7D;AACF;;AAEA,sBAAsB;AACtB;EACE,uBAAuB;AACzB;AACA;EACE,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,YAAY;AACd;;AAEA,uBAAuB;AACvB;EACE,gEAAgE;EAChE,gDAAgD;AAClD;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;;EAEE,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,YAAY;AACd;;AAEA,mCAAmC;AACnC;EACE,sDAAsD;AACxD;;AAEA;EACE,0DAA0D;EAC1D,gDAAgD;EAChD,eAAe;AACjB;;AAEA;CACC,gBAAgB;CAChB,mBAAmB;CACnB,oBAAoB;AACrB;;AAEA;CACC,gBAAgB;CAChB,cAAc;CACd,YAAY;AACb;;AAEA;;CAEC,mBAAmB;AACpB;;AAEA;CACC,uCAAuC;AACxC;;AAEA;EACE,gDAAgD;AAClD;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,sFAAsF;EACtF,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,uBAAuB;EACvB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,SAAS;EACT,wBAAwB;AAC1B;;AAEA;EACE,4DAA4D;AAC9D;;AAEA;EACE,gEAAgE;EAChE,gDAAgD;AAClD;;AAEA;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,4DAA4D;AAC9D;;AAEA;EACE,6DAA6D;AAC/D;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,4DAA4D;AAC9D","sourcesContent":["/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n/**\n * UrlbarProviderTabToSearch\n */\n\n.urlbarView-row[dynamicType=onboardTabToSearch] > .urlbarView-row-inner {\n  min-height: 64px !important; /* Overriding :root:not([uidensity=compact]) .urlbarView-row-inner { min-height } in urlbarView.inc.css */\n  align-items: center;\n}\n\n.urlbarView-row[dynamicType=onboardTabToSearch] > .urlbarView-row-inner > .urlbarView-no-wrap {\n  align-items: center;\n}\n\n.urlbarView-row[dynamicType=onboardTabToSearch]:hover > .urlbarView-row-inner {\n  background-color: var(--arrowpanel-dimmed);\n}\n\n.urlbarView-row[dynamicType=onboardTabToSearch] > .urlbarView-row-inner[selected] {\n  background: var(--autocomplete-popup-highlight-background);\n  color: var(--autocomplete-popup-highlight-color);\n  fill-opacity: 1;\n}\n\n/* Icon */\n.urlbarView-row[dynamicType=onboardTabToSearch] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-favicon {\n  min-width: 32px;\n  height: 32px;\n  color: var(--urlbar-popup-url-color);\n  -moz-context-properties: fill;\n}\n\n.urlbarView-row[dynamicType=onboardTabToSearch] > .urlbarView-row-inner[selected] > .urlbarView-no-wrap > .urlbarView-favicon {\n  color: inherit;\n}\n\n.urlbarView-dynamic-onboardTabToSearch-text-container {\n  display: flex;\n  flex-direction: column;\n}\n\n/* First row of text. */\n.urlbarView-dynamic-onboardTabToSearch-first-row-container {\n  display: flex;\n  align-items: end;\n}\n.urlbarView-results[wrap] > .urlbarView-row[dynamicType=onboardTabToSearch] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-dynamic-onboardTabToSearch-text-container > .urlbarView-dynamic-onboardTabToSearch-first-row-container {\n  flex-wrap: wrap;\n}\n.urlbarView-results[wrap] > .urlbarView-row[dynamicType=onboardTabToSearch] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-dynamic-onboardTabToSearch-text-container > .urlbarView-dynamic-onboardTabToSearch-first-row-container > * {\n  max-width: 100%;\n  flex-basis: 100%;\n}\n.urlbarView-results[wrap] > .urlbarView-row[dynamicType=onboardTabToSearch] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-dynamic-onboardTabToSearch-text-container > .urlbarView-dynamic-onboardTabToSearch-first-row-container > .urlbarView-title-separator {\n  visibility: collapse;\n}\n.urlbarView-row[dynamicType=onboardTabToSearch] > .urlbarView-row-inner[selected] > .urlbarView-no-wrap > .urlbarView-dynamic-onboardTabToSearch-text-container > .urlbarView-dynamic-onboardTabToSearch-first-row-container > .urlbarView-action {\n  color: var(--autocomplete-popup-highlight-color);\n}\n@media (prefers-reduced-motion: no-preference) {\n  .urlbarView-results:not([wrap]) > .urlbarView-row > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-dynamic-onboardTabToSearch-text-container > .urlbarView-dynamic-onboardTabToSearch-first-row-container > .urlbarView-action[slide-in] {\n    animation-name: urlbarView-action-slide-in;\n    animation-duration: 350ms;\n    animation-timing-function: var(--animation-easing-function);\n  }\n}\n\n/* Description text. */\n.urlbarView-dynamic-onboardTabToSearch-description {\n  margin-block-start: 2px;\n}\n.urlbarView-results[wrap] > .urlbarView-row[dynamicType=onboardTabToSearch] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-dynamic-onboardTabToSearch-text-container > .urlbarView-dynamic-onboardTabToSearch-description {\n  max-width: 100%;\n  flex-basis: 100%;\n}\n.urlbarView-row[dynamicType=onboardTabToSearch] > .urlbarView-row-inner:not([selected]) > .urlbarView-no-wrap > .urlbarView-dynamic-onboardTabToSearch-text-container > .urlbarView-dynamic-onboardTabToSearch-description {\n  opacity: 0.6;\n}\n\n/* CSS for Calculator */\n.urlbarView-row[dynamicType=calculator] > .urlbarView-row-inner[selected] {\n  background-color: var(--autocomplete-popup-highlight-background);\n  color: var(--autocomplete-popup-highlight-color);\n}\n\n.urlbarView-row[dynamicType=calculator] > .urlbarView-row-inner:hover {\n  background: var(--arrowpanel-dimmed);\n}\n\n.urlbarView-dynamic-calculator-action {\n  font-size: .85em;\n  font-weight: normal;\n  visibility: collapse;\n}\n\n.urlbarView-row[dynamicType=calculator] > .urlbarView-row-inner:hover .urlbarView-dynamic-calculator-action,\n.urlbarView-row[dynamicType=calculator] > .urlbarView-row-inner[selected] .urlbarView-dynamic-calculator-action {\n  visibility: visible;\n}\n\n.urlbarView-dynamic-calculator-action::before {\n  content: \"\\2014\";\n  margin: 0 .4em;\n  opacity: 0.6;\n}\n\n/** UrlbarProviderUnitConversion **/\n.urlbarView-row[dynamicType=unitConversion] > .urlbarView-row-inner:hover {\n  background: var(--autocomplete-popup-hover-background);\n}\n\n.urlbarView-row[dynamicType=unitConversion] > .urlbarView-row-inner[selected] {\n  background: var(--autocomplete-popup-highlight-background);\n  color: var(--autocomplete-popup-highlight-color);\n  fill-opacity: 1;\n}\n\n.urlbarView-dynamic-unitConversion-action {\n\tfont-size: .85em;\n\tfont-weight: normal;\n\tvisibility: collapse;\n}\n\n.urlbarView-dynamic-unitConversion-action::before {\n\tcontent: \"\\2014\";\n\tmargin: 0 .4em;\n\topacity: 0.6;\n}\n\n.urlbarView-row[dynamicType=unitConversion] > .urlbarView-row-inner:hover .urlbarView-dynamic-unitConversion-action,\n.urlbarView-row[dynamicType=unitConversion] > .urlbarView-row-inner[selected] .urlbarView-dynamic-unitConversion-action {\n\tvisibility: visible;\n}\n\n.urlbarView-row[dynamicType=unitConversion] > .urlbarView-row-inner:hover .urlbarView-dynamic-unitConversion-action {\n\tcolor: var(--urlbar-popup-action-color);\n}\n\n.urlbarView-row[dynamicType=unitConversion] > .urlbarView-row-inner[selected] .urlbarView-dynamic-unitConversion-action {\n  color: var(--autocomplete-popup-highlight-color);\n}\n\n.urlbarView-row[dynamicType=quickactions] > .urlbarView-row-inner {\n  align-items: start;\n}\n\n.urlbarView-row[dynamicType=quickactions] .urlbarView-dynamic-quickactions-buttons {\n  display: flex;\n  flex-grow: 1;\n  gap: 0.9em 1.8em;\n  max-width: 100%;\n}\n\n#urlbar[searchmodesource=actions] .urlbarView-row[dynamicType=quickactions] .urlbarView-dynamic-quickactions-buttons {\n  flex-wrap: wrap;\n}\n\n.urlbarView-results[wrap] > .urlbarView-row[dynamicType=quickactions] > .urlbarView-row-inner {\n  flex-wrap: unset;\n}\n\n.urlbarView-row[dynamicType=quickactions] .urlbarView-quickaction-row {\n  box-shadow: 0px 0px 1px rgba(128, 128, 142, 0.9), 0px 0px 4px rgba(128, 128, 142, 0.5);\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  padding: .5em;\n  margin-top: 2px;\n  position: relative;\n  overflow: hidden;\n  min-width: 16px;\n}\n\n.urlbarView-row[dynamicType=quickactions] .urlbarView-quickaction-row[disabled] {\n  opacity: .4;\n}\n\n.urlbarView-row[dynamicType=quickactions] .urlbarView-label {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 11px;\n  font-weight: 500;\n}\n\n.urlbarView-row[dynamicType=quickactions] .urlbarView-favicon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.urlbarView-row[dynamicType=quickactions] .urlbarView-favicon-img {\n  width: 16px;\n  height: 16px;\n}\n\n.urlbarView-row[dynamicType=quickactions][label]::before {\n  top: -1em;\n  margin-inline-start: 6px;\n}\n\n.urlbarView-row[dynamicType=quickactions] .urlbarView-quickaction-row:hover:not([disabled]):not([selected]) {\n  background-color: var(--autocomplete-popup-hover-background);\n}\n\n.urlbarView-row[dynamicType=quickactions] .urlbarView-quickaction-row[selected] {\n  background-color: var(--autocomplete-popup-highlight-background);\n  color: var(--autocomplete-popup-highlight-color);\n}\n\n.urlbarView-row[dynamicType=quickactions] .urlbarView-title {\n  display: flex;\n}\n\n/**\n * UrlbarProviderContextualSearch\n */\n\n.urlbarView-row[dynamicType=contextualSearch] .urlbarView-title[overflow] {\n  mask-image: linear-gradient(to left, transparent, black 2em);\n}\n\n.urlbarView-row[dynamicType=contextualSearch] .urlbarView-title[overflow]:-moz-locale-dir(rtl) {\n  mask-image: linear-gradient(to right, transparent, black 2em);\n}\n\n.urlbarView-row[dynamicType=contextualSearch] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-title-separator.urlbarView-dynamic-contextualSearch-separator {\n  visibility: visible;\n}\n\n.urlbarView-row[dynamicType=contextualSearch] .urlbarView-dynamic-contextualSearch-description {\n  font-size: 0.85em;\n}\n\n.urlbarView-row[dynamicType=contextualSearch]:hover > .urlbarView-row-inner {\n  background-color: var(--autocomplete-popup-hover-background);\n}\n"],"sourceRoot":""}]);
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

/***/ 97358:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93379);
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_urlbar_dynamic_results_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56017);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_urlbar_dynamic_results_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_urlbar_dynamic_results_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
//# sourceMappingURL=7358.f7c640b1.iframe.bundle.js.map