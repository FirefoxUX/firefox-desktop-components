"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1964,8807,9080],{

/***/ 11964:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozFieldset)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_fieldset_moz_fieldset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56118);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11540);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48334);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * Fieldset wrapper to lay out form inputs consistently.
 *
 * @tagname moz-fieldset
 * @property {string} label - The label for the fieldset's legend.
 * @property {string} description - The description for the fieldset.
 * @property {string} supportPage - Name of the SUMO support page to link to.
 */
class MozFieldset extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    label: {
      type: String,
      fluent: true
    },
    description: {
      type: String,
      fluent: true
    },
    supportPage: {
      type: String,
      attribute: "support-page"
    },
    ariaOrientation: {
      type: String,
      mapped: true
    }
  };
  descriptionTemplate() {
    if (this.description) {
      return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span id="description" class="description text-deemphasized">
          ${this.description}
        </span>
        ${this.supportPageTemplate()}`;
    }
    return "";
  }
  supportPageTemplate() {
    if (this.supportPage) {
      return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<a
        is="moz-support-link"
        support-page=${this.supportPage}
        part="support-link"
      ></a>`;
    }
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<slot name="support-link"></slot>`;
  }
  render() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_fieldset_moz_fieldset_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <fieldset
        aria-describedby=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.description ? "description" : undefined)}
        aria-orientation=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.ariaOrientation)}
      >
        <legend part="label">${this.label}</legend>
        ${!this.description ? this.supportPageTemplate() : ""}
        ${this.descriptionTemplate()}
        <div id="inputs" part="inputs">
          <slot></slot>
        </div>
      </fieldset>
    `;
  }
}
customElements.define("moz-fieldset", MozFieldset);

/***/ }),

/***/ 56118:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-fieldset.bc295d86b114a6505947.css";

/***/ }),

/***/ 58680:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-visual-picker-item.e61f33ee37fe3f6d1cc2.css";

/***/ }),

/***/ 68807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectControlBaseElement: () => (/* binding */ SelectControlBaseElement),
/* harmony export */   SelectControlItemMixin: () => (/* binding */ SelectControlItemMixin)
/* harmony export */ });
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11540);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48334);
/* harmony import */ var chrome_global_content_elements_moz_fieldset_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11964);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



// eslint-disable-next-line import/no-unassigned-import

const NAVIGATION_FORWARD = "forward";
const NAVIGATION_BACKWARD = "backward";
const NAVIGATION_VALUE = {
  [NAVIGATION_FORWARD]: 1,
  [NAVIGATION_BACKWARD]: -1
};
const DIRECTION_RIGHT = "Right";
const DIRECTION_LEFT = "Left";
const NAVIGATION_DIRECTIONS = {
  LTR: {
    FORWARD: DIRECTION_RIGHT,
    BACKWARD: DIRECTION_LEFT
  },
  RTL: {
    FORWARD: DIRECTION_LEFT,
    BACKWARD: DIRECTION_RIGHT
  }
};

/**
 * Class that can be extended to handle managing the selected and focus states
 * of child elements using a roving tabindex. For more information on this focus
 * management pattern, see:
 * https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_roving_tabindex
 *
 * Child elements must use SelectControlItemMixin for behavior to work as
 * expected.
 */
