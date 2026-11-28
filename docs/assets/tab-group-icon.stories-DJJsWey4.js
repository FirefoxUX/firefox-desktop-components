import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,u as n}from"./lit.all-Co4HOUmF.js";import{t as r}from"./tab-group-icon-D-0r6MUI.js";import{n as i,t as a}from"./tab.tokens-CkTvXAZ-.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{a(),t(),r(),o={title:`Domain-specific UI Widgets/AI Window/Tab Group Icon`,component:`tab-group-icon`,argTypes:{label:{control:`text`},color:{control:`select`,options:[`blue`,`cyan`,`gray`,`green`,`orange`,`pink`,`purple`,`red`,`yellow`]}}},s=n`<link
  rel="stylesheet"
  href="${i}"
/>`,c=({label:e,color:t})=>n`
  ${s}
  <tab-group-icon .label=${e} .color=${t}></tab-group-icon>
`,l=c.bind({}),l.args={label:`Trip planning`,color:`blue`},u=()=>n`
  ${s}
  <div style="display: flex; flex-wrap: wrap; gap: 8px;">
    ${[`blue`,`cyan`,`gray`,`green`,`orange`,`pink`,`purple`,`red`,`yellow`].map(e=>n`<tab-group-icon .label=${e} .color=${e}></tab-group-icon>`)}
  </div>
`,d=()=>n`
  ${s}
  <tab-group-icon
    style="--tab-group-icon-size: 32px; --tab-group-icon-font-size: 20px;"
    label="Trip planning"
    color="purple"
  ></tab-group-icon>
`})))()}f();export{u as AllColors,l as Default,d as Sized,o as default};