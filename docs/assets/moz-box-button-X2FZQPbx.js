import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{d as n,f as r,u as i}from"./lit.all-Co4HOUmF.js";import{a,c as o}from"./iframe-ChCqHcnv.js";var s;function c(){return(c=e((()=>{s=new URL(`moz-box-button-k_7PyEfu.css`,import.meta.url).href+``})))()}var l=t({MozBoxButton:()=>u}),u;function d(){return(d=e((()=>{c(),r(),o(),u=class extends a{static shadowRootOptions={...super.shadowRootOptions,delegatesFocus:!0};static properties={disabled:{type:Boolean},accessKey:{type:String,mapped:!0,fluent:!0},parentDisabled:{type:Boolean,state:!0}};static queries={buttonEl:`button`,navIcon:`.nav-icon`};constructor(){super(),this.disabled=!1}click(){this.buttonEl.click()}labelTemplate(){return this.label?i`<label
      is="moz-label"
      class="label"
      shownaccesskey=${n(this.accessKey)}
      .textContent=${this.label}
    >
    </label>`:``}render(){return i`
      ${super.stylesTemplate()}
      <link
        rel="stylesheet"
        href="${s}"
      />
      <button
        class="button"
        ?disabled=${this.disabled||this.parentDisabled}
        accesskey=${n(this.accessKey)}
      >
        ${super.textTemplate()}
        <img
          class="icon nav-icon"
          src="chrome://global/skin/icons/arrow-right.svg"
          alt=""
        />
      </button>
    `}},customElements.define(`moz-box-button`,u)})))()}export{l as n,d as t};