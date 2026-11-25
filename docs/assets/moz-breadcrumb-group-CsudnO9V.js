import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{f as n,u as r}from"./lit.all-Co4HOUmF.js";import{c as i,o as a}from"./iframe-DbtNkzFn.js";var o;function s(){return(s=e((()=>{o=``+new URL(`moz-breadcrumb-Cb7lRLCG.css`,import.meta.url).href})))()}var c;function l(){return(l=e((()=>{c=``+new URL(`moz-breadcrumb-group-BuWz-N_M.css`,import.meta.url).href})))()}var u=t({MozBreadcrumb:()=>d,MozBreadcrumbGroup:()=>f}),d,f;function p(){return(p=e((()=>{s(),l(),n(),i(),window.MozXULElement?.insertFTLIfNeeded(`toolkit/global/mozBreadcrumbGroup.ftl`),d=class extends a{static properties={href:{type:String},label:{type:String,fluent:!0},heading:{type:String,fluent:!0},ariaCurrent:{attribute:`aria-current`,type:String}};constructor(){super(),this.href=``,this.label=``,this.heading=``,this.ariaCurrent=void 0}render(){let e=this.label||this.heading||r`<slot></slot>`;return r`
      <link
        rel="stylesheet"
        href="${o}"
      />
      ${this.ariaCurrent?e:r`<a href=${this.href}>${e}</a>`}
    `}},customElements.define(`moz-breadcrumb`,d),f=class extends a{#e;#t(e){for(let t of e)t.type===`childList`&&this.requestUpdate()}get breadcrumbs(){let e=this.querySelectorAll(`moz-breadcrumb`);return Array.from(e)}setupBreadcrumbs(){let{breadcrumbs:e}=this;return e.map((t,n)=>(t.setAttribute(`slot`,n+``),n===e.length-1&&t.setAttribute(`aria-current`,`page`),t))}update(){super.update(),this.setupBreadcrumbs()}firstUpdated(){this.#e||(this.#e=new MutationObserver((e,t)=>this.#t(e,t)),this.#e.observe(this,{childList:!0}))}disconnectedCallback(){this.#e&&=(this.#e.disconnect(),void 0),super.disconnectedCallback()}render(){return r`
      <link
        rel="stylesheet"
        href="${c}"
      />
      <nav data-l10n-id="moz-breadcrumb-group-nav">
        <ol>
          ${this.breadcrumbs.map((e,t)=>r`<li>
              <slot name=${t}></slot>
            </li>`)}
        </ol>
      </nav>
    `}},customElements.define(`moz-breadcrumb-group`,f)})))()}export{u as n,p as t};