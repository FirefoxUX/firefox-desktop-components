"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[439],{

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

/***/ 14530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AITabTable: () => (/* binding */ AITabTable)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_aitab_table_aitab_table_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17758);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);
/* harmony import */ var chrome_browser_content_aiwindow_modules_AITabUtils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(782);
/* harmony import */ var chrome_browser_content_aiwindow_components_ai_website_chip_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6266);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




// eslint-disable-next-line import/no-unassigned-import


/**
 * A column of the table, as described by the RankedTable `Field` schema in
 * component_schema.json.
 *
 * @typedef {object} Field
 * @property {string} key - Property read from each row object.
 * @property {string} [label] - Column heading; falls back to `key`.
 * @property {"text"|"number"|"currency"|"rating"|"date"} type - How the value
 *   is formatted.
 * @property {"title"|"subtitle"|"detail"} [role] - Where the value renders:
 *   title and subtitle share the first column, detail gets its own column.
 * @property {string} [prefix] - Text put before every value.
 * @property {string} [suffix] - Text put after every value.
 * @property {number} [max] - Denominator for `rating`.
 * @property {string} [currency] - ISO 4217 code for `currency`.
 */

const DATE_ONLY = /^\d{4}-\d{2}-\d{2}$/;
const ISO_DATE_TIME = /^\d{4}-\d{2}-\d{2}T/;
const formatters = new Map();

/**
 * @param {string} key
 * @param {Function} create
 * @returns {Intl.NumberFormat|Intl.DateTimeFormat}
 */
function formatter(key, create) {
  let instance = formatters.get(key);
  if (!instance) {
    instance = create();
    formatters.set(key, instance);
  }
  return instance;
}
function numberFormatter() {
  return formatter("number", () => new Intl.NumberFormat());
}
function ratingFormatter() {
  return formatter("rating", () => new Intl.NumberFormat(undefined, {
    maximumFractionDigits: 1
  }));
}
function currencyFormatter(currency) {
  return formatter(`currency:${currency}`, () => new Intl.NumberFormat(undefined, {
    style: "currency",
    currency,
    trailingZeroDisplay: "stripIfInteger"
  }));
}
function dateFormatter(timeZone) {
  return formatter(`date:${timeZone ?? ""}`, () => new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeZone
  }));
}

/**
 * Formats a row's value for one column. Only machine-typed values are
 * formatted: numbers, and dates written as ISO 8601. A value the model already
 * wrote out as text, in whatever language and notation, is shown as it is.
 *
 * @param {Field} field
 * @param {object} row
 * @returns {string|import("lit").TemplateResult}
 */
function formatValue(field, row) {
  const value = row?.[field.key];
  if (value == null || value === "") {
    return "";
  }
  const prefix = field.prefix ?? "";
  const suffix = field.suffix ?? "";
  const isNumber = typeof value == "number" && Number.isFinite(value);
  switch (field.type) {
    case "number":
      {
        const text = isNumber ? numberFormatter().format(value) : value;
        return `${prefix}${text}${suffix}`;
      }
    case "currency":
      {
        if (!isNumber) {
          return `${prefix}${value}${suffix}`;
        }
        let text;
        try {
          text = currencyFormatter(field.currency ?? "USD").format(value);
        } catch {
          // The model gave a currency code Intl does not know.
          text = numberFormatter().format(value);
        }
        return `${prefix}${text}${suffix}`;
      }
    case "rating":
      {
        if (!isNumber) {
          return `${prefix}${value}${suffix}`;
        }
        const args = JSON.stringify({
          value: ratingFormatter().format(value),
          max: numberFormatter().format(field.max ?? 5)
        });
        return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`${prefix}<span
          data-l10n-id="ai-tab-table-rating"
          data-l10n-args=${args}
        ></span
        >${suffix}`;
      }
    case "date":
      {
        const isoDate = typeof value == "string" && (DATE_ONLY.test(value) || ISO_DATE_TIME.test(value));
        const date = isoDate ? new Date(value) : null;
        if (!date || Number.isNaN(date.valueOf())) {
          return `${prefix}${value}${suffix}`;
        }
        const timeZone = DATE_ONLY.test(value) ? "UTC" : undefined;
        return `${prefix}${dateFormatter(timeZone).format(date)}${suffix}`;
      }
    default:
      return `${prefix}${value}${suffix}`;
  }
}

/**
 * Compares a small set of items across a few text attributes: a header row of
 * column labels and one row per item, whose name leads the row and can carry
 * a chip naming the site the item came from.
 *
 * @property {string} heading - Short title above the table.
 * @property {string} description - Optional one-sentence subtitle.
 * @property {Field[]} columns - Column definitions.
 * @property {object[]} rows - One object per item, keyed by the column keys.
 *   An optional `href` is the page the item came from, rendered as a source
 *   chip in the name cell.
 */
