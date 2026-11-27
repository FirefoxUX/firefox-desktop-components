import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{S as t,d as n,f as r,u as i}from"./lit.all-Co4HOUmF.js";import{c as a,o}from"./iframe-17211AdQ.js";var s;function c(){return(c=e((()=>{s=``+new URL(`common-CgWggj72.css`,import.meta.url).href})))()}var l;function u(){return(u=e((()=>{l=``+new URL(`login-command-button-DJ6jndfc.css`,import.meta.url).href})))()}var d,f,p,m,h,g,_;function v(){return(v=e((()=>{c(),u(),r(),a(),d=()=>i`<link
      rel="stylesheet"
      href="${s}"
    />
    <link
      rel="stylesheet"
      href="${l}"
    />`,f=({onClick:e,l10nId:t,icon:r,variant:a,disabled:o,buttonText:s})=>i`<button
    class=${a}
    data-l10n-id=${n(t)}
    ?disabled=${o}
    @click=${n(e)}
  >
    <img src=${n(r)} role="presentation" />

    <span data-l10n-id=${n(s)}></span>
  </button>`,p=class extends o{static get properties(){return{disabled:{type:Boolean,reflect:!0}}}constructor(){super(),this.disabled=!1}render(){return i`
      ${d()}
      ${f({l10nId:`create-login-button`,variant:`icon-button`,icon:`chrome://global/skin/icons/plus.svg`,disabled:this.disabled})}
    `}},m=class extends o{static get properties(){return{disabled:{type:Boolean,reflect:!0}}}constructor(){super(),this.disabled=!1}render(){return i`
      ${d()}
      ${f({buttonText:`login-item-edit-button`,variant:`ghost-button`,icon:`chrome://global/skin/icons/edit.svg`,disabled:this.disabled})}
    `}},h=class extends o{static get properties(){return{disabled:{type:Boolean,reflect:!0},perDeviceSyncEnabled:{type:Boolean}}}constructor(){super(),this.disabled=!1,this.perDeviceSyncEnabled=!1}render(){return i` ${d()}
    ${f({buttonText:this.perDeviceSyncEnabled?`about-logins-login-item-delete-button`:`about-logins-login-item-remove-button`,variant:`ghost-button`,icon:`chrome://global/skin/icons/delete.svg`,disabled:this.disabled})}`}},g=class extends o{static get properties(){return{copiedText:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0}}}constructor(){super(),this.copiedText=!1,this.disabled=!1}render(){return this.className=this.copiedText?`copied-button`:`copy-button`,i` ${d()}
    ${t(this.copiedText,()=>i`${f({buttonText:`login-item-copied-username-button-text`,icon:`chrome://global/skin/icons/check.svg`,disabled:this.disabled})}`,()=>i`${f({variant:`text-button`,buttonText:`login-item-copy-username-button-text`,disabled:this.disabled})}`)}`}},_=class extends o{static get properties(){return{copiedText:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0}}}constructor(){super(),this.copiedText=!1,this.disabled=!1}render(){return this.className=this.copiedText?`copied-button`:`copy-button`,i` ${d()}
    ${t(this.copiedText,()=>i`${f({buttonText:`login-item-copied-password-button-text`,icon:`chrome://global/skin/icons/check.svg`,disabled:this.disabled})}`,()=>i`${f({variant:`text-button`,buttonText:`login-item-copy-password-button-text`,disabled:this.disabled})}`)}`}},customElements.define(`copy-password-button`,_),customElements.define(`copy-username-button`,g),customElements.define(`delete-button`,h),customElements.define(`edit-button`,m),customElements.define(`create-login-button`,p)})))()}var y,b,x,S,C,w,T;function E(){return(E=e((()=>{r(),v(),y={Edit:`login-item-edit-button`,"Copy Username":`login-item-copy-username-button-text`,"Copy Password":`login-item-copy-password-button-text`,Remove:`about-logins-login-item-remove-button`},b={Edit:`chrome://global/skin/icons/edit.svg`,"Copy Username":`chrome://global/skin/icons/edit-copy.svg`,"Copy Password":`chrome://global/skin/icons/edit-copy.svg`,Remove:`chrome://global/skin/icons/delete.svg`},x={Regular:``,Danger:`primary danger-button`,Primary:`primary`,Icon:`ghost-button icon-button`},S={title:`Domain-specific UI Widgets/Credential Management/Command Button`,component:`login-command-button`,argTypes:{l10nId:{options:Object.keys(y),mapping:y,control:{type:`select`},defaultValue:`Edit`},icon:{options:Object.keys(b),mapping:b,control:{type:`select`},defaultValue:`Edit`},variant:{options:Object.keys(x),mapping:x,control:{type:`select`},defaultValue:`Regular`}}},window.MozXULElement.insertFTLIfNeeded(`browser/aboutLogins.ftl`),C=({onClick:e,l10nId:t,icon:n,variant:r,disabled:a,tooltip:o})=>i`
    <login-command-button
      .onClick=${e}
      .l10nId=${t}
      .icon=${n}
      .variant=${r}
      .disabled=${a}
      .tooltip=${o}
    >
    </login-command-button>
  `,w=C.bind({}),w.args={onClick:()=>alert(`I work Woohoo!!`),l10nId:`login-item-edit-button`,icon:`chrome://global/skin/icons/edit.svg`,variant:``,disabled:!1,tooltip:`Lorem ipsum dolor`},T=C.bind({}),T.args={onClick:()=>alert(`I shouldn't be working...`),l10nId:`login-item-edit-button`,icon:`chrome://global/skin/icons/edit.svg`,variant:``,disabled:!0,tooltip:`Lorem ipsum dolor`}})))()}E();export{T as DisabledButton,w as WorkingButton,S as default};