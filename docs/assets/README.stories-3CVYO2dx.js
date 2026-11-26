import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,l as n,n as r,s as i}from"./blocks-DYgZUhjJ.js";import{a}from"./chunk-W22LQPXL-H6o6iyRO.js";import{i as o,r as s}from"./react-Bg8UoiFE.js";import{t as c}from"./moz-page-nav-CFici9HU.js";function l(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...o(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i,{title:`UI Widgets/ Page Nav/README`}),`
`,(0,d.jsx)(n.h1,{id:`mozpagenav`,children:`MozPageNav`}),`
`,(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:`moz-page-nav`}),` is a grouping of navigation buttons that is displayed at the page level,
intended to change the selected view, provide a heading, and have links to external resources.`]}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsxs)(`moz-page-nav`,{heading:`This is a nav`,style:{"--page-nav-margin-block-start":0,maxWidth:`20ch`,maxHeight:`275px`},children:[(0,d.jsx)(`moz-page-nav-button`,{view:`view-one`,iconSrc:`chrome://browser/skin/preferences/category-general.svg`,children:(0,d.jsx)(`p`,{style:{margin:0},children:`Test 1`})}),(0,d.jsx)(`moz-page-nav-button`,{view:`view-two`,iconSrc:`chrome://browser/skin/preferences/category-general.svg`,children:(0,d.jsx)(`p`,{style:{margin:0},children:`Test 2`})}),(0,d.jsx)(`moz-page-nav-button`,{view:`view-three`,iconSrc:`chrome://browser/skin/preferences/category-general.svg`,children:(0,d.jsx)(`p`,{style:{margin:0},children:`Test 3`})}),(0,d.jsx)(`moz-page-nav-button`,{"support-page":`test`,iconSrc:`chrome://browser/skin/preferences/category-general.svg`,slot:`secondary-nav`,children:(0,d.jsx)(`p`,{style:{margin:0},children:`Support Link`})}),(0,d.jsx)(`moz-page-nav-button`,{href:`https://www.example.com`,iconSrc:`chrome://browser/skin/preferences/category-general.svg`,slot:`secondary-nav`,children:(0,d.jsx)(`p`,{style:{margin:0},children:`External Link`})})]})})})}),`
`,(0,d.jsx)(n.h2,{id:`when-to-use`,children:`When to use`}),`
`,(0,d.jsxs)(n.ul,{children:[`
`,(0,d.jsx)(n.li,{children:`Use moz-page-nav for single-page navigation to switch between different views.`}),`
`,(0,d.jsx)(n.li,{children:`moz-page-nav also supports footer buttons for external and support links`}),`
`,(0,d.jsx)(n.li,{children:`This component is intended to be used in about: pages such as about:firefoxview, about:preferences, about:addons, about:debugging, etc.`}),`
`]}),`
`,(0,d.jsx)(n.h2,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,d.jsxs)(n.ul,{children:[`
`,(0,d.jsx)(n.li,{children:`If you need a navigation menu that does not switch between views within a single page`}),`
`]}),`
`,(0,d.jsx)(n.h2,{id:`code`,children:`Code`}),`
`,(0,d.jsxs)(n.p,{children:[`The source for `,(0,d.jsx)(n.code,{children:`moz-page-nav`}),` and `,(0,d.jsx)(n.code,{children:`moz-page-nav-button`}),` can be found under
`,(0,d.jsx)(n.a,{href:`https://searchfox.org/firefox-main/source/toolkit/content/widgets/moz-page-nav`,rel:`nofollow`,children:`toolkit/content/widgets/moz-page-nav`}),`.
You can find an examples of `,(0,d.jsx)(n.code,{children:`moz-page-nav`}),` in use in the Firefox codebase in
`,(0,d.jsx)(n.a,{href:`https://searchfox.org/mozilla-central/rev/9783996dbd86f999cab50ea426079a7b10f28a2f/browser/components/firefoxview/firefoxview.html#53-88`,rel:`nofollow`,children:`about:firefoxview`}),`.`]}),`
`,(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:`moz-page-nav`}),` can be imported into `,(0,d.jsx)(n.code,{children:`.html`}),`/`,(0,d.jsx)(n.code,{children:`.xhtml`}),` files:`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<script type="module" src="chrome://global/content/elements/moz-page-nav.mjs"><\/script>
`})}),`
`,(0,d.jsx)(n.p,{children:`And used as follows:`}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-page-nav heading="This is a nav">
  <moz-page-nav-button
    data-l10n-id="id-1"
    view="A name for the first view"
    iconSrc="A url for the icon for the first navigation button">
  </moz-page-nav-button>
  <moz-page-nav-button
    data-l10n-id="id-2"
    view="A name for the second view"
    iconSrc="A url for the icon for the second navigation button">
  </moz-page-nav-button>
  <moz-page-nav-button
    data-l10n-id="id-3"
    view="A name for the third view"
    iconSrc="A url for the icon for the third navigation button">
  </moz-page-nav-button>

  <!-- Footer Links -->

  <!-- Support Link -->
  <moz-page-nav-button
    support-page="A name for a support link"
    iconSrc="A url for the icon for the third navigation button"
    slot="secondary-nav">
  </moz-page-nav-button>

  <!-- External Link -->
  <moz-page-nav-button
    href="A url for an external link"
    iconSrc="A url for the icon for the third navigation button"
    slot="secondary-nav">
  </moz-page-nav-button>
</moz-page-nav>
`})}),`
`,(0,d.jsx)(n.h3,{id:`iconless-variant`,children:`Iconless variant`}),`
`,(0,d.jsxs)(n.p,{children:[`The `,(0,d.jsx)(n.code,{children:`iconSrc`}),` property of `,(0,d.jsx)(n.code,{children:`moz-page-nav-button`}),` is optional. This is intended to support more internal facing `,(0,d.jsx)(n.code,{children:`about:`}),` pages where the addition of icons is not necessary. In these cases, the code will look a bit simpler:`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-page-nav heading="This is a nav">
  <moz-page-nav-button
    data-l10n-id="id-1"
    view="A name for the first view">
  </moz-page-nav-button>
  <moz-page-nav-button
    data-l10n-id="id-2"
    view="A name for the second view">
  </moz-page-nav-button>
  <moz-page-nav-button
    data-l10n-id="id-3"
    view="A name for the third view">
  </moz-page-nav-button>
</moz-page-nav>
`})}),`
`,(0,d.jsx)(n.p,{children:`And will render like this:`}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsxs)(`moz-page-nav`,{heading:`This is a nav`,style:{maxWidth:`20ch`,maxHeight:`275px`},children:[(0,d.jsx)(`moz-page-nav-button`,{view:`A name for the first view`,children:(0,d.jsx)(`p`,{style:{margin:0},children:`First iconless button`})}),(0,d.jsx)(`moz-page-nav-button`,{view:`A name for the second view`,children:(0,d.jsx)(`p`,{style:{margin:0},children:`Second iconless button`})}),(0,d.jsx)(`moz-page-nav-button`,{view:`A name for the third view`,children:(0,d.jsx)(`p`,{style:{margin:0},children:`Third iconless button`})})]})})})}),`
`,(0,d.jsxs)(n.p,{children:[`Please note that `,(0,d.jsx)(n.code,{children:`moz-page-nav`}),` does not currently support mixing `,(0,d.jsx)(n.code,{children:`moz-page-nav-button`}),`s with icons and iconless `,(0,d.jsx)(n.code,{children:`moz-page-nav-button`}),`s. To avoid display issue your nav should pick one type for primary and secondary nav buttons and stick with it.`]}),`
`,(0,d.jsx)(n.h3,{id:`fluent-usage`,children:`Fluent usage`}),`
`,(0,d.jsxs)(n.p,{children:[`Generally the `,(0,d.jsx)(n.code,{children:`heading`}),` property of
`,(0,d.jsx)(n.code,{children:`moz-page-nav`}),` will be provided via `,(0,d.jsx)(n.a,{href:`https://mozilla-l10n.github.io/localizer-documentation/tools/fluent/basic_syntax.html#attributes`,rel:`nofollow`,children:`Fluent attributes`}),`.
To get this working you will need to format your Fluent message like this:`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:`with-heading =
  .heading = Heading text goes here
`})}),`
`,(0,d.jsxs)(n.p,{children:[`The `,(0,d.jsx)(n.code,{children:`data-l10n-attrs`}),` will be set up automatically via `,(0,d.jsx)(n.code,{children:`MozLitElement`}),`, so you can just specify `,(0,d.jsx)(n.code,{children:`data-l10n-id`}),` on your moz-page-nav as you would with any other markup:`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-page-nav data-l10n-id="with-heading"></moz-page-nav>
`})}),`
`,(0,d.jsxs)(n.p,{children:[`You also need to specify a `,(0,d.jsx)(n.code,{children:`data-l10n-id`}),` for each `,(0,d.jsx)(n.code,{children:`moz-page-nav-button`}),`:`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<moz-page-nav-button data-l10n-id="with-button-text"></moz-page-nav-button>
`})}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:`with-button-text = button text goes here
`})}),`
`,(0,d.jsx)(n.h2,{id:`args-table`,children:`Args Table`}),`
`,(0,d.jsx)(r,{of:`moz-page-nav`})]})}function u(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=a(),s(),n(),c()})))()}f();export{u as default};