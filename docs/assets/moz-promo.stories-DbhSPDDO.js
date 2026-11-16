import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,f as n,u as r}from"./lit.all-BYVOqvrj.js";import{n as i}from"./moz-button-F-bkEbbF.js";import{t as a}from"./moz-support-link-jyOtt3Py.js";import{t as o}from"./moz-promo-Dh83tloT.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{n(),o(),i(),a(),s=[`moz-promo-message`,`moz-promo-message-heading`,`moz-promo-message-heading-long`],c={title:`UI Widgets/Promo`,component:`moz-promo`,argTypes:{type:{options:[`default`,`vibrant`],control:{type:`select`}},l10nId:{options:s,control:{type:`select`}},heading:{table:{disable:!0}},message:{table:{disable:!0}},imageWidth:{options:[`small`,`large`],control:{type:`radio`},if:{arg:`hasImageSlot`,truthy:!1}},imageAlignment:{options:[`start`,`end`,`center`],control:{type:`select`}},imageDisplay:{options:[`cover`,`padded`],control:{type:`radio`},if:{arg:`hasImageSlot`,truthy:!1}},imageSrc:{if:{arg:`hasImageSlot`,truthy:!1}},dismissable:{control:{type:`boolean`}}},parameters:{status:`stable`,fluent:`
moz-promo-message =
  .message = Information about a new feature to check out
moz-promo-message-heading =
  .heading = Check out this new feature
  .message = Information about a new feature to check out
moz-promo-message-heading-long =
  .heading = A longer version of the heading to check for text wrapping, neat!
  .message = A much longer message to check text wrapping within the promotional element. A much longer message to check text wrapping within the promotional element.
    `}},l=({type:e,heading:n,message:i,l10nId:a,imageSrc:o,imageAlignment:s,imageWidth:c,imageDisplay:l,hasActionButton:u,hasSupportLink:d,hasImageSlot:f,dismissable:p})=>r`
  <div style="width: 500px">
    <moz-promo
      type=${e}
      heading=${t(n)}
      message=${t(i)}
      data-l10n-id=${t(a)}
      imageSrc=${t(o)}
      imageAlignment=${t(s)}
      imageWidth=${t(c)}
      imageDisplay=${t(l)}
      ?dismissable=${p}
    >
      ${u?r` <moz-button slot="actions">Actions button</moz-button>`:``}
      ${d?r` <a is="moz-support-link" slot="support-link" href="#"></a>`:``}
      ${f?r`<div
            slot="image"
            style="display: flex; gap: var(--space-medium);"
          >
            <img src="chrome://global/skin/icons/info.svg" alt="" />
            <img src="chrome://global/skin/icons/settings.svg" alt="" />
            <img src="chrome://global/skin/icons/search-glass.svg" alt="" />
          </div>`:``}
    </moz-promo>
  </div>
`,u=l.bind({}),u.args={type:`default`,l10nId:`moz-promo-message`,hasActionButton:!1,hasSupportLink:!1,hasImageSlot:!1,dismissable:!1},d=l.bind({}),d.args={...u.args,type:`vibrant`},f=l.bind({}),f.args={...d.args,l10nId:`moz-promo-message-heading`},p=l.bind({}),p.args={...d.args,l10nId:`moz-promo-message-heading-long`},m=l.bind({}),m.args={...u.args,imageSrc:`chrome://global/skin/illustrations/kit-happy.svg`,imageAlignment:`start`,imageSize:`large`,imageDisplay:`padded`,l10nId:`moz-promo-message-heading-long`},h=l.bind({}),h.args={...u.args,imageSrc:`chrome://global/skin/illustrations/kit-happy.svg`,imageAlignment:`start`,imageWidth:`large`,imageDisplay:`cover`,l10nId:`moz-promo-message-heading-long`},g=l.bind({}),g.args={...u.args,imageSrc:`chrome://global/skin/illustrations/kit-happy.svg`,imageAlignment:`start`},_=l.bind({}),_.args={...g.args,imageAlignment:`end`},v=l.bind({}),v.args={...g.args,imageSrc:`chrome://global/skin/illustrations/kit-happy.svg`,imageAlignment:`center`},y=l.bind({}),y.args={...u.args,hasActionButton:!0},b=l.bind({}),b.args={...u.args,hasSupportLink:!0},x=l.bind({}),x.args={...u.args,imageAlignment:`center`,hasImageSlot:!0},S=l.bind({}),S.args={...f.args,dismissable:!0},C=l.bind({}),C.args={...h.args,dismissable:!0,imageAlignment:`end`},w=l.bind({}),w.args={...u.args,imageSrc:`chrome://global/skin/illustrations/kit-happy.svg`,imageAlignment:`end`,imageWidth:`large`,imageDisplay:`padded`,l10nId:`moz-promo-message-heading-long`,dismissable:!0}})))()}T();export{u as Default,S as Dismissable,C as DismissableOverCoverImage,w as DismissableWithPaddedEndImage,v as ImageAtCenter,_ as ImageAtEnd,g as ImageAtStart,y as SlottedAction,x as SlottedImage,b as SlottedSupportLink,d as Vibrant,f as WithHeading,h as WithLargeImage,m as WithPaddedImage,p as WithWrappedMessage,c as default};