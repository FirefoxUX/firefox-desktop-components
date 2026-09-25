"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[6393],{

/***/ 9498:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aitab-timeline.bd6caf413d00ae956073.css";

/***/ }),

/***/ 57729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   NoIntro: () => (/* binding */ NoIntro),
/* harmony export */   TimesOnly: () => (/* binding */ TimesOnly),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var chrome_browser_content_aiwindow_components_aitab_timeline_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79672);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */


// eslint-disable-next-line import/no-unassigned-import

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/AI Window/AI Tab Timeline",
  component: "aitab-timeline",
  // The type scale and the narrow layout both query a container that
  // aitab-page normally provides. Without it the headings stay at their
  // narrow sizes and the gutter never collapses.
  decorators: [story => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<div style="container: aitab-page / inline-size;">${story()}</div>`],
  argTypes: {
    title: {
      control: {
        type: "text"
      }
    },
    description: {
      control: {
        type: "text"
      }
    }
  }
});
const KANAZAWA_ITEMS = [{
  date_label: "Thu, Oct 9",
  date_eyebrow: "Arrival",
  title: "Korinbo & the 21st Century Museum",
  description: "Train in at 2pm, drop bags, museum until closing, dinner in the covered arcade five minutes from the hotel."
}, {
  date_label: "Fri, Oct 10",
  date_eyebrow: "Full day",
  title: "Kenroku-en, castle, Nagamachi",
  description: "Garden at opening before the tour buses, castle grounds after, samurai district in the afternoon heat."
}, {
  date_label: "Sat, Oct 11",
  date_eyebrow: "Ryokan night",
  title: "Higashiyama, then kaiseki",
  description: "Teahouse district in the morning, Omicho for lunch, check into the ryokan by 4pm — dinner is the evening."
}, {
  date_label: "Sun, Oct 12",
  date_eyebrow: "Depart",
  title: "Train back at noon",
  description: "Breakfast at the inn, one last walk along the canal, Thunderbird to Kyoto."
}];
const Template = ({
  title,
  description,
  items
}) => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <aitab-timeline
    .title=${title}
    description=${description}
    .items=${items}
  ></aitab-timeline>
`;
const Default = Template.bind({});
Default.args = {
  title: "Three days",
  description: "Walking order for the sights you saved, arrival day first.",
  items: KANAZAWA_ITEMS
};

// Times rather than dates, and no eyebrows to put under them.
const TimesOnly = Template.bind({});
TimesOnly.args = {
  title: "Release day",
  description: "Everything that has to happen before the tree reopens.",
  items: [{
    date_label: "09:00",
    title: "Soft freeze",
    description: "Only approved uplifts land after this point."
  }, {
    date_label: "11:30",
    title: "Release candidate build",
    description: "Automation kicks off; expect results inside two hours."
  }, {
    date_label: "16:00",
    title: "Go / no-go"
  }, {
    date_label: "18:00",
    title: "Push to the CDN"
  }]
};

// A timeline that has to stand on its own, with no intro beside it.
const NoIntro = Template.bind({});
NoIntro.args = {
  title: "",
  description: "",
  items: KANAZAWA_ITEMS.slice(0, 2)
};

/***/ }),

/***/ 58676:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aitab-base.dbc627139f59ef00d8b3.css";

/***/ }),

/***/ 79672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AITabTimeline: () => (/* binding */ AITabTimeline)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_aitab_page_aitab_timeline_aitab_timeline_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9498);
/* harmony import */ var browser_components_aiwindow_ui_components_aitab_page_aitab_base_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58676);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82242);


/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * @typedef {object} TimelineItem
 * @property {string} date_label - Date or time, already written for display
 *   by the model. There is no machine-readable date to pair it with.
 * @property {string} [date_eyebrow] - Short label for what the date is, under
 *   the date itself.
 * @property {string} title - What happens then.
 * @property {string} [description] - A sentence or two of detail.
 */

/**
 * Body block for a generated AI Tab page, rendered from the page config's
 * `Timeline` block: entries in the order the model gave them, each one against
 * its date in a gutter.
 *
 * @property {string} title - Block title.
 * @property {string} description - One sentence of context below the title.
 * @property {TimelineItem[]} items - Entries to render, in order.
 */
class AITabTimeline extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.MozLitElement {
  static properties = {
    title: {
      type: String
    },
    description: {
      type: String
    },
    items: {
      type: Array
    }
  };
  constructor() {
    super();
    this.title = "";
    this.description = "";
    this.items = [];
  }
  #renderIntro() {
    if (!this.title && !this.description) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.nothing;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<div class="aitab-timeline-intro">
      ${this.title ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<h2 class="aitab-timeline-title aitab-heading-3">
            ${this.title}
          </h2>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.nothing}
      ${this.description ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<p class="aitab-timeline-description aitab-deemphasized">
            ${this.description}
          </p>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.nothing}
    </div>`;
  }

  /**
   * An entry title sits under the block title where there is one, and under
   * the page title where the model left the block untitled. The size comes
   * from the class either way, so only the outline changes.
   *
   * @param {string} text
   */
  #renderEntryTitle(text) {
    const classes = "aitab-timeline-item-title aitab-heading-4";
    return this.title ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<h3 class=${classes}>${text}</h3>` : (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<h2 class=${classes}>${text}</h2>`;
  }
  #renderItem(item) {
    return item ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<li class="aitab-timeline-item">
          <div class="aitab-timeline-date">
            ${item.date_label ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<span class="aitab-timeline-date-label"
                  >${item.date_label}</span
                >` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.nothing}
            ${item.date_eyebrow ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<span class="aitab-timeline-date-eyebrow aitab-eyebrow"
                  >${item.date_eyebrow}</span
                >` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.nothing}
          </div>
          <div class="aitab-timeline-entry">
            ${item.title ? this.#renderEntryTitle(item.title) : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.nothing}
            ${item.description ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<p class="aitab-timeline-item-description">
                  ${item.description}
                </p>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.nothing}
          </div>
        </li>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.nothing;
  }
  render() {
    const items = (this.items ?? []).filter(item => item?.date_label || item?.title);
    if (!items.length) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.nothing;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_aitab_page_aitab_base_css__WEBPACK_IMPORTED_MODULE_1__}"
      />
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_aitab_page_aitab_timeline_aitab_timeline_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <section class="aitab-timeline">
        ${this.#renderIntro()}
        <ol class="aitab-timeline-items">
          ${items.map(item => this.#renderItem(item))}
        </ol>
      </section>
    `;
  }
}
customElements.define("aitab-timeline", AITabTimeline);

/***/ })

}]);
//# sourceMappingURL=components-aitab-page-aitab-timeline-aitab-timeline-stories.0ae5bf17.iframe.bundle.js.map