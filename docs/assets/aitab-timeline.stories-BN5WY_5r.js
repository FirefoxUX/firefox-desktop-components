import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{_ as t,f as n,u as r}from"./lit.all-Co4HOUmF.js";import{c as i,o as a}from"./iframe-CEh6YfCk.js";import{n as o,t as s}from"./_firefox-storybook_moz-css-url_f7c7070a6807b1ebcccbaa6527911d2eccc5c19c73da5980322a6310a35dd706-D1p1Bb76.js";import{n as c,t as l}from"./aitab-story-font-Czr8xWXy.js";var u;function d(){return(d=e((()=>{u=new URL(`aitab-timeline-qgQBo1Dr.css`,import.meta.url).href+``})))()}var f;function p(){return(p=e((()=>{d(),o(),n(),i(),f=class extends a{static properties={title:{type:String},description:{type:String},items:{type:Array}};constructor(){super(),this.title=``,this.description=``,this.items=[]}#e(){return!this.title&&!this.description?t:r`<div class="aitab-timeline-intro">
      ${this.title?r`<h2 class="aitab-timeline-title aitab-heading-3">
            ${this.title}
          </h2>`:t}
      ${this.description?r`<p class="aitab-timeline-description aitab-deemphasized">
            ${this.description}
          </p>`:t}
    </div>`}#t(e){let t=`aitab-timeline-item-title aitab-heading-4`;return this.title?r`<h3 class=${t}>${e}</h3>`:r`<h2 class=${t}>${e}</h2>`}#n(e){return e?r`<li class="aitab-timeline-item">
          <div class="aitab-timeline-date">
            ${e.date_label?r`<span class="aitab-timeline-date-label"
                  >${e.date_label}</span
                >`:t}
            ${e.date_eyebrow?r`<span class="aitab-timeline-date-eyebrow aitab-eyebrow"
                  >${e.date_eyebrow}</span
                >`:t}
          </div>
          <div class="aitab-timeline-entry">
            ${e.title?this.#t(e.title):t}
            ${e.description?r`<p class="aitab-timeline-item-description">
                  ${e.description}
                </p>`:t}
          </div>
        </li>`:t}render(){let e=(this.items??[]).filter(e=>e?.date_label||e?.title);return e.length?r`
      <link
        rel="stylesheet"
        href="${s}"
      />
      <link
        rel="stylesheet"
        href="${u}"
      />
      <section class="aitab-timeline">
        ${this.#e()}
        <ol class="aitab-timeline-items">
          ${e.map(e=>this.#n(e))}
        </ol>
      </section>
    `:t}},customElements.define(`aitab-timeline`,f)})))()}var m,h,g,_,v,y;function b(){return(b=e((()=>{n(),p(),l(),m={title:`Domain-specific UI Widgets/AI Window/AI Tab Timeline`,component:`aitab-timeline`,decorators:[c],argTypes:{title:{control:{type:`text`}},description:{control:{type:`text`}}}},h=[{date_label:`Thu, Oct 9`,date_eyebrow:`Arrival`,title:`Korinbo & the 21st Century Museum`,description:`Train in at 2pm, drop bags, museum until closing, dinner in the covered arcade five minutes from the hotel.`},{date_label:`Fri, Oct 10`,date_eyebrow:`Full day`,title:`Kenroku-en, castle, Nagamachi`,description:`Garden at opening before the tour buses, castle grounds after, samurai district in the afternoon heat.`},{date_label:`Sat, Oct 11`,date_eyebrow:`Ryokan night`,title:`Higashiyama, then kaiseki`,description:`Teahouse district in the morning, Omicho for lunch, check into the ryokan by 4pm — dinner is the evening.`},{date_label:`Sun, Oct 12`,date_eyebrow:`Depart`,title:`Train back at noon`,description:`Breakfast at the inn, one last walk along the canal, Thunderbird to Kyoto.`}],g=({title:e,description:t,items:n})=>r`
  <aitab-timeline
    .title=${e}
    description=${t}
    .items=${n}
  ></aitab-timeline>
`,_=g.bind({}),_.args={title:`Three days`,description:`Walking order for the sights you saved, arrival day first.`,items:h},v=g.bind({}),v.args={title:`Release day`,description:`Everything that has to happen before the tree reopens.`,items:[{date_label:`09:00`,title:`Soft freeze`,description:`Only approved uplifts land after this point.`},{date_label:`11:30`,title:`Release candidate build`,description:`Automation kicks off; expect results inside two hours.`},{date_label:`16:00`,title:`Go / no-go`},{date_label:`18:00`,title:`Push to the CDN`}]},y=g.bind({}),y.args={title:``,description:``,items:h.slice(0,2)}})))()}b();export{_ as Default,y as NoIntro,v as TimesOnly,m as default};