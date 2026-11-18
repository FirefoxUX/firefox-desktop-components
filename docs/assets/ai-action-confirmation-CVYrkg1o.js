import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{_ as t,a as n,f as r,u as i,v as a}from"./lit.all-Co4HOUmF.js";import{c as o,o as s}from"./iframe-DP8hlEO7.js";import{n as c}from"./moz-button-DllAM7jW.js";import{n as l,t as u}from"./_firefox-storybook_moz-css-url_148711a479dee532ce5ede6e8b519cd8ae800aaacb07dce2d4de20ae21db4c1b-Cxr5UeKR.js";var d,f;function p(){return(p=e((()=>{l(),r(),o(),c(),d=`chrome://global/skin/icons/defaultFavicon.svg`,f=class extends s{#e=n();#t=null;#n=null;#r=null;static properties={labelL10nId:{type:String},labelL10nArgs:{type:Object},tabs:{type:Array},canUndo:{type:Boolean},isExpanded:{type:Boolean,attribute:`is-expanded`,reflect:!0}};constructor(){super(),this.labelL10nId=null,this.labelL10nArgs=null,this.tabs=[],this.canUndo=!1,this.isExpanded=!1}#i(){this.dispatchEvent(new CustomEvent(`action-confirmation-undo`,{bubbles:!0,composed:!0}))}#a(){this.tabs.length&&(this.isExpanded=!this.isExpanded,this.dispatchEvent(new CustomEvent(`action-confirmation-toggle`,{detail:{isExpanded:this.isExpanded},bubbles:!0,composed:!0})))}#o(e,t){e.preventDefault();let{shiftKey:n,metaKey:r,ctrlKey:i,altKey:a,button:o}=e,s=n||r||i||a||o!==0;this.dispatchEvent(new CustomEvent(`AIChatContent:OpenLink`,{bubbles:!0,composed:!0,detail:{url:t.url,preferSwitchToTab:!s,shiftKey:n,metaKey:r,ctrlKey:i,altKey:a,button:o}}))}#s=()=>{let e=this.#e.value,t=e?.parentElement;if(!e||!t)return;let n=e.scrollHeight-e.clientHeight>1;n!==t.hasAttribute(`data-overflowing`)&&t.toggleAttribute(`data-overflowing`,n),this.#l()};#c=()=>{CSS.supports(`animation-timeline`,`scroll()`)||this.#l()};#l(){CSS.supports(`animation-timeline`,`scroll()`)||(this.#r||=requestAnimationFrame(()=>{this.#r=null;let e=this.#e.value,t=e?.parentElement;if(!e||!t)return;let{scrollTop:n,scrollHeight:r,clientHeight:i}=e,a=r-i,o=a>0?n/a:0;t.style.setProperty(`--action-confirmation-scroll-progress`,o.toFixed(3))}))}#u(e){return i`
      <li>
        <a
          class="action-confirmation-tab"
          href=${e.url}
          title=${e.url}
          @click=${t=>this.#o(t,e)}
        >
          <img
            class="action-confirmation-tab-icon"
            alt=""
            src=${e.iconSrc||d}
          />
          <span class="action-confirmation-tab-label">${e.title}</span>
        </a>
      </li>
    `}updated(){let e=this.#e.value??null;e!==this.#n&&(this.#t||=new ResizeObserver(()=>this.#s()),this.#n&&(this.#t.unobserve(this.#n),this.#n.removeEventListener(`scroll`,this.#c)),e&&(this.#t.observe(e),e.addEventListener(`scroll`,this.#c)),this.#n=e)}disconnectedCallback(){super.disconnectedCallback(),this.#t?.disconnect(),this.#t=null,this.#n?.removeEventListener(`scroll`,this.#c),this.#n=null,this.#r&&=(cancelAnimationFrame(this.#r),null)}render(){let e=!!this.tabs.length;return i`
      <link
        rel="stylesheet"
        href="${u}"
      />
      <div class="action-confirmation-wrapper">
        <div class="action-confirmation-header">
          <button
            type="button"
            class="action-confirmation-summary"
            ?disabled=${!e}
            aria-expanded=${e?this.isExpanded:t}
            aria-controls=${e&&this.isExpanded?`action-confirmation-tabs`:t}
            @click=${this.#a}
          >
            <span class="action-confirmation-icon" aria-hidden="true"></span>
            <span
              class="action-confirmation-label"
              data-l10n-id=${this.labelL10nId||t}
              data-l10n-args=${this.labelL10nArgs?JSON.stringify(this.labelL10nArgs):t}
            ></span>
          </button>
          ${this.canUndo?i`
                <moz-button
                  class="action-confirmation-undo"
                  type="ghost"
                  @click=${this.#i}
                  data-l10n-id="smartwindow-nl-undo-button"
                ></moz-button>
              `:t}
        </div>
        ${e&&this.isExpanded?i`
              <div class="action-confirmation-scroller">
                <ul
                  id="action-confirmation-tabs"
                  class="action-confirmation-tabs"
                  ${a(this.#e)}
                >
                  ${this.tabs.map(e=>this.#u(e))}
                </ul>
              </div>
            `:t}
      </div>
    `}},customElements.define(`ai-action-confirmation`,f)})))()}export{p as t};