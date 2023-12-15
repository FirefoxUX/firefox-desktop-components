"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[8514],{

/***/ 8514:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\n# Variables:\n#  $retriesLeft (Number): number of tries left\nwebauthn-pin-invalid-long-prompt =\n    { $retriesLeft ->\n        [one] Incorrect PIN. You have { $retriesLeft } attempt left before you permanently lose access to the credentials on this device.\n       *[other] Incorrect PIN. You have { $retriesLeft } attempts left before you permanently lose access to the credentials on this device.\n    }\nwebauthn-pin-invalid-short-prompt = Incorrect PIN. Try again.\nwebauthn-pin-required-prompt = Please enter the PIN for your device.\n\nwebauthn-select-sign-result-unknown-account = Unknown account\n\nwebauthn-a-passkey-label = Use a passkey\nwebauthn-another-passkey-label = Use another passkey\n\n# Variables:\n#   $domain (String): the domain of the site.\nwebauthn-specific-passkey-label = Passkey for { $domain }\n\n# Variables:\n#  $retriesLeft (Number): number of tries left\nwebauthn-uv-invalid-long-prompt =\n    { $retriesLeft ->\n        [one] User verification failed. You have { $retriesLeft } attempt left. Try again.\n       *[other] User verification failed. You have { $retriesLeft } attempts left. Try again.\n    }\nwebauthn-uv-invalid-short-prompt = User verification failed. Try again.\n";

/***/ })

}]);