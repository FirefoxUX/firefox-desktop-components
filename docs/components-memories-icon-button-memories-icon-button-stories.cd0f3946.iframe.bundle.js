"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[9885],{

/***/ 7941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Pressed: () => (/* binding */ Pressed),
/* harmony export */   Unpressed: () => (/* binding */ Unpressed),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var chrome_browser_content_aiwindow_components_memories_icon_button_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81708);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/AI Window/Memories Icon Button",
  component: "memories-icon-button",
  argTypes: {
    pressed: {
      control: {
        type: "boolean"
      }
    }
  },
  parameters: {
    fluent: `
aiwindow-memories-on =
  .tooltiptext = Memories on
aiwindow-memories-off =
  .tooltiptext = Memories off
    `
  }
});
const Template = ({
  pressed
}) => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <memories-icon-button ?pressed=${pressed}></memories-icon-button>
`;
const Pressed = Template.bind({});
Pressed.args = {
  pressed: true
};
const Unpressed = Template.bind({});
Unpressed.args = {
  pressed: false
};

/***/ }),

/***/ 81708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MemoriesIconButton: () => (/* binding */ MemoriesIconButton)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_memories_icon_button_memories_icon_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83232);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */




/**
 * Icon-style toggle button for enabling or disabling AI Memories.
 *
 * - `pressed`: boolean property/attribute reflected to `aria-pressed`
 * - Emits `change` with `{ pressed }` on user toggle
 *
 * Logic is handled by the parent component.
 */
class MemoriesIconButton extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    pressed: {
      type: Boolean,
      reflect: true
    }
  };
  #onClick() {
    this.pressed = !this.pressed;
    this.dispatchEvent(new CustomEvent("change", {
      bubbles: true,
      composed: true,
      detail: {
        pressed: this.pressed
      }
    }));
  }
  render() {
    const ariaPressed = String(this.pressed);
    // TODO: using placeholder icons here. Update iconSrc with final path name
    // when memories on/off icons are ready.
    const iconSrc = this.pressed ? "chrome://browser/content/aiwindow/assets/memories-on.svg" : "chrome://browser/content/aiwindow/assets/memories-off.svg";
    const tooltipTextId = this.pressed ? "aiwindow-memories-on" : "aiwindow-memories-off";
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_memories_icon_button_memories_icon_button_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <moz-button
        data-l10n-id=${tooltipTextId}
        data-l10n-attrs="tooltiptext,aria-label"
        type="ghost"
        class="memories-icon-button"
        size="default"
        iconsrc=${iconSrc}
        iconposition="start"
        aria-pressed=${ariaPressed}
        @click=${event => this.#onClick(event)}
      ></moz-button>
    `;
  }
}
customElements.define("memories-icon-button", MemoriesIconButton);

/***/ }),

/***/ 83232:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "memories-icon-button.8393530a9624609737e9.css";

/***/ })

}]);
//# sourceMappingURL=components-memories-icon-button-memories-icon-button-stories.cd0f3946.iframe.bundle.js.map