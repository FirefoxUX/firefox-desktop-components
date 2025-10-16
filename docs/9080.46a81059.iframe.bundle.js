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




// Functions to wrap a string in a heading.
const HEADING_LEVEL_TEMPLATES = {
  1: label => (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<h1>${label}</h1>`,
  2: label => (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<h2>${label}</h2>`,
  3: label => (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<h3>${label}</h3>`,
  4: label => (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<h4>${label}</h4>`,
  5: label => (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<h5>${label}</h5>`,
  6: label => (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<h6>${label}</h6>`
};

/**
 * Fieldset wrapper to lay out form inputs consistently.
 *
 * @tagname moz-fieldset
 * @property {string} label - The label for the fieldset's legend.
 * @property {string} description - The description for the fieldset.
 * @property {string} supportPage - Name of the SUMO support page to link to.
 * @property {number} headingLevel - Render the legend in a heading of this level.
 * @property {boolean} disabled - Whether the fieldset and its children are disabled.
 * @property {string} iconSrc - The src for an optional icon.
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
    ariaLabel: {
      type: String,
      fluent: true,
      mapped: true
    },
    ariaOrientation: {
      type: String,
      mapped: true
    },
    headingLevel: {
      type: Number,
      reflect: true
    },
    disabled: {
      type: Boolean,
      reflect: true
    },
    iconSrc: {
      type: String
    }
  };
  constructor() {
    super();
    this.headingLevel = -1;
    this.disabled = false;
    this.iconSrc = "";
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("disabled")) {
      this.#updateChildDisabledState();
    }
  }
  #updateChildDisabledState() {
    const formControls = [...this.querySelectorAll("*")].filter(element => "disabled" in element || "parentDisabled" in element);
    formControls.forEach(control => {
      if ("parentDisabled" in control) {
        control.parentDisabled = this.disabled;
      }
      if (this.disabled) {
        control.setAttribute("disabled", "");
      } else {
        control.removeAttribute("disabled");
      }
    });
  }
  descriptionTemplate() {
    if (this.description) {
      return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span id="description" class="description">
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
  legendTemplate() {
    let label = HEADING_LEVEL_TEMPLATES[this.headingLevel]?.(this.label) || this.label;
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<legend part="label">${this.iconTemplate()}${label}</legend>`;
  }
  iconTemplate() {
    if (!this.iconSrc) {
      return "";
    }
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<img src=${this.iconSrc} role="presentation" class="icon" />`;
  }
  render() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_fieldset_moz_fieldset_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <fieldset
        ?disabled=${this.disabled}
        aria-label=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.ariaLabel)}
        aria-describedby=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.description ? "description" : undefined)}
        aria-orientation=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.ariaOrientation)}
      >
        ${this.label ? this.legendTemplate() : ""}
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

module.exports = __webpack_require__.p + "moz-fieldset.bdeddf5e56544b4f15af.css";

/***/ }),

/***/ 58680:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-visual-picker-item.746090341f599ec2b96b.css";

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
  #checkedIndex;
  #focusedIndex;
  static properties = {
    type: {
      type: String
    },
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
    },
    headingLevel: {
      type: Number
    }
  };
  static queries = {
    fieldset: "moz-fieldset"
  };
  set value(newValue) {
    this.#value = newValue;
    this.childElements.forEach((item, index) => {
      let isChecked = this.value === item.value;
      item.checked = isChecked;
      if (isChecked && !item.disabled) {
        this.#checkedIndex = index;
      }
    });
    this.syncFocusState();
  }
  get value() {
    return this.#value;
  }
  get hasValue() {
    return this.value === 0 || !!this.value;
  }
  set focusedIndex(newIndex) {
    if (this.#focusedIndex !== newIndex) {
      this.#focusedIndex = newIndex;
      this.syncFocusState();
    }
  }
  get checkedIndex() {
    return this.#checkedIndex;
  }
  set checkedIndex(newIndex) {
    if (this.#checkedIndex !== newIndex) {
      this.#checkedIndex = newIndex;
      this.syncFocusState();
    }
  }
  get focusableIndex() {
    let activeEl = this.getRootNode().activeElement;
    let childElFocused = activeEl?.localName == this.constructor.childElementName;
    if (this.#checkedIndex != undefined && this.#value && (this.type == "radio" || !childElFocused)) {
      return this.#checkedIndex;
    }
    if (this.#focusedIndex != undefined && this.type === "listbox" && childElFocused) {
      return this.#focusedIndex;
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
    this.type = "radio";
    this.disabled = false;
    this.addEventListener("blur", e => this.handleBlur(e), true);
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
    this.childElements.forEach((item, index) => {
      item.position = index;
      if (item.checked && this.value == undefined) {
        this.value = item.value;
      }
      if (this.value == item.value && !item.disabled) {
        this.#checkedIndex = item.position;
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
  handleBlur(event) {
    if (this.contains(event.relatedTarget)) {
      return;
    }
    this.focusedIndex = undefined;
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
    let step = NAVIGATION_VALUE[direction];
    let isRadio = this.type == "radio";
    for (let i = 1; i < children.length; i++) {
      // Support focus wrapping for type="radio" only.
      let nextIndex = isRadio ? (currentIndex + children.length + step * i) % children.length : currentIndex + step * i;
      let nextItem = children[nextIndex];
      if (nextItem && !nextItem.disabled) {
        nextItem.focus();
        if (isRadio) {
          this.value = nextItem.value;
          nextItem.click();
        }
        nextItem.focus();
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
    if (changedProperties.has("type")) {
      let childRole = this.type == "radio" ? "radio" : "option";
      this.childElements.forEach(item => {
        item.role = childRole;
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
    this.dispatchEvent(new Event(event.type, event));
  }
  handleSlotChange() {
    this.#childElements = null;
    this.#focusedIndex = undefined;
    this.#checkedIndex = undefined;
    this.syncStateToChildElements();
  }
  render() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
      <moz-fieldset
        part="fieldset"
        description=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(this.description)}
        support-page=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(this.supportPage)}
        role=${this.type == "radio" ? "radiogroup" : "listbox"}
        ?disabled=${this.disabled}
        label=${this.label}
        headinglevel=${this.headingLevel}
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
    },
    role: {
      type: String,
      state: true
    },
    position: {
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
    this.addEventListener("focus", () => {
      if (!this.disabled) {
        this.controller.focusedIndex = this.position;
      }
    });
  }
  connectedCallback() {
    super.connectedCallback();
    let hostElement = this.parentElement || this.getRootNode().host;
    if (!(hostElement instanceof SelectControlBaseElement)) {
      console.error(`${this.localName} should only be used in an element that extends SelectControlBaseElement.`);
    }
    this.#controller = hostElement;
    this.role = this.#controller.type == "radio" ? "radio" : "option";
    if (this.#controller.hasValue) {
      this.checked = this.value === this.#controller.value;
    }
  }
  willUpdate(changedProperties) {
    super.willUpdate(changedProperties);
    // Handle setting checked directly via JS.
    if (changedProperties.has("checked") && this.checked && this.#controller.hasValue && this.value !== this.#controller.value) {
      this.#controller.value = this.value;
    }
    // Handle un-checking directly via JS. If the checked item is un-checked,
    // the value of the associated focus manager parent needs to be un-set.
    if (changedProperties.has("checked") && !this.checked && this.#controller.hasValue && this.value === this.#controller.value) {
      this.#controller.value = "";
    }
    if (changedProperties.has("disabled")) {
      // Prevent enabling a items if containing focus manager is disabled.
      if (this.disabled === false && this.#controller.disabled) {
        this.disabled = true;
        return;
      }

      // Update items via focus manager parent for proper keyboard nav behavior.
      if (this.checked || !this.#controller.hasValue) {
        if (this.controller.checkedIndex != this.position) {
          this.#controller.syncFocusState();
        } else {
          // If the newly disabled element was checked unset the checkedIndex
          // to recompute which element should be focusable.
          this.controller.checkedIndex = undefined;
        }
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
 * @property {string} label - Visible label for the picker item.
 * @property {string} ariaLabel - Value for the aria-label attribute.
 * @property {string} imageSrc - Path to an image to display in the picker item.
 * @slot default - The item's content, used for what gets displayed.
 */
class MozVisualPickerItem extends (0,_lit_select_control_mjs__WEBPACK_IMPORTED_MODULE_2__.SelectControlItemMixin)(_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.MozLitElement) {
  static properties = {
    label: {
      type: String,
      fluent: true
    },
    ariaLabel: {
      type: String,
      fluent: true,
      mapped: true
    },
    imageSrc: {
      type: String
    }
  };
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
    if (event.code == "Space" || event.code == "Enter") {
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
      bubbles: true,
      composed: true
    }));
  }
  handleSlotchange(event) {
    // If the user hasn't provide a visual or accessible label fallback to
    // labelling the picker item based on slotted content.
    if (!this.label && !this.ariaLabel) {
      let elements = event.target.assignedElements();
      this.itemEl.ariaLabelledByElements = elements;
    }
  }
  contentTemplate() {
    if (!this.imageSrc && !this.label) {
      return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<slot></slot>`;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      ${this.imageSrc ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<img src=${this.imageSrc} role="presentation" part="image" />` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
      ${this.label ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<p class="label">${this.label}</p>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
    `;
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_visual_picker_moz_visual_picker_item_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <div
        class=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.classMap)({
      "picker-item": true,
      "image-item": this.imageSrc && this.label
    })}
        role=${this.role}
        value=${this.value}
        aria-label=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.ariaLabel)}
        aria-checked=${this.role == "radio" ? this.checked : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
        aria-selected=${this.role == "option" ? this.checked : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
        tabindex=${this.itemTabIndex}
        ?checked=${this.checked}
        ?disabled=${this.isDisabled}
        @click=${this.handleClick}
        @keydown=${this.handleKeydown}
        @slotchange=${this.handleSlotchange}
      >
        ${this.contentTemplate()}
      </div>
    `;
  }
}
customElements.define("moz-visual-picker-item", MozVisualPickerItem);

/***/ })

}]);
//# sourceMappingURL=9080.46a81059.iframe.bundle.js.map