"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1424,7238],{

/***/ 79993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   DragSelector: () => (/* binding */ DragSelector),
/* harmony export */   ShadowDOM: () => (/* binding */ ShadowDOM),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11540);
/* harmony import */ var _moz_reorderable_list_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91424);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


// eslint-disable-next-line import/no-unassigned-import

const DEFAULT = "Default";
const SHADOW_DOM = "Shadow DOM";
const DRAG_SELECTOR = "Drag selector";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "UI Widgets/Reorderable List",
  component: "moz-reorderable-list",
  argTypes: {
    demoType: {
      options: [DEFAULT, SHADOW_DOM, DRAG_SELECTOR],
      control: {
        type: "select"
      }
    }
  },
  parameters: {
    status: "in-development",
    actions: {
      handles: ["reorder"]
    }
  }
});
class ShadowDemo extends _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.LitElement {
  static shadowRootOptions = {
    ..._vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.LitElement.shadowRootOptions,
    delegatesFocus: true
  };
  static properties = {
    item: {
      type: String
    }
  };
  render() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<style>
        #shadowed {
          border: var(--border-width) solid var(--border-color);
          border-radius: var(--border-radius-small);
          background-color: var(--background-color-box);
          display: flex;
          align-items: center;
          padding: var(--space-small);
        }
      </style>
      <button id="shadowed">${this.item}</button>`;
  }
}
customElements.define("shadow-demo", ShadowDemo);
class ReorderableDemo extends _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.LitElement {
  static properties = {
    items: {
      type: Array,
      state: true
    },
    type: {
      type: String
    }
  };

  // Choosing not to use Shadow DOM here for demo purposes.
  createRenderRoot() {
    return this;
  }
  constructor() {
    super();
    this.items = ["Item 1", "Item 2", "Item 3", "Item 4"];
  }
  async reorderItems(draggedElement, targetElement, before = false) {
    const draggedIndex = this.items.indexOf(draggedElement.textContent.trim());
    const targetIndex = this.items.indexOf(targetElement.textContent.trim());
    let nextItems = [...this.items];
    const [draggedItem] = nextItems.splice(draggedIndex, 1);
    let adjustedTargetIndex = targetIndex;
    if (draggedIndex < targetIndex) {
      adjustedTargetIndex--;
    }
    if (!before) {
      adjustedTargetIndex = adjustedTargetIndex + 1;
    }
    nextItems.splice(adjustedTargetIndex, 0, draggedItem);
    this.items = nextItems;
    await this.updateComplete;
    let movedItem = this.querySelectorAll("li")[adjustedTargetIndex];
    let focusableEl = this.getFocusableEl(movedItem);
    focusableEl?.focus();
  }
  getFocusableEl(item) {
    if (this.type == DRAG_SELECTOR) {
      return item.querySelector(this.selectors.dragSelector);
    }

    // Look for shadow DOM first, fallback to firstElementChild
    return item.shadowRoot?.querySelector(this.selectors.itemSelector) ?? item.firstElementChild;
  }
  handleReorder(e) {
    const {
      draggedElement,
      targetElement,
      position
    } = e.detail;
    this.reorderItems(draggedElement, targetElement, position === -1);
  }
  handleKeydown(e) {
    e.stopPropagation();
    const result = this.children[1].evaluateKeyDownEvent(e);
    if (!result) {
      return;
    }
    this.handleReorder({
      detail: result
    });
  }
  addItem() {
    this.items = [...this.items, `Item ${this.items.length + 1}`];
  }
  get selectors() {
    switch (this.type) {
      case DEFAULT:
        return {
          itemSelector: "li"
        };
      case SHADOW_DOM:
        return {
          itemSelector: "#shadowed"
        };
      case DRAG_SELECTOR:
        return {
          itemSelector: "li",
          dragSelector: ".handle"
        };
      default:
        return {};
    }
  }
  contentTemplate(item) {
    if (this.type == DEFAULT) {
      return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<button>${item}</button>`;
    } else if (this.type == DRAG_SELECTOR) {
      return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<div class="draggable">
        <div class="handle" tabindex="0"></div>
        <span>${item}</span>
      </div>`;
    }
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<shadow-demo item=${item}></shadow-demo>`;
  }
  render() {
    let {
      itemSelector,
      dragSelector
    } = this.selectors;
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
      <style>
        ul {
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: var(--space-small);
        }
        li {
          list-style: none;
        }
        .handle {
          width: var(--button-size-icon);
          height: var(--button-size-icon);
          cursor: pointer;
          background-image: url("chrome://global/skin/icons/more.svg");
          background-position: center;
          background-repeat: no-repeat;
          border-radius: var(--button-border-radius);
          -moz-context-properties: fill;
          fill: currentColor;
        }
        .draggable {
          border: var(--border-width) solid var(--border-color);
          border-radius: var(--border-radius-small);
          background-color: var(--background-color-box);
          display: flex;
          align-items: center;
          gap: var(--space-small);
        }
      </style>
      <moz-reorderable-list
        itemselector=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(itemSelector)}
        dragselector=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(dragSelector)}
        @reorder=${this.handleReorder}
        @keydown=${this.handleKeydown}
      >
        <ul>
          ${this.items.map(item => (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)` <li>${this.contentTemplate(item)}</li> `)}
        </ul>
      </moz-reorderable-list>
      <button @click=${this.addItem}>Add another item</button>
    `;
  }
}
customElements.define("reorderable-demo", ReorderableDemo);
const Template = ({
  demoType
}) => (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <reorderable-demo type=${demoType}></reorderable-demo>
`;
const Default = Template.bind({});
Default.args = {
  demoType: DEFAULT
};
const ShadowDOM = Template.bind({});
ShadowDOM.args = {
  demoType: SHADOW_DOM
};
const DragSelector = Template.bind({});
DragSelector.args = {
  demoType: DRAG_SELECTOR
};

