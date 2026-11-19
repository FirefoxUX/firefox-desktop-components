import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{d as n,f as r,u as i}from"./lit.all-Co4HOUmF.js";import{c as a,i as o}from"./iframe-CEh6YfCk.js";import{t as s}from"./moz-label-CyR-DKif.js";import{t as c}from"./moz-support-link-jyOtt3Py.js";var l=t({MozCheckbox:()=>u}),u;function d(){return(d=e((()=>{r(),a(),s(),c(),u=class extends o{static properties={checked:{type:Boolean,reflect:!0}};static activatedProperty=`checked`;constructor(){super(),this.checked=!1}connectedCallback(){super.connectedCallback(),this.defaultChecked=this.getAttribute(`checked`)||this.checked,this.checked=!!this.defaultChecked;let e=this.getAttribute(`value`);e?(this.defaultValue=e,this.value=e):(this.defaultValue=`on`,this.value=`on`),this.setFormValue(this.value)}handleStateChange(e){this.checked=e.target.checked,this.checked?this.setFormValue(this.value):this.setFormValue(null)}formResetCallback(){this.checked=this.defaultChecked,this.value=this.defaultValue}inputTemplate(){return i`<input
      id="input"
      type="checkbox"
      name=${this.name}
      .value=${this.value}
      .checked=${this.checked}
      @click=${this.handleStateChange}
      @change=${this.redispatchEvent}
      ?disabled=${this.disabled||this.parentDisabled}
      aria-label=${n(this.ariaLabel??void 0)}
      aria-describedby="description"
      aria-description=${n(this.hasDescription?void 0:this.ariaDescription)}
      accesskey=${n(this.accessKey)}
      title=${n(this.title)}
    />`}},customElements.define(`moz-checkbox`,u)})))()}export{l as n,d as t};