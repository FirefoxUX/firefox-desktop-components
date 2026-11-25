import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{_ as t,d as n,f as r,u as i,y as a}from"./lit.all-Co4HOUmF.js";import{c as o,o as s}from"./iframe-DbtNkzFn.js";import{n as c}from"./moz-button-DV-w2-fz.js";import{n as l,t as u}from"./smartwindow-panel-list-cojyAM0i.js";import{t as d}from"./panel-list-BjRbkL-2.js";var f;function p(){return(p=e((()=>{f=``+new URL(`smartwindow-option-select-DnlMVRyW.css`,import.meta.url).href})))()}var m;function h(){return(h=e((()=>{u(),p(),r(),o(),c(),d(),m=class extends s{static shadowRootOptions={...s.shadowRootOptions,delegatesFocus:!0};static properties={options:{type:Array},value:{type:String,reflect:!0},panelOpen:{type:Boolean,state:!0}};static queries={button:`moz-button`,panelList:`panel-list`};constructor(){super(),this.options=[],this.value=``,this.panelOpen=!1,this._menuId=`option-select-menu-${crypto.randomUUID()}`}get#e(){return this.options.find(e=>e.value===this.value)}get#t(){return this.panelOpen?`chrome://global/skin/icons/arrow-up-12.svg`:`chrome://global/skin/icons/arrow-down-12.svg`}get#n(){let e=this.#e;return e?e.buttonL10nId?{id:e.buttonL10nId,args:e.buttonL10nArgs}:{id:e.l10nId,args:e.l10nArgs}:null}#r=()=>{this.panelOpen=!0};#i=()=>{this.panelOpen=!1};#a(e){this.panelList?.hide(),e!==this.value&&(this.value=e,this.dispatchEvent(new CustomEvent(`smartwindow-option-select:change`,{detail:{value:e},bubbles:!0,composed:!0})))}#o(e,t){return`${this._menuId}-${e}-${t}`}#s(e,t){let n=[this.#o(t,`label`)];return e.secondaryLabelL10nId&&n.push(this.#o(t,`secondary`)),n.join(` `)}#c(e){return e?JSON.stringify(e):t}render(){let e=this.#n;return i`
      <link
        rel="stylesheet"
        href="${l}"
      />
      <link
        rel="stylesheet"
        href="${f}"
      />
      <moz-button
        type="default"
        class="option-select-button"
        .menuId=${this._menuId}
        .label=${e?.id?``:this.#e?.buttonLabel??this.#e?.label??``}
        data-l10n-id=${n(e?.id)}
        data-l10n-args=${this.#c(e?.args)}
        .iconSrc=${this.#t}
        iconPosition="end"
      ></moz-button>
      <panel-list
        id=${this._menuId}
        @shown=${this.#r}
        @hidden=${this.#i}
      >
        ${a(this.options,e=>e.value,(e,r)=>i`
            <button
              class="option-item"
              role="menuitemradio"
              aria-checked=${e.value===this.value}
              aria-labelledby=${this.#s(e,r)}
              aria-describedby=${n(e.descriptionL10nId?this.#o(r,`description`):void 0)}
              data-value=${e.value}
              @click=${()=>this.#a(e.value)}
            >
              ${e.iconSrc?i`<span class="option-item-avatar"
                    ><img class="option-item-icon" src=${e.iconSrc} alt=""
                  /></span>`:t}
              <span class="option-item-content">
                <span class="option-item-header">
                  <span
                    id=${this.#o(r,`label`)}
                    class="option-item-label"
                    data-l10n-id=${n(e.l10nId)}
                    data-l10n-args=${this.#c(e.l10nArgs)}
                    >${e.label??t}</span
                  >
                  ${e.secondaryLabelL10nId?i`<span
                        id=${this.#o(r,`secondary`)}
                        class="option-item-badge"
                        data-l10n-id=${e.secondaryLabelL10nId}
                        data-l10n-args=${this.#c(e.secondaryLabelL10nArgs)}
                      ></span>`:t}
                </span>
                ${e.descriptionL10nId?i`<span
                      id=${this.#o(r,`description`)}
                      class="option-item-description"
                      data-l10n-id=${e.descriptionL10nId}
                      data-l10n-args=${this.#c(e.descriptionL10nArgs)}
                    ></span>`:t}
              </span>
              ${e.value===this.value?i`<img
                    class="option-item-check"
                    src="chrome://global/skin/icons/check.svg"
                    alt=""
                  />`:t}
            </button>
          `)}
      </panel-list>
    `}},customElements.define(`smartwindow-option-select`,m)})))()}export{h as t};