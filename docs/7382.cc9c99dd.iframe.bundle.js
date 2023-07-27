"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[7382],{

/***/ 67382:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\n# Variables:\n#   $addonName (String): localized named of the extension that is asking to change the default search engine.\n#   $currentEngine (String): name of the current search engine.\n#   $newEngine (String): name of the new search engine.\nwebext-default-search-description = { $addonName } would like to change your default search engine from { $currentEngine } to { $newEngine }. Is that OK?\nwebext-default-search-yes =\n    .label = Yes\n    .accesskey = Y\nwebext-default-search-no =\n    .label = No\n    .accesskey = N\n\n# Variables:\n#   $addonName (String): localized named of the extension that was just installed.\naddon-post-install-message = { $addonName } was added.\n\n## A modal confirmation dialog to allow an extension on quarantined domains.\n\n# Variables:\n#   $addonName (String): localized name of the extension.\nwebext-quarantine-confirmation-title =\n    Run { $addonName } on restricted sites?\n\nwebext-quarantine-confirmation-line-1 =\n    To protect your data, this extension is not allowed on this site.\nwebext-quarantine-confirmation-line-2 =\n    Allow this extension if you trust it to read and change your data on sites restricted by { -vendor-short-name }.\n\nwebext-quarantine-confirmation-allow =\n    .label = Allow\n    .accesskey = A\n\nwebext-quarantine-confirmation-deny =\n    .label = Don’t Allow\n    .accesskey = D\n";

/***/ })

}]);