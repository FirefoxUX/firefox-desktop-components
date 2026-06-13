"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[7785],{

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

/***/ 96701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WithImage: () => (/* binding */ WithImage),
/* harmony export */   WithOutImage: () => (/* binding */ WithOutImage),
/* harmony export */   WithOutImageOrFavicon: () => (/* binding */ WithOutImageOrFavicon),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var chrome_browser_content_aiwindow_components_ai_chat_card_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20564);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/AI Window/AI Chat Card",
  component: "ai-chat-card",
  argTypes: {
    title: {
      control: {
        type: "text"
      }
    },
    url: {
      control: {
        type: "text"
      }
    }
  },
  parameters: {}
});
const Template = ({
  url,
  title,
  favicon,
  thumbnail,
  timestamp
}) => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <ai-chat-card
    url=${url}
    title=${title}
    favicon=${favicon}
    thumbnail=${thumbnail}
    timestamp=${timestamp}
  ></ai-chat-card>
`;
const WithImage = Template.bind({});
WithImage.args = {
  title: "A History URL",
  url: "https://www.sitewithareallylongname.com/some/image",
  favicon: "chrome://branding/content/about-logo.svg",
  thumbnail: "chrome://browser/content/asrouter/assets/fox-with-box-on-cloud.svg",
  timestamp: "Just now"
};
const WithOutImage = Template.bind({});
WithOutImage.args = {
  title: "A History URL",
  url: "https://www.site.com/some/image",
  favicon: "chrome://branding/content/about-logo.svg",
  timestamp: "Just now"
};
const WithOutImageOrFavicon = Template.bind({});
WithOutImageOrFavicon.args = {
  title: "A History URL",
  url: "https://www.site.com/some/image",
  timestamp: "Just now"
};

/***/ })

}]);
//# sourceMappingURL=components-ai-chat-card-ai-chat-card-stories.a2e07ed5.iframe.bundle.js.map