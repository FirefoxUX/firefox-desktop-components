"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[1381],{

/***/ 91381:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\n## Permission Dialog\n## Variables:\n##  $host - the hostname that is initiating the request\n##  $scheme - the type of link that's being opened.\n##  $appName - Name of the application that will be opened.\n##  $extension - Name of extension that initiated the request\n\npermission-dialog-description =\n  Allow this site to open the { $scheme } link?\n\npermission-dialog-description-file =\n  Allow this file to open the { $scheme } link?\n\npermission-dialog-description-host =\n  Allow { $host } to open the { $scheme } link?\n\npermission-dialog-description-extension =\n  Allow the extension { $extension } to open the { $scheme } link?\n\npermission-dialog-description-app =\n  Allow this site to open the { $scheme } link with { $appName }?\n\npermission-dialog-description-host-app =\n  Allow { $host } to open the { $scheme } link with { $appName }?\n\npermission-dialog-description-file-app =\n  Allow this file to open the { $scheme } link with { $appName }?\n\npermission-dialog-description-extension-app =\n  Allow the extension { $extension } to open the { $scheme } link with { $appName }?\n\n## Please keep the emphasis around the hostname and scheme (ie the\n## `<strong>` HTML tags). Please also keep the hostname as close to the start\n## of the sentence as your language's grammar allows.\n\npermission-dialog-remember =\n  Always allow <strong>{ $host }</strong> to open <strong>{ $scheme }</strong> links\n\npermission-dialog-remember-file =\n  Always allow this file to open <strong>{ $scheme }</strong> links\n\npermission-dialog-remember-extension =\n  Always allow this extension to open <strong>{ $scheme }</strong> links\n\n##\n\npermission-dialog-btn-open-link =\n      .label = Open Link\n      .accessKey = O\n\npermission-dialog-btn-choose-app =\n      .label = Choose Application\n      .accessKey = A\n\npermission-dialog-unset-description = You’ll need to choose an application.\n\npermission-dialog-set-change-app-link = Choose a different application.\n\n## Chooser dialog\n## Variables:\n##  $scheme - the type of link that's being opened.\n\nchooser-window =\n      .title = Choose Application\n      .style = min-width: 26em; min-height: 26em;\n\nchooser-dialog =\n      .buttonlabelaccept = Open Link\n      .buttonaccesskeyaccept = O\n\nchooser-dialog-description = Choose an application to open the { $scheme } link.\n\n# Please keep the emphasis around the scheme (ie the `<strong>` HTML tags).\nchooser-dialog-remember =\n  Always use this application to open <strong>{ $scheme }</strong> links\n\nchooser-dialog-remember-extra = {\n  PLATFORM() ->\n      [windows] This can be changed in { -brand-short-name }’s options.\n     *[other] This can be changed in { -brand-short-name }’s preferences.\n  }\n\nchoose-other-app-description = Choose other Application\nchoose-app-btn =\n      .label = Choose…\n      .accessKey = C\nchoose-other-app-window-title = Another Application…\n\n# Displayed under the name of a protocol handler in the Launch Application dialog.\nchoose-dialog-privatebrowsing-disabled = Disabled in Private Windows\n";

/***/ })

}]);