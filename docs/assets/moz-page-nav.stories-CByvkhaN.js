import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{S as t,d as n,f as r,u as i}from"./lit.all-Co4HOUmF.js";import{t as a}from"./moz-page-nav-D7zCl6Ff.js";var o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{r(),a(),o={title:`UI Widgets/Page Nav`,component:`moz-page-nav`,parameters:{status:`stable`,actions:{handles:[`change-view`]},fluent:`
moz-page-nav-button-one = View 1
  .title = View 1
moz-page-nav-button-two = View 2
  .title = View 2
moz-page-nav-button-three = View 3
  .title = View 3
moz-page-nav-button-four = Support Link
  .title = Support Link
moz-page-nav-button-five = External Link
  .title = External Link
moz-page-nav-heading =
  .heading = Heading
moz-page-nav-search-input =
  .aria-label = Search Storybook
  .placeholder = Search Storybook
     `}},s=({hasFooterLinks:e,hasIcons:r,showSearch:a,type:o=``,customHeight:s=`initial`,alwaysExpanded:c})=>{let l=r?`chrome://global/skin/icons/settings.svg`:void 0;return i`
    <style>
      #page {
        height: ${s};
        display: flex;
        max-height: ${s};

        @media (max-width: 52rem) {
          grid-template-columns: 82px 1fr;
        }
      }
      moz-page-nav:not([type="mobile"]) {
        height: ${s};
        margin-inline-start: 10px;
        --page-nav-margin-block-start: 10px;

        &:not([alwaysexpanded]) {
          @media (max-width: 52rem) {
            margin-inline-start: 0;
          }
        }
      }
    </style>
    <div id="page">
      <moz-page-nav
        data-l10n-id="moz-page-nav-heading"
        type=${n(o)}
        ?alwaysexpanded=${c}
      >
        ${t(a,()=>i`<moz-input-search
              slot="subheading"
              data-l10n-id="moz-page-nav-search-input"
            ></moz-input-search>`)}
        <moz-page-nav-button
          view="view-one"
          data-l10n-id="moz-page-nav-button-one"
          iconSrc=${n(l)}
        >
        </moz-page-nav-button>
        <moz-page-nav-button
          view="view-two"
          data-l10n-id="moz-page-nav-button-two"
          iconSrc=${n(l)}
        >
        </moz-page-nav-button>
        <moz-page-nav-button
          view="view-three"
          data-l10n-id="moz-page-nav-button-three"
          iconSrc=${n(l)}
        >
        </moz-page-nav-button>
        ${t(e,()=>i` <moz-page-nav-button
                support-page="test"
                data-l10n-id="moz-page-nav-button-four"
                iconSrc=${n(l)}
                slot="secondary-nav"
              >
              </moz-page-nav-button>
              <moz-page-nav-button
                href="https://www.example.com"
                data-l10n-id="moz-page-nav-button-five"
                iconSrc=${n(l)}
                slot="secondary-nav"
              >
              </moz-page-nav-button>`)}
      </moz-page-nav>
      <main></main>
    </div>
  `},c=s.bind({}),c.args={hasFooterLinks:!1,hasIcons:!0,showSearch:!1,customHeight:`100%`,alwaysExpanded:!1},l=s.bind({}),l.args={...c.args,hasFooterLinks:!0,customHeight:`100%`},u=s.bind({}),u.args={...c.args,hasIcons:!1,customHeight:`100%`},d=s.bind({}),d.args={...c.args,showSearch:!0,customHeight:`100%`},f=s.bind({}),f.args={...c.args,showSearch:!0,customHeight:`190px`},p=s.bind({}),p.args={...c.args,alwaysExpanded:!0},m=s.bind({}),m.args={type:`mobile`}})))()}h();export{c as Default,m as Mobile,l as WithFooterLinks,d as WithSearch,f as WithSearchScroll,p as WithoutCollapsing,u as WithoutIcons,o as default};