import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,f as n,u as r}from"./lit.all-Co4HOUmF.js";import{c as i,o as a}from"./iframe-CEh6YfCk.js";var o;function s(){return(s=e((()=>{o=new URL(`update-state-BMPcnr2Z.css`,import.meta.url).href+``})))()}var c,l;function u(){return(u=e((()=>{s(),i(),n(),c={checkForUpdates:{l10nId:``,buttonL10nId:`update-checkForUpdatesButton`,buttonId:`checkForUpdatesButton`,buttonAction:`check`},downloadAndInstall:{l10nId:``,buttonId:`downloadAndInstallButton`,buttonAction:`download`},apply:{l10nId:``,buttonL10nId:`update-updateButton`,buttonId:`updateButton`,buttonAction:`update`},checkingForUpdates:{l10nId:`settings-update-checking-for-updates`,iconSrc:`chrome://global/skin/icons/loading.svg`,buttonL10nId:`update-checkForUpdatesButton`,buttonDisabled:!0},downloading:{l10nId:`settings-update-downloading-2`,iconSrc:`chrome://global/skin/icons/loading.svg`},applying:{l10nId:`settings-update-applying`,iconSrc:`chrome://global/skin/icons/loading.svg`},downloadFailed:{l10nId:`update-failed-main`,buttonL10nId:`update-checkForUpdatesButton`,buttonId:`checkForUpdatesButton2`,buttonAction:`check`},policyDisabled:{l10nId:`settings-update-policy-disabled`,buttonL10nId:`update-checkForUpdatesButton`,buttonDisabled:!0},noUpdatesFound:{l10nId:`settings-update-no-updates-found`,iconSrc:`chrome://global/skin/icons/check-filled.svg`,buttonL10nId:`update-checkForUpdatesButton`,buttonId:`checkForUpdatesButton3`,buttonAction:`check`},checkingFailed:{l10nId:`settings-update-checking-failed`,iconSrc:`chrome://global/skin/icons/warning.svg`,buttonL10nId:`update-checkForUpdatesButton`,buttonId:`checkForUpdatesButton4`,buttonAction:`check`},otherInstanceHandlingUpdates:{l10nId:`settings-update-other-instance-handling-updates`,buttonL10nId:`update-checkForUpdatesButton`,buttonDisabled:!0},manualUpdate:{l10nId:`settings-update-manual-with-link`,iconSrc:`chrome://global/skin/icons/warning.svg`,buttonL10nId:`update-checkForUpdatesButton`,buttonDisabled:!0},unsupportedSystem:{l10nId:`settings-update-unsupported`,buttonL10nId:`update-checkForUpdatesButton`,buttonDisabled:!0},restarting:{l10nId:`settings-update-restarting`,iconSrc:`chrome://global/skin/icons/loading.svg`,buttonL10nId:`update-updateButton`,buttonDisabled:!0},internalError:{l10nId:`settings-update-internal-error`,iconSrc:`chrome://global/skin/icons/warning.svg`,buttonL10nId:`update-checkForUpdatesButton`,buttonDisabled:!0}},l=class extends a{static properties={value:{type:String},linkURL:{type:String},updateVersion:{type:String},transfer:{type:String}};constructor(){super(),this.value=``,this.linkURL=``,this.updateVersion=``,this.transfer=``}update(e){super.update(e),e.has(`transfer`)&&this.value===`downloading`&&this.dispatchEvent(new CustomEvent(`update-state:downloading`))}get manualURL(){return window.IS_STORYBOOK?new URL(`https://www.mozilla.org/firefox/`):new URL(Services.urlFormatter.formatURLPref(`app.update.url.manual`))}handleButtonClick(){let{buttonAction:e}=c[this.value];if(e&&window.gAppUpdater)switch(e){case`check`:window.gAppUpdater.checkForUpdates();break;case`download`:window.gAppUpdater.startDownload();break;case`update`:window.gAppUpdater.buttonRestartAfterDownload()}}labelWithLinkTemplate(){let{l10nId:e,iconSrc:t}=c[this.value];if(!e)return``;let n=this.value==`unsupportedSystem`?this.linkURL:this.manualURL.href;return this.value===`unsupportedSystem`?r`<span class="label" id="label" data-l10n-id=${e}
        ><a
          data-l10n-name="unsupported-link"
          target="_blank"
          part="support-link"
          href=${n}
        ></a
      ></span>`:this.value===`downloadFailed`?r`<span class="label" id="label" data-l10n-id=${e}
        ><a
          data-l10n-name="failed-link-main"
          target="_blank"
          part="support-link"
          href=${n}
        ></a
      ></span>`:r`<div class="text-content">
      <img src=${t} alt="" class="icon" />
      <span
        class="label"
        id="label"
        data-l10n-id=${e}
        data-l10n-args=${JSON.stringify({displayUrl:`${this.manualURL.origin}${this.manualURL.pathname}`})}
        ><a
          data-l10n-name="manual-link"
          target="_blank"
          part="support-link"
          href=${n}
        ></a
      ></span>
    </div>`}buttonTemplate(){let{l10nId:e,buttonId:n,buttonL10nId:i,buttonDisabled:a}=c[this.value];if(!n&&!i)return``;if(!e){if(this.value===`downloadAndInstall`){if(!this.updateVersion)return``;let e=Services.strings.createBundle(`chrome://browser/locale/browser.properties`),t=e.formatStringFromName(`update.downloadAndInstallButton.label`,[this.updateVersion]),n=e.GetStringFromName(`update.downloadAndInstallButton.accesskey`);return r`<moz-box-button
          label=${t}
          accesskey=${n}
          @click=${this.handleButtonClick}
        >
        </moz-box-button>`}return r`<moz-box-button
        id=${t(n)}
        data-l10n-id=${i}
        @click=${this.handleButtonClick}
      >
      </moz-box-button>`}return r`<moz-button
      id=${t(n)}
      data-l10n-id=${i}
      ?disabled=${a}
      @click=${this.handleButtonClick}
      slot="actions"
    >
    </moz-button>`}render(){if(!this.value||!c[this.value])return``;let{l10nId:e,iconSrc:n}=c[this.value];if(!e)return this.buttonTemplate();if(this.value===`manualUpdate`||this.value===`internalError`||this.value===`unsupportedSystem`||this.value===`downloadFailed`)return r`
        <link
          rel="stylesheet"
          href="${o}"
        />
        <moz-box-item class=${this.value}>
          ${this.labelWithLinkTemplate()} ${this.buttonTemplate()}
        </moz-box-item>
      `;let i={};return this.value===`downloading`&&(i.transfer=this.transfer),r`
      <link
        rel="stylesheet"
        href="${o}"
      />
      <moz-box-item
        iconsrc=${t(n)}
        data-l10n-id=${e}
        data-l10n-args=${JSON.stringify(i)}
        class=${this.value}
      >
        ${this.buttonTemplate()}
      </moz-box-item>
    `}},customElements.define(`update-state`,l)})))()}var d,f,p;function m(){return(m=e((()=>{n(),u(),d={title:`Domain-specific UI Widgets/Settings/Update State`,component:`update-state`,parameters:{status:`in-development`},argTypes:{value:{control:`select`,options:[`checkForUpdates`,`apply`,`checkingForUpdates`,`downloading`,`applying`,`downloadFailed`,`policyDisabled`,`noUpdatesFound`,`checkingFailed`,`otherInstanceHandlingUpdates`,`manualUpdate`,`unsupportedSystem`,`restarting`,`internalError`]}}},window.MozXULElement.insertFTLIfNeeded(`browser/aboutDialog.ftl`),f=({value:e=``,linkURL:n=`https://support.mozilla.org`,transfer:i=`1.0 of 1.4 KB`})=>r`
  <div style="max-width: 700px">
    <update-state
      value=${t(e)}
      linkURL=${n}
      transfer=${i}
    ></update-state>
  </div>
`,p=f.bind({}),p.args={value:`noUpdatesFound`}})))()}m();export{p as Default,d as default};