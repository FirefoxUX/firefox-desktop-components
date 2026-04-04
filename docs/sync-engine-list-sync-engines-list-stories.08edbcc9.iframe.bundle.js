"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[2869],{

/***/ 884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingGroupManager: () => (/* binding */ SettingGroupManager)
/* harmony export */ });
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

/** @import {SettingGroupConfig} from "chrome://browser/content/preferences/widgets/setting-group.mjs" */

const SettingGroupManager = {
  /** @type {Map<string, SettingGroupConfig>} */
  _data: new Map(),
  /**
   * @param {string} id
   */
  get(id) {
    if (!this._data.has(id)) {
      throw new Error(`Setting group "${id}" not found`);
    }
    return this._data.get(id);
  },
  /**
   * @param {string} id
   * @param {SettingGroupConfig} config
   */
  registerGroup(id, config) {
    if (this._data.has(id)) {
      throw new Error(`Setting group "${id}" already registered`);
    }
    this._data.set(id, config);
  },
  /**
   * @param {Record<string, SettingGroupConfig>} groupConfigs
   */
  registerGroups(groupConfigs) {
    for (let id in groupConfigs) {
      this.registerGroup(id, groupConfigs[id]);
    }
  }
};

/***/ }),

/***/ 12670:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "placeholder-message.51f076c40a3f89b142aa.css";

/***/ }),

/***/ 16036:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsyncSetting: () => (/* binding */ AsyncSetting),
/* harmony export */   AsyncSettingHandler: () => (/* binding */ AsyncSettingHandler)
/* harmony export */ });
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const {
  EventEmitter
} = ChromeUtils.importESModule("resource://gre/modules/EventEmitter.sys.mjs");

/** @import { SettingControlConfig } from "chrome://browser/content/preferences/widgets/setting-control.mjs" */
/** @import { SettingConfig, SettingValue } from "./Setting.mjs" */

/**
 * This is the interface for the async setting classes to implement.
 *
 * For the actual implementation see AsyncSettingMixin.
 */
class AsyncSetting extends EventEmitter {
  static id = "";

  /** @type {SettingConfig['controllingExtensionInfo']} */
  static controllingExtensionInfo;

  /** @type {SettingValue} */
  defaultValue = "";
  defaultDisabled = false;
  defaultVisible = true;
  /** @type {Partial<SettingControlConfig>} */
  defaultGetControlConfig = {};

  /**
   * Emit a change event to notify listeners that the setting's data has
   * changed and should be updated.
   */
  emitChange = () => {
    this.emit("change");
  };

  /**
   * Setup any external listeners that are required for managing this
   * setting's state. When the state needs to update the Setting.emitChange method should be called.
   *
   * @returns {ReturnType<SettingConfig['setup']>} Teardown function to clean up external listeners.
   */
  setup() {}

  /**
   * Called before the setting values will be cached. You can start any shared
   * work here if you need the same value in multiple callbacks.
   *
   * @example
   * class Attendees extends AsyncSetting {
   *   beforeRefresh() {
   *     this.attendees = MeetingDb.getAttendees();
   *   }
   *   get() {
   *     return this.attendees;
   *   }
   *   async visible() {
   *     return (await this.attendees).length;
   *   }
   * }
   */
  beforeRefresh() {}

  /**
   * Get the value of this setting.
   *
   * @abstract
   * @returns {Promise<SettingValue>}
   */
  async get() {}

  /**
   * Set the value of this setting.
   *
   * @abstract
   * @param {SettingValue} value The value from the input that triggered the update.
   * @returns {Promise<void>}
   */
  // eslint-disable-next-line no-unused-vars
  async set(value) {}

  /**
   * Whether the control should be disabled.
   *
   * @returns {Promise<boolean>}
   */
  async disabled() {
    return false;
  }

  /**
   * Whether the control should be visible.
   *
   * @returns {Promise<boolean>}
   */
  async visible() {
    return true;
  }

  /**
   * Override the initial control config. This will be spread into the
   * initial config, with this object taking precedence.
   *
   * @returns {Promise<Partial<SettingControlConfig>>}
   */
  async getControlConfig() {
    return {};
  }

  /**
   * Callback fired after a user has changed the setting's value. Useful for
   * recording telemetry.
   *
   * @param {SettingValue} value
   */
  // eslint-disable-next-line no-unused-vars
  onUserChange(value) {}

  /**
   * Callback fired after a user has clicked a setting's control.
   *
   * @param {MouseEvent} event
   */
  // eslint-disable-next-line no-unused-vars
  onUserClick(event) {}

  /**
   * Callback fired after a user has dismissed a message bar.
   *
   * @param {CustomEvent} event
   */
  //eslint-disable-next-line no-unused-vars
  onMessageBarDismiss(event) {}

  /**
   * Callback fired after items in a reorderable list have been reordered.
   * This should be used to update the underlying data when the user
   * reorders items, such as updating preference values.
   *
   * @param {CustomEvent} event - reorder event with detail containing draggedElement, targetElement, position, draggedIndex, targetIndex
   */
  //eslint-disable-next-line no-unused-vars
  onUserReorder(event) {}
}

/**
 * Wraps an AsyncSetting and adds caching of values to provide a synchronous
 * API to the Setting class.
 *
 * @implements {SettingConfig}
 */
class AsyncSettingHandler {
  /** @type {AsyncSetting} */
  asyncSetting;

  /** @type {Function} */
  #emitChange;

  /** @type {string} */
  pref;

  /**
   * Dependencies are not supported on AsyncSettings, but we include an empty
   * array for consistency with {@link SettingConfig}.
   *
   * @type {string[]}
   */
  deps = [];

  /** @type {SettingConfig['controllingExtensionInfo']} */
  controllingExtensionInfo;

  /**
   * @param {string} id
   * @param {typeof AsyncSetting} AsyncSettingClass
   */
  constructor(id, AsyncSettingClass) {
    this.asyncSetting = new AsyncSettingClass();
    this.id = id;
    this.controllingExtensionInfo = AsyncSettingClass.controllingExtensionInfo;
    this.#emitChange = () => {};

    // Initialize cached values with defaults
    this.cachedValue = this.asyncSetting.defaultValue;
    this.cachedDisabled = this.asyncSetting.defaultDisabled;
    this.cachedVisible = this.asyncSetting.defaultVisible;
    this.cachedGetControlConfig = this.asyncSetting.defaultGetControlConfig;

    // Listen for change events from the async setting
    this.asyncSetting.on("change", () => this.refresh());
  }

  /**
   * @param {() => any} emitChange
   * @returns {ReturnType<SettingConfig['setup']>}
   */
  setup(emitChange) {
    let teardown = this.asyncSetting.setup();
    this.#emitChange = emitChange;
    this.refresh();
    return teardown;
  }

  /**
   * Called to trigger async tasks and re-cache values.
   */
  async refresh() {
    this.asyncSetting.beforeRefresh();
    [this.cachedValue, this.cachedDisabled, this.cachedVisible, this.cachedGetControlConfig] = await Promise.all([this.asyncSetting.get(), this.asyncSetting.disabled(), this.asyncSetting.visible(), this.asyncSetting.getControlConfig()]);
    this.#emitChange();
  }

  /**
   * @returns {SettingValue}
   */
  get() {
    return this.cachedValue;
  }

  /**
   * @param {any} value
   * @returns {Promise<void>}
   */
  set(value) {
    return this.asyncSetting.set(value);
  }

  /**
   * @returns {boolean}
   */
  disabled() {
    return this.cachedDisabled;
  }

  /**
   * @returns {boolean}
   */
  visible() {
    return this.cachedVisible;
  }

  /**
   * @param {SettingControlConfig} config
   * @returns {SettingControlConfig}
   */
  getControlConfig(config) {
    return {
      ...config,
      ...this.cachedGetControlConfig
    };
  }

  /**
   * @param {SettingValue} value
   */
  onUserChange(value) {
    return this.asyncSetting.onUserChange(value);
  }

  /**
   * @param {MouseEvent} event
   */
  onUserClick(event) {
    this.asyncSetting.onUserClick(event);
  }

  /**
   * @param {CustomEvent} event
   */
  onMessageBarDismiss(event) {
    this.asyncSetting.onMessageBarDismiss(event);
  }

  /**
   * @param {CustomEvent} event
   */
  onUserReorder(event) {
    this.asyncSetting.onUserReorder(event);
  }
}

/***/ }),

/***/ 17064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Setting: () => (/* binding */ Setting)
/* harmony export */ });
/* harmony import */ var chrome_global_content_preferences_AsyncSetting_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16036);
/* harmony import */ var chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76458);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * @import { type Preference } from "chrome://global/content/preferences/Preference.mjs"
 * @import { SettingControlConfig } from "chrome://browser/content/preferences/widgets/setting-control.mjs"
 * @import { ExtensionSettingsStore } from "resource://gre/modules/ExtensionSettingsStore.sys.mjs"
 * @import { AddonManager } from "resource://gre/modules/AddonManager.sys.mjs"
 * @import { Management } from "resource://gre/modules/Extension.sys.mjs"
 */

/**
 * A map of Setting instances (values) along with their IDs
 * (keys) so that the dependencies of a setting can
 * be easily looked up by just their ID.
 *
 * @typedef {Record<string, Setting>} SettingDeps
 */

/**
 * @typedef {string | boolean | number | nsIFile | void} SettingValue
 */

/**
 * @callback SettingVisibleCallback
 * @param {SettingDeps} deps
 * @param {Setting} setting
 * @returns {any} If truthy shows the setting in the UI, or hides it if not
 */

/**
 * Gets the value of a {@link Setting}.
 *
 * @callback SettingGetCallback
 * @param {any} val - The value that was retrieved from the preferences backend
 * @param {SettingDeps} deps
 * @param {Setting} setting
 * @returns {any} - The value to set onto the setting
 */

/**
 * Sets the value of a {@link Setting}.
 *
 * @callback SettingSetCallback
 * @param {SettingValue} val - The value/pressed/checked from the input (control) associated with the setting
 * @param {SettingDeps} deps
 * @param {Setting} setting
 * @returns {void}
 */

