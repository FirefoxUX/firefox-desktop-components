import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,l as n,n as r,s as i}from"./blocks-DYgZUhjJ.js";import{a}from"./chunk-W22LQPXL-H6o6iyRO.js";import{i as o,r as s}from"./react-Bg8UoiFE.js";import{i as c}from"./moz-button-group-BL01SGh8.js";function l(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,ul:`ul`,...o(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i,{title:`UI Widgets/ Button Group/README`}),`
`,(0,d.jsx)(n.h1,{id:`mozbuttongroup`,children:`MozButtonGroup`}),`
`,(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:`moz-button-group`}),` displays multiple related buttons.`]}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsxs)(`moz-card`,{style:{width:`400px`},children:[(0,d.jsx)(`p`,{children:`The button group is below. Card for emphasis.`}),(0,d.jsxs)(`moz-button-group`,{children:[(0,d.jsx)(`moz-button`,{type:`primary`,label:`OK`}),(0,d.jsx)(`moz-button`,{label:`Cancel`})]})]})})})}),`
`,(0,d.jsx)(n.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,d.jsx)(n.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,d.jsxs)(n.ul,{children:[`
`,(0,d.jsxs)(n.li,{children:[`Use `,(0,d.jsx)(n.code,{children:`moz-button-group`}),` to group together actions that have a relationship.`]}),`
`]}),`
`,(0,d.jsx)(n.h2,{id:`code`,children:`Code`}),`
`,(0,d.jsxs)(n.p,{children:[`The source for `,(0,d.jsx)(n.code,{children:`moz-button-group`}),` can be found under `,(0,d.jsx)(n.a,{href:`https://searchfox.org/firefox-main/source/toolkit/content/widgets/moz-button-group`,rel:`nofollow`,children:`toolkit/content/widgets/moz-button-group/`})]}),`
`,(0,d.jsxs)(n.h2,{id:`how-to-use-moz-button-group`,children:[`How to use `,(0,d.jsx)(n.code,{children:`moz-button-group`})]}),`
`,(0,d.jsx)(n.h3,{id:`importing-the-element`,children:`Importing the element`}),`
`,(0,d.jsxs)(n.p,{children:[`Like other custom elements, you should usually be able to rely on `,(0,d.jsx)(n.code,{children:`moz-button-group`}),` getting lazy loaded at the time of first use.
See `,(0,d.jsx)(n.a,{href:`https://firefox-source-docs.mozilla.org/browser/components/storybook/docs/README.reusable-widgets.stories.html#using-new-design-system-components`,rel:`nofollow`,children:`this documentation`}),` for more information on using design system custom elements.`]}),`
`,(0,d.jsx)(n.h3,{id:`a-grouping-of-buttons`,children:`A grouping of buttons`}),`
`,(0,d.jsxs)(n.p,{children:[`Primary button order will be set automatically based on `,(0,d.jsx)(n.code,{children:`class="primary"`}),`, `,(0,d.jsx)(n.code,{children:`type="submit"`}),` or `,(0,d.jsx)(n.code,{children:`autofocus`}),` attributes. Set `,(0,d.jsx)(n.code,{children:`slot="primary"`}),` on a primary button that does not have primary styling to set its position. The primary button's position varies by platform: on Windows, it appears on the left, while on Linux and macOS, it appears on the right.`]}),`
`,(0,d.jsxs)(n.ol,{children:[`
`,(0,d.jsx)(n.li,{children:`Setting button order automatically:`}),`
`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-button-group>
  <moz-button label="Secondary 1"></moz-button>
  <moz-button type="primary" label="Primary"></moz-button>
  <moz-button label="Secondary 2"></moz-button>
</moz-button-group>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`moz-card`,{style:{width:`450px`},children:(0,d.jsxs)(`moz-button-group`,{children:[(0,d.jsx)(`moz-button`,{label:`Secondary 1`}),(0,d.jsx)(`moz-button`,{type:`primary`,label:`Primary`}),(0,d.jsx)(`moz-button`,{label:`Secondary 2`})]})})})})}),`
`,(0,d.jsxs)(n.ol,{start:`2`,children:[`
`,(0,d.jsxs)(n.li,{children:[`Setting button order with `,(0,d.jsx)(n.code,{children:`slot="primary"`})]}),`
`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-button-group>
  <moz-button label="Secondary 1"></moz-button>
  <moz-button slot="primary" label="Primary slot"></moz-button>
  <moz-button label="Secondary 2"></moz-button>
</moz-button-group>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`moz-card`,{style:{width:`450px`},children:(0,d.jsxs)(`moz-button-group`,{children:[(0,d.jsx)(`moz-button`,{label:`Secondary 1`}),(0,d.jsx)(`moz-button`,{slot:`primary`,label:`Primary slot`}),(0,d.jsx)(`moz-button`,{label:`Secondary 2`})]})})})})}),`
`,(0,d.jsx)(n.h2,{id:`args-table`,children:`Args Table`}),`
`,(0,d.jsx)(r,{of:`moz-button-group`})]})}function u(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=a(),s(),n(),c()})))()}f();export{u as default};