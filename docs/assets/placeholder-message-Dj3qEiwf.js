import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,u as n}from"./lit.all-Co4HOUmF.js";import{c as r,l as i,o as a,u as o}from"./iframe-17211AdQ.js";var s;function c(){return(c=e((()=>{s=``+new URL(`placeholder-message-BZOZBF0j.css`,import.meta.url).href})))()}var l;function u(){return(u=e((()=>{c(),i(),r(),t(),l=class extends a{static properties={imageSrc:{type:String},label:{type:String,fluent:!0},description:{type:String,fluent:!0},supportPage:{type:String,attribute:`support-page`}};constructor(){super(),this.imageSrc=``,this.label=``,this.description=``,this.supportPage=``}labelTemplate(){return this.label?n`<div class="label-wrapper">
      <span class="label heading-medium" id="label">${this.label}</span>${this.description?``:this.supportLinkTemplate()}
    </div>`:``}descriptionTemplate(){return this.description?n`<div class="description-wrapper">
      <span class="description" id="description"> ${this.description}</span
      >${this.supportLinkTemplate()}
    </div>`:``}supportLinkTemplate(){return this.supportPage?n`<a
      is="moz-support-link"
      class="support-link"
      support-page=${this.supportPage}
      part="support-link"
      aria-describedby="label description"
    ></a>`:``}imageTemplate(){return this.imageSrc?n`<img src=${this.imageSrc} role="presentation" />`:``}render(){return n`
      <link
        rel="stylesheet"
        href="${s}"
      />
      <link
        rel="stylesheet"
        href="${o}"
      />
      <moz-box-item>
        <div class="placeholder-container">
          ${this.imageTemplate()}
          <div class="text-container">
            ${this.labelTemplate()} ${this.descriptionTemplate()}
          </div>
        </div>
      </moz-box-item>
    `}},customElements.define(`placeholder-message`,l)})))()}export{u as t};