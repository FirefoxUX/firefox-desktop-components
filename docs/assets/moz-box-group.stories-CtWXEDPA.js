import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,f as n,u as r}from"./lit.all-Co4HOUmF.js";import{n as i,t as a}from"./moz-box-group-B6bA2Ioa.js";import{n as o}from"./setting-control-COcPHcCO.js";function s({type:e,hasHeader:n,hasFooter:i,hasStatic:a}){return r`<moz-box-group
      type=${t(e)}
      @reorder=${_}
    >
      ${n?r`<moz-box-item
            slot="header"
            data-l10n-id="moz-box-item-header"
          ></moz-box-item>`:``}
      ${c(e,a)}
      ${i?r`<moz-box-button
            slot="footer"
            data-l10n-id="moz-box-button-footer"
          ></moz-box-button>`:``}
    </moz-box-group>
    ${e==`list`?r`<moz-button class="delete" @click=${g}>
          Add an item
        </moz-button>`:``}`}function c(e,t){return e==a.reorderable?u(t):d()}function l(){return r`<moz-select slot="actions" data-l10n-id="moz-box-select-action">
    <moz-option
      value="1"
      label="Option one"
      iconsrc="chrome://global/skin/icons/info.svg"
    ></moz-option>
    <moz-option
      value="2"
      label="Option two"
      iconsrc="chrome://global/skin/icons/warning.svg"
    ></moz-option>
    <moz-option
      value="3"
      label="Option three"
      iconsrc="chrome://global/skin/icons/settings.svg"
    ></moz-option>
  </moz-select>`}function u(e){let n=(e,n,i=0)=>Array.from({length:e}).map((e,a)=>r`<moz-box-item
          data-l10n-id=${`moz-box-item-reorderable-${i+a+1}`}
          slot=${t(n)}
        >
          <moz-button
            iconsrc="chrome://global/skin/icons/edit-outline.svg"
            data-l10n-id="moz-box-edit-action"
            slot="actions-start"
          ></moz-button>
          ${l()}
          <moz-toggle
            slot="actions"
            pressed
            data-l10n-id="moz-box-toggle-action"
          ></moz-toggle>
        </moz-box-item>`);return e?r`${n(3)}${n(2,`static`,3)}`:r`${n(5)}`}function d(){return r`<moz-box-item data-l10n-id="moz-box-item">
      ${l()}
      <moz-button
        iconsrc="chrome://global/skin/icons/edit-outline.svg"
        data-l10n-id="moz-box-edit-action"
        type="ghost"
        slot="actions"
      ></moz-button>
      <moz-toggle
        slot="actions"
        pressed
        data-l10n-id="moz-box-toggle-action"
      ></moz-toggle>
      <moz-button
        iconsrc="chrome://global/skin/icons/more.svg"
        data-l10n-id="moz-box-more-action"
        slot="actions-start"
      ></moz-button>
    </moz-box-item>
    <moz-box-link data-l10n-id="moz-box-link"></moz-box-link>
    <moz-box-button data-l10n-id="moz-box-button-1"></moz-box-button>
    <moz-box-item data-l10n-id="moz-box-item">
      <moz-button
        iconsrc="chrome://global/skin/icons/edit-outline.svg"
        data-l10n-id="moz-box-edit-action"
        type="ghost"
        slot="actions-start"
      ></moz-button>
      <moz-button
        iconsrc="chrome://global/skin/icons/more.svg"
        data-l10n-id="moz-box-more-action"
        slot="actions-start"
      ></moz-button>
    </moz-box-item>
    <moz-box-button
      iconsrc="chrome://global/skin/icons/delete.svg"
      @click=${h}
      data-l10n-id="moz-box-button-2"
    ></moz-box-button> `}function f({type:e,hasHeader:t,hasFooter:n}){return r`<setting-control
    .config=${v({type:e,hasHeader:t,hasFooter:n})}
    .setting=${y}
    .getSetting=${p}
  ></setting-control>`}function p(){return{value:!0,on(){},off(){},userChange(){},visible:()=>!0,getControlConfig:e=>e,controllingExtensionInfo:{}}}var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{n(),i(),o(),m={title:`UI Widgets/Box Group`,component:`moz-box-group`,argTypes:{type:{options:Object.keys(a),mapping:a,control:`select`}},parameters:{status:`stable`,fluent:`
moz-box-item =
  .label = I'm a box item
  .description = I'm part of a group
moz-box-button-1 =
  .label = I'm a box button in a group
moz-box-button-2 =
  .label = Delete this box button from a group
moz-box-link =
  .label = I'm a box link in a group
moz-box-delete-action =
  .title = Delete I'm a box item
moz-box-edit-action =
  .title = Edit I'm a box item
moz-box-toggle-action =
  .aria-label = Toggle I'm a box item
moz-box-more-action =
  .title = More options, I'm a box item
moz-box-select-action =
  .aria-label = Choose an action for I'm a box item
moz-box-item-reorderable-1 =
  .label = I'm box item number 1
moz-box-item-reorderable-2 =
  .label = I'm box item number 2
moz-box-item-reorderable-3 =
  .label = I'm box item number 3
moz-box-item-reorderable-4 =
  .label = I'm box item number 4
moz-box-item-reorderable-5 =
  .label = I'm box item number 5
moz-box-item-header =
  .label = I'm a header box item
moz-box-button-footer =
  .label = I'm a footer box button
    `}},h=e=>{e.target.remove()},g=e=>{let t=e.target.getRootNode().querySelector(`moz-box-group`),n=document.createElement(`moz-box-item`);n.label=`New box item`,n.description=`New items are added to the list`;let r=document.createElement(`moz-button`);r.addEventListener(`click`,()=>n.remove()),r.iconSrc=`chrome://global/skin/icons/delete.svg`,r.slot=`actions`,r.setAttribute(`data-l10n-id`,`moz-box-delete-action`),n.append(r),t.prepend(n)},_=e=>{let t=e.target.getRootNode().querySelector(`moz-box-group`),{draggedElement:n,targetElement:r,position:i}=e.detail;i===-1?t.insertBefore(n,r):t.insertBefore(n,r.nextElementSibling),n.focus(),t.updateItems()},v=({type:e,hasHeader:t,hasFooter:n})=>({id:`exampleWrapped`,control:`moz-box-group`,controlAttrs:{type:e},items:[...t?[{id:`header`,control:`moz-box-item`,l10nId:`moz-box-item-header`,slot:`header`}]:[],{id:`item1`,control:`moz-box-item`,l10nId:`moz-box-item`,options:[{id:`slotted-button`,control:`moz-button`,l10nId:`moz-box-edit-action`,iconSrc:`chrome://global/skin/icons/edit-outline.svg`,controlAttrs:{type:`ghost`,slot:`actions`}},{id:`slotted-toggle`,control:`moz-toggle`,l10nId:`moz-box-toggle-action`,controlAttrs:{slot:`actions`}},{id:`slotted-icon-button`,control:`moz-button`,l10nId:`moz-box-more-action`,iconSrc:`chrome://global/skin/icons/more.svg`,controlAttrs:{slot:`actions`}}]},{id:`link1`,control:`moz-box-link`,l10nId:`moz-box-link`},{id:`button1`,control:`moz-box-button`,l10nId:`moz-box-button-1`},{id:`item2`,control:`moz-box-item`,l10nId:`moz-box-item`,options:[{id:`slotted-button-start`,control:`moz-button`,l10nId:`moz-box-edit-action`,iconSrc:`chrome://global/skin/icons/edit-outline.svg`,controlAttrs:{type:`ghost`,slot:`actions-start`}},{id:`slotted-icon-button-start`,control:`moz-button`,l10nId:`moz-box-more-action`,iconSrc:`chrome://global/skin/icons/more.svg`,controlAttrs:{slot:`actions-start`}}]},{id:`button2`,control:`moz-box-button`,l10nId:`moz-box-button-2`},...n?[{id:`footer`,control:`moz-box-button`,l10nId:`moz-box-button-footer`,slot:`footer`}]:[]]}),y={value:1,on(){},off(){},userChange(){},getControlConfig:e=>e,controllingExtensionInfo:{},visible:!0},b=({scrollable:e})=>r`
  <style>
    moz-box-group {
      --box-group-max-height: ${e?`250px`:`unset`};
    }

    .delete {
      margin-top: var(--space-medium);
    }
  </style>
`,x=({type:e,hasHeader:t,hasFooter:n,scrollable:i,wrapped:a,hasStatic:o})=>r`
  ${b({scrollable:i})}
  ${a?f({type:e,hasHeader:t,hasFooter:n}):s({type:e,hasHeader:t,hasFooter:n,hasStatic:o})}
`,S=({type:e,hasHeader:t,hasFooter:n,scrollable:i,hasStatic:a})=>r`
  ${b({scrollable:i})}
  ${s({type:e,hasHeader:t,hasFooter:n,hasStatic:a})}
`,C=x.bind({}),C.args={type:`default`,hasHeader:!1,hasFooter:!1,scrollable:!1,wrapped:!1,hasStatic:!1},w=x.bind({}),w.args={...C.args,type:`list`},T=S.bind({}),T.args={type:`reorderable`,hasHeader:!1,hasFooter:!1,scrollable:!1},E=S.bind({}),E.args={...T.args,hasStatic:!0},D=x.bind({}),D.args={...w.args,hasHeader:!0,hasFooter:!0},O=x.bind({}),O.args={...D.args,scrollable:!0},k=x.bind({}),k.args={...D.args,wrapped:!0}})))()}A();export{C as Default,w as List,D as ListWithHeaderAndFooter,T as Reorderable,E as ReorderableWithStatic,O as Scrollable,k as Wrapped,m as default};