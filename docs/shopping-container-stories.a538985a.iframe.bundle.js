"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[2571,6557,5872,3922,4535,8825,6949,9896,4003],{

/***/ 11479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73689);
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*-
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * Class for displaying the adjusted ratings for a given product.
 */
class AdjustedRating extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.MozLitElement {
  static properties = {
    rating: {
      type: Number,
      reflect: true
    }
  };
  render() {
    if (!this.rating && this.rating !== 0) {
      this.hidden = true;
      return null;
    }
    this.hidden = false;
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
      <shopping-card
        data-l10n-id="shopping-adjusted-rating-label"
        data-l10n-attrs="label"
        rating=${this.rating}
      >
        <div slot="content">
          <span
            data-l10n-id="shopping-adjusted-rating-based-reliable-reviews"
          ></span>
        </div>
      </shopping-card>
    `;
  }
}
customElements.define("adjusted-rating", AdjustedRating);

/***/ }),

/***/ 64303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var browser_components_shopping_content_analysis_explainer_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32073);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73689);
/* harmony import */ var chrome_browser_content_shopping_shopping_card_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61048);
/* harmony import */ var chrome_browser_content_shopping_letter_grade_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94343);
/* harmony import */ var chrome_global_content_elements_moz_support_link_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49896);

/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*-
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

const VALID_EXPLAINER_L10N_IDS = new Map([["reliable", "shopping-analysis-explainer-review-grading-scale-reliable"], ["mixed", "shopping-analysis-explainer-review-grading-scale-mixed"], ["unreliable", "shopping-analysis-explainer-review-grading-scale-unreliable"]]);

/**
 * Class for displaying details about letter grades, adjusted rating, and highlights.
 */
class AnalysisExplainer extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    productUrl: {
      type: String,
      reflect: true
    }
  };
  static get queries() {
    return {
      reviewQualityExplainerLink: "#review-quality-url"
    };
  }
  getGradesDescriptionTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <section id="analysis-explainer-grades-wrapper">
        <p data-l10n-id="shopping-analysis-explainer-grades-intro"></p>
      </section>
    `;
  }
  createGradingScaleEntry(letters, descriptionL10nId) {
    let letterGradesTemplate = [];
    for (let letter of letters) {
      letterGradesTemplate.push(chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`<letter-grade letter=${letter}></letter-grade>`);
    }
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <div class="analysis-explainer-grading-scale-entry">
        <dt class="analysis-explainer-grading-scale-term">
          <span class="analysis-explainer-grading-scale-letters">
            ${letterGradesTemplate}
          </span>
        </dt>
        <dd
          class="analysis-explainer-grading-scale-description"
          data-l10n-id=${descriptionL10nId}
        ></dd>
      </div>
    `;
  }
  getGradingScaleListTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <section id="analysis-explainer-grading-scale-wrapper">
        <dl id="analysis-explainer-grading-scale-list">
          ${this.createGradingScaleEntry(["A", "B"], VALID_EXPLAINER_L10N_IDS.get("reliable"))}
          ${this.createGradingScaleEntry(["C"], VALID_EXPLAINER_L10N_IDS.get("mixed"))}
          ${this.createGradingScaleEntry(["D", "F"], VALID_EXPLAINER_L10N_IDS.get("unreliable"))}
        </dl>
      </section>
    `;
  }
  getRetailerDisplayName() {
    if (!this.productUrl) {
      return null;
    }
    let url = new URL(this.productUrl);
    let hostname = url.hostname;
    let displayNames = {
      "www.amazon.com": "Amazon",
      "www.amazon.de": "Amazon",
      "www.amazon.fr": "Amazon",
      // only other regional domain is bestbuy.ca
      "www.bestbuy.com": "Best Buy",
      // regional urls redirect to walmart.com
      "www.walmart.com": "Walmart"
    };
    return displayNames[hostname];
  }
  handleReviewQualityUrlClicked(e) {
    if (e.target.localName == "a" && e.button == 0) {
      Glean.shopping.surfaceShowQualityExplainerUrlClicked.record();
    }
  }
  createReviewsExplainer() {
    const retailer = this.getRetailerDisplayName();
    if (retailer) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
        <p
          data-l10n-id="shopping-analysis-explainer-highlights-description"
          data-l10n-args=${JSON.stringify({
        retailer
      })}
        ></p>
      `;
    }
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <p
        data-l10n-id="shopping-analysis-explainer-highlights-description-unknown-retailer"
      ></p>
    `;
  }

  // Bug 1857620: rather than manually set the utm parameters on the SUMO link,
  // we should instead update moz-support-link to allow arbitrary utm parameters.
  render() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <link
        rel="stylesheet"
        href="${browser_components_shopping_content_analysis_explainer_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <shopping-card
        id="shopping-analysis-explainer-label"
        data-l10n-id="shopping-analysis-explainer-label"
        data-l10n-attrs="label"
        type="accordion"
      >
        <div slot="content">
          <div id="analysis-explainer-wrapper">
            <p data-l10n-id="shopping-analysis-explainer-intro2"></p>
            ${this.getGradesDescriptionTemplate()}
            ${this.getGradingScaleListTemplate()}
            <p
              data-l10n-id="shopping-analysis-explainer-adjusted-rating-description"
            ></p>
            ${this.createReviewsExplainer()}
            <p
              data-l10n-id="shopping-analysis-explainer-learn-more2"
              @click=${this.handleReviewQualityUrlClicked}
            >
              <a
                id="review-quality-url"
                data-l10n-name="review-quality-url"
                target="_blank"
                href="${window.RPMGetFormatURLPref("app.support.baseURL")}review-checker-review-quality?as=u&utm_source=inproduct&utm_campaign=learn-more&utm_term=core-sidebar"
              ></a>
            </p>
          </div>
        </div>
      </shopping-card>
    `;
  }
}
customElements.define("analysis-explainer", AnalysisExplainer);

/***/ }),

/***/ 63895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var browser_components_shopping_content_highlight_item_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17990);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73689);

/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*-
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * Class for displaying a list of highlighted product reviews, according to highlight category.
 */
class Highlight extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  l10nId;
  highlightType;
  /**
   * reviews is a list of Strings, representing all the reviews to display
   * under a highlight category.
   */
  reviews;

  /**
   * lang defines the language in which the reviews are written. We should specify
   * language so that screen readers can read text with the appropriate language packs.
   */
  lang;
  render() {
    let ulTemplate = [];
    for (let review of this.reviews) {
      ulTemplate.push(chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`<li>
          <q><span lang=${this.lang}>${review}</span></q>
        </li>`);
    }
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <link
        rel="stylesheet"
        href="${browser_components_shopping_content_highlight_item_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <div class="highlight-item-wrapper">
        <span class="highlight-icon ${this.highlightType}"></span>
        <dt class="highlight-label" data-l10n-id=${this.l10nId}></dt>
        <dd class="highlight-details">
          <ul class="highlight-details-list">
            ${ulTemplate}
          </ul>
        </dd>
      </div>
    `;
  }
}
customElements.define("highlight-item", Highlight);

/***/ }),

/***/ 19954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73689);
/* harmony import */ var chrome_browser_content_shopping_highlight_item_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63895);
/* harmony import */ var chrome_browser_content_shopping_shopping_card_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61048);
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*-
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

const VALID_HIGHLIGHT_L10N_IDs = new Map([["price", "shopping-highlight-price"], ["quality", "shopping-highlight-quality"], ["shipping", "shopping-highlight-shipping"], ["competitiveness", "shopping-highlight-competitiveness"], ["packaging/appearance", "shopping-highlight-packaging"]]);

/**
 * Class for displaying all available highlight categories for a product and any
 * highlight reviews per category.
 */
class ReviewHighlights extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.MozLitElement {
  /**
   * highlightsMap is a map of highlight categories to an array of reviews per category.
   * It is possible for a category to have no reviews.
   */
  #highlightsMap;
  static properties = {
    highlights: {
      type: Object
    },
    lang: {
      type: String,
      reflect: true
    }
  };
  static get queries() {
    return {
      reviewHighlightsListEl: "#review-highlights-list"
    };
  }
  updateHighlightsMap() {
    let availableKeys;
    this.#highlightsMap = null;
    try {
      if (!this.highlights) {
        return;
      }

      // Filter highlights that have data.
      let keys = Object.keys(this.highlights);
      availableKeys = keys.filter(key => Object.values(this.highlights[key]).flat().length !== 0);

      // Filter valid highlight category types. Valid types are guaranteed to have data-l10n-ids.
      availableKeys = availableKeys.filter(key => VALID_HIGHLIGHT_L10N_IDs.has(key));

      // If there are no highlights to show in the end, stop here and don't render content.
      if (!availableKeys.length) {
        return;
      }
    } catch (e) {
      return;
    }
    this.#highlightsMap = new Map();
    for (let key of availableKeys) {
      // Ignore negative,neutral,positive sentiments and simply append review strings into one array.
      let reviews = Object.values(this.highlights[key]).flat();
      this.#highlightsMap.set(key, reviews);
    }
  }
  createHighlightElement(type, reviews) {
    let highlightEl = document.createElement("highlight-item");
    // We already verify highlight type and its l10n id in updateHighlightsMap.
    let l10nId = VALID_HIGHLIGHT_L10N_IDs.get(type);
    highlightEl.id = type;
    highlightEl.l10nId = l10nId;
    highlightEl.highlightType = type;
    highlightEl.reviews = reviews;
    highlightEl.lang = this.lang;
    return highlightEl;
  }
  render() {
    this.updateHighlightsMap();
    if (!this.#highlightsMap) {
      this.hidden = true;
      return null;
    }
    this.hidden = false;
    let highlightsTemplate = [];
    for (let [key, value] of this.#highlightsMap) {
      let highlightEl = this.createHighlightElement(key, value);
      highlightsTemplate.push(highlightEl);
    }
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
      <shopping-card
        data-l10n-id="shopping-highlights-label"
        data-l10n-attrs="label"
        type="show-more"
      >
        <div slot="content" id="review-highlights-wrapper">
          <dl id="review-highlights-list">${highlightsTemplate}</dl>
        </div>
      </shopping-card>
    `;
  }
}
customElements.define("review-highlights", ReviewHighlights);

/***/ }),

/***/ 94343:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var browser_components_shopping_content_letter_grade_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53771);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73689);

/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*-
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



const VALID_LETTER_GRADE_L10N_IDS = new Map([["A", "shopping-letter-grade-description-ab"], ["B", "shopping-letter-grade-description-ab"], ["C", "shopping-letter-grade-description-c"], ["D", "shopping-letter-grade-description-df"], ["F", "shopping-letter-grade-description-df"]]);
class LetterGrade extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  #descriptionL10N;
  static properties = {
    letter: {
      type: String,
      reflect: true
    },
    showdescription: {
      type: Boolean,
      reflect: true
    }
  };
  get fluentStrings() {
    if (!this._fluentStrings) {
      this._fluentStrings = new Localization(["browser/shopping.ftl"], true);
    }
    return this._fluentStrings;
  }
  descriptionTemplate() {
    if (this.showdescription) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`<p
        id="letter-grade-description"
        data-l10n-id=${this.#descriptionL10N}
      ></p>`;
    }
    return null;
  }
  render() {
    // Do not render if letter is invalid
    if (!VALID_LETTER_GRADE_L10N_IDS.has(this.letter)) {
      return null;
    }
    this.#descriptionL10N = VALID_LETTER_GRADE_L10N_IDS.get(this.letter);
    let tooltipL10NArgs;
    // Do not localize tooltip if using Storybook.
    if (!window.IS_STORYBOOK) {
      const localizedDescription = this.fluentStrings.formatValueSync(this.#descriptionL10N);
      tooltipL10NArgs = `{"letter": "${this.letter}", "description": "${localizedDescription}"}`;
    }
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <link
        rel="stylesheet"
        href="${browser_components_shopping_content_letter_grade_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <article
        id="letter-grade-wrapper"
        data-l10n-id="shopping-letter-grade-tooltip"
        data-l10n-attrs="title"
        data-l10n-args=${tooltipL10NArgs}
      >
        <p id="letter-grade-term">${this.letter}</p>
        ${this.descriptionTemplate()}
      </article>
    `;
  }
}
customElements.define("letter-grade", LetterGrade);

/***/ }),

/***/ 67492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var browser_components_shopping_content_new_position_notification_card_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49616);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73689);
/* harmony import */ var chrome_browser_content_shopping_shopping_card_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61048);
/* harmony import */ var chrome_global_content_elements_moz_button_group_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16557);
/* harmony import */ var chrome_global_content_elements_moz_button_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15872);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* eslint-env mozilla/remote-page */




// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import


/* Until caching is implemented (see Bug 1927956), any location change will force another
 * update and refresh the UI. Furthermore, we probably want to keep the card visible for the
 * same tab until the user takes action. To prevent the card from being hidden unnecessarily
 * on location change, and to ensure users have a chance to read the message,
 * change the pref once the user dismisses the card or opens the sidebar settings panel. */
