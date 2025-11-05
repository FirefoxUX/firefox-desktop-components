"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[356,3450],{

/***/ 16237:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   List: () => (/* binding */ List),
/* harmony export */   ListWithHeaderAndFooter: () => (/* binding */ ListWithHeaderAndFooter),
/* harmony export */   Reorderable: () => (/* binding */ Reorderable),
/* harmony export */   Scrollable: () => (/* binding */ Scrollable),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11540);
/* harmony import */ var _moz_box_group_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20356);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "UI Widgets/Box Group",
  component: "moz-box-group",
  argTypes: {
    type: {
      options: Object.keys(_moz_box_group_mjs__WEBPACK_IMPORTED_MODULE_1__.GROUP_TYPES),
      mapping: _moz_box_group_mjs__WEBPACK_IMPORTED_MODULE_1__.GROUP_TYPES,
      control: "select"
    }
  },
  parameters: {
    status: "in-development",
    fluent: `
moz-box-item =
  .label = I'm a box item
  .description = I'm part of a group
moz-box-button-1 =
  .label = I'm a box button in a group
moz-box-button-2 =
  .label = I'm another box button in a group
moz-box-link =
  .label = I'm a box link in a group
moz-box-delete-action =
  .title = Delete I'm a box item
moz-box-edit-action =
  .title = Edit I'm a box item
moz-box-toggle-action =
  .aria-label = Toggle I'm a box item
moz-box-more-action =
  .title = More options, I'm a box item
moz-box-item-reorderable-1 =
  .label = I'm box item number 1
moz-box-item-reorderable-2 =
  .label = I'm box item number 2
moz-box-item-reorderable-3 =
  .label = I'm box item number 3
moz-box-item-reorderable-4 =
  .label = I'm box item number 4
moz-box-item-reorderable-5 =
  .label = I'm box item number 5
moz-box-item-header =
  .label = I'm a header box item
moz-box-button-footer =
  .label = I'm a footer box button
    `
  }
});
function getInnerElements(type) {
  if (type == _moz_box_group_mjs__WEBPACK_IMPORTED_MODULE_1__.GROUP_TYPES.reorderable) {
    return reorderableElements();
  }
  return basicElements();
}
function reorderableElements() {
  return Array.from({
    length: 5
  }).map((_, i) => {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<moz-box-item
      data-l10n-id=${`moz-box-item-reorderable-${i + 1}`}
    >
      <moz-button
        iconsrc="chrome://global/skin/icons/edit-outline.svg"
        data-l10n-id="moz-box-edit-action"
        slot="actions-start"
      ></moz-button>
      <moz-toggle
        slot="actions"
        pressed
        data-l10n-id="moz-box-toggle-action"
      ></moz-toggle>
    </moz-box-item>`;
  });
}
function basicElements() {
  return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<moz-box-item data-l10n-id="moz-box-item">
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
        slot="actions-start"
      ></moz-button>
    </moz-box-item>
    <moz-box-link data-l10n-id="moz-box-link"></moz-box-link>
    <moz-box-button data-l10n-id="moz-box-button-1"></moz-box-button>
    <moz-box-item data-l10n-id="moz-box-item">
      <moz-button
        iconsrc="chrome://global/skin/icons/edit-outline.svg"
        data-l10n-id="moz-box-edit-action"
        type="ghost"
        slot="actions-start"
      ></moz-button>
      <moz-button
        iconsrc="chrome://global/skin/icons/more.svg"
        data-l10n-id="moz-box-more-action"
        slot="actions-start"
      ></moz-button>
    </moz-box-item>
    <moz-box-button data-l10n-id="moz-box-button-2"></moz-box-button>`;
}
const Template = ({
  type,
  hasHeader,
  hasFooter,
  scrollable
}) => (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <style>
    moz-box-group {
      --box-group-max-height: ${scrollable ? "200px" : "unset"};
    }

    .delete {
      margin-top: var(--space-medium);
    }
  </style>
  <moz-box-group type=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.ifDefined)(type)}>
    ${hasHeader ? (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<moz-box-item
          slot="header"
          data-l10n-id="moz-box-item-header"
        ></moz-box-item>` : ""}
    ${getInnerElements(type)}
    ${hasFooter ? (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<moz-box-button
          slot="footer"
          data-l10n-id="moz-box-button-footer"
        ></moz-box-button>` : ""}
  </moz-box-group>
  ${type == "list" ? (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`<moz-button class="delete" @click=${appendItem}>
        Add an item
      </moz-button>` : ""}
`;
const appendItem = event => {
  let group = event.target.getRootNode().querySelector("moz-box-group");
  let boxItem = document.createElement("moz-box-item");
  boxItem.label = "New box item";
  boxItem.description = "New items are added to the list";
  let actionButton = document.createElement("moz-button");
  actionButton.addEventListener("click", () => boxItem.remove());
  actionButton.iconSrc = "chrome://global/skin/icons/delete.svg";
  actionButton.slot = "actions";
  actionButton.setAttribute("data-l10n-id", "moz-box-delete-action");
  boxItem.append(actionButton);
  group.prepend(boxItem);
};
const Default = Template.bind({});
Default.args = {
  type: "default",
  hasHeader: false,
  hasFooter: false,
  scrollable: false
};
const List = Template.bind({});
List.args = {
  ...Default.args,
  type: "list"
};
const Reorderable = Template.bind({});
Reorderable.args = {
  ...Default.args,
  type: "reorderable"
};
const ListWithHeaderAndFooter = Template.bind({});
ListWithHeaderAndFooter.args = {
  ...List.args,
  hasHeader: true,
  hasFooter: true
};
const Scrollable = Template.bind({});
Scrollable.args = {
  ...ListWithHeaderAndFooter.args,
  scrollable: true
};

/***/ }),

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
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div class="scroll-container"><slot></slot></div>`;
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

module.exports = __webpack_require__.p + "moz-box-group.9a956de6737a69d3bd3e.css";

/***/ })

}]);
//# sourceMappingURL=moz-box-group-moz-box-group-stories.14962488.iframe.bundle.js.map