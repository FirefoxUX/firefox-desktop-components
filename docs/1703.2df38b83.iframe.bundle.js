"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1703],{

/***/ 31703:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\n# Used for data: URLs where we don't have any useful origin information\nbrowser-utils-url-data = (data)\n\n# Variables:\n#   $scheme (string) - URI scheme like jar: about:\nbrowser-utils-url-scheme = { $scheme } resource\n# Special case of done-scheme for file:\n# This is used as an eTLD replacement for local files, so make it lower case\nbrowser-utils-file-scheme = local file\n\n\n# Used for extension URLs\n# Variables:\n#   $extension (string) - Name of the extension that generated the URL\nbrowser-utils-url-extension = Extension ({ $extension })\n";

/***/ })

}]);