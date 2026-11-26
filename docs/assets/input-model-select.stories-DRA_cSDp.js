import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{_ as t,f as n,u as r,y as i}from"./lit.all-Co4HOUmF.js";import{c as a,o}from"./iframe-DUPCaqkc.js";import{n as s}from"./moz-button-DlJZ5I-w.js";import{n as c,t as l}from"./smartwindow-panel-list-cojyAM0i.js";import{t as u}from"./panel-list-BjRbkL-2.js";import{n as d,t as f}from"./ModelIcons-DqL9m-UH.js";import{t as p}from"./moz-badge-B_v2NxnX.js";var m;function h(){return(h=e((()=>{m=``+new URL(`input-model-select-DpRHRpg7.css`,import.meta.url).href})))()}var g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{l(),h(),n(),a(),d(),s(),u(),p(),{XPCOMUtils:g}=ChromeUtils.importESModule(`resource://gre/modules/XPCOMUtils.sys.mjs`),_=`browser.smartwindow.model`,{getModelDisplayOrder:v,AUTO_MODEL_CHOICE_ID:y,isAutoModelEnabled:b}=window.IS_STORYBOOK?{getModelDisplayOrder:()=>[`3`,`1`,`2`],AUTO_MODEL_CHOICE_ID:`4`,isAutoModelEnabled:()=>!1}:ChromeUtils.importESModule(`moz-src:///browser/components/aiwindow/models/Utils.sys.mjs`),x={0:`aiwindow-input-model-select-button-label-custom`,1:`aiwindow-input-model-select-button-label-fast`,2:`aiwindow-input-model-select-button-label-allpurpose`,3:`aiwindow-input-model-select-button-label-personal`,4:`aiwindow-input-model-select-button-label-auto`},S={...x,1:`aiwindow-input-model-select-fast-description`,2:`aiwindow-input-model-select-flexible-description`,3:`aiwindow-input-model-select-personal-description`,4:`aiwindow-input-model-select-auto-description`},C=class extends o{static shadowRootOptions={...o.shadowRootOptions,delegatesFocus:!0};static properties={selectedModelId:{type:String,reflect:!0},defaultModelChoiceId:{type:String},availableModels:{type:Object},panelOpen:{type:Boolean,state:!0},sidebarMode:{type:Boolean,reflect:!0}};constructor(){super(),this.selectedModelId=``,this.defaultModelChoiceId=null,this.availableModels=null,this.panelOpen=!1,this.sidebarMode=!1,this._menuId=`models-menu-${crypto.randomUUID()}`,window.IS_STORYBOOK?this.customModelName=``:(g.defineLazyPreferenceGetter(this,`customModelName`,_,null,()=>this.requestUpdate()),this.customModelName)}get#e(){return this.panelOpen?`chrome://global/skin/icons/arrow-up-12.svg`:`chrome://global/skin/icons/arrow-down-12.svg`}#t=()=>{this.panelOpen=!0};#n=()=>{this.panelOpen=!1};get#r(){if(!this.availableModels)return[];let e=v(),t=t=>{if(t===`0`)return-1;let n=e.indexOf(t);return n===-1?e.length:n};return Object.entries(this.availableModels).map(([e,t])=>({...t,index:e})).sort((e,n)=>t(e.index)-t(n.index))}get#i(){return this.#r.find(e=>e.model===this.selectedModelId)}#a(e){let t=this.#r.find(t=>t.model===e);t?e!==this.selectedModelId&&(this.selectedModelId=e,this.dispatchEvent(new CustomEvent(`aiwindow-input-model-select:model-change`,{detail:{modelId:e,modelChoiceId:t.index},bubbles:!0,composed:!0}))):console.error(`Could not find model ID: [${e}]`)}#o(){this.dispatchEvent(new CustomEvent(`aiwindow-input-model-select:open-settings`,{bubbles:!0,composed:!0}))}#s(e){return x[e]}#c(e){return e.index===`0`?this.customModelName:e.shortName}#l(e){return e.index===`0`?this.#u():e.brandName}#u(){return(this.customModelName.split(/[\\/]/).findLast(Boolean)?.replace(/\.gguf$/i,``)??``).split(/[-_:]/).find(Boolean)??``}render(){let e=this.#i;if(!this.#r.length||!e)return r``;let n=this.#l(e),a=b()?S:x,o=r`<panel-list
      id=${this._menuId}
      @shown=${this.#t}
      @hidden=${this.#n}
    >
      ${i(this.#r,e=>e.index,e=>r`
          <button
            class="model-item"
            role="menuitem"
            @click=${()=>this.#a(e.model)}
          >
            <span class="model-item-avatar">
              <img
                class="model-item-icon${e.index===`0`?` model-item-icon--custom`:``}"
                src=${f(e.index)}
                alt=${this.#c(e)}
            /></span>
            <span class="model-item-content">
              <span class="model-item-header">
                ${this.#c(e)?r`<span class="model-item-label"
                      >${this.#c(e)}</span
                    >`:r`<span
                      class="model-item-label"
                      data-l10n-id=${this.#s(e.index)}
                    ></span>`}
                ${e.index===y&&e.index!==this.defaultModelChoiceId?r`<moz-badge
                      type="new"
                      data-l10n-id="aiwindow-input-model-select-recommended-badge"
                    ></moz-badge>`:``}
                ${e.index===this.defaultModelChoiceId?r`<moz-badge
                      type="new"
                      data-l10n-id="aiwindow-input-model-select-default-badge"
                    ></moz-badge>`:``}
              </span>
              <span
                class="model-item-details"
                data-l10n-id=${a[e.index]}
              ></span>
            </span>
            ${e.model===this.selectedModelId?r`<img
                  class="model-item-check"
                  src="chrome://global/skin/icons/check.svg"
                  alt=""
                />`:``}
          </button>
        `)}
      <hr />
      <panel-item
        action="open-smartwindow-settings"
        role="link"
        data-l10n-id="aiwindow-input-model-select-settings-link"
        @click=${this.#o}
      >
      </panel-item>
    </panel-list>`;return r`
      <link
        rel="stylesheet"
        href="${c}"
      />
      <link
        rel="stylesheet"
        href="${m}"
      />
      <moz-button
        type="default"
        class="input-model-select-button"
        .menuId=${this._menuId}
        data-l10n-id=${n?t:this.#s(e.index)}
        label=${n||t}
        .title=${e.index===`0`?this.customModelName:``}
        .iconSrc=${this.#e}
        iconPosition="end"
      >
      </moz-button>
      ${o}
    `}},customElements.define(`input-model-select`,C)})))()}var T,E,D,O,k,A;function j(){return(j=e((()=>{n(),u(),w(),T={1:{model:`gemini-3.1-flash-lite`,ownerName:`Google`,labelId:`fast`,shortName:`Gemini 3.1 Flash Lite`,brandName:`Gemini`},2:{model:`qwen3-235b-a22b-instruct-2507-maas`,ownerName:`Alibaba`,labelId:`allpurpose`,shortName:`Qwen 3 235B`,brandName:`Qwen`},3:{model:`mistral-small-2603`,ownerName:`Mistral`,labelId:`personal`,shortName:`Mistral Small 4`,brandName:`Mistral`}},E={0:{model:`custom-model`,ownerName:``,labelId:`custom`},...T},D={title:`Domain-specific UI Widgets/AI Window/Input Model Select`,component:`input-model-select`,parameters:{fluent:`
aiwindow-input-model-select-button-label-fast = Fast
aiwindow-input-model-select-button-label-allpurpose = Flexible
aiwindow-input-model-select-button-label-personal = Personal
aiwindow-input-model-select-button-label-custom = Custom
aiwindow-input-model-select-settings-link = Model settings
aiwindow-input-model-select-default-badge =
    .label = Default
    .title = The selected default model
    `},argTypes:{selectedModelId:{options:Object.values(E).map(e=>e.model),control:{type:`select`}}}},O=({availableModels:e,selectedModelId:t})=>r`
  <input-model-select
    .availableModels=${e}
    .selectedModelId=${t}
  ></input-model-select>
`,k=O.bind({}),k.args={availableModels:T,selectedModelId:`gemini-3.1-flash-lite`},A=O.bind({}),A.args={availableModels:E,selectedModelId:`custom-model`}})))()}j();export{k as Default,A as WithCustomModel,D as default};