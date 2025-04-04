"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[6978],{

/***/ 46978:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\n### The term \"Service Workers\" and \"Workers\" should not be translated\n\nabout-service-workers-title = About Service Workers\nabout-service-workers-main-title = Registered Service Workers\nabout-service-workers-warning-not-enabled = Service Workers are not enabled.\nabout-service-workers-warning-no-service-workers = No Service Workers registered.\n\n# The original title of service workers' information\n#\n# Variables:\n#   $originTitle: original title\norigin-title = Origin: { $originTitle }\n\n## These strings are for showing the information of workers.\n##\n## Variables:\n##  $name: the name of scope, active cache, waiting cache and the push end point.\n##  $url: the url of script specification and current worker.\n\nscope = <strong>Scope:</strong> { $name }\nscript-spec = <strong>Script Spec:</strong> <a data-l10n-name=\"link\">{ $url }</a>\ncurrent-worker-url = <strong>Current Worker URL:</strong> <a data-l10n-name=\"link\">{ $url }</a>\nactive-cache-name = <strong>Active Cache Name:</strong> { $name }\nwaiting-cache-name = <strong>Waiting Cache Name:</strong> { $name }\npush-end-point-waiting = <strong>Push Endpoint:</strong> { waiting }\npush-end-point-result = <strong>Push Endpoint:</strong> { $name }\n\n# This term is used as a button label (verb, not noun).\nupdate-button = Update\n\nunregister-button = Unregister\n\nunregister-error = Failed to unregister this Service Worker.\n\nwaiting = Waiting…\n";

/***/ })

}]);