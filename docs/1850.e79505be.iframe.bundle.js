"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[1850],{

/***/ 71850:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\nsanitize-prefs2 =\n    .title = Settings for Clearing History\n    .style = min-width: 34em\n\nsanitize-prefs-style =\n    .style = width: 17em\n\nsanitize-dialog-title2 =\n    .title = Clear browsing data and cookies\n    .style = min-width: 34em\n\nsanitize-dialog-title =\n    .title = Clear Recent History\n    .style = min-width: 34em\n\n# When \"Time range to clear\" is set to \"Everything\", this message is used for the\n# title instead of dialog-title.\nsanitize-dialog-title-everything =\n    .title = Clear All History\n    .style = min-width: 34em\n\nclear-data-settings-label = When closed, { -brand-short-name } should automatically clear all\n\nsanitize-on-shutdown-description = Automatically clear all checked items when { -brand-short-name } closes.\n\n## clear-time-duration-prefix is followed by a dropdown list, with\n## values localized using clear-time-duration-value-* messages.\n## clear-time-duration-suffix is left empty in English, but can be\n## used in other languages to change the structure of the message.\n##\n## This results in English:\n## Time range to clear: (Last Hour, Today, etc.)\n\nclear-time-duration-prefix =\n    .value = Time range to clear:{ \" \" }\n    .accesskey = T\n\nclear-time-duration-prefix2 =\n    .value = When:\n    .accesskey = W\n\nclear-time-duration-value-last-hour =\n    .label = Last hour\n\nclear-time-duration-value-last-2-hours =\n    .label = Last two hours\n\nclear-time-duration-value-last-4-hours =\n    .label = Last four hours\n\n# Variables:\n#   $midnightTime (String) - Time of midnight (00:00 hours) - to inform the user that history will be cleared after midnight\nclear-time-duration-value-since-midnight =\n    .label = Since { $midnightTime }\n\nclear-time-duration-value-today =\n    .label = Today\n\nclear-time-duration-value-everything =\n    .label = Everything\n\nclear-time-duration-suffix =\n    .value = { \"\" }\n\n## These strings are used as section comments and checkboxes\n## to select the items to remove\n\nhistory-section-label = History\n\nitem-history-and-downloads =\n    .label = Browsing & download history\n    .accesskey = B\n\nitem-history-form-data-downloads =\n    .label = History\n    .accesskey = H\n\nitem-history-form-data-downloads-description = Clears site and download history, saved form info, and searches\n\nitem-cookies =\n    .label = Cookies\n    .accesskey = C\n\n# Variables:\n#   $amount (Number) - Amount of site data currently stored on disk\n#   $unit (String) - Abbreviation of the unit that $amount is in, e.g. \"MB\"\nitem-cookies-site-data-with-size =\n    .label = Cookies and site data ({ $amount } { $unit })\n    .accesskey = e\n\nitem-cookies-site-data =\n    .label = Cookies and site data\n    .accesskey = e\n\nitem-cookies-site-data-description = May sign you out of sites or empty shopping carts\n\nitem-active-logins =\n    .label = Active logins\n    .accesskey = l\n\nitem-cache =\n    .label = Cache\n    .accesskey = a\n\n# Variables:\n#   $amount (Number) - Amount of cached data\n#   $unit (String) - Abbreviation of the unit that $amount is in, e.g. \"MB\"\nitem-cached-content-with-size =\n    .label = Temporary cached files and pages ({ $amount } { $unit })\n    .accesskey = f\n\nitem-cached-content =\n    .label = Temporary cached files and pages\n    .accesskey = f\n\nitem-cached-content-description = Clears items that help sites load faster\n\nitem-form-search-history =\n    .label = Form & search history\n    .accesskey = F\n\nitem-site-prefs =\n    .label = Site settings\n    .accesskey = i\n\nitem-site-prefs-description = Resets your permissions and site preferences to original settings\n\ndata-section-label = Data\n\nitem-site-settings =\n    .label = Site settings\n    .accesskey = S\n\nitem-offline-apps =\n    .label = Offline website data\n    .accesskey = O\n\nsanitize-everything-undo-warning = This action cannot be undone.\n\nwindow-close =\n    .key = w\n\nsanitize-button-ok =\n    .label = Clear Now\n\nsanitize-button-ok2 =\n    .label = Clear\n\nsanitize-button-ok-on-shutdown =\n    .label = Save Changes\n\n# The label for the default button between the user clicking it and the window\n# closing.  Indicates the items are being cleared.\nsanitize-button-clearing =\n    .label = Clearing\n\n# Warning that appears when \"Time range to clear\" is set to \"Everything\" in Clear\n# Recent History dialog, provided that the user has not modified the default set\n# of history items to clear.\nsanitize-everything-warning = All history will be cleared.\n\n# Warning that appears when \"Time range to clear\" is set to \"Everything\" in Clear\n# Recent History dialog, provided that the user has modified the default set of\n# history items to clear.\nsanitize-selected-warning = All selected items will be cleared.\n";

/***/ })

}]);