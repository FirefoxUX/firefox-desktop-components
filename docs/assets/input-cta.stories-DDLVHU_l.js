import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,g as n,u as r,v as i,y as a}from"./lit.all-BYVOqvrj.js";import{c as o,o as s}from"./iframe-DZPZZ1s7.js";import{n as c}from"./moz-button-DFoGCGZp.js";import{t as l}from"./panel-list-C5rvkNXr.js";var u;function d(){return(d=e((()=>{u=new URL(`input-cta-CkvruAbS.css`,import.meta.url).href+``})))()}var f;function p(){return(p=e((()=>{d(),t(),o(),c(),f=class e extends s{static shadowRootOptions={...s.shadowRootOptions,delegatesFocus:!0};static properties={action:{type:String,reflect:!0},searchEngineInfo:{type:Object},searchEngines:{type:Array},submitDisabled:{type:Boolean,reflect:!0,attribute:`submit-disabled`}};static ACTIONS=[`chat`,`navigate`,`search`,`stop`];constructor(){super(),this.action=``,this.submitDisabled=!1,this.searchEngineInfo={name:``,icon:``},this._menuId=`actions-menu-${crypto.randomUUID()}`,this._searchSubpanelId=`search-submenu-${crypto.randomUUID()}`,this.searchEngines=[]}get actionLabelId(){return this.action?`aiwindow-input-cta-submit-label-${this.action}`:``}get buttonIconSrc(){return this.action==`stop`?`chrome://browser/content/aiwindow/assets/stop-generation.svg`:this.action?void 0:`chrome://browser/skin/forward.svg`}get searchIconUrl(){return this.searchEngineInfo?.icon?`url(${this.searchEngineInfo.icon})`:`chrome://global/skin/icons/search-glass.svg`}get#e(){return this.shadowRoot?.getElementById(this._menuId)}get#t(){return this.shadowRoot?.getElementById(this._searchSubpanelId)}get#n(){return this.shadowRoot?.querySelector(`moz-button`)}#r(t){e.ACTIONS.includes(t)&&(t!==this.action&&(this.action=t),this.dispatchEvent(new CustomEvent(`aiwindow-input-cta:on-action-change`,{detail:{action:t},bubbles:!0,composed:!0})))}#i(){if(this.submitDisabled&&this.action!=`stop`)return;let e=`aiwindow-input-cta:${this.action==`stop`?`on-stop`:`on-action`}`;this.dispatchEvent(new CustomEvent(e,{detail:{action:this.action},bubbles:!0,composed:!0}))}#a(e){this.dispatchEvent(new CustomEvent(`aiwindow-input-cta:on-search-engine-select`,{detail:{action:`search`,engineName:e.name},bubbles:!0,composed:!0}))}#o(e){e.stopPropagation(),this.#e?.hide(e,{force:!0}),requestAnimationFrame(()=>{this.#t?.show(null,this.#n.chevronButtonEl)})}#s(e){e.stopPropagation(),this.#t?.hide(e,{force:!0}),requestAnimationFrame(()=>{this.#e?.show(null,this.#n.chevronButtonEl)})}willUpdate(t){t.has(`action`)&&this.action&&!e.ACTIONS.includes(this.action)&&(console.warn(`Invalid action: ${this.action}`),this.action=``),t.has(`searchEngineInfo`)&&(this.searchIconUrl?this.style.setProperty(`--search-icon`,this.searchIconUrl):this.style.removeProperty(`--search-icon`))}async updated(e){if(!e.has(`submitDisabled`)&&!e.has(`action`))return;await this.#n?.updateComplete;let t=this.#n?.buttonEl;t&&(this.submitDisabled&&this.action!=`stop`?t.setAttribute(`aria-disabled`,`true`):t.removeAttribute(`aria-disabled`))}render(){let t=this.action==`stop`,o=e.ACTIONS.filter(e=>e!==`stop`),s=this.action&&!t?r`<panel-list id=${this._menuId}>
            ${i(o,e=>e,e=>r`<panel-item
                  @click=${()=>this.#r(e)}
                  data-l10n-id=${`aiwindow-input-cta-menu-label-${e}`}
                  data-l10n-args=${e==`search`?JSON.stringify({searchEngineName:this.searchEngineInfo.name}):void 0}
                  icon=${e}
                ></panel-item>`)}
            <panel-item
              @click=${e=>this.#o(e)}
              data-l10n-id="aiwindow-input-cta-menu-label-search-with"
              icon="search-with"
            ></panel-item>
          </panel-list>`:null,c=this.action?r`<panel-list id=${this._searchSubpanelId}>
          <panel-item
            @click=${e=>this.#s(e)}
            data-l10n-id="aiwindow-input-cta-search-submenu-header"
            icon="back"
          ></panel-item>
          ${i(this.searchEngines,e=>e.name,e=>r`<panel-item
                @click=${()=>this.#a(e)}
                icon="engine"
                style=${a(e.icon?{"--engine-icon":`url(${e.icon})`}:{})}
              >
                ${e.name}
              </panel-item>`)}
        </panel-list>`:null;return r`
      <link
        rel="stylesheet"
        href="${u}"
      />
      <moz-button
        type=${this.action&&!t?`split`:`ghost`}
        class="input-cta"
        .menuId=${this.action&&!t?this._menuId:void 0}
        .iconSrc=${this.buttonIconSrc}
        @click=${this.#i}
        ?disabled=${!this.action}
        data-l10n-id=${t?`aiwindow-input-cta-stop-button`:n}
        data-l10n-attrs=${t?`aria-label title`:n}
      >
        ${t?``:r`<slot>
              ${this.action&&r`<span data-l10n-id=${this.actionLabelId}></span>`}
            </slot>`}
      </moz-button>
      ${s} ${c}
    `}},customElements.define(`input-cta`,f)})))()}var m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{t(),l(),p(),m={title:`Domain-specific UI Widgets/AI Window/Input CTA`,component:`input-cta`,parameters:{fluent:`
aiwindow-input-cta-submit-label-chat = Ask
aiwindow-input-cta-submit-label-search = Search
aiwindow-input-cta-submit-label-navigate = Go
aiwindow-input-cta-menu-label-chat = Ask
aiwindow-input-cta-menu-label-search = Search with { $searchEngineName }
aiwindow-input-cta-menu-label-navigate = Go to site
aiwindow-input-cta-menu-label-search-with = Search with…
aiwindow-input-cta-search-submenu-header = Search
    `},argTypes:{action:{options:[``,`chat`,`search`,`navigate`],control:{type:`select`}}}},h={name:`Google`,icon:``},g=[{name:`Google`,icon:``},{name:`Bing`,icon:``},{name:`DuckDuckGo`,icon:``}],_=({action:e,searchEngineInfo:t,searchEngines:n})=>r`
  <input-cta
    .action=${e}
    .searchEngineInfo=${t}
    .searchEngines=${n}
  ></input-cta>
`,v=_.bind({}),v.args={searchEngineInfo:h,searchEngines:g},y=_.bind({}),y.args={action:`chat`,searchEngineInfo:h,searchEngines:g},b=_.bind({}),b.args={action:`search`,searchEngineInfo:h,searchEngines:g},x=_.bind({}),x.args={action:`navigate`,searchEngineInfo:h,searchEngines:g}})))()}S();export{y as Chat,v as Disabled,x as Navigate,b as Search,m as default};