import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,u as n}from"./lit.all-BYVOqvrj.js";import{c as r,o as i}from"./iframe-DZPZZ1s7.js";import{t as a}from"./moz-checkbox-D01KRVrO.js";var o;function s(){return(s=e((()=>{o=new URL(`ai-website-select-DIRh_NDF.css`,import.meta.url).href+``})))()}var c,l;function u(){return(u=e((()=>{s(),t(),r(),a(),c=`ai-website-select:change`,l=class extends i{static properties={token:{type:String},linkedPanel:{type:String},label:{type:String},iconSrc:{type:String},url:{type:String},checked:{type:Boolean,reflect:!0}};constructor(){super(),this.token=``,this.linkedPanel=``,this.label=``,this.iconSrc=``,this.url=``,this.checked=!1}handleCheckboxChange(e){e.stopPropagation();let t=e.target.checked,n=new CustomEvent(c,{bubbles:!0,composed:!0,cancelable:!0,detail:{token:this.token,linkedPanel:this.linkedPanel,label:this.label,url:this.url,iconSrc:this.iconSrc,checked:t}});this.dispatchEvent(n),n.defaultPrevented||(this.checked=t)}setChecked(e){if(this.checked===e)return;let t=new CustomEvent(c,{bubbles:!0,composed:!0,cancelable:!0,detail:{token:this.token,linkedPanel:this.linkedPanel,label:this.label,url:this.url,iconSrc:this.iconSrc,checked:e}});this.dispatchEvent(t),t.defaultPrevented||(this.checked=e)}render(){return n`
      <link
        rel="stylesheet"
        href="${o}"
      />

      <moz-checkbox
        class="website-select-checkbox text-truncated-ellipsis"
        .checked=${this.checked}
        @change=${this.handleCheckboxChange}
        name=${this.linkedPanel}
        value=${this.linkedPanel}
        label=${this.label}
        iconSrc=${this.iconSrc||`chrome://global/skin/icons/defaultFavicon.svg`}
        aria-label=${this.label}
      ></moz-checkbox>
    `}},customElements.define(`ai-website-select`,l)})))()}export{u as t};