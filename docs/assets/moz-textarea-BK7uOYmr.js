import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{d as n,f as r,u as i}from"./lit.all-BYVOqvrj.js";import{n as a,t as o}from"./moz-input-text-DD_a8E7c.js";var s;function c(){return(c=e((()=>{s=new URL(`moz-textarea-7G-rEq1w.css`,import.meta.url).href+``})))()}var l=t({MozTextarea:()=>u}),u;function d(){return(d=e((()=>{c(),r(),a(),u=class extends o{static properties={...o.properties,rows:{type:Number,reflect:!0}};constructor(){super(),this.rows=2}inputStylesTemplate(){return i`
      ${super.inputStylesTemplate()}
      <link
        rel="stylesheet"
        href="${s}"
      />
    `}inputTemplate(){return i`
      <textarea
        id="input"
        name=${this.name}
        rows=${this.rows}
        .value=${this.value}
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
      ></textarea>
    `}},customElements.define(`moz-textarea`,u)})))()}export{l as n,d as t};