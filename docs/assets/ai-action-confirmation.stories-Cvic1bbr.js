import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,u as n}from"./lit.all-Co4HOUmF.js";import{t as r}from"./ai-action-confirmation-CVYrkg1o.js";var i,a,o,s,c,l,u;function d(){return(d=e((()=>{t(),r(),i={title:`Domain-specific UI Widgets/AI Window/AI Action Confirmation`,component:`ai-action-confirmation`,parameters:{fluent:`
smartwindow-nl-undo-button =
    .label = Undo
smart-window-closed-tabs-label =
    { $count ->
        [one] Closed { $count } tab
       *[other] Closed { $count } tabs
    }
smart-window-closed-and-restored-label = Closed and restored tabs
  `},argTypes:{labelL10nId:{control:`text`},labelL10nArgs:{control:`object`},canUndo:{control:`boolean`},isExpanded:{control:`boolean`},tabs:{control:`object`}}},a=Array.from({length:20},(e,t)=>({url:`https://example.com/${t+1}`,title:`Example tab ${t+1}`})),o=({labelL10nId:e,labelL10nArgs:t,canUndo:r,isExpanded:i,tabs:a})=>n`
  <div style="max-width: 320px;">
    <ai-action-confirmation
      .labelL10nId=${e}
      .labelL10nArgs=${t}
      .canUndo=${r}
      .isExpanded=${i}
      .tabs=${a}
    ></ai-action-confirmation>
  </div>
`,s=o.bind({}),s.args={labelL10nId:`smart-window-closed-tabs-label`,labelL10nArgs:{count:1},canUndo:!0,isExpanded:!1,tabs:[a[2]]},c=o.bind({}),c.args={labelL10nId:`smart-window-closed-tabs-label`,labelL10nArgs:{count:3},canUndo:!0,isExpanded:!0,tabs:a.slice(0,3)},l=o.bind({}),l.args={labelL10nId:`smart-window-closed-tabs-label`,labelL10nArgs:{count:a.length},canUndo:!0,isExpanded:!0,tabs:a},u=o.bind({}),u.args={labelL10nId:`smart-window-closed-and-restored-label`,canUndo:!1,isExpanded:!1,tabs:a.slice(0,3)}})))()}d();export{u as AfterUndo,s as Collapsed,c as Expanded,l as ExpandedOverflow,i as default};