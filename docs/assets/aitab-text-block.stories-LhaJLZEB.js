import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{_ as t,f as n,u as r}from"./lit.all-Co4HOUmF.js";import{c as i,o as a}from"./iframe-17211AdQ.js";import{t as o}from"./smartwindow-chip-CncibMrv.js";import{n as s,t as c}from"./aitab-base-Dg65SCE2.js";import{n as l,t as u}from"./aitab-story-font-Czr8xWXy.js";var d;function f(){return(f=e((()=>{d=``+new URL(`aitab-text-block-D9Knw9__.css`,import.meta.url).href})))()}var p;function m(){return(m=e((()=>{s(),f(),n(),i(),o(),p=class extends a{static properties={heading:{type:String},paragraphs:{type:Array},references:{type:Array}};constructor(){super(),this.heading=``,this.paragraphs=[],this.references=[]}#e(){return this.references.length?r` <div class="aitab-text-block-references">
      ${this.references.map(e=>r`<smartwindow-chip
            class="aitab-text-block-chip"
            .href=${e.href}
            .label=${e.title||e.href}
            .iconSrc=${e.favicon??``}
            type="source"
            openLinkEvent="AITab:OpenLink"
          ></smartwindow-chip>`)}
    </div>`:t}render(){return r`
      <link
        rel="stylesheet"
        href="${c}"
      />
      <link
        rel="stylesheet"
        href="${d}"
      />
      <section class="aitab-text-block">
        ${this.heading?r`<h2 class="aitab-text-block-heading aitab-heading-3">
              ${this.heading}
            </h2>`:t}
        <div class="aitab-text-block-content">
          ${this.paragraphs.map(e=>r`<p class="aitab-text-block-p">${e}</p>`)}
          ${this.#e()}
        </div>
      </section>
    `}},customElements.define(`aitab-text-block`,p)})))()}var h,g,_,v,y,b;function x(){return(x=e((()=>{n(),m(),u(),h={title:`Domain-specific UI Widgets/AI Window/AI Tab Text Block`,component:`aitab-text-block`,decorators:[l],argTypes:{heading:{control:{type:`text`}},paragraphs:{control:{type:`object`}},references:{control:{type:`object`}}}},g=[{title:`energy.gov`,href:`https://energy.gov`,favicon:`chrome://branding/content/about-logo.svg`},{title:`NEEP`,href:`https://neep.org`,favicon:`chrome://branding/content/icon16.png`},{title:`r/heatpumps`,href:`https://reddit.com/r/heatpumps`,favicon:`chrome://global/skin/icons/defaultFavicon.svg`},{title:`Yelp`,href:`https://yelp.com`,favicon:`chrome://branding/content/about-logo.svg`}],_=({heading:e,paragraphs:t,references:n})=>r`
  <aitab-text-block
    heading=${e}
    .paragraphs=${t}
    .references=${n}
  ></aitab-text-block>
`,v=_.bind({}),v.args={heading:`Three nights is enough for Kanazawa if you stay near Korinbo and treat the market as a morning stop, not a destination.`,paragraphs:[`Everything you flagged sits inside a 25-minute walk of each other: Kenroku-en, the castle grounds, the Nagamachi samurai district and the 21st Century Museum. Hotels east of the river are cheaper but add a bus leg to every evening, and the last useful bus back is earlier than the guides suggest.`,`The one real trade-off is the ryokan question. A traditional inn with a kaiseki dinner takes the whole evening and roughly doubles the nightly rate — worth one of the three nights, not all of them, which is how two of your open tabs recommend splitting it.`],references:g},y=_.bind({}),y.args={heading:`Three nights is enough for Kanazawa if you stay near Korinbo and treat the market as a morning stop, not a destination.`,paragraphs:[`Everything you flagged sits inside a 25-minute walk of each other: Kenroku-en, the castle grounds, the Nagamachi samurai district and the 21st Century Museum. Hotels east of the river are cheaper but add a bus leg to every evening, and the last useful bus back is earlier than the guides suggest.`],references:g},b=_.bind({}),b.args={heading:`Three nights is enough for Kanazawa if you stay near Korinbo and treat the market as a morning stop, not a destination.`,paragraphs:[`Everything you flagged sits inside a 25-minute walk of each other: Kenroku-en, the castle grounds, the Nagamachi samurai district and the 21st Century Museum. Hotels east of the river are cheaper but add a bus leg to every evening, and the last useful bus back is earlier than the guides suggest.`,`The one real trade-off is the ryokan question. A traditional inn with a kaiseki dinner takes the whole evening and roughly doubles the nightly rate — worth one of the three nights, not all of them, which is how two of your open tabs recommend splitting it.`],references:[]}})))()}x();export{v as Default,b as NoReferences,y as OneParagraph,h as default};