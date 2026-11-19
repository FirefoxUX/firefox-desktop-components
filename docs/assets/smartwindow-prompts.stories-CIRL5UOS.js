import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{_ as t,f as n,i as r,u as i}from"./lit.all-Co4HOUmF.js";import{c as a,o}from"./iframe-CEh6YfCk.js";import{n as s}from"./moz-button-yx2H1mPL.js";var c;function l(){return(l=e((()=>{c=new URL(`smartwindow-prompts-CkmVvBii.css`,import.meta.url).href+``})))()}var u,d;function f(){return(f=e((()=>{l(),n(),a(),s(),u=3,d=class extends o{static properties={prompts:{type:Array},mode:{type:String,reflect:!0},canScrollStart:{state:!0},canScrollEnd:{state:!0}};#e=null;#t=null;constructor(){super(),this.prompts=[],this.mode=`fullpage`,this.canScrollStart=!1,this.canScrollEnd=!1}disconnectedCallback(){super.disconnectedCallback(),this.#e?.disconnect(),this.#e=null,this.#t=null}updated(e){let t=this.#n;t&&t!==this.#t&&(this.#e?.disconnect(),this.#e??=new ResizeObserver(()=>this.#r()),this.#e.observe(t),this.#t=t),(e.has(`prompts`)||e.has(`mode`))&&this.#r()}get#n(){return this.renderRoot.querySelector(`.sw-prompts-container`)}#r(){let e=this.#n;if(this.mode!==`fullpage`||!e){this.canScrollStart=!1,this.canScrollEnd=!1;return}let t=e.scrollWidth-e.clientWidth;if(t<=1){this.canScrollStart=!1,this.canScrollEnd=!1;return}let n=Math.abs(e.scrollLeft);this.canScrollStart=n>1,this.canScrollEnd=n<t-1}#i(e){let t=this.#n;if(!t)return;let n=Array.from(t.children);if(!n.length)return;let r=this.matches(`:dir(rtl)`),i=t.getBoundingClientRect(),a=r?i.right:i.left,o=e=>r?e.right<=a+1:e.left>=a-1,s=n.findIndex(e=>o(e.getBoundingClientRect()));n[Math.min(Math.max((s===-1?0:s)+(e?1:-1),0),n.length-1)].scrollIntoView({inline:`start`,block:`nearest`})}#a(e){let{text:t,type:n}=e,r=n===`resume`?{text:t,type:n,memory:e.memory,content:e.content}:{text:t,type:n},i=new CustomEvent(`SmartWindowPrompt:prompt-selected`,{detail:r,bubbles:!0,composed:!0});this.dispatchEvent(i)}#o(e){e.currentTarget.classList.add(`has-interacted`)}#s(e,t){e.stopPropagation(),this.dispatchEvent(new CustomEvent(`SmartWindowPrompt:prompt-dismissed`,{detail:{memory:t.memory},bubbles:!0,composed:!0}))}#c(e){if(!e?.length)return t;let n=e.length>u,r=e.slice(0,n?2:u),a=e.length-r.length;return i`
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
    `}render(){return this.prompts.length?i`
      <link
        rel="stylesheet"
        href="${c}"
      />
      <div class="sw-prompts-wrapper">
        <!-- TODO : TODO a11y translations? -->
        <div
          class=${r({"sw-prompts-container":!0,"can-scroll-start":this.canScrollStart,"can-scroll-end":this.canScrollEnd})}
          role="group"
          @scroll=${()=>this.#r()}
        >
          ${this.prompts.map(e=>e.type===`skeleton`?this.#l():this.#d(e))}
        </div>
        ${this.#u()}
      </div>
    `:i``}},customElements.define(`smartwindow-prompts`,d)})))()}var p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{n(),f(),window.MozXULElement.insertFTLIfNeeded(`browser/aiWindow.ftl`),p={title:`Domain-specific UI Widgets/AI Window/Smartwindow Prompts`,component:`smartwindow-prompts`,argTypes:{mode:{options:[`sidebar`,`fullpage`],control:{type:`select`}}}},m=[{text:`Write a first draft`,type:`chat`},{text:`Brainstorm ideas`,type:`chat`},{text:`Compare tabs`,type:`chat`}],h=[{text:`Pick up your Tokyo trip`,type:`resume`,previewIcons:[{iconSrc:`chrome://branding/content/about-logo.svg`},{iconSrc:`chrome://branding/content/about-logo.svg`}]},{text:`Continue shopping`,type:`resume`,previewIcons:[{iconSrc:`chrome://branding/content/about-logo.svg`},{iconSrc:`chrome://branding/content/about-logo.svg`},{iconSrc:`chrome://branding/content/about-logo.svg`},{iconSrc:`chrome://branding/content/about-logo.svg`}]},{text:`Improve your writing`,type:`chat`}],g=[{text:`Write a first draft`,type:`chat`},{text:`Brainstorm ideas`,type:`chat`},{text:`Summarize tabs`,type:`chat`},{text:`Proofread a message`,type:`chat`},{text:`Simplify a topic`,type:`chat`},{text:`Help make a plan`,type:`chat`},{text:`Find tabs in history`,type:`chat`},{text:`Compare tabs`,type:`chat`}],_=({mode:e,prompts:t,containerWidth:n=`100%`})=>i`
  <div style="width: ${n}; min-height: 400px; padding: 20px;">
    <smartwindow-prompts
      .mode=${e}
      .prompts=${t}
      @SmartWindowPrompt:prompt-selected=${e=>{alert(`Selected: ${e.detail.text} (type: ${e.detail.type})`)}}
    ></smartwindow-prompts>
  </div>
`,v=_.bind({}),v.args={mode:`sidebar`,prompts:m},y=_.bind({}),y.args={mode:`fullpage`,prompts:m},b=_.bind({}),b.args={mode:`fullpage`,prompts:h},x=_.bind({}),x.args={mode:`fullpage`,prompts:g,containerWidth:`500px`}})))()}S();export{y as FullpageMode,x as FullpageScrollableOverflow,b as FullpageWithFavicons,v as SidebarMode,p as default};