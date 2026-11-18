import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,u as n}from"./lit.all-Co4HOUmF.js";import{c as r,o as i}from"./iframe-DP8hlEO7.js";var a;function o(){return(o=e((()=>{a=new URL(`password-validation-inputs-BUeZEXG1.css`,import.meta.url).href+``})))()}var s;function c(){return(c=e((()=>{s=new URL(`password-rules-tooltip-COpZ7Ph-.css`,import.meta.url).href+``})))()}var l;function u(){return(u=e((()=>{c(),t(),r(),l=class extends i{static properties={hasEmail:{type:Boolean},tooShort:{type:Boolean},open:{type:Boolean}};static get queries(){return{passwordRulesEl:`#password-rules-wrapper`}}constructor(){super(),this.hasEmail=!1,this.tooShort=!1,this._onResize=null}_debounce(e,t){let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>e(...r),t)}}_handleResize(){this.open&&this.positionPopover()}connectedCallback(){super.connectedCallback(),this._onResize=this._debounce(()=>this._handleResize(),200),window.addEventListener(`resize`,this._onResize)}disconnectedCallback(){super.disconnectedCallback(),this._onResize&&window.removeEventListener(`resize`,this._onResize)}show(){this.passwordRulesEl.showPopover(),this.positionPopover()}hide(){this.passwordRulesEl.hidePopover()}positionPopover(){let e=this.getBoundingClientRect(),t=this.passwordRulesEl,n=window.innerWidth>=1200,r=document.dir===`rtl`,i=n?e.top+e.height/2:e.bottom;t.style.top=`${i}px`,t.style.right=r?`auto`:`inherit`,t.style.left=r?`inherit`:`auto`}_onBeforeToggle(e){this.open=e.newState==`open`}render(){return n`
      <link
        rel="stylesheet"
        href="${s}"
      />
      <div
        id="password-rules-wrapper"
        role="tooltip"
        aria-describedby="password-rules-header"
        popover="manual"
        @beforetoggle=${this._onBeforeToggle}
      >
        <h2
          id="password-rules-header"
          data-l10n-id="password-rules-header"
        ></h2>
        <ul>
          <li class=${this.tooShort&&`warning`}>
            <span
              data-l10n-id="password-rules-length-description"
              class="rule-description"
              aria-labelledby="password-rules-header"
            ></span>
          </li>
          <li class=${this.hasEmail&&`warning`}>
            <span
              data-l10n-id="password-rules-email-description2"
              class="rule-description"
              aria-labelledby="password-rules-header"
            ></span>
          </li>
        </ul>
      </div>
    `}},customElements.define(`password-rules-tooltip`,l)})))()}var d;function f(){return(f=e((()=>{o(),t(),r(),u(),d=class extends i{static properties={_hasEmail:{type:Boolean,state:!0},_passwordsMatch:{type:Boolean,state:!0},_passwordsValid:{type:Boolean,state:!0},_tooShort:{type:Boolean,state:!0},createPasswordLabelL10nId:{type:String,reflect:!0,attribute:`create-password-label-l10n-id`},embeddedFxBackupOptIn:{type:Boolean,reflect:!0,attribute:`embedded-fx-backup-opt-in`}};static get queries(){return{formEl:`#password-inputs-form`,inputNewPasswordEl:`#new-password-input`,inputRepeatPasswordEl:`#repeat-password-input`,passwordRulesEl:`#password-rules`,repeatPasswordErrorEl:`#repeat-password-error`}}constructor(){super(),this._tooShort=!0,this._hasEmail=!1,this._passwordsMatch=!1,this._passwordsValid=!1}connectedCallback(){super.connectedCallback(),this._onKeydown=e=>{e.key===`Escape`&&this.passwordRulesEl.open&&(this.passwordRulesEl.hide(),e.stopPropagation(),e.preventDefault())},document.addEventListener(`keydown`,this._onKeydown,!0)}disconnectedCallback(){document.removeEventListener(`keydown`,this._onKeydown,!0),super.disconnectedCallback()}setInputValidity(e,t,n=null){e.setAttribute(`aria-invalid`,t?`false`:`true`),n?e.setAttribute(`aria-describedby`,n):e.removeAttribute(`aria-describedby`)}reset(){this.formEl?.reset(),this.inputNewPasswordEl&&(this.inputNewPasswordEl.revealPassword=!1,this.setInputValidity(this.inputNewPasswordEl,!0)),this.inputRepeatPasswordEl&&(this.inputRepeatPasswordEl.revealPassword=!1,this.setInputValidity(this.inputRepeatPasswordEl,!0)),this._hasEmail=!1,this._tooShort=!0,this._passwordsMatch=!1,this._passwordsValid=!1,this.passwordRulesEl.hide()}handleFocusNewPassword(){this.passwordRulesEl.show()}handleBlurNewPassword(e){e.target.checkValidity()&&this.passwordRulesEl.hide()}handleChangeNewPassword(){this.updatePasswordValidity()}handleChangeRepeatPassword(){this.updatePasswordValidity()}updatePasswordValidity(){let e=/^[\w!#$%&'*+/=?^`{|}~.-]+@[A-Z0-9-]+\.[A-Z0-9.-]+$/i,t=new Localization([`browser/backupSettings.ftl`],!0);if(this._hasEmail=e.test(this.inputNewPasswordEl.value),this._hasEmail){let e=t.formatValueSync(`password-validity-has-email`);this.inputNewPasswordEl.setCustomValidity(e)}else this.inputNewPasswordEl.setCustomValidity(``);let n=this.inputNewPasswordEl.validity;this._tooShort=n?.valueMissing||n?.tooShort;let r=!n?.valid;this.setInputValidity(this.inputNewPasswordEl,!r,`password-rules-tooltip`),this._passwordsMatch=this.inputNewPasswordEl.value==this.inputRepeatPasswordEl.value,this._passwordsMatch?(this.inputRepeatPasswordEl.setCustomValidity(``),this.setInputValidity(this.inputRepeatPasswordEl,!0)):(this.inputRepeatPasswordEl.setCustomValidity(t.formatValueSync(`password-validity-do-not-match`)),this.setInputValidity(this.inputRepeatPasswordEl,!1,`repeat-password-error`),document.l10n.setAttributes(this.repeatPasswordErrorEl,`password-validity-do-not-match`));let i=this.inputRepeatPasswordEl.validity;this._passwordsValid=n?.valid&&i?.valid&&this._passwordsMatch}updated(e){e.has(`_passwordsValid`)&&(this._passwordsValid?this.dispatchEvent(new CustomEvent(`ValidPasswordsDetected`,{bubbles:!0,composed:!0,detail:{password:this.inputNewPasswordEl.value}})):this.dispatchEvent(new CustomEvent(`InvalidPasswordsDetected`,{bubbles:!0,composed:!0})))}contentTemplate(){return n`
      <div id="password-inputs-wrapper">
        <form id="password-inputs-form">
          <!--TODO: (bug 1909983) change first input field label for the "change-password" dialog-->
          <label id="new-password-label" for="new-password-input">
            <div id="new-password-label-wrapper-span-input">
              <span
                id="new-password-span"
                data-l10n-id=${this.createPasswordLabelL10nId||`enable-backup-encryption-create-password-label`}
              ></span>
              <input
                type="password"
                id="new-password-input"
                minlength="8"
                required
                aria-describedby="password-rules"
                @input=${this.handleChangeNewPassword}
                @blur=${this.handleBlurNewPassword}
                @mouseenter=${this.handleFocusNewPassword}
                @focus=${this.handleFocusNewPassword}
              />
              <!--TODO: (bug 1909984) improve how we read out the first input field for screen readers-->
            </div>
          </label>
          <!--TODO: (bug 1909984) look into how the tooltip vs dialog behaves when pressing the ESC key-->
          <password-rules-tooltip
            id="password-rules"
            role="tooltip"
            .hasEmail=${this._hasEmail}
            .tooShort=${this._tooShort}
            ?embedded-fx-backup-opt-in=${this.embeddedFxBackupOptIn}
          ></password-rules-tooltip>
          <label id="repeat-password-label" for="repeat-password-input">
            <span
              id="repeat-password-span"
              data-l10n-id="enable-backup-encryption-repeat-password-label"
            ></span>
            <input
              type="password"
              id="repeat-password-input"
              required
              @input=${this.handleChangeRepeatPassword}
            />
            <span
              id="repeat-password-error"
              role="alert"
              class="field-error"
            ></span>
          </label>
        </form>
      </div>
    `}render(){return n`
      <link
        rel="stylesheet"
        href="${a}"
      />
      ${this.contentTemplate()}
    `}},customElements.define(`password-validation-inputs`,d)})))()}export{f as t};