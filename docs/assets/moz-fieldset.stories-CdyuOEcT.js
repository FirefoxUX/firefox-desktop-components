import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,f as n,u as r}from"./lit.all-Co4HOUmF.js";import{n as i}from"./moz-button-DllAM7jW.js";import{t as a}from"./moz-badge-CvTrKMan.js";import{t as o}from"./moz-toggle-CL449wL-.js";import{t as s}from"./moz-fieldset-Xxjmry98.js";import{t as c}from"./moz-radio-group-CLzXrJY1.js";var l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{n(),s(),a(),o(),i(),c(),l={title:`UI Widgets/Fieldset`,component:`moz-fieldset`,argTypes:{headingLevel:{options:[``,`1`,`2`,`3`,`4`,`5`,`6`],control:{type:`select`}},l10nId:{options:[`moz-fieldset-label`,`moz-fieldset-description`],control:{type:`select`}},iconSrc:{options:[``,`chrome://global/skin/icons/info.svg`,`chrome://global/skin/icons/highlights.svg`,`chrome://global/skin/icons/warning.svg`,`chrome://global/skin/icons/heart.svg`,`chrome://global/skin/icons/edit.svg`],control:{type:`select`}},badge:{options:[``,`beta`,`new`],control:{type:`select`}}},parameters:{status:`stable`,fluent:`
moz-fieldset-label =
  .label = Related Settings
moz-fieldset-description =
  .label = Some Settings
  .description = Perhaps you want to have a longer description of what these settings do. Width is set explicitly for emphasis.
moz-badge-beta = Beta
moz-badge-new = New
  `}},u=({label:e,description:n,l10nId:i,supportPage:a,hasSlottedSupportLinks:o,headingLevel:s,disabled:c,iconSrc:l,badge:u})=>r`
  <moz-fieldset
    data-l10n-id=${i}
    .label=${e}
    .description=${n}
    .headingLevel=${s}
    .disabled=${c}
    support-page=${a}
    style="width: 400px;"
    iconsrc=${t(l)}
    badge=${t(u||void 0)}
  >
    <moz-toggle
      pressed
      label="First setting"
      description="These could have descriptions too."
    ></moz-toggle>
    <moz-checkbox label="Second setting"></moz-checkbox>
    <moz-checkbox
      label="Third setting"
      description="Checkbox with a description."
      support-page="foo"
    ></moz-checkbox>
    <moz-select label="Make a choice">
      <moz-option label="Option One" value="1"></moz-option>
      <moz-option label="Option A" value="a"></moz-option>
    </moz-select>
    <moz-radio-group label="Radio group setting">
      <moz-radio label="Option 1" value="1"></moz-radio>
      <moz-radio label="Option 2" value="2"></moz-radio>
      <moz-radio label="Option 3" value="3"></moz-radio>
    </moz-radio-group>
    <moz-button label="Button"></moz-button>
    ${o?r`<a slot="support-link" href="www.example.com"> Click me! </a>`:``}
  </moz-fieldset>
`,d=u.bind({}),d.args={label:``,description:``,supportPage:``,l10nId:`moz-fieldset-label`,hasSlottedSupportLinks:!1,disabled:!1,iconSrc:``,badge:``},f=u.bind({}),f.args={...d.args,l10nId:`moz-fieldset-description`},p=u.bind({}),p.args={...d.args,supportPage:`test`},m=u.bind({}),m.args={...p.args,l10nId:`moz-fieldset-description`},h=u.bind({}),h.args={...d.args,hasSlottedSupportLinks:!0},g=u.bind({}),g.args={...f.args,hasSlottedSupportLinks:!0},_=u.bind({}),_.args={...f.args,headingLevel:`2`},v=u.bind({}),v.args={...f.args,disabled:!0},y=u.bind({}),y.args={...p.args,iconSrc:`chrome://global/skin/icons/info.svg`},b=u.bind({}),b.args={...d.args,badge:`new`}})))()}x();export{d as Default,v as Disabled,b as WithBadge,f as WithDescription,g as WithDescriptionAndSlottedSupportLink,m as WithDescriptionAndSupportLink,_ as WithHeadingLegend,y as WithIcon,h as WithSlottedSupportLink,p as WithSupportLink,l as default};