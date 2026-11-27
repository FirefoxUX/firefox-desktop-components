import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,f as n,u as r}from"./lit.all-Co4HOUmF.js";import{c as i,o as a}from"./iframe-17211AdQ.js";import{t as o}from"./tab-group-icon-Cfh97cmW.js";var s;function c(){return(c=e((()=>{s=``+new URL(`smartwindow-chip-DvngC0FM.css`,import.meta.url).href})))()}var l;function u(){return(u=e((()=>{c(),n(),i(),o(),l=class extends a{static shadowRootOptions={...a.shadowRootOptions,delegatesFocus:!0};static properties={type:{type:String,reflect:!0},label:{type:String},iconSrc:{type:String},href:{type:String},itemRole:{type:String},openLinkEvent:{type:String},isTabGroup:{type:Boolean},tabGroupColor:{type:String},tabGroupId:{type:String},removable:{type:Boolean,reflect:!0}};#e=null;constructor(){super(),this.type=`source`,this.label=``,this.iconSrc=``,this.href=``,this.itemRole=``,this.openLinkEvent=`AIChatContent:OpenLink`,this.removable=!1,this.isTabGroup=!1,this.tabGroupColor=``,this.tabGroupId=``}connectedCallback(){super.connectedCallback(),this.#e=this.getRootNode()?.host}disconnectedCallback(){super.disconnectedCallback(),this.#e?.isConnected&&this.#e.dispatchEvent(new CustomEvent(`smartwindow-chip:disconnected`,{bubbles:!0,composed:!0,detail:{label:this.label,type:this.type}})),this.#e=null}get#t(){return this.type===`in-line`&&!this.label}get#n(){return this.type!==`in-line`&&this.removable}#r(){this.isTabGroup&&this.tabGroupId&&this.dispatchEvent(new CustomEvent(`AIChatContent:OpenTabGroup`,{bubbles:!0,composed:!0,detail:{groupId:this.tabGroupId}})),this.dispatchEvent(new CustomEvent(`smartwindow-chip:click`,{bubbles:!0,composed:!0,detail:{label:this.label}}))}#i(e){e.stopPropagation(),e.preventDefault(),this.dispatchEvent(new CustomEvent(`smartwindow-chip:remove`,{bubbles:!0,composed:!0,detail:{label:this.label}}))}#a(e){if(!this.href)return;e.preventDefault();let t=e.shiftKey||e.metaKey||e.ctrlKey||e.altKey||e.button!==0;this.dispatchEvent(new CustomEvent(this.openLinkEvent,{bubbles:!0,composed:!0,detail:{url:this.href,preferSwitchToTab:!t,shiftKey:e.shiftKey,metaKey:e.metaKey,ctrlKey:e.ctrlKey,altKey:e.altKey,button:e.button}}))}#o(){return this.#t?r`<span class="chip-at">@</span>`:this.isTabGroup?r`<tab-group-icon
        .label=${this.label}
        .color=${this.tabGroupColor}
      ></tab-group-icon>`:r`<img
      class="chip-icon"
      src=${this.iconSrc||`chrome://global/skin/icons/defaultFavicon.svg`}
      @error=${e=>{e.target.src=`chrome://global/skin/icons/defaultFavicon.svg`}}
      alt=""
    />`}#s(){return this.#n?r`<button
      class="chip-remove"
      @click=${this.#i}
      data-l10n-id="aiwindow-website-chip-remove-button"
    >
      <img
        class="chip-remove-icon"
        src="chrome://global/skin/icons/close.svg"
        alt=""
      />
    </button>`:null}#c(){return this.#t?r`<span
        class="chip-label"
        data-l10n-id="aiwindow-website-chip-placeholder"
      ></span>`:r`<span class="chip-label">${this.label}</span>`}#l(){let e=this.#o(),n=this.#s(),i=this.#c(),a=r`
      ${e} ${n} ${i}
    `;return this.href?r`<a
        class="chip"
        part="chip"
        role=${t(this.itemRole||void 0)}
        href=${this.href}
        @click=${this.#a}
      >
        ${a}
      </a>`:r`<button
      class="chip"
      part="chip"
      role=${t(this.itemRole||void 0)}
      ?data-empty=${this.#t}
      @click=${this.#r}
    >
      ${a}
    </button>`}render(){return r`
      <link
        rel="stylesheet"
        href="${s}"
      />
      ${this.#l()}
    `}},customElements.define(`smartwindow-chip`,l)})))()}export{u as t};