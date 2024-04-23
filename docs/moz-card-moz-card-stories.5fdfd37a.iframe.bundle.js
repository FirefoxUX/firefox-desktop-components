"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[3919],{

/***/ 40436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozCard)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_card_moz_card_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48058);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1659);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68164);

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
 * is visible.
 *
 *
 * @property {string} heading - The heading text that will be used for the card.
 * @property {string} type - (optional) The type of card. No type specified
 *   will be the default card. The other available type is "accordion"
 * @slot content - The content to show inside of the card.
 */
class MozCard extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static queries = {
    detailsEl: "#moz-card-details",
    headingEl: "#heading",
    contentSlotEl: "#content",
  };

  static properties = {
    heading: { type: String },
    type: { type: String, reflect: true },
    expanded: { type: Boolean },
  };

  constructor() {
    super();
    this.expanded = false;
    this.type = "default";
  }

  headingTemplate() {
    if (!this.heading) {
      return "";
    }
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <div id="heading-wrapper">
        ${this.type == "accordion"
          ? chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html` <div class="chevron-icon"></div>`
          : ""}
        <span id="heading">${this.heading}</span>
      </div>
    `;
  }

  cardTemplate() {
    if (this.type === "accordion") {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
        <details id="moz-card-details">
          <summary>${this.headingTemplate()}</summary>
          <div id="content"><slot></slot></div>
        </details>
      `;
    }

    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      ${this.headingTemplate()}
      <div id="content" aria-describedby="content">
        <slot></slot>
      </div>
    `;
  }
  /**
   * Handles the click event on the chevron icon.
   *
   * Without this, the click event would be passed to
   * toggleDetails which would force the details element
   * to stay open.
   *
   * @memberof MozCard
   */
  onDetailsClick() {
    this.toggleDetails();
  }

  /**
   * @param {boolean} force - Used to force open or force close the
   * details element.
   * @memberof MozCard
   */
  toggleDetails(force) {
    this.detailsEl.open = force ?? !this.detailsEl.open;
  }

  render() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
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

/***/ 46767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardOnlyContent": () => (/* binding */ CardOnlyContent),
/* harmony export */   "CardTypeAccordion": () => (/* binding */ CardTypeAccordion),
/* harmony export */   "DefaultCard": () => (/* binding */ DefaultCard),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1659);
/* harmony import */ var _moz_card_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40436);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// eslint-disable-next-line import/no-unresolved

// eslint-disable-next-line import/no-unassigned-import


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "UI Widgets/Card",
  component: "moz-card",
  parameters: {
    status: "in-development",
    fluent: `
moz-card-heading =
  .heading = This is the label
    `,
  },
  argTypes: {
    type: {
      options: ["default", "accordion"],
      control: { type: "select" },
    },
  },
});

const Template = ({ l10nId, content, type }) => lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
  <main style="max-width: 400px">
    <moz-card
      type=${(0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(type)}
      data-l10n-id=${(0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(l10nId)}
      data-l10n-attrs="heading"
    >
      <div>${content}</div>
    </moz-card>
  </main>
`;

const DefaultCard = Template.bind({});
DefaultCard.args = {
  l10nId: "moz-card-heading",
  content: "This is the content",
};

const CardOnlyContent = Template.bind({});
CardOnlyContent.args = {
  content: "This card only contains content",
};

const CardTypeAccordion = Template.bind({});
CardTypeAccordion.args = {
  ...DefaultCard.args,
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Nunc velit turpis, mollis a ultricies vitae, accumsan ut augue.
  In a eros ac dolor hendrerit varius et at mauris.`,
  type: "accordion",
};
CardTypeAccordion.parameters = {
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
          reviewOnFail: true,
        },
        {
          id: "nested-interactive",
          reviewOnFail: true,
        },
      ],
    },
  },
};


/***/ }),

/***/ 48058:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-card.001e67d43593294f29ca.css";

/***/ })

}]);
//# sourceMappingURL=moz-card-moz-card-stories.5fdfd37a.iframe.bundle.js.map