const HAS_SEEN_NEW_POSITION_NOTIFICATION_CARD_PREF = "browser.shopping.experience2023.newPositionCard.hasSeen";
class NewPositionNotificationCard extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    isSidebarStartPosition: {
      type: Boolean
    }
  };
  static get queries() {
    return {
      imgEl: "#notification-card-img",
      settingsLinkEl: "#notification-card-settings-link",
      moveLeftButtonEl: "#notification-card-move-left-button",
      moveRightButtonEl: "#notification-card-move-right-button",
      dismissButtonEl: "#notification-card-dismiss-button"
    };
  }
  firstUpdated() {
    super.firstUpdated();
    Glean.shopping.surfaceNotificationCardImpression.record();
  }
  handleClickSettingsLink(event) {
    event.preventDefault();
    // Click event listener references get lost if attached to the settings link since it is slotted into the shopping-card.
    // As a workaround, attach the listener to its parent element and only dispatch events if the target is the settings link.
    if (event.target == this.settingsLinkEl) {
      Glean.shopping.surfaceNotificationCardSidebarSettingsClicked.record();
      window.dispatchEvent(new CustomEvent("ShowSidebarSettings", {
        bubbles: true,
        composed: true
      }));
      RPMSetPref(HAS_SEEN_NEW_POSITION_NOTIFICATION_CARD_PREF, true);
      window.dispatchEvent(new CustomEvent("HideNewPositionCard", {
        bubbles: true,
        composed: true
      }));
    }
  }
  handleClickPositionButton() {
    if (this.isSidebarStartPosition) {
      Glean.shopping.surfaceNotificationCardMoveRightClicked.record();
      this.isSidebarStartPosition = false;
      window.dispatchEvent(new CustomEvent("MoveSidebarToRight", {
        bubbles: true,
        composed: true
      }));
    } else {
      Glean.shopping.surfaceNotificationCardMoveLeftClicked.record();
      this.isSidebarStartPosition = true;
      window.dispatchEvent(new CustomEvent("MoveSidebarToLeft", {
        bubbles: true,
        composed: true
      }));
    }
  }
  handleClickDismissButton() {
    Glean.shopping.surfaceNotificationCardDismissClicked.record();
    this.dispatchEvent(new CustomEvent("HideNewPositionCard", {
      bubbles: true,
      composed: true
    }));
    RPMSetPref(HAS_SEEN_NEW_POSITION_NOTIFICATION_CARD_PREF, true);
    window.dispatchEvent(new CustomEvent("HideNewPositionCard", {
      bubbles: true,
      composed: true
    }));
  }
  render() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <link
        rel="stylesheet"
        href="${browser_components_shopping_content_new_position_notification_card_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <shopping-card>
        <div id="notification-card-wrapper" slot="content">
          <img
            id="notification-card-img"
            src="chrome://browser/content/shopping/assets/emptyStateB.svg"
            alt=""
            role="presentation"
          />
          <h2
            id="notification-card-header"
            data-l10n-id="shopping-integrated-new-position-notification-title"
          ></h2>
          <p
            id="notification-card-body"
            data-l10n-id="shopping-integrated-new-position-notification-move-right-subtitle"
            @click=${this.handleClickSettingsLink}
          >
            <a
              id="notification-card-settings-link"
              data-l10n-name="sidebar_settings"
              href="#"
            ></a>
          </p>
          <div id="notification-card-button-group">
            <moz-button
              id=${this.isSidebarStartPosition ? "notification-card-move-right-button" : "notification-card-move-left-button"}
              data-l10n-id=${this.isSidebarStartPosition ? "shopping-integrated-new-position-notification-move-right-button" : "shopping-integrated-new-position-notification-move-left-button"}
              type="primary"
              size="small"
              @click=${this.handleClickPositionButton}
            >
            </moz-button>
            <moz-button
              id="notification-card-dismiss-button"
              data-l10n-id="shopping-integrated-new-position-notification-dismiss-button"
              type="ghost"
              size="small"
              @click=${this.handleClickDismissButton}
            >
            </moz-button>
          </div>
        </div>
      </shopping-card>
    `;
  }
}
customElements.define("new-position-notification-card", NewPositionNotificationCard);

/***/ }),

/***/ 13811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var browser_components_shopping_content_recommended_ad_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98971);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73689);
/* harmony import */ var chrome_browser_content_shopping_shopping_card_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61048);
/* harmony import */ var chrome_global_content_elements_moz_five_star_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34535);

/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*-
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

const AD_IMPRESSION_TIMEOUT = 1500;
// We are only showing prices in USD for now. In the future we will need
// to update this to include other currencies.
const SUPPORTED_CURRENCY_SYMBOLS = new Map([["USD", "$"]]);
class RecommendedAd extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    product: {
      type: Object,
      reflect: true
    }
  };
  static get queries() {
    return {
      letterGradeEl: "letter-grade",
      linkEl: "#recommended-ad-wrapper",
      priceEl: "#price",
      ratingEl: "moz-five-star",
      sponsoredLabelEl: "#sponsored-label"
    };
  }
  connectedCallback() {
    super.connectedCallback();
    if (this.initialized) {
      return;
    }
    this.initialized = true;
    document.addEventListener("visibilitychange", this);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("visibilitychange", this);
    this.resetImpressionTimer();
    this.revokeImageUrl();
  }
  startImpressionTimer() {
    if (!this.timeout && document.visibilityState === "visible") {
      this.timeout = setTimeout(() => this.recordImpression(), AD_IMPRESSION_TIMEOUT);
    }
  }
  resetImpressionTimer() {
    this.timeout = clearTimeout(this.timeout);
  }
  revokeImageUrl() {
    if (this.imageUrl) {
      URL.revokeObjectURL(this.imageUrl);
    }
  }
  recordImpression() {
    if (this.hasImpressed) {
      return;
    }
    this.dispatchEvent(new CustomEvent("AdImpression", {
      bubbles: true,
      detail: {
        aid: this.product.aid,
        sponsored: this.product.sponsored
      }
    }));
    document.removeEventListener("visibilitychange", this);
    this.resetImpressionTimer();
    this.hasImpressed = true;
  }
  handleClick(event) {
    if (event.button === 0 || event.button === 1) {
      this.dispatchEvent(new CustomEvent("AdClicked", {
        bubbles: true,
        detail: {
          aid: this.product.aid,
          sponsored: this.product.sponsored
        }
      }));
    }
  }
  handleEvent(event) {
    if (event.type !== "visibilitychange") {
      return;
    }
    if (document.visibilityState === "visible") {
      this.startImpressionTimer();
    } else if (!this.hasImpressed) {
      this.resetImpressionTimer();
    }
  }
  priceTemplate() {
    const currencySymbol = SUPPORTED_CURRENCY_SYMBOLS.get(this.product.currency);

    // TODO: not all non-USD currencies have the symbol displayed on the right.
    // Adjust symbol position as we add more supported currencies.
    let priceLabelText;
    if (this.product.currency === "USD") {
      priceLabelText = `${currencySymbol}${this.product.price}`;
    } else {
      priceLabelText = `${this.product.price}${currencySymbol}`;
    }
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`<span id="price">${priceLabelText}</span>`;
  }
  render() {
    this.startImpressionTimer();
    this.revokeImageUrl();
    this.imageUrl = URL.createObjectURL(this.product.image_blob);
    const hasPrice = this.product.price && SUPPORTED_CURRENCY_SYMBOLS.has(this.product.currency);
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <link
        rel="stylesheet"
        href="${browser_components_shopping_content_recommended_ad_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <shopping-card
        data-l10n-id="more-to-consider-ad-label"
        data-l10n-attrs="label"
      >
        <a id="recommended-ad-wrapper" slot="content" href=${this.product.url} target="_blank" title=${this.product.name} @click=${this.handleClick} @auxclick=${this.handleClick}>
          <div id="ad-content">
            <img id="ad-preview-image" src=${this.imageUrl}></img>
            <div id="ad-letter-wrapper">
              <span id="ad-title" lang="en">${this.product.name}</span>
              <letter-grade letter=${this.product.grade}></letter-grade>
            </div>
          </div>
          <div id="footer" class=${hasPrice ? "has-price" : ""}>
            ${hasPrice ? this.priceTemplate() : null}
            <moz-five-star rating=${this.product.adjusted_rating}></moz-five-star>
          </div>
        </a>
      </shopping-card>
      ${this.product.sponsored ? chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`<p
              id="sponsored-label"
              data-l10n-id="shopping-sponsored-label"
            ></p>` : null}
    `;
  }
}
customElements.define("recommended-ad", RecommendedAd);

/***/ }),

/***/ 53193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73689);
/* harmony import */ var chrome_browser_content_shopping_letter_grade_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94343);
/* harmony import */ var chrome_browser_content_shopping_shopping_card_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61048);
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*-
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

class ReviewReliability extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.MozLitElement {
  static properties = {
    letter: {
      type: String
    }
  };
  static get queries() {
    return {
      letterGradeEl: "letter-grade"
    };
  }
  render() {
    if (!this.letter) {
      this.hidden = true;
      return null;
    }
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
      <shopping-card
        data-l10n-id="shopping-review-reliability-label"
        data-l10n-attrs="label"
      >
        <div slot="content">
          <letter-grade
            letter=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(this.letter)}
            showdescription
          ></letter-grade>
        </div>
      </shopping-card>
    `;
  }
}
customElements.define("review-reliability", ReviewReliability);

/***/ }),

/***/ 29000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var browser_components_shopping_content_shopping_page_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57143);
/* harmony import */ var browser_components_shopping_content_settings_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8423);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73689);
/* harmony import */ var chrome_global_content_elements_moz_toggle_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34003);


/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*-
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* eslint-env mozilla/remote-page */




// eslint-disable-next-line import/no-unassigned-import

class ShoppingSettings extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.MozLitElement {
  static properties = {
    adsEnabled: {
      type: Boolean
    },
    adsEnabledByUser: {
      type: Boolean
    },
    autoOpenEnabled: {
      type: Boolean
    },
    autoOpenEnabledByUser: {
      type: Boolean
    },
    hostname: {
      type: String
    }
  };
  static get queries() {
    return {
      wrapperEl: "#shopping-settings-wrapper",
      recommendationsToggleEl: "#shopping-settings-recommendations-toggle",
      autoOpenToggleEl: "#shopping-settings-auto-open-toggle",
      autoOpenToggleDescriptionEl: "#shopping-auto-open-description",
      dividerEl: ".divider",
      optOutButtonEl: "#shopping-settings-opt-out-button",
      shoppingCardEl: "shopping-card",
      adsLearnMoreLinkEl: "#shopping-ads-learn-more-link",
      fakespotLearnMoreLinkEl: "#powered-by-fakespot-link"
    };
  }
  onToggleRecommendations() {
    this.adsEnabledByUser = this.recommendationsToggleEl.pressed;
    let action = this.adsEnabledByUser ? "enabled" : "disabled";
    Glean.shopping.surfaceAdsSettingToggled.record({
      action
    });
    RPMSetPref("browser.shopping.experience2023.ads.userEnabled", this.adsEnabledByUser);
  }
  onToggleAutoOpen() {
    this.autoOpenEnabledByUser = this.autoOpenToggleEl.pressed;
    let action = this.autoOpenEnabledByUser ? "enabled" : "disabled";
    Glean.shopping.surfaceAutoOpenSettingToggled.record({
      action
    });
    RPMSetPref("browser.shopping.experience2023.autoOpen.userEnabled", this.autoOpenEnabledByUser);
    if (!this.autoOpenEnabledByUser) {
      RPMSetPref("browser.shopping.experience2023.active", false);
    }
  }
  onDisableShopping() {
    window.dispatchEvent(new CustomEvent("DisableShopping", {
      bubbles: true,
      composed: true
    }));
    Glean.shopping.surfaceOptOutButtonClicked.record();
  }
  fakespotLinkClicked(e) {
    if (e.target.localName == "a" && e.button == 0) {
      Glean.shopping.surfacePoweredByFakespotLinkClicked.record();
    }
  }
  render() {
    // Whether we show recommendations at all (including offering a user
    // control for them) is controlled via a nimbus-enabled pref.
    let canShowRecommendationToggle = this.adsEnabled;
    let adsToggleMarkup = canShowRecommendationToggle ? chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`
        <div class="shopping-settings-toggle-option-wrapper">
          <moz-toggle
            id="shopping-settings-recommendations-toggle"
            ?pressed=${this.adsEnabledByUser}
            data-l10n-id="shopping-settings-recommendations-toggle2"
            data-l10n-attrs="label"
            @toggle=${this.onToggleRecommendations}>
            <span id="shopping-ads-learn-more" data-l10n-id="shopping-settings-recommendations-learn-more3" slot="description">
              <a
                id="shopping-ads-learn-more-link"
                target="_blank"
                href="${window.RPMGetFormatURLPref("app.support.baseURL")}review-checker-review-quality?utm_campaign=learn-more&utm_medium=inproduct&utm_term=core-sidebar#w_ads_for_relevant_products"
                data-l10n-name="review-quality-url"
              ></a>
            </span>
          </moz-toggle/>
        </div>` : null;

    /* Auto-open experiment changes how the settings card appears by:
     * 1. Showing a new toggle for enabling/disabling auto-open behaviour
     * 2. Adding a divider between the toggles and opt-out button
     * 3. Showing text indicating that Review Checker is enabled (not opted-out) above the opt-out button
     *
     * Only show if `browser.shopping.experience2023.autoOpen.enabled` is true.
     */
    let autoOpenDescriptionL10nId = "shopping-settings-auto-open-and-close-description-three-sites";
    let autoOpenDescriptionL10nArgs = {
      firstSite: "Amazon",
      secondSite: "Best Buy",
      thirdSite: "Walmart"
    };
    if (RPMGetBoolPref("toolkit.shopping.experience2023.defr", false) && (this.hostname === "www.amazon.fr" || this.hostname === "www.amazon.de")) {
      autoOpenDescriptionL10nId = "shopping-settings-auto-open-and-close-description-single-site";
      autoOpenDescriptionL10nArgs = {
        currentSite: "Amazon"
      };
    }
    let autoOpenToggleMarkup = this.autoOpenEnabled ? chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html` <div class="shopping-settings-toggle-option-wrapper">
          <moz-toggle
            id="shopping-settings-auto-open-toggle"
            ?pressed=${this.autoOpenEnabledByUser}
            data-l10n-id="shopping-settings-auto-open-and-close-toggle"
            data-l10n-attrs="label"
            @toggle=${this.onToggleAutoOpen}
          >
            <span
              slot="description"
              id="shopping-auto-open-description"
              data-l10n-id=${autoOpenDescriptionL10nId}
              data-l10n-args=${JSON.stringify(autoOpenDescriptionL10nArgs)}
            ></span>
          </moz-toggle>
        </div>` : null;
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`
      <link
        rel="stylesheet"
        href="${browser_components_shopping_content_settings_css__WEBPACK_IMPORTED_MODULE_1__}"
      />
      <link
        rel="stylesheet"
        href="${browser_components_shopping_content_shopping_page_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <shopping-card
        id="shopping-settings-label"
        data-l10n-id="shopping-settings-label"
        data-l10n-attrs="label"
        type="accordion"
      >
        <div
          id="shopping-settings-wrapper"
          class=${this.autoOpenEnabled ? "shopping-settings-auto-open-ui-enabled" : ""}
          slot="content"
        >
          <section id="shopping-settings-toggles-section">
            ${autoOpenToggleMarkup} ${adsToggleMarkup}
          </section>
          ${this.autoOpenEnabled ? chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<span class="divider" role="separator"></span>` : null}
          <section id="shopping-settings-opt-out-section">
            <button
              class="small-button shopping-button"
              id="shopping-settings-opt-out-button"
              data-l10n-id="shopping-settings-opt-out-button"
              @click=${this.onDisableShopping}
            ></button>
          </section>
        </div>
      </shopping-card>
      <p
        id="powered-by-fakespot"
        data-l10n-id="powered-by-fakespot"
        @click=${this.fakespotLinkClicked}
      >
        <a
          id="powered-by-fakespot-link"
          data-l10n-name="fakespot-link"
          target="_blank"
          href="https://www.fakespot.com/our-mission?utm_source=review-checker&utm_campaign=fakespot-by-mozilla&utm_medium=inproduct&utm_term=core-sidebar"
        ></a>
      </p>
    `;
  }
}
customElements.define("shopping-settings", ShoppingSettings);