class AITabTable extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    heading: {
      type: String
    },
    description: {
      type: String
    },
    columns: {
      type: Array,
      attribute: false
    },
    rows: {
      type: Array,
      attribute: false
    }
  };
  constructor() {
    super();
    this.heading = "";
    this.description = "";
    this.columns = [];
    this.rows = [];
  }

  /**
   * Splits the columns by where they render. The first column that is not a
   * subtitle stands in as the title when no column claims that role.
   *
   * @returns {{title: ?Field, subtitles: Field[], details: Field[]}}
   */
  get #columnsByRole() {
    const title = this.columns.find(field => field.role == "title") ?? this.columns.find(field => field.role != "subtitle");
    const subtitles = this.columns.filter(field => field.role == "subtitle");
    const details = this.columns.filter(field => field !== title && field.role != "subtitle");
    return {
      title,
      subtitles,
      details
    };
  }
  #label(field) {
    return field.label || field.key;
  }
  #renderSourceChip(row) {
    const url = (0,chrome_browser_content_aiwindow_modules_AITabUtils_mjs__WEBPACK_IMPORTED_MODULE_3__.httpUrl)(row?.href);
    if (!url) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<ai-website-chip
      class="aitab-table-source"
      type="context-chip"
      size="small"
      .label=${url.hostname}
      .href=${url.href}
      .iconSrc=${`page-icon:${url.href}`}
      openLinkEvent="AITab:OpenLink"
    ></ai-website-chip>`;
  }
  #renderRow(row, {
    title,
    subtitles,
    details
  }) {
    const subtitleValues = subtitles.map(field => formatValue(field, row)).filter(Boolean);
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<tr>
      <th scope="row">
        <div class="aitab-table-name-cell">
          <span class="aitab-table-name">${formatValue(title, row)}</span>
          ${subtitleValues.map(text => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span class="aitab-table-subtitle">${text}</span>`)}
          ${this.#renderSourceChip(row)}
        </div>
      </th>
      ${details.map(field => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<td>${formatValue(field, row)}</td>`)}
    </tr>`;
  }
  render() {
    const {
      title,
      subtitles,
      details
    } = this.#columnsByRole;
    if (!title) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_aitab_table_aitab_table_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <section class="aitab-table">
        ${this.heading ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<h2 id="heading" class="aitab-table-heading">
              ${this.heading}
            </h2>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
        ${this.description ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<p class="aitab-table-description">${this.description}</p>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
        <table
          aria-labelledby=${this.heading ? "heading" : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
          data-details=${details.length}
        >
          <colgroup>
            <col class="aitab-table-name-col" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">${this.#label(title)}</th>
              ${details.map(field => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<th scope="col">${this.#label(field)}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${this.rows.map(row => this.#renderRow(row, {
      title,
      subtitles,
      details
    }))}
          </tbody>
        </table>
      </section>
    `;
  }
}
customElements.define("aitab-table", AITabTable);

/***/ }),

/***/ 17758:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aitab-table.4570811fe090837e7e77.css";

/***/ }),

/***/ 39894:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ai-website-chip.aded02468b26c9f67d23.css";

/***/ }),

/***/ 90551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LongText: () => (/* binding */ LongText),
/* harmony export */   SixColumns: () => (/* binding */ SixColumns),
/* harmony export */   TwoColumns: () => (/* binding */ TwoColumns),
/* harmony export */   WhereToStay: () => (/* binding */ WhereToStay),
/* harmony export */   WithSubtitle: () => (/* binding */ WithSubtitle),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var chrome_browser_content_aiwindow_components_aitab_table_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14530);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


// eslint-disable-next-line import/no-unassigned-import

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/AI Window/AITab Table",
  component: "aitab-table",
  argTypes: {
    heading: {
      control: "text"
    },
    description: {
      control: "text"
    },
    columns: {
      control: "object"
    },
    rows: {
      control: "object"
    }
  },
  parameters: {
    fluent: `
ai-tab-table-rating = { $value } / { $max }
    `
  }
});
const Template = ({
  heading,
  description,
  columns,
  rows
}) => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <aitab-table
    .heading=${heading}
    .description=${description}
    .columns=${columns}
    .rows=${rows}
  ></aitab-table>
`;
const STAY_COLUMNS = [{
  key: "name",
  label: "Name",
  type: "text",
  role: "title"
}, {
  key: "price",
  label: "Price",
  type: "currency",
  currency: "USD",
  suffix: " / night"
}, {
  key: "rating",
  label: "Rating",
  type: "rating",
  max: 5
}, {
  key: "reviews",
  label: "Reviews",
  type: "number"
}];
const STAY_ROWS = [{
  name: "Nijima Escape",
  price: 109,
  rating: 3.9,
  reviews: 520,
  href: "https://www.booking.com/hotel/jp/nijima-escape.html"
}, {
  name: "Yado Marubun",
  price: 215,
  rating: 4.9,
  reviews: 3124,
  href: "https://www.tripadvisor.com/Hotel_Review-yado-marubun"
}, {
  name: "Kegetsutei Ryokan",
  price: 225,
  rating: 4.5,
  reviews: 1441,
  href: "https://www.japanican.com/en/hotel/detail/kegetsutei"
}, {
  name: "Hotel Kanazawa Korinbo Annex",
  price: 168,
  rating: 4.2,
  reviews: 886,
  href: "https://www.hotels.com/ho/kanazawa-korinbo-annex"
}, {
  name: "Higashiyama Machiya (whole house)",
  price: 142,
  rating: 4.8,
  reviews: 97,
  href: "https://www.airbnb.com/rooms/higashiyama-machiya"
}];
const WhereToStay = Template.bind({});
WhereToStay.args = {
  heading: "Where to stay",
  description: "Five options gathered from your open tabs",
  columns: STAY_COLUMNS,
  rows: STAY_ROWS
};
const WithSubtitle = Template.bind({});
WithSubtitle.args = {
  heading: "Where to stay",
  description: "Neighbourhood shown under each name",
  columns: [STAY_COLUMNS[0], {
    key: "area",
    type: "text",
    role: "subtitle"
  }, ...STAY_COLUMNS.slice(1)],
  rows: STAY_ROWS.map((row, index) => ({
    ...row,
    area: ["Higashiyama", "Nagamachi", "Kenrokuen", "Korinbo", "Higashiyama"][index]
  }))
};
const TwoColumns = Template.bind({});
TwoColumns.args = {
  heading: "Installer quotes",
  columns: [{
    key: "name",
    label: "Installer",
    type: "text",
    role: "title"
  }, {
    key: "price",
    label: "Quote",
    type: "currency"
  }],
  rows: [{
    name: "Bright Build",
    price: 31200,
    href: "https://brightbuild.example"
  }, {
    name: "Sunward Solar",
    price: 28950
  }, {
    name: "Northfield Energy",
    price: 33475.5
  }]
};
const SixColumns = Template.bind({});
SixColumns.args = {
  heading: "Laptops under $1,500",
  description: "Six attributes stretch the layout to its widest",
  columns: [{
    key: "name",
    label: "Model",
    type: "text",
    role: "title"
  }, {
    key: "price",
    label: "Price",
    type: "currency"
  }, {
    key: "weight",
    label: "Weight",
    type: "number",
    suffix: " kg"
  }, {
    key: "battery",
    label: "Battery",
    type: "number",
    suffix: " h"
  }, {
    key: "rating",
    label: "Rating",
    type: "rating",
    max: 10
  }, {
    key: "released",
    label: "Released",
    type: "date"
  }],
  rows: [{
    name: "Framework Laptop 13",
    price: 1049,
    weight: 1.3,
    battery: 11,
    rating: 8.5,
    released: "2025-08-12",
    href: "https://frame.work/products/laptop13"
  }, {
    name: "ThinkPad X1 Carbon Gen 13",
    price: 1449,
    weight: 0.99,
    battery: 14,
    rating: 9.1,
    released: "2025-03-04",
    href: "https://www.lenovo.com/thinkpad-x1-carbon"
  }]
};
const LongText = Template.bind({});
LongText.args = {
  heading: "Long values wrap inside their column",
  columns: [{
    key: "name",
    label: "Name",
    type: "text",
    role: "title"
  }, {
    key: "notes",
    label: "Notes",
    type: "text"
  }, {
    key: "price",
    label: "Price",
    type: "currency"
  }],
  rows: [{
    name: "The Grand Continental Riverside Hotel and Conference Centre at Harbourfront Quay",
    notes: "Breakfast included, late checkout on request, free cancellation up to 48 hours before arrival, pets allowed on the ground floor only.",
    price: 289,
    href: "https://www.example.com/grand-continental"
  }, {
    name: "Pod",
    notes: "Supercalifragilisticexpialidocious-unbrokenwordthatmustwrapsomewhere",
    price: 45
  }]
};

/***/ })

}]);
//# sourceMappingURL=components-aitab-table-aitab-table-stories.998a4fa8.iframe.bundle.js.map