import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{_ as t,b as n,d as r,f as i,i as a,u as o,y as s}from"./lit.all-Co4HOUmF.js";import{c,o as l}from"./iframe-CEh6YfCk.js";import{t as u}from"./tab-group-icon-Z4fAOdJ8.js";import{r as d,t as f}from"./SmartbarMentionUtils-DcwxvvMB.js";import{n as p,t as m}from"./_firefox-storybook_moz-css-url_bb50035b5847cd944ad97b390c23d2005d8a4ab5bfb50462aaff3f9f9f6f85ed-CmEcXjEz.js";import{t as h}from"./panel-list-C5rvkNXr.js";var g;function _(){return(_=e((()=>{p(),i(),c(),d(),h(),u(),g=class extends l{static shadowRootOptions={...l.shadowRootOptions,delegatesFocus:!0};static properties={groups:{type:Array},anchor:{type:Object},placeholderL10nId:{type:String},alwaysOpen:{type:Boolean},sidebarMode:{type:Boolean,reflect:!0},selectedItemId:{type:String}};#e=null;#t=null;constructor(){super(),this.groups=[],this.anchor=null,this.placeholderL10nId=``,this.alwaysOpen=!1,this.sidebarMode=!1,this.selectedItemId=null}willUpdate(e){if(e.has(`groups`)){let[e]=this.#n(),t=e?.id??null;this.selectedItemId!==t&&(this.selectedItemId=t)}}#n(){return this.groups.flatMap(e=>e.items??[])}moveSelection(e){let t=this.#n();if(!t.length)return;let n=t.findIndex(e=>e.id===this.selectedItemId),r=((n===-1?0:n)+e+t.length)%t.length;this.selectedItemId=t[r].id}getSelectedItem(){return this.#n().find(e=>e.id===this.selectedItemId)??null}get#r(){return[...(this.#e??this).children].some(e=>e.localName!==`panel-item`&&!e.classList.contains(`panel-item-container`))}get#i(){return this.getAttribute(`data-triggered-by`)===`inline-command`}firstUpdated(){this.#e=this.shadowRoot.querySelector(`panel-list`),this.#e.addEventListener(`shown`,()=>{this.#i?this.#s():this.sidebarMode&&this.#o()}),this.#a(),this.alwaysOpen&&this.show()}#a(){let e=Array.from(this.children);e.length&&this.#e.append(...e)}#o(){let e=this.#e,t=window.innerWidth,n=window.innerHeight,r=e.getBoundingClientRect(),i=parseFloat(getComputedStyle(e).marginInlineStart)||0,a=Math.min(r.width,t-2*i),o=Math.min(r.height,n),s=parseFloat(e.style.left)||0,c=parseFloat(e.style.top)||0;s=Math.max(0,Math.min(s,t-a-2*i)),c=Math.max(0,Math.min(c,n-o)),e.style.left=`${s}px`,e.style.top=`${c}px`}#s(){requestAnimationFrame(()=>{let e=this.#t;if(!e||!this.#e?.open)return;let t=this.#e,n=e.getBoundingClientRect(),r=t.scrollHeight,i=t.getAttribute(`valign`),a;a=i===`top`?Math.max(n.top-r,10):n.bottom,this.#i?(t.style.width=`${n.width}px`,t.style.left=`${n.left+window.scrollX}px`):t.style.width=``,t.style.top=`${a+window.scrollY}px`,this.#o()})}updated(e){super.updated(e),e.has(`anchor`)&&(this.#t=this.anchor instanceof Element?this.anchor:this.renderRoot.querySelector(`.smartwindow-panel-list-anchor`)),this.#e?.open&&(e.has(`anchor`)||e.has(`groups`))&&this.#s()}async show(e=null){await this.updateComplete,this.#e.show(e,this.#t)}async hide(){await this.updateComplete,this.#e.hide()}async toggle(e=null){await this.updateComplete,this.#e.toggle(e,this.#t)}handlePanelClick(e){let t=e.target.closest(`panel-item`)??e.target.closest(`.panel-item-container`)?.querySelector(`panel-item`);if(t&&!t.classList.contains(`panel-section-header`)){let e=new CustomEvent(`item-selected`,{detail:{id:t.itemId,type:t.itemType,label:t.itemLabel||t.textContent.trim(),icon:t.itemIcon,color:t.itemColor},bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(e)}}handleKeyDown(e){this.dispatchEvent(new CustomEvent(`panel-keydown`,{detail:{originalEvent:e},bubbles:!0,composed:!0}))}#c(){return!this.groups.length||this.groups.every(e=>!e.items?.length)}#l(){if(!this.anchor||this.anchor instanceof Element)return null;let e=this.getBoundingClientRect();return o`<span
      class="smartwindow-panel-list-anchor"
      style=${n({"--anchor-left":`${this.anchor.left-e.left}px`,"--anchor-top":`${this.anchor.top-e.top}px`,"--anchor-width":`${this.anchor.width}px`,"--anchor-height":`${this.anchor.height}px`})}
    ></span>`}#u(){return o`<panel-item
      disabled
      role="presentation"
      class="panel-section-header"
      data-l10n-id=${this.placeholderL10nId}
    ></panel-item>`}#d(e){return o`<panel-item
      disabled
      role="presentation"
      class="panel-section-header"
      data-l10n-id=${e}
    ></panel-item>`}#f(e){return o`<panel-item
      disabled
      role="presentation"
      class="panel-section-header"
    >
      ${e}
    </panel-item>`}#p(e){let t={};return e.icon&&(t[`--panel-item-icon-url`]=`url(${e.icon})`),t}#m(e,t){return o`<div
      class=${a({"panel-item-container":!0,"panel-tab-group-item":!0,selected:t})}
    >
      <tab-group-icon
        class="panel-tab-group-icon"
        .label=${e.label}
        .color=${e.color}
      ></tab-group-icon>
      <panel-item
        class="panel-tab-group-label"
        .itemId=${e.id}
        .itemType=${e.type}
        .itemLabel=${e.label??``}
        .itemColor=${e.color}
      >
        ${e.label}
      </panel-item>
    </div>`}#h(e,t=!1){if(e.type==f.TAB_GROUP)return this.#m(e,t);let i=!!e.description||!!e.descriptionL10nId,s=o`<panel-item
      .itemId=${e.id}
      .itemLabel=${e.label??``}
      icon=${r(!i&&e.icon?`true`:void 0)}
      class=${r(t&&!i?`selected`:void 0)}
      data-l10n-id=${r(e.l10nId)}
      style=${n(i?{}:this.#p(e))}
    >
      ${e.l10nId?``:e.label}
    </panel-item>`;return i?o`<div
      class=${a({"panel-item-container":!0,selected:t})}
    >
      ${e.icon?o`<span class="panel-item-icon" aria-hidden="true">
            <img class="panel-item-icon-image" src=${e.icon} alt="" />
          </span>`:``}
      <div class="panel-item-text">
        ${s}
        <div
          class="panel-item-description"
          data-l10n-id=${r(e.descriptionL10nId)}
        >
          ${e.descriptionL10nId?``:e.description}
        </div>
      </div>
    </div>`:s}#g(e){if(!e.items?.length)return null;let t=null;return e.headerL10nId?t=this.#d(e.headerL10nId):e.header&&(t=this.#f(e.header)),o`
      ${t}
      ${s(e.items,e=>e.id,e=>this.#h(e,this.#i&&e.id===this.selectedItemId))}
    `}#_(){return s(this.groups,(e,t)=>t,e=>this.#g(e))}#v(){return this.#r?t:this.#c()?this.#u():this.#_()}#y(){return!this.#i||this.#r||this.#c()?t:o`<panel-item
      disabled
      role="note"
      class="panel-section-header panel-command-footer"
      data-l10n-id="smartbar-command-coming-soon"
    ></panel-item>`}render(){return o`
      <link
        rel="stylesheet"
        href="${m}"
      />
      ${this.#l()}
      <panel-list
        @click=${this.handlePanelClick}
        @keydown=${this.handleKeyDown}
      >
        ${this.#v()} ${this.#y()}
      </panel-list>
    `}},customElements.define(`smartwindow-panel-list`,g)})))()}export{_ as t};