class SelectControlBaseElement extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.MozLitElement {
  #childElements;
  #value;
  static properties = {
    disabled: {
      type: Boolean,
      reflect: true
    },
    description: {
      type: String,
      fluent: true
    },
    supportPage: {
      type: String,
      attribute: "support-page"
    },
    label: {
      type: String,
      fluent: true
    },
    name: {
      type: String
    },
    value: {
      type: String
    }
  };
  static queries = {
    fieldset: "moz-fieldset"
  };
  set value(newValue) {
    this.#value = newValue;
    this.childElements.forEach(item => {
      item.checked = this.value === item.value;
    });
    this.syncFocusState();
  }
  get value() {
    return this.#value;
  }
  get focusableIndex() {
    if (this.#value) {
      let selectedIndex = this.childElements.findIndex(item => item.value === this.#value && !item.disabled);
      if (selectedIndex !== -1) {
        return selectedIndex;
      }
    }
    return this.childElements.findIndex(item => !item.disabled);
  }

  // Query for child elements the first time they are needed + ensure they
  // have been upgraded so we can access properties.
  get childElements() {
    if (!this.#childElements) {
      this.#childElements = (this.shadowRoot?.querySelector("slot:not([name])")?.assignedElements() || [...this.children])?.filter(el => el.localName === this.constructor.childElementName && !el.slot);
      this.#childElements.forEach(item => customElements.upgrade(item));
    }
    return this.#childElements;
  }
  constructor() {
    super();
    this.disabled = false;
    this.addEventListener("keydown", e => this.handleKeydown(e));
  }
  firstUpdated() {
    this.syncStateToChildElements();
  }
  async getUpdateComplete() {
    await super.getUpdateComplete();
    await Promise.all(this.childElements.map(item => item.updateComplete));
  }
  syncStateToChildElements() {
    this.childElements.forEach(item => {
      if (item.checked && this.value == undefined) {
        this.value = item.value;
      }
      item.name = this.name;
    });
    this.syncFocusState();
  }
  syncFocusState() {
    let focusableIndex = this.focusableIndex;
    this.childElements.forEach((item, index) => {
      item.itemTabIndex = focusableIndex === index ? 0 : -1;
    });
  }

  // NB: We may need to revise this to avoid bugs when we add more focusable
  // elements to select control base/items.
  handleKeydown(event) {
    let directions = this.getNavigationDirections();
    switch (event.key) {
      case "Down":
      case "ArrowDown":
      case directions.FORWARD:
      case `Arrow${directions.FORWARD}`:
        {
          event.preventDefault();
          this.navigate(NAVIGATION_FORWARD);
          break;
        }
      case "Up":
      case "ArrowUp":
      case directions.BACKWARD:
      case `Arrow${directions.BACKWARD}`:
        {
          event.preventDefault();
          this.navigate(NAVIGATION_BACKWARD);
          break;
        }
    }
  }
  getNavigationDirections() {
    if (this.isDocumentRTL) {
      return NAVIGATION_DIRECTIONS.RTL;
    }
    return NAVIGATION_DIRECTIONS.LTR;
  }
  get isDocumentRTL() {
    if (typeof Services !== "undefined") {
      return Services.locale.isAppLocaleRTL;
    }
    return document.dir === "rtl";
  }
  navigate(direction) {
    let currentIndex = this.focusableIndex;
    let children = this.childElements;
    let indexStep = children.length + NAVIGATION_VALUE[direction];
    for (let i = 1; i < children.length; i++) {
      let nextIndex = (currentIndex + indexStep * i) % children.length;
      let nextItem = children[nextIndex];
      if (!nextItem.disabled) {
        this.value = nextItem.value;
        nextItem.focus();
        this.dispatchEvent(new Event("input"), {
          bubbles: true,
          composed: true
        });
        this.dispatchEvent(new Event("change"), {
          bubbles: true
        });
        return;
      }
    }
  }
  willUpdate(changedProperties) {
    if (changedProperties.has("name")) {
      this.handleSetName();
    }
    if (changedProperties.has("disabled")) {
      this.childElements.forEach(item => {
        item.requestUpdate();
      });
    }
  }
  handleSetName() {
    this.childElements.forEach(item => {
      item.name = this.name;
    });
  }

  // Re-dispatch change event so it's re-targeted to the custom element.
  handleChange(event) {
    event.stopPropagation();
    this.dispatchEvent(new Event(event.type));
  }
  handleSlotChange() {
    this.#childElements = null;
    this.syncStateToChildElements();
  }
  render() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
      <moz-fieldset
        part="fieldset"
        description=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(this.description)}
        support-page=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(this.supportPage)}
        role="radiogroup"
        ?disabled=${this.disabled}
        label=${this.label}
        exportparts="inputs, support-link"
        aria-orientation=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(this.constructor.orientation)}
      >
        ${!this.supportPage ? (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<slot slot="support-link" name="support-link"></slot>` : ""}
        <slot
          @slotchange=${this.handleSlotChange}
          @change=${this.handleChange}
        ></slot>
      </moz-fieldset>
    `;
  }
}

/**
 * Class that can be extended by items nested in a subclass of
 * SelectControlBaseElement to handle selection, focus management, and keyboard
 * navigation. Implemented as a mixin to enable use with elements that inherit
 * from something other than MozLitElement.
 *
 * @param {LitElement} superClass
 * @returns LitElement
 */
