import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{_ as t,f as n,p as r,u as i}from"./lit.all-Co4HOUmF.js";import{c as a,o}from"./iframe-DP8hlEO7.js";import{n as s}from"./moz-button-DllAM7jW.js";import{t as c}from"./website-chip-container-C_5du4Io.js";var l;function u(){return(u=e((()=>{l=new URL(`ai-action-result-Clp-TIsJ.css`,import.meta.url).href+``})))()}var d;function f(){return(f=e((()=>{u(),n(),a(),s(),c(),d=class e extends o{static properties={conversationId:{type:String},turnIndex:{type:Number},label:{type:String},labelL10nId:{type:String},labelL10nArgs:{type:Object},labelLink:{type:Object},rows:{type:Array},summary:{type:String},summaryL10nId:{type:String},summaryL10nArgs:{type:Object},canUndo:{type:Boolean,attribute:`can-undo`,reflect:!0},isExpanded:{type:Boolean,attribute:`is-expanded`,reflect:!0},isLoading:{type:Boolean,attribute:`is-loading`,reflect:!0}};constructor(){super(),this.label=``,this.labelL10nId=null,this.labelL10nArgs=null,this.labelLink=null,this.rows=[],this.summary=``,this.summaryL10nId=null,this.summaryL10nArgs=null,this.canUndo=!1,this.isExpanded=!1,this.isLoading=!1}static SHIMMER_CYCLE_MS=2e3;static SWEEP_MAX_MS=2200;#e=null;#t=null;#n=null;#r=!1;#i=null;willUpdate(t){this.isLoading?(this.#i={labelL10nId:this.labelL10nId,labelL10nArgs:this.labelL10nArgs,label:this.label,labelLink:this.labelLink},this.#r=!1,this.#c(),this.removeAttribute(`settling`),this.#s()):t.has(`isLoading`)&&t.get(`isLoading`)&&this.#i&&(this.#r=!0,this.#s(),this.#t=setTimeout(()=>{this.#t=null,this.#l()},e.SWEEP_MAX_MS));let n=this.isLoading||this.#r;this.toggleAttribute(`shimmering`,n),n||(this.removeAttribute(`settling`),this.#c())}updated(){this.#a(),this.#r&&!this.#n&&this.#o()}async#a(){let{conversationId:e,turnIndex:t}=this;if(!e||t===void 0)return;let n=`${e}:${t}`;if(this.#e===n)return;this.#e=n;let r=this.renderRoot?.querySelector(`.action-result-label`);await document.l10n.translateElements([r]),this.isConnected&&this.conversationId===e&&this.turnIndex===t&&this.dispatchEvent(new CustomEvent(`AIChatContent:FirstActionLogDisplayed`,{bubbles:!0,composed:!0,detail:{conversationId:e,turnIndex:t}}))}#o(){let t=this.renderRoot?.querySelector(`.action-result-label`),n=t?.getAnimations?.().find(e=>e.animationName===`actionLogShimmer`);if(!t||!n){this.#l();return}let r=e.SHIMMER_CYCLE_MS,i=(Number(n.currentTime)||0)%r/r,a=100-200*(i<.5?2*i*i:1-(-2*i+2)**2/2),o=Math.floor(a/200)*200,s=a-o;this.setAttribute(`settling`,``),this.#n=t.animate([{backgroundPositionX:`${a}%`},{backgroundPositionX:`${o}%`}],{duration:Math.min(1e3,Math.max(300,s/200*r)),easing:`ease-out`,fill:`forwards`}),this.#n.finished.then(()=>this.#l()).catch(()=>this.#l())}connectedCallback(){super.connectedCallback(),this.renderRoot.addEventListener(`click`,this.#d,!0)}disconnectedCallback(){super.disconnectedCallback(),this.#s(),this.#c(),this.renderRoot.removeEventListener(`click`,this.#d,!0)}#s(){this.#t&&=(clearTimeout(this.#t),null)}#c(){this.#n&&=(this.#n.cancel(),null)}#l(){this.#r&&(this.#r=!1,this.#s(),this.requestUpdate())}#u(){this.dispatchEvent(new CustomEvent(`action-result-undo`,{bubbles:!0,composed:!0}))}#d=e=>{e.composedPath().some(e=>e instanceof HTMLAnchorElement&&e.classList.contains(`action-result-label-link`))&&e.stopPropagation()};#f(){this.isExpanded=!this.isExpanded,this.dispatchEvent(new CustomEvent(`action-result-toggle`,{detail:{isExpanded:this.isExpanded},bubbles:!0,composed:!0}))}#p(e,t,n){return e?i`<a
        class="action-result-label-link"
        data-l10n-name=${e.l10nName}
        href=${e.href}
        target="_blank"
        rel="noopener"
      ></a>`:t?``:n}render(){let e=(this.isLoading||this.#r)&&this.#i?this.#i:{labelL10nId:this.labelL10nId,labelL10nArgs:this.labelL10nArgs,label:this.label,labelLink:this.labelLink};return i`
      <link
        rel="stylesheet"
        href="${l}"
      />
      <div class="action-result-wrapper">
        <button
          type="button"
          class="action-result-header"
          aria-expanded=${this.isExpanded}
          @click=${this.#f}
        >
          ${r(!!e.labelLink,i`<span
              class="action-result-label"
              data-l10n-id=${e.labelL10nId||t}
              data-l10n-args=${e.labelL10nArgs?JSON.stringify(e.labelL10nArgs):t}
            >
              ${this.#p(e.labelLink,e.labelL10nId,e.label)}
            </span>`)}
        </button>
        ${this.#m()}
      </div>
    `}#m(){return i`
      ${this.isExpanded?i`
            <div class="action-result-expanded">
              ${this.rows.map(e=>i`
                  <div class="action-result-expanded-row">
                    <div class="action-result-expanded-row-header">
                      <span class="action-result-dot" aria-hidden="true"></span>
                      ${r(!!e.link,i`<span
                          class="action-result-expanded-row-label"
                          data-l10n-id=${e.labelL10nId||t}
                          data-l10n-args=${e.labelL10nArgs?JSON.stringify(e.labelL10nArgs):t}
                        >
                          ${this.#p(e.link,e.labelL10nId,e.label)}
                        </span>`)}
                    </div>
                    ${e.items?.length?i`
                          <website-chip-container
                            class="action-result-chips"
                            .websites=${e.items}
                            .autoOverflow=${!0}
                          ></website-chip-container>
                        `:t}
                  </div>
                `)}
            </div>
          `:t}
      ${this.summary||this.summaryL10nId?i`<p
            class="action-result-summary"
            data-l10n-id=${this.summaryL10nId||t}
            data-l10n-args=${this.summaryL10nArgs?JSON.stringify(this.summaryL10nArgs):t}
          >
            ${this.summaryL10nId?``:this.summary}
          </p>`:t}
      ${this.canUndo?i`
            <moz-button
              class="action-result-undo"
              @click=${this.#u}
              data-l10n-id="smartwindow-nl-undo-button"
              type="ghost"
            ></moz-button>
          `:t}
    `}},customElements.define(`ai-action-result`,d)})))()}var p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{n(),f(),p={title:`Domain-specific UI Widgets/AI Window/AI Action Result`,component:`ai-action-result`,parameters:{fluent:`
smartwindow-nl-undo-button =
    .label = Undo
smartwindow-assistant-citations-more-label = +{ $count } more
  `},argTypes:{label:{control:`text`},summary:{control:`text`},canUndo:{control:`boolean`},isExpanded:{control:`boolean`},rows:{control:`object`}}},m=e=>Array.from({length:e},(e,t)=>({url:`https://example.com/${t+1}`,label:`Example Site ${t+1}`})),h=({label:e,summary:t,canUndo:n,isExpanded:r,rows:a})=>i`
  <ai-action-result
    label=${e}
    summary=${t}
    ?can-undo=${n}
    ?is-expanded=${r}
    .rows=${a}
  ></ai-action-result>
`,g=h.bind({}),g.args={label:`Closed tab`,summary:`Closed open tabs.`,canUndo:!0,isExpanded:!1,rows:[{label:`Closed tab`,items:m(1)}]},_=h.bind({}),_.args={label:`Closed tab`,summary:`Closed open tabs.`,canUndo:!0,isExpanded:!0,rows:[{label:`Closed tab`,items:m(1)}]},v=h.bind({}),v.args={label:`Closed 3 tabs`,summary:`Closed open tabs.`,canUndo:!0,isExpanded:!0,rows:[{label:`Closed tabs`,items:m(3)}]},y=h.bind({}),y.args={label:`Closed tab`,summary:`Closed open tabs.`,canUndo:!1,isExpanded:!0,rows:[{label:`Closed tab`,items:m(1)},{label:`Undo – reopened tab`,items:[]}]},b=({label:e,summary:t,canUndo:n,isExpanded:r,rows:a})=>i`
  <div
    style="resize: horizontal; overflow: auto; inline-size: 560px; min-inline-size: 200px; max-inline-size: 100%; border: 1px dashed #ccc; padding: 8px;"
  >
    <ai-action-result
      label=${e}
      summary=${t}
      ?can-undo=${n}
      ?is-expanded=${r}
      .rows=${a}
    ></ai-action-result>
  </div>
`,x=b.bind({}),x.args={label:`Closed 6 tabs`,summary:`Closed open tabs.`,canUndo:!0,isExpanded:!0,rows:[{label:`Closed tabs`,items:m(6)}]},S=h.bind({}),S.args={label:`Closed 3 tabs`,summary:`Closed open tabs.`,canUndo:!1,isExpanded:!0,rows:[{label:`Closed tabs`,items:m(3)},{label:`Restored tabs`,items:[]}]}})))()}C();export{g as Collapsed,_ as Expanded,y as ExpandedAfterUndo,v as ExpandedBulk,S as ExpandedBulkAfterUndo,x as ExpandedWithOverflowingChips,p as default};