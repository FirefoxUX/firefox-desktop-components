import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{d as n,f as r,i,u as a}from"./lit.all-Co4HOUmF.js";import{c as o,o as s}from"./iframe-ChCqHcnv.js";import{t as c}from"./moz-label-CyR-DKif.js";var l;function u(){return(u=e((()=>{l=new URL(`moz-button-BRPMY_ez.css`,import.meta.url).href+``})))()}var d=t({MozButton:()=>m}),f,p,m;function h(){return(h=e((()=>{u(),r(),o(),c(),window.MozXULElement?.insertFTLIfNeeded(`toolkit/global/mozButton.ftl`),f=class{host;triggerEl=null;listenerTargetEl=null;popoverEl=null;get popoverTarget(){return this.host.popoverTarget}get ariaHasPopupDefault(){return`dialog`}get popoverToggledEvents(){return[`toggle`]}constructor(e){this.host=e,e.addController(this)}hostConnected(){this.popoverTarget&&(this.popoverEl=this.getPopover(),this.popoverEl&&this.popoverSetUp())}hostDisconnected(){this.removeListeners(),this.popoverEl=null}getTriggerEl(){return this.host.buttonEl}getListenerTargetEl(){return this.host}getPopover(){let e=this.host.getRootNode(),t=null;for(;e&&(t=e.querySelector?.(`#${this.popoverTarget}`),!t)&&e instanceof ShadowRoot;)e=e.host?.getRootNode();return t}#e=e=>{e.type==`click`&&e.preventDefault(),(e.type==`mousedown`&&e.button==0||e.inputSource==MouseEvent.MOZ_SOURCE_KEYBOARD||!e.detail)&&this.togglePopover(e)};togglePopover(e){this.popoverEl?.togglePopover()}onPopoverToggled(e){let t=!!this.popoverEl?.matches(`:popover-open`);this.updateOpenAttr(t)}updateOpenAttr(e){this.host.toggleAttribute(`open`,e),this.host.ariaExpanded=e?`true`:`false`}removeListeners(){this.listenerTargetEl?.removeEventListener(`click`,this.#e),this.listenerTargetEl?.removeEventListener(`mousedown`,this.#e);for(let e of this.popoverToggledEvents)this.popoverEl?.removeEventListener(e,this.#t);this.#t=null}popoverSetUp(){this.triggerEl=this.getTriggerEl(),this.listenerTargetEl=this.getListenerTargetEl(),this.listenerTargetEl.addEventListener(`click`,this.#e),this.listenerTargetEl.addEventListener(`mousedown`,this.#e),this.#t=e=>this.onPopoverToggled(e);for(let e of this.popoverToggledEvents)this.popoverEl?.addEventListener(e,this.#t);this.updateOpenAttr(!1),this.triggerEl.popoverTargetElement=this.popoverEl,this.host.requestUpdate()}popoverCleanUp(){this.removeListeners(),this.host.ariaExpanded=null,this.host.removeAttribute(`open`),this.triggerEl&&=(this.triggerEl.popoverTargetElement=null,null),this.listenerTargetEl=null,this.host.requestUpdate()}destroy(){this.popoverCleanUp(),this.popoverEl=null,this.host.removeController(this)}#t},p=class extends f{get popoverTarget(){return this.host.menuId}get ariaHasPopupDefault(){return`menu`}get popoverToggledEvents(){return[`shown`,`hidden`]}getTriggerEl(){return this.host.isSplitButton?this.host.chevronButtonEl:this.host.buttonEl}getListenerTargetEl(){return this.host.isSplitButton?this.host.chevronButtonEl:this.host}onPopoverToggled(e){let t=e?.type==`shown`;this.updateOpenAttr(t)}popoverCleanUp(){this.popoverEl?.localName==`panel-list`&&super.popoverCleanUp()}popoverSetUp(){this.popoverEl?.localName==`panel-list`&&super.popoverSetUp()}togglePopover(e){this.popoverEl?.toggle(e,this.host.isSplitButton?this.host.chevronButtonEl:this.host)}},m=class extends s{static shadowRootOptions={...s.shadowRootOptions,delegatesFocus:!0};static properties={label:{type:String,reflect:!0,fluent:!0},type:{type:String,reflect:!0},size:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0},title:{type:String,mapped:!0},tooltipText:{type:String,fluent:!0},ariaLabel:{type:String,mapped:!0},ariaHasPopup:{type:String,mapped:!0},ariaExpanded:{type:String,mapped:!0},ariaPressed:{type:String,mapped:!0},ariaChecked:{type:String,mapped:!0},ariaSelected:{type:String,mapped:!0},buttonRole:{type:String},iconSrc:{type:String},hasVisibleLabel:{type:Boolean,state:!0},accessKey:{type:String,mapped:!0,fluent:!0},attention:{type:Boolean},iconPosition:{type:String,reflect:!0},menuId:{type:String,reflect:!0},parentDisabled:{type:Boolean},popoverTarget:{type:String,reflect:!0}};static queries={buttonEl:`#main-button`,chevronButtonEl:`#chevron-button`,slotEl:`slot`,backgroundEl:`#main-button .button-background`};constructor(){super(),this.type=`default`,this.size=`default`,this.disabled=!1,this.hasVisibleLabel=!!this.label,this.attention=!1,this.iconPosition=`start`,this.iconSrc=void 0,this.menuId=``,this.parentDisabled=void 0,this.popoverTarget=``}updated(e){super.updated(e),(e.has(`menuId`)||e.has(`popoverTarget`)||e.has(`type`))&&(this._popoverController?.destroy(),this._popoverController=null,this.menuId?this._popoverController=new p(this):this.popoverTarget&&(this._popoverController=new f(this)))}get isSplitButton(){return this.type===`split`}get ariaHasPopup(){return this.#e?this.#e:this._popoverController?.ariaHasPopupDefault}set ariaHasPopup(e){this.#e=e}click(){this.performUpdate(),this.buttonEl?.click()}checkForLabelText(){this.hasVisibleLabel=this.slotEl?.assignedNodes().some(e=>e.textContent.trim())}labelTemplate(){return this.label?a`<span class="text" .textContent=${this.label}></span>`:a`<slot @slotchange=${this.checkForLabelText}></slot>`}iconTemplate(e){return this.iconSrc&&e==this.iconPosition?a`<img src=${this.iconSrc} role="presentation" />`:null}chevronButtonTemplate(){return this.isSplitButton?a`<button
        id="chevron-button"
        size=${this.size}
        ?disabled=${this.disabled||this.parentDisabled}
        data-l10n-id="moz-button-more-options"
        aria-labelledby="main-button chevron-button"
        aria-expanded=${n(this.ariaExpanded)}
        aria-haspopup=${n(this.ariaHasPopup)}
        @click=${e=>e.stopPropagation()}
        @mousedown=${e=>e.stopPropagation()}
      >
        <span
          class="button-background"
          part="chevron-button"
          type=${this.type}
          size=${this.size}
        >
          <img
            src="chrome://global/skin/icons/arrow-down${this.size===`small`?`-12`:``}.svg"
            role="presentation"
          />
        </span>
      </button>`:null}render(){return a`
      <link
        rel="stylesheet"
        href="${l}"
      />
      <button
        id="main-button"
        ?disabled=${this.disabled||this.parentDisabled}
        title=${n(this.title||this.tooltipText)}
        role=${n(this.buttonRole)}
        aria-label=${n(this.ariaLabel)}
        aria-expanded=${n(this.isSplitButton?void 0:this.ariaExpanded)}
        aria-haspopup=${n(this.isSplitButton?void 0:this.ariaHasPopup)}
        aria-pressed=${n(this.ariaPressed)}
        aria-checked=${n(this.ariaChecked)}
        aria-selected=${n(this.ariaSelected)}
        accesskey=${n(this.accessKey)}
      >
        <span
          class=${i({labelled:this.label||this.hasVisibleLabel,"button-background":!0,badged:(this.iconSrc||this.type.includes(`icon`))&&this.attention})}
          part="button"
          type=${this.type}
          size=${this.size}
        >
          ${this.iconTemplate(`start`)}
          <label
            is="moz-label"
            shownaccesskey=${n(this.accessKey)}
            part="moz-button-label"
          >
            ${this.labelTemplate()}
          </label>
          ${this.iconTemplate(`end`)}
        </span>
      </button>
      ${this.chevronButtonTemplate()}
    `}#e},customElements.define(`moz-button`,m)})))()}export{h as n,d as r,m as t};