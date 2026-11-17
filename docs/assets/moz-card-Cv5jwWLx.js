import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{S as n,d as r,f as i,l as a,m as o,u as s}from"./lit.all-Co4HOUmF.js";import{n as c,t as l}from"./_firefox-storybook_moz-css-url_e0b8cc3e5381bdfb9691f06cc29f273aae494deefbbec62135173ebbc273b74d-_rMXgSdb.js";import{c as u,o as d}from"./iframe-ChCqHcnv.js";var f;function p(){return(p=e((()=>{f=new URL(`moz-card-CAlaeO5J.css`,import.meta.url).href+``})))()}var m=t({MozCard:()=>h}),h;function g(){return(g=e((()=>{p(),c(),i(),u(),h=class extends d{static queries={detailsEl:`#moz-card-details`,headingEl:`#heading`,contentEl:`#content`,summaryEl:`summary`,contentSlotEl:`#content-slot`};static properties={heading:{type:String,fluent:!0},headingLevel:{type:Number},iconSrc:{type:String},type:{type:String,reflect:!0},spacing:{type:String,reflect:!0},expanded:{type:Boolean},role:{type:String,mapped:!0},summaryTabIndex:{type:Number},treeItem:{type:Boolean},ariaLevel:{type:String,mapped:!0},ariaPosInSet:{type:String,mapped:!0},ariaSetSize:{type:String,mapped:!0}};constructor(){super(),this.type=`default`,this.spacing=`default`,this.expanded=!1,this.treeItem=!1,this.headingLevel=0}headingTextTemplate(){let e=[o`span`,o`h1`,o`h2`,o`h3`,o`h4`,o`h5`,o`h6`],t=!this.#e&&e[this.headingLevel]||e[0];return a`<${t} id="heading" title=${r(this.heading)} part="heading">${this.heading}</${t}>`}get#e(){return this.type===`accordion`&&this.treeItem}headingTemplate(){return this.heading?s`
      <div id="heading-wrapper" part="moz-card-heading-wrapper">
        ${n(this.type==`accordion`,()=>s`<div class="chevron-icon"></div>`)}
        ${n(!!this.iconSrc,()=>s`<img
              id="heading-icon"
              src=${this.iconSrc}
              role="presentation"
            />`)}
        ${this.headingTextTemplate()}
      </div>
    `:``}cardTemplate(){return this.type===`accordion`?s`
        <div class="moz-card-wrapper">
          <div id="cover-image"><slot name="cover-image"></slot></div>
          <details
            id="moz-card-details"
            @toggle=${this.onToggle}
            ?open=${this.expanded}
          >
            <summary
              part="summary"
              role=${r(this.#e?`treeitem`:void 0)}
              aria-level=${r(this.#e?this.ariaLevel:void 0)}
              aria-posinset=${r(this.#e?this.ariaPosInSet:void 0)}
              aria-setsize=${r(this.#e?this.ariaSetSize:void 0)}
              tabindex=${r(this.summaryTabIndex)}
            >
              ${this.headingTemplate()}
            </summary>
            <div id="content"><slot id="content-slot"></slot></div>
          </details>
        </div>
      `:s`
      <div id="moz-card-details">
        <div id="cover-image"><slot name="cover-image"></slot></div>
        ${this.headingTemplate()}
        <div id="content" aria-describedby="content">
          <slot></slot>
        </div>
      </div>
    `}onToggle(){this.expanded=this.detailsEl.open,this.dispatchEvent(new ToggleEvent(`toggle`,{newState:this.detailsEl.open?`open`:`closed`,oldState:this.detailsEl.open?`closed`:`open`}))}render(){return s`
      <link
        rel="stylesheet"
        href="${l}"
      />
      <link
        rel="stylesheet"
        href="${f}"
      />
      <article
        role=${r(this.#e?`none`:this.role)}
        class="moz-card"
        aria-labelledby=${r(this.heading&&!this.#e?`heading`:void 0)}
      >
        ${this.cardTemplate()}
      </article>
    `}},customElements.define(`moz-card`,h)})))()}export{m as n,g as t};