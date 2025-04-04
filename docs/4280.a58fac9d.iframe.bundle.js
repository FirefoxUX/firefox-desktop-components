"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[4280],{

/***/ 34280:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\n# This string is shown at the end of the tooltip text for\n# <input type='file' multiple> when there are more than 21 files selected\n# (when we will only list the first 20, plus an \"and X more\" line).\n# Variables:\n#   $fileCount (Number): The number of remaining files.\ninput-file-and-more-files =\n    { $fileCount ->\n        [one] and one more\n       *[other] and { $fileCount } more\n    }\n\nform-post-secure-to-insecure-warning-title = Security Warning\nform-post-secure-to-insecure-warning-message =\n    The information you have entered on this page will be sent over an insecure connection and could be read by a third party.\n\n    Are you sure you want to send this information?\nform-post-secure-to-insecure-warning-continue = Continue\n";

/***/ })

}]);