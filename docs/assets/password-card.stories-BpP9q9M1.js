import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{S as t,d as n,f as r,u as i}from"./lit.all-Co4HOUmF.js";import{c as a,o}from"./iframe-17211AdQ.js";var s;function c(){return(c=e((()=>{s=``+new URL(`password-card-Do6O1LoU.css`,import.meta.url).href})))()}var l;function u(){return(u=e((()=>{l=``+new URL(`login-line-Cjw_vM0T.css`,import.meta.url).href})))()}var d,f;function p(){return(p=e((()=>{u(),r(),a(),d=class e extends o{static properties={value:{type:String},labelL10nId:{type:String},lineType:{type:String},inputType:{type:String},favIcon:{type:String},alert:{type:Boolean},onLineClick:{type:Function}};#e;static get queries(){return{lineContainer:`.line-container`}}static lineTypeIdMap={password:`contextual-manager-check-icon-password`,username:`contextual-manager-check-icon-username`};#t(){return this.lineType!==`origin`}#n(){return n(this.#t()?`data-after`:void 0)}#r(){this.lineContainer.classList.contains(`copied`)||(this.lineContainer.classList.add(`copied`),this.#e=setTimeout(()=>{this.lineContainer.classList.remove(`copied`),this.#e=null},4e3))}async#i(){await this.onLineClick()&&this.#t()&&this.#r()}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.#i),this.addEventListener(`keypress`,async e=>{(e.code===`Enter`||e.code===`Space`)&&(e.preventDefault(),await this.#i())})}disconnectedCallback(){super.disconnectedCallback(),this.#e&&clearTimeout(this.#e)}constructor(){super(),this.favIcon=``,this.#e=null}render(){return i`
      <link
        rel="stylesheet"
        href="${l}"
      />
      <div class="line-container">
        <div class="input-container">
          <div class="label-container">
            <label
              data-l10n-id=${this.labelL10nId}
              data-l10n-attrs=${this.#n()}
              class="input-label"
              for="login-line-input"
            ></label>
            ${t(this.alert,()=>i` <img
                  data-l10n-id="contextual-manager-alert-icon"
                  class="alert-icon"
                  src="chrome://global/skin/icons/warning-fill-12.svg"
                />`)}
          </div>
          <div class="value-container">
            ${t(this.favIcon,()=>i` <img
                  data-l10n-id="contextual-manager-website-icon"
                  class="fav-icon"
                  src=${this.favIcon}
                />`)}
            <input
              class="input-field"
              id="login-line-input"
              .value=${this.value}
              type=${this.inputType}
              readonly
            />
          </div>
        </div>
        ${t(this.#t(),()=>i`
            <div class="copy-container">
              <img
                data-l10n-id="contextual-manager-copy-icon"
                aria-labelledby="contextual-manager-copy-icon"
                class="copy-icon"
                src="chrome://global/skin/icons/edit-copy.svg"
              />
              <img
                data-l10n-id=${n(e.lineTypeIdMap[this.lineType])}
                class="check-icon"
                src="chrome://global/skin/icons/check-filled.svg"
              />
            </div>
          `)}
      </div>
    `}},f=class e extends o{static properties={value:{type:String},labelL10nId:{type:String},alert:{type:Boolean},visible:{type:Boolean},onLineClick:{type:Function},onButtonClick:{type:Function}};static CONCEALED_VALUE_TEXT=` `.repeat(8);static get queries(){return{loginLine:`login-line`,revealBtn:`moz-button`}}get#e(){return this.visible?`text`:`password`}get#t(){return this.visible?this.value:e.CONCEALED_VALUE_TEXT}get#n(){return this.visible?`contextual-manager-hide-password-button`:`contextual-manager-show-password-button`}#r(){return this.visible?`chrome://global/skin/icons/eye-slash.svg`:`chrome://global/skin/icons/eye.svg`}async#i(){if(!await this.onButtonClick())return;let e=this.#n;this.revealBtn.setAttribute(`data-l10n-id`,e),this.revealBtn.setAttribute(`aria-labelledby`,e)}render(){let e=this.alert?`contextual-manager-password-login-line-with-alert`:`contextual-manager-password-login-line`,t=this.#n;return i` <link
        rel="stylesheet"
        href="${l}"
      />
      <login-line
        role="option"
        tabindex="-1"
        data-l10n-id=${e}
        lineType="password"
        inputType=${this.#e}
        labelL10nId=${this.labelL10nId}
        .value=${this.#t}
        ?alert=${this.alert}
        .onLineClick=${this.onLineClick}
        }
      >
      </login-line>
      <div class="reveal-button-container">
        <moz-button
          role="option"
          class="reveal-button"
          type="icon ghost"
          tabindex="-1"
          data-l10n-id=${t}
          aria-labelledby=${t}
          iconSrc=${this.#r()}
          ?hidden=${!Services.policies.isAllowed(`passwordReveal`)}
          @keypress=${async e=>{e.code===`Enter`&&await this.#i()}}
          @click=${this.#i}
        ></moz-button>
      </div>`}},customElements.define(`login-line`,d),customElements.define(`concealed-login-line`,f)})))()}var m,h;function g(){return(g=e((()=>{c(),r(),a(),p(),m={ArrowUp:-1,ArrowLeft:-1,ArrowDown:1,ArrowRight:1},h=class e extends o{static DEFAULT_PASSWORD_CARD_HEIGHT=228;static WITH_ALERT_PASSWORD_CARD_HEIGHT=279;static properties={origin:{type:Object},username:{type:Object},password:{type:Object},messageToViewModel:{type:Function},reauthCommandHandler:{type:Function},onPasswordRevealClick:{type:Function},handleEditButtonClick:{type:Function},handleViewAlertClick:{type:Function}};static get queries(){return{originLine:`.line-item[linetype='origin']`,usernameLine:`.line-item[linetype='username']`,passwordLine:`concealed-login-line`,editBtn:`.edit-button`,viewAlertBtn:`.view-alert-button`}}static hasAlert({origin:e,username:t,password:n}){return e.breached||!t.value.length||n.vulnerable}static getItemHeight(t){return e.hasAlert(t)?e.WITH_ALERT_PASSWORD_CARD_HEIGHT:e.DEFAULT_PASSWORD_CARD_HEIGHT}#e;#t;#n(){return this.origin.breached+!this.username.value.length+this.password.vulnerable}async firstUpdated(){this.#t=new Map;let e=this.shadowRoot.querySelectorAll(`moz-button`),t=this.shadowRoot.querySelectorAll(`.line-item`),n=0;for(let e of t)e===this.passwordLine?(await e.updateComplete,this.#t.set(e.loginLine,n++),this.#t.set(e.revealBtn.buttonEl,n++)):this.#t.set(e,n++);for(let t of e)this.#t.set(t.buttonEl,n),n++;this.#e=Array.from(this.#t.keys())}#r(e){let t=e.composedTarget,n=this.#t.get(t),r=this.#e.length,i=t=>{let i=n+t;n!=null&&(i<0||i>=r||(this.#e[i]?.focus(),e.stopPropagation(),e.preventDefault()))},a=t===this.passwordLine.loginLine,o=t===this.passwordLine.revealBtn.buttonEl;switch(e.code){case`ArrowUp`:e.preventDefault(),o?(this.usernameLine?.focus(),e.stopPropagation()):n!=0&&i(m[e.code]);break;case`ArrowDown`:e.preventDefault(),a||o?(this.editBtn?.focus(),e.stopPropagation()):n!=r-1&&i(m[e.code]);break;case`ArrowLeft`:o&&i(m[e.code]);break;case`ArrowRight`:a?i(m[e.code]):o&&e.preventDefault()}}focusByKeyEvent(t){t.key===`ArrowUp`?e.hasAlert(this)?this.viewAlertBtn.focus():this.editBtn.focus():t.key===`ArrowDown`&&this.originLine.focus()}connectedCallback(){super.connectedCallback(),this.addEventListener(`keydown`,e=>this.#r(e),{capture:!0})}handleCommand(e,t){this.messageToViewModel(`Command`,{commandId:e,snapshotId:t})}#i(e){Glean.contextualManager.recordsInteraction.record({interaction_type:e})}async onEditButtonClick(){this.#i(`edit`),await this.reauthCommandHandler(()=>this.messageToViewModel(`Command`,{commandId:`Edit`,snapshotId:this.password.lineIndex}))&&this.handleEditButtonClick()}onViewAlertClick(){this.handleViewAlertClick(),this.#i(`view_alert`)}#a(e){this.handleCommand(`OpenLink`,e),this.#i(`url_navigate`)}#o(e){this.handleCommand(`Copy`,e)}renderOriginField(){let e=this.origin.breached?`contextual-manager-origin-login-line-with-alert`:`contextual-manager-origin-login-line`;return i`
      <login-line
        tabindex="-1"
        role="option"
        class="line-item"
        data-l10n-id=${e}
        data-l10n-args=${JSON.stringify({url:this.origin.value})}
        inputType="text"
        lineType="origin"
        labelL10nId="contextual-manager-passwords-origin-label"
        .value=${this.origin.value}
        .favIcon=${this.origin.valueIcon}
        ?alert=${this.origin.breached}
        .onLineClick=${()=>(this.#a(this.origin.lineIndex),!0)}
      >
      </login-line>
    `}renderUsernameField(){let e=this.username.value.length?`contextual-manager-username-login-line`:`contextual-manager-username-login-line-with-alert`;return i`
      <login-line
        tabindex="-1"
        role="option"
        class="line-item"
        data-l10n-id=${e}
        data-l10n-args=${JSON.stringify({username:this.username.value})}
        inputType="text"
        lineType="username"
        labelL10nId="contextual-manager-passwords-username-label"
        .value=${this.username.value}
        .onLineClick=${()=>(this.#o(this.username.lineIndex),this.#i(`copy_username`),!0)}
        ?alert=${!this.username.value.length}
      >
      </login-line>
    `}renderPasswordField(){return i`
      <concealed-login-line
        class="line-item"
        labelL10nId="contextual-manager-passwords-password-label"
        .value=${this.password.value}
        .visible=${!this.password.concealed}
        ?alert=${this.password.vulnerable}
        .onLineClick=${()=>(this.#i(`copy_password`),this.reauthCommandHandler(()=>{this.#o(this.password.lineIndex)}))}
        .onButtonClick=${()=>{let e=this.password.concealed?`view_password`:`hide_password`;return this.#i(e),this.reauthCommandHandler(()=>this.onPasswordRevealClick(this.password.concealed,this.password.lineIndex))}}
      >
      </concealed-login-line>
    `}renderButton(){return i`<div class="edit-line-container" role="option">
      <moz-button
        tabindex="-1"
        data-l10n-id="contextual-manager-edit-login-button"
        class="edit-button"
        @click=${this.onEditButtonClick}
      ></moz-button>
    </div>`}renderViewAlertField(){let t=JSON.stringify({count:this.#n()});return e.hasAlert(this)?i`
      <moz-message-bar
        type="warning"
        data-l10n-id="contextual-manager-view-alert-heading-2"
        data-l10n-args=${t}
      >
        <moz-button
          class="view-alert-button"
          data-l10n-id="contextual-manager-view-alert-button-2"
          data-l10n-args=${t}
          tabindex="-1"
          slot="actions"
          type="icon"
          iconSrc=${document.dir===`rtl`?`chrome://browser/skin/back.svg`:`chrome://browser/skin/forward.svg`}
          @click=${this.onViewAlertClick}
        >
        </moz-button>
      </moz-message-bar>
    `:``}render(){return i`
      <link
        rel="stylesheet"
        href="${s}"
      />
      ${this.renderOriginField()} ${this.renderUsernameField()}
      ${this.renderPasswordField()} ${this.renderButton()}
      ${this.renderViewAlertField()}
    `}},customElements.define(`password-card`,h)})))()}var _,v,y,b;function x(){return(x=e((()=>{r(),g(),_={title:`Domain-specific UI Widgets/Credential Management/Password Card`,component:`PasswordCard`,argTypes:{website:{control:{type:`object`}},username:{control:{type:`object`}},password:{control:{type:`object`}}}},window.MozXULElement.insertFTLIfNeeded(`browser/contextual-manager.ftl`),v=({website:e,username:t,password:n})=>i`
    <password-card
      role="group"
      .origin=${e}
      .username=${t}
      .password=${n}
      .messageToViewModel=${()=>{}}
      .reauthCommandHandler=${()=>!0}
    >
    </password-card>
  `,y=v.bind({}),y.args={website:{value:`website.com`,breached:!1,valueIcon:`chrome://global/skin/icons/defaultFavicon.svg`},username:{value:`username`},password:{value:`password`,vulnerable:!1,concealed:!0}},b=v.bind({}),b.args={website:{value:`website.com`,breached:!0,valueIcon:`chrome://global/skin/icons/defaultFavicon.svg`},username:{value:``},password:{value:`password`,vulnerable:!0,concealed:!0}}})))()}x();export{b as AllAlertsOn,y as Default,_ as default};