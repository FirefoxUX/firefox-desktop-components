import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,f as n,i as r,u as i}from"./lit.all-Co4HOUmF.js";import{t as a}from"./moz-radio-group-lymOJnkU.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{n(),a(),o=[`hello`,`howdy`,`hola`],s=[`chrome://global/skin/icons/highlights.svg`,`chrome://global/skin/icons/delete.svg`,`chrome://global/skin/icons/defaultFavicon.svg`],c=[`h`,`w`,`X`],l=[`moz-radio-0`,`moz-radio-1`,`moz-radio-2`],u=[`moz-radio-long-0`,`moz-radio-long-1`,`moz-radio-long-2`],d={title:`UI Widgets/Radio Group`,component:`moz-radio-group`,argTypes:{disabledButtons:{options:o,control:{type:`check`}},buttonLabels:{options:[`default`,`wrapped`],mapping:{default:l,wrapped:u},control:{type:`radio`}},accesskeys:{if:{arg:`showAccesskeys`,truthy:!0}},headingLevel:{options:[``,`1`,`2`,`3`,`4`,`5`,`6`],control:{type:`select`}}},parameters:{actions:{handles:[`click`,`input`,`change`]},status:`stable`,fluent:`
moz-radio-group =
  .label = This is the group label
moz-radio-0 =
  .label = Hello
moz-radio-1 =
  .label = Howdy
moz-radio-2 =
  .label = Hola
moz-radio-long-0 =
  .label = Hello ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt diam id ligula faucibus volutpat. Integer quis ultricies elit. In in dolor luctus velit sollicitudin efficitur vel id massa.
moz-radio-long-1 =
  .label = Howdy ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt diam id ligula faucibus volutpat. Integer quis ultricies elit. In in dolor luctus velit sollicitudin efficitur vel id massa.
moz-radio-long-2 =
  .label = Hola ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt diam id ligula faucibus volutpat. Integer quis ultricies elit. In in dolor luctus velit sollicitudin efficitur vel id massa.
moz-radio-described-0 =
  .label = Hello
  .description = This is the first option.
moz-radio-described-1 =
  .label = Howdy
  .description = This is the second option.
moz-radio-described-2 =
  .label = Hola
  .description = This is the third option.
moz-radio-described-long-0 =
  .label = Hello ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt diam id ligula faucibus volutpat. Integer quis ultricies elit. In in dolor luctus velit sollicitudin efficitur vel id massa.
  .description = This is the first option.
moz-radio-described-long-1 =
  .label = Howdy ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt diam id ligula faucibus volutpat. Integer quis ultricies elit. In in dolor luctus velit sollicitudin efficitur vel id massa.
  .description = This is the second option.
moz-radio-described-long-2 =
  .label = Hola ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt diam id ligula faucibus volutpat. Integer quis ultricies elit. In in dolor luctus velit sollicitudin efficitur vel id massa.
  .description = This is the third option.
moz-radio-group-description =
  .label = This is the group label
  .description = This is the group description
    `}},f=({value:e=o[0],groupL10nId:n=`moz-radio-group`,buttonLabels:a,groupName:c,showIcons:l,disabled:u,disabledButtons:d,showDescriptions:f,showAccesskeys:p,accesskeys:m,supportPage:h,groupSupportPage:g,title:_,hasSlottedSupportLinks:v,groupSlottedSupportLink:y,nestedFields:b,ellipsized:x,headingLevel:S})=>i`
  <moz-radio-group
    name=${c}
    data-l10n-id=${n}
    support-page=${t(g)}
    ?disabled=${u}
    value=${e}
    .headingLevel=${S}
  >
    ${y?i`<a href="/" slot="support-link">Slotted support link</a>`:``}
    ${o.map((e,n)=>i`
        <moz-radio
          ?disabled=${d.includes(e)}
          value=${e}
          data-l10n-id=${f?a[n].replace(`moz-radio`,`moz-radio-described`):a[n]}
          iconSrc=${t(l?s[n]:``)}
          accesskey=${t(p?m[n]:``)}
          support-page=${t(h)}
          title=${t(_||null)}
          class=${r({"text-truncated-ellipsis":x})}
        >
          ${v?i`<a slot="support-link" href="www.example.com">
                Click me!
              </a>`:``}
          ${b?i`<moz-checkbox
                slot="nested"
                data-l10n-id=${t(a[n])}
              >
              </moz-checkbox> `:``}
        </moz-radio>
      `)}
  </moz-radio-group>
`,p=f.bind({}),p.args={label:``,buttonLabels:`default`,groupName:`greeting`,unchecked:!1,showIcons:!1,disabled:!1,disabledButtons:[],showDescriptions:!1,showAccesskeys:!1,accesskeys:c,supportPage:``,groupSupportPage:``,title:``,hasSlottedSupportLinks:!1,groupSlottedSupportLink:!1,headingLevel:``},m=f.bind({}),m.args={...p.args,value:``},h=f.bind({}),h.args={...p.args,showIcons:!0},g=f.bind({}),g.args={...p.args,disabled:!0},_=f.bind({}),_.args={...p.args,disabledButtons:[`hello`]},v=f.bind({}),v.args={...p.args,showDescriptions:!0},y=f.bind({}),y.args={...p.args,showAccesskeys:!0},b=f.bind({}),b.args={...p.args,supportPage:`test`},x=f.bind({}),x.args={...p.args,hasSlottedSupportLinks:!0},S=f.bind({}),S.args={...p.args,groupL10nId:`moz-radio-group-description`},C=f.bind({}),C.args={...p.args,groupL10nId:`moz-radio-group-description`,groupSupportPage:`this is the group support page`},w=f.bind({}),w.args={...p.args,groupL10nId:`moz-radio-group-description`,groupSlottedSupportLink:!0},T=f.bind({}),T.args={...p.args,nestedFields:!0},E=f.bind({}),E.args={...p.args,ellipsized:!0,l10nId:`moz-checkbox-long-label`},D=f.bind({}),D.args={...S.args,headingLevel:`2`}})))()}O();export{m as AllUnchecked,p as Default,_ as DisabledRadioButton,g as DisabledRadioGroup,y as WithAccesskeys,v as WithDescriptions,E as WithEllipsizedLabel,D as WithHeadingLabel,h as WithIcon,T as WithNestedFields,S as WithRadioGroupDescription,w as WithRadioGroupSlottedSupportLink,C as WithRadioGroupSupportLink,x as WithSlottedSupportLinks,b as WithSupportLinks,d as default};