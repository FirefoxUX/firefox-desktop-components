"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[3653],{

/***/ 63653:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\n## Subframe crash notification\n\ncrashed-subframe-message = <strong>Part of this page crashed.</strong> To let { -brand-product-name } know about this issue and get it fixed faster, please submit a report.\n\n# The string for crashed-subframe-title.title should match crashed-subframe-message,\n# but without any markup.\ncrashed-subframe-title =\n  .title = Part of this page crashed. To let { -brand-product-name } know about this issue and get it fixed faster, please submit a report.\ncrashed-subframe-learnmore-link =\n  .value = Learn more\ncrashed-subframe-submit =\n  .label = Submit report\n  .accesskey = S\n\n## Pending crash reports\n\n# Variables:\n#   $reportCount (Number): the number of pending crash reports\npending-crash-reports-message =\n    { $reportCount ->\n        [one] You have an unsent crash report\n       *[other] You have { $reportCount } unsent crash reports\n    }\npending-crash-reports-view-all =\n    .label = View\npending-crash-reports-send =\n    .label = Send\npending-crash-reports-always-send =\n    .label = Always send\n";

/***/ })

}]);