/***/ }),

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

/***/ 26693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShoppingContainer": () => (/* binding */ ShoppingContainer)
/* harmony export */ });
/* harmony import */ var browser_components_shopping_content_shopping_page_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57143);
/* harmony import */ var toolkit_themes_linux_global_in_content_common_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46565);
/* harmony import */ var browser_components_shopping_content_shopping_container_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70115);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73689);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45717);
/* harmony import */ var chrome_browser_content_shopping_highlights_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19954);
/* harmony import */ var chrome_browser_content_shopping_settings_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29000);
/* harmony import */ var chrome_browser_content_shopping_adjusted_rating_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11479);
/* harmony import */ var chrome_browser_content_shopping_reliability_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(53193);
/* harmony import */ var chrome_browser_content_shopping_analysis_explainer_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(64303);
/* harmony import */ var chrome_browser_content_shopping_shopping_message_bar_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(38582);
/* harmony import */ var chrome_browser_content_shopping_unanalyzed_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(99277);
/* harmony import */ var chrome_browser_content_shopping_recommended_ad_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(13811);
/* harmony import */ var chrome_browser_content_shopping_new_position_notification_card_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(67492);



/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* eslint-env mozilla/remote-page */




// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import


// The number of pixels that must be scrolled from the
// top of the sidebar to show the header box shadow.
const HEADER_SCROLL_PIXEL_OFFSET = 8;
const HEADER_NOT_TEXT_WRAPPED_HEIGHT = 32;
const SIDEBAR_CLOSED_COUNT_PREF = "browser.shopping.experience2023.sidebarClosedCount";
const SHOW_KEEP_SIDEBAR_CLOSED_MESSAGE_PREF = "browser.shopping.experience2023.showKeepSidebarClosedMessage";
const SHOPPING_SIDEBAR_ACTIVE_PREF = "browser.shopping.experience2023.active";
const SIDEBAR_REVAMP_PREF = "sidebar.revamp";
const INTEGRATED_SIDEBAR_PREF = "browser.shopping.experience2023.integratedSidebar";
const HAS_SEEN_POSITION_NOTIFICATION_CARD_PREF = "browser.shopping.experience2023.newPositionCard.hasSeen";
const CLOSED_COUNT_PREVIOUS_MIN = 4;
const CLOSED_COUNT_PREVIOUS_MAX = 6;
class ShoppingContainer extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.MozLitElement {
  static properties = {
    data: {
      type: Object
    },
    showOnboarding: {
      type: Boolean
    },
    productUrl: {
      type: String
    },
    recommendationData: {
      type: Array
    },
    isOffline: {
      type: Boolean
    },
    analysisEvent: {
      type: Object
    },
    userReportedAvailable: {
      type: Boolean
    },
    adsEnabled: {
      type: Boolean
    },
    adsEnabledByUser: {
      type: Boolean
    },
    isAnalysisInProgress: {
      type: Boolean
    },
    analysisProgress: {
      type: Number
    },
    showHeaderShadow: {
      type: Boolean,
      state: true
    },
    isOverflow: {
      type: Boolean
    },
    autoOpenEnabled: {
      type: Boolean
    },
    autoOpenEnabledByUser: {
      type: Boolean
    },
    showingKeepClosedMessage: {
      type: Boolean
    },
    isProductPage: {
      type: Boolean
    },
    isSupportedSite: {
      type: Boolean
    },
    supportedDomains: {
      type: Object
    },
    formattedDomainList: {
      type: Object,
      state: true
    },
    isHeaderOverflow: {
      type: Boolean,
      state: true
    },
    isSidebarStartPosition: {
      type: Boolean
    },
    showNewPositionCard: {
      type: Boolean
    }
  };
  static get queries() {
    return {
      reviewReliabilityEl: "review-reliability",
      adjustedRatingEl: "adjusted-rating",
      highlightsEl: "review-highlights",
      settingsEl: "shopping-settings",
      analysisExplainerEl: "analysis-explainer",
      unanalyzedProductEl: "unanalyzed-product-card",
      shoppingMessageBarEl: "shopping-message-bar",
      recommendedAdEl: "recommended-ad",
      loadingEl: "#loading-wrapper",
      closeButtonEl: "#close-button",
      keepClosedMessageBarEl: "#keep-closed-message-bar",
      emptyStateImgEl: "#shopping-empty-state-img",
      emptyStateHeaderEl: "#shopping-empty-state-header",
      emptyStateTextEl: "#shopping-empty-state-text",
      emptyStateSupportedListEl: "#shopping-empty-list-of-supported-domains",
      containerContentEl: "#content",
      header: "#shopping-header",
      newPositionNotificationCardEl: "new-position-notification-card"
    };
  }
  connectedCallback() {
    super.connectedCallback();
    if (this.initialized) {
      return;
    }
    this.initialized = true;
    this.showHeader = !RPMGetBoolPref(INTEGRATED_SIDEBAR_PREF) || RPMGetBoolPref(SIDEBAR_REVAMP_PREF);
    window.document.addEventListener("Update", this);
    window.document.addEventListener("NewAnalysisRequested", this);
    window.document.addEventListener("ReanalysisRequested", this);
    window.document.addEventListener("ReportedProductAvailable", this);
    window.document.addEventListener("adsEnabledByUserChanged", this);
    window.document.addEventListener("scroll", this);
    window.document.addEventListener("UpdateRecommendations", this);
    window.document.addEventListener("UpdateAnalysisProgress", this);
    window.document.addEventListener("autoOpenEnabledByUserChanged", this);
    window.document.addEventListener("ShowKeepClosedMessage", this);
    window.document.addEventListener("HideKeepClosedMessage", this);
    window.document.addEventListener("ShowNewPositionCard", this);
    window.document.addEventListener("HideNewPositionCard", this);
    window.dispatchEvent(new CustomEvent("ContentReady", {
      bubbles: true,
      composed: true
    }));
  }
  disconnectedCallback() {
    this.headerResizeObserver?.disconnect();
  }
  firstUpdated() {
    this.headerResizeObserver = new ResizeObserver(([entry]) => this.maybeSetIsHeaderOverflow(entry));
    this.headerResizeObserver.observe(this.header);
  }
  updated(changedProperties) {
    if (changedProperties.has("supportedDomains")) {
      let oldVal = changedProperties.get("supportedDomains");
      /**
       * We expect the domains object to be passed in consistently and not change often.
       * A shallow comparison seems to be enough.
       */
      try {
        if (JSON.stringify(oldVal) !== JSON.stringify(this.supportedDomains)) {
          // Let the render function deal with recreating the formatted list.
          this.formattedDomainList = null;
        }
      } catch (e) {
        console.error(e);
        this.formattedDomainList = null;
      }
    }
    if (this.focusCloseButton) {
      this.closeButtonEl.focus();
    }
  }
  async _update({
    data,
    showOnboarding,
    productUrl,
    recommendationData,
    adsEnabled,
    adsEnabledByUser,
    isAnalysisInProgress,
    analysisProgress,
    focusCloseButton,
    autoOpenEnabled,
    autoOpenEnabledByUser,
    isProductPage,
    isSupportedSite,
    supportedDomains,
    isSidebarStartPosition
  }) {
    // If we're not opted in or there's no shopping URL in the main browser,
    // the actor will pass `null`, which means this will clear out any existing
    // content in the sidebar.
    this.data = data;
    this.showOnboarding = showOnboarding ?? this.showOnboarding;
    this.productUrl = productUrl;
    this.recommendationData = recommendationData;
    this.isOffline = !navigator.onLine;
    this.isAnalysisInProgress = isAnalysisInProgress;
    this.adsEnabled = adsEnabled ?? this.adsEnabled;
    this.adsEnabledByUser = adsEnabledByUser ?? this.adsEnabledByUser;
    this.analysisProgress = analysisProgress;
    this.focusCloseButton = focusCloseButton;
    this.autoOpenEnabled = autoOpenEnabled ?? this.autoOpenEnabled;
    this.autoOpenEnabledByUser = autoOpenEnabledByUser ?? this.autoOpenEnabledByUser;
    this.isProductPage = isProductPage ?? true;
    this.isSupportedSite = isSupportedSite;
    this.supportedDomains = supportedDomains ?? this.supportedDomains;
    this.isSidebarStartPosition = isSidebarStartPosition ?? this.isSidebarStartPosition;
  }
  _updateRecommendations({
    recommendationData
  }) {
    this.recommendationData = recommendationData;
  }
  _updateAnalysisProgress({
    progress
  }) {
    this.analysisProgress = progress;
  }
  handleEvent(event) {
    switch (event.type) {
      case "Update":
        this._update(event.detail);
        break;
      case "NewAnalysisRequested":
      case "ReanalysisRequested":
        this.isAnalysisInProgress = true;
        this.analysisEvent = {
          type: event.type,
          productUrl: this.productUrl
        };
        window.dispatchEvent(new CustomEvent("PolledRequestMade", {
          bubbles: true,
          composed: true
        }));
        break;
      case "ReportedProductAvailable":
        this.userReportedAvailable = true;
        window.dispatchEvent(new CustomEvent("ReportProductAvailable", {
          bubbles: true,
          composed: true
        }));
        Glean.shopping.surfaceReactivatedButtonClicked.record();
        break;
      case "adsEnabledByUserChanged":
        this.adsEnabledByUser = event.detail?.adsEnabledByUser;
        break;
      case "scroll":
        this.showHeaderShadow = window.scrollY > HEADER_SCROLL_PIXEL_OFFSET;
        break;
      case "UpdateRecommendations":
        this._updateRecommendations(event.detail);
        break;
      case "UpdateAnalysisProgress":
        this._updateAnalysisProgress(event.detail);
        break;
      case "autoOpenEnabledByUserChanged":
        this.autoOpenEnabledByUser = event.detail?.autoOpenEnabledByUser;
        break;
      case "ShowKeepClosedMessage":
        this.showingKeepClosedMessage = true;
        break;
      case "HideKeepClosedMessage":
        this.showingKeepClosedMessage = false;
        break;
      case "ShowNewPositionCard":
        this.showNewPositionCard = true;
        break;
      case "HideNewPositionCard":
        this.showNewPositionCard = false;
        break;
    }
  }
  maybeSetIsHeaderOverflow(entry) {
    let isOverflow = entry.contentRect.height > HEADER_NOT_TEXT_WRAPPED_HEIGHT;
    if (this.isHeaderOverflow != isOverflow) {
      this.isHeaderOverflow = isOverflow;
    }
  }
  getHostnameFromProductUrl() {
    let hostname = URL.parse(this.productUrl)?.hostname;
    if (hostname) {
      return hostname;
    }
    console.warn(`Unknown product url ${this.productUrl}.`);
    return null;
  }
  analysisDetailsTemplate() {
    /* At present, en is supported as the default language for reviews. As we support more sites,
     * update `lang` accordingly if highlights need to be displayed in other languages. */
    let hostname = this.getHostnameFromProductUrl();
    let lang = "en";
    let isDEFRSupported = RPMGetBoolPref("toolkit.shopping.experience2023.defr", false);
    if (isDEFRSupported && hostname === "www.amazon.fr") {
      lang = "fr";
    } else if (isDEFRSupported && hostname === "www.amazon.de") {
      lang = "de";
    }
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.html`
      <review-reliability letter=${this.data.grade}></review-reliability>
      <adjusted-rating
        rating=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.ifDefined)(this.data.adjusted_rating)}
      ></adjusted-rating>
      <review-highlights
        .highlights=${this.data.highlights}
        lang=${lang}
      ></review-highlights>
    `;
  }
  hasDataTemplate() {
    let dataBodyTemplate = null;

    // The user requested an analysis which is not done yet.
    if (this.analysisEvent?.productUrl == this.productUrl && this.isAnalysisInProgress) {
      const isReanalysis = this.analysisEvent.type === "ReanalysisRequested";
      dataBodyTemplate = chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.html`<shopping-message-bar
          type=${isReanalysis ? "reanalysis-in-progress" : "analysis-in-progress"}
          progress=${this.analysisProgress}
        ></shopping-message-bar>
        ${isReanalysis ? this.analysisDetailsTemplate() : null}`;
    } else if (this.data?.error) {
      dataBodyTemplate = chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.html`<shopping-message-bar
        type="generic-error"
      ></shopping-message-bar>`;
    } else if (this.data.page_not_supported) {
      dataBodyTemplate = chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.html`<shopping-message-bar
        type="page-not-supported"
      ></shopping-message-bar>`;
    } else if (this.data.deleted_product_reported) {
      dataBodyTemplate = chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.html`<shopping-message-bar
        type="product-not-available-reported"
      ></shopping-message-bar>`;
    } else if (this.data.deleted_product) {
      dataBodyTemplate = this.userReportedAvailable ? chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.html`<shopping-message-bar
            type="thanks-for-reporting"
          ></shopping-message-bar>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.html`<shopping-message-bar
            type="product-not-available"
          ></shopping-message-bar>`;
    } else if (this.data.needs_analysis) {
      if (!this.data.product_id || typeof this.data.grade != "string") {
        // Product is new to us.
        dataBodyTemplate = chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.html`<unanalyzed-product-card
          productUrl=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.ifDefined)(this.productUrl)}
        ></unanalyzed-product-card>`;
      } else {
        // We successfully analyzed the product before, but the current analysis is outdated and can be updated
        // via a re-analysis.
        dataBodyTemplate = chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.html`
          <shopping-message-bar
            type="stale"
            .productUrl=${this.productUrl}
          ></shopping-message-bar>
          ${this.analysisDetailsTemplate()}
        `;
      }
    } else if (this.data.not_enough_reviews) {
      // We already saw and tried to analyze this product before, but there are not enough reviews
      // to make a detailed analysis.
      dataBodyTemplate = chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.html`<shopping-message-bar
        type="not-enough-reviews"
      ></shopping-message-bar>`;
    } else {
      dataBodyTemplate = this.analysisDetailsTemplate();
    }
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.html`
      ${dataBodyTemplate}${this.explainerTemplate()}${this.recommendationTemplate()}
    `;
  }
  recommendationTemplate() {
    const canShowAds = this.adsEnabled && this.adsEnabledByUser;
    if (this.recommendationData?.length && canShowAds) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.html`<recommended-ad
        .product=${this.recommendationData[0]}
      ></recommended-ad>`;
    }
    return null;
  }

  /**
   * @param {object?} options
   * @param {boolean?} options.animate = true
   *        Whether to animate the loading state. Defaults to true.
   *        There will be no animation for users who prefer reduced motion,
   *        irrespective of the value of this option.
   */
  loadingTemplate({
    animate = true
  } = {}) {
    /* Due to limitations with aria-busy for certain screen readers
     * (see Bug 1682063), mark loading container as a pseudo image and
     * use aria-label as a workaround. */
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.html`
      <div
        id="loading-wrapper"
        data-l10n-id="shopping-a11y-loading"
        role="img"
        class=${animate ? "animate" : ""}
      >
        <div class="loading-box medium"></div>
        <div class="loading-box medium"></div>
        <div class="loading-box large"></div>
        <div class="loading-box small"></div>
        <div class="loading-box large"></div>
        <div class="loading-box small"></div>
      </div>
    `;
  }
  noDataTemplate({
    animate = true
  } = {}) {
    if (this.isAnalysisInProgress) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.html`<shopping-message-bar
          type="analysis-in-progress"
          progress=${this.analysisProgress}
        ></shopping-message-bar
        >${this.explainerTemplate()}${this.recommendationTemplate()}`;
    }
    return this.loadingTemplate({
      animate
    });
  }
  nonPDPTemplate() {
    // TODO: (Bug 1937924) settings template will throw a warning since this.productUrl is null when viewing a non-PDP
    const bodyTextTemplate = this.isSupportedSite ? chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.html` <p
          id="shopping-empty-state-text"
          data-l10n-id="shopping-empty-state-supported-site"
        ></p>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.html`
          <p
            id="shopping-empty-state-text"
            data-l10n-id="shopping-empty-state-non-supported-site"
          ></p>
        `;
    if (!this.formattedDomainList) {
      this.formattedDomainList = this._formattedDomainListTemplate();
    }
    const listTemplate = !this.isSupportedSite ? chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.html`<ul id="shopping-empty-list-of-supported-domains">
          ${this.formattedDomainList}
        </ul>` : null;

