import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,u as n,y as r}from"./lit.all-Co4HOUmF.js";import{c as i,o as a}from"./iframe-DoVFImma.js";import{t as o}from"./tab-group-icon-D-0r6MUI.js";import{a as s,n as c,r as l,t as u}from"./SmartbarMentionUtils-DcwxvvMB.js";import{t as d}from"./smartwindow-panel-list-B86FYJD-.js";var f;function p(){return(p=e((()=>{f=``+new URL(`ai-grouped-chip-container-CLyxwBNq.css`,import.meta.url).href})))()}var m;function h(){return(h=e((()=>{p(),i(),l(),t(),d(),o(),m=class extends a{static properties={chips:{type:Array},openLinkEvent:{type:String},isPanelOpen:{type:Boolean,state:!0},chipsLabel:{type:String}};constructor(){super(),this.chips=[],this.openLinkEvent=`AIChatContent:OpenLink`,this.isPanelOpen=!1,this.chipsLabel=`smart-window-context-chips-tag-count`}#e(e){e.stopPropagation()}#t(e){let t=this.shadowRoot.querySelector(`smartwindow-panel-list`);t.anchor=e.currentTarget,t.toggle()}#n(){this.shadowRoot.querySelector(`smartwindow-panel-list`)?.hide()}#r(e){let{id:t,type:n}=e.detail??{};if(n==u.TAB_GROUP){let e=s(t);e&&this.dispatchEvent(new CustomEvent(`AIChatContent:OpenTabGroup`,{bubbles:!0,composed:!0,detail:{groupId:e}}))}else t&&this.dispatchEvent(new CustomEvent(this.openLinkEvent,{bubbles:!0,composed:!0,detail:{url:t,preferSwitchToTab:!0}}));this.#n()}#i(e){return e.type==u.TAB_GROUP?n`<tab-group-icon
        class="grouped-chips__stacked-icon"
        .label=${e.label}
        .color=${e.color}
      ></tab-group-icon>`:n`<img
      class="grouped-chips__favicon"
      src=${e.iconSrc||`chrome://global/skin/icons/defaultFavicon.svg`}
      alt=""
      @error=${e=>{e.target.src=`chrome://global/skin/icons/defaultFavicon.svg`}}
    />`}render(){let e=[{items:this.chips.map(e=>({id:e.url??c(e.groupId),type:e.type,label:e.label,icon:e.iconSrc,color:e.color}))}];return n`
      <link
        rel="stylesheet"
        href="${f}"
      />
      <button
        class="grouped-chips"
        id="grouped-chips-trigger"
        aria-haspopup="menu"
        aria-expanded=${this.isPanelOpen}
        ?data-is-smartwindow-panel-open=${this.isPanelOpen}
        @mousedown=${e=>this.#e(e)}
        @click=${e=>this.#t(e)}
      >
        <span class="grouped-chips__favicon-group">
          ${r(this.chips,(e,t)=>`${e.url??e.groupId}-${t}`,e=>this.#i(e))}
        </span>
        <span
          class="grouped-chips__label"
          data-l10n-id=${this.chipsLabel}
          data-l10n-args=${JSON.stringify({tags:this.chips.length})}
        ></span>
        <img
          class="grouped-chips__arrow-icon"
          src="chrome://global/skin/icons/arrow-down-12.svg"
          alt=""
        />
      </button>
      <smartwindow-panel-list
        .groups=${e}
        @shown=${()=>this.isPanelOpen=!0}
        @hidden=${()=>this.isPanelOpen=!1}
        @item-selected=${e=>this.#r(e)}
      ></smartwindow-panel-list>
    `}},customElements.define(`ai-grouped-chip-container`,m)})))()}export{h as t};