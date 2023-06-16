"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[9547],{

/***/ 7624:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storybook_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94015);
/* harmony import */ var _storybook_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _storybook_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _storybook_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_storybook_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n:host,\n:root {\n  --content-area-padding-inline: 24px;\n  --content-area-padding-block: 16px;\n  --header-spacing: 40px;\n  --footer-spacing: 80px;\n\n  --success-fill-color: #2AC3A2;\n  --success-background-color: #87FFD1;\n  --success-box-text-color: #15141A;\n\n  --details-grid-column: 1;\n  --recently-closed-tabs-grid-row: 2;\n\n  --info-icon-background-color: #0090ED;\n}\n\n:root {\n  /* align the base font-size on root element with that of <body>\n     so rem-based layout widths and break-points behave predictably */\n  font-size: 15px;\n  /* override --in-content-page-background from common-shared.css */\n  background-color: transparent;\n  --fxview-background-color: var(--newtab-background-color, var(--in-content-page-background));\n  --fxview-element-background-hover: color-mix(in srgb, var(--fxview-background-color) 90%, currentColor);\n  --fxview-element-background-active: color-mix(in srgb, var(--fxview-background-color) 80%, currentColor);\n  --fxview-text-primary-color: var(--newtab-text-primary-color, var(--in-content-page-color));\n  --fxview-text-color-hover: var(--newtab-text-primary-color);\n  --fxview-contrast-border: color-mix(in hsl, currentColor 45%, transparent);\n  --fxview-extra-contrast-border: color-mix(in hsl, currentColor 85%, transparent);\n  --in-content-zap-gradient: linear-gradient(var(--fxview-extra-contrast-border), var(--fxview-extra-contrast-border));\n  --card-border-zap-gradient: var(--in-content-zap-gradient);\n  --fxview-text-secondary-color: color-mix(in srgb, currentColor 70%, transparent);\n  --newtab-background-color-secondary: #FFF;\n\n  /* ensure utility button hover states match those of the rest of the page */\n  --in-content-button-background-hover: var(--fxview-element-background-hover);\n  --in-content-button-background-active: var(--fxview-element-background-active);\n  --in-content-button-text-color-hover: var(--fxview-text-color-hover);\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  padding-block: var(--header-spacing) var(--footer-spacing);\n  padding-inline: var(--content-area-padding-inline);\n  max-width: 96rem;\n  margin-inline: auto;\n  background-color: var(--fxview-background-color);\n  color: var(--newtab-text-primary-color);\n}\n\n:root:not([lwt-newtab]) {\n  --in-content-zap-gradient: linear-gradient(90deg, #9059FF 0%, #FF4AA2 52.08%, #FFBD4F 100%);\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --fxview-element-background-hover: color-mix(in srgb, var(--fxview-background-color) 80%, white);\n    --fxview-element-background-active: color-mix(in srgb, var(--fxview-background-color) 60%, white);\n    --newtab-background-color-secondary: #42414d;\n  }\n}\n\n@media (prefers-contrast) {\n  :root {\n    --fxview-element-background-hover: ButtonText;\n    --fxview-element-background-active: ButtonText;\n    --fxview-text-color-hover: ButtonFace;\n    --fxview-text-secondary-color: currentColor;\n  }\n}\n\nh1 {\n  color: var(--fxview-text-primary-color);\n  font-weight: 600;\n  font-size: 1.5em;\n}\n\n.content-container {\n  padding-inline: var(--content-area-padding-inline);\n  padding-block: var(--content-area-padding-block);\n}\n\n#logo-container {\n  flex: 0 0 auto;\n}\n\nbody > main {\n  flex: 1 1 auto;\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  grid-template-rows: max-content 1fr;\n}\n\nbody > main > details {\n  grid-column: var(--details-grid-column);\n}\n\n@media (max-width: 76rem) {\n  :host,\n  :root {\n    --content-area-padding-inline: 12px;\n  }\n  .brand-logo > .brand-feature-name {\n    display: none;\n  }\n}\n\n@media (max-width: 65rem) {\n  :root {\n    --recently-closed-tabs-grid-row: 3;\n    --details-grid-column: 1 / -1;\n  }\n}\n\n@media (max-width: 45rem) {\n  :host,\n  :root {\n    --header-spacing: 16px;\n    --footer-spacing: 16px;\n  }\n}\n\n@media (max-width: 28rem) {\n  body {\n    flex-wrap: wrap;\n  }\n}\n\n.brand-logo {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 1.75em;\n  white-space: nowrap;\n}\n\n.brand-logo > .brand-icon {\n  display: inline-block;\n  background: url(\"chrome://branding/content/about-logo.png\") no-repeat center;\n  background-size: 32px;\n  min-width: 40px;\n  height: 32px;\n}\n\n.brand-logo > .brand-feature-name {\n  margin-inline-start: 8px;\n  flex: 1 1 auto;\n  font-weight: 600;\n}\n\n[hidden] {\n  display: none !important;\n}\n\nbutton.ghost-button,\nbutton.ghost-button:not(.semi-transparent):enabled:is(:hover, :active) {\n  color: inherit;\n}\n\n@media (prefers-contrast) {\n  button.ghost-button:not(.semi-transparent):enabled:is(:hover, :active) {\n    background-color: ButtonText;\n    color: ButtonFace;\n  }\n}\n\nbutton.primary {\n  white-space: nowrap;\n  min-width: fit-content;\n}\n\nbutton.close {\n  background-image: url(chrome://global/skin/icons/close.svg);\n  -moz-context-properties: fill;\n  fill: currentColor;\n}\n\n.card,\n.synced-tab-a,\n.synced-tab-li-placeholder,\n.empty-container {\n  background-color: var(--newtab-background-color-secondary);\n  border: 1px solid var(--fxview-contrast-border);\n}\n\n#collapsible-tabs-container,\n#tabpickup-tabs-container {\n  margin-block-start: 0.5em;\n}\n\n.empty-container {\n  border-radius: 4px;\n}\n\n.error-state {\n  text-align: center;\n  padding-block: 0 1.3em;\n  padding-inline: 1em;\n  border: 1px solid var(--fxview-contrast-border);\n  border-radius: 4px;\n}\n\n.error-state > h3 {\n  font-weight: 600;\n  display: inline-block;\n  margin-bottom: 0;\n}\n\n.placeholder-content {\n  color: var(--fxview-text-secondary-color);\n  display: flex;\n  padding: 1.8em 1.1em;\n}\n\n#recently-closed-empty-image,\n#tab-pickup-empty-image {\n  margin-inline-end: 1.1em;\n  -moz-context-properties: fill, stroke, fill-opacity;\n  fill: var(--fxview-background-color);\n  stroke: var(--fxview-text-primary-color);\n  fill-opacity: 0.07;\n}\n\n@media (prefers-color-scheme: dark) {\n  #recently-closed-empty-image,\n  #tab-pickup-empty-image {\n    fill: var(--newtab-background-color-secondary);\n    fill-opacity: 0.15;\n  }\n}\n\n.placeholder-text {\n  margin: 0;\n}\n\n.placeholder-header {\n  margin-block: 0 0.27em;\n  font-weight: 600;\n}\n\n.placeholder-body {\n  margin-block: 0;\n  line-height: 1.3em;\n}\n\n.page-section-header {\n  column-gap: 16px;\n  cursor: pointer;\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: 1fr auto;\n  grid-template-areas:\n      \"twisty head\"\n      \"none desc\";\n  list-style-type: none;\n  position: relative;\n  z-index: 1;\n}\n\n@media (prefers-contrast) {\n  .page-section-header {\n    color: WindowText;\n  }\n  .page-section-header:focus-visible {\n    box-shadow: none;\n    outline: var(--in-content-focus-outline);\n    outline-offset: var(--in-content-focus-outline-offset);\n  }\n}\n\n.page-section-header > h1 {\n  grid-area: head;\n  margin: 0;\n  padding-block: 4px;\n}\n\n/* the twisty is just an ornament; the whole summary parent node is clickable */\n.page-section-header > .twisty {\n  background-image: url(\"chrome://global/skin/icons/arrow-right.svg\");\n  display: inline-block;\n  grid-area: twisty;\n  align-self: center;\n  justify-self: start;\n  padding-block: 4px;\n  padding-inline: 8px;\n  fill: currentColor;\n  border-radius: 4px;\n  margin-block: 0;\n}\n\n[dir=\"rtl\"] .page-section-header > .twisty {\n  background-image: url(\"chrome://global/skin/icons/arrow-left.svg\");\n}\n\n@media (prefers-contrast) {\n  .page-section-header > .twisty {\n    border: 1px solid ButtonText;\n  }\n}\n\ndetails[open] > .page-section-header > .twisty {\n  background-image: url(\"chrome://global/skin/icons/arrow-down.svg\");\n}\n\n.page-section-header:hover > .twisty {\n  background-color: var(--fxview-element-background-hover);\n  color: var(--fxview-text-color-hover);\n}\n\n.page-section-header:hover:active > .twisty {\n  background-color: var(--fxview-element-background-active);\n}\n\n.page-section-header > .section-description {\n  grid-area: desc;\n  margin-block: 4px 8px;\n  font-weight: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\n.card-body {\n  display: flex;\n  flex-grow: 1;\n  align-content: space-between;\n  align-items: center;\n  gap: 8px;\n}\n@media only screen and (max-width: 45rem) {\n  .card-body {\n    flex-wrap: wrap;\n  }\n}\n\n.card-body > button.primary {\n  margin-inline-start: 0;\n  z-index: 1;\n}\n\n.card-body > .step-content,\n.zap-card > button.close {\n  z-index: 1;\n}\n\n.setup-step {\n  padding: var(--card-padding);\n  margin-block: 0.5em 1em;\n}\n\n/* Bug 1770534 - Only use the zap-gradient for built-in, color-neutral themes */\n.zap-card {\n  border: none;\n  position: relative;\n}\n.zap-card::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  background-origin: border-box;\n  background-image: var(--card-border-zap-gradient);\n  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n  mask-composite: exclude;\n}\n\n.setup-step > h2 {\n  margin-block: 0 8px;\n}\n\n.setup-step > .card-body {\n  margin-block: 8px;\n  padding-block: 8px;\n}\n.setup-step > .card-body > .step-content {\n  flex: 1 1 auto;\n}\n\n.setup-step > footer {\n  display: flex;\n  flex-direction: column;\n  margin-block: 0 8px;\n}\n\n.step-progress {\n  background-color: #E0E0E6;\n  border-radius: 8px;\n  border-style: none;\n  height: 8px;\n  margin-block: 0 8px;\n  margin-inline: 0 2px;\n}\n\n.step-progress::-moz-progress-bar {\n  background-color: var(--success-fill-color);\n  border-radius: 8px;\n}\n\n@media (prefers-contrast) {\n  .step-progress {\n    background-color: SelectedItemText;\n    border: 1px solid SelectedItem;\n  }\n\n  .step-progress::-moz-progress-bar {\n    background-color: SelectedItem;\n  }\n}\n\n.message-box {\n  display: flex;\n  align-items: center;\n  margin-block: 8px;\n  gap: 8px;\n}\n\n.message-content {\n  flex: 1 1 auto;\n}\n\n.message-content > .message-header {\n  font-size: 1em;\n  margin-block: 0 0.33em;\n}\n\n.message-content > .message-description {\n  margin-block: 0 0.33em;\n}\n\n.confirmation-message-box {\n  background-color: var(--success-background-color);\n  color: var(--success-box-text-color);\n  border-color: var(--success-fill-color);\n}\n.confirmation-message-box > .message-content {\n  text-align: center;\n}\n.confirmation-message-box > .message-content > .message-header {\n  font-size: inherit;\n  display: inline;\n}\n/* ensure we get the local color values as container doesnt change color with theme */\n.confirmation-message-box > .icon-button {\n  color: inherit;\n}\n.confirmation-message-box > button.icon-button:enabled:is(:hover, :active) {\n  background-color: color-mix(in srgb, var(--success-background-color) 90%, currentColor);\n}\n@media (prefers-contrast) {\n  .confirmation-message-box > button.icon-button {\n    border-color: ButtonText;\n  }\n  .confirmation-message-box > button.icon-button:enabled:is(:hover, :active) {\n    background-color: ButtonText;\n    color: ButtonFace;\n  }\n}\n\n#tab-pickup-container {\n  grid-row: 1;\n}\n\n/* 117px is the total height of the collapsible-tabs-container; setting that size\n for the second row stabilizes the layout so it doesn't shift when collapsibled */\n#recently-closed-tabs-container {\n  grid-row: var(--recently-closed-tabs-grid-row);\n  display: grid;\n  grid-template-rows: max-content 117px;\n}\n\n#recently-closed-tabs-container > p {\n  margin-top: 0;\n}\n\n.synced-tabs-container.loading > .card,\n.synced-tabs-container.loading > tab-pickup-list,\n.synced-tabs-container.loading > .placeholder-content,\n.synced-tabs-container:not(.loading) > .loading-content {\n  display: none;\n}\n\n.synced-tabs-container > .loading-content {\n  text-align: center;\n  color: var(--fxview-text-secondary-color);\n  margin-top: 40px;\n  padding: 20px 16px 16px;\n}\n\n.closed-tabs-list {\n  padding-inline-start: 0;\n  margin-block-start: 0;\n  display: grid;\n  grid-template-columns: min-content repeat(5, 1fr) repeat(2, min-content);\n  column-gap: 8px;\n  row-gap: 8px;\n}\n\n.closed-tab-li {\n  display: grid;\n  grid-template-columns: subgrid;\n  grid-column: span 8;\n  margin-block-end: 0.5em;\n  border-radius: 4px;\n  align-items: center;\n}\n\n.closed-tab-li-main {\n  display: grid;\n  grid-template-columns: subgrid;\n  grid-column: span 7;\n  padding: 0.5em;\n  cursor: pointer;\n  align-items: center;\n  user-select: none;\n  border-radius: 4px;\n}\n\n@media (prefers-contrast) {\n  span.closed-tab-li-main,\n  button.closed-tab-li-dismiss {\n    color: ButtonText;\n    border-radius: 4px;\n    border: 1px solid ButtonText;\n  }\n}\n\n  .closed-tab-li-main:hover {\n    background-color: var(--fxview-element-background-hover);\n    color: var(--fxview-text-color-hover);\n  }\n\n.closed-tab-li-main:hover .closed-tab-li-title {\n  text-decoration-line: underline;\n}\n\n.closed-tab-li-main:active {\n  background-color: var(--fxview-element-background-active);\n  color: var(--fxview-text-color-hover);\n}\n\n.closed-tab-li-main:focus-visible {\n  box-shadow: none;\n  outline: var(--in-content-focus-outline);\n  outline-offset: var(--in-content-focus-outline-offset);\n  border-radius: 4px;\n}\n\n.closed-tab-li-title {\n  padding-inline-start: 10px;\n  font-weight: 500;\n  grid-column: span 3;\n  color: currentColor !important;\n}\n\n.closed-tab-li-url {\n  padding-inline-start: 8px;\n  text-decoration-line: underline;\n  grid-column: span 2;\n  color: var(--fxview-text-secondary-color) !important;\n}\n\n.closed-tab-li-time {\n  white-space: nowrap;\n  text-align: end;\n}\n\n.closed-tab-li-dismiss {\n  background-image: url(\"chrome://global/skin/icons/close.svg\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-color: transparent;\n  color: var(--fxview-text-secondary-color);\n  -moz-context-properties: fill;\n  fill: var(--fxview-text-secondary-color);\n  min-width: 33px;\n  padding: 0.5em;\n  margin: 0;\n  cursor: pointer;\n  user-select: none;\n}\n\n.closed-tab-li-dismiss:hover {\n  background-color: var(--in-content-button-background-hover);\n  fill: var(--in-content-button-text-color-hover);\n}\n\n.synced-tab-a,\n.synced-tab-a:hover,\n.synced-tab-a:active,\n.synced-tab-a:hover:active,\n.synced-tab-a:visited {\n  color: inherit;\n  text-decoration: none;\n  height: 100%;\n}\n\n@media (prefers-contrast) {\n  .synced-tab-a {\n    border-color: FieldText;\n  }\n  .synced-tab-a,\n  .synced-tab-a:hover,\n  .synced-tab-a:active,\n  .synced-tab-a:hover:active,\n  .synced-tab-a:visited {\n    color: LinkText;\n  }\n  .synced-tab-a:focus-visible {\n    box-shadow: none;\n    outline: var(--in-content-focus-outline);\n    outline-offset: var(--in-content-focus-outline-offset);\n  }\n}\n\n.closed-tab-li-url,\n.closed-tab-li-time,\n.synced-tab-li-device,\n.synced-tab-li-url,\n.synced-tab-li-time {\n  font-weight: 400;\n  color: var(--fxview-text-secondary-color);\n}\n\n.closed-tab-li-title,\n.closed-tab-li-url,\n.synced-tab-li:not(:first-child) > .synced-tab-a > .synced-tab-li-title,\n.synced-tab-li-device {\n  overflow: hidden;\n}\n\n.closed-tab-li-title,\n.synced-tab-li:not(:first-child) > .synced-tab-a > .synced-tab-li-title,\n.synced-tab-li-device {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.synced-tab-li-url,\n.closed-tab-li-url {\n  word-break: break-word;\n}\n\n.synced-tabs-list {\n  padding: 0;\n  margin-block-start: 0;\n  list-style: none;\n  display: grid;\n  grid-template-columns: 4fr 4fr;\n  column-gap: 16px;\n  row-gap: 8px;\n\n  grid-template-areas:\n      \"first second\"\n      \"first third\";\n}\n\n@media only screen and (max-width: 43rem) {\n  .synced-tabs-list {\n    grid-template-columns: 1fr;\n    grid-template-areas:\n      \"first\"\n      \"second\"\n      \"third\";\n  }\n\n  body {\n    flex-flow: column;\n  }\n\n  #logo-container .brand-logo {\n    justify-content: center;\n  }\n}\n\n.synced-tab-a,\n.synced-tab-li-placeholder {\n  box-sizing: border-box;\n  border-radius: 4px;\n  padding: 7px;\n  display: grid;\n  column-gap: 8px;\n  row-gap: 2px;\n  align-items: center;\n  grid-template-columns: min-content repeat(2, 1fr) minmax(min-content, auto);\n  grid-template-rows: auto 1fr auto;\n  grid-template-areas:\n    \"favicon title title title\"\n    \"favicon domain domain domain\"\n    \"favicon device device time\";\n}\n\n.synced-tab-a:hover {\n  box-shadow: 0px 2px 14px var(--fxview-contrast-border);\n}\n\n.synced-tab-li:not(:first-child) > .synced-tab-a {\n  align-content: center;\n}\n\n@media only screen and (max-width: 60rem) {\n  .synced-tab-li > .synced-tab-a,\n  .synced-tab-li-placeholder {\n    grid-template-areas:\n      \"favicon title title title\"\n      \"favicon domain domain domain\"\n      \"favicon device device device\";\n  }\n  .synced-tab-li:not(:first-child) > .synced-tab-a > .synced-tab-li-time {\n    display: none;\n  }\n}\n\n.synced-tab-li-placeholder {\n  row-gap: 1em;\n  grid-template-areas:\n    \"favicon title title title\"\n    \"favicon domain domain domain\";\n  grid-template-rows: auto auto;\n}\n\n.li-placeholder-favicon {\n  grid-area: favicon;\n  align-self: start;\n  width: 16px;\n  height: 16px;\n}\n\n.li-placeholder-title {\n  grid-area: title;\n  height: .8em;\n  margin-block: .1em; /* simulate line-height */\n  width: 100%;\n}\n\n.li-placeholder-domain {\n  grid-area: domain;\n  height: .6em;\n  margin-block: .1em; /* simulate line-height */\n  width: 100%;\n}\n\n.li-placeholder-favicon,\n.li-placeholder-title,\n.li-placeholder-domain {\n  display: inline-block;\n  background-color: currentColor; opacity: 0.08;\n  border-radius: 4px;\n}\n\n.synced-tab-li:first-child {\n  grid-area: first;\n}\n\n.synced-tab-li:first-child > .synced-tab-a {\n  padding: 15px;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: auto auto 1fr auto;\n  grid-template-areas:\n    \"favicon badge badge badge\"\n    \"title title title title\"\n    \"domain domain domain domain\"\n    \"device device device time\";\n  row-gap: 4px;\n}\n\n.synced-tab-li:nth-child(2) {\n  grid-area: second;\n}\n\n.synced-tab-li:nth-child(3) {\n  grid-area: third;\n}\n\n.synced-tab-li-url,\n.synced-tab-li-device,\n.synced-tab-li:not(:first-child) > .synced-tab-a > .synced-tab-li-title {\n  font-size: .85em;\n}\n\n.synced-tab-li-time {\n  font-size: .75em;\n}\n\n.synced-tab-li-url {\n  text-decoration-line: underline;\n  grid-area: domain;\n  align-self: start;\n}\n\n.synced-tab-li-title {\n  grid-area: title;\n  font-weight: 500;\n}\n\n.synced-tab-li:first-child > .synced-tab-a > .synced-tab-li-title {\n  color: inherit;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  align-self: start;\n}\n\n.synced-tab-li-device {\n  grid-area: device;\n}\n\n.synced-tab-li-time {\n  grid-area: time;\n  justify-self: end;\n  align-self: end;\n  white-space: nowrap;\n}\n\n.synced-tab-li:first-child > .synced-tab-a > .synced-tab-li-time {\n  align-self: center;\n}\n\n.synced-tab-li .favicon {\n  grid-area: favicon;\n  align-self: start;\n}\n\n@media (prefers-contrast) {\n  .synced-tab-li .favicon {\n    color: LinkText;\n  }\n}\n\n.synced-tab-li .icon {\n  vertical-align: bottom;\n  margin-inline-end: 5px;\n}\n\n.icon {\n  background-position: center center;\n  background-repeat: no-repeat;\n  display: inline-block;\n  -moz-context-properties: fill;\n  fill: currentColor;\n}\n\n.history {\n  background-image: url('chrome://browser/skin/history.svg');\n}\n\n.phone {\n  background-image: url('chrome://browser/skin/device-phone.svg');\n}\n\n.desktop {\n  background-image: url('chrome://browser/skin/device-desktop.svg');\n}\n\n.tablet {\n  background-image: url('chrome://browser/skin/device-tablet.svg');\n}\n\n.synced-tabs {\n  background-image: url('chrome://browser/skin/synced-tabs.svg');\n}\n\n.info {\n  background-image: url('chrome://global/skin/icons/info-filled.svg');\n}\n\n.error-state > .info {\n  vertical-align: text-top;\n  margin-inline-end: 7px;\n  margin-top: 1px;\n  color: var(--info-icon-background-color);\n}\n\n.favicon {\n  background-size: cover;\n  -moz-context-properties: fill;\n  fill: currentColor;\n}\n\n.favicon, .icon, .synced-tab-li-favicon {\n  width: 16px;\n  height: 16px;\n}\n\n.sync {\n  background-image: url(chrome://browser/skin/sync.svg);\n  background-size: cover;\n  height: 19px;\n  width: 19px;\n  color: var(--fxview-text-secondary-color);\n}\n\n@keyframes syncRotate {\n  from { transform: rotate(0); }\n  to { transform: rotate(360deg); }\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .sync {\n    animation: syncRotate 0.8s linear infinite;\n  }\n}\n\n.last-active-badge {\n  height: 1.25em;\n  background-color: #E3FFF3;\n  grid-area: badge;\n  border-radius: 2em;\n  justify-self: end;\n  text-align: center;\n  padding: 0.3em 1em;\n  font-size: 0.75em;\n}\n\n.synced-tab-li:not(:first-child) .last-active-badge {\n  display: none;\n}\n\n.dot {\n  height: 8px;\n  width: 8px;\n  background-color: var(--success-fill-color);\n  border-radius: 50%;\n  display: inline-block;\n}\n\n.badge-text {\n  font-weight: 400;\n  letter-spacing: 0.02em;\n  margin-inline-start: 4px;\n  color: #000000;\n}\n\n@media (prefers-contrast) {\n  .last-active-badge {\n    border: 1px solid CanvasText;\n    background-color: Canvas;\n  }\n  .dot {\n    background-color: FieldText;\n  }\n  .badge-text {\n    color: FieldText;\n  }\n}\n", "",{"version":3,"sources":["webpack://./../firefoxview/firefoxview.css"],"names":[],"mappings":"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","sourcesContent":["/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n:host,\n:root {\n  --content-area-padding-inline: 24px;\n  --content-area-padding-block: 16px;\n  --header-spacing: 40px;\n  --footer-spacing: 80px;\n\n  --success-fill-color: #2AC3A2;\n  --success-background-color: #87FFD1;\n  --success-box-text-color: #15141A;\n\n  --details-grid-column: 1;\n  --recently-closed-tabs-grid-row: 2;\n\n  --info-icon-background-color: #0090ED;\n}\n\n:root {\n  /* align the base font-size on root element with that of <body>\n     so rem-based layout widths and break-points behave predictably */\n  font-size: 15px;\n  /* override --in-content-page-background from common-shared.css */\n  background-color: transparent;\n  --fxview-background-color: var(--newtab-background-color, var(--in-content-page-background));\n  --fxview-element-background-hover: color-mix(in srgb, var(--fxview-background-color) 90%, currentColor);\n  --fxview-element-background-active: color-mix(in srgb, var(--fxview-background-color) 80%, currentColor);\n  --fxview-text-primary-color: var(--newtab-text-primary-color, var(--in-content-page-color));\n  --fxview-text-color-hover: var(--newtab-text-primary-color);\n  --fxview-contrast-border: color-mix(in hsl, currentColor 45%, transparent);\n  --fxview-extra-contrast-border: color-mix(in hsl, currentColor 85%, transparent);\n  --in-content-zap-gradient: linear-gradient(var(--fxview-extra-contrast-border), var(--fxview-extra-contrast-border));\n  --card-border-zap-gradient: var(--in-content-zap-gradient);\n  --fxview-text-secondary-color: color-mix(in srgb, currentColor 70%, transparent);\n  --newtab-background-color-secondary: #FFF;\n\n  /* ensure utility button hover states match those of the rest of the page */\n  --in-content-button-background-hover: var(--fxview-element-background-hover);\n  --in-content-button-background-active: var(--fxview-element-background-active);\n  --in-content-button-text-color-hover: var(--fxview-text-color-hover);\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  padding-block: var(--header-spacing) var(--footer-spacing);\n  padding-inline: var(--content-area-padding-inline);\n  max-width: 96rem;\n  margin-inline: auto;\n  background-color: var(--fxview-background-color);\n  color: var(--newtab-text-primary-color);\n}\n\n:root:not([lwt-newtab]) {\n  --in-content-zap-gradient: linear-gradient(90deg, #9059FF 0%, #FF4AA2 52.08%, #FFBD4F 100%);\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --fxview-element-background-hover: color-mix(in srgb, var(--fxview-background-color) 80%, white);\n    --fxview-element-background-active: color-mix(in srgb, var(--fxview-background-color) 60%, white);\n    --newtab-background-color-secondary: #42414d;\n  }\n}\n\n@media (prefers-contrast) {\n  :root {\n    --fxview-element-background-hover: ButtonText;\n    --fxview-element-background-active: ButtonText;\n    --fxview-text-color-hover: ButtonFace;\n    --fxview-text-secondary-color: currentColor;\n  }\n}\n\nh1 {\n  color: var(--fxview-text-primary-color);\n  font-weight: 600;\n  font-size: 1.5em;\n}\n\n.content-container {\n  padding-inline: var(--content-area-padding-inline);\n  padding-block: var(--content-area-padding-block);\n}\n\n#logo-container {\n  flex: 0 0 auto;\n}\n\nbody > main {\n  flex: 1 1 auto;\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  grid-template-rows: max-content 1fr;\n}\n\nbody > main > details {\n  grid-column: var(--details-grid-column);\n}\n\n@media (max-width: 76rem) {\n  :host,\n  :root {\n    --content-area-padding-inline: 12px;\n  }\n  .brand-logo > .brand-feature-name {\n    display: none;\n  }\n}\n\n@media (max-width: 65rem) {\n  :root {\n    --recently-closed-tabs-grid-row: 3;\n    --details-grid-column: 1 / -1;\n  }\n}\n\n@media (max-width: 45rem) {\n  :host,\n  :root {\n    --header-spacing: 16px;\n    --footer-spacing: 16px;\n  }\n}\n\n@media (max-width: 28rem) {\n  body {\n    flex-wrap: wrap;\n  }\n}\n\n.brand-logo {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 1.75em;\n  white-space: nowrap;\n}\n\n.brand-logo > .brand-icon {\n  display: inline-block;\n  background: url(\"chrome://branding/content/about-logo.png\") no-repeat center;\n  background-size: 32px;\n  min-width: 40px;\n  height: 32px;\n}\n\n.brand-logo > .brand-feature-name {\n  margin-inline-start: 8px;\n  flex: 1 1 auto;\n  font-weight: 600;\n}\n\n[hidden] {\n  display: none !important;\n}\n\nbutton.ghost-button,\nbutton.ghost-button:not(.semi-transparent):enabled:is(:hover, :active) {\n  color: inherit;\n}\n\n@media (prefers-contrast) {\n  button.ghost-button:not(.semi-transparent):enabled:is(:hover, :active) {\n    background-color: ButtonText;\n    color: ButtonFace;\n  }\n}\n\nbutton.primary {\n  white-space: nowrap;\n  min-width: fit-content;\n}\n\nbutton.close {\n  background-image: url(chrome://global/skin/icons/close.svg);\n  -moz-context-properties: fill;\n  fill: currentColor;\n}\n\n.card,\n.synced-tab-a,\n.synced-tab-li-placeholder,\n.empty-container {\n  background-color: var(--newtab-background-color-secondary);\n  border: 1px solid var(--fxview-contrast-border);\n}\n\n#collapsible-tabs-container,\n#tabpickup-tabs-container {\n  margin-block-start: 0.5em;\n}\n\n.empty-container {\n  border-radius: 4px;\n}\n\n.error-state {\n  text-align: center;\n  padding-block: 0 1.3em;\n  padding-inline: 1em;\n  border: 1px solid var(--fxview-contrast-border);\n  border-radius: 4px;\n}\n\n.error-state > h3 {\n  font-weight: 600;\n  display: inline-block;\n  margin-bottom: 0;\n}\n\n.placeholder-content {\n  color: var(--fxview-text-secondary-color);\n  display: flex;\n  padding: 1.8em 1.1em;\n}\n\n#recently-closed-empty-image,\n#tab-pickup-empty-image {\n  margin-inline-end: 1.1em;\n  -moz-context-properties: fill, stroke, fill-opacity;\n  fill: var(--fxview-background-color);\n  stroke: var(--fxview-text-primary-color);\n  fill-opacity: 0.07;\n}\n\n@media (prefers-color-scheme: dark) {\n  #recently-closed-empty-image,\n  #tab-pickup-empty-image {\n    fill: var(--newtab-background-color-secondary);\n    fill-opacity: 0.15;\n  }\n}\n\n.placeholder-text {\n  margin: 0;\n}\n\n.placeholder-header {\n  margin-block: 0 0.27em;\n  font-weight: 600;\n}\n\n.placeholder-body {\n  margin-block: 0;\n  line-height: 1.3em;\n}\n\n.page-section-header {\n  column-gap: 16px;\n  cursor: pointer;\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: 1fr auto;\n  grid-template-areas:\n      \"twisty head\"\n      \"none desc\";\n  list-style-type: none;\n  position: relative;\n  z-index: 1;\n}\n\n@media (prefers-contrast) {\n  .page-section-header {\n    color: WindowText;\n  }\n  .page-section-header:focus-visible {\n    box-shadow: none;\n    outline: var(--in-content-focus-outline);\n    outline-offset: var(--in-content-focus-outline-offset);\n  }\n}\n\n.page-section-header > h1 {\n  grid-area: head;\n  margin: 0;\n  padding-block: 4px;\n}\n\n/* the twisty is just an ornament; the whole summary parent node is clickable */\n.page-section-header > .twisty {\n  background-image: url(\"chrome://global/skin/icons/arrow-right.svg\");\n  display: inline-block;\n  grid-area: twisty;\n  align-self: center;\n  justify-self: start;\n  padding-block: 4px;\n  padding-inline: 8px;\n  fill: currentColor;\n  border-radius: 4px;\n  margin-block: 0;\n}\n\n[dir=\"rtl\"] .page-section-header > .twisty {\n  background-image: url(\"chrome://global/skin/icons/arrow-left.svg\");\n}\n\n@media (prefers-contrast) {\n  .page-section-header > .twisty {\n    border: 1px solid ButtonText;\n  }\n}\n\ndetails[open] > .page-section-header > .twisty {\n  background-image: url(\"chrome://global/skin/icons/arrow-down.svg\");\n}\n\n.page-section-header:hover > .twisty {\n  background-color: var(--fxview-element-background-hover);\n  color: var(--fxview-text-color-hover);\n}\n\n.page-section-header:hover:active > .twisty {\n  background-color: var(--fxview-element-background-active);\n}\n\n.page-section-header > .section-description {\n  grid-area: desc;\n  margin-block: 4px 8px;\n  font-weight: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\n.card-body {\n  display: flex;\n  flex-grow: 1;\n  align-content: space-between;\n  align-items: center;\n  gap: 8px;\n}\n@media only screen and (max-width: 45rem) {\n  .card-body {\n    flex-wrap: wrap;\n  }\n}\n\n.card-body > button.primary {\n  margin-inline-start: 0;\n  z-index: 1;\n}\n\n.card-body > .step-content,\n.zap-card > button.close {\n  z-index: 1;\n}\n\n.setup-step {\n  padding: var(--card-padding);\n  margin-block: 0.5em 1em;\n}\n\n/* Bug 1770534 - Only use the zap-gradient for built-in, color-neutral themes */\n.zap-card {\n  border: none;\n  position: relative;\n}\n.zap-card::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  background-origin: border-box;\n  background-image: var(--card-border-zap-gradient);\n  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n  mask-composite: exclude;\n}\n\n.setup-step > h2 {\n  margin-block: 0 8px;\n}\n\n.setup-step > .card-body {\n  margin-block: 8px;\n  padding-block: 8px;\n}\n.setup-step > .card-body > .step-content {\n  flex: 1 1 auto;\n}\n\n.setup-step > footer {\n  display: flex;\n  flex-direction: column;\n  margin-block: 0 8px;\n}\n\n.step-progress {\n  background-color: #E0E0E6;\n  border-radius: 8px;\n  border-style: none;\n  height: 8px;\n  margin-block: 0 8px;\n  margin-inline: 0 2px;\n}\n\n.step-progress::-moz-progress-bar {\n  background-color: var(--success-fill-color);\n  border-radius: 8px;\n}\n\n@media (prefers-contrast) {\n  .step-progress {\n    background-color: SelectedItemText;\n    border: 1px solid SelectedItem;\n  }\n\n  .step-progress::-moz-progress-bar {\n    background-color: SelectedItem;\n  }\n}\n\n.message-box {\n  display: flex;\n  align-items: center;\n  margin-block: 8px;\n  gap: 8px;\n}\n\n.message-content {\n  flex: 1 1 auto;\n}\n\n.message-content > .message-header {\n  font-size: 1em;\n  margin-block: 0 0.33em;\n}\n\n.message-content > .message-description {\n  margin-block: 0 0.33em;\n}\n\n.confirmation-message-box {\n  background-color: var(--success-background-color);\n  color: var(--success-box-text-color);\n  border-color: var(--success-fill-color);\n}\n.confirmation-message-box > .message-content {\n  text-align: center;\n}\n.confirmation-message-box > .message-content > .message-header {\n  font-size: inherit;\n  display: inline;\n}\n/* ensure we get the local color values as container doesnt change color with theme */\n.confirmation-message-box > .icon-button {\n  color: inherit;\n}\n.confirmation-message-box > button.icon-button:enabled:is(:hover, :active) {\n  background-color: color-mix(in srgb, var(--success-background-color) 90%, currentColor);\n}\n@media (prefers-contrast) {\n  .confirmation-message-box > button.icon-button {\n    border-color: ButtonText;\n  }\n  .confirmation-message-box > button.icon-button:enabled:is(:hover, :active) {\n    background-color: ButtonText;\n    color: ButtonFace;\n  }\n}\n\n#tab-pickup-container {\n  grid-row: 1;\n}\n\n/* 117px is the total height of the collapsible-tabs-container; setting that size\n for the second row stabilizes the layout so it doesn't shift when collapsibled */\n#recently-closed-tabs-container {\n  grid-row: var(--recently-closed-tabs-grid-row);\n  display: grid;\n  grid-template-rows: max-content 117px;\n}\n\n#recently-closed-tabs-container > p {\n  margin-top: 0;\n}\n\n.synced-tabs-container.loading > .card,\n.synced-tabs-container.loading > tab-pickup-list,\n.synced-tabs-container.loading > .placeholder-content,\n.synced-tabs-container:not(.loading) > .loading-content {\n  display: none;\n}\n\n.synced-tabs-container > .loading-content {\n  text-align: center;\n  color: var(--fxview-text-secondary-color);\n  margin-top: 40px;\n  padding: 20px 16px 16px;\n}\n\n.closed-tabs-list {\n  padding-inline-start: 0;\n  margin-block-start: 0;\n  display: grid;\n  grid-template-columns: min-content repeat(5, 1fr) repeat(2, min-content);\n  column-gap: 8px;\n  row-gap: 8px;\n}\n\n.closed-tab-li {\n  display: grid;\n  grid-template-columns: subgrid;\n  grid-column: span 8;\n  margin-block-end: 0.5em;\n  border-radius: 4px;\n  align-items: center;\n}\n\n.closed-tab-li-main {\n  display: grid;\n  grid-template-columns: subgrid;\n  grid-column: span 7;\n  padding: 0.5em;\n  cursor: pointer;\n  align-items: center;\n  user-select: none;\n  border-radius: 4px;\n}\n\n@media (prefers-contrast) {\n  span.closed-tab-li-main,\n  button.closed-tab-li-dismiss {\n    color: ButtonText;\n    border-radius: 4px;\n    border: 1px solid ButtonText;\n  }\n}\n\n  .closed-tab-li-main:hover {\n    background-color: var(--fxview-element-background-hover);\n    color: var(--fxview-text-color-hover);\n  }\n\n.closed-tab-li-main:hover .closed-tab-li-title {\n  text-decoration-line: underline;\n}\n\n.closed-tab-li-main:active {\n  background-color: var(--fxview-element-background-active);\n  color: var(--fxview-text-color-hover);\n}\n\n.closed-tab-li-main:focus-visible {\n  box-shadow: none;\n  outline: var(--in-content-focus-outline);\n  outline-offset: var(--in-content-focus-outline-offset);\n  border-radius: 4px;\n}\n\n.closed-tab-li-title {\n  padding-inline-start: 10px;\n  font-weight: 500;\n  grid-column: span 3;\n  color: currentColor !important;\n}\n\n.closed-tab-li-url {\n  padding-inline-start: 8px;\n  text-decoration-line: underline;\n  grid-column: span 2;\n  color: var(--fxview-text-secondary-color) !important;\n}\n\n.closed-tab-li-time {\n  white-space: nowrap;\n  text-align: end;\n}\n\n.closed-tab-li-dismiss {\n  background-image: url(\"chrome://global/skin/icons/close.svg\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-color: transparent;\n  color: var(--fxview-text-secondary-color);\n  -moz-context-properties: fill;\n  fill: var(--fxview-text-secondary-color);\n  min-width: 33px;\n  padding: 0.5em;\n  margin: 0;\n  cursor: pointer;\n  user-select: none;\n}\n\n.closed-tab-li-dismiss:hover {\n  background-color: var(--in-content-button-background-hover);\n  fill: var(--in-content-button-text-color-hover);\n}\n\n.synced-tab-a,\n.synced-tab-a:hover,\n.synced-tab-a:active,\n.synced-tab-a:hover:active,\n.synced-tab-a:visited {\n  color: inherit;\n  text-decoration: none;\n  height: 100%;\n}\n\n@media (prefers-contrast) {\n  .synced-tab-a {\n    border-color: FieldText;\n  }\n  .synced-tab-a,\n  .synced-tab-a:hover,\n  .synced-tab-a:active,\n  .synced-tab-a:hover:active,\n  .synced-tab-a:visited {\n    color: LinkText;\n  }\n  .synced-tab-a:focus-visible {\n    box-shadow: none;\n    outline: var(--in-content-focus-outline);\n    outline-offset: var(--in-content-focus-outline-offset);\n  }\n}\n\n.closed-tab-li-url,\n.closed-tab-li-time,\n.synced-tab-li-device,\n.synced-tab-li-url,\n.synced-tab-li-time {\n  font-weight: 400;\n  color: var(--fxview-text-secondary-color);\n}\n\n.closed-tab-li-title,\n.closed-tab-li-url,\n.synced-tab-li:not(:first-child) > .synced-tab-a > .synced-tab-li-title,\n.synced-tab-li-device {\n  overflow: hidden;\n}\n\n.closed-tab-li-title,\n.synced-tab-li:not(:first-child) > .synced-tab-a > .synced-tab-li-title,\n.synced-tab-li-device {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.synced-tab-li-url,\n.closed-tab-li-url {\n  word-break: break-word;\n}\n\n.synced-tabs-list {\n  padding: 0;\n  margin-block-start: 0;\n  list-style: none;\n  display: grid;\n  grid-template-columns: 4fr 4fr;\n  column-gap: 16px;\n  row-gap: 8px;\n\n  grid-template-areas:\n      \"first second\"\n      \"first third\";\n}\n\n@media only screen and (max-width: 43rem) {\n  .synced-tabs-list {\n    grid-template-columns: 1fr;\n    grid-template-areas:\n      \"first\"\n      \"second\"\n      \"third\";\n  }\n\n  body {\n    flex-flow: column;\n  }\n\n  #logo-container .brand-logo {\n    justify-content: center;\n  }\n}\n\n.synced-tab-a,\n.synced-tab-li-placeholder {\n  box-sizing: border-box;\n  border-radius: 4px;\n  padding: 7px;\n  display: grid;\n  column-gap: 8px;\n  row-gap: 2px;\n  align-items: center;\n  grid-template-columns: min-content repeat(2, 1fr) minmax(min-content, auto);\n  grid-template-rows: auto 1fr auto;\n  grid-template-areas:\n    \"favicon title title title\"\n    \"favicon domain domain domain\"\n    \"favicon device device time\";\n}\n\n.synced-tab-a:hover {\n  box-shadow: 0px 2px 14px var(--fxview-contrast-border);\n}\n\n.synced-tab-li:not(:first-child) > .synced-tab-a {\n  align-content: center;\n}\n\n@media only screen and (max-width: 60rem) {\n  .synced-tab-li > .synced-tab-a,\n  .synced-tab-li-placeholder {\n    grid-template-areas:\n      \"favicon title title title\"\n      \"favicon domain domain domain\"\n      \"favicon device device device\";\n  }\n  .synced-tab-li:not(:first-child) > .synced-tab-a > .synced-tab-li-time {\n    display: none;\n  }\n}\n\n.synced-tab-li-placeholder {\n  row-gap: 1em;\n  grid-template-areas:\n    \"favicon title title title\"\n    \"favicon domain domain domain\";\n  grid-template-rows: auto auto;\n}\n\n.li-placeholder-favicon {\n  grid-area: favicon;\n  align-self: start;\n  width: 16px;\n  height: 16px;\n}\n\n.li-placeholder-title {\n  grid-area: title;\n  height: .8em;\n  margin-block: .1em; /* simulate line-height */\n  width: 100%;\n}\n\n.li-placeholder-domain {\n  grid-area: domain;\n  height: .6em;\n  margin-block: .1em; /* simulate line-height */\n  width: 100%;\n}\n\n.li-placeholder-favicon,\n.li-placeholder-title,\n.li-placeholder-domain {\n  display: inline-block;\n  background-color: currentColor; opacity: 0.08;\n  border-radius: 4px;\n}\n\n.synced-tab-li:first-child {\n  grid-area: first;\n}\n\n.synced-tab-li:first-child > .synced-tab-a {\n  padding: 15px;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: auto auto 1fr auto;\n  grid-template-areas:\n    \"favicon badge badge badge\"\n    \"title title title title\"\n    \"domain domain domain domain\"\n    \"device device device time\";\n  row-gap: 4px;\n}\n\n.synced-tab-li:nth-child(2) {\n  grid-area: second;\n}\n\n.synced-tab-li:nth-child(3) {\n  grid-area: third;\n}\n\n.synced-tab-li-url,\n.synced-tab-li-device,\n.synced-tab-li:not(:first-child) > .synced-tab-a > .synced-tab-li-title {\n  font-size: .85em;\n}\n\n.synced-tab-li-time {\n  font-size: .75em;\n}\n\n.synced-tab-li-url {\n  text-decoration-line: underline;\n  grid-area: domain;\n  align-self: start;\n}\n\n.synced-tab-li-title {\n  grid-area: title;\n  font-weight: 500;\n}\n\n.synced-tab-li:first-child > .synced-tab-a > .synced-tab-li-title {\n  color: inherit;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  align-self: start;\n}\n\n.synced-tab-li-device {\n  grid-area: device;\n}\n\n.synced-tab-li-time {\n  grid-area: time;\n  justify-self: end;\n  align-self: end;\n  white-space: nowrap;\n}\n\n.synced-tab-li:first-child > .synced-tab-a > .synced-tab-li-time {\n  align-self: center;\n}\n\n.synced-tab-li .favicon {\n  grid-area: favicon;\n  align-self: start;\n}\n\n@media (prefers-contrast) {\n  .synced-tab-li .favicon {\n    color: LinkText;\n  }\n}\n\n.synced-tab-li .icon {\n  vertical-align: bottom;\n  margin-inline-end: 5px;\n}\n\n.icon {\n  background-position: center center;\n  background-repeat: no-repeat;\n  display: inline-block;\n  -moz-context-properties: fill;\n  fill: currentColor;\n}\n\n.history {\n  background-image: url('chrome://browser/skin/history.svg');\n}\n\n.phone {\n  background-image: url('chrome://browser/skin/device-phone.svg');\n}\n\n.desktop {\n  background-image: url('chrome://browser/skin/device-desktop.svg');\n}\n\n.tablet {\n  background-image: url('chrome://browser/skin/device-tablet.svg');\n}\n\n.synced-tabs {\n  background-image: url('chrome://browser/skin/synced-tabs.svg');\n}\n\n.info {\n  background-image: url('chrome://global/skin/icons/info-filled.svg');\n}\n\n.error-state > .info {\n  vertical-align: text-top;\n  margin-inline-end: 7px;\n  margin-top: 1px;\n  color: var(--info-icon-background-color);\n}\n\n.favicon {\n  background-size: cover;\n  -moz-context-properties: fill;\n  fill: currentColor;\n}\n\n.favicon, .icon, .synced-tab-li-favicon {\n  width: 16px;\n  height: 16px;\n}\n\n.sync {\n  background-image: url(chrome://browser/skin/sync.svg);\n  background-size: cover;\n  height: 19px;\n  width: 19px;\n  color: var(--fxview-text-secondary-color);\n}\n\n@keyframes syncRotate {\n  from { transform: rotate(0); }\n  to { transform: rotate(360deg); }\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .sync {\n    animation: syncRotate 0.8s linear infinite;\n  }\n}\n\n.last-active-badge {\n  height: 1.25em;\n  background-color: #E3FFF3;\n  grid-area: badge;\n  border-radius: 2em;\n  justify-self: end;\n  text-align: center;\n  padding: 0.3em 1em;\n  font-size: 0.75em;\n}\n\n.synced-tab-li:not(:first-child) .last-active-badge {\n  display: none;\n}\n\n.dot {\n  height: 8px;\n  width: 8px;\n  background-color: var(--success-fill-color);\n  border-radius: 50%;\n  display: inline-block;\n}\n\n.badge-text {\n  font-weight: 400;\n  letter-spacing: 0.02em;\n  margin-inline-start: 4px;\n  color: #000000;\n}\n\n@media (prefers-contrast) {\n  .last-active-badge {\n    border: 1px solid CanvasText;\n    background-color: Canvas;\n  }\n  .dot {\n    background-color: FieldText;\n  }\n  .badge-text {\n    color: FieldText;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ 89547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93379);
/* harmony import */ var _storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_firefoxview_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7624);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_firefoxview_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_firefoxview_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
//# sourceMappingURL=9547.05a6fb25.iframe.bundle.js.map