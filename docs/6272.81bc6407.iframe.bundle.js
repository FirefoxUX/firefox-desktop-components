"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[6272],{

/***/ 96272:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\naddons-page-title = Add-ons Manager\n\nsearch-header =\n    .placeholder = Search addons.mozilla.org\n    .searchbuttonlabel = Search\n\nsearch-header-shortcut =\n    .key = f\n\n## Variables\n##   $domain - Domain name where add-ons are available (e.g. addons.mozilla.org)\n\nlist-empty-get-extensions-message =\n    Get extensions and themes on <a data-l10n-name=\"get-extensions\">{ $domain }</a>\n\nlist-empty-get-dictionaries-message =\n    Get dictionaries on <a data-l10n-name=\"get-extensions\">{ $domain }</a>\n\nlist-empty-get-language-packs-message =\n    Get language packs on <a data-l10n-name=\"get-extensions\">{ $domain }</a>\n\n##\n\nlist-empty-installed =\n    .value = You don’t have any add-ons of this type installed\n\nlist-empty-available-updates =\n    .value = No updates found\n\nlist-empty-recent-updates =\n    .value = You haven’t recently updated any add-ons\n\nlist-empty-find-updates =\n    .label = Check For Updates\n\nlist-empty-button =\n    .label = Learn more about add-ons\n\nhelp-button = Add-ons Support\nsidebar-help-button-title =\n    .title = Add-ons Support\n\naddons-settings-button = { -brand-short-name } Settings\nsidebar-settings-button-title =\n    .title = { -brand-short-name } Settings\n\nshow-unsigned-extensions-button =\n    .label = Some extensions could not be verified\n\nshow-all-extensions-button =\n    .label = Show all extensions\n\ndetail-version =\n    .label = Version\n\ndetail-last-updated =\n    .label = Last Updated\n\naddon-detail-description-expand = Show more\naddon-detail-description-collapse = Show less\n\ndetail-contributions-description = The developer of this add-on asks that you help support its continued development by making a small contribution.\n\ndetail-contributions-button = Contribute\n    .title = Contribute to the development of this add-on\n    .accesskey = C\n\ndetail-update-type =\n    .value = Automatic Updates\n\ndetail-update-default =\n    .label = Default\n    .tooltiptext = Automatically install updates only if that’s the default\n\ndetail-update-automatic =\n    .label = On\n    .tooltiptext = Automatically install updates\n\ndetail-update-manual =\n    .label = Off\n    .tooltiptext = Don’t automatically install updates\n\n# Used as a description for the option to allow or block an add-on in private windows.\ndetail-private-browsing-label = Run in Private Windows\n\n# Some add-ons may elect to not run in private windows by setting incognito: not_allowed in the manifest.  This\n# cannot be overridden by the user.\ndetail-private-disallowed-label = Not Allowed in Private Windows\ndetail-private-disallowed-description2 = This extension does not run while private browsing. <a data-l10n-name=\"learn-more\">Learn more</a>\n\n# Some special add-ons are privileged, run in private windows automatically, and this permission can't be revoked\ndetail-private-required-label = Requires Access to Private Windows\ndetail-private-required-description2 = This extension has access to your online activities while private browsing. <a data-l10n-name=\"learn-more\">Learn more</a>\n\ndetail-private-browsing-on =\n    .label = Allow\n    .tooltiptext = Enable in Private Browsing\n\ndetail-private-browsing-off =\n    .label = Don’t Allow\n    .tooltiptext = Disable in Private Browsing\n\ndetail-home =\n    .label = Homepage\n\ndetail-home-value =\n    .value = { detail-home.label }\n\ndetail-repository =\n    .label = Add-on Profile\n\ndetail-repository-value =\n    .value = { detail-repository.label }\n\ndetail-check-for-updates =\n    .label = Check for Updates\n    .accesskey = U\n    .tooltiptext = Check for updates for this add-on\n\ndetail-show-preferences =\n    .label =\n        { PLATFORM() ->\n            [windows] Options\n           *[other] Preferences\n        }\n    .accesskey =\n        { PLATFORM() ->\n            [windows] O\n           *[other] P\n        }\n    .tooltiptext =\n        { PLATFORM() ->\n            [windows] Change this add-on’s options\n           *[other] Change this add-on’s preferences\n        }\n\ndetail-rating =\n    .value = Rating\n\naddon-restart-now =\n    .label = Restart now\n\ndisabled-unsigned-heading =\n    .value = Some add-ons have been disabled\n\ndisabled-unsigned-description =\n    The following add-ons have not been verified for use in { -brand-short-name }. You can\n    <label data-l10n-name=\"find-addons\">find replacements</label> or ask the developer to get them verified.\n\ndisabled-unsigned-learn-more = Learn more about our efforts to help keep you safe online.\n\ndisabled-unsigned-devinfo =\n    Developers interested in getting their add-ons verified can continue by reading our\n    <label data-l10n-name=\"learn-more\">manual</label>.\n\nplugin-deprecation-description =\n    Missing something? Some plugins are no longer supported by { -brand-short-name }. <label data-l10n-name=\"learn-more\">Learn More.</label>\n\nlegacy-warning-show-legacy = Show legacy extensions\n\nlegacy-extensions =\n    .value = Legacy Extensions\n\nlegacy-extensions-description =\n    These extensions do not meet current { -brand-short-name } standards so they have been deactivated. <label data-l10n-name=\"legacy-learn-more\">Learn about the changes to add-ons</label>\n\nprivate-browsing-description2 =\n    { -brand-short-name } is changing how extensions work in private browsing. Any new extensions you add to\n    { -brand-short-name } won’t run by default in Private Windows. Unless you allow it in settings, the\n    extension won’t work while private browsing, and won’t have access to your online activities\n    there. We’ve made this change to keep your private browsing private.\n    <label data-l10n-name=\"private-browsing-learn-more\">Learn how to manage extension settings</label>\n\naddon-category-discover = Recommendations\naddon-category-discover-title =\n    .title = Recommendations\naddon-category-extension = Extensions\naddon-category-extension-title =\n    .title = Extensions\naddon-category-theme = Themes\naddon-category-theme-title =\n    .title = Themes\naddon-category-plugin = Plugins\naddon-category-plugin-title =\n    .title = Plugins\naddon-category-dictionary = Dictionaries\naddon-category-dictionary-title =\n    .title = Dictionaries\naddon-category-locale = Languages\naddon-category-locale-title =\n    .title = Languages\naddon-category-available-updates = Available Updates\naddon-category-available-updates-title =\n    .title = Available Updates\naddon-category-recent-updates = Recent Updates\naddon-category-recent-updates-title =\n    .title = Recent Updates\naddon-category-sitepermission = Site Permissions\naddon-category-sitepermission-title =\n    .title = Site Permissions\n# String displayed in about:addons in the Site Permissions section\n# Variables:\n#  $host (string) - DNS host name for which the webextension enables permissions\naddon-sitepermission-host = Site Permissions for { $host }\n\n## These are global warnings\n\nextensions-warning-safe-mode = All add-ons have been disabled by safe mode.\nextensions-warning-check-compatibility = Add-on compatibility checking is disabled. You may have incompatible add-ons.\nextensions-warning-check-compatibility-button = Enable\n    .title = Enable add-on compatibility checking\nextensions-warning-update-security = Add-on update security checking is disabled. You may be compromised by updates.\nextensions-warning-update-security-button = Enable\n    .title = Enable add-on update security checking\n\n## Strings connected to add-on updates\n\naddon-updates-check-for-updates = Check for Updates\n    .accesskey = C\naddon-updates-view-updates = View Recent Updates\n    .accesskey = V\n\n# This menu item is a checkbox that toggles the default global behavior for\n# add-on update checking.\n\naddon-updates-update-addons-automatically = Update Add-ons Automatically\n    .accesskey = A\n\n## Specific add-ons can have custom update checking behaviors (\"Manually\",\n## \"Automatically\", \"Use default global behavior\"). These menu items reset the\n## update checking behavior for all add-ons to the default global behavior\n## (which itself is either \"Automatically\" or \"Manually\", controlled by the\n## extensions-updates-update-addons-automatically.label menu item).\n\naddon-updates-reset-updates-to-automatic = Reset All Add-ons to Update Automatically\n    .accesskey = R\naddon-updates-reset-updates-to-manual = Reset All Add-ons to Update Manually\n    .accesskey = R\n\n## Status messages displayed when updating add-ons\n\naddon-updates-updating = Updating add-ons\naddon-updates-installed = Your add-ons have been updated.\naddon-updates-none-found = No updates found\naddon-updates-manual-updates-found = View Available Updates\n\n## Add-on install/debug strings for page options menu\n\naddon-install-from-file = Install Add-on From File…\n    .accesskey = I\naddon-install-from-file-dialog-title = Select add-on to install\naddon-install-from-file-filter-name = Add-ons\naddon-open-about-debugging = Debug Add-ons\n    .accesskey = b\n\n## Extension shortcut management\n\n# This is displayed in the page options menu\naddon-manage-extensions-shortcuts = Manage Extension Shortcuts\n    .accesskey = S\n\nshortcuts-no-addons = You don’t have any extensions enabled.\nshortcuts-no-commands = The following extensions do not have shortcuts:\nshortcuts-input =\n  .placeholder = Type a shortcut\n\nshortcuts-browserAction2 = Activate toolbar button\nshortcuts-pageAction = Activate page action\nshortcuts-sidebarAction = Toggle the sidebar\n\nshortcuts-modifier-mac = Include Ctrl, Alt, or ⌘\nshortcuts-modifier-other = Include Ctrl or Alt\nshortcuts-invalid = Invalid combination\nshortcuts-letter = Type a letter\nshortcuts-system = Can’t override a { -brand-short-name } shortcut\n\n# String displayed in warning label when there is a duplicate shortcut\nshortcuts-duplicate = Duplicate shortcut\n\n# String displayed when a keyboard shortcut is already assigned to more than one add-on\n# Variables:\n#   $shortcut (string) - Shortcut string for the add-on\nshortcuts-duplicate-warning-message = { $shortcut } is being used as a shortcut in more than one case. Duplicate shortcuts may cause unexpected behavior.\n\n# String displayed when a keyboard shortcut is already used by another add-on\n# Variables:\n#   $addon (string) - Name of the add-on\nshortcuts-exists = Already in use by { $addon }\n\n# Variables:\n#   $numberToShow (number) - Number of other elements available to show\nshortcuts-card-expand-button =\n    { $numberToShow ->\n        *[other] Show { $numberToShow } More\n    }\n\nshortcuts-card-collapse-button = Show Less\n\nheader-back-button =\n    .title = Go back\n\n## Recommended add-ons page\n\n# Explanatory introduction to the list of recommended add-ons. The action word\n# (\"recommends\") in the final sentence is a link to external documentation.\ndiscopane-intro =\n    Extensions and themes are like apps for your browser, and they let you\n    protect passwords, download videos, find deals, block annoying ads, change\n    how your browser looks, and much more. These small software programs are\n    often developed by a third party. Here’s a selection { -brand-product-name }\n    <a data-l10n-name=\"learn-more-trigger\">recommends</a> for exceptional\n    security, performance, and functionality.\n\n# Notice to make user aware that the recommendations are personalized.\ndiscopane-notice-recommendations =\n    Some of these recommendations are personalized. They are based on other\n    extensions you’ve installed, profile preferences, and usage statistics.\ndiscopane-notice-learn-more = Learn more\n\nprivacy-policy = Privacy Policy\n\n# Refers to the author of an add-on, shown below the name of the add-on.\n# Variables:\n#   $author (string) - The name of the add-on developer.\ncreated-by-author = by <a data-l10n-name=\"author\">{ $author }</a>\n# Shows the number of daily users of the add-on.\n# Variables:\n#   $dailyUsers (number) - The number of daily users.\nuser-count = Users: { $dailyUsers }\ninstall-extension-button = Add to { -brand-product-name }\ninstall-theme-button = Install Theme\n# The label of the button that appears after installing an add-on. Upon click,\n# the detailed add-on view is opened, from where the add-on can be managed.\nmanage-addon-button = Manage\nfind-more-addons = Find more add-ons\nfind-more-themes = Find more themes\n\n# This is a label for the button to open the \"more options\" menu, it is only\n# used for screen readers.\naddon-options-button =\n    .aria-label = More Options\n\n## Add-on actions\n\nreport-addon-button = Report\nremove-addon-button = Remove\n# The link will always be shown after the other text.\nremove-addon-disabled-button = Can’t Be Removed <a data-l10n-name=\"link\">Why?</a>\ndisable-addon-button = Disable\nenable-addon-button = Enable\n# This is used for the toggle on the extension card, it's a checkbox and this\n# is always its label.\nextension-enable-addon-button-label =\n    .aria-label = Enable\npreferences-addon-button =\n    { PLATFORM() ->\n        [windows] Options\n       *[other] Preferences\n    }\ndetails-addon-button = Details\nrelease-notes-addon-button = Release Notes\npermissions-addon-button = Permissions\n\nextension-enabled-heading = Enabled\nextension-disabled-heading = Disabled\n\ntheme-enabled-heading = Enabled\ntheme-disabled-heading2 = Saved Themes\ntheme-monochromatic-heading = Colorways\ntheme-monochromatic-subheading = Vibrant new colorways from { -brand-product-name }. Available for a limited time.\n\n# Refers to the button label for the colorways card when a user does not have a colorway theme enabled.\ntheme-colorways-button = Try Colorways\n# Refers to the button label for the colorways card when a user has a colorway theme enabled.\ntheme-colorways-button-colorway-enabled = Change Colorway\n# Variables:\n#   $expiryDate (string) - Date on which the colorway collection expires. When formatting this, you may omit the year, only exposing the month and day, as colorway collections will always expire within a year.\ncolorway-collection-expiry-label = Expires { DATETIME($expiryDate, month: \"long\", day: \"numeric\") }\n\nplugin-enabled-heading = Enabled\nplugin-disabled-heading = Disabled\n\ndictionary-enabled-heading = Enabled\ndictionary-disabled-heading = Disabled\n\nlocale-enabled-heading = Enabled\nlocale-disabled-heading = Disabled\n\nsitepermission-enabled-heading = Enabled\nsitepermission-disabled-heading = Disabled\n\nalways-activate-button = Always Activate\nnever-activate-button = Never Activate\n\naddon-detail-author-label = Author\naddon-detail-version-label = Version\naddon-detail-last-updated-label = Last Updated\naddon-detail-homepage-label = Homepage\naddon-detail-rating-label = Rating\n\n# Message for add-ons with a staged pending update.\ninstall-postponed-message = This extension will be updated when { -brand-short-name } restarts.\ninstall-postponed-button = Update Now\n\n# The average rating that the add-on has received.\n# Variables:\n#   $rating (number) - A number between 0 and 5. The translation should show at most one digit after the comma.\nfive-star-rating =\n  .title = Rated { NUMBER($rating, maximumFractionDigits: 1) } out of 5\n\n# This string is used to show that an add-on is disabled.\n# Variables:\n#   $name (string) - The name of the add-on\naddon-name-disabled = { $name } (disabled)\n\n# The number of reviews that an add-on has received on AMO.\n# Variables:\n#   $numberOfReviews (number) - The number of reviews received\naddon-detail-reviews-link =\n    { $numberOfReviews ->\n        [one] { $numberOfReviews } review\n       *[other] { $numberOfReviews } reviews\n    }\n\n## Pending uninstall message bar\n\n# Variables:\n#   $addon (string) - Name of the add-on\npending-uninstall-description = <span data-l10n-name=\"addon-name\">{ $addon }</span> has been removed.\npending-uninstall-undo-button = Undo\n\naddon-detail-updates-label = Allow automatic updates\naddon-detail-updates-radio-default = Default\naddon-detail-updates-radio-on = On\naddon-detail-updates-radio-off = Off\naddon-detail-update-check-label = Check for Updates\ninstall-update-button = Update\n\n# This is the tooltip text for the private browsing badge in about:addons. The\n# badge is the private browsing icon included next to the extension's name.\naddon-badge-private-browsing-allowed2 =\n    .title = Allowed in private windows\n    .aria-label = { addon-badge-private-browsing-allowed2.title }\naddon-detail-private-browsing-help = When allowed, the extension will have access to your online activities while private browsing. <a data-l10n-name=\"learn-more\">Learn more</a>\naddon-detail-private-browsing-allow = Allow\naddon-detail-private-browsing-disallow = Don’t Allow\n\n## This is the tooltip text for the recommended badges for an extension in about:addons. The\n## badge is a small icon displayed next to an extension when it is recommended on AMO.\n\naddon-badge-recommended2 =\n  .title = { -brand-product-name } only recommends extensions that meet our standards for security and performance\n  .aria-label = { addon-badge-recommended2.title }\n# We hard code \"Mozilla\" in the string below because the extensions are built\n# by Mozilla and we don't want forks to display \"by Fork\".\naddon-badge-line3 =\n  .title = Official extension built by Mozilla. Meets security and performance standards\n  .aria-label = { addon-badge-line3.title }\naddon-badge-verified2 =\n  .title = This extension has been reviewed to meet our standards for security and performance\n  .aria-label = { addon-badge-verified2.title }\n\n##\n\navailable-updates-heading = Available Updates\nrecent-updates-heading = Recent Updates\n\nrelease-notes-loading = Loading…\nrelease-notes-error = Sorry, but there was an error loading the release notes.\n\naddon-permissions-empty = This extension doesn’t require any permissions\naddon-permissions-required = Required permissions for core functionality:\naddon-permissions-optional = Optional permissions for added functionality:\naddon-permissions-learnmore = Learn more about permissions\n\nrecommended-extensions-heading = Recommended Extensions\nrecommended-themes-heading = Recommended Themes\n\n# Variables:\n#   $hostname (string) - Host where the permissions are granted\naddon-sitepermissions-required = Grants the following capabilities to <span data-l10n-name=\"hostname\">{ $hostname }</span>:\n\n# A recommendation for the Firefox Color theme shown at the bottom of the theme\n# list view. The \"Firefox Color\" name itself should not be translated.\nrecommended-theme-1 = Feeling creative? <a data-l10n-name=\"link\">Build your own theme with Firefox Color.</a>\n\n## Page headings\n\nextension-heading = Manage Your Extensions\ntheme-heading = Manage Your Themes\nplugin-heading = Manage Your Plugins\ndictionary-heading = Manage Your Dictionaries\nlocale-heading = Manage Your Languages\nupdates-heading = Manage Your Updates\nsitepermission-heading = Manage Your Site Permissions\ndiscover-heading = Personalize Your { -brand-short-name }\nshortcuts-heading = Manage Extension Shortcuts\n\ndefault-heading-search-label = Find more add-ons\naddons-heading-search-input =\n    .placeholder = Search addons.mozilla.org\n\naddon-page-options-button =\n    .title = Tools for all add-ons\n\n## Detail notifications\n## Variables:\n##   $name (string) - Name of the add-on.\n\n# Variables:\n#   $version (string) - Application version.\ndetails-notification-incompatible = { $name } is incompatible with { -brand-short-name } { $version }.\ndetails-notification-incompatible-link = More Information\n\ndetails-notification-unsigned-and-disabled = { $name } could not be verified for use in { -brand-short-name } and has been disabled.\ndetails-notification-unsigned-and-disabled-link = More Information\n\ndetails-notification-unsigned = { $name } could not be verified for use in { -brand-short-name }. Proceed with caution.\ndetails-notification-unsigned-link = More Information\n\ndetails-notification-blocked = { $name } has been disabled due to security or stability issues.\ndetails-notification-blocked-link = More Information\n\ndetails-notification-softblocked = { $name } is known to cause security or stability issues.\ndetails-notification-softblocked-link = More Information\n\ndetails-notification-gmp-pending = { $name } will be installed shortly.\n";

/***/ })

}]);