import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{_ as t,f as n,u as r}from"./lit.all-Co4HOUmF.js";import{c as i,o as a}from"./iframe-DUPCaqkc.js";var o;function s(){return(s=e((()=>{o=``+new URL(`ai-chat-grid-EOKH4Krh.css`,import.meta.url).href})))()}var c;function l(){return(l=e((()=>{s(),n(),i(),c=class extends a{static properties={items:{type:Array},gridItem:{type:Function},rowItem:{type:Function},showSwitch:{type:Boolean},view:{type:String,reflect:!0},loading:{type:Boolean}};get showGrid(){return this.view===`grid`}get showList(){return this.view===`list`}switchView(e){this.view=e.target.id}renderGridControls(){return this.showSwitch?r`
        <div class="header">
          <div
            class="list-controls"
            role="group"
            data-l10n-id="aiwindow-ai-chat-grid-view-controls"
          >
            <moz-button
              id="list"
              type="ghost"
              size="small"
              aria-pressed=${this.showList}
              iconsrc="chrome://browser/content/aiwindow/assets/icon-list-view.svg"
              @click=${this.switchView}
              data-l10n-id="aiwindow-ai-chat-grid-list-view"
            ></moz-button>
            <moz-button
              id="grid"
              type="ghost"
              size="small"
              aria-pressed=${this.showGrid}
              iconsrc="chrome://browser/content/aiwindow/assets/icon-grid-view.svg"
              @click=${this.switchView}
              data-l10n-id="aiwindow-ai-chat-grid-grid-view"
            ></moz-button>
          </div>
        </div>
      `:t}renderItems(){return(this.items||[]).map(e=>{switch(this.view){case`list`:return this.renderItem(e,this.rowItem);case`grid`:return this.renderItem(e,this.gridItem)}return t})}renderItem(e,n){return typeof n==`function`?n(e):t}gridStyle(){return`scroll-area ${this.view}`}renderLoading(){return r`<div part="loading" class="ai-chat-grid loading">
      <img
        class="loading-skeleton"
        src="chrome://browser/content/aiwindow/assets/ai-chat-grid-loading.svg"
        role="presentation"
      />
    </div>`}renderGrid(){return r` <div class="ai-chat-grid">
      ${this.renderGridControls()}
      <div part="scrollarea-${this.view}" class=${this.gridStyle()}>
        ${this.renderItems()}
      </div>
    </div>`}render(){return r`
      <link
        rel="stylesheet"
        href="${o}"
      />
      ${this.loading?this.renderLoading():this.renderGrid()}
    `}},customElements.define(`ai-chat-grid`,c)})))()}export{l as t};