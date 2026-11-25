import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,f as n,i as r,u as i}from"./lit.all-Co4HOUmF.js";import{t as a}from"./moz-checkbox-CnPknfSq.js";var o,s,c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{n(),a(),o={title:`UI Widgets/Checkbox`,component:`moz-checkbox`,argTypes:{l10nId:{options:[`moz-checkbox-label`,`moz-checkbox-label-description`,`moz-checkbox-long-label`,`moz-checkbox-long-description`],control:{type:`select`}}},parameters:{status:`stable`,handles:[`click`,`input`,`change`],fluent:`
moz-checkbox-label =
  .label = The label of the checkbox
moz-checkbox-label-description =
  .label = The label of the checkbox
  .description = This is a description
moz-checkbox-long-label =
  .label = Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum libero enim, luctus eu ante a, maximus imperdiet mi. Suspendisse sodales, nisi et commodo malesuada, lectus.
moz-checkbox-long-description =
  .label = Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum libero enim, luctus eu ante a, maximus imperdiet mi. Suspendisse sodales, nisi et commodo malesuada, lectus.
  .description = Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum libero enim, luctus eu ante a, maximus imperdiet mi. Suspendisse sodales, nisi et commodo malesuada, lectus.
    `}},s=({l10nId:e,checked:n,label:a,disabled:o,iconSrc:s,description:c,hasSlottedDescription:l,accesskey:u,supportPage:d,title:f,hasSlottedSupportLink:p,nestedFields:m,ellipsized:h,value:g})=>{let _=i`
    <moz-checkbox
      ?checked=${n}
      label=${t(a)}
      description=${t(c)}
      data-l10n-id=${t(e)}
      .iconSrc=${s}
      ?disabled=${o}
      accesskey=${t(u)}
      support-page=${t(d)}
      title=${t(f||null)}
      value=${t(g)}
      class=${r({"text-truncated-ellipsis":h})}
    >
      ${l?i`<div slot="description">test slot text</div>`:``}
      ${p?i`<a slot="support-link" href="www.example.com">Click me!</a>`:``}
      ${m?i`<moz-checkbox slot="nested" data-l10n-id=${t(e)}>
            </moz-checkbox>
            <moz-checkbox slot="nested" data-l10n-id=${t(e)}>
              <moz-checkbox slot="nested" data-l10n-id=${t(e)}>
              </moz-checkbox>
            </moz-checkbox> `:``}
    </moz-checkbox>
  `;return m?i`<moz-fieldset label="Checkbox with nested fields">
        ${_}
      </moz-fieldset>`:_},c=s.bind({}),c.args={name:`example-moz-checkbox`,value:`example-value`,l10nId:`moz-checkbox-label`,checked:!1,disabled:!1,iconSrc:``,description:``,title:``,label:``,accesskey:``,supportPage:``,hasSlottedSupportLink:!1,nestedFields:!1,ellipsized:!1},l=s.bind({}),l.args={...c.args,iconSrc:`chrome://global/skin/icons/highlights.svg`},u=s.bind({}),u.args={...c.args,checked:!0},d=s.bind({}),d.args={...c.args,disabled:!0},f=s.bind({}),f.args={...c.args,l10nId:`moz-checkbox-label-description`},p=s.bind({}),p.args={...c.args,hasSlottedDescription:!0},m=s.bind({}),m.args={...c.args,accesskey:`c`},h=s.bind({}),h.args={...c.args,supportPage:`test`},g=s.bind({}),g.args={...c.args,hasSlottedSupportLink:!0},_=s.bind({}),_.args={...c.args,nestedFields:!0},v=s.bind({}),v.args={...c.args,ellipsized:!0,l10nId:`moz-checkbox-long-label`}})))()}y();export{u as CheckedByDefault,c as Default,d as Disabled,m as WithAccesskey,f as WithDescription,v as WithEllipsizedLabel,l as WithIcon,_ as WithNestedFields,p as WithSlottedDescription,g as WithSlottedSupportLink,h as WithSupportLink,o as default};