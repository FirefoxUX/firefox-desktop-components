"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[2927],{

/***/ 22970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SmartWindowTopSites: () => (/* binding */ SmartWindowTopSites)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_smartwindow_topsites_smartwindow_topsites_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40462);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * A component that displays a single row of Top Sites tiles below the
 * Smartbar. Each tile shows a favicon and the site's title; selecting one
 * dispatches a `SmartWindowTopSites:site-selected` event with the site URL.
 *
 * @property {Array<object>} sites - Top Sites as returned by TopSites.getSites()
 */
class SmartWindowTopSites extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    sites: {
      type: Array
    }
  };
  constructor() {
    super();
    this.sites = [];
  }
  #siteSelected(site, position) {
    this.dispatchEvent(new CustomEvent("SmartWindowTopSites:site-selected", {
      detail: {
        url: site.url,
        position
      },
      bubbles: true,
      composed: true
    }));
  }
  #iconSrc(site) {
    return site.tippyTopIcon || site.favicon || `page-icon:${site.url}`;
  }
  render() {
    if (!this.sites.length) {
      return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)``;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_smartwindow_topsites_smartwindow_topsites_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <div class="sw-topsites-container" role="list">
        ${this.sites.map((site, position) => {
      const title = site.label || site.hostname;
      return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
            <a
              class="sw-topsite"
              role="listitem"
              href=${site.url}
              title=${title}
              @click=${e => {
        e.preventDefault();
        this.#siteSelected(site, position);
      }}
            >
              <span class="sw-topsite-icon">
                <img alt="" src=${this.#iconSrc(site)} />
              </span>
              <span class="sw-topsite-title">${title}</span>
            </a>
          `;
    })}
      </div>
    `;
  }
}
customElements.define("smartwindow-topsites", SmartWindowTopSites);

/***/ }),

/***/ 40462:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "smartwindow-topsites.629da5daefafc4c3ebc0.css";

/***/ }),

/***/ 72319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   Empty: () => (/* binding */ Empty),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var chrome_browser_content_aiwindow_components_smartwindow_topsites_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22970);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/AI Window/Smartwindow Topsites",
  component: "smartwindow-topsites",
  parameters: {
    status: "in-development",
    docs: {
      description: {
        component: "A single row of Top Sites tiles shown below the Smartbar in Smart Window fullpage mode. Each tile shows a favicon and title; selecting one dispatches a `SmartWindowTopSites:site-selected` event with the site URL."
      }
    }
  }
});
const sampleSites = [{
  url: "https://www.wikipedia.org/",
  label: "Wikipedia",
  favicon: "https://www.wikipedia.org/static/favicon/wikipedia.ico"
}, {
  url: "https://www.youtube.com/",
  label: "YouTube",
  favicon: "https://www.youtube.com/favicon.ico"
}, {
  url: "https://apnews.com/",
  label: "AP News",
  favicon: "https://apnews.com/favicon.ico"
}, {
  url: "https://www.reddit.com/",
  label: "Reddit",
  favicon: "https://www.reddit.com/favicon.ico"
}];
const Template = ({
  sites
}) => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <div style="width: 100%; min-height: 200px; padding: 20px;">
    <smartwindow-topsites
      .sites=${sites}
      @SmartWindowTopSites:site-selected=${e => {
  alert(`Selected: ${e.detail.url}`);
}}
    ></smartwindow-topsites>
  </div>
`;
const Default = Template.bind({});
Default.args = {
  sites: sampleSites
};
const Empty = Template.bind({});
Empty.args = {
  sites: []
};

/***/ })

}]);
//# sourceMappingURL=components-smartwindow-topsites-smartwindow-topsites-stories.16f6373e.iframe.bundle.js.map