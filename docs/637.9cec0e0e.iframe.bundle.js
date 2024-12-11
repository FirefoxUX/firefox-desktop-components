"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[637],{

/***/ 60637:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\n## Main toolbar buttons (tooltips and alt text for images)\n\npdfjs-previous-button =\n    .title = Previous Page\npdfjs-previous-button-label = Previous\npdfjs-next-button =\n    .title = Next Page\npdfjs-next-button-label = Next\n\n# .title: Tooltip for the pageNumber input.\npdfjs-page-input =\n    .title = Page\n\n# Variables:\n#   $pagesCount (Number) - the total number of pages in the document\n# This string follows an input field with the number of the page currently displayed.\npdfjs-of-pages = of { $pagesCount }\n\n# Variables:\n#   $pageNumber (Number) - the currently visible page\n#   $pagesCount (Number) - the total number of pages in the document\npdfjs-page-of-pages = ({ $pageNumber } of { $pagesCount })\n\npdfjs-zoom-out-button =\n    .title = Zoom Out\npdfjs-zoom-out-button-label = Zoom Out\npdfjs-zoom-in-button =\n    .title = Zoom In\npdfjs-zoom-in-button-label = Zoom In\npdfjs-zoom-select =\n    .title = Zoom\npdfjs-presentation-mode-button =\n    .title = Switch to Presentation Mode\npdfjs-presentation-mode-button-label = Presentation Mode\npdfjs-open-file-button =\n    .title = Open File\npdfjs-open-file-button-label = Open\npdfjs-print-button =\n    .title = Print\npdfjs-print-button-label = Print\npdfjs-save-button =\n    .title = Save\npdfjs-save-button-label = Save\n\n# Used in Firefox for Android as a tooltip for the download button (“download” is a verb).\npdfjs-download-button =\n    .title = Download\n\n# Used in Firefox for Android as a label for the download button (“download” is a verb).\n# Length of the translation matters since we are in a mobile context, with limited screen estate.\npdfjs-download-button-label = Download\n\npdfjs-bookmark-button =\n    .title = Current Page (View URL from Current Page)\npdfjs-bookmark-button-label = Current Page\n\n##  Secondary toolbar and context menu\n\npdfjs-tools-button =\n    .title = Tools\n\npdfjs-tools-button-label = Tools\npdfjs-first-page-button =\n    .title = Go to First Page\npdfjs-first-page-button-label = Go to First Page\npdfjs-last-page-button =\n    .title = Go to Last Page\npdfjs-last-page-button-label = Go to Last Page\npdfjs-page-rotate-cw-button =\n    .title = Rotate Clockwise\npdfjs-page-rotate-cw-button-label = Rotate Clockwise\npdfjs-page-rotate-ccw-button =\n    .title = Rotate Counterclockwise\npdfjs-page-rotate-ccw-button-label = Rotate Counterclockwise\npdfjs-cursor-text-select-tool-button =\n    .title = Enable Text Selection Tool\npdfjs-cursor-text-select-tool-button-label = Text Selection Tool\npdfjs-cursor-hand-tool-button =\n    .title = Enable Hand Tool\npdfjs-cursor-hand-tool-button-label = Hand Tool\npdfjs-scroll-page-button =\n    .title = Use Page Scrolling\npdfjs-scroll-page-button-label = Page Scrolling\npdfjs-scroll-vertical-button =\n    .title = Use Vertical Scrolling\npdfjs-scroll-vertical-button-label = Vertical Scrolling\npdfjs-scroll-horizontal-button =\n    .title = Use Horizontal Scrolling\npdfjs-scroll-horizontal-button-label = Horizontal Scrolling\npdfjs-scroll-wrapped-button =\n    .title = Use Wrapped Scrolling\npdfjs-scroll-wrapped-button-label = Wrapped Scrolling\npdfjs-spread-none-button =\n    .title = Do not join page spreads\npdfjs-spread-none-button-label = No Spreads\npdfjs-spread-odd-button =\n    .title = Join page spreads starting with odd-numbered pages\npdfjs-spread-odd-button-label = Odd Spreads\npdfjs-spread-even-button =\n    .title = Join page spreads starting with even-numbered pages\npdfjs-spread-even-button-label = Even Spreads\n\n## Document properties dialog\n\npdfjs-document-properties-button =\n    .title = Document Properties…\npdfjs-document-properties-button-label = Document Properties…\npdfjs-document-properties-file-name = File name:\npdfjs-document-properties-file-size = File size:\n\n# Variables:\n#   $kb (Number) - the PDF file size in kilobytes\n#   $b (Number) - the PDF file size in bytes\npdfjs-document-properties-size-kb = { NUMBER($kb, maximumSignificantDigits: 3) } KB ({ $b } bytes)\n\n# Variables:\n#   $mb (Number) - the PDF file size in megabytes\n#   $b (Number) - the PDF file size in bytes\npdfjs-document-properties-size-mb = { NUMBER($mb, maximumSignificantDigits: 3) } MB ({ $b } bytes)\n\npdfjs-document-properties-title = Title:\npdfjs-document-properties-author = Author:\npdfjs-document-properties-subject = Subject:\npdfjs-document-properties-keywords = Keywords:\npdfjs-document-properties-creation-date = Creation Date:\npdfjs-document-properties-modification-date = Modification Date:\n\n# Variables:\n#   $dateObj (Date) - the creation/modification date and time of the PDF file\npdfjs-document-properties-date-time-string = { DATETIME($dateObj, dateStyle: \"short\", timeStyle: \"medium\") }\n\npdfjs-document-properties-creator = Creator:\npdfjs-document-properties-producer = PDF Producer:\npdfjs-document-properties-version = PDF Version:\npdfjs-document-properties-page-count = Page Count:\npdfjs-document-properties-page-size = Page Size:\npdfjs-document-properties-page-size-unit-inches = in\npdfjs-document-properties-page-size-unit-millimeters = mm\npdfjs-document-properties-page-size-orientation-portrait = portrait\npdfjs-document-properties-page-size-orientation-landscape = landscape\npdfjs-document-properties-page-size-name-a-three = A3\npdfjs-document-properties-page-size-name-a-four = A4\npdfjs-document-properties-page-size-name-letter = Letter\npdfjs-document-properties-page-size-name-legal = Legal\n\n## Variables:\n##   $width (Number) - the width of the (current) page\n##   $height (Number) - the height of the (current) page\n##   $unit (String) - the unit of measurement of the (current) page\n##   $name (String) - the name of the (current) page\n##   $orientation (String) - the orientation of the (current) page\n\npdfjs-document-properties-page-size-dimension-string = { $width } × { $height } { $unit } ({ $orientation })\npdfjs-document-properties-page-size-dimension-name-string = { $width } × { $height } { $unit } ({ $name }, { $orientation })\n\n##\n\n# The linearization status of the document; usually called \"Fast Web View\" in\n# English locales of Adobe software.\npdfjs-document-properties-linearized = Fast Web View:\npdfjs-document-properties-linearized-yes = Yes\npdfjs-document-properties-linearized-no = No\npdfjs-document-properties-close-button = Close\n\n## Print\n\npdfjs-print-progress-message = Preparing document for printing…\n\n# Variables:\n#   $progress (Number) - percent value\npdfjs-print-progress-percent = { $progress }%\n\npdfjs-print-progress-close-button = Cancel\npdfjs-printing-not-supported = Warning: Printing is not fully supported by this browser.\npdfjs-printing-not-ready = Warning: The PDF is not fully loaded for printing.\n\n## Tooltips and alt text for side panel toolbar buttons\n\npdfjs-toggle-sidebar-button =\n    .title = Toggle Sidebar\npdfjs-toggle-sidebar-notification-button =\n    .title = Toggle Sidebar (document contains outline/attachments/layers)\npdfjs-toggle-sidebar-button-label = Toggle Sidebar\npdfjs-document-outline-button =\n    .title = Show Document Outline (double-click to expand/collapse all items)\npdfjs-document-outline-button-label = Document Outline\npdfjs-attachments-button =\n    .title = Show Attachments\npdfjs-attachments-button-label = Attachments\npdfjs-layers-button =\n    .title = Show Layers (double-click to reset all layers to the default state)\npdfjs-layers-button-label = Layers\npdfjs-thumbs-button =\n    .title = Show Thumbnails\npdfjs-thumbs-button-label = Thumbnails\npdfjs-current-outline-item-button =\n    .title = Find Current Outline Item\npdfjs-current-outline-item-button-label = Current Outline Item\npdfjs-findbar-button =\n    .title = Find in Document\npdfjs-findbar-button-label = Find\npdfjs-additional-layers = Additional Layers\n\n## Thumbnails panel item (tooltip and alt text for images)\n\n# Variables:\n#   $page (Number) - the page number\npdfjs-thumb-page-title =\n    .title = Page { $page }\n\n# Variables:\n#   $page (Number) - the page number\npdfjs-thumb-page-canvas =\n    .aria-label = Thumbnail of Page { $page }\n\n## Find panel button title and messages\n\npdfjs-find-input =\n    .title = Find\n    .placeholder = Find in document…\npdfjs-find-previous-button =\n    .title = Find the previous occurrence of the phrase\npdfjs-find-previous-button-label = Previous\npdfjs-find-next-button =\n    .title = Find the next occurrence of the phrase\npdfjs-find-next-button-label = Next\npdfjs-find-highlight-checkbox = Highlight All\npdfjs-find-match-case-checkbox-label = Match Case\npdfjs-find-match-diacritics-checkbox-label = Match Diacritics\npdfjs-find-entire-word-checkbox-label = Whole Words\npdfjs-find-reached-top = Reached top of document, continued from bottom\npdfjs-find-reached-bottom = Reached end of document, continued from top\n\n# Variables:\n#   $current (Number) - the index of the currently active find result\n#   $total (Number) - the total number of matches in the document\npdfjs-find-match-count =\n    { $total ->\n        [one] { $current } of { $total } match\n       *[other] { $current } of { $total } matches\n    }\n\n# Variables:\n#   $limit (Number) - the maximum number of matches\npdfjs-find-match-count-limit =\n    { $limit ->\n        [one] More than { $limit } match\n       *[other] More than { $limit } matches\n    }\n\npdfjs-find-not-found = Phrase not found\n\n## Predefined zoom values\n\npdfjs-page-scale-width = Page Width\npdfjs-page-scale-fit = Page Fit\npdfjs-page-scale-auto = Automatic Zoom\npdfjs-page-scale-actual = Actual Size\n\n# Variables:\n#   $scale (Number) - percent value for page scale\npdfjs-page-scale-percent = { $scale }%\n\n## PDF page\n\n# Variables:\n#   $page (Number) - the page number\npdfjs-page-landmark =\n    .aria-label = Page { $page }\n\n## Loading indicator messages\n\npdfjs-loading-error = An error occurred while loading the PDF.\npdfjs-invalid-file-error = Invalid or corrupted PDF file.\npdfjs-missing-file-error = Missing PDF file.\npdfjs-unexpected-response-error = Unexpected server response.\npdfjs-rendering-error = An error occurred while rendering the page.\n\n## Annotations\n\n# Variables:\n#   $dateObj (Date) - the modification date and time of the annotation\npdfjs-annotation-date-time-string = { DATETIME($dateObj, dateStyle: \"short\", timeStyle: \"medium\") }\n\n# .alt: This is used as a tooltip.\n# Variables:\n#   $type (String) - an annotation type from a list defined in the PDF spec\n# (32000-1:2008 Table 169 – Annotation types).\n# Some common types are e.g.: \"Check\", \"Text\", \"Comment\", \"Note\"\npdfjs-text-annotation-type =\n    .alt = [{ $type } Annotation]\n\n## Password\n\npdfjs-password-label = Enter the password to open this PDF file.\npdfjs-password-invalid = Invalid password. Please try again.\npdfjs-password-ok-button = OK\npdfjs-password-cancel-button = Cancel\npdfjs-web-fonts-disabled = Web fonts are disabled: unable to use embedded PDF fonts.\n\n## Editing\n\npdfjs-editor-free-text-button =\n    .title = Text\npdfjs-editor-free-text-button-label = Text\npdfjs-editor-ink-button =\n    .title = Draw\npdfjs-editor-ink-button-label = Draw\npdfjs-editor-stamp-button =\n    .title = Add or edit images\npdfjs-editor-stamp-button-label = Add or edit images\npdfjs-editor-highlight-button =\n    .title = Highlight\npdfjs-editor-highlight-button-label = Highlight\npdfjs-highlight-floating-button1 =\n    .title = Highlight\n    .aria-label = Highlight\npdfjs-highlight-floating-button-label = Highlight\n\n## Remove button for the various kind of editor.\n\npdfjs-editor-remove-ink-button =\n    .title = Remove drawing\npdfjs-editor-remove-freetext-button =\n    .title = Remove text\npdfjs-editor-remove-stamp-button =\n    .title = Remove image\npdfjs-editor-remove-highlight-button =\n    .title = Remove highlight\n\n##\n\n# Editor Parameters\npdfjs-editor-free-text-color-input = Color\npdfjs-editor-free-text-size-input = Size\npdfjs-editor-ink-color-input = Color\npdfjs-editor-ink-thickness-input = Thickness\npdfjs-editor-ink-opacity-input = Opacity\npdfjs-editor-stamp-add-image-button =\n    .title = Add image\npdfjs-editor-stamp-add-image-button-label = Add image\n# This refers to the thickness of the line used for free highlighting (not bound to text)\npdfjs-editor-free-highlight-thickness-input = Thickness\npdfjs-editor-free-highlight-thickness-title =\n    .title = Change thickness when highlighting items other than text\n\n# .default-content is used as a placeholder in an empty text editor.\npdfjs-free-text2 =\n    .aria-label = Text Editor\n    .default-content = Start typing…\npdfjs-ink =\n    .aria-label = Draw Editor\npdfjs-ink-canvas =\n    .aria-label = User-created image\n\n## Alt-text dialog\n\n# Alternative text (alt text) helps when people can't see the image.\npdfjs-editor-alt-text-button =\n    .aria-label = Alt text\npdfjs-editor-alt-text-button-label = Alt text\n\npdfjs-editor-alt-text-edit-button =\n    .aria-label = Edit alt text\npdfjs-editor-alt-text-dialog-label = Choose an option\npdfjs-editor-alt-text-dialog-description = Alt text (alternative text) helps when people can’t see the image or when it doesn’t load.\npdfjs-editor-alt-text-add-description-label = Add a description\npdfjs-editor-alt-text-add-description-description = Aim for 1-2 sentences that describe the subject, setting, or actions.\npdfjs-editor-alt-text-mark-decorative-label = Mark as decorative\npdfjs-editor-alt-text-mark-decorative-description = This is used for ornamental images, like borders or watermarks.\npdfjs-editor-alt-text-cancel-button = Cancel\npdfjs-editor-alt-text-save-button = Save\npdfjs-editor-alt-text-decorative-tooltip = Marked as decorative\n\n# .placeholder: This is a placeholder for the alt text input area\npdfjs-editor-alt-text-textarea =\n    .placeholder = For example, “A young man sits down at a table to eat a meal”\n\n## Editor resizers\n## This is used in an aria label to help to understand the role of the resizer.\n\npdfjs-editor-resizer-top-left =\n    .aria-label = Top left corner — resize\npdfjs-editor-resizer-top-middle =\n    .aria-label = Top middle — resize\npdfjs-editor-resizer-top-right =\n    .aria-label = Top right corner — resize\npdfjs-editor-resizer-middle-right =\n    .aria-label = Middle right — resize\npdfjs-editor-resizer-bottom-right =\n    .aria-label = Bottom right corner — resize\npdfjs-editor-resizer-bottom-middle =\n    .aria-label = Bottom middle — resize\npdfjs-editor-resizer-bottom-left =\n    .aria-label = Bottom left corner — resize\npdfjs-editor-resizer-middle-left =\n    .aria-label = Middle left — resize\n\n## Color picker\n\n# This means \"Color used to highlight text\"\npdfjs-editor-highlight-colorpicker-label = Highlight color\n\npdfjs-editor-colorpicker-button =\n    .title = Change color\npdfjs-editor-colorpicker-dropdown =\n    .aria-label = Color choices\npdfjs-editor-colorpicker-yellow =\n    .title = Yellow\npdfjs-editor-colorpicker-green =\n    .title = Green\npdfjs-editor-colorpicker-blue =\n    .title = Blue\npdfjs-editor-colorpicker-pink =\n    .title = Pink\npdfjs-editor-colorpicker-red =\n    .title = Red\n\n## Show all highlights\n## This is a toggle button to show/hide all the highlights.\n\npdfjs-editor-highlight-show-all-button-label = Show all\npdfjs-editor-highlight-show-all-button =\n    .title = Show all\n\n## New alt-text dialog\n## Group note for entire feature: Alternative text (alt text) helps when people can't see the image. This feature includes a tool to create alt text automatically using an AI model that works locally on the user's device to preserve privacy.\n\n# Modal header positioned above a text box where users can edit the alt text.\npdfjs-editor-new-alt-text-dialog-edit-label = Edit alt text (image description)\n\n# Modal header positioned above a text box where users can add the alt text.\npdfjs-editor-new-alt-text-dialog-add-label = Add alt text (image description)\n\npdfjs-editor-new-alt-text-textarea =\n    .placeholder = Write your description here…\n\n# This text refers to the alt text box above this description. It offers a definition of alt text.\npdfjs-editor-new-alt-text-description = Short description for people who can’t see the image or when the image doesn’t load.\n\n# This is a required legal disclaimer that refers to the automatically created text inside the alt text box above this text. It disappears if the text is edited by a human.\npdfjs-editor-new-alt-text-disclaimer1 = This alt text was created automatically and may be inaccurate.\npdfjs-editor-new-alt-text-disclaimer-learn-more-url = Learn more\n\npdfjs-editor-new-alt-text-create-automatically-button-label = Create alt text automatically\npdfjs-editor-new-alt-text-not-now-button = Not now\npdfjs-editor-new-alt-text-error-title = Couldn’t create alt text automatically\npdfjs-editor-new-alt-text-error-description = Please write your own alt text or try again later.\npdfjs-editor-new-alt-text-error-close-button = Close\n\n# Variables:\n#   $totalSize (Number) - the total size (in MB) of the AI model.\n#   $downloadedSize (Number) - the downloaded size (in MB) of the AI model.\n#   $percent (Number) - the percentage of the downloaded size.\npdfjs-editor-new-alt-text-ai-model-downloading-progress = Downloading alt text AI model ({ $downloadedSize } of { $totalSize } MB)\n    .aria-valuetext = Downloading alt text AI model ({ $downloadedSize } of { $totalSize } MB)\n\n# This is a button that users can click to edit the alt text they have already added.\npdfjs-editor-new-alt-text-added-button =\n    .aria-label = Alt text added\npdfjs-editor-new-alt-text-added-button-label = Alt text added\n\n# This is a button that users can click to open the alt text editor and add alt text when it is not present.\npdfjs-editor-new-alt-text-missing-button =\n    .aria-label = Missing alt text\npdfjs-editor-new-alt-text-missing-button-label = Missing alt text\n\n# This is a button that opens up the alt text modal where users should review the alt text that was automatically generated.\npdfjs-editor-new-alt-text-to-review-button =\n    .aria-label = Review alt text\npdfjs-editor-new-alt-text-to-review-button-label = Review alt text\n\n# \"Created automatically\" is a prefix that will be added to the beginning of any alt text that has been automatically generated. After the colon, the user will see/hear the actual alt text description. If the alt text has been edited by a human, this prefix will not appear.\n# Variables:\n#   $generatedAltText (String) - the generated alt-text.\npdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer = Created automatically: { $generatedAltText }\n\n## Image alt-text settings\n\npdfjs-image-alt-text-settings-button =\n    .title = Image alt text settings\npdfjs-image-alt-text-settings-button-label = Image alt text settings\n\npdfjs-editor-alt-text-settings-dialog-label = Image alt text settings\npdfjs-editor-alt-text-settings-automatic-title = Automatic alt text\npdfjs-editor-alt-text-settings-create-model-button-label = Create alt text automatically\npdfjs-editor-alt-text-settings-create-model-description = Suggests descriptions to help people who can’t see the image or when the image doesn’t load.\n\n# Variables:\n#   $totalSize (Number) - the total size (in MB) of the AI model.\npdfjs-editor-alt-text-settings-download-model-label = Alt text AI model ({ $totalSize } MB)\n\npdfjs-editor-alt-text-settings-ai-model-description = Runs locally on your device so your data stays private. Required for automatic alt text.\npdfjs-editor-alt-text-settings-delete-model-button = Delete\npdfjs-editor-alt-text-settings-download-model-button = Download\npdfjs-editor-alt-text-settings-downloading-model-button = Downloading…\n\npdfjs-editor-alt-text-settings-editor-title = Alt text editor\npdfjs-editor-alt-text-settings-show-dialog-button-label = Show alt text editor right away when adding an image\npdfjs-editor-alt-text-settings-show-dialog-description = Helps you make sure all your images have alt text.\npdfjs-editor-alt-text-settings-close-button = Close\n\n## \"Annotations removed\" bar\n\npdfjs-editor-undo-bar-message-highlight = Highlight removed\npdfjs-editor-undo-bar-message-freetext = Text removed\npdfjs-editor-undo-bar-message-ink = Drawing removed\npdfjs-editor-undo-bar-message-stamp = Image removed\n# Variables:\n#   $count (Number) - the number of removed annotations.\npdfjs-editor-undo-bar-message-multiple =\n    { $count ->\n        [one] { $count } annotation removed\n       *[other] { $count } annotations removed\n    }\n\npdfjs-editor-undo-bar-undo-button =\n    .title = Undo\npdfjs-editor-undo-bar-undo-button-label = Undo\npdfjs-editor-undo-bar-close-button =\n    .title = Close\npdfjs-editor-undo-bar-close-button-label = Close\n";

/***/ })

}]);