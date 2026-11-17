import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{d as n,f as r,u as i}from"./lit.all-Co4HOUmF.js";import{t as a}from"./moz-breadcrumb-group-CZ8-n9sW.js";var o=t({Default:()=>l,NarrowWidth:()=>u,default:()=>s}),s,c,l,u;function d(){return(d=e((()=>{r(),a(),s={title:`UI Widgets/Breadcrumb Group`,component:`moz-breadcrumbs-group`,parameters:{status:`stable`,fluent:`
moz-breadcrumb-first =
  .label = First page
moz-breadcrumb-second =
  .label = Previous page
moz-breadcrumb-third =
  .label = Current page
    `}},c=({l10nId:e,width:t,slot:r})=>i`
    <style>
      ${t?`moz-breadcrumb-group {
            width: ${t}px;
            overflow: hidden;
          }`:``}
    </style>
    <moz-breadcrumb-group slot=${n(r)}>
      <moz-breadcrumb
        href="about#firstpage"
        data-l10n-id=${n(e+`-first`)}
      ></moz-breadcrumb>
      <moz-breadcrumb
        data-l10n-id=${n(e+`-second`)}
        href="about#prevpage"
      ></moz-breadcrumb>
      <moz-breadcrumb
        href="about#currentpage"
        data-l10n-id=${n(e+`-third`)}
      ></moz-breadcrumb>
    </moz-breadcrumb-group>
  `,l=c.bind({}),l.args={l10nId:`moz-breadcrumb`},u=c.bind({}),u.args={...l.args,width:180}})))()}export{d as n,o as r,l as t};