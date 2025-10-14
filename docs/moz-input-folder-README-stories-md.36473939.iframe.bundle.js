"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1020,1294,3814,9402],{

/***/ 9402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozInputFolder)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_input_folder_moz_input_folder_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42572);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11540);
/* harmony import */ var chrome_global_content_elements_moz_input_text_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91020);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



window.MozXULElement?.insertFTLIfNeeded("toolkit/global/mozInputFolder.ftl");

/**
 * An input folder custom element.
 *
 * @tagname moz-input-folder
 *
 * @property {string} label - The text of the label element
 * @property {string} name - The name of the input control
 * @property {string} value - The path to the selected folder
 * @property {boolean} disabled - The disabled state of the component
 * @property {string} iconSrc - The src for an optional icon in the label
 * @property {string} description - The text for the description element that helps describe the input control
 * @property {string} supportPage - Name of the SUMO support page to link to.
 * @property {string} placeholder - Text to display when the input has no value.
 * @property {string} displayValue - The value of the input control if it's different from the component value.
 * @property {string} dialogTitle - Text to display as a file picker dialog title.
 * @property {object} folder - The file object that represents the selected folder.
 */

class MozInputFolder extends chrome_global_content_elements_moz_input_text_mjs__WEBPACK_IMPORTED_MODULE_2__["default"] {
  #folder;
  static properties = {
    displayValue: {
      type: String
    },
    dialogTitle: {
      type: String,
      fluent: true
    },
    _inputIconSrc: {
      type: String,
      state: true
    }
  };
  static queries = {
    chooseFolderButtonEl: "#choose-folder-button"
  };
  constructor() {
    super();
    this.readonly = true;
    this.displayValue = "";
    this.dialogTitle = "";
    this._inputIconSrc = "";
    this.#folder = null;
  }
  willUpdate(changedProperties) {
    super.willUpdate(changedProperties);
    if (changedProperties.has("readonly")) {
      this.readonly = true;
    }
    if (changedProperties.has("value")) {
      if (this.value == "") {
        this.#folder = null;
        this._inputIconSrc = "";
      } else if (!this.#folder || this.value != this.#folder.path) {
        let currentValue = this.value;
        this.getFolderFromPath(this.value).then(folder => {
          if (this.value === currentValue) {
            this.#folder = folder;
            this._inputIconSrc = this.getInputIconSrc(this.#folder);
          }
        });
      } else {
        this._inputIconSrc = this.getInputIconSrc(this.#folder);
      }
    }
  }
  get folder() {
    return this.#folder;
  }
  hasServices() {
    // Safely check for Services without throwing a ReferenceError.
    return typeof Services !== "undefined";
  }
  async getFolderFromPath(path) {
    let folder = null;
    try {
      folder = await IOUtils.getDirectory(path);
    } catch (e) {
      //Not a valid path
      console.error("The error occurred while attempting to get directory from the moz-input-folder value");
    }
    return folder;
  }
  getInputIconSrc(folder) {
    if (!folder || !this.hasServices()) {
      let defaultIconSrc = "chrome://global/skin/icons/folder.svg";
      return defaultIconSrc;
    }
    let fph = Services.io.getProtocolHandler("file").QueryInterface(Ci.nsIFileProtocolHandler);
    let iconUrlSpec = fph.getURLSpecFromDir(folder);
    let inputIconSrc = "moz-icon://" + iconUrlSpec + "?size=16";
    return inputIconSrc;
  }
  async openFolderPicker() {
    let folderPicker = Cc["@mozilla.org/filepicker;1"].createInstance(Ci.nsIFilePicker);
    let mode = Ci.nsIFilePicker.modeGetFolder;
    folderPicker.init(window.browsingContext, this.dialogTitle, mode);
    folderPicker.appendFilters(Ci.nsIFilePicker.filterAll);
    if (this.#folder && (await IOUtils.exists(this.#folder.path))) {
      folderPicker.displayDirectory = this.#folder;
    }
    let result = await new Promise(resolve => folderPicker.open(resolve));
    if (result != Ci.nsIFilePicker.returnOK || this.value == folderPicker.file.path) {
      if (Cu.isInAutomation) {
        // Dispatch a test-only event so we can tell that the dialog is closing.
        this.dispatchEvent(new CustomEvent("moz-input-folder-picker-close"));
      }
      return;
    }
    this.#folder = folderPicker.file;
    this.value = this.#folder.path;
    this.dispatchEvent(new Event("input", {
      bubbles: true
    }));
    this.dispatchEvent(new Event("change", {
      bubbles: true
    }));
  }
  inputStylesTemplate() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<link
      rel="stylesheet"
      href="${toolkit_content_widgets_moz_input_folder_moz_input_folder_css__WEBPACK_IMPORTED_MODULE_0__}"
    />`;
  }
  inputTemplate() {
    let inputValue = this.displayValue || this.value;
    let classes, styles;
    if (this._inputIconSrc) {
      classes = (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.classMap)({
        "with-icon": true
      });
      styles = (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.styleMap)({
        "--input-background-icon": `url(${this._inputIconSrc})`
      });
    }
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <div class="container">
        ${super.inputTemplate({
      classes,
      styles,
      inputValue
    })}
        <moz-button
          id="choose-folder-button"
          data-l10n-id="choose-folder-button"
          data-l10n-attrs="accesskey"
          ?disabled=${this.disabled || this.parentDisabled}
          @click=${this.openFolderPicker}
        ></moz-button>
      </div>
    `;
  }
}
customElements.define("moz-input-folder", MozInputFolder);

/***/ }),

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

