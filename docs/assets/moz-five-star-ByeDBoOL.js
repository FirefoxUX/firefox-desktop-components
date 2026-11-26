import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{d as n,f as r,i,u as a}from"./lit.all-Co4HOUmF.js";import{c as o,o as s}from"./iframe-DUPCaqkc.js";var c;function l(){return(l=e((()=>{c=``+new URL(`moz-five-star-ZA_ELJHI.css`,import.meta.url).href})))()}var u=t({MozFiveStar:()=>d}),d;function f(){return(f=e((()=>{l(),r(),o(),window.MozXULElement?.insertFTLIfNeeded(`toolkit/global/mozFiveStar.ftl`),d=class extends s{static properties={rating:{type:Number,reflect:!0},title:{type:String},selectable:{type:Boolean}};constructor(){super(),this.rating=0,this.title=void 0,this.selectable=!1}static get queries(){return{starEls:{all:`.rating-star`},starsWrapperEl:`.stars`}}getStars(){let e=[],t=Math.round(this.rating*2)/2;for(let n=1;n<=5;n++)n<=t?e.push({rating:n,fill:`full`}):n-t===.5?e.push({rating:n,fill:`half`}):e.push({rating:n,fill:`empty`});return e}getStarElementRating(e){let t=e.getAttribute(`rating`)||``;return parseInt(t,10)}onClick(e){if(!this.selectable)return;let t=e.target;this.rating=this.getStarElementRating(t),this.dispatchEvent(new CustomEvent(`select`,{detail:{rating:this.rating}}))}render(){let{rating:e,selectable:t,title:r}=this,o=r||t;return a`
      <link
        rel="stylesheet"
        href="${c}"
      />
      <div
        class="stars"
        role="img"
        data-l10n-id=${n(o?void 0:`moz-five-star-rating`)}
        data-l10n-args=${n(o?void 0:JSON.stringify({rating:e}))}
      >
        ${this.getStars().map(({rating:e,fill:r})=>a`<span
            class=${i({"rating-star":!0,selectable:t})}
            fill=${r}
            rating=${e}
            @click=${this.onClick}
            data-l10n-id=${n(t?`moz-five-star-rating-rate-text`:void 0)}
            data-l10n-args=${n(t?JSON.stringify({rating:e}):void 0)}
          ></span>`)}
      </div>
    `}},customElements.define(`moz-five-star`,d)})))()}export{u as n,f as t};