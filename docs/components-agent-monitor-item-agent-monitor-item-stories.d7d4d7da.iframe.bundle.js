"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[4920,5944,6841],{

/***/ 9538:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-input-text.aed1f2b71b28a087c141.css";

/***/ }),

/***/ 24920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozInputUrl)
/* harmony export */ });
/* harmony import */ var chrome_global_content_elements_moz_input_text_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65944);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



/**
 * A URL input custom element.
 *
 * @tagname moz-input-url
 * @property {string} label - The text of the label element
 * @property {string} name - The name of the input control
 * @property {string} value - The value of the input control
 * @property {boolean} disabled - The disabled state of the input control
 * @property {boolean} readonly - The readonly state of the input control
 * @property {string} iconSrc - The src for an optional icon
 * @property {string} description - The text for the description element that helps describe the input control
 * @property {string} supportPage - Name of the SUMO support page to link to.
 * @property {string} placeholder - Text to display when the input has no value.
 */
class MozInputUrl extends chrome_global_content_elements_moz_input_text_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
  inputTemplate() {
    return super.inputTemplate({
      type: "url"
    });
  }
}
customElements.define("moz-input-url", MozInputUrl);

/***/ }),

/***/ 32984:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "agent-monitor-item.8e3226567fbba550096d.css";

/***/ }),

/***/ 65944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozInputText)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_input_text_moz_input_text_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9538);
/* harmony import */ var _vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * A text input custom element.
 *
 * @tagname moz-input-text
 * @property {string} label - The text of the label element
 * @property {string} name - The name of the input control
 * @property {string} value - The value of the input control
 * @property {boolean} disabled - The disabled state of the input control
 * @property {boolean} readonly - The readonly state of the input control
 * @property {string} iconSrc - The src for an optional icon
 * @property {string} description - The text for the description element that helps describe the input control
 * @property {string} supportPage - Name of the SUMO support page to link to.
 * @property {string} placeholder - Text to display when the input has no value.
 * @property {string} ariaLabel - The aria-label text when there is no visible label.
 * @property {string} ariaDescription - The aria-description text when there is no visible description.
 */
class MozInputText extends _lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozBaseInputElement {
  static properties = {
    placeholder: {
      type: String,
      fluent: true
    },
    readonly: {
      type: Boolean,
      reflect: true
    }
  };
  static inputLayout = "block";
  constructor() {
    super();
    this.value = "";
    this.readonly = false;
  }
  inputStylesTemplate() {
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<link
      rel="stylesheet"
      href="${toolkit_content_widgets_moz_input_text_moz_input_text_css__WEBPACK_IMPORTED_MODULE_0__}"
    />`;
  }
  handleInput(e) {
    this.value = e.target.value;
  }
  inputTemplate(options = {}) {
    let {
      type = "text",
      classes,
      styles,
      inputValue
    } = options;
    return (0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <input
        id="input"
        type=${type}
        class=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(classes)}
        style=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(styles)}
        name=${this.name}
        .value=${inputValue || this.value}
        ?disabled=${this.disabled || this.parentDisabled}
        ?readonly=${this.readonly}
        accesskey=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.accessKey)}
        placeholder=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.placeholder)}
        aria-label=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.ariaLabel ?? undefined)}
        aria-describedby="description"
        aria-description=${(0,_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.hasDescription ? undefined : this.ariaDescription)}
        @input=${this.handleInput}
        @change=${this.redispatchEvent}
      />
    `;
  }
}
customElements.define("moz-input-text", MozInputText);

/***/ }),

