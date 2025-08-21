"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[632],{

/***/ 11579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EnterpriseNotice: () => (/* binding */ EnterpriseNotice),
/* harmony export */   InPageNav: () => (/* binding */ InPageNav),
/* harmony export */   ProfileNotice: () => (/* binding */ ProfileNotice),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11540);
/* harmony import */ var chrome_browser_content_preferences_widgets_nav_notice_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70198);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



const THEMES = {
  Default: {},
  Magenta: {
    themeBg: "hsla(335, 91%,75%, 1)",
    themeFg: "hsla(0, 0%, 0%, 1)"
  },
  "Ocean Blue": {
    themeBg: "hsla(234, 90%, 19%, 1)",
    themeFg: "hsla(0, 0%, 100%, 1)"
  },
  "Marigold Yellow": {
    themeBg: "hsla(45, 92%, 77%, 1)",
    themeFg: "hsla(0, 0%, 0%, 1)"
  },
  "Brick Red": {
    themeBg: "hsla(11, 87%, 32%, 1)",
    themeFg: "hsla(0, 0%, 100%, 1)"
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/Settings/Nav Notice",
  component: "nav-notice",
  argTypes: {
    theme: {
      options: Object.keys(THEMES),
      mapping: THEMES,
      control: "select"
    }
  },
  parameters: {
    status: "in-development",
    fluent: `
enterprise-notice =
  .label = Your browser is being managed by your organization
profile-notice =
  .label = Original profile
page-nav =
  .heading = Settings
search-placeholder =
  .placeholder = Search settings
account-sync = Account and sync
  .title = Account and sync
home-startup = Home and startup
  .title = Home and startup
search = Search
  .title = Search
`
  }
});
const pageNavTemplate = theme => {
  return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<style>
      moz-page-nav {
        max-width: 254px;
      }
    </style>
    <moz-page-nav data-l10n-id="page-nav">
      <moz-input-search
        slot="subheading"
        data-l10n-id="search-placeholder"
      ></moz-input-search>
      ${EnterpriseNotice({
    slot: "subheading",
    ...EnterpriseNotice.args
  })}
      ${ProfileNotice({
    slot: "subheading",
    theme,
    ...ProfileNotice.args
  })}
      <moz-page-nav-button view="view-one" data-l10n-id="account-sync">
      </moz-page-nav-button>
      <moz-page-nav-button view="view-two" data-l10n-id="home-startup">
      </moz-page-nav-button>
      <moz-page-nav-button view="view-three" data-l10n-id="search">
      </moz-page-nav-button>
    </moz-page-nav>`;
};
const Template = ({
  iconSrc,
  href,
  l10nId,
  inPageNav,
  theme,
  slot
}) => {
  if (inPageNav) {
    return pageNavTemplate(theme);
  }
  return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
    <nav-notice
      iconsrc=${iconSrc}
      href=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(href)}
      data-l10n-id=${l10nId}
      slot=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(slot)}
      .theme=${theme}
    ></nav-notice>
  `;
};
const EnterpriseNotice = Template.bind({});
EnterpriseNotice.args = {
  l10nId: "enterprise-notice",
  iconSrc: "chrome://global/skin/icons/rating-star.svg#full",
  href: "",
  inPageNav: false,
  theme: THEMES.Default
};
const ProfileNotice = Template.bind({});
ProfileNotice.args = {
  ...EnterpriseNotice.args,
  l10nId: "profile-notice",
  iconSrc: "chrome://global/skin/icons/highlights.svg",
  href: "about:profiles"
};
const InPageNav = Template.bind({});
InPageNav.args = {
  inPageNav: true
};

/***/ }),

/***/ 45048:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "nav-notice.a81aaaff13370d509c3a.css";

/***/ }),

/***/ 70198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavNotice)
/* harmony export */ });
/* harmony import */ var browser_components_preferences_widgets_nav_notice_nav_notice_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45048);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11540);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48334);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



class NavNotice extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    href: {
      type: String
    },
    iconSrc: {
      type: String
    },
    label: {
      type: String,
      fluent: true
    },
    theme: {
      type: Object
    }
  };
  static queries = {
    boxEl: "moz-box-link, moz-box-item"
  };
  willUpdate(changedProperties) {
    if (changedProperties.has("theme")) {
      if (this.theme?.themeBg && this.theme?.themeFg) {
        this.style.setProperty("--theme-bg-color", this.theme.themeBg);
        this.style.setProperty("--theme-fg-color", this.theme.themeFg);
      } else {
        this.style.removeProperty("--theme-bg-color");
        this.style.removeProperty("--theme-fg-color");
      }
    }
  }
  render() {
    let element = this.href ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.literal)`moz-box-link` : (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.literal)`moz-box-item`;
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.staticHtml)`<link
        rel="stylesheet"
        href="${browser_components_preferences_widgets_nav_notice_nav_notice_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <${element} iconsrc=${this.iconSrc} label=${this.label} href=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.href)}></${element}>`;
  }
}
customElements.define("nav-notice", NavNotice);

/***/ })

}]);
//# sourceMappingURL=nav-notice-nav-notice-stories.6bc2dbb3.iframe.bundle.js.map