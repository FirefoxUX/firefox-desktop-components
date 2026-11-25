import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,u as n}from"./lit.all-Co4HOUmF.js";import{c as r,o as i}from"./iframe-DbtNkzFn.js";var a;function o(){return(o=e((()=>{a=``+new URL(`turn-off-scheduled-backups-DoAu1ZaM.css`,import.meta.url).href})))()}var s;function c(){return(c=e((()=>{o(),t(),r(),s=class extends i{static properties={source:{type:String,reflect:!0,attribute:`source`}};static get queries(){return{cancelButtonEl:`#backup-turn-off-scheduled-cancel-button`,confirmButtonEl:`#backup-turn-off-scheduled-confirm-button`}}close(){this.dispatchEvent(new CustomEvent(`dialogCancel`,{bubbles:!0,composed:!0}))}handleConfirm(){this.dispatchEvent(new CustomEvent(`BackupUI:DisableScheduledBackups`,{bubbles:!0,detail:{source:this.source}}))}contentTemplate(){return n`
      <div
        id="backup-turn-off-scheduled-wrapper"
        aria-labelledby="backup-turn-off-scheduled-header"
        aria-describedby="backup-turn-off-scheduled-description"
      >
        <h2
          id="backup-turn-off-scheduled-header"
          class="heading-medium"
          data-l10n-id="turn-off-scheduled-backups-header"
        ></h2>
        <main id="backup-turn-off-scheduled-content">
          <div id="backup-turn-off-scheduled-description">
            <span
              id="backup-turn-off-scheduled-description-span"
              data-l10n-id="turn-off-scheduled-backups-description"
            ></span>
            <a
              id="backup-turn-off-scheduled-learn-more-link"
              is="moz-support-link"
              support-page="firefox-backup"
              data-l10n-id="turn-off-scheduled-backups-support-link"
              utm-content="turn-off-backup"
            ></a>
          </div>
        </main>

        <moz-button-group id="backup-turn-off-scheduled-button-group">
          <moz-button
            id="backup-turn-off-scheduled-cancel-button"
            @click=${this.close}
            data-l10n-id="turn-off-scheduled-backups-cancel-button"
          ></moz-button>
          <moz-button
            id="backup-turn-off-scheduled-confirm-button"
            @click=${this.handleConfirm}
            type="primary"
            data-l10n-id="turn-off-scheduled-backups-confirm-button"
          ></moz-button>
        </moz-button-group>
      </div>
    `}render(){return n`
      <link
        rel="stylesheet"
        href="${a}"
      />
      ${this.contentTemplate()}
    `}},customElements.define(`turn-off-scheduled-backups`,s)})))()}export{c as t};