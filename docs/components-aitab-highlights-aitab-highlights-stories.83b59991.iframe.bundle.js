"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[3543],{

/***/ 782:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   httpUrl: () => (/* binding */ httpUrl)
/* harmony export */ });
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * Returns the href parsed as an http(s) URL, or null for anything else. Hrefs
 * in a generated page can also be in-app route ids, which must not become
 * links.
 *
 * @param {string} href
 * @returns {?URL}
 */
function httpUrl(href) {
  const parsed = URL.parse(String(href ?? "").trim());
  return parsed?.protocol == "http:" || parsed?.protocol == "https:" ? parsed : null;
}

/***/ }),

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

/***/ 39894:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ai-website-chip.aded02468b26c9f67d23.css";

/***/ }),

/***/ 52602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AITabHighlights: () => (/* binding */ AITabHighlights)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_aitab_highlights_aitab_highlights_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80450);
/* harmony import */ var browser_components_aiwindow_ui_components_aitab_page_aitab_base_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58676);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82242);
/* harmony import */ var chrome_browser_content_aiwindow_modules_AITabUtils_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(782);
/* harmony import */ var chrome_browser_content_aiwindow_components_ai_website_chip_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6266);


/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




// eslint-disable-next-line import/no-unassigned-import


/** @typedef {{ favicon?: string, title?: string, href: string }} SourceLink */

/**
 * One evidence-backed statement, as described by the `HighlightItem` schema
 * in component_schema.json.
 *
 * @typedef {object} HighlightItem
 * @property {string} [eyebrow] - Short label above the statement, for example
 *   "Morning".
 * @property {string} [title] - The statement itself.
 * @property {string} [body] - The sentence of evidence behind it.
 * @property {{ items: SourceLink[] }} [sources] - Pages the evidence came
 *   from, each shown as a source chip.
 */

/**
 * @property {string} title - Optional title naming the shared theme.
 * @property {HighlightItem[]} items - The statements.
 */
