import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{d as n,f as r,u as i,x as a}from"./lit.all-BYVOqvrj.js";import{c as o,o as s}from"./iframe-B6GfsneT.js";import{n as c}from"./moz-button-F-bkEbbF.js";var l;function u(){return(u=e((()=>{l=new URL(`moz-message-bar-CWXsm6il.css`,import.meta.url).href+``})))()}var d=t({MozMessageBar:()=>p}),f,p;function m(){return(m=e((()=>{u(),r(),o(),c(),window.MozXULElement?.insertFTLIfNeeded(`toolkit/global/mozMessageBar.ftl`),f={info:{iconSrc:`chrome://global/skin/icons/info-filled.svg`,l10nId:`moz-message-bar-icon-info`},warning:{iconSrc:`chrome://global/skin/icons/warning.svg`,l10nId:`moz-message-bar-icon-warning`},success:{iconSrc:`chrome://global/skin/icons/check-filled.svg`,l10nId:`moz-message-bar-icon-success`},error:{iconSrc:`chrome://global/skin/icons/error.svg`,l10nId:`moz-message-bar-icon-error`},critical:{iconSrc:`chrome://global/skin/icons/error.svg`,l10nId:`moz-message-bar-icon-error`}},p=class extends s{static queries={actionsSlot:`slot[name=actions]`,actionsEl:`.actions`,closeButton:`moz-button.close`,messageEl:`.message`,supportLinkSlot:`slot[name=support-link]`,supportLinkHolder:`.link`};static properties={type:{type:String},heading:{type:String,fluent:!0},message:{type:String,fluent:!0},dismissable:{type:Boolean},supportPage:{type:String},messageL10nId:{type:String},messageL10nArgs:{type:String},role:{type:String,reflect:!0}};constructor(){super(),this.type=`info`,this.dismissable=!1,this.message=void 0,this.messageL10nId=void 0,this.messageL10nArgs=void 0,this.heading=void 0,this.supportPage=void 0,this.role=`alert`}onActionSlotchange(){let e=this.actionsSlot.assignedNodes();this.actionsEl.classList.toggle(`active`,e.length)}onLinkSlotChange(){this.messageEl.classList.toggle(`has-link-after`,!!this.supportLinkEls.length||!!this.supportPage)}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new CustomEvent(`message-bar:close`))}get supportLinkEls(){return this.supportPage?this.supportLinkHolder.children:this.supportLinkSlot.assignedElements()}supportLinkTemplate(){return this.supportPage?i`<a
        is="moz-support-link"
        support-page=${this.supportPage}
        part="support-link"
        aria-describedby="heading message"
      ></a>`:i`<slot
      name="support-link"
      @slotchange=${this.onLinkSlotChange}
    ></slot>`}iconTemplate(){let e=f[this.type];if(e){let{iconSrc:t,l10nId:n}=e;return i`
        <div class="icon-container">
          <img
            class="icon"
            src=${t}
            data-l10n-id=${n}
            data-l10n-attrs="alt"
          />
        </div>
      `}return``}headingTemplate(){return this.heading?i`<strong class="heading">${this.heading}</strong>`:``}closeButtonTemplate({size:e}={}){return this.dismissable?i`
        <moz-button
          type="icon ghost"
          class="close"
          size=${n(e)}
          data-l10n-id="moz-message-bar-close-button"
          @click=${this.dismiss}
        ></moz-button>
      `:``}render(){return i`
      <link
        rel="stylesheet"
        href="${l}"
      />
      <div class="container">
        ${this.iconTemplate()}
        <div class="content">
          <div class="text-container">
            <div class="text-content">
              ${this.headingTemplate()}
              <div>
                <slot name="message">
                  <span
                    id="message"
                    class=${a(this.supportPage,()=>`message has-link-after`,()=>`message`)}
                    data-l10n-id=${n(this.messageL10nId)}
                    data-l10n-args=${n(JSON.stringify(this.messageL10nArgs))}
                  >
                    ${this.message}
                  </span>
                </slot>
                <span class="link">${this.supportLinkTemplate()}</span>
              </div>
            </div>
          </div>
          <span class="actions">
            <slot name="actions" @slotchange=${this.onActionSlotchange}></slot>
          </span>
        </div>
        ${this.closeButtonTemplate()}
      </div>
    `}dismiss(){let e=new CustomEvent(`message-bar:user-dismissed`,{bubbles:!0,cancelable:!0});this.dispatchEvent(e),e.defaultPrevented||this.close()}close(){this.remove()}},customElements.define(`moz-message-bar`,p)})))()}export{d as n,m as t};