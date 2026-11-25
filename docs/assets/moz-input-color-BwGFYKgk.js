import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{d as n,f as r,u as i}from"./lit.all-Co4HOUmF.js";import{c as a,o}from"./iframe-DbtNkzFn.js";var s;function c(){return(c=e((()=>{s=``+new URL(`moz-input-color-Bia25EQK.css`,import.meta.url).href})))()}var l=t({MozInputColor:()=>u}),u;function d(){return(d=e((()=>{c(),r(),a(),u=class extends o{static properties={value:{type:String},name:{type:String},label:{type:String,fluent:!0}};static queries={inputEl:`.swatch`};static shadowRootOptions={...o.shadowRootOptions,delegatesFocus:!0};constructor(){super(),this.value=``,this.name=``,this.label=``}updateInputFromEvent(e){let t=e.target;this.value=t.value}redispatchEvent(e){this.updateInputFromEvent(e);let{bubbles:t,cancelable:n,composed:r,type:i}=e,a=new Event(i,{bubbles:t,cancelable:n,composed:r});this.dispatchEvent(a)}render(){return i`
      <link
        rel="stylesheet"
        href="${s}"
      />

      <label title=${this.value}>
        <input
          type="color"
          name=${n(this.name)}
          .value=${this.value}
          class="swatch"
          @input=${this.updateInputFromEvent}
          @change=${this.redispatchEvent}
        />
        <span>${this.label}</span>
        <img
          class="icon"
          alt=""
          src="chrome://global/skin/icons/edit-outline.svg"
        />
      </label>
    `}},customElements.define(`moz-input-color`,u)})))()}export{l as n,d as t};