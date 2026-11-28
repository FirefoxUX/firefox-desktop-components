import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,u as n}from"./lit.all-Co4HOUmF.js";import{n as r}from"./setting-control-B2XNjOiS.js";var i;function a(){return(a=e((()=>{i=``+new URL(`setting-control-LtPrll3L.css`,import.meta.url).href})))()}var o,s,c,l,u,d,f;function p(){return(p=e((()=>{a(),t(),r(),o={title:`Domain-specific UI Widgets/Settings/Setting Control`,component:`setting-control`,parameters:{status:`in-development`,handles:[`click`,`input`,`change`],fluent:`
checkbox-example-input =
  .label = Checkbox example of setting-control
  .description = Could have a description like moz-checkbox.
select-example-input =
  .label = Select example of setting-control
  .description = Could have a description like moz-select.
select-option-0 =
  .label = Option 0
select-option-1 =
  .label = Option 1
select-option-2 =
  .label = Option 2
radio-example-input =
  .label = Radio example of setting-control
  .description = Could have a description like moz-radio-group.
radio-option-0 =
  .label = Option 0
radio-option-1 =
  .label = Option 1
  .description = It's a full moz-radio
radio-option-2 =
  .label = Option 2
extension-controlled-input =
  .label = Setting controlled by extension
extension-controlled-message = <strong>My Extension</strong> requires Controlled Setting.
disable-extension =
  .label = Disable extension
  .tooltiptext = Disable extension
extension-controlled-enable-2 = Storybook Only: Refresh the page to enable the extension. To re-enable this extension visit <a data-l10n-name="addons-link">Extensions and themes</a>.`}},s=({config:e,setting:t})=>n`
  <link
    rel="stylesheet"
    href="${i}"
  /><setting-control .config=${e} .setting=${t}></setting-control>
`,c={value:1,on(){},off(){},userChange(){},getControlConfig:e=>e,controllingExtensionInfo:{},visible:!0},l=s.bind({}),l.args={config:{id:`checkbox-example`,l10nId:`checkbox-example-input`},setting:c},u=s.bind({}),u.args={config:{id:`select-example`,l10nId:`select-example-input`,control:`moz-select`,supportPage:`example-support`,options:[{value:0,l10nId:`select-option-0`},{value:1,l10nId:`select-option-1`},{value:2,l10nId:`select-option-2`}]},setting:c},d=s.bind({}),d.args={config:{id:`radio-example`,l10nId:`radio-example-input`,control:`moz-radio-group`,supportPage:`example-support`,options:[{value:0,l10nId:`radio-option-0`},{value:1,l10nId:`radio-option-1`,supportPage:`support-page`},{value:2,l10nId:`radio-option-2`}]},setting:c},f=s.bind({}),f.args={config:{id:`extension-controlled-example`,l10nId:`extension-controlled-input`,pref:`privacy.userContext.enabled`},setting:{...c,disableControllingExtension(){delete this.controllingExtensionInfo.id,delete this.controllingExtensionInfo.name,document.querySelector(`with-common-styles`).shadowRoot.querySelector(`setting-control`).requestUpdate()},controllingExtensionInfo:{id:`extension-controlled-example`,l10nId:`extension-controlled-message`,name:`My Extension`,supportPage:`preferences`,mayDisable:!0,allowControl:!1}}}})))()}p();export{l as Checkbox,f as ExtensionControlled,d as Radio,u as Select,o as default};