"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[3833,6721,9975],{

/***/ 9583:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "panel-item.99199edbdbb0168dfb20.css";

/***/ }),

/***/ 16721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MDXContext: () => (/* reexport safe */ _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.MDXContext),
/* harmony export */   MDXProvider: () => (/* reexport safe */ _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.MDXProvider),
/* harmony export */   useMDXComponents: () => (/* reexport safe */ _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.useMDXComponents),
/* harmony export */   withMDXComponents: () => (/* reexport safe */ _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.withMDXComponents)
/* harmony export */ });
/* harmony import */ var _lib_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49897);



/***/ }),

/***/ 27534:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "panel-list.49c70172da9b1c8afd3d.css";

/***/ }),

/***/ 30911:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(85173);
} else {}


/***/ }),

/***/ 43833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var toolkit_content_widgets_panel_list_panel_item_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9583);
/* harmony import */ var toolkit_content_widgets_panel_list_panel_list_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27534);


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
          let panelHeight = this.scrollHeight > panelBounds.height ? this.scrollHeight : panelBounds.height;
          resolve({
            anchorBottom: anchorBounds.bottom,
            anchorHeight: anchorBounds.height,
            anchorLeft: anchorBounds.left,
            anchorTop: anchorBounds.top,
            anchorWidth: anchorBounds.width,
            panelHeight,
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
        if (anchorBottom > bottomSpaceY && anchorBottom + panelHeight + VIEWPORT_PANEL_MIN_MARGIN > winHeight) {
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
          this.style.left = `${leftOffset - offsetParentRect.left}px`;
          this.style.top = `${topOffset - offsetParentRect.top}px`;
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
          {
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
  }
  customElements.define("panel-item", PanelItem);
}

/***/ }),

/***/ 49897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MDXContext: () => (/* binding */ MDXContext),
/* harmony export */   MDXProvider: () => (/* binding */ MDXProvider),
/* harmony export */   useMDXComponents: () => (/* binding */ useMDXComponents),
/* harmony export */   withMDXComponents: () => (/* binding */ withMDXComponents)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74407);
/**
 * @typedef {import('react').ReactNode} ReactNode
 * @typedef {import('mdx/types.js').MDXComponents} Components
 *
 * @typedef Props
 *   Configuration.
 * @property {Components | MergeComponents | null | undefined} [components]
 *   Mapping of names for JSX components to React components.
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context.
 * @property {ReactNode | null | undefined} [children]
 *   Children.
 *
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Components} currentComponents
 *   Current components from the context.
 * @returns {Components}
 *   Merged components.
 */



/**
 * @type {import('react').Context<Components>}
 * @deprecated
 *   This export is marked as a legacy feature.
 *   That means it’s no longer recommended for use as it might be removed
 *   in a future major release.
 *
 *   Please use `useMDXComponents` to get context based components and
 *   `MDXProvider` to set context based components instead.
 */
const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({})

/**
 * @param {import('react').ComponentType<any>} Component
 * @deprecated
 *   This export is marked as a legacy feature.
 *   That means it’s no longer recommended for use as it might be removed
 *   in a future major release.
 *
 *   Please use `useMDXComponents` to get context based components instead.
 */
function withMDXComponents(Component) {
  return boundMDXComponent

  /**
   * @param {Record<string, unknown> & {components?: Components | null | undefined}} props
   * @returns {JSX.Element}
   */
  function boundMDXComponent(props) {
    const allComponents = useMDXComponents(props.components)
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, {...props, allComponents})
  }
}

/**
 * Get current components from the MDX Context.
 *
 * @param {Components | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that takes the current
 *   components and filters/merges/changes them.
 * @returns {Components}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    // Custom merge via a function prop
    if (typeof components === 'function') {
      return components(contextComponents)
    }

    return {...contextComponents, ...components}
  }, [contextComponents, components])
}

/** @type {Components} */
const emptyObject = {}

/**
 * Provider for MDX context
 *
 * @param {Props} props
 * @returns {JSX.Element}
 */