/***/ 82145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Create: () => (/* binding */ Create),
/* harmony export */   DisplayCollapsed: () => (/* binding */ DisplayCollapsed),
/* harmony export */   DisplayExpanded: () => (/* binding */ DisplayExpanded),
/* harmony export */   Editing: () => (/* binding */ Editing),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var chrome_browser_content_aiwindow_components_agent_monitor_item_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86360);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/AI Window/Agent Monitor Item",
  component: "agent-monitor-item",
  argTypes: {
    agent: {
      control: "object"
    },
    mode: {
      control: "select",
      options: ["display", "create"]
    },
    expanded: {
      control: "boolean"
    },
    editing: {
      control: "boolean"
    }
  }
});
const AGENT = {
  id: "agent-sony",
  productName: "Nike Men's Vomero Plus Running Shoes",
  url: "soundnest.com/audio/sony-wh-1000xm5",
  faviconText: "S",
  faviconColor: "#e8663a",
  value: "$299",
  valueMeta: "checked 2:14 PM / was $299",
  condition: "",
  conditionPresets: [],
  status: {
    label: "$278 ▼ −7%",
    kind: "triggered"
  },
  cadence: "Auto / on-device",
  history: [{
    when: "Today 2:14 PM",
    oldValue: "$299",
    newValue: "$278",
    note: "−7%"
  }, {
    when: "Jun 24",
    flag: "possible change",
    note: "no notification",
    low: true
  }, {
    when: "Jun 17",
    oldValue: "$319",
    newValue: "$299",
    note: "first checked"
  }]
};
const Template = ({
  agent,
  mode,
  expanded,
  editing
}) => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
  <div style="max-width: 416px;">
    <agent-monitor-item
      .agent=${agent}
      mode=${mode}
      ?expanded=${expanded}
      ?editing=${editing}
    ></agent-monitor-item>
  </div>
