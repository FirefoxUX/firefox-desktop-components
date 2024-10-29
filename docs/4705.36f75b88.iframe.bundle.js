"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[4705],{

/***/ 44705:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\nfilter-input =\n  .placeholder = Search passwords\n  .key = F\n  .aria-label = Search passwords\n\nmenu-more-options-button =\n  .title = More options\n\nmore-options-popup =\n  .aria-label = More Options\n\n## Commands\n\ncommand-copy = Copy\ncommand-reveal = Reveal\ncommand-conceal = Conceal\ncommand-toggle = Toggle\ncommand-open = Open\ncommand-delete = Remove record\ncommand-edit = Edit\ncommand-save = Save\ncommand-cancel = Cancel\n\n## Passwords\n\npasswords-section-label = Passwords\npasswords-disabled = Passwords are disabled\n\npasswords-expand-section-tooltip = Show Passwords\npasswords-collapse-section-tooltip = Hide Passwords\n\npasswords-dismiss-breach-alert-command = Dismiss breach alert\npasswords-command-create = Add Password\npasswords-command-import-from-browser = Import from Another Browser…\npasswords-command-import = Import from a File…\npasswords-command-export = Export Passwords…\npasswords-command-remove-all = Remove All Passwords…\npasswords-command-settings = Settings\npasswords-command-help = Help\npasswords-command-sort-name = Sort By Name (A-Z)\n# This message can be seen when sorting logins by breached or vulnerable alerts.\npasswords-command-sort-alerts = Sort By Alerts\n\npasswords-os-auth-dialog-caption = { -brand-full-name }\n\n# This message can be seen when attempting to export a password in about:logins on Windows.\npasswords-export-os-auth-dialog-message-win = To export your passwords, enter your Windows login credentials. This helps protect the security of your accounts.\n# This message can be seen when attempting to export a password in about:logins\n# The macOS strings are preceded by the operating system with \"Firefox is trying to \"\n# and includes subtitle of \"Enter password for the user \"xxx\" to allow this.\" These\n# notes are only valid for English. only provide the reason that account verification is needed. Do not put a complete sentence here.\npasswords-export-os-auth-dialog-message-macosx = export saved passwords\n\n# This message can be seen when attempting to reveal a password in contextual password manager on Windows\npasswords-reveal-password-os-auth-dialog-message-win = To view your password, enter your Windows login credentials. This helps protect the security of your accounts.\n# The MacOS string is preceded by the operating system with \"Firefox is trying to \".\n# Only provide the reason that account verification is needed. Do not put a complete sentence here.\npasswords-reveal-password-os-auth-dialog-message-macosx = reveal the saved password\n\n# This message can be seen when attempting to copy a password in contextual password manager on Windows.\npasswords-copy-password-os-auth-dialog-message-win = To copy your password, enter your Windows login credentials. This helps protect the security of your accounts.\n# The MacOS string is preceded by the operating system with \"Firefox is trying to \".\n# Only provide the reason that account verification is needed. Do not put a complete sentence here.\npasswords-copy-password-os-auth-dialog-message-macosx = copy the saved password\n\npasswords-import-file-picker-title = Import Passwords\npasswords-import-file-picker-import-button = Import\n\n# A description for the .csv file format that may be shown as the file type\n# filter by the operating system.\npasswords-import-file-picker-csv-filter-title =\n  { PLATFORM() ->\n      [macos] CSV Document\n     *[other] CSV File\n  }\n# A description for the .tsv file format that may be shown as the file type\n# filter by the operating system. TSV is short for 'tab separated values'.\npasswords-import-file-picker-tsv-filter-title =\n  { PLATFORM() ->\n      [macos] TSV Document\n     *[other] TSV File\n  }\n\npasswords-import-success-heading =\n  .heading = Passwords imported\n\n# Variables\n#   $added (number) - Number of added passwords\n#   $modified (number) - Number of modified passwords\npasswords-import-success-message =\n  New passwords added: { $added }<br/>Existing passwords updated: { $modified }\n\npasswords-import-detailed-report = View detailed report\npasswords-import-success-button = Done\n\npasswords-import-error-heading-and-message =\n  .heading = Couldn’t import passwords\n  .message = Make sure your file includes a column for websites, usernames, and passwords.\npasswords-import-error-button-try-again = Try Again\npasswords-import-error-button-cancel = Cancel\npasswords-import-learn-more = Learn about importing passwords\n\n# Export passwords to file dialog\nexport-passwords-dialog-title = Export passwords to file?\n# This string recommends to the user that they delete the exported password file that is saved on their local machine.\nexport-passwords-dialog-message = After you export, we recommend deleting it so others who may use this device can’t see your passwords.\nexport-passwords-dialog-confirm-button = Continue with export\n\n# Title of the file picker dialog\npasswords-export-file-picker-title = Export Passwords from { -brand-short-name }\n# The default file name shown in the file picker when exporting saved logins.\n# The resultant filename will end in .csv (added in code).\npasswords-export-file-picker-default-filename = passwords\npasswords-export-file-picker-export-button = Export\n# A description for the .csv file format that may be shown as the file type\n# filter by the operating system.\npasswords-export-file-picker-csv-filter-title =\n  { PLATFORM() ->\n      [macos] CSV Document\n     *[other] CSV File\n  }\n\n# Variables\n#   $count (number) - Number of passwords\npasswords-count =\n  { $count ->\n      [one] { $count } password\n     *[other] { $count } passwords\n  }\n\n# Variables\n#   $count (number) - Number of filtered passwords\n#   $total (number) - Total number of passwords\npasswords-filtered-count =\n  { $total ->\n      [one] { $count } of { $total } password\n     *[other] { $count } of { $total } passwords\n  }\n\n# Confirm the removal of all saved passwords\n#   $total (number) - Total number of passwords\npasswords-remove-all-title =\n  { $total ->\n     [one] Remove password?\n    *[other] Remove all { $total } passwords?\n  }\n\n# Checkbox label to confirm the removal of saved passwords\n#   $total (number) - Total number of passwords\npasswords-remove-all-confirm =\n  { $total ->\n     [1] Yes, remove password\n    *[other] Yes, remove passwords\n  }\n\n# Button label to confirm removal of saved passwords\n#   $total (number) - Total number of passwords\npasswords-remove-all-confirm-button =\n  { $total ->\n     [1] Remove\n    *[other] Remove all\n  }\n\n# Message to confirm the removal of all saved passwords when user DOES NOT HAVE SYNC\n#   $total (number) - Total number of passwords\npasswords-remove-all-message =\n  { $total ->\n     [1] This will remove your password saved to { -brand-short-name } and any breach alerts. You cannot undo this action.\n    *[other] This will remove the passwords saved to { -brand-short-name } and any breach alerts. You cannot undo this action.\n  }\n\n# Message for modal to confirm the removal of all saved passwords when user HAS SYNC\n#   $total (number) - Total number of passwords\npasswords-remove-all-message-sync =\n  { $total ->\n     [1] This will remove the password saved to { -brand-short-name } on all your synced devices and remove any breach alerts. You cannot undo this action.\n    *[other] This will remove all passwords saved to { -brand-short-name } on all your synced devices and remove any breach alerts. You cannot undo this action.\n  }\n\npasswords-origin-label = Website\n# The attribute .data-after describes the text that should be displayed for the ::after pseudo-selector\npasswords-username-label = Username\n  .data-after = Copied\n# The attribute .data-after describes the text that should be displayed for the ::after pseudo-selector\npasswords-password-label = Password\n  .data-after = Copied\n\npasswords-radiogroup-label =\n  .aria-label = Filter passwords\n\n# Radiobutton label to display total number of passwords\n#   $total (number) - Total number of passwords\npasswords-radiobutton-all = All ({ $total })\n\n# Radiobutton label to display total number of alerts\n#   $total (number) - Total number of alerts\npasswords-radiobutton-alerts = Alerts ({ $total })\n\n## Login Form\n\npasswords-create-label =\n  .label = Add password\npasswords-edit-label =\n  .label = Edit password\npasswords-origin-tooltip = Enter the exact address where you’ll sign in to this site.\npasswords-username-tooltip = Enter the username, email address, or account number you use to sign in.\npasswords-password-tooltip = Enter the password used to sign in to this account.\n\n## Password Card\n\npasswords-list-label =\n  .aria-label = Passwords\n\nwebsite-icon =\n  .alt = Website Icon\ncopy-icon =\n  .alt = Copy\ncheck-icon =\n  .alt = Copied\nalert-icon =\n  .alt = Warning\n\n# Variables\n#   $url (string) - The url associated with the login\norigin-login-line =\n  .aria-label = Visit { $url }\n  .title = Visit { $url }\n# Variables\n#   $username (string) - The username associated with the login\nusername-login-line =\n  .aria-label = Copy Username { $username }\n  .title = Copy Username { $username }\npassword-login-line =\n  .aria-label = Copy Password\n  .title = Copy Password\nedit-login-button = Edit\n  .tooltiptext = Edit Password\n\nshow-password-button =\n  .aria-label = Show Password\n  .title = Show Password\nhide-password-button =\n  .aria-label = Hide Password\n  .title = Hide Password\n\n# The message displayed when the search text does not match any of the user's saved logins.\npasswords-no-passwords-found-header =\n  .heading = No passwords found\npasswords-no-passwords-found-message = Try a different search term and try again.\n\n## When the user has no saved passwords, we display the following messages to inform the user they can save\n## their passwords safely and securely in Firefox:\n\n# This string encourages the user to save their passwords in Firefox (the \"safe spot\").\npasswords-no-passwords-header = Save your passwords to a safe spot.\n# This string informs that we (Firefox) store all passwords securely and will notify them of any breaches and alerts their\n# passwords may be involved in.\npasswords-no-passwords-message = All passwords are encrypted and we’ll watch out for breaches and alerts if you’re affected.\n# This string encourages the user to save their passwords to Firefox again.\npasswords-no-passwords-get-started-message = Add them here to get started.\n# This string is displayed in a button. If the user clicks it, they will be taken to a form to create a new password.\npasswords-add-manually = Add manually\n\n## Payments\n\npayments-command-create = Add Payment Method\n\npayments-section-label = Payment methods\npayments-disabled = Payments methods are disabled\n\npayments-expand-section-tooltip = Show Payments\npayments-collapse-section-tooltip = Hide Payments\n\n# Variables\n#   $count (number) - Number of payment methods\npayments-count =\n  { $count ->\n      [one] { $count } payment method\n     *[other] { $count } payment methods\n  }\n\n# Variables\n#   $count (number) - Number of filtered payment methods\n#   $total (number) - Total number of payment methods\npayments-filtered-count =\n  { $total ->\n      [one] { $count } of { $total } payment method\n     *[other] { $count } of { $total } payment methods\n  }\n\ncard-number-label = Card Number\ncard-expiration-label = Expires on\ncard-holder-label = Name on Card\n\n## Addresses\n\naddresses-command-create = Add Address\n\naddresses-section-label = Addresses\naddresses-disabled = Addresses are disabled\n\naddresses-expand-section-tooltip = Show Addresses\naddresses-collapse-section-tooltip = Hide Addresses\n\n# Variables\n#   $count (number) - Number of addresses\naddresses-count =\n  { $count ->\n      [one] { $count } address\n     *[other] { $count } addresses\n  }\n\n# Variables\n#   $count (number) - Number of filtered addresses\n#   $total (number) - Total number of addresses\naddresses-filtered-count =\n  { $total ->\n      [one] { $count } of { $total } address\n     *[other] { $count } of { $total } addresses\n  }\n\naddress-name-label = Name\naddress-phone-label = Phone\naddress-email-label = Email\n";

/***/ })

}]);