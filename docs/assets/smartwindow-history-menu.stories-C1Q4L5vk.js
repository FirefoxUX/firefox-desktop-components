import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{b as t,f as n,u as r}from"./lit.all-Co4HOUmF.js";import{c as i,o as a}from"./iframe-DoVFImma.js";import{n as o}from"./moz-button-Cg-Kw8g5.js";import{t as s}from"./panel-list-BjRbkL-2.js";var c;function l(){return(l=e((()=>{c=``+new URL(`smartwindow-history-menu-DYnEH095.css`,import.meta.url).href})))()}var u,d,f,p;function m(){return(m=e((()=>{l(),n(),i(),s(),o(),u=`history-menu`,d=`fullpage-chats-menu`,f=`fullpage-more-menu`,p=class extends a{static properties={mode:{type:String,reflect:!0},recentChats:{type:Array},view:{type:String,state:!0}};constructor(){super(),this.mode=`sidebar`,this.recentChats=[],this.view=`main`}#e(e,t){this.dispatchEvent(new CustomEvent(`smartwindow-history-menu:${e}`,{detail:t,bubbles:!0,composed:!0}))}#t=()=>this.#e(`request-recent-chats`);#n=()=>this.#e(`new-chat`);#r=()=>this.#e(`view-all-chats`);#i=()=>this.#e(`open-settings`);#a(e){this.#e(`open-chat`,{conversationId:e})}#o=()=>{this.view=`main`,this.#t()};#s(e){e.stopPropagation(),this.#t(),this.view=`chats`}#c(e){e.stopPropagation(),this.view=`main`}#l(e){let n=e.pageUrl&&!e.pageUrl.startsWith(`about:`),i=n?`page-icon:${e.pageUrl}`:`chrome://browser/content/firefoxview/view-chats.svg`;return r`<panel-item
      icon
      class="history-menu-chat ${n?`chat-overlay`:``}"
      style=${t({"--panel-item-icon-url":`url("${i}")`})}
      @click=${()=>this.#a(e.id)}
      >${e.title}</panel-item
    >`}#u(){return r`
      ${this.recentChats.map(e=>this.#l(e))}
      ${this.recentChats.length?r`<hr />`:``}
      <panel-item
        icon
        style=${t({"--panel-item-icon-url":`url('chrome://browser/skin/history.svg')`})}
        data-l10n-id="aiwindow-history-menu-view-all-chats"
        @click=${this.#r}
      ></panel-item>
    `}#d(){return r`
      <panel-item
        class="history-menu-nav"
        data-l10n-id="aiwindow-history-menu-chat-history"
        @click=${this.#s}
      ></panel-item>
      <panel-item
        data-l10n-id="aiwindow-history-menu-settings"
        @click=${this.#i}
      ></panel-item>
    `}#f(){return r`
      <div class="history-menu-header">
        <moz-button
          class="history-menu-back"
          type="ghost icon"
          iconsrc="chrome://global/skin/icons/arrow-left.svg"
          data-l10n-id="aiwindow-history-menu-back"
          data-l10n-attrs="tooltiptext,aria-label"
          @click=${this.#c}
        ></moz-button>
        <span
          class="history-menu-header-title"
          data-l10n-id="aiwindow-history-menu-chat-history"
        ></span>
      </div>
      <hr />
      ${this.#u()}
    `}#p(){return r`
      <moz-button
        data-l10n-id="aiwindow-history-menu"
        data-l10n-attrs="tooltiptext,aria-label"
        class="history-menu-button"
        type="ghost icon"
        iconsrc="chrome://global/skin/icons/more.svg"
        .menuId=${u}
      ></moz-button>
      <panel-list
        id=${u}
        class="history-menu"
        @shown=${this.#o}
      >
        ${this.view===`chats`?this.#f():this.#d()}
      </panel-list>
    `}#m(){return r`
      <moz-button
        class="fullpage-action-button"
        type="ghost"
        size="small"
        iconsrc="chrome://browser/content/aiwindow/assets/new-chat.svg"
        data-l10n-id="aiwindow-fullpage-new-chat"
        @click=${this.#n}
      ></moz-button>
      <moz-button
        class="fullpage-action-button"
        type="ghost"
        size="small"
        iconsrc="chrome://browser/skin/history.svg"
        data-l10n-id="aiwindow-fullpage-chat-history"
        .menuId=${d}
        @click=${this.#t}
      ></moz-button>
      <panel-list id=${d} class="history-menu">
        ${this.#u()}
      </panel-list>
      <moz-button
        class="fullpage-action-button"
        type="ghost"
        size="small"
        iconsrc="chrome://global/skin/icons/more.svg"
        data-l10n-id="aiwindow-fullpage-more"
        .menuId=${f}
      ></moz-button>
      <panel-list id=${f} class="history-menu">
        <panel-item
          data-l10n-id="aiwindow-history-menu-settings"
          @click=${this.#i}
        ></panel-item>
      </panel-list>
    `}render(){return r`
      <link
        rel="stylesheet"
        href="${c}"
      />
      ${this.mode===`fullpage`?this.#m():this.#p()}
    `}},customElements.define(`smartwindow-history-menu`,p)})))()}var h,g,_,v,y;function b(){return(b=e((()=>{n(),m(),h={title:`Domain-specific UI Widgets/AI Window/Smartwindow History Menu`,component:`smartwindow-history-menu`,argTypes:{mode:{options:[`sidebar`,`fullpage`],control:{type:`radio`}},recentChats:{control:`object`}},parameters:{status:`in-development`,fluent:`
aiwindow-history-menu =
    .tooltiptext = More options
    .aria-label = More options
aiwindow-history-menu-chat-history = Chat history
aiwindow-history-menu-back =
    .tooltiptext = Back
    .aria-label = Back
aiwindow-history-menu-view-all-chats = View all chats
aiwindow-history-menu-settings = Smart Window settings
aiwindow-fullpage-new-chat =
    .label = New chat
aiwindow-fullpage-chat-history =
    .label = Chat history
aiwindow-fullpage-more =
    .label = More
    .title = More
    `}},g=({mode:e,recentChats:t})=>r`
  <div style="padding: 40px; position: relative;">
    <smartwindow-history-menu
      mode=${e}
      .recentChats=${t}
    ></smartwindow-history-menu>
  </div>
`,_=[{id:`1`,title:`Eggplant Adobo shopping list`,pageUrl:`https://example.com/`},{id:`2`,title:`Figma tutorials`,pageUrl:`https://figma.com/`},{id:`3`,title:`Trip planning`,pageUrl:null}],v=g.bind({}),v.args={mode:`sidebar`,recentChats:_},y=g.bind({}),y.args={mode:`fullpage`,recentChats:_}})))()}b();export{y as Fullpage,v as Sidebar,h as default};