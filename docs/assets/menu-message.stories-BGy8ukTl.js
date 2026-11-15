import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,u as n}from"./lit.all-BYVOqvrj.js";import{c as r,o as i}from"./iframe-DZPZZ1s7.js";import{n as a}from"./moz-button-DFoGCGZp.js";import{t as o}from"./moz-card-HnpfQwWQ.js";var s;function c(){return(c=e((()=>{s=new URL(`menu-message-B_jH87qk.css`,import.meta.url).href+``})))()}var l;function u(){return(u=e((()=>{c(),t(),r(),a(),l=class extends i{static shadowRootOptions={...i.shadowRootOptions,delegatesFocus:!0};static properties={imageURL:{type:String},rtlImageURL:{type:String},logoURL:{type:String},buttonText:{type:String},primaryButtonSize:{type:String,reflect:!0},primaryText:{type:String},secondaryText:{type:String},layout:{type:String,reflect:!0},imagePosition:{type:String,reflect:!0,attribute:`image-position`},directionalImage:{type:Boolean,reflect:!0,attribute:`directional-image`}};static queries={primaryButton:`#primary-button`,closeButton:`#close-button`};constructor(){super(),this.layout=`column`,this.primaryButtonSize=`default`,this.imagePosition=`end`,this.addEventListener(`keydown`,e=>{switch(e.code){case`ArrowLeft`:case`ArrowRight`:case`ArrowUp`:case`ArrowDown`:this.shadowRoot.activeElement===this.primaryButton?this.closeButton.focus():this.primaryButton.focus()}},{capture:!0})}handleClose(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent(`MenuMessage:Close`),{bubbles:!0})}handlePrimaryButton(){this.dispatchEvent(new CustomEvent(`MenuMessage:PrimaryButton`),{bubbles:!0})}get isRowLayout(){return this.layout===`row`}get isSplitLayout(){return this.layout===`split`}renderIllustration(){let e=this.rtlImageURL&&this.documentGlobal.getComputedStyle(this).direction===`rtl`;return n`
      <img
        id="illustration"
        class=${e?`illustration-rtl`:``}
        role="presentation"
        src=${e?this.rtlImageURL:this.imageURL}
      />
    `}renderSplitLayout(){return n`
      <div id="top-row">
        <div id="primary">${this.primaryText}</div>
        <moz-button
          id="close-button"
          @click=${this.handleClose}
          type="ghost"
          iconsrc="resource://content-accessible/close-12.svg"
          tabindex="2"
          data-l10n-id="fxa-menu-message-close-button"
        >
        </moz-button>
      </div>
      <div id="columns">
        <div id="content-column">
          <div id="secondary">${this.secondaryText}</div>
          <moz-button
            id="primary-button"
            @click=${this.handlePrimaryButton}
            type="primary"
            size=${this.primaryButtonSize}
            tabindex="1"
            autofocus
            title=${this.buttonText}
            aria-label=${this.buttonText}
          >
            ${this.buttonText}
          </moz-button>
        </div>
        <div id="illustration-container">${this.renderIllustration()}</div>
      </div>
    `}renderRowLayout(){return n`
      <div id="top-row">
        <div id="logo-container">
          <img id="logo" role="presentation" src=${this.logoURL} />
        </div>
        <moz-button
          id="close-button"
          @click=${this.handleClose}
          type="ghost"
          iconsrc="resource://content-accessible/close-12.svg"
          tabindex="2"
          data-l10n-id="fxa-menu-message-close-button"
        >
        </moz-button>
      </div>
      <div id="bottom-row">
        <div id="primary">${this.primaryText}</div>
        <div id="secondary">${this.secondaryText}</div>
        <div id="illustration-button-container">
          <moz-button
            id="primary-button"
            @click=${this.handlePrimaryButton}
            type="primary"
            size=${this.primaryButtonSize}
            tabindex="1"
            autofocus
            title=${this.buttonText}
            aria-label=${this.buttonText}
          >
            ${this.buttonText}
          </moz-button>
          <div id="illustration-container">${this.renderIllustration()}</div>
        </div>
      </div>
    `}renderColumnLayout(){return n`
      <div id="top-row">
        <div id="logo-container">
          <img id="logo" role="presentation" src=${this.logoURL} />
        </div>
        <moz-button
          id="close-button"
          @click=${this.handleClose}
          type="ghost"
          iconsrc="resource://content-accessible/close-12.svg"
          tabindex="2"
          data-l10n-id="fxa-menu-message-close-button"
        >
        </moz-button>
      </div>
      <div id="illustration-container">${this.renderIllustration()}</div>
      <div id="primary">${this.primaryText}</div>
      <div id="secondary">${this.secondaryText}</div>
      <moz-button
        id="primary-button"
        @click=${this.handlePrimaryButton}
        type="primary"
        size=${this.primaryButtonSize}
        tabindex="1"
        autofocus
        title=${this.buttonText}
        aria-label=${this.buttonText}
      >
        ${this.buttonText}
      </moz-button>
    `}renderBody(){return this.isSplitLayout?this.renderSplitLayout():this.isRowLayout?this.renderRowLayout():this.renderColumnLayout()}render(){return n`<link
        rel="stylesheet"
        href="${s}"
      />
      <div
        id="container"
        layout=${this.layout}
        image-position=${this.imagePosition}
        ?has-image=${this.imageURL}
        ?has-logo=${this.logoURL}
      >
        ${this.renderBody()}
      </div>`}},customElements.define(`menu-message`,l)})))()}var d,f,p,m;function h(){return(h=e((()=>{t(),o(),u(),d={title:`Domain-specific UI Widgets/ASRouter/Menu Message`,component:`menu-message`,argTypes:{layout:{options:[`column`,`row`,`simple`,`split`],control:{type:`select`}},imagePosition:{options:[`start`,`end`],control:{type:`inline-radio`}}}},f=({buttonText:e,imageURL:t,logoURL:r,primaryText:i,secondaryText:a,primaryButtonSize:o,imageVerticalTopOffset:s,imageVerticalBottomOffset:c,containerVerticalBottomOffset:l,containerPaddingBottom:u,layout:d,imagePosition:f,imageWidth:p,logoWidth:m})=>n`
  <moz-card style="width: 22.5rem;">
    <menu-message
      buttonText=${e}
      primaryText=${i}
      primaryButtonSize=${o}
      secondaryText=${a}
      imageURL=${t}
      logoURL=${r}
      style="
        ${s===void 0?``:`--illustration-margin-block-start-offset: ${s}px;`}
        ${c===void 0?``:`--illustration-margin-block-end-offset: ${c}px;`}
        ${l===void 0?``:`--container-margin-block-end-offset: ${l}px;`}
        ${p===void 0?``:`--image-width: ${p}px;`}
        ${m===void 0?``:`--logo-width: ${m}px;`}
        ${u===void 0?``:`--container-padding-block-end: ${u}px;`}
      "
      layout=${d}
      image-position=${f}
    >
    </menu-message>
  </moz-card>
`,p=f.bind({}),p.args={buttonText:`Sign up`,logoURL:`chrome://branding/content/about-logo.svg`,imageURL:`chrome://browser/content/asrouter/assets/fox-with-box-on-cloud.svg`,primaryText:`Bounce between devices`,primaryButtonSize:`default`,secondaryText:`Sync and encrypt your bookmarks, passwords, and more on all your devices.`,imageVerticalTopOffset:-20,imageVerticalBottomOffset:0,containerVerticalBottomOffset:0,containerPaddingBottom:8,layout:`column`,imagePosition:`end`,imageWidth:120,logoWidth:18},m=f.bind({}),m.args={...p.args,primaryText:`Sync all your devices`,secondaryText:`Instantly get your bookmarks and passwords everywhere you’re signed in to Firefox.`,buttonText:`Sign in`,layout:`split`,imagePosition:`end`,imageWidth:100,imageVerticalTopOffset:0}})))()}h();export{p as Default,m as Split,d as default};