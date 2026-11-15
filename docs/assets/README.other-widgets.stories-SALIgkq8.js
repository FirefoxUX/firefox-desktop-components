import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{l as t,s as n}from"./blocks-DYgZUhjJ.js";import{a as r}from"./chunk-W22LQPXL-H6o6iyRO.js";import{i,r as a}from"./react-Bg8UoiFE.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Docs/Other Widgets`}),`
`,(0,c.jsx)(t.h1,{id:`other-types-of-ui-widgets`,children:`Other types of UI Widgets`}),`
`,(0,c.jsxs)(t.p,{children:[`In addition to the `,(0,c.jsx)(t.a,{href:`https://firefox-source-docs.mozilla.org/browser/components/storybook/docs/README.reusable-widgets.stories.html`,rel:`nofollow`,children:`new reusable UI widgets`}),` there are existing elements that serve a similar role.
These older elements are broken down into two groups: Mozilla Custom Elements and User Agent (UA) Widgets.
Additionally, we also have domain-specific widgets that are similar to the reusable widgets but are created to serve a specific need and may or may not adhere to the Design Systems specifications.`]}),`
`,(0,c.jsxs)(t.h2,{id:`older-custom-elements-in-toolkitwidgets`,children:[`Older custom elements in `,(0,c.jsx)(t.code,{children:`toolkit/widgets`})]}),`
`,(0,c.jsxs)(t.p,{children:[`There are existing UI widgets in `,(0,c.jsx)(t.code,{children:`toolkit/content/widgets/`}),` that belong to one of two groups: Mozilla Custom Elements or User Agent (UA) Widgets.
These `,(0,c.jsx)(t.a,{href:`https://searchfox.org/mozilla-central/rev/cde3d4a8d228491e8b7f1bd94c63bbe039850696/toolkit/content/customElements.js#792-809,847-866`,rel:`nofollow`,children:`existing custom elements`}),` are loaded into all privileged main process documents automatically.
You can determine if a custom element belongs to the existing UI widgets category by either `,(0,c.jsx)(t.a,{href:`https://searchfox.org/mozilla-central/rev/cde3d4a8d228491e8b7f1bd94c63bbe039850696/toolkit/content/customElements.js#792-809,847-866`,rel:`nofollow`,children:`viewing the array`}),` or by viewing the `,(0,c.jsx)(t.a,{href:`https://searchfox.org/firefox-main/source/toolkit/content/widgets`,rel:`nofollow`,children:`files in toolkit/content/widgets`}),`.
Additionally, these older custom elements are a mix of XUL and HTML elements.`]}),`
`,(0,c.jsx)(t.h3,{id:`mozilla-custom-elements`,children:`Mozilla Custom Elements`}),`
`,(0,c.jsxs)(t.p,{children:[`Unlike newer reusable UI widgets, the older Mozilla Custom Elements do not have a dedicated directory.
For example `,(0,c.jsx)(t.code,{children:`arrowscrollbox.js`}),` is an older single file custom element versus `,(0,c.jsx)(t.code,{children:`moz-button-group/moz-button-group.mjs`}),` which exemplifies the structure followed by newer custom elements.`]}),`
`,(0,c.jsx)(t.h3,{id:`user-agent-ua-widgets`,children:`User Agent (UA) widgets`}),`
`,(0,c.jsx)(t.p,{children:`User agent (UA) widgets are like custom elements but run in per-origin UA widget scope instead of the chrome or content scope.
There are a much smaller number of these widgets compared to the Mozilla Custom Elements:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`https://searchfox.org/firefox-main/source/toolkit/content/widgets/datetimebox.js`,rel:`nofollow`,children:`datetimebox.js`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`https://searchfox.org/firefox-main/source/toolkit/content/widgets/marquee.js`,rel:`nofollow`,children:`marquee.js`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`https://searchfox.org/firefox-main/source/toolkit/content/widgets/videocontrols.js`,rel:`nofollow`,children:`videocontrols.js`})}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Please refer to the existing `,(0,c.jsx)(t.a,{href:`https://firefox-source-docs.mozilla.org/toolkit/content/toolkit_widgets/ua_widget.html`,rel:`nofollow`,children:`UA widgets documentation`}),` for more details.`]}),`
`,(0,c.jsx)(t.h3,{id:`how-to-use-existing-mozilla-custom-elements`,children:`How to use existing Mozilla Custom Elements`}),`
`,(0,c.jsxs)(t.p,{children:[`The existing Mozilla Custom Elements are either `,(0,c.jsx)(t.a,{href:`https://searchfox.org/mozilla-central/rev/d23849dd6d83edbe681d3b4828700256ea34a654/toolkit/content/customElements.js#853-878`,rel:`nofollow`,children:`automatically imported`}),` into all chrome privileged documents, or are `,(0,c.jsx)(t.a,{href:`https://searchfox.org/mozilla-central/rev/d23849dd6d83edbe681d3b4828700256ea34a654/toolkit/content/customElements.js#789-809`,rel:`nofollow`,children:`lazy loaded`}),` and get automatically imported when first used.
In either case, these existing elements do not need to be imported individually via `,(0,c.jsx)(t.code,{children:`<script>`}),` tag.
As long as you are working in a chrome privileged document, you will have access to the existing Mozilla Custom Elements.
You can dynamically create one of the existing custom elements by using `,(0,c.jsx)(t.code,{children:`document.createDocument("customElement)`}),` or `,(0,c.jsx)(t.code,{children:`document.createXULElement("customElement")`}),` in the relevant JS file, or by using the custom element tag in the relevant XHTML document.
For example, `,(0,c.jsx)(t.code,{children:`document.createXULElement("checkbox")`}),` creates an instance of `,(0,c.jsx)(t.a,{href:`https://searchfox.org/firefox-main/source/toolkit/content/widgets/checkbox.js`,rel:`nofollow`,children:`widgets/checkbox.js`}),` while using `,(0,c.jsx)(t.code,{children:`<checkbox>`}),` declares an instance in the XUL document.
You can see the checkbox widget in use in about:preferences.`]}),`
`,(0,c.jsx)(t.h3,{id:`how-to-use-existing-ua-widgets`,children:`How to use existing UA Widgets`}),`
`,(0,c.jsxs)(t.p,{children:[`Please refer to the `,(0,c.jsx)(t.a,{href:`https://firefox-source-docs.mozilla.org/toolkit/content/toolkit_widgets/ua_widget.html`,rel:`nofollow`,children:`existing UA widgets documentation`}),` for more details on how to use these widgets.`]}),`
`,(0,c.jsx)(t.h3,{id:`how-these-widgets-behave-in-chrome-versus-in-content`,children:`How these widgets behave in chrome versus in-content`}),`
`,(0,c.jsx)(t.p,{children:`The UA widgets are intended for web content, they may or may not work in-content or in the chrome.
However since these widgets run in a specific UA widget scope, their DOM cannot be accessed while in a content process.`}),`
`,(0,c.jsx)(t.p,{children:`The existing Mozilla Custom Elements can only be used in privileged content processes or in the chrome.
Since these elements cannot be used in regular web content, there is no difference in how they behave in the chrome versus in-content.`}),`
`,(0,c.jsx)(t.h2,{id:`domain-specific-widgets`,children:`Domain-specific Widgets`}),`
`,(0,c.jsxs)(t.p,{children:[`Not all reusable components should be used throughout the entirety of Firefox.
While we do have global UI patterns and components such as a button and modals, there are also specific features within the browser that include their own unique reusable patterns.
These patterns and components are known as "domain-specific widgets".
For example, the `,(0,c.jsx)(t.a,{href:`https://searchfox.org/firefox-main/source/browser/components/aboutlogins/content/components/login-timeline.mjs`,rel:`nofollow`,children:`login-timeline widget`}),` is a domain-specific widget.`]}),`
`,(0,c.jsx)(t.h3,{id:`adding-new-domain-specific-widgets`,children:`Adding new domain-specific widgets`}),`
`,(0,c.jsxs)(t.p,{children:[`While we do have the `,(0,c.jsx)(t.code,{children:`./mach addwidget`}),` command, as noted in the `,(0,c.jsx)(t.a,{href:`./README.reusable-widgets.stories.md#adding-new-design-system-components`,children:`adding new design system components document`}),`, this command does not currently support the domain-specific widget case.
`,(0,c.jsx)(t.a,{href:`https://bugzilla.mozilla.org/show_bug.cgi?id=1828181`,rel:`nofollow`,children:`See Bug 1828181 for more details on supporting this case`}),`.
Instead, you will need to use `,(0,c.jsx)(t.code,{children:`./mach addstory your-widget "your-project-or-team-name"`}),` to create a new story in `,(0,c.jsx)(t.code,{children:`browser/components/storybook/stories`}),`.
You can also use `,(0,c.jsx)(t.code,{children:`./mach addstory your-widget "your-project-or-team-name" --path <your-widget-path>/<widget-source>`}),` so that your widget's source is imported correctly.`]}),`
`,(0,c.jsx)(t.p,{children:`If you specified a path and have Storybook running, a blank story entry for your widget will appear under the Domain-Specific UI Widgets/your-project section.
Otherwise, if you have not added a path, Storybook will throw an error saying that it "Can't resolve 'None'" in the newly added story.
This is expected and serves as a reminder that you need to update the newly created story with the widget source import.`}),`
`,(0,c.jsxs)(t.p,{children:[`Since Storybook is unaware of how the actual code is added or built, we won't go into detail about adding your new widget to the codebase.
It's recommended to have a `,(0,c.jsx)(t.code,{children:`.html`}),` test for your new widget since this lets you unit test the component directly rather than using integration tests with the domain.
To see what kind of files you may need for your widget, please refer back to `,(0,c.jsxs)(t.a,{href:`./README.reusable-widgets.stories.md#adding-new-design-system-components`,children:[`the output of the `,(0,c.jsx)(t.code,{children:`./mach addwidget`}),` command`]}),`.
Just like with the UI widgets, `,(0,c.jsxs)(t.a,{href:`./README.reusable-widgets.stories.md#known-browser_all_files_referencedjs-issue`,children:[`the `,(0,c.jsx)(t.code,{children:`browser_all_files_referenced.js`}),` will fail unless you use your component immediately outside of Storybook.`]})]}),`
`,(0,c.jsx)(t.h3,{id:`using-new-domain-specific-widgets`,children:`Using new domain-specific widgets`}),`
`,(0,c.jsxs)(t.p,{children:[`This is effectively the same as `,(0,c.jsx)(t.a,{href:`./README.reusable-widgets.stories.md#using-new-design-system-components`,children:`using new design system components`}),`. In general you should be able to rely on these elements getting lazily loaded at the time of first use, similar to how existing custom elements are imported.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Outside of chrome privileged documents you may need to import your widget into the relevant `,(0,c.jsx)(t.code,{children:`html`}),`/`,(0,c.jsx)(t.code,{children:`xhtml`}),` files via a `,(0,c.jsx)(t.code,{children:`script`}),` tag with `,(0,c.jsx)(t.code,{children:`type="module"`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<script type="module" src="chrome://browser/content/<domain-directory>/<your-widget>.mjs"><\/script>
`})})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),a(),t()})))()}l();export{s as default};