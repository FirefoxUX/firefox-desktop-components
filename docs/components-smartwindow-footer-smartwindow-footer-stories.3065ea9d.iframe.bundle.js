"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[2631],{

/***/ 22771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var chrome_browser_content_aiwindow_components_smartwindow_footer_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42142);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/AI Window/Smartwindow Footer",
  component: "smartwindow-footer",
  parameters: {
    status: "in-development",
    docs: {
      description: {
        component: "A footer component for the Smart Window fullpage mode that provides navigation buttons for History and Chats."
      }
    },
    fluent: `
aiwindow-history = History
    .aria-label = View browsing history
    .tooltiptext = View your browsing history
aiwindow-chats = Chats
    .aria-label = View chat conversations
    .tooltiptext = View your chat conversations
    `
  }
});
const Template = () => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <div style="width: 400px; padding: 20px;">
    <smartwindow-footer></smartwindow-footer>
  </div>
`;
const Default = Template.bind({});
Default.args = {};

/***/ }),

/***/ 42142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SmartwindowFooter: () => (/* binding */ SmartwindowFooter)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_smartwindow_footer_smartwindow_footer_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92118);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



const ALLOWED_ACTIONS = ["chats", "history"];

/**
 * A Custome element to mangage Smart Window fullpage footer
 */
class SmartwindowFooter extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  handleActionClick(action) {
    if (!ALLOWED_ACTIONS.includes(action)) {
      console.warn("Action not allowed");
      return;
    }
    const topWin = window.browsingContext.topChromeWindow;
    topWin.FirefoxViewHandler.openTab(action);
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_smartwindow_footer_smartwindow_footer_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <div class="footer-container">
        <moz-button
          size="small"
          type="ghost"
          data-l10n-id="smartwindow-footer-history"
          data-l10n-attrs="tooltiptext,aria-label"
          class="footer-action-button"
          iconsrc="chrome://browser/content/firefoxview/view-history.svg"
          @click=${() => {
      this.handleActionClick("history");
    }}
        ></moz-button>
        <moz-button
          size="small"
          type="ghost"
          data-l10n-id="smartwindow-footer-chats"
          data-l10n-attrs="tooltiptext,aria-label"
          class="footer-action-button"
          iconsrc="chrome://browser/content/firefoxview/view-chats.svg"
          @click=${() => {
      this.handleActionClick("chats");
    }}
        >
        </moz-button>
      </div>
    `;
  }
}
customElements.define("smartwindow-footer", SmartwindowFooter);

/***/ }),

/***/ 92118:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "smartwindow-footer.2cce553b6ed8c766cdb5.css";

/***/ })

}]);
//# sourceMappingURL=components-smartwindow-footer-smartwindow-footer-stories.3065ea9d.iframe.bundle.js.map