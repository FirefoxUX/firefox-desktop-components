"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[6598],{

/***/ 51625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MozPageNavButton": () => (/* binding */ MozPageNavButton),
/* harmony export */   "default": () => (/* binding */ MozPageNav)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_page_nav_moz_page_nav_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16737);
/* harmony import */ var toolkit_content_widgets_moz_page_nav_moz_page_nav_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13487);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1659);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68164);


/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * A grouping of navigation buttons that is displayed at the page level,
 * intended to change the selected view, provide a heading, and have links
 * to external resources.
 *
 * @tagname moz-page-nav
 * @property {string} currentView - The currently selected view.
 * @property {string} heading - A heading to be displayed at the top of the navigation.
 * @slot [default] - Used to append moz-page-nav-button elements to the navigation.
 */
class MozPageNav extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.MozLitElement {
  static properties = {
    currentView: { type: String },
    heading: { type: String },
  };

  static queries = {
    headingEl: "#page-nav-header",
    primaryNavGroupSlot: ".primary-nav-group slot",
    secondaryNavGroupSlot: "#secondary-nav-group slot",
  };

  get pageNavButtons() {
    return this.primaryNavGroupSlot
      .assignedNodes()
      .filter(
        node => node?.localName === "moz-page-nav-button" && !node.hidden
      );
  }

  onChangeView(e) {
    this.currentView = e.target.view;
  }

  handleFocus(e) {
    if (e.key == "ArrowDown" || e.key == "ArrowRight") {
      e.preventDefault();
      this.focusNextView();
    } else if (e.key == "ArrowUp" || e.key == "ArrowLeft") {
      e.preventDefault();
      this.focusPreviousView();
    }
  }

  focusPreviousView() {
    let pageNavButtons = this.pageNavButtons;
    let currentIndex = pageNavButtons.findIndex(b => b.selected);
    let prev = pageNavButtons[currentIndex - 1];
    if (prev) {
      prev.activate();
      prev.buttonEl.focus();
    }
  }

  focusNextView() {
    let pageNavButtons = this.pageNavButtons;
    let currentIndex = pageNavButtons.findIndex(b => b.selected);
    let next = pageNavButtons[currentIndex + 1];
    if (next) {
      next.activate();
      next.buttonEl.focus();
    }
  }

  render() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_page_nav_moz_page_nav_css__WEBPACK_IMPORTED_MODULE_1__}"
      />
      <nav>
        <h1 class="page-nav-header" id="page-nav-header">${this.heading}</h1>
        <div
          class="primary-nav-group"
          role="tablist"
          aria-orientation="vertical"
          aria-labelledby="page-nav-header"
        >
          <slot
            @change-view=${this.onChangeView}
            @keydown=${this.handleFocus}
          ></slot>
        </div>
        <div id="secondary-nav-group" role="group">
          <slot name="secondary-nav" @keydown=${this.handleFocus}></slot>
        </div>
      </nav>
    `;
  }

  updated() {
    let isViewSelected = false;
    let assignedPageNavButtons = this.pageNavButtons;
    for (let button of assignedPageNavButtons) {
      button.selected = button.view == this.currentView;
      isViewSelected = isViewSelected || button.selected;
    }
    if (!isViewSelected && assignedPageNavButtons.length) {
      // Current page nav has no matching view, reset to the first view.
      assignedPageNavButtons[0].activate();
    }
  }
}
customElements.define("moz-page-nav", MozPageNav);

/**
 * A navigation button intended to change the selected view within a page.
 *
 * @tagname moz-page-nav-button
 * @property {string} iconSrc - The chrome:// url for the icon used for the button.
 * @property {string} l10nId - The fluent ID for the button's text
 * @property {boolean} selected - Whether or not the button is currently selected.
 * @slot [default] - Used to append the l10n string to the button.
 */
class MozPageNavButton extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.MozLitElement {
  static properties = {
    iconSrc: { type: String },
    l10nId: { type: String },
    selected: { type: Boolean },
  };

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "none");
  }

  static queries = {
    buttonEl: "button",
  };

  get view() {
    return this.getAttribute("view");
  }

  activate() {
    this.dispatchEvent(
      new CustomEvent("change-view", {
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_page_nav_moz_page_nav_button_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <button
        aria-selected=${this.selected}
        tabindex=${this.selected ? 0 : -1}
        role="tab"
        ?selected=${this.selected}
        @click=${this.activate}
      >
        <img class="page-nav-icon" src=${this.iconSrc} />
        <slot></slot>
      </button>
    `;
  }
}
customElements.define("moz-page-nav-button", MozPageNavButton);


/***/ }),

/***/ 10551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Default": () => (/* binding */ Default),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1659);
/* harmony import */ var _moz_page_nav_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51625);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


// eslint-disable-next-line import/no-unassigned-import


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "UI Widgets/Page Nav",
  component: "moz-page-nav",
  parameters: {
    status: "in-development",
    actions: {
      handles: ["change-view"],
    },
    fluent: `
moz-page-nav-button-one = View 1
  .title = View 1
moz-page-nav-button-two = View 2
  .title = View 2
moz-page-nav-button-three = View 3
  .title = View 3
moz-page-link-one = Support Page
  .title = Support Page
moz-page-nav-heading =
  .heading = Heading
     `,
  },
});

const Template = () => _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html`
  <style>
    #page {
      height: 100%;
      display: flex;

      @media (max-width: 52rem) {
        grid-template-columns: 82px 1fr;
      }
    }
    moz-page-nav {
      margin-inline-start: 10px;
      --page-nav-margin-top: 10px;

      @media (max-width: 52rem) {
        margin-inline-start: 0;
      }
    }
  </style>
  <div id="page">
    <moz-page-nav data-l10n-id="moz-page-nav-heading" data-l10n-attrs="heading">
      <moz-page-nav-button
        view="view-one"
        data-l10n-id="moz-page-nav-button-one"
        iconSrc="chrome://browser/skin/preferences/category-general.svg"
      >
      </moz-page-nav-button>
      <moz-page-nav-button
        view="view-two"
        data-l10n-id="moz-page-nav-button-two"
        iconSrc="chrome://browser/skin/preferences/category-general.svg"
      >
      </moz-page-nav-button>
      <moz-page-nav-button
        view="view-three"
        data-l10n-id="moz-page-nav-button-three"
        iconSrc="chrome://browser/skin/preferences/category-general.svg"
      >
      </moz-page-nav-button>
    </moz-page-nav>
    <main></main>
  </div>
`;

const Default = Template.bind({});
Default.args = {};


/***/ }),

/***/ 16737:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-page-nav-button.90874889013404e8fb3e.css";

/***/ }),

/***/ 13487:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-page-nav.930db7e23e77639281cc.css";

/***/ })

}]);
//# sourceMappingURL=moz-page-nav-moz-page-nav-stories.747b6fc3.iframe.bundle.js.map