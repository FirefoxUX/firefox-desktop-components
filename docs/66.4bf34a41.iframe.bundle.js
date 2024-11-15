"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[66],{

/***/ 40066:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\n### Firefox Home / New Tab strings for about:home / about:newtab.\n\nnewtab-page-title = New Tab\nnewtab-settings-button =\n    .title = Customize your New Tab page\nnewtab-personalize-settings-icon-label =\n    .title = Personalize New Tab\n    .aria-label = Settings\nnewtab-settings-dialog-label =\n    .aria-label = Settings\nnewtab-logo-and-wordmark =\n    .aria-label = { -brand-full-name }\n\n## Search box component.\n\n# \"Search\" is a verb/action\nnewtab-search-box-search-button =\n    .title = Search\n    .aria-label = Search\n\n# Variables:\n#   $engine (string) - The name of the user's default search engine\nnewtab-search-box-handoff-text = Search with { $engine } or enter address\nnewtab-search-box-handoff-text-no-engine = Search or enter address\n# Variables:\n#   $engine (string) - The name of the user's default search engine\nnewtab-search-box-handoff-input =\n    .placeholder = Search with { $engine } or enter address\n    .title = Search with { $engine } or enter address\n    .aria-label = Search with { $engine } or enter address\nnewtab-search-box-handoff-input-no-engine =\n    .placeholder = Search or enter address\n    .title = Search or enter address\n    .aria-label = Search or enter address\n\nnewtab-search-box-text = Search the web\nnewtab-search-box-input =\n    .placeholder = Search the web\n    .aria-label = Search the web\n\n## Top Sites - General form dialog.\n\nnewtab-topsites-add-search-engine-header = Add Search Engine\nnewtab-topsites-add-shortcut-header = New Shortcut\nnewtab-topsites-edit-topsites-header = Edit Top Site\nnewtab-topsites-edit-shortcut-header = Edit Shortcut\nnewtab-topsites-add-shortcut-label = Add Shortcut\nnewtab-topsites-title-label = Title\nnewtab-topsites-title-input =\n    .placeholder = Enter a title\n\nnewtab-topsites-url-label = URL\nnewtab-topsites-url-input =\n    .placeholder = Type or paste a URL\nnewtab-topsites-url-validation = Valid URL required\n\nnewtab-topsites-image-url-label = Custom Image URL\nnewtab-topsites-use-image-link = Use a custom image…\nnewtab-topsites-image-validation = Image failed to load. Try a different URL.\n\n## Top Sites - General form dialog buttons. These are verbs/actions.\n\nnewtab-topsites-cancel-button = Cancel\nnewtab-topsites-delete-history-button = Delete from History\nnewtab-topsites-save-button = Save\nnewtab-topsites-preview-button = Preview\nnewtab-topsites-add-button = Add\n\n## Top Sites - Delete history confirmation dialog.\n\nnewtab-confirm-delete-history-p1 = Are you sure you want to delete every instance of this page from your history?\n# \"This action\" refers to deleting a page from history.\nnewtab-confirm-delete-history-p2 = This action cannot be undone.\n\n## Top Sites - Sponsored label\n\nnewtab-topsite-sponsored = Sponsored\n\n## Context Menu - Action Tooltips.\n\n# General tooltip for context menus.\nnewtab-menu-section-tooltip =\n    .title = Open menu\n    .aria-label = Open menu\n\n# Tooltip for dismiss button\nnewtab-dismiss-button-tooltip =\n    .title = Remove\n    .aria-label = Remove\n\n# This tooltip is for the context menu of Pocket cards or Topsites\n# Variables:\n#   $title (string) - The label or hostname of the site. This is for screen readers when the context menu button is focused/active.\nnewtab-menu-content-tooltip =\n    .title = Open menu\n    .aria-label = Open context menu for { $title }\n# Tooltip on an empty topsite box to open the New Top Site dialog.\nnewtab-menu-topsites-placeholder-tooltip =\n    .title = Edit this site\n    .aria-label = Edit this site\n\n## Context Menu: These strings are displayed in a context menu and are meant as a call to action for a given page.\n\nnewtab-menu-edit-topsites = Edit\nnewtab-menu-open-new-window = Open in a New Window\nnewtab-menu-open-new-private-window = Open in a New Private Window\nnewtab-menu-dismiss = Dismiss\nnewtab-menu-pin = Pin\nnewtab-menu-unpin = Unpin\nnewtab-menu-delete-history = Delete from History\nnewtab-menu-save-to-pocket = Save to { -pocket-brand-name }\nnewtab-menu-delete-pocket = Delete from { -pocket-brand-name }\nnewtab-menu-archive-pocket = Archive in { -pocket-brand-name }\nnewtab-menu-show-privacy-info = Our sponsors & your privacy\nnewtab-menu-about-fakespot = About { -fakespot-brand-name }\n\n## Message displayed in a modal window to explain privacy and provide context for sponsored content.\n\nnewtab-privacy-modal-button-done = Done\nnewtab-privacy-modal-button-manage = Manage sponsored content settings\nnewtab-privacy-modal-header = Your privacy matters.\nnewtab-privacy-modal-paragraph-2 =\n    In addition to dishing up captivating stories, we also show you relevant,\n    highly-vetted content from select sponsors. Rest assured, <strong>your browsing\n    data never leaves your personal copy of { -brand-product-name }</strong> — we don’t see it, and our\n    sponsors don’t either.\nnewtab-privacy-modal-link = Learn how privacy works on the new tab\n\n##\n\n# Bookmark is a noun in this case, \"Remove bookmark\".\nnewtab-menu-remove-bookmark = Remove Bookmark\n# Bookmark is a verb here.\nnewtab-menu-bookmark = Bookmark\n\n## Context Menu - Downloaded Menu. \"Download\" in these cases is not a verb,\n## it is a noun. As in, \"Copy the link that belongs to this downloaded item\".\n\nnewtab-menu-copy-download-link = Copy Download Link\nnewtab-menu-go-to-download-page = Go to Download Page\nnewtab-menu-remove-download = Remove from History\n\n## Context Menu - Download Menu: These are platform specific strings found in the context menu of an item that has\n## been downloaded. The intention behind \"this action\" is that it will show where the downloaded file exists on the file\n## system for each operating system.\n\nnewtab-menu-show-file =\n    { PLATFORM() ->\n        [macos] Show in Finder\n       *[other] Open Containing Folder\n    }\nnewtab-menu-open-file = Open File\n\n## Card Labels: These labels are associated to pages to give\n## context on how the element is related to the user, e.g. type indicates that\n## the page is bookmarked, or is currently open on another device.\n\nnewtab-label-visited = Visited\nnewtab-label-bookmarked = Bookmarked\nnewtab-label-removed-bookmark = Bookmark removed\nnewtab-label-recommended = Trending\nnewtab-label-saved = Saved to { -pocket-brand-name }\nnewtab-label-download = Downloaded\n\n# This string is used in the story cards to indicate sponsored content\n# Variables:\n#   $sponsorOrSource (string) - The name of a company or their domain\nnewtab-label-sponsored = { $sponsorOrSource } · Sponsored\n\n# This string is used at the bottom of story cards to indicate sponsored content\n# Variables:\n#   $sponsor (string) - The name of a sponsor\nnewtab-label-sponsored-by = Sponsored by { $sponsor }\n\n# This string is used under the image of story cards to indicate source and time to read\n# Variables:\n#   $source (string) - The name of a company or their domain\n#   $timeToRead (number) - The estimated number of minutes to read this story\nnewtab-label-source-read-time = { $source } · { $timeToRead } min\n\n## Section Menu: These strings are displayed in the section context menu and are\n## meant as a call to action for the given section.\n\nnewtab-section-menu-remove-section = Remove Section\nnewtab-section-menu-collapse-section = Collapse Section\nnewtab-section-menu-expand-section = Expand Section\nnewtab-section-menu-manage-section = Manage Section\nnewtab-section-menu-manage-webext = Manage Extension\nnewtab-section-menu-add-topsite = Add Top Site\nnewtab-section-menu-add-search-engine = Add Search Engine\nnewtab-section-menu-move-up = Move Up\nnewtab-section-menu-move-down = Move Down\nnewtab-section-menu-privacy-notice = Privacy Notice\n\n## Section aria-labels\n\nnewtab-section-collapse-section-label =\n    .aria-label = Collapse Section\nnewtab-section-expand-section-label =\n    .aria-label = Expand Section\n\n## Section Headers.\n\nnewtab-section-header-topsites = Top Sites\nnewtab-section-header-recent-activity = Recent activity\nnewtab-section-header-stories = Thought-provoking stories\n# \"picks\" refers to recommended articles\nnewtab-section-header-todays-picks = Today’s picks for you\n\n## Empty Section States: These show when there are no more items in a section. Ex. When there are no more Pocket story recommendations, in the space where there would have been stories, this is shown instead.\n\nnewtab-empty-section-highlights = Start browsing, and we’ll show some of the great articles, videos, and other pages you’ve recently visited or bookmarked here.\n\n# Ex. When there are no more story recommendations, in the space where there would have been stories, this is shown instead.\nnewtab-empty-section-topstories-generic = You’ve caught up. Check back later for more stories. Can’t wait? Select a popular topic to find more great stories from around the web.\n\n## Empty Section (Content Discovery Experience). These show when there are no more stories or when some stories fail to load.\n\nnewtab-discovery-empty-section-topstories-header = You are caught up!\nnewtab-discovery-empty-section-topstories-content = Check back later for more stories.\nnewtab-discovery-empty-section-topstories-try-again-button = Try Again\nnewtab-discovery-empty-section-topstories-loading = Loading…\n# Displays when a layout in a section took too long to fetch articles.\nnewtab-discovery-empty-section-topstories-timed-out = Oops! We almost loaded this section, but not quite.\n\n## Pocket Content Section.\n\n# A save to Pocket button that shows over the card thumbnail on hover.\nnewtab-pocket-image =\n    .aria-label = { -pocket-brand-name }\nnewtab-pocket-save = Save\nnewtab-pocket-saved = Saved\n\n## Thumbs up and down buttons that shows over a newtab stories card thumbnail on hover.\n\n# Clicking the thumbs up button for this story will result in more stories like this one being recommended\nnewtab-pocket-thumbs-up-tooltip =\n    .title = More like this\n# Clicking the thumbs down button for this story informs us that the user does not feel like the story is interesting for them\nnewtab-pocket-thumbs-down-tooltip =\n    .title = Not for me\nnewtab-toast-thumbs-up-or-down = Thanks. Your feedback will help us improve your feed.\nnewtab-toast-dismiss-button =\n    .title = Dismiss\n    .aria-label = Dismiss\n\n## Pocket content onboarding experience dialog and modal for new users seeing the Pocket section for the first time, shown as the first item in the Pocket section.\n\nnewtab-pocket-onboarding-discover = Discover the best of the web\nnewtab-pocket-onboarding-cta = { -pocket-brand-name } explores a diverse range of publications to bring the most informative, inspirational, and trustworthy content right to your { -brand-product-name } browser.\n\n## Error Fallback Content.\n## This message and suggested action link are shown in each section of UI that fails to render.\n\nnewtab-error-fallback-info = Oops, something went wrong loading this content.\nnewtab-error-fallback-refresh-link = Refresh page to try again.\n\n## Customization Menu\n\nnewtab-custom-shortcuts-toggle =\n  .label = Shortcuts\n  .description = Sites you save or visit\n\n# Variables\n#   $num (number) - Number of rows to display\nnewtab-custom-row-selector =\n        { $num ->\n            [one] { $num } row\n           *[other] { $num } rows\n        }\nnewtab-custom-sponsored-sites = Sponsored shortcuts\nnewtab-custom-stories-toggle =\n  .label = Recommended stories\n  .description = Exceptional content curated by the { -brand-product-name } family\nnewtab-custom-pocket-sponsored = Sponsored stories\nnewtab-custom-pocket-show-recent-saves = Show recent saves\nnewtab-custom-recent-toggle =\n  .label = Recent activity\n  .description = A selection of recent sites and content\nnewtab-custom-weather-toggle =\n  .label = Weather\n  .description = Today’s forecast at a glance\nnewtab-custom-close-button = Close\nnewtab-custom-settings = Manage more settings\n\n## New Tab Wallpapers\n\nnewtab-wallpaper-title = Wallpapers\nnewtab-wallpaper-reset = Reset to default\nnewtab-wallpaper-light-red-panda = Red panda\nnewtab-wallpaper-light-mountain = White mountain\nnewtab-wallpaper-light-sky = Sky with purple and pink clouds\nnewtab-wallpaper-light-color = Blue, pink and yellow shapes\nnewtab-wallpaper-light-landscape = Blue mist mountain landscape\nnewtab-wallpaper-light-beach = Beach with palm tree\nnewtab-wallpaper-dark-aurora = Aurora Borealis\nnewtab-wallpaper-dark-color = Red and blue shapes\nnewtab-wallpaper-dark-panda = Red panda hidden in forest\nnewtab-wallpaper-dark-sky = City landscape with a night sky\nnewtab-wallpaper-dark-mountain = Landscape mountain\nnewtab-wallpaper-dark-city = Purple city landscape\nnewtab-wallpaper-dark-fox-anniversary =  A fox on the pavement near a forest\nnewtab-wallpaper-light-fox-anniversary = A fox in a grassy field with a misty mountain landscape\n\n## Solid Colors\n\nnewtab-wallpaper-category-title-colors = Solid colors\nnewtab-wallpaper-blue = Blue\nnewtab-wallpaper-light-blue = Light blue\nnewtab-wallpaper-light-purple = Light purple\nnewtab-wallpaper-light-green = Light green\nnewtab-wallpaper-green = Green\nnewtab-wallpaper-beige = Beige\nnewtab-wallpaper-yellow = Yellow\nnewtab-wallpaper-orange = Orange\nnewtab-wallpaper-pink = Pink\nnewtab-wallpaper-light-pink = Light pink\nnewtab-wallpaper-red = Red\nnewtab-wallpaper-dark-blue = Dark blue\nnewtab-wallpaper-dark-purple = Dark purple\nnewtab-wallpaper-dark-green = Dark green\nnewtab-wallpaper-brown = Brown\n\n## Abstract\n\nnewtab-wallpaper-category-title-abstract = Abstract\nnewtab-wallpaper-abstract-green = Green shapes\nnewtab-wallpaper-abstract-blue = Blue shapes\nnewtab-wallpaper-abstract-purple = Purple shapes\nnewtab-wallpaper-abstract-orange = Orange shapes\nnewtab-wallpaper-gradient-orange = Gradient orange and pink\nnewtab-wallpaper-abstract-blue-purple = Blue and purple shapes\n\n## Photographs\n\nnewtab-wallpaper-category-title-photographs = Photographs\nnewtab-wallpaper-beach-at-sunrise = Beach at sunrise\nnewtab-wallpaper-beach-at-sunset = Beach at sunset\nnewtab-wallpaper-storm-sky = Storm sky\nnewtab-wallpaper-sky-with-pink-clouds = Sky with pink clouds\nnewtab-wallpaper-red-panda-yawns-in-a-tree = Red panda yawns in a tree\nnewtab-wallpaper-white-mountains = White mountains\n\n# Variables\n#   $author_string (String) - The name of the creator of the photo.\n#   $webpage_string (String) - The name of the webpage where the photo is located.\nnewtab-wallpaper-attribution = Photo by <a data-l10n-name=\"name-link\">{ $author_string }</a> on <a data-l10n-name=\"webpage-link\">{ $webpage_string }</a>\nnewtab-wallpaper-feature-highlight-header = Try a splash of color\nnewtab-wallpaper-feature-highlight-content = Give your New Tab a fresh look with wallpapers.\nnewtab-wallpaper-feature-highlight-button = Got it\n# Tooltip for dismiss button\nfeature-highlight-dismiss-button =\n    .title = Dismiss\n    .aria-label = Close popup\nfeature-highlight-wallpaper =\n    .title = { -newtab-wallpaper-feature-highlight-header }\n    .aria-label = { -newtab-wallpaper-feature-highlight-content }\n\n## New Tab Weather\n\n# Variables:\n#   $provider (string) - Service provider for weather data\nnewtab-weather-see-forecast =\n    .title = See forecast in { $provider }\n# Variables:\n#   $provider (string) - Service provider for weather data\nnewtab-weather-sponsored = { $provider } ∙ Sponsored\nnewtab-weather-menu-change-location = Change location\nnewtab-weather-change-location-search-input = Search location\nnewtab-weather-menu-weather-display = Weather display\n# Display options are:\n# - Simple: Displays a current weather condition icon and the current temperature\n# - Detailed: Include simple information plus a short text summary: e.g. \"Mostly cloudy\"\nnewtab-weather-menu-weather-display-option-simple = Simple\nnewtab-weather-menu-change-weather-display-simple = Switch to simple view\nnewtab-weather-menu-weather-display-option-detailed = Detailed\nnewtab-weather-menu-change-weather-display-detailed = Switch to detailed view\nnewtab-weather-menu-temperature-units = Temperature units\nnewtab-weather-menu-temperature-option-fahrenheit = Fahrenheit\nnewtab-weather-menu-temperature-option-celsius = Celsius\nnewtab-weather-menu-change-temperature-units-fahrenheit = Switch to Fahrenheit\nnewtab-weather-menu-change-temperature-units-celsius = Switch to Celsius\nnewtab-weather-menu-hide-weather = Hide weather on New Tab\nnewtab-weather-menu-learn-more = Learn more\n# This message is shown if user is working offline\nnewtab-weather-error-not-available = Weather data is not available right now.\n\n## Topic Labels\n\nnewtab-topic-label-business = Business\nnewtab-topic-label-career = Career\nnewtab-topic-label-education = Education\nnewtab-topic-label-arts = Entertainment\nnewtab-topic-label-food = Food\nnewtab-topic-label-health = Health\nnewtab-topic-label-hobbies = Gaming\n# ”Money” = “Personal Finance”, refers to articles and stories that help readers better manage\n# and understand their personal finances – from saving money to buying a home. See the\n# “Curated by our editors“ section at the top of https://getpocket.com/explore/personal-finance for more context\nnewtab-topic-label-finance = Money\nnewtab-topic-label-society-parenting = Parenting\nnewtab-topic-label-government = Politics\nnewtab-topic-label-education-science = Science\n# ”Life Hacks” = “Self Improvement”, refers to articles and stories aimed at helping readers improve various\n# aspects of their lives – from mental health to  productivity. See the “Curated by our editors“ section\n# at the top of https://getpocket.com/explore/self-improvement for more context.\nnewtab-topic-label-society = Life Hacks\nnewtab-topic-label-sports = Sports\nnewtab-topic-label-tech = Tech\nnewtab-topic-label-travel = Travel\nnewtab-topic-label-home = Home & Garden\n\n## Topic Selection Modal\n\n# “fine-tune” refers to the process of making small adjustments to something to get\n# the best or desired experience or performance.\nnewtab-topic-selection-title = Select topics to fine-tune your feed\n# “tailored” refers to process of (a tailor) making (clothes) to fit individual customers.\n# In other words, “Our expert curators prioritize stories to fit your selected interests”\nnewtab-topic-selection-subtitle = Choose two or more topics. Our expert curators prioritize stories tailored to your interests. Update anytime.\nnewtab-topic-selection-save-button = Save\nnewtab-topic-selection-cancel-button = Cancel\nnewtab-topic-selection-button-maybe-later = Maybe later\nnewtab-topic-selection-privacy-link = Learn how we protect and manage data\nnewtab-topic-selection-button-update-interests = Update your interests\nnewtab-topic-selection-button-pick-interests = Pick your interests\n";

/***/ })

}]);