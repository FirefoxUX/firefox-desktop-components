import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,u as n}from"./lit.all-Co4HOUmF.js";import{c as r,o as i}from"./iframe-DP8hlEO7.js";var a;function o(){return(o=e((()=>{a=new URL(`smartwindow-topsites-BMY23SZA.css`,import.meta.url).href+``})))()}var s;function c(){return(c=e((()=>{o(),t(),r(),s=class extends i{static properties={sites:{type:Array}};constructor(){super(),this.sites=[]}#e(e,t){this.dispatchEvent(new CustomEvent(`SmartWindowTopSites:site-selected`,{detail:{url:e.url,position:t},bubbles:!0,composed:!0}))}#t(e){return e.tippyTopIcon||e.favicon||`page-icon:${e.url}`}render(){return this.sites.length?n`
      <link
        rel="stylesheet"
        href="${a}"
      />
      <div class="sw-topsites-container" role="list">
        ${this.sites.map((e,t)=>{let r=e.label||e.hostname;return n`
            <a
              class="sw-topsite"
              role="listitem"
              href=${e.url}
              title=${r}
              @click=${n=>{n.preventDefault(),this.#e(e,t)}}
            >
              <span class="sw-topsite-icon">
                <img alt="" src=${this.#t(e)} />
              </span>
              <span class="sw-topsite-title">${r}</span>
            </a>
          `})}
      </div>
    `:n``}},customElements.define(`smartwindow-topsites`,s)})))()}var l,u,d,f,p;function m(){return(m=e((()=>{t(),c(),l={title:`Domain-specific UI Widgets/AI Window/Smartwindow Topsites`,component:`smartwindow-topsites`,parameters:{status:`in-development`,docs:{description:{component:"A single row of Top Sites tiles shown below the Smartbar in Smart Window fullpage mode. Each tile shows a favicon and title; selecting one dispatches a `SmartWindowTopSites:site-selected` event with the site URL."}}}},u=[{url:`https://www.wikipedia.org/`,label:`Wikipedia`,favicon:`https://www.wikipedia.org/static/favicon/wikipedia.ico`},{url:`https://www.youtube.com/`,label:`YouTube`,favicon:`https://www.youtube.com/favicon.ico`},{url:`https://apnews.com/`,label:`AP News`,favicon:`https://apnews.com/favicon.ico`},{url:`https://www.reddit.com/`,label:`Reddit`,favicon:`https://www.reddit.com/favicon.ico`}],d=({sites:e})=>n`
  <div style="width: 100%; min-height: 200px; padding: 20px;">
    <smartwindow-topsites
      .sites=${e}
      @SmartWindowTopSites:site-selected=${e=>{alert(`Selected: ${e.detail.url}`)}}
    ></smartwindow-topsites>
  </div>
`,f=d.bind({}),f.args={sites:u},p=d.bind({}),p.args={sites:[]}})))()}m();export{f as Default,p as Empty,l as default};