import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,g as n,u as r,v as i}from"./lit.all-BYVOqvrj.js";import{c as a,o}from"./iframe-DZPZZ1s7.js";import{n as s}from"./moz-button-DFoGCGZp.js";import{t as c}from"./smartwindow-chip-Dn6Aw4Qf.js";import{i as l,n as u,r as d,t as f}from"./SmartwindowOverflowRow-BU4Lc93R.js";import{n as p,r as m,t as h}from"./SmartbarMentionUtils-DcwxvvMB.js";import{t as g}from"./ai-grouped-chip-container-C5UljTaR.js";import{t as _}from"./smartwindow-panel-list-BSsw7OMB.js";var v;function y(){return(y=e((()=>{v=new URL(`website-chip-container-BkNYVZAC.css`,import.meta.url).href+``})))()}var b;function x(){return(x=e((()=>{y(),l(),a(),m(),t(),u(),c(),g(),s(),_(),b=class extends f(o){static properties={websites:{type:Array},removable:{type:Boolean},shouldGroupChips:{type:Boolean},autoOverflow:{type:Boolean},visibleChipCount:{type:Number},isPanelOpen:{type:Boolean,state:!0}};constructor(){super(),this.websites=[],this.removable=!1,this.shouldGroupChips=!1,this.autoOverflow=!1,this.visibleChipCount=null,this.isPanelOpen=!1}get overflowContainerSelector(){return`.chip-container-scroller`}get inlineItemCount(){return this.visibleChipCount}get overflowItems(){return this.#t?this.websites:[]}get#e(){return this.shouldGroupChips&&this.websites.length>2}get#t(){return this.autoOverflow&&!this.#e}#n(){return this.renderRoot.querySelector(`smartwindow-panel-list`)}#r(e){let t=this.#n();t&&(t.anchor=e.currentTarget,t.toggle(e))}#i(e){let{id:t,type:n}=e.detail??{};this.#n()?.hide(),t&&n!=h.TAB_GROUP&&this.dispatchEvent(new CustomEvent(`AIChatContent:OpenLink`,{bubbles:!0,composed:!0,detail:{url:t,preferSwitchToTab:!0}}))}#a(e,t){t.stopPropagation(),this.dispatchEvent(new CustomEvent(`smartwindow-chip:remove`,{bubbles:!0,composed:!0,detail:{url:e.url,groupId:e.groupId,label:e.label}}))}#o(e){return r`<smartwindow-chip
      type="context"
      .label=${e.label}
      .href=${e.url??``}
      .iconSrc=${e.iconSrc??``}
      .isTabGroup=${e.type==h.TAB_GROUP}
      .tabGroupColor=${e.color??``}
      .tabGroupId=${e.groupId??``}
      .removable=${this.removable}
      @smartwindow-chip:remove=${t=>this.#a(e,t)}
    ></smartwindow-chip>`}#s(e){return r`<ai-grouped-chip-container
      .chips=${e}
    ></ai-grouped-chip-container>`}#c(e){return e.historyDeleted?r`<div class="chip-history-deleted">
          <img
            class="chip-history-deleted-icon"
            src="chrome://global/skin/icons/defaultFavicon.svg"
            alt=""
          />
          <span data-l10n-id="aiwindow-website-chip-history-deleted"></span>
        </div>`:this.#o(e)}#l(){let e=Math.min(this.visibleCount,this.websites.length),t=this.websites.slice(e),a=!!t.length;return r`<div
      class="chip-container-scroller smartwindow-overflow-row"
      role="list"
    >
      ${i(this.websites,e=>e,(t,n)=>r`<span role="listitem" ?data-overflow=${n>=e}
            >${this.#c(t)}</span
          >`)}
      <moz-button
        class="overflow-more"
        type="ghost"
        ?data-overflow=${!a}
        .ariaHasPopup=${`menu`}
        .ariaExpanded=${String(this.isPanelOpen)}
        data-l10n-id="smartwindow-assistant-citations-more-label"
        data-l10n-args=${JSON.stringify({count:t.length})}
        @click=${this.#r}
      ></moz-button>
      ${a?r`<smartwindow-panel-list
            .groups=${[{items:t.map(e=>({id:e.url??p(e.groupId),type:e.type,label:e.label,icon:e.iconSrc,color:e.color}))}]}
            @shown=${()=>this.isPanelOpen=!0}
            @hidden=${()=>this.isPanelOpen=!1}
            @item-selected=${this.#i}
          ></smartwindow-panel-list>`:n}
    </div>`}#u(){return r`<div class="chip-container-scroller" role="list">
      ${i(this.websites,e=>e,e=>r`<span role="listitem">${this.#c(e)}</span>`)}
    </div>`}#d(){return this.#e?this.#s(this.websites):this.#t?this.#l():this.#u()}render(){return this.websites.length?r`
      <link
        rel="stylesheet"
        href="${d}"
      />
      <link
        rel="stylesheet"
        href="${v}"
      />
      <div class="chip-container">${this.#d()}</div>
    `:n}},customElements.define(`website-chip-container`,b)})))()}export{x as t};