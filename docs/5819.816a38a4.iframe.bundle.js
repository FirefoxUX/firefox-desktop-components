"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[5819],{

/***/ 71126:
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
___CSS_LOADER_EXPORT___.push([module.id, "/* - This Source Code Form is subject to the terms of the Mozilla Public\n   - License, v. 2.0. If a copy of the MPL was not distributed with this file,\n   - You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n@namespace html \"http://www.w3.org/1999/xhtml\";\n\n/* Global rules */\n* {\n  user-select: text;\n}\n\n#preferences-root {\n  text-rendering: optimizeLegibility;\n  -moz-box-layout: flex;\n}\n\n@media not print {\n  #preferences-root,\n  #preferences-body {\n    height: 100%;\n    overflow: hidden;\n  }\n}\n\n#preferences-root,\n#preferences-body {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\n\n#preferences-body {\n  vertical-align: top; /* See bug 1606130 */\n  display: -moz-box;\n  -moz-box-orient: vertical;\n\n  --main-pane-width: 664px;\n}\n\n/*\n  The stack has some very tall content but it shouldn't be taller than the\n  viewport (and we know the tall content will still be accessible via scrollbars\n  regardless if the stack has a shorter height). So we use min-height: 0 to allow\n  the stack to be smaller than its content height so it can fit the viewport size.\n*/\n#preferences-stack {\n  min-height: 0;\n}\n\n.main-content {\n  padding-top: 0;\n  /* the 32px min-height, plus 20+30px margin below, plus some leeway: */\n  scroll-padding-top: 90px;\n  contain: inline-size;\n}\n\n.pane-container {\n  /* A workaround to keep the container always float on the `top: 0` (Bug 1377009) */\n  display: block;\n  width: min(100%, var(--main-pane-width));\n  min-width: min-content;\n}\n\n#mainPrefPane {\n  width: 100%;\n  padding: 0;\n}\n\ngroupbox[data-category] {\n  margin: 0 0 32px;\n}\n\nhtml|h1 {\n  margin: 0 0 8px;\n  font-size: 1.46em;\n  font-weight: 300;\n  line-height: 1.3em;\n}\n\nhtml|h2 {\n  margin: 16px 0 4px;\n  font-size: 1.14em;\n  line-height: normal;\n}\n\ndescription.indent,\n.indent:not(#browserPrivateEngineSelection) > description {\n  color: var(--in-content-deemphasized-text);\n}\n\nbutton,\ntreecol,\nhtml|option {\n  /* override the * rule */\n  user-select: none;\n}\n\n/* Buttons get a default min-width in XUL. When they also have flex, they will\n * be large enough anyway, and we don't want them to become smaller than their inner\n * text which would then overflow the button. Set min-width back to auto for that:\n */\nbutton[flex] {\n  min-width: auto;\n}\n\ndescription,\nlabel {\n  line-height: 1.8em;\n  margin: 0;\n}\n\n.tip-caption {\n  font-size: .9em;\n}\n\nmenulist::part(label),\nmenuitem > label,\nbutton > hbox > label {\n  line-height: unset;\n}\n\n.indent {\n  /* This should match the checkboxes/radiobuttons' width and inline margin,\n     such that when we have a toggle with a label followed by another element\n     with this class, the other element's text aligns with the toggle label. */\n  margin-inline-start: 22px !important;\n}\n\ncheckbox {\n  margin-inline: 0;\n}\n\n.tail-with-learn-more {\n  margin-inline: 0 10px;\n}\n\n/* Add a bit of space to the end of descriptions to\n * leave margin with e.g. additional buttons on the side. */\n.description-with-side-element {\n  margin-inline-end: 10px !important;\n}\n\n.learnMore {\n  margin-inline-start: 0;\n  font-weight: normal;\n  white-space: nowrap;\n}\n\n.accessory-button {\n  min-width: 150px;\n  margin: 4px 0;\n}\n\n.spotlight {\n  background-color: color-mix(in srgb, var(--in-content-accent-color) 15%, transparent);\n  outline: var(--in-content-accent-color) 1px dotted;\n  animation: fade-out 0.5s ease-out 2s forwards;\n  /* Show the border to spotlight the components in high-contrast mode. */\n  border: 1px solid transparent;\n  border-radius: 2px;\n}\n\n@keyframes fade-out {\n  100% {\n    background-color: transparent;\n    outline-color: transparent;\n  }\n}\n\n[data-subcategory] {\n  margin-inline: -4px;\n  padding-inline: 4px;\n}\n\n.ac-site-icon {\n  display: -moz-box;\n}\n\n/* Subcategory title */\n\n/**\n * The first subcategory title for each category should not have margin-top.\n */\n\n.subcategory:not([hidden]) ~ .subcategory {\n  margin-top: 16px;\n  padding-top: 16px;\n  border-top: 1px solid var(--in-content-border-color);\n}\n\n/* Category List */\n\n#categories {\n  overflow: visible !important; /* Cancel scrollbar and do not clip overflow content when window size goes very small */\n  padding: 1px; /* Adding padding around richlistitem in order to make entire keyboard focusing outline visible */\n}\n\n#category-general > .category-icon {\n  list-style-image: url(\"chrome://browser/skin/preferences/category-general.svg\");\n}\n\n#category-home > .category-icon {\n  list-style-image: url(\"chrome://browser/skin/home.svg\");\n}\n\n#category-search > .category-icon {\n  list-style-image: url(\"chrome://browser/skin/preferences/category-search.svg\");\n}\n\n#category-privacy > .category-icon {\n  list-style-image: url(\"chrome://browser/skin/preferences/category-privacy-security.svg\");\n}\n\n#category-sync > .category-icon {\n  list-style-image: url(\"chrome://browser/skin/preferences/category-sync.svg\");\n}\n\n#category-experimental > .category-icon {\n  list-style-image: url(\"chrome://global/skin/icons/experiments.svg\");\n}\n\n#category-more-from-mozilla > .category-icon {\n  list-style-image: url(\"chrome://browser/skin/preferences/mozilla-logo.svg\");\n}\n\n/* All panes */\n\n.info-icon,\n.androidIcon,\n.iOSIcon {\n  -moz-context-properties: fill;\n  fill: currentColor;\n}\n\n/* General Pane */\n\n.is-default > #isNotDefaultPane,\n:not(.is-default) > #isDefaultPane {\n  visibility: hidden;\n}\n\n#isDefaultLabel,\n#isNotDefaultLabel {\n  font-weight: 600;\n}\n\n#browserContainersExtensionContent {\n  padding-block: 5px;\n}\n\n.extension-controlled {\n  margin-block: 18px;\n}\n\n.extension-controlled-icon {\n  height: 20px;\n  margin: 2px 0 6px;\n  vertical-align: middle;\n  width: 20px;\n  -moz-context-properties: fill;\n  fill: currentColor;\n}\n\n.extension-controlled-disabled {\n  -moz-context-properties: fill;\n  color: GrayText;\n  fill: currentColor;\n}\n\n.extension-controlled-disabled > .extension-controlled-button {\n  display: none;\n}\n\n.extension-controlled-icon.close-icon {\n  height: 30px;\n  width: 30px;\n  margin-inline-start: 5px;\n}\n\n#getStarted {\n  font-size: 90%;\n}\n\n#colors {\n  margin-inline-start: 5px;\n}\n\n#FontsDialog menulist:empty {\n  /* When there's no menupopup, while the font builder is running,\n   * the height of the menulist would otherwise shrink. This throws\n   * off the height determination SubDialog.sys.mjs does, which then\n   * leads to content being cut off. Fix by enforcing a minimum height\n   * when there's no content: */\n  min-height: max(32px, calc(1.4em + 16px));\n}\n\n#useDocumentColors {\n  margin: 4px 0;\n}\n\n#translationAttributionImage {\n  width: 70px;\n  cursor: pointer;\n}\n\n#activeLanguages > richlistitem {\n  padding: 0.3em;\n}\n\n#saveWhere {\n  -moz-box-align: center;\n}\n\n#saveTo {\n  margin-inline-end: 1em;\n}\n\n#downloadFolder {\n  -moz-box-flex: 1;\n  margin-block: 4px;\n  margin-inline-start: 0;\n  padding-inline-start: 30px;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  background-position: center left 8px;\n}\n\n#downloadFolder:-moz-locale-dir(rtl) {\n  background-position-x: right 8px;\n}\n\n#updateBox {\n  margin-block: 4px 32px;\n}\n\n/* Work around bug 560067 - animated images in visibility: hidden\n * still eat CPU. */\n#updateDeck > *:not(.deck-selected) > .update-throbber {\n  display: none;\n}\n\n#updateDeck > hbox > button {\n  margin-block: 0;\n  margin-inline-end: 0;\n}\n\n#updateDeck > hbox > label {\n  -moz-box-flex: 1;\n}\n\n.manualLink {\n  margin-inline-start: 6px !important;\n}\n\n#updateRadioGroup > radio {\n  min-height: 30px;\n  margin: 2px 0;\n}\n\n#filter {\n  margin: 4px 0 8px;\n}\n\n#handlersView {\n  height: 25em;\n  margin-inline-end: 0;\n}\n\n#handlersView > richlistitem {\n  min-height: 30px;\n}\n\n#handlersViewHeader > treecol,\n#handlersView > richlistitem > hbox {\n  width: 50%;\n}\n\n#handlersView .actionsMenu {\n  margin: 0;\n  min-height: 0;\n  padding: 0;\n  border: none;\n  padding-inline-end: 8px;\n}\n\n#handlersView .actionsMenu::part(label) {\n  margin: 0;\n}\n\n.certManagerRichlistBox > richlistitem {\n  min-height: 30px !important;\n}\n\n.typeIcon,\n.actionIcon,\n.actionsMenu::part(icon) {\n  height: 16px;\n  width: 16px;\n}\n\n.typeIcon {\n  margin-inline: 10px 9px !important;\n}\n\n#handlersView .actionsMenu::part(icon),\n.actionIcon {\n  margin-inline: 11px 8px !important;\n}\n\n.actionsMenu > menupopup > menuitem {\n  padding-inline-start: 10px !important;\n}\n\n.actionsMenu > menupopup > menuitem > .menu-iconic-left {\n  margin-inline-end: 8px !important;\n}\n\n/* Increase the specifity to override common.inc.css */\nrichlistitem[selected] .actionsMenu:focus-visible {\n  outline-offset: -3px;\n}\n\n/* Home Pane */\n\n#homepageGroup menulist,\n#homepageGroup html|input {\n  margin: 5px 0;\n}\n\n#homepageGroup html|input {\n  text-align: match-parent;\n}\n\n#homepageGroup:-moz-locale-dir(rtl) html|input {\n  unicode-bidi: plaintext;\n}\n\n#homepageAndNewWindowsOption {\n  margin-top: 20px;\n}\n\n#homepageGroup:-moz-locale-dir(rtl) panel[type=\"autocomplete-richlistbox\"] {\n  direction: rtl;\n}\n\n.homepage-button:first-of-type {\n  margin-inline-start: 0;\n}\n\n.homepage-button:last-of-type {\n  margin-inline-end: 0;\n}\n\n#homeContentsGroup .checkbox-icon[src] {\n  -moz-context-properties: fill;\n  fill: currentColor;\n  margin-inline: 2px 8px;\n  width: 16px;\n}\n\n#homeContentsGroup [data-subcategory] {\n  margin-top: 14px;\n}\n\n#homeContentsGroup [data-subcategory] .section-checkbox {\n  font-weight: 600;\n}\n\n#homeContentsGroup [data-subcategory] > vbox menulist {\n  margin-block: 0;\n}\n\n.addon-with-favicon .menu-iconic-icon {\n  margin-inline-start: 0;\n}\n\n/* Search Pane */\n\n#engineList {\n  margin: 2px 0 5px;\n}\n\n#engineList > treechildren::-moz-tree-image(engineShown, checked),\n#blocklistsTree > treechildren::-moz-tree-image(selectionCol, checked) {\n  list-style-image: url(\"chrome://global/skin/icons/check.svg\");\n  -moz-context-properties: fill, stroke;\n  fill: var(--in-content-accent-color);\n}\n\n#engineList > treechildren::-moz-tree-image(engineShown, checked, selected),\n#blocklistsTree > treechildren::-moz-tree-image(selectionCol, checked, selected) {\n  fill: var(--in-content-item-selected-text);\n  stroke: var(--in-content-item-selected);\n}\n\n@media (prefers-contrast) {\n  #engineList > treechildren::-moz-tree-image(hover),\n  #blocklistsTree > treechildren::-moz-tree-image(hover) {\n    fill: var(--in-content-item-hover-text);\n    stroke: var(--in-content-item-hover);\n  }\n}\n\n#engineList > treechildren::-moz-tree-row,\n#blocklistsTree > treechildren::-moz-tree-row {\n  min-height: 36px;\n}\n\n#selectionCol {\n  min-width: 26px;\n}\n\n#addEnginesBox {\n  margin: 4px 0 0;\n}\n\n/* Privacy Pane */\n\n#allowSmartSize {\n  margin-block: 0 4px;\n}\n\n#doNotTrackLearnMoreBox {\n  margin-top: 32px;\n}\n\n#historyPane {\n  margin-top: 4px;\n}\n\n#historyButtons {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n#blockCookies,\n#keepRow {\n  margin-top: 1.5em;\n}\n\n/* Collapse the non-active vboxes in decks to use only the height the\n   active vbox needs */\n#historyPane:not([selectedIndex=\"1\"]) > #historyDontRememberPane,\n#historyPane:not([selectedIndex=\"2\"]) > #historyCustomPane,\n#weavePrefsDeck:not([selectedIndex=\"1\"]) > #hasFxaAccount,\n#fxaLoginStatus:not([selectedIndex=\"1\"]) > #fxaLoginUnverified,\n#fxaLoginStatus:not([selectedIndex=\"2\"]) > #fxaLoginRejected,\n#syncStatus:not([selectedIndex=\"1\"]) > #syncConfigured {\n  visibility: collapse;\n}\n\n#tabsElement {\n  margin-inline-end: 4px; /* add the 4px end-margin of other elements */\n}\n\n.text-link {\n  margin-bottom: 0;\n}\n\n.text-link[disabled=\"true\"] {\n  pointer-events: none;\n}\n\n#showUpdateHistory {\n  margin-inline-start: 0;\n}\n\n@media (-moz-platform: windows-win7),\n       (-moz-platform: windows-win8) {\n  #windows-sso,\n  #windows-sso-caption {\n    display: none;\n  }\n}\n\n/**\n * Dialog\n */\n\n.dialogOverlay {\n  visibility: hidden;\n}\n\n.dialogOverlay[topmost=\"true\"] {\n  background-color: rgba(0,0,0,0.5);\n}\n\n.dialogBox {\n  background-color: var(--in-content-page-background);\n  background-clip: content-box;\n  color: var(--in-content-page-color);\n  /* `transparent` will use the dialogText color in high-contrast themes and\n     when page colors are disabled */\n  border: 1px solid transparent;\n  border-radius: 8px;\n  box-shadow: 0 2px 6px 0 rgba(0,0,0,0.3);\n  display: -moz-box;\n  margin: 0;\n  padding: 0;\n  overflow-x: auto;\n}\n\n@media (prefers-color-scheme: dark) {\n  @media not (prefers-contrast) {\n    .dialogBox {\n      --in-content-page-background: #42414d;\n    }\n  }\n}\n\n.dialogBox[resizable=\"true\"] {\n  resize: both;\n  overflow: hidden;\n  min-height: 20em;\n  min-width: 66ch;\n}\n\n.dialogTitleBar {\n  padding: .4em .2em;\n  border-bottom: 1px solid var(--in-content-border-color);\n}\n\n.dialogTitle {\n  font-weight: 600;\n  text-align: center;\n  user-select: none;\n}\n\n.fxaPairDeviceIcon {\n  background-image: url(\"chrome://browser/content/logos/fxa-logo.svg\");\n  background-position: center center;\n  background-repeat: no-repeat;\n  position: relative;\n  height: 80px;\n  padding-top: 42px;\n  margin-top: -40px;\n}\n\n.fxaPairDeviceIcon .close-icon {\n  margin-top: 10px;\n}\n\n.close-icon {\n  border: none;\n  background-color: transparent; /* override common.css, but keep hover/active states */\n  min-width: 0;\n  min-height: auto;\n  width: 20px;\n  height: 20px;\n  padding: 0;\n  margin-inline: 0 8px;\n}\n\n.dialogFrame {\n  margin: 10px;\n  -moz-box-flex: 1;\n  /* Default dialog dimensions */\n  min-width: 66ch;\n}\n\n/**\n * End Dialog\n */\n\n/**\n * Font group and font dialog menulist fixes\n */\n\n#font-chooser-group {\n  display: grid;\n  grid-template-columns: max-content 1fr max-content max-content;\n}\n\n#defaultFont {\n  width: 25ch;\n}\n\n#defaultFontType,\n#serif,\n#sans-serif,\n#monospace {\n  width: 0; /* Might be able to be removed */\n  min-width: 30ch;\n}\n\n/**\n * Sync\n */\n\n.fxaProfileImage {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  border: 1px solid transparent;\n  list-style-image: url(chrome://browser/skin/fxa/avatar-color.svg);\n  margin-inline-end: 24px;\n  -moz-user-focus: normal;\n}\n\n.fxaProfileImage.actionable {\n  cursor: pointer;\n}\n\n.fxaProfileImage.actionable:hover {\n  border-color: #0095DD;\n}\n\n.fxaProfileImage.actionable:hover:active {\n  border-color: #ff9500;\n}\n\n#useFirefoxSync {\n  font-size: 90%;\n  margin-inline-end: 8px !important;\n}\n\n#fxaNoLoginStatus {\n  margin-block: 46px 64px;\n}\n\n#fxaSyncComputerName {\n  -moz-box-flex: 1;\n  margin-block: 4px;\n  margin-inline-start: 0;\n}\n\n#fxaChangeDeviceName {\n  margin-block: 4px;\n  margin-inline-end: 0;\n}\n\n#noFxaAccount {\n  line-height: 1.2em;\n}\n\n#noFxaAccount > label:first-child {\n  margin-bottom: 0.6em;\n}\n\n#noFxaCaption {\n  line-height: 30px;\n  margin-block: 0 4px;\n}\n\n#noFxaSignIn {\n  margin-inline-start: 8px;\n}\n\n.fxaSyncIllustration {\n  list-style-image: url(chrome://browser/skin/fxa/sync-devices.svg);\n  width: 312px;\n  height: 136px;\n}\n\n#noFxaDescription {\n  padding-inline-end: 52px;\n}\n\n.separator {\n  border-bottom: 1px solid var(--in-content-box-border-color);\n}\n\n#fxaGroup {\n  margin-bottom: 32px;\n}\n\n.openLink {\n  line-height: 30px;\n  cursor: pointer;\n}\n\n.openLink:visited {\n  color: var(--in-content-link-color);\n}\n\n#fxaDisplayName {\n  margin-inline-end: 10px !important;\n}\n\n.fxaLoginRejectedWarning {\n  list-style-image: url(chrome://global/skin/icons/warning.svg);\n  -moz-context-properties: fill;\n  fill: #FFBF00;\n  margin-inline: 4px 8px;\n}\n\n#syncStatus {\n  margin-top: 32px;\n}\n\n.sync-group {\n  margin-block: 16px;\n  border: 1px solid var(--in-content-border-color);\n}\n\n.sync-configured {\n  display: block;\n}\n\n.sync-engines-list > div,\n.sync-engines-list + hbox {\n  margin-top: 0;\n  padding-top: 16px;\n  max-width: 300px;\n  height: auto;\n}\n\ndialog > .sync-engines-list > div,\ndialog > .sync-engines-list + hbox {\n  padding-top: 0;\n}\n\n.sync-engines-list checkbox .checkbox-icon,\n.sync-engine-image {\n  margin-inline: 2px 8px;\n  width: 16px;\n  height: 16px;\n  -moz-context-properties: fill;\n  fill: currentColor;\n  align-self: center;\n}\n\n.sync-engines-list checkbox {\n  min-width: max-content;\n  max-width: calc(50vw - 10px);\n}\n\n.sync-engines-list .checkbox-label-box {\n  -moz-box-align: center;\n}\n\n.sync-engines-list {\n  column-count: 2;\n  column-fill: balance;\n}\n\n.sync-engines-list > div:not([hidden]) {\n  display: flex;\n}\n\n.sync-engine-bookmarks .checkbox-icon,\n.sync-engine-bookmarks.sync-engine-image {\n  list-style-image: url(\"chrome://browser/skin/bookmark.svg\");\n}\n\n.sync-engine-history .checkbox-icon,\n.sync-engine-history.sync-engine-image {\n  list-style-image: url(\"chrome://browser/skin/history.svg\");\n}\n\n.sync-engine-tabs .checkbox-icon,\n.sync-engine-tabs.sync-engine-image {\n  list-style-image: url(\"chrome://browser/skin/synced-tabs.svg\");\n}\n\n.sync-engine-passwords .checkbox-icon,\n.sync-engine-passwords.sync-engine-image {\n  list-style-image: url(\"chrome://browser/skin/login.svg\");\n}\n\n.sync-engine-addons .checkbox-icon,\n.sync-engine-addons.sync-engine-image {\n  list-style-image: url(\"chrome://mozapps/skin/extensions/extension.svg\");\n}\n\n.sync-engine-prefs .checkbox-icon,\n.sync-engine-prefs.sync-engine-image {\n  list-style-image: url(\"chrome://global/skin/icons/settings.svg\");\n}\n\n.sync-engine-addresses .checkbox-icon,\n.sync-engine-addresses.sync-engine-image {\n  list-style-image: url(\"chrome://formautofill/content/formfill-anchor.svg\");\n}\n\n.sync-engine-creditcards .checkbox-icon,\n.sync-engine-creditcards.sync-engine-image {\n  list-style-image: url(\"chrome://formautofill/content/icon-credit-card-generic.svg\");\n}\n\n.fxaMobilePromo {\n  margin-top: 2px !important;\n}\n\n.androidIcon,\n.iOSIcon {\n  margin-inline: 2px 4px;\n  width: 20px;\n  height: 20px;\n  vertical-align: text-bottom;\n}\n\n#updateDeck > hbox > label {\n  margin-inline-end: 5px ! important;\n}\n\n.update-throbber {\n  width: 16px;\n  min-height: 16px;\n  margin-block: 7px;\n  margin-inline-end: 8px;\n}\n\nhtml|img.update-throbber {\n  vertical-align: middle;\n}\n\nimage.update-throbber {\n  list-style-image: url(\"chrome://global/skin/icons/loading.png\");\n}\n\n@media (min-resolution: 1.1dppx) {\n  .update-throbber {\n    list-style-image: url(\"chrome://global/skin/icons/loading@2x.png\");\n  }\n}\n\n.navigation {\n  overflow-x: hidden;\n  overflow-y: auto;\n  position: relative;\n}\n\n@media (prefers-reduced-motion) {\n  /* Setting border-inline-end on .navigation makes it a focusable element */\n  .navigation::after {\n    content: \"\";\n    width: 1px;\n    height: 100%;\n    background-color: var(--in-content-border-color);\n    top: 0;\n    inset-inline-end: 0;\n    position: absolute;\n  }\n}\n\n.face-sad {\n  list-style-image: url(\"chrome://browser/skin/preferences/face-sad.svg\");\n  width: 20px;\n  height: 20px;\n  margin-block: 5px;\n  margin-inline-end: 8px;\n}\n\n.face-smile {\n  list-style-image: url(\"chrome://browser/skin/preferences/face-smile.svg\");\n  width: 20px;\n  height: 20px;\n  margin-block: 5px;\n  margin-inline-end: 8px;\n}\n\n#policies-container,\n#searchInput {\n  min-height: 32px;\n  margin: 20px 0 30px;\n}\n\n#policies-container {\n  margin-inline-end: 16px;\n  /* Make sure the container is at least the same height as the searchbox.\n     This is needed in addition to the min-height above to make the info icon\n     the same height as the first line in the policies label.\n     Searchbox's height - line-height - border top and bottom */\n  padding-block: max(0px, calc((32px - 1.8em - 2px) / 2));\n}\n\n.info-box-container {\n  background-color: var(--in-content-box-info-background);\n  padding: 9px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n\n.info-box-container.smaller-font-size {\n  font-size: 85%;\n}\n\n.info-icon-container {\n  display: flex;\n}\n\n.info-icon {\n  list-style-image: url(\"chrome://global/skin/icons/info.svg\");\n  width: 16px;\n  height: 16px;\n  margin-inline-end: 6px;\n  align-self: start;\n  margin-top: 0.4em;\n  flex-shrink: 0;\n}\n\n.info-box-container.smaller-font-size .info-icon {\n  margin-top: 0.3em;\n}\n\n.sticky-container {\n  position: sticky;\n  background-color: var(--in-content-page-background);\n  top: 0;\n  z-index: 1;\n  /* The sticky-container should have the capability to cover all spotlight area. */\n  width: calc(100% + 8px);\n  margin-inline: -4px;\n  padding-inline: 4px;\n}\n\n.sticky-inner-container {\n  -moz-box-flex: 1;\n  max-width: var(--main-pane-width);\n}\n\n.search-tooltip {\n  max-width: 10em;\n  font-size: 1rem;\n  position: absolute;\n  padding: 0 .7em;\n  background-color: #ffe900;\n  color: #000;\n  border: 1px solid #d7b600;\n  margin-top: -18px;\n  opacity: .85;\n}\n\n.search-tooltip:hover {\n  opacity: .1;\n}\n\n.search-tooltip::before {\n  position: absolute;\n  content: \"\";\n  border: 7px solid transparent;\n  border-top-color: #d7b600;\n  top: 100%;\n  inset-inline-start: calc(50% - 7px);\n}\n\n.search-tooltip::after {\n  position: absolute;\n  content: \"\";\n  border: 6px solid transparent;\n  border-top-color: #ffe900;\n  top: 100%;\n  inset-inline-start: calc(50% - 6px);\n}\n\n.search-tooltip-parent {\n  position: relative;\n}\n\n.search-tooltip > span {\n  display: block;\n  user-select: none;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.visually-hidden {\n  visibility: collapse;\n}\n\nmenulist[indicator=true] > menupopup menuitem:not([image]) > .menu-iconic-left {\n  display: -moz-box;\n  min-width: auto; /* Override the min-width defined in menu.css */\n  margin-inline-end: 6px;\n}\n\nmenulist[indicator=true] > menupopup menuitem:not([image]) > .menu-iconic-left > .menu-iconic-icon {\n  width: 8px;\n  height: 10px;\n  margin: 0;\n}\n\nmenulist[indicator=true] > menupopup menuitem[indicator=true]:not([image]) > .menu-iconic-left > .menu-iconic-icon {\n  list-style-image: url(chrome://browser/skin/preferences/search-arrow-indicator.svg);\n}\n\nmenulist[indicator=true] > menupopup menuitem[indicator=true]:not([image]) > .menu-iconic-left > .menu-iconic-icon:-moz-locale-dir(rtl) {\n  transform: scaleX(-1);\n}\n\n.menu-iconic-highlightable-text {\n  margin: 0; /* Align with the margin of xul:label.menu-iconic-text */\n}\n\n#no-results-message > label {\n  margin: 2px 0;\n  line-height: 30px;\n}\n\n/* Proxy port input */\n\n.proxy-port-input {\n  width: calc(5ch + 18px); /* 5 chars + (8px padding + 1px border) on both sides */\n  margin-inline-start: 4px;\n}\n\n#primaryBrowserLocale {\n  margin-inline-start: 0;\n  min-width: 20em;\n}\n\n#availableLanguages,\n#availableLocales {\n  margin-inline-start: 0;\n}\n\n#availableLanguages,\n#availableLocales,\n#activeLanguages,\n#selectedLocales {\n  margin-inline-end: 4px;\n}\n\n#selectedLocales > richlistitem {\n  padding-inline-start: 13px;\n}\n\n#warning-message > .message-bar-description {\n  width: 32em;\n}\n\n#warning-message {\n  margin-top: 8px;\n}\n\n.action-button {\n  margin-inline-end: 0;\n}\n\n/* Menulist styles */\n.label-item {\n  font-size: 0.8em;\n}\n\n.updateSettingCrossUserWarningContainer {\n  margin-block-end: 17px;\n}\n\n#updateSettingCrossUserWarningDesc {\n  padding-inline-start: calc(16px + 6px); /* radio-check's width + margin-inline-end */\n  margin-block-start: 20px;\n}\n\nrichlistitem .text-link {\n  color: inherit;\n  text-decoration: underline;\n}\n\nrichlistitem .text-link:hover {\n  color: inherit;\n}\n\n#proxy-grid,\n#dnsOverHttps-grid {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  align-items: center;\n}\n\n.proxy-grid-row:not([hidden]),\n.dnsOverHttps-grid-row:not([hidden]) {\n  display: contents;\n}\n\n#proxy-grid > .thin {\n  grid-column: span 2;\n  height: 20px;\n}\n\n#pane-experimental-search-results-header,\n#pane-experimental-subtitle {\n  background-image: url(\"chrome://global/skin/icons/warning.svg\");\n  background-repeat: no-repeat;\n  background-position: 0 center;\n  background-size: contain;\n  min-height: 30px;\n  padding-inline-start: 38px;\n  display: flex;\n  align-items: center;\n  -moz-context-properties: fill;\n  fill: #FFBF00;\n}\n\n#pane-experimental-search-results-header:-moz-locale-dir(rtl),\n#pane-experimental-subtitle:-moz-locale-dir(rtl) {\n  background-position-x: right;\n}\n\n#pane-experimental-featureGates {\n  margin-top: 16px;\n}\n\n.featureGate {\n  margin-bottom: 16px;\n}\n\n.featureGateCheckbox {\n  font-size: 1.14em;\n  -moz-box-align: center;\n}\n\n.featureGateCheckbox > .checkbox-label-box {\n  -moz-box-align: center;\n}\n\n.featureGateDescription {\n  margin-inline-start: 28px;\n}\n\n.checkbox-row {\n  display: flex;\n  align-items: baseline;\n}\n\n.checkbox-row input[type=checkbox] {\n  translate: 0 2px\n}\n\n.checkbox-row a {\n  margin-inline-start: 6px;\n}\n\n#moreFromMozillaCategory-header .title {\n  margin-block-end: 4px;\n}\n\n#moreFromMozillaCategory-header .subtitle {\n  color: var(--in-content-text-color);\n  margin-block-end: 24px;\n  line-height: 1.4em;\n}\n\n#moreFromMozillaCategory:not([hidden]) {\n  display: flex;\n  flex-direction: column;\n}\n\n#moreFromMozillaCategory .mozilla-product-item {\n  margin-top: 30px;\n}\n\n#moreFromMozillaCategory .product-title {\n  margin: 4px 0 3px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  padding-inline-start: 30px;\n  -moz-context-properties: fill;\n  fill: currentColor;\n}\n\n#moreFromMozillaCategory .product-title:-moz-locale-dir(rtl) {\n  background-position-x: right;\n}\n\n#moreFromMozillaCategory .description {\n  display: inline flow-root;\n  color: var(--in-content-text-color);\n  padding-inline-start: 30px;\n  margin: 2px 0;\n  line-height: 1.4em;\n}\n\n#moreFromMozillaCategory .small-button {\n  margin-block: 14px 2px;\n  margin-inline: 30px 0;\n}\n\n#moreFromMozillaCategory .text-link {\n  line-height: 1.4em;\n\n  margin-block: 2px 0;\n  margin-inline: 6px 0;\n}\n\n#moreFromMozillaCategory .simple .text-link {\n  display: inline flow-root;\n  margin-inline-start: 4px;\n}\n\n#moreFromMozillaCategory .text-link.hidden {\n  display: none;\n}\n\n#firefox-mobile {\n  background-image: url(\"chrome://devtools/skin/images/browsers/mobile.svg\");\n  padding-top: 5px;\n}\n\n#mozilla-vpn {\n  background-image: url(\"chrome://browser/skin/preferences/vpn-logo.svg\");\n}\n\n#mozilla-rally {\n  background-image: url(\"chrome://browser/skin/preferences/rally-logo.svg\");\n}\n\n/*\n * The :not clause is required because hiding an element with `display: flex` only\n * partially hides it.\n */\n.qr-code-box:not([hidden=\"true\"]) {\n  max-width: 320px; /* a unit better than px for this & next? */\n  min-height: 204px;\n  margin-block: 10px 0;\n  margin-inline-start: 30px;\n  background-color: var(--in-content-box-info-background);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  border-radius: 4px;\n}\n\n@media (prefers-contrast) {\n  .qr-code-box:not([hidden=\"true\"]) {\n    border: 1px solid currentColor;\n  }\n}\n\n.qr-code-box-image {\n  border-radius: 4px;\n  padding: 2px;\n  width: 80px;\n  flex: 0 0 auto;\n  -moz-context-properties: fill;\n  fill: currentColor;\n}\n\n.qr-code-title-label {\n  flex: 1 1 auto;\n}\n\n.qr-code-box-title {\n  font-size: .87em;\n  font-weight: normal;\n  line-height: 1.42em;\n\n  text-align: center;\n\n  margin-block: 20px 0;\n  margin-inline: 40px;\n}\n\n.simple .qr-code-box-title {\n  margin-block: 0;\n  width: 296px;\n}\n\n.simple .qr-code-box {\n  padding-inline: 24px;\n  padding-block: 20px\n}\n\n.simple .qr-code-box-image {\n  padding: 10px;\n}\n\n#moreFromMozillaCategory .qr-code-link {\n  font-size: .87em;\n  line-height: 1.42em;\n  margin-block-start: 0;\n  margin-inline: 0; /* make sure we're correctly centered by overriding button rule */\n}\n\n@media (prefers-color-scheme: dark) {\n  .qr-code-box:not([hidden=\"true\"]) {\n    background-color: rgba(91,91,102,0.45);\n  }\n\n  .qr-code-box-title {\n    color: #fbfbfe;\n  }\n}\n\n#websiteAppearanceGroup {\n  display: block;\n}\n\n#web-appearance-chooser {\n  display: flex;\n  justify-content: space-between;\n  gap: 16px;\n}\n\n#web-appearance-chooser,\n#web-appearance-override-warning {\n  margin: 12px 0;\n}\n\n#web-appearance-override-warning:not([hidden]) {\n  display: flex;\n}\n\n.web-appearance-choice {\n  width: 100%;\n  border: 1px solid var(--in-content-box-border-color);\n  background-color: var(--in-content-box-background-color);\n  color: var(--in-content-text-color);\n  border-radius: 4px;\n  overflow: clip;\n}\n\n.web-appearance-choice-image-container {\n  background-color: var(--in-content-button-background);\n  padding: 12px 0;\n}\n\n.web-appearance-choice:hover > .web-appearance-choice-image-container {\n  background-color: var(--in-content-button-background-hover);\n}\n\n.web-appearance-choice:hover:active > .web-appearance-choice-image-container {\n  background-color: var(--in-content-button-background-active);\n}\n\n.web-appearance-choice img {\n  display: block;\n  margin: 0 auto;\n\n  border: 1px solid var(--in-content-box-border-color);\n  border-radius: 4px;\n  box-shadow: 0 0 2px 0 rgba(0,0,0,0.2);\n\n  transform: scaleX(1);\n  content: url(\"chrome://browser/content/preferences/web-appearance-light.svg\")\n}\n\n.web-appearance-choice.dark img {\n  content: url(\"chrome://browser/content/preferences/web-appearance-dark.svg\")\n}\n\n.web-appearance-choice img:dir(rtl) {\n  transform: scaleX(-1);\n}\n\n.web-appearance-choice-footer {\n  border-top: 1px solid var(--in-content-box-border-color);\n  padding: 4px 8px;\n  overflow-wrap: anywhere;\n  display: flex;\n}\n\n.web-appearance-choice input {\n  margin-top: 0.4em;\n}\n\n/* Platform-specific tweaks & overrides */\n\n@media (-moz-platform: macos) {\n  tabpanels {\n    padding: 20px 7px 7px;\n  }\n\n  #browserUseCurrent,\n  #browserUseBookmark,\n  #browserUseBlank {\n    margin-top: 10px;\n  }\n\n  #privacyPrefs {\n    padding: 0 4px;\n  }\n\n  #privacyPrefs > tabpanels {\n    padding: 18px 10px 10px;\n  }\n\n  #OCSPDialogPane {\n    font: message-box !important;\n  }\n\n  /**\n   * Update Preferences\n   */\n  #autoInstallOptions {\n    margin-inline-start: 20px;\n  }\n\n  .updateControls {\n    margin-inline-start: 10px;\n  }\n}\n\n@media (-moz-platform: linux) {\n  .treecol-sortdirection {\n    /* override the Linux only toolkit rule */\n    appearance: none;\n  }\n}\n", "",{"version":3,"sources":["webpack://./../../themes/shared/preferences/preferences.css"],"names":[],"mappings":"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","sourcesContent":["/* - This Source Code Form is subject to the terms of the Mozilla Public\n   - License, v. 2.0. If a copy of the MPL was not distributed with this file,\n   - You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n@namespace html \"http://www.w3.org/1999/xhtml\";\n\n/* Global rules */\n* {\n  user-select: text;\n}\n\n#preferences-root {\n  text-rendering: optimizeLegibility;\n  -moz-box-layout: flex;\n}\n\n@media not print {\n  #preferences-root,\n  #preferences-body {\n    height: 100%;\n    overflow: hidden;\n  }\n}\n\n#preferences-root,\n#preferences-body {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\n\n#preferences-body {\n  vertical-align: top; /* See bug 1606130 */\n  display: -moz-box;\n  -moz-box-orient: vertical;\n\n  --main-pane-width: 664px;\n}\n\n/*\n  The stack has some very tall content but it shouldn't be taller than the\n  viewport (and we know the tall content will still be accessible via scrollbars\n  regardless if the stack has a shorter height). So we use min-height: 0 to allow\n  the stack to be smaller than its content height so it can fit the viewport size.\n*/\n#preferences-stack {\n  min-height: 0;\n}\n\n.main-content {\n  padding-top: 0;\n  /* the 32px min-height, plus 20+30px margin below, plus some leeway: */\n  scroll-padding-top: 90px;\n  contain: inline-size;\n}\n\n.pane-container {\n  /* A workaround to keep the container always float on the `top: 0` (Bug 1377009) */\n  display: block;\n  width: min(100%, var(--main-pane-width));\n  min-width: min-content;\n}\n\n#mainPrefPane {\n  width: 100%;\n  padding: 0;\n}\n\ngroupbox[data-category] {\n  margin: 0 0 32px;\n}\n\nhtml|h1 {\n  margin: 0 0 8px;\n  font-size: 1.46em;\n  font-weight: 300;\n  line-height: 1.3em;\n}\n\nhtml|h2 {\n  margin: 16px 0 4px;\n  font-size: 1.14em;\n  line-height: normal;\n}\n\ndescription.indent,\n.indent:not(#browserPrivateEngineSelection) > description {\n  color: var(--in-content-deemphasized-text);\n}\n\nbutton,\ntreecol,\nhtml|option {\n  /* override the * rule */\n  user-select: none;\n}\n\n/* Buttons get a default min-width in XUL. When they also have flex, they will\n * be large enough anyway, and we don't want them to become smaller than their inner\n * text which would then overflow the button. Set min-width back to auto for that:\n */\nbutton[flex] {\n  min-width: auto;\n}\n\ndescription,\nlabel {\n  line-height: 1.8em;\n  margin: 0;\n}\n\n.tip-caption {\n  font-size: .9em;\n}\n\nmenulist::part(label),\nmenuitem > label,\nbutton > hbox > label {\n  line-height: unset;\n}\n\n.indent {\n  /* This should match the checkboxes/radiobuttons' width and inline margin,\n     such that when we have a toggle with a label followed by another element\n     with this class, the other element's text aligns with the toggle label. */\n  margin-inline-start: 22px !important;\n}\n\ncheckbox {\n  margin-inline: 0;\n}\n\n.tail-with-learn-more {\n  margin-inline: 0 10px;\n}\n\n/* Add a bit of space to the end of descriptions to\n * leave margin with e.g. additional buttons on the side. */\n.description-with-side-element {\n  margin-inline-end: 10px !important;\n}\n\n.learnMore {\n  margin-inline-start: 0;\n  font-weight: normal;\n  white-space: nowrap;\n}\n\n.accessory-button {\n  min-width: 150px;\n  margin: 4px 0;\n}\n\n.spotlight {\n  background-color: color-mix(in srgb, var(--in-content-accent-color) 15%, transparent);\n  outline: var(--in-content-accent-color) 1px dotted;\n  animation: fade-out 0.5s ease-out 2s forwards;\n  /* Show the border to spotlight the components in high-contrast mode. */\n  border: 1px solid transparent;\n  border-radius: 2px;\n}\n\n@keyframes fade-out {\n  100% {\n    background-color: transparent;\n    outline-color: transparent;\n  }\n}\n\n[data-subcategory] {\n  margin-inline: -4px;\n  padding-inline: 4px;\n}\n\n.ac-site-icon {\n  display: -moz-box;\n}\n\n/* Subcategory title */\n\n/**\n * The first subcategory title for each category should not have margin-top.\n */\n\n.subcategory:not([hidden]) ~ .subcategory {\n  margin-top: 16px;\n  padding-top: 16px;\n  border-top: 1px solid var(--in-content-border-color);\n}\n\n/* Category List */\n\n#categories {\n  overflow: visible !important; /* Cancel scrollbar and do not clip overflow content when window size goes very small */\n  padding: 1px; /* Adding padding around richlistitem in order to make entire keyboard focusing outline visible */\n}\n\n#category-general > .category-icon {\n  list-style-image: url(\"chrome://browser/skin/preferences/category-general.svg\");\n}\n\n#category-home > .category-icon {\n  list-style-image: url(\"chrome://browser/skin/home.svg\");\n}\n\n#category-search > .category-icon {\n  list-style-image: url(\"chrome://browser/skin/preferences/category-search.svg\");\n}\n\n#category-privacy > .category-icon {\n  list-style-image: url(\"chrome://browser/skin/preferences/category-privacy-security.svg\");\n}\n\n#category-sync > .category-icon {\n  list-style-image: url(\"chrome://browser/skin/preferences/category-sync.svg\");\n}\n\n#category-experimental > .category-icon {\n  list-style-image: url(\"chrome://global/skin/icons/experiments.svg\");\n}\n\n#category-more-from-mozilla > .category-icon {\n  list-style-image: url(\"chrome://browser/skin/preferences/mozilla-logo.svg\");\n}\n\n/* All panes */\n\n.info-icon,\n.androidIcon,\n.iOSIcon {\n  -moz-context-properties: fill;\n  fill: currentColor;\n}\n\n/* General Pane */\n\n.is-default > #isNotDefaultPane,\n:not(.is-default) > #isDefaultPane {\n  visibility: hidden;\n}\n\n#isDefaultLabel,\n#isNotDefaultLabel {\n  font-weight: 600;\n}\n\n#browserContainersExtensionContent {\n  padding-block: 5px;\n}\n\n.extension-controlled {\n  margin-block: 18px;\n}\n\n.extension-controlled-icon {\n  height: 20px;\n  margin: 2px 0 6px;\n  vertical-align: middle;\n  width: 20px;\n  -moz-context-properties: fill;\n  fill: currentColor;\n}\n\n.extension-controlled-disabled {\n  -moz-context-properties: fill;\n  color: GrayText;\n  fill: currentColor;\n}\n\n.extension-controlled-disabled > .extension-controlled-button {\n  display: none;\n}\n\n.extension-controlled-icon.close-icon {\n  height: 30px;\n  width: 30px;\n  margin-inline-start: 5px;\n}\n\n#getStarted {\n  font-size: 90%;\n}\n\n#colors {\n  margin-inline-start: 5px;\n}\n\n#FontsDialog menulist:empty {\n  /* When there's no menupopup, while the font builder is running,\n   * the height of the menulist would otherwise shrink. This throws\n   * off the height determination SubDialog.sys.mjs does, which then\n   * leads to content being cut off. Fix by enforcing a minimum height\n   * when there's no content: */\n  min-height: max(32px, calc(1.4em + 16px));\n}\n\n#useDocumentColors {\n  margin: 4px 0;\n}\n\n#translationAttributionImage {\n  width: 70px;\n  cursor: pointer;\n}\n\n#activeLanguages > richlistitem {\n  padding: 0.3em;\n}\n\n#saveWhere {\n  -moz-box-align: center;\n}\n\n#saveTo {\n  margin-inline-end: 1em;\n}\n\n#downloadFolder {\n  -moz-box-flex: 1;\n  margin-block: 4px;\n  margin-inline-start: 0;\n  padding-inline-start: 30px;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  background-position: center left 8px;\n}\n\n#downloadFolder:-moz-locale-dir(rtl) {\n  background-position-x: right 8px;\n}\n\n#updateBox {\n  margin-block: 4px 32px;\n}\n\n/* Work around bug 560067 - animated images in visibility: hidden\n * still eat CPU. */\n#updateDeck > *:not(.deck-selected) > .update-throbber {\n  display: none;\n}\n\n#updateDeck > hbox > button {\n  margin-block: 0;\n  margin-inline-end: 0;\n}\n\n#updateDeck > hbox > label {\n  -moz-box-flex: 1;\n}\n\n.manualLink {\n  margin-inline-start: 6px !important;\n}\n\n#updateRadioGroup > radio {\n  min-height: 30px;\n  margin: 2px 0;\n}\n\n#filter {\n  margin: 4px 0 8px;\n}\n\n#handlersView {\n  height: 25em;\n  margin-inline-end: 0;\n}\n\n#handlersView > richlistitem {\n  min-height: 30px;\n}\n\n#handlersViewHeader > treecol,\n#handlersView > richlistitem > hbox {\n  width: 50%;\n}\n\n#handlersView .actionsMenu {\n  margin: 0;\n  min-height: 0;\n  padding: 0;\n  border: none;\n  padding-inline-end: 8px;\n}\n\n#handlersView .actionsMenu::part(label) {\n  margin: 0;\n}\n\n.certManagerRichlistBox > richlistitem {\n  min-height: 30px !important;\n}\n\n.typeIcon,\n.actionIcon,\n.actionsMenu::part(icon) {\n  height: 16px;\n  width: 16px;\n}\n\n.typeIcon {\n  margin-inline: 10px 9px !important;\n}\n\n#handlersView .actionsMenu::part(icon),\n.actionIcon {\n  margin-inline: 11px 8px !important;\n}\n\n.actionsMenu > menupopup > menuitem {\n  padding-inline-start: 10px !important;\n}\n\n.actionsMenu > menupopup > menuitem > .menu-iconic-left {\n  margin-inline-end: 8px !important;\n}\n\n/* Increase the specifity to override common.inc.css */\nrichlistitem[selected] .actionsMenu:focus-visible {\n  outline-offset: -3px;\n}\n\n/* Home Pane */\n\n#homepageGroup menulist,\n#homepageGroup html|input {\n  margin: 5px 0;\n}\n\n#homepageGroup html|input {\n  text-align: match-parent;\n}\n\n#homepageGroup:-moz-locale-dir(rtl) html|input {\n  unicode-bidi: plaintext;\n}\n\n#homepageAndNewWindowsOption {\n  margin-top: 20px;\n}\n\n#homepageGroup:-moz-locale-dir(rtl) panel[type=\"autocomplete-richlistbox\"] {\n  direction: rtl;\n}\n\n.homepage-button:first-of-type {\n  margin-inline-start: 0;\n}\n\n.homepage-button:last-of-type {\n  margin-inline-end: 0;\n}\n\n#homeContentsGroup .checkbox-icon[src] {\n  -moz-context-properties: fill;\n  fill: currentColor;\n  margin-inline: 2px 8px;\n  width: 16px;\n}\n\n#homeContentsGroup [data-subcategory] {\n  margin-top: 14px;\n}\n\n#homeContentsGroup [data-subcategory] .section-checkbox {\n  font-weight: 600;\n}\n\n#homeContentsGroup [data-subcategory] > vbox menulist {\n  margin-block: 0;\n}\n\n.addon-with-favicon .menu-iconic-icon {\n  margin-inline-start: 0;\n}\n\n/* Search Pane */\n\n#engineList {\n  margin: 2px 0 5px;\n}\n\n#engineList > treechildren::-moz-tree-image(engineShown, checked),\n#blocklistsTree > treechildren::-moz-tree-image(selectionCol, checked) {\n  list-style-image: url(\"chrome://global/skin/icons/check.svg\");\n  -moz-context-properties: fill, stroke;\n  fill: var(--in-content-accent-color);\n}\n\n#engineList > treechildren::-moz-tree-image(engineShown, checked, selected),\n#blocklistsTree > treechildren::-moz-tree-image(selectionCol, checked, selected) {\n  fill: var(--in-content-item-selected-text);\n  stroke: var(--in-content-item-selected);\n}\n\n@media (prefers-contrast) {\n  #engineList > treechildren::-moz-tree-image(hover),\n  #blocklistsTree > treechildren::-moz-tree-image(hover) {\n    fill: var(--in-content-item-hover-text);\n    stroke: var(--in-content-item-hover);\n  }\n}\n\n#engineList > treechildren::-moz-tree-row,\n#blocklistsTree > treechildren::-moz-tree-row {\n  min-height: 36px;\n}\n\n#selectionCol {\n  min-width: 26px;\n}\n\n#addEnginesBox {\n  margin: 4px 0 0;\n}\n\n/* Privacy Pane */\n\n#allowSmartSize {\n  margin-block: 0 4px;\n}\n\n#doNotTrackLearnMoreBox {\n  margin-top: 32px;\n}\n\n#historyPane {\n  margin-top: 4px;\n}\n\n#historyButtons {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n#blockCookies,\n#keepRow {\n  margin-top: 1.5em;\n}\n\n/* Collapse the non-active vboxes in decks to use only the height the\n   active vbox needs */\n#historyPane:not([selectedIndex=\"1\"]) > #historyDontRememberPane,\n#historyPane:not([selectedIndex=\"2\"]) > #historyCustomPane,\n#weavePrefsDeck:not([selectedIndex=\"1\"]) > #hasFxaAccount,\n#fxaLoginStatus:not([selectedIndex=\"1\"]) > #fxaLoginUnverified,\n#fxaLoginStatus:not([selectedIndex=\"2\"]) > #fxaLoginRejected,\n#syncStatus:not([selectedIndex=\"1\"]) > #syncConfigured {\n  visibility: collapse;\n}\n\n#tabsElement {\n  margin-inline-end: 4px; /* add the 4px end-margin of other elements */\n}\n\n.text-link {\n  margin-bottom: 0;\n}\n\n.text-link[disabled=\"true\"] {\n  pointer-events: none;\n}\n\n#showUpdateHistory {\n  margin-inline-start: 0;\n}\n\n@media (-moz-platform: windows-win7),\n       (-moz-platform: windows-win8) {\n  #windows-sso,\n  #windows-sso-caption {\n    display: none;\n  }\n}\n\n/**\n * Dialog\n */\n\n.dialogOverlay {\n  visibility: hidden;\n}\n\n.dialogOverlay[topmost=\"true\"] {\n  background-color: rgba(0,0,0,0.5);\n}\n\n.dialogBox {\n  background-color: var(--in-content-page-background);\n  background-clip: content-box;\n  color: var(--in-content-page-color);\n  /* `transparent` will use the dialogText color in high-contrast themes and\n     when page colors are disabled */\n  border: 1px solid transparent;\n  border-radius: 8px;\n  box-shadow: 0 2px 6px 0 rgba(0,0,0,0.3);\n  display: -moz-box;\n  margin: 0;\n  padding: 0;\n  overflow-x: auto;\n}\n\n@media (prefers-color-scheme: dark) {\n  @media not (prefers-contrast) {\n    .dialogBox {\n      --in-content-page-background: #42414d;\n    }\n  }\n}\n\n.dialogBox[resizable=\"true\"] {\n  resize: both;\n  overflow: hidden;\n  min-height: 20em;\n  min-width: 66ch;\n}\n\n.dialogTitleBar {\n  padding: .4em .2em;\n  border-bottom: 1px solid var(--in-content-border-color);\n}\n\n.dialogTitle {\n  font-weight: 600;\n  text-align: center;\n  user-select: none;\n}\n\n.fxaPairDeviceIcon {\n  background-image: url(\"chrome://browser/content/logos/fxa-logo.svg\");\n  background-position: center center;\n  background-repeat: no-repeat;\n  position: relative;\n  height: 80px;\n  padding-top: 42px;\n  margin-top: -40px;\n}\n\n.fxaPairDeviceIcon .close-icon {\n  margin-top: 10px;\n}\n\n.close-icon {\n  border: none;\n  background-color: transparent; /* override common.css, but keep hover/active states */\n  min-width: 0;\n  min-height: auto;\n  width: 20px;\n  height: 20px;\n  padding: 0;\n  margin-inline: 0 8px;\n}\n\n.dialogFrame {\n  margin: 10px;\n  -moz-box-flex: 1;\n  /* Default dialog dimensions */\n  min-width: 66ch;\n}\n\n/**\n * End Dialog\n */\n\n/**\n * Font group and font dialog menulist fixes\n */\n\n#font-chooser-group {\n  display: grid;\n  grid-template-columns: max-content 1fr max-content max-content;\n}\n\n#defaultFont {\n  width: 25ch;\n}\n\n#defaultFontType,\n#serif,\n#sans-serif,\n#monospace {\n  width: 0; /* Might be able to be removed */\n  min-width: 30ch;\n}\n\n/**\n * Sync\n */\n\n.fxaProfileImage {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  border: 1px solid transparent;\n  list-style-image: url(chrome://browser/skin/fxa/avatar-color.svg);\n  margin-inline-end: 24px;\n  -moz-user-focus: normal;\n}\n\n.fxaProfileImage.actionable {\n  cursor: pointer;\n}\n\n.fxaProfileImage.actionable:hover {\n  border-color: #0095DD;\n}\n\n.fxaProfileImage.actionable:hover:active {\n  border-color: #ff9500;\n}\n\n#useFirefoxSync {\n  font-size: 90%;\n  margin-inline-end: 8px !important;\n}\n\n#fxaNoLoginStatus {\n  margin-block: 46px 64px;\n}\n\n#fxaSyncComputerName {\n  -moz-box-flex: 1;\n  margin-block: 4px;\n  margin-inline-start: 0;\n}\n\n#fxaChangeDeviceName {\n  margin-block: 4px;\n  margin-inline-end: 0;\n}\n\n#noFxaAccount {\n  line-height: 1.2em;\n}\n\n#noFxaAccount > label:first-child {\n  margin-bottom: 0.6em;\n}\n\n#noFxaCaption {\n  line-height: 30px;\n  margin-block: 0 4px;\n}\n\n#noFxaSignIn {\n  margin-inline-start: 8px;\n}\n\n.fxaSyncIllustration {\n  list-style-image: url(chrome://browser/skin/fxa/sync-devices.svg);\n  width: 312px;\n  height: 136px;\n}\n\n#noFxaDescription {\n  padding-inline-end: 52px;\n}\n\n.separator {\n  border-bottom: 1px solid var(--in-content-box-border-color);\n}\n\n#fxaGroup {\n  margin-bottom: 32px;\n}\n\n.openLink {\n  line-height: 30px;\n  cursor: pointer;\n}\n\n.openLink:visited {\n  color: var(--in-content-link-color);\n}\n\n#fxaDisplayName {\n  margin-inline-end: 10px !important;\n}\n\n.fxaLoginRejectedWarning {\n  list-style-image: url(chrome://global/skin/icons/warning.svg);\n  -moz-context-properties: fill;\n  fill: #FFBF00;\n  margin-inline: 4px 8px;\n}\n\n#syncStatus {\n  margin-top: 32px;\n}\n\n.sync-group {\n  margin-block: 16px;\n  border: 1px solid var(--in-content-border-color);\n}\n\n.sync-configured {\n  display: block;\n}\n\n.sync-engines-list > div,\n.sync-engines-list + hbox {\n  margin-top: 0;\n  padding-top: 16px;\n  max-width: 300px;\n  height: auto;\n}\n\ndialog > .sync-engines-list > div,\ndialog > .sync-engines-list + hbox {\n  padding-top: 0;\n}\n\n.sync-engines-list checkbox .checkbox-icon,\n.sync-engine-image {\n  margin-inline: 2px 8px;\n  width: 16px;\n  height: 16px;\n  -moz-context-properties: fill;\n  fill: currentColor;\n  align-self: center;\n}\n\n.sync-engines-list checkbox {\n  min-width: max-content;\n  max-width: calc(50vw - 10px);\n}\n\n.sync-engines-list .checkbox-label-box {\n  -moz-box-align: center;\n}\n\n.sync-engines-list {\n  column-count: 2;\n  column-fill: balance;\n}\n\n.sync-engines-list > div:not([hidden]) {\n  display: flex;\n}\n\n.sync-engine-bookmarks .checkbox-icon,\n.sync-engine-bookmarks.sync-engine-image {\n  list-style-image: url(\"chrome://browser/skin/bookmark.svg\");\n}\n\n.sync-engine-history .checkbox-icon,\n.sync-engine-history.sync-engine-image {\n  list-style-image: url(\"chrome://browser/skin/history.svg\");\n}\n\n.sync-engine-tabs .checkbox-icon,\n.sync-engine-tabs.sync-engine-image {\n  list-style-image: url(\"chrome://browser/skin/synced-tabs.svg\");\n}\n\n.sync-engine-passwords .checkbox-icon,\n.sync-engine-passwords.sync-engine-image {\n  list-style-image: url(\"chrome://browser/skin/login.svg\");\n}\n\n.sync-engine-addons .checkbox-icon,\n.sync-engine-addons.sync-engine-image {\n  list-style-image: url(\"chrome://mozapps/skin/extensions/extension.svg\");\n}\n\n.sync-engine-prefs .checkbox-icon,\n.sync-engine-prefs.sync-engine-image {\n  list-style-image: url(\"chrome://global/skin/icons/settings.svg\");\n}\n\n.sync-engine-addresses .checkbox-icon,\n.sync-engine-addresses.sync-engine-image {\n  list-style-image: url(\"chrome://formautofill/content/formfill-anchor.svg\");\n}\n\n.sync-engine-creditcards .checkbox-icon,\n.sync-engine-creditcards.sync-engine-image {\n  list-style-image: url(\"chrome://formautofill/content/icon-credit-card-generic.svg\");\n}\n\n.fxaMobilePromo {\n  margin-top: 2px !important;\n}\n\n.androidIcon,\n.iOSIcon {\n  margin-inline: 2px 4px;\n  width: 20px;\n  height: 20px;\n  vertical-align: text-bottom;\n}\n\n#updateDeck > hbox > label {\n  margin-inline-end: 5px ! important;\n}\n\n.update-throbber {\n  width: 16px;\n  min-height: 16px;\n  margin-block: 7px;\n  margin-inline-end: 8px;\n}\n\nhtml|img.update-throbber {\n  vertical-align: middle;\n}\n\nimage.update-throbber {\n  list-style-image: url(\"chrome://global/skin/icons/loading.png\");\n}\n\n@media (min-resolution: 1.1dppx) {\n  .update-throbber {\n    list-style-image: url(\"chrome://global/skin/icons/loading@2x.png\");\n  }\n}\n\n.navigation {\n  overflow-x: hidden;\n  overflow-y: auto;\n  position: relative;\n}\n\n@media (prefers-reduced-motion) {\n  /* Setting border-inline-end on .navigation makes it a focusable element */\n  .navigation::after {\n    content: \"\";\n    width: 1px;\n    height: 100%;\n    background-color: var(--in-content-border-color);\n    top: 0;\n    inset-inline-end: 0;\n    position: absolute;\n  }\n}\n\n.face-sad {\n  list-style-image: url(\"chrome://browser/skin/preferences/face-sad.svg\");\n  width: 20px;\n  height: 20px;\n  margin-block: 5px;\n  margin-inline-end: 8px;\n}\n\n.face-smile {\n  list-style-image: url(\"chrome://browser/skin/preferences/face-smile.svg\");\n  width: 20px;\n  height: 20px;\n  margin-block: 5px;\n  margin-inline-end: 8px;\n}\n\n#policies-container,\n#searchInput {\n  min-height: 32px;\n  margin: 20px 0 30px;\n}\n\n#policies-container {\n  margin-inline-end: 16px;\n  /* Make sure the container is at least the same height as the searchbox.\n     This is needed in addition to the min-height above to make the info icon\n     the same height as the first line in the policies label.\n     Searchbox's height - line-height - border top and bottom */\n  padding-block: max(0px, calc((32px - 1.8em - 2px) / 2));\n}\n\n.info-box-container {\n  background-color: var(--in-content-box-info-background);\n  padding: 9px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n\n.info-box-container.smaller-font-size {\n  font-size: 85%;\n}\n\n.info-icon-container {\n  display: flex;\n}\n\n.info-icon {\n  list-style-image: url(\"chrome://global/skin/icons/info.svg\");\n  width: 16px;\n  height: 16px;\n  margin-inline-end: 6px;\n  align-self: start;\n  margin-top: 0.4em;\n  flex-shrink: 0;\n}\n\n.info-box-container.smaller-font-size .info-icon {\n  margin-top: 0.3em;\n}\n\n.sticky-container {\n  position: sticky;\n  background-color: var(--in-content-page-background);\n  top: 0;\n  z-index: 1;\n  /* The sticky-container should have the capability to cover all spotlight area. */\n  width: calc(100% + 8px);\n  margin-inline: -4px;\n  padding-inline: 4px;\n}\n\n.sticky-inner-container {\n  -moz-box-flex: 1;\n  max-width: var(--main-pane-width);\n}\n\n.search-tooltip {\n  max-width: 10em;\n  font-size: 1rem;\n  position: absolute;\n  padding: 0 .7em;\n  background-color: #ffe900;\n  color: #000;\n  border: 1px solid #d7b600;\n  margin-top: -18px;\n  opacity: .85;\n}\n\n.search-tooltip:hover {\n  opacity: .1;\n}\n\n.search-tooltip::before {\n  position: absolute;\n  content: \"\";\n  border: 7px solid transparent;\n  border-top-color: #d7b600;\n  top: 100%;\n  inset-inline-start: calc(50% - 7px);\n}\n\n.search-tooltip::after {\n  position: absolute;\n  content: \"\";\n  border: 6px solid transparent;\n  border-top-color: #ffe900;\n  top: 100%;\n  inset-inline-start: calc(50% - 6px);\n}\n\n.search-tooltip-parent {\n  position: relative;\n}\n\n.search-tooltip > span {\n  display: block;\n  user-select: none;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.visually-hidden {\n  visibility: collapse;\n}\n\nmenulist[indicator=true] > menupopup menuitem:not([image]) > .menu-iconic-left {\n  display: -moz-box;\n  min-width: auto; /* Override the min-width defined in menu.css */\n  margin-inline-end: 6px;\n}\n\nmenulist[indicator=true] > menupopup menuitem:not([image]) > .menu-iconic-left > .menu-iconic-icon {\n  width: 8px;\n  height: 10px;\n  margin: 0;\n}\n\nmenulist[indicator=true] > menupopup menuitem[indicator=true]:not([image]) > .menu-iconic-left > .menu-iconic-icon {\n  list-style-image: url(chrome://browser/skin/preferences/search-arrow-indicator.svg);\n}\n\nmenulist[indicator=true] > menupopup menuitem[indicator=true]:not([image]) > .menu-iconic-left > .menu-iconic-icon:-moz-locale-dir(rtl) {\n  transform: scaleX(-1);\n}\n\n.menu-iconic-highlightable-text {\n  margin: 0; /* Align with the margin of xul:label.menu-iconic-text */\n}\n\n#no-results-message > label {\n  margin: 2px 0;\n  line-height: 30px;\n}\n\n/* Proxy port input */\n\n.proxy-port-input {\n  width: calc(5ch + 18px); /* 5 chars + (8px padding + 1px border) on both sides */\n  margin-inline-start: 4px;\n}\n\n#primaryBrowserLocale {\n  margin-inline-start: 0;\n  min-width: 20em;\n}\n\n#availableLanguages,\n#availableLocales {\n  margin-inline-start: 0;\n}\n\n#availableLanguages,\n#availableLocales,\n#activeLanguages,\n#selectedLocales {\n  margin-inline-end: 4px;\n}\n\n#selectedLocales > richlistitem {\n  padding-inline-start: 13px;\n}\n\n#warning-message > .message-bar-description {\n  width: 32em;\n}\n\n#warning-message {\n  margin-top: 8px;\n}\n\n.action-button {\n  margin-inline-end: 0;\n}\n\n/* Menulist styles */\n.label-item {\n  font-size: 0.8em;\n}\n\n.updateSettingCrossUserWarningContainer {\n  margin-block-end: 17px;\n}\n\n#updateSettingCrossUserWarningDesc {\n  padding-inline-start: calc(16px + 6px); /* radio-check's width + margin-inline-end */\n  margin-block-start: 20px;\n}\n\nrichlistitem .text-link {\n  color: inherit;\n  text-decoration: underline;\n}\n\nrichlistitem .text-link:hover {\n  color: inherit;\n}\n\n#proxy-grid,\n#dnsOverHttps-grid {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  align-items: center;\n}\n\n.proxy-grid-row:not([hidden]),\n.dnsOverHttps-grid-row:not([hidden]) {\n  display: contents;\n}\n\n#proxy-grid > .thin {\n  grid-column: span 2;\n  height: 20px;\n}\n\n#pane-experimental-search-results-header,\n#pane-experimental-subtitle {\n  background-image: url(\"chrome://global/skin/icons/warning.svg\");\n  background-repeat: no-repeat;\n  background-position: 0 center;\n  background-size: contain;\n  min-height: 30px;\n  padding-inline-start: 38px;\n  display: flex;\n  align-items: center;\n  -moz-context-properties: fill;\n  fill: #FFBF00;\n}\n\n#pane-experimental-search-results-header:-moz-locale-dir(rtl),\n#pane-experimental-subtitle:-moz-locale-dir(rtl) {\n  background-position-x: right;\n}\n\n#pane-experimental-featureGates {\n  margin-top: 16px;\n}\n\n.featureGate {\n  margin-bottom: 16px;\n}\n\n.featureGateCheckbox {\n  font-size: 1.14em;\n  -moz-box-align: center;\n}\n\n.featureGateCheckbox > .checkbox-label-box {\n  -moz-box-align: center;\n}\n\n.featureGateDescription {\n  margin-inline-start: 28px;\n}\n\n.checkbox-row {\n  display: flex;\n  align-items: baseline;\n}\n\n.checkbox-row input[type=checkbox] {\n  translate: 0 2px\n}\n\n.checkbox-row a {\n  margin-inline-start: 6px;\n}\n\n#moreFromMozillaCategory-header .title {\n  margin-block-end: 4px;\n}\n\n#moreFromMozillaCategory-header .subtitle {\n  color: var(--in-content-text-color);\n  margin-block-end: 24px;\n  line-height: 1.4em;\n}\n\n#moreFromMozillaCategory:not([hidden]) {\n  display: flex;\n  flex-direction: column;\n}\n\n#moreFromMozillaCategory .mozilla-product-item {\n  margin-top: 30px;\n}\n\n#moreFromMozillaCategory .product-title {\n  margin: 4px 0 3px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  padding-inline-start: 30px;\n  -moz-context-properties: fill;\n  fill: currentColor;\n}\n\n#moreFromMozillaCategory .product-title:-moz-locale-dir(rtl) {\n  background-position-x: right;\n}\n\n#moreFromMozillaCategory .description {\n  display: inline flow-root;\n  color: var(--in-content-text-color);\n  padding-inline-start: 30px;\n  margin: 2px 0;\n  line-height: 1.4em;\n}\n\n#moreFromMozillaCategory .small-button {\n  margin-block: 14px 2px;\n  margin-inline: 30px 0;\n}\n\n#moreFromMozillaCategory .text-link {\n  line-height: 1.4em;\n\n  margin-block: 2px 0;\n  margin-inline: 6px 0;\n}\n\n#moreFromMozillaCategory .simple .text-link {\n  display: inline flow-root;\n  margin-inline-start: 4px;\n}\n\n#moreFromMozillaCategory .text-link.hidden {\n  display: none;\n}\n\n#firefox-mobile {\n  background-image: url(\"chrome://devtools/skin/images/browsers/mobile.svg\");\n  padding-top: 5px;\n}\n\n#mozilla-vpn {\n  background-image: url(\"chrome://browser/skin/preferences/vpn-logo.svg\");\n}\n\n#mozilla-rally {\n  background-image: url(\"chrome://browser/skin/preferences/rally-logo.svg\");\n}\n\n/*\n * The :not clause is required because hiding an element with `display: flex` only\n * partially hides it.\n */\n.qr-code-box:not([hidden=\"true\"]) {\n  max-width: 320px; /* a unit better than px for this & next? */\n  min-height: 204px;\n  margin-block: 10px 0;\n  margin-inline-start: 30px;\n  background-color: var(--in-content-box-info-background);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  border-radius: 4px;\n}\n\n@media (prefers-contrast) {\n  .qr-code-box:not([hidden=\"true\"]) {\n    border: 1px solid currentColor;\n  }\n}\n\n.qr-code-box-image {\n  border-radius: 4px;\n  padding: 2px;\n  width: 80px;\n  flex: 0 0 auto;\n  -moz-context-properties: fill;\n  fill: currentColor;\n}\n\n.qr-code-title-label {\n  flex: 1 1 auto;\n}\n\n.qr-code-box-title {\n  font-size: .87em;\n  font-weight: normal;\n  line-height: 1.42em;\n\n  text-align: center;\n\n  margin-block: 20px 0;\n  margin-inline: 40px;\n}\n\n.simple .qr-code-box-title {\n  margin-block: 0;\n  width: 296px;\n}\n\n.simple .qr-code-box {\n  padding-inline: 24px;\n  padding-block: 20px\n}\n\n.simple .qr-code-box-image {\n  padding: 10px;\n}\n\n#moreFromMozillaCategory .qr-code-link {\n  font-size: .87em;\n  line-height: 1.42em;\n  margin-block-start: 0;\n  margin-inline: 0; /* make sure we're correctly centered by overriding button rule */\n}\n\n@media (prefers-color-scheme: dark) {\n  .qr-code-box:not([hidden=\"true\"]) {\n    background-color: rgba(91,91,102,0.45);\n  }\n\n  .qr-code-box-title {\n    color: #fbfbfe;\n  }\n}\n\n#websiteAppearanceGroup {\n  display: block;\n}\n\n#web-appearance-chooser {\n  display: flex;\n  justify-content: space-between;\n  gap: 16px;\n}\n\n#web-appearance-chooser,\n#web-appearance-override-warning {\n  margin: 12px 0;\n}\n\n#web-appearance-override-warning:not([hidden]) {\n  display: flex;\n}\n\n.web-appearance-choice {\n  width: 100%;\n  border: 1px solid var(--in-content-box-border-color);\n  background-color: var(--in-content-box-background-color);\n  color: var(--in-content-text-color);\n  border-radius: 4px;\n  overflow: clip;\n}\n\n.web-appearance-choice-image-container {\n  background-color: var(--in-content-button-background);\n  padding: 12px 0;\n}\n\n.web-appearance-choice:hover > .web-appearance-choice-image-container {\n  background-color: var(--in-content-button-background-hover);\n}\n\n.web-appearance-choice:hover:active > .web-appearance-choice-image-container {\n  background-color: var(--in-content-button-background-active);\n}\n\n.web-appearance-choice img {\n  display: block;\n  margin: 0 auto;\n\n  border: 1px solid var(--in-content-box-border-color);\n  border-radius: 4px;\n  box-shadow: 0 0 2px 0 rgba(0,0,0,0.2);\n\n  transform: scaleX(1);\n  content: url(\"chrome://browser/content/preferences/web-appearance-light.svg\")\n}\n\n.web-appearance-choice.dark img {\n  content: url(\"chrome://browser/content/preferences/web-appearance-dark.svg\")\n}\n\n.web-appearance-choice img:dir(rtl) {\n  transform: scaleX(-1);\n}\n\n.web-appearance-choice-footer {\n  border-top: 1px solid var(--in-content-box-border-color);\n  padding: 4px 8px;\n  overflow-wrap: anywhere;\n  display: flex;\n}\n\n.web-appearance-choice input {\n  margin-top: 0.4em;\n}\n\n/* Platform-specific tweaks & overrides */\n\n@media (-moz-platform: macos) {\n  tabpanels {\n    padding: 20px 7px 7px;\n  }\n\n  #browserUseCurrent,\n  #browserUseBookmark,\n  #browserUseBlank {\n    margin-top: 10px;\n  }\n\n  #privacyPrefs {\n    padding: 0 4px;\n  }\n\n  #privacyPrefs > tabpanels {\n    padding: 18px 10px 10px;\n  }\n\n  #OCSPDialogPane {\n    font: message-box !important;\n  }\n\n  /**\n   * Update Preferences\n   */\n  #autoInstallOptions {\n    margin-inline-start: 20px;\n  }\n\n  .updateControls {\n    margin-inline-start: 10px;\n  }\n}\n\n@media (-moz-platform: linux) {\n  .treecol-sortdirection {\n    /* override the Linux only toolkit rule */\n    appearance: none;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ 55819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93379);
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_preferences_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71126);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_preferences_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_preferences_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
//# sourceMappingURL=5819.816a38a4.iframe.bundle.js.map