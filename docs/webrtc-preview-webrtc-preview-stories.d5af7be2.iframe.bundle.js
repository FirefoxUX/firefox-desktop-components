"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[48,8456],{

/***/ 10030:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Camera: () => (/* binding */ Camera),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11540);
/* harmony import */ var chrome_global_content_elements_moz_card_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30048);
/* harmony import */ var _webrtc_preview_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27735);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// eslint-disable-next-line import/no-unresolved



window.MozXULElement.insertFTLIfNeeded("browser/webrtc-preview.ftl");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Domain-specific UI Widgets/WebRTC/Preview",
  component: "webrtc-preview",
  argTypes: {
    deviceId: {
      control: "text"
    },
    mediaSource: {
      control: "select",
      options: ["camera", "screen", "window", "browser"]
    },
    showPreviewControlButtons: {
      control: {
        type: "boolean"
      }
    }
  }
});
const Template = (args, context) => {
  // Get deviceId from loaded data if available
  const deviceId = context?.loaded?.deviceId || args.deviceId;

  // If deviceId is not available show an error message.
  if (!deviceId) {
    return (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
      <moz-card style="position: relative; width: 25rem;">
        <div style="padding: 1rem; text-align: center;">
          No device or no permission granted.
        </div>
      </moz-card>
    `;
  }
  const element = (0,lit_all_mjs__WEBPACK_IMPORTED_MODULE_0__.html)`
    <div style="position: relative; width: 25rem;">
      <webrtc-preview
        .deviceId=${deviceId}
        .mediaSource=${args.mediaSource}
        .showPreviewControlButtons=${args.showPreviewControlButtons}
      ></webrtc-preview>
    </div>
  `;
  return element;
};
const getDeviceId = async () => {
  try {
    // Request device access - this will show the permission prompt / device
    // picker to the user
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      mediaSource: "camera"
    });

    // Get the video track to extract the device ID
    const videoTrack = stream.getVideoTracks()[0];
    const deviceId = videoTrack.getSettings().deviceId;

    // Stop the stream since we only needed it to get the device ID
    stream.getTracks().forEach(track => track.stop());
    return deviceId || "";
  } catch (error) {
    console.warn("Could not get device:", error);
    return "";
  }
};
const Camera = Template.bind({});
Camera.args = {
  deviceId: "",
  mediaSource: "camera",
  showPreviewControlButtons: true
};
Camera.loaders = [async () => {
  const deviceId = await getDeviceId();
  return {
    deviceId
  };
}];
Camera.play = async ({
  args,
  loaded
}) => {
  args.deviceId = loaded.deviceId;
};

/***/ }),

/***/ 27735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebRTCPreview: () => (/* binding */ WebRTCPreview)
/* harmony export */ });
/* harmony import */ var browser_components_webrtc_content_webrtc_preview_webrtc_preview_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43875);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11540);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48334);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



window.MozXULElement?.insertFTLIfNeeded("browser/webrtc-preview.ftl");

/**
 * A class to handle a preview of a WebRTC stream.
 */
class WebRTCPreview extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static properties = {
    // The ID of the device to preview.
    deviceId: String,
    // The media source type to preview.
    mediaSource: String,
    // Whether to show the preview control buttons.
    showPreviewControlButtons: Boolean,
    // Whether the preview is currently active.
    _previewActive: {
      type: Boolean,
      state: true
    },
    _loading: {
      type: Boolean,
      state: true
    }
  };
  static queries = {
    videoEl: "video"
  };

  // The stream object for the preview. Only set when the preview is active.
  #stream = null;
  constructor() {
    super();

    // By default hide the start preview button.
    this.showPreviewControlButtons = false;
    this._previewActive = false;
    this._loading = false;
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.stopPreview();
  }

  /**
   * Start the preview.
   *
   * @param {object} options - The options for the preview.
   * @param {string} [options.deviceId = null] - The device ID of the camera to
   * use. If null the last used device will be used.
   * @param {string} [options.mediaSource = null] - The media source to use. If
   * null the last used media source will be used.
   * @param {boolean} [options.showPreviewControlButtons = null] - Whether to
   * show the preview control buttons. If null the last used value will be used.
   */
  async startPreview({
    deviceId = null,
    mediaSource = null,
    showPreviewControlButtons = null
  } = {}) {
    // We can only start preview once the element is connected to the DOM and
    // the video element is available.
    // If you run into this error you're calling the preview method too early,
    // or you forgot to add it to the DOM.
    if (!this.isConnected || !this.videoEl) {
      throw new Error("Can not start preview: Not connected yet.");
    }
    if (deviceId != null) {
      this.deviceId = deviceId;
    }
    if (mediaSource != null) {
      this.mediaSource = mediaSource;
    }
    if (showPreviewControlButtons != null) {
      this.showPreviewControlButtons = showPreviewControlButtons;
    }
    if (this.deviceId == null) {
      throw new Error("Missing deviceId");
    }

    // Stop any existing preview.
    this.stopPreview();
    this._loading = true;
    this._previewActive = true;

    // Use the same constraints for both camera and screen share preview.
    let constraints = {
      video: {
        mediaSource: this.mediaSource,
        deviceId: {
          exact: this.deviceId
        },
        frameRate: 30,
        width: 854,
        height: 480
      }
    };
    let stream;
    let currentDeviceId = this.deviceId;
    try {
      stream = await navigator.mediaDevices.getUserMedia(constraints);
    } catch (error) {
      this._loading = false;
      if (error.name == "OverconstrainedError" && error.constraint == "deviceId") {
        // Source has disappeared since enumeration, which can happen.
        // No preview.
        this.stopPreview();
        return;
      }
      console.error(`error in preview: ${error.message} ${error.constraint}`);
    }
    if (this.deviceId != currentDeviceId) {
      this._loading = false;
      // If the deviceId changed while we were waiting for gUM, e.g. because the user selected a different device, restart the preview.
      stream.getTracks().forEach(t => t.stop());
      this.startPreview();
      return;
    }
    this.videoEl.srcObject = stream;
    this.#stream = stream;
  }

  /**
   * Stop the preview.
   */
  stopPreview() {
    // We might interrupt an in-progress load. Make sure we don't show a loading
    // state.
    this._loading = false;

    // Stop any existing playback.
    this.#stream?.getTracks().forEach(t => t.stop());
    this.#stream = null;
    if (this.videoEl) {
      this.videoEl.srcObject = null;
    }
    this._previewActive = false;
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${browser_components_webrtc_content_webrtc_preview_webrtc_preview_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <div id="preview-container">
        <video
          autoplay
          tabindex="-1"
          @play=${() => this._loading = false}
          class=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.classMap)({
      active: this._previewActive
    })}
        ></video>
        <moz-button
          id="show-preview-button"
          class="centered"
          data-l10n-id="webrtc-share-preview-button-show"
          @click=${() => this.startPreview()}
          ?hidden=${this.deviceId == null || !this.showPreviewControlButtons || this._previewActive}
        ></moz-button>
        <img
          id="loading-indicator"
          class="centered"
          src="chrome://global/skin/icons/loading.svg"
          alt="Loading"
          ?hidden=${!this._loading}
        />
      </div>
      <moz-button
        id="stop-preview-button"
        data-l10n-id="webrtc-share-preview-button-hide"
        @click=${() => this.stopPreview()}
        ?hidden=${!this.showPreviewControlButtons || !this._previewActive}
      ></moz-button>
    `;
  }
}
customElements.define("webrtc-preview", WebRTCPreview);

/***/ }),

