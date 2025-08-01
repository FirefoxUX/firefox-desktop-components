"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1964,4032,6602,8807],{

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

/***/ 56118:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-fieldset.d3664db0bb023c72b3fe.css";

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

/***/ 89769:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllUnchecked: () => (/* binding */ AllUnchecked),
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   DisabledRadioButton: () => (/* binding */ DisabledRadioButton),
/* harmony export */   DisabledRadioGroup: () => (/* binding */ DisabledRadioGroup),
/* harmony export */   WithAccesskeys: () => (/* binding */ WithAccesskeys),
/* harmony export */   WithDescriptions: () => (/* binding */ WithDescriptions),
/* harmony export */   WithEllipsizedLabel: () => (/* binding */ WithEllipsizedLabel),
/* harmony export */   WithIcon: () => (/* binding */ WithIcon),
/* harmony export */   WithNestedFields: () => (/* binding */ WithNestedFields),
/* harmony export */   WithRadioGroupDescription: () => (/* binding */ WithRadioGroupDescription),
/* harmony export */   WithRadioGroupSlottedSupportLink: () => (/* binding */ WithRadioGroupSlottedSupportLink),
/* harmony export */   WithRadioGroupSupportLink: () => (/* binding */ WithRadioGroupSupportLink),
/* harmony export */   WithSlottedSupportLinks: () => (/* binding */ WithSlottedSupportLinks),
/* harmony export */   WithSupportLinks: () => (/* binding */ WithSupportLinks),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11540);
/* harmony import */ var _moz_radio_group_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94032);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



let greetings = ["hello", "howdy", "hola"];
let icons = ["chrome://global/skin/icons/highlights.svg", "chrome://global/skin/icons/delete.svg", "chrome://global/skin/icons/defaultFavicon.svg"];
let accesskeyOptions = ["h", "w", "X"];
let defaultLabelIds = ["moz-radio-0", "moz-radio-1", "moz-radio-2"];
let wrappedLabelIds = ["moz-radio-long-0", "moz-radio-long-1", "moz-radio-long-2"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "UI Widgets/Radio Group",
  component: "moz-radio-group",
  argTypes: {
    disabledButtons: {
      options: greetings,
      control: {
        type: "check"
      }
    },
    buttonLabels: {
      options: ["default", "wrapped"],
      mapping: {
        default: defaultLabelIds,
        wrapped: wrappedLabelIds
      },
      control: {
        type: "radio"
      }
    },
    accesskeys: {
      if: {
        arg: "showAccesskeys",
        truthy: true
      }
    }
  },
  parameters: {
    actions: {
      handles: ["click", "input", "change"]
    },
    status: "in-development",
    fluent: `
moz-radio-group =
  .label = This is the group label
moz-radio-0 =
  .label = Hello
moz-radio-1 =
  .label = Howdy
moz-radio-2 =
  .label = Hola
moz-radio-long-0 =
  .label = Hello ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt diam id ligula faucibus volutpat. Integer quis ultricies elit. In in dolor luctus velit sollicitudin efficitur vel id massa.
moz-radio-long-1 =
  .label = Howdy ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt diam id ligula faucibus volutpat. Integer quis ultricies elit. In in dolor luctus velit sollicitudin efficitur vel id massa.
moz-radio-long-2 =
  .label = Hola ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt diam id ligula faucibus volutpat. Integer quis ultricies elit. In in dolor luctus velit sollicitudin efficitur vel id massa.
moz-radio-described-0 =
  .label = Hello
  .description = This is the first option.
moz-radio-described-1 =
  .label = Howdy
  .description = This is the second option.
moz-radio-described-2 =
  .label = Hola
  .description = This is the third option.
moz-radio-described-long-0 =
  .label = Hello ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt diam id ligula faucibus volutpat. Integer quis ultricies elit. In in dolor luctus velit sollicitudin efficitur vel id massa.
  .description = This is the first option.
moz-radio-described-long-1 =
  .label = Howdy ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt diam id ligula faucibus volutpat. Integer quis ultricies elit. In in dolor luctus velit sollicitudin efficitur vel id massa.
  .description = This is the second option.
moz-radio-described-long-2 =
  .label = Hola ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt diam id ligula faucibus volutpat. Integer quis ultricies elit. In in dolor luctus velit sollicitudin efficitur vel id massa.
  .description = This is the third option.
moz-radio-group-description =
  .label = This is the group label
  .description = This is the group description
    `
  }
});
const Template = ({
  value = greetings[0],
  groupL10nId = "moz-radio-group",
  buttonLabels,
  groupName,
  showIcons,
  disabled,
  disabledButtons,
  showDescriptions,
  showAccesskeys,
  accesskeys,
  supportPage,
  groupSupportPage,
  hasSlottedSupportLinks,
  groupSlottedSupportLink,
  nestedFields,
  ellipsized
}) => (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <moz-radio-group
    name=${groupName}
    data-l10n-id=${groupL10nId}
    support-page=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(groupSupportPage)}
    ?disabled=${disabled}
    value=${value}
  >
    ${groupSlottedSupportLink ? (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<a href="/" slot="support-link">Slotted support link</a>` : ""}
    ${greetings.map((greeting, i) => (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
        <moz-radio
          ?disabled=${disabledButtons.includes(greeting)}
          value=${greeting}
          data-l10n-id=${showDescriptions ? buttonLabels[i].replace("moz-radio", "moz-radio-described") : buttonLabels[i]}
          iconSrc=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(showIcons ? icons[i] : "")}
          accesskey=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(showAccesskeys ? accesskeys[i] : "")}
          support-page=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(supportPage)}
          class=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.classMap)({
  "text-truncated-ellipsis": ellipsized
})}
        >
          ${hasSlottedSupportLinks ? (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<a slot="support-link" href="www.example.com">
                Click me!
              </a>` : ""}
          ${nestedFields ? (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<moz-checkbox
                slot="nested"
                data-l10n-id=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(buttonLabels[i])}
              >
              </moz-checkbox> ` : ""}
        </moz-radio>
      `)}
  </moz-radio-group>
