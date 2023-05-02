"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[4819],{

/***/ 64819:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\n# The button for \"Firefox Translations\" in the url bar.\nurlbar-translations-button =\n    .tooltiptext = { -translations-brand-name }\n\n## The translation panel appears from the url bar, and this view is the \"dual\" translate\n## view that lets you choose a source language and target language for translation\n\ntranslations-panel-dual-header = Translate this page?\ntranslations-panel-dual-from-label = Choose the current page language\ntranslations-panel-dual-to-label = Choose the language to translate into\ntranslations-panel-dual-translate-button = Translate\n\n# Text displayed on a language dropdown when the language is in beta\n# Variables:\n#   $language (string) - The localized display name of the detected language\ntranslations-panel-displayname-beta =\n    .label = { $language } BETA\n\n## The translation panel appears from the url bar, and this view is the \"restore\" view\n## that lets a user restore a page to the original language.\n\ntranslations-panel-restore-header = Change the language?\n# $fromLanguage (string) - The original language of the document.\n# $toLanguage (string) - The target language of the translation.\ntranslations-panel-restore-label = The page is being translated from { $fromLanguage } to { $toLanguage }.\ntranslations-panel-restore-button = Restore the page\n\n## Firefox Translations language management in about:preferences.\n\ntranslations-manage-header = Translations\ntranslations-manage-description = Download languages for offline translation.\ntranslations-manage-all-language = All languages\ntranslations-manage-download-button = Download\ntranslations-manage-delete-button = Delete\ntranslations-manage-error-download = There was a problem downloading the language files. Please try again.\ntranslations-manage-error-delete = There was an error deleting the language files. Please try again.\ntranslations-manage-error-list = Failed to get the list of available languages for translation. Refresh the page to try again.\n";

/***/ })

}]);