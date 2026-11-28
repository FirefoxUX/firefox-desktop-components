import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,f as n,u as r}from"./lit.all-Co4HOUmF.js";import{t as i}from"./moz-box-link-Bq5bWwCZ.js";var a,o,s,c,l,u;function d(){return(d=e((()=>{n(),i(),a={title:`UI Widgets/Box Link`,component:`moz-box-link`,argTypes:{l10nId:{options:[`moz-box-link-label`,`moz-box-link-label-description`],control:{type:`select`}}},parameters:{status:`stable`,fluent:`
moz-box-link-label =
  .label = Click me to navigate!
moz-box-link-label-description =
  .label = Click me to navigate!
  .description = Some description of the link
    `}},o=({l10nId:e,href:n,supportPage:i,iconSrc:a})=>r`
  <div style="width: 300px">
    <moz-box-link
      data-l10n-id=${e}
      href=${t(n)}
      iconSrc=${t(a)}
      support-page=${t(i)}
    ></moz-box-link>
  </div>
`,s=o.bind({}),s.args={l10nId:`moz-box-link-label`,href:`https://example.com`},c=o.bind({}),c.args={...s.args,l10nId:`moz-box-link-label-description`},l=o.bind({}),l.args={...s.args,supportPage:`test`},u=o.bind({}),u.args={...s.args,iconSrc:`chrome://global/skin/icons/highlights.svg`}})))()}d();export{s as Default,c as WithDescription,u as WithIcon,l as WithSupportLink,a as default};