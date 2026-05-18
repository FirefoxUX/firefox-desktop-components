"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1572],{

/***/ 11572:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\n## Variables\n##   $count (number) - The number of tabs\n\ncontent-sharing-modal-more-tabs =\n    { $count ->\n       *[other] +{ $count } more\n    }\n\ncontent-sharing-tabs-title =\n    { $count ->\n        [one] { $count } tab\n       *[other] { $count } tabs\n    }\n\ncontent-sharing-modal-view-page =\n  .label = View page\n\ncontent-sharing-modal-copy-link =\n  .label = Copy link\n\ncontent-sharing-modal-link-copied =\n  .label = Link copied\n\ncontent-sharing-modal-sign-in =\n  .label = Sign in to share links\n\ncontent-sharing-modal-title = Share this collection of links on any browser\n\ncontent-sharing-modal-description = Create a public page for these links that’s easy to share. Once created, the page can’t be edited or deleted and expires in 7 days.\n\ncontent-sharing-modal-policy = By sharing, you agree to our <a data-l10n-name=\"aup-link\">Acceptable Use Policy</a>\n\n# This is a warning to the user when they try to share more than the maximum\n# number of links and that the first N links will be shared.\n# The current max is 30.\ncontent-sharing-modal-too-many-links =\n  { $count ->\n      *[other] Only a maximum of { $count } links will be included\n  }\n\ncontent-sharing-modal-generic-error =\n  .heading = Something went wrong\n  .message = Try again later.\n";

/***/ })

}]);