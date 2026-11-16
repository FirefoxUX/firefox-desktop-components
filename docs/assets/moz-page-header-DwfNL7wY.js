import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{f as n,u as r}from"./lit.all-BYVOqvrj.js";import{n as i,t as a}from"./_firefox-storybook_moz-css-url_e0b8cc3e5381bdfb9691f06cc29f273aae494deefbbec62135173ebbc273b74d-_rMXgSdb.js";import{c as o,o as s}from"./iframe-B6GfsneT.js";var c;function l(){return(l=e((()=>{c=new URL(`moz-page-header-qxdOHrRM.css`,import.meta.url).href+``})))()}var u=t({MozPageHeader:()=>d}),d;function f(){return(f=e((()=>{i(),l(),n(),o(),window.MozXULElement?.insertFTLIfNeeded(`toolkit/global/mozPageHeader.ftl`),d=class extends s{static properties={heading:{type:String,fluent:!0},description:{type:String,fluent:!0},iconSrc:{type:String},supportPage:{type:String,attribute:`support-page`},backButton:{type:Boolean},badge:{type:String},headingLevel:{type:Number}};static queries={headingEl:`#heading`,backButtonEl:`moz-button`};constructor(){super(),this.heading=``,this.description=``,this.iconSrc=``,this.supportPage=``,this.backButton=!1,this.badge=void 0,this.headingLevel=2}backButtonTemplate(){return this.backButton?r`<moz-button
      type="ghost"
      data-l10n-id="back-nav-button-title2"
      iconsrc="chrome://global/skin/icons/arrow-left.svg"
      class="back-button"
      @click=${this.handleBack}
    ></moz-button>`:``}iconTemplate(){return this.iconSrc?r`<img src=${this.iconSrc} role="presentation" class="icon" />`:``}descriptionTemplate(){return this.description?r`<span class="description" id="description">
        ${this.description}
      </span>
      ${this.supportLinkTemplate()}`:``}supportLinkTemplate(){return this.supportPage?r`<a
      is="moz-support-link"
      support-page=${this.supportPage}
      part="support-link"
      class="support-link"
      aria-describedby=${this.description?`description`:`heading`}
    ></a>`:``}badgeTemplate(){return this.badge?r`<moz-badge type=${this.badge}></moz-badge>`:``}handleBack(){this.dispatchEvent(new Event(`navigate-back`))}headingTemplate(){switch(this.headingLevel){case 1:return r`<h1 id="heading">${this.heading}</h1>`;case 3:return r`<h3 id="heading">${this.heading}</h3>`;case 4:return r`<h4 id="heading">${this.heading}</h4>`;case 5:return r`<h5 id="heading">${this.heading}</h5>`;case 6:return r`<h6 id="heading">${this.heading}</h6>`;default:return r`<h2 id="heading">${this.heading}</h2>`}}render(){return r`
      <link
        rel="stylesheet"
        href="${c}"
      />
      <link
        rel="stylesheet"
        href="${a}"
      />
      <div class="page-header-container">
        <slot name="breadcrumbs"></slot>
        <div class="heading">
          ${this.backButtonTemplate()}${this.iconTemplate()}
          ${this.headingTemplate()} ${this.badgeTemplate()}
          ${this.description?``:this.supportLinkTemplate()}
        </div>
        ${this.descriptionTemplate()}
      </div>
    `}},customElements.define(`moz-page-header`,d)})))()}export{u as n,f as t};