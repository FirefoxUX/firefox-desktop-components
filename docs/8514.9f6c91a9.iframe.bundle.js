"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[8514],{

/***/ 8514:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\n# Variables:\n#  $retriesLeft (Number): number of tries left\nwebauthn-pin-invalid-prompt =\n    { $retriesLeft ->\n        [0] Wrong PIN! Please enter the correct PIN for your device.\n        [one] Wrong PIN! Please enter the correct PIN for your device. You have { $retriesLeft } attempt left.\n       *[other] Wrong PIN! Please enter the correct PIN for your device. You have { $retriesLeft } attempts left.\n    }\nwebauthn-pin-required-prompt = Please enter the PIN for your device.\n";

/***/ })

}]);