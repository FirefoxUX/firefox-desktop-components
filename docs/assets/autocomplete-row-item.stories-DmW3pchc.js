import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,f as n,u as r,x as i}from"./lit.all-BYVOqvrj.js";import{c as a,o}from"./iframe-DZPZZ1s7.js";var s;function c(){return(c=e((()=>{s=new URL(`autocomplete-row-item-DJoQW4rr.css`,import.meta.url).href+``})))()}var l;function u(){return(u=e((()=>{c(),n(),a(),l=class extends o{static properties={label:{type:String,fluent:!0},description:{type:String,fluent:!0},value:{type:String},icon:{type:String},actions:{type:Object},selected:{type:Boolean,reflect:!0},pointerselected:{type:Boolean,reflect:!0},subfocused:{type:Boolean,reflect:!0},menuopen:{type:Boolean,reflect:!0},type:{type:String,reflect:!0},sources:{type:Array},sourcesLabel:{type:String},sourcesPillsLabel:{type:String},sourcesPillsLabelHover:{type:String},loading:{type:Boolean},loadingLabel:{type:String},emptySourcesLabel:{type:String}};#e=null;#t(e,t){let n=this.closest(`panel`);if(!n)return!1;let r=`http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul`,i=document.createElementNS(r,`menupopup`);i.setAttribute(`aria-label`,this.actions.secondary.label);let a=n.richlistbox,o=a?.selectedIndex;for(let{label:e,action:n}of t){let t=document.createElementNS(r,`menuitem`);t.setAttribute(`label`,e),t.setAttribute(`closemenu`,`single`),t.addEventListener(`command`,()=>{a&&a.selectedIndex!=o&&(a.selectedIndex=o),n()}),i.appendChild(t)}return this.#e=i,this.menuopen=!0,i.addEventListener(`popuphiding`,()=>{this.#e=null,this.menuopen=!1,i.remove()}),n.appendChild(i),i.openPopup(e,`after_start`),!0}closeActionsMenu(){this.#e?.hidePopup(),this.menuopen=!1}getSecondaryActionItemIcon(e){switch(e){case`edit`:return`chrome://global/skin/icons/edit.svg`;case`menupopup`:return`chrome://global/skin/icons/more.svg`;case`delete`:return`chrome://global/skin/icons/delete.svg`;default:return`chrome://global/skin/icons/settings.svg`}}activateSecondaryAction(){let{action:e,actions:t}=this.actions?.secondary??{};if(e)return e(),!1;if(t){let e=this.shadowRoot.querySelector(`moz-button.secondary-action`);return this.#t(e,t)}return!1}renderSecondaryActionButton(){let{type:e,action:n,actions:i,label:a,tooltip:o}=this.actions.secondary;return!n&&!i?``:r`<moz-button
      id="secondary-action-button"
      @mousedown=${e=>{e.preventDefault(),e.stopPropagation()}}
      @mouseup=${e=>e.stopPropagation()}
      @click=${e=>{e.stopPropagation(),this.activateSecondaryAction()}}
      type="icon ghost"
      title=${t(o??a)}
      .ariaLabel=${o?a:null}
      .ariaHasPopup=${i?`menu`:null}
      .ariaExpanded=${i?String(!!this.menuopen):null}
      .iconSrc=${this.getSecondaryActionItemIcon(e)}
      class="secondary-action"
    ></moz-button>`}renderSmartFormFillLoader(){return r`
      <span class="sff-loader">
        <span class="sff-loader-spinner"></span>
        <span class="sff-loader-label">${this.loadingLabel}</span>
      </span>
    `}renderSourcesSummaryPill(){return r`
      <span
        class="sources-pill"
        @mousedown=${e=>{e.stopPropagation(),this.activateSecondaryAction()}}
        @mouseup=${e=>e.stopPropagation()}
      >
        <span class="sources-summary-list">
          ${this.sources.map(e=>r`
              <img
                class="source-favicon source-favicon-single"
                src=${e.favicon}
                alt=${e.label}
              />
            `)}
        </span>
        <span class="sources-summary-text">
          <span class="sources-count">${this.sourcesPillsLabel}</span>
          <span class="sources-count sources-count-hover"
            >${this.sourcesPillsLabelHover}</span
          >
          <img
            class="sources-count-icon"
            src="chrome://global/skin/icons/arrow-right-12.svg"
            alt=""
          />
        </span>
      </span>
    `}renderNamedSourcePills(){return r`
      <span class="sources-named-list">
        ${this.sources.map(e=>r`<span class="sources-pill sources-pill-named">
              <img
                role="presentation"
                class="source-favicon"
                src=${e.favicon}
              />
              <span class="source-label">${e.label}</span>
            </span>`)}
      </span>
    `}renderSourcesValue(){return this.loading?this.renderSmartFormFillLoader():this.sources?.length?this.sources?.length<3?this.renderNamedSourcePills():this.renderSourcesSummaryPill():this.emptySourcesLabel}renderSmartFormFillLabels(){return r`
      <span class="description smart-form-fill-sources">
        <span class="sources-label">${this.sourcesLabel}</span>
        ${this.renderSourcesValue()}
      </span>
    `}renderDefaultLabels(){return r`<span class="label">${this.label}</span> ${i(this.description,()=>r`<span class="description">${this.description}</span>`)}`}render(){return r`
      <link
        rel="stylesheet"
        href="${s}"
      />
      <div @click=${this.actions?.primary} class="row-item">
        ${i(this.icon,()=>r`<img role="presentation" class="icon" src=${this.icon} />`)}
        <div class="labels-container">
          ${this.type==`smartFormFill`?this.renderSmartFormFillLabels():this.renderDefaultLabels()}
        </div>
        ${i(this.actions?.secondary,()=>this.renderSecondaryActionButton())}
      </div>
    `}},customElements.define(`autocomplete-row-item`,l)})))()}var d,f,p,m;function h(){return(h=e((()=>{n(),u(),d={title:`Domain-specific UI Widgets/Credential Management/Autocomplete`,component:`autocomplete-row-item`,argTypes:{label:{control:{type:`text`}},description:{control:{type:`text`}},value:{control:{type:`text`}},icon:{control:{type:`text`}},actions:{control:{type:`object`}}}},f=({label:e,description:t,value:n,icon:i,actions:a})=>r`
  <autocomplete-row-item
    .label=${e}
    .description=${t}
    .value=${n}
    .icon=${i}
    .actions=${a}
  ></autocomplete-row-item>
`,p=f.bind({}),p.args={label:`example@example.com`,description:`From this website`,value:`example@example.com`,icon:`chrome://global/skin/icons/defaultFavicon.svg`,actions:{primary:()=>alert(`Primary action!`)}},m=f.bind({}),m.args={label:`example@example.com`,description:`From this website`,value:`example@example.com`,icon:`chrome://global/skin/icons/defaultFavicon.svg`,actions:{primary:()=>alert(`Primary action!`),secondary:{type:`edit`,action:()=>alert(`secondary action`)}}}})))()}h();export{p as Default,m as WithSingleSecondaryAction,d as default};