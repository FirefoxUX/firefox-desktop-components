"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[8325],{

/***/ 8038:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "tab-group-icon.8145e279deb6831e42a8.css";

/***/ }),

/***/ 8980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SmartwindowChip: () => (/* binding */ SmartwindowChip)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_smartwindow_chip_smartwindow_chip_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68880);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);
/* harmony import */ var chrome_browser_content_aiwindow_components_tab_group_icon_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62410);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



// eslint-disable-next-line import/no-unassigned-import


/**
 * Three types of chips:
 * - source (default): used to display citations links across smart window
 * - in-line: used in the smartbar when typing "@" aka mentions
 * - context: used in the smartbar header, added via the + button
 *
 * @property {string} type - Type of chip: "source", "in-line" or "context"
 * @property {string} label - The text content of the chip
 * @property {string} iconSrc - Favicon or icon URL
 * @property {string} href - URL for the link
 * @property {string} itemRole - ARIA role for the inner element
 * @property {string} openLinkEvent - Event dispatched when a linked chip is
 * clicked. Each host opens links itself, so it names the event it listens for.
 * @property {boolean} isTabGroup - Whether the chip stands for a tab group, which has no
 * page and so shows a tab-group-icon instead of a favicon
 * @property {string} tabGroupColor - Tab group color name, tinting that icon
 * @property {string} tabGroupId - Id of the tab group to open when clicked
 * @property {boolean} removable - Whether the chip shows a remove button on hover - only
 * affects type context and source
 */
class SmartwindowChip extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  // Forward focus to the inner element for keyboard navigation.
  static shadowRootOptions = {
    ...chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement.shadowRootOptions,
    delegatesFocus: true
  };
  static properties = {
    type: {
      type: String,
      reflect: true
    },
    label: {
      type: String
    },
    iconSrc: {
      type: String
    },
    href: {
      type: String
    },
    itemRole: {
      type: String
    },
    // Each host opens links itself, so it names the event it listens for.
    openLinkEvent: {
      type: String
    },
    isTabGroup: {
      type: Boolean
    },
    tabGroupColor: {
      type: String
    },
    tabGroupId: {
      type: String
    },
    removable: {
      type: Boolean,
      reflect: true
    }
  };
  #parentHost = null;
  constructor() {
    super();
    this.type = "source";
    this.label = "";
    this.iconSrc = "";
    this.href = "";
    this.itemRole = "";
    this.openLinkEvent = "AIChatContent:OpenLink";
    this.removable = false;
    this.isTabGroup = false;
    this.tabGroupColor = "";
    this.tabGroupId = "";
  }
  connectedCallback() {
    super.connectedCallback();
    this.#parentHost = this.getRootNode()?.host;
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    // Dispatch only when the parent is still connected: Chip was removed by
    // the user and not due to the parent unmounting.
    if (this.#parentHost?.isConnected) {
      this.#parentHost.dispatchEvent(new CustomEvent("smartwindow-chip:disconnected", {
        bubbles: true,
        composed: true,
        detail: {
          label: this.label,
          type: this.type
        }
      }));
    }
    this.#parentHost = null;
  }
  get #isInlineAndEmpty() {
    return this.type === "in-line" && !this.label;
  }
  get #isRemovableAndNotInline() {
    return this.type !== "in-line" && this.removable;
  }
  #handleClick() {
    if (this.isTabGroup && this.tabGroupId) {
      this.dispatchEvent(new CustomEvent("AIChatContent:OpenTabGroup", {
        bubbles: true,
        composed: true,
        detail: {
          groupId: this.tabGroupId
        }
      }));
    }
    this.dispatchEvent(new CustomEvent("smartwindow-chip:click", {
      bubbles: true,
      composed: true,
      detail: {
        label: this.label
      }
    }));
  }
  #handleRemove(e) {
    e.stopPropagation();
    e.preventDefault();
    this.dispatchEvent(new CustomEvent("smartwindow-chip:remove", {
      bubbles: true,
      composed: true,
      detail: {
        label: this.label
      }
    }));
  }
  #handleAnchorClick(e) {
    if (!this.href) {
      return;
    }
    e.preventDefault();
    const hasModifier = e.shiftKey || e.metaKey || e.ctrlKey || e.altKey || e.button !== 0;
    this.dispatchEvent(new CustomEvent(this.openLinkEvent, {
      bubbles: true,
      composed: true,
      detail: {
        url: this.href,
        preferSwitchToTab: !hasModifier,
        shiftKey: e.shiftKey,
        metaKey: e.metaKey,
        ctrlKey: e.ctrlKey,
        altKey: e.altKey,
        button: e.button
      }
    }));
  }
  #renderIcon() {
    if (this.#isInlineAndEmpty) {
      return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span class="chip-at">@</span>`;
    }
    if (this.isTabGroup) {
      return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<tab-group-icon
        .label=${this.label}
        .color=${this.tabGroupColor}
      ></tab-group-icon>`;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<img
      class="chip-icon"
      src=${this.iconSrc || "chrome://global/skin/icons/defaultFavicon.svg"}
      @error=${e => {
      e.target.src = "chrome://global/skin/icons/defaultFavicon.svg";
    }}
      alt=""
    />`;
  }
  #renderRemoveButton() {
    if (!this.#isRemovableAndNotInline) {
      return null;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<button
      class="chip-remove"
      @click=${this.#handleRemove}
      data-l10n-id="aiwindow-website-chip-remove-button"
    >
      <img
        class="chip-remove-icon"
        src="chrome://global/skin/icons/close.svg"
        alt=""
      />
    </button>`;
  }
  #renderLabel() {
    if (this.#isInlineAndEmpty) {
      return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span
        class="chip-label"
        data-l10n-id="aiwindow-website-chip-placeholder"
      ></span>`;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span class="chip-label">${this.label}</span>`;
  }
  #renderChip() {
    const iconTemplate = this.#renderIcon();
    const removeButton = this.#renderRemoveButton();
    const labelTemplate = this.#renderLabel();
    const chipContent = (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      ${iconTemplate} ${removeButton} ${labelTemplate}
    `;
    if (this.href) {
      return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<a
        class="chip"
        part="chip"
        role=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.itemRole || undefined)}
        href=${this.href}
        @click=${this.#handleAnchorClick}
      >
        ${chipContent}
      </a>`;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<button
      class="chip"
      part="chip"
      role=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.itemRole || undefined)}
      ?data-empty=${this.#isInlineAndEmpty}
      @click=${this.#handleClick}
    >
      ${chipContent}
    </button>`;
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_smartwindow_chip_smartwindow_chip_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      ${this.#renderChip()}
    `;
  }
}
customElements.define("smartwindow-chip", SmartwindowChip);

