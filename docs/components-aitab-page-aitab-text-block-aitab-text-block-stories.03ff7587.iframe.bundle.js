"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[4421],{

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

/***/ 9546:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aitab-text-block.2dbe89a1989a4374b9e5.css";

/***/ }),

/***/ 58676:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aitab-base.17c7b7519b62f187407a.css";

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

/***/ 67092:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   withHeadingFont: () => (/* binding */ withHeadingFont)
/* harmony export */ });
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/**
 * Storybook-only source for the "Mozilla Headline" heading font used by
 * aitab-base.css. Not packaged in Firefox.
 *
 * In Firefox, AITabParent downloads MozillaHeadline-SemiBold.ttf from the
 * ai-window-aitab Remote Settings collection and aitab-page installs the bytes
 * with FontFace. Storybook has no parent actor, and the Remote Settings CDN
 * sends no CORS headers, so stories load the same family, weight and width
 * from Google Fonts instead. If the Remote Settings file is replaced, update
 * FONT_URL to match.
 */
const FONT_URL = "https://fonts.googleapis.com/css2?family=Mozilla+Headline:wdth,wght@87.5,600&display=swap";

/**
 * Story decorator that adds the heading font stylesheet to the preview
 * document once. @font-face rules apply inside shadow roots from there.
 *
 * @param {Function} story
 */
function withHeadingFont(story) {
  if (!document.querySelector(`link[href="${FONT_URL}"]`)) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = FONT_URL;
    document.head.append(link);
  }
  return story();
}

/***/ }),

/***/ 68880:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "smartwindow-chip.a57410ecc765d111906c.css";

/***/ }),

/***/ 69181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   NoReferences: () => (/* binding */ NoReferences),
/* harmony export */   OneParagraph: () => (/* binding */ OneParagraph),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var chrome_browser_content_aiwindow_components_aitab_text_block_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91796);
/* harmony import */ var _aitab_story_font_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67092);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */


// eslint-disable-next-line import/no-unassigned-import


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/AI Window/AI Tab Text Block",
  component: "aitab-text-block",
  decorators: [_aitab_story_font_mjs__WEBPACK_IMPORTED_MODULE_2__.withHeadingFont],
  argTypes: {
    heading: {
      control: {
        type: "text"
      }
    },
    paragraphs: {
      control: {
        type: "object"
      }
    },
    references: {
      control: {
        type: "object"
      }
    }
  }
});
const REFERENCES = [{
  title: "energy.gov",
  href: "https://energy.gov",
  favicon: "chrome://branding/content/about-logo.svg"
}, {
  title: "NEEP",
  href: "https://neep.org",
  favicon: "chrome://branding/content/icon16.png"
}, {
  title: "r/heatpumps",
  href: "https://reddit.com/r/heatpumps",
  favicon: "chrome://global/skin/icons/defaultFavicon.svg"
}, {
  title: "Yelp",
  href: "https://yelp.com",
  favicon: "chrome://branding/content/about-logo.svg"
}];
const Template = ({
  heading,
  paragraphs,
  references
}) => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <aitab-text-block
    heading=${heading}
    .paragraphs=${paragraphs}
    .references=${references}
  ></aitab-text-block>
`;
const Default = Template.bind({});
Default.args = {
  heading: "Three nights is enough for Kanazawa if you stay near Korinbo and treat the market as a morning stop, not a destination.",
  paragraphs: ["Everything you flagged sits inside a 25-minute walk of each other: Kenroku-en, the castle grounds, the Nagamachi samurai district and the 21st Century Museum. Hotels east of the river are cheaper but add a bus leg to every evening, and the last useful bus back is earlier than the guides suggest.", "The one real trade-off is the ryokan question. A traditional inn with a kaiseki dinner takes the whole evening and roughly doubles the nightly rate — worth one of the three nights, not all of them, which is how two of your open tabs recommend splitting it."],
  references: REFERENCES
};
const OneParagraph = Template.bind({});
OneParagraph.args = {
  heading: "Three nights is enough for Kanazawa if you stay near Korinbo and treat the market as a morning stop, not a destination.",
  paragraphs: ["Everything you flagged sits inside a 25-minute walk of each other: Kenroku-en, the castle grounds, the Nagamachi samurai district and the 21st Century Museum. Hotels east of the river are cheaper but add a bus leg to every evening, and the last useful bus back is earlier than the guides suggest."],
  references: REFERENCES
};
const NoReferences = Template.bind({});
NoReferences.args = {
  heading: "Three nights is enough for Kanazawa if you stay near Korinbo and treat the market as a morning stop, not a destination.",
  paragraphs: ["Everything you flagged sits inside a 25-minute walk of each other: Kenroku-en, the castle grounds, the Nagamachi samurai district and the 21st Century Museum. Hotels east of the river are cheaper but add a bus leg to every evening, and the last useful bus back is earlier than the guides suggest.", "The one real trade-off is the ryokan question. A traditional inn with a kaiseki dinner takes the whole evening and roughly doubles the nightly rate — worth one of the three nights, not all of them, which is how two of your open tabs recommend splitting it."],
  references: []
};

/***/ }),

/***/ 91796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AITextBlock: () => (/* binding */ AITextBlock)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_aitab_page_aitab_text_block_aitab_text_block_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9546);
/* harmony import */ var browser_components_aiwindow_ui_components_aitab_page_aitab_base_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58676);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82242);
/* harmony import */ var chrome_browser_content_aiwindow_components_smartwindow_chip_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8980);


/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



// eslint-disable-next-line import/no-unassigned-import


/** @typedef {{ favicon?: string, title?: string, href: string }} SourceLink */

/**
 * @property {string} heading - A heading for the text block section
 * @property {Array} paragraphs - Array of one or two paragraphs to be set
 * on the right side of this component
 * @property {SourceLink[]} references - Pages this report was built from.
 */
class AITextBlock extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.MozLitElement {
  static properties = {
    heading: {
      type: String
    },
    paragraphs: {
      type: Array
    },
    references: {
      type: Array
    }
  };
  constructor() {
    super();
    this.heading = "";
    this.paragraphs = [];
    this.references = [];
  }
  #renderReferences() {
    if (!this.references.length) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.nothing;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)` <div class="aitab-text-block-references">
      ${this.references.map(chip => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<smartwindow-chip
            class="aitab-text-block-chip"
            .href=${chip.href}
            .label=${chip.title || chip.href}
            .iconSrc=${chip.favicon ?? ""}
            type="source"
            openLinkEvent="AITab:OpenLink"
          ></smartwindow-chip>`)}
    </div>`;
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_aitab_page_aitab_base_css__WEBPACK_IMPORTED_MODULE_1__}"
      />
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_aitab_page_aitab_text_block_aitab_text_block_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <section class="aitab-text-block">
        <h2 class="aitab-text-block-heading aitab-heading-3">
          ${this.heading}
        </h2>
        <div class="aitab-text-block-content">
          ${this.paragraphs.map(p => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<p class="aitab-text-block-p">${p}</p>`)}
          ${this.#renderReferences()}
        </div>
      </section>
    `;
  }
}
customElements.define("aitab-text-block", AITextBlock);

/***/ })

}]);
//# sourceMappingURL=components-aitab-page-aitab-text-block-aitab-text-block-stories.03ff7587.iframe.bundle.js.map