/**
 * @callback SettingOnUserChangeCallback
 * @param {SettingValue} val - The value/pressed/checked from the input of the control associated with the setting
 * @param {SettingDeps} deps
 * @param {Setting} setting
 * @returns {void}
 */

/**
 * @callback SettingDisabledCallback
 * @param {SettingDeps} deps
 * @param {Setting} setting
 * @returns {any}
 */

/**
 * @callback SettingGetControlConfigCallback
 * @param {SettingControlConfig} config
 * @param {SettingDeps} deps
 * @param {Setting} setting
 * @returns {SettingControlConfig}
 */

/**
 * @callback SettingTeardownCallback
 * @returns {void}
 */

/**
 * @callback SettingEmitChange
 */

/**
 * @callback SettingSetupCallback
 * @param {SettingEmitChange} emitChange Notify listeners of a change to this setting.
 * @param {SettingDeps} deps
 * @param {Setting} setting
 * @returns {SettingTeardownCallback | void}
 */

/**
 * @callback SettingOnUserClickCallback
 * @param {MouseEvent} event
 * @param {SettingDeps} deps
 * @param {Setting} setting
 * @returns {void}
 */

/**
 * @callback SettingOnMessageBarDismissCallback
 * @param {CustomEvent} event - The dismiss event
 * @param {SettingDeps} deps
 * @param {Setting} setting
 * @returns {void}
 */

/**
 * @callback SettingOnUserReorderCallback
 * @param {CustomEvent} event - The reorder event with detail containing draggedElement, targetElement, position, draggedIndex, targetIndex
 * @param {SettingDeps} deps
 * @param {Setting} setting
 * @returns {void}
 */

/**
 * @typedef {object} SettingControllingExtensionInfo
 * @property {string} storeId The ExtensionSettingsStore id that controls this setting.
 * @property {string} l10nId A fluent id to show in a controlled by extension message.
 * @property {string} [name] The controlling extension's name.
 * @property {string} [id] The controlling extension's id.
 * @property {string} [supportPage] A support page to show in the message.
 * @property {boolean} [allowControl] If the control should be enabled while controlled.
 */

/**
 * @typedef {object} SettingConfig
 * @property {string} id - The ID for the Setting, this should match the layout id
 * @property {string} [pref] - A {@link Services.prefs} id that will be used as the backend if it is provided
 * @property {string[]} [deps] - An array of setting IDs that this setting depends on, when these settings change this setting will emit a change event to update the UI
 * @property {Pick<SettingControllingExtensionInfo, "storeId" | "l10nId" | "allowControl" | "supportPage">} [controllingExtensionInfo] Data related to the setting being controlled by an extension.
 * @property {SettingVisibleCallback} [visible] - Function to determine if a setting is visible in the UI
 * @property {SettingGetCallback} [get] - Function to get the value of the setting. Optional if {@link SettingConfig#pref} is set.
 * @property {SettingSetCallback} [set] - Function to set the value of the setting. Optional if {@link SettingConfig#pref} is set.
 * @property {SettingGetControlConfigCallback} [getControlConfig] -  Function that allows the setting to modify its layout, this is intended to be used to provide the options, {@link SettingConfig#l10nId} or {@link SettingConfig#l10nArgs} data if necessary, but technically it can change anything (that doesn't mean it will have any effect though).
 * @property {SettingOnUserChangeCallback} [onUserChange] - A function that will be called when the setting
 *    has been modified by the user, it is passed the value/pressed/checked from its input. NOTE: This should be used for
 *    additional work that needs to happen, such as recording telemetry.
 *    If you want to set the value of the Setting then use the {@link SettingConfig.set} function.
 * @property {SettingSetupCallback} [setup] -  A function to be called to register listeners for
 *    the setting. It should return a {@link SettingTeardownCallback} function to
 *    remove the listeners if necessary. This should emit change events when the setting has changed to
 *    ensure the UI stays in sync if possible.
 * @property {SettingDisabledCallback} [disabled] - A function to determine if a setting should be disabled
 * @property {SettingOnUserClickCallback} [onUserClick] - A function that will be called when a setting has been
 *    clicked, the element name must be included in the CLICK_HANDLERS array
 *    in {@link file://./../../browser/components/preferences/widgets/setting-group/setting-group.mjs}. This should be
 *    used for controls that aren't regular form controls but instead perform an action when clicked, like a button or link.
 * @property {SettingOnMessageBarDismissCallback} [onMessageBarDismiss] - A function that will be called when a message bar has been
 *    dismissed. This should be used for moz-message-bar to override the default behavior.
 * @property {SettingOnUserReorderCallback} [onUserReorder] - A function that will be called when items in a
 *    reorderable list have been reordered. This should be used to update the underlying data when the user
 *    reorders items, such as updating preference values.
 */

const {
  EventEmitter
} = ChromeUtils.importESModule("resource://gre/modules/EventEmitter.sys.mjs");

/** @type {{ ExtensionSettingsStore: typeof ExtensionSettingsStore, AddonManager: typeof AddonManager, Management: typeof Management }} */
// @ts-expect-error bug 1996860
const lazy = {};
ChromeUtils.defineESModuleGetters(lazy, {
  ExtensionSettingsStore: "resource://gre/modules/ExtensionSettingsStore.sys.mjs",
  AddonManager: "resource://gre/modules/AddonManager.sys.mjs",
  Management: "resource://gre/modules/Extension.sys.mjs"
});
class PreferenceNotAddedError extends Error {
  /**
   * @param {string} settingId
   * @param {string} prefId
   */
  constructor(settingId, prefId) {
    super(`Setting "${settingId}" was unable to find Preference "${prefId}". Did you register it with Preferences.add/addAll?`);
    this.name = "PreferenceNotAddedError";
    this.settingId = settingId;
    this.prefId = prefId;
  }
}
class Setting extends EventEmitter {
  /**
   * @type {Preference}
   */
  _pref;

  /**
   * Keeps a cache of each dep's Setting so that
   * it can be easily looked up by its ID.
   *
   * @type {SettingDeps}
   */
  _deps;

  /**
   * @type {SettingConfig | AsyncSettingHandler}
   */
  config;
  get pref() {
    return this._pref;
  }
  set pref(newPref) {
    if (this._pref) {
      this._pref.off("change", this.onChange);
    }
    this._pref = newPref;
    if (this._pref) {
      this._pref.on("change", this.onChange);
    }
  }

  /**
   * @param {SettingConfig['id']} id
   * @param {SettingConfig | typeof AsyncSetting} config
   * @throws {Error} Will throw an error (PreferenceNotAddedError) if
   *    config.pref was not registered
   */
  constructor(id, config) {
    super();

    /** @type {SettingConfig | AsyncSettingHandler} */
    let configObj;
    if (Object.getPrototypeOf(config) == chrome_global_content_preferences_AsyncSetting_mjs__WEBPACK_IMPORTED_MODULE_0__.AsyncSetting) {
      configObj = new chrome_global_content_preferences_AsyncSetting_mjs__WEBPACK_IMPORTED_MODULE_0__.AsyncSettingHandler(id, /** @type {typeof AsyncSetting} */config);
    } else {
      configObj = config;
    }
    this.id = id;
    this.config = configObj;
    this.pref = configObj.pref && chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_1__.Preferences.get(configObj.pref);
    if (configObj.pref && !this.pref) {
      throw new PreferenceNotAddedError(id, configObj.pref);
    }
    this._emitting = false;

    /** @type {SettingControllingExtensionInfo} */
    this.controllingExtensionInfo = {
      ...this.config.controllingExtensionInfo
    };
    if (this.config.controllingExtensionInfo?.storeId) {
      this._checkForControllingExtension();
      this.watchExtensionPrefChange();
    }
    if (typeof this.config.setup === "function") {
      this._teardown = this.config.setup(this.onChange, this.deps, this);
    }
  }
  onChange = () => {
    if (this._emitting) {
      return;
    }
    this._emitting = true;
    this.emit("change");
    this._emitting = false;
  };

  /**
   * A map of each dep and it's associated {@link Setting} instance.
   *
   * @type {SettingDeps}
   */
  get deps() {
    if (this._deps) {
      return this._deps;
    }
    /**
     * @type {SettingDeps}
     */
    const deps = {};
    if (this.config.deps) {
      for (let id of this.config.deps) {
        const setting = chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_1__.Preferences.getSetting(id);
        if (setting) {
          deps[id] = setting;
        }
      }
    }
    this._deps = deps;
    for (const setting of Object.values(this._deps)) {
      setting.on("change", this.onChange);
    }
    return this._deps;
  }

  /**
   * @type {SettingValue}
   */
  get value() {
    let prefVal = this.pref?.value;
    if (this.config.get) {
      return this.config.get(prefVal, this.deps, this);
    }
    return prefVal;
  }

  /**
   * @param {SettingValue} val
   */
  set value(val) {
    let newVal = this.config.set ? this.config.set(val, this.deps, this) : val;
    if (this.pref && !(newVal instanceof Object && "then" in newVal)) {
      this.pref.value = newVal;
    }
  }

  /**
   * @type {boolean}
   */
  get locked() {
    return this.pref?.locked ?? false;
  }
  get visible() {
    return this.config.visible ? this.config.visible(this.deps, this) : true;
  }
  get disabled() {
    return this.config.disabled ? this.config.disabled(this.deps, this) : false;
  }

  /**
   * @param {SettingControlConfig} config
   * @returns {SettingControlConfig}
   */
  getControlConfig(config) {
    if (this.config.getControlConfig) {
      return this.config.getControlConfig(config, this.deps, this);
    }
    return config;
  }

  /**
   * @param {MouseEvent} event
   */
  userClick(event) {
    if (this.config.onUserClick) {
      this.config.onUserClick(event, this.deps, this);
    }
  }

  /**
   * @param {CustomEvent} event
   */
  messageBarDismiss(event) {
    if (this.config.onMessageBarDismiss) {
      this.config.onMessageBarDismiss(event, this.deps, this);
    }
  }

