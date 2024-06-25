"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[8352],{

/***/ 61048:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var browser_components_shopping_content_shopping_page_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57143);
/* harmony import */ var browser_components_shopping_content_shopping_card_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43607);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73689);


/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*-
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



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
class ShoppingCard extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.MozLitElement {
  static properties = {
    label: {
      type: String
    },
    type: {
      type: String
    },
    _isExpanded: {
      type: Boolean
    }
  };
  static get queries() {
    return {
      detailsEl: "#shopping-details",
      contentEl: "#content"
    };
  }
  labelTemplate() {
    if (this.label) {
      if (this.type === "accordion") {
        return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`
          <div id="label-wrapper">
            <h2 id="header">${this.label}</h2>
            <button
              tabindex="-1"
              class="icon chevron-icon ghost-button"
              aria-labelledby="header"
              @click=${this.handleChevronButtonClick}
            ></button>
          </div>
        `;
      }
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`
        <div id="label-wrapper">
          <h2 id="header">${this.label}</h2>
          <slot name="rating"></slot>
        </div>
      `;
    }
    return "";
  }
  cardTemplate() {
    if (this.type === "accordion") {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`
        <details id="shopping-details" @toggle=${this.onCardToggle}>
          <summary>${this.labelTemplate()}</summary>
          <div id="content"><slot name="content"></slot></div>
        </details>
      `;
    } else if (this.type === "show-more") {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`
        ${this.labelTemplate()}
        <article
          id="content"
          class="show-more"
          aria-describedby="content"
          expanded="false"
        >
          <slot name="content"></slot>

          <footer>
            <button
              aria-controls="content"
              class="small-button shopping-button"
              data-l10n-id="shopping-show-more-button"
              @click=${this.handleShowMoreButtonClick}
            ></button>
          </footer>
        </article>
      `;
    }
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`
      ${this.labelTemplate()}
      <div id="content" aria-describedby="content">
        <slot name="content"></slot>
      </div>
    `;
  }
  onCardToggle() {
    const action = this.detailsEl.open ? "expanded" : "collapsed";
    let l10nId = this.getAttribute("data-l10n-id");
    switch (l10nId) {
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
  handleChevronButtonClick() {
    this.detailsEl.open = !this.detailsEl.open;
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
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`
      <link
        rel="stylesheet"
        href="${browser_components_shopping_content_shopping_card_css__WEBPACK_IMPORTED_MODULE_1__}"
      />
      <link
        rel="stylesheet"
        href="${browser_components_shopping_content_shopping_page_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <article
        class="shopping-card"
        aria-labelledby="header"
        aria-label=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.label)}
      >
        ${this.cardTemplate()}
      </article>
    `;
  }
}
customElements.define("shopping-card", ShoppingCard);

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
var _templateObject, _templateObject2;
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
  return (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  <main style=\"max-width: 400px\">\n    <shopping-card\n      type=", "\n      data-l10n-id=", "\n      data-l10n-attrs=\"label\"\n    >\n      <div slot=\"rating\">\n        ", "\n      </div>\n      <div slot=\"content\">", "</div>\n    </shopping-card>\n  </main>\n"])), (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(type), (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(l10nId), rating ? (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["<moz-five-star rating=\"", "\" />"])), rating) : "", (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(content));
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

module.exports = __webpack_require__.p + "shopping-card.648bac44738fd1cff30f.css";

/***/ }),

/***/ 57143:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "shopping-page.6a31e49ef5f99086bbbc.css";

/***/ })

}]);
//# sourceMappingURL=shopping-card-stories.5f213406.iframe.bundle.js.map