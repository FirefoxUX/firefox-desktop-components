import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,f as n,i as r,u as i}from"./lit.all-Co4HOUmF.js";import{n as a}from"./moz-input-folder-Dslc1Za6.js";var o,s,c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{n(),a(),o={title:`UI Widgets/Input Folder`,component:`moz-input-folder`,argTypes:{l10nId:{options:[`moz-input-folder-label`,`moz-input-folder-placeholder`,`moz-input-folder-description`,`moz-input-folder-long-label`],control:{type:`select`}}},parameters:{status:`stable`,handles:[`change`,`click`],fluent:`
moz-input-folder-label =
  .label = Save files to
moz-input-folder-placeholder =
  .label = Save files to
  .placeholder = Select folder
moz-input-folder-description =
  .label = Save files to
  .description = Description text
  .placeholder = Select folder
moz-input-folder-long-label =
  .label = Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum libero enim, luctus eu ante a, maximus imperdiet mi. Suspendisse sodales, nisi et commodo malesuada, lectus.
    `}},s=({name:e,value:n,iconSrc:a,disabled:o,l10nId:s,description:c,supportPage:l,title:u,hasSlottedDescription:d,hasSlottedSupportLink:f,ellipsized:p,hasAdditionalAction:m})=>i`
  <div style="width: 450px;">
    <moz-input-folder
      name=${e}
      value=${t(n||null)}
      iconsrc=${t(a||null)}
      ?disabled=${o}
      data-l10n-id=${s}
      support-page=${t(l||null)}
      title=${t(u||null)}
      @click=${{handleEvent:e=>{e.composedPath().some(e=>e.id==`choose-folder-button`)&&(e.stopPropagation(),alert(`This would open the file picker`))},capture:!0}}
      class=${r({"text-truncated-ellipsis":p})}
    >
      ${d?i`<div slot="description">${c}</div>`:``}
      ${f?i`<a slot="support-link" href="www.example.com">Click me!</a>`:``}
      ${m?i`<moz-button
            slot="actions"
            @click=${()=>alert(`Use the 'actions' slot for more actions.`)}
            >Click me!</moz-button
          >`:``}
    </moz-input-folder>
  </div>
`,c=s.bind({}),c.args={name:`example-moz-input-folder`,value:``,iconSrc:``,disabled:!1,l10nId:`moz-input-folder-label`,supportPage:``,title:``,hasSlottedDescription:!1,hasSlottedSupportLink:!1},l=s.bind({}),l.args={...c.args,value:`/User/Downloads`},u=s.bind({}),u.args={...c.args,l10nId:`moz-input-folder-placeholder`},d=s.bind({}),d.args={...c.args,iconSrc:`chrome://global/skin/icons/highlights.svg`},f=s.bind({}),f.args={...c.args,l10nId:`moz-input-folder-description`},p=s.bind({}),p.args={...c.args,description:`This is a custom slotted description.`,hasSlottedDescription:!0},m=s.bind({}),m.args={...c.args,l10nId:`moz-input-folder-description`,disabled:!0},h=s.bind({}),h.args={...c.args,supportPage:`support-page`,l10nId:`moz-input-folder-description`},g=s.bind({}),g.args={...c.args,hasSlottedSupportLink:!0,l10nId:`moz-input-folder-description`},_=s.bind({}),_.args={...c.args,ellipsized:!0,l10nId:`moz-input-folder-long-label`},v=s.bind({}),v.args={...c.args,hasAdditionalAction:!0}})))()}y();export{c as Default,m as Disabled,v as WithAdditionalActions,_ as WithEllipsizedLabel,d as WithIcon,u as WithPlaceholder,p as WithSlottedDescription,g as WithSlottedSupportLink,h as WithSupportLink,l as WithValue,o as default,f as withDescription};