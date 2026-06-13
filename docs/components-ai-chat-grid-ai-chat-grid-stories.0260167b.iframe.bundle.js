"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[2773],{

/***/ 20564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AIChatCard: () => (/* binding */ AIChatCard)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_ai_chat_card_ai_chat_card_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29136);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



const DEFAULT_FAVICON = "chrome://global/skin/icons/defaultFavicon.svg";

/**
 * A card component for rendering URLs in Smart Window
 *
 * TODO: Bug 2045156 update with moz-card
 */
class AIChatCard extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    url: {
      type: String
    },
    title: {
      type: String
    },
    favicon: {
      type: String
    },
    thumbnail: {
      type: String
    },
    timestamp: {
      type: String
    },
    thumbnailError: {
      type: Boolean,
      state: true
    }
  };
  get domain() {
    const url = URL.parse(this.url);
    return url?.hostname ?? "";
  }
  willUpdate(changed) {
    if (changed.has("thumbnail")) {
      this.thumbnailError = false;
    }
  }
  renderImage() {
    if (this.thumbnailError) {
      return this.renderFallback();
    }
    if (this.thumbnail) {
      return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<img
        part="thumbnail"
        decoding="async"
        loading="lazy"
        class="thumbnail"
        src=${this.thumbnail}
        role="presentation"
        @error=${() => {
        this.thumbnailError = true;
      }}
      />`;
    }
    if (this.favicon) {
      return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div part="thumbnail" class="thumbnail">
        <div>
          <img
            part="thumbnail"
            decoding="async"
            loading="lazy"
            src=${this.favicon}
            role="presentation"
            @error=${e => {
        e.target.src = DEFAULT_FAVICON;
      }}
          />
        </div>
      </div>`;
    }
    return this.renderFallback();
  }
  renderFavicon() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<img
      class="favicon"
      src=${this.favicon || DEFAULT_FAVICON}
      role="presentation"
      @error=${e => {
      e.target.src = DEFAULT_FAVICON;
    }}
    />`;
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_ai_chat_card_ai_chat_card_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <a class="ai-chat-card" href=${this.url} target="_blank">
        ${this.renderImage()}
        <div class="description">
          <span part="title" class="title">${this.title}</span>
          <div class="meta">
            <div class="site">
              ${this.renderFavicon()}
              <span class="domain" title=${this.domain}>${this.domain}</span>
            </div>
            <span part="timestamp" class="timestamp">${this.timestamp}</span>
          </div>
        </div>
      </a>
    `;
  }
  renderFallback() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <svg
        class="ai-chat-card-thumbnail-fallback"
        preserveAspectRatio="none"
        viewBox="0 0 221 142"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect class="background" width="221" height="142" fill="context-fill" />
        <rect
          class="box"
          x="12"
          y="12"
          width="111"
          height="55"
          rx="4"
          fill="context-fill"
          fill-opacity="context-fill-opacity"
        />
        <rect
          class="box"
          x="131"
          y="22"
          width="67"
          height="5"
          rx="2.5"
          fill="context-fill"
          fill-opacity="context-fill-opacity"
        />
        <rect
          class="box"
          x="131"
          y="32"
          width="78"
          height="5"
          rx="2.5"
          fill="context-fill"
          fill-opacity="context-fill-opacity"
        />
        <rect
          class="box"
          x="131"
          y="42"
          width="60"
          height="5"
          rx="2.5"
          fill="context-fill"
          fill-opacity="context-fill-opacity"
        />
        <rect
          class="box"
          x="131"
          y="52"
          width="67"
          height="5"
          rx="2.5"
          fill="context-fill"
          fill-opacity="context-fill-opacity"
        />
        <rect
          class="box"
          x="12"
          y="85"
          width="67"
          height="5"
          rx="2.5"
          fill="context-fill"
          fill-opacity="context-fill-opacity"
        />
        <rect
          class="box"
          x="12"
          y="95"
          width="78"
          height="5"
          rx="2.5"
          fill="context-fill"
          fill-opacity="context-fill-opacity"
        />
        <rect
          class="box"
          x="12"
          y="105"
          width="60"
          height="5"
          rx="2.5"
          fill="context-fill"
          fill-opacity="context-fill-opacity"
        />
        <rect
          class="box"
          x="12"
          y="115"
          width="67"
          height="5"
          rx="2.5"
          fill="context-fill"
          fill-opacity="context-fill-opacity"
        />
        <rect
          class="box"
          x="98"
          y="75"
          width="111"
          height="55"
          rx="4"
          fill="context-fill"
          fill-opacity="context-fill-opacity"
        />
      </svg>
    `;
  }
}
customElements.define("ai-chat-card", AIChatCard);

/***/ }),

/***/ 29136:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ai-chat-card.67f67b287d20f85aa1da.css";

/***/ }),

/***/ 36376:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ai-chat-grid.4b546fa3e5a7779cf2be.css";

/***/ }),

/***/ 50317:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WithOutSwitchGrid: () => (/* binding */ WithOutSwitchGrid),
/* harmony export */   WithOutSwitchList: () => (/* binding */ WithOutSwitchList),
/* harmony export */   WithSwitch: () => (/* binding */ WithSwitch),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var chrome_browser_content_aiwindow_components_ai_chat_grid_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56388);
/* harmony import */ var chrome_browser_content_aiwindow_components_ai_chat_card_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20564);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */




window.MozXULElement.insertFTLIfNeeded("locales-preview/aiWindow.ftl");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/AI Window/AI Chat Grid",
  component: "ai-chat-grid",
  argTypes: {
    view: {
      control: {
        type: "text"
      }
    },
    showSwitch: {
      control: {
        type: "boolean"
      }
    }
  },
  parameters: {}
});
const Template = ({
  showSwitch,
  view,
  items,
  gridItem,
  rowItem
}) => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <ai-chat-grid
    ?showswitch=${showSwitch}
    view=${view}
    .items=${items}
    .gridItem=${gridItem}
    .rowItem=${rowItem}
  ></ai-chat-grid>
`;
const items = [{
  url: "https://firefox.com",
  title: "Item One",
  favicon: "chrome://branding/content/about-logo.svg",
  thumbnail: "chrome://browser/content/asrouter/assets/fox-with-box-on-cloud.svg",
  timestamp: "Just now"
}, {
  url: "https://firefox.com",
  title: "Item Two",
  favicon: "chrome://branding/content/about-logo.svg",
  thumbnail: "chrome://browser/content/asrouter/assets/fox-with-box-on-cloud.svg",
  timestamp: "Just now"
}, {
  url: "https://firefox.com",
  title: "Item Three",
  favicon: "chrome://branding/content/about-logo.svg",
  thumbnail: "chrome://browser/content/asrouter/assets/fox-with-box-on-cloud.svg",
  timestamp: "Just now"
}, {
  url: "https://firefox.com",
  title: "Item Four",
  favicon: "chrome://branding/content/about-logo.svg",
  thumbnail: "chrome://browser/content/asrouter/assets/fox-with-box-on-cloud.svg",
  timestamp: "Just now"
}, {
  url: "https://firefox.com",
  title: "Item Five",
  favicon: "chrome://branding/content/about-logo.svg",
  thumbnail: "chrome://browser/content/asrouter/assets/fox-with-box-on-cloud.svg",
  timestamp: "Just now"
}, {
  url: "https://firefox.com",
  title: "Item Six",
  favicon: "chrome://branding/content/about-logo.svg",
  thumbnail: "chrome://browser/content/asrouter/assets/fox-with-box-on-cloud.svg",
  timestamp: "Just now"
}];
const WithSwitch = Template.bind({});
WithSwitch.args = {
  showSwitch: true,
  view: "grid",
  gridItem: item => {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<ai-chat-card
      title=${item.title}
      url=${item.url}
      favicon=${item.favicon}
      thumbnail=${item.thumbnail}
      timestamp=${item.timestamp}
    ></ai-chat-card>`;
  },
  rowItem: item => {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
      <style>
        .text-row {
          display: flex;
          gap: 8px;
          justify-content: center;
          align-items: center;

          .title {
            flex-grow: 1;
          }
        }
      </style>
      <div class="text-row">
        <img src=${item.favicon} width="16" height="16" />
        <span class="title">${item.title}</span>
        <span>${item.timestamp}</span>
      </div>
    `;
  },
  items
};
const WithOutSwitchGrid = Template.bind({});
WithOutSwitchGrid.args = {
  showSwitch: false,
  view: "grid",
  gridItem: item => {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<ai-chat-card
      title=${item.title}
      url=${item.url}
      favicon=${item.favicon}
      thumbnail=${item.thumbnail}
      timestamp=${item.timestamp}
    ></ai-chat-card>`;
  },
  items
};
const WithOutSwitchList = Template.bind({});
WithOutSwitchList.args = {
  showSwitch: false,
  view: "list",
  rowItem: item => {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
      <style>
        .text-row {
          display: flex;
          gap: 8px;
          justify-content: center;
          align-items: center;

          .title {
            flex-grow: 1;
          }
        }
      </style>
      <div class="text-row">
        <img src=${item.favicon} width="16" height="16" />
        <span class="title">${item.title}</span>
        <span>${item.timestamp}</span>
      </div>
    `;
  },
  items
};

