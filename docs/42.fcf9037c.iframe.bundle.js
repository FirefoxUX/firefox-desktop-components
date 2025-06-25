"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[42],{

/***/ 20042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MozBreadcrumb: () => (/* binding */ MozBreadcrumb),
/* harmony export */   MozBreadcrumbGroup: () => (/* binding */ MozBreadcrumbGroup)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_breadcrumb_group_moz_breadcrumb_group_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29556);
/* harmony import */ var toolkit_content_widgets_moz_breadcrumb_group_moz_breadcrumb_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91150);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11540);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48334);


/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



window.MozXULElement?.insertFTLIfNeeded("toolkit/global/mozBreadcrumbGroup.ftl");

/**
 * @tagname moz-breadcrumb
 * @property {string} href
 * @property {string} label
 */

class MozBreadcrumb extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.MozLitElement {
  static properties = {
    href: {
      type: String
    },
    label: {
      type: String,
      fluent: true
    },
    ariaCurrent: {
      attribute: "aria-current",
      type: String
    }
  };
  constructor() {
    super();
    this.label = "";
    this.href = "";
  }
  render() {
    const labelTemplate = this.label || (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<slot></slot>`;
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_breadcrumb_group_moz_breadcrumb_css__WEBPACK_IMPORTED_MODULE_1__}"
      />
      ${this.ariaCurrent ? labelTemplate : (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<a href=${this.href}>${labelTemplate}</a>`}
    `;
  }
}
customElements.define("moz-breadcrumb", MozBreadcrumb);

/**
 * @tagname moz-breadcrumb-group
 */
class MozBreadcrumbGroup extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.MozLitElement {
  /**
   * @type {MutationObserver | void}
   */
  #observer;

  /**
   * Fired when a breadcrumb is either
   * added or removed from the DOM, at which
   * an update is requested to re-render breadcrumbs.
   *
   * @type {MutationCallback}
   */
  #onBreadcrumbMutation(mutations) {
    for (const mutation of mutations) {
      if (mutation.type === "childList") {
        this.requestUpdate();
      }
    }
  }

  /**
   * @type {Array<MozBreadcrumb>}
   */
  get breadcrumbs() {
    /**
     * @type {NodeListOf<MozBreadcrumb>}
     */
    const breadcrumbElements = this.querySelectorAll("moz-breadcrumb");
    return Array.from(breadcrumbElements);
  }
  setupBreadcrumbs() {
    const {
      breadcrumbs
    } = this;
    return breadcrumbs.map((breadcrumb, i) => {
      breadcrumb.setAttribute("slot", i + "");
      if (i === breadcrumbs.length - 1) {
        breadcrumb.setAttribute("aria-current", "page");
      }
      return breadcrumb;
    });
  }
  update() {
    super.update();
    this.setupBreadcrumbs();
  }
  firstUpdated() {
    if (!this.#observer) {
      this.#observer = new MutationObserver((mutations, observer) => this.#onBreadcrumbMutation(mutations, observer));
      this.#observer.observe(this, {
        childList: true
      });
    }
  }
  disconnectedCallback() {
    if (this.#observer) {
      this.#observer.disconnect();
      this.#observer = undefined;
    }
    super.disconnectedCallback();
  }
  render() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_breadcrumb_group_moz_breadcrumb_group_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <nav data-l10n-id="moz-breadcrumb-group-nav">
        <ol>
          ${this.breadcrumbs.map((breadcrumb, i) => {
      return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<li>
              <slot name=${i}></slot>
            </li>`;
    })}
        </ol>
      </nav>
    `;
  }
}
customElements.define("moz-breadcrumb-group", MozBreadcrumbGroup);

/***/ }),

/***/ 29556:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-breadcrumb-group.3c9c6c0fccb47045b0c3.css";

/***/ }),

/***/ 91150:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-breadcrumb.ad10d0dbb7433ab82dc6.css";

/***/ })

}]);
//# sourceMappingURL=42.fcf9037c.iframe.bundle.js.map