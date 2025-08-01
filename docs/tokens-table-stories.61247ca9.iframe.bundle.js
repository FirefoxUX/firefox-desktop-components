"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[3746],{

/***/ 36185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11540);
/* harmony import */ var _tokens_storybook_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44587);
/* harmony import */ var _tokens_table_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86724);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Docs/Tokens Table",
  parameters: {
    options: {
      showPanel: false
    }
  }
});
const HCM_MAP = {
  ActiveText: "#8080FF",
  ButtonBorder: "#000000",
  ButtonFace: "#000000",
  ButtonText: "#FFEE32",
  Canvas: "#000000",
  CanvasText: "#ffffff",
  Field: "#000000",
  FieldText: "#ffffff",
  GrayText: "#A6A6A6",
  Highlight: "#D6B4FD",
  HighlightText: "#2B2B2B",
  LinkText: "#8080FF",
  Mark: "#000000",
  MarkText: "#000000",
  SelectedItem: "#D6B4FD",
  SelectedItemText: "#2B2B2B",
  AccentColor: "AccentColor",
  AccentColorText: "#2B2B2B",
  VisitedText: "#8080FF"
};
const THEMED_TABLES = ["background-color", "border", "box-shadow", "border-color", "opacity", "text-color", "color", "outline", "icon-color", "icon-fill", "icon-stroke", "link"];

/**
 *
 */
