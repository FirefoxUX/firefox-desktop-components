import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{_ as t,f as n,h as r,u as i}from"./lit.all-Co4HOUmF.js";import{c as a,o}from"./iframe-17211AdQ.js";import{t as s}from"./moz-input-url-DPXO8OSk.js";import{t as c}from"./moz-textarea-Zkl1BKdq.js";import{t as l}from"./moz-select-dhp5snYy.js";import{n as u}from"./moz-button-MQZwUQZw.js";import{t as d}from"./smartwindow-chip-CncibMrv.js";import{n as f,t as p}from"./ai-window-shared-DGsZhA-2.js";import{i as m}from"./moz-button-group-BL01SGh8.js";var h;function g(){return(g=e((()=>{h=``+new URL(`smartwindow-digest-form-NpWH5PCz.css`,import.meta.url).href})))()}var _,v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{g(),n(),a(),c(),s(),l(),u(),m(),d(),{DIGEST_LENGTH:_={STANDARD:`standard`,SHORT:`short`},DIGEST_SCHEDULE_TYPE:v={DAILY:`daily`,WEEKLY:`weekly`,ON_DEMAND:`on-demand`}}=ChromeUtils.importESModule(`moz-src:///browser/components/aiwindow/models/memories/digests/DigestConstants.sys.mjs`),{XPCOMUtils:y}=ChromeUtils.importESModule(`resource://gre/modules/XPCOMUtils.sys.mjs`),b=y.declareLazy({DigestManager:`moz-src:///browser/components/aiwindow/models/memories/digests/DigestManager.sys.mjs`,PlacesUtils:`resource://gre/modules/PlacesUtils.sys.mjs`,UrlUtils:`resource://gre/modules/UrlUtils.sys.mjs`}),x=Object.freeze({DEFAULT:`default`,EDIT:`edit`}),S=Object.freeze({[v.DAILY]:`smartwindow-digest-form-frequency-daily`,[v.WEEKLY]:`smartwindow-digest-form-frequency-weekly`,[v.ON_DEMAND]:`smartwindow-digest-form-frequency-on-demand`}),C=Object.freeze({[_.STANDARD]:`smartwindow-digest-form-length-standard`,[_.SHORT]:`smartwindow-digest-form-length-short`}),w=9,T=`chrome://global/skin/icons/info.svg`,E=new((globalThis.Services?.intl)??Intl).DateTimeFormat(void 0,{timeStyle:`short`}),D=Array.from({length:24},(e,t)=>{let n=new Date;return n.setHours(t,0,0,0),{value:String(t),label:E.format(n)}}),O=Array.from({length:7},(e,t)=>({value:String(t),label:new Date(2026,0,4+t).toLocaleDateString(void 0,{weekday:`long`})})),k=class extends o{static properties={mode:{type:String,reflect:!0},digest:{type:Object},description:{state:!0},domains:{state:!0},pendingUrl:{state:!0},frequency:{state:!0},weekday:{state:!0},hour:{state:!0},length:{state:!0},fieldErrors:{state:!0},saving:{state:!0}};constructor(){super(),this.mode=x.DEFAULT,this.digest=null,this.#e()}#e(){let e=this.digest??{};this.description=this.#a?e.description??``:``,this.domains=[...e.domains??[]],this.pendingUrl=``;let t=this.#a?e.schedule:{};this.frequency=t.type??v.DAILY,this.weekday=t.weekday??new Date().getDay(),this.hour=t.hour??w,this.length=_.STANDARD,this.fieldErrors={description:null,sources:null},this.saving=!1}willUpdate(e){(e.has(`digest`)||e.has(`mode`))&&this.#e(),e.has(`domains`)&&this.#r()}#t=new Map;#n(e){return this.#t.get(e)??`https://${e}/`}async#r(){if(b.PlacesUtils){for(let e of this.domains)if(!this.#t.has(e)){this.#t.set(e,`https://${e}/`);try{let[t,n]=await Promise.all([e,`www.${e}`].map(e=>b.PlacesUtils.favicons.getFaviconForPage(Services.io.newURI(`https://${e}/`))));!t&&n&&(this.#t.set(e,`https://www.${e}/`),this.requestUpdate())}catch(e){console.error(`Failed to look up a source's favicon:`,e)}}}}#i(e){e.target.closest(`a`)&&(e.preventDefault(),this.shadowRoot.querySelector(`.memory-tooltip`)?.hidePopover(),window.browsingContext?.topChromeWindow?.openPreferences(`manageMemories`))}get#a(){return this.mode===x.EDIT}#o(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}#s(e,t){this.fieldErrors[e]!==t&&(this.fieldErrors={...this.fieldErrors,[e]:t})}#c(e){this.description=e.target.value,this.#s(`description`,null)}#l(e){let t=e.trim();if(!t)return``;let n=t.includes(`://`)?t:`https://${t}`;try{let{protocol:e,host:t}=new URL(n);if((e===`http:`||e===`https:`)&&this.#u(t))return new URL(n).href}catch{}return``}#u(e){return b.UrlUtils?b.UrlUtils.looksLikeOrigin(e,{noIp:!0,noPort:!0})===b.UrlUtils.LOOKS_LIKE_ORIGIN.OTHER:!!e}#d(){if(!this.pendingUrl.trim())return!0;let e=this.#l(this.pendingUrl);if(!e)return this.#s(`sources`,`smartwindow-digest-form-error-url`),!1;let t=new URL(e).hostname.replace(/^www\./,``);return this.domains.includes(t)||(this.domains=[...this.domains,t]),this.pendingUrl=``,this.#s(`sources`,null),!0}#f(e){this.pendingUrl=e.target.value,this.#s(`sources`,null)}#p(e){e.key===`Enter`&&(e.preventDefault(),this.#d())}#m(e){this.domains=this.domains.filter(t=>t!==e),this.shadowRoot.querySelector(`.sources-input`)?.focus()}#h(e){this.frequency=e.target.value}#g(e){this.weekday=Number(e.target.value)}#_(e){this.hour=Number(e.target.value)}#v(e){this.length=e.target.value}#y(){switch(this.frequency){case v.ON_DEMAND:return{type:v.ON_DEMAND};case v.WEEKLY:return{type:v.WEEKLY,weekday:this.weekday,hour:this.hour,minute:0};default:return{type:v.DAILY,hour:this.hour,minute:0}}}#b(){let e=this.#d();return this.description.trim()?e?null:`.sources-input`:(this.#s(`description`,`smartwindow-digest-form-error-description`),`.description-input`)}async#x(e){let t=b.DigestManager;return this.#a?t.editDigest(this.digest.id,e):(await t.editDigest(this.digest.id,e),t.enableDigest(this.digest.id))}#S(){this.shadowRoot.querySelector(`form`).requestSubmit()}async#C(e){if(e.preventDefault(),this.saving)return;let t=this.#b();if(t){await this.updateComplete,this.shadowRoot.querySelector(t)?.focus();return}let n={title:this.digest?.title,description:this.description.trim(),domains:this.domains,schedule:this.#y()};this.saving=!0;try{let e=await this.#x(n);if(!e)throw Error(`Digest not found`);this.#o(`digest-form:save-success`,{digest:e,mode:this.mode,length:this.length})}catch(e){console.error(`Failed to save digest:`,e),this.#o(`digest-form:save-error`,{error:e,mode:this.mode})}finally{this.saving=!1}}#w(){this.#o(`digest-form:cancel`,{})}#T(e){return e?i`<div class="error-message" data-l10n-id=${e}></div>`:t}#E(e,n,r,a){return i`<moz-select
      data-l10n-id=${e}
      data-l10n-attrs="label"
      .value=${String(n)}
      @change=${r}
    >
      ${a.map(({value:e,l10nId:n,label:r})=>i`<moz-option
            value=${e}
            data-l10n-id=${n??t}
            label=${r??t}
          ></moz-option>`)}
    </moz-select>`}render(){return i`
      <link
        rel="stylesheet"
        href="${h}"
      />
      <form aria-labelledby="heading" novalidate @submit=${this.#C}>
        <header>
          <h2
            id="heading"
            data-l10n-id=${this.#a?`smartwindow-digest-form-edit-heading`:`smartwindow-digest-form-create-heading`}
          ></h2>
          <p
            data-l10n-id=${this.#a?`smartwindow-digest-form-edit-subheading`:`smartwindow-digest-form-create-subheading`}
          ></p>
        </header>

        <div class="field field-topic">
          <span
            class="field-label"
            data-l10n-id="smartwindow-digest-form-topic-label"
          ></span>
          <div class="field-input field-readonly">
            <span>${this.digest?.title}</span>
            <moz-button
              class="memory-tooltip-trigger"
              type="icon ghost"
              size="small"
              iconsrc=${T}
              popovertarget="memory-tooltip"
              data-l10n-id="smartwindow-digest-form-memory-tooltip-trigger"
              data-l10n-attrs="aria-label"
            ></moz-button>
          </div>
          <div
            id="memory-tooltip"
            class="memory-tooltip"
            popover
            @click=${this.#i}
          >
            <p data-l10n-id="smartwindow-digest-form-memory-tooltip">
              <a
                href="about:preferences#manageMemories"
                data-l10n-name="memories-link"
              ></a>
            </p>
          </div>
        </div>

        <div
          class="field field-description ${this.fieldErrors.description?`field-error`:``}"
        >
          <moz-textarea
            class="description-input"
            data-l10n-id="smartwindow-digest-form-description"
            data-l10n-attrs="label,placeholder"
            required
            ?invalid=${!!this.fieldErrors.description}
            .value=${r(this.description)}
            @input=${this.#c}
          ></moz-textarea>
          ${this.#T(this.fieldErrors.description)}
        </div>

        <div
          class="field field-sources ${this.fieldErrors.sources?`field-error`:``}"
        >
          <moz-input-url
            class="sources-input"
            data-l10n-id="smartwindow-digest-form-sources"
            data-l10n-attrs="label,placeholder"
            ?invalid=${!!this.fieldErrors.sources}
            .value=${r(this.pendingUrl)}
            @input=${this.#f}
            @keydown=${this.#p}
          ></moz-input-url>
          ${this.#T(this.fieldErrors.sources)}
          ${this.domains.length?i`<div class="chips">
                ${this.domains.map(e=>i`<smartwindow-chip
                      type="source"
                      removable
                      label=${e}
                      .iconSrc=${`page-icon:${this.#n(e)}`}
                      @smartwindow-chip:remove=${()=>this.#m(e)}
                    ></smartwindow-chip>`)}
              </div>`:t}
        </div>

        <div class="field-row">
          ${this.#E(`smartwindow-digest-form-frequency`,this.frequency,this.#h,Object.values(v).map(e=>({value:e,l10nId:S[e]})))}
          ${this.frequency===v.WEEKLY?this.#E(`smartwindow-digest-form-day`,this.weekday,this.#g,O):t}
        </div>
        ${this.frequency===v.ON_DEMAND?t:this.#E(`smartwindow-digest-form-time`,this.hour,this.#_,D)}
        ${this.#E(`smartwindow-digest-form-length`,this.length,this.#v,Object.values(_).map(e=>({value:e,l10nId:C[e]})))}

        <p
          class="required-note"
          data-l10n-id="smartwindow-digest-form-required-note"
        ></p>

        <moz-button-group>
          <moz-button
            data-l10n-id="smartwindow-digest-form-cancel"
            @click=${this.#w}
          ></moz-button>
          <moz-button
            class="submit-button"
            type="primary"
            data-l10n-id=${this.#a?`smartwindow-digest-form-save`:`smartwindow-digest-form-create`}
            ?disabled=${this.saving}
            @click=${this.#S}
          ></moz-button>
        </moz-button-group>
      </form>
    `}},customElements.define(`smartwindow-digest-form`,k)})))()}var j,M,N,P,F,I;function L(){return(L=e((()=>{f(),n(),A(),window.MozXULElement.insertFTLIfNeeded(`browser/aiWindow.ftl`),window.MozXULElement.insertFTLIfNeeded(`preview/aiWindow.ftl`),j={title:`Domain-specific UI Widgets/AI Window/Smartwindow Digest Form`,component:`smartwindow-digest-form`,argTypes:{mode:{control:`select`,options:[`default`,`edit`]},digest:{control:`object`}}},M=({mode:e,digest:t})=>i`
  <link
    rel="stylesheet"
    href="${p}"
  />
  <div style="max-width: 350px">
    <smartwindow-digest-form
      mode=${e}
      .digest=${t}
    ></smartwindow-digest-form>
  </div>
`,N={id:`story`,memory_id:`story`,title:`Nutrition research and food news`,description:`New nutrition research, dietary guidance and food news.`,domains:[`bbcnews.com`,`apnews.com`],schedule:{type:`daily`,hour:9,minute:0}},P=M.bind({}),P.args={mode:`default`,digest:N},F=M.bind({}),F.args={mode:`edit`,digest:{...N,schedule:{type:`weekly`,weekday:1,hour:18,minute:0}}},I=M.bind({}),I.args={mode:`edit`,digest:{...N,schedule:{type:`on-demand`}}}})))()}L();export{P as Create,F as Edit,I as OnDemand,j as default};