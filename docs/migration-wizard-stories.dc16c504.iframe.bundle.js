"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1547,2664,3770,9965],{

/***/ 5153:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "panel-list.49c70172da9b1c8afd3d.css";

/***/ }),

/***/ 9470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChromeWindowsPasswordPermissions: () => (/* binding */ ChromeWindowsPasswordPermissions),
/* harmony export */   CustomizedSelectionPage: () => (/* binding */ CustomizedSelectionPage),
/* harmony export */   ExtensionsImportFailure: () => (/* binding */ ExtensionsImportFailure),
/* harmony export */   ExtensionsPartialSuccess: () => (/* binding */ ExtensionsPartialSuccess),
/* harmony export */   FileImportError: () => (/* binding */ FileImportError),
/* harmony export */   FileImportProgress: () => (/* binding */ FileImportProgress),
/* harmony export */   FileImportSuccess: () => (/* binding */ FileImportSuccess),
/* harmony export */   LoadingSkeleton: () => (/* binding */ LoadingSkeleton),
/* harmony export */   MainSelectorVariant1: () => (/* binding */ MainSelectorVariant1),
/* harmony export */   MainSelectorVariant2: () => (/* binding */ MainSelectorVariant2),
/* harmony export */   NoBrowsersFound: () => (/* binding */ NoBrowsersFound),
/* harmony export */   NoPermissionMessage: () => (/* binding */ NoPermissionMessage),
/* harmony export */   PartialProgress: () => (/* binding */ PartialProgress),
/* harmony export */   Progress: () => (/* binding */ Progress),
/* harmony export */   SafariPasswordPermissions: () => (/* binding */ SafariPasswordPermissions),
/* harmony export */   SafariPermissions: () => (/* binding */ SafariPermissions),
/* harmony export */   Success: () => (/* binding */ Success),
/* harmony export */   SuccessWithWarnings: () => (/* binding */ SuccessWithWarnings),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11540);
/* harmony import */ var chrome_global_content_elements_panel_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29965);
/* harmony import */ var browser_components_migration_content_migration_wizard_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70349);
/* harmony import */ var chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60901);
/* harmony import */ var toolkit_widgets_named_deck_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51389);
/* harmony import */ var toolkit_widgets_named_deck_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(toolkit_widgets_named_deck_js__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject;
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Imported for side-effects.





// Imported for side-effects.

window.MozXULElement.insertFTLIfNeeded("locales-preview/migrationWizardChromeWindows.ftl");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/Migration Wizard",
  component: "migration-wizard"
});
var FAKE_MIGRATOR_LIST = [{
  type: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.MIGRATOR_TYPES.BROWSER,
  key: "chrome",
  displayName: "Chrome",
  resourceTypes: ["HISTORY", "FORMDATA", "PASSWORDS", "BOOKMARKS", "PAYMENT_METHODS", "EXTENSIONS"],
  profile: {
    id: "Default",
    name: "Default"
  },
  brandImage: "chrome://browser/content/migration/brands/chrome.png",
  hasPermissions: true
}, {
  type: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.MIGRATOR_TYPES.BROWSER,
  key: "chrome",
  displayName: "Chrome",
  resourceTypes: ["HISTORY", "FORMDATA", "PASSWORDS", "BOOKMARKS", "PAYMENT_METHODS", "EXTENSIONS"],
  profile: {
    id: "person-2",
    name: "Person 2"
  },
  brandImage: "chrome://browser/content/migration/brands/chrome.png",
  hasPermissions: true
}, {
  type: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.MIGRATOR_TYPES.BROWSER,
  key: "ie",
  displayName: "Microsoft Internet Explorer",
  resourceTypes: ["HISTORY", "BOOKMARKS"],
  profile: null,
  brandImage: "chrome://global/skin/icons/defaultFavicon.svg",
  hasPermissions: true
}, {
  type: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.MIGRATOR_TYPES.BROWSER,
  key: "edge",
  displayName: "Microsoft Edge Legacy",
  resourceTypes: ["HISTORY", "FORMDATA", "PASSWORDS", "BOOKMARKS"],
  profile: null,
  brandImage: "chrome://global/skin/icons/defaultFavicon.svg",
  hasPermissions: true
}, {
  type: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.MIGRATOR_TYPES.BROWSER,
  key: "chromium-edge",
  displayName: "Microsoft Edge",
  resourceTypes: ["HISTORY", "FORMDATA", "PASSWORDS", "BOOKMARKS", "PAYMENT_METHODS"],
  profile: {
    id: "Default",
    name: "Default"
  },
  brandImage: "chrome://browser/content/migration/brands/edge.png",
  hasPermissions: true
}, {
  type: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.MIGRATOR_TYPES.BROWSER,
  key: "brave",
  displayName: "Brave",
  resourceTypes: ["HISTORY", "FORMDATA", "PASSWORDS", "BOOKMARKS", "PAYMENT_METHODS"],
  profile: {
    id: "Default",
    name: "Default"
  },
  brandImage: "chrome://browser/content/migration/brands/brave.png",
  hasPermissions: true
}, {
  type: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.MIGRATOR_TYPES.BROWSER,
  key: "internal-testing",
  displayName: "Internal Testing Migrator",
  resourceTypes: ["HISTORY", "PASSWORDS", "BOOKMARKS"],
  profile: null,
  brandImage: "chrome://global/skin/icons/defaultFavicon.svg",
  hasPermissions: true
}, {
  type: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.MIGRATOR_TYPES.BROWSER,
  key: "safari",
  displayName: "Safari",
  resourceTypes: ["HISTORY", "PASSWORDS", "BOOKMARKS"],
  profile: null,
  brandImage: "chrome://browser/content/migration/brands/safari.png",
  hasPermissions: true
}, {
  type: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.MIGRATOR_TYPES.BROWSER,
  key: "opera",
  displayName: "Opera",
  resourceTypes: ["HISTORY", "FORMDATA", "PASSWORDS", "BOOKMARKS"],
  profile: {
    id: "Default",
    name: "Default"
  },
  brandImage: "chrome://browser/content/migration/brands/opera.png",
  hasPermissions: true
}, {
  type: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.MIGRATOR_TYPES.BROWSER,
  key: "opera-gx",
  displayName: "Opera GX",
  resourceTypes: ["HISTORY", "FORMDATA", "PASSWORDS", "BOOKMARKS"],
  profile: {
    id: "Default",
    name: "Default"
  },
  brandImage: "chrome://browser/content/migration/brands/operagx.png",
  hasPermissions: true
}, {
  type: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.MIGRATOR_TYPES.BROWSER,
  key: "vivaldi",
  displayName: "Vivaldi",
  resourceTypes: ["HISTORY"],
  profile: {
    id: "Default",
    name: "Default"
  },
  brandImage: "chrome://browser/content/migration/brands/vivaldi.png",
  hasPermissions: true
}, {
  type: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.MIGRATOR_TYPES.BROWSER,
  key: "no-resources-browser",
  displayName: "Browser with no resources",
  resourceTypes: [],
  profile: {
    id: "Default",
    name: "Default"
  },
  brandImage: "chrome://global/skin/icons/defaultFavicon.svg",
  hasPermissions: true
}, {
  type: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.MIGRATOR_TYPES.FILE,
  key: "file-password-csv",
  displayName: "Passwords from CSV file",
  brandImage: "chrome://branding/content/document.ico",
  resourceTypes: [],
  hasPermissions: true
}, {
  type: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.MIGRATOR_TYPES.FILE,
  key: "file-bookmarks",
  displayName: "Bookmarks from file",
  brandImage: "chrome://branding/content/document.ico",
  resourceTypes: [],
  hasPermissions: true
}];
var Template = function Template(_ref) {
  var state = _ref.state,
    dialogMode = _ref.dialogMode,
    forceShowImportAll = _ref.forceShowImportAll,
    hideOptionExpanderSubtitle = _ref.hideOptionExpanderSubtitle,
    optionExpanderTitleString = _ref.optionExpanderTitleString,
    hideSelectAll = _ref.hideSelectAll,
    importButtonString = _ref.importButtonString,
    checkboxMarginInline = _ref.checkboxMarginInline,
    checkboxMarginBlock = _ref.checkboxMarginBlock,
    importButtonClass = _ref.importButtonClass,
    selectionHeaderString = _ref.selectionHeaderString,
    selectionSubheaderString = _ref.selectionSubheaderString,
    dataImportCompleteSuccessString = _ref.dataImportCompleteSuccessString,
    headerFontSize = _ref.headerFontSize,
    headerMarginBlock = _ref.headerMarginBlock,
    headerFontWeight = _ref.headerFontWeight,
    subheaderFontSize = _ref.subheaderFontSize,
    subheaderMarginBlock = _ref.subheaderMarginBlock,
    subheaderFontWeight = _ref.subheaderFontWeight;
  return (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  <style>\n    @media (prefers-reduced-motion: no-preference) {\n      migration-wizard::part(progress-spinner) {\n        mask: url(./migration/progress-mask.svg);\n      }\n    }\n  </style>\n\n  <div class=\"card card-no-hover\" style=\"width: fit-content\">\n    <migration-wizard\n      ?dialog-mode=", "\n      ?force-show-import-all=", "\n      ?hide-option-expander-subtitle=", "\n      option-expander-title-string=", "\n      ?hide-select-all=", "\n      import-button-string=", "\n      import-button-class=", "\n      checkbox-margin-inline=", "\n      checkbox-margin-block=", "\n      selection-header-string=", "\n      selection-subheader-string=", "\n      data-import-complete-success-string=", "\n      header-font-size=", "\n      header-margin-block=", "\n      header-font-weight=", "\n      subheader-font-size=", "\n      subheader-margin-block=", "\n      subheader-font-weight=", "\n      .state=", "\n    ></migration-wizard>\n  </div>\n"])), dialogMode, forceShowImportAll, hideOptionExpanderSubtitle, optionExpanderTitleString, hideSelectAll, importButtonString, importButtonClass, checkboxMarginInline, checkboxMarginBlock, selectionHeaderString, selectionSubheaderString, dataImportCompleteSuccessString, headerFontSize, headerMarginBlock, headerFontWeight, subheaderFontSize, subheaderMarginBlock, subheaderFontWeight, state);
};
var LoadingSkeleton = Template.bind({});
LoadingSkeleton.args = {
  dialogMode: true,
  state: {
    page: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PAGES.LOADING
  }
};
var MainSelectorVariant1 = Template.bind({});
MainSelectorVariant1.args = {
  dialogMode: true,
  state: {
    page: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PAGES.SELECTION,
    migrators: FAKE_MIGRATOR_LIST,
    showImportAll: false
  }
};
var MainSelectorVariant2 = Template.bind({});
MainSelectorVariant2.args = {
  dialogMode: true,
  state: {
    page: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PAGES.SELECTION,
    migrators: FAKE_MIGRATOR_LIST,
    showImportAll: true
  }
};
var CustomizedSelectionPage = Template.bind({});
CustomizedSelectionPage.args = {
  dialogMode: true,
  state: {
    page: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PAGES.SELECTION,
    migrators: FAKE_MIGRATOR_LIST,
    showImportAll: true
  },
  forceShowImportAll: false,
  hideOptionExpanderSubtitle: false,
  hideSelectAll: false,
  importButtonString: "Custom Button String",
  checkboxMarginInline: "5px",
  checkboxMarginBlock: "10px",
  importButtonClass: "test-class",
  optionExpanderTitleString: "Options",
  selectionHeaderString: "Custom Header",
  selectionSubheaderString: "Custom Subheader",
  dataImportCompleteSuccessString: "Custom Data Import Success",
  headerFontSize: "24px",
  headerMarginBlock: "0 4px",
  headerFontWeight: "590",
  subheaderFontSize: "13px",
  subheaderMarginBlock: "0 28px",
  subheaderFontWeight: "400"
};
var NoPermissionMessage = Template.bind({});
NoPermissionMessage.args = {
  dialogMode: true,
  state: {
    page: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PAGES.SELECTION,
    migrators: [{
      type: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.MIGRATOR_TYPES.BROWSER,
      key: "chromium",
      displayName: "Chromium",
      resourceTypes: [],
      profile: null,
      brandImage: "chrome://browser/content/migration/brands/chromium.png",
      hasPermissions: false,
      permissionsPath: "/home/user/snap/chromium/common/chromium"
    }, {
      type: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.MIGRATOR_TYPES.BROWSER,
      key: "safari",
      displayName: "Safari",
      resourceTypes: ["HISTORY", "PASSWORDS", "BOOKMARKS"],
      profile: null,
      brandImage: "chrome://browser/content/migration/brands/safari.png",
      hasPermissions: false,
      permissionsPath: "/Users/user/Library/Safari"
    }, {
      type: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.MIGRATOR_TYPES.BROWSER,
      key: "vivaldi",
      displayName: "Vivaldi",
      resourceTypes: ["HISTORY"],
      profile: {
        id: "Default",
        name: "Default"
      },
      brandImage: "chrome://browser/content/migration/brands/vivaldi.png",
      hasPermissions: true
    }, {
      type: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.MIGRATOR_TYPES.FILE,
      key: "file-password-csv",
      displayName: "Passwords from CSV file",
      brandImage: "chrome://branding/content/document.ico",
      resourceTypes: [],
      hasPermissions: true
    }, {
      type: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.MIGRATOR_TYPES.FILE,
      key: "file-bookmarks",
      displayName: "Bookmarks from file",
      brandImage: "chrome://branding/content/document.ico",
      resourceTypes: [],
      hasPermissions: true
    }],
    showImportAll: false
  }
};
var Progress = Template.bind({});
Progress.args = {
  dialogMode: true,
  state: {
    page: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PAGES.PROGRESS,
    key: "chrome",
    progress: _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.BOOKMARKS, {
      value: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PROGRESS_VALUE.LOADING
    }), chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.PASSWORDS, {
      value: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PROGRESS_VALUE.LOADING
    }), chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.HISTORY, {
      value: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PROGRESS_VALUE.LOADING
    }), chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.EXTENSIONS, {
      value: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PROGRESS_VALUE.LOADING
    }), chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.FORMDATA, {
      value: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PROGRESS_VALUE.LOADING
    }), chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.PAYMENT_METHODS, {
      value: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PROGRESS_VALUE.LOADING
    })
  }
};
var PartialProgress = Template.bind({});
PartialProgress.args = {
  dialogMode: true,
  state: {
    page: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PAGES.PROGRESS,
    key: "chrome",
    progress: _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.BOOKMARKS, {
      value: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PROGRESS_VALUE.LOADING
    }), chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.PASSWORDS, {
      value: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PROGRESS_VALUE.SUCCESS,
      message: "14 logins and passwords"
    }), chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.HISTORY, {
      value: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PROGRESS_VALUE.LOADING
    }), chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.EXTENSIONS, {
      value: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PROGRESS_VALUE.SUCCESS,
      message: "10 extensions"
    }), chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.FORMDATA, {
      value: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PROGRESS_VALUE.SUCCESS,
      message: "Addresses, credit cards, form history"
    }), chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.PAYMENT_METHODS, {
      value: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PROGRESS_VALUE.SUCCESS,
      message: "6 payment methods"
    })
  }
};
var Success = Template.bind({});
Success.args = {
  dialogMode: true,
  state: {
    page: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PAGES.PROGRESS,
    key: "chrome",
    progress: _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.BOOKMARKS, {
      value: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PROGRESS_VALUE.SUCCESS,
      message: "14 bookmarks"
    }), chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.PASSWORDS, {
      value: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PROGRESS_VALUE.SUCCESS,
      message: "14 logins and passwords"
    }), chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.HISTORY, {
      value: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PROGRESS_VALUE.SUCCESS,
      message: "From the last 180 days"
    }), chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.EXTENSIONS, {
      value: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PROGRESS_VALUE.SUCCESS,
      message: "1 extension"
    }), chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.FORMDATA, {
      value: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PROGRESS_VALUE.SUCCESS,
      message: "Addresses, credit cards, form history"
    }), chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.PAYMENT_METHODS, {
      value: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PROGRESS_VALUE.SUCCESS,
      message: "6 payment methods"
    })
  }
};
var SuccessWithWarnings = Template.bind({});
SuccessWithWarnings.args = {
  dialogMode: true,
  state: {
    page: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PAGES.PROGRESS,
    key: "chrome",
    progress: _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.BOOKMARKS, {
      value: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PROGRESS_VALUE.SUCCESS,
      message: "14 bookmarks"
    }), chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.PASSWORDS, {
      value: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PROGRESS_VALUE.WARNING,
      message: "Something didn't work correctly."
    }), chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.HISTORY, {
      value: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PROGRESS_VALUE.SUCCESS,
      message: "From the last 180 days"
    }), chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.EXTENSIONS, {
      value: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PROGRESS_VALUE.SUCCESS,
      message: "1 extension"
    }), chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.FORMDATA, {
      value: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PROGRESS_VALUE.SUCCESS,
      message: "Addresses, credit cards, form history"
    }), chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.PAYMENT_METHODS, {
      value: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PROGRESS_VALUE.SUCCESS,
      message: "6 payment methods"
    })
  }
};
var ExtensionsPartialSuccess = Template.bind({});
ExtensionsPartialSuccess.args = {
  dialogMode: true,
  state: {
    page: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PAGES.PROGRESS,
    key: "chrome",
    progress: _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.BOOKMARKS, {
      value: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PROGRESS_VALUE.SUCCESS,
      message: "14 bookmarks"
    }), chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.PASSWORDS, {
      value: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PROGRESS_VALUE.SUCCESS,
      message: "14 logins and passwords"
    }), chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.HISTORY, {
      value: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PROGRESS_VALUE.SUCCESS,
      message: "From the last 180 days"
    }), chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.EXTENSIONS, {
      value: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PROGRESS_VALUE.INFO,
      message: "5 of 10 extensions",
      linkText: "Learn how Firefox matches extensions",
      linkURL: "https://support.mozilla.org/kb/import-data-another-browser#w_import-extensions-from-chrome/"
    }), chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.FORMDATA, {
      value: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PROGRESS_VALUE.SUCCESS,
      message: "Addresses, credit cards, form history"
    }), chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.PAYMENT_METHODS, {
      value: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PROGRESS_VALUE.SUCCESS,
      message: "6 payment methods"
    })
  }
};
var ExtensionsImportFailure = Template.bind({});
ExtensionsImportFailure.args = {
  dialogMode: true,
  state: {
    page: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PAGES.PROGRESS,
    key: "chrome",
    progress: _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.BOOKMARKS, {
      value: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PROGRESS_VALUE.SUCCESS,
      message: "14 bookmarks"
    }), chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.PASSWORDS, {
      value: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PROGRESS_VALUE.SUCCESS,
      message: "14 logins and passwords"
    }), chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.HISTORY, {
      value: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PROGRESS_VALUE.SUCCESS,
      message: "From the last 180 days"
    }), chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.EXTENSIONS, {
      value: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PROGRESS_VALUE.WARNING,
      message: "No matching extensions",
      linkText: "Browse extensions for Firefox",
      linkURL: "https://addons.mozilla.org/"
    }), chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.FORMDATA, {
      value: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PROGRESS_VALUE.SUCCESS,
      message: "Addresses, credit cards, form history"
    }), chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.PAYMENT_METHODS, {
      value: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PROGRESS_VALUE.SUCCESS,
      message: "6 payment methods"
    })
  }
};
var FileImportProgress = Template.bind({});
FileImportProgress.args = {
  dialogMode: true,
  state: {
    page: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PAGES.FILE_IMPORT_PROGRESS,
    title: "Importing passwords",
    progress: _defineProperty({}, chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.DISPLAYED_FILE_RESOURCE_TYPES.PASSWORDS_FROM_FILE, {
      value: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PROGRESS_VALUE.LOADING
    })
  }
};
var FileImportSuccess = Template.bind({});
FileImportSuccess.args = {
  dialogMode: true,
  state: {
    page: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PAGES.FILE_IMPORT_PROGRESS,
    title: "Passwords imported successfully",
    progress: _defineProperty(_defineProperty({}, chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.DISPLAYED_FILE_RESOURCE_TYPES.PASSWORDS_NEW, {
      value: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PROGRESS_VALUE.SUCCESS,
      message: "2 added"
    }), chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.DISPLAYED_FILE_RESOURCE_TYPES.PASSWORDS_UPDATED, {
      value: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PROGRESS_VALUE.SUCCESS,
      message: "14 updated"
    })
  }
};
var SafariPermissions = Template.bind({});
SafariPermissions.args = {
  dialogMode: true,
  state: {
    page: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PAGES.SAFARI_PERMISSION
  }
};
var SafariPasswordPermissions = Template.bind({});
SafariPasswordPermissions.args = {
  dialogMode: true,
  state: {
    page: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PAGES.SAFARI_PASSWORD_PERMISSION
  }
};
var ChromeWindowsPasswordPermissions = Template.bind({});
ChromeWindowsPasswordPermissions.args = {
  dialogMode: true,
  state: {
    page: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PAGES.CHROME_WINDOWS_PASSWORD_PERMISSION
  }
};
var NoBrowsersFound = Template.bind({});
NoBrowsersFound.args = {
  dialogMode: true,
  state: {
    page: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PAGES.NO_BROWSERS_FOUND,
    hasFileMigrators: true
  }
};
var FileImportError = Template.bind({});
FileImportError.args = {
  dialogMode: true,
  state: {
    page: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_3__.MigrationWizardConstants.PAGES.SELECTION,
    migrators: FAKE_MIGRATOR_LIST,
    showImportAll: false,
    migratorKey: "file-password-csv",
    fileImportErrorMessage: "Some file import error message"
  }
};

