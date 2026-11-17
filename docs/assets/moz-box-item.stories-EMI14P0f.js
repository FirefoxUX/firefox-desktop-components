import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,f as n,u as r}from"./lit.all-Co4HOUmF.js";import{i}from"./moz-box-group-Cu7hxXEv.js";var a,o,s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{n(),i(),a={title:`UI Widgets/Box Item`,component:`moz-box-item`,argTypes:{l10nId:{options:[`moz-box-item-label`,`moz-box-item-label-long`,`moz-box-item-label-description`,`moz-box-item-label-description-long`],control:{type:`select`}},iconSrc:{options:[``,`chrome://global/skin/icons/info.svg`,`chrome://global/skin/icons/highlights.svg`,`chrome://global/skin/icons/warning.svg`,`chrome://global/skin/icons/heart.svg`,`chrome://global/skin/icons/edit.svg`],control:{type:`select`}},layout:{options:[`default`,`medium-icon`,`large-icon`],control:{type:`select`}}},parameters:{status:`stable`,fluent:`
moz-box-item-label =
  .label = I'm a box item
moz-box-item-label-long =
  .label = Lorem ipsum dolor sit amet, consectetur adipiscing elit
moz-box-item-label-description =
  .label = I'm a box item
  .description = Some description of the item
moz-box-item-label-description-long =
  .label = Lorem ipsum dolor sit amet, consectetur adipiscing elit
  .description = Etiam leo est, condimentum ac tristique vitae, viverra nec sem.
moz-box-delete-action =
  .aria-label = Delete I'm a box item
moz-box-edit-action =
  .aria-label = Edit I'm a box item
moz-box-toggle-action =
  .aria-label = Toggle I'm a box item
moz-box-more-action =
  .aria-label = More options for I'm a box item
    `}},o=({l10nId:e,iconSrc:n,slottedContent:i,layout:a,slottedActions:o,slottedActionsStart:s,supportPage:c,slottedSupportLink:l,slottedDescription:u})=>r`
  <style>
    .container {
      width: 400px;
    }

    .slotted {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
    }

    img {
      width: 150px;
      margin-block-end: var(--space-large);
    }
  </style>
  <div class="container">
    <moz-box-item
      data-l10n-id=${e}
      iconsrc=${t(n)}
      layout=${t(a)}
      support-page=${t(c)}
    >
      ${i?r`<div class="slotted">
            <img
              src="resource://content-accessible/illustrations/security-error.svg"
              alt="Confused Kit is looking at an orange exclamation mark"
            />
            <span>This is an example message</span>
            <span class="text-deemphasized">
              Message description would go down here
            </span>
          </div>`:``}
      ${s?r`
            <moz-button
              iconsrc="chrome://global/skin/icons/delete.svg"
              data-l10n-id="moz-box-delete-action"
              slot="actions-start"
            ></moz-button>
          `:``}
      ${o?r`
            <moz-button
              iconsrc="chrome://global/skin/icons/edit-outline.svg"
              data-l10n-id="moz-box-edit-action"
              type="ghost"
              slot="actions"
            ></moz-button>
            <moz-toggle
              slot="actions"
              pressed
              data-l10n-id="moz-box-toggle-action"
            ></moz-toggle>
            <moz-button
              iconsrc="chrome://global/skin/icons/more.svg"
              data-l10n-id="moz-box-more-action"
              slot="actions"
            ></moz-button>
          `:``}
      ${l?r`<a slot="support-link" href="www.example.com">Click me!</a>`:``}
      ${u?r`<span slot="description"
            >This is a slotted description
            <a href="https://www.example.com" target="_blank">click me</a></span
          >`:``}
    </moz-box-item>
  </div>
`,s=o.bind({}),s.args={l10nId:`moz-box-item-label`,disabled:!1,iconSrc:``,slottedContent:!1,slottedActions:!1,slottedActionsStart:!1,supportPage:``,slottedDescription:!1,slottedSupportLink:!1,layout:`default`},c=o.bind({}),c.args={...s.args,l10nId:`moz-box-item-label-description`},l=o.bind({}),l.args={...c.args,iconSrc:`chrome://global/skin/icons/highlights.svg`},u=o.bind({}),u.args={slottedContent:!0},d=o.bind({}),d.args={...l.args,iconSrc:`chrome://global/skin/icons/info.svg`,layout:`large-icon`},f=o.bind({}),f.args={...l.args,iconSrc:`chrome://global/skin/icons/info.svg`,layout:`medium-icon`},p=o.bind({}),p.args={...s.args,slottedActions:!0},m=o.bind({}),m.args={...s.args,slottedActionsStart:!0},h=o.bind({}),h.args={...s.args,slottedDescription:!0},g=o.bind({}),g.args={...s.args,supportPage:`test`,iconSrc:`chrome://global/skin/icons/info.svg`},_=o.bind({}),_.args={...s.args,slottedSupportLink:!0}})))()}v();export{s as Default,d as LargeIconLayout,f as MediumIconLayout,c as WithDescription,l as WithIcon,m as WithSlottedActionAtTheStart,p as WithSlottedActions,u as WithSlottedContent,h as WithSlottedDescription,_ as WithSlottedSupportLink,g as WithSupportPage,a as default};