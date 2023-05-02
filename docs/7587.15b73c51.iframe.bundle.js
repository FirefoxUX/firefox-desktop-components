"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[7587],{

/***/ 57587:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\nmigration-wizard-selection-header = Import Browser Data\nmigration-wizard-selection-list = Select the data you’d like to import.\n\n# Shown in the new migration wizard's dropdown selector for choosing the browser\n# to import from. This variant is shown when the selected browser doesn't support\n# user profiles, and so we only show the browser name.\n#\n# Variables:\n#  $sourceBrowser (String): the name of the browser to import from.\nmigration-wizard-selection-option-without-profile = { $sourceBrowser }\n\n# Shown in the new migration wizard's dropdown selector for choosing the browser\n# and user profile to import from. This variant is shown when the selected browser\n# supports user profiles.\n#\n# Variables:\n#  $sourceBrowser (String): the name of the browser to import from.\n#  $profileName (String): the name of the user profile to import from.\nmigration-wizard-selection-option-with-profile = { $sourceBrowser } — { $profileName }\n\n# Each migrator is expected to include a display name string, and that display\n# name string should have a key with \"migration-wizard-migrator-display-name-\"\n# as a prefix followed by the unique identification key for the migrator.\n\nmigration-wizard-migrator-display-name-brave = Brave\nmigration-wizard-migrator-display-name-canary = Chrome Canary\nmigration-wizard-migrator-display-name-chrome = Chrome\nmigration-wizard-migrator-display-name-chrome-beta = Chrome Beta\nmigration-wizard-migrator-display-name-chrome-dev = Chrome Dev\nmigration-wizard-migrator-display-name-chromium = Chromium\nmigration-wizard-migrator-display-name-chromium-360se = 360 Secure Browser\nmigration-wizard-migrator-display-name-chromium-edge = Microsoft Edge\nmigration-wizard-migrator-display-name-chromium-edge-beta = Microsoft Edge Beta\nmigration-wizard-migrator-display-name-edge-legacy = Microsoft Edge Legacy\nmigration-wizard-migrator-display-name-firefox = Firefox\nmigration-wizard-migrator-display-name-file-password-csv = Passwords from CSV file\nmigration-wizard-migrator-display-name-ie = Microsoft Internet Explorer\nmigration-wizard-migrator-display-name-opera = Opera\nmigration-wizard-migrator-display-name-opera-gx = Opera GX\nmigration-wizard-migrator-display-name-safari = Safari\nmigration-wizard-migrator-display-name-vivaldi = Vivaldi\n\n## These strings will be displayed based on how many resources are selected to import\n\nmigration-all-available-data-label = Import all available data\nmigration-no-selected-data-label = No data selected for import\nmigration-selected-data-label = Import selected data\n\n##\n\nmigration-select-all-option-label = Select all\nmigration-bookmarks-option-label = Bookmarks\n\n# Favorites is used for Bookmarks when importing from Internet Explorer or\n# Edge, as this is the terminology for bookmarks on those browsers.\nmigration-favorites-option-label = Favorites\n\nmigration-logins-and-passwords-option-label = Saved logins and passwords\nmigration-history-option-label = Browsing history\nmigration-form-autofill-option-label = Form autofill data\n\nmigration-passwords-from-file-progress-header = Import Passwords File\nmigration-passwords-from-file-success-header = Passwords Imported Successfully\nmigration-passwords-from-file = Checking file for passwords\nmigration-passwords-new = New passwords\nmigration-passwords-updated = Existing passwords\n\nmigration-passwords-from-file-picker-title = Import Passwords File\n# A description for the .csv file format that may be shown as the file type\n# filter by the operating system.\nmigration-passwords-from-file-csv-filter-title =\n  { PLATFORM() ->\n      [macos] CSV Document\n     *[other] CSV File\n  }\n# A description for the .tsv file format that may be shown as the file type\n# filter by the operating system. TSV is short for 'tab separated values'.\nmigration-passwords-from-file-tsv-filter-title =\n  { PLATFORM() ->\n      [macos] TSV Document\n     *[other] TSV File\n  }\n\n# Shown in the migration wizard after importing passwords from a file\n# has completed, if new passwords were added.\n#\n# Variables:\n#  $newEntries (Number): the number of new successfully imported passwords\nmigration-wizard-progress-success-new-passwords =\n    { $newEntries ->\n        [one] { $newEntries } added\n       *[other] { $newEntries } added\n    }\n\n# Shown in the migration wizard after importing passwords from a file\n# has completed, if existing passwords were updated.\n#\n# Variables:\n#  $updatedEntries (Number): the number of updated passwords\nmigration-wizard-progress-success-updated-passwords =\n    { $updatedEntries ->\n        [one] { $updatedEntries } updated\n       *[other] { $updatedEntries } updated\n    }\n\nmigration-import-button-label = Import\nmigration-choose-to-import-from-file-button-label = Import From File\nmigration-import-from-file-button-label = Select File\nmigration-cancel-button-label = Cancel\nmigration-done-button-label = Done\nmigration-continue-button-label = Continue\n\nmigration-wizard-import-browser-no-browsers = { -brand-short-name } couldn’t find any programs that contain bookmark, history or password data.\nmigration-wizard-import-browser-no-resources = There was an error. { -brand-short-name } can’t find any data to import from that browser profile.\n\n## These strings will be used to create a dynamic list of items that can be\n## imported. The list will be created using Intl.ListFormat(), so it will\n## follow each locale's rules, and the first item will be capitalized by code.\n## When applicable, the resources should be in their plural form.\n## For example, a possible list could be \"Bookmarks, passwords and autofill data\".\n\nmigration-list-bookmark-label = bookmarks\n\n# “favorites” refers to bookmarks in Edge and Internet Explorer. Use the same terminology\n# if the browser is available in your language.\nmigration-list-favorites-label = favorites\nmigration-list-password-label = passwords\nmigration-list-history-label = history\nmigration-list-autofill-label = autofill data\n\n##\n\nmigration-wizard-progress-header = Importing Data\nmigration-wizard-progress-done-header = Data Imported Successfully\nmigration-wizard-progress-icon-in-progress =\n  .aria-label = Importing…\nmigration-wizard-progress-icon-completed =\n  .aria-label = Completed\n\nmigration-safari-password-import-header = Import Passwords from Safari\nmigration-safari-password-import-steps-header = To import Safari passwords:\nmigration-safari-password-import-step1 = In Safari, open “Safari” menu and go to Preferences > Passwords\nmigration-safari-password-import-step2 = Select the <img data-l10n-name=\"safari-icon-3dots\"/> button and choose “Export All Passwords”\nmigration-safari-password-import-step3 = Save the passwords file\nmigration-safari-password-import-step4 = Use “Select File” below to choose the passwords file you saved\nmigration-safari-password-import-skip-button = Skip\nmigration-safari-password-import-select-button = Select File\n\n\n# Shown in the migration wizard after importing bookmarks from another\n# browser has completed.\n#\n# Variables:\n#  $quantity (Number): the number of successfully imported bookmarks\nmigration-wizard-progress-success-bookmarks =\n    { $quantity ->\n        [one] { $quantity } bookmark\n       *[other] { $quantity } bookmarks\n    }\n\n# Shown in the migration wizard after importing bookmarks from either\n# Internet Explorer or Edge.\n#\n# Use the same terminology if the browser is available in your language.\n#\n# Variables:\n#  $quantity (Number): the number of successfully imported bookmarks\nmigration-wizard-progress-success-favorites =\n    { $quantity ->\n        [one] { $quantity } favorite\n       *[other] { $quantity } favorites\n    }\n\n# Shown in the migration wizard after importing passwords from another\n# browser has completed.\n#\n# Variables:\n#  $quantity (Number): the number of successfully imported passwords\nmigration-wizard-progress-success-passwords =\n    { $quantity ->\n        [one] { $quantity } password\n       *[other] { $quantity } passwords\n    }\n\n# Shown in the migration wizard after importing history from another\n# browser has completed.\n#\n# Variables:\n#  $maxAgeInDays (Number): the maximum number of days of history that might be imported.\nmigration-wizard-progress-success-history =\n    { $maxAgeInDays ->\n        [one] From the last day\n       *[other] From the last { $maxAgeInDays } days\n    }\n\nmigration-wizard-progress-success-formdata = Form history\n\nmigration-wizard-safari-permissions-sub-header = To import Safari bookmarks and browsing history:\nmigration-wizard-safari-instructions-continue = Select “Continue”\nmigration-wizard-safari-instructions-folder = Select Safari folder in the list and choose “Open”\nmigration-wizard-safari-select-button = Select File\n";

/***/ })

}]);