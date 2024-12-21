"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[2200],{

/***/ 72200:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\n## These strings are used in the main menu,\n## and should follow the same capitalization (title case for English).\n## Check menubar.ftl for reference.\n\nrecently-closed-menu-reopen-all-tabs = Reopen All Tabs\nrecently-closed-menu-reopen-all-windows = Reopen All Windows\n\n## These strings are used in the app menu,\n## and should follow the same capitalization (sentence case for English).\n## Check appmenu.ftl for reference.\n\nrecently-closed-panel-reopen-all-tabs = Reopen all tabs\nrecently-closed-panel-reopen-all-windows = Reopen all windows\n\n##\n\n# Variables:\n#   $tabCount (Number): Number of other tabs\n#   $winTitle (String): Window title\nrecently-closed-undo-close-window-label =\n    { $tabCount ->\n        [0] { $winTitle }\n        [one] { $winTitle } (and { $tabCount } other tab)\n       *[other] { $winTitle } (and { $tabCount } other tabs)\n    }\n";

/***/ })

}]);