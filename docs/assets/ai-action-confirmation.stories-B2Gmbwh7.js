import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,u as n}from"./lit.all-Co4HOUmF.js";import{t as r}from"./ai-action-confirmation-tab-row-ClfNmjZq.js";import{t as i}from"./ai-action-confirmation-eHCNscKD.js";var a,o,s,c,l,u,d;function f(){return(f=e((()=>{t(),i(),r(),a={title:`Domain-specific UI Widgets/AI Window/AI Action Confirmation`,component:`ai-action-confirmation`,parameters:{fluent:`
smartwindow-nl-undo-button =
    .label = Undo
smart-window-closed-tabs-label =
    { $count ->
        [one] Closed { $count } tab
       *[other] Closed { $count } tabs
    }
smart-window-closed-and-restored-label = Closed and restored tabs
  `},argTypes:{labelL10nId:{control:`text`},labelL10nArgs:{control:`object`},canUndo:{control:`boolean`},isExpanded:{control:`boolean`},items:{control:`object`}}},o=Array.from({length:20},(e,t)=>({url:`https://example.com/${t+1}`,title:`Example tab ${t+1}`})),s=({labelL10nId:e,labelL10nArgs:t,canUndo:r,isExpanded:i,items:a})=>n`
  <div
    style="max-width: 320px;
           --ai-action-confirmation-icon-image: url('chrome://browser/skin/closed-tabs.svg');"
  >
    <ai-action-confirmation
      .labelL10nId=${e}
      .labelL10nArgs=${t}
      .canUndo=${r}
      .isExpanded=${i}
      .items=${a}
      .rowTemplate=${e=>n`<ai-action-confirmation-tab-row
          .tab=${e}
        ></ai-action-confirmation-tab-row>`}
    ></ai-action-confirmation>
  </div>
`,c=s.bind({}),c.args={labelL10nId:`smart-window-closed-tabs-label`,labelL10nArgs:{count:1},canUndo:!0,isExpanded:!1,items:[o[2]]},l=s.bind({}),l.args={labelL10nId:`smart-window-closed-tabs-label`,labelL10nArgs:{count:3},canUndo:!0,isExpanded:!0,items:o.slice(0,3)},u=s.bind({}),u.args={labelL10nId:`smart-window-closed-tabs-label`,labelL10nArgs:{count:o.length},canUndo:!0,isExpanded:!0,items:o},d=s.bind({}),d.args={labelL10nId:`smart-window-closed-and-restored-label`,canUndo:!1,isExpanded:!1,items:o.slice(0,3)}})))()}f();export{d as AfterUndo,c as Collapsed,l as Expanded,u as ExpandedOverflow,a as default};