/***/ }),

/***/ 9583:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "panel-item.99199edbdbb0168dfb20.css";

/***/ }),

/***/ 11258:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-button-group.4b3da672913bb0fc2d88.css";

/***/ }),

/***/ 29259:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "migration-wizard.23eb0b412acc104e72e5.css";

/***/ }),

/***/ 29965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var toolkit_content_widgets_panel_list_panel_item_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9583);
/* harmony import */ var toolkit_content_widgets_panel_list_panel_list_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5153);


/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";
{
  class PanelList extends HTMLElement {
    static get observedAttributes() {
      return ["open"];
    }
    static get fragment() {
      if (!this._template) {
        let parser = new DOMParser();
        let cssPath = toolkit_content_widgets_panel_list_panel_list_css__WEBPACK_IMPORTED_MODULE_1__;
        let doc = parser.parseFromString(`
          <template>
            <link rel="stylesheet" href=${cssPath}>
            <div class="arrow top" role="presentation"></div>
            <div class="list" role="presentation">
              <slot></slot>
            </div>
            <div class="arrow bottom" role="presentation"></div>
          </template>
        `, "text/html");
        this._template = document.importNode(doc.querySelector("template"), true);
      }
      return this._template.content.cloneNode(true);
    }
    constructor() {
      super();
      this.attachShadow({
        mode: "open"
      });
      this.shadowRoot.appendChild(this.constructor.fragment);
    }
    connectedCallback() {
      this.setAttribute("role", "menu");
    }
    attributeChangedCallback(name, oldVal, newVal) {
      if (name == "open" && newVal != oldVal) {
        if (this.open) {
          this.onShow();
        } else {
          this.onHide();
        }
      }
    }
    get open() {
      return this.hasAttribute("open");
    }
    set open(val) {
      this.toggleAttribute("open", val);
    }
    get stayOpen() {
      return this.hasAttribute("stay-open");
    }
    set stayOpen(val) {
      this.toggleAttribute("stay-open", val);
    }
    getTargetForEvent(event) {
      if (!event) {
        return null;
      }
      if (event._savedComposedTarget) {
        return event._savedComposedTarget;
      }
      if (event.composed) {
        event._savedComposedTarget = event.composedTarget || event.composedPath()[0];
      }
      return event._savedComposedTarget || event.target;
    }
    show(triggeringEvent, target) {
      this.triggeringEvent = triggeringEvent;
      this.lastAnchorNode = target || this.getTargetForEvent(this.triggeringEvent);
      this.wasOpenedByKeyboard = triggeringEvent && (triggeringEvent.inputSource == MouseEvent.MOZ_SOURCE_KEYBOARD || triggeringEvent.inputSource == MouseEvent.MOZ_SOURCE_UNKNOWN || triggeringEvent.code == "ArrowRight" || triggeringEvent.code == "ArrowLeft");
      this.open = true;
      if (this.parentIsXULPanel()) {
        this.toggleAttribute("inxulpanel", true);
        let panel = this.parentElement;
        panel.hidden = false;
        // Bug 1842070 - There appears to be a race here where panel-lists
        // embedded in XUL panels won't appear during the first call to show()
        // without waiting for a mix of rAF and another tick of the event
        // loop.
        requestAnimationFrame(() => {
          setTimeout(() => {
            panel.openPopup(this.lastAnchorNode, "after_start", 0, 0, false, false, this.triggeringEvent);
          }, 0);
        });
      } else {
        this.toggleAttribute("inxulpanel", false);
      }
    }
    hide(triggeringEvent, {
      force = false
    } = {}, eventTarget) {
      // It's possible this is being used in an unprivileged context, in which
      // case it won't have access to Services / Services will be undeclared.
      const autohideDisabled = this.hasServices() ? Services.prefs.getBoolPref("ui.popup.disable_autohide", false) : false;
      if (autohideDisabled && !force) {
        // Don't hide if this wasn't "forced" (using escape or click in menu).
        return;
      }
      let openingEvent = this.triggeringEvent;
      this.triggeringEvent = triggeringEvent;
      this.open = false;
      if (this.parentIsXULPanel()) {
        // It's possible that we're being programattically hidden, in which
        // case, we need to hide the XUL panel we're embedded in. If, however,
        // we're being hidden because the XUL panel is being hidden, calling
        // hidePopup again on it is a no-op.
        let panel = this.parentElement;
        panel.hidePopup();
      }
      let target = eventTarget || this.getTargetForEvent(openingEvent);
      // Refocus the button that opened the menu if we have one.
      if (target && this.wasOpenedByKeyboard) {
        target.focus();
      }
    }
    toggle(triggeringEvent, target = null) {
      if (this.open) {
        this.hide(triggeringEvent, {
          force: true
        }, target);
      } else {
        this.show(triggeringEvent, target);
      }
    }
    hasServices() {
      // Safely check for Services without throwing a ReferenceError.
      return typeof Services !== "undefined";
    }
    isDocumentRTL() {
      if (this.hasServices()) {
        return Services.locale.isAppLocaleRTL;
      }
      return document.dir === "rtl";
    }
    parentIsXULPanel() {
      const XUL_NS = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
      return this.parentElement?.namespaceURI == XUL_NS && this.parentElement?.localName == "panel";
    }
    async setAlign() {
      const hostElement = this.parentElement || this.getRootNode().host;
      if (!hostElement) {
        // This could get called before we're added to the DOM.
        // Nothing to do in that case.
        return;
      }

      // Set the showing attribute to hide the panel until its alignment is set.
      this.setAttribute("showing", "true");
      // Tell the host element to hide any overflow in case the panel extends off
      // the page before the alignment is set.
      hostElement.style.overflow = "hidden";

      // Wait for a layout flush, then find the bounds.
      let {
        anchorBottom,
        // distance from the bottom of the anchor el to top of viewport.
        anchorLeft,
        anchorTop,
        anchorWidth,
        panelHeight,
        panelWidth,
        winHeight,
        winScrollY,
        winScrollX,
        clientWidth
      } = await new Promise(resolve => {
        this.style.left = 0;
        this.style.top = 0;
        requestAnimationFrame(() => setTimeout(() => {
          let target = this.lastAnchorNode || this.getTargetForEvent(this.triggeringEvent);
          let anchorElement = target || hostElement;
          // It's possible this is being used in a context where windowUtils is
          // not available. In that case, fallback to using the element.
          let getBounds = el => window.windowUtils ? window.windowUtils.getBoundsWithoutFlushing(el) : el.getBoundingClientRect();
          // Use y since top is reserved.
          let anchorBounds = getBounds(anchorElement);
          let panelBounds = getBounds(this);
          let clientWidth = document.scrollingElement.clientWidth;
          let panelHeight = this.scrollHeight > panelBounds.height ? this.scrollHeight : panelBounds.height;
          resolve({
            anchorBottom: anchorBounds.bottom,
            anchorHeight: anchorBounds.height,
            anchorLeft: anchorBounds.left,
            anchorTop: anchorBounds.top,
            anchorWidth: anchorBounds.width,
            panelHeight,
            panelWidth: panelBounds.width,
            winHeight: innerHeight,
            winScrollX: scrollX,
            winScrollY: scrollY,
            clientWidth
          });
        }, 0));
      });

      // If we're embedded in a XUL panel, let it handle alignment.
      if (!this.parentIsXULPanel()) {
        // Calculate the left/right alignment.
        let align;
        let leftOffset;
        let leftAlignX = anchorLeft;
        let rightAlignX = anchorLeft + anchorWidth - panelWidth;
        if (this.isDocumentRTL()) {
          // Prefer aligning on the right.
          align = rightAlignX < 0 ? "left" : "right";
        } else {
          // Prefer aligning on the left.
          align = leftAlignX + panelWidth > clientWidth ? "right" : "left";
        }
        leftOffset = align === "left" ? leftAlignX : rightAlignX;
        let bottomSpaceY = winHeight - anchorBottom;
        let valign;
        let topOffset;
        const VIEWPORT_PANEL_MIN_MARGIN = 10; // 10px ensures that the panel is not flush with the viewport.

        // Only want to valign top when there's more space between the bottom of the anchor element and the top of the viewport.
        // If there's more space between the bottom of the anchor element and the bottom of the viewport, we valign bottom.
        if (anchorBottom > bottomSpaceY && anchorBottom + panelHeight + VIEWPORT_PANEL_MIN_MARGIN > winHeight) {
          // Never want to have a negative value for topOffset, so ensure it's at least 10px.
          topOffset = Math.max(anchorTop - panelHeight, VIEWPORT_PANEL_MIN_MARGIN);
          // Provide a max-height for larger elements which will provide scrolling as needed.
          this.style.maxHeight = `${anchorTop + VIEWPORT_PANEL_MIN_MARGIN}px`;
          valign = "top";
        } else {
          topOffset = anchorBottom;
          this.style.maxHeight = `${bottomSpaceY - VIEWPORT_PANEL_MIN_MARGIN}px`;
          valign = "bottom";
        }

        // Set the alignments and show the panel.
        this.setAttribute("align", align);
        this.setAttribute("valign", valign);
        hostElement.style.overflow = "";
        // Decide positioning based on where this panel will be rendered
        const offsetParentIsBody = this.offsetParent === document?.body || !this.offsetParent;
        if (offsetParentIsBody) {
          // viewport-based
          this.style.left = `${leftOffset + winScrollX}px`;
          this.style.top = `${topOffset + winScrollY}px`;
        } else {
          // container-relative
          const offsetParentRect = this.offsetParent.getBoundingClientRect();
          this.style.left = `${leftOffset - offsetParentRect.left}px`;
          this.style.top = `${topOffset - offsetParentRect.top}px`;
        }
      }
      this.style.minWidth = this.hasAttribute("min-width-from-anchor") ? `${anchorWidth}px` : "";
      this.removeAttribute("showing");
    }
    addHideListeners() {
      if (this.hasAttribute("stay-open") && !this.lastAnchorNode?.hasSubmenu) {
        // This is intended for inspection in Storybook.
        return;
      }
      // Hide when a panel-item is clicked in the list.
      this.addEventListener("click", this);
      // Allows submenus to stopPropagation when focus is already in the menu
      this.addEventListener("keydown", this);
      // We need Escape/Tab/ArrowDown to work when opened with the mouse.
      document.addEventListener("keydown", this);
      // Hide when a click is initiated outside the panel.
      document.addEventListener("mousedown", this);
      // Hide if focus changes and the panel isn't in focus.
      document.addEventListener("focusin", this);
      // Reset or focus tracking, we treat the first focusin differently.
      this.focusHasChanged = false;
      // Hide on resize, scroll or losing window focus.
      window.addEventListener("resize", this);
      window.addEventListener("scroll", this, {
        capture: true
      });
      window.addEventListener("blur", this);
      if (this.parentIsXULPanel()) {
        this.parentElement.addEventListener("popuphidden", this);
      }
    }
    removeHideListeners() {
      this.removeEventListener("click", this);
      this.removeEventListener("keydown", this);
      document.removeEventListener("keydown", this);
      document.removeEventListener("mousedown", this);
      document.removeEventListener("focusin", this);
      window.removeEventListener("resize", this);
      window.removeEventListener("scroll", this, {
        capture: true
      });
      window.removeEventListener("blur", this);
      if (this.parentIsXULPanel()) {
        this.parentElement.removeEventListener("popuphidden", this);
      }
    }
    handleEvent(e) {
      // Ignore the event if it caused the panel to open.
      if (e == this.triggeringEvent) {
        return;
      }
      let target = this.getTargetForEvent(e);
      let inPanelList = e.composed ? e.composedPath().some(el => el == this) : e.target.closest && e.target.closest("panel-list") == this;
      switch (e.type) {
        case "resize":
        case "scroll":
          if (inPanelList) {
            break;
          }
        // Intentional fall-through
        case "blur":
        case "popuphidden":
          this.hide();
          break;
        case "click":
          if (inPanelList) {
            this.hide(undefined, {
              force: true
            });
          } else {
            // Avoid falling through to the default click handler of the parent.
            e.stopPropagation();
          }
          break;
        case "mousedown":
          // Close if there's a click started outside the panel.
          if (!inPanelList) {
            this.hide();
          }
          break;
        case "keydown":
          if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Tab") {
            // Ignore tabbing with a modifer other than shift.
            if (e.key === "Tab" && (e.altKey || e.ctrlKey || e.metaKey)) {
              return;
            }

            // Don't scroll the page or let the regular tab order take effect.
            e.preventDefault();

            // Prevents the host panel list from responding to these events while
            // the submenu is active.
            e.stopPropagation();

            // Keep moving to the next/previous element sibling until we find a
            // panel-item that isn't hidden.
            let moveForward = e.key === "ArrowDown" || e.key === "Tab" && !e.shiftKey;
            let nextItem = moveForward ? this.focusWalker.nextNode() : this.focusWalker.previousNode();

            // If the next item wasn't found, try looping to the top/bottom.
            if (!nextItem) {
              this.focusWalker.currentNode = this;
              if (moveForward) {
                nextItem = this.focusWalker.firstChild();
              } else {
                nextItem = this.focusWalker.lastChild();
              }
            }
            break;
          } else if (e.key === "Escape") {
            this.hide(undefined, {
              force: true
            });
          } else if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
            // Check if any of the children have an accesskey for this letter.
            let item = this.querySelector(`[accesskey="${e.key.toLowerCase()}"],
              [accesskey="${e.key.toUpperCase()}"]`);
            if (item) {
              item.click();
            }
          }
          break;
        case "focusin":
          if (this.triggeringEvent && target == this.getTargetForEvent(this.triggeringEvent) && !this.focusHasChanged) {
            // There will be a focusin after the mousedown that opens the panel
            // using the mouse. Ignore the first focusin event if it's on the
            // triggering target.
            this.focusHasChanged = true;
          } else {
            // Just record that there was a focusin event.
            this.focusHasChanged = true;
          }
          break;
      }
    }

    /**
     * A TreeWalker that can be used to focus elements. The returned element will
     * be the element that has gained focus based on the requested movement
     * through the tree.
     *
     * Example:
     *
     *   this.focusWalker.currentNode = this;
     *   // Focus and get the first focusable child.
     *   let focused = this.focusWalker.nextNode();
     *   // Focus the second focusable child.
     *   this.focusWalker.nextNode();
     */
    get focusWalker() {
      if (!this._focusWalker) {
        this._focusWalker = document.createTreeWalker(this, NodeFilter.SHOW_ELEMENT, {
          acceptNode: node => {
            // No need to look at hidden nodes.
            if (node.hidden) {
              return NodeFilter.FILTER_REJECT;
            }

            // Focus the node, if it worked then this is the node we want.
            node.focus();
            if (node === node.getRootNode().activeElement) {
              return NodeFilter.FILTER_ACCEPT;
            }

            // Continue into child nodes if the parent couldn't be focused.
            return NodeFilter.FILTER_SKIP;
          }
        });
      }
      return this._focusWalker;
    }
    async setSubmenuAlign() {
      const hostElement = this.lastAnchorNode.parentElement || this.getRootNode().host;
      // The showing attribute allows layout of the panel while remaining hidden
      // from the user until alignment is set.
      this.setAttribute("showing", "true");

      // Wait for a layout flush, then find the bounds.
      let {
        anchorLeft,
        anchorWidth,
        anchorTop,
        parentPanelTop,
        panelWidth,
        clientWidth
      } = await new Promise(resolve => {
        requestAnimationFrame(() => {
          // It's possible this is being used in a context where windowUtils is
          // not available. In that case, fallback to using the element.
          let getBounds = el => window.windowUtils ? window.windowUtils.getBoundsWithoutFlushing(el) : el.getBoundingClientRect();
          // submenu item in the parent panel list
          let anchorBounds = getBounds(this.lastAnchorNode);
          let parentPanelBounds = getBounds(hostElement);
          let panelBounds = getBounds(this);
          let clientWidth = document.scrollingElement.clientWidth;
          resolve({
            anchorLeft: anchorBounds.left,
            anchorWidth: anchorBounds.width,
            anchorTop: anchorBounds.top,
            parentPanelTop: parentPanelBounds.top,
            panelWidth: panelBounds.width,
            clientWidth
          });
        });
      });
      let align = hostElement.getAttribute("align");

      // we use document.scrollingElement.clientWidth to exclude the width
      // of vertical scrollbars, because its inclusion can cause the submenu
      // to open to the wrong side and be overlapped by the scrollbar.
      if (align == "left" && anchorLeft + anchorWidth + panelWidth < clientWidth) {
        this.style.left = `${anchorWidth}px`;
        this.style.right = "";
      } else {
        this.style.right = `${anchorWidth}px`;
        this.style.left = "";
      }
      let topOffset = anchorTop - parentPanelTop - (parseFloat(window.getComputedStyle(this)?.paddingTop) || 0);
      this.style.top = `${topOffset}px`;
      this.removeAttribute("showing");
    }
    async onShow() {
      this.sendEvent("showing");
      this.addHideListeners();
      if (this.lastAnchorNode?.hasSubmenu) {
        await this.setSubmenuAlign();
      } else {
        await this.setAlign();
      }

      // Always reset this regardless of how the panel list is opened
      // so the first child will be focusable.
      this.focusWalker.currentNode = this;

      // Wait until the next paint for the alignment to be set and panel to be
      // visible.
      requestAnimationFrame(() => {
        if (this.wasOpenedByKeyboard) {
          // Focus the first focusable panel-item if opened by keyboard.
          this.focusWalker.nextNode();
        }
        this.lastAnchorNode?.setAttribute("aria-expanded", "true");
        this.sendEvent("shown");
      });
    }
    onHide() {
      requestAnimationFrame(() => {
        this.sendEvent("hidden");
        this.lastAnchorNode?.setAttribute("aria-expanded", "false");
      });
      this.removeHideListeners();
    }
    sendEvent(name, detail) {
      this.dispatchEvent(new CustomEvent(name, {
        detail,
        bubbles: true,
        composed: true
      }));
    }
  }
  customElements.define("panel-list", PanelList);
  class PanelItem extends HTMLElement {
    #initialized = false;
    #defaultSlot;
    static get observedAttributes() {
      return ["accesskey", "type", "disabled"];
    }
    constructor() {
      super();
      this.attachShadow({
        mode: "open"
      });
      let style = document.createElement("link");
      style.rel = "stylesheet";
      style.href = toolkit_content_widgets_panel_list_panel_item_css__WEBPACK_IMPORTED_MODULE_0__;
      this.button = document.createElement("button");
      this.#setButtonAttributes();
      this.button.setAttribute("part", "button");
      // Use a XUL label element if possible to show the accesskey.
      this.label = document.createXULElement ? document.createXULElement("label") : document.createElement("span");
      this.button.appendChild(this.label);
      let supportLinkSlot = document.createElement("slot");
      supportLinkSlot.name = "support-link";
      this.#defaultSlot = document.createElement("slot");
      this.#defaultSlot.style.display = "none";
      this.shadowRoot.append(style, this.button, supportLinkSlot, this.#defaultSlot);
    }
    connectedCallback() {
      if (!this._l10nRootConnected && document.l10n) {
        document.l10n.connectRoot(this.shadowRoot);
        this._l10nRootConnected = true;
      }
      this.panel = this.getRootNode()?.host?.closest("panel-list") || this.closest("panel-list");
      if (!this.#initialized) {
        this.#initialized = true;
        // When click listeners are added to the panel-item it creates a node in
        // the a11y tree for this element. This breaks the association between the
        // menu and the button[role="menuitem"] in this shadow DOM and causes
        // announcement issues with screen readers. (bug 995064)
        this.setAttribute("role", "presentation");
        this.#setLabelContents();

        // When our content changes, move the text into the label. It doesn't work
        // with a <slot>, unfortunately.
        new MutationObserver(() => this.#setLabelContents()).observe(this, {
          characterData: true,
          childList: true,
          subtree: true
        });
        if (this.hasSubmenu) {
          this.panel.setAttribute("has-submenu", "");
          this.icon = document.createElement("div");
          this.icon.setAttribute("class", "submenu-icon");
          this.label.setAttribute("class", "submenu-label");
          this.button.setAttribute("class", "submenu-container");
          this.button.appendChild(this.icon);
          this.submenuSlot = document.createElement("slot");
          this.submenuSlot.name = "submenu";
          this.shadowRoot.append(this.submenuSlot);
          this.setSubmenuContents();
        }
      }
      if (this.panel) {
        this.panel.addEventListener("hidden", this);
        this.panel.addEventListener("shown", this);
      }
      if (this.hasSubmenu) {
        this.addEventListener("mouseenter", this);
        this.addEventListener("mouseleave", this);
        this.addEventListener("keydown", this);
      }
    }
    disconnectedCallback() {
      if (this._l10nRootConnected) {
        document.l10n.disconnectRoot(this.shadowRoot);
        this._l10nRootConnected = false;
      }
      if (this.panel) {
        this.panel.removeEventListener("hidden", this);
        this.panel.removeEventListener("shown", this);
        this.panel = null;
      }
      if (this.hasSubmenu) {
        this.removeEventListener("mouseenter", this);
        this.removeEventListener("mouseleave", this);
        this.removeEventListener("keydown", this);
      }
    }
    get hasSubmenu() {
      return this.hasAttribute("submenu");
    }
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === "accesskey") {
        // Bug 1037709 - Accesskey doesn't work in shadow DOM.
        // Ideally we'd have the accesskey set in shadow DOM, and on
        // attributeChangedCallback we'd just update the shadow DOM accesskey.

        // Skip this change event if we caused it.
        if (this._modifyingAccessKey) {
          this._modifyingAccessKey = false;
          return;
        }
        this.label.accessKey = newVal || "";

        // Bug 1588156 - Accesskey is not ignored for hidden non-input elements.
        // Since the accesskey won't be ignored, we need to remove it ourselves
        // when the panel is closed, and move it back when it opens.
        if (!this.panel || !this.panel.open) {
          // When the panel isn't open, just store the key for later.
          this._accessKey = newVal || null;
          this._modifyingAccessKey = true;
          this.accessKey = "";
        } else {
          this._accessKey = null;
        }
      } else if (name === "type" || name === "disabled") {
        this.#setButtonAttributes();
      }
    }
    #setButtonAttributes() {
      if (this.type == "checkbox") {
        this.button.setAttribute("role", "menuitemcheckbox");
        this.button.setAttribute("aria-checked", this.checked);
      } else {
        this.button.setAttribute("role", "menuitem");
        this.button.removeAttribute("aria-checked");
      }
      this.button.toggleAttribute("disabled", this.disabled);
    }
    #setLabelContents() {
      this.label.textContent = this.#defaultSlot.assignedNodes().map(node => node.textContent).join("");
    }
    setSubmenuContents() {
      this.submenuPanel = this.submenuSlot.assignedNodes()[0];
      if (this.submenuPanel) {
        this.shadowRoot.append(this.submenuPanel);
      }
    }
    get disabled() {
      return this.hasAttribute("disabled");
    }
    set disabled(val) {
      this.toggleAttribute("disabled", val);
    }
    get checked() {
      if (this.type !== "checkbox") {
        return false;
      }
      return this.hasAttribute("checked");
    }
    set checked(val) {
      if (this.type == "checkbox") {
        this.toggleAttribute("checked", val);
        this.button.setAttribute("aria-checked", !!val);
      }
    }
    get type() {
      return this.getAttribute("type") || "button";
    }
    set type(val) {
      this.setAttribute("type", val);
    }
    focus() {
      this.button.focus();
    }
    setArrowKeyRTL() {
      let arrowOpenKey = "ArrowRight";
      let arrowCloseKey = "ArrowLeft";
      if (this.submenuPanel.isDocumentRTL()) {
        arrowOpenKey = "ArrowLeft";
        arrowCloseKey = "ArrowRight";
      }
      return [arrowOpenKey, arrowCloseKey];
    }
    handleEvent(e) {
      // Bug 1588156 - Accesskey is not ignored for hidden non-input elements.
      // Since the accesskey won't be ignored, we need to remove it ourselves
      // when the panel is closed, and move it back when it opens.
      switch (e.type) {
        case "shown":
          if (this._accessKey) {
            this.accessKey = this._accessKey;
            this._accessKey = null;
          }
          break;
        case "hidden":
          if (this.accessKey) {
            this._accessKey = this.accessKey;
            this._modifyingAccessKey = true;
            this.accessKey = "";
          }
          break;
        case "mouseenter":
        case "mouseleave":
          this.submenuPanel.toggle(e);
          break;
        case "keydown":
          let [arrowOpenKey, arrowCloseKey] = this.setArrowKeyRTL();
          if (e.key === arrowOpenKey) {
            this.submenuPanel.show(e, e.target);
            e.stopPropagation();
          }
          if (e.key === arrowCloseKey) {
            this.submenuPanel.hide(e, {
              force: true
            }, e.target);
            e.stopPropagation();
          }
          break;
      }
    }
  }
  customElements.define("panel-item", PanelItem);
}

