import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,f as n,g as r,u as i,v as a}from"./lit.all-BYVOqvrj.js";import{c as o,o as s}from"./iframe-DZPZZ1s7.js";import{n as c}from"./moz-button-DFoGCGZp.js";import{n as l,t as u}from"./_firefox-storybook_moz-css-url_bb50035b5847cd944ad97b390c23d2005d8a4ab5bfb50462aaff3f9f9f6f85ed-CmEcXjEz.js";import{t as d}from"./panel-list-C5rvkNXr.js";var f;function p(){return(p=e((()=>{f=new URL(`smartwindow-option-select-BRhCFo74.css`,import.meta.url).href+``})))()}var m;function h(){return(h=e((()=>{p(),l(),n(),o(),c(),d(),m=class extends s{static shadowRootOptions={...s.shadowRootOptions,delegatesFocus:!0};static properties={options:{type:Array},value:{type:String,reflect:!0},panelOpen:{type:Boolean,state:!0}};static queries={button:`moz-button`,panelList:`panel-list`};constructor(){super(),this.options=[],this.value=``,this.panelOpen=!1,this._menuId=`option-select-menu-${crypto.randomUUID()}`}get#e(){return this.options.find(e=>e.value===this.value)}get#t(){return this.panelOpen?`chrome://global/skin/icons/arrow-up-12.svg`:`chrome://global/skin/icons/arrow-down-12.svg`}get#n(){let e=this.#e;return e?e.buttonL10nId?{id:e.buttonL10nId,args:e.buttonL10nArgs}:{id:e.l10nId,args:e.l10nArgs}:null}#r=()=>{this.panelOpen=!0};#i=()=>{this.panelOpen=!1};#a(e){this.panelList?.hide(),e!==this.value&&(this.value=e,this.dispatchEvent(new CustomEvent(`smartwindow-option-select:change`,{detail:{value:e},bubbles:!0,composed:!0})))}#o(e,t){return`${this._menuId}-${e}-${t}`}#s(e,t){let n=[this.#o(t,`label`)];return e.secondaryLabelL10nId&&n.push(this.#o(t,`secondary`)),n.join(` `)}#c(e){return e?JSON.stringify(e):r}render(){let e=this.#n;return i`
      <link
        rel="stylesheet"
        href="${u}"
      />
      <link
        rel="stylesheet"
        href="${f}"
      />
      <moz-button
        type="default"
        class="option-select-button"
        .menuId=${this._menuId}
        .label=${this.#e?.buttonLabel??this.#e?.label??``}
        data-l10n-id=${t(e?.id)}
        data-l10n-args=${this.#c(e?.args)}
        .iconSrc=${this.#t}
        iconPosition="end"
      ></moz-button>
      <panel-list
        id=${this._menuId}
        @shown=${this.#r}
        @hidden=${this.#i}
      >
        ${a(this.options,e=>e.value,(e,n)=>i`
            <button
              class="option-item"
              role="menuitemradio"
              aria-checked=${e.value===this.value}
              aria-labelledby=${this.#s(e,n)}
              aria-describedby=${t(e.descriptionL10nId?this.#o(n,`description`):void 0)}
              data-value=${e.value}
              @click=${()=>this.#a(e.value)}
            >
              ${e.iconSrc?i`<span class="option-item-avatar"
                    ><img class="option-item-icon" src=${e.iconSrc} alt=""
                  /></span>`:r}
              <span class="option-item-content">
                <span class="option-item-header">
                  <span
                    id=${this.#o(n,`label`)}
                    class="option-item-label"
                    data-l10n-id=${t(e.l10nId)}
                    data-l10n-args=${this.#c(e.l10nArgs)}
                    >${e.label??r}</span
                  >
                  ${e.secondaryLabelL10nId?i`<span
                        id=${this.#o(n,`secondary`)}
                        class="option-item-badge"
                        data-l10n-id=${e.secondaryLabelL10nId}
                        data-l10n-args=${this.#c(e.secondaryLabelL10nArgs)}
                      ></span>`:r}
                </span>
                ${e.descriptionL10nId?i`<span
                      id=${this.#o(n,`description`)}
                      class="option-item-description"
                      data-l10n-id=${e.descriptionL10nId}
                      data-l10n-args=${this.#c(e.descriptionL10nArgs)}
                    ></span>`:r}
              </span>
              ${e.value===this.value?i`<img
                    class="option-item-check"
                    src="chrome://global/skin/icons/check.svg"
                    alt=""
                  />`:r}
            </button>
          `)}
      </panel-list>
    `}},customElements.define(`smartwindow-option-select`,m)})))()}export{h as t};