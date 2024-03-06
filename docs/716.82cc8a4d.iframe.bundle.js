"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[716],{

/***/ 50716:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\n## App Menu\n\nappmenuitem-banner-update-downloading =\n    .label = Downloading { -brand-shorter-name } update\n\nappmenuitem-banner-update-available =\n    .label = Update available — download now\n\nappmenuitem-banner-update-manual =\n    .label = Update available — download now\n\nappmenuitem-banner-update-unsupported =\n    .label = Unable to update — system incompatible\n\nappmenuitem-banner-update-restart =\n    .label = Update available — restart now\n\nappmenuitem-new-tab =\n    .label = New tab\nappmenuitem-new-window =\n    .label = New window\nappmenuitem-new-private-window =\n    .label = New private window\nappmenuitem-history =\n  .label = History\nappmenuitem-downloads =\n  .label = Downloads\nappmenuitem-passwords =\n    .label = Passwords\nappmenuitem-addons-and-themes =\n    .label = Add-ons and themes\nappmenuitem-print =\n  .label = Print…\nappmenuitem-find-in-page =\n    .label = Find in page…\nappmenuitem-translate =\n    .label = Translate page…\nappmenuitem-zoom =\n    .value = Zoom\nappmenuitem-more-tools =\n    .label = More tools\nappmenuitem-help =\n    .label = Help\nappmenuitem-exit2 =\n    .label =\n        { PLATFORM() ->\n            [linux] Quit\n           *[other] Exit\n        }\nappmenu-menu-button-closed2 =\n    .tooltiptext = Open application menu\n    .label = { -brand-short-name }\nappmenu-menu-button-opened2 =\n    .tooltiptext = Close application menu\n    .label = { -brand-short-name }\n\n# Settings is now used to access the browser settings across all platforms,\n# instead of Options or Preferences.\nappmenuitem-settings =\n    .label = Settings\n\n## Zoom and Fullscreen Controls\n\nappmenuitem-zoom-enlarge =\n  .label = Zoom in\nappmenuitem-zoom-reduce =\n  .label = Zoom out\nappmenuitem-fullscreen =\n  .label = Full screen\n\n## Firefox Account toolbar button and Sync panel in App menu.\n\nappmenu-remote-tabs-sign-into-sync =\n  .label = Sign in to sync…\nappmenu-remote-tabs-turn-on-sync =\n  .label = Turn on sync…\n\n# This is shown after the tabs list if we can display more tabs by clicking on the button\nappmenu-remote-tabs-showmore =\n  .label = Show More Tabs\n  .tooltiptext = Show more tabs from this device\n\n# This is shown when there are inactive tabs which are not being shown.\n# Variables\n# $count (Number) - The number of inactive tabs which are not being shown (at least 1)\nappmenu-remote-tabs-showinactive =\n  .label =\n    { $count ->\n        [one] Show one inactive tab\n       *[other] Show { $count } inactive tabs\n    }\n  .tooltiptext = Show the inactive tabs on this device\n\n# This is shown beneath the name of a device when that device has no open tabs\nappmenu-remote-tabs-notabs = No open tabs\n\n# This is shown when Sync is configured but syncing tabs is disabled.\nappmenu-remote-tabs-tabsnotsyncing = Turn on tab syncing to view a list of tabs from your other devices.\n\nappmenu-remote-tabs-opensettings =\n  .label = Settings\n\n# This is shown when Sync is configured but this appears to be the only device attached to\n# the account. We also show links to download Firefox for android/ios.\nappmenu-remote-tabs-noclients = Want to see your tabs from other devices here?\n\nappmenu-remote-tabs-connectdevice =\n  .label = Connect Another Device\nappmenu-remote-tabs-welcome = View a list of tabs from your other devices.\nappmenu-remote-tabs-unverified = Your account needs to be verified.\n\nappmenuitem-fxa-toolbar-sync-now2 = Sync now\nappmenuitem-fxa-sign-in = Sign in to { -brand-product-name }\nappmenuitem-fxa-manage-account = Manage account\nappmenu-account-header = Account\n# Variables\n# $time (string) - Localized relative time since last sync (e.g. 1 second ago,\n# 3 hours ago, etc.)\nappmenu-fxa-last-sync = Last synced { $time }\n    .label = Last synced { $time }\nappmenu-fxa-sync-and-save-data2 = Sync and save data\nappmenu-fxa-signed-in-label = Sign In\nappmenu-fxa-setup-sync =\n    .label = Turn On Syncing…\n\nappmenuitem-save-page =\n    .label = Save page as…\n\n## What's New panel in App menu.\n\nwhatsnew-panel-header = What’s New\n\n# Checkbox displayed at the bottom of the What's New panel, allowing users to\n# enable/disable What's New notifications.\nwhatsnew-panel-footer-checkbox =\n  .label = Notify about new features\n  .accesskey = f\n\n## The Firefox Profiler – The popup is the UI to turn on the profiler, and record\n## performance profiles. To enable it go to profiler.firefox.com and click\n## \"Enable Profiler Menu Button\".\n\nprofiler-popup-button-idle =\n  .label = Profiler\n  .tooltiptext = Record a performance profile\n\nprofiler-popup-button-recording =\n  .label = Profiler\n  .tooltiptext = The profiler is recording a profile\n\nprofiler-popup-button-capturing =\n  .label = Profiler\n  .tooltiptext = The profiler is capturing a profile\n\nprofiler-popup-header-text = { -profiler-brand-name }\n\nprofiler-popup-reveal-description-button =\n  .aria-label = Reveal more information\n\nprofiler-popup-description-title =\n  .value = Record, analyze, share\n\nprofiler-popup-description =\n  Collaborate on performance issues by publishing profiles to share with your team.\n\nprofiler-popup-learn-more-button =\n  .label = Learn more\n\nprofiler-popup-settings =\n  .value = Settings\n\n# This link takes the user to about:profiling, and is only visible with the Custom preset.\nprofiler-popup-edit-settings-button =\n  .label = Edit Settings…\n\nprofiler-popup-recording-screen = Recording…\n\nprofiler-popup-start-recording-button =\n  .label = Start Recording\n\nprofiler-popup-discard-button =\n  .label = Discard\n\nprofiler-popup-capture-button =\n  .label = Capture\n\nprofiler-popup-start-shortcut =\n  { PLATFORM() ->\n      [macos] ⌃⇧1\n     *[other] Ctrl+Shift+1\n  }\n\nprofiler-popup-capture-shortcut =\n  { PLATFORM() ->\n      [macos] ⌃⇧2\n     *[other] Ctrl+Shift+2\n  }\n\n## Profiler presets\n## They are shown in the popup's select box.\n\n# Presets and their l10n IDs are defined in the file\n# devtools/client/performance-new/shared/background.sys.mjs\n# Please take care that the same values are also defined in devtools' perftools.ftl.\n\nprofiler-popup-presets-web-developer-description = Recommended preset for most web app debugging, with low overhead.\nprofiler-popup-presets-web-developer-label =\n  .label = Web Developer\n\nprofiler-popup-presets-firefox-description = Recommended preset for profiling { -brand-shorter-name }.\nprofiler-popup-presets-firefox-label =\n  .label = { -brand-shorter-name }\n\nprofiler-popup-presets-graphics-description = Preset for investigating graphics bugs in { -brand-shorter-name }.\nprofiler-popup-presets-graphics-label =\n  .label = Graphics\n\nprofiler-popup-presets-media-description2 = Preset for investigating audio and video bugs in { -brand-shorter-name }.\nprofiler-popup-presets-media-label =\n  .label = Media\n\nprofiler-popup-presets-networking-description = Preset for investigating networking bugs in { -brand-shorter-name }.\nprofiler-popup-presets-networking-label =\n  .label = Networking\n\nprofiler-popup-presets-power-description = Preset for investigating power use bugs in { -brand-shorter-name }, with low overhead.\n# \"Power\" is used in the sense of energy (electricity used by the computer).\nprofiler-popup-presets-power-label =\n  .label = Power\n\nprofiler-popup-presets-custom-label =\n  .label = Custom\n\n## History panel\n\nappmenu-manage-history =\n    .label = Manage history\nappmenu-restore-session =\n    .label = Restore previous session\nappmenu-clear-history =\n    .label = Clear recent history…\nappmenu-recent-history-subheader = Recent history\nappmenu-recently-closed-tabs =\n    .label = Recently closed tabs\nappmenu-recently-closed-windows =\n    .label = Recently closed windows\n# This allows to search through the browser's history.\nappmenu-search-history =\n    .label = Search history\n\n## Help panel\n\nappmenu-help-header =\n    .title = { -brand-shorter-name } help\nappmenu-about =\n    .label = About { -brand-shorter-name }\n    .accesskey = A\nappmenu-get-help =\n    .label = Get help\n    .accesskey = h\nappmenu-help-more-troubleshooting-info =\n    .label = More troubleshooting information\n    .accesskey = t\nappmenu-help-report-site-issue =\n    .label = Report site issue…\nappmenu-help-share-ideas =\n    .label = Share ideas and feedback…\n    .accesskey = S\nappmenu-help-switch-device =\n    .label = Switching to a new device\n\n## appmenu-help-enter-troubleshoot-mode and appmenu-help-exit-troubleshoot-mode\n## are mutually exclusive, so it's possible to use the same accesskey for both.\n\nappmenu-help-enter-troubleshoot-mode2 =\n    .label = Troubleshoot Mode…\n    .accesskey = M\nappmenu-help-exit-troubleshoot-mode =\n    .label = Turn Troubleshoot Mode off\n    .accesskey = M\n\n## appmenu-help-report-deceptive-site and appmenu-help-not-deceptive\n## are mutually exclusive, so it's possible to use the same accesskey for both.\n\nappmenu-help-report-deceptive-site =\n    .label = Report deceptive site…\n    .accesskey = d\nappmenu-help-not-deceptive =\n    .label = This isn’t a deceptive site…\n    .accesskey = d\n\n## More Tools\n\nappmenu-customizetoolbar =\n    .label = Customize toolbar…\n\nappmenu-developer-tools-subheader = Browser tools\nappmenu-developer-tools-extensions =\n    .label = Extensions for developers\nappmenuitem-report-broken-site =\n  .label = Report broken site\n\n## Panel for privacy and security products\n\nappmenuitem-sign-in-account = Sign in to your account\n\nappmenuitem-monitor-title = { -monitor-brand-short-name }\nappmenuitem-monitor-description = Get data breach alerts\nappmenuitem-relay-title = { -relay-brand-short-name }\nappmenuitem-relay-description = Mask your real email and phone\nappmenuitem-vpn-title = { -mozilla-vpn-brand-name }\nappmenuitem-vpn-description = Protect your online activity\n";

/***/ })

}]);