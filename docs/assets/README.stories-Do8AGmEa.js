import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,l as n,n as r,s as i}from"./blocks-DYgZUhjJ.js";import{a}from"./chunk-W22LQPXL-H6o6iyRO.js";import{i as o,r as s}from"./react-Bg8UoiFE.js";import{n as c}from"./moz-button-DlJZ5I-w.js";function l(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,h5:`h5`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...o(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i,{title:`UI Widgets/ Button/README`}),`
`,(0,d.jsx)(n.h1,{id:`mozbutton`,children:`MozButton`}),`
`,(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:`moz-button`}),` is a reusable, accessible, and customizable button component designed to indicate an available action for the user.
It is a wrapper of the `,(0,d.jsx)(n.code,{children:`<button>`}),` element with built-in support for label and title, as well as icons.
It supports various types (`,(0,d.jsx)(n.code,{children:`default`}),`, `,(0,d.jsx)(n.code,{children:`primary`}),`, `,(0,d.jsx)(n.code,{children:`destructive`}),`, `,(0,d.jsx)(n.code,{children:`icon`}),`, `,(0,d.jsx)(n.code,{children:`icon ghost`}),`, `,(0,d.jsx)(n.code,{children:`ghost`}),`) and sizes (`,(0,d.jsx)(n.code,{children:`default`}),`, `,(0,d.jsx)(n.code,{children:`small`}),`).`]}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsxs)(`div`,{style:{display:`flex`,justifyContent:`center`,gap:`1rem`,flexWrap:`wrap`},children:[(0,d.jsx)(`moz-button`,{label:`Default`,children:`"Default"`}),(0,d.jsx)(`moz-button`,{type:`primary`,label:`Primary`}),(0,d.jsx)(`moz-button`,{type:`destructive`,label:`Destructive`}),(0,d.jsx)(`moz-button`,{iconsrc:`chrome://global/skin/icons/more.svg`,tooltiptext:`Icon`}),(0,d.jsx)(`moz-button`,{iconsrc:`chrome://global/skin/icons/more.svg`,tooltiptext:`Icon Ghost`,type:`ghost`}),(0,d.jsx)(`moz-button`,{type:`ghost`,label:`Ghost`}),(0,d.jsx)(`moz-button`,{type:`split`,label:`Split`})]})})})}),`
`,(0,d.jsxs)(n.p,{children:[`More information about this component including design, writing, and localization guidelines, as well as design assets, can be found on our `,(0,d.jsx)(n.a,{href:`https://acorn.firefox.com/latest/components/button/desktop-udQAPeGf`,rel:`nofollow`,children:`Acorn site`}),`.`]}),`
`,(0,d.jsx)(n.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,d.jsx)(n.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,d.jsxs)(n.ul,{children:[`
`,(0,d.jsx)(n.li,{children:`Confirm an action or make a change.`}),`
`]}),`
`,(0,d.jsx)(n.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,d.jsxs)(n.ul,{children:[`
`,(0,d.jsx)(n.li,{children:`Don't use buttons in place of links.`}),`
`,(0,d.jsx)(n.li,{children:`Don't use buttons to navigate in-page or to new pages.`}),`
`]}),`
`,(0,d.jsx)(n.h3,{id:`avoid-these-common-mistakes`,children:`Avoid these common mistakes`}),`
`,(0,d.jsxs)(n.ul,{children:[`
`,(0,d.jsxs)(n.li,{children:[`Do not change button types (e.g., `,(0,d.jsx)(n.code,{children:`primary`}),` to `,(0,d.jsx)(n.code,{children:`destructive`}),`) based on hover or interaction.`]}),`
`,(0,d.jsx)(n.li,{children:`Do not change button text or labels based on user interaction (e.g. don't change the button text on hover).`}),`
`,(0,d.jsxs)(n.li,{children:[`Do not create "`,(0,d.jsx)(n.a,{href:`https://docs.google.com/presentation/d/1YZ0S9cl6Gd7H468-86YfnTrGkbkdH-lawRCVAGnWJDs/edit#slide=id.g2ff3e0a4a35_0_0`,rel:`nofollow`,children:`Schrödinger’s Buttons`}),`," i.e. buttons that only become visible when hovered or focused via keyboard.`]}),`
`]}),`
`,(0,d.jsx)(n.h2,{id:`code`,children:`Code`}),`
`,(0,d.jsxs)(n.p,{children:[`The source for `,(0,d.jsx)(n.code,{children:`moz-button`}),` can be found under `,(0,d.jsx)(n.a,{href:`https://searchfox.org/firefox-main/source/toolkit/content/widgets/moz-button`,rel:`nofollow`,children:`toolkit/content/widgets/moz-button/`})]}),`
`,(0,d.jsxs)(n.h2,{id:`how-to-use-moz-button`,children:[`How to use `,(0,d.jsx)(n.code,{children:`moz-button`})]}),`
`,(0,d.jsx)(n.h3,{id:`importing-the-element`,children:`Importing the element`}),`
`,(0,d.jsxs)(n.p,{children:[`Like other custom elements, you should usually be able to rely on `,(0,d.jsx)(n.code,{children:`moz-button`}),` getting lazy loaded at the time of first use.
See `,(0,d.jsx)(n.a,{href:`https://firefox-source-docs.mozilla.org/browser/components/storybook/docs/README.reusable-widgets.stories.html#using-new-design-system-components`,rel:`nofollow`,children:`this documentation`}),` for more information on using design system custom elements.`]}),`
`,(0,d.jsxs)(n.h3,{id:`setting-the-type`,children:[`Setting the `,(0,d.jsx)(n.code,{children:`type`})]}),`
`,(0,d.jsx)(n.h5,{id:`default`,children:`Default`}),`
`,(0,d.jsxs)(n.p,{children:[`If you won't explicitly set the `,(0,d.jsx)(n.code,{children:`type`}),` of `,(0,d.jsx)(n.code,{children:`moz-button`}),`, it will be set to `,(0,d.jsx)(n.code,{children:`default`}),`. In this case you will get a regular button, also known as a "Secondary" button.
A regular button may appear beside a primary button, or alone. Use it for secondary actions (e.g., Cancel) or for multiple actions of equal importance.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-button label="Button"></moz-button>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`moz-button`,{label:`Button`})})})}),`
`,(0,d.jsx)(n.h5,{id:`primary`,children:`Primary`}),`
`,(0,d.jsx)(n.p,{children:`Primary buttons represent the most important action on a page and stand out with distinct styling. To avoid visual clutter, only one primary button should be used per page.`}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-button type="primary" label="Primary"></moz-button>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`moz-button`,{type:`primary`,label:`Primary`})})})}),`
`,(0,d.jsx)(n.h5,{id:`destructive`,children:`Destructive`}),`
`,(0,d.jsx)(n.p,{children:`Destructive (Danger) buttons typically appear in dialogs to indicate that the user is about to make a destructive and irreversible action such as deleting or removing a file.`}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-button type="destructive" label="Destructive"></moz-button>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`moz-button`,{type:`destructive`,label:`Destructive`})})})}),`
`,(0,d.jsx)(n.h5,{id:`icon`,children:`Icon`}),`
`,(0,d.jsxs)(n.p,{children:[`Icon buttons are used for actions that can be easily represented with a symbol instead of text. They are ideal for saving space, simplifying the interface, or providing quick access to common functions like search, settings, or closing a window. However, they should include accessible tooltips to ensure clarity and usability.
There are two ways of providing an icon/image to `,(0,d.jsx)(n.code,{children:`moz-button`}),`:`]}),`
`,(0,d.jsxs)(n.ol,{children:[`
`,(0,d.jsxs)(n.li,{children:[`You can either specify `,(0,d.jsx)(n.code,{children:`type="icon"`}),` and provide a background-image for the `,(0,d.jsx)(n.code,{children:`::part`}),`:`]}),`
`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-button type="icon" title="I am an icon button" aria-label="I am an icon button"></moz-button>
`})}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-css`,children:`moz-button::part(button) {
  background-image: url("chrome://global/skin/icons/more.svg");
}
`})}),`
`,(0,d.jsxs)(n.ol,{start:`2`,children:[`
`,(0,d.jsxs)(n.li,{children:[`Or you can provide an icon URI via `,(0,d.jsx)(n.code,{children:`.iconSrc`}),` property / `,(0,d.jsx)(n.code,{children:`iconsrc`}),` attribute, in which case setting `,(0,d.jsx)(n.code,{children:`type="icon"`}),` is redundant:`]}),`
`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-button iconsrc="chrome://global/skin/icons/more.svg"
            title="I am an icon button"
            aria-label="I am an icon button">
</moz-button>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`moz-button`,{iconsrc:`chrome://global/skin/icons/more.svg`,title:`I am an icon button`,"aria-label":`I am an icon button`})})})}),`
`,(0,d.jsxs)(n.p,{children:[`You can also use `,(0,d.jsx)(n.code,{children:`iconsrc`}),` together with `,(0,d.jsx)(n.code,{children:`label`}),` to get a button with both icon and text.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-button iconsrc="chrome://global/skin/icons/edit-copy.svg" label="Button"></moz-button>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`moz-button`,{iconsrc:`chrome://global/skin/icons/edit-copy.svg`,label:`Button`})})})}),`
`,(0,d.jsxs)(n.p,{children:[`To adjust the icon's position, use the `,(0,d.jsx)(n.code,{children:`.iconPosition`}),` property / `,(0,d.jsx)(n.code,{children:`iconposition`}),` attribute. It accepts two values: `,(0,d.jsx)(n.code,{children:`start`}),` (the default) or `,(0,d.jsx)(n.code,{children:`end`}),`.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-button iconposition="end" iconsrc="chrome://global/skin/icons/edit-copy.svg" label="Button"></moz-button>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`moz-button`,{iconposition:`end`,iconsrc:`chrome://global/skin/icons/edit-copy.svg`,label:`Button`})})})}),`
`,(0,d.jsxs)(n.p,{children:[`To add a badge to the icon button, set `,(0,d.jsx)(n.code,{children:`.attention`}),` boolean property to `,(0,d.jsx)(n.code,{children:`true`}),` or add `,(0,d.jsx)(n.code,{children:`attention`}),` attribute to the markup.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-button iconsrc="chrome://global/skin/icons/more.svg"
            title="I am an icon button"
            aria-label="I am an icon button"
            attention>
</moz-button>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`moz-button`,{iconsrc:`chrome://global/skin/icons/more.svg`,title:`I am an icon button`,"aria-label":`I am an icon button`,attention:!0})})})}),`
`,(0,d.jsx)(n.h5,{id:`ghost`,children:`Ghost`}),`
`,(0,d.jsx)(n.p,{children:`Ghost buttons are used for secondary or less prominent actions. They are ideal for optional actions, alternative choices, or when a clean, subtle look is desired.`}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-button type="ghost" label="I am a ghost button"></moz-button>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`moz-button`,{type:`ghost`,label:`👻 I am a ghost button`})})})}),`
`,(0,d.jsx)(n.h4,{id:`menu-button`,children:`Menu Button`}),`
`,(0,d.jsxs)(n.p,{children:[`When `,(0,d.jsx)(n.code,{children:`moz-button`}),` is given a `,(0,d.jsx)(n.code,{children:`menuId`}),` property, it functions as a menu button. This property links the button to an associated `,(0,d.jsx)(n.a,{href:`https://searchfox.org/firefox-main/source/toolkit/content/widgets/panel-list/panel-list.mjs`,rel:`nofollow`,children:`panel-list`}),` component, which will act as the popup menu. The `,(0,d.jsx)(n.code,{children:`menuId`}),` must correspond to the ID of that `,(0,d.jsx)(n.code,{children:`panel-list`}),` element.`]}),`
`,(0,d.jsxs)(n.p,{children:[`This built-in integration with `,(0,d.jsx)(n.code,{children:`panel-list`}),` offers several automatic features:`]}),`
`,(0,d.jsxs)(n.ul,{children:[`
`,(0,d.jsxs)(n.li,{children:[`The button is automatically assigned `,(0,d.jsx)(n.code,{children:`aria-haspopup="menu"`}),`.`]}),`
`,(0,d.jsxs)(n.li,{children:[`The `,(0,d.jsx)(n.code,{children:`aria-expanded`}),` attribute is managed for you, reflecting the open or closed state of the panel.`]}),`
`,(0,d.jsxs)(n.li,{children:[`All necessary event listeners to open and close the `,(0,d.jsx)(n.code,{children:`panel-list`}),` are handled automatically.`]}),`
`]}),`
`,(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:`Note:`}),` The menu must exist in the same root node (e.g. shadow DOM or document) as the button.`]}),`
`,(0,d.jsxs)(n.p,{children:[`For now, you can't associate other types of menu with `,(0,d.jsx)(n.code,{children:`moz-button`}),` using `,(0,d.jsx)(n.code,{children:`menuId`}),`. In that case you must manually manage:`]}),`
`,(0,d.jsxs)(n.ul,{children:[`
`,(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:`ariaExpanded`}),` property / `,(0,d.jsx)(n.code,{children:`aria-expanded`}),` attribute - to reflect the open/closed state of the menu.`]}),`
`,(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:`ariaHasPopup`}),` property / `,(0,d.jsx)(n.code,{children:`aria-haspopup`}),` attribute - to define the type of popup (menu, listbox, dialog, etc.).`]}),`
`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-button iconsrc="chrome://global/skin/icons/more.svg"
            title="More options"
            aria-label="More options"
            menuid="panel-list">
