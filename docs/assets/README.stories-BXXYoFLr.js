import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,l as n,n as r,s as i}from"./blocks-DYgZUhjJ.js";import{a}from"./chunk-W22LQPXL-H6o6iyRO.js";import{i as o,r as s}from"./react-Bg8UoiFE.js";import{t as c}from"./moz-card-CyK0N_qt.js";function l(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...o(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i,{title:`UI Widgets/ Card/README`}),`
`,(0,d.jsx)(n.h1,{id:`mozcard`,children:`MozCard`}),`
`,(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:`moz-card`}),` is a reusable component that can show a set of predetermined content in a container that looks like a "card".`]}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`moz-card`,{style:{width:`500px`},children:(0,d.jsx)(n.p,{children:`Here is my content inside of a card.`})})})})}),`
`,(0,d.jsx)(n.h2,{id:`code`,children:`Code`}),`
`,(0,d.jsxs)(n.p,{children:[`The source for `,(0,d.jsx)(n.code,{children:`moz-card`}),` can be found under `,(0,d.jsx)(n.a,{href:`https://searchfox.org/firefox-main/source/toolkit/content/widgets/moz-card`,rel:`nofollow`,children:`toolkit/content/widgets/moz-card/`})]}),`
`,(0,d.jsxs)(n.h2,{id:`how-to-use-moz-card`,children:[`How to use `,(0,d.jsx)(n.code,{children:`moz-card`})]}),`
`,(0,d.jsx)(n.h3,{id:`importing-the-element`,children:`Importing the element`}),`
`,(0,d.jsxs)(n.p,{children:[`Like other custom elements, you should usually be able to rely on `,(0,d.jsx)(n.code,{children:`moz-card`}),` getting lazy-loaded at the time of first use.
See `,(0,d.jsx)(n.a,{href:`https://firefox-source-docs.mozilla.org/browser/components/storybook/docs/README.reusable-widgets.stories.html#using-new-design-system-components`,rel:`nofollow`,children:`this documentation`}),` for more information on using design system custom elements.`]}),`
`,(0,d.jsxs)(n.h3,{id:`setting-the-heading`,children:[`Setting the `,(0,d.jsx)(n.code,{children:`heading`})]}),`
`,(0,d.jsx)(n.p,{children:`Provide a heading for the moz-card component for emphasis on what the card is about.`}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-card heading="The heading">The content under the heading</moz-card>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`moz-card`,{style:{width:`500px`},heading:`The heading`,children:`The content under the heading`})})})}),`
`,(0,d.jsxs)(n.p,{children:[`You can also set an icon along with the heading by providing an image path for the `,(0,d.jsx)(n.code,{children:`iconSrc`}),` attribute.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-card heading="The heading" iconSrc="chrome://browser/skin/preferences/category-general.svg">The content under the heading</moz-card>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`moz-card`,{style:{width:`500px`},heading:`The heading`,iconSrc:`chrome://browser/skin/preferences/category-general.svg`,children:`The content under the heading`})})})}),`
`,(0,d.jsxs)(n.h3,{id:`setting-the-type`,children:[`Setting the `,(0,d.jsx)(n.code,{children:`type`})]}),`
`,(0,d.jsxs)(n.p,{children:[`A type of `,(0,d.jsx)(n.code,{children:`accordion`}),` can be provided to moz-card component to generate an accordion-version of the component.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-card
    type="accordion"
    heading="This is an accordion"
>The expanded content in the accordion</moz-card>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`moz-card`,{style:{width:`500px`},type:`accordion`,heading:`This is an accordion`,children:`The expanded content in the accordion`})})})}),`
`,(0,d.jsx)(n.h3,{id:`using-an-accordion-as-a-tree-item`,children:`Using an accordion as a tree item`}),`
`,(0,d.jsxs)(n.p,{children:[`When accordion cards are the items of a tree, set the `,(0,d.jsx)(n.code,{children:`treeItem`}),` property.
The card then removes the `,(0,d.jsx)(n.code,{children:`article`}),` semantics, which would otherwise sit
between the tree and its items, stops labelling the article with the heading,
and gives the summary the `,(0,d.jsx)(n.code,{children:`treeitem`}),` role. The heading is always rendered as a
`,(0,d.jsx)(n.code,{children:`span`}),`, ignoring `,(0,d.jsx)(n.code,{children:`headingLevel`}),`, so heading navigation doesn't jump into the
tree. The expanded state comes from the card's `,(0,d.jsx)(n.code,{children:`details`}),` element, so there is no
`,(0,d.jsx)(n.code,{children:`aria-expanded`}),` to keep in sync. `,(0,d.jsx)(n.code,{children:`treeItem`}),` is ignored unless the `,(0,d.jsx)(n.code,{children:`type`}),` is `,(0,d.jsx)(n.code,{children:`accordion`}),`.`]}),`
`,(0,d.jsxs)(n.p,{children:[`Each card sits in its own container, so the browser can't count sibling cards
by itself. Set `,(0,d.jsx)(n.code,{children:`aria-level`}),`, `,(0,d.jsx)(n.code,{children:`aria-posinset`}),` and `,(0,d.jsx)(n.code,{children:`aria-setsize`}),` on the card and
it moves them onto the summary.`]}),`
`,(0,d.jsxs)(n.p,{children:[`The card does not create the tree. The surrounding `,(0,d.jsx)(n.code,{children:`role="tree"`}),` element, and a
`,(0,d.jsx)(n.code,{children:`role="group"`}),` around any nested items, still have to be provided by the code
using the card.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<div role="tree">
    <moz-card type="accordion" heading="Parent" treeItem
        aria-level="1" aria-posinset="1" aria-setsize="1">
        <div role="group">
            <moz-card type="accordion" heading="Child" treeItem
                aria-level="2" aria-posinset="1" aria-setsize="1">
                The content of the child
            </moz-card>
        </div>
    </moz-card>
</div>
`})}),`
`,(0,d.jsx)(n.h3,{id:`fluent-usage`,children:`Fluent usage`}),`
`,(0,d.jsxs)(n.p,{children:[`Generally the `,(0,d.jsx)(n.code,{children:`heading`}),` property of `,(0,d.jsx)(n.code,{children:`moz-card`}),` will be provided via `,(0,d.jsx)(n.a,{href:`https://mozilla-l10n.github.io/localizer-documentation/tools/fluent/basic_syntax.html#attributes`,rel:`nofollow`,children:`Fluent attributes`}),`. To get this working you will need to format your Fluent message like this:`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:`with-heading =
  .heading = Heading text goes here
`})}),`
`,(0,d.jsxs)(n.p,{children:[`The `,(0,d.jsx)(n.code,{children:`data-l10n-attrs`}),` will be set up automatically, so you can just specify `,(0,d.jsx)(n.code,{children:`data-l10n-id`}),` on your moz-card as you would with any other markup:`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-card data-l10n-id="with-heading"></moz-card>
`})}),`
`,(0,d.jsx)(n.h3,{id:`setting-the-cover-image`,children:`Setting the cover image`}),`
`,(0,d.jsx)(n.p,{children:`To include an image that appears above the heading/content, use the named slot "cover-image".`}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-card heading="The heading">
    <img src="/path/to/image.jpg" alt slot="cover-image">
    <div>The content under the heading</div>
</moz-card>
`})}),`
`,(0,d.jsx)(n.p,{children:`This will render an image with some default styling applied, which can be partially overridden with CSS custom properties.`}),`
`,(0,d.jsxs)(n.ul,{children:[`
`,(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:`--card-cover-image-height`}),`: `,(0,d.jsx)(n.code,{children:`160px`}),` by default`]}),`
`,(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:`--card-cover-image-object-fit`}),`: `,(0,d.jsx)(n.code,{children:`cover`}),` by default`]}),`
`,(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:`--card-cover-image-object-position`}),`: `,(0,d.jsx)(n.code,{children:`center`}),` by default`]}),`
`]}),`
`,(0,d.jsx)(n.p,{children:`More complex HTML can be used for the "cover-image" slot, but it needs to be styled separately.`}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<style>
    .custom-cover-image {
      width: 100%;
      height: 215px;
      border-radius: var(--border-radius-small);
    }
</style>
<moz-card heading="The heading">
    <picture slot="cover-image">
        <img src="/path/to/image.jpg" alt class="custom-cover-image">
    </picture>
    <div>The content under the heading</div>
</moz-card>
`})}),`
`,(0,d.jsx)(n.h2,{id:`args-table`,children:`Args Table`}),`
`,(0,d.jsx)(r,{of:`moz-card`})]})}function u(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=a(),s(),n(),c()})))()}f();export{u as default};