"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[2524,6415],{

/***/ 42518:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ai-tasks-group.8679f976f71d816f128d.css";

/***/ }),

/***/ 44170:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-card.9ea88fff7d076a69454f.css";

/***/ }),

/***/ 52524:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MozCard: () => (/* binding */ MozCard)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_card_moz_card_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44170);
/* harmony import */ var toolkit_themes_shared_design_system_src_text_and_typography_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44311);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82242);


/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/// <reference path="./moz-card.tagmap.d.ts" />




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
 * @property {boolean} treeItem - (optional) Whether the accordion summary is an
 *   item of a tree. When set, the summary gets the treeitem role, the card's
 *   article is presentational and no longer labelled by the heading, and the
 *   heading is always rendered as a span, ignoring headingLevel, so heading
 *   navigation doesn't land inside the tree. The expanded state comes from the
 *   details element, so there is no aria-expanded to keep in sync. Ignored
 *   unless the type is "accordion".
 * @property {string} ariaLevel - (optional) aria-level of the accordion summary.
 * @property {string} ariaPosInSet - (optional) aria-posinset of the accordion
 *   summary.
 * @property {string} ariaSetSize - (optional) aria-setsize of the accordion
 *   summary. With ariaLevel and ariaPosInSet, this lets a tree item say where
 *   it is when its siblings are in other cards. All three are set on the card
 *   and moved to the summary, and are ignored unless treeItem is set.
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
    },
    treeItem: {
      type: Boolean
    },
    ariaLevel: {
      type: String,
      mapped: true
    },
    ariaPosInSet: {
      type: String,
      mapped: true
    },
    ariaSetSize: {
      type: String,
      mapped: true
    }
  };
  constructor() {
    super();
    this.type = "default";
    this.spacing = "default";
    this.expanded = false;
    this.treeItem = false;
    /* When set to 1-6, it uses h1-h6 around the heading */
    this.headingLevel = 0;
  }
  headingTextTemplate() {
    const headingLevels = [(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.literal)`span`, (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.literal)`h1`, (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.literal)`h2`, (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.literal)`h3`, (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.literal)`h4`, (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.literal)`h5`, (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.literal)`h6`];
    const tagName = !this.#isTreeItem && headingLevels[this.headingLevel] || headingLevels[0];
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.staticHtml)`<${tagName} id="heading" title=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.heading)} part="heading">${this.heading}</${tagName}>`;
  }
  get #isTreeItem() {
    return this.type === "accordion" && this.treeItem;
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
            <summary
              part="summary"
              role=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.#isTreeItem ? "treeitem" : undefined)}
              aria-level=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.#isTreeItem ? this.ariaLevel : undefined)}
              aria-posinset=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.#isTreeItem ? this.ariaPosInSet : undefined)}
              aria-setsize=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.#isTreeItem ? this.ariaSetSize : undefined)}
              tabindex=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.summaryTabIndex)}
            >
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
        role=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.#isTreeItem ? "none" : this.role)}
        class="moz-card"
        aria-labelledby=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.heading && !this.#isTreeItem ? "heading" : undefined)}
      >
        ${this.cardTemplate()}
      </article>
    `;
  }
}
customElements.define("moz-card", MozCard);

/***/ }),

/***/ 85942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AITasksGroup: () => (/* binding */ AITasksGroup)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_ai_tasks_group_ai_tasks_group_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42518);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




// Must match the `:nth-child(n + 6)` rule in ai-tasks-group.css.
const VISIBLE_COUNT = 5;

/**
 * A titled group of task cards on the Tasks page, for example
 * "Monitors · Active  2 of 15". Cards are slotted children; past the first
 * five, the rest are hidden behind a "Show N more" / "Show less" toggle.
 *
 * @property {string} headingL10nId - Fluent ID of the group heading.
 * @property {string} countL10nId - Fluent ID of the count shown next to the heading.
 * @property {object} countL10nArgs - Fluent args for the count.
 * @property {boolean} expanded - Whether every card is shown.
 */
class AITasksGroup extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    headingL10nId: {
      type: String
    },
    countL10nId: {
      type: String
    },
    countL10nArgs: {
      type: Object
    },
    expanded: {
      type: Boolean,
      reflect: true
    },
    itemCount: {
      type: Number,
      state: true
    }
  };
  #collapsing = false;
  constructor() {
    super();
    this.headingL10nId = "";
    this.countL10nId = "";
    this.countL10nArgs = {};
    this.expanded = false;
    this.itemCount = 0;
  }
  get hiddenCount() {
    return Math.max(0, this.itemCount - VISIBLE_COUNT);
  }
  handleSlotChange(event) {
    this.itemCount = event.target.assignedElements().length;
    if (!this.hiddenCount) {
      this.expanded = false;
    }
  }
  async toggleExpanded() {
    if (this.#collapsing) {
      return;
    }
    if (!this.expanded) {
      this.expanded = true;
      return;
    }
    this.#collapsing = true;
    try {
      await this.animateCollapse();
    } finally {
      this.#collapsing = false;
      this.expanded = false;
    }
  }

  /**
   * Fades out the cards past the first five, last card first, mirroring the
   * reveal in ai-tasks-group.css. Done with Web Animations because `display`
   * can't be transitioned.
   */
  async animateCollapse() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const easing = getComputedStyle(this).getPropertyValue("--motion-easing-standard").trim();
    const animations = this.shadowRoot.querySelector("slot").assignedElements().slice(VISIBLE_COUNT).reverse().map((card, i) => card.animate({
      opacity: [1, 0],
      translate: ["0 0", "0 calc(-1 * var(--space-small))"]
    }, {
      duration: 200,
      delay: Math.min(i, 3) * 40,
      easing: easing || "ease",
      fill: "forwards"
    }));
    await Promise.allSettled(animations.map(animation => animation.finished));
    animations.forEach(animation => animation.cancel());
  }
  toggleTemplate() {
    if (!this.hiddenCount) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<button
      class="toggle-button"
      type="button"
      aria-expanded=${this.expanded}
      data-l10n-id=${this.expanded ? "ai-tasks-group-show-less" : "ai-tasks-group-show-more"}
      data-l10n-args=${JSON.stringify({
      count: this.hiddenCount
    })}
      @click=${this.toggleExpanded}
    ></button>`;
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_ai_tasks_group_ai_tasks_group_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <section aria-labelledby="heading">
        <h3 id="heading" class="heading">
          <span data-l10n-id=${this.headingL10nId}></span>
          ${this.countL10nId ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span
                class="count"
                data-l10n-id=${this.countL10nId}
                data-l10n-args=${JSON.stringify(this.countL10nArgs)}
              ></span>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
        </h3>
        <div class="items">
          <slot @slotchange=${this.handleSlotChange}></slot>
        </div>
        ${this.toggleTemplate()}
      </section>
    `;
  }
}
customElements.define("ai-tasks-group", AITasksGroup);

/***/ }),

/***/ 89563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Active: () => (/* binding */ Active),
/* harmony export */   ActiveWithShowMore: () => (/* binding */ ActiveWithShowMore),
/* harmony export */   Paused: () => (/* binding */ Paused),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var chrome_browser_content_aiwindow_components_ai_tasks_group_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85942);
/* harmony import */ var chrome_global_content_elements_moz_card_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52524);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/AI Window/Tasks group",
  component: "ai-tasks-group",
  argTypes: {
    itemCount: {
      control: {
        type: "number",
        min: 0
      }
    }
  },
  parameters: {
    fluent: `
ai-tasks-group-monitors-active = Monitors · Active
ai-tasks-group-monitors-paused = Monitors · Paused
ai-tasks-group-count-of-limit = { $count } of { $limit }
ai-tasks-group-count = { $count }
ai-tasks-group-show-more = Show { $count } more
ai-tasks-group-show-less = Show less
    `
  }
});
const Template = ({
  headingL10nId,
  countL10nId,
  itemCount,
  limit
}) => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <ai-tasks-group
    .headingL10nId=${headingL10nId}
    .countL10nId=${countL10nId}
    .countL10nArgs=${{
  count: itemCount,
  limit
}}
  >
    ${Array.from({
  length: itemCount
}, (_, i) => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<moz-card>Task ${i + 1}</moz-card>`)}
  </ai-tasks-group>
`;
const Active = Template.bind({});
Active.args = {
  headingL10nId: "ai-tasks-group-monitors-active",
  countL10nId: "ai-tasks-group-count-of-limit",
  itemCount: 3,
  limit: 15
};
const ActiveWithShowMore = Template.bind({});
ActiveWithShowMore.args = {
  ...Active.args,
  itemCount: 12
};
const Paused = Template.bind({});
Paused.args = {
  headingL10nId: "ai-tasks-group-monitors-paused",
  countL10nId: "ai-tasks-group-count",
  itemCount: 2
};

/***/ })

}]);
//# sourceMappingURL=components-ai-tasks-group-ai-tasks-group-stories.ce2fab19.iframe.bundle.js.map