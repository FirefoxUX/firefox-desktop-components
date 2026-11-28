import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,l as n,n as r,s as i}from"./blocks-DYgZUhjJ.js";import{a}from"./chunk-W22LQPXL-H6o6iyRO.js";import{i as o,r as s}from"./react-Bg8UoiFE.js";import{t as c}from"./moz-box-link-Bq5bWwCZ.js";function l(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...o(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i,{title:`UI Widgets/ Box Link/README`}),`
`,(0,d.jsx)(n.h1,{id:`mozboxlink`,children:`MozBoxLink`}),`
`,(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:`moz-box-link`}),` is a link component with a box-like shape that allows for custom title and description. `,(0,d.jsx)(n.code,{children:`moz-box-link`}),` can be used separately or together with `,(0,d.jsx)(n.code,{children:`moz-box-item`}),` and `,(0,d.jsx)(n.code,{children:`moz-box-button`}),` as a part of a `,(0,d.jsx)(n.code,{children:`moz-box-group`}),`.`]}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`moz-box-link`,{style:{width:`400px`},label:`I'm a box link`,href:`#`})})})}),`
`,(0,d.jsx)(n.h2,{id:`code`,children:`Code`}),`
`,(0,d.jsxs)(n.p,{children:[`The source for `,(0,d.jsx)(n.code,{children:`moz-box-link`}),` can be found under `,(0,d.jsx)(n.a,{href:`https://searchfox.org/firefox-main/source/toolkit/content/widgets/moz-box-link`,rel:`nofollow`,children:`toolkit/content/widgets/moz-box-link/`})]}),`
`,(0,d.jsxs)(n.h2,{id:`how-to-use-moz-box-link`,children:[`How to use `,(0,d.jsx)(n.code,{children:`moz-box-link`})]}),`
`,(0,d.jsx)(n.h3,{id:`importing-the-element`,children:`Importing the element`}),`
`,(0,d.jsxs)(n.p,{children:[`Like other custom elements, you should usually be able to rely on `,(0,d.jsx)(n.code,{children:`moz-box-link`}),` getting lazy loaded at the time of first use.
See `,(0,d.jsx)(n.a,{href:`https://firefox-source-docs.mozilla.org/browser/components/storybook/docs/README.reusable-widgets.stories.html#using-new-design-system-components`,rel:`nofollow`,children:`this documentation`}),` for more information on using design system custom elements.`]}),`
`,(0,d.jsxs)(n.h3,{id:`setting-the-label-and-description`,children:[`Setting the `,(0,d.jsx)(n.code,{children:`label`}),` and `,(0,d.jsx)(n.code,{children:`description`})]}),`
`,(0,d.jsxs)(n.p,{children:[`In order to set a label and description, use the `,(0,d.jsx)(n.code,{children:`label`}),` and `,(0,d.jsx)(n.code,{children:`description`}),` attributes.
In general, the label and description should be controlled by Fluent.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-box-link label="I'm a box link" description="Some description of the link" href="#"></moz-box-link>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`moz-box-link`,{style:{width:`400px`},href:`#`,label:`I'm a box link`,description:`Some description of the link`})})})}),`
`,(0,d.jsx)(n.h3,{id:`setting-an-icon`,children:`Setting an icon`}),`
`,(0,d.jsxs)(n.p,{children:[`In order to have an icon appear next to the label, use the `,(0,d.jsx)(n.code,{children:`.iconSrc`}),` property or `,(0,d.jsx)(n.code,{children:`iconsrc`}),` attribute.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-box-link label="I'm a box link"
              description="Some description of the link"
              href="#"
              iconsrc="chrome://global/skin/icons/highlights.svg">
</moz-box-link>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`moz-box-link`,{style:{width:`400px`},label:`I'm a box link`,description:`Some description of the link`,href:`#`,iconsrc:`chrome://global/skin/icons/highlights.svg`})})})}),`
`,(0,d.jsx)(n.h3,{id:`setting-the-support-page`,children:`Setting the support page`}),`
`,(0,d.jsxs)(n.p,{children:[`To turn a `,(0,d.jsx)(n.code,{children:`moz-box-link`}),` into a SUMO link, use the `,(0,d.jsx)(n.code,{children:`support-page`}),` attribute.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-box-link label="I'm a support link"
              support-page="support-page-short-hand">
</moz-box-link>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`moz-box-link`,{style:{width:`400px`},label:`I'm a support link`,"support-page":`support-page-short-hand`})})})}),`
`,(0,d.jsx)(n.h3,{id:`fluent-usage`,children:`Fluent usage`}),`
`,(0,d.jsxs)(n.p,{children:[`The `,(0,d.jsx)(n.code,{children:`label`}),` and `,(0,d.jsx)(n.code,{children:`description`}),` attributes of `,(0,d.jsx)(n.code,{children:`moz-box-link`}),` will generally be provided via `,(0,d.jsx)(n.a,{href:`https://mozilla-l10n.github.io/localizer-documentation/tools/fluent/basic_syntax.html#attributes`,rel:`nofollow`,children:`Fluent attributes`}),`.
The relevant `,(0,d.jsx)(n.code,{children:`data-l10n-attrs`}),` are set automatically, so to get things working you just need to supply a `,(0,d.jsx)(n.code,{children:`data-l10n-id`}),` as you would with any other element.`]}),`
`,(0,d.jsx)(n.p,{children:`For example, the following Fluent messages:`}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:`moz-box-link-label =
  .label = I'm a box link
moz-box-link-label-description =
  .label = I'm a box link
  .description = Some description of the link
`})}),`
`,(0,d.jsxs)(n.p,{children:[`would be used to set attributes on the different `,(0,d.jsx)(n.code,{children:`moz-box-link`}),` elements as follows:`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-box-link data-l10n-id="moz-box-link-label"></moz-box-link>
<moz-box-link data-l10n-id="moz-box-link-label-description"></moz-box-link>
`})}),`
`,(0,d.jsx)(n.h2,{id:`args-table`,children:`Args Table`}),`
`,(0,d.jsx)(r,{of:`moz-box-link`})]})}function u(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=a(),s(),n(),c()})))()}f();export{u as default};