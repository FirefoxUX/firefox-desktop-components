import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,u as n}from"./lit.all-BYVOqvrj.js";import{c as r,o as i}from"./iframe-DZPZZ1s7.js";var a;function o(){return(o=e((()=>{a=new URL(`smartwindow-footer-DTbw1Jtr.css`,import.meta.url).href+``})))()}var s,c;function l(){return(l=e((()=>{o(),t(),r(),s=[`chats`,`history`],c=class extends i{handleActionClick(e){s.includes(e)?window.browsingContext.topChromeWindow.FirefoxViewHandler.openTab(e):console.warn(`Action not allowed`)}render(){return n`
      <link
        rel="stylesheet"
        href="${a}"
      />
      <div class="footer-container">
        <moz-button
          type="ghost"
          data-l10n-id="smartwindow-footer-history"
          data-l10n-attrs="tooltiptext,aria-label"
          class="footer-action-button"
          iconsrc="chrome://browser/skin/history-20.svg"
          @click=${()=>{this.handleActionClick(`history`)}}
        ></moz-button>
        <moz-button
          type="ghost"
          data-l10n-id="smartwindow-footer-chats"
          data-l10n-attrs="tooltiptext,aria-label"
          class="footer-action-button"
          iconsrc="chrome://browser/content/firefoxview/view-chats.svg"
          @click=${()=>{this.handleActionClick(`chats`)}}
        >
        </moz-button>
      </div>
    `}},customElements.define(`smartwindow-footer`,c)})))()}var u,d,f;function p(){return(p=e((()=>{t(),l(),u={title:`Domain-specific UI Widgets/AI Window/Smartwindow Footer`,component:`smartwindow-footer`,parameters:{status:`in-development`,docs:{description:{component:`A footer component for the Smart Window fullpage mode that provides navigation buttons for History and Chats.`}},fluent:`
aiwindow-history = History
    .aria-label = View browsing history
    .tooltiptext = View your browsing history
aiwindow-chats = Chats
    .aria-label = View chat conversations
    .tooltiptext = View your chat conversations
    `}},d=()=>n`
  <div style="width: 400px; padding: 20px;">
    <smartwindow-footer></smartwindow-footer>
  </div>
`,f=d.bind({}),f.args={}})))()}p();export{f as Default,u as default};