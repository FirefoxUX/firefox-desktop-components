"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[6521],{

/***/ 76521:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\ncontentanalysis-alert-title = Content Analysis\n\n# Variables:\n#   $content - Description of the content being warned about, such as \"clipboard\" or \"aFile.txt\"\ncontentanalysis-slow-agent-notification = The Content Analysis tool is taking a long time to respond for resource “{ $content }”\ncontentanalysis-slow-agent-dialog-title = Content analysis in progress\n\n# Variables:\n#   $content - Description of the content being warned about, such as \"clipboard\" or \"aFile.txt\"\ncontentanalysis-slow-agent-dialog-body = Content Analysis is analyzing resource “{ $content }”\ncontentanalysis-operationtype-clipboard = clipboard\ncontentanalysis-operationtype-dropped-text = dropped text\n\ncontentanalysis-notification-title = Content Analysis\n# Variables:\n#   $content - Description of the content being reported, such as \"clipboard\" or \"aFile.txt\"\n#   $response - The response received from the content analysis agent, such as \"REPORT_ONLY\"\ncontentanalysis-genericresponse-message = Content Analysis responded with { $response } for resource: { $content }\n# Variables:\n#   $content - Description of the content being blocked, such as \"clipboard\" or \"aFile.txt\"\ncontentanalysis-block-message = Your organization uses data-loss prevention software that has blocked this content: { $content }.\n# Variables:\n#   $content - Description of the content being blocked, such as \"clipboard\" or \"aFile.txt\"\ncontentanalysis-error-message = An error occurred in communicating with the data-loss prevention software. Transfer denied for resource: { $content }.\n";

/***/ })

}]);