import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,l as n,n as r,s as i}from"./blocks-DYgZUhjJ.js";import{a}from"./chunk-W22LQPXL-H6o6iyRO.js";import{i as o,r as s}from"./react-Bg8UoiFE.js";import{t as c}from"./moz-radio-group-Qvvyn2qE.js";function l(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...o(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i,{title:`UI Widgets/ Radio Group/README`}),`
`,(0,d.jsx)(n.h1,{id:`mozradiogroup`,children:`MozRadioGroup`}),`
`,(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:`moz-radio-group`}),` is an element that allows users to select one option from a list of related options. It is designed to be used in tandem with our `,(0,d.jsx)(n.code,{children:`moz-radio`}),` custom element, which is a wrapper around an `,(0,d.jsx)(n.code,{children:`<input type="radio">`}),` HTML element.`]}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsxs)(`moz-radio-group`,{name:`contact`,label:`Select a contact method`,value:`email`,children:[(0,d.jsx)(`moz-radio`,{value:`email`,label:`Email`}),(0,d.jsx)(`moz-radio`,{value:`phone`,label:`Phone`}),(0,d.jsx)(`moz-radio`,{value:`mail`,label:`Mail`})]})})})}),`
`,(0,d.jsxs)(n.p,{children:[`More information about this component including design, writing, and localization guidelines, as well as design assets, can be found on our `,(0,d.jsx)(n.a,{href:`https://acorn.firefox.com/latest/components/radio/desktop-A9fsJE6U`,rel:`nofollow`,children:`Acorn site`}),`.`]}),`
`,(0,d.jsx)(n.h2,{id:`code`,children:`Code`}),`
`,(0,d.jsxs)(n.p,{children:[`The source for `,(0,d.jsx)(n.code,{children:`moz-radio-group`}),` and `,(0,d.jsx)(n.code,{children:`moz-radio`}),` can be found under `,(0,d.jsx)(n.a,{href:`https://searchfox.org/firefox-main/source/toolkit/content/widgets/moz-radio-group/`,rel:`nofollow`,children:`toolkit/content/widgets/moz-radio-group/`}),`.`]}),`
`,(0,d.jsxs)(n.h2,{id:`when-to-use-moz-radio-group`,children:[`When to use `,(0,d.jsx)(n.code,{children:`moz-radio-group`})]}),`
`,(0,d.jsxs)(n.ul,{children:[`
`,(0,d.jsx)(n.li,{children:`Use a radio group when you are trying to get a user to select only one option from a relatively short list of options.`}),`
`,(0,d.jsx)(n.li,{children:`Use a radio group over a select when it is advantageous to have all possible options to be immediately visible to the user.`}),`
`]}),`
`,(0,d.jsxs)(n.h2,{id:`when-not-to-use-moz-radio-group`,children:[`When not to use `,(0,d.jsx)(n.code,{children:`moz-radio-group`})]}),`
`,(0,d.jsxs)(n.ul,{children:[`
`,(0,d.jsxs)(n.li,{children:[`If it should be possible for the user to select multiple options, use `,(0,d.jsx)(n.code,{children:`moz-checkbox`}),`.`]}),`
`,(0,d.jsxs)(n.li,{children:[`If the intention is for a user to turn something off or on with their selection, and for their selection to have an immediate effect, consider using `,(0,d.jsx)(n.code,{children:`moz-toggle`}),` instead.`]}),`
`]}),`
`,(0,d.jsxs)(n.h2,{id:`how-to-use-moz-radio-group`,children:[`How to use `,(0,d.jsx)(n.code,{children:`moz-radio-group`})]}),`
`,(0,d.jsx)(n.h3,{id:`importing-the-element`,children:`Importing the element`}),`
`,(0,d.jsxs)(n.p,{children:[`Like other custom elements, you should usually be able to rely on `,(0,d.jsx)(n.code,{children:`moz-radio`}),` and `,(0,d.jsx)(n.code,{children:`moz-radio-group`}),` getting lazy loaded at the time of first use. See `,(0,d.jsx)(n.a,{href:`https://firefox-source-docs.mozilla.org/browser/components/storybook/docs/README.reusable-widgets.stories.html#using-new-design-system-components`,rel:`nofollow`,children:`this documentation`}),` for more information on using design system custom elements.`]}),`
`,(0,d.jsxs)(n.h3,{id:`combining-moz-radio-and-moz-radio-group`,children:[`Combining `,(0,d.jsx)(n.code,{children:`moz-radio`}),` and `,(0,d.jsx)(n.code,{children:`moz-radio-group`})]}),`
`,(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:`moz-radio`}),` and `,(0,d.jsx)(n.code,{children:`moz-radio-group`}),` must be used together in order for the elements to behave as expected. `,(0,d.jsx)(n.code,{children:`moz-radio`}),` elements must also be direct children of `,(0,d.jsx)(n.code,{children:`moz-radio-group`}),`; they should not need to be wrapped in additional elements for purposes of positioning or spacing as those style attributes are provided by `,(0,d.jsx)(n.code,{children:`moz-radio-group`}),`.`]}),`
`,(0,d.jsxs)(n.p,{children:[`If you are using the elements improperly you may see the following `,(0,d.jsx)(n.a,{href:`https://searchfox.org/mozilla-central/rev/a215fbd85843a91fcd8fdc33aa9cd9a357403f35/toolkit/content/widgets/moz-radio-group/moz-radio-group.mjs#260`,rel:`nofollow`,children:`console error`}),`:`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-sh`,children:`moz-radio can only be used in moz-radio-group element.
`})}),`
`,(0,d.jsxs)(n.h3,{id:`setting-value-for-the-group`,children:[`Setting `,(0,d.jsx)(n.code,{children:`value`}),` for the group`]}),`
`,(0,d.jsxs)(n.p,{children:[`The `,(0,d.jsx)(n.code,{children:`value`}),` property or attribute of `,(0,d.jsx)(n.code,{children:`moz-radio-group`}),` can be used to set the `,(0,d.jsx)(n.code,{children:`checked`}),` state of its `,(0,d.jsx)(n.code,{children:`moz-radio`}),` elements. While it is also possible to set `,(0,d.jsx)(n.code,{children:`checked`}),` directly individual `,(0,d.jsx)(n.code,{children:`moz-radio`}),` elements, in most cases it's clearer to set `,(0,d.jsx)(n.code,{children:`value`}),` on the group. This allows `,(0,d.jsx)(n.code,{children:`moz-radio-group`}),` to serve as the single source of truth for the checked/unchecked state of related `,(0,d.jsx)(n.code,{children:`moz-radio`}),` elements.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-radio-group name="greeting" label="Select a preferred greeting" value="hola">
  <moz-radio value="hi" label="Hi"></moz-radio>
  <moz-radio value="hello" label="Hello"></moz-radio>
  <moz-radio value="hola" label="Hola"></moz-radio>
</moz-radio-group>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsxs)(`moz-radio-group`,{name:`greeting`,label:`Select a preferred greeting`,value:`hola`,children:[(0,d.jsx)(`moz-radio`,{value:`hi`,label:`Hi`}),(0,d.jsx)(`moz-radio`,{value:`hello`,label:`Hello`}),(0,d.jsx)(`moz-radio`,{value:`hola`,label:`Hola`})]})})})}),`
`,(0,d.jsxs)(n.h3,{id:`setting-name-for-the-group`,children:[`Setting `,(0,d.jsx)(n.code,{children:`name`}),` for the group`]}),`
`,(0,d.jsxs)(n.p,{children:[`The `,(0,d.jsx)(n.code,{children:`name`}),` attribute used to associate multiple `,(0,d.jsx)(n.code,{children:`moz-radio`}),` elements can only be set on the containing `,(0,d.jsx)(n.code,{children:`moz-radio-group`}),` element. This is different from HTML `,(0,d.jsx)(n.code,{children:`<input type="radio">`}),` elements where `,(0,d.jsx)(n.code,{children:`name`}),` can be set on each of the individual inputs. With `,(0,d.jsx)(n.code,{children:`moz-radio-group`}),` the `,(0,d.jsx)(n.code,{children:`name`}),` propagates down the the child `,(0,d.jsx)(n.code,{children:`moz-radio`}),` elements.`]}),`
`,(0,d.jsxs)(n.h3,{id:`setting-the-disabled-state`,children:[`Setting the `,(0,d.jsx)(n.code,{children:`disabled`}),` state`]}),`
`,(0,d.jsxs)(n.p,{children:[`The `,(0,d.jsx)(n.code,{children:`disabled`}),` state can be set on `,(0,d.jsx)(n.code,{children:`moz-radio-group`}),` to disable all of its child `,(0,d.jsx)(n.code,{children:`moz-radio`}),` elements:`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-radio-group name="group-disabled" disabled>
  <moz-radio value="disabled1" label="I'm disabled"></moz-radio>
  <moz-radio value="disabled2" label="I'm disabled too"></moz-radio>
</moz-radio-group>
`})}),`
`,(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:`disabled`}),` can also be set on `,(0,d.jsx)(n.code,{children:`moz-radio`}),` elements to control their state independently of the rest of the group:`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-radio-group name="button-disabled">
  <moz-radio value="enabled" label="I'm enabled"></moz-radio>
  <moz-radio value="disabled" label="I'm disabled" disabled></moz-radio>
</moz-radio-group>
`})}),`
`,(0,d.jsxs)(n.p,{children:[`The one caveat to this is that it is not possible to programmatically enable an individual `,(0,d.jsx)(n.code,{children:`moz-radio`}),` element when the containing group is `,(0,d.jsx)(n.code,{children:`disabled`}),`.`]}),`
`,(0,d.jsx)(n.h3,{id:`fluent-usage`,children:`Fluent usage`}),`
`,(0,d.jsxs)(n.p,{children:[`The `,(0,d.jsx)(n.code,{children:`label`}),` properties of `,(0,d.jsx)(n.code,{children:`moz-radio-group`}),` and `,(0,d.jsx)(n.code,{children:`moz-radio`}),` will generally be provided via `,(0,d.jsx)(n.a,{href:`https://mozilla-l10n.github.io/localizer-documentation/tools/fluent/basic_syntax.html#attributes`,rel:`nofollow`,children:`Fluent attributes`}),`. `,(0,d.jsx)(n.code,{children:`data-l10n-attrs`}),` are set automatically, so to get things working you just need to supply a `,(0,d.jsx)(n.code,{children:`data-l10n-id`}),` as you would with any other element.`]}),`
`,(0,d.jsx)(n.p,{children:`For example the following Fluent messages:`}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:`moz-radio-group-id =
  .label = This is the label for the group
first-moz-radio-id =
  .label = This is the label for the first radio button
second-moz-radio-id =
  .label = This is the label for the second radio button
`})}),`
`,(0,d.jsx)(n.p,{children:`Would be used to set labels on the different elements as follows:`}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-radio-group data-l10n-id="moz-radio-group-id">
  <moz-radio data-l10n-id="first-moz-radio-id"></moz-radio>
  <moz-radio data-l10n-id="second-moz-radio-id"></moz-radio>
</moz-radio-group>
`})}),`
`,(0,d.jsx)(n.h3,{id:`accessible-name-without-a-visible-label`,children:`Accessible name without a visible label`}),`
`,(0,d.jsxs)(n.p,{children:[`When surrounding context makes the group's purpose clear and a visible label would be redundant, use `,(0,d.jsx)(n.code,{children:`aria-label`}),` to provide an accessible name without rendering visible text:`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-radio-group name="theme" aria-label="Color theme">
  <moz-radio value="light" label="Light"></moz-radio>
  <moz-radio value="dark" label="Dark"></moz-radio>
</moz-radio-group>
`})}),`
`,(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:`aria-label`}),` can be set as a Fluent attribute the same way `,(0,d.jsx)(n.code,{children:`label`}),` does:`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:`moz-radio-group-id =
  .aria-label = Color theme
`})}),`
`,(0,d.jsxs)(n.p,{children:[`In most cases a visible `,(0,d.jsx)(n.code,{children:`label`}),` is preferred for usability reasons. Only use `,(0,d.jsx)(n.code,{children:`aria-label`}),` when the surrounding UI already makes the group's purpose obvious.`]}),`
`,(0,d.jsx)(n.h3,{id:`nested-fields`,children:`Nested fields`}),`
`,(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:`moz-radio`}),` elements support nested or dependent fields via a `,(0,d.jsx)(n.code,{children:`nested`}),` named
slot. These fields will be rendered below the radio element in which they are
nested, and will be indented to visually indicate dependence. Any nested fields
will mirror the `,(0,d.jsx)(n.code,{children:`disabled`}),` state of the radio and will also become `,(0,d.jsx)(n.code,{children:`disabled`}),`
whenever the radio is not `,(0,d.jsx)(n.code,{children:`checked`}),`.`]}),`
`,(0,d.jsxs)(n.p,{children:[`When nesting fields under a radio element we do not need to do any additional
wrapping with `,(0,d.jsx)(n.code,{children:`moz-fieldset`}),`, since `,(0,d.jsx)(n.code,{children:`moz-radio-group`}),` already relies on
`,(0,d.jsx)(n.code,{children:`moz-fieldset`}),` under the hood:`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-radio-group label="Label for the group">
  <moz-radio label="Some radio button" value="bar"></moz-radio>
  <moz-radio label="another another radio button" value="baz"></moz-radio>
  <moz-radio label="Parent radio button" value="foo" checked>
    <moz-checkbox slot="nested" label="Nested checkbox one" value="one"></moz-checkbox>
    <moz-checkbox slot="nested" label="Nested checkbox two" value="two" checked></moz-checkbox>
  </moz-radio>
</moz-radio-group>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsxs)(`moz-radio-group`,{label:`Label for the group`,children:[(0,d.jsx)(`moz-radio`,{label:`Some radio button`,value:`bar`}),(0,d.jsx)(`moz-radio`,{label:`another another radio button`,value:`baz`}),(0,d.jsxs)(`moz-radio`,{label:`Parent radio button`,value:`foo`,checked:!0,children:[(0,d.jsx)(`moz-checkbox`,{slot:`nested`,label:`Nested checkbox one`,value:`one`}),(0,d.jsx)(`moz-checkbox`,{slot:`nested`,label:`Nested checkbox two`,value:`two`,checked:!0})]})]})})})}),`
`,(0,d.jsx)(n.h2,{id:`args-table`,children:`Args Table`}),`
`,(0,d.jsx)(r,{of:`moz-radio-group`})]})}function u(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=a(),s(),n(),c()})))()}f();export{u as default};