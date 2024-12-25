"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[2575],{

/***/ 22575:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\npictureinpicture-player-title = Picture-in-Picture\n\n## Note that this uses .tooltip rather than the standard '.title'\n## or '.tooltiptext' -  but it has the same effect. Code in the\n## picture-in-picture window will read and copy this to an in-document\n## DOM node that then shows the tooltip.\n##\n## Variables:\n##   $shortcut (String) - Keyboard shortcut to execute the command.\n\npictureinpicture-pause-btn =\n  .aria-label = Pause\n  .tooltip = Pause (Spacebar)\npictureinpicture-play-btn =\n  .aria-label = Play\n  .tooltip = Play (Spacebar)\n\npictureinpicture-mute-btn =\n  .aria-label = Mute\n  .tooltip = Mute ({ $shortcut })\npictureinpicture-unmute-btn =\n  .aria-label = Unmute\n  .tooltip = Unmute ({ $shortcut })\n\npictureinpicture-unpip-btn =\n  .aria-label = Send back to tab\n  .tooltip = Back to tab\n\npictureinpicture-close-btn =\n  .aria-label = Close\n  .tooltip = Close ({ $shortcut })\n\npictureinpicture-subtitles-btn =\n  .aria-label = Subtitles\n  .tooltip = Subtitles\n\npictureinpicture-fullscreen-btn2 =\n  .aria-label = Fullscreen\n  .tooltip = Fullscreen (double-click or { $shortcut })\n\npictureinpicture-exit-fullscreen-btn2 =\n  .aria-label = Exit fullscreen\n  .tooltip = Exit fullscreen (double-click or { $shortcut })\n\n##\n\n# Keyboard shortcut to toggle fullscreen mode when Picture-in-Picture is open.\npictureinpicture-toggle-fullscreen-shortcut =\n  .key = F\n\n## Note that this uses .tooltip rather than the standard '.title'\n## or '.tooltiptext' -  but it has the same effect. Code in the\n## picture-in-picture window will read and copy this to an in-document\n## DOM node that then shows the tooltip.\n\npictureinpicture-seekbackward-btn =\n  .aria-label = Backward\n  .tooltip = Backward (←)\n\npictureinpicture-seekforward-btn =\n  .aria-label = Forward\n  .tooltip = Forward (→)\n\n##\n\n# This string is never displayed on the window. Is intended to be announced by\n# a screen reader whenever a user opens the subtitles settings panel\n# after selecting the subtitles button.\npictureinpicture-subtitles-panel-accessible = Subtitles settings\n\npictureinpicture-subtitles-label = Subtitles\n\npictureinpicture-font-size-label = Font size\n\npictureinpicture-font-size-small = Small\n\npictureinpicture-font-size-medium = Medium\n\npictureinpicture-font-size-large = Large\n";

/***/ })

}]);