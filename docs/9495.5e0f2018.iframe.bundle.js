"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[9495],{

/***/ 19495:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this file,\n# You can obtain one at http://mozilla.org/MPL/2.0/.\n\nplaces-open =\n  .label = Open\n  .accesskey = O\nplaces-open-in-tab =\n  .label = Open in New Tab\n  .accesskey = w\nplaces-open-in-container-tab =\n  .label = Open in New Container Tab\n  .accesskey = i\nplaces-open-all-bookmarks =\n  .label = Open All Bookmarks\n  .accesskey = O\nplaces-open-all-in-tabs =\n  .label = Open All in Tabs\n  .accesskey = O\nplaces-open-in-window =\n  .label = Open in New Window\n  .accesskey = N\nplaces-open-in-private-window =\n  .label = Open in New Private Window\n  .accesskey = P\n\nplaces-empty-bookmarks-folder =\n  .label = (Empty)\n\nplaces-add-bookmark =\n  .label = Add Bookmark…\n  .accesskey = B\nplaces-add-folder-contextmenu =\n  .label = Add Folder…\n  .accesskey = F\nplaces-add-folder =\n  .label = Add Folder…\n  .accesskey = o\nplaces-add-separator =\n  .label = Add Separator\n  .accesskey = S\n\nplaces-view =\n  .label = View\n  .accesskey = w\nplaces-by-date =\n  .label = By Date\n  .accesskey = D\nplaces-by-site =\n  .label = By Site\n  .accesskey = S\nplaces-by-most-visited =\n  .label = By Most Visited\n  .accesskey = V\nplaces-by-last-visited =\n  .label = By Last Visited\n  .accesskey = L\nplaces-by-day-and-site =\n  .label = By Date and Site\n  .accesskey = t\n\nplaces-history-search =\n  .placeholder = Search history\nplaces-history =\n  .aria-label = History\nplaces-bookmarks-search =\n  .placeholder = Search bookmarks\n\nplaces-delete-domain-data =\n  .label = Forget About This Site\n  .accesskey = F\nplaces-sortby-name =\n  .label = Sort By Name\n  .accesskey = r\n# places-edit-bookmark and places-edit-generic will show one or the other and can have the same access key.\nplaces-edit-bookmark =\n  .label = Edit Bookmark…\n  .accesskey = E\nplaces-edit-generic =\n  .label = Edit…\n  .accesskey = E\nplaces-edit-folder2 =\n  .label = Edit Folder…\n  .accesskey = E\n# Variables\n#   $count (number) - Number of folders to delete\nplaces-delete-folder =\n  .label =\n      { $count ->\n          [1] Delete Folder\n         *[other] Delete Folders\n      }\n  .accesskey = D\n# Variables:\n#   $count (number) - The number of pages selected for removal.\nplaces-delete-page =\n  .label =\n      { $count ->\n          [1] Delete Page\n         *[other] Delete Pages\n      }\n  .accesskey = D\n\n# Managed bookmarks are created by an administrator and cannot be changed by the user.\nmanaged-bookmarks =\n  .label = Managed bookmarks\n# This label is used when a managed bookmarks folder doesn't have a name.\nmanaged-bookmarks-subfolder =\n  .label = Subfolder\n\n# This label is used for the \"Other Bookmarks\" folder that appears in the bookmarks toolbar.\nother-bookmarks-folder =\n  .label = Other Bookmarks\n\nplaces-show-in-folder =\n  .label = Show in Folder\n  .accesskey = F\n\n# Variables:\n# $count (number) - The number of elements being selected for removal.\nplaces-delete-bookmark =\n  .label =\n      { $count ->\n          [1] Delete Bookmark\n         *[other] Delete Bookmarks\n      }\n  .accesskey = D\n\n# Variables:\n#   $count (number) - The number of bookmarks being added.\nplaces-create-bookmark =\n  .label =\n      { $count ->\n          [1] Bookmark Page…\n         *[other] Bookmark Pages…\n      }\n  .accesskey = B\n\nplaces-untag-bookmark =\n  .label = Remove Tag\n  .accesskey = R\n\nplaces-manage-bookmarks =\n  .label = Manage Bookmarks\n  .accesskey = M\n\nplaces-forget-about-this-site-confirmation-title =\n  Forgetting about this site\n\n# Variables:\n# $hostOrBaseDomain (string) - The base domain (or host in case there is no base domain) for which data is being removed\nplaces-forget-about-this-site-confirmation-msg =\n  This action will remove data related to { $hostOrBaseDomain } including history, cookies, cache and content preferences. Related bookmarks and passwords will not be removed. Are you sure you want to proceed?\n\nplaces-forget-about-this-site-forget = Forget\n\nplaces-library3 =\n  .title = Library\n\nplaces-organize-button =\n  .label = Organize\n  .tooltiptext = Organize your bookmarks\n  .accesskey = O\n\nplaces-organize-button-mac =\n  .label = Organize\n  .tooltiptext = Organize your bookmarks\n\nplaces-file-close =\n  .label = Close\n  .accesskey = C\n\nplaces-cmd-close =\n  .key = w\n\nplaces-view-button =\n  .label = Views\n  .tooltiptext = Change your view\n  .accesskey = V\n\nplaces-view-button-mac =\n  .label = Views\n  .tooltiptext = Change your view\n\nplaces-view-menu-columns =\n  .label = Show Columns\n  .accesskey = C\n\nplaces-view-menu-sort =\n  .label = Sort\n  .accesskey = S\n\nplaces-view-sort-unsorted =\n  .label = Unsorted\n  .accesskey = U\n\nplaces-view-sort-ascending =\n  .label = A > Z Sort Order\n  .accesskey = A\n\nplaces-view-sort-descending =\n  .label = Z > A Sort Order\n  .accesskey = Z\n\nplaces-maintenance-button =\n  .label = Import and Backup\n  .tooltiptext = Import and backup your bookmarks\n  .accesskey = I\n\nplaces-maintenance-button-mac =\n  .label = Import and Backup\n  .tooltiptext = Import and backup your bookmarks\n\nplaces-cmd-backup =\n  .label = Backup…\n  .accesskey = B\n\nplaces-cmd-restore =\n  .label = Restore\n  .accesskey = R\n\nplaces-cmd-restore-from-file =\n  .label = Choose File…\n  .accesskey = C\n\nplaces-import-bookmarks-from-html =\n  .label = Import Bookmarks from HTML…\n  .accesskey = I\n\nplaces-export-bookmarks-to-html =\n  .label = Export Bookmarks to HTML…\n  .accesskey = E\n\nplaces-import-other-browser =\n  .label = Import Data from Another Browser…\n  .accesskey = A\n\nplaces-view-sort-col-name =\n  .label = Name\n\nplaces-view-sort-col-tags =\n  .label = Tags\n\nplaces-view-sort-col-url =\n  .label = Location\n\nplaces-view-sort-col-most-recent-visit =\n  .label = Most Recent Visit\n\nplaces-view-sort-col-visit-count =\n  .label = Visit Count\n\nplaces-view-sort-col-date-added =\n  .label = Added\n\nplaces-view-sort-col-last-modified =\n  .label = Last Modified\n\nplaces-view-sortby-name =\n  .label = Sort by Name\n  .accesskey = N\nplaces-view-sortby-url =\n  .label = Sort by Location\n  .accesskey = L\nplaces-view-sortby-date =\n  .label = Sort by Most Recent Visit\n  .accesskey = V\nplaces-view-sortby-visit-count =\n  .label = Sort by Visit Count\n  .accesskey = C\nplaces-view-sortby-date-added =\n  .label = Sort by Added\n  .accesskey = e\nplaces-view-sortby-last-modified =\n  .label = Sort by Last Modified\n  .accesskey = M\nplaces-view-sortby-tags =\n  .label = Sort by Tags\n  .accesskey = T\n\nplaces-cmd-find-key =\n  .key = f\n\nplaces-back-button =\n  .tooltiptext = Go back\n\nplaces-forward-button =\n  .tooltiptext = Go forward\n\nplaces-details-pane-select-an-item-description = Select an item to view and edit its properties\n\nplaces-details-pane-no-items =\n  .value = No items\n# Variables:\n#   $count (Number): number of items\nplaces-details-pane-items-count =\n  .value =\n      { $count ->\n          [one] One item\n         *[other] { $count } items\n      }\n\n## Strings used as a placeholder in the Library search field. For example,\n## \"Search History\" stands for \"Search through the browser's history\".\n\nplaces-search-bookmarks =\n    .placeholder = Search Bookmarks\nplaces-search-history =\n    .placeholder = Search History\nplaces-search-downloads =\n    .placeholder = Search Downloads\n\n##\n\nplaces-locked-prompt = The bookmarks and history system will not be functional because one of { -brand-short-name }’s files is in use by another application. Some security software can cause this problem.\n";

/***/ })

}]);