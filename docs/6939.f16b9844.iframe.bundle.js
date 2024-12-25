"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[6939],{

/***/ 86939:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\n## Headers used in the webextension permissions dialog,\n## See https://bug1308309.bmoattachments.org/attachment.cgi?id=8814612\n## for an example of the full dialog.\n## Note: This string will be used as raw markup. Avoid characters like <, >, &\n## Variables:\n##   $extension (String): replaced with the localized name of the extension.\n\nwebext-perms-header = Add { $extension }?\nwebext-perms-header-with-perms = Add { $extension }? This extension will have permission to:\nwebext-perms-header-unsigned = Add { $extension }? This extension is unverified. Malicious extensions can steal your private information or compromise your computer. Only add it if you trust the source.\nwebext-perms-header-unsigned-with-perms = Add { $extension }? This extension is unverified. Malicious extensions can steal your private information or compromise your computer. Only add it if you trust the source. This extension will have permission to:\nwebext-perms-sideload-header = { $extension } added\nwebext-perms-optional-perms-header = { $extension } requests additional permissions.\n\n##\n\nwebext-perms-add =\n    .label = Add\n    .accesskey = A\nwebext-perms-cancel =\n    .label = Cancel\n    .accesskey = C\n\nwebext-perms-sideload-text = Another program on your computer installed an add-on that may affect your browser. Please review this add-on’s permissions requests and choose to Enable or Cancel (to leave it disabled).\nwebext-perms-sideload-text-no-perms = Another program on your computer installed an add-on that may affect your browser. Please choose to Enable or Cancel (to leave it disabled).\nwebext-perms-sideload-enable =\n    .label = Enable\n    .accesskey = E\nwebext-perms-sideload-cancel =\n    .label = Cancel\n    .accesskey = C\n\n# Variables:\n#   $extension (String): replaced with the localized name of the extension.\nwebext-perms-update-text = { $extension } has been updated. You must approve new permissions before the updated version will install. Choosing “Cancel” will maintain your current extension version. This extension will have permission to:\nwebext-perms-update-accept =\n    .label = Update\n    .accesskey = U\n\nwebext-perms-optional-perms-list-intro = It wants to:\nwebext-perms-optional-perms-allow =\n    .label = Allow\n    .accesskey = A\nwebext-perms-optional-perms-deny =\n    .label = Deny\n    .accesskey = D\n\nwebext-perms-host-description-all-urls = Access your data for all websites\n\n# Variables:\n#   $domain (String): will be replaced by the DNS domain for which a webextension is requesting access (e.g., mozilla.org)\nwebext-perms-host-description-wildcard = Access your data for sites in the { $domain } domain\n\n# Variables:\n#   $domainCount (Number): Integer indicating the number of additional\n#     hosts for which this webextension is requesting permission.\nwebext-perms-host-description-too-many-wildcards =\n    { $domainCount ->\n        [one] Access your data in { $domainCount } other domain\n       *[other] Access your data in { $domainCount } other domains\n    }\n# Variables:\n#   $domain (String): will be replaced by the DNS host name for which a webextension is requesting access (e.g., www.mozilla.org)\nwebext-perms-host-description-one-site = Access your data for { $domain }\n\n# Variables:\n#   $domainCount (Number): Integer indicating the number of additional\n#     hosts for which this webextension is requesting permission.\nwebext-perms-host-description-too-many-sites =\n    { $domainCount ->\n        [one] Access your data on { $domainCount } other site\n       *[other] Access your data on { $domainCount } other sites\n    }\n\n# Variables:\n#   $domain (String): will be replaced by the DNS host name for which a webextension is requesting access (e.g., mozilla.org),\n#     $domain should be treated as plural (because it may also include all subdomains, e.g www.mozilla.org, ftp.mozilla.org).\nwebext-perms-host-description-one-domain = Access your data for sites in { $domain } domains\n\n# Permission string used for webextensions requesting access to 2 or more domains (and so $domainCount is expected to always\n# be >= 2, for webextensions requesting access to only one domain the `webext-perms-host-description-one-domain` string is\n# used instead).\n# Variables:\n#   $domainCount (Number): Integer indicating the number of websites domains for which this webextension is requesting permission\n#     (the list of domains will follow this string).\nwebext-perms-host-description-multiple-domains =\n    { $domainCount ->\n       *[other] Access your data for sites in { $domainCount } domains\n    }\n\n## Headers used in the webextension permissions dialog for synthetic add-ons.\n## The part of the string describing what privileges the extension gives should be consistent\n## with the value of webext-site-perms-description-gated-perms-{sitePermission}.\n## Note, this string will be used as raw markup. Avoid characters like <, >, &\n## Variables:\n##   $hostname (String): the hostname of the site the add-on is being installed from.\n\nwebext-site-perms-header-with-gated-perms-midi = This add-on gives { $hostname } access to your MIDI devices.\nwebext-site-perms-header-with-gated-perms-midi-sysex = This add-on gives { $hostname } access to your MIDI devices (with SysEx support).\n\n##\n\n# This string is used as description in the webextension permissions dialog for synthetic add-ons.\n# Note, the empty line is used to create a line break between the two sections.\n# Note, this string will be used as raw markup. Avoid characters like <, >, &\nwebext-site-perms-description-gated-perms-midi =\n    These are usually plug-in devices like audio synthesizers, but might also be built into your computer.\n\n    Websites are normally not allowed to access MIDI devices. Improper usage could cause damage or compromise security.\n\n## Headers used in the webextension permissions dialog.\n## Note: This string will be used as raw markup. Avoid characters like <, >, &\n## Variables:\n##   $extension (String): replaced with the localized name of the extension being installed.\n##   $hostname (String): will be replaced by the DNS host name for which a webextension enables permissions.\n\nwebext-site-perms-header-with-perms = Add { $extension }? This extension grants the following capabilities to { $hostname }:\nwebext-site-perms-header-unsigned-with-perms = Add { $extension }? This extension is unverified. Malicious extensions can steal your private information or compromise your computer. Only add it if you trust the source. This extension grants the following capabilities to { $hostname }:\n\n## These should remain in sync with permissions.NAME.label in sitePermissions.properties\n\nwebext-site-perms-midi = Access MIDI devices\nwebext-site-perms-midi-sysex = Access MIDI devices with SysEx support\n";

/***/ })

}]);