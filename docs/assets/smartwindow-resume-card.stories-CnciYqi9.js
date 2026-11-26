import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{_ as t,f as n,u as r}from"./lit.all-Co4HOUmF.js";import{c as i,o as a}from"./iframe-DUPCaqkc.js";import{n as o}from"./moz-button-DlJZ5I-w.js";import{t as s}from"./panel-list-BjRbkL-2.js";var c;function l(){return(l=e((()=>{c=``+new URL(`smartwindow-resume-card-KP0eyo08.css`,import.meta.url).href})))()}var u,d,f;function p(){return(p=e((()=>{l(),n(),i(),o(),s(),u=3,d=`resume-card-more-menu`,f=class extends a{static properties={content:{type:Object},journeyId:{type:String}};constructor(){super(),this.content=null,this.journeyId=null}#e(e,t){this.dispatchEvent(new CustomEvent(`smartwindow-resume-card:${e}`,{detail:t,bubbles:!0,composed:!0}))}#t=!1;#n=()=>{this.#t=this.shadowRoot.getElementById(d)?.open??!1};#r=e=>{let t=e.detail>0,n=this.#t;if(this.#t=!1,t&&n)return;let r=this.ownerDocument.getSelection();if(t&&r&&!r.isCollapsed)return;let i=!!e.target.closest(`.resume-card-resume-button`);this.#e(`resume`,{journeyId:this.journeyId,source:i?`resume_button`:`card`})};#i=e=>{e.stopPropagation(),this.#e(`dismiss`,{journeyId:this.journeyId})};#a=e=>{e.stopPropagation()};#o(e){this.#e(`menu-item-selected`,{journeyId:this.journeyId,itemId:e})}#s(){let e=this.content?.previewTabs??[];return e.length?r`
      <span class="resume-card-favicons">
        ${e.slice(0,u).map(e=>r`
            <img
              class="resume-card-favicon"
              src="page-icon:${e.url}"
              alt=""
              @error=${e=>{e.target.src=`chrome://global/skin/icons/defaultFavicon.svg`}}
            />
          `)}
      </span>
    `:t}render(){if(!this.content)return r``;let e=this.content.previewTabs?.length??0,t=JSON.stringify({text:this.content.headline});return r`
      <link
        rel="stylesheet"
        href="${c}"
      />
      <div
        class="resume-card"
        @pointerdown=${this.#n}
        @click=${this.#r}
      >
        <button
          class="resume-card-dismiss"
          @click=${this.#i}
          data-l10n-id="aiwindow-resume-card-dismiss"
          data-l10n-args=${t}
        >
          <img
            class="resume-card-dismiss-icon"
            src="chrome://global/skin/icons/close.svg"
            alt=""
          />
        </button>
        <div class="resume-card-header">
          ${this.#s()}
          <span
            class="resume-card-tab-count"
            data-l10n-id="aiwindow-resume-card-tab-count"
            data-l10n-args=${JSON.stringify({count:e})}
          ></span>
        </div>
        <div class="resume-card-title">${this.content.headline}</div>
        <div class="resume-card-description">${this.content.status}</div>
        <div class="resume-card-actions">
          <moz-button
            class="resume-card-action-button resume-card-more-button"
            .menuId=${d}
            iconsrc="chrome://global/skin/icons/arrow-down.svg"
            iconposition="end"
            data-l10n-id="aiwindow-resume-card-more"
            data-l10n-args=${t}
            @click=${this.#a}
          ></moz-button>
          <panel-list id=${d} @click=${this.#a}>
            <panel-item
              @click=${()=>this.#o(`open_tabs`)}
              data-l10n-id="aiwindow-resume-card-open-tabs"
            ></panel-item>
            <panel-item
              @click=${()=>this.#o(`snooze`)}
              data-l10n-id="aiwindow-resume-card-snooze"
            ></panel-item>
          </panel-list>
          <moz-button
            class="resume-card-action-button resume-card-resume-button"
            data-l10n-id="aiwindow-resume-card-resume"
            data-l10n-args=${t}
          ></moz-button>
        </div>
      </div>
    `}},customElements.define(`smartwindow-resume-card`,f)})))()}var m,h,g,_,v,y;function b(){return(b=e((()=>{n(),p(),window.MozXULElement.insertFTLIfNeeded(`preview/aiWindow.ftl`),m={title:`Domain-specific UI Widgets/AI Window/Smartwindow Resume Card`,component:`smartwindow-resume-card`},h=({content:e,journeyId:t})=>r`
  <div style="width: 340px; padding: 20px;">
    <smartwindow-resume-card
      .content=${e}
      .journeyId=${t}
      @smartwindow-resume-card:resume=${e=>{alert(`Resume: ${e.detail.journeyId}`)}}
      @smartwindow-resume-card:dismiss=${e=>{alert(`Dismiss: ${e.detail.journeyId}`)}}
      @smartwindow-resume-card:menu-item-selected=${e=>{alert(`Menu item: ${e.detail.itemId} (${e.detail.journeyId})`)}}
    ></smartwindow-resume-card>
  </div>
`,g=h.bind({}),g.args={journeyId:`sample-1`,content:{headline:`Team offsite planning`,status:`You'd started a shared doc outlining offsite location options and had a Slack thread open with feedback from the team.`,previewTabs:[{url:`https://docs.google.com/document/d/sample-1`},{url:`https://www.figma.com/file/sample-2`}]}},_=h.bind({}),_.args={journeyId:`sample-2`,content:{headline:`Japan trip planning`,status:`Reviewed transportation options including the Japan Rail Pass and Tokyo Metro, plus a few hotel options near Shinjuku.`,previewTabs:[{url:`https://docs.google.com/document/d/sample-3`},{url:`https://www.figma.com/file/sample-4`},{url:`https://en.wikipedia.org/wiki/sample-5`},{url:`https://en.wikipedia.org/wiki/sample-6`}]}},v=h.bind({}),v.args={journeyId:`sample-3`,content:{headline:`Comparing espresso machines and coffee grinders for the new kitchen setup`,status:`Compared top-rated espresso machines and coffee grinders, with reference to several reviews and a spreadsheet tracking prices across retailers.`,previewTabs:[{url:`https://www.example.com/sample-7`}]}},y=h.bind({}),y.args={journeyId:`sample-4`,content:{headline:`Recipe roundup for dinner party`,status:`You had a handful of recipe pages open while planning the menu.`,previewTabs:[]}}})))()}b();export{g as Default,v as LongTitleAndDescription,_ as ManyPreviewTabs,y as NoPreviewTabs,m as default};