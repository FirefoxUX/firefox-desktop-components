import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,u as n}from"./lit.all-Co4HOUmF.js";import{c as r,o as i}from"./iframe-ChCqHcnv.js";import{n as a}from"./moz-button-1qo60Dlf.js";var o;function s(){return(s=e((()=>{o=new URL(`aitab-page-actions-D19230IB.css`,import.meta.url).href+``})))()}var c,l,u;function d(){return(d=e((()=>{s(),t(),r(),a(),c=`aitab-page-actions:refresh`,l=`aitab-page-actions:delete`,u=class extends i{static properties={refreshing:{type:Boolean,reflect:!0}};constructor(){super(),this.refreshing=!1}get#e(){return this.renderRoot.querySelector(`dialog`)}#t(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}#n(){this.refreshing||this.#t(c)}#r(){this.#e?.showModal()}#i(){this.#e?.close(),this.#t(l)}#a(){return n`
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
    `}render(){return n`
      <link
        rel="stylesheet"
        href="${o}"
      />
      <div class="aitab-page-actions">
        <moz-button
          class="aitab-action-refresh"
          size="default"
          iconSrc="chrome://global/skin/icons/reload.svg"
          ?disabled=${this.refreshing}
          data-l10n-id=${this.refreshing?`aitab-page-refreshing-sources`:`aitab-page-refresh-sources`}
          @click=${()=>this.#n()}
        ></moz-button>
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
    `}},customElements.define(`aitab-page-actions`,u)})))()}export{d as t};