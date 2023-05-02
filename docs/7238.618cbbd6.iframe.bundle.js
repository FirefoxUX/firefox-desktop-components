"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[7238],{

/***/ 32792:
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
___CSS_LOADER_EXPORT___.push([module.id, "/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n@namespace html url(\"http://www.w3.org/1999/xhtml\");\n\n#notification-popup-box {\n  height: calc(var(--urlbar-min-height) - 2px /* border */ - 2 * var(--urlbar-container-padding));\n  -moz-context-properties: fill, fill-opacity;\n  fill: currentColor;\n  fill-opacity: var(--urlbar-icon-fill-opacity);\n  color: inherit;\n  border-radius: var(--urlbar-icon-border-radius);\n}\n#notification-popup-box:hover {\n  background-color: hsla(0,0%,70%,.2);\n}\n#notification-popup-box:hover:active,\n#notification-popup-box[open] {\n  background-color: hsla(0,0%,70%,.3);\n}\n\n.popup-notification-icon,\n.permission-popup-permission-icon {\n  -moz-context-properties: fill, fill-opacity;\n  fill: currentColor;\n}\n\n.notification-anchor-icon:focus-visible {\n  outline: var(--focus-outline);\n  outline-offset: var(--focus-outline-inset);\n  border-radius: var(--urlbar-icon-border-radius);\n}\n\n.blocked-permission-icon:focus-visible {\n  outline: var(--focus-outline);\n  outline-offset: calc(var(--urlbar-icon-padding) + var(--focus-outline-inset));\n  border-radius: 1px;\n}\n\n/* This class can be used alone or in combination with the class defining the\n   type of icon displayed. This rule must be defined before the others in order\n   for its list-style-image to be overridden. */\n.notification-anchor-icon {\n  list-style-image: url(chrome://global/skin/icons/info-filled.svg);\n  padding: var(--urlbar-icon-padding);\n}\n\n/* INDIVIDUAL NOTIFICATIONS */\n\n.focus-tab-by-prompt-icon {\n  list-style-image: url(chrome://global/skin/icons/info.svg);\n}\n\n.storage-access-icon {\n  list-style-image: url(chrome://browser/skin/controlcenter/3rdpartycookies.svg);\n}\n\n.persistent-storage-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/persistent-storage.svg);\n}\n\n.persistent-storage-icon.blocked-permission-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/persistent-storage-blocked.svg);\n}\n\n.desktop-notification-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/desktop-notification.svg);\n}\n\n.desktop-notification-icon.blocked-permission-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/desktop-notification-blocked.svg);\n}\n\n.geo-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/geo.svg);\n}\n\n.geo-icon.blocked-permission-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/geo-blocked.svg);\n}\n\n.open-protocol-handler-icon {\n  list-style-image: url(chrome://global/skin/icons/open-in-new.svg);\n}\n\n.open-protocol-handler-icon:-moz-locale-dir(rtl) {\n  transform: scaleX(-1);\n}\n\n.xr-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/xr.svg);\n}\n\n.xr-icon.blocked-permission-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/xr-blocked.svg);\n}\n\n.autoplay-media-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/autoplay-media.svg);\n}\n\n.autoplay-media-icon.blocked-permission-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/autoplay-media-blocked.svg);\n}\n\n.storage-access-notification-content {\n  color: var(--panel-disabled-color);\n  font-style: italic;\n  margin-top: 15px;\n}\n\n.storage-access-notification-content .text-link {\n  color: -moz-nativehyperlinktext;\n}\n\n.storage-access-notification-content .text-link:hover {\n  text-decoration: underline;\n}\n\n#storage-access-notification .popup-notification-body-container {\n  padding: 20px;\n}\n\n.indexedDB-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/persistent-storage.svg);\n}\n\n#password-notification-icon {\n  list-style-image: url(chrome://browser/skin/login.svg);\n}\n\n#password-notification-icon[extraAttr=\"attention\"] {\n  fill: var(--toolbarbutton-icon-fill-attention);\n  fill-opacity: 1;\n}\n\n.camera-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/camera.svg);\n}\n\n.camera-icon.in-use {\n  list-style-image: url(chrome://browser/skin/notification-icons/camera.svg);\n}\n\n.camera-icon.blocked-permission-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/camera-blocked.svg);\n}\n\n.microphone-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/microphone.svg);\n}\n\n.microphone-icon.in-use {\n  list-style-image: url(chrome://browser/skin/notification-icons/microphone.svg);\n}\n\n.microphone-icon.blocked-permission-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/microphone-blocked.svg);\n}\n\n.popup-notification-icon.microphone-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/microphone.svg);\n}\n\n.screen-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/screen.svg);\n}\n\n.screen-icon.in-use {\n  list-style-image: url(chrome://browser/skin/notification-icons/screen.svg);\n}\n\n.screen-icon.blocked-permission-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/screen-blocked.svg);\n}\n\n.speaker-icon {\n  list-style-image: url(chrome://global/skin/media/audio.svg);\n}\n\n.midi-icon,\n.midi-sysex-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/midi.svg);\n}\n\n#canvas-notification-icon,\n.canvas-icon {\n  list-style-image: url(chrome://browser/skin/canvas.svg);\n}\n\n.canvas-icon.blocked-permission-icon {\n  list-style-image: url(chrome://browser/skin/canvas-blocked.svg);\n}\n\n#webauthn-notification-icon,\n.popup-notification-icon[popupid^=\"webauthn-prompt-\"] {\n  list-style-image: url(chrome://browser/skin/fingerprint.svg);\n}\n\n#identity-credential-notification-icon {\n  list-style-image: url(chrome://browser/skin/login.svg);\n}\n\n#permission-popup-menulist {\n  margin-inline-end: 0;\n}\n\n#webRTC-preview:not([hidden]) {\n  flex-direction: column;\n}\n\n#webRTC-previewVideo {\n  border-radius: 4px;\n  border: 1px solid var(--panel-separator-color);\n  min-width: 0;\n  min-height: 10em;\n  max-height: 250px;\n}\n\n#webRTC-all-windows-shared,\n#webRTC-previewWarning {\n  font-size: 0.8em;\n}\n\n@media not (prefers-contrast) {\n  #webRTC-all-windows-shared,\n  #webRTC-previewWarning {\n    opacity: 0.6;\n  }\n}\n\n#webRTC-previewWarning {\n  margin-block-start: 14px;\n}\n\n/**\n * All learn-more links tend to have an !important margin-top, but\n * the small one below the WebRTC preview warning is special and\n * doesn't have one by design.\n */\n#webRTC-previewWarning-learnMore {\n  margin-top: 0 !important;\n  font-size: 0.75em;\n}\n\n#webRTC-previewWarningBox:-moz-locale-dir(rtl) {\n  background-position: calc(100% - .75em) .75em;\n}\n\n#webRTC-previewWarning > .text-link {\n  margin-inline-start: 0;\n}\n\n/* This icon has a block sign in it, so we don't need a blocked version. */\n.popup-icon {\n  list-style-image: url(\"chrome://browser/skin/notification-icons/popup.svg\");\n}\n\n/**\n * Bug 1708716: The blocked popup icon is just slightly vertically offset from\n * the other icons that can appear alongside it in the URL bar due to how it's\n * placed in the SVG file. We nudge it a little here to make it line up in a\n * more aesthetically pleasing way.\n */\n#blocked-permissions-container > .popup-icon {\n  transform: translateY(1px);\n}\n\n#permission-popup-menulist,\n#permission-popup-menulist > menupopup {\n  min-width: 6.5em;\n}\n\n/* EME */\n\n.drm-icon {\n  list-style-image: url(\"chrome://browser/skin/drm-icon.svg\");\n}\n\n.notification-anchor-icon[animate=true],\n#eme-notification-icon[firstplay=true] {\n  animation: emeTeachingMoment 0.2s linear 0s 5 normal;\n}\n\n@keyframes emeTeachingMoment {\n  0% {transform: translateX(0); }\n  25% {transform: translateX(3px) }\n  75% {transform: translateX(-3px) }\n  100% { transform: translateX(0); }\n}\n\n/* INSTALL ADDONS */\n\n.install-icon {\n  list-style-image: url(chrome://mozapps/skin/extensions/extension.svg);\n}\n\n.install-icon.blocked-permission-icon {\n  list-style-image: url(chrome://browser/skin/addons/addon-install-blocked.svg);\n}\n\n/* PLUGINS */\n\n.plugin-icon {\n  list-style-image: url(chrome://global/skin/icons/plugin.svg);\n  transition: fill 1.5s;\n}\n\n#plugin-icon-badge {\n  list-style-image: url(chrome://browser/skin/notification-icons/plugin-badge.svg);\n  width: 16px;\n  height: 16px;\n  opacity: 0;\n  transition: opacity 1.5s;\n}\n\n#plugins-notification-icon:not(.plugin-blocked)[extraAttr=\"inactive\"] > .plugin-icon {\n  fill-opacity: 0.25;\n}\n\n#plugins-notification-icon[extraAttr=\"inactive\"] > #plugin-icon-badge {\n  opacity: 1;\n}\n\n#plugins-notification-icon[extraAttr=\"inactive\"] > #plugin-icon-badge[animate] {\n  animation: blink-badge 1000ms ease 0s 5 alternate both;\n}\n\n@keyframes blink-badge {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.plugin-blocked > .plugin-icon {\n  list-style-image: url(chrome://global/skin/icons/plugin-blocked.svg);\n  fill: #d92215 !important;\n}\n\n.plugin-blocked > #plugin-icon-badge {\n  visibility: collapse;\n}\n\n#notification-popup-box[hidden] {\n  /* Override display:none to make the pluginBlockedNotification animation work\n     when showing the notification repeatedly. */\n  display: flex;\n  visibility: collapse;\n}\n\n#plugins-notification-icon.plugin-blocked[showing] {\n  animation: pluginBlockedNotification 500ms ease 0s 5 alternate both;\n}\n\n@keyframes pluginBlockedNotification {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n/* UPDATE */\n.popup-notification-icon[popupid=\"update-available\"],\n.popup-notification-icon[popupid=\"update-manual\"],\n.popup-notification-icon[popupid=\"update-other-instance\"],\n.popup-notification-icon[popupid=\"update-restart\"] {\n  background: url(chrome://browser/skin/update-badge.svg) no-repeat center;\n  -moz-context-properties: fill;\n  fill: var(--panel-banner-item-update-supported-bgcolor);\n}\n\n.popup-notification-icon[popupid=\"update-unsupported\"] {\n  background: url(chrome://global/skin/icons/warning.svg) no-repeat center;\n  -moz-context-properties: fill;\n  fill: var(--warning-icon-bgcolor);\n}\n", "",{"version":3,"sources":["webpack://./../../themes/shared/notification-icons.css"],"names":[],"mappings":"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","sourcesContent":["/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n@namespace html url(\"http://www.w3.org/1999/xhtml\");\n\n#notification-popup-box {\n  height: calc(var(--urlbar-min-height) - 2px /* border */ - 2 * var(--urlbar-container-padding));\n  -moz-context-properties: fill, fill-opacity;\n  fill: currentColor;\n  fill-opacity: var(--urlbar-icon-fill-opacity);\n  color: inherit;\n  border-radius: var(--urlbar-icon-border-radius);\n}\n#notification-popup-box:hover {\n  background-color: hsla(0,0%,70%,.2);\n}\n#notification-popup-box:hover:active,\n#notification-popup-box[open] {\n  background-color: hsla(0,0%,70%,.3);\n}\n\n.popup-notification-icon,\n.permission-popup-permission-icon {\n  -moz-context-properties: fill, fill-opacity;\n  fill: currentColor;\n}\n\n.notification-anchor-icon:focus-visible {\n  outline: var(--focus-outline);\n  outline-offset: var(--focus-outline-inset);\n  border-radius: var(--urlbar-icon-border-radius);\n}\n\n.blocked-permission-icon:focus-visible {\n  outline: var(--focus-outline);\n  outline-offset: calc(var(--urlbar-icon-padding) + var(--focus-outline-inset));\n  border-radius: 1px;\n}\n\n/* This class can be used alone or in combination with the class defining the\n   type of icon displayed. This rule must be defined before the others in order\n   for its list-style-image to be overridden. */\n.notification-anchor-icon {\n  list-style-image: url(chrome://global/skin/icons/info-filled.svg);\n  padding: var(--urlbar-icon-padding);\n}\n\n/* INDIVIDUAL NOTIFICATIONS */\n\n.focus-tab-by-prompt-icon {\n  list-style-image: url(chrome://global/skin/icons/info.svg);\n}\n\n.storage-access-icon {\n  list-style-image: url(chrome://browser/skin/controlcenter/3rdpartycookies.svg);\n}\n\n.persistent-storage-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/persistent-storage.svg);\n}\n\n.persistent-storage-icon.blocked-permission-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/persistent-storage-blocked.svg);\n}\n\n.desktop-notification-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/desktop-notification.svg);\n}\n\n.desktop-notification-icon.blocked-permission-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/desktop-notification-blocked.svg);\n}\n\n.geo-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/geo.svg);\n}\n\n.geo-icon.blocked-permission-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/geo-blocked.svg);\n}\n\n.open-protocol-handler-icon {\n  list-style-image: url(chrome://global/skin/icons/open-in-new.svg);\n}\n\n.open-protocol-handler-icon:-moz-locale-dir(rtl) {\n  transform: scaleX(-1);\n}\n\n.xr-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/xr.svg);\n}\n\n.xr-icon.blocked-permission-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/xr-blocked.svg);\n}\n\n.autoplay-media-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/autoplay-media.svg);\n}\n\n.autoplay-media-icon.blocked-permission-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/autoplay-media-blocked.svg);\n}\n\n.storage-access-notification-content {\n  color: var(--panel-disabled-color);\n  font-style: italic;\n  margin-top: 15px;\n}\n\n.storage-access-notification-content .text-link {\n  color: -moz-nativehyperlinktext;\n}\n\n.storage-access-notification-content .text-link:hover {\n  text-decoration: underline;\n}\n\n#storage-access-notification .popup-notification-body-container {\n  padding: 20px;\n}\n\n.indexedDB-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/persistent-storage.svg);\n}\n\n#password-notification-icon {\n  list-style-image: url(chrome://browser/skin/login.svg);\n}\n\n#password-notification-icon[extraAttr=\"attention\"] {\n  fill: var(--toolbarbutton-icon-fill-attention);\n  fill-opacity: 1;\n}\n\n.camera-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/camera.svg);\n}\n\n.camera-icon.in-use {\n  list-style-image: url(chrome://browser/skin/notification-icons/camera.svg);\n}\n\n.camera-icon.blocked-permission-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/camera-blocked.svg);\n}\n\n.microphone-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/microphone.svg);\n}\n\n.microphone-icon.in-use {\n  list-style-image: url(chrome://browser/skin/notification-icons/microphone.svg);\n}\n\n.microphone-icon.blocked-permission-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/microphone-blocked.svg);\n}\n\n.popup-notification-icon.microphone-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/microphone.svg);\n}\n\n.screen-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/screen.svg);\n}\n\n.screen-icon.in-use {\n  list-style-image: url(chrome://browser/skin/notification-icons/screen.svg);\n}\n\n.screen-icon.blocked-permission-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/screen-blocked.svg);\n}\n\n.speaker-icon {\n  list-style-image: url(chrome://global/skin/media/audio.svg);\n}\n\n.midi-icon,\n.midi-sysex-icon {\n  list-style-image: url(chrome://browser/skin/notification-icons/midi.svg);\n}\n\n#canvas-notification-icon,\n.canvas-icon {\n  list-style-image: url(chrome://browser/skin/canvas.svg);\n}\n\n.canvas-icon.blocked-permission-icon {\n  list-style-image: url(chrome://browser/skin/canvas-blocked.svg);\n}\n\n#webauthn-notification-icon,\n.popup-notification-icon[popupid^=\"webauthn-prompt-\"] {\n  list-style-image: url(chrome://browser/skin/fingerprint.svg);\n}\n\n#identity-credential-notification-icon {\n  list-style-image: url(chrome://browser/skin/login.svg);\n}\n\n#permission-popup-menulist {\n  margin-inline-end: 0;\n}\n\n#webRTC-preview:not([hidden]) {\n  flex-direction: column;\n}\n\n#webRTC-previewVideo {\n  border-radius: 4px;\n  border: 1px solid var(--panel-separator-color);\n  min-width: 0;\n  min-height: 10em;\n  max-height: 250px;\n}\n\n#webRTC-all-windows-shared,\n#webRTC-previewWarning {\n  font-size: 0.8em;\n}\n\n@media not (prefers-contrast) {\n  #webRTC-all-windows-shared,\n  #webRTC-previewWarning {\n    opacity: 0.6;\n  }\n}\n\n#webRTC-previewWarning {\n  margin-block-start: 14px;\n}\n\n/**\n * All learn-more links tend to have an !important margin-top, but\n * the small one below the WebRTC preview warning is special and\n * doesn't have one by design.\n */\n#webRTC-previewWarning-learnMore {\n  margin-top: 0 !important;\n  font-size: 0.75em;\n}\n\n#webRTC-previewWarningBox:-moz-locale-dir(rtl) {\n  background-position: calc(100% - .75em) .75em;\n}\n\n#webRTC-previewWarning > .text-link {\n  margin-inline-start: 0;\n}\n\n/* This icon has a block sign in it, so we don't need a blocked version. */\n.popup-icon {\n  list-style-image: url(\"chrome://browser/skin/notification-icons/popup.svg\");\n}\n\n/**\n * Bug 1708716: The blocked popup icon is just slightly vertically offset from\n * the other icons that can appear alongside it in the URL bar due to how it's\n * placed in the SVG file. We nudge it a little here to make it line up in a\n * more aesthetically pleasing way.\n */\n#blocked-permissions-container > .popup-icon {\n  transform: translateY(1px);\n}\n\n#permission-popup-menulist,\n#permission-popup-menulist > menupopup {\n  min-width: 6.5em;\n}\n\n/* EME */\n\n.drm-icon {\n  list-style-image: url(\"chrome://browser/skin/drm-icon.svg\");\n}\n\n.notification-anchor-icon[animate=true],\n#eme-notification-icon[firstplay=true] {\n  animation: emeTeachingMoment 0.2s linear 0s 5 normal;\n}\n\n@keyframes emeTeachingMoment {\n  0% {transform: translateX(0); }\n  25% {transform: translateX(3px) }\n  75% {transform: translateX(-3px) }\n  100% { transform: translateX(0); }\n}\n\n/* INSTALL ADDONS */\n\n.install-icon {\n  list-style-image: url(chrome://mozapps/skin/extensions/extension.svg);\n}\n\n.install-icon.blocked-permission-icon {\n  list-style-image: url(chrome://browser/skin/addons/addon-install-blocked.svg);\n}\n\n/* PLUGINS */\n\n.plugin-icon {\n  list-style-image: url(chrome://global/skin/icons/plugin.svg);\n  transition: fill 1.5s;\n}\n\n#plugin-icon-badge {\n  list-style-image: url(chrome://browser/skin/notification-icons/plugin-badge.svg);\n  width: 16px;\n  height: 16px;\n  opacity: 0;\n  transition: opacity 1.5s;\n}\n\n#plugins-notification-icon:not(.plugin-blocked)[extraAttr=\"inactive\"] > .plugin-icon {\n  fill-opacity: 0.25;\n}\n\n#plugins-notification-icon[extraAttr=\"inactive\"] > #plugin-icon-badge {\n  opacity: 1;\n}\n\n#plugins-notification-icon[extraAttr=\"inactive\"] > #plugin-icon-badge[animate] {\n  animation: blink-badge 1000ms ease 0s 5 alternate both;\n}\n\n@keyframes blink-badge {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.plugin-blocked > .plugin-icon {\n  list-style-image: url(chrome://global/skin/icons/plugin-blocked.svg);\n  fill: #d92215 !important;\n}\n\n.plugin-blocked > #plugin-icon-badge {\n  visibility: collapse;\n}\n\n#notification-popup-box[hidden] {\n  /* Override display:none to make the pluginBlockedNotification animation work\n     when showing the notification repeatedly. */\n  display: flex;\n  visibility: collapse;\n}\n\n#plugins-notification-icon.plugin-blocked[showing] {\n  animation: pluginBlockedNotification 500ms ease 0s 5 alternate both;\n}\n\n@keyframes pluginBlockedNotification {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n/* UPDATE */\n.popup-notification-icon[popupid=\"update-available\"],\n.popup-notification-icon[popupid=\"update-manual\"],\n.popup-notification-icon[popupid=\"update-other-instance\"],\n.popup-notification-icon[popupid=\"update-restart\"] {\n  background: url(chrome://browser/skin/update-badge.svg) no-repeat center;\n  -moz-context-properties: fill;\n  fill: var(--panel-banner-item-update-supported-bgcolor);\n}\n\n.popup-notification-icon[popupid=\"update-unsupported\"] {\n  background: url(chrome://global/skin/icons/warning.svg) no-repeat center;\n  -moz-context-properties: fill;\n  fill: var(--warning-icon-bgcolor);\n}\n"],"sourceRoot":""}]);
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

/***/ 87238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93379);
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_notification_icons_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32792);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_notification_icons_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_notification_icons_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
//# sourceMappingURL=7238.618cbbd6.iframe.bundle.js.map