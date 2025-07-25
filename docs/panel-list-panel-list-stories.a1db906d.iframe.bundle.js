"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[5118,9965],{

/***/ 5153:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "panel-list.980bbb7a9c91e2e9d9a6.css";

/***/ }),

/***/ 9583:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "panel-item.6b30008e576e52863855.css";

/***/ }),

/***/ 13029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Icons: () => (/* binding */ Icons),
/* harmony export */   Open: () => (/* binding */ Open),
/* harmony export */   Simple: () => (/* binding */ Simple),
/* harmony export */   SubMenu: () => (/* binding */ SubMenu),
/* harmony export */   Wide: () => (/* binding */ Wide),
/* harmony export */   WithAccesskeys: () => (/* binding */ WithAccesskeys),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _panel_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29965);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11540);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



let accesskeyOptions = ["n", "w", "e", "c", "b"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "UI Widgets/Panel List",
  component: "panel-list",
  argTypes: {
    accesskeys: {
      if: {
        arg: "showAccesskeys",
        truthy: true
      }
    }
  },
  parameters: {
    status: "stable",
    actions: {
      handles: ["showing", "shown", "hidden", "click"]
    },
    fluent: `
panel-list-item-one = Item One
panel-list-item-two = Item Two
panel-list-item-three = Item Three
panel-list-disabled = Disabled
panel-list-checked = Checked
panel-list-badged = Badged, look at me
panel-list-passwords = Passwords
panel-list-settings = Settings
submenu-item-one = Submenu Item One
submenu-item-two = Submenu Item Two
submenu-item-three = Submenu Item Three
    `
  }
});
const Template = ({
  isOpen,
  items,
  wideAnchor,
  hasSubMenu,
  showAccesskeys,
  accesskeys
}) => (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
  <style>
    panel-item[icon="passwords"]::part(button) {
      background-image: url("chrome://browser/skin/login.svg");
    }
    panel-item[icon="settings"]::part(button) {
      background-image: url("chrome://global/skin/icons/settings.svg");
    }
    moz-button {
      position: absolute;
    }
    moz-button::part(button) {
      background-image: url("chrome://global/skin/icons/more.svg");
    }
    moz-button[wide] {
      width: 400px !important;
    }
    .end {
      inset-inline-end: 30px;
    }

    .bottom {
      inset-block-end: 30px;
    }
  </style>
  ${isOpen ? "" : (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
        <moz-button
          type="icon ghost"
          menuid="panel-list"
          ?wide=${wideAnchor}
        ></moz-button>
        <moz-button
          type="icon ghost"
          class="end"
          menuid="panel-list"
          ?wide=${wideAnchor}
        ></moz-button>
        <moz-button
          type="icon ghost"
          class="bottom"
          menuid="panel-list"
          ?wide=${wideAnchor}
        ></moz-button>
        <moz-button
          type="icon ghost"
          class="bottom end"
          menuid="panel-list"
          ?wide=${wideAnchor}
        ></moz-button>
      `}
  <panel-list
    id="panel-list"
    ?stay-open=${isOpen}
    ?open=${isOpen}
    ?min-width-from-anchor=${wideAnchor}
  >
    ${items.map((item, index) => {
  // Always showing submenu on the first item for simplicity.
  let showSubMenu = hasSubMenu && index == 0;
  let subMenuId = showSubMenu ? "example-sub-menu" : undefined;
  return item == "<hr>" ? (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)` <hr /> ` : (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
            <panel-item
              icon=${item.icon ?? ""}
              ?checked=${item.checked}
              ?disabled=${item.disabled}
              type=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(item.checked ? "checkbox" : undefined)}
              ?badged=${item.badged}
              data-l10n-id=${item.l10nId ?? item}
              submenu=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(subMenuId)}
              accesskey=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(showAccesskeys ? accesskeys[index] : "")}
            >
              ${showSubMenu ? subMenuTemplate() : ""}
            </panel-item>
          `;
})}
  </panel-list>
