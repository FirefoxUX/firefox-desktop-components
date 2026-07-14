"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[694,7132,8946],{

/***/ 14439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Compact: () => (/* binding */ Compact),
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   WithoutVisibleLabels: () => (/* binding */ WithoutVisibleLabels),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var _theme_picker_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88946);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "UI Widgets/Theme Picker",
  component: "theme-picker",
  argTypes: {
    layout: {
      options: ["full", "compact"],
      control: {
        type: "select"
      }
    }
  }
});
const Template = ({
  layout,
  showLabels
}) => (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <theme-picker layout=${layout} .showLabels=${showLabels}></theme-picker>
`;
const Default = Template.bind({});
Default.args = {
  layout: "full",
  showLabels: true
};
const Compact = Template.bind({});
Compact.args = {
  ...Default.args,
  showLabels: false,
  layout: "compact"
};
const WithoutVisibleLabels = Template.bind({});
WithoutVisibleLabels.args = {
  ...Default.args,
  showLabels: false
};

/***/ }),

/***/ 50694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemePickerStorybookController: () => (/* binding */ ThemePickerStorybookController)
/* harmony export */ });
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @import { ReactiveController } from "chrome://global/content/vendor/lit.all.mjs";
 * @import { ThemePicker, ThemechangeEventDetail } from "./theme-picker.mjs";
 */

const DEFAULT_THEME_ID = "default-theme@mozilla.org";
const COMPACT_MODE_THEMES = ["default-theme@mozilla.org", "nova-ash@mozilla.org", "nova-sun@mozilla.org", "nova-flare@mozilla.org", "nova-lagoon@mozilla.org", "nova-pine@mozilla.org"];

// TODO: Bug 2053217 Consider moving this out to a separate JSON file
const FIREFOX_THEMES_LIST = [{
  id: "default-theme@mozilla.org",
  isBuiltIn: true,
  themePickerColors: {
    light: {
      type: "gradient",
      value: "linear-gradient(96deg, #EADDFF 39.84%, #FFDBC5 101.72%)"
    },
    dark: {
      type: "gradient",
      value: "linear-gradient(96deg, #3E315F 39.84%, #701c07 101.72%)"
    }
  }
}, {
  id: "nova-sun@mozilla.org",
  themePickerColors: {
    light: {
      type: "gradient",
      value: "linear-gradient(90deg, #F9F5E6 0%, #FDE8B5 60%, #FBCC77 100%)"
    },
    dark: {
      type: "gradient",
      value: "linear-gradient(90deg, #5F3100 0%, #3E1D00 60%, #270F00 100%)"
    }
  }
}, {
  id: "nova-spark@mozilla.org",
  themePickerColors: {
    light: {
      type: "gradient",
      value: "linear-gradient(135deg, #F8F0EC 0%, #FFDBC5 60%, #FEBD99 100%)"
    },
    dark: {
      type: "gradient",
      value: "linear-gradient(135deg, #701C07 0%, #461209 60%, #250E0B 100%)"
    }
  }
}, {
  id: "nova-flame@mozilla.org",
  themePickerColors: {
    light: {
      type: "gradient",
      value: "linear-gradient(135deg, #FCF2F3 0%, #FFD9DF 60%, #FFB6BF 100%)"
    },
    dark: {
      type: "gradient",
      value: "linear-gradient(135deg, #69172D 0%, #42121F 60%, #211014 100%)"
    }
  }
}, {
  id: "nova-flare@mozilla.org",
  themePickerColors: {
    light: {
      type: "gradient",
      value: "linear-gradient(135deg, #F7EFF3 0%, #FFD5EE 60%, #FFB0E2 100%)"
    },
    dark: {
      type: "gradient",
      value: "linear-gradient(135deg, #5F1854 0%, #3C1334 60%, #1E111B 100%)"
    }
  }
}, {
  id: "nova-lavender@mozilla.org",
  themePickerColors: {
    light: {
      type: "gradient",
      value: "linear-gradient(135deg, #FAEBFF 0%, #F6D7FF 60%, #E8B7FF 100%)"
    },
    dark: {
      type: "gradient",
      value: "linear-gradient(135deg, #4F216B 0%, #311842 60%, #1A1220 100%)"
    }
  }
}, {
  id: "nova-dusk@mozilla.org",
  themePickerColors: {
    light: {
      type: "gradient",
      value: "linear-gradient(135deg, #F5ECFF 0%, #EADDFF 60%, #D4C1FF 100%)"
    },
    dark: {
      type: "gradient",
      value: "linear-gradient(135deg, #3E2976 0%, #271C48 60%, #161423 100%)"
    }
  }
}, {
  id: "nova-lagoon@mozilla.org",
  themePickerColors: {
    light: {
      type: "gradient",
      value: "linear-gradient(135deg, #ECF3F8 0%, #C5EAFE 60%, #A2D3FF 100%)"
    },
    dark: {
      type: "gradient",
      value: "linear-gradient(135deg, #23327B 0%, #17214C 60%, #111524 100%)"
    }
  }
}, {
  id: "nova-pine@mozilla.org",
  themePickerColors: {
    light: {
      type: "gradient",
      value: "linear-gradient(135deg, #ECF4F1 0%, #C4F1E0 60%, #90E3C6 100%)"
    },
    dark: {
      type: "gradient",
      value: "linear-gradient(135deg, #004933 0%, #003020 60%, #001E12 100%)"
    }
  }
}, {
  id: "nova-tide@mozilla.org",
  themePickerColors: {
    light: {
      type: "gradient",
      value: "linear-gradient(135deg, #EBF4F5 0%, #C3EEF8 60%, #8FDDF0 100%)"
    },
    dark: {
      type: "gradient",
      value: "linear-gradient(135deg, #034554 0%, #002D38 60%, #011C23 100%)"
    }
  }
}, {
  id: "nova-ash@mozilla.org",
  themePickerColors: {
    light: {
      type: "gradient",
      value: "linear-gradient(90deg, #FCFBFF 0%, #EFEDF2 60%, #D6D5DA 100%)"
    },
    dark: {
      type: "gradient",
      value: "linear-gradient(90deg, #3F3E42 0%, #252428 60%, #171519 100%)"
    }
  }
}, {
  id: "nova-smoke@mozilla.org",
  themePickerColors: {
    light: {
      type: "gradient",
      value: "linear-gradient(135deg, #FFF9F6 0%, #FBF4EE 60%, #E3DBD7 100%)"
    },
    dark: {
      type: "gradient",
      value: "linear-gradient(135deg, #3B3532 0%, #2F2926 60%, #201B18 100%)"
    }
  }
}];

/**
 * @implements {ReactiveController}
 */
class ThemePickerStorybookController {
  /**
   * @param {ThemePicker} host
   */
  constructor(host) {
    this.host = host;
    this.host.addController(this);
    this.host.addEventListener("themechange", /** @param {{ detail: ThemechangeEventDetail }} e */
    e => {
      switch (e.detail.property) {
        case "appearance":
          this.host.appearance = String(e.detail.value);
          break;
        case "theme":
          this.host.activeThemeId = String(e.detail.value);
          break;
        case "nativeTheme":
          this.host.nativeTheme = Boolean(e.detail.value);
          break;
      }
    });
  }
  updateThemes() {
    let themes = FIREFOX_THEMES_LIST;
    if (this.host.layout === "compact") {
      themes = FIREFOX_THEMES_LIST.filter(theme => COMPACT_MODE_THEMES.includes(theme.id));
    }
    this.host.themes = themes;
  }
  hostConnected() {
    this.host.activeThemeId = DEFAULT_THEME_ID;
    this.host.appearance = "device";
    this.host.nativeTheme = false;
    this.updateThemes();
  }
}

/***/ }),

/***/ 65404:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "theme-picker.9bb0736a4d6f0d8f6d9c.css";

/***/ }),

/***/ 88946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemePicker: () => (/* binding */ ThemePicker)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_theme_picker_theme_picker_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65404);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);
/* harmony import */ var chrome_global_content_elements_theme_picker_storybook_controller_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50694);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

window.MozXULElement?.insertFTLIfNeeded("locales-preview/theme-picker.ftl");



const THEME_L10N_IDS = {
  "default-theme@mozilla.org": "theme-picker-default",
  "nova-sun@mozilla.org": "theme-picker-sun",
  "nova-spark@mozilla.org": "theme-picker-spark",
  "nova-flame@mozilla.org": "theme-picker-flame",
  "nova-flare@mozilla.org": "theme-picker-flare",
  "nova-lavender@mozilla.org": "theme-picker-lavender",
  "nova-dusk@mozilla.org": "theme-picker-dusk",
  "nova-lagoon@mozilla.org": "theme-picker-lagoon",
  "nova-pine@mozilla.org": "theme-picker-pine",
  "nova-tide@mozilla.org": "theme-picker-tide",
  "nova-ash@mozilla.org": "theme-picker-ash",
  "nova-smoke@mozilla.org": "theme-picker-smoke"
};
const XPCOMUtils = ChromeUtils.importESModule("resource://gre/modules/XPCOMUtils.sys.mjs").XPCOMUtils;
const lazy = XPCOMUtils.declareLazy({
  ThemePickerDirectController: () => ChromeUtils.importESModule("chrome://global/content/elements/theme-picker-direct-controller.mjs", {
    global: "current"
  }).ThemePickerDirectController
});
const DEFAULT_THEME_ID = "default-theme@mozilla.org";

/**
 * @import { ReactiveController } from "chrome://global/content/vendor/lit.all.mjs";
 */

/**
 * @typedef {object} ThemePickerTheme
 * @property {string} id
 * @property {{ light: { type: string, value: string }, dark: { type: string, value: string } } | null} themePickerColors
 */

/**
 * @typedef {"appearance"|"theme"|"nativeTheme"} ThemechangeProperty
 * @typedef {{ property: ThemechangeProperty, value: string|boolean }} ThemechangeEventDetail
 */

/**
 * @typedef {CustomEvent & { detail: ThemechangeEventDetail }} ThemechangeEvent
 */

/**
 * A component for selecting and managing Firefox themes. Displays theme color
 * swatches and optionally appearance mode controls (light/dark/device).
 *
 * @tagname theme-picker
 * @property {string} appearance
 *   Current appearance mode: "light", "dark", or "device"
 * @property {string} activeThemeId - The addon ID of the currently active theme
 * @property {boolean} nativeTheme - Whether native theme styling is enabled
 * @property {ThemePickerTheme[]} themes
 *   Array of theme objects with IDs and picker colors
 * @property {string} layout
 *   Display layout: "full" (with mode selector and native theme checkbox) or
 *   "compact" (color swatches only)
 * @property {boolean} showLabels
 *   Whether to show visible text labels outside the theme swatches. When false,
 *   aria-labels are provided for accessibility.
 * @fires themechange - Fired when appearance, theme, or nativeTheme changes.
 * Detail contains {property, value}
 */
class ThemePicker extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    appearance: {
      type: String
    },
    activeThemeId: {
      type: String
    },
    nativeTheme: {
      type: Boolean
    },
    themes: {
      type: Array
    },
    layout: {
      type: String
    },
    showLabels: {
      type: Boolean
    }
  };
  constructor() {
    super();
    this.appearance = "device";
    this.activeThemeId = DEFAULT_THEME_ID;
    /** @type {ThemePickerTheme[]} */
    this.themes = [];
    this.nativeTheme = false;
    this.showLabels = true;
    this.controller = ThemePicker.createController(this);
    this.layout = "full";
  }

  /**
   * Builds the ReactiveController backing this picker: the lightweight
   * storybook controller when platform APIs are unavailable (e.g. Storybook),
   * and otherwise the direct controller that talks to AddonManager and prefs.
   * Overridable so tests can exercise a specific controller.
   *
   * @param {ThemePicker} host
   * @returns {ReactiveController}
   */
  static createController(host) {
    return typeof Services === "undefined" ? new chrome_global_content_elements_theme_picker_storybook_controller_mjs__WEBPACK_IMPORTED_MODULE_3__.ThemePickerStorybookController(host) : new lazy.ThemePickerDirectController(host);
  }

  /**
   * @param {ThemechangeProperty} property
   * @param {string|boolean} value
   */
  dispatchChange(property, value) {
    this.dispatchEvent(new CustomEvent("themechange", {
      bubbles: true,
      composed: true,
      detail: {
        property,
        value
      }
    }));
  }

  /**
   * @param {Event & { target: { value: string } }} e
   */
  appearanceChange(e) {
    this.dispatchChange("appearance", e.target.value);
  }

  /**
   * @param {Event & { target: { value: string } }} e
   */
  themeChange(e) {
    this.dispatchChange("theme", e.target.value);
  }

  /**
   * @param {Event & { target: { checked: boolean } }} e
   */
  nativeThemeChange(e) {
    this.dispatchChange("nativeTheme", e.target.checked);
  }

  /**
   * @param {ThemePickerTheme} theme
   */
  themeStyle(theme) {
    let colors = this.appearance == "dark" ? theme.themePickerColors.dark : theme.themePickerColors.light;
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.styleMap)({
      [colors.type == "gradient" ? "backgroundImage" : "backgroundColor"]: colors.value
    });
  }
  appearanceChooserTemplate() {
    if (this.layout == "compact") {
      return "";
    }
    const icons = {
      // eslint-disable-next-line mozilla/no-browser-refs-in-toolkit
      light: "chrome://browser/skin/weather/sunny.svg",
      // eslint-disable-next-line mozilla/no-browser-refs-in-toolkit
      dark: "chrome://browser/skin/weather/night-clear.svg",
      // eslint-disable-next-line mozilla/no-browser-refs-in-toolkit
      device: "chrome://browser/skin/device-desktop.svg"
    };
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<moz-segmented-control
      .value=${this.appearance}
      @change=${this.appearanceChange}
    >
      <moz-segmented-control-item
        data-l10n-id="theme-picker-mode-light"
        value="light"
        .iconSrc=${icons.light}
      ></moz-segmented-control-item>
      <moz-segmented-control-item
        data-l10n-id="theme-picker-mode-dark"
        value="dark"
        .iconSrc=${icons.dark}
      ></moz-segmented-control-item>
      <moz-segmented-control-item
        data-l10n-id="theme-picker-mode-device"
        value="device"
        .iconSrc=${icons.device}
      ></moz-segmented-control-item>
    </moz-segmented-control>`;
  }
  defaultThemeTemplate() {
    if (this.layout == "compact") {
      return "";
    }
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<moz-checkbox
      data-l10n-id="theme-picker-use-linux-theme"
      ?checked=${this.nativeTheme}
      ?disabled=${this.activeThemeId != DEFAULT_THEME_ID}
      @change=${this.nativeThemeChange}
    ></moz-checkbox>`;
  }
  render() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_theme_picker_theme_picker_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      ${this.appearanceChooserTemplate()}
      <moz-visual-picker
        .value=${this.activeThemeId}
        @change=${this.themeChange}
      >
        ${this.themes.map(theme => {
      const baseL10nId = THEME_L10N_IDS[theme.id];
      return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<moz-visual-picker-item
            value=${theme.id}
            labelposition="outside"
            data-l10n-id=${this.showLabels ? baseL10nId : `${baseL10nId}-aria-label`}
            ><span class="theme-preview" style=${this.themeStyle(theme)}></span
          ></moz-visual-picker-item>`;
    })}
      </moz-visual-picker>
      ${this.defaultThemeTemplate()}
    `;
  }
}
customElements.define("theme-picker", ThemePicker);

/***/ })

}]);
//# sourceMappingURL=theme-picker-theme-picker-stories.6641a5f7.iframe.bundle.js.map