class AITabHighlights extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.MozLitElement {
  static properties = {
    title: {
      type: String
    },
    items: {
      type: Array,
      attribute: false
    }
  };
  constructor() {
    super();
    this.title = "";
    this.items = [];
  }
  #renderSource(source, url) {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<ai-website-chip
      type="context-chip"
      size="small"
      .label=${source.title || url.hostname}
      .href=${url.href}
      .iconSrc=${source.favicon || `page-icon:${url.href}`}
      openLinkEvent="AITab:OpenLink"
    ></ai-website-chip>`;
  }
  #renderSources(sources) {
    const links = (sources?.items ?? []).map(source => ({
      source,
      url: (0,chrome_browser_content_aiwindow_modules_AITabUtils_mjs__WEBPACK_IMPORTED_MODULE_4__.httpUrl)(source?.href)
    })).filter(link => link.url);
    if (!links.length) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.nothing;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<div class="aitab-highlight-sources">
      ${links.map(({
      source,
      url
    }) => this.#renderSource(source, url))}
    </div>`;
  }
  #renderItem(item) {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<li class="aitab-highlight">
      <div class="aitab-highlight-statement">
        ${item.eyebrow ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<p class="aitab-eyebrow">${item.eyebrow}</p>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.nothing}
        ${item.title ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<p class="aitab-highlight-title aitab-heading-3">
              ${item.title}
            </p>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.nothing}
      </div>
      <div class="aitab-highlight-evidence">
        ${item.body ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<p class="aitab-highlight-body">${item.body}</p>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.nothing}
        ${this.#renderSources(item.sources)}
      </div>
    </li>`;
  }
  #renderList() {
    const items = (this.items ?? []).filter(Boolean);
    if (!items.length) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.nothing;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<ul
      class="aitab-highlights-list"
      aria-labelledby=${this.title ? "title" : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.nothing}
    >
      ${items.map(item => this.#renderItem(item))}
    </ul>`;
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_aitab_page_aitab_base_css__WEBPACK_IMPORTED_MODULE_1__}"
      />
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_aitab_highlights_aitab_highlights_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <section class="aitab-highlights">
        ${this.title ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<h2 id="title" class="aitab-highlights-title aitab-heading-3">
              ${this.title}
            </h2>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.nothing}
        ${this.#renderList()}
      </section>
    `;
  }
}
customElements.define("aitab-highlights", AITabHighlights);

/***/ }),

/***/ 58676:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aitab-base.dbc627139f59ef00d8b3.css";

/***/ }),

/***/ 77151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Itinerary: () => (/* binding */ Itinerary),
/* harmony export */   LongText: () => (/* binding */ LongText),
/* harmony export */   MixedOptionalParts: () => (/* binding */ MixedOptionalParts),
/* harmony export */   SingleStatement: () => (/* binding */ SingleStatement),
/* harmony export */   StatementsOnly: () => (/* binding */ StatementsOnly),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var chrome_browser_content_aiwindow_components_aitab_highlights_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52602);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


// eslint-disable-next-line import/no-unassigned-import

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/AI Window/AI Tab Highlights",
  component: "aitab-highlights",
  argTypes: {
    title: {
      control: "text"
    },
    items: {
      control: "object"
    }
  }
});
const Template = ({
  title,
  items
}) => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <aitab-highlights .title=${title} .items=${items}></aitab-highlights>
`;

// page-icon: is not reachable from Storybook, so the sources carry favicons.
const EXPEDIA = {
  title: "Expedia",
  href: "https://www.expedia.com/Niijima-Island.d6055565.Destination-Travel-Guides",
  favicon: "chrome://branding/content/about-logo.svg"
};
const TRIPADVISOR = {
  title: "Trip Advisor",
  href: "https://www.tripadvisor.com/Attraction_Review-Habushiura-Beach",
  favicon: "chrome://branding/content/icon16.png"
};
const YUNOHAMA = {
  title: "Yunohama Onsen",
  href: "https://www.yunohamaonsen.com/en/",
  favicon: "chrome://global/skin/icons/defaultFavicon.svg"
};
const ITINERARY = [{
  eyebrow: "Morning",
  title: "Habushiura beach",
  body: "6.5 to 7-kilometer-long white sand and turquoise water coastline famous for surfing, dramatic cliffs, and clear emerald-green waters.",
  sources: {
    items: [EXPEDIA]
  }
}, {
  eyebrow: "Afternoon",
  title: "Yunohama Onsen",
  body: "A historic coastal hot spring resort in Tsuruoka City, Yamagata Prefecture, featuring mineral-rich chloride waters, panoramic views of the Sea of Japan, and status as one of Japan's top sunset locations.",
  sources: {
    items: [YUNOHAMA, EXPEDIA]
  }
}, {
  eyebrow: "Evening",
  title: "Overnight ferry",
  body: "Departs from Takeshiba Pier in Tokyo, takes about 8.5 to 9 hours, and is operated by Tokai Kisen.",
  sources: {
    items: [TRIPADVISOR]
  }
}];
const Itinerary = Template.bind({});
Itinerary.args = {
  title: "A day on Niijima",
  items: ITINERARY
};
const StatementsOnly = Template.bind({});
StatementsOnly.args = {
  title: "",
  items: [{
    title: "The deadline is the whole ballgame",
    body: "The contract makes time of the essence, so missing the completion date is a breach on its own, whatever the reason for the delay."
  }, {
    title: "Returning the deposit does not undo the breach",
    body: "Refunding the deposit settles the money already paid but leaves the buyer's claim for losses caused by the late completion untouched."
  }, {
    title: "Notice has to be in writing",
    body: "Both parties agreed that a notice to complete is only effective once it has been served in writing on the other side's solicitor."
  }]
};
const SingleStatement = Template.bind({});
SingleStatement.args = {
  title: "",
  items: [{
    title: "General watering rule",
    body: "Most houseplants prefer the top 2 to 3 cm of soil to dry out between waterings. Overwatering is the top killer; yellow leaves are a common sign of too much water."
  }]
};
const MixedOptionalParts = Template.bind({});
MixedOptionalParts.args = {
  title: "What the sources agree on",
  items: [{
    eyebrow: "Sizing",
    title: "A 1940s house usually needs a 3 to 4 ton unit",
    body: "Every calculator the sources link to lands in this range once the attic is insulated.",
    sources: {
      items: [EXPEDIA, TRIPADVISOR, YUNOHAMA]
    }
  }, {
    title: "Cold-climate models hold their output to around -25 C",
    body: "Manufacturer spec sheets list the rated capacity at -25 C, and the two owner forums report the same in practice."
  }, {
    eyebrow: "Rebates",
    body: "Federal and utility rebates stack, but only one of the three installers quoted them up front.",
    sources: {
      items: [YUNOHAMA]
    }
  }, {
    title: "Ductwork is the hidden cost"
  }]
};
const LongText = Template.bind({});
LongText.args = {
  title: "A title long enough to wrap onto a second line inside the rounded card",
  items: [{
    eyebrow: "An eyebrow that is far longer than an eyebrow ought to be",
    title: "Supercalifragilisticexpialidocious-unbrokenstatementthatmustwrapsomewhere",
    body: "The evidence column keeps its share of the width however long the statement beside it grows, and this sentence keeps going so that it wraps onto several lines of its own to prove the point.",
    sources: {
      items: [{
        title: "A source whose title runs well past the chip's width",
        href: "https://www.example.com/a/very/long/path",
        favicon: "chrome://global/skin/icons/defaultFavicon.svg"
      }, EXPEDIA]
    }
  }, {
    title: "Short",
    body: "Short."
  }]
};

/***/ }),

/***/ 80450:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aitab-highlights.2adcabf757546bf9ba04.css";

/***/ })

}]);
//# sourceMappingURL=components-aitab-highlights-aitab-highlights-stories.83b59991.iframe.bundle.js.map