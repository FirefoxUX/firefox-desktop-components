"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[2664],{

/***/ 11258:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-button-group.4b3da672913bb0fc2d88.css";

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
//# sourceMappingURL=2664.82e667fa.iframe.bundle.js.map