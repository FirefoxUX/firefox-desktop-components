import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,f as n,u as r}from"./lit.all-Co4HOUmF.js";import{n as i,t as a}from"./moz-input-text-DLpw4A6n.js";var o;function s(){return(s=e((()=>{o=``+new URL(`login-doorhanger-username-field-DvAW9Aic.css`,import.meta.url).href})))()}var c;function l(){return(l=e((()=>{s(),n(),i(),c=class extends a{static properties={autocompleteSearch:{type:String,attribute:`autocompletesearch`},autocompletePopup:{type:String,attribute:`autocompletepopup`},maxRows:{type:String,attribute:`maxrows`},maxDropmarkerRows:{type:String,attribute:`maxdropmarkerrows`},showDropmarker:{type:Boolean}};constructor(){super(),this.showDropmarker=!1}get inputEl(){return this.shadowRoot?.querySelector(`#input`)??null}get dropmarkerEl(){return this.shadowRoot?.querySelector(`.ac-dropmarker`)??null}#e(e){e.preventDefault()}#t(){this.dispatchEvent(new CustomEvent(`dropmarker-click`,{bubbles:!0}))}inputStylesTemplate(){return r`
      ${super.inputStylesTemplate()}
      <link
        rel="stylesheet"
        href="${o}"
      />
    `}inputTemplate(e={}){let{classes:n,styles:i,inputValue:a}=e;return r`
      <div
        class="autocomplete-container${this.showDropmarker?` has-dropmarker`:``}"
      >
        <input
          id="input"
          is="autocomplete-input"
          part="input"
          type="text"
          class=${t(n)}
          style=${t(i)}
          name=${this.name}
          .value=${a||this.value}
          ?disabled=${this.disabled||this.parentDisabled}
          ?readonly=${this.readonly}
          accesskey=${t(this.accessKey)}
          placeholder=${t(this.placeholder)}
          aria-label=${t(this.ariaLabel??void 0)}
          aria-describedby="description"
          aria-description=${t(this.hasDescription?void 0:this.ariaDescription)}
          title=${t(this.title)}
          autocompletesearch=${t(this.autocompleteSearch)}
          autocompletepopup=${t(this.autocompletePopup)}
          maxrows=${t(this.maxRows)}
          maxdropmarkerrows=${t(this.maxDropmarkerRows)}
          @input=${this.handleInput}
          @change=${this.redispatchEvent}
        />
        <span
          class="ac-dropmarker"
          ?hidden=${!this.showDropmarker}
          @mousedown=${this.#e}
          @click=${this.#t}
        ></span>
      </div>
    `}},customElements.define(`login-doorhanger-username-field`,c)})))()}var u,d,f,p;function m(){return(m=e((()=>{n(),l(),u={title:`Domain-specific UI Widgets/Credential Management/Doorhanger Username Field`,component:`login-doorhanger-username-field`,parameters:{status:`in-development`,handles:[`change`,`input`,`dropmarker-click`],fluent:`
login-doorhanger-username-label =
  .label = Username:
    `}},d=({name:e,value:n,disabled:i,l10nId:a,showDropmarker:o})=>r`
  <login-doorhanger-username-field
    name=${e}
    value=${t(n||null)}
    ?disabled=${i}
    ?showdropmarker=${o}
    data-l10n-id=${a}
  ></login-doorhanger-username-field>
`,f=d.bind({}),f.args={name:`doorhanger-username`,value:``,disabled:!1,l10nId:`login-doorhanger-username-label`,showDropmarker:!1},p=d.bind({}),p.args={...f.args,value:`user@example.com`,showDropmarker:!0}})))()}m();export{f as Default,p as WithDropmarker,u as default};