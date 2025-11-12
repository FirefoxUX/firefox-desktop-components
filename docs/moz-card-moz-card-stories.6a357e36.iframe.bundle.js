"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[48,6670],{

/***/ 23321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Accordion: () => (/* binding */ Accordion),
/* harmony export */   AccordionExpanded: () => (/* binding */ AccordionExpanded),
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   WithHeading: () => (/* binding */ WithHeading),
/* harmony export */   WithHeadingIcon: () => (/* binding */ WithHeadingIcon),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11540);
/* harmony import */ var _moz_card_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30048);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// eslint-disable-next-line import/no-unresolved


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "UI Widgets/Card",
  component: "moz-card",
  parameters: {
    status: "stable",
    fluent: `
moz-card-heading =
  .heading = This is the label
moz-card-heading-with-icon =
  .heading = This is a card with a heading icon
    `
  },
  argTypes: {
    type: {
      options: ["default", "accordion"],
      control: {
        type: "select"
      }
    },
    expanded: {
      options: [true, null],
      control: {
        type: "radio",
        labels: {
          true: "True",
          null: "False"
        }
      },
      if: {
        arg: "type",
        eq: "accordion"
      }
    }
  }
});
const Template = ({
  l10nId,
  content,
  type,
  iconSrc,
  expanded
}) => (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <style>
    main {
      max-width: 400px;
    }
  </style>
  <main>
    <moz-card
      type=${(0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(type)}
      iconSrc=${(0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(iconSrc)}
      data-l10n-id=${(0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(l10nId)}
      expanded=${(0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(expanded)}
    >
      <div>${content}</div>
    </moz-card>
  </main>
`;
const WithHeading = Template.bind({});
WithHeading.args = {
  l10nId: "moz-card-heading",
  content: "This is the content"
};
const Default = Template.bind({});
Default.args = {
  content: "This card only contains content"
};
const Accordion = Template.bind({});
Accordion.args = {
  ...WithHeading.args,
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Nunc velit turpis, mollis a ultricies vitae, accumsan ut augue.
  In a eros ac dolor hendrerit varius et at mauris.`,
  type: "accordion"
};
Accordion.parameters = {
  a11y: {
    config: {
      rules: [
      /*
      The accordion card can be expanded either by the chevron icon
      button or by activating the details element. Mouse users can
      click on the chevron button or the details element, while
      keyboard users can tab to the details element and have a
      focus ring around the details element in the card.
      Additionally, the details element is announced as a button
      so I don't believe we are providing a degraded experience
      to non-mouse users.
       Bug 1854008: We should probably make the accordion button a
      clickable div or something that isn't announced to screen
      readers.
      */
      {
        id: "button-name",
        reviewOnFail: true
      }, {
        id: "nested-interactive",
        reviewOnFail: true
      }]
    }
  }
};
const AccordionExpanded = Template.bind({});
AccordionExpanded.args = {
  ...Accordion.args,
  expanded: true
};
AccordionExpanded.parameters = Accordion.parameters;
const WithHeadingIcon = Template.bind({});
WithHeadingIcon.args = {
  l10nId: "moz-card-heading-with-icon",
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Nunc velit turpis, mollis a ultricies vitae, accumsan ut augue.
  In a eros ac dolor hendrerit varius et at mauris.`,
  type: "default",
  iconSrc: "chrome://global/skin/icons/settings.svg"
};

/***/ }),

/***/ 30048:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozCard)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_card_moz_card_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44170);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11540);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48334);

/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*-
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * Cards contain content and actions about a single subject.
 * There are two card types:
 * The default type where no type attribute is required and the card
 * will have no extra functionality.
 *
 * The "accordion" type will initially not show any content. The card
 * will contain an arrow to expand the card so that all of the content
 * is visible. You can use the "expanded" attribute to force the accordion
 * card to show its content on initial render.
 *
 * @property {string} heading - The heading text that will be used for the card.
 * @property {string} iconSrc - Path to the icon that should be displayed in the card.
 * @property {string} type - (optional) The type of card. No type specified
 *   will be the default card. The other available type is "accordion"
 * @property {boolean} expanded - A flag to indicate whether the card is
 *  expanded or not. Can be used to expand the content section of the
 *  accordion card on initial render.
 * @slot content - The content to show inside of the card.
 */
class MozCard extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static queries = {
    detailsEl: "#moz-card-details",
    headingEl: "#heading",
    contentEl: "#content",
    summaryEl: "summary",
    contentSlotEl: "#content-slot"
  };
  static properties = {
    heading: {
      type: String,
      fluent: true
    },
    iconSrc: {
      type: String
    },
    type: {
      type: String,
      reflect: true
    },
    expanded: {
      type: Boolean
    }
  };
  constructor() {
    super();
    this.type = "default";
    this.expanded = false;
  }
  headingTemplate() {
    if (!this.heading) {
      return "";
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <div id="heading-wrapper" part="moz-card-heading-wrapper">
        ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.when)(this.type == "accordion", () => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div class="chevron-icon"></div>`)}
        ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.when)(!!this.iconSrc, () => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<img
              id="heading-icon"
              src=${this.iconSrc}
              role="presentation"
            />`)}
        <span id="heading" title=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.heading)} part="heading"
          >${this.heading}</span
        >
      </div>
    `;
  }
  cardTemplate() {
    if (this.type === "accordion") {
      return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
        <details
          id="moz-card-details"
          @toggle=${this.onToggle}
          ?open=${this.expanded}
        >
          <summary part="summary">${this.headingTemplate()}</summary>
          <div id="content"><slot id="content-slot"></slot></div>
        </details>
      `;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <div id="moz-card-details">
        ${this.headingTemplate()}
        <div id="content" aria-describedby="content">
          <slot></slot>
        </div>
      </div>
    `;
  }
  onToggle() {
    this.expanded = this.detailsEl.open;
    this.dispatchEvent(new ToggleEvent("toggle", {
      newState: this.detailsEl.open ? "open" : "closed",
      oldState: this.detailsEl.open ? "closed" : "open"
    }));
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_card_moz_card_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <article
        class="moz-card"
        aria-labelledby=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.heading ? "heading" : undefined)}
      >
        ${this.cardTemplate()}
      </article>
    `;
  }
}
customElements.define("moz-card", MozCard);

/***/ }),

/***/ 44170:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-card.d302a3911a68d76f2067.css";

/***/ })

}]);
//# sourceMappingURL=moz-card-moz-card-stories.6a357e36.iframe.bundle.js.map