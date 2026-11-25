import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,l as n,n as r,s as i}from"./blocks-DYgZUhjJ.js";import{a}from"./chunk-W22LQPXL-H6o6iyRO.js";import{i as o,r as s}from"./react-Bg8UoiFE.js";import{t as c}from"./panel-list-BjRbkL-2.js";function l(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...o(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i,{title:`UI Widgets/Panel List/README`}),`
`,(0,d.jsx)(n.h1,{id:`panel-menu`,children:`Panel Menu`}),`
`,(0,d.jsxs)(n.p,{children:[`The `,(0,d.jsx)(n.code,{children:`panel-list`}),` and `,(0,d.jsx)(n.code,{children:`panel-item`}),` components work together to create a menu for
in-content contexts. The basic structure is a `,(0,d.jsx)(n.code,{children:`panel-list`}),` with `,(0,d.jsx)(n.code,{children:`panel-item`}),`
children and optional `,(0,d.jsx)(n.code,{children:`hr`}),` elements as separators. The `,(0,d.jsx)(n.code,{children:`panel-list`}),` will anchor
itself to the target of the initiating event when opened with
`,(0,d.jsx)(n.code,{children:`panelList.toggle(event)`}),`.`]}),`
`,(0,d.jsxs)(n.p,{children:[`Note: XUL is currently required to
support accesskey underlining (although using `,(0,d.jsx)(n.code,{children:`moz-label`}),` could change that).
Shortcuts are not displayed automatically in the `,(0,d.jsx)(n.code,{children:`panel-item`}),`.
This XUL requirement affects the "With Accesskeys" story, enabling or disabling accesskeys will not show any visual change in the story.`]}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsxs)(`panel-list`,{"stay-open":!0,open:!0,children:[(0,d.jsx)(`panel-item`,{action:`new`,accesskey:`N`,children:`New`}),(0,d.jsx)(`panel-item`,{accesskey:`O`,children:`Open`}),(0,d.jsx)(`hr`,{}),(0,d.jsx)(`panel-item`,{action:`save`,accesskey:`S`,children:`Save`}),(0,d.jsx)(`hr`,{}),(0,d.jsx)(`panel-item`,{accesskey:`Q`,children:`Quit`})]})})})}),`
`,(0,d.jsx)(n.h2,{id:`status`,children:`Status`}),`
`,(0,d.jsxs)(n.p,{children:[`Current status is listed as in-development since this is only intended for use
within in-content contexts. XUL is still required for accesskey underlining, but
could be migrated to use the `,(0,d.jsx)(n.code,{children:`moz-label`}),` component. This is a useful but
historical element that could likely use some attention at the API level and to
be brought up to our design systems standards.`]}),`
`,(0,d.jsx)(n.h2,{id:`when-to-use`,children:`When to use`}),`
`,(0,d.jsxs)(n.ul,{children:[`
`,(0,d.jsx)(n.li,{children:`When there are multiple options for something that would take too
much space with individual buttons.`}),`
`,(0,d.jsx)(n.li,{children:`When the actions are not frequently needed.`}),`
`,(0,d.jsx)(n.li,{children:`When you are within an in-content context.`}),`
`]}),`
`,(0,d.jsx)(n.h2,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,d.jsxs)(n.ul,{children:[`
`,(0,d.jsx)(n.li,{children:`When there is only one action.`}),`
`,(0,d.jsx)(n.li,{children:`When the actions are frequently needed.`}),`
`,(0,d.jsxs)(n.li,{children:[`In the browser chrome, you probably want to use
`,(0,d.jsx)(n.a,{href:`https://searchfox.org/firefox-main/source/toolkit/content/widgets/menupopup.js`,rel:`nofollow`,children:`menupopup`}),`
or
`,(0,d.jsx)(n.a,{href:`https://searchfox.org/firefox-main/source/toolkit/content/widgets/panel.js`,rel:`nofollow`,children:`panel`}),`
instead.`]}),`
`]}),`
`,(0,d.jsx)(n.h2,{id:`basic-usage`,children:`Basic usage`}),`
`,(0,d.jsxs)(n.p,{children:[`The source for `,(0,d.jsx)(n.code,{children:`panel-list`}),` can be found under
`,(0,d.jsx)(n.a,{href:`https://searchfox.org/firefox-main/source/toolkit/content/widgets/panel-list/panel-list.mjs`,rel:`nofollow`,children:`toolkit/content/widgets/panel-list/panel-list.mjs`}),`.
You can find an examples of `,(0,d.jsx)(n.code,{children:`panel-list`}),` in use in the Firefox codebase in both
`,(0,d.jsx)(n.a,{href:`https://searchfox.org/mozilla-central/rev/6f4bc07bd9eb07ed34774841ecf3b1f3678791e8/toolkit/mozapps/extensions/content/aboutaddons.html#209,252,280`,rel:`nofollow`,children:`about:addons`}),`
and the
`,(0,d.jsx)(n.a,{href:`https://searchfox.org/mozilla-central/rev/6f4bc07bd9eb07ed34774841ecf3b1f3678791e8/browser/components/migration/content/migration-wizard.mjs#443`,rel:`nofollow`,children:`migration-wizard`}),`.`]}),`
`,(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:`panel-list`}),` will automatically be imported in chrome documents, both through
markup and through JS with `,(0,d.jsx)(n.code,{children:`document.createElement("panel-list")`}),` or by cloning
a template.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<!-- This will import \`panel-list\` if needed in most cases. -->
<panel-list></panel-list>
`})}),`
`,(0,d.jsxs)(n.p,{children:[`In non-chrome documents it can be imported into `,(0,d.jsx)(n.code,{children:`.html`}),`/`,(0,d.jsx)(n.code,{children:`.xhtml`}),` files:`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<script
  src="chrome://global/content/elements/panel-list.mjs"
  type="module"
><\/script>
`})}),`
`,(0,d.jsx)(n.p,{children:`And used as follows:`}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<panel-list>
  <panel-item accesskey="N">New</panel-item>
  <panel-item accesskey="O">Open</panel-item>
  <hr />
  <panel-item accesskey="S">Save</panel-item>
  <hr />
  <panel-item accesskey="Q">Quit</panel-item>
</panel-list>
`})}),`
`,(0,d.jsxs)(n.p,{children:[`The `,(0,d.jsx)(n.code,{children:`toggle`}),` method takes the event you received on your anchor button and opens
the menu attached to that element. The anchor button also needs to be
registered as the menu's popover invoker, see
`,(0,d.jsx)(n.a,{href:`#showing-the-menu`,children:`Showing the menu`}),` for the full setup.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-js`,children:`anchorButton.popoverTargetElement = panelList;
anchorButton.addEventListener("mousedown", e => panelList.toggle(e));
anchorButton.addEventListener("click", e => e.preventDefault());
`})}),`
`,(0,d.jsxs)(n.p,{children:[`Accesskeys are activated with the bare accesskey letter when the menu is opened.
So for this example after opening the menu pressing `,(0,d.jsx)(n.code,{children:`s`}),` will fire a click event
on the Save `,(0,d.jsx)(n.code,{children:`panel-item`}),`.`]}),`
`,(0,d.jsxs)(n.p,{children:[`Note: XUL is currently required for accesskey underlining, but can be `,(0,d.jsxs)(n.a,{href:`https://bugzilla.mozilla.org/show_bug.cgi?id=1828741`,rel:`nofollow`,children:[`replaced
with `,(0,d.jsx)(n.code,{children:`moz-label`})]}),` later.`]}),`
`,(0,d.jsx)(n.h3,{id:`fluent-usage`,children:`Fluent usage`}),`
`,(0,d.jsxs)(n.p,{children:[`The `,(0,d.jsx)(n.code,{children:`panel-item`}),` expects to have text content set by fluent.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<panel-list>
  <panel-item data-l10n-id="menu-new"></panel-item>
  <panel-item data-l10n-id="menu-save"></panel-item>
</panel-list>
`})}),`
`,(0,d.jsx)(n.p,{children:`In which case your Fluent messages will look something like this:`}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:`menu-new = New
    .accesskey = N
menu-save = Save
    .accesskey = S
`})}),`
`,(0,d.jsx)(n.h2,{id:`advanced-usage`,children:`Advanced usage`}),`
`,(0,d.jsx)(n.h3,{id:`showing-the-menu`,children:`Showing the menu`}),`
`,(0,d.jsxs)(n.p,{children:[`By default the menu will be hidden. It is shown when the `,(0,d.jsx)(n.code,{children:`open`}),` attribute is
set, but that won't position the menu by default.`]}),`
`,(0,d.jsxs)(n.p,{children:[`To trigger the auto-positioning of the menu, it should be opened or closed using
the `,(0,d.jsx)(n.code,{children:`toggle(event)`}),` method.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-js`,children:`function onMenuButton(event) {
  document.querySelector("panel-list").toggle(event);
}
`})}),`
`,(0,d.jsxs)(n.p,{children:[`The `,(0,d.jsx)(n.code,{children:`toggle(event)`}),` method will use `,(0,d.jsx)(n.code,{children:`event.target`}),` as the anchor for the menu.`]}),`
`,(0,d.jsxs)(n.p,{children:[`To achieve the expected behaviour, the menu should open on `,(0,d.jsx)(n.code,{children:`mousedown`}),` for mouse
events, and `,(0,d.jsx)(n.code,{children:`click`}),` for keyboard events. This can be accomplished by checking
the `,(0,d.jsx)(n.code,{children:`event.inputSource`}),` property in chrome contexts or `,(0,d.jsx)(n.code,{children:`event.detail`}),` in
non-chrome contexts (`,(0,d.jsx)(n.code,{children:`event.detail`}),` will be the click count which is `,(0,d.jsx)(n.code,{children:`0`}),` when a
click is from the keyboard).`]}),`
`,(0,d.jsxs)(n.p,{children:[`Since the menu uses `,(0,d.jsx)(n.code,{children:`popover="auto"`}),`, its anchor must be registered as an
invoker via `,(0,d.jsx)(n.code,{children:`popoverTargetElement`}),`, otherwise the mouse release after the
`,(0,d.jsx)(n.code,{children:`mousedown`}),` that opened the menu light-dismisses it. Call `,(0,d.jsx)(n.code,{children:`preventDefault()`}),` on
`,(0,d.jsx)(n.code,{children:`click`}),` so `,(0,d.jsx)(n.code,{children:`panel-list`}),` handles toggling.`]}),`
`,(0,d.jsxs)(n.p,{children:[`The invoker must be a `,(0,d.jsx)(n.code,{children:`<button>`}),` or `,(0,d.jsx)(n.code,{children:`<input type="button">`}),`.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-js`,children:`let panelList = document.querySelector("panel-list");

function openMenu(event) {
  if (event.type == "click") {
    event.preventDefault();
  }
  if (
    event.type == "mousedown" ||
    event.inputSource == MouseEvent.MOZ_SOURCE_KEYBOARD ||
    !event.detail
  ) {
    panelList.toggle(event);
  }
}

let menuButton = document.getElementById("open-menu-button");
menuButton.popoverTargetElement = panelList;
menuButton.addEventListener("mousedown", openMenu);
menuButton.addEventListener("click", openMenu);
`})}),`
`,(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:`moz-button`}),` handles all of this when its `,(0,d.jsx)(n.code,{children:`menuId`}),` is set to the `,(0,d.jsx)(n.code,{children:`id`}),` of the
`,(0,d.jsx)(n.code,{children:`panel-list`}),`.`]}),`
`,(0,d.jsx)(n.h3,{id:`checkbox`,children:`Checkbox`}),`
`,(0,d.jsxs)(n.p,{children:[`Items may be used as a checkbox by setting the `,(0,d.jsx)(n.code,{children:`type`}),` attribute.
This allows checkmark icon to be automatically rendered and removed via the item's `,(0,d.jsx)(n.code,{children:`checked`}),` attribute.
Note: this item does not have its own click handler for adding or removing the checkmark, you must handle that.`]}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsxs)(`panel-list`,{"stay-open":!0,open:!0,children:[(0,d.jsx)(`panel-item`,{action:`toggle-setting`,type:`checkbox`,checked:``,children:`Toggle Setting`}),(0,d.jsx)(`panel-item`,{action:`toggle-panel`,type:`checkbox`,children:`Toggle Panel`})]})})})}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<panel-list>
  <panel-item action="toggle-setting" type="checkbox" checked="">Toggle Setting</panel-item>
  <panel-item action="toggle-panel" type="checkbox">Toggle Panel</panel-item>
