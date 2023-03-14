"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[3283],{

/***/ 95687:
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(chrome://global/skin/in-content/info-pages.css);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n@media not (prefers-contrast) {\nhtml.private {\n  --in-content-page-color: white;\n  --in-content-text-color: white;\n  --in-content-page-background: #25003e;\n  --in-content-link-color-hover: white;\n  --in-content-link-color-active: white;\n  --in-content-banner-background: #f9f9fe;\n  --in-content-banner-text-color: #0c0c0d;\n  --in-content-button-background-hover: rgba(12,12,13,.1);\n  --in-content-button-background-active: rgba(12,12,13,.15);\n}\n}\n\n/**\n * When the showBanner class is applied, the banner is displayed at the top\n * of the page, and we need to adjust the padding, so that the banner is\n * spread across the full page width.\n */\nbody.showBanner {\n  padding: 0 0 40px;\n  min-height: 0;\n}\n\n.showBanner > .showPrivate {\n  padding: 40px 48px 0;\n}\n\na:link {\n  color: inherit;\n  text-decoration: underline;\n}\n\na:link:hover {\n  color: inherit;\n}\n\n.container {\n  max-width: 768px;\n}\n\np {\n  line-height: 1.5em;\n}\n\n.logo-and-wordmark {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 50px;\n}\n\n.logo {\n  /* The new private browsing logo, shown for\n  \"browser.privatebrowsing.enable-new-logo\" == true */\n  background: url(\"chrome://branding/content/about-logo-private.png\") no-repeat center center;\n  background-size: 96px;\n  display: inline-block;\n  height: 96px;\n  width: 96px;\n}\n\n.logo[legacy] {\n  /* The legacy private browsing logo, shown for\n  \"browser.privatebrowsing.enable-new-logo\" == false */\n  background-image: url(\"chrome://branding/content/about-logo.png\");\n}\n\n@media (min-resolution: 2x) {\n  .logo {\n    background-image: url('chrome://branding/content/about-logo-private@2x.png');\n  }\n  .logo[legacy] {\n    background-image: url('chrome://branding/content/about-logo@2x.png');\n  }\n}\n\n.wordmark {\n  display: inline-block;\n  background: url(\"chrome://branding/content/firefox-wordmark.svg\") no-repeat center center;\n  background-size: 172px;\n  margin-inline-start: 15px;\n  -moz-context-properties: fill;\n  fill: currentColor;\n  height: 96px;\n  width: 172px;\n}\n\n.search-inner-wrapper {\n  display: flex;\n  height: 48px;\n  padding: 0 22px;\n  min-width: 70vw;\n}\n\n.promo-image-large {\n  margin-inline-end: 6px;\n  min-width: 160px;\n}\n\n.promo-image-small {\n  display: none;\n}\n\n.promo.top {\n  background: rgba(255, 255, 255, .2);\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  border-bottom: 1px solid rgba(255, 255, 255, .3);\n}\n\n.promo.top .promo-image-large {\n  min-width: 100px;\n  margin-inline: 6px;\n}\n\n.promo.top ~ .container {\n  margin-top: 120px;\n}\n\n@media (min-width: 764px) {\n  .search-inner-wrapper {\n    min-width: 680px;\n  }\n\n  .promo-image-large {\n    margin-inline-end: 36px;\n    min-width: 200px;\n  }\n\n  .promo-image-small {\n    display: block;\n  }\n\n  .promo.top {\n    padding: 10px 22%;\n  }\n\n  .promo.top .promo-image-large {\n    min-width: 120px;\n  }\n\n  .promo.top .vpn-promo {\n    margin: 10px 0;\n  }\n}\n\n@media (max-height: 780px) {\n  /* On screens with not enough height we need to push down the content\n   * to make room for the banner */\n  .promo.top ~ .container {\n    margin-top: 140px;\n  }\n}\n\n.search-handoff-button,\n.search-handoff-button:active,\n.search-handoff-button:enabled:hover:active {\n  background: #fff var(--newtab-search-icon) 12px center no-repeat;\n  background-size: 24px;\n  border: solid 1px rgba(249, 249, 250, 0.2);\n  border-radius: 3px;\n  box-shadow: 0 1px 4px 0 rgba(12, 12, 13, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.15);\n  cursor: text;\n  font-size: 15px;\n  font-weight: normal;\n  margin: 0;\n  padding-block: 0;\n  padding-inline: 46px 48px;\n  position: relative;\n  opacity: 1;\n  width: 100%;\n  -moz-context-properties: fill;\n  fill: rgba(12, 12, 13, 0.4);\n}\n\n.search-handoff-button.focused:not(.disabled) {\n  border: solid 1px #0060df;\n  box-shadow: 0 0 0 1px #0060df, 0 0 0 4px rgba(0, 96, 223, 0.3);\n}\n\n.search-handoff-button.disabled {\n  opacity: 0.5;\n  box-shadow: none;\n}\n\n.search-handoff-button:dir(rtl),\n.search-handoff-button:active:dir(rtl),\n.search-handoff-button:enabled:hover:active:dir(rtl) {\n  background-position-x: right 12px;\n}\n\n.search-inner-wrapper .search-handoff-button:hover,\n.search-inner-wrapper .search-handoff-button:hover:active {\n  background-color: #fff;\n  color: inherit;\n}\n\n.search-handoff-button.focused:not(.disabled) .fake-caret {\n  display: block;\n}\n\n.fake-editable:focus {\n  outline: none;\n  caret-color: transparent;\n}\n\n.fake-editable {\n  border: 0;\n  height: 100%;\n  top: 0;\n  inset-inline-start: 0;\n  opacity: 0;\n  padding: 0;\n  position: absolute;\n  width: 100%;\n}\n\n.fake-textbox {\n  color: rgb(12, 12, 13);\n  opacity: 0.54;\n  text-align: start;\n}\n\n@keyframes caret-animation {\n  to {\n    visibility: hidden;\n  }\n}\n\n.fake-caret {\n  animation: caret-animation 1.3s steps(5, start) infinite;\n  background-color: rgb(12, 12, 13);\n  display: none;\n  inset-inline-start: 47px;\n  height: 17px;\n  position: absolute;\n  top: 16px;\n  width: 1px;\n}\n\n@media (prefers-contrast) {\n  .fake-caret {\n    background-color: ButtonText;\n  }\n}\n\n.search-banner {\n  width: 100%;\n  background-color: var(--in-content-banner-background);\n  color: var(--in-content-banner-text-color);\n}\n\n.banner-body {\n  margin: auto;\n  width: max-content;\n  background-image: url(\"chrome://global/skin/icons/settings.svg\");\n  background-position: left 0 top 50px;\n  background-repeat: no-repeat;\n  background-size: 32px;\n  letter-spacing: -.2px;\n  padding: 50px 0;\n  padding-inline-start: 44px;\n}\n\n.banner-body:dir(rtl) {\n  background-position-x: right;\n}\n\n.banner-body h1 {\n  font-size: 18px;\n  font-weight: bold;\n  color: var(--in-content-banner-text-color);\n  line-height: 1em;\n  margin: 7px 0;\n}\n\n.banner-body p {\n  font-size: 15px;\n  line-height: 1em;\n  margin: 4px 0;\n}\n\n.info {\n  margin-top: 64px;\n  background-color: rgba(0, 0, 0, 0.2);\n  background-image: url(\"chrome://global/skin/icons/indicator-private-browsing.svg\");\n  background-position: left 32px top 20px;\n  background-repeat: no-repeat;\n  background-size: 32px;\n  border: 1px solid transparent;\n  border-radius: 6px;\n  letter-spacing: -0.2px;\n  padding: 20px;\n  padding-inline-start: 76px;\n}\n\n.info:dir(rtl) {\n  background-position-x: right 32px;\n}\n\n.info h1,\n.promo h1 {\n  font-size: 18px;\n  font-weight: bold;\n  line-height: 28px;\n}\n\n.info p {\n  margin-top: 0;\n  font-size: 15px;\n  line-height: 25px;\n}\n\n.info #info-title + p {\n  margin-top: 15px;\n}\n\n.search-banner-close-button {\n  float: inline-end;\n  /* min-width and min-height override values set on button elements. */\n  min-width: 28px;\n  min-height: 28px;\n  /* Forcing height and line-height ensure the button hover is displayed correctly\n     as a square box (and focus box). No text gets displayed here so that's ok. */\n  height: 28px;\n  line-height: 0;\n  margin: 16px;\n  padding: 0;\n  background-color: inherit;\n  border: 0;\n}\n\n.search-banner-close-image {\n  -moz-context-properties: fill;\n  fill: currentColor;\n  width: 22px;\n}\n\n.promo {\n  text-align: center;\n  align-items: center;\n}\n\n.promo-visible {\n  display: flex;\n  border: 1px solid transparent;\n  border-radius: 6px;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n.promo-dismiss {\n  padding: 10px;\n  min-width: 16px;\n  min-height: 16px;\n  display: inline flow-root;\n  background: url(\"chrome://global/skin/icons/close.svg\") center no-repeat;\n  cursor: pointer;\n  -moz-context-properties: fill;\n  fill: currentColor;\n  position: relative;\n  top: -90px;\n}\n\n@media not (prefers-contrast) {\n  .promo-dismiss {\n    opacity: 0.6;\n  }\n\n  .promo-dismiss:hover {\n    background-color: color-mix(in srgb, currentColor 10%, transparent) !important;\n  }\n\n  .promo-dismiss:hover:active {\n    background-color: color-mix(in srgb, currentColor 20%, transparent) !important;\n  }\n}\n\n.promo-content {\n  width: 100%;\n}\n\n.promo-image-large img {\n  width: 100%;\n}\n\n.promo-cta {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n/* The colors for .promo-cta .primary must be kept in sync with the dark mode\n   primary button colors from common-shared.cs */\n.promo-cta .primary {\n  padding-block: 11px;\n  margin: 8px 0;\n  font-weight: 600;\n  cursor: pointer;\n  background-color: rgb(0,221,255);\n  color: rgb(43,42,51);\n}\n\n.promo-cta .primary:focus-visible {\n  outline-color: rgb(0,221,255);\n}\n\n.promo-cta .primary:hover {\n  background-color: rgb(128,235,255) !important;\n  color: rgb(43,42,51) !important;\n}\n\n.promo-cta .primary:hover:active {\n  background-color: rgb(170,242,255) !important;\n  color: rgb(43,42,51) !important;\n}\n\n@media (prefers-contrast) {\n  .promo-cta .primary {\n    background-color: ButtonText;\n    color: ButtonFace;\n    border-color: ButtonFace;\n  }\n\n  .promo-cta .primary:focus-visible {\n    outline-color: -moz-DialogText;\n  }\n\n  .promo-cta .primary:hover {\n    background-color: SelectedItem !important;\n    color: SelectedItemText !important;\n    border-color: SelectedItemText;\n  }\n\n  .promo-cta .primary:hover:active {\n    background-color: SelectedItemText !important;\n    color: SelectedItem !important;\n    border-color: SelectedItem;\n  }\n}\n\n.promo.bottom .promo-cta {\n  display: unset;\n}\n\n.promo.bottom h1 {\n  margin-bottom: 1em;\n}\n\n.promo a {\n  color: inherit;\n  text-decoration: underline;\n  flex: 1;\n}\n\n.promo.top a,\n.promo.below-search a {\n  flex: unset;\n}\n\n.promo.top,\n.promo.below-search {\n  text-align: start;\n}\n\n.promo.below-search {\n  padding: 25px 22px 10px;\n  margin-top: 25px;\n}\n\n.promo.bottom {\n  margin-top: 30px;\n}\n\n.promo.bottom .promo-image-small {\n  margin-top: 40px;\n}\n\n.promo.bottom .promo-image-small img {\n  height: 40px;\n}\n\n.promo.top > .promo-content {\n  padding: 10px 6px;\n}\n\n.promo-link {\n  margin: 0;\n  cursor: pointer;\n  color: var(--in-content-link-color-active);\n  text-decoration: underline;\n}\n", "",{"version":3,"sources":["webpack://./../../themes/shared/privatebrowsing/aboutPrivateBrowsing.css"],"names":[],"mappings":"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","sourcesContent":["/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n@import url(\"chrome://global/skin/in-content/info-pages.css\");\n\n@media not (prefers-contrast) {\nhtml.private {\n  --in-content-page-color: white;\n  --in-content-text-color: white;\n  --in-content-page-background: #25003e;\n  --in-content-link-color-hover: white;\n  --in-content-link-color-active: white;\n  --in-content-banner-background: #f9f9fe;\n  --in-content-banner-text-color: #0c0c0d;\n  --in-content-button-background-hover: rgba(12,12,13,.1);\n  --in-content-button-background-active: rgba(12,12,13,.15);\n}\n}\n\n/**\n * When the showBanner class is applied, the banner is displayed at the top\n * of the page, and we need to adjust the padding, so that the banner is\n * spread across the full page width.\n */\nbody.showBanner {\n  padding: 0 0 40px;\n  min-height: 0;\n}\n\n.showBanner > .showPrivate {\n  padding: 40px 48px 0;\n}\n\na:link {\n  color: inherit;\n  text-decoration: underline;\n}\n\na:link:hover {\n  color: inherit;\n}\n\n.container {\n  max-width: 768px;\n}\n\np {\n  line-height: 1.5em;\n}\n\n.logo-and-wordmark {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 50px;\n}\n\n.logo {\n  /* The new private browsing logo, shown for\n  \"browser.privatebrowsing.enable-new-logo\" == true */\n  background: url(\"chrome://branding/content/about-logo-private.png\") no-repeat center center;\n  background-size: 96px;\n  display: inline-block;\n  height: 96px;\n  width: 96px;\n}\n\n.logo[legacy] {\n  /* The legacy private browsing logo, shown for\n  \"browser.privatebrowsing.enable-new-logo\" == false */\n  background-image: url(\"chrome://branding/content/about-logo.png\");\n}\n\n@media (min-resolution: 2x) {\n  .logo {\n    background-image: url('chrome://branding/content/about-logo-private@2x.png');\n  }\n  .logo[legacy] {\n    background-image: url('chrome://branding/content/about-logo@2x.png');\n  }\n}\n\n.wordmark {\n  display: inline-block;\n  background: url(\"chrome://branding/content/firefox-wordmark.svg\") no-repeat center center;\n  background-size: 172px;\n  margin-inline-start: 15px;\n  -moz-context-properties: fill;\n  fill: currentColor;\n  height: 96px;\n  width: 172px;\n}\n\n.search-inner-wrapper {\n  display: flex;\n  height: 48px;\n  padding: 0 22px;\n  min-width: 70vw;\n}\n\n.promo-image-large {\n  margin-inline-end: 6px;\n  min-width: 160px;\n}\n\n.promo-image-small {\n  display: none;\n}\n\n.promo.top {\n  background: rgba(255, 255, 255, .2);\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  border-bottom: 1px solid rgba(255, 255, 255, .3);\n}\n\n.promo.top .promo-image-large {\n  min-width: 100px;\n  margin-inline: 6px;\n}\n\n.promo.top ~ .container {\n  margin-top: 120px;\n}\n\n@media (min-width: 764px) {\n  .search-inner-wrapper {\n    min-width: 680px;\n  }\n\n  .promo-image-large {\n    margin-inline-end: 36px;\n    min-width: 200px;\n  }\n\n  .promo-image-small {\n    display: block;\n  }\n\n  .promo.top {\n    padding: 10px 22%;\n  }\n\n  .promo.top .promo-image-large {\n    min-width: 120px;\n  }\n\n  .promo.top .vpn-promo {\n    margin: 10px 0;\n  }\n}\n\n@media (max-height: 780px) {\n  /* On screens with not enough height we need to push down the content\n   * to make room for the banner */\n  .promo.top ~ .container {\n    margin-top: 140px;\n  }\n}\n\n.search-handoff-button,\n.search-handoff-button:active,\n.search-handoff-button:enabled:hover:active {\n  background: #fff var(--newtab-search-icon) 12px center no-repeat;\n  background-size: 24px;\n  border: solid 1px rgba(249, 249, 250, 0.2);\n  border-radius: 3px;\n  box-shadow: 0 1px 4px 0 rgba(12, 12, 13, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.15);\n  cursor: text;\n  font-size: 15px;\n  font-weight: normal;\n  margin: 0;\n  padding-block: 0;\n  padding-inline: 46px 48px;\n  position: relative;\n  opacity: 1;\n  width: 100%;\n  -moz-context-properties: fill;\n  fill: rgba(12, 12, 13, 0.4);\n}\n\n.search-handoff-button.focused:not(.disabled) {\n  border: solid 1px #0060df;\n  box-shadow: 0 0 0 1px #0060df, 0 0 0 4px rgba(0, 96, 223, 0.3);\n}\n\n.search-handoff-button.disabled {\n  opacity: 0.5;\n  box-shadow: none;\n}\n\n.search-handoff-button:dir(rtl),\n.search-handoff-button:active:dir(rtl),\n.search-handoff-button:enabled:hover:active:dir(rtl) {\n  background-position-x: right 12px;\n}\n\n.search-inner-wrapper .search-handoff-button:hover,\n.search-inner-wrapper .search-handoff-button:hover:active {\n  background-color: #fff;\n  color: inherit;\n}\n\n.search-handoff-button.focused:not(.disabled) .fake-caret {\n  display: block;\n}\n\n.fake-editable:focus {\n  outline: none;\n  caret-color: transparent;\n}\n\n.fake-editable {\n  border: 0;\n  height: 100%;\n  top: 0;\n  inset-inline-start: 0;\n  opacity: 0;\n  padding: 0;\n  position: absolute;\n  width: 100%;\n}\n\n.fake-textbox {\n  color: rgb(12, 12, 13);\n  opacity: 0.54;\n  text-align: start;\n}\n\n@keyframes caret-animation {\n  to {\n    visibility: hidden;\n  }\n}\n\n.fake-caret {\n  animation: caret-animation 1.3s steps(5, start) infinite;\n  background-color: rgb(12, 12, 13);\n  display: none;\n  inset-inline-start: 47px;\n  height: 17px;\n  position: absolute;\n  top: 16px;\n  width: 1px;\n}\n\n@media (prefers-contrast) {\n  .fake-caret {\n    background-color: ButtonText;\n  }\n}\n\n.search-banner {\n  width: 100%;\n  background-color: var(--in-content-banner-background);\n  color: var(--in-content-banner-text-color);\n}\n\n.banner-body {\n  margin: auto;\n  width: max-content;\n  background-image: url(\"chrome://global/skin/icons/settings.svg\");\n  background-position: left 0 top 50px;\n  background-repeat: no-repeat;\n  background-size: 32px;\n  letter-spacing: -.2px;\n  padding: 50px 0;\n  padding-inline-start: 44px;\n}\n\n.banner-body:dir(rtl) {\n  background-position-x: right;\n}\n\n.banner-body h1 {\n  font-size: 18px;\n  font-weight: bold;\n  color: var(--in-content-banner-text-color);\n  line-height: 1em;\n  margin: 7px 0;\n}\n\n.banner-body p {\n  font-size: 15px;\n  line-height: 1em;\n  margin: 4px 0;\n}\n\n.info {\n  margin-top: 64px;\n  background-color: rgba(0, 0, 0, 0.2);\n  background-image: url(\"chrome://global/skin/icons/indicator-private-browsing.svg\");\n  background-position: left 32px top 20px;\n  background-repeat: no-repeat;\n  background-size: 32px;\n  border: 1px solid transparent;\n  border-radius: 6px;\n  letter-spacing: -0.2px;\n  padding: 20px;\n  padding-inline-start: 76px;\n}\n\n.info:dir(rtl) {\n  background-position-x: right 32px;\n}\n\n.info h1,\n.promo h1 {\n  font-size: 18px;\n  font-weight: bold;\n  line-height: 28px;\n}\n\n.info p {\n  margin-top: 0;\n  font-size: 15px;\n  line-height: 25px;\n}\n\n.info #info-title + p {\n  margin-top: 15px;\n}\n\n.search-banner-close-button {\n  float: inline-end;\n  /* min-width and min-height override values set on button elements. */\n  min-width: 28px;\n  min-height: 28px;\n  /* Forcing height and line-height ensure the button hover is displayed correctly\n     as a square box (and focus box). No text gets displayed here so that's ok. */\n  height: 28px;\n  line-height: 0;\n  margin: 16px;\n  padding: 0;\n  background-color: inherit;\n  border: 0;\n}\n\n.search-banner-close-image {\n  -moz-context-properties: fill;\n  fill: currentColor;\n  width: 22px;\n}\n\n.promo {\n  text-align: center;\n  align-items: center;\n}\n\n.promo-visible {\n  display: flex;\n  border: 1px solid transparent;\n  border-radius: 6px;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n.promo-dismiss {\n  padding: 10px;\n  min-width: 16px;\n  min-height: 16px;\n  display: inline flow-root;\n  background: url(\"chrome://global/skin/icons/close.svg\") center no-repeat;\n  cursor: pointer;\n  -moz-context-properties: fill;\n  fill: currentColor;\n  position: relative;\n  top: -90px;\n}\n\n@media not (prefers-contrast) {\n  .promo-dismiss {\n    opacity: 0.6;\n  }\n\n  .promo-dismiss:hover {\n    background-color: color-mix(in srgb, currentColor 10%, transparent) !important;\n  }\n\n  .promo-dismiss:hover:active {\n    background-color: color-mix(in srgb, currentColor 20%, transparent) !important;\n  }\n}\n\n.promo-content {\n  width: 100%;\n}\n\n.promo-image-large img {\n  width: 100%;\n}\n\n.promo-cta {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n/* The colors for .promo-cta .primary must be kept in sync with the dark mode\n   primary button colors from common-shared.cs */\n.promo-cta .primary {\n  padding-block: 11px;\n  margin: 8px 0;\n  font-weight: 600;\n  cursor: pointer;\n  background-color: rgb(0,221,255);\n  color: rgb(43,42,51);\n}\n\n.promo-cta .primary:focus-visible {\n  outline-color: rgb(0,221,255);\n}\n\n.promo-cta .primary:hover {\n  background-color: rgb(128,235,255) !important;\n  color: rgb(43,42,51) !important;\n}\n\n.promo-cta .primary:hover:active {\n  background-color: rgb(170,242,255) !important;\n  color: rgb(43,42,51) !important;\n}\n\n@media (prefers-contrast) {\n  .promo-cta .primary {\n    background-color: ButtonText;\n    color: ButtonFace;\n    border-color: ButtonFace;\n  }\n\n  .promo-cta .primary:focus-visible {\n    outline-color: -moz-DialogText;\n  }\n\n  .promo-cta .primary:hover {\n    background-color: SelectedItem !important;\n    color: SelectedItemText !important;\n    border-color: SelectedItemText;\n  }\n\n  .promo-cta .primary:hover:active {\n    background-color: SelectedItemText !important;\n    color: SelectedItem !important;\n    border-color: SelectedItem;\n  }\n}\n\n.promo.bottom .promo-cta {\n  display: unset;\n}\n\n.promo.bottom h1 {\n  margin-bottom: 1em;\n}\n\n.promo a {\n  color: inherit;\n  text-decoration: underline;\n  flex: 1;\n}\n\n.promo.top a,\n.promo.below-search a {\n  flex: unset;\n}\n\n.promo.top,\n.promo.below-search {\n  text-align: start;\n}\n\n.promo.below-search {\n  padding: 25px 22px 10px;\n  margin-top: 25px;\n}\n\n.promo.bottom {\n  margin-top: 30px;\n}\n\n.promo.bottom .promo-image-small {\n  margin-top: 40px;\n}\n\n.promo.bottom .promo-image-small img {\n  height: 40px;\n}\n\n.promo.top > .promo-content {\n  padding: 10px 6px;\n}\n\n.promo-link {\n  margin: 0;\n  cursor: pointer;\n  color: var(--in-content-link-color-active);\n  text-decoration: underline;\n}\n"],"sourceRoot":""}]);
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

/***/ 63283:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93379);
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_aboutPrivateBrowsing_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95687);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_aboutPrivateBrowsing_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_aboutPrivateBrowsing_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
//# sourceMappingURL=3283.5e9310c7.iframe.bundle.js.map