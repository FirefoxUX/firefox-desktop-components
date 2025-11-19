"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[356,7322],{

/***/ 20356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GROUP_TYPES: () => (/* binding */ GROUP_TYPES),
/* harmony export */   "default": () => (/* binding */ MozBoxGroup)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_box_group_moz_box_group_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23066);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11540);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48334);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



const GROUP_TYPES = {
  list: "list",
  reorderable: "reorderable-list"
};

/**
 * An element used to group combinations of moz-box-item, moz-box-link, and
 * moz-box-button elements and provide the expected styles.
 *
 * @tagname moz-box-group
 * @property {string} type
 *   The type of the group, either "list", "reorderable-list", or undefined.
 *   Note that "reorderable-list" only works with moz-box-item elements for now.
 * @slot default - Slot for rendering various moz-box-* elements.
 * @slot <index> - Slots used to assign moz-box-* elements to <li> elements when
 *   the group is type="list".
 */
class MozBoxGroup extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  #tabbable = true;
  static properties = {
    type: {
      type: String
    },
    listItems: {
      type: Array,
      state: true
    }
  };
  static queries = {
    reorderableList: "moz-reorderable-list",
    headerSlot: "slot[name='header']",
    footerSlot: "slot[name='footer']"
  };
  constructor() {
    super();
    this.listItems = [];
    this.listMutationObserver = new MutationObserver(this.updateItems.bind(this));
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.listMutationObserver.observe(this, {
      attributeFilter: ["hidden"],
      subtree: true,
      childList: true
    });
    this.updateItems();
  }
  contentTemplate() {
    if (this.type == GROUP_TYPES.reorderable) {
      return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<moz-reorderable-list
        class="scroll-container"
        itemselector="moz-box-item"
        dragselector=".handle"
        @reorder=${this.handleReorder}
      >
        ${this.slotTemplate()}
      </moz-reorderable-list>`;
    }
    return this.slotTemplate();
  }
  slotTemplate() {
    if (this.type == GROUP_TYPES.list || this.type == GROUP_TYPES.reorderable) {
      let listTag = this.type == GROUP_TYPES.reorderable ? (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.literal)`ol` : (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.literal)`ul`;
      return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.staticHtml)`<${listTag}
          tabindex="-1"
          class="list scroll-container"
          aria-orientation="vertical"
          @keydown=${this.handleKeydown}
          @focusin=${this.handleFocus}
          @focusout=${this.handleBlur}
        >
          ${this.listItems.map((_, i) => {
        return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<li>
              <slot name=${i}></slot>
            </li> `;
      })}
        </${listTag}>
        <slot hidden></slot>`;
    }
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div class="scroll-container">
      <slot></slot>
    </div>`;
  }
  handleReorder(event) {
    let {
      draggedElement,
      targetElement,
      position
    } = event.detail;
    let parent = targetElement.parentNode;
    let moveBefore = position === -1;
    if (moveBefore) {
      parent.insertBefore(draggedElement, targetElement);
    } else {
      parent.insertBefore(draggedElement, targetElement.nextElementSibling);
    }
    draggedElement.focus();
    this.updateItems();
  }
  handleKeydown(event) {
    if (this.type == GROUP_TYPES.reorderable && event.originalTarget == event.target.handleEl) {
      let detail = this.reorderableList.evaluateKeyDownEvent(event);
      if (detail) {
        event.stopPropagation();
        this.handleReorder({
          detail
        });
        return;
      }
    }
    let positionAttr = event.target.getAttribute("position") ??
    // handles the case where an interactive element is nested in a moz-box-item
    event.target.closest("[position]").getAttribute("position");
    let currentPosition = parseInt(positionAttr);
    switch (event.key) {
      case "Down":
      case "ArrowDown":
        {
          event.preventDefault();
          let nextItem = this.listItems[currentPosition + 1];
          nextItem?.focus(event);
          break;
        }
      case "Up":
      case "ArrowUp":
        {
          event.preventDefault();
          let prevItem = this.listItems[currentPosition - 1];
          prevItem?.focus(event);
          break;
        }
    }
  }
  handleFocus() {
    if (this.#tabbable) {
      this.#tabbable = false;
      this.listItems.forEach(item => {
        item.setAttribute("tabindex", "-1");
      });
    }
  }
  handleBlur() {
    if (!this.#tabbable) {
      this.#tabbable = true;
      this.listItems.forEach(item => {
        item.removeAttribute("tabindex");
      });
    }
  }
  updateItems() {
    this.listItems = [...this.children].filter(child => child.slot !== "header" && child.slot !== "footer" && !child.hidden);
  }
  render() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_box_group_moz_box_group_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <slot name="header"></slot>
      ${this.contentTemplate()}
      <slot name="footer"></slot>
    `;
  }
  updated(changedProperties) {
    let headerNode = this.headerSlot.assignedNodes()[0];
    let footerNode = this.footerSlot.assignedNodes().at(-1);
    headerNode?.classList.add("first");
    footerNode?.classList.add("last");
    if (changedProperties.has("listItems") && this.listItems.length) {
      this.listItems.forEach((item, i) => {
        if (this.type == GROUP_TYPES.list || this.type == GROUP_TYPES.reorderable) {
          item.slot = i;
          item.setAttribute("position", i);
        }
        item.classList.toggle("first", i == 0 && !headerNode);
        item.classList.toggle("last", i == this.listItems.length - 1 && !footerNode);
      });
    }
    if (changedProperties.has("type") && (this.type == GROUP_TYPES.list || this.type == GROUP_TYPES.reorderable)) {
      this.updateItems();
    }
  }
}
customElements.define("moz-box-group", MozBoxGroup);

/***/ }),

