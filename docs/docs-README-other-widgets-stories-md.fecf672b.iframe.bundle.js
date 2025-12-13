"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[3314,6721],{

/***/ 16721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MDXContext: () => (/* reexport safe */ _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.MDXContext),
/* harmony export */   MDXProvider: () => (/* reexport safe */ _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.MDXProvider),
/* harmony export */   useMDXComponents: () => (/* reexport safe */ _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.useMDXComponents),
/* harmony export */   withMDXComponents: () => (/* reexport safe */ _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.withMDXComponents)
/* harmony export */ });
/* harmony import */ var _lib_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49897);



/***/ }),

/***/ 30563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __page: () => (/* binding */ __page),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74407);
/* harmony import */ var _home_runner_work_firefox_desktop_components_firefox_desktop_components_firefox_browser_components_storybook_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57155);
/* harmony import */ var _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95943);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30911);








function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    a: "a",
    h2: "h2",
    code: "code",
    h3: "h3",
    ul: "ul",
    li: "li",
    pre: "pre"
  }, (0,_home_runner_work_firefox_desktop_components_firefox_desktop_components_firefox_browser_components_storybook_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Meta, {
      title: "Docs/Other Widgets",
      parameters: {
        previewTabs: {
          canvas: {
            hidden: true
          }
        },
        viewMode: "docs"
      }
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1, {
      id: "other-types-of-ui-widgets",
      children: "Other types of UI Widgets"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["In addition to the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
        href: "https://firefox-source-docs.mozilla.org/browser/components/storybook/docs/README.reusable-widgets.stories.html",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "new reusable UI widgets"
      }), " there are existing elements that serve a similar role.\nThese older elements are broken down into two groups: Mozilla Custom Elements and User Agent (UA) Widgets.\nAdditionally, we also have domain-specific widgets that are similar to the reusable widgets but are created to serve a specific need and may or may not adhere to the Design Systems specifications."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.h2, {
      id: "older-custom-elements-in-toolkitwidgets",
      children: ["Older custom elements in ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "toolkit/widgets"
      })]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["There are existing UI widgets in ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "toolkit/content/widgets/"
      }), " that belong to one of two groups: Mozilla Custom Elements or User Agent (UA) Widgets.\nThese ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
        href: "https://searchfox.org/mozilla-central/rev/cde3d4a8d228491e8b7f1bd94c63bbe039850696/toolkit/content/customElements.js#792-809,847-866",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "existing custom elements"
      }), " are loaded into all privileged main process documents automatically.\nYou can determine if a custom element belongs to the existing UI widgets category by either ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
        href: "https://searchfox.org/mozilla-central/rev/cde3d4a8d228491e8b7f1bd94c63bbe039850696/toolkit/content/customElements.js#792-809,847-866",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "viewing the array"
      }), " or by viewing the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
        href: "https://searchfox.org/mozilla-central/source/toolkit/content/widgets",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "files in toolkit/content/widgets"
      }), ".\nAdditionally, these older custom elements are a mix of XUL and HTML elements."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3, {
      id: "mozilla-custom-elements",
      children: "Mozilla Custom Elements"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["Unlike newer reusable UI widgets, the older Mozilla Custom Elements do not have a dedicated directory.\nFor example ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "arrowscrollbox.js"
      }), " is an older single file custom element versus ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "moz-button-group/moz-button-group.mjs"
      }), " which exemplifies the structure followed by newer custom elements."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3, {
      id: "user-agent-ua-widgets",
      children: "User Agent (UA) widgets"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p, {
      children: "User agent (UA) widgets are like custom elements but run in per-origin UA widget scope instead of the chrome or content scope.\nThere are a much smaller number of these widgets compared to the Mozilla Custom Elements:"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.ul, {
      children: ["\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.li, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
          href: "https://searchfox.org/mozilla-central/source/toolkit/content/widgets/datetimebox.js",
          target: "_blank",
          rel: "nofollow noopener noreferrer",
          children: "datetimebox.js"
        })
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.li, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
          href: "https://searchfox.org/mozilla-central/source/toolkit/content/widgets/marquee.js",
          target: "_blank",
          rel: "nofollow noopener noreferrer",
          children: "marquee.js"
        })
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.li, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
          href: "https://searchfox.org/mozilla-central/source/toolkit/content/widgets/textrecognition.js",
          target: "_blank",
          rel: "nofollow noopener noreferrer",
          children: "textrecognition.js"
        })
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.li, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
          href: "https://searchfox.org/mozilla-central/source/toolkit/content/widgets/videocontrols.js",
          target: "_blank",
          rel: "nofollow noopener noreferrer",
          children: "videocontrols.js"
        })
      }), "\n"]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["Please refer to the existing ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
        href: "https://firefox-source-docs.mozilla.org/toolkit/content/toolkit_widgets/ua_widget.html",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "UA widgets documentation"
      }), " for more details."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3, {
      id: "how-to-use-existing-mozilla-custom-elements",
      children: "How to use existing Mozilla Custom Elements"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["The existing Mozilla Custom Elements are either ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
        href: "https://searchfox.org/mozilla-central/rev/d23849dd6d83edbe681d3b4828700256ea34a654/toolkit/content/customElements.js#853-878",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "automatically imported"
      }), " into all chrome privileged documents, or are ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
        href: "https://searchfox.org/mozilla-central/rev/d23849dd6d83edbe681d3b4828700256ea34a654/toolkit/content/customElements.js#789-809",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "lazy loaded"
      }), " and get automatically imported when first used.\nIn either case, these existing elements do not need to be imported individually via ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "<script>"
      }), " tag.\nAs long as you are working in a chrome privileged document, you will have access to the existing Mozilla Custom Elements.\nYou can dynamically create one of the existing custom elements by using ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "document.createDocument(\"customElement)"
      }), " or ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "document.createXULElement(\"customElement\")"
      }), " in the relevant JS file, or by using the custom element tag in the relevant XHTML document.\nFor example, ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "document.createXULElement(\"checkbox\")"
      }), " creates an instance of ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
        href: "https://searchfox.org/mozilla-central/source/toolkit/content/widgets/checkbox.js",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "widgets/checkbox.js"
      }), " while using ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "<checkbox>"
      }), " declares an instance in the XUL document.\nYou can see the checkbox widget in use in about:preferences."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3, {
      id: "how-to-use-existing-ua-widgets",
      children: "How to use existing UA Widgets"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["Please refer to the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
        href: "https://firefox-source-docs.mozilla.org/toolkit/content/toolkit_widgets/ua_widget.html",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "existing UA widgets documentation"
      }), " for more details on how to use these widgets."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3, {
      id: "how-these-widgets-behave-in-chrome-versus-in-content",
      children: "How these widgets behave in chrome versus in-content"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p, {
      children: "The UA widgets are intended for web content, they may or may not work in-content or in the chrome.\nHowever since these widgets run in a specific UA widget scope, their DOM cannot be accessed while in a content process."
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p, {
      children: "The existing Mozilla Custom Elements can only be used in privileged content processes or in the chrome.\nSince these elements cannot be used in regular web content, there is no difference in how they behave in the chrome versus in-content."
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2, {
      id: "domain-specific-widgets",
      children: "Domain-specific Widgets"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["Not all reusable components should be used throughout the entirety of Firefox.\nWhile we do have global UI patterns and components such as a button and modals, there are also specific features within the browser that include their own unique reusable patterns.\nThese patterns and components are known as \"domain-specific widgets\".\nFor example, the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
        href: "https://searchfox.org/mozilla-central/source/browser/components/aboutlogins/content/components/login-timeline.mjs",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "login-timeline widget"
      }), " is a domain-specific widget."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3, {
      id: "adding-new-domain-specific-widgets",
      children: "Adding new domain-specific widgets"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["While we do have the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "./mach addwidget"
      }), " command, as noted in the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
        href: "#adding-new-design-system-components",
        children: "adding new design system components document"
      }), ", this command does not currently support the domain-specific widget case.\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
        href: "https://bugzilla.mozilla.org/show_bug.cgi?id=1828181",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "See Bug 1828181 for more details on supporting this case"
      }), ".\nInstead, you will need to use ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "./mach addstory your-widget \"your-project-or-team-name\""
      }), " to create a new story in ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "browser/components/storybook/stories"
      }), ".\nYou can also use ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "./mach addstory your-widget \"your-project-or-team-name\" --path <your-widget-path>/<widget-source>"
      }), " so that your widget's source is imported correctly."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p, {
      children: "If you specified a path and have Storybook running, a blank story entry for your widget will appear under the Domain-Specific UI Widgets/your-project section.\nOtherwise, if you have not added a path, Storybook will throw an error saying that it \"Can't resolve 'None'\" in the newly added story.\nThis is expected and serves as a reminder that you need to update the newly created story with the widget source import."
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["Since Storybook is unaware of how the actual code is added or built, we won't go into detail about adding your new widget to the codebase.\nIt's recommended to have a ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: ".html"
      }), " test for your new widget since this lets you unit test the component directly rather than using integration tests with the domain.\nTo see what kind of files you may need for your widget, please refer back to ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.a, {
        href: "#adding-new-design-system-components",
        children: ["the output of the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
          children: "./mach addwidget"
        }), " command"]
      }), ".\nJust like with the UI widgets, ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.a, {
        href: "#known-browser_all_files_referencedjs-issue",
        children: ["the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
          children: "browser_all_files_referenced.js"
        }), " will fail unless you use your component immediately outside of Storybook."]
      })]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3, {
      id: "using-new-domain-specific-widgets",
      children: "Using new domain-specific widgets"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["This is effectively the same as ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
        href: "#using-new-design-system-components",
        children: "using new design system components"
      }), ". In general you should be able to rely on these elements getting lazily loaded at the time of first use, similar to how existing custom elements are imported."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["Outside of chrome privileged documents you may need to import your widget into the relevant ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "html"
      }), "/", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "xhtml"
      }), " files via a ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "script"
      }), " tag with ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "type=\"module\""
      }), ":"]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        className: "language-html",
        children: "<script type=\"module\" src=\"chrome://browser/content/<domain-directory>/<your-widget>.mjs\"></script>\n"
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = Object.assign({}, (0,_home_runner_work_firefox_desktop_components_firefox_desktop_components_firefox_browser_components_storybook_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components);
  return MDXLayout ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout, {
    ...props,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent, {
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
  title: 'Docs/Other Widgets',
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

/***/ 30911:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(85173);
} else {}


/***/ }),

/***/ 49897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MDXContext: () => (/* binding */ MDXContext),
/* harmony export */   MDXProvider: () => (/* binding */ MDXProvider),
/* harmony export */   useMDXComponents: () => (/* binding */ useMDXComponents),
/* harmony export */   withMDXComponents: () => (/* binding */ withMDXComponents)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74407);
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


/***/ }),

/***/ 57155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MDXContext: () => (/* reexport safe */ _mdx_js_react__WEBPACK_IMPORTED_MODULE_0__.MDXContext),
/* harmony export */   MDXProvider: () => (/* reexport safe */ _mdx_js_react__WEBPACK_IMPORTED_MODULE_0__.MDXProvider),
/* harmony export */   useMDXComponents: () => (/* reexport safe */ _mdx_js_react__WEBPACK_IMPORTED_MODULE_0__.useMDXComponents),
/* harmony export */   withMDXComponents: () => (/* reexport safe */ _mdx_js_react__WEBPACK_IMPORTED_MODULE_0__.withMDXComponents)
/* harmony export */ });
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16721);



/***/ }),

/***/ 85173:
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
var f=__webpack_require__(74407),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ })

}]);
//# sourceMappingURL=docs-README-other-widgets-stories-md.fecf672b.iframe.bundle.js.map