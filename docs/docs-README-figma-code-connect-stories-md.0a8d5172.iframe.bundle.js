"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1373,4331],{

/***/ 3306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __page: () => (/* binding */ __page),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92421);
/* harmony import */ var _home_runner_work_firefox_desktop_components_firefox_desktop_components_firefox_browser_components_storybook_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63829);
/* harmony import */ var _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57449);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8193);








function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    a: "a",
    h2: "h2",
    code: "code",
    h3: "h3",
    ol: "ol",
    li: "li",
    strong: "strong",
    img: "img",
    pre: "pre",
    h4: "h4",
    ul: "ul"
  }, (0,_home_runner_work_firefox_desktop_components_firefox_desktop_components_firefox_browser_components_storybook_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Meta, {
      title: "Docs/Figma Code Connect",
      parameters: {
        previewTabs: {
          canvas: {
            hidden: true
          }
        },
        viewMode: "docs"
      }
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1, {
      id: "figma-code-connect",
      children: "Figma Code Connect"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
        href: "https://www.figma.com/code-connect-docs/",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "Code Connect"
      }), " is a bridge between your codebase and Figma’s Dev Mode, connecting components in your repositories directly to components in your design files.\nWe use Code Connect to generate recommended code snippets for our Figma components to improve the developer experience when translating designs to code."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2, {
      id: "how-to-set-up-code-connect",
      children: "How to set up Code Connect"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["First, you'll need to install ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
        href: "https://www.figma.com/code-connect-docs/quickstart-guide/#install-the-code-connect-command-line-tool",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "the Code Connect command line tool"
      }), " via ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "npm"
      }), ":"]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "npm install --global @figma/code-connect@latest"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["Second, you'll either need to add your ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
        href: "https://help.figma.com/hc/en-us/articles/8085703771159-Manage-personal-access-tokens",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "Figma personal access token"
      }), " to your terminal environment:"]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "export FIGMA_ACCESS_TOKEN='your-generated-access-token'"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["You could also add your personal access token via ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: ".bashrc"
      }), ", ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: ".zshrc"
      }), ", or other appropriate file based on your shell environment."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2, {
      id: "how-to-use-code-connect",
      children: "How to use Code Connect"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3, {
      id: "finding-a-figma-component-to-generate-the-initial-code-connect-file",
      children: "Finding a Figma component to generate the initial Code Connect file"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["After installing and setting your ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "FIGMA_ACCESS_TOKEN"
      }), " in your terminal, you will need to navigate to our Figma library to find a component that needs a Code Connect config file."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p, {
      children: "You can find a potential component through various ways:"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.ol, {
      children: ["\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.li, {
        children: ["Searching through the open dependent bugs on ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
          href: "https://bugzilla.mozilla.org/show_bug.cgi?id=1955395",
          target: "_blank",
          rel: "nofollow noopener noreferrer",
          children: "Bug 1955395 - [meta] Figma Code Connect"
        }), "."]
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.li, {
        children: "Checking the \"Explore component behavior\" in Figma and seeing if there no code snippet at the bottom of the \"Component playground\" window, underneath the \"Variable modes\" section."
      }), "\n"]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.strong, {
        children: "Note:"
      }), " Not all Figma components will need a Code Connect config.\nFor example, the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
        href: "https://www.figma.com/design/3WoKOSGtaSjhUHKldHCXbc/Desktop-Components-3?node-id=32-678&m=dev",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "\"Radio Button\""
      }), " exists as a standalone Figma component, but it is only used as a subcomponent for the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
        href: "https://www.figma.com/design/3WoKOSGtaSjhUHKldHCXbc/Desktop-Components-3?node-id=3907-17657&m=dev",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "\"Radio Button with label,\""
      }), " which more accurately models our ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "moz-label"
      }), " web component."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["Once you are aware of the Figma component you want to work on, you'll need to navigate to Figma and find the base Figma component.\nIt should have an icon of a diamond made of four smaller diamonds.\nWhen you select this component, it likely will say ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.strong, {
        children: "Component set"
      }), " in the sidebar."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.img, {
        src: "./img/figma-diamond-example.png",
        alt: "Figma user interface showing the diamond icon next to \"Checkbox\""
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.img, {
        src: "./img/figma-component-set-example.png",
        alt: "Figma user interface showing the diamond icon next to \"Component set\""
      })]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p, {
      children: "Ensure that you have selected the main Figma component instead of an instance of it.\nCode Connect will not setup correctly for an instance.\nThere should be an option indicated by either a diamond with four smaller diamonds or a diamond with an arrow pointing out from the diamond.\nThis icon button is used to go to the main component, and will be labelled \"Go to main component\" once you hover on the icon button.\nUse this \"Go to main component\" button to check if there is a component set higher up in the hierarchy.\nOnce you've got the main component set, then you can copy a link to the component and move to generating the Code Connect config in your terminal."
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.img, {
        src: "./img/figma-go-to-main-component-one.png",
        alt: "Figma user interface showing the \"Go to main component\" tooltip text when hovering over the diamond icon with four smaller diamonds"
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.img, {
        src: "./img/figma-go-to-main-component-two.png",
        alt: "Figma user interface showing the \"Go to main component\" tooltip text when hovering over the diamond with an arrowing pointing out from it"
      })]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3, {
      id: "generating-the-initial-code-connect-file-for-a-figma-component",
      children: "Generating the initial Code Connect file for a Figma component"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["After finding the main component set in the previous step and copying the link to the main component, navigate to your Firefox repo in your terminal and then navigate to ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "toolkit/content/widgets"
      }), ".\nTo simplify development, we will create the initial config file in ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "toolkit/content/widgets"
      }), " by running the following command (please note the single quotes are needed to correctly parse the URL!):"]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "npx figma connect create '<main component set link>'"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["For example, this command would look something like ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "npx figma connect create 'https://www.figma.com/design/[...]?node-id=1-255'"
      }), " where the full URL is the GUID for your design document.\nThis command will work regardless if you copied the link in Dev Mode (which has an additional query ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "&m=dev"
      }), " at the end of the link) or not."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p, {
      children: "If the Code Connect tool was able to find a component in that copied URL, you will receive the following output in your terminal:"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "Fetching component information from Figma...\nParsing response\nGenerating Code Connect files...\nCode Connect files generated successfully:\n<firefox-repo-path>\\<component-name>.figma.ts\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p, {
      children: "If the Code Connect tool was not able to find a component, it will throw an error and notify you in your terminal output.\nThe most common reason for this error is the particular node or layer you used for the linked URL is not actually a component but a wrapper for one or more components.\nTry navigating a layer above or below the node you used and see if you are able to generate a Code Connect config file using one of those other nodes."
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3, {
      id: "modifying-the-generated-config-file",
      children: "Modifying the generated config file"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["While generating the file is a good start, you will need to move it, rename it, and modify it.\nYou should move this generated file to the component specific folder and rename it to ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "<component-name>.figma.ts"
      }), ".\nThe generator names the file according to the Figma component, so this may not have the same name as the Lit component.\nFor example, the generator creates a file titled ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "checkbox.figma.ts"
      }), ".\nThis file should be moved to the corresponding folder - in this case ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "/toolkit/content/widgets/moz-checkbox"
      }), " - and renamed to ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "moz-checkbox.figma.ts"
      }), ".\nThe goal of this config is to create a mapping between what properties the Lit component takes and what properties are defined in Figma, which are reflected in the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "props"
      }), " object.\nThe values within the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "props"
      }), " object will be used in generating the Code Connect snippet."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        className: "language-javascript",
        children: "{\n  props: {\n    showIcon: figma.boolean(\"Show icon\", {\n      true: \"chrome://example.svg\",\n      false: undefined,\n    }),\n    label: figma.string(\"Label\"),\n  },\n  example: props => html`\n    <moz-badge\n      label=${props.label}\n      iconsrc=${props.showIcon}\n      title=\"This appears as a tooltip on hover\"\n    ></moz-badge>\n  `,\n}\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.strong, {
        children: "Note:"
      }), " The generated ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "props"
      }), " object may not capture all of the properties that can or should be mapped from Figma."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h4, {
      id: "when-the-property-types-match",
      children: "When the property types match"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["The value of the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "figma[type](propertyName)"
      }), " \"code\" will be the expected value from a given instance of a Figma component.\nSo if it is the “checked” boolean in Figma, that value will be set to true when the instance in Figma has it set to true."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        className: "language-javascript",
        children: "checked: figma.boolean(\"Checked\")\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h4, {
      id: "when-the-property-types-are-different",
      children: "When the property types are different"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["You can work around a type difference by providing an object to the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "figma[type]"
      }), " call, this will be used to match the value that the Figma property is set to and map it to a value for the Lit property."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Figma State=IsChecked will set checked:true\nchecked: figma.Enum(\"State\", {\n  IsChecked: true,\n}),\n// Figma \"Show icon\"=true will set iconSrc:\"chrome://example.svg\"\niconSrc: figma.boolean(\"Show icon\", {\n  true: \"chrome://example.svg\",\n  false: undefined,\n}),\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["For example, we need to work around the Figma \"State\" enumeration to ensure that ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
        href: "https://searchfox.org/mozilla-central/source/toolkit/content/widgets/moz-checkbox/moz-checkbox.figma.ts",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "moz-checkbox"
      }), " is disabled correctly in the generated code snippet:"]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Figma State=Disabled will set disabled:true on the generated code snippet\ndisabled: figma.enum(\"State\", { Disabled: true })\n// ...\nhtml`\n  <moz-checkbox\n    disabled=${props.disabled}\n  ></moz-checkbox>\n`\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h4, {
      id: "creating-the-example-template",
      children: "Creating the example template"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["This example template will become the code snippet that is shown in Figma.\nIt will basically be the same as the Lit code but without the optional chaining (", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "?."
      }), ") operator."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        className: "language-javascript",
        children: "example: props => html`\n  <moz-checkbox\n    checked=${props.checked}\n    disabled=${props.disabled}\n    iconsrc=${props.iconSrc}\n></moz-checkbox>`\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["There is ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
        href: "https://searchfox.org/mozilla-central/search?q=figma.ts&path=&case=false&regexp=false",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "other prior art available on searchfox"
      }), " when you search for figma.ts files that will assist you."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3, {
      id: "publishing-the-modified-config-file",
      children: "Publishing the modified config file"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["After making your changes to the generated file, you can verify if your changes are valid by running:\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "npx figma connect publish --dry-run"
      })]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["If this check passes, you can verify your changes on Figma by publishing the file by navigating to the directory that it is in and running ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "npx figma connect publish"
      }), ".\nAfter doing this, navigate to the node that you copied the link for earlier in this process (or check the modified config file as this will have that same URL).\nYou can test the code snippet by opening \"Explore component behavior\" under the \"Component information\" section."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p, {
      children: "If this generated snippet does not appear to be correct, you can undo the change on Figma by utilizing the following command when you are in the same directory as the config file you are working on:"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "npx figma connect unpublish"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["Afterwards, commit and submit the file via ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "moz-phab"
      }), " as you would any other bug."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2, {
      id: "how-to-find-the-code-connect-snippet",
      children: "How to find the Code Connect snippet"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p, {
      children: "If you are interacting with an instance of a Figma component and you are in Dev Mode, then you will be able to find a section called \"Code Connect\" in the \"Inspect\" sidebar.\nThe code snippet for the instance will be within that section. Depending on the component, there may be additional comments at the bottom of the code snippet that explains what may be missing from the implementation of the Figma component compared to the Lit component."
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.img, {
        src: "./img/code-connect-snippet-comments.png",
        alt: "Figma user interface showing the snippet with additional comments"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p, {
      children: "This section is also available if you are interacting with one of the variants of the main Figma component."
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.img, {
        src: "./img/code-connect-main-component-variant.png",
        alt: "Figma user interface showing the snippet when interacting with main component variants"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p, {
      children: "If you are interacting with the main Figma component itself - the wrapper holding all the variants that may exist - then there will be a \"Component information\" section under the \"Inspect\" sidebar.\nClick on \"Explore component behavior\" to inspect the code snippet as you test changing the properties of the Figma component."
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.img, {
        src: "./img/code-connect-component-playground.png",
        alt: "Figma user interface showing the component playground"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["For more examples, you can check out ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
        href: "https://www.figma.com/code-connect-docs/#publish-to-figma-to-make-handoff-a-breeze",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "Figma's Code Connect documentation"
      }), "."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2, {
      id: "code-connect-issuespitfallsscenarios",
      children: "Code Connect issues/pitfalls/scenarios"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3, {
      id: "mapping-figma-props-back-to-lit-props",
      children: "Mapping Figma props back to Lit props"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["You may encounter cases where in Figma you can toggle some configuration of a component.\nFor example, given ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
        href: "https://www.figma.com/design/3WoKOSGtaSjhUHKldHCXbc/Desktop-Components-3?node-id=32-996&m=dev",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "the \"Checkbox with label\" component"
      }), ", we can toggle a description, a support link, and an icon.\nWhen activating the \"Show description\" and \"Show support link\" toggles, we get two new editable text fields, \"Description\" and \"Support link\".\nTo ensure the generated code snippet shows the correct value for these fields, we have to map a Figma boolean to return a string when the boolean is true:"]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        className: "language-javascript",
        children: "props: {\n  description: figma.boolean(\"Show description\", {\n    true: figma.string(\"Description\"),\n  }),\n  supportPage: figma.boolean(\"Show support link\", {\n    true: \"sumo-slug\",\n  }),\n}\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["In the \"Description\" case, we use ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "figma.string(\"Description\")"
      }), " so that the generated snippet will show the current value in the \"Description\" text field.\nWe don't do this for the \"Support link\" case though, since the way to get the correct generated support link element is by passing a SUMO slug to ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "<moz-checkbox>"
      }), "."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3, {
      id: "working-with-nested-props-and-nested-components",
      children: "Working with nested props and nested components"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["You'll notice that the actual moz-checkbox config file has a relatively large ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "props"
      }), " object with two additional props objects called ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "labelProps"
      }), " and ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "checkboxProps"
      }), ".\nThis is due to how the component is set up in Figma as the main component is a wrapper called ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a, {
        href: "https://www.figma.com/design/3WoKOSGtaSjhUHKldHCXbc/Desktop-Components-3?node-id=32-996&m=dev",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "\"Checkbox with label\""
      }), ".\nThis component consists of two components, \"Checkbox\" and \"Label\", so we'll use these component names for our nested props:"]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        className: "language-javascript",
        children: "props: {\n  // labelProps is intentionally omitted for simplicity\n  labelProps: figma.nestedProps(\"Label\", ...),\n  checkboxProps: figma.nestedProps(\"Checkbox\", ...),\n}\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["This allows us to take our previously defined \"Checkbox\" props and reference them through ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "checkboxProps"
      }), " which will be required for the updated example template:"]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        className: "language-javascript",
        children: "props: {\n    // labelProps is intentionally omitted for simplicity\n  labelProps: figma.nestedProps(\"Label\", ...),\n  checkboxProps: figma.nestedProps(\"Checkbox\", {\n    checked: figma.boolean(\"Checked\"),\n    disabled: figma.enum(\"State\", { Disabled: true }),\n  }),\n}\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p, {
      children: "Once we add these nested references to our example template, then changing these properties in Figma will cause the generated code snippet to be updated accordingly:"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        className: "language-javascript",
        children: "props: {\n    // labelProps is intentionally omitted for simplicity\n  labelProps: figma.nestedProps(\"Label\", ...),\n  checkboxProps: figma.nestedProps(\"Checkbox\", {\n    checked: figma.boolean(\"Checked\"),\n    disabled: figma.enum(\"State\", { Disabled: true }),\n  }),\n  example: props => html`\n  <moz-checkbox\n    checked=${props.checkboxProps.checked}\n    disabled=${props.checkboxProps.disabled}\n></moz-checkbox>`\n}\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3, {
      id: "dont-use-conditional-statements-in-the-example-template",
      children: "Don't use conditional statements in the example template"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["The example template does not allow conditional statements. Any logic should be handled through the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "props"
      }), " object."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        className: "language-javascript",
        children: "// In this component, an icon should only render if there is a label\n// The following example is invalid\nhtml`\n<moz-component\n  label=${props.label}\n  iconsrc=${ props.label ? props.iconSrc : undefined }\n></moz-component>\n`\n// Instead, set up the figma[type] statements like this\nlabel: figma.string(\"Label\"),\niconSrc: figma.boolean(\"Show label\", {\n  true: \"chrome://example.svg\",\n  false: undefined,\n}),\n// Then create the example template as normal\nhtml`\n<moz-component\n  label=${props.label}\n  iconsrc=${props.iconSrc}\n></moz-component>\n`\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3, {
      id: "match-the-case-of-what-is-present-in-figma",
      children: "Match the case of what is present in Figma"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["Ensure that the names of any components, nested components, and properties that you use in the Code Connect file matches the name used in the Figma file.\nFor example, if a Figma property is named ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "sHoW dEsCrIpTiOn"
      }), " (not that anyone would do that), it will not map correctly if it is referred to as \"Show description\" in the config file."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3, {
      id: "what-if-something-in-figma-doesnt-map-back-to-anything-in-the-implemented-component",
      children: "What if something in Figma doesn't map back to anything in the implemented component?"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p, {
      children: "Sometimes that's okay!\nSome props will not map back to code and may be there to make using Figma easier.\nFor example, many of the options under the \"State\" select for a component do not get mapped to code.\nUsing the \"Checkbox with label\" Figma component as an example again, there are various options for State:"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.ul, {
      children: ["\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.li, {
        children: "Default"
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.li, {
        children: "Hover"
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.li, {
        children: "Active"
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.li, {
        children: "Focus"
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.li, {
        children: "Disabled"
      }), "\n"]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["There's nothing we have to pass to ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "<moz-checkbox>"
      }), " for it to appear in a \"Default\" state, so we do not need to map this.\n\"Hover\", \"Active\", and \"Focus\" are all CSS pseudo-classes that are handled by the code implementation, we don't have to pass any additional props for these states to behave as expected.\nThis leaves us with \"Disabled\" which is something that can be controlled through a property/attribute, therefore we want to make sure this attribute appears in the generated snippet when a Figma user selects \"Disabled\" in the dropdown."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        className: "language-javascript",
        children: "props: {\n  disabled: figma.enum(\"State\", { Disabled: true }),\n}\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p, {
      children: "Other times, this could be a sign that there's a deviation in the design or the implemented component.\nMaybe it's a feature that hasn't been implemented yet, and so we don't want to show any code snippets when that feature is enabled in Figma.\nIt could be something that was missed when previously creating the Code Connect config for a particular component, there could be a variety of reasons.\nIt may be worth reaching out to design to make sure the implemented component and the design component are not deviating from each other."
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h4, {
      id: "an-example-of-a-disrepancy-between-the-lit-and-figma-components",
      children: "An example of a disrepancy between the Lit and Figma components"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["The following are properties of the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "moz-message-bar"
      }), " component as noted in ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "toolkit/content/widgets/moz-message-bar.mjs"
      }), "."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        className: "language-javascript",
        children: "/**\n * @property {string} type - The type of the displayed message.\n * @property {string} heading - The heading of the message.\n * @property {string} message - The message text.\n * @property {boolean} dismissable - Whether or not the element is dismissable.\n * @property {string} messageL10nId - l10n ID for the message.\n * @property {string} messageL10nArgs - Any args needed for the message l10n ID.\n */\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p, {
      children: ["In Storybook, we are able to change the message, heading, and action button label through the Fluent tab.\nThis mostly maps to the properties in the Figma component, however, we can only update the action button label through the nested Button component.\nAdditionally, we generally do not include l10n properties in the Code Connect example snippets.\nAs the nested Button's properties are not currently exposed on the top level of the component, we are not able to reflect any changes to the Button in the Message Bar's example snippet.\nBelow, the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code, {
        children: "moz-button"
      }), " code has been hard-coded."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.img, {
        src: "./img/code-connect-message-bar.png",
        alt: "Figma user interface showing the message bar code snippet"
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
  title: 'Docs/Figma Code Connect',
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

/***/ 8193:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(37283);
} else {}


/***/ }),

