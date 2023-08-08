/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { html, ifDefined } from "../vendor/lit.all.mjs";
import { MozLitElement } from "../lit-utils.mjs";

const messageTypeToIconData = {
  info: {
    iconSrc: "chrome://global/skin/icons/info-filled.svg",
    l10nId: "moz-message-bar-icon-info",
  },
  warning: {
    iconSrc: "chrome://global/skin/icons/warning.svg",
    l10nId: "moz-message-bar-icon-warning",
  },
  success: {
    iconSrc: "chrome://global/skin/icons/check-filled.svg",
    l10nId: "moz-message-bar-icon-success",
  },
  error: {
    iconSrc: "chrome://global/skin/icons/error.svg",
    l10nId: "moz-message-bar-icon-error",
  },
};

/**
 * A simple message bar element that can be used to display
 * important information to users.
 *
 * @tagname moz-message-bar
 * @property {string} type - The type of the displayed message.
 * @property {string} heading - The heading of the message.
 * @property {string} message - The message text.
 * @property {boolean} dismissable - Whether or not the element is dismissable.
 * @fires message-bar:close
 *  Custom event indicating that message bar was closed.
 *  @fires message-bar:user-dismissed
 *  Custom event indicating that message bar was dismissed by the user.
 */

export default class MozMessageBar extends MozLitElement {
  static queries = {
    actionsSlotEl: "slot[name=actions]",
    actionsEl: ".actions",
  };

  static properties = {
    type: { type: String },
    heading: { type: String },
    message: { type: String },
    dismissable: { type: Boolean },
  };

  // Use a relative URL in storybook to get faster reloads on style changes.
  static stylesheetUrl = window.IS_STORYBOOK
    ? "./moz-message-bar/moz-message-bar.css"
    : "chrome://global/content/elements/moz-message-bar.css";

  constructor() {
    super();
    MozXULElement.insertFTLIfNeeded("toolkit/global/mozMessageBar.ftl");
    this.type = "info";
    this.role = "status";
    this.dismissable = false;
  }

  onSlotchange(e) {
    let actions = this.actionsSlotEl.assignedNodes();
    this.actionsEl.classList.toggle("active", actions.length);
  }

  disconnectedCallback() {
    this.dispatchEvent(new CustomEvent("message-bar:close"));
  }

  iconTemplate() {
    let iconData = messageTypeToIconData[this.type];
    if (iconData) {
      let { iconSrc, l10nId } = iconData;
      return html`
        <div class="icon-container">
          <img
            class="icon"
            src=${iconSrc}
            data-l10n-id=${l10nId}
            data-l10n-attrs="alt"
          />
        </div>
      `;
    }
    return "";
  }

  headingTemplate() {
    if (this.heading) {
      return html`<strong class="heading">${this.heading}</strong>`;
    }
    return "";
  }

  closeButtonTemplate() {
    if (this.dismissable) {
      return html`
        <button
          class="close ghost-button"
          data-l10n-id="moz-message-bar-close-button"
          @click=${this.dismiss}
        ></button>
      `;
    }
    return "";
  }

  render() {
    return html`
      <link rel="stylesheet" href=${this.constructor.stylesheetUrl} />
      <div class="container">
        <div class="content">
          <div class="text-container">
            ${this.iconTemplate()}
            <div class="text-content">
              ${this.headingTemplate()}
              <span class="message">${ifDefined(this.message)}</span>
              <slot name="support-link"></slot>
            </div>
          </div>
          <span class="actions">
            <slot name="actions" @slotchange=${this.onSlotchange}></slot>
          </span>
        </div>
        ${this.closeButtonTemplate()}
      </div>
    `;
  }

  dismiss() {
    this.dispatchEvent(new CustomEvent("message-bar:user-dismissed"));
    this.close();
  }

  close() {
    this.remove();
  }
}

customElements.define("moz-message-bar", MozMessageBar);
