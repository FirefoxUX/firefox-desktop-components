"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[9055],{

/***/ 69055:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\n## Error page titles\n\nneterror-page-title = Problem loading page\ncerterror-page-title = Warning: Potential Security Risk Ahead\ncerterror-sts-page-title = Did Not Connect: Potential Security Issue\nneterror-blocked-by-policy-page-title = Blocked Page\nneterror-captive-portal-page-title = Log in to network\nneterror-dns-not-found-title = Server Not Found\nneterror-malformed-uri-page-title = Invalid URL\ngeneral-body-title = Be careful. Something doesn’t look right.\n\n## Error page actions\n\nneterror-advanced-button = Advanced…\nneterror-copy-to-clipboard-button = Copy text to clipboard\nneterror-learn-more-link = Learn more…\nneterror-open-portal-login-page-button = Open Network Login Page\nneterror-override-exception-button = Accept the Risk and Continue\nneterror-pref-reset-button = Restore default settings\nneterror-return-to-previous-page-button = Go Back\nneterror-return-to-previous-page-recommended-button = Go Back (Recommended)\nneterror-try-again-button = Try Again\nneterror-add-exception-button = Always continue for this site\nneterror-settings-button = Change DNS settings\nneterror-view-certificate-link = View Certificate\nneterror-trr-continue-this-time = Continue this time\nneterror-disable-native-feedback-warning = Always continue\n\n##\n\nneterror-pref-reset = It looks like your network security settings might be causing this. Do you want the default settings to be restored?\n\n## Specific error messages\n\nneterror-generic-error = { -brand-short-name } can’t load this page for some reason.\n\nneterror-load-error-try-again = The site could be temporarily unavailable or too busy. Try again in a few moments.\nneterror-load-error-connection = If you are unable to load any pages, check your computer’s network connection.\nneterror-load-error-firewall = If your computer or network is protected by a firewall or proxy, make sure that { -brand-short-name } is permitted to access the web.\n# This warning is only shown on macOS Sequoia and later (see bug 1929377)\nneterror-load-osx-permission = If you are trying to load a local network page, please check that { -brand-short-name } has been granted Local Network permissions in the macOS Privacy & Security settings.\n\nneterror-captive-portal = You must log in to this network before you can access the internet.\n\n# Variables:\n# $hostAndPath (String) - a suggested site (e.g. \"www.example.com\") that the user may have meant instead.\nneterror-dns-not-found-with-suggestion = Did you mean to go to <a data-l10n-name=\"website\">{ $hostAndPath }</a>?\nneterror-dns-not-found-hint-header = <strong>If you entered the right address, you can:</strong>\nneterror-dns-not-found-hint-try-again = Try again later\nneterror-dns-not-found-hint-check-network = Check your network connection\nneterror-dns-not-found-hint-firewall = Check that { -brand-short-name } has permission to access the web (you might be connected but behind a firewall)\n\n## TRR-only specific messages\n## Variables:\n##   $hostname (String) - Hostname of the website to which the user was trying to connect.\n##   $trrDomain (String) - Hostname of the DNS over HTTPS server that is currently in use.\n\nneterror-dns-not-found-trr-only-reason2 = { -brand-short-name } can’t protect your request for this site’s address through our secure DNS provider. Here’s why:\nneterror-dns-not-found-trr-third-party-warning2 = You can continue with your default DNS resolver. However, a third-party might be able to see what websites you visit.\n\nneterror-dns-not-found-trr-only-could-not-connect = { -brand-short-name } wasn’t able to connect to { $trrDomain }.\nneterror-dns-not-found-trr-only-timeout = The connection to { $trrDomain } took longer than expected.\nneterror-dns-not-found-trr-offline = You are not connected to the internet.\nneterror-dns-not-found-trr-unknown-host2 = This website wasn’t found by { $trrDomain }.\nneterror-dns-not-found-trr-server-problem = There was a problem with { $trrDomain }.\nneterror-dns-not-found-bad-trr-url = Invalid URL.\nneterror-dns-not-found-system-sleep = System is in sleep mode.\nneterror-dns-not-found-trr-unknown-problem = Unexpected problem.\n\n## Native fallback specific messages\n## Variables:\n##   $trrDomain (String) - Hostname of the DNS over HTTPS server that is currently in use.\n\nneterror-dns-not-found-native-fallback-reason2 = { -brand-short-name } can’t protect your request for this site’s address through our secure DNS provider. Here’s why:\nneterror-dns-not-found-native-fallback-heuristic = DNS over HTTPS has been disabled on your network.\nneterror-dns-not-found-native-fallback-not-confirmed2 = { -brand-short-name } wasn’t able to connect to { $trrDomain }.\n\n##\n\nneterror-file-not-found-filename = Check the file name for capitalization or other typing errors.\nneterror-file-not-found-moved = Check to see if the file was moved, renamed or deleted.\n\nneterror-access-denied = It may have been removed, moved, or file permissions may be preventing access.\n\nneterror-unknown-protocol = You might need to install other software to open this address.\n\nneterror-redirect-loop = This problem can sometimes be caused by disabling or refusing to accept cookies.\n\nneterror-unknown-socket-type-psm-installed = Check to make sure your system has the Personal Security Manager installed.\nneterror-unknown-socket-type-server-config = This might be due to a non-standard configuration on the server.\n\nneterror-not-cached-intro = The requested document is not available in { -brand-short-name }’s cache.\nneterror-not-cached-sensitive = As a security precaution, { -brand-short-name } does not automatically re-request sensitive documents.\nneterror-not-cached-try-again = Click Try Again to re-request the document from the website.\n\nneterror-net-offline = Press “Try Again” to switch to online mode and reload the page.\n\nneterror-proxy-resolve-failure-settings = Check the proxy settings to make sure that they are correct.\nneterror-proxy-resolve-failure-connection = Check to make sure your computer has a working network connection.\nneterror-proxy-resolve-failure-firewall = If your computer or network is protected by a firewall or proxy, make sure that { -brand-short-name } is permitted to access the web.\n\nneterror-proxy-connect-failure-settings = Check the proxy settings to make sure that they are correct.\nneterror-proxy-connect-failure-contact-admin = Contact your network administrator to make sure the proxy server is working.\n\nneterror-content-encoding-error = Please contact the website owners to inform them of this problem.\n\nneterror-unsafe-content-type = Please contact the website owners to inform them of this problem.\n\nneterror-nss-failure-not-verified = The page you are trying to view cannot be shown because the authenticity of the received data could not be verified.\nneterror-nss-failure-contact-website = Please contact the website owners to inform them of this problem.\n\n# Variables:\n# $hostname (String) - Hostname of the website to which the user was trying to connect.\ncerterror-intro = { -brand-short-name } detected a potential security threat and did not continue to <b>{ $hostname }</b>. If you visit this site, attackers could try to steal information like your passwords, emails, or credit card details.\n# Variables:\n# $hostname (String) - Hostname of the website to which the user was trying to connect.\ncerterror-sts-intro = { -brand-short-name } detected a potential security threat and did not continue to <b>{ $hostname }</b> because this website requires a secure connection.\n# Variables:\n# $hostname (String) - Hostname of the website to which the user was trying to connect.\ncerterror-expired-cert-intro = { -brand-short-name } detected an issue and did not continue to <b>{ $hostname }</b>. The website is either misconfigured or your computer clock is set to the wrong time.\n# Variables:\n# $hostname (String) - Hostname of the website to which the user was trying to connect.\n# $mitm (String) - The name of the software intercepting communications between you and the website (or “man in the middle”)\ncerterror-mitm = <b>{ $hostname }</b> is most likely a safe site, but a secure connection could not be established. This issue is caused by <b>{ $mitm }</b>, which is either software on your computer or your network.\n\nneterror-corrupted-content-intro = The page you are trying to view cannot be shown because an error in the data transmission was detected.\nneterror-corrupted-content-contact-website = Please contact the website owners to inform them of this problem.\n\n# Do not translate \"SSL_ERROR_UNSUPPORTED_VERSION\".\nneterror-sslv3-used = Advanced info: SSL_ERROR_UNSUPPORTED_VERSION\n\n# Variables:\n# $hostname (String) - Hostname of the website to which the user was trying to connect.\nneterror-inadequate-security-intro = <b>{ $hostname }</b> uses security technology that is outdated and vulnerable to attack. An attacker could easily reveal information which you thought to be safe. The website administrator will need to fix the server first before you can visit the site.\n# Do not translate \"NS_ERROR_NET_INADEQUATE_SECURITY\".\nneterror-inadequate-security-code = Error code: NS_ERROR_NET_INADEQUATE_SECURITY\n\n# Variables:\n# $hostname (String) - Hostname of the website to which the user was trying to connect.\n# $now (Date) - The current datetime, to be formatted as a date\nneterror-clock-skew-error = Your computer thinks it is { DATETIME($now, dateStyle: \"medium\") }, which prevents { -brand-short-name } from connecting securely. To visit <b>{ $hostname }</b>, update your computer clock in your system settings to the current date, time, and time zone, and then refresh <b>{ $hostname }</b>.\n\nneterror-network-protocol-error-intro = The page you are trying to view cannot be shown because an error in the network protocol was detected.\nneterror-network-protocol-error-contact-website = Please contact the website owners to inform them of this problem.\n\ncerterror-expired-cert-second-para = It’s likely the website’s certificate is expired, which prevents { -brand-short-name } from connecting securely. If you visit this site, attackers could try to steal information like your passwords, emails, or credit card details.\ncerterror-expired-cert-sts-second-para = It’s likely the website’s certificate is expired, which prevents { -brand-short-name } from connecting securely.\n\ncerterror-what-can-you-do-about-it-title = What can you do about it?\n\ncerterror-unknown-issuer-what-can-you-do-about-it-website = The issue is most likely with the website, and there is nothing you can do to resolve it.\ncerterror-unknown-issuer-what-can-you-do-about-it-contact-admin = If you are on a corporate network or using antivirus software, you can reach out to the support teams for assistance. You can also notify the website’s administrator about the problem.\n\n# Variables:\n# $hostname (String) - Hostname of the website to which the user was trying to connect.\n# $now (Date) - The current datetime, to be formatted as a date\ncerterror-expired-cert-what-can-you-do-about-it-clock = Your computer clock is set to { DATETIME($now, dateStyle: \"medium\") }. Make sure your computer is set to the correct date, time, and time zone in your system settings, and then refresh <b>{ $hostname }</b>.\ncerterror-expired-cert-what-can-you-do-about-it-contact-website = If your clock is already set to the right time, the website is likely misconfigured, and there is nothing you can do to resolve the issue. You can notify the website’s administrator about the problem.\n\ncerterror-bad-cert-domain-what-can-you-do-about-it = The issue is most likely with the website, and there is nothing you can do to resolve it. You can notify the website’s administrator about the problem.\n\ncerterror-mitm-what-can-you-do-about-it-antivirus = If your antivirus software includes a feature that scans encrypted connections (often called “web scanning” or “https scanning”), you can disable that feature. If that doesn’t work, you can remove and reinstall the antivirus software.\ncerterror-mitm-what-can-you-do-about-it-corporate = If you are on a corporate network, you can contact your IT department.\n# Variables:\n# $mitm (String) - The name of the software intercepting communications between you and the website (or “man in the middle”)\ncerterror-mitm-what-can-you-do-about-it-attack = If you are not familiar with <b>{ $mitm }</b>, then this could be an attack and you should not continue to the site.\n\n# Variables:\n# $mitm (String) - The name of the software intercepting communications between you and the website (or “man in the middle”)\ncerterror-mitm-what-can-you-do-about-it-attack-sts = If you are not familiar with <b>{ $mitm }</b>, then this could be an attack, and there is nothing you can do to access the site.\n\n# Variables:\n# $hostname (String) - Hostname of the website to which the user was trying to connect.\ncerterror-what-should-i-do-bad-sts-cert-explanation = <b>{ $hostname }</b> has a security policy called HTTP Strict Transport Security (HSTS), which means that { -brand-short-name } can only connect to it securely. You can’t add an exception to visit this site.\n\ncert-error-trust-certificate-transparency-what-can-you-do-about-it = Probably nothing, since it’s likely there’s a problem with the site itself.\n\ncerterror-blocked-by-corp-headers-description = Sometimes websites set up protections for themselves and people like you from unwanted interactions with other sites.\ncerterror-coop-learn-more = Learn more about Cross Origin Opener Policies (COOP)\ncerterror-coep-learn-more = Learn more about Cross Origin Embedder Policies (COEP)\n\n# Variables:\n#   $responsestatus (string) - HTTP response status code (e.g., 500).\n#   $responsestatustext (string) - HTTP response status text (e.g., \"Internal Server Error\").\nneterror-response-status-code = Error code: { $responsestatus } { $responsestatustext }\n";

/***/ })

}]);