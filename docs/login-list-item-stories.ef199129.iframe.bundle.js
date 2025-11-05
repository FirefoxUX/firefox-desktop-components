"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[7397],{

/***/ 51771:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "login-list-lit-item.9bef6f6aa9a02fff05dd.css";

/***/ }),

/***/ 59834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginListItem: () => (/* binding */ LoginListItem),
/* harmony export */   NewLoginListItem: () => (/* binding */ NewLoginListItem),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11540);
/* harmony import */ var _login_list_lit_item_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60335);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// eslint-disable-next-line import/no-unresolved


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/Credential Management/Login List Item",
  component: "login-list-item"
});
window.MozXULElement.insertFTLIfNeeded("browser/aboutLogins.ftl");
const NewLoginListItem = ({
  selected
}) => {
  return (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)` <new-list-item .selected=${selected}> </new-list-item> `;
};
NewLoginListItem.argTypes = {
  selected: {
    options: [true, false],
    control: {
      type: "radio"
    },
    defaultValue: false
  }
};
const LoginListItem = ({
  title,
  username,
  notificationIcon,
  selected
}) => {
  return (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
    <login-list-item
      .title=${title}
      .username=${username}
      .notificationIcon=${notificationIcon}
      .selected=${selected}
    >
    </login-list-item>
  `;
};
LoginListItem.argTypes = {
  notificationIcon: {
    options: ["default", "breached", "vulnerable"],
    control: {
      type: "radio"
    },
    defaultValue: "default"
  },
  selected: {
    options: [true, false],
    control: {
      type: "radio"
    },
    defaultValue: false
  }
};
LoginListItem.args = {
  title: "https://www.example.com",
  username: "test-username"
};

/***/ }),

/***/ 60335:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListItem: () => (/* binding */ ListItem),
/* harmony export */   LoginListItem: () => (/* binding */ LoginListItem),
/* harmony export */   NewListItem: () => (/* binding */ NewListItem)
/* harmony export */ });
/* harmony import */ var browser_components_aboutlogins_content_components_login_list_lit_item_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51771);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11540);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48334);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



class ListItem extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static get properties() {
    return {
      icon: {
        type: String
      },
      selected: {
        type: Boolean
      }
    };
  }
  constructor() {
    super();
    this.icon = "";
    this.selected = false;
  }
  render() {
    const classes = {
      selected: this.selected,
      "list-item": true
    };
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)` <link
        rel="stylesheet"
        href="${browser_components_aboutlogins_content_components_login_list_lit_item_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <li class=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.classMap)(classes)} role="option">
        <img class="icon" src=${this.icon} />
        <slot name="login-info"></slot>
        <slot name="notificationIcon"></slot>
      </li>`;
  }
}
class NewListItem extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    icon: {
      type: String
    },
    selected: {
      type: Boolean
    }
  };
  constructor() {
    super();
    this.id = "new-login-list-item";
    this.selected = false;
    this.icon = "page-icon:undefined";
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aboutlogins_content_components_login_list_lit_item_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <list-item ?selected=${this.selected} icon=${this.icon}>
        <div class="labels" slot="login-info">
          <span
            class="title"
            dir="auto"
            data-l10n-id="login-list-item-title-new-login2"
          ></span
          ><span class="subtitle" dir="auto"></span>
        </div>
      </list-item>
    `;
  }
}
class LoginListItem extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static get properties() {
    return {
      favicon: {
        type: String
      },
      title: {
        type: String,
        reflect: true
      },
      username: {
        type: String,
        reflect: true
      },
      notificationIcon: {
        type: String,
        reflect: true
      },
      selected: {
        type: Boolean
      }
    };
  }
  constructor() {
    super();
    this.favicon = "";
    this.title = "";
    this.username = "";
    this.notificationIcon = "";
    this.selected = false;
  }
  render() {
    switch (this.notificationIcon) {
      case "breached":
        this.classList.add("breached");
        break;
      case "vulnerable":
        this.classList.add("vulnerable");
        break;
      default:
        this.classList.remove("breached");
        this.classList.remove("vulnerable");
        break;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aboutlogins_content_components_login_list_lit_item_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <list-item
        icon=${this.favicon}
        title=${this.title}
        username=${this.username}
        notificationIcon=${this.notificationIcon}
        ?selected=${this.selected}
      >
        <div class="labels" slot="login-info">
          <span class="title" dir="auto">${this.title}</span>
          ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.when)(this.username, () => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)` <span class="subtitle" dir="auto">
                ${this.username}
              </span>`, () => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span
                class="subtitle"
                dir="auto"
                data-l10n-id="login-list-item-subtitle-missing-username"
              ></span>`)}
        </div>
        <div slot="notificationIcon">
          ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.choose)(this.notificationIcon, [["breached", () => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<img
                    class="alert-icon"
                    data-l10n-id="about-logins-list-item-breach-icon"
                    title=""
                    src="chrome://browser/content/aboutlogins/icons/breached-website.svg"
                  />`], ["vulnerable", () => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<img
                    class="alert-icon"
                    data-l10n-id="about-logins-list-item-vulnerable-password-icon"
                    title=""
                    src="chrome://browser/content/aboutlogins/icons/vulnerable-password.svg"
                  />`]], () => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<img class="alert-icon" title="" src="" />`)}
        </div>
      </list-item>
    `;
  }
}
customElements.define("list-item", ListItem);
customElements.define("new-list-item", NewListItem);
customElements.define("login-list-item", LoginListItem);

/***/ })

}]);
//# sourceMappingURL=login-list-item-stories.ef199129.iframe.bundle.js.map