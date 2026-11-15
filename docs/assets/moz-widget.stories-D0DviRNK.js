import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,l as n,s as r}from"./blocks-DYgZUhjJ.js";import{a as i}from"./chunk-W22LQPXL-H6o6iyRO.js";import{i as a,r as o}from"./react-Bg8UoiFE.js";function s(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...a(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r,{title:`Domain-specific UI Widgets/Widget/README`}),`
`,(0,l.jsx)(n.h1,{id:`mozwidget`,children:`MozWidget`}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:`moz-widget`}),` is a card that embeds a self-contained, interactive widget in a host surface. Widgets are used for presenting brief updates or completing a quick task.`]}),`
`,(0,l.jsxs)(n.p,{children:[`It clips content to its bounds and uses the dimensions set by the `,(0,l.jsx)(n.code,{children:`size`}),` attribute. Content comes from a browser or iframe when `,(0,l.jsx)(n.code,{children:`src`}),` is set and otherwise from the default slot. The `,(0,l.jsx)(n.code,{children:`error`}),` slot carries the message shown when a widget fails.`]}),`
`,(0,l.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,l.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,l.jsx)(`with-common-styles`,{children:(0,l.jsx)(`moz-widget`,{"widget-id":`weather`,size:`medium`,children:(0,l.jsxs)(`section`,{style:{padding:`16px`},children:[(0,l.jsx)(`h3`,{children:`Los Angeles`}),(0,l.jsx)(`p`,{children:`72°F and sunny`})]})})})})}),`
`,(0,l.jsx)(n.h2,{id:`code`,children:`Code`}),`
`,(0,l.jsxs)(n.p,{children:[`The source for `,(0,l.jsx)(n.code,{children:`moz-widget`}),` can be found under `,(0,l.jsx)(n.a,{href:`https://searchfox.org/firefox-main/source/browser/components/widgets/content`,rel:`nofollow`,children:`browser/components/widgets/content/`}),`.`]}),`
`,(0,l.jsxs)(n.h2,{id:`how-to-use-moz-widget`,children:[`How to use `,(0,l.jsx)(n.code,{children:`moz-widget`})]}),`
`,(0,l.jsx)(n.h3,{id:`importing-the-element`,children:`Importing the element`}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:`moz-widget`}),` is not registered by `,(0,l.jsx)(n.code,{children:`customElements.js`}),` and needs to be imported to use:`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-html`,children:`<script
  type="module"
  src="chrome://browser/content/widgets/moz-widget.mjs"
><\/script>
`})}),`
`,(0,l.jsxs)(n.h3,{id:`setting-the-size`,children:[`Setting the `,(0,l.jsx)(n.code,{children:`size`})]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:`size`}),` selects fixed dimensions based on the IAB Medium Rectangle (300x250) but the host surface can override them.
A missing or unrecognized `,(0,l.jsx)(n.code,{children:`size`}),` uses the `,(0,l.jsx)(n.code,{children:`large`}),` dimensions.
The widget sets `,(0,l.jsx)(n.code,{children:`--widget-size`}),` to `,(0,l.jsx)(n.code,{children:`small`}),`, `,(0,l.jsx)(n.code,{children:`medium`}),`, or `,(0,l.jsx)(n.code,{children:`large`}),` for its header and content to query with `,(0,l.jsx)(n.code,{children:`@container style()`}),`.`]}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:(0,l.jsx)(`code`,{children:`size`})}),(0,l.jsx)(`th`,{children:`Width`}),(0,l.jsx)(`th`,{children:`Height`}),(0,l.jsx)(`th`,{children:`Ratio`})]})}),(0,l.jsxs)(`tbody`,{children:[(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`large`})}),(0,l.jsx)(`td`,{children:`300px`}),(0,l.jsx)(`td`,{children:`250px`}),(0,l.jsx)(`td`,{children:`6:5`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`medium`})}),(0,l.jsx)(`td`,{children:`300px`}),(0,l.jsx)(`td`,{children:`125px`}),(0,l.jsx)(`td`,{children:`12:5`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`small`})}),(0,l.jsx)(`td`,{children:`150px`}),(0,l.jsx)(`td`,{children:`125px`}),(0,l.jsx)(`td`,{children:`6:5`})]})]})]}),`
`,(0,l.jsx)(n.p,{children:`If a surface overrides the sizing, it should keep the dimensions close to the IAB rectangle as New Tab does.`}),`
`,(0,l.jsxs)(n.h3,{id:`setting-the-widget-id`,children:[`Setting the `,(0,l.jsx)(n.code,{children:`widget-id`})]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:`widget-id`}),` is the registered ID of the hosted widget.`]}),`
`,(0,l.jsxs)(n.h3,{id:`setting-the-title`,children:[`Setting the `,(0,l.jsx)(n.code,{children:`title`})]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:`title`}),` provides the accessible name of the widget.`]}),`
`,(0,l.jsxs)(n.p,{children:[`Set `,(0,l.jsx)(n.code,{children:`data-l10n-id`}),` to a Fluent message with a `,(0,l.jsx)(n.code,{children:`.title`}),` attribute:`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:`widget-weather =
  .title = Weather