</panel-list>
`})}),`
`,(0,d.jsx)(n.h3,{id:`icons`,children:`Icons`}),`
`,(0,d.jsxs)(n.p,{children:[`Icons can be added to the `,(0,d.jsx)(n.code,{children:`panel-item`}),`s by setting a `,(0,d.jsx)(n.code,{children:`background-image`}),` on
`,(0,d.jsx)(n.code,{children:`panel-item::part(button)`}),`.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-css`,children:`panel-item[action="new"]::part(button) {
  background-image: url("./new.svg");
}

panel-item[action="save"]::part(button) {
  background-image: url("./save.svg");
}
`})}),`
`,(0,d.jsxs)(n.p,{children:[`Items reserve space for an icon by default. Set the `,(0,d.jsx)(n.code,{children:`no-icon`}),` attribute on items
that don't have an icon to remove that space.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<panel-list>
  <panel-item no-icon>New</panel-item>
  <panel-item no-icon>Save</panel-item>
</panel-list>
`})}),`
`,(0,d.jsx)(n.h3,{id:`badging`,children:`Badging`}),`
`,(0,d.jsxs)(n.p,{children:[`There are two types of badging. Icons may be badged by setting the `,(0,d.jsx)(n.code,{children:`badged`}),`
attribute. This adds a dot next to the icon.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<panel-list>
  <panel-item action="new">New</panel-item>
  <panel-item action="save" badged>Save</panel-item>
