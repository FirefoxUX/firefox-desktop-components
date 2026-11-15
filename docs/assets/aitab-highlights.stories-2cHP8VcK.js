import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,g as n,u as r}from"./lit.all-BYVOqvrj.js";import{c as i,o as a}from"./iframe-DZPZZ1s7.js";import{t as o}from"./smartwindow-chip-Dn6Aw4Qf.js";import{n as s,t as c}from"./_firefox-storybook_moz-css-url_7893e7fab7771c8fab12d5da45301105aa2042d94fc94ba00c34ad7394f5ce8c-DCFirFEk.js";import{n as l,t as u}from"./_firefox-storybook_moz-css-url_f7c7070a6807b1ebcccbaa6527911d2eccc5c19c73da5980322a6310a35dd706-D1p1Bb76.js";import{n as d,t as f}from"./aitab-story-font-Czr8xWXy.js";import{t as p}from"./AITabUtils-BVxPr_Nm.js";var m;function h(){return(h=e((()=>{m=new URL(`aitab-highlights-sRmVFybR.css`,import.meta.url).href+``})))()}var g;function _(){return(_=e((()=>{h(),l(),t(),i(),o(),g=class extends a{static properties={title:{type:String},items:{type:Array,attribute:!1}};constructor(){super(),this.title=``,this.items=[]}#e(e,t){return r`<smartwindow-chip
      type="source"
      .label=${e.title||t.hostname}
      .href=${t.href}
      .iconSrc=${e.favicon||`page-icon:${t.href}`}
      openLinkEvent="AITab:OpenLink"
    ></smartwindow-chip>`}#t(e){let t=(e?.items??[]).map(e=>({source:e,url:p(e?.href)})).filter(e=>e.url);return t.length?r`<div class="aitab-highlight-sources">
      ${t.map(({source:e,url:t})=>this.#e(e,t))}
    </div>`:n}#n(e){return r`<li class="aitab-highlight">
      <div class="aitab-highlight-statement">
        ${e.eyebrow?r`<span class="aitab-eyebrow">${e.eyebrow}</span>`:n}
        ${e.title?r`<p class="aitab-highlight-title aitab-heading-3">
              ${e.title}
            </p>`:n}
      </div>
      <div class="aitab-highlight-evidence">
        ${e.body?r`<p class="aitab-highlight-body">${e.body}</p>`:n}
        ${this.#t(e.sources)}
      </div>
    </li>`}#r(){let e=(this.items??[]).filter(Boolean);return e.length?r`<ul
      class="aitab-highlights-list"
      aria-labelledby=${this.title?`title`:n}
    >
      ${e.map(e=>this.#n(e))}
    </ul>`:n}render(){return r`
      <link
        rel="stylesheet"
        href="${u}"
      />
      <link
        rel="stylesheet"
        href="${m}"
      />
      <section class="aitab-highlights">
        ${this.title?r`<h2 id="title" class="aitab-highlights-title">
              ${this.title}
            </h2>`:n}
        ${this.#r()}
      </section>
    `}},customElements.define(`aitab-highlights`,g)})))()}var v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{s(),t(),_(),f(),v={title:`Domain-specific UI Widgets/AI Window/AI Tab Highlights`,component:`aitab-highlights`,decorators:[d],argTypes:{title:{control:`text`},items:{control:`object`}}},y=({title:e,items:t})=>r`
  <link
    rel="stylesheet"
    href="${c}"
  />
  <aitab-highlights .title=${e} .items=${t}></aitab-highlights>
`,b={title:`Expedia`,href:`https://www.expedia.com/Niijima-Island.d6055565.Destination-Travel-Guides`,favicon:`chrome://branding/content/about-logo.svg`},x=[{eyebrow:`Morning`,title:`Habushiura beach`,body:`6.5 to 7-kilometer-long white sand and turquoise water coastline famous for surfing, dramatic cliffs, and clear emerald-green waters.`,sources:{items:[b]}},{eyebrow:`Afternoon`,title:`Yunohama Onsen`,body:`A historic coastal hot spring resort in Tsuruoka City, Yamagata Prefecture, featuring mineral-rich chloride waters, panoramic views of the Sea of Japan, and status as one of Japan's top sunset locations.`,sources:{items:[{title:`Yunohama Onsen`,href:`https://www.yunohamaonsen.com/en/`,favicon:`chrome://global/skin/icons/defaultFavicon.svg`},b]}},{eyebrow:`Evening`,title:`Overnight ferry`,body:`Departs from Takeshiba Pier in Tokyo, takes about 8.5 to 9 hours, and is operated by Tokai Kisen.`,sources:{items:[{title:`Trip Advisor`,href:`https://www.tripadvisor.com/Attraction_Review-Habushiura-Beach`,favicon:`chrome://branding/content/icon16.png`}]}}],S=y.bind({}),S.args={title:`A day on Niijima`,items:x},C=y.bind({}),C.args={title:``,items:[{title:`The deadline is the whole ballgame`,body:`The contract makes time of the essence, so missing the completion date is a breach on its own, whatever the reason for the delay.`},{title:`Returning the deposit does not undo the breach`,body:`Refunding the deposit settles the money already paid but leaves the buyer's claim for losses caused by the late completion untouched.`},{title:`Notice has to be in writing`,body:`Both parties agreed that a notice to complete is only effective once it has been served in writing on the other side's solicitor.`}]},w=y.bind({}),w.args={title:``,items:[{title:`General watering rule`,body:`Most houseplants prefer the top 2 to 3 cm of soil to dry out between waterings. Overwatering is the top killer; yellow leaves are a common sign of too much water.`}]},T=y.bind({}),T.args={title:`A title long enough to wrap onto a second line inside the rounded card`,items:[{eyebrow:`An eyebrow that is far longer than an eyebrow ought to be`,title:`Supercalifragilisticexpialidocious-unbrokenstatementthatmustwrapsomewhere`,body:`The evidence column keeps its share of the width however long the statement beside it grows, and this sentence keeps going so that it wraps onto several lines of its own to prove the point.`,sources:{items:[{title:`A source whose title runs well past the chip's width`,href:`https://www.example.com/a/very/long/path`,favicon:`chrome://global/skin/icons/defaultFavicon.svg`},b]}},{title:`Short`,body:`Short.`}]}})))()}E();export{S as Itinerary,T as LongText,w as SingleStatement,C as StatementsOnly,v as default};