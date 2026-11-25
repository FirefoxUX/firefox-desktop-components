import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,l as n,n as r,s as i}from"./blocks-DYgZUhjJ.js";import{a}from"./chunk-W22LQPXL-H6o6iyRO.js";import{i as o,r as s}from"./react-Bg8UoiFE.js";import{t as c}from"./moz-segmented-control-CN3SshOK.js";function l(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...o(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i,{title:`UI Widgets/ Segmented Control/README`}),`
`,(0,d.jsx)(n.h1,{id:`mozsegmentedcontrol`,children:`MozSegmentedControl`}),`
`,(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:`moz-segmented-control`}),` lets users select one option from a few related choices, displayed as connected buttons. Each option is a `,(0,d.jsx)(n.code,{children:`moz-segmented-control-item`}),`, which wraps `,(0,d.jsx)(n.code,{children:`moz-button`}),`.`]}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsxs)(`moz-segmented-control`,{name:`view`,"aria-label":`Select a view`,value:`list`,children:[(0,d.jsx)(`moz-segmented-control-item`,{value:`list`,label:`List`}),(0,d.jsx)(`moz-segmented-control-item`,{value:`grid`,label:`Grid`}),(0,d.jsx)(`moz-segmented-control-item`,{value:`compact`,label:`Compact`})]})})})}),`
`,(0,d.jsx)(n.h2,{id:`code`,children:`Code`}),`
`,(0,d.jsxs)(n.p,{children:[`The source for `,(0,d.jsx)(n.code,{children:`moz-segmented-control`}),` and `,(0,d.jsx)(n.code,{children:`moz-segmented-control-item`}),` can be found under `,(0,d.jsx)(n.a,{href:`https://searchfox.org/firefox-main/source/toolkit/content/widgets/moz-segmented-control/`,rel:`nofollow`,children:`toolkit/content/widgets/moz-segmented-control/`}),`. You can find examples of `,(0,d.jsx)(n.code,{children:`moz-segmented-control`}),` in use in the Firefox codebase in both the `,(0,d.jsx)(n.a,{href:`https://searchfox.org/firefox-main/source/toolkit/components/printing/content/print.html`,rel:`nofollow`,children:`print dialog`}),` and `,(0,d.jsx)(n.a,{href:`https://searchfox.org/firefox-main/source/toolkit/mozapps/extensions/content/components/aboutaddons-themes-mode.mjs`,rel:`nofollow`,children:`about:addons`}),`.`]}),`
`,(0,d.jsxs)(n.h2,{id:`when-to-use-moz-segmented-control`,children:[`When to use `,(0,d.jsx)(n.code,{children:`moz-segmented-control`})]}),`
`,(0,d.jsxs)(n.ul,{children:[`
`,(0,d.jsx)(n.li,{children:`Use a segmented control when you want users to pick one option from a small set of closely related options, such as a view mode or a sort order.`}),`
`,(0,d.jsx)(n.li,{children:`Use a segmented control over a radio group when space is limited and the options have short labels or can be represented by icons.`}),`
`,(0,d.jsxs)(n.li,{children:[`Use a segmented control to switch between views when it is paired with a `,(0,d.jsx)(n.code,{children:`named-deck`}),`.`]}),`
`]}),`
`,(0,d.jsxs)(n.h2,{id:`when-not-to-use-moz-segmented-control`,children:[`When not to use `,(0,d.jsx)(n.code,{children:`moz-segmented-control`})]}),`
`,(0,d.jsxs)(n.ul,{children:[`
`,(0,d.jsxs)(n.li,{children:[`If there are more than a handful of options or the labels are long, use `,(0,d.jsx)(n.code,{children:`moz-radio-group`}),` or `,(0,d.jsx)(n.code,{children:`moz-select`}),`.`]}),`
`,(0,d.jsxs)(n.li,{children:[`If it should be possible for the user to select multiple options, use `,(0,d.jsx)(n.code,{children:`moz-checkbox`}),`.`]}),`
`,(0,d.jsxs)(n.li,{children:[`If the options are actions rather than a choice between states, use `,(0,d.jsx)(n.code,{children:`moz-button-group`}),`.`]}),`
`]}),`
`,(0,d.jsxs)(n.h2,{id:`how-to-use-moz-segmented-control`,children:[`How to use `,(0,d.jsx)(n.code,{children:`moz-segmented-control`})]}),`
`,(0,d.jsx)(n.h3,{id:`importing-the-element`,children:`Importing the element`}),`
`,(0,d.jsxs)(n.p,{children:[`Like other custom elements, `,(0,d.jsx)(n.code,{children:`moz-segmented-control`}),` and `,(0,d.jsx)(n.code,{children:`moz-segmented-control-item`}),` are usually lazy loaded when first used. See `,(0,d.jsx)(n.a,{href:`https://firefox-source-docs.mozilla.org/browser/components/storybook/docs/README.reusable-widgets.stories.html#using-new-design-system-components`,rel:`nofollow`,children:`Using new design system components`}),` for more information.`]}),`
`,(0,d.jsxs)(n.h3,{id:`combining-moz-segmented-control-item-and-moz-segmented-control`,children:[`Combining `,(0,d.jsx)(n.code,{children:`moz-segmented-control-item`}),` and `,(0,d.jsx)(n.code,{children:`moz-segmented-control`})]}),`
`,(0,d.jsxs)(n.p,{children:[`Place each `,(0,d.jsx)(n.code,{children:`moz-segmented-control-item`}),` directly inside `,(0,d.jsx)(n.code,{children:`moz-segmented-control`}),`. Do not wrap items in layout elements. The group provides positioning and spacing for its items.`]}),`
`,(0,d.jsx)(n.p,{children:`If you are using the elements improperly you may see the following console error:`}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-sh`,children:`moz-segmented-control-item should only be used in an element that extends SelectControlBaseElement.
`})}),`
`,(0,d.jsxs)(n.h3,{id:`setting-value-for-the-group`,children:[`Setting `,(0,d.jsx)(n.code,{children:`value`}),` for the group`]}),`
`,(0,d.jsxs)(n.p,{children:[`The `,(0,d.jsx)(n.code,{children:`value`}),` property or attribute of `,(0,d.jsx)(n.code,{children:`moz-segmented-control`}),` can be used to set the `,(0,d.jsx)(n.code,{children:`checked`}),` state of its `,(0,d.jsx)(n.code,{children:`moz-segmented-control-item`}),` elements. While it is also possible to set `,(0,d.jsx)(n.code,{children:`checked`}),` directly on individual items, in most cases it's clearer to set `,(0,d.jsx)(n.code,{children:`value`}),` on the group. This allows `,(0,d.jsx)(n.code,{children:`moz-segmented-control`}),` to serve as the single source of truth for the selected state of its items.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-segmented-control name="greeting" aria-label="Select a preferred greeting" value="hola">
  <moz-segmented-control-item value="hi" label="Hi"></moz-segmented-control-item>
  <moz-segmented-control-item value="hello" label="Hello"></moz-segmented-control-item>
  <moz-segmented-control-item value="hola" label="Hola"></moz-segmented-control-item>
</moz-segmented-control>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsxs)(`moz-segmented-control`,{name:`greeting`,"aria-label":`Select a preferred greeting`,value:`hola`,children:[(0,d.jsx)(`moz-segmented-control-item`,{value:`hi`,label:`Hi`}),(0,d.jsx)(`moz-segmented-control-item`,{value:`hello`,label:`Hello`}),(0,d.jsx)(`moz-segmented-control-item`,{value:`hola`,label:`Hola`})]})})})}),`
`,(0,d.jsx)(n.h3,{id:`handling-selection-changes`,children:`Handling selection changes`}),`
`,(0,d.jsxs)(n.p,{children:[`When the user selects a different item, that item emits `,(0,d.jsx)(n.code,{children:`input`}),` and `,(0,d.jsx)(n.code,{children:`change`}),` events. Both events bubble to the group, so they can be handled there:`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-js`,children:`document.querySelector("moz-segmented-control").addEventListener("change", e => {
  console.log(e.target.value);
});
`})}),`
`,(0,d.jsxs)(n.h3,{id:`setting-name-for-the-group`,children:[`Setting `,(0,d.jsx)(n.code,{children:`name`}),` for the group`]}),`
`,(0,d.jsxs)(n.p,{children:[`Set `,(0,d.jsx)(n.code,{children:`name`}),` on the containing `,(0,d.jsx)(n.code,{children:`moz-segmented-control`}),` to associate its items. The group copies the name to each `,(0,d.jsx)(n.code,{children:`moz-segmented-control-item`}),`.`]}),`
`,(0,d.jsx)(n.h3,{id:`setting-an-accessible-name-for-the-group`,children:`Setting an accessible name for the group`}),`
`,(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:`moz-segmented-control`}),` is not designed to render a visible label. Use `,(0,d.jsx)(n.code,{children:`aria-label`}),` to give the group an accessible name, and rely on the surrounding UI, such as a heading or a `,(0,d.jsx)(n.code,{children:`moz-fieldset`}),`, when a visible label is needed:`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-segmented-control name="theme" aria-label="Color theme" value="light">
  <moz-segmented-control-item value="light" label="Light"></moz-segmented-control-item>
  <moz-segmented-control-item value="dark" label="Dark"></moz-segmented-control-item>
</moz-segmented-control>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsxs)(`moz-segmented-control`,{name:`theme`,"aria-label":`Color theme`,value:`light`,children:[(0,d.jsx)(`moz-segmented-control-item`,{value:`light`,label:`Light`}),(0,d.jsx)(`moz-segmented-control-item`,{value:`dark`,label:`Dark`})]})})})}),`
`,(0,d.jsx)(n.h3,{id:`setting-icons-on-items`,children:`Setting icons on items`}),`
`,(0,d.jsxs)(n.p,{children:[`Use the `,(0,d.jsx)(n.code,{children:`iconSrc`}),` property or `,(0,d.jsx)(n.code,{children:`iconsrc`}),` attribute to show an icon before the item's label:`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-segmented-control name="orientation" aria-label="Orientation" value="portrait">
  <moz-segmented-control-item value="portrait" label="Portrait" iconsrc="chrome://global/skin/icons/page-portrait.svg"></moz-segmented-control-item>
  <moz-segmented-control-item value="landscape" label="Landscape" iconsrc="chrome://global/skin/icons/page-landscape.svg"></moz-segmented-control-item>
</moz-segmented-control>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsxs)(`moz-segmented-control`,{name:`orientation`,"aria-label":`Orientation`,value:`portrait`,children:[(0,d.jsx)(`moz-segmented-control-item`,{value:`portrait`,label:`Portrait`,iconsrc:`chrome://global/skin/icons/page-portrait.svg`}),(0,d.jsx)(`moz-segmented-control-item`,{value:`landscape`,label:`Landscape`,iconsrc:`chrome://global/skin/icons/page-landscape.svg`})]})})})}),`
`,(0,d.jsxs)(n.p,{children:[`Items can also be icon-only. In that case, omit the `,(0,d.jsx)(n.code,{children:`label`}),` and set `,(0,d.jsx)(n.code,{children:`aria-label`}),` so the item still has an accessible name:`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-segmented-control name="view" aria-label="View" value="list">
  <moz-segmented-control-item value="list" aria-label="List view" iconsrc="chrome://global/skin/icons/highlights.svg"></moz-segmented-control-item>
  <moz-segmented-control-item value="grid" aria-label="Grid view" iconsrc="chrome://global/skin/icons/defaultFavicon.svg"></moz-segmented-control-item>
</moz-segmented-control>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsxs)(`moz-segmented-control`,{name:`view`,"aria-label":`View`,value:`list`,children:[(0,d.jsx)(`moz-segmented-control-item`,{value:`list`,"aria-label":`List view`,iconsrc:`chrome://global/skin/icons/highlights.svg`}),(0,d.jsx)(`moz-segmented-control-item`,{value:`grid`,"aria-label":`Grid view`,iconsrc:`chrome://global/skin/icons/defaultFavicon.svg`})]})})})}),`
`,(0,d.jsxs)(n.h3,{id:`setting-the-size`,children:[`Setting the `,(0,d.jsx)(n.code,{children:`size`})]}),`
`,(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:`moz-segmented-control-item`}),` supports the same `,(0,d.jsx)(n.code,{children:`size`}),` values as `,(0,d.jsx)(n.code,{children:`moz-button`}),`. Set `,(0,d.jsx)(n.code,{children:`size="small"`}),` on each item for a more compact control:`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-segmented-control name="size" aria-label="Small items" value="one">
  <moz-segmented-control-item value="one" label="One" size="small"></moz-segmented-control-item>
  <moz-segmented-control-item value="two" label="Two" size="small"></moz-segmented-control-item>
  <moz-segmented-control-item value="three" label="Three" size="small"></moz-segmented-control-item>
