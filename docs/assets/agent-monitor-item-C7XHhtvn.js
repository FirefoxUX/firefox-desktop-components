import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{_ as t,f as n,h as r,u as i}from"./lit.all-Co4HOUmF.js";import{c as a,o}from"./iframe-DP8hlEO7.js";import{n as s}from"./moz-input-text-4LjZ5G6q.js";import{t as c}from"./moz-input-url-C4RmET9d.js";import{t as l}from"./moz-textarea-Dg0eUjfm.js";import{t as u}from"./moz-select-dgzPb5um.js";import{n as d}from"./moz-button-DllAM7jW.js";import{t as f}from"./smartwindow-chip-t4NwoSp2.js";var p;function m(){return(m=e((()=>{p=new URL(`agent-monitor-item-DEYvKO2u.css`,import.meta.url).href+``})))()}var h;function g(){return(g=e((()=>{h=new URL(`monitors-display-DZKbuQ19.css`,import.meta.url).href+``})))()}var _;function v(){return(v=e((()=>{g(),n(),a(),_=class extends o{static properties={size:{type:String,reflect:!0}};constructor(){super(),this.size=`large`}render(){return i`
      <link
        rel="stylesheet"
        href="${h}"
      />

      <div class="icon-container" aria-hidden="true">
        <span class="icon"></span>
      </div>
    `}},customElements.define(`monitor-icon`,_)})))()}var y,b;function x(){return(x=e((()=>{g(),n(),a(),y={watching:`ai-tasks-alert-status-watching`,paused:`ai-tasks-alert-status-paused`},b=class extends o{static properties={kind:{type:String,reflect:!0}};render(){let e=y[this.kind];return i`
      <link
        rel="stylesheet"
        href="${h}"
      />
      ${e?i`<span data-l10n-id=${e}></span>`:t}
    `}},customElements.define(`monitor-status-chip`,b)})))()}function S(e){return C[e]??w}var C,w;function T(){return(T=e((()=>{C=Object.freeze({network_error:`ai-tasks-alert-history-error-network`,timeout:`ai-tasks-alert-history-error-timeout`,budget_exceeded:`ai-tasks-alert-history-error-budget`,rate_limit:`ai-tasks-alert-history-error-rate-limit`,request_too_large:`ai-tasks-alert-history-error-too-large`,max_users_reached:`ai-tasks-alert-history-error-capacity`,upstream_rate_limit:`ai-tasks-alert-history-error-upstream-rate-limit`,fastly_rate_limit:`ai-tasks-alert-history-error-connection-blocked`,request_blocked:`ai-tasks-alert-history-error-request-blocked`,invalid_model:`ai-tasks-alert-history-error-request`,invalid_request:`ai-tasks-alert-history-error-request`,global_budget_exceeded:`ai-tasks-alert-history-error-service-budget`,guest_budget_exceeded:`ai-tasks-alert-history-error-service-budget`,max_guests_reached:`ai-tasks-alert-history-error-capacity`,auth_error:`ai-tasks-alert-history-error-auth`,content_extraction_error:`ai-tasks-alert-history-error-content-extraction`,canceled:`ai-tasks-alert-history-error-canceled`,interrupted:`ai-tasks-alert-history-error-interrupted`,model_error:`ai-tasks-alert-history-error-model`,prompt_load_error:`ai-tasks-alert-history-error-prompt-load`,unknown_error:`ai-tasks-alert-history-error-unknown`,active_limit_reached:`ai-tasks-alert-error-active-limit`}),w=C.unknown_error})))()}function E(e=new Date){let t=e.getHours()*60+e.getMinutes(),n=Math.ceil(t/30);return n>=z.length?z[0].value:z[n].value}var D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;function H(){return(H=e((()=>{m(),n(),a(),s(),c(),l(),u(),d(),v(),x(),f(),T(),D=Object.freeze({MET:`met`,NOT_MET:`not-met`,COULD_NOT_CHECK:`could-not-check`}),O=Object.freeze({[D.MET]:`ai-tasks-alert-condition-met`,[D.NOT_MET]:`ai-tasks-alert-condition-not-met`,[D.COULD_NOT_CHECK]:`ai-tasks-alert-condition-could-not-check`}),k=Object.freeze({[D.MET]:`ai-tasks-alert-last-result-met`,[D.NOT_MET]:`ai-tasks-alert-last-result-not-met`,[D.COULD_NOT_CHECK]:`ai-tasks-alert-last-result-could-not-check`}),A=Object.freeze({DAILY:`daily`,WEEKLY:`weekly`}),j=`chrome://browser/skin/calendar-24.svg`,M=`chrome://browser/skin/history-20.svg`,N=5,P=250,F=6e4,I=45e3,L=`chrome://global/skin/icons/highlights.svg`,R=`chrome://global/skin/icons/loading.svg`,z=Array.from({length:48},(e,t)=>{let n=Math.floor(t/2),r=t%2?30:0,i=new Date;i.setHours(n,r,0,0);let a=i.toLocaleTimeString(void 0,{hour:`numeric`,minute:`2-digit`,hour12:!0});return{value:`${String(n).padStart(2,`0`)}:${String(r).padStart(2,`0`)}`,label:a}}),B=[{value:0,ftlId:`ai-tasks-alert-weekday-sunday`},{value:1,ftlId:`ai-tasks-alert-weekday-monday`},{value:2,ftlId:`ai-tasks-alert-weekday-tuesday`},{value:3,ftlId:`ai-tasks-alert-weekday-wednesday`},{value:4,ftlId:`ai-tasks-alert-weekday-thursday`},{value:5,ftlId:`ai-tasks-alert-weekday-friday`},{value:6,ftlId:`ai-tasks-alert-weekday-saturday`}],V=class extends o{static properties={agent:{type:Object},draft:{type:Object},mode:{type:String,reflect:!0},expanded:{type:Boolean,reflect:!0},editing:{type:Boolean,reflect:!0},showLastResult:{type:Boolean},maxWatchUrls:{type:Number},selfContained:{type:Boolean,reflect:!0,attribute:`self-contained`},canResume:{type:Boolean},hasChatContext:{type:Boolean},canSuggest:{type:Boolean},checkFrequency:{type:String,state:!0},scheduleTime:{type:String,state:!0},scheduleWeekday:{type:Number,state:!0},alertDescription:{type:String,state:!0},pageUrls:{type:Array,state:!0},pendingUrl:{type:String,state:!0},pendingUrlError:{type:Object,state:!0},fieldErrors:{type:Object,state:!0},resolvedTitles:{type:Object,state:!0},suggesting:{type:Boolean,state:!0},suggested:{type:Boolean,state:!0},suggestionError:{type:Object,state:!0}};constructor(){super(),this.agent={},this.draft=null,this.mode=`display`,this.expanded=!1,this.editing=!1,this.showLastResult=!1,this.maxWatchUrls=N,this.selfContained=!0,this.canResume=!0,this.hasChatContext=!1,this.canSuggest=!0,this.checkFrequency=A.DAILY,this.scheduleTime=E(),this.scheduleWeekday=1,this.alertDescription=``,this.pageUrls=[],this.pendingUrl=``,this.pendingUrlError=null,this.fieldErrors={name:null,condition:null,pages:null},this.resolvedTitles={},this.suggesting=!1,this.suggested=!1,this.suggestionError=null,this.#e=null,this.addEventListener(`agent-monitor-item:titles-resolved`,e=>{this.resolvedTitles={...this.resolvedTitles,...e.detail?.titles}}),this.addEventListener(`agent-monitor-item:suggestion`,e=>this.#v(e.detail))}#e;#t=null;#n=new Set;#r=null;#i=null;#a=null;#o=0;#s=!1;#c=[];willUpdate(e){e.has(`agent`)&&(this.#w(),this.#C()),(e.has(`agent`)||e.has(`draft`))&&this.#T(),e.has(`mode`)&&this.mode!==`create`&&(this.#p(),this.#m(),this.suggestionError=null),!this.#u&&(this.suggesting||this.suggestionError)&&(this.#p(),this.suggestionError=null)}updated(e){(e.has(`pageUrls`)||e.has(`mode`)||e.has(`editing`))&&this.#y()}#l(){!this.suggesting&&this.mode===`create`&&this.#u&&(this.#s=this.shadowRoot.activeElement===this.#d,this.suggesting=!0,this.suggestionError=null,this.#a=++this.#o,this.#i=setTimeout(()=>this.#g(),I),this.#A(`agent-monitor-item:request-suggestion`,{requestId:this.#a,watchUrls:[...this.pageUrls],previousDrafts:this.#c.map(e=>({...e}))}))}get#u(){return this.canSuggest&&(!!this.pageUrls.length||this.hasChatContext)}get#d(){return this.shadowRoot?.querySelector(`.suggest-button`)}get#f(){return this.suggesting?`ai-tasks-alert-suggest-generating-button`:this.suggested?`ai-tasks-alert-suggest-retry-button`:`ai-tasks-alert-suggest-button`}#p(){this.#i&&=(clearTimeout(this.#i),null),this.#a=null,this.#s=!1,this.suggesting=!1}#m(){this.suggested=!1,this.#c=[]}#h(e){this.suggestionError&&!e.target.closest(`.create-top`)&&(this.suggestionError=null)}#g(){let e=this.#s;this.#p(),this.suggestionError={id:`ai-tasks-alert-error-suggestion-failed`},e&&this.#_()}async#_(){await this.updateComplete;let e=this.#d;await e?.updateComplete;let t=this.ownerDocument,n=t.activeElement;!e||this.suggesting||n&&n!==t.body&&n!==t.documentElement||e.focus()}#v({requestId:e,title:t,condition:n}={}){if(this.#a===null||e!==this.#a)return;if(!t&&!n){this.#g();return}let r=this.#s;this.#p(),this.suggested=!0,this.#c=[...this.#c,{title:t||``,condition:n||``}].slice(-3),t&&(this.#e=t,this.#F(`name`)),n&&(this.alertDescription=n,this.#F(`condition`)),this.requestUpdate(),this.#E(),r&&this.#_()}#y(){if(this.mode!==`create`&&!this.editing)return;let e=this.pageUrls.filter(e=>!this.#b(e)&&!this.#n.has(e));e.length&&(e.forEach(e=>this.#n.add(e)),this.#A(`agent-monitor-item:resolve-titles`,{urls:e}))}#b(e){return this.resolvedTitles[e]||this.agent?.watchUrlTitles?.[e]}connectedCallback(){super.connectedCallback(),this.#C()}disconnectedCallback(){this.#t&&this.#D(),this.#S(),this.#p(),super.disconnectedCallback()}get#x(){let e=this.agent?.checkLimit;return e?.until>Date.now()?e:null}#S(){this.#r&&=(clearTimeout(this.#r),null)}#C(){this.#S();let e=this.agent?.checkLimit?.until;if(!this.isConnected||!(e>Date.now()))return;let t=Math.min(e-Date.now(),F);this.#r=setTimeout(()=>{this.#r=null,this.agent?.checkLimit?.until>Date.now()?this.#C():this.requestUpdate()},t)}#w(){this.#e=null,this.#m(),this.#n.clear();let{watchUrls:e,url:t,condition:n,expanded:r}=this.agent??{},i=[];e?.length?i=e:t&&(i=[t]),this.pageUrls=i.filter(e=>e?.trim().length),this.alertDescription=n??``,this.pendingUrl=``,this.pendingUrlError=null,this.fieldErrors={name:null,condition:null,pages:null},r!==void 0&&(this.expanded=r);let a=this.agent?.schedule;a&&(this.checkFrequency=a.frequency??this.checkFrequency,this.scheduleTime=a.time??this.scheduleTime,this.scheduleWeekday=a.weekday?Number(a.weekday):this.scheduleWeekday)}#T(){if(!this.draft)return;let{editing:e,monitorName:t,condition:n,watchUrls:r,pendingUrl:i,schedule:a,suggested:o,previousDrafts:s}=this.draft;e&&(this.editing=!0,this.expanded=!0),t!==void 0&&(this.#e=t),n!==void 0&&(this.alertDescription=n),r&&(this.pageUrls=[...r]),i!==void 0&&(this.pendingUrl=i),o!==void 0&&(this.suggested=!!o),Array.isArray(s)&&(this.#c=s.map(e=>({title:String(e?.title??``),condition:String(e?.condition??``)})).slice(-3)),a?.frequency&&(this.checkFrequency=a.frequency),a?.time&&(this.scheduleTime=a.time),a?.weekday!==void 0&&(this.scheduleWeekday=Number(a.weekday))}#E({debounce:e=!1}={}){(this.mode===`create`||this.editing)&&(this.#k(),e?this.#t=setTimeout(()=>this.#D(),P):this.#D())}#D(){this.#k(),this.#A(`agent-monitor-item:draft-change`,{draft:{editing:this.editing,monitorName:this.#j,condition:this.alertDescription,watchUrls:[...this.pageUrls],pendingUrl:this.pendingUrl,schedule:{frequency:this.checkFrequency,time:this.scheduleTime,weekday:this.scheduleWeekday},suggested:this.suggested,previousDrafts:this.#c}})}#O(){this.#k(),this.#A(`agent-monitor-item:draft-change`,{draft:null})}#k(){this.#t&&=(clearTimeout(this.#t),null)}#A(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}get#j(){return this.#e??this.agent?.monitorName??``}get#M(){return this.pageUrls.length>=this.maxWatchUrls}focusName(){this.shadowRoot?.querySelector(`.monitor-name-input`)?.focus()}#N(e){return this.selfContained?e:t}#P(){this.#M?this.pendingUrlError=null:this.pendingUrl.trim()&&this.#K();let e={name:null,condition:null,pages:null};this.mode===`create`&&!this.#j.trim()&&(e.name={id:`ai-tasks-alert-error-name-required`}),this.alertDescription?.trim()||(e.condition={id:`ai-tasks-alert-error-condition-required`}),this.pageUrls.length||(e.pages={id:`ai-tasks-alert-error-no-pages`}),this.fieldErrors=e;let t=[`name`,`condition`,`pages`].filter(t=>e[t]);return this.pendingUrlError&&!t.includes(`pages`)&&t.push(`pages`),t}#F(e){this.fieldErrors[e]&&(this.fieldErrors={...this.fieldErrors,[e]:null})}#I(e){let t={name:`.monitor-name-input`,condition:`.monitor-condition-input`,pages:`.page-url-input`}[e];this.shadowRoot.querySelector(t)?.focus()}#L(e){this.#e=e.target.value,this.#F(`name`),this.#E({debounce:e.type===`input`})}#R(e){e.target.closest(`button, moz-button`)||this.#z(e)}#z(){this.expanded=!this.expanded,this.#A(`agent-monitor-item:toggle`,{expanded:this.expanded})}#B(){this.editing=!this.editing,this.editing?this.#E():this.#O(),this.#A(`agent-monitor-item:edit-toggle`,{editing:this.editing})}#V(e){this.alertDescription=e.target.value,this.#F(`condition`),this.#E({debounce:e.type===`input`})}#H(e){this.alertDescription=e,this.#F(`condition`),this.#E()}#U(e){let t=e.trim();if(!t)return``;let n=t.includes(`://`)?t:`https://${t}`;try{let{protocol:e,hostname:t}=new URL(n);if((e===`http:`||e===`https:`)&&t)return new URL(n).href}catch{}return``}#W(e,t){try{return new URL(e).href===new URL(t).href}catch{return e===t}}#G(e){let t=this.#U(e);return t?{valid:!0,error:null,normalized:t}:{valid:!1,error:{id:`ai-tasks-alert-error-invalid-url`},normalized:``}}#K(){if(!this.pendingUrl.trim())return;let{valid:e,error:t,normalized:n}=this.#G(this.pendingUrl);e?this.pageUrls.some(e=>this.#W(e,n))?this.pendingUrlError={id:`ai-tasks-alert-error-duplicate-url`}:this.#M?this.pendingUrlError={id:`ai-tasks-alert-error-max-urls`,args:{maxUrls:this.maxWatchUrls}}:(this.pageUrls=[...this.pageUrls,n],this.pendingUrl=``,this.pendingUrlError=null,this.#F(`pages`),this.#E()):this.pendingUrlError=t}async#q(){this.#K(),this.#M&&(await this.updateComplete,this.#I(`pages`))}#J(e){this.pageUrls=this.pageUrls.filter(t=>t!==e),this.#E()}#Y(e){try{return new URL(e).hostname}catch{return e}}#X(e){this.pendingUrl=e.target.value,this.pendingUrlError&&=null,this.#E({debounce:!0})}#Z(e){e.key===`Enter`&&(e.preventDefault(),this.#K())}#Q(){this.#k(),this.#p(),this.#m(),this.#A(`agent-monitor-item:cancel`,{})}async#$(){this.suggestionError=null;let e=this.#P();if(e.length){await this.updateComplete,this.#I(e[0]);return}this.#k(),this.#p(),this.#m();let t=this.mode===`create`;this.#A(`agent-monitor-item:submit`,{mode:this.mode,id:this.agent?.id,monitorName:this.#j,condition:this.alertDescription.trim(),watchUrls:[...this.pageUrls],schedule:{frequency:this.checkFrequency,time:this.scheduleTime,weekday:this.scheduleWeekday},autoExpandAndCheck:t}),this.editing&&(this.editing=!1,this.#A(`agent-monitor-item:edit-toggle`,{editing:!1}))}#ee(){return i`<monitor-status-chip
      kind=${this.agent?.status?.kind??t}
    ></monitor-status-chip>`}#te(){let[e]=this.agent?.history??[],n=e?this.#ae(e):null;return n?i`<span
      class="last-result ${e.conditionMet?`match`:`not-match`}"
      data-l10n-id=${k[n.resultState]}
    ></span>`:t}#ne(e){return e?i`<div
          class="error-message"
          data-l10n-id=${e.id}
          data-l10n-args=${e.args?JSON.stringify(e.args):t}
        ></div>`:t}#re(){let e=this.agent?.conditionPresets??[];return i`
      <div class="field">
        <moz-textarea
          class="monitor-condition-input"
          data-l10n-id="ai-tasks-alert-alert"
          data-l10n-attrs="placeholder,label,description"
          required
          ?invalid=${!!this.fieldErrors.condition}
          .value=${r(this.alertDescription)}
          @input=${this.#V}
          @change=${this.#V}
        ></moz-textarea>
        ${this.#ne(this.fieldErrors.condition)}
        ${e.length?i`<div class="chip-row">
              ${e.map(e=>i`<moz-button
                    class="chip ${e===this.alertDescription?`selected`:``}"
                    label=${e}
                    @click=${()=>this.#H(e)}
                  ></moz-button>`)}
            </div>`:t}
      </div>
    `}#ie(){return i`
      <div class="field">
        <div class="pages-container">
          <div class="page-input-row">
            <moz-input-url
              class="form-input page-url-input"
              required
              ?invalid=${!!this.pendingUrlError||!!this.fieldErrors.pages}
              data-l10n-id="ai-tasks-alert-pages"
              data-l10n-attrs="placeholder,label"
              data-l10n-args=${JSON.stringify({maxPages:this.maxWatchUrls})}
              .value=${this.pendingUrl}
              @input=${this.#X}
              @keydown=${this.#Z}
            ></moz-input-url>
            ${this.#M?t:i`<moz-button
                  size="small"
                  type="icon ghost"
                  class="add-page-btn"
                  iconsrc="chrome://global/skin/icons/plus.svg"
                  data-l10n-id="ai-tasks-alert-add-url"
                  data-l10n-attrs="aria-label"
                  @click=${()=>this.#q()}
                ></moz-button>`}
          </div>
          ${this.#ne(this.pendingUrlError??this.fieldErrors.pages)}
          ${this.pageUrls.length?i`<div class="page-pills-row">
                ${this.pageUrls.map(e=>i`<smartwindow-chip
                      type="source"
                      removable
                      label=${this.#b(e)||this.#Y(e)}
                      .iconSrc=${`page-icon:${e}`}
                      title=${e}
                      @smartwindow-chip:remove=${()=>this.#J(e)}
                    ></smartwindow-chip>`)}
              </div>`:t}
        </div>
      </div>
    `}#ae(e){if(!e.checkedAt)return null;let t=new Date(e.checkedAt),n=t.toLocaleDateString(void 0,{month:`short`,day:`numeric`,year:`numeric`})+` - `+t.toLocaleTimeString(void 0,{hour:`numeric`,minute:`2-digit`,hour12:!0});return e.status===`error`?{when:n,resultState:D.COULD_NOT_CHECK,note:``,noteL10nId:S(e.errorCode),status:e.status,low:!0}:e.conditionMet?{when:n,resultState:D.MET,note:e.resultExplanation||``,status:e.status,low:!1}:{when:n,resultState:D.NOT_MET,note:e.resultExplanation||``,noteL10nId:e.resultExplanation?null:`smartwindow-agent-monitor-history-no-match`,status:e.status,low:!0}}#oe(){let e=this.agent?.history??[];return e.length?i`
      <div
        class="section-toggle"
        data-l10n-id="ai-tasks-alert-change-history"
      ></div>
      <div class="history">
        ${e.map(e=>{let n=this.#ae(e);return n?i`<div class="history-item">
            <span class="when">${n.when}</span>
            <span
              class="condition-badge ${n.resultState}"
              data-l10n-id=${O[n.resultState]}
            ></span>
            ${n.noteL10nId?i`<span
                  data-l10n-id=${n.noteL10nId}
                ></span>`:n.note?i`<span>${n.note}</span>`:t}
          </div>`:t})}
      </div>
      <div class="history-note">
        <p data-l10n-id="ai-tasks-alert-change-history-description"></p>
      </div>
    `:t}#se(e){this.checkFrequency=e.target.value,this.#E()}#ce(e){this.scheduleTime=e.target.value,this.#E()}#le(e){this.scheduleWeekday=Number(e.target.value),this.#E()}#ue(){let e=this.agent?.schedule;if(!e)return t;let[n,r]=e.time.split(`:`).map(Number),a=new Date;if(a.setHours(n,r,0,0),e.frequency===A.WEEKLY){let t=[`ai-tasks-alert-schedule-weekly-sunday`,`ai-tasks-alert-schedule-weekly-monday`,`ai-tasks-alert-schedule-weekly-tuesday`,`ai-tasks-alert-schedule-weekly-wednesday`,`ai-tasks-alert-schedule-weekly-thursday`,`ai-tasks-alert-schedule-weekly-friday`,`ai-tasks-alert-schedule-weekly-saturday`][e.weekday];if(t)return i`<div class="monitor-row">
          <span
            class="val"
            data-l10n-id=${t}
            data-l10n-args=${JSON.stringify({time:a.getTime()})}
          ></span>
        </div>`}return i`
      <span
        class="val"
        data-l10n-id="ai-tasks-alert-schedule-daily-at"
        data-l10n-args=${JSON.stringify({time:a.getTime()})}
      ></span>
    `}#de(){return i`<div class="form-section-half">
      <label
        class="form-label"
        data-l10n-id="ai-tasks-alert-time-label"
      ></label>

      <moz-select
        class="form-select"
        .value=${this.scheduleTime}
        @change=${this.#ce}
      >
        ${z.map(e=>i`<moz-option
              value=${e.value}
              label=${e.label}
              iconsrc=${this.#N(M)}
            ></moz-option>`)}
      </moz-select>
    </div>`}#fe(){return i`
      <div class="form-row">
        <div class="schedule-container">
          <div class="form-section-half">
            <label
              class="form-label"
              data-l10n-id="ai-tasks-alert-check-label"
            ></label>
            <moz-select
              class="form-select"
              .value=${this.checkFrequency}
              @change=${this.#se}
            >
              <moz-option
                value=${A.DAILY}
                data-l10n-id="ai-tasks-alert-schedule-daily"
                iconsrc=${this.#N(j)}
              ></moz-option>
              <moz-option
                value=${A.WEEKLY}
                data-l10n-id="ai-tasks-alert-schedule-weekly"
                iconsrc=${this.#N(j)}
              ></moz-option>
            </moz-select>
          </div>
          ${this.checkFrequency===A.WEEKLY?i`<div class="form-section-half">
                <label
                  class="form-label"
                  data-l10n-id="ai-tasks-alert-day-label"
                ></label>
                <moz-select
                  class="form-select"
                  value=${this.scheduleWeekday}
                  @change=${this.#le}
                >
                  ${B.map(e=>i`<moz-option
                        value=${e.value}
                        data-l10n-id=${e.ftlId}
                        iconsrc=${this.#N(j)}
                      ></moz-option>`)}
                </moz-select>
              </div>`:t}
        </div>
        ${this.#de()}
      </div>
    `}#pe(){return i`
      <div
        class="monitor-card"
        @focusin=${this.#h}
        @input=${this.#h}
      >
        ${this.selfContained||this.#u?i`<div class="create-top">
              <div class="create-header">
                ${this.selfContained?i`<div class="title-container">
                      <monitor-icon size="small"></monitor-icon>
                      <h2
                        class="monitor-card-state-title"
                        data-l10n-id="ai-tasks-alert-modal-title"
                      ></h2>
                    </div>`:t}
                ${this.#u?i`<moz-button
                      class="suggest-button ${this.suggesting?`suggesting`:``}"
                      size="small"
                      type="default"
                      iconsrc=${this.suggesting?R:L}
                      data-l10n-id=${this.#f}
                      data-l10n-attrs="label"
                      ?disabled=${this.suggesting}
                      @click=${this.#l}
                    ></moz-button>`:t}
              </div>
              ${this.#u?i`<div class="suggest-status" aria-live="polite">
                    ${this.suggesting?i`<span
                          class="sr-only"
                          data-l10n-id="ai-tasks-alert-suggest-generating-button"
                        ></span>`:this.#ne(this.suggestionError)}
                  </div>`:t}
            </div>`:t}
        <div class="monitor-card-head">
          <div class="monitor-name-field">
            <moz-input-text
              class="monitor-name-input"
              data-l10n-id="ai-tasks-alert-name"
              data-l10n-attrs="label"
              required
              ?invalid=${!!this.fieldErrors.name}
              .value=${r(this.#j)}
              @input=${this.#L}
              @change=${this.#L}
            ></moz-input-text>
            ${this.#ne(this.fieldErrors.name)}
          </div>
        </div>
        ${this.#re()} ${this.#ie()}
        ${this.#fe()}

        <p
          class="required-note"
          data-l10n-id="ai-tasks-alert-required-note"
        ></p>

        <div class="monitor-card-actions">
          <span class="spacer"></span>
          <moz-button
            id="cancel-create-button"
            type="default"
            data-l10n-id="ai-tasks-alert-cancel-button"
            data-l10n-attrs="label"
            @click=${this.#Q}
          ></moz-button>
          <moz-button
            type="primary"
            data-l10n-id="ai-tasks-alert-create-button"
            data-l10n-attrs="label"
            @click=${this.#$}
          ></moz-button>
        </div>
      </div>
    `}#me(){let e=this.agent??{};return i`
      <div class="monitor-card chatcard" @click=${this.#R}>
        <div class="monitor-card-head">
          <div class="monitor-card-head-left">
            ${this.#ee()}
            <span class="monitor-card-title"
              ><span class="monitor-card-name">${e.monitorName}</span></span
            >
          </div>
          <div class="monitor-card-head-right">
            ${this.showLastResult?this.#te():t}
            <button
              type="button"
              class="chev"
              aria-expanded=${this.expanded}
              data-l10n-id="ai-tasks-alert-show-details"
              data-l10n-attrs="aria-label"
              @click=${this.#z}
            ></button>
          </div>
        </div>
        ${this.expanded?this.#he():t}
      </div>
    `}#he(){let e=this.agent??{},n=this.#x;return i`
      <div class="watch-expand" @click=${e=>e.stopPropagation()}>
        ${this.editing?i`${this.#re()} ${this.#ie()}
            ${this.#fe()}`:i`<div class="task-section">
                <div
                  class="task-header"
                  data-l10n-id="ai-tasks-alert-the-alert"
                ></div>
                <div class="task-content">${e.condition}</div>
              </div>
              ${e.watchUrls?.length?i`<div class="url-section">
                    <div
                      class="section-toggle"
                      data-l10n-id="ai-tasks-alert-on-this-page"
                    ></div>
                    <div class="url-chips">
                      ${e.watchUrls.map(t=>i`<smartwindow-chip
                            type="source"
                            label=${e.watchUrlTitles?.[t]??this.#Y(t)}
                            .iconSrc=${`page-icon:${t}`}
                            title=${t}
                            .href=${t}
                          ></smartwindow-chip>`)}
                    </div>
                  </div>`:t}
              <div class="monitor-row">${this.#ue()}</div>`}
        ${this.editing?t:this.#oe()}
        ${!this.editing&&n?i`<p
              id="check-limit-reason"
              class="check-limit-reason"
              data-l10n-id=${S(n.errorCode)}
            ></p>`:t}

        <div class="monitor-card-actions">
          ${this.editing?t:i`<moz-button
                  id="edit-button"
                  type="default"
                  @click=${this.#B}
                  data-l10n-id="ai-tasks-alert-edit-button"
                  data-l10n-attrs="label"
                ></moz-button>
                <moz-button
                  id="pause-button"
                  type="default"
                  ?disabled=${e.status?.kind===`paused`&&!this.canResume}
                  @click=${()=>{let t=e.status?.kind===`paused`;this.#A(`agent-monitor-item:pause`,{id:e.id,paused:!t})}}
                  data-l10n-id=${e.status?.kind===`paused`?`ai-tasks-alert-resume-button`:`ai-tasks-alert-pause-button`}
                  data-l10n-attrs="label"
                ></moz-button>
                <moz-button
                  id="check-now-button"
                  type="default"
                  ?disabled=${!!n}
                  @click=${()=>this.#A(`agent-monitor-item:check-now`,{id:e.id})}
                  data-l10n-id="ai-tasks-alert-check-now-button"
                  data-l10n-attrs="label"
                ></moz-button>`}

          <span class="spacer"></span>
          ${this.editing?i` <moz-button
                  id="cancel-edit-button"
                  type="secondary"
                  @click=${this.#B}
                  data-l10n-id="ai-tasks-alert-cancel-button"
                  data-l10n-attrs="label"
                ></moz-button
                ><moz-button
                  type="primary"
                  @click=${this.#$}
                  data-l10n-id="ai-tasks-alert-save-button"
                  data-l10n-attrs="label"
                ></moz-button>`:i`
                <moz-button
                  class="delete-button"
                  type="icon"
                  iconsrc="chrome://global/skin/icons/delete.svg"
                  data-l10n-id="ai-tasks-alert-delete-button"
                  data-l10n-attrs="aria-label"
                  @click=${()=>this.#A(`agent-monitor-item:delete`,{id:e.id})}
                ></moz-button>
              `}
        </div>
      </div>
    `}render(){return i`
      <link
        rel="stylesheet"
        href="${p}"
      />
      ${this.mode===`create`?this.#pe():this.#me()}
    `}},customElements.define(`agent-monitor-item`,V)})))()}export{H as t};