    // Anything wrapped by #shopping-empty-wrapper will be centered on sidebar width changes.
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.html`<div id="shopping-empty-wrapper">
        <img
          id="shopping-empty-state-img"
          src="chrome://browser/content/shopping/assets/emptyStateA.svg"
          alt=""
          role="presentation"
        />
        <h2
          id="shopping-empty-state-header"
          data-l10n-id="shopping-empty-state-header"
        ></h2>
        ${bodyTextTemplate} ${listTemplate}
      </div>
      ${this.isSupportedSite ? this.explainerTemplate({
      className: "first-footer-card"
    }) : null}`;
  }
  _formattedDomainListTemplate() {
    if (!this.supportedDomains) {
      return null;
    }
    let template = [];
    let formatter = new Intl.ListFormat(undefined, {
      style: "narrow",
      type: "conjunction"
    });
    Object.keys(this.supportedDomains).sort().forEach(sitename => {
      let domainsFromSite = this.supportedDomains[sitename];

      // List of supported domains per sitename, per row, as a string.
      let anchorsString = domainsFromSite.map(domain => {
        try {
          let url = new URL(domain);
          let hostname = url.hostname;
          /** ShoppingProduct should already validate the URLs in the ProductConfig for us.
           * As an extra precaution though, let's verify that we've been passed a valid URL, in case
           * something goes awry in messages between actors and the shopping-container.
           *
           * @see ShoppingProduct
           */
          let validProtocolRegex = /^(https:\/\/\w+.*)/;
          return validProtocolRegex.test(url) ? `<a class="shopping-supported-domain-link" href=${url.href} target="_blank">${hostname}</a>` : null;
        } catch (e) {
          // Somehow, we got an invalid URL.
          console.error(e);
          return null;
        }
      });

      // Now format the string as a list suitable for the current locale.
      anchorsString = formatter.format(anchorsString);

      // Convert the formatted string into an element that can be inserted into our litElement template.
      const parser = new DOMParser();
      let anchorsDOMDoc = parser.parseFromString(anchorsString, "text/html");
      /**
       * litElement will lose a reference to the childNodes on re-render if we use a DocumentFragment.
       * Instead, add the nodes as an array in our template so that we preserve them.
       */
      let anchorsTemplate = [];
      Array.from(anchorsDOMDoc.body.childNodes).forEach(childNode => {
        anchorsTemplate.push(childNode);
      });
      let listTemplate = chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.html` <li
          id="shopping-empty-state-domains-list-${sitename}"
          class="shopping-supported-domain-list"
        >
          ${anchorsTemplate}
        </li>`;
      template.push(listTemplate);
    });
    return template;
  }
  headerTemplate() {
    const headerWrapperClasses = `${this.showHeaderShadow ? "header-wrapper-shadow" : ""} ${this.isHeaderOverflow ? "header-wrapper-overflow" : ""}`;
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.html`<div id="header-wrapper" class=${headerWrapperClasses}>
      <header id="shopping-header" data-l10n-id="shopping-a11y-header">
        <h1
          id="shopping-header-title"
          data-l10n-id="shopping-main-container-title"
        ></h1>
        <p id="beta-marker" data-l10n-id="shopping-beta-marker"></p>
      </header>
      <button
        id="close-button"
        class="ghost-button shopping-button"
        data-l10n-id="shopping-close-button"
        @click=${this.handleCloseButtonClick}
      ></button>
    </div>`;
  }

  // TODO: (Bug 1949647) do not render "Keep closed" message and notification card simultaneously.
  renderContainer(sidebarContent, {
    showSettings = false
  } = {}) {
    /* Empty state styles for users that are not yet opted-in are managed separately
     * by AboutWelcomeChild.sys.mjs and _shopping.scss. To prevent overlap, only apply
     * the class for these styles if a user is opted-in. */
    const canStyleEmptyState = !this.isProductPage && !this.isOffline && !this.showOnboarding;
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.html`<link
        rel="stylesheet"
        href="${browser_components_shopping_content_shopping_container_css__WEBPACK_IMPORTED_MODULE_2__}"
      />
      <link
        rel="stylesheet"
        href="${toolkit_themes_linux_global_in_content_common_css__WEBPACK_IMPORTED_MODULE_1__}"
      />
      <link
        rel="stylesheet"
        href="${browser_components_shopping_content_shopping_page_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <div id="shopping-container">
        ${this.showHeader ? this.headerTemplate() : null}
        <div
          id="content"
          class=${canStyleEmptyState ? "is-empty-state" : ""}
          aria-live="polite"
          aria-busy=${!this.data}
        >
          <slot name="multi-stage-message-slot"></slot>
          ${this.userInteractionMessageTemplate()}${sidebarContent}
          ${showSettings ? this.settingsTemplate(!this.isSupportedSite && !this.isProductPage ? {
      className: "first-footer-card"
    } : "") : null}
        </div>
      </div>`;
  }
  explainerTemplate({
    className = ""
  } = {}) {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.html`<analysis-explainer
      productUrl=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.ifDefined)(this.productUrl)}
      class=${className}
    ></analysis-explainer>`;
  }
  settingsTemplate({
    className = ""
  } = {}) {
    let hostname = this.getHostnameFromProductUrl();
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.html` <shopping-settings
      ?adsEnabled=${this.adsEnabled}
      ?adsEnabledByUser=${this.adsEnabledByUser}
      ?autoOpenEnabled=${this.autoOpenEnabled}
      ?autoOpenEnabledByUser=${this.autoOpenEnabledByUser}
      .hostname=${hostname}
      class=${className}
    ></shopping-settings>`;
  }
  userInteractionMessageTemplate() {
    /**
     * There are two types of messages about users' interaction with Review Checker that we want to display
     * when users keep the auto-open setting enabled:
     * 1. The "Keep closed" message-bar
     * 2. The "New position" notification card (integratedSidebar only)
     *
     * Only one or the other should be rendered at a time, at the same spot. If a user is eligible
     * to see the notification card, make sure to show that card first. Once the card is dismissed,
     * we can then check if the user is eligible to see the "Keep closed" message.
     */
    if (!this.autoOpenEnabled || !this.autoOpenEnabledByUser) {
      return null;
    }
    let canShowNotificationCard = RPMGetBoolPref(INTEGRATED_SIDEBAR_PREF, false) && this.showNewPositionCard && this.isSidebarStartPosition &&
    // Set fallback value to true to prevent weird flickering UI when switching tabs
    !RPMGetBoolPref(HAS_SEEN_POSITION_NOTIFICATION_CARD_PREF, true) && this.isProductPage;
    let canShowKeepClosedMessage = this.showingKeepClosedMessage && this.isProductPage;
    if (canShowNotificationCard) {
      return this.newPositionNotificationCardTemplate();
    } else if (canShowKeepClosedMessage) {
      return this.keepClosedMessageTemplate();
    }
    return null;
  }
  newPositionNotificationCardTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.html`
      <new-position-notification-card
        isSidebarStartPosition=${this.isSidebarStartPosition}
      ></new-position-notification-card>
    `;
  }
  keepClosedMessageTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.html`<shopping-message-bar
      id="keep-closed-message-bar"
      type="keep-closed"
    ></shopping-message-bar>`;
  }
  render() {
    let content;
    // this.data may be null because we're viewing a non PDP, or a PDP that does not have data yet.
    // Use isProductPage and isSupported to distinguish between the two.
    const isLoadingData = !this.data && this.isProductPage && !this.isSupportedSite;
    if (this.showOnboarding) {
      content = chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_4__.html``;
    } else if (isLoadingData || this.isOffline) {
      content = this.noDataTemplate({
        animate: !this.isOffline
      });
    } else if (!this.isProductPage || this.isSupportedSite) {
      content = this.nonPDPTemplate();
    } else {
      content = this.hasDataTemplate();
    }
    const showSettings = !this.showOnboarding && !this.isOffline && (!isLoadingData || isLoadingData && this.isAnalysisInProgress);
    return this.renderContainer(content, {
      showSettings
    });
  }
  handleCloseButtonClick() {
    let canShowKeepClosedMessage;
    if (this.autoOpenEnabled && this.autoOpenEnabledByUser) {
      canShowKeepClosedMessage = this._canShowKeepClosedMessageOnCloseButtonClick();
    }
    if (!canShowKeepClosedMessage) {
      RPMSetPref(SHOPPING_SIDEBAR_ACTIVE_PREF, false);
      window.dispatchEvent(new CustomEvent("CloseShoppingSidebar", {
        bubbles: true,
        composed: true
      }));
    }
    Glean.shopping.surfaceClosed.record({
      source: "closeButton"
    });
  }

  /**
   * Delaying close is only applicable to the "Keep closed" message.
   *
   * We can show the message under these conditions:
   * - User has already seen the new location notification card
   * - The message was never seen before
   * - User clicked the close button at least 5 times in a session (i.e. met the minimum of 4 counts before this point)
   * - The number of close attempts in a session is less than 7 (i.e. met the maximum of 6 counts before this point)
   *
   * Do not show the message again after the 7th close.
   */
  _canShowKeepClosedMessageOnCloseButtonClick() {
    let yetToSeeNotificationCard = !RPMGetBoolPref(HAS_SEEN_POSITION_NOTIFICATION_CARD_PREF, false) && RPMGetBoolPref(INTEGRATED_SIDEBAR_PREF, false);
    if (yetToSeeNotificationCard || !RPMGetBoolPref(SHOW_KEEP_SIDEBAR_CLOSED_MESSAGE_PREF, false) || this.showOnboarding || !this.isProductPage) {
      return false;
    }
    let sidebarClosedCount = RPMGetIntPref(SIDEBAR_CLOSED_COUNT_PREF, 0);
    let canShowKeepClosedMessage = !this.showingKeepClosedMessage && sidebarClosedCount >= CLOSED_COUNT_PREVIOUS_MIN;
    if (canShowKeepClosedMessage) {
      this.showingKeepClosedMessage = true;
      return true;
    }
    this.showingKeepClosedMessage = false;
    if (sidebarClosedCount >= CLOSED_COUNT_PREVIOUS_MAX) {
      RPMSetPref(SHOW_KEEP_SIDEBAR_CLOSED_MESSAGE_PREF, false);
    } else {
      RPMSetPref(SIDEBAR_CLOSED_COUNT_PREF, sidebarClosedCount + 1);
    }
    return false;
  }
}
customElements.define("shopping-container", ShoppingContainer);

