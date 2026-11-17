import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,f as n,u as r}from"./lit.all-Co4HOUmF.js";import{t as i}from"./moz-label-CyR-DKif.js";var a,o,s,c,l,u;function d(){return(d=e((()=>{n(),i(),a=[`moz-label-default-label`,`moz-label-label-with-colon`,`moz-label-label-disabled`],o={title:`UI Widgets/Label`,component:`moz-label`,argTypes:{inputType:{options:[`checkbox`,`radio`],control:{type:`select`}},l10nId:{options:a,control:{type:`select`}},textContent:{table:{disable:!0}},"data-l10n-id":{table:{disable:!0}}},parameters:{status:{type:`stable`,links:[{title:`Learn more`,href:`?path=/docs/ui-widgets-label-readme--page#component-status`}]},fluent:`
moz-label-default-label = I love cheese 🧀
moz-label-label-with-colon = I love cheese 🧀:
moz-label-label-disabled = I love cheese 🧀
    `}},s=({accesskey:e,inputType:n,disabled:i,l10nId:a})=>r`
  <style>
    div {
      display: flex;
      align-items: center;
    }

    label {
      margin-inline-end: 8px;
    }
  </style>
  <div>
    <label
      is="moz-label"
      accesskey=${t(e)}
      data-l10n-id=${t(a)}
      for="cheese"
    >
    </label>
    <input
      type=${n}
      name="cheese"
      id="cheese"
      ?disabled=${i}
      checked
    />
  </div>
`,c=s.bind({}),c.args={accesskey:`c`,inputType:`checkbox`,disabled:!1,l10nId:`moz-label-default-label`},l=s.bind({}),l.args={...c.args,accesskey:`x`,l10nId:`moz-label-label-with-colon`},u=s.bind({}),u.args={...c.args,disabled:!0,l10nId:`moz-label-label-disabled`}})))()}d();export{c as AccessKey,l as AccessKeyNotInLabel,u as DisabledCheckbox,o as default};