`;
const subMenuTemplate = () => (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
  <panel-list slot="submenu" id="example-sub-menu">
    <panel-item data-l10n-id="submenu-item-one"></panel-item>
    <panel-item data-l10n-id="submenu-item-two"></panel-item>
    <panel-item data-l10n-id="submenu-item-three"></panel-item>
  </panel-list>
`;
const Simple = Template.bind({});
Simple.args = {
  isOpen: false,
  wideAnchor: false,
  items: ["panel-list-item-one", {
    l10nId: "panel-list-item-two"
  }, "panel-list-item-three", "<hr>", {
    l10nId: "panel-list-disabled",
    disabled: true
  }, {
    l10nId: "panel-list-checked",
    checked: true
  }, {
    l10nId: "panel-list-badged",
    badged: true,
    icon: "settings"
  }],
  showAccesskeys: false
};
const Icons = Template.bind({});
Icons.args = {
  isOpen: false,
  wideAnchor: false,
  items: [{
    l10nId: "panel-list-passwords",
    icon: "passwords"
  }, {
    l10nId: "panel-list-settings",
    icon: "settings"
  }]
};
const Open = Template.bind({});
Open.args = {
  ...Simple.args,
  wideAnchor: false,
  isOpen: true
};
const Wide = Template.bind({});
Wide.args = {
  ...Simple.args,
  wideAnchor: true
};
const SubMenu = Template.bind({});
SubMenu.args = {
  ...Simple.args,
  hasSubMenu: true
};
const WithAccesskeys = Template.bind({});
WithAccesskeys.args = {
  ...Simple.args,
  showAccesskeys: true,
  accesskeys: accesskeyOptions
};

/***/ }),

/***/ 29965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var toolkit_content_widgets_panel_list_panel_item_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9583);
/* harmony import */ var toolkit_content_widgets_panel_list_panel_list_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5153);


