import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,f as n,i as r,u as i}from"./lit.all-Co4HOUmF.js";import{t as a}from"./moz-support-link-jyOtt3Py.js";import{t as o}from"./moz-toggle-BHsZC4PC.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{n(),o(),a(),s={title:`UI Widgets/Toggle`,component:`moz-toggle`,argTypes:{l10nId:{options:[`moz-toggle-label`,`moz-toggle-only`,`moz-toggle-aria-label`,`moz-toggle-description`,`moz-toggle-long-label`],control:{type:`select`}}},parameters:{status:`stable`,actions:{handles:[`toggle`]},fluent:`
moz-toggle-aria-label =
  .label = This is the label
  .aria-label = This is the aria-label
moz-toggle-only =
  .aria-label = This is the toggle-only aria-label
moz-toggle-label =
  .label = This is the label
moz-toggle-description =
  .label = This is the label
  .description = This is the description.
moz-toggle-long-label =
  .label = Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum libero enim, luctus eu ante a, maximus imperdiet mi. Suspendisse sodales, nisi et commodo malesuada, lectus.
    `}},c=({pressed:e,disabled:n,label:a,description:o,ariaLabel:s,l10nId:c,supportPage:l,accessKey:u,title:d,iconSrc:f,hasSlottedSupportLink:p,nestedFields:m,ellipsized:h,inputLayout:g})=>{let _=i`
    <moz-toggle
      ?pressed=${e}
      ?disabled=${n}
      label=${t(a)}
      description=${t(o)}
      aria-label=${t(s)}
      data-l10n-id=${t(c)}
      accesskey=${t(u)}
      title=${t(d||null)}
      support-page=${t(l)}
      iconsrc=${t(f)}
      inputlayout=${t(g)}
      class=${r({"text-truncated-ellipsis":h})}
    >
      ${p?i`<a slot="support-link" href="www.example.com">Click me!</a>`:``}
      ${m?i`<moz-checkbox slot="nested" data-l10n-id=${t(c)}>
            </moz-checkbox>
            <moz-checkbox slot="nested" data-l10n-id=${t(c)}>
              <moz-checkbox slot="nested" data-l10n-id=${t(c)}>
              </moz-checkbox>
            </moz-checkbox> `:``}
    </moz-toggle>
  `;return m?i`<moz-fieldset label="Toggle with nested fields"
        >${_}</moz-fieldset
      >`:_},l=c.bind({}),l.args={pressed:!0,disabled:!1,l10nId:`moz-toggle-label`,hasSupportLink:!1,accessKey:``,title:``,supportPage:``,iconSrc:``,hasSlottedSupportLink:!1,nestedFields:!1,inputLayout:null},u=c.bind({}),u.args={...l.args,disabled:!0},d=c.bind({}),d.args={...l.args,l10nId:`moz-toggle-only`},f=c.bind({}),f.args={...l.args,accessKey:`h`,l10nId:`moz-toggle-aria-label`},p=c.bind({}),p.args={...l.args,l10nId:`moz-toggle-description`},m=c.bind({}),m.args={...l.args,supportPage:`addons`},h=c.bind({}),h.args={...l.args,hasSlottedSupportLink:!0},g=c.bind({}),g.args={...l.args,iconSrc:`chrome://global/skin/icons/highlights.svg`},_=c.bind({}),_.args={...l.args,nestedFields:!0},v=c.bind({}),v.args={...l.args,ellipsized:!0,l10nId:`moz-toggle-long-label`},y=c.bind({}),y.args={...l.args,inputLayout:`inline-end`},b=c.bind({}),b.args={...l.args,inputLayout:`inline-end`,l10nId:`moz-toggle-description`},x=c.bind({}),x.args={...l.args,inputLayout:`inline-end`,l10nId:`moz-toggle-description`,supportPage:`addons`},S=c.bind({}),S.args={...l.args,inputLayout:`inline-end`,disabled:!0},C=c.bind({}),C.args={...l.args,inputLayout:`inline-end`,nestedFields:!0}})))()}w();export{l as Default,u as Disabled,S as InlineEndDisabled,y as InlineEndLayout,b as InlineEndWithDescription,C as InlineEndWithNestedFields,x as InlineEndWithSupportLink,d as ToggleOnly,f as WithAccesskey,p as WithDescription,v as WithEllipsizedLabel,g as WithIcon,_ as WithNestedFields,h as WithSlottedSupportLink,m as WithSupportLink,s as default};