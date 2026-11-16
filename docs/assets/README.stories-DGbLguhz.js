import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,l as n,n as r,s as i}from"./blocks-DYgZUhjJ.js";import{a}from"./chunk-W22LQPXL-H6o6iyRO.js";import{i as o,r as s}from"./react-Bg8UoiFE.js";import{i as c}from"./moz-box-group-LDsFTcqd.js";function l(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...o(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i,{title:`UI Widgets/ Box Item/README`}),`
`,(0,d.jsx)(n.h1,{id:`mozboxitem`,children:`MozBoxItem`}),`
`,(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:`moz-box-item`}),` is a component that can be used separately or together with `,(0,d.jsx)(n.code,{children:`moz-box-button`}),` and `,(0,d.jsx)(n.code,{children:`moz-box-link`}),` as a part of a `,(0,d.jsx)(n.code,{children:`moz-box-group`}),` to display related content and actions.`]}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`moz-box-item`,{style:{width:`400px`},label:`I'm a box item`})})})}),`
`,(0,d.jsx)(n.h2,{id:`code`,children:`Code`}),`
`,(0,d.jsxs)(n.p,{children:[`The source for `,(0,d.jsx)(n.code,{children:`moz-box-item`}),` can be found under `,(0,d.jsx)(n.a,{href:`https://searchfox.org/firefox-main/source/toolkit/content/widgets/moz-box-item`,rel:`nofollow`,children:`toolkit/content/widgets/moz-box-item/`})]}),`
`,(0,d.jsxs)(n.h2,{id:`how-to-use-moz-box-item`,children:[`How to use `,(0,d.jsx)(n.code,{children:`moz-box-item`})]}),`
`,(0,d.jsx)(n.h3,{id:`importing-the-element`,children:`Importing the element`}),`
`,(0,d.jsxs)(n.p,{children:[`Like other custom elements, you should usually be able to rely on `,(0,d.jsx)(n.code,{children:`moz-box-item`}),` getting lazy loaded at the time of first use.
See `,(0,d.jsx)(n.a,{href:`https://firefox-source-docs.mozilla.org/browser/components/storybook/docs/README.reusable-widgets.stories.html#using-new-design-system-components`,rel:`nofollow`,children:`this documentation`}),` for more information on using design system custom elements.`]}),`
`,(0,d.jsxs)(n.h3,{id:`setting-the-label-and-description`,children:[`Setting the `,(0,d.jsx)(n.code,{children:`label`}),` and `,(0,d.jsx)(n.code,{children:`description`})]}),`
`,(0,d.jsxs)(n.p,{children:[`In order to set a label and description, use the `,(0,d.jsx)(n.code,{children:`label`}),` and `,(0,d.jsx)(n.code,{children:`description`}),` attributes.
In general, the label and description should be controlled by Fluent.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-box-item label="I'm a box item" description="Some description of the item"></moz-box-item>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`moz-box-item`,{style:{width:`400px`},label:`I'm a box item`,description:`Some description of the item`})})})}),`
`,(0,d.jsx)(n.h3,{id:`setting-an-icon`,children:`Setting an icon`}),`
`,(0,d.jsxs)(n.p,{children:[`In order to have an icon appear next to the label, use the `,(0,d.jsx)(n.code,{children:`.iconSrc`}),` property or `,(0,d.jsx)(n.code,{children:`iconsrc`}),` attribute.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-box-item label="I'm a box item"
              description="Some description of the item"
              iconsrc="chrome://global/skin/icons/highlights.svg">
</moz-box-item>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`moz-box-item`,{style:{width:`400px`},label:`I'm a box item`,description:`Some description of the item`,iconsrc:`chrome://global/skin/icons/highlights.svg`})})})}),`
`,(0,d.jsx)(n.h3,{id:`setting-the-layout-of-the-content`,children:`Setting the layout of the content`}),`
`,(0,d.jsxs)(n.p,{children:[`You can set a layout style for the box content using the `,(0,d.jsx)(n.code,{children:`layout`}),` attribute.  There are 2 layout options: `,(0,d.jsx)(n.code,{children:`default`}),` or `,(0,d.jsx)(n.code,{children:`large-icon`}),`.
The `,(0,d.jsx)(n.code,{children:`default`}),` layout will set a smaller icon next to the label. Use `,(0,d.jsx)(n.code,{children:`large-icon`}),` layout to display a bigger, vertically centered icon.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-box-item label="I'm a box item"
              description="Some description of the item"
              layout="large-icon"
              iconsrc="chrome://global/skin/icons/info.svg">
</moz-box-item>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`moz-box-item`,{style:{width:`400px`},label:`I'm a box item`,description:`Some description of the item`,layout:`large-icon`,iconsrc:`chrome://global/skin/icons/info.svg`})})})}),`
`,(0,d.jsxs)(n.h3,{id:`adding-actions-to-the-moz-box-item`,children:[`Adding actions to the `,(0,d.jsx)(n.code,{children:`moz-box-item`})]}),`
`,(0,d.jsxs)(n.p,{children:[`The `,(0,d.jsx)(n.code,{children:`moz-box-item`}),` component supports 2 slots for actions: `,(0,d.jsx)(n.code,{children:`actions`}),` and `,(0,d.jsx)(n.code,{children:`actions-start`}),`. You should set the correct `,(0,d.jsx)(n.code,{children:`aria-label`}),` for any icon buttons that are included in actions using fluent, since we cannot programmatically associate the button with the label in the shadow DOM.`]}),`
`,(0,d.jsxs)(n.p,{children:[`The `,(0,d.jsx)(n.code,{children:`actions`}),` slot goes after the label/description/etc. Using this slot is a preferred way to ad actions to the component.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-box-item label="I'm a box item">
  <moz-button label="Click me!" slot="actions"></moz-button>
</moz-box-item>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`moz-box-item`,{style:{width:`400px`},label:`I'm a box item`,children:(0,d.jsx)(`moz-button`,{label:`Click me!`,slot:`actions`})})})})}),`
`,(0,d.jsxs)(n.p,{children:[`Use `,(0,d.jsx)(n.code,{children:`slot="actions-start"`}),` if you need to place an action at the beginning of the container. If `,(0,d.jsx)(n.code,{children:`moz-box-item`}),` is a part of the `,(0,d.jsx)(n.code,{children:`moz-box-group`}),`, the number of items in `,(0,d.jsx)(n.code,{children:`actions-start`}),` slot should be consistent across the entire group.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-box-item label="I'm a box item">
  <moz-button iconsrc="chrome://global/skin/icons/delete.svg"
              aria-label="Delete I'm a box item"
              slot="actions-start">
  </moz-button>
</moz-box-item>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`moz-box-item`,{style:{width:`400px`},label:`I'm a box item`,children:(0,d.jsx)(`moz-button`,{iconsrc:`chrome://global/skin/icons/delete.svg`,"aria-label":`Delete I'm a box item`,slot:`actions-start`})})})})}),`
`,(0,d.jsx)(n.h3,{id:`using-the-default-slot`,children:`Using the default slot`}),`
`,(0,d.jsxs)(n.p,{children:[`Use the default slot if you need to place a custom content into the `,(0,d.jsx)(n.code,{children:`moz-box-item`}),`.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-box-item>
  <div class="slotted">
    <img src="resource://content-accessible/illustrations/security-error.svg"
    alt="Confused Kit is looking at an orange exclamation mark" />
    <span>This is an example message</span>
    <span class="text-deemphasized">
      Message description would go down here
    </span>
  </div>
</moz-box-item>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`moz-box-item`,{style:{width:`280px`},children:(0,d.jsxs)(`div`,{style:{display:`flex`,justifyContent:`center`,alignItems:`center`,flexDirection:`column`,textAlign:`center`},children:[(0,d.jsx)(`img`,{src:`resource://content-accessible/illustrations/security-error.svg`,style:{width:`150px`,marginBlockEnd:`16px`},alt:`Confused Kit is looking at an orange exclamation mark`}),(0,d.jsx)(`span`,{children:`This is an example message`}),(0,d.jsx)(`span`,{class:`text-deemphasized`,children:(0,d.jsx)(n.p,{children:`Message description would go down here`})})]})})})})}),`
`,(0,d.jsx)(n.h3,{id:`fluent-usage`,children:`Fluent usage`}),`
`,(0,d.jsxs)(n.p,{children:[`The `,(0,d.jsx)(n.code,{children:`label`}),` and `,(0,d.jsx)(n.code,{children:`description`}),` attributes of `,(0,d.jsx)(n.code,{children:`moz-box-item`}),` will generally be provided via `,(0,d.jsx)(n.a,{href:`https://mozilla-l10n.github.io/localizer-documentation/tools/fluent/basic_syntax.html#attributes`,rel:`nofollow`,children:`Fluent attributes`}),`.
The relevant `,(0,d.jsx)(n.code,{children:`data-l10n-attrs`}),` are set automatically, so to get things working you just need to supply a `,(0,d.jsx)(n.code,{children:`data-l10n-id`}),` as you would with any other element.`]}),`
`,(0,d.jsx)(n.p,{children:`For example, the following Fluent messages:`}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:`moz-box-item-label =
  .label = I'm a box item
moz-box-item-label-description =
  .label = I'm a box item
  .description = Some description of the item
`})}),`
`,(0,d.jsxs)(n.p,{children:[`would be used to set attributes on the different `,(0,d.jsx)(n.code,{children:`moz-box-item`}),` elements as follows:`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-box-item data-l10n-id="moz-box-item-label"></moz-box-item>
<moz-box-item data-l10n-id="moz-box-item-label-description"></moz-box-item>
`})}),`
`,(0,d.jsx)(n.h2,{id:`args-table`,children:`Args Table`}),`
`,(0,d.jsx)(r,{of:`moz-box-item`})]})}function u(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=a(),s(),n(),c()})))()}f();export{u as default};