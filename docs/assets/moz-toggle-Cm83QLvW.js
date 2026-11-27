import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{d as n,f as r,u as i}from"./lit.all-Co4HOUmF.js";import{c as a,i as o}from"./iframe-17211AdQ.js";import{t as s}from"./moz-label-CyR-DKif.js";var c;function l(){return(l=e((()=>{c=``+new URL(`moz-toggle-DrS_xt7g.css`,import.meta.url).href})))()}var u=t({MozToggle:()=>d}),d;function f(){return(f=e((()=>{l(),r(),a(),s(),d=class extends o{static properties={pressed:{type:Boolean,reflect:!0}};static activatedProperty=`pressed`;get buttonEl(){return this.inputEl}constructor(){super(),this.pressed=!1}handleClick(){this.pressed=!this.pressed,this.dispatchOnUpdateComplete(new CustomEvent(`toggle`,{bubbles:!0,composed:!0}))}inputTemplate(){let{pressed:e,disabled:t,ariaLabel:r,handleClick:a}=this;return i`<button
      id="input"
      part="button"
      type="button"
      class="toggle-button"
      name=${this.name}
      value=${this.value}
      ?disabled=${t}
      aria-pressed=${e}
      aria-label=${n(r??void 0)}
      aria-describedby="description"
      aria-description=${n(this.hasDescription?void 0:this.ariaDescription)}
      accesskey=${n(this.accessKey)}
      title=${n(this.title)}
      @click=${a}
    ></button>`}inputStylesTemplate(){return i`<link
      rel="stylesheet"
      href="${c}"
    />`}},customElements.define(`moz-toggle`,d)})))()}export{u as n,f as t};