"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[3951],{

/***/ 9354:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\n### UI strings for the MR1 onboarding / multistage about:welcome\n### Various strings use a non-breaking space to avoid a single dangling /\n### widowed word, so test on various window sizes if you also want this.\n\n## Welcome page strings\n\nonboarding-welcome-header = Welcome to { -brand-short-name }\nonboarding-start-browsing-button-label = Start Browsing\nonboarding-not-now-button-label = Not now\nmr1-onboarding-get-started-primary-button-label = Get started\n\n## Custom Return To AMO onboarding strings\n\nreturn-to-amo-subtitle = Great, you’ve got { -brand-short-name }\n# <img data-l10n-name=\"icon\"/> will be replaced with the icon belonging to the extension\n#\n# Variables:\n#   $addon-name (String) - Name of the add-on\nreturn-to-amo-addon-title = Now let’s get you <img data-l10n-name=\"icon\"/> <b>{ $addon-name }</b>.\nreturn-to-amo-add-extension-label = Add the Extension\nreturn-to-amo-add-theme-label = Add the Theme\n\n##  Variables: $addon-name (String) - Name of the add-on to be installed\n\nmr1-return-to-amo-subtitle = Say hello to { -brand-short-name }\nmr1-return-to-amo-addon-title = You’ve got a fast, private browser at your fingertips. Now you can add <b>{ $addon-name }</b> and do even more with { -brand-short-name }.\nmr1-return-to-amo-add-extension-label = Add { $addon-name }\n\n## Multistage onboarding strings (about:welcome pages)\n\n# Aria-label to make the \"steps\" of multistage onboarding visible to screen readers.\n# Variables:\n#   $current (Int) - Number of the current page\n#   $total (Int) - Total number of pages\n\nonboarding-welcome-steps-indicator-label =\n  .aria-label = Progress: step { $current } of { $total }\n\n# This button will open system settings to turn on prefers-reduced-motion\nmr1-onboarding-reduce-motion-button-label = Turn off animations\n\n# String for the Firefox Accounts button\nmr1-onboarding-sign-in-button-label = Sign in\n\n# The primary import button label will depend on whether we can detect which browser was used to download Firefox.\n# Variables:\n#   $previous (Str) - Previous browser name, such as Edge, Chrome\nmr1-onboarding-import-primary-button-label-attribution = Import from { $previous }\n\nmr1-onboarding-theme-header = Make it your own\nmr1-onboarding-theme-subtitle = Personalize { -brand-short-name } with a theme.\nmr1-onboarding-theme-secondary-button-label = Not now\n\n# System theme uses operating system color settings\nmr1-onboarding-theme-label-system = System theme\n\nmr1-onboarding-theme-label-light = Light\nmr1-onboarding-theme-label-dark = Dark\n# \"Alpenglow\" here is the name of the theme, and should be kept in English.\nmr1-onboarding-theme-label-alpenglow = Alpenglow\n\nonboarding-theme-primary-button-label = Done\n\n## Please make sure to split the content of the title attribute into lines whose\n## width corresponds to about 40 Latin characters, to ensure that the tooltip\n## doesn't become too long. Line breaks will be preserved when displaying the\n## tooltip.\n\n# Tooltip displayed on hover of system theme\nmr1-onboarding-theme-tooltip-system =\n  .title =\n    Follow the operating system theme\n    for buttons, menus, and windows.\n\n# Input description for system theme\nmr1-onboarding-theme-description-system =\n  .aria-description =\n    Follow the operating system theme\n    for buttons, menus, and windows.\n\n# Tooltip displayed on hover of light theme\nmr1-onboarding-theme-tooltip-light =\n  .title =\n    Use a light theme for buttons,\n    menus, and windows.\n\n# Input description for light theme\nmr1-onboarding-theme-description-light =\n  .aria-description =\n    Use a light theme for buttons,\n    menus, and windows.\n\n# Tooltip displayed on hover of dark theme\nmr1-onboarding-theme-tooltip-dark =\n  .title =\n    Use a dark theme for buttons,\n    menus, and windows.\n\n# Input description for dark theme\nmr1-onboarding-theme-description-dark =\n  .aria-description =\n    Use a dark theme for buttons,\n    menus, and windows.\n\n# Tooltip displayed on hover of Alpenglow theme\nmr1-onboarding-theme-tooltip-alpenglow =\n  .title =\n    Use a dynamic, colorful theme for buttons,\n    menus, and windows.\n\n# Input description for Alpenglow theme\nmr1-onboarding-theme-description-alpenglow =\n  .aria-description =\n    Use a dynamic, colorful theme for buttons,\n    menus, and windows.\n\n# Selector description for default themes\nmr2-onboarding-default-theme-label = Explore default themes.\n\n## Strings for Thank You page\n\nmr2-onboarding-thank-you-header = Thank you for choosing us\nmr2-onboarding-thank-you-text = { -brand-short-name } is an independent browser backed by a non-profit. Together, we’re making the web safer, healthier, and more private.\nmr2-onboarding-start-browsing-button-label = Start browsing\n\n## Multistage live language reloading onboarding strings (about:welcome pages)\n##\n## The following language names are generated by the browser's Intl.DisplayNames API.\n##\n## Variables:\n##   $negotiatedLanguage (String) - The name of the langpack's language, e.g. \"Español (ES)\"\n##   $systemLanguage (String) - The name of the system language, e.g \"Español (ES)\"\n##   $appLanguage (String) - The name of the language shipping in the browser build, e.g. \"English (EN)\"\n\nonboarding-live-language-header = Choose your language\n\nmr2022-onboarding-live-language-text = { -brand-short-name } speaks your language\n\nmr2022-language-mismatch-subtitle = Thanks to our community, { -brand-short-name } is translated in over 90 languages. It looks like your system is using { $systemLanguage }, and { -brand-short-name } is using { $appLanguage }.\n\nonboarding-live-language-button-label-downloading = Downloading the language pack for { $negotiatedLanguage }…\nonboarding-live-language-waiting-button = Getting available languages…\nonboarding-live-language-installing = Installing the language pack for { $negotiatedLanguage }…\n\nmr2022-onboarding-live-language-switch-to = Switch to { $negotiatedLanguage }\nmr2022-onboarding-live-language-continue-in = Continue in { $appLanguage }\n\nonboarding-live-language-secondary-cancel-download = Cancel\nonboarding-live-language-skip-button-label = Skip\n\n## Firefox 100 Thank You screens\n\n# \"Hero Text\" displayed on left side of welcome screen. This text can be\n# formatted to span multiple lines as needed. The <span data-l10n-name=\"zap\">\n# </span> in this string allows a \"zap\" underline style to be automatically\n# added to the text inside it. \"Yous\" should stay inside the zap span, but\n# \"Thank\" can be put inside instead if there's no \"you\" in the translation.\n# The English text would normally be \"100 Thank-Yous\" i.e., plural noun, but for\n# aesthetics of splitting it across multiple lines, the hyphen is omitted.\nfx100-thank-you-hero-text =\n  100\n  Thank\n  <span data-l10n-name=\"zap\">Yous</span>\nfx100-thank-you-subtitle = It’s our 100th release! Thanks for helping us build a better, healthier internet.\nfx100-thank-you-pin-primary-button-label = { PLATFORM() ->\n    [macos] Keep { -brand-short-name } in Dock\n   *[other] Pin { -brand-short-name } to taskbar\n}\n\nfx100-upgrade-thanks-header = 100 Thank-Yous\n# Message shown with a start-browsing button. Emphasis <em> should be for \"you\"\n# but \"Thank\" can be used instead if there's no \"you\" in the translation.\nfx100-upgrade-thank-you-body = It’s our 100th release of { -brand-short-name }. Thank <em>you</em> for helping us build a better, healthier internet.\n# Message shown with either a pin-to-taskbar or set-default button.\nfx100-upgrade-thanks-keep-body = It’s our 100th release! Thanks for being a part of our community. Keep { -brand-short-name } one click away for the next 100.\n\nmr2022-onboarding-secondary-skip-button-label = Skip this step\n\n## MR2022 New User Easy Setup screen strings\n\n# Primary button string used on new user onboarding first screen showing multiple actions such as Set Default, Import from previous browser.\nmr2022-onboarding-easy-setup-primary-button-label = Save and continue\n# Set Default action checkbox label used on new user onboarding first screen\nmr2022-onboarding-easy-setup-set-default-checkbox-label = Set { -brand-short-name } as default browser\n# Import action checkbox label used on new user onboarding first screen\nmr2022-onboarding-easy-setup-import-checkbox-label = Import from previous browser\n\n## MR2022 New User Pin Firefox screen strings\n\n# Title used on about:welcome for new users when Firefox is not pinned.\n# In this context, open up is synonymous with \"Discover\".\n# The metaphor is that when they open their Firefox browser, it helps them discover an amazing internet.\n# If this translation does not make sense in your language, feel free to use the word \"discover.\"\nmr2022-onboarding-welcome-pin-header = Open up an amazing internet\n# Subtitle is used on onboarding page for new users page when Firefox is not pinned\nmr2022-onboarding-welcome-pin-subtitle = Launch { -brand-short-name } from anywhere with a single click. Every time you do, you’re choosing a more open and independent web.\n# Primary button string used on welcome page for when Firefox is not pinned.\nmr2022-onboarding-pin-primary-button-label = { PLATFORM() ->\n    [macos] Keep { -brand-short-name } in Dock\n   *[other] Pin { -brand-short-name } to taskbar\n}\n# Subtitle will be used when user already has Firefox pinned, but\n# has not set it as their default browser.\n# When translating \"zip\", please feel free to pick a verb that signifies movement and/or exploration\n# and makes sense in the context of navigating the web.\nmr2022-onboarding-set-default-only-subtitle = Start with a browser backed by a non-profit. We defend your privacy while you zip around the web.\n\n## MR2022 Existing User Pin Firefox Screen Strings\n\n# Title used on multistage onboarding page for existing users when Firefox is not pinned\nmr2022-onboarding-existing-pin-header = Thank you for loving { -brand-product-name }\n# Subtitle is used on onboarding page for existing users when Firefox is not pinned\nmr2022-onboarding-existing-pin-subtitle = Launch a healthier internet from anywhere with a single click. Our latest update is packed with new things we think you’ll adore.\n# Subtitle will be used on the welcome screen for existing users\n# when they already have Firefox pinned but not set as default\nmr2022-onboarding-existing-set-default-only-subtitle = Use a browser that defends your privacy while you zip around the web. Our latest update is packed with things that you adore.\nmr2022-onboarding-existing-pin-checkbox-label = Also add { -brand-short-name } private browsing\n\n## MR2022 New User Set Default screen strings\n\n# This string is the title used when the user already has pinned the browser, but has not set default.\nmr2022-onboarding-set-default-title = Make { -brand-short-name } your go-to browser\nmr2022-onboarding-set-default-primary-button-label = Set { -brand-short-name } as default browser\n# When translating \"zip\", please feel free to pick a verb that signifies movement and/or exploration\n# and makes sense in the context of navigating the web.\nmr2022-onboarding-set-default-subtitle = Use a browser backed by a non-profit. We defend your privacy while you zip around the web.\n\n## MR2022 Get Started screen strings.\n## These strings will be used on the welcome page\n## when Firefox is already set to default and pinned.\n\n# When translating \"zip\", please feel free to pick a verb that signifies movement and/or exploration\n# and makes sense in the context of navigating the web.\nmr2022-onboarding-get-started-primary-subtitle = Our latest version is built around you, making it easier than ever to zip around the web. It’s packed with features we think you’ll adore.\nmr2022-onboarding-get-started-primary-button-label = Set up in seconds\n\n## MR2022 Import Settings screen strings\n\nmr2022-onboarding-import-header = Lightning-fast setup\nmr2022-onboarding-import-subtitle = Set up { -brand-short-name } how you like it. Add your bookmarks, passwords, and more from your old browser.\nmr2022-onboarding-import-primary-button-label-no-attribution = Import from previous browser\n\n## If your language uses grammatical genders, in the description for the\n## colorway feel free to switch from \"You are a X. You…\" (e.g. \"You are a\n## Playmaker. You create…\") to \"X: you…\" (\"Playmaker: You create…\"). This might\n## help creating a more inclusive translation.\n\nmr2022-onboarding-colorway-title = Choose the color that inspires you\nmr2022-onboarding-colorway-subtitle = Independent voices can change culture.\nmr2022-onboarding-colorway-primary-button-label-continue = Set and continue\nmr2022-onboarding-existing-colorway-checkbox-label = Make { -firefox-home-brand-name } your colorful homepage\n\nmr2022-onboarding-colorway-label-default = Default\nmr2022-onboarding-colorway-tooltip-default2 =\n  .title = Current { -brand-short-name } colors\nmr2022-onboarding-colorway-description-default = <b>Use my current { -brand-short-name } colors.</b>\n\nmr2022-onboarding-colorway-label-playmaker = Playmaker\nmr2022-onboarding-colorway-tooltip-playmaker2 =\n  .title = Playmaker (red)\nmr2022-onboarding-colorway-description-playmaker = <b>You are a Playmaker.</b> You create opportunities to win and help everyone around you elevate their game.\n\nmr2022-onboarding-colorway-label-expressionist = Expressionist\nmr2022-onboarding-colorway-tooltip-expressionist2 =\n  .title = Expressionist (yellow)\nmr2022-onboarding-colorway-description-expressionist = <b>You are an Expressionist.</b> You see the world differently and your creations stir the emotions of others.\n\nmr2022-onboarding-colorway-label-visionary = Visionary\nmr2022-onboarding-colorway-tooltip-visionary2 =\n  .title = Visionary (green)\nmr2022-onboarding-colorway-description-visionary = <b>You are a Visionary.</b> You question the status quo and move others to imagine a better future.\n\nmr2022-onboarding-colorway-label-activist = Activist\nmr2022-onboarding-colorway-tooltip-activist2 =\n  .title = Activist (blue)\nmr2022-onboarding-colorway-description-activist = <b>You are an Activist.</b> You leave the world a better place than you found it and lead others to believe.\n\nmr2022-onboarding-colorway-label-dreamer = Dreamer\nmr2022-onboarding-colorway-tooltip-dreamer2 =\n  .title = Dreamer (purple)\nmr2022-onboarding-colorway-description-dreamer = <b>You are a Dreamer.</b> You believe that fortune favors the bold and inspire others to be brave.\n\nmr2022-onboarding-colorway-label-innovator = Innovator\nmr2022-onboarding-colorway-tooltip-innovator2 =\n  .title = Innovator (orange)\nmr2022-onboarding-colorway-description-innovator = <b>You are an Innovator.</b> You see opportunities everywhere and make an impact on the lives of everyone around you.\n\n## MR2022 Multistage Mobile Download screen strings\n\nmr2022-onboarding-mobile-download-title = Hop from laptop to phone and back again\nmr2022-onboarding-mobile-download-subtitle = Grab tabs from one device and pick up where you left off on another. Plus sync your bookmarks and passwords anywhere you use { -brand-product-name }.\nmr2022-onboarding-mobile-download-cta-text = Scan the QR code to get { -brand-product-name } for mobile or <a data-l10n-name=\"download-label\">send yourself a download link.</a>\nmr2022-onboarding-no-mobile-download-cta-text = Scan the QR code to get { -brand-product-name } for mobile.\n\n## MR2022 Upgrade Dialog screens\n## Pin private window screen shown only for users who don't have Firefox private pinned\n\nmr2022-upgrade-onboarding-pin-private-window-header = Get private browsing freedom in one click\nmr2022-upgrade-onboarding-pin-private-window-subtitle = No saved cookies or history, right from your desktop. Browse like no one’s watching.\nmr2022-upgrade-onboarding-pin-private-window-primary-button-label = { PLATFORM() ->\n    [macos] Keep { -brand-short-name } private browsing in Dock\n   *[other] Pin { -brand-short-name } private browsing to taskbar\n}\n\n## MR2022 Privacy Segmentation screen strings\n\nmr2022-onboarding-privacy-segmentation-title = We always respect your privacy\nmr2022-onboarding-privacy-segmentation-subtitle = From intelligent suggestions to smarter search, we’re constantly working to create a better, more personal { -brand-product-name }.\nmr2022-onboarding-privacy-segmentation-text-cta = What do you want to see when we offer new features that use your data to enhance your browsing?\nmr2022-onboarding-privacy-segmentation-button-primary-label = Use { -brand-product-name } recommendations\nmr2022-onboarding-privacy-segmentation-button-secondary-label = Show detailed information\n\n## MR2022 Multistage Gratitude screen strings\n\nmr2022-onboarding-gratitude-title = You’re helping us build a better web\nmr2022-onboarding-gratitude-subtitle = Thank you for using { -brand-short-name }, backed by the Mozilla Foundation. With your support, we’re working to make the internet more open, accessible, and better for everyone.\nmr2022-onboarding-gratitude-primary-button-label = See what’s new\nmr2022-onboarding-gratitude-secondary-button-label = Start browsing\n\n## Onboarding spotlight for infrequent users\n\nonboarding-infrequent-import-title = Make yourself at home\nonboarding-infrequent-import-subtitle = Whether you’re settling in or just stopping by, remember you can import your bookmarks, passwords, and more.\nonboarding-infrequent-import-primary-button = Import to { -brand-short-name }\n\n## MR2022 Illustration alt tags\n## Descriptive tags for illustrations used by screen readers and other assistive tech\n\nmr2022-onboarding-pin-image-alt =\n  .aria-label = Person working on a laptop surrounded by stars and flowers\nmr2022-onboarding-default-image-alt =\n  .aria-label = Person hugging the { -brand-product-name } logo\nmr2022-onboarding-import-image-alt =\n  .aria-label = Person riding a skateboard with a box of software icons\nmr2022-onboarding-mobile-download-image-alt =\n  .aria-label = Frogs hopping across lily pads with a QR code to download { -brand-product-name } for mobile in the center\nmr2022-onboarding-pin-private-image-alt =\n  .aria-label = Magic wand makes { -brand-product-name } private browsing logo appear out of a hat\nmr2022-onboarding-privacy-segmentation-image-alt =\n  .aria-label = Light-skinned and dark-skinned hands high five\nmr2022-onboarding-gratitude-image-alt =\n  .aria-label = View of a sunset through a window with a fox and a house plant on a windowsill\nmr2022-onboarding-colorways-image-alt =\n  .aria-label = A hand spray paints a colorful collage of a green eye, orange shoe, red basketball, purple headphones, blue heart, and yellow crown\n";

/***/ })

}]);