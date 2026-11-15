import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,f as n,u as r}from"./lit.all-BYVOqvrj.js";import{t as i}from"./moz-support-link-jyOtt3Py.js";import{t as a}from"./moz-message-bar-K8FJKRpt.js";var o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{n(),a(),i(),o=[`moz-message-bar-message`,`moz-message-bar-message-heading`,`moz-message-bar-message-heading-long`,`moz-message-bar-message-with-link`],s={title:`UI Widgets/Message Bar`,component:`moz-message-bar`,argTypes:{type:{options:[`info`,`warning`,`success`,`error`],control:{type:`select`}},l10nId:{options:o,control:{type:`select`}},heading:{table:{disable:!0}},message:{table:{disable:!0}}},parameters:{status:`stable`,fluent:`
moz-message-bar-message =
  .message = For your information message
moz-message-bar-message-heading =
  .heading = Heading
  .message = For your information message
moz-message-bar-message-heading-long =
  .heading = A longer heading to check text wrapping in the message bar
  .message = Some message that we use to check text wrapping. Some message that we use to check text wrapping.
moz-message-bar-button = Click me!
moz-message-bar-message-slot = This is a message inside of a slot that contains a <a data-l10n-name="moz-message-bar-link">link</a>
    `}},c=({type:e,heading:n,message:i,l10nId:a,dismissable:o,hasSupportLink:s,hasActionButton:c,hasSlottedMessage:l})=>r`
  <moz-message-bar
    type=${e}
    heading=${t(n)}
    message=${t(i)}
    data-l10n-id=${t(a)}
    ?dismissable=${o}
  >
    ${l?r` <span slot="message" data-l10n-id="moz-message-bar-message-slot"
          ><a
            data-l10n-name="moz-message-bar-link"
            href="http://example.com"
          ></a
        ></span>`:``}
    ${s?r`
          <a
            is="moz-support-link"
            support-page="addons"
            slot="support-link"
          ></a>
        `:``}
    ${c?r`
          <button data-l10n-id="moz-message-bar-button" slot="actions"></button>
        `:``}
  </moz-message-bar>
`,l=c.bind({}),l.args={type:`info`,l10nId:`moz-message-bar-message`,dismissable:!1,hasSupportLink:!1,hasActionButton:!1,hasSlottedMessage:!1},u=c.bind({}),u.args={type:`info`,l10nId:`moz-message-bar-message`,dismissable:!0,hasSupportLink:!1,hasActionButton:!1},d=c.bind({}),d.args={type:`info`,l10nId:`moz-message-bar-message`,dismissable:!1,hasSupportLink:!1,hasActionButton:!0},f=c.bind({}),f.args={type:`info`,l10nId:`moz-message-bar-message`,dismissable:!1,hasSupportLink:!0,hasActionButton:!1},p=c.bind({}),p.args={...l.args,l10nId:`moz-message-bar-message-heading`},m=c.bind({}),m.args={...l.args,hasSlottedMessage:!0}})))()}h();export{l as Default,u as Dismissable,d as WithActionButton,p as WithHeading,m as WithMessageSlot,f as WithSupportLink,s as default};