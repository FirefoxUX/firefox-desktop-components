import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,f as n,i as r,u as i}from"./lit.all-Co4HOUmF.js";import{n as a}from"./moz-input-text-MZOOll4H.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{n(),a(),o={title:`UI Widgets/Input Text`,component:`moz-input-text`,argTypes:{l10nId:{options:[`moz-input-text-label`,`moz-input-text-placeholder`,`moz-input-text-description`,`moz-input-text-label-wrapped`],control:{type:`select`}}},parameters:{status:`stable`,handles:[`change`,`input`],fluent:`
moz-input-text-label =
  .label = This is a text input
moz-input-text-placeholder =
  .label = This is a text input
  .placeholder = Placeholder text here
moz-input-text-description =
  .label = This is a text input
  .description = This is a description for the text input
  .placeholder = Placeholder text here
moz-input-text-label-wrapped =
  .label = Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tristique justo leo, ac pellentesque lacus gravida vitae. Nam pellentesque suscipit venenatis.
    `}},s=({name:e,value:n,iconSrc:a,disabled:o,readonly:s,required:c,invalid:l,l10nId:u,description:d,supportPage:f,accessKey:p,title:m,hasSlottedDescription:h,hasSlottedSupportLink:g,ellipsized:_})=>i`
  <moz-input-text
    name=${e}
    value=${t(n||null)}
    iconsrc=${t(a||null)}
    ?disabled=${o}
    ?readonly=${s}
    ?required=${c}
    ?invalid=${l}
    data-l10n-id=${u}
    support-page=${t(f||null)}
    accesskey=${t(p||null)}
    title=${t(m||null)}
    class=${r({"text-truncated-ellipsis":_})}
  >
    ${h?i`<div slot="description">${d}</div>`:``}
    ${g?i`<a slot="support-link" href="www.example.com">Click me!</a>`:``}
  </moz-input-text>
`,c=s.bind({}),c.args={name:`example-moz-input-text`,value:``,iconSrc:``,disabled:!1,readonly:!1,required:!1,invalid:!1,l10nId:`moz-input-text-label`,supportPage:``,accessKey:``,title:``,hasSlottedDescription:!1,hasSlottedSupportLink:!1},l=s.bind({}),l.args={...c.args,l10nId:`moz-input-text-placeholder`},u=s.bind({}),u.args={...c.args,iconSrc:`chrome://global/skin/icons/highlights.svg`},d=s.bind({}),d.args={...c.args,l10nId:`moz-input-text-description`},f=s.bind({}),f.args={...c.args,description:`This is a custom slotted description.`,hasSlottedDescription:!0},p=s.bind({}),p.args={...c.args,l10nId:`moz-input-text-description`,disabled:!0},m=s.bind({}),m.args={...c.args,l10nId:`moz-input-text-description`,readonly:!0},h=s.bind({}),h.args={...c.args,l10nId:`moz-input-text-description`,required:!0},g=s.bind({}),g.args={...c.args,l10nId:`moz-input-text-description`,value:`Invalid value`,invalid:!0},_=s.bind({}),_.args={...c.args,accessKey:`s`},v=s.bind({}),v.args={...c.args,supportPage:`support-page`,l10nId:`moz-input-text-description`},y=s.bind({}),y.args={...c.args,hasSlottedSupportLink:!0,l10nId:`moz-input-text-description`},b=s.bind({}),b.args={...c.args,ellipsized:!0,l10nId:`moz-input-text-label-wrapped`}})))()}x();export{c as Default,p as Disabled,g as Invalid,m as Readonly,h as Required,_ as WithAccesskey,d as WithDescription,b as WithEllipsizedLabel,u as WithIcon,l as WithPlaceholder,f as WithSlottedDescription,y as WithSlottedSupportLink,v as WithSupportLink,o as default};