`;
const DisplayCollapsed = Template.bind({});
DisplayCollapsed.args = {
  agent: {
    ...AGENT,
    status: {
      label: "Watching",
      kind: "watching"
    }
  },
  mode: "display",
  expanded: false,
  editing: false
};
const DisplayExpanded = Template.bind({});
DisplayExpanded.args = {
  agent: AGENT,
  mode: "display",
  expanded: true,
  editing: false
};
const Editing = Template.bind({});
Editing.args = {
  agent: AGENT,
  mode: "display",
  expanded: true,
  editing: true
};
const Create = Template.bind({});
Create.args = {
  agent: {
    ...AGENT,
    productName: "",
    value: "",
    valueMeta: "found on this page just now",
    status: null,
    history: []
  },
  mode: "create",
  expanded: false,
  editing: false
};

/***/ }),

/***/ 86360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AgentMonitorItem: () => (/* binding */ AgentMonitorItem)
/* harmony export */ });
/* harmony import */ var browser_components_aiwindow_ui_components_agent_monitor_item_agent_monitor_item_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32984);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82242);
/* harmony import */ var chrome_global_content_elements_moz_input_text_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65944);
/* harmony import */ var chrome_global_content_elements_moz_input_url_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24920);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



// eslint-disable-next-line import/no-unassigned-import

// eslint-disable-next-line import/no-unassigned-import


/**
 * A single monitor card:
 * It has three modes and is host-agnostic - monitor data comes
 * in via the 'agent' property and every action is a bubbling CustomEvent for
 * the host to handle. The host also decides the collapse affordance (chat uses
 * the chevron; the page can click-to-expand), so the component only exposes
 * 'expanded'/'editing' state
 *
 * Modes:
 *  - "display": collapsed shows the head  with a chevron and
 *    expanded reveals the value, condition, actions and change history.
 *  - "create": the full form used when setting up a new monitor.
 *
 * Dispatches:
 *  - agent-monitor-item:toggle       detail: { expanded }
 *  - agent-monitor-item:edit-toggle  detail: { editing }
 *  - agent-monitor-item:submit       detail: { mode, id, productName, value, condition, watchUrls }
 *  - agent-monitor-item:cancel
 *  - agent-monitor-item:delete       detail: { id }
 *  - agent-monitor-item:pause        detail: { id }
 *  - agent-monitor-item:check-now    detail: { id }
 *  - agent-monitor-item:open         detail: { id, url }
 *
 * @property {Agent} agent - Monitor data:
 *  {
 *    id: string,
 *    productName: string,
 *    url: string,
 *    faviconText?: string,      // 1-2 char fallback favicon glyph
 *    faviconColor?: string,     // fallback favicon background
 *    value?: string,            // current value, e.g. "$278"
 *    valueMeta?: string,        // e.g. "checked 2:14 PM · was $299"
 *    condition?: string,        // e.g. "the price drops below $270"
 *    conditionPresets?: string[],
 *    status?: { label: string, kind?: "watching"|"triggered"|"paused" },
 *    cadence?: string,          // e.g. "Auto · on-device"
 *    history?: Array<{ when: string, oldValue?: string, newValue?: string,
 *                      note?: string, flag?: string, low?: boolean }>,
 *  }
 * @property {"display"|"create"} mode - Which card layout to render.
 * @property {boolean} expanded - Whether the display card is expanded.
 * @property {boolean} editing - Whether the editable condition field is shown.
 */
class AgentMonitorItem extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    agent: {
      type: Object
    },
    mode: {
      type: String,
      reflect: true
    },
    expanded: {
      type: Boolean,
      reflect: true
    },
    editing: {
      type: Boolean,
      reflect: true
    }
  };
  constructor() {
    super();
    this.agent = {};
    this.mode = "display";
    this.expanded = false;
    this.editing = false;
    this.#draftCondition = null;
    this.#draftUrls = null;
    this.#isAddingUrl = false;
    this.#pendingUrl = "";
    this.#draftName = null;
    this.#draftValue = null;
  }
  #draftCondition;
  #draftUrls;
  #isAddingUrl;
  #pendingUrl;
  #draftName;
  #draftValue;
  willUpdate(changed) {
    if (changed.has("agent")) {
      this.#draftCondition = null;
      this.#draftName = null;
      this.#draftValue = null;
      this.#draftUrls = null;
      this.#pendingUrl = "";
      this.#isAddingUrl = false;
    }
  }
  #dispatch(type, detail) {
    this.dispatchEvent(new CustomEvent(type, {
      detail,
      bubbles: true,
      composed: true
    }));
  }
  get #condition() {
    return this.#draftCondition ?? this.agent?.condition ?? "";
  }
  get #productName() {
    return this.#draftName ?? this.agent?.productName ?? "";
  }
  get #value() {
    return this.#draftValue ?? this.agent?.value ?? "";
  }
  #onNameInput(event) {
    this.#draftName = event.target.value;
  }
  #onValueInput(event) {
    this.#draftValue = event.target.value;
  }
  #onCardClick(e) {
    if (e.target.closest("button")) {
      return;
    }
    this.#onToggle(e);
  }
  #onToggle() {
    this.expanded = !this.expanded;
    this.#dispatch("agent-monitor-item:toggle", {
      expanded: this.expanded
    });
  }
  #onEditToggle() {
    this.editing = !this.editing;
    if (this.editing) {
      this.expanded = true;
    }
    this.#dispatch("agent-monitor-item:edit-toggle", {
      editing: this.editing
    });
  }
  #onConditionInput(event) {
    this.#draftCondition = event.target.value;
  }
  #onPresetClick(preset) {
    this.#draftCondition = preset;
    this.requestUpdate();
  }
  #onSubmit() {
    this.#dispatch("agent-monitor-item:submit", {
      mode: this.mode,
      id: this.agent?.id,
      productName: this.#productName,
      value: this.#value,
      condition: this.#condition,
      watchUrls: this.#collectAddUrls()
    });
  }
  #currentUrls() {
    if (this.#draftUrls) {
      return this.#draftUrls;
    }
    const {
      watchUrls,
      url
    } = this.agent ?? {};
    return watchUrls ?? (url ? [url] : []);
  }
  #collectAddUrls() {
    const urls = [...this.#currentUrls()];
    const pending = (this.#pendingUrl ?? "").trim();
    if (pending && !urls.includes(pending)) {
      urls.push(pending);
    }
    return urls;
  }
  #displayUrl(url) {
    try {
      return new URL(url).hostname;
    } catch {
      return url;
    }
  }
  #onRemoveUrl(url) {
    this.#draftUrls = this.#currentUrls().filter(u => u !== url);
    this.requestUpdate();
  }
  #onAddUrlClick() {
    this.#isAddingUrl = true;
    this.#pendingUrl = "";
    this.requestUpdate();
  }
  #onPendingUrlInput(event) {
    this.#pendingUrl = event.target.value;
  }
  #onPendingUrlKeydown(event) {
    if (event.key !== "Enter") {
      return;
    }
    event.preventDefault();
    const url = event.target.value.trim();
    if (url && !this.#currentUrls().includes(url)) {
      this.#draftUrls = [...this.#currentUrls(), url];
    }
    this.#pendingUrl = "";
    this.#isAddingUrl = false;
    this.requestUpdate();
  }
  #renderFavicon() {
    const {
      url,
      faviconText = ""
    } = this.agent ?? {};
    return faviconText.length ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span class="favicon-sq favicon-fallback">${faviconText}</span>` : (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<img class="favicon-sq" src="page-icon:${url}" alt="" />`;
  }
  #renderStatusChip() {
    const statusInfo = this.agent?.status;
    if (!statusInfo?.label) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span
      class="status-chip"
      data-kind=${statusInfo.kind ?? "watching"}
    >
      ${statusInfo.kind === "watching" ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span class="pulse-dot"></span>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
      ${statusInfo.label}
    </span>`;
  }
  #renderConditionField() {
    const presets = this.agent?.conditionPresets ?? [];
    /* TODO: Add localize strings */
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <div class="field">
        <span class="field-label">Alert me when</span>
        <moz-input-text
          class="monitor-condition-input"
          placeholder="e.g. the price drops below $270"
          .value=${this.#condition}
          @change=${this.#onConditionInput}
          aria-label="Alert condition"
        ></moz-input-text>
        ${presets.length ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div class="chip-row">
              ${presets.map(preset => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<moz-button
                    class="chip ${preset === this.#condition ? "selected" : ""}"
                    @click=${() => this.#onPresetClick(preset)}
                  >
                    ${preset}
                  </moz-button>`)}
            </div>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
      </div>
    `;
  }
  #renderPagesField() {
    /* TODO: Add localize strings */
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <div class="field">
        <span class="field-label">Pages</span>
        <div class="chip-row">
          ${this.#currentUrls().map(url => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span class="page-pill">
                <img class="page-pill-favicon" src="page-icon:${url}" alt="" />
                <span class="page-pill-url">${this.#displayUrl(url)}</span>
                <button
                  type="button"
                  class="page-pill-remove"
                  aria-label="Remove page"
                  @click=${() => this.#onRemoveUrl(url)}
                ></button>
              </span>`)}
          ${this.#isAddingUrl ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<moz-input-url
                class="page-add-input"
                placeholder="Paste a URL"
                aria-label="Add a page URL"
                .value=${this.#pendingUrl}
                @change=${this.#onPendingUrlInput}
                @keydown=${this.#onPendingUrlKeydown}
              ></moz-input-url>` : (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<button
                type="button"
                class="chip chip-add"
                @click=${this.#onAddUrlClick}
              >
                <span class="chip-add-icon" aria-hidden="true"></span>
                Add URL
              </button>`}
        </div>
      </div>
    `;
  }
  #renderHistory() {
    const historyItems = this.agent?.history ?? [];
    if (!historyItems.length) {
      return chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing;
    }
    /* TODO: Add localize strings */
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <hr class="rule" />
      <div class="section-toggle">Change history</div>
      <div class="history">
        ${historyItems.map(item => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div class="history-item ${item.low ? "low" : ""}">
              <span class="when">${item.when}</span>
              ${item.oldValue ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span class="old-value">${item.oldValue}</span
                    ><span class="arrow">→</span>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
              ${item.newValue ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span class="new-value">${item.newValue}</span>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
              ${item.flag ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span class="history-flag">${item.flag}</span>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
              ${item.note ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span class="deemphasized">${item.note}</span>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
            </div>`)}
      </div>
    `;
  }
  #renderCreate() {
    const agent = this.agent ?? {};
    /* TODO: Add localize strings */
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <div class="monitor-card">
        <div class="monitor-card-head">
          ${this.#renderFavicon()}
          ${agent.productName ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span class="monitor-card-title"
                ><span class="monitor-card-name">${agent.productName}</span
                ><span class="monitor-card-url">${agent.url}</span></span
              >` : (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span class="monitor-name-field"
                ><moz-input-text
                  class="monitor-name-input"
                  placeholder="Name this monitor"
                  .value=${this.#draftName}
                  @change=${this.#onNameInput}
                  aria-label="Monitor name"
                ></moz-input-text
                >${agent.url ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span class="monitor-card-url">${agent.url}</span>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}</span
              >`}
        </div>
        ${agent.value ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div class="monitor-value">
              <span class="now">${agent.value}</span>
              ${agent.valueMeta ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span class="from">${agent.valueMeta}</span>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
            </div>` : (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div class="field">
              <span class="field-label">Current price</span>
              <moz-input-text
                class="monitor-price-input"
                placeholder="e.g. $278"
                .value=${this.#draftValue}
                @change=${this.#onValueInput}
                aria-label="Current price"
              ></moz-input-text>
            </div>`}
        ${this.#renderConditionField()} ${this.#renderPagesField()}
        <div class="monitor-card-actions">
          <span class="mono-dim">Runs on-device</span>
          <span class="spacer"></span>
          <button
            type="button"
            class="btn-ghost monitor-button"
            @click=${() => this.#dispatch("agent-monitor-item:cancel", {})}
          >
            Cancel
          </button>
          <button
            type="button"
            class="btn-primary monitor-start"
            @click=${this.#onSubmit}
          >
            Start monitoring
          </button>
        </div>
      </div>
    `;
  }
  #renderDisplay() {
    const agent = this.agent ?? {};
    const subtitle = agent.status?.kind === "watching" ? agent.cadence : agent.url;
    /* TODO: Add localize strings */
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <div class="monitor-card chatcard live" @click=${this.#onCardClick}>
        <div class="monitor-card-head">
          ${this.#renderFavicon()}
          <span class="monitor-card-title"
            ><span class="monitor-card-name">${agent.productName}</span
            ><span class="monitor-card-url"
              >${subtitle ?? agent.url}</span
            ></span
          >
          <span class="spacer"></span>
          ${this.#renderStatusChip()}
          <button
            type="button"
            class="page-action edit"
            title="Edit monitor"
            aria-label="Edit monitor"
            aria-pressed=${this.editing}
            @click=${this.#onEditToggle}
          ></button>
          <button
            type="button"
            class="chev"
            aria-expanded=${this.expanded}
            aria-label="Show monitor details"
            @click=${this.#onToggle}
          ></button>
        </div>
        ${this.expanded ? this.#renderExpand() : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
      </div>
    `;
  }
  #renderExpand() {
    const agent = this.agent ?? {};
    /* TODO: Add localize strings */
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <div class="watch-expand" @click=${e => e.stopPropagation()}>
        ${agent.value ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div class="monitor-value">
              <span class="now">${agent.value}</span>
              ${agent.valueMeta ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<span class="from">${agent.valueMeta}</span>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
            </div>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
        ${this.editing ? this.#renderConditionField() : (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div class="monitor-row">
              <span class="label">Alert me when</span>
              <span class="val">${agent.condition}</span>
            </div>`}
        ${agent.cadence ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div class="monitor-row">
              <span class="label">Check</span
              ><span class="val">${agent.cadence}</span>
            </div>` : chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.nothing}
        <div class="monitor-card-actions">
          <button
            type="button"
            class="page-action danger delete"
            title="Delete monitor"
            aria-label="Delete monitor"
            @click=${() => this.#dispatch("agent-monitor-item:delete", {
      id: agent.id
    })}
          ></button>
          <button
            type="button"
            class="btn-ghost monitor-button"
            @click=${() => this.#dispatch("agent-monitor-item:pause", {
      id: agent.id
    })}
          >
            Pause
          </button>
          <span class="spacer"></span>
          ${this.editing ? (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<button
                type="button"
                class="btn-ghost monitor-button save"
                @click=${this.#onSubmit}
              >
                Save
              </button>` : (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<button
                type="button"
                class="btn-ghost monitor-button check-now"
                @click=${() => this.#dispatch("agent-monitor-item:check-now", {
      id: agent.id
    })}
              >
                Check now
              </button>`}
        </div>
        ${this.#renderHistory()}
      </div>
    `;
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_aiwindow_ui_components_agent_monitor_item_agent_monitor_item_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      ${this.mode === "create" ? this.#renderCreate() : this.#renderDisplay()}
    `;
  }
}
customElements.define("agent-monitor-item", AgentMonitorItem);

/***/ })

}]);
//# sourceMappingURL=components-agent-monitor-item-agent-monitor-item-stories.d7d4d7da.iframe.bundle.js.map