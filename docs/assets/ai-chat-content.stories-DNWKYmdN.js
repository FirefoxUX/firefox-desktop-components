import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,g as n,u as r,v as i}from"./lit.all-BYVOqvrj.js";import{c as a,o}from"./iframe-DZPZZ1s7.js";import{t as s}from"./agent-monitor-item-DvexYXmR.js";import{t as c}from"./moz-textarea-BK7uOYmr.js";import{t as l}from"./ai-action-confirmation-DeV5dKdu.js";import{t as u}from"./website-chip-container-BXy4rl6j.js";import{i as d,r as f}from"./SmartbarMentionUtils-DcwxvvMB.js";import{i as p,n as m}from"./moz-box-group-BYVaGJTI.js";import{t as h}from"./chat-assistant-error-BhwJZumF.js";import{t as g}from"./chat-assistant-loader-D1VY_NxR.js";import{t as _}from"./chat-assistant-citations-BJKjzyGo.js";import{t as v}from"./ai-website-confirmation-CJ-1fu9R.js";import{i as y,n as b,r as x,t as ee}from"./ai-chat-message-DppOWYNx.js";import{t as te}from"./ai-clarifying-question-DpS3J3LI.js";import{i as S}from"./aitab-tool-ui-B2OWXIvC.js";var C;function w(){return(w=e((()=>{C=new URL(`ai-chat-content-CzOD8vK0.css`,import.meta.url).href+``})))()}var T;function E(){return(E=e((()=>{T=new URL(`assistant-message-footer-CeZRTG68.css`,import.meta.url).href+``})))()}var D;function O(){return(O=e((()=>{D=new URL(`applied-memories-button-CIuF9jdh.css`,import.meta.url).href+``})))()}var k;function A(){return(A=e((()=>{O(),a(),t(),m(),p(),k=class extends o{static properties={messageId:{type:String,attribute:`message-id`},appliedMemories:{attribute:!1},open:{type:Boolean,reflect:!1},showCallout:{type:Boolean}};#e=!1;constructor(){super(),this.messageId=null,this.appliedMemories=[],this.open=!1,this.showCallout=!1,this._onDocumentClick=this._onDocumentClick.bind(this),this._onKeyDown=this._onKeyDown.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener(`click`,this._onDocumentClick),this.addEventListener(`keydown`,this._onKeyDown)}disconnectedCallback(){document.removeEventListener(`click`,this._onDocumentClick),this.removeEventListener(`keydown`,this._onKeyDown),super.disconnectedCallback()}willUpdate(e){super.willUpdate(e),e.has(`showCallout`)&&this.showCallout&&(this.#e=!0)}updated(e){super.updated(e),e.has(`showCallout`)&&this.#t()}#t(){this.showCallout&&!this.open&&(this.open=!0,this.toggleAttribute(`data-open`,!0),this.updateComplete.then(()=>this.#o(0)),this.#n({isOpen:!0}))}#n({isOpen:e}){this.dispatchEvent(new CustomEvent(`toggle-applied-memories`,{bubbles:!0,composed:!0,detail:{messageId:this.messageId,open:e}}))}get _hasMemories(){return Array.isArray(this.appliedMemories)&&!!this.appliedMemories.length}get _visibleMemories(){return this.appliedMemories.slice(0,5)}#r(e){e.stopPropagation(),this._hasMemories&&(this.open=!this.open,this.open||(this.#e=!1),this.toggleAttribute(`data-open`,this.open),this.open&&this.updateComplete.then(()=>this.#o(0)),this.#n({isOpen:this.open}))}_onPopoverClick(e){e.stopPropagation()}_onDocumentClick(){this.open&&this.#s()}_onKeyDown(e){if(this.open)switch(e.key){case`Escape`:e.preventDefault(),e.stopPropagation(),this.#s(),this.shadowRoot.querySelector(`.memories-trigger`)?.focus();break;case`Tab`:!e.shiftKey&&this.shadowRoot.activeElement===this.shadowRoot.querySelector(`.retry-without-memories-button`)&&this.#s();break;case`ArrowDown`:e.preventDefault(),this.#a(1);break;case`ArrowUp`:e.preventDefault(),this.#a(-1);break;case`Home`:e.preventDefault(),this.#o(0);break;case`End`:e.preventDefault(),this.#o(-1)}}get#i(){let e=this.shadowRoot.querySelector(`.popover`);return e?[...e.querySelectorAll(`.memories-remove-button`)]:[]}#a(e){let t=this.#i;if(!t.length)return;let n=this.shadowRoot.activeElement,r=(t.indexOf(n)+e+t.length)%t.length;this.#o(r)}#o(e){let t=this.#i;t.length&&(e<0&&(e=t.length+e),t.forEach((t,n)=>{t.tabIndex=n===e?0:-1}),t[e].focus())}#s(){this.open=!1,this.#e=!1,this.toggleAttribute(`data-open`,!1),this.requestUpdate(),this.#n({isOpen:!1})}_onRemoveMemory(e,t){e.stopPropagation(),this.dispatchEvent(new CustomEvent(`remove-applied-memory`,{bubbles:!0,composed:!0,detail:{memory:t,messageId:this.messageId}}))}_onRetryWithoutMemories(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent(`retry-without-memories`,{bubbles:!0,composed:!0,detail:{messageId:this.messageId}}))}_onManageMemories(){this.dispatchEvent(new CustomEvent(`manage-memories`,{bubbles:!0,composed:!0}))}renderCallout(){return r`
      <div class="memories-callout">
        <p
          class="memories-callout-description"
          data-l10n-id="aiwindow-memories-callout-description"
        ></p>
        <button
          class="memories-callout-learn-more"
          data-focusable
          data-l10n-id="aiwindow-memories-learn-more"
          @click=${()=>{this.dispatchEvent(new CustomEvent(`open-memories-learn-more`,{bubbles:!0,composed:!0}))}}
        ></button>
      </div>
    `}renderPopover(){if(!this._hasMemories)return n;let e=this.open||this.#e,t=this._visibleMemories;return r`
      <div
        class="popover ${e?`open`:``}"
        role="dialog"
        data-l10n-id="aiwindow-applied-memories-popover"
        data-l10n-attrs="aria-label"
        ?inert=${!e}
        @click=${e=>this._onPopoverClick(e)}
      >
        ${this.#e?this.renderCallout():n}

        <moz-box-group
          class="memories-list"
          role="list"
          data-l10n-id="aiwindow-applied-memories-list"
          data-l10n-attrs="aria-label"
        >
          ${t.map(e=>r`
              <moz-box-item
                class="memories-list-item"
                role="listitem"
                .label=${e.memory_summary}
              >
                <moz-button
                  class="memories-remove-button"
                  tabindex="-1"
                  type="ghost"
                  size="small"
                  iconsrc="chrome://global/skin/icons/delete.svg"
                  data-l10n-id="aiwindow-delete-memory-button"
                  data-l10n-args=${JSON.stringify({summary:e.memory_summary})}
                  @click=${t=>this._onRemoveMemory(t,e)}
                  slot="actions"
                ></moz-button>
              </moz-box-item>
            `)}
        </moz-box-group>

        <div id="manage-memories-row" class="popover-action-row">
          <moz-button
            type="ghost"
            size="default"
            iconsrc="chrome://global/skin/icons/settings.svg"
            iconposition="start"
            class="popover-action-row-button manage-memories-button"
            data-l10n-id="aiwindow-manage-memories"
            data-l10n-attrs="label"
            @click=${()=>this._onManageMemories()}
          ></moz-button>
        </div>

        <div id="retry-without-memories-row" class="popover-action-row">
          <moz-button
            type="ghost"
            size="default"
            iconsrc="chrome://global/skin/icons/reload.svg"
            iconposition="start"
            class="popover-action-row-button retry-without-memories-button"
            data-l10n-id="aiwindow-retry-without-memories"
            data-l10n-attrs="label"
            @click=${e=>this._onRetryWithoutMemories(e)}
          ></moz-button>
        </div>
      </div>
    `}render(){return this._hasMemories?r`
      <link
        rel="stylesheet"
        href="${D}"
      />
      <moz-button
        class="memories-trigger"
        type="ghost"
        size="small"
        iconposition="start"
        iconsrc="chrome://browser/content/aiwindow/assets/memories-on.svg"
        aria-haspopup="dialog"
        aria-expanded=${this.open&&this._hasMemories}
        data-l10n-id="aiwindow-memories-used"
        data-l10n-attrs="label"
        @click=${e=>this.#r(e)}
      ></moz-button>

      ${this.renderPopover()}
    `:null}},customElements.define(`applied-memories-button`,k)})))()}var j;function M(){return(M=e((()=>{E(),a(),t(),A(),j=class extends o{static properties={messageId:{type:String,attribute:`message-id`},appliedMemories:{attribute:!1},showCallout:{type:Boolean},hideRetry:{type:Boolean,attribute:`hide-retry`}};constructor(){super(),this.messageId=null,this.appliedMemories=[],this.showCallout=!1,this.hideRetry=!1}static eventBehaviors={bubbles:!0,composed:!0};static get events(){return{copy:`copy-message`,retry:`retry-message`,thumbsUp:`thumbs-up`,thumbsDown:`thumbs-down`}}#e(e,t){this.dispatchEvent(new CustomEvent(e,{...this.constructor.eventBehaviors,...t===void 0?{}:{detail:t}}))}#t(){this.#e(this.constructor.events.copy,{messageId:this.messageId})}#n(){this.#e(this.constructor.events.retry,{messageId:this.messageId})}#r(){this.#e(this.constructor.events.thumbsUp,{messageId:this.messageId})}#i(){this.#e(this.constructor.events.thumbsDown,{messageId:this.messageId})}render(){return r`
      <link
        rel="stylesheet"
        href="${T}"
      />
      <div class="footer">
        <moz-button
          data-l10n-id="aiwindow-thumbs-up"
          data-l10n-attrs="tooltiptext,aria-label"
          class="footer-icon-button thumbs-up-button"
          type="ghost"
          size="small"
          iconsrc="chrome://global/skin/icons/thumbs-up-20.svg"
          @click=${()=>{this.#r()}}
        >
        </moz-button>
        <moz-button
          data-l10n-id="aiwindow-thumbs-down"
          data-l10n-attrs="tooltiptext,aria-label"
          class="footer-icon-button thumbs-down-button"
          type="ghost"
          size="small"
          iconsrc="chrome://global/skin/icons/thumbs-down-20.svg"
          @click=${()=>{this.#i()}}
        >
        </moz-button>
        <moz-button
          data-l10n-id="aiwindow-copy-message"
          data-l10n-attrs="tooltiptext,aria-label"
          class="footer-icon-button copy-button"
          type="ghost"
          size="small"
          iconsrc="chrome://global/skin/icons/edit-copy.svg"
          @click=${()=>{this.#t()}}
        >
        </moz-button>
        ${this.hideRetry?n:r`
              <moz-button
                data-l10n-id="aiwindow-retry"
                data-l10n-attrs="tooltiptext,aria-label"
                type="ghost"
                size="small"
                iconsrc="chrome://global/skin/icons/reload.svg"
                class="footer-icon-button retry-button"
                @click=${()=>{this.#n()}}
              >
              </moz-button>
            `}
        <applied-memories-button
          .messageId=${this.messageId}
          .appliedMemories=${this.appliedMemories??[]}
          .showCallout=${this.showCallout}
        >
        </applied-memories-button>
      </div>
    `}},customElements.define(`assistant-message-footer`,j)})))()}var N;function P(){return(P=e((()=>{N=new URL(`kit-mention-DO5J-z8f.css`,import.meta.url).href+``})))()}var F,I;function L(){return(L=e((()=>{P(),t(),a(),F=4200,I=class extends o{static properties={variant:{type:String,reflect:!0},show:{type:Boolean,state:!0}};#e=null;#t=null;constructor(){super(),this.show=!1}disconnectedCallback(){super.disconnectedCallback(),this.#t!==null&&(clearTimeout(this.#t),this.#t=null)}trigger({value:e,convId:t}={}){e===`MENTION_DEFINITE`&&this.#e!==t&&(this.#e=t,this.show=!0,this.#t=setTimeout(()=>{this.#t=null,this.show=!1},F))}reset(){this.#e=null,this.show=!1,this.#t!==null&&(clearTimeout(this.#t),this.#t=null)}render(){return r`
      <link
        rel="stylesheet"
        href="${N}"
      />
      ${this.show?r`<img
            src="chrome://browser/content/aiwindow/assets/kit.svg"
            alt=""
            aria-hidden="true"
          />`:n}
    `}},customElements.define(`kit-mention`,I)})))()}var R,z,B,V,H,U,W,G,K;function q(){return(q=e((()=>{w(),t(),a(),f(),M(),h(),g(),_(),u(),v(),ee(),l(),L(),s(),te(),c(),x(),S(),R=2,z={},B={AITAB:`aitab`,WEBSITE_CONFIRMATION:`website-confirmation`,TAB_GROUP_CONFIRMATION:`tab-group-confirmation`,AI_ACTION_RESULT:`ai-action-result`,CANCELLED_COMPONENT:`cancelled-component`,ACTION_LOG:`action-log`,RETRY_COMPONENT:`retry-component`,AGENT_MONITOR:`agent-monitor-item`},V={OPEN_AITAB:`open-aitab`,CONFIRMATION_TAB_SELECTION:`confirmation-tab-selection`,CANCEL_TAB_SELECTION:`cancel-tab-selection`,CONFIRM_TAB_GROUP_SELECTION:`confirm-tab-group-selection`,CONFIRM_OPEN_AND_GROUP_TABS_SELECTION:`confirm-open-and-group-tabs-selection`,TOGGLE_ALL_TAB_SELECTION:`toggle-all-tab-selection`,UNDO_TAB_CLOSE:`undo-tab-close`,UNDO_TAB_GROUP:`undo-tab-group`,RETRY_PROMPT:`retry-prompt`,CREATE_WATCH:`create-watch`,CANCEL_WATCH:`cancel-watch`,UPDATE_WATCH:`update-watch`,DELETE_WATCH:`delete-watch`,PAUSE_WATCH:`pause-watch`,CHECK_WATCH:`check-watch`,SAVE_WATCH_DRAFT:`save-watch-draft`},H=[B.WEBSITE_CONFIRMATION,B.TAB_GROUP_CONFIRMATION],U={close_tabs:V.UNDO_TAB_CLOSE,group_tabs:V.UNDO_TAB_GROUP},W={group_tabs:{confirmActionL10n:{disabled:`smart-window-confirm-group-tab`,enabled:`smart-window-confirm-group-tabs`},updateType:V.CONFIRM_TAB_GROUP_SELECTION},open_tabs:{confirmActionL10n:{disabled:`smart-window-confirm-open-tab`,enabled:`smart-window-confirm-open-tabs`},updateType:V.CONFIRM_OPEN_AND_GROUP_TABS_SELECTION}},G={"website-confirmation":`smartwindow-nl-retry-message`,"tab-group-confirmation":`smartwindow-nl-retry-group-tabs-message`},K=class extends o{static properties={assistantIsLoading:{type:Boolean},assistantResponseAnnouncement:{type:String,state:!0},conversationState:{type:Array},followUpSuggestions:{type:Array},errorObj:{type:Object},isSearching:{type:Boolean},tokens:{type:Object},seenUrls:{type:Object},conversationId:{type:String}};#e=null;#t=null;#n=null;#r=null;#i=null;#a=null;#o=null;#s=null;#c=new Map;#l=new Map;#u=null;#d=`Tab Group`;#f=null;constructor(){super(),this.assistantIsLoading=!1,this.assistantResponseAnnouncement=``,this.conversationState=[],this.followUpSuggestions=[],this.errorObj=null,this.isSearching=!1,this.#u={[B.AITAB]:e=>this.#$(e),[B.TAB_GROUP_CONFIRMATION]:e=>this.#ce(e),[B.WEBSITE_CONFIRMATION]:e=>this.#le(e),[B.AI_ACTION_RESULT]:e=>this.#ue(e),[B.CANCELLED_COMPONENT]:()=>this.#fe(),[B.RETRY_COMPONENT]:e=>this.#pe(e),[B.AGENT_MONITOR]:e=>this.#oe(e)},this.seenUrls=new Set,this.conversationId=null}connectedCallback(){super.connectedCallback(),this.#_(),this.dispatchEvent(new CustomEvent(`AIChatContent:Ready`,{bubbles:!0})),this.#v(),this.#x(),this.#T(),this.#o=y(window,(e,t)=>b(this,e,t)),this.#c.clear(),this.ownerDocument.l10n.formatValue(`smart-window-default-tab-group-label`).then(e=>{e&&(this.#d=e,this.requestUpdate())}).catch(()=>{})}disconnectedCallback(){super.disconnectedCallback(),this.#t?.disconnect(),this.#t=null,this.#n&&=(cancelAnimationFrame(this.#n),null),this.#D(),this.#o?.(),this.#o=null}updated(e){super.updated(e),this.#p()}#p(){let e=this.conversationState.findLast(e=>e?.toolUIData?.uiType===B.AGENT_MONITOR&&(e.toolUIData.properties?.mode??`create`)===`create`&&!e.isRestored);if(!e)return;let t=e.toolUIData.toolCallId??e.messageId;t!=null&&this.#f!==t&&(this.#f=t,this.#m(t))}async#m(e){let t=this.shadowRoot?.querySelector(`agent-monitor-item[data-tool-call-id="${CSS.escape(e)}"]`);t&&(await t.updateComplete,t.isConnected&&t.getAttribute(`mode`)===`create`&&t.focusName())}#h(e,t){this.dispatchEvent(new CustomEvent(`AIChatContent:DispatchAction`,{bubbles:!0,composed:!0,detail:{action:e,...t??{}}}))}#g(e){let t=e.detail?.mode;t&&this.setAttribute(`mode`,t)}#_(){this.addEventListener(`aiChatContentActor:message`,this.messageEvent.bind(this)),this.addEventListener(`aiChatContentActor:truncate`,this.truncateEvent.bind(this)),this.addEventListener(`aiChatContentActor:remove-applied-memory`,this.removeAppliedMemoryEvent.bind(this)),this.addEventListener(`aiChatContentActor:seen-urls`,this.#j.bind(this)),this.addEventListener(`aiChatContentActor:set-generating`,this.#M.bind(this)),this.addEventListener(`aiChatContentActor:assets-ready`,this.#N.bind(this)),this.addEventListener(`aiChatContentActor:set-mode`,this.#g.bind(this)),this.addEventListener(`aiChatError:retry-message`,this.retryUserMessageAfterError.bind(this)),this.addEventListener(`SmartWindowPrompt:prompt-selected`,this.#A.bind(this)),this.addEventListener(`aiChatError:new-chat`,this.openNewChatAfterError.bind(this)),this.addEventListener(`aiChatError:sign-in`,this.openAccountSignInAfterError.bind(this)),this.addEventListener(`ai-chat-message:complete`,e=>{let{messageId:t,text:n}=e.detail??{};t&&t===this.#s&&(this.#s=null,this.assistantResponseAnnouncement=n||``)})}#v(){this.addEventListener(`copy-message`,e=>{let{messageId:t}=e.detail??{},n=this.#k(t);this.#h(`copy`,{messageId:t,text:n})}),this.addEventListener(`copy-table`,e=>{let{messageId:t,lineRange:n}=e.detail??{},r=this.#O(t).split(`
`).slice(n[0],n[1]).join(`
`);this.#h(`copy-table`,{messageId:t,text:r})}),this.addEventListener(`retry-message`,e=>{this.#h(`retry`,e.detail)}),this.addEventListener(`retry-without-memories`,e=>{this.#h(`retry-without-memories`,e.detail)}),this.addEventListener(`remove-applied-memory`,e=>{this.#h(`remove-applied-memory`,e.detail)}),this.addEventListener(`toggle-applied-memories`,e=>{this.#h(`toggle-applied-memories`,e.detail)}),this.addEventListener(`manage-memories`,e=>{this.#h(`manage-memories`,e.detail)}),this.addEventListener(`open-memories-learn-more`,e=>{this.#h(`open-memories-learn-more`,e.detail)}),this.addEventListener(`thumbs-up`,e=>{this.#h(`thumbs-up`,e.detail)}),this.addEventListener(`thumbs-down`,e=>{this.#h(`thumbs-down`,e.detail)}),this.addEventListener(`shown`,this.#y)}#y=e=>{let t=e.composedPath()[0];if(t?.localName!==`panel-list`)return;let n=t.getBoundingClientRect(),r=this.#b()-n.top;if(r<=0)return;t.style.top=`${(parseFloat(t.style.top)||0)+r}px`;let i=t.getAttribute(`valign`)===`top`?n.height-r:window.innerHeight-(n.top+r);t.style.maxHeight=`${Math.max(0,i)}px`};#b(){let e=this.shadowRoot?.querySelector(`.chat-inner-wrapper`);return e&&parseFloat(getComputedStyle(e).paddingBlockStart)||0}#x(){this.#t=new ResizeObserver(()=>this.#S()),this.updateComplete.then(()=>{this.#t.observe(this.shadowRoot.querySelector(`.chat-inner-wrapper`))})}#S(){let e=this.#C,t=this.shadowRoot?.querySelector(`.chat-inner-wrapper`);if(!e||!t)return;let n=t.children.length;e.toggleAttribute(`overflowing`,n&&e.scrollHeight>e.clientHeight+10),this.#E()}get#C(){return this.shadowRoot?.querySelector(`.chat-content-wrapper`)}get#w(){return this.shadowRoot?.querySelector(`.jump-to-bottom-button`)}#T(){this.updateComplete.then(()=>{if(!this.isConnected)return;let e=this.#C,t=this.#w;e&&t&&(this.#r=()=>{this.#a||=requestAnimationFrame(()=>{this.#a=null,this.#E()})},this.#i=()=>{e.scrollTop=e.scrollHeight},e.addEventListener(`scroll`,this.#r),t.addEventListener(`click`,this.#i))})}#E(){let e=this.#C,t=this.#w;if(!e||!t)return;let n=e.scrollHeight-e.scrollTop-e.clientHeight,r=n>e.clientHeight*.5,i=n<1;t.hasAttribute(`visible`)!==r&&(t.toggleAttribute(`visible`,r),t.toggleAttribute(`disabled`,!r)),e.hasAttribute(`scrolled-to-bottom`)!==i&&e.toggleAttribute(`scrolled-to-bottom`,i)}#D(){this.#a&&=(cancelAnimationFrame(this.#a),null),this.#r&&=(this.#C?.removeEventListener(`scroll`,this.#r),null),this.#i&&=(this.#w?.removeEventListener(`click`,this.#i),null)}#O(e){return e?this.#be().find(({type:t,msg:n})=>t===`message`&&n.role===`assistant`&&n.messageId===e)?.msg.body??``:``}#k(e){return this.conversationState.find(t=>t?.role===`assistant`&&t?.messageId===e)?.messageL10n?this.shadowRoot?.querySelector(`ai-chat-message[data-message-id="${CSS.escape(e)}"]`)?.localizedText??``:this.#O(e)}#A(e){e.stopPropagation(),this.followUpSuggestions=[],this.dispatchEvent(new CustomEvent(`AIChatContent:DispatchFollowUp`,{detail:{text:e.detail.text},bubbles:!0}))}#j({detail:{conversationId:e,seenUrls:t}}){this.conversationId==e?this.seenUrls=this.seenUrls.union(t):(this.conversationId=e,this.seenUrls=t)}messageEvent(e){let t=e.detail;if(!t||typeof t!=`object`)b(this,z,`message-data`);else if(t?.content?.isError)this.handleErrorEvent(t?.content);else switch(this.errorObj=null,t.role){case`loading`:this.#z(t),this.handleLoadingEvent(e);break;case`assistant`:this.#z(t),this.handleAIResponseEvent(e);break;case`tool`:this.#z(t),this.handleToolMessageEvent(e);break;case`user`:this.#z(t),this.handleUserPromptEvent(e);break;case`assistant-message-complete`:this.#L(t);break;case`restored-all-messages-in-a-conversation`:this.#F(t.convId);break;case`clear-conversation`:this.#z(t)}}#M(e){this.assistantIsLoading=!!e.detail?.isGenerating,this.assistantIsLoading||(this.isSearching=!1),this.requestUpdate()}#N(e){let{messageId:t,images:n}=e.detail??{};if(!t||!n?.length)return;let r=this.conversationState.find(e=>e?.messageId===t);if(!r)return;let i=!1;if(r.historyResultsMap){for(let{url:e,image:t,hasFavicon:a}of n){let n=r.historyResultsMap.get(e);n&&(n.image!==t&&(n.image=t,i=!0),n.hasFavicon!==a&&(n.hasFavicon=a,i=!0))}i&&(r.historyResultsMap=new Map(r.historyResultsMap))}if(r.citations?.length){let e=new Map(n.map(({url:e,hasFavicon:t})=>[e,t])),t=!1,a=r.citations.map(n=>{if(!e.has(n.url))return n;let r=e.get(n.url);return n.hasFavicon===r?n:(t=!0,{...n,hasFavicon:r})});t&&(r.citations=a,i=!0)}i&&this.requestUpdate()}#P(e,t){let n=t.filter(e=>e?.url&&e.hasFavicon===void 0).map(e=>({url:e.url}));n.length&&this.dispatchEvent(new CustomEvent(`AIChatContent:RequestAssets`,{bubbles:!0,composed:!0,detail:{conversationId:this.conversationId,messageId:e,items:n}}))}async#F(e){if(await this.updateComplete,!this.conversationState.findLast(t=>t.convId===e))return;await new Promise(e=>requestAnimationFrame(()=>requestAnimationFrame(e)));let t=this.#C;if(!t)return;let n=this.#c.get(e);if(n?.contentHeight&&this.shadowRoot?.querySelector(`.chat-inner-wrapper`)?.style.setProperty(`--content-height`,n.contentHeight),!(!n||n.wasAtBottom||n.wasWaitingForResponse)){t.scrollTo({top:n.scrollTop,behavior:`instant`});return}let r=this.shadowRoot.querySelector(`.chat-inner-wrapper`)?.lastElementChild;r?r.scrollIntoView({block:`end`,behavior:`instant`}):t.scrollTo({top:t.scrollHeight,behavior:`instant`})}get#I(){return this.shadowRoot?.querySelector(`kit-mention`)}#L(e){let t=e.content?.id;if(!t)return;let n=this.conversationState.findLast(e=>e?.messageId===t);if(n){n.isLastChunk=!0;let r=e.historyResults;r?.length&&(n.historyResultsMap=new Map(r.map(e=>[e.url,e]))),e.citations?.length&&(n.citations=e.citations,this.#P(t,e.citations))}this.#s=t,this.assistantResponseAnnouncement=``,this.requestUpdate()}#R(){this.#s=null,this.assistantResponseAnnouncement=``}#z(e){let t=this.conversationState.findLast(e=>e),n=this.conversationState.find(e=>e),r=n&&n.convId===e.convId&&n.ordinal===e.ordinal,i=e.convId!==t?.convId;i&&t?.convId&&this.#C&&this.saveScrollPosition(t,this.#C),(i||r)&&(this.conversationState=[],this.followUpSuggestions=[],this.#R(),this.isSearching=!1,this.#I?.reset(),i&&this.shadowRoot?.querySelector(`.chat-inner-wrapper`)?.style.removeProperty(`--content-height`),this.requestUpdate())}saveScrollPosition(e,t){let n=this.shadowRoot.querySelector(`.chat-inner-wrapper`),r=!0,i=n?.lastElementChild;if(i){let e=i.getBoundingClientRect(),n=t.getBoundingClientRect();r=e.bottom<=n.bottom+50}let a=this.assistantIsLoading||this.isSearching||e.role!==`assistant`||!e.isLastChunk;this.#c.set(e.convId,{scrollTop:t.scrollTop,wasAtBottom:r,wasWaitingForResponse:a,contentHeight:n?.style.getPropertyValue(`--content-height`)||null})}handleLoadingEvent(e){let{isSearching:t}=e.detail;this.#R(),this.isSearching=!!t,this.requestUpdate()}handleErrorEvent(e){this.isSearching=!1,this.errorObj=e,this.requestUpdate()}handleToolMessageEvent(e){let{convId:t,ordinal:n,turnIndex:r,content:i,actionLog:a}=e.detail??{};i?.name&&a?.uiType&&[B.ACTION_LOG].includes(a.uiType)&&(this.conversationState[n]={role:`tool`,uiType:a.uiType,convId:t,turnIndex:r,ordinal:n,toolCallId:i.tool_call_id,toolName:i.name,pendingLabel:a.pendingLabel,row:a.row},this.requestUpdate())}handleUserPromptEvent(e){this.followUpSuggestions=[];let{convId:t,content:n,ordinal:r,isPreviousMessage:i}=e.detail;i||this.#R(),this.conversationState[r]={role:`user`,body:n.body,contextMentions:n.contextMentions,pageUrl:n.contextPageUrl??null,convId:t,ordinal:r},this.requestUpdate(),i||this.#V()}retryUserMessageAfterError(){let e=this.conversationState.findLast(e=>e);e&&this.#h(`retry-after-error`,{...e,content:{type:`text`,body:e.body,contextMentions:e.contextMentions}})}#B(e,t){return typeof e?.body==`string`&&e.body||!!e?.l10nId||!!t}handleAIResponseEvent(e){this.isSearching=!1;let{convId:t,ordinal:n,id:r,content:i,memoriesApplied:a,showMemoriesCallout:o,webSearchQueries:s=[],followUpSuggestions:c=[],isPreviousMessage:l,toolUIData:u,toolUIDraft:d,kit:f,isRestored:p,historyResults:m=[],citations:h=[]}=e.detail,g=this.#B(i,u),_=u===null;if(!g){_&&(this.conversationState=this.conversationState.filter(e=>{let t=e.messageId===r,n=!!e.toolUIData;return!(t&&n)}));return}this.followUpSuggestions=s.length?[]:c.slice(0,R);let v=!!l||!!this.conversationState[n]?.isLastChunk,y=m.length?new Map(m.map(e=>[e.url,e])):void 0;this.conversationState[n]={role:`assistant`,convId:t,ordinal:n,messageId:r,body:i.body,messageL10n:i.l10nId?{id:i.l10nId,args:i.l10nArgs,link:i.link}:null,appliedMemories:a??[],showCallout:o??!1,isLastChunk:v,toolUIData:u,toolUIDraft:d,historyResultsMap:y,citations:h,isRestored:p},h.length&&this.#P(r,h),f&&!l&&this.#I?.trigger({value:f,convId:t}),this.requestUpdate()}#V(){let e={};this.#e=e,this.updateComplete.then(()=>{let t=this.shadowRoot?.querySelectorAll(`.chat-bubble-user`);if(!t?.length)return;let n=t[t.length-1];requestAnimationFrame(()=>{if(e!==this.#e)return;let t=n.offsetTop;n.parentNode.style.setProperty(`--content-height`,`calc(${t}px + 100% - var(--smart-window-top-spacing-chat))`),requestAnimationFrame(()=>{e==this.#e&&n.scrollIntoView({block:`start`})})})})}truncateEvent(e){let{messageId:t}=e.detail??{};if(!t)return;let n=this.conversationState.findIndex(e=>e?.role===`assistant`&&e?.messageId===t);if(n===-1)return;let r=this.conversationState.findLastIndex((e,t)=>t<n&&e?.role===`user`)+1;this.conversationState=this.conversationState.slice(0,r),this.requestUpdate()}removeAppliedMemoryEvent(e){let{messageId:t,memoryId:n}=e.detail??{},r=this.conversationState.find(e=>e?.role===`assistant`&&e?.messageId===t);r.appliedMemories=r.appliedMemories.filter(e=>e?.id!==n),this.requestUpdate()}openNewChatAfterError(){let e=new CustomEvent(`AIChatContent:DispatchNewChat`,{bubbles:!0,composed:!0});this.dispatchEvent(e)}#H(e,t){if(!e||e.role!==`user`||!e.contextMentions?.length)return[];let n=e.contextMentions.filter(e=>!d(e)),r=e.pageUrl;return r&&r===t?n.filter(e=>URL.parse(e.url)?.href!==r):n}openAccountSignInAfterError(){let e=new CustomEvent(`AIChatContent:AccountSignIn`,{bubbles:!0,composed:!0});this.dispatchEvent(e)}#U(e,t){return t.length?[{labelL10nId:e,items:t.map(e=>({url:e.url,label:e.title}))}]:[]}#W(e){let t=e.selectedTabs||[],n=t.length,r=this.#U(`smart-window-closed-tabs-row-label`,t);return{labelL10nId:`smart-window-closed-tabs-label`,labelL10nArgs:{count:n},summaryL10nId:`smart-window-closed-tabs-summary`,summaryL10nArgs:{count:n},rows:r}}#G(e){let t=e.length,n=[{labelL10nId:`smart-window-closed-tabs-row-label`,items:e.map(({url:e,title:t})=>({url:e,label:t}))},{labelL10nId:`smart-window-restored-row-label`,labelL10nArgs:{count:t}}];return{labelL10nId:`smart-window-closed-and-restored-label`,summaryL10nId:`smart-window-restore-success-summary`,summaryL10nArgs:{count:t},rows:n}}#K(e){let t=e.selectedTabs||[],n=e.group||{},r=n.tabCount??t.length,i=this.#U(`smart-window-grouped-tabs-row-label`,t);return{labelL10nId:`smart-window-grouped-tabs-label`,labelL10nArgs:{count:r},summaryL10nId:`smart-window-grouped-tabs-summary`,summaryL10nArgs:{count:r,label:n.label||this.#d},rows:i}}#q(e){return{labelL10nId:`smart-window-switched-tab-label`,summaryL10nId:`smart-window-switched-tab-summary`,summaryL10nArgs:{title:e?.title||e?.url||``},rows:[]}}#J(e){if(e.switched)return this.#q(e.selectedTabs?.[0]);let t=e.selectedTabs||[],n=t.length;if(n&&e.mergedCount===n)return this.#K(e);let r=e.group||{},i=!!r.label,a=this.#U(`smart-window-opened-tabs-row-label`,t);return{labelL10nId:`smart-window-opened-tabs-label`,labelL10nArgs:{count:n},summaryL10nId:i?`smart-window-opened-tabs-summary-group`:`smart-window-opened-tabs-summary-single`,summaryL10nArgs:i?{count:n,label:r.label||this.#d}:{count:n},rows:a}}#Y(e){let t=e.length,n=[{labelL10nId:`smart-window-grouped-tabs-row-label`,labelL10nArgs:{},items:e.map(({url:e,title:t})=>({url:e,label:t}))},{labelL10nId:`smart-window-ungrouped-row-label`,labelL10nArgs:{count:t},items:[]}];return{labelL10nId:`smart-window-grouped-and-ungrouped-label`,summaryL10nId:`smart-window-ungroup-success-summary`,summaryL10nArgs:{count:t},rows:n}}#X(e,t){let n=e.actionType;if(!n)return null;let r={group_tabs:t?()=>this.#Y(e.originalGroupedTabs||[]):()=>this.#K(e),close_tabs:t?()=>this.#G(e.originalClosedTabs||[]):()=>this.#W(e),open_tabs:()=>this.#J(e)}[n];return r?r():null}#Z(e,t,n){let i={l10nId:`action-log-completed-steps`,l10nArgs:{count:e.length}},a=t?i:e[e.length-1]?.pendingLabel,o=`action-log:${e[0]?.id??e[0]?.messageId??n}`;return r`
      <ai-action-result
        .conversationId=${e[0].convId}
        .turnIndex=${e[0].turnIndex}
        .labelL10nId=${a?.l10nId}
        .labelL10nArgs=${a?.l10nArgs}
        .labelLink=${a?.link??null}
        .rows=${this.#Ce(e)}
        .isLoading=${!t}
        .isExpanded=${this.#l.get(o)??!1}
        @action-result-toggle=${e=>this.#l.set(o,!!e.detail?.isExpanded)}
      ></ai-action-result>
    `}#Q(e){if(!e.toolUIData)return n;let t=e.toolUIData;H.includes(t.uiType)&&e.isRestored&&(t.properties={...t.properties,cancelledUiType:t.uiType},t.uiType=B.RETRY_COMPONENT);let r=this.#u[t.uiType];return r?r(e):n}#$(e){return r`<aitab-tool-ui
      .state=${e.toolUIData.properties?.state??`choose`}
      .title=${e.toolUIData.properties?.title??``}
      .viewerURL=${e.toolUIData.properties?.viewerURL??``}
      @aitab-open-request=${t=>this.#he({messageId:e.messageId,toolCallId:e.toolUIData.toolCallId,updateType:V.OPEN_AITAB,updateData:{openTarget:t.detail.openTarget}})}
    ></aitab-tool-ui>`}#ee=(e,t,n)=>{this.#he({messageId:t,toolCallId:n,updateType:V.CONFIRMATION_TAB_SELECTION,updateData:e.detail})};#te=(e,t,n)=>{this.#he({messageId:t,toolCallId:n,updateType:V.CANCEL_TAB_SELECTION,updateData:e.detail})};#ne=(e,t,n)=>{this.#he({messageId:t,toolCallId:n,updateType:V.TOGGLE_ALL_TAB_SELECTION,updateData:e.detail})};#re=(e,t,n)=>{let r=e.detail?.mode===`display`;this.#he({messageId:t,toolCallId:n,updateType:r?V.UPDATE_WATCH:V.CREATE_WATCH,updateData:e.detail})};#ie=(e,t,n)=>{this.#he({messageId:t,toolCallId:n,updateType:V.CANCEL_WATCH,updateData:e.detail})};#ae=(e,t,n,r)=>{this.#he({messageId:t,toolCallId:n,updateType:r,updateData:e.detail})};#oe(e){let{messageId:t,toolUIData:n,toolUIDraft:i}=e,a=n.toolCallId;return r`<agent-monitor-item
      data-tool-call-id=${a??t}
      mode=${n.properties?.mode??`create`}
      .agent=${n.properties?.agent}
      .draft=${i}
      @agent-monitor-item:draft-change=${e=>this.#ae(e,t,a,V.SAVE_WATCH_DRAFT)}
      @agent-monitor-item:submit=${e=>this.#re(e,t,a)}
      @agent-monitor-item:cancel=${e=>this.#ie(e,t,a)}
      @agent-monitor-item:delete=${e=>this.#ae(e,t,a,V.DELETE_WATCH)}
      @agent-monitor-item:pause=${e=>this.#ae(e,t,a,V.PAUSE_WATCH)}
      @agent-monitor-item:check-now=${e=>this.#ae(e,t,a,V.CHECK_WATCH)}
    ></agent-monitor-item>`}#se=(e,t,n,r)=>{this.#he({messageId:t,toolCallId:n,updateType:r,updateData:e.detail})};#ce(e){let t=e.toolUIData,n=t.properties?.actionType||`group_tabs`,{confirmActionL10n:i,updateType:a}=W[n]??W.group_tabs;return r`
      <ai-website-confirmation
        .tabs=${t.properties?.tabs||[]}
        .tabGroupLabel=${t.properties?.tabGroupLabel}
        .confirmActionL10n=${i}
        .actionType=${n}
        @ai-website-confirmation:submit=${n=>this.#se(n,e.messageId,t.toolCallId,a)}
        @ai-website-confirmation:close=${n=>this.#te(n,e.messageId,t.toolCallId)}
        @ai-website-confirmation:toggle-all=${n=>this.#ne(n,e.messageId,t.toolCallId)}
      ></ai-website-confirmation>
    `}#le(e){let t=e.toolUIData;return r`
      <ai-website-confirmation
        .tabs=${t.properties?.tabs||[]}
        .confirmActionL10n=${{disabled:`smart-window-confirm-close-tab`,enabled:`smart-window-confirm-close-tabs`}}
        .actionType=${`close_tabs`}
        @ai-website-confirmation:submit=${n=>this.#ee(n,e.messageId,t.toolCallId)}
        @ai-website-confirmation:close=${n=>this.#te(n,e.messageId,t.toolCallId)}
        @ai-website-confirmation:toggle-all=${n=>this.#ne(n,e.messageId,t.toolCallId)}
      ></ai-website-confirmation>
    `}#ue(e){let{messageId:t,toolUIData:i}=e,a=i.properties?.confirmedData||{},o=a.wasRestored||!1,s=a.actionType;if(!s)return n;let c=this.#X(a,o),l=a.operationIds??[],u=U[s],d=!o&&!!l.length&&!!u;i.properties?.undoDismissed&&(d=!1);let f=d&&u?()=>this.#he({messageId:t,toolCallId:i.toolCallId,updateType:u,updateData:{operationIds:l,selectedTabs:a.selectedTabs||[],actionTimestamp:a.actionTimestamp}}):void 0,p=this.#de(a,o);return r`
      <ai-action-confirmation
        .labelL10nId=${c.labelL10nId}
        .labelL10nArgs=${c.labelL10nArgs}
        .tabs=${p}
        .canUndo=${d}
        .isExpanded=${this.#l.get(t)??!1}
        @action-confirmation-toggle=${e=>this.#l.set(t,e.detail.isExpanded)}
        @action-confirmation-undo=${f}
      ></ai-action-confirmation>
    `}#de(e,t){let n=e.originalClosedTabs;return t?e.actionType===`group_tabs`&&(n=e.originalGroupedTabs):n=e.selectedTabs,(n??[]).map(e=>({url:e.url,title:e.title,iconSrc:e.iconSrc||(e.url?`page-icon:${e.url}`:``)}))}#fe(){return r`<div data-l10n-id="smart-window-cancelled-label"></div>`}#pe(e){let t=e.toolUIData?.properties?.cancelledUiType,n=G[t]||`smartwindow-nl-retry-message`,i=e.toolUIData,a=i.properties?.originalUserPrompt||``;return r`
      <div>
        <p data-l10n-id=${n}></p>
        <moz-button
          class="tool-retry-button"
          @click=${()=>this.#me(e.messageId,i.toolCallId,a)}
          data-l10n-id="smartwindow-nl-retry-tool-button"
        ></moz-button>
      </div>
    `}#me=(e,t,n)=>{this.#he({messageId:e,toolCallId:t,updateType:V.RETRY_PROMPT,updateData:{prompt:n}})};#he(e){this.dispatchEvent(new CustomEvent(`AIChatContent:ToolUIUpdate`,{bubbles:!0,composed:!0,detail:e}))}#ge(e,t){if(!e)return n;let i=e.role===`assistant`,a=e.parts??[e],o=e=>e.toolUIData?.uiType===B.RETRY_COMPONENT;return r`<div class=${`chat-bubble chat-bubble-${e.role}`}>
      ${t?.length?r`<website-chip-container
            class="chat-bubble-chips"
            shouldGroupChips
            .websites=${t}
          ></website-chip-container>`:n}
      <div class="chat-bubble-inner">
        ${i?a.filter(o).map(e=>this.#Q(e)):n}
        <ai-chat-message
          .message=${e.body}
          .messageL10n=${e.messageL10n}
          .role=${e.role}
          .messageId=${e.messageId}
          .complete=${e.role===`assistant`&&!!e.isLastChunk}
          .conversationId=${this.conversationId}
          .seenUrls=${this.seenUrls}
          .historyResults=${e.historyResultsMap}
        ></ai-chat-message>
        ${i?a.filter(e=>e.toolUIData&&!o(e)).map(e=>this.#Q(e)):n}
        ${e.role===`assistant`&&e.isLastChunk&&e.citations?.length?r`<chat-assistant-citations
              .citations=${e.citations}
            ></chat-assistant-citations>`:n}
        ${e.role===`assistant`&&e.isLastChunk?r`
              <assistant-message-footer
                .messageId=${e.messageId}
                .appliedMemories=${e.appliedMemories}
                .showCallout=${e.showCallout}
                .hideRetry=${a.some(e=>e.toolUIData?.isResumeActivity)}
              ></assistant-message-footer>
            `:n}
      </div>
    </div>`}#_e(){return this.followUpSuggestions?.length?r`<smartwindow-prompts
      .prompts=${this.followUpSuggestions.map(e=>({text:e,type:`followup`}))}
      mode="followup"
    ></smartwindow-prompts>`:n}#ve(e){return!this.assistantIsLoading||e?n:r`<chat-assistant-loader
      .mode=${this.isSearching?`search`:`default`}
    ></chat-assistant-loader>`}#ye(){return this.errorObj?r`<chat-assistant-error
      .error=${this.errorObj}
    ></chat-assistant-error>`:n}#be(){let e=[],t,n=[],r=[],i,a=!1,o=t=>{(n.length||r.length)&&(n.length&&e.push({type:`action-log`,msgs:n,isComplete:t}),r.length&&e.push({type:`message`,msg:this.#Se(r),contextPageUrl:i}),n=[],r=[],i=void 0,a=!1)};for(let s of this.conversationState){if(!s)continue;if(s.uiType===B.ACTION_LOG){n.push(s),a=!1;continue}if(s.role===`assistant`){let e=r.at(-1);e&&(this.#xe(s)||this.#xe(e))&&o(!0),r.length||(i=t),r.push(s),s.body&&n.length&&(a=!0);continue}o(!0);let c=t;s.role===`user`&&(t=s.pageUrl),e.push({type:`message`,msg:s,contextPageUrl:c})}return o(!this.assistantIsLoading||a),e}#xe(e){return!!e.messageL10n||e.toolUIData?.uiType===B.AGENT_MONITOR}#Se(e){return e.length===1?e[0]:{...e.at(-1),body:e.map(e=>e.body).filter(Boolean).join(`

`),parts:e}}#Ce(e){return e.map(e=>e.row).filter(Boolean)}#we(e){return i(e,(e,t)=>this.#Te(e,t),(e,t)=>{let{type:n,msgs:r,msg:i,isComplete:a,contextPageUrl:o}=e;if(n===`action-log`)return this.#Z(r,a,t);let s=this.#H(i,o);return this.#ge(i,s)})}#Te(e,t){if(e.type===`action-log`){let n=e.msgs?.[0];return`action-log:${n?.toolCallId??n?.messageId??t}`}let{msg:n}=e,{ordinal:r}=n.parts?.[0]??n;return`message:${n.convId??``}:${r??t}`}render(){let e=this.#be(),t=e.some(e=>e.type===`action-log`&&e.isComplete===!1),n=e.at(-1),i=n?.type===`message`&&n.msg?.role===`assistant`&&!!n.msg?.body;return r`
      <link
        rel="stylesheet"
        href="${C}"
      />
      <div class="chat-content-wrapper" tabindex="-1">
        <div class="chat-inner-wrapper">
          ${this.#we(e)}
          ${this.#_e()}
          ${this.#ve(t||i)}
          ${this.#ye()}
        </div>
      </div>
      <div class="fullpage-top-box-shadow"></div>
      <kit-mention variant="sidebar"></kit-mention>
      <div
        class="assistant-response-announcer"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        ${this.assistantResponseAnnouncement}
      </div>
      <moz-button
        class="jump-to-bottom-button"
        data-l10n-id="aiwindow-jump-to-bottom"
        data-l10n-attrs="aria-label,tooltiptext"
        iconsrc="chrome://global/skin/icons/shaft-arrow-down.svg"
        disabled
        type="ghost icon"
      ></moz-button>
    `}},customElements.define(`ai-chat-content`,K)})))()}var J,Y,X,Z,Q;function $(){return($=e((()=>{t(),q(),J={title:`Domain-specific UI Widgets/AI Window/AI Chat Content`,component:`ai-chat-content`,argTypes:{conversationState:{control:{type:`object`}}},parameters:{fluent:`
aiwindow-memories-used =
  .label = Memories used
aiwindow-retry-without-memories =
  .label = Retry without memories
aiwindow-retry =
  .tooltiptext = Retry
aiwindow-copy-message =
  .tooltiptext = Copy
    `}},Y=({conversationState:e})=>r`
  <ai-chat-content .conversationState=${e}></ai-chat-content>
`,X=Y.bind({}),X.args={conversationState:[]},Z=Y.bind({}),Z.args={conversationState:[{role:`user`,body:`What is the weather like today?`}]},Q=Y.bind({}),Q.args={conversationState:[{role:`user`,body:`What is the weather like today?`},{role:`assistant`,messageId:`a1`,body:`I don't have access to real-time weather data, but I can help you with other tasks!`,appliedMemories:[]},{role:`user`,body:`Can you help me with coding?`},{role:`assistant`,messageId:`a2`,body:`Yes, I can help you with coding! What programming language or problem are you working on?`,appliedMemories:[`Looking for help with coding`,`Looking for real time weather data`]}]}})))()}$();export{Q as Conversation,X as Empty,Z as SingleUserMessage,J as default};