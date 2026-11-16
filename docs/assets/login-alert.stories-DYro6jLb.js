import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,d as n,f as r,u as i}from"./lit.all-BYVOqvrj.js";import{c as a,o}from"./iframe-B6GfsneT.js";var s;function c(){return(c=e((()=>{s=new URL(`login-alert-D8eiE7ID.css`,import.meta.url).href+``})))()}var l,u,d;function f(){return(f=e((()=>{c(),r(),a(),l=class extends o{static get properties(){return{variant:{type:String,reflect:!0},icon:{type:String},titleId:{type:String}}}render(){return i`
      <link
        rel="stylesheet"
        href="${s}"
      />
      <img src=${n(this.icon)} />
      <h3 data-l10n-id=${n(this.titleId)}></h3>
      <div>
        <slot name="action"></slot>
      </div>
      <slot name="content"></slot>
    `}},u=class extends o{static get properties(){return{hostname:{type:String,reflect:!0},changePasswordURL:{type:String}}}constructor(){super(),this.hostname=``,this.changePasswordURL=``}render(){return i`
      <link
        rel="stylesheet"
        href="${s}"
      />
      <login-alert
        variant="info"
        icon="chrome://browser/content/aboutlogins/icons/vulnerable-password.svg"
        titleId="about-logins-vulnerable-alert-title"
      >
        <div slot="content">
          <span
            class="alert-text"
            data-l10n-id="about-logins-vulnerable-alert-text2"
          ></span>
          <a
            class="alert-link"
            data-l10n-id="about-logins-vulnerable-alert-link"
            data-l10n-args=${JSON.stringify({hostname:this.hostname})}
            href=${this.changePasswordURL||this.hostname}
            rel="noreferrer"
            target="_blank"
          ></a>
        </div>
        <a
          slot="action"
          class="alert-learn-more-link"
          data-l10n-id="about-logins-vulnerable-alert-learn-more-link"
          href="https://support.mozilla.org/1/firefox/114.0.1/Darwin/en-CA/lockwise-alerts"
          rel="noreferrer"
          target="_blank"
        ></a>
      </login-alert>
    `}},d=class extends o{static get properties(){return{date:{type:Number,reflect:!0},hostname:{type:String,reflect:!0},breachName:{type:String,reflect:!0},changePasswordURL:{type:String}}}constructor(){super(),this.date=0,this.hostname=``,this.breachName=``,this.changePasswordURL=``}get displayHostname(){return URL.parse(this.hostname)?.hostname??this.hostname}handleBreachLinkClick(){document.dispatchEvent(new CustomEvent(`AboutLoginsRecordTelemetryEvent`,{bubbles:!0,detail:{name:`breachAlertLinkClicked`,extra:{breach_name:this.breachName||this.displayHostname}}}))}render(){return i`
      <link
        rel="stylesheet"
        href="${s}"
      />
      <login-alert
        variant="error"
        icon="chrome://browser/content/aboutlogins/icons/breached-website.svg"
        titleId="about-logins-breach-alert-title"
      >
        <div slot="content">
          <h4
            data-l10n-id="about-logins-breach-alert-date"
            data-l10n-args=${JSON.stringify({date:this.date})}
          ></h4>
          <span data-l10n-id="breach-alert-text"></span>
          <a
            data-l10n-id="about-logins-breach-alert-link"
            data-l10n-args=${t([this.hostname],()=>JSON.stringify({hostname:this.displayHostname}))}
            href=${this.changePasswordURL||this.hostname}
            rel="noreferrer"
            target="_blank"
            @click=${this.handleBreachLinkClick}
          ></a>
        </div>
      </login-alert>
    `}},customElements.define(`login-vulnerable-password-alert`,u),customElements.define(`login-breach-alert`,d),customElements.define(`login-alert`,l)})))()}var p,m,h,g;function _(){return(_=e((()=>{r(),f(),p={title:`Domain-specific UI Widgets/Credential Management/Login Alert`,component:`login-alert`},window.MozXULElement.insertFTLIfNeeded(`browser/aboutLogins.ftl`),m=({variant:e,icon:t})=>i`
    <login-alert
      .variant=${e}
      .icon=${t}
      titleId="about-logins-login-intro-heading-message"
    >
      <a slot="action"> Some action </a>
      <div slot="content">
        Alert extra content, could be a description for more context.
      </div>
    </login-alert>
  `,m.argTypes={variant:{options:[`info`,`error`,`warning`],control:{type:`radio`},defaultValue:`info`},icon:{options:{info:`chrome://global/skin/icons/info-filled.svg`,"breached-website":`chrome://browser/content/aboutlogins/icons/breached-website.svg`,"vulnerable-password":`chrome://browser/content/aboutlogins/icons/vulnerable-password.svg`},control:{type:`select`},defaultValue:`chrome://global/skin/icons/info-filled.svg`}},h=({hostname:e})=>i`
  <login-vulnerable-password-alert
    .hostname=${e}
  ></login-vulnerable-password-alert>
`,h.args={hostname:`https://www.example.com`},g=({date:e,hostname:t})=>i`
  <login-breach-alert .date=${e} .hostname=${t}></login-breach-alert>
`,g.argTypes={date:{control:{type:`date`},defaultValue:1684849435571},hostname:{control:{type:`text`},defaultValue:`https://www.example.com`}}})))()}_();export{m as BasicLoginAlert,g as LoginBreachAlert,h as VulnerablePasswordAlert,p as default};