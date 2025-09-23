"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1020,1294,2310,4722],{

/***/ 9538:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-input-text.924e6291805dbccf217d.css";

/***/ }),

/***/ 21020:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(96540),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 21294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MDXContext: () => (/* reexport safe */ _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.MDXContext),
/* harmony export */   MDXProvider: () => (/* reexport safe */ _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.MDXProvider),
/* harmony export */   useMDXComponents: () => (/* reexport safe */ _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.useMDXComponents),
/* harmony export */   withMDXComponents: () => (/* reexport safe */ _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.withMDXComponents)
/* harmony export */ });
/* harmony import */ var _lib_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97074);



/***/ }),

/***/ 32310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozInputSearch)
/* harmony export */ });
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11540);
/* harmony import */ var chrome_global_content_elements_moz_input_text_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91020);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * A search input custom element.
 *
 * @tagname moz-input-search
 *
 * @property {string} label - The text of the label element
 * @property {string} name - The name of the input control
 * @property {string} value - The value of the input control
 * @property {boolean} disabled - The disabled state of the input control
 * @property {string} description - The text for the description element that helps describe the input control
 * @property {string} supportPage - Name of the SUMO support page to link to.
 * @property {string} placeholder - Text to display when the input has no value.
 * @property {string} ariaLabel - The aria-label text for cases where there is no visible label.
 */
