import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{_ as t,f as n,u as r}from"./lit.all-Co4HOUmF.js";import{c as i,o as a}from"./iframe-DP8hlEO7.js";import{n as o,t as s}from"./_firefox-storybook_moz-css-url_f7c7070a6807b1ebcccbaa6527911d2eccc5c19c73da5980322a6310a35dd706-D1p1Bb76.js";import{n as c,t as l}from"./aitab-story-font-Czr8xWXy.js";var u;function d(){return(d=e((()=>{u=new URL(`aitab-error-RHuCCyAb.css`,import.meta.url).href+``})))()}var f;function p(){return(p=e((()=>{d(),o(),n(),i(),f=class extends a{static properties={status:{type:String}};constructor(){super(),this.status=`error`}#e(){return this.status==`unavailable`?r`
      <p class="aitab-error-intro" data-l10n-id="aitab-page-error-intro"></p>
      <ul class="aitab-error-reasons">
        <li data-l10n-id="aitab-page-error-reason-deleted"></li>
        <li data-l10n-id="aitab-page-error-reason-incorrect-link"></li>
        <li data-l10n-id="aitab-page-error-reason-shared-link"></li>
      </ul>
    `:t}render(){return r`
      <link
        rel="stylesheet"
        href="${s}"
      />
      <link
        rel="stylesheet"
        href="${u}"
      />
      <main class="aitab-error">
        <div class="aitab-error-wrapper">
          <img
            class="aitab-error-image"
            src="chrome://browser/content/aiwindow/assets/aitab-error-kit.svg"
            alt=""
          />
          <div class="aitab-error-text-group" role="alert">
            <h1
              class="aitab-error-heading"
              data-l10n-id="aitab-page-error-heading"
            ></h1>
            ${this.#e()}
          </div>
        </div>
      </main>
    `}},customElements.define(`aitab-error`,f)})))()}var m,h,g,_;function v(){return(v=e((()=>{n(),p(),l(),m={title:`Domain-specific UI Widgets/AI Window/AI Tab Error`,component:`aitab-error`,decorators:[c],parameters:{fluent:`
aitab-page-error-heading = This Smart Page isn’t available
aitab-page-error-intro = Here’s what may have happened:
aitab-page-error-reason-deleted = <strong>The page was deleted.</strong> To create a new one, go to another tab in Smart Window and ask in the sidebar.
aitab-page-error-reason-incorrect-link = <strong>The link is incorrect.</strong> Search for the page by name in the address bar.
aitab-page-error-reason-shared-link = <strong>The link was shared with you.</strong> Smart Pages can’t be shared by link. Ask the sender for a PDF instead.
    `}},h=e=>r`<aitab-error .status=${e.status}></aitab-error>`,g=h.bind({}),g.args={status:`unavailable`},_=h.bind({}),_.args={status:`error`}})))()}v();export{_ as GenericError,g as Unavailable,m as default};