</moz-button>
<panel-list id="panel-list">
  <panel-item>Option One</panel-item>
  <panel-item>Option Two</panel-item>
  <panel-item>Option Three</panel-item>
</panel-list>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsxs)(`with-common-styles`,{children:[(0,d.jsx)(`moz-button`,{iconsrc:`chrome://global/skin/icons/more.svg`,title:`More options`,"aria-label":`More options`,menuid:`panel-list`}),(0,d.jsx)(`div`,{children:(0,d.jsxs)(`panel-list`,{id:`panel-list`,"stay-open":!0,open:!0,children:[(0,d.jsx)(`panel-item`,{children:`Option One`}),(0,d.jsx)(`panel-item`,{children:`Option Two`}),(0,d.jsx)(`panel-item`,{children:`Option Three`})]})})]})})}),`
`,(0,d.jsx)(n.h4,{id:`split-button`,children:`Split Button`}),`
`,(0,d.jsxs)(n.p,{children:[`Split Button is an action button combined with an adjacent menu button offering additional options. To create a split button, set the `,(0,d.jsx)(n.code,{children:`type`}),` to `,(0,d.jsx)(n.code,{children:`split`}),` and provide a `,(0,d.jsx)(n.code,{children:`menuId`}),` that links to a `,(0,d.jsx)(n.code,{children:`panel-list`}),` element. Split Button renders "More options" menu button with chevron icon and default `,(0,d.jsx)(n.code,{children:`l10nId`}),`.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-button type="split"
            label="Split Button"
            menuid="panel-list">
</moz-button>
<panel-list id="panel-list">
  <panel-item>Option One</panel-item>
  <panel-item>Option Two</panel-item>
  <panel-item>Option Three</panel-item>
</panel-list>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsxs)(`with-common-styles`,{children:[(0,d.jsx)(`moz-button`,{type:`split`,label:`Split Button`,menuid:`panel-list`}),(0,d.jsx)(`div`,{children:(0,d.jsxs)(`panel-list`,{id:`panel-list`,"stay-open":!0,open:!0,children:[(0,d.jsx)(`panel-item`,{children:`Option One`}),(0,d.jsx)(`panel-item`,{children:`Option Two`}),(0,d.jsx)(`panel-item`,{children:`Option Three`})]})})]})})}),`
`,(0,d.jsx)(n.h4,{id:`toggle-button`,children:`Toggle button`}),`
`,(0,d.jsxs)(n.p,{children:[`Adding `,(0,d.jsx)(n.code,{children:`aria-pressed`}),` to the `,(0,d.jsx)(n.code,{children:`moz-button`}),` turns it into a toggle button. The `,(0,d.jsx)(n.code,{children:`aria-pressed`}),` attribute represents the button's current "pressed" state.`]}),`
`,(0,d.jsxs)(n.p,{children:[`Refer to `,(0,d.jsx)(n.a,{href:`https://w3c.github.io/aria/#aria-pressed`,rel:`nofollow`,children:`the W3C ARIA documentation`}),` for more information on using `,(0,d.jsx)(n.code,{children:`aria-pressed`}),` attribute.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-button label="Could be pressed" aria-pressed="false"></moz-button>
<moz-button label="Is already pressed" aria-pressed="true"></moz-button>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsxs)(`div`,{style:{display:`flex`,gap:`1rem`},children:[(0,d.jsx)(`moz-button`,{label:`Could be pressed`,"aria-pressed":`false`}),(0,d.jsx)(`moz-button`,{label:`Is already pressed`,"aria-pressed":`true`})]})})})}),`
`,(0,d.jsxs)(n.h3,{id:`setting-the-size`,children:[`Setting the `,(0,d.jsx)(n.code,{children:`size`})]}),`
`,(0,d.jsxs)(n.p,{children:[`There are 2 options for the `,(0,d.jsx)(n.code,{children:`moz-button`}),` size: `,(0,d.jsx)(n.code,{children:`default`}),` and `,(0,d.jsx)(n.code,{children:`small`}),`. Small buttons are only used for smaller UI surfaces. (e.g., Infobar).`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-button label="Default"></moz-button>
<moz-button label="Small" size="small"></moz-button>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`1rem`},children:[(0,d.jsx)(`moz-button`,{label:`Default`}),(0,d.jsx)(`moz-button`,{label:`Small`,size:`small`})]})})})}),`
`,(0,d.jsxs)(n.h3,{id:`setting-the-disabled-state`,children:[`Setting the `,(0,d.jsx)(n.code,{children:`disabled`}),` state`]}),`
`,(0,d.jsxs)(n.p,{children:[`In order to disable the `,(0,d.jsx)(n.code,{children:`moz-button`}),`, add `,(0,d.jsx)(n.code,{children:`disabled=""`}),` or `,(0,d.jsx)(n.code,{children:`disabled`}),` to the markup with no value.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-button label="Button" disabled></moz-button>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`moz-button`,{label:`Button`,disabled:!0})})})}),`
`,(0,d.jsxs)(n.h3,{id:`setting-the-accesskey`,children:[`Setting the `,(0,d.jsx)(n.code,{children:`accesskey`})]}),`
`,(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:`accesskey`}),` defines an keyboard shortcut for the button.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-button label="Button" accesskey="t"></moz-button>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`moz-button`,{label:`Button`,accesskey:`t`})})})}),`
`,(0,d.jsxs)(n.h3,{id:`customizing-moz-button`,children:[`Customizing `,(0,d.jsx)(n.code,{children:`moz-button`})]}),`
`,(0,d.jsxs)(n.p,{children:[`You can add the inner padding on the `,(0,d.jsx)(n.code,{children:`moz-button`}),` to give the button a larger target, and make it clickable when the window and cursor are up against the edge of the screen.
Use the following variables to achieve this:`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:`--button-outer-padding-inline - Used to set the outer inline padding of toolbar style buttons.
--button-outer-padding-block - Used to set the outer block padding of toolbar style buttons.
--button-outer-padding-inline-start - Used to set the outer inline-start padding of toolbar style buttons.
--button-outer-padding-inline-end - Used to set the outer inline-end padding of toolbar style buttons.
--button-outer-padding-block-start - Used to set the outer block-start padding of toolbar style buttons.
--button-outer-padding-block-end - Used to set the outer block-end padding of toolbar style buttons.
`})}),`
`,(0,d.jsx)(n.h3,{id:`fluent-usage`,children:`Fluent usage`}),`
`,(0,d.jsxs)(n.p,{children:[`The `,(0,d.jsx)(n.code,{children:`label`}),`, `,(0,d.jsx)(n.code,{children:`tooltiptext`}),`, `,(0,d.jsx)(n.code,{children:`title`}),` and `,(0,d.jsx)(n.code,{children:`aria-label`}),` attributes of `,(0,d.jsx)(n.code,{children:`moz-button`}),` will generally be provided via `,(0,d.jsx)(n.a,{href:`https://mozilla-l10n.github.io/localizer-documentation/tools/fluent/basic_syntax.html#attributes`,rel:`nofollow`,children:`Fluent attributes`}),`.
The relevant `,(0,d.jsx)(n.code,{children:`data-l10n-attrs`}),` are set automatically, so to get things working you just need to supply a `,(0,d.jsx)(n.code,{children:`data-l10n-id`}),` as you would with any other element.`]}),`
`,(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:`Note:`}),` `,(0,d.jsx)(n.a,{href:`https://bugzilla.mozilla.org/show_bug.cgi?id=1945032`,rel:`nofollow`,children:`Bug 1945032`}),` should be fixed before we add automatic fluent support for the `,(0,d.jsx)(n.code,{children:`accesskey`}),` attribute. For now `,(0,d.jsx)(n.code,{children:`accesskey`}),` should be manually added to the `,(0,d.jsx)(n.code,{children:`data-l10n-attrs`}),` if needed.`]}),`
`,(0,d.jsx)(n.p,{children:`For example, the following Fluent messages:`}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:`moz-button-ftl-id = This is the visible text content!
moz-button-labelled =
  .label = Button
moz-button-titled = Button
  .tooltiptext = Button with title
moz-button-titled-2 =
  .label = Button
  .title = Another button with title
moz-button-aria-labelled =
  .aria-label = Button with aria-label
moz-button-with-accesskey = Button
  .accesskey = t
`})}),`
`,(0,d.jsxs)(n.p,{children:[`would be used to set text and attributes on the different `,(0,d.jsx)(n.code,{children:`moz-button`}),` elements as follows:`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-button data-l10n-id="moz-button-ftl-id"></moz-button>
<moz-button data-l10n-id="moz-button-labelled"></moz-button>
<moz-button data-l10n-id="moz-button-titled"></moz-button>
<moz-button data-l10n-id="moz-button-titled-2"></moz-button>
<moz-button data-l10n-id="moz-button-aria-labelled"></moz-button>
<moz-button data-l10n-id="moz-button-with-accesskey"></moz-button>
`})}),`
`,(0,d.jsx)(n.h2,{id:`args-table`,children:`Args Table`}),`
`,(0,d.jsx)(r,{of:`moz-button`})]})}function u(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=a(),s(),n(),c()})))()}f();export{u as default};