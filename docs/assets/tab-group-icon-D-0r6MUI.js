import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,u as n}from"./lit.all-Co4HOUmF.js";import{c as r,o as i}from"./iframe-DoVFImma.js";var a;function o(){return(o=e((()=>{a=``+new URL(`tab-group-icon-CmULRVyi.css`,import.meta.url).href})))()}var s;function c(){return(c=e((()=>{o(),t(),r(),s=class extends i{static properties={label:{type:String},color:{type:String,reflect:!0}};constructor(){super(),this.label=``,this.color=``}willUpdate(e){if(!e.has(`color`))return;let t=this.color||`gray`;this.style.setProperty(`--tab-group-color`,`var(--tab-group-${t})`),this.style.setProperty(`--tab-group-text-color`,`var(--tab-group-${t}-text)`)}get#e(){return(Array.from(this.label?.trim()??``)[0]??``).toUpperCase()}render(){return n`
      <link
        rel="stylesheet"
        href="${a}"
      />
      <span aria-hidden="true">${this.#e}</span>
    `}},customElements.define(`tab-group-icon`,s)})))()}export{c as t};