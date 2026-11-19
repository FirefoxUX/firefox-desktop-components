import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{_ as t,f as n,u as r}from"./lit.all-Co4HOUmF.js";import{c as i,o as a}from"./iframe-CEh6YfCk.js";import{a as o,r as s}from"./SmartbarMentionUtils-DcwxvvMB.js";import{t as c}from"./ai-chat-card-CfXBMuIO.js";import{h as l,o as u}from"./prosemirror.bundle-R_a7u_Ra.js";import{t as d}from"./ai-chat-grid-DMLW40C4.js";var f;function p(){return(p=e((()=>{f=new URL(`ai-chat-message-LDYHEriQ.css`,import.meta.url).href+``})))()}function m(e){return!!e?.attrGet(`href`)?.trim()}function h(e){return v.render(e)}function g(e){let t={},n=v.parse(e,t),r=[],i=0;for(;i<n.length;){let e=i+1;if(n[i].nesting===1){let t=1;for(;e<n.length&&t>0;)t+=n[e].nesting,e++}r.push({html:v.renderer.render(n.slice(i,e),v.options,t)}),i=e}return r}var _,v;function y(){return(y=e((()=>{l(),_={table:{element:`ai-chat-table`,attributes:[`message-id`,`data-line-range`]}},v=u(`default`,{html:!1});for(let[e,{element:t}]of Object.entries(_))v.renderer.rules[`${e}_open`]=(n,r,i,a,o)=>{let s=new Map;if(e===`table`){let{map:e}=n[r];e&&s.set(`data-line-range`,JSON.stringify(e))}let c=[...s].map(([e,t])=>`${e}="${v.utils.escapeHtml(t)}"`).join(` `);return`<${t}${c?` ${c}`:``}>${o.renderToken(n,r,i)}`},v.renderer.rules[`${e}_close`]=(e,n,r,i,a)=>`${a.renderToken(e,n,r)}</${t}>`;v.renderer.rules.link_open=(e,t,n,r,i)=>m(e[t])?i.renderToken(e,t,n):``,v.renderer.rules.link_close=(e,t,n,r,i)=>{let a=null;for(let n=t-1;n>=0;n--)if(e[n].type===`link_open`){a=e[n];break}return a&&!m(a)?``:i.renderToken(e,t,n)}})))()}function b(e){return typeof e==`string`?e:``}function x(e){return typeof e==`string`?{name:``,message:e,filename:``,lineno:0}:!e||typeof e!=`object`?{name:``,message:``,filename:``,lineno:0}:{name:b(e.name),message:b(e.message),filename:b(e.fileName),lineno:Number.isFinite(e.lineNumber)?e.lineNumber:0}}function S(e){return e&&typeof e.stack==`string`&&e.stack.includes(`lit.all.mjs`)?`lit-render`:`uncaught`}function C(e,t){let n=e=>{try{t(e,S(e))}catch(e){console.warn(`Could not report Smart Window client error:`,e)}},r=e=>{n(e.error??{name:`Error`,message:e.message??``,fileName:e.filename??``,lineNumber:e.lineno??0})},i=e=>n(e.reason);return e.addEventListener(`error`,r),e.addEventListener(`unhandledrejection`,i),()=>{e.removeEventListener(`error`,r),e.removeEventListener(`unhandledrejection`,i)}}function w(e,t,n=``){return{source:t,messageKey:n,...x(e)}}function T(e,t,n){if(t&&typeof t==`object`){if(D.has(t))return;D.add(t)}e.dispatchEvent(new CustomEvent(E,{bubbles:!0,composed:!0,detail:w(t,n)}))}var E,D;function O(){return(O=e((()=>{E=`AIChatContent:ClientError`,D=new WeakSet})))()}function k(e){return e?.protocol===`about:`&&(e.pathname===`preferences`||e.pathname===`settings`)}function A(e){if(e?.protocol!==`about:`||e.pathname!==`smartpage`)return null;let t=e.searchParams.get(`page`);return t&&M.test(t)?t:null}function j(e){return!!A(e)}var M;function N(){return(N=e((()=>{M=/^[\w-]+(\.html)?$/})))()}var P;function F(){return(F=e((()=>{P=new URL(`ai-chat-table-YG3X-o-7.css`,import.meta.url).href+``})))()}var I;function L(){return(L=e((()=>{F(),n(),i(),I=class extends a{static properties={lineRange:{type:Array,attribute:`data-line-range`},isOverflowing:{type:Boolean,state:!0}};#e=null;#t=null;#n=null;constructor(){super(),this.isOverflowing=!1}firstUpdated(){this.#e=this.renderRoot.querySelector(`.table-scroll-container`),this.#t=new ResizeObserver(()=>this.#a()),this.#t.observe(this.#e),this.#r(),this.#a()}disconnectedCallback(){super.disconnectedCallback(),this.#t?.disconnect(),this.#t=null,this.#e=null,this.#n=null}#r(){let e=this.querySelector(`table`);e!==this.#n&&(this.#n&&this.#t?.unobserve(this.#n),this.#n=e,e&&this.#t?.observe(e))}#i(){this.#r(),this.#a()}#a(){let e=this.#e;e&&(this.isOverflowing=e.scrollWidth-e.clientWidth>1)}get#o(){return this.getRootNode()?.host?.dataset.messageId??null}#s(){this.dispatchEvent(new CustomEvent(`copy-table`,{bubbles:!0,composed:!0,detail:{messageId:this.#o,lineRange:this.lineRange}}))}render(){return r`
      <link
        rel="stylesheet"
        href="${P}"
      />
      <div class="table-wrapper">
        ${this.#o&&this.lineRange?r`<moz-button
              data-l10n-id="aiwindow-copy-table"
              data-l10n-attrs="tooltiptext,aria-label"
              class="table-copy-button"
              type="ghost"
              size="small"
              iconsrc="chrome://global/skin/icons/edit-copy.svg"
              @click=${this.#s}
            ></moz-button>`:t}
        <div class="table-scroll-container">
          <slot @slotchange=${this.#i}></slot>
        </div>
        ${this.isOverflowing?r`<div class="table-scroll-indicator">
              <span
                class="table-scroll-indicator-label"
                data-l10n-id="aiwindow-table-scroll-indicator"
              ></span>
            </div>`:t}
      </div>
    `}},customElements.define(`ai-chat-table`,I)})))()}var R,z,B;function V(){return(V=e((()=>{p(),n(),i(),y(),O(),N(),s(),c(),d(),L(),R=.4,z=12,B=class e extends a{#e=null;#t=null;#n=[];#r=null;#i=!0;#a=new Set;#o=new Map;static properties={role:{type:String,reflect:!0,attribute:`data-message-role`},message:{type:String},messageL10n:{type:Object,attribute:!1},messageId:{type:String,reflect:!0,attribute:`data-message-id`},complete:{type:Boolean,reflect:!0},seenUrls:{type:Object,attribute:!1},historyResults:{type:Object,attribute:!1},conversationId:{type:String}};constructor(){super(),this.seenUrls=new Set,this.historyResults=new Map,this.conversationId=``}connectedCallback(){super.connectedCallback(),this.#s()}#s(){this.shadowRoot.addEventListener(`click`,e=>{let t=e.target;for(;t&&t!==this.shadowRoot;){if(t.tagName===`A`&&t.href){e.preventDefault(),this.dispatchEvent(new CustomEvent(`AIChatContent:OpenLink`,{bubbles:!0,composed:!0,detail:{url:t.href,shiftKey:e.shiftKey,metaKey:e.metaKey,ctrlKey:e.ctrlKey,altKey:e.altKey,button:e.button}}));return}t=t.parentElement}})}willUpdate(e){e.has(`seenUrls`)&&this.#a.intersection(this.seenUrls).size&&(this.#i=!0),e.has(`conversationId`)&&(this.#i=!0),(e.has(`complete`)||e.has(`historyResults`))&&(this.#i=!0)}#c(e){(e.has(`message`)||e.has(`messageId`))&&this.role===`assistant`&&this.messageId&&this.#r!==this.messageId&&this.message?.trim()&&this.#t?.innerText.trim()&&(this.#r=this.messageId,this.dispatchEvent(new CustomEvent(`AIChatContent:FirstCharacterDisplayed`,{bubbles:!0,composed:!0,detail:{conversationId:this.conversationId,messageId:this.messageId}})))}updated(e){if(this.#c(e),e.has(`complete`)&&this.complete&&this.role===`assistant`){let e=this.shadowRoot?.querySelector(`.message-${this.role}`),t=e?(e.innerText||e.textContent||``).replace(/\s+/g,` `).trim():``;this.dispatchEvent(new CustomEvent(`ai-chat-message:complete`,{bubbles:!0,composed:!0,detail:{messageId:this.messageId,text:t}}))}}#l=e=>e?`page-icon:${e}`:`chrome://global/skin/icons/defaultFavicon.svg`;#u(e){let t=`mention:?`,n=e.querySelectorAll(`a[href^="${t}"]`);for(let r of n){let{href:n}=r;if(!n.startsWith(t))continue;let i=new URLSearchParams(n.substring(9)),a=i.get(`href`)||``;if(!a||a.length>2048)continue;let s=r.textContent||a,c=e.ownerDocument.createElement(`smartwindow-chip`);c.type=`in-line`,c.label=s;let l=i.get(`color`);(i.get(`type`)?i.get(`type`)==`tabGroup`:l)?(c.isTabGroup=!0,c.tabGroupColor=l??``,c.tabGroupId=o(a)??``):(c.iconSrc=this.#l(a),c.href=a),r.replaceWith(c)}}#d(e){this.#a=new Set;for(let t of e.querySelectorAll(`a[href]`)){let e=URL.parse(t.href);if(!(k(e)||j(e)&&this.seenUrls.has(t.href))){if(!e||e.protocol!==`http:`&&e.protocol!==`https:`)t.removeAttribute(`href`);else if(!this.seenUrls.has(t.href)){this.#a.add(t.href);let{textContent:e,href:n}=t;if(URL.parse(e.trim()))continue;let r=t.ownerDocument,i=r.createElement(`span`);i.className=`untrusted-link-label`,i.textContent=e;let a=r.createElement(`a`);a.href=n,a.textContent=n;let o=r.createElement(`span`);o.append(` (`,a,`)`),t.replaceWith(i,o)}}}}#f(e){let t=e.querySelector(`a[href]`);return!!(t&&this.historyResults.has(t.href))}#p(e){if(!this.historyResults?.size)return;let t=e.querySelectorAll(`li`),n=this.complete?null:t[t.length-1]??null;Array.from(e.querySelectorAll(`ul, ol`)).forEach((e,t)=>{let r=Array.from(e.querySelectorAll(`:scope > li`));if(r.length){if(this.complete){if(r.every(e=>this.#f(e))){let n=r.map(e=>this.historyResults.get(e.querySelector(`a[href]`).href));e.replaceWith(this.#m(n,t))}else e.style.display=`revert`}else r.some(e=>e!==n&&!this.#f(e))&&(e.style.display=`revert`)}})}#m(e,t){let n=Array.from(e||[]).slice(0,z),r=this.#g(n),i=n.some(e=>e.thumbnail&&e.image===void 0);if(this.#o.has(t)){let e=this.#o.get(t);return e.view=r,e.loading=i,e.items=n,e}n.forEach((e,t)=>{e.resultIndex=t,e.resultCount=n.length});let a=this.ownerDocument.createElement(`ai-chat-grid`);return a.loading=i,a.view=r,a.items=n,a.showSwitch=!0,a.gridItem=this.#_.bind(this),a.rowItem=this.#v.bind(this),this.#o.set(t,a),this.#h(n),this.dispatchEvent(new CustomEvent(`AIChatContent:HistoryGridRender`,{bubbles:!0,composed:!0,detail:{itemCount:n.length}})),a}#h(e){let t=e.filter(e=>e?.url).map(({url:e,thumbnail:t})=>({url:e,thumbnail:t}));t.length&&this.dispatchEvent(new CustomEvent(`AIChatContent:RequestAssets`,{bubbles:!0,composed:!0,detail:{conversationId:this.conversationId,messageId:this.messageId,items:t}}))}#g(e){let t=0;e.forEach(e=>{e.image||t++,e.faviconUrl=this.#y(e.url)});let n=`grid`;return t/e.length>R&&(n=`list`),n}#_(e){return e?r`
      <ai-chat-card
        title=${e.title}
        url=${e.url}
        favicon=${e.hasFavicon?e.faviconUrl:null}
        timestamp=${e.timestamp}
        thumbnail=${e.image}
        @click=${this.itemClick.bind(this,e)}
      >
      </ai-chat-card>
    `:t}#v(e){if(!e)return t;let n=this.#y(e.url);return r`
      <a
        part="row"
        class="history-thumbnail-row"
        href=${e.url}
        target="_blank"
        @click=${this.itemClick.bind(this,e)}
      >
        <img part="favicon" src=${n} />
        <span part="title" class="history-thumbnail-title">${e.title}</span>
        <span part="timestamp">${e.timestamp}</span>
      </a>
    `}itemClick(e){this.dispatchEvent(new CustomEvent(`AIChatContent:HistoryGridItemClick`,{bubbles:!0,composed:!0,detail:{item:e}}))}#y(e){return`page-icon:${e}`}static#b;static{this.#b=new Sanitizer;for(let{element:e,attributes:t}of Object.values(_)){this.#b.allowElement(e);for(let n of t)this.#b.allowAttribute({name:n,elements:[e]})}}#x(t,n){try{n.setHTML(h(t),{sanitizer:e.#b})}catch(e){throw T(this,e,`markdown`),e}}parseUserMarkdown(e,t){this.#x(e,t),this.#u(t)}#S(t){let n=this.ownerDocument.createElement(`div`);try{n.setHTML(t,{sanitizer:e.#b})}catch(e){throw T(this,e,`markdown`),e}return n.firstElementChild}#C(e,t){let n=this.#n,r=0;for(let i=0;i<t.length;i++){if(e.children[i]&&n[i]===t[i])continue;let a=this.#S(t[i]);a&&(r++,e.children[i]?e.replaceChild(a,e.children[i]):e.append(a))}for(;e.children.length>t.length;)e.lastElementChild.remove();return this.#n=t,r}getAssistantMessage(){if(this.messageL10n?.id)return this.#w();this.#t||(this.#t=this.ownerDocument.createElement(`div`),this.#t.className=`message-`+this.role);let e=this.#t;if(this.message==this.#e&&!this.#i)return this.#t;if(!this.message)return e.replaceChildren(),e.classList.remove(`with-history`),this.#n=[],this.#e=this.message,e;this.#i&&(this.#n=[]);let t=performance.now(),n=g(this.message).map(e=>e.html),r=this.#C(e,n);return this.historyResults?.size?e.classList.add(`with-history`):e.classList.remove(`with-history`),this.#p(e),this.#d(e),performance.measure(`SmartWindow chat render`,{start:t,detail:{rebuilt:r,total:n.length}}),this.#e=this.message,this.#i=!1,e}getUserMessage(){let e=this.ownerDocument.createElement(`div`);return e.className=`message-`+this.role,this.message&&this.parseUserMarkdown(this.message,e),e}#w(){let{id:e,args:n,link:i}=this.messageL10n;return r`<div class="message-assistant">
      <span
        data-l10n-id=${e}
        data-l10n-args=${n?JSON.stringify(n):t}
      >
        ${i?r`<a data-l10n-name=${i.l10nName} href=${i.href}></a>`:t}
      </span>
    </div>`}get localizedText(){return this.messageL10n?.id?this.shadowRoot?.querySelector(`.message-assistant [data-l10n-id]`)?.innerText??``:``}render(){return r`
      <link
        rel="stylesheet"
        href="${f}"
      />

      <article>
        ${this.role===`user`?this.getUserMessage():this.getAssistantMessage()}
      </article>
    `}},customElements.define(`ai-chat-message`,B)})))()}export{C as i,T as n,O as r,V as t};