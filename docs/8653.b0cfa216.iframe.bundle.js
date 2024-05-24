"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[8653],{

/***/ 8653:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\nsettings-data-backup-header = Backup\nsettings-data-backup-toggle = Manage backup\n\n## These strings are displayed in a modal when users want to turn on scheduled backups.\n\nturn-on-scheduled-backups-header = Turn on backup\nturn-on-scheduled-backups-description = { -brand-short-name } will create a snapshot of your data every 60 minutes. You can restore it if there’s a problem or you get a new device.\nturn-on-scheduled-backups-support-link = What will be backed up?\n\n# \"Location\" refers to the save location or a folder where users want backups stored.\nturn-on-scheduled-backups-location-label = Location\n# Variables:\n#   $recommendedFolder (String) - Name of the recommended folder for saving backups\nturn-on-scheduled-backups-location-default-folder =\n    .value = { $recommendedFolder } (recommended)\nturn-on-scheduled-backups-location-choose-button =\n    { PLATFORM() ->\n        [macos] Choose…\n        *[other] Browse…\n    }\n\nturn-on-scheduled-backups-encryption-label = Back up your sensitive data\nturn-on-scheduled-backups-encryption-description = Back up your passwords, payment methods, and cookies with encryption.\nturn-on-scheduled-backups-encryption-create-password-label = Password\n# Users will be prompted to re-type a password, to ensure that the password is entered correctly.\nturn-on-scheduled-backups-encryption-repeat-password-label = Repeat password\n\nturn-on-scheduled-backups-cancel-button = Cancel\nturn-on-scheduled-backups-confirm-button = Turn on backup\n\n##\n";

/***/ })

}]);