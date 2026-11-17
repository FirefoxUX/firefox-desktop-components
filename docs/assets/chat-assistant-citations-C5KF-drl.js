import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{_ as t,f as n,u as r}from"./lit.all-Co4HOUmF.js";import{c as i,o as a}from"./iframe-ChCqHcnv.js";import{n as o}from"./moz-button-1qo60Dlf.js";import{t as s}from"./smartwindow-chip-C5GQoaI5.js";import{i as c,n as l,r as u,t as d}from"./SmartwindowOverflowRow-BU4Lc93R.js";import{t as f}from"./smartwindow-panel-list-mRounJYD.js";var p;function m(){return(m=e((()=>{p=new URL(`chat-assistant-citations-BQrKNjOo.css`,import.meta.url).href+``})))()}var h;function g(){return(g=e((()=>{m(),c(),n(),i(),l(),o(),s(),f(),h=class extends d(a){static properties={citations:{type:Array,attribute:!1},isPanelOpen:{type:Boolean,state:!0}};constructor(){super(),this.citations=[],this.isPanelOpen=!1}get overflowContainerSelector(){return`.citations`}get overflowTriggerSelector(){return`.citations-more`}get overflowItems(){return this.citations??[]}#e(){return this.shadowRoot.querySelector(`smartwindow-panel-list`)}#t(e){let t=this.#e();t&&(t.anchor=e.currentTarget,t.toggle(e))}#n(){this.#e()?.hide()}#r(e){return e.title||(URL.parse(e.url)?.hostname??e.url)}#i(e){return e.title||e.url}#a(e){return e.faviconUrl?e.faviconUrl:e.hasFavicon?`page-icon:${e.url}`:`chrome://global/skin/icons/defaultFavicon.svg`}#o(e,{itemRole:n,showTitle:i}={}){return r`<smartwindow-chip
      type="source"
      role=${n?`presentation`:t}
      .itemRole=${n??``}
      title=${i?this.#i(e):t}
      .label=${this.#r(e)}
      .href=${e.url}
      .iconSrc=${this.#a(e)}
    ></smartwindow-chip>`}render(){if(!this.citations?.length)return t;let e=Math.min(this.visibleCount,this.citations.length),n=this.citations.slice(e),i=!!n.length;return r`
      <link
        rel="stylesheet"
        href="${u}"
      />
      <link
        rel="stylesheet"
        href="${p}"
      />
      <div class="citations smartwindow-overflow-row" role="list">
        ${this.citations.map((t,n)=>r`<span role="listitem" ?data-overflow=${n>=e}
              >${this.#o(t,{showTitle:!0})}</span
            >`)}
        <moz-button
          class="citations-more"
          type="ghost"
          ?data-overflow=${!i}
          .ariaHasPopup=${`menu`}
          .ariaExpanded=${String(this.isPanelOpen)}
          data-l10n-id="smartwindow-assistant-citations-more-label"
          data-l10n-args=${JSON.stringify({count:n.length})}
          @click=${this.#t}
        ></moz-button>
        ${i?r`<smartwindow-panel-list
              @shown=${()=>this.isPanelOpen=!0}
              @hidden=${()=>this.isPanelOpen=!1}
              @AIChatContent:OpenLink=${this.#n}
            >
              ${n.map(e=>this.#o(e,{itemRole:`menuitem`}))}
            </smartwindow-panel-list>`:t}
      </div>
    `}},customElements.define(`chat-assistant-citations`,h)})))()}export{g as t};