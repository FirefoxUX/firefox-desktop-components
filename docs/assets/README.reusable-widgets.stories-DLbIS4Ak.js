import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{l as t,s as n}from"./blocks-DYgZUhjJ.js";import{a as r}from"./chunk-W22LQPXL-H6o6iyRO.js";import{i,r as a}from"./react-Bg8UoiFE.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Docs/Reusable Widgets`}),`
`,(0,c.jsx)(t.h1,{id:`reusable-ui-widgets`,children:`Reusable UI widgets`}),`
`,(0,c.jsx)(t.h2,{id:`background`,children:`Background`}),`
`,(0,c.jsx)(t.p,{children:`Different Firefox surfaces make use of similar UI elements such as cards, menus,
toggles, and message bars. A group of designers and developers have started
working together to create standardized versions of these elements in the form
of new web components. The intention is for these components to encapsulate our
design system, ensure accessibility and usability across the application, and
reduce the maintenance burden associated with supporting multiple different
implementations of the same UI patterns.`}),`
`,(0,c.jsxs)(t.p,{children:[`Many of these components are being built using the `,(0,c.jsx)(t.a,{href:`https://lit.dev/`,rel:`nofollow`,children:`Lit
library`}),` to take advantage of its templating syntax and
re-rendering logic. All new components are being documented in Storybook in an
effort to create a catalog that engineers and designers can use to see which
components can be easily lifted off the shelf for use throughout Firefox.`]}),`
`,(0,c.jsxs)(t.p,{children:[`If you want to see the progress over time of these new reusable components, we have a `,(0,c.jsx)(t.a,{href:`https://firefoxux.github.io/recomp-metrics/`,rel:`nofollow`,children:`Reusable Component Adoption chart`}),` that you should check out!`]}),`
`,(0,c.jsx)(t.h2,{id:`designing-new-reusable-widgets`,children:`Designing new reusable widgets`}),`
`,(0,c.jsx)(t.p,{children:`Widgets that live at the global level, "UI Widgets", should be created in collaboration with the Design System team.
This ensures consistency with the rest of the elements in the Design System and the existing UI elements.
Otherwise, you should consult with your team and the appropriate designer to create domain-specific UI widgets.
Ideally, these domain widgets should be consistent with the rest of the UI patterns established in Firefox.`}),`
`,(0,c.jsx)(t.h3,{id:`does-an-existing-widget-cover-the-use-case-you-need`,children:`Does an existing widget cover the use case you need?`}),`
`,(0,c.jsxs)(t.p,{children:[`Before creating a new reusable widget, make sure there isn't a widget you could use already.
When designing a new reusable widget, ensure it is designed for all users.
Here are some questions you can use to help include all users: how will people perceive, operate, and understand this widget? Will the widget use standards proven technology.
`,(0,c.jsx)(t.a,{href:`https://wiki.mozilla.org/Accessibility/Guidelines#General_Considerations`,rel:`nofollow`,children:`Please refer to the "General Considerations" section of the Mozilla Accessibility Release Guidelines document`}),` for more details to ensure your widget adheres to accessibility standards.`]}),`
`,(0,c.jsx)(t.h3,{id:`supporting-widget-use-in-different-processes`,children:`Supporting widget use in different processes`}),`
`,(0,c.jsxs)(t.p,{children:[`A newly designed widget may need to work in the parent process, the content process, or both depending on your use case.
`,(0,c.jsx)(t.a,{href:`https://firefox-source-docs.mozilla.org/dom/ipc/process_model.html`,rel:`nofollow`,children:`See the Process Model document for more information about these different processes`}),`.
You will likely be using your widget in a privileged process (such as the parent or privileged content) with access to `,(0,c.jsx)(t.code,{children:`Services`}),`, `,(0,c.jsx)(t.code,{children:`XPCOMUtils`}),`, and other globals.
Storybook and other web content do not have access to these privileged globals, so you will need to write workarounds for `,(0,c.jsx)(t.code,{children:`Services`}),`, `,(0,c.jsx)(t.code,{children:`XPCOMUtils`}),`, chrome URIs for CSS files and assets, etc.
`,(0,c.jsxs)(t.a,{href:`https://searchfox.org/mozilla-central/search?q=moz-support-link&path=&case=false&regexp=false`,rel:`nofollow`,children:[`Check out moz-support-link.mjs and moz-support-link.stories.mjs for an example of a widget being used in the parent/chrome and needing to handle `,(0,c.jsx)(t.code,{children:`XPCOMUtils`}),` in Storybook`]}),`.
`,(0,c.jsx)(t.a,{href:`https://searchfox.org/firefox-main/source/toolkit/content/widgets/moz-toggle/moz-toggle.mjs`,rel:`nofollow`,children:`See moz-toggle.mjs for handling chrome URIs for CSS in Storybook`}),`.
`,(0,c.jsxs)(t.a,{href:`https://searchfox.org/firefox-main/source/toolkit/content/widgets/moz-label/moz-label.mjs`,rel:`nofollow`,children:[`See moz-label.mjs for an example of handling `,(0,c.jsx)(t.code,{children:`Services`}),` in Storybook`]}),`.`]}),`
`,(0,c.jsx)(t.h3,{id:`autonomous-or-customized-built-in-custom-elements`,children:`Autonomous or Customized built-in Custom Elements`}),`
`,(0,c.jsxs)(t.p,{children:[`There are two types of custom elements, autonomous elements that extend `,(0,c.jsx)(t.code,{children:`HTMLElement`}),` and customized built-in elements that extend basic HTML elements.
If you use autonomous elements, you can use Shadow DOM and/or the Lit library.
`,(0,c.jsx)(t.a,{href:`https://github.com/lit/lit-element/issues/879`,rel:`nofollow`,children:`Lit does not support customized built-in custom elements`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`In some cases, you may want to provide some functionality on top of a built-in HTML element, `,(0,c.jsxs)(t.a,{href:`https://searchfox.org/mozilla-central/rev/3563da061ca2b32f7f77f5f68088dbf9b5332a9f/toolkit/content/widgets/moz-support-link/moz-support-link.mjs#83-89`,rel:`nofollow`,children:[`like how `,(0,c.jsx)(t.code,{children:`moz-support-link`}),` prepares the `,(0,c.jsx)(t.code,{children:`href`}),` value for anchor elements`]}),`.
In other cases, you may want to focus on creating markup and reacting to changes on the element.
This is where Lit can be useful for declaritively defining the markup and reacting to changes when attributes are updated.`]}),`
`,(0,c.jsx)(t.h3,{id:`how-will-developers-use-your-widget`,children:`How will developers use your widget?`}),`
`,(0,c.jsxs)(t.p,{children:[`What does the interface to your widget look like?
Do you expect developers to use reactive attributes or `,(0,c.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots#adding_flexibility_with_slots`,rel:`nofollow`,children:`slots`}),`?
If there are many ways to accomplish the same end result, this could result in future confusion and increase the maintainance cost.`]}),`
`,(0,c.jsx)(t.p,{children:`You should write stories for your widget to demonstrate how it can be used.
These stories can be used as guides for new use cases that may appear in the future.
This can also help draw the line for the responsibilities of your widget.`}),`
`,(0,c.jsx)(t.h2,{id:`adding-new-design-system-components`,children:`Adding new design system components`}),`
`,(0,c.jsxs)(t.p,{children:[`We have a `,(0,c.jsx)(t.code,{children:`./mach addwidget`}),` scaffold command to make it easier to create new
reusable components and hook them up to Storybook. Currently this command can
only be used to add a new Lit based web component to `,(0,c.jsx)(t.code,{children:`toolkit/content/widgets`}),`.
In the future we may expand it to support options for creating components
without using Lit and for adding components to different directories.
See `,(0,c.jsx)(t.a,{href:`https://bugzilla.mozilla.org/show_bug.cgi?id=1803677`,rel:`nofollow`,children:`Bug 1803677`}),` for more details on these future use cases.`]}),`
`,(0,c.jsx)(t.p,{children:`To create a new component, you run:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-sh`,children:`# Component names should be in kebab-case and contain at least 1 -.
./mach addwidget component-name
`})}),`
`,(0,c.jsx)(t.p,{children:`The scaffold command will generate the following files:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-sh`,children:`└── toolkit
    └── content
        ├── tests
        │   └── widgets
        │       └── test_component_name.html # chrome test
        └── widgets
            └── component-name # new folder for component code
                ├── component-name.css # component specific CSS
                ├── component-name.mjs # Lit based component
                └── component-name.stories.mjs # component stories
`})}),`
`,(0,c.jsxs)(t.p,{children:[`It will also make modifications to `,(0,c.jsx)(t.code,{children:`toolkit/content/jar.mn`}),` to add `,(0,c.jsx)(t.code,{children:`chrome://`}),`
URLs for the new files, and to `,(0,c.jsx)(t.code,{children:`toolkit/content/tests/widgets/chrome.toml`}),` to
enable running the newly added test.`]}),`
`,(0,c.jsx)(t.p,{children:`After running the scaffold command you can start Storybook and you will see
placeholder content that has been generated for your component. You can then
start altering the generated files and see your changes reflected in Storybook.`}),`
`,(0,c.jsxs)(t.h3,{id:`known-browser_all_files_referencedjs-issue`,children:[`Known `,(0,c.jsx)(t.code,{children:`browser_all_files_referenced.js`}),` issue`]}),`
`,(0,c.jsxs)(t.p,{children:[`Unfortunately for now `,(0,c.jsx)(t.a,{href:`https://searchfox.org/firefox-main/source/browser/base/content/test/browser-static/browser_all_files_referenced.js`,rel:`nofollow`,children:`the
browser_all_files_referenced.js test`}),`
will fail unless your new component is immediately used somewhere outside
of Storybook. We have plans to fix this issue, `,(0,c.jsx)(t.a,{href:`https://bugzilla.mozilla.org/show_bug.cgi?id=1806002`,rel:`nofollow`,children:`see Bug 1806002 for more details`}),`, but for now you can get around it
by updating `,(0,c.jsx)(t.a,{href:`https://searchfox.org/mozilla-central/rev/5c922d8b93b43c18bf65539bfc72a30f84989003/browser/base/content/test/static/browser_all_files_referenced.js#113`,rel:`nofollow`,children:`this array`}),` to include your new chrome filepath.`]}),`
`,(0,c.jsx)(t.h3,{id:`using-new-design-system-components`,children:`Using new design system components`}),`
`,(0,c.jsxs)(t.p,{children:[`Once you've added a new component to `,(0,c.jsx)(t.code,{children:`toolkit/content/widgets`}),` and created
`,(0,c.jsx)(t.code,{children:`chrome://`}),` URLs via `,(0,c.jsx)(t.code,{children:`toolkit/content/jar.mn`}),` you should be able to start using it
throughout Firefox. In most cases, you should be able to rely on your custom
element getting lazy loaded at the time of first use, provided you are working
in a privileged context where `,(0,c.jsx)(t.code,{children:`customElements.js`}),` is available.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Note`}),` Since `,(0,c.jsx)(t.a,{href:`https://bugzilla.mozilla.org/show_bug.cgi?id=1896837`,rel:`nofollow`,children:`bug 1896837`}),`
lazy loaded UI widgets are loaded at the DOMContentLoaded event. Please notify
the Reusable Components team if you see weirdness due to this.`]}),`
`,(0,c.jsxs)(t.p,{children:[`You can import the component directly into `,(0,c.jsx)(t.code,{children:`html`}),`/`,(0,c.jsx)(t.code,{children:`xhtml`}),` files via a
`,(0,c.jsx)(t.code,{children:`script`}),` tag with `,(0,c.jsx)(t.code,{children:`type="module"`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<script type="module" src="chrome://global/content/elements/your-component-name.mjs"><\/script>
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Note`}),` you will need to add your new widget to `,(0,c.jsx)(t.a,{href:`https://searchfox.org/mozilla-central/rev/cde3d4a8d228491e8b7f1bd94c63bbe039850696/toolkit/content/customElements.js#791-810`,rel:`nofollow`,children:`this array in customElements.js`}),` to ensure it gets lazy loaded on creation.`]}),`
`,(0,c.jsx)(t.h2,{id:`common-pitfalls`,children:`Common pitfalls`}),`
`,(0,c.jsx)(t.p,{children:`If you're trying to use a reusable widget but nothing is appearing on the
page it may be due to one of the following issues:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[`Omitting the `,(0,c.jsx)(t.code,{children:`type="module"`}),` in your `,(0,c.jsx)(t.code,{children:`script`}),` tag.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[`Wrong file path for the `,(0,c.jsx)(t.code,{children:`src`}),` of your imported module.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[`Widget is not declared or incorrectly declared in the correct `,(0,c.jsx)(t.code,{children:`jar.mn`}),` file.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[`Not specifying the `,(0,c.jsx)(t.code,{children:`html:`}),` namespace when using a custom HTML element in an
`,(0,c.jsx)(t.code,{children:`xhtml`}),` file. For example the tag should look something like this:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<html:your-component-name></html:your-component-name>
`})}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[`Trying to extend a built-in HTML element in Lit. `,(0,c.jsx)(t.a,{href:`https://github.com/lit/lit-element/issues/879#issuecomment-1061892879`,rel:`nofollow`,children:`Because Webkit never
implemented support for customized built-ins, Lit doesn't support it either.`}),`
That means if you want to do something like:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-js`,children:`customElements.define("cool-button", CoolButton, { extends: "button" });
`})}),`
`,(0,c.jsxs)(t.p,{children:[`you will need to make a vanilla custom element, you cannot use Lit.
`,(0,c.jsxs)(t.a,{href:`https://searchfox.org/firefox-main/source/toolkit/content/widgets/moz-support-link/moz-support-link.mjs`,rel:`nofollow`,children:[`For an example of extending an HTML element, see `,(0,c.jsx)(t.code,{children:`moz-support-link`})]}),`.`]}),`
`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),a(),t()})))()}l();export{s as default};