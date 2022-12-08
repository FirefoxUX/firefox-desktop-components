"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[1077],{

/***/ 91077:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\ndownload-ui-confirm-title = Cancel All Downloads?\n\n## Variables:\n##   $downloadsCount (Number): The current downloads count.\n\ndownload-ui-confirm-quit-cancel-downloads =\n    { $downloadsCount ->\n        [1] If you exit now, 1 download will be canceled. Are you sure you want to exit?\n       *[other] If you exit now, { $downloadsCount } downloads will be canceled. Are you sure you want to exit?\n    }\ndownload-ui-confirm-quit-cancel-downloads-mac =\n    { $downloadsCount ->\n        [1] If you quit now, 1 download will be canceled. Are you sure you want to quit?\n       *[other] If you quit now, { $downloadsCount } downloads will be canceled. Are you sure you want to quit?\n    }\ndownload-ui-dont-quit-button =\n    { PLATFORM() ->\n        [mac] Don’t Quit\n       *[other] Don’t Exit\n    }\n\ndownload-ui-confirm-offline-cancel-downloads =\n    { $downloadsCount ->\n        [1] If you go offline now, 1 download will be canceled. Are you sure you want to go offline?\n       *[other] If you go offline now, { $downloadsCount } downloads will be canceled. Are you sure you want to go offline?\n    }\ndownload-ui-dont-go-offline-button = Stay Online\n\ndownload-ui-confirm-leave-private-browsing-windows-cancel-downloads =\n    { $downloadsCount ->\n        [1] If you close all Private Browsing windows now, 1 download will be canceled. Are you sure you want to leave Private Browsing?\n       *[other] If you close all Private Browsing windows now, { $downloadsCount } downloads will be canceled. Are you sure you want to leave Private Browsing?\n    }\ndownload-ui-dont-leave-private-browsing-button = Stay in Private Browsing\n\ndownload-ui-cancel-downloads-ok =\n    { $downloadsCount ->\n        [1] Cancel 1 Download\n       *[other] Cancel { $downloadsCount } Downloads\n    }\n\n##\n\ndownload-ui-file-executable-security-warning-title = Open Executable File?\n# Variables:\n#   $executable (String): The executable file to be opened.\ndownload-ui-file-executable-security-warning = “{ $executable }” is an executable file. Executable files may contain viruses or other malicious code that could harm your computer. Use caution when opening this file. Are you sure you want to launch “{ $executable }”?\n";

/***/ })

}]);