import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,f as n,i as r,u as i}from"./lit.all-BYVOqvrj.js";import{t as a}from"./moz-input-email-BjZOLblx.js";var o,s,c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{n(),a(),o={title:`UI Widgets/Input Email`,component:`moz-input-email`,argTypes:{l10nId:{options:[`moz-input-email-label`,`moz-input-email-placeholder`,`moz-input-email-description`,`moz-input-email-label-wrapped`],control:{type:`select`}}},parameters:{status:`stable`,handles:[`change`,`input`],fluent:`
moz-input-email-label =
  .label = Email:
moz-input-email-placeholder =
  .label = Email:
  .placeholder = Placeholder text
moz-input-email-description =
  .label = Email:
  .description = Description for the email input
  .placeholder = Placeholder text
moz-input-email-label-wrapped =
  .label = Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tristique justo leo, ac pellentesque lacus gravida vitae. Nam pellentesque suscipit venenatis.
    `}},s=({name:e,value:n,iconSrc:a,disabled:o,required:s,l10nId:c,description:l,supportPage:u,accessKey:d,title:f,hasSlottedDescription:p,hasSlottedSupportLink:m,ellipsized:h})=>i`
  <moz-input-email
    name=${e}
    value=${t(n||null)}
    iconsrc=${t(a||null)}
    ?disabled=${o}
    ?required=${s}
    data-l10n-id=${c}
    support-page=${t(u||null)}
    accesskey=${t(d||null)}
    title=${t(f||null)}
    class=${r({"text-truncated-ellipsis":h})}
  >
    ${p?i`<div slot="description">${l}</div>`:``}
    ${m?i`<a slot="support-link" href="www.example.com">Click me!</a>`:``}
  </moz-input-email>
`,c=s.bind({}),c.args={name:`example-moz-input-email`,value:``,iconSrc:``,disabled:!1,required:!1,l10nId:`moz-input-email-label`,supportPage:``,accessKey:``,title:``,hasSlottedDescription:!1,hasSlottedSupportLink:!1},l=s.bind({}),l.args={...c.args,l10nId:`moz-input-email-placeholder`},u=s.bind({}),u.args={...c.args,iconSrc:`chrome://global/skin/icons/highlights.svg`},d=s.bind({}),d.args={...c.args,l10nId:`moz-input-email-description`},f=s.bind({}),f.args={...c.args,description:`This is a custom slotted description.`,hasSlottedDescription:!0},p=s.bind({}),p.args={...c.args,l10nId:`moz-input-email-description`,disabled:!0},m=s.bind({}),m.args={...c.args,l10nId:`moz-input-email-description`,required:!0},h=s.bind({}),h.args={...c.args,accessKey:`s`},g=s.bind({}),g.args={...c.args,supportPage:`support-page`,l10nId:`moz-input-email-description`},_=s.bind({}),_.args={...c.args,hasSlottedSupportLink:!0,l10nId:`moz-input-email-description`},v=s.bind({}),v.args={...c.args,ellipsized:!0,l10nId:`moz-input-email-label-wrapped`}})))()}y();export{c as Default,p as Disabled,m as Required,h as WithAccesskey,v as WithEllipsizedLabel,u as WithIcon,l as WithPlaceholder,f as WithSlottedDescription,_ as WithSlottedSupportLink,g as WithSupportLink,o as default,d as withDescription};