import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{_ as t,f as n,u as r,y as i}from"./lit.all-Co4HOUmF.js";import{c as a,o}from"./iframe-DbtNkzFn.js";import{a as s}from"./SmartFormFillConstants-BwXnXPUL.js";var c;function l(){return(l=e((()=>{c=``+new URL(`ai-sff-tab-selector-BMWkirv-.css`,import.meta.url).href})))()}var u;function d(){return(d=e((()=>{l(),a(),n(),s(),u=class extends o{static properties={suggestedTabs:{type:Array},otherTabs:{type:Array}};constructor(){super(),this.suggestedTabs=[],this.otherTabs=[]}get#e(){return[...this.suggestedTabs,...this.otherTabs].filter(e=>e.pressed).map(e=>e.id)}#t(e,t,n){return e.map(e=>e.id===t?{...e,pressed:n}:e)}#n(e,t){let{pressed:n}=e.currentTarget;this.suggestedTabs=this.#t(this.suggestedTabs,t,n),this.otherTabs=this.#t(this.otherTabs,t,n)}#r(){let e=this.#e;!e.length||e.length>5||this.dispatchEvent(new CustomEvent(`tabs-selected`,{bubbles:!0,composed:!0,detail:{selectedTabIds:e}}))}#i(){this.dispatchEvent(new CustomEvent(`cancel`,{bubbles:!0,composed:!0}))}#a(e,t,n,a=!1){return r`
      <moz-box-group
        type="list"
        class=${a?`tab-selector-tabs-scrollable ai-smart-form-fill-other-tabs`:`ai-smart-form-fill-suggested-tabs`}
      >
        <moz-box-item slot="header">
          <h2
            class="tab-selector-list-heading"
            data-l10n-id=${e}
          ></h2>
        </moz-box-item>

        ${i(t,e=>e.id,e=>r`
            <moz-box-item
              .label=${e.title||e.url}
              .description=${e.url}
              .iconSrc=${e.favicon}
            >
              <moz-toggle
                slot="actions"
                data-l10n-id="ai-smart-form-fill-tab-select-toggle"
                data-l10n-args=${JSON.stringify({tabTitle:e.title})}
                .pressed=${e.pressed}
                .disabled=${n>=5&&!e.pressed}
                @toggle=${t=>this.#n(t,e.id)}
              ></moz-toggle>
            </moz-box-item>
          `)}
      </moz-box-group>
    `}render(){let e=this.#e.length;return r`
      <link
        rel="stylesheet"
        href="${c}"
      />

      <div class="tab-selector-dialog">
        <h1
          class="tab-selector-title"
          data-l10n-id="ai-smart-form-fill-edit-sources"
        ></h1>

        ${this.suggestedTabs?.length?this.#a(`ai-smart-form-fill-suggested-tabs`,this.suggestedTabs,e):t}
        ${this.otherTabs?.length?this.#a(`ai-smart-form-fill-other-tabs`,this.otherTabs,e,!0):t}

        <moz-button-group class="tab-selector-actions">
          <moz-button
            data-l10n-id="ai-smart-form-fill-cancel-tab-select"
            size="large"
            @click=${this.#i}
          ></moz-button>
          <moz-button
            data-l10n-id="ai-smart-form-fill-accept-tab-select"
            type="primary"
            size="large"
            .disabled=${e==0||e>5}
            @click=${this.#r}
          ></moz-button>
        </moz-button-group>
      </div>
    `}},customElements.define(`ai-sff-tab-selector`,u)})))()}var f,p,m,h;function g(){return(g=e((()=>{n(),d(),f=`chrome://global/skin/icons/defaultFavicon.svg`,p={title:`Domain-specific UI Widgets/AI Window/Smart Form Fill Tab Selector`,component:`ai-sff-tab-selector`,argTypes:{suggestedTabs:{control:`object`},otherTabs:{control:`object`}},parameters:{status:`in-development`,actions:{handles:[`toggle`]},fluent:`
ai-smart-form-fill-edit-sources = Edit sources
ai-smart-form-fill-suggested-tabs = Suggested tabs
ai-smart-form-fill-other-tabs = Other tabs
ai-smart-form-fill-tab-select-toggle =
    .aria-label = Toggle tab selection for { $tabTitle }
ai-smart-form-fill-cancel-tab-select =
    .label = Cancel
ai-smart-form-fill-accept-tab-select =
    .label = Done
    `}},m=({suggestedTabs:e,otherTabs:t})=>r`
  <ai-sff-tab-selector
    .suggestedTabs=${e}
    .otherTabs=${t}
  ></ai-sff-tab-selector>
`,h=m.bind({}),h.args={suggestedTabs:[{id:`linkedin`,title:`Firstname Lastname - LinkedIn`,url:`linkedin.com/in/firstnamelastname`,favicon:f,pressed:!0},{id:`resume`,title:`My Resume - Firstname Lastname`,url:`PDF document`,favicon:f,pressed:!0}],otherTabs:[{id:`airbnb`,title:`Cabins in Colorado - Airbnb`,url:`airbnb.com/colorado-cabins`,favicon:f,pressed:!1},{id:`gmail`,title:`Inbox - name@gmail.com`,url:`mail.google.com/inbox`,favicon:f,pressed:!1},{id:`mozilla`,title:`Mozilla`,url:`mozilla.org`,favicon:f,pressed:!1},{id:`github`,title:`GitHub`,url:`github.com`,favicon:f,pressed:!1},{id:`wikipedia`,title:`Wikipedia`,url:`wikipedia.org`,favicon:f,pressed:!1},{id:`reddit`,title:`Reddit`,url:`reddit.com`,favicon:f,pressed:!1},{id:`youtube`,title:`YouTube`,url:`youtube.com`,favicon:f,pressed:!1},{id:`mdn`,title:`MDN Web Docs`,url:`developer.mozilla.org`,favicon:f,pressed:!1}]}})))()}g();export{h as Default,p as default};