/***/ }),

/***/ 31901:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContextNonRemovable: () => (/* binding */ ContextNonRemovable),
/* harmony export */   ContextRemovable: () => (/* binding */ ContextRemovable),
/* harmony export */   InLineCollection: () => (/* binding */ InLineCollection),
/* harmony export */   InLineDefault: () => (/* binding */ InLineDefault),
/* harmony export */   InLineEmpty: () => (/* binding */ InLineEmpty),
/* harmony export */   MixedCollection: () => (/* binding */ MixedCollection),
/* harmony export */   SourceChip: () => (/* binding */ SourceChip),
/* harmony export */   TabGroupColors: () => (/* binding */ TabGroupColors),
/* harmony export */   TabGroupContextChip: () => (/* binding */ TabGroupContextChip),
/* harmony export */   TabGroupInLine: () => (/* binding */ TabGroupInLine),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var browser_themes_shared_tabbrowser_tab_tokens_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79439);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var chrome_browser_content_aiwindow_components_smartwindow_chip_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8980);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/AI Window/Smart Window Chip",
  component: "smartwindow-chip",
  argTypes: {
    type: {
      control: "select",
      options: ["in-line", "context", "source"]
    },
    label: {
      control: "text"
    },
    iconSrc: {
      control: "text"
    },
    href: {
      control: "text"
    },
    isTabGroup: {
      control: "boolean"
    },
    tabGroupColor: {
      control: "select",
      options: ["", "blue", "cyan", "gray", "green", "orange", "pink", "purple", "red", "yellow"]
    },
    removable: {
      control: "boolean"
    }
  },
  parameters: {
    fluent: `
aiwindow-website-chip-placeholder = Tag a tab or site
aiwindow-website-chip-remove-button =
  .aria-label = Remove
    `
  }
});

