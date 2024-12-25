"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[2415],{

/***/ 42415:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\n### This file contains the entities needed to use the Find Bar.\n\nfindbar-next =\n    .tooltiptext = Find the next occurrence of the phrase\nfindbar-previous =\n    .tooltiptext = Find the previous occurrence of the phrase\n\nfindbar-find-button-close =\n    .tooltiptext = Close find bar\n\nfindbar-highlight-all2 =\n    .label = Highlight All\n    .accesskey = { PLATFORM() ->\n        [macos] l\n       *[other] a\n    }\n    .tooltiptext = Highlight all occurrences of the phrase\n\nfindbar-case-sensitive =\n    .label = Match Case\n    .accesskey = C\n    .tooltiptext = Search with case sensitivity\n\nfindbar-match-diacritics =\n    .label = Match Diacritics\n    .accesskey = i\n    .tooltiptext = Distinguish between accented letters and their base letters (for example, when searching for “resume”, “résumé” will not be matched)\n\nfindbar-entire-word =\n    .label = Whole Words\n    .accesskey = W\n    .tooltiptext = Search whole words only\n\nfindbar-not-found = Phrase not found\n\nfindbar-wrapped-to-top = Reached end of page, continued from top\nfindbar-wrapped-to-bottom = Reached top of page, continued from bottom\n\nfindbar-normal-find =\n    .placeholder = Find in page\nfindbar-fast-find =\n    .placeholder = Quick find\nfindbar-fast-find-links =\n    .placeholder = Quick find (links only)\n\nfindbar-case-sensitive-status =\n    .value = (Case sensitive)\nfindbar-match-diacritics-status =\n    .value = (Matching diacritics)\nfindbar-entire-word-status =\n    .value = (Whole words only)\n\n# Variables:\n#   $current (Number): Index of the currently selected match\n#   $total (Number): Total count of matches\nfindbar-found-matches =\n    .value =\n        { $total ->\n            [one] { $current } of { $total } match\n           *[other] { $current } of { $total } matches\n        }\n\n# Variables:\n#   $limit (Number): Total count of matches allowed before counting stops\nfindbar-found-matches-count-limit =\n    .value =\n        { $limit ->\n            [one] More than { $limit } match\n           *[other] More than { $limit } matches\n        }\n";

/***/ })

}]);