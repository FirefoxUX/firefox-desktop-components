"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[9828],{

/***/ 41509:
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
___CSS_LOADER_EXPORT___.push([module.id, "/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n@namespace html url(\"http://www.w3.org/1999/xhtml\");\n\n:root {\n  --toolbar-field-border-color: hsla(240,5%,5%,.25);\n  --toolbar-field-focus-border-color: var(--focus-outline-color);\n  --urlbar-container-padding: 1px;\n  --urlbar-margin-inline: 5px;\n  --urlbar-search-button-width: calc(16px + 2 * var(--urlbar-icon-padding));\n}\n\n@media not (prefers-contrast) {\n  :root {\n    --toolbar-field-border-color: transparent;\n    --toolbar-field-focus-border-color: color-mix(in srgb, var(--focus-outline-color) 50%, transparent);\n  }\n}\n\n#urlbar-container,\n#search-container {\n  padding-block: 4px;\n  margin-inline: var(--urlbar-margin-inline);\n}\n\n#search-container[cui-areatype=\"panel\"] {\n  margin: var(--arrowpanel-menuitem-margin);\n}\n\n:root[uidensity=touch] #urlbar-container,\n:root[uidensity=touch] #search-container {\n  padding-block: 5px;\n}\n\n#urlbar,\n#searchbar {\n  min-height: var(--urlbar-min-height);\n  text-shadow: none;\n  color: var(--toolbar-field-color);\n}\n\n/**\n * System colors and widgets are set based on toolbar color. Since toolbar\n * fields can be styled differently from the toolbar, we need to use the\n * correct color scheme in toolbar fields.\n */\n#urlbar:-moz-lwtheme,\n#searchbar:-moz-lwtheme {\n  color-scheme: light;\n}\n\n:root[lwt-toolbar-field-brighttext] #urlbar:not([focused=\"true\"]),\n:root[lwt-toolbar-field-brighttext] #searchbar:not(:focus-within),\n:root[lwt-toolbar-field-focus-brighttext] #urlbar[focused=\"true\"],\n:root[lwt-toolbar-field-focus-brighttext] #searchbar:focus-within {\n  color-scheme: dark;\n}\n\n#urlbar-background,\n#searchbar {\n  background-color: var(--toolbar-field-background-color);\n  background-clip: border-box;\n  border: 1px solid var(--toolbar-field-border-color);\n  border-radius: var(--toolbarbutton-border-radius);\n}\n\n#urlbar-input-container,\n#searchbar {\n  border-radius: var(--toolbarbutton-border-radius);\n  overflow: clip;\n}\n\n#urlbar-input,\n#urlbar-scheme,\n.searchbar-textbox {\n  flex: 1;\n  background-color: transparent;\n  color: inherit;\n  border: none;\n  margin: 0;\n  padding: 0;\n  outline: none;\n}\n\n#urlbar[focused=\"true\"]:not([suppress-focus-border]) > #urlbar-background,\n#searchbar:focus-within {\n  outline: var(--focus-outline);\n  outline-offset: var(--focus-outline-inset);\n  /* We used --focus-outline above to inherit its width and style properties,\n     but we still want to use the theme's border-color.\n     --toolbar-field-focus-border-color is set equal to --focus-outline-color\n     on :root, but LWT themes can override this value. */\n  outline-color: var(--toolbar-field-focus-border-color);\n  border-color: transparent;\n}\n\n#urlbar[focused=\"true\"] > #urlbar-background,\n#searchbar:focus-within {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.23);\n}\n\n#urlbar[open] > #urlbar-background {\n  border-color: var(--arrowpanel-border-color);\n  box-shadow: 0 2px 14px rgba(0, 0, 0, 0.13);\n}\n\n#urlbar:is([focused=\"true\"], [open]),\n#searchbar:focus-within {\n  color: var(--toolbar-field-focus-color);\n}\n\n#urlbar:is([focused=\"true\"], [open]) > #urlbar-background,\n#searchbar:focus-within {\n  background-color: var(--toolbar-field-focus-background-color);\n}\n\n#urlbar-input::placeholder,\n.searchbar-textbox::placeholder {\n  opacity: 0.69;\n}\n\n#TabsToolbar #searchbar:not(:focus-within) {\n  /* The tabs toolbar is usually a different color than the other toolbars, and\n     we can't predict it, to avoid a transparent field we enforce a border. */\n  border-color: color-mix(in srgb, currentColor 20%, transparent);\n}\n\n#urlbar-input:-moz-lwtheme::selection,\n.searchbar-textbox:-moz-lwtheme::selection {\n  background-color: var(--lwt-toolbar-field-highlight, Highlight);\n  color: var(--lwt-toolbar-field-highlight-text, HighlightText);\n}\n\n#urlbar-input:not(:focus):-moz-lwtheme::selection,\n.searchbar-textbox:not(:focus-within):-moz-lwtheme::selection {\n  background-color: var(--lwt-toolbar-field-highlight, text-select-disabled-background);\n}\n\n#urlbar:not([focused=\"true\"]) {\n  caret-color: transparent;\n}\n\n#urlbar.searchButton > #urlbar-input-container > #urlbar-search-button {\n  width: var(--urlbar-search-button-width);\n  background-image: url(chrome://global/skin/icons/search-glass.svg);\n  background-repeat: no-repeat;\n  background-position: center;\n  -moz-context-properties: fill, fill-opacity;\n  fill: var(--toolbarbutton-icon-fill);\n}\n\n#urlbar.searchButton > #urlbar-input-container[pageproxystate=\"invalid\"] > #urlbar-search-button {\n  margin-inline-end: 6px;\n}\n\n/**\n * The urlbar background is a separate element so we can animate it\n * independently from the content. It's positioned absolutely and stretched to\n * the bounds of the urlbar.\n */\n\n#urlbar,\n#urlbar-input-container,\n.urlbarView {\n  position: relative;\n}\n\n#urlbar-background {\n  display: block;\n  position: absolute;\n  inset: 0;\n}\n\n:root:not([chromehidden~=\"toolbar\"]) #urlbar.searchButton:not([breakout]) > #urlbar-background,\n:root:not([chromehidden~=\"toolbar\"]) #urlbar.searchButton:not([breakout-extend]) > #urlbar-background {\n  inset-inline-start: var(--urlbar-search-button-width);\n}\n\n#urlbar-input-container {\n  /* Match urlbar-background's border. */\n  border: 1px solid transparent;\n  padding: var(--urlbar-container-padding);\n}\n\n#urlbar-container[breakout] {\n  position: relative;\n  min-height: var(--urlbar-container-height);\n}\n\n#urlbar[breakout] {\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: var(--urlbar-height);\n  top: calc((var(--urlbar-toolbar-height) - var(--urlbar-height)) / 2);\n  left: 0;\n}\n\n#urlbar[breakout] > #urlbar-input-container {\n  width: 100%;\n  height: 100%;\n}\n\n#urlbar:not([open]) > .urlbarView,\n#urlbar:not([breakout]) > .urlbarView {\n  display: none;\n}\n\n#urlbar[breakout][breakout-extend],\n#urlbar[breakout][breakout-extend-disabled][open] {\n  /* The z-index needs to be big enough to trump other positioned UI pieces\n     that we want to overlay. 3 is used in the tab bar. */\n  z-index: 3;\n  height: auto;\n}\n\n#urlbar[breakout][breakout-extend] {\n  top: 0;\n  left: calc(-1 * var(--urlbar-margin-inline));\n  width: calc(100% + 2 * var(--urlbar-margin-inline));\n}\n\n#urlbar[breakout][breakout-extend] > #urlbar-input-container {\n  height: var(--urlbar-toolbar-height);\n  padding-block: calc((var(--urlbar-toolbar-height) - var(--urlbar-height)) / 2 + var(--urlbar-container-padding));\n  padding-inline: calc(var(--urlbar-margin-inline) + var(--urlbar-container-padding));\n}\n\n#urlbar.searchButton[breakout][breakout-extend] > #urlbar-input-container > #urlbar-search-button {\n  fill: currentColor;\n  fill-opacity: .6;\n}\n\n@keyframes urlbar-grow {\n  0% {\n    transform: scaleX(.99) scaleY(.98);\n  }\n  100% {\n    transform: scale(1.0);\n  }\n}\n\n#urlbar[breakout][breakout-extend] > #urlbar-background {\n  animation-name: urlbar-grow;\n  animation-duration: 0s;\n  animation-timing-function: var(--animation-easing-function);\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  #urlbar[breakout][breakout-extend][breakout-extend-animate] > #urlbar-background {\n    animation-duration: 150ms;\n  }\n}\n\n:root[chromehidden~=\"toolbar\"] #urlbar-container {\n  /* Remove excess space between the address bar and the menu button in popups. */\n  padding-inline-end: 0;\n}\n\n:root[customizing] .urlbar-input-box {\n  visibility: hidden;\n}\n\n#urlbar-container {\n  align-items: center;\n}\n\n#urlbar-container,\n#wrapper-urlbar-container {\n  flex: 400 0 auto;\n}\n\n:root[chromehidden~=\"toolbar\"] :is(#urlbar-container, #wrapper-urlbar-container) {\n  flex-shrink: 1;\n}\n\n#urlbar-search-splitter {\n  /* The splitter width should equal the location and search bars' combined\n     neighboring margin and border width. */\n  min-width: 12px;\n  margin: 0 -6px;\n  position: relative;\n  border: none;\n  background: transparent;\n  appearance: none;\n}\n\n/* Urlbar search mode indicator */\n#urlbar-search-mode-indicator {\n  display: none;\n  background-color: var(--urlbar-box-bgcolor);\n  color: var(--urlbar-box-text-color);\n  margin-inline-end: 8px;\n  align-items: center;\n  border-radius: var(--urlbar-icon-border-radius);\n  padding-inline: 8px 6px;\n}\n\n#urlbar[focused=\"true\"] #urlbar-search-mode-indicator {\n  background-color: var(--urlbar-box-focus-bgcolor);\n}\n\n#urlbar[searchmode] > #urlbar-input-container > #urlbar-search-mode-indicator {\n  display: inline-flex;\n}\n\n#urlbar[searchmode] > #urlbar-input-container > #urlbar-label-box {\n  display: none;\n}\n\n#urlbar-search-mode-indicator-close {\n  background: url(chrome://global/skin/icons/close.svg) no-repeat center;\n  background-size: round(62.5%, 2px);\n  width: round(max(16px, 1em), 2px);\n  height: round(max(16px, 1em), 2px);\n  -moz-context-properties: fill, fill-opacity;\n  fill-opacity: 0.6;\n  fill: currentColor;\n  border-radius: var(--urlbar-icon-border-radius);\n}\n\n@supports not (width: round(1em, 2px)) {\n  #urlbar-search-mode-indicator-close {\n    background-size: max(10px, 0.7em);\n    width: max(16px, 1em);\n    height: max(16px, 1em);\n  }\n}\n\n#urlbar-search-mode-indicator-close:hover {\n  background-color: var(--urlbar-box-hover-bgcolor);\n  color: var(--urlbar-box-hover-text-color);\n}\n#urlbar-search-mode-indicator-close:hover:active {\n  background-color: var(--urlbar-box-active-bgcolor);\n  color: var(--urlbar-box-hover-text-color);\n}\n\n@media (prefers-contrast) {\n  #urlbar-search-mode-indicator-close {\n    fill-opacity: 1.0;\n  }\n}\n\n#urlbar-search-mode-indicator-title {\n  padding-inline: 0 3px;\n}\n\n/* Page action panel */\n.pageAction-panel-button > .toolbarbutton-icon {\n  width: 16px;\n  height: 16px;\n}\n\n#pageAction-panel-bookmark,\n#star-button {\n  list-style-image: url(\"chrome://browser/skin/bookmark-hollow.svg\");\n}\n#pageAction-panel-bookmark[starred],\n#star-button[starred] {\n  list-style-image: url(\"chrome://browser/skin/bookmark.svg\");\n}\n#star-button[starred] {\n  fill-opacity: 1;\n  fill: var(--toolbarbutton-icon-fill-attention);\n}\n\n/* URL bar and page action buttons */\n\n/* The background can be very dark and if the add-on uses a black-ish svg it\n   will be barely visible. In the future we should have a standardized SVG\n   solution we can apply to add-on icons, for now we can only try to make them\n   visible through some filtering tricks */\n:root[lwt-toolbar-field-brighttext] #urlbar:not([focused=\"true\"]) .urlbar-addon-page-action[style*=\".svg\"] > .urlbar-icon,\n:root[lwt-toolbar-field-focus-brighttext] #urlbar[focused=\"true\"] .urlbar-addon-page-action[style*=\".svg\"] > .urlbar-icon {\n  filter: grayscale(100%) brightness(20%) invert();\n}\n\n@media (prefers-color-scheme: dark) {\n  /* As above, but for the default theme in dark mode, which suffers from the same issue */\n  :root:not(:-moz-lwtheme) .urlbar-addon-page-action[style*=\".svg\"] > .urlbar-icon {\n    filter: grayscale(100%) brightness(20%) invert();\n  }\n}\n\n#userContext-icons,\n#urlbar-zoom-button {\n  margin-inline: 6px;\n}\n\n.urlbar-icon {\n  width: 16px;\n  height: 16px;\n  -moz-context-properties: fill, fill-opacity;\n  fill: currentColor;\n  fill-opacity: var(--urlbar-icon-fill-opacity);\n}\n\n.urlbar-page-action,\n#urlbar-go-button,\n.search-go-button {\n  width: calc(var(--urlbar-min-height) - 2px /* border */ - 2 * var(--urlbar-container-padding));\n  height: calc(var(--urlbar-min-height) - 2px /* border */ - 2 * var(--urlbar-container-padding));\n  border-radius: var(--urlbar-icon-border-radius);\n  padding: var(--urlbar-icon-padding);\n  color: inherit;\n}\n\n.urlbar-page-action:not([disabled]):hover,\n#urlbar-go-button:hover,\n.search-go-button:hover {\n  background-color: var(--urlbar-box-hover-bgcolor);\n  color: var(--urlbar-box-hover-text-color);\n}\n\n.urlbar-page-action:not([disabled])[open],\n.urlbar-page-action:not([disabled]):hover:active,\n#urlbar-go-button:hover:active,\n.search-go-button:hover:active {\n  background-color: var(--urlbar-box-active-bgcolor);\n  color: var(--urlbar-box-hover-text-color);\n}\n\n.urlbar-page-action:focus-visible {\n  outline: var(--focus-outline);\n  outline-offset: var(--focus-outline-inset);\n}\n\n#urlbar-go-button,\n.search-go-button {\n  list-style-image: url(\"chrome://browser/skin/forward.svg\");\n}\n\n#urlbar-go-button:-moz-locale-dir(rtl),\n.search-go-button:-moz-locale-dir(rtl) {\n  transform: scaleX(-1);\n}\n\n#pageActionButton,\n.share-more-button {\n  list-style-image: url(\"chrome://global/skin/icons/more.svg\");\n}\n\n/**\n * Contextual Feature Recommendation\n *\n * Animate the recommendation icon to expand outwards and display a text label.\n * Fake the effect of a smoothly expanding width without animating any widths\n * by (continuously) animating only `mask-position-x` and `transform`.\n *\n * In a few places, transition a property using the timing-function `step-start`\n * while collapsed and `step-end` while expanded in order to (discretely) modify\n * the value while expanded and while transitioning in either direction.\n *\n * This UI is part of an experiment launching in LTR locales only. Fixing the\n * RTL issues is tracked by Bug 1485725.\n */\n\n:root {\n  --cfr-animation-duration: 0.35s;\n  --cfr-button-addons-icon: url(chrome://activity-stream/content/data/content/assets/glyph-webextension-16.svg);\n  --cfr-button-features-icon: url(chrome://activity-stream/content/data/content/assets/glyph-cfr-feature-16.svg);\n  --cfr-button-highlights-icon: url(chrome://global/skin/icons/highlights.svg);\n  --cfr-active-color: #0060df;\n}\n\n#contextual-feature-recommendation {\n  width: 28px;\n  margin-inline-start: 0;\n  transition: margin-inline-start step-end var(--cfr-animation-duration);\n}\n#urlbar[cfr-recommendation-state=\"expanded\"] #contextual-feature-recommendation {\n  margin-inline-start: calc(var(--cfr-label-width) * -1);\n  transition: margin-inline-start step-start var(--cfr-animation-duration);\n}\n\n#cfr-button {\n  margin: -2px 0;\n  transition-property: fill, fill-opacity, transform;\n  transition-timing-function: ease-in-out;\n  transition-duration: var(--cfr-animation-duration);\n}\n#contextual-feature-recommendation[data-cfr-icon=\"webextensions-icon\"] #cfr-button {\n  list-style-image: var(--cfr-button-addons-icon);\n}\n#contextual-feature-recommendation[data-cfr-icon=\"recommendations-icon\"] #cfr-button {\n  list-style-image: var(--cfr-button-features-icon);\n}\n#contextual-feature-recommendation[data-cfr-icon=\"highlights-icon\"] #cfr-button {\n  list-style-image: var(--cfr-button-highlights-icon);\n}\n#urlbar[cfr-recommendation-state=\"expanded\"] #cfr-button {\n  fill: white;\n  fill-opacity: 1;\n  background-color: transparent; /* Override hover background-color */\n  transform: translateX(calc(var(--cfr-label-width) * -1));\n}\n#urlbar[cfr-recommendation-state=\"expanded\"] #cfr-button:-moz-locale-dir(rtl) {\n  transform: translateX(calc(var(--cfr-label-width)));\n}\n@keyframes cfr-button-fade-through-active-color {\n  33% {\n    fill-opacity: 1;\n    fill: var(--cfr-active-color);\n  }\n  67% {\n    fill-opacity: 1;\n    fill: var(--cfr-active-color);\n  }\n}\n#urlbar[cfr-recommendation-state=\"collapsed\"] #cfr-button {\n  animation: cfr-button-fade-through-active-color calc(3 * var(--cfr-animation-duration));\n}\n\n#cfr-label-container {\n  width: 0;\n  overflow: hidden;\n  border-radius: 5px;\n  padding-inline-start: 28px;\n  mask-image: linear-gradient(to right, transparent 0, black 0);\n  mask-position-x: var(--cfr-label-width);\n  mask-repeat: no-repeat;\n  transition-property: background-color, mask-position-x, width, margin-inline-end;\n  transition-timing-function: ease-in-out, ease-in-out, step-end, step-end;\n  transition-duration: var(--cfr-animation-duration);\n  align-items: center;\n  margin-block: calc((var(--urlbar-min-height) - var(--urlbar-container-padding) - 2px /* border */ - 24px) / 2);\n}\n#cfr-label-container:-moz-locale-dir(rtl) {\n  mask-position-x: calc(var(--cfr-label-width) * -1);\n}\n\n#urlbar[cfr-recommendation-state=\"expanded\"] #cfr-label-container {\n  width: calc(var(--cfr-label-width) + 28px);\n  background-color: var(--cfr-active-color);\n  margin-inline-end: -28px;\n  mask-position-x: 0;\n  transition-timing-function: ease-in-out, ease-in-out, step-start, step-start;\n}\n\n#cfr-label {\n  margin: 0;\n  padding: 3px 5px;\n  padding-inline-start: 0;\n  color: white;\n  mask-image: linear-gradient(to right, transparent 0, black 0);\n  mask-position-x: var(--cfr-label-width);\n  mask-repeat: no-repeat;\n  transition: mask-position-x ease-in-out var(--cfr-animation-duration);\n}\n#cfr-label:-moz-locale-dir(rtl) {\n  mask-position-x: calc(var(--cfr-label-width) * -1);\n}\n#urlbar[cfr-recommendation-state=\"expanded\"] #cfr-label {\n  mask-position-x: 0;\n}\n\n/* Shift the url-bar text fading to stop the recommendation overlapping */\n#urlbar[cfr-recommendation-state] #urlbar-input {\n  /* A mask-image is usually only defined for the url bar when text overflows.\n     We need to re-define the mask image here so that it shows up correctly when\n     we transition to or from an `expanded` state (in which the right end of the\n     url bar may be obscured without overflow). */\n  mask-image: linear-gradient(to left, transparent, black 3ch);\n  transition: mask-position-x ease-in-out var(--cfr-animation-duration);\n}\n#urlbar[cfr-recommendation-state] #urlbar-input:-moz-locale-dir(rtl) {\n  mask-image: linear-gradient(to right, transparent, black 3ch);\n}\n#urlbar[cfr-recommendation-state=\"expanded\"] #urlbar-input {\n  mask-position-x: calc(var(--cfr-label-width) * -1);\n}\n#urlbar[cfr-recommendation-state=\"expanded\"] #urlbar-input:-moz-locale-dir(rtl) {\n  mask-position-x: calc(var(--cfr-label-width));\n}\n\n/* Reader mode icon */\n\n#reader-mode-button > .urlbar-icon {\n  list-style-image: url(chrome://browser/skin/reader-mode.svg);\n}\n\n#reader-mode-button[readeractive] > .urlbar-icon {\n  fill: var(--toolbarbutton-icon-fill-attention);\n  fill-opacity: 1;\n}\n\n/* Picture-in-Picture icon */\n#picture-in-picture-button > .urlbar-icon {\n  list-style-image: url(\"chrome://global/skin/media/picture-in-picture-open.svg\");\n}\n\n#picture-in-picture-button[pipactive] > .urlbar-icon {\n  list-style-image: url(\"chrome://global/skin/media/picture-in-picture-closed.svg\");\n}\n\n#picture-in-picture-button:-moz-locale-dir(rtl) > .urlbar-icon {\n  transform: scaleX(-1);\n}\n\n/* Translations button */\n\n#translations-button > .urlbar-icon {\n  list-style-image: url(chrome://browser/skin/translations.svg);\n}\n\n#translations-button[translationsactive] > .urlbar-icon {\n  fill: var(--toolbarbutton-icon-fill-attention);\n  fill-opacity: 1;\n}\n\n/* Zoom button */\n\n#urlbar-zoom-button {\n  appearance: none;\n  color: inherit;\n  font-size: .8em;\n  padding: 3px 7px;\n  border-radius: var(--urlbar-icon-border-radius);\n  background-color: var(--urlbar-box-bgcolor);\n  color: var(--urlbar-box-text-color);\n  margin-block: calc((var(--urlbar-min-height) - 20px) / 2 - 1px /* border */ - var(--urlbar-container-padding));\n  overflow: hidden;\n}\n\n#urlbar[focused=\"true\"] #urlbar-zoom-button:not(:hover) {\n  background-color: var(--urlbar-box-focus-bgcolor);\n}\n\n#urlbar-zoom-button:hover {\n  background-color: var(--urlbar-box-hover-bgcolor);\n  color: var(--urlbar-box-hover-text-color);\n}\n\n#urlbar-zoom-button:hover:active {\n  background-color: var(--urlbar-box-active-bgcolor);\n  color: var(--urlbar-box-hover-text-color);\n}\n\n@keyframes urlbar-zoom-reset-pulse {\n  0% {\n    transform: scale(0);\n  }\n  75% {\n    transform: scale(1.5);\n  }\n  100% {\n    transform: scale(1.0);\n  }\n}\n\n#urlbar-zoom-button[animate=\"true\"] {\n  animation-name: urlbar-zoom-reset-pulse;\n  animation-duration: 250ms;\n}\n\n#urlbar-zoom-button:focus-visible {\n  outline: var(--focus-outline);\n  outline-offset: var(--focus-outline-inset);\n}\n\n#urlbar-zoom-button > .toolbarbutton-text {\n  display: flex;\n}\n\n#urlbar-zoom-button > .toolbarbutton-icon {\n  display: none;\n}\n\n/* Search bar */\n\n#search-container {\n  min-width: 125px;\n  width: 125px;\n}\n\n#search-container,\n#wrapper-search-container {\n  flex: 175 175 auto;\n}\n\n#search-container[width] {\n  /* Take something closer to the explicit width when requested. Also important\n   * to use flex-basis auto so that the width is actually honored. */\n  flex: 1 auto;\n}\n\n#search-container[cui-areatype=\"panel\"] > #searchbar:-moz-lwtheme {\n  /* Theme authors usually only consider contrast against the toolbar when\n     picking a border color for the search bar. Since the search bar can be\n     dragged into the overflow panel, we need to show a high-contrast border\n     around the searchbar in case the searchbar and panel background are the\n     same color. */\n  border-color: var(--panel-separator-color);\n}\n\n.search-go-button {\n  margin-inline: 1px;\n}\n\n.searchbar-search-button {\n  align-items: center;\n  fill: currentColor;\n}\n\n.searchbar-search-icon {\n  list-style-image: url(chrome://global/skin/icons/search-glass.svg);\n  -moz-context-properties: fill, fill-opacity;\n  fill-opacity: var(--urlbar-icon-fill-opacity);\n  pointer-events: none;\n  margin-inline: 8px 6px;\n  width: 16px;\n}\n\n.searchbar-search-icon-overlay {\n  pointer-events: none;\n}\n\n.searchbar-search-button[addengines=true] > .searchbar-search-icon-overlay {\n  list-style-image: url(chrome://browser/skin/search-indicator-badge-add.svg);\n  margin-inline: -15px 4px;\n  margin-top: -10px;\n  width: 11px;\n  height: 11px;\n}\n\n.searchbar-search-button[addengines=true] > .searchbar-search-icon-overlay:-moz-locale-dir(rtl) {\n  margin-inline: -25px 14px;\n}\n\n.searchbar-search-button:hover:not([addengines=true]) > .searchbar-search-icon-overlay {\n  list-style-image: url(chrome://global/skin/icons/arrow-down-12.svg);\n  -moz-context-properties: fill;\n  margin-inline: -8px 2px;\n  width: 6px;\n  height: 6px;\n}\n\n.searchbar-search-button:hover:not([addengines=true]) > .searchbar-search-icon-overlay:-moz-locale-dir(rtl) {\n  margin-inline: -26px 20px;\n}\n\n.searchbar-engine-one-off-add-engine:not([image]),\nmoz-input-box > menupopup .context-menu-add-engine:not([image]) {\n  list-style-image: url(\"chrome://browser/skin/search-engine-placeholder.png\");\n}\n\n@media (min-resolution: 1.1dppx) {\n  .searchbar-engine-one-off-add-engine:not([image]),\n  moz-input-box > menupopup .context-menu-add-engine:not([image]) {\n    list-style-image: url(\"chrome://browser/skin/search-engine-placeholder@2x.png\");\n  }\n}\n\n.searchbar-engine-one-off-add-engine > .button-box::after,\nmoz-input-box > menupopup .context-menu-add-engine > .menu-iconic-left::after {\n  content: \"\";\n  position: relative;\n  display: flex;\n  background: url(chrome://browser/skin/search-indicator-badge-add.svg) no-repeat center;\n  height: 11px;\n  width: 11px;\n  margin-inline: -4px -7px;\n  margin-top: -13px;\n}\n\nmoz-input-box > menupopup .context-menu-add-engine > .menu-iconic-left::after {\n  /* These differ from the urlbar and searchbar because the context menu\n     may not have enough space */\n  margin-inline: -7px -4px;\n  margin-top: -8px;\n}\n\n/* Fade a little the icon so that the + badge is more evident and the button\n   is less likely to be visually confused with a normal search shortcut */\n.searchbar-engine-one-off-add-engine[image]:not(:hover) > .button-box > .button-icon {\n  opacity: 0.7;\n}\n.searchbar-engine-one-off-add-engine[image]:hover > .button-box > .button-icon {\n  opacity: 1;\n}\n", "",{"version":3,"sources":["webpack://./../../themes/shared/urlbar-searchbar.css"],"names":[],"mappings":"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","sourcesContent":["/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n@namespace html url(\"http://www.w3.org/1999/xhtml\");\n\n:root {\n  --toolbar-field-border-color: hsla(240,5%,5%,.25);\n  --toolbar-field-focus-border-color: var(--focus-outline-color);\n  --urlbar-container-padding: 1px;\n  --urlbar-margin-inline: 5px;\n  --urlbar-search-button-width: calc(16px + 2 * var(--urlbar-icon-padding));\n}\n\n@media not (prefers-contrast) {\n  :root {\n    --toolbar-field-border-color: transparent;\n    --toolbar-field-focus-border-color: color-mix(in srgb, var(--focus-outline-color) 50%, transparent);\n  }\n}\n\n#urlbar-container,\n#search-container {\n  padding-block: 4px;\n  margin-inline: var(--urlbar-margin-inline);\n}\n\n#search-container[cui-areatype=\"panel\"] {\n  margin: var(--arrowpanel-menuitem-margin);\n}\n\n:root[uidensity=touch] #urlbar-container,\n:root[uidensity=touch] #search-container {\n  padding-block: 5px;\n}\n\n#urlbar,\n#searchbar {\n  min-height: var(--urlbar-min-height);\n  text-shadow: none;\n  color: var(--toolbar-field-color);\n}\n\n/**\n * System colors and widgets are set based on toolbar color. Since toolbar\n * fields can be styled differently from the toolbar, we need to use the\n * correct color scheme in toolbar fields.\n */\n#urlbar:-moz-lwtheme,\n#searchbar:-moz-lwtheme {\n  color-scheme: light;\n}\n\n:root[lwt-toolbar-field-brighttext] #urlbar:not([focused=\"true\"]),\n:root[lwt-toolbar-field-brighttext] #searchbar:not(:focus-within),\n:root[lwt-toolbar-field-focus-brighttext] #urlbar[focused=\"true\"],\n:root[lwt-toolbar-field-focus-brighttext] #searchbar:focus-within {\n  color-scheme: dark;\n}\n\n#urlbar-background,\n#searchbar {\n  background-color: var(--toolbar-field-background-color);\n  background-clip: border-box;\n  border: 1px solid var(--toolbar-field-border-color);\n  border-radius: var(--toolbarbutton-border-radius);\n}\n\n#urlbar-input-container,\n#searchbar {\n  border-radius: var(--toolbarbutton-border-radius);\n  overflow: clip;\n}\n\n#urlbar-input,\n#urlbar-scheme,\n.searchbar-textbox {\n  flex: 1;\n  background-color: transparent;\n  color: inherit;\n  border: none;\n  margin: 0;\n  padding: 0;\n  outline: none;\n}\n\n#urlbar[focused=\"true\"]:not([suppress-focus-border]) > #urlbar-background,\n#searchbar:focus-within {\n  outline: var(--focus-outline);\n  outline-offset: var(--focus-outline-inset);\n  /* We used --focus-outline above to inherit its width and style properties,\n     but we still want to use the theme's border-color.\n     --toolbar-field-focus-border-color is set equal to --focus-outline-color\n     on :root, but LWT themes can override this value. */\n  outline-color: var(--toolbar-field-focus-border-color);\n  border-color: transparent;\n}\n\n#urlbar[focused=\"true\"] > #urlbar-background,\n#searchbar:focus-within {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.23);\n}\n\n#urlbar[open] > #urlbar-background {\n  border-color: var(--arrowpanel-border-color);\n  box-shadow: 0 2px 14px rgba(0, 0, 0, 0.13);\n}\n\n#urlbar:is([focused=\"true\"], [open]),\n#searchbar:focus-within {\n  color: var(--toolbar-field-focus-color);\n}\n\n#urlbar:is([focused=\"true\"], [open]) > #urlbar-background,\n#searchbar:focus-within {\n  background-color: var(--toolbar-field-focus-background-color);\n}\n\n#urlbar-input::placeholder,\n.searchbar-textbox::placeholder {\n  opacity: 0.69;\n}\n\n#TabsToolbar #searchbar:not(:focus-within) {\n  /* The tabs toolbar is usually a different color than the other toolbars, and\n     we can't predict it, to avoid a transparent field we enforce a border. */\n  border-color: color-mix(in srgb, currentColor 20%, transparent);\n}\n\n#urlbar-input:-moz-lwtheme::selection,\n.searchbar-textbox:-moz-lwtheme::selection {\n  background-color: var(--lwt-toolbar-field-highlight, Highlight);\n  color: var(--lwt-toolbar-field-highlight-text, HighlightText);\n}\n\n#urlbar-input:not(:focus):-moz-lwtheme::selection,\n.searchbar-textbox:not(:focus-within):-moz-lwtheme::selection {\n  background-color: var(--lwt-toolbar-field-highlight, text-select-disabled-background);\n}\n\n#urlbar:not([focused=\"true\"]) {\n  caret-color: transparent;\n}\n\n#urlbar.searchButton > #urlbar-input-container > #urlbar-search-button {\n  width: var(--urlbar-search-button-width);\n  background-image: url(chrome://global/skin/icons/search-glass.svg);\n  background-repeat: no-repeat;\n  background-position: center;\n  -moz-context-properties: fill, fill-opacity;\n  fill: var(--toolbarbutton-icon-fill);\n}\n\n#urlbar.searchButton > #urlbar-input-container[pageproxystate=\"invalid\"] > #urlbar-search-button {\n  margin-inline-end: 6px;\n}\n\n/**\n * The urlbar background is a separate element so we can animate it\n * independently from the content. It's positioned absolutely and stretched to\n * the bounds of the urlbar.\n */\n\n#urlbar,\n#urlbar-input-container,\n.urlbarView {\n  position: relative;\n}\n\n#urlbar-background {\n  display: block;\n  position: absolute;\n  inset: 0;\n}\n\n:root:not([chromehidden~=\"toolbar\"]) #urlbar.searchButton:not([breakout]) > #urlbar-background,\n:root:not([chromehidden~=\"toolbar\"]) #urlbar.searchButton:not([breakout-extend]) > #urlbar-background {\n  inset-inline-start: var(--urlbar-search-button-width);\n}\n\n#urlbar-input-container {\n  /* Match urlbar-background's border. */\n  border: 1px solid transparent;\n  padding: var(--urlbar-container-padding);\n}\n\n#urlbar-container[breakout] {\n  position: relative;\n  min-height: var(--urlbar-container-height);\n}\n\n#urlbar[breakout] {\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: var(--urlbar-height);\n  top: calc((var(--urlbar-toolbar-height) - var(--urlbar-height)) / 2);\n  left: 0;\n}\n\n#urlbar[breakout] > #urlbar-input-container {\n  width: 100%;\n  height: 100%;\n}\n\n#urlbar:not([open]) > .urlbarView,\n#urlbar:not([breakout]) > .urlbarView {\n  display: none;\n}\n\n#urlbar[breakout][breakout-extend],\n#urlbar[breakout][breakout-extend-disabled][open] {\n  /* The z-index needs to be big enough to trump other positioned UI pieces\n     that we want to overlay. 3 is used in the tab bar. */\n  z-index: 3;\n  height: auto;\n}\n\n#urlbar[breakout][breakout-extend] {\n  top: 0;\n  left: calc(-1 * var(--urlbar-margin-inline));\n  width: calc(100% + 2 * var(--urlbar-margin-inline));\n}\n\n#urlbar[breakout][breakout-extend] > #urlbar-input-container {\n  height: var(--urlbar-toolbar-height);\n  padding-block: calc((var(--urlbar-toolbar-height) - var(--urlbar-height)) / 2 + var(--urlbar-container-padding));\n  padding-inline: calc(var(--urlbar-margin-inline) + var(--urlbar-container-padding));\n}\n\n#urlbar.searchButton[breakout][breakout-extend] > #urlbar-input-container > #urlbar-search-button {\n  fill: currentColor;\n  fill-opacity: .6;\n}\n\n@keyframes urlbar-grow {\n  0% {\n    transform: scaleX(.99) scaleY(.98);\n  }\n  100% {\n    transform: scale(1.0);\n  }\n}\n\n#urlbar[breakout][breakout-extend] > #urlbar-background {\n  animation-name: urlbar-grow;\n  animation-duration: 0s;\n  animation-timing-function: var(--animation-easing-function);\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  #urlbar[breakout][breakout-extend][breakout-extend-animate] > #urlbar-background {\n    animation-duration: 150ms;\n  }\n}\n\n:root[chromehidden~=\"toolbar\"] #urlbar-container {\n  /* Remove excess space between the address bar and the menu button in popups. */\n  padding-inline-end: 0;\n}\n\n:root[customizing] .urlbar-input-box {\n  visibility: hidden;\n}\n\n#urlbar-container {\n  align-items: center;\n}\n\n#urlbar-container,\n#wrapper-urlbar-container {\n  flex: 400 0 auto;\n}\n\n:root[chromehidden~=\"toolbar\"] :is(#urlbar-container, #wrapper-urlbar-container) {\n  flex-shrink: 1;\n}\n\n#urlbar-search-splitter {\n  /* The splitter width should equal the location and search bars' combined\n     neighboring margin and border width. */\n  min-width: 12px;\n  margin: 0 -6px;\n  position: relative;\n  border: none;\n  background: transparent;\n  appearance: none;\n}\n\n/* Urlbar search mode indicator */\n#urlbar-search-mode-indicator {\n  display: none;\n  background-color: var(--urlbar-box-bgcolor);\n  color: var(--urlbar-box-text-color);\n  margin-inline-end: 8px;\n  align-items: center;\n  border-radius: var(--urlbar-icon-border-radius);\n  padding-inline: 8px 6px;\n}\n\n#urlbar[focused=\"true\"] #urlbar-search-mode-indicator {\n  background-color: var(--urlbar-box-focus-bgcolor);\n}\n\n#urlbar[searchmode] > #urlbar-input-container > #urlbar-search-mode-indicator {\n  display: inline-flex;\n}\n\n#urlbar[searchmode] > #urlbar-input-container > #urlbar-label-box {\n  display: none;\n}\n\n#urlbar-search-mode-indicator-close {\n  background: url(chrome://global/skin/icons/close.svg) no-repeat center;\n  background-size: round(62.5%, 2px);\n  width: round(max(16px, 1em), 2px);\n  height: round(max(16px, 1em), 2px);\n  -moz-context-properties: fill, fill-opacity;\n  fill-opacity: 0.6;\n  fill: currentColor;\n  border-radius: var(--urlbar-icon-border-radius);\n}\n\n@supports not (width: round(1em, 2px)) {\n  #urlbar-search-mode-indicator-close {\n    background-size: max(10px, 0.7em);\n    width: max(16px, 1em);\n    height: max(16px, 1em);\n  }\n}\n\n#urlbar-search-mode-indicator-close:hover {\n  background-color: var(--urlbar-box-hover-bgcolor);\n  color: var(--urlbar-box-hover-text-color);\n}\n#urlbar-search-mode-indicator-close:hover:active {\n  background-color: var(--urlbar-box-active-bgcolor);\n  color: var(--urlbar-box-hover-text-color);\n}\n\n@media (prefers-contrast) {\n  #urlbar-search-mode-indicator-close {\n    fill-opacity: 1.0;\n  }\n}\n\n#urlbar-search-mode-indicator-title {\n  padding-inline: 0 3px;\n}\n\n/* Page action panel */\n.pageAction-panel-button > .toolbarbutton-icon {\n  width: 16px;\n  height: 16px;\n}\n\n#pageAction-panel-bookmark,\n#star-button {\n  list-style-image: url(\"chrome://browser/skin/bookmark-hollow.svg\");\n}\n#pageAction-panel-bookmark[starred],\n#star-button[starred] {\n  list-style-image: url(\"chrome://browser/skin/bookmark.svg\");\n}\n#star-button[starred] {\n  fill-opacity: 1;\n  fill: var(--toolbarbutton-icon-fill-attention);\n}\n\n/* URL bar and page action buttons */\n\n/* The background can be very dark and if the add-on uses a black-ish svg it\n   will be barely visible. In the future we should have a standardized SVG\n   solution we can apply to add-on icons, for now we can only try to make them\n   visible through some filtering tricks */\n:root[lwt-toolbar-field-brighttext] #urlbar:not([focused=\"true\"]) .urlbar-addon-page-action[style*=\".svg\"] > .urlbar-icon,\n:root[lwt-toolbar-field-focus-brighttext] #urlbar[focused=\"true\"] .urlbar-addon-page-action[style*=\".svg\"] > .urlbar-icon {\n  filter: grayscale(100%) brightness(20%) invert();\n}\n\n@media (prefers-color-scheme: dark) {\n  /* As above, but for the default theme in dark mode, which suffers from the same issue */\n  :root:not(:-moz-lwtheme) .urlbar-addon-page-action[style*=\".svg\"] > .urlbar-icon {\n    filter: grayscale(100%) brightness(20%) invert();\n  }\n}\n\n#userContext-icons,\n#urlbar-zoom-button {\n  margin-inline: 6px;\n}\n\n.urlbar-icon {\n  width: 16px;\n  height: 16px;\n  -moz-context-properties: fill, fill-opacity;\n  fill: currentColor;\n  fill-opacity: var(--urlbar-icon-fill-opacity);\n}\n\n.urlbar-page-action,\n#urlbar-go-button,\n.search-go-button {\n  width: calc(var(--urlbar-min-height) - 2px /* border */ - 2 * var(--urlbar-container-padding));\n  height: calc(var(--urlbar-min-height) - 2px /* border */ - 2 * var(--urlbar-container-padding));\n  border-radius: var(--urlbar-icon-border-radius);\n  padding: var(--urlbar-icon-padding);\n  color: inherit;\n}\n\n.urlbar-page-action:not([disabled]):hover,\n#urlbar-go-button:hover,\n.search-go-button:hover {\n  background-color: var(--urlbar-box-hover-bgcolor);\n  color: var(--urlbar-box-hover-text-color);\n}\n\n.urlbar-page-action:not([disabled])[open],\n.urlbar-page-action:not([disabled]):hover:active,\n#urlbar-go-button:hover:active,\n.search-go-button:hover:active {\n  background-color: var(--urlbar-box-active-bgcolor);\n  color: var(--urlbar-box-hover-text-color);\n}\n\n.urlbar-page-action:focus-visible {\n  outline: var(--focus-outline);\n  outline-offset: var(--focus-outline-inset);\n}\n\n#urlbar-go-button,\n.search-go-button {\n  list-style-image: url(\"chrome://browser/skin/forward.svg\");\n}\n\n#urlbar-go-button:-moz-locale-dir(rtl),\n.search-go-button:-moz-locale-dir(rtl) {\n  transform: scaleX(-1);\n}\n\n#pageActionButton,\n.share-more-button {\n  list-style-image: url(\"chrome://global/skin/icons/more.svg\");\n}\n\n/**\n * Contextual Feature Recommendation\n *\n * Animate the recommendation icon to expand outwards and display a text label.\n * Fake the effect of a smoothly expanding width without animating any widths\n * by (continuously) animating only `mask-position-x` and `transform`.\n *\n * In a few places, transition a property using the timing-function `step-start`\n * while collapsed and `step-end` while expanded in order to (discretely) modify\n * the value while expanded and while transitioning in either direction.\n *\n * This UI is part of an experiment launching in LTR locales only. Fixing the\n * RTL issues is tracked by Bug 1485725.\n */\n\n:root {\n  --cfr-animation-duration: 0.35s;\n  --cfr-button-addons-icon: url(chrome://activity-stream/content/data/content/assets/glyph-webextension-16.svg);\n  --cfr-button-features-icon: url(chrome://activity-stream/content/data/content/assets/glyph-cfr-feature-16.svg);\n  --cfr-button-highlights-icon: url(chrome://global/skin/icons/highlights.svg);\n  --cfr-active-color: #0060df;\n}\n\n#contextual-feature-recommendation {\n  width: 28px;\n  margin-inline-start: 0;\n  transition: margin-inline-start step-end var(--cfr-animation-duration);\n}\n#urlbar[cfr-recommendation-state=\"expanded\"] #contextual-feature-recommendation {\n  margin-inline-start: calc(var(--cfr-label-width) * -1);\n  transition: margin-inline-start step-start var(--cfr-animation-duration);\n}\n\n#cfr-button {\n  margin: -2px 0;\n  transition-property: fill, fill-opacity, transform;\n  transition-timing-function: ease-in-out;\n  transition-duration: var(--cfr-animation-duration);\n}\n#contextual-feature-recommendation[data-cfr-icon=\"webextensions-icon\"] #cfr-button {\n  list-style-image: var(--cfr-button-addons-icon);\n}\n#contextual-feature-recommendation[data-cfr-icon=\"recommendations-icon\"] #cfr-button {\n  list-style-image: var(--cfr-button-features-icon);\n}\n#contextual-feature-recommendation[data-cfr-icon=\"highlights-icon\"] #cfr-button {\n  list-style-image: var(--cfr-button-highlights-icon);\n}\n#urlbar[cfr-recommendation-state=\"expanded\"] #cfr-button {\n  fill: white;\n  fill-opacity: 1;\n  background-color: transparent; /* Override hover background-color */\n  transform: translateX(calc(var(--cfr-label-width) * -1));\n}\n#urlbar[cfr-recommendation-state=\"expanded\"] #cfr-button:-moz-locale-dir(rtl) {\n  transform: translateX(calc(var(--cfr-label-width)));\n}\n@keyframes cfr-button-fade-through-active-color {\n  33% {\n    fill-opacity: 1;\n    fill: var(--cfr-active-color);\n  }\n  67% {\n    fill-opacity: 1;\n    fill: var(--cfr-active-color);\n  }\n}\n#urlbar[cfr-recommendation-state=\"collapsed\"] #cfr-button {\n  animation: cfr-button-fade-through-active-color calc(3 * var(--cfr-animation-duration));\n}\n\n#cfr-label-container {\n  width: 0;\n  overflow: hidden;\n  border-radius: 5px;\n  padding-inline-start: 28px;\n  mask-image: linear-gradient(to right, transparent 0, black 0);\n  mask-position-x: var(--cfr-label-width);\n  mask-repeat: no-repeat;\n  transition-property: background-color, mask-position-x, width, margin-inline-end;\n  transition-timing-function: ease-in-out, ease-in-out, step-end, step-end;\n  transition-duration: var(--cfr-animation-duration);\n  align-items: center;\n  margin-block: calc((var(--urlbar-min-height) - var(--urlbar-container-padding) - 2px /* border */ - 24px) / 2);\n}\n#cfr-label-container:-moz-locale-dir(rtl) {\n  mask-position-x: calc(var(--cfr-label-width) * -1);\n}\n\n#urlbar[cfr-recommendation-state=\"expanded\"] #cfr-label-container {\n  width: calc(var(--cfr-label-width) + 28px);\n  background-color: var(--cfr-active-color);\n  margin-inline-end: -28px;\n  mask-position-x: 0;\n  transition-timing-function: ease-in-out, ease-in-out, step-start, step-start;\n}\n\n#cfr-label {\n  margin: 0;\n  padding: 3px 5px;\n  padding-inline-start: 0;\n  color: white;\n  mask-image: linear-gradient(to right, transparent 0, black 0);\n  mask-position-x: var(--cfr-label-width);\n  mask-repeat: no-repeat;\n  transition: mask-position-x ease-in-out var(--cfr-animation-duration);\n}\n#cfr-label:-moz-locale-dir(rtl) {\n  mask-position-x: calc(var(--cfr-label-width) * -1);\n}\n#urlbar[cfr-recommendation-state=\"expanded\"] #cfr-label {\n  mask-position-x: 0;\n}\n\n/* Shift the url-bar text fading to stop the recommendation overlapping */\n#urlbar[cfr-recommendation-state] #urlbar-input {\n  /* A mask-image is usually only defined for the url bar when text overflows.\n     We need to re-define the mask image here so that it shows up correctly when\n     we transition to or from an `expanded` state (in which the right end of the\n     url bar may be obscured without overflow). */\n  mask-image: linear-gradient(to left, transparent, black 3ch);\n  transition: mask-position-x ease-in-out var(--cfr-animation-duration);\n}\n#urlbar[cfr-recommendation-state] #urlbar-input:-moz-locale-dir(rtl) {\n  mask-image: linear-gradient(to right, transparent, black 3ch);\n}\n#urlbar[cfr-recommendation-state=\"expanded\"] #urlbar-input {\n  mask-position-x: calc(var(--cfr-label-width) * -1);\n}\n#urlbar[cfr-recommendation-state=\"expanded\"] #urlbar-input:-moz-locale-dir(rtl) {\n  mask-position-x: calc(var(--cfr-label-width));\n}\n\n/* Reader mode icon */\n\n#reader-mode-button > .urlbar-icon {\n  list-style-image: url(chrome://browser/skin/reader-mode.svg);\n}\n\n#reader-mode-button[readeractive] > .urlbar-icon {\n  fill: var(--toolbarbutton-icon-fill-attention);\n  fill-opacity: 1;\n}\n\n/* Picture-in-Picture icon */\n#picture-in-picture-button > .urlbar-icon {\n  list-style-image: url(\"chrome://global/skin/media/picture-in-picture-open.svg\");\n}\n\n#picture-in-picture-button[pipactive] > .urlbar-icon {\n  list-style-image: url(\"chrome://global/skin/media/picture-in-picture-closed.svg\");\n}\n\n#picture-in-picture-button:-moz-locale-dir(rtl) > .urlbar-icon {\n  transform: scaleX(-1);\n}\n\n/* Translations button */\n\n#translations-button > .urlbar-icon {\n  list-style-image: url(chrome://browser/skin/translations.svg);\n}\n\n#translations-button[translationsactive] > .urlbar-icon {\n  fill: var(--toolbarbutton-icon-fill-attention);\n  fill-opacity: 1;\n}\n\n/* Zoom button */\n\n#urlbar-zoom-button {\n  appearance: none;\n  color: inherit;\n  font-size: .8em;\n  padding: 3px 7px;\n  border-radius: var(--urlbar-icon-border-radius);\n  background-color: var(--urlbar-box-bgcolor);\n  color: var(--urlbar-box-text-color);\n  margin-block: calc((var(--urlbar-min-height) - 20px) / 2 - 1px /* border */ - var(--urlbar-container-padding));\n  overflow: hidden;\n}\n\n#urlbar[focused=\"true\"] #urlbar-zoom-button:not(:hover) {\n  background-color: var(--urlbar-box-focus-bgcolor);\n}\n\n#urlbar-zoom-button:hover {\n  background-color: var(--urlbar-box-hover-bgcolor);\n  color: var(--urlbar-box-hover-text-color);\n}\n\n#urlbar-zoom-button:hover:active {\n  background-color: var(--urlbar-box-active-bgcolor);\n  color: var(--urlbar-box-hover-text-color);\n}\n\n@keyframes urlbar-zoom-reset-pulse {\n  0% {\n    transform: scale(0);\n  }\n  75% {\n    transform: scale(1.5);\n  }\n  100% {\n    transform: scale(1.0);\n  }\n}\n\n#urlbar-zoom-button[animate=\"true\"] {\n  animation-name: urlbar-zoom-reset-pulse;\n  animation-duration: 250ms;\n}\n\n#urlbar-zoom-button:focus-visible {\n  outline: var(--focus-outline);\n  outline-offset: var(--focus-outline-inset);\n}\n\n#urlbar-zoom-button > .toolbarbutton-text {\n  display: flex;\n}\n\n#urlbar-zoom-button > .toolbarbutton-icon {\n  display: none;\n}\n\n/* Search bar */\n\n#search-container {\n  min-width: 125px;\n  width: 125px;\n}\n\n#search-container,\n#wrapper-search-container {\n  flex: 175 175 auto;\n}\n\n#search-container[width] {\n  /* Take something closer to the explicit width when requested. Also important\n   * to use flex-basis auto so that the width is actually honored. */\n  flex: 1 auto;\n}\n\n#search-container[cui-areatype=\"panel\"] > #searchbar:-moz-lwtheme {\n  /* Theme authors usually only consider contrast against the toolbar when\n     picking a border color for the search bar. Since the search bar can be\n     dragged into the overflow panel, we need to show a high-contrast border\n     around the searchbar in case the searchbar and panel background are the\n     same color. */\n  border-color: var(--panel-separator-color);\n}\n\n.search-go-button {\n  margin-inline: 1px;\n}\n\n.searchbar-search-button {\n  align-items: center;\n  fill: currentColor;\n}\n\n.searchbar-search-icon {\n  list-style-image: url(chrome://global/skin/icons/search-glass.svg);\n  -moz-context-properties: fill, fill-opacity;\n  fill-opacity: var(--urlbar-icon-fill-opacity);\n  pointer-events: none;\n  margin-inline: 8px 6px;\n  width: 16px;\n}\n\n.searchbar-search-icon-overlay {\n  pointer-events: none;\n}\n\n.searchbar-search-button[addengines=true] > .searchbar-search-icon-overlay {\n  list-style-image: url(chrome://browser/skin/search-indicator-badge-add.svg);\n  margin-inline: -15px 4px;\n  margin-top: -10px;\n  width: 11px;\n  height: 11px;\n}\n\n.searchbar-search-button[addengines=true] > .searchbar-search-icon-overlay:-moz-locale-dir(rtl) {\n  margin-inline: -25px 14px;\n}\n\n.searchbar-search-button:hover:not([addengines=true]) > .searchbar-search-icon-overlay {\n  list-style-image: url(chrome://global/skin/icons/arrow-down-12.svg);\n  -moz-context-properties: fill;\n  margin-inline: -8px 2px;\n  width: 6px;\n  height: 6px;\n}\n\n.searchbar-search-button:hover:not([addengines=true]) > .searchbar-search-icon-overlay:-moz-locale-dir(rtl) {\n  margin-inline: -26px 20px;\n}\n\n.searchbar-engine-one-off-add-engine:not([image]),\nmoz-input-box > menupopup .context-menu-add-engine:not([image]) {\n  list-style-image: url(\"chrome://browser/skin/search-engine-placeholder.png\");\n}\n\n@media (min-resolution: 1.1dppx) {\n  .searchbar-engine-one-off-add-engine:not([image]),\n  moz-input-box > menupopup .context-menu-add-engine:not([image]) {\n    list-style-image: url(\"chrome://browser/skin/search-engine-placeholder@2x.png\");\n  }\n}\n\n.searchbar-engine-one-off-add-engine > .button-box::after,\nmoz-input-box > menupopup .context-menu-add-engine > .menu-iconic-left::after {\n  content: \"\";\n  position: relative;\n  display: flex;\n  background: url(chrome://browser/skin/search-indicator-badge-add.svg) no-repeat center;\n  height: 11px;\n  width: 11px;\n  margin-inline: -4px -7px;\n  margin-top: -13px;\n}\n\nmoz-input-box > menupopup .context-menu-add-engine > .menu-iconic-left::after {\n  /* These differ from the urlbar and searchbar because the context menu\n     may not have enough space */\n  margin-inline: -7px -4px;\n  margin-top: -8px;\n}\n\n/* Fade a little the icon so that the + badge is more evident and the button\n   is less likely to be visually confused with a normal search shortcut */\n.searchbar-engine-one-off-add-engine[image]:not(:hover) > .button-box > .button-icon {\n  opacity: 0.7;\n}\n.searchbar-engine-one-off-add-engine[image]:hover > .button-box > .button-icon {\n  opacity: 1;\n}\n"],"sourceRoot":""}]);
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

/***/ 99828:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93379);
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_urlbar_searchbar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41509);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_urlbar_searchbar_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_urlbar_searchbar_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
//# sourceMappingURL=9828.a2326364.iframe.bundle.js.map