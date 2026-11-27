import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{_ as t,f as n,u as r}from"./lit.all-Co4HOUmF.js";import{c as i,o as a}from"./iframe-17211AdQ.js";import{n as o}from"./moz-button-MQZwUQZw.js";var s;function c(){return(c=e((()=>{s=``+new URL(`aitab-page-actions-L12ivj4g.css`,import.meta.url).href})))()}var l,u,d;function f(){return(f=e((()=>{c(),n(),i(),o(),l=`aitab-page-actions:refresh`,u=`aitab-page-actions:delete`,d=class extends a{static properties={refreshing:{type:Boolean,reflect:!0},editable:{type:Boolean}};constructor(){super(),this.refreshing=!1,this.editable=!0}get#e(){return this.renderRoot.querySelector(`dialog`)}#t(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}#n(){this.refreshing||this.#t(l)}#r(){this.#e?.showModal()}#i(){this.#e?.close(),this.#t(u)}#a(){return r`
      <dialog class="aitab-delete-dialog">
        <div class="aitab-delete-dialog-content">
          <h2 data-l10n-id="aitab-page-delete-dialog-title"></h2>
          <p data-l10n-id="aitab-page-delete-dialog-message"></p>
          <div class="aitab-delete-dialog-buttons">
            <moz-button
              class="aitab-delete-confirm"
              type="destructive"
              data-l10n-id="aitab-page-delete-dialog-confirm"
              @click=${()=>this.#i()}
            ></moz-button>
            <moz-button
              class="aitab-delete-cancel"
              autofocus
              data-l10n-id="aitab-page-delete-dialog-cancel"
              @click=${()=>this.#e?.close()}
            ></moz-button>
          </div>
        </div>
      </dialog>
    `}#o(){return this.editable?r`
      <moz-button
        class="aitab-action-refresh"
        size="default"
        iconSrc="chrome://global/skin/icons/reload.svg"
        ?disabled=${this.refreshing}
        data-l10n-id=${this.refreshing?`aitab-page-refreshing-sources`:`aitab-page-refresh-sources`}
        @click=${()=>this.#n()}
      ></moz-button>
    `:t}render(){return r`
      <link
        rel="stylesheet"
        href="${s}"
      />
      <div class="aitab-page-actions">
        ${this.#o()}
        <moz-button
          class="aitab-action-delete"
          type="icon"
          size="default"
          iconSrc="chrome://global/skin/icons/delete.svg"
          data-l10n-id="aitab-page-delete"
          @click=${()=>this.#r()}
        ></moz-button>
      </div>
      ${this.#a()}
    `}},customElements.define(`aitab-page-actions`,d)})))()}export{f as t};