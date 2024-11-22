"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[2302],{

/***/ 92302:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at https://mozilla.org/MPL/2.0/.\n\n## Variables:\n##  $tabCount (Number): the number of tabs that are affected by the action.\n\ntab-context-unnamed-group =\n    .label = Unnamed group\n\ntab-context-move-tab-to-new-group =\n    .label =\n        { $tabCount ->\n            [1] Add Tab to New Group\n           *[other] Add Tabs to New Group\n        }\n    .accesskey = G\ntab-context-move-tab-to-group =\n    .label =\n        { $tabCount ->\n            [1] Add Tab to Group\n           *[other] Add Tabs to Group\n        }\n    .accesskey = G\n\ntab-group-editor-action-new-tab =\n  .label = New tab in group\ntab-group-editor-action-new-window =\n  .label = Move group to new window\ntab-group-editor-action-save =\n  .label = Save and close group\ntab-group-editor-action-ungroup =\n  .label = Ungroup tabs\ntab-group-editor-action-delete =\n  .label = Delete group\ntab-group-editor-done =\n  .label = Done\n  .accessKey = D\n\n##\n\n# Variables:\n#  $groupCount (Number): the number of tab groups that are affected by the action.\ntab-context-ungroup-tab =\n  .label =\n      { $groupCount ->\n          [1] Remove from Group\n         *[other] Remove from Groups\n      }\n  .accesskey = R\n";

/***/ })

}]);