/***/ }),

/***/ 85802:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-reorderable-list.c11f5c11f2c91546d56c.css";

/***/ }),

/***/ 91424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozReorderableList),
/* harmony export */   isReorderKeyboardEvent: () => (/* binding */ isReorderKeyboardEvent)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_reorderable_list_moz_reorderable_list_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85802);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11540);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48334);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



const REORDER_EVENT = "reorder";
const DRAGSTART_EVENT = "dragstarted";
const DRAGEND_EVENT = "dragended";
const DRAG_DATA_TYPE_PREFIX = "text/reorderable-item/";
const REORDER_PROP = "__mozReorderableIndex";

/**
 * A wrapper element that allows its children to be reordered by dragging and
 * dropping. The element emits the custom `reorder` event when an item is
 * dropped in a new position, which you can use to perform the actual
 * reordering.
 *
 * The detail object of the `reorder` event contains the following properties:
 *
 * - `draggedElement`: The element that was dragged.
 * - `targetElement`: The element over which the dragged element was dropped.
 * - `position`: The position of the drop relative to the target element. -1
 *   means before, 0 means after.
 *
 * Which children are reorderable is determined by the `itemSelector` property.
 *
 * Things to keep in mind when using this element:
 *
 * - Preserve the focus when reordering items.
 * - Check that the reordering shortcuts are not in conflict with other
 *   shortcuts.
 * - Make sure that reordering is picked up by screen readers. Usually DOM
 *   updates cause the reordered element to be read out again, which is
 *   sufficient.
 *
 * @tagname moz-reorderable-list
 * @property {string} itemSelector
 *   Selector for elements that should be reorderable.
 * @property {string} dragSelector
 *   Selector used when only part of the reorderable element should be draggable,
 *   e.g. we use a button or an icon as a "handle" to drag the element.
 * @fires reorder - Fired when an item is dropped in a new position.
 * @fires dragstarted - Fired when an item is dragged.
 * @fires dragended - Fired when an item is dropped.
 */
