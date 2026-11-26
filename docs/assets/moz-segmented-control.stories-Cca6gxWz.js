import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,f as n,u as r}from"./lit.all-Co4HOUmF.js";import{t as i}from"./moz-segmented-control-otGa3lNs.js";var a,o,s,c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{n(),i(),a=[`option1`,`option2`,`option3`],o=[`chrome://global/skin/icons/highlights.svg`,`chrome://global/skin/icons/delete.svg`,`chrome://global/skin/icons/defaultFavicon.svg`],s={default:e=>`control-option${e}`,long:e=>`control-long-option${e}`,icon:e=>`control-option${e}-icon-only`},c={title:`UI Widgets/Segmented Control`,component:`moz-segmented-control`,argTypes:{disabledItems:{options:a,control:{type:`check`}},size:{options:[`default`,`small`],control:{type:`radio`}},labels:{options:Object.keys(s),control:{type:`radio`}}},parameters:{actions:{handles:[`change`,`input`]},status:`stable`,fluent:`
control-option1 = Option 1
control-option2 = Option 2
control-option3 = Option 3
control-option1-icon-only =
  .aria-label = Highlights view
control-option2-icon-only =
  .aria-label = Delete view
control-option3-icon-only =
  .aria-label = Favorites view
control-long-option1 = Option with long label 1
control-long-option2 = Option with long label 2
control-long-option3 = Option with long label 3
`}},l=({className:e=``,value:n=a[0],name:i=`segmented-control`,showIcons:c=!1,disabled:l=!1,disabledItems:u=[],size:d=`default`,withDeck:f=!1,iconsOnly:p=!1,labels:m=`default`})=>r`
  ${f?r`
        <style>
          .deck-content {
            margin-top: 16px;
            padding: 16px;
            background: light-dark(#f0f0f0, #2a2a2e);
            border-radius: 8px;
          }
        </style>
      `:``}
  <style>
    .wide {
      width: 100%;
    }
    .narrow {
      width: 500px;
    }
  </style>
  <moz-segmented-control
    class=${e}
    name=${i}
    value=${n}
    ?disabled=${l}
    deck=${t(f?`example-deck`:void 0)}
  >
    ${a.map((e,n)=>r`
        <moz-segmented-control-item
          data-l10n-id=${s[m](n+1)}
          data-l10n-attrs=${p?`aria-label`:`label`}
          value=${e}
          size=${d}
          ?disabled=${u.includes(e)}
          iconSrc=${t(c||p?o[n]:void 0)}
        ></moz-segmented-control-item>
      `)}
  </moz-segmented-control>
  ${f?r`
        <named-deck id="example-deck" selected-view=${n}>
          ${a.map((e,t)=>r`
              <div name=${e} class="deck-content">
                <h3>Option ${t+1} Content</h3>
                <p>This is the content for option ${t+1}.</p>
              </div>
            `)}
        </named-deck>
      `:``}
`,u=l.bind({}),u.args={value:a[0],name:`segmented-control`,showIcons:!1,disabled:!1,disabledItems:[],size:`default`,withDeck:!1,iconsOnly:!1,labels:`default`},d=l.bind({}),d.args={...u.args,showIcons:!0},f=l.bind({}),f.args={...u.args,iconsOnly:!0,labels:`icon`},p=l.bind({}),p.args={...u.args,size:`small`},m=l.bind({}),m.args={...u.args,disabled:!0},h=l.bind({}),h.args={...u.args,disabledItems:[`option2`]},g=l.bind({}),g.args={...u.args,withDeck:!0,showIcons:!0},_=l.bind({}),_.args={...u.args,className:`wide`},v=l.bind({}),v.args={...u.args,className:`narrow`,labels:`long`}})))()}y();export{u as Default,m as Disabled,h as DisabledItem,f as IconsOnly,p as SmallSize,_ as Wide,v as WithEllipsizedLabel,d as WithIcons,g as WithNamedDeck,c as default};