</moz-segmented-control>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsxs)(`moz-segmented-control`,{name:`size`,"aria-label":`Small items`,value:`one`,children:[(0,d.jsx)(`moz-segmented-control-item`,{value:`one`,label:`One`,size:`small`}),(0,d.jsx)(`moz-segmented-control-item`,{value:`two`,label:`Two`,size:`small`}),(0,d.jsx)(`moz-segmented-control-item`,{value:`three`,label:`Three`,size:`small`})]})})})}),`
`,(0,d.jsxs)(n.h3,{id:`setting-the-disabled-state`,children:[`Setting the `,(0,d.jsx)(n.code,{children:`disabled`}),` state`]}),`
`,(0,d.jsxs)(n.p,{children:[`The `,(0,d.jsx)(n.code,{children:`disabled`}),` state can be set on `,(0,d.jsx)(n.code,{children:`moz-segmented-control`}),` to disable all of its child items:`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-segmented-control name="group-disabled" aria-label="Disabled group" value="one" disabled>
  <moz-segmented-control-item value="one" label="I'm disabled"></moz-segmented-control-item>
  <moz-segmented-control-item value="two" label="I'm disabled too"></moz-segmented-control-item>
</moz-segmented-control>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsxs)(`moz-segmented-control`,{name:`group-disabled`,"aria-label":`Disabled group`,value:`one`,disabled:!0,children:[(0,d.jsx)(`moz-segmented-control-item`,{value:`one`,label:`I'm disabled`}),(0,d.jsx)(`moz-segmented-control-item`,{value:`two`,label:`I'm disabled too`})]})})})}),`
`,(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:`disabled`}),` can also be set on individual `,(0,d.jsx)(n.code,{children:`moz-segmented-control-item`}),` elements to control their state independently of the rest of the group:`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-segmented-control name="item-disabled" aria-label="Disabled item" value="enabled">
  <moz-segmented-control-item value="enabled" label="I'm enabled"></moz-segmented-control-item>
  <moz-segmented-control-item value="disabled" label="I'm disabled" disabled></moz-segmented-control-item>
