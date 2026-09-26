"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[4421],{

/***/ 6266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AIWebsiteChip: () => (/* binding */ AIWebsiteChip)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_ai_website_chip_ai_website_chip_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39894);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * A website chip component for tagging and displaying websites.
 *
 * Two types:
 * - in-line: Supports empty state with "@" symbol + "Tag a tab or site" placeholder
 *   - default: favicon + text
 *   - hover: favicon + text (identical to default)
 *   - empty: "@" symbol + "Tag a tab or site" text
 * - context-chip: No empty state support
 *   - default: favicon + text
 *   - hover (removable): remove button + text
 *   - hover (non-removable): favicon + text (identical to default)
 *
 * @property {string} type - Type of chip: "in-line" or "context-chip"
 * @property {"default" | "small"} size - Chip size
 * @property {string} label - The text content of the chip
 * @property {string} iconSrc - Favicon or icon URL
 * @property {string} href - URL for the link (used with context-chip type)
 * @property {boolean} removable - Whether the chip shows a remove button on hover (default false)
 * @property {string} itemRole - ARIA role for the inner element
 * @property {string} openLinkEvent - Event dispatched when a linked chip is
 *   clicked. Each host opens links itself, so it names the event it listens for.
 */
class AIWebsiteChip extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
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
    size: {
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
    removable: {
      type: Boolean
    },
    itemRole: {
      type: String
    },
    // Each host opens links itself, so it names the event it listens for.
    openLinkEvent: {
      type: String
    }
  };
  #parentHost = null;
  constructor() {
    super();
    this.type = "in-line";
    this.size = "default";
    this.label = "";
    this.iconSrc = "";
    this.href = "";
    this.removable = false;
    this.itemRole = "";
    this.openLinkEvent = "AIChatContent:OpenLink";
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
      this.#parentHost.dispatchEvent(new CustomEvent("ai-website-chip:disconnected", {
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
  get #isEmpty() {
    return this.type === "in-line" && !this.label;
  }
  get #isRemovable() {
    return this.removable;
  }
  #handleClick() {
    this.dispatchEvent(new CustomEvent("ai-website-chip:click", {
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
    this.dispatchEvent(new CustomEvent("ai-website-chip:remove", {
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
  render() {
    const isEmpty = this.#isEmpty;
    const isRemovable = this.#isRemovable;
    let iconTemplate;
    if (isEmpty) {
      iconTemplate = (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span class="chip-at">@</span>`;
    } else {
      iconTemplate = (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<img
        class="chip-icon"
        src=${this.iconSrc || "chrome://global/skin/icons/defaultFavicon.svg"}
        @error=${e => {
        e.target.src = "chrome://global/skin/icons/defaultFavicon.svg";
      }}
        alt=""
      />`;
    }
    const removeButton = isRemovable ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<button
          class="chip-remove"
          @click=${this.#handleRemove}
          data-l10n-id="aiwindow-website-chip-remove-button"
        >
          <img
            class="chip-remove-icon"
            src="chrome://global/skin/icons/close.svg"
            alt=""
          />
        </button>` : null;
    const labelTemplate = isEmpty ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span
          class="chip-label"
          data-l10n-id="aiwindow-website-chip-placeholder"
        ></span>` : (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span class="chip-label">${this.label}</span>`;
    const chipContent = (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      ${iconTemplate} ${removeButton} ${labelTemplate}
    `;
    const chipElement = this.href ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<a
          class="chip"
          part="chip"
          role=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.itemRole || undefined)}
          ?data-removable=${isRemovable}
          href=${this.href}
          @click=${this.#handleAnchorClick}
        >
          ${chipContent}
        </a>` : (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<button
          class="chip"
          part="chip"
          role=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.itemRole || undefined)}
          ?data-empty=${isEmpty}
          ?data-removable=${isRemovable}
          @click=${this.#handleClick}
        >
          ${chipContent}
        </button>`;
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_ai_website_chip_ai_website_chip_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      ${chipElement}
    `;
  }
}
customElements.define("ai-website-chip", AIWebsiteChip);

/***/ }),

/***/ 9546:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aitab-text-block.5f0fe6857b9997643c8e.css";

/***/ }),

/***/ 39894:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ai-website-chip.aded02468b26c9f67d23.css";

/***/ }),

/***/ 58676:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aitab-base.0f3340e03163a5b2378f.css";

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
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */


// eslint-disable-next-line import/no-unassigned-import

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/AI Window/AI Tab Text Block",
  component: "aitab-text-block",
  // The type scale queries a container that aitab-page normally provides.
  // Without it the headings stay at their narrow sizes at every width.
  decorators: [story => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<div style="container: aitab-page / inline-size;">${story()}</div>`],
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
/* harmony import */ var chrome_browser_content_aiwindow_components_ai_website_chip_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6266);


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
      ${this.references.map(chip => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<ai-website-chip
            class="aitab-text-block-chip"
            .href=${chip.href}
            .label=${chip.title || chip.href}
            .iconSrc=${chip.favicon ?? ""}
            type="context-chip"
            size="small"
            openLinkEvent="AITab:OpenLink"
          ></ai-website-chip>`)}
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
//# sourceMappingURL=components-aitab-page-aitab-text-block-aitab-text-block-stories.17eb6c85.iframe.bundle.js.map