/***/ }),

/***/ 38582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var browser_components_shopping_content_shopping_page_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57143);
/* harmony import */ var browser_components_shopping_content_shopping_message_bar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53665);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73689);
/* harmony import */ var chrome_global_content_elements_moz_message_bar_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46949);


/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*-
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* eslint-env mozilla/remote-page */




// eslint-disable-next-line import/no-unassigned-import

const SHOPPING_SIDEBAR_ACTIVE_PREF = "browser.shopping.experience2023.active";
const SHOW_KEEP_SIDEBAR_CLOSED_MESSAGE_PREF = "browser.shopping.experience2023.showKeepSidebarClosedMessage";
const SHOPPING_AUTO_OPEN_SIDEBAR_PREF = "browser.shopping.experience2023.autoOpen.userEnabled";
class ShoppingMessageBar extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.MozLitElement {
  #MESSAGE_TYPES_RENDER_TEMPLATE_MAPPING = new Map([["stale", () => this.staleWarningTemplate()], ["generic-error", () => this.genericErrorTemplate()], ["not-enough-reviews", () => this.notEnoughReviewsTemplate()], ["product-not-available", () => this.productNotAvailableTemplate()], ["thanks-for-reporting", () => this.thanksForReportingTemplate()], ["product-not-available-reported", () => this.productNotAvailableReportedTemplate()], ["analysis-in-progress", () => this.analysisInProgressTemplate()], ["reanalysis-in-progress", () => this.reanalysisInProgressTemplate()], ["page-not-supported", () => this.pageNotSupportedTemplate()], ["thank-you-for-feedback", () => this.thankYouForFeedbackTemplate()], ["keep-closed", () => this.keepClosedTemplate()]]);
  static properties = {
    type: {
      type: String
    },
    productUrl: {
      type: String,
      reflect: true
    },
    progress: {
      type: Number,
      reflect: true
    }
  };
  static get queries() {
    return {
      reAnalysisButtonEl: "#message-bar-reanalysis-button",
      productAvailableBtnEl: "#message-bar-report-product-available-btn",
      yesKeepClosedButtonEl: "#yes-keep-closed-button",
      noThanksButtonEl: "#no-thanks-button"
    };
  }
  onClickAnalysisButton() {
    this.dispatchEvent(new CustomEvent("ReanalysisRequested", {
      bubbles: true,
      composed: true
    }));
    Glean.shopping.surfaceReanalyzeClicked.record();
  }
  onClickProductAvailable() {
    this.dispatchEvent(new CustomEvent("ReportedProductAvailable", {
      bubbles: true,
      composed: true
    }));
  }
  handleNoThanksClick() {
    RPMSetPref(SHOPPING_SIDEBAR_ACTIVE_PREF, false);
    RPMSetPref(SHOW_KEEP_SIDEBAR_CLOSED_MESSAGE_PREF, false);
    this.dispatchEvent(new CustomEvent("HideKeepClosedMessage", {
      bubbles: true,
      composed: true
    }));
    Glean.shopping.surfaceNoThanksButtonClicked.record();
  }
  handleKeepClosedClick() {
    RPMSetPref(SHOPPING_SIDEBAR_ACTIVE_PREF, false);
    RPMSetPref(SHOW_KEEP_SIDEBAR_CLOSED_MESSAGE_PREF, false);
    RPMSetPref(SHOPPING_AUTO_OPEN_SIDEBAR_PREF, false);
    this.dispatchEvent(new CustomEvent("HideKeepClosedMessage", {
      bubbles: true,
      composed: true
    }));
    Glean.shopping.surfaceYesKeepClosedButtonClicked.record();
  }
  staleWarningTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<div class="shopping-message-bar">
      <span class="icon"></span>
      <article id="message-bar-container" aria-labelledby="header">
        <span
          data-l10n-id="shopping-message-bar-warning-stale-analysis-message-2"
        ></span>
        <button
          id="message-bar-reanalysis-button"
          class="small-button shopping-button"
          data-l10n-id="shopping-message-bar-warning-stale-analysis-button"
          @click=${this.onClickAnalysisButton}
        ></button>
      </article>
    </div>`;
  }
  genericErrorTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<moz-message-bar
      type="warning"
      data-l10n-id="shopping-message-bar-generic-error"
    >
    </moz-message-bar>`;
  }
  notEnoughReviewsTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<moz-message-bar
      type="warning"
      data-l10n-id="shopping-message-bar-warning-not-enough-reviews"
    >
    </moz-message-bar>`;
  }
  productNotAvailableTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<moz-message-bar
      type="warning"
      data-l10n-id="shopping-message-bar-warning-product-not-available"
    >
      <button
        slot="actions"
        id="message-bar-report-product-available-btn"
        class="small-button shopping-button"
        data-l10n-id="shopping-message-bar-warning-product-not-available-button2"
        @click=${this.onClickProductAvailable}
      ></button>
    </moz-message-bar>`;
  }
  thanksForReportingTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<moz-message-bar
      type="info"
      data-l10n-id="shopping-message-bar-thanks-for-reporting"
    >
    </moz-message-bar>`;
  }
  productNotAvailableReportedTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<moz-message-bar
      type="warning"
      data-l10n-id="shopping-message-bar-warning-product-not-available-reported"
    >
    </moz-message-bar>`;
  }
  analysisInProgressTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<div
      class="shopping-message-bar analysis-in-progress"
      style=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.styleMap)({
      "--analysis-progress-pcent": `${this.progress}%`
    })}
    >
      <span class="icon"></span>
      <article
        id="message-bar-container"
        aria-labelledby="header"
        type="analysis"
      >
        <strong
          id="header"
          data-l10n-id="shopping-message-bar-analysis-in-progress-with-amount"
          data-l10n-args=${JSON.stringify({
      percentage: Math.round(this.progress)
    })}
        ></strong>
        <span
          data-l10n-id="shopping-message-bar-analysis-in-progress-message2"
        ></span>
      </article>
    </div>`;
  }
  reanalysisInProgressTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<div
      class="shopping-message-bar"
      id="reanalysis-in-progress-message"
      style=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.styleMap)({
      "--analysis-progress-pcent": `${this.progress}%`
    })}
    >
      <span class="icon"></span>
      <article
        id="message-bar-container"
        aria-labelledby="header"
        type="re-analysis"
      >
        <span
          id="header"
          data-l10n-id="shopping-message-bar-analysis-in-progress-with-amount"
          data-l10n-args=${JSON.stringify({
      percentage: Math.round(this.progress)
    })}
        ></span>
      </article>
    </div>`;
  }
  pageNotSupportedTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<moz-message-bar
      type="warning"
      data-l10n-id="shopping-message-bar-page-not-supported"
    >
    </moz-message-bar>`;
  }
  thankYouForFeedbackTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<moz-message-bar
      type="success"
      dismissable
      data-l10n-id="shopping-survey-thanks"
    >
    </moz-message-bar>`;
  }
  keepClosedTemplate() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<moz-message-bar
      type="info"
      data-l10n-id="shopping-message-bar-keep-closed-header"
    >
      <moz-button-group slot="actions">
        <button
          id="no-thanks-button"
          class="small-button shopping-button"
          data-l10n-id="shopping-message-bar-keep-closed-dismiss-button"
          @click=${this.handleNoThanksClick}
        ></button>
        <button
          id="yes-keep-closed-button"
          class="primary small-button shopping-button"
          data-l10n-id="shopping-message-bar-keep-closed-accept-button"
          @click=${this.handleKeepClosedClick}
        ></button>
      </moz-button-group>
    </moz-message-bar>`;
  }
  render() {
    let messageBarTemplate = this.#MESSAGE_TYPES_RENDER_TEMPLATE_MAPPING.get(this.type)();
    if (messageBarTemplate) {
      if (this.type == "stale") {
        Glean.shopping.surfaceStaleAnalysisShown.record();
      }
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`
        <link
          rel="stylesheet"
          href="${browser_components_shopping_content_shopping_message_bar_css__WEBPACK_IMPORTED_MODULE_1__}"
        />
        <link
          rel="stylesheet"
          href="${browser_components_shopping_content_shopping_page_css__WEBPACK_IMPORTED_MODULE_0__}"
        />
        ${messageBarTemplate}
      `;
    }
    return null;
  }
}
customElements.define("shopping-message-bar", ShoppingMessageBar);

/***/ }),

/***/ 99277:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var browser_components_shopping_content_unanalyzed_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(478);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73689);
/* harmony import */ var chrome_browser_content_shopping_shopping_card_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61048);

/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*-
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




// eslint-disable-next-line import/no-unassigned-import

class UnanalyzedProductCard extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    productURL: {
      type: String,
      reflect: true
    }
  };
  static get queries() {
    return {
      analysisButtonEl: "#unanalyzed-product-analysis-button"
    };
  }
  onClickAnalysisButton() {
    this.dispatchEvent(new CustomEvent("NewAnalysisRequested", {
      bubbles: true,
      composed: true
    }));
    Glean.shopping.surfaceAnalyzeReviewsNoneAvailableClicked.record();
  }
  render() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <link
        rel="stylesheet"
        href="${browser_components_shopping_content_unanalyzed_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <shopping-card>
        <div id="unanalyzed-product-wrapper" slot="content">
          <img id="unanalyzed-product-icon" role="presentation" alt=""></img>
          <div id="unanalyzed-product-message-content">
            <h2
              data-l10n-id="shopping-unanalyzed-product-header-2"
            ></h2>
            <p data-l10n-id="shopping-unanalyzed-product-message-2"></p>
          </div>
          <button
            id="unanalyzed-product-analysis-button"
            class="primary"
            data-l10n-id="shopping-unanalyzed-product-analyze-button"
            @click=${this.onClickAnalysisButton}
          ></button>
        </div>
      </shopping-card>
    `;
  }
}
customElements.define("unanalyzed-product-card", UnanalyzedProductCard);

/***/ }),

/***/ 16557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PLATFORM_LINUX": () => (/* binding */ PLATFORM_LINUX),
/* harmony export */   "PLATFORM_MACOS": () => (/* binding */ PLATFORM_MACOS),
/* harmony export */   "PLATFORM_WINDOWS": () => (/* binding */ PLATFORM_WINDOWS),
/* harmony export */   "default": () => (/* binding */ MozButtonGroup)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_button_group_moz_button_group_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29827);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73689);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



const PLATFORM_LINUX = "linux";
const PLATFORM_MACOS = "macosx";
const PLATFORM_WINDOWS = "win";

/**
 * A grouping of buttons. Primary button order will be set automatically based
 * on class="primary", type="submit" or autofocus attribute. Set slot="primary"
 * on a primary button that does not have primary styling to set its position.
 *
 * @tagname moz-button-group
 * @property {string} platform - The detected platform, set automatically.
 */
