"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[665],{

/***/ 70591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CopyPasswordButton": () => (/* binding */ CopyPasswordButton),
/* harmony export */   "CopyUsernameButton": () => (/* binding */ CopyUsernameButton),
/* harmony export */   "CreateLoginButton": () => (/* binding */ CreateLoginButton),
/* harmony export */   "DeleteButton": () => (/* binding */ DeleteButton),
/* harmony export */   "EditButton": () => (/* binding */ EditButton),
/* harmony export */   "LoginCommandButton": () => (/* binding */ LoginCommandButton),
/* harmony export */   "stylesTemplate": () => (/* binding */ stylesTemplate)
/* harmony export */ });
/* harmony import */ var browser_components_aboutlogins_content_components_login_command_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27628);
/* harmony import */ var toolkit_themes_linux_global_in_content_common_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46565);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45717);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73689);


/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/*
 * Note: For now, to display the tooltip for a <login-command-button> you need to
 * use data-l10n-id attribute instead of the l10nId attribute in the tag.
 * Bug 1844869 will make an attempt to fix this.
 */



const stylesTemplate = () => chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<link
      rel="stylesheet"
      href="${toolkit_themes_linux_global_in_content_common_css__WEBPACK_IMPORTED_MODULE_1__}"
    />
    <link
      rel="stylesheet"
      href="${browser_components_aboutlogins_content_components_login_command_button_css__WEBPACK_IMPORTED_MODULE_0__}"
    />`;
const LoginCommandButton = ({
  onClick,
  l10nId,
  icon,
  variant,
  disabled,
  buttonText
}) => chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`<button
    class=${variant}
    data-l10n-id=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(l10nId)}
    ?disabled=${disabled}
    @click=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(onClick)}
  >
    <img src=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(icon)} role="presentation" />

    <span data-l10n-id=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(buttonText)}></span>
  </button>`;
class CreateLoginButton extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.MozLitElement {
  static get properties() {
    return {
      disabled: {
        type: Boolean,
        reflect: true
      }
    };
  }
  constructor() {
    super();
    this.disabled = false;
  }
  render() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`
      ${stylesTemplate()}
      ${LoginCommandButton({
      l10nId: "create-login-button",
      variant: "icon-button",
      icon: "chrome://global/skin/icons/plus.svg",
      disabled: this.disabled
    })}
    `;
  }
}
class EditButton extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.MozLitElement {
  static get properties() {
    return {
      disabled: {
        type: Boolean,
        reflect: true
      }
    };
  }
  constructor() {
    super();
    this.disabled = false;
  }
  render() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`
      ${stylesTemplate()}
      ${LoginCommandButton({
      buttonText: "login-item-edit-button",
      variant: "ghost-button",
      icon: "chrome://global/skin/icons/edit.svg",
      disabled: this.disabled
    })}
    `;
  }
}
class DeleteButton extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.MozLitElement {
  static get properties() {
    return {
      disabled: {
        type: Boolean,
        reflect: true
      }
    };
  }
  constructor() {
    super();
    this.disabled = false;
  }
  render() {
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html` ${stylesTemplate()}
    ${LoginCommandButton({
      buttonText: "about-logins-login-item-remove-button",
      variant: "ghost-button",
      icon: "chrome://global/skin/icons/delete.svg",
      disabled: this.disabled
    })}`;
  }
}
class CopyUsernameButton extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.MozLitElement {
  static get properties() {
    return {
      copiedText: {
        type: Boolean,
        reflect: true
      },
      disabled: {
        type: Boolean,
        reflect: true
      }
    };
  }
  constructor() {
    super();
    this.copiedText = false;
    this.disabled = false;
  }
  render() {
    this.className = this.copiedText ? "copied-button" : "copy-button";
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html` ${stylesTemplate()}
    ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.when)(this.copiedText, () => chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`${LoginCommandButton({
      buttonText: "login-item-copied-username-button-text",
      icon: "chrome://global/skin/icons/check.svg",
      disabled: this.disabled
    })}`, () => chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`${LoginCommandButton({
      variant: "text-button",
      buttonText: "login-item-copy-username-button-text",
      disabled: this.disabled
    })}`)}`;
  }
}
class CopyPasswordButton extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.MozLitElement {
  static get properties() {
    return {
      copiedText: {
        type: Boolean,
        reflect: true
      },
      disabled: {
        type: Boolean,
        reflect: true
      }
    };
  }
  constructor() {
    super();
    this.copiedText = false;
    this.disabled = false;
  }
  render() {
    this.className = this.copiedText ? "copied-button" : "copy-button";
    return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html` ${stylesTemplate()}
    ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.when)(this.copiedText, () => chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`${LoginCommandButton({
      buttonText: "login-item-copied-password-button-text",
      icon: "chrome://global/skin/icons/check.svg",
      disabled: this.disabled
    })}`, () => chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html`${LoginCommandButton({
      variant: "text-button",
      buttonText: "login-item-copy-password-button-text",
      disabled: this.disabled
    })}`)}`;
  }
}
customElements.define("copy-password-button", CopyPasswordButton);
customElements.define("copy-username-button", CopyUsernameButton);
customElements.define("delete-button", DeleteButton);
customElements.define("edit-button", EditButton);
customElements.define("create-login-button", CreateLoginButton);

/***/ }),

/***/ 58939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisabledButton": () => (/* binding */ DisabledButton),
/* harmony export */   "WorkingButton": () => (/* binding */ WorkingButton),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45717);
/* harmony import */ var _aboutlogins_content_components_login_command_button_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70591);
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


// Imported for side-effects.

var BUTTON_TYPES = {
  Edit: "login-item-edit-button",
  "Copy Username": "login-item-copy-username-button-text",
  "Copy Password": "login-item-copy-password-button-text",
  Remove: "about-logins-login-item-remove-button"
};
var BUTTON_ICONS = {
  Edit: "chrome://global/skin/icons/edit.svg",
  "Copy Username": "chrome://global/skin/icons/edit-copy.svg",
  "Copy Password": "chrome://global/skin/icons/edit-copy.svg",
  Remove: "chrome://global/skin/icons/delete.svg"
};
var BUTTON_VARIANT = {
  Regular: "",
  Danger: "primary danger-button",
  Primary: "primary",
  Icon: "ghost-button icon-button"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/Credential Management/Command Button",
  component: "login-command-button",
  argTypes: {
    l10nId: {
      options: Object.keys(BUTTON_TYPES),
      mapping: BUTTON_TYPES,
      control: {
        type: "select"
      },
      defaultValue: "Edit"
    },
    icon: {
      options: Object.keys(BUTTON_ICONS),
      mapping: BUTTON_ICONS,
      control: {
        type: "select"
      },
      defaultValue: "Edit"
    },
    variant: {
      options: Object.keys(BUTTON_VARIANT),
      mapping: BUTTON_VARIANT,
      control: {
        type: "select"
      },
      defaultValue: "Regular"
    }
  }
});
window.MozXULElement.insertFTLIfNeeded("browser/aboutLogins.ftl");
var Template = function Template(_ref) {
  var onClick = _ref.onClick,
    l10nId = _ref.l10nId,
    icon = _ref.icon,
    variant = _ref.variant,
    disabled = _ref.disabled,
    tooltip = _ref.tooltip;
  return (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    <login-command-button\n      .onClick=", "\n      .l10nId=", "\n      .icon=", "\n      .variant=", "\n      .disabled=", "\n      .tooltip=", "\n    >\n    </login-command-button>\n  "])), onClick, l10nId, icon, variant, disabled, tooltip);
};
var WorkingButton = Template.bind({});
WorkingButton.args = {
  onClick: function onClick() {
    return alert("I work Woohoo!!");
  },
  l10nId: "login-item-edit-button",
  icon: "chrome://global/skin/icons/edit.svg",
  variant: "",
  disabled: false,
  tooltip: "Lorem ipsum dolor"
};
var DisabledButton = Template.bind({});
DisabledButton.args = {
  onClick: function onClick() {
    return alert("I shouldn't be working...");
  },
  l10nId: "login-item-edit-button",
  icon: "chrome://global/skin/icons/edit.svg",
  variant: "",
  disabled: true,
  tooltip: "Lorem ipsum dolor"
};

/***/ }),

/***/ 27628:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "login-command-button.a512306c0f2503350fb5.css";

/***/ }),

/***/ 46565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "common.d2c1b3186a09c5fd1fdd.css";

/***/ })

}]);
//# sourceMappingURL=login-command-button-stories.6ca9d2fb.iframe.bundle.js.map