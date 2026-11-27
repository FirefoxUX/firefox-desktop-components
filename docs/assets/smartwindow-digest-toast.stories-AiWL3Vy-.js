import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,u as n}from"./lit.all-Co4HOUmF.js";import{c as r,o as i}from"./iframe-17211AdQ.js";import{n as a}from"./moz-button-MQZwUQZw.js";import{t as o}from"./moz-message-bar-CE-Bi8NC.js";var s;function c(){return(c=e((()=>{s=``+new URL(`smartwindow-digest-toast-HEg9B5rY.css`,import.meta.url).href})))()}var l,u,d,f;function p(){return(p=e((()=>{c(),t(),r(),o(),a(),l=Object.freeze({daily:`smartwindow-digest-toast-created-daily`,weekly:`smartwindow-digest-toast-created-weekly`}),u=`smartwindow-digest-toast-created`,d=Object.freeze({default:`smartwindow-digest-toast-error-create`,edit:`smartwindow-digest-toast-error-edit`}),f=class extends i{static properties={type:{type:String},digest:{type:Object},mode:{type:String},closing:{type:Boolean,reflect:!0}};constructor(){super(),this.type=`success`,this.digest=null,this.mode=`default`,this.closing=!1}connectedCallback(){super.connectedCallback(),this.popover=`manual`,window.IS_STORYBOOK||(Services.obs.addObserver(this.#e,`ai-window-state-changed`),this.documentGlobal.addEventListener(`unload`,()=>this.remove(),{once:!0}))}disconnectedCallback(){super.disconnectedCallback(),window.IS_STORYBOOK||Services.obs.removeObserver(this.#e,`ai-window-state-changed`)}#e=(e,t,n)=>{n==`classic`&&e==window.browsingContext?.topChromeWindow&&this.remove()};async firstUpdated(){await this.ownerDocument.l10n?.translateFragment(this.shadowRoot),await this.shadowRoot.querySelector(`moz-message-bar`)?.updateComplete,this.isConnected&&this.showPopover()}async close(){this.closing||(this.closing=!0,await this.updateComplete,await Promise.allSettled(this.getAnimations().map(e=>e.finished)),this.remove())}#t(e){e.preventDefault(),this.close()}#n(){this.close(),this.dispatchEvent(new CustomEvent(`smartwindow-digest-view`,{detail:{digest:this.digest},bubbles:!0,composed:!0}))}#r(){let e=l[this.digest?.schedule?.type]??u;return n`
      <moz-message-bar
        dismissable
        data-l10n-id=${e}
        data-l10n-args=${JSON.stringify({title:this.digest?.title})}
        @message-bar:user-dismissed=${this.#t}
      >
        <moz-button
          slot="actions"
          class="view-button"
          type="muted"
          data-l10n-id="smartwindow-digest-toast-view"
          @click=${this.#n}
        ></moz-button>
      </moz-message-bar>
    `}#i(){return n`
      <moz-message-bar
        type="error"
        dismissable
        data-l10n-id=${d[this.mode]}
        @message-bar:user-dismissed=${this.#t}
      ></moz-message-bar>
    `}render(){return n`
      <link
        rel="stylesheet"
        href="${s}"
      />
      ${this.type===`error`?this.#i():this.#r()}
    `}},customElements.define(`smartwindow-digest-toast`,f)})))()}var m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{t(),p(),window.MozXULElement.insertFTLIfNeeded(`browser/aiWindow.ftl`),window.MozXULElement.insertFTLIfNeeded(`preview/aiWindow.ftl`),m={title:`Domain-specific UI Widgets/AI Window/Smartwindow Digest Toast`,component:`smartwindow-digest-toast`,argTypes:{frequency:{options:[`daily`,`weekly`,`on-demand`],control:{type:`select`}},mode:{options:[`default`,`edit`],control:{type:`select`}}}},h=({type:e,title:t,frequency:r,mode:i})=>n`
  <smartwindow-digest-toast
    type=${e}
    mode=${i}
    .digest=${{id:`story-digest`,title:t,schedule:{type:r}}}
  ></smartwindow-digest-toast>
`,g=h.bind({}),g.args={type:`success`,title:`Nutrition research and food news`,frequency:`daily`,mode:`default`},_=h.bind({}),_.args={...g.args,frequency:`weekly`},v=h.bind({}),v.args={...g.args,frequency:`on-demand`},y=h.bind({}),y.args={...g.args,title:`New nutrition research, dietary guidance and food news from around the world`},b=h.bind({}),b.args={...g.args,type:`error`,mode:`default`},x=h.bind({}),x.args={...g.args,type:`error`,mode:`edit`}})))()}S();export{b as CreateFailed,g as Daily,x as EditFailed,y as LongTitle,v as OnDemand,_ as Weekly,m as default};