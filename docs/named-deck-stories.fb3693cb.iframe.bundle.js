"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[1491],{

/***/ 33321:
/***/ (() => {

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



// This is loaded into chrome windows with the subscript loader. Wrap in
// a block to prevent accidentally leaking globals onto `window`.
{
  /**
   * This element is for use with the <named-deck> element. Set the target
   * <named-deck>'s ID in the "deck" attribute and the button's selected state
   * will reflect the deck's state. When the button is clicked, it will set the
   * view in the <named-deck> to the button's "name" attribute.
   *
   * The "tab" role will be added unless a different role is provided. Wrapping
   * a set of these buttons in a <button-group> element will add the key handling
   * for a tablist.
   *
   * NOTE: This does not observe changes to the "deck" or "name" attributes, so
   * changing them likely won't work properly.
   *
   * <button is="named-deck-button" deck="pet-deck" name="dogs">Dogs</button>
   * <named-deck id="pet-deck">
   *   <p name="cats">I like cats.</p>
   *   <p name="dogs">I like dogs.</p>
   * </named-deck>
   *
   * let btn = document.querySelector('button[name="dogs"]');
   * let deck = document.querySelector("named-deck");
   * deck.selectedViewName == "cats";
   * btn.selected == false; // Selected was pulled from the related deck.
   * btn.click();
   * deck.selectedViewName == "dogs";
   * btn.selected == true; // Selected updated when view changed.
   */
  class NamedDeckButton extends HTMLButtonElement {
    connectedCallback() {
      this.id = `${this.deckId}-button-${this.name}`;
      if (!this.hasAttribute("role")) {
        this.setAttribute("role", "tab");
      }
      this.setSelectedFromDeck();
      this.addEventListener("click", this);
      this.getRootNode().addEventListener("view-changed", this, {
        capture: true
      });
    }
    disconnectedCallback() {
      this.removeEventListener("click", this);
      this.getRootNode().removeEventListener("view-changed", this, {
        capture: true
      });
    }
    attributeChangedCallback(name, oldVal, newVal) {
      if (name == "selected") {
        this.selected = newVal;
      }
    }
    get deckId() {
      return this.getAttribute("deck");
    }
    set deckId(val) {
      this.setAttribute("deck", val);
    }
    get deck() {
      return this.getRootNode().querySelector(`#${this.deckId}`);
    }
    handleEvent(e) {
      if (e.type == "view-changed" && e.target.id == this.deckId) {
        this.setSelectedFromDeck();
      } else if (e.type == "click") {
        let {
          deck
        } = this;
        if (deck) {
          deck.selectedViewName = this.name;
        }
      }
    }
    get name() {
      return this.getAttribute("name");
    }
    get selected() {
      return this.hasAttribute("selected");
    }
    set selected(val) {
      if (this.selected != val) {
        this.toggleAttribute("selected", val);
      }
      this.setAttribute("aria-selected", !!val);
    }
    setSelectedFromDeck() {
      let {
        deck
      } = this;
      this.selected = deck && deck.selectedViewName == this.name;
      if (this.selected) {
        this.dispatchEvent(new CustomEvent("button-group:selected", {
          bubbles: true
        }));
      }
    }
  }
  customElements.define("named-deck-button", NamedDeckButton, {
    extends: "button"
  });
  class ButtonGroup extends HTMLElement {
    static get observedAttributes() {
      return ["orientation"];
    }
    connectedCallback() {
      this.setAttribute("role", "tablist");
      if (!this.observer) {
        this.observer = new MutationObserver(changes => {
          for (let change of changes) {
            this.setChildAttributes(change.addedNodes);
            for (let node of change.removedNodes) {
              if (this.activeChild == node) {
                // Ensure there's still an active child.
                this.activeChild = this.firstElementChild;
              }
            }
          }
        });
      }
      this.observer.observe(this, {
        childList: true
      });

      // Set the role and tabindex for the current children.
      this.setChildAttributes(this.children);

      // Try assigning the active child again, this will run through the checks
      // to ensure it's still valid.
      this.activeChild = this._activeChild;
      this.addEventListener("button-group:selected", this);
      this.addEventListener("keydown", this);
      this.addEventListener("mousedown", this);
      this.getRootNode().addEventListener("keypress", this);
    }
    disconnectedCallback() {
      this.observer.disconnect();
      this.removeEventListener("button-group:selected", this);
      this.removeEventListener("keydown", this);
      this.removeEventListener("mousedown", this);
      this.getRootNode().removeEventListener("keypress", this);
    }
    attributeChangedCallback(name) {
      if (name == "orientation") {
        if (this.isVertical) {
          this.setAttribute("aria-orientation", this.orientation);
        } else {
          this.removeAttribute("aria-orientation");
        }
      }
    }
    setChildAttributes(nodes) {
      for (let node of nodes) {
        if (node.nodeType == Node.ELEMENT_NODE && node != this.activeChild) {
          node.setAttribute("tabindex", "-1");
        }
      }
    }

    // The activeChild is the child that can be focused with tab.
    get activeChild() {
      return this._activeChild;
    }
    set activeChild(node) {
      let prevActiveChild = this._activeChild;
      let newActiveChild;
      if (node && this.contains(node)) {
        newActiveChild = node;
      } else {
        newActiveChild = this.firstElementChild;
      }
      this._activeChild = newActiveChild;
      if (newActiveChild) {
        newActiveChild.setAttribute("tabindex", "0");
      }
      if (prevActiveChild && prevActiveChild != newActiveChild) {
        prevActiveChild.setAttribute("tabindex", "-1");
      }
    }
    get isVertical() {
      return this.orientation == "vertical";
    }
    get orientation() {
      return this.getAttribute("orientation") == "vertical" ? "vertical" : "horizontal";
    }
    set orientation(val) {
      if (val == "vertical") {
        this.setAttribute("orientation", val);
      } else {
        this.removeAttribute("orientation");
      }
    }
    _navigationKeys() {
      if (this.isVertical) {
        return {
          previousKey: "ArrowUp",
          nextKey: "ArrowDown"
        };
      }
      if (document.dir == "rtl") {
        return {
          previousKey: "ArrowRight",
          nextKey: "ArrowLeft"
        };
      }
      return {
        previousKey: "ArrowLeft",
        nextKey: "ArrowRight"
      };
    }
    handleEvent(e) {
      let {
        previousKey,
        nextKey
      } = this._navigationKeys();
      if (e.type == "keydown" && (e.key == previousKey || e.key == nextKey)) {
        this.setAttribute("last-input-type", "keyboard");
        e.preventDefault();
        let oldFocus = this.activeChild;
        this.walker.currentNode = oldFocus;
        let newFocus;
        if (e.key == previousKey) {
          newFocus = this.walker.previousNode();
        } else {
          newFocus = this.walker.nextNode();
        }
        if (newFocus) {
          this.activeChild = newFocus;
          this.dispatchEvent(new CustomEvent("button-group:key-selected"));
        }
      } else if (e.type == "button-group:selected") {
        this.activeChild = e.target;
      } else if (e.type == "mousedown") {
        this.setAttribute("last-input-type", "mouse");
      } else if (e.type == "keypress" && e.key == "Tab") {
        this.setAttribute("last-input-type", "keyboard");
      }
    }
    get walker() {
      if (!this._walker) {
        this._walker = document.createTreeWalker(this, NodeFilter.SHOW_ELEMENT, {
          acceptNode: node => {
            if (node.hidden || node.disabled) {
              return NodeFilter.FILTER_REJECT;
            }
            node.focus();
            return this.getRootNode().activeElement == node ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
          }
        });
      }
      return this._walker;
    }
  }
  customElements.define("button-group", ButtonGroup);

  /**
   * A deck that is indexed by the "name" attribute of its children. The
   * <named-deck-button> element is a companion element that can update its state
   * and change the view of a <named-deck>.
   *
   * When the deck is connected it will set the first child as the selected view
   * if a view is not already selected.
   *
   * The deck is implemented using a named slot. Setting a slot directly on a
   * child element of the deck is not supported.
   *
   * You can get or set the selected view by name with the `selectedViewName`
   * property or by setting the "selected-view" attribute.
   *
   * <named-deck>
   *   <section name="cats">Some info about cats.</section>
   *   <section name="dogs">Some dog stuff.</section>
   * </named-deck>
   *
   * let deck = document.querySelector("named-deck");
   * deck.selectedViewName == "cats"; // Cat info is shown.
   * deck.selectedViewName = "dogs";
   * deck.selectedViewName == "dogs"; // Dog stuff is shown.
   * deck.setAttribute("selected-view", "cats");
   * deck.selectedViewName == "cats"; // Cat info is shown.
   *
   * Add the is-tabbed attribute to <named-deck> if you want
   * each of its children to have a tabpanel role and aria-labelledby
   * referencing the NamedDeckButton component.
   */
  class NamedDeck extends HTMLElement {
    static get observedAttributes() {
      return ["selected-view"];
    }
    constructor() {
      super();
      this.attachShadow({
        mode: "open"
      });

      // Create a slot for the visible content.
      let selectedSlot = document.createElement("slot");
      selectedSlot.setAttribute("name", "selected");
      this.shadowRoot.appendChild(selectedSlot);
      this.observer = new MutationObserver(() => {
        this._setSelectedViewAttributes();
      });
    }
    connectedCallback() {
      if (this.selectedViewName) {
        // Make sure the selected view is shown.
        this._setSelectedViewAttributes();
      } else {
        // If there's no selected view, default to the first.
        let firstView = this.firstElementChild;
        if (firstView) {
          // This will trigger showing the first view.
          this.selectedViewName = firstView.getAttribute("name");
        }
      }
      this.observer.observe(this, {
        childList: true
      });
    }
    disconnectedCallback() {
      this.observer.disconnect();
    }
    attributeChangedCallback(attr, oldVal, newVal) {
      if (attr == "selected-view" && oldVal != newVal) {
        // Update the slot attribute on the views.
        this._setSelectedViewAttributes();

        // Notify that the selected view changed.
        this.dispatchEvent(new CustomEvent("view-changed"));
      }
    }
    get selectedViewName() {
      return this.getAttribute("selected-view");
    }
    set selectedViewName(name) {
      this.setAttribute("selected-view", name);
    }

    /**
     * Set the slot attribute on all of the views to ensure only the selected view
     * is shown.
     */
    _setSelectedViewAttributes() {
      let {
        selectedViewName
      } = this;
      for (let view of this.children) {
        let name = view.getAttribute("name");
        if (this.hasAttribute("is-tabbed")) {
          view.setAttribute("aria-labelledby", `${this.id}-button-${name}`);
          view.setAttribute("role", "tabpanel");
        }
        if (name === selectedViewName) {
          view.slot = "selected";
        } else {
          view.slot = "";
        }
      }
    }
  }
  customElements.define("named-deck", NamedDeck);
}

/***/ }),

