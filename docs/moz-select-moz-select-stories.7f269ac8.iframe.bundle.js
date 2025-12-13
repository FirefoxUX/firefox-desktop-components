"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[2776,6494],{

/***/ 44494:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-select.bbdded2f1fa09076ad86.css";

/***/ }),

/***/ 47617:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   Disabled: () => (/* binding */ Disabled),
/* harmony export */   PreselectedValue: () => (/* binding */ PreselectedValue),
/* harmony export */   WithAccesskey: () => (/* binding */ WithAccesskey),
/* harmony export */   WithDescription: () => (/* binding */ WithDescription),
/* harmony export */   WithDisabledOption: () => (/* binding */ WithDisabledOption),
/* harmony export */   WithEllipsizedLabel: () => (/* binding */ WithEllipsizedLabel),
/* harmony export */   WithHiddenOption: () => (/* binding */ WithHiddenOption),
/* harmony export */   WithIcon: () => (/* binding */ WithIcon),
/* harmony export */   WithSelectedOptionIcon: () => (/* binding */ WithSelectedOptionIcon),
/* harmony export */   WithSlottedDescription: () => (/* binding */ WithSlottedDescription),
/* harmony export */   WithSlottedSupportLink: () => (/* binding */ WithSlottedSupportLink),
/* harmony export */   WithSupportLink: () => (/* binding */ WithSupportLink),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var _moz_select_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62776);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "UI Widgets/Select",
  component: "moz-select",
  argTypes: {
    l10nId: {
      options: ["moz-select-label", "moz-select-description", "moz-select-long-label"],
      control: {
        type: "select"
      }
    },
    label: {
      table: {
        disable: true
      }
    },
    description: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    status: "in-development",
    handles: ["change", "input"],
    fluent: `
moz-select-label =
  .label = Select an option
moz-select-long-label =
  .label = Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum libero enim, luctus eu ante a, maximus imperdiet mi. Suspendisse sodales, nisi et commodo malesuada, lectus.
moz-select-description =
  .label = Select an option
  .description = This is a description for the select dropdown
moz-option-1 =
    .label = Option 1
moz-option-2 =
    .label = Option 2
moz-option-3 =
    .label = Option 3
moz-option-a =
    .label = Option A
moz-option-b =
    .label = Option B
moz-option-c =
    .label = Option C
moz-option-d =
    .label = Option D
    `
  }
});
const DEFAULT_OPTIONS = [{
  value: "1",
  l10nId: "moz-option-1"
}, {
  value: "2",
  l10nId: "moz-option-2"
}, {
  value: "3",
  l10nId: "moz-option-3"
}];
const OTHER_OPTIONS = [{
  value: "A",
  l10nId: "moz-option-a"
}, {
  value: "B",
  l10nId: "moz-option-b"
}, {
  value: "C",
  l10nId: "moz-option-c"
}, {
  value: "D",
  l10nId: "moz-option-d"
}];
const WITH_ICON_DEFAULT_OPTIONS = [{
  value: "1",
  l10nId: "moz-option-1",
  iconSrc: "chrome://global/skin/icons/settings.svg"
}, {
  value: "2",
  l10nId: "moz-option-2",
  iconSrc: "chrome://global/skin/icons/info.svg"
}, {
  value: "3",
  l10nId: "moz-option-3",
  iconSrc: "chrome://global/skin/icons/warning.svg"
}];
const WITH_ICON_OTHER_OPTIONS = [{
  value: "A",
  l10nId: "moz-option-a",
  iconSrc: "chrome://global/skin/icons/heart.svg"
}, {
  value: "B",
  l10nId: "moz-option-b",
  iconSrc: "chrome://global/skin/icons/edit.svg"
}, {
  value: "C",
  l10nId: "moz-option-c",
  iconSrc: "chrome://global/skin/icons/delete.svg"
}];
const Template = ({
  name,
  value,
  iconSrc,
  disabled,
  l10nId,
  description,
  supportPage,
  accessKey,
  hasSlottedDescription,
  useOtherOptions,
  options = useOtherOptions ? OTHER_OPTIONS : DEFAULT_OPTIONS,
  hasSlottedSupportLink,
  ellipsized,
  disabledOption,
  hiddenOption
}) => (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <div style="width:300px">
    <moz-select
      name=${name}
      value=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(value || null)}
      iconsrc=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(iconSrc || null)}
      ?disabled=${disabled}
      data-l10n-id=${l10nId}
      support-page=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(supportPage || null)}
      accesskey=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(accessKey || null)}
      class=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.classMap)({
  "text-truncated-ellipsis": ellipsized
})}
    >
      ${hasSlottedDescription ? (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<div slot="description">${description}</div>` : ""}
      ${hasSlottedSupportLink ? (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<a slot="support-link" href="www.example.com">Click me!</a>` : ""}
      ${options.map((opt, i) => (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<moz-option
            value=${opt.value}
            data-l10n-id=${opt.l10nId}
            iconsrc=${opt.iconSrc}
            ?disabled=${disabledOption && i == 1}
            ?hidden=${hiddenOption && i == 2}
          ></moz-option>`)}
    </moz-select>
  </div>
`;
const Default = Template.bind({});
Default.args = {
  name: "example-moz-select",
  value: "",
  iconSrc: "",
  disabled: false,
  l10nId: "moz-select-label",
  description: "",
  supportPage: "",
  accessKey: "",
  hasSlottedDescription: false,
  useOtherOptions: false,
  hasSlottedSupportLink: false,
  ellipsized: false,
  disabledOption: false,
  hiddenOption: false
};
const WithIcon = Template.bind({});
WithIcon.args = {
  ...Default.args,
  iconSrc: "chrome://global/skin/icons/highlights.svg"
};
const WithDescription = Template.bind({});
WithDescription.args = {
  ...Default.args,
  l10nId: "moz-select-description"
};
const WithSlottedDescription = Template.bind({});
WithSlottedDescription.args = {
  ...Default.args,
  description: "This is a custom slotted description.",
  hasSlottedDescription: true
};
const WithSelectedOptionIcon = args => {
  const options = args.useOtherOptions ? WITH_ICON_OTHER_OPTIONS : WITH_ICON_DEFAULT_OPTIONS;
  return Template({
    ...args,
    options
  });
};
WithSelectedOptionIcon.args = {
  ...Default.args,
  useOtherOptions: false
};
const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true
};
const WithAccesskey = Template.bind({});
WithAccesskey.args = {
  ...Default.args,
  accessKey: "s"
};
const WithSupportLink = Template.bind({});
WithSupportLink.args = {
  ...Default.args,
  supportPage: "support-page",
  l10nId: "moz-select-description"
};
const WithSlottedSupportLink = Template.bind({});
WithSlottedSupportLink.args = {
  ...Default.args,
  hasSlottedSupportLink: true,
  l10nId: "moz-select-description"
};
const PreselectedValue = Template.bind({});
PreselectedValue.args = {
  ...Default.args,
  value: "2"
};
const WithEllipsizedLabel = Template.bind({});
WithEllipsizedLabel.args = {
  ...Default.args,
  ellipsized: true,
  l10nId: "moz-select-long-label"
};
const WithDisabledOption = Template.bind({});
WithDisabledOption.args = {
  ...Default.args,
  disabledOption: true
};
const WithHiddenOption = Template.bind({});
WithHiddenOption.args = {
  ...Default.args,
  hiddenOption: true
};

/***/ }),

/***/ 62776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MozOption: () => (/* binding */ MozOption),
/* harmony export */   "default": () => (/* binding */ MozSelect)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_select_moz_select_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44494);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/** @import { TemplateResult } from "chrome://global/content/vendor/lit.all.mjs" */