/***/ }),

/***/ 51389:
/***/ (() => {

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



// This is loaded into chrome windows with the subscript loader. Wrap in
// a block to prevent accidentally leaking globals onto `window`.
{
  /**
   * This element is for use with the <named-deck> element. Set the target
   * <named-deck>'s ID in the "deck" attribute and the button's selected state
   * will reflect the deck's state. When the button is clicked, it will set the
   * view in the <named-deck> to the button's "name" attribute.
   *
   * The "tab" role will be added unless a different role is provided. Wrapping
   * a set of these buttons in a <button-group> element will add the key handling
   * for a tablist.
   *
   * NOTE: This does not observe changes to the "deck" or "name" attributes, so
   * changing them likely won't work properly.
   *
   * <button is="named-deck-button" deck="pet-deck" name="dogs">Dogs</button>
   * <named-deck id="pet-deck">
   *   <p name="cats">I like cats.</p>
   *   <p name="dogs">I like dogs.</p>
   * </named-deck>
   *
   * let btn = document.querySelector('button[name="dogs"]');
   * let deck = document.querySelector("named-deck");
   * deck.selectedViewName == "cats";
   * btn.selected == false; // Selected was pulled from the related deck.
   * btn.click();
   * deck.selectedViewName == "dogs";
   * btn.selected == true; // Selected updated when view changed.
   */
  class NamedDeckButton extends HTMLButtonElement {
    connectedCallback() {
      this.id = `${this.deckId}-button-${this.name}`;
      if (!this.hasAttribute("role")) {
        this.setAttribute("role", "tab");
      }
      this.setSelectedFromDeck();
      this.addEventListener("click", this);
      this.getRootNode().addEventListener("view-changed", this, {
        capture: true
      });
    }
    disconnectedCallback() {
      this.removeEventListener("click", this);
      this.getRootNode().removeEventListener("view-changed", this, {
        capture: true
      });
    }
    attributeChangedCallback(name, oldVal, newVal) {
      if (name == "selected") {
        this.selected = newVal;
      }
    }
    get deckId() {
      return this.getAttribute("deck");
    }
    set deckId(val) {
      this.setAttribute("deck", val);
    }
    get deck() {
      return this.getRootNode().querySelector(`#${this.deckId}`);
    }
    handleEvent(e) {
      if (e.type == "view-changed" && e.target.id == this.deckId) {
        this.setSelectedFromDeck();
      } else if (e.type == "click") {
        let {
          deck
        } = this;
        if (deck) {
          deck.selectedViewName = this.name;
        }
      }
    }
    get name() {
      return this.getAttribute("name");
    }
    get selected() {
      return this.hasAttribute("selected");
    }
    set selected(val) {
      if (this.selected != val) {
        this.toggleAttribute("selected", val);
      }
      this.setAttribute("aria-selected", !!val);
    }
    setSelectedFromDeck() {
      let {
        deck
      } = this;
      this.selected = deck && deck.selectedViewName == this.name;
      if (this.selected) {
        this.dispatchEvent(new CustomEvent("button-group:selected", {
          bubbles: true
        }));
      }
    }
  }
  customElements.define("named-deck-button", NamedDeckButton, {
    extends: "button"
  });
  class ButtonGroup extends HTMLElement {
    static get observedAttributes() {
      return ["orientation"];
    }
    connectedCallback() {
      this.setAttribute("role", "tablist");
      if (!this.observer) {
        this.observer = new MutationObserver(changes => {
          for (let change of changes) {
            this.setChildAttributes(change.addedNodes);
            for (let node of change.removedNodes) {
              if (this.activeChild == node) {
                // Ensure there's still an active child.
                this.activeChild = this.firstElementChild;
              }
            }
            for (let node of change.addedNodes) {
              if (!this.activeChild) {
                this.activeChild = node;
              }
            }
          }
        });
      }
      this.observer.observe(this, {
        childList: true
      });

      // Set the role and tabindex for the current children.
      this.setChildAttributes(this.children);

      // Try assigning the active child again, this will run through the checks
      // to ensure it's still valid.
      this.activeChild = this._activeChild;
      this.addEventListener("button-group:selected", this);
      this.addEventListener("keydown", this);
      this.addEventListener("mousedown", this);
      this.getRootNode().addEventListener("keypress", this);
    }
    disconnectedCallback() {
      this.observer.disconnect();
      this.removeEventListener("button-group:selected", this);
      this.removeEventListener("keydown", this);
      this.removeEventListener("mousedown", this);
      this.getRootNode().removeEventListener("keypress", this);
    }
    attributeChangedCallback(name) {
      if (name == "orientation") {
        if (this.isVertical) {
          this.setAttribute("aria-orientation", this.orientation);
        } else {
          this.removeAttribute("aria-orientation");
        }
      }
    }
    setChildAttributes(nodes) {
      for (let node of nodes) {
        if (node.nodeType == Node.ELEMENT_NODE && node != this.activeChild) {
          node.setAttribute("tabindex", "-1");
        }
      }
    }

    // The activeChild is the child that can be focused with tab.
    get activeChild() {
      return this._activeChild;
    }
    set activeChild(node) {
      let prevActiveChild = this._activeChild;
      let newActiveChild;
      if (node && this.contains(node)) {
        newActiveChild = node;
      } else {
        newActiveChild = this.firstElementChild;
      }
      if (!(newActiveChild instanceof Element)) {
        return;
      }
      this._activeChild = newActiveChild;
      if (newActiveChild) {
        newActiveChild.setAttribute("tabindex", "0");
      }
      if (prevActiveChild && prevActiveChild != newActiveChild) {
        prevActiveChild.setAttribute("tabindex", "-1");
      }
    }
    get isVertical() {
      return this.orientation == "vertical";
    }
    get orientation() {
      return this.getAttribute("orientation") == "vertical" ? "vertical" : "horizontal";
    }
    set orientation(val) {
      if (val == "vertical") {
        this.setAttribute("orientation", val);
      } else {
        this.removeAttribute("orientation");
      }
    }
    _navigationKeys() {
      if (this.isVertical) {
        return {
          previousKey: "ArrowUp",
          nextKey: "ArrowDown"
        };
      }
      if (document.dir == "rtl") {
        return {
          previousKey: "ArrowRight",
          nextKey: "ArrowLeft"
        };
      }
      return {
        previousKey: "ArrowLeft",
        nextKey: "ArrowRight"
      };
    }
    handleEvent(e) {
      let {
        previousKey,
        nextKey
      } = this._navigationKeys();
      if (e.type == "keydown" && (e.key == previousKey || e.key == nextKey)) {
        this.setAttribute("last-input-type", "keyboard");
        e.preventDefault();
        let oldFocus = this.activeChild;
        this.walker.currentNode = oldFocus;
        let newFocus;
        if (e.key == previousKey) {
          newFocus = this.walker.previousNode();
        } else {
          newFocus = this.walker.nextNode();
        }
        if (newFocus) {
          this.activeChild = newFocus;
          this.dispatchEvent(new CustomEvent("button-group:key-selected"));
        }
      } else if (e.type == "button-group:selected") {
        this.activeChild = e.target;
      } else if (e.type == "mousedown") {
        this.setAttribute("last-input-type", "mouse");
      } else if (e.type == "keypress" && e.key == "Tab") {
        this.setAttribute("last-input-type", "keyboard");
      }
    }
    get walker() {
      if (!this._walker) {
        this._walker = document.createTreeWalker(this, NodeFilter.SHOW_ELEMENT, {
          acceptNode: node => {
            if (node.hidden || node.disabled) {
              return NodeFilter.FILTER_REJECT;
            }
            node.focus();
            return this.getRootNode().activeElement == node ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
          }
        });
      }
      return this._walker;
    }
  }
  customElements.define("button-group", ButtonGroup);

  /**
   * A deck that is indexed by the "name" attribute of its children. The
   * <named-deck-button> element is a companion element that can update its state
   * and change the view of a <named-deck>.
   *
   * When the deck is connected it will set the first child as the selected view
   * if a view is not already selected.
   *
   * The deck is implemented using a named slot. Setting a slot directly on a
   * child element of the deck is not supported.
   *
   * You can get or set the selected view by name with the `selectedViewName`
   * property or by setting the "selected-view" attribute.
   *
   * <named-deck>
   *   <section name="cats">Some info about cats.</section>
   *   <section name="dogs">Some dog stuff.</section>
   * </named-deck>
   *
   * let deck = document.querySelector("named-deck");
   * deck.selectedViewName == "cats"; // Cat info is shown.
   * deck.selectedViewName = "dogs";
   * deck.selectedViewName == "dogs"; // Dog stuff is shown.
   * deck.setAttribute("selected-view", "cats");
   * deck.selectedViewName == "cats"; // Cat info is shown.
   *
   * Add the is-tabbed attribute to <named-deck> if you want
   * each of its children to have a tabpanel role and aria-labelledby
   * referencing the NamedDeckButton component.
   */
  class NamedDeck extends HTMLElement {
    static get observedAttributes() {
      return ["selected-view"];
    }
    constructor() {
      super();
      this.attachShadow({
        mode: "open"
      });

      // Create a slot for the visible content.
      let selectedSlot = document.createElement("slot");
      selectedSlot.setAttribute("name", "selected");
      this.shadowRoot.appendChild(selectedSlot);
      this.observer = new MutationObserver(() => {
        this._setSelectedViewAttributes();
      });
    }
    connectedCallback() {
      if (this.selectedViewName) {
        // Make sure the selected view is shown.
        this._setSelectedViewAttributes();
      } else {
        // If there's no selected view, default to the first.
        let firstView = this.firstElementChild;
        if (firstView) {
          // This will trigger showing the first view.
          this.selectedViewName = firstView.getAttribute("name");
        }
      }
      this.observer.observe(this, {
        childList: true
      });
    }
    disconnectedCallback() {
      this.observer.disconnect();
    }
    attributeChangedCallback(attr, oldVal, newVal) {
      if (attr == "selected-view" && oldVal != newVal) {
        // Update the slot attribute on the views.
        this._setSelectedViewAttributes();

        // Notify that the selected view changed.
        this.dispatchEvent(new CustomEvent("view-changed"));
      }
    }
    get selectedViewName() {
      return this.getAttribute("selected-view");
    }
    set selectedViewName(name) {
      this.setAttribute("selected-view", name);
    }

    /**
     * Set the slot attribute on all of the views to ensure only the selected view
     * is shown.
     */
    _setSelectedViewAttributes() {
      let {
        selectedViewName
      } = this;
      for (let view of this.children) {
        let name = view.getAttribute("name");
        if (this.hasAttribute("is-tabbed")) {
          view.setAttribute("aria-labelledby", `${this.id}-button-${name}`);
          view.setAttribute("role", "tabpanel");
        }
        if (name === selectedViewName) {
          view.slot = "selected";
        } else {
          view.slot = "";
        }
      }
    }
  }
  customElements.define("named-deck", NamedDeck);
}

/***/ }),

