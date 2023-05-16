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
___CSS_LOADER_EXPORT___.push([module.id, "/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n/**\n * UrlbarProviderTabToSearch\n */\n\n.urlbarView-row[dynamicType=onboardTabToSearch] > .urlbarView-row-inner {\n  min-height: 64px !important; /* Overriding :root:not([uidensity=compact]) .urlbarView-row-inner { min-height } in urlbarView.inc.css */\n  align-items: center;\n}\n\n.urlbarView-row[dynamicType=onboardTabToSearch] > .urlbarView-row-inner > .urlbarView-no-wrap {\n  align-items: center;\n}\n\n.urlbarView-row[dynamicType=onboardTabToSearch][selected] {\n  fill-opacity: 1;\n}\n\n/* Icon */\n.urlbarView-row[dynamicType=onboardTabToSearch] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-favicon {\n  min-width: 32px;\n  height: 32px;\n  color: var(--urlbar-popup-url-color);\n  -moz-context-properties: fill;\n}\n\n.urlbarView-row[dynamicType=onboardTabToSearch] > .urlbarView-row-inner[selected] > .urlbarView-no-wrap > .urlbarView-favicon {\n  color: inherit;\n}\n\n.urlbarView-dynamic-onboardTabToSearch-text-container {\n  display: flex;\n  flex-direction: column;\n}\n\n/* First row of text. */\n.urlbarView-dynamic-onboardTabToSearch-first-row-container {\n  display: flex;\n  align-items: end;\n}\n.urlbarView-results[wrap] > .urlbarView-row[dynamicType=onboardTabToSearch] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-dynamic-onboardTabToSearch-text-container > .urlbarView-dynamic-onboardTabToSearch-first-row-container {\n  flex-wrap: wrap;\n}\n.urlbarView-results[wrap] > .urlbarView-row[dynamicType=onboardTabToSearch] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-dynamic-onboardTabToSearch-text-container > .urlbarView-dynamic-onboardTabToSearch-first-row-container > * {\n  max-width: 100%;\n  flex-basis: 100%;\n}\n.urlbarView-results[wrap] > .urlbarView-row[dynamicType=onboardTabToSearch] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-dynamic-onboardTabToSearch-text-container > .urlbarView-dynamic-onboardTabToSearch-first-row-container > .urlbarView-title-separator {\n  visibility: collapse;\n}\n.urlbarView-row[dynamicType=onboardTabToSearch] > .urlbarView-row-inner[selected] > .urlbarView-no-wrap > .urlbarView-dynamic-onboardTabToSearch-text-container > .urlbarView-dynamic-onboardTabToSearch-first-row-container > .urlbarView-action {\n  color: var(--autocomplete-popup-highlight-color);\n}\n@media (prefers-reduced-motion: no-preference) {\n  .urlbarView-results:not([wrap]) > .urlbarView-row > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-dynamic-onboardTabToSearch-text-container > .urlbarView-dynamic-onboardTabToSearch-first-row-container > .urlbarView-action[slide-in] {\n    animation-name: urlbarView-action-slide-in;\n    animation-duration: 350ms;\n    animation-timing-function: var(--animation-easing-function);\n  }\n}\n\n/* Description text. */\n.urlbarView-dynamic-onboardTabToSearch-description {\n  margin-block-start: 2px;\n}\n.urlbarView-results[wrap] > .urlbarView-row[dynamicType=onboardTabToSearch] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-dynamic-onboardTabToSearch-text-container > .urlbarView-dynamic-onboardTabToSearch-description {\n  max-width: 100%;\n  flex-basis: 100%;\n}\n.urlbarView-row[dynamicType=onboardTabToSearch] > .urlbarView-row-inner:not([selected]) > .urlbarView-no-wrap > .urlbarView-dynamic-onboardTabToSearch-text-container > .urlbarView-dynamic-onboardTabToSearch-description {\n  opacity: 0.6;\n}\n\n/* CSS for Calculator */\n.urlbarView-dynamic-calculator-action {\n  font-size: .85em;\n  font-weight: normal;\n  visibility: collapse;\n}\n\n.urlbarView-row[dynamicType=calculator]:is(:hover, [selected]) .urlbarView-dynamic-calculator-action {\n  visibility: visible;\n}\n\n.urlbarView-dynamic-calculator-action::before {\n  content: \"\\2014\";\n  margin: 0 .4em;\n  opacity: 0.6;\n}\n\n/** UrlbarProviderUnitConversion **/\n\n.urlbarView-row[dynamicType=unitConversion][selected] {\n  fill-opacity: 1;\n}\n\n.urlbarView-dynamic-unitConversion-action {\n\tfont-size: .85em;\n\tfont-weight: normal;\n\tvisibility: collapse;\n}\n\n.urlbarView-dynamic-unitConversion-action::before {\n\tcontent: \"\\2014\";\n\tmargin: 0 .4em;\n\topacity: 0.6;\n}\n\n.urlbarView-row[dynamicType=unitConversion]:is(:hover, [selected]) .urlbarView-dynamic-unitConversion-action {\n\tvisibility: visible;\n}\n\n.urlbarView-row[dynamicType=unitConversion]:hover .urlbarView-dynamic-unitConversion-action {\n\tcolor: var(--urlbar-popup-action-color);\n}\n\n.urlbarView-row[dynamicType=unitConversion][selected] .urlbarView-dynamic-unitConversion-action {\n  color: var(--autocomplete-popup-highlight-color);\n}\n\n.urlbarView-row[dynamicType=quickactions] > .urlbarView-row-inner {\n  align-items: start;\n}\n\n.urlbarView-row[dynamicType=quickactions] .urlbarView-dynamic-quickactions-buttons {\n  display: flex;\n  flex-grow: 1;\n  gap: 0.9em 1.8em;\n  max-width: 100%;\n}\n\n#urlbar[searchmodesource=actions] .urlbarView-row[dynamicType=quickactions] .urlbarView-dynamic-quickactions-buttons {\n  flex-wrap: wrap;\n}\n\n.urlbarView-results[wrap] > .urlbarView-row[dynamicType=quickactions] > .urlbarView-row-inner {\n  flex-wrap: unset;\n}\n\n.urlbarView-row[dynamicType=quickactions] .urlbarView-quickaction-row {\n  box-shadow: 0px 0px 1px rgba(128, 128, 142, 0.9), 0px 0px 4px rgba(128, 128, 142, 0.5);\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  padding: .5em;\n  margin-top: 2px;\n  position: relative;\n  overflow: hidden;\n  min-width: 16px;\n}\n\n.urlbarView-row[dynamicType=quickactions] .urlbarView-quickaction-row[disabled] {\n  opacity: .4;\n}\n\n.urlbarView-row[dynamicType=quickactions] .urlbarView-label {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 11px;\n  font-weight: 500;\n}\n\n.urlbarView-row[dynamicType=quickactions] .urlbarView-favicon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.urlbarView-row[dynamicType=quickactions] .urlbarView-favicon-img {\n  width: 16px;\n  height: 16px;\n}\n\n.urlbarView-row[dynamicType=quickactions][label]::before {\n  top: -1em;\n  margin-inline-start: 6px;\n}\n\n.urlbarView-row[dynamicType=quickactions] .urlbarView-quickaction-row:hover:not([disabled]):not([selected]) {\n  background-color: var(--autocomplete-popup-hover-background);\n}\n\n.urlbarView-row[dynamicType=quickactions] .urlbarView-quickaction-row[selected] {\n  background-color: var(--autocomplete-popup-highlight-background);\n  color: var(--autocomplete-popup-highlight-color);\n}\n\n.urlbarView-row[dynamicType=quickactions] .urlbarView-title {\n  display: flex;\n}\n\n/**\n * UrlbarProviderContextualSearch\n */\n\n.urlbarView-row[dynamicType=contextualSearch] .urlbarView-title[overflow] {\n  mask-image: linear-gradient(to left, transparent, black 2em);\n}\n\n.urlbarView-row[dynamicType=contextualSearch] .urlbarView-title[overflow]:-moz-locale-dir(rtl) {\n  mask-image: linear-gradient(to right, transparent, black 2em);\n}\n\n.urlbarView-row[dynamicType=contextualSearch] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-title-separator.urlbarView-dynamic-contextualSearch-separator {\n  visibility: visible;\n}\n\n.urlbarView-row[dynamicType=contextualSearch] .urlbarView-dynamic-contextualSearch-description {\n  font-size: 0.85em;\n}\n\n.urlbarView-row[dynamicType=contextualSearch]:hover > .urlbarView-row-inner {\n  background-color: var(--autocomplete-popup-hover-background);\n}\n\n\n/**\n * Weather\n *\n * All em units used below are based on the spec where 1em is 13px.\n * Thus using 13px as a base to calculate the other relative em sizes, either\n * a bigger or smaller ratio to 13px.\n */\n\n.urlbarView-results[wrap] > .urlbarView-row[dynamicType=weather] > .urlbarView-row-inner {\n  flex-wrap: nowrap;\n}\n\n.urlbarView-dynamic-weather-currentConditions {\n  /* Same colors as the switch-to-tab action chiclet */\n  color: var(--urlbar-box-text-color);\n  background-color: var(--urlbar-box-focus-bgcolor);\n  padding: 0.61em 0.61em 0.84em;\n  margin-inline-end: 0.92em;\n  border-radius: 2px;\n  text-align: center;\n}\n\n.urlbarView-row[dynamicType=weather]:is([selected], :hover) > .urlbarView-row-inner > .urlbarView-dynamic-weather-currentConditions {\n  /* Same colors as the switch-to-tab action chiclet */\n  color: var(--urlbarView-result-button-selected-color);\n  background-color: var(--urlbarView-result-button-selected-background-color);\n}\n\n.urlbarView-dynamic-weather-currently {\n  font-size: 0.85em;\n  margin-bottom: 0.53em;\n}\n\n.urlbarView-dynamic-weather-temperature {\n  margin-inline-end: 0.3em;\n  font-weight: 600;\n  /* The units from the spec:\n     - 1em is 13px\n     - temperature is 18px\n     - We need to figure out the temperature in units of em.\n     - 18px / 13px = 1.385em\n     Therefore, the temperature is 1.385em units.\n  */\n  font-size: 1.385em;\n  vertical-align: middle;\n}\n\n.urlbarView-dynamic-weather-weatherIcon {\n  width: 22px;\n  height: 23px;\n  vertical-align: middle;\n}\n\n/* Weather Icon color for high contrast mode */\n@media (prefers-contrast) {\n  .urlbarView-dynamic-weather-weatherIcon {\n    -moz-context-properties: fill, stroke;\n    fill: currentColor;\n    stroke: currentColor;\n  }\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"1\"] {\n  content: url(\"chrome://browser/skin/weather/sunny.svg\");\n  height: 22px;\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"2\"] {\n  content: url(\"chrome://browser/skin/weather/mostly-sunny.svg\");\n  height: 22px;\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"3\"],\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"4\"],\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"6\"] {\n  content: url(\"chrome://browser/skin/weather/partly-sunny.svg\");\n  height: 22px;\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"5\"] {\n  content: url(\"chrome://browser/skin/weather/hazy-sunshine.svg\");\n  height: 22px;\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"7\"],\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"8\"] {\n  content: url(\"chrome://browser/skin/weather/cloudy.svg\");\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"11\"] {\n  content: url(\"chrome://browser/skin/weather/fog.svg\");\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"12\"] {\n  content: url(\"chrome://browser/skin/weather/showers.svg\");\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"13\"],\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"14\"] {\n  content: url(\"chrome://browser/skin/weather/mostly-cloudy-with-showers.svg\");\n  height: 22px;\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"15\"] {\n  content: url(\"chrome://browser/skin/weather/thunderstorms.svg\");\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"16\"],\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"17\"] {\n  content: url(\"chrome://browser/skin/weather/mostly-cloudy-with-thunderstorms.svg\");\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"18\"] {\n  content: url(\"chrome://browser/skin/weather/rain.svg\");\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"19\"],\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"20\"],\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"25\"] {\n  content: url(\"chrome://browser/skin/weather/flurries.svg\");\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"21\"] {\n  content: url(\"chrome://browser/skin/weather/partly-sunny-with-flurries.svg\");\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"22\"],\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"23\"] {\n  content: url(\"chrome://browser/skin/weather/snow.svg\");\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"24\"],\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"31\"] {\n  content: url(\"chrome://browser/skin/weather/ice.svg\");\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"26\"],\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"29\"] {\n  content: url(\"chrome://browser/skin/weather/freezing-rain.svg\");\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"30\"] {\n  content: url(\"chrome://browser/skin/weather/hot.svg\");\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"32\"] {\n  content: url(\"chrome://browser/skin/weather/windy.svg\");\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"33\"] {\n  content: url(\"chrome://browser/skin/weather/night-clear.svg\");\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"34\"],\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"35\"],\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"36\"],\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"38\"] {\n  content: url(\"chrome://browser/skin/weather/night-mostly-clear.svg\");\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"37\"] {\n  content: url(\"chrome://browser/skin/weather/night-hazy-moonlight.svg\");\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"39\"],\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"40\"] {\n  content: url(\"chrome://browser/skin/weather/night-partly-cloudy-with-showers.svg\");\n  height: 22px;\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"41\"],\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"42\"] {\n  content: url(\"chrome://browser/skin/weather/night-partly-cloudy-with-thunderstorms.svg\");\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"43\"],\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"44\"] {\n  content: url(\"chrome://browser/skin/weather/night-mostly-cloudy-with-flurries.svg\");\n}\n\n.urlbarView-dynamic-weather-summary {\n  flex-grow: 1;\n  flex-shrink: 1;\n  min-width: 0;\n}\n\n.urlbarView-dynamic-weather-top {\n  display: flex;\n  align-items: center;\n}\n\n.urlbarView-dynamic-weather-topNoWrap {\n  display: inline-flex;\n  align-items: center;\n}\n\n.urlbarView-results[wrap] > .urlbarView-row[dynamicType=weather] > .urlbarView-row-inner .urlbarView-dynamic-weather-top {\n  flex-wrap: wrap;\n}\n\n.urlbarView-results[wrap] > .urlbarView-row[dynamicType=weather] > .urlbarView-row-inner > .urlbarView-dynamic-weather-summary > .urlbarView-dynamic-weather-top > .urlbarView-dynamic-weather-topNoWrap > .urlbarView-dynamic-weather-titleSeparator {\n  display: none;\n}\n\n.urlbarView-dynamic-weather-middle {\n  font-size: 0.85em;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.urlbarView-dynamic-weather-middleNoWrap {\n  display: inline-flex;\n  align-items: center;\n}\n\n/* When middleNoWrap has overflowed, we want to hide the summaryTextSeparator.\n   We also want to keep the overflow state stable without it going back to\n   an underflow state. This is why we are using `visibility: hidden` so the\n   space is allocated for the summaryTextSeparator and highLow but they are\n   not visible on the page. Thus, keeping the middleNoWrap in an overflow\n   state while hiding the summaryTextSeparator.\n */\n.urlbarView-dynamic-weather-middleNoWrap[overflow] > .urlbarView-dynamic-weather-summaryTextSeparator,\n.urlbarView-dynamic-weather-middleNoWrap[overflow] > .urlbarView-dynamic-weather-highLow {\n  visibility: hidden;\n}\n\n/* The highLowWrap remains hidden when middleNoWrap is not overflowed. Once it\n   has overflowed, we display the highLowWrap element.\n*/\n.urlbarView-dynamic-weather-middleNoWrap:not([overflow]) + .urlbarView-dynamic-weather-highLowWrap {\n  display: none;\n}\n\n.urlbarView-dynamic-weather-summaryTextSeparator::before {\n  content: '\\00B7';\n  margin: 0.25em;\n}\n.urlbarView-dynamic-weather-bottom {\n  font-size: 0.85em;\n  margin-top: 0.40em;\n  opacity: 0.6;\n}\n\n.urlbarView-row[dynamicType=weather][selected] > .urlbarView-row-inner > .urlbarView-dynamic-weather-summary > .urlbarView-dynamic-weather-top > .urlbarView-url {\n  color: inherit;\n}\n\n.urlbarView-row[dynamicType=weather][selected] > .urlbarView-row-inner > .urlbarView-dynamic-weather-summary > .urlbarView-dynamic-weather-bottom {\n  opacity: 1;\n}\n\n/* Addons suggestions */\n.urlbarView-dynamic-addons-content {\n  display: grid;\n  grid-template-areas: \"icon header\"\n                       \"icon description\"\n                       \"icon footer\";\n  align-items: center;\n  padding: 5px 4px;\n}\n\n.urlbarView-dynamic-addons-icon {\n  grid-area: icon;\n  width: 60px;\n  height: 60px;\n  margin-inline-end: 8px;\n}\n\n.urlbarView-dynamic-addons-header {\n  grid-area: header;\n}\n\n.urlbarView-dynamic-addons-description {\n  grid-area: description;\n  font-size: 0.85em;\n  color: var(--panel-description-color);\n  margin-block: 2px 9px;\n}\n\n.urlbarView-dynamic-addons-footer {\n  grid-area: footer;\n  display: flex;\n  align-items: center;\n}\n\n.urlbarView-dynamic-addons-ratingContainer {\n  width: calc(16px * 5);\n  height: 16px;\n  margin-inline-end: 9px;\n}\n\n.urlbarView-dynamic-addons-rating {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  fill: currentColor;\n  -moz-context-properties: fill;\n}\n\n.urlbarView-dynamic-addons-rating[fill=\"empty\"] {\n  background-image: url(\"chrome://mozapps/skin/extensions/rating-star.svg#empty\");\n}\n.urlbarView-dynamic-addons-rating[fill=\"half\"] {\n  background-image: url(\"chrome://mozapps/skin/extensions/rating-star.svg#half\");\n}\n.urlbarView-dynamic-addons-rating[fill=\"half\"]:dir(rtl) {\n  transform: scaleX(-1);\n}\n.urlbarView-dynamic-addons-rating[fill=\"full\"] {\n  background-image: url(\"chrome://mozapps/skin/extensions/rating-star.svg#full\");\n}\n\n.urlbarView-dynamic-addons-reviews {\n  font-size: 0.85em;\n  color: var(--panel-description-color);\n}\n", "",{"version":3,"sources":["webpack://./../../themes/shared/urlbar-dynamic-results.css"],"names":[],"mappings":"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","sourcesContent":["/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n/**\n * UrlbarProviderTabToSearch\n */\n\n.urlbarView-row[dynamicType=onboardTabToSearch] > .urlbarView-row-inner {\n  min-height: 64px !important; /* Overriding :root:not([uidensity=compact]) .urlbarView-row-inner { min-height } in urlbarView.inc.css */\n  align-items: center;\n}\n\n.urlbarView-row[dynamicType=onboardTabToSearch] > .urlbarView-row-inner > .urlbarView-no-wrap {\n  align-items: center;\n}\n\n.urlbarView-row[dynamicType=onboardTabToSearch][selected] {\n  fill-opacity: 1;\n}\n\n/* Icon */\n.urlbarView-row[dynamicType=onboardTabToSearch] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-favicon {\n  min-width: 32px;\n  height: 32px;\n  color: var(--urlbar-popup-url-color);\n  -moz-context-properties: fill;\n}\n\n.urlbarView-row[dynamicType=onboardTabToSearch] > .urlbarView-row-inner[selected] > .urlbarView-no-wrap > .urlbarView-favicon {\n  color: inherit;\n}\n\n.urlbarView-dynamic-onboardTabToSearch-text-container {\n  display: flex;\n  flex-direction: column;\n}\n\n/* First row of text. */\n.urlbarView-dynamic-onboardTabToSearch-first-row-container {\n  display: flex;\n  align-items: end;\n}\n.urlbarView-results[wrap] > .urlbarView-row[dynamicType=onboardTabToSearch] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-dynamic-onboardTabToSearch-text-container > .urlbarView-dynamic-onboardTabToSearch-first-row-container {\n  flex-wrap: wrap;\n}\n.urlbarView-results[wrap] > .urlbarView-row[dynamicType=onboardTabToSearch] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-dynamic-onboardTabToSearch-text-container > .urlbarView-dynamic-onboardTabToSearch-first-row-container > * {\n  max-width: 100%;\n  flex-basis: 100%;\n}\n.urlbarView-results[wrap] > .urlbarView-row[dynamicType=onboardTabToSearch] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-dynamic-onboardTabToSearch-text-container > .urlbarView-dynamic-onboardTabToSearch-first-row-container > .urlbarView-title-separator {\n  visibility: collapse;\n}\n.urlbarView-row[dynamicType=onboardTabToSearch] > .urlbarView-row-inner[selected] > .urlbarView-no-wrap > .urlbarView-dynamic-onboardTabToSearch-text-container > .urlbarView-dynamic-onboardTabToSearch-first-row-container > .urlbarView-action {\n  color: var(--autocomplete-popup-highlight-color);\n}\n@media (prefers-reduced-motion: no-preference) {\n  .urlbarView-results:not([wrap]) > .urlbarView-row > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-dynamic-onboardTabToSearch-text-container > .urlbarView-dynamic-onboardTabToSearch-first-row-container > .urlbarView-action[slide-in] {\n    animation-name: urlbarView-action-slide-in;\n    animation-duration: 350ms;\n    animation-timing-function: var(--animation-easing-function);\n  }\n}\n\n/* Description text. */\n.urlbarView-dynamic-onboardTabToSearch-description {\n  margin-block-start: 2px;\n}\n.urlbarView-results[wrap] > .urlbarView-row[dynamicType=onboardTabToSearch] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-dynamic-onboardTabToSearch-text-container > .urlbarView-dynamic-onboardTabToSearch-description {\n  max-width: 100%;\n  flex-basis: 100%;\n}\n.urlbarView-row[dynamicType=onboardTabToSearch] > .urlbarView-row-inner:not([selected]) > .urlbarView-no-wrap > .urlbarView-dynamic-onboardTabToSearch-text-container > .urlbarView-dynamic-onboardTabToSearch-description {\n  opacity: 0.6;\n}\n\n/* CSS for Calculator */\n.urlbarView-dynamic-calculator-action {\n  font-size: .85em;\n  font-weight: normal;\n  visibility: collapse;\n}\n\n.urlbarView-row[dynamicType=calculator]:is(:hover, [selected]) .urlbarView-dynamic-calculator-action {\n  visibility: visible;\n}\n\n.urlbarView-dynamic-calculator-action::before {\n  content: \"\\2014\";\n  margin: 0 .4em;\n  opacity: 0.6;\n}\n\n/** UrlbarProviderUnitConversion **/\n\n.urlbarView-row[dynamicType=unitConversion][selected] {\n  fill-opacity: 1;\n}\n\n.urlbarView-dynamic-unitConversion-action {\n\tfont-size: .85em;\n\tfont-weight: normal;\n\tvisibility: collapse;\n}\n\n.urlbarView-dynamic-unitConversion-action::before {\n\tcontent: \"\\2014\";\n\tmargin: 0 .4em;\n\topacity: 0.6;\n}\n\n.urlbarView-row[dynamicType=unitConversion]:is(:hover, [selected]) .urlbarView-dynamic-unitConversion-action {\n\tvisibility: visible;\n}\n\n.urlbarView-row[dynamicType=unitConversion]:hover .urlbarView-dynamic-unitConversion-action {\n\tcolor: var(--urlbar-popup-action-color);\n}\n\n.urlbarView-row[dynamicType=unitConversion][selected] .urlbarView-dynamic-unitConversion-action {\n  color: var(--autocomplete-popup-highlight-color);\n}\n\n.urlbarView-row[dynamicType=quickactions] > .urlbarView-row-inner {\n  align-items: start;\n}\n\n.urlbarView-row[dynamicType=quickactions] .urlbarView-dynamic-quickactions-buttons {\n  display: flex;\n  flex-grow: 1;\n  gap: 0.9em 1.8em;\n  max-width: 100%;\n}\n\n#urlbar[searchmodesource=actions] .urlbarView-row[dynamicType=quickactions] .urlbarView-dynamic-quickactions-buttons {\n  flex-wrap: wrap;\n}\n\n.urlbarView-results[wrap] > .urlbarView-row[dynamicType=quickactions] > .urlbarView-row-inner {\n  flex-wrap: unset;\n}\n\n.urlbarView-row[dynamicType=quickactions] .urlbarView-quickaction-row {\n  box-shadow: 0px 0px 1px rgba(128, 128, 142, 0.9), 0px 0px 4px rgba(128, 128, 142, 0.5);\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  padding: .5em;\n  margin-top: 2px;\n  position: relative;\n  overflow: hidden;\n  min-width: 16px;\n}\n\n.urlbarView-row[dynamicType=quickactions] .urlbarView-quickaction-row[disabled] {\n  opacity: .4;\n}\n\n.urlbarView-row[dynamicType=quickactions] .urlbarView-label {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 11px;\n  font-weight: 500;\n}\n\n.urlbarView-row[dynamicType=quickactions] .urlbarView-favicon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.urlbarView-row[dynamicType=quickactions] .urlbarView-favicon-img {\n  width: 16px;\n  height: 16px;\n}\n\n.urlbarView-row[dynamicType=quickactions][label]::before {\n  top: -1em;\n  margin-inline-start: 6px;\n}\n\n.urlbarView-row[dynamicType=quickactions] .urlbarView-quickaction-row:hover:not([disabled]):not([selected]) {\n  background-color: var(--autocomplete-popup-hover-background);\n}\n\n.urlbarView-row[dynamicType=quickactions] .urlbarView-quickaction-row[selected] {\n  background-color: var(--autocomplete-popup-highlight-background);\n  color: var(--autocomplete-popup-highlight-color);\n}\n\n.urlbarView-row[dynamicType=quickactions] .urlbarView-title {\n  display: flex;\n}\n\n/**\n * UrlbarProviderContextualSearch\n */\n\n.urlbarView-row[dynamicType=contextualSearch] .urlbarView-title[overflow] {\n  mask-image: linear-gradient(to left, transparent, black 2em);\n}\n\n.urlbarView-row[dynamicType=contextualSearch] .urlbarView-title[overflow]:-moz-locale-dir(rtl) {\n  mask-image: linear-gradient(to right, transparent, black 2em);\n}\n\n.urlbarView-row[dynamicType=contextualSearch] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-title-separator.urlbarView-dynamic-contextualSearch-separator {\n  visibility: visible;\n}\n\n.urlbarView-row[dynamicType=contextualSearch] .urlbarView-dynamic-contextualSearch-description {\n  font-size: 0.85em;\n}\n\n.urlbarView-row[dynamicType=contextualSearch]:hover > .urlbarView-row-inner {\n  background-color: var(--autocomplete-popup-hover-background);\n}\n\n\n/**\n * Weather\n *\n * All em units used below are based on the spec where 1em is 13px.\n * Thus using 13px as a base to calculate the other relative em sizes, either\n * a bigger or smaller ratio to 13px.\n */\n\n.urlbarView-results[wrap] > .urlbarView-row[dynamicType=weather] > .urlbarView-row-inner {\n  flex-wrap: nowrap;\n}\n\n.urlbarView-dynamic-weather-currentConditions {\n  /* Same colors as the switch-to-tab action chiclet */\n  color: var(--urlbar-box-text-color);\n  background-color: var(--urlbar-box-focus-bgcolor);\n  padding: 0.61em 0.61em 0.84em;\n  margin-inline-end: 0.92em;\n  border-radius: 2px;\n  text-align: center;\n}\n\n.urlbarView-row[dynamicType=weather]:is([selected], :hover) > .urlbarView-row-inner > .urlbarView-dynamic-weather-currentConditions {\n  /* Same colors as the switch-to-tab action chiclet */\n  color: var(--urlbarView-result-button-selected-color);\n  background-color: var(--urlbarView-result-button-selected-background-color);\n}\n\n.urlbarView-dynamic-weather-currently {\n  font-size: 0.85em;\n  margin-bottom: 0.53em;\n}\n\n.urlbarView-dynamic-weather-temperature {\n  margin-inline-end: 0.3em;\n  font-weight: 600;\n  /* The units from the spec:\n     - 1em is 13px\n     - temperature is 18px\n     - We need to figure out the temperature in units of em.\n     - 18px / 13px = 1.385em\n     Therefore, the temperature is 1.385em units.\n  */\n  font-size: 1.385em;\n  vertical-align: middle;\n}\n\n.urlbarView-dynamic-weather-weatherIcon {\n  width: 22px;\n  height: 23px;\n  vertical-align: middle;\n}\n\n/* Weather Icon color for high contrast mode */\n@media (prefers-contrast) {\n  .urlbarView-dynamic-weather-weatherIcon {\n    -moz-context-properties: fill, stroke;\n    fill: currentColor;\n    stroke: currentColor;\n  }\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"1\"] {\n  content: url(\"chrome://browser/skin/weather/sunny.svg\");\n  height: 22px;\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"2\"] {\n  content: url(\"chrome://browser/skin/weather/mostly-sunny.svg\");\n  height: 22px;\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"3\"],\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"4\"],\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"6\"] {\n  content: url(\"chrome://browser/skin/weather/partly-sunny.svg\");\n  height: 22px;\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"5\"] {\n  content: url(\"chrome://browser/skin/weather/hazy-sunshine.svg\");\n  height: 22px;\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"7\"],\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"8\"] {\n  content: url(\"chrome://browser/skin/weather/cloudy.svg\");\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"11\"] {\n  content: url(\"chrome://browser/skin/weather/fog.svg\");\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"12\"] {\n  content: url(\"chrome://browser/skin/weather/showers.svg\");\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"13\"],\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"14\"] {\n  content: url(\"chrome://browser/skin/weather/mostly-cloudy-with-showers.svg\");\n  height: 22px;\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"15\"] {\n  content: url(\"chrome://browser/skin/weather/thunderstorms.svg\");\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"16\"],\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"17\"] {\n  content: url(\"chrome://browser/skin/weather/mostly-cloudy-with-thunderstorms.svg\");\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"18\"] {\n  content: url(\"chrome://browser/skin/weather/rain.svg\");\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"19\"],\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"20\"],\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"25\"] {\n  content: url(\"chrome://browser/skin/weather/flurries.svg\");\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"21\"] {\n  content: url(\"chrome://browser/skin/weather/partly-sunny-with-flurries.svg\");\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"22\"],\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"23\"] {\n  content: url(\"chrome://browser/skin/weather/snow.svg\");\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"24\"],\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"31\"] {\n  content: url(\"chrome://browser/skin/weather/ice.svg\");\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"26\"],\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"29\"] {\n  content: url(\"chrome://browser/skin/weather/freezing-rain.svg\");\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"30\"] {\n  content: url(\"chrome://browser/skin/weather/hot.svg\");\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"32\"] {\n  content: url(\"chrome://browser/skin/weather/windy.svg\");\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"33\"] {\n  content: url(\"chrome://browser/skin/weather/night-clear.svg\");\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"34\"],\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"35\"],\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"36\"],\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"38\"] {\n  content: url(\"chrome://browser/skin/weather/night-mostly-clear.svg\");\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"37\"] {\n  content: url(\"chrome://browser/skin/weather/night-hazy-moonlight.svg\");\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"39\"],\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"40\"] {\n  content: url(\"chrome://browser/skin/weather/night-partly-cloudy-with-showers.svg\");\n  height: 22px;\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"41\"],\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"42\"] {\n  content: url(\"chrome://browser/skin/weather/night-partly-cloudy-with-thunderstorms.svg\");\n}\n\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"43\"],\n.urlbarView-dynamic-weather-weatherIcon[iconId=\"44\"] {\n  content: url(\"chrome://browser/skin/weather/night-mostly-cloudy-with-flurries.svg\");\n}\n\n.urlbarView-dynamic-weather-summary {\n  flex-grow: 1;\n  flex-shrink: 1;\n  min-width: 0;\n}\n\n.urlbarView-dynamic-weather-top {\n  display: flex;\n  align-items: center;\n}\n\n.urlbarView-dynamic-weather-topNoWrap {\n  display: inline-flex;\n  align-items: center;\n}\n\n.urlbarView-results[wrap] > .urlbarView-row[dynamicType=weather] > .urlbarView-row-inner .urlbarView-dynamic-weather-top {\n  flex-wrap: wrap;\n}\n\n.urlbarView-results[wrap] > .urlbarView-row[dynamicType=weather] > .urlbarView-row-inner > .urlbarView-dynamic-weather-summary > .urlbarView-dynamic-weather-top > .urlbarView-dynamic-weather-topNoWrap > .urlbarView-dynamic-weather-titleSeparator {\n  display: none;\n}\n\n.urlbarView-dynamic-weather-middle {\n  font-size: 0.85em;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.urlbarView-dynamic-weather-middleNoWrap {\n  display: inline-flex;\n  align-items: center;\n}\n\n/* When middleNoWrap has overflowed, we want to hide the summaryTextSeparator.\n   We also want to keep the overflow state stable without it going back to\n   an underflow state. This is why we are using `visibility: hidden` so the\n   space is allocated for the summaryTextSeparator and highLow but they are\n   not visible on the page. Thus, keeping the middleNoWrap in an overflow\n   state while hiding the summaryTextSeparator.\n */\n.urlbarView-dynamic-weather-middleNoWrap[overflow] > .urlbarView-dynamic-weather-summaryTextSeparator,\n.urlbarView-dynamic-weather-middleNoWrap[overflow] > .urlbarView-dynamic-weather-highLow {\n  visibility: hidden;\n}\n\n/* The highLowWrap remains hidden when middleNoWrap is not overflowed. Once it\n   has overflowed, we display the highLowWrap element.\n*/\n.urlbarView-dynamic-weather-middleNoWrap:not([overflow]) + .urlbarView-dynamic-weather-highLowWrap {\n  display: none;\n}\n\n.urlbarView-dynamic-weather-summaryTextSeparator::before {\n  content: '\\00B7';\n  margin: 0.25em;\n}\n.urlbarView-dynamic-weather-bottom {\n  font-size: 0.85em;\n  margin-top: 0.40em;\n  opacity: 0.6;\n}\n\n.urlbarView-row[dynamicType=weather][selected] > .urlbarView-row-inner > .urlbarView-dynamic-weather-summary > .urlbarView-dynamic-weather-top > .urlbarView-url {\n  color: inherit;\n}\n\n.urlbarView-row[dynamicType=weather][selected] > .urlbarView-row-inner > .urlbarView-dynamic-weather-summary > .urlbarView-dynamic-weather-bottom {\n  opacity: 1;\n}\n\n/* Addons suggestions */\n.urlbarView-dynamic-addons-content {\n  display: grid;\n  grid-template-areas: \"icon header\"\n                       \"icon description\"\n                       \"icon footer\";\n  align-items: center;\n  padding: 5px 4px;\n}\n\n.urlbarView-dynamic-addons-icon {\n  grid-area: icon;\n  width: 60px;\n  height: 60px;\n  margin-inline-end: 8px;\n}\n\n.urlbarView-dynamic-addons-header {\n  grid-area: header;\n}\n\n.urlbarView-dynamic-addons-description {\n  grid-area: description;\n  font-size: 0.85em;\n  color: var(--panel-description-color);\n  margin-block: 2px 9px;\n}\n\n.urlbarView-dynamic-addons-footer {\n  grid-area: footer;\n  display: flex;\n  align-items: center;\n}\n\n.urlbarView-dynamic-addons-ratingContainer {\n  width: calc(16px * 5);\n  height: 16px;\n  margin-inline-end: 9px;\n}\n\n.urlbarView-dynamic-addons-rating {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  fill: currentColor;\n  -moz-context-properties: fill;\n}\n\n.urlbarView-dynamic-addons-rating[fill=\"empty\"] {\n  background-image: url(\"chrome://mozapps/skin/extensions/rating-star.svg#empty\");\n}\n.urlbarView-dynamic-addons-rating[fill=\"half\"] {\n  background-image: url(\"chrome://mozapps/skin/extensions/rating-star.svg#half\");\n}\n.urlbarView-dynamic-addons-rating[fill=\"half\"]:dir(rtl) {\n  transform: scaleX(-1);\n}\n.urlbarView-dynamic-addons-rating[fill=\"full\"] {\n  background-image: url(\"chrome://mozapps/skin/extensions/rating-star.svg#full\");\n}\n\n.urlbarView-dynamic-addons-reviews {\n  font-size: 0.85em;\n  color: var(--panel-description-color);\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=7358.4edddbe1.iframe.bundle.js.map