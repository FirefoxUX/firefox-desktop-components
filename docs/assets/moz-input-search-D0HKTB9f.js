import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{d as n,f as r,u as i}from"./lit.all-Co4HOUmF.js";import{n as a,t as o}from"./moz-input-text-MZOOll4H.js";var s;function c(){return(c=e((()=>{s=``+new URL(`moz-input-search-Cj-R1qJY.css`,import.meta.url).href})))()}var l=t({MozInputSearch:()=>u}),u;function d(){return(d=e((()=>{c(),r(),a(),u=class e extends o{static#e=500;#t=null;#n(){this.#t&&clearTimeout(this.#t),this.#t=null}#r(){this.dispatchEvent(new CustomEvent(`MozInputSearch:search`,{bubbles:!0,composed:!0,detail:{query:this.value}}))}disconnectedCallback(){super.disconnectedCallback(),this.#n()}inputStylesTemplate(){return i`<link
      rel="stylesheet"
      href="${s}"
    />`}handleInput(t){super.handleInput(t),this.#n(),this.#t=setTimeout(()=>{this.#r()},e.#e)}clear(){this.#n(),this.value&&(this.value=this.inputEl.value=``,this.#r())}#i(){return this.iconSrc===void 0||!!this.iconSrc}inputTemplate(){return i`
      <input
        id="input"
        class=${this.#i()?`with-icon`:``}
        type="search"
        name=${this.name}
        .value=${this.value}
        ?disabled=${this.disabled||this.parentDisabled}
        ?required=${this.required}
        accesskey=${n(this.accessKey)}
        placeholder=${n(this.placeholder)}
        aria-label=${n(this.ariaLabel??void 0)}
        aria-describedby="description"
        aria-description=${n(this.hasDescription?void 0:this.ariaDescription)}
        title=${n(this.title)}
        @input=${this.handleInput}
        @change=${this.redispatchEvent}
      />
    `}},customElements.define(`moz-input-search`,u)})))()}export{l as n,d as t};