/***/ 42572:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-input-folder.33d421f1877bd4639217.css";

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

/***/ 88021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __page: () => (/* binding */ __page),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _home_runner_work_firefox_desktop_components_firefox_desktop_components_gecko_browser_components_storybook_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68910);
/* harmony import */ var _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85164);
/* harmony import */ var toolkit_widgets_moz_input_folder_moz_input_folder_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9402);
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
      title: "UI Widgets/ Input Folder/README",
      parameters: {
        previewTabs: {
          canvas: {
            hidden: true
          }
        },
        viewMode: "docs"
      }
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h1, {
      id: "mozinputfolder",
      children: "MozInputFolder"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "moz-input-folder"
      }), " is a reusable component that provides the ability to browse and pick a folder from the file system. It displays the path and icon of the selected folder to the user. It can also be configured to display custom text if needed."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Canvas, {
      withSource: "none",
      mdxSource: "<with-common-styles><div style={{ width: \"500px\" }} onClickCapture={e => e.stopPropagation()}><moz-input-folder label=\"Save files to\" placeholder=\"Select folder\" /></div></with-common-styles>",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("with-common-styles", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          style: {
            width: "500px"
          },
          onClickCapture: e => e.stopPropagation(),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("moz-input-folder", {
            label: "Save files to",
            placeholder: "Select folder"
          })
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
          children: "moz-input-folder"
        }), " when you want to allow a user to select a directory."]
      }), "\n"]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3, {
      id: "when-not-to-use",
      children: "When not to use"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.ul, {
      children: ["\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.li, {
        children: "When users need to select individual files rather than folders."
      }), "\n"]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2, {
      id: "code",
      children: "Code"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p, {
      children: ["The source for ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "moz-input-folder"
      }), " can be found under ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.a, {
        href: "https://searchfox.org/mozilla-central/source/toolkit/content/widgets/moz-input-folder",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "toolkit/content/widgets/moz-input-folder/"
      })]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.h2, {
      id: "how-to-use-moz-input-folder",
      children: ["How to use ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "moz-input-folder"
      })]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3, {
      id: "importing-the-element",
      children: "Importing the element"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p, {
      children: ["Like other custom elements, you should usually be able to rely on ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "moz-input-folder"
      }), " getting lazy loaded at the time of first use.\nSee ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.a, {
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
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p, {
      children: "Providing a label for the moz-input-folder component is crucial for usability and accessibility:"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.ul, {
      children: ["\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.li, {
        children: "Helps users understand the purpose of the folder picker."
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.li, {
        children: "Improves accessibility by ensuring screen readers can announce the function of the input."
      }), "\n"]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p, {
      children: ["To set a label, use the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "label"
      }), " attribute. In general, the label should be controlled by Fluent."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        className: "language-html",
        children: "<moz-input-folder label=\"Label text\"></moz-input-folder>\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Canvas, {
      withSource: "none",
      mdxSource: "<with-common-styles><div style={{ width: \"500px\" }} onClickCapture={e => e.stopPropagation()}><moz-input-folder label=\"Label text\" /></div></with-common-styles>",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("with-common-styles", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          style: {
            width: '500px'
          },
          onClickCapture: e => e.stopPropagation(),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("moz-input-folder", {
            label: "Label text"
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
      }), " attribute.\nIn general, the description should be controlled by Fluent. This is the the preferred way of setting  descriptions since it ensures consistency across instances of ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "moz-input-folder"
      }), "."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        className: "language-html",
        children: "<moz-input-folder label=\"Label\" description=\"Description text\"></moz-input-folder>\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Canvas, {
      withSource: "none",
      mdxSource: "<with-common-styles><div style={{ width: \"500px\" }} onClickCapture={e => e.stopPropagation()}><moz-input-folder label=\"Label\" description=\"Description text\" /></div></with-common-styles>",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("with-common-styles", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          style: {
            width: '500px'
          },
          onClickCapture: e => e.stopPropagation(),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("moz-input-folder", {
            label: "Label",
            description: "Description text"
          })
        })
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p, {
      children: ["However, ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "moz-input-folder"
      }), " does support a ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "slot"
      }), " element if your use case is more complex."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        className: "language-html",
        children: "<moz-input-folder label=\"Label\">\n  <span slot=\"description\">A more complex description</span>\n</moz-input-folder>\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Canvas, {
      withSource: "none",
      mdxSource: "<with-common-styles><div style={{ width: \"500px\" }} onClickCapture={e => e.stopPropagation()}><moz-input-folder label=\"Label\"><span slot=\"description\">{\"A more \"}<b>{\"complex\"}</b>{\" description\"}</span></moz-input-folder></div></with-common-styles>",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("with-common-styles", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          style: {
            width: "500px"
          },
          onClickCapture: e => e.stopPropagation(),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("moz-input-folder", {
            label: "Label",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
              slot: "description",
              children: ["A more ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b", {
                children: "complex"
              }), " description"]
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
        children: "moz-input-folder"
      }), " sets the initial folder path displayed in the input field. When a new folder is selected, the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "value"
      }), " gets updated with that folder's path."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        className: "language-html",
        children: "<moz-input-folder label=\"Save files to:\" value=\"/User/Downloads\"></moz-input-folder>\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Canvas, {
      withSource: "none",
      mdxSource: "<with-common-styles><div style={{ width: \"500px\" }} onClickCapture={e => e.stopPropagation()}><moz-input-folder label=\"Save files to:\" value=\"/User/Downloads\" /></div></with-common-styles>",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("with-common-styles", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          style: {
            width: '500px'
          },
          onClickCapture: e => e.stopPropagation(),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("moz-input-folder", {
            label: "Save files to:",
            value: "/User/Downloads"
          })
        })
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.h3, {
      id: "setting-the-displayvalue",
      children: ["Setting the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "displayValue"
      })]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p, {
      children: ["Use ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "displayValue"
      }), " property to display something other than a folder path in the input element. Listen to the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "moz-input-folder"
      }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "change"
      }), " event to set a ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "displayValue"
      }), " after the new folder was selected. The ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "folder"
      }), " property represents the selected folder in the file system (", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "nsIFile"
      }), " object). You can use properties of the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "folder"
      }), " when setting a ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "displayValue"
      }), " (e.g., ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "folder.path"
      }), ", ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "folder.displayName"
      }), " or ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "folder.leafName"
      }), ")."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        className: "language-html",
        children: "<moz-input-folder label=\"Save files to:\" value=\"/User/Downloads\" displayvalue=\"Downloads\"></moz-input-folder>\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        className: "language-js",
        children: "// Code example\nlet mozInputFolder = document.querySelector(\"moz-input-folder\");\nmozInputFolder.addEventListener(\n  \"change\",\n  () => {\n    mozInputFolder.displayValue = mozInputFolder.folder.displayName;\n  }\n);\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Canvas, {
      withSource: "none",
      mdxSource: "<with-common-styles><div style={{ width: \"500px\" }} onClickCapture={e => e.stopPropagation()}><moz-input-folder label=\"Save files to:\" value=\"/User/Downloads\" displayvalue=\"Downloads\" /></div></with-common-styles>",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("with-common-styles", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          style: {
            width: '500px'
          },
          onClickCapture: e => e.stopPropagation(),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("moz-input-folder", {
            label: "Save files to:",
            value: "/User/Downloads",
            displayvalue: "Downloads"
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
        children: "moz-input-folder"
      }), ", add ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "disabled=\"\""
      }), " or ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "disabled"
      }), " to the markup with no value."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        className: "language-html",
        children: "<moz-input-folder label=\"Label\" disabled></moz-input-folder>\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Canvas, {
      withSource: "none",
      mdxSource: "<with-common-styles><div style={{ width: \"500px\" }} onClickCapture={e => e.stopPropagation()}><moz-input-folder label=\"Label\" disabled /></div></with-common-styles>",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("with-common-styles", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          style: {
            width: '500px'
          },
          onClickCapture: e => e.stopPropagation(),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("moz-input-folder", {
            label: "Label",
            disabled: true
          })
        })
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.h3, {
      id: "setting-the-accesskey",
      children: ["Setting the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "accesskey"
      })]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "accesskey"
      }), " defines an keyboard shortcut for the input."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        className: "language-html",
        children: "<moz-input-folder label=\"Label with accesskey\" accesskey=\"L\"></moz-input-folder>\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Canvas, {
      withSource: "none",
      mdxSource: "<with-common-styles><div style={{ width: \"500px\" }} onClickCapture={e => e.stopPropagation()}><moz-input-folder label=\"Label with accesskey\" accesskey=\"L\" /></div></with-common-styles>",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("with-common-styles", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          style: {
            width: '500px'
          },
          onClickCapture: e => e.stopPropagation(),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("moz-input-folder", {
            label: "Label with accesskey",
            accesskey: "L"
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
        children: "description"
      }), ", ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "placeholder"
      }), " and ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "accesskey"
      }), " attributes of ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "moz-input-folder"
      }), " will generally be provided via ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.a, {
        href: "https://mozilla-l10n.github.io/localizer-documentation/tools/fluent/basic_syntax.html#attributes",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "Fluent attributes"
      }), ".\nThe relevant ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "data-l10n-attrs"
      }), " are set automatically, so to get things working you just need to supply a ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "data-l10n-id"
      }), " as you would with any other element."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p, {
      children: "For example, the following Fluent messages:"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "moz-input-folder-label =\n  .label = Save files to\nmoz-input-folder-placeholder =\n  .label = Save files to\n  .placeholder = Select folder\nmoz-input-folder-description =\n  .label = Save files to\n  .description = Description text\n  .placeholder = Select folder\nmoz-input-folder-with-accesskey =\n  .label = Save files to\n  .accesskey = v\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p, {
      children: ["would be used to set text and attributes on the different ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "moz-input-folder"
      }), " elements as follows:"]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        className: "language-html",
        children: "<moz-input-folder data-l10n-id=\"moz-input-folder-label\"></moz-input-folder>\n<moz-input-folder data-l10n-id=\"moz-input-folder-placeholder\"></moz-input-folder>\n<moz-input-folder data-l10n-id=\"moz-input-folder-description\"></moz-input-folder>\n<moz-input-folder data-l10n-id=\"moz-input-folder-with-accesskey\"></moz-input-folder>\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2, {
      id: "args-table",
      children: "Args Table"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.ArgTypes, {
      of: "moz-input-folder"
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
  title: 'UI Widgets/ Input Folder/README',
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
 * @property {string} ariaLabel - The aria-label text when there is no visible label.
 * @property {string} ariaDescription - The aria-description text when there is no visible description.
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
        aria-description=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.hasDescription ? undefined : this.ariaDescription)}
        @input=${this.handleInput}
        @change=${this.redispatchEvent}
      />
    `;
  }
}
customElements.define("moz-input-text", MozInputText);

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
//# sourceMappingURL=moz-input-folder-README-stories-md.36473939.iframe.bundle.js.map