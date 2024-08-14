"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[2402],{

/***/ 12402:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\n# Message which is shown when Bounce Tracking Protection has detected site as a\n# bounce tracker. Do not translate \"bounce tracker\".\n# Variables:\n#   $siteHost (string): The host portion of the site which has been classified as a tracker.\n#   $gracePeriodSeconds (number): Grace period window in seconds until the site purged (clearing cookies, storages and caches).\nbtp-warning-tracker-classified =\n    { $gracePeriodSeconds ->\n        *[other] “{ $siteHost }” has been classified as a bounce tracker. If it does not receive user activation within the next { $gracePeriodSeconds } seconds it will have its state purged.\n    }\n";

/***/ })

}]);