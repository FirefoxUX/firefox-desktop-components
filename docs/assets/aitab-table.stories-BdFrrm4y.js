import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{_ as t,f as n,u as r}from"./lit.all-Co4HOUmF.js";import{c as i,o as a}from"./iframe-CEh6YfCk.js";import{t as o}from"./smartwindow-chip-8GqxZUv3.js";import{n as s,t as c}from"./_firefox-storybook_moz-css-url_f7c7070a6807b1ebcccbaa6527911d2eccc5c19c73da5980322a6310a35dd706-D1p1Bb76.js";import{n as l,t as u}from"./aitab-story-font-Czr8xWXy.js";import{t as d}from"./AITabUtils-BVxPr_Nm.js";var f;function p(){return(p=e((()=>{f=new URL(`aitab-table-WeRZN1KU.css`,import.meta.url).href+``})))()}function m(e,t){let n=S.get(e);return n||(n=t(),S.set(e,n)),n}function h(){return m(`number`,()=>new Intl.NumberFormat)}function g(){return m(`rating`,()=>new Intl.NumberFormat(void 0,{maximumFractionDigits:1}))}function _(e){return m(`currency:${e}`,()=>new Intl.NumberFormat(void 0,{style:`currency`,currency:e,trailingZeroDisplay:`stripIfInteger`}))}function v(e){return m(`date:${e??``}`,()=>new Intl.DateTimeFormat(void 0,{dateStyle:`medium`,timeZone:e}))}function y(e,t){let n=t?.[e.key];if(n==null||n===``)return``;let i=e.prefix??``,a=e.suffix??``,o=typeof n==`number`&&Number.isFinite(n);switch(e.type){case`number`:return`${i}${o?h().format(n):n}${a}`;case`currency`:{if(!o)return`${i}${n}${a}`;let t;try{t=_(e.currency??`USD`).format(n)}catch{t=h().format(n)}return`${i}${t}${a}`}case`rating`:{if(!o)return`${i}${n}${a}`;let t=JSON.stringify({value:g().format(n),max:h().format(e.max??5)});return r`${i}<span
          data-l10n-id="ai-tab-table-rating"
          data-l10n-args=${t}
        ></span
        >${a}`}case`date`:{let e=typeof n==`string`&&(b.test(n)||x.test(n))?new Date(n):null;return!e||Number.isNaN(e.valueOf())?`${i}${n}${a}`:`${i}${v(b.test(n)?`UTC`:void 0).format(e)}${a}`}default:return`${i}${n}${a}`}}var b,x,S,C;function w(){return(w=e((()=>{p(),s(),n(),i(),o(),b=/^\d{4}-\d{2}-\d{2}$/,x=/^\d{4}-\d{2}-\d{2}T/,S=new Map,C=class extends a{static properties={heading:{type:String},description:{type:String},columns:{type:Array,attribute:!1},rows:{type:Array,attribute:!1}};constructor(){super(),this.heading=``,this.description=``,this.columns=[],this.rows=[]}get#e(){let e=this.columns.find(e=>e.role==`title`)??this.columns.find(e=>e.role!=`subtitle`);return{title:e,subtitles:this.columns.filter(e=>e.role==`subtitle`),details:this.columns.filter(t=>t!==e&&t.role!=`subtitle`)}}#t(e){return e.label||e.key}#n(e){let n=d(e?.href);return n?r`<smartwindow-chip
      class="aitab-table-source"
      type="source"
      .label=${n.hostname}
      .href=${n.href}
      .iconSrc=${`page-icon:${n.href}`}
      openLinkEvent="AITab:OpenLink"
    ></smartwindow-chip>`:t}#r(e,{title:t,subtitles:n,details:i}){let a=n.map(t=>y(t,e)).filter(Boolean);return r`<tr>
      <th scope="row">
        <div class="aitab-table-name-cell">
          <span class="aitab-table-name">${y(t,e)}</span>
          ${a.map(e=>r`<span class="aitab-table-subtitle">${e}</span>`)}
          ${this.#n(e)}
        </div>
      </th>
      ${i.map(t=>r`<td>${y(t,e)}</td>`)}
    </tr>`}render(){let{title:e,subtitles:n,details:i}=this.#e;return e?r`
      <link
        rel="stylesheet"
        href="${c}"
      />
      <link
        rel="stylesheet"
        href="${f}"
      />
      <section class="aitab-table">
        ${this.heading?r`<h2 id="heading" class="aitab-heading-3">${this.heading}</h2>`:t}
        ${this.description?r`<p class="aitab-table-description">${this.description}</p>`:t}
        <table
          aria-labelledby=${this.heading?`heading`:t}
          data-details=${i.length}
        >
          <colgroup>
            <col class="aitab-table-name-col" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">${this.#t(e)}</th>
              ${i.map(e=>r`<th scope="col">${this.#t(e)}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${this.rows.map(t=>this.#r(t,{title:e,subtitles:n,details:i}))}
          </tbody>
        </table>
      </section>
    `:t}},customElements.define(`aitab-table`,C)})))()}var T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{n(),w(),u(),T={title:`Domain-specific UI Widgets/AI Window/AITab Table`,component:`aitab-table`,decorators:[l],argTypes:{heading:{control:`text`},description:{control:`text`},columns:{control:`object`},rows:{control:`object`}},parameters:{fluent:`
ai-tab-table-rating = { $value } / { $max }
    `}},E=({heading:e,description:t,columns:n,rows:i})=>r`
  <aitab-table
    .heading=${e}
    .description=${t}
    .columns=${n}
    .rows=${i}
  ></aitab-table>
`,D=[{key:`name`,label:`Name`,type:`text`,role:`title`},{key:`price`,label:`Price`,type:`currency`,currency:`USD`,suffix:` / night`},{key:`rating`,label:`Rating`,type:`rating`,max:5},{key:`reviews`,label:`Reviews`,type:`number`}],O=[{name:`Nijima Escape`,price:109,rating:3.9,reviews:520,href:`https://www.booking.com/hotel/jp/nijima-escape.html`},{name:`Yado Marubun`,price:215,rating:4.9,reviews:3124,href:`https://www.tripadvisor.com/Hotel_Review-yado-marubun`},{name:`Kegetsutei Ryokan`,price:225,rating:4.5,reviews:1441,href:`https://www.japanican.com/en/hotel/detail/kegetsutei`},{name:`Hotel Kanazawa Korinbo Annex`,price:168,rating:4.2,reviews:886,href:`https://www.hotels.com/ho/kanazawa-korinbo-annex`},{name:`Higashiyama Machiya (whole house)`,price:142,rating:4.8,reviews:97,href:`https://www.airbnb.com/rooms/higashiyama-machiya`}],k=E.bind({}),k.args={heading:`Where to stay`,description:`Five options gathered from your open tabs`,columns:D,rows:O},A=E.bind({}),A.args={heading:`Where to stay`,description:`Neighbourhood shown under each name`,columns:[D[0],{key:`area`,type:`text`,role:`subtitle`},...D.slice(1)],rows:O.map((e,t)=>({...e,area:[`Higashiyama`,`Nagamachi`,`Kenrokuen`,`Korinbo`,`Higashiyama`][t]}))},j=E.bind({}),j.args={heading:`Installer quotes`,columns:[{key:`name`,label:`Installer`,type:`text`,role:`title`},{key:`price`,label:`Quote`,type:`currency`}],rows:[{name:`Bright Build`,price:31200,href:`https://brightbuild.example`},{name:`Sunward Solar`,price:28950},{name:`Northfield Energy`,price:33475.5}]},M=E.bind({}),M.args={heading:`Laptops under $1,500`,description:`Six attributes stretch the layout to its widest`,columns:[{key:`name`,label:`Model`,type:`text`,role:`title`},{key:`price`,label:`Price`,type:`currency`},{key:`weight`,label:`Weight`,type:`number`,suffix:` kg`},{key:`battery`,label:`Battery`,type:`number`,suffix:` h`},{key:`rating`,label:`Rating`,type:`rating`,max:10},{key:`released`,label:`Released`,type:`date`}],rows:[{name:`Framework Laptop 13`,price:1049,weight:1.3,battery:11,rating:8.5,released:`2025-08-12`,href:`https://frame.work/products/laptop13`},{name:`ThinkPad X1 Carbon Gen 13`,price:1449,weight:.99,battery:14,rating:9.1,released:`2025-03-04`,href:`https://www.lenovo.com/thinkpad-x1-carbon`}]},N=E.bind({}),N.args={heading:`Long values wrap inside their column`,columns:[{key:`name`,label:`Name`,type:`text`,role:`title`},{key:`notes`,label:`Notes`,type:`text`},{key:`price`,label:`Price`,type:`currency`}],rows:[{name:`The Grand Continental Riverside Hotel and Conference Centre at Harbourfront Quay`,notes:`Breakfast included, late checkout on request, free cancellation up to 48 hours before arrival, pets allowed on the ground floor only.`,price:289,href:`https://www.example.com/grand-continental`},{name:`Pod`,notes:`Supercalifragilisticexpialidocious-unbrokenwordthatmustwrapsomewhere`,price:45}]}})))()}P();export{N as LongText,M as SixColumns,j as TwoColumns,k as WhereToStay,A as WithSubtitle,T as default};