/***/ 60901:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MigrationWizardConstants: () => (/* binding */ MigrationWizardConstants)
/* harmony export */ });
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const MigrationWizardConstants = Object.freeze({
  MIGRATOR_TYPES: Object.freeze({
    BROWSER: "browser",
    FILE: "file"
  }),
  /**
   * A mapping of a page identification string to the IDs used by the
   * various wizard pages. These are used by MigrationWizard.setState
   * to set the current page.
   */
  PAGES: Object.freeze({
    LOADING: "loading",
    SELECTION: "selection",
    PROGRESS: "progress",
    FILE_IMPORT_PROGRESS: "file-import-progress",
    SAFARI_PERMISSION: "safari-permission",
    SAFARI_PASSWORD_PERMISSION: "safari-password-permission",
    CHROME_WINDOWS_PASSWORD_PERMISSION: "chrome-windows-password-permission",
    NO_BROWSERS_FOUND: "no-browsers-found"
  }),
  /**
   * A mapping of a progress value string. These are used by
   * MigrationWizard.#onShowingProgress to update the UI accordingly.
   */
  PROGRESS_VALUE: Object.freeze({
    LOADING: 1,
    SUCCESS: 2,
    WARNING: 3,
    INFO: 4
  }),
  /**
   * Returns a mapping of a resource type to a string used to identify
   * the associated resource group in the wizard via a data-resource-type
   * attribute. The keys are used to set which items should be shown and
   * in what state in #onShowingProgress.
   */
  DISPLAYED_RESOURCE_TYPES: Object.freeze({
    // The DISPLAYED_RESOURCE_TYPES should have their keys match those
    // in MigrationUtils.resourceTypes.

    // This is a little silly, but JavaScript doesn't have a notion of
    // enums. The advantage of this set-up is that these constants values
    // can be used to access the MigrationUtils.resourceTypes constants,
    // are reasonably readable as DOM attributes, and easily serialize /
    // deserialize.
    HISTORY: "HISTORY",
    FORMDATA: "FORMDATA",
    PASSWORDS: "PASSWORDS",
    BOOKMARKS: "BOOKMARKS",
    PAYMENT_METHODS: "PAYMENT_METHODS",
    EXTENSIONS: "EXTENSIONS",
    COOKIES: "COOKIES",
    SESSION: "SESSION",
    OTHERDATA: "OTHERDATA"
  }),
  DISPLAYED_FILE_RESOURCE_TYPES: Object.freeze({
    // When migrating passwords from a file, we first show the progress
    // for a single PASSWORDS_FROM_FILE resource type, and then upon
    // completion, show two different resource types - one for new
    // passwords imported from the file, and one for existing passwords
    // that were updated from the file.
    PASSWORDS_FROM_FILE: "PASSWORDS_FROM_FILE",
    PASSWORDS_NEW: "PASSWORDS_NEW",
    PASSWORDS_UPDATED: "PASSWORDS_UPDATED",
    BOOKMARKS_FROM_FILE: "BOOKMARKS_FROM_FILE"
  }),
  /**
   * Returns a mapping of a resource type to a string used to identify
   * the associated resource group in the wizard via a data-resource-type
   * attribute. The keys are for resource types that are only ever shown
   * for profile resets.
   */
  PROFILE_RESET_ONLY_RESOURCE_TYPES: Object.freeze({
    COOKIES: "COOKIES",
    SESSION: "SESSION",
    OTHERDATA: "OTHERDATA"
  }),
  /**
   * The set of keys that maps to migrators that use the term "favorites"
   * in the place of "bookmarks". This tends to be browsers from Microsoft.
   */
  USES_FAVORITES: Object.freeze(["chromium-edge", "chromium-edge-beta", "edge", "ie"]),
  /**
   * The values that are set on the extension extra key for the
   * migration_finished telemetry event. The definition of that event
   * defines it as:
   *
   * "3" if all extensions were matched after import. "2" if only some
   * extensions were matched. "1" if none were matched, and "0" if extensions
   * weren't selected for import.
   */
  EXTENSIONS_IMPORT_RESULT: Object.freeze({
    NOT_IMPORTED: "0",
    NONE_MATCHED: "1",
    PARTIAL_MATCH: "2",
    ALL_MATCHED: "3"
  })
});

