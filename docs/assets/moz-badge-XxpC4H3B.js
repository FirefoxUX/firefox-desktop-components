import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{d as n,f as r,u as i}from"./lit.all-Co4HOUmF.js";import{c as a,o}from"./iframe-ChCqHcnv.js";var s;function c(){return(c=e((()=>{s=new URL(`moz-badge-kO6ZiffN.css`,import.meta.url).href+``})))()}var l=t({MozBadge:()=>u}),u;function d(){return(d=e((()=>{c(),r(),a(),window.MozXULElement?.insertFTLIfNeeded(`toolkit/global/mozBadge.ftl`),u=class extends o{static properties={label:{type:String,fluent:!0},iconSrc:{type:String},title:{type:String,fluent:!0,mapped:!0},type:{type:String,reflect:!0}};constructor(){super(),this.label=``,this.type=`default`}get labelL10nId(){if(this.type==`beta`)return`moz-badge-beta2`;if(this.type==`new`)return`moz-badge-new2`}render(){return i`
      <link
        rel="stylesheet"
        href="${s}"
      />
      <div class="moz-badge" title=${n(this.title)}>
        ${this.iconSrc?i`<img class="moz-badge-icon" src=${this.iconSrc} role="presentation"></img>`:``}
        <span
          class="moz-badge-label"
          data-l10n-id=${n(this.label?null:this.labelL10nId)}
          >${this.label}</span
        >
      </div>
    `}},customElements.define(`moz-badge`,u)})))()}export{l as n,d as t};