import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{_ as t,a as n,d as r,f as i,g as a,l as o,m as s,s as c,t as l,u,v as d,x as f,y as p}from"./lit.all-Co4HOUmF.js";import{c as m,o as h}from"./iframe-DP8hlEO7.js";import{n as g,t as _}from"./moz-input-folder-DwvQf4iK.js";function v(e){return e?`pane${e[0].toUpperCase()}${e.slice(1)}`:void 0}function y(e,t){return!t||typeof e!=`number`?e:Math.max(e+1,3)}var b,x,S,C,w,T;function E(){return(E=e((()=>{i(),m(),{XPCOMUtils:b}=ChromeUtils.importESModule(`resource://gre/modules/XPCOMUtils.sys.mjs`),x=b.declareLazy({srdEnabled:{pref:`browser.settings-redesign.enabled`}}),S=class extends l{#e={};render(e){return t}update(e,[t]){let n=e.element;for(let[e,r]of Object.entries(t))if(r!==this.#e[e]){if(e.startsWith(`?`))n.toggleAttribute(e.slice(1),!!r);else if(e.startsWith(`.`))n[e.slice(1)]=r;else if(e.startsWith(`@`))throw Error(`Event listeners are not yet supported with spread (${e})`);else n.setAttribute(e,String(r))}return this.#e=t,a}},C=c(S),w=[`headinglevel`,`headingLevel`,`.headingLevel`],T=class extends h{getCommonPropertyMapping(e){let t={...e.controlAttrs??{}};if(x.srdEnabled)for(let e of w)typeof t[e]==`number`&&(t[e]=y(t[e],x.srdEnabled));return{id:e.id,"data-l10n-id":e.l10nId?e.l10nId:void 0,"data-l10n-args":e.l10nArgs?JSON.stringify(e.l10nArgs):void 0,".iconSrc":e.iconSrc,"data-load-pane":v(e.loadPane),".supportPage":e.supportPage==null?void 0:e.supportPage,slot:e.slot,headinglevel:y(e.headingLevel,x.srdEnabled),...t}}}})))()}var D,O,k,A;function j(){return(j=e((()=>{i(),E(),g(),D=new Map([[`moz-radio-group`,s`moz-radio`],[`moz-select`,s`moz-option`],[`moz-visual-picker`,s`moz-visual-picker-item`]]),O=new Map([[`moz-checkbox`,`nested`],[`moz-input-email`,`nested`],[`moz-input-folder`,`nested`],[`moz-input-number`,`nested`],[`moz-input-password`,`nested`],[`moz-input-search`,`nested`],[`moz-input-tel`,`nested`],[`moz-input-text`,`nested`],[`moz-input-url`,`nested`],[`moz-radio`,`nested`],[`moz-radio-group`,`nested`],[`moz-toggle`,`nested`]]),k=class extends Error{constructor(e){super(`No Setting with id "${e}". Did you register it with Preferences.addSetting()?`),this.name=`SettingNotDefinedError`,this.settingId=e}},A=class extends T{static SettingNotDefinedError=k;static properties={setting:{type:Object},config:{type:Object},value:{},parentDisabled:{type:Boolean},tabIndex:{type:Number,reflect:!0},showEnableExtensionMessage:{type:Boolean,state:!0},isDisablingExtension:{type:Boolean,state:!0}};#e;constructor(){super(),this.controlRef=n(),this.controlledMessageBarRef=n(),this.enableMessageBarRef=n(),this.getSetting=void 0,this.setting=void 0,this.config=void 0,this.parentDisabled=void 0,this.showEnableExtensionMessage=!1,this.isDisablingExtension=!1}createRenderRoot(){return this}focus(){this.controlEl.focus()}get controlEl(){return this.controlRef.value}get disabled(){return this.setting?.disabled||this.setting?.locked||this.isDisabledByExtension()}async getUpdateComplete(){let e=await super.getUpdateComplete();return await this.controlEl?.updateComplete,e}onSettingChange=()=>{this.setValue(),this.requestUpdate()};willUpdate(e){if(e.has(`setting`)&&(this.#e&&this.#e.off(`change`,this.onSettingChange),this.#e=this.setting,this.setValue(),this.setting.on(`change`,this.onSettingChange)),!this.setting)throw new k(this.config.id);this.id=`setting-control-${this.config.id}`;let t=this.hidden;this.hidden=!this.setting.visible,t!=this.hidden&&this.dispatchEvent(new Event(`visibility-change`,{bubbles:!0}))}updated(){let e=this.controlRef?.value;e&&(`checked`in e?e.checked=this.value:`pressed`in e?e.pressed=this.value:`value`in e&&(e.value=this.value),e.requestUpdate?.())}getCommonPropertyMapping(e){return{...super.getCommonPropertyMapping(e),"data-subcategory":e.subcategory,".setting":this.setting,".control":this}}getOptionPropertyMapping(e){return{...this.getCommonPropertyMapping(e),".value":e.value,".disabled":e.disabled,".hidden":e.hidden}}getControlPropertyMapping(e){return{...this.getCommonPropertyMapping(e),".parentDisabled":this.parentDisabled,"?disabled":this.disabled,".hidden":e.control==`moz-message-bar`&&this.hidden}}getValue(){return this.setting.value}setValue=()=>{this.value=this.setting.value};controlValue(e){let t=e.constructor;return`activatedProperty`in t&&t.activatedProperty&&e.localName!=`moz-radio`?e[t.activatedProperty]:e instanceof _?e.folder:`value`in e?e.value:null}onChange(e){this.setting.userChange(this.controlValue(e))}onClick(e){this.setting.userClick(e)}onMessageBarDismiss(e){this.setting.messageBarDismiss(e)}onReorder(e){this.setting.userReorder(e)}async disableExtension(){this.isDisablingExtension=!0,this.showEnableExtensionMessage=!0,await this.setting.disableControllingExtension(),this.isDisablingExtension=!1}isControlledByExtension(){return this.setting.controllingExtensionInfo?.id&&this.setting.controllingExtensionInfo?.name}isDisabledByExtension(){return this.isControlledByExtension()&&!this.setting.controllingExtensionInfo.allowControl}handleEnableExtensionDismiss(){this.showEnableExtensionMessage=!1}navigateToAddons(e){e.target.matches(`a[data-l10n-name='addons-link']`)&&(e.preventDefault(),window.browsingContext.topChromeWindow.BrowserAddonUI.openAddonsMgr(`addons://list/extension`))}get extensionName(){return this.setting.controllingExtensionInfo.name}get extensionMessageId(){return this.setting.controllingExtensionInfo.l10nId}itemsTemplate(e){if(!e.items)return[];let t=e.items.map(e=>({config:e,setting:this.getSetting(e.id)})),n=e.control||`moz-checkbox`;return p(t,e=>e.config.key||e.config.id,e=>u`<setting-control
          .config=${e.config}
          .setting=${e.setting}
          .getSetting=${this.getSetting}
          slot=${r(e.config.slot||O.get(n))}
        ></setting-control>`)}optionsTemplate(e){if(!e.options)return[];let t=e.control||`moz-checkbox`;return p(e.options,e=>e.key,e=>{let n=e.control?f(e.control):D.get(t),r=C(this.getOptionPropertyMapping(e)),i=`items`in e?this.itemsTemplate(e):this.optionsTemplate(e);return e.control==`a`&&e.controlAttrs?.is==`moz-support-link`?u`<a is="moz-support-link" ${r}>${i}</a>`:o`<${n} ${r}>${i}</${n}>`})}get extensionSupportPage(){return this.setting.controllingExtensionInfo.supportPage}render(){this.config=this.setting.getControlConfig(this.config);let{config:e}=this,t=e.control||`moz-checkbox`,n=`items`in e?this.itemsTemplate(e):this.optionsTemplate(e),i=this.getControlPropertyMapping(e),a=f(t),s;if(this.isControlledByExtension()){let e={name:this.extensionName},t=this.extensionSupportPage;s=u`<moz-message-bar
        class="extension-controlled-message-bar"
        ${d(this.controlledMessageBarRef)}
        .messageL10nId=${this.extensionMessageId}
        .messageL10nArgs=${e}
      >
        ${t?u`<a
              is="moz-support-link"
              slot="support-link"
              support-page=${t}
            ></a>`:``}
        ${this.setting.controllingExtensionInfo.mayDisable?u`<moz-button
              slot="actions"
              @click=${this.disableExtension}
              ?disabled=${this.isDisablingExtension}
              data-l10n-id="disable-extension"
            ></moz-button>`:``}
      </moz-message-bar>`}else this.showEnableExtensionMessage&&(s=u`<moz-message-bar
        class="reenable-extensions-message-bar"
        dismissable=""
        ${d(this.enableMessageBarRef)}
        @message-bar:user-dismissed=${this.handleEnableExtensionDismiss}
      >
        <span
          @click=${this.navigateToAddons}
          slot="message"
          data-l10n-id="extension-controlled-enable-2"
        >
          <a data-l10n-name="addons-link" href="#"></a>
        </span>
      </moz-message-bar>`);return o`
    ${s}
    <${a}
      ${C(i)}
      ${d(this.controlRef)}
      tabindex=${r(this.tabIndex)}
    >${n}</${a}>`}},customElements.define(`setting-control`,A)})))()}export{C as a,E as i,j as n,T as r,A as t};