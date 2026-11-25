import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{_ as t,f as n,u as r}from"./lit.all-Co4HOUmF.js";import{c as i,o as a}from"./iframe-DbtNkzFn.js";import{t as o}from"./moz-card-CFiEI7_H.js";var s;function c(){return(c=e((()=>{s=``+new URL(`ai-tasks-group-CLPYpcl6.css`,import.meta.url).href})))()}var l,u;function d(){return(d=e((()=>{c(),n(),i(),l=5,u=class extends a{static properties={headingL10nId:{type:String},countL10nId:{type:String},countL10nArgs:{type:Object},expanded:{type:Boolean,reflect:!0},itemCount:{type:Number,state:!0}};#e=!1;constructor(){super(),this.headingL10nId=``,this.countL10nId=``,this.countL10nArgs={},this.expanded=!1,this.itemCount=0}get hiddenCount(){return Math.max(0,this.itemCount-l)}handleSlotChange(e){this.itemCount=e.target.assignedElements().length,this.hiddenCount||(this.expanded=!1)}async toggleExpanded(){if(!this.#e){if(!this.expanded)this.expanded=!0;else{this.#e=!0;try{await this.animateCollapse()}finally{this.#e=!1,this.expanded=!1}}}}async animateCollapse(){if(window.matchMedia(`(prefers-reduced-motion: reduce)`).matches)return;let e=getComputedStyle(this).getPropertyValue(`--motion-easing-standard`).trim(),t=this.shadowRoot.querySelector(`slot`).assignedElements().slice(l).reverse().map((t,n)=>t.animate({opacity:[1,0],translate:[`0 0`,`0 calc(-1 * var(--space-small))`]},{duration:200,delay:Math.min(n,3)*40,easing:e||`ease`,fill:`forwards`}));await Promise.allSettled(t.map(e=>e.finished)),t.forEach(e=>e.cancel())}toggleTemplate(){return this.hiddenCount?r`<button
      class="toggle-button"
      type="button"
      aria-expanded=${this.expanded}
      data-l10n-id=${this.expanded?`ai-tasks-group-show-less`:`ai-tasks-group-show-more`}
      data-l10n-args=${JSON.stringify({count:this.hiddenCount})}
      @click=${this.toggleExpanded}
    ></button>`:t}render(){return r`
      <link
        rel="stylesheet"
        href="${s}"
      />
      <section aria-labelledby="heading">
        <h3 id="heading" class="heading">
          <span data-l10n-id=${this.headingL10nId}></span>
          ${this.countL10nId?r`<span
                class="count"
                data-l10n-id=${this.countL10nId}
                data-l10n-args=${JSON.stringify(this.countL10nArgs)}
              ></span>`:t}
        </h3>
        <div class="items">
          <slot @slotchange=${this.handleSlotChange}></slot>
        </div>
        ${this.toggleTemplate()}
      </section>
    `}},customElements.define(`ai-tasks-group`,u)})))()}var f,p,m,h,g;function _(){return(_=e((()=>{n(),d(),o(),f={title:`Domain-specific UI Widgets/AI Window/Tasks group`,component:`ai-tasks-group`,argTypes:{itemCount:{control:{type:`number`,min:0}}},parameters:{fluent:`
ai-tasks-group-monitors-active = Monitors · Active
ai-tasks-group-monitors-paused = Monitors · Paused
ai-tasks-group-count-of-limit = { $count } of { $limit }
ai-tasks-group-count = { $count }
ai-tasks-group-show-more = Show { $count } more
ai-tasks-group-show-less = Show less
    `}},p=({headingL10nId:e,countL10nId:t,itemCount:n,limit:i})=>r`
  <ai-tasks-group
    .headingL10nId=${e}
    .countL10nId=${t}
    .countL10nArgs=${{count:n,limit:i}}
  >
    ${Array.from({length:n},(e,t)=>r`<moz-card>Task ${t+1}</moz-card>`)}
  </ai-tasks-group>
`,m=p.bind({}),m.args={headingL10nId:`ai-tasks-group-monitors-active`,countL10nId:`ai-tasks-group-count-of-limit`,itemCount:3,limit:15},h=p.bind({}),h.args={...m.args,itemCount:12},g=p.bind({}),g.args={headingL10nId:`ai-tasks-group-monitors-paused`,countL10nId:`ai-tasks-group-count`,itemCount:2}})))()}_();export{m as Active,h as ActiveWithShowMore,g as Paused,f as default};