  /**
   * @param {CustomEvent} event
   */
  userReorder(event) {
    if (this.config.onUserReorder) {
      this.config.onUserReorder(event, this.deps, this);
    }
  }

  /**
   * @param {string} val
   */
  userChange(val) {
    this.value = val;
    if (this.config.onUserChange) {
      this.config.onUserChange(val, this.deps, this);
    }
  }
  async disableControllingExtension() {
    if (this.controllingExtensionInfo.name && this.controllingExtensionInfo.id) {
      await lazy.ExtensionSettingsStore.initialize();
      let {
        id
      } = lazy.ExtensionSettingsStore.getSetting("prefs", this.controllingExtensionInfo.storeId);
      if (id) {
        let addon = await lazy.AddonManager.getAddonByID(id);
        await addon.disable();
      }
    }
  }
  _checkForControllingExtension = async () => {
    // Make sure all settings API modules are loaded
    // and the extension controlling settings metadata
    // loaded from the ExtensionSettingsStore backend.
    await lazy.Management.asyncLoadSettingsModules();
    await lazy.ExtensionSettingsStore.initialize();
    // Retrieve the extension controlled settings info
    // for the given setting storeId.
    let info = lazy.ExtensionSettingsStore.getSetting("prefs", this.config.controllingExtensionInfo?.storeId);
    if (info && info.id) {
      let addon = await lazy.AddonManager.getAddonByID(info.id);
      if (addon) {
        this.controllingExtensionInfo.name = addon.name;
        this.controllingExtensionInfo.id = info.id;
        this.emit("change");
        return;
      }
    }
    this._clearControllingExtensionInfo();
  };
  _clearControllingExtensionInfo() {
    delete this.controllingExtensionInfo.id;
    delete this.controllingExtensionInfo.name;
    delete this.controllingExtensionInfo.supportPage;
    // Request an update to the setting control so the UI is in the correct state
    this.onChange();
  }
  watchExtensionPrefChange() {
    lazy.Management.on(`extension-setting-changed:${this.config.controllingExtensionInfo?.storeId}`, this._checkForControllingExtension);
  }
  destroy() {
    if (typeof this._teardown === "function") {
      this._teardown();
      this._teardown = null;
    }
    if (this.pref) {
      this.pref.off("change", this.onChange);
    }
    if (this.config.controllingExtensionInfo?.storeId) {
      lazy.Management.off(`extension-setting-changed:${this.config.controllingExtensionInfo?.storeId}`, this._checkForControllingExtension);
    }
  }
}

/***/ }),

/***/ 36383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var browser_components_preferences_widgets_sync_engine_list_sync_engines_list_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62739);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82242);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(616);
/* harmony import */ var chrome_browser_content_preferences_config_account_sync_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90569);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




window.MozXULElement.insertFTLIfNeeded("browser/preferences/preferences.ftl");

/**
 * @typedef {object} EngineInfo
 * @property {string} iconSrc - The icon URL for the engine.
 * @property {string} l10nId - The localization ID for the engine.
 */

/**
 * @type {Record<string, EngineInfo>}
 */
const engineTypeToMetadata = {
  bookmarks: {
    iconSrc: "chrome://browser/skin/bookmark-hollow.svg",
    l10nId: "sync-currently-syncing-bookmarks"
  },
  history: {
    iconSrc: "chrome://browser/skin/history.svg",
    l10nId: "sync-currently-syncing-history"
  },
  tabs: {
    iconSrc: "chrome://browser/skin/tabs.svg",
    l10nId: "sync-currently-syncing-tabs"
  },
  passwords: {
    iconSrc: "chrome://browser/skin/login.svg",
    l10nId: "sync-currently-syncing-passwords"
  },
  addresses: {
    iconSrc: "chrome://browser/skin/notification-icons/geo.svg",
    l10nId: "sync-currently-syncing-addresses"
  },
  payments: {
    iconSrc: "chrome://browser/skin/payment-methods-16.svg",
    l10nId: "sync-currently-syncing-payment-methods"
  },
  addons: {
    iconSrc: "chrome://mozapps/skin/extensions/extension.svg",
    l10nId: "sync-currently-syncing-addons"
  },
  settings: {
    iconSrc: "chrome://global/skin/icons/settings.svg",
    l10nId: "sync-currently-syncing-settings"
  }
};

/**
 * A custom element that displays synced engines in Sync settings section.
 *
 * @tagname sync-engines-list
 * @property {string[]} engines - Array of engine types to display.
 *   Options: bookmarks, history, tabs, passwords, addresses, payments, addons, settings.
 */
class SyncEnginesList extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.MozLitElement {
  static properties = {
    engines: {
      type: Array
    }
  };
  constructor() {
    super();

    /** @type {string[]} */
    this.engines = [];
  }

  /**
   * @param {string} type
   */
  engineTemplate(type) {
    let metadata = engineTypeToMetadata[type];
    if (!metadata) {
      return null;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      <div class="sync-engine">
        <img src=${metadata.iconSrc} role="presentation" />
        <label data-l10n-id=${metadata.l10nId}></label>
      </div>
    `;
  }
  syncedEnginesTemplate() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<moz-box-item>
      <div class="engines-list-wrapper">
        <span
          id="heading"
          data-l10n-id="sync-syncing-across-devices-heading-2"
        ></span>
        <div class="engines-list-container">
          ${this.engines.map(type => this.engineTemplate(type))}
        </div>
      </div>
    </moz-box-item>`;
  }
  emptyStateTemplate() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`<moz-box-button
      class="empty-state"
      data-l10n-id="sync-syncing-across-devices-empty-state2"
      @click=${() => chrome_browser_content_preferences_config_account_sync_mjs__WEBPACK_IMPORTED_MODULE_3__.SyncHelpers._chooseWhatToSync(true, "manageSyncSettings")}
    ></moz-box-button>`;
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_2__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_preferences_widgets_sync_engine_list_sync_engines_list_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      ${this.engines.length ? this.syncedEnginesTemplate() : this.emptyStateTemplate()}
    `;
  }
}
customElements.define("sync-engines-list", SyncEnginesList);

/***/ }),

/***/ 41638:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   EmptyState: () => (/* binding */ EmptyState),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var chrome_browser_content_preferences_widgets_sync_engines_list_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36383);
/* harmony import */ var chrome_browser_content_preferences_widgets_placeholder_message_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45184);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/Settings/Sync Engines List",
  component: "sync-engines-list",
  parameters: {
    status: "in-development"
  },
  argTypes: {
    engines: {
      control: "check",
      options: ["bookmarks", "history", "tabs", "passwords", "settings", "addresses", "payments", "addons"]
    }
  }
});
window.MozXULElement.insertFTLIfNeeded("browser/preferences/preferences.ftl");
const Template = ({
  engines = []
}) => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <div style="max-width: 520px">
    <sync-engines-list .engines=${engines}></sync-engines-list>
  </div>
`;
const Default = Template.bind({});
Default.args = {
  // Note: "addons" icon currently doesn’t render in Storybook.
  engines: ["bookmarks", "history", "tabs", "passwords", "settings", "addresses", "payments"]
};
const EmptyState = Template.bind({});
EmptyState.args = {
  engines: []
};

/***/ }),

/***/ 45184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var toolkit_themes_shared_design_system_src_text_and_typography_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44311);
/* harmony import */ var browser_components_preferences_widgets_placeholder_message_placeholder_message_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12670);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(616);


/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



