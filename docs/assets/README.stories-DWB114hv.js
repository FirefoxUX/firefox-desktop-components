import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,l as n,n as r,s as i}from"./blocks-DYgZUhjJ.js";import{a}from"./chunk-W22LQPXL-H6o6iyRO.js";import{i as o,r as s}from"./react-Bg8UoiFE.js";import{n as c}from"./moz-box-group-C8TB7aXo.js";function l(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...o(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i,{title:`UI Widgets/ Box Group/README`}),`
`,(0,d.jsx)(n.h1,{id:`mozboxgroup`,children:`MozBoxGroup`}),`
`,(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:`moz-box-group`}),` custom element is a flexible container used to group and manage combinations of `,(0,d.jsx)(n.code,{children:`moz-box-item`}),`, `,(0,d.jsx)(n.code,{children:`moz-box-link`}),`, and `,(0,d.jsx)(n.code,{children:`moz-box-button`}),` elements with consistent styles and interaction behaviors.`]}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`div`,{style:{width:`500px`},children:(0,d.jsxs)(`moz-box-group`,{children:[(0,d.jsx)(`moz-box-item`,{label:`I am a box item`}),(0,d.jsx)(`moz-box-link`,{label:`I am a box link`}),(0,d.jsx)(`moz-box-button`,{label:`I am a box button`})]})})})})}),`
`,(0,d.jsx)(n.h2,{id:`code`,children:`Code`}),`
`,(0,d.jsxs)(n.p,{children:[`The source for `,(0,d.jsx)(n.code,{children:`moz-box-group`}),` can be found under `,(0,d.jsx)(n.a,{href:`https://searchfox.org/firefox-main/source/toolkit/content/widgets/moz-box-group`,rel:`nofollow`,children:`toolkit/content/widgets/moz-box-group/`})]}),`
`,(0,d.jsxs)(n.h2,{id:`how-to-use-moz-box-group`,children:[`How to use `,(0,d.jsx)(n.code,{children:`moz-box-group`})]}),`
`,(0,d.jsx)(n.h3,{id:`importing-the-element`,children:`Importing the element`}),`
`,(0,d.jsxs)(n.p,{children:[`Like other custom elements, you should usually be able to rely on `,(0,d.jsx)(n.code,{children:`moz-box-group`}),` getting lazy loaded at the time of first use.
See `,(0,d.jsx)(n.a,{href:`https://firefox-source-docs.mozilla.org/browser/components/storybook/docs/README.reusable-widgets.stories.html#using-new-design-system-components`,rel:`nofollow`,children:`this documentation`}),` for more information on using design system custom elements.`]}),`
`,(0,d.jsx)(n.h3,{id:`adding-items-to-the-group`,children:`Adding items to the group`}),`
`,(0,d.jsxs)(n.p,{children:[`In order to group `,(0,d.jsx)(n.code,{children:`moz-box-*`}),` elements (`,(0,d.jsx)(n.code,{children:`moz-box-item`}),`, `,(0,d.jsx)(n.code,{children:`moz-box-link`}),`, and `,(0,d.jsx)(n.code,{children:`moz-box-button`}),`), place them directly inside the `,(0,d.jsx)(n.code,{children:`moz-box-group`}),` element as its immediate children.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-box-group>
  <moz-box-item label="I am a box item"></moz-box-item>
  <moz-box-link label="I am a box link"></moz-box-link>
  <moz-box-button label="I am a box button"></moz-box-button>
</moz-box-group>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`div`,{style:{width:`500px`},children:(0,d.jsxs)(`moz-box-group`,{children:[(0,d.jsx)(`moz-box-item`,{label:`I am a box item`}),(0,d.jsx)(`moz-box-link`,{label:`I am a box link`}),(0,d.jsx)(`moz-box-button`,{label:`I am a box button`})]})})})})}),`
`,(0,d.jsx)(n.h3,{id:`setting-the-type`,children:`Setting the type`}),`
`,(0,d.jsxs)(n.p,{children:[`The `,(0,d.jsx)(n.code,{children:`type`}),` attribute on `,(0,d.jsx)(n.code,{children:`moz-box-group`}),` determines how its child elements are grouped, displayed, and interacted with. The `,(0,d.jsx)(n.code,{children:`moz-box-group`}),` supports following types: `,(0,d.jsx)(n.code,{children:`default`}),`, `,(0,d.jsx)(n.code,{children:`list`}),`, `,(0,d.jsx)(n.code,{children:`reorderable-list`}),`.`]}),`
`,(0,d.jsx)(n.h4,{id:`no-type-default`,children:`No Type (Default)`}),`
`,(0,d.jsxs)(n.p,{children:[`When no `,(0,d.jsx)(n.code,{children:`type`}),` is specified, `,(0,d.jsx)(n.code,{children:`moz-box-group`}),` acts as a simple visual grouping container. Elements are rendered as-is, in document order, without being wrapped in a list.`]}),`
`,(0,d.jsxs)(n.p,{children:[`Default `,(0,d.jsx)(n.code,{children:`moz-box-group`}),` has the following keyboard navigation behavior:`]}),`
`,(0,d.jsxs)(n.ul,{children:[`
`,(0,d.jsxs)(n.li,{children:[`Each interactive element (`,(0,d.jsx)(n.code,{children:`moz-box-link`}),` and `,(0,d.jsx)(n.code,{children:`moz-box-button`}),`) or element with interactive children (e.g. a `,(0,d.jsx)(n.code,{children:`moz-box-item`}),` with a toggle or button in one of the actions slots) will be it's own tab stop.`]}),`
`,(0,d.jsxs)(n.li,{children:[`Tabbing or using the left and right arrow keys in a `,(0,d.jsx)(n.code,{children:`moz-box-item`}),` with multiple interactive elements will navigate between those elements.`]}),`
`,(0,d.jsx)(n.li,{children:`Up/Down arrow keys don't go between elements.`}),`
`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-box-group>
  <moz-box-item label="I am a box item in a group"></moz-box-item>
  <moz-box-link label="I am a box link in a group"></moz-box-link>
  <moz-box-button label="I am a box button in a group"></moz-box-button>
</moz-box-group>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`div`,{style:{width:`500px`},children:(0,d.jsxs)(`moz-box-group`,{children:[(0,d.jsx)(`moz-box-item`,{label:`I am a box item in a group`}),(0,d.jsx)(`moz-box-link`,{label:`I am a box link in a group`}),(0,d.jsx)(`moz-box-button`,{label:`I am a box button in a group`})]})})})})}),`
`,(0,d.jsx)(n.h4,{id:`typelist`,children:`type="list"`}),`
`,(0,d.jsxs)(n.p,{children:[`When `,(0,d.jsx)(n.code,{children:`type`}),` is set to `,(0,d.jsx)(n.code,{children:`"list"`}),`, the component wraps the grouped elements in an unordered list (`,(0,d.jsx)(n.code,{children:`ul`}),`), with each item rendered inside an individual `,(0,d.jsx)(n.code,{children:`li`}),` list element. This improves accessibility and structure for similar items. `,(0,d.jsx)(n.code,{children:`type="list"`}),` provides accessible keyboard navigation to move focus between interactive elements inside the group:`]}),`
`,(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:`Tab key:`}),` Pressing `,(0,d.jsx)(n.code,{children:`Tab`}),` moves focus into the list and lands on the first interactive element within the `,(0,d.jsx)(n.code,{children:`moz-box-group`}),`.`]}),`
`,(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:`Arrow keys:`}),` Once focus is inside the list:`]}),`
`,(0,d.jsxs)(n.ul,{children:[`
`,(0,d.jsxs)(n.li,{children:[`Pressing `,(0,d.jsx)(n.code,{children:`ArrowDown`}),` moves focus to the next item in the list.`]}),`
`,(0,d.jsxs)(n.li,{children:[`Pressing `,(0,d.jsx)(n.code,{children:`ArrowUp`}),` moves focus to the previous item.`]}),`
`,(0,d.jsxs)(n.li,{children:[`Pressing `,(0,d.jsx)(n.code,{children:`ArrowRight`}),` and `,(0,d.jsx)(n.code,{children:`ArrowLeft`}),` or `,(0,d.jsx)(n.code,{children:`Tab`}),` when one of the `,(0,d.jsx)(n.code,{children:`moz-box-item`}),` interactive elements is in focus will navigate between those elements.`]}),`
`]}),`
`,(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:`Tab key (again):`}),` After navigating through the list with arrow keys, pressing `,(0,d.jsx)(n.code,{children:`Tab`}),` again will move focus out of the list to the next focusable element outside the group.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-box-group type="list">
  <moz-box-item label="I'm the first item in a list">
    <moz-button label="Click me!" slot="actions"></moz-button>
  </moz-box-item>
  <moz-box-item label="I'm the second item in a list">
    <moz-button label="Click me!" slot="actions"></moz-button>
  </moz-box-item>
  <moz-box-item label="I'm the third item in a list">
    <moz-button label="Click me!" slot="actions"></moz-button>
  </moz-box-item>
</moz-box-group>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`div`,{style:{width:`500px`},children:(0,d.jsxs)(`moz-box-group`,{type:`list`,children:[(0,d.jsx)(`moz-box-item`,{label:`I'm the first item in a list`,children:(0,d.jsx)(`moz-button`,{label:`Click me!`,slot:`actions`})}),(0,d.jsx)(`moz-box-item`,{label:`I'm the second item in a list`,children:(0,d.jsx)(`moz-button`,{label:`Click me!`,slot:`actions`})}),(0,d.jsx)(`moz-box-item`,{label:`I'm the third item in a list`,children:(0,d.jsx)(`moz-button`,{label:`Click me!`,slot:`actions`})})]})})})})}),`
`,(0,d.jsx)(n.h4,{id:`typereorderable-list`,children:`type="reorderable-list"`}),`
`,(0,d.jsxs)(n.p,{children:[`Setting `,(0,d.jsx)(n.code,{children:`type="reorderable-list"`}),` enhances the `,(0,d.jsx)(n.code,{children:`moz-box-group`}),` with reordering capabilities. It behaves like `,(0,d.jsx)(n.code,{children:`"list"`}),`, but:`]}),`
`,(0,d.jsxs)(n.ul,{children:[`
`,(0,d.jsxs)(n.li,{children:[`Renders an ordered list (`,(0,d.jsx)(n.code,{children:`ol`}),`).`]}),`
`,(0,d.jsxs)(n.li,{children:[`Wraps the list in a `,(0,d.jsx)(n.code,{children:`moz-reorderable-list`}),`.`]}),`
`,(0,d.jsxs)(n.li,{children:[`Enables drag-and-drop reordering using `,(0,d.jsx)(n.code,{children:`handle`}),` elements inside `,(0,d.jsx)(n.code,{children:`moz-box-item`}),`.`]}),`
`]}),`
`,(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:`Note:`}),` Only `,(0,d.jsx)(n.code,{children:`moz-box-item`}),` is currently supported in `,(0,d.jsx)(n.code,{children:`reorderable-list`}),`.`]}),`
`,(0,d.jsxs)(n.p,{children:[`When focus is on the `,(0,d.jsx)(n.code,{children:`moz-box-item`}),`’s `,(0,d.jsx)(n.code,{children:`handle`}),`, you can reorder items in the list using the following keyboard shortcuts:`]}),`
`,(0,d.jsxs)(n.ul,{children:[`
`,(0,d.jsx)(n.li,{children:`Ctrl + Shift + ArrowDown: moves the focused item after the next item in the list.`}),`
`,(0,d.jsx)(n.li,{children:`Ctrl + Shift + ArrowUp: moves the focused item before the previous item.`}),`
`]}),`
`,(0,d.jsx)(n.p,{children:`Reordering updates the DOM and retains focus on the moved item, allowing for continuous reordering using the keyboard.`}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-box-group type="reorderable-list">
  <moz-box-item label="I'm the first item in a list">
    <moz-button label="Click me!" slot="actions"></moz-button>
  </moz-box-item>
  <moz-box-item label="I'm the second item in a list">
    <moz-button label="Click me!" slot="actions"></moz-button>
  </moz-box-item>
  <moz-box-item label="I'm the third item in a list">
    <moz-button label="Click me!" slot="actions"></moz-button>
  </moz-box-item>
</moz-box-group>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`div`,{style:{width:`500px`},children:(0,d.jsxs)(`moz-box-group`,{type:`reorderable-list`,children:[(0,d.jsx)(`moz-box-item`,{label:`I'm the first item in a list`,children:(0,d.jsx)(`moz-button`,{label:`Click me!`,slot:`actions`})}),(0,d.jsx)(`moz-box-item`,{label:`I'm the second item in a list`,children:(0,d.jsx)(`moz-button`,{label:`Click me!`,slot:`actions`})}),(0,d.jsx)(`moz-box-item`,{label:`I'm the third item in a list`,children:(0,d.jsx)(`moz-button`,{label:`Click me!`,slot:`actions`})})]})})})})}),`
`,(0,d.jsx)(n.h3,{id:`header-and-footer`,children:`Header and Footer`}),`
`,(0,d.jsxs)(n.p,{children:[`The `,(0,d.jsx)(n.code,{children:`moz-box-group`}),` component supports optional header and footer content. To insert a header or footer, use the slot="header" and slot="footer" attributes on the first and last elements of the group. This allows you to consistently wrap groups of elements with contextual content without affecting the layout or behavior of the list.`]}),`
`,(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:`Note:`}),` Header and footer elements are not included in list keyboard navigation (`,(0,d.jsx)(n.code,{children:`ArrowUp`}),` and `,(0,d.jsx)(n.code,{children:`ArrowDown`}),`) or reordering.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-box-group type="list">
  <moz-box-item slot="header" label="I am a header"></moz-box-item>
  <moz-box-button label="I am the first button in a list"></moz-box-button>
  <moz-box-button label="I am the second button in a list"></moz-box-button>
  <moz-box-item slot="footer" label="I am a footer"></moz-box-item>
</moz-box-group>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`div`,{style:{width:`500px`},children:(0,d.jsxs)(`moz-box-group`,{type:`list`,children:[(0,d.jsx)(`moz-box-item`,{slot:`header`,label:`I am a header`}),(0,d.jsx)(`moz-box-button`,{label:`I am the first button in a list`}),(0,d.jsx)(`moz-box-button`,{label:`I am the second button in a list`}),(0,d.jsx)(`moz-box-item`,{slot:`footer`,label:`I am a footer`,children:(0,d.jsx)(`moz-button`,{label:`Click me!`,slot:`actions`})})]})})})})}),`
`,(0,d.jsx)(n.h3,{id:`static-items`,children:`Static Items`}),`
`,(0,d.jsxs)(n.p,{children:[`The `,(0,d.jsx)(n.code,{children:`moz-box-group`}),` component supports static (non-reorderable) items in reorderable lists. To mark an item as static, place it in the `,(0,d.jsx)(n.code,{children:`static`}),` named slot. Static items are positioned after regular items and cannot be reordered.`]}),`
`,(0,d.jsxs)(n.p,{children:[`Static items are only supported in `,(0,d.jsx)(n.code,{children:`type="reorderable-list"`}),`. They are included in keyboard navigation, and can contain interactive elements.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-box-group type="reorderable-list">
  <moz-box-item label="Reorderable item 1">
    <moz-button label="Click me!" slot="actions"></moz-button>
  </moz-box-item>
  <moz-box-item label="Reorderable item 2">
    <moz-button label="Click me!" slot="actions"></moz-button>
  </moz-box-item>
  <moz-box-item slot="static" label="Static item (cannot be reordered)">
    <moz-button label="Click me!" slot="actions"></moz-button>
  </moz-box-item>
</moz-box-group>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`div`,{style:{width:`500px`},children:(0,d.jsxs)(`moz-box-group`,{type:`reorderable-list`,children:[(0,d.jsx)(`moz-box-item`,{label:`Reorderable item 1`,children:(0,d.jsx)(`moz-button`,{label:`Click me!`,slot:`actions`})}),(0,d.jsx)(`moz-box-item`,{label:`Reorderable item 2`,children:(0,d.jsx)(`moz-button`,{label:`Click me!`,slot:`actions`})}),(0,d.jsx)(`moz-box-item`,{slot:`static`,label:`Static item (cannot be reordered)`,children:(0,d.jsx)(`moz-button`,{label:`Click me!`,slot:`actions`})})]})})})})}),`
`,(0,d.jsx)(n.h2,{id:`args-table`,children:`Args Table`}),`
`,(0,d.jsx)(r,{of:`moz-box-group`})]})}function u(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=a(),s(),n(),c()})))()}f();export{u as default};