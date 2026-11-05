"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[997,6721],{

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

/***/ 23636:
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
    h2: "h2",
    p: "p",
    a: "a",
    code: "code",
    em: "em",
    pre: "pre",
    h3: "h3",
    h4: "h4",
    ul: "ul",
    li: "li"
  }, (0,_home_runner_work_firefox_desktop_components_firefox_desktop_components_firefox_browser_components_storybook_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Meta, {
      title: "Docs/Design Tokens",
      parameters: {
        previewTabs: {
          canvas: {
            hidden: true
          }
        },
        viewMode: "docs"
      }
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1, {
      id: "design-tokens",
      children: "Design Tokens"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2, {
      id: "background",
      children: "Background"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p, {
      children: "Our design tokens are stored in JSON, the benefit of which is that they can be converted or translated into other languages or tools (e.g CSS, Swift, Kotlin, Figma)."
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["For more information on how design tokens are named and organized, see the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
        href: "https://acorn.firefox.com/latest/desktop/design-tokens/how-design-tokens-work/overview-YYp6MVjt",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "Acorn Design System docs"
      }), "."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2, {
      id: "design-token-tiers",
      children: "Design token tiers"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["Design tokens are split into different levels: base, application, and component. The global ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "tokens-shared.css"
      }), ", ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "tokens-brand.css"
      }), " and ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "tokens-platform.css"
      }), " files include the base, application and ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.em, {
        children: "some"
      }), " component tokens. Component tokens that are generally used for styling outside of reusable moz- components like button, card, input, sidebar, panel, etc are included."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["While there are many global tokens, some component tokens are stored next to their component and aren't always imported by default. The moz- components keep their design token definitions next to their CSS/JS in ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "toolkit/content/widgets/moz-*/"
      }), ", and the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "browser/themes/shared/"
      }), " folder also has design tokens. This means design tokens for tabbrowser, urlbar, etc can be kept with the code that uses them."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["Only design tokens in the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "toolkit/themes/shared/design-system/src/tokens/"
      }), " folder are included in the global design tokens. Any other design tokens will be built next to their source ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "component.tokens.json"
      }), " file and need to be manually included where they're needed."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2, {
      id: "quick-start",
      children: "Quick start"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "src/tokens"
      }), " holds our source of truth for design tokens in ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "mozilla-central"
      }), " under the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
        href: "https://searchfox.org/firefox-main/source/toolkit/themes/shared/design-system",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "design-system"
      }), " folder in ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "toolkit/themes/shared"
      }), ". The CSS design token files in that folder come from the JSON files. If you need to modify a design token file, you should be editing the JSON."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["The tokens are organized into files with the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "*.tokens.json"
      }), " suffix, where the first part of the filename defines the top-level category of token. For example, ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "border.tokens.json"
      }), " outputs ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "--border-*"
      }), " tokens."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["In order for us to be able to define design tokens in one place (the JSON files) and allow all platforms to consume design tokens in their specific format, we use a build system called ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
        href: "https://amzn.github.io/style-dictionary/#/",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "Style Dictionary"
      }), "."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p, {
      children: "Here's how to build design tokens for desktop:"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        className: "language-sh",
        children: "$ ./mach buildtokens\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["If successful, you should see Style Dictionary building all of our tokens files within the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "design-system/dist"
      }), " folder. Otherwise, Style Dictionary can also generate helpful errors to help you debug."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p, {
      children: "At the end, we're capable of transforming JSON notation into CSS:"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        className: "language-json",
        children: "{\n \"color\": {\n  \"blue\": {\n    \"0\": {\n      \"value\": \"oklch(97% 0.05 260)\"\n    },\n    \"10\": {\n      \"value\": \"oklch(90% 0.13 260)\"\n    },\n    \"20\": {\n      \"value\": \"oklch(83% 0.17 260)\"\n    },\n    \"30\": {\n      \"value\": \"oklch(76% 0.2 260)\"\n    },\n    \"40\": {\n      \"value\": \"oklch(69% 0.22 260)\"\n    },\n    \"50\": {\n      \"value\": \"oklch(62% 0.24 260)\"\n    },\n    \"60\": {\n      \"value\": \"oklch(55% 0.24 260)\"\n    },\n    \"70\": {\n      \"value\": \"oklch(48% 0.2 260)\"\n    },\n    \"80\": {\n      \"value\": \"oklch(41% 0.17 260)\"\n    },\n    \"90\": {\n      \"value\": \"oklch(34% 0.14 260)\"\n    },\n    \"100\": {\n      \"value\": \"oklch(27% 0.1 260)\"\n    },\n    \"110\": {\n      \"value\": \"oklch(20% 0.05 260)\"\n    }\n  },\n }\n}\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        className: "language-css",
        children: "--color-blue-0: oklch(97% 0.05 260);\n--color-blue-10: oklch(90% 0.13 260);\n--color-blue-20: oklch(83% 0.17 260);\n--color-blue-30: oklch(76% 0.2 260);\n--color-blue-40: oklch(69% 0.22 260);\n--color-blue-50: oklch(62% 0.24 260);\n--color-blue-60: oklch(55% 0.24 260);\n--color-blue-70: oklch(48% 0.2 260);\n--color-blue-80: oklch(41% 0.17 260);\n--color-blue-90: oklch(34% 0.14 260);\n--color-blue-100: oklch(27% 0.1 260);\n--color-blue-110: oklch(20% 0.05 260);\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p, {
      children: "Neat!"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2, {
      id: "testing",
      children: "Testing"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p, {
      children: "We have basic tests in place to ensure that our built CSS files stay up to date\nand that new tokens are properly categorized. These tests will fail if the JSON\nis modified but the command to build the tokens CSS files doesn't run, or if the\ntokens CSS files are modified directly without changing the JSON."
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["Our tests are Node-based to allow us to install and work with the\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "style-dictionary"
      }), " library, and follow a format that has been used previously\nfor Devtools and New Tab tests."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p, {
      children: "You can run the tests locally using the following command:"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        className: "language-sh",
        children: "$ ./mach npm test --prefix=toolkit/themes/shared/design-system\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["The same tests run in CI as ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "node(design-tokens)"
      }), ". They compare every CSS file\nthe build writes against the checked-in copy, including the component\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "*.tokens.css"
      }), " files next to their ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "*.tokens.json"
      }), ". They don't run the\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "build-figma-nova"
      }), " step, so they can't catch a stale or pruned\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "*.nova.tokens.json"
      }), "; only the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "./mach buildtokens && git status --short"
      }), " check\ndescribed under \"Overriding tokens\" does. For the same reason, build with\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "./mach buildtokens"
      }), " rather than ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "npm run build"
      }), ", which skips the\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "build-figma-nova"
      }), " step that ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "./mach buildtokens"
      }), " runs first."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["The CI task only runs when a file under ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "toolkit/themes/shared/design-system/"
      }), "\nchanges, so a patch that edits only component token files elsewhere has to run\nthe tests locally."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2, {
      id: "json-format-deep-dive",
      children: "JSON format deep dive"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["Style Dictionary works by ingesting JSON files with tokens data and performing various platform-specific transformations to output token files formatted for different languages. The library has certain quirks and limitations that we had to take into consideration when coming up with a JSON format for representing our tokens. The following is a bit of a \"how to\" guide for reading and adding to ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
        href: "https://searchfox.org/firefox-main/source/toolkit/themes/shared/design-system/src/tokens",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
          children: "src/tokens"
        })
      }), " for anyone who needs to consume our tokens or add new tokens."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["Every ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "*.tokens.css"
      }), " file in the tree is generated, and the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "*.tokens.json"
      }), " beside it is the source. They are not confined to ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "dist/"
      }), ": around eighteen component sheets sit next to the code they style, under ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "browser/themes/shared/"
      }), " (", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "urlbar.tokens.css"
      }), ", ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "tab.tokens.css"
      }), ") and ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "toolkit/content/widgets/"
      }), " (", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "moz-badge.tokens.css"
      }), ", ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "panel-list.tokens.css"
      }), "). Each one opens with a header saying so. The trap is that looking up what a token resolves to lands you in exactly the file you must not edit, so check the filename suffix and the header before changing a token declaration. A hand-written theme file in the same directory, such as ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "urlbar.css"
      }), ", is fair game; its ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: ".tokens.css"
      }), " sibling is not."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["The generator reads ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "src/tokens/base/"
      }), " and the directories listed in ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "COMPONENT_TOKEN_PATHS"
      }), " in ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
        href: "https://searchfox.org/firefox-main/source/toolkit/themes/shared/design-system/config/helpers/general/token-paths.mjs",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
          children: "token-paths.mjs"
        })
      }), ". Tokens from ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "src/tokens/components/"
      }), " go into the global sheets in ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "dist/"
      }), ", while each base ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "*.tokens.json"
      }), " under ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "toolkit/content/widgets/"
      }), " and ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "browser/themes/shared/"
      }), " is built into a ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "*.tokens.css"
      }), " beside it. An override file such as ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "moz-badge.nova.tokens.json"
      }), " gets no sheet of its own; its values go into the base file's sheet, under ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "@media -moz-pref(\"browser.nova.enabled\")"
      }), " for Nova."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["A ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "comment"
      }), " next to a token's ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "value"
      }), " is written as a CSS comment above every declaration of that token, in every layer it is declared in, forced colors and Nova included. A comment about one side's value, such as how a light-mode literal was derived, then sits above the other layers' declarations too, so put such a derivation in the commit message instead. A ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "comment"
      }), " inside a ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "nova"
      }), " block stays in the JSON and isn't written to the CSS."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["Adding one token legitimately dirties four generated files: the component sheet, plus ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "dist/semantic-categories.mjs"
      }), ", ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "dist/tokens-table.mjs"
      }), " and ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "dist/tokens-figma-primitives.json"
      }), ". That is propagation rather than drift - confirm it by checking that each hunk names your token."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3, {
      id: "naming",
      children: "Naming"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["When going from token name to JSON, each place we would insert a hyphen, underscore, or case change in a variable name translates to a layer of nesting in our JSON. That means a token with the CSS variable name ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "--border-radius-circle"
      }), " would be represented as:"]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        className: "language-json",
        children: "\"border\": {\n  \"radius\": {\n    \"circle\": {\n      \"value\": \"9999px\"\n    }\n  }\n}\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["The ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "value"
      }), " key is required as this is the indicator ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
        href: "https://amzn.github.io/style-dictionary/#/architecture?id=_4a-transform-the-tokens",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "Style Dictionary looks for"
      }), " to know what sections of the JSON to parse into distinct tokens. It gets omitted from the final variable name."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["For simple cases ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "value"
      }), " will be either a string or a number, but when we have to take media queries or themes into account ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "value"
      }), " will be an object. Examples of these cases will be explained in more detail below."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3, {
      id: "base",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "@base"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["When reading through our JSON you will see many instances where we have used an ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "@base"
      }), " key, always appearing right before a ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "value"
      }), " key indicating that everything up to that point should be parsed as a token. For example our ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "--font-weight"
      }), " CSS token is represented like this in our JSON:"]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        className: "language-json",
        children: "\"font\": {\n  \"weight\": {\n    \"@base\": {\n      \"value\": \"normal\"\n    }\n  }\n}\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["This is a workaround for a ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
        href: "https://github.com/amzn/style-dictionary/issues/119",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "known"
      }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
        href: "https://github.com/amzn/style-dictionary/issues/366",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "limitation"
      }), " of Style Dictionary where it doesn't support nested token names that appear after a ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "value"
      }), " key. If we want to have both ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "--font-weight"
      }), " and ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "--font-weight-semibold"
      }), " CSS tokens they need to be represented as distinct objects with their own ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "value"
      }), "s:"]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        className: "language-json",
        children: "\"font\": {\n  \"weight\": {\n    \"@base\": {\n      \"value\": \"normal\"\n    },\n    \"semibold\": {\n      \"value\": 600\n    }\n  }\n}\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "@base"
      }), " is a special indicator we chose to enable Style Dictionary to parse our tokens correctly while still generating our desired variable names. Much like ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "value"
      }), ", it ultimately ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
        href: "https://searchfox.org/mozilla-central/rev/159929cd10b8fba135c72a497d815ab2dd5a521c/toolkit/themes/shared/design-system/tokens-config.js#94-96",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "gets removed"
      }), " from the final token name."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["You will also see many places where ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "@base"
      }), " is referenced in a value definition. This is a bit of a gotcha - even though ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "@base"
      }), " isn't part of the token name, we still need to include it when using Style Dictionary's syntax for ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
        href: "https://amzn.github.io/style-dictionary/#/tokens?id=referencing-aliasing",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "variable references/aliases"
      }), ". That means the following CSS:"]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        className: "language-css",
        children: "--input-min-height: var(--button-min-height);\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p, {
      children: "Will look like this in our JSON:"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        className: "language-json",
        children: "\"input\": {\n  \"min\": {\n    \"height\": {\n      \"value\": \"{button.min.height.@base}\"\n    }\n  }\n}\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3, {
      id: "high-contrast-mode-hcm-media-queries",
      children: "High Contrast Mode (HCM) media queries"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["We need to be able to change our token values to support both the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "prefers-contrast"
      }), " and ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "forced-colors"
      }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
        href: "https://firefox-source-docs.mozilla.org/accessible/HCMMediaQueries.html",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "media queries"
      }), ". We employ ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "prefersContrast"
      }), " and ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "forcedColors"
      }), " keys nested in a token's ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "value"
      }), " key to indicate that we need to generate a media query entry for that token. For example this JSON:"]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        className: "language-json",
        children: "\"border\": {\n  \"color\": {\n    \"interactive\": {\n      \"@base\": {\n        \"value\": {\n          \"prefersContrast\": \"{text.color.@base}\",\n          \"forcedColors\": \"ButtonText\",\n        }\n      }\n    },\n  }\n}\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p, {
      children: "results in the following CSS:"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        className: "language-scss",
        children: "/* tokens-shared.css */\n\n:root,\n:host(.anonymous-content-host) {\n  @layer tokens-prefers-contrast {\n    @media (prefers-contrast) {\n      /** Border **/\n      --border-color-interactive: var(--text-color);\n    }\n  }\n\n  @layer tokens-forced-colors {\n    @media (forced-colors) {\n      /** Border **/\n      --border-color-interactive: ButtonText;\n    }\n  }\n}\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["The layers and media queries are nested inside a single ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: ":root, :host(.anonymous-content-host)"
      }), " selector, as recommended by the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
        href: "https://firefox-source-docs.mozilla.org/accessible/HCMMediaQueries.html#writing-maintainable-frontend-code",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "HCM media query guidelines"
      }), "."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3, {
      id: "theming",
      children: "Theming"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p, {
      children: "Our JSON supports two dimensions of theming designed around the needs of the Firefox desktop client; light and dark themes, and brand and platform themes."
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h4, {
      id: "light-and-dark-themes",
      children: "Light and dark themes"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["We employ ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "light"
      }), " and ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "dark"
      }), " keys in our ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "value"
      }), " objects to indicate when a given token should have different values in our light and dark themes:"]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        className: "language-json",
        children: "\"background\": {\n  \"color\": {\n    \"box\": {\n      \"value\": {\n        \"light\": \"{color.white}\",\n        \"dark\": \"{color.gray.80}\",\n      }\n    },\n  }\n}\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["The above JSON communicates that ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "--background-color-box"
      }), " should have the value of ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "var(--color-white)"
      }), " in our light theme and ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "var(--color-gray-80)"
      }), " in our dark theme."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["If a token has the same value for both the light and dark themes it will either have a string or number as its ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "value"
      }), " or it will use a ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "default"
      }), " key:"]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        className: "language-json",
        children: "\"button\": {\n  \"background\": {\n    \"color\": {\n      \"disabled\": {\n        \"value\": {\n          \"default\": \"{button.background.color.@base}\",\n        }\n      }\n    }\n  }\n}\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["The above JSON indicates that ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "--button-background-color-disabled"
      }), " will have the value of ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "var(--button-background-color)"
      }), " regardless of theme."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h4, {
      id: "global-token-brand-and-platform-themes",
      children: "Global token brand and platform themes"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["The Firefox desktop client consists of ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
        href: "https://acorn.firefox.com/latest/resources/browser-anatomy/desktop-ZaxCgqkt#section-anatomy-fd",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "two distinct surfaces"
      }), "; \"the chrome,\" or the UI of the browser application that surrounds web pages, and the web content itself which is often referred to as \"in-content.\" Firefox UI development spans both surfaces since our ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "about:"
      }), " pages are \"in-content\" pages. In our design system we distinguish between these surfaces by using the terminology of ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "platform"
      }), " vs ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "brand"
      }), ". Chrome specific token values live in ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
        href: "https://searchfox.org/firefox-main/source/toolkit/themes/shared/design-system/dist/tokens-platform.css",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
          children: "tokens-platform.css"
        })
      }), " and in-content specific token values live in ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
        href: "https://searchfox.org/firefox-main/source/toolkit/themes/shared/design-system/dist/tokens-brand.css",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
          children: "tokens-brand.css"
        })
      }), "."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["We use ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "platform"
      }), " and ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "brand"
      }), " keys in our JSON to indicate when a token has a surface-specific value. For example this token definition:"]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        className: "language-json",
        children: "\"text\": {\n  \"color\": {\n    \"@base\": {\n      \"value\": {\n        \"brand\": {\n          \"light\": \"{color.gray.100}\",\n          \"dark\": \"{color.gray.0}\"\n        },\n        \"platform\": {\n          \"default\": \"currentColor\"\n        }\n      }\n    },\n  }\n}\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["communicates that ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "--text-color"
      }), " should have the value ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "currentColor"
      }), " in ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "tokens-platform.css"
      }), " for chrome surfaces, and the value ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "light-dark(var(--color-gray-100), var(--color-gray-0))"
      }), " in ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "tokens-brand.css"
      }), " for in-content pages. The resulting CSS spans multiple files:"]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        className: "language-scss",
        children: "/* tokens-platform.css */\n:root,\n:host(.anonymous-content-host) {\n  @layer tokens-foundation {\n    /** Text **/\n    --text-color: currentColor;\n  }\n}\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        className: "language-scss",
        children: "/* tokens-brand.css */\n:root,\n:host(.anonymous-content-host) {\n  @layer tokens-foundation {\n    /** Text **/\n    --text-color: light-dark(var(--color-gray-100), var(--color-gray-0));\n  }\n}\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h4, {
      id: "chrome-native-os-theme",
      children: "Chrome native OS theme"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["Sometimes rather than using our own theme, we defer to the user's OS theme, this only happens in the browser chrome and is referred to as the \"native theme.\" The ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "(-moz-native-theme)"
      }), " media query matches when ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "browser.theme.native-theme"
      }), " is true, which it is by default on Linux only, unless the document forces the non-native theme. ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
        href: "https://searchfox.org/firefox-main/source/toolkit/modules/LightweightThemeConsumer.sys.mjs",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
          children: "LightweightThemeConsumer.sys.mjs"
        })
      }), " forces it for every theme other than ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "System theme — auto"
      }), ", and sets the root attributes that decide which layer paints the chrome:"]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("table", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("thead", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
            children: "Theme"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
            children: "Root attributes"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
              children: "(-moz-native-theme)"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
            children: "Base token layers (before overrides)"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tbody", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("td", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
              children: "System theme — auto"
            }), " on Linux"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
              children: "theme-in-app"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
            children: "matches"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
              children: "tokens-foundation"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("td", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
              children: "System theme — auto"
            }), " on Windows and macOS"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
              children: "theme-in-app"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
            children: "doesn't match (the pref is false)"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
              children: "tokens-browser-theme"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("td", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
              children: "Light"
            }), " and ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
              children: "Dark"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
              children: "theme-in-app"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
            children: "doesn't match (forced non-native)"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
              children: "tokens-browser-theme"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
            children: "Alpenglow and add-on themes"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
              children: "lwtheme"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
            children: "doesn't match (forced non-native)"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
              children: "tokens-foundation"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
            children: "Any theme under forced colors"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("td", {
            children: ["The default theme is swapped in (", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
              children: "browser.theme.forced-colors-override.enabled"
            }), "): no ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
              children: "lwtheme"
            }), ", and ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
              children: "theme-in-app"
            }), " as the selected theme sets it"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("td", {
            children: ["as for ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
              children: "System theme — auto"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("td", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
              children: "tokens-forced-colors"
            }), " over ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
              children: "tokens-prefers-contrast"
            }), " where it matches, then ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
              children: "tokens-foundation"
            })]
          })]
        })]
      })]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["A lightweight theme therefore paints the same ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "tokens-foundation"
      }), " values as the native theme, even though ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "(-moz-native-theme)"
      }), " doesn't match for it. When a token has a ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "nativeTheme"
      }), " value, that value goes into ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "tokens-foundation"
      }), " and controls both the native theme and lightweight themes, while the token's light/dark value goes into the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "tokens-browser-theme"
      }), " layer for the in-app themes."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"color.accent.primary.@base\": {\n    \"value\": {\n      \"light\": \"{color.blue.60}\",\n      \"dark\": \"{color.cyan.30}\",\n      \"nativeTheme\": \"AccentColor\",\n      \"forcedColors\": \"ButtonText\"\n    }\n  }\n}\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["This snippet will use the light/dark value in-content, and in the chrome under the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "Light"
      }), " and ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "Dark"
      }), " themes and under ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "System theme — auto"
      }), " on Windows and macOS. Under the native theme and lightweight themes it will use ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "AccentColor"
      }), ", and ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "ButtonText"
      }), " in HCM."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["So to give the chrome an in-app color without breaking the native theme and lightweight themes, put a value that follows the system or lightweight theme (e.g. a color-mix of ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "currentColor"
      }), ", ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "{toolbar.background.color}"
      }), ") in ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "nativeTheme"
      }), ", and the fixed in-app color in ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "light"
      }), "/", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "dark"
      }), "."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["The \"browser theme\" values end up in the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "tokens-browser-theme"
      }), " layer, which needs a narrower selector than the other layers and so gets its own top-level rule:"]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        className: "language-scss",
        children: "/* tokens-platform.css */\n:root:is([theme-in-app], :not([lwtheme])),\n:host(.anonymous-content-host) {\n  @layer tokens-browser-theme {\n    @media not ((forced-colors) or (-moz-native-theme)) {\n      /** Color **/\n      --color-accent-primary: light-dark(var(--color-blue-60), var(--color-cyan-30));\n    }\n  }\n}\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3, {
      id: "rem-is-the-system-font-size-in-chrome",
      children: "rem is the system font size in chrome"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "toolkit/themes/shared/global-shared.css"
      }), " sets ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: ":root { font: message-box }"
      }), ", and the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "font"
      }), " shorthand carries ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "font-size"
      }), ", so a chrome document's root font size is the system UI font size: roughly 11px on macOS, 12px on Windows, and 14 to 15px on Linux. Only content documents get 16px. Every rem-valued token scales with that."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p, {
      children: "The space scale is 16px-based, so every space token runs short in chrome - 25% short at a 12px root. That is a property of the scale rather than of any one patch: it was once calibrated to a 15px chrome root and was deliberately rebased onto a clean 16px basis. Two consequences for a patch that swaps a fixed-px value for a space token:"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.ul, {
      children: ["\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.li, {
        children: ["The two match only at a 16px root, so never call them equivalent without saying at what root size, and never assume 16px for anything in ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
          children: "browser/"
        }), " or ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
          children: "toolkit/"
        }), " chrome CSS."]
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.li, {
        children: ["Where the quantity must not scale with the system font - a geometric bleed, an overlay inset, an icon box - pick a fixed-px token instead. ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
          children: "--size-item-*"
        }), ", ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
          children: "--icon-size-*"
        }), ", ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
          children: "--size-image-*"
        }), " and ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
          children: "--size-layout-*"
        }), " are all literal px."]
      }), "\n"]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3, {
      id: "adding-new-tokens",
      children: "Adding new tokens"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["In order to add a new token you will need to make changes to the appropriate file in ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "src/tokens"
      }), " or add a new file if needed - any files generated based on our JSON token definitions should never be modified directly. You should be able to work backwards from the variable name in whatever language you're working with to figure out the correct JSON structure."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["Once you've made your changes, you can generate the new tokens CSS files by running ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "./mach buildtokens"
      }), "."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p, {
      children: "If you encounter errors or get unexpected results when running the build command it may be because:"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.ul, {
      children: ["\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.li, {
        children: ["You forgot to nest everything in a ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
          children: "value"
        }), " key and consequently Style Dictionary is not parsing your tokens correctly, or;"]
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.li, {
        children: ["You omitted ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
          children: "@base"
        }), " when referencing another token, or;"]
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.li, {
        children: "You are referencing another token that you haven't defined in the JSON yet - Style Dictionary should give descriptive error messages in this case."
      }), "\n"]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p, {
      children: "If you need any help feel free to reach out in #firefox-reusable-components on Slack or #reusable-components on Matrix."
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3, {
      id: "built-in-theme-manifests-read-token-json",
      children: "Built-in theme manifests read token JSON"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["The AI window and private window themes in ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
        href: "https://searchfox.org/firefox-main/source/browser/themes/addons",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
          children: "browser/themes/addons/"
        })
      }), " don't check in their ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "manifest.json"
      }), ". ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
        href: "https://searchfox.org/firefox-main/source/browser/themes/addons/process_tokens.py",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
          children: "process_tokens.py"
        })
      }), " generates it at build time from the theme's ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "manifest.in.json"
      }), " and the token JSON files that ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "browser/themes/addons/moz.build"
      }), " lists as the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "GeneratedFile"
      }), " inputs. A ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "{a.b.c}"
      }), " reference in the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "colors"
      }), " or ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "properties"
      }), " of the manifest's ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "theme"
      }), " or ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "dark_theme"
      }), " is a path into those files, with the file name as its first segment and a ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "*.nova.tokens.json"
      }), " merged over its base file; a reference anywhere else, such as in ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "images"
      }), ", is copied unchanged. The script takes the token's ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "nova"
      }), " value when it has one, then picks the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "light"
      }), " or ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "dark"
      }), " side for the manifest's ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "theme"
      }), " or ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "dark_theme"
      }), ", falling back to ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "default"
      }), " and then ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "brand"
      }), "."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["The references are substituted at build time, and a reference inside a token's value is followed too, so ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "{toolbar.field.border.color.focus}"
      }), " also depends on ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "focus.outline.color"
      }), ". When the theme applies, its ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "colors"
      }), " are parsed as standalone colors with ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "currentColor"
      }), " taken as black, so a token that resolves where it is used (e.g. a color-mix of ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "currentColor"
      }), ") can't feed one; spell such a color out in ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "manifest.in.json"
      }), ". A ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "theme_experiment"
      }), " property reaches CSS as written, so a color expression in one still resolves where it is used. Renaming or removing a token a manifest references, or deleting a listed ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "*.nova.tokens.json"
      }), " (which ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "./mach buildtokens"
      }), " does when an override becomes empty), breaks the build unless the same commit updates the manifest or ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "moz.build"
      }), ". Reshaping a referenced token's ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "value"
      }), " so that none of those keys applies writes an unusable value into the manifest without an error. Before such a change, search ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "browser/themes/addons/*/manifest.in.json"
      }), " for the token's path, then the token files ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "browser/themes/addons/moz.build"
      }), " lists for the tokens that reference it, and ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "moz.build"
      }), " for its file."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3, {
      id: "overriding-tokens",
      children: "Overriding tokens"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["Our build process provides a mechanism to override design tokens behind a pref. To do so, you will need to update ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
        href: "https://searchfox.org/firefox-main/source/toolkit/themes/shared/design-system/config/helpers/general/override-identifiers.mjs",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "override-identifiers.mjs"
      }), ", adding an ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "id"
      }), " and a ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "pref"
      }), " to classify the token overrides. For example, to override design tokens for Nova, we use this configuration:"]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        className: "language-js",
        children: "{\n  id: \"nova\",\n  pref: \"browser.nova.enabled\",\n}\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["Then you can create new JSON files in ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "src/tokens"
      }), " that end with a suffix using the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "id"
      }), " (e.g. ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "*.nova.tokens.json"
      }), ") and follow the JSON format to define the tokens that are different from the design system defaults. They should follow the same structure as the defaults so the tokens end up with the same names."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["The high contrast overrides are emitted into cascade layers. A single ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "@layer"
      }), " statement at the top of ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "dist/tokens-shared.css"
      }), " and of every component ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "*.tokens.css"
      }), " declares all of them in precedence order, ending ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "tokens-prefers-contrast"
      }), ", ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "tokens-prefers-contrast-nova"
      }), ", ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "tokens-forced-colors"
      }), ", ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "tokens-forced-colors-nova"
      }), ", so that forced colors wins when a surface is in both regimes at once. ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "getLayerString"
      }), " in ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
        href: "https://searchfox.org/firefox-main/source/toolkit/themes/shared/design-system/config/helpers/desktop-format/get-layer-string.mjs",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
          children: "get-layer-string.mjs"
        })
      }), " generates the statement: the three theme layers (", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "tokens-foundation"
      }), ", ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "tokens-browser-theme"
      }), ", ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "tokens-foundation-brand"
      }), "), then those three again with each override ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "id"
      }), " as a suffix, then each of the two accessibility layers followed by its override twins. Each document or shadow tree orders layers by the first appearance of their names, and a later statement cannot reorder a name already registered. A layer name missing from the statement is therefore ordered after every layer registered before its first use, which normally includes the forced colors and prefers-contrast layers, so its values beat them; add a new layer to ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "getLayerString"
      }), " rather than naming it only in a sheet. Anything a consumer declares outside a layer beats all of them, whatever the specificity - see the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
        href: "https://firefox-source-docs.mozilla.org/code-quality/coding-style/css_guidelines.html#an-unlayered-declaration-outranks-every-cascade-layer",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "CSS guidelines"
      }), "."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["When you run ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "./mach buildtokens"
      }), ", the CSS output will include the new tokens under a media query using the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "pref"
      }), " that you defined. For example:"]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        className: "language-scss",
        children: ":root,\n:host(.anonymous-content-host) {\n  @media -moz-pref(\"browser.nova.enabled\") {\n    @layer tokens-foundation-nova {\n      /* Your token overrides */\n    }\n  }\n}\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["The generator emits only the tokens that actually have an override - ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "shouldSkipToken"
      }), " drops the rest - so an override sheet references far more tokens than it defines. The others resolve from the ungated foundation layer, which every consumer of ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "tokens-shared.css"
      }), " gets. A token missing from an override sheet is therefore usually not a regression; the question to ask is whether the ungated layer carries the same value, not whether the override sheet still defines it."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "./mach buildtokens"
      }), " prunes as well as generating. A ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "build-figma-nova"
      }), " step re-derives every ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "*.nova.tokens.json"
      }), " as a delta against its base ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "*.tokens.json"
      }), " and unlinks the ones that come out empty (", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "writeTokens"
      }), " in ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
        href: "https://searchfox.org/firefox-main/source/toolkit/themes/shared/design-system/src/figma-import.mjs",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
          children: "src/figma-import.mjs"
        })
      }), "). So once a base token holds the same literal value its override did, the next build deletes that override file. Restoring it by hand does not survive the following build, and the deletion belongs in the patch that made the values agree."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "ignoreFigma"
      }), " on a base token stops Figma from writing an override for it, on the understanding that the token should use the base value. It does not preserve an existing override. To keep one, declare it as a key named after the override identifier inside the base ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "*.tokens.json"
      }), " instead, which the importer keeps:"]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"value\": {\n    \"default\": \"...\",\n    \"nova\": { \"comment\": \"why\", \"value\": \"...\" }\n  }\n}\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p, {
      children: "Whether a token patch is complete comes down to one check:"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        className: "language-sh",
        children: "$ ./mach buildtokens && git status --short\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p, {
      children: "Empty output means the committed tree is a fixed point of the generator. Any output means the patch and the generator disagree, and the generator wins. Run it after a rebase too, since an upstream change to the token config can stale generated files your patch owns without touching a line of it."
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h4, {
      id: "importing-from-figma",
      children: "Importing from Figma"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["Figma's values reach the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "*.nova.tokens.json"
      }), " files through two committed exports in ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "src/"
      }), ". ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "figma-variables-all.json"
      }), " mirrors the Figma file's variable collections, and ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "./mach buildtokens --import-figma --remote"
      }), " rewrites it from the Figma API. ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "nova-export-clean-variables.json"
      }), " is the subset the build reads: a plain ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "./mach buildtokens"
      }), " maps it onto the override files and never reads the mirror."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "./mach buildtokens --import-figma"
      }), " updates the subset from the mirror before building. It takes every token whose Nova value the mirror would change, so a difference already sitting between the two files comes along with whatever just changed in Figma; read the subset's diff before committing an import. ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "--match=<path substring>"
      }), " narrows the import to matching tokens and ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "--all"
      }), " takes every change. With neither, it asks in an editor which tokens to take, and when stdin is not a terminal it takes them all."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["The import does not override a token whose base ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "*.tokens.json"
      }), " holds a ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "nova"
      }), " key, so a Figma change to that token reaches the tree only once the key is removed."]
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
  title: 'Docs/Design Tokens',
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
//# sourceMappingURL=storybook-static-README-design-tokens-stories-md.d090bf70.iframe.bundle.js.map