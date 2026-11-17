import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{_ as t,f as n,u as r}from"./lit.all-Co4HOUmF.js";import{c as i,o as a}from"./iframe-ChCqHcnv.js";import{t as o}from"./moz-promo-DGPqXCNW.js";var s;function c(){return(c=e((()=>{s=new URL(`smartwindow-promo-CTmxO4UH.css`,import.meta.url).href+``})))()}var l,u;function d(){return(d=e((()=>{c(),n(),i(),o(),l=window.IS_STORYBOOK?Object.freeze({PRIMARY:`SmartWindowPromo:PrimaryAction`,CLOSE:`SmartWindowPromo:Close`,DISMISS:`SmartWindowPromo:Dismiss`,IMPRESSION:`SmartWindowPromo:Impression`}):ChromeUtils.importESModule(`resource:///modules/asrouter/SmartWindowNewTabPromo.sys.mjs`).SMARTWINDOW_PROMO_EVENTS,u=class extends a{static properties={message:{type:Object}};#e=!1;#t=()=>this.#n();constructor(){super(),this.message=null}connectedCallback(){super.connectedCallback(),this.#n()||this.ownerDocument.addEventListener(`visibilitychange`,this.#t)}disconnectedCallback(){super.disconnectedCallback(),this.ownerDocument.removeEventListener(`visibilitychange`,this.#t)}#n(){return this.#e||this.ownerDocument.visibilityState!==`visible`?this.#e:(this.#e=!0,this.ownerDocument.removeEventListener(`visibilitychange`,this.#t),this.#r(l.IMPRESSION),!0)}#r(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}#i=()=>this.#r(l.PRIMARY);#a=()=>this.#r(l.CLOSE);#o=e=>{e.preventDefault(),this.#r(l.DISMISS)};render(){let e=this.message??{},n=e.dismissable??!1;return r`
      <link
        rel="stylesheet"
        href="${s}"
      />
      <moz-promo
        type=${e.type??`vibrant`}
        heading=${e.heading??``}
        message=${e.message??``}
        imagesrc=${e.imageSrc??``}
        imagealignment=${e.imageAlignment??`start`}
        imagewidth=${e.imageWidth??`small`}
        imagedisplay=${e.imageDisplay??`padded`}
        ?dismissable=${n}
        @promo:user-dismissed=${this.#o}
      >
        ${e.secondaryActionText?r`<moz-button
              slot="actions"
              type="ghost"
              @click=${this.#a}
            >
              ${e.secondaryActionText}
            </moz-button>`:t}
        ${e.primaryActionText?r`<moz-button
              slot="actions"
              type="primary"
              @click=${this.#i}
            >
              ${e.primaryActionText}
            </moz-button>`:t}
      </moz-promo>
    `}},customElements.define(`smartwindow-promo`,u)})))()}var f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{n(),d(),f={title:`Domain-specific UI Widgets/AI Window/Smartwindow Promo`,component:`smartwindow-promo`,argTypes:{type:{options:[`default`,`vibrant`],control:{type:`select`}},imageAlignment:{options:[`start`,`end`,`center`],control:{type:`select`}},imageWidth:{options:[`small`,`large`],control:{type:`radio`}},imageDisplay:{options:[`cover`,`padded`],control:{type:`radio`}},dismissable:{control:{type:`boolean`}}},parameters:{status:`in-development`,docs:{description:{component:"An asrouter-driven promotional card rendered inside the AI window. Receives resolved content (heading, message, image, action labels) via the `message` property and dispatches `SmartWindowPromo:PrimaryAction`, `SmartWindowPromo:Close`, and `SmartWindowPromo:Impression` events."}}}},p=({type:e,heading:t,message:n,imageSrc:i,imageAlignment:a,imageWidth:o,imageDisplay:s,primaryActionText:c,secondaryActionText:l,dismissable:u})=>r`
  <div style="width: 360px; padding: 16px;">
    <smartwindow-promo
      .message=${{type:e,heading:t,message:n,imageSrc:i,imageAlignment:a,imageWidth:o,imageDisplay:s,primaryActionText:c,secondaryActionText:l,dismissable:u}}
      @SmartWindowPromo:PrimaryAction=${()=>console.log(`SmartWindowPromo:PrimaryAction`)}
      @SmartWindowPromo:Close=${()=>console.log(`SmartWindowPromo:Close`)}
      @SmartWindowPromo:Dismiss=${()=>console.log(`SmartWindowPromo:Dismiss`)}
      @SmartWindowPromo:Impression=${()=>console.log(`SmartWindowPromo:Impression`)}
    ></smartwindow-promo>
  </div>
`,m=p.bind({}),m.args={type:`vibrant`,heading:`Make Smart Window your default?`,message:`Firefox will open in Smart Window every time.`,imageSrc:`chrome://browser/content/aiwindow/assets/smart-window-promo-default.svg`,imageAlignment:`start`,imageWidth:`small`,imageDisplay:`padded`,primaryActionText:`Set as default`,secondaryActionText:`Not now`,dismissable:!0},h=p.bind({}),h.args={...m.args,secondaryActionText:``},g=p.bind({}),g.args={...m.args,dismissable:!1},_=p.bind({}),_.args={...m.args,imageSrc:``},v=p.bind({}),v.args={...m.args,type:`default`},y=p.bind({}),y.args={...m.args,heading:`A longer heading to verify wrapping inside the promo card`,message:`A much longer message to confirm wrapping and spacing within the promo card across different image sizes and alignments.`}})))()}b();export{m as Default,v as DefaultType,y as LongCopy,g as NoDismissButton,_ as NoImage,h as PrimaryActionOnly,f as default};