const SelectControlItemMixin = superClass => class extends superClass {
  #controller;
  static properties = {
    name: {
      type: String
    },
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      reflect: true
    },
    checked: {
      type: Boolean,
      reflect: true
    },
    itemTabIndex: {
      type: Number,
      state: true
    }
  };
  get controller() {
    return this.#controller;
  }
  get isDisabled() {
    return this.disabled || this.#controller.disabled;
  }
  constructor() {
    super();
    this.checked = false;
  }
  connectedCallback() {
    super.connectedCallback();
    let hostElement = this.parentElement || this.getRootNode().host;
    if (!(hostElement instanceof SelectControlBaseElement)) {
      console.error(`${this.localName} should only be used in an element that extends SelectControlBaseElement.`);
    }
    this.#controller = hostElement;
    if (this.#controller.value) {
      this.checked = this.value === this.#controller.value;
    }
  }
  willUpdate(changedProperties) {
    super.willUpdate(changedProperties);
    // Handle setting checked directly via JS.
    if (changedProperties.has("checked") && this.checked && this.#controller.value && this.value !== this.#controller.value) {
      this.#controller.value = this.value;
    }
    // Handle un-checking directly via JS. If the checked item is un-checked,
    // the value of the associated focus manager parent needs to be un-set.
    if (changedProperties.has("checked") && !this.checked && this.#controller.value && this.value === this.#controller.value) {
      this.#controller.value = "";
    }
    if (changedProperties.has("disabled")) {
      // Prevent enabling a items if containing focus manager is disabled.
      if (this.disabled === false && this.#controller.disabled) {
        this.disabled = true;
      } else if (this.checked || !this.#controller.value) {
        // Update items via focus manager parent for proper keyboard nav behavior.
        this.#controller.syncFocusState();
      }
    }
  }
  handleClick() {
    if (this.isDisabled || this.checked) {
      return;
    }
    this.#controller.value = this.value;
    if (this.getRootNode().activeElement?.localName == this.localName) {
      this.focus();
    }
  }

  // Re-dispatch change event so it propagates out of the element.
  handleChange(e) {
    this.dispatchEvent(new Event(e.type, e));
  }
};

/***/ }),

/***/ 89080:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MozVisualPicker: () => (/* binding */ MozVisualPicker),
/* harmony export */   MozVisualPickerItem: () => (/* binding */ MozVisualPickerItem)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_visual_picker_moz_visual_picker_item_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58680);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11540);
/* harmony import */ var _lit_select_control_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68807);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48334);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */





/**
 * An element that groups related items and allows a user to navigate between
 * them to select an item. The appearance of the items of the group is
 * determined by the consumer.
 *
 * @tagname moz-visual-picker
 * @property {string} label - Label for the group of elements.
 * @property {string} description - Description for the group of elements.
 * @property {string} name
 *  Name used to associate items in the group. Propagates to
 *  moz-visual-picker's children.
 * @property {string} value
 *  Selected value for the group. Changing the value updates the checked
 *  state of moz-visual-picker-item children and vice versa.
 * @slot default - The picker's content, intended for moz-visual-picker-items.
 */
class MozVisualPicker extends _lit_select_control_mjs__WEBPACK_IMPORTED_MODULE_2__.SelectControlBaseElement {
  static childElementName = "moz-visual-picker-item";
  static orientation = "horizontal";
}
customElements.define("moz-visual-picker", MozVisualPicker);

/**
 * Element that allows a user to select one option from a group of options.
 * Visual appearance is determined by the slotted content.
 *
 * @tagname moz-visual-picker-item
 * @property {boolean} checked - Whether or not the item is selected.
 * @property {boolean} disabled - Whether or not the item is disabled.
 * @property {number} itemTabIndex
 *  Tabindex of the input element. Only one item is focusable at a time.
 * @property {string} name
 *  Name of the item, set by the associated moz-visual-picker parent element.
 * @property {string} value - Value of the item.
 * @slot default - The item's content, used for what gets displayed.
 */
class MozVisualPickerItem extends (0,_lit_select_control_mjs__WEBPACK_IMPORTED_MODULE_2__.SelectControlItemMixin)(_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.MozLitElement) {
  static queries = {
    itemEl: ".picker-item"
  };
  click() {
    this.itemEl.click();
  }
  focus() {
    this.itemEl.focus();
  }
  blur() {
    this.itemEl.blur();
  }
  handleKeydown(event) {
    if (event.keyCode == KeyEvent.DOM_VK_SPACE) {
      this.handleClick(event);
    }
  }
  handleClick(event) {
    // re-target click events from the slot to the item and handle clicks from
    // space bar keydown.
    event.stopPropagation();
    this.dispatchEvent(new Event("click", {
      bubbles: true,
      composed: true
    }));
    super.handleClick();

    // Manually dispatch events since we're not using an input.
    this.dispatchEvent(new Event("input", {
      bubbles: true,
      composed: true
    }));
    this.dispatchEvent(new Event("change", {
      bubbles: true
    }));
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_visual_picker_moz_visual_picker_item_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <div
        class="picker-item"
        role="radio"
        value=${this.value}
        aria-checked=${this.checked}
        tabindex=${this.itemTabIndex}
        ?checked=${this.checked}
        ?disabled=${this.isDisabled}
        @click=${this.handleClick}
        @keydown=${this.handleKeydown}
      >
        <slot></slot>
      </div>
    `;
  }
}
customElements.define("moz-visual-picker-item", MozVisualPickerItem);

/***/ })

}]);
//# sourceMappingURL=9080.a99e1c71.iframe.bundle.js.map