class MozButtonGroup extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static queries = {
    defaultSlotEl: "slot:not([name])",
    primarySlotEl: "slot[name=primary]"
  };
  static properties = {
    platform: {
      state: true
    }
  };
  constructor() {
    super();
    this.#detectPlatform();
  }
  #detectPlatform() {
    if (typeof AppConstants !== "undefined") {
      this.platform = AppConstants.platform;
    } else if (navigator.platform.includes("Linux")) {
      this.platform = PLATFORM_LINUX;
    } else if (navigator.platform.includes("Mac")) {
      this.platform = PLATFORM_MACOS;
    } else {
      this.platform = PLATFORM_WINDOWS;
    }
  }
  onSlotchange() {
    for (let child of this.defaultSlotEl.assignedNodes()) {
      if (!(child instanceof Element)) {
        // Text nodes won't support classList or getAttribute.
        continue;
      }
      switch (child.localName) {
        case "button":
          if (child.classList.contains("primary") || child.getAttribute("type") == "submit" || child.hasAttribute("autofocus") || child.hasAttribute("default")) {
            child.slot = "primary";
          }
          break;
        case "moz-button":
          if (child.type == "primary" || child.type == "destructive") {
            child.slot = "primary";
          }
          break;
      }
    }
    this.#reorderLightDom();
  }
  #reorderLightDom() {
    let primarySlottedChildren = [...this.primarySlotEl.assignedNodes()];
    if (this.platform == PLATFORM_WINDOWS) {
      primarySlottedChildren.reverse();
      for (let child of primarySlottedChildren) {
        child.parentElement.prepend(child);
      }
    } else {
      for (let child of primarySlottedChildren) {
        // Ensure the primary buttons are at the end of the light DOM.
        child.parentElement.append(child);
      }
    }
  }
  updated(changedProperties) {
    if (changedProperties.has("platform")) {
      this.#reorderLightDom();
    }
  }
  render() {
    let slots = [chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html` <slot @slotchange=${this.onSlotchange}></slot> `, chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html` <slot name="primary"></slot> `];
    if (this.platform == PLATFORM_WINDOWS) {
      slots = [slots[1], slots[0]];
    }
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_button_group_moz_button_group_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      ${slots}
    `;
  }
}
customElements.define("moz-button-group", MozButtonGroup);

/***/ }),

/***/ 15872:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozButton)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_button_moz_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54078);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45717);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73689);
/* harmony import */ var chrome_global_content_elements_moz_label_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58825);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




// eslint-disable-next-line import/no-unassigned-import


/**
 * A button with multiple types and two sizes.
 *
 * @tagname moz-button
 * @property {string} label - The button's label, will be overridden by slotted content.
 * @property {string} type - The button type.
 *   Options: default, primary, destructive, icon, icon ghost, ghost.
 * @property {string} size - The button size.
 *   Options: default, small.
 * @property {boolean} disabled - The disabled state.
 * @property {string} title - The button's title attribute, used in shadow DOM and therefore not as an attribute on moz-button.
 * @property {string} titleAttribute - Internal, map title attribute to the title JS property.
 * @property {string} tooltipText - Set the title property, the title attribute will be used first.
 * @property {string} ariaLabel - The button's arial-label attribute, used in shadow DOM and therefore not as an attribute on moz-button.
 * @property {string} iconSrc - Path to the icon that should be displayed in the button.
 * @property {string} ariaLabelAttribute - Internal, map aria-label attribute to the ariaLabel JS property.
 * @property {string} hasVisibleLabel - Internal, tracks whether or not the button has a visible label.
 * @property {boolean} attention - Show a dot notification on the button if true.
 * @property {string} iconPosition - The icon's position relative to the button label.
 *   Options: start, end.
 * @property {HTMLButtonElement} buttonEl - The internal button element in the shadow DOM.
 * @property {HTMLButtonElement} slotEl - The internal slot element in the shadow DOM.
 * @cssproperty [--button-outer-padding-inline] - Used to set the outer inline padding of toolbar style buttons
 * @csspropert [--button-outer-padding-block] - Used to set the outer block padding of toolbar style buttons.
 * @cssproperty [--button-outer-padding-inline-start] - Used to set the outer inline-start padding of toolbar style buttons
 * @cssproperty [--button-outer-padding-inline-end] - Used to set the outer inline-end padding of toolbar style buttons
 * @cssproperty [--button-outer-padding-block-start] - Used to set the outer block-start padding of toolbar style buttons
 * @cssproperty [--button-outer-padding-block-end] - Used to set the outer block-end padding of toolbar style buttons
 * @slot default - The button's content, overrides label property.
 * @fires click - The click event.
 */
class MozButton extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static shadowRootOptions = {
    ..._lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement.shadowRootOptions,
    delegatesFocus: true
  };
  static properties = {
    label: {
      type: String,
      reflect: true,
      fluent: true
    },
    type: {
      type: String,
      reflect: true
    },
    size: {
      type: String,
      reflect: true
    },
    disabled: {
      type: Boolean,
      reflect: true
    },
    title: {
      type: String,
      mapped: true
    },
    tooltipText: {
      type: String,
      fluent: true
    },
    ariaLabel: {
      type: String,
      mapped: true
    },
    iconSrc: {
      type: String
    },
    hasVisibleLabel: {
      type: Boolean,
      state: true
    },
    accessKey: {
      type: String,
      mapped: true,
      fluent: true
    },
    attention: {
      type: Boolean
    },
    iconPosition: {
      type: String
    }
  };
  static queries = {
    buttonEl: "button",
    slotEl: "slot",
    backgroundEl: ".button-background"
  };
  constructor() {
    super();
    this.type = "default";
    this.size = "default";
    this.disabled = false;
    this.hasVisibleLabel = !!this.label;
    this.attention = false;
    this.iconPosition = "start";
  }

  // Delegate clicks on host to the button element.
  click() {
    this.buttonEl.click();
  }
  checkForLabelText() {
    this.hasVisibleLabel = this.slotEl?.assignedNodes().some(node => node.textContent.trim());
  }
  labelTemplate() {
    if (this.label) {
      return this.label;
    }
    return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`<slot @slotchange=${this.checkForLabelText}></slot>`;
  }
  iconTemplate(position) {
    if (this.iconSrc && position == this.iconPosition) {
      return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`<img src=${this.iconSrc} role="presentation" />`;
    }
    return null;
  }
  render() {
    return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_button_moz_button_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <button
        ?disabled=${this.disabled}
        title=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.title || this.tooltipText)}
        aria-label=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.ariaLabel)}
        accesskey=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.accessKey)}
      >
        <span
          class=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.classMap)({
      labelled: this.label || this.hasVisibleLabel,
      "button-background": true,
      badged: (this.iconSrc || this.type.includes("icon")) && this.attention
    })}
          part="button"
          type=${this.type}
          size=${this.size}
        >
          ${this.iconTemplate("start")}
          <label
            is="moz-label"
            shownaccesskey=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.accessKey)}
            part="moz-button-label"
          >
            ${this.labelTemplate()}
          </label>
          ${this.iconTemplate("end")}
        </span>
      </button>
    `;
  }
}
customElements.define("moz-button", MozButton);

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

/***/ 34535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozFiveStar)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_five_star_moz_five_star_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32248);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45717);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73689);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



window.MozXULElement?.insertFTLIfNeeded("toolkit/global/mozFiveStar.ftl");

/**
 * @typedef {HTMLSpanElement} MozFiveStarRatingStarElement
 */

/**
 * @typedef {{
 *   rating: number
 *   fill: 'full' | 'half' | 'empty'
 * }} MozFiveStarRenderedStarState
 */

/**
 * The visual representation is five stars, each of them either empty,
 * half-filled or full. The fill state is derived from the rating,
 * rounded to the nearest half.
 *
 * @tagname moz-five-star
 * @property {number} rating - The rating out of 5.
 * @property {string} title - The title text.
 */
