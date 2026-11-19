import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,l as n,n as r,s as i}from"./blocks-DYgZUhjJ.js";import{a}from"./chunk-W22LQPXL-H6o6iyRO.js";import{i as o,r as s}from"./react-Bg8UoiFE.js";import{n as c}from"./moz-input-folder-BqgsUI1r.js";function l(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...o(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i,{title:`UI Widgets/ Input Folder/README`}),`
`,(0,d.jsx)(n.h1,{id:`mozinputfolder`,children:`MozInputFolder`}),`
`,(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:`moz-input-folder`}),` is a reusable component that provides the ability to browse and pick a folder from the file system. It displays the path and icon of the selected folder to the user. It can also be configured to display custom text if needed.`]}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`div`,{style:{width:`500px`},onClickCapture:e=>e.stopPropagation(),children:(0,d.jsx)(`moz-input-folder`,{label:`Save files to`,placeholder:`Select folder`})})})})}),`
`,(0,d.jsx)(n.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,d.jsx)(n.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,d.jsxs)(n.ul,{children:[`
`,(0,d.jsxs)(n.li,{children:[`Use `,(0,d.jsx)(n.code,{children:`moz-input-folder`}),` when you want to allow a user to select a directory.`]}),`
`]}),`
`,(0,d.jsx)(n.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,d.jsxs)(n.ul,{children:[`
`,(0,d.jsx)(n.li,{children:`When users need to select individual files rather than folders.`}),`
`]}),`
`,(0,d.jsx)(n.h2,{id:`code`,children:`Code`}),`
`,(0,d.jsxs)(n.p,{children:[`The source for `,(0,d.jsx)(n.code,{children:`moz-input-folder`}),` can be found under `,(0,d.jsx)(n.a,{href:`https://searchfox.org/firefox-main/source/toolkit/content/widgets/moz-input-folder`,rel:`nofollow`,children:`toolkit/content/widgets/moz-input-folder/`})]}),`
`,(0,d.jsxs)(n.h2,{id:`how-to-use-moz-input-folder`,children:[`How to use `,(0,d.jsx)(n.code,{children:`moz-input-folder`})]}),`
`,(0,d.jsx)(n.h3,{id:`importing-the-element`,children:`Importing the element`}),`
`,(0,d.jsxs)(n.p,{children:[`Like other custom elements, you should usually be able to rely on `,(0,d.jsx)(n.code,{children:`moz-input-folder`}),` getting lazy loaded at the time of first use.
See `,(0,d.jsx)(n.a,{href:`https://firefox-source-docs.mozilla.org/browser/components/storybook/docs/README.reusable-widgets.stories.html#using-new-design-system-components`,rel:`nofollow`,children:`this documentation`}),` for more information on using design system custom elements.`]}),`
`,(0,d.jsxs)(n.h3,{id:`setting-the-label`,children:[`Setting the `,(0,d.jsx)(n.code,{children:`label`})]}),`
`,(0,d.jsx)(n.p,{children:`Providing a label for the moz-input-folder component is crucial for usability and accessibility:`}),`
`,(0,d.jsxs)(n.ul,{children:[`
`,(0,d.jsx)(n.li,{children:`Helps users understand the purpose of the folder picker.`}),`
`,(0,d.jsx)(n.li,{children:`Improves accessibility by ensuring screen readers can announce the function of the input.`}),`
`]}),`
`,(0,d.jsxs)(n.p,{children:[`To set a label, use the `,(0,d.jsx)(n.code,{children:`label`}),` attribute. In general, the label should be controlled by Fluent.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-input-folder label="Label text"></moz-input-folder>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`div`,{style:{width:`500px`},onClickCapture:e=>e.stopPropagation(),children:(0,d.jsx)(`moz-input-folder`,{label:`Label text`})})})})}),`
`,(0,d.jsxs)(n.h3,{id:`setting-the-description`,children:[`Setting the `,(0,d.jsx)(n.code,{children:`description`})]}),`
`,(0,d.jsxs)(n.p,{children:[`In order to set a description, use the `,(0,d.jsx)(n.code,{children:`description`}),` attribute.
In general, the description should be controlled by Fluent. This is the the preferred way of setting  descriptions since it ensures consistency across instances of `,(0,d.jsx)(n.code,{children:`moz-input-folder`}),`.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-input-folder label="Label" description="Description text"></moz-input-folder>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`div`,{style:{width:`500px`},onClickCapture:e=>e.stopPropagation(),children:(0,d.jsx)(`moz-input-folder`,{label:`Label`,description:`Description text`})})})})}),`
`,(0,d.jsxs)(n.p,{children:[`However, `,(0,d.jsx)(n.code,{children:`moz-input-folder`}),` does support a `,(0,d.jsx)(n.code,{children:`slot`}),` element if your use case is more complex.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-input-folder label="Label">
  <span slot="description">A more complex description</span>
</moz-input-folder>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`div`,{style:{width:`500px`},onClickCapture:e=>e.stopPropagation(),children:(0,d.jsx)(`moz-input-folder`,{label:`Label`,children:(0,d.jsxs)(`span`,{slot:`description`,children:[`A more `,(0,d.jsx)(`b`,{children:`complex`}),` description`]})})})})})}),`
`,(0,d.jsxs)(n.h3,{id:`setting-the-value`,children:[`Setting the `,(0,d.jsx)(n.code,{children:`value`})]}),`
`,(0,d.jsxs)(n.p,{children:[`The `,(0,d.jsx)(n.code,{children:`value`}),` attribute of `,(0,d.jsx)(n.code,{children:`moz-input-folder`}),` sets the initial folder path displayed in the input field. When a new folder is selected, the `,(0,d.jsx)(n.code,{children:`value`}),` gets updated with that folder's path.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-input-folder label="Save files to:" value="/User/Downloads"></moz-input-folder>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`div`,{style:{width:`500px`},onClickCapture:e=>e.stopPropagation(),children:(0,d.jsx)(`moz-input-folder`,{label:`Save files to:`,value:`/User/Downloads`})})})})}),`
`,(0,d.jsxs)(n.h3,{id:`setting-the-displayvalue`,children:[`Setting the `,(0,d.jsx)(n.code,{children:`displayValue`})]}),`
`,(0,d.jsxs)(n.p,{children:[`Use `,(0,d.jsx)(n.code,{children:`displayValue`}),` property to display something other than a folder path in the input element. Listen to the `,(0,d.jsx)(n.code,{children:`moz-input-folder`}),` `,(0,d.jsx)(n.code,{children:`change`}),` event to set a `,(0,d.jsx)(n.code,{children:`displayValue`}),` after the new folder was selected. The `,(0,d.jsx)(n.code,{children:`folder`}),` property represents the selected folder in the file system (`,(0,d.jsx)(n.code,{children:`nsIFile`}),` object). You can use properties of the `,(0,d.jsx)(n.code,{children:`folder`}),` when setting a `,(0,d.jsx)(n.code,{children:`displayValue`}),` (e.g., `,(0,d.jsx)(n.code,{children:`folder.path`}),`, `,(0,d.jsx)(n.code,{children:`folder.displayName`}),` or `,(0,d.jsx)(n.code,{children:`folder.leafName`}),`).`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-input-folder label="Save files to:" value="/User/Downloads" displayvalue="Downloads"></moz-input-folder>
`})}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-js`,children:`// Code example
let mozInputFolder = document.querySelector("moz-input-folder");
mozInputFolder.addEventListener(
  "change",
  () => {
    mozInputFolder.displayValue = mozInputFolder.folder.displayName;
  }
);
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`div`,{style:{width:`500px`},onClickCapture:e=>e.stopPropagation(),children:(0,d.jsx)(`moz-input-folder`,{label:`Save files to:`,value:`/User/Downloads`,displayvalue:`Downloads`})})})})}),`
`,(0,d.jsxs)(n.h3,{id:`setting-the-disabled-state`,children:[`Setting the `,(0,d.jsx)(n.code,{children:`disabled`}),` state`]}),`
`,(0,d.jsxs)(n.p,{children:[`In order to disable the `,(0,d.jsx)(n.code,{children:`moz-input-folder`}),`, add `,(0,d.jsx)(n.code,{children:`disabled=""`}),` or `,(0,d.jsx)(n.code,{children:`disabled`}),` to the markup with no value.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-input-folder label="Label" disabled></moz-input-folder>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`div`,{style:{width:`500px`},onClickCapture:e=>e.stopPropagation(),children:(0,d.jsx)(`moz-input-folder`,{label:`Label`,disabled:!0})})})})}),`
`,(0,d.jsxs)(n.h3,{id:`setting-the-accesskey`,children:[`Setting the `,(0,d.jsx)(n.code,{children:`accesskey`})]}),`
`,(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:`accesskey`}),` defines an keyboard shortcut for the input.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-input-folder label="Label with accesskey" accesskey="L"></moz-input-folder>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`div`,{style:{width:`500px`},onClickCapture:e=>e.stopPropagation(),children:(0,d.jsx)(`moz-input-folder`,{label:`Label with accesskey`,accesskey:`L`})})})})}),`
`,(0,d.jsx)(n.h3,{id:`adding-additional-actions`,children:`Adding additional actions`}),`
`,(0,d.jsxs)(n.p,{children:[`The `,(0,d.jsx)(n.code,{children:`actions`}),` slot can be used in cases where we need to support additional buttons beyond the built-in folder picker button, or other interactive content.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-input-folder label="Label">
  <moz-button slot="actions">More actions</moz-button>
</moz-input-folder>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`div`,{style:{width:`500px`},onClickCapture:e=>e.stopPropagation(),children:(0,d.jsx)(`moz-input-folder`,{label:`Label`,children:(0,d.jsx)(`moz-button`,{slot:`actions`,children:`More actions`})})})})})}),`
`,(0,d.jsx)(n.h3,{id:`fluent-usage`,children:`Fluent usage`}),`
`,(0,d.jsxs)(n.p,{children:[`The `,(0,d.jsx)(n.code,{children:`label`}),`, `,(0,d.jsx)(n.code,{children:`description`}),`, `,(0,d.jsx)(n.code,{children:`placeholder`}),` and `,(0,d.jsx)(n.code,{children:`accesskey`}),` attributes of `,(0,d.jsx)(n.code,{children:`moz-input-folder`}),` will generally be provided via `,(0,d.jsx)(n.a,{href:`https://mozilla-l10n.github.io/localizer-documentation/tools/fluent/basic_syntax.html#attributes`,rel:`nofollow`,children:`Fluent attributes`}),`.
The relevant `,(0,d.jsx)(n.code,{children:`data-l10n-attrs`}),` are set automatically, so to get things working you just need to supply a `,(0,d.jsx)(n.code,{children:`data-l10n-id`}),` as you would with any other element.`]}),`
`,(0,d.jsx)(n.p,{children:`For example, the following Fluent messages:`}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:`moz-input-folder-label =
  .label = Save files to
moz-input-folder-placeholder =
  .label = Save files to
  .placeholder = Select folder
moz-input-folder-description =
  .label = Save files to
  .description = Description text
  .placeholder = Select folder
moz-input-folder-with-accesskey =
  .label = Save files to
  .accesskey = v
`})}),`
`,(0,d.jsxs)(n.p,{children:[`would be used to set text and attributes on the different `,(0,d.jsx)(n.code,{children:`moz-input-folder`}),` elements as follows:`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-input-folder data-l10n-id="moz-input-folder-label"></moz-input-folder>
<moz-input-folder data-l10n-id="moz-input-folder-placeholder"></moz-input-folder>
<moz-input-folder data-l10n-id="moz-input-folder-description"></moz-input-folder>
<moz-input-folder data-l10n-id="moz-input-folder-with-accesskey"></moz-input-folder>
`})}),`
`,(0,d.jsx)(n.h2,{id:`args-table`,children:`Args Table`}),`
`,(0,d.jsx)(r,{of:`moz-input-folder`})]})}function u(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=a(),s(),n(),c()})))()}f();export{u as default};