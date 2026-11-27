import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{_ as t,f as n,u as r}from"./lit.all-Co4HOUmF.js";import{c as i,o as a}from"./iframe-17211AdQ.js";import{n as o}from"./moz-button-MQZwUQZw.js";import{n as s,t as c}from"./ai-action-confirmation-G0KWqKV_.js";var l;function u(){return(u=e((()=>{l=``+new URL(`aitab-tool-ui--1Ss_pps.css`,import.meta.url).href})))()}var d,f,p,m;function h(){return(h=e((()=>{s(),u(),n(),i(),o(),d=`choose`,f=`complete`,p=[d,f],m=class extends a{static properties={state:{type:String},title:{type:String},viewerURL:{type:String},actionsStateOpen:{type:Boolean}};constructor(){super(),this.state=d,this.title=``,this.viewerURL=``,this.actionsStateOpen=!0}#e(e){e.preventDefault(),this.#r(`new`)}#t(e){(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this.#n())}#n(){this.actionsStateOpen=!this.actionsStateOpen}#r(e){this.dispatchEvent(new CustomEvent(`aitab-open-request`,{bubbles:!0,composed:!0,detail:{openTarget:e}}))}#i(){let e=this.actionsStateOpen?`chrome://global/skin/icons/arrow-up-12.svg`:`chrome://global/skin/icons/arrow-down-12.svg`;return r`<div class="card">
      <div
        class="card-title"
        role="button"
        tabindex="0"
        aria-expanded=${this.actionsStateOpen?`true`:`false`}
        aria-controls="aitab-card-actions"
        @click=${()=>this.#n()}
        @keydown=${e=>this.#t(e)}
      >
        <img src=${e} alt="" />
        <span data-l10n-id="smartwindow-aitab-response-card-title"></span>
      </div>

      ${this.actionsStateOpen?this.#o():t}
      ${this.actionsStateOpen&&this.state===`choose`?this.#a():t}
    </div>`}#a(){return r`
      <div id="aitab-card-actions" class="actions">
        <moz-button
          type="default"
          data-l10n-id="smartwindow-aitab-open-current"
          data-l10n-attrs="label"
          @click=${()=>this.#r(`current`)}
        ></moz-button>
        <moz-button
          type="primary"
          data-l10n-id="smartwindow-aitab-open-new"
          data-l10n-attrs="label"
          @click=${()=>this.#r(`new`)}
        ></moz-button>
      </div>
    `}#o(){let e=r`
      <img
        src="chrome://browser/skin/smart-window-mono-32.svg"
        alt=""
        width="16"
        height="16"
      />
      ${this.title}
    `;return this.viewerURL?r`<a
          href=${this.viewerURL}
          class="page-title"
          @click=${this.#e}
          >${e}</a
        >`:r`<p class="page-title">${e}</p>`}render(){return r`
      <link
        rel="stylesheet"
        href="${c}"
      />
      <link
        rel="stylesheet"
        href="${l}"
      />

      ${this.#i()}
    `}},customElements.define(`aitab-tool-ui`,m)})))()}export{h as i,d as n,f as r,p as t};