// A tab group chip is tinted with the --tab-group-* tokens.
const tabGroupTokens = (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<link
  rel="stylesheet"
  href="${browser_themes_shared_tabbrowser_tab_tokens_css__WEBPACK_IMPORTED_MODULE_0__}"
/>`;
const Template = ({
  type,
  label,
  iconSrc,
  href,
  isTabGroup,
  tabGroupColor,
  removable
}) => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
  ${isTabGroup ? tabGroupTokens : ""}
  <smartwindow-chip
    .type=${type}
    .label=${label}
    .iconSrc=${iconSrc}
    .href=${href || ""}
    .isTabGroup=${isTabGroup ?? false}
    .tabGroupColor=${tabGroupColor || ""}
    .removable=${removable ?? false}
  ></smartwindow-chip>
`;
const InLineDefault = Template.bind({});
InLineDefault.args = {
  type: "in-line",
  label: "mozilla.org",
  iconSrc: "chrome://branding/content/about-logo.svg"
};
const InLineEmpty = Template.bind({});
InLineEmpty.args = {
  type: "in-line",
  label: "",
  iconSrc: ""
};
const InLineCollection = () => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
  <div style="display: flex; flex-wrap: wrap; gap: 8px;">
    <smartwindow-chip
      type="in-line"
      label="mozilla.org"
      iconSrc="chrome://branding/content/icon16.png"
    ></smartwindow-chip>
    <smartwindow-chip type="in-line" label=""></smartwindow-chip>
  </div>
`;
const ContextRemovable = Template.bind({});
ContextRemovable.args = {
  type: "context",
  label: "example.com",
  iconSrc: "chrome://branding/content/icon16.png",
  removable: true
};
const ContextNonRemovable = Template.bind({});
ContextNonRemovable.args = {
  type: "context",
  label: "example.com",
  iconSrc: "chrome://branding/content/icon16.png",
  removable: false
};
const SourceChip = Template.bind({});
SourceChip.args = {
  type: "source",
  label: "example.com",
  iconSrc: "chrome://branding/content/icon16.png",
  href: "https://example.com"
};
const MixedCollection = () => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
  <div style="display: flex; flex-wrap: wrap; gap: 8px;">
    <smartwindow-chip
      type="in-line"
      label="mozilla.org"
      iconSrc="chrome://branding/content/icon16.png"
    ></smartwindow-chip>
    <smartwindow-chip type="in-line" label=""></smartwindow-chip>
    <smartwindow-chip
      type="context"
      label="example.com"
      iconSrc="chrome://branding/content/about-logo.svg"
      href="https://example.com"
      .removable=${true}
    ></smartwindow-chip>
    <smartwindow-chip
      type="source"
      label="example.com"
      iconSrc="chrome://branding/content/icon16.png"
      href="https://example.com"
    ></smartwindow-chip>
  </div>
`;
const TabGroupContextChip = Template.bind({});
TabGroupContextChip.args = {
  type: "context",
  label: "Trip planning",
  isTabGroup: true,
  tabGroupColor: "purple",
  removable: true
};
const TabGroupInLine = Template.bind({});
TabGroupInLine.args = {
  type: "in-line",
  label: "Trip planning",
  isTabGroup: true,
  tabGroupColor: "blue"
};
const TabGroupColors = () => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
  ${tabGroupTokens}
  <div style="display: flex; flex-wrap: wrap; gap: 8px;">
    ${["blue", "cyan", "gray", "green", "orange", "pink", "purple", "red", "yellow"].map(color => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<smartwindow-chip
          type="context"
          .label=${color}
          .isTabGroup=${true}
          .tabGroupColor=${color}
          .removable=${true}
        ></smartwindow-chip>`)}
  </div>
`;

/***/ }),

/***/ 62410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabGroupIcon: () => (/* binding */ TabGroupIcon)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_tab_group_icon_tab_group_icon_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * Stands in for a tab group's favicon, mirroring the tab group label: a box in
 * the group's color holding the first character of its name. The name is always
 * shown next to it, so the character is hidden from assistive technology.
 * Consumers size it with --tab-group-icon-size and --tab-group-icon-font-size.
 *
 * @property {string} label - Tab group name, of which the first character shows
 * @property {string} color - Tab group color name, as used by --tab-group-*
 */
class TabGroupIcon extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    label: {
      type: String
    },
    color: {
      type: String,
      reflect: true
    }
  };
  constructor() {
    super();
    this.label = "";
    this.color = "";
  }
  willUpdate(changedProperties) {
    if (!changedProperties.has("color")) {
      return;
    }
    // On this element, since a custom property substitutes where it is
    // declared rather than where it is used.
    const color = this.color || "gray";
    this.style.setProperty("--tab-group-color", `var(--tab-group-${color})`);
    this.style.setProperty("--tab-group-text-color", `var(--tab-group-${color}-text)`);
  }

  // Array.from() so an astral first character is not cut in half.
  get #initial() {
    return (Array.from(this.label?.trim() ?? "")[0] ?? "").toUpperCase();
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_tab_group_icon_tab_group_icon_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <span aria-hidden="true">${this.#initial}</span>
    `;
  }
}
customElements.define("tab-group-icon", TabGroupIcon);

/***/ }),

/***/ 68880:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "smartwindow-chip.a57410ecc765d111906c.css";

/***/ }),

/***/ 79439:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "tab.tokens.fac864ffcef7b9588b59.css";

/***/ })

}]);
//# sourceMappingURL=components-smartwindow-chip-smartwindow-chip-stories.7fd9ac3d.iframe.bundle.js.map