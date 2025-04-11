"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[5471],{

/***/ 5471:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\nmenu-view-genai-chat =\n  .label = AI Chatbot\n\nmenu-view-review-checker =\n  .label = Review Checker\n\nmenu-view-contextual-password-manager =\n  .label = Passwords\n\nsidebar-options-menu-button =\n  .title = Open menu\n\n## Labels for sidebar history panel\n\n# Variables:\n#   $date (string) - Date to be formatted based on locale\nsidebar-history-date-today =\n  .heading = Today - { DATETIME($date, dateStyle: \"full\") }\nsidebar-history-date-yesterday =\n  .heading = Yesterday - { DATETIME($date, dateStyle: \"full\") }\nsidebar-history-date-this-month =\n  .heading = { DATETIME($date, dateStyle: \"full\") }\nsidebar-history-date-prev-month =\n  .heading = { DATETIME($date, month: \"long\", year: \"numeric\") }\n\nsidebar-history-delete =\n  .title = Delete from History\n\nsidebar-history-clear =\n  .label = Clear history\n\nsidebar-history-sort-by-heading = Sort by:\nsidebar-history-sort-option-date =\n  .label = Date\nsidebar-history-sort-option-site =\n  .label = Site\nsidebar-history-sort-option-date-and-site =\n  .label = Date and site\nsidebar-history-sort-option-last-visited =\n  .label = Last visited\n\n## Labels for sidebar search\n\n# \"Search\" is a noun (as in \"Results of the search for\")\n# Variables:\n#   $query (String) - The search query used for searching through browser history.\nsidebar-search-results-header =\n  .heading = Search results for “{ $query }”\n\n## Labels for sidebar customize panel\n\nsidebar-customize-extensions-header = Sidebar extensions\nsidebar-customize-firefox-tools-header =\n  .label = { -brand-product-name } tools\nsidebar-customize-firefox-settings = Manage { -brand-short-name } settings\nsidebar-vertical-tabs =\n  .label = Vertical tabs\nsidebar-settings =\n  .label = Sidebar settings\nsidebar-hide-tabs-and-sidebar =\n  .label = Hide tabs and sidebar\nsidebar-show-on-the-right =\n  .label = Move sidebar to the right\nsidebar-show-on-the-left =\n  .label = Move sidebar to the left\n# Option to automatically expand the collapsed sidebar when the mouse pointer\n# hovers over it.\nexpand-sidebar-on-hover =\n  .label = Expand sidebar on hover\n\n## Labels for sidebar context menu items\n\nsidebar-context-menu-manage-extension =\n  .label = Manage extension\nsidebar-context-menu-remove-extension =\n  .label = Remove extension\nsidebar-context-menu-report-extension =\n  .label = Report extension\nsidebar-context-menu-open-in-window =\n  .label = Open in New Window\nsidebar-context-menu-open-in-private-window =\n  .label = Open in New Private Window\nsidebar-context-menu-bookmark-tab =\n  .label = Bookmark Tab…\nsidebar-context-menu-copy-link =\n  .label = Copy Link\nsidebar-context-menu-hide-sidebar =\n  .label = Hide Sidebar\nsidebar-context-menu-enable-vertical-tabs =\n  .label = Turn on Vertical Tabs\nsidebar-context-menu-customize-sidebar =\n  .label = Customize Sidebar\n# Variables:\n#   $deviceName (String) - The name of the device the user is closing a tab for\nsidebar-context-menu-close-remote-tab =\n  .label = Close tab on { $deviceName }\n\n## Labels for sidebar history context menu items\n\nsidebar-history-context-menu-delete-page =\n  .label = Delete from History\n\n## Labels for sidebar menu items.\n\nsidebar-menu-genai-chat-label =\n  .label = AI chatbot\nsidebar-menu-history-label =\n  .label = History\nsidebar-menu-synced-tabs-label =\n  .label = Tabs from other devices\nsidebar-menu-bookmarks-label =\n  .label = Bookmarks\nsidebar-menu-customize-label =\n  .label = Customize sidebar\nsidebar-menu-review-checker-label =\n  .label = Review Checker\nsidebar-menu-contextual-password-manager-label =\n  .label = Passwords\n\n## Tooltips for sidebar menu items.\n\n# The tooltip to show over the history icon, when history is not currently showing.\n# Variables:\n#   $shortcut (String) - The OS specific keyboard shortcut.\nsidebar-menu-open-history-tooltip = Open history ({ $shortcut })\n\n# The tooltip to show over the history icon, when history is currently showing.\n# Variables:\n#   $shortcut (String) - The OS specific keyboard shortcut.\nsidebar-menu-close-history-tooltip = Close history ({ $shortcut })\n\n# The tooltip to show over the bookmarks icon, when bookmarks is not currently showing.\n# Variables:\n#   $shortcut (String) - The OS specific keyboard shortcut.\nsidebar-menu-open-bookmarks-tooltip = Open bookmarks ({ $shortcut })\n\n# The tooltip to show over the bookmarks icon, when bookmarks is currently showing.\n# Variables:\n#   $shortcut (String) - The OS specific keyboard shortcut.\nsidebar-menu-close-bookmarks-tooltip = Close bookmarks ({ $shortcut })\n\n## Tooltips displayed over the AI chatbot icon.\n## Variables:\n##   $shortcut (String) - The OS specific keyboard shortcut.\n##   $provider (String) - The name of the AI chatbot provider (if available).\n\nsidebar-menu-open-ai-chatbot-tooltip-generic = Open AI chatbot ({ $shortcut })\nsidebar-menu-open-ai-chatbot-provider-tooltip = Open { $provider } ({ $shortcut })\n\nsidebar-menu-close-ai-chatbot-tooltip-generic = Close AI chatbot ({ $shortcut })\nsidebar-menu-close-ai-chatbot-provider-tooltip = Close { $provider } ({ $shortcut })\n\n## Headings for sidebar menu panels.\n\nsidebar-panel-header-close-button =\n  .tooltiptext = Close\nsidebar-menu-customize-header =\n  .heading = Customize sidebar\nsidebar-menu-history-header =\n  .heading = History\nsidebar-menu-syncedtabs-header =\n  .heading = Tabs from other devices\nsidebar-menu-cpm-header =\n  .heading = Passwords\n\n## Titles for sidebar menu panels.\n\nsidebar-customize-title = Customize sidebar\nsidebar-history-title = History\nsidebar-syncedtabs-title = Tabs from other devices\n\n## Context for closing synced tabs when hovering over the items\n\n# Context for hovering over the close tab button that will\n# send a push to the device to close said tab\n# Variables:\n#   $deviceName (String) - the name of the device the user is closing a tab for\nsynced-tabs-context-close-tab-title =\n    .title = Close tab on { $deviceName }\n\nshow-sidebars =\n  .tooltiptext = Show sidebars\n  .label = Sidebars\n\n## Tooltips for the sidebar toolbar widget.\n\n# Variables:\n#   $shortcut (String) - The OS specific keyboard shortcut.\nsidebar-widget-expand-sidebar2 =\n  .tooltiptext = Expand sidebar ({ $shortcut })\n  .label = Sidebars\n\n# Variables:\n#   $shortcut (String) - The OS specific keyboard shortcut.\nsidebar-widget-collapse-sidebar2 =\n  .tooltiptext = Collapse sidebar ({ $shortcut })\n  .label = Sidebars\n\n# Variables:\n#   $shortcut (String) - The OS specific keyboard shortcut.\nsidebar-widget-show-sidebar2 =\n  .tooltiptext = Show sidebar ({ $shortcut })\n  .label = Sidebars\n\n# Variables:\n#   $shortcut (String) - The OS specific keyboard shortcut.\nsidebar-widget-hide-sidebar2 =\n  .tooltiptext = Hide sidebar ({ $shortcut })\n  .label = Sidebars\n";

/***/ })

}]);