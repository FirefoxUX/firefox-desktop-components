import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{_ as t,b as n,f as r,u as i,y as a}from"./lit.all-Co4HOUmF.js";import{c as o,o as s}from"./iframe-17211AdQ.js";import{n as c}from"./moz-button-MQZwUQZw.js";import{t as l}from"./panel-list-BjRbkL-2.js";var u;function d(){return(d=e((()=>{u=``+new URL(`input-cta-DoR1nh7f.css`,import.meta.url).href})))()}var f,p,m;function h(){return(h=e((()=>{d(),r(),o(),c(),f={chat:`aiwindow-input-cta-submit-label-chat`,navigate:`aiwindow-input-cta-submit-label-navigate`,search:`aiwindow-input-cta-submit-label-search`,stop:`aiwindow-input-cta-submit-label-stop`},p={chat:`aiwindow-input-cta-menu-label-chat`,navigate:`aiwindow-input-cta-menu-label-navigate`,search:`aiwindow-input-cta-menu-label-search`},m=class extends s{static shadowRootOptions={...s.shadowRootOptions,delegatesFocus:!0};static properties={action:{type:String,reflect:!0},searchEngineInfo:{type:Object},searchEngines:{type:Array},submitDisabled:{type:Boolean,reflect:!0,attribute:`submit-disabled`}};constructor(){super(),this.action=``,this.submitDisabled=!1,this.searchEngineInfo={name:``,icon:``},this._menuId=`actions-menu-${crypto.randomUUID()}`,this._searchSubpanelId=`search-submenu-${crypto.randomUUID()}`,this.searchEngines=[]}get buttonIconSrc(){return this.action==`stop`?`chrome://browser/content/aiwindow/assets/stop-generation.svg`:this.action?void 0:`chrome://browser/skin/forward.svg`}get searchIconUrl(){return this.searchEngineInfo?.icon?`url(${this.searchEngineInfo.icon})`:`chrome://global/skin/icons/search-glass.svg`}get#e(){return this.shadowRoot?.getElementById(this._menuId)}get#t(){return this.shadowRoot?.getElementById(this._searchSubpanelId)}get#n(){return this.shadowRoot?.querySelector(`moz-button`)}#r(e){Object.hasOwn(f,e)&&(e!==this.action&&(this.action=e),this.dispatchEvent(new CustomEvent(`aiwindow-input-cta:on-action-change`,{detail:{action:e},bubbles:!0,composed:!0})))}#i(){if(this.submitDisabled&&this.action!=`stop`)return;let e=`aiwindow-input-cta:${this.action==`stop`?`on-stop`:`on-action`}`;this.dispatchEvent(new CustomEvent(e,{detail:{action:this.action},bubbles:!0,composed:!0}))}#a(e){this.dispatchEvent(new CustomEvent(`aiwindow-input-cta:on-search-engine-select`,{detail:{action:`search`,engineName:e.name},bubbles:!0,composed:!0}))}#o(e){e.stopPropagation(),this.#e?.hide(e,{force:!0}),requestAnimationFrame(()=>{this.#t?.show(null,this.#n.chevronButtonEl)})}#s(e){e.stopPropagation(),this.#t?.hide(e,{force:!0}),requestAnimationFrame(()=>{this.#e?.show(null,this.#n.chevronButtonEl)})}willUpdate(e){e.has(`action`)&&this.action&&!Object.hasOwn(f,this.action)&&(console.warn(`Invalid action: ${this.action}`),this.action=``),e.has(`searchEngineInfo`)&&(this.searchIconUrl?this.style.setProperty(`--search-icon`,this.searchIconUrl):this.style.removeProperty(`--search-icon`))}async updated(e){if(!e.has(`submitDisabled`)&&!e.has(`action`))return;await this.#n?.updateComplete;let t=this.#n?.buttonEl;t&&(this.submitDisabled&&this.action!=`stop`?t.setAttribute(`aria-disabled`,`true`):t.removeAttribute(`aria-disabled`))}render(){let e=this.action==`stop`,r=this.action&&!e?i`<panel-list id=${this._menuId}>
            ${a(Object.entries(p),([e])=>e,([e,t])=>i`<panel-item
                  @click=${()=>this.#r(e)}
                  data-l10n-id=${t}
                  data-l10n-args=${e==`search`?JSON.stringify({searchEngineName:this.searchEngineInfo.name}):void 0}
                  icon=${e}
                ></panel-item>`)}
            <panel-item
              @click=${e=>this.#o(e)}
              data-l10n-id="aiwindow-input-cta-menu-label-search-with"
              icon="search-with"
            ></panel-item>
          </panel-list>`:null,o=this.action?i`<panel-list id=${this._searchSubpanelId}>
          <panel-item
            @click=${e=>this.#s(e)}
            data-l10n-id="aiwindow-input-cta-search-submenu-header"
            icon="back"
          ></panel-item>
          ${a(this.searchEngines,e=>e.name,e=>i`<panel-item
                @click=${()=>this.#a(e)}
                icon="engine"
                style=${n(e.icon?{"--engine-icon":`url(${e.icon})`}:{})}
              >
                ${e.name}
              </panel-item>`)}
        </panel-list>`:null;return i`
      <link
        rel="stylesheet"
        href="${u}"
      />
      <moz-button
        type=${this.action&&!e?`split`:`ghost`}
        class="input-cta"
        .menuId=${this.action&&!e?this._menuId:void 0}
        .iconSrc=${this.buttonIconSrc}
        @click=${this.#i}
        ?disabled=${!this.action}
        data-l10n-id=${e?`aiwindow-input-cta-stop-button`:t}
        data-l10n-attrs=${e?`aria-label title`:t}
      >
        ${e?``:i`<slot>
              ${this.action&&i`<span data-l10n-id=${f[this.action]}></span>`}
            </slot>`}
      </moz-button>
      ${r} ${o}
    `}},customElements.define(`input-cta`,m)})))()}var g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{r(),l(),h(),g={title:`Domain-specific UI Widgets/AI Window/Input CTA`,component:`input-cta`,parameters:{fluent:`
aiwindow-input-cta-submit-label-chat = Ask
aiwindow-input-cta-submit-label-search = Search
aiwindow-input-cta-submit-label-navigate = Go
aiwindow-input-cta-menu-label-chat = Ask
aiwindow-input-cta-menu-label-search = Search with { $searchEngineName }
aiwindow-input-cta-menu-label-navigate = Go to site
aiwindow-input-cta-menu-label-search-with = Search with…
aiwindow-input-cta-search-submenu-header = Search
    `},argTypes:{action:{options:[``,`chat`,`search`,`navigate`],control:{type:`select`}}}},_={name:`Google`,icon:``},v=[{name:`Google`,icon:``},{name:`Bing`,icon:``},{name:`DuckDuckGo`,icon:``}],y=({action:e,searchEngineInfo:t,searchEngines:n})=>i`
  <input-cta
    .action=${e}
    .searchEngineInfo=${t}
    .searchEngines=${n}
  ></input-cta>
`,b=y.bind({}),b.args={searchEngineInfo:_,searchEngines:v},x=y.bind({}),x.args={action:`chat`,searchEngineInfo:_,searchEngines:v},S=y.bind({}),S.args={action:`search`,searchEngineInfo:_,searchEngines:v},C=y.bind({}),C.args={action:`navigate`,searchEngineInfo:_,searchEngines:v}})))()}w();export{x as Chat,b as Disabled,C as Navigate,S as Search,g as default};