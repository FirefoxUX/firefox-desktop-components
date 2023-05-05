"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[8388],{

/***/ 78388:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\nmztabrow-open-menu-button =\n  .title = Open menu\n\n# Variables:\n#   $date (string) - Date to be formatted based on locale\nmztabrow-date = { DATETIME($date, dateStyle: \"short\") }\n\n# Variables:\n#   $time (string) - Time to be formatted based on locale\nmztabrow-time = { DATETIME($time, timeStyle: \"short\") }\n\n# Variables:\n#   $targetURI (string) - URL of tab that will be opened in the new tab\nmztabrow-tabs-list-tab =\n  .title = Open { $targetURI } in a new tab\n\n# Variables:\n#   $tabTitle (string) - Title of tab being dismissed\nmztabrow-dismiss-tab-button =\n  .title = Dismiss { $tabTitle }\n\n# Used instead of the localized relative time when a timestamp is within a minute or so of now\nmztabrow-just-now-timestamp = Just now\n\n# Strings below are used for context menu options within panel-list.\n# For developers, this duplicates command because the label attribute is required.\n\nmztabrow-delete = Delete\n    .accesskey = D\nmztabrow-forget-about-this-site = Forget About This Site…\n    .accesskey = F\nmztabrow-open-in-window = Open in New Window\n    .accesskey = N\nmztabrow-open-in-private-window = Open in New Private Window\n    .accesskey = P\nmztabrow-add-bookmark = Bookmark…\n    .accesskey = B\nmztabrow-save-to-pocket = Save to { -pocket-brand-name }\n    .accesskey = o\nmztabrow-copy-link = Copy Link\n    .accesskey = L\n";

/***/ })

}]);