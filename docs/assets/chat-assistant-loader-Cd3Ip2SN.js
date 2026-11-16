import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,g as n,u as r}from"./lit.all-BYVOqvrj.js";import{c as i,o as a}from"./iframe-B6GfsneT.js";var o;function s(){return(s=e((()=>{o=new URL(`chat-assistant-loader-B6qNMWuV.css`,import.meta.url).href+``})))()}var c;function l(){return(l=e((()=>{s(),i(),t(),c=class extends a{static properties={mode:{type:String}};constructor(){super(),this.mode=`default`}render(){let e,t=n;switch(this.mode){case`search`:e=r`
          <span class="chat-assistant-loader__spinner"></span>
        `,t=r`
          <p
            class="chat-assistant-loader__text"
            data-l10n-id="smartwindow-search-loader-text"
          ></p>
        `;break;case`nl`:e=r`
          <span class="chat-assistant-loader__nl-icon"></span>
        `,t=r`
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
        data-l10n-id=${this.mode==="default"?`smartwindow-loading-assistant-response`:n}
        data-l10n-attrs=${this.mode==="default"?`aria-label`:n}
      >
        ${e}${t}
      </div>
    `}},customElements.define(`chat-assistant-loader`,c)})))()}export{l as t};