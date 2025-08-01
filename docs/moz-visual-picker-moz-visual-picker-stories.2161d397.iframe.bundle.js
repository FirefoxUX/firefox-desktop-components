"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1964,7362,8807,9080],{

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
      type: Number
    }
  };
  constructor() {
    super();
    this.headingLevel = -1;
  }
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
  legendTemplate() {
    let label = HEADING_LEVEL_TEMPLATES[this.headingLevel]?.(this.label) || this.label;
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<legend part="label">${label}</legend>`;
  }
  render() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_fieldset_moz_fieldset_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <fieldset
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

/***/ 54273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllUnselected: () => (/* binding */ AllUnselected),
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   Listbox: () => (/* binding */ Listbox),
/* harmony export */   WithItemLabels: () => (/* binding */ WithItemLabels),
/* harmony export */   WithPickerDescription: () => (/* binding */ WithPickerDescription),
/* harmony export */   WithPickerSupportLink: () => (/* binding */ WithPickerSupportLink),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11540);
/* harmony import */ var _moz_visual_picker_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89080);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "UI Widgets/Visual Picker",
  component: "moz-visual-picker",
  argTypes: {
    value: {
      options: ["1", "2", "3"],
      control: {
        type: "select"
      }
    },
    slottedItem: {
      options: ["card", "avatar"],
      control: {
        type: "select"
      },
      if: {
        arg: "showItemLabels",
        truthy: false
      }
    },
    pickerL10nId: {
      options: ["moz-visual-picker", "moz-visual-picker-description"],
      control: {
        type: "select"
      }
    },
    type: {
      options: ["radio", "listbox"],
      control: {
        type: "select"
      }
    }
  },
  parameters: {
    actions: {
      handles: ["click", "input", "change"]
    },
    status: "in-development",
    fluent: `
moz-visual-picker =
  .label = Pick something
moz-visual-picker-description =
  .label = Pick something
  .description = Pick one of these cool things please
favicon-aria-label =
  .aria-label = Favicon avatar
experiments-aria-label =
  .aria-label = Experiments avatar
heart-aria-label =
  .aria-label = Heart avatar
`
  }
});
const AVATAR_ICONS = ["chrome://global/skin/icons/defaultFavicon.svg", "chrome://global/skin/icons/experiments.svg", "chrome://global/skin/icons/heart.svg"];
const AVATAR_L10N_IDS = ["favicon-aria-label", "experiments-aria-label", "heart-aria-label"];
function getSlottedContent(type, index) {
  if (type == "card") {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<div class="slotted demo-card">
      <img
        src="chrome://browser/content/profiles/assets/system-theme-background.svg"
      />
      <span>I'm card number ${index + 1}</span>
    </div>`;
  }
  return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<div class="slotted avatar">
    <img src=${AVATAR_ICONS[index]} role="presentation" />
  </div>`;
}
const Template = ({
  value,
  slottedItem,
  pickerL10nId,
  supportPage,
  type,
  showItemLabels
}) => {
  return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
    <style>
      .slotted {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .demo-card {
        flex-direction: column;
        width: 120px;

        span {
          padding: var(--space-xsmall);
          text-align: center;
        }

        img {
          border-top-left-radius: inherit;
          border-top-right-radius: inherit;
        }
      }

      .avatar-item {
        --visual-picker-item-border-radius: var(--border-radius-circle);
      }

      .avatar {
        height: 50px;
        width: 50px;

        img {
          height: var(--icon-size);
          width: var(--icon-size);
          -moz-context-properties: fill;
          fill: var(--icon-color);
        }
      }
    </style>
    <moz-visual-picker
      type=${type}
      data-l10n-id=${pickerL10nId}
      value=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(value)}
      support-page=${supportPage}
    >
      ${[...Array.from({
    length: 3
  })].map((_, i) => (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<moz-visual-picker-item
            value=${i + 1}
            class=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.classMap)({
    "avatar-item": slottedItem == "avatar"
  })}
            data-l10n-id=${slottedItem == "avatar" ? AVATAR_L10N_IDS[i] : _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.nothing}
            label=${showItemLabels ? `Item number ${i + 1}` : _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.nothing}
          >
            ${getSlottedContent(slottedItem, i)}
          </moz-visual-picker-item>`)}
    </moz-visual-picker>
  `;
};
const Default = Template.bind({});
Default.args = {
  pickerL10nId: "moz-visual-picker",
  slottedItem: "card",
  value: "1",
  supportPage: "",
  type: "radio",
  showItemLabels: false
};
const WithPickerDescription = Template.bind({});
WithPickerDescription.args = {
  ...Default.args,
  pickerL10nId: "moz-visual-picker-description"
};
const WithPickerSupportLink = Template.bind({});
WithPickerSupportLink.args = {
  ...WithPickerDescription.args,
  supportPage: "foo"
};
const AllUnselected = Template.bind({});
AllUnselected.args = {
  ...Default.args,
  value: ""
};
const Listbox = Template.bind({});
Listbox.args = {
  ...Default.args,
  type: "listbox"
};
const WithItemLabels = Template.bind({});
WithItemLabels.args = {
  ...Default.args,
  showItemLabels: true
};

/***/ }),

/***/ 56118:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-fieldset.d3664db0bb023c72b3fe.css";

/***/ }),

/***/ 58680:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-visual-picker-item.3a616645684a79619b6e.css";

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
        if (isRadio) {
          this.value = nextItem.value;
          this.dispatchEvent(new Event("input"), {
            bubbles: true,
            composed: true
          });
          this.dispatchEvent(new Event("change"), {
            bubbles: true
          });
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
    this.dispatchEvent(new Event(event.type));
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
        return;
      }

      // Update items via focus manager parent for proper keyboard nav behavior.
      if (this.checked || !this.#controller.value) {
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
 * @slot default - The item's content, used for what gets displayed.
 */
class MozVisualPickerItem extends (0,_lit_select_control_mjs__WEBPACK_IMPORTED_MODULE_2__.SelectControlItemMixin)(_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.MozLitElement) {
  static properties = {
    label: {
      type: String
    },
    ariaLabel: {
      type: String,
      fluent: true,
      mapped: true
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
      bubbles: true
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
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_visual_picker_moz_visual_picker_item_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <div
        class="picker-item"
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
        ${this.label ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<p class="label">${this.label}</p>` : (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<slot></slot>`}
      </div>
    `;
  }
}
customElements.define("moz-visual-picker-item", MozVisualPickerItem);

/***/ })

}]);
//# sourceMappingURL=moz-visual-picker-moz-visual-picker-stories.2161d397.iframe.bundle.js.map