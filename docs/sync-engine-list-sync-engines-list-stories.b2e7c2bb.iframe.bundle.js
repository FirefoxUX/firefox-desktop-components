"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[2869],{

/***/ 12670:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "placeholder-message.51f076c40a3f89b142aa.css";

/***/ }),

/***/ 36383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var browser_components_preferences_widgets_sync_engine_list_sync_engines_list_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62739);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82242);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(616);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



window.MozXULElement.insertFTLIfNeeded("browser/preferences/preferences.ftl");

/**
 * @typedef {object} EngineInfo
 * @property {string} iconSrc - The icon URL for the engine.
 * @property {string} l10nId - The localization ID for the engine.
 */

/**
 * @type {Record<string, EngineInfo>}
 */
const engineTypeToMetadata = {
  bookmarks: {
    iconSrc: "chrome://browser/skin/bookmark-hollow.svg",
    l10nId: "sync-currently-syncing-bookmarks"
  },
  history: {
    iconSrc: "chrome://browser/skin/history.svg",
    l10nId: "sync-currently-syncing-history"
  },
  tabs: {
    iconSrc: "chrome://browser/skin/tabs.svg",
    l10nId: "sync-currently-syncing-tabs"
  },
  passwords: {
    iconSrc: "chrome://browser/skin/login.svg",
    l10nId: "sync-currently-syncing-passwords"
  },
  addresses: {
    iconSrc: "chrome://browser/skin/notification-icons/geo.svg",
    l10nId: "sync-currently-syncing-addresses"
  },
  payments: {
    iconSrc: "chrome://browser/skin/payment-methods-16.svg",
    l10nId: "sync-currently-syncing-payment-methods"
  },
  addons: {
    iconSrc: "chrome://mozapps/skin/extensions/extension.svg",
    l10nId: "sync-currently-syncing-addons"
  },
  settings: {
    iconSrc: "chrome://global/skin/icons/settings.svg",
    l10nId: "sync-currently-syncing-settings"
  }
};

/**
 * A custom element that displays synced engines in Sync settings section.
 *
 * @tagname sync-engines-list
 * @property {string[]} engines - Array of engine types to display.
 *   Options: bookmarks, history, tabs, passwords, addresses, payments, addons, settings.
 */
class SyncEnginesList extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.MozLitElement {
  static properties = {
    engines: {
      type: Array
    }
  };
  constructor() {
    super();

    /** @type {string[]} */
    this.engines = [];
  }

  /**
   * @param {string} type
   */
  engineTemplate(type) {
    let metadata = engineTypeToMetadata[type];
    if (!metadata) {
      return null;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      <div class="sync-engine">
        <img src=${metadata.iconSrc} role="presentation" />
        <label data-l10n-id=${metadata.l10nId}></label>
      </div>
    `;
  }
  syncedEnginesTemplate() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<moz-box-item>
      <div class="engines-list-wrapper">
        <span
          id="heading"
          data-l10n-id="sync-syncing-across-devices-heading-2"
        ></span>
        <div class="engines-list-container">
          ${this.engines.map(type => this.engineTemplate(type))}
        </div>
      </div>
    </moz-box-item>`;
  }
  emptyStateTemplate() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<placeholder-message
      data-l10n-id="sync-syncing-across-devices-empty-state"
      imageSrc="chrome://global/skin/illustrations/security-error.svg"
    ></placeholder-message>`;
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_preferences_widgets_sync_engine_list_sync_engines_list_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      ${this.engines.length ? this.syncedEnginesTemplate() : this.emptyStateTemplate()}
    `;
  }
}
customElements.define("sync-engines-list", SyncEnginesList);

/***/ }),

/***/ 41638:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   EmptyState: () => (/* binding */ EmptyState),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var chrome_browser_content_preferences_widgets_sync_engines_list_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36383);
/* harmony import */ var chrome_browser_content_preferences_widgets_placeholder_message_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45184);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/Settings/Sync Engines List",
  component: "sync-engines-list",
  parameters: {
    status: "in-development"
  },
  argTypes: {
    engines: {
      control: "check",
      options: ["bookmarks", "history", "tabs", "passwords", "settings", "addresses", "payments", "addons"]
    }
  }
});
window.MozXULElement.insertFTLIfNeeded("browser/preferences/preferences.ftl");
const Template = ({
  engines = []
}) => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <div style="max-width: 520px">
    <sync-engines-list .engines=${engines}></sync-engines-list>
  </div>
`;
const Default = Template.bind({});
Default.args = {
  // Note: "addons" icon currently doesn’t render in Storybook.
  engines: ["bookmarks", "history", "tabs", "passwords", "settings", "addresses", "payments"]
};
const EmptyState = Template.bind({});
EmptyState.args = {
  engines: []
};

/***/ }),

/***/ 45184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var toolkit_themes_shared_design_system_src_text_and_typography_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44311);
/* harmony import */ var browser_components_preferences_widgets_placeholder_message_placeholder_message_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12670);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(616);


/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



class PlaceholderMessage extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    imageSrc: {
      type: String
    },
    label: {
      type: String,
      fluent: true
    },
    description: {
      type: String,
      fluent: true
    },
    supportPage: {
      type: String,
      attribute: "support-page"
    }
  };
  constructor() {
    super();

    /** @type {string} */
    this.imageSrc = "";

    /** @type {string} */
    this.label = "";

    /** @type {string} */
    this.description = "";

    /** @type {string} */
    this.supportPage = "";
  }
  labelTemplate() {
    if (!this.label) {
      return "";
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__.html)`<div class="label-wrapper">
      <span class="label heading-medium" id="label">${this.label}</span>${!this.description ? this.supportLinkTemplate() : ""}
    </div>`;
  }
  descriptionTemplate() {
    if (!this.description) {
      return "";
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__.html)`<div class="description-wrapper">
      <span class="description" id="description"> ${this.description}</span
      >${this.supportLinkTemplate()}
    </div>`;
  }
  supportLinkTemplate() {
    if (!this.supportPage) {
      return "";
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__.html)`<a
      is="moz-support-link"
      class="support-link"
      support-page=${this.supportPage}
      part="support-link"
      aria-describedby="label description"
    ></a>`;
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_preferences_widgets_placeholder_message_placeholder_message_css__WEBPACK_IMPORTED_MODULE_1__}"
      />
      <link
        rel="stylesheet"
        href="${toolkit_themes_shared_design_system_src_text_and_typography_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <moz-box-item>
        <div class="placeholder-container">
          <img src=${this.imageSrc} role="presentation" />
          <div class="text-container">
            ${this.labelTemplate()} ${this.descriptionTemplate()}
          </div>
        </div>
      </moz-box-item>
    `;
  }
}
customElements.define("placeholder-message", PlaceholderMessage);

/***/ }),

/***/ 62739:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "sync-engines-list.333b4d8e2d9621a888e1.css";

/***/ })

}]);
//# sourceMappingURL=sync-engine-list-sync-engines-list-stories.b2e7c2bb.iframe.bundle.js.map