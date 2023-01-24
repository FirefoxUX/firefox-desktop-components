"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[144],{

/***/ 11954:
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(chrome://browser/skin/urlbar-dynamic-results.css);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n@namespace html url(\"http://www.w3.org/1999/xhtml\");\n\n:root {\n  --autocomplete-popup-highlight-background: SelectedItem;\n  --autocomplete-popup-highlight-color: SelectedItemText;\n\n  --urlbar-popup-action-color: hsl(178, 100%, 28%);\n\n  --urlbarView-action-slide-in-distance: 200px;\n\n  --urlbarView-item-inline-padding: var(--urlbar-icon-padding);\n\n  --urlbarView-favicon-width: 16px;\n  --urlbarView-icon-margin-end: calc(var(--urlbar-icon-padding) + var(--identity-box-margin-inline));\n\n  --urlbarView-button-background-opacity: 60%;\n}\n\n:root:-moz-lwtheme {\n  --urlbar-popup-action-color: rgb(91,91,102);\n  --urlbar-popup-url-color: rgb(0,97,224);\n  /* Fallback colours for when theme authors don't define lwtheme variables. */\n  --autocomplete-popup-highlight-background: rgb(0, 99, 255);\n  --autocomplete-popup-highlight-color: white;\n}\n\n:root[lwt-toolbar-field-focus-brighttext] {\n  --urlbar-popup-url-color: var(--lwt-brighttext-url-color);\n  --urlbar-popup-action-color: #30e60b;\n}\n\n:root[lwt-toolbar-field-brighttext] {\n  --autocomplete-popup-highlight-background: rgb(0, 99, 225);\n}\n\n:root[lwt-toolbar-field-focus-brighttext] {\n  --urlbar-popup-action-color: rgb(191,191,201);\n}\n\n@media (prefers-contrast) {\n  :root {\n    --urlbarView-button-background-opacity: 100%;\n  }\n}\n\n:root:-moz-locale-dir(rtl) {\n  --urlbarView-action-slide-in-distance: -200px;\n}\n\n.urlbarView {\n  /* Don't handle window drag events in case we are overlapping a toolbar */\n  -moz-window-dragging: no-drag;\n\n  display: block;\n  text-shadow: none;\n  overflow: clip;\n  margin-inline: calc(5px + var(--urlbar-container-padding));\n  width: calc(100% - 2 * (5px + var(--urlbar-container-padding)));\n  /* Match urlbar-background's border. */\n  border-inline: 1px solid transparent;\n}\n\n.urlbarView-body-inner {\n  width: 100%;\n}\n\n#urlbar[open] > .urlbarView > .urlbarView-body-outer > .urlbarView-body-inner {\n  border-top: 1px solid var(--autocomplete-popup-separator-color);\n}\n\n.urlbarView-results {\n  padding-block: 4px;\n  white-space: nowrap;\n}\n\n/* Vertically center the one-offs when no results are present. */\n.urlbarView[noresults] > .urlbarView-body-outer > .urlbarView-body-inner > .urlbarView-results {\n  padding-block: 0;\n}\n\n.urlbarView-row {\n  display: flex;\n  align-items: center;\n  fill: currentColor;\n  fill-opacity: var(--urlbar-icon-fill-opacity);\n  margin-block: 2px;\n  border-radius: var(--toolbarbutton-border-radius);\n}\n\n:root:not([uidensity=compact]) .urlbarView-row:not([type=tip], [type=dynamic]) {\n  min-height: 32px;\n}\n\n:root[uidensity=touch] .urlbarView-row:not([type=tip], [type=dynamic]) {\n  padding-block: 11px;\n}\n\n.urlbarView-row-inner {\n  display: inline-flex;\n  flex: 1 1;\n  flex-wrap: nowrap;\n  overflow: hidden;\n  padding-inline: var(--urlbarView-item-inline-padding);\n  padding-block: 6px;\n}\n\n:root:not([uidensity=compact]) .urlbarView-row-inner {\n  min-height: 20px; /* row min-height 32px - (2 * padding-block 6px) */\n}\n\n.urlbarView-row-inner,\n.urlbarView-no-wrap {\n  flex-wrap: nowrap;\n  align-items: center;\n  justify-content: start;\n}\n\n.urlbarView-no-wrap {\n  display: inline-flex;\n  max-width: 100%;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\n.urlbarView-url {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n\n.urlbarView[actionoverride] .urlbarView-row[has-url] > .urlbarView-row-inner > .urlbarView-no-wrap,\n.urlbarView-row[has-url]:not([type$=tab]) > .urlbarView-row-inner > .urlbarView-no-wrap,\n.urlbarView-row[has-url]:is([type=remotetab], [sponsored]):is(:hover, [selected]) > .urlbarView-row-inner > .urlbarView-no-wrap {\n  /* We prioritize icons + title + action over the url, so they can grow freely,\n     but the url should never disappear when it's visible */\n  flex-shrink: 0;\n  max-width: calc(70% - 2 * (var(--urlbarView-favicon-width) + (6px + 2px)));\n}\n\n/* Wrap the url to a second line when the window is narrow. Do not wrap when the\n   window is also short, because fewer results will be shown. */\n@media screen and (min-height: 600px) {\n  .urlbarView-results[wrap] > .urlbarView-row > .urlbarView-row-inner {\n    flex-wrap: wrap;\n  }\n  .urlbarView-results[wrap] > .urlbarView-row > .urlbarView-row-inner > .urlbarView-no-wrap {\n    max-width: 100% !important;\n    flex-basis: 100%;\n  }\n  .urlbarView-results[wrap] > .urlbarView-row[has-url] > .urlbarView-row-inner > .urlbarView-url,\n  .urlbarView-results[wrap] > .urlbarView-row[type=bestmatch] > .urlbarView-row-inner > .urlbarView-row-body > .urlbarView-row-body-top > .urlbarView-url {\n    margin-top: 2px;\n  }\n  /* urlbarView-url is forced to be LTR for RTL locales, so set the padding based on the browser's directionality. */\n  .urlbarView-results[wrap] > .urlbarView-row[has-url] > .urlbarView-row-inner > .urlbarView-url:-moz-locale-dir(ltr) {\n    padding-left: calc(var(--urlbarView-item-inline-padding) + var(--identity-box-margin-inline) + var(--urlbarView-favicon-width));\n  }\n  .urlbarView-results[wrap] > .urlbarView-row[has-url] > .urlbarView-row-inner > .urlbarView-url:-moz-locale-dir(rtl) {\n    padding-right: calc(var(--urlbarView-item-inline-padding) + var(--identity-box-margin-inline) + var(--urlbarView-favicon-width));\n  }\n  /* Note: switchtab entries show the url only in override mode,\n     remotetab and sponsored ones only when selected or :hover. */\n  .urlbarView[actionoverride] .urlbarView-results[wrap] > .urlbarView-row[has-url] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-title-separator,\n  .urlbarView-results[wrap] > .urlbarView-row[has-url]:not([type$=tab], [sponsored]) > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-title-separator,\n  .urlbarView-results[wrap] > .urlbarView-row[has-url]:is([type=remotetab], [sponsored]):is(:hover, [selected]) > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-title-separator,\n  .urlbarView-results[wrap] > .urlbarView-row[type=bestmatch] > .urlbarView-row-inner > .urlbarView-row-body > .urlbarView-row-body-top > .urlbarView-row-body-top-no-wrap > .urlbarView-title-separator,\n  .urlbarView-results[wrap] > .urlbarView-row[type=tabtosearch] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-title-separator {\n    display: none;\n  }\n  .urlbarView-results[wrap] > .urlbarView-row[type=tabtosearch] > .urlbarView-row-inner > .urlbarView-no-wrap {\n    flex-wrap: wrap;\n  }\n  .urlbarView-results[wrap] > .urlbarView-row[type=tabtosearch] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-action {\n    flex-basis: 100%;\n    margin-inline-start: calc(var(--urlbarView-item-inline-padding) + var(--identity-box-margin-inline) + var(--urlbarView-favicon-width));\n  }\n\n  .urlbarView-results[wrap] > .urlbarView-row[type=bestmatch] > .urlbarView-row-inner > .urlbarView-row-body > .urlbarView-row-body-top {\n    flex-wrap: wrap;\n  }\n  .urlbarView-results[wrap] > .urlbarView-row[type=bestmatch] > .urlbarView-row-inner > .urlbarView-row-body > .urlbarView-row-body-top > .urlbarView-row-body-top-no-wrap {\n    flex-basis: 100%;\n  }\n}\n\n.urlbarView-row:not([type=tip], [type=dynamic]) > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-title[overflow],\n.urlbarView-row[type=bestmatch] > .urlbarView-row-inner > .urlbarView-row-body > .urlbarView-row-body-top > .urlbarView-row-body-top-no-wrap > .urlbarView-title[overflow],\n.urlbarView-tags[overflow],\n.urlbarView-url[overflow] {\n  mask-image: linear-gradient(to left, transparent, black 2em);\n}\n\n.urlbarView-row:not([type=tip], [type=dynamic]) > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-title[overflow]:not([isurl]):-moz-locale-dir(rtl),\n.urlbarView-row[type=bestmatch] > .urlbarView-row-inner > .urlbarView-row-body > .urlbarView-row-body-top > .urlbarView-row-body-top-no-wrap > .urlbarView-title[overflow]:-moz-locale-dir(rtl),\n.urlbarView-tags[overflow]:-moz-locale-dir(rtl) {\n  mask-image: linear-gradient(to right, transparent, black 2em);\n}\n\n.urlbarView-title[isurl]:-moz-locale-dir(rtl),\n.urlbarView-url:-moz-locale-dir(rtl) {\n  direction: ltr !important;\n}\n\n.urlbarView-url:-moz-locale-dir(rtl) {\n  /* .urlbarView-url can grow due to `flex-grow: 1`, so without `text-align:\n     right`, the URL text would be left-aligned within .urlbarView-url for RTL\n     due to the `direction: ltr` rule.  .urlbarView-title does not have this\n     problem since it does not have flex. */\n  text-align: right;\n}\n\n.urlbarView-row:not([type=tip], [type=dynamic]):hover {\n  background-color: var(--autocomplete-popup-hover-background);\n}\n\n.urlbarView-row:not([type=tip], [type=dynamic])[selected] {\n  background-color: var(--autocomplete-popup-highlight-background);\n  color: var(--autocomplete-popup-highlight-color);\n}\n\n/* Favicon */\n\n.urlbarView-favicon {\n  width: var(--urlbarView-favicon-width);\n  height: var(--urlbarView-favicon-width);\n  margin-inline-end: var(--urlbarView-icon-margin-end);\n  background-repeat: no-repeat;\n  background-size: contain;\n  object-fit: contain;\n  flex-shrink: 0;\n  -moz-context-properties: fill, fill-opacity;\n}\n\n\n.urlbarView-row[type=tip] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-favicon {\n  width: 24px;\n  height: 24px;\n  margin-inline-end: 12px;\n  flex-basis: 24px;\n  flex-grow:  0;\n}\n\n.urlbarView-row[tail-suggestion] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-favicon {\n  visibility: hidden;\n}\n\n.urlbarView-row[type=tabtosearch] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-favicon {\n  /* We use the URL color for this icon to inherit its accessibility\n     properties, like adapting to high contrast modes. We also want to ensure\n     contrast from the result highlight. */\n  color: var(--urlbar-popup-url-color);\n  -moz-context-properties: fill;\n}\n\n/* Type icon */\n\n.urlbarView-type-icon {\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  margin-top: var(--urlbarView-favicon-width);\n  margin-inline-start: 8px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  -moz-context-properties: fill, stroke;\n  stroke: var(--toolbar-field-focus-background-color);\n}\n\n/* Favicon badges have this priority: pinned > bookmark. */\n\n.urlbarView-row[type=bookmark] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-type-icon {\n  background-image: url(chrome://browser/skin/bookmark-12.svg);\n  fill: var(--toolbar-field-icon-fill-attention);\n}\n\n.urlbarView-row[pinned] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-type-icon {\n  background-image: url(chrome://browser/skin/pin-12.svg);\n  fill: rgb(91,91,102);\n}\n\n:root[lwt-toolbar-field-focus-brighttext] .urlbarView-row[pinned] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-type-icon {\n  fill: rgb(251,251,254);\n}\n\n/* Buttons */\n\n.urlbarView-button {\n  display: inline-block;\n  min-width: 24px;\n  min-height: 24px;\n  background-size: 16px;\n  background-position: center;\n  background-repeat: no-repeat;\n  margin-inline: 4px;\n  -moz-context-properties: fill, fill-opacity;\n  border-radius: 100%;\n}\n\n.urlbarView-button[selected] {\n  outline: var(--focus-outline);\n  outline-color: currentColor;\n  outline-offset: 1px;\n}\n\n.urlbarView-row:is(:hover, [selected]) > .urlbarView-button-menu:empty:not(:hover, [open]) {\n  background-color: color-mix(in srgb, var(--toolbar-field-focus-background-color) var(--urlbarView-button-background-opacity), transparent);\n}\n\n.urlbarView-button:is(:hover, [open]) {\n  fill: var(--toolbar-field-focus-background-color);\n  background-color: color-mix(in srgb, currentColor var(--urlbarView-button-background-opacity), transparent);\n}\n\n.urlbarView-button + .urlbarView-button {\n  margin-inline-start: 0;\n}\n\n.urlbarView-button-block {\n  background-image: url(\"chrome://browser/skin/thumb-down.svg\");\n}\n\n.urlbarView-button-help {\n  background-image: url(\"chrome://global/skin/icons/help.svg\");\n}\n\n.urlbarView-button-menu {\n  background-image: url(\"chrome://global/skin/icons/more.svg\");\n}\n\n.urlbarView-row:not(:hover, [selected]) > .urlbarView-row-inner + .urlbarView-button-menu:not([open]) {\n  display: none;\n}\n\n.urlbarView-button:not(:empty) {\n  min-height: 16px;\n  padding: 7px;\n}\n\n/* The tip button is a Photon default button when unfocused and a\n   primary button in all other states. */\n.urlbarView-button:not(:empty) {\n  border-radius: var(--toolbarbutton-border-radius);\n  font-size: 0.93em;\n  background-color: var(--button-bgcolor);\n  font-weight: 600;\n  background-clip: padding-box;\n  min-width: 8.75em;\n  text-align: center;\n  flex-basis: initial;\n  flex-shrink: 0;\n  margin-inline-end: 4px;\n}\n\n.urlbarView-button:not(:empty):hover {\n  background-color: var(--button-hover-bgcolor);\n}\n\n.urlbarView-button:not(:empty):hover:active {\n  background-color: var(--button-active-bgcolor);\n}\n\n.urlbarView-button:not(:empty)[selected] {\n  color: var(--button-primary-color);\n  background-color: var(--button-primary-bgcolor);\n  outline-offset: var(--focus-outline-offset);\n}\n\n.urlbarView-button:not(:empty)[selected]:hover {\n  background-color: var(--button-primary-hover-bgcolor);\n}\n\n.urlbarView-button:not(:empty)[selected]:hover:active {\n  background-color: var(--button-primary-active-bgcolor);\n}\n\n.urlbarView-button:not(:empty) + .urlbarView-button:empty {\n  /* Add space between a labeled button followed by an unlabeled button. */\n  margin-inline-start: 1.8em;\n}\n\n.urlbarView-button:not(:empty):last-child {\n  /* Add space between a labeled button and the trailing edge of the panel. */\n  margin-inline-end: 1.8em;\n}\n\n/* Tip rows */\n\n.urlbarView-row[type=tip] {\n  padding-block: 18px;\n}\n\n.urlbarView-row[type=tip]:not(:last-child) {\n  border-bottom: 1px solid var(--panel-separator-color);\n  margin-bottom: 4px;\n}\n\n.urlbarView-row[type=tip]:not(:first-child) {\n  border-top: 1px solid var(--panel-separator-color);\n  margin-top: 4px;\n}\n\n.urlbarView-row[type=tip] > .urlbarView-row-inner {\n  min-height: 32px;\n\n  /* Add space between the tip title (and the rest of row-inner) and its\n     button. */\n  margin-inline-end: 1.8em;\n}\n\n.urlbarView-row[type=tip] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-title-separator,\n.urlbarView-row[type=tip] > .urlbarView-row-inner > .urlbarView-url {\n  display: none;\n}\n\n.urlbarView-row[type=tip] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-title {\n  white-space: normal;\n}\n\n/* Row label (a.k.a. group label) */\n\n.urlbarView-row[label]::before {\n  content: attr(label);\n  display: block;\n  /* Remove the label from the document flow so it doesn't affect the row\n     selection and hover states. */\n  position: absolute;\n  /* `top` controls how far the label is from the main part of the row. */\n  top: -1.27em;\n  margin-inline-start: var(--urlbarView-item-inline-padding);\n  font-size: 0.8em;\n  /* The color and opacity of labels is the same as the \"This time, search with\"\n     text in the search shortcuts. See `.search-panel-header > label` in\n     searchbar.inc.css. */\n  opacity: 0.6;\n  pointer-events: none;\n}\n:root[lwt-toolbar-field-focus-brighttext] .urlbarView-row[label]::before {\n  /* Same as `.search-panel-header > label` in searchbar.inc.css */\n  opacity: 1;\n}\n\n.urlbarView-row[label] {\n  position: relative;\n  /* `margin-block-start` controls how far the main part of the row is from the\n     main part of the previous row. */\n  margin-block-start: 1.46em;\n}\n\n/* Title */\n\n.urlbarView-title {\n  overflow: hidden;\n  white-space: nowrap;\n  /* Explicitly set line-height to avoid excessively tall rows if the title triggers use of\n     fallback fonts with extreme metrics. */\n  line-height: 1.4;\n}\n\n/* Tail suggestions */\n.urlbarView-tail-prefix {\n  display: none;\n  justify-content: flex-end;\n  white-space: pre;\n}\n\n.urlbarView-row[tail-suggestion] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-tail-prefix {\n  display: inline-flex;\n}\n\n.urlbarView-tail-prefix > .urlbarView-tail-prefix-string {\n  visibility: hidden;\n}\n\n.urlbarView-tail-prefix > .urlbarView-tail-prefix-char {\n  position: absolute;\n}\n\n/* Title separator */\n\n.urlbarView-title-separator::before {\n  content: \"\\2014\";\n  margin: 0 .4em;\n  opacity: 0.6;\n}\n\n.urlbarView-title:empty + .urlbarView-tags:empty + .urlbarView-title-separator {\n  display: none;\n}\n\n/* URLs, action labels, tags */\n\n.urlbarView-tags,\n.urlbarView-url,\n.urlbarView-title:not(:empty) ~ .urlbarView-action {\n  font-size: .85em;\n}\n\n.urlbarView-title:not(:empty) ~ .urlbarView-action {\n  color: var(--urlbar-popup-action-color);\n}\n\n.urlbarView-row[sponsored] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-action {\n  color: unset;\n  opacity: .6;\n}\n\n.urlbarView-row[sponsored][selected] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-action,\n.urlbarView-row[sponsored] > .urlbarView-row-inner[selected] > .urlbarView-no-wrap > .urlbarView-action {\n  opacity: 1;\n}\n\n/* Firefox Suggest sponsored results */\n\n.urlbarView-row[firefox-suggest-sponsored] > .urlbarView-row-inner {\n  /* 0px of top padding because the space between the favicon/title and the top\n     edge of the row is determined by the favicon margin-top and we don't want\n     any extra padding to complicate that. 1px of bottom padding so the bottom\n     edge of the action isn't touching the bottom edge of the row. The space\n     between the bottom edge of the favicon and the bottom edge of the row is\n     determined by this + the action margin-top. */\n  padding-block: 0 1px;\n}\n\n.urlbarView-row[firefox-suggest-sponsored] > .urlbarView-row-inner > .urlbarView-no-wrap {\n  /* Wrap the action span onto a new row. */\n  flex-wrap: wrap;\n}\n\n.urlbarView-row[firefox-suggest-sponsored] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-favicon {\n  /* The favicon should be vertically centered in the row. The action span wraps\n     below the favicon and title, leaving the favicon centered with the title,\n     not the row, so we add margin-top. Normally there is 8x between the top\n     edge of the favicon and the top edge of the row. Here 1em = 13.75px, so\n     that's 8 / 13.75 =~ 0.58em. */\n  margin-top: 0.58em;\n}\n\n.urlbarView-row[firefox-suggest-sponsored] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-title {\n  /* The width of favicon + this title element + help icon is over than total\n     displayed width, favicon and title will collapse as different row, the style\n     will be broken. To avoid it, we specify the max displayable width for title\n     explicitly. */\n  flex-basis: calc(100% - var(--urlbarView-favicon-width) - var(--urlbarView-icon-margin-end));\n  /* Move the title away from the action a little. This does not affect the\n     height of the row. */\n  margin-top: -0.3em;\n}\n\n.urlbarView-row[firefox-suggest-sponsored] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-action {\n  flex-basis: 100%;\n  margin-inline-start: calc(var(--urlbarView-favicon-width) + var(--urlbarView-icon-margin-end));\n  font-size: 0.73em;\n  /* This value + the bottom padding control the space between the bottom edge\n     of the favicon and the bottom edge of the row. The bottom padding is 1px,\n     leaving 8px - 1px = 7px we need to make up here. Here 1em = 0.73 * 13.75 =~\n     10px, so that's 7 / 10 = 0.7em. However, the action itself takes up some of\n     that space, so it's not that simple. The value used here was arrived at by\n     trial and error and is approximately 5px. */\n  margin-top: -0.5em;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  /* The slide-in effect is delayed ~100ms to reduce motion during result\n     composition. We set opacity: 0 at the 0% keyframe to ensure the text is not\n     seen by the user until after the delay. */\n  @keyframes urlbarView-action-slide-in {\n    0%, 28.6% {\n      translate: var(--urlbarView-action-slide-in-distance);\n      opacity: 0;\n    }\n    100% {\n      translate: 0;\n      opacity: 1;\n    }\n  }\n\n  .urlbarView-results > .urlbarView-row > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-title:not(:empty) ~ .urlbarView-action[slide-in] {\n    animation-name: urlbarView-action-slide-in;\n    animation-duration: 350ms;\n    animation-timing-function: var(--animation-easing-function);\n  }\n}\n\n.urlbarView-url {\n  overflow: hidden;\n  color: var(--urlbar-popup-url-color);\n  /* Increase line-height to avoid cutting overhanging glyphs due to masking on\n     the element */\n  line-height: 1.4;\n}\n\n.urlbarView-row:is(:hover, [selected]) > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-action,\n.urlbarView-row:is(:hover, [selected]) > .urlbarView-row-inner > .urlbarView-url,\n.urlbarView-row[type=tabtosearch][selected] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-favicon {\n  color: inherit;\n}\n\n.urlbarView-row:is([type=remotetab], [sponsored]):not([selected], :hover) > .urlbarView-row-inner > .urlbarView-url,\n.urlbarView-row:is([type=search], [restyled-search]):not([selected], [show-action-text], :hover) > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-title-separator,\n.urlbarView-row:not([has-action], [has-url], [restyled-search]) > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-title-separator,\n.urlbarView:not([actionoverride]) .urlbarView-row[type=switchtab] > .urlbarView-row-inner > .urlbarView-url {\n  /* Use visibility:collapse instead of display:none since the latter can\n     confuse the overflow state of title and url elements when their content\n     changes while they're hidden. */\n  visibility: collapse;\n}\n\n.urlbarView-row[has-url]:is([type=remotetab], [sponsored]):is([selected], :hover) > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-action,\n.urlbarView-row:is([type=search], [restyled-search]):not([selected], [show-action-text], :hover) > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-action,\n.urlbarView-row:not([has-action], [has-url], [restyled-search]) > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-action,\n.urlbarView-row[firefox-suggest-sponsored] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-title-separator,\n.urlbarView[actionoverride] .urlbarView-row[type=switchtab] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-action {\n  display: none;\n}\n\n/* Switch-to-tab action text is styled as a chiclet. */\n.urlbarView-row:is([type=switchtab], [type=remotetab]) > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-action {\n  color: var(--urlbar-box-text-color);\n  background-color: var(--urlbar-box-focus-bgcolor);\n  border-radius: var(--toolbarbutton-border-radius);\n  padding: 6px 8px;\n  margin-block: -6px;\n  margin-inline-start: 8px;\n}\n\n:root[uidensity=compact] .urlbarView-row:is([type=switchtab], [type=remotetab]) > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-action {\n  padding: 3px 6px;\n  margin-block: -3px;\n}\n\n/* On hover and selected the chiclet background would fade into the row style,\n   thus we invert the background, using the panel color, instead. */\n.urlbarView-row:is([type=switchtab], [type=remotetab]):is([selected], :hover) > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-action {\n  background-color: var(--toolbar-field-focus-background-color);\n  color: var(--toolbar-field-focus-color);\n}\n\n.urlbarView-row[type=remotetab]:not([selected], :hover) > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-title-separator::before,\n.urlbarView:not([actionoverride]) .urlbarView-row[type=switchtab] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-title-separator::before {\n  /* We make the title separator transparent so it stays in the accessibility\n     tree. We want screen readers to pause between the result title and the\n     switch-to-tab action text. */\n  opacity: 0;\n  /* -1em for the width of the \\2014 character. -.4em to offset the\n     margin-inline-start already set on this element. */\n  margin-inline-end: -1.4em;\n}\n\n/* Tags */\n\n.urlbarView-tags {\n  overflow: hidden;\n  display: flex;\n  /* Increase line-height to avoid cutting overhanging glyphs due to masking on\n     the element */\n  line-height: 1.4;\n}\n\n.urlbarView-tag {\n  border: 1px solid color-mix(in srgb, currentColor 30%, transparent);\n  padding: 0 4px;\n  margin-inline-start: .4em;\n  border-radius: 4px;\n}\n\n/* Best match */\n\n.urlbarView-row[type=bestmatch] > .urlbarView-row-inner {\n  align-items: center;\n  justify-content: start;\n}\n\n.urlbarView-row[type=bestmatch] > .urlbarView-row-inner,\n.urlbarView-results[wrap] > .urlbarView-row[type=bestmatch] > .urlbarView-row-inner {\n  flex-wrap: nowrap;\n}\n\n.urlbarView-row[type=bestmatch] > .urlbarView-row-inner > .urlbarView-favicon {\n  width: 52px;\n  height: 52px;\n  flex-basis: 52px;\n  flex-shrink: 0;\n  flex-grow: 0;\n  border-radius: 2px;\n}\n\n.urlbarView-row[type=bestmatch] > .urlbarView-row-inner > .urlbarView-row-body {\n  flex-grow: 1;\n  flex-shrink: 1;\n  min-width: 0;\n}\n\n.urlbarView-row[type=bestmatch] > .urlbarView-row-inner > .urlbarView-row-body > .urlbarView-row-body-top {\n  display: flex;\n  flex-wrap: nowrap;\n  flex-direction: row;\n  align-items: center;\n  justify-content: start;\n}\n\n.urlbarView-row[type=bestmatch] > .urlbarView-row-inner > .urlbarView-row-body > .urlbarView-row-body-top > .urlbarView-row-body-top-no-wrap {\n  display: flex;\n  flex-wrap: nowrap;\n  flex-direction: row;\n  align-items: center;\n  justify-content: start;\n  flex-shrink: 0;\n  min-width: 0;\n}\n\n.urlbarView-results:not([wrap]) > .urlbarView-row[type=bestmatch] > .urlbarView-row-inner > .urlbarView-row-body > .urlbarView-row-body-top > .urlbarView-row-body-top-no-wrap {\n  /* Limit the title (which is inside .urlbarView-row-body-top-no-wrap) to 70%\n     of the width so the URL is never completely hidden. */\n  max-width: 70%;\n}\n\n.urlbarView-row[type=bestmatch] > .urlbarView-row-inner > .urlbarView-row-body > .urlbarView-row-body-bottom {\n  font-size: 0.73em;\n  opacity: 0.6;\n}\n\n.urlbarView-row[type=bestmatch][selected] > .urlbarView-row-inner > .urlbarView-row-body > .urlbarView-row-body-bottom {\n  opacity: 1;\n}\n\n/* Search one-offs */\n\n#urlbar .search-one-offs:not([hidden]) {\n  display: flex;\n  align-items: start;\n  padding-block: 10px;\n  flex-wrap: wrap;\n}\n\n.urlbarView:not([noresults]) > .search-one-offs:not([hidden]) {\n  border-top: 1px solid var(--autocomplete-popup-separator-color);\n}\n\n:root[uidensity=touch] #urlbar .search-one-offs:not([hidden]) {\n  padding-block: 15px;\n}\n\n#urlbar .search-panel-one-offs-container {\n  /* Make sure horizontally we can fit four buttons, empty space, settings. */\n  min-width: calc(4 * /* one-off with end margin */ 40px + /* settings with start margin */ 56px);\n}\n\n#urlbar .search-panel-header {\n  padding: 0;\n  min-height: 28px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n#urlbar .search-panel-one-offs-header-label {\n  white-space: nowrap;\n  margin: 0;\n  padding-inline: var(--urlbarView-item-inline-padding) 18px;\n}\n\n#urlbar .searchbar-engine-one-off-item {\n  min-width: 28px;\n  height: 28px;\n  margin-inline: 0 12px;\n  border-radius: var(--toolbarbutton-border-radius);\n}\n\n#urlbar .searchbar-engine-one-off-item:last-child {\n  /* This applies to both the last one-off and the compact settings button */\n  margin-inline-end: 0;\n}\n\n#urlbar .search-setting-button {\n  /* Force empty space before the button */\n  margin-inline-start: calc(32px - /* settings start padding */ 8px );\n}\n\n.urlbarView-row[source=\"bookmarks\"] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-favicon,\n#urlbar-engine-one-off-item-bookmarks {\n  list-style-image: url(\"chrome://browser/skin/bookmark.svg\");\n  fill: var(--toolbar-field-icon-fill-attention);\n  fill-opacity: 1;\n  -moz-context-properties: fill, fill-opacity;\n}\n\n.urlbarView-row[source=\"tabs\"] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-favicon,\n#urlbar-engine-one-off-item-tabs {\n  list-style-image: url(\"chrome://browser/skin/tab.svg\");\n  -moz-context-properties: fill, fill-opacity;\n  fill: currentColor;\n  fill-opacity: var(--urlbar-icon-fill-opacity);\n}\n\n.urlbarView-row[source=\"history\"] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-favicon,\n#urlbar-engine-one-off-item-history {\n  list-style-image: url(\"chrome://browser/skin/history.svg\");\n  -moz-context-properties: fill, fill-opacity;\n  fill: currentColor;\n  fill-opacity: var(--urlbar-icon-fill-opacity);\n}\n\n.urlbarView-row[source=\"actions\"] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-favicon,\n#urlbar-engine-one-off-item-actions {\n  list-style-image: url(\"chrome://browser/skin/quickactions.svg\");\n  -moz-context-properties: fill, fill-opacity;\n  fill: currentColor;\n  fill-opacity: var(--urlbar-icon-fill-opacity);\n}\n\n/**\n * We remove the blue fill from the bookmark icon when it is selected. We use\n * a blue color as the selection background-color in some instances (Linux with\n * blue system color; fallback for third-party themes) and we want to ensure\n * contrast.\n */\n.urlbarView-row[source=\"bookmarks\"][selected] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-favicon,\n#urlbar-engine-one-off-item-bookmarks[selected] {\n  fill: currentColor;\n  fill-opacity: var(--urlbar-icon-fill-opacity);\n}\n\n/* search bar popup */\n\n#PopupSearchAutoComplete {\n  --panel-color: var(--toolbar-field-focus-color);\n  --panel-background: var(--toolbar-field-focus-background-color);\n  --panel-border-color: var(--arrowpanel-border-color);\n}\n\n#PopupSearchAutoComplete::part(content)  {\n  --panel-padding: var(--panel-subview-body-padding);\n  /* NOTE(emilio): Once bug 1551637 is fixed we don't need to use block layout\n   * for this (though it doesn't really hurt) */\n  display: block;\n}\n\n@media not (prefers-contrast) {\n  #PopupSearchAutoComplete::part(content)  {\n    /* Remove the top border since the panel is flush with the input. */\n   border-top-width: 0;\n  }\n}\n\n#PopupSearchAutoComplete .autocomplete-richlistitem[selected] {\n  background: var(--autocomplete-popup-highlight-background);\n  color: var(--autocomplete-popup-highlight-color);\n}\n", "",{"version":3,"sources":["webpack://./../../themes/shared/urlbarView.css"],"names":[],"mappings":"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","sourcesContent":["/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n@import url(\"chrome://browser/skin/urlbar-dynamic-results.css\");\n\n@namespace html url(\"http://www.w3.org/1999/xhtml\");\n\n:root {\n  --autocomplete-popup-highlight-background: SelectedItem;\n  --autocomplete-popup-highlight-color: SelectedItemText;\n\n  --urlbar-popup-action-color: hsl(178, 100%, 28%);\n\n  --urlbarView-action-slide-in-distance: 200px;\n\n  --urlbarView-item-inline-padding: var(--urlbar-icon-padding);\n\n  --urlbarView-favicon-width: 16px;\n  --urlbarView-icon-margin-end: calc(var(--urlbar-icon-padding) + var(--identity-box-margin-inline));\n\n  --urlbarView-button-background-opacity: 60%;\n}\n\n:root:-moz-lwtheme {\n  --urlbar-popup-action-color: rgb(91,91,102);\n  --urlbar-popup-url-color: rgb(0,97,224);\n  /* Fallback colours for when theme authors don't define lwtheme variables. */\n  --autocomplete-popup-highlight-background: rgb(0, 99, 255);\n  --autocomplete-popup-highlight-color: white;\n}\n\n:root[lwt-toolbar-field-focus-brighttext] {\n  --urlbar-popup-url-color: var(--lwt-brighttext-url-color);\n  --urlbar-popup-action-color: #30e60b;\n}\n\n:root[lwt-toolbar-field-brighttext] {\n  --autocomplete-popup-highlight-background: rgb(0, 99, 225);\n}\n\n:root[lwt-toolbar-field-focus-brighttext] {\n  --urlbar-popup-action-color: rgb(191,191,201);\n}\n\n@media (prefers-contrast) {\n  :root {\n    --urlbarView-button-background-opacity: 100%;\n  }\n}\n\n:root:-moz-locale-dir(rtl) {\n  --urlbarView-action-slide-in-distance: -200px;\n}\n\n.urlbarView {\n  /* Don't handle window drag events in case we are overlapping a toolbar */\n  -moz-window-dragging: no-drag;\n\n  display: block;\n  text-shadow: none;\n  overflow: clip;\n  margin-inline: calc(5px + var(--urlbar-container-padding));\n  width: calc(100% - 2 * (5px + var(--urlbar-container-padding)));\n  /* Match urlbar-background's border. */\n  border-inline: 1px solid transparent;\n}\n\n.urlbarView-body-inner {\n  width: 100%;\n}\n\n#urlbar[open] > .urlbarView > .urlbarView-body-outer > .urlbarView-body-inner {\n  border-top: 1px solid var(--autocomplete-popup-separator-color);\n}\n\n.urlbarView-results {\n  padding-block: 4px;\n  white-space: nowrap;\n}\n\n/* Vertically center the one-offs when no results are present. */\n.urlbarView[noresults] > .urlbarView-body-outer > .urlbarView-body-inner > .urlbarView-results {\n  padding-block: 0;\n}\n\n.urlbarView-row {\n  display: flex;\n  align-items: center;\n  fill: currentColor;\n  fill-opacity: var(--urlbar-icon-fill-opacity);\n  margin-block: 2px;\n  border-radius: var(--toolbarbutton-border-radius);\n}\n\n:root:not([uidensity=compact]) .urlbarView-row:not([type=tip], [type=dynamic]) {\n  min-height: 32px;\n}\n\n:root[uidensity=touch] .urlbarView-row:not([type=tip], [type=dynamic]) {\n  padding-block: 11px;\n}\n\n.urlbarView-row-inner {\n  display: inline-flex;\n  flex: 1 1;\n  flex-wrap: nowrap;\n  overflow: hidden;\n  padding-inline: var(--urlbarView-item-inline-padding);\n  padding-block: 6px;\n}\n\n:root:not([uidensity=compact]) .urlbarView-row-inner {\n  min-height: 20px; /* row min-height 32px - (2 * padding-block 6px) */\n}\n\n.urlbarView-row-inner,\n.urlbarView-no-wrap {\n  flex-wrap: nowrap;\n  align-items: center;\n  justify-content: start;\n}\n\n.urlbarView-no-wrap {\n  display: inline-flex;\n  max-width: 100%;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\n.urlbarView-url {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n\n.urlbarView[actionoverride] .urlbarView-row[has-url] > .urlbarView-row-inner > .urlbarView-no-wrap,\n.urlbarView-row[has-url]:not([type$=tab]) > .urlbarView-row-inner > .urlbarView-no-wrap,\n.urlbarView-row[has-url]:is([type=remotetab], [sponsored]):is(:hover, [selected]) > .urlbarView-row-inner > .urlbarView-no-wrap {\n  /* We prioritize icons + title + action over the url, so they can grow freely,\n     but the url should never disappear when it's visible */\n  flex-shrink: 0;\n  max-width: calc(70% - 2 * (var(--urlbarView-favicon-width) + (6px + 2px)));\n}\n\n/* Wrap the url to a second line when the window is narrow. Do not wrap when the\n   window is also short, because fewer results will be shown. */\n@media screen and (min-height: 600px) {\n  .urlbarView-results[wrap] > .urlbarView-row > .urlbarView-row-inner {\n    flex-wrap: wrap;\n  }\n  .urlbarView-results[wrap] > .urlbarView-row > .urlbarView-row-inner > .urlbarView-no-wrap {\n    max-width: 100% !important;\n    flex-basis: 100%;\n  }\n  .urlbarView-results[wrap] > .urlbarView-row[has-url] > .urlbarView-row-inner > .urlbarView-url,\n  .urlbarView-results[wrap] > .urlbarView-row[type=bestmatch] > .urlbarView-row-inner > .urlbarView-row-body > .urlbarView-row-body-top > .urlbarView-url {\n    margin-top: 2px;\n  }\n  /* urlbarView-url is forced to be LTR for RTL locales, so set the padding based on the browser's directionality. */\n  .urlbarView-results[wrap] > .urlbarView-row[has-url] > .urlbarView-row-inner > .urlbarView-url:-moz-locale-dir(ltr) {\n    padding-left: calc(var(--urlbarView-item-inline-padding) + var(--identity-box-margin-inline) + var(--urlbarView-favicon-width));\n  }\n  .urlbarView-results[wrap] > .urlbarView-row[has-url] > .urlbarView-row-inner > .urlbarView-url:-moz-locale-dir(rtl) {\n    padding-right: calc(var(--urlbarView-item-inline-padding) + var(--identity-box-margin-inline) + var(--urlbarView-favicon-width));\n  }\n  /* Note: switchtab entries show the url only in override mode,\n     remotetab and sponsored ones only when selected or :hover. */\n  .urlbarView[actionoverride] .urlbarView-results[wrap] > .urlbarView-row[has-url] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-title-separator,\n  .urlbarView-results[wrap] > .urlbarView-row[has-url]:not([type$=tab], [sponsored]) > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-title-separator,\n  .urlbarView-results[wrap] > .urlbarView-row[has-url]:is([type=remotetab], [sponsored]):is(:hover, [selected]) > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-title-separator,\n  .urlbarView-results[wrap] > .urlbarView-row[type=bestmatch] > .urlbarView-row-inner > .urlbarView-row-body > .urlbarView-row-body-top > .urlbarView-row-body-top-no-wrap > .urlbarView-title-separator,\n  .urlbarView-results[wrap] > .urlbarView-row[type=tabtosearch] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-title-separator {\n    display: none;\n  }\n  .urlbarView-results[wrap] > .urlbarView-row[type=tabtosearch] > .urlbarView-row-inner > .urlbarView-no-wrap {\n    flex-wrap: wrap;\n  }\n  .urlbarView-results[wrap] > .urlbarView-row[type=tabtosearch] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-action {\n    flex-basis: 100%;\n    margin-inline-start: calc(var(--urlbarView-item-inline-padding) + var(--identity-box-margin-inline) + var(--urlbarView-favicon-width));\n  }\n\n  .urlbarView-results[wrap] > .urlbarView-row[type=bestmatch] > .urlbarView-row-inner > .urlbarView-row-body > .urlbarView-row-body-top {\n    flex-wrap: wrap;\n  }\n  .urlbarView-results[wrap] > .urlbarView-row[type=bestmatch] > .urlbarView-row-inner > .urlbarView-row-body > .urlbarView-row-body-top > .urlbarView-row-body-top-no-wrap {\n    flex-basis: 100%;\n  }\n}\n\n.urlbarView-row:not([type=tip], [type=dynamic]) > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-title[overflow],\n.urlbarView-row[type=bestmatch] > .urlbarView-row-inner > .urlbarView-row-body > .urlbarView-row-body-top > .urlbarView-row-body-top-no-wrap > .urlbarView-title[overflow],\n.urlbarView-tags[overflow],\n.urlbarView-url[overflow] {\n  mask-image: linear-gradient(to left, transparent, black 2em);\n}\n\n.urlbarView-row:not([type=tip], [type=dynamic]) > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-title[overflow]:not([isurl]):-moz-locale-dir(rtl),\n.urlbarView-row[type=bestmatch] > .urlbarView-row-inner > .urlbarView-row-body > .urlbarView-row-body-top > .urlbarView-row-body-top-no-wrap > .urlbarView-title[overflow]:-moz-locale-dir(rtl),\n.urlbarView-tags[overflow]:-moz-locale-dir(rtl) {\n  mask-image: linear-gradient(to right, transparent, black 2em);\n}\n\n.urlbarView-title[isurl]:-moz-locale-dir(rtl),\n.urlbarView-url:-moz-locale-dir(rtl) {\n  direction: ltr !important;\n}\n\n.urlbarView-url:-moz-locale-dir(rtl) {\n  /* .urlbarView-url can grow due to `flex-grow: 1`, so without `text-align:\n     right`, the URL text would be left-aligned within .urlbarView-url for RTL\n     due to the `direction: ltr` rule.  .urlbarView-title does not have this\n     problem since it does not have flex. */\n  text-align: right;\n}\n\n.urlbarView-row:not([type=tip], [type=dynamic]):hover {\n  background-color: var(--autocomplete-popup-hover-background);\n}\n\n.urlbarView-row:not([type=tip], [type=dynamic])[selected] {\n  background-color: var(--autocomplete-popup-highlight-background);\n  color: var(--autocomplete-popup-highlight-color);\n}\n\n/* Favicon */\n\n.urlbarView-favicon {\n  width: var(--urlbarView-favicon-width);\n  height: var(--urlbarView-favicon-width);\n  margin-inline-end: var(--urlbarView-icon-margin-end);\n  background-repeat: no-repeat;\n  background-size: contain;\n  object-fit: contain;\n  flex-shrink: 0;\n  -moz-context-properties: fill, fill-opacity;\n}\n\n\n.urlbarView-row[type=tip] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-favicon {\n  width: 24px;\n  height: 24px;\n  margin-inline-end: 12px;\n  flex-basis: 24px;\n  flex-grow:  0;\n}\n\n.urlbarView-row[tail-suggestion] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-favicon {\n  visibility: hidden;\n}\n\n.urlbarView-row[type=tabtosearch] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-favicon {\n  /* We use the URL color for this icon to inherit its accessibility\n     properties, like adapting to high contrast modes. We also want to ensure\n     contrast from the result highlight. */\n  color: var(--urlbar-popup-url-color);\n  -moz-context-properties: fill;\n}\n\n/* Type icon */\n\n.urlbarView-type-icon {\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  margin-top: var(--urlbarView-favicon-width);\n  margin-inline-start: 8px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  -moz-context-properties: fill, stroke;\n  stroke: var(--toolbar-field-focus-background-color);\n}\n\n/* Favicon badges have this priority: pinned > bookmark. */\n\n.urlbarView-row[type=bookmark] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-type-icon {\n  background-image: url(chrome://browser/skin/bookmark-12.svg);\n  fill: var(--toolbar-field-icon-fill-attention);\n}\n\n.urlbarView-row[pinned] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-type-icon {\n  background-image: url(chrome://browser/skin/pin-12.svg);\n  fill: rgb(91,91,102);\n}\n\n:root[lwt-toolbar-field-focus-brighttext] .urlbarView-row[pinned] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-type-icon {\n  fill: rgb(251,251,254);\n}\n\n/* Buttons */\n\n.urlbarView-button {\n  display: inline-block;\n  min-width: 24px;\n  min-height: 24px;\n  background-size: 16px;\n  background-position: center;\n  background-repeat: no-repeat;\n  margin-inline: 4px;\n  -moz-context-properties: fill, fill-opacity;\n  border-radius: 100%;\n}\n\n.urlbarView-button[selected] {\n  outline: var(--focus-outline);\n  outline-color: currentColor;\n  outline-offset: 1px;\n}\n\n.urlbarView-row:is(:hover, [selected]) > .urlbarView-button-menu:empty:not(:hover, [open]) {\n  background-color: color-mix(in srgb, var(--toolbar-field-focus-background-color) var(--urlbarView-button-background-opacity), transparent);\n}\n\n.urlbarView-button:is(:hover, [open]) {\n  fill: var(--toolbar-field-focus-background-color);\n  background-color: color-mix(in srgb, currentColor var(--urlbarView-button-background-opacity), transparent);\n}\n\n.urlbarView-button + .urlbarView-button {\n  margin-inline-start: 0;\n}\n\n.urlbarView-button-block {\n  background-image: url(\"chrome://browser/skin/thumb-down.svg\");\n}\n\n.urlbarView-button-help {\n  background-image: url(\"chrome://global/skin/icons/help.svg\");\n}\n\n.urlbarView-button-menu {\n  background-image: url(\"chrome://global/skin/icons/more.svg\");\n}\n\n.urlbarView-row:not(:hover, [selected]) > .urlbarView-row-inner + .urlbarView-button-menu:not([open]) {\n  display: none;\n}\n\n.urlbarView-button:not(:empty) {\n  min-height: 16px;\n  padding: 7px;\n}\n\n/* The tip button is a Photon default button when unfocused and a\n   primary button in all other states. */\n.urlbarView-button:not(:empty) {\n  border-radius: var(--toolbarbutton-border-radius);\n  font-size: 0.93em;\n  background-color: var(--button-bgcolor);\n  font-weight: 600;\n  background-clip: padding-box;\n  min-width: 8.75em;\n  text-align: center;\n  flex-basis: initial;\n  flex-shrink: 0;\n  margin-inline-end: 4px;\n}\n\n.urlbarView-button:not(:empty):hover {\n  background-color: var(--button-hover-bgcolor);\n}\n\n.urlbarView-button:not(:empty):hover:active {\n  background-color: var(--button-active-bgcolor);\n}\n\n.urlbarView-button:not(:empty)[selected] {\n  color: var(--button-primary-color);\n  background-color: var(--button-primary-bgcolor);\n  outline-offset: var(--focus-outline-offset);\n}\n\n.urlbarView-button:not(:empty)[selected]:hover {\n  background-color: var(--button-primary-hover-bgcolor);\n}\n\n.urlbarView-button:not(:empty)[selected]:hover:active {\n  background-color: var(--button-primary-active-bgcolor);\n}\n\n.urlbarView-button:not(:empty) + .urlbarView-button:empty {\n  /* Add space between a labeled button followed by an unlabeled button. */\n  margin-inline-start: 1.8em;\n}\n\n.urlbarView-button:not(:empty):last-child {\n  /* Add space between a labeled button and the trailing edge of the panel. */\n  margin-inline-end: 1.8em;\n}\n\n/* Tip rows */\n\n.urlbarView-row[type=tip] {\n  padding-block: 18px;\n}\n\n.urlbarView-row[type=tip]:not(:last-child) {\n  border-bottom: 1px solid var(--panel-separator-color);\n  margin-bottom: 4px;\n}\n\n.urlbarView-row[type=tip]:not(:first-child) {\n  border-top: 1px solid var(--panel-separator-color);\n  margin-top: 4px;\n}\n\n.urlbarView-row[type=tip] > .urlbarView-row-inner {\n  min-height: 32px;\n\n  /* Add space between the tip title (and the rest of row-inner) and its\n     button. */\n  margin-inline-end: 1.8em;\n}\n\n.urlbarView-row[type=tip] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-title-separator,\n.urlbarView-row[type=tip] > .urlbarView-row-inner > .urlbarView-url {\n  display: none;\n}\n\n.urlbarView-row[type=tip] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-title {\n  white-space: normal;\n}\n\n/* Row label (a.k.a. group label) */\n\n.urlbarView-row[label]::before {\n  content: attr(label);\n  display: block;\n  /* Remove the label from the document flow so it doesn't affect the row\n     selection and hover states. */\n  position: absolute;\n  /* `top` controls how far the label is from the main part of the row. */\n  top: -1.27em;\n  margin-inline-start: var(--urlbarView-item-inline-padding);\n  font-size: 0.8em;\n  /* The color and opacity of labels is the same as the \"This time, search with\"\n     text in the search shortcuts. See `.search-panel-header > label` in\n     searchbar.inc.css. */\n  opacity: 0.6;\n  pointer-events: none;\n}\n:root[lwt-toolbar-field-focus-brighttext] .urlbarView-row[label]::before {\n  /* Same as `.search-panel-header > label` in searchbar.inc.css */\n  opacity: 1;\n}\n\n.urlbarView-row[label] {\n  position: relative;\n  /* `margin-block-start` controls how far the main part of the row is from the\n     main part of the previous row. */\n  margin-block-start: 1.46em;\n}\n\n/* Title */\n\n.urlbarView-title {\n  overflow: hidden;\n  white-space: nowrap;\n  /* Explicitly set line-height to avoid excessively tall rows if the title triggers use of\n     fallback fonts with extreme metrics. */\n  line-height: 1.4;\n}\n\n/* Tail suggestions */\n.urlbarView-tail-prefix {\n  display: none;\n  justify-content: flex-end;\n  white-space: pre;\n}\n\n.urlbarView-row[tail-suggestion] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-tail-prefix {\n  display: inline-flex;\n}\n\n.urlbarView-tail-prefix > .urlbarView-tail-prefix-string {\n  visibility: hidden;\n}\n\n.urlbarView-tail-prefix > .urlbarView-tail-prefix-char {\n  position: absolute;\n}\n\n/* Title separator */\n\n.urlbarView-title-separator::before {\n  content: \"\\2014\";\n  margin: 0 .4em;\n  opacity: 0.6;\n}\n\n.urlbarView-title:empty + .urlbarView-tags:empty + .urlbarView-title-separator {\n  display: none;\n}\n\n/* URLs, action labels, tags */\n\n.urlbarView-tags,\n.urlbarView-url,\n.urlbarView-title:not(:empty) ~ .urlbarView-action {\n  font-size: .85em;\n}\n\n.urlbarView-title:not(:empty) ~ .urlbarView-action {\n  color: var(--urlbar-popup-action-color);\n}\n\n.urlbarView-row[sponsored] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-action {\n  color: unset;\n  opacity: .6;\n}\n\n.urlbarView-row[sponsored][selected] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-action,\n.urlbarView-row[sponsored] > .urlbarView-row-inner[selected] > .urlbarView-no-wrap > .urlbarView-action {\n  opacity: 1;\n}\n\n/* Firefox Suggest sponsored results */\n\n.urlbarView-row[firefox-suggest-sponsored] > .urlbarView-row-inner {\n  /* 0px of top padding because the space between the favicon/title and the top\n     edge of the row is determined by the favicon margin-top and we don't want\n     any extra padding to complicate that. 1px of bottom padding so the bottom\n     edge of the action isn't touching the bottom edge of the row. The space\n     between the bottom edge of the favicon and the bottom edge of the row is\n     determined by this + the action margin-top. */\n  padding-block: 0 1px;\n}\n\n.urlbarView-row[firefox-suggest-sponsored] > .urlbarView-row-inner > .urlbarView-no-wrap {\n  /* Wrap the action span onto a new row. */\n  flex-wrap: wrap;\n}\n\n.urlbarView-row[firefox-suggest-sponsored] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-favicon {\n  /* The favicon should be vertically centered in the row. The action span wraps\n     below the favicon and title, leaving the favicon centered with the title,\n     not the row, so we add margin-top. Normally there is 8x between the top\n     edge of the favicon and the top edge of the row. Here 1em = 13.75px, so\n     that's 8 / 13.75 =~ 0.58em. */\n  margin-top: 0.58em;\n}\n\n.urlbarView-row[firefox-suggest-sponsored] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-title {\n  /* The width of favicon + this title element + help icon is over than total\n     displayed width, favicon and title will collapse as different row, the style\n     will be broken. To avoid it, we specify the max displayable width for title\n     explicitly. */\n  flex-basis: calc(100% - var(--urlbarView-favicon-width) - var(--urlbarView-icon-margin-end));\n  /* Move the title away from the action a little. This does not affect the\n     height of the row. */\n  margin-top: -0.3em;\n}\n\n.urlbarView-row[firefox-suggest-sponsored] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-action {\n  flex-basis: 100%;\n  margin-inline-start: calc(var(--urlbarView-favicon-width) + var(--urlbarView-icon-margin-end));\n  font-size: 0.73em;\n  /* This value + the bottom padding control the space between the bottom edge\n     of the favicon and the bottom edge of the row. The bottom padding is 1px,\n     leaving 8px - 1px = 7px we need to make up here. Here 1em = 0.73 * 13.75 =~\n     10px, so that's 7 / 10 = 0.7em. However, the action itself takes up some of\n     that space, so it's not that simple. The value used here was arrived at by\n     trial and error and is approximately 5px. */\n  margin-top: -0.5em;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  /* The slide-in effect is delayed ~100ms to reduce motion during result\n     composition. We set opacity: 0 at the 0% keyframe to ensure the text is not\n     seen by the user until after the delay. */\n  @keyframes urlbarView-action-slide-in {\n    0%, 28.6% {\n      translate: var(--urlbarView-action-slide-in-distance);\n      opacity: 0;\n    }\n    100% {\n      translate: 0;\n      opacity: 1;\n    }\n  }\n\n  .urlbarView-results > .urlbarView-row > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-title:not(:empty) ~ .urlbarView-action[slide-in] {\n    animation-name: urlbarView-action-slide-in;\n    animation-duration: 350ms;\n    animation-timing-function: var(--animation-easing-function);\n  }\n}\n\n.urlbarView-url {\n  overflow: hidden;\n  color: var(--urlbar-popup-url-color);\n  /* Increase line-height to avoid cutting overhanging glyphs due to masking on\n     the element */\n  line-height: 1.4;\n}\n\n.urlbarView-row:is(:hover, [selected]) > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-action,\n.urlbarView-row:is(:hover, [selected]) > .urlbarView-row-inner > .urlbarView-url,\n.urlbarView-row[type=tabtosearch][selected] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-favicon {\n  color: inherit;\n}\n\n.urlbarView-row:is([type=remotetab], [sponsored]):not([selected], :hover) > .urlbarView-row-inner > .urlbarView-url,\n.urlbarView-row:is([type=search], [restyled-search]):not([selected], [show-action-text], :hover) > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-title-separator,\n.urlbarView-row:not([has-action], [has-url], [restyled-search]) > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-title-separator,\n.urlbarView:not([actionoverride]) .urlbarView-row[type=switchtab] > .urlbarView-row-inner > .urlbarView-url {\n  /* Use visibility:collapse instead of display:none since the latter can\n     confuse the overflow state of title and url elements when their content\n     changes while they're hidden. */\n  visibility: collapse;\n}\n\n.urlbarView-row[has-url]:is([type=remotetab], [sponsored]):is([selected], :hover) > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-action,\n.urlbarView-row:is([type=search], [restyled-search]):not([selected], [show-action-text], :hover) > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-action,\n.urlbarView-row:not([has-action], [has-url], [restyled-search]) > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-action,\n.urlbarView-row[firefox-suggest-sponsored] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-title-separator,\n.urlbarView[actionoverride] .urlbarView-row[type=switchtab] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-action {\n  display: none;\n}\n\n/* Switch-to-tab action text is styled as a chiclet. */\n.urlbarView-row:is([type=switchtab], [type=remotetab]) > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-action {\n  color: var(--urlbar-box-text-color);\n  background-color: var(--urlbar-box-focus-bgcolor);\n  border-radius: var(--toolbarbutton-border-radius);\n  padding: 6px 8px;\n  margin-block: -6px;\n  margin-inline-start: 8px;\n}\n\n:root[uidensity=compact] .urlbarView-row:is([type=switchtab], [type=remotetab]) > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-action {\n  padding: 3px 6px;\n  margin-block: -3px;\n}\n\n/* On hover and selected the chiclet background would fade into the row style,\n   thus we invert the background, using the panel color, instead. */\n.urlbarView-row:is([type=switchtab], [type=remotetab]):is([selected], :hover) > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-action {\n  background-color: var(--toolbar-field-focus-background-color);\n  color: var(--toolbar-field-focus-color);\n}\n\n.urlbarView-row[type=remotetab]:not([selected], :hover) > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-title-separator::before,\n.urlbarView:not([actionoverride]) .urlbarView-row[type=switchtab] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-title-separator::before {\n  /* We make the title separator transparent so it stays in the accessibility\n     tree. We want screen readers to pause between the result title and the\n     switch-to-tab action text. */\n  opacity: 0;\n  /* -1em for the width of the \\2014 character. -.4em to offset the\n     margin-inline-start already set on this element. */\n  margin-inline-end: -1.4em;\n}\n\n/* Tags */\n\n.urlbarView-tags {\n  overflow: hidden;\n  display: flex;\n  /* Increase line-height to avoid cutting overhanging glyphs due to masking on\n     the element */\n  line-height: 1.4;\n}\n\n.urlbarView-tag {\n  border: 1px solid color-mix(in srgb, currentColor 30%, transparent);\n  padding: 0 4px;\n  margin-inline-start: .4em;\n  border-radius: 4px;\n}\n\n/* Best match */\n\n.urlbarView-row[type=bestmatch] > .urlbarView-row-inner {\n  align-items: center;\n  justify-content: start;\n}\n\n.urlbarView-row[type=bestmatch] > .urlbarView-row-inner,\n.urlbarView-results[wrap] > .urlbarView-row[type=bestmatch] > .urlbarView-row-inner {\n  flex-wrap: nowrap;\n}\n\n.urlbarView-row[type=bestmatch] > .urlbarView-row-inner > .urlbarView-favicon {\n  width: 52px;\n  height: 52px;\n  flex-basis: 52px;\n  flex-shrink: 0;\n  flex-grow: 0;\n  border-radius: 2px;\n}\n\n.urlbarView-row[type=bestmatch] > .urlbarView-row-inner > .urlbarView-row-body {\n  flex-grow: 1;\n  flex-shrink: 1;\n  min-width: 0;\n}\n\n.urlbarView-row[type=bestmatch] > .urlbarView-row-inner > .urlbarView-row-body > .urlbarView-row-body-top {\n  display: flex;\n  flex-wrap: nowrap;\n  flex-direction: row;\n  align-items: center;\n  justify-content: start;\n}\n\n.urlbarView-row[type=bestmatch] > .urlbarView-row-inner > .urlbarView-row-body > .urlbarView-row-body-top > .urlbarView-row-body-top-no-wrap {\n  display: flex;\n  flex-wrap: nowrap;\n  flex-direction: row;\n  align-items: center;\n  justify-content: start;\n  flex-shrink: 0;\n  min-width: 0;\n}\n\n.urlbarView-results:not([wrap]) > .urlbarView-row[type=bestmatch] > .urlbarView-row-inner > .urlbarView-row-body > .urlbarView-row-body-top > .urlbarView-row-body-top-no-wrap {\n  /* Limit the title (which is inside .urlbarView-row-body-top-no-wrap) to 70%\n     of the width so the URL is never completely hidden. */\n  max-width: 70%;\n}\n\n.urlbarView-row[type=bestmatch] > .urlbarView-row-inner > .urlbarView-row-body > .urlbarView-row-body-bottom {\n  font-size: 0.73em;\n  opacity: 0.6;\n}\n\n.urlbarView-row[type=bestmatch][selected] > .urlbarView-row-inner > .urlbarView-row-body > .urlbarView-row-body-bottom {\n  opacity: 1;\n}\n\n/* Search one-offs */\n\n#urlbar .search-one-offs:not([hidden]) {\n  display: flex;\n  align-items: start;\n  padding-block: 10px;\n  flex-wrap: wrap;\n}\n\n.urlbarView:not([noresults]) > .search-one-offs:not([hidden]) {\n  border-top: 1px solid var(--autocomplete-popup-separator-color);\n}\n\n:root[uidensity=touch] #urlbar .search-one-offs:not([hidden]) {\n  padding-block: 15px;\n}\n\n#urlbar .search-panel-one-offs-container {\n  /* Make sure horizontally we can fit four buttons, empty space, settings. */\n  min-width: calc(4 * /* one-off with end margin */ 40px + /* settings with start margin */ 56px);\n}\n\n#urlbar .search-panel-header {\n  padding: 0;\n  min-height: 28px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n#urlbar .search-panel-one-offs-header-label {\n  white-space: nowrap;\n  margin: 0;\n  padding-inline: var(--urlbarView-item-inline-padding) 18px;\n}\n\n#urlbar .searchbar-engine-one-off-item {\n  min-width: 28px;\n  height: 28px;\n  margin-inline: 0 12px;\n  border-radius: var(--toolbarbutton-border-radius);\n}\n\n#urlbar .searchbar-engine-one-off-item:last-child {\n  /* This applies to both the last one-off and the compact settings button */\n  margin-inline-end: 0;\n}\n\n#urlbar .search-setting-button {\n  /* Force empty space before the button */\n  margin-inline-start: calc(32px - /* settings start padding */ 8px );\n}\n\n.urlbarView-row[source=\"bookmarks\"] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-favicon,\n#urlbar-engine-one-off-item-bookmarks {\n  list-style-image: url(\"chrome://browser/skin/bookmark.svg\");\n  fill: var(--toolbar-field-icon-fill-attention);\n  fill-opacity: 1;\n  -moz-context-properties: fill, fill-opacity;\n}\n\n.urlbarView-row[source=\"tabs\"] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-favicon,\n#urlbar-engine-one-off-item-tabs {\n  list-style-image: url(\"chrome://browser/skin/tab.svg\");\n  -moz-context-properties: fill, fill-opacity;\n  fill: currentColor;\n  fill-opacity: var(--urlbar-icon-fill-opacity);\n}\n\n.urlbarView-row[source=\"history\"] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-favicon,\n#urlbar-engine-one-off-item-history {\n  list-style-image: url(\"chrome://browser/skin/history.svg\");\n  -moz-context-properties: fill, fill-opacity;\n  fill: currentColor;\n  fill-opacity: var(--urlbar-icon-fill-opacity);\n}\n\n.urlbarView-row[source=\"actions\"] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-favicon,\n#urlbar-engine-one-off-item-actions {\n  list-style-image: url(\"chrome://browser/skin/quickactions.svg\");\n  -moz-context-properties: fill, fill-opacity;\n  fill: currentColor;\n  fill-opacity: var(--urlbar-icon-fill-opacity);\n}\n\n/**\n * We remove the blue fill from the bookmark icon when it is selected. We use\n * a blue color as the selection background-color in some instances (Linux with\n * blue system color; fallback for third-party themes) and we want to ensure\n * contrast.\n */\n.urlbarView-row[source=\"bookmarks\"][selected] > .urlbarView-row-inner > .urlbarView-no-wrap > .urlbarView-favicon,\n#urlbar-engine-one-off-item-bookmarks[selected] {\n  fill: currentColor;\n  fill-opacity: var(--urlbar-icon-fill-opacity);\n}\n\n/* search bar popup */\n\n#PopupSearchAutoComplete {\n  --panel-color: var(--toolbar-field-focus-color);\n  --panel-background: var(--toolbar-field-focus-background-color);\n  --panel-border-color: var(--arrowpanel-border-color);\n}\n\n#PopupSearchAutoComplete::part(content)  {\n  --panel-padding: var(--panel-subview-body-padding);\n  /* NOTE(emilio): Once bug 1551637 is fixed we don't need to use block layout\n   * for this (though it doesn't really hurt) */\n  display: block;\n}\n\n@media not (prefers-contrast) {\n  #PopupSearchAutoComplete::part(content)  {\n    /* Remove the top border since the panel is flush with the input. */\n   border-top-width: 0;\n  }\n}\n\n#PopupSearchAutoComplete .autocomplete-richlistitem[selected] {\n  background: var(--autocomplete-popup-highlight-background);\n  color: var(--autocomplete-popup-highlight-color);\n}\n"],"sourceRoot":""}]);
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

/***/ 144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93379);
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_urlbarView_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11954);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_urlbarView_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_urlbarView_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
//# sourceMappingURL=144.eaac9719.iframe.bundle.js.map