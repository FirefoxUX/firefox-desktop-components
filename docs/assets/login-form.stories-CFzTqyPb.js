import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{S as t,d as n,f as r,u as i}from"./lit.all-Co4HOUmF.js";import{c as a,o}from"./iframe-ChCqHcnv.js";import{n as s}from"./moz-input-text-VrGVAnuy.js";import{t as c}from"./moz-input-url-BFVw4vce.js";import{t as l}from"./moz-input-password-CNxX_vic.js";var u;function d(){return(d=e((()=>{u=new URL(`login-form-DEVrbXHB.css`,import.meta.url).href+``})))()}var f;function p(){return(p=e((()=>{f=new URL(`login-message-popup-DXFOKw_I.css`,import.meta.url).href+``})))()}var m,h,g,_;function v(){return(v=e((()=>{p(),r(),a(),m=()=>i` <link
    rel="stylesheet"
    href="${f}"
  />`,h=({l10nid:e,message:t,webTitle:r=``,role:a})=>i` <div class="tooltip-container" role=${n(a)}>
    <div class="arrow-box">
      <p
        class="tooltip-message"
        data-l10n-id=${n(e)}
        data-l10n-args=${JSON.stringify({webTitle:r})}
      >
        ${n(t)}
      </p>
    </div>
  </div>`,g=class extends o{static get properties(){return{isNewLogin:{type:Boolean,reflect:!0},webTitle:{type:String,reflect:!0},arrowDirection:{type:String},message:{type:String},role:{type:String}}}constructor(){super(),this.isNewLogin=!1,this.arrowDirection=`left`}render(){return this.message?i`${m()}
      ${h({message:this.message,role:this.role})}`:this.isNewLogin?i`${m()}
        ${h({l10nid:`about-logins-add-password-tooltip`,role:this.role})}`:i`${m()}
        ${h({l10nid:`about-logins-edit-password-tooltip`,webTitle:this.webTitle,role:this.role})}`}},_=class extends o{static get properties(){return{l10nId:{type:String},message:{type:String},arrowDirection:{type:String},role:{type:String}}}constructor(){super(),this.arrowDirection=`left`}render(){return i`${m()}
    ${h({l10nid:this.l10nId,message:this.message,role:this.role})}`}},customElements.define(`password-warning`,g),customElements.define(`origin-warning`,_)})))()}var y;function b(){return(b=e((()=>{d(),r(),a(),c(),s(),l(),v(),y=class extends o{static properties={type:{type:String,reflect:!0},onSaveClick:{type:Function},onDeleteClick:{type:Function},onClose:{type:Function},onOriginClick:{type:Function},originValue:{type:String},usernameValue:{type:String},passwordValue:{type:String},passwordVisible:{type:Boolean},perDeviceSyncEnabled:{type:Boolean},_showDeleteCard:{type:Boolean,state:!0},_originInvalid:{type:Boolean,state:!0},_passwordInvalid:{type:Boolean,state:!0}};static queries={formEl:`form`,originField:`moz-input-url`,usernameField:`moz-input-text`,passwordField:`moz-input-password`,originWarning:`origin-warning`,passwordWarning:`password-warning`};constructor(){super(),this.originValue=``,this.usernameValue=``,this.passwordValue=``,this.perDeviceSyncEnabled=!1,this._showDeleteCard=!1,this._originInvalid=!1,this._passwordInvalid=!1}async firstUpdated(){let e=this.shadowRoot.querySelector(`moz-button-group`);await e.updateComplete,this.#i(e),await this.passwordField.updateComplete,this.passwordField.inputEl.setAttribute(`aria-required`,`true`),this.originField&&(await this.originField.updateComplete,this.originField.inputEl.setAttribute(`aria-required`,`true`))}#e(){Services.policies.isAllowed(`passwordReveal`)&&(this.passwordField.inputEl.type=`text`)}#t(){this.passwordField.inputEl.type=`password`}#n(){let e=this.originField;if(!e)return``;let t=e.inputEl,n=(t?.value??e.value).trim(),r=n&&!n.match(/:\/\//)?`https://${n}`:n;return e.value!==r&&(e.value=r),t&&(t.value!==r&&(t.value=r),this._originInvalid=!t.checkValidity(),this._originInvalid||(this.#a(this.originWarning),t.removeAttribute(`aria-describedby`))),r}#r(){return i`
      <div class="origin-field-readonly">
        <label
          for="origin-link"
          class="field-label"
          data-l10n-id="login-item-origin-label"
        ></label>
        <a
          id="origin-link"
          class="origin-input"
          dir="auto"
          target="_blank"
          rel="noreferrer"
          href=${this.originValue}
          @click=${this.onOriginClick}
        >
          ${this.originValue}
        </a>
      </div>
    `}#i(e){let t=e=>{if(e.key!==`Tab`)return;let t=this.parentElement.querySelector(`notification-message-bar`);if(!t)return;e.preventDefault();let n=t.shadowRoot.querySelector(`moz-message-bar`),r=n.querySelector(`moz-button-group`);r?r.shadowRoot.querySelector(`slot`).assignedElements()[0].focus():n.querySelector(`#primary-action`).focus()},n=e.shadowRoot.querySelectorAll(`slot`);n[n.length-1].assignedElements()[0].addEventListener(`keydown`,e=>t(e))}#a(e){e.classList.contains(`invalid-input`)&&e.classList.remove(`invalid-input`)}#o(e,t){let n=e.inputEl;n.required=!0;let r=t===this.originWarning?this._originInvalid:this._passwordInvalid;return!n.checkValidity()||r?(e.value=``,n.value=``,n.focus(),t.setAttribute(`message`,n.validationMessage),t.classList.add(`invalid-input`),n.setAttribute(`aria-describedby`,t.id),t===this.originWarning?this._originInvalid=!0:t===this.passwordWarning&&(this._passwordInvalid=!0),!0):(n.removeAttribute(`aria-describedby`),this.#a(t),t===this.originWarning?this._originInvalid=!1:t===this.passwordWarning&&(this._passwordInvalid=!1),!1)}onInput(e){let t=e.target,n=t.name===`origin`?this.originWarning:this.passwordWarning;t.inputEl.required=!0;let r=t.inputEl.checkValidity();r&&(this.#a(n),t.inputEl.removeAttribute(`aria-describedby`)),t.name===`origin`?this._originInvalid=!r:t.name===`password`&&(this._passwordInvalid=!r)}onCancel(e){e.preventDefault();let t={origin:this.originValue||this.originField?.value,username:this.usernameField.value.trim(),password:this.passwordField.value};this.onClose(t)}onSubmit(e){e.preventDefault();let t=this.originValue||this.#n();if(!this.#s())return;let n={origin:t,username:this.usernameField.value.trim(),password:this.passwordField.value};this.onSaveClick(n)}#s(){let e=!1,t=!1;return t=this.#o(this.passwordField,this.passwordWarning),this.type!==`edit`&&(e=this.#o(this.originField,this.originWarning)),!(t||e)}#c(){this._showDeleteCard=!this._showDeleteCard}#l(){return i` <link
        rel="stylesheet"
        href="${u}"
      />
      <moz-card class="remove-login-card">
        <div class="remove-card-back">
          <moz-button
            type="icon ghost"
            iconSrc=${document.dir===`rtl`?`chrome://browser/skin/forward.svg`:`chrome://browser/skin/back.svg`}
            data-l10n-id="contextual-manager-passwords-remove-login-card-back-message"
            @click=${this.#c}
          >
          </moz-button>
        </div>
        <div class="remove-card-text">
          <h3
            data-l10n-id=${this.perDeviceSyncEnabled?`contextual-manager-passwords-delete-login-card-title`:`contextual-manager-passwords-remove-login-card-title`}
          ></h3>
          <p
            data-l10n-id="contextual-manager-passwords-remove-login-card-message"
          ></p>
        </div>
        <moz-button-group>
          <moz-button
            data-l10n-id="contextual-manager-passwords-remove-login-card-cancel-button"
            @click=${this.#c}
          >
          </moz-button>
          <moz-button
            type="destructive"
            data-l10n-id=${this.perDeviceSyncEnabled?`contextual-manager-passwords-delete-login-card-delete-button`:`contextual-manager-passwords-remove-login-card-remove-button`}
            @click=${this.onDeleteClick}
          >
          </moz-button>
        </moz-button-group>
      </moz-card>`}render(){if(this._showDeleteCard)return this.#l();let e=this.type===`edit`?`contextual-manager-passwords-update-label`:`contextual-manager-passwords-create-label`;return i`<link
        rel="stylesheet"
        href="${u}"
      />
      <moz-card>
        ${t(this.type===`edit`,()=>i`
            <div class="delete-login-button-container">
              <moz-button
                class="delete-login-button"
                data-l10n-id=${this.perDeviceSyncEnabled?`contextual-manager-passwords-delete-label`:`contextual-manager-passwords-remove-label`}
                type="icon"
                iconSrc="chrome://global/skin/icons/delete.svg"
                @click=${this.#c}
              ></moz-button>
            </div>
          `)}

        <form
          role="region"
          aria-labelledby="moz-fieldset-id"
          @submit=${e=>this.onSubmit(e)}
        >
          <moz-fieldset id="moz-fieldset-id" data-l10n-id=${e}>
            ${this.type===`edit`?this.#r():i`
                  <div class="field-container">
                    <moz-input-url
                      name="origin"
                      aria-describedby="origin-description"
                      data-l10n-id="contextual-manager-passwords-origin-field"
                      .value=${this.originValue}
                      @input=${e=>this.onInput(e)}
                      @change=${()=>this.#n()}
                    ></moz-input-url>
                    <p
                      id="origin-description"
                      role="note"
                      class="field-description"
                      data-l10n-id="contextual-manager-passwords-origin-field-description"
                    ></p>
                    <origin-warning
                      id="origin-alert"
                      role="alert"
                      arrowdirection="down"
                    ></origin-warning>
                  </div>
                `}
            <div class="field-container">
              <moz-input-text
                name="username"
                aria-describedby="username-description"
                data-l10n-id="contextual-manager-passwords-username-field"
                .value=${this.usernameValue}
              ></moz-input-text>
              <p
                id="username-description"
                role="note"
                class="field-description"
                data-l10n-id="contextual-manager-passwords-username-field-description"
              ></p>
            </div>
            <div class="field-container">
              <moz-input-password
                name="password"
                aria-describedby="password-description"
                data-l10n-id="contextual-manager-passwords-password-field"
                .value=${this.passwordValue}
                @input=${e=>this.onInput(e)}
                @focusin=${()=>this.#e()}
                @focusout=${()=>this.#t()}
              ></moz-input-password>
              <p
                id="password-description"
                role="note"
                class="field-description"
                data-l10n-id="contextual-manager-passwords-password-field-description"
              ></p>
              <password-warning
                id="password-alert"
                role="alert"
                isNewLogin
                arrowdirection="down"
              ></password-warning>
            </div>
            <moz-button-group>
              <moz-button
                data-l10n-id="login-item-cancel-button"
                @click=${this.onCancel}
              ></moz-button>
              <moz-button
                data-l10n-id="login-item-save-new-button"
                type="primary"
                @click=${()=>this.formEl.requestSubmit()}
              >
              </moz-button>
            </moz-button-group>
          </moz-fieldset>
        </form>
      </moz-card>`}},customElements.define(`login-form`,y)})))()}var x,S,C;function w(){return(w=e((()=>{r(),b(),x={title:`Domain-specific UI Widgets/Credential Management/Login Form`,component:`login-form`},window.MozXULElement.insertFTLIfNeeded(`browser/contextual-manager.ftl`),S=()=>i`<login-form type="add"></login-form>`,C=()=>i`<login-form type="edit"></login-form>`})))()}w();export{S as AddLoginForm,C as EditLoginForm,x as default};