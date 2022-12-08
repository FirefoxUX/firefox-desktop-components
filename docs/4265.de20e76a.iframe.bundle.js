"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[4265],{

/***/ 16065:
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
___CSS_LOADER_EXPORT___.push([module.id, "/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n:root {\n  /* uei = unified extensions item */\n  --uei-icon-size: 32px;\n  --uei-attention-dot-size: 8px;\n  --uei-button-hover-bgcolor: var(--panel-item-hover-bgcolor);\n  --uei-button-hover-color: inherit;\n  --uei-button-active-bgcolor: var(--panel-item-active-bgcolor);\n  --uei-button-active-color: inherit;\n  --uei-button-attention-dot-color: var(--tab-attention-icon-color);\n}\n\n:root[uidensity=\"compact\"] {\n  --uei-icon-size: 24px;\n}\n\n#unified-extensions-panel {\n  --uei-dot-horizontal-position-in-panel: calc(var(--uei-icon-size) / 2 + var(--arrowpanel-menuitem-padding-inline) - var(--uei-attention-dot-size) / 2);\n  --uei-dot-vertical-position-in-panel: max(0px, calc(var(--arrowpanel-menuitem-padding-block) / 2 - var(--uei-attention-dot-size) / 2));\n}\n\n/* Align extensions rendered with custom elements. */\nunified-extensions-item {\n  display: flex;\n  align-items: center;\n}\n\n#unified-extensions-panel .unified-extensions-item {\n  /* Have some spacing between items in the panel; mainly useful for when HCM is enabled. */\n  padding-block: 2px;\n}\n\n/* The \"attention UI\" for the unified extensions is based on:\n * https://searchfox.org/mozilla-central/rev/560b7b1b17/browser/themes/shared/tabs.css#624 */\n\n/* On the main unified extensions button, we draw the attention on the icon element. */\n#unified-extensions-button[attention] > .toolbarbutton-icon,\n/* For extension widgets placed in a toolbar, we use the stack element (containing the icon)\n * of the action button to draw the attention dot.\n * Otherwise (in the extensions panel), we use the action button itself. */\ntoolbar .unified-extensions-item[attention] > .unified-extensions-item-action-button > .toolbarbutton-badge-stack,\n#unified-extensions-panel .unified-extensions-item[attention] > .unified-extensions-item-action-button,\n.widget-overflow-list .unified-extensions-item[attention][unified-extensions=\"false\"] > .unified-extensions-item-action-button {\n  background-image: radial-gradient(circle, var(--uei-button-attention-dot-color), var(--uei-button-attention-dot-color) 2px, transparent 2px);\n  background-size: var(--uei-attention-dot-size) var(--uei-attention-dot-size);\n  background-repeat: no-repeat;\n}\n\n/* Adjust attention dots position in the toolbar. */\n#unified-extensions-button[attention] > .toolbarbutton-icon,\ntoolbar .unified-extensions-item[attention] > .unified-extensions-item-action-button > .toolbarbutton-badge-stack {\n  background-position: center bottom calc(var(--toolbarbutton-inner-padding) / 2 - var(--uei-attention-dot-size) / 2);\n}\n\n/* Adjust attention dots position in the unified extensions panel. */\n#unified-extensions-panel .unified-extensions-item[attention] > .unified-extensions-item-action-button {\n  background-position: left var(--uei-dot-horizontal-position-in-panel) bottom var(--uei-dot-vertical-position-in-panel);\n}\n\n/* Adjust attention dots position in the unified extensions panel for RTL. */\n#unified-extensions-panel .unified-extensions-item[attention] > .unified-extensions-item-action-button:-moz-locale-dir(rtl) {\n  background-position-x: right var(--uei-dot-horizontal-position-in-panel);\n}\n\n/* Adjust attention dots position in the overflow panel. */\n.widget-overflow-list .unified-extensions-item[attention][unified-extensions=\"false\"] > .unified-extensions-item-action-button {\n  background-position-x: left calc(16px / 2 + var(--arrowpanel-menuitem-padding-inline) - var(--uei-attention-dot-size) / 2);\n  background-position-y: bottom calc(var(--arrowpanel-menuitem-padding-block) / 2 - var(--uei-attention-dot-size) / 2);\n}\n\n:root[uidensity=\"compact\"] .widget-overflow-list .unified-extensions-item[attention][unified-extensions=\"false\"] > .unified-extensions-item-action-button {\n  background-position-y: bottom -2px;\n}\n\n/* Adjust attention dots position in the overflow panel for RTL. */\n.widget-overflow-list toolbaritem.unified-extensions-item[attention][unified-extensions=\"false\"] > .unified-extensions-item-action-button:-moz-locale-dir(rtl) {\n  background-position-x: right calc(16px / 2 + var(--arrowpanel-menuitem-padding-inline) - var(--uei-attention-dot-size) / 2);\n}\n\n.unified-extensions-item-action-button {\n  overflow: hidden;\n  background-color: transparent;\n}\n\n/* The padding-block for menuitems is set to 0 in compact mode which, with the\n * extension icon being 32px in this case, makes the item look crowded even for\n * compact mode. */\n:root[uidensity=\"compact\"] panel:not([touchmode]) .unified-extensions-item-action-button {\n  padding-block: 4px;\n}\n\n.unified-extensions-item-action-button[disabled].subviewbutton {\n  color: var(--panel-description-color);\n}\n\n.unified-extensions-item-action-button[disabled] .unified-extensions-item-icon {\n  opacity: 0.5;\n}\n\n.unified-extensions-item-icon,\n/* When the unified extensions pref is enabled, we also want to increase the\n * size of the icons in the extension CUI widgets. */\npanel .unified-extensions-item[unified-extensions=\"true\"] .webextension-browser-action > .toolbarbutton-badge-stack > .toolbarbutton-icon {\n  height: var(--uei-icon-size);\n  width: var(--uei-icon-size);\n}\n\n/* The first selector is for the custom elements icon, which appears only in the UEP. */\n.unified-extensions-item-icon,\npanel .unified-extensions-item[unified-extensions=\"true\"] .webextension-browser-action > .toolbarbutton-badge-stack {\n  margin-inline-end: 6px;\n}\n\n.unified-extensions-item-icon,\n.unified-extensions-item-contents {\n  pointer-events: none;\n}\n\n.unified-extensions-item-name,\n.unified-extensions-item-message {\n  margin: 0;\n  padding-inline-start: .5em;\n  width: 22em;\n  word-break: break-word;\n}\n\n.unified-extensions-item-message {\n  color: var(--panel-description-color);\n}\n\n.unified-extensions-item-menu-button.subviewbutton {\n  list-style-image: url(\"chrome://global/skin/icons/settings.svg\");\n  margin: 0;\n  margin-inline-end: var(--arrowpanel-menuitem-margin-inline);\n  /* Have the icon even padding all around by default */\n  padding: var(--arrowpanel-menuitem-padding-inline);\n  border: 1px solid transparent;\n  background-color: transparent;\n}\n\n.unified-extensions-item-menu-button.subviewbutton > .toolbarbutton-text {\n  display: none;\n}\n\n/* --- browser action CUI widget styles --- */\n\n/* Hide secondary (menu) button when the widget is in the list of widgets in\n * customization mode. */\ntoolbaritem.unified-extensions-item:not([cui-areatype=\"panel\"], [overflowedItem=true]) .unified-extensions-item-menu-button {\n  display: none;\n}\n\n/* Hide subviewbutton label by default, it should only be shown in the old\n * overflow panel and the palette. */\ntoolbaritem.unified-extensions-item[cui-areatype=\"toolbar\"] .toolbarbutton-text,\n#unified-extensions-area > toolbaritem.unified-extensions-item .toolbarbutton-text {\n  display: none;\n}\n\n/* Hide unified extensions content by default, unless the item is overflowed or in\n * a panel. Also hide this content if the item is visible in customize mode. */\ntoolbaritem.unified-extensions-item:not([overflowedItem=\"true\"], [cui-areatype=\"panel\"]) .unified-extensions-item-contents,\ntoolbarpaletteitem > toolbaritem.unified-extensions-item .unified-extensions-item-contents {\n  display: none;\n}\n\ntoolbaritem.unified-extensions-item .unified-extensions-item-menu-button.subviewbutton {\n  -moz-box-flex: 0;\n  margin-inline-start: var(--arrowpanel-menuitem-margin-inline);\n  padding: var(--arrowpanel-menuitem-padding);\n  border: 1px solid transparent;\n}\n\n/* When the unified extensions pref is set, we want to always have a \"large\"\n * menu button, even on compact mode since each extension has two lines of text\n * anyway (extension name and message). */\ntoolbaritem.unified-extensions-item[unified-extensions=\"true\"] .unified-extensions-item-menu-button.subviewbutton {\n  padding: 8px;\n}\n\n/* --- browser action CUI widget styles in the overflow/unified extensions panel --- */\n\n/* Align CUI widgets with the custom elements in the unified extensions panel. */\n#unified-extensions-panel toolbaritem.unified-extensions-item {\n  max-width: max-content;\n}\n\n/* Show CUI widget label in overflow panel when the unified extensions pref is\n * not set. */\n.widget-overflow-list toolbaritem.unified-extensions-item[unified-extensions=\"false\"] .unified-extensions-item-action-button .toolbarbutton-text {\n  text-align: start;\n  display: block;\n}\n\n@media (prefers-contrast) {\n  :root {\n    --uei-button-attention-dot-color: ButtonText;\n  }\n\n  #unified-extensions-panel :is(\n    .unified-extensions-item-action-button:not([disabled]).subviewbutton,\n    .unified-extensions-item-menu-button.subviewbutton,\n    toolbaritem.unified-extensions-item .unified-extensions-item-action-button:not([disabled]).subviewbutton,\n    toolbaritem.unified-extensions-item .unified-extensions-item-menu-button.subviewbutton\n  ) {\n    border-color: currentColor;\n    background-color: ButtonFace;\n    color: ButtonText;\n    --uei-button-hover-bgcolor: SelectedItem;\n    --uei-button-hover-color: SelectedItemText;\n    --uei-button-active-bgcolor: ButtonFace;\n    --uei-button-active-color: ButtonText;\n  }\n\n  #unified-extensions-panel .unified-extensions-item-action-button[disabled].subviewbutton {\n    background-color: Canvas;\n    color: GrayText;\n  }\n\n  .unified-extensions-item-action-button[disabled] .unified-extensions-item-message {\n    color: GrayText;\n  }\n\n  .unified-extensions-item-action-button:not([disabled]) .unified-extensions-item-message {\n    color: ButtonText;\n  }\n\n  .unified-extensions-item-action-button:not([disabled]):hover .unified-extensions-item-message {\n    color: inherit;\n  }\n\n  #unified-extensions-panel :is(\n    .unified-extensions-item-action-button:not([disabled]).subviewbutton,\n    .unified-extensions-item-menu-button.subviewbutton,\n    toolbaritem.unified-extensions-item .unified-extensions-item-action-button:not([disabled]).subviewbutton,\n    toolbaritem.unified-extensions-item .unified-extensions-item-menu-button.subviewbutton\n  ):hover:not(:active) {\n    background-color: var(--uei-button-hover-bgcolor);\n    color: var(--uei-button-hover-color);\n    border-color: var(--uei-button-hover-bgcolor);\n  }\n\n  #unified-extensions-panel :is(\n    .unified-extensions-item-action-button:not([disabled]).subviewbutton,\n    .unified-extensions-item-menu-button.subviewbutton,\n    toolbaritem.unified-extensions-item .unified-extensions-item-action-button:not([disabled]).subviewbutton,\n    toolbaritem.unified-extensions-item .unified-extensions-item-menu-button.subviewbutton\n  ):hover:active {\n    background-color: var(--uei-button-active-bgcolor);\n    color: var(--uei-button-active-color);\n  }\n}\n", "",{"version":3,"sources":["webpack://./../../themes/shared/addons/unified-extensions.css"],"names":[],"mappings":"AAAA;;6DAE6D;;AAE7D;EACE,kCAAkC;EAClC,qBAAqB;EACrB,6BAA6B;EAC7B,2DAA2D;EAC3D,iCAAiC;EACjC,6DAA6D;EAC7D,kCAAkC;EAClC,iEAAiE;AACnE;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,sJAAsJ;EACtJ,sIAAsI;AACxI;;AAEA,oDAAoD;AACpD;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,yFAAyF;EACzF,kBAAkB;AACpB;;AAEA;4FAC4F;;AAE5F,sFAAsF;AACtF;;;;;;;EAOE,4IAA4I;EAC5I,4EAA4E;EAC5E,4BAA4B;AAC9B;;AAEA,mDAAmD;AACnD;;EAEE,mHAAmH;AACrH;;AAEA,oEAAoE;AACpE;EACE,sHAAsH;AACxH;;AAEA,4EAA4E;AAC5E;EACE,wEAAwE;AAC1E;;AAEA,0DAA0D;AAC1D;EACE,0HAA0H;EAC1H,oHAAoH;AACtH;;AAEA;EACE,kCAAkC;AACpC;;AAEA,kEAAkE;AAClE;EACE,2HAA2H;AAC7H;;AAEA;EACE,gBAAgB;EAChB,6BAA6B;AAC/B;;AAEA;;kBAEkB;AAClB;EACE,kBAAkB;AACpB;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,YAAY;AACd;;AAEA;;;;EAIE,4BAA4B;EAC5B,2BAA2B;AAC7B;;AAEA,uFAAuF;AACvF;;EAEE,sBAAsB;AACxB;;AAEA;;EAEE,oBAAoB;AACtB;;AAEA;;EAEE,SAAS;EACT,0BAA0B;EAC1B,WAAW;EACX,sBAAsB;AACxB;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,gEAAgE;EAChE,SAAS;EACT,2DAA2D;EAC3D,qDAAqD;EACrD,kDAAkD;EAClD,6BAA6B;EAC7B,6BAA6B;AAC/B;;AAEA;EACE,aAAa;AACf;;AAEA,6CAA6C;;AAE7C;wBACwB;AACxB;EACE,aAAa;AACf;;AAEA;oCACoC;AACpC;;EAEE,aAAa;AACf;;AAEA;8EAC8E;AAC9E;;EAEE,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,6DAA6D;EAC7D,2CAA2C;EAC3C,6BAA6B;AAC/B;;AAEA;;yCAEyC;AACzC;EACE,YAAY;AACd;;AAEA,sFAAsF;;AAEtF,gFAAgF;AAChF;EACE,sBAAsB;AACxB;;AAEA;aACa;AACb;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE;IACE,4CAA4C;EAC9C;;EAEA;;;;;;IAME,0BAA0B;IAC1B,4BAA4B;IAC5B,iBAAiB;IACjB,wCAAwC;IACxC,0CAA0C;IAC1C,uCAAuC;IACvC,qCAAqC;EACvC;;EAEA;IACE,wBAAwB;IACxB,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,cAAc;EAChB;;EAEA;;;;;;IAME,iDAAiD;IACjD,oCAAoC;IACpC,6CAA6C;EAC/C;;EAEA;;;;;;IAME,kDAAkD;IAClD,qCAAqC;EACvC;AACF","sourcesContent":["/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n:root {\n  /* uei = unified extensions item */\n  --uei-icon-size: 32px;\n  --uei-attention-dot-size: 8px;\n  --uei-button-hover-bgcolor: var(--panel-item-hover-bgcolor);\n  --uei-button-hover-color: inherit;\n  --uei-button-active-bgcolor: var(--panel-item-active-bgcolor);\n  --uei-button-active-color: inherit;\n  --uei-button-attention-dot-color: var(--tab-attention-icon-color);\n}\n\n:root[uidensity=\"compact\"] {\n  --uei-icon-size: 24px;\n}\n\n#unified-extensions-panel {\n  --uei-dot-horizontal-position-in-panel: calc(var(--uei-icon-size) / 2 + var(--arrowpanel-menuitem-padding-inline) - var(--uei-attention-dot-size) / 2);\n  --uei-dot-vertical-position-in-panel: max(0px, calc(var(--arrowpanel-menuitem-padding-block) / 2 - var(--uei-attention-dot-size) / 2));\n}\n\n/* Align extensions rendered with custom elements. */\nunified-extensions-item {\n  display: flex;\n  align-items: center;\n}\n\n#unified-extensions-panel .unified-extensions-item {\n  /* Have some spacing between items in the panel; mainly useful for when HCM is enabled. */\n  padding-block: 2px;\n}\n\n/* The \"attention UI\" for the unified extensions is based on:\n * https://searchfox.org/mozilla-central/rev/560b7b1b17/browser/themes/shared/tabs.css#624 */\n\n/* On the main unified extensions button, we draw the attention on the icon element. */\n#unified-extensions-button[attention] > .toolbarbutton-icon,\n/* For extension widgets placed in a toolbar, we use the stack element (containing the icon)\n * of the action button to draw the attention dot.\n * Otherwise (in the extensions panel), we use the action button itself. */\ntoolbar .unified-extensions-item[attention] > .unified-extensions-item-action-button > .toolbarbutton-badge-stack,\n#unified-extensions-panel .unified-extensions-item[attention] > .unified-extensions-item-action-button,\n.widget-overflow-list .unified-extensions-item[attention][unified-extensions=\"false\"] > .unified-extensions-item-action-button {\n  background-image: radial-gradient(circle, var(--uei-button-attention-dot-color), var(--uei-button-attention-dot-color) 2px, transparent 2px);\n  background-size: var(--uei-attention-dot-size) var(--uei-attention-dot-size);\n  background-repeat: no-repeat;\n}\n\n/* Adjust attention dots position in the toolbar. */\n#unified-extensions-button[attention] > .toolbarbutton-icon,\ntoolbar .unified-extensions-item[attention] > .unified-extensions-item-action-button > .toolbarbutton-badge-stack {\n  background-position: center bottom calc(var(--toolbarbutton-inner-padding) / 2 - var(--uei-attention-dot-size) / 2);\n}\n\n/* Adjust attention dots position in the unified extensions panel. */\n#unified-extensions-panel .unified-extensions-item[attention] > .unified-extensions-item-action-button {\n  background-position: left var(--uei-dot-horizontal-position-in-panel) bottom var(--uei-dot-vertical-position-in-panel);\n}\n\n/* Adjust attention dots position in the unified extensions panel for RTL. */\n#unified-extensions-panel .unified-extensions-item[attention] > .unified-extensions-item-action-button:-moz-locale-dir(rtl) {\n  background-position-x: right var(--uei-dot-horizontal-position-in-panel);\n}\n\n/* Adjust attention dots position in the overflow panel. */\n.widget-overflow-list .unified-extensions-item[attention][unified-extensions=\"false\"] > .unified-extensions-item-action-button {\n  background-position-x: left calc(16px / 2 + var(--arrowpanel-menuitem-padding-inline) - var(--uei-attention-dot-size) / 2);\n  background-position-y: bottom calc(var(--arrowpanel-menuitem-padding-block) / 2 - var(--uei-attention-dot-size) / 2);\n}\n\n:root[uidensity=\"compact\"] .widget-overflow-list .unified-extensions-item[attention][unified-extensions=\"false\"] > .unified-extensions-item-action-button {\n  background-position-y: bottom -2px;\n}\n\n/* Adjust attention dots position in the overflow panel for RTL. */\n.widget-overflow-list toolbaritem.unified-extensions-item[attention][unified-extensions=\"false\"] > .unified-extensions-item-action-button:-moz-locale-dir(rtl) {\n  background-position-x: right calc(16px / 2 + var(--arrowpanel-menuitem-padding-inline) - var(--uei-attention-dot-size) / 2);\n}\n\n.unified-extensions-item-action-button {\n  overflow: hidden;\n  background-color: transparent;\n}\n\n/* The padding-block for menuitems is set to 0 in compact mode which, with the\n * extension icon being 32px in this case, makes the item look crowded even for\n * compact mode. */\n:root[uidensity=\"compact\"] panel:not([touchmode]) .unified-extensions-item-action-button {\n  padding-block: 4px;\n}\n\n.unified-extensions-item-action-button[disabled].subviewbutton {\n  color: var(--panel-description-color);\n}\n\n.unified-extensions-item-action-button[disabled] .unified-extensions-item-icon {\n  opacity: 0.5;\n}\n\n.unified-extensions-item-icon,\n/* When the unified extensions pref is enabled, we also want to increase the\n * size of the icons in the extension CUI widgets. */\npanel .unified-extensions-item[unified-extensions=\"true\"] .webextension-browser-action > .toolbarbutton-badge-stack > .toolbarbutton-icon {\n  height: var(--uei-icon-size);\n  width: var(--uei-icon-size);\n}\n\n/* The first selector is for the custom elements icon, which appears only in the UEP. */\n.unified-extensions-item-icon,\npanel .unified-extensions-item[unified-extensions=\"true\"] .webextension-browser-action > .toolbarbutton-badge-stack {\n  margin-inline-end: 6px;\n}\n\n.unified-extensions-item-icon,\n.unified-extensions-item-contents {\n  pointer-events: none;\n}\n\n.unified-extensions-item-name,\n.unified-extensions-item-message {\n  margin: 0;\n  padding-inline-start: .5em;\n  width: 22em;\n  word-break: break-word;\n}\n\n.unified-extensions-item-message {\n  color: var(--panel-description-color);\n}\n\n.unified-extensions-item-menu-button.subviewbutton {\n  list-style-image: url(\"chrome://global/skin/icons/settings.svg\");\n  margin: 0;\n  margin-inline-end: var(--arrowpanel-menuitem-margin-inline);\n  /* Have the icon even padding all around by default */\n  padding: var(--arrowpanel-menuitem-padding-inline);\n  border: 1px solid transparent;\n  background-color: transparent;\n}\n\n.unified-extensions-item-menu-button.subviewbutton > .toolbarbutton-text {\n  display: none;\n}\n\n/* --- browser action CUI widget styles --- */\n\n/* Hide secondary (menu) button when the widget is in the list of widgets in\n * customization mode. */\ntoolbaritem.unified-extensions-item:not([cui-areatype=\"panel\"], [overflowedItem=true]) .unified-extensions-item-menu-button {\n  display: none;\n}\n\n/* Hide subviewbutton label by default, it should only be shown in the old\n * overflow panel and the palette. */\ntoolbaritem.unified-extensions-item[cui-areatype=\"toolbar\"] .toolbarbutton-text,\n#unified-extensions-area > toolbaritem.unified-extensions-item .toolbarbutton-text {\n  display: none;\n}\n\n/* Hide unified extensions content by default, unless the item is overflowed or in\n * a panel. Also hide this content if the item is visible in customize mode. */\ntoolbaritem.unified-extensions-item:not([overflowedItem=\"true\"], [cui-areatype=\"panel\"]) .unified-extensions-item-contents,\ntoolbarpaletteitem > toolbaritem.unified-extensions-item .unified-extensions-item-contents {\n  display: none;\n}\n\ntoolbaritem.unified-extensions-item .unified-extensions-item-menu-button.subviewbutton {\n  -moz-box-flex: 0;\n  margin-inline-start: var(--arrowpanel-menuitem-margin-inline);\n  padding: var(--arrowpanel-menuitem-padding);\n  border: 1px solid transparent;\n}\n\n/* When the unified extensions pref is set, we want to always have a \"large\"\n * menu button, even on compact mode since each extension has two lines of text\n * anyway (extension name and message). */\ntoolbaritem.unified-extensions-item[unified-extensions=\"true\"] .unified-extensions-item-menu-button.subviewbutton {\n  padding: 8px;\n}\n\n/* --- browser action CUI widget styles in the overflow/unified extensions panel --- */\n\n/* Align CUI widgets with the custom elements in the unified extensions panel. */\n#unified-extensions-panel toolbaritem.unified-extensions-item {\n  max-width: max-content;\n}\n\n/* Show CUI widget label in overflow panel when the unified extensions pref is\n * not set. */\n.widget-overflow-list toolbaritem.unified-extensions-item[unified-extensions=\"false\"] .unified-extensions-item-action-button .toolbarbutton-text {\n  text-align: start;\n  display: block;\n}\n\n@media (prefers-contrast) {\n  :root {\n    --uei-button-attention-dot-color: ButtonText;\n  }\n\n  #unified-extensions-panel :is(\n    .unified-extensions-item-action-button:not([disabled]).subviewbutton,\n    .unified-extensions-item-menu-button.subviewbutton,\n    toolbaritem.unified-extensions-item .unified-extensions-item-action-button:not([disabled]).subviewbutton,\n    toolbaritem.unified-extensions-item .unified-extensions-item-menu-button.subviewbutton\n  ) {\n    border-color: currentColor;\n    background-color: ButtonFace;\n    color: ButtonText;\n    --uei-button-hover-bgcolor: SelectedItem;\n    --uei-button-hover-color: SelectedItemText;\n    --uei-button-active-bgcolor: ButtonFace;\n    --uei-button-active-color: ButtonText;\n  }\n\n  #unified-extensions-panel .unified-extensions-item-action-button[disabled].subviewbutton {\n    background-color: Canvas;\n    color: GrayText;\n  }\n\n  .unified-extensions-item-action-button[disabled] .unified-extensions-item-message {\n    color: GrayText;\n  }\n\n  .unified-extensions-item-action-button:not([disabled]) .unified-extensions-item-message {\n    color: ButtonText;\n  }\n\n  .unified-extensions-item-action-button:not([disabled]):hover .unified-extensions-item-message {\n    color: inherit;\n  }\n\n  #unified-extensions-panel :is(\n    .unified-extensions-item-action-button:not([disabled]).subviewbutton,\n    .unified-extensions-item-menu-button.subviewbutton,\n    toolbaritem.unified-extensions-item .unified-extensions-item-action-button:not([disabled]).subviewbutton,\n    toolbaritem.unified-extensions-item .unified-extensions-item-menu-button.subviewbutton\n  ):hover:not(:active) {\n    background-color: var(--uei-button-hover-bgcolor);\n    color: var(--uei-button-hover-color);\n    border-color: var(--uei-button-hover-bgcolor);\n  }\n\n  #unified-extensions-panel :is(\n    .unified-extensions-item-action-button:not([disabled]).subviewbutton,\n    .unified-extensions-item-menu-button.subviewbutton,\n    toolbaritem.unified-extensions-item .unified-extensions-item-action-button:not([disabled]).subviewbutton,\n    toolbaritem.unified-extensions-item .unified-extensions-item-menu-button.subviewbutton\n  ):hover:active {\n    background-color: var(--uei-button-active-bgcolor);\n    color: var(--uei-button-active-color);\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ 34265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93379);
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_unified_extensions_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16065);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_unified_extensions_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_unified_extensions_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
//# sourceMappingURL=4265.de20e76a.iframe.bundle.js.map