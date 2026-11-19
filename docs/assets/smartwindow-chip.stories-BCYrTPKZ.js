import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,u as n}from"./lit.all-Co4HOUmF.js";import{t as r}from"./smartwindow-chip-8GqxZUv3.js";import{n as i,t as a}from"./_firefox-storybook_moz-css-url_f4a5d8e0e50b93008bd0878d041e101172bcf44c3b58cc7f72ca328c515927ad-R_x-cnhG.js";var o,s,c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{i(),t(),r(),o={title:`Domain-specific UI Widgets/AI Window/Smart Window Chip`,component:`smartwindow-chip`,argTypes:{type:{control:`select`,options:[`in-line`,`context`,`source`]},label:{control:`text`},iconSrc:{control:`text`},href:{control:`text`},isTabGroup:{control:`boolean`},tabGroupColor:{control:`select`,options:[``,`blue`,`cyan`,`gray`,`green`,`orange`,`pink`,`purple`,`red`,`yellow`]},removable:{control:`boolean`}},parameters:{fluent:`
aiwindow-website-chip-placeholder = Tag a tab or site
aiwindow-website-chip-remove-button =
  .aria-label = Remove
    `}},s=n`<link
  rel="stylesheet"
  href="${a}"
/>`,c=({type:e,label:t,iconSrc:r,href:i,isTabGroup:a,tabGroupColor:o,removable:c})=>n`
  ${a?s:``}
  <smartwindow-chip
    .type=${e}
    .label=${t}
    .iconSrc=${r}
    .href=${i||``}
    .isTabGroup=${a??!1}
    .tabGroupColor=${o||``}
    .removable=${c??!1}
  ></smartwindow-chip>
`,l=c.bind({}),l.args={type:`in-line`,label:`mozilla.org`,iconSrc:`chrome://branding/content/about-logo.svg`},u=c.bind({}),u.args={type:`in-line`,label:``,iconSrc:``},d=()=>n`
  <div style="display: flex; flex-wrap: wrap; gap: 8px;">
    <smartwindow-chip
      type="in-line"
      label="mozilla.org"
      iconSrc="chrome://branding/content/icon16.png"
    ></smartwindow-chip>
    <smartwindow-chip type="in-line" label=""></smartwindow-chip>
  </div>
`,f=c.bind({}),f.args={type:`context`,label:`example.com`,iconSrc:`chrome://branding/content/icon16.png`,removable:!0},p=c.bind({}),p.args={type:`context`,label:`example.com`,iconSrc:`chrome://branding/content/icon16.png`,removable:!1},m=c.bind({}),m.args={type:`source`,label:`example.com`,iconSrc:`chrome://branding/content/icon16.png`,href:`https://example.com`},h=()=>n`
  <div style="display: flex; flex-wrap: wrap; gap: 8px;">
    <smartwindow-chip
      type="in-line"
      label="mozilla.org"
      iconSrc="chrome://branding/content/icon16.png"
    ></smartwindow-chip>
    <smartwindow-chip type="in-line" label=""></smartwindow-chip>
    <smartwindow-chip
      type="context"
      label="example.com"
      iconSrc="chrome://branding/content/about-logo.svg"
      href="https://example.com"
      .removable=${!0}
    ></smartwindow-chip>
    <smartwindow-chip
      type="source"
      label="example.com"
      iconSrc="chrome://branding/content/icon16.png"
      href="https://example.com"
    ></smartwindow-chip>
  </div>
`,g=c.bind({}),g.args={type:`context`,label:`Trip planning`,isTabGroup:!0,tabGroupColor:`purple`,removable:!0},_=c.bind({}),_.args={type:`in-line`,label:`Trip planning`,isTabGroup:!0,tabGroupColor:`blue`},v=()=>n`
  ${s}
  <div style="display: flex; flex-wrap: wrap; gap: 8px;">
    ${[`blue`,`cyan`,`gray`,`green`,`orange`,`pink`,`purple`,`red`,`yellow`].map(e=>n`<smartwindow-chip
          type="context"
          .label=${e}
          .isTabGroup=${!0}
          .tabGroupColor=${e}
          .removable=${!0}
        ></smartwindow-chip>`)}
  </div>
`})))()}y();export{p as ContextNonRemovable,f as ContextRemovable,d as InLineCollection,l as InLineDefault,u as InLineEmpty,h as MixedCollection,m as SourceChip,v as TabGroupColors,g as TabGroupContextChip,_ as TabGroupInLine,o as default};