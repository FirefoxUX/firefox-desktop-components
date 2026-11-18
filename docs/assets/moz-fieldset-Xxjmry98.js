import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{d as n,f as r,i,u as a}from"./lit.all-Co4HOUmF.js";import{c as o,o as s}from"./iframe-DP8hlEO7.js";var c;function l(){return(l=e((()=>{c=new URL(`moz-fieldset-D_bUXrW2.css`,import.meta.url).href+``})))()}var u=t({MozFieldset:()=>f}),d,f;function p(){return(p=e((()=>{l(),r(),o(),d={1:e=>a`<h1 class="text-box-trim-start">${e}</h1>`,2:e=>a`<h2 class="text-box-trim-start">${e}</h2>`,3:e=>a`<h3 class="text-box-trim-start">${e}</h3>`,4:e=>a`<h4>${e}</h4>`,5:e=>a`<h5>${e}</h5>`,6:e=>a`<h6>${e}</h6>`},f=class extends s{static properties={label:{type:String,fluent:!0},description:{type:String,fluent:!0},supportPage:{type:String,attribute:`support-page`},ariaLabel:{type:String,fluent:!0,mapped:!0},ariaOrientation:{type:String,mapped:!0},role:{type:String,mapped:!0},inputsRole:{type:String,state:!0},headingLevel:{type:Number},disabled:{type:Boolean,reflect:!0},iconSrc:{type:String},badge:{type:String}};constructor(){super(),this.headingLevel=-1,this.disabled=!1,this.iconSrc=``,this.label=void 0,this.description=void 0,this.supportPage=void 0,this.badge=void 0,this.role=null,this.inputsRole=void 0}updated(e){super.updated(e),e.has(`disabled`)&&this.#e(),(e.has(`headingLevel`)||e.has(`label`))&&this.toggleAttribute(`hasheading`,this.hasHeading)}get hasHeading(){return!!this.label&&!!d[this.headingLevel]}#e(){[...this.querySelectorAll(`*`)].filter(e=>`disabled`in e||`parentDisabled`in e).forEach(e=>{`parentDisabled`in e&&(e.parentDisabled=this.disabled),this.disabled?e.setAttribute(`disabled`,``):e.removeAttribute(`disabled`)})}descriptionTemplate(){return this.description?a`<div class="description">
        <span id="description">${this.description}</span>
        ${this.supportPageTemplate()}
      </div>`:``}supportPageTemplate(){return this.supportPage?a`<a
        is="moz-support-link"
        support-page=${this.supportPage}
        part="support-link"
      ></a>`:a`<slot name="support-link"></slot>`}legendTemplate(){let e=d[this.headingLevel]?.(this.label)||this.label;return a`<legend id="label" part="label">
      ${this.iconTemplate()}${e}${this.badgeTemplate()}
    </legend>`}iconTemplate(){return this.iconSrc?a`<img
      src=${this.iconSrc}
      role="presentation"
      class=${i({icon:!0,"heading-xlarge":this.headingLevel==1,"heading-large":this.headingLevel==2,"heading-medium":this.headingLevel==3,"text-box-trim-start":this.headingLevel>=1&&this.headingLevel<=3})}
    />`:``}badgeTemplate(){return this.badge?a`<moz-badge type=${this.badge}></moz-badge>`:``}render(){let e=!!this.inputsRole,t=this.description?`description`:void 0;return a`
      <link
        rel="stylesheet"
        href="${c}"
      />
      <fieldset
        ?disabled=${this.disabled}
        role=${n(e?`presentation`:this.role)}
        aria-label=${n(e?void 0:this.ariaLabel)}
        aria-describedby=${n(e?void 0:t)}
        aria-orientation=${n(e?void 0:this.ariaOrientation)}
      >
        ${this.label?this.legendTemplate():``}
        ${this.description?``:this.supportPageTemplate()}
        ${this.descriptionTemplate()}
        <div
          id="inputs"
          part="inputs"
          role=${n(this.inputsRole)}
          aria-labelledby=${n(e&&this.label?`label`:void 0)}
          aria-label=${n(e&&!this.label?this.ariaLabel:void 0)}
          aria-describedby=${n(e?t:void 0)}
          aria-orientation=${n(e?this.ariaOrientation:void 0)}
          aria-disabled=${n(e&&this.disabled?`true`:void 0)}
        >
          <slot></slot>
        </div>
      </fieldset>
    `}},customElements.define(`moz-fieldset`,f)})))()}export{u as n,p as t};