/**
 * @typedef {object} SelectOption
 * @property {string} value - The value of the option.
 * @property {string} label - The display label of the option.
 * @property {string} [iconSrc] - The icon source URL for the option.
 * @property {boolean} [disabled] - Whether the option is disabled.
 * @property {boolean} [hidden] - Whether the option is hidden.
 */

/**
 * A select dropdown with options provided via custom `moz-option` elements.
 *
 * @tagname moz-select
 * @property {string} label - The text of the label element
 * @property {string} name - The name of the input control
 * @property {string} value - The value of the selected option
 * @property {boolean} disabled - The disabled state of the input control
 * @property {string} iconSrc - The src for an optional icon
 * @property {string} description - The text for the description element that helps describe the input control
 * @property {string} supportPage - Name of the SUMO support page to link to.
 * @property {string} ariaLabel - The aria-label text when there is no visible label.
 * @property {string} ariaDescription - The aria-description text when there is no visible description.
 * @property {SelectOption[]} options - The array of options, populated by <moz-option> children in the
 *     default slot. Do not set directly, these will be overridden by <moz-option> children.
 * @property {SelectOption} selectedOption - The currently selected option object.
 * @property {number} selectedIndex - The index of the currently selected option.
 * @property {boolean} usePanelList - Whether or not to render a panel. Depends on options using icons.
 */
