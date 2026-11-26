import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,f as n,u as r}from"./lit.all-Co4HOUmF.js";import{c as i,o as a}from"./iframe-DUPCaqkc.js";import{t as o}from"./moz-message-bar-CtvZkp64.js";import{n as s,t as c}from"./backup-constants-BF3H6Sm8.js";import{t as l}from"./password-validation-inputs-OjKeBoUp.js";var u;function d(){return(d=e((()=>{u=``+new URL(`enable-backup-encryption-DER-AZPW.css`,import.meta.url).href})))()}function f(e){return h[e]??h[c.UNKNOWN]}var p,m,h,g;function _(){return(_=e((()=>{d(),n(),i(),o(),l(),s(),p=Object.freeze({SET_PASSWORD:`set-password`,CHANGE_PASSWORD:`change-password`}),m=new Map([[p.SET_PASSWORD,`enable-backup-encryption-header`],[p.CHANGE_PASSWORD,`change-backup-encryption-header`]]),h=Object.freeze({[c.INVALID_PASSWORD]:`backup-error-password-requirements`,[c.UNKNOWN]:`backup-error-retry`}),g=class extends a{static properties={_inputPassValue:{type:String,state:!0},_passwordsMatch:{type:Boolean,state:!0},supportBaseLink:{type:String},type:{type:String,reflect:!0},enableEncryptionErrorCode:{type:Number}};static get queries(){return{cancelButtonEl:`#backup-enable-encryption-cancel-button`,confirmButtonEl:`#backup-enable-encryption-confirm-button`,contentEl:`#backup-enable-encryption-content`,textHeaderEl:`#backup-enable-encryption-header`,textDescriptionEl:`#backup-enable-encryption-description`,passwordInputsEl:`#backup-enable-encryption-password-inputs`,errorEl:`#enable-backup-encryption-error`}}constructor(){super(),this.supportBaseLink=``,this.type=p.SET_PASSWORD,this._inputPassValue=``,this._passwordsMatch=!1,this.enableEncryptionErrorCode=0}connectedCallback(){super.connectedCallback(),this.addEventListener(`ValidPasswordsDetected`,this),this.addEventListener(`InvalidPasswordsDetected`,this)}handleEvent(e){if(e.type==`ValidPasswordsDetected`){let{password:t}=e.detail;this._passwordsMatch=!0,this._inputPassValue=t}else e.type==`InvalidPasswordsDetected`&&(this._passwordsMatch=!1,this._inputPassValue=``)}close(){this.dispatchEvent(new CustomEvent(`dialogCancel`,{bubbles:!0,composed:!0}))}reset(){this._inputPassValue=``,this._passwordsMatch=!1,this.passwordInputsEl.reset(),this.enableEncryptionErrorCode=0}handleConfirm(){this.dispatchEvent(new CustomEvent(`BackupUI:EnableEncryption`,{bubbles:!0,detail:{password:this._inputPassValue}}))}descriptionTemplate(){return r`
      <div id="backup-enable-encryption-description">
        <span
          id="backup-enable-encryption-description-span"
          data-l10n-id="settings-sensitive-data-encryption-description"
        >
        </span>
        <a
          id="backup-enable-encryption-learn-more-link"
          is="moz-support-link"
          support-page="firefox-backup"
          data-l10n-id="enable-backup-encryption-support-link"
          utm-content="add-password"
        ></a>
      </div>
    `}buttonGroupTemplate(){return r`
      <moz-button-group id="backup-enable-encryption-button-group">
        <moz-button
          id="backup-enable-encryption-cancel-button"
          @click=${this.close}
          data-l10n-id="enable-backup-encryption-cancel-button"
        ></moz-button>
        <moz-button
          id="backup-enable-encryption-confirm-button"
          @click=${this.handleConfirm}
          type="primary"
          data-l10n-id="enable-backup-encryption-confirm-button"
          ?disabled=${!this._passwordsMatch}
        ></moz-button>
      </moz-button-group>
    `}errorTemplate(){let e=f(this.enableEncryptionErrorCode);return r`
      <moz-message-bar
        id="enable-backup-encryption-error"
        type="error"
        .messageL10nId=${e}
      ></moz-message-bar>
    `}contentTemplate(){return r`
      <div
        id="backup-enable-encryption-wrapper"
        aria-labelledby="backup-enable-encryption-header"
        aria-describedby="backup-enable-encryption-description"
      >
        <h2
          id="backup-enable-encryption-header"
          class="heading-medium"
          data-l10n-id=${t(m.get(this.type))}
        ></h2>
        <div id="backup-enable-encryption-content">
          ${this.type===p.SET_PASSWORD?this.descriptionTemplate():null}
          <password-validation-inputs
            id="backup-enable-encryption-password-inputs"
            .supportBaseLink=${this.supportBaseLink}
          >
          </password-validation-inputs>

          ${this.enableEncryptionErrorCode?this.errorTemplate():null}
        </div>
        ${this.buttonGroupTemplate()}
      </div>
    `}render(){return r`
      <link
        rel="stylesheet"
        href="${u}"
      />
      ${this.contentTemplate()}
    `}},customElements.define(`enable-backup-encryption`,g)})))()}export{_ as t};