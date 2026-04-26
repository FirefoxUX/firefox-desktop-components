"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[5314],{

/***/ 61728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var browser_components_preferences_widgets_update_state_update_state_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62182);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82242);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(616);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * @typedef {object} UpdateStateInfo
 * @property {string} l10nId - The localization ID for the update-state label.
 * @property {string} [iconSrc] - The icon URL for the update-state.
 * @property {string} [buttonL10nId] - The localization ID for the update-state button.
 * @property {string} [buttonId] - The ID for the update-state button.
 * @property {string} [buttonAction] - The action for the update-state button.
 * @property {boolean} [buttonDisabled] - The disabled state of the update-state button.
 */

/**
 * @type {Record<string, UpdateStateInfo>}
 */
const updateStatusToMetadata = {
  checkForUpdates: {
    l10nId: "",
    buttonL10nId: "update-checkForUpdatesButton",
    buttonId: "checkForUpdatesButton",
    buttonAction: "check"
  },
  downloadAndInstall: {
    l10nId: "",
    buttonId: "downloadAndInstallButton",
    buttonAction: "download"
  },
  apply: {
    l10nId: "",
    buttonL10nId: "update-updateButton",
    buttonId: "updateButton",
    buttonAction: "update"
  },
  checkingForUpdates: {
    l10nId: "settings-update-checking-for-updates",
    iconSrc: "chrome://global/skin/icons/loading.svg",
    buttonL10nId: "update-checkForUpdatesButton",
    buttonDisabled: true
  },
  downloading: {
    l10nId: "settings-update-downloading-2",
    iconSrc: "chrome://global/skin/icons/loading.svg"
  },
  applying: {
    l10nId: "settings-update-applying",
    iconSrc: "chrome://global/skin/icons/loading.svg"
  },
  downloadFailed: {
    l10nId: "update-failed-main",
    buttonL10nId: "update-checkForUpdatesButton",
    buttonId: "checkForUpdatesButton2",
    buttonAction: "check"
  },
  policyDisabled: {
    l10nId: "settings-update-policy-disabled",
    buttonL10nId: "update-checkForUpdatesButton",
    buttonDisabled: true
  },
  noUpdatesFound: {
    l10nId: "settings-update-no-updates-found",
    iconSrc: "chrome://global/skin/icons/check-filled.svg",
    buttonL10nId: "update-checkForUpdatesButton",
    buttonId: "checkForUpdatesButton3",
    buttonAction: "check"
  },
  checkingFailed: {
    l10nId: "settings-update-checking-failed",
    iconSrc: "chrome://global/skin/icons/warning.svg",
    buttonL10nId: "update-checkForUpdatesButton",
    buttonId: "checkForUpdatesButton4",
    buttonAction: "check"
  },
  otherInstanceHandlingUpdates: {
    l10nId: "settings-update-other-instance-handling-updates",
    buttonL10nId: "update-checkForUpdatesButton",
    buttonDisabled: true
  },
  manualUpdate: {
    l10nId: "settings-update-manual-with-link",
    iconSrc: "chrome://global/skin/icons/warning.svg",
    buttonL10nId: "update-checkForUpdatesButton",
    buttonDisabled: true
  },
  unsupportedSystem: {
    l10nId: "settings-update-unsupported",
    buttonL10nId: "update-checkForUpdatesButton",
    buttonDisabled: true
  },
  restarting: {
    l10nId: "settings-update-restarting",
    iconSrc: "chrome://global/skin/icons/loading.svg",
    buttonL10nId: "update-updateButton",
    buttonDisabled: true
  },
  internalError: {
    l10nId: "settings-update-internal-error",
    iconSrc: "chrome://global/skin/icons/warning.svg",
    buttonL10nId: "update-checkForUpdatesButton",
    buttonDisabled: true
  }
};
class UpdateState extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.MozLitElement {
  static properties = {
    value: {
      type: String
    },
    linkURL: {
      type: String
    },
    updateVersion: {
      type: String
    },
    transfer: {
      type: String
    }
  };
  constructor() {
    super();

    /** @type {string} */
    this.value = "";
    /** @type {string} */
    this.linkURL = "";
    /** @type {string} */
    this.updateVersion = "";
    /** @type {string} */
    this.transfer = "";
  }
  update(changedProperties) {
    super.update(changedProperties);
    if (changedProperties.has("transfer") && this.value === "downloading") {
      // Dispatched so tests can observe transfer property updates during downloads.
      this.dispatchEvent(new CustomEvent("update-state:downloading"));
    }
  }
  get manualURL() {
    if (window.IS_STORYBOOK) {
      return new URL("https://www.mozilla.org/firefox/");
    }
    return new URL(Services.urlFormatter.formatURLPref("app.update.url.manual"));
  }
  handleButtonClick() {
    let {
      buttonAction
    } = updateStatusToMetadata[this.value];
    if (!buttonAction || !window.gAppUpdater) {
      return;
    }
    switch (buttonAction) {
      case "check":
        window.gAppUpdater.checkForUpdates();
        break;
      case "download":
        window.gAppUpdater.startDownload();
        break;
      case "update":
        window.gAppUpdater.buttonRestartAfterDownload();
        break;
    }
  }
  labelWithLinkTemplate() {
    let {
      l10nId,
      iconSrc
    } = updateStatusToMetadata[this.value];
    if (!l10nId) {
      return "";
    }
    let linkURL = this.value == "unsupportedSystem" ? this.linkURL : this.manualURL.href;

    // The <a> elements must remain as direct children of the localized label
    // with their data-l10n-name attributes in case locales want or need to make
    // changes to the structure or the order of the string.
    if (this.value === "unsupportedSystem") {
      return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<span class="label" id="label" data-l10n-id=${l10nId}
        ><a
          data-l10n-name="unsupported-link"
          target="_blank"
          part="support-link"
          href=${linkURL}
        ></a
      ></span>`;
    } else if (this.value === "downloadFailed") {
      return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<span class="label" id="label" data-l10n-id=${l10nId}
        ><a
          data-l10n-name="failed-link-main"
          target="_blank"
          part="support-link"
          href=${linkURL}
        ></a
      ></span>`;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<div class="text-content">
      <img src=${iconSrc} alt="" class="icon" />
      <span
        class="label"
        id="label"
        data-l10n-id=${l10nId}
        data-l10n-args=${JSON.stringify({
      displayUrl: `${this.manualURL.origin}${this.manualURL.pathname}`
    })}
        ><a
          data-l10n-name="manual-link"
          target="_blank"
          part="support-link"
          href=${linkURL}
        ></a
      ></span>
    </div>`;
  }
  buttonTemplate() {
    let {
      l10nId,
      buttonId,
      buttonL10nId,
      buttonDisabled
    } = updateStatusToMetadata[this.value];
    if (!buttonId && !buttonL10nId) {
      return "";
    }
    if (!l10nId) {
      if (this.value === "downloadAndInstall") {
        if (!this.updateVersion) {
          return "";
        }
        let bundle = Services.strings.createBundle("chrome://browser/locale/browser.properties");
        let buttonLabel = bundle.formatStringFromName("update.downloadAndInstallButton.label", [this.updateVersion]);
        let buttonAccessKey = bundle.GetStringFromName("update.downloadAndInstallButton.accesskey");
        return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<moz-box-button
          label=${buttonLabel}
          accesskey=${buttonAccessKey}
          @click=${this.handleButtonClick}
        >
        </moz-box-button>`;
      }
      return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<moz-box-button
        id=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(buttonId)}
        data-l10n-id=${buttonL10nId}
        @click=${this.handleButtonClick}
      >
      </moz-box-button>`;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<moz-button
      id=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(buttonId)}
      data-l10n-id=${buttonL10nId}
      ?disabled=${buttonDisabled}
      @click=${this.handleButtonClick}
      slot="actions"
    >
    </moz-button>`;
  }
  render() {
    if (!this.value || !updateStatusToMetadata[this.value]) {
      return "";
    }
    let {
      l10nId,
      iconSrc
    } = updateStatusToMetadata[this.value];
    if (!l10nId) {
      return this.buttonTemplate();
    }
    if (this.value === "manualUpdate" || this.value === "internalError" || this.value === "unsupportedSystem" || this.value === "downloadFailed") {
      return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
        <link
          rel="stylesheet"
          href="${browser_components_preferences_widgets_update_state_update_state_css__WEBPACK_IMPORTED_MODULE_0__}"
        />
        <moz-box-item class=${this.value}>
          ${this.labelWithLinkTemplate()} ${this.buttonTemplate()}
        </moz-box-item>
      `;
    }
    let dataL10nArgs = {};
    if (this.value === "downloading") {
      dataL10nArgs.transfer = this.transfer;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_preferences_widgets_update_state_update_state_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <moz-box-item
        iconsrc=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(iconSrc)}
        data-l10n-id=${l10nId}
        data-l10n-args=${JSON.stringify(dataL10nArgs)}
        class=${this.value}
      >
        ${this.buttonTemplate()}
      </moz-box-item>
    `;
  }
}
customElements.define("update-state", UpdateState);

/***/ }),

/***/ 62182:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "update-state.836735901149efacab70.css";

/***/ }),

/***/ 77593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var chrome_browser_content_preferences_widgets_update_state_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61728);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/Settings/Update State",
  component: "update-state",
  parameters: {
    status: "in-development"
  },
  argTypes: {
    value: {
      control: "select",
      options: ["checkForUpdates", "apply", "checkingForUpdates", "downloading", "applying", "downloadFailed", "policyDisabled", "noUpdatesFound", "checkingFailed", "otherInstanceHandlingUpdates", "manualUpdate", "unsupportedSystem", "restarting", "internalError"]
    }
  }
});
window.MozXULElement.insertFTLIfNeeded("browser/aboutDialog.ftl");
const Template = ({
  value = "",
  linkURL = "https://support.mozilla.org",
  transfer = "1.0 of 1.4 KB"
}) => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <div style="max-width: 700px">
    <update-state
      value=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(value)}
      linkURL=${linkURL}
      transfer=${transfer}
    ></update-state>
  </div>
`;
const Default = Template.bind({});
Default.args = {
  value: "noUpdatesFound"
};

/***/ })

}]);
//# sourceMappingURL=update-state-update-state-stories.d15f7e5b.iframe.bundle.js.map