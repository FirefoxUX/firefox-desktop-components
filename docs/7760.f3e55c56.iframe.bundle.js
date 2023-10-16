"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[7760],{

/***/ 7760:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\n## The Enterprise Policies feature is aimed at system administrators\n## who want to deploy these settings across several Firefox installations\n## all at once. This is traditionally done through the Windows Group Policy\n## feature, but the system also supports other forms of deployment.\n## These are short descriptions for individual policies, to be displayed\n## in the documentation section in about:policies.\n\npolicy-3rdparty = Set policies that WebExtensions can access via chrome.storage.managed.\n\npolicy-AllowedDomainsForApps = Define domains allowed to access Google Workspace.\n\npolicy-AppAutoUpdate = Enable or disable automatic application update.\n\npolicy-AppUpdatePin = Prevent { -brand-short-name } from being updated beyond the specified version.\n\npolicy-AppUpdateURL = Set custom app update URL.\n\npolicy-Authentication = Configure integrated authentication for websites that support it.\n\npolicy-AutoLaunchProtocolsFromOrigins = Define a list of external protocols that can be used from listed origins without prompting the user.\n\npolicy-BackgroundAppUpdate2 = Enable or disable the background updater.\n\npolicy-BlockAboutAddons = Block access to the Add-ons Manager (about:addons).\n\npolicy-BlockAboutConfig = Block access to the about:config page.\n\npolicy-BlockAboutProfiles = Block access to the about:profiles page.\n\npolicy-BlockAboutSupport = Block access to the about:support page.\n\npolicy-Bookmarks = Create bookmarks in the Bookmarks toolbar, Bookmarks menu, or a specified folder inside them.\n\npolicy-CaptivePortal = Enable or disable captive portal support.\n\npolicy-CertificatesDescription = Add certificates or use built-in certificates.\n\npolicy-Cookies = Allow or deny websites to set cookies.\n\n# Containers in this context is referring to container tabs in Firefox.\npolicy-Containers = Set policies related to containers.\n\npolicy-DisableAccounts = Disable account-based services, including sync.\n\npolicy-DisabledCiphers = Disable ciphers.\n\npolicy-DefaultDownloadDirectory = Set the default download directory.\n\npolicy-DisableAppUpdate = Prevent the browser from updating.\n\npolicy-DisableBuiltinPDFViewer = Disable PDF.js, the built-in PDF viewer in { -brand-short-name }.\n\npolicy-DisableDefaultBrowserAgent = Prevent the default browser agent from taking any actions. Only applicable to Windows; other platforms don’t have the agent.\n\npolicy-DisableDeveloperTools = Block access to the developer tools.\n\npolicy-DisableFeedbackCommands = Disable commands to send feedback from the Help menu (Submit Feedback and Report Deceptive Site).\n\npolicy-DisableFirefoxAccounts = Disable { -fxaccount-brand-name } based services, including Sync.\n\n# Firefox Screenshots is the name of the feature, and should not be translated.\npolicy-DisableFirefoxScreenshots = Disable the Firefox Screenshots feature.\n\npolicy-DisableFirefoxStudies = Prevent { -brand-short-name } from running studies.\n\npolicy-DisableForgetButton = Prevent access to the Forget button.\n\npolicy-DisableFormHistory = Don’t remember search and form history.\n\npolicy-DisablePrimaryPasswordCreation = If true, a Primary Password can’t be created.\n\npolicy-DisablePasswordReveal = Do not allow passwords to be revealed in saved logins.\n\npolicy-DisablePocket2 = Disable the feature to save webpages to { -pocket-brand-name }.\n\npolicy-DisablePrivateBrowsing = Disable Private Browsing.\n\npolicy-DisableProfileImport = Disable the menu command to Import data from another browser.\n\npolicy-DisableProfileRefresh = Disable the Refresh { -brand-short-name } button in the about:support page.\n\npolicy-DisableSafeMode = Disable the feature to restart in Safe Mode. Note: the Shift key to enter Safe Mode can only be disabled on Windows using Group Policy.\n\npolicy-DisableSecurityBypass = Prevent the user from bypassing certain security warnings.\n\npolicy-DisableSetAsDesktopBackground = Disable the menu command Set as Desktop Background for images.\n\npolicy-DisableSystemAddonUpdate = Prevent the browser from installing and updating system add-ons.\n\npolicy-DisableTelemetry = Turn off Telemetry.\n\npolicy-DisableThirdPartyModuleBlocking = Prevent the user from blocking third-party modules that get injected into the { -brand-short-name } process.\n\npolicy-DisplayBookmarksToolbar = Display the Bookmarks Toolbar by default.\n\npolicy-DisplayMenuBar = Display the Menu Bar by default.\n\npolicy-DNSOverHTTPS = Configure DNS over HTTPS.\n\npolicy-DontCheckDefaultBrowser = Disable check for default browser on startup.\n\npolicy-DownloadDirectory = Set and lock the download directory.\n\n# “lock” means that the user won’t be able to change this setting\npolicy-EnableTrackingProtection = Enable or disable Content Blocking and optionally lock it.\n\n# “lock” means that the user won’t be able to change this setting\npolicy-EncryptedMediaExtensions = Enable or disable Encrypted Media Extensions and optionally lock it.\n\npolicy-ExemptDomainFileTypePairsFromFileTypeDownloadWarnings = Disable warnings based on file extension for specific file types on domains.\n\n# A “locked” extension can’t be disabled or removed by the user. This policy\n# takes 3 keys (“Install”, ”Uninstall”, ”Locked”), you can either keep them in\n# English or translate them as verbs.\npolicy-Extensions = Install, uninstall or lock extensions. The Install option takes URLs or paths as parameters. The Uninstall and Locked options take extension IDs.\n\npolicy-ExtensionSettings = Manage all aspects of extension installation.\n\npolicy-ExtensionUpdate = Enable or disable automatic extension updates.\n\npolicy-FirefoxHome2 = Configure { -firefox-home-brand-name }.\n\npolicy-FirefoxSuggest = Configure { -firefox-suggest-brand-name }.\n\npolicy-GoToIntranetSiteForSingleWordEntryInAddressBar = Force direct intranet site navigation instead of searching when typing single word entries in the address bar.\n\npolicy-Handlers = Configure default application handlers.\n\npolicy-HardwareAcceleration = If false, turn off hardware acceleration.\n\n# “lock” means that the user won’t be able to change this setting\npolicy-Homepage = Set and optionally lock the homepage.\n\npolicy-InstallAddonsPermission = Allow certain websites to install add-ons.\n\npolicy-LegacyProfiles = Disable the feature enforcing a separate profile for each installation.\n\n## Do not translate \"SameSite\", it's the name of a cookie attribute.\n\npolicy-LegacySameSiteCookieBehaviorEnabled = Enable default legacy SameSite cookie behavior setting.\n\npolicy-LegacySameSiteCookieBehaviorEnabledForDomainList = Revert to legacy SameSite behavior for cookies on specified sites.\n\n##\n\npolicy-LocalFileLinks = Allow specific websites to link to local files.\n\npolicy-ManagedBookmarks = Configures a list of bookmarks managed by an administrator that cannot be changed by the user.\n\npolicy-ManualAppUpdateOnly = Allow manual updates only and do not notify the user about updates.\n\npolicy-PrimaryPassword = Require or prevent using a Primary Password.\n\npolicy-PrintingEnabled = Enable or disable printing.\n\npolicy-NetworkPrediction = Enable or disable network prediction (DNS prefetching).\n\npolicy-NewTabPage = Enable or disable the New Tab page.\n\npolicy-NoDefaultBookmarks = Disable creation of the default bookmarks bundled with { -brand-short-name }, and the Smart Bookmarks (Most Visited, Recent Tags). Note: this policy is only effective if used before the first run of the profile.\n\npolicy-OfferToSaveLogins = Enforce the setting to allow { -brand-short-name } to offer to remember saved logins and passwords. Both true and false values are accepted.\n\npolicy-OfferToSaveLoginsDefault = Set the default value for allowing { -brand-short-name } to offer to remember saved logins and passwords. Both true and false values are accepted.\n\npolicy-OverrideFirstRunPage = Override the first run page. Set this policy to blank if you want to disable the first run page.\n\npolicy-OverridePostUpdatePage = Override the post-update “What’s New” page. Set this policy to blank if you want to disable the post-update page.\n\npolicy-PasswordManagerEnabled = Enable saving passwords to the password manager.\n\npolicy-PasswordManagerExceptions = Prevent { -brand-short-name } from saving passwords for specific sites.\n\n# PDF.js and PDF should not be translated\npolicy-PDFjs = Disable or configure PDF.js, the built-in PDF viewer in { -brand-short-name }.\n\npolicy-Permissions2 = Configure permissions for camera, microphone, location, notifications, and autoplay.\n\npolicy-PictureInPicture = Enable or disable Picture-in-Picture.\n\npolicy-PopupBlocking = Allow certain websites to display popups by default.\n\npolicy-Preferences = Set and lock the value for a subset of preferences.\n\npolicy-PromptForDownloadLocation = Ask where to save files when downloading.\n\npolicy-Proxy = Configure proxy settings.\n\npolicy-RequestedLocales = Set the list of requested locales for the application in order of preference.\n\npolicy-SanitizeOnShutdown2 = Clear navigation data on shutdown.\n\npolicy-SearchBar = Set the default location of the search bar. The user is still allowed to customize it.\n\npolicy-SearchEngines = Configure search engine settings. This policy is only available on the Extended Support Release (ESR) version.\n\npolicy-SearchSuggestEnabled = Enable or disable search suggestions.\n\n# For more information, see https://wikipedia.org/wiki/PKCS_11\npolicy-SecurityDevices2 = Add or delete PKCS #11 modules.\n\npolicy-ShowHomeButton = Show the home button on the toolbar.\n\npolicy-SSLVersionMax = Set the maximum SSL version.\n\npolicy-SSLVersionMin = Set the minimum SSL version.\n\npolicy-StartDownloadsInTempDirectory = Force downloads to start off in a local, temporary location rather than the default download directory.\n\npolicy-SupportMenu = Add a custom support menu item to the help menu.\n\npolicy-UserMessaging = Don’t show certain messages to the user.\n\npolicy-UseSystemPrintDialog = Print using the system print dialog.\n\n# “format” refers to the format used for the value of this policy.\npolicy-WebsiteFilter = Block websites from being visited. See documentation for more details on the format.\n\npolicy-Windows10SSO = Allow Windows single sign-on for Microsoft, work, and school accounts.\n";

/***/ })

}]);