/***/ }),

/***/ 70349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MigrationWizard: () => (/* binding */ MigrationWizard)
/* harmony export */ });
/* harmony import */ var browser_themes_shared_migration_migration_wizard_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29259);
/* harmony import */ var chrome_global_content_elements_moz_button_group_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92664);
/* harmony import */ var chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60901);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// eslint-disable-next-line import/no-unassigned-import



/**
 * This component contains the UI that steps users through migrating their
 * data from other browsers to this one. This component only contains very
 * basic logic and structure for the UI, and most of the state management
 * occurs in the MigrationWizardChild JSWindowActor.
 */
class MigrationWizard extends HTMLElement {
  static #template = null;
  #deck = null;
  #browserProfileSelector = null;
  #browserProfileSelectorList = null;
  #resourceTypeList = null;
  #shadowRoot = null;
  #importButton = null;
  #importFromFileButton = null;
  #chooseImportFromFile = null;
  #getPermissionsButton = null;
  #safariPermissionButton = null;
  #selectAllCheckbox = null;
  #resourceSummary = null;
  #expandedDetails = false;
  #extensionsSuccessLink = null;
  #supportTextLinks = null;
  static get markup() {
    return `
      <template>
        <link rel="stylesheet" href="${browser_themes_shared_migration_migration_wizard_css__WEBPACK_IMPORTED_MODULE_0__}">
        <named-deck id="wizard-deck" selected-view="page-loading" aria-busy="true" part="deck">
          <div name="page-loading">
            <h1 class="migration-wizard-header" data-l10n-id="migration-wizard-selection-header" part="header"></h1>
            <div class="loading-block large"></div>
            <div class="loading-block small"></div>
            <div class="loading-block small"></div>
            <moz-button-group class="buttons" part="buttons">
              <!-- If possible, use the same button labels as the SELECTION page with the same strings.
                   That'll prevent flicker when the load state exits if we then enter the SELECTION page. -->
              <button class="cancel-close" data-l10n-id="migration-cancel-button-label" disabled></button>
              <button class="migration-import-button" data-l10n-id="migration-import-button-label" disabled></button>
            </moz-button-group>
          </div>

          <div name="page-selection">
            <h1 class="migration-wizard-header" data-l10n-id="migration-wizard-selection-header" part="header"></h1>
            <p class="migration-wizard-subheader" part="subheader" hidden=""></p>
            <button id="browser-profile-selector" aria-haspopup="menu" aria-labelledby="migrator-name profile-name">
              <span class="migrator-icon" role="presentation"></span>
              <div class="migrator-description" role="presentation">
                <div id="migrator-name">&nbsp;</div>
                <div id="profile-name" class="text-deemphasized"></div>
              </div>
              <span class="dropdown-icon" role="presentation"></span>
            </button>
            <div class="no-resources-found error-message">
              <span class="error-icon" role="img"></span>
              <div data-l10n-id="migration-wizard-import-browser-no-resources"></div>
            </div>

            <div class="no-permissions-message">
              <p data-l10n-id="migration-no-permissions-message">
              </p>
              <p data-l10n-id="migration-no-permissions-instructions">
              </p>
              <ol>
                <li data-l10n-id="migration-no-permissions-instructions-step1"></li>
                <li class="migration-no-permissions-instructions-step2" data-l10n-id="migration-no-permissions-instructions-step2" data-l10n-args='{"permissionsPath": "" }'>
                  <code></code>
                </li>
              </ol>
            </div>

            <div data-l10n-id="migration-wizard-selection-list" class="resource-selection-preamble text-deemphasized hide-on-error"></div>
            <details class="resource-selection-details hide-on-error">
              <summary id="resource-selection-summary">
                <div class="selected-data-header" data-l10n-id="migration-all-available-data-label"></div>
                <div class="selected-data text-deemphasized">&nbsp;</div>
                <span class="expand-collapse-icon" role="img"></span>
              </summary>
              <fieldset id="resource-type-list">
                <label id="select-all">
                  <input type="checkbox" class="select-all-checkbox"/><span data-l10n-id="migration-select-all-option-label"></span>
                </label>
                <label id="bookmarks" class="resource-type-label" data-resource-type="BOOKMARKS"/>
                  <input type="checkbox"/><span default-data-l10n-id="migration-bookmarks-option-label" ie-edge-data-l10n-id="migration-favorites-option-label"></span>
                </label>
                <label id="logins-and-passwords" class="resource-type-label" data-resource-type="PASSWORDS">
                  <input type="checkbox"/><span data-l10n-id="migration-passwords-option-label"></span>
                </label>
                <label id="history" class="resource-type-label" data-resource-type="HISTORY">
                  <input type="checkbox"/><span data-l10n-id="migration-history-option-label"></span>
                </label>
                <label id="extensions" class="resource-type-label" data-resource-type="EXTENSIONS">
                  <input type="checkbox"/><span data-l10n-id="migration-extensions-option-label"></span>
                </label>
                <label id="form-autofill" class="resource-type-label" data-resource-type="FORMDATA">
                  <input type="checkbox"/><span data-l10n-id="migration-form-autofill-option-label"></span>
                </label>
                <label id="payment-methods" class="resource-type-label" data-resource-type="PAYMENT_METHODS">
                  <input type="checkbox"/><span data-l10n-id="migration-payment-methods-option-label"></span>
                </label>
              </fieldset>
            </details>

            <div class="file-import-error error-message">
              <span class="error-icon" role="img"></span>
              <div id="file-import-error-message"></div>
            </div>

            <moz-button-group class="buttons" part="buttons">
              <button class="cancel-close" data-l10n-id="migration-cancel-button-label"></button>
              <button id="import-from-file" class="primary" data-l10n-id="migration-import-from-file-button-label"></button>
              <button id="import" class="primary migration-import-button" data-l10n-id="migration-import-button-label"></button>
              <button id="get-permissions" class="primary" data-l10n-id="migration-continue-button-label"></button>
            </moz-button-group>
          </div>

          <div name="page-progress">
            <h1 id="progress-header" data-l10n-id="migration-wizard-progress-header" part="header"></h1>
            <div class="resource-progress">
              <div data-resource-type="BOOKMARKS" class="resource-progress-group">
                <span class="progress-icon-parent"><span class="progress-icon" role="img"></span></span>
                <span default-data-l10n-id="migration-bookmarks-option-label" ie-edge-data-l10n-id="migration-favorites-option-label"></span>
                <span class="message-text text-deemphasized">&nbsp;</span>
                <a class="support-text text-deemphasized"></a>
              </div>

              <div data-resource-type="PASSWORDS" class="resource-progress-group">
                <span class="progress-icon-parent"><span class="progress-icon" role="img"></span></span>
                <span data-l10n-id="migration-passwords-option-label"></span>
                <span class="message-text text-deemphasized">&nbsp;</span>
                <a class="support-text text-deemphasized"></a>
              </div>

              <div data-resource-type="HISTORY" class="resource-progress-group">
                <span class="progress-icon-parent"><span class="progress-icon" role="img"></span></span>
                <span data-l10n-id="migration-history-option-label"></span>
                <span class="message-text text-deemphasized">&nbsp;</span>
                <a class="support-text text-deemphasized"></a>
              </div>

              <div data-resource-type="EXTENSIONS" class="resource-progress-group">
                <span class="progress-icon-parent"><span class="progress-icon" role="img"></span></span>
                <span data-l10n-id="migration-extensions-option-label"></span>
                <a id="extensions-success-link" href="about:addons" class="message-text text-deemphasized"></a>
                <span class="message-text text-deemphasized"></span>
                <a class="support-text text-deemphasized"></a>
              </div>

              <div data-resource-type="FORMDATA" class="resource-progress-group">
                <span class="progress-icon-parent"><span class="progress-icon" role="img"></span></span>
                <span data-l10n-id="migration-form-autofill-option-label"></span>
                <span class="message-text text-deemphasized">&nbsp;</span>
                <a class="support-text text-deemphasized"></a>
              </div>

              <div data-resource-type="PAYMENT_METHODS" class="resource-progress-group">
                <span class="progress-icon-parent"><span class="progress-icon" role="img"></span></span>
                <span data-l10n-id="migration-payment-methods-option-label"></span>
                <span class="message-text text-deemphasized">&nbsp;</span>
                <a class="support-text text-deemphasized"></a>
              </div>

              <div data-resource-type="COOKIES" class="resource-progress-group">
                <span class="progress-icon-parent"><span class="progress-icon" role="img"></span></span>
                <span data-l10n-id="migration-cookies-option-label"></span>
                <span class="message-text text-deemphasized">&nbsp;</span>
                <a class="support-text text-deemphasized"></a>
              </div>

              <div data-resource-type="SESSION" class="resource-progress-group">
                <span class="progress-icon-parent"><span class="progress-icon" role="img"></span></span>
                <span data-l10n-id="migration-session-option-label"></span>
                <span class="message-text text-deemphasized">&nbsp;</span>
                <a class="support-text text-deemphasized"></a>
              </div>

              <div data-resource-type="OTHERDATA" class="resource-progress-group">
                <span class="progress-icon-parent"><span class="progress-icon" role="img"></span></span>
                <span data-l10n-id="migration-otherdata-option-label"></span>
                <span class="message-text text-deemphasized">&nbsp;</span>
                <a class="support-text text-deemphasized"></a>
              </div>
            </div>
            <moz-button-group class="buttons" part="buttons">
              <button class="cancel-close" data-l10n-id="migration-cancel-button-label" disabled></button>
              <button class="primary finish-button done-button" data-l10n-id="migration-done-button-label"></button>
              <button class="primary finish-button continue-button" data-l10n-id="migration-continue-button-label"></button>
            </moz-button-group>
          </div>

          <div name="page-file-import-progress">
            <h1 id="file-import-progress-header"part="header"></h1>
            <div class="resource-progress">
              <div data-resource-type="PASSWORDS_FROM_FILE" class="resource-progress-group">
                <span class="progress-icon-parent"><span class="progress-icon" role="img"></span></span>
                <span data-l10n-id="migration-passwords-from-file"></span>
                <span class="message-text text-deemphasized">&nbsp;</span>
              </div>

              <div data-resource-type="PASSWORDS_NEW" class="resource-progress-group">
                <span class="progress-icon-parent"><span class="progress-icon" role="img"></span></span>
                <span data-l10n-id="migration-passwords-new"></span>
                <span class="message-text text-deemphasized">&nbsp;</span>
              </div>

              <div data-resource-type="PASSWORDS_UPDATED" class="resource-progress-group">
                <span class="progress-icon-parent"><span class="progress-icon" role="img"></span></span>
                <span data-l10n-id="migration-passwords-updated"></span>
                <span class="message-text text-deemphasized">&nbsp;</span>
              </div>

              <div data-resource-type="BOOKMARKS_FROM_FILE" class="resource-progress-group">
                <span class="progress-icon-parent"><span class="progress-icon" role="img"></span></span>
                <span data-l10n-id="migration-bookmarks-from-file"></span>
                <span class="message-text text-deemphasized">&nbsp;</span>
              </div>
            </div>
            <moz-button-group class="buttons" part="buttons">
              <button class="cancel-close" data-l10n-id="migration-cancel-button-label" disabled></button>
              <button class="primary finish-button done-button" data-l10n-id="migration-done-button-label"></button>
              <button class="primary finish-button continue-button" data-l10n-id="migration-continue-button-label"></button>
            </moz-button-group>
          </div>

          <div name="page-safari-password-permission">
            <h1 data-l10n-id="migration-safari-password-import-header" part="header"></h1>
            <span data-l10n-id="migration-safari-password-import-steps-header"></span>
            <ol>
              <li data-l10n-id="migration-safari-password-import-step1"></li>
              <li data-l10n-id="migration-safari-password-import-step2"><img class="safari-icon-3dots" data-l10n-name="safari-icon-3dots"/></li>
              <li data-l10n-id="migration-safari-password-import-step3"></li>
              <li class="safari-icons-group">
                <span data-l10n-id="migration-safari-password-import-step4"></span>
                <span class="page-portrait-icon"></span>
              </li>
            </ol>
            <moz-button-group class="buttons" part="buttons">
              <button class="manual-password-import-skip" data-l10n-id="migration-manual-password-import-skip-button"></button>
              <button class="manual-password-import-select primary" data-l10n-id="migration-manual-password-import-select-button"></button>
            </moz-button-group>
          </div>

          <div name="page-chrome-windows-password-permission">
            <h1 data-l10n-id="migration-chrome-windows-password-import-header" part="header"></h1>
            <span data-l10n-id="migration-chrome-windows-password-import-steps-header"></span>
            <ol>
              <li data-l10n-id="migration-chrome-windows-password-import-step1"><img class="chrome-icon-3dots" data-l10n-name="chrome-icon-3dots"/></li>
              <li data-l10n-id="migration-chrome-windows-password-import-step2"></li>
              <li data-l10n-id="migration-chrome-windows-password-import-step3"></li>
            </ol>
            <p>
              <span data-l10n-id="migration-chrome-windows-password-import-step4"></span>
            </p>
            <moz-button-group class="buttons" part="buttons">
              <button class="manual-password-import-skip" data-l10n-id="migration-manual-password-import-skip-button"></button>
              <button class="manual-password-import-select primary" data-l10n-id="migration-manual-password-import-select-button"></button>
            </moz-button-group>
          </div>

          <div name="page-safari-permission">
            <h1 data-l10n-id="migration-wizard-selection-header" part="header"></h1>
            <div data-l10n-id="migration-wizard-safari-permissions-sub-header"></div>
            <ol>
              <li data-l10n-id="migration-wizard-safari-instructions-continue"></li>
              <li data-l10n-id="migration-wizard-safari-instructions-folder"></li>
            </ol>
            <moz-button-group class="buttons" part="buttons">
              <button class="cancel-close" data-l10n-id="migration-cancel-button-label"></button>
              <button id="safari-request-permissions" class="primary" data-l10n-id="migration-continue-button-label"></button>
            </moz-button-group>
          </div>

          <div name="page-no-browsers-found">
            <h1 data-l10n-id="migration-wizard-selection-header" part="header"></h1>
            <div class="no-browsers-found error-message">
              <span class="error-icon" role="img"></span>
              <div class="no-browsers-found-message" data-l10n-id="migration-wizard-import-browser-no-browsers"></div>
            </div>
            <moz-button-group class="buttons" part="buttons">
              <button class="cancel-close" data-l10n-id="migration-cancel-button-label"></button>
              <button id="choose-import-from-file" class="primary" data-l10n-id="migration-choose-to-import-from-file-button-label"></button>
            </moz-button-group>
          </div>
        </named-deck>
        <slot></slot>
      </template>
    `;
  }
  static get fragment() {
    if (!MigrationWizard.#template) {
      let parser = new DOMParser();
      let doc = parser.parseFromString(MigrationWizard.markup, "text/html");
      MigrationWizard.#template = document.importNode(doc.querySelector("template"), true);
    }
    return MigrationWizard.#template.content.cloneNode(true);
  }
  constructor() {
    super();
    const shadow = this.attachShadow({
      mode: "open"
    });
    if (window.MozXULElement) {
      window.MozXULElement.insertFTLIfNeeded("branding/brand.ftl");
      window.MozXULElement.insertFTLIfNeeded("browser/migrationWizard.ftl");
    }
    document.l10n.connectRoot(shadow);
    shadow.appendChild(MigrationWizard.fragment);
    this.#deck = shadow.querySelector("#wizard-deck");
    this.#browserProfileSelector = shadow.querySelector("#browser-profile-selector");
    this.#resourceSummary = shadow.querySelector("#resource-selection-summary");
    this.#resourceSummary.addEventListener("click", this);
    let cancelCloseButtons = shadow.querySelectorAll(".cancel-close");
    for (let button of cancelCloseButtons) {
      button.addEventListener("click", this);
    }
    let finishButtons = shadow.querySelectorAll(".finish-button");
    for (let button of finishButtons) {
      button.addEventListener("click", this);
    }
    this.#importButton = shadow.querySelector("#import");
    this.#importButton.addEventListener("click", this);
    this.#importFromFileButton = shadow.querySelector("#import-from-file");
    this.#importFromFileButton.addEventListener("click", this);
    this.#chooseImportFromFile = shadow.querySelector("#choose-import-from-file");
    this.#chooseImportFromFile.addEventListener("click", this);
    this.#getPermissionsButton = shadow.querySelector("#get-permissions");
    this.#getPermissionsButton.addEventListener("click", this);
    this.#browserProfileSelector.addEventListener("click", this);
    this.#browserProfileSelector.addEventListener("mousedown", this);
    this.#resourceTypeList = shadow.querySelector("#resource-type-list");
    this.#resourceTypeList.addEventListener("change", this);
    this.#safariPermissionButton = shadow.querySelector("#safari-request-permissions");
    this.#safariPermissionButton.addEventListener("click", this);
    this.#selectAllCheckbox = shadow.querySelector("#select-all").control;
    let manualPasswordImportSkipButtons = shadow.querySelectorAll(".manual-password-import-skip");
    for (let button of manualPasswordImportSkipButtons) {
      button.addEventListener("click", this);
    }
    let manualPasswordImportSelectButtons = shadow.querySelectorAll(".manual-password-import-select");
    for (let button of manualPasswordImportSelectButtons) {
      button.addEventListener("click", this);
    }
    this.#extensionsSuccessLink = shadow.querySelector("#extensions-success-link");
    this.#extensionsSuccessLink.addEventListener("click", this);
    this.#supportTextLinks = shadow.querySelectorAll(".support-text");
    this.#supportTextLinks.forEach(link => link.addEventListener("click", this));
    this.#shadowRoot = shadow;
  }
  connectedCallback() {
    if (this.hasAttribute("auto-request-state")) {
      this.requestState();
    }
  }
  requestState() {
    this.dispatchEvent(new CustomEvent("MigrationWizard:RequestState", {
      bubbles: true
    }));
  }

