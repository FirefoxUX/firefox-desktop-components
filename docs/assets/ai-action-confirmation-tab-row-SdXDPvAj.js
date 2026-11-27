import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{_ as t,f as n,u as r}from"./lit.all-Co4HOUmF.js";import{c as i,o as a}from"./iframe-17211AdQ.js";var o;function s(){return(s=e((()=>{o=``+new URL(`ai-action-confirmation-tab-row-Djd3aLfl.css`,import.meta.url).href})))()}var c,l;function u(){return(u=e((()=>{s(),n(),i(),c=`chrome://global/skin/icons/defaultFavicon.svg`,l=class extends a{static properties={tab:{type:Object}};constructor(){super(),this.tab=null}#e(e){e.preventDefault();let{shiftKey:t,metaKey:n,ctrlKey:r,altKey:i,button:a}=e,o=t||n||r||i||a!==0;this.dispatchEvent(new CustomEvent(`AIChatContent:OpenLink`,{bubbles:!0,composed:!0,detail:{url:this.tab.url,preferSwitchToTab:!o,shiftKey:t,metaKey:n,ctrlKey:r,altKey:i,button:a}}))}render(){return this.tab?r`
      <link
        rel="stylesheet"
        href="${o}"
      />
      <a
        class="tab-row"
        href=${this.tab.url}
        title=${this.tab.url}
        @click=${this.#e}
      >
        <img
          class="tab-row-icon"
          alt=""
          src=${this.tab.iconSrc||c}
        />
        <span class="tab-row-label">${this.tab.title}</span>
      </a>
    `:t}},customElements.define(`ai-action-confirmation-tab-row`,l)})))()}export{u as t};