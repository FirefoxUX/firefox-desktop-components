"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[8352,3922],{

/***/ 61048:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var browser_components_shopping_content_shopping_card_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43607);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73689);
/* harmony import */ var chrome_global_content_elements_moz_card_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63922);

/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*-
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



// eslint-disable-next-line import/no-unassigned-import

const MIN_SHOW_MORE_HEIGHT = 200;
/**
 * A card container to be used in the shopping sidebar. There are three card types.
 * The default type where no type attribute is required and the card will have no extra functionality.
 * The "accordion" type will initially not show any content. The card will contain a arrow to expand the
 * card so all of the content is visible.
 *
 * @property {string} label - The label text that will be used for the card header
 * @property {string} type - (optional) The type of card. No type specified
 *   will be the default card. The other available types are "accordion" and "show-more".
 */
class ShoppingCard extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    label: {
      type: String
    },
    type: {
      type: String
    },
    rating: {
      type: String
    },
    _isExpanded: {
      type: Boolean
    }
  };
  static get queries() {
    return {
      contentEl: "#content"
    };
  }
  cardTemplate() {
    if (this.type === "show-more") {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
        <article
          id="content"
          class="show-more"
          aria-describedby="content"
          expanded="false"
        >
          <slot name="content"></slot>

          <footer>
            <moz-button
              size="small"
              aria-controls="content"
              data-l10n-id="shopping-show-more-button"
              @click=${this.handleShowMoreButtonClick}
            ></moz-button>
          </footer>
        </article>
      `;
    }
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <div id="content" aria-describedby="content">
        ${this.headingTemplate()}
        <slot name="content"></slot>
      </div>
    `;
  }
  headingTemplate() {
    if (this.rating) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`<div id="label-wrapper">
        <span id="heading">${this.label}</span>
        <moz-five-star
          rating=${this.rating === 0 ? 0.5 : this.rating}
        </moz-five-star>
      </div>`;
    }
    return "";
  }
  onCardToggle(e) {
    const action = e.newState == "open" ? "expanded" : "collapsed";
    let cardId = this.getAttribute("id");
    switch (cardId) {
      case "shopping-settings-label":
        Glean.shopping.surfaceSettingsExpandClicked.record({
          action
        });
        break;
      case "shopping-analysis-explainer-label":
        Glean.shopping.surfaceShowQualityExplainerClicked.record({
          action
        });
        break;
    }
  }
  handleShowMoreButtonClick(e) {
    this._isExpanded = !this._isExpanded;
    // toggle show more/show less text
    e.target.setAttribute("data-l10n-id", this._isExpanded ? "shopping-show-less-button" : "shopping-show-more-button");
    // toggle content expanded attribute
    this.contentEl.attributes.expanded.value = this._isExpanded;
    let action = this._isExpanded ? "expanded" : "collapsed";
    Glean.shopping.surfaceShowMoreReviewsButtonClicked.record({
      action
    });
  }
  enableShowMoreButton() {
    this._isExpanded = false;
    this.toggleAttribute("showMoreButtonDisabled", false);
    this.contentEl.attributes.expanded.value = false;
  }
  disableShowMoreButton() {
    this._isExpanded = true;
    this.toggleAttribute("showMoreButtonDisabled", true);
    this.contentEl.attributes.expanded.value = true;
  }
  firstUpdated() {
    if (this.type !== "show-more") {
      return;
    }
    let contentSlot = this.shadowRoot.querySelector("slot[name='content']");
    let contentSlotEls = contentSlot.assignedElements();
    if (!contentSlotEls.length) {
      return;
    }
    let slottedDiv = contentSlotEls[0];
    this.handleContentSlotResize = this.handleContentSlotResize.bind(this);
    this.contentResizeObserver = new ResizeObserver(this.handleContentSlotResize);
    this.contentResizeObserver.observe(slottedDiv);
  }
  disconnectedCallback() {
    this.contentResizeObserver?.disconnect();
  }
  handleContentSlotResize(entries) {
    for (let entry of entries) {
      if (entry.contentRect.height === 0) {
        return;
      }
      if (entry.contentRect.height < MIN_SHOW_MORE_HEIGHT) {
        this.disableShowMoreButton();
      } else if (this.hasAttribute("showMoreButtonDisabled")) {
        this.enableShowMoreButton();
      }
    }
  }
  render() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <link
        rel="stylesheet"
        href="${browser_components_shopping_content_shopping_card_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <moz-card
        class="shopping-card"
        type=${this.type}
        heading=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.label && !this.rating ? this.label : undefined)}
        @toggle=${this.onCardToggle}
      >
        ${this.cardTemplate()}
      </moz-card>
    `;
  }
}
customElements.define("shopping-card", ShoppingCard);

/***/ }),

/***/ 63922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozCard)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_card_moz_card_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48058);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73689);

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
 *
 * @property {string} heading - The heading text that will be used for the card.
 * @property {string} icon - (optional) A flag to indicate the header should include an icon
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
    contentSlotEl: "#content"
  };
  static properties = {
    heading: {
      type: String,
      fluent: true
    },
    icon: {
      type: Boolean
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
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <div id="heading-wrapper">
        ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.when)(this.type == "accordion", () => chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`<div class="chevron-icon"></div>`)}
        ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.when)(this.icon, () => chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`<div part="icon" id="heading-icon" role="presentation"></div>`)}
        <span id="heading" title=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.heading)} part="heading"
          >${this.heading}</span
        >
      </div>
    `;
  }
  cardTemplate() {
    if (this.type === "accordion") {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
        <details
          id="moz-card-details"
          @toggle=${this.onToggle}
          ?open=${this.expanded}
        >
          <summary part="summary">${this.headingTemplate()}</summary>
          <div id="content"><slot></slot></div>
        </details>
      `;
    }
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
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

/***/ 21738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardOnlyContent": () => (/* binding */ CardOnlyContent),
/* harmony export */   "CardTypeAccordion": () => (/* binding */ CardTypeAccordion),
/* harmony export */   "CardTypeShowMore": () => (/* binding */ CardTypeShowMore),
/* harmony export */   "CardTypeShowMoreButtonDisabled": () => (/* binding */ CardTypeShowMoreButtonDisabled),
/* harmony export */   "CardWithRating": () => (/* binding */ CardWithRating),
/* harmony export */   "DefaultCard": () => (/* binding */ DefaultCard),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45717);
/* harmony import */ var browser_components_shopping_content_shopping_card_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61048);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// eslint-disable-next-line import/no-unresolved


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/Shopping/Shopping Card",
  component: "shopping-card",
  parameters: {
    status: "in-development",
    fluent: "\nshopping-card-label =\n  .label = This the label\nshopping-show-more-button = Show more\nshopping-show-less-button = Show less\n    "
  }
});
var Template = function Template(_ref) {
  var l10nId = _ref.l10nId,
    rating = _ref.rating,
    content = _ref.content,
    type = _ref.type;
  return (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  <main style=\"max-width: 400px\">\n    <shopping-card\n      type=", "\n      data-l10n-id=", "\n      data-l10n-attrs=\"label\"\n      rating=", "\n    >\n      <div slot=\"content\">", "</div>\n    </shopping-card>\n  </main>\n"])), (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(type), (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(l10nId), rating, (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(content));
};
var DefaultCard = Template.bind({});
DefaultCard.args = {
  l10nId: "shopping-card-label",
  content: "This is the content"
};
var CardWithRating = Template.bind({});
CardWithRating.args = _objectSpread(_objectSpread({}, DefaultCard.args), {}, {
  rating: 3
});
var CardOnlyContent = Template.bind({});
CardOnlyContent.args = {
  content: "This card only contains content"
};
var CardTypeAccordion = Template.bind({});
CardTypeAccordion.args = _objectSpread(_objectSpread({}, DefaultCard.args), {}, {
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n  Nunc velit turpis, mollis a ultricies vitae, accumsan ut augue.\n  In a eros ac dolor hendrerit varius et at mauris.",
  type: "accordion"
});
var CardTypeShowMoreButtonDisabled = Template.bind({});
CardTypeShowMoreButtonDisabled.args = _objectSpread(_objectSpread({}, DefaultCard.args), {}, {
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n  Nunc velit turpis, mollis a ultricies vitae, accumsan ut augue.\n  In a eros ac dolor hendrerit varius et at mauris.",
  type: "show-more"
});
var CardTypeShowMore = Template.bind({});
CardTypeShowMore.args = _objectSpread(_objectSpread({}, DefaultCard.args), {}, {
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n  Posuere morbi leo urna molestie at elementum.\n  Felis donec et odio pellentesque.\n  Malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi. Varius duis at consectetur lorem donec massa sapien faucibus et.\n  Et tortor consequat id porta nibh venenatis.\n  Adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum.\n  Viverra accumsan in nisl nisi scelerisque eu ultrices vitae.\n  Gravida neque convallis a cras.\n  Fringilla est ullamcorper eget nulla.\n  Habitant morbi tristique senectus et netus.\n  Quam vulputate dignissim suspendisse in est ante in.\n  Feugiat vivamus at augue eget arcu dictum varius duis.\n  Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Ultricies integer quis auctor elit.",
  type: "show-more"
});

/***/ }),

/***/ 43607:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "shopping-card.4003583ba8460f067d15.css";

/***/ }),

/***/ 48058:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-card.b49cee559e146396e762.css";

/***/ })

}]);
//# sourceMappingURL=shopping-card-stories.b0bbeaae.iframe.bundle.js.map