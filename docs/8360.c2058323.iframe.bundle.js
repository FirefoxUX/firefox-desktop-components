"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[8360],{

/***/ 94215:
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
___CSS_LOADER_EXPORT___.push([module.id, "/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n@namespace html url(\"http://www.w3.org/1999/xhtml\");\n\n/* Customization mode */\n\n:root {\n  --drag-drop-transition-duration: .3s;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  :root {\n    --drag-drop-transition-duration: 0s;\n  }\n}\n\n:root[customizing] .customization-target:not(#widget-overflow-fixed-list) {\n  min-width: 100px;\n}\n\n#customization-container {\n  background-color: var(--toolbar-non-lwt-bgcolor);\n  color: var(--toolbar-color);\n}\n\n#customization-container:-moz-lwtheme {\n  /* Ensure this displays on top of the non-lwt bgcolor, to make sure it's not\n   * semi-transparent */\n  background-image: linear-gradient(var(--toolbar-bgcolor), var(--toolbar-bgcolor));\n}\n\n:root[lwtheme-image] #customization-container {\n  background-image: none;\n  color: var(--toolbar-non-lwt-textcolor);\n  text-shadow: none;\n}\n\n:root[lwtheme-image] #customization-palette .toolbarbutton-1 {\n  fill: currentColor;\n}\n\n#customization-palette {\n  padding: 5px 20px 20px;\n}\n\n#customization-header {\n  font-weight: 600;\n  font-size: 1.2em;\n  margin: 20px 20px 15px;\n}\n\n#customization-panel-container {\n  --customization-panel-padding: 20px;\n  padding: 0 var(--customization-panel-padding) 25px;\n}\n\n#customization-footer {\n  border-top: 1px solid rgba(0,0,0,.15);\n  padding: 10px;\n}\n\n@media (-moz-platform: macos),\n  (-moz-platform: windows) {\n  @media not (prefers-contrast) {\n    .customizationmode-button {\n      border: 1px solid #b1b1b1;\n      border-radius: 2px;\n      background-color: #fcfcfd;\n      appearance: none;\n    }\n\n    .customizationmode-checkbox,\n    .customizationmode-button {\n      margin: 6px 10px;\n      padding: 2px 5px;\n    }\n\n    .customizationmode-checkbox:not(:-moz-lwtheme, [disabled]),\n    .customizationmode-button {\n      color: rgb(71, 71, 71);\n    }\n\n    .customizationmode-checkbox[disabled]:-moz-lwtheme {\n      color: inherit;\n      opacity: var(--toolbarbutton-disabled-opacity);\n    }\n\n    #customization-reset-button,\n    #customization-undo-reset-button,\n    #customization-done-button {\n      min-width: 10em;\n    }\n\n    #customization-done-button {\n      color: #fff !important;\n      font-weight: 700;\n      border-color: #0060df;\n      background-color: #0a84ff;\n    }\n\n    .customizationmode-button > .box-inherit {\n      border-width: 0;\n      padding: 3px 0;\n    }\n\n    /* We use a smaller padding to ensure images don't have padding.\n     * We can't detect whether a button has an image. This button doesn't\n     * so it needs more padding, so we unfortunately hardcode the extra\n     * padding in here:\n     */\n    #customization-toolbar-visibility-button {\n      padding-inline-start: 8px;\n    }\n\n    .customizationmode-button[type=menu] > .box-inherit > .box-inherit > .button-text {\n      padding-inline-end: 10px;\n    }\n\n    .customizationmode-button > .button-icon {\n      margin-inline-start: 0;\n    }\n\n    .customizationmode-button:not([type=menu]) > .button-text {\n      margin-inline-end: 0;\n    }\n\n    .customizationmode-button > .box-inherit > .button-menu-dropmarker {\n      margin-inline-end: 0;\n      padding-inline-end: 0;\n      list-style-image: url(chrome://global/skin/icons/arrow-down.svg);\n    }\n\n    .customizationmode-button:is(:active,:hover):not([disabled]),\n    .customizationmode-button[open],\n    .customizationmode-button[checked] {\n      background-color: #e1e1e5;\n    }\n\n    #customization-done-button:is(:active,:hover):not([disabled]) {\n      background-color: #0060df;\n    }\n\n    .customizationmode-button[disabled=\"true\"] {\n      opacity: var(--toolbarbutton-disabled-opacity);\n    }\n  }\n}\n\n#customization-lwtheme-link {\n  display: flex;\n  align-items: center;\n}\n\n#widget-overflow-fixed-list > toolbarpaletteitem:not([notransition])[place=\"panel\"],\ntoolbarpaletteitem:not([notransition])[place=\"toolbar\"] {\n  transition: border-width var(--drag-drop-transition-duration) ease-in-out;\n}\n\ntoolbarpaletteitem[mousedown] {\n  cursor: -moz-grabbing;\n}\n\ntoolbarpaletteitem:not([notransition])[place=\"palette\"],\ntoolbarpaletteitem:not([notransition])[place=\"panel\"] {\n  transition: transform var(--drag-drop-transition-duration) ease-in-out;\n}\n\n#customization-palette {\n  transition: opacity .3s ease-in-out;\n  opacity: 0;\n}\n\n#customization-palette[showing=\"true\"] {\n  opacity: 1;\n}\n\n#customization-palette #firefox-view-button[attention] {\n  background-position: center bottom 8%;\n}\n\ntoolbarpaletteitem toolbarbutton[disabled] {\n  color: inherit !important;\n}\n\n#PersonalToolbar toolbarpaletteitem toolbarbutton[checked=\"true\"],\ntoolbar toolbarpaletteitem toolbarbutton[checked=\"true\"]\n  > :where(.toolbarbutton-icon, .toolbarbutton-text, .toolbarbutton-badge-stack) {\n  background-color: revert !important;\n}\n\ntoolbarpaletteitem > toolbarbutton > .toolbarbutton-icon,\ntoolbarpaletteitem > toolbarbutton > .toolbarbutton-badge-stack > .toolbarbutton-icon,\ntoolbarpaletteitem > #search-container,\ntoolbarpaletteitem > toolbaritem.toolbaritem-combined-buttons {\n  transition: transform var(--drag-drop-transition-duration) cubic-bezier(.6, 2, .75, 1.5) !important;\n}\n\ntoolbarpaletteitem[mousedown] > toolbarbutton > .toolbarbutton-icon,\ntoolbarpaletteitem[mousedown] > toolbarbutton > .toolbarbutton-badge-stack > .toolbarbutton-icon {\n  transform: scale(1.3);\n}\n\ntoolbarpaletteitem[mousedown] > #search-container,\ntoolbarpaletteitem[mousedown] > toolbaritem.toolbaritem-combined-buttons {\n  transform: scale(1.1);\n}\n\ntoolbarpaletteitem[mousedown] > #search-container > #searchbar,\ntoolbarpaletteitem[mousedown] > #urlbar-container > #urlbar > #urlbar-background\n{\n  outline: 1px solid color-mix(in srgb, currentColor 60%, transparent);\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.13);\n}\n\n/* Override the toolkit styling for items being dragged over. */\ntoolbarpaletteitem[place=\"toolbar\"] {\n  border-inline-width: 0;\n  margin-inline: 0;\n}\n#widget-overflow-fixed-list > toolbarpaletteitem[place=\"panel\"] {\n  border-block: 0 solid transparent;\n}\n\n#customization-palette:not([hidden]) {\n  margin-bottom: 20px;\n}\n\n\ntoolbarpaletteitem[place=\"palette\"]:-moz-focusring,\ntoolbarpaletteitem[place=\"panel\"]:-moz-focusring,\ntoolbarpaletteitem[place=\"toolbar\"]:-moz-focusring {\n  outline-width: 0;\n}\n\ntoolbarpaletteitem[place=\"palette\"]:not([mousedown=\"true\"]):-moz-focusring,\ntoolbarpaletteitem[place=\"panel\"]:not([mousedown=\"true\"]):-moz-focusring,\ntoolbarpaletteitem[place=\"toolbar\"]:not([mousedown=\"true\"]):-moz-focusring {\n  /* Delay adding the focusring back until after the transform transition completes. */\n  transition: outline-width .01s linear var(--drag-drop-transition-duration);\n  outline: var(--default-focusring);\n}\n\ntoolbarpaletteitem[place=\"toolbar\"]:not([mousedown=\"true\"]):-moz-focusring {\n  outline-offset: calc(-1 * var(--default-focusring-width) - 4px);\n}\n\ntoolbarpaletteitem[place=palette]::after {\n  content: attr(title);\n  display: block;\n  text-align: center;\n}\n\ntoolbarpaletteitem[place=palette] > toolbarspring {\n  width: 7em;\n  min-width: 7em;\n  outline: 1px solid;\n  outline-offset: -8px;\n  opacity: .6;\n  min-height: 37px;\n  max-height: 37px;\n}\n\ntoolbarpaletteitem[place=toolbar] > toolbarspring {\n  outline: 1px solid;\n  outline-offset: -2px;\n  opacity: .6;\n  margin-block: 5px;\n}\n\ntoolbarpaletteitem > #search-container > #searchbar > .searchbar-textbox {\n  visibility: hidden; /* Hide searchbar placeholder text in customize mode */\n}\n\n#wrapper-edit-controls > #edit-controls > toolbarbutton > .toolbarbutton-icon {\n  opacity: 1; /* To ensure these buttons always look enabled in customize mode */\n}\n\n#wrapper-zoom-controls[place=\"palette\"] > #zoom-controls > #zoom-reset-button,\n#wrapper-zoom-controls[place=\"palette\"] > #zoom-controls > #zoom-reset-button + separator {\n  display: none;\n}\n\n/* Squeeze together the multi-button toolbarpaletteitems: */\n#wrapper-zoom-controls[place=\"palette\"] > #zoom-controls > #zoom-out-button,\n#wrapper-edit-controls[place=\"palette\"] > #edit-controls > #cut-button,\n#wrapper-profiler-button[place=\"palette\"] > #profiler-button > #profiler-button-button {\n  -moz-box-align: end;\n}\n#wrapper-zoom-controls[place=\"palette\"] > #zoom-controls > #zoom-in-button,\n#wrapper-edit-controls[place=\"palette\"] > #edit-controls > #paste-button,\n#wrapper-profiler-button[place=\"palette\"] > #profiler-button > #profiler-button-dropmarker {\n  -moz-box-align: start;\n}\n#wrapper-edit-controls[place=\"palette\"] > #edit-controls > #copy-button {\n  -moz-box-flex: 0;\n}\n\n#customization-uidensity-touch-spacer {\n  border-top: 1px solid var(--panel-separator-color);\n  margin: 6px calc(-1 * var(--arrowpanel-padding)) 9px;\n}\n\n#customization-uidensity-autotouchmode-checkbox {\n  margin-bottom: var(--arrowpanel-padding);\n}\n\n#customization-uidensity-menu {\n  font: menu;\n  margin-inline: 0;\n\n  /* Make the panel padding uniform across all platforms due to the\n     styling of the section headers and footer. */\n  --arrowpanel-padding: 8px;\n}\n\n.customization-uidensity-menuitem > .menu-iconic-left > .menu-iconic-icon {\n  width: 32px;\n  height: 32px;\n  margin: 5px;\n}\n\n.customization-uidensity-menuitem {\n  appearance: none;\n  color: inherit;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  padding-block: 0;\n  padding-inline: 0 5px;\n  margin: 2px 0;\n}\n\n#customization-uidensity-menuitem-normal {\n  list-style-image: url(\"chrome://browser/skin/customizableui/density-normal.svg\");\n}\n\n#customization-uidensity-menuitem-compact {\n  list-style-image: url(\"chrome://browser/skin/customizableui/density-compact.svg\");\n}\n\n#customization-uidensity-menuitem-touch {\n  list-style-image: url(\"chrome://browser/skin/customizableui/density-touch.svg\");\n}\n\n.customization-uidensity-menuitem:is(:hover, :focus-visible) {\n  background-color: var(--button-hover-bgcolor);\n}\n\n.customization-uidensity-menuitem:is(:hover:active, [active=\"true\"]) {\n  background-color: var(--button-active-bgcolor);\n}\n\n.customization-uidensity-menuitem > .menu-iconic-text {\n  text-align: start;\n}\n\n.customization-uidensity-menuitem > .menu-iconic-left > .menu-iconic-icon:-moz-locale-dir(rtl) {\n  transform: scaleX(-1);\n}\n\n#customization-uidensity-button > .box-inherit > .box-inherit > .button-icon:-moz-locale-dir(rtl) {\n  transform: scaleX(-1);\n}\n\n#customization-panelWrapper > .panel-arrowcontent {\n  color: var(--arrowpanel-color);\n  background: var(--arrowpanel-background);\n  background-clip: padding-box;\n  max-width: 29em;\n}\n\n@media (-moz-platform: macos) {\n  #customization-panelWrapper > .panel-arrowcontent {\n    /* Native styling adds more 'oompf' to the popup box-shadow, so simulate that\n     * as best as we can here: */\n    box-shadow: 0 0 1px hsla(0,0%,0%,.3), 0 4px 10px hsla(0,0%,0%,.3);\n    appearance: none;\n    border-radius: var(--arrowpanel-border-radius);\n  }\n}\n\n@media not (-moz-platform: macos) {\n  #customization-panelWrapper > .panel-arrowcontent {\n    border: 1px solid var(--arrowpanel-border-color);\n    margin: 0;\n    box-shadow: 0 0 4px hsla(0,0%,0%,.2);\n  }\n}\n\n#customization-panelWrapper > .panel-arrowbox {\n  display: block;\n  position: relative;\n  height: 10px;\n  margin-bottom: -1px;\n}\n\n/* Special-case the overflow and the hamburger button so they show up disabled\n   in customize mode. */\n:is(#nav-bar-overflow-button, #PanelUI-menu-button)[disabled] {\n  fill-opacity: var(--toolbarbutton-disabled-opacity);\n}\n\n/* The overflow button should look both disabled and open. */\n#nav-bar[customizing] > #nav-bar-overflow-button > .toolbarbutton-icon {\n  background-color: var(--toolbarbutton-active-background);\n}\n\n#customization-panelWrapper > .panel-arrowbox > .panel-arrow[side=\"top\"] {\n  list-style-image: url(\"chrome://global/skin/arrow/panelarrow-vertical.svg\");\n  -moz-context-properties: fill, stroke;\n  fill: var(--arrowpanel-background);\n  stroke: var(--arrowpanel-border-color);\n  /* JS code sets --panel-arrow-offset to the distance between the middle of the\n   * overflow button and the end of the window. We subtract the padding of our\n   * container (#customization-panel-container) and half our own width:\n   */\n  margin-inline-end: calc(var(--panel-arrow-offset) - var(--customization-panel-padding) - 10px);\n  vertical-align: top;\n}\n\n@media (-moz-platform: macos) {\n  #customization-panelWrapper > .panel-arrowbox > .panel-arrow[side=\"top\"] {\n    /* The OS X image is 2px narrower than the windows/linux one.\n     * Add padding to compensate: */\n    padding: 0 1px;\n    /* specify width for hidpi image to fit correctly */\n    width: 20px;\n  }\n}\n\n#customization-panelDescription {\n  font-size: 1.1em;\n  padding: 2px 12px 10px;\n  margin: 0;\n}\n\n#customization-panelHeader {\n  font-size: 1.3em;\n  font-weight: 600;\n  padding: 2px 12px;\n  margin: 0;\n}\n\n#customization-panelHolder > #widget-overflow-fixed-list {\n  padding-top: 10px;\n}\n\n/**\n * We create a ::before pseudoelement that contains a background image to show the\n * drop dragon. This element fades in and out depending on whether the containing\n * panel list is empty and unhovered, or not.\n */\n#customization-panelHolder > #widget-overflow-fixed-list:not(:empty) {\n  padding-bottom: 50px; /* Make sure there's always space to drop stuff. */\n  border-top: 1px solid var(--panel-separator-color);\n}\n\n#customization-panelHolder > #widget-overflow-fixed-list::before {\n  display: block;\n  content: \"\";\n  background-image: url(\"chrome://browser/skin/customizableui/empty-overflow-panel.png\");\n  background-position: center bottom 10px;\n  background-size: 218px 134px;\n  background-repeat: no-repeat;\n  opacity: 0;\n  transition: opacity 300ms ease-out;\n  padding-bottom: 154px; /* 154 = 134 for the image, 10px space on either side. */\n  margin-bottom: -154px; /* don't affect positioning of the actual contents */\n  pointer-events: none;\n}\n\n@media (min-resolution: 1.1dppx) {\n  #customization-panelHolder > #widget-overflow-fixed-list::before {\n    background-image: url(\"chrome://browser/skin/customizableui/empty-overflow-panel@2x.png\");\n  }\n}\n\n#customization-panelHolder > #widget-overflow-fixed-list:empty::before {\n  opacity: 1;\n}\n#customization-panelHolder > #widget-overflow-fixed-list[draggingover]:empty::before {\n  opacity: 0;\n}\n\n#downloads-button-autohide-panel {\n  --arrowpanel-padding: 5px 12px;\n}\n\n#downloads-button-autohide-checkbox {\n  margin: 0;\n  padding: 0;\n}\n\n#whimsy-button {\n  /* Don't need HiDPI versions since the size used will be scaled down to 20x20. */\n  list-style-image: url(\"chrome://browser/skin/customizableui/whimsy.png\");\n}\n\n#whimsy-button > .button-box > .button-icon {\n  width: 16px;\n  height: 16px;\n}\n\n#customization-palette[whimsypong] {\n  /* Keep the palette in the render tree but invisible\n     so -moz-element() will work. */\n  padding: 0;\n  min-height: 0;\n  max-height: 0;\n}\n\n#customization-palette[whimsypong] > toolbarpaletteitem > toolbarspring {\n  margin: 0 -7px;\n}\n\n@media (-moz-platform: linux) {\n  #customization-palette[whimsypong] > toolbarpaletteitem[id^=\"wrapper-customizableui-special-spring\"] {\n    font-size: 12px;\n  }\n}\n\n#wp-lives,\n#wp-ball {\n  /* Don't need HiDPI versions since the size used will be scaled down to 20x20. */\n  background-image: url(\"chrome://browser/skin/customizableui/whimsy.png\");\n  background-size: contain;\n  width: 20px;\n}\n\n#customization-pong-arena {\n  width: 300px;\n  height: 300px;\n  border-inline: 1px solid currentColor;\n  margin: 16px auto 0;\n  box-sizing: content-box;\n}\n\n#customization-palette[whimsypong] > toolbarpaletteitem[kcode],\n#customization-pong-arena[kcode] {\n  animation-name: kcode;\n  animation-timing-function: steps(5);\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n}\n\n#wp-ball {\n  margin-inline-start: -10px;\n  margin-top: -10px;\n  height: 20px;\n}\n\n#wp-player1,\n#wp-player2 {\n  width: 84px;\n  height: calc(39px + 3em);\n}\n\n#wp-player1,\n#wp-player2,\n#wp-ball,\n#wp-score {\n  display: block;\n  position: fixed;\n}\n\n#wp-score {\n  transform: translateX(-4ch);\n}\n\n#wp-score:-moz-locale-dir(rtl) {\n  transform: translateX(4ch);\n}\n\n#wp-lives {\n  transform: translate(-4ch, 1ch);\n}\n\n#wp-lives:-moz-locale-dir(rtl) {\n  transform: translate(4ch, 1ch);\n}\n\n#wp-lives[lives=\"5\"] {\n  height: 100px;\n}\n\n#wp-lives[lives=\"4\"] {\n  height: 80px;\n}\n\n#wp-lives[lives=\"3\"] {\n  height: 60px;\n}\n\n#wp-lives[lives=\"2\"] {\n  height: 40px;\n}\n\n#wp-lives[lives=\"1\"] {\n  height: 20px;\n}\n\n#customization-pong-arena[lives=\"0\"] > #wp-ball {\n  animation: game-over 4s forwards ease;\n}\n\n@keyframes game-over {\n  0% {\n    transform: scale(1) translateY(0) rotateZ(0);\n    opacity: 1;\n  }\n  15% {\n    transform: scale(2) translateY(-10px) rotateZ(-90deg);\n  }\n  35% {\n    opacity: 1;\n  }\n  65% {\n    opacity: 0;\n  }\n  100% {\n    transform: scale(2) translateY(300px) rotateZ(-2.5turn);\n    opacity: 0;\n  }\n}\n\n@keyframes kcode {\n  0% { border-color: rgb(195,17,206); color: rgb(195,17,206); }\n  20% { border-color: rgb(252,82,27); color: rgb(252,82,27); }\n  40% { border-color: rgb(251,179,0); color: rgb(251,179,0); }\n  60% { border-color: rgb(105,211,0); color: rgb(105,211,0); }\n  80% { border-color: rgb(20,155,249); color: rgb(20,155,249); }\n  100% { border-color: rgb(195,17,206); color: rgb(195,17,206); }\n}\n", "",{"version":3,"sources":["webpack://./../../themes/shared/customizableui/customizeMode.css"],"names":[],"mappings":"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","sourcesContent":["/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n@namespace html url(\"http://www.w3.org/1999/xhtml\");\n\n/* Customization mode */\n\n:root {\n  --drag-drop-transition-duration: .3s;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  :root {\n    --drag-drop-transition-duration: 0s;\n  }\n}\n\n:root[customizing] .customization-target:not(#widget-overflow-fixed-list) {\n  min-width: 100px;\n}\n\n#customization-container {\n  background-color: var(--toolbar-non-lwt-bgcolor);\n  color: var(--toolbar-color);\n}\n\n#customization-container:-moz-lwtheme {\n  /* Ensure this displays on top of the non-lwt bgcolor, to make sure it's not\n   * semi-transparent */\n  background-image: linear-gradient(var(--toolbar-bgcolor), var(--toolbar-bgcolor));\n}\n\n:root[lwtheme-image] #customization-container {\n  background-image: none;\n  color: var(--toolbar-non-lwt-textcolor);\n  text-shadow: none;\n}\n\n:root[lwtheme-image] #customization-palette .toolbarbutton-1 {\n  fill: currentColor;\n}\n\n#customization-palette {\n  padding: 5px 20px 20px;\n}\n\n#customization-header {\n  font-weight: 600;\n  font-size: 1.2em;\n  margin: 20px 20px 15px;\n}\n\n#customization-panel-container {\n  --customization-panel-padding: 20px;\n  padding: 0 var(--customization-panel-padding) 25px;\n}\n\n#customization-footer {\n  border-top: 1px solid rgba(0,0,0,.15);\n  padding: 10px;\n}\n\n@media (-moz-platform: macos),\n  (-moz-platform: windows) {\n  @media not (prefers-contrast) {\n    .customizationmode-button {\n      border: 1px solid #b1b1b1;\n      border-radius: 2px;\n      background-color: #fcfcfd;\n      appearance: none;\n    }\n\n    .customizationmode-checkbox,\n    .customizationmode-button {\n      margin: 6px 10px;\n      padding: 2px 5px;\n    }\n\n    .customizationmode-checkbox:not(:-moz-lwtheme, [disabled]),\n    .customizationmode-button {\n      color: rgb(71, 71, 71);\n    }\n\n    .customizationmode-checkbox[disabled]:-moz-lwtheme {\n      color: inherit;\n      opacity: var(--toolbarbutton-disabled-opacity);\n    }\n\n    #customization-reset-button,\n    #customization-undo-reset-button,\n    #customization-done-button {\n      min-width: 10em;\n    }\n\n    #customization-done-button {\n      color: #fff !important;\n      font-weight: 700;\n      border-color: #0060df;\n      background-color: #0a84ff;\n    }\n\n    .customizationmode-button > .box-inherit {\n      border-width: 0;\n      padding: 3px 0;\n    }\n\n    /* We use a smaller padding to ensure images don't have padding.\n     * We can't detect whether a button has an image. This button doesn't\n     * so it needs more padding, so we unfortunately hardcode the extra\n     * padding in here:\n     */\n    #customization-toolbar-visibility-button {\n      padding-inline-start: 8px;\n    }\n\n    .customizationmode-button[type=menu] > .box-inherit > .box-inherit > .button-text {\n      padding-inline-end: 10px;\n    }\n\n    .customizationmode-button > .button-icon {\n      margin-inline-start: 0;\n    }\n\n    .customizationmode-button:not([type=menu]) > .button-text {\n      margin-inline-end: 0;\n    }\n\n    .customizationmode-button > .box-inherit > .button-menu-dropmarker {\n      margin-inline-end: 0;\n      padding-inline-end: 0;\n      list-style-image: url(chrome://global/skin/icons/arrow-down.svg);\n    }\n\n    .customizationmode-button:is(:active,:hover):not([disabled]),\n    .customizationmode-button[open],\n    .customizationmode-button[checked] {\n      background-color: #e1e1e5;\n    }\n\n    #customization-done-button:is(:active,:hover):not([disabled]) {\n      background-color: #0060df;\n    }\n\n    .customizationmode-button[disabled=\"true\"] {\n      opacity: var(--toolbarbutton-disabled-opacity);\n    }\n  }\n}\n\n#customization-lwtheme-link {\n  display: flex;\n  align-items: center;\n}\n\n#widget-overflow-fixed-list > toolbarpaletteitem:not([notransition])[place=\"panel\"],\ntoolbarpaletteitem:not([notransition])[place=\"toolbar\"] {\n  transition: border-width var(--drag-drop-transition-duration) ease-in-out;\n}\n\ntoolbarpaletteitem[mousedown] {\n  cursor: -moz-grabbing;\n}\n\ntoolbarpaletteitem:not([notransition])[place=\"palette\"],\ntoolbarpaletteitem:not([notransition])[place=\"panel\"] {\n  transition: transform var(--drag-drop-transition-duration) ease-in-out;\n}\n\n#customization-palette {\n  transition: opacity .3s ease-in-out;\n  opacity: 0;\n}\n\n#customization-palette[showing=\"true\"] {\n  opacity: 1;\n}\n\n#customization-palette #firefox-view-button[attention] {\n  background-position: center bottom 8%;\n}\n\ntoolbarpaletteitem toolbarbutton[disabled] {\n  color: inherit !important;\n}\n\n#PersonalToolbar toolbarpaletteitem toolbarbutton[checked=\"true\"],\ntoolbar toolbarpaletteitem toolbarbutton[checked=\"true\"]\n  > :where(.toolbarbutton-icon, .toolbarbutton-text, .toolbarbutton-badge-stack) {\n  background-color: revert !important;\n}\n\ntoolbarpaletteitem > toolbarbutton > .toolbarbutton-icon,\ntoolbarpaletteitem > toolbarbutton > .toolbarbutton-badge-stack > .toolbarbutton-icon,\ntoolbarpaletteitem > #search-container,\ntoolbarpaletteitem > toolbaritem.toolbaritem-combined-buttons {\n  transition: transform var(--drag-drop-transition-duration) cubic-bezier(.6, 2, .75, 1.5) !important;\n}\n\ntoolbarpaletteitem[mousedown] > toolbarbutton > .toolbarbutton-icon,\ntoolbarpaletteitem[mousedown] > toolbarbutton > .toolbarbutton-badge-stack > .toolbarbutton-icon {\n  transform: scale(1.3);\n}\n\ntoolbarpaletteitem[mousedown] > #search-container,\ntoolbarpaletteitem[mousedown] > toolbaritem.toolbaritem-combined-buttons {\n  transform: scale(1.1);\n}\n\ntoolbarpaletteitem[mousedown] > #search-container > #searchbar,\ntoolbarpaletteitem[mousedown] > #urlbar-container > #urlbar > #urlbar-background\n{\n  outline: 1px solid color-mix(in srgb, currentColor 60%, transparent);\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.13);\n}\n\n/* Override the toolkit styling for items being dragged over. */\ntoolbarpaletteitem[place=\"toolbar\"] {\n  border-inline-width: 0;\n  margin-inline: 0;\n}\n#widget-overflow-fixed-list > toolbarpaletteitem[place=\"panel\"] {\n  border-block: 0 solid transparent;\n}\n\n#customization-palette:not([hidden]) {\n  margin-bottom: 20px;\n}\n\n\ntoolbarpaletteitem[place=\"palette\"]:-moz-focusring,\ntoolbarpaletteitem[place=\"panel\"]:-moz-focusring,\ntoolbarpaletteitem[place=\"toolbar\"]:-moz-focusring {\n  outline-width: 0;\n}\n\ntoolbarpaletteitem[place=\"palette\"]:not([mousedown=\"true\"]):-moz-focusring,\ntoolbarpaletteitem[place=\"panel\"]:not([mousedown=\"true\"]):-moz-focusring,\ntoolbarpaletteitem[place=\"toolbar\"]:not([mousedown=\"true\"]):-moz-focusring {\n  /* Delay adding the focusring back until after the transform transition completes. */\n  transition: outline-width .01s linear var(--drag-drop-transition-duration);\n  outline: var(--default-focusring);\n}\n\ntoolbarpaletteitem[place=\"toolbar\"]:not([mousedown=\"true\"]):-moz-focusring {\n  outline-offset: calc(-1 * var(--default-focusring-width) - 4px);\n}\n\ntoolbarpaletteitem[place=palette]::after {\n  content: attr(title);\n  display: block;\n  text-align: center;\n}\n\ntoolbarpaletteitem[place=palette] > toolbarspring {\n  width: 7em;\n  min-width: 7em;\n  outline: 1px solid;\n  outline-offset: -8px;\n  opacity: .6;\n  min-height: 37px;\n  max-height: 37px;\n}\n\ntoolbarpaletteitem[place=toolbar] > toolbarspring {\n  outline: 1px solid;\n  outline-offset: -2px;\n  opacity: .6;\n  margin-block: 5px;\n}\n\ntoolbarpaletteitem > #search-container > #searchbar > .searchbar-textbox {\n  visibility: hidden; /* Hide searchbar placeholder text in customize mode */\n}\n\n#wrapper-edit-controls > #edit-controls > toolbarbutton > .toolbarbutton-icon {\n  opacity: 1; /* To ensure these buttons always look enabled in customize mode */\n}\n\n#wrapper-zoom-controls[place=\"palette\"] > #zoom-controls > #zoom-reset-button,\n#wrapper-zoom-controls[place=\"palette\"] > #zoom-controls > #zoom-reset-button + separator {\n  display: none;\n}\n\n/* Squeeze together the multi-button toolbarpaletteitems: */\n#wrapper-zoom-controls[place=\"palette\"] > #zoom-controls > #zoom-out-button,\n#wrapper-edit-controls[place=\"palette\"] > #edit-controls > #cut-button,\n#wrapper-profiler-button[place=\"palette\"] > #profiler-button > #profiler-button-button {\n  -moz-box-align: end;\n}\n#wrapper-zoom-controls[place=\"palette\"] > #zoom-controls > #zoom-in-button,\n#wrapper-edit-controls[place=\"palette\"] > #edit-controls > #paste-button,\n#wrapper-profiler-button[place=\"palette\"] > #profiler-button > #profiler-button-dropmarker {\n  -moz-box-align: start;\n}\n#wrapper-edit-controls[place=\"palette\"] > #edit-controls > #copy-button {\n  -moz-box-flex: 0;\n}\n\n#customization-uidensity-touch-spacer {\n  border-top: 1px solid var(--panel-separator-color);\n  margin: 6px calc(-1 * var(--arrowpanel-padding)) 9px;\n}\n\n#customization-uidensity-autotouchmode-checkbox {\n  margin-bottom: var(--arrowpanel-padding);\n}\n\n#customization-uidensity-menu {\n  font: menu;\n  margin-inline: 0;\n\n  /* Make the panel padding uniform across all platforms due to the\n     styling of the section headers and footer. */\n  --arrowpanel-padding: 8px;\n}\n\n.customization-uidensity-menuitem > .menu-iconic-left > .menu-iconic-icon {\n  width: 32px;\n  height: 32px;\n  margin: 5px;\n}\n\n.customization-uidensity-menuitem {\n  appearance: none;\n  color: inherit;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  padding-block: 0;\n  padding-inline: 0 5px;\n  margin: 2px 0;\n}\n\n#customization-uidensity-menuitem-normal {\n  list-style-image: url(\"chrome://browser/skin/customizableui/density-normal.svg\");\n}\n\n#customization-uidensity-menuitem-compact {\n  list-style-image: url(\"chrome://browser/skin/customizableui/density-compact.svg\");\n}\n\n#customization-uidensity-menuitem-touch {\n  list-style-image: url(\"chrome://browser/skin/customizableui/density-touch.svg\");\n}\n\n.customization-uidensity-menuitem:is(:hover, :focus-visible) {\n  background-color: var(--button-hover-bgcolor);\n}\n\n.customization-uidensity-menuitem:is(:hover:active, [active=\"true\"]) {\n  background-color: var(--button-active-bgcolor);\n}\n\n.customization-uidensity-menuitem > .menu-iconic-text {\n  text-align: start;\n}\n\n.customization-uidensity-menuitem > .menu-iconic-left > .menu-iconic-icon:-moz-locale-dir(rtl) {\n  transform: scaleX(-1);\n}\n\n#customization-uidensity-button > .box-inherit > .box-inherit > .button-icon:-moz-locale-dir(rtl) {\n  transform: scaleX(-1);\n}\n\n#customization-panelWrapper > .panel-arrowcontent {\n  color: var(--arrowpanel-color);\n  background: var(--arrowpanel-background);\n  background-clip: padding-box;\n  max-width: 29em;\n}\n\n@media (-moz-platform: macos) {\n  #customization-panelWrapper > .panel-arrowcontent {\n    /* Native styling adds more 'oompf' to the popup box-shadow, so simulate that\n     * as best as we can here: */\n    box-shadow: 0 0 1px hsla(0,0%,0%,.3), 0 4px 10px hsla(0,0%,0%,.3);\n    appearance: none;\n    border-radius: var(--arrowpanel-border-radius);\n  }\n}\n\n@media not (-moz-platform: macos) {\n  #customization-panelWrapper > .panel-arrowcontent {\n    border: 1px solid var(--arrowpanel-border-color);\n    margin: 0;\n    box-shadow: 0 0 4px hsla(0,0%,0%,.2);\n  }\n}\n\n#customization-panelWrapper > .panel-arrowbox {\n  display: block;\n  position: relative;\n  height: 10px;\n  margin-bottom: -1px;\n}\n\n/* Special-case the overflow and the hamburger button so they show up disabled\n   in customize mode. */\n:is(#nav-bar-overflow-button, #PanelUI-menu-button)[disabled] {\n  fill-opacity: var(--toolbarbutton-disabled-opacity);\n}\n\n/* The overflow button should look both disabled and open. */\n#nav-bar[customizing] > #nav-bar-overflow-button > .toolbarbutton-icon {\n  background-color: var(--toolbarbutton-active-background);\n}\n\n#customization-panelWrapper > .panel-arrowbox > .panel-arrow[side=\"top\"] {\n  list-style-image: url(\"chrome://global/skin/arrow/panelarrow-vertical.svg\");\n  -moz-context-properties: fill, stroke;\n  fill: var(--arrowpanel-background);\n  stroke: var(--arrowpanel-border-color);\n  /* JS code sets --panel-arrow-offset to the distance between the middle of the\n   * overflow button and the end of the window. We subtract the padding of our\n   * container (#customization-panel-container) and half our own width:\n   */\n  margin-inline-end: calc(var(--panel-arrow-offset) - var(--customization-panel-padding) - 10px);\n  vertical-align: top;\n}\n\n@media (-moz-platform: macos) {\n  #customization-panelWrapper > .panel-arrowbox > .panel-arrow[side=\"top\"] {\n    /* The OS X image is 2px narrower than the windows/linux one.\n     * Add padding to compensate: */\n    padding: 0 1px;\n    /* specify width for hidpi image to fit correctly */\n    width: 20px;\n  }\n}\n\n#customization-panelDescription {\n  font-size: 1.1em;\n  padding: 2px 12px 10px;\n  margin: 0;\n}\n\n#customization-panelHeader {\n  font-size: 1.3em;\n  font-weight: 600;\n  padding: 2px 12px;\n  margin: 0;\n}\n\n#customization-panelHolder > #widget-overflow-fixed-list {\n  padding-top: 10px;\n}\n\n/**\n * We create a ::before pseudoelement that contains a background image to show the\n * drop dragon. This element fades in and out depending on whether the containing\n * panel list is empty and unhovered, or not.\n */\n#customization-panelHolder > #widget-overflow-fixed-list:not(:empty) {\n  padding-bottom: 50px; /* Make sure there's always space to drop stuff. */\n  border-top: 1px solid var(--panel-separator-color);\n}\n\n#customization-panelHolder > #widget-overflow-fixed-list::before {\n  display: block;\n  content: \"\";\n  background-image: url(\"chrome://browser/skin/customizableui/empty-overflow-panel.png\");\n  background-position: center bottom 10px;\n  background-size: 218px 134px;\n  background-repeat: no-repeat;\n  opacity: 0;\n  transition: opacity 300ms ease-out;\n  padding-bottom: 154px; /* 154 = 134 for the image, 10px space on either side. */\n  margin-bottom: -154px; /* don't affect positioning of the actual contents */\n  pointer-events: none;\n}\n\n@media (min-resolution: 1.1dppx) {\n  #customization-panelHolder > #widget-overflow-fixed-list::before {\n    background-image: url(\"chrome://browser/skin/customizableui/empty-overflow-panel@2x.png\");\n  }\n}\n\n#customization-panelHolder > #widget-overflow-fixed-list:empty::before {\n  opacity: 1;\n}\n#customization-panelHolder > #widget-overflow-fixed-list[draggingover]:empty::before {\n  opacity: 0;\n}\n\n#downloads-button-autohide-panel {\n  --arrowpanel-padding: 5px 12px;\n}\n\n#downloads-button-autohide-checkbox {\n  margin: 0;\n  padding: 0;\n}\n\n#whimsy-button {\n  /* Don't need HiDPI versions since the size used will be scaled down to 20x20. */\n  list-style-image: url(\"chrome://browser/skin/customizableui/whimsy.png\");\n}\n\n#whimsy-button > .button-box > .button-icon {\n  width: 16px;\n  height: 16px;\n}\n\n#customization-palette[whimsypong] {\n  /* Keep the palette in the render tree but invisible\n     so -moz-element() will work. */\n  padding: 0;\n  min-height: 0;\n  max-height: 0;\n}\n\n#customization-palette[whimsypong] > toolbarpaletteitem > toolbarspring {\n  margin: 0 -7px;\n}\n\n@media (-moz-platform: linux) {\n  #customization-palette[whimsypong] > toolbarpaletteitem[id^=\"wrapper-customizableui-special-spring\"] {\n    font-size: 12px;\n  }\n}\n\n#wp-lives,\n#wp-ball {\n  /* Don't need HiDPI versions since the size used will be scaled down to 20x20. */\n  background-image: url(\"chrome://browser/skin/customizableui/whimsy.png\");\n  background-size: contain;\n  width: 20px;\n}\n\n#customization-pong-arena {\n  width: 300px;\n  height: 300px;\n  border-inline: 1px solid currentColor;\n  margin: 16px auto 0;\n  box-sizing: content-box;\n}\n\n#customization-palette[whimsypong] > toolbarpaletteitem[kcode],\n#customization-pong-arena[kcode] {\n  animation-name: kcode;\n  animation-timing-function: steps(5);\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n}\n\n#wp-ball {\n  margin-inline-start: -10px;\n  margin-top: -10px;\n  height: 20px;\n}\n\n#wp-player1,\n#wp-player2 {\n  width: 84px;\n  height: calc(39px + 3em);\n}\n\n#wp-player1,\n#wp-player2,\n#wp-ball,\n#wp-score {\n  display: block;\n  position: fixed;\n}\n\n#wp-score {\n  transform: translateX(-4ch);\n}\n\n#wp-score:-moz-locale-dir(rtl) {\n  transform: translateX(4ch);\n}\n\n#wp-lives {\n  transform: translate(-4ch, 1ch);\n}\n\n#wp-lives:-moz-locale-dir(rtl) {\n  transform: translate(4ch, 1ch);\n}\n\n#wp-lives[lives=\"5\"] {\n  height: 100px;\n}\n\n#wp-lives[lives=\"4\"] {\n  height: 80px;\n}\n\n#wp-lives[lives=\"3\"] {\n  height: 60px;\n}\n\n#wp-lives[lives=\"2\"] {\n  height: 40px;\n}\n\n#wp-lives[lives=\"1\"] {\n  height: 20px;\n}\n\n#customization-pong-arena[lives=\"0\"] > #wp-ball {\n  animation: game-over 4s forwards ease;\n}\n\n@keyframes game-over {\n  0% {\n    transform: scale(1) translateY(0) rotateZ(0);\n    opacity: 1;\n  }\n  15% {\n    transform: scale(2) translateY(-10px) rotateZ(-90deg);\n  }\n  35% {\n    opacity: 1;\n  }\n  65% {\n    opacity: 0;\n  }\n  100% {\n    transform: scale(2) translateY(300px) rotateZ(-2.5turn);\n    opacity: 0;\n  }\n}\n\n@keyframes kcode {\n  0% { border-color: rgb(195,17,206); color: rgb(195,17,206); }\n  20% { border-color: rgb(252,82,27); color: rgb(252,82,27); }\n  40% { border-color: rgb(251,179,0); color: rgb(251,179,0); }\n  60% { border-color: rgb(105,211,0); color: rgb(105,211,0); }\n  80% { border-color: rgb(20,155,249); color: rgb(20,155,249); }\n  100% { border-color: rgb(195,17,206); color: rgb(195,17,206); }\n}\n"],"sourceRoot":""}]);
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

/***/ 65909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93379);
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_customizeMode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94215);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_customizeMode_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_customizeMode_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
//# sourceMappingURL=8360.c2058323.iframe.bundle.js.map