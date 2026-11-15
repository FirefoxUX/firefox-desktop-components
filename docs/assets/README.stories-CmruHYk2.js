import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,l as n,n as r,s as i}from"./blocks-DYgZUhjJ.js";import{a}from"./chunk-W22LQPXL-H6o6iyRO.js";import{i as o,r as s}from"./react-Bg8UoiFE.js";import{t as c}from"./moz-toggle-69h-dYfV.js";function l(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...o(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i,{title:`UI Widgets/ Toggle/README`}),`
`,(0,d.jsx)(n.h1,{id:`moztoggle`,children:`MozToggle`}),`
`,(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:`moz-toggle`}),` is a toggle element that can be used to switch between two states.
It may be helpful to think of it as a button that can be pressed or unpressed,
corresponding with "on" and "off" states.`]}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`moz-toggle`,{pressed:!0,label:`Toggle label`,description:`This is a demo toggle for the docs.`})})})}),`
`,(0,d.jsx)(n.h2,{id:`when-to-use`,children:`When to use`}),`
`,(0,d.jsxs)(n.ul,{children:[`
`,(0,d.jsx)(n.li,{children:`Use a toggle for binary controls like on/off or enabled/disabled.`}),`
`,(0,d.jsx)(n.li,{children:`Use when the action is performed immediately and doesn't require confirmation
or form submission.`}),`
`,(0,d.jsx)(n.li,{children:`A toggle is like a switch. If it would be appropriate to use a switch in the
physical world for this action, it is likely appropriate to use a toggle in
software.`}),`
`]}),`
`,(0,d.jsx)(n.h2,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,d.jsxs)(n.ul,{children:[`
`,(0,d.jsx)(n.li,{children:`If another action is required to execute the choice, use a checkbox (i.e. a
toggle should not generally be used as part of a form).`}),`
`]}),`
`,(0,d.jsx)(n.h2,{id:`code`,children:`Code`}),`
`,(0,d.jsxs)(n.p,{children:[`The source for `,(0,d.jsx)(n.code,{children:`moz-toggle`}),` can be found under
`,(0,d.jsx)(n.a,{href:`https://searchfox.org/firefox-main/source/toolkit/content/widgets/moz-toggle/moz-toggle.mjs`,rel:`nofollow`,children:`toolkit/content/widgets/moz-toggle`}),`.
You can find an examples of `,(0,d.jsx)(n.code,{children:`moz-toggle`}),` in use in the Firefox codebase in both
`,(0,d.jsx)(n.a,{href:`https://searchfox.org/firefox-main/source/browser/components/preferences/config/privacy.mjs`,rel:`nofollow`,children:`about:preferences`}),`
and `,(0,d.jsx)(n.a,{href:`https://searchfox.org/firefox-main/source/toolkit/mozapps/extensions/content/aboutaddons.html#182`,rel:`nofollow`,children:`about:addons`}),`.`]}),`
`,(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:`moz-toggle`}),` can be imported into `,(0,d.jsx)(n.code,{children:`.html`}),`/`,(0,d.jsx)(n.code,{children:`.xhtml`}),` files:`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<script type="module" src="chrome://global/content/elements/moz-toggle.mjs"><\/script>
`})}),`
`,(0,d.jsx)(n.p,{children:`And used as follows:`}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-toggle pressed
            label="Label for the toggle"
            description="Longer explanation of what the toggle is for"
            aria-label="Toggle label if label text isn't visible"></moz-toggle>
`})}),`
`,(0,d.jsx)(n.h3,{id:`fluent-usage`,children:`Fluent usage`}),`
`,(0,d.jsxs)(n.p,{children:[`Generally the `,(0,d.jsx)(n.code,{children:`label`}),`, `,(0,d.jsx)(n.code,{children:`description`}),`, and `,(0,d.jsx)(n.code,{children:`aria-label`}),` properties of
`,(0,d.jsx)(n.code,{children:`moz-toggle`}),` will be provided via `,(0,d.jsx)(n.a,{href:`https://mozilla-l10n.github.io/localizer-documentation/tools/fluent/basic_syntax.html#attributes`,rel:`nofollow`,children:`Fluent attributes`}),`.
To get this working you will need to specify a `,(0,d.jsx)(n.code,{children:`data-l10n-id`}),` as well as
`,(0,d.jsx)(n.code,{children:`data-l10n-attrs`}),` if you're providing a label and a description:`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-toggle data-l10n-id="with-label-and-description"
            data-l10n-attrs="label, description"></moz-toggle>
`})}),`
`,(0,d.jsx)(n.p,{children:`In which case your Fluent messages will look something like this:`}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:`with-label-and-description =
  .label = Label text goes here
  .description = Description text goes here
`})}),`
`,(0,d.jsxs)(n.p,{children:[`You do not have to specify `,(0,d.jsx)(n.code,{children:`data-l10n-attrs`}),` if you're only using an `,(0,d.jsx)(n.code,{children:`aria-label`}),`:`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-toggle data-l10n-id="with-aria-label-only"></moz-toggle>
`})}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:`with-aria-label-only =
  .aria-label = aria-label text goes here
`})}),`
`,(0,d.jsx)(n.h3,{id:`nested-fields`,children:`Nested fields`}),`
`,(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:`moz-toggle`}),` supports nested or dependent fields via a `,(0,d.jsx)(n.code,{children:`nested`}),` named slot.
These fields will be rendered below the toggle element, and will be indented to
visually indicate dependence. Any nested fields will mirror the `,(0,d.jsx)(n.code,{children:`disabled`}),` state
of the toggle and will also become `,(0,d.jsx)(n.code,{children:`disabled`}),` whenever the toggle is not `,(0,d.jsx)(n.code,{children:`pressed`}),`.`]}),`
`,(0,d.jsxs)(n.p,{children:[`When nesting fields it's important to wrap the elements in a `,(0,d.jsx)(n.code,{children:`moz-fieldset`}),` to
indicate to assistive technologies that the fields are related, and to provide a
label for the group of controls:`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-fieldset label="Label for the group">
  <moz-toggle label="Parent toggle" pressed>
    <moz-checkbox slot="nested" label="Nested checkbox one" value="one"></moz-checkbox>
    <moz-checkbox slot="nested" label="Nested checkbox two" value="two" checked></moz-checkbox>
  </moz-toggle>
</moz-fieldset>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`moz-fieldset`,{label:`Label for the group`,children:(0,d.jsxs)(`moz-toggle`,{label:`Parent toggle`,pressed:!0,children:[(0,d.jsx)(`moz-checkbox`,{slot:`nested`,label:`Nested checkbox one`,value:`one`}),(0,d.jsx)(`moz-checkbox`,{slot:`nested`,label:`Nested checkbox two`,value:`two`,checked:!0})]})})})})}),`
`,(0,d.jsx)(n.h2,{id:`args-table`,children:`Args Table`}),`
`,(0,d.jsx)(r,{of:`moz-toggle`})]})}function u(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=a(),s(),n(),c()})))()}f();export{u as default};