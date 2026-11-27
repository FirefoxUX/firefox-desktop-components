import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,u as n}from"./lit.all-Co4HOUmF.js";import{c as r,o as i}from"./iframe-17211AdQ.js";var a;function o(){return(o=e((()=>{a=``+new URL(`breach-alert-panel-B_4PbY7t.css`,import.meta.url).href})))()}var s;function c(){return(c=e((()=>{o(),t(),r(),s=class extends i{static properties={hidden:{type:Boolean,reflect:!0},breachStatus:{type:String},breachNames:{type:Array}};constructor(){super(),this.hidden=!1,this.breachStatus=`disabled`}async _handleCta(e){Glean.trustpanel.breachAlertDiscoveredMonitor.record(),this.dispatchEvent(new CustomEvent(`breachAlertMonitorOpened`,{bubbles:!0,composed:!0})),this.documentGlobal.switchToTabHavingURI(`https://monitor.mozilla.org/?utm_medium=referral&utm_source=firefox-desktop&utm_campaign=privacy-panel&utm_content=sign-up-global`,!0),await this._dismissBreach(),this.hidden=!0}async _handleDismiss(e){Glean.trustpanel.breachAlertDismissed.record({breach_status:this.breachStatus}),await this._dismissBreach(),this.hidden=!0}async _dismissBreach(){this.breachNames?this.dispatchEvent(new CustomEvent(`dismissBreachAlert`,{detail:{breachNames:this.breachNames},bubbles:!0,composed:!0})):console.warn(`Cannot dismiss breach alert: no breach names provided`)}render(){return this.breachStatus===`disabled`||this.breachStatus===`not-breached`?null:n`
      <link
        rel="stylesheet"
        href="${a}"
      />
      <div class="container" ?hidden=${this.hidden}>
        <moz-card>
          <div class="card">
            <div class="main">
              <img
                class="fox-icon-legacy"
                src="chrome://browser/content/controlcenter/assets/fox-concern.svg"
                alt=""
              />
              <div class="content">
                <h2
                  class="heading"
                  data-l10n-id="trustpanel-breachalerts-anonymous-breached-header"
                ></h2>
                <p
                  data-l10n-id="trustpanel-breachalerts-anonymous-breached-description"
                ></p>
              </div>
              <img
                class="shield-icon"
                src="chrome://browser/content/controlcenter/assets/breach-alert-shield-warning.svg"
                alt=""
              />
            </div>
            <moz-button-group class="action-buttons">
              <moz-button
                @click=${this._handleDismiss}
                data-l10n-id="trustpanel-breachalerts-anonymous-breached-button-dismiss"
              ></moz-button>
              <moz-button
                type="primary"
                @click=${this._handleCta}
                data-l10n-id="trustpanel-breachalerts-anonymous-breached-button-check-monitor"
              ></moz-button>
            </moz-button-group>
          </div>
        </moz-card>
      </div>
    `}},customElements.define(`breach-alert-panel`,s)})))()}var l,u;function d(){return(d=e((()=>{t(),c(),l={title:`Domain-specific UI Widgets/Trust Panel/Breach Alert`,component:`breach-alert-panel`},window.MozXULElement.insertFTLIfNeeded(`branding/brand.ftl`),window.MozXULElement.insertFTLIfNeeded(`toolkit/branding/brandings.ftl`),window.MozXULElement.insertFTLIfNeeded(`browser/browser.ftl`),u=({hidden:e,breachStatus:t})=>n`
    <breach-alert-panel ?hidden=${e} .breachStatus=${t}>
    </breach-alert-panel>
  `,u.argTypes={hidden:{defaultValue:!1,type:`boolean`},breachStatus:{defaultValue:`breached`,type:{name:`enum`,value:[`disabled`,`breached`,`not-breached`]}}}})))()}d();export{u as AnonymousBreachAlert,l as default};