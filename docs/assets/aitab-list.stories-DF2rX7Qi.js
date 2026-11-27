import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{_ as t,f as n,u as r}from"./lit.all-Co4HOUmF.js";import{c as i,o as a}from"./iframe-17211AdQ.js";import{n as o,t as s}from"./aitab-base-Dg65SCE2.js";import{n as c,t as l}from"./aitab-story-font-Czr8xWXy.js";var u;function d(){return(d=e((()=>{u=``+new URL(`aitab-list-ChvCKSk5.css`,import.meta.url).href})))()}var f,p;function m(){return(m=e((()=>{o(),d(),n(),i(),f=`column`,p=class extends a{static properties={title:{type:String},description:{type:String},groups:{type:Array},layout:{type:String,reflect:!0}};constructor(){super(),this.title=``,this.description=``,this.groups=[],this.layout=f}#e(){return!this.title&&!this.description?t:r`<div class="aitab-list-intro">
      ${this.title?r`<h2 class="aitab-list-title aitab-heading-3">${this.title}</h2>`:t}
      ${this.description?r`<p class="aitab-list-description aitab-deemphasized">
            ${this.description}
          </p>`:t}
    </div>`}#t(e){return r`<div class="aitab-list-group">
      ${e.heading?r`<h3 class="aitab-list-group-heading aitab-heading-4">
            ${e.heading}
          </h3>`:t}
      <ul class="aitab-list-items">
        ${e.items.map(e=>r`<li class="aitab-list-item">${e?.text??``}</li>`)}
      </ul>
    </div>`}render(){let e=(this.groups??[]).filter(e=>e?.items?.length);return e.length?r`
      <link
        rel="stylesheet"
        href="${s}"
      />
      <link
        rel="stylesheet"
        href="${u}"
      />
      <section class="aitab-list">
        ${this.#e()}
        <div class="aitab-list-groups">
          ${e.map(e=>this.#t(e))}
        </div>
      </section>
    `:t}},customElements.define(`aitab-list`,p)})))()}var h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{n(),m(),l(),h={title:`Domain-specific UI Widgets/AI Window/AI Tab List`,component:`aitab-list`,decorators:[c],argTypes:{title:{control:{type:`text`}},description:{control:{type:`text`}},layout:{control:{type:`select`},options:[`column`,`row`]}}},g=[{heading:`Food`,items:[{text:`Omicho market for lunch`},{text:`Kanazawa-style curry`},{text:`Kaiseki dinner, one night only`}]},{heading:`Sights`,items:[{text:`Kenroku-en at opening`},{text:`21st Century Museum`},{text:`Higashiyama teahouses`}]},{heading:`Practical`,items:[{text:`IC card for buses`},{text:`Cash for small shops`},{text:`Book the ryokan early`}]}],_=({title:e,description:t,groups:n,layout:i})=>r`
  <aitab-list
    .title=${e}
    description=${t}
    .groups=${n}
    layout=${i}
  ></aitab-list>
`,v=_.bind({}),v.args={title:`Multi-column`,description:`Short hits pulled out of the longer guides in your tabs`,groups:g,layout:`column`},y=_.bind({}),y.args={...v.args,title:`No descriptors`,description:``,groups:g.slice(0,2).map(({items:e})=>({items:e}))},b=_.bind({}),b.args={title:`One column`,description:`Short hits pulled out of the longer guides in your tabs`,layout:`row`,groups:[{heading:`Groceries`,items:[{text:`Chicken breast`},{text:`Shishito peppers`},{text:`Soy sauce`},{text:`Cilantro`},{text:`Ginger`}]}]},x=_.bind({}),x.args={title:`Instructions`,description:`The merged method, taking the best step from each source.`,layout:`row`,groups:[{heading:`Sear`,items:[{text:`Pat the thighs dry and season both sides. Lay skin-side down in a cold, dry pan and bring up to medium heat together - this renders the fat instead of seizing the skin.`},{text:`Sear 8-10 minutes undisturbed until deep golden, flip for 2 minutes, then set the thighs aside on a plate.`}]},{heading:`Braise`,items:[{text:`Pour off all but a tablespoon of fat, soften the aromatics, then deglaze with wine or stock, scraping up the browned bits for the sauce.`},{text:`Return the thighs skin-up, cover, and simmer on low 35-40 minutes until the thickest one reads 165F.`}]},{heading:`Finish`,items:[{text:`Uncover and reduce the sauce 5 minutes if it's thin, then rest the chicken 5 minutes off heat before serving over the sauce.`}]}]},S=_.bind({}),S.args={title:``,description:``,groups:[g[0]],layout:`row`}})))()}C();export{x as Instructions,v as MultiColumn,y as NoDescriptors,S as NoTitleNoDesc,b as OneColumn,h as default};