import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{_ as t,f as n,i as r,u as i}from"./lit.all-Co4HOUmF.js";import{c as a,o}from"./iframe-DoVFImma.js";import{n as s}from"./moz-button-Cg-Kw8g5.js";var c;function l(){return(l=e((()=>{c=``+new URL(`smartwindow-prompts-jHZ-_TA8.css`,import.meta.url).href})))()}var u;function d(){return(d=e((()=>{u=``+new URL(`smartwindow-digest-prompt-DLC3Qji7.css`,import.meta.url).href})))()}var f,p;function m(){return(m=e((()=>{n(),a(),s(),f={},window.IS_STORYBOOK||ChromeUtils.defineESModuleGetters(f,{DIGEST_HIGHLIGHT_CLEARED:`moz-src:///browser/components/aiwindow/ui/modules/DigestActivity.sys.mjs`,DigestActivity:`moz-src:///browser/components/aiwindow/ui/modules/DigestActivity.sys.mjs`,DigestManager:`moz-src:///browser/components/aiwindow/models/memories/digests/DigestManager.sys.mjs`}),p=class extends o{static properties={prompt:{type:Object},highlightExpiresAt:{type:Number},highlighted:{state:!0}};#e=null;constructor(){super(),this.prompt=null,this.highlightExpiresAt=0,this.highlighted=!1}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),window.IS_STORYBOOK||(Services.obs.addObserver(this.#t,f.DIGEST_HIGHLIGHT_CLEARED),window.addEventListener(`unload`,()=>this.remove(),{once:!0}))}disconnectedCallback(){super.disconnectedCallback(),window.IS_STORYBOOK||Services.obs.removeObserver(this.#t,f.DIGEST_HIGHLIGHT_CLEARED),this.#r()}#t=(e,t,n)=>{n===this.prompt?.id&&(this.#r(),this.highlighted=!1)};willUpdate(e){e.has(`highlightExpiresAt`)&&this.#n()}#n(){this.#r();let e=this.highlightExpiresAt-Date.now();this.highlighted=e>0,this.highlighted&&(this.#e=setTimeout(()=>{this.highlighted=!1},e))}#r(){clearTimeout(this.#e),this.#e=null}#i(e,t){this.dispatchEvent(new CustomEvent(`SmartWindowPrompt:${e}`,{detail:t,bubbles:!0,composed:!0}))}#a(){this.#r(),this.highlighted=!1;let{id:e,title:t}=this.prompt;f.DigestActivity?.clearHighlight(e),this.#i(`prompt-selected`,{text:t,type:`digest`,id:e})}async#o(e){e.stopPropagation();let{id:t}=this.prompt;this.#i(`prompt-dismissed`,{type:`digest`,id:t}),f.DigestActivity?.dismiss(t);try{await f.DigestManager?.disableDigest(t)}catch(e){console.error(`Failed to disable digest:`,e)}}#s(e){e.currentTarget.classList.add(`has-interacted`)}render(){if(!this.prompt)return i``;let{title:e}=this.prompt;return i`
      <span class="sw-prompt">
        <moz-button
          class=${r({"sw-prompt-button":!0,"sw-digest-highlighted":this.highlighted})}
          @click=${this.#a}
          @mouseenter=${this.#s}
          @focusin=${this.#s}
          aria-label=${e}
        >
          ${e}
        </moz-button>
        <button
          class="sw-prompt-dismiss"
          @click=${this.#o}
          data-l10n-id="aiwindow-starter-digest-dismiss"
          data-l10n-args=${JSON.stringify({text:e})}
        >
          <img
            class="sw-prompt-dismiss-icon"
            src="chrome://global/skin/icons/delete.svg"
            alt=""
          />
        </button>
      </span>
    `}},customElements.define(`smartwindow-digest-prompt`,p)})))()}var h,g;function _(){return(_=e((()=>{l(),d(),n(),a(),s(),m(),h=3,g=class extends o{static properties={prompts:{type:Array},mode:{type:String,reflect:!0},canScrollStart:{state:!0},canScrollEnd:{state:!0}};#e=null;#t=null;constructor(){super(),this.prompts=[],this.mode=`fullpage`,this.canScrollStart=!1,this.canScrollEnd=!1}disconnectedCallback(){super.disconnectedCallback(),this.#e?.disconnect(),this.#e=null,this.#t=null}updated(e){let t=this.#n;t&&t!==this.#t&&(this.#e?.disconnect(),this.#e??=new ResizeObserver(()=>this.#r()),this.#e.observe(t),this.#t=t),(e.has(`prompts`)||e.has(`mode`))&&this.#r()}get#n(){return this.renderRoot.querySelector(`.sw-prompts-container`)}#r(){let e=this.#n;if(this.mode!==`fullpage`||!e){this.canScrollStart=!1,this.canScrollEnd=!1;return}let t=e.scrollWidth-e.clientWidth;if(t<=1){this.canScrollStart=!1,this.canScrollEnd=!1;return}let n=Math.abs(e.scrollLeft);this.canScrollStart=n>1,this.canScrollEnd=n<t-1}#i(e){let t=this.#n;if(!t)return;let n=Array.from(t.children);if(!n.length)return;let r=this.matches(`:dir(rtl)`),i=t.getBoundingClientRect(),a=r?i.right:i.left,o=e=>r?e.right<=a+1:e.left>=a-1,s=n.findIndex(e=>o(e.getBoundingClientRect()));n[Math.min(Math.max((s===-1?0:s)+(e?1:-1),0),n.length-1)].scrollIntoView({inline:`start`,block:`nearest`})}#a(e){let{text:t,type:n}=e,r=n===`resume`?{text:t,type:n,memory:e.memory,content:e.content}:{text:t,type:n},i=new CustomEvent(`SmartWindowPrompt:prompt-selected`,{detail:r,bubbles:!0,composed:!0});this.dispatchEvent(i)}#o(e){e.currentTarget.classList.add(`has-interacted`)}#s(e,t){e.stopPropagation(),this.dispatchEvent(new CustomEvent(`SmartWindowPrompt:prompt-dismissed`,{detail:{memory:t.memory},bubbles:!0,composed:!0}))}#c(e){if(!e?.length)return t;let n=e.length>h,r=e.slice(0,n?2:h),a=e.length-r.length;return i`
      <span class="sw-prompt-favicons">
        ${r.map(e=>i`
            <img
              class="sw-prompt-favicon"
              src=${e.iconSrc}
              alt=""
              @error=${e=>{e.target.src=`chrome://global/skin/icons/defaultFavicon.svg`}}
            />
          `)}
        ${n?i`<span class="sw-prompt-favicon-overflow"
              >+${a}</span
            >`:t}
      </span>
    `}#l(){return i`
      <span class="sw-prompt-skeleton" aria-hidden="true">
        <span class="sw-prompt-skeleton-text"></span>
      </span>
    `}#u(){return this.mode===`fullpage`?i`
      ${this.canScrollStart?i`
            <moz-button
              class="sw-prompts-scroll-button sw-prompts-scroll-start"
              type="ghost icon"
              iconsrc="chrome://global/skin/icons/arrow-left.svg"
              data-l10n-id="aiwindow-starter-scroll-start"
              data-l10n-attrs="tooltiptext,aria-label"
              @click=${()=>this.#i(!1)}
            ></moz-button>
          `:t}
      ${this.canScrollEnd?i`
            <moz-button
              class="sw-prompts-scroll-button sw-prompts-scroll-end"
              type="ghost icon"
              iconsrc="chrome://global/skin/icons/arrow-right.svg"
              data-l10n-id="aiwindow-starter-scroll-end"
              data-l10n-attrs="tooltiptext,aria-label"
              @click=${()=>this.#i(!0)}
            ></moz-button>
          `:t}
    `:t}#d(e){let t=i`
      <moz-button
        class="sw-prompt-button"
        @click=${()=>this.#a(e)}
        @mouseenter=${this.#o}
        @focusin=${this.#o}
        aria-label=${e.text}
      >
        ${this.#c(e.previewIcons)}${e.text}
      </moz-button>
    `;return e.type!==`resume`||this.mode!==`fullpage`?t:i`
      <span class="sw-prompt">
        ${t}
        <button
          class="sw-prompt-dismiss"
          @click=${t=>this.#s(t,e)}
          data-l10n-id="aiwindow-starter-dismiss"
          data-l10n-args=${JSON.stringify({text:e.text})}
        >
          <img
            class="sw-prompt-dismiss-icon"
            src="chrome://global/skin/icons/close.svg"
            alt=""
          />
        </button>
      </span>
    `}#f(e){return i`
      <smartwindow-digest-prompt
        .prompt=${e}
        .highlightExpiresAt=${e.highlightExpiresAt??0}
      ></smartwindow-digest-prompt>
    `}#p(e){switch(e.type){case`skeleton`:return this.#l();case`digest`:return this.#f(e);default:return this.#d(e)}}render(){return this.prompts.length?i`
      <link
        rel="stylesheet"
        href="${c}"
      />
      <link
        rel="stylesheet"
        href="${u}"
      />
      <div class="sw-prompts-wrapper">
        <!-- TODO : TODO a11y translations? -->
        <div
          class=${r({"sw-prompts-container":!0,"can-scroll-start":this.canScrollStart,"can-scroll-end":this.canScrollEnd})}
          role="group"
          @scroll=${()=>this.#r()}
        >
          ${this.prompts.map(e=>this.#p(e))}
        </div>
        ${this.#u()}
      </div>
    `:i``}},customElements.define(`smartwindow-prompts`,g)})))()}export{_ as t};