"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[3479],{

/***/ 636:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aitab-list.d2593959ba79421fe6dd.css";

/***/ }),

/***/ 55271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Instructions: () => (/* binding */ Instructions),
/* harmony export */   MultiColumn: () => (/* binding */ MultiColumn),
/* harmony export */   NoDescriptors: () => (/* binding */ NoDescriptors),
/* harmony export */   NoTitleNoDesc: () => (/* binding */ NoTitleNoDesc),
/* harmony export */   OneColumn: () => (/* binding */ OneColumn),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var chrome_browser_content_aiwindow_components_aitab_list_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98322);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */


// eslint-disable-next-line import/no-unassigned-import

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/AI Window/AI Tab List",
  component: "aitab-list",
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
    },
    layout: {
      control: {
        type: "select"
      },
      options: ["column", "row"]
    }
  }
});
const KANAZAWA_GROUPS = [{
  heading: "Food",
  items: [{
    text: "Omicho market for lunch"
  }, {
    text: "Kanazawa-style curry"
  }, {
    text: "Kaiseki dinner, one night only"
  }]
}, {
  heading: "Sights",
  items: [{
    text: "Kenroku-en at opening"
  }, {
    text: "21st Century Museum"
  }, {
    text: "Higashiyama teahouses"
  }]
}, {
  heading: "Practical",
  items: [{
    text: "IC card for buses"
  }, {
    text: "Cash for small shops"
  }, {
    text: "Book the ryokan early"
  }]
}];
const Template = ({
  title,
  description,
  groups,
  layout
}) => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <aitab-list
    .title=${title}
    description=${description}
    .groups=${groups}
    layout=${layout}
  ></aitab-list>
`;
const MultiColumn = Template.bind({});
MultiColumn.args = {
  title: "Multi-column",
  description: "Short hits pulled out of the longer guides in your tabs",
  groups: KANAZAWA_GROUPS,
  layout: "column"
};

// Groups with their headings left off, which needs no layout of its own.
const NoDescriptors = Template.bind({});
NoDescriptors.args = {
  ...MultiColumn.args,
  title: "No descriptors",
  description: "",
  groups: KANAZAWA_GROUPS.slice(0, 2).map(({
    items
  }) => ({
    items
  }))
};
const OneColumn = Template.bind({});
OneColumn.args = {
  title: "One column",
  description: "Short hits pulled out of the longer guides in your tabs",
  layout: "row",
  groups: [{
    heading: "Groceries",
    items: [{
      text: "Chicken breast"
    }, {
      text: "Shishito peppers"
    }, {
      text: "Soy sauce"
    }, {
      text: "Cilantro"
    }, {
      text: "Ginger"
    }]
  }]
};

// Same layout as OneColumn, with several groups of longer items.
const Instructions = Template.bind({});
Instructions.args = {
  title: "Instructions",
  description: "The merged method, taking the best step from each source.",
  layout: "row",
  groups: [{
    heading: "Sear",
    items: [{
      text: "Pat the thighs dry and season both sides. Lay skin-side down in a cold, dry pan and bring up to medium heat together - this renders the fat instead of seizing the skin."
    }, {
      text: "Sear 8-10 minutes undisturbed until deep golden, flip for 2 minutes, then set the thighs aside on a plate."
    }]
  }, {
    heading: "Braise",
    items: [{
      text: "Pour off all but a tablespoon of fat, soften the aromatics, then deglaze with wine or stock, scraping up the browned bits for the sauce."
    }, {
      text: "Return the thighs skin-up, cover, and simmer on low 35-40 minutes until the thickest one reads 165F."
    }]
  }, {
    heading: "Finish",
    items: [{
      text: "Uncover and reduce the sauce 5 minutes if it's thin, then rest the chicken 5 minutes off heat before serving over the sauce."
    }]
  }]
};
const NoTitleNoDesc = Template.bind({});
NoTitleNoDesc.args = {
  title: "",
  description: "",
  groups: [KANAZAWA_GROUPS[0]],
  layout: "row"
};

/***/ }),

/***/ 58676:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aitab-base.dbc627139f59ef00d8b3.css";

/***/ }),

/***/ 98322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AITabList: () => (/* binding */ AITabList)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_aitab_page_aitab_list_aitab_list_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(636);
/* harmony import */ var browser_components_aiwindow_ui_components_aitab_page_aitab_base_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58676);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82242);


/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/** @typedef {{ text: string }} ListItem */
/** @typedef {{ heading?: string, items: ListItem[] }} ListGroup */
/**
 * @typedef { "column" | "row" } LayoutType "column" puts the title and
 *   description above the groups, which spread across as many columns as they
 *   fit; "row" puts them beside a single column of groups.
 */

/** @type {LayoutType} */
const DEFAULT_LAYOUT = "column";

/**
 * Body block for a generated AI Tab page, rendered from the page config's
 * `List` block: optionally grouped items, in two layouts.
 *
 * @property {string} title - Block title.
 * @property {string} description - One sentence of context below the title.
 * @property {ListGroup[]} groups - Groups to render, in order. A group
 *   without a heading renders as bare items.
 * @property {LayoutType} layout - The layout to render in.
 */
class AITabList extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.MozLitElement {
  static properties = {
    title: {
      type: String
    },
    description: {
      type: String
    },
    groups: {
      type: Array
    },
    layout: {
      type: String,
      reflect: true
    }
  };
  constructor() {
    super();
    this.title = "";
    this.description = "";
    this.groups = [];
    this.layout = DEFAULT_LAYOUT;
  }
  #renderIntro() {
    if (!this.title && !this.description) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.nothing;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<div class="aitab-list-intro">
      ${this.title ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<h2 class="aitab-list-title">${this.title}</h2>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.nothing}
      ${this.description ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<p class="aitab-list-description aitab-deemphasized">
            ${this.description}
          </p>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.nothing}
    </div>`;
  }
  #renderGroup(group) {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<div class="aitab-list-group">
      ${group.heading ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<h3 class="aitab-list-group-heading">${group.heading}</h3>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.nothing}
      <ul class="aitab-list-items">
        ${group.items.map(item => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<li class="aitab-list-item">${item?.text ?? ""}</li>`)}
      </ul>
    </div>`;
  }
  render() {
    const groups = (this.groups ?? []).filter(group => group?.items?.length);
    if (!groups.length) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.nothing;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_aitab_page_aitab_base_css__WEBPACK_IMPORTED_MODULE_1__}"
      />
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_aitab_page_aitab_list_aitab_list_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <section class="aitab-list">
        ${this.#renderIntro()}
        <div class="aitab-list-groups">
          ${groups.map(group => this.#renderGroup(group))}
        </div>
      </section>
    `;
  }
}
customElements.define("aitab-list", AITabList);

/***/ })

}]);
//# sourceMappingURL=components-aitab-page-aitab-list-aitab-list-stories.9f42f754.iframe.bundle.js.map