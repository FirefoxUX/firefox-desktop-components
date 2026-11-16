import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,l as n,n as r,s as i}from"./blocks-DYgZUhjJ.js";import{a}from"./chunk-W22LQPXL-H6o6iyRO.js";import{i as o,r as s}from"./react-Bg8UoiFE.js";import{t as c}from"./moz-checkbox-ef1vxqJ7.js";function l(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...o(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i,{title:`UI Widgets/ Checkbox/README`}),`
`,(0,d.jsx)(n.h1,{id:`mozcheckbox`,children:`MozCheckbox`}),`
`,(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:`moz-checkbox`}),` is an element that lets users select multiple options from a list of choices.
It can also function as a toggle, allowing users to make a binary choice like turning a feature on or off.
It is a wrapper of `,(0,d.jsx)(n.code,{children:`<input type="checkbox">`}),` with built-in support for label and description text, as well as icons.`]}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`moz-checkbox`,{label:`Toggles a control`,description:`A description about the control`})})})}),`
`,(0,d.jsxs)(n.p,{children:[`More information about this component including design, writing, and localization guidelines, as well as design assets, can be found on our `,(0,d.jsx)(n.a,{href:`https://acorn.firefox.com/latest/components/checkbox/desktop-535kxbzV`,rel:`nofollow`,children:`Acorn site`}),`.`]}),`
`,(0,d.jsx)(n.h2,{id:`code`,children:`Code`}),`
`,(0,d.jsxs)(n.p,{children:[`The source for `,(0,d.jsx)(n.code,{children:`moz-checkbox`}),` can be found under `,(0,d.jsx)(n.a,{href:`https://searchfox.org/firefox-main/source/toolkit/content/widgets/moz-checkbox`,rel:`nofollow`,children:`toolkit/content/widgets/moz-checkbox/`})]}),`
`,(0,d.jsxs)(n.h2,{id:`when-to-use-moz-checkbox`,children:[`When to use `,(0,d.jsx)(n.code,{children:`moz-checkbox`})]}),`
`,(0,d.jsxs)(n.ul,{children:[`
`,(0,d.jsxs)(n.li,{children:[`Use `,(0,d.jsx)(n.code,{children:`moz-checkbox`}),` when you want to allow a user to select at least one option from a list.`]}),`
`]}),`
`,(0,d.jsxs)(n.h2,{id:`when-not-to-use-moz-checkbox`,children:[`When not to use `,(0,d.jsx)(n.code,{children:`moz-checkbox`})]}),`
`,(0,d.jsxs)(n.ul,{children:[`
`,(0,d.jsxs)(n.li,{children:[`When only one choice can be active in a list of a few mutually exclusive options, use `,(0,d.jsx)(n.code,{children:`moz-radio-group`}),` instead.`]}),`
`,(0,d.jsxs)(n.li,{children:[`When only one choice can be active in a list of many mutually exclusive options, use a `,(0,d.jsx)(n.code,{children:`select`}),` element instead.`]}),`
`,(0,d.jsxs)(n.li,{children:[`If the intention is for a user to turn something off or on with their selection, and for their selection to have an immediate effect, consider using `,(0,d.jsx)(n.code,{children:`moz-toggle`}),` instead.`]}),`
`]}),`
`,(0,d.jsxs)(n.h2,{id:`how-to-use-moz-checkbox`,children:[`How to use `,(0,d.jsx)(n.code,{children:`moz-checkbox`})]}),`
`,(0,d.jsx)(n.h3,{id:`importing-the-element`,children:`Importing the element`}),`
`,(0,d.jsxs)(n.p,{children:[`Like other custom elements, you should usually be able to rely on `,(0,d.jsx)(n.code,{children:`moz-checkbox`}),` getting lazy loaded at the time of first use.
See `,(0,d.jsx)(n.a,{href:`https://firefox-source-docs.mozilla.org/browser/components/storybook/docs/README.reusable-widgets.stories.html#using-new-design-system-components`,rel:`nofollow`,children:`this documentation`}),` for more information on using design system custom elements.`]}),`
`,(0,d.jsxs)(n.h3,{id:`setting-the-checked-state`,children:[`Setting the `,(0,d.jsx)(n.code,{children:`checked`}),` state`]}),`
`,(0,d.jsxs)(n.p,{children:[`If you need a `,(0,d.jsx)(n.code,{children:`moz-checkbox`}),` to be rendered as a filled-in checkbox by default, you can use `,(0,d.jsx)(n.code,{children:`checked=""`}),` or `,(0,d.jsx)(n.code,{children:`checked`}),` as an attribute just as if the element was a HTML checkbox.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-checkbox label="a descriptive label" checked></moz-checkbox>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`moz-checkbox`,{label:`a descriptive label`,checked:!0})})})}),`
`,(0,d.jsxs)(n.p,{children:[`After initial render, the `,(0,d.jsx)(n.code,{children:`checked`}),` value is the current state of the inner checkbox element.`]}),`
`,(0,d.jsxs)(n.h3,{id:`setting-the-disabled-state`,children:[`Setting the `,(0,d.jsx)(n.code,{children:`disabled`}),` state`]}),`
`,(0,d.jsxs)(n.p,{children:[`In order to disable the `,(0,d.jsx)(n.code,{children:`moz-checkbox`}),`, add `,(0,d.jsx)(n.code,{children:`disabled=""`}),` or `,(0,d.jsx)(n.code,{children:`disabled`}),` to the markup with no value.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-checkbox label="a descriptive label" disabled></moz-checkbox>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`moz-checkbox`,{label:`a descriptive label`,disabled:!0})})})}),`
`,(0,d.jsx)(n.h3,{id:`setting-an-icon`,children:`Setting an icon`}),`
`,(0,d.jsxs)(n.p,{children:[`In order to have an icon appear next to the checkbox element, use the `,(0,d.jsx)(n.code,{children:`.iconSrc`}),` property or `,(0,d.jsx)(n.code,{children:`iconsrc`}),` attribute.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-checkbox label="a descriptive label" iconsrc="chrome://global/skin/icons/edit-copy.svg"></moz-checkbox>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`moz-checkbox`,{label:`a descriptive label`,iconsrc:`chrome://global/skin/icons/edit-copy.svg`})})})}),`
`,(0,d.jsx)(n.h3,{id:`setting-a-description`,children:`Setting a description`}),`
`,(0,d.jsxs)(n.p,{children:[`In order to set a description, use the `,(0,d.jsx)(n.code,{children:`description`}),` attribute.
In general, the description should be controlled by Fluent (and is the preferred way of handling descriptions).`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-checkbox label="a descriptive label" description="Description text for your checkbox"></moz-checkbox>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`moz-checkbox`,{label:`a descriptive label`,description:`Description text for your checkbox`})})})}),`
`,(0,d.jsxs)(n.p,{children:[`However, `,(0,d.jsx)(n.code,{children:`moz-checkbox`}),` does support a `,(0,d.jsx)(n.code,{children:`slot`}),` element if your use case is more complex.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-checkbox label="a descriptive label">
  <span slot="description">A more complex description</span>
</moz-checkbox>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`moz-checkbox`,{label:`a descriptive label`,children:(0,d.jsx)(`span`,{slot:`description`,children:`A more complex description`})})})})}),`
`,(0,d.jsx)(n.h3,{id:`fluent-usage`,children:`Fluent usage`}),`
`,(0,d.jsxs)(n.p,{children:[`The `,(0,d.jsx)(n.code,{children:`label`}),` and `,(0,d.jsx)(n.code,{children:`description`}),` attributes of `,(0,d.jsx)(n.code,{children:`moz-checkbox`}),` will generally be provided via `,(0,d.jsx)(n.a,{href:`https://mozilla-l10n.github.io/localizer-documentation/tools/fluent/basic_syntax.html#attributes`,rel:`nofollow`,children:`Fluent attributes`}),`.
The relevant `,(0,d.jsx)(n.code,{children:`data-l10n-attrs`}),` are set automatically, so to get things working you just need to supply a `,(0,d.jsx)(n.code,{children:`data-l10n-id`}),` as you would with any other element.`]}),`
`,(0,d.jsx)(n.p,{children:`For example, the following Fluent messages:`}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:`first-moz-checkbox-id =
  .label = This is the first label
second-moz-checkbox-id =
  .label = This is the second label
  .description = This is additional description text for the checkbox
`})}),`
`,(0,d.jsxs)(n.p,{children:[`would be used to set a label or a label and a description on the different `,(0,d.jsx)(n.code,{children:`moz-checkbox`}),` elements as follows:`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-checkbox data-l10n-id="first-moz-checkbox-id"></moz-checkbox>
<moz-checkbox data-l10n-id="second-moz-checkbox-id"></moz-checkbox>
`})}),`
`,(0,d.jsx)(n.h3,{id:`nested-fields`,children:`Nested fields`}),`
`,(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:`moz-checkbox`}),` supports nested or dependent fields via a `,(0,d.jsx)(n.code,{children:`nested`}),` named slot.
These fields will be rendered below the checkbox element, and will be indented to
visually indicate dependence. Any nested fields will mirror the `,(0,d.jsx)(n.code,{children:`disabled`}),` state
of the checkbox and will also become `,(0,d.jsx)(n.code,{children:`disabled`}),` whenever the checkbox is not `,(0,d.jsx)(n.code,{children:`checked`}),`.`]}),`
`,(0,d.jsxs)(n.p,{children:[`When nesting fields under a checkbox it's important to wrap the elements in a
`,(0,d.jsx)(n.code,{children:`moz-fieldset`}),` to indicate to assistive technologies that the fields are
related, and to provide a label for the group of controls:`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-fieldset label="Label for the group">
  <moz-checkbox label="Parent checkbox" value="foo" checked>
    <moz-checkbox slot="nested" label="Nested checkbox one" value="one"></moz-checkbox>
    <moz-checkbox slot="nested" label="Nested checkbox two" value="two" checked></moz-checkbox>
  </moz-checkbox>
</moz-fieldset>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`moz-fieldset`,{label:`Label for the group`,children:(0,d.jsxs)(`moz-checkbox`,{label:`Parent checkbox`,value:`foo`,checked:!0,children:[(0,d.jsx)(`moz-checkbox`,{slot:`nested`,label:`Nested checkbox one`,value:`one`}),(0,d.jsx)(`moz-checkbox`,{slot:`nested`,label:`Nested checkbox two`,value:`two`,checked:!0})]})})})})}),`
`,(0,d.jsx)(n.h2,{id:`args-table`,children:`Args Table`}),`
`,(0,d.jsx)(r,{of:`moz-checkbox`})]})}function u(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=a(),s(),n(),c()})))()}f();export{u as default};