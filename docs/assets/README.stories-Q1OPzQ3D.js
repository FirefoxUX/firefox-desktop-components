import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,l as n,n as r,s as i}from"./blocks-DYgZUhjJ.js";import{a}from"./chunk-W22LQPXL-H6o6iyRO.js";import{i as o,r as s}from"./react-Bg8UoiFE.js";import{t as c}from"./moz-message-bar-AqGWvV1o.js";function l(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...o(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i,{title:`UI Widgets/ Message Bar/README`}),`
`,(0,d.jsx)(n.h1,{id:`mozmessagebar`,children:`MozMessageBar`}),`
`,(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:`moz-message-bar`}),` is a versatile user interface element designed to display messages or notifications.
These messages and notifications are nonmodal, and keep users informed without blocking access to the base page.
It supports various types of messages - info, warning, success, and error - each with distinct visual styling
to convey the message's urgency or importance. You can customize `,(0,d.jsx)(n.code,{children:`moz-message-bar`}),` by adding a message, message heading,
`,(0,d.jsx)(n.code,{children:`moz-support-link`}),`, actions buttons, or by making the message bar dismissable.`]}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`moz-message-bar`,{dismissable:!0,heading:`Heading of the message bar`,message:`Message for the user`})})})}),`
`,(0,d.jsx)(n.h2,{id:`when-to-use`,children:`When to use`}),`
`,(0,d.jsxs)(n.ul,{children:[`
`,(0,d.jsx)(n.li,{children:`Use the message bar to display important announcements or notifications to the user.`}),`
`,(0,d.jsx)(n.li,{children:`Use it to attract the user's attention without interrupting the user's task.`}),`
`]}),`
`,(0,d.jsx)(n.h2,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,d.jsxs)(n.ul,{children:[`
`,(0,d.jsx)(n.li,{children:`Do not use the message bar for displaying critical alerts or warnings that require immediate and focused attention.`}),`
`]}),`
`,(0,d.jsx)(n.h2,{id:`code`,children:`Code`}),`
`,(0,d.jsxs)(n.p,{children:[`The source for `,(0,d.jsx)(n.code,{children:`moz-message-bar`}),` can be found under
`,(0,d.jsx)(n.a,{href:`https://searchfox.org/firefox-main/source/toolkit/content/widgets/moz-message-bar/moz-message-bar.mjs`,rel:`nofollow`,children:`toolkit/content/widgets/moz-message-bar`}),`.
You can find an examples of `,(0,d.jsx)(n.code,{children:`moz-message-bar`}),` in use in the Firefox codebase in
`,(0,d.jsx)(n.a,{href:`https://searchfox.org/firefox-main/source/toolkit/mozapps/extensions/content/aboutaddons.html`,rel:`nofollow`,children:`about:addons`}),` and
`,(0,d.jsx)(n.a,{href:`https://searchfox.org/firefox-main/source/browser/base/content/browser-addons.js`,rel:`nofollow`,children:`unified extensions panel`}),`.`]}),`
`,(0,d.jsxs)(n.h2,{id:`how-to-use-moz-message-bar`,children:[`How to use `,(0,d.jsx)(n.code,{children:`moz-message-bar`})]}),`
`,(0,d.jsx)(n.h3,{id:`importing-the-element`,children:`Importing the element`}),`
`,(0,d.jsxs)(n.p,{children:[`Like other custom elements, you should usually be able to rely on `,(0,d.jsx)(n.code,{children:`moz-message-bar`}),` getting lazy loaded at the time of first use. See `,(0,d.jsx)(n.a,{href:`https://firefox-source-docs.mozilla.org/browser/components/storybook/docs/README.reusable-widgets.stories.html#using-new-design-system-components`,rel:`nofollow`,children:`this documentation`}),` for more information on using design system custom elements.`]}),`
`,(0,d.jsx)(n.h3,{id:`fluent-usage`,children:`Fluent usage`}),`
`,(0,d.jsxs)(n.p,{children:[`Generally the `,(0,d.jsx)(n.code,{children:`heading`}),` and `,(0,d.jsx)(n.code,{children:`message`}),` properties of
`,(0,d.jsx)(n.code,{children:`moz-message-bar`}),` will be provided via `,(0,d.jsx)(n.a,{href:`https://mozilla-l10n.github.io/localizer-documentation/tools/fluent/basic_syntax.html#attributes`,rel:`nofollow`,children:`Fluent attributes`}),`.
To get this working you will need to format your Fluent message like this:`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:`with-heading-and-message =
  .heading = Heading text goes here
  .message = Message text goes here
`})}),`
`,(0,d.jsxs)(n.p,{children:[`The `,(0,d.jsx)(n.code,{children:`data-l10n-attrs`}),` will be set up automatically via `,(0,d.jsx)(n.code,{children:`MozLitElement`}),`, so you can just specify `,(0,d.jsx)(n.code,{children:`data-l10n-id`}),` on your message bar as you would with any other markup:`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`  <moz-message-bar data-l10n-id="with-heading-and-message"></moz-message-bar>
`})}),`
`,(0,d.jsxs)(n.h3,{id:`custom-message-slot`,children:[`Custom `,(0,d.jsx)(n.code,{children:`message`}),` slot`]}),`
`,(0,d.jsxs)(n.p,{children:[`Normally the "message" of `,(0,d.jsx)(n.code,{children:`moz-message-bar`}),` can only be a string (containing no HTML elements). However, if you'd like to use a message that contains nested HTML, such as an anchor link, you can use the message slot.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-message-bar>
  <span slot="message" data-l10n-id="moz-message-bar-message-slot">
    <a data-l10n-name="moz-message-bar-link" href="http://example.com"></a>
  </span>
</moz-message-bar>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsx)(`moz-message-bar`,{children:(0,d.jsxs)(`span`,{slot:`message`,children:[`Here is a message with a nested `,(0,d.jsx)(`a`,{href:`https://example.com`,target:`_blank`,children:`link`}),`.`]})})})})}),`
`,(0,d.jsx)(n.h2,{id:`args-table`,children:`Args Table`}),`
`,(0,d.jsx)(r,{of:`moz-message-bar`})]})}function u(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=a(),s(),n(),c()})))()}f();export{u as default};