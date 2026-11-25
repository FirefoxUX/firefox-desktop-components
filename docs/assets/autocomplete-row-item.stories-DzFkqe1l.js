import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{S as t,d as n,f as r,u as i}from"./lit.all-Co4HOUmF.js";import{c as a,o}from"./iframe-DbtNkzFn.js";var s;function c(){return(c=e((()=>{s=``+new URL(`autocomplete-row-item-7QQxIEdA.css`,import.meta.url).href})))()}var l;function u(){return(u=e((()=>{c(),r(),a(),l=class extends o{static properties={label:{type:String,fluent:!0},description:{type:String,fluent:!0},value:{type:String},icon:{type:String},actions:{type:Object},selected:{type:Boolean,reflect:!0},pointerselected:{type:Boolean,reflect:!0},subfocused:{type:Boolean,reflect:!0},menuopen:{type:Boolean,reflect:!0},type:{type:String,reflect:!0},sources:{type:Array},sourcesLabel:{type:String},sourcesPillsLabel:{type:String},sourcesPillsLabelHover:{type:String},loading:{type:Boolean},loadingLabel:{type:String},emptySourcesLabel:{type:String}};#e=null;#t(e,t){let n=this.closest(`panel`);if(!n)return!1;let r=`http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul`,i=document.createElementNS(r,`menupopup`);i.setAttribute(`aria-label`,this.actions.secondary.label);let a=n.richlistbox,o=a?.selectedIndex;for(let{label:e,action:n}of t){let t=document.createElementNS(r,`menuitem`);t.setAttribute(`label`,e),t.setAttribute(`closemenu`,`single`),t.addEventListener(`command`,()=>{a&&a.selectedIndex!=o&&(a.selectedIndex=o),n()}),i.appendChild(t)}return this.#e=i,this.menuopen=!0,i.addEventListener(`popuphiding`,()=>{this.#e=null,this.menuopen=!1,i.remove()}),n.appendChild(i),i.openPopup(e,`after_start`),!0}closeActionsMenu(){this.#e?.hidePopup(),this.menuopen=!1}getSecondaryActionItemIcon(e){switch(e){case`edit`:return`chrome://global/skin/icons/edit.svg`;case`menupopup`:return`chrome://global/skin/icons/more.svg`;case`delete`:return`chrome://global/skin/icons/delete.svg`;default:return`chrome://global/skin/icons/settings.svg`}}activateSecondaryAction(){let{action:e,actions:t}=this.actions?.secondary??{};if(e)return e(),!1;if(t){let e=this.shadowRoot.querySelector(`moz-button.secondary-action`);return this.#t(e,t)}return!1}renderSecondaryActionButton(){let{type:e,action:t,actions:r,label:a,tooltip:o}=this.actions.secondary;return!t&&!r?``:i`<moz-button
      id="secondary-action-button"
      @mousedown=${e=>{e.preventDefault(),e.stopPropagation()}}
      @mouseup=${e=>e.stopPropagation()}
      @click=${e=>{e.stopPropagation(),this.activateSecondaryAction()}}
      type="icon ghost"
      title=${n(o??a)}
      .ariaLabel=${o?a:null}
      .ariaHasPopup=${r?`menu`:null}
      .ariaExpanded=${r?String(!!this.menuopen):null}
      .iconSrc=${this.getSecondaryActionItemIcon(e)}
      class="secondary-action"
    ></moz-button>`}renderSmartFormFillLoader(){return i`
      <span class="sff-loader">
        <span class="sff-loader-spinner"></span>
        <span class="sff-loader-label">${this.loadingLabel}</span>
      </span>
    `}renderSourcesSummaryPill(){return i`
      <span
        class="sources-pill"
        @mousedown=${e=>{e.stopPropagation(),this.activateSecondaryAction()}}
        @mouseup=${e=>e.stopPropagation()}
      >
        <span class="sources-summary-list">
          ${this.sources.map(e=>i`
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
    `}renderNamedSourcePills(){return i`
      <span class="sources-named-list">
        ${this.sources.map(e=>i`<span class="sources-pill sources-pill-named">
              <img
                role="presentation"
                class="source-favicon"
                src=${e.favicon}
              />
              <span class="source-label">${e.label}</span>
            </span>`)}
      </span>
    `}renderSourcesValue(){return this.loading?this.renderSmartFormFillLoader():this.sources?.length?this.sources?.length<3?this.renderNamedSourcePills():this.renderSourcesSummaryPill():this.emptySourcesLabel}renderSmartFormFillLabels(){return i`
      <span class="description smart-form-fill-sources">
        <span class="sources-label">${this.sourcesLabel}</span>
        ${this.renderSourcesValue()}
      </span>
    `}renderDefaultLabels(){return i`<span class="label">${this.label}</span> ${t(this.description,()=>i`<span class="description">${this.description}</span>`)}`}render(){return i`
      <link
        rel="stylesheet"
        href="${s}"
      />
      <div @click=${this.actions?.primary} class="row-item">
        ${t(this.icon,()=>i`<img role="presentation" class="icon" src=${this.icon} />`)}
        <div class="labels-container">
          ${this.type==`smartFormFill`?this.renderSmartFormFillLabels():this.renderDefaultLabels()}
        </div>
        ${t(this.actions?.secondary,()=>this.renderSecondaryActionButton())}
      </div>
    `}},customElements.define(`autocomplete-row-item`,l)})))()}var d,f,p,m;function h(){return(h=e((()=>{r(),u(),d={title:`Domain-specific UI Widgets/Credential Management/Autocomplete`,component:`autocomplete-row-item`,argTypes:{label:{control:{type:`text`}},description:{control:{type:`text`}},value:{control:{type:`text`}},icon:{control:{type:`text`}},actions:{control:{type:`object`}}}},f=({label:e,description:t,value:n,icon:r,actions:a})=>i`
  <autocomplete-row-item
    .label=${e}
    .description=${t}
    .value=${n}
    .icon=${r}
    .actions=${a}
  ></autocomplete-row-item>
`,p=f.bind({}),p.args={label:`example@example.com`,description:`From this website`,value:`example@example.com`,icon:`chrome://global/skin/icons/defaultFavicon.svg`,actions:{primary:()=>alert(`Primary action!`)}},m=f.bind({}),m.args={label:`example@example.com`,description:`From this website`,value:`example@example.com`,icon:`chrome://global/skin/icons/defaultFavicon.svg`,actions:{primary:()=>alert(`Primary action!`),secondary:{type:`edit`,action:()=>alert(`secondary action`)}}}})))()}h();export{p as Default,m as WithSingleSecondaryAction,d as default};