/***/ 37283:
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
var f=__webpack_require__(92421),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 59147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MDXContext: () => (/* binding */ MDXContext),
/* harmony export */   MDXProvider: () => (/* binding */ MDXProvider),
/* harmony export */   useMDXComponents: () => (/* binding */ useMDXComponents),
/* harmony export */   withMDXComponents: () => (/* binding */ withMDXComponents)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92421);
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

/***/ 63829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MDXContext: () => (/* reexport safe */ _mdx_js_react__WEBPACK_IMPORTED_MODULE_0__.MDXContext),
/* harmony export */   MDXProvider: () => (/* reexport safe */ _mdx_js_react__WEBPACK_IMPORTED_MODULE_0__.MDXProvider),
/* harmony export */   useMDXComponents: () => (/* reexport safe */ _mdx_js_react__WEBPACK_IMPORTED_MODULE_0__.useMDXComponents),
/* harmony export */   withMDXComponents: () => (/* reexport safe */ _mdx_js_react__WEBPACK_IMPORTED_MODULE_0__.withMDXComponents)
/* harmony export */ });
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74331);



/***/ }),

/***/ 74331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MDXContext: () => (/* reexport safe */ _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.MDXContext),
/* harmony export */   MDXProvider: () => (/* reexport safe */ _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.MDXProvider),
/* harmony export */   useMDXComponents: () => (/* reexport safe */ _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.useMDXComponents),
/* harmony export */   withMDXComponents: () => (/* reexport safe */ _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.withMDXComponents)
/* harmony export */ });
/* harmony import */ var _lib_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59147);



/***/ })

}]);
//# sourceMappingURL=docs-README-figma-code-connect-stories-md.0a8d5172.iframe.bundle.js.map