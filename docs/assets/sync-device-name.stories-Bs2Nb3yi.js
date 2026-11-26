import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,u as n}from"./lit.all-Co4HOUmF.js";import{c as r,o as i}from"./iframe-DUPCaqkc.js";var a;function o(){return(o=e((()=>{r(),t(),a=class extends i{static properties={value:{type:String},defaultValue:{type:String},disabled:{type:Boolean},_isInEditMode:{type:Boolean,state:!0}};static queries={inputTextEl:`#fxaSyncComputerName`,changeBtnEl:`#fxaChangeDeviceName`};constructor(){super(),this.value=``,this.defaultValue=``,this.disabled=!1,this._isInEditMode=!1}setFocus(){this.updateComplete.then(()=>{(this._isInEditMode?this.inputTextEl:this.changeBtnEl)?.focus()})}onDeviceNameChange(){this._isInEditMode=!0,this.setFocus()}onDeviceNameCancel(){this._isInEditMode=!1,this.setFocus()}onDeviceNameSave(){let e=this.inputTextEl.value?.trim();this.value=e===``?this.defaultValue:e,this._isInEditMode=!1,this.setFocus(),this.dispatchEvent(new Event(`change`,{bubbles:!0}))}onDeviceNameKeyDown(e){switch(e.key){case`Enter`:e.preventDefault(),this.onDeviceNameSave();break;case`Escape`:e.preventDefault(),this.onDeviceNameCancel()}}displayDeviceNameTemplate(){return n`<moz-button
      id="fxaChangeDeviceName"
      data-l10n-id="sync-device-name-change-2"
      slot="actions"
      @click=${this.onDeviceNameChange}
      ?disabled=${this.disabled}
    ></moz-button>`}editDeviceNameTemplate(){return n`<moz-input-text
        id="fxaSyncComputerName"
        data-l10n-id="sync-device-name-input"
        data-l10n-args=${JSON.stringify({placeholder:this.defaultValue})}
        .value=${this.value}
        @keydown=${this.onDeviceNameKeyDown}
      ></moz-input-text>
      <moz-button
        id="fxaCancelChangeDeviceName"
        data-l10n-id="sync-device-name-cancel"
        slot="actions"
        @click=${this.onDeviceNameCancel}
      ></moz-button>
      <moz-button
        id="fxaSaveChangeDeviceName"
        data-l10n-id="sync-device-name-save"
        slot="actions"
        @click=${this.onDeviceNameSave}
      ></moz-button>`}render(){let e=``;return this._isInEditMode||(e=this.value==``?this.defaultValue:this.value),n`
      <moz-box-item label=${e}>
        ${this._isInEditMode?this.editDeviceNameTemplate():this.displayDeviceNameTemplate()}
      </moz-box-item>
    `}},customElements.define(`sync-device-name`,a)})))()}var s,c,l,u,d;function f(){return(f=e((()=>{t(),o(),s={title:`Domain-specific UI Widgets/Settings/Sync Device Name`,component:`sync-device-name`,parameters:{status:`in-development`}},window.MozXULElement.insertFTLIfNeeded(`browser/preferences/preferences.ftl`),c=({value:e=``,defaultValue:t=``,disabled:r=!1})=>n`
  <div style="max-width: 500px">
    <sync-device-name
      value=${e}
      defaultvalue=${t}
      ?disabled=${r}
    ></sync-device-name>
  </div>
`,l=c.bind({}),l.args={value:`My Device Name`,disabled:!1},u=c.bind({}),u.args={...l.args,defaultValue:`My Default Device Name`},d=c.bind({}),d.args={...l.args,disabled:!0}})))()}f();export{l as Default,d as Disabled,u as WithDefaultValue,s as default};