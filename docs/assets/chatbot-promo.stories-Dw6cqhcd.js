import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{_ as t,f as n,u as r}from"./lit.all-Co4HOUmF.js";import{c as i,o as a}from"./iframe-DUPCaqkc.js";import{t as o}from"./moz-promo-CPYFxwzh.js";var s;function c(){return(c=e((()=>{s=``+new URL(`chatbot-promo-U3k0YaGe.css`,import.meta.url).href})))()}var l,u;function d(){return(d=e((()=>{c(),n(),i(),o(),l=window.IS_STORYBOOK?Object.freeze({PRIMARY:`ChatbotPromo:PrimaryAction`,CLOSE:`ChatbotPromo:Close`,IMPRESSION:`ChatbotPromo:Impression`}):ChromeUtils.importESModule(`resource:///modules/asrouter/SidebarChatBotPromo.sys.mjs`).SIDEBAR_CHATBOT_PROMO_EVENTS,u=class extends a{static properties={message:{type:Object}};#e=!1;#t=()=>this.#n();constructor(){super(),this.message=null}updated(e){e.has(`message`)&&this.message&&!this.#e&&!this.#n()&&this.ownerDocument.addEventListener(`visibilitychange`,this.#t)}disconnectedCallback(){super.disconnectedCallback(),this.ownerDocument.removeEventListener(`visibilitychange`,this.#t)}#n(){return this.#e||this.ownerDocument.visibilityState!==`visible`?this.#e:(this.#e=!0,this.ownerDocument.removeEventListener(`visibilitychange`,this.#t),this.#r(l.IMPRESSION),!0)}#r(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}#i=()=>this.#r(l.PRIMARY);#a=()=>this.#r(l.CLOSE);render(){let e=this.message;return e?r`
      <link
        rel="stylesheet"
        href="${s}"
      />
      <div class="promo-container">
        <moz-promo
          type=${e.type??`default`}
          heading=${e.heading??``}
          message=${e.message??``}
        >
          ${e.additionalActionText||e.primaryActionText?r`<div class="chatbot-promo-footer" slot="actions">
                ${e.additionalActionText?r`<moz-button type="default" @click=${this.#a}>
                      ${e.additionalActionText}
                    </moz-button>`:t}
                ${e.primaryActionText?r`<moz-button
                      type="default"
                      @click=${this.#i}
                    >
                      ${e.primaryActionText}
                    </moz-button>`:t}
              </div>`:t}
        </moz-promo>
      </div>
    `:t}},customElements.define(`chatbot-promo`,u)})))()}var f,p,m,h,g,_;function v(){return(v=e((()=>{n(),d(),f={title:`Domain-specific UI Widgets/GenAI/Chatbot Promo`,component:`chatbot-promo`,argTypes:{type:{options:[`default`,`vibrant`],control:{type:`select`}}},parameters:{status:`in-development`,docs:{description:{component:"An asrouter-driven promotional card rendered in the chatbot sidebar footer. Receives resolved content (heading, message, action labels) via the `message` property and dispatches `ChatbotPromo:PrimaryAction`, `ChatbotPromo:Close`, and `ChatbotPromo:Impression` events. The surrounding gradient background comes from the `.promo-active` rule in chat.css and so is not reproduced here."}}}},p=({type:e,heading:t,message:n,primaryActionText:i,additionalActionText:a})=>r`
  <div style="width: 360px; padding: 16px;">
    <chatbot-promo
      .message=${{type:e,heading:t,message:n,primaryActionText:i,additionalActionText:a}}
      @ChatbotPromo:PrimaryAction=${()=>console.log(`ChatbotPromo:PrimaryAction`)}
      @ChatbotPromo:Close=${()=>console.log(`ChatbotPromo:Close`)}
      @ChatbotPromo:Impression=${()=>console.log(`ChatbotPromo:Impression`)}
    ></chatbot-promo>
  </div>
`,m=p.bind({}),m.args={type:`default`,heading:`Give your AI the full picture`,message:`In Smart Window, AI reads every page and tab you have open, not just this sidebar. Skip the copy-paste and just ask.`,primaryActionText:`Try Smart Window`,additionalActionText:`Dismiss`},h=p.bind({}),h.args={...m.args,additionalActionText:``},g=p.bind({}),g.args={...m.args,primaryActionText:``,additionalActionText:``},_=p.bind({}),_.args={...m.args,heading:`A longer heading to verify wrapping inside the promo card`,message:`A much longer message to confirm wrapping and spacing within the promo card when the sidebar is narrow and the copy runs to several lines.`}})))()}v();export{m as Default,_ as LongCopy,g as NoButtons,h as PrimaryActionOnly,f as default};