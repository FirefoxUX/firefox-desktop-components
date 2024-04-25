"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[5323],{

/***/ 38636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Default": () => (/* binding */ Default),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45717);
/* harmony import */ var _tokens_storybook_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37576);
/* harmony import */ var _tokens_table_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86957);
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
  AccentColor: "8080FF",
  AccentColorText: "#2B2B2B",
  VisitedText: "#8080FF"
};
const THEMED_TABLES = ["attention-dot", "background-color", "border", "border-color", "opacity", "text-color", "color", "outline", "icon-color", "link"];

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
  render() {
    if (!this.tokensData) {
      return "";
    }
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
      <link rel="stylesheet" href=${_tokens_table_css__WEBPACK_IMPORTED_MODULE_2__} />
      <div class="page-wrapper">
        <div class="filters-wrapper">
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
        <div class="tables-wrapper">
          ${Object.entries(this.filteredTokens ?? this.tokensData).map(([tableName, tableEntries]) => {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
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
    "icon-size": this.iconTemplate,
    link: this.linkTemplate,
    margin: this.spaceAndSizeTemplate,
    "min-height": this.spaceAndSizeTemplate,
    outline: this.outlineTemplate,
    padding: this.paddingTemplate,
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
    let templateFn = this.TEMPLATES[category]?.bind(this);
    if (templateFn) {
      return templateFn(category, value, tokenName);
    }
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
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
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
      <div
        class="outline-preview"
        style="${property}: ${HCM_MAP[value] ?? value};"
      ></div>
    `;
  }
  fontTemplate(category, value) {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
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
    let property = tokenName.includes("color") ? "background-color" : "height";
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
      <div
        class="icon-preview"
        style="${property}: ${HCM_MAP[value] ?? value};"
      ></div>
    `;
  }
  linkTemplate(_, value, tokenName) {
    let hasOutline = tokenName.includes("outline");
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
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
    let isSize = tokenName.includes("size") || tokenName.includes("height");
    let items = isSize ? chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
          <div class="item" style="height: ${value};width: ${value};"></div>
        ` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
          <div class="item"></div>
          <div class="item"></div>
        `;
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
      <div
        class="space-size-preview space-size-background"
        style="gap: ${value};"
      >
        ${items}
      </div>
    `;
  }
  paddingTemplate(_, value) {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
      <div class="space-size-background">
        <div class="padding-item outer" style="padding: ${value}">
          <div class="padding-item inner"></div>
        </div>
      </div>
    `;
  }
  getDisplayProperty(category) {
    switch (category) {
      case "attention-dot":
      case "color":
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
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
      <td>
        <div class="preview-wrapper">
          ${type == "preview" ? chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`${this.getTemplate(raw ?? value, tokenName)}` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`<p class="value">${value}</p>
                ${raw ? chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`<p class="value">${raw}</p>` : ""}`}
        </div>
      </td>
    `;
  }
  themeCellTemplate(theme, tokenValue, tokenName) {
    let {
      value,
      raw
    } = this.getDisplayValues(theme, tokenValue);
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
      <td class="${theme}-theme">
        <div class="preview-wrapper">
          ${this.getTemplate(raw ?? value, tokenName)}
          <p class="value">${value}</p>
          ${raw ? chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`<p class="value">${raw}</p>` : ""}
        </div>
      </td>
    `;
  }
  render() {
    let themedTable = THEMED_TABLES.includes(this.name);
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
      <details class="table-wrapper" open="">
        <summary class="table-heading">
          <h3>${this.name}</h3>
        </summary>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              ${themedTable ? chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
                    <th>Light</th>
                    <th>Dark</th>
                    <th>High contrast</th>
                  ` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
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
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`<tr id=${tokenName}>
                <td>${tokenName}</td>
                ${themedTable ? chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
                      ${this.themeCellTemplate("light", value, tokenName)}
                      ${this.themeCellTemplate("dark", value, tokenName)}
                      ${this.themeCellTemplate("hcm", value, tokenName)}
                    ` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
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
  return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`<tables-page></tables-page>`;
};

/***/ }),

/***/ 37576:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storybookTables": () => (/* binding */ storybookTables),
/* harmony export */   "variableLookupTable": () => (/* binding */ variableLookupTable)
/* harmony export */ });
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* DO NOT EDIT this file directly, instead modify design-tokens.json
 * and run `npm run build` to see your changes. */

const storybookTables = {
  "attention-dot": [{
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
      light: "var(--color-red-05)",
      dark: "var(--color-red-80)",
      prefersContrast: "var(--background-color-canvas)",
      default: "light-dark(var(--color-red-05), var(--color-red-80))"
    },
    name: "--background-color-critical"
  }, {
    value: {
      light: "var(--color-blue-05)",
      dark: "var(--color-blue-80)",
      prefersContrast: "var(--background-color-canvas)",
      default: "light-dark(var(--color-blue-05), var(--color-blue-80))"
    },
    name: "--background-color-information"
  }, {
    value: {
      light: "var(--color-green-05)",
      dark: "var(--color-green-80)",
      prefersContrast: "var(--background-color-canvas)",
      default: "light-dark(var(--color-green-05), var(--color-green-80))"
    },
    name: "--background-color-success"
  }, {
    value: {
      light: "var(--color-yellow-05)",
      dark: "var(--color-yellow-80)",
      prefersContrast: "var(--background-color-canvas)",
      default: "light-dark(var(--color-yellow-05), var(--color-yellow-80))"
    },
    name: "--background-color-warning"
  }, {
    value: {
      forcedColors: "ButtonFace",
      brand: {
        default: "color-mix(in srgb, currentColor 7%, transparent)"
      },
      platform: {
        default: "var(--button-bgcolor)"
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
        default: "var(--button-hover-bgcolor)"
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
        default: "var(--button-active-bgcolor)"
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
      light: "var(--color-red-50)",
      dark: "var(--color-red-30)",
      forcedColors: "var(--button-background-color-primary)",
      default: "light-dark(var(--color-red-50), var(--color-red-30))"
    },
    name: "--button-background-color-destructive"
  }, {
    value: {
      light: "var(--color-red-70)",
      dark: "var(--color-red-05)",
      forcedColors: "var(--button-background-color-primary-active)",
      default: "light-dark(var(--color-red-70), var(--color-red-05))"
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
      light: "var(--color-red-60)",
      dark: "var(--color-red-10)",
      forcedColors: "var(--button-background-color-primary-hover)",
      default: "light-dark(var(--color-red-60), var(--color-red-10))"
    },
    name: "--button-background-color-destructive-hover"
  }, {
    value: {
      default: "transparent",
      prefersContrast: "var(--button-background-color)",
      forcedColors: "var(--button-background-color)"
    },
    name: "--button-background-color-ghost"
  }, {
    value: "var(--button-background-color-active)",
    name: "--button-background-color-ghost-active"
  }, {
    value: {
      default: "var(--button-background-color-ghost)",
      forcedColors: "var(--button-background-color-disabled)"
    },
    name: "--button-background-color-ghost-disabled"
  }, {
    value: "var(--button-background-color-hover)",
    name: "--button-background-color-ghost-hover"
  }],
  "border-color": [{
    value: {
      prefersContrast: "var(--text-color)"
    },
    name: "--border-color"
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
    value: "var(--border-radius-small)",
    name: "--button-border-radius"
  }],
  "border-width": [{
    value: "1px",
    name: "--border-width"
  }],
  "box-shadow": [{
    value: "0 1px 4px var(--color-black-a10)",
    name: "--box-shadow-10"
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
        default: "0.867rem"
      },
      platform: {
        default: "unset"
      }
    },
    name: "--font-size-small"
  }, {
    value: {
      brand: {
        default: "1.133rem"
      },
      platform: {
        default: "unset"
      }
    },
    name: "--font-size-large"
  }, {
    value: {
      brand: {
        default: "1.467rem"
      },
      platform: {
        default: "unset"
      }
    },
    name: "--font-size-xlarge"
  }, {
    value: {
      brand: {
        default: "1.6rem"
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
    value: "16px",
    name: "--size-item-small"
  }, {
    value: "28px",
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
        default: "var(--button-color)"
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
      light: "var(--color-gray-05)",
      dark: "var(--color-gray-100)",
      forcedColors: "var(--button-text-color-primary)",
      default: "light-dark(var(--color-gray-05), var(--color-gray-100))"
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
      default: "var(--button-text-color)"
    },
    name: "--button-text-color-ghost"
  }, {
    value: {
      default: "var(--button-text-color-active)"
    },
    name: "--button-text-color-ghost-active"
  }, {
    value: {
      default: "var(--button-text-color-disabled)"
    },
    name: "--button-text-color-ghost-disabled"
  }, {
    value: {
      default: "var(--button-text-color-hover)"
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
        light: "var(--color-gray-05)",
        dark: "var(--color-gray-100)",
        default: "light-dark(var(--color-gray-05), var(--color-gray-100))"
      },
      platform: {
        default: "var(--button-primary-color)"
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
      light: "var(--color-red-50)",
      dark: "var(--color-red-20)",
      prefersContrast: "inherit",
      default: "light-dark(var(--color-red-50), var(--color-red-20))"
    },
    name: "--text-color-error"
  }],
  margin: [{
    value: "var(--space-small)",
    name: "--checkbox-margin-inline"
  }],
  color: [{
    value: "rgba(0, 0, 0, 0.1)",
    name: "--color-black-a10"
  }, {
    value: "#73a7f3",
    name: "--color-blue-30"
  }, {
    value: "#0060df",
    name: "--color-blue-50"
  }, {
    value: "#0250bb",
    name: "--color-blue-60"
  }, {
    value: "#054096",
    name: "--color-blue-70"
  }, {
    value: "#003070",
    name: "--color-blue-80"
  }, {
    value: "#deeafc",
    name: "--color-blue-05"
  }, {
    value: "#aaf2ff",
    name: "--color-cyan-20"
  }, {
    value: "#80ebff",
    name: "--color-cyan-30"
  }, {
    value: "#00ddff",
    name: "--color-cyan-50"
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
    value: "#4dbc87",
    name: "--color-green-30"
  }, {
    value: "#017a40",
    name: "--color-green-50"
  }, {
    value: "#004725",
    name: "--color-green-80"
  }, {
    value: "#d8eedc",
    name: "--color-green-05"
  }, {
    value: "#ffbdc5",
    name: "--color-red-10"
  }, {
    value: "#ff9aa2",
    name: "--color-red-20"
  }, {
    value: "#f37f98",
    name: "--color-red-30"
  }, {
    value: "#d7264c",
    name: "--color-red-50"
  }, {
    value: "#ac1e3d",
    name: "--color-red-60"
  }, {
    value: "#8a1831",
    name: "--color-red-70"
  }, {
    value: "#690f22",
    name: "--color-red-80"
  }, {
    value: "#ffe8e8",
    name: "--color-red-05"
  }, {
    value: "#e49c49",
    name: "--color-yellow-30"
  }, {
    value: "#cd411e",
    name: "--color-yellow-50"
  }, {
    value: "#5a3100",
    name: "--color-yellow-80"
  }, {
    value: "#ffebcd",
    name: "--color-yellow-05"
  }, {
    value: "#ffffff",
    name: "--color-white"
  }, {
    value: {
      forcedColors: "ButtonText",
      brand: {
        light: "var(--color-blue-50)",
        dark: "var(--color-cyan-50)",
        default: "light-dark(var(--color-blue-50), var(--color-cyan-50))"
      },
      platform: {
        default: "var(--button-primary-bgcolor, AccentColor)"
      }
    },
    name: "--color-accent-primary"
  }, {
    value: {
      forcedColors: "SelectedItem",
      brand: {
        light: "var(--color-blue-60)",
        dark: "var(--color-cyan-30)",
        default: "light-dark(var(--color-blue-60), var(--color-cyan-30))"
      },
      platform: {
        default: "var(--button-primary-hover-bgcolor)"
      }
    },
    name: "--color-accent-primary-hover"
  }, {
    value: {
      forcedColors: "var(--color-accent-primary-hover)",
      brand: {
        light: "var(--color-blue-70)",
        dark: "var(--color-cyan-20)",
        default: "light-dark(var(--color-blue-70), var(--color-cyan-20))"
      },
      platform: {
        default: "var(--button-primary-active-bgcolor)"
      }
    },
    name: "--color-accent-primary-active"
  }],
  outline: [{
    value: "var(--focus-outline-width) solid var(--focus-outline-color)",
    name: "--focus-outline"
  }, {
    value: "var(--color-accent-primary)",
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
      light: "var(--color-red-50)",
      dark: "var(--color-red-20)",
      prefersContrast: "var(--border-color)",
      default: "light-dark(var(--color-red-50), var(--color-red-20))"
    },
    name: "--outline-color-error"
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
      light: "var(--color-blue-50)",
      dark: "var(--color-blue-30)",
      prefersContrast: "var(--icon-color)",
      default: "light-dark(var(--color-blue-50), var(--color-blue-30))"
    },
    name: "--icon-color-information"
  }, {
    value: {
      light: "var(--color-green-50)",
      dark: "var(--color-green-30)",
      prefersContrast: "var(--icon-color)",
      default: "light-dark(var(--color-green-50), var(--color-green-30))"
    },
    name: "--icon-color-success"
  }, {
    value: {
      light: "var(--color-yellow-50)",
      dark: "var(--color-yellow-30)",
      prefersContrast: "var(--icon-color)",
      default: "light-dark(var(--color-yellow-50), var(--color-yellow-30))"
    },
    name: "--icon-color-warning"
  }, {
    value: {
      light: "var(--color-red-50)",
      dark: "var(--color-red-30)",
      prefersContrast: "var(--icon-color)",
      default: "light-dark(var(--color-red-50), var(--color-red-30))"
    },
    name: "--icon-color-critical"
  }],
  "icon-size": [{
    value: "var(--size-item-small)",
    name: "--icon-size-default"
  }],
  link: [{
    value: {
      prefersContrast: "LinkText",
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
      prefersContrast: "LinkText",
      brand: {
        default: "var(--color-accent-primary-hover)"
      },
      platform: {
        default: "LinkText"
      }
    },
    name: "--link-color-hover"
  }, {
    value: {
      prefersContrast: "ActiveText",
      brand: {
        default: "var(--color-accent-primary-active)"
      },
      platform: {
        default: "ActiveText"
      }
    },
    name: "--link-color-active"
  }, {
    value: {
      prefersContrast: "var(--link-color)",
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
    light: "var(--color-red-05)",
    dark: "var(--color-red-80)",
    prefersContrast: "var(--background-color-canvas)",
    default: "light-dark(var(--color-red-05), var(--color-red-80))"
  },
  "background-color-information": {
    light: "var(--color-blue-05)",
    dark: "var(--color-blue-80)",
    prefersContrast: "var(--background-color-canvas)",
    default: "light-dark(var(--color-blue-05), var(--color-blue-80))"
  },
  "background-color-success": {
    light: "var(--color-green-05)",
    dark: "var(--color-green-80)",
    prefersContrast: "var(--background-color-canvas)",
    default: "light-dark(var(--color-green-05), var(--color-green-80))"
  },
  "background-color-warning": {
    light: "var(--color-yellow-05)",
    dark: "var(--color-yellow-80)",
    prefersContrast: "var(--background-color-canvas)",
    default: "light-dark(var(--color-yellow-05), var(--color-yellow-80))"
  },
  "border-color": {
    prefersContrast: "var(--text-color)"
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
  "border-width": "1px",
  "box-shadow-10": "0 1px 4px var(--color-black-a10)",
  "button-background-color": {
    forcedColors: "ButtonFace",
    brand: {
      default: "color-mix(in srgb, currentColor 7%, transparent)"
    },
    platform: {
      default: "var(--button-bgcolor)"
    }
  },
  "button-background-color-hover": {
    forcedColors: "SelectedItemText",
    brand: {
      default: "color-mix(in srgb, currentColor 14%, transparent)"
    },
    platform: {
      default: "var(--button-hover-bgcolor)"
    }
  },
  "button-background-color-active": {
    forcedColors: "SelectedItemText",
    brand: {
      default: "color-mix(in srgb, currentColor 21%, transparent)"
    },
    platform: {
      default: "var(--button-active-bgcolor)"
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
    light: "var(--color-red-50)",
    dark: "var(--color-red-30)",
    forcedColors: "var(--button-background-color-primary)",
    default: "light-dark(var(--color-red-50), var(--color-red-30))"
  },
  "button-background-color-destructive-active": {
    light: "var(--color-red-70)",
    dark: "var(--color-red-05)",
    forcedColors: "var(--button-background-color-primary-active)",
    default: "light-dark(var(--color-red-70), var(--color-red-05))"
  },
  "button-background-color-destructive-disabled": {
    default: "var(--button-background-color-destructive)",
    forcedColors: "var(--button-background-color-primary-disabled)"
  },
  "button-background-color-destructive-hover": {
    light: "var(--color-red-60)",
    dark: "var(--color-red-10)",
    forcedColors: "var(--button-background-color-primary-hover)",
    default: "light-dark(var(--color-red-60), var(--color-red-10))"
  },
  "button-background-color-ghost": {
    default: "transparent",
    prefersContrast: "var(--button-background-color)",
    forcedColors: "var(--button-background-color)"
  },
  "button-background-color-ghost-active": "var(--button-background-color-active)",
  "button-background-color-ghost-disabled": {
    default: "var(--button-background-color-ghost)",
    forcedColors: "var(--button-background-color-disabled)"
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
      default: "var(--button-color)"
    }
  },
  "button-text-color-active": {
    default: "var(--button-text-color)",
    forcedColors: "SelectedItem"
  },
  "button-text-color-destructive": {
    light: "var(--color-gray-05)",
    dark: "var(--color-gray-100)",
    forcedColors: "var(--button-text-color-primary)",
    default: "light-dark(var(--color-gray-05), var(--color-gray-100))"
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
    default: "var(--button-text-color)"
  },
  "button-text-color-ghost-active": {
    default: "var(--button-text-color-active)"
  },
  "button-text-color-ghost-disabled": {
    default: "var(--button-text-color-disabled)"
  },
  "button-text-color-ghost-hover": {
    default: "var(--button-text-color-hover)"
  },
  "button-text-color-hover": {
    default: "var(--button-text-color)",
    forcedColors: "SelectedItem"
  },
  "button-text-color-primary": {
    forcedColors: "ButtonFace",
    brand: {
      light: "var(--color-gray-05)",
      dark: "var(--color-gray-100)",
      default: "light-dark(var(--color-gray-05), var(--color-gray-100))"
    },
    platform: {
      default: "var(--button-primary-color)"
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
  "color-black-a10": "rgba(0, 0, 0, 0.1)",
  "color-blue-30": "#73a7f3",
  "color-blue-50": "#0060df",
  "color-blue-60": "#0250bb",
  "color-blue-70": "#054096",
  "color-blue-80": "#003070",
  "color-blue-05": "#deeafc",
  "color-cyan-20": "#aaf2ff",
  "color-cyan-30": "#80ebff",
  "color-cyan-50": "#00ddff",
  "color-gray-50": "#bfbfc9",
  "color-gray-60": "#8f8f9d",
  "color-gray-70": "#5b5b66",
  "color-gray-80": "#23222b",
  "color-gray-90": "#1c1b22",
  "color-gray-100": "#15141a",
  "color-gray-05": "#fbfbfe",
  "color-green-30": "#4dbc87",
  "color-green-50": "#017a40",
  "color-green-80": "#004725",
  "color-green-05": "#d8eedc",
  "color-red-10": "#ffbdc5",
  "color-red-20": "#ff9aa2",
  "color-red-30": "#f37f98",
  "color-red-50": "#d7264c",
  "color-red-60": "#ac1e3d",
  "color-red-70": "#8a1831",
  "color-red-80": "#690f22",
  "color-red-05": "#ffe8e8",
  "color-yellow-30": "#e49c49",
  "color-yellow-50": "#cd411e",
  "color-yellow-80": "#5a3100",
  "color-yellow-05": "#ffebcd",
  "color-white": "#ffffff",
  "color-accent-primary": {
    forcedColors: "ButtonText",
    brand: {
      light: "var(--color-blue-50)",
      dark: "var(--color-cyan-50)",
      default: "light-dark(var(--color-blue-50), var(--color-cyan-50))"
    },
    platform: {
      default: "var(--button-primary-bgcolor, AccentColor)"
    }
  },
  "color-accent-primary-hover": {
    forcedColors: "SelectedItem",
    brand: {
      light: "var(--color-blue-60)",
      dark: "var(--color-cyan-30)",
      default: "light-dark(var(--color-blue-60), var(--color-cyan-30))"
    },
    platform: {
      default: "var(--button-primary-hover-bgcolor)"
    }
  },
  "color-accent-primary-active": {
    forcedColors: "var(--color-accent-primary-hover)",
    brand: {
      light: "var(--color-blue-70)",
      dark: "var(--color-cyan-20)",
      default: "light-dark(var(--color-blue-70), var(--color-cyan-20))"
    },
    platform: {
      default: "var(--button-primary-active-bgcolor)"
    }
  },
  "focus-outline": "var(--focus-outline-width) solid var(--focus-outline-color)",
  "focus-outline-color": "var(--color-accent-primary)",
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
  "font-size-small": {
    brand: {
      default: "0.867rem"
    },
    platform: {
      default: "unset"
    }
  },
  "font-size-large": {
    brand: {
      default: "1.133rem"
    },
    platform: {
      default: "unset"
    }
  },
  "font-size-xlarge": {
    brand: {
      default: "1.467rem"
    },
    platform: {
      default: "unset"
    }
  },
  "font-size-xxlarge": {
    brand: {
      default: "1.6rem"
    },
    platform: {
      default: "unset"
    }
  },
  "font-weight": "normal",
  "font-weight-bold": 600,
  "icon-color": {
    light: "var(--color-gray-70)",
    dark: "var(--color-gray-05)",
    prefersContrast: "var(--text-color)",
    default: "light-dark(var(--color-gray-70), var(--color-gray-05))"
  },
  "icon-color-information": {
    light: "var(--color-blue-50)",
    dark: "var(--color-blue-30)",
    prefersContrast: "var(--icon-color)",
    default: "light-dark(var(--color-blue-50), var(--color-blue-30))"
  },
  "icon-color-success": {
    light: "var(--color-green-50)",
    dark: "var(--color-green-30)",
    prefersContrast: "var(--icon-color)",
    default: "light-dark(var(--color-green-50), var(--color-green-30))"
  },
  "icon-color-warning": {
    light: "var(--color-yellow-50)",
    dark: "var(--color-yellow-30)",
    prefersContrast: "var(--icon-color)",
    default: "light-dark(var(--color-yellow-50), var(--color-yellow-30))"
  },
  "icon-color-critical": {
    light: "var(--color-red-50)",
    dark: "var(--color-red-30)",
    prefersContrast: "var(--icon-color)",
    default: "light-dark(var(--color-red-50), var(--color-red-30))"
  },
  "icon-size-default": "var(--size-item-small)",
  "input-text-min-height": "var(--button-min-height)",
  "link-color": {
    prefersContrast: "LinkText",
    brand: {
      default: "var(--color-accent-primary)"
    },
    platform: {
      default: "LinkText"
    }
  },
  "link-color-hover": {
    prefersContrast: "LinkText",
    brand: {
      default: "var(--color-accent-primary-hover)"
    },
    platform: {
      default: "LinkText"
    }
  },
  "link-color-active": {
    prefersContrast: "ActiveText",
    brand: {
      default: "var(--color-accent-primary-active)"
    },
    platform: {
      default: "ActiveText"
    }
  },
  "link-color-visited": {
    prefersContrast: "var(--link-color)",
    brand: {
      default: "var(--link-color)"
    },
    platform: {
      default: "var(--link-color)"
    }
  },
  "link-focus-outline-offset": "1px",
  "outline-color-error": {
    light: "var(--color-red-50)",
    dark: "var(--color-red-20)",
    prefersContrast: "var(--border-color)",
    default: "light-dark(var(--color-red-50), var(--color-red-20))"
  },
  "size-item-small": "16px",
  "size-item-medium": "28px",
  "size-item-large": "32px",
  "space-xxsmall": "calc(0.5 * var(--space-xsmall))",
  "space-xsmall": "0.267rem",
  "space-small": "calc(2 * var(--space-xsmall))",
  "space-medium": "calc(3 * var(--space-xsmall))",
  "space-large": "calc(4 * var(--space-xsmall))",
  "space-xlarge": "calc(6 * var(--space-xsmall))",
  "space-xxlarge": "calc(8 * var(--space-xsmall))",
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
  "text-color-error": {
    light: "var(--color-red-50)",
    dark: "var(--color-red-20)",
    prefersContrast: "inherit",
    default: "light-dark(var(--color-red-50), var(--color-red-20))"
  }
};

/***/ }),

/***/ 86957:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "tokens-table.b67d114c4ae89a70aeca.css";

/***/ })

}]);
//# sourceMappingURL=tokens-table-stories.f694dd08.iframe.bundle.js.map