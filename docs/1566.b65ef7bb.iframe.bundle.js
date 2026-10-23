"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1566],{

/***/ 31566:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\n## \"Read aloud\" is the name of the Reader View feature that reads the text\n## of the page out loud, instead of users having to read it themselves.\n## Variables:\n##   $shortcut (String) - The keyboard shortcut for the command, e.g. \"N\" or \"←\".\n\n# Label for the toolbar button opening the read aloud menu.\nnarrate-toggle-label = Read aloud ({ $shortcut })\nnarrate-skip-previous =\n    .title = Back ({ $shortcut })\nnarrate-start =\n    .title = Start ({ $shortcut })\nnarrate-stop =\n    .title = Stop ({ $shortcut })\nnarrate-skip-next =\n    .title = Forward ({ $shortcut })\n\n##\n\n# Header for the read aloud menu.\nnarrate-header = Read aloud\nnarrate-rate-input =\n    .title = Speed\n    .aria-label = Choose a narration speed from -100 to 100, where 0 is the default speed.\nnarrate-rate-slow =\n    .title = Slow down narration\nnarrate-rate-fast =\n    .title = Speed up narration\nnarrate-voice-header = Voice\n# Default voice is determined by the language of the document.\nnarrate-voice-default = Default\n# Label for a voice in the voice selector, e.g. \"David (English)\".\n# Variables:\n#   $name (String) - The name of the voice. On Linux, where voice names are often unlocalized language names, this is the localized language name instead.\n#   $language (String) - The language of the voice, as a localized language name or a language tag (e.g. \"en-US\").\nnarrate-voice-label = { $name } ({ $language })\n";

/***/ })

}]);