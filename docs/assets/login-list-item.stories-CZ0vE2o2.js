import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{S as t,f as n,i as r,r as i,u as a}from"./lit.all-Co4HOUmF.js";import{c as o,o as s}from"./iframe-17211AdQ.js";var c;function l(){return(l=e((()=>{c=``+new URL(`login-list-lit-item-DNS7eiKd.css`,import.meta.url).href})))()}var u,d,f;function p(){return(p=e((()=>{l(),n(),o(),u=class extends s{static get properties(){return{icon:{type:String},selected:{type:Boolean}}}constructor(){super(),this.icon=``,this.selected=!1}render(){let e={selected:this.selected,"list-item":!0};return a` <link
        rel="stylesheet"
        href="${c}"
      />
      <li class=${r(e)} role="option">
        <img class="icon" src=${this.icon} />
        <slot name="login-info"></slot>
        <slot name="notificationIcon"></slot>
      </li>`}},d=class extends s{static properties={icon:{type:String},selected:{type:Boolean}};constructor(){super(),this.id=`new-login-list-item`,this.selected=!1,this.icon=`page-icon:undefined`}render(){return a`
      <link
        rel="stylesheet"
        href="${c}"
      />
      <list-item ?selected=${this.selected} icon=${this.icon}>
        <div class="labels" slot="login-info">
          <span
            class="title"
            dir="auto"
            data-l10n-id="login-list-item-title-new-login2"
          ></span
          ><span class="subtitle" dir="auto"></span>
        </div>
      </list-item>
    `}},f=class extends s{static get properties(){return{favicon:{type:String},title:{type:String,reflect:!0},username:{type:String,reflect:!0},notificationIcon:{type:String,reflect:!0},selected:{type:Boolean}}}constructor(){super(),this.favicon=``,this.title=``,this.username=``,this.notificationIcon=``,this.selected=!1}render(){switch(this.notificationIcon){case`breached`:this.classList.add(`breached`);break;case`vulnerable`:this.classList.add(`vulnerable`);break;default:this.classList.remove(`breached`),this.classList.remove(`vulnerable`)}return a`
      <link
        rel="stylesheet"
        href="${c}"
      />
      <list-item
        icon=${this.favicon}
        title=${this.title}
        username=${this.username}
        notificationIcon=${this.notificationIcon}
        ?selected=${this.selected}
      >
        <div class="labels" slot="login-info">
          <span class="title" dir="auto">${this.title}</span>
          ${t(this.username,()=>a` <span class="subtitle" dir="auto">
                ${this.username}
              </span>`,()=>a`<span
                class="subtitle"
                dir="auto"
                data-l10n-id="login-list-item-subtitle-missing-username"
              ></span>`)}
        </div>
        <div slot="notificationIcon">
          ${i(this.notificationIcon,[[`breached`,()=>a`<img
                    class="alert-icon"
                    data-l10n-id="about-logins-list-item-breach-icon"
                    title=""
                    src="chrome://browser/content/aboutlogins/icons/breached-website.svg"
                  />`],[`vulnerable`,()=>a`<img
                    class="alert-icon"
                    data-l10n-id="about-logins-list-item-vulnerable-password-icon"
                    title=""
                    src="chrome://browser/content/aboutlogins/icons/vulnerable-password.svg"
                  />`]],()=>a`<img class="alert-icon" title="" src="" />`)}
        </div>
      </list-item>
    `}},customElements.define(`list-item`,u),customElements.define(`new-list-item`,d),customElements.define(`login-list-item`,f)})))()}var m,h,g;function _(){return(_=e((()=>{n(),p(),m={title:`Domain-specific UI Widgets/Credential Management/Login List Item`,component:`login-list-item`},window.MozXULElement.insertFTLIfNeeded(`browser/aboutLogins.ftl`),h=({selected:e})=>a` <new-list-item .selected=${e}> </new-list-item> `,h.argTypes={selected:{options:[!0,!1],control:{type:`radio`},defaultValue:!1}},g=({title:e,username:t,notificationIcon:n,selected:r})=>a`
    <login-list-item
      .title=${e}
      .username=${t}
      .notificationIcon=${n}
      .selected=${r}
    >
    </login-list-item>
  `,g.argTypes={notificationIcon:{options:[`default`,`breached`,`vulnerable`],control:{type:`radio`},defaultValue:`default`},selected:{options:[!0,!1],control:{type:`radio`},defaultValue:!1}},g.args={title:`https://www.example.com`,username:`test-username`}})))()}_();export{g as LoginListItem,h as NewLoginListItem,m as default};