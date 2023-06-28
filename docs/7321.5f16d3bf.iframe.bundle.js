"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[7321],{

/***/ 67321:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\n### Localization for about:webrtc, a troubleshooting and diagnostic page\n### for WebRTC calls. See https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API.\n\n# The text \"WebRTC\" is a proper noun and should not be translated.\nabout-webrtc-document-title = WebRTC Internals\n\n# \"about:webrtc\" is a internal browser URL and should not be\n# translated. This string is used as a title for a file save dialog box.\nabout-webrtc-save-page-dialog-title = save about:webrtc as\n\n## AEC is an abbreviation for Acoustic Echo Cancellation.\n\nabout-webrtc-aec-logging-msg-label = AEC Logging\nabout-webrtc-aec-logging-off-state-label = Start AEC Logging\nabout-webrtc-aec-logging-on-state-label = Stop AEC Logging\nabout-webrtc-aec-logging-on-state-msg = AEC logging active (speak with the caller for a few minutes and then stop the capture)\n\n##\n\n# The autorefresh checkbox causes a stats section to autorefresh its content when checked\nabout-webrtc-auto-refresh-label = Auto Refresh\n\n# Determines the default state of the Auto Refresh check boxes\nabout-webrtc-auto-refresh-default-label = Auto Refresh By Default\n\n# A button which forces a refresh of displayed statistics\nabout-webrtc-force-refresh-button = Refresh\n\n\n# \"PeerConnection\" is a proper noun associated with the WebRTC module. \"ID\" is\n# an abbreviation for Identifier. This string should not normally be translated\n# and is used as a data label.\nabout-webrtc-peerconnection-id-label = PeerConnection ID:\n\n# The number of DataChannels that a PeerConnection has opened\nabout-webrtc-data-channels-opened-label = Data Channels Opened:\n\n# The number of once open DataChannels that a PeerConnection has closed\nabout-webrtc-data-channels-closed-label = Data Channels Closed:\n\n## \"SDP\" is an abbreviation for Session Description Protocol, an IETF standard.\n## See http://wikipedia.org/wiki/Session_Description_Protocol\n\nabout-webrtc-sdp-heading = SDP\nabout-webrtc-local-sdp-heading = Local SDP\nabout-webrtc-local-sdp-heading-offer = Local SDP (Offer)\nabout-webrtc-local-sdp-heading-answer = Local SDP (Answer)\nabout-webrtc-remote-sdp-heading = Remote SDP\nabout-webrtc-remote-sdp-heading-offer = Remote SDP (Offer)\nabout-webrtc-remote-sdp-heading-answer = Remote SDP (Answer)\nabout-webrtc-sdp-history-heading = SDP History\nabout-webrtc-sdp-parsing-errors-heading = SDP Parsing Errors\n\n##\n\n# \"RTP\" is an abbreviation for the Real-time Transport Protocol, an IETF\n# specification, and should not normally be translated. \"Stats\" is an\n# abbreviation for Statistics.\nabout-webrtc-rtp-stats-heading = RTP Stats\n\n## \"ICE\" is an abbreviation for Interactive Connectivity Establishment, which\n## is an IETF protocol, and should not normally be translated.\n\nabout-webrtc-ice-state = ICE State\n# \"Stats\" is an abbreviation for Statistics.\nabout-webrtc-ice-stats-heading = ICE Stats\nabout-webrtc-ice-restart-count-label = ICE restarts:\nabout-webrtc-ice-rollback-count-label = ICE rollbacks:\nabout-webrtc-ice-pair-bytes-sent = Bytes sent:\nabout-webrtc-ice-pair-bytes-received = Bytes received:\nabout-webrtc-ice-component-id = Component ID\n\n## These adjectives are used to label a line of statistics collected for a peer\n## connection. The data represents either the local or remote end of the\n## connection.\n\nabout-webrtc-type-local = Local\nabout-webrtc-type-remote = Remote\n\n##\n\n# This adjective is used to label a table column. Cells in this column contain\n# the localized javascript string representation of \"true\" or are left blank.\nabout-webrtc-nominated = Nominated\n\n# This adjective is used to label a table column. Cells in this column contain\n# the localized javascript string representation of \"true\" or are left blank.\n# This represents an attribute of an ICE candidate.\nabout-webrtc-selected = Selected\n\nabout-webrtc-save-page-label = Save Page\nabout-webrtc-debug-mode-msg-label = Debug Mode\nabout-webrtc-debug-mode-off-state-label = Start Debug Mode\nabout-webrtc-debug-mode-on-state-label = Stop Debug Mode\nabout-webrtc-stats-heading = Session Statistics\nabout-webrtc-stats-clear = Clear History\nabout-webrtc-log-heading = Connection Log\nabout-webrtc-log-clear = Clear Log\nabout-webrtc-log-show-msg = show log\n    .title = click to expand this section\nabout-webrtc-log-hide-msg = hide log\n    .title = click to collapse this section\nabout-webrtc-copy-report-button = Copy Report\nabout-webrtc-copy-report-history-button = Copy Report History\n\n## These are used to display a header for a PeerConnection.\n## Variables:\n##  $browser-id (Number) - A numeric id identifying the browser tab for the PeerConnection.\n##  $id (String) - A globally unique identifier for the PeerConnection.\n##  $url (String) - The url of the site which opened the PeerConnection.\n##  $now (Date) - The JavaScript timestamp at the time the report was generated.\n\nabout-webrtc-connection-open = [ { $browser-id } | { $id } ] { $url } { $now }\nabout-webrtc-connection-closed = [ { $browser-id } | { $id } ] { $url } (closed) { $now }\n\n##\n\nabout-webrtc-local-candidate = Local Candidate\nabout-webrtc-remote-candidate = Remote Candidate\nabout-webrtc-raw-candidates-heading = All Raw Candidates\nabout-webrtc-raw-local-candidate = Raw Local Candidate\nabout-webrtc-raw-remote-candidate = Raw Remote Candidate\nabout-webrtc-raw-cand-show-msg = show raw candidates\n    .title = click to expand this section\nabout-webrtc-raw-cand-hide-msg = hide raw candidates\n    .title = click to collapse this section\nabout-webrtc-priority = Priority\nabout-webrtc-fold-show-msg = show details\n    .title = click to expand this section\nabout-webrtc-fold-hide-msg = hide details\n    .title = click to collapse this section\nabout-webrtc-dropped-frames-label = Dropped frames:\nabout-webrtc-discarded-packets-label = Discarded packets:\nabout-webrtc-decoder-label = Decoder\nabout-webrtc-encoder-label = Encoder\nabout-webrtc-show-tab-label = Show tab\nabout-webrtc-current-framerate-label = Framerate\nabout-webrtc-width-px = Width (px)\nabout-webrtc-height-px = Height (px)\nabout-webrtc-consecutive-frames = Consecutive Frames\nabout-webrtc-time-elapsed = Time Elapsed (s)\nabout-webrtc-estimated-framerate = Estimated Framerate\nabout-webrtc-rotation-degrees = Rotation (degrees)\nabout-webrtc-first-frame-timestamp = First Frame Reception Timestamp\nabout-webrtc-last-frame-timestamp = Last Frame Reception Timestamp\n\n## SSRCs are identifiers that represent endpoints in an RTP stream\n\n# This is an SSRC on the local side of the connection that is receiving RTP\nabout-webrtc-local-receive-ssrc = Local Receiving SSRC\n# This is an SSRC on the remote side of the connection that is sending RTP\nabout-webrtc-remote-send-ssrc = Remote Sending SSRC\n\n## These are displayed on the button that shows or hides the\n## PeerConnection configuration disclosure\n\nabout-webrtc-pc-configuration-show-msg = Show Configuration\nabout-webrtc-pc-configuration-hide-msg = Hide Configuration\n\n##\n\n# An option whose value will not be displayed but instead noted as having been\n# provided\nabout-webrtc-configuration-element-provided = Provided\n\n# An option whose value will not be displayed but instead noted as having not\n# been provided\nabout-webrtc-configuration-element-not-provided = Not Provided\n\n# The options set by the user in about:config that could impact a WebRTC call\nabout-webrtc-custom-webrtc-configuration-heading = User Set WebRTC Preferences\n\n# Section header for estimated bandwidths of WebRTC media flows\nabout-webrtc-bandwidth-stats-heading = Estimated Bandwidth\n\n# The ID of the MediaStreamTrack\nabout-webrtc-track-identifier = Track Identifier\n\n# The estimated bandwidth available for sending WebRTC media in bytes per second\nabout-webrtc-send-bandwidth-bytes-sec = Send Bandwidth (bytes/sec)\n\n# The estimated bandwidth available for receiving WebRTC media in bytes per second\nabout-webrtc-receive-bandwidth-bytes-sec = Receive Bandwidth (bytes/sec)\n\n# Maximum number of bytes per second that will be padding zeros at the ends of packets\nabout-webrtc-max-padding-bytes-sec = Maximum Padding (bytes/sec)\n\n# The amount of time inserted between packets to keep them spaced out\nabout-webrtc-pacer-delay-ms = Pacer Delay ms\n\n# The amount of time it takes for a packet to travel from the local machine to the remote machine,\n# and then have a packet return\nabout-webrtc-round-trip-time-ms = RTT ms\n\n# This is a section heading for video frame statistics for a MediaStreamTrack.\n# see https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack.\n# Variables:\n#   $track-identifier (String) - The unique identifier for the MediaStreamTrack.\nabout-webrtc-frame-stats-heading = Video Frame Statistics - MediaStreamTrack ID: { $track-identifier }\n\n## These are paths used for saving the about:webrtc page or log files so\n## they can be attached to bug reports.\n## Variables:\n##  $path (String) - The path to which the file is saved.\n\nabout-webrtc-save-page-msg = page saved to: { $path }\nabout-webrtc-debug-mode-off-state-msg = trace log can be found at: { $path }\nabout-webrtc-debug-mode-on-state-msg = debug mode active, trace log at: { $path }\nabout-webrtc-aec-logging-off-state-msg = captured log files can be found in: { $path }\n\n##\n\n# This is the total number of frames encoded or decoded over an RTP stream.\n# Variables:\n#  $frames (Number) - The number of frames encoded or decoded.\nabout-webrtc-frames =\n  { $frames ->\n      [one] { $frames } frame\n     *[other] { $frames } frames\n  }\n\n# This is the number of audio channels encoded or decoded over an RTP stream.\n# Variables:\n#  $channels (Number) - The number of channels encoded or decoded.\nabout-webrtc-channels =\n  { $channels ->\n      [one] { $channels } channel\n     *[other] { $channels } channels\n  }\n\n# This is the total number of packets received on the PeerConnection.\n# Variables:\n#  $packets (Number) - The number of packets received.\nabout-webrtc-received-label =\n  { $packets ->\n      [one] Received { $packets } packet\n     *[other] Received { $packets } packets\n  }\n\n# This is the total number of packets lost by the PeerConnection.\n# Variables:\n#  $packets (Number) - The number of packets lost.\nabout-webrtc-lost-label =\n  { $packets ->\n      [one] Lost { $packets } packet\n     *[other] Lost { $packets } packets\n  }\n\n# This is the total number of packets sent by the PeerConnection.\n# Variables:\n#  $packets (Number) - The number of packets sent.\nabout-webrtc-sent-label =\n  { $packets ->\n      [one] Sent { $packets } packet\n     *[other] Sent { $packets } packets\n  }\n\n# Jitter is the variance in the arrival time of packets.\n# See: https://w3c.github.io/webrtc-stats/#dom-rtcreceivedrtpstreamstats-jitter\n# Variables:\n#   $jitter (Number) - The jitter.\nabout-webrtc-jitter-label = Jitter { $jitter }\n\n# ICE candidates arriving after the remote answer arrives are considered trickled\n# (an attribute of an ICE candidate). These are highlighted in the ICE stats\n# table with light blue background.\nabout-webrtc-trickle-caption-msg = Trickled candidates (arriving after answer) are highlighted in blue\n\n## \"SDP\" is an abbreviation for Session Description Protocol, an IETF standard.\n## See http://wikipedia.org/wiki/Session_Description_Protocol\n\n# This is used as a header for local SDP.\n# Variables:\n#  $timestamp (Number) - The Unix Epoch time at which the SDP was set.\nabout-webrtc-sdp-set-at-timestamp-local = Set Local SDP at timestamp { NUMBER($timestamp, useGrouping: \"false\") }\n\n# This is used as a header for remote SDP.\n# Variables:\n#  $timestamp (Number) - The Unix Epoch time at which the SDP was set.\nabout-webrtc-sdp-set-at-timestamp-remote = Set Remote SDP at timestamp { NUMBER($timestamp, useGrouping: \"false\") }\n\n# This is used as a header for an SDP section contained in two columns allowing for side-by-side comparisons.\n# Variables:\n#  $timestamp (Number) - The Unix Epoch time at which the SDP was set.\n#  $relative-timestamp (Number) - The timestamp relative to the timestamp of the earliest received SDP.\nabout-webrtc-sdp-set-timestamp = Timestamp { NUMBER($timestamp, useGrouping: \"false\") } (+ { $relative-timestamp } ms)\n\n## These are displayed on the button that shows or hides the SDP information disclosure\n\nabout-webrtc-show-msg-sdp = Show SDP\nabout-webrtc-hide-msg-sdp = Hide SDP\n\n## These are displayed on the button that shows or hides the Media Context information disclosure.\n## The Media Context is the set of preferences and detected capabilities that informs\n## the negotiated CODEC settings.\n\nabout-webrtc-media-context-show-msg = Show Media Context\nabout-webrtc-media-context-hide-msg = Hide Media Context\nabout-webrtc-media-context-heading = Media Context\n\n##\n";

/***/ })

}]);