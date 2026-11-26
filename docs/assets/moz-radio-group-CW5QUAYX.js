import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{d as n,f as r,u as i}from"./lit.all-Co4HOUmF.js";import{c as a,i as o}from"./iframe-DUPCaqkc.js";import{n as s,r as c,t as l}from"./lit-select-control-7_fV5Ty6.js";var u=t({MozRadio:()=>f,MozRadioGroup:()=>d}),d,f;function p(){return(p=e((()=>{r(),c(),a(),d=class extends l{static childElementName=`moz-radio`;static properties={parentDisabled:{type:Boolean,state:!0}};constructor(){super(),this.parentDisabled=void 0,this.orientation=`vertical`}},customElements.define(`moz-radio-group`,d),f=class extends s(o){static activatedProperty=`checked`;get isDisabled(){return super.isDisabled||this.parentDisabled||this.controller.parentDisabled}inputTemplate(){return i`<input
      type="radio"
      id="input"
      .value=${this.value}
      name=${this.name}
      .checked=${this.checked}
      aria-checked=${this.checked}
      tabindex=${this.itemTabIndex}
      ?disabled=${this.isDisabled}
      accesskey=${n(this.accessKey)}
      aria-label=${n(this.ariaLabel??void 0)}
      aria-describedby="description"
      aria-description=${n(this.hasDescription?void 0:this.ariaDescription)}
      title=${n(this.title)}
      @click=${this.handleClick}
      @change=${this.handleChange}
    />`}},customElements.define(`moz-radio`,f)})))()}export{u as n,p as t};