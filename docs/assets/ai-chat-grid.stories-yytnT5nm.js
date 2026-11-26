import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,u as n}from"./lit.all-Co4HOUmF.js";import{t as r}from"./ai-chat-card-DGIS-q3g.js";import{t as i}from"./ai-chat-grid-BnbLqq-N.js";var a,o,s,c,l,u;function d(){return(d=e((()=>{t(),i(),r(),window.MozXULElement.insertFTLIfNeeded(`browser/aiWindow.ftl`),a={title:`Domain-specific UI Widgets/AI Window/AI Chat Grid`,component:`ai-chat-grid`,argTypes:{view:{control:{type:`text`}},showSwitch:{control:{type:`boolean`}}},parameters:{}},o=({showSwitch:e,view:t,items:r,gridItem:i,rowItem:a})=>n`
  <ai-chat-grid
    ?showswitch=${e}
    view=${t}
    .items=${r}
    .gridItem=${i}
    .rowItem=${a}
  ></ai-chat-grid>
`,s=[{url:`https://firefox.com`,title:`Item One`,favicon:`chrome://branding/content/about-logo.svg`,thumbnail:`chrome://browser/content/asrouter/assets/fox-with-box-on-cloud.svg`,timestamp:`Just now`},{url:`https://firefox.com`,title:`Item Two`,favicon:`chrome://branding/content/about-logo.svg`,thumbnail:`chrome://browser/content/asrouter/assets/fox-with-box-on-cloud.svg`,timestamp:`Just now`},{url:`https://firefox.com`,title:`Item Three`,favicon:`chrome://branding/content/about-logo.svg`,thumbnail:`chrome://browser/content/asrouter/assets/fox-with-box-on-cloud.svg`,timestamp:`Just now`},{url:`https://firefox.com`,title:`Item Four`,favicon:`chrome://branding/content/about-logo.svg`,thumbnail:`chrome://browser/content/asrouter/assets/fox-with-box-on-cloud.svg`,timestamp:`Just now`},{url:`https://firefox.com`,title:`Item Five`,favicon:`chrome://branding/content/about-logo.svg`,thumbnail:`chrome://browser/content/asrouter/assets/fox-with-box-on-cloud.svg`,timestamp:`Just now`},{url:`https://firefox.com`,title:`Item Six`,favicon:`chrome://branding/content/about-logo.svg`,thumbnail:`chrome://browser/content/asrouter/assets/fox-with-box-on-cloud.svg`,timestamp:`Just now`}],c=o.bind({}),c.args={showSwitch:!0,view:`grid`,gridItem:e=>n`<ai-chat-card
      title=${e.title}
      url=${e.url}
      favicon=${e.favicon}
      thumbnail=${e.thumbnail}
      timestamp=${e.timestamp}
    ></ai-chat-card>`,rowItem:e=>n`
      <style>
        .text-row {
          display: flex;
          gap: 8px;
          justify-content: center;
          align-items: center;

          .title {
            flex-grow: 1;
          }
        }
      </style>
      <div class="text-row">
        <img src=${e.favicon} width="16" height="16" />
        <span class="title">${e.title}</span>
        <span>${e.timestamp}</span>
      </div>
    `,items:s},l=o.bind({}),l.args={showSwitch:!1,view:`grid`,gridItem:e=>n`<ai-chat-card
      title=${e.title}
      url=${e.url}
      favicon=${e.favicon}
      thumbnail=${e.thumbnail}
      timestamp=${e.timestamp}
    ></ai-chat-card>`,items:s},u=o.bind({}),u.args={showSwitch:!1,view:`list`,rowItem:e=>n`
      <style>
        .text-row {
          display: flex;
          gap: 8px;
          justify-content: center;
          align-items: center;

          .title {
            flex-grow: 1;
          }
        }
      </style>
      <div class="text-row">
        <img src=${e.favicon} width="16" height="16" />
        <span class="title">${e.title}</span>
        <span>${e.timestamp}</span>
      </div>
    `,items:s}})))()}d();export{l as WithOutSwitchGrid,u as WithOutSwitchList,c as WithSwitch,a as default};