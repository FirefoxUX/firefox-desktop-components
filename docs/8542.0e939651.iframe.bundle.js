"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[8542],{

/***/ 92765:
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(chrome://browser/skin/downloads/indicator.css);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(chrome://browser/skin/addons/extension-controlled.css);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(chrome://browser/skin/addons/unified-extensions.css);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(chrome://browser/skin/toolbarbuttons.css);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(chrome://browser/skin/toolbarbutton-icons.css);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(chrome://browser/skin/menupanel.css);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(chrome://browser/skin/urlbar-searchbar.css);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(chrome://browser/skin/identity-block/identity-block.css);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(chrome://browser/skin/notification-icons.css);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(chrome://browser/skin/addon-notification.css);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(chrome://browser/skin/identity-credential-notification.css);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(chrome://browser/skin/urlbarView.css);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(chrome://browser/skin/autocomplete.css);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(chrome://browser/skin/places/editBookmarkPanel.css);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(chrome://browser/skin/sidebar.css);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(chrome://browser/skin/tabs.css);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(chrome://browser/skin/fullscreen/warning.css);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(chrome://browser/skin/ctrlTab.css);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(chrome://browser/skin/customizableui/customizeMode.css);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(chrome://browser/skin/UITour.css);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n@namespace html url(\"http://www.w3.org/1999/xhtml\");\n\n:root {\n  --toolbar-bgcolor: var(--toolbar-non-lwt-bgcolor);\n  --toolbar-color: var(--toolbar-non-lwt-textcolor);\n  --toolbarbutton-border-radius: 4px;\n\n  --tabs-navbar-shadow-size: 1px;\n\n  --panel-separator-color: color-mix(in srgb, currentColor 25%, transparent);\n  --panel-shortcut-color: inherit;\n  --panelui-subview-transition-duration: 150ms;\n\n  --short-notification-background: #0250BB;\n  --short-notification-gradient: #9059FF;\n\n  --button-bgcolor: color-mix(in srgb, currentColor 13%, transparent);\n  --button-hover-bgcolor: color-mix(in srgb, currentColor 17%, transparent);\n  --button-active-bgcolor: color-mix(in srgb, currentColor 30%, transparent);\n  --button-color: currentColor;\n  --button-primary-bgcolor: AccentColor;\n  --button-primary-hover-bgcolor: color-mix(in srgb, black 10%, AccentColor);\n  --button-primary-active-bgcolor: color-mix(in srgb, black 20%, AccentColor);\n  --button-primary-color: AccentColorText;\n\n  --buttons-destructive-bgcolor: #e22850;\n  --buttons-destructive-hover-bgcolor: #c50042;\n  --buttons-destructive-active-bgcolor: #810220;\n  --buttons-destructive-color: #fbfbfe;\n\n  --checkbox-unchecked-bgcolor: var(--button-bgcolor);\n  --checkbox-unchecked-hover-bgcolor: var(--button-hover-bgcolor);\n  --checkbox-unchecked-active-bgcolor: var(--button-active-bgcolor);\n  --checkbox-checked-border-color: transparent;\n  --checkbox-checked-bgcolor: var(--button-primary-bgcolor);\n  --checkbox-checked-color: var(--button-primary-color);\n  --checkbox-checked-hover-bgcolor: var(--button-primary-hover-bgcolor);\n  --checkbox-checked-active-bgcolor: var(--button-primary-active-bgcolor);\n\n  --autocomplete-popup-hover-background: var(--arrowpanel-dimmed);\n  --autocomplete-popup-separator-color: color-mix(in srgb, currentColor 14%, transparent);\n\n  --identity-box-margin-inline: 4px;\n  --urlbar-box-bgcolor: var(--button-bgcolor);\n  --urlbar-box-focus-bgcolor: var(--button-bgcolor);\n  --urlbar-box-hover-bgcolor: var(--button-hover-bgcolor);\n  --urlbar-box-active-bgcolor: var(--button-active-bgcolor);\n  --urlbar-box-text-color: inherit;\n  --urlbar-box-hover-text-color: var(--urlbar-box-text-color);\n  --urlbar-min-height: 32px;\n  --urlbar-icon-fill-opacity: 0.9;\n  --urlbar-icon-padding: 6px; /* (32px - 2px border - 2px padding - 16px icon) / 2 */\n  /* This should be used for icons and chiclets inside the input field. It makes\n     the gap around them more uniform when they are close to the field edges */\n  --urlbar-icon-border-radius: calc(var(--toolbarbutton-border-radius) - 1px);\n  --urlbar-popup-url-color: -moz-nativehyperlinktext;\n\n  --lwt-additional-images: none;\n  --lwt-background-alignment: right top;\n  --lwt-background-tiling: no-repeat;\n  --lwt-brighttext-url-color: #00ddff;\n\n  --ext-theme-background-transition: background-color 0.1s cubic-bezier(.17,.67,.83,.67);\n\n  user-select: none;\n}\n\n:root:-moz-lwtheme {\n  --checkbox-border-color: color-mix(in srgb, currentColor 41%, transparent);\n}\n\n@media (prefers-contrast) {\n  :root {\n    --autocomplete-popup-separator-color: color-mix(in srgb, currentColor 86%, transparent);\n    --panel-separator-color: currentColor;\n    --urlbar-icon-fill-opacity: 1;\n    --checkbox-checked-border-color: var(--checkbox-checked-bgcolor);\n  }\n}\n\n:root[uidensity=compact] {\n  --urlbar-min-height: 26px;\n  --urlbar-icon-padding: 3px; /* (26px - 2px border - 2px padding - 16px icon) / 2 */\n}\n\n:root[uidensity=touch] {\n  --urlbar-min-height: 34px;\n  --urlbar-icon-padding: 7px; /* (34px - 2px border - 2px padding - 16px icon) / 2 */\n}\n\n:root:-moz-lwtheme {\n  --toolbar-bgcolor: rgba(255,255,255,.4);\n  --toolbar-color: var(--lwt-text-color, inherit);\n\n  color: var(--lwt-text-color);\n}\n\n@media not (prefers-contrast) {\n  :root:-moz-lwtheme {\n    --focus-outline-color: #0061E0;\n  }\n\n  @media (prefers-color-scheme: dark) {\n    :root:-moz-lwtheme {\n      --focus-outline-color: #00DDFF;\n    }\n  }\n}\n\n/* Increase the contrast of urlbar boxes in dark mode.\n   In practice these are bumped-up --button(-hover)-bgcolor rules */\n@media (prefers-color-scheme: dark) {\n  :root {\n    --urlbar-box-bgcolor: color-mix(in srgb, currentColor 16%, transparent);\n    --urlbar-box-focus-bgcolor: color-mix(in srgb, currentColor 16%, transparent);\n    --urlbar-box-hover-bgcolor: color-mix(in srgb, currentColor 22%, transparent);\n  }\n}\n\n@media (min-resolution: 1.5dppx) {\n  :root {\n    --tabs-navbar-shadow-size: 0.5px;\n  }\n}\n\n@media (min-resolution: 3dppx) {\n  :root {\n    --tabs-navbar-shadow-size: 0.33px;\n  }\n}\n\n/* Set link color with proper contrast for WebExt themes */\n\ntoolbar .text-link:-moz-lwtheme,\npanel .text-link:-moz-lwtheme {\n  color: #0060df;\n}\n\ntoolbar[brighttext] .text-link:-moz-lwtheme,\n:root[lwt-popup-brighttext] panel .text-link {\n  color: var(--lwt-brighttext-url-color);\n}\n\ntoolbar .text-link:-moz-lwtheme:not(:hover),\npanel .text-link:-moz-lwtheme:not(:hover) {\n  text-decoration: none;\n}\n\n/* Toolbar / content area border */\n\n#navigator-toolbox {\n  border-bottom: 1px solid var(--chrome-content-separator-color);\n}\n\n:root[customizing] #navigator-toolbox {\n  border-bottom-style: none;\n}\n\n/* Add space to beginning of toolbar and make that space click the first <toolbarbutton> */\n#nav-bar-customization-target > :is(toolbarbutton, toolbaritem):first-child,\n#nav-bar-customization-target > toolbarpaletteitem:first-child > :is(toolbarbutton, toolbaritem) {\n  padding-inline-start: var(--toolbar-start-end-padding);\n}\n\n:root[sessionrestored] #nav-bar:-moz-lwtheme {\n  transition: var(--ext-theme-background-transition);\n}\n\n/* Bookmark toolbar */\n\n#PersonalToolbar {\n  overflow: clip;\n  max-height: 4em;\n  padding-inline: 6px;\n}\n\n:root[uidensity=compact] #PersonalToolbar {\n  padding-inline: 2px;\n}\n\n:root[sessionrestored] #PersonalToolbar:not(.instant) {\n  transition: min-height 170ms ease-out, max-height 170ms ease-out, var(--ext-theme-background-transition);\n}\n\n#PersonalToolbar[collapsed=true] {\n  min-height: 0;\n  max-height: 0;\n}\n\n:root[sessionrestored] #PersonalToolbar:not(.instant)[collapsed=true] {\n  transition: min-height 170ms ease-out, max-height 170ms ease-out, visibility 170ms linear;\n}\n\n#PersonalToolbar[collapsed=false]:not([initialized]) > #personal-toolbar-empty {\n  visibility: hidden;\n}\n\n/*\n * Make the empty bookmarks toolbar message take up no horizontal space.\n * This avoids two issues:\n * 1) drag/drop of urls/bookmarks to the toolbar not working, because they land\n *    on the personal-toolbar-empty element.\n * 2) buttons in the toolbar moving horizontally while the window opens,\n *    because the element is first shown at full width and then completely\n *    hidden.\n * TODO(emilio): The comment above was never quite true (the message did take\n * horizontal space, see bug 1812636). Figure out how much of this rule is\n * really needed.\n */\n#PersonalToolbar[collapsed=false] > #personal-toolbar-empty[nowidth] > #personal-toolbar-empty-description {\n  margin-inline: 0;\n  min-width: 0;\n  white-space: nowrap;\n  position: relative;\n  z-index: 1;\n}\n\n#PersonalToolbar[collapsed=true].instant {\n  visibility: collapse;\n}\n\n#PersonalToolbar[customizing] {\n  outline: 1px dashed;\n  outline-offset: -3px;\n}\n\n#PersonalToolbar[customizing]:empty {\n  /* Avoid the toolbar having no height when there's no items in it */\n  min-height: 22px;\n}\n\n#PlacesToolbarDropIndicator {\n  list-style-image: url(chrome://browser/skin/toolbar-drag-indicator.svg);\n  pointer-events: none;\n}\n\n/* rules for menupopup drop indicators */\nmenupopup::part(drop-indicator-container) {\n  /* TODO(emilio): When menupopups get ported to modern flex layout we can\n   * probably simplify this substantially, by making the indicator position:\n   * absolute or so (which was never properly supported in XUL). The container\n   * should become completely unnecessary then. */\n  -moz-box-flex: 1;\n  min-width: 0;\n  min-height: 0;\n}\n\nmenupopup::part(drop-indicator-bar) {\n  position: relative;\n  /* these two margins must together compensate the indicator's height */\n  margin-block: -1px;\n}\n\nmenupopup::part(drop-indicator) {\n  list-style-image: none;\n  height: 2px;\n  margin-inline-end: -4em;\n  background-color: SelectedItem;\n  pointer-events: none;\n}\n\n/* Back / Forward context menu */\n\n.unified-nav-back,\n.unified-nav-forward {\n  -moz-context-properties: fill;\n  fill: currentColor;\n}\n\n.unified-nav-back[_moz-menuactive]:-moz-locale-dir(ltr),\n.unified-nav-forward[_moz-menuactive]:-moz-locale-dir(rtl) {\n  list-style-image: url(\"chrome://browser/skin/back.svg\") !important;\n}\n\n.unified-nav-forward[_moz-menuactive]:-moz-locale-dir(ltr),\n.unified-nav-back[_moz-menuactive]:-moz-locale-dir(rtl) {\n  list-style-image: url(\"chrome://browser/skin/forward.svg\") !important;\n}\n\n/* Find bar */\n\n.browserContainer > findbar {\n  background-color: var(--toolbar-non-lwt-bgcolor);\n  color: var(--toolbar-non-lwt-textcolor);\n  text-shadow: none;\n}\n\n:root:not([lwtheme-image]) .browserContainer > findbar:-moz-lwtheme {\n  background-color: var(--lwt-accent-color);\n  background-image: linear-gradient(var(--toolbar-bgcolor), var(--toolbar-bgcolor));\n  border-top-color: var(--chrome-content-separator-color);\n  color: var(--toolbar-color);\n}\n\n:root:not([lwtheme-image]) .browserContainer > findbar:-moz-lwtheme:-moz-window-inactive {\n  background-color: var(--lwt-accent-color-inactive, var(--lwt-accent-color));\n}\n\n/* Private browsing indicator */\n\n.private-browsing-indicator {\n  background-image: url(\"chrome://global/skin/icons/indicator-private-browsing.svg\");\n  background-repeat: no-repeat;\n  background-size: 100% auto;\n  background-position: center;\n  width: 24px;\n  margin-inline: 7px;\n  position: relative;\n  /* Need to ensure this gets positioned on top of the position:relative #navigator-toolbox\n   * in case the dark/light themes give that item a background. */\n  z-index: 1;\n}\n\n/* New Private Browsing Indicator */\n\n#private-browsing-indicator-with-label {\n  -moz-box-align: center;\n  margin-inline: 7px;\n}\n\n.private-browsing-indicator-icon {\n  list-style-image: url(\"chrome://global/skin/icons/indicator-private-browsing.svg\");\n  width: 16px;\n  height: 16px;\n}\n\n:root:not([privatebrowsingmode=temporary]) .private-browsing-indicator,\n:root[privatebrowsingnewindicator] .private-browsing-indicator,\n:root:not([privatebrowsingnewindicator]) #private-browsing-indicator-with-label,\n:root:not([privatebrowsingmode=temporary]) #private-browsing-indicator-with-label {\n  display: none;\n}\n\n/* End private browsing indicator */\n\n/* Override theme colors since the picker uses extra colors that\n   themes cannot set */\n#DateTimePickerPanel {\n  --arrowpanel-background: Field;\n  --arrowpanel-color: FieldText;\n  --arrowpanel-border-color: ThreeDShadow;\n}\n\n#DateTimePickerPanel[side=\"top\"],\n#DateTimePickerPanel[side=\"bottom\"] {\n  margin-inline: 0;\n}\n\n#widget-overflow .webextension-popup-browser {\n  background: #fff;\n\n  /* height set via JS can be lower than the stack min-height,\n     ensure the browser takes up at least that min-height */\n  min-height: 100%;\n}\n\n#addon-progress-notification-progressmeter {\n  margin: 2px 4px;\n}\n\n/* Contextual Feature Recommendation popup-notification */\n\n#cfr-notification-header {\n  width: 100%;\n  display: block;\n  text-align: center;\n  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);\n}\n\n#cfr-notification-header-stack {\n  width: 100%;\n}\n\n#cfr-notification-header-label {\n  margin: 9px;\n  font-weight: 600;\n}\n\n#cfr-notification-header-link {\n  margin: 7px;\n  color: inherit;\n  cursor: default;\n  justify-self: end;\n}\n\n#cfr-notification-header-image {\n  width: 19px;\n  height: 19px;\n  padding: 2px;\n  -moz-context-properties: fill, fill-opacity;\n  fill: currentColor;\n  fill-opacity: 0.6;\n  list-style-image: url(chrome://global/skin/icons/help.svg);\n}\n\n#cfr-notification-header-image:hover {\n  background-color: hsla(0,0%,70%,.2);\n  border-radius: 2px;\n}\n\n#contextual-feature-recommendation-notification {\n  width: 400px;\n}\n\n#contextual-feature-recommendation-notification[data-notification-bucket=\"CFR_MILESTONE_MESSAGE\"] {\n  background: radial-gradient(circle farthest-side at top right, var(--short-notification-gradient), var(--short-notification-background));\n  width: unset;\n  max-width: 700px;\n  overflow-wrap: break-word;\n}\n\n#contextual-feature-recommendation-notification[data-notification-bucket=\"CFR_MILESTONE_MESSAGE\"]:-moz-locale-dir(rtl) {\n  background: radial-gradient(circle farthest-side at top left, var(--short-notification-gradient), var(--short-notification-background));\n}\n\n#contextual-feature-recommendation-notification[data-notification-bucket=\"CFR_MILESTONE_MESSAGE\"] .popup-notification-body-container,\n#contextual-feature-recommendation-notification[data-notification-bucket=\"CFR_MILESTONE_MESSAGE\"] .popup-notification-footer-container,\n#contextual-feature-recommendation-notification[data-notification-bucket=\"CFR_MILESTONE_MESSAGE\"] #cfr-notification-header-link {\n  display: none;\n}\n\n#contextual-feature-recommendation-notification[data-notification-bucket=\"CFR_MILESTONE_MESSAGE\"] #cfr-notification-header {\n  box-shadow: none;\n}\n\n#contextual-feature-recommendation-notification[data-notification-bucket=\"CFR_MILESTONE_MESSAGE\"] description {\n  font-weight: 400;\n  margin: unset;\n  margin-inline: 12px;\n  transform: translateY(50%);\n}\n\n#contextual-feature-recommendation-notification[data-notification-bucket=\"CFR_MILESTONE_MESSAGE\"] .popup-notification-button-container,\n#contextual-feature-recommendation-notification[data-notification-bucket=\"CFR_MILESTONE_MESSAGE\"] .popup-notification-header-container {\n  display: inline-flex;\n}\n\n#contextual-feature-recommendation-notification[data-notification-bucket=\"CFR_MILESTONE_MESSAGE\"] .popup-notification-button-container {\n  float: inline-end;\n  background-color: transparent;\n  flex-direction: row-reverse;\n  /* Override proton-doorhanger default styles that increase the size of the button */\n  margin: 0;\n}\n\n#contextual-feature-recommendation-notification[data-notification-bucket=\"CFR_MILESTONE_MESSAGE\"] .popup-notification-primary-button {\n  background-color: rgba(216, 216, 216, 0.2);\n  color: white;\n  border: none;\n  border-radius: 2px;\n  margin: 4px;\n  padding: 3px 12px;\n  flex: 1;\n}\n\n#contextual-feature-recommendation-notification[data-notification-bucket=\"CFR_MILESTONE_MESSAGE\"] .popup-notification-primary-button:after {\n  content: url(chrome://global/skin/icons/arrow-left-12.svg);\n  -moz-context-properties: fill;\n  fill: currentColor;\n  transform: translateY(2px);\n  float: inline-end;\n}\n\n#contextual-feature-recommendation-notification[data-notification-bucket=\"CFR_MILESTONE_MESSAGE\"]:-moz-locale-dir(ltr) .popup-notification-primary-button:after {\n  content: url(chrome://global/skin/icons/arrow-right-12.svg);\n}\n\n#contextual-feature-recommendation-notification[data-notification-bucket=\"CFR_MILESTONE_MESSAGE\"] .popup-notification-primary-button:hover {\n  background-color: rgba(216, 216, 216, 0.4);\n}\n\n#contextual-feature-recommendation-notification[data-notification-bucket=\"CFR_MILESTONE_MESSAGE\"] .popup-notification-primary-button:active {\n  background-color: rgba(216, 216, 216, 0.5);\n}\n\n#contextual-feature-recommendation-notification[data-notification-bucket=\"CFR_MILESTONE_MESSAGE\"] .popup-notification-secondary-button {\n  margin: 3px;\n  border: none;\n  border-radius: 2px;\n  background-image: url(chrome://global/skin/icons/close.svg);\n  background-color: transparent;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 10px;\n  -moz-context-properties: fill;\n  fill: white;\n  height: 22px;\n  width: 22px;\n  padding: 0;\n  align-self: center;\n  flex: none;\n  font-size: 0;\n}\n\n#contextual-feature-recommendation-notification[data-notification-bucket=\"CFR_MILESTONE_MESSAGE\"] .popup-notification-secondary-button:hover {\n  background-color: rgba(216, 216, 216, 0.4);\n}\n\n\n#contextual-feature-recommendation-notification[data-notification-bucket=\"CFR_MILESTONE_MESSAGE\"] .popup-notification-header-container {\n  color: white;\n  max-width: unset;\n}\n\n#contextual-feature-recommendation-notification[data-notification-bucket=\"CFR_SOCIAL_TRACKING_PROTECTION\"] {\n  width: 386px;\n}\n\n#contextual-feature-recommendation-notification .popup-notification-icon {\n  margin-inline-end: 4px;\n}\n\n#contextual-feature-recommendation-notification .cfr-doorhanger-large-icon {\n  width: 64px;\n  height: 64px;\n  margin-inline-end: 12px;\n}\n\n#contextual-feature-recommendation-notification .popup-notification-body-container {\n  width: 100%;\n  padding-bottom: 2px;\n}\n\n#contextual-feature-recommendation-notification popupnotificationcontent {\n  margin-top: 0;\n}\n\n#contextual-feature-recommendation-notification description {\n  margin-bottom: 0;\n}\n\n#cfr-notification-footer-text-and-addon-info {\n  display: block;\n  padding: 10px var(--arrowpanel-padding);\n}\n\n#contextual-feature-recommendation-notification[data-notification-category=\"addon_recommendation\"] #cfr-notification-feature-steps,\n#contextual-feature-recommendation-notification[data-notification-category=\"icon_and_message\"] .popup-notification-footer-container {\n  display: none;\n}\n\n/*\n * `icon_and_message` CFR doorhanger with: icon, title and subtitle.\n * No panel header is shown\n */\n#contextual-feature-recommendation-notification[data-notification-category=\"icon_and_message\"] #cfr-notification-header {\n  display: none;\n}\n\n#contextual-feature-recommendation-notification[data-notification-category=\"icon_and_message\"] .popup-notification-description {\n  font-weight: 600;\n  margin-bottom: 15px;\n}\n\n#contextual-feature-recommendation-notification[data-notification-category=\"icon_and_message\"] popupnotificationcontent {\n  display: block; /* This forces the subtitle content to wrap */\n}\n\n\n#cfr-notification-feature-steps {\n  display: flex;\n  flex-direction: column;\n  margin-top: 10px;\n}\n\n#cfr-notification-feature-steps li {\n  margin-inline-start: 10px;\n  position: relative;\n  display: list-item;\n}\n\n#cfr-notification-feature-steps li:not(:last-child) {\n  margin-bottom: 5px;\n}\n\n#cfr-notification-footer-text,\n#cfr-notification-footer-users,\n#cfr-notification-footer-learn-more-link {\n  margin: 0;\n}\n\n#cfr-notification-footer-addon-info {\n  align-items: center;\n  display: flex;\n  margin-block: 10px 6px;\n}\n\n#cfr-notification-footer-filled-stars,\n#cfr-notification-footer-empty-stars {\n  -moz-context-properties: fill, fill-opacity;\n  background-image: url(chrome://browser/skin/bookmark.svg);\n  fill: currentColor;\n  fill-opacity: 0.7;\n  height: 16px;\n}\n\n#cfr-notification-footer-filled-stars:-moz-locale-dir(rtl),\n#cfr-notification-footer-empty-stars {\n  background-position-x: right;\n}\n\n#cfr-notification-footer-filled-stars,\n#cfr-notification-footer-empty-stars:-moz-locale-dir(rtl) {\n  background-position-x: left;\n}\n\n#cfr-notification-footer-empty-stars[tooltiptext] {\n  margin-inline-end: 6px;\n  opacity: 0.3;\n}\n\n#cfr-notification-footer-users {\n  opacity: 0.7;\n}\n\n#cfr-notification-footer-spacer {\n  flex-grow: 1;\n}\n\n#content-mask {\n  background: rgba(0, 0, 0, 0.5);\n}\n\n/* nhnt11: Workaround to insert a linebreak after the DoH doorhanger's title.\n * The title uses the inline html|b that usually contains the hostname for\n * permission prompts to achieve bold formatting. This is always the 2nd child.\n */\n.popup-notification-description[popupid=\"doh-first-time\"] > html|b:first-of-type {\n  display: block;\n  margin-bottom: 4px; /* matches the margin-bottom on description elements */\n}\n\n/* Password Manager Doorhanger */\n\n.ac-dropmarker {\n  appearance: none;\n  justify-self: end;\n  margin-inline-end: 8px;\n  align-self: center;\n}\n\n.ac-dropmarker::part(icon) {\n  list-style-image: url(chrome://global/skin/icons/arrow-down-12.svg);\n  -moz-context-properties: fill;\n  fill: var(--input-color, -moz-DialogText);\n}\n\n.ac-has-end-icon {\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n/* ENABLE DEVTOOLS POPUP */\n@media (-moz-platform: macos), (-moz-platform: windows) {\n  #enable-devtools-popup {\n    font-size: 1.18em;\n  }\n}\n\n#sharing-tabs-warning-panel > hbox[type=\"window\"] > vbox > label > #sharing-warning-screen-panel-header,\n#sharing-tabs-warning-panel > hbox[type=\"screen\"] > vbox > label > #sharing-warning-window-panel-header {\n  display: none;\n}\n\n#sharing-tabs-warning-panel {\n  max-width: 400px;\n}\n\n#sharing-warning-proceed-to-tab {\n  appearance: none;\n  border-style: none;\n  margin: 0;\n  background-color: rgb(0,96,223);\n  color: rgb(255,255,255);\n  border-radius: 5px;\n  padding: 10px;\n  margin-top: 15px;\n  margin-bottom: 10px;\n}\n\n#sharing-warning-proceed-to-tab:hover {\n  background-color: rgb(0,62,170);\n}\n\n.webRTC-selectDevice-selector-container {\n  display: flex;\n  align-items: center;\n}\n\n.webRTC-selectDevice-selector-container > menulist {\n  flex: 1;\n  min-width: 0;\n}\n\npopupnotificationcontent {\n  margin-block-start: 8px;\n}\n\n/**\n * Our OS integration code toggles whether system colors should return light or\n * dark values based on the luminosity of the toolbar background. Because themes\n * can style panels to have a different background color than the toolbar, we\n * need specific overrides for system colors used in light or dark themes.\n */\n.popup-notification-body:-moz-lwtheme {\n  color-scheme: light;\n}\n\n:root[lwt-popup-brighttext] .popup-notification-body {\n  color-scheme: dark;\n}\n\n.popup-notification-body menulist {\n  margin: 0;\n}\n\n.popup-notification-checkbox {\n  margin-block: 12px 0;\n}\n\n.popup-notification-body-container {\n  padding-block-end: 0;\n}\n\n#webRTC-selectCamera-label,\n#webRTC-selectMicrophone-label {\n  display: none;\n}\n\n.webRTC-selectDevice-icon {\n  -moz-context-properties: fill;\n  fill: currentColor;\n  margin-inline-end: 8px;\n  /* Setting width explicitly so it's still visible if the device label is very long */\n  width: 16px;\n}\n\n#webRTC-selectCamera-icon {\n  list-style-image: url(\"chrome://browser/skin/notification-icons/camera.svg\");\n}\n\n#webRTC-selectMicrophone-icon {\n  list-style-image: url(\"chrome://browser/skin/notification-icons/microphone.svg\");\n}\n\n#webRTC-selectSpeaker-icon {\n  list-style-image: url(\"chrome://global/skin/media/audio.svg\");\n}\n\n.popup-notification-body :is(description, label:not(.learnMore), checkbox, input) {\n  margin-inline: 0;\n}\n\n.popup-notification-body input {\n  padding: 8px;\n  border-radius: 4px;\n  border: 0;\n  outline: 1px solid var(--input-border-color, ThreeDShadow);\n  outline-offset: -1px;\n  background-color: var(--input-bgcolor, Field);\n  color: var(--input-color, FieldText);\n}\n\n.popup-notification-body input.ac-has-end-icon {\n  --input-padding-from-arrow-side: calc(8px + 16px + 8px); /* spacing from the end + arrow element width + extra spacing) */\n  padding-inline-end: var(--input-padding-from-arrow-side);\n}\n\n/* Avoid overlapping the text on the arrow icon when switching input text direction */\n.popup-notification-body:-moz-locale-dir(rtl) input.ac-has-end-icon:dir(ltr) {\n  padding-left: var(--input-padding-from-arrow-side);\n  padding-right: 8px;\n}\n.popup-notification-body:-moz-locale-dir(ltr) input.ac-has-end-icon:dir(rtl) {\n  padding-right: var(--input-padding-from-arrow-side);\n  padding-left: 8px;\n}\n\n.popup-notification-body input:focus-visible {\n  outline: 2px solid var(--focus-outline-color);\n}\n\n/**\n * There's already a margin-block-start of 8px on popupnotificationcontent,\n * so the first label only needs 8px of margin-block-start to match the\n * spec.\n */\n.password-notification-label:first-of-type {\n  margin-block-start: 8px;\n}\n\n.password-notification-label:not(:first-of-type) {\n  margin-block-start: 16px;\n}\n\n#password-notification-visibilityToggle {\n  margin-block-start: 14px;\n}\n\n#password-notification-visibilityToggle > .checkbox-label-box > .checkbox-label {\n  opacity: 0.7;\n}\n\n.popup-notification-description > b {\n  font-weight: inherit;\n}\n\n.popup-notification-description {\n  font-weight: 600;\n  margin-top: 0;\n}\n\n#tab-notification-deck {\n  display: block;\n}\n\n.relay-integration-header {\n  display: flex;\n  align-items: center;\n  font-size: 2em;\n}\n\n.relay-integration-header > div {\n  width: 32px;\n  height: 32px;\n  background-image: url(\"chrome://browser/content/logos/relay.svg\");\n  background-repeat: no-repeat;\n}\n\n.relay-integration-header > span:first-of-type {\n  font-weight: bold;\n  margin-inline-start: 8px;\n}\n\n.relay-integration-header > span:last-of-type {\n  font-weight: normal;\n  white-space: pre;\n}\n\n.popup-notification-description[popupid=\"relay-integration-offer-notification\"] > html|div:first-of-type {\n  font-weight: normal;\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: auto auto auto auto;\n}\n\n#relay-integration-reuse-masks-notification > popupnotificationcontent > div {\n  font-weight: normal;\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: auto auto auto auto;\n}\n\n.reusable-relay-masks {\n  display: flex;\n  flex-direction: column;\n}\n\n.reusable-relay-masks > button {\n  padding: 4px;\n  margin: 4px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.reusable-relay-masks > button > span:first-child {\n  margin-inline-end: 20px;\n}\n\n.reusable-relay-masks > button > span:last-child {\n  opacity: 0.6;\n}\n\n#historySwipeAnimationPreviousArrow,\n#historySwipeAnimationNextArrow {\n  will-change: transform;\n}\n\n#historySwipeAnimationPreviousArrow:-moz-locale-dir(rtl),\n#historySwipeAnimationNextArrow:-moz-locale-dir(ltr) {\n  transform: scaleX(-1);\n}\n\n#historySwipeAnimationPreviousArrow > svg,\n#historySwipeAnimationNextArrow > svg {\n  margin: auto 0;\n}\n\n#historySwipeAnimationPreviousArrow,\n#historySwipeAnimationNextArrow {\n  --swipe-nav-icon-primary-color: #0060DF;\n  --swipe-nav-icon-accent-color: #FFFFFF;\n}\n\n@media (-moz-content-prefers-color-scheme: dark) {\n  #historySwipeAnimationPreviousArrow,\n  #historySwipeAnimationNextArrow {\n    --swipe-nav-icon-primary-color: #00DDFF;\n    --swipe-nav-icon-accent-color: #000000;\n  }\n}\n\n@media (prefers-contrast) {\n  #historySwipeAnimationPreviousArrow,\n  #historySwipeAnimationNextArrow {\n    --swipe-nav-icon-primary-color: SelectedItemText;\n    --swipe-nav-icon-accent-color: SelectedItem;\n  }\n}\n\n/*\n * Styles for the swipe navigation SVG icon.\n */\n.swipe-nav-icon path {\n  transition: fill 1s;\n}\n\n@media not (-moz-platform: macos) {\n  /*\n   * Styles for the swipe navigation SVG icon.\n   *\n   * `will-navigate` class name is added to the <svg> element when the user's\n   * swipe gesture reached to the point where history navigation will be\n   * triggered. It's used for triggering three animations, an arrow color change,\n   * a circle color change and a glowing effect outer the circle.\n   */\n  .swipe-nav-icon circle {\n    fill: var(--swipe-nav-icon-accent-color);\n    stroke: var(--swipe-nav-icon-primary-color);\n  }\n\n  .swipe-nav-icon circle:first-of-type {\n    fill: var(--swipe-nav-icon-primary-color);\n    transition: opacity 1s;\n    will-change: opacity; /* a workaround for bug 1804189 */\n    opacity: 0;\n  }\n\n  .swipe-nav-icon.will-navigate > circle:not(:first-of-type) {\n    fill: var(--swipe-nav-icon-primary-color);\n  }\n\n  .swipe-nav-icon circle:not(:first-of-type) {\n    transition: fill 1s;\n  }\n\n  .swipe-nav-icon.will-navigate > circle:first-of-type {\n    transition-delay: 0.2s;\n    opacity: 0.2;\n  }\n\n  .swipe-nav-icon.will-navigate > circle:not(:first-of-type) {\n    fill: var(--swipe-nav-icon-primary-color);\n  }\n\n  .swipe-nav-icon path {\n    fill: var(--swipe-nav-icon-primary-color);\n  }\n\n  .swipe-nav-icon.will-navigate > path {\n    fill: var(--swipe-nav-icon-accent-color);\n    stroke: var(--swipe-nav-icon-accent-color);\n  }\n}\n\n@media (-moz-platform: macos) {\n  /*\n   * Styles for the swipe navigation SVG icon.\n   *\n   * `will-navigate` class name is added to the <svg> element when the user's\n   * swipe gesture reached to the point where history navigation will be\n   * triggered.\n   */\n  .swipe-nav-icon-circle-outline,\n  .swipe-nav-icon-arrow {\n    fill: var(--swipe-nav-icon-primary-color);\n  }\n  .swipe-nav-icon-circle {\n    fill: var(--swipe-nav-icon-accent-color);\n  }\n  .swipe-nav-icon.will-navigate > .swipe-nav-icon-circle-outline,\n  .swipe-nav-icon.will-navigate > .swipe-nav-icon-arrow {\n    fill: var(--swipe-nav-icon-accent-color);\n  }\n  .swipe-nav-icon.will-navigate > .swipe-nav-icon-circle {\n    fill: var(--swipe-nav-icon-primary-color);\n  }\n}\n", "",{"version":3,"sources":["webpack://./../../themes/shared/browser-shared.css"],"names":[],"mappings":"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","sourcesContent":["/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n@import url(\"chrome://browser/skin/downloads/indicator.css\");\n@import url(\"chrome://browser/skin/addons/extension-controlled.css\");\n@import url(\"chrome://browser/skin/addons/unified-extensions.css\");\n@import url(\"chrome://browser/skin/toolbarbuttons.css\");\n@import url(\"chrome://browser/skin/toolbarbutton-icons.css\");\n@import url(\"chrome://browser/skin/menupanel.css\");\n@import url(\"chrome://browser/skin/urlbar-searchbar.css\");\n@import url(\"chrome://browser/skin/identity-block/identity-block.css\");\n@import url(\"chrome://browser/skin/notification-icons.css\");\n@import url(\"chrome://browser/skin/addon-notification.css\");\n@import url(\"chrome://browser/skin/identity-credential-notification.css\");\n@import url(\"chrome://browser/skin/urlbarView.css\");\n@import url(\"chrome://browser/skin/autocomplete.css\");\n@import url(\"chrome://browser/skin/places/editBookmarkPanel.css\");\n@import url(\"chrome://browser/skin/sidebar.css\");\n@import url(\"chrome://browser/skin/tabs.css\");\n@import url(\"chrome://browser/skin/fullscreen/warning.css\");\n@import url(\"chrome://browser/skin/ctrlTab.css\");\n@import url(\"chrome://browser/skin/customizableui/customizeMode.css\");\n@import url(\"chrome://browser/skin/UITour.css\");\n\n@namespace html url(\"http://www.w3.org/1999/xhtml\");\n\n:root {\n  --toolbar-bgcolor: var(--toolbar-non-lwt-bgcolor);\n  --toolbar-color: var(--toolbar-non-lwt-textcolor);\n  --toolbarbutton-border-radius: 4px;\n\n  --tabs-navbar-shadow-size: 1px;\n\n  --panel-separator-color: color-mix(in srgb, currentColor 25%, transparent);\n  --panel-shortcut-color: inherit;\n  --panelui-subview-transition-duration: 150ms;\n\n  --short-notification-background: #0250BB;\n  --short-notification-gradient: #9059FF;\n\n  --button-bgcolor: color-mix(in srgb, currentColor 13%, transparent);\n  --button-hover-bgcolor: color-mix(in srgb, currentColor 17%, transparent);\n  --button-active-bgcolor: color-mix(in srgb, currentColor 30%, transparent);\n  --button-color: currentColor;\n  --button-primary-bgcolor: AccentColor;\n  --button-primary-hover-bgcolor: color-mix(in srgb, black 10%, AccentColor);\n  --button-primary-active-bgcolor: color-mix(in srgb, black 20%, AccentColor);\n  --button-primary-color: AccentColorText;\n\n  --buttons-destructive-bgcolor: #e22850;\n  --buttons-destructive-hover-bgcolor: #c50042;\n  --buttons-destructive-active-bgcolor: #810220;\n  --buttons-destructive-color: #fbfbfe;\n\n  --checkbox-unchecked-bgcolor: var(--button-bgcolor);\n  --checkbox-unchecked-hover-bgcolor: var(--button-hover-bgcolor);\n  --checkbox-unchecked-active-bgcolor: var(--button-active-bgcolor);\n  --checkbox-checked-border-color: transparent;\n  --checkbox-checked-bgcolor: var(--button-primary-bgcolor);\n  --checkbox-checked-color: var(--button-primary-color);\n  --checkbox-checked-hover-bgcolor: var(--button-primary-hover-bgcolor);\n  --checkbox-checked-active-bgcolor: var(--button-primary-active-bgcolor);\n\n  --autocomplete-popup-hover-background: var(--arrowpanel-dimmed);\n  --autocomplete-popup-separator-color: color-mix(in srgb, currentColor 14%, transparent);\n\n  --identity-box-margin-inline: 4px;\n  --urlbar-box-bgcolor: var(--button-bgcolor);\n  --urlbar-box-focus-bgcolor: var(--button-bgcolor);\n  --urlbar-box-hover-bgcolor: var(--button-hover-bgcolor);\n  --urlbar-box-active-bgcolor: var(--button-active-bgcolor);\n  --urlbar-box-text-color: inherit;\n  --urlbar-box-hover-text-color: var(--urlbar-box-text-color);\n  --urlbar-min-height: 32px;\n  --urlbar-icon-fill-opacity: 0.9;\n  --urlbar-icon-padding: 6px; /* (32px - 2px border - 2px padding - 16px icon) / 2 */\n  /* This should be used for icons and chiclets inside the input field. It makes\n     the gap around them more uniform when they are close to the field edges */\n  --urlbar-icon-border-radius: calc(var(--toolbarbutton-border-radius) - 1px);\n  --urlbar-popup-url-color: -moz-nativehyperlinktext;\n\n  --lwt-additional-images: none;\n  --lwt-background-alignment: right top;\n  --lwt-background-tiling: no-repeat;\n  --lwt-brighttext-url-color: #00ddff;\n\n  --ext-theme-background-transition: background-color 0.1s cubic-bezier(.17,.67,.83,.67);\n\n  user-select: none;\n}\n\n:root:-moz-lwtheme {\n  --checkbox-border-color: color-mix(in srgb, currentColor 41%, transparent);\n}\n\n@media (prefers-contrast) {\n  :root {\n    --autocomplete-popup-separator-color: color-mix(in srgb, currentColor 86%, transparent);\n    --panel-separator-color: currentColor;\n    --urlbar-icon-fill-opacity: 1;\n    --checkbox-checked-border-color: var(--checkbox-checked-bgcolor);\n  }\n}\n\n:root[uidensity=compact] {\n  --urlbar-min-height: 26px;\n  --urlbar-icon-padding: 3px; /* (26px - 2px border - 2px padding - 16px icon) / 2 */\n}\n\n:root[uidensity=touch] {\n  --urlbar-min-height: 34px;\n  --urlbar-icon-padding: 7px; /* (34px - 2px border - 2px padding - 16px icon) / 2 */\n}\n\n:root:-moz-lwtheme {\n  --toolbar-bgcolor: rgba(255,255,255,.4);\n  --toolbar-color: var(--lwt-text-color, inherit);\n\n  color: var(--lwt-text-color);\n}\n\n@media not (prefers-contrast) {\n  :root:-moz-lwtheme {\n    --focus-outline-color: #0061E0;\n  }\n\n  @media (prefers-color-scheme: dark) {\n    :root:-moz-lwtheme {\n      --focus-outline-color: #00DDFF;\n    }\n  }\n}\n\n/* Increase the contrast of urlbar boxes in dark mode.\n   In practice these are bumped-up --button(-hover)-bgcolor rules */\n@media (prefers-color-scheme: dark) {\n  :root {\n    --urlbar-box-bgcolor: color-mix(in srgb, currentColor 16%, transparent);\n    --urlbar-box-focus-bgcolor: color-mix(in srgb, currentColor 16%, transparent);\n    --urlbar-box-hover-bgcolor: color-mix(in srgb, currentColor 22%, transparent);\n  }\n}\n\n@media (min-resolution: 1.5dppx) {\n  :root {\n    --tabs-navbar-shadow-size: 0.5px;\n  }\n}\n\n@media (min-resolution: 3dppx) {\n  :root {\n    --tabs-navbar-shadow-size: 0.33px;\n  }\n}\n\n/* Set link color with proper contrast for WebExt themes */\n\ntoolbar .text-link:-moz-lwtheme,\npanel .text-link:-moz-lwtheme {\n  color: #0060df;\n}\n\ntoolbar[brighttext] .text-link:-moz-lwtheme,\n:root[lwt-popup-brighttext] panel .text-link {\n  color: var(--lwt-brighttext-url-color);\n}\n\ntoolbar .text-link:-moz-lwtheme:not(:hover),\npanel .text-link:-moz-lwtheme:not(:hover) {\n  text-decoration: none;\n}\n\n/* Toolbar / content area border */\n\n#navigator-toolbox {\n  border-bottom: 1px solid var(--chrome-content-separator-color);\n}\n\n:root[customizing] #navigator-toolbox {\n  border-bottom-style: none;\n}\n\n/* Add space to beginning of toolbar and make that space click the first <toolbarbutton> */\n#nav-bar-customization-target > :is(toolbarbutton, toolbaritem):first-child,\n#nav-bar-customization-target > toolbarpaletteitem:first-child > :is(toolbarbutton, toolbaritem) {\n  padding-inline-start: var(--toolbar-start-end-padding);\n}\n\n:root[sessionrestored] #nav-bar:-moz-lwtheme {\n  transition: var(--ext-theme-background-transition);\n}\n\n/* Bookmark toolbar */\n\n#PersonalToolbar {\n  overflow: clip;\n  max-height: 4em;\n  padding-inline: 6px;\n}\n\n:root[uidensity=compact] #PersonalToolbar {\n  padding-inline: 2px;\n}\n\n:root[sessionrestored] #PersonalToolbar:not(.instant) {\n  transition: min-height 170ms ease-out, max-height 170ms ease-out, var(--ext-theme-background-transition);\n}\n\n#PersonalToolbar[collapsed=true] {\n  min-height: 0;\n  max-height: 0;\n}\n\n:root[sessionrestored] #PersonalToolbar:not(.instant)[collapsed=true] {\n  transition: min-height 170ms ease-out, max-height 170ms ease-out, visibility 170ms linear;\n}\n\n#PersonalToolbar[collapsed=false]:not([initialized]) > #personal-toolbar-empty {\n  visibility: hidden;\n}\n\n/*\n * Make the empty bookmarks toolbar message take up no horizontal space.\n * This avoids two issues:\n * 1) drag/drop of urls/bookmarks to the toolbar not working, because they land\n *    on the personal-toolbar-empty element.\n * 2) buttons in the toolbar moving horizontally while the window opens,\n *    because the element is first shown at full width and then completely\n *    hidden.\n * TODO(emilio): The comment above was never quite true (the message did take\n * horizontal space, see bug 1812636). Figure out how much of this rule is\n * really needed.\n */\n#PersonalToolbar[collapsed=false] > #personal-toolbar-empty[nowidth] > #personal-toolbar-empty-description {\n  margin-inline: 0;\n  min-width: 0;\n  white-space: nowrap;\n  position: relative;\n  z-index: 1;\n}\n\n#PersonalToolbar[collapsed=true].instant {\n  visibility: collapse;\n}\n\n#PersonalToolbar[customizing] {\n  outline: 1px dashed;\n  outline-offset: -3px;\n}\n\n#PersonalToolbar[customizing]:empty {\n  /* Avoid the toolbar having no height when there's no items in it */\n  min-height: 22px;\n}\n\n#PlacesToolbarDropIndicator {\n  list-style-image: url(chrome://browser/skin/toolbar-drag-indicator.svg);\n  pointer-events: none;\n}\n\n/* rules for menupopup drop indicators */\nmenupopup::part(drop-indicator-container) {\n  /* TODO(emilio): When menupopups get ported to modern flex layout we can\n   * probably simplify this substantially, by making the indicator position:\n   * absolute or so (which was never properly supported in XUL). The container\n   * should become completely unnecessary then. */\n  -moz-box-flex: 1;\n  min-width: 0;\n  min-height: 0;\n}\n\nmenupopup::part(drop-indicator-bar) {\n  position: relative;\n  /* these two margins must together compensate the indicator's height */\n  margin-block: -1px;\n}\n\nmenupopup::part(drop-indicator) {\n  list-style-image: none;\n  height: 2px;\n  margin-inline-end: -4em;\n  background-color: SelectedItem;\n  pointer-events: none;\n}\n\n/* Back / Forward context menu */\n\n.unified-nav-back,\n.unified-nav-forward {\n  -moz-context-properties: fill;\n  fill: currentColor;\n}\n\n.unified-nav-back[_moz-menuactive]:-moz-locale-dir(ltr),\n.unified-nav-forward[_moz-menuactive]:-moz-locale-dir(rtl) {\n  list-style-image: url(\"chrome://browser/skin/back.svg\") !important;\n}\n\n.unified-nav-forward[_moz-menuactive]:-moz-locale-dir(ltr),\n.unified-nav-back[_moz-menuactive]:-moz-locale-dir(rtl) {\n  list-style-image: url(\"chrome://browser/skin/forward.svg\") !important;\n}\n\n/* Find bar */\n\n.browserContainer > findbar {\n  background-color: var(--toolbar-non-lwt-bgcolor);\n  color: var(--toolbar-non-lwt-textcolor);\n  text-shadow: none;\n}\n\n:root:not([lwtheme-image]) .browserContainer > findbar:-moz-lwtheme {\n  background-color: var(--lwt-accent-color);\n  background-image: linear-gradient(var(--toolbar-bgcolor), var(--toolbar-bgcolor));\n  border-top-color: var(--chrome-content-separator-color);\n  color: var(--toolbar-color);\n}\n\n:root:not([lwtheme-image]) .browserContainer > findbar:-moz-lwtheme:-moz-window-inactive {\n  background-color: var(--lwt-accent-color-inactive, var(--lwt-accent-color));\n}\n\n/* Private browsing indicator */\n\n.private-browsing-indicator {\n  background-image: url(\"chrome://global/skin/icons/indicator-private-browsing.svg\");\n  background-repeat: no-repeat;\n  background-size: 100% auto;\n  background-position: center;\n  width: 24px;\n  margin-inline: 7px;\n  position: relative;\n  /* Need to ensure this gets positioned on top of the position:relative #navigator-toolbox\n   * in case the dark/light themes give that item a background. */\n  z-index: 1;\n}\n\n/* New Private Browsing Indicator */\n\n#private-browsing-indicator-with-label {\n  -moz-box-align: center;\n  margin-inline: 7px;\n}\n\n.private-browsing-indicator-icon {\n  list-style-image: url(\"chrome://global/skin/icons/indicator-private-browsing.svg\");\n  width: 16px;\n  height: 16px;\n}\n\n:root:not([privatebrowsingmode=temporary]) .private-browsing-indicator,\n:root[privatebrowsingnewindicator] .private-browsing-indicator,\n:root:not([privatebrowsingnewindicator]) #private-browsing-indicator-with-label,\n:root:not([privatebrowsingmode=temporary]) #private-browsing-indicator-with-label {\n  display: none;\n}\n\n/* End private browsing indicator */\n\n/* Override theme colors since the picker uses extra colors that\n   themes cannot set */\n#DateTimePickerPanel {\n  --arrowpanel-background: Field;\n  --arrowpanel-color: FieldText;\n  --arrowpanel-border-color: ThreeDShadow;\n}\n\n#DateTimePickerPanel[side=\"top\"],\n#DateTimePickerPanel[side=\"bottom\"] {\n  margin-inline: 0;\n}\n\n#widget-overflow .webextension-popup-browser {\n  background: #fff;\n\n  /* height set via JS can be lower than the stack min-height,\n     ensure the browser takes up at least that min-height */\n  min-height: 100%;\n}\n\n#addon-progress-notification-progressmeter {\n  margin: 2px 4px;\n}\n\n/* Contextual Feature Recommendation popup-notification */\n\n#cfr-notification-header {\n  width: 100%;\n  display: block;\n  text-align: center;\n  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);\n}\n\n#cfr-notification-header-stack {\n  width: 100%;\n}\n\n#cfr-notification-header-label {\n  margin: 9px;\n  font-weight: 600;\n}\n\n#cfr-notification-header-link {\n  margin: 7px;\n  color: inherit;\n  cursor: default;\n  justify-self: end;\n}\n\n#cfr-notification-header-image {\n  width: 19px;\n  height: 19px;\n  padding: 2px;\n  -moz-context-properties: fill, fill-opacity;\n  fill: currentColor;\n  fill-opacity: 0.6;\n  list-style-image: url(chrome://global/skin/icons/help.svg);\n}\n\n#cfr-notification-header-image:hover {\n  background-color: hsla(0,0%,70%,.2);\n  border-radius: 2px;\n}\n\n#contextual-feature-recommendation-notification {\n  width: 400px;\n}\n\n#contextual-feature-recommendation-notification[data-notification-bucket=\"CFR_MILESTONE_MESSAGE\"] {\n  background: radial-gradient(circle farthest-side at top right, var(--short-notification-gradient), var(--short-notification-background));\n  width: unset;\n  max-width: 700px;\n  overflow-wrap: break-word;\n}\n\n#contextual-feature-recommendation-notification[data-notification-bucket=\"CFR_MILESTONE_MESSAGE\"]:-moz-locale-dir(rtl) {\n  background: radial-gradient(circle farthest-side at top left, var(--short-notification-gradient), var(--short-notification-background));\n}\n\n#contextual-feature-recommendation-notification[data-notification-bucket=\"CFR_MILESTONE_MESSAGE\"] .popup-notification-body-container,\n#contextual-feature-recommendation-notification[data-notification-bucket=\"CFR_MILESTONE_MESSAGE\"] .popup-notification-footer-container,\n#contextual-feature-recommendation-notification[data-notification-bucket=\"CFR_MILESTONE_MESSAGE\"] #cfr-notification-header-link {\n  display: none;\n}\n\n#contextual-feature-recommendation-notification[data-notification-bucket=\"CFR_MILESTONE_MESSAGE\"] #cfr-notification-header {\n  box-shadow: none;\n}\n\n#contextual-feature-recommendation-notification[data-notification-bucket=\"CFR_MILESTONE_MESSAGE\"] description {\n  font-weight: 400;\n  margin: unset;\n  margin-inline: 12px;\n  transform: translateY(50%);\n}\n\n#contextual-feature-recommendation-notification[data-notification-bucket=\"CFR_MILESTONE_MESSAGE\"] .popup-notification-button-container,\n#contextual-feature-recommendation-notification[data-notification-bucket=\"CFR_MILESTONE_MESSAGE\"] .popup-notification-header-container {\n  display: inline-flex;\n}\n\n#contextual-feature-recommendation-notification[data-notification-bucket=\"CFR_MILESTONE_MESSAGE\"] .popup-notification-button-container {\n  float: inline-end;\n  background-color: transparent;\n  flex-direction: row-reverse;\n  /* Override proton-doorhanger default styles that increase the size of the button */\n  margin: 0;\n}\n\n#contextual-feature-recommendation-notification[data-notification-bucket=\"CFR_MILESTONE_MESSAGE\"] .popup-notification-primary-button {\n  background-color: rgba(216, 216, 216, 0.2);\n  color: white;\n  border: none;\n  border-radius: 2px;\n  margin: 4px;\n  padding: 3px 12px;\n  flex: 1;\n}\n\n#contextual-feature-recommendation-notification[data-notification-bucket=\"CFR_MILESTONE_MESSAGE\"] .popup-notification-primary-button:after {\n  content: url(chrome://global/skin/icons/arrow-left-12.svg);\n  -moz-context-properties: fill;\n  fill: currentColor;\n  transform: translateY(2px);\n  float: inline-end;\n}\n\n#contextual-feature-recommendation-notification[data-notification-bucket=\"CFR_MILESTONE_MESSAGE\"]:-moz-locale-dir(ltr) .popup-notification-primary-button:after {\n  content: url(chrome://global/skin/icons/arrow-right-12.svg);\n}\n\n#contextual-feature-recommendation-notification[data-notification-bucket=\"CFR_MILESTONE_MESSAGE\"] .popup-notification-primary-button:hover {\n  background-color: rgba(216, 216, 216, 0.4);\n}\n\n#contextual-feature-recommendation-notification[data-notification-bucket=\"CFR_MILESTONE_MESSAGE\"] .popup-notification-primary-button:active {\n  background-color: rgba(216, 216, 216, 0.5);\n}\n\n#contextual-feature-recommendation-notification[data-notification-bucket=\"CFR_MILESTONE_MESSAGE\"] .popup-notification-secondary-button {\n  margin: 3px;\n  border: none;\n  border-radius: 2px;\n  background-image: url(chrome://global/skin/icons/close.svg);\n  background-color: transparent;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 10px;\n  -moz-context-properties: fill;\n  fill: white;\n  height: 22px;\n  width: 22px;\n  padding: 0;\n  align-self: center;\n  flex: none;\n  font-size: 0;\n}\n\n#contextual-feature-recommendation-notification[data-notification-bucket=\"CFR_MILESTONE_MESSAGE\"] .popup-notification-secondary-button:hover {\n  background-color: rgba(216, 216, 216, 0.4);\n}\n\n\n#contextual-feature-recommendation-notification[data-notification-bucket=\"CFR_MILESTONE_MESSAGE\"] .popup-notification-header-container {\n  color: white;\n  max-width: unset;\n}\n\n#contextual-feature-recommendation-notification[data-notification-bucket=\"CFR_SOCIAL_TRACKING_PROTECTION\"] {\n  width: 386px;\n}\n\n#contextual-feature-recommendation-notification .popup-notification-icon {\n  margin-inline-end: 4px;\n}\n\n#contextual-feature-recommendation-notification .cfr-doorhanger-large-icon {\n  width: 64px;\n  height: 64px;\n  margin-inline-end: 12px;\n}\n\n#contextual-feature-recommendation-notification .popup-notification-body-container {\n  width: 100%;\n  padding-bottom: 2px;\n}\n\n#contextual-feature-recommendation-notification popupnotificationcontent {\n  margin-top: 0;\n}\n\n#contextual-feature-recommendation-notification description {\n  margin-bottom: 0;\n}\n\n#cfr-notification-footer-text-and-addon-info {\n  display: block;\n  padding: 10px var(--arrowpanel-padding);\n}\n\n#contextual-feature-recommendation-notification[data-notification-category=\"addon_recommendation\"] #cfr-notification-feature-steps,\n#contextual-feature-recommendation-notification[data-notification-category=\"icon_and_message\"] .popup-notification-footer-container {\n  display: none;\n}\n\n/*\n * `icon_and_message` CFR doorhanger with: icon, title and subtitle.\n * No panel header is shown\n */\n#contextual-feature-recommendation-notification[data-notification-category=\"icon_and_message\"] #cfr-notification-header {\n  display: none;\n}\n\n#contextual-feature-recommendation-notification[data-notification-category=\"icon_and_message\"] .popup-notification-description {\n  font-weight: 600;\n  margin-bottom: 15px;\n}\n\n#contextual-feature-recommendation-notification[data-notification-category=\"icon_and_message\"] popupnotificationcontent {\n  display: block; /* This forces the subtitle content to wrap */\n}\n\n\n#cfr-notification-feature-steps {\n  display: flex;\n  flex-direction: column;\n  margin-top: 10px;\n}\n\n#cfr-notification-feature-steps li {\n  margin-inline-start: 10px;\n  position: relative;\n  display: list-item;\n}\n\n#cfr-notification-feature-steps li:not(:last-child) {\n  margin-bottom: 5px;\n}\n\n#cfr-notification-footer-text,\n#cfr-notification-footer-users,\n#cfr-notification-footer-learn-more-link {\n  margin: 0;\n}\n\n#cfr-notification-footer-addon-info {\n  align-items: center;\n  display: flex;\n  margin-block: 10px 6px;\n}\n\n#cfr-notification-footer-filled-stars,\n#cfr-notification-footer-empty-stars {\n  -moz-context-properties: fill, fill-opacity;\n  background-image: url(chrome://browser/skin/bookmark.svg);\n  fill: currentColor;\n  fill-opacity: 0.7;\n  height: 16px;\n}\n\n#cfr-notification-footer-filled-stars:-moz-locale-dir(rtl),\n#cfr-notification-footer-empty-stars {\n  background-position-x: right;\n}\n\n#cfr-notification-footer-filled-stars,\n#cfr-notification-footer-empty-stars:-moz-locale-dir(rtl) {\n  background-position-x: left;\n}\n\n#cfr-notification-footer-empty-stars[tooltiptext] {\n  margin-inline-end: 6px;\n  opacity: 0.3;\n}\n\n#cfr-notification-footer-users {\n  opacity: 0.7;\n}\n\n#cfr-notification-footer-spacer {\n  flex-grow: 1;\n}\n\n#content-mask {\n  background: rgba(0, 0, 0, 0.5);\n}\n\n/* nhnt11: Workaround to insert a linebreak after the DoH doorhanger's title.\n * The title uses the inline html|b that usually contains the hostname for\n * permission prompts to achieve bold formatting. This is always the 2nd child.\n */\n.popup-notification-description[popupid=\"doh-first-time\"] > html|b:first-of-type {\n  display: block;\n  margin-bottom: 4px; /* matches the margin-bottom on description elements */\n}\n\n/* Password Manager Doorhanger */\n\n.ac-dropmarker {\n  appearance: none;\n  justify-self: end;\n  margin-inline-end: 8px;\n  align-self: center;\n}\n\n.ac-dropmarker::part(icon) {\n  list-style-image: url(chrome://global/skin/icons/arrow-down-12.svg);\n  -moz-context-properties: fill;\n  fill: var(--input-color, -moz-DialogText);\n}\n\n.ac-has-end-icon {\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n/* ENABLE DEVTOOLS POPUP */\n@media (-moz-platform: macos), (-moz-platform: windows) {\n  #enable-devtools-popup {\n    font-size: 1.18em;\n  }\n}\n\n#sharing-tabs-warning-panel > hbox[type=\"window\"] > vbox > label > #sharing-warning-screen-panel-header,\n#sharing-tabs-warning-panel > hbox[type=\"screen\"] > vbox > label > #sharing-warning-window-panel-header {\n  display: none;\n}\n\n#sharing-tabs-warning-panel {\n  max-width: 400px;\n}\n\n#sharing-warning-proceed-to-tab {\n  appearance: none;\n  border-style: none;\n  margin: 0;\n  background-color: rgb(0,96,223);\n  color: rgb(255,255,255);\n  border-radius: 5px;\n  padding: 10px;\n  margin-top: 15px;\n  margin-bottom: 10px;\n}\n\n#sharing-warning-proceed-to-tab:hover {\n  background-color: rgb(0,62,170);\n}\n\n.webRTC-selectDevice-selector-container {\n  display: flex;\n  align-items: center;\n}\n\n.webRTC-selectDevice-selector-container > menulist {\n  flex: 1;\n  min-width: 0;\n}\n\npopupnotificationcontent {\n  margin-block-start: 8px;\n}\n\n/**\n * Our OS integration code toggles whether system colors should return light or\n * dark values based on the luminosity of the toolbar background. Because themes\n * can style panels to have a different background color than the toolbar, we\n * need specific overrides for system colors used in light or dark themes.\n */\n.popup-notification-body:-moz-lwtheme {\n  color-scheme: light;\n}\n\n:root[lwt-popup-brighttext] .popup-notification-body {\n  color-scheme: dark;\n}\n\n.popup-notification-body menulist {\n  margin: 0;\n}\n\n.popup-notification-checkbox {\n  margin-block: 12px 0;\n}\n\n.popup-notification-body-container {\n  padding-block-end: 0;\n}\n\n#webRTC-selectCamera-label,\n#webRTC-selectMicrophone-label {\n  display: none;\n}\n\n.webRTC-selectDevice-icon {\n  -moz-context-properties: fill;\n  fill: currentColor;\n  margin-inline-end: 8px;\n  /* Setting width explicitly so it's still visible if the device label is very long */\n  width: 16px;\n}\n\n#webRTC-selectCamera-icon {\n  list-style-image: url(\"chrome://browser/skin/notification-icons/camera.svg\");\n}\n\n#webRTC-selectMicrophone-icon {\n  list-style-image: url(\"chrome://browser/skin/notification-icons/microphone.svg\");\n}\n\n#webRTC-selectSpeaker-icon {\n  list-style-image: url(\"chrome://global/skin/media/audio.svg\");\n}\n\n.popup-notification-body :is(description, label:not(.learnMore), checkbox, input) {\n  margin-inline: 0;\n}\n\n.popup-notification-body input {\n  padding: 8px;\n  border-radius: 4px;\n  border: 0;\n  outline: 1px solid var(--input-border-color, ThreeDShadow);\n  outline-offset: -1px;\n  background-color: var(--input-bgcolor, Field);\n  color: var(--input-color, FieldText);\n}\n\n.popup-notification-body input.ac-has-end-icon {\n  --input-padding-from-arrow-side: calc(8px + 16px + 8px); /* spacing from the end + arrow element width + extra spacing) */\n  padding-inline-end: var(--input-padding-from-arrow-side);\n}\n\n/* Avoid overlapping the text on the arrow icon when switching input text direction */\n.popup-notification-body:-moz-locale-dir(rtl) input.ac-has-end-icon:dir(ltr) {\n  padding-left: var(--input-padding-from-arrow-side);\n  padding-right: 8px;\n}\n.popup-notification-body:-moz-locale-dir(ltr) input.ac-has-end-icon:dir(rtl) {\n  padding-right: var(--input-padding-from-arrow-side);\n  padding-left: 8px;\n}\n\n.popup-notification-body input:focus-visible {\n  outline: 2px solid var(--focus-outline-color);\n}\n\n/**\n * There's already a margin-block-start of 8px on popupnotificationcontent,\n * so the first label only needs 8px of margin-block-start to match the\n * spec.\n */\n.password-notification-label:first-of-type {\n  margin-block-start: 8px;\n}\n\n.password-notification-label:not(:first-of-type) {\n  margin-block-start: 16px;\n}\n\n#password-notification-visibilityToggle {\n  margin-block-start: 14px;\n}\n\n#password-notification-visibilityToggle > .checkbox-label-box > .checkbox-label {\n  opacity: 0.7;\n}\n\n.popup-notification-description > b {\n  font-weight: inherit;\n}\n\n.popup-notification-description {\n  font-weight: 600;\n  margin-top: 0;\n}\n\n#tab-notification-deck {\n  display: block;\n}\n\n.relay-integration-header {\n  display: flex;\n  align-items: center;\n  font-size: 2em;\n}\n\n.relay-integration-header > div {\n  width: 32px;\n  height: 32px;\n  background-image: url(\"chrome://browser/content/logos/relay.svg\");\n  background-repeat: no-repeat;\n}\n\n.relay-integration-header > span:first-of-type {\n  font-weight: bold;\n  margin-inline-start: 8px;\n}\n\n.relay-integration-header > span:last-of-type {\n  font-weight: normal;\n  white-space: pre;\n}\n\n.popup-notification-description[popupid=\"relay-integration-offer-notification\"] > html|div:first-of-type {\n  font-weight: normal;\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: auto auto auto auto;\n}\n\n#relay-integration-reuse-masks-notification > popupnotificationcontent > div {\n  font-weight: normal;\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: auto auto auto auto;\n}\n\n.reusable-relay-masks {\n  display: flex;\n  flex-direction: column;\n}\n\n.reusable-relay-masks > button {\n  padding: 4px;\n  margin: 4px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.reusable-relay-masks > button > span:first-child {\n  margin-inline-end: 20px;\n}\n\n.reusable-relay-masks > button > span:last-child {\n  opacity: 0.6;\n}\n\n#historySwipeAnimationPreviousArrow,\n#historySwipeAnimationNextArrow {\n  will-change: transform;\n}\n\n#historySwipeAnimationPreviousArrow:-moz-locale-dir(rtl),\n#historySwipeAnimationNextArrow:-moz-locale-dir(ltr) {\n  transform: scaleX(-1);\n}\n\n#historySwipeAnimationPreviousArrow > svg,\n#historySwipeAnimationNextArrow > svg {\n  margin: auto 0;\n}\n\n#historySwipeAnimationPreviousArrow,\n#historySwipeAnimationNextArrow {\n  --swipe-nav-icon-primary-color: #0060DF;\n  --swipe-nav-icon-accent-color: #FFFFFF;\n}\n\n@media (-moz-content-prefers-color-scheme: dark) {\n  #historySwipeAnimationPreviousArrow,\n  #historySwipeAnimationNextArrow {\n    --swipe-nav-icon-primary-color: #00DDFF;\n    --swipe-nav-icon-accent-color: #000000;\n  }\n}\n\n@media (prefers-contrast) {\n  #historySwipeAnimationPreviousArrow,\n  #historySwipeAnimationNextArrow {\n    --swipe-nav-icon-primary-color: SelectedItemText;\n    --swipe-nav-icon-accent-color: SelectedItem;\n  }\n}\n\n/*\n * Styles for the swipe navigation SVG icon.\n */\n.swipe-nav-icon path {\n  transition: fill 1s;\n}\n\n@media not (-moz-platform: macos) {\n  /*\n   * Styles for the swipe navigation SVG icon.\n   *\n   * `will-navigate` class name is added to the <svg> element when the user's\n   * swipe gesture reached to the point where history navigation will be\n   * triggered. It's used for triggering three animations, an arrow color change,\n   * a circle color change and a glowing effect outer the circle.\n   */\n  .swipe-nav-icon circle {\n    fill: var(--swipe-nav-icon-accent-color);\n    stroke: var(--swipe-nav-icon-primary-color);\n  }\n\n  .swipe-nav-icon circle:first-of-type {\n    fill: var(--swipe-nav-icon-primary-color);\n    transition: opacity 1s;\n    will-change: opacity; /* a workaround for bug 1804189 */\n    opacity: 0;\n  }\n\n  .swipe-nav-icon.will-navigate > circle:not(:first-of-type) {\n    fill: var(--swipe-nav-icon-primary-color);\n  }\n\n  .swipe-nav-icon circle:not(:first-of-type) {\n    transition: fill 1s;\n  }\n\n  .swipe-nav-icon.will-navigate > circle:first-of-type {\n    transition-delay: 0.2s;\n    opacity: 0.2;\n  }\n\n  .swipe-nav-icon.will-navigate > circle:not(:first-of-type) {\n    fill: var(--swipe-nav-icon-primary-color);\n  }\n\n  .swipe-nav-icon path {\n    fill: var(--swipe-nav-icon-primary-color);\n  }\n\n  .swipe-nav-icon.will-navigate > path {\n    fill: var(--swipe-nav-icon-accent-color);\n    stroke: var(--swipe-nav-icon-accent-color);\n  }\n}\n\n@media (-moz-platform: macos) {\n  /*\n   * Styles for the swipe navigation SVG icon.\n   *\n   * `will-navigate` class name is added to the <svg> element when the user's\n   * swipe gesture reached to the point where history navigation will be\n   * triggered.\n   */\n  .swipe-nav-icon-circle-outline,\n  .swipe-nav-icon-arrow {\n    fill: var(--swipe-nav-icon-primary-color);\n  }\n  .swipe-nav-icon-circle {\n    fill: var(--swipe-nav-icon-accent-color);\n  }\n  .swipe-nav-icon.will-navigate > .swipe-nav-icon-circle-outline,\n  .swipe-nav-icon.will-navigate > .swipe-nav-icon-arrow {\n    fill: var(--swipe-nav-icon-accent-color);\n  }\n  .swipe-nav-icon.will-navigate > .swipe-nav-icon-circle {\n    fill: var(--swipe-nav-icon-primary-color);\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ 8542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93379);
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_browser_shared_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92765);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_browser_shared_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_browser_shared_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
//# sourceMappingURL=8542.0e939651.iframe.bundle.js.map