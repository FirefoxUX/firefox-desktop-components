import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,i as n,u as r}from"./lit.all-Co4HOUmF.js";import{c as i,o as a}from"./iframe-DP8hlEO7.js";import{n as o,t as s}from"./backup-constants-BF3H6Sm8.js";import{n as c,r as l,t as u}from"./restore-from-backup-De1fIQVS.js";import{t as d}from"./turn-on-scheduled-backups-C9HpRf5z.js";import{t as f}from"./turn-off-scheduled-backups-D1-Y4LeV.js";import{t as p}from"./enable-backup-encryption-DFm9J2SF.js";import{t as m}from"./disable-backup-encryption-PRKJp7JY.js";var h;function g(){return(g=e((()=>{h=new URL(`backup-settings-gVbpeWjK.css`,import.meta.url).href+``})))()}var _;function v(){return(v=e((()=>{_=new URL(`preferences-B0K7N9dw.css`,import.meta.url).href+``})))()}var y;function b(){return(b=e((()=>{g(),v(),t(),i(),l(),o(),d(),f(),u(),p(),m(),y=class extends a{inProgressTimeout=null;showInProgress=!1;MESSAGE_BAR_BUFFER=3e3;static properties={backupServiceState:{type:Object},_enableEncryptionTypeAttr:{type:String}};static get queries(){return{scheduledBackupsButtonEl:`#backup-toggle-scheduled-button`,archiveSectionEl:`#scheduled-backups`,restoreSectionEl:`#backup-toggle-restore-button`,triggerBackupButtonEl:`#backup-trigger-button`,changePasswordButtonEl:`#backup-change-password-button`,disableBackupEncryptionEl:`disable-backup-encryption`,disableBackupEncryptionDialogEl:`#disable-backup-encryption-dialog`,enableBackupEncryptionEl:`enable-backup-encryption`,enableBackupEncryptionDialogEl:`#enable-backup-encryption-dialog`,turnOnScheduledBackupsDialogEl:`#turn-on-scheduled-backups-dialog`,turnOnScheduledBackupsEl:`turn-on-scheduled-backups`,turnOffScheduledBackupsEl:`turn-off-scheduled-backups`,turnOffScheduledBackupsDialogEl:`#turn-off-scheduled-backups-dialog`,restoreFromBackupEl:`restore-from-backup`,restoreFromBackupButtonEl:`#backup-toggle-restore-button`,restoreFromBackupDialogEl:`#restore-from-backup-dialog`,sensitiveDataCheckboxInputEl:`#backup-sensitive-data-checkbox-input`,passwordControlsEl:`#sensitive-data`,lastBackupFileNameEl:`#last-backup-filename`,lastBackupDateEl:`#last-backup-date`,backupLocationShowButtonEl:`#backup-location-show`,backupErrorBarEl:`#create-backup-error`,backupInProgressMessageBarEl:`#backup-in-progress-message`}}get dialogs(){return[this.disableBackupEncryptionDialogEl,this.enableBackupEncryptionDialogEl,this.turnOnScheduledBackupsDialogEl,this.turnOffScheduledBackupsDialogEl,this.restoreFromBackupDialogEl]}constructor(){super(),this.backupServiceState={backupDirPath:``,backupFileToRestore:null,backupFileInfo:null,defaultParent:{fileName:``,path:``,iconURL:``},encryptionEnabled:!1,scheduledBackupsEnabled:!1,lastBackupDate:null,lastBackupFileName:``,supportBaseLink:``,backupInProgress:!1,recoveryInProgress:!1,recoveryErrorCode:s.NONE,backupErrorCode:s.NONE,archiveEnabledStatus:!1,restoreEnabledStatus:!1},this._enableEncryptionTypeAttr=``}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new CustomEvent(`BackupUI:InitWidget`,{bubbles:!0})),this.addEventListener(`dialogCancel`,this),this.addEventListener(`restoreFromBackupConfirm`,this),this.addEventListener(`restoreFromBackupChooseFile`,this),this.addEventListener(`BackupUI:RestoreDialogReady`,this)}handleErrorBarDismiss=()=>{this.dispatchEvent(new CustomEvent(`BackupUI:ErrorBarDismissed`,{bubbles:!0}))};handleEvent(e){switch(e.type){case`dialogCancel`:for(let e of this.dialogs)e?.close();break;case`restoreFromBackupConfirm`:this.dispatchEvent(new CustomEvent(`BackupUI:RestoreFromBackupFile`,{bubbles:!0,composed:!0,detail:{backupPassword:e.detail.backupPassword,source:`preferences`}}));break;case`restoreFromBackupChooseFile`:this.dispatchEvent(new CustomEvent(`BackupUI:RestoreFromBackupChooseFile`,{bubbles:!0,composed:!0}));break;case`BackupUI:RestoreDialogReady`:this.restoreFromBackupDialogEl&&this.restoreFromBackupDialogEl.showModal()}}handleBackupTrigger(){this.dispatchEvent(new CustomEvent(`BackupUI:TriggerCreateBackup`,{bubbles:!0}))}handleShowScheduledBackups(){!this.backupServiceState.scheduledBackupsEnabled&&this.turnOnScheduledBackupsDialogEl?this.turnOnScheduledBackupsDialogEl.showModal():this.backupServiceState.scheduledBackupsEnabled&&this.turnOffScheduledBackupsDialogEl&&this.turnOffScheduledBackupsDialogEl.showModal()}async handleToggleBackupEncryption(e){e.target.slot||(e.stopPropagation(),e.preventDefault(),e.target.checked&&this.backupServiceState.encryptionEnabled&&this.disableBackupEncryptionDialogEl?this.disableBackupEncryptionDialogEl.showModal():(this._enableEncryptionTypeAttr=`set-password`,await this.updateComplete,this.enableBackupEncryptionDialogEl.showModal()))}async handleChangePassword(){this.enableBackupEncryptionDialogEl&&(this._enableEncryptionTypeAttr=`change-password`,await this.updateComplete,this.enableBackupEncryptionDialogEl.showModal())}turnOnScheduledBackupsDialogTemplate(){let{fileName:e,path:t,iconURL:n}=this.backupServiceState.defaultParent;return r`<dialog
      id="turn-on-scheduled-backups-dialog"
      class="backup-dialog"
      @close=${this.handleTurnOnScheduledBackupsDialogClose}
    >
      <turn-on-scheduled-backups
        source="preferences"
        defaultlabel=${e}
        defaultpath=${t}
        defaulticonurl=${n}
        .supportBaseLink=${this.backupServiceState.supportBaseLink}
      ></turn-on-scheduled-backups>
    </dialog>`}turnOffScheduledBackupsDialogTemplate(){return r`<dialog id="turn-off-scheduled-backups-dialog">
      <turn-off-scheduled-backups
        source="preferences"
      ></turn-off-scheduled-backups>
    </dialog>`}restoreFromBackupDialogTemplate(){return r`<dialog id="restore-from-backup-dialog">
      <restore-from-backup></restore-from-backup>
    </dialog>`}restoreFromBackupTemplate(){let e=this.backupServiceState.scheduledBackupsEnabled?`settings-data-backup-restore-scheduled-on`:`settings-data-backup-restore-scheduled-off`;return r`<moz-box-button
        id="backup-toggle-restore-button"
        @click=${this.handleShowRestoreDialog}
        data-l10n-id=${e}
      ></moz-box-button>
      ${this.restoreFromBackupDialogTemplate()}`}handleShowRestoreDialog(){this.restoreFromBackupDialogEl&&(this.dispatchEvent(new CustomEvent(`BackupUI:PrepareRestoreDialog`,{bubbles:!0,composed:!0,detail:{source:`preferences`}})),this.restoreFromBackupDialogEl.showModal())}handleLocationPickerClick(e){let t=this.shadowRoot?.querySelector(`#backup-location-show`);t&&e.composedPath().includes(t)||(e.stopPropagation(),this.handleEditBackupLocation())}handleShowBackupLocation(){this.dispatchEvent(new CustomEvent(`BackupUI:ShowBackupLocation`,{bubbles:!0}))}handleEditBackupLocation(){this.dispatchEvent(new CustomEvent(`BackupUI:ShowFilepicker`,{bubbles:!0,detail:{win:window.browsingContext,alsoDeleteLastBackup:!0}}))}handleTurnOnScheduledBackupsDialogClose(){this.turnOnScheduledBackupsEl.reset()}handleEnableBackupEncryptionDialogClose(){this.enableBackupEncryptionEl.reset()}enableBackupEncryptionDialogTemplate(){return r`<dialog
      id="enable-backup-encryption-dialog"
      class="backup-dialog"
      @close=${this.handleEnableBackupEncryptionDialogClose}
    >
      <enable-backup-encryption
        type=${this._enableEncryptionTypeAttr}
        .supportBaseLink=${this.backupServiceState.supportBaseLink}
      ></enable-backup-encryption>
    </dialog>`}disableBackupEncryptionDialogTemplate(){return r`<dialog id="disable-backup-encryption-dialog">
      <disable-backup-encryption></disable-backup-encryption>
    </dialog>`}lastBackupInfoTemplate(){let e={date:this.backupServiceState.lastBackupDate*1e3},t={fileName:this.backupServiceState.lastBackupFileName};return r`
      <div id="last-backup-info" slot="description">
        <div
          id="last-backup-date"
          data-l10n-id="settings-data-backup-last-backup-date"
          data-l10n-args=${JSON.stringify(e)}
        ></div>
        <div
          id="last-backup-filename"
          data-l10n-id="settings-data-backup-last-backup-filename"
          data-l10n-args=${JSON.stringify(t)}
        ></div>
      </div>
    `}backupLocationTemplate(){let{backupDirPath:e}=this.backupServiceState;return r`
      <moz-input-folder
        id="last-backup-location"
        data-l10n-id="settings-data-backup-last-backup-location2"
        .value=${e}
        @click=${{handleEvent:e=>this.handleLocationPickerClick(e),capture:!0}}
      >
        <moz-button
          id="backup-location-show"
          @click=${this.handleShowBackupLocation}
          data-l10n-id="settings-data-backup-last-backup-location-show-in-folder"
          slot="actions"
        ></moz-button>
      </moz-input-folder>
    `}sensitiveDataTemplate(){return r`
      <moz-fieldset data-l10n-id="settings-sensitive-data" id="sensitive-data">
        <moz-checkbox
          id="backup-sensitive-data-checkbox-input"
          data-l10n-id="settings-data-toggle-encryption-label2"
          @click=${{handleEvent:e=>this.handleToggleBackupEncryption(e),capture:!0}}
          .checked=${this.backupServiceState.encryptionEnabled}
        >
          <a
            slot="support-link"
            is="moz-support-link"
            support-page="firefox-backup"
            data-l10n-id="settings-data-toggle-encryption-support-link"
            utm-content="encryption"
          ></a>
          <moz-box-button
            id="backup-change-password-button"
            @click=${this.handleChangePassword}
            data-l10n-id="settings-data-change-password2"
            slot="nested"
          ></moz-box-button>
        </moz-checkbox>
      </moz-fieldset>
    `}inProgressMessageBarTemplate(){return r`
      <moz-message-bar
        type="info"
        id="backup-in-progress-message"
        data-l10n-id="settings-data-backup-in-progress-message"
      ></moz-message-bar>
    `}errorBarTemplate(){let e=c(this.backupServiceState.backupErrorCode);return r`
      <moz-message-bar
        type="error"
        id="create-backup-error"
        dismissable
        data-l10n-id=${e}
        @message-bar:user-dismissed=${this.handleErrorBarDismiss}
      >
        <a
          id="create-backup-error-learn-more-link"
          slot="support-link"
          is="moz-support-link"
          support-page="firefox-backup"
          data-l10n-id="settings-data-toggle-encryption-support-link"
          utm-content="backup-error"
        ></a>
      </moz-message-bar>
    `}render(){let e=this.backupServiceState.scheduledBackupsEnabled,t=e?`settings-data-backup-scheduled-backups-on2`:`settings-data-backup-scheduled-backups-off2`,i=e?`settings-data-backup-toggle-off2`:`settings-data-backup-toggle-on2`,a=e?`chrome://global/skin/icons/check-filled.svg`:`chrome://global/skin/icons/warning.svg`;return this.backupServiceState.backupInProgress&&(this.showInProgress||(this.showInProgress=!0,clearTimeout(this.inProgressTimeout),this.inProgressTimeout=setTimeout(()=>{this.showInProgress=!1,this.requestUpdate()},this.MESSAGE_BAR_BUFFER))),r`<link
        rel="stylesheet"
        href="${_}"
      />
      <link
        rel="stylesheet"
        href="${h}"
      />
      ${this.backupServiceState.backupErrorCode?this.errorBarTemplate():null}
      ${this.showInProgress?this.inProgressMessageBarTemplate():null}
      ${this.turnOnScheduledBackupsDialogTemplate()}
      ${this.turnOffScheduledBackupsDialogTemplate()}
      ${this.enableBackupEncryptionDialogTemplate()}
      ${this.disableBackupEncryptionDialogTemplate()}
      <moz-box-group>
        ${this.backupServiceState.archiveEnabledStatus?r`<moz-box-item
                id="scheduled-backups"
                class=${n({"scheduled-backups-enabled":e,"scheduled-backups-disabled":!e})}
                data-l10n-id=${t}
                iconsrc=${a}
              >
                ${this.backupServiceState.lastBackupDate?this.lastBackupInfoTemplate():null}
                ${e?r`
                      <moz-button
                        id="backup-trigger-button"
                        @click=${this.handleBackupTrigger}
                        data-l10n-id="settings-data-backup-trigger-button"
                        ?disabled=${this.showInProgress}
                        slot="actions"
                      ></moz-button>
                    `:null}
              </moz-box-item>
              <moz-box-button
                id="backup-toggle-scheduled-button"
                @click=${this.handleShowScheduledBackups}
                data-l10n-id=${i}
              ></moz-box-button>`:null}
        ${this.backupServiceState.restoreEnabledStatus?this.restoreFromBackupTemplate():null}
      </moz-box-group>
      ${this.backupServiceState.archiveEnabledStatus&&this.backupServiceState.scheduledBackupsEnabled?r`${this.backupLocationTemplate()}${this.sensitiveDataTemplate()}`:null}`}},customElements.define(`backup-settings`,y)})))()}var x,S,C,w,T,E;function D(){return(D=e((()=>{t(),b(),window.MozXULElement.insertFTLIfNeeded(`browser/backupSettings.ftl`),window.MozXULElement.insertFTLIfNeeded(`branding/brand.ftl`),x={title:`Domain-specific UI Widgets/Backup/Backup Settings`,component:`backup-settings`,argTypes:{}},S=({backupServiceState:e})=>r`
  <backup-settings .backupServiceState=${e}></backup-settings>
`,C=S.bind({}),C.args={backupServiceState:{backupDirPath:`/Some/User/Documents`,defaultParent:{path:`/Some/User/Documents`,fileName:`Documents`},scheduledBackupsEnabled:!1,backupErrorCode:0,archiveEnabledStatus:!0,restoreEnabledStatus:!0}},w=S.bind({}),w.args={backupServiceState:{backupDirPath:`/Some/User/Documents`,defaultParent:{path:`/Some/User/Documents`,fileName:`Documents`},scheduledBackupsEnabled:!0,backupErrorCode:0,archiveEnabledStatus:!0,restoreEnabledStatus:!0}},T=S.bind({}),T.args={backupServiceState:{backupDirPath:`/Some/User/Documents`,defaultParent:{path:`/Some/User/Documents`,fileName:`Documents`},scheduledBackupsEnabled:!0,lastBackupDate:1719625747,lastBackupFileName:`FirefoxBackup_default_123123123.html`,backupErrorCode:0,archiveEnabledStatus:!0,restoreEnabledStatus:!0}},E=S.bind({}),E.args={backupServiceState:{backupDirPath:`/Some/User/Documents`,defaultParent:{path:`/Some/User/Documents`,fileName:`Documents`},scheduledBackupsEnabled:!0,encryptionEnabled:!0,lastBackupDate:1719625747,lastBackupFileName:`FirefoxBackup_default_123123123.html`,backupErrorCode:0,archiveEnabledStatus:!0,restoreEnabledStatus:!0}}})))()}D();export{E as EncryptionEnabled,T as ExistingBackup,C as ScheduledBackupsDisabled,w as ScheduledBackupsEnabled,x as default};