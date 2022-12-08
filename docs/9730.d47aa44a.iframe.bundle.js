"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[9730],{

/***/ 69730:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\nblocklist-window2 =\n    .title = Block Lists\n    .style = min-width: 55em\n\nblocklist-description = Choose the list { -brand-short-name } uses to block online trackers. Lists provided by <a data-l10n-name=\"disconnect-link\" title=\"Disconnect\">Disconnect</a>.\nblocklist-close-key =\n    .key = w\n\nblocklist-treehead-list =\n    .label = List\n\nblocklist-dialog=\n    .buttonlabelaccept = Save Changes\n    .buttonaccesskeyaccept = S\n\n\n# This template constructs the name of the block list in the block lists dialog.\n# It combines the list name and description.\n# e.g. \"Standard (Recommended). This list does a pretty good job.\"\n#\n# Variables:\n#   $listName {string, \"Standard (Recommended).\"} - List name.\n#   $description {string, \"This list does a pretty good job.\"} - Description of the list.\nblocklist-item-list-template = { $listName } { $description }\n\nblocklist-item-moz-std-listName = Level 1 block list (Recommended).\nblocklist-item-moz-std-description = Allows some trackers so fewer websites break.\nblocklist-item-moz-full-listName = Level 2 block list.\nblocklist-item-moz-full-description = Blocks all detected trackers. Some websites or content may not load properly.\n";

/***/ })

}]);