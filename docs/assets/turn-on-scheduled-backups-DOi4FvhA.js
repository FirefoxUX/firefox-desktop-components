import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,g as n,u as r}from"./lit.all-BYVOqvrj.js";import{c as i,o as a}from"./iframe-B6GfsneT.js";import{n as o,t as s}from"./backup-constants-BF3H6Sm8.js";import{t as c}from"./moz-message-bar-9HI996a8.js";import{t as l}from"./password-validation-inputs-Dryed7lc.js";var u;function d(){return(d=e((()=>{u=new URL(`turn-on-scheduled-backups-CHyNB7_w.css`,import.meta.url).href+``})))()}function f(e){return p[e]??p[s.UNKNOWN]}var p,m;function h(){return(h=e((()=>{d(),t(),i(),c(),l(),o(),p=Object.freeze({[s.FILE_SYSTEM_ERROR]:`turn-on-scheduled-backups-error-file-system`,[s.DEFAULT_DIR_ACCESS_DENIED]:`turn-on-scheduled-backups-error-default-dir-denied`,[s.INVALID_PASSWORD]:`backup-error-password-requirements`,[s.UNKNOWN]:`backup-error-retry`}),m=class extends a{#e=`chrome://global/skin/icons/page-portrait.svg`;static properties={backupServiceState:{type:Object},defaultIconURL:{type:String,reflect:!0},defaultLabel:{type:String,reflect:!0},defaultPath:{type:String,reflect:!0},supportBaseLink:{type:String},embeddedFxBackupOptIn:{type:Boolean,reflect:!0,attribute:`embedded-fx-backup-opt-in`},hideFilePathChooser:{type:Boolean,reflect:!0,attribute:`hide-file-path-chooser`},hideSecondaryButton:{type:Boolean,reflect:!0,attribute:`hide-secondary-button`},backupIsEncrypted:{type:Boolean,reflect:!0,attribute:`backup-is-encrypted`},filePathLabelL10nId:{type:String,reflect:!0,attribute:`file-path-label-l10n-id`},turnOnBackupHeaderL10nId:{type:String,reflect:!0,attribute:`turn-on-backup-header-l10n-id`},createPasswordLabelL10nId:{type:String,reflect:!0,attribute:`create-password-label-l10n-id`},turnOnBackupConfirmBtnL10nId:{type:String,reflect:!0,attribute:`turn-on-backup-confirm-btn-l10n-id`},turnOnBackupCancelBtnL10nId:{type:String,reflect:!0,attribute:`turn-on-backup-cancel-btn-l10n-id`},source:{type:String,reflect:!0,attribute:`source`},_newIconURL:{type:String,state:!0},_newLabel:{type:String,state:!0},_newPath:{type:String,state:!0},_showPasswordOptions:{type:Boolean,reflect:!0,state:!0},_passwordsMatch:{type:Boolean,state:!0},_inputPassValue:{type:String,state:!0},enableBackupErrorCode:{type:Number}};static get queries(){return{cancelButtonEl:`#backup-turn-on-scheduled-cancel-button`,confirmButtonEl:`#backup-turn-on-scheduled-confirm-button`,filePathButtonEl:`#backup-location-filepicker-button`,filePathInputCustomEl:`#backup-location-filepicker-input-custom`,filePathInputDefaultEl:`#backup-location-filepicker-input-default`,passwordOptionsCheckboxEl:`#sensitive-data-checkbox-input`,passwordOptionsExpandedEl:`#passwords`,errorEl:`#enable-backup-encryption-error`}}constructor(){super(),this.backupServiceState={},this.defaultIconURL=``,this.defaultLabel=``,this.defaultPath=``,this._newIconURL=``,this._newLabel=``,this._newPath=``,this._showPasswordOptions=!1,this._passwordsMatch=!1,this.enableBackupErrorCode=0,this.disableSubmit=!1,this._pendingConfirmDetail=null}get showDefaultFilePath(){return!this._newPath&&!this.backupServiceState?.embeddedComponentPersistentData?.path}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new CustomEvent(`BackupUI:InitWidget`,{bubbles:!0})),this.addEventListener(`BackupUI:SelectNewFilepickerPath`,this),this.addEventListener(`BackupUI:DefaultDirProbeResult`,this),this.addEventListener(`ValidPasswordsDetected`,this),this.addEventListener(`InvalidPasswordsDetected`,this),this.addEventListener(`keydown`,this)}handleEvent(e){if(e.type==`BackupUI:SelectNewFilepickerPath`){let{path:t,filename:n,iconURL:r}=e.detail;this._newPath=t,this._newLabel=n,this._newIconURL=r,this.enableBackupErrorCode==s.DEFAULT_DIR_ACCESS_DENIED&&(this.enableBackupErrorCode=s.NONE),this.embeddedFxBackupOptIn&&this.dispatchEvent(new CustomEvent(`BackupUI:SetEmbeddedComponentPersistentData`,{bubbles:!0,detail:{path:t,label:n,iconURL:r}}))}else if(e.type==`BackupUI:DefaultDirProbeResult`){let{readAccessGranted:t}=e.detail;t?this.dispatchEvent(new CustomEvent(`BackupUI:EnableScheduledBackups`,{bubbles:!0,detail:this._pendingConfirmDetail})):(this.defaultLabel=``,this.defaultPath=``,this.defaultIconURL=``,this.enableBackupErrorCode=s.DEFAULT_DIR_ACCESS_DENIED),this._pendingConfirmDetail=null}else if(e.type==`ValidPasswordsDetected`){let{password:t}=e.detail;this._passwordsMatch=!0,this._inputPassValue=t}else e.type==`InvalidPasswordsDetected`?(this._passwordsMatch=!1,this._inputPassValue=``):e.type==`keydown`&&e.key===`Enter`&&(e.originalTarget.id==`backup-location-filepicker-input-default`||e.originalTarget.id==`backup-location-filepicker-input-custom`)&&e.preventDefault()}async handleChooseLocation(){this.dispatchEvent(new CustomEvent(`BackupUI:ShowFilepicker`,{bubbles:!0,detail:{win:window.browsingContext}}))}close(){this.dispatchEvent(new CustomEvent(`dialogCancel`,{bubbles:!0,composed:!0}))}handleConfirm(){let e={source:this.source};this._showPasswordOptions&&this._passwordsMatch&&(e.password=this._inputPassValue),this.embeddedFxBackupOptIn&&this.backupIsEncrypted&&!e.password?this.dispatchEvent(new CustomEvent(`SpotlightOnboardingAdvanceScreens`,{bubbles:!0})):(this._pendingConfirmDetail=e,this.dispatchEvent(new CustomEvent(`BackupUI:ProbeDefaultBackupDir`,{bubbles:!0,composed:!0})))}handleTogglePasswordOptions(){this._showPasswordOptions=this.passwordOptionsCheckboxEl?.checked,this._passwordsMatch=!1}updated(e){super.updated?.(e),e.has(`hideFilePathChooser`)&&(this._showPasswordOptions=!!this.hideFilePathChooser,this.passwordOptionsCheckboxEl&&(this.passwordOptionsCheckboxEl.checked=this._showPasswordOptions))}reset(){this._showPasswordOptions=!1,this.passwordOptionsCheckboxEl.checked=!1,this._passwordsMatch=!1,this._inputPassValue=``,this.enableBackupErrorCode=0,this.disableSubmit=!1,this._pendingConfirmDetail=null,this.embeddedFxBackupOptIn||(this._newPath=``,this._newIconURL=``,this._newLabel=``),this.passwordOptionsExpandedEl&&this.passwordOptionsExpandedEl.reset(),this.embeddedFxBackupOptIn&&this.backupServiceState?.embeddedComponentPersistentData&&this.dispatchEvent(new CustomEvent(`BackupUI:FlushEmbeddedComponentPersistentData`,{bubbles:!0}))}defaultFilePathInputTemplate(){let e=this.defaultLabel,t=this.defaultIconURL||this.#e,i=!!e,a=i?JSON.stringify({recommendedFolder:e}):null;return r`
      <input
        id="backup-location-filepicker-input-default"
        class="backup-location-filepicker-input"
        type="text"
        readonly
        data-l10n-id=${i?`turn-on-scheduled-backups-location-default-folder`:`turn-on-scheduled-backups-location-choose-folder`}
        data-l10n-args=${i?a:n}
        data-l10n-attrs="value"
        style=${`background-image: url(${t})`}
      />
    `}customFilePathInputTemplate(){let e=this._newLabel||this.backupServiceState?.embeddedComponentPersistentData?.label,t=this._newIconURL||this.backupServiceState?.embeddedComponentPersistentData?.iconURL||this.#e;return r`
      <input
        id="backup-location-filepicker-input-custom"
        class="backup-location-filepicker-input"
        type="text"
        readonly
        .value=${e}
        style=${`background-image: url(${t})`}
      />
    `}errorTemplate(){return r`
      <moz-message-bar
        id="enable-backup-encryption-error"
        type="error"
        .messageL10nId=${f(this.enableBackupErrorCode)}
      ></moz-message-bar>
    `}allOptionsTemplate(){let e=this.showDefaultFilePath?`backup-location-filepicker-input-default`:`backup-location-filepicker-input-custom`;return r`
      <fieldset id="all-controls">
        <div id="backup-location-controls">
          <label
            id="backup-location-label"
            for=${e}
            data-l10n-id=${this.filePathLabelL10nId||`turn-on-scheduled-backups-location-label`}
          ></label>
          <div id="backup-location-filepicker">
            ${this.showDefaultFilePath?this.defaultFilePathInputTemplate():this.customFilePathInputTemplate()}
            <moz-button
              id="backup-location-filepicker-button"
              @click=${this.handleChooseLocation}
              data-l10n-id="turn-on-scheduled-backups-location-choose-button"
              aria-controls=${e}
            ></moz-button>
          </div>
        </div>
        <fieldset id="sensitive-data-controls">
          <div id="sensitive-data-checkbox">
            <label
              id="sensitive-data-checkbox-label"
              for="sensitive-data-checkbox-input"
              aria-controls="passwords"
              aria-expanded=${this._showPasswordOptions}
            >
              <input
                id="sensitive-data-checkbox-input"
                .value=${this._showPasswordOptions}
                @click=${this.handleTogglePasswordOptions}
                type="checkbox"
              />
              <span
                id="sensitive-data-checkbox-span"
                data-l10n-id="turn-on-scheduled-backups-encryption-label"
              ></span>
            </label>
            <span
              class="text-deemphasized"
              data-l10n-id="settings-sensitive-data-encryption-description"
            ></span>
          </div>

          ${this._showPasswordOptions?this.passwordsTemplate():null}
        </fieldset>
      </fieldset>
    `}passwordsTemplate(){return r`
      <password-validation-inputs
        id="passwords"
        .supportBaseLink=${this.supportBaseLink}
        .createPasswordLabelL10nId=${this.createPasswordLabelL10nId}
        ?embedded-fx-backup-opt-in=${this.embeddedFxBackupOptIn}
      ></password-validation-inputs>
    `}contentTemplate(){let e=this.embeddedFxBackupOptIn&&this.backupServiceState?.embeddedComponentPersistentData?.path;return this.disableSubmit=!!(this._showPasswordOptions&&!this._passwordsMatch||!this._newPath&&!this.defaultLabel&&!e||this.enableBackupErrorCode!=s.NONE),r`
      <form
        id="backup-turn-on-scheduled-wrapper"
        aria-labelledby="backup-turn-on-scheduled-header"
        aria-describedby="backup-turn-on-scheduled-description"
        part="form"
      >
        <h2
          id="backup-turn-on-scheduled-header"
          class="heading-medium"
          data-l10n-id=${this.turnOnBackupHeaderL10nId||`turn-on-scheduled-backups-header`}
        ></h2>
        <main id="backup-turn-on-scheduled-content">
          <div id="backup-turn-on-scheduled-description">
            <span
              id="backup-turn-on-scheduled-description-span"
              data-l10n-id="turn-on-scheduled-backups-description"
            ></span>
            <a
              id="backup-turn-on-scheduled-learn-more-link"
              is="moz-support-link"
              support-page="firefox-backup"
              data-l10n-id="turn-on-scheduled-backups-support-link"
              utm-content="turn-on-backup"
            ></a>
          </div>
          ${this.allOptionsTemplate()}
          ${this.enableBackupErrorCode?this.errorTemplate():null}
        </main>

        <moz-button-group id="backup-turn-on-scheduled-button-group">
          <moz-button
            id="backup-turn-on-scheduled-cancel-button"
            @click=${this.close}
            data-l10n-id=${this.turnOnBackupCancelBtnL10nId||`turn-on-scheduled-backups-cancel-button`}
          ></moz-button>
          <moz-button
            id="backup-turn-on-scheduled-confirm-button"
            form="backup-turn-on-scheduled-wrapper"
            @click=${this.handleConfirm}
            type="primary"
            data-l10n-id=${this.turnOnBackupConfirmBtnL10nId||`turn-on-scheduled-backups-confirm-button`}
            ?disabled=${this.disableSubmit}
          ></moz-button>
        </moz-button-group>
      </form>
    `}render(){return r`
      <link
        rel="stylesheet"
        href="${u}"
      />
      ${this.contentTemplate()}
    `}},customElements.define(`turn-on-scheduled-backups`,m)})))()}export{h as t};