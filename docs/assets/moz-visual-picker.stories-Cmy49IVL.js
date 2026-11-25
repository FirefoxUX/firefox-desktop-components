import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{_ as t,d as n,f as r,i,u as a}from"./lit.all-Co4HOUmF.js";import{t as o}from"./moz-visual-picker-CBmnAqpz.js";function s(e,t){return e==`card`?a`<div class="slotted demo-card">
      <img
        src="chrome://browser/content/profiles/assets/system-theme-background.svg"
      />
      <span>I'm card number ${t+1}</span>
    </div>`:a`<div class="slotted avatar">
    <img src=${l[t]} role="presentation" />
  </div>`}var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{r(),o(),c={title:`UI Widgets/Visual Picker`,component:`moz-visual-picker`,argTypes:{value:{options:[`1`,`2`,`3`],control:{type:`select`}},slottedItem:{options:[`card`,`avatar`],control:{type:`select`},if:{arg:`showItemLabels`,truthy:!1}},pickerL10nId:{options:[`moz-visual-picker`,`moz-visual-picker-description`],control:{type:`select`}},type:{options:[`radio`,`listbox`],control:{type:`select`}},labelPosition:{options:[`inside`,`outside`],control:{type:`select`}}},parameters:{actions:{handles:[`click`,`input`,`change`]},status:`stable`,fluent:`
moz-visual-picker =
  .label = Pick something
moz-visual-picker-description =
  .label = Pick something
  .description = Pick one of these cool things please
favicon-aria-label =
  .aria-label = Favicon avatar
experiments-aria-label =
  .aria-label = Experiments avatar
heart-aria-label =
  .aria-label = Heart avatar
`}},l=[`chrome://global/skin/icons/defaultFavicon.svg`,`chrome://global/skin/icons/experiments.svg`,`chrome://global/skin/icons/heart.svg`],u=[`favicon-aria-label`,`experiments-aria-label`,`heart-aria-label`],d=({value:e,slottedItem:r,pickerL10nId:o,supportPage:c,type:l,orientation:d,showItemLabels:f,imageSrc:p,showItemDescriptions:m,labelPosition:h})=>a`
    <style>
      .slotted {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
      }

      .demo-card {
        flex-direction: column;
        width: 120px;

        span {
          padding: var(--space-xsmall);
          text-align: center;
          flex: 1;
        }

        img {
          border-top-left-radius: inherit;
          border-top-right-radius: inherit;
          flex: 1;
        }
      }

      .avatar-item {
        --visual-picker-item-border-radius: var(--border-radius-circle);
      }

      .avatar {
        height: 50px;
        width: 50px;

        img {
          height: var(--icon-size);
          width: var(--icon-size);
          -moz-context-properties: fill;
          fill: var(--icon-color);
        }
      }

      moz-visual-picker-item {
        max-width: 150px;
      }

      /* Items are full-width rows in the vertical orientation, so the
         horizontal max-width would make them look cramped. */
      moz-visual-picker[orientation="vertical"] moz-visual-picker-item {
        max-width: none;
      }
    </style>
    <moz-visual-picker
      type=${l}
      orientation=${n(d)}
      data-l10n-id=${o}
      value=${n(e)}
      support-page=${c}
    >
      ${[...Array.from({length:3})].map((e,o)=>a`<moz-visual-picker-item
            labelposition=${h}
            value=${o+1}
            class=${i({"avatar-item":r==`avatar`})}
            data-l10n-id=${r==`avatar`?u[o]:t}
            label=${f?`Item number ${o+1}`:t}
            description=${m?`Description for item number ${o+1}`:t}
            imagesrc=${n(p)}
          >
            ${s(r,o)}
          </moz-visual-picker-item>`)}
    </moz-visual-picker>
  `,f=d.bind({}),f.args={pickerL10nId:`moz-visual-picker`,slottedItem:`card`,value:`1`,supportPage:``,type:`radio`,showItemLabels:!1,showItemDescriptions:!1,labelPosition:`inside`},p=d.bind({}),p.args={...f.args,pickerL10nId:`moz-visual-picker-description`},m=d.bind({}),m.args={...p.args,supportPage:`foo`},h=d.bind({}),h.args={...f.args,value:``},g=d.bind({}),g.args={...f.args,type:`listbox`},_=d.bind({}),_.args={...f.args,showItemLabels:!0},v=d.bind({}),v.args={..._.args,showItemDescriptions:!0},y=d.bind({}),y.args={...f.args,imageSrc:`https://firefox-settings-attachments.cdn.mozilla.net/main-workspace/newtab-wallpapers-v2/e1108381-5c19-4cb4-a630-69f9e45503fb.avif`},b=d.bind({}),b.args={...y.args,showItemLabels:!0},x=e=>a`
  <style>
    .vertical-container {
      max-width: 400px;
    }
  </style>
  <div class="vertical-container">${d(e)}</div>
`,S=x.bind({}),S.args={...y.args,orientation:`vertical`,showItemLabels:!0,showItemDescriptions:!0},C=d.bind({}),C.args={...f.args,showItemLabels:!0,showItemDescriptions:!0,labelPosition:`outside`}})))()}w();export{h as AllUnselected,f as Default,C as LabelOutside,g as Listbox,S as Vertical,y as WithImage,b as WithImageAndLabel,v as WithItemDescriptions,_ as WithItemLabels,p as WithPickerDescription,m as WithPickerSupportLink,c as default};