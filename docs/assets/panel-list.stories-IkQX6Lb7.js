import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,f as n,u as r}from"./lit.all-Co4HOUmF.js";import{t as i}from"./panel-list-BjRbkL-2.js";var a,o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{i(),n(),a=[`n`,`w`,`e`,`c`,`b`],o={title:`UI Widgets/Panel List`,component:`panel-list`,argTypes:{accesskeys:{if:{arg:`showAccesskeys`,truthy:!0}}},parameters:{status:`stable`,actions:{handles:[`showing`,`shown`,`hidden`,`click`]},fluent:`
panel-list-item-one = Item One
panel-list-item-two = Item Two
panel-list-item-three = Item Three
panel-list-disabled = Disabled
panel-list-checked = Checked
panel-list-badged = Badged, look at me
panel-list-passwords = Passwords
panel-list-settings = Settings
submenu-item-one = Submenu Item One
submenu-item-two = Submenu Item Two
submenu-item-three = Submenu Item Three
    `}},s=({isOpen:e,items:n,wideAnchor:i,hasSubMenu:a,showAccesskeys:o,accesskeys:s})=>r`
  <style>
    panel-item[icon="passwords"]::part(button) {
      background-image: url("chrome://browser/skin/login.svg");
    }
    panel-item[icon="settings"]::part(button) {
      background-image: url("chrome://global/skin/icons/settings.svg");
    }
    moz-button {
      position: absolute;
    }
    moz-button::part(button) {
      background-image: url("chrome://global/skin/icons/more.svg");
    }
    moz-button[wide] {
      width: 400px !important;
    }
    .end {
      inset-inline-end: 30px;
    }

    .bottom {
      inset-block-end: 30px;
    }
  </style>
  ${e?``:r`
        <moz-button
          type="icon ghost"
          menuid="panel-list"
          ?wide=${i}
        ></moz-button>
        <moz-button
          type="icon ghost"
          class="end"
          menuid="panel-list"
          ?wide=${i}
        ></moz-button>
        <moz-button
          type="icon ghost"
          class="bottom"
          menuid="panel-list"
          ?wide=${i}
        ></moz-button>
        <moz-button
          type="icon ghost"
          class="bottom end"
          menuid="panel-list"
          ?wide=${i}
        ></moz-button>
      `}
  <panel-list
    id="panel-list"
    ?stay-open=${e}
    ?open=${e}
    ?min-width-from-anchor=${i}
  >
    ${n.map((e,n)=>{let i=a&&n==0,l=i?`example-sub-menu`:void 0;return e==`<hr>`?r` <hr /> `:r`
            <panel-item
              icon=${t(e.icon)}
              ?checked=${e.checked}
              ?disabled=${e.disabled}
              type=${t(e.checked?`checkbox`:void 0)}
              ?badged=${e.badged}
              badge-type=${t(e.badgeType)}
              data-l10n-id=${e.l10nId??e}
              submenu=${t(l)}
              accesskey=${t(o?s[n]:``)}
            >
              ${i?c():``}
            </panel-item>
          `})}
  </panel-list>
`,c=()=>r`
  <panel-list slot="submenu" id="example-sub-menu">
    <panel-item data-l10n-id="submenu-item-one"></panel-item>
    <panel-item data-l10n-id="submenu-item-two"></panel-item>
    <panel-item data-l10n-id="submenu-item-three"></panel-item>
  </panel-list>
`,l=s.bind({}),l.args={isOpen:!1,wideAnchor:!1,items:[`panel-list-item-one`,{l10nId:`panel-list-item-two`},`panel-list-item-three`,`<hr>`,{l10nId:`panel-list-disabled`,disabled:!0},{l10nId:`panel-list-checked`,checked:!0},{l10nId:`panel-list-badged`,badged:!0,icon:`settings`}],showAccesskeys:!1},u=s.bind({}),u.args={isOpen:!1,wideAnchor:!1,items:[{l10nId:`panel-list-passwords`,icon:`passwords`},{l10nId:`panel-list-settings`,icon:`settings`}]},d=s.bind({}),d.args={...l.args,wideAnchor:!1,isOpen:!0},f=s.bind({}),f.args={...l.args,wideAnchor:!0},p=s.bind({}),p.args={...l.args,hasSubMenu:!0},m=s.bind({}),m.args={...l.args,showAccesskeys:!0,accesskeys:a},h=s.bind({}),h.args={...l.args,items:[{l10nId:`panel-list-item-one`,badgeType:`new`},{l10nId:`panel-list-item-two`,badgeType:`beta`}]}})))()}g();export{u as Icons,d as Open,l as Simple,p as SubMenu,f as Wide,m as WithAccesskeys,h as WithBadge,o as default};