class MozInputSearch extends chrome_global_content_elements_moz_input_text_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
  // The amount of milliseconds that we wait before firing the "search" event.
  static #searchDebounceDelayMs = 500;
  #searchTimer = null;
  #clearSearchTimer() {
    if (this.#searchTimer) {
      clearTimeout(this.#searchTimer);
    }
    this.#searchTimer = null;
  }
  #dispatchSearch() {
    this.dispatchEvent(new CustomEvent("MozInputSearch:search", {
      bubbles: true,
      composed: true,
      detail: {
        query: this.value
      }
    }));
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.#clearSearchTimer();
  }
  inputStylesTemplate() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`${super.inputStylesTemplate()}`;
  }
  handleInput(e) {
    super.handleInput(e);
    this.#clearSearchTimer();
    this.#searchTimer = setTimeout(() => {
      this.#dispatchSearch();
    }, MozInputSearch.#searchDebounceDelayMs);
  }

  // Clears the value and synchronously dispatches a search event if needed.
  clear() {
    this.#clearSearchTimer();
    if (this.value) {
      this.value = this.inputEl.value = "";
      this.#dispatchSearch();
    }
  }
  #hasIcon() {
    // If unspecified, search inputs still have a default search icon.
    return this.iconSrc === undefined || !!this.iconSrc;
  }
  inputTemplate() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
      <input
        id="input"
        class=${this.#hasIcon() ? "with-icon" : ""}
        type="search"
        name=${this.name}
        .value=${this.value}
        ?disabled=${this.disabled || this.parentDisabled}
        accesskey=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(this.accessKey)}
        placeholder=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(this.placeholder)}
        aria-label=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(this.ariaLabel ?? undefined)}
        aria-describedby="description"
        @input=${this.handleInput}
        @change=${this.redispatchEvent}
      />
    `;
  }
}
customElements.define("moz-input-search", MozInputSearch);

/***/ }),

/***/ 68910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MDXContext: () => (/* reexport safe */ _mdx_js_react__WEBPACK_IMPORTED_MODULE_0__.MDXContext),
/* harmony export */   MDXProvider: () => (/* reexport safe */ _mdx_js_react__WEBPACK_IMPORTED_MODULE_0__.MDXProvider),
/* harmony export */   useMDXComponents: () => (/* reexport safe */ _mdx_js_react__WEBPACK_IMPORTED_MODULE_0__.useMDXComponents),
/* harmony export */   withMDXComponents: () => (/* reexport safe */ _mdx_js_react__WEBPACK_IMPORTED_MODULE_0__.withMDXComponents)
/* harmony export */ });
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21294);



/***/ }),

/***/ 74848:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(21020);
} else {}


/***/ }),

/***/ 91020:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozInputText)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_input_text_moz_input_text_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9538);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11540);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48334);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * A text input custom element.
 *
 * @tagname moz-input-text
 * @property {string} label - The text of the label element
 * @property {string} name - The name of the input control
 * @property {string} value - The value of the input control
 * @property {boolean} disabled - The disabled state of the input control
 * @property {boolean} readonly - The readonly state of the input control
 * @property {string} iconSrc - The src for an optional icon
 * @property {string} description - The text for the description element that helps describe the input control
 * @property {string} supportPage - Name of the SUMO support page to link to.
 * @property {string} placeholder - Text to display when the input has no value.
 */
class MozInputText extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozBaseInputElement {
  static properties = {
    placeholder: {
      type: String,
      fluent: true
    },
    readonly: {
      type: Boolean,
      reflect: true
    }
  };
  static inputLayout = "block";
  constructor() {
    super();
    this.value = "";
    this.readonly = false;
  }
  inputStylesTemplate() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<link
      rel="stylesheet"
      href="${toolkit_content_widgets_moz_input_text_moz_input_text_css__WEBPACK_IMPORTED_MODULE_0__}"
    />`;
  }
  handleInput(e) {
    this.value = e.target.value;
  }
  inputTemplate(options = {}) {
    let {
      type = "text",
      classes,
      styles,
      inputValue
    } = options;
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <input
        id="input"
        type=${type}
        class=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(classes)}
        style=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(styles)}
        name=${this.name}
        .value=${inputValue || this.value}
        ?disabled=${this.disabled || this.parentDisabled}
        ?readonly=${this.readonly}
        accesskey=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.accessKey)}
        placeholder=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.placeholder)}
        aria-label=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.ariaLabel ?? undefined)}
        aria-describedby="description"
        @input=${this.handleInput}
        @change=${this.redispatchEvent}
      />
    `;
  }
}
customElements.define("moz-input-text", MozInputText);

/***/ }),

/***/ 96365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __page: () => (/* binding */ __page),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _home_runner_work_firefox_desktop_components_firefox_desktop_components_gecko_browser_components_storybook_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68910);
/* harmony import */ var _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85164);
/* harmony import */ var toolkit_widgets_moz_input_search_moz_input_search_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32310);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74848);









function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    code: "code",
    h2: "h2",
    h3: "h3",
    ul: "ul",
    li: "li",
    a: "a",
    pre: "pre"
  }, (0,_home_runner_work_firefox_desktop_components_firefox_desktop_components_gecko_browser_components_storybook_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Meta, {
      title: "UI Widgets/ Input Search/README",
      parameters: {
        previewTabs: {
          canvas: {
            hidden: true
          }
        },
        viewMode: "docs"
      }
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h1, {
      id: "mozinputsearch",
      children: "MozInputSearch"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "moz-input-search"
      }), " is a reusable component that is used for search inputs."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Canvas, {
      withSource: "none",
      mdxSource: "<with-common-styles><moz-input-search style={{ width: \"500px\" }} /></with-common-styles>",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("with-common-styles", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("moz-input-search", {
          style: {
            width: "500px"
          }
        })
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2, {
      id: "usage-guidelines",
      children: "Usage guidelines"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3, {
      id: "when-to-use",
      children: "When to use"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.ul, {
      children: ["\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.li, {
        children: ["Use ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
          children: "moz-input-search"
        }), " when you need a search input to help users filter through the relevant information."]
      }), "\n"]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2, {
      id: "code",
      children: "Code"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p, {
      children: ["The source for ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "moz-input-search"
      }), " can be found under ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.a, {
        href: "https://searchfox.org/mozilla-central/source/toolkit/content/widgets/moz-input-search",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "toolkit/content/widgets/moz-input-search"
      })]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.h2, {
      id: "how-to-use-moz-input-search",
      children: ["How to use ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "moz-input-search"
      })]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3, {
      id: "importing-the-element",
      children: "Importing the element"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p, {
      children: ["Like other custom elements, you should usually be able to rely on ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "moz-input-search"
      }), " getting lazy-loaded at the time of first use.\nSee ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.a, {
        href: "https://firefox-source-docs.mozilla.org/browser/components/storybook/docs/README.reusable-widgets.stories.html#using-new-design-system-components",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "this documentation"
      }), " for more information on using design system custom elements."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.h3, {
      id: "setting-the-label",
      children: ["Setting the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "label"
      })]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p, {
      children: ["Providing a label for the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "moz-input-search"
      }), " component is crucial for usability and accessibility:"]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.ul, {
      children: ["\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.li, {
        children: "Helps users understand the purpose of this search input."
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.li, {
        children: "Improves accessibility by ensuring screen readers can announce the function of the search input."
      }), "\n"]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p, {
      children: ["To set a label, use the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "label"
      }), " attribute.\nIn general, the label should be controlled by Fluent."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        className: "language-html",
        children: "<moz-input-search label=\"Label text not using Fluent\"></moz-input-search>\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Canvas, {
      withSource: "none",
      mdxSource: "<with-common-styles><div style={{ width: \"500px\" }}><moz-input-search label=\"Label text not using Fluent\" /></div></with-common-styles>",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("with-common-styles", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          style: {
            width: '500px'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("moz-input-search", {
            label: "Label text not using Fluent"
          })
        })
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.h3, {
      id: "setting-the-aria-label",
      children: ["Setting the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "aria-label"
      })]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p, {
      children: ["If your use case calls for no visible label, then providing an ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "aria-label"
      }), " for the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "moz-input-search"
      }), " is required for usability and accessibility:"]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.ul, {
      children: ["\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.li, {
        children: "Improves accessibility by ensuring screen readers can announce the function of the search input."
      }), "\n"]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p, {
      children: ["To set the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "aria-label"
      }), ", use the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "aria-label"
      }), " attribute.\nIn general, the aria-label should be controlled by Fluent."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        className: "language-html",
        children: "<moz-input-search aria-label=\"non-visible label text not using Fluent\"></moz-input-search>\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Canvas, {
      withSource: "none",
      mdxSource: "<with-common-styles><div style={{ width: \"500px\" }}><moz-input-search aria-label=\"non-visible label text not using Fluent\" /></div></with-common-styles>",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("with-common-styles", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          style: {
            width: '500px'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("moz-input-search", {
            "aria-label": "non-visible label text not using Fluent"
          })
        })
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.h3, {
      id: "setting-the-description",
      children: ["Setting the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "description"
      })]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p, {
      children: ["In order to set a description, use the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "description"
      }), " attribute.\nIn general, the description should be controlled by Fluent.\nThis is the preferred way of setting descriptions since it ensures consistency across multiple ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "moz-input-search"
      }), " elements."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        className: "language-html",
        children: "<moz-input-search\n  label=\"Label text not using Fluent\"\n  description=\"Description text not using Fluent\">\n</moz-input-search>\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Canvas, {
      withSource: "none",
      mdxSource: "<with-common-styles><div style={{ width: \"500px\" }}><moz-input-search label=\"Label text not using Fluent\" description=\"Description text not using Fluent\" /></div></with-common-styles>",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("with-common-styles", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          style: {
            width: '500px'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("moz-input-search", {
            label: "Label text not using Fluent",
            description: "Description text not using Fluent"
          })
        })
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p, {
      children: ["However ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "moz-input-search"
      }), " does support a ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "slot"
      }), " element if your use case is more complex."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        className: "language-html",
        children: "<moz-input-search label=\"Label text not using Fluent\">\n  <span slot=\"description\">A more complex description via <slot></span>\n</moz-input-search>\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Canvas, {
      withSource: "none",
      mdxSource: "<with-common-styles><div style={{ width: \"500px\" }}><moz-input-search label=\"Label text not using Fluent\"><span slot=\"description\">{\"A more complex description via \"}<code>{\"<slot>\"}</code></span></moz-input-search></div></with-common-styles>",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("with-common-styles", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          style: {
            width: '500px'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("moz-input-search", {
            label: "Label text not using Fluent",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
              slot: "description",
              children: ["A more complex description via ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
                children: "<slot>"
              })]
            })
          })
        })
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.h3, {
      id: "setting-the-value",
      children: ["Setting the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "value"
      })]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p, {
      children: ["The ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "value"
      }), " attribute of ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "moz-input-search"
      }), " sets the initial search term displayed in the search input field.\nWhen this search term is modified, the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "value"
      }), " is updated with the modified text.\nNote: do not use ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "value"
      }), " as a placeholder!\nUse the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "placeholder"
      }), " attribute instead if you need placeholder text."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        className: "language-html",
        children: "<moz-input-search label=\"Search preferences\" value=\"privacy\"></moz-input-search>\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Canvas, {
      withSource: "none",
      mdxSource: "<with-common-styles><div style={{ width: \"500px\" }}><moz-input-search label=\"Search preferences\" value=\"privacy\" /></div></with-common-styles>",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("with-common-styles", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          style: {
            width: '500px'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("moz-input-search", {
            label: "Search preferences",
            value: "privacy"
          })
        })
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.h3, {
      id: "setting-the-placeholder",
      children: ["Setting the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "placeholder"
      })]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p, {
      children: ["The ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "placeholder"
      }), " attribute of ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "moz-input-search"
      }), " sets the placeholder text for the search input field.\nIn general, the placeholder should be controlled by Fluent.\nThis is the preferred way of setting placeholders since it ensures consistency across multiple ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "moz-input-search"
      }), " elements."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        className: "language-html",
        children: "<moz-input-search label=\"Search preferences\" placeholder=\"Enter search term\"></moz-input-search>\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Canvas, {
      withSource: "none",
      mdxSource: "<with-common-styles><div style={{ width: \"500px\" }}><moz-input-search label=\"Search preferences\" placeholder=\"Enter search term\" /></div></with-common-styles>",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("with-common-styles", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          style: {
            width: '500px'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("moz-input-search", {
            label: "Search preferences",
            placeholder: "Enter search term"
          })
        })
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.h3, {
      id: "setting-the-support-page",
      children: ["Setting the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "support-page"
      })]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p, {
      children: ["The ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "support-page"
      }), " attribute of ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "moz-input-search"
      }), " sets the SUMO page to link out to for more information.\nUse the SUMO slug for the value of this attribute."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        className: "language-html",
        children: "<moz-input-search label=\"Search\" placeholder=\"Search terms\" support-page=\"addons\"></moz-input-search>\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Canvas, {
      withSource: "none",
      mdxSource: "<with-common-styles><div style={{ width: \"500px\" }}><moz-input-search label=\"Search\" placeholder=\"Search terms\" support-page=\"addons\" /></div></with-common-styles>",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("with-common-styles", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          style: {
            width: '500px'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("moz-input-search", {
            label: "Search",
            placeholder: "Search terms",
            "support-page": "addons"
          })
        })
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.h3, {
      id: "setting-the-accesskey",
      children: ["Setting the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "accesskey"
      })]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p, {
      children: ["The ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "accesskey"
      }), " attribute of ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "moz-input-search"
      }), " defines a keyboard shortcut for the search input."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        className: "language-html",
        children: "<moz-input-search label=\"Search\" placeholder=\"Search terms\" accesskey=\"S\"></moz-input-search>\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Canvas, {
      withSource: "none",
      mdxSource: "<with-common-styles><div style={{ width: \"500px\" }}><moz-input-search label=\"Search\" placeholder=\"Search terms\" accesskey=\"S\" /></div></with-common-styles>",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("with-common-styles", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          style: {
            width: '500px'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("moz-input-search", {
            label: "Search",
            placeholder: "Search terms",
            accesskey: "S"
          })
        })
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.h3, {
      id: "setting-the-disabled-state",
      children: ["Setting the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "disabled"
      }), " state"]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p, {
      children: ["In order to disable the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "moz-input-search"
      }), ", add ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "disabled=\"\""
      }), " or ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "disabled"
      }), " to the markup."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        className: "language-html",
        children: "<moz-input-search label=\"Search\" disabled></moz-input-search>\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Canvas, {
      withSource: "none",
      mdxSource: "<with-common-styles><div style={{ width: \"500px\" }}><moz-input-search label=\"Search\" disabled /></div></with-common-styles>",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("with-common-styles", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          style: {
            width: '500px'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("moz-input-search", {
            label: "Search",
            disabled: true
          })
        })
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3, {
      id: "fluent-usage",
      children: "Fluent usage"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p, {
      children: ["The ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "label"
      }), ", ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "aria-label"
      }), ", ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "description"
      }), ", ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "placeholder"
      }), ", and ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "accesskey"
      }), " attributes of ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "moz-input-search"
      }), " will generally be provided via ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.a, {
        href: "https://mozilla-l10n.github.io/localizer-documentation/tools/fluent/basic_syntax.html#attributes",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "Fluent attributes"
      }), ".\nThe relevant ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "data-l10n-attrs"
      }), " are set automatically, so supply a ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "data-l10n-id"
      }), " to get things working, as you would with any other element."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p, {
      children: "For example, if you have the following Fluent messages:"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "moz-input-search-label =\n  .label = Label text\nmoz-input-search-label-placeholder =\n  .label = Label text\n  .placeholder = Placeholder text\nmoz-input-search-label-description-placeholder =\n  .label = Label text\n  .description = Description text\n  .placeholder = Placeholder text\nmoz-input-search-with-accesskey =\n  .label = Label text\n  .accesskey = L\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p, {
      children: ["you can use those messages to set text and attributes on the different ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "moz-input-search"
      }), " elements as follows:"]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        className: "language-html",
        children: "<moz-input-search data-l10n-id=\"moz-input-search-label\"></moz-input-search>\n<moz-input-search data-l10n-id=\"moz-input-search-label-placeholder\"></moz-input-search>\n<moz-input-search data-l10n-id=\"moz-input-search-label-description-placeholder\"></moz-input-search>\n<moz-input-search data-l10n-id=\"moz-input-search-with-accesskey\"></moz-input-search>\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2, {
      id: "args-table",
      children: "Args Table"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.ArgTypes, {
      of: "moz-input-search"
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = Object.assign({}, (0,_home_runner_work_firefox_desktop_components_firefox_desktop_components_gecko_browser_components_storybook_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components);
  return MDXLayout ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(MDXLayout, {
    ...props,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
/* ========= */
const __page = () => {
  throw new Error("Docs-only story");
};
__page.parameters = {
  docsOnly: true
};
const componentMeta = {
  title: 'UI Widgets/ Input Search/README',
  parameters: {
    previewTabs: {
      canvas: {
        hidden: true
      }
    },
    viewMode: "docs"
  },
  tags: ['stories-mdx'],
  includeStories: ["__page"]
};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = {
  ...(componentMeta.parameters.docs || {}),
  page: MDXContent
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (componentMeta);

/***/ }),

/***/ 97074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MDXContext: () => (/* binding */ MDXContext),
/* harmony export */   MDXProvider: () => (/* binding */ MDXProvider),
/* harmony export */   useMDXComponents: () => (/* binding */ useMDXComponents),
/* harmony export */   withMDXComponents: () => (/* binding */ withMDXComponents)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/**
 * @typedef {import('react').ReactNode} ReactNode
 * @typedef {import('mdx/types.js').MDXComponents} Components
 *
 * @typedef Props
 *   Configuration.
 * @property {Components | MergeComponents | null | undefined} [components]
 *   Mapping of names for JSX components to React components.
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context.
 * @property {ReactNode | null | undefined} [children]
 *   Children.
 *
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Components} currentComponents
 *   Current components from the context.
 * @returns {Components}
 *   Merged components.
 */



/**
 * @type {import('react').Context<Components>}
 * @deprecated
 *   This export is marked as a legacy feature.
 *   That means it’s no longer recommended for use as it might be removed
 *   in a future major release.
 *
 *   Please use `useMDXComponents` to get context based components and
 *   `MDXProvider` to set context based components instead.
 */
const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({})

/**
 * @param {import('react').ComponentType<any>} Component
 * @deprecated
 *   This export is marked as a legacy feature.
 *   That means it’s no longer recommended for use as it might be removed
 *   in a future major release.
 *
 *   Please use `useMDXComponents` to get context based components instead.
 */
function withMDXComponents(Component) {
  return boundMDXComponent

  /**
   * @param {Record<string, unknown> & {components?: Components | null | undefined}} props
   * @returns {JSX.Element}
   */
  function boundMDXComponent(props) {
    const allComponents = useMDXComponents(props.components)
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, {...props, allComponents})
  }
}

/**
 * Get current components from the MDX Context.
 *
 * @param {Components | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that takes the current
 *   components and filters/merges/changes them.
 * @returns {Components}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    // Custom merge via a function prop
    if (typeof components === 'function') {
      return components(contextComponents)
    }

    return {...contextComponents, ...components}
  }, [contextComponents, components])
}

/** @type {Components} */
const emptyObject = {}

/**
 * Provider for MDX context
 *
 * @param {Props} props
 * @returns {JSX.Element}
 */
function MDXProvider({components, children, disableParentContext}) {
  /** @type {Components} */
  let allComponents

  if (disableParentContext) {
    allComponents =
      typeof components === 'function'
        ? components({})
        : components || emptyObject
  } else {
    allComponents = useMDXComponents(components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    children
  )
}


/***/ })

}]);
//# sourceMappingURL=moz-input-search-README-stories-md.11e5340b.iframe.bundle.js.map