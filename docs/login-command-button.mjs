/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import {
  html,
  ifDefined,
  when,
} from "chrome://global/content/vendor/lit.all.mjs";
import { MozLitElement } from "chrome://global/content/lit-utils.mjs";

export default class LoginCommandButton extends MozLitElement {
  static get properties() {
    return {
      onClick: { type: Function, reflect: true },
      l10nId: { type: String },
      icon: { type: String },
      variant: { type: String },
      disabled: { type: Boolean, reflect: true },
      tooltip: { type: String },
    };
  }

  constructor() {
    super();
    this.l10nId = "";
    this.icon = "";
    this.variant = "";
    this.disabled = false;
    this.tooltip = "";
  }

  static stylesheetUrl = window.IS_STORYBOOK
    ? "./login-command-button.css"
    : "chrome://browser/content/aboutlogins/components/login-command-button.css";

  render() {
    return html`
      <link
        rel="stylesheet"
        href="chrome://global/skin/in-content/common.css"
      />
      <link rel="stylesheet" href=${this.constructor.stylesheetUrl} />

      <!-- Keeping the data-l10n-id in a separate span tag for the correct formatting of 
      img before the l10nid. Keeping it within the button will cause a different format and
      would require us to use background-image in the css which defeats the objective to make the
      component reusable. -->

      <button
        class=${this.variant}
        title=${ifDefined(this.tooltip)}
        ?disabled=${this.disabled}
        @click=${ifDefined(this.onClick)}
      >
        ${when(
          this.icon,
          () => html` <img src=${this.icon} role="presentation" /> `,
          () => null
        )}

        <!-- Keeping a class tag in the span element below primarily for the copy button
        so that when it is clicked, the text changes to the corresponding successfully 'copied-text'
        used in the css file. This change is made in login-item in Bug 1832680. -->

        <span
          class=${this.class}
          data-l10n-id=${when(
            this.variant.includes("icon"),
            () => "",
            () => this.l10nId
          )}
        ></span>
      </button>
    `;
  }
}

customElements.define("login-command-button", LoginCommandButton);
