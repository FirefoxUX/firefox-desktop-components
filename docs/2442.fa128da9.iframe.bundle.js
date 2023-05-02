"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[2442],{

/***/ 65718:
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
___CSS_LOADER_EXPORT___.push([module.id, "/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n/* Hide all conditional elements by default. */\n:is([when-connection],[when-customroot],[when-mixedcontent],[when-ciphers],[when-httpsonlystatus]) {\n  display: none;\n}\n\n#identity-popup,\n#permission-popup,\n#protections-popup {\n  --popup-width: 30.81em;\n  /* Set default fill for icons in the identity popup.\n     Individual icons can override this. */\n  fill: currentColor;\n  --horizontal-padding: calc(var(--arrowpanel-menuitem-padding-inline) * 2);\n  --vertical-section-padding: 0.9em;\n  --height-offset: 0px;\n  font: menu;\n}\n\n#protections-popup[toast] {\n  --popup-width: 27.12em;\n}\n\n#protections-popup[infoMessageShowing] {\n  --height-offset: 260px;\n}\n\n/* This is used by screenshots tests to hide intermittently different\n * identity popup shadows (see bug 1425253). */\n#identity-popup.no-shadow,\n#permission-popup.no-shadow {\n  -moz-window-shadow: none;\n}\n\n/* Show the right elements for the right connection states. */\n#identity-popup[customroot=true] [when-customroot=true],\n#identity-popup[connection=not-secure] [when-connection~=not-secure],\n#identity-popup[connection=secure-cert-user-overridden] [when-connection~=secure-cert-user-overridden],\n#identity-popup[connection=secure-ev] [when-connection~=secure-ev],\n#identity-popup[connection=secure] [when-connection~=secure],\n#identity-popup[connection=chrome] [when-connection~=chrome],\n#identity-popup[connection=file] [when-connection~=file],\n#identity-popup[connection=extension] [when-connection~=extension],\n#identity-popup[connection=cert-error-page] [when-connection~=cert-error-page],\n#identity-popup[connection=net-error-page] [when-connection~=net-error-page],\n#identity-popup[connection=https-only-error-page] [when-connection~=https-only-error-page],\n/* Show weak cipher messages when needed. */\n#identity-popup[ciphers=weak] [when-ciphers~=weak],\n/* Show mixed content warnings when needed */\n#identity-popup[mixedcontent~=active-loaded] [when-mixedcontent=active-loaded],\n#identity-popup[mixedcontent~=passive-loaded]:not([mixedcontent~=active-loaded]) [when-mixedcontent=passive-loaded],\n#identity-popup[mixedcontent~=active-blocked]:not([mixedcontent~=passive-loaded]) [when-mixedcontent=active-blocked],\n/* Show the right elements when there is mixed passive content loaded and active blocked. */\n#identity-popup[mixedcontent~=active-blocked][mixedcontent~=passive-loaded] [when-mixedcontent~=active-blocked][when-mixedcontent~=passive-loaded],\n/* HTTPS-Only Mode */\n#identity-popup[httpsonlystatus=exception] [when-httpsonlystatus~=exception],\n#identity-popup[httpsonlystatus=upgraded] [when-httpsonlystatus~=upgraded],\n#identity-popup[httpsonlystatus=failed-top] [when-httpsonlystatus~=failed-top],\n#identity-popup[httpsonlystatus=failed-sub] [when-httpsonlystatus~=failed-sub],\n/* Show 'disable MCB' button always when there is mixed active content blocked. */\n#identity-popup-securityView-extended-info[mixedcontent~=active-blocked] > button[when-mixedcontent=active-blocked] {\n  display: revert;\n}\n\n/* Hide 'not secure' message in subview when weak cipher or mixed content messages are shown. */\n#identity-popup-securityView-extended-info:is([mixedcontent],[ciphers]) > description[when-connection=not-secure],\n/* Hide 'passive-loaded (only)' message when there is mixed passive content loaded and active blocked. */\n#identity-popup-securityView-extended-info[mixedcontent~=passive-loaded][mixedcontent~=active-blocked] > description[when-mixedcontent=passive-loaded] {\n  display: none;\n}\n\n/* Make sure hidden elements don't accidentally become visible from one of the\n   above selectors (see Bug 1194258) */\n#identity-popup [hidden] {\n  display: none !important;\n}\n\n#identity-popup-mainView,\n#permission-popup-mainView,\n#protections-popup-mainView {\n  min-width: var(--popup-width);\n  max-width: var(--popup-width);\n}\n\n#protections-popup[toast] #protections-popup-mainView > :not(#protections-popup-mainView-panel-header-section),\n#protections-popup[toast] #protections-popup-mainView-panel-header-section > :not(#protections-popup-mainView-panel-header),\n#protections-popup[toast] #protections-popup-mainView-panel-header > :is(.panel-info-button, #protections-popup-main-header-label) {\n  /* Hide all elements in the panel except for the toast descriptions */\n  display: none;\n}\n\n#protections-popup[toast] #protections-popup-mainView-panel-header {\n  min-height: unset; /* revert panelUI-shared.css */\n}\n\n#identity-popup-security-description > description {\n  font-weight: 600;\n  margin-top: 0.5em;\n}\n\n#identity-popup-security-httpsonlymode {\n  margin-top: 1em;\n}\n\n#identity-popup-security-httpsonlymode-menulist {\n  width: 11em;\n  margin: 0.5em 0;\n}\n\n#identity-popup-security-httpsonlymode-info {\n  font-size: 0.85em;\n  color: var(--panel-description-color);\n}\n\n#identity-popup-security-httpsonlymode-info > description {\n  margin-bottom: 0.5em;\n}\n\n#permission-popup-permissions-content {\n  padding-inline: 1.25em;\n  min-width: 0;\n}\n\n/* CONTENT */\n\n:where(#protections-popup, #identity-popup) :is(description, label) {\n  margin: 0;\n}\n\n#protections-popup .panel-header > h1 > span,\n#permission-popup .panel-header > h1 > span,\n#identity-popup .panel-header > h1 > span {\n  /* This is needed for the overflow-wrap to work correctly when the domain name is really long. */\n  max-width: calc(var(--popup-width) - 2 * var(--arrowpanel-menuitem-margin-inline));\n  overflow-wrap: break-word;\n}\n\n#protections-popup .panel-header > h1 > span {\n  /* The protections popup panel header text needs a different calculation because it contains an info button.\n   * icon-full-width and icon-margin are included twice to compensate for the margin-inline-start of the text,\n   * used to center it even if the header includes a info button. See .panel-header-with-info-button */\n  max-width: calc(var(--popup-width)\n                  - var(--arrowpanel-menuitem-margin-inline) * 2\n                  - var(--arrowpanel-header-info-icon-full-width) * 2);\n}\n\n#identity-popup .panel-header > .subviewbutton-back + h1 > span {\n  /* Same idea as above, but in the identity popup when there's a back button. */\n  max-width: calc(var(--popup-width)\n                  - var(--arrowpanel-menuitem-margin-inline) * 2\n                  - var(--arrowpanel-header-back-icon-full-width) * 2);\n}\n\n#protections-popup:not([infoMessageShowing]) #protections-popup-mainView-panel-header-section + toolbarseparator {\n  display: none;\n}\n\n#protections-popup-mainView-panel-header-section {\n  /* Don't display the info message on top of the panel content while it fades in and out */\n  overflow: hidden;\n}\n\n#permission-popup-permissions-content > description,\n#protections-popup-content > description {\n  color: var(--panel-description-color);\n}\n\n/* This element needs the pre-wrap because we add newlines to it in the code. */\n#identity-popup-content-supplemental {\n  white-space: pre-wrap;\n}\n\n/* SECURITY */\n\n#identity-popup[mixedcontent~=active-loaded] .identity-popup-connection-not-secure,\n#identity-popup:not([mixedcontent]) .identity-popup-connection-not-secure {\n  font-weight: bold;\n}\n\n#identity-popup-mainView > .panel-subview-body {\n  padding-bottom: var(--panel-subview-body-padding-block);\n}\n\n#identity-popup-mainView[footerVisible=\"true\"] > .panel-subview-body {\n  padding-bottom: 0;\n}\n\n.identity-popup-section {\n  margin-inline: var(--arrowpanel-menuitem-margin-inline);\n  padding-inline: var(--arrowpanel-menuitem-padding-inline);\n}\n\n.identity-popup-section.indented {\n  /* Align with the text displayed following the lock icon, in the connection status button above.\n     16px is the icon size and 8px is the inline-start padding of the text. */\n  padding-inline: calc(var(--arrowpanel-menuitem-padding-inline) + 16px + 8px);\n}\n\n.identity-popup-security-connection {\n  list-style-image: url(chrome://global/skin/icons/security-broken.svg);\n  margin: var(--arrowpanel-menuitem-margin);\n  padding: var(--arrowpanel-menuitem-padding);\n  -moz-context-properties: fill;\n  min-height: 24px;\n}\n\n#identity-popup[connection=chrome] .identity-popup-security-connection {\n  list-style-image: url(chrome://branding/content/icon48.png);\n}\n\n#identity-popup[connection=file] .identity-popup-security-connection {\n  list-style-image: url(chrome://global/skin/icons/page-portrait.svg);\n}\n\n#identity-popup[connection^=secure] .identity-popup-security-connection {\n  list-style-image: url(chrome://global/skin/icons/security.svg);\n}\n\n/* Use [isbroken] to make sure we don't show a warning lock on an http page. See Bug 1192162. */\n#identity-popup[ciphers=weak] .identity-popup-security-connection,\n#identity-popup[mixedcontent~=passive-loaded][isbroken] .identity-popup-security-connection {\n  list-style-image: url(chrome://global/skin/icons/security-warning.svg);\n  -moz-context-properties: fill, fill-opacity;\n}\n\n#identity-popup[connection=secure-cert-user-overridden] .identity-popup-security-connection,\n#identity-popup[connection=cert-error-page] .identity-popup-security-connection {\n  list-style-image: url(chrome://global/skin/icons/security-warning.svg);\n  fill: unset;\n}\n\n#identity-popup[connection=net-error-page] .identity-popup-security-connection {\n  list-style-image: url(chrome://global/skin/icons/info.svg);\n  fill: unset;\n}\n\n#identity-popup[mixedcontent~=active-loaded][isbroken] .identity-popup-security-connection {\n  list-style-image: url(chrome://browser/skin/controlcenter/mcb-disabled.svg);\n}\n\n#identity-popup[connection=extension] .identity-popup-security-connection {\n  list-style-image: url(chrome://mozapps/skin/extensions/extension.svg);\n}\n\n.identity-popup-security-connection-icon {\n  width: 16px;\n  height: 16px;\n}\n\n.identity-popup-connection-secure.security-view,\n.identity-popup-connection-secure.upgraded,\n.identity-popup-connection-not-secure.security-view {\n  padding-inline-start: 8px;\n}\n\n#identity-popup-securityView-extended-info > button,\n#identity-popup-securityView-extended-info > hbox > .text-link,\n#identity-popup-content-verifier,\n#identity-popup-content-verifier ~ description,\n#identity-popup-content-owner-label {\n  margin-block: 0.5em;\n}\n\n#identity-popup-securityView-extended-info > .identity-popup-warning-box {\n  font-weight: 600;\n}\n\n#identity-popup-securityView-extended-info > .identity-popup-warning-box > label {\n  display: inline-block;\n}\n\n#identity-popup-securityView-extended-info > button {\n  margin-inline: 0;\n}\n\n@media (-moz-platform: macos) {\n  #identity-popup-securityView-extended-info > button {\n    min-height: 30px;\n  }\n\n  #identity-popup-securityView-extended-info > button:focus-visible {\n    outline: var(--focus-outline);\n  }\n}\n\n#identity-popup-content-verifier-unknown > label {\n  display: inline;\n}\n\n/* CONTENT BLOCKING / TRACKING PROTECTION */\n\n#protections-popup-sendReportView-heading,\n#protections-popup-sendReportView-body,\n#protections-popup-siteNotWorkingView-body {\n  padding: var(--vertical-section-padding) var(--horizontal-padding);\n}\n\n.protections-popup-sendReportView-collection-section {\n  margin-bottom: 16px;\n}\n\n#protections-popup-sendReportView-collection-url {\n  appearance: none;\n  border: none;\n  margin: 4px 0;\n}\n\n#protections-popup-sendReportView-collection-comments {\n  height: 120px;\n  resize: vertical;\n}\n\n.protections-popup-sendReportView-collection-section label {\n  margin-bottom: 2px;\n}\n\n#protections-popup-sendReportView-report-error {\n  margin-bottom: 24px;\n  color: #d74345;\n}\n\n#protections-popup-not-blocking-section-why:hover,\n#protections-popup-show-report-stack:hover > .protections-popup-footer-button {\n  background-color: var(--panel-item-hover-bgcolor);\n}\n\n#protections-popup-show-report-stack:hover:active > .protections-popup-footer-button {\n  background-color: var(--panel-item-active-bgcolor);\n}\n\n/* This subview could get filled with a lot of trackers, set a maximum size\n * and allow it to scroll vertically.*/\n#protections-popup-socialblockView,\n#protections-popup-cookiesView,\n#protections-popup-trackersView {\n  max-height: calc(600px + var(--height-offset));\n}\n\n#protections-popup-trackersView-list.empty {\n  align-items: center;\n  justify-content: center;\n}\n\n.protections-popup-empty-label {\n  color: var(--panel-description-color);\n}\n\n.protections-popup-trackersView-empty-image {\n  width: 48px;\n  height: 48px;\n  -moz-context-properties: fill;\n  margin-bottom: 16px;\n}\n\n#protections-popup-cookiesView .protections-popup-empty-label {\n  margin-inline-start: 24px;\n  margin-block: 2px 4px;\n}\n\n.protections-popup-cookiesView-list-header {\n  color: var(--panel-description-color);\n  margin: 5px 0;\n}\n\n#protections-popup-cookiesView-list > .protections-popup-cookiesView-list-section:only-of-type > .protections-popup-cookiesView-list-header {\n  display: none;\n}\n\n.protections-popup-list {\n  padding: 5px 16px !important; /* override panelUI-shared.css */\n}\n\n.protections-popup-list-item {\n  display: flex;\n  margin: 5px 0;\n}\n\n.protections-popup-list-host-label {\n  direction: ltr;\n  text-align: match-parent;\n}\n\n/* Special alignment for items which include a state label (e.g. \"Allowed\") */\n.protections-popup-list-item-with-state > label {\n  margin: auto 0;\n}\n.protections-popup-list-item-with-state {\n  justify-content: space-between;\n}\n\n/* Content Blocking categories */\n\n#protections-popup-no-trackers-found-description {\n  margin: 4.85em 7.25em;\n  font-size: 1.1em;\n  text-align: center;\n  color: var(--panel-description-color);\n}\n\n.protections-popup-section-header {\n  color: var(--panel-description-color);\n}\n\n:root[uidensity=\"compact\"] .protections-popup-section-header {\n  margin-block: 4px;\n}\n\n#tracking-protection-container > tooltip {\n  max-width: var(--popup-width);\n}\n/*\n * The category list is split into two sections: \"Blocking\" and \"Not Blocking\",\n * with five different category items distributed between them at runtime.\n * To achieve this, we use a grid layout with 12 rows: one row for each header\n * label and five rows in each section for the items.\n * Items with the \"blocked\" class are assigned rows 2-6, and those without\n * are assigned rows 8-12, with the headers taking rows 1 and 7.\n */\n\n#protections-popup-no-trackers-found-description:not([hidden]) ~ #protections-popup-content {\n  display: none;\n}\n\n#protections-popup-not-blocking-section-why {\n  border-radius: 2px;\n}\n\n#protections-popup-not-blocking-section-why:hover {\n  outline: 4px solid var(--panel-item-hover-bgcolor);\n}\n\n.trackers-icon {\n  list-style-image: url(chrome://browser/skin/canvas.svg);\n}\n\n.socialblock-icon {\n  list-style-image: url(chrome://browser/skin/thumb-down.svg);\n}\n\n.thirdpartycookies-icon {\n  list-style-image: url(chrome://browser/skin/controlcenter/3rdpartycookies.svg);\n}\n\n.cryptominers-icon {\n  list-style-image: url(chrome://browser/skin/controlcenter/cryptominers.svg);\n}\n\n.fingerprinters-icon {\n  list-style-image: url(chrome://browser/skin/fingerprint.svg);\n}\n\n/* PERMISSIONS */\n\n.permission-popup-permission-item {\n  min-height: 24px;\n}\n\n.protections-popup-category[uidisabled] {\n  display: none;\n}\n\n#permission-popup-storage-access-permission-list-header {\n  padding-inline-end: 8px;\n}\n\n.permission-popup-permission-item,\n#permission-popup-storage-access-permission-list-header {\n  margin-block: 0.25em;\n}\n\n#permission-popup-permission-reload-hint,\n#permission-popup-permission-empty-hint {\n  margin-top: 8px;\n}\n\n.permission-popup-permission-list-anchor[anchorfor=\"3rdPartyStorage\"] > vbox:only-child {\n  display: none;\n}\n\n#permission-popup-storage-access-permission-list-hint {\n  margin-top: 0.25em;\n  color: var(--panel-description-color);\n}\n\n#permission-popup-storage-access-permission-list-hint,\n#permission-popup-storage-access-permission-learn-more {\n  /* Matches offset for items - 16px icon + 8px margin */\n  margin-inline-start: calc(16px + 8px);\n}\n\n.permission-popup-permission-icon {\n  width: 16px;\n  height: 16px;\n}\n\n.permission-popup-permission-label,\n.permission-popup-permission-header-label {\n  margin-inline-start: 8px;\n}\n\n.permission-popup-permission-label-subitem {\n  /* Align label with other labels with icon. */\n  /* icon width + icon inline margin + label inline margin */\n  margin-inline-start: calc(16px + 3px + 10px);\n}\n\n.permission-popup-permission-state-label {\n  margin-inline-end: 5px;\n  text-align: end;\n}\n\n.permission-popup-permission-remove-button {\n  appearance: none;\n  min-width: auto;\n  margin: 0;\n  margin-inline-start: 2px;\n  border-width: 0;\n  padding: 2px;\n  padding-inline-end: 6px;\n  background-color: var(--button-bgcolor);\n  color: var(--button-color);\n  border-radius: 4px;\n}\n\n.permission-popup-permission-remove-button > .button-box > .button-icon {\n  margin: 0;\n  width: 12px;\n  height: 12px;\n  list-style-image: url(chrome://global/skin/icons/close.svg);\n  -moz-context-properties: fill;\n  fill: currentColor;\n}\n\n.permission-popup-permission-remove-button > .button-box > .button-text {\n  display: none;\n}\n\n.permission-popup-permission-remove-button:not(:focus-visible):hover {\n  background-color: var(--button-hover-bgcolor);\n}\n\n.permission-popup-permission-remove-button:not(:focus-visible):hover:active {\n  background-color: var(--button-active-bgcolor)\n}\n\n#protections-popup[hasException] .protections-popup-tp-switch-on-header,\n#protections-popup:not([hasException]) .protections-popup-tp-switch-off-header {\n  display: none;\n}\n\n#protections-popup-cookie-banner-section[hasException] .protections-popup-cookie-banner-switch-on-header,\n#protections-popup-cookie-banner-section:not([hasException]) .protections-popup-cookie-banner-switch-off-header {\n  display: none;\n}\n\n#protections-popup-toast-panel-tp-on-desc,\n#protections-popup-toast-panel-tp-off-desc {\n  display: none;\n}\n\n#protections-popup:not([hasException])[toast] #protections-popup-toast-panel-tp-on-desc,\n#protections-popup[hasException][toast] #protections-popup-toast-panel-tp-off-desc {\n  display: revert;\n}\n\n.protections-popup-tp-switch-label-box,\n.protections-popup-tp-switch-box {\n  justify-content: center;\n}\n\n.protections-popup-switch-section-header {\n  min-height: 40px;\n}\n\n.protections-popup-switch-header {\n  font-weight: 600;\n}\n\n.protections-popup-tp-switch {\n  appearance: none;\n  box-sizing: border-box;\n  min-width: 30px;\n  border-radius: 10px;\n  background-color: var(--button-bgcolor);\n  border: 1px solid hsla(210,4%,10%,.14);\n  margin-block: 4px;\n  margin-inline-start: 1px;\n  padding: 2px;\n  padding-inline-end: 0;\n  transition: padding .2s ease;\n}\n\n.protections-popup-tp-switch::before {\n  position: relative;\n  display: block;\n  content: \"\";\n  width: 10px;\n  height: 10px;\n  border-radius: 10px;\n  background: white;\n  outline: 1px solid var(--panel-separator-color);\n}\n\n.protections-popup-tp-switch[enabled] {\n  background-color: var(--button-primary-bgcolor);\n  border-color: var(--button-primary-hover-bgcolor);\n  /* Push the toggle to the right. */\n  padding-inline-start: 16px;\n}\n\n.protections-popup-tp-switch[enabled]:hover {\n  background-color: var(--button-primary-hover-bgcolor);\n  border-color: var(--button-primary-active-bgcolor);\n}\n\n.protections-popup-tp-switch[enabled]:hover:active {\n  background-color: var(--button-primary-active-bgcolor);\n  border-color: var(--button-primary-active-bgcolor);\n}\n\n.protections-popup-tp-switch:not([enabled]):hover {\n  background-color: var(--button-hover-bgcolor);\n}\n\n.protections-popup-tp-switch:not([enabled]):hover:active {\n  background-color: var(--button-active-bgcolor);\n}\n\n#protections-popup-siteNotWorkingView-body-issue-list {\n  padding-inline-start: 1em;\n}\n\n/* Protection popup footer categories */\n\n#protections-popup-trackers-blocked-counter-box {\n  margin: var(--arrowpanel-menuitem-margin);\n  padding: var(--arrowpanel-menuitem-padding);\n  visibility: hidden;\n  opacity: 0;\n  transition: opacity 200ms linear;\n  justify-self: end;\n}\n\n#protections-popup-trackers-blocked-counter-box[showing] {\n  visibility: visible;\n  opacity: 1;\n}\n\n#protections-popup-trackers-blocked-counter-description,\n#protections-popup-footer-protection-type-label {\n  color: var(--panel-description-color);\n}\n\n.protections-popup-description > description {\n  margin: 10px 16px;\n}\n\n#protections-popup:not([milestone]) #protections-popup-milestones,\n#protections-popup:not([milestone]) #protections-popup-milestones-separator {\n  display: none;\n}\n\n#protections-popup-milestones-content {\n  background-color: var(--panel-banner-item-background-color);\n}\n\n/* The padding-block for menuitems is set to 0 in compact mode which, with the\n * shield icon being bigger than a usual menuitem, makes the item look crowded\n * even for compact mode. */\n:root[uidensity=\"compact\"] #protections-popup-milestones-content {\n  padding-block: 4px;\n}\n\n#protections-popup-milestones-content:hover {\n  background-color: var(--panel-banner-item-hover-bgcolor);\n}\n\n#protections-popup-milestones-content:hover:active {\n  background-color: var(--panel-banner-item-active-bgcolor);\n}\n\n#protections-popup-milestones-text {\n  font-weight: 600;\n}\n\n#protections-popup-milestones-illustration {\n  list-style-image: url(chrome://browser/skin/controlcenter/etp-milestone.svg);\n  -moz-context-properties: fill, stroke;\n  margin-inline-start: var(--horizontal-padding);\n  margin-inline-end: 4px;\n  height: 40px;\n  width: 32px;\n}\n\n#protections-popup[milestone] #protections-popup-milestones-illustration {\n  fill: #45278d;\n  stroke: #321c64;\n}\n\n#protections-popup[milestone=\"5000\"] #protections-popup-milestones-illustration {\n  fill: #5a29cb;\n  stroke: #45278d;\n}\n\n#protections-popup[milestone=\"10000\"] #protections-popup-milestones-illustration {\n  fill: #7641e5;\n  stroke: #5a29cb;\n}\n\n#protections-popup[milestone=\"25000\"] #protections-popup-milestones-illustration {\n  fill: #e31587;\n  stroke: #c60084;\n}\n\n#protections-popup[milestone=\"50000\"] #protections-popup-milestones-illustration {\n  fill: #ff298a;\n  stroke: #e31587;\n}\n\n#protections-popup[milestone=\"100000\"] #protections-popup-milestones-illustration {\n  fill: #ffa436;\n  stroke: #e27f2e;\n}\n\n#protections-popup[milestone=\"500000\"] #protections-popup-milestones-illustration {\n  fill: #ffd567;\n  stroke: #ffbd4f;\n}\n\n.permission-popup-section {\n  padding-bottom: 12px;\n}\n\n#permission-popup-menulist {\n  padding-inline: 12px 6px;\n}\n\n.protections-popup-section-header,\n.protections-popup-switch-section-header,\n#protections-popup-siteNotWorkingView-header {\n  padding: var(--arrowpanel-menuitem-padding);\n  margin: var(--arrowpanel-menuitem-margin);\n}\n\n.identity-popup-expander:focus-visible,\n.permission-popup-permission-remove-button:focus-visible {\n  outline: var(--focus-outline);\n}\n\n@media (-moz-platform: linux) {\n  .identity-popup-expander > .button-box,\n  .permission-popup-permission-remove-button > .button-box {\n    appearance: none;\n  }\n}\n\n.protections-popup-tp-switch:focus-visible {\n  outline: var(--focus-outline);\n  outline-offset: var(--focus-outline-offset);\n}\n\n#blocked-popup-indicator-item,\n#geo-access-indicator-item {\n  margin-top: -2px;\n  margin-inline-start: 16px;\n}\n\n#geo-access-indicator-item {\n  font-size: 0.8em;\n  color: var(--panel-description-color);\n}\n\n/** Shim-allow warning and indicator icons **/\n\n.protections-popup-shim-allow-hint {\n  padding: 0 2em;\n  margin-block-end: 10px;\n}\n\n.protections-popup-shim-allow-hint-icon,\n.protections-popup-list-host-shim-allow-indicator {\n  -moz-context-properties: fill;\n  background-image: url(\"chrome://global/skin/icons/info-filled.svg\");\n  background-repeat: no-repeat;\n  background-position: center;\n\n  fill: #0090ED;\n}\n\n.protections-popup-shim-allow-hint-icon {\n  width: 24px;\n  height: 24px;\n\n  background-size: contain;\n  margin-inline-end: 0.5em;\n}\n\n.protections-popup-list-host-shim-allow-indicator {\n  width: 16px;\n}\n\n:root[lwt-popup-brighttext] .protections-popup-shim-allow-hint-icon,\n:root[lwt-popup-brighttext] .protections-popup-list-host-shim-allow-indicator {\n  fill: #80EBFF;\n}\n\n.protections-popup-shim-allow-hint-icon {\n  margin-inline-end: 0.5em;\n}\n\n.protections-popup-list-host-shim-allow-indicator {\n  margin-inline-start: 0.5em;\n  min-width: 16px;\n}\n\n#cookieBannerView-disable-site,\n#cookieBannerView-enable-site {\n  font-weight: 600;\n}\n\n.protections-popup-cookieBannerView-footer {\n  margin-top: auto;\n}\n\n\n/* Cookie banner state toggles for the popup menu item */\n\n#protections-popup-cookie-banner-section:not([data-state=\"detected\"]) description#protections-popup-cookie-banner-detected,\n#protections-popup-cookie-banner-section:not([data-state=\"undetected\"]) description#protections-popup-cookie-banner-undetected,\n#protections-popup-cookie-banner-section:not([data-state=\"site-disabled\"]) description#protections-popup-cookie-banner-site-disabled {\n  display: none;\n}\n\n/* Cookie banner state toggles for the subview: if the state is detected, show\n * the disable controls; if the state is site-disabled, show the enable controls. */\n#protections-popup-cookieBannerView:not([data-state=\"detected\"]) #protections-popup-cookieBannerView-disable-button,\n#protections-popup-cookieBannerView:not([data-state=\"detected\"]) description#cookieBannerView-disable-site,\n#protections-popup-cookieBannerView:not([data-state=\"detected\"]) description#cookieBannerView-disable-site-warning,\n#protections-popup-cookieBannerView:not([data-state=\"site-disabled\"]) #protections-popup-cookieBannerView-enable-button,\n#protections-popup-cookieBannerView:not([data-state=\"site-disabled\"]) description#cookieBannerView-enable-site,\n#protections-popup-cookieBannerView:not([data-state=\"site-disabled\"]) description#cookieBannerView-enable-site-description {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./../../themes/shared/controlcenter/panel.css"],"names":[],"mappings":"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","sourcesContent":["/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n/* Hide all conditional elements by default. */\n:is([when-connection],[when-customroot],[when-mixedcontent],[when-ciphers],[when-httpsonlystatus]) {\n  display: none;\n}\n\n#identity-popup,\n#permission-popup,\n#protections-popup {\n  --popup-width: 30.81em;\n  /* Set default fill for icons in the identity popup.\n     Individual icons can override this. */\n  fill: currentColor;\n  --horizontal-padding: calc(var(--arrowpanel-menuitem-padding-inline) * 2);\n  --vertical-section-padding: 0.9em;\n  --height-offset: 0px;\n  font: menu;\n}\n\n#protections-popup[toast] {\n  --popup-width: 27.12em;\n}\n\n#protections-popup[infoMessageShowing] {\n  --height-offset: 260px;\n}\n\n/* This is used by screenshots tests to hide intermittently different\n * identity popup shadows (see bug 1425253). */\n#identity-popup.no-shadow,\n#permission-popup.no-shadow {\n  -moz-window-shadow: none;\n}\n\n/* Show the right elements for the right connection states. */\n#identity-popup[customroot=true] [when-customroot=true],\n#identity-popup[connection=not-secure] [when-connection~=not-secure],\n#identity-popup[connection=secure-cert-user-overridden] [when-connection~=secure-cert-user-overridden],\n#identity-popup[connection=secure-ev] [when-connection~=secure-ev],\n#identity-popup[connection=secure] [when-connection~=secure],\n#identity-popup[connection=chrome] [when-connection~=chrome],\n#identity-popup[connection=file] [when-connection~=file],\n#identity-popup[connection=extension] [when-connection~=extension],\n#identity-popup[connection=cert-error-page] [when-connection~=cert-error-page],\n#identity-popup[connection=net-error-page] [when-connection~=net-error-page],\n#identity-popup[connection=https-only-error-page] [when-connection~=https-only-error-page],\n/* Show weak cipher messages when needed. */\n#identity-popup[ciphers=weak] [when-ciphers~=weak],\n/* Show mixed content warnings when needed */\n#identity-popup[mixedcontent~=active-loaded] [when-mixedcontent=active-loaded],\n#identity-popup[mixedcontent~=passive-loaded]:not([mixedcontent~=active-loaded]) [when-mixedcontent=passive-loaded],\n#identity-popup[mixedcontent~=active-blocked]:not([mixedcontent~=passive-loaded]) [when-mixedcontent=active-blocked],\n/* Show the right elements when there is mixed passive content loaded and active blocked. */\n#identity-popup[mixedcontent~=active-blocked][mixedcontent~=passive-loaded] [when-mixedcontent~=active-blocked][when-mixedcontent~=passive-loaded],\n/* HTTPS-Only Mode */\n#identity-popup[httpsonlystatus=exception] [when-httpsonlystatus~=exception],\n#identity-popup[httpsonlystatus=upgraded] [when-httpsonlystatus~=upgraded],\n#identity-popup[httpsonlystatus=failed-top] [when-httpsonlystatus~=failed-top],\n#identity-popup[httpsonlystatus=failed-sub] [when-httpsonlystatus~=failed-sub],\n/* Show 'disable MCB' button always when there is mixed active content blocked. */\n#identity-popup-securityView-extended-info[mixedcontent~=active-blocked] > button[when-mixedcontent=active-blocked] {\n  display: revert;\n}\n\n/* Hide 'not secure' message in subview when weak cipher or mixed content messages are shown. */\n#identity-popup-securityView-extended-info:is([mixedcontent],[ciphers]) > description[when-connection=not-secure],\n/* Hide 'passive-loaded (only)' message when there is mixed passive content loaded and active blocked. */\n#identity-popup-securityView-extended-info[mixedcontent~=passive-loaded][mixedcontent~=active-blocked] > description[when-mixedcontent=passive-loaded] {\n  display: none;\n}\n\n/* Make sure hidden elements don't accidentally become visible from one of the\n   above selectors (see Bug 1194258) */\n#identity-popup [hidden] {\n  display: none !important;\n}\n\n#identity-popup-mainView,\n#permission-popup-mainView,\n#protections-popup-mainView {\n  min-width: var(--popup-width);\n  max-width: var(--popup-width);\n}\n\n#protections-popup[toast] #protections-popup-mainView > :not(#protections-popup-mainView-panel-header-section),\n#protections-popup[toast] #protections-popup-mainView-panel-header-section > :not(#protections-popup-mainView-panel-header),\n#protections-popup[toast] #protections-popup-mainView-panel-header > :is(.panel-info-button, #protections-popup-main-header-label) {\n  /* Hide all elements in the panel except for the toast descriptions */\n  display: none;\n}\n\n#protections-popup[toast] #protections-popup-mainView-panel-header {\n  min-height: unset; /* revert panelUI-shared.css */\n}\n\n#identity-popup-security-description > description {\n  font-weight: 600;\n  margin-top: 0.5em;\n}\n\n#identity-popup-security-httpsonlymode {\n  margin-top: 1em;\n}\n\n#identity-popup-security-httpsonlymode-menulist {\n  width: 11em;\n  margin: 0.5em 0;\n}\n\n#identity-popup-security-httpsonlymode-info {\n  font-size: 0.85em;\n  color: var(--panel-description-color);\n}\n\n#identity-popup-security-httpsonlymode-info > description {\n  margin-bottom: 0.5em;\n}\n\n#permission-popup-permissions-content {\n  padding-inline: 1.25em;\n  min-width: 0;\n}\n\n/* CONTENT */\n\n:where(#protections-popup, #identity-popup) :is(description, label) {\n  margin: 0;\n}\n\n#protections-popup .panel-header > h1 > span,\n#permission-popup .panel-header > h1 > span,\n#identity-popup .panel-header > h1 > span {\n  /* This is needed for the overflow-wrap to work correctly when the domain name is really long. */\n  max-width: calc(var(--popup-width) - 2 * var(--arrowpanel-menuitem-margin-inline));\n  overflow-wrap: break-word;\n}\n\n#protections-popup .panel-header > h1 > span {\n  /* The protections popup panel header text needs a different calculation because it contains an info button.\n   * icon-full-width and icon-margin are included twice to compensate for the margin-inline-start of the text,\n   * used to center it even if the header includes a info button. See .panel-header-with-info-button */\n  max-width: calc(var(--popup-width)\n                  - var(--arrowpanel-menuitem-margin-inline) * 2\n                  - var(--arrowpanel-header-info-icon-full-width) * 2);\n}\n\n#identity-popup .panel-header > .subviewbutton-back + h1 > span {\n  /* Same idea as above, but in the identity popup when there's a back button. */\n  max-width: calc(var(--popup-width)\n                  - var(--arrowpanel-menuitem-margin-inline) * 2\n                  - var(--arrowpanel-header-back-icon-full-width) * 2);\n}\n\n#protections-popup:not([infoMessageShowing]) #protections-popup-mainView-panel-header-section + toolbarseparator {\n  display: none;\n}\n\n#protections-popup-mainView-panel-header-section {\n  /* Don't display the info message on top of the panel content while it fades in and out */\n  overflow: hidden;\n}\n\n#permission-popup-permissions-content > description,\n#protections-popup-content > description {\n  color: var(--panel-description-color);\n}\n\n/* This element needs the pre-wrap because we add newlines to it in the code. */\n#identity-popup-content-supplemental {\n  white-space: pre-wrap;\n}\n\n/* SECURITY */\n\n#identity-popup[mixedcontent~=active-loaded] .identity-popup-connection-not-secure,\n#identity-popup:not([mixedcontent]) .identity-popup-connection-not-secure {\n  font-weight: bold;\n}\n\n#identity-popup-mainView > .panel-subview-body {\n  padding-bottom: var(--panel-subview-body-padding-block);\n}\n\n#identity-popup-mainView[footerVisible=\"true\"] > .panel-subview-body {\n  padding-bottom: 0;\n}\n\n.identity-popup-section {\n  margin-inline: var(--arrowpanel-menuitem-margin-inline);\n  padding-inline: var(--arrowpanel-menuitem-padding-inline);\n}\n\n.identity-popup-section.indented {\n  /* Align with the text displayed following the lock icon, in the connection status button above.\n     16px is the icon size and 8px is the inline-start padding of the text. */\n  padding-inline: calc(var(--arrowpanel-menuitem-padding-inline) + 16px + 8px);\n}\n\n.identity-popup-security-connection {\n  list-style-image: url(chrome://global/skin/icons/security-broken.svg);\n  margin: var(--arrowpanel-menuitem-margin);\n  padding: var(--arrowpanel-menuitem-padding);\n  -moz-context-properties: fill;\n  min-height: 24px;\n}\n\n#identity-popup[connection=chrome] .identity-popup-security-connection {\n  list-style-image: url(chrome://branding/content/icon48.png);\n}\n\n#identity-popup[connection=file] .identity-popup-security-connection {\n  list-style-image: url(chrome://global/skin/icons/page-portrait.svg);\n}\n\n#identity-popup[connection^=secure] .identity-popup-security-connection {\n  list-style-image: url(chrome://global/skin/icons/security.svg);\n}\n\n/* Use [isbroken] to make sure we don't show a warning lock on an http page. See Bug 1192162. */\n#identity-popup[ciphers=weak] .identity-popup-security-connection,\n#identity-popup[mixedcontent~=passive-loaded][isbroken] .identity-popup-security-connection {\n  list-style-image: url(chrome://global/skin/icons/security-warning.svg);\n  -moz-context-properties: fill, fill-opacity;\n}\n\n#identity-popup[connection=secure-cert-user-overridden] .identity-popup-security-connection,\n#identity-popup[connection=cert-error-page] .identity-popup-security-connection {\n  list-style-image: url(chrome://global/skin/icons/security-warning.svg);\n  fill: unset;\n}\n\n#identity-popup[connection=net-error-page] .identity-popup-security-connection {\n  list-style-image: url(chrome://global/skin/icons/info.svg);\n  fill: unset;\n}\n\n#identity-popup[mixedcontent~=active-loaded][isbroken] .identity-popup-security-connection {\n  list-style-image: url(chrome://browser/skin/controlcenter/mcb-disabled.svg);\n}\n\n#identity-popup[connection=extension] .identity-popup-security-connection {\n  list-style-image: url(chrome://mozapps/skin/extensions/extension.svg);\n}\n\n.identity-popup-security-connection-icon {\n  width: 16px;\n  height: 16px;\n}\n\n.identity-popup-connection-secure.security-view,\n.identity-popup-connection-secure.upgraded,\n.identity-popup-connection-not-secure.security-view {\n  padding-inline-start: 8px;\n}\n\n#identity-popup-securityView-extended-info > button,\n#identity-popup-securityView-extended-info > hbox > .text-link,\n#identity-popup-content-verifier,\n#identity-popup-content-verifier ~ description,\n#identity-popup-content-owner-label {\n  margin-block: 0.5em;\n}\n\n#identity-popup-securityView-extended-info > .identity-popup-warning-box {\n  font-weight: 600;\n}\n\n#identity-popup-securityView-extended-info > .identity-popup-warning-box > label {\n  display: inline-block;\n}\n\n#identity-popup-securityView-extended-info > button {\n  margin-inline: 0;\n}\n\n@media (-moz-platform: macos) {\n  #identity-popup-securityView-extended-info > button {\n    min-height: 30px;\n  }\n\n  #identity-popup-securityView-extended-info > button:focus-visible {\n    outline: var(--focus-outline);\n  }\n}\n\n#identity-popup-content-verifier-unknown > label {\n  display: inline;\n}\n\n/* CONTENT BLOCKING / TRACKING PROTECTION */\n\n#protections-popup-sendReportView-heading,\n#protections-popup-sendReportView-body,\n#protections-popup-siteNotWorkingView-body {\n  padding: var(--vertical-section-padding) var(--horizontal-padding);\n}\n\n.protections-popup-sendReportView-collection-section {\n  margin-bottom: 16px;\n}\n\n#protections-popup-sendReportView-collection-url {\n  appearance: none;\n  border: none;\n  margin: 4px 0;\n}\n\n#protections-popup-sendReportView-collection-comments {\n  height: 120px;\n  resize: vertical;\n}\n\n.protections-popup-sendReportView-collection-section label {\n  margin-bottom: 2px;\n}\n\n#protections-popup-sendReportView-report-error {\n  margin-bottom: 24px;\n  color: #d74345;\n}\n\n#protections-popup-not-blocking-section-why:hover,\n#protections-popup-show-report-stack:hover > .protections-popup-footer-button {\n  background-color: var(--panel-item-hover-bgcolor);\n}\n\n#protections-popup-show-report-stack:hover:active > .protections-popup-footer-button {\n  background-color: var(--panel-item-active-bgcolor);\n}\n\n/* This subview could get filled with a lot of trackers, set a maximum size\n * and allow it to scroll vertically.*/\n#protections-popup-socialblockView,\n#protections-popup-cookiesView,\n#protections-popup-trackersView {\n  max-height: calc(600px + var(--height-offset));\n}\n\n#protections-popup-trackersView-list.empty {\n  align-items: center;\n  justify-content: center;\n}\n\n.protections-popup-empty-label {\n  color: var(--panel-description-color);\n}\n\n.protections-popup-trackersView-empty-image {\n  width: 48px;\n  height: 48px;\n  -moz-context-properties: fill;\n  margin-bottom: 16px;\n}\n\n#protections-popup-cookiesView .protections-popup-empty-label {\n  margin-inline-start: 24px;\n  margin-block: 2px 4px;\n}\n\n.protections-popup-cookiesView-list-header {\n  color: var(--panel-description-color);\n  margin: 5px 0;\n}\n\n#protections-popup-cookiesView-list > .protections-popup-cookiesView-list-section:only-of-type > .protections-popup-cookiesView-list-header {\n  display: none;\n}\n\n.protections-popup-list {\n  padding: 5px 16px !important; /* override panelUI-shared.css */\n}\n\n.protections-popup-list-item {\n  display: flex;\n  margin: 5px 0;\n}\n\n.protections-popup-list-host-label {\n  direction: ltr;\n  text-align: match-parent;\n}\n\n/* Special alignment for items which include a state label (e.g. \"Allowed\") */\n.protections-popup-list-item-with-state > label {\n  margin: auto 0;\n}\n.protections-popup-list-item-with-state {\n  justify-content: space-between;\n}\n\n/* Content Blocking categories */\n\n#protections-popup-no-trackers-found-description {\n  margin: 4.85em 7.25em;\n  font-size: 1.1em;\n  text-align: center;\n  color: var(--panel-description-color);\n}\n\n.protections-popup-section-header {\n  color: var(--panel-description-color);\n}\n\n:root[uidensity=\"compact\"] .protections-popup-section-header {\n  margin-block: 4px;\n}\n\n#tracking-protection-container > tooltip {\n  max-width: var(--popup-width);\n}\n/*\n * The category list is split into two sections: \"Blocking\" and \"Not Blocking\",\n * with five different category items distributed between them at runtime.\n * To achieve this, we use a grid layout with 12 rows: one row for each header\n * label and five rows in each section for the items.\n * Items with the \"blocked\" class are assigned rows 2-6, and those without\n * are assigned rows 8-12, with the headers taking rows 1 and 7.\n */\n\n#protections-popup-no-trackers-found-description:not([hidden]) ~ #protections-popup-content {\n  display: none;\n}\n\n#protections-popup-not-blocking-section-why {\n  border-radius: 2px;\n}\n\n#protections-popup-not-blocking-section-why:hover {\n  outline: 4px solid var(--panel-item-hover-bgcolor);\n}\n\n.trackers-icon {\n  list-style-image: url(chrome://browser/skin/canvas.svg);\n}\n\n.socialblock-icon {\n  list-style-image: url(chrome://browser/skin/thumb-down.svg);\n}\n\n.thirdpartycookies-icon {\n  list-style-image: url(chrome://browser/skin/controlcenter/3rdpartycookies.svg);\n}\n\n.cryptominers-icon {\n  list-style-image: url(chrome://browser/skin/controlcenter/cryptominers.svg);\n}\n\n.fingerprinters-icon {\n  list-style-image: url(chrome://browser/skin/fingerprint.svg);\n}\n\n/* PERMISSIONS */\n\n.permission-popup-permission-item {\n  min-height: 24px;\n}\n\n.protections-popup-category[uidisabled] {\n  display: none;\n}\n\n#permission-popup-storage-access-permission-list-header {\n  padding-inline-end: 8px;\n}\n\n.permission-popup-permission-item,\n#permission-popup-storage-access-permission-list-header {\n  margin-block: 0.25em;\n}\n\n#permission-popup-permission-reload-hint,\n#permission-popup-permission-empty-hint {\n  margin-top: 8px;\n}\n\n.permission-popup-permission-list-anchor[anchorfor=\"3rdPartyStorage\"] > vbox:only-child {\n  display: none;\n}\n\n#permission-popup-storage-access-permission-list-hint {\n  margin-top: 0.25em;\n  color: var(--panel-description-color);\n}\n\n#permission-popup-storage-access-permission-list-hint,\n#permission-popup-storage-access-permission-learn-more {\n  /* Matches offset for items - 16px icon + 8px margin */\n  margin-inline-start: calc(16px + 8px);\n}\n\n.permission-popup-permission-icon {\n  width: 16px;\n  height: 16px;\n}\n\n.permission-popup-permission-label,\n.permission-popup-permission-header-label {\n  margin-inline-start: 8px;\n}\n\n.permission-popup-permission-label-subitem {\n  /* Align label with other labels with icon. */\n  /* icon width + icon inline margin + label inline margin */\n  margin-inline-start: calc(16px + 3px + 10px);\n}\n\n.permission-popup-permission-state-label {\n  margin-inline-end: 5px;\n  text-align: end;\n}\n\n.permission-popup-permission-remove-button {\n  appearance: none;\n  min-width: auto;\n  margin: 0;\n  margin-inline-start: 2px;\n  border-width: 0;\n  padding: 2px;\n  padding-inline-end: 6px;\n  background-color: var(--button-bgcolor);\n  color: var(--button-color);\n  border-radius: 4px;\n}\n\n.permission-popup-permission-remove-button > .button-box > .button-icon {\n  margin: 0;\n  width: 12px;\n  height: 12px;\n  list-style-image: url(chrome://global/skin/icons/close.svg);\n  -moz-context-properties: fill;\n  fill: currentColor;\n}\n\n.permission-popup-permission-remove-button > .button-box > .button-text {\n  display: none;\n}\n\n.permission-popup-permission-remove-button:not(:focus-visible):hover {\n  background-color: var(--button-hover-bgcolor);\n}\n\n.permission-popup-permission-remove-button:not(:focus-visible):hover:active {\n  background-color: var(--button-active-bgcolor)\n}\n\n#protections-popup[hasException] .protections-popup-tp-switch-on-header,\n#protections-popup:not([hasException]) .protections-popup-tp-switch-off-header {\n  display: none;\n}\n\n#protections-popup-cookie-banner-section[hasException] .protections-popup-cookie-banner-switch-on-header,\n#protections-popup-cookie-banner-section:not([hasException]) .protections-popup-cookie-banner-switch-off-header {\n  display: none;\n}\n\n#protections-popup-toast-panel-tp-on-desc,\n#protections-popup-toast-panel-tp-off-desc {\n  display: none;\n}\n\n#protections-popup:not([hasException])[toast] #protections-popup-toast-panel-tp-on-desc,\n#protections-popup[hasException][toast] #protections-popup-toast-panel-tp-off-desc {\n  display: revert;\n}\n\n.protections-popup-tp-switch-label-box,\n.protections-popup-tp-switch-box {\n  justify-content: center;\n}\n\n.protections-popup-switch-section-header {\n  min-height: 40px;\n}\n\n.protections-popup-switch-header {\n  font-weight: 600;\n}\n\n.protections-popup-tp-switch {\n  appearance: none;\n  box-sizing: border-box;\n  min-width: 30px;\n  border-radius: 10px;\n  background-color: var(--button-bgcolor);\n  border: 1px solid hsla(210,4%,10%,.14);\n  margin-block: 4px;\n  margin-inline-start: 1px;\n  padding: 2px;\n  padding-inline-end: 0;\n  transition: padding .2s ease;\n}\n\n.protections-popup-tp-switch::before {\n  position: relative;\n  display: block;\n  content: \"\";\n  width: 10px;\n  height: 10px;\n  border-radius: 10px;\n  background: white;\n  outline: 1px solid var(--panel-separator-color);\n}\n\n.protections-popup-tp-switch[enabled] {\n  background-color: var(--button-primary-bgcolor);\n  border-color: var(--button-primary-hover-bgcolor);\n  /* Push the toggle to the right. */\n  padding-inline-start: 16px;\n}\n\n.protections-popup-tp-switch[enabled]:hover {\n  background-color: var(--button-primary-hover-bgcolor);\n  border-color: var(--button-primary-active-bgcolor);\n}\n\n.protections-popup-tp-switch[enabled]:hover:active {\n  background-color: var(--button-primary-active-bgcolor);\n  border-color: var(--button-primary-active-bgcolor);\n}\n\n.protections-popup-tp-switch:not([enabled]):hover {\n  background-color: var(--button-hover-bgcolor);\n}\n\n.protections-popup-tp-switch:not([enabled]):hover:active {\n  background-color: var(--button-active-bgcolor);\n}\n\n#protections-popup-siteNotWorkingView-body-issue-list {\n  padding-inline-start: 1em;\n}\n\n/* Protection popup footer categories */\n\n#protections-popup-trackers-blocked-counter-box {\n  margin: var(--arrowpanel-menuitem-margin);\n  padding: var(--arrowpanel-menuitem-padding);\n  visibility: hidden;\n  opacity: 0;\n  transition: opacity 200ms linear;\n  justify-self: end;\n}\n\n#protections-popup-trackers-blocked-counter-box[showing] {\n  visibility: visible;\n  opacity: 1;\n}\n\n#protections-popup-trackers-blocked-counter-description,\n#protections-popup-footer-protection-type-label {\n  color: var(--panel-description-color);\n}\n\n.protections-popup-description > description {\n  margin: 10px 16px;\n}\n\n#protections-popup:not([milestone]) #protections-popup-milestones,\n#protections-popup:not([milestone]) #protections-popup-milestones-separator {\n  display: none;\n}\n\n#protections-popup-milestones-content {\n  background-color: var(--panel-banner-item-background-color);\n}\n\n/* The padding-block for menuitems is set to 0 in compact mode which, with the\n * shield icon being bigger than a usual menuitem, makes the item look crowded\n * even for compact mode. */\n:root[uidensity=\"compact\"] #protections-popup-milestones-content {\n  padding-block: 4px;\n}\n\n#protections-popup-milestones-content:hover {\n  background-color: var(--panel-banner-item-hover-bgcolor);\n}\n\n#protections-popup-milestones-content:hover:active {\n  background-color: var(--panel-banner-item-active-bgcolor);\n}\n\n#protections-popup-milestones-text {\n  font-weight: 600;\n}\n\n#protections-popup-milestones-illustration {\n  list-style-image: url(chrome://browser/skin/controlcenter/etp-milestone.svg);\n  -moz-context-properties: fill, stroke;\n  margin-inline-start: var(--horizontal-padding);\n  margin-inline-end: 4px;\n  height: 40px;\n  width: 32px;\n}\n\n#protections-popup[milestone] #protections-popup-milestones-illustration {\n  fill: #45278d;\n  stroke: #321c64;\n}\n\n#protections-popup[milestone=\"5000\"] #protections-popup-milestones-illustration {\n  fill: #5a29cb;\n  stroke: #45278d;\n}\n\n#protections-popup[milestone=\"10000\"] #protections-popup-milestones-illustration {\n  fill: #7641e5;\n  stroke: #5a29cb;\n}\n\n#protections-popup[milestone=\"25000\"] #protections-popup-milestones-illustration {\n  fill: #e31587;\n  stroke: #c60084;\n}\n\n#protections-popup[milestone=\"50000\"] #protections-popup-milestones-illustration {\n  fill: #ff298a;\n  stroke: #e31587;\n}\n\n#protections-popup[milestone=\"100000\"] #protections-popup-milestones-illustration {\n  fill: #ffa436;\n  stroke: #e27f2e;\n}\n\n#protections-popup[milestone=\"500000\"] #protections-popup-milestones-illustration {\n  fill: #ffd567;\n  stroke: #ffbd4f;\n}\n\n.permission-popup-section {\n  padding-bottom: 12px;\n}\n\n#permission-popup-menulist {\n  padding-inline: 12px 6px;\n}\n\n.protections-popup-section-header,\n.protections-popup-switch-section-header,\n#protections-popup-siteNotWorkingView-header {\n  padding: var(--arrowpanel-menuitem-padding);\n  margin: var(--arrowpanel-menuitem-margin);\n}\n\n.identity-popup-expander:focus-visible,\n.permission-popup-permission-remove-button:focus-visible {\n  outline: var(--focus-outline);\n}\n\n@media (-moz-platform: linux) {\n  .identity-popup-expander > .button-box,\n  .permission-popup-permission-remove-button > .button-box {\n    appearance: none;\n  }\n}\n\n.protections-popup-tp-switch:focus-visible {\n  outline: var(--focus-outline);\n  outline-offset: var(--focus-outline-offset);\n}\n\n#blocked-popup-indicator-item,\n#geo-access-indicator-item {\n  margin-top: -2px;\n  margin-inline-start: 16px;\n}\n\n#geo-access-indicator-item {\n  font-size: 0.8em;\n  color: var(--panel-description-color);\n}\n\n/** Shim-allow warning and indicator icons **/\n\n.protections-popup-shim-allow-hint {\n  padding: 0 2em;\n  margin-block-end: 10px;\n}\n\n.protections-popup-shim-allow-hint-icon,\n.protections-popup-list-host-shim-allow-indicator {\n  -moz-context-properties: fill;\n  background-image: url(\"chrome://global/skin/icons/info-filled.svg\");\n  background-repeat: no-repeat;\n  background-position: center;\n\n  fill: #0090ED;\n}\n\n.protections-popup-shim-allow-hint-icon {\n  width: 24px;\n  height: 24px;\n\n  background-size: contain;\n  margin-inline-end: 0.5em;\n}\n\n.protections-popup-list-host-shim-allow-indicator {\n  width: 16px;\n}\n\n:root[lwt-popup-brighttext] .protections-popup-shim-allow-hint-icon,\n:root[lwt-popup-brighttext] .protections-popup-list-host-shim-allow-indicator {\n  fill: #80EBFF;\n}\n\n.protections-popup-shim-allow-hint-icon {\n  margin-inline-end: 0.5em;\n}\n\n.protections-popup-list-host-shim-allow-indicator {\n  margin-inline-start: 0.5em;\n  min-width: 16px;\n}\n\n#cookieBannerView-disable-site,\n#cookieBannerView-enable-site {\n  font-weight: 600;\n}\n\n.protections-popup-cookieBannerView-footer {\n  margin-top: auto;\n}\n\n\n/* Cookie banner state toggles for the popup menu item */\n\n#protections-popup-cookie-banner-section:not([data-state=\"detected\"]) description#protections-popup-cookie-banner-detected,\n#protections-popup-cookie-banner-section:not([data-state=\"undetected\"]) description#protections-popup-cookie-banner-undetected,\n#protections-popup-cookie-banner-section:not([data-state=\"site-disabled\"]) description#protections-popup-cookie-banner-site-disabled {\n  display: none;\n}\n\n/* Cookie banner state toggles for the subview: if the state is detected, show\n * the disable controls; if the state is site-disabled, show the enable controls. */\n#protections-popup-cookieBannerView:not([data-state=\"detected\"]) #protections-popup-cookieBannerView-disable-button,\n#protections-popup-cookieBannerView:not([data-state=\"detected\"]) description#cookieBannerView-disable-site,\n#protections-popup-cookieBannerView:not([data-state=\"detected\"]) description#cookieBannerView-disable-site-warning,\n#protections-popup-cookieBannerView:not([data-state=\"site-disabled\"]) #protections-popup-cookieBannerView-enable-button,\n#protections-popup-cookieBannerView:not([data-state=\"site-disabled\"]) description#cookieBannerView-enable-site,\n#protections-popup-cookieBannerView:not([data-state=\"site-disabled\"]) description#cookieBannerView-enable-site-description {\n  display: none;\n}\n"],"sourceRoot":""}]);
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

/***/ 87195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93379);
/* harmony import */ var _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_panel_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65718);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _components_storybook_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_panel_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_components_storybook_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_panel_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
//# sourceMappingURL=2442.fa128da9.iframe.bundle.js.map