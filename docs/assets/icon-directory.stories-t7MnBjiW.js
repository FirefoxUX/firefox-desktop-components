import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,i as n,n as r,o as i,u as a}from"./lit.all-Co4HOUmF.js";import{n as o,t as s}from"./_firefox-storybook_moz-css-url_e0b8cc3e5381bdfb9691f06cc29f273aae494deefbbec62135173ebbc273b74d-_rMXgSdb.js";import{n as c,r as l}from"./iframe-CEh6YfCk.js";function u(e){let t=[`browser/themes`,`toolkit/themes`,`browser/components`,`toolkit/components`],n=new Map(t.map(e=>[e,[]]));for(let r of e.keys()){let i=t.find(e=>r.startsWith(e))||r;n.has(i)||n.set(i,[]),n.get(i).push(...e.get(r))}return n}function d(){let[e,,t]=c,n=new Map;for(let[t,r]of Object.entries(e))for(let e of r)n.set(e,t);function r(e){let t=e;for(;t.includes(`/`);){let r=t.lastIndexOf(`/`),i=t.substring(0,r),a=e.substring(i.length+1),o=n.get(i);if(o)return o+a;t=i}return null}let i=new Map;for(let[e,[n]]of Object.entries(t)){if(!e.endsWith(`.svg`))continue;let t=r(e);if(!t||!(t.startsWith(`chrome://browser/`)||t.startsWith(`chrome://global/`)))continue;let a=n.lastIndexOf(`/`),o=n.substring(0,a),s=n.substring(a+1);i.has(o)||i.set(o,[]),i.get(o).push({chromeUri:t,fileName:s,filePath:n})}for(let e of i.values())e.sort((e,t)=>e.fileName.localeCompare(t.fileName));return u(i)}function f(e){let t=e.match(/\d+/g);return!t||t.length<3?`#000000`:`#`+t.slice(0,3).map(e=>parseInt(e,10).toString(16).padStart(2,`0`)).join(``)}var p,m,h,g,_,v;function y(){return(y=e((()=>{o(),t(),l(),p=3e3,m=Object.freeze({Normalize:`normalize`,Full:`full`}),h={title:`Docs/Icon Directory`,parameters:{options:{showPanel:!1},docs:{source:{state:`closed`}}}},g=d(),_=class extends r{static properties={filter:{type:String,state:!0},fillColor:{type:String,state:!0},strokeColor:{type:String,state:!0},iconSize:{type:String,reflect:!0}};static styles=i`
    :host {
      --icon-item-width: 125px;
      --icon-item-padding: var(--space-small);
      --icon-item-fill: var(--icon-color);
      /*
       * The rgbToHex function doesn't work with oklch...
       * Use --color-accent-primary manual conversion to hex so the stroke is more visible.
       */
      --icon-item-stroke: light-dark(#0062fa, #00cadb);
      --icon-item-width-content: calc(
        var(--icon-item-width) - 2 * var(--icon-item-padding)
      );

      display: flex;
      flex-direction: column;
      gap: var(--space-large);
    }

    .sticky-header {
      position: sticky;
      inset-block-start: 0;
      background-color: var(--background-color-canvas);
      z-index: 1;
      margin-inline: calc(-1 * var(--space-large));
      padding-inline: var(--space-large);
      padding-block-end: var(--space-small);
      display: flex;
      flex-direction: column;
      gap: var(--space-small);
      border-bottom: var(--border-width) solid var(--border-color);
    }

    #color-probe {
      display: none;
      fill: var(--icon-item-fill);
      stroke: var(--icon-item-stroke);
    }

    moz-box-item {
      --box-padding: var(--icon-item-padding);
    }

    .view-controls {
      display: flex;
      align-items: center;
      gap: var(--space-large);
    }

    .icon-list {
      display: grid;
      grid-template-columns: repeat(
        auto-fill,
        minmax(var(--icon-item-width), 1fr)
      );
      gap: var(--space-small);
    }

    .icon-item {
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        -moz-context-properties: fill, stroke;
        fill: var(--icon-item-fill);
        stroke: var(--icon-item-stroke);

        :host([iconsize="normalize"]) & {
          width: 16px;
          aspect-ratio: 1;

          &.icon-12 {
            width: 12px;
          }

          &.icon-24 {
            width: 24px;
          }
        }

        :host([iconsize="full"]) & {
          max-width: var(--icon-item-width-content);
        }
      }
    }

    .icon-name {
      font-size: var(--font-size-small);
      width: var(--icon-item-width-content);
      margin: var(--icon-item-padding) auto 0;

      button& {
        appearance: none;
        border: none;
        background: none;
        cursor: pointer;
        padding: 0;
      }
    }

    #success-message {
      position-area: end center;
      margin: 0;
      transition: opacity 250ms;
      box-shadow: var(--box-shadow-popup);

      &:not(:popover-open) {
        display: none;
      }

      &[hiding] {
        opacity: 0;
      }
    }
  `;constructor(){super(),this.filter=``,this.fillColor=``,this.strokeColor=``,this.iconSize=m.Normalize,this._successMessageTimeout=void 0}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._successMessageTimeout)}firstUpdated(){let e=this.renderRoot.querySelector(`#color-probe`),t=getComputedStyle(e);this.fillColor=f(t.fill),this.strokeColor=f(t.stroke)}get successMessageBar(){return this.renderRoot.querySelector(`#success-message`)}handleSearch(e){this.filter=e.detail.query.toLowerCase()}handleFillChange(e){this.fillColor=e.target.value,this.style.setProperty(`--icon-item-fill`,this.fillColor)}handleStrokeChange(e){this.strokeColor=e.target.value,this.style.setProperty(`--icon-item-stroke`,this.strokeColor)}async handleCopy({target:e}){try{this.hideSuccessMessage(!0),await navigator.clipboard.writeText(e.dataset.url),this.showSuccessMessage(e)}catch(e){console.error(`Failed to copy to clipboard:`,e)}}showSuccessMessage(e){this.successMessageBar.removeAttribute(`hiding`),this.successMessageBar.showPopover({source:e}),clearTimeout(this._successMessageTimeout),this._successMessageTimeout=setTimeout(()=>{this.hideSuccessMessage()},p)}hideSuccessMessage(e=!1){e?this.successMessageBar.hidePopover():(this.successMessageBar.setAttribute(`hiding`,``),this.successMessageBar.addEventListener(`transitionend`,()=>{this.successMessageBar.hidePopover(),this.successMessageBar.removeAttribute(`hiding`)},{once:!0}))}filteredIcons(e){return this.filter?e.filter(({chromeUri:e,filePath:t})=>t.toLowerCase().includes(this.filter)||e.toLowerCase().includes(this.filter)):e}iconGroupTemplate(e,t){let r=this.filteredIcons(t);return r.length?a`
      <moz-card .heading=${e} type="accordion" expanded>
        ${a`
          <div class="icon-list">
            ${r.map(({chromeUri:e,fileName:t})=>a`
                <moz-box-item>
                  <div class="icon-item">
                    <img
                      class=${n({"icon-12":t.endsWith(`-12.svg`),"icon-24":t.endsWith(`-24.svg`)})}
                      src=${e}
                      alt=""
                    />
                    <button
                      class="icon-name text-truncated-ellipsis"
                      data-url=${e}
                      @click=${this.handleCopy}
                      aria-description="Copy chrome URL"
                      aria-expanded="false"
                      title=${`${t} — Copy chrome:// URL`}
                    >
                      ${t}
                    </button>
                  </div>
                </moz-box-item>
              `)}
          </div>
        `}
      </moz-card>
    `:``}render(){return a`
      <link
        rel="stylesheet"
        href="${s}"
      />
      <div class="sticky-header">
        <moz-page-header
          heading="Icon Directory"
          description="View icons available in Firefox Desktop. Click the file name to copy the chrome:// URL."
        ></moz-page-header>
        <moz-input-search
          placeholder="Filter icons..."
          @MozInputSearch:search=${this.handleSearch}
        ></moz-input-search>
        <span id="color-probe"></span>
        <div class="view-controls">
          <moz-input-color
            label="Fill"
            value=${this.fillColor}
            @change=${this.handleFillChange}
          ></moz-input-color>
          <moz-input-color
            label="Stroke"
            value=${this.strokeColor}
            @change=${this.handleStrokeChange}
          ></moz-input-color>
          <moz-toggle
            label="Show full size icons"
            @toggle=${e=>this.iconSize=e.target.pressed?m.Full:m.Normalize}
          ></moz-toggle>
        </div>
      </div>
      ${[...g.entries()].map(([e,t])=>this.iconGroupTemplate(e,t))}
      <moz-message-bar
        id="success-message"
        type="success"
        message="Copied!"
        popover="manual"
      ></moz-message-bar>
    `}},customElements.define(`icon-directory`,_),v=()=>a`<icon-directory></icon-directory>`})))()}y();export{v as Default,h as default};