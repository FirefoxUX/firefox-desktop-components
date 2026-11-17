import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,f as n,l as r,m as i,u as a}from"./lit.all-Co4HOUmF.js";import{c as o,o as s}from"./iframe-ChCqHcnv.js";var c;function l(){return(l=e((()=>{c=new URL(`nav-notice-BxhNBj-Z.css`,import.meta.url).href+``})))()}var u;function d(){return(d=e((()=>{l(),n(),o(),u=class extends s{static properties={href:{type:String},iconSrc:{type:String},label:{type:String,fluent:!0},supportPage:{type:String,attribute:`support-page`},theme:{type:Object}};static queries={boxEl:`moz-box-link, moz-box-item`};willUpdate(e){e.has(`theme`)&&(this.theme?.themeBg&&this.theme?.themeFg?(this.style.setProperty(`--theme-bg-color`,this.theme.themeBg),this.style.setProperty(`--theme-fg-color`,this.theme.themeFg)):(this.style.removeProperty(`--theme-bg-color`),this.style.removeProperty(`--theme-fg-color`)))}render(){let e=this.href?i`moz-box-link`:i`moz-box-item`;return r`<link
        rel="stylesheet"
        href="${c}"
      />
      <${e} iconsrc=${this.iconSrc} label=${this.label} href=${t(this.href)} support-page=${t(this.supportPage)}></${e}>`}},customElements.define(`nav-notice`,u)})))()}var f,p,m,h,g,_,v;function y(){return(y=e((()=>{n(),d(),f={Default:{},Magenta:{themeBg:`hsla(335, 91%,75%, 1)`,themeFg:`hsla(0, 0%, 0%, 1)`},"Ocean Blue":{themeBg:`hsla(234, 90%, 19%, 1)`,themeFg:`hsla(0, 0%, 100%, 1)`},"Marigold Yellow":{themeBg:`hsla(45, 92%, 77%, 1)`,themeFg:`hsla(0, 0%, 0%, 1)`},"Brick Red":{themeBg:`hsla(11, 87%, 32%, 1)`,themeFg:`hsla(0, 0%, 100%, 1)`}},p={title:`Domain-specific UI Widgets/Settings/Nav Notice`,component:`nav-notice`,argTypes:{theme:{options:Object.keys(f),mapping:f,control:`select`}},parameters:{status:`in-development`,fluent:`
enterprise-notice =
  .label = Your browser is being managed by your organization
profile-notice =
  .label = Original profile
page-nav =
  .heading = Settings
search-placeholder =
  .placeholder = Search settings
account-sync = Account and sync
  .title = Account and sync
home-startup = Home and startup
  .title = Home and startup
search = Search
  .title = Search
`}},m=e=>a`<style>
      moz-page-nav {
        max-width: 254px;
      }
    </style>
    <moz-page-nav data-l10n-id="page-nav">
      <moz-input-search
        slot="subheading"
        data-l10n-id="search-placeholder"
      ></moz-input-search>
      ${g({slot:`subheading`,...g.args})}
      ${_({slot:`subheading`,theme:e,..._.args})}
      <moz-page-nav-button view="view-one" data-l10n-id="account-sync">
      </moz-page-nav-button>
      <moz-page-nav-button view="view-two" data-l10n-id="home-startup">
      </moz-page-nav-button>
      <moz-page-nav-button view="view-three" data-l10n-id="search">
      </moz-page-nav-button>
    </moz-page-nav>`,h=({iconSrc:e,href:n,l10nId:r,inPageNav:i,theme:o,slot:s})=>i?m(o):a`
    <nav-notice
      iconsrc=${e}
      href=${t(n)}
      data-l10n-id=${r}
      slot=${t(s)}
      .theme=${o}
    ></nav-notice>
  `,g=h.bind({}),g.args={l10nId:`enterprise-notice`,iconSrc:`chrome://global/skin/icons/rating-star.svg#full`,href:``,inPageNav:!1,theme:f.Default},_=h.bind({}),_.args={...g.args,l10nId:`profile-notice`,iconSrc:`chrome://global/skin/icons/highlights.svg`,href:`about:profiles`},v=h.bind({}),v.args={inPageNav:!0}})))()}y();export{g as EnterpriseNotice,v as InPageNav,_ as ProfileNotice,p as default};