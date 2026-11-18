import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,u as n}from"./lit.all-Co4HOUmF.js";import{c as r,o as i}from"./iframe-DP8hlEO7.js";var a;function o(){return(o=e((()=>{a=new URL(`moz-slider-CnRr7m8O.css`,import.meta.url).href+``})))()}var s;function c(){return(c=e((()=>{o(),t(),r(),s=class extends i{static properties={min:{type:Number},max:{type:Number},value:{type:Number},ticks:{type:Number},tickLabels:{type:Array,attribute:`tick-labels`},label:{type:String},sliderIcon:{type:String,attribute:`slider-icon`}};static get queries(){return{tickMarks:`datalist`,sliderTrack:`#inputSlider`}}constructor(){super(),this.ticks=0,this.tickLabels=[],this.sliderIcon=``}getStepSize(){return(this.max-this.min)/(this.ticks-1)}setupIcon(){return this.sliderIcon?n`<div class="icon-container">
        <img class="icon" role="presentation" src=${this.sliderIcon} />
      </div> `:``}ticksTemplate(){if(this.ticks>0){let e=[],t=this.min,r=this.getStepSize(),i=``;for(let a=0;a<this.ticks;a++){let o=``,s=``;this.tickLabels.length?a==0?(o=`inline-start-label`,s=this.tickLabels[0]):a==this.ticks-1&&(o=`inline-end-label`,s=this.tickLabels[1]):i=`no-tick-labels`,e.push(n`<option
            id=${o}
            value=${parseFloat(t).toFixed(2)}
            label=${s}
          ></option>`),t+=r}return n`
        <datalist id="slider-ticks" class=${i}>${e}</datalist>
      `}return``}handleChange(e){this.value=e.target.value,this.dispatchEvent(new CustomEvent(`slider-changed`,{detail:this.value}))}render(){return n`
      <link
        rel="stylesheet"
        href="${a}"
      />
      <div class="container">
        <label class="slider-label" for="inputSlider">${this.label}</label>
        ${this.setupIcon()}
        <div class="slider-container">
          <input
            id="inputSlider"
            max=${this.max}
            min=${this.min}
            step=${this.getStepSize()}
            type="range"
            .value=${this.value}
            list="slider-ticks"
            @change=${this.handleChange}
          />
          ${this.ticksTemplate()}
        </div>
      </div>
    `}},customElements.define(`moz-slider`,s)})))()}var l,u,d;function f(){return(f=e((()=>{t(),c(),l={title:`Domain-specific UI Widgets/Reader View/Slider`,component:`moz-slider`,argTypes:{},parameters:{status:`stable`,fluent:`moz-slider-label =
      .label = Slider test
      `}},u=({min:e,max:t,value:r,ticks:i,labelL10nId:a,sliderIcon:o})=>n`
  <moz-slider
    min=${e}
    max=${t}
    value=${r}
    ticks=${i}
    tick-labels='["Narrow", "Wide"]'
    data-l10n-id=${a}
    data-l10n-attrs="label"
    slider-icon=${o}
  ></moz-slider>
`,d=u.bind({}),d.args={min:0,max:4,value:2,ticks:9,labelL10nId:`moz-slider-label`,sliderIcon:`chrome://global/skin/icons/defaultFavicon.svg`}})))()}f();export{d as Default,l as default};