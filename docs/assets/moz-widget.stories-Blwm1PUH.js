import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{_ as t,d as n,f as r,u as i}from"./lit.all-Co4HOUmF.js";import{c as a,o}from"./iframe-DP8hlEO7.js";import{n as s}from"./moz-button-DllAM7jW.js";import{t as c}from"./panel-list-C5rvkNXr.js";var l;function u(){return(u=e((()=>{l=new URL(`moz-widget-Bx8BZV9q.css`,import.meta.url).href+``})))()}var d;function f(){return(f=e((()=>{d=new URL(`moz-widget-header-CQSP7Juh.css`,import.meta.url).href+``})))()}var p;function m(){return(m=e((()=>{f(),a(),r(),s(),c(),window.MozXULElement||document.l10n?.addResourceIds([`toolkit/global/mozButton.ftl`]),p=class extends o{static properties={title:{type:String,fluent:!0,mapped:!0},menuLabel:{type:String,attribute:`menu-label`,fluent:!0},menuId:{type:String,attribute:`menu-id`},_menuId:{state:!0}};constructor(){super(),this.title=null,this.menuLabel=null,this.menuId=null,this._menuId=null}willUpdate(e){super.willUpdate(e),this.hasUpdated||this.#t(this.querySelector(`:scope > [slot="menu"]`))}#e(e){this.#t(e.target.assignedElements()[0])}#t(e){e&&(e.id||=`moz-widget-header-menu-${crypto.randomUUID()}`),this._menuId=e?.id||null}#n(e){return i`<moz-button
      id="menu-button"
      type="ghost"
      size="small"
      iconsrc="chrome://global/skin/icons/more.svg"
      .menuId=${e}
      data-l10n-id=${this.menuLabel?t:`moz-button-more-options`}
      .ariaLabel=${this.menuLabel}
      .title=${this.menuLabel}
    ></moz-button>`}render(){let e=this._menuId||this.menuId;return i`
      <link
        rel="stylesheet"
        href="${d}"
      />
      <slot name="leading"></slot>
      ${this.title?i`<h2 id="heading" part="heading" title=${this.title}>
            ${this.title}
          </h2>`:t}
      <slot name="trailing" class=${e?`with-menu`:``}></slot>
      ${e?this.#n(e):t}
      <slot name="menu" @slotchange=${this.#e}></slot>
    `}},customElements.define(`moz-widget-header`,p)})))()}var h,g,_;function v(){return(v=e((()=>{u(),a(),r(),m(),h=`allow-forms allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox`,g=`frame`,_=class extends o{static properties={widgetId:{attribute:`widget-id`},title:{type:String,fluent:!0,mapped:!0},remoteType:{attribute:`remote-type`},browsingContextGroupId:{type:Number,attribute:`group-id`},size:{reflect:!0},padded:{type:Boolean,reflect:!0},menuLabel:{type:String,attribute:`menu-label`,fluent:!0},src:{reflect:!0},readyOnLoad:{type:Boolean,attribute:`ready-on-load`},error:{type:Boolean,reflect:!0},_menuId:{state:!0},_hasHeader:{state:!0}};#e=null;#t=null;#n;#r=!1;constructor(){super(),this.widgetId=null,this.title=null,this.size=null,this.padded=!1,this.menuLabel=null,this.src=null,this.readyOnLoad=!1,this.error=!1,this.remoteType=null,this.browsingContextGroupId=null,this._menuId=null,this._hasHeader=!1}reportError(e){this.error||(this.#n=e),this.error=!0}reportReady(){this.#n=void 0,this.#r=!0,this.error=!1,this.dispatchEvent(new CustomEvent(`widget-ready`))}#i=()=>{this.readyOnLoad&&this.reportReady()};#a=()=>{this.reportError()};get frame(){return this.src?this.#e?this.#e:this.#t:null}get supportsXULElements(){return!!this.ownerDocument.createXULElement}willUpdate(e){super.willUpdate(e),this.hasUpdated||this.#s(this.querySelector(`:scope > [slot="menu"]`)),(!this.hasUpdated||e.has(`_menuId`))&&this.#c(),e.has(`src`)&&this.hasUpdated&&(this.error=!1),this.#l(),this.src?this.supportsXULElements&&this.#u(e):this.#d(null)}updated(e){if(super.updated(e),e.has(`error`)){let t=this.#n,n=this.#r;this.#n=void 0,this.#r=!1,e.get(`error`)!==void 0&&(e.get(`error`)!==this.error||this.error&&n)&&(this.error?this.dispatchEvent(new CustomEvent(`widget-error`,{detail:{reason:t}})):!n&&!e.has(`src`)&&this.dispatchEvent(new CustomEvent(`widget-ready`)))}}#o(e){this.#s(e.target.assignedElements()[0])}#s(e){e&&(e.id||=`moz-widget-menu-${crypto.randomUUID()}`),this._menuId=e?.id||null}#c(){let e=this.querySelector(`:scope > [slot="header"]`);e&&(e.menuId=this._menuId),this._hasHeader=!!e}#l(){this.supportsXULElements||!this.src?this.#t=null:(this.#t?.getAttribute(`src`)!=this.src&&(this.#t=this.ownerDocument.createElement(`iframe`),this.#t.setAttribute(`sandbox`,h),this.#t.addEventListener(`load`,this.#i),this.#t.addEventListener(`error`,this.#a),this.#t.src=this.src),this.title?this.#t.setAttribute(`title`,this.title):this.#t.removeAttribute(`title`))}#u(e){!this.src||!this.supportsXULElements?this.#d(null):!this.#e||e.has(`remoteType`)||e.has(`browsingContextGroupId`)?this.#d(this.#f()):this.#e.getAttribute(`src`)!=this.src&&this.#e.setAttribute(`src`,this.src)}#d(e){this.#e?.remove(),this.#e=e,e&&this.append(e)}#f(){let e=this.ownerDocument.createXULElement(`browser`);e.setAttribute(`slot`,g),e.setAttribute(`type`,`content`),e.setAttribute(`disableglobalhistory`,`true`),e.setAttribute(`maychangeremoteness`,`true`),e.setAttribute(`remote`,`true`),this.remoteType&&e.setAttribute(`remoteType`,this.remoteType),this.remoteType==`extension`&&e.setAttribute(`messagemanagergroup`,`webext-browsers`);let t=this.browsingContextGroupId;return Number.isSafeInteger(t)&&t>0&&e.setAttribute(`initialBrowsingContextGroupId`,t),e.setAttribute(`src`,this.src),e}#p(){return i`
      <div class="content" ?inert=${this.error}>${this.#m()}</div>
      ${this.error?i`<div class="error-overlay"><slot name="error"></slot></div>`:t}
    `}#m(){return this.src?this.#e?i`<slot name=${g}></slot>`:this.#t:i`<slot></slot>`}#h(){return i`<moz-button
      id="menu-button"
      type="ghost"
      size="small"
      iconsrc="chrome://global/skin/icons/more.svg"
      .menuId=${this._menuId}
      data-l10n-id=${this.menuLabel?t:`moz-button-more-options`}
      .ariaLabel=${this.menuLabel}
      .title=${this.menuLabel}
    ></moz-button>`}render(){let e=this.src&&!this.#e,n=this.title&&!e?this.title:t;return i`
      <link
        rel="stylesheet"
        href="${l}"
      />
      <article class="widget" aria-label=${n}>
        <slot name="header" @slotchange=${this.#c}></slot>
        ${this._menuId&&!this._hasHeader?this.#h():t}
        <div class="widget-content">${this.#p()}</div>
        <slot name="menu" @slotchange=${this.#o}></slot>
      </article>
    `}},customElements.define(`moz-widget`,_)})))()}var y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{r(),v(),y={title:`Domain-specific UI Widgets/Widget`,component:`moz-widget`,parameters:{fluent:`
moz-widget-title =
  .title = Localized widget
moz-widget-back-button =
  .title = Back
  .aria-label = Back
moz-widget-units-button =
  .label = Units
moz-widget-menu-refresh = Refresh
moz-widget-menu-remove = Remove widget
    `},argTypes:{size:{options:[`small`,`medium`,`large`],control:{type:`select`}},l10nId:{options:[void 0,`moz-widget-title`],control:{type:`select`}},badge:{options:[void 0,`new`],control:{type:`select`}}}},b=`data:text/html,%0A%20%20%3C!doctype%20html%3E%0A%20%20%3Cbody%20style%3D%22margin%3A%200%3B%22%3E%0A%20%20%20%20%3Csection%20style%3D%22padding%3A%201rem%3B%22%3E%0A%20%20%20%20%20%20%3Ch3%3EFramed%20widget%3C%2Fh3%3E%0A%20%20%20%20%20%20%3Cp%3EA%20document%20of%20its%20own.%3C%2Fp%3E%0A%20%20%20%20%3C%2Fsection%3E%0A%20%20%3C%2Fbody%3E%0A`,x=({headerTitle:e,badge:t,backButton:r,trailingButton:a,menuLabel:o})=>e||t||r||a?i`<moz-widget-header
        slot="header"
        title=${n(e)}
        menu-label=${n(o)}
      >
        ${r?i`<moz-button
              slot="leading"
              type="ghost"
              size="small"
              iconsrc="chrome://global/skin/icons/arrow-left.svg"
              data-l10n-id="moz-widget-back-button"
            ></moz-button>`:``}
        ${t?i`<moz-badge slot="leading" type=${t}></moz-badge>`:``}
        ${a?i`<moz-button
              slot="trailing"
              size="small"
              iconsrc="chrome://global/skin/icons/arrow-down-12.svg"
              iconposition="end"
              data-l10n-id="moz-widget-units-button"
            ></moz-button>`:``}
      </moz-widget-header>`:``,S=e=>e?i`<panel-list slot="menu" id="moz-widget-menu">
        <panel-item data-l10n-id="moz-widget-menu-refresh"></panel-item>
        <hr />
        <panel-item data-l10n-id="moz-widget-menu-remove"></panel-item>
      </panel-list>`:``,C=({size:e,widgetId:t,title:r,l10nId:a,padded:o,menu:s,menuLabel:c,...l})=>i`
  <moz-widget
    size=${e}
    widget-id=${t}
    title=${r}
    data-l10n-id=${n(a)}
    ?padded=${o}
    menu-label=${n(c)}
  >
    ${x({...l,menuLabel:c})} ${S(s)}
    <section style="padding: 1rem;">
      <p>Any HTML can go in the default slot.</p>
    </section>
  </moz-widget>
`,w=e=>i`
  <div
    slot="error"
    role="alert"
    style="block-size: 100%; box-sizing: border-box; padding: ${e?`var(--space-medium)`:`0`}; display: flex; flex-direction: column; gap: var(--space-small);"
  >
    ${e?i`<p style="margin: 0; font-size: var(--font-size-small);">
          ${e}
        </p>`:``}
    <div
      style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: var(--space-small); text-align: center; color: var(--text-color-deemphasized);"
    >
      <svg
        viewBox="0 0 16 16"
        aria-hidden="true"
        style="inline-size: var(--icon-size); block-size: var(--icon-size); flex-shrink: 0; fill: var(--icon-color-warning);"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.975 1c1.024 0 2.05.514 2.622 1.542l4.386 7.888c1.074 1.932-.24 4.34-2.446 4.454a88 88 0 0 1-9.035 0c-2.218-.114-3.556-2.497-2.487-4.443l4.33-7.885A2.97 2.97 0 0 1 7.975 1M8 10.25A.875.875 0 1 0 8 12a.875.875 0 0 0 0-1.75M8 5a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 0 1.5 0v-2.5A.75.75 0 0 0 8 5"
        />
      </svg>
      <p style="margin: 0; font-size: var(--font-size-small);">
        Widget unavailable. Check back later.
      </p>
    </div>
  </div>
`,T=({size:e,widgetId:t,title:r,l10nId:a,padded:o,src:s,error:c,menu:l,menuLabel:u,...d})=>i`
  <moz-widget
    size=${e}
    widget-id=${t}
    title=${r}
    data-l10n-id=${n(a)}
    ?padded=${o}
    menu-label=${n(u)}
    src=${s}
    ?error=${c}
  >
    ${x({...d,menuLabel:u})} ${S(l)}
    ${c?w(d.headerTitle?void 0:r):``}
  </moz-widget>
`,E=C.bind({}),E.args={size:`medium`,widgetId:`example`,title:`Example widget`,headerTitle:`Example widget`,badge:void 0,backButton:!1,trailingButton:!1,menu:!1,menuLabel:`Widget options`,padded:!1},D=T.bind({}),D.args={...E.args,title:`Framed widget`,headerTitle:`Framed widget`,src:b,error:!1},O=T.bind({}),O.args={...D.args,padded:!0},k=C.bind({}),k.args={...E.args,badge:`new`,backButton:!0,trailingButton:!0,menu:!0},A=T.bind({}),A.args={...D.args,headerTitle:void 0,menu:!0}})))()}j();export{E as Default,D as Framed,k as HeaderActions,O as Padded,A as WithoutHeader,y as default};