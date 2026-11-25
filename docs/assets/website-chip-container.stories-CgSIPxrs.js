import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,u as n}from"./lit.all-Co4HOUmF.js";import{t as r}from"./website-chip-container-DFd5Hfdk.js";var i,a,o,s,c,l;function u(){return(u=e((()=>{t(),r(),i={title:`Domain-specific UI Widgets/AI Window/Website Chip Container`,component:`website-chip-container`,parameters:{fluent:`
smartwindow-assistant-citations-more-label = +{ $count } more
    `},decorators:[(e,t)=>t.parameters.frame===!1?e():n`
            <div
              style="
                display: inline-block;
                ${t.parameters.frameWidth?`width: ${t.parameters.frameWidth};`:``}
                padding: 16px;
                box-sizing: border-box;
                border: 1px dashed #ccc;
              "
            >
              ${e()}
            </div>
          `]},a=e=>Array.from({length:e},(e,t)=>({url:`https://example.com/${t+1}`,label:`Example Site ${t+1}`,iconSrc:`chrome://branding/content/icon16.png`})),o=()=>n`
  <website-chip-container
    .websites=${a(3)}
    .removable=${!0}
  ></website-chip-container>
`,s=()=>n`
  <div
    style="
      resize: horizontal;
      overflow: auto;
      inline-size: 500px;
      min-inline-size: 160px;
      max-inline-size: 100%;
      padding: 16px;
      box-sizing: border-box;
      border: 1px dashed #ccc;
    "
  >
    <website-chip-container
      .websites=${a(6)}
      .autoOverflow=${!0}
    ></website-chip-container>
  </div>
`,s.parameters={frame:!1},c=()=>n`
  <website-chip-container
    .websites=${a(2)}
    .autoOverflow=${!0}
  ></website-chip-container>
`,l=()=>n`
  <website-chip-container
    .websites=${a(6)}
    .shouldGroupChips=${!0}
  ></website-chip-container>
`})))()}u();export{s as AutoWidthOverflow,l as CountBasedGrouping,o as Default,c as NoOverflow,i as default};