"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[2524,6670],{

/***/ 44170:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-card.e0ed46c3f102c4d631d3.css";

/***/ }),

/***/ 52524:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozCard)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_card_moz_card_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44170);
/* harmony import */ var toolkit_themes_shared_design_system_src_text_and_typography_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44311);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82242);


/* This Source Code Form is subject to the terms of the Mozilla Public
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
 * @property {number} headingLevel - Can be used to specify whether the heading is h1-h6 if not a regular span.
 * @property {string} iconSrc - Path to the icon that should be displayed in the card.
 * @property {string} type - (optional) The type of card. No type specified
 *   will be the default card. The other available type is "accordion"
 * @property {string} spacing - (optional) The level of spacing applied to the card. If unspecified,
 *   will use default spacing. The other available option is "compact", which has reduced spacing.
 * @property {boolean} expanded - A flag to indicate whether the card is
 *  expanded or not. Can be used to expand the content section of the
 *  accordion card on initial render.
 * @property {string} role - (optional) Role of the article element in the card.
 * @property {number} summaryTabIndex - (optional) tabindex for the accordion summary.
 * @slot content - The content to show inside of the card.
 */
class MozCard extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.MozLitElement {
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
    headingLevel: {
      type: Number
    },
    iconSrc: {
      type: String
    },
    type: {
      type: String,
      reflect: true
    },
    spacing: {
      type: String,
      reflect: true
    },
    expanded: {
      type: Boolean
    },
    role: {
      type: String,
      mapped: true
    },
    summaryTabIndex: {
      type: Number
    }
  };
  constructor() {
    super();
    this.type = "default";
    this.spacing = "default";
    this.expanded = false;
    /* When set to 1-6, it uses h1-h6 around the heading */
    this.headingLevel = 0;
  }
  headingTextTemplate() {
    const headingLevels = [(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.literal)`span`, (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.literal)`h1`, (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.literal)`h2`, (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.literal)`h3`, (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.literal)`h4`, (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.literal)`h5`, (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.literal)`h6`];
    const tagName = headingLevels[this.headingLevel] || headingLevels[0];
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.staticHtml)`<${tagName} id="heading" title=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.heading)} part="heading">${this.heading}</${tagName}>`;
  }
  headingTemplate() {
    if (!this.heading) {
      return "";
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      <div id="heading-wrapper" part="moz-card-heading-wrapper">
        ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.when)(this.type == "accordion", () => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<div class="chevron-icon"></div>`)}
        ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.when)(!!this.iconSrc, () => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<img
              id="heading-icon"
              src=${this.iconSrc}
              role="presentation"
            />`)}
        ${this.headingTextTemplate()}
      </div>
    `;
  }
  cardTemplate() {
    if (this.type === "accordion") {
      return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
        <div class="moz-card-wrapper">
          <div id="cover-image"><slot name="cover-image"></slot></div>
          <details
            id="moz-card-details"
            @toggle=${this.onToggle}
            ?open=${this.expanded}
          >
            <summary part="summary" tabindex=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.summaryTabIndex)}>
              ${this.headingTemplate()}
            </summary>
            <div id="content"><slot id="content-slot"></slot></div>
          </details>
        </div>
      `;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      <div id="moz-card-details">
        <div id="cover-image"><slot name="cover-image"></slot></div>
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
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      <link
        rel="stylesheet"
        href="${toolkit_themes_shared_design_system_src_text_and_typography_css__WEBPACK_IMPORTED_MODULE_1__}"
      />
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_card_moz_card_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <article
        role=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.role)}
        class="moz-card"
        aria-labelledby=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.heading ? "heading" : undefined)}
      >
        ${this.cardTemplate()}
      </article>
    `;
  }
}
customElements.define("moz-card", MozCard);

/***/ }),

/***/ 81957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Accordion: () => (/* binding */ Accordion),
/* harmony export */   AccordionExpanded: () => (/* binding */ AccordionExpanded),
/* harmony export */   Compact: () => (/* binding */ Compact),
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   WithCustomImage: () => (/* binding */ WithCustomImage),
/* harmony export */   WithHeading: () => (/* binding */ WithHeading),
/* harmony export */   WithHeadingIcon: () => (/* binding */ WithHeadingIcon),
/* harmony export */   WithHeadingLevel: () => (/* binding */ WithHeadingLevel),
/* harmony export */   WithImage: () => (/* binding */ WithImage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var _moz_card_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52524);
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
    spacing: {
      options: ["default", "compact"],
      control: {
        type: "select"
      }
    },
    headingLevel: {
      options: [1, 2, 3, 4, 5, 6],
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
  spacing,
  headingLevel,
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
      spacing=${(0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(spacing)}
      headingLevel=${(0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(headingLevel)}
      iconSrc=${(0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(iconSrc)}
      data-l10n-id=${(0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(l10nId)}
      expanded=${(0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(expanded)}
    >
      <div>${content}</div>
    </moz-card>
  </main>
`;
const TemplateWithImage = ({
  l10nId,
  content,
  type,
  spacing,
  headingLevel,
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
      spacing=${(0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(spacing)}
      headingLevel=${(0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(headingLevel)}
      iconSrc=${(0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(iconSrc)}
      data-l10n-id=${(0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(l10nId)}
      expanded=${(0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(expanded)}
    >
      <img
        src="https://firefox-settings-attachments.cdn.mozilla.net/main-workspace/newtab-wallpapers-v2/e1108381-5c19-4cb4-a630-69f9e45503fb.avif"
        alt
        slot="cover-image"
      />
      <div>${content}</div>
    </moz-card>
  </main>
`;
const TemplateWithLightDOMStyling = ({
  l10nId,
  content,
  type,
  spacing,
  headingLevel,
  iconSrc,
  expanded
}) => (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <style>
    main {
      max-width: 400px;
    }

    .custom-cover-image {
      width: 100%;
      height: 215px;
      border-radius: var(--border-radius-small);
    }
  </style>
  <main>
    <moz-card
      type=${(0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(type)}
      spacing=${(0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(spacing)}
      headingLevel=${(0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(headingLevel)}
      iconSrc=${(0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(iconSrc)}
      data-l10n-id=${(0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(l10nId)}
      expanded=${(0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(expanded)}
    >
      <picture slot="cover-image">
        <img
          src="https://firefox-settings-attachments.cdn.mozilla.net/main-workspace/newtab-wallpapers-v2/e1108381-5c19-4cb4-a630-69f9e45503fb.avif"
          alt
          class="custom-cover-image"
        />
      </picture>
      <div>${content}</div>
    </moz-card>
  </main>
`;
const WithHeading = Template.bind({});
WithHeading.args = {
  l10nId: "moz-card-heading",
  content: "This is the content"
};
const WithHeadingLevel = Template.bind({});
WithHeadingLevel.args = {
  ...WithHeading.args,
  content: "This is the content",
  headingLevel: 3
};
const Default = Template.bind({});
Default.args = {
  content: "This card only contains content"
};
const Compact = Template.bind({});
Compact.args = {
  l10nId: "moz-card-heading",
  content: "This is the content",
  spacing: "compact"
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
const WithImage = TemplateWithImage.bind({});
WithImage.args = {
  l10nId: "moz-card-heading",
  content: 'Using an img tag with `slot="cover-image"` will use some default styles that can be overridden with CSS custom properties.'
};
const WithCustomImage = TemplateWithLightDOMStyling.bind({});
WithCustomImage.args = {
  l10nId: "moz-card-heading",
  content: "Custom content can be put into the cover-image slot, but you need to bring your own styles."
};

/***/ })

}]);
//# sourceMappingURL=moz-card-moz-card-stories.2b75b21b.iframe.bundle.js.map