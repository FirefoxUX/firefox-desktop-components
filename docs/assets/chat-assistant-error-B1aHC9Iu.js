import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{_ as t,f as n,u as r}from"./lit.all-Co4HOUmF.js";import{c as i,o as a}from"./iframe-ChCqHcnv.js";var o;function s(){return(s=e((()=>{o=new URL(`chat-assistant-error-B18d6No8.css`,import.meta.url).href+``})))()}var c,l;function u(){return(u=e((()=>{s(),i(),n(),c={BUDGET_EXCEEDED:1,RATE_LIMIT_EXCEEDED:2,CHAT_MAX_LENGTH:3,MAX_USERS_REACHED:4,UPSTREAM_RATE_LIMIT:5,FASTLY_WAF_RATE_LIMIT:6,FASTLY_BLOCKED:7},l=class extends a{static properties={error:{type:Object},actionButton:{type:Object},errorText:{type:Object}};constructor(){super(),this.setGenericError()}willUpdate(e){e.has(`error`)&&this.getErrorInformation()}openNewChat(){let e=new CustomEvent(`aiChatError:new-chat`,{bubbles:!0,composed:!0});this.dispatchEvent(e)}openAccountSignIn(){let e=new CustomEvent(`aiChatError:sign-in`,{bubbles:!0,composed:!0});this.dispatchEvent(e)}retryAssistantMessage(){let e=new CustomEvent(`aiChatError:retry-message`,{bubbles:!0,composed:!0});this.dispatchEvent(e)}setGenericError(){this.errorText={header:`smartwindow-assistant-error-generic-header`},this.actionButton={label:`smartwindow-retry-btn`,action:this.retryAssistantMessage.bind(this)}}getErrorInformation(){if(this.error){if(this.error.clientReason===`fxaTokenUnavailable`)this.errorText={header:`smartwindow-assistant-error-account-header`},this.actionButton={label:`smartwindow-signin-btn`,action:this.openAccountSignIn.bind(this)};else switch(this.error.error){case c.CHAT_MAX_LENGTH:this.errorText={header:`smartwindow-assistant-error-max-length-header`},this.actionButton={label:`smartwindow-clear-btn`,action:this.openNewChat.bind(this)};break;case c.RATE_LIMIT_EXCEEDED:case c.UPSTREAM_RATE_LIMIT:case c.FASTLY_WAF_RATE_LIMIT:this.errorText={header:`smartwindow-assistant-error-many-requests-header`},this.actionButton=null;break;case c.BUDGET_EXCEEDED:this.errorText={header:`smartwindow-assistant-error-budget-header`,body:`smartwindow-assistant-error-budget-body`},this.actionButton=null;break;case c.MAX_USERS_REACHED:this.errorText={header:`smartwindow-assistant-error-capacity-header`},this.actionButton=null;break;case c.FASTLY_BLOCKED:this.errorText={header:`smartwindow-assistant-error-request-blocked-header`},this.actionButton=null;break;default:this.setGenericError(),this.error.httpStatus&&(this.errorText={header:`smartwindow-assistant-error-http-header`,args:{status:this.error.httpStatus}})}}}render(){return r`
      <link
        rel="stylesheet"
        href="${o}"
      />
      <div class="chat-assistant-error">
        <h3
          class="chat-assistant-error__header"
          data-l10n-id=${this.errorText?.header}
          data-l10n-args=${this.errorText?.args?JSON.stringify(this.errorText.args):t}
        ></h3>
        ${this.errorText?.body?r`<p
              class="chat-assistant-error__body"
              data-l10n-id=${this.errorText?.body}
            ></p>`:t}
        ${this.actionButton?r`<moz-button
              class="chat-assistant-error__button"
              data-l10n-id=${this.actionButton?.label}
              size="small"
              type="ghost"
              @click=${this.actionButton?.action}
            ></moz-button>`:t}
      </div>
    `}},customElements.define(`chat-assistant-error`,l)})))()}export{u as t};