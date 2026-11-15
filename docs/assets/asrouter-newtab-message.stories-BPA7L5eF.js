import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,g as n,u as r}from"./lit.all-BYVOqvrj.js";import{c as i,o as a}from"./iframe-DZPZZ1s7.js";import{n as o}from"./moz-button-DFoGCGZp.js";var s,c,l,u;function d(){return(d=e((()=>{t(),i(),o(),s=`chrome://newtab/content/data/content/external-components/asrouter-newtab-message/asrouter-newtab-message.css`,c=3e3,l=new Set([`WIDGETS_OPT_IN`]),u=class extends a{static properties={messageData:{type:Object},cssOverride:{type:String},handleDismiss:{type:Function},handleClick:{type:Function},handleBlock:{type:Function},handleClose:{type:Function},isIntersecting:{type:Boolean},dispatch:{type:Function},_matchedContent:{state:!0}};#e=null;#t=null;#n=!1;connectedCallback(){super.connectedCallback(),this.messageData?.content?.states?.length&&(this.#t=()=>this.#o(),this.ownerDocument.addEventListener(`visibilitychange`,this.#t),this.#i())}disconnectedCallback(){super.disconnectedCallback(),this.#r()}updated(e){e.has(`isIntersecting`)&&this.isIntersecting&&this.#o()}#r(){this.#a(),this.#t&&=(this.ownerDocument.removeEventListener(`visibilitychange`,this.#t),null)}#i(){this.#e||=globalThis.setInterval(()=>this.#o(),c)}#a(){this.#e&&=(globalThis.clearInterval(this.#e),null)}#o(){if(this.#n)return;let e=this.messageData?.content?.states;e?.length&&this.ownerDocument.visibilityState===`visible`&&this.isIntersecting&&this.dispatchEvent(new CustomEvent(`ASRouterNewTabMessage:EvaluateTargeting`,{bubbles:!0,detail:{targetings:e.map(e=>e.targeting)}}))}setMatchedState(e){if(this.#n)return;let t=this.messageData?.content?.states??[],n=e>=0?t[e]:null;this._matchedContent=n?.content??null,n?.final&&(this.#n=!0,this.#r())}#s(){let e=this.messageData?.content??{};return this._matchedContent?{...e,...this._matchedContent}:e}specialMessageAction(e){l.has(e?.type)&&this.dispatch?this.dispatch(e):this.dispatchEvent(new CustomEvent(`ASRouterNewTabMessage:SpecialMessageAction`,{bubbles:!0,detail:{action:e}}))}#c(){this.handleBlock?.(),this.#l()}#l(){this.handleDismiss?.()}#u(){let{primaryButton:e}=this.#s();this.handleClick?.(`primary-button`),e?.action?.type&&this.specialMessageAction(e.action),e?.action?.dismiss&&this.#l()}#d(){let{secondaryButton:e}=this.#s();this.handleClick?.(`secondary-button`),e?.action?.type&&this.specialMessageAction(e.action),e?.action?.dismiss&&this.#l()}#f(e){return e?typeof e==`string`?r`<h2 id="asrouter-newtab-message-heading">${e}</h2>`:r`<h2
      id="asrouter-newtab-message-heading"
      data-l10n-id=${e.string_id}
    ></h2>`:n}#p(e){return e?typeof e==`string`?r`<p>${e}</p>`:r`<p data-l10n-id=${e.string_id}></p>`:n}#m(e){if(!e)return n;let t=e.type??`default`;return typeof e.label==`string`?r`<moz-button
          type=${t}
          @click=${this.#d.bind(this)}
          >${e.label}</moz-button
        >`:r`<moz-button
          type=${t}
          @click=${this.#d.bind(this)}
          data-l10n-id=${e.label.string_id}
        ></moz-button>`}#h(e){if(!e)return n;let t=e.type??`primary`;return typeof e.label==`string`?r`<moz-button
        type=${t}
        iconSrc=${e.iconSrc||n}
        @click=${this.#u.bind(this)}
        >${e.label}</moz-button
      >`:r`<moz-button
      type=${t}
      iconSrc=${e.iconSrc||n}
      @click=${this.#u.bind(this)}
      data-l10n-id=${e.label.string_id}
    ></moz-button>`}#g(e){return!!(e?.imageSrcResponsive||e?.imageSrcDarkResponsive||e?.imageSrcNarrow||e?.imageSrcDarkNarrow)}#_(e){let t=e?.imageSrc;if(!t)return n;let{imageSrcDark:i,imageSrcNarrow:a,imageSrcDarkNarrow:o,imageSrcResponsive:s,imageSrcDarkResponsive:c}=e;return r`<picture class="message-image">
      ${i?r`<source
            srcset=${i}
            media="(min-width: 1072px) and (prefers-color-scheme: dark)"
          />`:n}
      ${o?r`<source
            srcset=${o}
            media="(min-width: 724px) and (max-width: 1071.98px) and (prefers-color-scheme: dark)"
          />`:n}
      ${c?r`<source
            srcset=${c}
            media="(max-width: 723.98px) and (prefers-color-scheme: dark)"
          />`:n}
      ${a?r`<source
            srcset=${a}
            media="(min-width: 724px) and (max-width: 1071.98px)"
          />`:n}
      ${s?r`<source
            srcset=${s}
            media="(max-width: 723.98px)"
          />`:n}
      <img src=${t} alt="" />
    </picture>`}#v(e,t){return!e&&!t?n:r`<moz-button-group class="button-group">
      ${this.#h(e)}
      ${this.#m(t)}
    </moz-button-group>`}render(){let e=this.#s(),t=this.cssOverride||s;return r`
      <link rel="stylesheet" href=${t} />
      <aside
        class=${[`asrouter-newtab-message`,e?.hideDismissButton?`no-dismiss`:``,this.#g(e)?`has-responsive-image`:``].filter(Boolean).join(` `)}
        aria-labelledby=${e?.heading?`asrouter-newtab-message-heading`:n}
      >
        ${e?.hideDismissButton?n:r`<div class="dismiss-button">
              <moz-button
                type="icon ghost"
                size="small"
                iconSrc="chrome://global/skin/icons/close.svg"
                data-l10n-id="newtab-activation-window-message-dismiss-button"
                @click=${this.#c.bind(this)}
              ></moz-button>
            </div>`}
        <div class="message-inner">
          ${this.#_(e)}
          <div class="message-content">
            ${this.#f(e?.heading)}
            ${this.#p(e?.body)}
            ${this.#v(e?.primaryButton,e?.secondaryButton)}
          </div>
        </div>
      </aside>
    `}},customElements.define(`asrouter-newtab-message`,u)})))()}var f;function p(){return(p=e((()=>{f=new URL(`asrouter-newtab-message-Drw8_X6g.css`,import.meta.url).href+``})))()}var m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{t(),d(),p(),window.MozXULElement.insertFTLIfNeeded(`browser/newtab/newtab.ftl`),m={title:`Domain-specific UI Widgets/ASRouter/ASRouter New Tab Message`,component:`asrouter-newtab-message`,argTypes:{}},h=({messageData:e})=>r`
  <style>
    .asrouter-newtab-message-wrapper {
      background-color: var(--background-color-canvas);
      border: 2px solid var(--card-border-color);
      color: var(--text-color);
      border-radius: var(--border-radius-large);
      margin-block: 0 var(--space-xlarge);
      margin-inline: auto;
      overflow: hidden;
      max-width: 904px;
    }
  </style>
  <div class="asrouter-newtab-message-wrapper">
    <asrouter-newtab-message
      .messageData=${e}
      .cssOverride=${f}
      .handleBlock=${()=>console.warn(`handleBlock called — message permanently blocked`)}
      .handleDismiss=${()=>console.warn(`handleDismiss called — DISMISS telemetry sent, message closed`)}
      .handleClose=${()=>console.warn(`handleClose called — message closed`)}
      .handleClick=${e=>console.warn(`handleClick called — CLICK telemetry sent, source: ${e}`)}
    ></asrouter-newtab-message>
  </div>
`,g={id:`TEST_ASROUTER_NEWTAB_MESSAGE`,template:`newtab_message`,content:{messageType:`ASRouterNewTabMessage`,imageSrc:`chrome://newtab/content/data/content/assets/kit-in-circle.svg`,heading:`Test Heading`,body:`This is a test message body.`,primaryButton:{label:`Primary Action`,action:{type:`OPEN_URL`,data:{args:`https://www.mozilla.org/`}}}},trigger:{id:`newtabMessageCheck`},groups:[]},_=h.bind({}),_.args={messageData:g},v=h.bind({}),v.args={messageData:{...g,content:{...g.content,secondaryButton:{label:`Not now`,action:{type:`CANCEL`}}}}},y=h.bind({}),y.args={messageData:{...g,content:{...g.content,hideDismissButton:!0}}},b=h.bind({}),b.args={messageData:{...g,content:{...g.content,secondaryButton:{label:`Not Now`,action:{dismiss:!0}}}}},x=h.bind({}),x.args={messageData:{...g,content:{...g.content,secondaryButton:{label:`No Thanks`,action:{type:`BLOCK_MESSAGE`,data:{id:`TEST_ASROUTER_NEWTAB_MESSAGE`}}}}}},S=h.bind({}),S.args={messageData:{...g,content:{...g.content,primaryButton:void 0}}},C=h.bind({}),C.args={messageData:{...g,content:{...g.content,imageSrc:``}}}})))()}w();export{x as BlockOnSecondaryButton,_ as Default,b as DismissOnSecondaryButton,C as NoImage,v as WithSecondaryButton,S as WithoutButtons,y as WithoutDismissButton,m as default};