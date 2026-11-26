import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,f as n,u as r}from"./lit.all-Co4HOUmF.js";import{n as i,t as a}from"./moz-breadcrumb-group.stories-Brrkigoc.js";import{t as o}from"./moz-page-header-B-XH7JbT.js";var s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{n(),o(),i(),s={title:`UI Widgets/Page Header`,component:`moz-page-header`,argTypes:{l10nId:{options:[`moz-page-header-heading`,`moz-page-header-description`,`moz-page-header-long`],control:{type:`select`}}},parameters:{status:`stable`,fluent:`
moz-page-header-heading =
  .heading = This is the page heading
moz-page-header-description =
  .heading = This is the page heading
  .description = This is a description of the page
moz-page-header-long =
  .heading = Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum libero enim, luctus eu ante a, maximus imperdiet mi. Suspendisse sodales, nisi et commodo malesuada, lectus.
  .description = Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum libero enim, luctus eu ante a, maximus imperdiet mi. Suspendisse sodales, nisi et commodo malesuada, lectus.
moz-breadcrumb-first =
  .label = First page
moz-breadcrumb-second =
  .label = Previous page
moz-breadcrumb-third =
  .label = Current page
    `}},c=({l10nId:e,backButton:n,iconSrc:i,supportPage:o,showBreadcrumbs:s})=>r`
  <moz-page-header
    data-l10n-id=${e}
    iconsrc=${t(i)}
    support-page=${t(o)}
    ?backbutton=${n}
  >
    ${s?a({slot:`breadcrumbs`,...a.args}):``}
  </moz-page-header>
`,l=c.bind({}),l.args={l10nId:`moz-page-header-heading`,iconSrc:``,backButton:!1,showBreadcrumbs:!1},u=c.bind({}),u.args={...l.args,backButton:!0},d=c.bind({}),d.args={...u.args,iconSrc:`chrome://global/skin/icons/highlights.svg`},f=c.bind({}),f.args={...u.args,l10nId:`moz-page-header-description`},p=c.bind({}),p.args={...f.args,supportPage:`test`},m=c.bind({}),m.args={...u.args,showBreadcrumbs:!0}})))()}h();export{l as Default,u as WithBackButton,m as WithBreadcrumbs,f as WithDescription,d as WithIcon,p as WithSupportPage,s as default};