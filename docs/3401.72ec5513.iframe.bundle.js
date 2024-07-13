"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[3401],{

/***/ 93401:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\n# Page title\nabout-processes-title = Process Manager\n\n# The Actions column\nabout-processes-column-action =\n    .title = Actions\n\n## Tooltips\n\nabout-processes-shutdown-process =\n    .title = Unload tabs and kill process\nabout-processes-shutdown-tab =\n    .title = Close tab\n\n# Profiler icons\n# Variables:\n#    $duration (Number) The time in seconds during which the profiler will be running.\n#                       The value will be an integer, typically less than 10.\nabout-processes-profile-process =\n    .title = { $duration ->\n   [one] Profile all threads of this process for { $duration } second\n  *[other] Profile all threads of this process for { $duration } seconds\n}\n\n## Column headers\n\nabout-processes-column-name = Name\nabout-processes-column-memory-resident = Memory\nabout-processes-column-cpu-total = CPU\n\n## Process names\n## Variables:\n##    $pid (String) The process id of this process, assigned by the OS.\n\nabout-processes-browser-process = { -brand-short-name } ({ $pid })\nabout-processes-web-process = Shared Web Process ({ $pid })\nabout-processes-file-process = Files ({ $pid })\nabout-processes-extension-process = Extensions ({ $pid })\nabout-processes-privilegedabout-process = About pages ({ $pid })\nabout-processes-plugin-process = Plugins ({ $pid })\nabout-processes-privilegedmozilla-process = { -vendor-short-name } sites ({ $pid })\nabout-processes-gmp-plugin-process = Gecko Media Plugins ({ $pid })\nabout-processes-gpu-process = GPU ({ $pid })\nabout-processes-vr-process = VR ({ $pid })\nabout-processes-rdd-process = Data Decoder ({ $pid })\nabout-processes-socket-process = Network ({ $pid })\nabout-processes-remote-sandbox-broker-process = Remote Sandbox Broker ({ $pid })\nabout-processes-fork-server-process = Fork Server ({ $pid })\nabout-processes-preallocated-process = Preallocated ({ $pid })\nabout-processes-utility-process = Utility ({ $pid })\n\n# Unknown process names\n# Variables:\n#    $pid (String) The process id of this process, assigned by the OS.\n#    $type (String) The raw type for this process.\nabout-processes-unknown-process = Other: { $type } ({ $pid })\n\n## Isolated process names\n## Variables:\n##    $pid (String) The process id of this process, assigned by the OS.\n##    $origin (String) The domain name for this process.\n\nabout-processes-web-isolated-process = { $origin } ({ $pid })\nabout-processes-web-serviceworker = { $origin } ({ $pid }, serviceworker)\nabout-processes-with-coop-coep-process = { $origin } ({ $pid }, cross-origin isolated)\nabout-processes-web-isolated-process-private = { $origin } — Private ({ $pid })\nabout-processes-with-coop-coep-process-private = { $origin } — Private ({ $pid }, cross-origin isolated)\n\n## Details within processes\n\n# Single-line summary of threads (non-idle process)\n# Variables:\n#    $number (Number) The number of threads in the process. Typically larger\n#                     than 30. We don't expect to ever have processes with less\n#                     than 5 threads.\n#    $active (Number) The number of active threads in the process.\n#                     The value will be greater than 0 and will never be\n#                     greater than $number.\n#    $list (String) Comma separated list of active threads.\n#                   Can be an empty string if the process is idle.\nabout-processes-active-threads = { $active ->\n   [one] { $active } active thread out of { $number }: { $list }\n  *[other] { $active } active threads out of { $number }: { $list }\n}\n\n# Single-line summary of threads (idle process)\n# Variables:\n#    $number (Number) The number of threads in the process. Typically larger\n#                     than 30. We don't expect to ever have processes with less\n#                     than 5 threads.\n#                     The process is idle so all threads are inactive.\nabout-processes-inactive-threads = { $number ->\n   [one] { $number } inactive thread\n  *[other] { $number } inactive threads\n}\n\n# Thread details\n# Variables:\n#   $name (String) The name assigned to the thread.\n#   $tid (String) The thread id of this thread, assigned by the OS.\nabout-processes-thread-name-and-id = { $name }\n    .title = Thread id: { $tid }\n\n# Tab\n# Variables:\n#   $name (String) The name of the tab (typically the title of the page, might be the url while the page is loading).\nabout-processes-tab-name = Tab: { $name }\nabout-processes-preloaded-tab = Preloaded New Tab\n\n# Single subframe\n# Variables:\n#   $url (String) The full url of this subframe.\nabout-processes-frame-name-one = Subframe: { $url }\n\n# Group of subframes\n# Variables:\n#   $number (Number) The number of subframes in this group. Always ≥ 1.\n#   $shortUrl (String) The shared prefix for the subframes in the group.\nabout-processes-frame-name-many = Subframes ({ $number }): { $shortUrl }\n\n## Utility process actor names\n\nabout-processes-utility-actor-unknown = Unknown actor\nabout-processes-utility-actor-audio-decoder-generic = Generic Audio Decoder\nabout-processes-utility-actor-audio-decoder-applemedia = Apple Media Audio Decoder\nabout-processes-utility-actor-audio-decoder-wmf = Windows Media Framework Audio Decoder\nabout-processes-utility-actor-mf-media-engine = Windows Media Foundation Media Engine CDM\n# \"Oracle\" refers to an internal Firefox process and should be kept in English\nabout-processes-utility-actor-js-oracle = JavaScript Oracle\nabout-processes-utility-actor-windows-utils = Windows Utils\nabout-processes-utility-actor-windows-file-dialog = Windows File Dialog\n\n## Displaying CPU (percentage and total)\n## Variables:\n##    $percent (Number) The percentage of CPU used by the process or thread.\n##                      Always > 0, generally <= 200.\n##    $total (Number) The amount of time used by the process or thread since\n##                    its start.\n##    $unit (String) The unit in which to display $total. See the definitions\n##                   of `duration-unit-*`.\n\n# Common case.\nabout-processes-cpu = { NUMBER($percent, maximumSignificantDigits: 2, style: \"percent\") }\n    .title = Total CPU time: { NUMBER($total, maximumFractionDigits: 0) }{ $unit }\n\n# Special case: data is not available yet.\nabout-processes-cpu-user-and-kernel-not-ready = (measuring)\n\n# Special case: process or thread is almost idle (using less than 0.1% of a CPU core).\n# This case only occurs on Windows where the precision of the CPU times is low.\nabout-processes-cpu-almost-idle = < 0.1%\n    .title = Total CPU time: { NUMBER($total, maximumFractionDigits: 0) }{ $unit }\n\n# Special case: process or thread is currently idle.\nabout-processes-cpu-fully-idle = idle\n    .title = Total CPU time: { NUMBER($total, maximumFractionDigits: 0) }{ $unit }\n\n## Displaying Memory (total and delta)\n## Variables:\n##    $total (Number) The amount of memory currently used by the process.\n##    $totalUnit (String) The unit in which to display $total. See the definitions\n##                        of `memory-unit-*`.\n##    $delta (Number) The absolute value of the amount of memory added recently.\n##    $deltaSign (String) Either \"+\" if the amount of memory has increased\n##                        or \"-\" if it has decreased.\n##    $deltaUnit (String) The unit in which to display $delta. See the definitions\n##                        of `memory-unit-*`.\n\n# Common case.\nabout-processes-total-memory-size-changed = { NUMBER($total, maximumFractionDigits:0) }{ $totalUnit }\n   .title = Evolution: { $deltaSign }{ NUMBER($delta, maximumFractionDigits:0) }{ $deltaUnit }\n\n# Special case: no change.\nabout-processes-total-memory-size-no-change = { NUMBER($total, maximumFractionDigits:0) }{ $totalUnit }\n\n## Duration units\n\nduration-unit-ns = ns\nduration-unit-us = µs\nduration-unit-ms = ms\nduration-unit-s = s\nduration-unit-m = m\nduration-unit-h = h\nduration-unit-d = d\n\n## Memory units\n\nmemory-unit-B = B\nmemory-unit-KB = KB\nmemory-unit-MB = MB\nmemory-unit-GB = GB\nmemory-unit-TB = TB\nmemory-unit-PB = PB\nmemory-unit-EB = EB\n";

/***/ })

}]);