class MozFiveStar extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    rating: {
      type: Number,
      reflect: true
    },
    title: {
      type: String
    },
    selectable: {
      type: Boolean
    }
  };
  constructor() {
    super();

    /**
     * The initial rating that is also dynamically updated to the selected
     * rating if {@link selectable} is set to true.
     *
     * @type {number}
     */
    this.rating = 0;

    /**
     * Whether the stars in the component are selectable.
     *
     * @type {boolean}
     */
    this.selectable = false;
  }
  static get queries() {
    return {
      starEls: {
        all: ".rating-star"
      },
      starsWrapperEl: ".stars"
    };
  }

  /**
   * @returns {Array<MozFiveStarRenderedStarState>}
   */
  getStars() {
    /**
     * @type {Array<MozFiveStarRenderedStarState>}
     */
    let stars = [];
    let roundedRating = Math.round(this.rating * 2) / 2;
    for (let i = 1; i <= 5; i++) {
      if (i <= roundedRating) {
        stars.push({
          rating: i,
          fill: "full"
        });
      } else if (i - roundedRating === 0.5) {
        stars.push({
          rating: i,
          fill: "half"
        });
      } else {
        stars.push({
          rating: i,
          fill: "empty"
        });
      }
    }
    return stars;
  }

  /**
   * @param {MozFiveStarRatingStarElement} ratingStarElement
   * @returns
   */
  getStarElementRating(ratingStarElement) {
    const stringRating = ratingStarElement.getAttribute("rating") || "";
    return parseInt(stringRating, 10);
  }

  /**
   * @param {MouseEvent} e
   */
  onClick(e) {
    if (!this.selectable) {
      return;
    }
    /**
     * @type {MozFiveStarRatingStarElement}
     */
    const ratingStarElement = /**@type {object} */e.target;
    this.rating = this.getStarElementRating(ratingStarElement);
    this.dispatchEvent(new CustomEvent("select", {
      detail: {
        rating: this.rating
      }
    }));
  }
  render() {
    const {
      rating,
      selectable,
      title
    } = this;
    const starsTitle = title || selectable;
    return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_five_star_moz_five_star_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <div
        class="stars"
        role="img"
        data-l10n-id=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(starsTitle ? undefined : "moz-five-star-rating")}
        data-l10n-args=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(starsTitle ? undefined : JSON.stringify({
      rating
    }))}
      >
        ${this.getStars().map(({
      rating: ratingValue,
      fill
    }) => {
      return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`<span
            class=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.classMap)({
        "rating-star": true,
        selectable
      })}
            fill=${fill}
            rating=${ratingValue}
            @click=${this.onClick}
            data-l10n-id=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(selectable ? "moz-five-star-rating-rate-text" : undefined)}
            data-l10n-args=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(selectable ? JSON.stringify({
        rating: ratingValue
      }) : undefined)}
          ></span>`;
    })}
      </div>
    `;
  }
}
customElements.define("moz-five-star", MozFiveStar);

/***/ }),

/***/ 58825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var toolkit_content_widgets_moz_label_moz_label_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83230);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * An extension of the label element that provides accesskey styling and
 * formatting as well as click handling logic.
 *
 * @tagname moz-label
 * @attribute {string} accesskey - Key used for keyboard access.
 * @attribute {string} shownaccesskey - Key to underline but not set as
 *   accesskey, this is useful to work around an issue where multiple accesskeys
 *   on the same element cause it to be focused isntead of activated.
 */
class MozTextLabel extends HTMLLabelElement {
  #insertSeparator = false;
  #alwaysAppendAccessKey = false;
  #lastFormattedAccessKey = null;
  #observer = null;

  // Default to underlining accesskeys for Windows and Linux.
  static #underlineAccesskey = !navigator.platform.includes("Mac");
  static get observedAttributes() {
    return ["accesskey", "shownaccesskey"];
  }
  static stylesheetUrl = toolkit_content_widgets_moz_label_moz_label_css__WEBPACK_IMPORTED_MODULE_0__;
  constructor() {
    super();
    this.#register();
    this.addEventListener("click", this._onClick);
  }
  #register() {
    if (window.IS_STORYBOOK) {
      MozTextLabel.#underlineAccesskey = true;
    } else if (typeof Services !== "undefined") {
      MozTextLabel.#underlineAccesskey = !!Services.prefs.getIntPref("ui.key.menuAccessKey", Number(!navigator.platform.includes("Mac")));
      if (MozTextLabel.#underlineAccesskey) {
        try {
          const nsIPrefLocalizedString = Ci.nsIPrefLocalizedString;
          const prefNameInsertSeparator = "intl.menuitems.insertseparatorbeforeaccesskeys";
          const prefNameAlwaysAppendAccessKey = "intl.menuitems.alwaysappendaccesskeys";
          let val = Services.prefs.getComplexValue(prefNameInsertSeparator, nsIPrefLocalizedString).data;
          this.#insertSeparator = val == "true";
          val = Services.prefs.getComplexValue(prefNameAlwaysAppendAccessKey, nsIPrefLocalizedString).data;
          this.#alwaysAppendAccessKey = val == "true";
        } catch (e) {
          this.#insertSeparator = this.#alwaysAppendAccessKey = true;
        }
      }
    }
  }
  connectedCallback() {
    this.#setStyles();
    this.formatAccessKey();
    if (!this.#observer) {
      this.#observer = new MutationObserver(() => {
        this.formatAccessKey();
      }).observe(this, {
        characterData: true,
        childList: true,
        subtree: true
      });
    }
  }
  disconnectedCallback() {
    if (this.#observer) {
      this.#observer.disconnect();
      this.#observer = null;
    }
  }

  // Bug 1820588 - we may want to generalize this into
  // MozHTMLElement.insertCssIfNeeded(style)
  #setStyles() {
    let root = this.getRootNode();
    if (root.__mozLabelCssAdded) {
      return;
    }
    let container = root.head ?? root;
    for (let link of container.querySelectorAll("link")) {
      if (link.getAttribute("href") == this.constructor.stylesheetUrl) {
        return;
      }
    }
    let style = document.createElement("link");
    style.rel = "stylesheet";
    style.href = this.constructor.stylesheetUrl;
    container.appendChild(style);
    root.__mozLabelCssAdded = true;
  }
  set textContent(val) {
    super.textContent = val;
    this.#lastFormattedAccessKey = null;
    this.formatAccessKey();
  }
  get textContent() {
    return super.textContent;
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (oldValue == newValue) {
      return;
    }

    // Note that this is only happening when "accesskey" attribute changes.
    this.formatAccessKey();
  }
  _onClick() {
    let controlElement = this.labeledControlElement;
    if (!controlElement || this.disabled) {
      return;
    }
    controlElement.focus();
    if ((controlElement.localName == "checkbox" || controlElement.localName == "radio") && controlElement.getAttribute("disabled") == "true") {
      return;
    }
    if (controlElement.localName == "checkbox") {
      controlElement.checked = !controlElement.checked;
    } else if (controlElement.localName == "radio") {
      controlElement.control.selectedItem = controlElement;
    }
  }
  set accessKey(val) {
    this.setAttribute("accesskey", val);
    let control = this.labeledControlElement;
    if (control) {
      control.setAttribute("accesskey", val);
    }
  }
  get accessKey() {
    let accessKey = this.getAttribute("accesskey");
    return accessKey ? accessKey[0] : null;
  }
  get labeledControlElement() {
    let control = this.control;
    return control ? document.getElementById(control) : null;
  }
  set control(val) {
    this.setAttribute("control", val);
  }
  get control() {
    return this.getAttribute("control");
  }

  // This is used to match the rendering of accesskeys from nsTextBoxFrame.cpp (i.e. when the
  // label uses [value]). So this is just for when we have textContent.
  formatAccessKey() {
    // Skip doing any DOM manipulation whenever possible:
    let accessKey = this.accessKey || this.getAttribute("shownaccesskey");
    if (!MozTextLabel.#underlineAccesskey || this.#lastFormattedAccessKey == accessKey || !this.textContent || !this.textContent.trim()) {
      return;
    }
    this.#lastFormattedAccessKey = accessKey;
    if (this.accessKeySpan) {
      // Clear old accesskey
      mergeElement(this.accessKeySpan);
      this.accessKeySpan = null;
    }
    if (this.hiddenColon) {
      mergeElement(this.hiddenColon);
      this.hiddenColon = null;
    }
    if (this.accessKeyParens) {
      this.accessKeyParens.remove();
      this.accessKeyParens = null;
    }

    // If we used to have an accessKey but not anymore, we're done here
    if (!accessKey) {
      return;
    }
    let labelText = this.textContent;
    let accessKeyIndex = -1;
    if (!this.#alwaysAppendAccessKey) {
      accessKeyIndex = labelText.indexOf(accessKey);
      if (accessKeyIndex < 0) {
        // Try again in upper case
        accessKeyIndex = labelText.toUpperCase().indexOf(accessKey.toUpperCase());
      }
    } else if (labelText.endsWith(`(${accessKey.toUpperCase()})`)) {
      accessKeyIndex = labelText.length - (1 + accessKey.length); // = index of accessKey.
    }
    const HTML_NS = "http://www.w3.org/1999/xhtml";
    this.accessKeySpan = document.createElementNS(HTML_NS, "span");
    this.accessKeySpan.className = "accesskey";

    // Note that if you change the following code, see the comment of
    // nsTextBoxFrame::UpdateAccessTitle.

    // If accesskey is in the string, underline it:
    if (accessKeyIndex >= 0) {
      wrapChar(this, this.accessKeySpan, accessKeyIndex);
      return;
    }

    // If accesskey is not in string, append in parentheses
    // If end is colon, we should insert before colon.
    // i.e., "label:" -> "label(X):"
    let colonHidden = false;
    if (/:$/.test(labelText)) {
      labelText = labelText.slice(0, -1);
      this.hiddenColon = document.createElementNS(HTML_NS, "span");
      this.hiddenColon.className = "hiddenColon";
      this.hiddenColon.style.display = "none";
      // Hide the last colon by using span element.
      // I.e., label<span style="display:none;">:</span>
      wrapChar(this, this.hiddenColon, labelText.length);
      colonHidden = true;
    }
    // If end is space(U+20),
    // we should not add space before parentheses.
    let endIsSpace = false;
    if (/ $/.test(labelText)) {
      endIsSpace = true;
    }
    this.accessKeyParens = document.createElementNS("http://www.w3.org/1999/xhtml", "span");
    this.appendChild(this.accessKeyParens);
    if (this.#insertSeparator && !endIsSpace) {
      this.accessKeyParens.textContent = " (";
    } else {
      this.accessKeyParens.textContent = "(";
    }
    this.accessKeySpan.textContent = accessKey.toUpperCase();
    this.accessKeyParens.appendChild(this.accessKeySpan);
    if (!colonHidden) {
      this.accessKeyParens.appendChild(document.createTextNode(")"));
    } else {
      this.accessKeyParens.appendChild(document.createTextNode("):"));
    }
  }
}
customElements.define("moz-label", MozTextLabel, {
  extends: "label"
});
function mergeElement(element) {
  // If the element has been removed already, return:
  if (!element.isConnected) {
    return;
  }
  // `isInstance` isn't available to web content (i.e. Storybook) so we need to
  // fallback to using `instanceof`.
  if (Text.hasOwnProperty("isInstance") ? Text.isInstance(element.previousSibling) :
  // eslint-disable-next-line mozilla/use-isInstance
  element.previousSibling instanceof Text) {
    element.previousSibling.appendData(element.textContent);
  } else {
    element.parentNode.insertBefore(element.firstChild, element);
  }
  element.remove();
}
function wrapChar(parentNode, element, index) {
  let treeWalker = document.createNodeIterator(parentNode, NodeFilter.SHOW_TEXT, null);
  let node = treeWalker.nextNode();
  while (index >= node.length) {
    index -= node.length;
    node = treeWalker.nextNode();
  }
  if (index) {
    node = node.splitText(index);
  }
  node.parentNode.insertBefore(element, node);
  if (node.length > 1) {
    node.splitText(1);
  }
  element.appendChild(node);
}

/***/ }),

/***/ 46949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozMessageBar)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_message_bar_moz_message_bar_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84296);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45717);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73689);
/* harmony import */ var chrome_global_content_elements_moz_button_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15872);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



// eslint-disable-next-line import/no-unassigned-import

window.MozXULElement?.insertFTLIfNeeded("toolkit/global/mozMessageBar.ftl");
const messageTypeToIconData = {
  info: {
    iconSrc: "chrome://global/skin/icons/info-filled.svg",
    l10nId: "moz-message-bar-icon-info"
  },
  warning: {
    iconSrc: "chrome://global/skin/icons/warning.svg",
    l10nId: "moz-message-bar-icon-warning"
  },
  success: {
    iconSrc: "chrome://global/skin/icons/check-filled.svg",
    l10nId: "moz-message-bar-icon-success"
  },
  error: {
    iconSrc: "chrome://global/skin/icons/error.svg",
    l10nId: "moz-message-bar-icon-error"
  },
  critical: {
    iconSrc: "chrome://global/skin/icons/error.svg",
    l10nId: "moz-message-bar-icon-error"
  }
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
 * @property {string} messageL10nId - l10n ID for the message.
 * @property {string} messageL10nArgs - Any args needed for the message l10n ID.
 * @fires message-bar:close
 *  Custom event indicating that message bar was closed.
 * @fires message-bar:user-dismissed
 *  Custom event indicating that message bar was dismissed by the user.
 */

class MozMessageBar extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static queries = {
    actionsSlot: "slot[name=actions]",
    actionsEl: ".actions",
    closeButton: "moz-button.close",
    messageEl: ".message",
    supportLinkSlot: "slot[name=support-link]"
  };
  static properties = {
    type: {
      type: String
    },
    heading: {
      type: String,
      fluent: true
    },
    message: {
      type: String,
      fluent: true
    },
    dismissable: {
      type: Boolean
    },
    messageL10nId: {
      type: String
    },
    messageL10nArgs: {
      type: String
    }
  };
  constructor() {
    super();
    this.type = "info";
    this.dismissable = false;
  }
  onActionSlotchange() {
    let actions = this.actionsSlot.assignedNodes();
    this.actionsEl.classList.toggle("active", actions.length);
  }
  onLinkSlotChange() {
    this.messageEl.classList.toggle("has-link-after", !!this.supportLinkEls.length);
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "alert");
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.dispatchEvent(new CustomEvent("message-bar:close"));
  }
  get supportLinkEls() {
    return this.supportLinkSlot.assignedElements();
  }
  iconTemplate() {
    let iconData = messageTypeToIconData[this.type];
    if (iconData) {
      let {
        iconSrc,
        l10nId
      } = iconData;
      return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
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
      return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`<strong class="heading">${this.heading}</strong>`;
    }
    return "";
  }
  closeButtonTemplate({
    size
  } = {}) {
    if (this.dismissable) {
      return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
        <moz-button
          type="icon ghost"
          class="close"
          size=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(size)}
          data-l10n-id="moz-message-bar-close-button"
          @click=${this.dismiss}
        ></moz-button>
      `;
    }
    return "";
  }
  render() {
    return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_message_bar_moz_message_bar_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <div class="container">
        <div class="content">
          <div class="text-container">
            ${this.iconTemplate()}
            <div class="text-content">
              ${this.headingTemplate()}
              <div>
                <span
                  class="message"
                  data-l10n-id=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.messageL10nId)}
                  data-l10n-args=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(JSON.stringify(this.messageL10nArgs))}
                >
                  ${this.message}
                </span>
                <span class="link">
                  <slot
                    name="support-link"
                    @slotchange=${this.onLinkSlotChange}
                  ></slot>
                </span>
              </div>
            </div>
          </div>
          <span class="actions">
            <slot name="actions" @slotchange=${this.onActionSlotchange}></slot>
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

/***/ }),

/***/ 49896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozSupportLink),
/* harmony export */   "formatUTMParams": () => (/* binding */ formatUTMParams)
/* harmony export */ });
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

window.MozXULElement?.insertFTLIfNeeded("toolkit/global/mozSupportLink.ftl");

/**
 * An extension of the anchor element that helps create links to Mozilla's
 * support documentation. This should be used for SUMO links only - other "Learn
 * more" links can use the regular anchor element.
 *
 * @tagname moz-support-link
 * @attribute {string} support-page - Short-hand string from SUMO to the specific support page.
 * @attribute {string} utm-content - UTM parameter for a URL, if it is an AMO URL.
 * @attribute {string} data-l10n-id - Fluent ID used to generate the text content.
 */
class MozSupportLink extends HTMLAnchorElement {
  static SUPPORT_URL = "https://www.mozilla.org/";
  static get observedAttributes() {
    return ["support-page", "utm-content"];
  }

  /**
   * Handles setting up the SUPPORT_URL preference getter.
   * Without this, the tests for this component may not behave
   * as expected.
   * @private
   * @memberof MozSupportLink
   */
  #register() {
    if (window.document.nodePrincipal?.isSystemPrincipal) {
      ChromeUtils.defineESModuleGetters(MozSupportLink, {
        BrowserUtils: "resource://gre/modules/BrowserUtils.sys.mjs"
      });

      // eslint-disable-next-line no-shadow
      let {
        XPCOMUtils
      } = window.XPCOMUtils ? window : ChromeUtils.importESModule("resource://gre/modules/XPCOMUtils.sys.mjs");
      XPCOMUtils.defineLazyPreferenceGetter(MozSupportLink, "SUPPORT_URL", "app.support.baseURL", "", null, val => Services.urlFormatter.formatURL(val));
    } else if (!window.IS_STORYBOOK) {
      MozSupportLink.SUPPORT_URL = window.RPMGetFormatURLPref("app.support.baseURL");
    }
  }
  connectedCallback() {
    this.#register();
    this.#setHref();
    this.setAttribute("target", "_blank");
    this.addEventListener("click", this);
    if (!this.getAttribute("data-l10n-id") && !this.getAttribute("data-l10n-name") && !this.childElementCount) {
      document.l10n.setAttributes(this, "moz-support-link-text");
    }
    document.l10n.translateFragment(this);
  }
  disconnectedCallback() {
    this.removeEventListener("click", this);
  }
  handleEvent(e) {
    if (e.type == "click") {
      if (window.openTrustedLinkIn) {
        let where = MozSupportLink.BrowserUtils.whereToOpenLink(e, false, true);
        if (where == "current") {
          where = "tab";
        }
        e.preventDefault();
        openTrustedLinkIn(this.href, where);
      }
    }
  }
  attributeChangedCallback(attrName) {
    if (attrName === "support-page" || attrName === "utm-content") {
      this.#setHref();
    }
  }
  #setHref() {
    let supportPage = this.getAttribute("support-page") ?? "";
    let base = MozSupportLink.SUPPORT_URL + supportPage;
    this.href = this.hasAttribute("utm-content") ? formatUTMParams(this.getAttribute("utm-content"), base) : base;
  }
}
customElements.define("moz-support-link", MozSupportLink, {
  extends: "a"
});

/**
 * Adds UTM parameters to a given URL, if it is an AMO URL.
 *
 * @param {string} contentAttribute
 *        Identifies the part of the UI with which the link is associated.
 * @param {string} url
 * @returns {string}
 *          The url with UTM parameters if it is an AMO URL.
 *          Otherwise the url in unmodified form.
 */
function formatUTMParams(contentAttribute, url) {
  if (!contentAttribute) {
    return url;
  }
  let parsedUrl = new URL(url);
  let domain = `.${parsedUrl.hostname}`;
  if (!domain.endsWith(".mozilla.org") &&
  // For testing: addons-dev.allizom.org and addons.allizom.org
  !domain.endsWith(".allizom.org")) {
    return url;
  }
  parsedUrl.searchParams.set("utm_source", "firefox-browser");
  parsedUrl.searchParams.set("utm_medium", "firefox-browser");
  parsedUrl.searchParams.set("utm_content", contentAttribute);
  return parsedUrl.href;
}

/***/ }),

/***/ 34003:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozToggle)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_toggle_moz_toggle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16368);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45717);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73689);
/* harmony import */ var chrome_global_content_elements_moz_label_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58825);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at htp://mozilla.org/MPL/2.0/. */



// eslint-disable-next-line import/no-unassigned-import


/**
 * A simple toggle element that can be used to switch between two states.
 *
 * @tagname moz-toggle
 * @property {boolean} pressed - Whether or not the element is pressed.
 * @property {boolean} disabled - Whether or not the element is disabled.
 * @property {string} label - The label text.
 * @property {string} description - The description text.
 * @property {string} ariaLabel
 *  The aria-label text for cases where there is no visible label.
 * @slot support-link - Used to append a moz-support-link to the description.
 * @fires toggle
 *  Custom event indicating that the toggle's pressed state has changed.
 */
