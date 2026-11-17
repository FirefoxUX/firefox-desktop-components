import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{d as n,f as r,u as i}from"./lit.all-Co4HOUmF.js";import{c as a,i as o}from"./iframe-ChCqHcnv.js";var s;function c(){return(c=e((()=>{s=new URL(`moz-input-text-Dgx7MIPe.css`,import.meta.url).href+``})))()}var l=t({MozInputText:()=>u}),u;function d(){return(d=e((()=>{c(),r(),a(),u=class extends o{static properties={placeholder:{type:String,fluent:!0},readonly:{type:Boolean,reflect:!0},required:{type:Boolean,reflect:!0},maxLength:{type:Number}};static inputLayout=`block`;constructor(){super(),this.value=``,this.readonly=!1,this.required=!1}inputStylesTemplate(){return i`<link
      rel="stylesheet"
      href="${s}"
    />`}handleInput(e){this.value=e.target.value}inputTemplate(e={}){let{type:t=`text`,classes:r,styles:a,inputValue:o}=e;return i`
      <input
        id="input"
        type=${t}
        class=${n(r)}
        style=${n(a)}
        name=${this.name}
        .value=${o||this.value}
        ?disabled=${this.disabled||this.parentDisabled}
        ?readonly=${this.readonly}
        ?required=${this.required}
        accesskey=${n(this.accessKey)}
        placeholder=${n(this.placeholder)}
        maxlength=${n(this.maxLength)}
        aria-label=${n(this.ariaLabel??void 0)}
        aria-describedby="description"
        aria-description=${n(this.hasDescription?void 0:this.ariaDescription)}
        title=${n(this.title)}
        @input=${this.handleInput}
        @change=${this.redispatchEvent}
      />
    `}requiredIndicatorTemplate(){return this.required?i`<span class="required-indicator" aria-hidden="true">*</span>`:``}},customElements.define(`moz-input-text`,u)})))()}export{d as n,l as r,u as t};