"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[7280],{

/***/ 3303:
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
___CSS_LOADER_EXPORT___.push([module.id, "/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n@namespace xul url(\"http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul\");\n@namespace html url(\"http://www.w3.org/1999/xhtml\");\n\n:root {\n  appearance: none;\n  background: transparent;\n  border: 0;\n  border-radius: 5px;\n  --indicator-height: 32px;\n  --indicator-background-color: rgb(249,249,250);\n  --indicator-color: rgb(12,12,13);\n  --indicator-border-color: hsla(0,0%,0%,.32);\n  --indicator-icon-fill-opacity: 0.8;\n  --indicator-item-separator: 1px solid hsla(210,4%,10%,.14);\n  --indicator-stop-button-background-color: rgb(0,96,223);\n  --indicator-stop-button-hover-background-color: rgb(0,62,170);\n  --indicator-stop-button-color: rgb(255,255,255);\n  --minimize-button-background-color: hsla(240,5%,5%,.1);\n  --minimize-button-hover-background-color: hsla(240,5%,5%,.15);\n  --minimize-button-active-background-color: hsla(240,5%,5%,.2);\n  --control-icon-unchecked-hover-background-color: hsla(0,0%,70%,.4);\n  --control-icon-unchecked-active-background-color: hsla(0,0%,70%,.6);\n  --control-icon-checked-background-color: hsla(10,100%,50%,.16);\n  --control-icon-checked-icon-fill: rgb(215,0,34);\n  --control-icon-checked-hover-background-color: hsla(10,100%,50%,.24);\n  --control-icon-checked-active-background-color: hsla(10,100%,50%,.32);\n  max-height: var(--indicator-height);\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --indicator-background-color: hsl(240, 1%, 20%);\n    --indicator-color: rgb(249, 249, 250);\n    --indicator-border-color: hsl(240, 1%, 40%);\n    --indicator-item-separator: 1px solid rgb(249, 249, 250);\n    --minimize-button-background-color: rgba(249,249,250,0.1);\n    --minimize-button-hover-background-color: rgba(249,249,250,0.15);\n    --minimize-button-active-background-color: rgba(249,249,250,0.2);\n    --control-icon-unchecked-hover-background-color: rgba(249,249,250,0.15);\n    --control-icon-unchecked-active-background-color: rgba(249,249,250,0.2);\n    --control-icon-checked-background-color: hsla(343,100%,58%,.16);\n    --control-icon-checked-icon-fill: rgb(255,40,102);\n    --control-icon-checked-hover-background-color: hsla(343,100%,58%,.24);\n    --control-icon-checked-active-background-color: hsla(343,100%,58%,.32);\n  }\n}\n\nbody {\n  display: inline-flex;\n  background-color: var(--indicator-background-color);\n  color: var(--indicator-color);\n  margin: 0;\n  user-select: none;\n  -moz-window-dragging: drag;\n  /**\n   * On macOS, for windows with small enough dimensions, we seem to get\n   * vertical scrollbars on the body, even when the contents initially\n   * fit the window. We sidestep this by making sure we never display\n   * scrollbars.\n   */\n  overflow: hidden;\n  cursor: move;\n  border: 1px solid;\n  border-color: var(--indicator-border-color);\n  /* max-height = indicator height minus top and bottom border */\n  max-height: calc(var(--indicator-height) - 2px);\n}\n\nbutton,\ninput[type=\"checkbox\"] {\n  appearance: none;\n  border-style: none;\n  margin: 0;\n  -moz-context-properties: fill, fill-opacity;\n  fill: currentColor;\n  fill-opacity: var(--indicator-icon-fill-opacity);\n  background-repeat: no-repeat;\n  -moz-window-dragging: no-drag;\n  color: inherit;\n}\n\n.row-item {\n  display: flex;\n  align-items: center;\n  min-width: 30px;\n  margin-block: 5px;\n  margin-inline: 0 5px;\n  box-sizing: border-box;\n  padding: 0 5px;\n}\n\n.separator {\n  border-inline-end: var(--indicator-item-separator);\n  min-width: 1px;\n  padding: 0;\n}\n\n/**\n * For display sharing, if we happen to be sharing both\n * a window and a screen, we want to show the UI for sharing\n * the screen, since that's the more privacy-sensitive one.\n */\n:root[sharingwindow]:not([sharingscreen]) > body > #display-share > #screen-share-info,\n:root[sharingwindow]:not([sharingbrowserwindow]) > body > #display-share > #browser-window-share-info,\n:root[sharingwindow][sharingbrowserwindow] > body > #display-share > #window-share-info,\n:root[sharingscreen] > body > #display-share > #window-share-info,\n:root[sharingscreen] > body > #display-share > #browser-window-share-info,\n\n/**\n * If we're not sharing either the screen or the window, we can\n * hide the entire display sharing section.\n */\n:root:not([sharingscreen],[sharingwindow]) > body > #display-share,\n:root:not([sharingscreen],[sharingwindow]) > body > #display-share + .separator,\n:root:not([sharingvideo]) > body > #device-share > #camera-mute-toggle,\n:root:not([sharingaudio]) > body > #device-share > #microphone-mute-toggle,\n:root:not([sharingvideo],[sharingaudio]) > body > #device-share,\n:root:not([sharingvideo],[sharingaudio]) > body > #device-share + .separator {\n  display:none;\n}\n\nxul|menu {\n  overflow: hidden;\n  min-height: 0 !important;\n  height: 0 !important;\n  width: 0 !important;\n  appearance: none !important;\n  padding: 0 !important;\n}\n\n.control-icon {\n  background-position: center;\n  background-size: 16px;\n  background-color: transparent;\n  padding: 10px 16px;\n  border-radius: 5px;\n}\n\n.control-icon + .control-icon {\n  margin-inline-start: 6px;\n}\n\n.control-icon:hover {\n  background-color: var(--control-icon-unchecked-hover-background-color);\n}\n\n.control-icon:active {\n  background-color: var(--control-icon-unchecked-active-background-color);\n}\n\n.control-icon:checked {\n  background-color: var(--control-icon-checked-background-color);\n  -moz-context-properties: fill;\n  fill: var(--control-icon-checked-icon-fill);\n}\n\n.control-icon:checked:hover {\n  background-color: var(--control-icon-checked-hover-background-color);\n}\n\n.control-icon:checked:active {\n  background-color: var(--control-icon-checked-active-background-color);\n}\n\n#display-share-icon {\n  background-image: url(\"chrome://browser/skin/notification-icons/screen.svg\");\n  width: 16px;\n  height: 16px;\n  margin-inline: 5px 10px;\n  -moz-context-properties: fill, fill-opacity;\n  fill: currentColor;\n  fill-opacity: var(--indicator-icon-fill-opacity);\n}\n\n#camera-mute-toggle {\n  background-image: url(\"chrome://browser/skin/notification-icons/camera.svg\");\n}\n\n#camera-mute-toggle:checked {\n  background-image: url(\"chrome://browser/skin/notification-icons/camera-blocked.svg\");\n}\n\n#microphone-mute-toggle {\n  background-image: url(\"chrome://browser/skin/notification-icons/microphone.svg\");\n}\n\n#microphone-mute-toggle:checked {\n  background-image: url(\"chrome://browser/skin/notification-icons/microphone-blocked.svg\");\n}\n\n.stop-button {\n  background-color: var(--indicator-stop-button-background-color);\n  color: var(--indicator-stop-button-color);\n  border-radius: 5px;\n  padding: 3px 5px;\n  margin-inline-start: 15px;\n}\n\n.stop-button:hover {\n  background-color:  var(--indicator-stop-button-hover-background-color);\n}\n\n#window-controls {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#minimize {\n  padding: 10px;\n  min-width: unset;\n  background-image: url(\"chrome://browser/skin/notification-icons/minimize.svg\");\n  background-color: var(--minimize-button-background-color);\n}\n\n#minimize:hover {\n  background-color: var(--minimize-button-hover-background-color);\n}\n\n#minimize:active {\n  background-color: var(--minimize-button-active-background-color);\n}\n\n#drag-indicator {\n  background-image: url(\"chrome://browser/skin/notification-icons/drag-indicator.svg\");\n  background-repeat: no-repeat;\n  background-position: center;\n  width: 5px;\n  -moz-context-properties: fill, fill-opacity;\n  fill: currentColor;\n  fill-opacity: 0.4;\n  margin: 5px;\n}\n\n#webRTC-sharingCamera-menu,\n#webRTC-sharingMicrophone-menu,\n#webRTC-sharingScreen-menu {\n  -moz-context-properties: fill;\n  fill: currentColor;\n}\n\n#webRTC-sharingCamera-menu {\n  list-style-image: url(\"chrome://browser/skin/notification-icons/camera.svg\");\n}\n\n#webRTC-sharingMicrophone-menu {\n  list-style-image: url(\"chrome://browser/skin/notification-icons/microphone.svg\");\n}\n\n#webRTC-sharingScreen-menu {\n  list-style-image: url(\"chrome://browser/skin/notification-icons/screen.svg\");\n}\n\n#webRTC-sharingCamera-menu > menupopup,\n#webRTC-sharingMicrophone-menu > menupopup,\n#webRTC-sharingScreen-menu > menupopup {\n  list-style-image: none; /* don't inherit into menu items */\n}\n\n@media (-moz-platform: macos) {\n  /**\n   * On macOS, the ordering of the drag indicator and window controls is reversed\n   * to be more native. We re-order all items including their separators so that\n   * the markup and separator hiding and showing logic in the shared CSS file\n   * doesn't need to be macOS-specific.\n   */\n  #window-controls {\n    order: 1;\n  }\n\n  #display-share + .separator {\n    order: 2;\n  }\n\n  #display-share {\n    order: 3;\n  }\n\n  #device-share + .separator {\n    order: 4;\n  }\n\n  #device-share {\n    order: 5;\n  }\n\n  #drag-indicator {\n    order: 6;\n  }\n\n  /**\n   * The minimize button on macOS should be circular, and the icon should be\n   * centered. The asset we have for the minimize icon puts it along the bottom,\n   * so we manually offset it here.\n   */\n  #minimize {\n    background-position: center -5px;\n    padding: 8px;\n    border: 1px solid transparent;\n    border-radius: 1000px;\n  }\n}\n\n@media (-moz-platform: windows) {\n  @media (-moz-windows-default-theme: 0) {\n    :root {\n      --indicator-background-color: -moz-Dialog;\n      --indicator-color: -moz-DialogText;\n      --indicator-border-color: InactiveBorder;\n      --indicator-item-separator: 1px solid ThreeDShadow;\n      --indicator-stop-button-background-color: hsla(0,0%,70%,.2);\n      --indicator-stop-button-hover-background-color: hsla(0,0%,70%,.4);\n      --indicator-stop-button-color: inherit;\n      --minimize-button-background-color: hsla(0,0%,70%,.2);\n      --minimize-button-hover-background-color: hsla(0,0%,70%,.4);\n      --minimize-button-active-background-color: hsla(0,0%,70%,.6);\n      --control-icon-unchecked-hover-background-color: hsla(0,0%,70%,.2);\n      --control-icon-unchecked-active-background-color: hsla(0,0%,70%,.6);\n      --control-icon-checked-background-color: SelectedItem;\n      --control-icon-checked-icon-fill: SelectedItemText;\n      --control-icon-checked-hover-background-color: hsla(0,0%,70%,.2);\n      --control-icon-checked-active-background-color: hsla(0,0%,70%,.6);\n    }\n\n    #minimize,\n    .stop-button {\n      border: 1px outset ThreeDLightShadow;\n    }\n  }\n\n  #webRTC-sharingCamera-menu {\n    list-style-image: url(\"chrome://browser/skin/notification-icons/camera.png\");\n  }\n\n  #webRTC-sharingMicrophone-menu {\n    list-style-image: url(\"chrome://browser/skin/notification-icons/microphone.png\");\n  }\n\n  #webRTC-sharingScreen-menu {\n    list-style-image: url(\"chrome://browser/skin/notification-icons/screen.png\");\n  }\n}\n", "",{"version":3,"sources":["webpack://./../../themes/shared/webRTC-indicator.css"],"names":[],"mappings":"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","sourcesContent":["/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n@namespace xul url(\"http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul\");\n@namespace html url(\"http://www.w3.org/1999/xhtml\");\n\n:root {\n  appearance: none;\n  background: transparent;\n  border: 0;\n  border-radius: 5px;\n  --indicator-height: 32px;\n  --indicator-background-color: rgb(249,249,250);\n  --indicator-color: rgb(12,12,13);\n  --indicator-border-color: hsla(0,0%,0%,.32);\n  --indicator-icon-fill-opacity: 0.8;\n  --indicator-item-separator: 1px solid hsla(210,4%,10%,.14);\n  --indicator-stop-button-background-color: rgb(0,96,223);\n  --indicator-stop-button-hover-background-color: rgb(0,62,170);\n  --indicator-stop-button-color: rgb(255,255,255);\n  --minimize-button-background-color: hsla(240,5%,5%,.1);\n  --minimize-button-hover-background-color: hsla(240,5%,5%,.15);\n  --minimize-button-active-background-color: hsla(240,5%,5%,.2);\n  --control-icon-unchecked-hover-background-color: hsla(0,0%,70%,.4);\n  --control-icon-unchecked-active-background-color: hsla(0,0%,70%,.6);\n  --control-icon-checked-background-color: hsla(10,100%,50%,.16);\n  --control-icon-checked-icon-fill: rgb(215,0,34);\n  --control-icon-checked-hover-background-color: hsla(10,100%,50%,.24);\n  --control-icon-checked-active-background-color: hsla(10,100%,50%,.32);\n  max-height: var(--indicator-height);\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --indicator-background-color: hsl(240, 1%, 20%);\n    --indicator-color: rgb(249, 249, 250);\n    --indicator-border-color: hsl(240, 1%, 40%);\n    --indicator-item-separator: 1px solid rgb(249, 249, 250);\n    --minimize-button-background-color: rgba(249,249,250,0.1);\n    --minimize-button-hover-background-color: rgba(249,249,250,0.15);\n    --minimize-button-active-background-color: rgba(249,249,250,0.2);\n    --control-icon-unchecked-hover-background-color: rgba(249,249,250,0.15);\n    --control-icon-unchecked-active-background-color: rgba(249,249,250,0.2);\n    --control-icon-checked-background-color: hsla(343,100%,58%,.16);\n    --control-icon-checked-icon-fill: rgb(255,40,102);\n    --control-icon-checked-hover-background-color: hsla(343,100%,58%,.24);\n    --control-icon-checked-active-background-color: hsla(343,100%,58%,.32);\n  }\n}\n\nbody {\n  display: inline-flex;\n  background-color: var(--indicator-background-color);\n  color: var(--indicator-color);\n  margin: 0;\n  user-select: none;\n  -moz-window-dragging: drag;\n  /**\n   * On macOS, for windows with small enough dimensions, we seem to get\n   * vertical scrollbars on the body, even when the contents initially\n   * fit the window. We sidestep this by making sure we never display\n   * scrollbars.\n   */\n  overflow: hidden;\n  cursor: move;\n  border: 1px solid;\n  border-color: var(--indicator-border-color);\n  /* max-height = indicator height minus top and bottom border */\n  max-height: calc(var(--indicator-height) - 2px);\n}\n\nbutton,\ninput[type=\"checkbox\"] {\n  appearance: none;\n  border-style: none;\n  margin: 0;\n  -moz-context-properties: fill, fill-opacity;\n  fill: currentColor;\n  fill-opacity: var(--indicator-icon-fill-opacity);\n  background-repeat: no-repeat;\n  -moz-window-dragging: no-drag;\n  color: inherit;\n}\n\n.row-item {\n  display: flex;\n  align-items: center;\n  min-width: 30px;\n  margin-block: 5px;\n  margin-inline: 0 5px;\n  box-sizing: border-box;\n  padding: 0 5px;\n}\n\n.separator {\n  border-inline-end: var(--indicator-item-separator);\n  min-width: 1px;\n  padding: 0;\n}\n\n/**\n * For display sharing, if we happen to be sharing both\n * a window and a screen, we want to show the UI for sharing\n * the screen, since that's the more privacy-sensitive one.\n */\n:root[sharingwindow]:not([sharingscreen]) > body > #display-share > #screen-share-info,\n:root[sharingwindow]:not([sharingbrowserwindow]) > body > #display-share > #browser-window-share-info,\n:root[sharingwindow][sharingbrowserwindow] > body > #display-share > #window-share-info,\n:root[sharingscreen] > body > #display-share > #window-share-info,\n:root[sharingscreen] > body > #display-share > #browser-window-share-info,\n\n/**\n * If we're not sharing either the screen or the window, we can\n * hide the entire display sharing section.\n */\n:root:not([sharingscreen],[sharingwindow]) > body > #display-share,\n:root:not([sharingscreen],[sharingwindow]) > body > #display-share + .separator,\n:root:not([sharingvideo]) > body > #device-share > #camera-mute-toggle,\n:root:not([sharingaudio]) > body > #device-share > #microphone-mute-toggle,\n:root:not([sharingvideo],[sharingaudio]) > body > #device-share,\n:root:not([sharingvideo],[sharingaudio]) > body > #device-share + .separator {\n  display:none;\n}\n\nxul|menu {\n  overflow: hidden;\n  min-height: 0 !important;\n  height: 0 !important;\n  width: 0 !important;\n  appearance: none !important;\n  padding: 0 !important;\n}\n\n.control-icon {\n  background-position: center;\n  background-size: 16px;\n  background-color: transparent;\n  padding: 10px 16px;\n  border-radius: 5px;\n}\n\n.control-icon + .control-icon {\n  margin-inline-start: 6px;\n}\n\n.control-icon:hover {\n  background-color: var(--control-icon-unchecked-hover-background-color);\n}\n\n.control-icon:active {\n  background-color: var(--control-icon-unchecked-active-background-color);\n}\n\n.control-icon:checked {\n  background-color: var(--control-icon-checked-background-color);\n  -moz-context-properties: fill;\n  fill: var(--control-icon-checked-icon-fill);\n}\n\n.control-icon:checked:hover {\n  background-color: var(--control-icon-checked-hover-background-color);\n}\n\n.control-icon:checked:active {\n  background-color: var(--control-icon-checked-active-background-color);\n}\n\n#display-share-icon {\n  background-image: url(\"chrome://browser/skin/notification-icons/screen.svg\");\n  width: 16px;\n  height: 16px;\n  margin-inline: 5px 10px;\n  -moz-context-properties: fill, fill-opacity;\n  fill: currentColor;\n  fill-opacity: var(--indicator-icon-fill-opacity);\n}\n\n#camera-mute-toggle {\n  background-image: url(\"chrome://browser/skin/notification-icons/camera.svg\");\n}\n\n#camera-mute-toggle:checked {\n  background-image: url(\"chrome://browser/skin/notification-icons/camera-blocked.svg\");\n}\n\n#microphone-mute-toggle {\n  background-image: url(\"chrome://browser/skin/notification-icons/microphone.svg\");\n}\n\n#microphone-mute-toggle:checked {\n  background-image: url(\"chrome://browser/skin/notification-icons/microphone-blocked.svg\");\n}\n\n.stop-button {\n  background-color: var(--indicator-stop-button-background-color);\n  color: var(--indicator-stop-button-color);\n  border-radius: 5px;\n  padding: 3px 5px;\n  margin-inline-start: 15px;\n}\n\n.stop-button:hover {\n  background-color:  var(--indicator-stop-button-hover-background-color);\n}\n\n#window-controls {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#minimize {\n  padding: 10px;\n  min-width: unset;\n  background-image: url(\"chrome://browser/skin/notification-icons/minimize.svg\");\n  background-color: var(--minimize-button-background-color);\n}\n\n#minimize:hover {\n  background-color: var(--minimize-button-hover-background-color);\n}\n\n#minimize:active {\n  background-color: var(--minimize-button-active-background-color);\n}\n\n#drag-indicator {\n  background-image: url(\"chrome://browser/skin/notification-icons/drag-indicator.svg\");\n  background-repeat: no-repeat;\n  background-position: center;\n  width: 5px;\n  -moz-context-properties: fill, fill-opacity;\n  fill: currentColor;\n  fill-opacity: 0.4;\n  margin: 5px;\n}\n\n#webRTC-sharingCamera-menu,\n#webRTC-sharingMicrophone-menu,\n#webRTC-sharingScreen-menu {\n  -moz-context-properties: fill;\n  fill: currentColor;\n}\n\n#webRTC-sharingCamera-menu {\n  list-style-image: url(\"chrome://browser/skin/notification-icons/camera.svg\");\n}\n\n#webRTC-sharingMicrophone-menu {\n  list-style-image: url(\"chrome://browser/skin/notification-icons/microphone.svg\");\n}\n\n#webRTC-sharingScreen-menu {\n  list-style-image: url(\"chrome://browser/skin/notification-icons/screen.svg\");\n}\n\n#webRTC-sharingCamera-menu > menupopup,\n#webRTC-sharingMicrophone-menu > menupopup,\n#webRTC-sharingScreen-menu > menupopup {\n  list-style-image: none; /* don't inherit into menu items */\n}\n\n@media (-moz-platform: macos) {\n  /**\n   * On macOS, the ordering of the drag indicator and window controls is reversed\n   * to be more native. We re-order all items including their separators so that\n   * the markup and separator hiding and showing logic in the shared CSS file\n   * doesn't need to be macOS-specific.\n   */\n  #window-controls {\n    order: 1;\n  }\n\n  #display-share + .separator {\n    order: 2;\n  }\n\n  #display-share {\n    order: 3;\n  }\n\n  #device-share + .separator {\n    order: 4;\n  }\n\n  #device-share {\n    order: 5;\n  }\n\n  #drag-indicator {\n    order: 6;\n  }\n\n  /**\n   * The minimize button on macOS should be circular, and the icon should be\n   * centered. The asset we have for the minimize icon puts it along the bottom,\n   * so we manually offset it here.\n   */\n  #minimize {\n    background-position: center -5px;\n    padding: 8px;\n    border: 1px solid transparent;\n    border-radius: 1000px;\n  }\n}\n\n@media (-moz-platform: windows) {\n  @media (-moz-windows-default-theme: 0) {\n    :root {\n      --indicator-background-color: -moz-Dialog;\n      --indicator-color: -moz-DialogText;\n      --indicator-border-color: InactiveBorder;\n      --indicator-item-separator: 1px solid ThreeDShadow;\n      --indicator-stop-button-background-color: hsla(0,0%,70%,.2);\n      --indicator-stop-button-hover-background-color: hsla(0,0%,70%,.4);\n      --indicator-stop-button-color: inherit;\n      --minimize-button-background-color: hsla(0,0%,70%,.2);\n      --minimize-button-hover-background-color: hsla(0,0%,70%,.4);\n      --minimize-button-active-background-color: hsla(0,0%,70%,.6);\n      --control-icon-unchecked-hover-background-color: hsla(0,0%,70%,.2);\n      --control-icon-unchecked-active-background-color: hsla(0,0%,70%,.6);\n      --control-icon-checked-background-color: SelectedItem;\n      --control-icon-checked-icon-fill: SelectedItemText;\n      --control-icon-checked-hover-background-color: hsla(0,0%,70%,.2);\n      --control-icon-checked-active-background-color: hsla(0,0%,70%,.6);\n    }\n\n    #minimize,\n    .stop-button {\n      border: 1px outset ThreeDLightShadow;\n    }\n  }\n\n  #webRTC-sharingCamera-menu {\n    list-style-image: url(\"chrome://browser/skin/notification-icons/camera.png\");\n  }\n\n  #webRTC-sharingMicrophone-menu {\n    list-style-image: url(\"chrome://browser/skin/notification-icons/microphone.png\");\n  }\n\n  #webRTC-sharingScreen-menu {\n    list-style-image: url(\"chrome://browser/skin/notification-icons/screen.png\");\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ 47280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93379);
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_webRTC_indicator_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3303);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_webRTC_indicator_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_webRTC_indicator_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
//# sourceMappingURL=7280.6bf1ddb4.iframe.bundle.js.map