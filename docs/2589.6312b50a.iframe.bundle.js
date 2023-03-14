"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[2589],{

/***/ 25009:
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
___CSS_LOADER_EXPORT___.push([module.id, "/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n@namespace html url(\"http://www.w3.org/1999/xhtml\");\n\n#identity-box {\n  margin-inline-end: var(--identity-box-margin-inline);\n}\n\n#identity-box,\n#tracking-protection-icon-container {\n  /* Set default fill for icons in the identity block.\n     Individual icons can override this. */\n  fill: currentColor;\n  fill-opacity: var(--urlbar-icon-fill-opacity);\n}\n\n#urlbar.searchButton > #urlbar-input-container > #identity-box[pageproxystate=\"invalid\"],\n#identity-box[pageproxystate=\"invalid\"] > #identity-permission-box,\n#identity-box[pageproxystate=\"invalid\"] > #notification-popup-box,\n#identity-box[pageproxystate=\"invalid\"] #identity-icon-label {\n  display: none;\n}\n\n#urlbar:not(.searchButton) > #urlbar-input-container > #identity-box[pageproxystate=\"invalid\"] {\n  pointer-events: none;\n  -moz-user-focus: ignore;\n}\n\n.identity-box-button:hover:not([open=true]),\n#tracking-protection-icon-container:hover:not([open=true]) {\n  background-color: var(--urlbar-box-hover-bgcolor);\n  color: var(--urlbar-box-hover-text-color);\n}\n\n.identity-box-button:hover:active,\n.identity-box-button[open=true],\n#tracking-protection-icon-container:hover:active,\n#tracking-protection-icon-container[open=true] {\n  background-color: var(--urlbar-box-active-bgcolor);\n  color: var(--urlbar-box-hover-text-color);\n}\n\n.identity-box-button:focus-visible,\n#tracking-protection-icon-container:focus-visible {\n  outline: var(--focus-outline);\n  outline-offset: var(--focus-outline-inset);\n}\n\n.identity-box-button {\n  padding-inline: var(--urlbar-icon-padding);\n  border-radius: var(--urlbar-icon-border-radius);\n}\n\n#identity-icon-label {\n  padding-inline-start: 4px;\n}\n\n#identity-box[pageproxystate=\"valid\"].notSecureText,\n#identity-box[pageproxystate=\"valid\"].chromeUI,\n#identity-box[pageproxystate=\"valid\"].extensionPage,\n#urlbar-label-box {\n  margin-inline-end: 8px;\n}\n\n#identity-box[pageproxystate=\"valid\"].notSecureText > .identity-box-button,\n#identity-box[pageproxystate=\"valid\"].chromeUI > .identity-box-button,\n#identity-box[pageproxystate=\"valid\"].extensionPage > .identity-box-button,\n#urlbar-label-box {\n  background-color: var(--urlbar-box-bgcolor);\n  color: var(--urlbar-box-text-color);\n  padding-inline: 8px;\n  border-radius: var(--urlbar-icon-border-radius);\n}\n\n#urlbar[focused=\"true\"] #identity-box[pageproxystate=\"valid\"].notSecureText > .identity-box-button:not(:hover, [open=true]),\n#urlbar[focused=\"true\"] #identity-box[pageproxystate=\"valid\"].chromeUI > .identity-box-button:not(:hover, [open=true]),\n#urlbar[focused=\"true\"] #identity-box[pageproxystate=\"valid\"].extensionPage > .identity-box-button:not(:hover, [open=true]),\n#urlbar[focused=\"true\"] #urlbar-label-box {\n  background-color: var(--urlbar-box-focus-bgcolor);\n}\n\n#identity-box[pageproxystate=\"valid\"].notSecureText > .identity-box-button:hover:not([open]),\n#identity-box[pageproxystate=\"valid\"].chromeUI > .identity-box-button:hover:not([open]),\n#identity-box[pageproxystate=\"valid\"].extensionPage > .identity-box-button:hover:not([open]) {\n  background-color: var(--urlbar-box-hover-bgcolor);\n  color: var(--urlbar-box-hover-text-color);\n}\n\n#identity-box[pageproxystate=\"valid\"].notSecureText > .identity-box-button:hover:active,\n#identity-box[pageproxystate=\"valid\"].notSecureText > .identity-box-button[open=true],\n#identity-box[pageproxystate=\"valid\"].chromeUI > .identity-box-button:hover:active,\n#identity-box[pageproxystate=\"valid\"].chromeUI > .identity-box-button[open=true],\n#identity-box[pageproxystate=\"valid\"].extensionPage > .identity-box-button:hover:active,\n#identity-box[pageproxystate=\"valid\"].extensionPage > .identity-box-button[open=true] {\n  background-color: var(--urlbar-box-active-bgcolor);\n  color: var(--urlbar-box-hover-text-color);\n}\n\n#urlbar[searchmode]:not([focused=\"true\"]) > #urlbar-input-container > #urlbar-search-mode-indicator,\n#urlbar[searchmode]:not([focused=\"true\"]) > #urlbar-input-container > #urlbar-label-box {\n  pointer-events: none;\n}\n\n#urlbar[searchmode]:not([focused=\"true\"]) > #urlbar-input-container > #urlbar-search-mode-indicator > #urlbar-search-mode-indicator-close {\n  pointer-events: initial;\n}\n\n.urlbar-label {\n  margin: 0;\n}\n\n.sharing-icon,\n#identity-icon,\n#permissions-granted-icon,\n#tracking-protection-icon,\n.notification-anchor-icon,\n#blocked-permissions-container > .blocked-permission-icon {\n  -moz-context-properties: fill, fill-opacity;\n}\n\n.sharing-icon,\n#identity-icon,\n#permissions-granted-icon,\n#tracking-protection-icon,\n#blocked-permissions-container > .blocked-permission-icon {\n  width: 16px;\n  height: 16px;\n}\n\n.sharing-icon,\n#identity-icon,\n#tracking-protection-icon,\n#blocked-permissions-container > .blocked-permission-icon {\n  margin-inline-start: 4px;\n}\n\n#tracking-protection-icon {\n  margin-inline-start: 0;\n}\n\n/* MAIN IDENTITY ICON */\n#identity-icon {\n  margin-inline-start: 0;\n  list-style-image: url(chrome://global/skin/icons/info.svg);\n}\n\n#identity-box[pageproxystate=\"valid\"].chromeUI #identity-icon {\n  list-style-image: url(chrome://branding/content/icon16.png);\n}\n@media (min-resolution: 1.1dppx) {\n  #identity-box[pageproxystate=\"valid\"].chromeUI #identity-icon {\n    list-style-image: url(chrome://branding/content/icon32.png);\n  }\n}\n\n#identity-box[pageproxystate=\"valid\"].localResource #identity-icon {\n  list-style-image: url(chrome://global/skin/icons/page-portrait.svg);\n}\n\n#urlbar:not(.searchButton) > #urlbar-input-container > #identity-box[pageproxystate=\"invalid\"] #identity-icon {\n  list-style-image: url(chrome://global/skin/icons/search-glass.svg);\n}\n\n#urlbar[actiontype=\"extension\"] > #urlbar-input-container > #identity-box #identity-icon {\n  list-style-image: url(chrome://mozapps/skin/extensions/extension.svg);\n}\n\n#identity-box[pageproxystate=\"valid\"].extensionPage #identity-icon {\n  list-style-image: url(chrome://mozapps/skin/extensions/extension.svg);\n}\n\n#identity-box[pageproxystate=\"valid\"].verifiedDomain #identity-icon,\n#identity-box[pageproxystate=\"valid\"].mixedActiveBlocked #identity-icon {\n  list-style-image: url(chrome://global/skin/icons/security.svg);\n}\n\n#identity-box[pageproxystate=\"valid\"].weakCipher #identity-icon,\n#identity-box[pageproxystate=\"valid\"].mixedDisplayContent #identity-icon,\n#identity-box[pageproxystate=\"valid\"].mixedDisplayContentLoadedActiveBlocked #identity-icon,\n#identity-box[pageproxystate=\"valid\"].certUserOverridden #identity-icon,\n#identity-box[pageproxystate=\"valid\"].certErrorPage #identity-icon {\n  list-style-image: url(chrome://global/skin/icons/security-warning.svg);\n  fill: unset;\n}\n\n\n#identity-box[pageproxystate=\"valid\"].notSecure #identity-icon,\n#identity-box[pageproxystate=\"valid\"].mixedActiveContent #identity-icon,\n#identity-box[pageproxystate=\"valid\"].httpsOnlyErrorPage #identity-icon {\n  list-style-image: url(chrome://global/skin/icons/security-broken.svg);\n}\n\n#permissions-granted-icon {\n  list-style-image: url(chrome://browser/skin/permissions.svg);\n}\n\n#identity-permission-box {\n  display: none;\n}\n\n#identity-permission-box[open=true],\n#identity-permission-box[hasPermissions],\n#identity-permission-box[hasSharingIcon] {\n  display: flex;\n}\n\n/* SHARING ICON */\n\n#webrtc-sharing-icon[sharing=\"camera\"] {\n  list-style-image: url(\"chrome://browser/skin/notification-icons/camera.svg\");\n}\n\n#webrtc-sharing-icon[sharing=\"microphone\"] {\n  list-style-image: url(\"chrome://browser/skin/notification-icons/microphone.svg\");\n}\n\n#webrtc-sharing-icon[sharing=\"screen\"] {\n  list-style-image: url(\"chrome://browser/skin/notification-icons/screen.svg\");\n}\n\n#geo-sharing-icon[sharing] {\n  list-style-image: url(\"chrome://browser/skin/notification-icons/geo.svg\");\n}\n\n.sharing-icon:not([sharing]) {\n  display: none;\n}\n\n#webrtc-sharing-icon[sharing]:not([paused]) {\n  -moz-context-properties: fill;\n  fill: rgb(224, 41, 29);\n}\n\n/* TRACKING PROTECTION ICON */\n\n#tracking-protection-icon-container {\n  padding-inline: var(--urlbar-icon-padding);\n  border-radius: var(--urlbar-icon-border-radius);\n  /* This is needed in order to position the blue dot indicator. */\n  position: relative;\n}\n\n#urlbar-input-container[pageproxystate=\"valid\"] > #tracking-protection-icon-container.chromeUI {\n  display: none;\n}\n\n#tracking-protection-icon-box {\n  overflow: hidden;\n  width: 16px;\n  height: 16px;\n}\n\n#tracking-protection-icon-tooltip {\n  max-width: 500px;\n}\n\n#urlbar-input-container[pageproxystate=\"valid\"] > #tracking-protection-icon-container > #tracking-protection-icon-box > #tracking-protection-icon {\n  list-style-image: url(chrome://browser/skin/tracking-protection.svg);\n}\n\n#urlbar-input-container[pageproxystate=\"valid\"] > #tracking-protection-icon-container > #tracking-protection-icon-box[hasException] > #tracking-protection-icon {\n  list-style-image: url(chrome://browser/skin/tracking-protection-disabled.svg);\n}\n\n#urlbar-input-container[pageproxystate=\"valid\"] > #tracking-protection-icon-container > #tracking-protection-icon-box:not([hasException])[active] > #tracking-protection-icon {\n  list-style-image: url(chrome://browser/skin/tracking-protection-active.svg);\n}\n\n:root[lwt-toolbar-field-brighttext] #urlbar-input-container[pageproxystate=\"valid\"] > #tracking-protection-icon-container > #tracking-protection-icon-box:not([hasException])[active] > #tracking-protection-icon {\n  list-style-image: url(chrome://browser/skin/tracking-protection-active-brighttext.svg);\n}\n\n#urlbar-input-container[pageproxystate=\"invalid\"] > #tracking-protection-icon-container {\n  visibility: collapse;\n}\n", "",{"version":3,"sources":["webpack://./../../themes/shared/identity-block/identity-block.css"],"names":[],"mappings":"AAAA;;6DAE6D;;AAE7D,mDAAmD;;AAEnD;EACE,oDAAoD;AACtD;;AAEA;;EAEE;0CACwC;EACxC,kBAAkB;EAClB,6CAA6C;AAC/C;;AAEA;;;;EAIE,aAAa;AACf;;AAEA;EACE,oBAAoB;EACpB,uBAAuB;AACzB;;AAEA;;EAEE,iDAAiD;EACjD,yCAAyC;AAC3C;;AAEA;;;;EAIE,kDAAkD;EAClD,yCAAyC;AAC3C;;AAEA;;EAEE,6BAA6B;EAC7B,0CAA0C;AAC5C;;AAEA;EACE,0CAA0C;EAC1C,+CAA+C;AACjD;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;;;;EAIE,sBAAsB;AACxB;;AAEA;;;;EAIE,2CAA2C;EAC3C,mCAAmC;EACnC,mBAAmB;EACnB,+CAA+C;AACjD;;AAEA;;;;EAIE,iDAAiD;AACnD;;AAEA;;;EAGE,iDAAiD;EACjD,yCAAyC;AAC3C;;AAEA;;;;;;EAME,kDAAkD;EAClD,yCAAyC;AAC3C;;AAEA;;EAEE,oBAAoB;AACtB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,SAAS;AACX;;AAEA;;;;;;EAME,2CAA2C;AAC7C;;AAEA;;;;;EAKE,WAAW;EACX,YAAY;AACd;;AAEA;;;;EAIE,wBAAwB;AAC1B;;AAEA;EACE,sBAAsB;AACxB;;AAEA,uBAAuB;AACvB;EACE,sBAAsB;EACtB,0DAA0D;AAC5D;;AAEA;EACE,2DAA2D;AAC7D;AACA;EACE;IACE,2DAA2D;EAC7D;AACF;;AAEA;EACE,mEAAmE;AACrE;;AAEA;EACE,kEAAkE;AACpE;;AAEA;EACE,qEAAqE;AACvE;;AAEA;EACE,qEAAqE;AACvE;;AAEA;;EAEE,8DAA8D;AAChE;;AAEA;;;;;EAKE,sEAAsE;EACtE,WAAW;AACb;;;AAGA;;;EAGE,qEAAqE;AACvE;;AAEA;EACE,4DAA4D;AAC9D;;AAEA;EACE,aAAa;AACf;;AAEA;;;EAGE,aAAa;AACf;;AAEA,iBAAiB;;AAEjB;EACE,4EAA4E;AAC9E;;AAEA;EACE,gFAAgF;AAClF;;AAEA;EACE,4EAA4E;AAC9E;;AAEA;EACE,yEAAyE;AAC3E;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,6BAA6B;EAC7B,sBAAsB;AACxB;;AAEA,6BAA6B;;AAE7B;EACE,0CAA0C;EAC1C,+CAA+C;EAC/C,gEAAgE;EAChE,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,oEAAoE;AACtE;;AAEA;EACE,6EAA6E;AAC/E;;AAEA;EACE,2EAA2E;AAC7E;;AAEA;EACE,sFAAsF;AACxF;;AAEA;EACE,oBAAoB;AACtB","sourcesContent":["/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n@namespace html url(\"http://www.w3.org/1999/xhtml\");\n\n#identity-box {\n  margin-inline-end: var(--identity-box-margin-inline);\n}\n\n#identity-box,\n#tracking-protection-icon-container {\n  /* Set default fill for icons in the identity block.\n     Individual icons can override this. */\n  fill: currentColor;\n  fill-opacity: var(--urlbar-icon-fill-opacity);\n}\n\n#urlbar.searchButton > #urlbar-input-container > #identity-box[pageproxystate=\"invalid\"],\n#identity-box[pageproxystate=\"invalid\"] > #identity-permission-box,\n#identity-box[pageproxystate=\"invalid\"] > #notification-popup-box,\n#identity-box[pageproxystate=\"invalid\"] #identity-icon-label {\n  display: none;\n}\n\n#urlbar:not(.searchButton) > #urlbar-input-container > #identity-box[pageproxystate=\"invalid\"] {\n  pointer-events: none;\n  -moz-user-focus: ignore;\n}\n\n.identity-box-button:hover:not([open=true]),\n#tracking-protection-icon-container:hover:not([open=true]) {\n  background-color: var(--urlbar-box-hover-bgcolor);\n  color: var(--urlbar-box-hover-text-color);\n}\n\n.identity-box-button:hover:active,\n.identity-box-button[open=true],\n#tracking-protection-icon-container:hover:active,\n#tracking-protection-icon-container[open=true] {\n  background-color: var(--urlbar-box-active-bgcolor);\n  color: var(--urlbar-box-hover-text-color);\n}\n\n.identity-box-button:focus-visible,\n#tracking-protection-icon-container:focus-visible {\n  outline: var(--focus-outline);\n  outline-offset: var(--focus-outline-inset);\n}\n\n.identity-box-button {\n  padding-inline: var(--urlbar-icon-padding);\n  border-radius: var(--urlbar-icon-border-radius);\n}\n\n#identity-icon-label {\n  padding-inline-start: 4px;\n}\n\n#identity-box[pageproxystate=\"valid\"].notSecureText,\n#identity-box[pageproxystate=\"valid\"].chromeUI,\n#identity-box[pageproxystate=\"valid\"].extensionPage,\n#urlbar-label-box {\n  margin-inline-end: 8px;\n}\n\n#identity-box[pageproxystate=\"valid\"].notSecureText > .identity-box-button,\n#identity-box[pageproxystate=\"valid\"].chromeUI > .identity-box-button,\n#identity-box[pageproxystate=\"valid\"].extensionPage > .identity-box-button,\n#urlbar-label-box {\n  background-color: var(--urlbar-box-bgcolor);\n  color: var(--urlbar-box-text-color);\n  padding-inline: 8px;\n  border-radius: var(--urlbar-icon-border-radius);\n}\n\n#urlbar[focused=\"true\"] #identity-box[pageproxystate=\"valid\"].notSecureText > .identity-box-button:not(:hover, [open=true]),\n#urlbar[focused=\"true\"] #identity-box[pageproxystate=\"valid\"].chromeUI > .identity-box-button:not(:hover, [open=true]),\n#urlbar[focused=\"true\"] #identity-box[pageproxystate=\"valid\"].extensionPage > .identity-box-button:not(:hover, [open=true]),\n#urlbar[focused=\"true\"] #urlbar-label-box {\n  background-color: var(--urlbar-box-focus-bgcolor);\n}\n\n#identity-box[pageproxystate=\"valid\"].notSecureText > .identity-box-button:hover:not([open]),\n#identity-box[pageproxystate=\"valid\"].chromeUI > .identity-box-button:hover:not([open]),\n#identity-box[pageproxystate=\"valid\"].extensionPage > .identity-box-button:hover:not([open]) {\n  background-color: var(--urlbar-box-hover-bgcolor);\n  color: var(--urlbar-box-hover-text-color);\n}\n\n#identity-box[pageproxystate=\"valid\"].notSecureText > .identity-box-button:hover:active,\n#identity-box[pageproxystate=\"valid\"].notSecureText > .identity-box-button[open=true],\n#identity-box[pageproxystate=\"valid\"].chromeUI > .identity-box-button:hover:active,\n#identity-box[pageproxystate=\"valid\"].chromeUI > .identity-box-button[open=true],\n#identity-box[pageproxystate=\"valid\"].extensionPage > .identity-box-button:hover:active,\n#identity-box[pageproxystate=\"valid\"].extensionPage > .identity-box-button[open=true] {\n  background-color: var(--urlbar-box-active-bgcolor);\n  color: var(--urlbar-box-hover-text-color);\n}\n\n#urlbar[searchmode]:not([focused=\"true\"]) > #urlbar-input-container > #urlbar-search-mode-indicator,\n#urlbar[searchmode]:not([focused=\"true\"]) > #urlbar-input-container > #urlbar-label-box {\n  pointer-events: none;\n}\n\n#urlbar[searchmode]:not([focused=\"true\"]) > #urlbar-input-container > #urlbar-search-mode-indicator > #urlbar-search-mode-indicator-close {\n  pointer-events: initial;\n}\n\n.urlbar-label {\n  margin: 0;\n}\n\n.sharing-icon,\n#identity-icon,\n#permissions-granted-icon,\n#tracking-protection-icon,\n.notification-anchor-icon,\n#blocked-permissions-container > .blocked-permission-icon {\n  -moz-context-properties: fill, fill-opacity;\n}\n\n.sharing-icon,\n#identity-icon,\n#permissions-granted-icon,\n#tracking-protection-icon,\n#blocked-permissions-container > .blocked-permission-icon {\n  width: 16px;\n  height: 16px;\n}\n\n.sharing-icon,\n#identity-icon,\n#tracking-protection-icon,\n#blocked-permissions-container > .blocked-permission-icon {\n  margin-inline-start: 4px;\n}\n\n#tracking-protection-icon {\n  margin-inline-start: 0;\n}\n\n/* MAIN IDENTITY ICON */\n#identity-icon {\n  margin-inline-start: 0;\n  list-style-image: url(chrome://global/skin/icons/info.svg);\n}\n\n#identity-box[pageproxystate=\"valid\"].chromeUI #identity-icon {\n  list-style-image: url(chrome://branding/content/icon16.png);\n}\n@media (min-resolution: 1.1dppx) {\n  #identity-box[pageproxystate=\"valid\"].chromeUI #identity-icon {\n    list-style-image: url(chrome://branding/content/icon32.png);\n  }\n}\n\n#identity-box[pageproxystate=\"valid\"].localResource #identity-icon {\n  list-style-image: url(chrome://global/skin/icons/page-portrait.svg);\n}\n\n#urlbar:not(.searchButton) > #urlbar-input-container > #identity-box[pageproxystate=\"invalid\"] #identity-icon {\n  list-style-image: url(chrome://global/skin/icons/search-glass.svg);\n}\n\n#urlbar[actiontype=\"extension\"] > #urlbar-input-container > #identity-box #identity-icon {\n  list-style-image: url(chrome://mozapps/skin/extensions/extension.svg);\n}\n\n#identity-box[pageproxystate=\"valid\"].extensionPage #identity-icon {\n  list-style-image: url(chrome://mozapps/skin/extensions/extension.svg);\n}\n\n#identity-box[pageproxystate=\"valid\"].verifiedDomain #identity-icon,\n#identity-box[pageproxystate=\"valid\"].mixedActiveBlocked #identity-icon {\n  list-style-image: url(chrome://global/skin/icons/security.svg);\n}\n\n#identity-box[pageproxystate=\"valid\"].weakCipher #identity-icon,\n#identity-box[pageproxystate=\"valid\"].mixedDisplayContent #identity-icon,\n#identity-box[pageproxystate=\"valid\"].mixedDisplayContentLoadedActiveBlocked #identity-icon,\n#identity-box[pageproxystate=\"valid\"].certUserOverridden #identity-icon,\n#identity-box[pageproxystate=\"valid\"].certErrorPage #identity-icon {\n  list-style-image: url(chrome://global/skin/icons/security-warning.svg);\n  fill: unset;\n}\n\n\n#identity-box[pageproxystate=\"valid\"].notSecure #identity-icon,\n#identity-box[pageproxystate=\"valid\"].mixedActiveContent #identity-icon,\n#identity-box[pageproxystate=\"valid\"].httpsOnlyErrorPage #identity-icon {\n  list-style-image: url(chrome://global/skin/icons/security-broken.svg);\n}\n\n#permissions-granted-icon {\n  list-style-image: url(chrome://browser/skin/permissions.svg);\n}\n\n#identity-permission-box {\n  display: none;\n}\n\n#identity-permission-box[open=true],\n#identity-permission-box[hasPermissions],\n#identity-permission-box[hasSharingIcon] {\n  display: flex;\n}\n\n/* SHARING ICON */\n\n#webrtc-sharing-icon[sharing=\"camera\"] {\n  list-style-image: url(\"chrome://browser/skin/notification-icons/camera.svg\");\n}\n\n#webrtc-sharing-icon[sharing=\"microphone\"] {\n  list-style-image: url(\"chrome://browser/skin/notification-icons/microphone.svg\");\n}\n\n#webrtc-sharing-icon[sharing=\"screen\"] {\n  list-style-image: url(\"chrome://browser/skin/notification-icons/screen.svg\");\n}\n\n#geo-sharing-icon[sharing] {\n  list-style-image: url(\"chrome://browser/skin/notification-icons/geo.svg\");\n}\n\n.sharing-icon:not([sharing]) {\n  display: none;\n}\n\n#webrtc-sharing-icon[sharing]:not([paused]) {\n  -moz-context-properties: fill;\n  fill: rgb(224, 41, 29);\n}\n\n/* TRACKING PROTECTION ICON */\n\n#tracking-protection-icon-container {\n  padding-inline: var(--urlbar-icon-padding);\n  border-radius: var(--urlbar-icon-border-radius);\n  /* This is needed in order to position the blue dot indicator. */\n  position: relative;\n}\n\n#urlbar-input-container[pageproxystate=\"valid\"] > #tracking-protection-icon-container.chromeUI {\n  display: none;\n}\n\n#tracking-protection-icon-box {\n  overflow: hidden;\n  width: 16px;\n  height: 16px;\n}\n\n#tracking-protection-icon-tooltip {\n  max-width: 500px;\n}\n\n#urlbar-input-container[pageproxystate=\"valid\"] > #tracking-protection-icon-container > #tracking-protection-icon-box > #tracking-protection-icon {\n  list-style-image: url(chrome://browser/skin/tracking-protection.svg);\n}\n\n#urlbar-input-container[pageproxystate=\"valid\"] > #tracking-protection-icon-container > #tracking-protection-icon-box[hasException] > #tracking-protection-icon {\n  list-style-image: url(chrome://browser/skin/tracking-protection-disabled.svg);\n}\n\n#urlbar-input-container[pageproxystate=\"valid\"] > #tracking-protection-icon-container > #tracking-protection-icon-box:not([hasException])[active] > #tracking-protection-icon {\n  list-style-image: url(chrome://browser/skin/tracking-protection-active.svg);\n}\n\n:root[lwt-toolbar-field-brighttext] #urlbar-input-container[pageproxystate=\"valid\"] > #tracking-protection-icon-container > #tracking-protection-icon-box:not([hasException])[active] > #tracking-protection-icon {\n  list-style-image: url(chrome://browser/skin/tracking-protection-active-brighttext.svg);\n}\n\n#urlbar-input-container[pageproxystate=\"invalid\"] > #tracking-protection-icon-container {\n  visibility: collapse;\n}\n"],"sourceRoot":""}]);
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

/***/ 12589:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93379);
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_identity_block_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25009);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_identity_block_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_identity_block_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
//# sourceMappingURL=2589.6312b50a.iframe.bundle.js.map