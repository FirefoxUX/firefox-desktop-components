import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,u as n,y as r}from"./lit.all-BYVOqvrj.js";import{c as i,o as a}from"./iframe-B6GfsneT.js";import{n as o,t as s}from"./backup-constants-BF3H6Sm8.js";import{t as c}from"./moz-message-bar-9HI996a8.js";function l(e){return u[e]??u[s.UNKNOWN]}var u;function d(){return(d=e((()=>{o(),u=Object.freeze({[s.UNAUTHORIZED]:`backup-service-error-incorrect-password`,[s.CORRUPTED_ARCHIVE]:`backup-service-error-corrupt-file`,[s.UNSUPPORTED_BACKUP_VERSION]:`backup-service-error-unsupported-version`,[s.UNINITIALIZED]:`backup-service-error-went-wrong2`,[s.FILE_SYSTEM_ERROR]:`backup-service-error-went-wrong2`,[s.DECRYPTION_FAILED]:`backup-service-error-went-wrong2`,[s.RECOVERY_FAILED]:`backup-service-error-recovery-failed`,[s.UNKNOWN]:`backup-service-error-went-wrong2`,[s.INTERNAL_ERROR]:`backup-service-error-went-wrong2`,[s.UNSUPPORTED_APPLICATION]:`backup-service-error-unsupported-application`,[s.DECOMPRESSION_FAILED]:`backup-service-error-recovery-failed`,[s.PROFILE_CREATION_FAILED]:`backup-service-error-recovery-failed`,[s.RESOURCE_RECOVERY_FAILED]:`backup-service-error-recovery-failed`})})))()}var f;function p(){return(p=e((()=>{f=new URL(`restore-from-backup-CDfyga30.css`,import.meta.url).href+``})))()}var m;function h(){return(h=e((()=>{p(),t(),i(),o(),d(),c(),m=class extends a{#e=`chrome://global/skin/icons/page-portrait.svg`;#t=null;get initializedPromise(){return this.#n.promise}#n=Promise.withResolvers();#r=null;static properties={_fileIconURL:{type:String},_restoreType:{type:String},aboutWelcomeEmbedded:{type:Boolean},backupServiceState:{type:Object}};static get queries(){return{filePicker:`#backup-filepicker-input`,passwordInput:`#backup-password-input`,cancelButtonEl:`#restore-from-backup-cancel-button`,confirmButtonEl:`#restore-from-backup-confirm-button`,chooseButtonEl:`#backup-filepicker-button`,errorMessageEl:`#restore-from-backup-error`}}get isIncorrectPassword(){return this.backupServiceState?.recoveryErrorCode===s.UNAUTHORIZED}get isFileError(){let e=this.backupServiceState?.recoveryErrorCode;return e===s.CORRUPTED_ARCHIVE||e===s.UNSUPPORTED_BACKUP_VERSION||e===s.UNSUPPORTED_APPLICATION}constructor(){super(),this._fileIconURL=``,this._restoreType=`add`,this.backupServiceState={backupDirPath:``,backupFileToRestore:null,backupFileInfo:null,defaultParent:{fileName:``,path:``,iconURL:``},encryptionEnabled:!1,scheduledBackupsEnabled:!1,selectableProfilesAllowed:!1,lastBackupDate:null,lastBackupFileName:``,supportBaseLink:`https://support.mozilla.org/`,backupInProgress:!1,recoveryInProgress:!1,recoveryErrorCode:s.NONE}}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new CustomEvent(`BackupUI:InitWidget`,{bubbles:!0})),this.maybeGetBackupFileInfo(),this.addEventListener(`BackupUI:SelectNewFilepickerPath`,this),this.addEventListener(`BackupUI:StateWasUpdated`,this)}maybeGetBackupFileInfo(){this.backupServiceState?.backupFileToRestore&&!this.backupServiceState?.backupFileInfo&&this.getBackupFileInfo()}disconnectedCallback(){super.disconnectedCallback()}updated(e){if(super.updated(e),e.has(`backupServiceState`)){let e=this.backupServiceState.recoveryInProgress&&!this.backupServiceState.recoveryErrorCode;this.dispatchEvent(new CustomEvent(`BackupUI:RecoveryProgress`,{bubbles:!0,composed:!0,detail:{recoveryInProgress:e}})),this.maybeGetBackupFileInfo()}}handleEvent(e){if(e.type==`BackupUI:SelectNewFilepickerPath`){let{iconURL:t}=e.detail;this._fileIconURL=t,this.#r=null,this.#t=Promise.withResolvers(),this.#t.promise.then(()=>{let e={location:this.backupServiceState?.backupFileCoarseLocation,valid:this.backupServiceState?.recoveryErrorCode==s.NONE};e.valid&&(e.backup_timestamp=new Date(this.backupServiceState?.backupFileInfo?.date||0).getTime(),e.restore_id=this.backupServiceState?.restoreID,e.encryption=this.backupServiceState?.backupFileInfo?.isEncrypted,e.app_name=this.backupServiceState?.backupFileInfo?.appName,e.version=this.backupServiceState?.backupFileInfo?.appVersion,e.build_id=this.backupServiceState?.backupFileInfo?.buildID,e.os_name=this.backupServiceState?.backupFileInfo?.osName,e.os_version=this.backupServiceState?.backupFileInfo?.osVersion,e.os_build_number=this.backupServiceState?.backupFileInfo?.osBuildNumber,e.telemetry_enabled=this.backupServiceState?.backupFileInfo?.healthTelemetryEnabled),Glean.browserBackup.restoreFileChosen.record(e),Services.obs.notifyObservers(null,`browser-backup-glean-sent`)}),this.getBackupFileInfo()}else e.type==`BackupUI:StateWasUpdated`&&(this.#n.resolve(),this.#t&&=(this.#t.resolve(),null))}handleRestoreTypeChange(e){this._restoreType=e.target.value}handleChooseBackupFile(){this.dispatchEvent(new CustomEvent(`BackupUI:ShowFilepicker`,{bubbles:!0,composed:!0,detail:{win:window.browsingContext,filter:`filterHTML`,existingBackupPath:this.backupServiceState?.backupFileToRestore}}))}getBackupFileInfo(){let e=this.backupServiceState?.backupFileToRestore;e&&this.#r!==e&&(this.#r=e,this.dispatchEvent(new CustomEvent(`BackupUI:GetBackupFileInfo`,{bubbles:!0,composed:!0})))}handleCancel(){this.dispatchEvent(new CustomEvent(`dialogCancel`,{bubbles:!0,composed:!0}))}handleConfirm(){if(!this.backupServiceState?.backupFileToRestore||this.backupServiceState?.recoveryInProgress)return;let e=this.passwordInput?.value;this.dispatchEvent(new CustomEvent(`BackupUI:RestoreFromBackupFile`,{bubbles:!0,composed:!0,detail:{backupPassword:e,restoreType:this._restoreType,source:this.aboutWelcomeEmbedded?`onboarding`:`preferences`}}))}getSupportURLWithUTM(e){let t=new URL(e,this.backupServiceState.supportBaseLink);return t.searchParams.set(`utm_medium`,`firefox-desktop`),t.searchParams.set(`utm_source`,`npo`),t.searchParams.set(`utm_campaign`,`fx-backup-restore`),t.searchParams.set(`utm_content`,`restore-error`),t.href}applyContentCustomizations(){this.aboutWelcomeEmbedded&&this.style.setProperty(`--label-font-weight`,`var(--font-weight-semibold)`)}renderBackupFileInfo(e){return n`<p
      id="restore-from-backup-backup-found-info"
      data-l10n-id="backup-file-creation-metadata2"
      data-l10n-args=${JSON.stringify({profileName:e.profileName??``,machineName:e.deviceName??``,date:e.date?new Date(e.date).getTime():0})}
    ></p>`}renderBackupFileStatus(){let{backupFileInfo:e,recoveryErrorCode:t}=this.backupServiceState||{};return t&&!this.isIncorrectPassword&&(this.isFileError||this.aboutWelcomeEmbedded)?this.genericFileErrorTemplate():e?this.renderBackupFileInfo(e):null}controlsTemplate(){let e=this.#e;return this.backupServiceState?.backupFileToRestore&&!this.aboutWelcomeEmbedded&&(e=this._fileIconURL||this.#e),n`
      <fieldset id="backup-restore-controls">
        ${this.aboutWelcomeEmbedded?null:n`<div>
              <a
                id="restore-from-backup-support-link"
                slot="support-link"
                is="moz-support-link"
                support-page="firefox-backup"
                data-l10n-id="restore-from-backup-support-link1"
              ></a>
            </div>`}
        <fieldset id="backup-filepicker-controls">
          <label
            id="backup-filepicker-label"
            for="backup-filepicker-input"
            data-l10n-id="restore-from-backup-filepicker-label"
          ></label>
          <div id="backup-filepicker">
            ${this.inputTemplate(e)}
            <moz-button
              id="backup-filepicker-button"
              @click=${this.handleChooseBackupFile}
              data-l10n-id="restore-from-backup-file-choose-button"
              aria-controls="backup-filepicker-input"
            ></moz-button>
          </div>

          ${this.renderBackupFileStatus()}
        </fieldset>
        <fieldset id="password-entry-controls">
          ${this.backupServiceState?.backupFileInfo?.isEncrypted?this.passwordEntryTemplate():null}
        </fieldset>

        ${this.backupServiceState?.selectableProfilesAllowed?n` <moz-radio-group
              name="restore-from-backup-type"
              id="restore-from-backup-type-group"
              data-l10n-id="restore-from-backup-type-group-label"
              heading-level="3"
              @change=${this.handleRestoreTypeChange}
            >
              <moz-radio
                data-l10n-id="restore-from-backup-type-add"
                value="add"
                checked
              ></moz-radio>
              <moz-radio
                data-l10n-id="restore-from-backup-type-replace"
                value="replace"
              ></moz-radio>
            </moz-radio-group>`:n` <moz-message-bar type="info">
              <span
                slot="message"
                data-l10n-id="restore-from-backup-profiles-disabled-message"
              >
              </span>
            </moz-message-bar>`}
      </fieldset>
    `}inputTemplate(e){let t=r({...e?{backgroundImage:`url(${e})`}:{},fieldSizing:`content`,width:`100%`}),i=this.backupServiceState?.backupFileToRestore||``,{backupFileInfo:a,recoveryErrorCode:o}=this.backupServiceState||{},s=o&&!this.isIncorrectPassword&&(this.isFileError||this.aboutWelcomeEmbedded),c=``;return c=s?`backup-generic-file-error`:a?`restore-from-backup-backup-found-info`:`restore-from-backup-no-backup-file-link`,n`
      <textarea
        id="backup-filepicker-input"
        rows="1"
        readonly
        .value=${i}
        style=${t}
        aria-invalid=${String(!!s)}
        aria-describedby=${c}
        data-l10n-id="restore-from-backup-filepicker-input"
      ></textarea>
    `}passwordEntryTemplate(){let e=this.isIncorrectPassword,t=e?`backup-password-error`:`backup-password-description`,r;return r=e&&this.aboutWelcomeEmbedded?n`
        <span
          id="backup-password-error"
          class="field-error"
          data-l10n-id="backup-service-error-incorrect-password"
        >
          <a
            id="backup-incorrect-password-support-link"
            target="_blank"
            href=${this.getSupportURLWithUTM(`firefox-backup`)}
            data-l10n-name="incorrect-password-support-link"
            dir="auto"
            rel="noopener noreferrer"
          ></a>
        </span>
      `:e?n`
        <span
          id="backup-password-error"
          class="field-error"
          data-l10n-id="backup-service-error-incorrect-password"
        >
          <a
            id="backup-incorrect-password-support-link"
            slot="support-link"
            is="moz-support-link"
            support-page="firefox-backup"
            data-l10n-name="incorrect-password-support-link"
            dir="auto"
          ></a>
        </span>
      `:n`<label
        id="backup-password-description"
        data-l10n-id="restore-from-backup-password-description"
      ></label>`,n` <fieldset id="backup-password">
      <label id="backup-password-label" for="backup-password-input">
        <span
          id="backup-password-span"
          data-l10n-id="restore-from-backup-password-label"
        ></span>
        <input
          type="password"
          id="backup-password-input"
          aria-invalid=${String(e)}
          aria-describedby=${t}
        />
      </label>
      ${r}
    </fieldset>`}contentTemplate(){let e=this.backupServiceState?.recoveryInProgress?`restore-from-backup-restoring-button`:`restore-from-backup-confirm-button`;return n`
      <div
        id="restore-from-backup-wrapper"
        aria-labelledby="restore-from-backup-header"
        aria-describedby="restore-from-backup-description"
      >
        ${this.aboutWelcomeEmbedded?null:this.headerTemplate()}
        <main id="restore-from-backup-content">
          ${!this.aboutWelcomeEmbedded&&this.backupServiceState?.recoveryErrorCode?this.errorTemplate():null}
          ${this.controlsTemplate()}
        </main>

        <moz-button-group id="restore-from-backup-button-group">
          ${this.aboutWelcomeEmbedded?null:this.cancelButtonTemplate()}
          <moz-button
            id="restore-from-backup-confirm-button"
            @click=${this.handleConfirm}
            type="primary"
            data-l10n-id=${e}
            ?disabled=${!this.backupServiceState?.backupFileToRestore||!this.backupServiceState?.backupFileInfo||this.backupServiceState?.recoveryInProgress||this.backupServiceState?.selectableProfilesAllowed&&!this._restoreType}
          ></moz-button>
        </moz-button-group>
      </div>
    `}headerTemplate(){return n`
      <h2
        id="restore-from-backup-header"
        class="heading-medium"
        data-l10n-id="restore-from-backup-header"
      ></h2>
    `}cancelButtonTemplate(){return n`
      <moz-button
        id="restore-from-backup-cancel-button"
        @click=${this.handleCancel}
        data-l10n-id="restore-from-backup-cancel-button"
      ></moz-button>
    `}errorTemplate(){return this.isIncorrectPassword||this.isFileError?null:n`
      <moz-message-bar
        id="restore-from-backup-error"
        type="error"
        data-l10n-id=${l(this.backupServiceState?.recoveryErrorCode)}
      >
      </moz-message-bar>
    `}genericFileErrorTemplate(){return this.isIncorrectPassword?null:this.aboutWelcomeEmbedded?n`
        <span
          id="backup-generic-file-error"
          class="field-error"
          data-l10n-id="backup-file-restore-file-validation-error"
        >
          <a
            id="backup-generic-error-link"
            target="_blank"
            href=${this.getSupportURLWithUTM(`firefox-backup`)}
            data-l10n-name="restore-problems"
            dir="auto"
            rel="noopener noreferrer"
          ></a>
        </span>
      `:n`
      <span
        id="backup-generic-file-error"
        class="field-error"
        data-l10n-id="backup-file-restore-file-validation-error"
      >
        <a
          id="backup-generic-error-link"
          slot="support-link"
          is="moz-support-link"
          support-page="firefox-backup"
          data-l10n-name="restore-problems"
          dir="auto"
        ></a>
      </span>
    `}render(){return this.applyContentCustomizations(),n`
      <link
        rel="stylesheet"
        href="${f}"
      />
      ${this.contentTemplate()}
    `}},customElements.define(`restore-from-backup`,m)})))()}export{l as n,d as r,h as t};