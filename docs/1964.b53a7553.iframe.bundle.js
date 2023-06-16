"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[1964],{

/***/ 81964:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\nfxviewtabrow-open-menu-button =\n  .title = Open menu\n\n# Variables:\n#   $date (string) - Date to be formatted based on locale\nfxviewtabrow-date = { DATETIME($date, dateStyle: \"short\") }\n\n# Variables:\n#   $time (string) - Time to be formatted based on locale\nfxviewtabrow-time = { DATETIME($time, timeStyle: \"short\") }\n\n# Variables:\n#   $targetURI (string) - URL of tab that will be opened in the new tab\nfxviewtabrow-tabs-list-tab =\n  .title = Open { $targetURI } in a new tab\n\n# Variables:\n#   $tabTitle (string) - Title of tab being dismissed\nfxviewtabrow-dismiss-tab-button =\n  .title = Dismiss { $tabTitle }\n\n# Used instead of the localized relative time when a timestamp is within a minute or so of now\nfxviewtabrow-just-now-timestamp = Just now\n\n# Strings below are used for context menu options within panel-list.\n# For developers, this duplicates command because the label attribute is required.\n\nfxviewtabrow-delete = Delete\n    .accesskey = D\nfxviewtabrow-forget-about-this-site = Forget About This Site…\n    .accesskey = F\nfxviewtabrow-open-in-window = Open in New Window\n    .accesskey = N\nfxviewtabrow-open-in-private-window = Open in New Private Window\n    .accesskey = P\n# “Bookmark” is a verb, as in \"Bookmark this page\" (add to bookmarks).\nfxviewtabrow-add-bookmark = Bookmark…\n    .accesskey = B\nfxviewtabrow-save-to-pocket = Save to { -pocket-brand-name }\n    .accesskey = o\nfxviewtabrow-copy-link = Copy Link\n    .accesskey = L\n";

/***/ })

}]);