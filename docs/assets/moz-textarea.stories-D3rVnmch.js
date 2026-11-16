import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,f as n,u as r}from"./lit.all-BYVOqvrj.js";import{t as i}from"./moz-textarea-CkPjDyVb.js";var a,o,s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{n(),i(),a={title:`UI Widgets/Textarea`,component:`moz-textarea`,argTypes:{l10nId:{options:[`moz-textarea-label`,`moz-textarea-placeholder`,`moz-textarea-description`],control:{type:`select`}}},parameters:{status:`stable`,handles:[`change`,`input`],fluent:`
moz-textarea-label =
  .label = This is a textarea
moz-textarea-placeholder =
  .label = This is a textarea
  .placeholder = Placeholder text here
moz-textarea-description =
  .label = This is a textarea
  .description = This is a description for the textarea
  .placeholder = Placeholder text here
    `}},o=({name:e,value:n,rows:i,iconSrc:a,disabled:o,readonly:s,required:c,l10nId:l,description:u,supportPage:d,accessKey:f,title:p,hasSlottedDescription:m})=>r`
  <moz-textarea
    name=${e}
    value=${t(n||null)}
    rows=${i}
    iconsrc=${t(a||null)}
    ?disabled=${o}
    ?readonly=${s}
    ?required=${c}
    data-l10n-id=${l}
    support-page=${t(d||null)}
    accesskey=${t(f||null)}
    title=${t(p||null)}
  >
    ${m?r`<div slot="description">${u}</div>`:``}
  </moz-textarea>
`,s=o.bind({}),s.args={name:`example-moz-textarea`,value:``,rows:3,iconSrc:``,disabled:!1,readonly:!1,required:!1,l10nId:`moz-textarea-label`,supportPage:``,accessKey:``,title:``,hasSlottedDescription:!1},c=o.bind({}),c.args={...s.args,iconSrc:`chrome://global/skin/icons/highlights.svg`},l=o.bind({}),l.args={...s.args,l10nId:`moz-textarea-placeholder`},u=o.bind({}),u.args={...s.args,l10nId:`moz-textarea-description`},d=o.bind({}),d.args={...s.args,description:`This is a custom slotted description.`,hasSlottedDescription:!0},f=o.bind({}),f.args={...s.args,l10nId:`moz-textarea-description`,disabled:!0},p=o.bind({}),p.args={...s.args,l10nId:`moz-textarea-description`,readonly:!0},m=o.bind({}),m.args={...s.args,l10nId:`moz-textarea-description`,required:!0},h=o.bind({}),h.args={...s.args,rows:6},g=()=>r`
  <moz-textarea
    style="--textarea-resize: vertical"
    data-l10n-id="moz-textarea-label"
  ></moz-textarea>
`})))()}_();export{s as Default,f as Disabled,p as Readonly,m as Required,g as Resizable,u as WithDescription,c as WithIcon,l as WithPlaceholder,h as WithRows,d as WithSlottedDescription,a as default};