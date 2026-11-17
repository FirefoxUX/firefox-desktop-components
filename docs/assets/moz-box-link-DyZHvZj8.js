import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{f as n,u as r}from"./lit.all-Co4HOUmF.js";import{a as i,c as a}from"./iframe-ChCqHcnv.js";var o;function s(){return(s=e((()=>{o=new URL(`moz-box-link-206DNqIY.css`,import.meta.url).href+``})))()}var c=t({MozBoxLink:()=>l}),l;function u(){return(u=e((()=>{s(),a(),n(),window.MozXULElement?.insertFTLIfNeeded(`toolkit/global/mozBoxBase.ftl`),l=class extends i{static shadowRootOptions={...super.shadowRootOptions,delegatesFocus:!0};static properties={href:{type:String},supportPage:{type:String,attribute:`support-page`}};constructor(){super(),this.href=``,this.supportPage=``}stylesTemplate(){let e=super.stylesTemplate();return r`${e}<link
        rel="stylesheet"
        href="${o}"
      />`}navIconTemplate(){return r`<img
      class="icon nav-icon"
      src="chrome://global/skin/icons/open-in-new.svg"
      role="presentation"
    />`}opensInNewTabTemplate(){return r`<span
      id="opens-in-new-tab"
      hidden
      data-l10n-id="moz-box-link-opens-in-new-tab"
    ></span>`}labelTemplate(){let{supportPage:e,label:t,description:n}=this,i=n?`description opens-in-new-tab`:`opens-in-new-tab`,a=t?r`<span>${t}</span>`:``;return e?r`<a
        class="label box-link-anchor"
        is="moz-support-link"
        support-page=${e}
        data-l10n-id="moz-box-link-anchor"
        aria-describedby=${i}
        >${a}</a
      >`:r`<a
      class="label box-link-anchor"
      href=${this.href}
      target="_blank"
      data-l10n-id="moz-box-link-anchor"
      aria-describedby=${i}
      >${a}</a
    >`}render(){return r`
      ${this.stylesTemplate()}
      <div class="button">
        ${this.textTemplate()} ${this.navIconTemplate()}
        ${this.opensInNewTabTemplate()}
      </div>
    `}},customElements.define(`moz-box-link`,l)})))()}export{c as n,u as t};