"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1592],{

/***/ 56118:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-fieldset.2d45d3feec4493793c77.css";

/***/ }),

/***/ 71592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MozFieldset: () => (/* binding */ MozFieldset)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_fieldset_moz_fieldset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56118);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/// <reference path="./moz-fieldset.tagmap.d.ts" />




/**
 * Functions to wrap a string in a heading.
 *
 * @type {Record<number, (label: string) => ReturnType<typeof html>>}
 */
const HEADING_LEVEL_TEMPLATES = {
  1: label => (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<h1 class="text-box-trim-start">${label}</h1>`,
  2: label => (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<h2 class="text-box-trim-start">${label}</h2>`,
  3: label => (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<h3 class="text-box-trim-start">${label}</h3>`,
  4: label => (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<h4>${label}</h4>`,
  5: label => (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<h5>${label}</h5>`,
  6: label => (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<h6>${label}</h6>`
};

/**
 * Fieldset wrapper to lay out form inputs consistently.
 *
 * @tagname moz-fieldset
 * @property {string} label - The label for the fieldset's legend.
 * @property {string} description - The description for the fieldset.
 * @property {string} supportPage - Name of the SUMO support page to link to.
 * @property {number} headingLevel - Render the legend in a heading of this level.
 * @property {boolean} disabled - Whether the fieldset and its children are disabled.
 * @property {string} iconSrc - The src for an optional icon.
 * @property {"beta" | "new" | undefined} badge - Include a badge of this type with matching text.
 */
class MozFieldset extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    label: {
      type: String,
      fluent: true
    },
    description: {
      type: String,
      fluent: true
    },
    supportPage: {
      type: String,
      attribute: "support-page"
    },
    ariaLabel: {
      type: String,
      fluent: true,
      mapped: true
    },
    ariaOrientation: {
      type: String,
      mapped: true
    },
    role: {
      type: String,
      mapped: true
    },
    inputsRole: {
      type: String,
      state: true
    },
    headingLevel: {
      type: Number
    },
    disabled: {
      type: Boolean,
      reflect: true
    },
    iconSrc: {
      type: String
    },
    badge: {
      type: String
    }
  };
  constructor() {
    super();

    /** @type {number} */
    this.headingLevel = -1;

    /** @type {boolean} */
    this.disabled = false;

    /** @type {string} */
    this.iconSrc = "";

    /**@type {string | undefined} */
    this.label = undefined;

    /**@type {string | undefined} */
    this.description = undefined;

    /**@type {string | undefined} */
    this.supportPage = undefined;

    /**@type {"beta" | "new" | undefined} */
    this.badge = undefined;

    /**
     * Role of the inner fieldset element.
     *
     * @type {ARIAMixin['role']}
     */
    this.role = null;

    /**
     * When set, the #inputs container receives this role plus the accessible
     * name, description, orientation, and disabled state, instead of the inner
     * fieldset.
     *
     * @type {string | undefined}
     */
    this.inputsRole = undefined;
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("disabled")) {
      this.#updateChildDisabledState();
    }
    if (changedProperties.has("headingLevel") || changedProperties.has("label")) {
      this.toggleAttribute("hasheading", this.hasHeading);
    }
  }

  /**
   * Returns true when the fieldset should render its label as a heading element.
   *
   * @returns {boolean}
   */
  get hasHeading() {
    return !!this.label && !!HEADING_LEVEL_TEMPLATES[this.headingLevel];
  }
  #updateChildDisabledState() {
    const formControls = [...this.querySelectorAll("*")].filter(element => "disabled" in element || "parentDisabled" in element);
    formControls.forEach(control => {
      if ("parentDisabled" in control) {
        control.parentDisabled = this.disabled;
      }
      if (this.disabled) {
        control.setAttribute("disabled", "");
      } else {
        control.removeAttribute("disabled");
      }
    });
  }
  descriptionTemplate() {
    if (this.description) {
      return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div class="description">
        <span id="description">${this.description}</span>
        ${this.supportPageTemplate()}
      </div>`;
    }
    return "";
  }
  supportPageTemplate() {
    if (this.supportPage) {
      return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<a
        is="moz-support-link"
        support-page=${this.supportPage}
        part="support-link"
      ></a>`;
    }
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<slot name="support-link"></slot>`;
  }
  legendTemplate() {
    let label = HEADING_LEVEL_TEMPLATES[this.headingLevel]?.(this.label) || this.label;
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<legend id="label" part="label">
      ${this.iconTemplate()}${label}${this.badgeTemplate()}
    </legend>`;
  }
  iconTemplate() {
    if (!this.iconSrc) {
      return "";
    }
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<img
      src=${this.iconSrc}
      role="presentation"
      class=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.classMap)({
      icon: true,
      "heading-xlarge": this.headingLevel == 1,
      "heading-large": this.headingLevel == 2,
      "heading-medium": this.headingLevel == 3,
      "text-box-trim-start": this.headingLevel >= 1 && this.headingLevel <= 3
    })}
    />`;
  }
  badgeTemplate() {
    if (!this.badge) {
      return "";
    }
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<moz-badge type=${this.badge}></moz-badge>`;
  }
  render() {
    const hasInputsRole = Boolean(this.inputsRole);
    const descriptionId = this.description ? "description" : undefined;
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_fieldset_moz_fieldset_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <fieldset
        ?disabled=${this.disabled}
        role=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(hasInputsRole ? "presentation" : this.role)}
        aria-label=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(!hasInputsRole ? this.ariaLabel : undefined)}
        aria-describedby=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(!hasInputsRole ? descriptionId : undefined)}
        aria-orientation=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(!hasInputsRole ? this.ariaOrientation : undefined)}
      >
        ${this.label ? this.legendTemplate() : ""}
        ${!this.description ? this.supportPageTemplate() : ""}
        ${this.descriptionTemplate()}
        <div
          id="inputs"
          part="inputs"
          role=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.inputsRole)}
          aria-labelledby=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(hasInputsRole && this.label ? "label" : undefined)}
          aria-label=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(hasInputsRole && !this.label ? this.ariaLabel : undefined)}
          aria-describedby=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(hasInputsRole ? descriptionId : undefined)}
          aria-orientation=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(hasInputsRole ? this.ariaOrientation : undefined)}
          aria-disabled=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(hasInputsRole && this.disabled ? "true" : undefined)}
        >
          <slot></slot>
        </div>
      </fieldset>
    `;
  }
}
customElements.define("moz-fieldset", MozFieldset);

/***/ })

}]);
//# sourceMappingURL=1592.862a240f.iframe.bundle.js.map