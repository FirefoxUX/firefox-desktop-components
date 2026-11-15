import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,u as n}from"./lit.all-BYVOqvrj.js";import{t as r}from"./smartwindow-panel-list-BSsw7OMB.js";var i,a,o,s,c,l,u;function d(){return(d=e((()=>{t(),r(),i={title:`Domain-specific UI Widgets/AI Window/Smartwindow Panel List`,component:`smartwindow-panel-list`,argTypes:{groups:{control:`object`},placeholderL10nId:{control:`text`}},decorators:[],parameters:{fluent:`
smartbar-mentions-list-no-results-label = No results found
smartbar-mentions-single-tab-label = Recent Sites
smartbar-mentions-list-open-tabs-label = Tabs
smartbar-mentions-list-previously-visited-pages-label = Previously visited
    `}},a=({groups:e,placeholderL10nId:t})=>n`
  <div style="width: 300px; height: 400px; position: relative;">
    <smartwindow-panel-list
      .groups=${e}
      .placeholderL10nId=${t}
      .anchor=${{left:20,top:20,width:100,height:30}}
      .alwaysOpen=${!0}
    ></smartwindow-panel-list>
  </div>
`,o=a.bind({}),o.args={groups:[],placeholderL10nId:`smartbar-mentions-list-no-results-label`},s=a.bind({}),s.args={groups:[{headerL10nId:`smartbar-mentions-single-tab-label`,items:[{id:`current-tab`,label:`Smart window chat`,icon:`chrome://branding/content/icon16.png`},{id:`closed1`,label:`MDN Web Docs`,icon:`chrome://branding/content/icon16.png`},{id:`closed2`,label:`Wikipedia`,icon:`chrome://branding/content/icon16.png`},{id:`closed3`,label:`GitHub`,icon:`chrome://branding/content/icon16.png`}]}],placeholderL10nId:``},c=a.bind({}),c.args={groups:[{headerL10nId:`smartbar-mentions-list-open-tabs-label`,items:[{id:`tab1`,label:`Mozilla Firefox`,icon:`chrome://branding/content/icon16.png`},{id:`tab2`,label:`GitHub`,icon:`chrome://branding/content/icon16.png`},{id:`tab3`,label:`Stack Overflow`,icon:`chrome://branding/content/icon16.png`}]}],placeholderL10nId:``},l=a.bind({}),l.args={groups:[{header:`Suggestions`,items:[{id:`watch`,label:`Create a task`,description:`Watch a page for changes`}]}],placeholderL10nId:``},u=a.bind({}),u.args={groups:[{headerL10nId:`smartbar-mentions-list-open-tabs-label`,items:[{id:`tab1`,label:`Mozilla Firefox`,icon:`chrome://branding/content/icon16.png`},{id:`tab2`,label:`GitHub`,icon:`chrome://branding/content/icon16.png`},{id:`tab3`,label:`Stack Overflow`,icon:`chrome://branding/content/icon16.png`}]},{headerL10nId:`smartbar-mentions-list-previously-visited-pages-label`,items:[{id:`closed1`,label:`MDN Web Docs`,icon:`chrome://branding/content/icon16.png`},{id:`closed2`,label:`Wikipedia`,icon:`chrome://branding/content/icon16.png`}]}],placeholderL10nId:``}})))()}d();export{o as Empty,u as MultipleGroups,c as SingleGroup,l as SingleGroupWithDescription,s as SingleTab,i as default};