/***/ 30048:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MozCard)
/* harmony export */ });
/* harmony import */ var toolkit_content_widgets_moz_card_moz_card_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44170);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11540);
/* harmony import */ var chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48334);

/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*-
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */




/**
 * Cards contain content and actions about a single subject.
 * There are two card types:
 * The default type where no type attribute is required and the card
 * will have no extra functionality.
 *
 * The "accordion" type will initially not show any content. The card
 * will contain an arrow to expand the card so that all of the content
 * is visible. You can use the "expanded" attribute to force the accordion
 * card to show its content on initial render.
 *
 *
 * @property {string} heading - The heading text that will be used for the card.
 * @property {string} iconSrc - Path to the icon that should be displayed in the card.
 * @property {string} type - (optional) The type of card. No type specified
 *   will be the default card. The other available type is "accordion"
 * @property {boolean} expanded - A flag to indicate whether the card is
 *  expanded or not. Can be used to expand the content section of the
 *  accordion card on initial render.
 * @slot content - The content to show inside of the card.
 */
class MozCard extends chrome_global_content_lit_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.MozLitElement {
  static queries = {
    detailsEl: "#moz-card-details",
    headingEl: "#heading",
    contentEl: "#content",
    summaryEl: "summary",
    contentSlotEl: "#content-slot"
  };
  static properties = {
    heading: {
      type: String,
      fluent: true
    },
    iconSrc: {
      type: String
    },
    type: {
      type: String,
      reflect: true
    },
    expanded: {
      type: Boolean
    }
  };
  constructor() {
    super();
    this.type = "default";
    this.expanded = false;
  }
  headingTemplate() {
    if (!this.heading) {
      return "";
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <div id="heading-wrapper" part="moz-card-heading-wrapper">
        ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.when)(this.type == "accordion", () => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<div class="chevron-icon"></div>`)}
        ${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.when)(!!this.iconSrc, () => (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`<img
              id="heading-icon"
              src=${this.iconSrc}
              role="presentation"
            />`)}
        <span id="heading" title=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.heading)} part="heading"
          >${this.heading}</span
        >
      </div>
    `;
  }
  cardTemplate() {
    if (this.type === "accordion") {
      return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
        <details
          id="moz-card-details"
          @toggle=${this.onToggle}
          ?open=${this.expanded}
        >
          <summary part="summary">${this.headingTemplate()}</summary>
          <div id="content"><slot id="content-slot"></slot></div>
        </details>
      `;
    }
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <div id="moz-card-details">
        ${this.headingTemplate()}
        <div id="content" aria-describedby="content">
          <slot></slot>
        </div>
      </div>
    `;
  }
  onToggle() {
    this.expanded = this.detailsEl.open;
    this.dispatchEvent(new ToggleEvent("toggle", {
      newState: this.detailsEl.open ? "open" : "closed",
      oldState: this.detailsEl.open ? "closed" : "open"
    }));
  }
  render() {
    return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)`
      <link
        rel="stylesheet"
        href="${toolkit_content_widgets_moz_card_moz_card_css__WEBPACK_IMPORTED_MODULE_0__}"
      />
      <article
        class="moz-card"
        aria-labelledby=${(0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(this.heading ? "heading" : undefined)}
      >
        ${this.cardTemplate()}
      </article>
    `;
  }
}
customElements.define("moz-card", MozCard);

/***/ }),

/***/ 43875:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "webrtc-preview.292979f124a828e525af.css";

/***/ }),

/***/ 44170:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moz-card.d302a3911a68d76f2067.css";

/***/ })

}]);
//# sourceMappingURL=webrtc-preview-webrtc-preview-stories.d5af7be2.iframe.bundle.js.map