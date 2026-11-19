import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{_ as t,f as n,u as r}from"./lit.all-Co4HOUmF.js";import{c as i,o as a}from"./iframe-CEh6YfCk.js";var o;function s(){return(s=e((()=>{o=new URL(`memories-icon-button-BM_agUSu.css`,import.meta.url).href+``})))()}var c;function l(){return(l=e((()=>{s(),n(),i(),c=class extends a{static shadowRootOptions={...a.shadowRootOptions,delegatesFocus:!0};static properties={pressed:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},show:{type:Boolean,reflect:!0}};#e(){this.pressed=!this.pressed,this.dispatchEvent(new CustomEvent(`aiwindow-memories-toggle:on-change`,{bubbles:!0,composed:!0,detail:{pressed:this.pressed}}))}willUpdate(){this.toggleAttribute(`hidden`,!this.show)}render(){if(!this.show)return t;let e=String(this.pressed),n=this.pressed?`chrome://browser/content/aiwindow/assets/memories-on.svg`:`chrome://browser/content/aiwindow/assets/memories-off.svg`,i=this.pressed?`aiwindow-memories-on`:`aiwindow-memories-off`;return r`
      <link
        rel="stylesheet"
        href="${o}"
      />
      <moz-button
        ?disabled=${this.disabled}
        data-l10n-id=${i}
        data-l10n-attrs="tooltiptext,aria-label"
        type="ghost"
        class="memories-icon-button"
        size="default"
        iconsrc=${n}
        iconposition="start"
        aria-pressed=${e}
        @click=${e=>this.#e(e)}
      ></moz-button>
    `}},customElements.define(`memories-icon-button`,c)})))()}var u,d,f,p,m;function h(){return(h=e((()=>{n(),l(),u={title:`Domain-specific UI Widgets/AI Window/Memories Icon Button`,component:`memories-icon-button`,argTypes:{pressed:{control:{type:`boolean`}},show:{control:{type:`boolean`}}},parameters:{fluent:`
aiwindow-memories-on =
  .tooltiptext = Memories on
aiwindow-memories-off =
  .tooltiptext = Memories off
    `}},d=({pressed:e,show:t})=>r`
  <memories-icon-button
    ?pressed=${e}
    ?show=${t}
  ></memories-icon-button>
`,f=d.bind({}),f.args={pressed:!0,show:!0},p=d.bind({}),p.args={pressed:!1,show:!0},m=d.bind({}),m.args={pressed:!1,show:!1}})))()}h();export{m as Hidden,f as Pressed,p as Unpressed,u as default};