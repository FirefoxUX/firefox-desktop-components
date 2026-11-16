import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,u as n}from"./lit.all-BYVOqvrj.js";import{c as r,o as i}from"./iframe-B6GfsneT.js";import{t as a}from"./moz-message-bar-9HI996a8.js";var o;function s(){return(s=e((()=>{o=new URL(`disable-backup-encryption-CTIbdb86.css`,import.meta.url).href+``})))()}var c,l;function u(){return(u=e((()=>{s(),t(),r(),a(),c=`backup-error-retry`,l=class extends i{static properties={disableEncryptionErrorCode:{type:Number}};static get queries(){return{cancelButtonEl:`#backup-disable-encryption-cancel-button`,confirmButtonEl:`#backup-disable-encryption-confirm-button`,errorEl:`#disable-backup-encryption-error`}}constructor(){super(),this.disableEncryptionErrorCode=0}close(){this.dispatchEvent(new CustomEvent(`dialogCancel`,{bubbles:!0,composed:!0})),this.reset()}reset(){this.disableEncryptionErrorCode=0}handleConfirm(){this.dispatchEvent(new CustomEvent(`BackupUI:DisableEncryption`,{bubbles:!0}))}errorTemplate(){return n`
      <moz-message-bar
        id="disable-backup-encryption-error"
        type="error"
        .messageL10nId=${c}
      ></moz-message-bar>
    `}contentTemplate(){return n`
      <div
        id="backup-disable-encryption-wrapper"
        aria-labelledby="backup-disable-encryption-header"
        aria-describedby="backup-disable-encryption-description"
      >
        <h2
          id="backup-disable-encryption-header"
          class="heading-medium"
          data-l10n-id="disable-backup-encryption-header"
        ></h2>
        <main id="backup-disable-encryption-content">
          <div id="backup-disable-encryption-description">
            <span
              id="backup-disable-encryption-description-span"
              data-l10n-id="disable-backup-encryption-description2"
            >
            </span>
            <a
              id="backup-disable-encryption-learn-more-link"
              is="moz-support-link"
              support-page="firefox-backup"
              data-l10n-id="disable-backup-encryption-support-link"
              utm-content="remove-password"
            ></a>
          </div>
          ${this.disableEncryptionErrorCode?this.errorTemplate():null}
        </main>

        <moz-button-group id="backup-disable-encryption-button-group">
          <moz-button
            id="backup-disable-encryption-cancel-button"
            @click=${this.close}
            data-l10n-id="disable-backup-encryption-cancel-button"
          ></moz-button>
          <moz-button
            id="backup-disable-encryption-confirm-button"
            @click=${this.handleConfirm}
            type="primary"
            data-l10n-id="disable-backup-encryption-confirm-button"
          ></moz-button>
        </moz-button-group>
      </div>
    `}render(){return n`
      <link
        rel="stylesheet"
        href="${o}"
      />
      ${this.contentTemplate()}
    `}},customElements.define(`disable-backup-encryption`,l)})))()}export{u as t};