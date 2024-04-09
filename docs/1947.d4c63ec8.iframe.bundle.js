"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[1947],{

/***/ 71947:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\ncrashreporter-branded-title = { -brand-short-name } Crash Reporter\n\ncrashreporter-apology = We’re Sorry\ncrashreporter-crashed-and-restore = { -brand-short-name } had a problem and crashed. We’ll try to restore your tabs and windows when it restarts.\ncrashreporter-plea = To help us diagnose and fix the problem, you can send us a crash report.\n\ncrashreporter-information = This application is run after a crash to report the problem to { -vendor-short-name }. It should not be run directly.\n\ncrashreporter-error = { -brand-short-name } had a problem and crashed. Unfortunately, the crash reporter is unable to submit a report for this crash.\n# $details (String) - the reason that a crash report cannot be submitted\ncrashreporter-error-details = Details: { $details }\n\ncrashreporter-no-run-message = This application is run after a crash to report the problem to the application vendor. It should not be run directly.\n\ncrashreporter-button-details = Details…\ncrashreporter-loading-details = Loading…\n\ncrashreporter-view-report-title = Report Contents\n\ncrashreporter-comment-prompt = Add a comment (comments are publicly visible)\n\ncrashreporter-report-info = This report also contains technical information about the state of the application when it crashed.\n\ncrashreporter-send-report = Tell { -vendor-short-name } about this crash so they can fix it.\n\ncrashreporter-include-url = Include the address of the page I was on.\n\ncrashreporter-submit-status = Your crash report will be submitted before you quit or restart.\ncrashreporter-submit-in-progress = Submitting your report…\ncrashreporter-submit-success = Report submitted successfully!\ncrashreporter-submit-failure = There was a problem submitting your report.\n\ncrashreporter-resubmit-status = Resending reports that previously failed to send…\n\ncrashreporter-button-quit = Quit { -brand-short-name }\n\ncrashreporter-button-restart = Restart { -brand-short-name }\n\ncrashreporter-button-ok = OK\ncrashreporter-button-close = Close\n\n# $id (String) - the crash id from the server, typically a UUID\ncrashreporter-crash-identifier = Crash ID: { $id }\n\n# $url (String) - the url which the user can use to view the submitted crash report\ncrashreporter-crash-details = You can view details of this crash at { $url }.\n\n# Error strings\n\ncrashreporter-error-minidump-analyzer = Failed to run minidump-analyzer\n# $path (String) - the file path\ncrashreporter-error-opening-file = Failed to open file ({ $path })\n# $path (String) - the file path\ncrashreporter-error-loading-file = Failed to load file ({ $path })\n# $path (String) - the path\ncrashreporter-error-creating-dir = Failed to create directory ({ $path })\ncrashreporter-error-no-home-dir = Missing home directory\n# $from (String) - the source path\n# $to (String) - the destination path\ncrashreporter-error-moving-path = Failed to move { $from } to { $to }\ncrashreporter-error-version-eol = Version end of life: crash reports are no longer accepted.\n";

/***/ })

}]);