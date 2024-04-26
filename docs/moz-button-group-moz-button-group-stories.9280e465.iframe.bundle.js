"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[2408],{

/***/ 16557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PLATFORM_LINUX": () => (/* binding */ PLATFORM_LINUX),
/* harmony export */   "PLATFORM_MACOS": () => (/* binding */ PLATFORM_MACOS),
/* harmony export */   "PLATFORM_WINDOWS": () => (/* binding */ PLATFORM_WINDOWS),
/* harmony export */   "default": () => (/* binding */ MozButtonGroup)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_button_group_moz_button_group_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29827);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73689);

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
    let slots = [chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html` <slot @slotchange=${this.onSlotchange}></slot> `, chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html` <slot name="primary"></slot> `];
    if (this.platform == PLATFORM_WINDOWS) {
      slots = [slots[1], slots[0]];
    }
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_button_group_moz_button_group_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      ${slots}
    `;
  }
}
customElements.define("moz-button-group", MozButtonGroup);

/***/ }),

/***/ 53992:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Default": () => (/* binding */ Default),
/* harmony export */   "Linux": () => (/* binding */ Linux),
/* harmony export */   "Mac": () => (/* binding */ Mac),
/* harmony export */   "Windows": () => (/* binding */ Windows),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45717);
/* harmony import */ var _moz_button_group_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16557);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "UI Widgets/Button Group",
  component: "moz-button-group",
  argTypes: {
    platform: {
      options: [_moz_button_group_mjs__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_LINUX, _moz_button_group_mjs__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_MACOS, _moz_button_group_mjs__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_WINDOWS],
      control: {
        type: "select"
      }
    }
  },
  parameters: {
    status: "stable",
    fluent: `
moz-button-group-p = The button group is below. Card for emphasis.
moz-button-group-ok = OK
moz-button-group-cancel = Cancel
    `
  }
});
const Template = ({
  platform
}) => _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
  <div class="card card-no-hover" style="max-width: 400px">
    <p data-l10n-id="moz-button-group-p"></p>
    <moz-button-group .platform=${platform}>
      <button class="primary" data-l10n-id="moz-button-group-ok"></button>
      <button data-l10n-id="moz-button-group-cancel"></button>
    </moz-button-group>
  </div>
`;
const Default = Template.bind({});
Default.args = {
  // Platform will auto-detected.
};
const Windows = Template.bind({});
Windows.args = {
  platform: _moz_button_group_mjs__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_WINDOWS
};
const Mac = Template.bind({});
Mac.args = {
  platform: _moz_button_group_mjs__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_MACOS
};
const Linux = Template.bind({});
Linux.args = {
  platform: _moz_button_group_mjs__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_LINUX
};

/***/ }),

/***/ 29827:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-button-group.4b3da672913bb0fc2d88.css";

/***/ })

}]);
//# sourceMappingURL=moz-button-group-moz-button-group-stories.9280e465.iframe.bundle.js.map