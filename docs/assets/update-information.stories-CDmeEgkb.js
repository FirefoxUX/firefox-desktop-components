import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,f as n,u as r}from"./lit.all-Co4HOUmF.js";import{n as i,t as a}from"./_firefox-storybook_moz-css-url_e0b8cc3e5381bdfb9691f06cc29f273aae494deefbbec62135173ebbc273b74d-_rMXgSdb.js";import{c as o,o as s}from"./iframe-ChCqHcnv.js";var c;function l(){return(l=e((()=>{c=new URL(`update-information-BRjNaR96.css`,import.meta.url).href+``})))()}var u;function d(){return(d=e((()=>{i(),l(),o(),n(),u=class extends s{static properties={version:{type:String},distribution:{type:String},distributionId:{type:String},releaseNotesURL:{type:String}};constructor(){super(),this.version=``,this.distribution=``,this.distributionId=``,this.releaseNotesURL=``}labelTemplate(){return this.version?r`<div class="label-wrapper">
      <span
        class="label"
        id="label"
        data-l10n-id="update-application-version"
        data-l10n-args=${JSON.stringify({version:this.version})}
      >
        <a
          id="releasenotes"
          target="_blank"
          aria-describedby="label"
          data-l10n-name="learn-more"
          href=${this.releaseNotesURL}
          part="support-link"
          ?hidden=${!this.releaseNotesURL}
        ></a>
      </span>
    </div>`:``}descriptionTemplate(){return!this.distribution&&!this.distributionId?``:r`<div class="description-wrapper text-deemphasized">
      <span class="description" id="distribution"> ${this.distribution}</span>
      <span class="description" id="distributionId">
        ${this.distributionId}</span
      >
    </div>`}render(){return r`
      <link
        rel="stylesheet"
        href="${c}"
      />
      <link
        rel="stylesheet"
        href="${a}"
      />
      <moz-box-item>
        <div class="text-container">
          ${this.labelTemplate()} ${this.descriptionTemplate()}
        </div>
      </moz-box-item>
    `}},customElements.define(`update-information`,u)})))()}var f,p,m;function h(){return(h=e((()=>{n(),d(),f={title:`Domain-specific UI Widgets/Settings/Update Information`,component:`update-information`,parameters:{status:`in-development`}},p=({version:e=``,distribution:n=``,distributionId:i=``,releaseNotesURL:a=``})=>r`
  <div style="max-width: 500px">
    <update-information
      version=${t(e)}
      distribution=${t(n)}
      distributionId=${t(i)}
      releaseNotesURL=${t(a)}
    ></update-information>
  </div>
`,m=p.bind({}),m.args={version:`149.0a1 (2026-01-30) (64-bit)`,distribution:`distribution about text`,distributionId:`distribution id`,releaseNotesURL:`https://www.firefox.com/en-US/releases/`}})))()}h();export{m as Default,f as default};