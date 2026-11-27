import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,u as n}from"./lit.all-Co4HOUmF.js";import{c as r,o as i}from"./iframe-17211AdQ.js";var a;function o(){return(o=e((()=>{a=``+new URL(`private-browsing-mask-intro-T-cQCr4D.css`,import.meta.url).href})))()}var s;function c(){return(c=e((()=>{o(),t(),r(),s=class extends i{static properties={play:{type:Boolean}};constructor(){super(),this.play=!1}render(){return n`
      <link
        rel="stylesheet"
        href="${a}"
      />
      <div class="circle ${this.play?`playing`:``}">
        <div class="kit"></div>
        <div class="mask"></div>
      </div>
    `}},customElements.define(`private-browsing-mask-intro`,s)})))()}var l,u,d;function f(){return(f=e((()=>{t(),c(),l={title:`Domain-specific UI Widgets/Private Browsing Window/Kit Intro Animation`,component:`private-browsing-mask-intro`,parameters:{docs:{description:{component:'The one-time "kit" intro on the private-browsing mask. With `play`, the kit\nbounces inside the circular window then drops out as the mask fades in; without it,\nonly the mask shows. In the product it is gated behind `browser.privateWindowRedesign.enabled`\nand shown once per profile; Storybook always renders it. Toggle **play** to replay.'}}},argTypes:{play:{control:`boolean`,description:`Play the intro (vs. render the final resting state).`}},args:{play:!0}},u=({play:e})=>n`
  <div style="padding: 24px;">
    <private-browsing-mask-intro .play=${e}></private-browsing-mask-intro>
  </div>
`,d=u.bind({}),d.args={play:!0}})))()}f();export{d as KitIntro,l as default};