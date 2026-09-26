"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[308],{

/***/ 48256:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var toolkit_components_satchel_autocomplete_row_item_autocomplete_row_item_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83676);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



class AutocompleteRowItem extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    label: {
      type: String,
      fluent: true
    },
    description: {
      type: String,
      fluent: true
    },
    value: {
      type: String
    },
    icon: {
      type: String
    },
    actions: {
      type: Object
    },
    selected: {
      type: Boolean,
      reflect: true
    },
    pointerselected: {
      type: Boolean,
      reflect: true
    },
    subfocused: {
      type: Boolean,
      reflect: true
    },
    menuopen: {
      type: Boolean,
      reflect: true
    },
    type: {
      type: String,
      reflect: true
    },
    // Smart Form Fill properties
    sources: {
      type: Array
    },
    sourcesLabel: {
      type: String
    },
    sourcesPillsLabel: {
      type: String
    },
    sourcesPillsLabelHover: {
      type: String
    },
    loading: {
      type: Boolean
    },
    loadingLabel: {
      type: String
    },
    emptySourcesLabel: {
      type: String
    }
  };
  #actionsMenu = null;
  #openActionsMenu(anchor, actions) {
    const panel = this.closest("panel");
    if (!panel) {
      return false;
    }
    const XUL_NS = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
    const menupopup = document.createElementNS(XUL_NS, "menupopup");
    menupopup.setAttribute("aria-label", this.actions.secondary.label);
    const richlistbox = panel.richlistbox;
    const selectedIndex = richlistbox?.selectedIndex;
    for (const {
      label,
      action
    } of actions) {
      const menuitem = document.createElementNS(XUL_NS, "menuitem");
      menuitem.setAttribute("label", label);
      menuitem.setAttribute("closemenu", "single");
      menuitem.addEventListener("command", () => {
        if (richlistbox && richlistbox.selectedIndex != selectedIndex) {
          richlistbox.selectedIndex = selectedIndex;
        }
        action();
      });
      menupopup.appendChild(menuitem);
    }
    this.#actionsMenu = menupopup;
    this.menuopen = true;
    menupopup.addEventListener("popuphiding", () => {
      this.#actionsMenu = null;
      this.menuopen = false;
      menupopup.remove();
    });
    panel.appendChild(menupopup);
    menupopup.openPopup(anchor, "after_start");
    return true;
  }
  closeActionsMenu() {
    this.#actionsMenu?.hidePopup();
    this.menuopen = false;
  }
  getSecondaryActionItemIcon(type) {
    switch (type) {
      case "edit":
        return "chrome://global/skin/icons/edit.svg";
      case "menupopup":
        return "chrome://global/skin/icons/more.svg";
      case "delete":
        return "chrome://global/skin/icons/delete.svg";
      default:
        return "chrome://global/skin/icons/settings.svg";
    }
  }
  activateSecondaryAction() {
    const {
      action,
      actions
    } = this.actions?.secondary ?? {};
    if (action) {
      action();
      return false;
    }
    if (actions) {
      const button = this.shadowRoot.querySelector("moz-button.secondary-action");
      return this.#openActionsMenu(button, actions);
    }
    return false;
  }
  renderSecondaryActionButton() {
    const {
      type,
      action,
      actions,
      label,
      tooltip
    } = this.actions.secondary;
    if (!action && !actions) {
      return "";
    }
    const stopMouseEvents = e => e.stopPropagation();
    const onMouseDown = e => {
      // Letting mousedown run its default action focuses the button, making
      // nsFormFillController close the popup.
      e.preventDefault();
      e.stopPropagation();
    };
    const onClick = e => {
      e.stopPropagation();
      this.activateSecondaryAction();
    };
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<moz-button
      id="secondary-action-button"
      @mousedown=${onMouseDown}
      @mouseup=${stopMouseEvents}
      @click=${onClick}
      type="icon ghost"
      title=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(tooltip ?? label)}
      .ariaLabel=${tooltip ? label : null}
      .ariaHasPopup=${actions ? "menu" : null}
      .ariaExpanded=${actions ? String(!!this.menuopen) : null}
      .iconSrc=${this.getSecondaryActionItemIcon(type)}
      class="secondary-action"
    ></moz-button>`;
  }
  renderSmartFormFillLoader() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <span class="sff-loader">
        <span class="sff-loader-spinner"></span>
        <span class="sff-loader-label">${this.loadingLabel}</span>
      </span>
    `;
  }
  renderSourcesSummaryPill() {
    const stopMouseEvents = e => e.stopPropagation();
    const onMouseDown = e => {
      e.stopPropagation();
      this.activateSecondaryAction();
    };
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <span
        class="sources-pill"
        @mousedown=${onMouseDown}
        @mouseup=${stopMouseEvents}
      >
        <span class="sources-summary-list">
          ${this.sources.map(source => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
              <img
                class="source-favicon source-favicon-single"
                src=${source.favicon}
                alt=${source.label}
              />
            `)}
        </span>
        <span class="sources-summary-text">
          <span class="sources-count">${this.sourcesPillsLabel}</span>
          <span class="sources-count sources-count-hover"
            >${this.sourcesPillsLabelHover}</span
          >
          <img
            class="sources-count-icon"
            src="chrome://global/skin/icons/arrow-right-12.svg"
            alt=""
          />
        </span>
      </span>
    `;
  }
  renderNamedSourcePills() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <span class="sources-named-list">
        ${this.sources.map(source => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span class="sources-pill sources-pill-named">
              <img
                role="presentation"
                class="source-favicon"
                src=${source.favicon}
              />
              <span class="source-label">${source.label}</span>
            </span>`)}
      </span>
    `;
  }
  renderSourcesValue() {
    if (this.loading) {
      return this.renderSmartFormFillLoader();
    }
    if (!this.sources?.length) {
      return this.emptySourcesLabel;
    }
    if (this.sources?.length < 3) {
      return this.renderNamedSourcePills();
    }
    return this.renderSourcesSummaryPill();
  }
  renderSmartFormFillLabels() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <span class="description smart-form-fill-sources">
        <span class="sources-label">${this.sourcesLabel}</span>
        ${this.renderSourcesValue()}
      </span>
    `;
  }
  renderDefaultLabels() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span class="label">${this.label}</span> ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.when)(this.description, () => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span class="description">${this.description}</span>`)}`;
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${toolkit_components_satchel_autocomplete_row_item_autocomplete_row_item_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <div @click=${this.actions?.primary} class="row-item">
        ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.when)(this.icon, () => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<img role="presentation" class="icon" src=${this.icon} />`)}
        <div class="labels-container">
          ${this.type == "smartFormFill" ? this.renderSmartFormFillLabels() : this.renderDefaultLabels()}
        </div>
        ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.when)(this.actions?.secondary, () => this.renderSecondaryActionButton())}
      </div>
    `;
  }
}
customElements.define("autocomplete-row-item", AutocompleteRowItem);

/***/ }),

/***/ 74553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   WithSingleSecondaryAction: () => (/* binding */ WithSingleSecondaryAction),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var _autocomplete_row_item_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48256);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// eslint-disable-next-line import/no-unresolved


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/Credential Management/Autocomplete",
  component: "autocomplete-row-item",
  argTypes: {
    label: {
      control: {
        type: "text"
      }
    },
    description: {
      control: {
        type: "text"
      }
    },
    value: {
      control: {
        type: "text"
      }
    },
    icon: {
      control: {
        type: "text"
      }
    },
    actions: {
      control: {
        type: "object"
      }
    }
  }
});
const Template = ({
  label,
  description,
  value,
  icon,
  actions
}) => (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <autocomplete-row-item
    .label=${label}
    .description=${description}
    .value=${value}
    .icon=${icon}
    .actions=${actions}
  ></autocomplete-row-item>
`;
const Default = Template.bind({});
Default.args = {
  label: "example@example.com",
  description: "From this website",
  value: "example@example.com",
  icon: "chrome://global/skin/icons/defaultFavicon.svg",
  actions: {
    primary: () => alert("Primary action!")
  }
};
const WithSingleSecondaryAction = Template.bind({});
WithSingleSecondaryAction.args = {
  label: "example@example.com",
  description: "From this website",
  value: "example@example.com",
  icon: "chrome://global/skin/icons/defaultFavicon.svg",
  actions: {
    primary: () => alert("Primary action!"),
    secondary: {
      type: "edit",
      action: () => alert("secondary action")
    }
  }
};

/***/ }),

/***/ 83676:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "autocomplete-row-item.bfd370d009be9bd5de8f.css";

/***/ })

}]);
//# sourceMappingURL=autocomplete-row-item-stories.425f1102.iframe.bundle.js.map