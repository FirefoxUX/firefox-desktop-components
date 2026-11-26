import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{_ as t,f as n,u as r}from"./lit.all-Co4HOUmF.js";import{c as i,l as a,o,u as s}from"./iframe-DUPCaqkc.js";import{t as c}from"./moz-textarea-CdBkhW9D.js";import{n as l}from"./moz-button-DlJZ5I-w.js";var u;function d(){return(d=e((()=>{u=``+new URL(`ai-clarifying-question-CuicGgFd.css`,import.meta.url).href})))()}var f,p,m,h;function g(){return(g=e((()=>{a(),d(),n(),i(),l(),c(),f=`ai-clarifying-question:answer`,p=`ai-clarifying-question:close`,m=500,h=class extends o{static properties={questions:{type:Array},currentIndex:{type:Number},maxCustomAnswerLength:{type:Number},customAnswer:{type:String,state:!0}};static queries={customAnswerInput:`moz-textarea`};constructor(){super(),this.questions=[],this.currentIndex=0,this.maxCustomAnswerLength=m,this.customAnswer=``}#e=null;willUpdate(){let e=`${this.currentIndex}:${this.currentQuestion?.id}`;e!=this.#e&&(this.#e=e,this.customAnswer=``)}get currentQuestion(){return this.questions?.[this.currentIndex]??null}get#t(){return this.customAnswer.trim()}#n(e,t){this.dispatchEvent(new CustomEvent(f,{bubbles:!0,composed:!0,detail:{questionId:this.currentQuestion?.id??null,questionIndex:this.currentIndex,optionId:e,text:t}}))}handleOptionClick(e){this.#n(e.id,e.label)}handleCustomAnswerInput(e){this.customAnswer=e.target.value}handleCustomAnswerKeydown(e){e.key==`Enter`&&!e.shiftKey&&!e.isComposing&&(e.preventDefault(),this.#t&&this.handleSendOrSkip())}handleSendOrSkip(){this.#n(null,this.#t)}handleCustomAnswerIconClick(){this.customAnswerInput.focus()}handleClose(){this.dispatchEvent(new CustomEvent(p,{bubbles:!0,composed:!0,detail:{questionId:this.currentQuestion?.id??null,questionIndex:this.currentIndex}}))}optionTemplate(e,n){return r`
      <li>
        <button
          type="button"
          class="option"
          ?data-recommended=${e.recommended}
          @click=${()=>this.handleOptionClick(e)}
        >
          <span class="option-number" aria-hidden="true">${n+1}</span>
          <span class="option-text">
            ${e.recommended?r`<span
                  class="recommended-badge"
                  data-l10n-id="ai-clarifying-question-recommended"
                ></span>`:t}
            <span class="option-label">${e.label}</span>
            ${e.description?r`<span class="option-description"
                  >${e.description}</span
                >`:t}
          </span>
          ${e.recommended?r`<img
                class="option-arrow"
                src="chrome://global/skin/icons/shaft-arrow-right.svg"
                alt=""
              />`:t}
        </button>
      </li>
    `}render(){let e=this.currentQuestion;if(!e)return t;let n=!!this.#t;return r`
      <link
        rel="stylesheet"
        href="${s}"
      />
      <link
        rel="stylesheet"
        href="${u}"
      />
      <moz-button
        class="close-button"
        type="ghost icon"
        size="small"
        iconSrc="resource://content-accessible/close-12.svg"
        data-l10n-id="ai-clarifying-question-close"
        @click=${this.handleClose}
      ></moz-button>
      <div class="ai-clarifying-question-wrapper">
        <div class="question-header">
          <p
            class="question-progress text-deemphasized"
            data-l10n-id="ai-clarifying-question-progress"
            data-l10n-args=${JSON.stringify({current:this.currentIndex+1,total:this.questions.length})}
          ></p>
          <h2 class="question-text" id="question-text">${e.question}</h2>
        </div>
        <ol class="options" aria-labelledby="question-text">
          ${e.options?.map((e,t)=>this.optionTemplate(e,t))}
        </ol>
        <div class="custom-answer">
          <img
            class="custom-answer-icon"
            src="chrome://global/skin/icons/edit-outline.svg"
            alt=""
            @click=${this.handleCustomAnswerIconClick}
          />
          <moz-textarea
            class="custom-answer-input"
            rows="1"
            data-l10n-id="ai-clarifying-question-custom-answer"
            .value=${this.customAnswer}
            .maxLength=${this.maxCustomAnswerLength}
            @input=${this.handleCustomAnswerInput}
            @keydown=${this.handleCustomAnswerKeydown}
          ></moz-textarea>
          <moz-button
            class="custom-answer-button"
            type="ghost"
            data-l10n-id=${n?`ai-clarifying-question-send`:`ai-clarifying-question-skip`}
            @click=${this.handleSendOrSkip}
          ></moz-button>
        </div>
      </div>
    `}},customElements.define(`ai-clarifying-question`,h)})))()}export{g as t};