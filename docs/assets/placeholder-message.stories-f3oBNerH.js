import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,f as n,u as r}from"./lit.all-Co4HOUmF.js";import{t as i}from"./placeholder-message-B6t0Iy1w.js";var a,o,s,c;function l(){return(l=e((()=>{n(),i(),a={title:`Domain-specific UI Widgets/Settings/Placeholder Message`,component:`placeholder-message`,argTypes:{l10nId:{options:[`placeholder-message-label`,`placeholder-message-label-description`],control:{type:`select`}}},parameters:{status:`in-development`,fluent:`
placeholder-message-label =
  .label = You’re not signed in
placeholder-message-label-description =
  .label = You’re not signed in
  .description = Sign in to keep your data private, encrypted, and instantly accessible everywhere you use Firefox.
    `}},o=({imageSrc:e=``,l10nId:n=``,supportPage:i=``})=>r`
  <div style="max-width: 500px">
    <placeholder-message
      imageSrc=${t(e)}
      data-l10n-id=${n}
      support-page=${t(i)}
    ></placeholder-message>
  </div>
`,s=o.bind({}),s.args={imageSrc:`resource://content-accessible/illustrations/security-error.svg`,l10nId:`placeholder-message-label-description`,supportPage:``},c=o.bind({}),c.args={...s.args,supportPage:`test`}})))()}l();export{s as Default,c as WithSupportPage,a as default};