/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";
{
  class PanelList extends HTMLElement {
    static get observedAttributes() {
      return ["open"];
    }
    static get fragment() {
      if (!this._template) {
        let parser = new DOMParser();
        let cssPath = toolkit_content_widgets_panel_list_panel_list_css__WEBPACK_IMPORTED_MODULE_1__;
        let doc = parser.parseFromString(`
          <template>
            <link rel="stylesheet" href=${cssPath}>
            <div class="arrow top" role="presentation"></div>
            <div class="list" role="presentation">
              <slot></slot>
            </div>
            <div class="arrow bottom" role="presentation"></div>
          </template>
        `, "text/html");
        this._template = document.importNode(doc.querySelector("template"), true);
      }
      return this._template.content.cloneNode(true);
    }
    constructor() {
      super();
      this.attachShadow({
        mode: "open"
      });
      this.shadowRoot.appendChild(this.constructor.fragment);
    }
    connectedCallback() {
      this.setAttribute("role", "menu");
    }
    attributeChangedCallback(name, oldVal, newVal) {
      if (name == "open" && newVal != oldVal) {
        if (this.open) {
          this.onShow();
        } else {
          this.onHide();
        }
      }
    }
    get open() {
      return this.hasAttribute("open");
    }
    set open(val) {
      this.toggleAttribute("open", val);
    }
    get stayOpen() {
      return this.hasAttribute("stay-open");
    }
    set stayOpen(val) {
      this.toggleAttribute("stay-open", val);
    }
    getTargetForEvent(event) {
      if (!event) {
        return null;
      }
      if (event._savedComposedTarget) {
        return event._savedComposedTarget;
      }
      if (event.composed) {
        event._savedComposedTarget = event.composedTarget || event.composedPath()[0];
      }
      return event._savedComposedTarget || event.target;
    }
    show(triggeringEvent, target) {
      this.triggeringEvent = triggeringEvent;
      this.lastAnchorNode = target || this.getTargetForEvent(this.triggeringEvent);
      this.wasOpenedByKeyboard = triggeringEvent && (triggeringEvent.inputSource == MouseEvent.MOZ_SOURCE_KEYBOARD || triggeringEvent.inputSource == MouseEvent.MOZ_SOURCE_UNKNOWN || triggeringEvent.code == "ArrowRight" || triggeringEvent.code == "ArrowLeft");
      this.open = true;
      if (this.parentIsXULPanel()) {
        this.toggleAttribute("inxulpanel", true);
        let panel = this.parentElement;
        panel.hidden = false;
        // Bug 1842070 - There appears to be a race here where panel-lists
        // embedded in XUL panels won't appear during the first call to show()
        // without waiting for a mix of rAF and another tick of the event
        // loop.
        requestAnimationFrame(() => {
          setTimeout(() => {
            panel.openPopup(this.lastAnchorNode, "after_start", 0, 0, false, false, this.triggeringEvent);
          }, 0);
        });
      } else {
        this.toggleAttribute("inxulpanel", false);
      }
    }
    hide(triggeringEvent, {
      force = false
    } = {}, eventTarget) {
      // It's possible this is being used in an unprivileged context, in which
      // case it won't have access to Services / Services will be undeclared.
      const autohideDisabled = this.hasServices() ? Services.prefs.getBoolPref("ui.popup.disable_autohide", false) : false;
      if (autohideDisabled && !force) {
        // Don't hide if this wasn't "forced" (using escape or click in menu).
        return;
      }
      let openingEvent = this.triggeringEvent;
      this.triggeringEvent = triggeringEvent;
      this.open = false;
      if (this.parentIsXULPanel()) {
        // It's possible that we're being programattically hidden, in which
        // case, we need to hide the XUL panel we're embedded in. If, however,
        // we're being hidden because the XUL panel is being hidden, calling
        // hidePopup again on it is a no-op.
        let panel = this.parentElement;
        panel.hidePopup();
      }
      let target = eventTarget || this.getTargetForEvent(openingEvent);
      // Refocus the button that opened the menu if we have one.
      if (target && this.wasOpenedByKeyboard) {
        target.focus();
      }
    }
    toggle(triggeringEvent, target = null) {
      if (this.open) {
        this.hide(triggeringEvent, {
          force: true
        }, target);
      } else {
        this.show(triggeringEvent, target);
      }
    }
    hasServices() {
      // Safely check for Services without throwing a ReferenceError.
      return typeof Services !== "undefined";
    }
    isDocumentRTL() {
      if (this.hasServices()) {
        return Services.locale.isAppLocaleRTL;
      }
      return document.dir === "rtl";
    }
    parentIsXULPanel() {
      const XUL_NS = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
      return this.parentElement?.namespaceURI == XUL_NS && this.parentElement?.localName == "panel";
    }
    async setAlign() {
      const hostElement = this.parentElement || this.getRootNode().host;
      if (!hostElement) {
        // This could get called before we're added to the DOM.
        // Nothing to do in that case.
        return;
      }

      // Set the showing attribute to hide the panel until its alignment is set.
      this.setAttribute("showing", "true");
      // Tell the host element to hide any overflow in case the panel extends off
      // the page before the alignment is set.
      hostElement.style.overflow = "hidden";

      // Wait for a layout flush, then find the bounds.
      let {
        anchorBottom,
        // distance from the bottom of the anchor el to top of viewport.
        anchorLeft,
        anchorTop,
        anchorWidth,
        panelHeight,
        panelWidth,
        winHeight,
        winScrollY,
        winScrollX,
        clientWidth
      } = await new Promise(resolve => {
        this.style.left = 0;
        this.style.top = 0;
        requestAnimationFrame(() => setTimeout(() => {
          let target = this.lastAnchorNode || this.getTargetForEvent(this.triggeringEvent);
          let anchorElement = target || hostElement;
          // It's possible this is being used in a context where windowUtils is
          // not available. In that case, fallback to using the element.
          let getBounds = el => window.windowUtils ? window.windowUtils.getBoundsWithoutFlushing(el) : el.getBoundingClientRect();
          // Use y since top is reserved.
          let anchorBounds = getBounds(anchorElement);
          let panelBounds = getBounds(this);
          let clientWidth = document.scrollingElement.clientWidth;
          resolve({
            anchorBottom: anchorBounds.bottom,
            anchorHeight: anchorBounds.height,
            anchorLeft: anchorBounds.left,
            anchorTop: anchorBounds.top,
            anchorWidth: anchorBounds.width,
            panelHeight: panelBounds.height,
            panelWidth: panelBounds.width,
            winHeight: innerHeight,
            winScrollX: scrollX,
            winScrollY: scrollY,
            clientWidth
          });
        }, 0));
      });

      // If we're embedded in a XUL panel, let it handle alignment.
      if (!this.parentIsXULPanel()) {
        // Calculate the left/right alignment.
        let align;
        let leftOffset;
        let leftAlignX = anchorLeft;
        let rightAlignX = anchorLeft + anchorWidth - panelWidth;
        if (this.isDocumentRTL()) {
          // Prefer aligning on the right.
          align = rightAlignX < 0 ? "left" : "right";
        } else {
          // Prefer aligning on the left.
          align = leftAlignX + panelWidth > clientWidth ? "right" : "left";
        }
        leftOffset = align === "left" ? leftAlignX : rightAlignX;
        let bottomSpaceY = winHeight - anchorBottom;
        let valign;
        let topOffset;
        const VIEWPORT_PANEL_MIN_MARGIN = 10; // 10px ensures that the panel is not flush with the viewport.

        // Only want to valign top when there's more space between the bottom of the anchor element and the top of the viewport.
        // If there's more space between the bottom of the anchor element and the bottom of the viewport, we valign bottom.
        if (anchorBottom > bottomSpaceY && anchorBottom + panelHeight > winHeight) {
          // Never want to have a negative value for topOffset, so ensure it's at least 10px.
          topOffset = Math.max(anchorTop - panelHeight, VIEWPORT_PANEL_MIN_MARGIN);
          // Provide a max-height for larger elements which will provide scrolling as needed.
          this.style.maxHeight = `${anchorTop + VIEWPORT_PANEL_MIN_MARGIN}px`;
          valign = "top";
        } else {
          topOffset = anchorBottom;
          this.style.maxHeight = `${bottomSpaceY - VIEWPORT_PANEL_MIN_MARGIN}px`;
          valign = "bottom";
        }

        // Set the alignments and show the panel.
        this.setAttribute("align", align);
        this.setAttribute("valign", valign);
        hostElement.style.overflow = "";
        // Decide positioning based on where this panel will be rendered
        const offsetParentIsBody = this.offsetParent === document?.body || !this.offsetParent;
        if (offsetParentIsBody) {
          // viewport-based
          this.style.left = `${leftOffset + winScrollX}px`;
          this.style.top = `${topOffset + winScrollY}px`;
        } else {
          // container-relative
          const offsetParentRect = this.offsetParent.getBoundingClientRect();
          this.style.left = `${leftOffset - offsetParentRect.left + winScrollX}px`;
          this.style.top = `${topOffset - offsetParentRect.top + winScrollY}px`;
        }
      }
      this.style.minWidth = this.hasAttribute("min-width-from-anchor") ? `${anchorWidth}px` : "";
      this.removeAttribute("showing");
    }
    addHideListeners() {
      if (this.hasAttribute("stay-open") && !this.lastAnchorNode?.hasSubmenu) {
        // This is intended for inspection in Storybook.
        return;
      }
      // Hide when a panel-item is clicked in the list.
      this.addEventListener("click", this);
      // Allows submenus to stopPropagation when focus is already in the menu
      this.addEventListener("keydown", this);
      // We need Escape/Tab/ArrowDown to work when opened with the mouse.
      document.addEventListener("keydown", this);
      // Hide when a click is initiated outside the panel.
      document.addEventListener("mousedown", this);
      // Hide if focus changes and the panel isn't in focus.
      document.addEventListener("focusin", this);
      // Reset or focus tracking, we treat the first focusin differently.
      this.focusHasChanged = false;
      // Hide on resize, scroll or losing window focus.
      window.addEventListener("resize", this);
      window.addEventListener("scroll", this, {
        capture: true
      });
      window.addEventListener("blur", this);
      if (this.parentIsXULPanel()) {
        this.parentElement.addEventListener("popuphidden", this);
      }
    }
    removeHideListeners() {
      this.removeEventListener("click", this);
      this.removeEventListener("keydown", this);
      document.removeEventListener("keydown", this);
      document.removeEventListener("mousedown", this);
      document.removeEventListener("focusin", this);
      window.removeEventListener("resize", this);
      window.removeEventListener("scroll", this, {
        capture: true
      });
      window.removeEventListener("blur", this);
      if (this.parentIsXULPanel()) {
        this.parentElement.removeEventListener("popuphidden", this);
      }
    }
    handleEvent(e) {
      // Ignore the event if it caused the panel to open.
      if (e == this.triggeringEvent) {
        return;
      }
      let target = this.getTargetForEvent(e);
      let inPanelList = e.composed ? e.composedPath().some(el => el == this) : e.target.closest && e.target.closest("panel-list") == this;
      switch (e.type) {
        case "resize":
        case "scroll":
          if (inPanelList) {
            break;
          }
        // Intentional fall-through
        case "blur":
        case "popuphidden":
          this.hide();
          break;
        case "click":
          if (inPanelList) {
            this.hide(undefined, {
              force: true
            });
          } else {
            // Avoid falling through to the default click handler of the parent.
            e.stopPropagation();
          }
          break;
        case "mousedown":
          // Close if there's a click started outside the panel.
          if (!inPanelList) {
            this.hide();
          }
          break;
        case "keydown":
          if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Tab") {
            // Ignore tabbing with a modifer other than shift.
            if (e.key === "Tab" && (e.altKey || e.ctrlKey || e.metaKey)) {
              return;
            }

            // Don't scroll the page or let the regular tab order take effect.
            e.preventDefault();

            // Prevents the host panel list from responding to these events while
            // the submenu is active.
            e.stopPropagation();

            // Keep moving to the next/previous element sibling until we find a
            // panel-item that isn't hidden.
            let moveForward = e.key === "ArrowDown" || e.key === "Tab" && !e.shiftKey;
            let nextItem = moveForward ? this.focusWalker.nextNode() : this.focusWalker.previousNode();

            // If the next item wasn't found, try looping to the top/bottom.
            if (!nextItem) {
              this.focusWalker.currentNode = this;
              if (moveForward) {
                nextItem = this.focusWalker.firstChild();
              } else {
                nextItem = this.focusWalker.lastChild();
              }
            }
            break;
          } else if (e.key === "Escape") {
            this.hide(undefined, {
              force: true
            });
          } else if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
            // Check if any of the children have an accesskey for this letter.
            let item = this.querySelector(`[accesskey="${e.key.toLowerCase()}"],
              [accesskey="${e.key.toUpperCase()}"]`);
            if (item) {
              item.click();
            }
          }
          break;
        case "focusin":
          if (this.triggeringEvent && target == this.getTargetForEvent(this.triggeringEvent) && !this.focusHasChanged) {
            // There will be a focusin after the mousedown that opens the panel
            // using the mouse. Ignore the first focusin event if it's on the
            // triggering target.
            this.focusHasChanged = true;
          } else {
            // Just record that there was a focusin event.
            this.focusHasChanged = true;
          }
          break;
      }
    }

    /**
     * A TreeWalker that can be used to focus elements. The returned element will
     * be the element that has gained focus based on the requested movement
     * through the tree.
     *
     * Example:
     *
     *   this.focusWalker.currentNode = this;
     *   // Focus and get the first focusable child.
     *   let focused = this.focusWalker.nextNode();
     *   // Focus the second focusable child.
     *   this.focusWalker.nextNode();
     */
    get focusWalker() {
      if (!this._focusWalker) {
        this._focusWalker = document.createTreeWalker(this, NodeFilter.SHOW_ELEMENT, {
          acceptNode: node => {
            // No need to look at hidden nodes.
            if (node.hidden) {
              return NodeFilter.FILTER_REJECT;
            }

            // Focus the node, if it worked then this is the node we want.
            node.focus();
            if (node === node.getRootNode().activeElement) {
              return NodeFilter.FILTER_ACCEPT;
            }

            // Continue into child nodes if the parent couldn't be focused.
            return NodeFilter.FILTER_SKIP;
          }
        });
      }
      return this._focusWalker;
    }
    async setSubmenuAlign() {
      const hostElement = this.lastAnchorNode.parentElement || this.getRootNode().host;
      // The showing attribute allows layout of the panel while remaining hidden
      // from the user until alignment is set.
      this.setAttribute("showing", "true");

      // Wait for a layout flush, then find the bounds.
      let {
        anchorLeft,
        anchorWidth,
        anchorTop,
        parentPanelTop,
        panelWidth,
        clientWidth
      } = await new Promise(resolve => {
        requestAnimationFrame(() => {
          // It's possible this is being used in a context where windowUtils is
          // not available. In that case, fallback to using the element.
          let getBounds = el => window.windowUtils ? window.windowUtils.getBoundsWithoutFlushing(el) : el.getBoundingClientRect();
          // submenu item in the parent panel list
          let anchorBounds = getBounds(this.lastAnchorNode);
          let parentPanelBounds = getBounds(hostElement);
          let panelBounds = getBounds(this);
          let clientWidth = document.scrollingElement.clientWidth;
          resolve({
            anchorLeft: anchorBounds.left,
            anchorWidth: anchorBounds.width,
            anchorTop: anchorBounds.top,
            parentPanelTop: parentPanelBounds.top,
            panelWidth: panelBounds.width,
            clientWidth
          });
        });
      });
      let align = hostElement.getAttribute("align");

      // we use document.scrollingElement.clientWidth to exclude the width
      // of vertical scrollbars, because its inclusion can cause the submenu
      // to open to the wrong side and be overlapped by the scrollbar.
      if (align == "left" && anchorLeft + anchorWidth + panelWidth < clientWidth) {
        this.style.left = `${anchorWidth}px`;
        this.style.right = "";
      } else {
        this.style.right = `${anchorWidth}px`;
        this.style.left = "";
      }
      let topOffset = anchorTop - parentPanelTop - (parseFloat(window.getComputedStyle(this)?.paddingTop) || 0);
      this.style.top = `${topOffset}px`;
      this.removeAttribute("showing");
    }
    async onShow() {
      this.sendEvent("showing");
      this.addHideListeners();
      if (this.lastAnchorNode?.hasSubmenu) {
        await this.setSubmenuAlign();
      } else {
        await this.setAlign();
      }

      // Always reset this regardless of how the panel list is opened
      // so the first child will be focusable.
      this.focusWalker.currentNode = this;

      // Wait until the next paint for the alignment to be set and panel to be
      // visible.
      requestAnimationFrame(() => {
        if (this.wasOpenedByKeyboard) {
          // Focus the first focusable panel-item if opened by keyboard.
          this.focusWalker.nextNode();
        }
        this.lastAnchorNode?.setAttribute("aria-expanded", "true");
        this.sendEvent("shown");
      });
    }
    onHide() {
      requestAnimationFrame(() => {
        this.sendEvent("hidden");
        this.lastAnchorNode?.setAttribute("aria-expanded", "false");
      });
      this.removeHideListeners();
    }
    sendEvent(name, detail) {
      this.dispatchEvent(new CustomEvent(name, {
        detail,
        bubbles: true,
        composed: true
      }));
    }
  }
  customElements.define("panel-list", PanelList);
  class PanelItem extends HTMLElement {
    #initialized = false;
    #defaultSlot;
    static get observedAttributes() {
      return ["accesskey", "type", "disabled"];
    }
    constructor() {
      super();
      this.attachShadow({
        mode: "open"
      });
      let style = document.createElement("link");
      style.rel = "stylesheet";
      style.href = toolkit_content_widgets_panel_list_panel_item_css__WEBPACK_IMPORTED_MODULE_0__;
      this.button = document.createElement("button");
      this.#setButtonAttributes();
      this.button.setAttribute("part", "button");
      // Use a XUL label element if possible to show the accesskey.
      this.label = document.createXULElement ? document.createXULElement("label") : document.createElement("span");
      this.button.appendChild(this.label);
      let supportLinkSlot = document.createElement("slot");
      supportLinkSlot.name = "support-link";
      this.#defaultSlot = document.createElement("slot");
      this.#defaultSlot.style.display = "none";
      this.shadowRoot.append(style, this.button, supportLinkSlot, this.#defaultSlot);
    }
    connectedCallback() {
      if (!this._l10nRootConnected && document.l10n) {
        document.l10n.connectRoot(this.shadowRoot);
        this._l10nRootConnected = true;
      }
      this.panel = this.getRootNode()?.host?.closest("panel-list") || this.closest("panel-list");
      if (!this.#initialized) {
        this.#initialized = true;
        // When click listeners are added to the panel-item it creates a node in
        // the a11y tree for this element. This breaks the association between the
        // menu and the button[role="menuitem"] in this shadow DOM and causes
        // announcement issues with screen readers. (bug 995064)
        this.setAttribute("role", "presentation");
        this.#setLabelContents();

        // When our content changes, move the text into the label. It doesn't work
        // with a <slot>, unfortunately.
        new MutationObserver(() => this.#setLabelContents()).observe(this, {
          characterData: true,
          childList: true,
          subtree: true
        });
        if (this.hasSubmenu) {
          this.panel.setAttribute("has-submenu", "");
          this.icon = document.createElement("div");
          this.icon.setAttribute("class", "submenu-icon");
          this.label.setAttribute("class", "submenu-label");
          this.button.setAttribute("class", "submenu-container");
          this.button.appendChild(this.icon);
          this.submenuSlot = document.createElement("slot");
          this.submenuSlot.name = "submenu";
          this.shadowRoot.append(this.submenuSlot);
          this.setSubmenuContents();
        }
      }
      if (this.panel) {
        this.panel.addEventListener("hidden", this);
        this.panel.addEventListener("shown", this);
      }
      if (this.hasSubmenu) {
        this.addEventListener("mouseenter", this);
        this.addEventListener("mouseleave", this);
        this.addEventListener("keydown", this);
      }
    }
    disconnectedCallback() {
      if (this._l10nRootConnected) {
        document.l10n.disconnectRoot(this.shadowRoot);
        this._l10nRootConnected = false;
      }
      if (this.panel) {
        this.panel.removeEventListener("hidden", this);
        this.panel.removeEventListener("shown", this);
        this.panel = null;
      }
      if (this.hasSubmenu) {
        this.removeEventListener("mouseenter", this);
        this.removeEventListener("mouseleave", this);
        this.removeEventListener("keydown", this);
      }
    }
    get hasSubmenu() {
      return this.hasAttribute("submenu");
    }
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === "accesskey") {
        // Bug 1037709 - Accesskey doesn't work in shadow DOM.
        // Ideally we'd have the accesskey set in shadow DOM, and on
        // attributeChangedCallback we'd just update the shadow DOM accesskey.

        // Skip this change event if we caused it.
        if (this._modifyingAccessKey) {
          this._modifyingAccessKey = false;
          return;
        }
        this.label.accessKey = newVal || "";

        // Bug 1588156 - Accesskey is not ignored for hidden non-input elements.
        // Since the accesskey won't be ignored, we need to remove it ourselves
        // when the panel is closed, and move it back when it opens.
        if (!this.panel || !this.panel.open) {
          // When the panel isn't open, just store the key for later.
          this._accessKey = newVal || null;
          this._modifyingAccessKey = true;
          this.accessKey = "";
        } else {
          this._accessKey = null;
        }
      } else if (name === "type" || name === "disabled") {
        this.#setButtonAttributes();
      }
    }
    #setButtonAttributes() {
      if (this.type == "checkbox") {
        this.button.setAttribute("role", "menuitemcheckbox");
        this.button.setAttribute("aria-checked", this.checked);
      } else {
        this.button.setAttribute("role", "menuitem");
        this.button.removeAttribute("aria-checked");
      }
      this.button.toggleAttribute("disabled", this.disabled);
    }
    #setLabelContents() {
      this.label.textContent = this.#defaultSlot.assignedNodes().map(node => node.textContent).join("");
    }
    setSubmenuContents() {
      this.submenuPanel = this.submenuSlot.assignedNodes()[0];
      if (this.submenuPanel) {
        this.shadowRoot.append(this.submenuPanel);
      }
    }
    get disabled() {
      return this.hasAttribute("disabled");
    }
    set disabled(val) {
      this.toggleAttribute("disabled", val);
    }
    get checked() {
      if (this.type !== "checkbox") {
        return false;
      }
      return this.hasAttribute("checked");
    }
    set checked(val) {
      if (this.type == "checkbox") {
        this.toggleAttribute("checked", val);
        this.button.setAttribute("aria-checked", !!val);
      }
    }
    get type() {
      return this.getAttribute("type") || "button";
    }
    set type(val) {
      this.setAttribute("type", val);
    }
    focus() {
      this.button.focus();
    }
    setArrowKeyRTL() {
      let arrowOpenKey = "ArrowRight";
      let arrowCloseKey = "ArrowLeft";
      if (this.submenuPanel.isDocumentRTL()) {
        arrowOpenKey = "ArrowLeft";
        arrowCloseKey = "ArrowRight";
      }
      return [arrowOpenKey, arrowCloseKey];
    }
    handleEvent(e) {
      // Bug 1588156 - Accesskey is not ignored for hidden non-input elements.
      // Since the accesskey won't be ignored, we need to remove it ourselves
      // when the panel is closed, and move it back when it opens.
      switch (e.type) {
        case "shown":
          if (this._accessKey) {
            this.accessKey = this._accessKey;
            this._accessKey = null;
          }
          break;
        case "hidden":
          if (this.accessKey) {
            this._accessKey = this.accessKey;
            this._modifyingAccessKey = true;
            this.accessKey = "";
          }
          break;
        case "mouseenter":
        case "mouseleave":
          this.submenuPanel.toggle(e);
          break;
        case "keydown":
          let [arrowOpenKey, arrowCloseKey] = this.setArrowKeyRTL();
          if (e.key === arrowOpenKey) {
            this.submenuPanel.show(e, e.target);
            e.stopPropagation();
          }
          if (e.key === arrowCloseKey) {
            this.submenuPanel.hide(e, {
              force: true
            }, e.target);
            e.stopPropagation();
          }
          break;
      }
    }
  }
  customElements.define("panel-item", PanelItem);
}

/***/ })

}]);
//# sourceMappingURL=panel-list-panel-list-stories.a1db906d.iframe.bundle.js.map