import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{_ as t,f as n,u as r}from"./lit.all-Co4HOUmF.js";import{c as i,o as a}from"./iframe-DP8hlEO7.js";var o;function s(){return(s=e((()=>{o=new URL(`aitab-image-DkHEAD-L.css`,import.meta.url).href+``})))()}var c;function l(){return(l=e((()=>{s(),n(),i(),c=class extends a{static properties={src:{type:String},alt:{type:String},failed:{type:Boolean,state:!0}};constructor(){super(),this.src=``,this.alt=``,this.failed=!1}willUpdate(e){e.has(`src`)&&(this.failed=!1)}render(){return!this.src||this.failed?t:r`
      <link
        rel="stylesheet"
        href="${o}"
      />
      <div class="aitab-image">
        <img
          class="aitab-image-img"
          src=${this.src}
          alt=${this.alt??``}
          loading="lazy"
          @error=${()=>this.failed=!0}
        />
      </div>
    `}},customElements.define(`aitab-image`,c)})))()}var u,d,f,p,m,h;function g(){return(g=e((()=>{n(),l(),u={title:`Domain-specific UI Widgets/AI Window/AI Tab Image`,component:`aitab-image`,argTypes:{src:{control:{type:`text`}},alt:{control:{type:`text`}},width:{control:{type:`number`}}}},d=({src:e,alt:t,width:n})=>r`
  <aitab-image
    style=${`inline-size: ${n}px`}
    src=${e}
    alt=${t}
  ></aitab-image>
`,f=`chrome://browser/content/aiwindow/assets/aitab-error-kit.svg`,p=d.bind({}),p.args={src:f,alt:`Smart Page illustration`,width:640},m=d.bind({}),m.args={src:f,alt:`Smart Page illustration`,width:374},h=d.bind({}),h.args={src:f,alt:`Smart Page illustration`,width:144}})))()}g();export{p as Large,m as Medium,h as Thumbnail,u as default};