"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[160,8102,8708],{

/***/ 23066:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-box-group.bdb2145d284eeb75557e.css";

/***/ }),

/***/ 30160:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GROUP_TYPES: () => (/* binding */ GROUP_TYPES),
/* harmony export */   "default": () => (/* binding */ MozBoxGroup)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_box_group_moz_box_group_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23066);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);

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
 * @slot static - Slot for rendering non-reorderable moz-box-item elements.
 * @slot <index> - Slots used to assign moz-box-* elements to <li> elements when
 *   the group is type="list".
 * @slot <static-index>
 *   Slots used to render moz-box-item elements that are not intended to be reorderable
 *   when the group is type="reorderable-list".
 * @fires reorder
 *  Fired when items are reordered via drag-and-drop or keyboard shortcuts.
 *  The detail object contains draggedElement, targetElement, position, draggedIndex, and targetIndex.
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
    },
    staticItems: {
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
    /** @type {Element[]} */
    this.listItems = [];
    /** @type {Element[]} */
    this.staticItems = [];
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
        itemselector="moz-box-item:not([static])"
        dragselector=".handle"
        @reorder=${this.handleReorder}
      >
        ${this.slotTemplate()}
      </moz-reorderable-list>`;
    }
    return this.slotTemplate();
  }
  slotTemplate() {
    let isReorderable = this.type == GROUP_TYPES.reorderable;
    if (this.type == GROUP_TYPES.list || isReorderable) {
      let listTag = isReorderable ? (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.literal)`ol` : (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.literal)`ul`;
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
          ${this.staticItems?.map((_, i) => {
        return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<li>
              <slot name=${`static-${i}`}></slot>
            </li> `;
      })}
        </${listTag}>
        <slot hidden></slot>
        ${isReorderable ? (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<slot name="static" hidden></slot>` : ""}`;
    }
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div class="scroll-container" tabindex="-1">
      <slot></slot>
    </div>`;
  }

  /**
   * Handles reordering of items in the list.
   *
   * @param {object} event - Event object or wrapper containing detail from moz-reorderable-list.
   * @param {object} event.detail - Detail object from moz-reorderable-list.evaluateKeyDownEvent or drag-and-drop event.
   * @param {Element} event.detail.draggedElement - The element being reordered.
   * @param {Element} event.detail.targetElement - The target element to reorder relative to.
   * @param {number} event.detail.position - Position relative to target (-1 for before, 0 for after).
   * @param {number} event.detail.draggedIndex - The index of the element being reordered.
   * @param {number} event.detail.targetIndex - The new index of the draggedElement.
   */
  handleReorder(event) {
    let {
      targetIndex
    } = event.detail;
    this.dispatchEvent(new CustomEvent("reorder", {
      bubbles: true,
      detail: event.detail
    }));

    /**
     * Without requesting an animation frame, we will lose focus within
     * the box group when using Ctrl + Shift + ArrowDown. The focus will
     * move to the browser chrome which is unexpected.
     *
     */
    requestAnimationFrame(() => {
      this.listItems[targetIndex]?.focus();
    });
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
    let positionElement = event.target.closest("[position]");
    if (!positionElement) {
      // If the user has clicked on the MozBoxGroup it may get keydown events
      // even if there is no focused element within it. Then the event target
      // will be the <ul> and we won't find an element with [position].
      return;
    }
    let positionAttr = positionElement.getAttribute("position");
    let currentPosition = parseInt(positionAttr);
    let allItems = [...this.listItems, ...this.staticItems];
    switch (event.key) {
      case "Down":
      case "ArrowDown":
        {
          event.preventDefault();
          let nextItem = allItems[currentPosition + 1];
          nextItem?.focus(event);
          break;
        }
      case "Up":
      case "ArrowUp":
        {
          event.preventDefault();
          let prevItem = allItems[currentPosition - 1];
          prevItem?.focus(event);
          break;
        }
    }
  }
  handleFocus() {
    if (this.#tabbable) {
      this.#tabbable = false;
      let allItems = [...this.listItems, ...this.staticItems];
      allItems.forEach(item => {
        item.setAttribute("tabindex", "-1");
      });
    }
  }
  handleBlur() {
    if (!this.#tabbable) {
      this.#tabbable = true;
      let allItems = [...this.listItems, ...this.staticItems];
      allItems.forEach(item => {
        item.removeAttribute("tabindex");
      });
    }
  }
  updateItems() {
    /** @type {Element[]} */
    let listItems = [];
    /** @type {Element[]} */
    let staticItems = [];
    [...this.children].forEach(child => {
      if (child.slot === "header" || child.slot === "footer" || child.hidden) {
        return;
      }
      if (child.slot.includes("static")) {
        staticItems.push(child);
      } else {
        listItems.push(child);
      }
    });
    this.listItems = listItems;
    this.staticItems = staticItems;
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
        item.classList.toggle("last", i == this.listItems.length - 1 && !this.staticItems.length && !footerNode);
        item.removeAttribute("tabindex");
      });
      if (!this.#tabbable) {
        this.#tabbable = true;
      }
    }
    if (changedProperties.has("staticItems") && this.staticItems.length) {
      this.staticItems.forEach((item, i) => {
        item.slot = `static-${i}`;
        item.setAttribute("position", this.listItems.length + i);
        let staticEl = item.querySelector("moz-box-item") ?? item;
        staticEl.setAttribute("static", "");
        item.classList.toggle("first", i == 0 && !this.listItems.length && !headerNode);
        item.classList.toggle("last", i == this.staticItems.length - 1 && !footerNode);
        item.removeAttribute("tabindex");
      });
    }
    if (changedProperties.has("type") && (this.type == GROUP_TYPES.list || this.type == GROUP_TYPES.reorderable)) {
      this.updateItems();
    }
  }
}
customElements.define("moz-box-group", MozBoxGroup);

/***/ }),

/***/ 70020:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-box-item.75b0b7e4b705c32d840f.css";

/***/ }),

/***/ 87963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   LargeIconLayout: () => (/* binding */ LargeIconLayout),
/* harmony export */   MediumIconLayout: () => (/* binding */ MediumIconLayout),
/* harmony export */   WithDescription: () => (/* binding */ WithDescription),
/* harmony export */   WithIcon: () => (/* binding */ WithIcon),
/* harmony export */   WithSlottedActionAtTheStart: () => (/* binding */ WithSlottedActionAtTheStart),
/* harmony export */   WithSlottedActions: () => (/* binding */ WithSlottedActions),
/* harmony export */   WithSlottedContent: () => (/* binding */ WithSlottedContent),
/* harmony export */   WithSupportPage: () => (/* binding */ WithSupportPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var _moz_box_item_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98102);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "UI Widgets/Box Item",
  component: "moz-box-item",
  argTypes: {
    l10nId: {
      options: ["moz-box-item-label", "moz-box-item-label-long", "moz-box-item-label-description", "moz-box-item-label-description-long"],
      control: {
        type: "select"
      }
    },
    iconSrc: {
      options: ["", "chrome://global/skin/icons/info.svg", "chrome://global/skin/icons/highlights.svg", "chrome://global/skin/icons/warning.svg", "chrome://global/skin/icons/heart.svg", "chrome://global/skin/icons/edit.svg"],
      control: {
        type: "select"
      }
    }
  },
  parameters: {
    status: "in-development",
    fluent: `
moz-box-item-label =
  .label = I'm a box item
moz-box-item-label-long =
  .label = Lorem ipsum dolor sit amet, consectetur adipiscing elit
moz-box-item-label-description =
  .label = I'm a box item
  .description = Some description of the item
moz-box-item-label-description-long =
  .label = Lorem ipsum dolor sit amet, consectetur adipiscing elit
  .description = Etiam leo est, condimentum ac tristique vitae, viverra nec sem.
moz-box-delete-action =
  .aria-label = Delete I'm a box item
moz-box-edit-action =
  .aria-label = Edit I'm a box item
moz-box-toggle-action =
  .aria-label = Toggle I'm a box item
moz-box-more-action =
  .aria-label = More options for I'm a box item
    `
  }
});
const Template = ({
  l10nId,
  iconSrc,
  slottedContent,
  layout,
  slottedActions,
  slottedActionsStart,
  supportPage
}) => (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <style>
    .container {
      width: 400px;
    }

    .slotted {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
    }

    img {
      width: 150px;
      margin-block-end: var(--space-large);
    }
  </style>
  <div class="container">
    <moz-box-item
      data-l10n-id=${l10nId}
      iconsrc=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(iconSrc)}
      layout=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(layout)}
      support-page=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(supportPage)}
    >
      ${slottedContent ? (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<div class="slotted">
            <img src="chrome://global/skin/illustrations/security-error.svg" />
            <span>This is an example message</span>
            <span class="text-deemphasized">
              Message description would go down here
            </span>
          </div>` : ""}
      ${slottedActionsStart ? (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
            <moz-button
              iconsrc="chrome://global/skin/icons/delete.svg"
              data-l10n-id="moz-box-delete-action"
              slot="actions-start"
            ></moz-button>
          ` : ""}
      ${slottedActions ? (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
            <moz-button
              iconsrc="chrome://global/skin/icons/edit-outline.svg"
              data-l10n-id="moz-box-edit-action"
              type="ghost"
              slot="actions"
            ></moz-button>
            <moz-toggle
              slot="actions"
              pressed
              data-l10n-id="moz-box-toggle-action"
            ></moz-toggle>
            <moz-button
              iconsrc="chrome://global/skin/icons/more.svg"
              data-l10n-id="moz-box-more-action"
              slot="actions"
            ></moz-button>
          ` : ""}
    </moz-box-item>
  </div>
`;
const Default = Template.bind({});
Default.args = {
  l10nId: "moz-box-item-label",
  disabled: false,
  iconSrc: "",
  slottedContent: false,
  slottedActions: false,
  slottedActionsStart: false,
  supportPage: ""
};
const WithDescription = Template.bind({});
WithDescription.args = {
  ...Default.args,
  l10nId: "moz-box-item-label-description"
};
const WithIcon = Template.bind({});
WithIcon.args = {
  ...WithDescription.args,
  iconSrc: "chrome://global/skin/icons/highlights.svg"
};
const WithSlottedContent = Template.bind({});
WithSlottedContent.args = {
  slottedContent: true
};
const LargeIconLayout = Template.bind({});
LargeIconLayout.args = {
  ...WithIcon.args,
  iconSrc: "chrome://global/skin/icons/info.svg",
  layout: "large-icon"
};
const MediumIconLayout = Template.bind({});
MediumIconLayout.args = {
  ...WithIcon.args,
  iconSrc: "chrome://global/skin/icons/info.svg",
  layout: "medium-icon"
};
const WithSlottedActions = Template.bind({});
WithSlottedActions.args = {
  ...Default.args,
  slottedActions: true
};
const WithSlottedActionAtTheStart = Template.bind({});
WithSlottedActionAtTheStart.args = {
  ...Default.args,
  slottedActionsStart: true
};
const WithSupportPage = Template.bind({});
WithSupportPage.args = {
  ...Default.args,
  supportPage: "test",
  iconSrc: "chrome://global/skin/icons/info.svg"
};

/***/ }),

/***/ 98102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozBoxItem)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_box_item_moz_box_item_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70020);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);
/* harmony import */ var chrome_global_content_elements_moz_box_group_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30160);

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
 * @property {"default"|"medium-icon"|"large-icon"} layout - Layout style for the box content.
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
    const reorderableParent = this.closest("moz-box-group");
    return reorderableParent?.type == chrome_global_content_elements_moz_box_group_mjs__WEBPACK_IMPORTED_MODULE_3__.GROUP_TYPES.reorderable && this.slot != "header" && this.slot != "footer" && !this.slot.includes("static");
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

/***/ })

}]);
//# sourceMappingURL=moz-box-item-moz-box-item-stories.dcfb8a12.iframe.bundle.js.map