class TablesPage extends chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.LitElement {
  #query = "";
  static properties = {
    surface: {
      type: String,
      state: true
    },
    tokensData: {
      type: Object,
      state: true
    },
    filteredTokens: {
      type: Object,
      state: true
    },
    tableFilter: {
      type: String,
      state: true
    }
  };
  constructor() {
    super();
    this.surface = "brand";
    this.tokensData = _tokens_storybook_mjs__WEBPACK_IMPORTED_MODULE_1__.storybookTables;
  }
  handleSurfaceChange(e) {
    this.surface = e.target.value;
  }
  handleInput(e) {
    this.#query = e.originalTarget.value.trim().toLowerCase();
    e.preventDefault();
    this.handleSearch();
  }
  debounce(fn, delayMs = 300) {
    let timeout;
    return function () {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        fn.apply(this, arguments);
      }, delayMs);
    };
  }
  handleSearch() {
    // Clear filteredTokens to show all data.
    if (!this.#query) {
      this.filteredTokens = null;
    }
    let filteredTokens = Object.entries(this.tokensData).reduce((acc, [key, tokens]) => {
      if (key.includes(this.#query)) {
        return {
          ...acc,
          [key]: tokens
        };
      }
      let filteredItems = tokens.filter(({
        name: tokenName,
        value
      }) => this.filterTokens(this.#query, tokenName, value));
      if (filteredItems.length) {
        return {
          ...acc,
          [key]: filteredItems
        };
      }
      return acc;
    }, {});
    this.filteredTokens = filteredTokens;
  }
  filterTokens(searchTerm, tokenName, tokenVal) {
    if (tokenName.includes(searchTerm) || typeof tokenVal == "string" && tokenVal.includes(searchTerm)) {
      return true;
    }
    if (typeof tokenVal == "object") {
      return Object.entries(tokenVal).some(([key, val]) => this.filterTokens(searchTerm, key, val));
    }
    return false;
  }
  handleClearSearch(e) {
    this.#query = "";
    e.preventDefault();
    this.handleSearch();
  }
  handleTableFilterClick(e) {
    if (!e.target.dataset.filter) {
      this.tableFilter = "";
    }
    this.tableFilter = e.target.dataset.filter;
  }
  render() {
    if (!this.tokensData) {
      return "";
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
      <link rel="stylesheet" href=${_tokens_table_css__WEBPACK_IMPORTED_MODULE_2__} />
      <div class="page-wrapper">
        <div class="filters-wrapper">
          <div class="top-filters">
            <div class="search-wrapper">
              <div class="search-icon"></div>
              <input
                type="search"
                placeholder="Filter tokens"
                @input=${this.debounce(this.handleInput)}
                .value=${this.#query}
              />
              <div
                class="clear-icon"
                role="button"
                title="Clear"
                ?hidden=${!this.#query}
                @click=${this.handleClearSearch}
              ></div>
            </div>
            <fieldset id="surface" @change=${this.handleSurfaceChange}>
              <label>
                <input
                  type="radio"
                  name="surface"
                  value="brand"
                  ?checked=${this.surface == "brand"}
                />
                In-content
              </label>
              <label>
                <input
                  type="radio"
                  name="surface"
                  value="platform"
                  ?checked=${this.surface == "platform"}
                />
                Chrome
              </label>
            </fieldset>
          </div>
          <div class="table-filter" @click=${this.handleTableFilterClick}>
            <moz-button type=${!this.tableFilter ? "primary" : "default"}>
              All tokens
            </moz-button>
            ${Object.keys(_tokens_storybook_mjs__WEBPACK_IMPORTED_MODULE_1__.storybookTables).map(table => {
      return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<moz-button
                type=${this.tableFilter == table ? "primary" : "default"}
                data-filter=${table}
              >
                ${table.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
              </moz-button>`;
    })}
          </div>
        </div>
        <div class="tables-wrapper">
          ${Object.entries(this.filteredTokens ?? this.tokensData).map(([tableName, tableEntries]) => {
      if (this.tableFilter && tableName !== this.tableFilter) {
        return "";
      }
      return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
                <tokens-table
                  name=${tableName}
                  surface=${this.surface}
                  .tokens=${tableEntries}
                >
                </tokens-table>
              `;
    })}
        </div>
      </div>
    `;
  }
}
customElements.define("tables-page", TablesPage);

/**
 *
 */
class TokensTable extends chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.LitElement {
  TEMPLATES = {
    "font-size": this.fontTemplate,
    "font-weight": this.fontTemplate,
    "icon-color": this.iconTemplate,
    "icon-fill": this.iconTemplate,
    "icon-size": this.iconTemplate,
    "icon-stroke": this.iconTemplate,
    link: this.linkTemplate,
    margin: this.spaceAndSizeTemplate,
    "min-height": this.spaceAndSizeTemplate,
    outline: this.outlineTemplate,
    padding: this.paddingTemplate,
    "box-shadow": this.shadowTemplate,
    size: this.spaceAndSizeTemplate,
    space: this.spaceAndSizeTemplate,
    "text-color": this.fontTemplate
  };
  static properties = {
    name: {
      type: String
    },
    tokens: {
      type: Array
    },
    surface: {
      type: String
    }
  };
  createRenderRoot() {
    return this;
  }
  getDisplayValues(theme, token) {
    let value = this.getResolvedValue(theme, token);
    let raw = this.getRawValue(theme, value);
    return {
      value,
      ...(raw !== value && {
        raw
      })
    };
  }

  // Return the value with variable references.
  // e.g. var(--color-white)
  getResolvedValue(theme, token) {
    if (typeof token == "string" || typeof token == "number") {
      return token;
    }
    if (theme == "hcm") {
      return token.forcedColors || token.prefersContrast || token[this.surface]?.default || token.default;
    }
    if (token[this.surface]) {
      return this.getResolvedValue(theme, token[this.surface]);
    }
    if (token[theme]) {
      return token[theme];
    }
    return token.default;
  }

  // Return the value with any variables replaced by what they represent.
  // e.g. #ffffff
  getRawValue(theme, token) {
    let cssRegex = /(?<var>var\(--(?<lookupKey>[a-z-0-9,\s]+)\))/;
    let matches = cssRegex.exec(token);
    if (matches) {
      let variableValue = _tokens_storybook_mjs__WEBPACK_IMPORTED_MODULE_1__.variableLookupTable[matches.groups?.lookupKey];
      if (typeof variableValue == "undefined") {
        return token;
      }
      if (typeof variableValue == "object") {
        variableValue = this.getResolvedValue(theme, variableValue);
      }
      let rawValue = token.replace(matches.groups?.var, variableValue);
      if (rawValue.match(cssRegex)) {
        return this.getRawValue(theme, rawValue);
      }
      return rawValue;
    }
    return token;
  }
  getTemplate(value, tokenName, category = this.name) {
    // 0 is a valid value
    if (value == undefined) {
      return "N/A";
    }
    if (category.match("box-shadow") && tokenName.startsWith("--box-shadow-color")) {
      category = "color";
    }
    let templateFn = this.TEMPLATES[category]?.bind(this);
    if (templateFn) {
      return templateFn(category, value, tokenName);
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
      <div
        class="default-preview"
        style="${this.getDisplayProperty(category)}: ${HCM_MAP[value] ?? value}"
      ></div>
    `;
  }
  outlineTemplate(_, value, tokenName) {
    let property = tokenName.replaceAll(/--|focus-|-error/g, "");
    if (property == "outline-inset") {
      property = "outline-offset";
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
      <div
        class="outline-preview"
        style="${property}: ${HCM_MAP[value] ?? value};"
      ></div>
    `;
  }
  fontTemplate(category, value) {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
      <div class="text-wrapper">
        <p
          style="${this.getDisplayProperty(category)}: ${HCM_MAP[value] ?? value};"
        >
          The quick brown fox jumps over the lazy dog
        </p>
      </div>
    `;
  }
  iconTemplate(_, value, tokenName) {
    const pattern = /color|fill|stroke/;
    let property = pattern.test(tokenName) ? "background-color" : "height";
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
      <div
        class="icon-preview"
        style="${property}: ${HCM_MAP[value] ?? value};"
      ></div>
    `;
  }
  linkTemplate(_, value, tokenName) {
    let hasOutline = tokenName.includes("outline");
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
      <a
        class=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.classMap)({
      "link-preview": true,
      outline: hasOutline
    })}
        style="color: ${HCM_MAP[value] ?? value};"
      >
        Click me!
      </a>
    `;
  }
  spaceAndSizeTemplate(_, value, tokenName) {
    if (tokenName.includes("page-main")) {
      return "";
    }
    let isSize = tokenName.includes("size") || tokenName.includes("height");
    let items = isSize ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
          <div class="item" style="height: ${value};width: ${value};"></div>
        ` : (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
          <div class="item"></div>
          <div class="item"></div>
        `;
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
      <div
        class="space-size-preview space-size-background"
        style="gap: ${value};"
      >
        ${items}
      </div>
    `;
  }
  paddingTemplate(_, value) {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
      <div class="space-size-background">
        <div class="padding-item outer" style="padding: ${value}">
          <div class="padding-item inner"></div>
        </div>
      </div>
    `;
  }
  shadowTemplate(_, value) {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
      <div
        class="shadow-preview"
        style="box-shadow: ${HCM_MAP[value] ?? value};"
      ></div>
    `;
  }
  getDisplayProperty(category) {
    switch (category) {
      case "attention-dot":
      case "color":
      case "box-shadow":
        return "background-color";
      case "text-color":
        return "color";
      default:
        return category.replace("button", "");
    }
  }
  cellTemplate(type, tokenValue, tokenName) {
    let {
      value,
      raw
    } = this.getDisplayValues("default", tokenValue);
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
      <td>
        <div class="preview-wrapper">
          ${type == "preview" ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`${this.getTemplate(raw ?? value, tokenName)}` : (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<p class="value">${value}</p>
                ${raw ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<p class="value">${raw}</p>` : ""}`}
        </div>
      </td>
    `;
  }
  themeCellTemplate(theme, tokenValue, tokenName) {
    let {
      value,
      raw
    } = this.getDisplayValues(theme, tokenValue);
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
      <td class="${theme}-theme">
        <div class="preview-wrapper">
          ${this.getTemplate(raw ?? value, tokenName)}
          <p class="value">${value}</p>
          ${raw ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<p class="value">${raw}</p>` : ""}
        </div>
      </td>
    `;
  }
  render() {
    let themedTable = THEMED_TABLES.includes(this.name);
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
      <details class="table-wrapper" open="">
        <summary class="table-heading">
          <h3>${this.name}</h3>
        </summary>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              ${themedTable ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
                    <th>Light</th>
                    <th>Dark</th>
                    <th>High contrast</th>
                  ` : (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
                    <th>Value</th>
                    <th>Preview</th>
                  `}
            </tr>
          </thead>
          <tbody>
            ${this.tokens.map(({
      name: tokenName,
      value
    }) => {
      return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<tr id=${tokenName}>
                <td>${tokenName}</td>
                ${themedTable ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
                      ${this.themeCellTemplate("light", value, tokenName)}
                      ${this.themeCellTemplate("dark", value, tokenName)}
                      ${this.themeCellTemplate("hcm", value, tokenName)}
                    ` : (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
                      ${this.cellTemplate("value", value, tokenName)}
                      ${this.cellTemplate("preview", value, tokenName)}
                    `}
              </tr>`;
    })}
          </tbody>
        </table>
      </details>
    `;
  }
}
customElements.define("tokens-table", TokensTable);
const Default = () => {
  return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<tables-page></tables-page>`;
};

/***/ }),

/***/ 44587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   storybookTables: () => (/* binding */ storybookTables),
/* harmony export */   variableLookupTable: () => (/* binding */ variableLookupTable)
/* harmony export */ });
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* DO NOT EDIT this file directly, instead modify design-tokens.json
 * and run `npm run build` to see your changes. */

const storybookTables = {
  color: [{
    value: {
      platform: {
        default: "AccentColor"
      },
      brand: {
        light: "#2ac3a2",
        dark: "#54ffbd",
        default: "light-dark(#2ac3a2, #54ffbd)"
      },
      prefersContrast: "AccentColor"
    },
    name: "--attention-dot-color"
  }, {
    value: "#f0f0f4",
    name: "--color-gray-20"
  }, {
    value: "#bac2ca",
    name: "--color-gray-30"
  }, {
    value: "#bfbfc9",
    name: "--color-gray-50"
  }, {
    value: "#8f8f9d",
    name: "--color-gray-60"
  }, {
    value: "#5b5b66",
    name: "--color-gray-70"
  }, {
    value: "#23222b",
    name: "--color-gray-80"
  }, {
    value: "#1c1b22",
    name: "--color-gray-90"
  }, {
    value: "#15141a",
    name: "--color-gray-100"
  }, {
    value: "#fbfbfe",
    name: "--color-gray-05"
  }, {
    value: "oklch(97% 0.05 15)",
    name: "--color-red-0"
  }, {
    value: "oklch(90% 0.1 15)",
    name: "--color-red-10"
  }, {
    value: "oklch(83% 0.14 15)",
    name: "--color-red-20"
  }, {
    value: "oklch(76% 0.17 15)",
    name: "--color-red-30"
  }, {
    value: "oklch(69% 0.19 15)",
    name: "--color-red-40"
  }, {
    value: "oklch(62% 0.21 15)",
    name: "--color-red-50"
  }, {
    value: "oklch(55% 0.21 15)",
    name: "--color-red-60"
  }, {
    value: "oklch(48% 0.2 15)",
    name: "--color-red-70"
  }, {
    value: "oklch(41% 0.17 15)",
    name: "--color-red-80"
  }, {
    value: "oklch(34% 0.14 15)",
    name: "--color-red-90"
  }, {
    value: "oklch(27% 0.1 15)",
    name: "--color-red-100"
  }, {
    value: "oklch(20% 0.05 15)",
    name: "--color-red-110"
  }, {
    value: "oklch(97% 0.05 50)",
    name: "--color-orange-0"
  }, {
    value: "oklch(90% 0.10 50)",
    name: "--color-orange-10"
  }, {
    value: "oklch(86% 0.14 50)",
    name: "--color-orange-20"
  }, {
    value: "oklch(79% 0.17 50)",
    name: "--color-orange-30"
  }, {
    value: "oklch(72% 0.19 50)",
    name: "--color-orange-40"
  }, {
    value: "oklch(65% 0.21 50)",
    name: "--color-orange-50"
  }, {
    value: "oklch(58% 0.21 50)",
    name: "--color-orange-60"
  }, {
    value: "oklch(48% 0.20 50)",
    name: "--color-orange-70"
  }, {
    value: "oklch(41% 0.17 50)",
    name: "--color-orange-80"
  }, {
    value: "oklch(34% 0.14 50)",
    name: "--color-orange-90"
  }, {
    value: "oklch(27% 0.10 50)",
    name: "--color-orange-100"
  }, {
    value: "oklch(20% 0.05 50)",
    name: "--color-orange-110"
  }, {
    value: "oklch(97% 0.05 90)",
    name: "--color-yellow-0"
  }, {
    value: "oklch(93% 0.1 90)",
    name: "--color-yellow-10"
  }, {
    value: "oklch(86% 0.14 90)",
    name: "--color-yellow-20"
  }, {
    value: "oklch(79% 0.2 90)",
    name: "--color-yellow-30"
  }, {
    value: "oklch(72% 0.22 90)",
    name: "--color-yellow-40"
  }, {
    value: "oklch(65% 0.24 90)",
    name: "--color-yellow-50"
  }, {
    value: "oklch(58% 0.24 90)",
    name: "--color-yellow-60"
  }, {
    value: "oklch(51% 0.23 90)",
    name: "--color-yellow-70"
  }, {
    value: "oklch(41% 0.2 90)",
    name: "--color-yellow-80"
  }, {
    value: "oklch(34% 0.17 90)",
    name: "--color-yellow-90"
  }, {
    value: "oklch(27% 0.13 90)",
    name: "--color-yellow-100"
  }, {
    value: "oklch(20% 0.08 90)",
    name: "--color-yellow-110"
  }, {
    value: "oklch(97% 0.05 145)",
    name: "--color-green-0"
  }, {
    value: "oklch(90% 0.1 145)",
    name: "--color-green-10"
  }, {
    value: "oklch(83% 0.14 145)",
    name: "--color-green-20"
  }, {
    value: "oklch(76% 0.17 145)",
    name: "--color-green-30"
  }, {
    value: "oklch(69% 0.19 145)",
    name: "--color-green-40"
  }, {
    value: "oklch(62% 0.21 145)",
    name: "--color-green-50"
  }, {
    value: "oklch(55% 0.21 145)",
    name: "--color-green-60"
  }, {
    value: "oklch(48% 0.2 145)",
    name: "--color-green-70"
  }, {
    value: "oklch(41% 0.17 145)",
    name: "--color-green-80"
  }, {
    value: "oklch(34% 0.14 145)",
    name: "--color-green-90"
  }, {
    value: "oklch(27% 0.1 145)",
    name: "--color-green-100"
  }, {
    value: "oklch(20% 0.05 145)",
    name: "--color-green-110"
  }, {
    value: "oklch(97% 0.05 205)",
    name: "--color-cyan-0"
  }, {
    value: "oklch(90% 0.07 205)",
    name: "--color-cyan-10"
  }, {
    value: "oklch(83% 0.11 205)",
    name: "--color-cyan-20"
  }, {
    value: "oklch(76% 0.14 205)",
    name: "--color-cyan-30"
  }, {
    value: "oklch(69% 0.19 205)",
    name: "--color-cyan-40"
  }, {
    value: "oklch(62% 0.21 205)",
    name: "--color-cyan-50"
  }, {
    value: "oklch(55% 0.21 205)",
    name: "--color-cyan-60"
  }, {
    value: "oklch(48% 0.2 205)",
    name: "--color-cyan-70"
  }, {
    value: "oklch(41% 0.17 205)",
    name: "--color-cyan-80"
  }, {
    value: "oklch(34% 0.14 205)",
    name: "--color-cyan-90"
  }, {
    value: "oklch(27% 0.1 205)",
    name: "--color-cyan-100"
  }, {
    value: "oklch(20% 0.05 205)",
    name: "--color-cyan-110"
  }, {
    value: "oklch(97% 0.05 260)",
    name: "--color-blue-0"
  }, {
    value: "oklch(90% 0.13 260)",
    name: "--color-blue-10"
  }, {
    value: "oklch(83% 0.17 260)",
    name: "--color-blue-20"
  }, {
    value: "oklch(76% 0.2 260)",
    name: "--color-blue-30"
  }, {
    value: "oklch(69% 0.22 260)",
    name: "--color-blue-40"
  }, {
    value: "oklch(62% 0.24 260)",
    name: "--color-blue-50"
  }, {
    value: "oklch(55% 0.24 260)",
    name: "--color-blue-60"
  }, {
    value: "oklch(48% 0.2 260)",
    name: "--color-blue-70"
  }, {
    value: "oklch(41% 0.17 260)",
    name: "--color-blue-80"
  }, {
    value: "oklch(34% 0.14 260)",
    name: "--color-blue-90"
  }, {
    value: "oklch(27% 0.1 260)",
    name: "--color-blue-100"
  }, {
    value: "oklch(20% 0.05 260)",
    name: "--color-blue-110"
  }, {
    value: "oklch(97% 0.05 290)",
    name: "--color-violet-0"
  }, {
    value: "oklch(90% 0.13 290)",
    name: "--color-violet-10"
  }, {
    value: "oklch(83% 0.17 290)",
    name: "--color-violet-20"
  }, {
    value: "oklch(76% 0.2 290)",
    name: "--color-violet-30"
  }, {
    value: "oklch(69% 0.22 290)",
    name: "--color-violet-40"
  }, {
    value: "oklch(62% 0.24 290)",
    name: "--color-violet-50"
  }, {
    value: "oklch(55% 0.24 290)",
    name: "--color-violet-60"
  }, {
    value: "oklch(48% 0.2 290)",
    name: "--color-violet-70"
  }, {
    value: "oklch(41% 0.17 290)",
    name: "--color-violet-80"
  }, {
    value: "oklch(34% 0.14 290)",
    name: "--color-violet-90"
  }, {
    value: "oklch(27% 0.1 290)",
    name: "--color-violet-100"
  }, {
    value: "oklch(20% 0.05 290)",
    name: "--color-violet-110"
  }, {
    value: "oklch(97% 0.05 315)",
    name: "--color-purple-0"
  }, {
    value: "oklch(90% 0.1 315)",
    name: "--color-purple-10"
  }, {
    value: "oklch(83% 0.14 315)",
    name: "--color-purple-20"
  }, {
    value: "oklch(76% 0.17 315)",
    name: "--color-purple-30"
  }, {
    value: "oklch(69% 0.19 315)",
    name: "--color-purple-40"
  }, {
    value: "oklch(62% 0.21 315)",
    name: "--color-purple-50"
  }, {
    value: "oklch(55% 0.21 315)",
    name: "--color-purple-60"
  }, {
    value: "oklch(48% 0.2 315)",
    name: "--color-purple-70"
  }, {
    value: "oklch(41% 0.17 315)",
    name: "--color-purple-80"
  }, {
    value: "oklch(34% 0.14 315)",
    name: "--color-purple-90"
  }, {
    value: "oklch(27% 0.1 315)",
    name: "--color-purple-100"
  }, {
    value: "oklch(20% 0.05 315)",
    name: "--color-purple-110"
  }, {
    value: "oklch(97% 0.05 360)",
    name: "--color-pink-0"
  }, {
    value: "oklch(90% 0.1 360)",
    name: "--color-pink-10"
  }, {
    value: "oklch(83% 0.14 360)",
    name: "--color-pink-20"
  }, {
    value: "oklch(76% 0.17 360)",
    name: "--color-pink-30"
  }, {
    value: "oklch(69% 0.19 360)",
    name: "--color-pink-40"
  }, {
    value: "oklch(62% 0.21 360)",
    name: "--color-pink-50"
  }, {
    value: "oklch(55% 0.21 360)",
    name: "--color-pink-60"
  }, {
    value: "oklch(48% 0.2 360)",
    name: "--color-pink-70"
  }, {
    value: "oklch(41% 0.17 360)",
    name: "--color-pink-80"
  }, {
    value: "oklch(34% 0.14 360)",
    name: "--color-pink-90"
  }, {
    value: "oklch(27% 0.1 360)",
    name: "--color-pink-100"
  }, {
    value: "oklch(20% 0.05 360)",
    name: "--color-pink-110"
  }, {
    value: "#ffffff",
    name: "--color-white"
  }, {
    value: {
      forcedColors: "ButtonText",
      brand: {
        light: "var(--color-blue-60)",
        dark: "var(--color-cyan-30)",
        default: "light-dark(var(--color-blue-60), var(--color-cyan-30))"
      },
      platform: {
        default: "AccentColor"
      }
    },
    name: "--color-accent-primary"
  }, {
    value: {
      forcedColors: "SelectedItem",
      brand: {
        light: "var(--color-blue-70)",
        dark: "var(--color-cyan-20)",
        default: "light-dark(var(--color-blue-70), var(--color-cyan-20))"
      },
      platform: {
        default: "color-mix(in srgb, black 10%, var(--color-accent-primary))"
      }
    },
    name: "--color-accent-primary-hover"
  }, {
    value: {
      forcedColors: "var(--color-accent-primary-hover)",
      brand: {
        light: "var(--color-blue-80)",
        dark: "var(--color-cyan-10)",
        default: "light-dark(var(--color-blue-80), var(--color-cyan-10))"
      },
      platform: {
        default: "color-mix(in srgb, black 20%, var(--color-accent-primary))"
      }
    },
    name: "--color-accent-primary-active"
  }],
  "background-color": [{
    value: {
      light: "var(--color-white)",
      dark: "var(--color-gray-80)",
      prefersContrast: "var(--background-color-canvas)",
      default: "light-dark(var(--color-white), var(--color-gray-80))"
    },
    name: "--background-color-box"
  }, {
    value: {
      prefersContrast: "Canvas",
      brand: {
        light: "var(--color-white)",
        dark: "var(--color-gray-90)",
        default: "light-dark(var(--color-white), var(--color-gray-90))"
      },
      platform: {
        default: "Canvas"
      }
    },
    name: "--background-color-canvas"
  }, {
    value: {
      light: "var(--color-red-0)",
      dark: "var(--color-red-90)",
      prefersContrast: "var(--background-color-canvas)",
      default: "light-dark(var(--color-red-0), var(--color-red-90))"
    },
    name: "--background-color-critical"
  }, {
    value: {
      light: "var(--color-blue-0)",
      dark: "var(--color-blue-90)",
      prefersContrast: "var(--background-color-canvas)",
      default: "light-dark(var(--color-blue-0), var(--color-blue-90))"
    },
    name: "--background-color-information"
  }, {
    value: {
      light: "var(--color-green-0)",
      dark: "var(--color-green-90)",
      prefersContrast: "var(--background-color-canvas)",
      default: "light-dark(var(--color-green-0), var(--color-green-90))"
    },
    name: "--background-color-success"
  }, {
    value: {
      light: "var(--color-yellow-0)",
      dark: "var(--color-yellow-90)",
      prefersContrast: "var(--background-color-canvas)",
      default: "light-dark(var(--color-yellow-0), var(--color-yellow-90))"
    },
    name: "--background-color-warning"
  }, {
    value: {
      forcedColors: "ButtonFace",
      brand: {
        default: "color-mix(in srgb, currentColor 7%, transparent)"
      },
      platform: {
        default: "color-mix(in srgb, currentColor 13%, transparent)"
      }
    },
    name: "--button-background-color"
  }, {
    value: {
      forcedColors: "SelectedItemText",
      brand: {
        default: "color-mix(in srgb, currentColor 14%, transparent)"
      },
      platform: {
        default: "color-mix(in srgb, currentColor 17%, transparent)"
      }
    },
    name: "--button-background-color-hover"
  }, {
    value: {
      forcedColors: "SelectedItemText",
      brand: {
        default: "color-mix(in srgb, currentColor 21%, transparent)"
      },
      platform: {
        default: "color-mix(in srgb, currentColor 30%, transparent)"
      }
    },
    name: "--button-background-color-active"
  }, {
    value: {
      default: "var(--button-background-color)",
      forcedColors: "ButtonFace"
    },
    name: "--button-background-color-disabled"
  }, {
    value: "var(--color-accent-primary)",
    name: "--button-background-color-primary"
  }, {
    value: "var(--color-accent-primary-hover)",
    name: "--button-background-color-primary-hover"
  }, {
    value: "var(--color-accent-primary-active)",
    name: "--button-background-color-primary-active"
  }, {
    value: {
      default: "var(--button-background-color-primary)",
      forcedColors: "var(--button-text-color-disabled)"
    },
    name: "--button-background-color-primary-disabled"
  }, {
    value: {
      light: "var(--color-red-60)",
      dark: "var(--color-red-30)",
      forcedColors: "var(--button-background-color-primary)",
      default: "light-dark(var(--color-red-60), var(--color-red-30))"
    },
    name: "--button-background-color-destructive"
  }, {
    value: {
      light: "var(--color-red-80)",
      dark: "var(--color-red-10)",
      forcedColors: "var(--button-background-color-primary-active)",
      default: "light-dark(var(--color-red-80), var(--color-red-10))"
    },
    name: "--button-background-color-destructive-active"
  }, {
    value: {
      default: "var(--button-background-color-destructive)",
      forcedColors: "var(--button-background-color-primary-disabled)"
    },
    name: "--button-background-color-destructive-disabled"
  }, {
    value: {
      light: "var(--color-red-70)",
      dark: "var(--color-red-20)",
      forcedColors: "var(--button-background-color-primary-hover)",
      default: "light-dark(var(--color-red-70), var(--color-red-20))"
    },
    name: "--button-background-color-destructive-hover"
  }, {
    value: {
      default: "transparent",
      brand: {
        forcedColors: "var(--button-background-color)"
      }
    },
    name: "--button-background-color-ghost"
  }, {
    value: "var(--button-background-color-active)",
    name: "--button-background-color-ghost-active"
  }, {
    value: {
      default: "var(--button-background-color-ghost)",
      brand: {
        forcedColors: "var(--button-background-color-disabled)"
      }
    },
    name: "--button-background-color-ghost-disabled"
  }, {
    value: "var(--button-background-color-hover)",
    name: "--button-background-color-ghost-hover"
  }, {
    value: {
      default: "var(--background-color-canvas)"
    },
    name: "--table-row-background-color"
  }, {
    value: {
      forcedColors: "var(--background-color-canvas)",
      brand: {
        light: "#f0f0f4",
        dark: "var(--color-gray-80)",
        default: "light-dark(#f0f0f4, var(--color-gray-80))"
      },
      platform: {
        light: "rgba(0,0,0,5%)",
        dark: "rgba(255,255,255,5%)",
        default: "light-dark(rgba(0,0,0,5%), rgba(255,255,255,5%))"
      }
    },
    name: "--table-row-background-color-alternate"
  }],
  "border-color": [{
    value: {
      brand: {
        light: "var(--color-gray-50)",
        dark: "var(--color-gray-70)",
        default: "light-dark(var(--color-gray-50), var(--color-gray-70))"
      },
      prefersContrast: "CanvasText",
      platform: {
        default: "color-mix(in srgb, currentColor 50%, transparent)"
      }
    },
    name: "--border-color"
  }, {
    value: {
      default: "transparent",
      prefersContrast: "CanvasText"
    },
    name: "--border-color-transparent"
  }, {
    value: {
      default: "color-mix(in srgb, currentColor 10%, transparent)",
      prefersContrast: "color-mix(in srgb, currentColor 41%, transparent)",
      forcedColors: "CanvasText"
    },
    name: "--border-color-card"
  }, {
    value: {
      brand: {
        light: "var(--color-gray-30)",
        dark: "var(--color-gray-70)",
        default: "light-dark(var(--color-gray-30), var(--color-gray-70))"
      },
      platform: {
        default: "color-mix(in srgb, currentColor 24%, transparent)"
      },
      prefersContrast: "currentColor",
      forcedColors: "ButtonText"
    },
    name: "--border-color-deemphasized"
  }, {
    value: {
      prefersContrast: "var(--text-color)",
      forcedColors: "ButtonText",
      brand: {
        light: "var(--color-gray-60)",
        dark: "var(--color-gray-50)",
        default: "light-dark(var(--color-gray-60), var(--color-gray-50))"
      },
      platform: {
        default: "color-mix(in srgb, currentColor 15%, var(--color-gray-60))"
      }
    },
    name: "--border-color-interactive"
  }, {
    value: {
      default: "var(--border-color-interactive)",
      forcedColors: "SelectedItem"
    },
    name: "--border-color-interactive-hover"
  }, {
    value: {
      default: "var(--border-color-interactive)",
      forcedColors: "ButtonText"
    },
    name: "--border-color-interactive-active"
  }, {
    value: {
      default: "var(--border-color-interactive)",
      forcedColors: "GrayText"
    },
    name: "--border-color-interactive-disabled"
  }, {
    value: {
      default: "transparent",
      prefersContrast: "var(--button-text-color)",
      forcedColors: "var(--border-color-interactive)"
    },
    name: "--button-border-color"
  }, {
    value: {
      default: "var(--button-border-color)",
      forcedColors: "var(--border-color-interactive-active)"
    },
    name: "--button-border-color-active"
  }, {
    value: {
      default: "transparent",
      forcedColors: "var(--button-border-color-primary)"
    },
    name: "--button-border-color-destructive"
  }, {
    value: {
      default: "var(--button-border-color-destructive)",
      forcedColors: "var(--button-border-color-primary-active)"
    },
    name: "--button-border-color-destructive-active"
  }, {
    value: {
      default: "var(--button-border-color-destructive)",
      forcedColors: "var(--button-border-color-primary-disabled)"
    },
    name: "--button-border-color-destructive-disabled"
  }, {
    value: {
      default: "var(--button-border-color-destructive)",
      forcedColors: "var(--button-border-color-primary-hover)"
    },
    name: "--button-border-color-destructive-hover"
  }, {
    value: {
      default: "var(--button-border-color)",
      forcedColors: "var(--border-color-interactive-disabled)"
    },
    name: "--button-border-color-disabled"
  }, {
    value: {
      default: "var(--button-border-color)"
    },
    name: "--button-border-color-ghost"
  }, {
    value: {
      default: "var(--button-border-color-active)"
    },
    name: "--button-border-color-ghost-active"
  }, {
    value: {
      default: "var(--button-border-color-disabled)"
    },
    name: "--button-border-color-ghost-disabled"
  }, {
    value: {
      default: "var(--button-border-color-hover)"
    },
    name: "--button-border-color-ghost-hover"
  }, {
    value: {
      default: "var(--button-border-color)",
      forcedColors: "var(--border-color-interactive-hover)"
    },
    name: "--button-border-color-hover"
  }, {
    value: {
      default: "transparent",
      forcedColors: "ButtonFace"
    },
    name: "--button-border-color-primary"
  }, {
    value: {
      default: "var(--button-border-color-primary)",
      forcedColors: "ButtonText"
    },
    name: "--button-border-color-primary-active"
  }, {
    value: "var(--button-border-color-primary)",
    name: "--button-border-color-primary-disabled"
  }, {
    value: {
      default: "var(--button-border-color-primary)",
      forcedColors: "SelectedItemText"
    },
    name: "--button-border-color-primary-hover"
  }],
  "border-radius": [{
    value: "9999px",
    name: "--border-radius-circle"
  }, {
    value: "4px",
    name: "--border-radius-small"
  }, {
    value: "8px",
    name: "--border-radius-medium"
  }, {
    value: "12px",
    name: "--border-radius-large"
  }, {
    value: "var(--border-radius-small)",
    name: "--button-border-radius"
  }],
  "border-width": [{
    value: "1px",
    name: "--border-width"
  }],
  border: [{
    value: "var(--border-width) solid var(--button-border-color)",
    name: "--button-border"
  }],
  "font-size": [{
    value: "var(--font-size-root)",
    name: "--button-font-size"
  }, {
    value: "var(--font-size-small)",
    name: "--button-font-size-small"
  }, {
    value: {
      brand: {
        default: "15px"
      },
      platform: {
        default: "unset"
      }
    },
    name: "--font-size-root"
  }, {
    value: {
      brand: {
        default: "0.733rem",
        comment: "11px / Note this token is to be used in rare cases because its hard to read. Please consult with the Design Systems and A11y teams for case-by-case feedback."
      },
      platform: {
        default: "unset"
      }
    },
    name: "--font-size-xsmall"
  }, {
    value: {
      brand: {
        default: "0.867rem",
        comment: "13px"
      },
      platform: {
        default: "unset"
      }
    },
    name: "--font-size-small"
  }, {
    value: {
      brand: {
        default: "1.133rem",
        comment: "17px"
      },
      platform: {
        default: "unset"
      }
    },
    name: "--font-size-large"
  }, {
    value: {
      brand: {
        default: "1.467rem",
        comment: "22px"
      },
      platform: {
        default: "unset"
      }
    },
    name: "--font-size-xlarge"
  }, {
    value: {
      brand: {
        default: "1.6rem",
        comment: "24px"
      },
      platform: {
        default: "unset"
      }
    },
    name: "--font-size-xxlarge"
  }],
  "font-weight": [{
    value: "var(--font-weight-bold)",
    name: "--button-font-weight"
  }, {
    value: "normal",
    name: "--font-weight"
  }, {
    value: 600,
    name: "--font-weight-bold"
  }],
  "icon-fill": [{
    value: "currentColor",
    name: "--button-icon-fill"
  }],
  "icon-stroke": [{
    value: "var(--button-icon-fill)",
    name: "--button-icon-stroke"
  }],
  "min-height": [{
    value: "var(--size-item-large)",
    name: "--button-min-height"
  }, {
    value: "var(--size-item-medium)",
    name: "--button-min-height-small"
  }, {
    value: "var(--button-min-height)",
    name: "--input-text-min-height"
  }],
  opacity: [{
    value: {
      default: 0.5,
      forcedColors: 1
    },
    name: "--button-opacity-disabled"
  }],
  padding: [{
    value: "var(--space-xsmall) var(--space-large)",
    name: "--button-padding"
  }, {
    value: 0,
    name: "--button-padding-icon"
  }],
  size: [{
    value: "var(--button-min-height)",
    name: "--button-size-icon"
  }, {
    value: "var(--button-min-height-small)",
    name: "--button-size-icon-small"
  }, {
    value: "var(--size-item-small)",
    name: "--checkbox-size"
  }, {
    value: {
      brand: {
        default: "664px"
      }
    },
    name: "--page-main-content-width"
  }, {
    value: "16px",
    name: "--size-item-small"
  }, {
    value: "24px",
    name: "--size-item-medium"
  }, {
    value: "32px",
    name: "--size-item-large"
  }],
  "text-color": [{
    value: {
      forcedColors: "ButtonText",
      brand: {
        light: "var(--color-gray-100)",
        dark: "var(--color-gray-05)",
        default: "light-dark(var(--color-gray-100), var(--color-gray-05))"
      },
      platform: {
        default: "currentColor"
      }
    },
    name: "--button-text-color"
  }, {
    value: {
      default: "var(--button-text-color)",
      forcedColors: "SelectedItem"
    },
    name: "--button-text-color-active"
  }, {
    value: {
      light: "var(--color-white)",
      dark: "var(--color-gray-100)",
      forcedColors: "var(--button-text-color-primary)",
      default: "light-dark(var(--color-white), var(--color-gray-100))"
    },
    name: "--button-text-color-destructive"
  }, {
    value: {
      default: "var(--button-text-color-destructive)",
      forcedColors: "var(--button-text-color-primary-active)"
    },
    name: "--button-text-color-destructive-active"
  }, {
    value: {
      default: "var(--button-text-color-destructive)",
      forcedColors: "var(--button-text-color-primary-disabled)"
    },
    name: "--button-text-color-destructive-disabled"
  }, {
    value: {
      default: "var(--button-text-color-destructive)",
      forcedColors: "var(--button-text-color-primary-hover)"
    },
    name: "--button-text-color-destructive-hover"
  }, {
    value: {
      default: "var(--button-text-color)",
      forcedColors: "GrayText"
    },
    name: "--button-text-color-disabled"
  }, {
    value: {
      default: "inherit",
      brand: {
        prefersContrast: "var(--button-text-color)",
        forcedColors: "var(--button-text-color)"
      }
    },
    name: "--button-text-color-ghost"
  }, {
    value: {
      default: "inherit",
      prefersContrast: "var(--button-text-color-active)",
      forcedColors: "var(--button-text-color-active)"
    },
    name: "--button-text-color-ghost-active"
  }, {
    value: {
      default: "inherit",
      brand: {
        prefersContrast: "var(--button-text-color-disabled)",
        forcedColors: "var(--button-text-color-disabled)"
      }
    },
    name: "--button-text-color-ghost-disabled"
  }, {
    value: {
      default: "inherit",
      prefersContrast: "var(--button-text-color-hover)",
      forcedColors: "var(--button-text-color-hover)"
    },
    name: "--button-text-color-ghost-hover"
  }, {
    value: {
      default: "var(--button-text-color)",
      forcedColors: "SelectedItem"
    },
    name: "--button-text-color-hover"
  }, {
    value: {
      forcedColors: "ButtonFace",
      brand: {
        light: "var(--color-white)",
        dark: "var(--color-gray-100)",
        default: "light-dark(var(--color-white), var(--color-gray-100))"
      },
      platform: {
        default: "AccentColorText"
      }
    },
    name: "--button-text-color-primary"
  }, {
    value: "var(--button-text-color-primary-hover)",
    name: "--button-text-color-primary-active"
  }, {
    value: "var(--button-text-color-primary)",
    name: "--button-text-color-primary-disabled"
  }, {
    value: {
      default: "var(--button-text-color-primary)",
      forcedColors: "SelectedItemText"
    },
    name: "--button-text-color-primary-hover"
  }, {
    value: {
      prefersContrast: "CanvasText",
      brand: {
        light: "var(--color-gray-100)",
        dark: "var(--color-gray-05)",
        default: "light-dark(var(--color-gray-100), var(--color-gray-05))"
      },
      platform: {
        default: "currentColor"
      }
    },
    name: "--text-color"
  }, {
    value: {
      default: "color-mix(in srgb, currentColor 69%, transparent)",
      prefersContrast: "inherit"
    },
    name: "--text-color-deemphasized"
  }, {
    value: {
      default: "color-mix(in srgb, currentColor 40%, transparent)",
      forcedColors: "GrayText"
    },
    name: "--text-color-disabled"
  }, {
    value: {
      light: "var(--color-red-70)",
      dark: "var(--color-red-20)",
      prefersContrast: "inherit",
      default: "light-dark(var(--color-red-70), var(--color-red-20))"
    },
    name: "--text-color-error"
  }],
  margin: [{
    value: "var(--space-small)",
    name: "--checkbox-margin-inline"
  }],
  outline: [{
    value: "var(--focus-outline-width) solid var(--focus-outline-color)",
    name: "--focus-outline"
  }, {
    value: {
      default: "var(--color-accent-primary)",
      forcedColors: "var(--text-color)"
    },
    name: "--focus-outline-color"
  }, {
    value: "calc(-1 * var(--focus-outline-width))",
    name: "--focus-outline-inset"
  }, {
    value: "2px",
    name: "--focus-outline-offset"
  }, {
    value: "2px",
    name: "--focus-outline-width"
  }, {
    value: {
      light: "var(--color-red-70)",
      dark: "var(--color-red-20)",
      prefersContrast: "var(--border-color)",
      default: "light-dark(var(--color-red-70), var(--color-red-20))"
    },
    name: "--outline-color-error"
  }],
  "heading-font": [{
    value: "var(--font-size-xxlarge)",
    name: "--heading-font-size-xlarge"
  }, {
    value: "var(--font-size-xlarge)",
    name: "--heading-font-size-large"
  }, {
    value: "var(--font-size-large)",
    name: "--heading-font-size-medium"
  }, {
    value: "var(--font-weight-bold)",
    name: "--heading-font-weight"
  }],
  "icon-color": [{
    value: {
      light: "var(--color-gray-70)",
      dark: "var(--color-gray-05)",
      prefersContrast: "var(--text-color)",
      default: "light-dark(var(--color-gray-70), var(--color-gray-05))"
    },
    name: "--icon-color"
  }, {
    value: {
      light: "var(--color-blue-60)",
      dark: "var(--color-blue-20)",
      prefersContrast: "var(--icon-color)",
      default: "light-dark(var(--color-blue-60), var(--color-blue-20))"
    },
    name: "--icon-color-information"
  }, {
    value: {
      light: "var(--color-green-60)",
      dark: "var(--color-green-20)",
      prefersContrast: "var(--icon-color)",
      default: "light-dark(var(--color-green-60), var(--color-green-20))"
    },
    name: "--icon-color-success"
  }, {
    value: {
      light: "var(--color-yellow-60)",
      dark: "var(--color-yellow-20)",
      prefersContrast: "var(--icon-color)",
      default: "light-dark(var(--color-yellow-60), var(--color-yellow-20))"
    },
    name: "--icon-color-warning"
  }, {
    value: {
      light: "var(--color-red-60)",
      dark: "var(--color-red-20)",
      prefersContrast: "var(--icon-color)",
      default: "light-dark(var(--color-red-60), var(--color-red-20))"
    },
    name: "--icon-color-critical"
  }],
  "icon-size": [{
    value: "var(--icon-size-small)",
    name: "--icon-size"
  }, {
    value: "12px",
    name: "--icon-size-xsmall"
  }, {
    value: "var(--size-item-small)",
    name: "--icon-size-small"
  }, {
    value: "20px",
    name: "--icon-size-medium"
  }, {
    value: "24px",
    name: "--icon-size-large"
  }, {
    value: "var(--size-item-large)",
    name: "--icon-size-xlarge"
  }],
  link: [{
    value: {
      forcedColors: "LinkText",
      brand: {
        default: "var(--color-accent-primary)"
      },
      platform: {
        default: "LinkText"
      }
    },
    name: "--link-color"
  }, {
    value: {
      forcedColors: "LinkText",
      brand: {
        default: "var(--color-accent-primary-hover)"
      },
      platform: {
        default: "color-mix(in srgb, black 10%, var(--link-color))"
      }
    },
    name: "--link-color-hover"
  }, {
    value: {
      forcedColors: "ActiveText",
      brand: {
        default: "var(--color-accent-primary-active)"
      },
      platform: {
        default: "color-mix(in srgb, black 20%, var(--link-color))"
      }
    },
    name: "--link-color-active"
  }, {
    value: {
      forcedColors: "var(--link-color)",
      brand: {
        default: "var(--link-color)"
      },
      platform: {
        default: "var(--link-color)"
      }
    },
    name: "--link-color-visited"
  }, {
    value: "1px",
    name: "--link-focus-outline-offset"
  }],
  space: [{
    value: "calc(0.5 * var(--space-xsmall))",
    name: "--space-xxsmall"
  }, {
    value: "0.267rem",
    name: "--space-xsmall"
  }, {
    value: "calc(2 * var(--space-xsmall))",
    name: "--space-small"
  }, {
    value: "calc(3 * var(--space-xsmall))",
    name: "--space-medium"
  }, {
    value: "calc(4 * var(--space-xsmall))",
    name: "--space-large"
  }, {
    value: "calc(6 * var(--space-xsmall))",
    name: "--space-xlarge"
  }, {
    value: "calc(8 * var(--space-xsmall))",
    name: "--space-xxlarge"
  }],
  "box-shadow": [{
    value: "0 0 1px var(--box-shadow-color-darker-layer-1), 0 1px 2px var(--box-shadow-color-darker-layer-2)",
    name: "--box-shadow-level-1"
  }, {
    value: "0 0.25px 0.75px var(--box-shadow-color-lighter-layer-1), 0 2px 6px var(--box-shadow-color-lighter-layer-2)",
    name: "--box-shadow-level-2"
  }, {
    value: "0 0.375px 1.5px var(--box-shadow-color-lighter-layer-1), 0 3px 12px var(--box-shadow-color-lighter-layer-2)",
    name: "--box-shadow-level-3"
  }, {
    value: "0 0.5px 2px var(--box-shadow-color-lighter-layer-1), 0 4px 16px var(--box-shadow-color-lighter-layer-2)",
    name: "--box-shadow-level-4"
  }, {
    value: "var(--box-shadow-level-1)",
    name: "--box-shadow-tab"
  }, {
    value: "var(--box-shadow-level-2)",
    name: "--box-shadow-card"
  }, {
    value: "var(--box-shadow-level-4)",
    name: "--box-shadow-card-hover"
  }, {
    value: "var(--box-shadow-level-3)",
    name: "--box-shadow-popup"
  }, {
    value: {
      light: "rgba(0, 0, 0, 0.15)",
      dark: "rgba(0, 0, 0, 0.2)",
      default: "light-dark(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.2))"
    },
    name: "--box-shadow-color-darker-layer-1"
  }, {
    value: {
      light: "rgba(0, 0, 0, 0.2)",
      dark: "rgba(0, 0, 0, 0.4)",
      default: "light-dark(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4))"
    },
    name: "--box-shadow-color-darker-layer-2"
  }, {
    value: {
      light: "rgba(0, 0, 0, 0.05)",
      dark: "rgba(0, 0, 0, 0.2)",
      default: "light-dark(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.2))"
    },
    name: "--box-shadow-color-lighter-layer-1"
  }, {
    value: {
      light: "rgba(0, 0, 0, 0.1)",
      dark: "rgba(0, 0, 0, 0.4)",
      default: "light-dark(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4))"
    },
    name: "--box-shadow-color-lighter-layer-2"
  }]
};
const variableLookupTable = {
  "attention-dot-color": {
    platform: {
      default: "AccentColor"
    },
    brand: {
      light: "#2ac3a2",
      dark: "#54ffbd",
      default: "light-dark(#2ac3a2, #54ffbd)"
    },
    prefersContrast: "AccentColor"
  },
  "background-color-box": {
    light: "var(--color-white)",
    dark: "var(--color-gray-80)",
    prefersContrast: "var(--background-color-canvas)",
    default: "light-dark(var(--color-white), var(--color-gray-80))"
  },
  "background-color-canvas": {
    prefersContrast: "Canvas",
    brand: {
      light: "var(--color-white)",
      dark: "var(--color-gray-90)",
      default: "light-dark(var(--color-white), var(--color-gray-90))"
    },
    platform: {
      default: "Canvas"
    }
  },
  "background-color-critical": {
    light: "var(--color-red-0)",
    dark: "var(--color-red-90)",
    prefersContrast: "var(--background-color-canvas)",
    default: "light-dark(var(--color-red-0), var(--color-red-90))"
  },
  "background-color-information": {
    light: "var(--color-blue-0)",
    dark: "var(--color-blue-90)",
    prefersContrast: "var(--background-color-canvas)",
    default: "light-dark(var(--color-blue-0), var(--color-blue-90))"
  },
  "background-color-success": {
    light: "var(--color-green-0)",
    dark: "var(--color-green-90)",
    prefersContrast: "var(--background-color-canvas)",
    default: "light-dark(var(--color-green-0), var(--color-green-90))"
  },
  "background-color-warning": {
    light: "var(--color-yellow-0)",
    dark: "var(--color-yellow-90)",
    prefersContrast: "var(--background-color-canvas)",
    default: "light-dark(var(--color-yellow-0), var(--color-yellow-90))"
  },
  "border-color": {
    brand: {
      light: "var(--color-gray-50)",
      dark: "var(--color-gray-70)",
      default: "light-dark(var(--color-gray-50), var(--color-gray-70))"
    },
    prefersContrast: "CanvasText",
    platform: {
      default: "color-mix(in srgb, currentColor 50%, transparent)"
    }
  },
  "border-color-transparent": {
    default: "transparent",
    prefersContrast: "CanvasText"
  },
  "border-color-card": {
    default: "color-mix(in srgb, currentColor 10%, transparent)",
    prefersContrast: "color-mix(in srgb, currentColor 41%, transparent)",
    forcedColors: "CanvasText"
  },
  "border-color-deemphasized": {
    brand: {
      light: "var(--color-gray-30)",
      dark: "var(--color-gray-70)",
      default: "light-dark(var(--color-gray-30), var(--color-gray-70))"
    },
    platform: {
      default: "color-mix(in srgb, currentColor 24%, transparent)"
    },
    prefersContrast: "currentColor",
    forcedColors: "ButtonText"
  },
  "border-color-interactive": {
    prefersContrast: "var(--text-color)",
    forcedColors: "ButtonText",
    brand: {
      light: "var(--color-gray-60)",
      dark: "var(--color-gray-50)",
      default: "light-dark(var(--color-gray-60), var(--color-gray-50))"
    },
    platform: {
      default: "color-mix(in srgb, currentColor 15%, var(--color-gray-60))"
    }
  },
  "border-color-interactive-hover": {
    default: "var(--border-color-interactive)",
    forcedColors: "SelectedItem"
  },
  "border-color-interactive-active": {
    default: "var(--border-color-interactive)",
    forcedColors: "ButtonText"
  },
  "border-color-interactive-disabled": {
    default: "var(--border-color-interactive)",
    forcedColors: "GrayText"
  },
  "border-radius-circle": "9999px",
  "border-radius-small": "4px",
  "border-radius-medium": "8px",
  "border-radius-large": "12px",
  "border-width": "1px",
  "button-background-color": {
    forcedColors: "ButtonFace",
    brand: {
      default: "color-mix(in srgb, currentColor 7%, transparent)"
    },
    platform: {
      default: "color-mix(in srgb, currentColor 13%, transparent)"
    }
  },
  "button-background-color-hover": {
    forcedColors: "SelectedItemText",
    brand: {
      default: "color-mix(in srgb, currentColor 14%, transparent)"
    },
    platform: {
      default: "color-mix(in srgb, currentColor 17%, transparent)"
    }
  },
  "button-background-color-active": {
    forcedColors: "SelectedItemText",
    brand: {
      default: "color-mix(in srgb, currentColor 21%, transparent)"
    },
    platform: {
      default: "color-mix(in srgb, currentColor 30%, transparent)"
    }
  },
  "button-background-color-disabled": {
    default: "var(--button-background-color)",
    forcedColors: "ButtonFace"
  },
  "button-background-color-primary": "var(--color-accent-primary)",
  "button-background-color-primary-hover": "var(--color-accent-primary-hover)",
  "button-background-color-primary-active": "var(--color-accent-primary-active)",
  "button-background-color-primary-disabled": {
    default: "var(--button-background-color-primary)",
    forcedColors: "var(--button-text-color-disabled)"
  },
  "button-background-color-destructive": {
    light: "var(--color-red-60)",
    dark: "var(--color-red-30)",
    forcedColors: "var(--button-background-color-primary)",
    default: "light-dark(var(--color-red-60), var(--color-red-30))"
  },
  "button-background-color-destructive-active": {
    light: "var(--color-red-80)",
    dark: "var(--color-red-10)",
    forcedColors: "var(--button-background-color-primary-active)",
    default: "light-dark(var(--color-red-80), var(--color-red-10))"
  },
  "button-background-color-destructive-disabled": {
    default: "var(--button-background-color-destructive)",
    forcedColors: "var(--button-background-color-primary-disabled)"
  },
  "button-background-color-destructive-hover": {
    light: "var(--color-red-70)",
    dark: "var(--color-red-20)",
    forcedColors: "var(--button-background-color-primary-hover)",
    default: "light-dark(var(--color-red-70), var(--color-red-20))"
  },
  "button-background-color-ghost": {
    default: "transparent",
    brand: {
      forcedColors: "var(--button-background-color)"
    }
  },
  "button-background-color-ghost-active": "var(--button-background-color-active)",
  "button-background-color-ghost-disabled": {
    default: "var(--button-background-color-ghost)",
    brand: {
      forcedColors: "var(--button-background-color-disabled)"
    }
  },
  "button-background-color-ghost-hover": "var(--button-background-color-hover)",
  "button-border": "var(--border-width) solid var(--button-border-color)",
  "button-border-color": {
    default: "transparent",
    prefersContrast: "var(--button-text-color)",
    forcedColors: "var(--border-color-interactive)"
  },
  "button-border-color-active": {
    default: "var(--button-border-color)",
    forcedColors: "var(--border-color-interactive-active)"
  },
  "button-border-color-destructive": {
    default: "transparent",
    forcedColors: "var(--button-border-color-primary)"
  },
  "button-border-color-destructive-active": {
    default: "var(--button-border-color-destructive)",
    forcedColors: "var(--button-border-color-primary-active)"
  },
  "button-border-color-destructive-disabled": {
    default: "var(--button-border-color-destructive)",
    forcedColors: "var(--button-border-color-primary-disabled)"
  },
  "button-border-color-destructive-hover": {
    default: "var(--button-border-color-destructive)",
    forcedColors: "var(--button-border-color-primary-hover)"
  },
  "button-border-color-disabled": {
    default: "var(--button-border-color)",
    forcedColors: "var(--border-color-interactive-disabled)"
  },
  "button-border-color-ghost": {
    default: "var(--button-border-color)"
  },
  "button-border-color-ghost-active": {
    default: "var(--button-border-color-active)"
  },
  "button-border-color-ghost-disabled": {
    default: "var(--button-border-color-disabled)"
  },
  "button-border-color-ghost-hover": {
    default: "var(--button-border-color-hover)"
  },
  "button-border-color-hover": {
    default: "var(--button-border-color)",
    forcedColors: "var(--border-color-interactive-hover)"
  },
  "button-border-color-primary": {
    default: "transparent",
    forcedColors: "ButtonFace"
  },
  "button-border-color-primary-active": {
    default: "var(--button-border-color-primary)",
    forcedColors: "ButtonText"
  },
  "button-border-color-primary-disabled": "var(--button-border-color-primary)",
  "button-border-color-primary-hover": {
    default: "var(--button-border-color-primary)",
    forcedColors: "SelectedItemText"
  },
  "button-border-radius": "var(--border-radius-small)",
  "button-font-size": "var(--font-size-root)",
  "button-font-size-small": "var(--font-size-small)",
  "button-font-weight": "var(--font-weight-bold)",
  "button-icon-fill": "currentColor",
  "button-icon-stroke": "var(--button-icon-fill)",
  "button-min-height": "var(--size-item-large)",
  "button-min-height-small": "var(--size-item-medium)",
  "button-opacity-disabled": {
    default: 0.5,
    forcedColors: 1
  },
  "button-padding": "var(--space-xsmall) var(--space-large)",
  "button-padding-icon": 0,
  "button-size-icon": "var(--button-min-height)",
  "button-size-icon-small": "var(--button-min-height-small)",
  "button-text-color": {
    forcedColors: "ButtonText",
    brand: {
      light: "var(--color-gray-100)",
      dark: "var(--color-gray-05)",
      default: "light-dark(var(--color-gray-100), var(--color-gray-05))"
    },
    platform: {
      default: "currentColor"
    }
  },
  "button-text-color-active": {
    default: "var(--button-text-color)",
    forcedColors: "SelectedItem"
  },
  "button-text-color-destructive": {
    light: "var(--color-white)",
    dark: "var(--color-gray-100)",
    forcedColors: "var(--button-text-color-primary)",
    default: "light-dark(var(--color-white), var(--color-gray-100))"
  },
  "button-text-color-destructive-active": {
    default: "var(--button-text-color-destructive)",
    forcedColors: "var(--button-text-color-primary-active)"
  },
  "button-text-color-destructive-disabled": {
    default: "var(--button-text-color-destructive)",
    forcedColors: "var(--button-text-color-primary-disabled)"
  },
  "button-text-color-destructive-hover": {
    default: "var(--button-text-color-destructive)",
    forcedColors: "var(--button-text-color-primary-hover)"
  },
  "button-text-color-disabled": {
    default: "var(--button-text-color)",
    forcedColors: "GrayText"
  },
  "button-text-color-ghost": {
    default: "inherit",
    brand: {
      prefersContrast: "var(--button-text-color)",
      forcedColors: "var(--button-text-color)"
    }
  },
  "button-text-color-ghost-active": {
    default: "inherit",
    prefersContrast: "var(--button-text-color-active)",
    forcedColors: "var(--button-text-color-active)"
  },
  "button-text-color-ghost-disabled": {
    default: "inherit",
    brand: {
      prefersContrast: "var(--button-text-color-disabled)",
      forcedColors: "var(--button-text-color-disabled)"
    }
  },
  "button-text-color-ghost-hover": {
    default: "inherit",
    prefersContrast: "var(--button-text-color-hover)",
    forcedColors: "var(--button-text-color-hover)"
  },
  "button-text-color-hover": {
    default: "var(--button-text-color)",
    forcedColors: "SelectedItem"
  },
  "button-text-color-primary": {
    forcedColors: "ButtonFace",
    brand: {
      light: "var(--color-white)",
      dark: "var(--color-gray-100)",
      default: "light-dark(var(--color-white), var(--color-gray-100))"
    },
    platform: {
      default: "AccentColorText"
    }
  },
  "button-text-color-primary-active": "var(--button-text-color-primary-hover)",
  "button-text-color-primary-disabled": "var(--button-text-color-primary)",
  "button-text-color-primary-hover": {
    default: "var(--button-text-color-primary)",
    forcedColors: "SelectedItemText"
  },
  "checkbox-margin-inline": "var(--space-small)",
  "checkbox-size": "var(--size-item-small)",
  "color-gray-20": "#f0f0f4",
  "color-gray-30": "#bac2ca",
  "color-gray-50": "#bfbfc9",
  "color-gray-60": "#8f8f9d",
  "color-gray-70": "#5b5b66",
  "color-gray-80": "#23222b",
  "color-gray-90": "#1c1b22",
  "color-gray-100": "#15141a",
  "color-gray-05": "#fbfbfe",
  "color-red-0": "oklch(97% 0.05 15)",
  "color-red-10": "oklch(90% 0.1 15)",
  "color-red-20": "oklch(83% 0.14 15)",
  "color-red-30": "oklch(76% 0.17 15)",
  "color-red-40": "oklch(69% 0.19 15)",
  "color-red-50": "oklch(62% 0.21 15)",
  "color-red-60": "oklch(55% 0.21 15)",
  "color-red-70": "oklch(48% 0.2 15)",
  "color-red-80": "oklch(41% 0.17 15)",
  "color-red-90": "oklch(34% 0.14 15)",
  "color-red-100": "oklch(27% 0.1 15)",
  "color-red-110": "oklch(20% 0.05 15)",
  "color-orange-0": "oklch(97% 0.05 50)",
  "color-orange-10": "oklch(90% 0.10 50)",
  "color-orange-20": "oklch(86% 0.14 50)",
  "color-orange-30": "oklch(79% 0.17 50)",
  "color-orange-40": "oklch(72% 0.19 50)",
  "color-orange-50": "oklch(65% 0.21 50)",
  "color-orange-60": "oklch(58% 0.21 50)",
  "color-orange-70": "oklch(48% 0.20 50)",
  "color-orange-80": "oklch(41% 0.17 50)",
  "color-orange-90": "oklch(34% 0.14 50)",
  "color-orange-100": "oklch(27% 0.10 50)",
  "color-orange-110": "oklch(20% 0.05 50)",
  "color-yellow-0": "oklch(97% 0.05 90)",
  "color-yellow-10": "oklch(93% 0.1 90)",
  "color-yellow-20": "oklch(86% 0.14 90)",
  "color-yellow-30": "oklch(79% 0.2 90)",
  "color-yellow-40": "oklch(72% 0.22 90)",
  "color-yellow-50": "oklch(65% 0.24 90)",
  "color-yellow-60": "oklch(58% 0.24 90)",
  "color-yellow-70": "oklch(51% 0.23 90)",
  "color-yellow-80": "oklch(41% 0.2 90)",
  "color-yellow-90": "oklch(34% 0.17 90)",
  "color-yellow-100": "oklch(27% 0.13 90)",
  "color-yellow-110": "oklch(20% 0.08 90)",
  "color-green-0": "oklch(97% 0.05 145)",
  "color-green-10": "oklch(90% 0.1 145)",
  "color-green-20": "oklch(83% 0.14 145)",
  "color-green-30": "oklch(76% 0.17 145)",
  "color-green-40": "oklch(69% 0.19 145)",
  "color-green-50": "oklch(62% 0.21 145)",
  "color-green-60": "oklch(55% 0.21 145)",
  "color-green-70": "oklch(48% 0.2 145)",
  "color-green-80": "oklch(41% 0.17 145)",
  "color-green-90": "oklch(34% 0.14 145)",
  "color-green-100": "oklch(27% 0.1 145)",
  "color-green-110": "oklch(20% 0.05 145)",
  "color-cyan-0": "oklch(97% 0.05 205)",
  "color-cyan-10": "oklch(90% 0.07 205)",
  "color-cyan-20": "oklch(83% 0.11 205)",
  "color-cyan-30": "oklch(76% 0.14 205)",
  "color-cyan-40": "oklch(69% 0.19 205)",
  "color-cyan-50": "oklch(62% 0.21 205)",
  "color-cyan-60": "oklch(55% 0.21 205)",
  "color-cyan-70": "oklch(48% 0.2 205)",
  "color-cyan-80": "oklch(41% 0.17 205)",
  "color-cyan-90": "oklch(34% 0.14 205)",
  "color-cyan-100": "oklch(27% 0.1 205)",
  "color-cyan-110": "oklch(20% 0.05 205)",
  "color-blue-0": "oklch(97% 0.05 260)",
  "color-blue-10": "oklch(90% 0.13 260)",
  "color-blue-20": "oklch(83% 0.17 260)",
  "color-blue-30": "oklch(76% 0.2 260)",
  "color-blue-40": "oklch(69% 0.22 260)",
  "color-blue-50": "oklch(62% 0.24 260)",
  "color-blue-60": "oklch(55% 0.24 260)",
  "color-blue-70": "oklch(48% 0.2 260)",
  "color-blue-80": "oklch(41% 0.17 260)",
  "color-blue-90": "oklch(34% 0.14 260)",
  "color-blue-100": "oklch(27% 0.1 260)",
  "color-blue-110": "oklch(20% 0.05 260)",
  "color-violet-0": "oklch(97% 0.05 290)",
  "color-violet-10": "oklch(90% 0.13 290)",
  "color-violet-20": "oklch(83% 0.17 290)",
  "color-violet-30": "oklch(76% 0.2 290)",
  "color-violet-40": "oklch(69% 0.22 290)",
  "color-violet-50": "oklch(62% 0.24 290)",
  "color-violet-60": "oklch(55% 0.24 290)",
  "color-violet-70": "oklch(48% 0.2 290)",
  "color-violet-80": "oklch(41% 0.17 290)",
  "color-violet-90": "oklch(34% 0.14 290)",
  "color-violet-100": "oklch(27% 0.1 290)",
  "color-violet-110": "oklch(20% 0.05 290)",
  "color-purple-0": "oklch(97% 0.05 315)",
  "color-purple-10": "oklch(90% 0.1 315)",
  "color-purple-20": "oklch(83% 0.14 315)",
  "color-purple-30": "oklch(76% 0.17 315)",
  "color-purple-40": "oklch(69% 0.19 315)",
  "color-purple-50": "oklch(62% 0.21 315)",
  "color-purple-60": "oklch(55% 0.21 315)",
  "color-purple-70": "oklch(48% 0.2 315)",
  "color-purple-80": "oklch(41% 0.17 315)",
  "color-purple-90": "oklch(34% 0.14 315)",
  "color-purple-100": "oklch(27% 0.1 315)",
  "color-purple-110": "oklch(20% 0.05 315)",
  "color-pink-0": "oklch(97% 0.05 360)",
  "color-pink-10": "oklch(90% 0.1 360)",
  "color-pink-20": "oklch(83% 0.14 360)",
  "color-pink-30": "oklch(76% 0.17 360)",
  "color-pink-40": "oklch(69% 0.19 360)",
  "color-pink-50": "oklch(62% 0.21 360)",
  "color-pink-60": "oklch(55% 0.21 360)",
  "color-pink-70": "oklch(48% 0.2 360)",
  "color-pink-80": "oklch(41% 0.17 360)",
  "color-pink-90": "oklch(34% 0.14 360)",
  "color-pink-100": "oklch(27% 0.1 360)",
  "color-pink-110": "oklch(20% 0.05 360)",
  "color-white": "#ffffff",
  "color-accent-primary": {
    forcedColors: "ButtonText",
    brand: {
      light: "var(--color-blue-60)",
      dark: "var(--color-cyan-30)",
      default: "light-dark(var(--color-blue-60), var(--color-cyan-30))"
    },
    platform: {
      default: "AccentColor"
    }
  },
  "color-accent-primary-hover": {
    forcedColors: "SelectedItem",
    brand: {
      light: "var(--color-blue-70)",
      dark: "var(--color-cyan-20)",
      default: "light-dark(var(--color-blue-70), var(--color-cyan-20))"
    },
    platform: {
      default: "color-mix(in srgb, black 10%, var(--color-accent-primary))"
    }
  },
  "color-accent-primary-active": {
    forcedColors: "var(--color-accent-primary-hover)",
    brand: {
      light: "var(--color-blue-80)",
      dark: "var(--color-cyan-10)",
      default: "light-dark(var(--color-blue-80), var(--color-cyan-10))"
    },
    platform: {
      default: "color-mix(in srgb, black 20%, var(--color-accent-primary))"
    }
  },
  "focus-outline": "var(--focus-outline-width) solid var(--focus-outline-color)",
  "focus-outline-color": {
    default: "var(--color-accent-primary)",
    forcedColors: "var(--text-color)"
  },
  "focus-outline-inset": "calc(-1 * var(--focus-outline-width))",
  "focus-outline-offset": "2px",
  "focus-outline-width": "2px",
  "font-size-root": {
    brand: {
      default: "15px"
    },
    platform: {
      default: "unset"
    }
  },
  "font-size-xsmall": {
    brand: {
      default: "0.733rem",
      comment: "11px / Note this token is to be used in rare cases because its hard to read. Please consult with the Design Systems and A11y teams for case-by-case feedback."
    },
    platform: {
      default: "unset"
    }
  },
  "font-size-small": {
    brand: {
      default: "0.867rem",
      comment: "13px"
    },
    platform: {
      default: "unset"
    }
  },
  "font-size-large": {
    brand: {
      default: "1.133rem",
      comment: "17px"
    },
    platform: {
      default: "unset"
    }
  },
  "font-size-xlarge": {
    brand: {
      default: "1.467rem",
      comment: "22px"
    },
    platform: {
      default: "unset"
    }
  },
  "font-size-xxlarge": {
    brand: {
      default: "1.6rem",
      comment: "24px"
    },
    platform: {
      default: "unset"
    }
  },
  "font-weight": "normal",
  "font-weight-bold": 600,
  "heading-font-size-xlarge": "var(--font-size-xxlarge)",
  "heading-font-size-large": "var(--font-size-xlarge)",
  "heading-font-size-medium": "var(--font-size-large)",
  "heading-font-weight": "var(--font-weight-bold)",
  "icon-color": {
    light: "var(--color-gray-70)",
    dark: "var(--color-gray-05)",
    prefersContrast: "var(--text-color)",
    default: "light-dark(var(--color-gray-70), var(--color-gray-05))"
  },
  "icon-color-information": {
    light: "var(--color-blue-60)",
    dark: "var(--color-blue-20)",
    prefersContrast: "var(--icon-color)",
    default: "light-dark(var(--color-blue-60), var(--color-blue-20))"
  },
  "icon-color-success": {
    light: "var(--color-green-60)",
    dark: "var(--color-green-20)",
    prefersContrast: "var(--icon-color)",
    default: "light-dark(var(--color-green-60), var(--color-green-20))"
  },
  "icon-color-warning": {
    light: "var(--color-yellow-60)",
    dark: "var(--color-yellow-20)",
    prefersContrast: "var(--icon-color)",
    default: "light-dark(var(--color-yellow-60), var(--color-yellow-20))"
  },
  "icon-color-critical": {
    light: "var(--color-red-60)",
    dark: "var(--color-red-20)",
    prefersContrast: "var(--icon-color)",
    default: "light-dark(var(--color-red-60), var(--color-red-20))"
  },
  "icon-size": "var(--icon-size-small)",
  "icon-size-xsmall": "12px",
  "icon-size-small": "var(--size-item-small)",
  "icon-size-medium": "20px",
  "icon-size-large": "24px",
  "icon-size-xlarge": "var(--size-item-large)",
  "input-text-min-height": "var(--button-min-height)",
  "link-color": {
    forcedColors: "LinkText",
    brand: {
      default: "var(--color-accent-primary)"
    },
    platform: {
      default: "LinkText"
    }
  },
  "link-color-hover": {
    forcedColors: "LinkText",
    brand: {
      default: "var(--color-accent-primary-hover)"
    },
    platform: {
      default: "color-mix(in srgb, black 10%, var(--link-color))"
    }
  },
  "link-color-active": {
    forcedColors: "ActiveText",
    brand: {
      default: "var(--color-accent-primary-active)"
    },
    platform: {
      default: "color-mix(in srgb, black 20%, var(--link-color))"
    }
  },
  "link-color-visited": {
    forcedColors: "var(--link-color)",
    brand: {
      default: "var(--link-color)"
    },
    platform: {
      default: "var(--link-color)"
    }
  },
  "link-focus-outline-offset": "1px",
  "outline-color-error": {
    light: "var(--color-red-70)",
    dark: "var(--color-red-20)",
    prefersContrast: "var(--border-color)",
    default: "light-dark(var(--color-red-70), var(--color-red-20))"
  },
  "page-main-content-width": {
    brand: {
      default: "664px"
    }
  },
  "size-item-small": "16px",
  "size-item-medium": "24px",
  "size-item-large": "32px",
  "space-xxsmall": "calc(0.5 * var(--space-xsmall))",
  "space-xsmall": "0.267rem",
  "space-small": "calc(2 * var(--space-xsmall))",
  "space-medium": "calc(3 * var(--space-xsmall))",
  "space-large": "calc(4 * var(--space-xsmall))",
  "space-xlarge": "calc(6 * var(--space-xsmall))",
  "space-xxlarge": "calc(8 * var(--space-xsmall))",
  "box-shadow-level-1": "0 0 1px var(--box-shadow-color-darker-layer-1), 0 1px 2px var(--box-shadow-color-darker-layer-2)",
  "box-shadow-level-2": "0 0.25px 0.75px var(--box-shadow-color-lighter-layer-1), 0 2px 6px var(--box-shadow-color-lighter-layer-2)",
  "box-shadow-level-3": "0 0.375px 1.5px var(--box-shadow-color-lighter-layer-1), 0 3px 12px var(--box-shadow-color-lighter-layer-2)",
  "box-shadow-level-4": "0 0.5px 2px var(--box-shadow-color-lighter-layer-1), 0 4px 16px var(--box-shadow-color-lighter-layer-2)",
  "box-shadow-tab": "var(--box-shadow-level-1)",
  "box-shadow-card": "var(--box-shadow-level-2)",
  "box-shadow-card-hover": "var(--box-shadow-level-4)",
  "box-shadow-popup": "var(--box-shadow-level-3)",
  "box-shadow-color-darker-layer-1": {
    light: "rgba(0, 0, 0, 0.15)",
    dark: "rgba(0, 0, 0, 0.2)",
    default: "light-dark(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.2))"
  },
  "box-shadow-color-darker-layer-2": {
    light: "rgba(0, 0, 0, 0.2)",
    dark: "rgba(0, 0, 0, 0.4)",
    default: "light-dark(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4))"
  },
  "box-shadow-color-lighter-layer-1": {
    light: "rgba(0, 0, 0, 0.05)",
    dark: "rgba(0, 0, 0, 0.2)",
    default: "light-dark(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.2))"
  },
  "box-shadow-color-lighter-layer-2": {
    light: "rgba(0, 0, 0, 0.1)",
    dark: "rgba(0, 0, 0, 0.4)",
    default: "light-dark(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4))"
  },
  "table-row-background-color": {
    default: "var(--background-color-canvas)"
  },
  "table-row-background-color-alternate": {
    forcedColors: "var(--background-color-canvas)",
    brand: {
      light: "#f0f0f4",
      dark: "var(--color-gray-80)",
      default: "light-dark(#f0f0f4, var(--color-gray-80))"
    },
    platform: {
      light: "rgba(0,0,0,5%)",
      dark: "rgba(255,255,255,5%)",
      default: "light-dark(rgba(0,0,0,5%), rgba(255,255,255,5%))"
    }
  },
  "text-color": {
    prefersContrast: "CanvasText",
    brand: {
      light: "var(--color-gray-100)",
      dark: "var(--color-gray-05)",
      default: "light-dark(var(--color-gray-100), var(--color-gray-05))"
    },
    platform: {
      default: "currentColor"
    }
  },
  "text-color-deemphasized": {
    default: "color-mix(in srgb, currentColor 69%, transparent)",
    prefersContrast: "inherit"
  },
  "text-color-disabled": {
    default: "color-mix(in srgb, currentColor 40%, transparent)",
    forcedColors: "GrayText"
  },
  "text-color-error": {
    light: "var(--color-red-70)",
    dark: "var(--color-red-20)",
    prefersContrast: "inherit",
    default: "light-dark(var(--color-red-70), var(--color-red-20))"
  }
};

/***/ }),

/***/ 86724:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "tokens-table.36f0d82b0329fdd828ba.css";

/***/ })

}]);
//# sourceMappingURL=tokens-table-stories.61247ca9.iframe.bundle.js.map