function MDXProvider({components, children, disableParentContext}) {
  /** @type {Components} */
  let allComponents

  if (disableParentContext) {
    allComponents =
      typeof components === 'function'
        ? components({})
        : components || emptyObject
  } else {
    allComponents = useMDXComponents(components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    children
  )
}


/***/ }),

/***/ 57155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MDXContext: () => (/* reexport safe */ _mdx_js_react__WEBPACK_IMPORTED_MODULE_0__.MDXContext),
/* harmony export */   MDXProvider: () => (/* reexport safe */ _mdx_js_react__WEBPACK_IMPORTED_MODULE_0__.MDXProvider),
/* harmony export */   useMDXComponents: () => (/* reexport safe */ _mdx_js_react__WEBPACK_IMPORTED_MODULE_0__.useMDXComponents),
/* harmony export */   withMDXComponents: () => (/* reexport safe */ _mdx_js_react__WEBPACK_IMPORTED_MODULE_0__.withMDXComponents)
/* harmony export */ });
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16721);



/***/ }),

/***/ 85173:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(74407),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 99088:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __page: () => (/* binding */ __page),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74407);
/* harmony import */ var _home_runner_work_firefox_desktop_components_firefox_desktop_components_firefox_browser_components_storybook_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57155);
/* harmony import */ var _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95943);
/* harmony import */ var toolkit_widgets_panel_list_panel_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43833);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30911);









