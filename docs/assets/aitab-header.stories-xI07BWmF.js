import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{_ as t,f as n,u as r}from"./lit.all-Co4HOUmF.js";import{c as i,o as a}from"./iframe-ChCqHcnv.js";import{t as o}from"./ai-grouped-chip-container-BLb9ilOP.js";import{n as s,t as c}from"./_firefox-storybook_moz-css-url_f7c7070a6807b1ebcccbaa6527911d2eccc5c19c73da5980322a6310a35dd706-D1p1Bb76.js";import{n as l,t as u}from"./aitab-story-font-Czr8xWXy.js";import{t as d}from"./aitab-page-actions-Crf_1cvg.js";var f;function p(){return(p=e((()=>{f=new URL(`aitab-header-BVxLGK6A.css`,import.meta.url).href+``})))()}var m;function h(){return(h=e((()=>{p(),s(),n(),i(),o(),d(),m=class extends a{static properties={createdAt:{type:String},title:{type:String},subhead:{type:String},references:{type:Array},refreshing:{type:Boolean}};constructor(){super(),this.createdAt=``,this.title=``,this.subhead=``,this.references=[],this.refreshing=!1}#e(){return this.createdAt?r`<span class="aitab-eyebrow">${this.createdAt}</span>`:t}#t(){if(!this.references.length)return t;let e=this.references.map(e=>({url:e.href,label:e.title||e.href,iconSrc:e.favicon??``}));return r`<ai-grouped-chip-container
      class="aitab-references"
      .chips=${e}
      .chipsLabel=${`smart-window-aitab-sources-count`}
      openLinkEvent="AITab:OpenLink"
    ></ai-grouped-chip-container>`}render(){return r`
      <link
        rel="stylesheet"
        href="${c}"
      />
      <link
        rel="stylesheet"
        href="${f}"
      />
      <header class="aitab-header">
        <aitab-page-actions
          class="aitab-header-actions"
          ?refreshing=${this.refreshing}
        ></aitab-page-actions>
        ${this.#e()}
        <h1 class="aitab-title">${this.title}</h1>
        ${this.subhead?r`<p class="aitab-title-subtext">${this.subhead}</p>`:t}
        ${this.#t()}
      </header>
    `}},customElements.define(`aitab-header`,m)})))()}var g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{n(),h(),u(),g={title:`Domain-specific UI Widgets/AI Window/AI Tab Header`,component:`aitab-header`,decorators:[l],argTypes:{createdAt:{control:{type:`text`}},title:{control:{type:`text`}},subhead:{control:{type:`text`}},refreshing:{control:{type:`boolean`}}},parameters:{fluent:`
smart-window-context-chips-tag-count = { $tags ->
    [one] { $tags } Tag
   *[other] { $tags } Tags
}
aitab-page-refresh-sources =
    .label = Refresh sources
aitab-page-refreshing-sources =
    .label = Refreshing sources
aitab-page-delete =
    .aria-label = Delete page
    .title = Delete page
aitab-page-delete-dialog-title = Delete this [Smart Page]?
aitab-page-delete-dialog-message = This generated page will be removed. The sources it was built from aren't affected.
aitab-page-delete-dialog-cancel =
    .label = Cancel
aitab-page-delete-dialog-confirm =
    .label = Delete
    `}},_=[{title:`energy.gov`,href:`https://energy.gov`,favicon:`chrome://branding/content/about-logo.svg`},{title:`NEEP`,href:`https://neep.org`,favicon:`chrome://branding/content/icon16.png`},{title:`r/heatpumps`,href:`https://reddit.com/r/heatpumps`,favicon:`chrome://global/skin/icons/defaultFavicon.svg`},{title:`Yelp`,href:`https://yelp.com`,favicon:`chrome://branding/content/about-logo.svg`}],v=({createdAt:e,title:t,subhead:n,references:i,refreshing:a})=>r`
  <aitab-header
    .createdAt=${e}
    .title=${t}
    subhead=${n}
    .references=${i}
    ?refreshing=${a}
  ></aitab-header>
`,y=v.bind({}),y.args={createdAt:`Created today`,title:`Three days in Kanazawa`,subhead:`Travel research: short names, tidy numbers, real photography. The comfortable case for all six blocks.`,references:_,refreshing:!1},b=v.bind({}),b.args={...y.args,refreshing:!0},x=v.bind({}),x.args={...y.args,createdAt:`Created Jul 31`},S=v.bind({}),S.args={createdAt:`Created today`,title:`Heat Pump for a 1940s House`,subhead:`What nine sources agree on — and where they don't`,references:[],refreshing:!1},C=v.bind({}),C.args={createdAt:``,title:`Places to Stay on Niijima`,subhead:``,references:[],refreshing:!1}})))()}w();export{x as CreatedEarlier,y as Default,C as HeadingOnly,S as NoReferences,b as Refreshing,g as default};