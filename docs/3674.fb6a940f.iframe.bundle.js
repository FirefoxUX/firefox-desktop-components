"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[3674],{

/***/ 63674:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\npage-title = Troubleshooting Information\npage-subtitle =\n    This page contains technical information that might be useful when you’re\n    trying to solve a problem. If you are looking for answers to common questions\n    about { -brand-short-name }, check out our <a data-l10n-name=\"support-link\">support website</a>.\n\ncrashes-title = Crash Reports\ncrashes-id = Report ID\ncrashes-send-date = Submitted\ncrashes-all-reports = All Crash Reports\ncrashes-no-config = This application has not been configured to display crash reports.\nsupport-addons-title = Add-ons\nsupport-addons-name = Name\nsupport-addons-type = Type\nsupport-addons-enabled = Enabled\nsupport-addons-version = Version\nsupport-addons-id = ID\nsecurity-software-title = Security Software\nsecurity-software-type = Type\nsecurity-software-name = Name\nsecurity-software-antivirus = Antivirus\nsecurity-software-antispyware = Antispyware\nsecurity-software-firewall = Firewall\nfeatures-title = { -brand-short-name } Features\nfeatures-name = Name\nfeatures-version = Version\nfeatures-id = ID\nprocesses-title = Remote Processes\nprocesses-type = Type\nprocesses-count = Count\napp-basics-title = Application Basics\napp-basics-name = Name\napp-basics-version = Version\napp-basics-build-id = Build ID\napp-basics-distribution-id = Distribution ID\napp-basics-update-channel = Update Channel\n# This message refers to the folder used to store updates on the device,\n# as in \"Folder for updates\". \"Update\" is a noun, not a verb.\napp-basics-update-dir =\n    { PLATFORM() ->\n        [linux] Update Directory\n       *[other] Update Folder\n    }\napp-basics-update-history = Update History\napp-basics-show-update-history = Show Update History\n# Represents the path to the binary used to start the application.\napp-basics-binary = Application Binary\napp-basics-profile-dir =\n    { PLATFORM() ->\n        [linux] Profile Directory\n       *[other] Profile Folder\n    }\napp-basics-enabled-plugins = Enabled Plugins\napp-basics-build-config = Build Configuration\napp-basics-user-agent = User Agent\napp-basics-os = OS\napp-basics-os-theme = OS Theme\n# Rosetta is Apple's translation process to run apps containing x86_64\n# instructions on Apple Silicon. This should remain in English.\napp-basics-rosetta = Rosetta Translated\napp-basics-memory-use = Memory Use\napp-basics-performance = Performance\napp-basics-service-workers = Registered Service Workers\napp-basics-third-party = Third-party Modules\napp-basics-profiles = Profiles\napp-basics-launcher-process-status = Launcher Process\napp-basics-multi-process-support = Multiprocess Windows\napp-basics-fission-support = Fission Windows\napp-basics-remote-processes-count = Remote Processes\napp-basics-enterprise-policies = Enterprise Policies\napp-basics-location-service-key-google = Google Location Service Key\napp-basics-safebrowsing-key-google = Google Safebrowsing Key\napp-basics-key-mozilla = Mozilla Location Service Key\napp-basics-safe-mode = Safe Mode\napp-basics-memory-size = Memory Size (RAM)\napp-basics-disk-available = Disk Space Available\n\n# Variables:\n#   $value (number) - Amount of data being stored\n#   $unit (string) - The unit of data being stored (e.g. MB)\napp-basics-data-size = { $value } { $unit }\n\nshow-dir-label =\n    { PLATFORM() ->\n        [macos] Show in Finder\n        [windows] Open Folder\n       *[other] Open Directory\n    }\nenvironment-variables-title = Environment Variables\nenvironment-variables-name = Name\nenvironment-variables-value = Value\nexperimental-features-title = Experimental Features\nexperimental-features-name = Name\nexperimental-features-value = Value\nmodified-key-prefs-title = Important Modified Preferences\nmodified-prefs-name = Name\nmodified-prefs-value = Value\nuser-js-title = user.js Preferences\nuser-js-description = Your profile folder contains a <a data-l10n-name=\"user-js-link\">user.js file</a>, which includes preferences that were not created by { -brand-short-name }.\nlocked-key-prefs-title = Important Locked Preferences\nlocked-prefs-name = Name\nlocked-prefs-value = Value\ngraphics-title = Graphics\ngraphics-features-title = Features\ngraphics-diagnostics-title = Diagnostics\ngraphics-failure-log-title = Failure Log\ngraphics-gpu1-title = GPU #1\ngraphics-gpu2-title = GPU #2\ngraphics-decision-log-title = Decision Log\ngraphics-crash-guards-title = Crash Guard Disabled Features\ngraphics-workarounds-title = Workarounds\ngraphics-device-pixel-ratios = Window Device Pixel Ratios\n# Windowing system in use on Linux (e.g. X11, Wayland).\ngraphics-window-protocol = Window Protocol\n# Desktop environment in use on Linux (e.g. GNOME, KDE, XFCE, etc).\ngraphics-desktop-environment = Desktop Environment\nplace-database-title = Places Database\nplace-database-stats = Statistics\nplace-database-stats-show = Show Statistics\nplace-database-stats-hide = Hide Statistics\nplace-database-stats-entity = Entity\nplace-database-stats-count = Count\nplace-database-stats-size-kib = Size (KiB)\nplace-database-stats-size-perc = Size (%)\nplace-database-stats-efficiency-perc = Efficiency (%)\nplace-database-stats-sequentiality-perc = Sequentiality (%)\nplace-database-integrity = Integrity\nplace-database-verify-integrity = Verify Integrity\na11y-title = Accessibility\na11y-activated = Activated\na11y-force-disabled = Prevent Accessibility\na11y-handler-used = Accessible Handler Used\na11y-instantiator = Accessibility Instantiator\nlibrary-version-title = Library Versions\ncopy-text-to-clipboard-label = Copy text to clipboard\ncopy-raw-data-to-clipboard-label = Copy raw data to clipboard\nsandbox-title = Sandbox\nsandbox-sys-call-log-title = Rejected System Calls\nsandbox-sys-call-index = #\nsandbox-sys-call-age = Seconds Ago\nsandbox-sys-call-pid = PID\nsandbox-sys-call-tid = TID\nsandbox-sys-call-proc-type = Process Type\nsandbox-sys-call-number = Syscall\nsandbox-sys-call-args = Arguments\ntroubleshoot-mode-title = Diagnose issues\nrestart-in-troubleshoot-mode-label = Troubleshoot Mode…\nclear-startup-cache-title = Try clearing the startup cache\nclear-startup-cache-label = Clear startup cache…\nstartup-cache-dialog-title2 = Restart { -brand-short-name } to clear startup cache?\nstartup-cache-dialog-body2 = This will not change your settings or remove extensions.\nrestart-button-label = Restart\n\n## Media titles\n\naudio-backend = Audio Backend\nmax-audio-channels = Max Channels\nsample-rate = Preferred Sample Rate\nroundtrip-latency = Roundtrip latency (standard deviation)\nmedia-title = Media\nmedia-output-devices-title = Output Devices\nmedia-input-devices-title = Input Devices\nmedia-device-name = Name\nmedia-device-group = Group\nmedia-device-vendor = Vendor\nmedia-device-state = State\nmedia-device-preferred = Preferred\nmedia-device-format = Format\nmedia-device-channels = Channels\nmedia-device-rate = Rate\nmedia-device-latency = Latency\nmedia-capabilities-title = Media Capabilities\nmedia-codec-support-info = Codec Support Information\n# List all the entries of the database.\nmedia-capabilities-enumerate = Enumerate database\n\n##\n\nintl-title = Internationalization & Localization\nintl-app-title = Application Settings\nintl-locales-requested = Requested Locales\nintl-locales-available = Available Locales\nintl-locales-supported = App Locales\nintl-locales-default = Default Locale\nintl-os-title = Operating System\nintl-os-prefs-system-locales = System Locales\nintl-regional-prefs = Regional Preferences\n\n## Remote Debugging\n##\n## The Firefox remote protocol provides low-level debugging interfaces\n## used to inspect state and control execution of documents,\n## browser instrumentation, user interaction simulation,\n## and for subscribing to browser-internal events.\n##\n## See also https://firefox-source-docs.mozilla.org/remote/\n\nremote-debugging-title = Remote Debugging (Chromium Protocol)\nremote-debugging-accepting-connections = Accepting Connections\nremote-debugging-url = URL\n\n##\n\n# Variables\n# $days (Integer) - Number of days of crashes to log\nreport-crash-for-days =\n    { $days ->\n        [one] Crash Reports for the Last { $days } Day\n       *[other] Crash Reports for the Last { $days } Days\n    }\n\n# Variables\n# $minutes (integer) - Number of minutes since crash\ncrashes-time-minutes =\n    { $minutes ->\n        [one] { $minutes } minute ago\n       *[other] { $minutes } minutes ago\n    }\n\n# Variables\n# $hours (integer) - Number of hours since crash\ncrashes-time-hours =\n    { $hours ->\n        [one] { $hours } hour ago\n       *[other] { $hours } hours ago\n    }\n\n# Variables\n# $days (integer) - Number of days since crash\ncrashes-time-days =\n    { $days ->\n        [one] { $days } day ago\n       *[other] { $days } days ago\n    }\n\n# Variables\n# $reports (integer) - Number of pending reports\npending-reports =\n    { $reports ->\n        [one] All Crash Reports (including { $reports } pending crash in the given time range)\n       *[other] All Crash Reports (including { $reports } pending crashes in the given time range)\n    }\n\nraw-data-copied = Raw data copied to clipboard\ntext-copied = Text copied to clipboard\n\n## The verb \"blocked\" here refers to a graphics feature such as \"Direct2D\" or \"OpenGL layers\".\n\nblocked-driver = Blocked for your graphics driver version.\nblocked-gfx-card = Blocked for your graphics card because of unresolved driver issues.\nblocked-os-version = Blocked for your operating system version.\nblocked-mismatched-version = Blocked for your graphics driver version mismatch between registry and DLL.\n# Variables\n# $driverVersion - The graphics driver version string\ntry-newer-driver = Blocked for your graphics driver version. Try updating your graphics driver to version { $driverVersion } or newer.\n\n# \"ClearType\" is a proper noun and should not be translated. Feel free to leave English strings if\n# there are no good translations, these are only used in about:support\nclear-type-parameters = ClearType Parameters\n\ncompositing = Compositing\nhardware-h264 = Hardware H264 Decoding\nmain-thread-no-omtc = main thread, no OMTC\nyes = Yes\nno = No\nunknown = Unknown\nvirtual-monitor-disp = Virtual Monitor Display\n\n## The following strings indicate if an API key has been found.\n## In some development versions, it's expected for some API keys that they are\n## not found.\n\nfound = Found\nmissing = Missing\n\ngpu-process-pid = GPUProcessPid\ngpu-process = GPUProcess\ngpu-description = Description\ngpu-vendor-id = Vendor ID\ngpu-device-id = Device ID\ngpu-subsys-id = Subsys ID\ngpu-drivers = Drivers\ngpu-ram = RAM\ngpu-driver-vendor = Driver Vendor\ngpu-driver-version = Driver Version\ngpu-driver-date = Driver Date\ngpu-active = Active\nwebgl1-wsiinfo = WebGL 1 Driver WSI Info\nwebgl1-renderer = WebGL 1 Driver Renderer\nwebgl1-version = WebGL 1 Driver Version\nwebgl1-driver-extensions = WebGL 1 Driver Extensions\nwebgl1-extensions = WebGL 1 Extensions\nwebgl2-wsiinfo = WebGL 2 Driver WSI Info\nwebgl2-renderer = WebGL 2 Driver Renderer\nwebgl2-version = WebGL 2 Driver Version\nwebgl2-driver-extensions = WebGL 2 Driver Extensions\nwebgl2-extensions = WebGL 2 Extensions\n\n# Variables\n#   $bugNumber (string) - Bug number on Bugzilla\nsupport-blocklisted-bug = Blocklisted due to known issues: <a data-l10n-name=\"bug-link\">bug { $bugNumber }</a>\n\n# Variables\n# $failureCode (string) - String that can be searched in the source tree.\nunknown-failure = Blocklisted; failure code { $failureCode }\n\nd3d11layers-crash-guard = D3D11 Compositor\nglcontext-crash-guard = OpenGL\nwmfvpxvideo-crash-guard = WMF VPX Video Decoder\n\nreset-on-next-restart = Reset on Next Restart\ngpu-process-kill-button = Terminate GPU Process\ngpu-device-reset = Device Reset\ngpu-device-reset-button = Trigger Device Reset\nuses-tiling = Uses Tiling\ncontent-uses-tiling = Uses Tiling (Content)\noff-main-thread-paint-enabled = Off Main Thread Painting Enabled\noff-main-thread-paint-worker-count = Off Main Thread Painting Worker Count\ntarget-frame-rate = Target Frame Rate\n\nmin-lib-versions = Expected minimum version\nloaded-lib-versions = Version in use\n\nhas-seccomp-bpf = Seccomp-BPF (System Call Filtering)\nhas-seccomp-tsync = Seccomp Thread Synchronization\nhas-user-namespaces = User Namespaces\nhas-privileged-user-namespaces = User Namespaces for privileged processes\ncan-sandbox-content = Content Process Sandboxing\ncan-sandbox-media = Media Plugin Sandboxing\ncontent-sandbox-level = Content Process Sandbox Level\neffective-content-sandbox-level = Effective Content Process Sandbox Level\ncontent-win32k-lockdown-state = Win32k Lockdown State for Content Process\nsupport-sandbox-gpu-level = GPU Process Sandbox Level\nsandbox-proc-type-content = content\nsandbox-proc-type-file = file content\nsandbox-proc-type-media-plugin = media plugin\nsandbox-proc-type-data-decoder = data decoder\n\nstartup-cache-title = Startup Cache\nstartup-cache-disk-cache-path = Disk Cache Path\nstartup-cache-ignore-disk-cache = Ignore Disk Cache\nstartup-cache-found-disk-cache-on-init = Found Disk Cache on Init\nstartup-cache-wrote-to-disk-cache = Wrote to Disk Cache\n\nlauncher-process-status-0 = Enabled\nlauncher-process-status-1 = Disabled due to failure\nlauncher-process-status-2 = Disabled forcibly\nlauncher-process-status-unknown = Unknown status\n\n# Variables\n# $remoteWindows (integer) - Number of remote windows\n# $totalWindows (integer) - Number of total windows\nmulti-process-windows = { $remoteWindows }/{ $totalWindows }\n# Variables\n# $fissionWindows (integer) - Number of remote windows\n# $totalWindows (integer) - Number of total windows\nfission-windows = { $fissionWindows }/{ $totalWindows }\nfission-status-experiment-control = Disabled by experiment\nfission-status-experiment-treatment = Enabled by experiment\nfission-status-disabled-by-e10s-env = Disabled by environment\nfission-status-enabled-by-env = Enabled by environment\nfission-status-disabled-by-env = Disabled by environment\nfission-status-enabled-by-default = Enabled by default\nfission-status-disabled-by-default = Disabled by default\nfission-status-enabled-by-user-pref = Enabled by user\nfission-status-disabled-by-user-pref = Disabled by user\nfission-status-disabled-by-e10s-other = E10s disabled\nfission-status-enabled-by-rollout = Enabled by phased rollout\n\nasync-pan-zoom = Asynchronous Pan/Zoom\napz-none = none\nwheel-enabled = wheel input enabled\ntouch-enabled = touch input enabled\ndrag-enabled = scrollbar drag enabled\nkeyboard-enabled = keyboard enabled\nautoscroll-enabled = autoscroll enabled\nzooming-enabled = smooth pinch-zoom enabled\n\n## Variables\n## $preferenceKey (string) - String ID of preference\n\nwheel-warning = async wheel input disabled due to unsupported pref: { $preferenceKey }\ntouch-warning = async touch input disabled due to unsupported pref: { $preferenceKey }\n\n## Strings representing the status of the Enterprise Policies engine.\n\npolicies-inactive = Inactive\npolicies-active = Active\npolicies-error = Error\n\n## Printing section\n\nsupport-printing-title = Printing\nsupport-printing-troubleshoot = Troubleshooting\nsupport-printing-clear-settings-button = Clear saved print settings\nsupport-printing-modified-settings = Modified print settings\nsupport-printing-prefs-name = Name\nsupport-printing-prefs-value = Value\n\n## Normandy sections\n\nsupport-remote-experiments-title = Remote Experiments\nsupport-remote-experiments-name = Name\nsupport-remote-experiments-branch = Experiment Branch\nsupport-remote-experiments-see-about-studies = See <a data-l10n-name=\"support-about-studies-link\">about:studies</a> for more information, including how to disable individual experiments or to disable { -brand-short-name } from running this type of experiment in the future.\n\nsupport-remote-features-title = Remote Features\nsupport-remote-features-name = Name\nsupport-remote-features-status = Status\n";

/***/ })

}]);