/***/ 23066:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-box-group.bdb2145d284eeb75557e.css";

/***/ }),

/***/ 27322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozBoxItem)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_box_item_moz_box_item_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70020);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11540);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48334);
/* harmony import */ var chrome_global_content_elements_moz_box_group_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20356);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




const DIRECTION_RIGHT = "Right";
const DIRECTION_LEFT = "Left";
const NAVIGATION_DIRECTIONS = {
  LTR: {
    FORWARD: DIRECTION_RIGHT,
    BACKWARD: DIRECTION_LEFT
  },
  RTL: {
    FORWARD: DIRECTION_LEFT,
    BACKWARD: DIRECTION_RIGHT
  }
};

/**
 * A custom element used for highlighting important information and/or providing
 * context for specific settings.
 *
 * @tagname moz-box-item
 * @property {string} label - Label for the button.
 * @property {string} description - Descriptive text for the button.
 * @property {string} iconSrc - The src for an optional icon shown next to the label.
 * @property {string} layout - Layout style for the box content, either "default" or "large-icon".
 * @slot default - Slot for the box item's content, which overrides label and description.
 * @slot actions - Slot for the actions positioned at the end of the component container.
 * @slot actions-start - Slot for the actions positioned at the start of the component container.
 */
class MozBoxItem extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozBoxBase {
  #actionEls = [];
  static properties = {
    layout: {
      type: String,
      reflect: true
    },
    supportPage: {
      type: String,
      attribute: "support-page"
    }
  };
  static queries = {
    defaultSlotEl: "slot:not([name])",
    actionsStartSlotEl: "slot[name=actions-start]",
    actionsSlotEl: "slot[name=actions]",
    handleEl: ".handle"
  };
  constructor() {
    super();
    this.layout = "default";
    this.addEventListener("keydown", e => this.handleKeydown(e));
  }
  firstUpdated() {
    this.getActionEls();
  }
  handleKeydown(event) {
    let isHandleEvent = event.originalTarget === this.handleEl;
    if (!isHandleEvent && event.target?.slot !== "actions" && event.target?.slot !== "actions-start") {
      return;
    }
    let target = isHandleEvent ? event.originalTarget : event.target;
    let directions = this.getNavigationDirections();
    switch (event.key) {
      case directions.FORWARD:
      case `Arrow${directions.FORWARD}`:
        {
          let nextIndex = this.#actionEls.indexOf(target) + 1;
          let nextEl = this.#actionEls[nextIndex];
          nextEl?.focus();
          break;
        }
      case directions.BACKWARD:
      case `Arrow${directions.BACKWARD}`:
        {
          let prevIndex = this.#actionEls.indexOf(target) - 1;
          let prevEl = this.#actionEls[prevIndex];
          prevEl?.focus();
          break;
        }
    }
  }
  getNavigationDirections() {
    if (this.isDocumentRTL) {
      return NAVIGATION_DIRECTIONS.RTL;
    }
    return NAVIGATION_DIRECTIONS.LTR;
  }
  get isDocumentRTL() {
    if (typeof Services !== "undefined") {
      return Services.locale.isAppLocaleRTL;
    }
    return document.dir === "rtl";
  }
  get isDraggable() {
    return this.parentElement?.type == chrome_global_content_elements_moz_box_group_mjs__WEBPACK_IMPORTED_MODULE_3__.GROUP_TYPES.reorderable && this.slot != "header" && this.slot != "footer";
  }
  focus(event) {
    if (event?.key == "Up" || event?.key == "ArrowUp") {
      let actionEls = this.actionsSlotEl.assignedElements();
      let lastActions = actionEls.length ? actionEls : this.actionsStartSlotEl?.assignedElements();
      let lastAction = lastActions?.[lastActions.length - 1] ?? this.handleEl;
      lastAction?.focus();
    } else {
      let firstAction = this.handleEl ?? this.actionsStartSlotEl?.assignedElements()?.[0] ?? this.actionsSlotEl.assignedElements()?.[0];
      firstAction?.focus();
    }
  }
  getActionEls() {
    let handleEl = this.handleEl ? [this.handleEl] : [];
    let startActions = this.actionsStartSlotEl?.assignedElements() ?? [];
    let endActions = this.actionsSlotEl.assignedElements();
    this.#actionEls = [...handleEl, ...startActions, ...endActions];
  }
  stylesTemplate() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`${super.stylesTemplate()}
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_box_item_moz_box_item_css__WEBPACK_IMPORTED_MODULE_0__}"
      />`;
  }
  slotTemplate(name) {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <span
        role="group"
        aria-labelledby="label"
        aria-describedby="description"
        class="actions"
        @slotchange=${this.getActionEls}
      >
        <slot name=${name}></slot>
      </span>
    `;
  }
  textTemplate() {
    if (this.supportPage) {
      return this.supportTextTemplate();
    }
    return super.textTemplate();
  }
  supportTextTemplate() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div
      class=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.classMap)({
      "text-content": true,
      "has-icon": this.iconSrc,
      "has-description": this.description,
      "has-support-page": this.supportPage
    })}
    >
      <span class="label-wrapper">
        ${this.iconTemplate()}<span>
          ${this.labelTemplate()}${!this.description ? this.supportPageTemplate() : ""}
        </span>
      </span>
      <span class="description-wrapper">
        ${this.descriptionTemplate()}${this.description ? this.supportPageTemplate() : ""}
      </span>
    </div>`;
  }
  supportPageTemplate() {
    if (this.supportPage) {
      return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<a
        class="support-page"
        is="moz-support-link"
        support-page=${this.supportPage}
        part="support-link"
        aria-describedby=${this.description ? "description" : "label"}
      ></a>`;
    }
    return "";
  }
  render() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      ${this.stylesTemplate()}
      <div class="box-container">
        ${this.isDraggable ? (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span tabindex="0" class="handle"></span>` : ""}
        ${this.slotTemplate("actions-start")}
        <div class="box-content">
          ${this.label ? this.textTemplate() : (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<slot></slot>`}
        </div>
        ${this.slotTemplate("actions")}
      </div>
    `;
  }
}
customElements.define("moz-box-item", MozBoxItem);

/***/ }),

/***/ 70020:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-box-item.68e9ec3f3ebfa0897d92.css";

/***/ })

}]);
//# sourceMappingURL=7322.8b04797d.iframe.bundle.js.map