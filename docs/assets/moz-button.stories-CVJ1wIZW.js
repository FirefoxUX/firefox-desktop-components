import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,f as n,i as r,u as i}from"./lit.all-Co4HOUmF.js";import{n as a}from"./moz-button-1qo60Dlf.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{n(),a(),o={title:`UI Widgets/Button`,component:`moz-button`,argTypes:{l10nId:{options:[`moz-button-labelled`,`moz-button-titled`,`moz-button-aria-labelled`],control:{type:`select`}},size:{options:[`default`,`small`,`large`],control:{type:`radio`}},type:{options:[`default`,`primary`,`destructive`,`muted`,`toolbar`,`menuitem`,`icon`,`icon ghost`,`split`],control:{type:`select`}},iconPosition:{options:[`start`,`end`],control:{type:`select`}}},parameters:{actions:{handles:[`click`]},status:`stable`,fluent:`
moz-button-labelled =
  .label = Button
moz-button-primary = Primary
moz-button-destructive = Destructive
moz-button-muted = Muted
moz-button-menuitem = Menu Item
moz-button-titled =
  .title = View logins
moz-button-aria-labelled =
  .aria-label = View logins
`}},s=({type:e,size:n,l10nId:a,iconSrc:o,disabled:s,accesskey:c,clickHandler:l,showOuterPadding:u,attention:d,iconPosition:f,menuId:p})=>i`
  <style>
    .show-outer-padding {
      --button-outer-padding-inline: var(--space-medium);
      --button-outer-padding-block: var(--space-medium);
    }
  </style>
  <moz-button
    @click=${l}
    data-l10n-id=${a}
    type=${e}
    size=${n}
    ?disabled=${s}
    iconSrc=${t(o)}
    accesskey=${t(c)}
    ?attention=${d}
    iconPosition=${t(f)}
    menuId=${t(p)}
    class=${r({"show-outer-padding":u})}
  ></moz-button>
  ${p?i` <panel-list id="panel-list">
        <panel-item>Item One</panel-item>
        <panel-item>Item Two</panel-item>
        <panel-item>Item Three</panel-item>
      </panel-list>`:``}
`,c=s.bind({}),c.args={type:`default`,size:`default`,l10nId:`moz-button-labelled`,iconSrc:``,disabled:!1,showOuterPadding:!1,attention:!1,iconPosition:`start`},l=s.bind({}),l.args={...c.args,size:`small`},u=s.bind({}),u.args={...c.args,size:`large`},d=s.bind({}),d.args={...c.args,disabled:!0},f=s.bind({}),f.args={...c.args,type:`primary`,l10nId:`moz-button-primary`},p=s.bind({}),p.args={...c.args,type:`destructive`,l10nId:`moz-button-destructive`},m=s.bind({}),m.args={...c.args,type:`menuitem`,l10nId:`moz-button-menuitem`,size:`small`},h=s.bind({}),h.args={...c.args,type:`muted`,l10nId:`moz-button-muted`},g=s.bind({}),g.args={...c.args,iconSrc:`chrome://global/skin/icons/more.svg`,l10nId:`moz-button-titled`},_=s.bind({}),_.args={...g.args,size:`small`},v=s.bind({}),v.args={...g.args,size:`large`},y=s.bind({}),y.args={...g.args,type:`ghost`},b=s.bind({}),b.args={...c.args,iconSrc:`chrome://global/skin/icons/edit-copy.svg`,l10nId:`moz-button-labelled`},x=s.bind({}),x.args={...b.args,iconPosition:`end`},S=s.bind({}),S.args={...c.args,accesskey:`t`,clickHandler:()=>alert(`Activating the accesskey clicks the button`)},C=s.bind({}),C.args={...c.args,type:`toolbar`,showOuterPadding:!0},w=s.bind({}),w.args={...g.args,type:`icon ghost`,iconSrc:`chrome://global/skin/icons/settings.svg`,attention:!0},T=s.bind({}),T.args={...g.args,type:`icon`,l10nId:`moz-button-more-options`,menuId:`panel-list`},E=s.bind({}),E.args={...c.args,type:`split`,menuId:`panel-list`}})))()}D();export{w as Badged,c as Default,u as DefaultLarge,l as DefaultSmall,p as Destructive,d as Disabled,g as Icon,y as IconGhost,v as IconLarge,x as IconPositionEnd,_ as IconSmall,b as IconText,T as MenuButton,m as MenuItem,h as Muted,f as Primary,E as SplitButton,C as Toolbar,S as WithAccesskey,o as default};