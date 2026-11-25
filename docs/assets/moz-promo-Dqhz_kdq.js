import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{f as n,u as r}from"./lit.all-Co4HOUmF.js";import{c as i,o as a}from"./iframe-DbtNkzFn.js";import{n as o}from"./moz-button-DV-w2-fz.js";var s;function c(){return(c=e((()=>{s=``+new URL(`moz-promo-CtRE63uz.css`,import.meta.url).href})))()}var l=t({MozPromo:()=>u}),u;function d(){return(d=e((()=>{c(),n(),i(),o(),window.MozXULElement?.insertFTLIfNeeded(`toolkit/global/mozPromo.ftl`),u=class extends a{static queries={actionsSlot:`slot[name=actions]`,supportLinkSlot:`slot[name=support-link]`,imageSlot:`slot[name=image]`,actionsSupportWrapper:`.actions-and-support-link-wrapper`,closeButton:`moz-button.close`};static properties={type:{type:String,reflect:!0},heading:{type:String,fluent:!0},message:{type:String,fluent:!0},imageSrc:{type:String,reflect:!0},imageWidth:{type:String,reflect:!0},imageAlignment:{type:String,reflect:!0},imageDisplay:{type:String,reflect:!0},dismissable:{type:Boolean,reflect:!0}};constructor(){super(),this.type=`default`,this.heading=void 0,this.message=void 0,this.imageSrc=void 0,this.imageWidth=`small`,this.imageAlignment=`start`,this.imageDisplay=`padded`,this.dismissable=!1}handleSlotChange(){let e=this.actionsSlot.assignedNodes().length,t=this.supportLinkSlot.assignedNodes().length;this.actionsSupportWrapper.classList.toggle(`active`,e||t)}headingTemplate(){return this.heading?r`<h2 class="heading heading-medium">${this.heading}</h2>`:``}imageTemplate(){return this.imageSrc?r`
        <div class="image-container"><img src=${this.imageSrc} alt="" /></div>
      `:r`<slot name="image"></slot>`}closeButtonTemplate(){return this.dismissable?r`
        <moz-button
          class="close"
          type="icon ghost"
          iconsrc="chrome://global/skin/icons/close.svg"
          data-l10n-id="moz-promo-close-button"
          @click=${this.dismiss}
        ></moz-button>
      `:``}render(){let e=this.imageAlignment==`start`;return r` <link
        rel="stylesheet"
        href="${s}"
      />
      <div class="container">
        ${e?this.imageTemplate():``}
        <div class="text-container">
          ${this.headingTemplate()}
          <p class="message">
            ${this.message}<span class="actions-and-support-link-wrapper">
              <slot name="actions" @slotchange=${this.handleSlotChange}></slot>
              <slot
                name="support-link"
                @slotchange=${this.handleSlotChange}
              ></slot>
            </span>
          </p>
        </div>
        ${e?``:this.imageTemplate()}
        ${this.closeButtonTemplate()}
      </div>`}dismiss(){let e=new CustomEvent(`promo:user-dismissed`,{bubbles:!0,cancelable:!0});this.dispatchEvent(e),e.defaultPrevented||this.close()}close(){this.remove()}},customElements.define(`moz-promo`,u)})))()}export{l as n,d as t};