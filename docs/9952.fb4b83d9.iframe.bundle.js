"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[9952],{

/***/ 49952:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\ntabbrowser-empty-tab-title = New Tab\ntabbrowser-empty-private-tab-title = New Private Tab\n\ntabbrowser-menuitem-close-tab =\n    .label = Close Tab\ntabbrowser-menuitem-close =\n    .label = Close\n\n# Displayed as a tooltip on container tabs\n# Variables:\n#   $title (String): the title of the current tab.\n#   $containerName (String): the name of the current container.\ntabbrowser-container-tab-title = { $title } — { $containerName }\n\n# This text serves as an on-screen tooltip as well as an accessible name for\n# the \"X\" button that is shown on the active tab or, when multiple tabs are\n# selected, to all their \"X\" buttons.\n# Variables:\n#   $tabCount (Number): The number of tabs that will be closed.\ntabbrowser-close-tabs-button =\n    .tooltiptext =\n        { $tabCount ->\n            [one] Close tab\n           *[other] Close { $tabCount } tabs\n        }\n\n## Tooltips for tab audio control\n## Variables:\n##   $tabCount (Number): The number of tabs that will be affected.\n\n# Variables:\n#   $shortcut (String): The keyboard shortcut for \"Mute tab\".\ntabbrowser-mute-tab-audio-tooltip =\n    .label =\n        { $tabCount ->\n            [one] Mute tab ({ $shortcut })\n           *[other] Mute { $tabCount } tabs ({ $shortcut })\n        }\n# Variables:\n#   $shortcut (String): The keyboard shortcut for \"Unmute tab\".\ntabbrowser-unmute-tab-audio-tooltip =\n    .label =\n        { $tabCount ->\n            [one] Unmute tab ({ $shortcut })\n           *[other] Unmute { $tabCount } tabs ({ $shortcut })\n        }\ntabbrowser-mute-tab-audio-background-tooltip =\n    .label =\n        { $tabCount ->\n            [one] Mute tab\n           *[other] Mute { $tabCount } tabs\n        }\ntabbrowser-unmute-tab-audio-background-tooltip =\n    .label =\n        { $tabCount ->\n            [one] Unmute tab\n           *[other] Unmute { $tabCount } tabs\n        }\ntabbrowser-unblock-tab-audio-tooltip =\n    .label =\n        { $tabCount ->\n            [one] Play tab\n           *[other] Play { $tabCount } tabs\n        }\n\n## Confirmation dialog when closing a window with more than one tab open,\n## or when quitting when only one window is open.\n\n# The singular form is not considered since this string is used only for multiple tabs.\n# Variables:\n#   $tabCount (Number): The number of tabs that will be closed.\ntabbrowser-confirm-close-tabs-title =\n    { $tabCount ->\n       *[other] Close { $tabCount } tabs?\n    }\ntabbrowser-confirm-close-tabs-button = Close tabs\ntabbrowser-ask-close-tabs-checkbox = Ask before closing multiple tabs\n\n## Confirmation dialog when quitting using the menu and multiple windows are open.\n\n# The forms for 0 or 1 items are not considered since this string is used only for\n# multiple windows.\n# Variables:\n#   $windowCount (Number): The number of windows that will be closed.\ntabbrowser-confirm-close-windows-title =\n    { $windowCount ->\n       *[other] Close { $windowCount } windows?\n    }\ntabbrowser-confirm-close-windows-button =\n    { PLATFORM() ->\n        [windows] Close and exit\n       *[other] Close and quit\n    }\n\n## Confirmation dialog when quitting using the keyboard shortcut (Ctrl/Cmd+Q)\n## Windows does not show a prompt on quit when using the keyboard shortcut by default.\n\ntabbrowser-confirm-close-tabs-with-key-title = Close window and quit { -brand-short-name }?\ntabbrowser-confirm-close-tabs-with-key-button = Quit { -brand-short-name }\n# Variables:\n#   $quitKey (String): the text of the keyboard shortcut for quitting.\ntabbrowser-ask-close-tabs-with-key-checkbox = Ask before quitting with { $quitKey }\n\n## Confirmation dialog when quitting using the keyboard shortcut (Ctrl/Cmd+Q)\n## and browser.warnOnQuitShortcut is true.\n\ntabbrowser-confirm-close-warn-shortcut-title = Quit { -brand-short-name } or close current tab?\ntabbrowser-confirm-close-windows-warn-shortcut-button =\n    { PLATFORM() ->\n        [windows] Exit { -brand-short-name }\n       *[other] Quit { -brand-short-name }\n    }\ntabbrowser-confirm-close-tab-only-button = Close current tab\n\n## Confirmation dialog when opening multiple tabs simultaneously\n\ntabbrowser-confirm-open-multiple-tabs-title = Confirm open\n# Variables:\n#   $tabCount (Number): The number of tabs that will be opened.\ntabbrowser-confirm-open-multiple-tabs-message =\n    { $tabCount ->\n       *[other] You are about to open { $tabCount } tabs. This might slow down { -brand-short-name } while the pages are loading. Are you sure you want to continue?\n    }\ntabbrowser-confirm-open-multiple-tabs-button = Open tabs\ntabbrowser-confirm-open-multiple-tabs-checkbox = Warn me when opening multiple tabs might slow down { -brand-short-name }\n\n## Confirmation dialog for enabling caret browsing\n\ntabbrowser-confirm-caretbrowsing-title = Caret Browsing\ntabbrowser-confirm-caretbrowsing-message = Pressing F7 turns Caret Browsing on or off. This feature places a moveable cursor in web pages, allowing you to select text with the keyboard. Do you want to turn Caret Browsing on?\ntabbrowser-confirm-caretbrowsing-checkbox = Do not show me this dialog box again.\n\n## Confirmation dialog for closing all duplicate tabs\n\ntabbrowser-confirm-close-all-duplicate-tabs-title = Close duplicate tabs?\ntabbrowser-confirm-close-all-duplicate-tabs-text = We’ll close duplicate tabs in this window. The last active\n tab will stay open.\ntabbrowser-confirm-close-all-duplicate-tabs-button-closetabs = Close tabs\n\n##\n\n# Variables:\n#   $domain (String): URL of the page that is trying to steal focus.\ntabbrowser-allow-dialogs-to-get-focus =\n    .label = Allow notifications like this from { $domain } to take you to their tab\n\ntabbrowser-customizemode-tab-title = Customize { -brand-short-name }\n\n## Context menu buttons, of which only one will be visible at a time\n\ntabbrowser-context-mute-tab =\n    .label = Mute Tab\n    .accesskey = M\ntabbrowser-context-unmute-tab =\n    .label = Unmute Tab\n    .accesskey = m\n# The accesskey should match the accesskey for tabbrowser-context-mute-tab\ntabbrowser-context-mute-selected-tabs =\n    .label = Mute Tabs\n    .accesskey = M\n# The accesskey should match the accesskey for tabbrowser-context-unmute-tab\ntabbrowser-context-unmute-selected-tabs =\n    .label = Unmute Tabs\n    .accesskey = m\n\n# This string is used as an additional tooltip and accessibility description for tabs playing audio\ntabbrowser-tab-audio-playing-description = Playing audio\n\n## Ctrl-Tab dialog\n\n# Variables:\n#   $tabCount (Number): The number of tabs in the current browser window. It will always be 2 at least.\ntabbrowser-ctrl-tab-list-all-tabs =\n    .label =\n        { $tabCount ->\n           *[other] List All { $tabCount } Tabs\n        }\n\n## Tab manager menu buttons\n\ntabbrowser-manager-mute-tab =\n  .tooltiptext = Mute tab\ntabbrowser-manager-unmute-tab =\n  .tooltiptext = Unmute tab\ntabbrowser-manager-close-tab =\n  .tooltiptext = Close tab\n\n## Tab Groups\n\ntab-group-name-default = Unnamed Group\ntab-group-editor-title-create = Create tab group\ntab-group-editor-title-edit = Manage tab group\ntab-group-editor-name-label = Name\ntab-group-editor-name-field =\n  .placeholder = Example: Shopping\ntab-group-editor-cancel =\n  .label = Cancel\n  .accesskey = C\n\ntab-group-menu-header = Tab groups\n\ntab-context-unnamed-group =\n    .label = Unnamed group\n\n## Variables:\n##  $tabCount (Number): the number of tabs that are affected by the action.\n\ntab-context-move-tab-to-new-group =\n    .label =\n        { $tabCount ->\n            [1] Add Tab to New Group\n           *[other] Add Tabs to New Group\n        }\n    .accesskey = G\ntab-context-move-tab-to-group =\n    .label =\n        { $tabCount ->\n            [1] Add Tab to Group\n           *[other] Add Tabs to Group\n        }\n    .accesskey = G\n\ntab-group-editor-action-new-tab =\n    .label = New tab in group\ntab-group-editor-action-new-window =\n    .label = Move group to new window\ntab-group-editor-action-save =\n    .label = Save and close group\ntab-group-editor-action-ungroup =\n    .label = Ungroup tabs\ntab-group-editor-action-delete =\n    .label = Delete group\ntab-group-editor-done =\n    .label = Done\n    .accessKey = D\n\ntab-context-reopen-tab-group =\n    .label = Reopen tab group\n\n# Variables:\n#  $groupCount (Number): the number of tab groups that are affected by the action.\ntab-context-ungroup-tab =\n    .label =\n        { $groupCount ->\n            [1] Remove from Group\n           *[other] Remove from Groups\n        }\n    .accesskey = R\n";

/***/ })

}]);