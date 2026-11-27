import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,u as n}from"./lit.all-Co4HOUmF.js";import{a as r,i,n as a,r as o,t as s}from"./setting-control-COcPHcCO.js";import{n as c,t as l}from"./SettingGroupManager-CSuCVgEm.js";var u,d,f,p,m;function h(){return(h=e((()=>{t(),i(),a(),c(),u=new Set([`moz-box-button`,`moz-box-item`,`moz-box-link`,`moz-button`,`moz-box-group`,`moz-message-bar`,`a`]),d=new Set([`moz-message-bar`]),f=new Set([`moz-box-group`]),p=Object.freeze({Self:`data-hidden-by-setting-group`,Search:`data-hidden-from-search`}),m=class extends o{static properties={config:{type:Object},groupId:{type:String},getSetting:{type:Function},srdEnabled:{type:Boolean},inSubPane:{type:Boolean}};static queries={allControlEls:{all:`setting-control`},fieldsetEl:`moz-fieldset`};get childControlEls(){return this.config?[...this.fieldsetEl.children].filter(e=>e instanceof s):[]}constructor(){super(),this.getSetting=void 0,this.config=void 0,this.srdEnabled=!1,this.inSubPane=!1}createRenderRoot(){return this}#e=null;connectedCallback(){super.connectedCallback(),this.#e=l.onRegister(e=>{e===this.groupId&&!this.config&&window.initSettingGroup(e)})}disconnectedCallback(){super.disconnectedCallback(),this.#e?.(),this.#e=null}willUpdate(){this.srdEnabled||this.classList.toggle(`subcategory`,this.config?.headingLevel==1),this.config?.hiddenFromSearch!==void 0&&(this.config.hiddenFromSearch?this.setAttribute(p.Search,`true`):this.removeAttribute(p.Search)),this.config?.hidden!==void 0&&this.toggleAttribute(p.Self,this.config.hidden),this.config?.subcategory&&this.setAttribute(`data-subcategory`,this.config.subcategory)}async handleVisibilityChange(){if(await this.updateComplete,this.config?.hidden)return;let e=!!this.childControlEls?.length&&this.childControlEls?.some(e=>!e.hidden),t=this.closest(`groupbox`);e?(this.hasAttribute(p.Self)&&(this.removeAttribute(p.Self),this.removeAttribute(p.Search)),t&&t.hasAttribute(p.Self)&&(t.removeAttribute(p.Search),t.removeAttribute(p.Self))):(this.setAttribute(p.Self,``),this.setAttribute(p.Search,`true`),t&&!t.hasAttribute(p.Search)&&(t.setAttribute(p.Search,`true`),t.setAttribute(p.Self,``)))}async getUpdateComplete(){let e=await super.getUpdateComplete();return await Promise.all([...this.allControlEls].map(e=>e.updateComplete)),e}onChange(e){let t=e.target;t.control?.onChange(t)}onClick(e){let t=e.target;u.has(t.localName)&&t.control?.onClick(e)}onMessageBarDismiss(e){let t=e.target;d.has(t.localName)&&t.control?.onMessageBarDismiss(e)}onReorder(e){let t=e.target;f.has(t.localName)&&t.control?.onReorder(e)}itemTemplate(e){let t=this.getSetting(e.id);return n`<setting-control
      .setting=${t}
      .config=${e}
      .getSetting=${this.getSetting}
    ></setting-control>`}containerTemplate(e){return(this.srdEnabled||this.inSubPane||this.config.card==`always`)&&this.config.card!=`never`?n`<moz-card role="presentation">${e}</moz-card>`:e}render(){if(!this.config)return``;let e={...this.config};return this.srdEnabled&&(e.headingLevel??=2),this.containerTemplate(n`<moz-fieldset
        @change=${this.onChange}
        @toggle=${this.onChange}
        @click=${this.onClick}
        @message-bar:user-dismissed=${this.onMessageBarDismiss}
        @reorder=${this.onReorder}
        @visibility-change=${this.handleVisibilityChange}
        ${r(this.getCommonPropertyMapping(e))}
        >${this.config.items.map(e=>this.itemTemplate(e))}</moz-fieldset
      >`)}},customElements.define(`setting-group`,m)})))()}function g(){return{value:!0,on(){},off(){},userChange(){},visible:()=>!0,getControlConfig:e=>e,controllingExtensionInfo:{}}}var _,v,y,b,x,S;function C(){return(C=e((()=>{t(),h(),_={title:`Domain-specific UI Widgets/Settings/Setting Group`,component:`setting-group`,parameters:{status:`in-development`,handles:[`click`,`input`,`change`],fluent:`
group-example-label =
  .label = Complicated grouping
  .description = This group is showing that there can be a complicated config, not necessarily that this level of nesting should be used.
checkbox-example-input =
  .label = Checkbox example of setting-control
  .description = Could have a description like moz-checkbox.
checkbox-example-input2 =
  .label = Another checkbox
browser-layout-label =
  .label = Browser layout
browser-layout-radio-horizontal =
  .label = Horizontal tabs
  .description = Displayed at the top of the browser
browser-layout-radio-vertical =
  .label = Vertical tabs
  .description = Displayed on the side, in the sidebar
browser-layout-sidebar =
  .label = Show sidebar
  .description = Quickly access bookmarks, tabs from your phone, AI chatbots, and more without leaving your main view
cookies-and-site-data =
  .label = Cookies and Site Data
  .description = Manage and delete cookies, history, cache, and site settings.
clear-browsing-data =
    .label = Clear browsing data
storage-usage =
  .label = Your stored cookies, site data, and cache are currently using { $value } { $unit } of disk space.
manage-browsing-data =
  .label = Manage browsing data
manage-exceptions =
  .label = Manage exceptions
  .description = You can specify which websites are always or never allowed to use cookies and site data.
radio-example-input =
  .label = This is a radio group
  .description = With a lovely description.
radio-one =
  .label = One
  .description = This is the first option.
radio-two =
  .label = Two
radio-three =
  .label = Three
`}},v=({config:e})=>n`
  <setting-group .config=${e} .getSetting=${g}></setting-group>
`,y={id:`data-usage-group`,control:`moz-box-group`,items:[{id:`data-usage`,l10nId:`storage-usage`,control:`moz-box-item`,controlAttrs:{"data-l10n-args":JSON.stringify({value:1.8,unit:`GB`})}},{id:`manage-browsing-data`,l10nId:`manage-browsing-data`,control:`moz-box-button`},{id:`manage-exceptions`,l10nId:`manage-exceptions`,control:`moz-box-button`}]},b=v.bind({}),b.args={config:{id:`group-example`,l10nId:`group-example-label`,items:[{id:`checkbox-example`,l10nId:`checkbox-example-input`},{id:`checkbox-example2`,l10nId:`checkbox-example-input2`,supportPage:`example-support`,iconSrc:`chrome://global/skin/icons/highlights.svg`,items:[{id:`checkbox-example`,l10nId:`checkbox-example-input`},{id:`radio-example`,l10nId:`radio-example-input`,control:`moz-radio-group`,options:[{l10nId:`radio-one`,value:`one`},{l10nId:`radio-two`,value:`two`,items:[y]},{l10nId:`radio-three`,value:`three`}]}]}]}},x=v.bind({}),x.args={config:{id:`browser-layout-example`,l10nId:`browser-layout-label`,items:[{id:`tabs-layout`,control:`moz-radio-group`,options:[{id:`horizontal-tabs`,l10nId:`browser-layout-radio-horizontal`,value:!0},{id:`vertical-tabs`,l10nId:`browser-layout-radio-vertical`,value:!1}]},{id:`show-sidebar`,l10nId:`browser-layout-sidebar`}]}},S=v.bind({}),S.args={config:{id:`cookies-data`,l10nId:`cookies-and-site-data`,supportPage:`sure`,items:[{l10nId:`clear-browsing-data`,control:`moz-box-button`,controlAttrs:{iconsrc:`chrome://browser/skin/flame.svg`}},y]}}})))()}C();export{S as BoxGroup,x as BrowserLayout,b as Group,_ as default};