  /**
   * This setter can be used in the event that the MigrationWizard is being
   * inserted via Lit, and the caller wants to set state declaratively using
   * a property expression.
   *
   * @param {object} state
   *   The state object to pass to setState.
   * @see MigrationWizard.setState.
   */
  set state(state) {
    this.setState(state);
  }

  /**
   * This is the main entrypoint for updating the state and appearance of
   * the wizard.
   *
   * @param {object} state The state to be represented by the component.
   * @param {string} state.page The page of the wizard to display. This should
   *   be one of the MigrationWizardConstants.PAGES constants.
   */
  setState(state) {
    switch (state.page) {
      case chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.MigrationWizardConstants.PAGES.SELECTION:
        {
          this.#onShowingSelection(state);
          break;
        }
      case chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.MigrationWizardConstants.PAGES.PROGRESS:
        {
          this.#onShowingProgress(state);
          break;
        }
      case chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.MigrationWizardConstants.PAGES.FILE_IMPORT_PROGRESS:
        {
          this.#onShowingFileImportProgress(state);
          break;
        }
      case chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.MigrationWizardConstants.PAGES.NO_BROWSERS_FOUND:
        {
          this.#onShowingNoBrowsersFound(state);
          break;
        }
    }
    this.#deck.toggleAttribute("aria-busy", state.page == chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.MigrationWizardConstants.PAGES.LOADING);
    this.#deck.setAttribute("selected-view", `page-${state.page}`);
    if (window.IS_STORYBOOK) {
      this.#updateForStorybook();
    }
  }
  get #dialogMode() {
    return this.hasAttribute("dialog-mode");
  }
  #ensureSelectionDropdown() {
    if (this.#browserProfileSelectorList) {
      return;
    }
    this.#browserProfileSelectorList = document.createElement("panel-list");
    this.#browserProfileSelectorList.toggleAttribute("min-width-from-anchor", true);
    this.#browserProfileSelectorList.addEventListener("click", this);
    if (document.createXULElement) {
      let panel = document.createXULElement("panel");
      panel.appendChild(this.#browserProfileSelectorList);
      this.#shadowRoot.appendChild(panel);
    } else {
      this.#shadowRoot.appendChild(this.#browserProfileSelectorList);
    }
  }

  /**
   * Reacts to changes to the browser / profile selector dropdown. This
   * should update the list of resource types to match what's supported
   * by the selected migrator and profile.
   *
   *  @param {Element} panelItem the selected <panel-item>
   */
  #onBrowserProfileSelectionChanged(panelItem) {
    this.#browserProfileSelector.selectedPanelItem = panelItem;
    this.#browserProfileSelector.querySelector("#migrator-name").textContent = panelItem.displayName;
    this.#browserProfileSelector.querySelector("#profile-name").textContent = panelItem.profile?.name || "";
    if (panelItem.brandImage) {
      this.#browserProfileSelector.querySelector(".migrator-icon").style.content = `url(${panelItem.brandImage})`;
    } else {
      this.#browserProfileSelector.querySelector(".migrator-icon").style.content = "url(chrome://global/skin/icons/defaultFavicon.svg)";
    }
    let key = panelItem.getAttribute("key");
    let resourceTypes = panelItem.resourceTypes;
    for (let child of this.#resourceTypeList.querySelectorAll("label[data-resource-type]")) {
      child.hidden = true;
      child.control.checked = false;
    }
    for (let resourceType of resourceTypes) {
      let resourceLabel = this.#resourceTypeList.querySelector(`label[data-resource-type="${resourceType}"]`);
      if (resourceLabel) {
        resourceLabel.hidden = false;
        resourceLabel.control.checked = true;
        let labelSpan = resourceLabel.querySelector("span[default-data-l10n-id]");
        if (labelSpan) {
          if (chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.MigrationWizardConstants.USES_FAVORITES.includes(key)) {
            document.l10n.setAttributes(labelSpan, labelSpan.getAttribute("ie-edge-data-l10n-id"));
          } else {
            document.l10n.setAttributes(labelSpan, labelSpan.getAttribute("default-data-l10n-id"));
          }
        }
      }
    }
    let selectAll = this.#shadowRoot.querySelector("#select-all").control;
    selectAll.checked = true;
    this.#displaySelectedResources();
    this.#browserProfileSelector.selectedPanelItem = panelItem;
    let selectionPage = this.#shadowRoot.querySelector("div[name='page-selection']");
    selectionPage.setAttribute("migrator-type", panelItem.getAttribute("type"));

    // Safari currently has a special flow for requesting permissions that
    // occurs _after_ resource selection, so we don't show this message
    // for that migrator.
    let showNoPermissionsMessage = panelItem.getAttribute("type") == chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.MigrationWizardConstants.MIGRATOR_TYPES.BROWSER && !panelItem.hasPermissions && panelItem.getAttribute("key") != "safari";
    selectionPage.toggleAttribute("no-permissions", showNoPermissionsMessage);
    if (showNoPermissionsMessage) {
      let step2 = selectionPage.querySelector(".migration-no-permissions-instructions-step2");
      step2.setAttribute("data-l10n-args", JSON.stringify({
        permissionsPath: panelItem.permissionsPath
      }));
      this.dispatchEvent(new CustomEvent("MigrationWizard:PermissionsNeeded", {
        bubbles: true,
        detail: {
          key
        }
      }));
    }
    selectionPage.toggleAttribute("no-resources", panelItem.getAttribute("type") == chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.MigrationWizardConstants.MIGRATOR_TYPES.BROWSER && !resourceTypes.length && panelItem.hasPermissions);
  }

  /**
   * Called when showing the browser/profile selection page of the wizard.
   *
   * @param {object} state
   *   The state object passed into setState. The following properties are
   *   used:
   * @param {string[]} state.migrators
   *   An array of source browser names that can be migrated from.
   * @param {string} [state.migratorKey=null]
   *   The key for a migrator to automatically select in the migrators array.
   *   If not defined, the first item in the array will be selected.
   * @param {string} [state.fileImportErrorMessage=null]
   *   An error message to display in the event that an attempt at doing a
   *   file import failed. File import failures are special in that they send
   *   the wizard back to the selection page with an error message. If not
   *   defined, it is presumed that a file import error has not occurred.
   */
  #onShowingSelection(state) {
    this.#ensureSelectionDropdown();
    this.#browserProfileSelectorList.textContent = "";
    let selectionPage = this.#shadowRoot.querySelector("div[name='page-selection']");
    let header = selectionPage.querySelector(".migration-wizard-header");
    let selectionHeaderString = this.getAttribute("selection-header-string");
    if (this.hasAttribute("selection-header-string")) {
      header.textContent = selectionHeaderString;
      header.toggleAttribute("hidden", !selectionHeaderString);
    } else {
      header.removeAttribute("hidden");
    }
    let selectionSubheaderString = this.getAttribute("selection-subheader-string");
    let subheader = selectionPage.querySelector(".migration-wizard-subheader");
    subheader.textContent = selectionSubheaderString;
    subheader.toggleAttribute("hidden", !selectionSubheaderString);
    let details = this.#shadowRoot.querySelector("details");
    if (this.hasAttribute("force-show-import-all")) {
      let forceShowImportAll = this.getAttribute("force-show-import-all") == "true";
      selectionPage.toggleAttribute("show-import-all", forceShowImportAll);
      details.open = !forceShowImportAll;
    } else {
      selectionPage.toggleAttribute("show-import-all", state.showImportAll);
      details.open = !state.showImportAll;
    }
    this.#expandedDetails = false;
    this.#applyContentCustomizations();
    for (let migrator of state.migrators) {
      let opt = document.createElement("panel-item");
      opt.setAttribute("key", migrator.key);
      opt.setAttribute("type", migrator.type);
      opt.profile = migrator.profile;
      opt.displayName = migrator.displayName;
      opt.resourceTypes = migrator.resourceTypes;
      opt.hasPermissions = migrator.hasPermissions;
      opt.permissionsPath = migrator.permissionsPath;
      opt.brandImage = migrator.brandImage;
      let button = opt.shadowRoot.querySelector("button");
      if (migrator.brandImage) {
        button.style.backgroundImage = `url(${migrator.brandImage})`;
      }
      if (migrator.profile) {
        document.l10n.setAttributes(opt, "migration-wizard-selection-option-with-profile", {
          sourceBrowser: migrator.displayName,
          profileName: migrator.profile.name
        });
      } else {
        document.l10n.setAttributes(opt, "migration-wizard-selection-option-without-profile", {
          sourceBrowser: migrator.displayName
        });
      }
      this.#browserProfileSelectorList.appendChild(opt);
    }
    if (state.migrators.length) {
      this.#onBrowserProfileSelectionChanged(this.#browserProfileSelectorList.firstElementChild);
    }
    if (state.migratorKey) {
      let panelItem = this.#browserProfileSelectorList.querySelector(`panel-item[key="${state.migratorKey}"]`);
      this.#onBrowserProfileSelectionChanged(panelItem);
    }
    let fileImportErrorMessageEl = selectionPage.querySelector("#file-import-error-message");
    if (state.fileImportErrorMessage) {
      fileImportErrorMessageEl.textContent = state.fileImportErrorMessage;
      selectionPage.toggleAttribute("file-import-error", true);
    } else {
      fileImportErrorMessageEl.textContent = "";
      selectionPage.toggleAttribute("file-import-error", false);
    }

    // Since this is called before the named-deck actually switches to
    // show the selection page, we cannot focus this button immediately.
    // Instead, we use a rAF to queue this up for focusing before the
    // next paint.
    requestAnimationFrame(() => {
      this.#browserProfileSelector.focus({
        focusVisible: false
      });
    });
  }

  /**
   * @typedef {object} ProgressState
   *  The migration progress state for a resource.
   * @property {number} value
   *  One of the values from MigrationWizardConstants.PROGRESS_VALUE.
   * @property {string} [message=undefined]
   *  An optional message to display underneath the resource in
   *  the progress dialog. This message is only shown when value
   *  is not LOADING.
   * @property {string} [linkURL=undefined]
   *  The URL for an optional link to appear after the status message.
   *  This will only be shown if linkText is also not-empty.
   * @property {string} [linkText=undefined]
   *  The text for an optional link to appear after the status message.
   *  This will only be shown if linkURL is also not-empty.
   */

  /**
   * @typedef {
   *   keyof typeof MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES
   * } DISPLAYED_RESOURCE_TYPES_KEYS
   */

  /**
   * Called when showing the progress / success page of the wizard.
   *
   * @param {object} state
   *   The state object passed into setState. The following properties are
   *   used:
   * @param {string} state.key
   *   The key of the migrator being used.
   * @param {Record<DISPLAYED_RESOURCE_TYPES_KEYS, ProgressState>} state.progress
   *   An object whose keys match one of DISPLAYED_RESOURCE_TYPES.
   *
   *   Any resource type not included in state.progress will be hidden.
   */
  #onShowingProgress(state) {
    // Any resource progress group not included in state.progress is hidden.
    let progressPage = this.#shadowRoot.querySelector("div[name='page-progress']");
    let resourceGroups = progressPage.querySelectorAll(".resource-progress-group");
    this.#extensionsSuccessLink.textContent = "";
    let totalProgressGroups = Object.keys(state.progress).length;
    let remainingProgressGroups = totalProgressGroups;
    let totalWarnings = 0;
    for (let group of resourceGroups) {
      let resourceType = group.dataset.resourceType;
      if (!state.progress.hasOwnProperty(resourceType)) {
        group.hidden = true;
        continue;
      }
      group.hidden = false;
      let progressIcon = group.querySelector(".progress-icon");
      let messageText = group.querySelector("span.message-text");
      let supportLink = group.querySelector(".support-text");
      let labelSpan = group.querySelector("span[default-data-l10n-id]");
      if (labelSpan) {
        if (chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.MigrationWizardConstants.USES_FAVORITES.includes(state.key)) {
          document.l10n.setAttributes(labelSpan, labelSpan.getAttribute("ie-edge-data-l10n-id"));
        } else {
          document.l10n.setAttributes(labelSpan, labelSpan.getAttribute("default-data-l10n-id"));
        }
      }
      messageText.textContent = "";
      if (supportLink) {
        supportLink.textContent = "";
        supportLink.removeAttribute("href");
      }
      let progressValue = state.progress[resourceType].value;
      switch (progressValue) {
        case chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.MigrationWizardConstants.PROGRESS_VALUE.LOADING:
          {
            document.l10n.setAttributes(progressIcon, "migration-wizard-progress-icon-in-progress");
            progressIcon.setAttribute("state", "loading");
            messageText.textContent = "";
            supportLink.textContent = "";
            supportLink.removeAttribute("href");
            // With no status text, we re-insert the &nbsp; so that the status
            // text area does not fully collapse.
            messageText.appendChild(document.createTextNode("\u00A0"));
            break;
          }
        case chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.MigrationWizardConstants.PROGRESS_VALUE.SUCCESS:
          {
            document.l10n.setAttributes(progressIcon, "migration-wizard-progress-icon-completed");
            progressIcon.setAttribute("state", "success");
            messageText.textContent = state.progress[resourceType].message;
            if (resourceType == chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.EXTENSIONS) {
              messageText.textContent = "";
              this.#extensionsSuccessLink.target = "_blank";
              this.#extensionsSuccessLink.textContent = state.progress[resourceType].message;
            }
            remainingProgressGroups--;
            break;
          }
        case chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.MigrationWizardConstants.PROGRESS_VALUE.WARNING:
          {
            document.l10n.setAttributes(progressIcon, "migration-wizard-progress-icon-completed");
            progressIcon.setAttribute("state", "warning");
            messageText.textContent = state.progress[resourceType].message;
            supportLink.textContent = state.progress[resourceType].linkText;
            supportLink.href = state.progress[resourceType].linkURL;
            supportLink.target = "_blank";
            remainingProgressGroups--;
            totalWarnings++;
            break;
          }
        case chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.MigrationWizardConstants.PROGRESS_VALUE.INFO:
          {
            document.l10n.setAttributes(progressIcon, "migration-wizard-progress-icon-completed");
            progressIcon.setAttribute("state", "info");
            messageText.textContent = state.progress[resourceType].message;
            supportLink.textContent = state.progress[resourceType].linkText;
            supportLink.href = state.progress[resourceType].linkURL;
            supportLink.target = "_blank";
            if (resourceType == chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.EXTENSIONS) {
              messageText.textContent = "";
              this.#extensionsSuccessLink.target = "_blank";
              this.#extensionsSuccessLink.textContent = state.progress[resourceType].message;
            }
            remainingProgressGroups--;
            break;
          }
      }
    }
    let migrationDone = remainingProgressGroups == 0;
    let headerL10nID = "migration-wizard-progress-header";
    let header = this.#shadowRoot.getElementById("progress-header");
    if (migrationDone) {
      if (totalWarnings) {
        headerL10nID = "migration-wizard-progress-done-with-warnings-header";
      } else if (this.getAttribute("data-import-complete-success-string")) {
        header.textContent = this.getAttribute("data-import-complete-success-string");
      } else {
        headerL10nID = "migration-wizard-progress-done-header";
      }
    }
    document.l10n.setAttributes(header, headerL10nID);
    let finishButtons = progressPage.querySelectorAll(".finish-button");
    let cancelButton = progressPage.querySelector(".cancel-close");
    for (let finishButton of finishButtons) {
      finishButton.hidden = !migrationDone;
    }
    cancelButton.hidden = migrationDone;
    if (migrationDone) {
      // Since this might be called before the named-deck actually switches to
      // show the progress page, we cannot focus this button immediately.
      // Instead, we use a rAF to queue this up for focusing before the
      // next paint.
      requestAnimationFrame(() => {
        let button = this.#dialogMode ? progressPage.querySelector(".done-button") : progressPage.querySelector(".continue-button");
        button.focus({
          focusVisible: false
        });
      });
    }
  }

  /**
   * @typedef {
   *   keyof typeof MigrationWizardConstants.DISPLAYED_FILE_RESOURCE_TYPES
   * } DISPLAYED_FILE_RESOURCE_TYPES_KEYS
   */

  /**
   * Called when showing the progress / success page of the wizard for
   * files.
   *
   * @param {object} state
   *   The state object passed into setState. The following properties are
   *   used:
   * @param {string} state.title
   *   The string to display in the header.
   * @param {Record<DISPLAYED_FILE_RESOURCE_TYPES_KEYS, ProgressState>} state.progress
   *   An object whose keys match one of DISPLAYED_FILE_RESOURCE_TYPES.
   *
   *   Any resource type not included in state.progress will be hidden.
   */
  #onShowingFileImportProgress(state) {
    // Any resource progress group not included in state.progress is hidden.
    let progressPage = this.#shadowRoot.querySelector("div[name='page-file-import-progress']");
    let resourceGroups = progressPage.querySelectorAll(".resource-progress-group");
    let totalProgressGroups = Object.keys(state.progress).length;
    let remainingProgressGroups = totalProgressGroups;
    for (let group of resourceGroups) {
      let resourceType = group.dataset.resourceType;
      if (!state.progress.hasOwnProperty(resourceType)) {
        group.hidden = true;
        continue;
      }
      group.hidden = false;
      let progressIcon = group.querySelector(".progress-icon");
      let messageText = group.querySelector(".message-text");
      let progressValue = state.progress[resourceType].value;
      switch (progressValue) {
        case chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.MigrationWizardConstants.PROGRESS_VALUE.LOADING:
          {
            document.l10n.setAttributes(progressIcon, "migration-wizard-progress-icon-in-progress");
            progressIcon.setAttribute("state", "loading");
            messageText.textContent = "";
            // With no status text, we re-insert the &nbsp; so that the status
            // text area does not fully collapse.
            messageText.appendChild(document.createTextNode("\u00A0"));
            break;
          }
        case chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.MigrationWizardConstants.PROGRESS_VALUE.SUCCESS:
          {
            document.l10n.setAttributes(progressIcon, "migration-wizard-progress-icon-completed");
            progressIcon.setAttribute("state", "success");
            messageText.textContent = state.progress[resourceType].message;
            remainingProgressGroups--;
            break;
          }
        case chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.MigrationWizardConstants.PROGRESS_VALUE.WARNING:
          {
            document.l10n.setAttributes(progressIcon, "migration-wizard-progress-icon-completed");
            progressIcon.setAttribute("state", "warning");
            messageText.textContent = state.progress[resourceType].message;
            remainingProgressGroups--;
            break;
          }
        default:
          {
            console.error("Unrecognized state for file migration: ", progressValue);
          }
      }
    }
    let migrationDone = remainingProgressGroups == 0;
    let header = this.#shadowRoot.getElementById("file-import-progress-header");
    header.textContent = state.title;
    let doneButton = progressPage.querySelector(".primary");
    let cancelButton = progressPage.querySelector(".cancel-close");
    doneButton.hidden = !migrationDone;
    cancelButton.hidden = migrationDone;
    if (migrationDone) {
      // Since this might be called before the named-deck actually switches to
      // show the progress page, we cannot focus this button immediately.
      // Instead, we use a rAF to queue this up for focusing before the
      // next paint.
      requestAnimationFrame(() => {
        doneButton.focus({
          focusVisible: false
        });
      });
    }
  }

  /**
   * Called when showing the "no browsers found" page of the wizard.
   *
   * @param {object} state
   *   The state object passed into setState. The following properties are
   *   used:
   * @param {string} state.hasFileMigrators
   *   True if at least one FileMigrator is available for use.
   */
  #onShowingNoBrowsersFound(state) {
    this.#chooseImportFromFile.hidden = !state.hasFileMigrators;
  }

  /**
   * Certain parts of the MigrationWizard need to be modified slightly
   * in order to work properly with Storybook. This method should be called
   * to apply those changes after changing state.
   */
  #updateForStorybook() {
    // The CSS mask used for the progress spinner cannot be loaded via
    // chrome:// URIs in Storybook. We work around this by exposing the
    // progress elements as custom parts that the MigrationWizard story
    // can style on its own.
    this.#shadowRoot.querySelectorAll(".progress-icon").forEach(progressEl => {
      if (progressEl.getAttribute("state") == "loading") {
        progressEl.setAttribute("part", "progress-spinner");
      } else {
        progressEl.removeAttribute("part");
      }
    });
  }

  /**
   * A public method for starting a migration without the user needing
   * to choose a browser, profile or resource types. This is typically
   * done only for doing a profile reset.
   *
   * @param {string} migratorKey
   *   The key associated with the migrator to use.
   * @param {object|null} profile
   *   A representation of a browser profile. When not null, this is an
   *   object with a string "id" property, and a string "name" property.
   * @param {string[]} resourceTypes
   *   An array of resource types that import should occur for. These
   *   strings should be from MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.
   */
  doAutoImport(migratorKey, profile, resourceTypes) {
    let migrationEventDetail = this.#gatherMigrationEventDetails({
      migratorKey,
      profile,
      resourceTypes
    });
    this.dispatchEvent(new CustomEvent("MigrationWizard:BeginMigration", {
      bubbles: true,
      detail: migrationEventDetail
    }));
  }

  /**
   * Takes the current state of the selections page and bundles them
   * up into a MigrationWizard:BeginMigration event that can be handled
   * externally to perform the actual migration.
   */
  #doImport() {
    let migrationEventDetail = this.#gatherMigrationEventDetails();
    this.dispatchEvent(new CustomEvent("MigrationWizard:BeginMigration", {
      bubbles: true,
      detail: migrationEventDetail
    }));
  }

  /**
   * @typedef {object} MigrationDetails
   * @property {string} key
   *   The key for a MigratorBase subclass.
   * @property {object|null} profile
   *   A representation of a browser profile. This is serialized and originally
   *   sent down from the parent via the GetAvailableMigrators message.
   * @property {string[]} resourceTypes
   *   An array of resource types that the user is attempted to import. These
   *   strings should be from MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.
   * @property {boolean} hasPermissions
   *   True if this MigrationWizardChild told us that the associated
   *   MigratorBase subclass for the key has enough permission to read
   *   the requested resources.
   * @property {boolean} expandedDetails
   *   True if the user clicked on the <summary> element to expand the resource
   *   type list.
   * @property {boolean} autoMigration
   *   True if the migration is occurring automatically, without the user
   *   having selected any items explicitly from the wizard.
   * @property {string} [manualPasswordFilePath=null]
   *   An optional string argument that points to the path of a passwords
   *   export file from another browser. This file will have password imported
   *   from if supplied. This argument is ignored if the key is not for the
   *   Safari browser or the Chrome browser on Windows.
   */

  /**
   * Pulls information from the DOM state of the MigrationWizard and constructs
   * and returns an object that can be used to begin migration via and event
   * sent to the MigrationWizardChild. If autoMigrationDetails is provided,
   * this information is used to construct the object instead of the DOM state.
   *
   * @param {object} [autoMigrationDetails=null]
   *   Provided iff an automatic migration is being invoked. In that case, the
   *   details are constructed from this object rather than the wizard DOM state.
   * @param {string} autoMigrationDetails.migratorKey
   *   The key of the migrator to do automatic migration from.
   * @param {object|null} autoMigrationDetails.profile
   *   A representation of a browser profile. When not null, this is an
   *   object with a string "id" property, and a string "name" property.
   * @param {string[]} autoMigrationDetails.resourceTypes
   *   An array of resource types that import should occur for. These
   *   strings should be from MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.
   * @returns {MigrationDetails} details
   */
  #gatherMigrationEventDetails(autoMigrationDetails) {
    if (autoMigrationDetails?.migratorKey) {
      let {
        migratorKey,
        profile,
        resourceTypes
      } = autoMigrationDetails;
      return {
        key: migratorKey,
        type: chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.MigrationWizardConstants.MIGRATOR_TYPES.BROWSER,
        profile,
        resourceTypes,
        hasPermissions: true,
        expandedDetails: this.#expandedDetails,
        autoMigration: true
      };
    }
    let panelItem = this.#browserProfileSelector.selectedPanelItem;
    let key = panelItem.getAttribute("key");
    let type = panelItem.getAttribute("type");
    let profile = panelItem.profile;
    let hasPermissions = panelItem.hasPermissions;
    let resourceTypeFields = this.#resourceTypeList.querySelectorAll("label[data-resource-type]");
    let resourceTypes = [];
    for (let resourceTypeField of resourceTypeFields) {
      if (resourceTypeField.control.checked) {
        resourceTypes.push(resourceTypeField.dataset.resourceType);
      }
    }
    return {
      key,
      type,
      profile,
      resourceTypes,
      hasPermissions,
      expandedDetails: this.#expandedDetails,
      autoMigration: false
    };
  }

  /**
   * Sends a request to gain read access to the Safari profile folder on
   * macOS, and upon gaining access, performs a migration using the current
   * settings as gathered by #gatherMigrationEventDetails
   */
  #requestSafariPermissions() {
    let migrationEventDetail = this.#gatherMigrationEventDetails();
    this.dispatchEvent(new CustomEvent("MigrationWizard:RequestSafariPermissions", {
      bubbles: true,
      detail: migrationEventDetail
    }));
  }

  /**
   * Sends a request to get a string path for a passwords file exported
   * from another browser (like Safari on macOS, or Chrome on Windows)
   * where we cannot currently import automatically.
   */
  #selectManualPasswordFile() {
    let migrationEventDetail = this.#gatherMigrationEventDetails();
    this.dispatchEvent(new CustomEvent("MigrationWizard:SelectManualPasswordFile", {
      bubbles: true,
      detail: migrationEventDetail
    }));
  }

  /**
   * Sends a request to get read permissions for the data associated
   * with the selected browser.
   */
  #getPermissions() {
    let migrationEventDetail = this.#gatherMigrationEventDetails();
    this.dispatchEvent(new CustomEvent("MigrationWizard:GetPermissions", {
      bubbles: true,
      detail: migrationEventDetail
    }));
  }

  /**
   * Changes selected-data-header text and selected-data text based on
   * how many resources are checked
   */
  async #displaySelectedResources() {
    let resourceTypeLabels = this.#resourceTypeList.querySelectorAll("label:not([hidden])[data-resource-type]");
    let panelItem = this.#browserProfileSelector.selectedPanelItem;
    let key = panelItem.getAttribute("key");
    let totalResources = resourceTypeLabels.length;
    let checkedResources = 0;
    let selectedData = this.#shadowRoot.querySelector(".selected-data");
    let selectedDataArray = [];
    let resourceTypeToLabelIDs = {
      [chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.BOOKMARKS]: "migration-list-bookmark-label",
      [chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.PASSWORDS]: "migration-list-password-label",
      [chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.HISTORY]: "migration-list-history-label",
      [chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.EXTENSIONS]: "migration-list-extensions-label",
      [chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.FORMDATA]: "migration-list-autofill-label",
      [chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.PAYMENT_METHODS]: "migration-list-payment-methods-label"
    };
    if (chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.MigrationWizardConstants.USES_FAVORITES.includes(key)) {
      resourceTypeToLabelIDs[chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.BOOKMARKS] = "migration-list-favorites-label";
    }
    let resourceTypes = Object.keys(resourceTypeToLabelIDs);
    let labelIds = Object.values(resourceTypeToLabelIDs).map(id => {
      return {
        id
      };
    });
    let labels = await document.l10n.formatValues(labelIds);
    let resourceTypeLabelMapping = new Map();
    for (let i = 0; i < resourceTypes.length; ++i) {
      let resourceType = resourceTypes[i];
      resourceTypeLabelMapping.set(resourceType, labels[i]);
    }
    let formatter = new Intl.ListFormat(undefined, {
      style: "long",
      type: "conjunction"
    });
    for (let resourceTypeLabel of resourceTypeLabels) {
      if (resourceTypeLabel.control.checked) {
        selectedDataArray.push(resourceTypeLabelMapping.get(resourceTypeLabel.dataset.resourceType));
        checkedResources++;
      }
    }
    if (selectedDataArray.length) {
      selectedDataArray[0] = selectedDataArray[0].charAt(0).toLocaleUpperCase() + selectedDataArray[0].slice(1);
      selectedData.textContent = formatter.format(selectedDataArray);
    } else {
      selectedData.textContent = "\u00A0";
    }
    let selectedDataHeader = this.#shadowRoot.querySelector(".selected-data-header");
    let importButton = this.#shadowRoot.querySelector("#import");
    importButton.disabled = checkedResources == 0;
    if (this.hasAttribute("option-expander-title-string")) {
      let optionString = this.getAttribute("option-expander-title-string");
      selectedDataHeader.textContent = optionString;
    } else if (checkedResources == 0) {
      document.l10n.setAttributes(selectedDataHeader, "migration-no-selected-data-label");
    } else if (checkedResources < totalResources) {
      document.l10n.setAttributes(selectedDataHeader, "migration-selected-data-label");
    } else {
      document.l10n.setAttributes(selectedDataHeader, "migration-all-available-data-label");
    }
    let selectionPage = this.#shadowRoot.querySelector("div[name='page-selection']");
    selectionPage.toggleAttribute("single-item", totalResources == 1);
    this.dispatchEvent(new CustomEvent("MigrationWizard:ResourcesUpdated", {
      bubbles: true
    }));
  }

  /**
   * Updates content and layout to apply changes that are
   * informed through element attributes
   */
  #applyContentCustomizations() {
    let selectionPage = this.#shadowRoot.querySelector("div[name='page-selection']");
    if (this.hasAttribute("hide-select-all")) {
      let hideSelectAll = this.getAttribute("hide-select-all");
      selectionPage.toggleAttribute("hide-select-all", hideSelectAll);
    } else {
      selectionPage.removeAttribute("hide-select-all");
    }
    if (this.hasAttribute("import-button-string")) {
      if (this.getAttribute("import-button-string")) {
        this.#importButton.textContent = this.getAttribute("import-button-string");
      }
    }
    if (this.hasAttribute("checkbox-margin-inline")) {
      let inlineMargin = this.getAttribute("checkbox-margin-inline");
      this.style.setProperty("--resource-type-label-margin-inline", inlineMargin);
    }
    if (this.hasAttribute("checkbox-margin-block")) {
      let blockMargin = this.getAttribute("checkbox-margin-block");
      this.style.setProperty("--resource-type-label-margin-block", blockMargin);
    }
    if (this.hasAttribute("import-button-class")) {
      let importButtonClass = this.getAttribute("import-button-class");
      if (importButtonClass) {
        this.#importButton.classList.add(importButtonClass);
      }
    }
    if (this.hasAttribute("header-font-size")) {
      let headerFontSize = this.getAttribute("header-font-size");
      if (headerFontSize) {
        this.style.setProperty("--embedded-wizard-header-font-size", headerFontSize);
      }
    }
    if (this.hasAttribute("header-font-weight")) {
      let headerFontWeight = this.getAttribute("header-font-weight");
      if (headerFontWeight) {
        this.style.setProperty("--embedded-wizard-header-font-weight", headerFontWeight);
      }
    }
    if (this.hasAttribute("header-margin-block")) {
      let headerMarginBlock = this.getAttribute("header-margin-block");
      if (headerMarginBlock) {
        this.style.setProperty("--embedded-wizard-header-margin-block", headerMarginBlock);
      }
    }
    if (this.hasAttribute("subheader-font-size")) {
      let subheaderFontSize = this.getAttribute("subheader-font-size");
      if (subheaderFontSize) {
        this.style.setProperty("--embedded-wizard-subheader-font-size", subheaderFontSize);
      }
    }
    if (this.hasAttribute("subheader-font-weight")) {
      let subheaderFontWeight = this.getAttribute("subheader-font-weight");
      if (subheaderFontWeight) {
        this.style.setProperty("--embedded-wizard-subheader-font-weight", subheaderFontWeight);
      }
    }
    if (this.hasAttribute("subheader-margin-block")) {
      let subheaderMarginBlock = this.getAttribute("subheader-margin-block");
      if (subheaderMarginBlock) {
        this.style.setProperty("--embedded-wizard-subheader-margin-block", subheaderMarginBlock);
      }
    }
  }
  #handleClickEvent(event) {
    if (event.target == this.#importButton || event.target == this.#importFromFileButton) {
      this.#doImport();
    } else if (event.target.classList.contains("cancel-close") || event.target.classList.contains("finish-button")) {
      this.dispatchEvent(new CustomEvent("MigrationWizard:Close", {
        bubbles: true
      }));
    } else if (event.currentTarget == this.#browserProfileSelectorList && event.target != this.#browserProfileSelectorList) {
      this.#onBrowserProfileSelectionChanged(event.target);
      // If the user selected a file migration type from the selector, we'll
      // help the user out by immediately starting the file migration flow,
      // rather than waiting for them to click the "Select File".
      if (event.target.getAttribute("type") == chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.MigrationWizardConstants.MIGRATOR_TYPES.FILE) {
        this.#doImport();
      }
    } else if (event.target == this.#safariPermissionButton) {
      this.#requestSafariPermissions();
    } else if (event.currentTarget == this.#resourceSummary) {
      this.#expandedDetails = true;
    } else if (event.target == this.#chooseImportFromFile) {
      this.dispatchEvent(new CustomEvent("MigrationWizard:RequestState", {
        bubbles: true,
        detail: {
          allowOnlyFileMigrators: true
        }
      }));
    } else if (event.target.classList.contains("manual-password-import-skip")) {
      // If the user chose to skip importing passwords manually from a CSV, we
      // programmatically uncheck the PASSWORDS resource type and re-request
      // import.
      let checkbox = this.#shadowRoot.querySelector(`label[data-resource-type="${chrome_browser_content_migration_migration_wizard_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES.PASSWORDS}"]`).control;
      checkbox.checked = false;

      // If there are no other checked checkboxes, go back to the selection
      // screen.
      let checked = this.#shadowRoot.querySelectorAll(`label[data-resource-type] > input:checked`).length;
      if (!checked) {
        this.requestState();
      } else {
        this.#doImport();
      }
    } else if (event.target.classList.contains("manual-password-import-select")) {
      this.#selectManualPasswordFile();
    } else if (event.target == this.#extensionsSuccessLink) {
      this.dispatchEvent(new CustomEvent("MigrationWizard:OpenAboutAddons", {
        bubbles: true
      }));
      event.preventDefault();
    } else if ([...this.#supportTextLinks].includes(event.target) && this.hasAttribute("in-aboutwelcome-bundle")) {
      // When we're running in the context of a spotlight
      // the click events for standard anchors are being gobbled up by spotlight,
      // so we're also firing a custom event to handle those clicks when in that context
      this.dispatchEvent(new CustomEvent("MigrationWizard:OpenURL", {
        bubbles: true,
        detail: {
          url: event.target.href,
          where: "tabshifted"
        }
      }));
      event.preventDefault();
    } else if (event.target == this.#getPermissionsButton) {
      this.#getPermissions();
    }
  }
  #handleChangeEvent(event) {
    if (event.target == this.#browserProfileSelector) {
      this.#onBrowserProfileSelectionChanged();
    } else if (event.target == this.#selectAllCheckbox) {
      let checkboxes = this.#shadowRoot.querySelectorAll('label[data-resource-type]:not([hidden]) > input[type="checkbox"]');
      for (let checkbox of checkboxes) {
        checkbox.checked = this.#selectAllCheckbox.checked;
      }
      this.#displaySelectedResources();
    } else {
      let checkboxes = this.#shadowRoot.querySelectorAll('label[data-resource-type]:not([hidden]) > input[type="checkbox"]');
      let allVisibleChecked = Array.from(checkboxes).every(checkbox => {
        return checkbox.checked;
      });
      this.#selectAllCheckbox.checked = allVisibleChecked;
      this.#displaySelectedResources();
    }
  }
  handleEvent(event) {
    if (event.target == this.#browserProfileSelector && (event.type == "mousedown" || event.type == "click" && event.mozInputSource == MouseEvent.MOZ_SOURCE_KEYBOARD)) {
      this.#browserProfileSelectorList.toggle(event);
      return;
    }
    switch (event.type) {
      case "click":
        {
          this.#handleClickEvent(event);
          break;
        }
      case "change":
        {
          this.#handleChangeEvent(event);
          break;
        }
    }
  }
}
if (globalThis.customElements) {
  customElements.define("migration-wizard", MigrationWizard);
}

