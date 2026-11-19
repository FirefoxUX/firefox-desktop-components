import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{a as n,b as r,d as i,f as a,i as o,u as s,v as c}from"./lit.all-Co4HOUmF.js";import{c as l,i as u,o as d}from"./iframe-CEh6YfCk.js";var f;function p(){return(p=e((()=>{f=new URL(`moz-select-Cl-PcMtp.css`,import.meta.url).href+``})))()}var m=t({MozOption:()=>g,MozSelect:()=>h}),h,g;function _(){return(_=e((()=>{p(),a(),l(),h=class extends u{static properties={size:{type:String,reflect:!0},options:{type:Array,state:!0},selectedOption:{type:Object,state:!0},selectedIndex:{type:Number,state:!0},usePanelList:{type:Boolean,state:!0}};static inputLayout=`block`;static queries={panelList:`panel-list`,panelTrigger:`.panel-trigger`};constructor(){super(),this.size=`default`,this.value=``,this.options=[],this.usePanelList=!1,this.selectedOption=null,this.selectedIndex=0,this.slotRef=n(),this.optionsMutationObserver=new MutationObserver(this.populateOptions.bind(this))}firstUpdated(e){super.firstUpdated(e),this.optionsMutationObserver.observe(this,{attributeFilter:[`label`,`value`,`iconsrc`,`disabled`,`hidden`],childList:!0,subtree:!0})}update(e){super.update(e),this.hasUpdated&&e.has(`options`)&&(this.value=this.inputEl.value)}willUpdate(e){super.willUpdate(e),(e.has(`value`)||e.has(`options`))&&(this.selectedIndex=this.options.findIndex(e=>e.value===this.value),this.selectedOption=this.options[this.selectedIndex]??this.options[0])}updated(){this.panelTrigger&&this.panelList&&this.panelTrigger.popoverTargetElement!==this.panelList&&(this.panelTrigger.popoverTargetElement=this.panelList)}get _selectedOptionIconSrc(){return this.selectedOption?.iconSrc??``}populateOptions(){if(!this.slotRef.value){this.options=[],this.usePanelList=!1;return}let e=[];for(let t of this.slotRef.value.assignedNodes())t.localName===`moz-option`?e.push({value:t.value,label:t.getAttribute(`label`)||t.label,iconSrc:t.iconSrc,disabled:t.disabled,hidden:t.hidden}):t.localName===`hr`&&e.push({separator:!0});this.options=e,this.usePanelList=e.some(e=>e.iconSrc),this.usePanelList&&!this.value&&this.options.length&&(this.value=this.options[0].value)}handleStateChange(e){this.value=e.target.value}handlePanelChange(e){this.handleStateChange(e),this.redispatchEvent(new Event(`change`,{bubbles:!0}))}handlePanelHidden(){let e=document.activeElement;e&&e!==document.body&&e!==this||this.panelTrigger?.focus()}handlePanelMousedown(e){e.button===0&&(navigator.platform.includes(`Mac`)&&this.panelTrigger?.focus(),this.panelList?.toggle(e,this.panelTrigger))}handlePanelClick(e){e.preventDefault(),e.detail===0&&this.panelList?.toggle(e)}togglePanel(e){this.panelList?.toggle(e)}handlePanelKeydown(e){if(!this.panelList?.open)switch(e.key){case`ArrowDown`:case`ArrowUp`:e.preventDefault(),navigator.platform.includes(`Mac`)?this.togglePanel(e):this.selectNextOption(e.key===`ArrowDown`?1:-1);break;case`Enter`:e.preventDefault(),this.togglePanel(e)}}selectNextOption(e){let t=this.selectedIndex,n=this.options;for(let r=1;r<n.length;r++){let i=n[t+e*r];if(i&&!i.disabled&&!i.hidden&&!i.separator){this.value=i.value,this.redispatchEvent(new Event(`change`,{bubbles:!0}));return}}}inputStylesTemplate(){return s` <link
      rel="stylesheet"
      href="${f}"
    />`}selectedOptionIconTemplate(){return this._selectedOptionIconSrc?s`<img
        src=${this._selectedOptionIconSrc}
        role="presentation"
        class="select-option-icon"
      />`:null}selectTemplate(){return s`<select
      id="input"
      name=${this.name}
      .value=${this.value}
      accesskey=${this.accessKey}
      title=${i(this.title)}
      @input=${this.handleStateChange}
      @change=${this.redispatchEvent}
      ?disabled=${this.disabled||this.parentDisabled}
      size=${this.size}
      aria-label=${i(this.ariaLabel??void 0)}
      aria-describedby="description"
      aria-description=${i(this.hasDescription?void 0:this.ariaDescription)}
    >
      ${this.options.map(e=>e.separator?s`<hr />`:s`
              <option
                value=${e.value}
                .selected=${e.value==this.value}
                ?disabled=${e.disabled}
                ?hidden=${e.hidden}
              >
                ${e.label}
              </option>
            `)}
    </select>`}panelTargetTemplate(){return s`<button
      id="input"
      name=${this.name}
      .value=${this.value}
      class="panel-trigger"
      type="button"
      role="combobox"
      aria-label=${i(this.ariaLabel)}
      aria-description=${i(this.hasDescription?void 0:this.ariaDescription)}
      aria-describedby="description"
      aria-haspopup="menu"
      aria-expanded=${this.panelList?.open?`true`:`false`}
      accesskey=${i(this.accessKey)}
      title=${i(this.title)}
      @mousedown=${this.handlePanelMousedown}
      @click=${this.handlePanelClick}
      @keydown=${this.handlePanelKeydown}
      ?disabled=${this.disabled||this.parentDisabled}
      size=${this.size}
    >
      <span class="panel-trigger-text">${this.selectedOption?.label}</span>
    </button>`}panelListTemplate(){return s`<panel-list
      .value=${this.value}
      min-width-from-anchor
      click-on-mouseup
      @click=${this.handlePanelChange}
      @hidden=${this.handlePanelHidden}
    >
      ${this.options.map(e=>e.separator?s`<hr />`:s`<panel-item
              .value=${e.value}
              ?selected=${e.value==this.value}
              ?disabled=${e.disabled}
              ?hidden=${e.hidden}
              icon=${i(e.iconSrc)}
              style=${r(e.iconSrc?{"--select-item-icon-url":`url(${e.iconSrc})`}:{})}
            >
              ${e.label}
            </panel-item>`)}
    </panel-list>`}inputTemplate(){return s`
      <div
        class=${o({"select-wrapper":!0,"with-icon":!!this._selectedOptionIconSrc})}
      >
        ${this.selectedOptionIconTemplate()}
        ${this.usePanelList?this.panelTargetTemplate():this.selectTemplate()}
        <img
          src="chrome://global/skin/icons/arrow-down.svg"
          role="presentation"
          class="select-chevron-icon"
        />
      </div>
      ${this.usePanelList?this.panelListTemplate():``}
      <slot
        @slotchange=${this.populateOptions}
        hidden
        ${c(this.slotRef)}
      ></slot>
    `}},customElements.define(`moz-select`,h),g=class extends d{static properties={value:{type:String,reflect:!0},label:{type:String,reflect:!0,fluent:!0},iconSrc:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0},hidden:{type:Boolean,reflect:!0}};constructor(){super(),this.value=``,this.label=``,this.iconSrc=``,this.disabled=!1,this.hidden=!1}render(){return``}},customElements.define(`moz-option`,g)})))()}export{m as n,_ as t};