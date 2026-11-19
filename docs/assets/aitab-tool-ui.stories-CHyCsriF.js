import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,u as n}from"./lit.all-Co4HOUmF.js";import{i as r,n as i,r as a,t as o}from"./aitab-tool-ui-eY-iOn6U.js";var s,c,l,u,d;function f(){return(f=e((()=>{t(),r(),s={title:`Domain-specific UI Widgets/AI Window/AI Tab Tool UI`,component:`aitab-tool-ui`,argTypes:{state:{control:`select`,options:o},title:{control:`text`},viewerURL:{control:`text`},completeStateOpen:{control:`boolean`}},parameters:{actions:{handles:[`aitab-open-request`]},fluent:`
smartwindow-aitab-open-current =
    .label = Open here
smartwindow-aitab-open-new =
    .label = Open in new tab
smartwindow-aitab-created-an-aitab = Created a Smart Page
    `}},c=({state:e,title:t,viewerURL:r,completeStateOpen:i})=>n`
  <div style="max-width: 360px;">
    <aitab-tool-ui
      .state=${e}
      .title=${t}
      .viewerURL=${r}
      .completeStateOpen=${i}
    ></aitab-tool-ui>
  </div>
`,l=c.bind({}),l.args={state:i,title:`Weekend trip to Portland`,viewerURL:`about:smartpage`,completeStateOpen:!0},u=c.bind({}),u.args={...l.args,state:a},d=c.bind({}),d.args={...u.args,completeStateOpen:!1}})))()}f();export{l as Choose,d as CompleteCollapsed,u as CompleteExpanded,s as default};