/***/ }),

/***/ 92664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PLATFORM_LINUX: () => (/* binding */ PLATFORM_LINUX),
/* harmony export */   PLATFORM_MACOS: () => (/* binding */ PLATFORM_MACOS),
/* harmony export */   PLATFORM_WINDOWS: () => (/* binding */ PLATFORM_WINDOWS),
/* harmony export */   "default": () => (/* binding */ MozButtonGroup)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_button_group_moz_button_group_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11258);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11540);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48334);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



const PLATFORM_LINUX = "linux";
const PLATFORM_MACOS = "macosx";
const PLATFORM_WINDOWS = "win";

/**
 * A grouping of buttons. Primary button order will be set automatically based
 * on class="primary", type="submit" or autofocus attribute. Set slot="primary"
 * on a primary button that does not have primary styling to set its position.
 *
 * @tagname moz-button-group
 * @property {string} platform - The detected platform, set automatically.
 */
class MozButtonGroup extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static queries = {
    defaultSlotEl: "slot:not([name])",
    primarySlotEl: "slot[name=primary]"
  };
  static properties = {
    platform: {
      state: true
    }
  };
  constructor() {
    super();
    this.#detectPlatform();
  }
  #detectPlatform() {
    if (typeof AppConstants !== "undefined") {
      this.platform = AppConstants.platform;
    } else if (navigator.platform.includes("Linux")) {
      this.platform = PLATFORM_LINUX;
    } else if (navigator.platform.includes("Mac")) {
      this.platform = PLATFORM_MACOS;
    } else {
      this.platform = PLATFORM_WINDOWS;
    }
  }
  onSlotchange() {
    for (let child of this.defaultSlotEl.assignedNodes()) {
      if (!(child instanceof Element)) {
        // Text nodes won't support classList or getAttribute.
        continue;
      }
      switch (child.localName) {
        case "button":
          if (child.classList.contains("primary") || child.getAttribute("type") == "submit" || child.hasAttribute("autofocus") || child.hasAttribute("default")) {
            child.slot = "primary";
          }
          break;
        case "moz-button":
          if (child.type == "primary" || child.type == "destructive") {
            child.slot = "primary";
          }
          break;
      }
    }
    this.#reorderLightDom();
  }
  #reorderLightDom() {
    let primarySlottedChildren = [...this.primarySlotEl.assignedNodes()];
    if (this.platform == PLATFORM_WINDOWS) {
      primarySlottedChildren.reverse();
      for (let child of primarySlottedChildren) {
        child.parentElement.prepend(child);
      }
    } else {
      for (let child of primarySlottedChildren) {
        // Ensure the primary buttons are at the end of the light DOM.
        child.parentElement.append(child);
      }
    }
  }
  updated(changedProperties) {
    if (changedProperties.has("platform")) {
      this.#reorderLightDom();
    }
  }
  render() {
    let slots = [(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)` <slot @slotchange=${this.onSlotchange}></slot> `, (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)` <slot name="primary"></slot> `];
    if (this.platform == PLATFORM_WINDOWS) {
      slots = [slots[1], slots[0]];
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_button_group_moz_button_group_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      ${slots}
    `;
  }
}
customElements.define("moz-button-group", MozButtonGroup);

/***/ })

}]);
//# sourceMappingURL=migration-wizard-stories.dc16c504.iframe.bundle.js.map