import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,g as n,u as r}from"./lit.all-BYVOqvrj.js";import{c as i,o as a}from"./iframe-B6GfsneT.js";import{n as o}from"./moz-input-text-DZYdVhfv.js";import{t as s}from"./moz-input-url-D_s170ZP.js";import{t as c}from"./moz-textarea-CkPjDyVb.js";import{t as l}from"./moz-select-qs7ivcg9.js";import{n as u}from"./moz-button-F-bkEbbF.js";import{t as d}from"./smartwindow-chip-CaMZU7ir.js";var f;function p(){return(p=e((()=>{f=new URL(`agent-monitor-item-DsDBtphp.css`,import.meta.url).href+``})))()}var m;function h(){return(h=e((()=>{m=new URL(`monitors-display-DZKbuQ19.css`,import.meta.url).href+``})))()}var g;function _(){return(_=e((()=>{h(),t(),i(),g=class extends a{static properties={size:{type:String,reflect:!0}};constructor(){super(),this.size=`large`}render(){return r`
      <link
        rel="stylesheet"
        href="${m}"
      />

      <div class="icon-container" aria-hidden="true">
        <span class="icon"></span>
      </div>
    `}},customElements.define(`monitor-icon`,g)})))()}var v,y;function b(){return(b=e((()=>{h(),t(),i(),v={watching:`ai-tasks-alert-status-watching`,paused:`ai-tasks-alert-status-paused`},y=class extends a{static properties={kind:{type:String,reflect:!0}};render(){let e=v[this.kind];return r`
      <link
        rel="stylesheet"
        href="${m}"
      />
      ${e?r`<span data-l10n-id=${e}></span>`:n}
    `}},customElements.define(`monitor-status-chip`,y)})))()}function x(e){return S[e]??C}var S,C;function w(){return(w=e((()=>{S=Object.freeze({network_error:`ai-tasks-alert-history-error-network`,timeout:`ai-tasks-alert-history-error-timeout`,budget_exceeded:`ai-tasks-alert-history-error-budget`,rate_limit:`ai-tasks-alert-history-error-rate-limit`,request_too_large:`ai-tasks-alert-history-error-too-large`,max_users_reached:`ai-tasks-alert-history-error-capacity`,upstream_rate_limit:`ai-tasks-alert-history-error-upstream-rate-limit`,fastly_rate_limit:`ai-tasks-alert-history-error-connection-blocked`,request_blocked:`ai-tasks-alert-history-error-request-blocked`,invalid_model:`ai-tasks-alert-history-error-request`,invalid_request:`ai-tasks-alert-history-error-request`,global_budget_exceeded:`ai-tasks-alert-history-error-service-budget`,guest_budget_exceeded:`ai-tasks-alert-history-error-service-budget`,max_guests_reached:`ai-tasks-alert-history-error-capacity`,auth_error:`ai-tasks-alert-history-error-auth`,content_extraction_error:`ai-tasks-alert-history-error-content-extraction`,canceled:`ai-tasks-alert-history-error-canceled`,interrupted:`ai-tasks-alert-history-error-interrupted`,model_error:`ai-tasks-alert-history-error-model`,prompt_load_error:`ai-tasks-alert-history-error-prompt-load`,unknown_error:`ai-tasks-alert-history-error-unknown`,active_limit_reached:`ai-tasks-alert-error-active-limit`}),C=S.unknown_error})))()}function T(e=new Date){let t=e.getHours()*60+e.getMinutes(),n=Math.ceil(t/30);return n>=F.length?F[0].value:F[n].value}var E,D,O,k,A,j,M,N,P,F,I,L;function R(){return(R=e((()=>{p(),t(),i(),o(),s(),c(),l(),u(),_(),b(),d(),w(),E=Object.freeze({MET:`met`,NOT_MET:`not-met`,COULD_NOT_CHECK:`could-not-check`}),D=Object.freeze({[E.MET]:`ai-tasks-alert-condition-met`,[E.NOT_MET]:`ai-tasks-alert-condition-not-met`,[E.COULD_NOT_CHECK]:`ai-tasks-alert-condition-could-not-check`}),O=Object.freeze({[E.MET]:`ai-tasks-alert-last-result-met`,[E.NOT_MET]:`ai-tasks-alert-last-result-not-met`,[E.COULD_NOT_CHECK]:`ai-tasks-alert-last-result-could-not-check`}),k=Object.freeze({DAILY:`daily`,WEEKLY:`weekly`}),A=`chrome://browser/skin/calendar-24.svg`,j=`chrome://browser/skin/history-20.svg`,M=5,N=250,P=6e4,F=Array.from({length:48},(e,t)=>{let n=Math.floor(t/2),r=t%2?30:0,i=new Date;i.setHours(n,r,0,0);let a=i.toLocaleTimeString(void 0,{hour:`numeric`,minute:`2-digit`,hour12:!0});return{value:`${String(n).padStart(2,`0`)}:${String(r).padStart(2,`0`)}`,label:a}}),I=[{value:0,ftlId:`ai-tasks-alert-weekday-sunday`},{value:1,ftlId:`ai-tasks-alert-weekday-monday`},{value:2,ftlId:`ai-tasks-alert-weekday-tuesday`},{value:3,ftlId:`ai-tasks-alert-weekday-wednesday`},{value:4,ftlId:`ai-tasks-alert-weekday-thursday`},{value:5,ftlId:`ai-tasks-alert-weekday-friday`},{value:6,ftlId:`ai-tasks-alert-weekday-saturday`}],L=class extends a{static properties={agent:{type:Object},draft:{type:Object},mode:{type:String,reflect:!0},expanded:{type:Boolean,reflect:!0},editing:{type:Boolean,reflect:!0},showLastResult:{type:Boolean},maxWatchUrls:{type:Number},selfContained:{type:Boolean,reflect:!0,attribute:`self-contained`},canResume:{type:Boolean},checkFrequency:{type:String,state:!0},scheduleTime:{type:String,state:!0},scheduleWeekday:{type:Number,state:!0},alertDescription:{type:String,state:!0},pageUrls:{type:Array,state:!0},pendingUrl:{type:String,state:!0},pendingUrlError:{type:Object,state:!0},fieldErrors:{type:Object,state:!0},resolvedTitles:{type:Object,state:!0}};constructor(){super(),this.agent={},this.draft=null,this.mode=`display`,this.expanded=!1,this.editing=!1,this.showLastResult=!1,this.maxWatchUrls=M,this.selfContained=!0,this.canResume=!0,this.checkFrequency=k.DAILY,this.scheduleTime=T(),this.scheduleWeekday=1,this.alertDescription=``,this.pageUrls=[],this.pendingUrl=``,this.pendingUrlError=null,this.fieldErrors={name:null,condition:null,pages:null},this.resolvedTitles={},this.#e=null,this.addEventListener(`agent-monitor-item:titles-resolved`,e=>{this.resolvedTitles={...this.resolvedTitles,...e.detail?.titles}})}#e;#t=null;#n=new Set;#r=null;willUpdate(e){e.has(`agent`)&&(this.#l(),this.#c()),(e.has(`agent`)||e.has(`draft`))&&this.#u()}updated(e){(e.has(`pageUrls`)||e.has(`mode`)||e.has(`editing`))&&this.#i()}#i(){if(this.mode!==`create`&&!this.editing)return;let e=this.pageUrls.filter(e=>!this.#a(e)&&!this.#n.has(e));e.length&&(e.forEach(e=>this.#n.add(e)),this.#h(`agent-monitor-item:resolve-titles`,{urls:e}))}#a(e){return this.resolvedTitles[e]||this.agent?.watchUrlTitles?.[e]}connectedCallback(){super.connectedCallback(),this.#c()}disconnectedCallback(){this.#t&&this.#f(),this.#s(),super.disconnectedCallback()}get#o(){let e=this.agent?.checkLimit;return e?.until>Date.now()?e:null}#s(){this.#r&&=(clearTimeout(this.#r),null)}#c(){this.#s();let e=this.agent?.checkLimit?.until;if(!this.isConnected||!(e>Date.now()))return;let t=Math.min(e-Date.now(),P);this.#r=setTimeout(()=>{this.#r=null,this.agent?.checkLimit?.until>Date.now()?this.#c():this.requestUpdate()},t)}#l(){this.#e=null,this.#n.clear();let{watchUrls:e,url:t,condition:n,expanded:r}=this.agent??{},i=[];e?.length?i=e:t&&(i=[t]),this.pageUrls=i.filter(e=>e?.trim().length),this.alertDescription=n??``,this.pendingUrl=``,this.pendingUrlError=null,this.fieldErrors={name:null,condition:null,pages:null},r!==void 0&&(this.expanded=r);let a=this.agent?.schedule;a&&(this.checkFrequency=a.frequency??this.checkFrequency,this.scheduleTime=a.time??this.scheduleTime,this.scheduleWeekday=a.weekday?Number(a.weekday):this.scheduleWeekday)}#u(){if(!this.draft)return;let{editing:e,monitorName:t,condition:n,watchUrls:r,pendingUrl:i,schedule:a}=this.draft;e&&(this.editing=!0,this.expanded=!0),t!==void 0&&(this.#e=t),n!==void 0&&(this.alertDescription=n),r&&(this.pageUrls=[...r]),i!==void 0&&(this.pendingUrl=i),a?.frequency&&(this.checkFrequency=a.frequency),a?.time&&(this.scheduleTime=a.time),a?.weekday!==void 0&&(this.scheduleWeekday=Number(a.weekday))}#d({debounce:e=!1}={}){(this.mode===`create`||this.editing)&&(this.#m(),e?this.#t=setTimeout(()=>this.#f(),N):this.#f())}#f(){this.#m(),this.#h(`agent-monitor-item:draft-change`,{draft:{editing:this.editing,monitorName:this.#g,condition:this.alertDescription,watchUrls:[...this.pageUrls],pendingUrl:this.pendingUrl,schedule:{frequency:this.checkFrequency,time:this.scheduleTime,weekday:this.scheduleWeekday}}})}#p(){this.#m(),this.#h(`agent-monitor-item:draft-change`,{draft:null})}#m(){this.#t&&=(clearTimeout(this.#t),null)}#h(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}get#g(){return this.#e??this.agent?.monitorName??``}get#_(){return this.pageUrls.length>=this.maxWatchUrls}focusName(){this.shadowRoot?.querySelector(`.monitor-name-input`)?.focus()}#v(e){return this.selfContained?e:n}#y(){this.#_?this.pendingUrlError=null:this.pendingUrl.trim()&&this.#j();let e={name:null,condition:null,pages:null};this.mode===`create`&&!this.#g.trim()&&(e.name={id:`ai-tasks-alert-error-name-required`}),this.alertDescription?.trim()||(e.condition={id:`ai-tasks-alert-error-condition-required`}),this.pageUrls.length||(e.pages={id:`ai-tasks-alert-error-no-pages`}),this.fieldErrors=e;let t=[`name`,`condition`,`pages`].filter(t=>e[t]);return this.pendingUrlError&&!t.includes(`pages`)&&t.push(`pages`),t}#b(e){this.fieldErrors[e]&&(this.fieldErrors={...this.fieldErrors,[e]:null})}#x(e){let t={name:`.monitor-name-input`,condition:`.monitor-condition-input`,pages:`.page-url-input`}[e];this.shadowRoot.querySelector(t)?.focus()}#S(e){this.#e=e.target.value,this.#b(`name`),this.#d({debounce:e.type===`input`})}#C(e){e.target.closest(`button, moz-button`)||this.#w(e)}#w(){this.expanded=!this.expanded,this.#h(`agent-monitor-item:toggle`,{expanded:this.expanded})}#T(){this.editing=!this.editing,this.editing?this.#d():this.#p(),this.#h(`agent-monitor-item:edit-toggle`,{editing:this.editing})}#E(e){this.alertDescription=e.target.value,this.#b(`condition`),this.#d({debounce:e.type===`input`})}#D(e){this.alertDescription=e,this.#b(`condition`),this.#d()}#O(e){let t=e.trim();if(!t)return``;let n=t.includes(`://`)?t:`https://${t}`;try{let{protocol:e,hostname:t}=new URL(n);if((e===`http:`||e===`https:`)&&t)return new URL(n).href}catch{}return``}#k(e,t){try{return new URL(e).href===new URL(t).href}catch{return e===t}}#A(e){let t=this.#O(e);return t?{valid:!0,error:null,normalized:t}:{valid:!1,error:{id:`ai-tasks-alert-error-invalid-url`},normalized:``}}#j(){if(!this.pendingUrl.trim())return;let{valid:e,error:t,normalized:n}=this.#A(this.pendingUrl);e?this.pageUrls.some(e=>this.#k(e,n))?this.pendingUrlError={id:`ai-tasks-alert-error-duplicate-url`}:this.#_?this.pendingUrlError={id:`ai-tasks-alert-error-max-urls`,args:{maxUrls:this.maxWatchUrls}}:(this.pageUrls=[...this.pageUrls,n],this.pendingUrl=``,this.pendingUrlError=null,this.#b(`pages`),this.#d()):this.pendingUrlError=t}async#M(){this.#j(),this.#_&&(await this.updateComplete,this.#x(`pages`))}#N(e){this.pageUrls=this.pageUrls.filter(t=>t!==e),this.#d()}#P(e){try{return new URL(e).hostname}catch{return e}}#F(e){this.pendingUrl=e.target.value,this.pendingUrlError&&=null,this.#d({debounce:!0})}#I(e){e.key===`Enter`&&(e.preventDefault(),this.#j())}#L(){this.#m(),this.#h(`agent-monitor-item:cancel`,{})}async#R(){let e=this.#y();if(e.length){await this.updateComplete,this.#x(e[0]);return}this.#m();let t=this.mode===`create`;this.#h(`agent-monitor-item:submit`,{mode:this.mode,id:this.agent?.id,monitorName:this.#g,condition:this.alertDescription.trim(),watchUrls:[...this.pageUrls],schedule:{frequency:this.checkFrequency,time:this.scheduleTime,weekday:this.scheduleWeekday},autoExpandAndCheck:t}),this.editing&&(this.editing=!1,this.#h(`agent-monitor-item:edit-toggle`,{editing:!1}))}#z(){return r`<monitor-status-chip
      kind=${this.agent?.status?.kind??n}
    ></monitor-status-chip>`}#B(){let[e]=this.agent?.history??[],t=e?this.#W(e):null;return t?r`<span
      class="last-result ${e.conditionMet?`match`:`not-match`}"
      data-l10n-id=${O[t.resultState]}
    ></span>`:n}#V(e){return e?r`<div
          class="error-message"
          data-l10n-id=${e.id}
          data-l10n-args=${e.args?JSON.stringify(e.args):n}
        ></div>`:n}#H(){let e=this.agent?.conditionPresets??[];return r`
      <div class="field">
        <moz-textarea
          class="monitor-condition-input"
          data-l10n-id="ai-tasks-alert-alert"
          data-l10n-attrs="placeholder,label,description"
          required
          ?invalid=${!!this.fieldErrors.condition}
          .value=${this.alertDescription}
          @input=${this.#E}
          @change=${this.#E}
        ></moz-textarea>
        ${this.#V(this.fieldErrors.condition)}
        ${e.length?r`<div class="chip-row">
              ${e.map(e=>r`<moz-button
                    class="chip ${e===this.alertDescription?`selected`:``}"
                    label=${e}
                    @click=${()=>this.#D(e)}
                  ></moz-button>`)}
            </div>`:n}
      </div>
    `}#U(){return r`
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
              @input=${this.#F}
              @keydown=${this.#I}
            ></moz-input-url>
            ${this.#_?n:r`<moz-button
                  size="small"
                  type="icon ghost"
                  class="add-page-btn"
                  iconsrc="chrome://global/skin/icons/plus.svg"
                  data-l10n-id="ai-tasks-alert-add-url"
                  data-l10n-attrs="aria-label"
                  @click=${()=>this.#M()}
                ></moz-button>`}
          </div>
          ${this.#V(this.pendingUrlError??this.fieldErrors.pages)}
          ${this.pageUrls.length?r`<div class="page-pills-row">
                ${this.pageUrls.map(e=>r`<smartwindow-chip
                      type="source"
                      removable
                      label=${this.#a(e)||this.#P(e)}
                      .iconSrc=${`page-icon:${e}`}
                      title=${e}
                      @smartwindow-chip:remove=${()=>this.#N(e)}
                    ></smartwindow-chip>`)}
              </div>`:n}
        </div>
      </div>
    `}#W(e){if(!e.checkedAt)return null;let t=new Date(e.checkedAt),n=t.toLocaleDateString(void 0,{month:`short`,day:`numeric`,year:`numeric`})+` - `+t.toLocaleTimeString(void 0,{hour:`numeric`,minute:`2-digit`,hour12:!0});return e.status===`error`?{when:n,resultState:E.COULD_NOT_CHECK,note:``,noteL10nId:x(e.errorCode),status:e.status,low:!0}:e.conditionMet?{when:n,resultState:E.MET,note:e.resultExplanation||``,status:e.status,low:!1}:{when:n,resultState:E.NOT_MET,note:e.resultExplanation||``,noteL10nId:e.resultExplanation?null:`smartwindow-agent-monitor-history-no-match`,status:e.status,low:!0}}#G(){let e=this.agent?.history??[];return e.length?r`
      <div
        class="section-toggle"
        data-l10n-id="ai-tasks-alert-change-history"
      ></div>
      <div class="history">
        ${e.map(e=>{let t=this.#W(e);return t?r`<div class="history-item">
            <span class="when">${t.when}</span>
            <span
              class="condition-badge ${t.resultState}"
              data-l10n-id=${D[t.resultState]}
            ></span>
            ${t.noteL10nId?r`<span
                  data-l10n-id=${t.noteL10nId}
                ></span>`:t.note?r`<span>${t.note}</span>`:n}
          </div>`:n})}
      </div>
      <div class="history-note">
        <p data-l10n-id="ai-tasks-alert-change-history-description"></p>
      </div>
    `:n}#K(e){this.checkFrequency=e.target.value,this.#d()}#q(e){this.scheduleTime=e.target.value,this.#d()}#J(e){this.scheduleWeekday=Number(e.target.value),this.#d()}#Y(){let e=this.agent?.schedule;if(!e)return n;let[t,i]=e.time.split(`:`).map(Number),a=new Date;if(a.setHours(t,i,0,0),e.frequency===k.WEEKLY){let t=[`ai-tasks-alert-schedule-weekly-sunday`,`ai-tasks-alert-schedule-weekly-monday`,`ai-tasks-alert-schedule-weekly-tuesday`,`ai-tasks-alert-schedule-weekly-wednesday`,`ai-tasks-alert-schedule-weekly-thursday`,`ai-tasks-alert-schedule-weekly-friday`,`ai-tasks-alert-schedule-weekly-saturday`][e.weekday];if(t)return r`<div class="monitor-row">
          <span
            class="val"
            data-l10n-id=${t}
            data-l10n-args=${JSON.stringify({time:a.getTime()})}
          ></span>
        </div>`}return r`
      <span
        class="val"
        data-l10n-id="ai-tasks-alert-schedule-daily-at"
        data-l10n-args=${JSON.stringify({time:a.getTime()})}
      ></span>
    `}#X(){return r`<div class="form-section-half">
      <label
        class="form-label"
        data-l10n-id="ai-tasks-alert-time-label"
      ></label>

      <moz-select
        class="form-select"
        .value=${this.scheduleTime}
        @change=${this.#q}
      >
        ${F.map(e=>r`<moz-option
              value=${e.value}
              label=${e.label}
              iconsrc=${this.#v(j)}
            ></moz-option>`)}
      </moz-select>
    </div>`}#Z(){return r`
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
              @change=${this.#K}
            >
              <moz-option
                value=${k.DAILY}
                data-l10n-id="ai-tasks-alert-schedule-daily"
                iconsrc=${this.#v(A)}
              ></moz-option>
              <moz-option
                value=${k.WEEKLY}
                data-l10n-id="ai-tasks-alert-schedule-weekly"
                iconsrc=${this.#v(A)}
              ></moz-option>
            </moz-select>
          </div>
          ${this.checkFrequency===k.WEEKLY?r`<div class="form-section-half">
                <label
                  class="form-label"
                  data-l10n-id="ai-tasks-alert-day-label"
                ></label>
                <moz-select
                  class="form-select"
                  value=${this.scheduleWeekday}
                  @change=${this.#J}
                >
                  ${I.map(e=>r`<moz-option
                        value=${e.value}
                        data-l10n-id=${e.ftlId}
                        iconsrc=${this.#v(A)}
                      ></moz-option>`)}
                </moz-select>
              </div>`:n}
        </div>
        ${this.#X()}
      </div>
    `}#Q(){return r`
      <div class="monitor-card">
        ${this.selfContained?r`<div class="title-container">
              <monitor-icon size="small"></monitor-icon>
              <h2
                class="monitor-card-state-title"
                data-l10n-id="ai-tasks-alert-modal-title"
              ></h2>
            </div>`:n}
        <div class="monitor-card-head">
          <div class="monitor-name-field">
            <moz-input-text
              class="monitor-name-input"
              data-l10n-id="ai-tasks-alert-name"
              data-l10n-attrs="label"
              required
              ?invalid=${!!this.fieldErrors.name}
              .value=${this.#g}
              @input=${this.#S}
              @change=${this.#S}
            ></moz-input-text>
            ${this.#V(this.fieldErrors.name)}
          </div>
        </div>
        ${this.#H()} ${this.#U()}
        ${this.#Z()}

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
            @click=${this.#L}
          ></moz-button>
          <moz-button
            type="primary"
            data-l10n-id="ai-tasks-alert-create-button"
            data-l10n-attrs="label"
            @click=${this.#R}
          ></moz-button>
        </div>
      </div>
    `}#$(){let e=this.agent??{};return r`
      <div class="monitor-card chatcard" @click=${this.#C}>
        <div class="monitor-card-head">
          <div class="monitor-card-head-left">
            ${this.#z()}
            <span class="monitor-card-title"
              ><span class="monitor-card-name">${e.monitorName}</span></span
            >
          </div>
          <div class="monitor-card-head-right">
            ${this.showLastResult?this.#B():n}
            <button
              type="button"
              class="chev"
              aria-expanded=${this.expanded}
              data-l10n-id="ai-tasks-alert-show-details"
              data-l10n-attrs="aria-label"
              @click=${this.#w}
            ></button>
          </div>
        </div>
        ${this.expanded?this.#ee():n}
      </div>
    `}#ee(){let e=this.agent??{},t=this.#o;return r`
      <div class="watch-expand" @click=${e=>e.stopPropagation()}>
        ${this.editing?r`${this.#H()} ${this.#U()}
            ${this.#Z()}`:r`<div class="task-section">
                <div
                  class="task-header"
                  data-l10n-id="ai-tasks-alert-the-alert"
                ></div>
                <div class="task-content">${e.condition}</div>
              </div>
              ${e.watchUrls?.length?r`<div class="url-section">
                    <div
                      class="section-toggle"
                      data-l10n-id="ai-tasks-alert-on-this-page"
                    ></div>
                    <div class="url-chips">
                      ${e.watchUrls.map(t=>r`<smartwindow-chip
                            type="source"
                            label=${e.watchUrlTitles?.[t]??this.#P(t)}
                            .iconSrc=${`page-icon:${t}`}
                            title=${t}
                            .href=${t}
                          ></smartwindow-chip>`)}
                    </div>
                  </div>`:n}
              <div class="monitor-row">${this.#Y()}</div>`}
        ${this.editing?n:this.#G()}
        ${!this.editing&&t?r`<p
              id="check-limit-reason"
              class="check-limit-reason"
              data-l10n-id=${x(t.errorCode)}
            ></p>`:n}

        <div class="monitor-card-actions">
          ${this.editing?n:r`<moz-button
                  id="edit-button"
                  type="default"
                  @click=${this.#T}
                  data-l10n-id="ai-tasks-alert-edit-button"
                  data-l10n-attrs="label"
                ></moz-button>
                <moz-button
                  id="pause-button"
                  type="default"
                  ?disabled=${e.status?.kind===`paused`&&!this.canResume}
                  @click=${()=>{let t=e.status?.kind===`paused`;this.#h(`agent-monitor-item:pause`,{id:e.id,paused:!t})}}
                  data-l10n-id=${e.status?.kind===`paused`?`ai-tasks-alert-resume-button`:`ai-tasks-alert-pause-button`}
                  data-l10n-attrs="label"
                ></moz-button>
                <moz-button
                  id="check-now-button"
                  type="default"
                  ?disabled=${!!t}
                  @click=${()=>this.#h(`agent-monitor-item:check-now`,{id:e.id})}
                  data-l10n-id="ai-tasks-alert-check-now-button"
                  data-l10n-attrs="label"
                ></moz-button>`}

          <span class="spacer"></span>
          ${this.editing?r` <moz-button
                  id="cancel-edit-button"
                  type="secondary"
                  @click=${this.#T}
                  data-l10n-id="ai-tasks-alert-cancel-button"
                  data-l10n-attrs="label"
                ></moz-button
                ><moz-button
                  type="primary"
                  @click=${this.#R}
                  data-l10n-id="ai-tasks-alert-save-button"
                  data-l10n-attrs="label"
                ></moz-button>`:r`
                <moz-button
                  class="delete-button"
                  type="icon"
                  iconsrc="chrome://global/skin/icons/delete.svg"
                  data-l10n-id="ai-tasks-alert-delete-button"
                  data-l10n-attrs="aria-label"
                  @click=${()=>this.#h(`agent-monitor-item:delete`,{id:e.id})}
                ></moz-button>
              `}
        </div>
      </div>
    `}render(){return r`
      <link
        rel="stylesheet"
        href="${f}"
      />
      ${this.mode===`create`?this.#Q():this.#$()}
    `}},customElements.define(`agent-monitor-item`,L)})))()}export{R as t};