import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,f as n,u as r}from"./lit.all-Co4HOUmF.js";import{t as i}from"./moz-five-star-DZacvpPs.js";var a,o,s,c,l,u;function d(){return(d=e((()=>{n(),i(),a={title:`UI Widgets/Five Star`,component:`moz-five-star`,parameters:{status:`stable`,fluent:`
moz-five-star-title =
  .title = This is the title
moz-five-star-aria-label =
  .aria-label = This is the aria-label
    `,actions:{handles:[`select`]}}},o=({rating:e,ariaLabel:n,l10nId:i,selectable:a,selectedHandler:o})=>r`
  <div style="max-width: 400px">
    <moz-five-star
      rating=${e}
      aria-label=${t(n)}
      data-l10n-id=${t(i)}
      data-l10n-attrs="aria-label, title"
      ?selectable=${a}
      @select=${o}
    >
    </moz-five-star>
  </div>
`,s=o.bind({}),s.args={rating:5,l10nId:`moz-five-star-aria-label`},c=o.bind({}),c.args={...s.args,rating:0,l10nId:`moz-five-star-title`},l=o.bind({}),l.args={selectable:!0,selectedHandler:e=>alert(`Selected rating: ${e.detail.rating}`)},u=o.bind({}),u.args={rating:3.33}})))()}d();export{u as Default,s as FiveStar,l as Selectable,c as WithTitle,a as default};