class MozReorderableList extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static queries = {
    slotEl: "slot",
    indicatorEl: ".indicator"
  };
  static properties = {
    itemSelector: {
      type: String
    },
    dragSelector: {
      type: String
    }
  };
  #draggedElement = null;
  #dropTargetInfo = null;
  #mutationObserver = null;
  #items = [];
  isXULElement(element) {
    return window.XULElement?.isInstance?.(element);
  }
  getBounds(element) {
    return window.windowUtils?.getBoundsWithoutFlushing?.(element) || element.getBoundingClientRect();
  }
  constructor() {
    super();
    this.itemSelector = "li";
    this.addEventListener("dragstart", this.onDragStart);
    this.addEventListener("dragover", this.onDragOver);
    this.addEventListener("dragleave", this.onDragLeave);
    this.addEventListener("dragend", this.onDragEnd);
    this.addEventListener("drop", this.onDrop);
    this.#mutationObserver = new MutationObserver((...args) => this.onMutation(...args));
  }
  firstUpdated() {
    super.firstUpdated();
    this.getItems();
  }
  connectedCallback() {
    super.connectedCallback();
    this.#mutationObserver.observe(this, {
      childList: true,
      subtree: true
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.#mutationObserver.disconnect();
  }
  onMutation(mutationList) {
    let needsUpdate = false;
    for (const mutation of mutationList) {
      if (mutation.addedNodes.length || mutation.removedNodes.length) {
        needsUpdate = true;
        break;
      }
    }
    if (needsUpdate) {
      // Defer re-querying for items until the next paint to ensure any
      // asynchronously rendered (i.e. Lit-based) elements are in the DOM.
      requestAnimationFrame(() => {
        this.getItems();
      });
    }
  }

  /**
   * Add the draggable attribute non-XUL elements.
   */
  addDraggableAttribute(items) {
    let draggableItems = items;
    if (this.dragSelector) {
      draggableItems = this.getAssignedElementsBySelector(this.dragSelector, items);
    }
    for (const item of draggableItems) {
      // Unlike XUL elements, HTML elements are not draggable by default.
      // So we need to set the draggable attribute on all items that match the selector.
      if (!this.isXULElement(item)) {
        item.draggable = true;
      }
    }
  }
  onDragStart(event) {
    let draggedElement = this.getTargetItemFromEvent(event);
    if (!draggedElement) {
      return;
    }
    const dragIndex = this.getItemIndex(draggedElement);
    if (dragIndex === -1) {
      return;
    }
    event.stopPropagation();
    this.emitEvent(DRAGSTART_EVENT, {
      draggedElement
    });

    // In privileged documents, use a canvas element combined with the
    // drawWindow API to create a more accurate drag image. This is especially
    // useful when dragging composite custom elements.
    if (window.document.nodePrincipal?.isSystemPrincipal) {
      let rect = this.getBounds(draggedElement);
      let scale = window.devicePixelRatio || 1;
      let canvas = document.createElement("canvas");
      canvas.width = rect.width * scale;
      canvas.height = rect.height * scale;
      let context = canvas.getContext("2d");
      context.scale(scale, scale);
      context.drawWindow(window, rect.left, rect.top, rect.width, rect.height, "rgb(255,255,255)");
      event.dataTransfer.setDragImage(canvas, 0, 0);
    }

    // XUL elements need dataTransfer values to be set for drag and drop to work.
    if (this.isXULElement(draggedElement)) {
      let documentId = draggedElement.ownerDocument.documentElement.id;
      event.dataTransfer.mozSetDataAt(`${DRAG_DATA_TYPE_PREFIX}${documentId}`, draggedElement.id, 0);
      event.dataTransfer.addElement(draggedElement);
      event.dataTransfer.effectAllowed = "move";
    }
    this.#draggedElement = draggedElement;
  }
  onDragOver(event) {
    this.#dropTargetInfo = this.getDropTargetInfo(event);
    if (!this.#dropTargetInfo) {
      this.indicatorEl.hidden = true;
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    const {
      targetIndex,
      position
    } = this.#dropTargetInfo;
    const items = this.#items;
    const item = items[targetIndex];
    if (!item) {
      this.indicatorEl.hidden = true;
      return;
    }
    const containerRect = this.getBounds(this);
    const itemRect = this.getBounds(item);
    this.indicatorEl.hidden = false;
    if (position < 0) {
      this.indicatorEl.style.top = `${itemRect.top - containerRect.top}px`;
    } else {
      this.indicatorEl.style.top = `${itemRect.bottom - containerRect.top}px`;
    }
  }
  onDragLeave(event) {
    let path = event.composedPath();
    let draggedEl = path.find(el => el.matches?.(this.itemSelector));
    if (!draggedEl) {
      return;
    }
    let target = event.relatedTarget;
    while (target && target !== this) {
      target = target.parentNode;
    }
    if (target !== this) {
      this.indicatorEl.hidden = true;
    }
  }
  onDrop(event) {
    this.#dropTargetInfo = this.getDropTargetInfo(event);
    if (!this.#draggedElement || !this.#dropTargetInfo) {
      return;
    }

    // Don't emit the reorder event if the dragged element is dropped on itself
    if (this.#draggedElement === this.#dropTargetInfo.targetElement) {
      this.onDragEnd();
      return;
    }

    // Don't emit the reorder event if inserting after the previous element
    // or before the next element (no actual reordering needed)
    const draggedIndex = this.getItemIndex(this.#draggedElement);
    const targetIndex = this.#dropTargetInfo.targetIndex;
    const position = this.#dropTargetInfo.position;
    if (position === 0 && targetIndex === draggedIndex - 1 ||
    // Inserting after previous element
    position === -1 && targetIndex === draggedIndex + 1 // Inserting before next element
    ) {
      this.onDragEnd();
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    this.emitEvent(REORDER_EVENT, {
      draggedElement: this.#draggedElement,
      targetElement: this.#dropTargetInfo.targetElement,
      position: this.#dropTargetInfo.position,
      draggedIndex,
      targetIndex
    });
    this.onDragEnd();
  }
  onDragEnd() {
    // Sometimes dragend is not fired when the element is dropped. To ensure that
    // we clean up, onDragEnd is also called from onDrop; so it might be called
    // multiple times.
    if (this.#draggedElement == null) {
      return;
    }
    this.emitEvent(DRAGEND_EVENT, {
      draggedElement: this.#draggedElement
    });
    this.indicatorEl.hidden = true;
    this.#draggedElement = null;
  }
  evaluateKeyDownEvent(event) {
    const direction = isReorderKeyboardEvent(event);
    if (direction == 0) {
      return undefined;
    }
    const fromEl = this.getTargetItemFromEvent(event);
    if (!fromEl) {
      return undefined;
    }
    const fromIndex = this.getItemIndex(fromEl);
    if (fromIndex === -1) {
      return undefined;
    }

    // if index is 0 and direction is -1, or index is last and direction is 1, do nothing
    const items = this.#items;
    if (fromIndex === 0 && direction === -1 || fromIndex === items.length - 1 && direction === 1) {
      return undefined;
    }
    return {
      draggedElement: fromEl,
      targetElement: items[fromIndex + direction],
      position: Math.min(direction, 0)
    };
  }

  /**
   * Creates a CustomEvent and dispatches it on the element.
   *
   * @param {string} eventName The name of the event
   * @param {Object} [detail] The detail object to pass to the event
   */
  emitEvent(eventName, detail) {
    const customEvent = new CustomEvent(eventName, {
      detail
    });
    this.dispatchEvent(customEvent);
  }

  /**
   * Returns all draggable items based on the itemSelector. Adds reorderable
   * indices and ensures elements are draggable.
   *
   * @see getAssignedElementsBySelector for parameters
   */
  getItems() {
    let items = this.getAssignedElementsBySelector(this.itemSelector);
    this.addDraggableAttribute(items);
    items.forEach((item, i) => {
      item[REORDER_PROP] = i;
    });
    this.#items = items;
  }

  /**
   * Returns all elements for the given selector, including the elements
   * themselves, matching the selector, regardless of nesting
   *
   * @param {string} selector The selector to match
   * @param {HTMLElement | HTMLElement[]} [root] The elements to start
   *   searching for items. Defaults to the slot.
   */
  getAssignedElementsBySelector(selector, root) {
    if (!root) {
      root = this.slotEl.assignedElements();
    } else if (!Array.isArray(root)) {
      root = [root];
    }
    const collectEls = items => {
      return items.flatMap(item => {
        if (item.matches(selector)) {
          return item;
        }
        let nestedEls = item.shadowRoot?.querySelectorAll(selector) ?? item.querySelectorAll(selector);
        if (nestedEls.length) {
          return [...nestedEls];
        }
        let nextEls = item.localName == "slot" ? item.assignedElements() : item.children;
        return collectEls([...(nextEls ?? [])]);
      });
    };
    return collectEls(root);
  }

  /**
   * Returns the drop target based on the current mouse position relative to
   * the item it hovers over
   */
  getDropTargetInfo(event) {
    const targetItem = this.getTargetItemFromEvent(event);
    if (!targetItem) {
      return null;
    }
    const targetIndex = this.getItemIndex(targetItem);
    if (targetIndex === -1) {
      return null;
    }
    const rect = targetItem.getBoundingClientRect();
    const threshold = rect.height * 0.5;
    const position = event.clientY < rect.top + threshold ? -1 : 0;
    return {
      targetElement: targetItem,
      targetIndex,
      position
    };
  }

  /**
   * Returns the index of the given item element out of all items within the
   * slot
   */
  getItemIndex(item) {
    return item[REORDER_PROP] ?? -1;
  }

  /**
   * Returns the item element that is the closest parent of the given event
   * target
   */
  getTargetItemFromEvent(event) {
    const targetItem = event.target.closest(this.itemSelector) || event.originalTarget.closest(this.itemSelector);
    return targetItem;
  }
  render() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_reorderable_list_moz_reorderable_list_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <div class="indicator" hidden="" aria-hidden="true"></div>
      <slot @slotchange=${this.getItems}></slot>
    `;
  }
}

/**
 * Checks if the given keyboard event is a reorder keyboard event
 * (ctrl+shift+up/down).
 *
 * Can be used instead of the automatic reorder keyboard event handling by the
 * moz-reorderable-list component.
 *
 * @param {KeyboardEvent} event - The keyboard event to check
 * @returns {0 | -1 | 1} - 0 if the event is not a reorder keyboard event, -1
 *   if the event is a reorder up event, 1 if the event is a reorder down
 *   event
 */
function isReorderKeyboardEvent(event) {
  if (event.code != "ArrowUp" && event.code != "ArrowDown") {
    return 0;
  }
  if (!event.ctrlKey || !event.shiftKey || event.altKey || event.metaKey) {
    return 0;
  }
  return event.code == "ArrowUp" ? -1 : 1;
}
customElements.define("moz-reorderable-list", MozReorderableList);

/***/ })

}]);
//# sourceMappingURL=moz-reorderable-list-moz-reorderable-list-stories.bb9c4167.iframe.bundle.js.map