function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    code: "code",
    h2: "h2",
    ul: "ul",
    li: "li",
    a: "a",
    pre: "pre",
    h3: "h3"
  }, (0,_home_runner_work_firefox_desktop_components_firefox_desktop_components_firefox_browser_components_storybook_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Meta, {
      title: "UI Widgets/Panel List/README",
      parameters: {
        previewTabs: {
          canvas: {
            hidden: true
          }
        },
        viewMode: "docs"
      }
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h1, {
      id: "panel-menu",
      children: "Panel Menu"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p, {
      children: ["The ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "panel-list"
      }), " and ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "panel-item"
      }), " components work together to create a menu for\nin-content contexts. The basic structure is a ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "panel-list"
      }), " with ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "panel-item"
      }), "\nchildren and optional ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "hr"
      }), " elements as separators. The ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "panel-list"
      }), " will anchor\nitself to the target of the initiating event when opened with\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "panelList.toggle(event)"
      }), "."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p, {
      children: ["Note: XUL is currently required to\nsupport accesskey underlining (although using ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "moz-label"
      }), " could change that).\nShortcuts are not displayed automatically in the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "panel-item"
      }), ".\nThis XUL requirement affects the \"With Accesskeys\" story, enabling or disabling accesskeys will not show any visual change in the story."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Canvas, {
      withSource: "none",
      mdxSource: "<with-common-styles><panel-list stay-open open><panel-item action=\"new\" accesskey=\"N\">{\"New\"}</panel-item><panel-item accesskey=\"O\">{\"Open\"}</panel-item><hr /><panel-item action=\"save\" accesskey=\"S\">{\"Save\"}</panel-item><hr /><panel-item accesskey=\"Q\">{\"Quit\"}</panel-item></panel-list></with-common-styles>",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("with-common-styles", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("panel-list", {
          "stay-open": true,
          open: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("panel-item", {
            action: "new",
            accesskey: "N",
            children: "New"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("panel-item", {
            accesskey: "O",
            children: "Open"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("panel-item", {
            action: "save",
            accesskey: "S",
            children: "Save"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("panel-item", {
            accesskey: "Q",
            children: "Quit"
          })]
        })
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2, {
      id: "status",
      children: "Status"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p, {
      children: ["Current status is listed as in-development since this is only intended for use\nwithin in-content contexts. XUL is still required for accesskey underlining, but\ncould be migrated to use the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "moz-label"
      }), " component. This is a useful but\nhistorical element that could likely use some attention at the API level and to\nbe brought up to our design systems standards."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2, {
      id: "when-to-use",
      children: "When to use"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.ul, {
      children: ["\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.li, {
        children: "When there are multiple options for something that would take too\nmuch space with individual buttons."
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.li, {
        children: "When the actions are not frequently needed."
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.li, {
        children: "When you are within an in-content context."
      }), "\n"]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2, {
      id: "when-not-to-use",
      children: "When not to use"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.ul, {
      children: ["\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.li, {
        children: "When there is only one action."
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.li, {
        children: "When the actions are frequently needed."
      }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.li, {
        children: ["In the browser chrome, you probably want to use\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.a, {
          href: "https://searchfox.org/mozilla-central/source/toolkit/content/widgets/menupopup.js",
          target: "_blank",
          rel: "nofollow noopener noreferrer",
          children: "menupopup"
        }), "\nor\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.a, {
          href: "https://searchfox.org/mozilla-central/source/toolkit/content/widgets/panel.js",
          target: "_blank",
          rel: "nofollow noopener noreferrer",
          children: "panel"
        }), "\ninstead."]
      }), "\n"]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2, {
      id: "basic-usage",
      children: "Basic usage"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p, {
      children: ["The source for ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "panel-list"
      }), " can be found under\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.a, {
        href: "https://searchfox.org/mozilla-central/source/toolkit/content/widgets/panel-list/panel-list.js",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "toolkit/content/widgets/panel-list/panel-list.js"
      }), ".\nYou can find an examples of ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "panel-list"
      }), " in use in the Firefox codebase in both\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.a, {
        href: "https://searchfox.org/mozilla-central/rev/6f4bc07bd9eb07ed34774841ecf3b1f3678791e8/toolkit/mozapps/extensions/content/aboutaddons.html#209,252,280",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "about:addons"
      }), "\nand the\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.a, {
        href: "https://searchfox.org/mozilla-central/rev/6f4bc07bd9eb07ed34774841ecf3b1f3678791e8/browser/components/migration/content/migration-wizard.mjs#443",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "migration-wizard"
      }), "."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "panel-list"
      }), " will automatically be imported in chrome documents, both through\nmarkup and through JS with ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "document.createElement(\"panel-list\")"
      }), " or by cloning\na template."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        className: "language-html",
        children: "<!-- This will import `panel-list` if needed in most cases. -->\n<panel-list></panel-list>\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p, {
      children: ["In non-chrome documents it can be imported into ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: ".html"
      }), "/", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: ".xhtml"
      }), " files:"]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        className: "language-html",
        children: "<script src=\"chrome://global/content/elements/panel-list.js\"></script>\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p, {
      children: "And used as follows:"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        className: "language-html",
        children: "<panel-list>\n  <panel-item accesskey=\"N\">New</panel-item>\n  <panel-item accesskey=\"O\">Open</panel-item>\n  <hr />\n  <panel-item accesskey=\"S\">Save</panel-item>\n  <hr />\n  <panel-item accesskey=\"Q\">Quit</panel-item>\n</panel-list>\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p, {
      children: ["The ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "toggle"
      }), " method takes the event you received on your anchor button and opens\nthe menu attached to that element."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        className: "language-js",
        children: "anchorButton.addEventListener(\"mousedown\", e => panelList.toggle(e));\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p, {
      children: ["Accesskeys are activated with the bare accesskey letter when the menu is opened.\nSo for this example after opening the menu pressing ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "s"
      }), " will fire a click event\non the Save ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "panel-item"
      }), "."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p, {
      children: ["Note: XUL is currently required for accesskey underlining, but can be ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.a, {
        href: "https://bugzilla.mozilla.org/show_bug.cgi?id=1828741",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: ["replaced\nwith ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
          children: "moz-label"
        })]
      }), " later."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3, {
      id: "fluent-usage",
      children: "Fluent usage"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p, {
      children: ["The ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "panel-item"
      }), " expects to have text content set by fluent."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        className: "language-html",
        children: "<panel-list>\n  <panel-item data-l10n-id=\"menu-new\"></panel-item>\n  <panel-item data-l10n-id=\"menu-save\"></panel-item>\n</panel-list>\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p, {
      children: "In which case your Fluent messages will look something like this:"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "menu-new = New\n    .accesskey = N\nmenu-save = Save\n    .accesskey = S\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2, {
      id: "advanced-usage",
      children: "Advanced usage"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3, {
      id: "showing-the-menu",
      children: "Showing the menu"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p, {
      children: ["By default the menu will be hidden. It is shown when the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "open"
      }), " attribute is\nset, but that won't position the menu by default."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p, {
      children: ["To trigger the auto-positioning of the menu, it should be opened or closed using\nthe ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "toggle(event)"
      }), " method."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        className: "language-js",
        children: "function onMenuButton(event) {\n  document.querySelector(\"panel-list\").toggle(event);\n}\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p, {
      children: ["The ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "toggle(event)"
      }), " method will use ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "event.target"
      }), " as the anchor for the menu."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p, {
      children: ["To achieve the expected behaviour, the menu should open on ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "mousedown"
      }), " for mouse\nevents, and ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "click"
      }), " for keyboard events. This can be accomplished by checking\nthe ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "event.inputSource"
      }), " property in chrome contexts or ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "event.detail"
      }), " in\nnon-chrome contexts (", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "event.detail"
      }), " will be the click count which is ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "0"
      }), " when a\nclick is from the keyboard)."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        className: "language-js",
        children: "function openMenu(event) {\n  if (\n    event.type == \"mousedown\" ||\n    event.inputSource == MouseEvent.MOZ_SOURCE_KEYBOARD ||\n    !event.detail\n  ) {\n    document.querySelector(\"panel-list\").toggle(event);\n  }\n}\n\nlet menuButton = document.getElementById(\"open-menu-button\");\nmenuButton.addEventListener(\"mousedown\", openMenu);\nmenuButton.addEventListener(\"click\", openMenu);\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3, {
      id: "checkbox",
      children: "Checkbox"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p, {
      children: ["Items may be used as a checkbox by setting the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "type"
      }), " attribute.\nThis allows checkmark icon to be automatically rendered and removed via the item's ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "checked"
      }), " attribute.\nNote: this item does not have its own click handler for adding or removing the checkmark, you must handle that."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Canvas, {
      withSource: "none",
      mdxSource: "<with-common-styles><panel-list stay-open open><panel-item action=\"toggle-setting\" type=\"checkbox\" checked=\"\">{\"Toggle Setting\"}</panel-item><panel-item action=\"toggle-panel\" type=\"checkbox\">{\"Toggle Panel\"}</panel-item></panel-list></with-common-styles>",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("with-common-styles", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("panel-list", {
          "stay-open": true,
          open: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("panel-item", {
            action: "toggle-setting",
            type: "checkbox",
            checked: "",
            children: "Toggle Setting"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("panel-item", {
            action: "toggle-panel",
            type: "checkbox",
            children: "Toggle Panel"
          })]
        })
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        className: "language-html",
        children: "<panel-list>\n  <panel-item action=\"toggle-setting\" type=\"checkbox\" checked=\"\">Toggle Setting</panel-item>\n  <panel-item action=\"toggle-panel\" type=\"checkbox\">Toggle Panel</panel-item>\n</panel-list>\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3, {
      id: "icons",
      children: "Icons"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p, {
      children: ["Icons can be added to the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "panel-item"
      }), "s by setting a ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "background-image"
      }), " on\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "panel-item::part(button)"
      }), "."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        className: "language-css",
        children: "panel-item[action=\"new\"]::part(button) {\n  background-image: url(\"./new.svg\");\n}\n\npanel-item[action=\"save\"]::part(button) {\n  background-image: url(\"./save.svg\");\n}\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3, {
      id: "badging",
      children: "Badging"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p, {
      children: ["Icons may be badged by setting the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "badged"
      }), " attribute. This adds a dot next to\nthe icon."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        className: "language-html",
        children: "<panel-list>\n  <panel-item action=\"new\">New</panel-item>\n  <panel-item action=\"save\" badged>Save</panel-item>\n</panel-list>\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Canvas, {
      withSource: "none",
      mdxSource: "<with-common-styles><panel-list stay-open open><panel-item action=\"new\">{\"New\"}</panel-item><panel-item action=\"save\" badged>{\"Save\"}</panel-item></panel-list></with-common-styles>",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("with-common-styles", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("panel-list", {
          "stay-open": true,
          open: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("panel-item", {
            action: "new",
            children: "New"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("panel-item", {
            action: "save",
            badged: true,
            children: "Save"
          })]
        })
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3, {
      id: "matching-anchor-width",
      children: "Matching anchor width"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p, {
      children: ["When using the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "panel-list"
      }), " like a ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "select"
      }), " dropdown, it's nice to have it match\nthe size of the anchor button. You can see this in practice in the\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.a, {
        href: "?path=/story/ui-widgets-panel-list--wide",
        children: "Wide variant"
      }), " and the\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "migration-wizard"
      }), ". Setting the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "min-width-from-anchor"
      }), " attribute will cause the\nmenu to match its anchor's width when it is opened."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        className: "language-html",
        children: "<button class=\"current-selection\">Apples</button>\n<panel-list min-width-from-anchor>\n  <panel-item>Apples</panel-list>\n  <panel-item>Bananas</panel-list>\n</panel-list>\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.h3, {
      id: "usage-in-a-xul-panel",
      children: ["Usage in a XUL ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "panel"
      })]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p, {
      children: ["The \"new\" (as of early 2023) migration wizard uses the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "panel-list"
      }), " inside of a\nXUL ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "panel"
      }), " element to let its contents escape its container dialog by creating\nan OS-level window. This can be useful if the menu could be larger than its\ncontainer, however in chrome contexts you are likely better off using\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "menupopup"
      }), "."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p, {
      children: ["By placing a ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "panel-list"
      }), " inside of a XUL ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "panel"
      }), " it will automatically defer\nits positioning responsibilities to the XUL ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "panel"
      }), " and it will then be able to\ngrow larger than its containing window if needed."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        className: "language-html",
        children: "<!-- Assuming we're in a XUL document. -->\n<panel>\n  <html:panel-list>\n    <html:panel-item>Apples</html:panel-item>\n    <html:panel-item>Apples</html:panel-item>\n    <html:panel-item>Apples</html:panel-item>\n  </html:panel-list>\n</panel>\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3, {
      id: "submenus",
      children: "Submenus"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "panel-list"
      }), " supports nested submenus. Submenus can be created by nesting a second ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "panel-list"
      }), " in a ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "panel-item"
      }), "'s ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "submenu"
      }), " slot and specifying a ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "submenu"
      }), " attribute on that ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "panel-item"
      }), " that points to the nested list's ID. For example:"]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        className: "language-html",
        children: "<panel-list>\n  <panel-item>No submenu</panel-item>\n  <panel-item>No submenu</panel-item>\n  <panel-item submenu=\"example-submenu\">\n    Has a submenu\n    <panel-list slot=\"submenu\" id=\"example-submenu\">\n      <panel-item>I'm a submenu item!</panel-item>\n      <panel-item>I'm also a submenu item!</panel-item>\n    </panel-list>\n  </panel-item>\n</panel-list>\n"
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p, {
      children: "As of February 2024 submenus are only in use in Firefox View and support for nesting beyond one submenu may be limited."
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2, {
      id: "args-table",
      children: "Args Table"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.ArgTypes, {
      of: "panel-list"
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = Object.assign({}, (0,_home_runner_work_firefox_desktop_components_firefox_desktop_components_firefox_browser_components_storybook_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components);
  return MDXLayout ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(MDXLayout, {
    ...props,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
/* ========= */
const __page = () => {
  throw new Error("Docs-only story");
};
__page.parameters = {
  docsOnly: true
};
const componentMeta = {
  title: 'UI Widgets/Panel List/README',
  parameters: {
    previewTabs: {
      canvas: {
        hidden: true
      }
    },
    viewMode: "docs"
  },
  tags: ['stories-mdx'],
  includeStories: ["__page"]
};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = {
  ...(componentMeta.parameters.docs || {}),
  page: MDXContent
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (componentMeta);

/***/ })

}]);
//# sourceMappingURL=panel-list-README-stories-md.1a2f5c46.iframe.bundle.js.map