"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[2071],{

/***/ 62071:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\nnavbar-tooltip-instruction =\n    .value = { PLATFORM() ->\n        [macos] Pull down to show history\n       *[other] Right-click or pull down to show history\n    }\n\n## Back\n\n# Variables\n#   $shortcut (String) - A keyboard shortcut for the Go Back command.\nmain-context-menu-back-2 =\n    .tooltiptext = Go back one page ({ $shortcut })\n    .aria-label = Back\n    .accesskey = B\n\n# This menuitem is only visible on macOS\nmain-context-menu-back-mac =\n    .label = Back\n    .accesskey = B\n\nnavbar-tooltip-back-2 =\n    .value = { main-context-menu-back-2.tooltiptext }\n\ntoolbar-button-back-2 =\n    .label = { main-context-menu-back-2.aria-label }\n\n## Forward\n\n# Variables\n#   $shortcut (String) - A keyboard shortcut for the Go Forward command.\nmain-context-menu-forward-2 =\n    .tooltiptext = Go forward one page ({ $shortcut })\n    .aria-label = Forward\n    .accesskey = F\n\n# This menuitem is only visible on macOS\nmain-context-menu-forward-mac =\n    .label = Forward\n    .accesskey = F\n\nnavbar-tooltip-forward-2 =\n    .value = { main-context-menu-forward-2.tooltiptext }\n\ntoolbar-button-forward-2 =\n    .label = { main-context-menu-forward-2.aria-label }\n\n## Reload\n\nmain-context-menu-reload =\n    .aria-label = Reload\n    .accesskey = R\n\n# This menuitem is only visible on macOS\nmain-context-menu-reload-mac =\n    .label = Reload\n    .accesskey = R\n\ntoolbar-button-reload =\n    .label = { main-context-menu-reload.aria-label }\n\n## Stop\n\nmain-context-menu-stop =\n    .aria-label = Stop\n    .accesskey = S\n\n# This menuitem is only visible on macOS\nmain-context-menu-stop-mac =\n    .label = Stop\n    .accesskey = S\n\ntoolbar-button-stop =\n    .label = { main-context-menu-stop.aria-label }\n\n## Stop-Reload Button\n\ntoolbar-button-stop-reload =\n    .title = { main-context-menu-reload.aria-label }\n\n## Firefox Account Button\n\ntoolbar-button-fxaccount =\n    .label = { -fxaccount-brand-name(capitalization: \"sentence\") }\n    .tooltiptext = { -fxaccount-brand-name(capitalization: \"sentence\") }\n\n## Save Page\n\nmain-context-menu-page-save =\n    .label = Save Page As…\n    .accesskey = P\n\n## Simple menu items\n\nmain-context-menu-bookmark-page =\n    .aria-label = Bookmark Page…\n    .accesskey = m\n    .tooltiptext = Bookmark page\n\n# This menuitem is only visible on macOS\n# Cannot be shown at the same time as main-context-menu-edit-bookmark-mac,\n# so should probably have the same access key if possible.\nmain-context-menu-bookmark-page-mac =\n    .label = Bookmark Page…\n    .accesskey = m\n\n# This menuitem is only visible on macOS\n# Cannot be shown at the same time as main-context-menu-bookmark-page-mac,\n# so should probably have the same access key if possible.\nmain-context-menu-edit-bookmark-mac =\n    .label = Edit Bookmark…\n    .accesskey = m\n\n# Variables\n#   $shortcut (String) - A keyboard shortcut for the add bookmark command.\nmain-context-menu-bookmark-page-with-shortcut =\n    .aria-label = Bookmark Page…\n    .accesskey = m\n    .tooltiptext = Bookmark page ({ $shortcut })\n\nmain-context-menu-edit-bookmark =\n    .aria-label = Edit Bookmark…\n    .accesskey = m\n    .tooltiptext = Edit bookmark\n\n# Variables\n#   $shortcut (String) - A keyboard shortcut for the edit bookmark command.\nmain-context-menu-edit-bookmark-with-shortcut =\n    .aria-label = Edit Bookmark…\n    .accesskey = m\n    .tooltiptext = Edit bookmark ({ $shortcut })\n\nmain-context-menu-open-link =\n    .label = Open Link\n    .accesskey = O\n\nmain-context-menu-open-link-new-tab =\n    .label = Open Link in New Tab\n    .accesskey = T\n\nmain-context-menu-open-link-container-tab =\n    .label = Open Link in New Container Tab\n    .accesskey = w\n\nmain-context-menu-open-link-new-window =\n    .label = Open Link in New Window\n    .accesskey = d\n\nmain-context-menu-open-link-new-private-window =\n    .label = Open Link in New Private Window\n    .accesskey = P\n\nmain-context-menu-bookmark-link-2 =\n    .label = Bookmark Link…\n    .accesskey = B\n\nmain-context-menu-save-link =\n    .label = Save Link As…\n    .accesskey = k\n\nmain-context-menu-save-link-to-pocket =\n    .label = Save Link to { -pocket-brand-name }\n    .accesskey = o\n\n## The access keys for \"Copy Link\" and \"Copy Email Address\"\n## should be the same if possible; the two context menu items\n## are mutually exclusive.\n\nmain-context-menu-copy-email =\n    .label = Copy Email Address\n    .accesskey = l\n\nmain-context-menu-copy-phone =\n    .label = Copy Phone Number\n    .accesskey = o\n\nmain-context-menu-copy-link-simple =\n    .label = Copy Link\n    .accesskey = L\n\n## Media (video/audio) controls\n##\n## The accesskey for \"Play\" and \"Pause\" are the\n## same because the two context-menu items are\n## mutually exclusive.\n\nmain-context-menu-media-play =\n    .label = Play\n    .accesskey = P\n\nmain-context-menu-media-pause =\n    .label = Pause\n    .accesskey = P\n\n##\n\nmain-context-menu-media-mute =\n    .label = Mute\n    .accesskey = M\n\nmain-context-menu-media-unmute =\n    .label = Unmute\n    .accesskey = m\n\nmain-context-menu-media-play-speed-2 =\n    .label = Speed\n    .accesskey = d\n\nmain-context-menu-media-play-speed-slow-2 =\n    .label = 0.5×\n\nmain-context-menu-media-play-speed-normal-2 =\n    .label = 1.0×\n\nmain-context-menu-media-play-speed-fast-2 =\n    .label = 1.25×\n\nmain-context-menu-media-play-speed-faster-2 =\n    .label = 1.5×\n\nmain-context-menu-media-play-speed-fastest-2 =\n    .label = 2×\n\nmain-context-menu-media-loop =\n    .label = Loop\n    .accesskey = L\n\n## The access keys for \"Show Controls\" and \"Hide Controls\" are the same\n## because the two context-menu items are mutually exclusive.\n\nmain-context-menu-media-show-controls =\n    .label = Show Controls\n    .accesskey = C\n\nmain-context-menu-media-hide-controls =\n    .label = Hide Controls\n    .accesskey = C\n\n##\n\nmain-context-menu-media-video-fullscreen =\n    .label = Full Screen\n    .accesskey = F\n\nmain-context-menu-media-video-leave-fullscreen =\n    .label = Exit Full Screen\n    .accesskey = u\n\n# This is used when right-clicking on a video in the\n# content area when the Picture-in-Picture feature is enabled.\nmain-context-menu-media-watch-pip =\n    .label = Watch in Picture-in-Picture\n    .accesskey = u\n\nmain-context-menu-image-reload =\n    .label = Reload Image\n    .accesskey = R\n\nmain-context-menu-image-view-new-tab =\n    .label = Open Image in New Tab\n    .accesskey = I\n\nmain-context-menu-video-view-new-tab =\n    .label = Open Video in New Tab\n    .accesskey = i\n\nmain-context-menu-image-copy =\n    .label = Copy Image\n    .accesskey = y\n\nmain-context-menu-image-copy-link =\n    .label = Copy Image Link\n    .accesskey = o\n\nmain-context-menu-video-copy-link =\n    .label = Copy Video Link\n    .accesskey = o\n\nmain-context-menu-audio-copy-link =\n    .label = Copy Audio Link\n    .accesskey = o\n\nmain-context-menu-image-save-as =\n    .label = Save Image As…\n    .accesskey = v\n\nmain-context-menu-image-email =\n    .label = Email Image…\n    .accesskey = g\n\nmain-context-menu-image-set-image-as-background =\n    .label = Set Image as Desktop Background…\n    .accesskey = S\n\nmain-context-menu-image-copy-text =\n    .label = Copy Text From Image\n    .accesskey = x\n\nmain-context-menu-image-info =\n    .label = View Image Info\n    .accesskey = f\n\nmain-context-menu-image-desc =\n    .label = View Description\n    .accesskey = D\n\nmain-context-menu-video-save-as =\n    .label = Save Video As…\n    .accesskey = v\n\nmain-context-menu-audio-save-as =\n    .label = Save Audio As…\n    .accesskey = v\n\nmain-context-menu-video-take-snapshot =\n    .label = Take Snapshot…\n    .accesskey = S\n\nmain-context-menu-video-email =\n    .label = Email Video…\n    .accesskey = a\n\nmain-context-menu-audio-email =\n    .label = Email Audio…\n    .accesskey = a\n\nmain-context-menu-plugin-play =\n    .label = Activate this plugin\n    .accesskey = c\n\nmain-context-menu-plugin-hide =\n    .label = Hide this plugin\n    .accesskey = H\n\nmain-context-menu-save-to-pocket =\n    .label = Save Page to { -pocket-brand-name }\n    .accesskey = k\n\nmain-context-menu-send-to-device =\n    .label = Send Page to Device\n    .accesskey = n\n\n## The access keys for \"Use Saved Login\" and \"Use Saved Password\"\n## should be the same if possible; the two context menu items\n## are mutually exclusive.\n\nmain-context-menu-use-saved-login =\n    .label = Use Saved Login\n    .accesskey = o\n\nmain-context-menu-use-saved-password =\n    .label = Use Saved Password\n    .accesskey = o\n\n##\n\nmain-context-menu-suggest-strong-password =\n    .label = Suggest Strong Password…\n    .accesskey = S\n\nmain-context-menu-manage-logins2 =\n    .label = Manage Logins\n    .accesskey = M\n\nmain-context-menu-keyword =\n    .label = Add a Keyword for this Search…\n    .accesskey = K\n\nmain-context-menu-link-send-to-device =\n    .label = Send Link to Device\n    .accesskey = n\n\nmain-context-menu-frame =\n    .label = This Frame\n    .accesskey = h\n\nmain-context-menu-frame-show-this =\n    .label = Show Only This Frame\n    .accesskey = S\n\nmain-context-menu-frame-open-tab =\n    .label = Open Frame in New Tab\n    .accesskey = T\n\nmain-context-menu-frame-open-window =\n    .label = Open Frame in New Window\n    .accesskey = W\n\nmain-context-menu-frame-reload =\n    .label = Reload Frame\n    .accesskey = R\n\nmain-context-menu-frame-add-bookmark =\n    .label = Bookmark Frame…\n    .accesskey = m\n\nmain-context-menu-frame-save-as =\n    .label = Save Frame As…\n    .accesskey = F\n\nmain-context-menu-frame-print =\n    .label = Print Frame…\n    .accesskey = P\n\nmain-context-menu-frame-view-source =\n    .label = View Frame Source\n    .accesskey = V\n\nmain-context-menu-frame-view-info =\n    .label = View Frame Info\n    .accesskey = I\n\nmain-context-menu-print-selection-2 =\n    .label = Print Selection…\n    .accesskey = r\n\nmain-context-menu-view-selection-source =\n    .label = View Selection Source\n    .accesskey = e\n\nmain-context-menu-take-screenshot =\n    .label = Take Screenshot\n    .accesskey = T\n\nmain-context-menu-take-frame-screenshot =\n    .label = Take Screenshot\n    .accesskey = o\n\nmain-context-menu-view-page-source =\n    .label = View Page Source\n    .accesskey = V\n\nmain-context-menu-bidi-switch-text =\n    .label = Switch Text Direction\n    .accesskey = w\n\nmain-context-menu-bidi-switch-page =\n    .label = Switch Page Direction\n    .accesskey = D\n\nmain-context-menu-inspect =\n    .label = Inspect\n    .accesskey = Q\n\nmain-context-menu-inspect-a11y-properties =\n    .label = Inspect Accessibility Properties\n\nmain-context-menu-eme-learn-more =\n    .label = Learn more about DRM…\n    .accesskey = D\n\n# Variables\n#   $containerName (String): The name of the current container\nmain-context-menu-open-link-in-container-tab =\n    .label = Open Link in New { $containerName } Tab\n    .accesskey = T\n\nmain-context-menu-reveal-password =\n    .label = Reveal Password\n    .accesskey = v\n";

/***/ })

}]);