import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,u as n}from"./lit.all-Co4HOUmF.js";import{c as r,o as i}from"./iframe-17211AdQ.js";import{n as a}from"./moz-button-MQZwUQZw.js";import{n as o,t as s}from"./ModelIcons-DqL9m-UH.js";import{t as c}from"./moz-toggle-Cm83QLvW.js";import{t as l}from"./smartwindow-option-select-BxHvgPXp.js";var u;function d(){return(d=e((()=>{u=``+new URL(`smartwindow-onboarding-Cx4y8cp3.css`,import.meta.url).href})))()}function f(e){return[...new Set([p,...m()])].filter(e=>_[e]).map(t=>{let n={..._[t],iconSrc:s(t)};return n.l10nId||(n.label=e[t]?.shortName,n.buttonLabel=e[t]?.brandName),n})}var p,m,h,g,_,v,y;function b(){return(b=e((()=>{d(),t(),r(),o(),c(),a(),l(),{AUTO_MODEL_CHOICE_ID:p,getModelDisplayOrder:m,getAllModelsData:h,getCachedModelsData:g}=window.IS_STORYBOOK?{AUTO_MODEL_CHOICE_ID:`4`,getModelDisplayOrder:()=>[p,`2`,`3`,`1`],getCachedModelsData:()=>({1:{shortName:`Gemini 3.1 Flash Lite`,brandName:`Gemini`},2:{shortName:`Qwen 3 235B`,brandName:`Qwen`},3:{shortName:`Mistral Small 4`,brandName:`Mistral`}}),getAllModelsData:async()=>g()}:ChromeUtils.importESModule(`moz-src:///browser/components/aiwindow/models/Utils.sys.mjs`),_={[p]:{value:p,l10nId:`smartwindow-onboarding-model-auto`,descriptionL10nId:`smartwindow-onboarding-model-auto-description`},2:{value:`2`,descriptionL10nId:`aiwindow-firstrun-model-flexible-body`},3:{value:`3`,descriptionL10nId:`smartwindow-onboarding-model-mistral-description`},1:{value:`1`,descriptionL10nId:`smartwindow-onboarding-model-gemini-description`}},v=[{value:`both`,l10nId:`smartwindow-onboarding-memories-both`,descriptionL10nId:`smartwindow-onboarding-memories-both-description`},{value:`browsing`,l10nId:`smartwindow-onboarding-memories-browsing`,descriptionL10nId:`smartwindow-onboarding-memories-browsing-description`},{value:`chats`,l10nId:`smartwindow-onboarding-memories-chats`,descriptionL10nId:`smartwindow-onboarding-memories-chats-description`},{value:`none`,l10nId:`smartwindow-onboarding-memories-none`,descriptionL10nId:`smartwindow-onboarding-memories-none-description`}],y=class extends i{static properties={modelChoiceId:{type:String},recommendedModelChoiceId:{type:String},memoriesChoice:{type:String},isDefaultWindow:{type:Boolean},autoAdvanceMS:{type:Number},modelOptions:{state:!0},showingSetup:{state:!0},leavingWelcome:{state:!0}};constructor(){super(),this.modelOptions=f(g()),this.modelChoiceId=p,this.recommendedModelChoiceId=p,this.memoriesChoice=`both`,this.isDefaultWindow=!0,this.autoAdvanceMS=3e3,this.showingSetup=!1,this.leavingWelcome=!1}async firstUpdated(){!this.showingSetup&&this.autoAdvanceMS>0&&this.#t(`impression`,{screen:`welcome`}),this.modelOptions=f(await h())}#e;connectedCallback(){super.connectedCallback(),this.hasUpdated&&this.#n()}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.#e)}updated(e){super.updated(e),e.has(`autoAdvanceMS`)&&this.#n(),e.has(`showingSetup`)&&this.showingSetup&&this.#t(`impression`,{screen:`setup`})}#t(e,t){this.dispatchEvent(new CustomEvent(`smartwindow-onboarding:${e}`,{detail:t,bubbles:!0,composed:!0}))}#n(){clearTimeout(this.#e),this.leavingWelcome=!1,this.isConnected&&!this.showingSetup&&(this.#e=setTimeout(()=>{this.leavingWelcome=!0;let e=this.autoAdvanceMS>0&&!window.matchMedia(`(prefers-reduced-motion: reduce)`).matches?1e3:0;this.#e=setTimeout(async()=>{this.showingSetup=!0,await this.updateComplete,this.isConnected&&this.shadowRoot.querySelector(`h1`).focus()},e)},this.autoAdvanceMS))}#r(){this.#t(`save`,{modelChoiceId:this.modelChoiceId,memoriesChoice:this.memoriesChoice,isDefaultWindow:this.isDefaultWindow})}render(){return n`
      <link
        rel="stylesheet"
        href="${u}"
      />
      <main>
        ${this.showingSetup?this.#i():n`
              <section
                class="welcome ${this.leavingWelcome?`leaving`:``}"
                aria-labelledby="welcome-title"
              >
                <img
                  class="welcome-logo"
                  src="chrome://browser/content/aiwindow/assets/smart-window.svg"
                  alt=""
                />
                <h1
                  class="onboarding-title welcome-title"
                  id="welcome-title"
                  data-l10n-id="aiwindow-firstrun-title"
                ></h1>
                <p
                  class="welcome-subtitle"
                  data-l10n-id="smartwindow-onboarding-welcome-subtitle"
                ></p>
              </section>
            `}
      </main>
    `}#i(){return n`
      <section class="setup" aria-labelledby="setup-title">
        <header class="setup-header">
          <h1
            class="onboarding-title"
            id="setup-title"
            tabindex="-1"
            data-l10n-id="smartwindow-onboarding-title"
          ></h1>
          <p
            class="setup-subtitle"
            data-l10n-id="smartwindow-onboarding-subtitle"
          ></p>
        </header>
        <div class="choices">
          <div
            class="choice"
            role="group"
            aria-labelledby="model-label"
            aria-describedby="model-description"
          >
            <span class="choice-icon-container">
              <img
                class="choice-icon"
                src="chrome://browser/skin/lightning-bolt.svg"
                alt=""
              />
            </span>
            <div class="choice-text">
              <h2
                class="choice-label"
                id="model-label"
                data-l10n-id="smartwindow-onboarding-model-label"
              ></h2>
              <p
                class="choice-description"
                id="model-description"
                data-l10n-id="smartwindow-onboarding-model-description"
              ></p>
            </div>
            <smartwindow-option-select
              class="choice-select"
              id="model"
              .options=${this.modelOptions.map(e=>({...e,secondaryLabelL10nId:e.value===this.recommendedModelChoiceId?`smartwindow-onboarding-model-recommended`:void 0}))}
              .value=${this.modelChoiceId}
              @smartwindow-option-select:change=${e=>{this.modelChoiceId=e.detail.value,this.#t(`change`,{field:`model`,value:this.modelChoiceId})}}
            ></smartwindow-option-select>
          </div>
          <div
            class="choice"
            role="group"
            aria-labelledby="memories-label"
            aria-describedby="memories-description"
          >
            <span class="choice-icon-container">
              <img
                class="choice-icon"
                src="chrome://browser/content/aiwindow/assets/memories-on.svg"
                alt=""
              />
            </span>
            <div class="choice-text">
              <h2
                class="choice-label"
                id="memories-label"
                data-l10n-id="smartwindow-onboarding-memories-label"
              ></h2>
              <p
                class="choice-description"
                id="memories-description"
                data-l10n-id="smartwindow-onboarding-memories-description"
              ></p>
            </div>
            <smartwindow-option-select
              class="choice-select"
              id="memories"
              .options=${v}
              .value=${this.memoriesChoice}
              @smartwindow-option-select:change=${e=>{this.memoriesChoice=e.detail.value,this.#t(`change`,{field:`memories`,value:this.memoriesChoice})}}
            ></smartwindow-option-select>
          </div>
          <div class="choice">
            <span class="choice-icon-container">
              <img
                class="choice-icon"
                src="chrome://browser/content/aiwindow/assets/smart-window.svg"
                alt=""
              />
            </span>
            <moz-toggle
              class="default-window-toggle"
              id="default-window"
              inputlayout="inline-end"
              data-l10n-id="smartwindow-onboarding-default-window"
              .pressed=${this.isDefaultWindow}
              @toggle=${e=>{this.isDefaultWindow=e.target.pressed,this.#t(`change`,{field:`defaultWindow`,value:this.isDefaultWindow})}}
            ></moz-toggle>
          </div>
        </div>
        <moz-button
          class="save-button"
          id="save"
          type="primary"
          data-l10n-id="smartwindow-onboarding-save"
          @click=${this.#r}
        ></moz-button>
      </section>
    `}},customElements.define(`smartwindow-onboarding`,y)})))()}var x,S,C,w,T,E;function D(){return(D=e((()=>{t(),b(),x={title:`Domain-specific UI Widgets/AI Window/Smartwindow Onboarding`,component:`smartwindow-onboarding`,parameters:{layout:`fullscreen`,fluent:`
-brand-short-name = Firefox
-smart-window-brand-name = Smart Window
aiwindow-firstrun-title = Welcome to { -smart-window-brand-name }
aiwindow-firstrun-model-flexible-body = Ready for a variety of tasks

# The line break is intentional and is preserved when displayed.
smartwindow-onboarding-welcome-subtitle =
    It works alongside you to get stuff done.
    Plan, compare, explore, and more.
smartwindow-onboarding-title = Let’s make it yours
smartwindow-onboarding-subtitle = Set up { -smart-window-brand-name } the way you like. Make changes anytime in settings.
smartwindow-onboarding-model-label = Pick your AI model
smartwindow-onboarding-model-description = The model powers chats and actions in { -smart-window-brand-name }.
smartwindow-onboarding-model-auto = Auto
# Badge identifying the recommended model during onboarding: Mistral in the EEA, Auto elsewhere.
smartwindow-onboarding-model-recommended = Recommended
smartwindow-onboarding-model-auto-description = { -smart-window-brand-name } picks the best model for your task
smartwindow-onboarding-model-mistral-description = Good if you chat and browse in multiple languages
smartwindow-onboarding-model-gemini-description = Quick answers when you’re moving fast
smartwindow-onboarding-memories-label = Choose how { -smart-window-brand-name } learns about you
smartwindow-onboarding-memories-description = { -smart-window-brand-name } can learn from chats, browsing, or both to create memories. It uses them to personalize your experience over time.
smartwindow-onboarding-memories-both = Chats and browsing
smartwindow-onboarding-memories-browsing = Browsing only
smartwindow-onboarding-memories-chats = Chats only
smartwindow-onboarding-memories-none = Don’t learn from activity
smartwindow-onboarding-memories-both-description = Chats in { -smart-window-brand-name }, browsing across { -brand-short-name }
smartwindow-onboarding-memories-browsing-description = Browsing across { -brand-short-name }
smartwindow-onboarding-memories-chats-description = Chats in { -smart-window-brand-name }
smartwindow-onboarding-memories-none-description = You’ll see fewer tailored suggestions and may need to repeat details across chats.
smartwindow-onboarding-default-window =
    .label = Start in { -smart-window-brand-name }
    .description = Use it when { -brand-short-name } starts, restarts, or opens links from other apps.
smartwindow-onboarding-save =
    .label = Save and go
`},argTypes:{modelChoiceId:{control:`select`,options:[`4`,`2`,`3`,`1`]},memoriesChoice:{control:`select`,options:[`both`,`browsing`,`chats`,`none`]},isDefaultWindow:{control:`boolean`},autoAdvanceMS:{control:`number`}}},S=({modelChoiceId:e,recommendedModelChoiceId:t,memoriesChoice:r,isDefaultWindow:i,autoAdvanceMS:a})=>n`
  <smartwindow-onboarding
    .modelChoiceId=${e}
    .recommendedModelChoiceId=${t}
    .memoriesChoice=${r}
    .isDefaultWindow=${i}
    .autoAdvanceMS=${a}
  ></smartwindow-onboarding>
`,C=S.bind({}),C.args={modelChoiceId:`4`,recommendedModelChoiceId:`4`,memoriesChoice:`both`,isDefaultWindow:!0,autoAdvanceMS:3e3},w=S.bind({}),w.args={...C.args,autoAdvanceMS:0},T=S.bind({}),T.args={...w.args,modelChoiceId:`3`,memoriesChoice:`chats`,isDefaultWindow:!1},E=S.bind({}),E.args={...w.args,modelChoiceId:`3`,recommendedModelChoiceId:`3`}})))()}D();export{C as Default,E as EuropePromotion,T as ExistingChoices,w as Setup,x as default};