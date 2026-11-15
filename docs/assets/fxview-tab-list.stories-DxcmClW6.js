import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{l as t,s as n}from"./blocks-DYgZUhjJ.js";import{a as r}from"./chunk-W22LQPXL-H6o6iyRO.js";import{i,r as a}from"./react-Bg8UoiFE.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Domain-specific UI Widgets/Firefox View/Tab List/README`}),`
`,(0,c.jsx)(t.h1,{id:`fxviewtablist`,children:`FxviewTabList`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`fxview-tab-list`}),` is a list of `,(0,c.jsx)(t.code,{children:`fxview-tab-row`}),` elements that display tab info such as:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`A link containing:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Favicon`}),`
`,(0,c.jsx)(t.li,{children:`Title`}),`
`,(0,c.jsx)(t.li,{children:`Domain`}),`
`,(0,c.jsxs)(t.li,{children:[`Time when tab was last accessed (can be formatted as `,(0,c.jsx)(t.code,{children:`relative`}),`, `,(0,c.jsx)(t.code,{children:`date and time`}),`, `,(0,c.jsx)(t.code,{children:`date only`}),`, and `,(0,c.jsx)(t.code,{children:`time only`}),`)`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.li,{children:`Secondary action button`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Use `,(0,c.jsx)(t.code,{children:`fxview-tab-list`}),` anywhere you want to display a list of tabs with the above info displayed.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`code`,children:`Code`}),`
`,(0,c.jsxs)(t.p,{children:[`The source for `,(0,c.jsx)(t.code,{children:`fxview-tab-list`}),` can be found under
`,(0,c.jsx)(t.a,{href:`https://searchfox.org/firefox-main/source/browser/components/firefoxview/fxview-tab-list.mjs`,rel:`nofollow`,children:`browser/components/firefoxview/fxview-tab-list`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`fxview-tab-list`}),` can be imported into `,(0,c.jsx)(t.code,{children:`.html`}),`/`,(0,c.jsx)(t.code,{children:`.xhtml`}),` files:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<script type="module" src="chrome://content/browser/firefoxview/fxview-tab-list.mjs"><\/script>
`})}),`
`,(0,c.jsx)(t.p,{children:`And used as follows:`}),`
`,(0,c.jsx)(t.p,{children:`With context menu:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<fxview-tab-list
    secondaryActionClass="options-button"
    .dateTimeFormat=\${"relative"}
    .hasPopup=\${"menu"}
    .maxTabsLength=\${this.maxTabsLength}
    .tabItems=\${this.tabItems}
    @fxview-tab-list-secondary-action=\${this.onSecondaryAction}
    @fxview-tab-list-primary-action=\${this.onPrimaryAction}
>
    <panel-list slot="menu" @hide=\${this.menuClosed}>
        <panel-item
        @click=\${...}
        data-l10n-id="fxviewtabrow-delete"
        ></panel-item>
        <panel-item
        @click=\${...}
        data-l10n-id="fxviewtabrow-forget-about-this-site"
        ></panel-item>
        ...
    </panel-list>
</fxview-tab-list>
`})}),`
`,(0,c.jsx)(t.p,{children:`With dismiss button:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<fxview-tab-list
    class="with-dismiss-button"
    .dateTimeFormat=\${"relative"}
    .maxTabsLength=\${this.maxTabsLength}
    .tabItems=\${this.tabItems}
    @fxview-tab-list-secondary-action=\${this.onSecondaryAction}
    @fxview-tab-list-primary-action=\${this.onPrimaryAction}
></fxview-tab-list>
`})}),`
`,(0,c.jsx)(t.h3,{id:`properties`,children:`Properties`}),`
`,(0,c.jsx)(t.p,{children:`You'll need to pass along some of the following properties:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`compactRows`}),` (`,(0,c.jsx)(t.strong,{children:`Optional`}),`): If `,(0,c.jsx)(t.code,{children:`true`}),`, displays shorter rows by omitting the URL and date/time. The default value is `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dateTimeFormat`}),` (`,(0,c.jsx)(t.strong,{children:`Optional`}),`): A string to indicate the expected format/options for the date and/or time displayed on each tab item in the list. The default for this if not given is `,(0,c.jsx)(t.code,{children:`"relative"`}),`.`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Options include:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`relative`}),` (Ex: "Just now", "2m ago", etc.)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`date`}),` (Ex: "4/1/23", "01/04/23", etc. - Will be formatted based on locale)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`time`}),` (Ex: "4:00 PM", "16:00", etc - Will be formatted based on locale)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dateTime`}),` (Ex: "4/1/23 4:00PM", "01/04/23 16:00", etc. - Will be formatted based on locale)`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`hasPopup`}),` (`,(0,c.jsx)(t.strong,{children:`Optional`}),`): The optional aria-haspopup attribute for the secondary action, if required`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`maxTabsLength`}),` (`,(0,c.jsx)(t.strong,{children:`Optional`}),`): The max number of tabs you want to display in the tabs list. The default value will be `,(0,c.jsx)(t.code,{children:`25`}),` if no max value is given. You may use any negative number such as `,(0,c.jsx)(t.code,{children:`-1`}),` to indicate no max.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`tabItems`}),` (`,(0,c.jsx)(t.strong,{children:`Required`}),`): An array of tab data such as History nodes, Bookmark nodes, Synced Tabs, etc.`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`The component is expecting to receive the following properties within each `,(0,c.jsx)(t.code,{children:`tabItems`}),` object (you may need to do some normalizing for this). If you just pass a title and an icon, it creates a header row that is not clickable.`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`closedId`}),` (`,(0,c.jsx)(t.strong,{children:`Optional`}),`) - For a closed tab, this ID is used by SessionStore to retrieve the tab data for forgetting/re-opening the tab.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`icon`}),` (`,(0,c.jsx)(t.strong,{children:`Required`}),`) - The location string for the favicon. Will fallback to default favicon if none is found.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`primaryL10nId`}),` (`,(0,c.jsx)(t.strong,{children:`Optional`}),`) - The l10n id to be used for the primary action element. This fluent string should ONLY define a `,(0,c.jsx)(t.code,{children:`.title`}),` attribute to describe the link element in each row.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`primaryL10nArgs`}),` (`,(0,c.jsx)(t.strong,{children:`Optional`}),`) - The l10n args you can optionally pass for the primary action element`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`secondaryL10nId`}),` (`,(0,c.jsx)(t.strong,{children:`Optional`}),`) -  The l10n id to be used for the secondary action button. This fluent string should ONLY define a `,(0,c.jsx)(t.code,{children:`.title`}),` attribute to describe the secondary button in each row.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`tertiaryL10nId`}),` (`,(0,c.jsx)(t.strong,{children:`Optional`}),`) -  The l10n id to be used for the tertiary action button. This fluent string should ONLY define a `,(0,c.jsx)(t.code,{children:`.title`}),` attribute to describe the secondary button in each row.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`secondaryL10nArgs`}),` (`,(0,c.jsx)(t.strong,{children:`Optional`}),`) - The l10n args you can optionally pass for the secondary action button`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`tertiaryL10nArgs`}),` (`,(0,c.jsx)(t.strong,{children:`Optional`}),`) - The l10n args you can optionally pass for the tertiary action button`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`secondaryActionClass`}),` (`,(0,c.jsx)(t.strong,{children:`Optional`}),`) - The class used to style the secondary action button. `,(0,c.jsx)(t.code,{children:`options-button`}),` or `,(0,c.jsx)(t.code,{children:`dismiss-button`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`tertiaryActionClass`}),` (`,(0,c.jsx)(t.strong,{children:`Optional`}),`) - The class used to style the tertiary action button. `,(0,c.jsx)(t.code,{children:`options-button`}),` or `,(0,c.jsx)(t.code,{children:`dismiss-button`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`tabElement`}),` (`,(0,c.jsx)(t.strong,{children:`Optional`}),`) - The MozTabbrowserTab element for the tab item.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`sourceClosedId`}),` (`,(0,c.jsx)(t.strong,{children:`Optional`}),`) - The closedId of the closed window the tab is from if applicable.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`sourceWindowId`}),` (`,(0,c.jsx)(t.strong,{children:`Optional`}),`) - The SessionStore id of the window the tab is from if applicable.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`tabid`}),` (`,(0,c.jsx)(t.strong,{children:`Optional`}),`) - Optional property expected for Recently Closed tab data`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`time`}),` (`,(0,c.jsx)(t.strong,{children:`Optional`}),`) - The time in milliseconds for expected last interaction with the tab (Ex: `,(0,c.jsx)(t.code,{children:`lastUsed`}),` for SyncedTabs tabs, `,(0,c.jsx)(t.code,{children:`closedAt`}),` for RecentlyClosed tabs, etc.)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`title`}),` (`,(0,c.jsx)(t.strong,{children:`Required`}),`) - The title for the tab`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`url`}),` (`,(0,c.jsx)(t.strong,{children:`Optional`}),`) - The full URL for the tab`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`searchQuery`}),` (`,(0,c.jsx)(t.strong,{children:`Optional`}),`) - Highlights matches of the query string for titles of each row.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`notes`,children:`Notes`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`In order to keep this as generic as possible, the icon for the secondary action button will NOT have a default. You can supply a `,(0,c.jsx)(t.code,{children:`class`}),` attribute to an instance of `,(0,c.jsx)(t.code,{children:`fxview-tab-list`}),` in order to apply styles to things like the icon for the secondary action button. In the above example, I added a `,(0,c.jsx)(t.code,{children:`secondaryActionClass`}),` `,(0,c.jsx)(t.code,{children:`"options-button"`}),` to `,(0,c.jsx)(t.code,{children:`fxview-tab-list`}),`, so I can update the button's icon by using:`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-css`,children:`    .fxview-tab-row-button {
        &.options-button {
            background-image: url("chrome://global/skin/icons/more.svg");
        }
    }
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`You'll also need to define functions for the `,(0,c.jsx)(t.code,{children:`fxview-tab-list-primary-action`}),` and `,(0,c.jsx)(t.code,{children:`fxview-tab-list-secondary-action`}),` listeners in order to add functionality to the primary element and the secondary button.`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`For the both handler functions, you can reference the `,(0,c.jsx)(t.code,{children:`fxview-tab-row`}),` associated with the interaction by using `,(0,c.jsx)(t.code,{children:`event.originalTarget`}),`. You can also reference the original event by using `,(0,c.jsx)(t.code,{children:`event.detail.originalEvent`}),`.`]}),`
`]}),`
`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),a(),t()})))()}l();export{s as default};