class PlaceholderMessage extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    imageSrc: {
      type: String
    },
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
    }
  };
  constructor() {
    super();

    /** @type {string} */
    this.imageSrc = "";

    /** @type {string} */
    this.label = "";

    /** @type {string} */
    this.description = "";

    /** @type {string} */
    this.supportPage = "";
  }
  labelTemplate() {
    if (!this.label) {
      return "";
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__.html)`<div class="label-wrapper">
      <span class="label heading-medium" id="label">${this.label}</span>${!this.description ? this.supportLinkTemplate() : ""}
    </div>`;
  }
  descriptionTemplate() {
    if (!this.description) {
      return "";
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__.html)`<div class="description-wrapper">
      <span class="description" id="description"> ${this.description}</span
      >${this.supportLinkTemplate()}
    </div>`;
  }
  supportLinkTemplate() {
    if (!this.supportPage) {
      return "";
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__.html)`<a
      is="moz-support-link"
      class="support-link"
      support-page=${this.supportPage}
      part="support-link"
      aria-describedby="label description"
    ></a>`;
  }
  imageTemplate() {
    if (!this.imageSrc) {
      return "";
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__.html)`<img src=${this.imageSrc} role="presentation" />`;
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_3__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_preferences_widgets_placeholder_message_placeholder_message_css__WEBPACK_IMPORTED_MODULE_1__}"
      />
      <link
        rel="stylesheet"
        href="${toolkit_themes_shared_design_system_src_text_and_typography_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <moz-box-item>
        <div class="placeholder-container">
          ${this.imageTemplate()}
          <div class="text-container">
            ${this.labelTemplate()} ${this.descriptionTemplate()}
          </div>
        </div>
      </moz-box-item>
    `;
  }
}
customElements.define("placeholder-message", PlaceholderMessage);

/***/ }),

/***/ 62739:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "sync-engines-list.1c4ef0c015ba088eb63f.css";

/***/ }),

/***/ 76458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Preferences: () => (/* binding */ Preferences)
/* harmony export */ });
/* harmony import */ var chrome_global_content_preferences_AsyncSetting_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16036);
/* harmony import */ var chrome_global_content_preferences_Preference_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93275);
/* harmony import */ var chrome_global_content_preferences_Setting_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17064);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */





/** @import {PreferenceConfig} from "chrome://global/content/preferences/Preference.mjs" */
/** @import {SettingConfig} from "chrome://global/content/preferences/Setting.mjs" */
/** @import {DeferredTask} from "resource://gre/modules/DeferredTask.sys.mjs" */

/**
 * @typedef {{ _deferredValueUpdateTask: DeferredTask }} DeferredValueObject
 * @typedef {DeferredValueObject & HTMLElement} DeferredValueHTMLElement
 */

/** @type {{ DeferredTask: typeof DeferredTask }} */
// @ts-expect-error bug 1996860
const lazy = {};
ChromeUtils.defineESModuleGetters(lazy, {
  DeferredTask: "resource://gre/modules/DeferredTask.sys.mjs"
});
const domContentLoadedPromise = new Promise(resolve => {
  window.addEventListener("DOMContentLoaded", resolve, {
    capture: true,
    once: true
  });
});
const Preferences = {
  /**
   * @type {Record<string, Preference>}
   */
  _all: {},
  /**
   * @type {Map<string, Setting>}
   */
  _settings: new Map(),
  /**
   * @param {PreferenceConfig} prefInfo
   */
  _add(prefInfo) {
    if (this._all[prefInfo.id]) {
      throw new Error(`preference with id '${prefInfo.id}' already added`);
    }
    const pref = new chrome_global_content_preferences_Preference_mjs__WEBPACK_IMPORTED_MODULE_1__.Preference(prefInfo);
    this._all[pref.id] = pref;
    domContentLoadedPromise.then(() => {
      if (!this.updateQueued) {
        pref.updateElements();
      }
    });
    return pref;
  },
  /**
   * @param {PreferenceConfig} prefInfo
   * @returns {Preference}
   */
  add(prefInfo) {
    const pref = this._add(prefInfo);
    return pref;
  },
  /**
   * @param {Array<PreferenceConfig>} prefInfos
   */
  addAll(prefInfos) {
    prefInfos.map(prefInfo => this._add(prefInfo));
  },
  /**
   * @param {string} id
   * @returns {Preference | null}
   */
  get(id) {
    return this._all[id] || null;
  },
  /**
   * @returns {Array<Preference>}
   */
  getAll() {
    return Object.values(this._all);
  },
  /**
   * A configuration object that adds an element (control) associated with a pref,
   * that includes all of the configuration for the control
   * such as its Fluent strings, support page, subcategory etc.
   *
   * @param {SettingConfig} settingConfig
   */
  addSetting(settingConfig) {
    this._settings.set(settingConfig.id, new chrome_global_content_preferences_Setting_mjs__WEBPACK_IMPORTED_MODULE_2__.Setting(settingConfig.id, settingConfig));
  },
  /**
   * @param {string} settingId
   * @returns {Setting | undefined}
   */
  getSetting(settingId) {
    return this._settings.get(settingId);
  },
  defaultBranch: Services.prefs.getDefaultBranch(""),
  get type() {
    return document.documentElement.getAttribute("type") || "";
  },
  get instantApply() {
    // The about:preferences page forces instantApply.
    // TODO: Remove forceEnableInstantApply in favor of always applying in a
    // parent and never applying in a child (bug 1775386).
    if (this._instantApplyForceEnabled) {
      return true;
    }

    // Dialogs of type="child" are never instantApply.
    return this.type !== "child";
  },
  _instantApplyForceEnabled: false,
  // Override the computed value of instantApply for this window.
  forceEnableInstantApply() {
    this._instantApplyForceEnabled = true;
  },
  /**
   * @param {nsISupports} _
   * @param {string} __
   * @param {string} data
   */
  observe(_, __, data) {
    const pref = this._all[data];
    if (pref) {
      pref.value = pref.valueFromPreferences;
    }
  },
  updateQueued: false,
  queueUpdateOfAllElements() {
    if (this.updateQueued) {
      return;
    }
    this.updateQueued = true;
    Services.tm.dispatchToMainThread(() => {
      let startTime = ChromeUtils.now();
      const elements = document.querySelectorAll("[preference]");
      for (const element of elements) {
        const id = element.getAttribute("preference");
        let preference = this.get(id);
        if (!preference) {
          console.error(`Missing preference for ID ${id}`);
          continue;
        }
        preference.setElementValue(element);
      }
      ChromeUtils.addProfilerMarker("Preferences", {
        startTime
      }, `updateAllElements: ${elements.length} preferences updated`);
      this.updateQueued = false;
    });
  },
  /**
   * @param {Event} _
   */
  onUnload(_) {
    this._settings.forEach(setting => setting?.destroy?.());
    Services.prefs.removeObserver("", /** @type {nsIObserver} */this);
  },
  QueryInterface: ChromeUtils.generateQI(["nsITimerCallback", "nsIObserver"]),
  _deferredValueUpdateElements: new Set(),
  /**
   * @param {boolean} aFlushToDisk
   */
  writePreferences(aFlushToDisk) {
    // Write all values to preferences.
    if (this._deferredValueUpdateElements.size) {
      this._finalizeDeferredElements();
    }
    const preferences = Preferences.getAll();
    for (const preference of preferences) {
      preference.batching = true;
      preference.valueFromPreferences = preference.value;
      preference.batching = false;
    }
    if (aFlushToDisk) {
      Services.prefs.savePrefFile(null);
    }
  },
  /**
   * @param {HTMLElement} aStartElement
   */
  getPreferenceElement(aStartElement) {
    let temp = aStartElement;
    while (temp && temp.nodeType == Node.ELEMENT_NODE && !temp.hasAttribute("preference")) {
      // @ts-expect-error
      temp = temp.parentNode;
    }
    return temp && temp.nodeType == Node.ELEMENT_NODE ? temp : aStartElement;
  },
  /**
   * @param {DeferredValueHTMLElement} aElement
   */
  _deferredValueUpdate(aElement) {
    delete aElement._deferredValueUpdateTask;
    const prefID = aElement.getAttribute("preference");
    const preference = Preferences.get(prefID);
    const prefVal = preference.getElementValue(aElement);
    preference.value = prefVal;
    this._deferredValueUpdateElements.delete(aElement);
  },
  _finalizeDeferredElements() {
    for (const el of this._deferredValueUpdateElements) {
      if (el._deferredValueUpdateTask) {
        el._deferredValueUpdateTask.finalize();
      }
    }
  },
  /**
   * @param {HTMLElement} aElement
   */
  userChangedValue(aElement) {
    const element = /** @type {DeferredValueHTMLElement} */
    this.getPreferenceElement(aElement);
    if (element.hasAttribute("preference")) {
      if (element.getAttribute("delayprefsave") != "true") {
        const preference = Preferences.get(element.getAttribute("preference"));
        const prefVal = preference.getElementValue(element);
        preference.value = prefVal;
      } else {
        if (!element._deferredValueUpdateTask) {
          element._deferredValueUpdateTask = new lazy.DeferredTask(this._deferredValueUpdate.bind(this, element), 1000);
          this._deferredValueUpdateElements.add(element);
        } else {
          // Each time the preference is changed, restart the delay.
          element._deferredValueUpdateTask.disarm();
        }
        element._deferredValueUpdateTask.arm();
      }
    }
  },
  /**
   * @typedef {{ sourceEvent: CommandEventWithSource } & CommandEvent} CommandEventWithSource
   * @param {CommandEventWithSource} event
   */
  onCommand(event) {
    // This "command" event handler tracks changes made to preferences by
    // the user in this window.
    if (event.sourceEvent) {
      event = event.sourceEvent;
    }
    this.userChangedValue(/** @type {HTMLElement} */event.target);
  },
  /** @param {Event} event */
  onChange(event) {
    // This "change" event handler tracks changes made to preferences by
    // the user in this window.
    this.userChangedValue(/** @type {HTMLElement} */event.target);
  },
  /** @param {Event} event */
  onInput(event) {
    // This "input" event handler tracks changes made to preferences by
    // the user in this window.
    this.userChangedValue(/** @type {HTMLElement} */event.target);
  },
  /**
   * @param {string} aEventName
   * @param {HTMLElement} aTarget
   */
  _fireEvent(aEventName, aTarget) {
    try {
      const event = new CustomEvent(aEventName, {
        bubbles: true,
        cancelable: true
      });
      return aTarget.dispatchEvent(event);
    } catch (e) {
      console.error(e);
    }
    return false;
  },
  /**
   * @param {Event} event
   */
  onDialogAccept(event) {
    let dialog = document.querySelector("dialog");
    if (!this._fireEvent("beforeaccept", dialog)) {
      event.preventDefault();
      return false;
    }
    this.writePreferences(true);
    return true;
  },
  /**
   * @param {Event} event
   */
  close(event) {
    if (Preferences.instantApply) {
      window.close();
    }
    event.stopPropagation();
    event.preventDefault();
  },
  /**
   * @param {Event} event
   */
  handleEvent(event) {
    switch (event.type) {
      case "toggle":
      case "change":
        return this.onChange(event);
      case "command":
        return this.onCommand(/** @type {CommandEventWithSource} */event);
      case "dialogaccept":
        return this.onDialogAccept(event);
      case "input":
        return this.onInput(event);
      case "unload":
        return this.onUnload(event);
      default:
        return undefined;
    }
  },
  /** @type {WeakMap<Element, (el: Element) => any>} */
  _syncFromPrefListeners: new WeakMap(),
  /** @type {WeakMap<Element, (el: Element) => any>} */
  _syncToPrefListeners: new WeakMap(),
  /**
   * @param {Element} aElement
   * @param {(el: Element) => any} callback
   */
  addSyncFromPrefListener(aElement, callback) {
    this._syncFromPrefListeners.set(aElement, callback);
    if (this.updateQueued) {
      return;
    }
    // Make sure elements are updated correctly with the listener attached.
    let elementPref = aElement.getAttribute("preference");
    if (elementPref) {
      let pref = this.get(elementPref);
      if (pref) {
        pref.updateElements();
      }
    }
  },
  /**
   * @param {Element} aElement
   * @param {(el: Element) => any} callback
   */
  addSyncToPrefListener(aElement, callback) {
    this._syncToPrefListeners.set(aElement, callback);
    if (this.updateQueued) {
      return;
    }
    // Make sure elements are updated correctly with the listener attached.
    let elementPref = aElement.getAttribute("preference");
    if (elementPref) {
      let pref = this.get(elementPref);
      if (pref) {
        pref.updateElements();
      }
    }
  },
  /**
   * @param {Element} aElement
   */
  removeSyncFromPrefListener(aElement) {
    this._syncFromPrefListeners.delete(aElement);
  },
  /**
   * @param {Element} aElement
   */
  removeSyncToPrefListener(aElement) {
    this._syncToPrefListeners.delete(aElement);
  },
  AsyncSetting: chrome_global_content_preferences_AsyncSetting_mjs__WEBPACK_IMPORTED_MODULE_0__.AsyncSetting,
  Preference: chrome_global_content_preferences_Preference_mjs__WEBPACK_IMPORTED_MODULE_1__.Preference,
  Setting: chrome_global_content_preferences_Setting_mjs__WEBPACK_IMPORTED_MODULE_2__.Setting
};
Services.prefs.addObserver("", /** @type {nsIObserver} */Preferences);
window.addEventListener("toggle", Preferences);
window.addEventListener("change", Preferences);
window.addEventListener("command", Preferences);
window.addEventListener("dialogaccept", Preferences);
window.addEventListener("input", Preferences);
window.addEventListener("select", Preferences);
window.addEventListener("unload", Preferences, {
  once: true
});

/***/ }),

/***/ 90569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SyncHelpers: () => (/* binding */ SyncHelpers)
/* harmony export */ });
/* harmony import */ var chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76458);
/* harmony import */ var chrome_browser_content_preferences_config_SettingGroupManager_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(884);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */



const {
  SCOPE_APP_SYNC
} = ChromeUtils.importESModule("resource://gre/modules/FxAccountsCommon.sys.mjs");
const XPCOMUtils = ChromeUtils.importESModule("resource://gre/modules/XPCOMUtils.sys.mjs").XPCOMUtils;
const lazy = XPCOMUtils.declareLazy({
  BackupService: "resource:///modules/backup/BackupService.sys.mjs",
  Weave: "resource://services-sync/main.sys.mjs",
  SelectableProfileService: "resource:///modules/profiles/SelectableProfileService.sys.mjs"
});
chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.addAll([
// sync
{
  id: "services.sync.engine.bookmarks",
  type: "bool"
}, {
  id: "services.sync.engine.history",
  type: "bool"
}, {
  id: "services.sync.engine.tabs",
  type: "bool"
}, {
  id: "services.sync.engine.passwords",
  type: "bool"
}, {
  id: "services.sync.engine.addresses",
  type: "bool"
}, {
  id: "services.sync.engine.creditcards",
  type: "bool"
}, {
  id: "services.sync.engine.addons",
  type: "bool"
}, {
  id: "services.sync.engine.prefs",
  type: "bool"
}]);

/**
 * A helper class for managing sync related UI behavior.
 */
var SyncHelpers = new class SyncHelpers {
  /**
   * href for Connect another device link.
   *
   * @type {string}
   */
  connectAnotherDeviceHref = "";

  /**
   * Returns the current global UIState.
   *
   * @type {object}
   * @readonly
   */
  get uiState() {
    let state = window.UIState.get();
    return state;
  }

  /**
   * Retrieves the current UI state status from the global UIState.
   *
   * @type {string}
   * @readonly
   */
  get uiStateStatus() {
    return this.uiState.status;
  }

  /**
   * Whether Sync is currently enabled in the UIState.
   *
   * @type {boolean}
   * @readonly
   */
  get isSyncEnabled() {
    return this.uiState.syncEnabled;
  }

  /**
   * Extracts and sanitizes the `entrypoint` parameter from the current document URL.
   *
   * @returns {string} The sanitized entry point name.
   */
  getEntryPoint() {
    let params = URL.fromURI(document.documentURIObject).searchParams;
    let entryPoint = params.get("entrypoint") || "preferences";
    entryPoint = entryPoint.replace(/[^-.\w]/g, "");
    return entryPoint;
  }

  /**
   * Replace the current tab with the specified URL.
   *
   * @param {string} url
   */
  replaceTabWithUrl(url) {
    // Get the <browser> element hosting us.
    let browser = window.docShell.chromeEventHandler;
    // And tell it to load our URL.
    browser.loadURI(Services.io.newURI(url), {
      triggeringPrincipal: Services.scriptSecurityManager.createNullPrincipal({})
    });
  }

  /**
   * Opens the "Choose What to Sync" dialog and handles user interaction.
   *
   * @param {boolean} isSyncConfigured
   *        Whether Sync is already configured for this profile.
   * @param {string|null} [why=null]
   *        Optional reason or event name indicating why the dialog was opened.
   * @returns {Promise<void>}
   *          Resolves when the dialog flow and any post-actions have completed.
   */
  async _chooseWhatToSync(isSyncConfigured, why = null) {
    // Record the user opening the choose what to sync menu.
    window.fxAccounts.telemetry.recordOpenCWTSMenu(why).catch(err => {
      console.error("Failed to record open CWTS menu event", err);
    });

    // Assuming another device is syncing and we're not,
    // we update the engines selection so the correct
    // checkboxes are pre-filed.
    if (!isSyncConfigured) {
      try {
        await lazy.Weave.Service.updateLocalEnginesState();
      } catch (err) {
        console.error("Error updating the local engines state", err);
      }
    }
    let params = {};
    if (isSyncConfigured) {
      // If we are already syncing then we also offer to disconnect.
      params.disconnectFun = () => this.disconnectSync();
    }
    window.gSubDialog.open("chrome://browser/content/preferences/dialogs/syncChooseWhatToSync.xhtml", {
      closingCallback: event => {
        if (event.detail.button == "accept") {
          // Sync wasn't previously configured, but the user has accepted
          // so we want to now start syncing!
          if (!isSyncConfigured) {
            window.fxAccounts.telemetry.recordConnection(["sync"], "ui").then(() => {
              return lazy.Weave.Service.configure();
            }).catch(err => {
              console.error("Failed to enable sync", err);
            });
          } else {
            // User is already configured and have possibly changed the engines they want to
            // sync, so we should let the server know immediately
            // if the user is currently syncing, we queue another sync after
            // to ensure we caught their updates
            Services.tm.dispatchToMainThread(() => {
              lazy.Weave.Service.queueSync("cwts");
            });
          }
        }
        // When the modal closes we want to remove any query params
        // so it doesn't open on subsequent visits (and will reload)
        const browser = window.docShell.chromeEventHandler;
        browser.loadURI(Services.io.newURI("about:preferences#sync"), {
          triggeringPrincipal: Services.scriptSecurityManager.getSystemPrincipal()
        });
      }
    }, params /* aParams */);
  }

  // Disconnect sync, leaving the account connected.
  disconnectSync() {
    return window.browsingContext.topChromeWindow.gSync.disconnect({
      confirm: true,
      disconnectAccount: false
    });
  }
  async setupSync() {
    try {
      const hasKeys = await window.fxAccounts.keys.hasKeysForScope(SCOPE_APP_SYNC);
      if (hasKeys) {
        // User has keys - open the choose what to sync dialog
        this._chooseWhatToSync(false, "setupSync");
      } else {
        // User signed in via third-party auth without sync keys.
        // Redirect to FxA to create a password and generate sync keys.
        // canConnectAccount() checks if the Primary Password is locked and
        // prompts the user to unlock it. Returns false if the user cancels.
        if (!(await window.FxAccounts.canConnectAccount())) {
          return;
        }
        const url = await window.FxAccounts.config.promiseConnectAccountURI(this.getEntryPoint());
        this.replaceTabWithUrl(url);
      }
    } catch (err) {
      console.error("Failed to check for sync keys", err);
      // Fallback to opening CWTS dialog
      this._chooseWhatToSync(false, "setupSync");
    }
  }
  async signIn() {
    if (!(await window.FxAccounts.canConnectAccount())) {
      return;
    }
    const url = await window.FxAccounts.config.promiseConnectAccountURI(this.getEntryPoint());
    this.replaceTabWithUrl(url);
  }

  /**
   * Attempts to take the user through the sign in flow by opening the web content
   * with the given entrypoint as a query parameter
   *
   * @param {string} entrypoint
   *        An string appended to the query parameters, used in telemetry to differentiate
   *        different entrypoints to accounts
   */
  async reSignIn(entrypoint) {
    const url = await window.FxAccounts.config.promiseConnectAccountURI(entrypoint);
    this.replaceTabWithUrl(url);
  }
  async verifyFirefoxAccount() {
    return this.reSignIn("preferences-reverify");
  }

  /**
   * Disconnect the account, including everything linked.
   *
   * @param {boolean} showConfirm
   *        Whether to show a confirmation dialog before disconnecting
   */
  unlinkFirefoxAccount(showConfirm) {
    window.browsingContext.topChromeWindow.gSync.disconnect({
      showConfirm
    });
  }
}();

// Expose SyncHelpers on the window object for tests and other code.
window.SyncHelpers = SyncHelpers;
chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.addSetting({
  id: "uiStateUpdate",
  setup(emitChange) {
    lazy.Weave.Svc.Obs.add(window.UIState.ON_UPDATE, emitChange);
    return () => lazy.Weave.Svc.Obs.remove(window.UIState.ON_UPDATE, emitChange);
  }
});

// Mozilla accounts section

// Logged out of Mozilla account
chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.addSetting({
  id: "noFxaAccountGroup",
  deps: ["uiStateUpdate"],
  visible() {
    return SyncHelpers.uiStateStatus == window.UIState.STATUS_NOT_CONFIGURED;
  }
});
chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.addSetting({
  id: "noFxaAccount"
});
chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.addSetting({
  id: "noFxaSignIn",
  onUserClick: () => {
    SyncHelpers.signIn();
  }
});

// Logged in and verified and all is good
chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.addSetting({
  id: "fxaSignedInGroup",
  deps: ["uiStateUpdate"],
  visible() {
    return SyncHelpers.uiStateStatus == window.UIState.STATUS_SIGNED_IN;
  }
});
chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.addSetting({
  id: "fxaLoginVerified",
  deps: ["uiStateUpdate"],
  _failedAvatarURLs: new Set(),
  getControlConfig(config, _, setting) {
    let state = SyncHelpers.uiState;
    if (state.displayName) {
      config.l10nId = "sync-account-signed-in-display-name";
      config.l10nArgs = {
        name: state.displayName,
        email: state.email || ""
      };
    } else {
      config.l10nId = "sync-account-signed-in";
      config.l10nArgs = {
        email: state.email || ""
      };
    }

    // Reset the image to default avatar if we encounter an error.
    if (this._failedAvatarURLs.has(state.avatarURL)) {
      config.iconSrc = "chrome://browser/skin/fxa/avatar-color.svg";
      return config;
    }
    if (state.avatarURL && !state.avatarIsDefault) {
      config.iconSrc = state.avatarURL;
      let img = new Image();
      img.onerror = () => {
        this._failedAvatarURLs.add(state.avatarURL);
        setting.onChange();
      };
      img.src = state.avatarURL;
    }
    return config;
  }
});
chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.addSetting(class extends chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.AsyncSetting {
  static id = "verifiedManage";
  setup() {
    lazy.Weave.Svc.Obs.add(window.UIState.ON_UPDATE, this.emitChange);
    return () => lazy.Weave.Svc.Obs.remove(window.UIState.ON_UPDATE, this.emitChange);
  }

  // The "manage account" link embeds the uid, so we need to update this
  // if the account state changes.
  async getControlConfig() {
    let href = await window.FxAccounts.config.promiseManageURI(SyncHelpers.getEntryPoint());
    return {
      controlAttrs: {
        href: href ?? "https://accounts.firefox.com/settings"
      }
    };
  }
});
chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.addSetting({
  id: "fxaUnlinkButton",
  onUserClick: () => {
    SyncHelpers.unlinkFirefoxAccount(true);
  }
});

// Logged in to an unverified account
chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.addSetting({
  id: "fxaUnverifiedGroup",
  deps: ["uiStateUpdate"],
  visible() {
    return SyncHelpers.uiStateStatus == window.UIState.STATUS_NOT_VERIFIED;
  }
});
chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.addSetting({
  id: "fxaLoginUnverified",
  deps: ["uiStateUpdate"],
  getControlConfig(config) {
    let state = SyncHelpers.uiState;
    config.l10nArgs = {
      email: state.email || ""
    };
    return config;
  }
});
chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.addSetting({
  id: "verifyFxaAccount",
  onUserClick: () => {
    SyncHelpers.verifyFirefoxAccount();
  }
});
chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.addSetting({
  id: "unverifiedUnlinkFxaAccount",
  onUserClick: () => {
    /* no warning as account can't have previously synced */
    SyncHelpers.unlinkFirefoxAccount(false);
  }
});

// Logged in locally but server rejected credentials
chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.addSetting({
  id: "fxaLoginRejectedGroup",
  deps: ["uiStateUpdate"],
  visible() {
    return SyncHelpers.uiStateStatus == window.UIState.STATUS_LOGIN_FAILED;
  }
});
chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.addSetting({
  id: "fxaLoginRejected",
  deps: ["uiStateUpdate"],
  getControlConfig(config) {
    let state = SyncHelpers.uiState;
    config.l10nArgs = {
      email: state.email || ""
    };
    return config;
  }
});
chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.addSetting({
  id: "rejectReSignIn",
  onUserClick: () => {
    SyncHelpers.reSignIn(SyncHelpers.getEntryPoint());
  }
});
chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.addSetting({
  id: "rejectUnlinkFxaAccount",
  onUserClick: () => {
    SyncHelpers.unlinkFirefoxAccount(true);
  }
});

//Sync section

//Sync section - no Firefox account
chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.addSetting({
  id: "syncNoFxaSignIn",
  deps: ["uiStateUpdate"],
  visible() {
    return SyncHelpers.uiStateStatus === window.UIState.STATUS_NOT_CONFIGURED;
  },
  onUserClick: () => {
    SyncHelpers.signIn();
  }
});

// Sync section - Syncing is OFF
chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.addSetting({
  id: "syncNotConfigured",
  deps: ["uiStateUpdate"],
  visible() {
    return SyncHelpers.uiStateStatus === window.UIState.STATUS_SIGNED_IN && !SyncHelpers.isSyncEnabled;
  }
});
chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.addSetting({
  id: "syncSetup",
  onUserClick: () => SyncHelpers.setupSync()
});

// Sync section - Syncing is ON
chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.addSetting({
  id: "syncConfigured",
  deps: ["uiStateUpdate"],
  visible() {
    return SyncHelpers.uiStateStatus === window.UIState.STATUS_SIGNED_IN && SyncHelpers.isSyncEnabled;
  }
});
chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.addSetting({
  id: "syncStatus"
});
chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.addSetting({
  id: "syncNow",
  deps: ["uiStateUpdate"],
  onUserClick() {
    lazy.Weave.Service.sync({
      why: "aboutprefs"
    });
  },
  visible: () => !SyncHelpers.uiState.syncing
  // Bug 2004864 - add tooltip
});
chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.addSetting({
  id: "syncing",
  deps: ["uiStateUpdate"],
  disabled: () => SyncHelpers.uiState.syncing,
  visible: () => SyncHelpers.uiState.syncing
});
const SYNC_ENGINE_SETTINGS = [{
  id: "syncBookmarks",
  pref: "services.sync.engine.bookmarks",
  type: "bookmarks"
}, {
  id: "syncHistory",
  pref: "services.sync.engine.history",
  type: "history"
}, {
  id: "syncTabs",
  pref: "services.sync.engine.tabs",
  type: "tabs"
}, {
  id: "syncPasswords",
  pref: "services.sync.engine.passwords",
  type: "passwords"
}, {
  id: "syncAddresses",
  pref: "services.sync.engine.addresses",
  type: "addresses"
}, {
  id: "syncPayments",
  pref: "services.sync.engine.creditcards",
  type: "payments"
}, {
  id: "syncAddons",
  pref: "services.sync.engine.addons",
  type: "addons"
}, {
  id: "syncSettings",
  pref: "services.sync.engine.prefs",
  type: "settings"
}];
SYNC_ENGINE_SETTINGS.forEach(({
  id,
  pref
}) => {
  chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.addSetting({
    id,
    pref
  });
});
chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.addSetting({
  id: "syncEngines",
  deps: SYNC_ENGINE_SETTINGS.map(({
    id
  }) => id),
  get(_, deps) {
    return SYNC_ENGINE_SETTINGS.filter(({
      id
    }) => deps[id]?.value).map(({
      type
    }) => type);
  }
});
chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.addSetting({
  id: "syncEnginesList",
  deps: ["syncEngines"],
  getControlConfig(config, {
    syncEngines
  }) {
    return {
      ...config,
      controlAttrs: {
        ...config.controlAttrs,
        ".engines": syncEngines.value
      }
    };
  }
});
chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.addSetting({
  id: "syncChangeOptions",
  deps: ["syncEngines"],
  onUserClick: () => {
    SyncHelpers._chooseWhatToSync(true, "manageSyncSettings");
  },
  visible: ({
    syncEngines
  }) => {
    return syncEngines.value && syncEngines.value.length;
  }
});
chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.addSetting({
  id: "syncDisconnect",
  onUserClick: () => {
    SyncHelpers.disconnectSync();
  }
});

// Sync section - Device name
chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.addSetting({
  id: "fxaDeviceNameSection",
  deps: ["uiStateUpdate"],
  visible() {
    return SyncHelpers.uiStateStatus !== window.UIState.STATUS_NOT_CONFIGURED;
  }
});
chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.addSetting({
  id: "fxaDeviceNameGroup"
});
chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.addSetting({
  id: "fxaDeviceName",
  deps: ["uiStateUpdate"],
  get() {
    return lazy.Weave.Service.clientsEngine?.localName;
  },
  set(val) {
    lazy.Weave.Service.clientsEngine.localName = val;
  },
  disabled() {
    return SyncHelpers.uiStateStatus !== window.UIState.STATUS_SIGNED_IN;
  },
  getControlConfig(config) {
    if (config.controlAttrs?.defaultvalue) {
      return config;
    }
    const deviceDefaultLocalName = window.fxAccounts?.device?.getDefaultLocalName();
    if (deviceDefaultLocalName) {
      return {
        ...config,
        controlAttrs: {
          ...config.controlAttrs,
          defaultvalue: deviceDefaultLocalName
        }
      };
    }
    return config;
  }
});
chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.addSetting({
  id: "fxaConnectAnotherDevice",
  getControlConfig(config) {
    if (SyncHelpers.connectAnotherDeviceHref) {
      return {
        ...config,
        controlAttrs: {
          ...config.controlAttrs,
          href: SyncHelpers.connectAnotherDeviceHref
        }
      };
    }
    return config;
  },
  setup(emitChange) {
    window.FxAccounts.config.promiseConnectDeviceURI(SyncHelpers.getEntryPoint()).then(connectURI => {
      SyncHelpers.connectAnotherDeviceHref = connectURI;
      emitChange();
    });
  }
});

// Import section

chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.addSetting({
  id: "data-migration",
  visible: () => !Services.policies || Services.policies.isAllowed("profileImport"),
  onUserClick() {
    window.gMainPane.showMigrationWizardDialog();
  }
});

// Profiles section

chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.addSetting({
  id: "profilesPane",
  onUserClick(e) {
    e.preventDefault();
    window.gotoPref("paneProfiles");
  }
});
chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.addSetting({
  id: "profilesSettings",
  visible() {
    return lazy.SelectableProfileService.isEnabled;
  },
  onUserClick: e => {
    e.preventDefault();
    window.gotoPref("profiles");
  }
});
chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.addSetting({
  id: "manageProfiles",
  onUserClick: e => {
    e.preventDefault();
    // Using the existing function for now, since privacy.js also calls it
    window.gMainPane.manageProfiles();
  }
});
chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.addSetting({
  id: "copyProfile",
  deps: ["copyProfileSelect"],
  disabled: ({
    copyProfileSelect
  }) => !copyProfileSelect.value,
  onUserClick: (e, {
    copyProfileSelect
  }) => {
    e.preventDefault();
    lazy.SelectableProfileService.getProfile(copyProfileSelect.value).then(profile => {
      profile?.copyProfile();
      copyProfileSelect.config.set("");
    });
  }
});
chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.addSetting({
  id: "copyProfileBox",
  visible: () => lazy.SelectableProfileService.initialized
});
chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.addSetting({
  id: "copyProfileError",
  _hasError: false,
  setup(emitChange) {
    this.emitChange = emitChange;
  },
  visible() {
    return this._hasError;
  },
  setError(value) {
    this._hasError = !!value;
    this.emitChange();
  }
});
chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.addSetting(class ProfileList extends chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.AsyncSetting {
  static id = "profileList";
  static PROFILE_UPDATED_OBS = "sps-profiles-updated";
  setup() {
    Services.obs.addObserver(this.emitChange, ProfileList.PROFILE_UPDATED_OBS);
    return () => {
      Services.obs.removeObserver(this.emitChange, ProfileList.PROFILE_UPDATED_OBS);
    };
  }
  async get() {
    let profiles = await lazy.SelectableProfileService.getAllProfiles();
    return profiles;
  }
});
chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.addSetting({
  id: "copyProfileSelect",
  deps: ["profileList"],
  _selectedProfile: null,
  setup(emitChange) {
    this.emitChange = emitChange;
    document.l10n.formatValue("preferences-copy-profile-select").then(result => this.placeholderString = result);
  },
  get() {
    return this._selectedProfile;
  },
  set(inputVal) {
    this._selectedProfile = inputVal;
    this.emitChange();
  },
  getControlConfig(config, {
    profileList
  }) {
    config.options = profileList.value.map(profile => {
      return {
        controlAttrs: {
          label: profile.name
        },
        value: profile.id
      };
    });

    // Put the placeholder at the front of the list.
    config.options.unshift({
      controlAttrs: {
        label: this.placeholderString
      },
      value: ""
    });
    return config;
  }
});
chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.addSetting({
  id: "copyProfileHeader",
  visible: () => lazy.SelectableProfileService.initialized
});

// Backup section

chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.addSetting({
  id: "backupSettings",
  setup(emitChange) {
    Services.obs.addObserver(emitChange, "backup-service-status-updated");
    return () => Services.obs.removeObserver(emitChange, "backup-service-status-updated");
  },
  visible: () => {
    let bs = lazy.BackupService.init();
    return bs.archiveEnabledStatus.enabled || bs.restoreEnabledStatus.enabled;
  }
});
chrome_browser_content_preferences_config_SettingGroupManager_mjs__WEBPACK_IMPORTED_MODULE_1__.SettingGroupManager.registerGroups({
  defaultBrowserSync: window.createDefaultBrowserConfig({
    includeIsDefaultPane: false,
    inProgress: true,
    hiddenFromSearch: true
  }),
  account: {
    inProgress: true,
    l10nId: "account-group-label2",
    headingLevel: 2,
    iconSrc: "chrome://browser/skin/preferences/mozilla-logo.svg",
    items: [{
      id: "noFxaAccountGroup",
      control: "moz-box-group",
      items: [{
        id: "noFxaAccount",
        control: "placeholder-message",
        l10nId: "account-placeholder2"
      }, {
        id: "noFxaSignIn",
        control: "moz-box-link",
        l10nId: "sync-signedout-account-short"
      }]
    }, {
      id: "fxaSignedInGroup",
      control: "moz-box-group",
      items: [{
        id: "fxaLoginVerified",
        control: "moz-box-item",
        l10nId: "sync-account-signed-in",
        l10nArgs: {
          email: ""
        },
        iconSrc: "chrome://browser/skin/fxa/avatar-color.svg",
        controlAttrs: {
          layout: "large-icon"
        }
      }, {
        id: "verifiedManage",
        control: "moz-box-link",
        l10nId: "sync-manage-account2",
        controlAttrs: {
          href: "https://accounts.firefox.com/settings"
        }
      }, {
        id: "fxaUnlinkButton",
        control: "moz-box-button",
        l10nId: "sync-sign-out2"
      }]
    }, {
      id: "fxaUnverifiedGroup",
      control: "moz-box-group",
      items: [{
        id: "fxaLoginUnverified",
        control: "placeholder-message",
        l10nId: "sync-signedin-unverified2",
        l10nArgs: {
          email: ""
        }
      }, {
        id: "verifyFxaAccount",
        control: "moz-box-link",
        l10nId: "sync-verify-account"
      }, {
        id: "unverifiedUnlinkFxaAccount",
        control: "moz-box-button",
        l10nId: "sync-remove-account"
      }]
    }, {
      id: "fxaLoginRejectedGroup",
      control: "moz-box-group",
      items: [{
        id: "fxaLoginRejected",
        control: "placeholder-message",
        l10nId: "sync-signedin-login-failure2",
        l10nArgs: {
          email: ""
        }
      }, {
        id: "rejectReSignIn",
        control: "moz-box-link",
        l10nId: "sync-sign-in"
      }, {
        id: "rejectUnlinkFxaAccount",
        control: "moz-box-button",
        l10nId: "sync-remove-account"
      }]
    }]
  },
  sync: {
    inProgress: true,
    l10nId: "sync-group-label",
    headingLevel: 2,
    iconSrc: "chrome://browser/skin/sync.svg",
    items: [{
      id: "syncNoFxaSignIn",
      l10nId: "sync-signedout-account-signin-4",
      control: "moz-box-link",
      iconSrc: "chrome://global/skin/icons/warning.svg",
      controlAttrs: {
        id: "noFxaSignIn"
      }
    }, {
      id: "syncConfigured",
      control: "moz-box-group",
      items: [{
        id: "syncStatus",
        l10nId: "prefs-syncing-on-2",
        control: "moz-box-item",
        iconSrc: "chrome://global/skin/icons/check-filled.svg",
        items: [{
          id: "syncNow",
          control: "moz-button",
          l10nId: "prefs-sync-now-button-2",
          slot: "actions"
        }, {
          id: "syncing",
          control: "moz-button",
          l10nId: "prefs-syncing-button-2",
          slot: "actions"
        }]
      }, {
        id: "syncEnginesList",
        control: "sync-engines-list"
      }, {
        id: "syncChangeOptions",
        control: "moz-box-button",
        l10nId: "sync-manage-options-2"
      }, {
        id: "syncDisconnect",
        control: "moz-box-button",
        l10nId: "settings-sync-disconnect-button"
      }]
    }, {
      id: "syncNotConfigured",
      l10nId: "prefs-syncing-off-2",
      control: "moz-box-item",
      iconSrc: "chrome://global/skin/icons/warning.svg",
      items: [{
        id: "syncSetup",
        control: "moz-button",
        l10nId: "prefs-sync-turn-on-syncing-2",
        slot: "actions"
      }]
    }, {
      id: "fxaDeviceNameSection",
      l10nId: "sync-device-name-header-2",
      control: "moz-fieldset",
      controlAttrs: {
        ".headingLevel": 3
      },
      items: [{
        id: "fxaDeviceNameGroup",
        control: "moz-box-group",
        items: [{
          id: "fxaDeviceName",
          control: "sync-device-name"
        }, {
          id: "fxaConnectAnotherDevice",
          l10nId: "sync-connect-another-device-2",
          control: "moz-box-link",
          iconSrc: "chrome://browser/skin/device-phone.svg",
          controlAttrs: {
            id: "connect-another-device",
            href: "https://accounts.firefox.com/pair"
          }
        }]
      }]
    }]
  },
  importBrowserData: {
    l10nId: "preferences-data-migration-group",
    headingLevel: 2,
    iconSrc: "chrome://browser/skin/import.svg",
    items: [{
      id: "data-migration",
      l10nId: "preferences-data-migration-button",
      control: "moz-box-button"
    }]
  },
  profilePane: {
    headingLevel: 2,
    id: "browserProfilesGroupPane",
    l10nId: "preferences-profiles-subpane-description",
    supportPage: "profile-management",
    items: [{
      id: "manageProfiles",
      control: "moz-box-button",
      l10nId: "preferences-manage-profiles-button"
    }, {
      id: "copyProfileHeader",
      l10nId: "preferences-copy-profile-header",
      headingLevel: 2,
      supportPage: "profile-management",
      control: "moz-fieldset",
      items: [{
        id: "copyProfileBox",
        l10nId: "preferences-profile-to-copy",
        control: "moz-box-item",
        items: [{
          id: "copyProfileSelect",
          control: "moz-select",
          slot: "actions"
        }, {
          id: "copyProfile",
          l10nId: "preferences-copy-profile-button",
          control: "moz-button",
          slot: "actions",
          controlAttrs: {
            type: "primary"
          }
        }]
      }]
    }]
  },
  profiles: {
    id: "profilesGroup",
    l10nId: "preferences-profiles-section-header",
    headingLevel: 2,
    supportPage: "profile-management",
    items: [{
      id: "profilesSettings",
      control: "moz-box-button",
      l10nId: "preferences-profiles-settings-button"
    }]
  },
  backup: {
    l10nId: "settings-data-backup-header2",
    headingLevel: 2,
    supportPage: "firefox-backup",
    iconSrc: "chrome://global/skin/icons/reload.svg",
    items: [{
      id: "backupSettings",
      control: "backup-settings"
    }]
  }
});

/***/ }),

/***/ 93275:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Preference: () => (/* binding */ Preference)
/* harmony export */ });
/* harmony import */ var chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76458);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


const {
  EventEmitter
} = ChromeUtils.importESModule("resource://gre/modules/EventEmitter.sys.mjs");

/**
 * @typedef {string | boolean | number | nsIFile | void} PreferenceValue
 */

/**
 * @typedef {object} PreferenceConfig
 * @property {string} id
 * @property {string} type
 * @property {boolean} [inverted]
 */

/**
 * @param {string} name
 * @param {string} value
 * @returns {NodeListOf<HTMLInputElement>}
 */
function getElementsByAttribute(name, value) {
  // If we needed to defend against arbitrary values, we would escape
  // double quotes (") and escape characters (\) in them, i.e.:
  //   ${value.replace(/["\\]/g, '\\$&')}
  return document.querySelectorAll(`[${name}="${value}"]`);
}
class Preference extends EventEmitter {
  /**
   * @type {PreferenceValue}
   */
  _value;

  /**
   * @param {PreferenceConfig} configInfo
   */
  constructor({
    id,
    type,
    inverted
  }) {
    super();
    this.on("change", this.onChange.bind(this));
    this._value = null;
    this.readonly = false;
    this._useDefault = false;
    this.batching = false;
    this.id = id;
    this.type = type;
    this.inverted = !!inverted;

    // In non-instant apply mode, we must try and use the last saved state
    // from any previous opens of a child dialog instead of the value from
    // preferences, to pick up any edits a user may have made.

    if (chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.type == "child" && window.opener && window.opener.Preferences && window.opener.document.nodePrincipal.isSystemPrincipal) {
      // Try to find the preference in the parent window.
      const preference = window.opener.Preferences.get(this.id);

      // Don't use the value setter here, we don't want updateElements to be
      // prematurely fired.
      this._value = preference ? preference.value : this.valueFromPreferences;
    } else {
      this._value = this.valueFromPreferences;
    }
  }
  reset() {
    // defer reset until preference update
    this.value = undefined;
  }
  _reportUnknownType() {
    const msg = `Preference with id=${this.id} has unknown type ${this.type}.`;
    Services.console.logStringMessage(msg);
  }

  /**
   * @param {HTMLInputElement} aElement
   */
  setElementValue(aElement) {
    if (this.locked) {
      aElement.disabled = true;
    }
    if (aElement.labels?.length) {
      for (let label of aElement.labels) {
        /** @type {Element} */label.toggleAttribute("disabled", this.locked);
      }
    }
    if (!this.isElementEditable(aElement)) {
      return;
    }
    let rv = undefined;
    if (chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences._syncFromPrefListeners.has(aElement)) {
      rv = chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences._syncFromPrefListeners.get(aElement)(aElement);
    }
    let val = rv;
    if (val === undefined) {
      val = chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.instantApply ? this.valueFromPreferences : this.value;
    }
    // if the preference is marked for reset, show default value in UI
    if (val === undefined) {
      val = this.defaultValue;
    }

    /**
     * Initialize a UI element property with a value. Handles the case
     * where an element has not yet had a XBL binding attached for it and
     * the property setter does not yet exist by setting the same attribute
     * on the XUL element using DOM apis and assuming the element's
     * constructor or property getters appropriately handle this state.
     *
     * @param {Element} element
     * @param {string} attribute
     * @param {string} value
     */
    function setValue(element, attribute, value) {
      if (attribute in element) {
        // @ts-expect-error The property might not be writable...
        element[attribute] = value;
      } else if (attribute === "checked" || attribute === "pressed") {
        // The "checked" attribute can't simply be set to the specified value;
        // it has to be set if the value is true and removed if the value
        // is false in order to be interpreted correctly by the element.
        if (value) {
          // In theory we can set it to anything; however xbl implementation
          // of `checkbox` only works with "true".
          element.setAttribute(attribute, "true");
        } else {
          element.removeAttribute(attribute);
        }
      } else {
        element.setAttribute(attribute, value);
      }
    }
    if (aElement.localName == "checkbox" || aElement.localName == "moz-checkbox" || aElement.localName == "input" && aElement.type == "checkbox") {
      setValue(aElement, "checked", val);
    } else if (aElement.localName == "moz-toggle") {
      setValue(aElement, "pressed", val);
    } else {
      setValue(aElement, "value", val);
    }
  }

  /**
   * @param {HTMLElement} aElement
   * @returns {PreferenceValue}
   */
  getElementValue(aElement) {
    if (chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences._syncToPrefListeners.has(aElement)) {
      try {
        const rv = chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences._syncToPrefListeners.get(aElement)(aElement);
        if (rv !== undefined) {
          return rv;
        }
      } catch (e) {
        console.error(e);
      }
    }

    /**
     * Read the value of an attribute from an element, assuming the
     * attribute is a property on the element's node API. If the property
     * is not present in the API, then assume its value is contained in
     * an attribute, as is the case before a binding has been attached.
     *
     * @param {Element} element
     * @param {string} attribute
     * @returns {any}
     */
    function getValue(element, attribute) {
      if (attribute in element) {
        return element[(/** @type {keyof typeof element} */attribute)];
      }
      return element.getAttribute(attribute);
    }
    let value;
    if (aElement.localName == "checkbox" || aElement.localName == "moz-checkbox" || aElement.localName == "input" && /** @type {HTMLInputElement} */aElement.type == "checkbox") {
      value = getValue(aElement, "checked");
    } else if (aElement.localName == "moz-toggle") {
      value = getValue(aElement, "pressed");
    } else {
      value = getValue(aElement, "value");
    }
    switch (this.type) {
      case "int":
        return parseInt(value, 10) || 0;
      case "bool":
        return typeof value == "boolean" ? value : value == "true";
    }
    return value;
  }

  /**
   * @param {HTMLElement} aElement
   */
  isElementEditable(aElement) {
    switch (aElement.localName) {
      case "checkbox":
      case "input":
      case "radiogroup":
      case "textarea":
      case "menulist":
      case "moz-toggle":
      case "moz-checkbox":
        return true;
    }
    return false;
  }
  updateElements() {
    let startTime = ChromeUtils.now();
    if (!this.id) {
      return;
    }
    const elements = getElementsByAttribute("preference", this.id);
    for (const element of elements) {
      this.setElementValue(element);
    }
    ChromeUtils.addProfilerMarker("Preferences", {
      startTime,
      captureStack: true
    }, `updateElements for ${this.id}`);
  }
  onChange() {
    this.updateElements();
  }

  /**
   * @type {PreferenceValue}
   */
  get value() {
    return this._value;
  }

  /**
   * @param {PreferenceValue} val
   */
  set value(val) {
    if (this.value !== val) {
      this._value = val;
      if (chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.instantApply) {
        this.valueFromPreferences = val;
      }
      this.emit("change");
    }
  }

  /**
   * @type {boolean}
   */
  get locked() {
    return Services.prefs.prefIsLocked(this.id);
  }

  /**
   * @param {boolean | string} val
   * @returns {void}
   */
  updateControlDisabledState(val) {
    if (!this.id) {
      return;
    }
    val = val || this.locked;
    const elements = getElementsByAttribute("preference", this.id);
    for (const element of elements) {
      element.disabled = val;
      const labels = getElementsByAttribute("control", element.id);
      for (const label of labels) {
        label.disabled = val;
      }
    }
  }
  get hasUserValue() {
    return Services.prefs.prefHasUserValue(this.id) && this.value !== undefined;
  }

  /** @returns {PreferenceValue} */
  get defaultValue() {
    this._useDefault = true;
    const val = this.valueFromPreferences;
    this._useDefault = false;
    return val;
  }
  get _branch() {
    return this._useDefault ? chrome_global_content_preferences_Preferences_mjs__WEBPACK_IMPORTED_MODULE_0__.Preferences.defaultBranch : Services.prefs;
  }

  /**
   * @type {PreferenceValue}
   */
  get valueFromPreferences() {
    try {
      // Force a resync of value with preferences.
      switch (this.type) {
        case "int":
          return this._branch.getIntPref(this.id);
        case "bool":
          {
            const val = this._branch.getBoolPref(this.id);
            return this.inverted ? !val : val;
          }
        case "wstring":
          return this._branch.getComplexValue(this.id, Ci.nsIPrefLocalizedString).data;
        case "string":
        case "unichar":
          return this._branch.getStringPref(this.id);
        case "fontname":
          {
            const family = this._branch.getStringPref(this.id);
            if (!family) {
              return family;
            }
            const fontEnumerator = Cc["@mozilla.org/gfx/fontenumerator;1"].createInstance(Ci.nsIFontEnumerator);
            return fontEnumerator.getStandardFamilyName(family);
          }
        case "file":
          {
            const f = this._branch.getComplexValue(this.id, Ci.nsIFile);
            return f;
          }
        default:
          this._reportUnknownType();
      }
    } catch (e) {}
    return null;
  }

  /**
   * @param {PreferenceValue} val
   */
  set valueFromPreferences(val) {
    // Exit early if nothing to do.
    if (this.readonly || this.valueFromPreferences == val) {
      return;
    }

    // The special value undefined means 'reset preference to default'.
    if (val === undefined) {
      Services.prefs.clearUserPref(this.id);
      return;
    }

    // Force a resync of preferences with value.
    switch (this.type) {
      case "int":
        Services.prefs.setIntPref(this.id, /** @type {number} */val);
        break;
      case "bool":
        Services.prefs.setBoolPref(this.id, this.inverted ? !val : !!val);
        break;
      case "wstring":
        {
          const pls = Cc["@mozilla.org/pref-localizedstring;1"].createInstance(Ci.nsIPrefLocalizedString);
          pls.data = /** @type {string} */val;
          Services.prefs.setComplexValue(this.id, Ci.nsIPrefLocalizedString, pls);
          break;
        }
      case "string":
      case "unichar":
      case "fontname":
        Services.prefs.setStringPref(this.id, /** @type {string} */val);
        break;
      case "file":
        {
          let lf;
          if (typeof val == "string") {
            lf = Cc["@mozilla.org/file/local;1"].createInstance(Ci.nsIFile);
            lf.persistentDescriptor = val;
            if (!lf.exists()) {
              lf.initWithPath(val);
            }
          } else {
            lf = /** @type {nsIFile} */val.QueryInterface(Ci.nsIFile);
          }
          Services.prefs.setComplexValue(this.id, Ci.nsIFile, lf);
          break;
        }
      default:
        this._reportUnknownType();
    }
    if (!this.batching) {
      Services.prefs.savePrefFile(null);
    }
  }
}

/***/ })

}]);
//# sourceMappingURL=sync-engine-list-sync-engines-list-stories.08edbcc9.iframe.bundle.js.map