</moz-segmented-control>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsxs)(`moz-segmented-control`,{name:`item-disabled`,"aria-label":`Disabled item`,value:`enabled`,children:[(0,d.jsx)(`moz-segmented-control-item`,{value:`enabled`,label:`I'm enabled`}),(0,d.jsx)(`moz-segmented-control-item`,{value:`disabled`,label:`I'm disabled`,disabled:!0})]})})})}),`
`,(0,d.jsxs)(n.p,{children:[`The one caveat to this is that it is not possible to programmatically enable an individual item when the containing group is `,(0,d.jsx)(n.code,{children:`disabled`}),`.`]}),`
`,(0,d.jsxs)(n.h3,{id:`switching-views-with-named-deck`,children:[`Switching views with `,(0,d.jsx)(n.code,{children:`named-deck`})]}),`
`,(0,d.jsxs)(n.p,{children:[`Set the `,(0,d.jsx)(n.code,{children:`deck`}),` attribute to the `,(0,d.jsx)(n.code,{children:`id`}),` of a `,(0,d.jsx)(n.code,{children:`named-deck`}),` element to use `,(0,d.jsx)(n.code,{children:`moz-segmented-control`}),` as a tab switcher. Selecting an item shows the deck view whose `,(0,d.jsx)(n.code,{children:`name`}),` matches the item's `,(0,d.jsx)(n.code,{children:`value`}),`, and changing the deck's selected view updates the control. When `,(0,d.jsx)(n.code,{children:`deck`}),` is set, the control is exposed to assistive technologies as a tablist rather than a radio group.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-segmented-control name="pets" aria-label="Pets" deck="pet-deck" value="dogs">
  <moz-segmented-control-item value="dogs" label="Dogs"></moz-segmented-control-item>
  <moz-segmented-control-item value="cats" label="Cats"></moz-segmented-control-item>
</moz-segmented-control>
<named-deck id="pet-deck" selected-view="dogs">
  <section name="dogs">Dogs are great.</section>
  <section name="cats">Cats are great too.</section>
</named-deck>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsxs)(`div`,{children:[(0,d.jsxs)(`moz-segmented-control`,{name:`pets`,"aria-label":`Pets`,deck:`pet-deck`,value:`dogs`,children:[(0,d.jsx)(`moz-segmented-control-item`,{value:`dogs`,label:`Dogs`}),(0,d.jsx)(`moz-segmented-control-item`,{value:`cats`,label:`Cats`})]}),(0,d.jsxs)(`named-deck`,{id:`pet-deck`,"selected-view":`dogs`,children:[(0,d.jsx)(`section`,{name:`dogs`,children:`Dogs are great.`}),(0,d.jsx)(`section`,{name:`cats`,children:`Cats are great too.`})]})]})})})}),`
`,(0,d.jsx)(n.h3,{id:`fluent-usage`,children:`Fluent usage`}),`
`,(0,d.jsxs)(n.p,{children:[`The `,(0,d.jsx)(n.code,{children:`aria-label`}),` property of `,(0,d.jsx)(n.code,{children:`moz-segmented-control`}),` and the `,(0,d.jsx)(n.code,{children:`label`}),` and `,(0,d.jsx)(n.code,{children:`aria-label`}),` properties of `,(0,d.jsx)(n.code,{children:`moz-segmented-control-item`}),` will generally be provided via `,(0,d.jsx)(n.a,{href:`https://mozilla-l10n.github.io/localizer-documentation/tools/fluent/basic_syntax.html#attributes`,rel:`nofollow`,children:`Fluent attributes`}),`. `,(0,d.jsx)(n.code,{children:`data-l10n-attrs`}),` are set automatically, so to get things working you just need to supply a `,(0,d.jsx)(n.code,{children:`data-l10n-id`}),` as you would with any other element.`]}),`
`,(0,d.jsx)(n.p,{children:`For example the following Fluent messages:`}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:`moz-segmented-control-id =
  .aria-label = This is the accessible name for the group
first-item-id =
  .label = This is the label for the first item
second-item-id =
  .aria-label = This is the accessible name for an icon-only item
`})}),`
`,(0,d.jsx)(n.p,{children:`Would be used to set labels on the different elements as follows:`}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-segmented-control data-l10n-id="moz-segmented-control-id" value="first">
  <moz-segmented-control-item value="first" data-l10n-id="first-item-id"></moz-segmented-control-item>
  <moz-segmented-control-item value="second" data-l10n-id="second-item-id" iconsrc="chrome://global/skin/icons/highlights.svg"></moz-segmented-control-item>
</moz-segmented-control>
`})}),`
`,(0,d.jsx)(n.h2,{id:`args-table`,children:`Args Table`}),`
`,(0,d.jsx)(r,{of:`moz-segmented-control`})]})}function u(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=a(),s(),n(),c()})))()}f();export{u as default};