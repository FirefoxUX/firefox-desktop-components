import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,f as n,u as r}from"./lit.all-Co4HOUmF.js";import{t as i}from"./moz-card-Cawhmv_M.js";var a,o,s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{n(),i(),a={title:`UI Widgets/Card`,component:`moz-card`,parameters:{status:`stable`,fluent:`
moz-card-heading =
  .heading = This is the label
moz-card-heading-with-icon =
  .heading = This is a card with a heading icon
    `},argTypes:{type:{options:[`default`,`accordion`],control:{type:`select`}},spacing:{options:[`default`,`compact`],control:{type:`select`}},headingLevel:{options:[1,2,3,4,5,6],control:{type:`select`}},expanded:{options:[!0,null],control:{type:`radio`,labels:{true:`True`,null:`False`}},if:{arg:`type`,eq:`accordion`}}}},o=({l10nId:e,content:n,type:i,spacing:a,headingLevel:o,iconSrc:s,expanded:c})=>r`
  <style>
    main {
      max-width: 400px;
    }
  </style>
  <main>
    <moz-card
      type=${t(i)}
      spacing=${t(a)}
      headingLevel=${t(o)}
      iconSrc=${t(s)}
      data-l10n-id=${t(e)}
      expanded=${t(c)}
    >
      <div>${n}</div>
    </moz-card>
  </main>
`,s=({l10nId:e,content:n,type:i,spacing:a,headingLevel:o,iconSrc:s,expanded:c})=>r`
  <style>
    main {
      max-width: 400px;
    }
  </style>
  <main>
    <moz-card
      type=${t(i)}
      spacing=${t(a)}
      headingLevel=${t(o)}
      iconSrc=${t(s)}
      data-l10n-id=${t(e)}
      expanded=${t(c)}
    >
      <img
        src="https://firefox-settings-attachments.cdn.mozilla.net/main-workspace/newtab-wallpapers-v2/e1108381-5c19-4cb4-a630-69f9e45503fb.avif"
        alt
        slot="cover-image"
      />
      <div>${n}</div>
    </moz-card>
  </main>
`,c=({l10nId:e,content:n,type:i,spacing:a,headingLevel:o,iconSrc:s,expanded:c})=>r`
  <style>
    main {
      max-width: 400px;
    }

    .custom-cover-image {
      width: 100%;
      height: 215px;
      border-radius: var(--border-radius-small);
    }
  </style>
  <main>
    <moz-card
      type=${t(i)}
      spacing=${t(a)}
      headingLevel=${t(o)}
      iconSrc=${t(s)}
      data-l10n-id=${t(e)}
      expanded=${t(c)}
    >
      <picture slot="cover-image">
        <img
          src="https://firefox-settings-attachments.cdn.mozilla.net/main-workspace/newtab-wallpapers-v2/e1108381-5c19-4cb4-a630-69f9e45503fb.avif"
          alt
          class="custom-cover-image"
        />
      </picture>
      <div>${n}</div>
    </moz-card>
  </main>
`,l=o.bind({}),l.args={l10nId:`moz-card-heading`,content:`This is the content`},u=o.bind({}),u.args={...l.args,content:`This is the content`,headingLevel:3},d=o.bind({}),d.args={content:`This card only contains content`},f=o.bind({}),f.args={l10nId:`moz-card-heading`,content:`This is the content`,spacing:`compact`},p=o.bind({}),p.args={...l.args,content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Nunc velit turpis, mollis a ultricies vitae, accumsan ut augue.
  In a eros ac dolor hendrerit varius et at mauris.`,type:`accordion`},p.parameters={a11y:{config:{rules:[{id:`button-name`,reviewOnFail:!0},{id:`nested-interactive`,reviewOnFail:!0}]}}},m=o.bind({}),m.args={...p.args,expanded:!0},m.parameters=p.parameters,h=o.bind({}),h.args={l10nId:`moz-card-heading-with-icon`,content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Nunc velit turpis, mollis a ultricies vitae, accumsan ut augue.
  In a eros ac dolor hendrerit varius et at mauris.`,type:`default`,iconSrc:`chrome://global/skin/icons/settings.svg`},g=s.bind({}),g.args={l10nId:`moz-card-heading`,content:'Using an img tag with `slot="cover-image"` will use some default styles that can be overridden with CSS custom properties.'},_=c.bind({}),_.args={l10nId:`moz-card-heading`,content:`Custom content can be put into the cover-image slot, but you need to bring your own styles.`}})))()}v();export{p as Accordion,m as AccordionExpanded,f as Compact,d as Default,_ as WithCustomImage,l as WithHeading,h as WithHeadingIcon,u as WithHeadingLevel,g as WithImage,a as default};