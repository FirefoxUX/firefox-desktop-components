"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[3833,7447],{

/***/ 9583:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "panel-item.99199edbdbb0168dfb20.css";

/***/ }),

/***/ 27534:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "panel-list.3fbb51a4387dd548cee2.css";

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
      this.initializePopover();
    }

    // Let the XUL panel handle the positioning and alignment of the
    // panel-list. Submenus also don't support popover as they need
    // to be anchored to the parent panel-list.
    supportsPopover() {
      return !this.parentIsXULPanel() && !this.lastAnchorNode?.hasSubmenu && this.getAttribute("slot") !== "submenu";
    }
    initializePopover() {
      if (this.supportsPopover() && !this.hasAttribute("popover")) {
        this.setAttribute("popover", "manual");
      }
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

      // Bug 2010864 - We need to set `open` to true before calling this.onShow()
      // when the panel-list supports popover, otherwise the panel
      // height and width will be 0 and will be positioned incorrectly
      // when calling setAlign.
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
        const offsetParentIsBody = this.supportsPopover() || this.offsetParent === document?.body || !this.offsetParent;
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
        case "scroll":
        case "resize":
          // Popover panels live in the top layer and remain visible during scroll,
          // so we don't close them. Note: This means the panel may become visually
          // disconnected from its anchor after scrolling.
          if (inPanelList || this.supportsPopover()) {
            break;
          }
          this.hide();
          break;
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

      // If the panel was hidden during async alignment, bail out.
      if (!this.open) {
        return;
      }

      // Call showPopover() after positioning is set up
      if (this.supportsPopover()) {
        try {
          this.showPopover();
        } catch (ex) {
          console.error("Failed to show popover:", ex);
        }
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
      if (this.supportsPopover()) {
        try {
          this.hidePopover();
        } catch (ex) {
          // hidePopover may throw if the popover was already hidden or was never shown
        }
      }
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
      this.label.setAttribute("part", "label");
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

/***/ 45042:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "smartwindow-panel-list.6d46f39d614770aec681.css";

/***/ }),

/***/ 55362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SmartwindowPanelList: () => (/* binding */ SmartwindowPanelList)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_smartwindow_panel_list_smartwindow_panel_list_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45042);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);
/* harmony import */ var chrome_global_content_elements_panel_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43833);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



// eslint-disable-next-line import/no-unassigned-import


/**
 * A generic panel list component for displaying grouped items in a popup.
 *
 * This component is agnostic to the data it displays - consumers control
 * all logic including filtering, truncation, and special item handling.
 *
 * @typedef {{id: string, label: string, icon?: string, l10nId?: string}} ListItem
 * @typedef {{items: ListItem[], headerL10nId?: string}} ItemGroup
 * @property {ItemGroup[]} groups - Grouped list items to display
 * @property {string} placeholderL10nId - Fluent ID for empty state message
 * @property {object} anchor - Positioning anchor {left, top, width, height}
 */
class SmartwindowPanelList extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static shadowRootOptions = {
    ...chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement.shadowRootOptions,
    delegatesFocus: true
  };
  static properties = {
    groups: {
      type: Array
    },
    anchor: {
      type: Object
    },
    placeholderL10nId: {
      type: String
    },
    alwaysOpen: {
      type: Boolean
    }
  };
  #panelList = null;
  #anchorElement = null;
  constructor() {
    super();
    this.groups = [];
    this.anchor = null;
    this.placeholderL10nId = "";
    this.alwaysOpen = false;
  }
  firstUpdated() {
    this.#panelList = this.shadowRoot.querySelector("panel-list");
    if (this.alwaysOpen) {
      this.show();
    }
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("anchor")) {
      // If anchor is an element use it directly,
      // otherwise we can use the positioned span.
      this.#anchorElement = this.anchor instanceof Element ? this.anchor : this.renderRoot.querySelector(".smartwindow-panel-list-anchor");
    }
  }
  async show() {
    await this.updateComplete;
    this.#panelList.show(null, this.#anchorElement);
  }
  async hide() {
    await this.updateComplete;
    this.#panelList.hide();
  }
  async toggle() {
    await this.updateComplete;
    this.#panelList.toggle(null, this.#anchorElement);
  }
  handlePanelClick(e) {
    const panelItem = e.target.closest("panel-item");
    if (panelItem && !panelItem.classList.contains("panel-section-header")) {
      const event = new CustomEvent("item-selected", {
        detail: {
          id: panelItem.itemId,
          label: panelItem.itemLabel || panelItem.textContent.trim(),
          icon: panelItem.itemIcon
        },
        bubbles: true,
        composed: true,
        cancelable: true
      });
      this.dispatchEvent(event);
    }
  }
  handleKeyDown(e) {
    this.dispatchEvent(new CustomEvent("panel-keydown", {
      detail: {
        originalEvent: e
      },
      bubbles: true,
      composed: true
    }));
  }

  // -------------------------
  // Render helpers
  // -------------------------

  #isEmpty() {
    return !this.groups.length || this.groups.every(g => !g.items?.length);
  }
  #renderAnchor() {
    if (!this.anchor) {
      return null;
    }
    const rect = this.getBoundingClientRect();
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span
      class="smartwindow-panel-list-anchor"
      style=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.styleMap)({
      "--anchor-left": `${this.anchor.left - rect.left}px`,
      "--anchor-top": `${this.anchor.top - rect.top}px`,
      "--anchor-width": `${this.anchor.width}px`,
      "--anchor-height": `${this.anchor.height}px`
    })}
    ></span>`;
  }
  #renderEmptyState() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<panel-item
      disabled
      role="presentation"
      class="panel-section-header"
      data-l10n-id=${this.placeholderL10nId}
    ></panel-item>`;
  }
  #renderGroupHeader(headerL10nId) {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<panel-item
      disabled
      role="presentation"
      class="panel-section-header"
      data-l10n-id=${headerL10nId}
    ></panel-item>`;
  }
  #computeItemStyles(item) {
    const styles = {};
    if (item.icon) {
      styles["--panel-item-icon-url"] = `url(${item.icon})`;
    }
    return styles;
  }
  #renderItem(item) {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<panel-item
      .itemId=${item.id}
      .itemLabel=${item.label}
      icon=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(item.icon ? "true" : undefined)}
      data-l10n-id=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(item.l10nId)}
      style=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.styleMap)(this.#computeItemStyles(item))}
    >
      ${item.l10nId ? "" : item.label}
    </panel-item>`;
  }
  #renderGroup(group) {
    if (!group.items?.length) {
      return null;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      ${group.headerL10nId ? this.#renderGroupHeader(group.headerL10nId) : null}
      ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.repeat)(group.items, item => item.id, item => this.#renderItem(item))}
    `;
  }
  #renderGroups() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.repeat)(this.groups, (_group, index) => index, group => this.#renderGroup(group));
  }
  render() {
    const isEmpty = this.#isEmpty();
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_smartwindow_panel_list_smartwindow_panel_list_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      ${this.#renderAnchor()}
      <panel-list
        @click=${this.handlePanelClick}
        @keydown=${this.handleKeyDown}
      >
        ${isEmpty ? this.#renderEmptyState() : this.#renderGroups()}
      </panel-list>
    `;
  }
}
customElements.define("smartwindow-panel-list", SmartwindowPanelList);