/***/ 82969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FocusGroup": () => (/* binding */ FocusGroup),
/* harmony export */   "ListMenu": () => (/* binding */ ListMenu),
/* harmony export */   "Tabs": () => (/* binding */ Tabs),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45717);
/* harmony import */ var toolkit_widgets_named_deck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33321);
/* harmony import */ var toolkit_widgets_named_deck_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(toolkit_widgets_named_deck_js__WEBPACK_IMPORTED_MODULE_1__);
var _templateObject, _templateObject2, _templateObject3;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


// Imported for side-effects.
// eslint-disable-next-line import/no-unassigned-import

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "UI Widgets/Named Deck",
  component: "named-deck",
  parameters: {
    status: "stable",
    fluent: "\nnamed-deck-tab-one = Tab 1\nnamed-deck-tab-two = Tab 2\nnamed-deck-tab-three = Tab 3\nnamed-deck-content-one = This is tab 1\nnamed-deck-content-two = This is tab 2\nnamed-deck-content-three = This is tab 3\nbutton-group-one = One\nbutton-group-two = Two\nbutton-group-three = Three\nbutton-group-four = Four\n    "
  }
});
var Tabs = function Tabs() {
  return (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  <style>\n    button[selected] {\n      outline: 2px dashed var(--in-content-primary-button-background);\n    }\n  </style>\n  <button-group>\n    <button is=\"named-deck-button\" deck=\"tabs-deck\" name=\"tab-1\" data-l10n-id=\"named-deck-tab-one\"></button>\n    <button is=\"named-deck-button\" deck=\"tabs-deck\" name=\"tab-2\" data-l10n-id=\"named-deck-tab-two\"></button>\n    <button is=\"named-deck-button\" deck=\"tabs-deck\" name=\"tab-3\" data-l10n-id=\"named-deck-tab-three\"></button>\n  </button-group>\n  <named-deck id=\"tabs-deck\" is-tabbed>\n    <p name=\"tab-1\" data-l10n-id=\"named-deck-content-one\"></p>\n    <p name=\"tab-2\" data-l10n-id=\"named-deck-content-two\"></p>\n    <p name=\"tab-3\" data-l10n-id=\"named-deck-content-three\"></p>\n  </named-deck>\n\n  <hr>\n\n  <p>\n    The dashed outline is added for emphasis here. It applies to the button with\n    the <code>selected</code> attribute, but matches the deck's\n    <code>selected-view</code> name.\n  </p>\n\n  <p>\n    These tabs are a combination of <code>button-group</code>,\n    <code>named-deck-button</code>, and <code>named-deck</code>.\n    <ul>\n      <li>\n        <code>button-group</code> makes the tabs a single focusable group,\n        using left/right to switch between focused buttons.\n      </li>\n      <li>\n        <code>named-deck-button</code>s are <code>button</code> subclasses\n        that are used to control the <code>named-deck</code>.\n      </li>\n      <li>\n        <code>named-deck</code> show only one selected child at a time.\n      </li>\n    </ul>\n  </p>\n"])));
};
var ListMenu = function ListMenu() {
  return (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  <style>\n    .icon-button {\n      background-image: url(\"chrome://global/skin/icons/arrow-left.svg\");\n    }\n\n    .vertical-group {\n      display: flex;\n      flex-direction: column;\n      width: 200px;\n    }\n  </style>\n  <named-deck id=\"list-deck\" is-tabbed>\n    <section name=\"list\">\n      <button-group orientation=\"vertical\" class=\"vertical-group\">\n        <button is=\"named-deck-button\" deck=\"list-deck\" name=\"tab-1\">\n          Tab 1\n        </button>\n        <button is=\"named-deck-button\" deck=\"list-deck\" name=\"tab-2\">\n          Tab 2\n        </button>\n        <button is=\"named-deck-button\" deck=\"list-deck\" name=\"tab-3\">\n          Tab 3\n        </button>\n      </button-group>\n    </section>\n    <section name=\"tab-1\">\n      <button\n        class=\"icon-button ghost-button\"\n        is=\"named-deck-button\"\n        deck=\"list-deck\"\n        name=\"list\"\n      ></button>\n      <p>This is tab 1</p>\n    </section>\n    <section name=\"tab-2\">\n      <button\n        class=\"icon-button ghost-button\"\n        is=\"named-deck-button\"\n        deck=\"list-deck\"\n        name=\"list\"\n      ></button>\n      <p>This is tab 2</p>\n    </section>\n    <section name=\"tab-3\">\n      <button\n        class=\"icon-button ghost-button\"\n        is=\"named-deck-button\"\n        deck=\"list-deck\"\n        name=\"list\"\n      ></button>\n      <p>This is tab 3</p>\n    </section>\n  </named-deck>\n\n  <hr />\n\n  <p>\n    This is an alternate layout for creating a menu navigation. In this case,\n    the first view in the <code>named-deck</code> is the list view which\n    contains the <code>named-deck-button</code>s to link to the other views.\n    Each view then includes a back <code>named-deck-button</code> which is used\n    to navigate back to the first view.\n  </p>\n"])));
};
var FocusGroupTemplate = function FocusGroupTemplate(_ref) {
  var orientation = _ref.orientation;
  return (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  <button-group orientation=", ">\n    <button data-l10n-id=\"button-group-one\"></button>\n    <button data-l10n-id=\"button-group-two\"></button>\n    <button data-l10n-id=\"button-group-three\"></button>\n    <button data-l10n-id=\"button-group-four\"></button>\n  </button-group>\n\n  <p>\n    The <code>button-group</code> element will group focus to the buttons,\n    requiring left/right or up/down to switch focus between its child elements.\n    It accepts an <code>orientation</code> property, which determines if\n    left/right or up/down are used to change the focused button.\n  </p>\n"])), orientation);
};
var FocusGroup = FocusGroupTemplate.bind({});
FocusGroup.args = {
  orientation: "horizontal"
};
FocusGroup.argTypes = {
  orientation: {
    options: ["horizontal", "vertical"],
    control: {
      type: "radio"
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=named-deck-stories.fb3693cb.iframe.bundle.js.map