`})}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-html`,children:`<moz-widget widget-id="weather" data-l10n-id="widget-weather"></moz-widget>
`})}),`
`,(0,l.jsx)(n.p,{children:`Or set the attribute directly:`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-html`,children:`<moz-widget widget-id="weather" title="Weather"></moz-widget>
`})}),`
`,(0,l.jsx)(n.h3,{id:`adding-a-header`,children:`Adding a header`}),`
`,(0,l.jsxs)(n.p,{children:[`A `,(0,l.jsx)(n.code,{children:`moz-widget-header`}),` in the `,(0,l.jsx)(n.code,{children:`header`}),` slot appears above the widget content. `,(0,l.jsx)(n.code,{children:`moz-widget`}),` imports `,(0,l.jsx)(n.code,{children:`moz-widget-header`}),`.`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:`title`}),` sets the header text:`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-html`,children:`<moz-widget widget-id="weather" title="Weather">
  <moz-widget-header slot="header" title="LA Weather"></moz-widget-header>
</moz-widget>
`})}),`
`,(0,l.jsxs)(n.p,{children:[`The `,(0,l.jsx)(n.code,{children:`leading`}),` slot holds content before the heading, such as a back button or a badge.`]}),`
`,(0,l.jsxs)(n.p,{children:[`The `,(0,l.jsx)(n.code,{children:`trailing`}),` slot holds content at the end of the header.`]}),`
`,(0,l.jsxs)(n.p,{children:[`In a `,(0,l.jsx)(n.code,{children:`small`}),` widget, the header hides a `,(0,l.jsx)(n.code,{children:`moz-badge`}),` in the `,(0,l.jsx)(n.code,{children:`leading`}),` slot, and hides the `,(0,l.jsx)(n.code,{children:`trailing`}),` slot when the header shows a menu button.`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-html`,children:`<moz-widget widget-id="weather" title="Weather">
  <moz-widget-header slot="header" title="Weather">
    <moz-button
      slot="leading"
      type="ghost"
      size="small"
      iconsrc="chrome://global/skin/icons/arrow-left.svg"
      data-l10n-id="weather-back-button"
    ></moz-button>
    <moz-badge slot="leading" type="new" data-l10n-id="weather-new-badge"></moz-badge>
    <moz-button
      slot="trailing"
      size="small"
      iconsrc="chrome://global/skin/icons/arrow-down-12.svg"
      iconposition="end"
      data-l10n-id="weather-units-button"
    ></moz-button>
  </moz-widget-header>
</moz-widget>
`})}),`
`,(0,l.jsxs)(n.p,{children:[`When `,(0,l.jsx)(n.code,{children:`moz-widget`}),`'s `,(0,l.jsx)(n.code,{children:`menu`}),` slot holds a `,(0,l.jsx)(n.code,{children:`panel-list`}),`, the header shows a menu button that opens it. A `,(0,l.jsx)(n.code,{children:`panel-list`}),` without an `,(0,l.jsx)(n.code,{children:`id`}),` gets a generated one. An `,(0,l.jsx)(n.code,{children:`id`}),` set by the surface has to be unique to its document or shadow root. `,(0,l.jsx)(n.code,{children:`menu-label`}),` sets the button's accessible name, which defaults to "More options":`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-html`,children:`<moz-widget widget-id="weather" title="Weather">
  <moz-widget-header slot="header" data-l10n-id="weather-header"></moz-widget-header>
  <panel-list slot="menu" id="weather-menu">
    <panel-item data-l10n-id="weather-refresh"></panel-item>
    <hr />
    <panel-item data-l10n-id="weather-remove"></panel-item>
  </panel-list>
</moz-widget>
`})}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-ftl`,children:`weather-header =
    .title = Weather
    .menu-label = Weather options