</panel-list>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsxs)(`panel-list`,{"stay-open":!0,open:!0,children:[(0,d.jsx)(`panel-item`,{action:`new`,children:`New`}),(0,d.jsx)(`panel-item`,{action:`save`,badged:!0,children:`Save`})]})})})}),`
`,(0,d.jsxs)(n.p,{children:[`A `,(0,d.jsx)(n.code,{children:`moz-badge`}),` element can be added next to the label by setting the `,(0,d.jsx)(n.code,{children:`badge-type`}),`
attribute.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<panel-list>
  <panel-item action="new">New</panel-item>
  <panel-item action="save" badge-type="new">Save</panel-item>
  <panel-item action="delete" badge-type="beta">Delete</panel-item>
</panel-list>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsxs)(`panel-list`,{"stay-open":!0,open:!0,children:[(0,d.jsx)(`panel-item`,{action:`new`,children:`New`}),(0,d.jsx)(`panel-item`,{action:`save`,"badge-type":`new`,children:`Save`}),(0,d.jsx)(`panel-item`,{action:`delete`,"badge-type":`beta`,children:`Delete`})]})})})}),`
`,(0,d.jsx)(n.h3,{id:`keyboard-shortcuts`,children:`Keyboard shortcuts`}),`
`,(0,d.jsxs)(n.p,{children:[`Setting the `,(0,d.jsx)(n.code,{children:`shortcut`}),` attribute shows a keyboard shortcut after the label. The
shortcut text is part of the item's accessible name.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<panel-list>
  <panel-item shortcut="Ctrl+N">New</panel-item>
  <panel-item shortcut="Ctrl+S">Save</panel-item>
</panel-list>
`})}),`
`,(0,d.jsx)(t,{style:{border:`1px solid var(--border-color)`,borderRadius:`var(--border-radius-small)`,background:`var(--background-color-canvas)`,boxShadow:`var(--box-shadow-level-1)`,overflow:`auto`,marginBlock:`var(--space-xlarge) calc(var(--space-xlarge) + var(--space-large))`},children:(0,d.jsx)(`div`,{className:`docs-story`,style:{padding:`var(--space-xxlarge)`},children:(0,d.jsx)(`with-common-styles`,{children:(0,d.jsxs)(`panel-list`,{"stay-open":!0,open:!0,children:[(0,d.jsx)(`panel-item`,{shortcut:`Ctrl+N`,children:`New`}),(0,d.jsx)(`panel-item`,{shortcut:`Ctrl+S`,children:`Save`})]})})})}),`
`,(0,d.jsx)(n.h3,{id:`matching-anchor-width`,children:`Matching anchor width`}),`
`,(0,d.jsxs)(n.p,{children:[`When using the `,(0,d.jsx)(n.code,{children:`panel-list`}),` like a `,(0,d.jsx)(n.code,{children:`select`}),` dropdown, it's nice to have it match
the size of the anchor button. You can see this in practice in the
`,(0,d.jsx)(n.a,{href:`?path=/story/ui-widgets-panel-list--wide`,children:`Wide variant`}),` and the
`,(0,d.jsx)(n.code,{children:`migration-wizard`}),`. Setting the `,(0,d.jsx)(n.code,{children:`min-width-from-anchor`}),` attribute will cause the
menu to match its anchor's width when it is opened.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<button class="current-selection">Apples</button>
<panel-list min-width-from-anchor>
  <panel-item>Apples</panel-list>
  <panel-item>Bananas</panel-list>
</panel-list>
`})}),`
`,(0,d.jsx)(n.h3,{id:`suppressing-the-context-menu`,children:`Suppressing the context menu`}),`
`,(0,d.jsxs)(n.p,{children:[`Setting the `,(0,d.jsx)(n.code,{children:`suppress-contextmenu`}),` attribute prevents a contextmenu from being
triggered on the items within a panel-list.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<panel-list suppress-contextmenu>
  <panel-item>Open in a new tab</panel-item>
  <panel-item>Open in a new window</panel-item>
</panel-list>
`})}),`
`,(0,d.jsxs)(n.h3,{id:`usage-in-a-xul-panel`,children:[`Usage in a XUL `,(0,d.jsx)(n.code,{children:`panel`})]}),`
`,(0,d.jsxs)(n.p,{children:[`The "new" (as of early 2023) migration wizard uses the `,(0,d.jsx)(n.code,{children:`panel-list`}),` inside of a
XUL `,(0,d.jsx)(n.code,{children:`panel`}),` element to let its contents escape its container dialog by creating
an OS-level window. This can be useful if the menu could be larger than its
container, however in chrome contexts you are likely better off using
`,(0,d.jsx)(n.code,{children:`menupopup`}),`.`]}),`
`,(0,d.jsxs)(n.p,{children:[`By placing a `,(0,d.jsx)(n.code,{children:`panel-list`}),` inside of a XUL `,(0,d.jsx)(n.code,{children:`panel`}),` it will automatically defer
its positioning responsibilities to the XUL `,(0,d.jsx)(n.code,{children:`panel`}),` and it will then be able to
grow larger than its containing window if needed.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<!-- Assuming we're in a XUL document. -->
<panel>
  <html:panel-list>
    <html:panel-item>Apples</html:panel-item>
    <html:panel-item>Apples</html:panel-item>
    <html:panel-item>Apples</html:panel-item>
  </html:panel-list>
</panel>
`})}),`
`,(0,d.jsx)(n.h3,{id:`submenus`,children:`Submenus`}),`
`,(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:`panel-list`}),` supports nested submenus. Submenus can be created by nesting a second `,(0,d.jsx)(n.code,{children:`panel-list`}),` in a `,(0,d.jsx)(n.code,{children:`panel-item`}),`'s `,(0,d.jsx)(n.code,{children:`submenu`}),` slot and specifying a `,(0,d.jsx)(n.code,{children:`submenu`}),` attribute on that `,(0,d.jsx)(n.code,{children:`panel-item`}),` that points to the nested list's ID. For example:`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<panel-list>
  <panel-item>No submenu</panel-item>
  <panel-item>No submenu</panel-item>
  <panel-item submenu="example-submenu">
    Has a submenu
    <panel-list slot="submenu" id="example-submenu">
      <panel-item>I'm a submenu item!</panel-item>
      <panel-item>I'm also a submenu item!</panel-item>
    </panel-list>
  </panel-item>
</panel-list>
`})}),`
`,(0,d.jsx)(n.p,{children:`As of February 2024 submenus are only in use in Firefox View and support for nesting beyond one submenu may be limited.`}),`
`,(0,d.jsx)(n.h2,{id:`args-table`,children:`Args Table`}),`
`,(0,d.jsx)(r,{of:`panel-list`})]})}function u(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=a(),s(),n(),c()})))()}f();export{u as default};