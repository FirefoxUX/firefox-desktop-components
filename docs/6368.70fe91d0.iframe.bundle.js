"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[6368],{

/***/ 86368:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\ncontainers-window-new2 =\n    .title = Add New Container\n    .style = min-width: 45em\n# Variables\n#   $name (String) - Name of the container\ncontainers-window-update-settings2 =\n    .title = { $name } Container Settings\n    .style = min-width: 45em\n\ncontainers-window-close =\n    .key = w\n\n# This is a term to store style to be applied\n# on the three labels in the containers add/edit dialog:\n#   - name\n#   - icon\n#   - color\n#\n# Using this term and referencing it in the `.style` attribute\n# of the three messages ensures that all three labels\n# will be aligned correctly.\n-containers-labels-style = min-width: 4rem\n\ncontainers-name-label = Name\n    .accesskey = N\n    .style = { -containers-labels-style }\n\ncontainers-name-text =\n    .placeholder = Enter a container name\n\ncontainers-icon-label = Icon\n    .accesskey = I\n    .style = { -containers-labels-style }\n\ncontainers-color-label = Color\n    .accesskey = o\n    .style = { -containers-labels-style }\n\ncontainers-dialog =\n    .buttonlabelaccept = Done\n    .buttonaccesskeyaccept = D\n";

/***/ })

}]);