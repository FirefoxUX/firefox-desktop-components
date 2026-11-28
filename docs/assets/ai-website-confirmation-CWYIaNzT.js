import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,f as n,u as r}from"./lit.all-Co4HOUmF.js";import{c as i,o as a}from"./iframe-DoVFImma.js";import{n as o}from"./moz-button-Cg-Kw8g5.js";import{t as s}from"./ai-website-select-24eD3Pwi.js";var c;function l(){return(l=e((()=>{c=``+new URL(`ai-website-confirmation-CzmIyqzj.css`,import.meta.url).href})))()}var u,d,f,p,m;function h(){return(h=e((()=>{l(),n(),i(),s(),o(),u=`ai-website-confirmation:selection-change`,d=`ai-website-confirmation:close`,f=`ai-website-confirmation:submit`,p=`ai-website-confirmation:toggle-all`,m=class extends a{static properties={tabs:{type:Array},confirmActionL10n:{type:Object},actionType:{type:String},tabGroupLabel:{type:String}};constructor(){super(),this.tabs=[],this.confirmActionL10n={disabled:`smart-window-confirm-close-tab`,enabled:`smart-window-confirm-close-tabs`},this.actionType=``,this.tabGroupLabel=``}handleSelectChange(e){e.stopPropagation();let{token:t,checked:n}=e.detail;this.tabs=this.tabs.map(e=>e.token===t?{...e,checked:n}:e),this.dispatchSelectionEvent()}get#e(){return!!this.tabs.length&&this.tabs.every(e=>e.checked)}handleToggleAll(){let e=!this.#e;e?this.selectAll():this.deselectAll(),this.dispatchEvent(new CustomEvent(p,{bubbles:!0,composed:!0,detail:{allSelected:e}}))}selectAll(){this.tabs=this.tabs.map(e=>({...e,checked:!0})),this.dispatchSelectionEvent()}deselectAll(){this.tabs=this.tabs.map(e=>({...e,checked:!1})),this.dispatchSelectionEvent()}getSelectedTabs(){return this.tabs.filter(e=>e.checked)}handleClose(){let e=new CustomEvent(d,{bubbles:!0,composed:!0,detail:{actionType:this.actionType}});this.dispatchEvent(e)}handleConfirm(){let e=this.getSelectedTabs();if(e.length===0)return;let t=new CustomEvent(f,{bubbles:!0,composed:!0,detail:{selectedTabs:e,tabGroupLabel:this.tabGroupLabel}});this.dispatchEvent(t)}dispatchSelectionEvent(){let e=new CustomEvent(u,{bubbles:!0,composed:!0,detail:{selectedTabs:this.getSelectedTabs(),allTabs:this.tabs}});this.dispatchEvent(e)}render(){let e=this.#e?`smart-window-confirm-deselect-all`:`smart-window-confirm-select-all`,n=this.tabs.filter(e=>e.checked).length,i=n===0,a=i?this.confirmActionL10n.disabled:this.confirmActionL10n.enabled;return r`
      <link
        rel="stylesheet"
        href="${c}"
      />

      <moz-button
        class="close-button"
        iconSrc="chrome://global/skin/icons/close.svg"
        @click=${this.handleClose}
        type="ghost icon"
        data-l10n-id="smart-window-close-confirm"
      >
      </moz-button>
      <div class="ai-website-confirmation-wrapper">
        <div class="ai-website-confirmation-container">
          <div class="tabs-list-wrapper">
            <div class="fade-overlay fade-top"></div>
            <div
              class="tabs-list"
              @ai-website-select:change=${this.handleSelectChange}
            >
              ${this.tabs.map(e=>r`
                  <ai-website-select
                    .token=${e.token}
                    .linkedPanel=${e.linkedPanel}
                    .label=${e.title}
                    .iconSrc=${e.iconSrc}
                    .url=${e.url}
                    .checked=${e.checked}
                  ></ai-website-select>
                `)}
            </div>
            <div class="fade-overlay fade-bottom"></div>
          </div>
          <div class="actions-section">
            <moz-button
              type="neutral"
              @click=${this.handleToggleAll}
              data-l10n-id=${e}
            >
            </moz-button>
            <moz-button
              @click=${this.handleConfirm}
              type="primary"
              ?disabled=${i}
              data-l10n-id=${a}
              data-l10n-args=${t(i?void 0:JSON.stringify({count:n}))}
            >
            </moz-button>
          </div>
        </div>
      </div>
    `}},customElements.define(`ai-website-confirmation`,m)})))()}export{h as t};