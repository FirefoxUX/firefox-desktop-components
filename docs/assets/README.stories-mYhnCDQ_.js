import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,l as n,n as r,s as i}from"./blocks-DYgZUhjJ.js";import{a}from"./chunk-W22LQPXL-H6o6iyRO.js";import{i as o,r as s}from"./react-Bg8UoiFE.js";import{t as c}from"./moz-input-search-B7wv4NZV.js";function l(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...o(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i,{title:`UI Widgets/ Input Search/README`}),`
`,(0,d.jsx)(n.h1,{id:`mozinputsearch`,children:`MozInputSearch`}),`
`,(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:`moz-input-search`}),` is a reusable component that is used for search inputs.`]}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`moz-input-search`,{style:{width:`500px`}})})})}),`
`,(0,d.jsx)(n.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,d.jsx)(n.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,d.jsxs)(n.ul,{children:[`
`,(0,d.jsxs)(n.li,{children:[`Use `,(0,d.jsx)(n.code,{children:`moz-input-search`}),` when you need a search input to help users filter through the relevant information.`]}),`
`]}),`
`,(0,d.jsx)(n.h2,{id:`code`,children:`Code`}),`
`,(0,d.jsxs)(n.p,{children:[`The source for `,(0,d.jsx)(n.code,{children:`moz-input-search`}),` can be found under `,(0,d.jsx)(n.a,{href:`https://searchfox.org/firefox-main/source/toolkit/content/widgets/moz-input-search`,rel:`nofollow`,children:`toolkit/content/widgets/moz-input-search`})]}),`
`,(0,d.jsxs)(n.h2,{id:`how-to-use-moz-input-search`,children:[`How to use `,(0,d.jsx)(n.code,{children:`moz-input-search`})]}),`
`,(0,d.jsx)(n.h3,{id:`importing-the-element`,children:`Importing the element`}),`
`,(0,d.jsxs)(n.p,{children:[`Like other custom elements, you should usually be able to rely on `,(0,d.jsx)(n.code,{children:`moz-input-search`}),` getting lazy-loaded at the time of first use.
See `,(0,d.jsx)(n.a,{href:`https://firefox-source-docs.mozilla.org/browser/components/storybook/docs/README.reusable-widgets.stories.html#using-new-design-system-components`,rel:`nofollow`,children:`this documentation`}),` for more information on using design system custom elements.`]}),`
`,(0,d.jsxs)(n.h3,{id:`setting-the-label`,children:[`Setting the `,(0,d.jsx)(n.code,{children:`label`})]}),`
`,(0,d.jsxs)(n.p,{children:[`Providing a label for the `,(0,d.jsx)(n.code,{children:`moz-input-search`}),` component is crucial for usability and accessibility:`]}),`
`,(0,d.jsxs)(n.ul,{children:[`
`,(0,d.jsx)(n.li,{children:`Helps users understand the purpose of this search input.`}),`
`,(0,d.jsx)(n.li,{children:`Improves accessibility by ensuring screen readers can announce the function of the search input.`}),`
`]}),`
`,(0,d.jsxs)(n.p,{children:[`To set a label, use the `,(0,d.jsx)(n.code,{children:`label`}),` attribute.
In general, the label should be controlled by Fluent.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-input-search label="Label text not using Fluent"></moz-input-search>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`div`,{style:{width:`500px`},children:(0,d.jsx)(`moz-input-search`,{label:`Label text not using Fluent`})})})})}),`
`,(0,d.jsxs)(n.h3,{id:`setting-the-aria-label`,children:[`Setting the `,(0,d.jsx)(n.code,{children:`aria-label`})]}),`
`,(0,d.jsxs)(n.p,{children:[`If your use case calls for no visible label, then providing an `,(0,d.jsx)(n.code,{children:`aria-label`}),` for the `,(0,d.jsx)(n.code,{children:`moz-input-search`}),` is required for usability and accessibility:`]}),`
`,(0,d.jsxs)(n.ul,{children:[`
`,(0,d.jsx)(n.li,{children:`Improves accessibility by ensuring screen readers can announce the function of the search input.`}),`
`]}),`
`,(0,d.jsxs)(n.p,{children:[`To set the `,(0,d.jsx)(n.code,{children:`aria-label`}),`, use the `,(0,d.jsx)(n.code,{children:`aria-label`}),` attribute.
In general, the aria-label should be controlled by Fluent.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-input-search aria-label="non-visible label text not using Fluent"></moz-input-search>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`div`,{style:{width:`500px`},children:(0,d.jsx)(`moz-input-search`,{"aria-label":`non-visible label text not using Fluent`})})})})}),`
`,(0,d.jsxs)(n.h3,{id:`setting-the-description`,children:[`Setting the `,(0,d.jsx)(n.code,{children:`description`})]}),`
`,(0,d.jsxs)(n.p,{children:[`In order to set a description, use the `,(0,d.jsx)(n.code,{children:`description`}),` attribute.
In general, the description should be controlled by Fluent.
This is the preferred way of setting descriptions since it ensures consistency across multiple `,(0,d.jsx)(n.code,{children:`moz-input-search`}),` elements.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-input-search
  label="Label text not using Fluent"
  description="Description text not using Fluent">
</moz-input-search>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`div`,{style:{width:`500px`},children:(0,d.jsx)(`moz-input-search`,{label:`Label text not using Fluent`,description:`Description text not using Fluent`})})})})}),`
`,(0,d.jsxs)(n.p,{children:[`However `,(0,d.jsx)(n.code,{children:`moz-input-search`}),` does support a `,(0,d.jsx)(n.code,{children:`slot`}),` element if your use case is more complex.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-input-search label="Label text not using Fluent">
  <span slot="description">A more complex description via <slot></span>
</moz-input-search>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`div`,{style:{width:`500px`},children:(0,d.jsx)(`moz-input-search`,{label:`Label text not using Fluent`,children:(0,d.jsxs)(`span`,{slot:`description`,children:[`A more complex description via `,(0,d.jsx)(n.code,{children:`<slot>`})]})})})})})}),`
`,(0,d.jsxs)(n.h3,{id:`setting-the-value`,children:[`Setting the `,(0,d.jsx)(n.code,{children:`value`})]}),`
`,(0,d.jsxs)(n.p,{children:[`The `,(0,d.jsx)(n.code,{children:`value`}),` attribute of `,(0,d.jsx)(n.code,{children:`moz-input-search`}),` sets the initial search term displayed in the search input field.
When this search term is modified, the `,(0,d.jsx)(n.code,{children:`value`}),` is updated with the modified text.
Note: do not use `,(0,d.jsx)(n.code,{children:`value`}),` as a placeholder!
Use the `,(0,d.jsx)(n.code,{children:`placeholder`}),` attribute instead if you need placeholder text.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-input-search label="Search preferences" value="privacy"></moz-input-search>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`div`,{style:{width:`500px`},children:(0,d.jsx)(`moz-input-search`,{label:`Search preferences`,value:`privacy`})})})})}),`
`,(0,d.jsxs)(n.h3,{id:`setting-the-placeholder`,children:[`Setting the `,(0,d.jsx)(n.code,{children:`placeholder`})]}),`
`,(0,d.jsxs)(n.p,{children:[`The `,(0,d.jsx)(n.code,{children:`placeholder`}),` attribute of `,(0,d.jsx)(n.code,{children:`moz-input-search`}),` sets the placeholder text for the search input field.
In general, the placeholder should be controlled by Fluent.
This is the preferred way of setting placeholders since it ensures consistency across multiple `,(0,d.jsx)(n.code,{children:`moz-input-search`}),` elements.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-input-search label="Search preferences" placeholder="Enter search term"></moz-input-search>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`div`,{style:{width:`500px`},children:(0,d.jsx)(`moz-input-search`,{label:`Search preferences`,placeholder:`Enter search term`})})})})}),`
`,(0,d.jsxs)(n.h3,{id:`setting-the-support-page`,children:[`Setting the `,(0,d.jsx)(n.code,{children:`support-page`})]}),`
`,(0,d.jsxs)(n.p,{children:[`The `,(0,d.jsx)(n.code,{children:`support-page`}),` attribute of `,(0,d.jsx)(n.code,{children:`moz-input-search`}),` sets the SUMO page to link out to for more information.
Use the SUMO slug for the value of this attribute.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-input-search label="Search" placeholder="Search terms" support-page="addons"></moz-input-search>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`div`,{style:{width:`500px`},children:(0,d.jsx)(`moz-input-search`,{label:`Search`,placeholder:`Search terms`,"support-page":`addons`})})})})}),`
`,(0,d.jsxs)(n.h3,{id:`setting-the-accesskey`,children:[`Setting the `,(0,d.jsx)(n.code,{children:`accesskey`})]}),`
`,(0,d.jsxs)(n.p,{children:[`The `,(0,d.jsx)(n.code,{children:`accesskey`}),` attribute of `,(0,d.jsx)(n.code,{children:`moz-input-search`}),` defines a keyboard shortcut for the search input.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-input-search label="Search" placeholder="Search terms" accesskey="S"></moz-input-search>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`div`,{style:{width:`500px`},children:(0,d.jsx)(`moz-input-search`,{label:`Search`,placeholder:`Search terms`,accesskey:`S`})})})})}),`
`,(0,d.jsxs)(n.h3,{id:`setting-the-disabled-state`,children:[`Setting the `,(0,d.jsx)(n.code,{children:`disabled`}),` state`]}),`
`,(0,d.jsxs)(n.p,{children:[`In order to disable the `,(0,d.jsx)(n.code,{children:`moz-input-search`}),`, add `,(0,d.jsx)(n.code,{children:`disabled=""`}),` or `,(0,d.jsx)(n.code,{children:`disabled`}),` to the markup.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-input-search label="Search" disabled></moz-input-search>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`div`,{style:{width:`500px`},children:(0,d.jsx)(`moz-input-search`,{label:`Search`,disabled:!0})})})})}),`
`,(0,d.jsxs)(n.h3,{id:`setting-the-required-state`,children:[`Setting the `,(0,d.jsx)(n.code,{children:`required`}),` state`]}),`
`,(0,d.jsxs)(n.p,{children:[`If the `,(0,d.jsx)(n.code,{children:`moz-input-search`}),` needs to be required, add `,(0,d.jsx)(n.code,{children:`required`}),` to the markup.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-input-search label="Search" required></moz-input-search>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`div`,{style:{width:`500px`},children:(0,d.jsx)(`moz-input-search`,{label:`Search`,required:!0})})})})}),`
`,(0,d.jsx)(n.h3,{id:`fluent-usage`,children:`Fluent usage`}),`
`,(0,d.jsxs)(n.p,{children:[`The `,(0,d.jsx)(n.code,{children:`label`}),`, `,(0,d.jsx)(n.code,{children:`aria-label`}),`, `,(0,d.jsx)(n.code,{children:`description`}),`, `,(0,d.jsx)(n.code,{children:`placeholder`}),`, and `,(0,d.jsx)(n.code,{children:`accesskey`}),` attributes of `,(0,d.jsx)(n.code,{children:`moz-input-search`}),` will generally be provided via `,(0,d.jsx)(n.a,{href:`https://mozilla-l10n.github.io/localizer-documentation/tools/fluent/basic_syntax.html#attributes`,rel:`nofollow`,children:`Fluent attributes`}),`.
The relevant `,(0,d.jsx)(n.code,{children:`data-l10n-attrs`}),` are set automatically, so supply a `,(0,d.jsx)(n.code,{children:`data-l10n-id`}),` to get things working, as you would with any other element.`]}),`
`,(0,d.jsx)(n.p,{children:`For example, if you have the following Fluent messages:`}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:`moz-input-search-label =
  .label = Label text
moz-input-search-label-placeholder =
  .label = Label text
  .placeholder = Placeholder text
moz-input-search-label-description-placeholder =
  .label = Label text
  .description = Description text
  .placeholder = Placeholder text
moz-input-search-with-accesskey =
  .label = Label text
  .accesskey = L
`})}),`
`,(0,d.jsxs)(n.p,{children:[`you can use those messages to set text and attributes on the different `,(0,d.jsx)(n.code,{children:`moz-input-search`}),` elements as follows:`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-input-search data-l10n-id="moz-input-search-label"></moz-input-search>
<moz-input-search data-l10n-id="moz-input-search-label-placeholder"></moz-input-search>
<moz-input-search data-l10n-id="moz-input-search-label-description-placeholder"></moz-input-search>
<moz-input-search data-l10n-id="moz-input-search-with-accesskey"></moz-input-search>
`})}),`
`,(0,d.jsx)(n.h2,{id:`args-table`,children:`Args Table`}),`
`,(0,d.jsx)(r,{of:`moz-input-search`})]})}function u(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=a(),s(),n(),c()})))()}f();export{u as default};