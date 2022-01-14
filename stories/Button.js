const template = document.createElement('template');
template.innerHTML = `
<style>
button {
  background: rgba(0, 96, 223, 1);
  border: none;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 13px;
  weight: 600;
}
</style>
<button class="fds-primary-button"></button>`;


class Button extends HTMLElement {
  set label(value) {
    this._label = value;
    if (this.shadowRoot)
      this.shadowRoot.querySelector('.fds-primary-button').innerHTML = value;
  }
  
  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    const button = this.shadowRoot.querySelector("button");
    button.addEventListener("click", this.handleClick);
    this.label = this.getAttribute('label');
  }

  static get observedAttributes() {
    return ['label']; 
  }
  
  handleClick(e) {
    alert("Sup?");
  }
}

window.customElements.define('fds-button', Button);