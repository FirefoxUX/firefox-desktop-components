import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{d as n,f as r,g as i,i as a,u as o}from"./lit.all-BYVOqvrj.js";import{c as s,o as c}from"./iframe-DZPZZ1s7.js";import{n as l,r as u,t as d}from"./lit-select-control-B8fxcEmM.js";var f;function p(){return(p=e((()=>{f=new URL(`moz-visual-picker-item-CA5xUZg3.css`,import.meta.url).href+``})))()}var m=t({MozVisualPicker:()=>h,MozVisualPickerItem:()=>g}),h,g;function _(){return(_=e((()=>{p(),r(),u(),s(),h=class extends d{static childElementName=`moz-visual-picker-item`},customElements.define(`moz-visual-picker`,h),g=class extends l(c){static properties={label:{type:String,fluent:!0},description:{type:String,fluent:!0},ariaLabel:{type:String,fluent:!0,mapped:!0},title:{type:String,mapped:!0},imageSrc:{type:String},labelPosition:{type:String,reflect:!0}};static queries={itemEl:`.picker-item`,labelEl:`.label`,descriptionEl:`.description`};constructor(){super(),this.labelPosition=`inside`}click(){this.itemEl.click()}focus(){this.itemEl.focus()}blur(){this.itemEl.blur()}handleKeydown(e){(e.code==`Space`||e.code==`Enter`)&&(e.preventDefault(),this.handleClick(e))}handleClick(e){e.stopPropagation(),this.dispatchEvent(new Event(`click`,{bubbles:!0,composed:!0})),super.handleClick(),e.type===`click`&&this.focus(),this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}handleSlotchange(e){if(!this.label&&!this.ariaLabel){let t=e.target.assignedElements();this.itemEl.ariaLabelledByElements=t}}contentTemplate(){return!this.imageSrc&&(this.labelPosition==`outside`||!this.label&&!this.description)?o`<slot></slot>`:o`
      ${this.imageSrc?o`<img src=${this.imageSrc} role="presentation" part="image" />`:i}
      ${this.labelPosition==`outside`?i:this.textTemplate()}
    `}textTemplate(){if(!this.label)return``;let e=this.labelPosition==`outside`?o`<label class="label" id="label" for="picker-item"
            >${this.label}</label
          >`:o`<p class="label" id="label">${this.label}</p>`;return o`<div class="text-content">
      ${this.label?e:i}
      ${this.description?o`<p class="description" id="description">${this.description}</p>`:i}
    </div>`}render(){return o`
      <link
        rel="stylesheet"
        href="${f}"
      />
      <button
        id="picker-item"
        class=${a({"picker-item":!0,"image-item":this.imageSrc&&this.label})}
        role=${this.role}
        value=${this.value}
        aria-label=${n(this.ariaLabel)}
        aria-labelledby=${n(this.label&&!this.ariaLabel?`label`:void 0)}
        aria-describedby=${n(this.description&&this.label?`description`:void 0)}
        title=${n(this.title)}
        aria-checked=${this.role==`radio`?this.checked:i}
        aria-selected=${this.role==`option`?this.checked:i}
        tabindex=${this.itemTabIndex}
        ?checked=${this.checked}
        ?disabled=${this.isDisabled}
        @click=${this.handleClick}
        @keydown=${this.handleKeydown}
        @slotchange=${this.handleSlotchange}
      >
        ${this.contentTemplate()}
      </button>
      ${this.labelPosition==`outside`?this.textTemplate():i}
    `}},customElements.define(`moz-visual-picker-item`,g)})))()}export{m as n,_ as t};