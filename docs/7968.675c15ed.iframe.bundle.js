"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[7968],{

/***/ 61657:
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
___CSS_LOADER_EXPORT___.push([module.id, "/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n@namespace html url(\"http://www.w3.org/1999/xhtml\");\n\n:root {\n  --toolbarbutton-icon-fill-attention: AccentColor;\n  --warning-icon-bgcolor: #FFA436;\n}\n\n:root:-moz-lwtheme,\n:where(panel, toolbar, #urlbar, #searchbar):-moz-lwtheme {\n  --toolbarbutton-icon-fill-attention: var(--lwt-toolbarbutton-icon-fill-attention, rgb(0,97,224));\n}\n\n:root[lwt-popup-brighttext] panel,\n:root[lwt-toolbar-field-brighttext] :is(#urlbar, #searchbar),\ntoolbar[brighttext]:-moz-lwtheme {\n  --toolbarbutton-icon-fill-attention: var(--lwt-toolbarbutton-icon-fill-attention, rgb(0,221,255));\n  --warning-icon-bgcolor: #FFBD4F;\n}\n\n:root,\n/* Pick up potentially diverging --toolbarbutton-icon-fill-attention\n   values from above. */\n:is(panel, toolbar, #urlbar, #searchbar) {\n  --toolbar-field-icon-fill-attention: var(--lwt-toolbar-field-icon-fill-attention, var(--toolbarbutton-icon-fill-attention));\n}\n\n.toolbarbutton-animatable-box,\n.toolbarbutton-1 {\n  color: inherit;\n  -moz-context-properties: fill, fill-opacity;\n  fill: var(--toolbarbutton-icon-fill);\n}\n\n.toolbarbutton-animatable-box {\n  display: block;\n  position: absolute;\n  overflow: hidden;\n  z-index: 2;\n  pointer-events: none;\n}\n\n.toolbarbutton-animatable-box > .toolbarbutton-animatable-image {\n  animation-fill-mode: forwards;\n  animation-iteration-count: 1;\n  list-style-image: none;\n  /* Height must be equal to height of toolbarbutton padding-box. --toolbarbutton-height\n     is calculated and set during runtime by BrowserUIUtils.setToolbarButtonHeightProperty()\n     before the animation begins. */\n  height: var(--toolbarbutton-height);\n}\n\n#back-button:-moz-locale-dir(rtl) > .toolbarbutton-icon,\n#forward-button:-moz-locale-dir(rtl) > .toolbarbutton-icon,\n#reload-button:-moz-locale-dir(rtl) > .toolbarbutton-icon,\n#reload-button:-moz-locale-dir(rtl) > .toolbarbutton-animatable-box > .toolbarbutton-animatable-image,\n#stop-button:-moz-locale-dir(rtl) > .toolbarbutton-animatable-box > .toolbarbutton-animatable-image,\n#nav-bar-overflow-button:-moz-locale-dir(rtl) > .toolbarbutton-icon,\n#nav-bar-overflow-button:-moz-locale-dir(rtl) > .toolbarbutton-animatable-box > .toolbarbutton-animatable-image,\n#PlacesChevron:-moz-locale-dir(rtl) > .toolbarbutton-icon,\n#panic-button:-moz-locale-dir(rtl) > .toolbarbutton-icon,\n#PanelUI-menu-button:-moz-locale-dir(rtl) > .toolbarbutton-badge-stack > .toolbarbutton-icon {\n  scale: -1 1;\n}\n\n#back-button {\n  list-style-image: url(\"chrome://browser/skin/back.svg\");\n}\n\n#forward-button {\n  list-style-image: url(\"chrome://browser/skin/forward.svg\");\n}\n\n/* The animations for the reload-button and stop-button are disabled\n   outside of the nav-bar due to bug 1382894. */\n:is(#reload-button, #stop-button) > .toolbarbutton-animatable-box {\n  display: none;\n}\n#nav-bar-customization-target > #stop-reload-button > :is(#reload-button, #stop-button) > .toolbarbutton-animatable-box {\n  display: block;\n}\n\n#stop-reload-button[animate] > #reload-button > .toolbarbutton-icon,\n#stop-reload-button[animate] > #reload-button[displaystop] + #stop-button > .toolbarbutton-icon {\n  fill: transparent;\n}\n\n@keyframes stop-to-reload {\n  /* pause on the first frame (step 0) for 6 frames of time */\n  from {\n    /* 0 */\n    transform: translateX(0);\n  }\n  /* resume at 7/35 and animate across the next 14 frames */\n  17.14% {\n    animation-timing-function: steps(14);\n    transform: translateX(calc(0  * -20px));\n  }\n  /* pause on the last frame for the remainder of the duration */\n  54.29% {\n    transform: translateX(calc(14 * -20px));\n  }\n  to {\n    /* end state for animation: */\n    transform: translateX(calc(var(--anim-frames) * -20px));\n  }\n}\n\n@keyframes reload-to-stop {\n  /* pause on the first frame (step 0) for 6 frames of time */\n  from {\n    /* 0 */\n    transform: translateX(0);\n    animation-timing-function: steps(12);\n  }\n  /* pause at 13/15 for 3 frames */\n  86.67% {\n    transform: translateX(calc(var(--anim-frames) * -20px));\n  }\n  to {\n    /* end state for animation: */\n    transform: translateX(calc(var(--anim-frames) * -20px));\n  }\n}\n\n#stop-reload-button[animate] > #reload-button,\n#stop-reload-button[animate] > #stop-button {\n  position: relative;\n}\n\n#nav-bar-customization-target :where(#reload-button, #stop-button) > .toolbarbutton-icon {\n  padding: calc(var(--toolbarbutton-inner-padding) + 1px) var(--toolbarbutton-inner-padding) calc(var(--toolbarbutton-inner-padding) - 1px ) !important; /* The animation is 18px but the other icons are 16px, lower it by 1px so it is vertically centered */\n}\n\n#reload-button > .toolbarbutton-animatable-box,\n#stop-button > .toolbarbutton-animatable-box {\n  top: calc(50% - 9px); /* Vertically center the 20px tall animatable image, which is 1px higher than other icons */\n  /* Since .toolbarbutton-icon uses a different width than the animatable-box,\n     we need to set a padding relative to the difference in widths. */\n  margin-inline-start: calc((16px + 2 * var(--toolbarbutton-inner-padding) - 20px) / 2);\n  width: 20px; /* Width of each frame within the SVG sprite */\n  height: 20px; /* Height of each frame within the SVG sprite */\n}\n\n#stop-reload-button[animate] > #reload-button > .toolbarbutton-animatable-box > .toolbarbutton-animatable-image {\n  background-image: url(\"chrome://browser/skin/stop-to-reload.svg\");\n  /*\n    transition from stop icon to reload icon\n    pause at frame 0 for 6 ticks,\n    pause at frame 15 for 16 ticks\n    total 35 steps*/\n  --anim-frames: 14;\n  --anim-steps: calc(var(--anim-frames) + 21); /* Add steps for doing the pause at the start and end */\n  width: calc(20px * (var(--anim-frames) + 1));\n  height: 20px;\n\n  /* initial state for animation */\n  transform: translateX(0);\n}\n\n#stop-reload-button[animate] > #reload-button:not([displaystop]) > .toolbarbutton-animatable-box > .toolbarbutton-animatable-image {\n  animation-name: stop-to-reload;\n}\n\n#reload-button:not([displaystop]) > .toolbarbutton-animatable-box > .toolbarbutton-animatable-image {\n  animation-duration: calc(var(--anim-steps) * 16.667ms);\n}\n\n#stop-reload-button[animate] > #reload-button[displaystop] + #stop-button > .toolbarbutton-animatable-box > .toolbarbutton-animatable-image {\n  background-image: url(\"chrome://browser/skin/reload-to-stop.svg\");\n  /*\n    transition from reload icon to stop icon\n    pause at end for 3 frames of time\n    pause at ...\n    total 15 steps*/\n  --anim-frames: 12;\n  --anim-steps: calc(var(--anim-frames) + 3); /* Add steps for doing the pause at the start and end */\n  width: calc(20px * (var(--anim-frames) + 1));\n  height: 20px;\n\n  /* initial state for animation */\n  transform: translateX(0);\n}\n\n#stop-reload-button[animate] > #reload-button[displaystop] + #stop-button > .toolbarbutton-animatable-box > .toolbarbutton-animatable-image {\n  animation-name: reload-to-stop;\n  animation-duration: calc(var(--anim-steps) * 16.667ms);\n}\n\n#reload-button[displaystop] + #stop-button > .toolbarbutton-animatable-box > .toolbarbutton-animatable-image {\n  animation-timing-function: steps(15);\n  animation-duration: 0.25s;\n}\n\n#reload-button > .toolbarbutton-animatable-box > .toolbarbutton-animatable-image {\n  transform: translateX(-700px);\n}\n\n#reload-button[displaystop] + #stop-button > .toolbarbutton-animatable-box > .toolbarbutton-animatable-image {\n  transform: translateX(-300px);\n}\n\n#reload-button {\n  list-style-image: url(\"chrome://global/skin/icons/reload.svg\");\n}\n\n#stop-button {\n  list-style-image: url(\"chrome://global/skin/icons/close.svg\");\n}\n\n#home-button {\n  list-style-image: url(\"chrome://browser/skin/home.svg\");\n}\n\n#bookmarks-toolbar-button,\n#bookmarks-toolbar-placeholder {\n  list-style-image: url(\"chrome://browser/skin/bookmarks-toolbar.svg\");\n}\n\n#bookmarks-menu-button {\n  list-style-image: url(\"chrome://browser/skin/bookmark-star-on-tray.svg\");\n}\n\n#history-panelmenu {\n  list-style-image: url(\"chrome://browser/skin/history.svg\");\n}\n\n#downloads-button {\n  list-style-image: url(\"chrome://browser/skin/downloads/downloads.svg\");\n}\n\n#open-file-button {\n  list-style-image: url(\"chrome://browser/skin/open.svg\");\n}\n\n#screenshot-button {\n  list-style-image: url(\"chrome://browser/skin/screenshot.svg\");\n}\n\n#save-page-button {\n  list-style-image: url(\"chrome://browser/skin/save.svg\");\n}\n\n#sync-button {\n  list-style-image: url(\"chrome://browser/skin/synced-tabs.svg\");\n}\n\n#characterencoding-button {\n  list-style-image: url(\"chrome://browser/skin/characterEncoding.svg\");\n}\n\n#new-window-button {\n  list-style-image: url(\"chrome://browser/skin/window.svg\");\n}\n\n#new-tab-button {\n  list-style-image: url(\"chrome://browser/skin/new-tab.svg\");\n}\n\n#privatebrowsing-button {\n  list-style-image: url(\"chrome://browser/skin/privateBrowsing.svg\");\n}\n\n#find-button {\n  list-style-image: url(\"chrome://global/skin/icons/search-glass.svg\");\n}\n\n#print-button {\n  list-style-image: url(\"chrome://global/skin/icons/print.svg\");\n}\n\n#fullscreen-button {\n  list-style-image: url(\"chrome://browser/skin/fullscreen.svg\");\n}\n\n#developer-button {\n  list-style-image: url(\"chrome://global/skin/icons/developer.svg\");\n}\n\n#profiler-button-button > .toolbarbutton-icon {\n  list-style-image: url(\"chrome://devtools/skin/images/tool-profiler.svg\");\n}\n\n#profiler-button-button:not(.profiler-active) > image {\n  transform: scaleX(-1);\n}\n\n#profiler-button-button.profiler-active > image {\n  fill: #0060df;\n  fill-opacity: 1;\n  background-color: #0060df33;\n}\n\n#profiler-button-button.profiler-active:hover > image {\n  background-color: #0060df22;\n}\n\n#profiler-button-button.profiler-paused > image {\n  opacity: 0.4;\n}\n\n#preferences-button {\n  list-style-image: url(\"chrome://global/skin/icons/settings.svg\");\n}\n\n#PanelUI-menu-button {\n  list-style-image: url(\"chrome://browser/skin/menu.svg\");\n}\n\n#PanelUI-menu-button[badge-status=\"update-available\"],\n#PanelUI-menu-button[badge-status=\"update-downloading\"],\n#PanelUI-menu-button[badge-status=\"update-manual\"],\n#PanelUI-menu-button[badge-status=\"update-other-instance\"],\n#PanelUI-menu-button[badge-status=\"update-restart\"],\n#PanelUI-menu-button[badge-status=\"update-unsupported\"],\n#PanelUI-menu-button[badge-status=\"addon-alert\"],\n#PanelUI-menu-button[badge-status=\"fxa-needs-authentication\"] {\n  list-style-image: url(\"chrome://browser/skin/menu-badged.svg\");\n}\n\n#cut-button {\n  list-style-image: url(\"chrome://browser/skin/edit-cut.svg\");\n}\n\n#copy-button {\n  list-style-image: url(\"chrome://global/skin/icons/edit-copy.svg\");\n}\n\n#paste-button {\n  list-style-image: url(\"chrome://browser/skin/edit-paste.svg\");\n}\n\n#zoom-out-button {\n  list-style-image: url(\"chrome://browser/skin/zoom-out.svg\");\n}\n\n#zoom-in-button {\n  list-style-image: url(\"chrome://global/skin/icons/plus.svg\");\n}\n\n#PlacesChevron,\n#nav-bar-overflow-button {\n  list-style-image: url(\"chrome://global/skin/icons/chevron.svg\");\n}\n\n#nav-bar-overflow-button[animate] > .toolbarbutton-icon {\n  fill: transparent;\n}\n\n@keyframes overflow-animation {\n  from {\n    transform: translateX(0);\n  }\n  from {\n    transform: translateX(-832px);\n  }\n}\n\n#nav-bar-overflow-button > .toolbarbutton-animatable-box {\n  visibility: hidden;\n  top: calc(50% - 8px); /* Vertically center the 16px tall animatable image */\n  /* Since .toolbarbutton-icon uses a different width than the animatable box,\n     we need to set a padding relative to the difference in widths. */\n  margin-inline-start: calc((16px + 2 * var(--toolbarbutton-inner-padding) - 16px) / 2);\n  width: 16px; /* Width of each frame within the SVG sprite */\n  height: 16px; /* Height of each frame within the SVG sprite */\n  -moz-context-properties: fill, stroke;\n  fill: var(--toolbarbutton-icon-fill);\n  stroke: var(--toolbarbutton-icon-fill-attention);\n}\n#nav-bar-overflow-button > .toolbarbutton-animatable-box > .toolbarbutton-animatable-image {\n  background-image: url(\"chrome://browser/skin/chevron-animation.svg\");\n  width: 848px;\n  height: 16px;\n  transform: translateX(0);\n}\n\n#nav-bar-overflow-button[animate] > .toolbarbutton-animatable-box {\n  visibility: visible;\n}\n#nav-bar-overflow-button[animate] > .toolbarbutton-animatable-box > .toolbarbutton-animatable-image {\n  animation-name: overflow-animation;\n  animation-timing-function: steps(52);\n  animation-duration: calc(52 * 16.667ms);\n}\n\n#unified-extensions-button {\n  list-style-image: url(\"chrome://mozapps/skin/extensions/extension.svg\");\n}\n\n#email-link-button {\n  list-style-image: url(\"chrome://browser/skin/mail.svg\");\n}\n\n#sidebar-button {\n  list-style-image: url(\"chrome://browser/skin/sidebars-right.svg\");\n}\n\n#sidebar-button:-moz-locale-dir(ltr):not([positionend]),\n#sidebar-button:-moz-locale-dir(rtl)[positionend] {\n  list-style-image: url(\"chrome://browser/skin/sidebars.svg\");\n}\n\n#panic-button {\n  list-style-image: url(\"chrome://browser/skin/forget.svg\");\n}\n\n#panic-button[open] {\n  fill: rgb(213, 32, 20);\n}\n\ntoolbar[brighttext] #panic-button[open] {\n  fill: #ff848b;\n}\n\n#library-button {\n  list-style-image: url(\"chrome://browser/skin/library.svg\");\n}\n\n#save-to-pocket-button {\n  list-style-image: url(\"chrome://global/skin/icons/pocket-outline.svg\");\n  fill: var(--toolbarbutton-icon-fill);\n}\n\n#save-to-pocket-button[open=\"true\"],\n#save-to-pocket-button[pocketed=\"true\"] {\n  list-style-image: url(\"chrome://global/skin/icons/pocket.svg\");\n  fill: #ef4056;\n}\n\n/* ----- BOOKMARK BUTTONS ----- */\n\n.bookmark-item {\n  list-style-image: url(\"chrome://global/skin/icons/defaultFavicon.svg\");\n  -moz-context-properties: fill;\n  fill: currentColor;\n}\n\ntoolbarbutton.bookmark-item {\n  -moz-context-properties: fill, fill-opacity;\n  fill: var(--toolbarbutton-icon-fill);\n}\n\n.bookmark-item[container] {\n  list-style-image: url(\"chrome://global/skin/icons/folder.svg\");\n}\n\n.bookmark-item[container][query] {\n  list-style-image: url(\"chrome://browser/skin/places/folder-smart.svg\");\n}\n\n.bookmark-item[query][tagContainer] {\n  list-style-image: url(\"chrome://browser/skin/places/tag.svg\");\n}\n\n.bookmark-item[query][dayContainer] {\n  list-style-image: url(\"chrome://browser/skin/history.svg\");\n}\n\n.bookmark-item[query][hostContainer] {\n  list-style-image: url(\"chrome://global/skin/icons/folder.svg\");\n}\n\n#whats-new-menu-button {\n  list-style-image: url(\"chrome://global/skin/icons/whatsnew.svg\");\n}\n\n#ion-button {\n  list-style-image: url(\"chrome://browser/skin/ion.svg\");\n}\n\n#import-button {\n  list-style-image: url(\"chrome://browser/skin/import.svg\");\n}\n\n#firefox-view-button {\n  list-style-image: url(\"chrome://branding/content/icon32.png\");\n}\n", "",{"version":3,"sources":["webpack://./../../themes/shared/toolbarbutton-icons.css"],"names":[],"mappings":"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","sourcesContent":["/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n@namespace html url(\"http://www.w3.org/1999/xhtml\");\n\n:root {\n  --toolbarbutton-icon-fill-attention: AccentColor;\n  --warning-icon-bgcolor: #FFA436;\n}\n\n:root:-moz-lwtheme,\n:where(panel, toolbar, #urlbar, #searchbar):-moz-lwtheme {\n  --toolbarbutton-icon-fill-attention: var(--lwt-toolbarbutton-icon-fill-attention, rgb(0,97,224));\n}\n\n:root[lwt-popup-brighttext] panel,\n:root[lwt-toolbar-field-brighttext] :is(#urlbar, #searchbar),\ntoolbar[brighttext]:-moz-lwtheme {\n  --toolbarbutton-icon-fill-attention: var(--lwt-toolbarbutton-icon-fill-attention, rgb(0,221,255));\n  --warning-icon-bgcolor: #FFBD4F;\n}\n\n:root,\n/* Pick up potentially diverging --toolbarbutton-icon-fill-attention\n   values from above. */\n:is(panel, toolbar, #urlbar, #searchbar) {\n  --toolbar-field-icon-fill-attention: var(--lwt-toolbar-field-icon-fill-attention, var(--toolbarbutton-icon-fill-attention));\n}\n\n.toolbarbutton-animatable-box,\n.toolbarbutton-1 {\n  color: inherit;\n  -moz-context-properties: fill, fill-opacity;\n  fill: var(--toolbarbutton-icon-fill);\n}\n\n.toolbarbutton-animatable-box {\n  display: block;\n  position: absolute;\n  overflow: hidden;\n  z-index: 2;\n  pointer-events: none;\n}\n\n.toolbarbutton-animatable-box > .toolbarbutton-animatable-image {\n  animation-fill-mode: forwards;\n  animation-iteration-count: 1;\n  list-style-image: none;\n  /* Height must be equal to height of toolbarbutton padding-box. --toolbarbutton-height\n     is calculated and set during runtime by BrowserUIUtils.setToolbarButtonHeightProperty()\n     before the animation begins. */\n  height: var(--toolbarbutton-height);\n}\n\n#back-button:-moz-locale-dir(rtl) > .toolbarbutton-icon,\n#forward-button:-moz-locale-dir(rtl) > .toolbarbutton-icon,\n#reload-button:-moz-locale-dir(rtl) > .toolbarbutton-icon,\n#reload-button:-moz-locale-dir(rtl) > .toolbarbutton-animatable-box > .toolbarbutton-animatable-image,\n#stop-button:-moz-locale-dir(rtl) > .toolbarbutton-animatable-box > .toolbarbutton-animatable-image,\n#nav-bar-overflow-button:-moz-locale-dir(rtl) > .toolbarbutton-icon,\n#nav-bar-overflow-button:-moz-locale-dir(rtl) > .toolbarbutton-animatable-box > .toolbarbutton-animatable-image,\n#PlacesChevron:-moz-locale-dir(rtl) > .toolbarbutton-icon,\n#panic-button:-moz-locale-dir(rtl) > .toolbarbutton-icon,\n#PanelUI-menu-button:-moz-locale-dir(rtl) > .toolbarbutton-badge-stack > .toolbarbutton-icon {\n  scale: -1 1;\n}\n\n#back-button {\n  list-style-image: url(\"chrome://browser/skin/back.svg\");\n}\n\n#forward-button {\n  list-style-image: url(\"chrome://browser/skin/forward.svg\");\n}\n\n/* The animations for the reload-button and stop-button are disabled\n   outside of the nav-bar due to bug 1382894. */\n:is(#reload-button, #stop-button) > .toolbarbutton-animatable-box {\n  display: none;\n}\n#nav-bar-customization-target > #stop-reload-button > :is(#reload-button, #stop-button) > .toolbarbutton-animatable-box {\n  display: block;\n}\n\n#stop-reload-button[animate] > #reload-button > .toolbarbutton-icon,\n#stop-reload-button[animate] > #reload-button[displaystop] + #stop-button > .toolbarbutton-icon {\n  fill: transparent;\n}\n\n@keyframes stop-to-reload {\n  /* pause on the first frame (step 0) for 6 frames of time */\n  from {\n    /* 0 */\n    transform: translateX(0);\n  }\n  /* resume at 7/35 and animate across the next 14 frames */\n  17.14% {\n    animation-timing-function: steps(14);\n    transform: translateX(calc(0  * -20px));\n  }\n  /* pause on the last frame for the remainder of the duration */\n  54.29% {\n    transform: translateX(calc(14 * -20px));\n  }\n  to {\n    /* end state for animation: */\n    transform: translateX(calc(var(--anim-frames) * -20px));\n  }\n}\n\n@keyframes reload-to-stop {\n  /* pause on the first frame (step 0) for 6 frames of time */\n  from {\n    /* 0 */\n    transform: translateX(0);\n    animation-timing-function: steps(12);\n  }\n  /* pause at 13/15 for 3 frames */\n  86.67% {\n    transform: translateX(calc(var(--anim-frames) * -20px));\n  }\n  to {\n    /* end state for animation: */\n    transform: translateX(calc(var(--anim-frames) * -20px));\n  }\n}\n\n#stop-reload-button[animate] > #reload-button,\n#stop-reload-button[animate] > #stop-button {\n  position: relative;\n}\n\n#nav-bar-customization-target :where(#reload-button, #stop-button) > .toolbarbutton-icon {\n  padding: calc(var(--toolbarbutton-inner-padding) + 1px) var(--toolbarbutton-inner-padding) calc(var(--toolbarbutton-inner-padding) - 1px ) !important; /* The animation is 18px but the other icons are 16px, lower it by 1px so it is vertically centered */\n}\n\n#reload-button > .toolbarbutton-animatable-box,\n#stop-button > .toolbarbutton-animatable-box {\n  top: calc(50% - 9px); /* Vertically center the 20px tall animatable image, which is 1px higher than other icons */\n  /* Since .toolbarbutton-icon uses a different width than the animatable-box,\n     we need to set a padding relative to the difference in widths. */\n  margin-inline-start: calc((16px + 2 * var(--toolbarbutton-inner-padding) - 20px) / 2);\n  width: 20px; /* Width of each frame within the SVG sprite */\n  height: 20px; /* Height of each frame within the SVG sprite */\n}\n\n#stop-reload-button[animate] > #reload-button > .toolbarbutton-animatable-box > .toolbarbutton-animatable-image {\n  background-image: url(\"chrome://browser/skin/stop-to-reload.svg\");\n  /*\n    transition from stop icon to reload icon\n    pause at frame 0 for 6 ticks,\n    pause at frame 15 for 16 ticks\n    total 35 steps*/\n  --anim-frames: 14;\n  --anim-steps: calc(var(--anim-frames) + 21); /* Add steps for doing the pause at the start and end */\n  width: calc(20px * (var(--anim-frames) + 1));\n  height: 20px;\n\n  /* initial state for animation */\n  transform: translateX(0);\n}\n\n#stop-reload-button[animate] > #reload-button:not([displaystop]) > .toolbarbutton-animatable-box > .toolbarbutton-animatable-image {\n  animation-name: stop-to-reload;\n}\n\n#reload-button:not([displaystop]) > .toolbarbutton-animatable-box > .toolbarbutton-animatable-image {\n  animation-duration: calc(var(--anim-steps) * 16.667ms);\n}\n\n#stop-reload-button[animate] > #reload-button[displaystop] + #stop-button > .toolbarbutton-animatable-box > .toolbarbutton-animatable-image {\n  background-image: url(\"chrome://browser/skin/reload-to-stop.svg\");\n  /*\n    transition from reload icon to stop icon\n    pause at end for 3 frames of time\n    pause at ...\n    total 15 steps*/\n  --anim-frames: 12;\n  --anim-steps: calc(var(--anim-frames) + 3); /* Add steps for doing the pause at the start and end */\n  width: calc(20px * (var(--anim-frames) + 1));\n  height: 20px;\n\n  /* initial state for animation */\n  transform: translateX(0);\n}\n\n#stop-reload-button[animate] > #reload-button[displaystop] + #stop-button > .toolbarbutton-animatable-box > .toolbarbutton-animatable-image {\n  animation-name: reload-to-stop;\n  animation-duration: calc(var(--anim-steps) * 16.667ms);\n}\n\n#reload-button[displaystop] + #stop-button > .toolbarbutton-animatable-box > .toolbarbutton-animatable-image {\n  animation-timing-function: steps(15);\n  animation-duration: 0.25s;\n}\n\n#reload-button > .toolbarbutton-animatable-box > .toolbarbutton-animatable-image {\n  transform: translateX(-700px);\n}\n\n#reload-button[displaystop] + #stop-button > .toolbarbutton-animatable-box > .toolbarbutton-animatable-image {\n  transform: translateX(-300px);\n}\n\n#reload-button {\n  list-style-image: url(\"chrome://global/skin/icons/reload.svg\");\n}\n\n#stop-button {\n  list-style-image: url(\"chrome://global/skin/icons/close.svg\");\n}\n\n#home-button {\n  list-style-image: url(\"chrome://browser/skin/home.svg\");\n}\n\n#bookmarks-toolbar-button,\n#bookmarks-toolbar-placeholder {\n  list-style-image: url(\"chrome://browser/skin/bookmarks-toolbar.svg\");\n}\n\n#bookmarks-menu-button {\n  list-style-image: url(\"chrome://browser/skin/bookmark-star-on-tray.svg\");\n}\n\n#history-panelmenu {\n  list-style-image: url(\"chrome://browser/skin/history.svg\");\n}\n\n#downloads-button {\n  list-style-image: url(\"chrome://browser/skin/downloads/downloads.svg\");\n}\n\n#open-file-button {\n  list-style-image: url(\"chrome://browser/skin/open.svg\");\n}\n\n#screenshot-button {\n  list-style-image: url(\"chrome://browser/skin/screenshot.svg\");\n}\n\n#save-page-button {\n  list-style-image: url(\"chrome://browser/skin/save.svg\");\n}\n\n#sync-button {\n  list-style-image: url(\"chrome://browser/skin/synced-tabs.svg\");\n}\n\n#characterencoding-button {\n  list-style-image: url(\"chrome://browser/skin/characterEncoding.svg\");\n}\n\n#new-window-button {\n  list-style-image: url(\"chrome://browser/skin/window.svg\");\n}\n\n#new-tab-button {\n  list-style-image: url(\"chrome://browser/skin/new-tab.svg\");\n}\n\n#privatebrowsing-button {\n  list-style-image: url(\"chrome://browser/skin/privateBrowsing.svg\");\n}\n\n#find-button {\n  list-style-image: url(\"chrome://global/skin/icons/search-glass.svg\");\n}\n\n#print-button {\n  list-style-image: url(\"chrome://global/skin/icons/print.svg\");\n}\n\n#fullscreen-button {\n  list-style-image: url(\"chrome://browser/skin/fullscreen.svg\");\n}\n\n#developer-button {\n  list-style-image: url(\"chrome://global/skin/icons/developer.svg\");\n}\n\n#profiler-button-button > .toolbarbutton-icon {\n  list-style-image: url(\"chrome://devtools/skin/images/tool-profiler.svg\");\n}\n\n#profiler-button-button:not(.profiler-active) > image {\n  transform: scaleX(-1);\n}\n\n#profiler-button-button.profiler-active > image {\n  fill: #0060df;\n  fill-opacity: 1;\n  background-color: #0060df33;\n}\n\n#profiler-button-button.profiler-active:hover > image {\n  background-color: #0060df22;\n}\n\n#profiler-button-button.profiler-paused > image {\n  opacity: 0.4;\n}\n\n#preferences-button {\n  list-style-image: url(\"chrome://global/skin/icons/settings.svg\");\n}\n\n#PanelUI-menu-button {\n  list-style-image: url(\"chrome://browser/skin/menu.svg\");\n}\n\n#PanelUI-menu-button[badge-status=\"update-available\"],\n#PanelUI-menu-button[badge-status=\"update-downloading\"],\n#PanelUI-menu-button[badge-status=\"update-manual\"],\n#PanelUI-menu-button[badge-status=\"update-other-instance\"],\n#PanelUI-menu-button[badge-status=\"update-restart\"],\n#PanelUI-menu-button[badge-status=\"update-unsupported\"],\n#PanelUI-menu-button[badge-status=\"addon-alert\"],\n#PanelUI-menu-button[badge-status=\"fxa-needs-authentication\"] {\n  list-style-image: url(\"chrome://browser/skin/menu-badged.svg\");\n}\n\n#cut-button {\n  list-style-image: url(\"chrome://browser/skin/edit-cut.svg\");\n}\n\n#copy-button {\n  list-style-image: url(\"chrome://global/skin/icons/edit-copy.svg\");\n}\n\n#paste-button {\n  list-style-image: url(\"chrome://browser/skin/edit-paste.svg\");\n}\n\n#zoom-out-button {\n  list-style-image: url(\"chrome://browser/skin/zoom-out.svg\");\n}\n\n#zoom-in-button {\n  list-style-image: url(\"chrome://global/skin/icons/plus.svg\");\n}\n\n#PlacesChevron,\n#nav-bar-overflow-button {\n  list-style-image: url(\"chrome://global/skin/icons/chevron.svg\");\n}\n\n#nav-bar-overflow-button[animate] > .toolbarbutton-icon {\n  fill: transparent;\n}\n\n@keyframes overflow-animation {\n  from {\n    transform: translateX(0);\n  }\n  from {\n    transform: translateX(-832px);\n  }\n}\n\n#nav-bar-overflow-button > .toolbarbutton-animatable-box {\n  visibility: hidden;\n  top: calc(50% - 8px); /* Vertically center the 16px tall animatable image */\n  /* Since .toolbarbutton-icon uses a different width than the animatable box,\n     we need to set a padding relative to the difference in widths. */\n  margin-inline-start: calc((16px + 2 * var(--toolbarbutton-inner-padding) - 16px) / 2);\n  width: 16px; /* Width of each frame within the SVG sprite */\n  height: 16px; /* Height of each frame within the SVG sprite */\n  -moz-context-properties: fill, stroke;\n  fill: var(--toolbarbutton-icon-fill);\n  stroke: var(--toolbarbutton-icon-fill-attention);\n}\n#nav-bar-overflow-button > .toolbarbutton-animatable-box > .toolbarbutton-animatable-image {\n  background-image: url(\"chrome://browser/skin/chevron-animation.svg\");\n  width: 848px;\n  height: 16px;\n  transform: translateX(0);\n}\n\n#nav-bar-overflow-button[animate] > .toolbarbutton-animatable-box {\n  visibility: visible;\n}\n#nav-bar-overflow-button[animate] > .toolbarbutton-animatable-box > .toolbarbutton-animatable-image {\n  animation-name: overflow-animation;\n  animation-timing-function: steps(52);\n  animation-duration: calc(52 * 16.667ms);\n}\n\n#unified-extensions-button {\n  list-style-image: url(\"chrome://mozapps/skin/extensions/extension.svg\");\n}\n\n#email-link-button {\n  list-style-image: url(\"chrome://browser/skin/mail.svg\");\n}\n\n#sidebar-button {\n  list-style-image: url(\"chrome://browser/skin/sidebars-right.svg\");\n}\n\n#sidebar-button:-moz-locale-dir(ltr):not([positionend]),\n#sidebar-button:-moz-locale-dir(rtl)[positionend] {\n  list-style-image: url(\"chrome://browser/skin/sidebars.svg\");\n}\n\n#panic-button {\n  list-style-image: url(\"chrome://browser/skin/forget.svg\");\n}\n\n#panic-button[open] {\n  fill: rgb(213, 32, 20);\n}\n\ntoolbar[brighttext] #panic-button[open] {\n  fill: #ff848b;\n}\n\n#library-button {\n  list-style-image: url(\"chrome://browser/skin/library.svg\");\n}\n\n#save-to-pocket-button {\n  list-style-image: url(\"chrome://global/skin/icons/pocket-outline.svg\");\n  fill: var(--toolbarbutton-icon-fill);\n}\n\n#save-to-pocket-button[open=\"true\"],\n#save-to-pocket-button[pocketed=\"true\"] {\n  list-style-image: url(\"chrome://global/skin/icons/pocket.svg\");\n  fill: #ef4056;\n}\n\n/* ----- BOOKMARK BUTTONS ----- */\n\n.bookmark-item {\n  list-style-image: url(\"chrome://global/skin/icons/defaultFavicon.svg\");\n  -moz-context-properties: fill;\n  fill: currentColor;\n}\n\ntoolbarbutton.bookmark-item {\n  -moz-context-properties: fill, fill-opacity;\n  fill: var(--toolbarbutton-icon-fill);\n}\n\n.bookmark-item[container] {\n  list-style-image: url(\"chrome://global/skin/icons/folder.svg\");\n}\n\n.bookmark-item[container][query] {\n  list-style-image: url(\"chrome://browser/skin/places/folder-smart.svg\");\n}\n\n.bookmark-item[query][tagContainer] {\n  list-style-image: url(\"chrome://browser/skin/places/tag.svg\");\n}\n\n.bookmark-item[query][dayContainer] {\n  list-style-image: url(\"chrome://browser/skin/history.svg\");\n}\n\n.bookmark-item[query][hostContainer] {\n  list-style-image: url(\"chrome://global/skin/icons/folder.svg\");\n}\n\n#whats-new-menu-button {\n  list-style-image: url(\"chrome://global/skin/icons/whatsnew.svg\");\n}\n\n#ion-button {\n  list-style-image: url(\"chrome://browser/skin/ion.svg\");\n}\n\n#import-button {\n  list-style-image: url(\"chrome://browser/skin/import.svg\");\n}\n\n#firefox-view-button {\n  list-style-image: url(\"chrome://branding/content/icon32.png\");\n}\n"],"sourceRoot":""}]);
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

/***/ 87968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93379);
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_toolbarbutton_icons_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61657);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_toolbarbutton_icons_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_toolbarbutton_icons_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
//# sourceMappingURL=7968.675c15ed.iframe.bundle.js.map