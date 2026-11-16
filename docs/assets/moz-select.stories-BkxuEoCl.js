import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,f as n,i as r,u as i}from"./lit.all-BYVOqvrj.js";import{t as a}from"./moz-select-qs7ivcg9.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{n(),a(),o={title:`UI Widgets/Select`,component:`moz-select`,argTypes:{l10nId:{options:[`moz-select-label`,`moz-select-description`,`moz-select-long-label`,`moz-select-aria-label`],control:{type:`select`}},size:{options:[`default`,`small`],control:{type:`radio`}},label:{table:{disable:!0}},description:{table:{disable:!0}}},parameters:{status:`stable`,handles:[`change`,`input`],fluent:`
moz-select-label =
  .label = Select an option
moz-select-long-label =
  .label = Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum libero enim, luctus eu ante a, maximus imperdiet mi. Suspendisse sodales, nisi et commodo malesuada, lectus.
moz-select-description =
  .label = Select an option
  .description = This is a description for the select dropdown
moz-select-aria-label =
  .aria-label = Select an option
moz-option-1 =
    .label = Option 1 Option 1 Option 1 Option 1 Option 1
moz-option-2 =
    .label = Option 2
moz-option-3 =
    .label = Option 3
moz-option-a =
    .label = Option A
moz-option-b =
    .label = Option B
moz-option-c =
    .label = Option C
moz-option-d =
    .label = Option D
    `}},s=[{value:`1`,l10nId:`moz-option-1`},{value:`2`,l10nId:`moz-option-2`},{value:`3`,l10nId:`moz-option-3`}],c=[{value:`A`,l10nId:`moz-option-a`},{value:`B`,l10nId:`moz-option-b`},{value:`C`,l10nId:`moz-option-c`},{value:`D`,l10nId:`moz-option-d`}],l=[{value:`1`,l10nId:`moz-option-1`,iconSrc:`chrome://global/skin/icons/settings.svg`},{value:`2`,l10nId:`moz-option-2`,iconSrc:`chrome://global/skin/icons/info.svg`},{value:`3`,l10nId:`moz-option-3`,iconSrc:`chrome://global/skin/icons/warning.svg`}],u=[{value:`A`,l10nId:`moz-option-a`,iconSrc:`chrome://global/skin/icons/heart.svg`},{value:`B`,l10nId:`moz-option-b`,iconSrc:`chrome://global/skin/icons/edit.svg`},{value:`C`,l10nId:`moz-option-c`,iconSrc:`chrome://global/skin/icons/delete.svg`}],d=({name:e,value:n,iconSrc:a,disabled:o,size:l,l10nId:u,description:d,supportPage:f,accessKey:p,title:m,hasSlottedDescription:h,useOtherOptions:g,options:_=g?c:s,hasSlottedSupportLink:v,ellipsized:y,disabledOption:b,hiddenOption:x,withSeparator:S,inputLayout:C})=>i`
  <style>
    moz-select {
      --select-max-width: 225px;
    }
  </style>
  <moz-select
    name=${e}
    value=${t(n||null)}
    iconsrc=${t(a||null)}
    ?disabled=${o}
    size=${l}
    data-l10n-id=${u}
    support-page=${t(f||null)}
    accesskey=${t(p||null)}
    title=${t(m||null)}
    inputlayout=${t(C)}
    class=${r({"text-truncated-ellipsis":y})}
  >
    ${h?i`<div slot="description">${d}</div>`:``}
    ${v?i`<a slot="support-link" href="www.example.com">Click me!</a>`:``}
    ${_.map((e,t)=>i`${t==2&&S?i`<hr />`:``}
          <moz-option
            value=${e.value}
            data-l10n-id=${e.l10nId}
            iconsrc=${e.iconSrc}
            ?disabled=${b&&t==1}
            ?hidden=${x&&t==2}
          ></moz-option>`)}
  </moz-select>
`,f=d.bind({}),f.args={name:`example-moz-select`,value:``,iconSrc:``,disabled:!1,size:`default`,l10nId:`moz-select-label`,description:``,supportPage:``,accessKey:``,title:``,hasSlottedDescription:!1,useOtherOptions:!1,hasSlottedSupportLink:!1,ellipsized:!1,disabledOption:!1,hiddenOption:!1,withSeparator:!1,inputLayout:null},p=d.bind({}),p.args={...f.args,size:`small`},m=d.bind({}),m.args={...f.args,iconSrc:`chrome://global/skin/icons/highlights.svg`},h=d.bind({}),h.args={...f.args,l10nId:`moz-select-aria-label`},g=d.bind({}),g.args={...f.args,l10nId:`moz-select-description`},_=d.bind({}),_.args={...f.args,description:`This is a custom slotted description.`,hasSlottedDescription:!0},v=e=>{let t=e.useOtherOptions?u:l;return d({...e,options:t})},v.args={...f.args,useOtherOptions:!1},y=d.bind({}),y.args={...f.args,disabled:!0},b=d.bind({}),b.args={...f.args,accessKey:`s`},x=d.bind({}),x.args={...f.args,supportPage:`support-page`,l10nId:`moz-select-description`},S=d.bind({}),S.args={...f.args,hasSlottedSupportLink:!0,l10nId:`moz-select-description`},C=d.bind({}),C.args={...f.args,value:`2`},w=d.bind({}),w.args={...f.args,ellipsized:!0,l10nId:`moz-select-long-label`},T=d.bind({}),T.args={...f.args,disabledOption:!0},E=d.bind({}),E.args={...f.args,hiddenOption:!0},D=d.bind({}),D.args={...f.args,withSeparator:!0},O=d.bind({}),O.args={...f.args,inputLayout:`inline-end`},k=d.bind({}),k.args={...f.args,inputLayout:`inline-end`,l10nId:`moz-select-description`},A=d.bind({}),A.args={...f.args,inputLayout:`inline-end`,l10nId:`moz-select-description`,supportPage:`support-page`},j=d.bind({}),j.args={...f.args,inputLayout:`inline-end`,disabled:!0}})))()}M();export{f as Default,p as DefaultSmall,y as Disabled,j as InlineEndDisabled,O as InlineEndLayout,k as InlineEndWithDescription,A as InlineEndWithSupportLink,C as PreselectedValue,b as WithAccesskey,h as WithAriaLabel,g as WithDescription,T as WithDisabledOption,w as WithEllipsizedLabel,E as WithHiddenOption,m as WithIcon,v as WithSelectedOptionIcon,D as WithSeparator,_ as WithSlottedDescription,S as WithSlottedSupportLink,x as WithSupportLink,o as default};