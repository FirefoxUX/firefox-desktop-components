"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[5359],{

/***/ 45359:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\ntoolbar-button-firefox-view-2 =\n  .label = { -firefoxview-brand-name }\n  .tooltiptext = View recent browsing across windows and devices\n\nmenu-tools-firefox-view =\n  .label = { -firefoxview-brand-name }\n  .accesskey = F\n\nfirefoxview-page-title = { -firefoxview-brand-name }\n\nfirefoxview-page-heading =\n  .heading = { -firefoxview-brand-name }\n\nfirefoxview-page-label =\n  .label = { -firefoxview-brand-name }\n\nfirefoxview-close-button =\n  .title = Close\n  .aria-label = Close\n\nfirefoxview-empty-state-icon =\n  .alt = Attention:\n\n# Used instead of the localized relative time when a timestamp is within a minute or so of now\nfirefoxview-just-now-timestamp = Just now\n\n# This is a headline for an area in the product where users can resume and re-open tabs they have previously viewed on other devices.\nfirefoxview-tabpickup-header = Tab pickup\nfirefoxview-tabpickup-description = Open pages from other devices.\n\n# Variables:\n#  $percentValue (Number): the percentage value for setup completion\nfirefoxview-tabpickup-progress-label = { $percentValue }% complete\n\nfirefoxview-tabpickup-step-signin-header = Switch seamlessly between devices\nfirefoxview-tabpickup-step-signin-description = To grab your phone tabs here, first sign in or create an account.\nfirefoxview-tabpickup-step-signin-primarybutton = Continue\n\nfirefoxview-syncedtabs-signin-header = Grab tabs from anywhere\nfirefoxview-syncedtabs-signin-description = To see your tabs from wherever you use { -brand-product-name }, sign in to your account. If you don’t have an account, we’ll take you through the steps to sign up.\nfirefoxview-syncedtabs-signin-primarybutton = Sign in or sign up\n\nfirefoxview-tabpickup-adddevice-header = Sync { -brand-product-name } on your phone or tablet\nfirefoxview-tabpickup-adddevice-description = Download { -brand-product-name } for mobile and sign in there.\nfirefoxview-tabpickup-adddevice-learn-how = Learn how\nfirefoxview-tabpickup-adddevice-primarybutton = Get { -brand-product-name } for mobile\n\nfirefoxview-syncedtabs-adddevice-header = Sign in to { -brand-product-name } on your other devices\nfirefoxview-syncedtabs-adddevice-description = To see your tabs from wherever you use { -brand-product-name }, sign in on all your devices. Learn how to <a data-l10n-name=\"url\">connect additional devices</a>.\nfirefoxview-syncedtabs-adddevice-primarybutton = Try { -brand-product-name } for mobile\n\nfirefoxview-tabpickup-synctabs-header = Turn on tab syncing\nfirefoxview-tabpickup-synctabs-description = Allow { -brand-short-name } to share tabs between devices.\nfirefoxview-tabpickup-synctabs-learn-how = Learn how\nfirefoxview-tabpickup-synctabs-primarybutton = Sync open tabs\n\nfirefoxview-syncedtabs-synctabs-header = Update your sync settings\nfirefoxview-syncedtabs-synctabs-description = To see tabs from other devices, you need to sync your open tabs.\nfirefoxview-syncedtabs-synctabs-checkbox = Allow open tabs to sync\n\nfirefoxview-syncedtabs-loading-header = Sync in progress\nfirefoxview-syncedtabs-loading-description = When it’s done, you’ll see any tabs you have open on other devices. Check back soon.\n\nfirefoxview-tabpickup-fxa-admin-disabled-header = Your organization has disabled sync\nfirefoxview-tabpickup-fxa-disabled-by-policy-description = { -brand-short-name } is not able to sync tabs between devices because your organization has disabled syncing.\n\nfirefoxview-tabpickup-network-offline-header = Check your internet connection\nfirefoxview-tabpickup-network-offline-description = If you’re using a firewall or proxy, check that { -brand-short-name } has permission to access the web.\nfirefoxview-tabpickup-network-offline-primarybutton = Try again\n\nfirefoxview-tabpickup-sync-error-header = We’re having trouble syncing\nfirefoxview-tabpickup-generic-sync-error-description = { -brand-short-name } can’t reach the syncing service right now. Try again in a few moments.\nfirefoxview-tabpickup-sync-error-primarybutton = Try again\n\nfirefoxview-tabpickup-sync-disconnected-header = Turn on syncing to continue\nfirefoxview-tabpickup-sync-disconnected-description = To grab your tabs, you’ll need to allow syncing in { -brand-short-name }.\nfirefoxview-tabpickup-sync-disconnected-primarybutton = Turn on sync in settings\n\nfirefoxview-tabpickup-password-locked-header = Enter your Primary Password to view tabs\nfirefoxview-tabpickup-password-locked-description = To grab your tabs, you’ll need to enter the Primary Password for { -brand-short-name }.\nfirefoxview-tabpickup-password-locked-link = Learn more\nfirefoxview-tabpickup-password-locked-primarybutton = Enter Primary Password\nfirefoxview-syncedtab-password-locked-link = <a data-l10n-name=\"syncedtab-password-locked-link\">Learn more</a>\n\nfirefoxview-tabpickup-signed-out-header = Sign in to reconnect\nfirefoxview-tabpickup-signed-out-description2 = To reconnect and grab your tabs, sign in to your account.\nfirefoxview-tabpickup-signed-out-primarybutton = Sign in\n\nfirefoxview-tabpickup-syncing = Sit tight while your tabs sync. It’ll be just a moment.\n\nfirefoxview-mobile-promo-header = Grab tabs from your phone or tablet\nfirefoxview-mobile-promo-description = To view your latest mobile tabs, sign in to { -brand-product-name } on iOS or Android.\nfirefoxview-mobile-promo-primarybutton = Get { -brand-product-name } for mobile\n\nfirefoxview-mobile-confirmation-header = 🎉 Good to go!\nfirefoxview-mobile-confirmation-description = Now you can grab your { -brand-product-name } tabs from your tablet or phone.\n\nfirefoxview-closed-tabs-placeholder-header = No recently closed tabs\nfirefoxview-closed-tabs-placeholder-body2 = When you close a tab, you can fetch it from here.\n\n# Variables:\n#   $tabTitle (string) - Title of tab being dismissed\nfirefoxview-closed-tabs-dismiss-tab =\n  .title = Dismiss { $tabTitle }\n\n# refers to the last tab that was used\nfirefoxview-pickup-tabs-badge = Last active\n\n# Variables:\n#   $targetURI (string) - URL that will be opened in the new tab\nfirefoxview-tabs-list-tab-button =\n  .title = Open { $targetURI } in a new tab\n\nfirefoxview-try-colorways-button = Try colorways\nfirefoxview-change-colorway-button = Change colorway\n\n# Variables:\n#  $intensity (String): Colorway intensity\n#  $collection (String): Colorway Collection name\nfirefoxview-colorway-description = { $intensity } · { $collection }\n\nfirefoxview-synced-tabs-placeholder-header = Nothing to see yet\nfirefoxview-synced-tabs-placeholder-body = The next time you open a page in { -brand-product-name } on another device, grab it here like magic.\n\nfirefoxview-collapse-button-show =\n  .title = Show list\n\nfirefoxview-collapse-button-hide =\n  .title = Hide list\n\nfirefoxview-overview-nav = Recent browsing\n  .title = Recent browsing\nfirefoxview-overview-header = Recent browsing\n  .title = Recent browsing\n\n## History in this context refers to browser history\n\nfirefoxview-history-nav = History\n  .title = History\nfirefoxview-history-header = History\nfirefoxview-history-context-delete = Delete from History\n    .accesskey = D\n\n## Open Tabs in this context refers to all open tabs in the browser\n\nfirefoxview-opentabs-nav = Open tabs\n  .title = Open tabs\nfirefoxview-opentabs-header = Open tabs\n\n## Recently closed tabs in this context refers to recently closed tabs from all windows\n\nfirefoxview-recently-closed-nav = Recently closed tabs\n  .title = Recently closed tabs\nfirefoxview-recently-closed-header = Recently closed tabs\n\n## Tabs from other devices refers in this context refers to synced tabs from other devices\n\nfirefoxview-synced-tabs-nav = Tabs from other devices\n  .title = Tabs from other devices\nfirefoxview-synced-tabs-header = Tabs from other devices\n\n##\n\n# Used for a link in collapsible cards, in the ’Recent browsing’ page of Firefox View\nfirefoxview-view-all-link = View all\n\n# Variables:\n#   $winID (Number) - The index of the owner window for this set of tabs\nfirefoxview-opentabs-window-header =\n  .title = Window { $winID }\n\n# Variables:\n#   $winID (Number) - The index of the owner window (which is currently focused) for this set of tabs\nfirefoxview-opentabs-current-window-header =\n  .title = Window { $winID } (Current)\n\nfirefoxview-opentabs-focus-tab =\n  .title = Switch to this tab\n\nfirefoxview-show-more = Show more\nfirefoxview-show-less = Show less\nfirefoxview-show-all = Show all\n\nfirefoxview-search-text-box-clear-button =\n  .title = Clear\n\n# Placeholder for the input field to search in recent browsing (\"search\" is a verb).\nfirefoxview-search-text-box-recentbrowsing =\n  .placeholder = Search\n\n# Placeholder for the input field to search in history (\"search\" is a verb).\nfirefoxview-search-text-box-history =\n  .placeholder = Search history\n\n# Placeholder for the input field to search in recently closed tabs (\"search\" is a verb).\nfirefoxview-search-text-box-recentlyclosed =\n  .placeholder = Search recently closed tabs\n\n# Placeholder for the input field to search in tabs from other devices (\"search\" is a verb).\nfirefoxview-search-text-box-syncedtabs =\n  .placeholder = Search synced tabs\n\n# Placeholder for the input field to search in open tabs (\"search\" is a verb).\nfirefoxview-search-text-box-opentabs =\n  .placeholder = Search open tabs\n\n# \"Search\" is a noun (as in \"Results of the search for\")\n# Variables:\n#   $query (String) - The search query used for searching through browser history.\nfirefoxview-search-results-header = Search results for “{ $query }”\n\n# Variables:\n#   $count (Number) - The number of visits matching the search query.\nfirefoxview-search-results-count = { $count ->\n  [one] { $count } site\n *[other] { $count } sites\n}\n\n# Message displayed when a search is performed and no matching results were found.\n# Variables:\n#   $query (String) - The search query.\nfirefoxview-search-results-empty = No results for “{ $query }”\n\nfirefoxview-sort-history-by-date-label = Sort by date\nfirefoxview-sort-history-by-site-label = Sort by site\nfirefoxview-sort-open-tabs-by-recency-label = Sort by recent activity\nfirefoxview-sort-open-tabs-by-order-label = Sort by tab order\n\n# Variables:\n#   $url (string) - URL that will be opened in the new tab\nfirefoxview-opentabs-tab-row =\n  .title = Switch to { $url }\n\n## Variables:\n##   $date (string) - Date to be formatted based on locale\n\nfirefoxview-history-date-today = Today - { DATETIME($date, dateStyle: \"full\") }\nfirefoxview-history-date-yesterday = Yesterday - { DATETIME($date, dateStyle: \"full\") }\nfirefoxview-history-date-this-month = { DATETIME($date, dateStyle: \"full\") }\nfirefoxview-history-date-prev-month = { DATETIME($date, month: \"long\", year: \"numeric\") }\n\n# When history is sorted by site, this heading is used in place of a domain, in\n# order to group sites that do not come from an outside host.\n# For example, this would be the heading for all file:/// URLs in history.\nfirefoxview-history-site-localhost = (local files)\n\n##\n\nfirefoxview-show-all-history = Show all history\n\nfirefoxview-view-more-browsing-history = View more browsing history\n\n## Message displayed in Firefox View when the user has no history data\n\nfirefoxview-history-empty-header = Get back to where you’ve been\nfirefoxview-history-empty-description = As you browse, the pages you visit will be listed here.\nfirefoxview-history-empty-description-two = Protecting your privacy is at the heart of what we do. It’s why you can control the activity { -brand-short-name } remembers, in your <a data-l10n-name=\"history-settings-url\">history settings</a>.\n\n##\n\n# Button text for choosing a browser within the ’Import history from another browser’ banner\nfirefoxview-choose-browser-button = Choose browser\n  .title = Choose browser\n\n## Message displayed in Firefox View when the user has chosen to never remember History\n\nfirefoxview-dont-remember-history-empty-header = Nothing to show\nfirefoxview-dont-remember-history-empty-description = Protecting your privacy is at the heart of what we do. It’s why you can control the activity { -brand-short-name } remembers.\nfirefoxview-dont-remember-history-empty-description-two = Based on your current settings, { -brand-short-name } doesn’t remember your activity as you browse. To change that, <a data-l10n-name=\"history-settings-url-two\">change your history settings to remember your history</a>.\n\n##\n\n# This label is read by screen readers when focusing the close button for the \"Import history from another browser\" banner in Firefox View\nfirefoxview-import-history-close-button =\n  .aria-label = Close\n  .title = Close\n\n## Text displayed in a dismissable banner to import bookmarks/history from another browser\n\nfirefoxview-import-history-header = Import history from another browser\nfirefoxview-import-history-description = Make { -brand-short-name } your go-to browser. Import browsing history, bookmarks, and more.\n\n## Message displayed in Firefox View when the user has no recently closed tabs data\n\nfirefoxview-recentlyclosed-empty-header = Closed a tab too soon?\nfirefoxview-recentlyclosed-empty-description = Here you’ll find the tabs you recently closed, so you can reopen any of them quickly.\nfirefoxview-recentlyclosed-empty-description-two = To find tabs from longer ago, view your <a data-l10n-name=\"history-url\">browsing history</a>.\n\n## This message is displayed below the name of another connected device when it doesn't have any open tabs.\n\nfirefoxview-syncedtabs-device-notabs = No tabs open on this device\n\nfirefoxview-syncedtabs-connect-another-device = Connect another device\n\nfirefoxview-pinned-tabs =\n  .title = Pinned Tabs\n\nfirefoxview-tabs =\n  .title = Tabs\n\n## These tooltips will be displayed when hovering over a pinned tab on the Open Tabs page\n## Variables:\n##  $tabTitle (string) - Title of pinned tab that will be opened when selected\n\nfirefoxview-opentabs-pinned-tab =\n  .title = Switch to { $tabTitle }\n\n# This tooltip will be shown for a pinned tab whose URL is currently bookmarked.\nfirefoxview-opentabs-bookmarked-pinned-tab =\n  .title = Switch to (Bookmarked) { $tabTitle }\n\n## These tooltips will be displayed when hovering over an unpinned Open Tab\n## Variables:\n##   $url (string) - URL of tab that will be opened when selected\n\n# This tooltip will be shown for an unpinned tab whose URL is currently bookmarked.\nfirefoxview-opentabs-bookmarked-tab =\n  .title = (Bookmarked) { $url }\n";

/***/ })

}]);