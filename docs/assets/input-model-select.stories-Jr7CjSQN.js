import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,g as n,u as r,v as i}from"./lit.all-BYVOqvrj.js";import{c as a,o}from"./iframe-DZPZZ1s7.js";import{n as s}from"./moz-button-DFoGCGZp.js";import{n as c,t as l}from"./_firefox-storybook_moz-css-url_bb50035b5847cd944ad97b390c23d2005d8a4ab5bfb50462aaff3f9f9f6f85ed-CmEcXjEz.js";import{t as u}from"./panel-list-C5rvkNXr.js";import{n as d,t as f}from"./ModelIcons-DqL9m-UH.js";import{t as p}from"./moz-badge-D3GSYVOJ.js";var m;function h(){return(h=e((()=>{m=new URL(`input-model-select-DdXM9glt.css`,import.meta.url).href+``})))()}var g,_,v,y,b;function x(){return(x=e((()=>{h(),c(),t(),a(),d(),s(),u(),p(),{XPCOMUtils:g}=ChromeUtils.importESModule(`resource://gre/modules/XPCOMUtils.sys.mjs`),_=`browser.smartwindow.model`,{getModelDisplayOrder:v}=window.IS_STORYBOOK?{getModelDisplayOrder:()=>[`3`,`1`,`2`]}:ChromeUtils.importESModule(`moz-src:///browser/components/aiwindow/models/Utils.sys.mjs`),y={0:`aiwindow-input-model-select-button-label-custom`,1:`aiwindow-input-model-select-button-label-fast`,2:`aiwindow-input-model-select-button-label-allpurpose`,3:`aiwindow-input-model-select-button-label-personal`},b=class extends o{static shadowRootOptions={...o.shadowRootOptions,delegatesFocus:!0};static properties={selectedModelId:{type:String,reflect:!0},defaultModelChoiceId:{type:String},availableModels:{type:Object},panelOpen:{type:Boolean,state:!0},sidebarMode:{type:Boolean,reflect:!0}};constructor(){super(),this.selectedModelId=``,this.defaultModelChoiceId=null,this.availableModels=null,this.panelOpen=!1,this.sidebarMode=!1,this._menuId=`models-menu-${crypto.randomUUID()}`,window.IS_STORYBOOK?this.customModelName=``:(g.defineLazyPreferenceGetter(this,`customModelName`,_,``,()=>this.requestUpdate()),this.customModelName)}get#e(){return this.panelOpen?`chrome://global/skin/icons/arrow-up-12.svg`:`chrome://global/skin/icons/arrow-down-12.svg`}#t=()=>{this.panelOpen=!0};#n=()=>{this.panelOpen=!1};get#r(){if(!this.availableModels)return[];let e=v(),t=t=>{if(t===`0`)return-1;let n=e.indexOf(t);return n===-1?e.length:n};return Object.entries(this.availableModels).map(([e,t])=>({...t,index:e})).sort((e,n)=>t(e.index)-t(n.index))}get#i(){return this.#r.find(e=>e.model===this.selectedModelId)}#a(e){let t=this.#r.find(t=>t.model===e);t?e!==this.selectedModelId&&(this.selectedModelId=e,this.dispatchEvent(new CustomEvent(`aiwindow-input-model-select:model-change`,{detail:{modelId:e,modelChoiceId:t.index},bubbles:!0,composed:!0}))):console.error(`Could not find model ID: [${e}]`)}#o(){this.dispatchEvent(new CustomEvent(`aiwindow-input-model-select:open-settings`,{bubbles:!0,composed:!0}))}#s(e){return y[e]}#c(e){return e.index===`0`?this.customModelName:e.shortName}#l(e){return e.index===`0`?this.#u():e.brandName}#u(){return(this.customModelName.split(/[\\/]/).findLast(Boolean)?.replace(/\.gguf$/i,``)??``).split(/[-_:]/).find(Boolean)??``}render(){let e=this.#i;if(!this.#r.length||!e)return r``;let t=this.#l(e),a=r`<panel-list
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
                ${e.index===this.defaultModelChoiceId?r`<moz-badge
                      type="new"
                      data-l10n-id="aiwindow-input-model-select-default-badge"
                    ></moz-badge>`:``}
              </span>
              <span
                class="model-item-details"
                data-l10n-id=${this.#s(e.index)}
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
        href="${l}"
      />
      <link
        rel="stylesheet"
        href="${m}"
      />
      <moz-button
        type="default"
        class="input-model-select-button"
        .menuId=${this._menuId}
        data-l10n-id=${t?n:this.#s(e.index)}
        label=${t||n}
        .title=${e.index===`0`?this.customModelName:``}
        .iconSrc=${this.#e}
        iconPosition="end"
      >
      </moz-button>
      ${a}
    `}},customElements.define(`input-model-select`,b)})))()}var S,C,w,T,E,D;function O(){return(O=e((()=>{t(),u(),x(),S={1:{model:`gemini-3.1-flash-lite`,ownerName:`Google`,labelId:`fast`,shortName:`Gemini 3.1 Flash Lite`,brandName:`Gemini`},2:{model:`qwen3-235b-a22b-instruct-2507-maas`,ownerName:`Alibaba`,labelId:`allpurpose`,shortName:`Qwen 3 235B`,brandName:`Qwen`},3:{model:`mistral-small-2603`,ownerName:`Mistral`,labelId:`personal`,shortName:`Mistral Small 4`,brandName:`Mistral`}},C={0:{model:`custom-model`,ownerName:``,labelId:`custom`},...S},w={title:`Domain-specific UI Widgets/AI Window/Input Model Select`,component:`input-model-select`,parameters:{fluent:`
aiwindow-input-model-select-button-label-fast = Fast
aiwindow-input-model-select-button-label-allpurpose = Flexible
aiwindow-input-model-select-button-label-personal = Personal
aiwindow-input-model-select-button-label-custom = Custom
aiwindow-input-model-select-settings-link = Model settings
aiwindow-input-model-select-default-badge =
    .label = Default
    .title = The selected default model
    `},argTypes:{selectedModelId:{options:Object.values(C).map(e=>e.model),control:{type:`select`}}}},T=({availableModels:e,selectedModelId:t})=>r`
  <input-model-select
    .availableModels=${e}
    .selectedModelId=${t}
  ></input-model-select>
`,E=T.bind({}),E.args={availableModels:S,selectedModelId:`gemini-3.1-flash-lite`},D=T.bind({}),D.args={availableModels:C,selectedModelId:`custom-model`}})))()}O();export{E as Default,D as WithCustomModel,w as default};