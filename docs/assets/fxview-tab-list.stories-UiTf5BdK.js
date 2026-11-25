import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{S as t,b as n,d as r,f as i,i as a,u as o,y as s}from"./lit.all-Co4HOUmF.js";import{c,o as l}from"./iframe-DbtNkzFn.js";import{n as u}from"./moz-button-DV-w2-fz.js";var d;function f(){return(f=e((()=>{d=``+new URL(`fxview-tab-list-CuOExdM5.css`,import.meta.url).href})))()}var p;function m(){return(m=e((()=>{p=``+new URL(`fxview-tab-row-DoYkx-HJ.css`,import.meta.url).href})))()}function h(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function g(e){return(e||``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}var _;function v(){return(v=e((()=>{_={},ChromeUtils.defineESModuleGetters(_,{BrowserUtils:`resource://gre/modules/BrowserUtils.sys.mjs`,Log:`resource://gre/modules/Log.sys.mjs`,PlacesUIUtils:`moz-src:///browser/components/places/PlacesUIUtils.sys.mjs`,AppConstants:`resource://gre/modules/AppConstants.sys.mjs`}),ChromeUtils.defineLazyGetter(_,`relativeTimeFormat`,()=>new Services.intl.RelativeTimeFormat(void 0,{style:`narrow`}))})))()}var y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{f(),m(),i(),c(),v(),u(),y=91e3,b=32,x={},window.IS_STORYBOOK||(S=ChromeUtils.importESModule(`resource://gre/modules/XPCOMUtils.sys.mjs`).XPCOMUtils,ChromeUtils.defineLazyGetter(x,`relativeTimeFormat`,()=>new Services.intl.RelativeTimeFormat(void 0,{style:`narrow`})),ChromeUtils.defineESModuleGetters(x,{BrowserUtils:`resource://gre/modules/BrowserUtils.sys.mjs`})),C=class extends l{constructor(){super(),window.MozXULElement.insertFTLIfNeeded(`toolkit/branding/brandings.ftl`),window.MozXULElement.insertFTLIfNeeded(`browser/fxviewTabList.ftl`),this.activeIndex=0,this.currentActiveElementId=`fxview-tab-row-main`,this.hasPopup=null,this.dateTimeFormat=`relative`,this.maxTabsLength=25,this.tabItems=[],this.compactRows=!1,this.updatesPaused=!0,this.#e()}static properties={activeIndex:{type:Number},compactRows:{type:Boolean},currentActiveElementId:{type:String},dateTimeFormat:{type:String},hasPopup:{type:String},maxTabsLength:{type:Number},tabItems:{type:Array},updatesPaused:{type:Boolean},searchQuery:{type:String},secondaryActionClass:{type:String},tertiaryActionClass:{type:String},getItemHeight:{type:Function}};static queries={emptyState:`fxview-empty-state`,rowEls:{all:`fxview-tab-row`},rootVirtualListEl:`virtual-list`};willUpdate(e){this.activeIndex=Math.min(Math.max(this.activeIndex,0),this.tabItems.length-1),(e.has(`dateTimeFormat`)||e.has(`updatesPaused`))&&(this.clearIntervalTimer(),!this.updatesPaused&&this.dateTimeFormat==`relative`&&!window.IS_STORYBOOK&&(this.startIntervalTimer(),this.onIntervalUpdate())),this.maxTabsLength>0&&(this.tabItems=this.tabItems.slice(0,this.maxTabsLength))}startIntervalTimer(){this.clearIntervalTimer(),this.intervalID=setInterval(()=>this.onIntervalUpdate(),this.timeMsPref)}clearIntervalTimer(){this.intervalID&&(clearInterval(this.intervalID),delete this.intervalID)}#e(){window.IS_STORYBOOK||S.defineLazyPreferenceGetter(this,`timeMsPref`,`browser.tabs.firefox-view.updateTimeMs`,y,()=>{this.clearIntervalTimer(),this.isConnected&&(this.startIntervalTimer(),this.requestUpdate())})}connectedCallback(){super.connectedCallback(),!this.updatesPaused&&this.dateTimeFormat===`relative`&&!window.IS_STORYBOOK&&this.startIntervalTimer()}disconnectedCallback(){super.disconnectedCallback(),this.clearIntervalTimer()}async getUpdateComplete(){await super.getUpdateComplete(),await Promise.all(Array.from(this.rowEls).map(e=>e.updateComplete))}onIntervalUpdate(){this.requestUpdate(),Array.from(this.rowEls).forEach(e=>e.requestUpdate())}handleFocusElementInRow(e){let t=e.target;e.code==`ArrowUp`?(e.preventDefault(),this.focusPrevRow()):e.code==`ArrowDown`?(e.preventDefault(),this.focusNextRow()):e.code==`ArrowRight`?(e.preventDefault(),document.dir==`rtl`?t.moveFocusLeft():t.moveFocusRight()):e.code==`ArrowLeft`&&(e.preventDefault(),document.dir==`rtl`?t.moveFocusRight():t.moveFocusLeft())}focusPrevRow(){this.focusIndex(this.activeIndex-1)}focusNextRow(){this.focusIndex(this.activeIndex+1)}async focusIndex(e){if(e>=0&&e<this.rowEls?.length){let t=this.rootVirtualListEl.getItem(e);if(!t||!this.rootVirtualListEl.getSubListForItem(e))return;this.activeIndex=e,await this.requestVirtualListUpdate(),t.scrollIntoView({block:`center`}),t.focus()}}async requestVirtualListUpdate(){let e=[];for(let t of this.rootVirtualListEl.children)t.requestUpdate(),e.push(t.updateComplete);return Promise.allSettled(e)}shouldUpdate(e){return e.has(`updatesPaused`)&&this.updatesPaused&&this.clearIntervalTimer(),!this.updatesPaused}itemTemplate=(e,t)=>{let n;return(e.time||e.closedAt)&&(n=(e.time||e.closedAt).toString().length===16?(e.time||e.closedAt)/1e3:e.time||e.closedAt),o`
      <fxview-tab-row
        ?active=${t==this.activeIndex}
        ?compact=${this.compactRows}
        .currentActiveElementId=${this.currentActiveElementId}
        .favicon=${e.icon}
        .primaryL10nId=${e.primaryL10nId}
        .primaryL10nArgs=${e.primaryL10nArgs}
        .secondaryL10nId=${e.secondaryL10nId}
        .secondaryL10nArgs=${e.secondaryL10nArgs}
        .tertiaryL10nId=${e.tertiaryL10nId}
        .tertiaryL10nArgs=${e.tertiaryL10nArgs}
        .secondaryActionClass=${this.secondaryActionClass}
        .tertiaryActionClass=${this.tertiaryActionClass}
        .sourceClosedId=${e.sourceClosedId}
        .sourceWindowId=${e.sourceWindowId}
        .closedId=${e.closedId||e.closedId}
        role="listitem"
        .tabElement=${e.tabElement}
        .time=${n}
        .title=${e.title}
        .url=${e.url}
        .searchQuery=${this.searchQuery}
        .timeMsPref=${this.timeMsPref}
        .hasPopup=${this.hasPopup}
        .dateTimeFormat=${this.dateTimeFormat}
      ></fxview-tab-row>
    `};stylesheets(){return o`<link
      rel="stylesheet"
      href="${d}"
    />`}render(){return this.searchQuery&&!this.tabItems.length?this.emptySearchResultsTemplate():o`
      ${this.stylesheets()}
      <div
        id="fxview-tab-list"
        class="fxview-tab-list"
        role="list"
        @keydown=${this.handleFocusElementInRow}
      >
        <virtual-list
          .activeIndex=${this.activeIndex}
          .items=${this.tabItems}
          .template=${this.itemTemplate}
          .getItemHeight=${this.getItemHeight}
        ></virtual-list>
      </div>
      <slot name="menu"></slot>
    `}emptySearchResultsTemplate(){return o` <fxview-empty-state
      class="search-results"
      headerLabel="firefoxview-search-results-empty"
      .headerArgs=${{query:g(this.searchQuery)}}
      isInnerCard
    >
    </fxview-empty-state>`}},customElements.define(`fxview-tab-list`,C),w=class extends l{static properties={active:{type:Boolean},compact:{type:Boolean},currentActiveElementId:{type:String},dateTimeFormat:{type:String},favicon:{type:String},hasPopup:{type:String},primaryL10nId:{type:String},primaryL10nArgs:{type:String},secondaryL10nId:{type:String},secondaryL10nArgs:{type:String},secondaryActionClass:{type:String},tertiaryL10nId:{type:String},tertiaryL10nArgs:{type:String},tertiaryActionClass:{type:String},closedId:{type:Number},sourceClosedId:{type:Number},sourceWindowId:{type:String},tabElement:{type:Object},time:{type:Number},title:{type:String},timeMsPref:{type:Number},url:{type:String},uri:{type:String},searchQuery:{type:String}};constructor(){super(),this.active=!1,this.currentActiveElementId=`fxview-tab-row-main`}static queries={mainEl:`#fxview-tab-row-main`,secondaryButtonEl:`#fxview-tab-row-secondary-button:not([hidden])`,tertiaryButtonEl:`#fxview-tab-row-tertiary-button`};get currentFocusable(){let e=this.renderRoot.getElementById(this.currentActiveElementId);return e||=this.renderRoot.getElementById(`fxview-tab-row-main`),e}connectedCallback(){super.connectedCallback(),this.uri=this.url}focus(){this.currentFocusable.focus()}focusSecondaryButton(){let e=this.getRootNode().host;this.secondaryButtonEl.focus(),e.currentActiveElementId=this.secondaryButtonEl.id}focusTertiaryButton(){let e=this.getRootNode().host;this.tertiaryButtonEl.focus(),e.currentActiveElementId=this.tertiaryButtonEl.id}focusLink(){let e=this.getRootNode().host;this.mainEl.focus(),e.currentActiveElementId=this.mainEl.id}moveFocusRight(){this.currentActiveElementId===`fxview-tab-row-main`?this.focusSecondaryButton():this.tertiaryButtonEl&&this.currentActiveElementId===`fxview-tab-row-secondary-button`&&this.focusTertiaryButton()}moveFocusLeft(){this.currentActiveElementId===`fxview-tab-row-tertiary-button`?this.focusSecondaryButton():this.focusLink()}dateFluentArgs(e,t){return t===`date`||t===`dateTime`?JSON.stringify({date:e}):null}dateFluentId(e,t,n=y){return e?t===`relative`?Date.now()-e<=n||!x.relativeTimeFormat?`fxviewtabrow-just-now-timestamp`:null:t===`date`||t===`dateTime`?`fxviewtabrow-date`:null:null}relativeTime(e,t,n=y){return t===`relative`&&Date.now()-e>n&&x.relativeTimeFormat?x.relativeTimeFormat.formatBestUnit(new Date(e)):null}timeFluentId(e){return e===`time`||e===`dateTime`?`fxviewtabrow-time`:null}formatURIForDisplay(e){return window.IS_STORYBOOK?e:x.BrowserUtils.formatURIStringForDisplay(e,{showFilenameForLocalURIs:!0})}getImageUrl(e,t){return window.IS_STORYBOOK?`chrome://global/skin/icons/defaultFavicon.svg`:e?e.startsWith(`http`)?`page-icon:${t}`:e:t?.startsWith(`moz-extension`)?`chrome://mozapps/skin/extensions/extension.svg`:`chrome://global/skin/icons/defaultFavicon.svg`}primaryActionHandler(e){(e.type==`click`&&!e.altKey||e.type==`keydown`&&e.code==`Enter`||e.type==`keydown`&&e.code==`Space`)&&(e.preventDefault(),window.IS_STORYBOOK||this.dispatchEvent(new CustomEvent(`fxview-tab-list-primary-action`,{bubbles:!0,composed:!0,detail:{originalEvent:e,item:this}})))}secondaryActionHandler(e){(e.type==`click`&&e.detail&&!e.altKey||e.type==`click`&&!e.detail)&&(e.preventDefault(),this.dispatchEvent(new CustomEvent(`fxview-tab-list-secondary-action`,{bubbles:!0,composed:!0,detail:{originalEvent:e,item:this}})))}tertiaryActionHandler(e){(e.type==`click`&&e.detail&&!e.altKey||e.type==`click`&&!e.detail)&&(e.preventDefault(),this.dispatchEvent(new CustomEvent(`fxview-tab-list-tertiary-action`,{bubbles:!0,composed:!0,detail:{originalEvent:e,item:this}})))}auxActionHandler(e){e.type==`auxclick`&&e.button==1&&(e.preventDefault(),window.IS_STORYBOOK||this.dispatchEvent(new CustomEvent(`fxview-tab-list-middleclick-action`,{bubbles:!0,composed:!0,detail:{originalEvent:e,item:this}})))}highlightSearchMatches(e,t){let n=[],r=RegExp(h(e),`dgi`),i=0,a;for(;(a=r.exec(t))!==null;){let[e,s]=a.indices[0];n.push(t.substring(i,e)),n.push(o`<strong>${t.substring(e,s)}</strong>`),i=r.lastIndex}return n.push(t.substring(i)),n}stylesheets(){return o`<link
      rel="stylesheet"
      href="${p}"
    />`}faviconTemplate(){return o`<span
      class="fxview-tab-row-favicon icon"
      id="fxview-tab-row-favicon"
      style=${n({backgroundImage:`url(${this.getImageUrl(this.favicon,this.url)})`})}
    ></span>`}titleTemplate(){let e=this.title;return o`<span
      class="fxview-tab-row-title text-truncated-ellipsis"
      id="fxview-tab-row-title"
      dir="auto"
    >
      ${t(this.searchQuery,()=>this.highlightSearchMatches(this.searchQuery,e),()=>e)}
    </span>`}urlTemplate(){return o`<span
      class="fxview-tab-row-url text-truncated-ellipsis"
      id="fxview-tab-row-url"
    >
      ${t(this.searchQuery,()=>this.highlightSearchMatches(this.searchQuery,this.formatURIForDisplay(this.url)),()=>this.formatURIForDisplay(this.url))}
    </span>`}dateTemplate(){let e=this.relativeTime(this.time,this.dateTimeFormat,window.IS_STORYBOOK?y:this.timeMsPref),t=this.dateFluentId(this.time,this.dateTimeFormat,window.IS_STORYBOOK?y:this.timeMsPref),n=this.dateFluentArgs(this.time,this.dateTimeFormat);return o`<span class="fxview-tab-row-date" id="fxview-tab-row-date">
      <span
        ?hidden=${e||!t}
        data-l10n-id=${r(t)}
        data-l10n-args=${r(n)}
      ></span>
      <span ?hidden=${!e}>${e}</span>
    </span>`}timeTemplate(){let e=this.timeFluentId(this.dateTimeFormat),t=this.time,n=JSON.stringify({time:t});return o`<span
      class="fxview-tab-row-time"
      id="fxview-tab-row-time"
      ?hidden=${!e}
      data-timestamp=${r(this.time)}
      data-l10n-id=${r(e)}
      data-l10n-args=${r(n)}
    >
    </span>`}getIconSrc(e){let t;switch(e){case`delete-button`:t=`chrome://global/skin/icons/delete.svg`;break;case`dismiss-button`:t=`resource://content-accessible/close-12.svg`;break;case`options-button`:t=`chrome://global/skin/icons/more.svg`;break;default:t=null}return t}secondaryButtonTemplate(){return o`${t(this.secondaryL10nId&&this.secondaryActionHandler,()=>o`<moz-button
          type="icon ghost"
          class=${a({"fxview-tab-row-button":!0,[this.secondaryActionClass]:this.secondaryActionClass})}
          id="fxview-tab-row-secondary-button"
          data-l10n-id=${this.secondaryL10nId}
          data-l10n-args=${r(this.secondaryL10nArgs)}
          aria-haspopup=${r(this.hasPopup)}
          @click=${this.secondaryActionHandler}
          tabindex=${this.active&&this.currentActiveElementId===`fxview-tab-row-secondary-button`?`0`:`-1`}
          iconSrc=${this.getIconSrc(this.secondaryActionClass)}
        ></moz-button>`)}`}tertiaryButtonTemplate(){return o`${t(this.tertiaryL10nId&&this.tertiaryActionHandler,()=>o`<moz-button
          type="icon ghost"
          class=${a({"fxview-tab-row-button":!0,[this.tertiaryActionClass]:this.tertiaryActionClass})}
          id="fxview-tab-row-tertiary-button"
          data-l10n-id=${this.tertiaryL10nId}
          data-l10n-args=${r(this.tertiaryL10nArgs)}
          aria-haspopup=${r(this.hasPopup)}
          @click=${this.tertiaryActionHandler}
          tabindex=${this.active&&this.currentActiveElementId===`fxview-tab-row-tertiary-button`?`0`:`-1`}
          iconSrc=${this.getIconSrc(this.tertiaryActionClass)}
        ></moz-button>`)}`}},T=class extends w{render(){return o`
      ${this.stylesheets()}
      <a
        href=${r(this.url)}
        class="fxview-tab-row-main"
        id="fxview-tab-row-main"
        tabindex=${this.active&&this.currentActiveElementId===`fxview-tab-row-main`?`0`:`-1`}
        data-l10n-id=${r(this.primaryL10nId)}
        data-l10n-args=${r(this.primaryL10nArgs)}
        @click=${this.primaryActionHandler}
        @keydown=${this.primaryActionHandler}
        title=${this.primaryL10nId?null:this.url}
      >
        ${this.faviconTemplate()} ${this.titleTemplate()}
        ${t(!this.compact,()=>o`${this.urlTemplate()} ${this.dateTemplate()}
            ${this.timeTemplate()}`)}
      </a>
      ${this.secondaryButtonTemplate()} ${this.tertiaryButtonTemplate()}
    `}},customElements.define(`fxview-tab-row`,T),E=class extends l{static properties={items:{type:Array},template:{type:Function},activeIndex:{type:Number},itemOffset:{type:Number},maxRenderCountEstimate:{type:Number,state:!0},itemHeightEstimate:{type:Number,state:!0},isAlwaysVisible:{type:Boolean},isVisible:{type:Boolean,state:!0},isSubList:{type:Boolean},pinnedTabsIndexOffset:{type:Number},getItemHeight:{type:Function}};createRenderRoot(){return this}constructor(){super(),this.activeIndex=0,this.itemOffset=0,this.pinnedTabsIndexOffset=0,this.items=[],this.subListItems=[],this.itemHeightEstimate=b,this.maxRenderCountEstimate=this.itemHeightEstimate>0?Math.max(40,2*Math.ceil(window.innerHeight/this.itemHeightEstimate)):0,this.isSubList=!1,this.isVisible=!1,this.getItemHeight=null,this.intersectionObserver=new IntersectionObserver(([e])=>{e.isIntersecting&&(this.isVisible=!0)},{root:this.ownerDocument}),this.selfResizeObserver=new ResizeObserver(()=>{this.triggerIntersectionObserver(),this.isSubList||requestAnimationFrame(()=>this.#e())}),this.childResizeObserver=new ResizeObserver(([e])=>{let t=this.children.length;e.contentRect?.height>0&&t>0&&!this.getItemHeight&&(this.parentElement.itemHeightEstimate=e.contentRect.height/t)})}connectedCallback(){super.connectedCallback(),this.isSubList||(this._scrollHandler=()=>this.#e(),document.addEventListener(`scroll`,this._scrollHandler,{capture:!0,passive:!0}))}disconnectedCallback(){super.disconnectedCallback(),this.intersectionObserver.disconnect(),this.childResizeObserver.disconnect(),this.selfResizeObserver.disconnect(),this._scrollHandler&&=(document.removeEventListener(`scroll`,this._scrollHandler,{capture:!0}),null)}#e(){let e=window.innerHeight;for(let t of this.children){if(!t.isSubList||t.isAlwaysVisible)continue;let{top:n,bottom:r}=t.getBoundingClientRect(),i=r>-e&&n<window.innerHeight+e;i!==t.isVisible&&(t.isVisible=i)}}triggerIntersectionObserver(){this.intersectionObserver.unobserve(this),this.intersectionObserver.observe(this)}getSubListForItem(e){if(this.isSubList)throw Error(`Cannot get sublist for item`);return this.children[parseInt(e/this.maxRenderCountEstimate,10)]}getItem(e){return this.isSubList?this.children[e]:this.getSubListForItem(e)?.getItem(e%this.maxRenderCountEstimate)}willUpdate(e){if(this.isSubList&&e.has(`isVisible`)&&e.get(`isVisible`)===!0&&!this.isVisible){let e=this.scrollHeight;e>0&&(this._knownHeight=e)}if(this.isSubList&&(e.has(`items`)||e.has(`getItemHeight`))&&(this._knownHeight=null),e.has(`items`)&&!this.isSubList){this.subListItems=[];for(let e=0;e<this.items.length;e+=this.maxRenderCountEstimate)this.subListItems.push(this.items.slice(e,e+this.maxRenderCountEstimate))}}recalculateAfterWindowResize(){this.maxRenderCountEstimate=this.itemHeightEstimate>0?Math.max(40,2*Math.ceil(window.innerHeight/this.itemHeightEstimate)):0}firstUpdated(){this.intersectionObserver.observe(this),this.selfResizeObserver.observe(this),this.isSubList?this.childResizeObserver.observe(this):requestAnimationFrame(()=>this.#e())}updated(e){this.updateListHeight(e),e.has(`items`)&&!this.isSubList&&(this.triggerIntersectionObserver(),requestAnimationFrame(()=>this.#e()))}updateListHeight(e){(e.has(`isAlwaysVisible`)||e.has(`isVisible`)||e.has(`itemHeightEstimate`)||e.has(`getItemHeight`)||e.has(`items`))&&(this.style.height=this.isAlwaysVisible||this.isVisible?`auto`:`${this._knownHeight??this.#t()}px`)}#t(){return this.getItemHeight?this.items.reduce((e,t)=>e+this.getItemHeight(t,this.itemHeightEstimate),0):this.items.length*this.itemHeightEstimate}get renderItems(){return this.isSubList?this.items:this.subListItems}subListTemplate=(e,t)=>o`<virtual-list
      .template=${this.template}
      .items=${e}
      .itemHeightEstimate=${this.itemHeightEstimate}
      .getItemHeight=${this.getItemHeight}
      .itemOffset=${t*this.maxRenderCountEstimate+this.pinnedTabsIndexOffset}
      .isAlwaysVisible=${t==parseInt(this.activeIndex/this.maxRenderCountEstimate,10)}
      isSubList
    ></virtual-list>`;itemTemplate=(e,t)=>this.template(e,this.itemOffset+t+this.pinnedTabsIndexOffset);render(){return this.isAlwaysVisible||this.isVisible?o`
        ${s(this.renderItems,(e,t)=>t,this.isSubList?this.itemTemplate:this.subListTemplate)}
      `:``}},customElements.define(`virtual-list`,E)})))()}var O,k,A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{i(),D(),O={relative:`relative`,dateTime:`dateTime`,date:`date`,time:`time`},k={title:`Domain-specific UI Widgets/Firefox View/Tab List`,component:`fxview-tab-list`,argTypes:{dateTimeFormat:{options:Object.keys(O),mapping:O,control:{type:`select`}}}},A=({listClass:e,dateTimeFormat:t,hasPopup:n,maxTabsLength:r,primaryAction:i,secondaryAction:a,secondaryActionClass:s,tabItems:c})=>o`
  <style>
    main {
      max-width: 750px;
    }
    fxview-tab-list.menu::part(secondary-button) {
      background-image: url("chrome://global/skin/icons/more.svg");
    }
    fxview-tab-list.dismiss::part(secondary-button) {
      background-image: url("chrome://global/skin/icons/close.svg");
    }
    :host panel-item::part(button) {
      padding-inline-start: 12px;
      cursor: pointer;
    }
  </style>
  <main>
    <fxview-tab-list
      class=${e}
      .hasPopup=${n}
      .dateTimeFormat=${t}
      .maxTabsLength=${r}
      .tabItems=${c}
      .updatesPaused=${!1}
      .secondaryActionClass=${s}
      @fxview-tab-list-secondary-action=${a}
      @fxview-tab-list-primary-action=${i}
    >
      <panel-list slot="menu">
        <panel-item data-l10n-id="fxviewtabrow-delete"></panel-item>
        <panel-item
          data-l10n-id="fxviewtabrow-forget-about-this-site"
        ></panel-item>
        <hr />
        <panel-item data-l10n-id="fxviewtabrow-open-in-window"></panel-item>
        <panel-item
          data-l10n-id="fxviewtabrow-open-in-private-window"
        ></panel-item>
        <hr />
        <panel-item data-l10n-id="fxviewtabrow-add-bookmark"></panel-item>
        <panel-item data-l10n-id="fxviewtabrow-save-to-pocket"></panel-item>
        <panel-item data-l10n-id="fxviewtabrow-copy-link"></panel-item>
      </panel-list>
    </fxview-tab-list>
  </main>
`,j=25,M=e=>{e.target.querySelector(`panel-list`).toggle(e.detail.originalEvent)},N=()=>{},P=[{icon:`chrome://global/skin/icons/defaultFavicon.svg`,title:`Example Domain`,url:`example.net`,time:1678141738136,primaryL10nId:`fxviewtabrow-tabs-list-tab`,primaryL10nArgs:JSON.stringify({targetURI:`example.net`}),secondaryL10nId:`fxviewtabrow-options-menu-button`,secondaryL10nArgs:JSON.stringify({tabTitle:`Example Domain`})},{icon:`chrome://global/skin/icons/defaultFavicon.svg`,title:`Example Domain`,url:`example.org`,time:1678141738136,primaryL10nId:`fxviewtabrow-tabs-list-tab`,primaryL10nArgs:JSON.stringify({targetURI:`example.org`}),secondaryL10nId:`fxviewtabrow-options-menu-button`,secondaryL10nArgs:JSON.stringify({tabTitle:`Example Domain`})},{icon:`chrome://global/skin/icons/defaultFavicon.svg`,title:`Example Domain`,url:`example.com`,time:1678141738136,primaryL10nId:`fxviewtabrow-tabs-list-tab`,primaryL10nArgs:JSON.stringify({targetURI:`example.com`}),secondaryL10nId:`fxviewtabrow-options-menu-button`,secondaryL10nArgs:JSON.stringify({tabTitle:`Example Domain`})}],F=[{icon:`chrome://global/skin/icons/defaultFavicon.svg`,title:`Example Domain`,url:`example.net`,tabid:1,time:1678141738136,primaryL10nId:`fxviewtabrow-tabs-list-tab`,primaryL10nArgs:JSON.stringify({targetURI:`example.net`}),secondaryL10nId:`fxviewtabrow-dismiss-tab-button`,secondaryL10nArgs:JSON.stringify({tabTitle:`Example Domain`})},{icon:`chrome://global/skin/icons/defaultFavicon.svg`,title:`Example Domain`,url:`example.org`,tabid:2,time:1678141738136,primaryL10nId:`fxviewtabrow-tabs-list-tab`,primaryL10nArgs:JSON.stringify({targetURI:`example.net`}),secondaryL10nId:`fxviewtabrow-dismiss-tab-button`,secondaryL10nArgs:JSON.stringify({tabTitle:`Example Domain`})},{icon:`chrome://global/skin/icons/defaultFavicon.svg`,title:`Example Domain`,url:`example.com`,tabid:3,time:1678141738136,primaryL10nId:`fxviewtabrow-tabs-list-tab`,primaryL10nArgs:JSON.stringify({targetURI:`example.net`}),secondaryL10nId:`fxviewtabrow-dismiss-tab-button`,secondaryL10nArgs:JSON.stringify({tabTitle:`Example Domain`})}],I=A.bind({}),I.args={listClass:`menu`,dateTimeFormat:`relative`,hasPopup:`menu`,maxTabsLength:j,primaryAction:N,secondaryAction:M,secondaryActionClass:`options-button`,tabItems:P},L=A.bind({}),L.args={listClass:`menu`,dateTimeFormat:`dateTime`,maxTabsLength:j,primaryAction:N,secondaryAction:M,secondaryActionClass:`options-button`,tabItems:P},R=A.bind({}),R.args={listClass:`menu`,dateTimeFormat:`date`,hasPopup:`menu`,maxTabsLength:j,primaryAction:N,secondaryAction:M,secondaryActionClass:`options-button`,tabItems:P},z=A.bind({}),z.args={listClass:`menu`,dateTimeFormat:`time`,hasPopup:`menu`,maxTabsLength:j,primaryAction:N,secondaryAction:M,secondaryActionClass:`options-button`,tabItems:P},B=A.bind({}),B.args={listClass:`dismiss`,dateTimeFormat:`relative`,hasPopup:null,maxTabsLength:j,primaryAction:N,secondaryAction:()=>{},secondaryActionClass:`dismiss-button`,tabItems:F}})))()}V();export{L as DateAndTime,R as DateOnly,B as RecentlyClosed,I as RelativeTime,z as TimeOnly,k as default};