class MozToggle extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozBaseInputElement {
  static properties = {
    ariaLabel: {
      type: String,
      mapped: true
    },
    pressed: {
      type: Boolean,
      reflect: true
    }
  };
  static activatedProperty = "pressed";
  get buttonEl() {
    return this.inputEl;
  }
  constructor() {
    super();
    this.pressed = false;
  }
  handleClick() {
    this.pressed = !this.pressed;
    this.dispatchOnUpdateComplete(new CustomEvent("toggle", {
      bubbles: true,
      composed: true
    }));
  }
  inputTemplate() {
    const {
      pressed,
      disabled,
      ariaLabel,
      handleClick
    } = this;
    return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`<button
      id="input"
      part="button"
      type="button"
      class="toggle-button"
      name=${this.name}
      value=${this.value}
      ?disabled=${disabled}
      aria-pressed=${pressed}
      aria-label=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(ariaLabel ?? undefined)}
      aria-describedby="description"
      accesskey=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.accessKey)}
      @click=${handleClick}
    ></button>`;
  }
  inputStylesTemplate() {
    return _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html`<link
      rel="stylesheet"
      href="${toolkit_content_widgets_moz_toggle_moz_toggle_css__WEBPACK_IMPORTED_MODULE_0__}"
    />`;
  }
}
customElements.define("moz-toggle", MozToggle);

/***/ }),

/***/ 98378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdHiddenByUser": () => (/* binding */ AdHiddenByUser),
/* harmony export */   "AdVisibleByUser": () => (/* binding */ AdVisibleByUser),
/* harmony export */   "DefaultShoppingContainer": () => (/* binding */ DefaultShoppingContainer),
/* harmony export */   "GenericError": () => (/* binding */ GenericError),
/* harmony export */   "Loading": () => (/* binding */ Loading),
/* harmony export */   "NewAnalysisInProgress": () => (/* binding */ NewAnalysisInProgress),
/* harmony export */   "NoHighlights": () => (/* binding */ NoHighlights),
/* harmony export */   "NotEnoughReviews": () => (/* binding */ NotEnoughReviews),
/* harmony export */   "Offline": () => (/* binding */ Offline),
/* harmony export */   "PageNotSupported": () => (/* binding */ PageNotSupported),
/* harmony export */   "ProductNotAvailable": () => (/* binding */ ProductNotAvailable),
/* harmony export */   "ReanalysisInProgress": () => (/* binding */ ReanalysisInProgress),
/* harmony export */   "RecommendationVisibleByUser": () => (/* binding */ RecommendationVisibleByUser),
/* harmony export */   "StaleProduct": () => (/* binding */ StaleProduct),
/* harmony export */   "ThanksForReporting": () => (/* binding */ ThanksForReporting),
/* harmony export */   "UnanalyzedProduct": () => (/* binding */ UnanalyzedProduct),
/* harmony export */   "UnavailableProductReported": () => (/* binding */ UnavailableProductReported),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45717);
/* harmony import */ var browser_components_shopping_content_shopping_container_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26693);
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// eslint-disable-next-line import/no-unresolved


// Bug 1845737: These should get imported by ShoppingMessageBar
window.MozXULElement.insertFTLIfNeeded("browser/shopping.ftl");
window.MozXULElement.insertFTLIfNeeded("toolkit/branding/brandings.ftl");
// Mock for Glean
if (typeof window.Glean == "undefined") {
  window.Glean = new Proxy(function () {}, {
    get: function get() {
      return window.Glean;
    }
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/Shopping/Shopping Container",
  component: "shopping-container",
  parameters: {
    status: "in-development"
  }
});
var MOCK_HIGHLIGHTS = {
  price: {
    positive: ["This watch is great and the price was even better."],
    negative: [],
    neutral: []
  },
  quality: {
    positive: ["Other than that, I am very impressed with the watch and it’s capabilities.", "This watch performs above expectations in every way with the exception of the heart rate monitor."],
    negative: ["Battery life is no better than the 3 even with the solar gimmick, probably worse."],
    neutral: ["I have small wrists and still went with the 6X and glad I did.", "I can deal with the looks, as Im now retired."]
  },
  competitiveness: {
    positive: ["Bought this to replace my vivoactive 3.", "I like that this watch has so many features, especially those that monitor health like SP02, respiration, sleep, HRV status, stress, and heart rate."],
    negative: ["I do not use it for sleep or heartrate monitoring so not sure how accurate they are."],
    neutral: ["I've avoided getting a smartwatch for so long due to short battery life on most of them."]
  },
  "packaging/appearance": {
    positive: ["Great cardboard box."],
    negative: [],
    neutral: []
  },
  shipping: {
    positive: [],
    negative: [],
    neutral: []
  }
};
var MOCK_RECOMMENDED_ADS_SPONSORED = [{
  name: "VIVO Electric 60 x 24 inch Stand Up Desk | Black Table Top, Black Frame, Height Adjustable Standing Workstation with Memory Preset Controller (DESK-KIT-1B6B)",
  url: "www.example.com",
  price: "249.99",
  currency: "USD",
  grade: "A",
  adjusted_rating: 4.6,
  sponsored: true,
  image_blob: new Blob(new Uint8Array(), {
    type: "image/jpeg"
  })
}];
var MOCK_RECOMMENDED_NOT_SPONSORED = [{
  name: "VIVO Electric 60 x 24 inch Stand Up Desk | Black Table Top, Black Frame, Height Adjustable Standing Workstation with Memory Preset Controller (DESK-KIT-1B6B)",
  url: "www.example.com",
  price: "249.99",
  currency: "USD",
  grade: "A",
  adjusted_rating: 4.6,
  sponsored: false,
  image_blob: new Blob(new Uint8Array(), {
    type: "image/jpeg"
  })
}];
var Template = function Template(_ref) {
  var data = _ref.data,
    isOffline = _ref.isOffline,
    isAnalysisInProgress = _ref.isAnalysisInProgress,
    analysisEvent = _ref.analysisEvent,
    productUrl = _ref.productUrl,
    userReportedAvailable = _ref.userReportedAvailable,
    adsEnabled = _ref.adsEnabled,
    adsEnabledByUser = _ref.adsEnabledByUser,
    recommendationData = _ref.recommendationData,
    analysisProgress = _ref.analysisProgress,
    autoOpenEnabled = _ref.autoOpenEnabled;
  return (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  <style>\n    main {\n      /**\n        --shopping-header-background and sidebar background-color should\n        come from shopping.page.css, but they are not loaded when\n        viewing the sidebar in Storybook. Hardcode them here\n       */\n      --shopping-header-background: light-dark(#f9f9fb, #2b2a33);\n      background-color: var(--shopping-header-background);\n      width: 320px;\n    }\n  </style>\n\n  <main>\n    <shopping-container\n      .data=", "\n      ?isOffline=", "\n      ?isAnalysisInProgress=", "\n      .analysisEvent=", "\n      productUrl=", "\n      ?userReportedAvailable=", "\n      ?adsEnabled=", "\n      ?adsEnabledByUser=", "\n      .recommendationData=", "\n      analysisProgress=", "\n      autoOpenEnabled=", "\n    >\n    </shopping-container>\n  </main>\n"])), data, isOffline, isAnalysisInProgress, analysisEvent, (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(productUrl), userReportedAvailable, adsEnabled, adsEnabledByUser, recommendationData, analysisProgress, autoOpenEnabled);
};
var DefaultShoppingContainer = Template.bind({});
DefaultShoppingContainer.args = {
  data: {
    product_id: "ABCD123",
    needs_analysis: false,
    adjusted_rating: 5,
    grade: "B",
    highlights: MOCK_HIGHLIGHTS
  }
};
var NoHighlights = Template.bind({});
NoHighlights.args = {
  data: {
    product_id: "ABCD123",
    needs_analysis: false,
    adjusted_rating: 5,
    grade: "B"
  }
};

/**
 * There will be no animation if prefers-reduced-motion is enabled.
 */
var Loading = Template.bind({});
var UnanalyzedProduct = Template.bind({});
UnanalyzedProduct.args = {
  data: {
    adjusted_rating: null,
    grade: null,
    highlights: null,
    product_id: null,
    needs_analysis: true
  }
};
var NewAnalysisInProgress = Template.bind({});
NewAnalysisInProgress.args = {
  isAnalysisInProgress: true,
  analysisProgress: 15
};
var StaleProduct = Template.bind({});
StaleProduct.args = {
  data: {
    product_id: "ABCD123",
    needs_analysis: true,
    adjusted_rating: 5,
    grade: "B",
    highlights: MOCK_HIGHLIGHTS
  }
};
var ReanalysisInProgress = Template.bind({});
ReanalysisInProgress.args = {
  data: {
    product_id: "ABCD123",
    needs_analysis: true,
    adjusted_rating: 5,
    grade: "B",
    highlights: MOCK_HIGHLIGHTS
  },
  isAnalysisInProgress: true,
  analysisProgress: 15,
  analysisEvent: {
    type: "ReanalysisRequested",
    productUrl: "https://example.com/ABCD123"
  },
  productUrl: "https://example.com/ABCD123"
};

/**
 * When a sponsored ad is served, and the user wants the ad component visible.
 */
var AdVisibleByUser = Template.bind({});
AdVisibleByUser.args = {
  data: {
    product_id: "ABCD123",
    needs_analysis: false,
    adjusted_rating: 5,
    grade: "B",
    highlights: MOCK_HIGHLIGHTS
  },
  adsEnabled: true,
  adsEnabledByUser: true,
  recommendationData: MOCK_RECOMMENDED_ADS_SPONSORED
};

/**
 * When a non-sponsored recommendation is served, and the user wants the recommendation component visible.
 */
var RecommendationVisibleByUser = Template.bind({});
RecommendationVisibleByUser.args = {
  data: {
    product_id: "ABCD123",
    needs_analysis: false,
    adjusted_rating: 5,
    grade: "B",
    highlights: MOCK_HIGHLIGHTS
  },
  adsEnabled: true,
  adsEnabledByUser: true,
  recommendationData: MOCK_RECOMMENDED_NOT_SPONSORED
};

/**
 * When a sponsored ad is served, and the user wants the ad component hidden.
 */
var AdHiddenByUser = Template.bind({});
AdHiddenByUser.args = {
  data: {
    product_id: "ABCD123",
    needs_analysis: false,
    adjusted_rating: 5,
    grade: "B",
    highlights: MOCK_HIGHLIGHTS
  },
  adsEnabled: true,
  adsEnabledByUser: false,
  recommendationData: MOCK_RECOMMENDED_ADS_SPONSORED
};
var NotEnoughReviews = Template.bind({});
NotEnoughReviews.args = {
  data: {
    adjusted_rating: null,
    grade: null,
    highlights: null,
    product_id: "ABCD123",
    needs_analysis: true
  }
};
var ProductNotAvailable = Template.bind({});
ProductNotAvailable.args = {
  data: {
    deleted_product: true,
    product_id: "ABCD123",
    needs_analysis: false,
    adjusted_rating: 5,
    grade: "B",
    highlights: MOCK_HIGHLIGHTS
  }
};
var ThanksForReporting = Template.bind({});
ThanksForReporting.args = {
  data: {
    deleted_product: true,
    product_id: "ABCD123",
    needs_analysis: false,
    adjusted_rating: 5,
    grade: "B",
    highlights: MOCK_HIGHLIGHTS
  },
  userReportedAvailable: true
};
var UnavailableProductReported = Template.bind({});
UnavailableProductReported.args = {
  data: {
    deleted_product: true,
    deleted_product_reported: true,
    product_id: "ABCD123",
    needs_analysis: false,
    adjusted_rating: 5,
    grade: "B",
    highlights: MOCK_HIGHLIGHTS
  }
};
var PageNotSupported = Template.bind({});
PageNotSupported.args = {
  data: {
    product_id: null,
    adjusted_rating: null,
    grade: null,
    page_not_supported: true
  }
};
var GenericError = Template.bind({});
GenericError.args = {
  data: {
    status: 422,
    error: "Unprocessable entity"
  }
};
var Offline = Template.bind({});
Offline.args = {
  isOffline: true
};

/***/ }),

/***/ 32073:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "analysis-explainer.c7efc728067d6a3fca5e.css";

/***/ }),

/***/ 17990:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "highlight-item.f699b011410057ff7ef8.css";

/***/ }),

/***/ 53771:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "letter-grade.4bec18081ae0a9d0845c.css";

/***/ }),

/***/ 49616:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "new-position-notification-card.b4e9a0b38c8b06989fc1.css";

/***/ }),

/***/ 98971:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "recommended-ad.b836e7bb3f11395945c1.css";

/***/ }),

/***/ 8423:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "settings.579cd70c8292799339ff.css";

/***/ }),

/***/ 43607:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "shopping-card.4003583ba8460f067d15.css";

/***/ }),

/***/ 70115:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "shopping-container.6c28d385ceb83e6625b0.css";

/***/ }),

/***/ 53665:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "shopping-message-bar.70ce85ff4e48cc311a96.css";

/***/ }),

/***/ 57143:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "shopping-page.6a31e49ef5f99086bbbc.css";

/***/ }),

/***/ 478:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "unanalyzed.51ed5a072544cbe9b7cc.css";

/***/ }),

/***/ 29827:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-button-group.4b3da672913bb0fc2d88.css";

/***/ }),

/***/ 54078:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-button.9297127d41c8bd3995db.css";

/***/ }),

/***/ 48058:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-card.b49cee559e146396e762.css";

/***/ }),

/***/ 32248:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-five-star.aa11adde439672040f7c.css";

/***/ }),

/***/ 83230:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-label.af54a5f841ff0af78b0d.css";

/***/ }),

/***/ 84296:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-message-bar.80c0083ab13d099f8e4b.css";

/***/ }),

/***/ 16368:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-toggle.9f6e900b345c85c235f3.css";

/***/ }),

/***/ 46565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "common.d2c1b3186a09c5fd1fdd.css";

/***/ })

}]);
//# sourceMappingURL=shopping-container-stories.a538985a.iframe.bundle.js.map