"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[216],{

/***/ 59313:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "breach-alert-panel.2cedcf5fa27aa099680c.css";

/***/ }),

/***/ 78115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BreachAlert)
/* harmony export */ });
/* harmony import */ var browser_components_controlcenter_content_components_breach_alert_panel_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59313);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */




/**
 * Small card for use in the Trust Panel that alerts the user of website breaches
 */
class BreachAlert extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    hidden: {
      type: Boolean,
      // If this is not set to `true`, nothing will show up after toggling the
      // pref on for the first time and then viewing the trust panel on a
      // breached website:
      reflect: true
    },
    breachStatus: {
      type: String
    },
    breachNames: {
      type: Array
    }
  };
  constructor() {
    super();
    this.hidden = false;
    this.breachStatus = "disabled";
  }
  async _handleCta(_event) {
    Glean.trustpanel.breachAlertDiscoveredMonitor.record();
    this.documentGlobal.switchToTabHavingURI("https://monitor.mozilla.org/?utm_medium=referral&utm_source=firefox-desktop&utm_campaign=privacy-panel&utm_content=sign-up-global", true);

    // Store dismissal when user clicks to check monitor
    await this._dismissBreach();
    this.hidden = true;
  }
  async _handleDismiss(_event) {
    Glean.trustpanel.breachAlertDismissed.record({
      breach_status: this.breachStatus
    });

    // Store dismissal
    await this._dismissBreach();
    this.hidden = true;
  }
  async _dismissBreach() {
    if (!this.breachNames) {
      console.warn("Cannot dismiss breach alert: no breach names provided");
      return;
    }
    this.dispatchEvent(new CustomEvent("dismissBreachAlert", {
      detail: {
        breachNames: this.breachNames
      },
      bubbles: true,
      composed: true
    }));
  }
  render() {
    if (this.breachStatus === "disabled" || this.breachStatus === "not-breached") {
      return null;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_controlcenter_content_components_breach_alert_panel_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <div class="container" ?hidden=${this.hidden}>
        <div class="card">
          <div class="main">
            <img
              class="fox-icon-legacy"
              src="chrome://browser/content/controlcenter/assets/fox-concern.svg"
              alt=""
            />
            <div class="content">
              <h2
                class="heading"
                data-l10n-id="trustpanel-breachalerts-anonymous-breached-header"
              ></h2>
              <p
                data-l10n-id="trustpanel-breachalerts-anonymous-breached-description"
              ></p>
            </div>
            <img
              class="shield-icon"
              src="chrome://browser/content/controlcenter/assets/breach-alert-shield-warning.svg"
              alt=""
            />
          </div>
          <moz-button-group>
            <moz-button
              @click=${this._handleDismiss}
              data-l10n-id="trustpanel-breachalerts-anonymous-breached-button-dismiss"
            ></moz-button>
            <moz-button
              type="primary"
              @click=${this._handleCta}
              data-l10n-id="trustpanel-breachalerts-anonymous-breached-button-check-monitor"
            ></moz-button>
          </moz-button-group>
        </div>
      </div>
    `;
  }
}
customElements.define("breach-alert-panel", BreachAlert);

/***/ }),

/***/ 81610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnonymousBreachAlert: () => (/* binding */ AnonymousBreachAlert),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var _breach_alert_panel_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78115);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// eslint-disable-next-line import/no-unresolved


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/Trust Panel/Breach Alert",
  component: "breach-alert-panel"
});
window.MozXULElement.insertFTLIfNeeded("branding/brand.ftl");
window.MozXULElement.insertFTLIfNeeded("toolkit/branding/brandings.ftl");
window.MozXULElement.insertFTLIfNeeded("browser/browser.ftl");
const AnonymousBreachAlert = ({
  hidden,
  breachStatus
}) => {
  return (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
    <breach-alert-panel ?hidden=${hidden} .breachStatus=${breachStatus}>
    </breach-alert-panel>
  `;
};
AnonymousBreachAlert.argTypes = {
  hidden: {
    defaultValue: false,
    type: "boolean"
  },
  breachStatus: {
    defaultValue: "breached",
    type: {
      name: "enum",
      value: ["disabled", "breached", "not-breached"]
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=breach-alert-panel-stories.44952241.iframe.bundle.js.map