`;
const Default = Template.bind({});
Default.args = {
  label: "",
  buttonLabels: "default",
  groupName: "greeting",
  unchecked: false,
  showIcons: false,
  disabled: false,
  disabledButtons: [],
  showDescriptions: false,
  showAccesskeys: false,
  accesskeys: accesskeyOptions,
  supportPage: "",
  groupSupportPage: "",
  hasSlottedSupportLinks: false,
  groupSlottedSupportLink: false
};
const AllUnchecked = Template.bind({});
AllUnchecked.args = {
  ...Default.args,
  value: ""
};
const WithIcon = Template.bind({});
WithIcon.args = {
  ...Default.args,
  showIcons: true
};
const DisabledRadioGroup = Template.bind({});
DisabledRadioGroup.args = {
  ...Default.args,
  disabled: true
};
const DisabledRadioButton = Template.bind({});
DisabledRadioButton.args = {
  ...Default.args,
  disabledButtons: ["hello"]
};
const WithDescriptions = Template.bind({});
WithDescriptions.args = {
  ...Default.args,
  showDescriptions: true
};
const WithAccesskeys = Template.bind({});
WithAccesskeys.args = {
  ...Default.args,
  showAccesskeys: true
};
const WithSupportLinks = Template.bind({});
WithSupportLinks.args = {
  ...Default.args,
  supportPage: "test"
};
const WithSlottedSupportLinks = Template.bind({});
WithSlottedSupportLinks.args = {
  ...Default.args,
  hasSlottedSupportLinks: true
};
const WithRadioGroupDescription = Template.bind({});
WithRadioGroupDescription.args = {
  ...Default.args,
  groupL10nId: "moz-radio-group-description"
};
const WithRadioGroupSupportLink = Template.bind({});
WithRadioGroupSupportLink.args = {
  ...Default.args,
  groupL10nId: "moz-radio-group-description",
  groupSupportPage: "this is the group support page"
};
const WithRadioGroupSlottedSupportLink = Template.bind({});
WithRadioGroupSlottedSupportLink.args = {
  ...Default.args,
  groupL10nId: "moz-radio-group-description",
  groupSlottedSupportLink: true
};
const WithNestedFields = Template.bind({});
WithNestedFields.args = {
  ...Default.args,
  nestedFields: true
};
const WithEllipsizedLabel = Template.bind({});
WithEllipsizedLabel.args = {
  ...Default.args,
  ellipsized: true,
  l10nId: "moz-checkbox-long-label"
};

/***/ }),

/***/ 94032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MozRadio: () => (/* binding */ MozRadio),
/* harmony export */   MozRadioGroup: () => (/* binding */ MozRadioGroup)
/* harmony export */ });
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11540);
/* harmony import */ var _lit_select_control_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68807);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48334);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */





/**
 * Element used to group and associate moz-radio buttons so that they function
 * as a single form-control element.
 *
 * @tagname moz-radio-group
 * @property {boolean} disabled - Whether or not the fieldset is disabled.
 * @property {string} label - Label for the group of moz-radio elements.
 * @property {string} description - Description for the group of moz-radio elements.
 * @property {string} supportPage - Support page for the group of moz-radio elements.
 * @property {string} name
 *  Input name of the radio group. Propagates to moz-radio children.
 * @property {string} value
 *  Selected value for the group. Changing the value updates the checked
 *  state of moz-radio children and vice versa.
 * @slot default - The radio group's content, intended for moz-radio elements.
 * @slot support-link - The radio group's support link intended for moz-radio elements.
 */
class MozRadioGroup extends _lit_select_control_mjs__WEBPACK_IMPORTED_MODULE_1__.SelectControlBaseElement {
  static childElementName = "moz-radio";
  static orientation = "vertical";
  static properties = {
    parentDisabled: {
      type: Boolean,
      state: true
    }
  };
}
customElements.define("moz-radio-group", MozRadioGroup);

/**
 * Input element that allows a user to select one option from a group of options.
 *
 * @tagname moz-radio
 * @property {boolean} checked - Whether or not the input is selected.
 * @property {string} description - Description for the input.
 * @property {boolean} disabled - Whether or not the input is disabled.
 * @property {string} iconSrc - Path to an icon displayed next to the input.
 * @property {number} itemTabIndex - Tabindex of the input element.
 * @property {string} label - Label for the radio input.
 * @property {string} name
 *  Name of the input control, set by the associated moz-radio-group element.
 * @property {string} supportPage - Name of the SUMO support page to link to.
 * @property {string} value - Value of the radio input.
 */
class MozRadio extends (0,_lit_select_control_mjs__WEBPACK_IMPORTED_MODULE_1__.SelectControlItemMixin)(_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozBaseInputElement) {
  static activatedProperty = "checked";
  get isDisabled() {
    return super.isDisabled || this.parentDisabled || this.controller.parentDisabled;
  }
  inputTemplate() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<input
      type="radio"
      id="input"
      value=${this.value}
      name=${this.name}
      .checked=${this.checked}
      aria-checked=${this.checked}
      aria-describedby="description"
      tabindex=${this.itemTabIndex}
      ?disabled=${this.isDisabled}
      accesskey=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(this.accessKey)}
      aria-label=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(this.ariaLabel ?? undefined)}
      @click=${this.handleClick}
      @change=${this.handleChange}
    />`;
  }
}
customElements.define("moz-radio", MozRadio);

/***/ })

}]);
//# sourceMappingURL=moz-radio-group-moz-radio-group-stories.14fd1c90.iframe.bundle.js.map