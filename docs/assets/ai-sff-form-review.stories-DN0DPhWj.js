import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,f as n,u as r,y as i}from"./lit.all-Co4HOUmF.js";import{c as a,o}from"./iframe-ChCqHcnv.js";import{n as s}from"./moz-input-text-VrGVAnuy.js";import{n as c}from"./moz-button-1qo60Dlf.js";import{a as l,i as u,n as d,r as f,t as p}from"./SmartFormFillConstants-BwXnXPUL.js";import{i as m}from"./moz-button-group-BVIRyV6s.js";var h;function g(){return(g=e((()=>{h=new URL(`ai-sff-form-review-CQfhqhpq.css`,import.meta.url).href+``})))()}var _;function v(){return(v=e((()=>{g(),a(),n(),l(),c(),m(),s(),_=class extends o{#e=null;#t=null;#n=!1;static properties={fields:{type:Array},state:{type:String},errorType:{type:String},filledFieldCount:{type:Number},filling:{type:Boolean}};static queries={stateSection:`.form-review-dialog`,reviewFields:`.form-review-fields`,jumpButton:`.form-review-jump-to-bottom-button`};#r=!1;#i=null;#a=null;#o=null;#s=null;constructor(){super(),this.fields=[],this.state=u.PROGRESS,this.errorType=null,this.filledFieldCount=null,this.filling=!1}async firstUpdated(){await this.#d(),this.dispatchEvent(new CustomEvent(f,{bubbles:!0}))}updated(e){super.updated(e);let t=e.has(`state`),n=this.state===u.FINAL&&e.get(`filling`)===!0&&!this.filling;(t||n)&&(t&&this.state===u.PROGRESS&&(this.#r=!1,this.#n=!1),(e.get(`state`)!==void 0||n)&&this.#d(),t&&(this.#f(),this.#c()))}#c(){this.#l(),this.#n||this.state!==u.REVIEW||!this.reviewFields||(this.#e=this.reviewFields,this.#e.addEventListener(`scroll`,this.#u),this.#t=new ResizeObserver(this.#u),this.#t.observe(this.#e))}#l(){this.#t?.disconnect(),this.#t=null,this.#e?.removeEventListener(`scroll`,this.#u),this.#e=null}#u=()=>{if(this.#n||!this.#e)return;let{scrollTop:e,scrollHeight:t,clientHeight:n}=this.#e;t-e-n>1||(this.#n=!0,this.#l(),this.requestUpdate())};disconnectedCallback(){super.disconnectedCallback(),this.#l(),this.#m()}async#d(){let e=this.stateSection,t=this.state;e&&(await this.ownerDocument.l10n?.translateFragment(e),e.isConnected&&this.state===t&&this.stateSection===e&&e.focus())}#f(){if(this.#m(),this.state!==u.REVIEW)return;let e=this.reviewFields,t=this.jumpButton;e&&t&&(this.#a=()=>{this.#s||=requestAnimationFrame(()=>{this.#s=null,this.#p()})},this.#o=()=>{e.scrollTop=e.scrollHeight},this.#i=new ResizeObserver(()=>this.#p()),e.addEventListener(`scroll`,this.#a),t.addEventListener(`click`,this.#o),this.#i.observe(e),this.#p())}#p(){let e=this.reviewFields,t=this.jumpButton;if(!e||!t)return;let n=e.scrollHeight-e.scrollTop-e.clientHeight>1;t.hasAttribute(`visible`)!==n&&(t.toggleAttribute(`visible`,n),t.toggleAttribute(`disabled`,!n))}#m(){this.#s&&=(cancelAnimationFrame(this.#s),null),this.#a&&=(this.reviewFields?.removeEventListener(`scroll`,this.#a),null),this.#o&&=(this.jumpButton?.removeEventListener(`click`,this.#o),null),this.#i?.disconnect(),this.#i=null}#h(e,t){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,detail:t}))}#g(e,t){this.filling||(this.fields=this.fields.map(n=>n.id===t?{...n,value:e.currentTarget.value}:n))}#_(){!this.filling&&this.#n&&(this.filling=!0,this.#h(p.FILL_FORM,{fields:this.fields.map(({id:e,value:t})=>({id:e,value:t}))}))}#v(){this.filling||this.#r||(this.#r=!0,this.#_())}#y(){this.filling||this.#h(p.CANCEL)}#b(){this.#h(p.STOP)}#x(){this.#h(p.CLOSE)}#S(e){let n=e.label||e.placeholder||e.name||``,i=!n;return r`
      <moz-input-text
        .value=${e.value}
        .label=${n}
        .disabled=${this.filling}
        data-l10n-id=${t(i?`ai-smart-form-fill-field`:void 0)}
        @input=${t=>this.#g(t,e.id)}
      ></moz-input-text>
    `}#C(){return r`
      <section
        class="form-review-dialog vertical-layout"
        tabindex="-1"
        aria-labelledby="form-review-heading"
        aria-describedby="form-review-description"
      >
        <h1
          id="form-review-heading"
          class="form-review-heading"
          data-l10n-id="ai-smart-form-fill-review-heading"
        ></h1>
        <p
          id="form-review-description"
          class="form-review-description"
          data-l10n-id="ai-smart-form-fill-review-description"
          data-l10n-args=${JSON.stringify({count:this.fields.length})}
        ></p>
        <div class="form-review-fields-container">
          <div class="form-review-fields">
            ${i(this.fields,e=>e.id,e=>this.#S(e))}
          </div>
          <moz-button
            class="form-review-jump-to-bottom-button"
            data-l10n-id="ai-smart-form-fill-jump-to-bottom"
            data-l10n-attrs="aria-label,tooltiptext"
            iconsrc="chrome://global/skin/icons/shaft-arrow-down.svg"
            disabled
            type="ghost icon"
          ></moz-button>
        </div>
        <moz-button-group class="form-review-actions">
          <moz-button
            .disabled=${this.filling}
            size="large"
            data-l10n-id="ai-smart-form-fill-cancel-review"
            @click=${this.#y}
          ></moz-button>
          <moz-button
            type="primary"
            .disabled=${this.filling||!this.#n}
            size="large"
            data-l10n-id="ai-smart-form-fill-fill-form"
            @click=${this.#_}
          ></moz-button>
        </moz-button-group>
      </section>
    `}#w(){return r`
      <section
        class="form-review-progress form-review-dialog"
        tabindex="-1"
        aria-labelledby="form-review-progress-label"
      >
        <div class="form-review-progress-group">
          <img
            class="form-review-icon form-review-progress-icon"
            src="chrome://browser/content/aiwindow/assets/loader.svg"
            alt=""
          />
          <span
            id="form-review-progress-label"
            class="form-review-progress-label"
            data-l10n-id="ai-smart-form-fill-finding-suggestions"
          ></span>
        </div>
        <moz-button
          type="ghost"
          class="form-review-stop"
          iconSrc="chrome://browser/content/aiwindow/assets/stop-generation.svg"
          data-l10n-id="ai-smart-form-fill-stop-finding-suggestions"
          @click=${this.#b}
        ></moz-button>
      </section>
    `}#T(){let e=this.errorType!==null,t=this.errorType===d.FILL_FAILED&&(!this.#r||this.filling),n=`ai-smart-form-fill-success-heading`,i=`ai-smart-form-fill-success-description`,a=e||this.filledFieldCount===0?`chrome://browser/content/aiwindow/assets/warning.svg`:`chrome://browser/content/aiwindow/assets/applied-policy.svg`;return this.errorType===d.NO_SUGGESTIONS?(n=`ai-smart-form-fill-no-suggestions-heading`,i=`ai-smart-form-fill-no-suggestions-description`):t?(n=`ai-smart-form-fill-error-try-again-heading`,i=`ai-smart-form-fill-error-try-again-description`):e?(n=`ai-smart-form-fill-error-heading`,i=`ai-smart-form-fill-error-description`):this.filledFieldCount===0&&(n=`ai-smart-form-fill-no-changes-heading`,i=`ai-smart-form-fill-no-changes-description`),r`
      <section
        class="form-review-dialog vertical-layout"
        tabindex="-1"
        aria-labelledby="form-review-final-heading"
        aria-describedby="form-review-final-description"
      >
        <h1
          id="form-review-final-heading"
          class="form-review-final-heading form-review-heading"
        >
          <img
            class="form-review-icon form-review-final-icon"
            src=${a}
            alt=""
          />
          <span data-l10n-id=${n}></span>
        </h1>
        <p
          id="form-review-final-description"
          class="form-review-description"
          data-l10n-id=${i}
        ></p>
        ${t?r`
              <moz-button-group class="form-review-actions">
                <moz-button
                  class="form-review-close"
                  size="large"
                  .disabled=${this.filling}
                  data-l10n-id="ai-smart-form-fill-close-review"
                  @click=${this.#x}
                ></moz-button>
                <moz-button
                  class="form-review-retry"
                  type="primary"
                  size="large"
                  .disabled=${this.filling}
                  data-l10n-id="ai-smart-form-fill-try-again"
                  @click=${this.#v}
                ></moz-button>
              </moz-button-group>
            `:r`
              <moz-button-group class="form-review-actions">
                <moz-button
                  class="form-review-close"
                  type="primary"
                  size="large"
                  data-l10n-id="ai-smart-form-fill-close-review"
                  @click=${this.#x}
                ></moz-button>
              </moz-button-group>
            `}
      </section>
    `}render(){let e;switch(this.state){case u.PROGRESS:e=this.#w();break;case u.REVIEW:e=this.#C();break;case u.FINAL:e=this.#T();break;default:e=this.#C()}return r`
      <link
        rel="stylesheet"
        href="${h}"
      />
      ${e}
    `}},customElements.define(`ai-sff-form-review`,_)})))()}var y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{n(),l(),v(),y=[{id:`first-name`,label:`First name`,placeholder:``,name:`firstName`,value:`Katherine`},{id:`last-name`,label:`Last name`,placeholder:``,name:`lastName`,value:`Johnson`},{id:`email`,label:`Email address`,placeholder:`name@example.com`,name:`email`,value:`katherine@example.com`},{id:`phone`,label:``,placeholder:`Phone number`,name:`phone`,value:`555-0100`},{id:`company`,label:``,placeholder:``,name:`Company`,value:`Mozilla`},{id:`unlabelled-field`,label:``,placeholder:``,name:``,value:`Generated value`}],b=Array.from({length:20},(e,t)=>({id:`field-${t+1}`,label:`Field ${t+1}`,placeholder:``,name:`field-${t+1}`,value:`Generated value ${t+1}`})),x={title:`Domain-specific UI Widgets/AI Window/Smart Form Fill Form Review`,component:`ai-sff-form-review`,argTypes:{fields:{control:`object`},state:{control:`select`,options:Object.values(u)},errorType:{control:`select`,options:[null,...Object.values(d)]},filledFieldCount:{control:`number`}},parameters:{status:`in-development`,actions:{handles:Object.values(p)},fluent:`
ai-smart-form-fill-fill-form =
    .label = Fill form
ai-smart-form-fill-review-heading = Review suggestions
ai-smart-form-fill-review-description = Edit or delete anything that’s not correct.
ai-smart-form-fill-field =
    .label = Field
ai-smart-form-fill-cancel-review =
    .label = Cancel
ai-smart-form-fill-finding-suggestions = Finding suggestions
ai-smart-form-fill-stop-finding-suggestions =
    .aria-label = Stop finding suggestions
ai-smart-form-fill-success-heading = Form filled with suggestions
ai-smart-form-fill-success-description = Check the form. Review the filled fields and update anything that looks off or missing before submitting.
ai-smart-form-fill-no-changes-heading = No changes applied
ai-smart-form-fill-no-changes-description = Smart Form Fill didn’t fill any fields. Check the form and try again.
ai-smart-form-fill-no-suggestions-heading = No suggestions found
ai-smart-form-fill-no-suggestions-description = Smart Form Fill wasn’t able to generate any suggestions for this form.
ai-smart-form-fill-error-heading = Something happened catch-all headline
ai-smart-form-fill-error-description = General explanation that maybe its the connection, or something else happened, and to try again
ai-smart-form-fill-close-review =
    .label = Close
    `}},S=({fields:e,state:t,errorType:n,filledFieldCount:i=null})=>r`
  <ai-sff-form-review
    .fields=${e}
    .state=${t}
    .errorType=${n}
    .filledFieldCount=${i}
  ></ai-sff-form-review>
`,C=S.bind({}),C.args={fields:y,state:u.PROGRESS,errorType:null},w=S.bind({}),w.args={fields:y,state:u.REVIEW,errorType:null},T=S.bind({}),T.args={fields:b,state:u.REVIEW,errorType:null},E=S.bind({}),E.args={fields:y,state:u.FINAL,errorType:null,filledFieldCount:1},D=S.bind({}),D.args={fields:y,state:u.FINAL,errorType:null,filledFieldCount:0},O=S.bind({}),O.args={fields:y,state:u.FINAL,errorType:d.GENERATION_FAILED},k=S.bind({}),k.args={fields:[],state:u.FINAL,errorType:d.NO_SUGGESTIONS}})))()}A();export{O as FromReviewError,D as NoChanges,k as NoSuggestions,C as Progress,w as Review,T as ScrollableReview,E as Success,x as default};