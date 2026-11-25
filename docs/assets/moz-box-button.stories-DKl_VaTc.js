import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,f as n,u as r}from"./lit.all-Co4HOUmF.js";import{t as i}from"./moz-box-button-BeWIAE2D.js";var a,o,s,c,l,u,d;function f(){return(f=e((()=>{n(),i(),a={title:`UI Widgets/Box Button`,component:`moz-box-button`,argTypes:{l10nId:{options:[`moz-box-button-label`,`moz-box-button-label-description`],control:{type:`select`}}},parameters:{status:`stable`,fluent:`
moz-box-button-label =
  .label = Click me to navigate!
moz-box-button-label-description =
  .label = Click me to navigate!
  .description = Some description of the button
    `}},o=({l10nId:e,disabled:n,iconSrc:i,accesskey:a,clickHandler:o})=>r`
  <div style="width: 300px">
    <moz-box-button
      @click=${o}
      data-l10n-id=${e}
      ?disabled=${n}
      iconsrc=${i}
      accesskey=${t(a)}
    ></moz-box-button>
  </div>
`,s=o.bind({}),s.args={l10nId:`moz-box-button-label`,disabled:!1,iconSrc:``,accesskey:``},c=o.bind({}),c.args={...s.args,disabled:!0},l=o.bind({}),l.args={l10nId:`moz-box-button-label-description`},u=o.bind({}),u.args={...l.args,iconSrc:`chrome://global/skin/icons/highlights.svg`},d=o.bind({}),d.args={...l.args,iconSrc:`chrome://global/skin/icons/highlights.svg`,accesskey:`o`,clickHandler:()=>alert(`Activating the accesskey clicks the button`)}})))()}f();export{s as Default,c as Disabled,d as WithAccesskey,l as WithDescription,u as WithIcon,a as default};