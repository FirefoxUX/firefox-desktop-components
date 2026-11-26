import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{S as n,d as r,f as i,u as a}from"./lit.all-Co4HOUmF.js";import{c as o,o as s,s as c}from"./iframe-DUPCaqkc.js";import{t as l}from"./moz-support-link-jyOtt3Py.js";var u;function d(){return(d=e((()=>{u=``+new URL(`moz-page-nav-BXVdkEpH.css`,import.meta.url).href})))()}var f;function p(){return(p=e((()=>{f=``+new URL(`moz-page-nav-button-CorxHuPW.css`,import.meta.url).href})))()}var m=t({MozPageNav:()=>h,MozPageNavButton:()=>g}),h,g;function _(){return(_=e((()=>{d(),p(),i(),o(),l(),h=class extends s{static properties={currentView:{type:String},heading:{type:String,fluent:!0},type:{type:String,reflect:!0},allowNoSelection:{type:Boolean},pageNavButtons:{type:Array,state:!0},secondaryNavButtons:{type:Array,state:!0}};static queries={headingEl:`#page-nav-heading`,primaryNavGroupSlot:`.primary-nav-group slot`,secondaryNavGroupSlot:`#secondary-nav-group slot`};constructor(){super(),this.currentView=void 0,this.heading=void 0,this.type=`default`,this.allowNoSelection=!1,this.pageNavButtons=[],this.secondaryNavButtons=[]}get visiblePageNavButtons(){return this.pageNavButtons.filter(this.checkElementVisibility)}getSlottedChildren(e){return e?.assignedElements().filter(e=>e instanceof g)}checkElementVisibility(e){let t=window.getComputedStyle(e);return t&&!e.hidden&&t.getPropertyValue(`display`)!==`none`&&t.getPropertyValue(`visibility`)!==`hidden`&&t.getPropertyValue(`opacity`)!=`0`}onChangeView(e){this.currentView=e.target.view}handleFocus(e){if(c(e))return;let t=this.isDocumentRTL,n=t?`ArrowLeft`:`ArrowRight`,r=t?`ArrowRight`:`ArrowLeft`;e.key==`ArrowDown`||e.key==n?(e.preventDefault(),this.focusNextView()):(e.key==`ArrowUp`||e.key==r)&&(e.preventDefault(),this.focusPreviousView())}focusPreviousView(){let e=this.visiblePageNavButtons,t=e[e.findIndex(e=>e.selected)-1];t&&t.activate({focusVisible:!0})}focusNextView(){let e=this.visiblePageNavButtons,t=e[e.findIndex(e=>e.selected)+1];t&&t.activate({focusVisible:!0})}onPrimaryNavChange(e){this.pageNavButtons=this.getSlottedChildren(e.target),this.updateNavButtonsState()}onSecondaryNavChange(e){this.secondaryNavButtons=this.getSlottedChildren(e.target);let t=e.target.assignedElements();this.hasSecondaryNav=!!t.length}updated(){this.updateNavButtonsState()}updateNavButtonsState(){let e=!1;for(let e of this.pageNavButtons)e.selected=e.view==this.currentView;let t=this.visiblePageNavButtons;for(let n of t)e||=n.selected;e||!t.length||this.currentView&&this.allowNoSelection||t[0].activate()}render(){return a`
      <link
        rel="stylesheet"
        href="${u}"
      />
      <div class="page-nav-heading-wrapper">
        ${this.type===`mobile`?a`<moz-button
              type="icon ghost"
              aria-label="Open Menu"
              aria-expanded="false"
              iconsrc="chrome://browser/skin/menu.svg"
            >
            </moz-button>`:``}
        <div class="logo"></div>
        <h1 class="page-nav-heading" id="page-nav-heading">${this.heading}</h1>
      </div>
      <slot name="subheading"></slot>
      <nav>
        <div
          class="primary-nav-group"
          role="tablist"
          aria-orientation="vertical"
          aria-labelledby="page-nav-heading"
        >
          <slot
            @change-view=${this.onChangeView}
            @keydown=${this.handleFocus}
            @slotchange=${this.onPrimaryNavChange}
          ></slot>
        </div>
        ${n(this.hasSecondaryNav,()=>a`<hr />`)}
        <div id="secondary-nav-group" role="group">
          <slot
            name="secondary-nav"
            @slotchange=${this.onSecondaryNavChange}
          ></slot>
        </div>
      </nav>
    `}},customElements.define(`moz-page-nav`,h),g=class extends s{static properties={iconSrc:{type:String,reflect:!0},href:{type:String},selected:{type:Boolean},supportPage:{type:String,attribute:`support-page`},title:{type:String,mapped:!0}};constructor(){super(),this.iconSrc=void 0,this.href=void 0,this.selected=!1,this.supportPage=void 0,this.title=void 0}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`none`)}static queries={buttonEl:`button`,linkEl:`a`};get view(){return this.getAttribute(`view`)}activate(e={}){let t=e.focusVisible??!1;this.dispatchEvent(new CustomEvent(`change-view`,{bubbles:!0,composed:!0})),this.buttonEl?.focus({focusVisible:t})}itemTemplate(){return this.href||this.supportPage?this.linkTemplate():this.buttonTemplate()}buttonTemplate(){return a`
      <button
        aria-selected=${this.selected}
        tabindex=${this.selected?0:-1}
        role="tab"
        ?selected=${this.selected}
        title=${r(this.title)}
        @click=${this.activate}
      >
        ${this.innerContentTemplate()}
      </button>
    `}linkTemplate(){return this.supportPage?a`
        <a
          is="moz-support-link"
          class="moz-page-nav-link"
          support-page=${this.supportPage}
          title=${r(this.title)}
        >
          ${this.innerContentTemplate()}
        </a>
      `:a`
      <a
        href=${this.href}
        class="moz-page-nav-link"
        target="_blank"
        title=${r(this.title)}
      >
        ${this.innerContentTemplate()}
      </a>
    `}innerContentTemplate(){return a`
      ${this.iconSrc?a`<img
            class="page-nav-icon"
            src=${this.iconSrc}
            role="presentation"
          />`:``}
      <slot></slot>
    `}render(){return a`
      <link
        rel="stylesheet"
        href="${f}"
      />
      ${this.itemTemplate()}
    `}},customElements.define(`moz-page-nav-button`,g)})))()}export{m as n,_ as t};