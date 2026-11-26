import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{_ as t,f as n,u as r}from"./lit.all-Co4HOUmF.js";import{c as i,o as a}from"./iframe-DUPCaqkc.js";var o;function s(){return(s=e((()=>{o=``+new URL(`chat-assistant-loader-B1MpJCEr.css`,import.meta.url).href})))()}var c;function l(){return(l=e((()=>{s(),i(),n(),c=class extends a{static properties={mode:{type:String}};constructor(){super(),this.mode=`default`}render(){let e,n=t;switch(this.mode){case`search`:e=r`
          <span class="chat-assistant-loader__spinner"></span>
        `,n=r`
          <p
            class="chat-assistant-loader__text"
            data-l10n-id="smartwindow-search-loader-text"
          ></p>
        `;break;case`nl`:e=r`
          <span class="chat-assistant-loader__nl-icon"></span>
        `,n=r`
          <p
            class="chat-assistant-loader__nl-text"
            data-l10n-id="smartwindow-nl-thinking"
          ></p>
        `;break;default:e=r`
          <span class="chat-assistant-loader__spinner"></span>
        `}return r`
      <link
        rel="stylesheet"
        href="${o}"
      />
      <div
        class="chat-assistant-loader"
        role="status"
        data-l10n-id=${this.mode==="default"?`smartwindow-loading-assistant-response`:t}
        data-l10n-attrs=${this.mode==="default"?`aria-label`:t}
      >
        ${e}${n}
      </div>
    `}},customElements.define(`chat-assistant-loader`,c)})))()}export{l as t};