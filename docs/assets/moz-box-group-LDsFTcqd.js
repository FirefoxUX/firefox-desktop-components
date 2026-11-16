import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{d as n,f as r,i,l as a,m as o,u as s}from"./lit.all-BYVOqvrj.js";import{a as c,c as l,o as u,s as d}from"./iframe-B6GfsneT.js";var f;function p(){return(p=e((()=>{f=new URL(`moz-box-group-TQb94iRq.css`,import.meta.url).href+``})))()}var m;function h(){return(h=e((()=>{m=new URL(`moz-box-item-B8p2fBnL.css`,import.meta.url).href+``})))()}var g=t({MozBoxItem:()=>C}),_,v,y,b,x,S,C;function w(){return(w=e((()=>{h(),r(),l(),O(),window.MozXULElement?.insertFTLIfNeeded(`toolkit/global/mozBoxBase.ftl`),_=`Right`,v=`Left`,y={LTR:{FORWARD:_,BACKWARD:v},RTL:{FORWARD:v,BACKWARD:_}},b=`forward`,x=`backward`,S={[b]:1,[x]:-1},C=class extends c{#e=[];static properties={layout:{type:String,reflect:!0},supportPage:{type:String,attribute:`support-page`},_hasSlottedSupportLink:{type:Boolean,state:!0},_hasSlottedDescription:{type:Boolean,state:!0}};static queries={defaultSlotEl:`slot:not([name])`,actionsStartSlotEl:`slot[name=actions-start]`,actionsSlotEl:`slot[name=actions]`,handleEl:`.handle`};constructor(){super(),this.layout=`default`,this._hasSlottedDescription=!1,this.addEventListener(`keydown`,e=>this.handleKeydown(e))}get hasSupportPage(){return this.supportPage||this._hasSlottedSupportLink}get hasDescription(){return this.description||this._hasSlottedDescription}checkSlottedSupportLink(e){this._hasSlottedSupportLink=!!e.target?.assignedNodes()?.length}checkSlottedDescription(e){this._hasSlottedDescription=!!e.target?.assignedNodes()?.length}firstUpdated(){this.getActionEls()}handleKeydown(e){let t=this.#e.find(t=>t.contains(e.target));if(!t)return;let n=this.getNavigationDirections();switch(e.key){case n.FORWARD:case`Arrow${n.FORWARD}`:this.navigate(t,b);break;case n.BACKWARD:case`Arrow${n.BACKWARD}`:this.navigate(t,x);break;case`ArrowUp`:case`Up`:case`ArrowDown`:case`Down`:this.isFocusable&&e.stopPropagation()}}navigate(e,t){let n=this.#e,r=n.indexOf(e),i=S[t];for(let e=r+i;e>=0&&e<n.length;e+=i){let t=n[e];if(t.focus(),t.contains(this.getRootNode().activeElement))return}}getNavigationDirections(){return this.isDocumentRTL?y.RTL:y.LTR}get isDraggable(){return this.closest(`moz-box-group`)?.type==E.reorderable&&this.slot!=`header`&&this.slot!=`footer`&&!this.slot.includes(`static`)}get isFocusable(){return this.hasAttribute(`tabindex`)}focus(e){this.isFocusable?super.focus(e):(this.actionsStartSlotEl?.assignedElements()?.[0]??this.actionsSlotEl.assignedElements()?.[0])?.focus(e)}focusFromEvent(e){if(this.isFocusable||e.key!=`Up`&&e.key!=`ArrowUp`){this.focus();return}let t=this.actionsSlotEl.assignedElements(),n=t.length?t:this.actionsStartSlotEl?.assignedElements();(n?.[n.length-1])?.focus()}getActionEls(){let e=this.actionsStartSlotEl?.assignedElements()??[],t=this.actionsSlotEl.assignedElements();this.#e=[...e,...t]}stylesTemplate(){return s`${super.stylesTemplate()}
      <link
        rel="stylesheet"
        href="${m}"
      />`}slotTemplate(e){return s`
      <span
        role="group"
        aria-labelledby="label"
        aria-describedby="description"
        class="actions"
        @slotchange=${this.getActionEls}
      >
        <slot name=${e}></slot>
      </span>
    `}descriptionTemplate(){return this.description?s`<span class="description text-deemphasized" id="description"
      >${this.description}</span
    >`:s`<slot
        class="description text-deemphasized"
        id="description"
        name="description"
        @slotchange=${this.checkSlottedDescription}
      ></slot>`}textTemplate(){return s`<div
      class=${i({"text-content":!0,"has-icon":this.iconSrc,"has-description":this.hasDescription,"has-support-page":this.hasSupportPage})}
    >
      ${this.iconTemplate()}
      <span class="label-wrapper">
        ${this.labelTemplate()}${this.hasDescription?``:this.supportPageTemplate()}
      </span>
      <span class="description-wrapper">
        ${this.descriptionTemplate()}${this.hasDescription?this.supportPageTemplate():``}
      </span>
    </div>`}supportPageTemplate(){return this.supportPage?s`<a
        class="support-page"
        is="moz-support-link"
        support-page=${this.supportPage}
        part="support-link"
        aria-describedby=${this.description?`description`:`label`}
      ></a>`:s`<slot
      name="support-link"
      class="support-page"
      @slotchange=${this.checkSlottedSupportLink}
    ></slot>`}handleTemplate(){return this.isDraggable?s`<span
      class="handle"
      data-l10n-id=${this.label?`moz-box-item-reorder-handle-named`:`moz-box-item-reorder-handle`}
      data-l10n-args=${this.label?JSON.stringify({item:this.label}):void 0}
    ></span>`:``}render(){return s`
      ${this.stylesTemplate()}
      <div class="box-container">
        ${this.handleTemplate()} ${this.slotTemplate(`actions-start`)}
        <div class="box-content">
          ${this.label?this.textTemplate():s`<slot></slot>`}
        </div>
        ${this.slotTemplate(`actions`)}
      </div>
    `}},customElements.define(`moz-box-item`,C)})))()}var T=t({GROUP_TYPES:()=>E,MozBoxGroup:()=>D}),E,D;function O(){return(O=e((()=>{p(),r(),l(),w(),E={list:`list`,reorderable:`reorderable-list`},D=class extends u{#e=!0;static properties={type:{type:String},ariaLabel:{type:String,fluent:!0,mapped:!0},listItems:{type:Array,state:!0},staticItems:{type:Array,state:!0}};static queries={reorderableList:`moz-reorderable-list`,headerSlot:`slot[name='header']`,footerSlot:`slot[name='footer']`};constructor(){super(),this.listItems=[],this.staticItems=[],this.listMutationObserver=new MutationObserver(this.updateItems.bind(this))}firstUpdated(e){super.firstUpdated(e),this.listMutationObserver.observe(this,{attributeFilter:[`hidden`],subtree:!0,childList:!0}),this.renderRoot.addEventListener(`scroll`,this.#t,{capture:!0}),this.updateItems()}#t=()=>{this.dispatchEvent(new Event(`scroll`,{composed:!0}))};get isListType(){return this.type==E.list||this.type==E.reorderable}contentTemplate(){return this.type==E.reorderable?s`<moz-reorderable-list
        class="scroll-container"
        itemselector="moz-box-item:not([static])"
        dragselector=".handle"
        @reorder=${this.handleReorder}
      >
        ${this.slotTemplate()}
      </moz-reorderable-list>`:this.slotTemplate()}slotTemplate(){let e=this.type==E.reorderable;if(this.isListType){let t=e?o`ol`:o`ul`;return a`<${t}
          tabindex="-1"
          role=${n(e?`listbox`:void 0)}
          aria-label=${n(e?this.ariaLabel:void 0)}
          class="list scroll-container"
          aria-orientation="vertical"
          @keydown=${this.handleKeydown}
          @focusin=${this.handleFocus}
          @focusout=${this.handleBlur}
        >
          ${this.listItems.map((t,r)=>s`<li
              role=${n(e?`presentation`:void 0)}
            >
              <slot name=${r}></slot>
            </li> `)}
          ${this.staticItems?.map((t,r)=>s`<li
              role=${n(e?`presentation`:void 0)}
            >
              <slot name=${`static-${r}`}></slot>
            </li> `)}
        </${t}>
        <slot hidden></slot>
        ${e?s`<slot name="static" hidden></slot>`:``}`}return s`<div class="scroll-container" tabindex="-1">
      <slot></slot>
    </div>`}getMozBoxElement(e){let t=`moz-box-item, moz-box-link, moz-box-button`;return e.matches(t)?e:e.querySelector(t)}restoreTabindex(e){let t=this.getMozBoxElement(e);t?.localName===`moz-box-item`?this.isListType?t.setAttribute(`tabindex`,`0`):t.removeAttribute(`tabindex`):e.removeAttribute(`tabindex`)}updateOptionRole(e){let t=this.getMozBoxElement(e);t&&this.type==E.reorderable?t.setAttribute(`role`,`option`):t?.removeAttribute(`role`)}reorderArrayFromEvent(e,t){let{draggedIndex:n,insertAt:r}=t.detail;e=Array.from(e);let[i]=e.splice(n,1);return e.splice(r,0,i),e}handleReorder(e){let{targetIndex:t}=e.detail;this.dispatchEvent(new CustomEvent(`reorder`,{bubbles:!0,detail:e.detail})),requestAnimationFrame(()=>{this.listItems[t]?.focus(),this.announceReorder(t)})}async announceReorder(e){let t=await this.ownerDocument.l10n.formatValue(`moz-box-group-reorder-announcement`,{position:e+1,total:this.listItems.length+this.staticItems.length});this.ownerDocument.ariaNotify(t)}handleKeydown(e){let t=e.originalTarget;if(t.localName===`moz-box-item`&&t.isDraggable){let t=this.reorderableList.evaluateKeyDownEvent(e);if(t){e.preventDefault(),e.stopPropagation(),this.handleReorder({detail:t});return}}if(d(e))return;let n=e.target.closest(`[position]`);if(!n)return;let r=n.getAttribute(`position`),i=parseInt(r),a=[...this.listItems,...this.staticItems];switch(e.key){case`Down`:case`ArrowDown`:{e.preventDefault();let t=a[i+1];this.#n(t,e);break}case`Up`:case`ArrowUp`:{e.preventDefault();let t=a[i-1];this.#n(t,e);break}}}#n(e,t){e instanceof C?e.focusFromEvent(t):e instanceof HTMLElement&&e.focus()}handleFocus(e){if(this.#e){let t=e.target.closest(`[position]`);if(!t)return;this.#e=!1;let n=this.getMozBoxElement(t);[...this.listItems,...this.staticItems].forEach(e=>{let t=this.getMozBoxElement(e);t?.localName===`moz-box-item`?t.setAttribute(`tabindex`,t===n?`0`:`-1`):e.setAttribute(`tabindex`,`-1`)})}}handleBlur(){this.#e||(this.#e=!0,[...this.listItems,...this.staticItems].forEach(e=>{this.restoreTabindex(e)}))}updateItems(){let e=[],t=[];[...this.children].forEach(n=>{n.slot===`header`||n.slot===`footer`||n.hidden||(n.slot.includes(`static`)?t.push(n):e.push(n))}),this.listItems=e,this.staticItems=t}render(){return s`
      <link
        rel="stylesheet"
        href="${f}"
      />
      <slot name="header"></slot>
      ${this.contentTemplate()}
      <slot name="footer"></slot>
    `}updated(e){let t=this.headerSlot.assignedNodes()[0],n=this.footerSlot.assignedNodes().at(-1);t?.classList.add(`first`),n?.classList.add(`last`),e.has(`listItems`)&&this.listItems.length&&(this.listItems.forEach((e,r)=>{this.isListType&&(e.slot=r),e.setAttribute(`position`,r),e.classList.toggle(`first`,r==0&&!t),e.classList.toggle(`last`,r==this.listItems.length-1&&!this.staticItems.length&&!n),this.restoreTabindex(e),this.updateOptionRole(e)}),this.#e||=!0),e.has(`staticItems`)&&this.staticItems.length&&this.staticItems.forEach((e,r)=>{e.slot=`static-${r}`,e.setAttribute(`position`,this.listItems.length+r),(e.querySelector(`moz-box-item`)??e).setAttribute(`static`,``),e.classList.toggle(`first`,r==0&&!this.listItems.length&&!t),e.classList.toggle(`last`,r==this.staticItems.length-1&&!n),this.restoreTabindex(e),this.updateOptionRole(e)}),e.has(`type`)&&this.isListType&&this.updateItems()}},customElements.define(`moz-box-group`,D)})))()}export{g as a,w as i,O as n,T as r,E as t};