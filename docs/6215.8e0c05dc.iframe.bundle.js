"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[6215],{

/***/ 27915:
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
___CSS_LOADER_EXPORT___.push([module.id, "/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n@namespace html url(\"http://www.w3.org/1999/xhtml\");\n\n:root {\n  --toolbar-start-end-padding: 8px;\n  --toolbarbutton-outer-padding: 2px;\n  --toolbarbutton-inner-padding: 8px;\n\n  --toolbarbutton-hover-background: var(--button-hover-bgcolor);\n  --toolbarbutton-active-background: var(--button-active-bgcolor);\n\n  --toolbarseparator-color: color-mix(in srgb, currentColor 60%, transparent);\n\n  --bookmark-block-padding: 4px;\n\n  /* This default value of --toolbarbutton-height is defined to prevent\n     CSS errors for an invalid variable. The value should not get used,\n     as a more specific value should be set when the value will be used. */\n  --toolbarbutton-height: 0;\n}\n\n:root[uidensity=compact] {\n  --toolbarbutton-outer-padding: 3px;\n  --toolbarbutton-inner-padding: 6px;\n  --bookmark-block-padding: 1px;\n}\n\n:root[uidensity=touch] {\n  --toolbarbutton-inner-padding: 9px;\n  --bookmark-block-padding: 7px;\n}\n\n#TabsToolbar {\n  /* Override the inner padding to ensure the dimensions match the tabs, but also making sure\n     different types of buttons (combined-buttons-dropmarker or text) still look correct. */\n  --toolbarbutton-inner-padding: calc((var(--tab-min-height) - 16px) / 2);\n}\n\n/* ::::: primary toolbar buttons ::::: */\n\n:root:not([customizing]) .toolbarbutton-1[disabled=true] {\n  opacity: var(--toolbarbutton-disabled-opacity);\n}\n\n.toolbarbutton-1 > .toolbarbutton-icon {\n  margin-inline-end: 0 !important;\n}\n\n.toolbarbutton-1 > .toolbarbutton-icon,\n.toolbarbutton-1 > .toolbarbutton-badge-stack > .toolbarbutton-icon {\n  width: 16px;\n}\n\n.toolbarbutton-combined-buttons-dropmarker > .toolbarbutton-icon {\n  width: 12px;\n}\n\n#navigator-toolbox:not(:hover) #tabbrowser-arrowscrollbox:not([highlight])::part(scrollbutton-down) {\n  transition: 1s background-color ease-out;\n}\n\n#tabbrowser-arrowscrollbox[highlight]::part(scrollbutton-down) {\n  background-color: SelectedItem;\n}\n\ntoolbar .toolbarbutton-1 {\n  appearance: none;\n  margin: 0;\n  padding: 0 var(--toolbarbutton-outer-padding);\n  -moz-box-pack: center;\n}\n\n#TabsToolbar .toolbarbutton-1 {\n  margin: 0 0 var(--tabs-navbar-shadow-size);\n}\n\n#tabbrowser-arrowscrollbox::part(scrollbutton-up),\n#tabbrowser-arrowscrollbox::part(scrollbutton-down) {\n  appearance: none;\n  background-clip: padding-box;\n  border: 4px solid transparent;\n  border-radius: calc(var(--tab-border-radius) + 4px);\n  margin: 0;\n  padding: 0 calc(var(--toolbarbutton-inner-padding) - 6px);\n}\n\n/*** Adds padding to end of toolbar while making that space click the first button ***/\n#PanelUI-menu-button {\n  padding-inline-end: var(--toolbar-start-end-padding);\n}\n\ntoolbar .toolbarbutton-1 > .toolbarbutton-icon,\ntoolbar .toolbarbutton-1 > .toolbarbutton-text,\ntoolbar .toolbarbutton-1 > .toolbarbutton-badge-stack {\n  padding: var(--toolbarbutton-inner-padding);\n  border-radius: var(--toolbarbutton-border-radius);\n}\n\n#TabsToolbar .toolbarbutton-1 > .toolbarbutton-icon,\n#TabsToolbar .toolbarbutton-1 > .toolbarbutton-text,\n#TabsToolbar .toolbarbutton-1 > .toolbarbutton-badge-stack {\n  border-radius: var(--tab-border-radius);\n}\n\ntoolbar .toolbarbutton-1 > .toolbarbutton-icon {\n  /* horizontal padding + actual icon width */\n  width: calc(2 * var(--toolbarbutton-inner-padding) + 16px);\n  height: calc(2 * var(--toolbarbutton-inner-padding) + 16px);\n}\n\ntoolbar .toolbarbutton-combined-buttons-dropmarker > .toolbarbutton-icon {\n  /* same height as regular buttons, but narrower, and for a 12x12 image */\n  padding-inline: 2px;\n  padding-block: calc(var(--toolbarbutton-inner-padding) + (16px - 12px) / 2);\n  width: calc(2 * 2px + 12px);\n}\n\ntoolbar .toolbarbutton-1 > .toolbarbutton-text {\n  padding-top: calc(var(--toolbarbutton-inner-padding) - 1px);\n  padding-bottom: 0;\n  /* To make the hover feedback line up with sibling buttons, it needs the same\n   * height as the button icons and the same vertical padding, but as a minimum,\n   * because otherwise an increase in text sizes would break things.\n   */\n  min-height: calc(16px + 2 * var(--toolbarbutton-inner-padding));\n}\n\n@media (-moz-platform: macos) {\n  toolbar .toolbarbutton-1 > .toolbarbutton-text {\n    padding-top: calc(var(--toolbarbutton-inner-padding) + 1px);\n  }\n}\n\ntoolbar .toolbaritem-combined-buttons {\n  margin-inline: 2px;\n}\n\ntoolbar .toolbaritem-combined-buttons > .toolbarbutton-1 {\n  padding-inline: 0;\n}\n\ntoolbar .toolbaritem-combined-buttons:not(:hover) > separator {\n  content: \"\";\n  display: -moz-box;\n  width: 1px;\n  height: 16px;\n  margin-inline-end: -1px;\n  background-image: linear-gradient(currentColor 0, currentColor 100%);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 1px 16px;\n  opacity: .2;\n}\n\ntoolbar[brighttext] .toolbaritem-combined-buttons > separator {\n  opacity: .3;\n}\n\n#tabbrowser-arrowscrollbox:not([scrolledtostart=true])::part(scrollbutton-up):hover,\n#tabbrowser-arrowscrollbox:not([scrolledtoend=true])::part(scrollbutton-down):hover,\ntoolbarbutton.bookmark-item:not(.subviewbutton, [disabled=true], [open]):hover,\ntoolbar .toolbarbutton-1:not([disabled=true], [checked], [open], :active):hover > .toolbarbutton-icon,\ntoolbar .toolbarbutton-1:not([disabled=true], [checked], [open], :active):hover > .toolbarbutton-text,\ntoolbar .toolbarbutton-1:not([disabled=true], [checked], [open], :active):hover > .toolbarbutton-badge-stack {\n  background-color: var(--toolbarbutton-hover-background);\n  color: inherit;\n}\n\n#tabbrowser-arrowscrollbox:not([scrolledtostart=true])::part(scrollbutton-up):hover:active,\n#tabbrowser-arrowscrollbox:not([scrolledtoend=true])::part(scrollbutton-down):hover:active,\ntoolbarbutton.bookmark-item:hover:active:not(.subviewbutton, [disabled=\"true\"]),\ntoolbarbutton.bookmark-item[open=\"true\"],\ntoolbar .toolbarbutton-1:not([disabled=true]):is([open],[checked],:hover:active) > .toolbarbutton-icon,\ntoolbar .toolbarbutton-1:not([disabled=true]):is([open],[checked],:hover:active) > .toolbarbutton-text,\ntoolbar .toolbarbutton-1:not([disabled=true]):is([open],[checked],:hover:active) > .toolbarbutton-badge-stack {\n  background-color: var(--toolbarbutton-active-background);\n  color: inherit;\n}\n\n/* Keyboard focus styling */\n.titlebar-button:focus-visible,\nfindbar toolbarbutton.tabbable:focus-visible,\ntoolbarbutton.bookmark-item:not(.subviewbutton):focus-visible,\ntoolbar .toolbarbutton-1:focus-visible > .toolbarbutton-icon,\ntoolbar .toolbarbutton-1:focus-visible > .toolbarbutton-text,\ntoolbar .toolbarbutton-1:focus-visible > .toolbarbutton-badge-stack {\n  outline: var(--focus-outline);\n  outline-offset: var(--focus-outline-inset);\n}\n\ntoolbar .toolbarbutton-1:focus-visible {\n  outline: none;\n}\n\n/* bookmarks menu button */\n\n/* ::::: bookmark buttons ::::: */\n\n#personal-toolbar-empty-description,\ntoolbarbutton.bookmark-item:not(.subviewbutton) {\n  margin: 2px;\n  padding: var(--bookmark-block-padding) 4px;\n}\n\n#PersonalToolbar .toolbarbutton-1 {\n  /* These should match the sizing of the bookmark-items in the inline axis\n   * (padding and margin, respectively) */\n  --toolbarbutton-inner-padding: 4px;\n  --toolbarbutton-outer-padding: 2px;\n  margin-block: 2px;\n}\n\n:root[uidensity=compact] toolbarbutton.bookmark-item:not(.subviewbutton) {\n  margin-inline: 1px;\n}\n\n:root[uidensity=compact] #PersonalToolbar .toolbarbutton-1 {\n  --toolbarbutton-outer-padding: 1px;\n}\n\n/* Allow icons to grow with the toolbar to match bookmark item heights\n *\n * NOTE(emilio): This matches pre-existing behavior but it's inconsistent with\n * how e.g. combined items work, and maybe we should just remove this.\n */\n#PersonalToolbar .toolbarbutton-1 {\n  -moz-box-align: stretch;\n}\n#PersonalToolbar .toolbarbutton-1 > .toolbarbutton-icon {\n  height: auto;\n}\n#PersonalToolbar .toolbarbutton-1 > .toolbarbutton-badge-stack {\n  align-items: center;\n}\n\ntoolbarbutton.bookmark-item:not(.subviewbutton) {\n  border-radius: var(--toolbarbutton-border-radius);\n}\n\ntoolbarbutton.bookmark-item:not(.subviewbutton) {\n  max-width: 13em;\n  appearance: none;\n}\n\n/**\n * Ensure that the description is always at least as big as a bookmarks item,\n * where its icon is 16px (which may be more than inline text height);\n */\n#personal-toolbar-empty-description {\n  min-height: calc(16px + 2 * var(--bookmark-block-padding));\n}\n\n#bookmarks-toolbar-placeholder {\n  max-width: unset;\n}\n\n.bookmark-item > .toolbarbutton-icon {\n  width: 16px;\n  height: 16px;\n}\n\n/* Force the display of the label for bookmarks */\n.bookmark-item > .toolbarbutton-text {\n  display: -moz-box !important;\n}\n\n#personal-bookmarks,\n#PlacesToolbar,\n#PlacesToolbarItems {\n  min-width: 0;\n}\n\n#PlacesToolbarItems > .bookmark-item > .toolbarbutton-icon {\n  margin-inline-end: 0;\n}\n\n#managed-bookmarks > .toolbarbutton-icon,\n#bookmarks-toolbar-placeholder > .toolbarbutton-icon,\n#PlacesToolbarItems > .bookmark-item > .toolbarbutton-icon[label]:not([label=\"\"]),\n#PersonalToolbar #import-button > .toolbarbutton-icon,\n#OtherBookmarks.bookmark-item[container] > .toolbarbutton-icon {\n  margin-inline-end: 4px;\n}\n\n/* Separators */\n\n/* Override the toolkit styles, and make sure separators are draggable by\n * making them wider, and using a pseudo-element for the visual separator. */\n#PlacesToolbarItems > toolbarseparator {\n  margin: 0;\n  padding-inline: 4px;\n  appearance: none;\n}\n\n/* When adjacent to the bookmarks items, give the bookmarks items a leading separator. */\n#PlacesToolbarItems > toolbarseparator::before {\n  content: \"\";\n  display: block;\n  border-inline-start: 1px solid;\n  border-image-source: linear-gradient(\n    transparent 3.75px,\n    var(--toolbarseparator-color) 3.75px,\n    var(--toolbarseparator-color) calc(100% - 3.75px),\n    transparent calc(100% - 3.75px) );\n  border-image-slice: 1;\n}\n\n@media (min-resolution: 2dppx) {\n  #PlacesToolbarItems > toolbarseparator::before {\n    border-inline-start-width: 0.5px;\n  }\n}\n\n/* The bookmarks toolbar is smaller than the other toolbars, so we\n * need to override the badge position to not be cut off. */\n#PersonalToolbar .toolbarbutton-badge {\n  margin-top: -1px !important;\n}\n\n:root[uidensity=touch] #PersonalToolbar .toolbarbutton-badge {\n  margin-top: -4px !important;\n}\n\n/* Remove a pixel of margin on the end so that the badge doesn't\n * overflow the toolbar and push the button into the overflow menu. */\n:root[uidensity=compact] .toolbarbutton-badge {\n  margin-inline-end: -7px !important;\n}\n\n/* Alternative style for .toolbarbutton-badge used by CFR notifications */\n.toolbarbutton-badge.feature-callout {\n  width: 14px;\n  height: 14px;\n  min-width: auto;\n  box-shadow: none;\n  border: none;\n  padding: 0;\n  display: block;\n  margin: -7px 0 0 !important;\n  margin-inline-end: -6px !important;\n  background: url(chrome://global/skin/icons/badge-blue.svg);\n}\n", "",{"version":3,"sources":["webpack://./../../themes/shared/toolbarbuttons.css"],"names":[],"mappings":"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","sourcesContent":["/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n@namespace html url(\"http://www.w3.org/1999/xhtml\");\n\n:root {\n  --toolbar-start-end-padding: 8px;\n  --toolbarbutton-outer-padding: 2px;\n  --toolbarbutton-inner-padding: 8px;\n\n  --toolbarbutton-hover-background: var(--button-hover-bgcolor);\n  --toolbarbutton-active-background: var(--button-active-bgcolor);\n\n  --toolbarseparator-color: color-mix(in srgb, currentColor 60%, transparent);\n\n  --bookmark-block-padding: 4px;\n\n  /* This default value of --toolbarbutton-height is defined to prevent\n     CSS errors for an invalid variable. The value should not get used,\n     as a more specific value should be set when the value will be used. */\n  --toolbarbutton-height: 0;\n}\n\n:root[uidensity=compact] {\n  --toolbarbutton-outer-padding: 3px;\n  --toolbarbutton-inner-padding: 6px;\n  --bookmark-block-padding: 1px;\n}\n\n:root[uidensity=touch] {\n  --toolbarbutton-inner-padding: 9px;\n  --bookmark-block-padding: 7px;\n}\n\n#TabsToolbar {\n  /* Override the inner padding to ensure the dimensions match the tabs, but also making sure\n     different types of buttons (combined-buttons-dropmarker or text) still look correct. */\n  --toolbarbutton-inner-padding: calc((var(--tab-min-height) - 16px) / 2);\n}\n\n/* ::::: primary toolbar buttons ::::: */\n\n:root:not([customizing]) .toolbarbutton-1[disabled=true] {\n  opacity: var(--toolbarbutton-disabled-opacity);\n}\n\n.toolbarbutton-1 > .toolbarbutton-icon {\n  margin-inline-end: 0 !important;\n}\n\n.toolbarbutton-1 > .toolbarbutton-icon,\n.toolbarbutton-1 > .toolbarbutton-badge-stack > .toolbarbutton-icon {\n  width: 16px;\n}\n\n.toolbarbutton-combined-buttons-dropmarker > .toolbarbutton-icon {\n  width: 12px;\n}\n\n#navigator-toolbox:not(:hover) #tabbrowser-arrowscrollbox:not([highlight])::part(scrollbutton-down) {\n  transition: 1s background-color ease-out;\n}\n\n#tabbrowser-arrowscrollbox[highlight]::part(scrollbutton-down) {\n  background-color: SelectedItem;\n}\n\ntoolbar .toolbarbutton-1 {\n  appearance: none;\n  margin: 0;\n  padding: 0 var(--toolbarbutton-outer-padding);\n  -moz-box-pack: center;\n}\n\n#TabsToolbar .toolbarbutton-1 {\n  margin: 0 0 var(--tabs-navbar-shadow-size);\n}\n\n#tabbrowser-arrowscrollbox::part(scrollbutton-up),\n#tabbrowser-arrowscrollbox::part(scrollbutton-down) {\n  appearance: none;\n  background-clip: padding-box;\n  border: 4px solid transparent;\n  border-radius: calc(var(--tab-border-radius) + 4px);\n  margin: 0;\n  padding: 0 calc(var(--toolbarbutton-inner-padding) - 6px);\n}\n\n/*** Adds padding to end of toolbar while making that space click the first button ***/\n#PanelUI-menu-button {\n  padding-inline-end: var(--toolbar-start-end-padding);\n}\n\ntoolbar .toolbarbutton-1 > .toolbarbutton-icon,\ntoolbar .toolbarbutton-1 > .toolbarbutton-text,\ntoolbar .toolbarbutton-1 > .toolbarbutton-badge-stack {\n  padding: var(--toolbarbutton-inner-padding);\n  border-radius: var(--toolbarbutton-border-radius);\n}\n\n#TabsToolbar .toolbarbutton-1 > .toolbarbutton-icon,\n#TabsToolbar .toolbarbutton-1 > .toolbarbutton-text,\n#TabsToolbar .toolbarbutton-1 > .toolbarbutton-badge-stack {\n  border-radius: var(--tab-border-radius);\n}\n\ntoolbar .toolbarbutton-1 > .toolbarbutton-icon {\n  /* horizontal padding + actual icon width */\n  width: calc(2 * var(--toolbarbutton-inner-padding) + 16px);\n  height: calc(2 * var(--toolbarbutton-inner-padding) + 16px);\n}\n\ntoolbar .toolbarbutton-combined-buttons-dropmarker > .toolbarbutton-icon {\n  /* same height as regular buttons, but narrower, and for a 12x12 image */\n  padding-inline: 2px;\n  padding-block: calc(var(--toolbarbutton-inner-padding) + (16px - 12px) / 2);\n  width: calc(2 * 2px + 12px);\n}\n\ntoolbar .toolbarbutton-1 > .toolbarbutton-text {\n  padding-top: calc(var(--toolbarbutton-inner-padding) - 1px);\n  padding-bottom: 0;\n  /* To make the hover feedback line up with sibling buttons, it needs the same\n   * height as the button icons and the same vertical padding, but as a minimum,\n   * because otherwise an increase in text sizes would break things.\n   */\n  min-height: calc(16px + 2 * var(--toolbarbutton-inner-padding));\n}\n\n@media (-moz-platform: macos) {\n  toolbar .toolbarbutton-1 > .toolbarbutton-text {\n    padding-top: calc(var(--toolbarbutton-inner-padding) + 1px);\n  }\n}\n\ntoolbar .toolbaritem-combined-buttons {\n  margin-inline: 2px;\n}\n\ntoolbar .toolbaritem-combined-buttons > .toolbarbutton-1 {\n  padding-inline: 0;\n}\n\ntoolbar .toolbaritem-combined-buttons:not(:hover) > separator {\n  content: \"\";\n  display: -moz-box;\n  width: 1px;\n  height: 16px;\n  margin-inline-end: -1px;\n  background-image: linear-gradient(currentColor 0, currentColor 100%);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 1px 16px;\n  opacity: .2;\n}\n\ntoolbar[brighttext] .toolbaritem-combined-buttons > separator {\n  opacity: .3;\n}\n\n#tabbrowser-arrowscrollbox:not([scrolledtostart=true])::part(scrollbutton-up):hover,\n#tabbrowser-arrowscrollbox:not([scrolledtoend=true])::part(scrollbutton-down):hover,\ntoolbarbutton.bookmark-item:not(.subviewbutton, [disabled=true], [open]):hover,\ntoolbar .toolbarbutton-1:not([disabled=true], [checked], [open], :active):hover > .toolbarbutton-icon,\ntoolbar .toolbarbutton-1:not([disabled=true], [checked], [open], :active):hover > .toolbarbutton-text,\ntoolbar .toolbarbutton-1:not([disabled=true], [checked], [open], :active):hover > .toolbarbutton-badge-stack {\n  background-color: var(--toolbarbutton-hover-background);\n  color: inherit;\n}\n\n#tabbrowser-arrowscrollbox:not([scrolledtostart=true])::part(scrollbutton-up):hover:active,\n#tabbrowser-arrowscrollbox:not([scrolledtoend=true])::part(scrollbutton-down):hover:active,\ntoolbarbutton.bookmark-item:hover:active:not(.subviewbutton, [disabled=\"true\"]),\ntoolbarbutton.bookmark-item[open=\"true\"],\ntoolbar .toolbarbutton-1:not([disabled=true]):is([open],[checked],:hover:active) > .toolbarbutton-icon,\ntoolbar .toolbarbutton-1:not([disabled=true]):is([open],[checked],:hover:active) > .toolbarbutton-text,\ntoolbar .toolbarbutton-1:not([disabled=true]):is([open],[checked],:hover:active) > .toolbarbutton-badge-stack {\n  background-color: var(--toolbarbutton-active-background);\n  color: inherit;\n}\n\n/* Keyboard focus styling */\n.titlebar-button:focus-visible,\nfindbar toolbarbutton.tabbable:focus-visible,\ntoolbarbutton.bookmark-item:not(.subviewbutton):focus-visible,\ntoolbar .toolbarbutton-1:focus-visible > .toolbarbutton-icon,\ntoolbar .toolbarbutton-1:focus-visible > .toolbarbutton-text,\ntoolbar .toolbarbutton-1:focus-visible > .toolbarbutton-badge-stack {\n  outline: var(--focus-outline);\n  outline-offset: var(--focus-outline-inset);\n}\n\ntoolbar .toolbarbutton-1:focus-visible {\n  outline: none;\n}\n\n/* bookmarks menu button */\n\n/* ::::: bookmark buttons ::::: */\n\n#personal-toolbar-empty-description,\ntoolbarbutton.bookmark-item:not(.subviewbutton) {\n  margin: 2px;\n  padding: var(--bookmark-block-padding) 4px;\n}\n\n#PersonalToolbar .toolbarbutton-1 {\n  /* These should match the sizing of the bookmark-items in the inline axis\n   * (padding and margin, respectively) */\n  --toolbarbutton-inner-padding: 4px;\n  --toolbarbutton-outer-padding: 2px;\n  margin-block: 2px;\n}\n\n:root[uidensity=compact] toolbarbutton.bookmark-item:not(.subviewbutton) {\n  margin-inline: 1px;\n}\n\n:root[uidensity=compact] #PersonalToolbar .toolbarbutton-1 {\n  --toolbarbutton-outer-padding: 1px;\n}\n\n/* Allow icons to grow with the toolbar to match bookmark item heights\n *\n * NOTE(emilio): This matches pre-existing behavior but it's inconsistent with\n * how e.g. combined items work, and maybe we should just remove this.\n */\n#PersonalToolbar .toolbarbutton-1 {\n  -moz-box-align: stretch;\n}\n#PersonalToolbar .toolbarbutton-1 > .toolbarbutton-icon {\n  height: auto;\n}\n#PersonalToolbar .toolbarbutton-1 > .toolbarbutton-badge-stack {\n  align-items: center;\n}\n\ntoolbarbutton.bookmark-item:not(.subviewbutton) {\n  border-radius: var(--toolbarbutton-border-radius);\n}\n\ntoolbarbutton.bookmark-item:not(.subviewbutton) {\n  max-width: 13em;\n  appearance: none;\n}\n\n/**\n * Ensure that the description is always at least as big as a bookmarks item,\n * where its icon is 16px (which may be more than inline text height);\n */\n#personal-toolbar-empty-description {\n  min-height: calc(16px + 2 * var(--bookmark-block-padding));\n}\n\n#bookmarks-toolbar-placeholder {\n  max-width: unset;\n}\n\n.bookmark-item > .toolbarbutton-icon {\n  width: 16px;\n  height: 16px;\n}\n\n/* Force the display of the label for bookmarks */\n.bookmark-item > .toolbarbutton-text {\n  display: -moz-box !important;\n}\n\n#personal-bookmarks,\n#PlacesToolbar,\n#PlacesToolbarItems {\n  min-width: 0;\n}\n\n#PlacesToolbarItems > .bookmark-item > .toolbarbutton-icon {\n  margin-inline-end: 0;\n}\n\n#managed-bookmarks > .toolbarbutton-icon,\n#bookmarks-toolbar-placeholder > .toolbarbutton-icon,\n#PlacesToolbarItems > .bookmark-item > .toolbarbutton-icon[label]:not([label=\"\"]),\n#PersonalToolbar #import-button > .toolbarbutton-icon,\n#OtherBookmarks.bookmark-item[container] > .toolbarbutton-icon {\n  margin-inline-end: 4px;\n}\n\n/* Separators */\n\n/* Override the toolkit styles, and make sure separators are draggable by\n * making them wider, and using a pseudo-element for the visual separator. */\n#PlacesToolbarItems > toolbarseparator {\n  margin: 0;\n  padding-inline: 4px;\n  appearance: none;\n}\n\n/* When adjacent to the bookmarks items, give the bookmarks items a leading separator. */\n#PlacesToolbarItems > toolbarseparator::before {\n  content: \"\";\n  display: block;\n  border-inline-start: 1px solid;\n  border-image-source: linear-gradient(\n    transparent 3.75px,\n    var(--toolbarseparator-color) 3.75px,\n    var(--toolbarseparator-color) calc(100% - 3.75px),\n    transparent calc(100% - 3.75px) );\n  border-image-slice: 1;\n}\n\n@media (min-resolution: 2dppx) {\n  #PlacesToolbarItems > toolbarseparator::before {\n    border-inline-start-width: 0.5px;\n  }\n}\n\n/* The bookmarks toolbar is smaller than the other toolbars, so we\n * need to override the badge position to not be cut off. */\n#PersonalToolbar .toolbarbutton-badge {\n  margin-top: -1px !important;\n}\n\n:root[uidensity=touch] #PersonalToolbar .toolbarbutton-badge {\n  margin-top: -4px !important;\n}\n\n/* Remove a pixel of margin on the end so that the badge doesn't\n * overflow the toolbar and push the button into the overflow menu. */\n:root[uidensity=compact] .toolbarbutton-badge {\n  margin-inline-end: -7px !important;\n}\n\n/* Alternative style for .toolbarbutton-badge used by CFR notifications */\n.toolbarbutton-badge.feature-callout {\n  width: 14px;\n  height: 14px;\n  min-width: auto;\n  box-shadow: none;\n  border: none;\n  padding: 0;\n  display: block;\n  margin: -7px 0 0 !important;\n  margin-inline-end: -6px !important;\n  background: url(chrome://global/skin/icons/badge-blue.svg);\n}\n"],"sourceRoot":""}]);
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

/***/ 6215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93379);
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_toolbarbuttons_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27915);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_toolbarbuttons_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_toolbarbuttons_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
//# sourceMappingURL=6215.8e0c05dc.iframe.bundle.js.map