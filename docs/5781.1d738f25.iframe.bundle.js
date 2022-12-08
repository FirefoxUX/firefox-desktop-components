"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[5781],{

/***/ 45781:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\n## The title and aria-label attributes are used by screen readers to describe\n## the Downloads Panel.\n\ndownloads-window =\n  .title = Downloads\ndownloads-panel =\n  .aria-label = Downloads\n\n##\n\n# The style attribute has the width of the Downloads Panel expressed using\n# a CSS unit. The longest labels that should fit are usually those of\n# in-progress and blocked downloads.\ndownloads-panel-items =\n  .style = width: 35em\n\ndownloads-cmd-pause =\n    .label = Pause\n    .accesskey = P\ndownloads-cmd-resume =\n    .label = Resume\n    .accesskey = R\ndownloads-cmd-cancel =\n    .tooltiptext = Cancel\ndownloads-cmd-cancel-panel =\n    .aria-label = Cancel\n\ndownloads-cmd-show-menuitem-2 =\n  .label = { PLATFORM() ->\n      [macos] Show in Finder\n     *[other] Show in Folder\n  }\n  .accesskey = F\n\n## Displayed in the downloads context menu for files that can be opened.\n## Variables:\n##   $handler (String) - The name of the mime type's default file handler.\n##   Example: \"Notepad\", \"Acrobat Reader DC\", \"7-Zip File Manager\"\n\ndownloads-cmd-use-system-default =\n  .label = Open In System Viewer\n  .accesskey = I\n# This version is shown when the download's mime type has a valid file handler.\ndownloads-cmd-use-system-default-named =\n  .label = Open In { $handler }\n  .accesskey = I\n\n# We can use the same accesskey as downloads-cmd-always-open-similar-files.\n# Both should not be visible in the downloads context menu at the same time.\ndownloads-cmd-always-use-system-default =\n  .label = Always Open In System Viewer\n  .accesskey = w\n# We can use the same accesskey as downloads-cmd-always-open-similar-files.\n# Both should not be visible in the downloads context menu at the same time.\n# This version is shown when the download's mime type has a valid file handler.\ndownloads-cmd-always-use-system-default-named =\n  .label = Always Open In { $handler }\n  .accesskey = w\n\n##\n\n# We can use the same accesskey as downloads-cmd-always-use-system-default.\n# Both should not be visible in the downloads context menu at the same time.\ndownloads-cmd-always-open-similar-files =\n  .label = Always Open Similar Files\n  .accesskey = w\n\ndownloads-cmd-show-button-2 =\n  .tooltiptext = { PLATFORM() ->\n      [macos] Show in Finder\n     *[other] Show in Folder\n  }\n\ndownloads-cmd-show-panel-2 =\n  .aria-label = { PLATFORM() ->\n      [macos] Show in Finder\n     *[other] Show in Folder\n  }\ndownloads-cmd-show-description-2 =\n  .value = { PLATFORM() ->\n      [macos] Show in Finder\n     *[other] Show in Folder\n  }\n\ndownloads-cmd-show-downloads =\n    .label = Show downloads folder\ndownloads-cmd-retry =\n    .tooltiptext = Retry\ndownloads-cmd-retry-panel =\n    .aria-label = Retry\ndownloads-cmd-go-to-download-page =\n    .label = Go To Download Page\n    .accesskey = G\ndownloads-cmd-copy-download-link =\n    .label = Copy Download Link\n    .accesskey = L\ndownloads-cmd-remove-from-history =\n    .label = Remove From History\n    .accesskey = e\ndownloads-cmd-clear-list =\n    .label = Clear Preview Panel\n    .accesskey = a\ndownloads-cmd-clear-downloads =\n    .label = Clear Downloads\n    .accesskey = C\ndownloads-cmd-delete-file =\n    .label = Delete\n    .accesskey = D\n\n# This command is shown in the context menu when downloads are blocked.\ndownloads-cmd-unblock =\n    .label = Allow Download\n    .accesskey = o\n\n# This is the tooltip of the action button shown when malware is blocked.\ndownloads-cmd-remove-file =\n    .tooltiptext = Remove File\n\ndownloads-cmd-remove-file-panel =\n    .aria-label = Remove File\n\n# This is the tooltip of the action button shown when potentially unwanted\n# downloads are blocked. This opens a dialog where the user can choose\n# whether to unblock or remove the download. Removing is the default option.\ndownloads-cmd-choose-unblock =\n    .tooltiptext = Remove File or Allow Download\n\ndownloads-cmd-choose-unblock-panel =\n    .aria-label = Remove File or Allow Download\n\n# This is the tooltip of the action button shown when uncommon downloads are\n# blocked.This opens a dialog where the user can choose whether to open the\n# file or remove the download. Opening is the default option.\ndownloads-cmd-choose-open =\n    .tooltiptext = Open or Remove File\n\ndownloads-cmd-choose-open-panel =\n    .aria-label = Open or Remove File\n\n# Displayed when hovering a blocked download, indicates that it's possible to\n# show more information for user to take the next action.\ndownloads-show-more-information =\n    .value = Show more information\n\n# Displayed when hovering a complete download, indicates that it's possible to\n# open the file using an app available in the system.\ndownloads-open-file =\n    .value = Open File\n\n## Displayed when the user clicked on a download in process. Indicates that the\n## downloading file will be opened after certain amount of time using an app\n## available in the system.\n## Variables:\n##   $hours (number) - Amount of hours left till the file opens.\n##   $seconds (number) - Amount of seconds left till the file opens.\n##   $minutes (number) - Amount of minutes till the file opens.\n\ndownloading-file-opens-in-hours-and-minutes-2 =\n  .value = Opening in { $hours }h { $minutes }m…\ndownloading-file-opens-in-minutes-2 =\n  .value = Opening in { $minutes }m…\ndownloading-file-opens-in-minutes-and-seconds-2 =\n  .value = Opening in { $minutes }m { $seconds }s…\ndownloading-file-opens-in-seconds-2 =\n  .value = Opening in { $seconds }s…\ndownloading-file-opens-in-some-time-2 =\n  .value = Opening when completed…\ndownloading-file-click-to-open =\n  .value = Open when completed\n\n##\n\n# Displayed when hovering a download which is able to be retried by users,\n# indicates that it's possible to download this file again.\ndownloads-retry-download =\n    .value = Retry Download\n\n# Displayed when hovering a download which is able to be cancelled by users,\n# indicates that it's possible to cancel and stop the download.\ndownloads-cancel-download =\n    .value = Cancel Download\n\n# This string is shown at the bottom of the Downloads Panel when all the\n# downloads fit in the available space, or when there are no downloads in\n# the panel at all.\ndownloads-history =\n    .label = Show all downloads\n    .accesskey = S\n\n# This string is shown at the top of the Download Details Panel, to indicate\n# that we are showing the details of a single download.\ndownloads-details =\n    .title = Download Details\n\n## Displayed when a site attempts to automatically download many files.\n## Variables:\n##   $num (number) - Number of blocked downloads.\n##   $url (string) - The url of the suspicious site, stripped of http, https and www prefix.\n\ndownloads-files-not-downloaded = { $num ->\n    [one] File not downloaded.\n   *[other] {$num} files not downloaded.\n}\ndownloads-blocked-from-url = Downloads blocked from { $url }.\ndownloads-blocked-download-detailed-info = { $url } attempted to automatically download multiple files. The site could be broken or trying to store spam files on your device.\n\n##\n\ndownloads-clear-downloads-button =\n    .label = Clear Downloads\n    .tooltiptext = Clears completed, canceled and failed downloads\n\n# This string is shown when there are no items in the Downloads view, when it\n# is displayed inside a browser tab.\ndownloads-list-empty =\n    .value = There are no downloads.\n\n# This string is shown when there are no items in the Downloads Panel.\ndownloads-panel-empty =\n    .value = No downloads for this session.\n\n# This is displayed in an item at the bottom of the Downloads Panel when there\n# are more downloads than can fit in the list in the panel.\n#   $count (number) - number of files being downloaded that are not shown in the\n#                     panel list.\ndownloads-more-downloading =\n    { $count ->\n        [one] { $count } more file downloading\n       *[other] { $count } more files downloading\n    }\n\n## Download errors\n\ndownloads-error-alert-title = Download Error\n# Variables:\n#   $extension (String): the name of the blocking extension.\ndownloads-error-blocked-by = The download cannot be saved because it is blocked by { $extension }.\n# Used when the name of the blocking extension is unavailable.\ndownloads-error-extension = The download cannot be saved because it is blocked by an extension.\n# Line breaks in this message are meaningful, and should be maintained.\ndownloads-error-generic =\n    The download cannot be saved because an unknown error occurred.\n\n    Please try again.\n";

/***/ })

}]);