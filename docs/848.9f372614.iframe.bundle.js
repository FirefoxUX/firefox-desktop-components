"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[848],{

/***/ 20848:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\n## Error messages for failed HTTP web requests.\n## https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses\n## Variables:\n##   $status (Number) - HTTP status code, for example 403\n\nfirefox-relay-mask-generation-failed = { -relay-brand-name } could not generate a new mask. HTTP error code: { $status }.\nfirefox-relay-get-reusable-masks-failed = { -relay-brand-name } could not find reusable masks. HTTP error code: { $status }.\n\n##\n\nfirefox-relay-must-login-to-account = Sign in to your account to use your { -relay-brand-name } email masks.\nfirefox-relay-get-unlimited-masks =\n    .label = Manage masks\n    .accesskey = M\n# This is followed, on a new line, by firefox-relay-opt-in-subtitle-1\nfirefox-relay-opt-in-title-1 = Protect your email address:\n# This is preceded by firefox-relay-opt-in-title-1 (on a different line), which\n# ends with a colon. You might need to adapt the capitalization of this string.\nfirefox-relay-opt-in-subtitle-1 = Use { -relay-brand-name } email mask\nfirefox-relay-use-mask-title = Use { -relay-brand-name } email mask\nfirefox-relay-opt-in-confirmation-enable-button =\n    .label = Use email mask\n    .accesskey = U\nfirefox-relay-opt-in-confirmation-disable =\n    .label = Don’t show me this again\n    .accesskey = D\nfirefox-relay-opt-in-confirmation-postpone =\n    .label = Not now\n    .accesskey = N\n";

/***/ })

}]);