/***/ }),

/***/ 56388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AIChatGrid: () => (/* binding */ AIChatGrid)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_ai_chat_grid_ai_chat_grid_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36376);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * A grid component to switch between rendering items in a grid or list
 */
class AIChatGrid extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    items: {
      type: Array
    },
    gridItem: {
      type: Function
    },
    rowItem: {
      type: Function
    },
    showSwitch: {
      type: Boolean
    },
    view: {
      type: String,
      reflect: true
    },
    loading: {
      type: Boolean
    }
  };
  get showGrid() {
    return this.view === "grid";
  }
  get showList() {
    return this.view === "list";
  }
  switchView(event) {
    this.view = event.target.id;
  }
  renderGridControls() {
    if (this.showSwitch) {
      return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
        <div class="header">
          <div
            class="list-controls"
            role="group"
            data-l10n-id="aiwindow-ai-chat-grid-view-controls"
          >
            <moz-button
              id="list"
              type="ghost"
              size="small"
              aria-pressed=${this.showList}
              iconsrc="chrome://browser/content/aiwindow/assets/icon-list-view.svg"
              @click=${this.switchView}
              data-l10n-id="aiwindow-ai-chat-grid-list-view"
            ></moz-button>
            <moz-button
              id="grid"
              type="ghost"
              size="small"
              aria-pressed=${this.showGrid}
              iconsrc="chrome://browser/content/aiwindow/assets/icon-grid-view.svg"
              @click=${this.switchView}
              data-l10n-id="aiwindow-ai-chat-grid-grid-view"
            ></moz-button>
          </div>
        </div>
      `;
    }
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing;
  }
  renderItems() {
    const items = this.items || [];
    return items.map(item => {
      switch (this.view) {
        case "list":
          return this.renderItem(item, this.rowItem);
        case "grid":
          return this.renderItem(item, this.gridItem);
      }
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing;
    });
  }
  renderItem(item, itemComponent) {
    if (typeof itemComponent === "function") {
      return itemComponent(item);
    }
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing;
  }
  gridStyle() {
    return `scroll-area ${this.view}`;
  }
  renderLoading() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div part="loading" class="ai-chat-grid loading">
      <img
        class="loading-skeleton"
        src="chrome://browser/content/aiwindow/assets/ai-chat-grid-loading.svg"
        role="presentation"
      />
    </div>`;
  }
  renderGrid() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)` <div class="ai-chat-grid">
      ${this.renderGridControls()}
      <div part="scrollarea-${this.view}" class=${this.gridStyle()}>
        ${this.renderItems()}
      </div>
    </div>`;
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_ai_chat_grid_ai_chat_grid_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      ${this.loading ? this.renderLoading() : this.renderGrid()}
    `;
  }
}
customElements.define("ai-chat-grid", AIChatGrid);

/***/ })

}]);
//# sourceMappingURL=components-ai-chat-grid-ai-chat-grid-stories.0260167b.iframe.bundle.js.map