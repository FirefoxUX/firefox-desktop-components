"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[8306],{

/***/ 8306:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\nprotections-panel-sendreportview-error = There was an error sending the report. Please try again later.\n\n# A link shown when ETP is disabled for a site. Opens the breakage report subview when clicked.\nprotections-panel-sitefixedsendreport-label = Site fixed? Send report\n\n## These strings are used to define the different levels of\n## Enhanced Tracking Protection.\n\nprotections-popup-footer-protection-label-strict = Strict\n  .label = Strict\nprotections-popup-footer-protection-label-custom = Custom\n  .label = Custom\nprotections-popup-footer-protection-label-standard = Standard\n  .label = Standard\n\n##\n\n# The text a screen reader speaks when focused on the info button.\nprotections-panel-etp-more-info =\n  .aria-label = More information about Enhanced Tracking Protection\n\nprotections-panel-etp-on-header = Enhanced Tracking Protection is ON for this site\nprotections-panel-etp-off-header = Enhanced Tracking Protection is OFF for this site\n\n## Text for the toggles shown when ETP is enabled/disabled for a given site.\n## .description is transferred into a separate paragraph by the moz-toggle\n## custom element code.\n##   $host (String): the hostname of the site that is being displayed.\n\nprotections-panel-etp-on-toggle =\n  .label = Enhanced Tracking Protection\n  .description = On for this site\n  .aria-label = Disable protections for { $host }\nprotections-panel-etp-off-toggle =\n  .label = Enhanced Tracking Protection\n  .description = Off for this site\n  .aria-label = Enable protections for { $host }\n\n# The link to be clicked to open the sub-panel view\nprotections-panel-site-not-working = Site not working?\n\n# The heading/title of the sub-panel view\nprotections-panel-site-not-working-view =\n  .title = Site Not Working?\n\n## The \"Allowed\" header also includes a \"Why?\" link that, when hovered, shows\n## a tooltip explaining why these items were not blocked in the page.\n\nprotections-panel-not-blocking-why-label = Why?\nprotections-panel-not-blocking-why-etp-on-tooltip = Blocking these could break elements of some websites. Without trackers, some buttons, forms, and login fields might not work.\nprotections-panel-not-blocking-why-etp-off-tooltip = All trackers on this site have been loaded because protections are turned off.\n\n##\n\nprotections-panel-no-trackers-found = No trackers known to { -brand-short-name } were detected on this page.\n\nprotections-panel-content-blocking-tracking-protection = Tracking Content\n\nprotections-panel-content-blocking-socialblock = Social Media Trackers\nprotections-panel-content-blocking-cryptominers-label = Cryptominers\nprotections-panel-content-blocking-fingerprinters-label = Fingerprinters\n\n## In the protections panel, Content Blocking category items are in three sections:\n##   \"Blocked\" for categories being blocked in the current page,\n##   \"Allowed\" for categories detected but not blocked in the current page, and\n##   \"None Detected\" for categories not detected in the current page.\n##   These strings are used in the header labels of each of these sections.\n\nprotections-panel-blocking-label = Blocked\nprotections-panel-not-blocking-label = Allowed\nprotections-panel-not-found-label = None Detected\n\n##\n\nprotections-panel-settings-label = Protection settings\nprotections-panel-protectionsdashboard-label = Protections dashboard\n\n## In the Site Not Working? view, we suggest turning off protections if\n## the user is experiencing issues with any of a variety of functionality.\n\n# The header of the list\nprotections-panel-site-not-working-view-header = Turn off protections if you’re having issues with:\n\n# The list items, shown in a <ul>\nprotections-panel-site-not-working-view-issue-list-login-fields = Login fields\nprotections-panel-site-not-working-view-issue-list-forms = Forms\nprotections-panel-site-not-working-view-issue-list-payments = Payments\nprotections-panel-site-not-working-view-issue-list-comments = Comments\nprotections-panel-site-not-working-view-issue-list-videos = Videos\nprotections-panel-site-not-working-view-issue-list-fonts = Fonts\n\nprotections-panel-site-not-working-view-send-report = Send a report\n\n##\n\nprotections-panel-cross-site-tracking-cookies = These cookies follow you from site to site to gather data about what you do online. They are set by third parties such as advertisers and analytics companies.\nprotections-panel-cryptominers = Cryptominers use your system’s computing power to mine digital money. Cryptomining scripts drain your battery, slow down your computer, and can increase your energy bill.\nprotections-panel-fingerprinters = Fingerprinters collect settings from your browser and computer to create a profile of you. Using this digital fingerprint, they can track you across different websites.\nprotections-panel-tracking-content = Websites may load external ads, videos, and other content with tracking code. Blocking tracking content can help sites load faster, but some buttons, forms, and login fields might not work.\nprotections-panel-social-media-trackers = Social networks place trackers on other websites to follow what you do, see, and watch online. This allows social media companies to learn more about you beyond what you share on your social media profiles.\n\nprotections-panel-description-shim-allowed = Some trackers marked below have been partially unblocked on this page because you interacted with them.\nprotections-panel-description-shim-allowed-learn-more = Learn more\nprotections-panel-shim-allowed-indicator =\n  .tooltiptext = Tracker partially unblocked\n\nprotections-panel-content-blocking-manage-settings =\n  .label = Manage protection settings\n  .accesskey = M\n\nprotections-panel-content-blocking-breakage-report-view =\n  .title = Report a Broken Site\nprotections-panel-content-blocking-breakage-report-view-description2 = Blocking certain trackers can cause problems with some websites. Reporting these problems helps make { -brand-short-name } better for everyone. Sending this report will send a URL and information about your browser settings to { -vendor-short-name }.\nprotections-panel-content-blocking-breakage-report-view-collection-url = URL\nprotections-panel-content-blocking-breakage-report-view-collection-url-label =\n  .aria-label = URL\nprotections-panel-content-blocking-breakage-report-view-collection-comments = Optional: Describe the problem\nprotections-panel-content-blocking-breakage-report-view-collection-comments-label =\n  .aria-label = Optional: Describe the problem\nprotections-panel-content-blocking-breakage-report-view-cancel =\n  .label = Cancel\nprotections-panel-content-blocking-breakage-report-view-send-report =\n  .label = Send Report\n\n# Cookie Banner Handling\n\nprotections-panel-cookie-banner-handling-header = Cookie Banner Reduction\nprotections-panel-cookie-banner-handling-enabled = On for this site\nprotections-panel-cookie-banner-handling-disabled = Off for this site\nprotections-panel-cookie-banner-handling-undetected = Site currently not supported\n\nprotections-panel-cookie-banner-view-title =\n  .title = Cookie Banner Reduction\n# Variables\n#  $host (String): the hostname of the site that is being displayed.\nprotections-panel-cookie-banner-view-turn-off-for-site = Turn off Cookie Banner Reduction for { $host }?\nprotections-panel-cookie-banner-view-turn-on-for-site = Turn on Cookie Banner Reduction for this site?\nprotections-panel-cookie-banner-view-cookie-clear-warning = { -brand-short-name } will clear this site’s cookies and refresh the page. Clearing all cookies may sign you out or empty shopping carts.\nprotections-panel-cookie-banner-view-turn-on-description = { -brand-short-name } tries to automatically reject all cookie requests on supported sites.\nprotections-panel-cookie-banner-view-cancel = Cancel\nprotections-panel-cookie-banner-view-turn-off = Turn Off\nprotections-panel-cookie-banner-view-turn-on = Turn On\n";

/***/ })

}]);