class MozSelect extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozBaseInputElement {
  static properties = {
    options: {
      type: Array,
      state: true
    },
    selectedOption: {
      type: Object,
      state: true
    },
    selectedIndex: {
      type: Number,
      state: true
    },
    usePanelList: {
      type: Boolean,
      state: true
    }
  };
  static inputLayout = "block";
  static queries = {
    panelList: "panel-list",
    panelTrigger: ".panel-trigger"
  };
  constructor() {
    super();
    this.value = "";
    this.options = [];
    this.usePanelList = false;
    this.selectedOption = null;
    this.selectedIndex = 0;
    this.slotRef = (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    this.optionsMutationObserver = new MutationObserver(this.populateOptions.bind(this));
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.optionsMutationObserver.observe(this, {
      attributeFilter: ["label", "value", "iconsrc", "disabled", "hidden"],
      childList: true,
      subtree: true
    });
  }
  update(changedProperties) {
    super.update(changedProperties);
    if (this.hasUpdated && changedProperties.has("options")) {
      // Match the select's value on initial render or options change.
      this.value = this.inputEl.value;
    }
  }
  willUpdate(changedProperties) {
    super.willUpdate(changedProperties);
    if (changedProperties.has("value") || changedProperties.has("options")) {
      this.selectedIndex = this.options.findIndex(opt => opt.value === this.value);
      this.selectedOption = this.options[this.selectedIndex] ?? this.options[0];
    }
  }

  /**
   * Gets the icon source for the currently selected option.
   *
   * @returns {string} The icon source URL or empty string.
   */
  get _selectedOptionIconSrc() {
    return this.selectedOption?.iconSrc ?? "";
  }

  /**
   * Internal - populates the select element with options from the light DOM slot.
   */
  populateOptions() {
    let options = [];
    for (const node of this.slotRef.value.assignedNodes()) {
      if (node.localName === "moz-option") {
        options.push({
          value: node.getAttribute("value"),
          label: node.getAttribute("label"),
          iconSrc: node.getAttribute("iconsrc"),
          disabled: node.getAttribute("disabled") !== null,
          hidden: node.getAttribute("hidden") !== null
        });
      }
    }
    this.options = options;
    this.usePanelList = options.some(opt => opt.iconSrc);

    // Default to first option if no value set to match native select behavior.
    if (this.usePanelList && !this.value && this.options.length) {
      this.value = this.options[0].value;
    }
  }

  /**
   * Handles change events and updates the selected value.
   *
   * @param {Event} event
   * @memberof MozSelect
   */
  handleStateChange(event) {
    this.value = event.target.value;
  }

  /**
   * Handles change events from the panel-list and dispatches a change event.
   *
   * @param {Event} event - The click event from panel-item selection.
   */
  handlePanelChange(event) {
    this.handleStateChange(event);
    this.redispatchEvent(new Event("change", {
      bubbles: true
    }));
  }

  /**
   * Handles the panel being hidden and returns focus to the trigger button.
   */
  handlePanelHidden() {
    this.panelTrigger?.focus();
  }

  /**
   * Toggles the panel-list open/closed state.
   *
   * @param {Event} event - The triggering event.
   */
  togglePanel(event) {
    this.panelList?.toggle(event);
  }

  /**
   * Handles keyboard events on the panel trigger button.
   * Arrow keys change selection (Windows/Linux) or open the panel (Mac).
   * Space opens the panel. Enter is prevented to match native select behavior.
   *
   * @param {KeyboardEvent} event - The keyboard event.
   */
  handlePanelKeydown(event) {
    if (this.panelList?.open) {
      return;
    }
    switch (event.key) {
      case "ArrowDown":
      case "ArrowUp":
        event.preventDefault();
        if (navigator.platform.includes("Mac")) {
          // Mac - open the menu
          this.togglePanel(event);
        } else {
          // Windows/Linux - select the next option
          this.selectNextOption(event.key === "ArrowDown" ? 1 : -1);
        }
        break;
      case "Enter":
        event.preventDefault();
        break;
      case " ":
        event.preventDefault();
        this.togglePanel(event);
        break;
    }
  }

  /**
   * Selects the next enabled option in the given direction. Skips disabled and
   * hidden options.
   *
   * @param {number} direction - The direction to move (1 for next, -1 for
   * previous).
   */
  selectNextOption(direction) {
    let currentIndex = this.selectedIndex;
    let options = this.options;
    for (let i = 1; i < options.length; i++) {
      let nextIndex = currentIndex + direction * i;
      let nextOption = options[nextIndex];
      if (nextOption && !nextOption.disabled && !nextOption.hidden) {
        this.value = nextOption.value;
        this.redispatchEvent(new Event("change", {
          bubbles: true
        }));
        return;
      }
    }
  }

  /**
   * @type {MozBaseInputElement['inputStylesTemplate']}
   */
  inputStylesTemplate() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)` <link
      rel="stylesheet"
      href="${toolkit_content_widgets_moz_select_moz_select_css__WEBPACK_IMPORTED_MODULE_0__}"
    />`;
  }

  /**
   * Renders the icon for the currently selected option.
   *
   * @returns {TemplateResult | null}
   */
  selectedOptionIconTemplate() {
    if (this._selectedOptionIconSrc) {
      return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<img
        src=${this._selectedOptionIconSrc}
        role="presentation"
        class="select-option-icon"
      />`;
    }
    return null;
  }

  /**
   * Renders the native select element (used when options don't have icons).
   *
   * @returns {TemplateResult}
   */
  selectTemplate() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<select
      id="input"
      name=${this.name}
      .value=${this.value}
      accesskey=${this.accessKey}
      @input=${this.handleStateChange}
      @change=${this.redispatchEvent}
      ?disabled=${this.disabled || this.parentDisabled}
      aria-label=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.ariaLabel ?? undefined)}
      aria-describedby="description"
      aria-description=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.hasDescription ? undefined : this.ariaDescription)}
    >
      ${this.options.map(option => (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
          <option
            value=${option.value}
            .selected=${option.value == this.value}
            ?disabled=${option.disabled}
            ?hidden=${option.hidden}
          >
            ${option.label}
          </option>
        `)}
    </select>`;
  }

  /**
   * Renders the button trigger for the panel-list (used when options have
   * icons).
   *
   * @returns {TemplateResult}
   */
  panelTargetTemplate() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<button
      class="panel-trigger"
      aria-haspopup="menu"
      aria-expanded=${this.panelList?.open ? "true" : "false"}
      @click=${this.togglePanel}
      @keydown=${this.handlePanelKeydown}
      ?disabled=${this.disabled || this.parentDisabled}
    >
      ${this.selectedOption?.label}
    </button>`;
  }

  /**
   * Renders the panel-list dropdown menu (used when options have icons).
   *
   * @returns {TemplateResult}
   */
  panelListTemplate() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<panel-list
      .value=${this.value}
      min-width-from-anchor
      id="input"
      @click=${this.handlePanelChange}
      @hidden=${this.handlePanelHidden}
    >
      ${this.options.map(option => (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<panel-item
            .value=${option.value}
            ?selected=${option.value == this.value}
            ?disabled=${option.disabled}
            ?hidden=${option.hidden}
            icon=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(option.iconSrc)}
            style=${option.iconSrc ? `--select-item-icon-url: url(${option.iconSrc})` : ""}
          >
            ${option.label}
          </panel-item>`)}
    </panel-list>`;
  }

  /**
   * Renders the main input template with either a native select or panel-list.
   *
   * @returns {TemplateResult}
   */
  inputTemplate() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <div
        class=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.classMap)({
      "select-wrapper": true,
      "with-icon": !!this._selectedOptionIconSrc
    })}
      >
        ${this.selectedOptionIconTemplate()}
        ${!this.usePanelList ? this.selectTemplate() : this.panelTargetTemplate()}
        <img
          src="chrome://global/skin/icons/arrow-down.svg"
          role="presentation"
          class="select-chevron-icon"
        />
      </div>
      ${this.usePanelList ? this.panelListTemplate() : ""}
      <slot
        @slotchange=${this.populateOptions}
        hidden
        ${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ref)(this.slotRef)}
      ></slot>
    `;
  }
}
customElements.define("moz-select", MozSelect);

/**
 * A custom option element for use in moz-select.
 *
 * @tagname moz-option
 * @property {string} value - The value of the option
 * @property {string} label - The label of the option
 * @property {string} iconSrc - The path to the icon of the the option
 * @property {boolean} disabled - Whether the option is disabled
 * @property {boolean} hidden - Whether the option is hidden
 */
class MozOption extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    // Reflect the attribute so that moz-select can detect changes with a MutationObserver
    value: {
      type: String,
      reflect: true
    },
    // Reflect the attribute so that moz-select can detect changes with a MutationObserver
    label: {
      type: String,
      reflect: true,
      fluent: true
    },
    iconSrc: {
      type: String,
      reflect: true
    },
    disabled: {
      type: Boolean,
      reflect: true
    },
    hidden: {
      type: Boolean,
      reflect: true
    }
  };
  constructor() {
    super();
    this.value = "";
    this.label = "";
    this.iconSrc = "";
    this.disabled = false;
    this.hidden = false;
  }
  render() {
    // This is just a placeholder to pass values into moz-select.
    return "";
  }
}
customElements.define("moz-option", MozOption);

/***/ })

}]);
//# sourceMappingURL=moz-select-moz-select-stories.7f269ac8.iframe.bundle.js.map