`})}),`
`,(0,l.jsxs)(n.h3,{id:`setting-padded`,children:[`Setting `,(0,l.jsx)(n.code,{children:`padded`})]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:`padded`}),` insets the card and rounds the corners of the content.`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-html`,children:`<moz-widget widget-id="weather" title="Weather" padded>
  <moz-widget-header slot="header" title="Weather"></moz-widget-header>
</moz-widget>
`})}),`
`,(0,l.jsx)(n.h3,{id:`without-a-header`,children:`Without a header`}),`
`,(0,l.jsxs)(n.p,{children:[`Without a header, the content extends to the card's edges. `,(0,l.jsx)(n.code,{children:`moz-widget`}),` draws the menu button over the top-end corner of the content, shown while the widget is hovered or focused, or while its menu is open. `,(0,l.jsx)(n.code,{children:`menu-label`}),` on `,(0,l.jsx)(n.code,{children:`moz-widget`}),` sets the button's accessible name.`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-html`,children:`<moz-widget widget-id="weather" title="Weather" menu-label="Weather options">
  <panel-list slot="menu">
    <panel-item data-l10n-id="weather-refresh"></panel-item>
  </panel-list>
</moz-widget>
`})}),`
`,(0,l.jsxs)(n.h3,{id:`remote-content-with-src`,children:[`Remote content with `,(0,l.jsx)(n.code,{children:`src`})]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:`src`}),` uses a remote frame for the widget content instead of the slotted content.`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-html`,children:`<moz-widget
  widget-id="weather"
  title="Weather"
  src="moz-extension://UUID/widget.html"
  remote-type="extension"
  group-id="GROUP_ID"
></moz-widget>
`})}),`
`,(0,l.jsxs)(n.p,{children:[`The frame is a `,(0,l.jsx)(n.code,{children:`browser`}),` element in chrome or an `,(0,l.jsx)(n.code,{children:`iframe`}),` element in content.`]}),`
`,(0,l.jsxs)(n.p,{children:[`In a browser element, `,(0,l.jsx)(n.code,{children:`remote-type="extension"`}),` loads a `,(0,l.jsx)(n.code,{children:`moz-extension:`}),` document in the extension process, and `,(0,l.jsx)(n.code,{children:`group-id`}),` joins the extension's browsing context group, taken from `,(0,l.jsx)(n.code,{children:`WebExtensionPolicy.browsingContextGroupId`}),`.`]}),`
`,(0,l.jsx)(n.h3,{id:`reporting-an-error`,children:`Reporting an error`}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:`moz-widget`}),` watches its iframe. An iframe that fails to load puts the widget in its error state: it covers the content with the host's error content, sets the `,(0,l.jsx)(n.code,{children:`error`}),` attribute and fires `,(0,l.jsx)(n.code,{children:`widget-error`}),`. Set `,(0,l.jsx)(n.code,{children:`ready-on-load`}),` to have an iframe load fire `,(0,l.jsx)(n.code,{children:`widget-ready`}),`; it is off by default and does not affect a `,(0,l.jsx)(n.code,{children:`browser`}),` frame. Gecko fires `,(0,l.jsx)(n.code,{children:`error`}),` only where the load never starts, such as a blocked URL; a document that loads and then fails gets an error page, which counts as a successful load.`]}),`
`,(0,l.jsxs)(n.p,{children:[`A host calls `,(0,l.jsx)(n.code,{children:`reportError()`}),` to show its error content and `,(0,l.jsx)(n.code,{children:`reportReady()`}),` to uncover the content and fire `,(0,l.jsx)(n.code,{children:`widget-ready`}),` on every call. The `,(0,l.jsx)(n.code,{children:`error`}),` property reads or sets the same state; turning it on fires `,(0,l.jsx)(n.code,{children:`widget-error`}),`, and clearing it fires `,(0,l.jsx)(n.code,{children:`widget-ready`}),` unless `,(0,l.jsx)(n.code,{children:`src`}),` changes in the same update. The content is covered rather than replaced, so the document keeps running and can recover. This also works for slotted content without `,(0,l.jsx)(n.code,{children:`src`}),`.`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:`reportError(reason)`}),` passes the reason on as `,(0,l.jsx)(n.code,{children:`widget-error`}),`'s `,(0,l.jsx)(n.code,{children:`detail.reason`}),`.`]}),`
`,(0,l.jsxs)(n.p,{children:[`A host should always provide content in the `,(0,l.jsx)(n.code,{children:`error`}),` slot, since that is what covers the widget content. Without it a failing widget leaves an empty card.`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-html`,children:`<moz-widget widget-id="weather" title="Weather" src="moz-extension://UUID/widget.html">
  <div slot="error" class="my-error">Widget unavailable. Check back later.</div>
</moz-widget>
`})}),`
`,(0,l.jsxs)(n.p,{children:[`A `,(0,l.jsx)(n.code,{children:`browser`}),` frame is a top-level browsing context, so it cannot report for itself. A chrome host calls `,(0,l.jsx)(n.code,{children:`reportError()`}),` and `,(0,l.jsx)(n.code,{children:`reportReady()`}),` for it.`]})]})}function c(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=i(),o(),n()})))()}u();export{c as default};