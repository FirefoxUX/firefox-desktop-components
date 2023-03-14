"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[641],{

/***/ 36255:
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
___CSS_LOADER_EXPORT___.push([module.id, "/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n@namespace html url(\"http://www.w3.org/1999/xhtml\");\n\n:root {\n  --tab-min-height: 36px;\n  --inline-tab-padding: 8px;\n  /* Value for --in-content-page-background in in-content/common.inc.css */\n  --tabpanel-background-color: #f9f9fa;\n  --tab-border-radius: 4px;\n  --tab-shadow-max-size: 6px;\n  --tab-block-margin: 4px;\n  /* --tabpanel-background-color matches $in-content-page-background in newtab\n     (browser/components/newtab/content-src/styles/_variables.scss) */\n  --tabpanel-background-color: #F9F9FB;\n  --tab-attention-icon-color: var(--lwt-tab-attention-icon-color, rgb(42,195,162));\n}\n\n#tabbrowser-tabpanels browser[type=content] {\n  color-scheme: env(-moz-content-preferred-color-scheme);\n}\n\n@media (-moz-content-prefers-color-scheme: dark) {\n  :root {\n    /* --tabpanel-background-color matches $in-content-page-background in newtab\n       (browser/components/newtab/content-src/styles/_variables.scss) */\n    --tabpanel-background-color: #2B2A33;\n  }\n}\n\n:root[privatebrowsingmode=temporary] {\n  /* Value for --in-content-page-background in aboutPrivateBrowsing.css.\n     !important overrides the direct setting of this variable in\n     ThemeVariableMap.sys.mjs when the user has a theme that defines\n     ntp_background. */\n  --tabpanel-background-color: #25003e !important;\n}\n\n:root[uidensity=compact] {\n  --tab-min-height: 29px;\n}\n\n:root[uidensity=touch] {\n  --tab-min-height: 41px;\n}\n\n#tabbrowser-tabs {\n  --tab-min-width: 76px;\n  --tab-loading-fill: #0A84FF;\n  --tab-overflow-pinned-tabs-width: 0px;\n  padding-inline: var(--tab-overflow-pinned-tabs-width) 0;\n  /* Use a bigger flex value than the searchbar to prevent it from\n   * taking all the toolbar space. */\n  flex: 1000 1000;\n}\n\n#tabbrowser-tabpanels {\n  appearance: none;\n  padding: 0;\n  color-scheme: unset;\n  background-color: var(--tabpanel-background-color);\n}\n\n#tabbrowser-tabs,\n#tabbrowser-arrowscrollbox,\n#tabbrowser-tabs[positionpinnedtabs] > #tabbrowser-arrowscrollbox > .tabbrowser-tab[pinned] {\n  min-height: var(--tab-min-height);\n}\n\n.tab-background,\n.tab-stack {\n  min-height: inherit;\n}\n\n#tabbrowser-tabs[positionpinnedtabs] > #tabbrowser-arrowscrollbox::part(scrollbox) {\n  /* Add padding to match the shadow's blur radius so the\n    shadow doesn't get clipped when either the first or\n    last tab is selected */\n  padding-inline: var(--tab-shadow-max-size);\n}\n\n#tabbrowser-arrowscrollbox::part(scrollbox-clip) {\n  /* Needed to prevent tabstrip from growing as wide as the sum of the tabs'\n     page-title widths when emulating XUL with modern flexbox. */\n  contain: inline-size;\n}\n\n.tabbrowser-tab {\n  appearance: none;\n  background-color: transparent;\n  color-scheme: unset;\n  border-radius: 0;\n  border-width: 0;\n  margin: 0;\n  padding: 0 2px;\n  align-items: stretch;\n  /* Needed so that overflowing content overflows towards the end rather than\n     getting centered. That prevents tab opening animation from looking off at\n     the start, see bug 1759221. */\n  justify-content: flex-start;\n  overflow: clip;\n  /* Needed to avoid clipping the tab-background shadow, which has a 4px blur\n   * (we only have 2px padding in the inline direction) */\n  overflow-clip-margin: 2px;\n  min-height: var(--tab-min-height);\n}\n\n/* tabbrowser-tab keyboard focus */\n.keyboard-focused-tab > .tab-stack > .tab-background,\n.tabbrowser-tab:focus:not([aria-activedescendant]) > .tab-stack > .tab-background {\n  outline: var(--focus-outline);\n  outline-offset: var(--focus-outline-inset);\n}\n\n.tab-content {\n  padding: 0 var(--inline-tab-padding);\n  min-width: 0;\n}\n\n:root:not([uidensity=compact]) .tab-content[pinned] {\n  padding: 0 10px;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .tab-loading-burst {\n    border-radius: inherit;\n    position: relative;\n    overflow: hidden;\n  }\n\n  .tab-loading-burst::before {\n    position: absolute;\n    content: \"\";\n    /* We set the width to be a percentage of the tab's width so that we can use\n       the `scale` transform to scale it up to the full size of the tab when the\n       burst occurs. We also need to set the margin-inline-start so that the\n       center of the burst matches the center of the favicon. */\n    width: 5%;\n    height: 100%;\n    /* Center the burst over the .tab-loading-burst; it's 9px from the edge thanks\n       to .tab-content, plus 8px more since .tab-loading-burst is 16px wide. */\n    margin-inline-start: calc(17px - 2.5%);\n  }\n\n  .tab-loading-burst[pinned]::before {\n    /* This is like the margin-inline-start rule above, except that icons for\n       pinned tabs are 12px from the edge. */\n    margin-inline-start: calc(20px - 2.5%);\n  }\n\n  .tab-loading-burst[bursting]::before {\n    background-image: url(\"chrome://browser/skin/tabbrowser/loading-burst.svg\");\n    background-position: center center;\n    background-size: 100% auto;\n    background-repeat: no-repeat;\n    animation: tab-burst-animation 375ms cubic-bezier(0,0,.58,1);\n    -moz-context-properties: fill;\n    fill: var(--tab-loading-fill);\n  }\n\n  .tab-loading-burst[bursting][notselectedsinceload]::before {\n    animation-name: tab-burst-animation-light;\n  }\n\n  @keyframes tab-burst-animation {\n    0% {\n      opacity: 0.4;\n      transform: scale(1);\n    }\n    100% {\n      opacity: 0;\n      transform: scale(40);\n    }\n  }\n\n  @keyframes tab-burst-animation-light {\n    0% {\n      opacity: 0.2;\n      transform: scale(1);\n    }\n    100% {\n      opacity: 0;\n      transform: scale(40);\n    }\n  }\n}\n\n/* Width/height & margins apply on tab icon stack children */\n.tab-throbber-tabslist,\n.tab-throbber,\n.tab-icon-pending,\n.tab-icon-image,\n.tab-sharing-icon-overlay,\n.tab-icon-overlay {\n  height: 16px;\n  width: 16px;\n}\n\n.tab-throbber:not([pinned]),\n.tab-icon-pending:not([pinned]),\n.tab-icon-image:not([pinned]),\n.tab-sharing-icon-overlay:not([pinned]),\n.tab-icon-overlay:not([pinned]) {\n  margin-inline-end: 5.5px;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .tab-throbber[busy] {\n    background-image: url(\"chrome://browser/skin/tabbrowser/hourglass.svg\");\n    background-position: center;\n    background-repeat: no-repeat;\n    -moz-context-properties: fill;\n    fill: currentColor;\n    opacity: 0.4;\n  }\n\n  .tab-throbber[progress] {\n    opacity: 0.8;\n  }\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  :root[sessionrestored] .tab-throbber[busy] {\n    position: relative;\n    overflow: hidden;\n  }\n\n  :root[sessionrestored] .tab-throbber[busy]::before {\n    content: \"\";\n    position: absolute;\n    background-image: url(\"chrome://browser/skin/tabbrowser/loading.svg\");\n    background-position: left center;\n    background-repeat: no-repeat;\n    width: 480px;\n    height: 100%;\n    animation: tab-throbber-animation 1.05s steps(30) infinite;\n    -moz-context-properties: fill;\n\n    /* XXX: It would be nice to transition between the \"connecting\" color and the\n       \"loading\" color (see the `.tab-throbber[progress]::before` rule below);\n       however, that currently forces main thread painting. When this is fixed\n       (after WebRender lands), we can do something like\n       `transition: fill 0.333s, opacity 0.333s;` */\n\n    fill: currentColor;\n    opacity: 0.7;\n  }\n\n  :root[sessionrestored] .tab-throbber[busy]:-moz-locale-dir(rtl)::before {\n    animation-name: tab-throbber-animation-rtl;\n  }\n\n  @keyframes tab-throbber-animation {\n    0% { transform: translateX(0); }\n    100% { transform: translateX(-100%); }\n  }\n\n  @keyframes tab-throbber-animation-rtl {\n    0% { transform: translateX(0); }\n    100% { transform: translateX(100%); }\n  }\n\n  :root[sessionrestored] .tab-throbber[progress]::before {\n    fill: var(--tab-loading-fill);\n    opacity: 1;\n  }\n\n  #TabsToolbar[brighttext] .tab-throbber[progress]:not([selected=true])::before {\n    fill: var(--lwt-tab-loading-fill-inactive, #84c1ff);\n  }\n}\n\n.tab-icon-image {\n  -moz-context-properties: fill;\n  fill: currentColor;\n}\n\n.tab-icon-image:not([src]),\n.tab-icon-image:-moz-broken {\n  content: url(\"chrome://global/skin/icons/defaultFavicon.svg\");\n}\n\n.tab-icon-image[sharing]:not([selected]),\n.tab-sharing-icon-overlay {\n  animation: 3s linear tab-sharing-icon-pulse infinite;\n}\n\n@keyframes tab-sharing-icon-pulse {\n  0%, 16.66%, 83.33%, 100% {\n    opacity: 0;\n  }\n  33.33%, 66.66% {\n    opacity: 1;\n  }\n}\n\n.tab-icon-image[sharing]:not([selected]) {\n  animation-delay: -1.5s;\n}\n\n.tab-sharing-icon-overlay {\n  position: relative;\n  -moz-context-properties: fill;\n  fill: rgb(224, 41, 29);\n}\n\n.tab-sharing-icon-overlay[sharing=\"camera\"] {\n  list-style-image: url(\"chrome://browser/skin/notification-icons/camera.svg\");\n}\n\n.tab-sharing-icon-overlay[sharing=\"microphone\"] {\n  list-style-image: url(\"chrome://browser/skin/notification-icons/microphone.svg\");\n}\n\n.tab-sharing-icon-overlay[sharing=\"screen\"] {\n  list-style-image: url(\"chrome://browser/skin/notification-icons/screen.svg\");\n}\n\n.tab-icon-overlay {\n  width: 16px;\n  height: 16px;\n  position: relative;\n}\n\n.tab-icon-overlay:not([crashed]):is([pinned], [sharing]) {\n  top: -5.5px;\n  inset-inline-end: -6px;\n  z-index: 1; /* Overlay tab title */\n  padding: 2px;\n}\n\n:root[uidensity=compact] .tab-icon-stack[indicator-replaces-favicon] > :not(.tab-icon-overlay),\n#tabbrowser-tabs[secondarytext-unsupported] .tab-icon-stack[indicator-replaces-favicon] > :not(.tab-icon-overlay),\n:root:not([uidensity=compact]) #tabbrowser-tabs:not([secondarytext-unsupported]) .tabbrowser-tab:not(:hover) .tab-icon-overlay[indicator-replaces-favicon],\n:root:not([uidensity=compact]) #tabbrowser-tabs:not([secondarytext-unsupported]) .tabbrowser-tab:hover .tab-icon-stack[indicator-replaces-favicon] > :not(.tab-icon-overlay) {\n  opacity: 0;\n}\n\n.tab-icon-overlay[soundplaying]:not([crashed]),\n.tab-icon-overlay[muted]:not([crashed]),\n.tab-icon-overlay[activemedia-blocked]:not([crashed]) {\n  border-radius: 10px;\n  -moz-context-properties: fill, fill-opacity, stroke;\n  fill: currentColor;\n  stroke: transparent;\n}\n\n.tab-icon-overlay:is([pinned], [sharing]):not([crashed]) {\n  stroke: var(--tab-icon-overlay-stroke, white);\n  color: var(--tab-icon-overlay-fill, black);\n}\n\n.tab-icon-overlay:is([pinned], [sharing]):not([crashed])[soundplaying]:hover,\n.tab-icon-overlay:is([pinned], [sharing]):not([crashed])[muted]:hover,\n.tab-icon-overlay:is([pinned], [sharing]):not([crashed])[activemedia-blocked]:hover {\n  background-color: var(--tab-icon-overlay-stroke, white);\n}\n\n#TabsToolbar[brighttext] .tab-icon-overlay:is([pinned], [sharing]):not([crashed]) {\n  stroke: var(--tab-icon-overlay-stroke, black);\n  color: var(--tab-icon-overlay-fill, white);\n}\n\n#TabsToolbar[brighttext] .tab-icon-overlay:is([pinned], [sharing]):not([crashed])[soundplaying]:hover,\n#TabsToolbar[brighttext] .tab-icon-overlay:is([pinned], [sharing]):not([crashed])[muted]:hover,\n#TabsToolbar[brighttext] .tab-icon-overlay:is([pinned], [sharing]):not([crashed])[activemedia-blocked]:hover {\n  background-color: var(--tab-icon-overlay-stroke, black);\n}\n\n.tab-icon-overlay[indicator-replaces-favicon] {\n  border-radius: 2px;\n  fill-opacity: 0.75;\n  padding: 2px;\n}\n.tab-icon-overlay[indicator-replaces-favicon]:hover {\n  background-color: color-mix(in srgb, currentColor 15%, transparent);\n  fill-opacity: 0.95;\n}\n.tab-icon-overlay[indicator-replaces-favicon]:hover:active {\n  background-color: color-mix(in srgb, currentColor 30%, transparent);\n}\n\n.tab-icon-overlay[soundplaying] {\n  list-style-image: url(\"chrome://browser/skin/tabbrowser/tab-audio-playing-small.svg\");\n}\n\n.tab-icon-overlay[muted] {\n  list-style-image: url(\"chrome://browser/skin/tabbrowser/tab-audio-muted-small.svg\");\n}\n\n.tab-icon-overlay[activemedia-blocked] {\n  list-style-image: url(\"chrome://browser/skin/tabbrowser/tab-audio-blocked-small.svg\");\n}\n\n.tab-icon-overlay[crashed] {\n  list-style-image: url(\"chrome://browser/skin/tabbrowser/crashed.svg\");\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .tab-throbber-tabslist[busy] {\n    list-style-image: url(\"chrome://browser/skin/tabbrowser/hourglass.svg\");\n    -moz-context-properties: fill;\n    fill: currentColor;\n    opacity: 0.4;\n  }\n\n  .tab-throbber-tabslist[progress] {\n    opacity: 0.8;\n  }\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .tab-throbber-tabslist[busy] {\n    list-style-image: url(\"chrome://browser/skin/tabbrowser/tab-connecting.png\");\n  }\n\n  .tab-throbber-tabslist[progress] {\n    list-style-image: url(\"chrome://browser/skin/tabbrowser/tab-loading.png\");\n  }\n\n  :root[lwt-popup-brighttext] .tab-throbber-tabslist[progress]:not([selected=true]) {\n    list-style-image: url(\"chrome://browser/skin/tabbrowser/tab-loading-inverted.png\");\n  }\n\n  @media (min-resolution: 1.1dppx) {\n    .tab-throbber-tabslist[busy] {\n      list-style-image: url(\"chrome://browser/skin/tabbrowser/tab-connecting@2x.png\");\n    }\n\n    .tab-throbber-tabslist[progress] {\n      list-style-image: url(\"chrome://browser/skin/tabbrowser/tab-loading@2x.png\");\n    }\n\n    :root[lwt-popup-brighttext] .tab-throbber-tabslist[progress]:not([selected=true]) {\n      list-style-image: url(\"chrome://browser/skin/tabbrowser/tab-loading-inverted@2x.png\");\n    }\n  }\n}\n\n.tab-label {\n  margin-inline: 0;\n}\n\n.tab-close-button {\n  -moz-context-properties: fill, fill-opacity;\n  margin-inline-end: calc(var(--inline-tab-padding) / -2);\n  width: 24px;\n  height: 24px;\n  padding: 7px;\n  border-radius: var(--tab-border-radius);\n}\n\n/* The following rulesets allow showing more of the tab title */\n.tabbrowser-tab:not([labelendaligned],:hover) > .tab-stack > .tab-content > .tab-close-button {\n  padding-inline-start: 0;\n  width: 17px;\n}\n\n.tabbrowser-tab[visuallyselected=true]:not([labelendaligned]):hover,\n#tabbrowser-tabs:not([closebuttons=activetab]) > #tabbrowser-arrowscrollbox > .tabbrowser-tab:not([visuallyselected=true],[labelendaligned]):hover {\n  --tab-label-mask-size: 1em;\n}\n\n\n#tabbrowser-tabs[secondarytext-unsupported] .tab-secondary-label {\n  display: none;\n}\n\n#tabbrowser-tabs:not([secondarytext-unsupported]) .tab-label-container {\n  height: 2.7em;\n}\n\n.tab-secondary-label {\n  font-size: .75em;\n  opacity: .8;\n}\n\n.tab-icon-sound-label {\n  /* Set height back to equivalent of parent's 1em based\n     on the .tab-icon-sound having a reduced font-size */\n  height: 1.3333em;\n  white-space: nowrap;\n  margin: 0;\n}\n\n.tab-secondary-label[soundplaying-scheduledremoval]:not([muted]):not(:hover) {\n  transition: opacity .3s linear var(--soundplaying-removal-delay);\n  opacity: 0;\n}\n\n/* Tab Overflow */\n#tabbrowser-arrowscrollbox:not([scrolledtostart])::part(overflow-start-indicator),\n#tabbrowser-arrowscrollbox:not([scrolledtoend])::part(overflow-end-indicator) {\n  width: 7px; /* The width is the sum of the inline margins */\n  background-image: radial-gradient(ellipse at bottom,\n                                    rgba(0,0,0,0.1) 0%,\n                                    rgba(0,0,0,0.1) 7.6%,\n                                    rgba(0,0,0,0) 87.5%);\n  background-repeat: no-repeat;\n  background-position: -3px;\n  border-left: .5px solid rgba(255,255,255,.2);\n  pointer-events: none;\n  position: relative;\n  border-bottom: .5px solid transparent;\n}\n\n#tabbrowser-arrowscrollbox:not([scrolledtostart])::part(overflow-start-indicator) {\n  margin-inline: -.5px -6.5px;\n}\n\n#tabbrowser-arrowscrollbox:not([scrolledtoend])::part(overflow-end-indicator) {\n  margin-inline: -6.5px -.5px;\n}\n\n#tabbrowser-arrowscrollbox:-moz-locale-dir(rtl)::part(overflow-start-indicator),\n#tabbrowser-arrowscrollbox:-moz-locale-dir(ltr)::part(overflow-end-indicator) {\n  transform: scaleX(-1);\n}\n\n#tabbrowser-arrowscrollbox[scrolledtostart]::part(overflow-start-indicator),\n#tabbrowser-arrowscrollbox[scrolledtoend]::part(overflow-end-indicator) {\n  opacity: 0;\n}\n\n#tabbrowser-arrowscrollbox::part(overflow-start-indicator),\n#tabbrowser-arrowscrollbox::part(overflow-end-indicator) {\n  transition: opacity 150ms ease;\n}\n\n.tabbrowser-tab:not([visuallyselected=true], [multiselected]),\n.tabbrowser-tab:-moz-lwtheme {\n  color: inherit;\n}\n\n.tab-background {\n  border-radius: var(--tab-border-radius);\n  margin-block: var(--tab-block-margin);\n}\n\n/* Selected tab and tab hover */\n\n#TabsToolbar #firefox-view-button:hover:not([open]) > .toolbarbutton-icon,\n.tabbrowser-tab:hover > .tab-stack > .tab-background:not([selected=true], [multiselected]) {\n  background-color: color-mix(in srgb, currentColor 11%, transparent);\n}\n\n#TabsToolbar #firefox-view-button[open] > .toolbarbutton-icon,\n#tabbrowser-tabs:not([noshadowfortests]) .tab-background:is([selected], [multiselected]) {\n  box-shadow: 0 0 4px rgba(0,0,0,.4);\n}\n\n#TabsToolbar #firefox-view-button[open] > .toolbarbutton-icon,\n.tab-background:is([selected], [multiselected]) {\n  background-color: var(--tab-selected-bgcolor, var(--toolbar-bgcolor));\n  background-origin: border-box;\n  background-repeat: repeat-x;\n}\n\n.tabbrowser-tab:is([selected], [multiselected]):-moz-lwtheme {\n  color: var(--lwt-tab-text, var(--toolbar-color));\n}\n\n@media (prefers-contrast) {\n  #TabsToolbar #firefox-view-button:is([open], :hover):not(:focus-visible) > .toolbarbutton-icon,\n  .tab-background[selected],\n  .tabbrowser-tab:hover > .tab-stack > .tab-background {\n    outline: 1px solid currentColor;\n    outline-offset: -1px;\n  }\n}\n\n@media not (prefers-contrast) {\n  #TabsToolbar #firefox-view-button[open]:not(:focus-visible) > .toolbarbutton-icon:-moz-lwtheme,\n  .tab-background[selected]:not([multiselected=true]):-moz-lwtheme {\n    outline: 1px solid var(--lwt-tab-line-color, var(--lwt-tabs-border-color, currentColor));\n    outline-offset: -1px;\n  }\n}\n\n/* Add a focus outline on top of the multiselected tabs, with the currently selected\n   tab getting a slightly thicker outline. */\n.tab-background[multiselected=true] {\n  outline: 1px solid var(--focus-outline-color);\n  outline-offset: -1px;\n}\n\n.tab-background[multiselected=true][selected=true] {\n  outline-width: 2px;\n  outline-offset: -2px;\n}\n\n/*\n * LightweightThemeConsumer will set the current lightweight theme's header\n * image to the lwt-header-image variable, used in each of the following rulesets.\n */\n#TabsToolbar #firefox-view-button[open] > .toolbarbutton-icon:-moz-lwtheme,\n#tabbrowser-tabs:not([movingtab]) > #tabbrowser-arrowscrollbox > .tabbrowser-tab > .tab-stack > .tab-background[multiselected=true]:-moz-lwtheme,\n#tabbrowser-tabs:not([movingtab]) > #tabbrowser-arrowscrollbox > .tabbrowser-tab > .tab-stack > .tab-background[selected=true]:-moz-lwtheme {\n  background-attachment: scroll, scroll, fixed;\n  background-color: transparent;\n  background-image: linear-gradient(var(--lwt-selected-tab-background-color, transparent), var(--lwt-selected-tab-background-color, transparent)),\n                    linear-gradient(var(--toolbar-bgcolor), var(--toolbar-bgcolor)),\n                    var(--lwt-header-image, none);\n  background-position: 0 0, 0 0, right top;\n  background-repeat: repeat-x, repeat-x, no-repeat;\n  background-size: auto 100%, auto 100%, auto auto;\n}\n\n/* Pinned tabs */\n\ntoolbar[brighttext] {\n  --tab-attention-icon-color: var(--lwt-tab-attention-icon-color, rgb(84,255,189));\n}\n\n.tabbrowser-tab:is([image], [pinned]) > .tab-stack > .tab-content[attention]:not([selected=\"true\"]),\n.tabbrowser-tab > .tab-stack > .tab-content[pinned][titlechanged]:not([selected=\"true\"]),\n#firefox-view-button[attention] {\n  background-image: radial-gradient(circle, var(--tab-attention-icon-color), var(--tab-attention-icon-color) 2px, transparent 2px);\n  background-position: center bottom calc(6.5px + var(--tabs-navbar-shadow-size));\n  background-size: 4px 4px;\n  background-repeat: no-repeat;\n}\n\n.tabbrowser-tab[image] > .tab-stack > .tab-content[attention]:not([pinned], [selected=\"true\"]) {\n  background-position-x: left 14px;\n}\n\n.tabbrowser-tab[image] > .tab-stack > .tab-content[attention]:not([pinned], [selected=\"true\"]):-moz-locale-dir(rtl) {\n  background-position-x: right 14px;\n}\n\n#tabbrowser-tabs[haspinnedtabs]:not([positionpinnedtabs]) > #tabbrowser-arrowscrollbox > .tabbrowser-tab[first-visible-unpinned-tab] {\n  /* Add a gap between the last pinned tab and the first visible tab */\n  margin-inline-start: 12px !important; /* .tabbrowser-tab sets margin: 0 !important; */\n}\n\n.tab-label[attention]:not([selected=\"true\"]) {\n  font-weight: bold;\n}\n\n/* Tab drag and drop */\n\n.tab-drop-indicator {\n  width: 12px;\n  margin-inline-start: -12px;\n  background: url(chrome://browser/skin/tabbrowser/tab-drag-indicator.svg) no-repeat center;\n  position: relative;\n  z-index: 2;\n  pointer-events: none;\n}\n\n/* Drag space */\n\n.titlebar-spacer[type=\"pre-tabs\"],\n.titlebar-spacer[type=\"post-tabs\"] {\n  width: 40px;\n}\n\n@media (max-width: 500px) {\n  .titlebar-spacer[type=\"post-tabs\"] {\n    display: none;\n  }\n}\n\n/* Firefox View button and menu item */\n\n:root:not([privatebrowsingmode=temporary], [firefoxviewhidden]) :is(toolbarbutton, toolbarpaletteitem) + #tabbrowser-tabs,\n:root[privatebrowsingmode=temporary]:not([firefoxviewhidden]) :is(\n  toolbarbutton:not(#firefox-view-button),\n  toolbarpaletteitem:not(#wrapper-firefox-view-button)\n) + #tabbrowser-tabs {\n  border-inline-start: 1px solid color-mix(in srgb, currentColor 25%, transparent);\n  padding-inline-start: calc(var(--tab-overflow-pinned-tabs-width) + 2px);\n  margin-inline-start: 2px;\n}\n\n:root[privatebrowsingmode=temporary] :is(#firefox-view-button, #menu_openFirefoxView) {\n  display: none;\n}\n\ntoolbar:not(#TabsToolbar) #firefox-view-button {\n  background-position: top 25% right 25%;\n}\n\n:is(#widget-overflow-mainView, #widget-overflow-fixed-list) #firefox-view-button {\n  background-position: top 25% left 22px;\n}\n\n/* RTL notification dot */\ntoolbar:not(#TabsToolbar) #firefox-view-button:-moz-locale-dir(rtl) {\n  background-position-x: left 25%;\n}\n\n:is(#widget-overflow-mainView, #widget-overflow-fixed-list) #firefox-view-button:-moz-locale-dir(rtl) {\n  background-position-x: right 22px;\n}\n\n/* Tab bar scroll arrows */\n\n#tabbrowser-arrowscrollbox::part(scrollbutton-up),\n#tabbrowser-arrowscrollbox::part(scrollbutton-down) {\n  fill: var(--toolbarbutton-icon-fill);\n}\n\n/* New tab button */\n\n#tabs-newtab-button,\n#TabsToolbar #new-tab-button {\n  list-style-image: url(chrome://global/skin/icons/plus.svg);\n}\n\n/* All tabs button and menupopup */\n\n#alltabs-button {\n  list-style-image: url(chrome://global/skin/icons/arrow-down.svg);\n}\n\n#tabbrowser-tabs[hiddensoundplaying] ~ #alltabs-button > .toolbarbutton-badge-stack > .toolbarbutton-badge {\n  background: transparent url(chrome://browser/skin/tabbrowser/tab-audio-playing-small.svg);\n  box-shadow: none;\n  /* Match the color of the button, rather than label default. */\n  color: inherit;\n  display: block;\n  -moz-context-properties: fill, fill-opacity, stroke;\n  fill: currentColor;\n  stroke: transparent;\n  /* \"!important\" is necessary to override the rule in toolbarbutton.css */\n  margin: -7px 0 0 !important;\n  margin-inline-end: -4px !important;\n  min-width: 12px;\n  min-height: 12px;\n}\n\n/* The list of tabs is in its own panel-subview-body which will scroll. We don't\n   want any padding below the scrollbar, so remove the bottom padding\n   from the outer panel-subview-body. */\n#allTabsMenu-allTabsView > .panel-subview-body {\n  padding-bottom: 0;\n}\n\n#allTabsMenu-allTabsView-tabs {\n  padding-top: 0;\n}\n\n.all-tabs-item {\n  margin-inline: var(--arrowpanel-menuitem-margin-inline);\n  border-radius: var(--arrowpanel-menuitem-border-radius);\n}\n\n.all-tabs-item:hover {\n  background-color: var(--panel-item-hover-bgcolor);\n}\n\n.all-tabs-item:hover:active {\n  background-color: var(--panel-item-active-bgcolor);\n}\n\n.all-tabs-item[selected] {\n  font-weight: bold;\n}\n\n.all-tabs-item > toolbarbutton {\n  margin: 0;\n  /* Since the background is set on the item, don't set it on the children. */\n  background-color: transparent !important;\n}\n\n.all-tabs-button {\n  list-style-image: url(\"chrome://global/skin/icons/defaultFavicon.svg\");\n}\n\n.all-tabs-secondary-button {\n  opacity: .8;\n  -moz-context-properties: fill;\n  fill: currentColor;\n}\n\n.all-tabs-secondary-button[soundplaying] {\n  list-style-image: url(chrome://global/skin/media/audio.svg);\n}\n\n.all-tabs-secondary-button[muted] {\n  list-style-image: url(chrome://global/skin/media/audio-muted.svg);\n}\n\n.all-tabs-secondary-button:hover {\n  opacity: 1;\n}\n\n.all-tabs-secondary-button > label {\n  display: none !important; /* override panelUI-shared.css */\n}\n", "",{"version":3,"sources":["webpack://./../../themes/shared/tabs.css"],"names":[],"mappings":"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","sourcesContent":["/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n@namespace html url(\"http://www.w3.org/1999/xhtml\");\n\n:root {\n  --tab-min-height: 36px;\n  --inline-tab-padding: 8px;\n  /* Value for --in-content-page-background in in-content/common.inc.css */\n  --tabpanel-background-color: #f9f9fa;\n  --tab-border-radius: 4px;\n  --tab-shadow-max-size: 6px;\n  --tab-block-margin: 4px;\n  /* --tabpanel-background-color matches $in-content-page-background in newtab\n     (browser/components/newtab/content-src/styles/_variables.scss) */\n  --tabpanel-background-color: #F9F9FB;\n  --tab-attention-icon-color: var(--lwt-tab-attention-icon-color, rgb(42,195,162));\n}\n\n#tabbrowser-tabpanels browser[type=content] {\n  color-scheme: env(-moz-content-preferred-color-scheme);\n}\n\n@media (-moz-content-prefers-color-scheme: dark) {\n  :root {\n    /* --tabpanel-background-color matches $in-content-page-background in newtab\n       (browser/components/newtab/content-src/styles/_variables.scss) */\n    --tabpanel-background-color: #2B2A33;\n  }\n}\n\n:root[privatebrowsingmode=temporary] {\n  /* Value for --in-content-page-background in aboutPrivateBrowsing.css.\n     !important overrides the direct setting of this variable in\n     ThemeVariableMap.sys.mjs when the user has a theme that defines\n     ntp_background. */\n  --tabpanel-background-color: #25003e !important;\n}\n\n:root[uidensity=compact] {\n  --tab-min-height: 29px;\n}\n\n:root[uidensity=touch] {\n  --tab-min-height: 41px;\n}\n\n#tabbrowser-tabs {\n  --tab-min-width: 76px;\n  --tab-loading-fill: #0A84FF;\n  --tab-overflow-pinned-tabs-width: 0px;\n  padding-inline: var(--tab-overflow-pinned-tabs-width) 0;\n  /* Use a bigger flex value than the searchbar to prevent it from\n   * taking all the toolbar space. */\n  flex: 1000 1000;\n}\n\n#tabbrowser-tabpanels {\n  appearance: none;\n  padding: 0;\n  color-scheme: unset;\n  background-color: var(--tabpanel-background-color);\n}\n\n#tabbrowser-tabs,\n#tabbrowser-arrowscrollbox,\n#tabbrowser-tabs[positionpinnedtabs] > #tabbrowser-arrowscrollbox > .tabbrowser-tab[pinned] {\n  min-height: var(--tab-min-height);\n}\n\n.tab-background,\n.tab-stack {\n  min-height: inherit;\n}\n\n#tabbrowser-tabs[positionpinnedtabs] > #tabbrowser-arrowscrollbox::part(scrollbox) {\n  /* Add padding to match the shadow's blur radius so the\n    shadow doesn't get clipped when either the first or\n    last tab is selected */\n  padding-inline: var(--tab-shadow-max-size);\n}\n\n#tabbrowser-arrowscrollbox::part(scrollbox-clip) {\n  /* Needed to prevent tabstrip from growing as wide as the sum of the tabs'\n     page-title widths when emulating XUL with modern flexbox. */\n  contain: inline-size;\n}\n\n.tabbrowser-tab {\n  appearance: none;\n  background-color: transparent;\n  color-scheme: unset;\n  border-radius: 0;\n  border-width: 0;\n  margin: 0;\n  padding: 0 2px;\n  align-items: stretch;\n  /* Needed so that overflowing content overflows towards the end rather than\n     getting centered. That prevents tab opening animation from looking off at\n     the start, see bug 1759221. */\n  justify-content: flex-start;\n  overflow: clip;\n  /* Needed to avoid clipping the tab-background shadow, which has a 4px blur\n   * (we only have 2px padding in the inline direction) */\n  overflow-clip-margin: 2px;\n  min-height: var(--tab-min-height);\n}\n\n/* tabbrowser-tab keyboard focus */\n.keyboard-focused-tab > .tab-stack > .tab-background,\n.tabbrowser-tab:focus:not([aria-activedescendant]) > .tab-stack > .tab-background {\n  outline: var(--focus-outline);\n  outline-offset: var(--focus-outline-inset);\n}\n\n.tab-content {\n  padding: 0 var(--inline-tab-padding);\n  min-width: 0;\n}\n\n:root:not([uidensity=compact]) .tab-content[pinned] {\n  padding: 0 10px;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .tab-loading-burst {\n    border-radius: inherit;\n    position: relative;\n    overflow: hidden;\n  }\n\n  .tab-loading-burst::before {\n    position: absolute;\n    content: \"\";\n    /* We set the width to be a percentage of the tab's width so that we can use\n       the `scale` transform to scale it up to the full size of the tab when the\n       burst occurs. We also need to set the margin-inline-start so that the\n       center of the burst matches the center of the favicon. */\n    width: 5%;\n    height: 100%;\n    /* Center the burst over the .tab-loading-burst; it's 9px from the edge thanks\n       to .tab-content, plus 8px more since .tab-loading-burst is 16px wide. */\n    margin-inline-start: calc(17px - 2.5%);\n  }\n\n  .tab-loading-burst[pinned]::before {\n    /* This is like the margin-inline-start rule above, except that icons for\n       pinned tabs are 12px from the edge. */\n    margin-inline-start: calc(20px - 2.5%);\n  }\n\n  .tab-loading-burst[bursting]::before {\n    background-image: url(\"chrome://browser/skin/tabbrowser/loading-burst.svg\");\n    background-position: center center;\n    background-size: 100% auto;\n    background-repeat: no-repeat;\n    animation: tab-burst-animation 375ms cubic-bezier(0,0,.58,1);\n    -moz-context-properties: fill;\n    fill: var(--tab-loading-fill);\n  }\n\n  .tab-loading-burst[bursting][notselectedsinceload]::before {\n    animation-name: tab-burst-animation-light;\n  }\n\n  @keyframes tab-burst-animation {\n    0% {\n      opacity: 0.4;\n      transform: scale(1);\n    }\n    100% {\n      opacity: 0;\n      transform: scale(40);\n    }\n  }\n\n  @keyframes tab-burst-animation-light {\n    0% {\n      opacity: 0.2;\n      transform: scale(1);\n    }\n    100% {\n      opacity: 0;\n      transform: scale(40);\n    }\n  }\n}\n\n/* Width/height & margins apply on tab icon stack children */\n.tab-throbber-tabslist,\n.tab-throbber,\n.tab-icon-pending,\n.tab-icon-image,\n.tab-sharing-icon-overlay,\n.tab-icon-overlay {\n  height: 16px;\n  width: 16px;\n}\n\n.tab-throbber:not([pinned]),\n.tab-icon-pending:not([pinned]),\n.tab-icon-image:not([pinned]),\n.tab-sharing-icon-overlay:not([pinned]),\n.tab-icon-overlay:not([pinned]) {\n  margin-inline-end: 5.5px;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .tab-throbber[busy] {\n    background-image: url(\"chrome://browser/skin/tabbrowser/hourglass.svg\");\n    background-position: center;\n    background-repeat: no-repeat;\n    -moz-context-properties: fill;\n    fill: currentColor;\n    opacity: 0.4;\n  }\n\n  .tab-throbber[progress] {\n    opacity: 0.8;\n  }\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  :root[sessionrestored] .tab-throbber[busy] {\n    position: relative;\n    overflow: hidden;\n  }\n\n  :root[sessionrestored] .tab-throbber[busy]::before {\n    content: \"\";\n    position: absolute;\n    background-image: url(\"chrome://browser/skin/tabbrowser/loading.svg\");\n    background-position: left center;\n    background-repeat: no-repeat;\n    width: 480px;\n    height: 100%;\n    animation: tab-throbber-animation 1.05s steps(30) infinite;\n    -moz-context-properties: fill;\n\n    /* XXX: It would be nice to transition between the \"connecting\" color and the\n       \"loading\" color (see the `.tab-throbber[progress]::before` rule below);\n       however, that currently forces main thread painting. When this is fixed\n       (after WebRender lands), we can do something like\n       `transition: fill 0.333s, opacity 0.333s;` */\n\n    fill: currentColor;\n    opacity: 0.7;\n  }\n\n  :root[sessionrestored] .tab-throbber[busy]:-moz-locale-dir(rtl)::before {\n    animation-name: tab-throbber-animation-rtl;\n  }\n\n  @keyframes tab-throbber-animation {\n    0% { transform: translateX(0); }\n    100% { transform: translateX(-100%); }\n  }\n\n  @keyframes tab-throbber-animation-rtl {\n    0% { transform: translateX(0); }\n    100% { transform: translateX(100%); }\n  }\n\n  :root[sessionrestored] .tab-throbber[progress]::before {\n    fill: var(--tab-loading-fill);\n    opacity: 1;\n  }\n\n  #TabsToolbar[brighttext] .tab-throbber[progress]:not([selected=true])::before {\n    fill: var(--lwt-tab-loading-fill-inactive, #84c1ff);\n  }\n}\n\n.tab-icon-image {\n  -moz-context-properties: fill;\n  fill: currentColor;\n}\n\n.tab-icon-image:not([src]),\n.tab-icon-image:-moz-broken {\n  content: url(\"chrome://global/skin/icons/defaultFavicon.svg\");\n}\n\n.tab-icon-image[sharing]:not([selected]),\n.tab-sharing-icon-overlay {\n  animation: 3s linear tab-sharing-icon-pulse infinite;\n}\n\n@keyframes tab-sharing-icon-pulse {\n  0%, 16.66%, 83.33%, 100% {\n    opacity: 0;\n  }\n  33.33%, 66.66% {\n    opacity: 1;\n  }\n}\n\n.tab-icon-image[sharing]:not([selected]) {\n  animation-delay: -1.5s;\n}\n\n.tab-sharing-icon-overlay {\n  position: relative;\n  -moz-context-properties: fill;\n  fill: rgb(224, 41, 29);\n}\n\n.tab-sharing-icon-overlay[sharing=\"camera\"] {\n  list-style-image: url(\"chrome://browser/skin/notification-icons/camera.svg\");\n}\n\n.tab-sharing-icon-overlay[sharing=\"microphone\"] {\n  list-style-image: url(\"chrome://browser/skin/notification-icons/microphone.svg\");\n}\n\n.tab-sharing-icon-overlay[sharing=\"screen\"] {\n  list-style-image: url(\"chrome://browser/skin/notification-icons/screen.svg\");\n}\n\n.tab-icon-overlay {\n  width: 16px;\n  height: 16px;\n  position: relative;\n}\n\n.tab-icon-overlay:not([crashed]):is([pinned], [sharing]) {\n  top: -5.5px;\n  inset-inline-end: -6px;\n  z-index: 1; /* Overlay tab title */\n  padding: 2px;\n}\n\n:root[uidensity=compact] .tab-icon-stack[indicator-replaces-favicon] > :not(.tab-icon-overlay),\n#tabbrowser-tabs[secondarytext-unsupported] .tab-icon-stack[indicator-replaces-favicon] > :not(.tab-icon-overlay),\n:root:not([uidensity=compact]) #tabbrowser-tabs:not([secondarytext-unsupported]) .tabbrowser-tab:not(:hover) .tab-icon-overlay[indicator-replaces-favicon],\n:root:not([uidensity=compact]) #tabbrowser-tabs:not([secondarytext-unsupported]) .tabbrowser-tab:hover .tab-icon-stack[indicator-replaces-favicon] > :not(.tab-icon-overlay) {\n  opacity: 0;\n}\n\n.tab-icon-overlay[soundplaying]:not([crashed]),\n.tab-icon-overlay[muted]:not([crashed]),\n.tab-icon-overlay[activemedia-blocked]:not([crashed]) {\n  border-radius: 10px;\n  -moz-context-properties: fill, fill-opacity, stroke;\n  fill: currentColor;\n  stroke: transparent;\n}\n\n.tab-icon-overlay:is([pinned], [sharing]):not([crashed]) {\n  stroke: var(--tab-icon-overlay-stroke, white);\n  color: var(--tab-icon-overlay-fill, black);\n}\n\n.tab-icon-overlay:is([pinned], [sharing]):not([crashed])[soundplaying]:hover,\n.tab-icon-overlay:is([pinned], [sharing]):not([crashed])[muted]:hover,\n.tab-icon-overlay:is([pinned], [sharing]):not([crashed])[activemedia-blocked]:hover {\n  background-color: var(--tab-icon-overlay-stroke, white);\n}\n\n#TabsToolbar[brighttext] .tab-icon-overlay:is([pinned], [sharing]):not([crashed]) {\n  stroke: var(--tab-icon-overlay-stroke, black);\n  color: var(--tab-icon-overlay-fill, white);\n}\n\n#TabsToolbar[brighttext] .tab-icon-overlay:is([pinned], [sharing]):not([crashed])[soundplaying]:hover,\n#TabsToolbar[brighttext] .tab-icon-overlay:is([pinned], [sharing]):not([crashed])[muted]:hover,\n#TabsToolbar[brighttext] .tab-icon-overlay:is([pinned], [sharing]):not([crashed])[activemedia-blocked]:hover {\n  background-color: var(--tab-icon-overlay-stroke, black);\n}\n\n.tab-icon-overlay[indicator-replaces-favicon] {\n  border-radius: 2px;\n  fill-opacity: 0.75;\n  padding: 2px;\n}\n.tab-icon-overlay[indicator-replaces-favicon]:hover {\n  background-color: color-mix(in srgb, currentColor 15%, transparent);\n  fill-opacity: 0.95;\n}\n.tab-icon-overlay[indicator-replaces-favicon]:hover:active {\n  background-color: color-mix(in srgb, currentColor 30%, transparent);\n}\n\n.tab-icon-overlay[soundplaying] {\n  list-style-image: url(\"chrome://browser/skin/tabbrowser/tab-audio-playing-small.svg\");\n}\n\n.tab-icon-overlay[muted] {\n  list-style-image: url(\"chrome://browser/skin/tabbrowser/tab-audio-muted-small.svg\");\n}\n\n.tab-icon-overlay[activemedia-blocked] {\n  list-style-image: url(\"chrome://browser/skin/tabbrowser/tab-audio-blocked-small.svg\");\n}\n\n.tab-icon-overlay[crashed] {\n  list-style-image: url(\"chrome://browser/skin/tabbrowser/crashed.svg\");\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .tab-throbber-tabslist[busy] {\n    list-style-image: url(\"chrome://browser/skin/tabbrowser/hourglass.svg\");\n    -moz-context-properties: fill;\n    fill: currentColor;\n    opacity: 0.4;\n  }\n\n  .tab-throbber-tabslist[progress] {\n    opacity: 0.8;\n  }\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .tab-throbber-tabslist[busy] {\n    list-style-image: url(\"chrome://browser/skin/tabbrowser/tab-connecting.png\");\n  }\n\n  .tab-throbber-tabslist[progress] {\n    list-style-image: url(\"chrome://browser/skin/tabbrowser/tab-loading.png\");\n  }\n\n  :root[lwt-popup-brighttext] .tab-throbber-tabslist[progress]:not([selected=true]) {\n    list-style-image: url(\"chrome://browser/skin/tabbrowser/tab-loading-inverted.png\");\n  }\n\n  @media (min-resolution: 1.1dppx) {\n    .tab-throbber-tabslist[busy] {\n      list-style-image: url(\"chrome://browser/skin/tabbrowser/tab-connecting@2x.png\");\n    }\n\n    .tab-throbber-tabslist[progress] {\n      list-style-image: url(\"chrome://browser/skin/tabbrowser/tab-loading@2x.png\");\n    }\n\n    :root[lwt-popup-brighttext] .tab-throbber-tabslist[progress]:not([selected=true]) {\n      list-style-image: url(\"chrome://browser/skin/tabbrowser/tab-loading-inverted@2x.png\");\n    }\n  }\n}\n\n.tab-label {\n  margin-inline: 0;\n}\n\n.tab-close-button {\n  -moz-context-properties: fill, fill-opacity;\n  margin-inline-end: calc(var(--inline-tab-padding) / -2);\n  width: 24px;\n  height: 24px;\n  padding: 7px;\n  border-radius: var(--tab-border-radius);\n}\n\n/* The following rulesets allow showing more of the tab title */\n.tabbrowser-tab:not([labelendaligned],:hover) > .tab-stack > .tab-content > .tab-close-button {\n  padding-inline-start: 0;\n  width: 17px;\n}\n\n.tabbrowser-tab[visuallyselected=true]:not([labelendaligned]):hover,\n#tabbrowser-tabs:not([closebuttons=activetab]) > #tabbrowser-arrowscrollbox > .tabbrowser-tab:not([visuallyselected=true],[labelendaligned]):hover {\n  --tab-label-mask-size: 1em;\n}\n\n\n#tabbrowser-tabs[secondarytext-unsupported] .tab-secondary-label {\n  display: none;\n}\n\n#tabbrowser-tabs:not([secondarytext-unsupported]) .tab-label-container {\n  height: 2.7em;\n}\n\n.tab-secondary-label {\n  font-size: .75em;\n  opacity: .8;\n}\n\n.tab-icon-sound-label {\n  /* Set height back to equivalent of parent's 1em based\n     on the .tab-icon-sound having a reduced font-size */\n  height: 1.3333em;\n  white-space: nowrap;\n  margin: 0;\n}\n\n.tab-secondary-label[soundplaying-scheduledremoval]:not([muted]):not(:hover) {\n  transition: opacity .3s linear var(--soundplaying-removal-delay);\n  opacity: 0;\n}\n\n/* Tab Overflow */\n#tabbrowser-arrowscrollbox:not([scrolledtostart])::part(overflow-start-indicator),\n#tabbrowser-arrowscrollbox:not([scrolledtoend])::part(overflow-end-indicator) {\n  width: 7px; /* The width is the sum of the inline margins */\n  background-image: radial-gradient(ellipse at bottom,\n                                    rgba(0,0,0,0.1) 0%,\n                                    rgba(0,0,0,0.1) 7.6%,\n                                    rgba(0,0,0,0) 87.5%);\n  background-repeat: no-repeat;\n  background-position: -3px;\n  border-left: .5px solid rgba(255,255,255,.2);\n  pointer-events: none;\n  position: relative;\n  border-bottom: .5px solid transparent;\n}\n\n#tabbrowser-arrowscrollbox:not([scrolledtostart])::part(overflow-start-indicator) {\n  margin-inline: -.5px -6.5px;\n}\n\n#tabbrowser-arrowscrollbox:not([scrolledtoend])::part(overflow-end-indicator) {\n  margin-inline: -6.5px -.5px;\n}\n\n#tabbrowser-arrowscrollbox:-moz-locale-dir(rtl)::part(overflow-start-indicator),\n#tabbrowser-arrowscrollbox:-moz-locale-dir(ltr)::part(overflow-end-indicator) {\n  transform: scaleX(-1);\n}\n\n#tabbrowser-arrowscrollbox[scrolledtostart]::part(overflow-start-indicator),\n#tabbrowser-arrowscrollbox[scrolledtoend]::part(overflow-end-indicator) {\n  opacity: 0;\n}\n\n#tabbrowser-arrowscrollbox::part(overflow-start-indicator),\n#tabbrowser-arrowscrollbox::part(overflow-end-indicator) {\n  transition: opacity 150ms ease;\n}\n\n.tabbrowser-tab:not([visuallyselected=true], [multiselected]),\n.tabbrowser-tab:-moz-lwtheme {\n  color: inherit;\n}\n\n.tab-background {\n  border-radius: var(--tab-border-radius);\n  margin-block: var(--tab-block-margin);\n}\n\n/* Selected tab and tab hover */\n\n#TabsToolbar #firefox-view-button:hover:not([open]) > .toolbarbutton-icon,\n.tabbrowser-tab:hover > .tab-stack > .tab-background:not([selected=true], [multiselected]) {\n  background-color: color-mix(in srgb, currentColor 11%, transparent);\n}\n\n#TabsToolbar #firefox-view-button[open] > .toolbarbutton-icon,\n#tabbrowser-tabs:not([noshadowfortests]) .tab-background:is([selected], [multiselected]) {\n  box-shadow: 0 0 4px rgba(0,0,0,.4);\n}\n\n#TabsToolbar #firefox-view-button[open] > .toolbarbutton-icon,\n.tab-background:is([selected], [multiselected]) {\n  background-color: var(--tab-selected-bgcolor, var(--toolbar-bgcolor));\n  background-origin: border-box;\n  background-repeat: repeat-x;\n}\n\n.tabbrowser-tab:is([selected], [multiselected]):-moz-lwtheme {\n  color: var(--lwt-tab-text, var(--toolbar-color));\n}\n\n@media (prefers-contrast) {\n  #TabsToolbar #firefox-view-button:is([open], :hover):not(:focus-visible) > .toolbarbutton-icon,\n  .tab-background[selected],\n  .tabbrowser-tab:hover > .tab-stack > .tab-background {\n    outline: 1px solid currentColor;\n    outline-offset: -1px;\n  }\n}\n\n@media not (prefers-contrast) {\n  #TabsToolbar #firefox-view-button[open]:not(:focus-visible) > .toolbarbutton-icon:-moz-lwtheme,\n  .tab-background[selected]:not([multiselected=true]):-moz-lwtheme {\n    outline: 1px solid var(--lwt-tab-line-color, var(--lwt-tabs-border-color, currentColor));\n    outline-offset: -1px;\n  }\n}\n\n/* Add a focus outline on top of the multiselected tabs, with the currently selected\n   tab getting a slightly thicker outline. */\n.tab-background[multiselected=true] {\n  outline: 1px solid var(--focus-outline-color);\n  outline-offset: -1px;\n}\n\n.tab-background[multiselected=true][selected=true] {\n  outline-width: 2px;\n  outline-offset: -2px;\n}\n\n/*\n * LightweightThemeConsumer will set the current lightweight theme's header\n * image to the lwt-header-image variable, used in each of the following rulesets.\n */\n#TabsToolbar #firefox-view-button[open] > .toolbarbutton-icon:-moz-lwtheme,\n#tabbrowser-tabs:not([movingtab]) > #tabbrowser-arrowscrollbox > .tabbrowser-tab > .tab-stack > .tab-background[multiselected=true]:-moz-lwtheme,\n#tabbrowser-tabs:not([movingtab]) > #tabbrowser-arrowscrollbox > .tabbrowser-tab > .tab-stack > .tab-background[selected=true]:-moz-lwtheme {\n  background-attachment: scroll, scroll, fixed;\n  background-color: transparent;\n  background-image: linear-gradient(var(--lwt-selected-tab-background-color, transparent), var(--lwt-selected-tab-background-color, transparent)),\n                    linear-gradient(var(--toolbar-bgcolor), var(--toolbar-bgcolor)),\n                    var(--lwt-header-image, none);\n  background-position: 0 0, 0 0, right top;\n  background-repeat: repeat-x, repeat-x, no-repeat;\n  background-size: auto 100%, auto 100%, auto auto;\n}\n\n/* Pinned tabs */\n\ntoolbar[brighttext] {\n  --tab-attention-icon-color: var(--lwt-tab-attention-icon-color, rgb(84,255,189));\n}\n\n.tabbrowser-tab:is([image], [pinned]) > .tab-stack > .tab-content[attention]:not([selected=\"true\"]),\n.tabbrowser-tab > .tab-stack > .tab-content[pinned][titlechanged]:not([selected=\"true\"]),\n#firefox-view-button[attention] {\n  background-image: radial-gradient(circle, var(--tab-attention-icon-color), var(--tab-attention-icon-color) 2px, transparent 2px);\n  background-position: center bottom calc(6.5px + var(--tabs-navbar-shadow-size));\n  background-size: 4px 4px;\n  background-repeat: no-repeat;\n}\n\n.tabbrowser-tab[image] > .tab-stack > .tab-content[attention]:not([pinned], [selected=\"true\"]) {\n  background-position-x: left 14px;\n}\n\n.tabbrowser-tab[image] > .tab-stack > .tab-content[attention]:not([pinned], [selected=\"true\"]):-moz-locale-dir(rtl) {\n  background-position-x: right 14px;\n}\n\n#tabbrowser-tabs[haspinnedtabs]:not([positionpinnedtabs]) > #tabbrowser-arrowscrollbox > .tabbrowser-tab[first-visible-unpinned-tab] {\n  /* Add a gap between the last pinned tab and the first visible tab */\n  margin-inline-start: 12px !important; /* .tabbrowser-tab sets margin: 0 !important; */\n}\n\n.tab-label[attention]:not([selected=\"true\"]) {\n  font-weight: bold;\n}\n\n/* Tab drag and drop */\n\n.tab-drop-indicator {\n  width: 12px;\n  margin-inline-start: -12px;\n  background: url(chrome://browser/skin/tabbrowser/tab-drag-indicator.svg) no-repeat center;\n  position: relative;\n  z-index: 2;\n  pointer-events: none;\n}\n\n/* Drag space */\n\n.titlebar-spacer[type=\"pre-tabs\"],\n.titlebar-spacer[type=\"post-tabs\"] {\n  width: 40px;\n}\n\n@media (max-width: 500px) {\n  .titlebar-spacer[type=\"post-tabs\"] {\n    display: none;\n  }\n}\n\n/* Firefox View button and menu item */\n\n:root:not([privatebrowsingmode=temporary], [firefoxviewhidden]) :is(toolbarbutton, toolbarpaletteitem) + #tabbrowser-tabs,\n:root[privatebrowsingmode=temporary]:not([firefoxviewhidden]) :is(\n  toolbarbutton:not(#firefox-view-button),\n  toolbarpaletteitem:not(#wrapper-firefox-view-button)\n) + #tabbrowser-tabs {\n  border-inline-start: 1px solid color-mix(in srgb, currentColor 25%, transparent);\n  padding-inline-start: calc(var(--tab-overflow-pinned-tabs-width) + 2px);\n  margin-inline-start: 2px;\n}\n\n:root[privatebrowsingmode=temporary] :is(#firefox-view-button, #menu_openFirefoxView) {\n  display: none;\n}\n\ntoolbar:not(#TabsToolbar) #firefox-view-button {\n  background-position: top 25% right 25%;\n}\n\n:is(#widget-overflow-mainView, #widget-overflow-fixed-list) #firefox-view-button {\n  background-position: top 25% left 22px;\n}\n\n/* RTL notification dot */\ntoolbar:not(#TabsToolbar) #firefox-view-button:-moz-locale-dir(rtl) {\n  background-position-x: left 25%;\n}\n\n:is(#widget-overflow-mainView, #widget-overflow-fixed-list) #firefox-view-button:-moz-locale-dir(rtl) {\n  background-position-x: right 22px;\n}\n\n/* Tab bar scroll arrows */\n\n#tabbrowser-arrowscrollbox::part(scrollbutton-up),\n#tabbrowser-arrowscrollbox::part(scrollbutton-down) {\n  fill: var(--toolbarbutton-icon-fill);\n}\n\n/* New tab button */\n\n#tabs-newtab-button,\n#TabsToolbar #new-tab-button {\n  list-style-image: url(chrome://global/skin/icons/plus.svg);\n}\n\n/* All tabs button and menupopup */\n\n#alltabs-button {\n  list-style-image: url(chrome://global/skin/icons/arrow-down.svg);\n}\n\n#tabbrowser-tabs[hiddensoundplaying] ~ #alltabs-button > .toolbarbutton-badge-stack > .toolbarbutton-badge {\n  background: transparent url(chrome://browser/skin/tabbrowser/tab-audio-playing-small.svg);\n  box-shadow: none;\n  /* Match the color of the button, rather than label default. */\n  color: inherit;\n  display: block;\n  -moz-context-properties: fill, fill-opacity, stroke;\n  fill: currentColor;\n  stroke: transparent;\n  /* \"!important\" is necessary to override the rule in toolbarbutton.css */\n  margin: -7px 0 0 !important;\n  margin-inline-end: -4px !important;\n  min-width: 12px;\n  min-height: 12px;\n}\n\n/* The list of tabs is in its own panel-subview-body which will scroll. We don't\n   want any padding below the scrollbar, so remove the bottom padding\n   from the outer panel-subview-body. */\n#allTabsMenu-allTabsView > .panel-subview-body {\n  padding-bottom: 0;\n}\n\n#allTabsMenu-allTabsView-tabs {\n  padding-top: 0;\n}\n\n.all-tabs-item {\n  margin-inline: var(--arrowpanel-menuitem-margin-inline);\n  border-radius: var(--arrowpanel-menuitem-border-radius);\n}\n\n.all-tabs-item:hover {\n  background-color: var(--panel-item-hover-bgcolor);\n}\n\n.all-tabs-item:hover:active {\n  background-color: var(--panel-item-active-bgcolor);\n}\n\n.all-tabs-item[selected] {\n  font-weight: bold;\n}\n\n.all-tabs-item > toolbarbutton {\n  margin: 0;\n  /* Since the background is set on the item, don't set it on the children. */\n  background-color: transparent !important;\n}\n\n.all-tabs-button {\n  list-style-image: url(\"chrome://global/skin/icons/defaultFavicon.svg\");\n}\n\n.all-tabs-secondary-button {\n  opacity: .8;\n  -moz-context-properties: fill;\n  fill: currentColor;\n}\n\n.all-tabs-secondary-button[soundplaying] {\n  list-style-image: url(chrome://global/skin/media/audio.svg);\n}\n\n.all-tabs-secondary-button[muted] {\n  list-style-image: url(chrome://global/skin/media/audio-muted.svg);\n}\n\n.all-tabs-secondary-button:hover {\n  opacity: 1;\n}\n\n.all-tabs-secondary-button > label {\n  display: none !important; /* override panelUI-shared.css */\n}\n"],"sourceRoot":""}]);
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

/***/ 10641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93379);
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_tabs_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36255);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_tabs_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_tabs_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
//# sourceMappingURL=641.e813de51.iframe.bundle.js.map