/***/ }),

/***/ 98231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Empty: () => (/* binding */ Empty),
/* harmony export */   MultipleGroups: () => (/* binding */ MultipleGroups),
/* harmony export */   SingleGroup: () => (/* binding */ SingleGroup),
/* harmony export */   SingleTab: () => (/* binding */ SingleTab),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var chrome_browser_content_aiwindow_components_smartwindow_panel_list_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55362);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/AI Window/Smartwindow Panel List",
  component: "smartwindow-panel-list",
  argTypes: {
    groups: {
      control: "object"
    },
    placeholderL10nId: {
      control: "text"
    }
  },
  decorators: [],
  parameters: {
    fluent: `
smartbar-mentions-list-no-results-label = No results found
smartbar-mentions-single-tab-label = Recent Sites
smartbar-mentions-list-open-tabs-label = Tabs
smartbar-mentions-list-previously-visited-pages-label = Previously visited
    `
  }
});
const Template = ({
  groups,
  placeholderL10nId
}) => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <div style="width: 300px; height: 400px; position: relative;">
    <smartwindow-panel-list
      .groups=${groups}
      .placeholderL10nId=${placeholderL10nId}
      .anchor=${{
  left: 20,
  top: 20,
  width: 100,
  height: 30
}}
      .alwaysOpen=${true}
    ></smartwindow-panel-list>
  </div>
`;
const Empty = Template.bind({});
Empty.args = {
  groups: [],
  placeholderL10nId: "smartbar-mentions-list-no-results-label"
};
const SingleTab = Template.bind({});
SingleTab.args = {
  groups: [{
    headerL10nId: "smartbar-mentions-single-tab-label",
    items: [{
      id: "current-tab",
      label: "Smart window chat",
      icon: "chrome://branding/content/icon16.png"
    }, {
      id: "closed1",
      label: "MDN Web Docs",
      icon: "chrome://branding/content/icon16.png"
    }, {
      id: "closed2",
      label: "Wikipedia",
      icon: "chrome://branding/content/icon16.png"
    }, {
      id: "closed3",
      label: "GitHub",
      icon: "chrome://branding/content/icon16.png"
    }]
  }],
  placeholderL10nId: ""
};
const SingleGroup = Template.bind({});
SingleGroup.args = {
  groups: [{
    headerL10nId: "smartbar-mentions-list-open-tabs-label",
    items: [{
      id: "tab1",
      label: "Mozilla Firefox",
      icon: "chrome://branding/content/icon16.png"
    }, {
      id: "tab2",
      label: "GitHub",
      icon: "chrome://branding/content/icon16.png"
    }, {
      id: "tab3",
      label: "Stack Overflow",
      icon: "chrome://branding/content/icon16.png"
    }]
  }],
  placeholderL10nId: ""
};
const MultipleGroups = Template.bind({});
MultipleGroups.args = {
  groups: [{
    headerL10nId: "smartbar-mentions-list-open-tabs-label",
    items: [{
      id: "tab1",
      label: "Mozilla Firefox",
      icon: "chrome://branding/content/icon16.png"
    }, {
      id: "tab2",
      label: "GitHub",
      icon: "chrome://branding/content/icon16.png"
    }, {
      id: "tab3",
      label: "Stack Overflow",
      icon: "chrome://branding/content/icon16.png"
    }]
  }, {
    headerL10nId: "smartbar-mentions-list-previously-visited-pages-label",
    items: [{
      id: "closed1",
      label: "MDN Web Docs",
      icon: "chrome://branding/content/icon16.png"
    }, {
      id: "closed2",
      label: "Wikipedia",
      icon: "chrome://branding/content/icon16.png"
    }]
  }],
  placeholderL10nId: ""
};

/***/ })

}]);
//# sourceMappingURL=components-smartwindow-panel-list-smartwindow-panel-list-stories.458d1e7f.iframe.bundle.js.map