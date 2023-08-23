/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/publicdomain/zero/1.0/ */

ChromeUtils.defineESModuleGetters(globalThis, {
  SessionStore: "resource:///modules/sessionstore/SessionStore.sys.mjs",
});

const FXVIEW_NEXT_ENABLED_PREF = "browser.tabs.firefox-view-next";
const NEVER_REMEMBER_HISTORY_PREF = "browser.privatebrowsing.autostart";
const RECENTLY_CLOSED_EVENT = [
  ["firefoxview_next", "recently_closed", "tabs", undefined],
];
const DISMISS_CLOSED_TAB_EVENT = [
  ["firefoxview_next", "dismiss_closed_tab", "tabs", undefined],
];
const CHANGE_PAGE_EVENT = [
  ["firefoxview_next", "change_page", "navigation", undefined],
];
const CARD_COLLAPSED_EVENT = [
  ["firefoxview_next", "card_collapsed", "card_container", undefined],
];
const initialTab = gBrowser.selectedTab;

function isElInViewport(element) {
  const boundingRect = element.getBoundingClientRect();
  return (
    boundingRect.top >= 0 &&
    boundingRect.left >= 0 &&
    boundingRect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    boundingRect.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
}

async function openFirefoxView(win) {
  await BrowserTestUtils.synthesizeMouseAtCenter(
    "#firefox-view-button",
    { type: "mousedown" },
    win.browsingContext
  );
}

async function waitForRecentlyClosedTabsList(doc) {
  let recentlyClosedComponent = doc.querySelector(
    "view-recentlyclosed:not([slot=recentlyclosed])"
  );
  // Check that the tabs list is rendered
  await TestUtils.waitForCondition(() => {
    return recentlyClosedComponent.cardEl;
  });
  let cardContainer = recentlyClosedComponent.cardEl;
  let cardMainSlotNode = Array.from(
    cardContainer?.mainSlot?.assignedNodes()
  )[0];
  return [cardMainSlotNode, cardMainSlotNode.rowEls];
}

async function click_tab_item(itemElem, itemProperty = "") {
  // Make sure the firefoxview-next tab still has focus
  is(
    itemElem.ownerDocument.location.href,
    "about:firefoxview-next#recentlyclosed",
    "about:firefoxview-next is the selected tab and showing the Recently closed view page"
  );

  // Scroll to the tab element to ensure dismiss button is visible
  itemElem.scrollIntoView();
  is(isElInViewport(itemElem), true, "Tab is visible in viewport");
  let clickTarget;
  switch (itemProperty) {
    case "dismiss":
      clickTarget = itemElem.buttonEl;
      break;
    default:
      clickTarget = itemElem.mainEl;
      break;
  }

  const closedObjectsChangePromise = TestUtils.topicObserved(
    "sessionstore-closed-objects-changed"
  );
  EventUtils.synthesizeMouseAtCenter(clickTarget, {}, itemElem.ownerGlobal);
  await closedObjectsChangePromise;
}

async function restore_tab(itemElem, browser, expectedURL) {
  info(`Restoring tab ${itemElem.url}`);
  let tabRestored = BrowserTestUtils.waitForNewTab(
    browser.getTabBrowser(),
    expectedURL
  );
  await click_tab_item(itemElem, "main");
  await tabRestored;
}

async function dismiss_tab(itemElem) {
  info(`Dismissing tab ${itemElem.url}`);
  return click_tab_item(itemElem, "dismiss");
}

async function tabTestCleanup() {
  await promiseAllButPrimaryWindowClosed();
  for (let tab of gBrowser.visibleTabs) {
    if (tab == initialTab) {
      continue;
    }
    await TabStateFlusher.flush(tab.linkedBrowser);
    let sessionUpdatePromise = BrowserTestUtils.waitForSessionStoreUpdate(tab);
    BrowserTestUtils.removeTab(tab);
    await sessionUpdatePromise;
  }
  Services.obs.notifyObservers(null, "browser:purge-session-history");
}

async function prepareSingleClosedTab() {
  Services.obs.notifyObservers(null, "browser:purge-session-history");
  is(
    SessionStore.getClosedTabCount(window),
    0,
    "Closed tab count after purging session history"
  );
  await open_then_close(URLs[0]);
  return {
    cleanup: tabTestCleanup,
  };
}

async function prepareClosedTabs() {
  Services.obs.notifyObservers(null, "browser:purge-session-history");
  is(
    SessionStore.getClosedTabCount(window),
    0,
    "Closed tab count after purging session history"
  );
  is(
    SessionStore.getClosedTabCountFromClosedWindows(),
    0,
    "Closed tab count after purging session history"
  );

  await open_then_close(URLs[0]);
  await open_then_close(URLs[1]);

  // create 1 recently-closed tabs in a 2nd window
  info("Opening win2 and open/closing tabs in it");
  const win2 = await BrowserTestUtils.openNewBrowserWindow();
  // open a non-transitory, worth-keeping tab to ensure window data is saved on close
  await BrowserTestUtils.openNewForegroundTab(win2.gBrowser, "about:mozilla");
  await open_then_close(URLs[2], win2);

  info("Opening win3 and open/closing a tab in it");
  const win3 = await BrowserTestUtils.openNewBrowserWindow();
  // open a non-transitory, worth-keeping tab to ensure window data is saved on close
  await BrowserTestUtils.openNewForegroundTab(win3.gBrowser, "about:mozilla");
  await open_then_close(URLs[3], win3);

  // close the 3rd window with its 1 recently-closed tab
  info("closing win3 and waiting for sessionstore-closed-objects-changed");
  await BrowserTestUtils.closeWindow(win3);

  // refocus and bring the initial window to the foreground
  await SimpleTest.promiseFocus(window);

  // this is the order we expect for all the recently-closed tabs
  const expectedURLs = [
    "https://example.org/", // URLS[3]
    "https://example.net/", // URLS[2]
    "https://www.example.com/", // URLS[1]
    "http://mochi.test:8888/browser/", // URLS[0]
  ];
  const preparedClosedTabCount = expectedURLs.length;

  const closedTabsFromClosedWindowsCount =
    SessionStore.getClosedTabCountFromClosedWindows();
  is(
    closedTabsFromClosedWindowsCount,
    1,
    "Expected 1 closed tab from a closed window"
  );

  const closedTabsFromOpenWindowsCount = SessionStore.getClosedTabCount(window);
  is(
    closedTabsFromOpenWindowsCount,
    3,
    "Expected 3 closed tabs currently-open windows"
  );

  // For illustrative purposes.
  // Currently "recently-closed" tab count is the sum of these 2 return values:
  let actualClosedTabCount =
    closedTabsFromOpenWindowsCount + closedTabsFromClosedWindowsCount;
  is(
    actualClosedTabCount,
    preparedClosedTabCount,
    `SessionStore reported the expected number (${actualClosedTabCount}) of closed tabs`
  );

  return {
    cleanup: tabTestCleanup,
    // return a list of the tab urls we closed in the order we closed them
    closedTabURLs: [...URLs.slice(0, 4)],
    expectedURLs,
  };
}

async function recentlyClosedTelemetry() {
  await TestUtils.waitForCondition(
    () => {
      let events = Services.telemetry.snapshotEvents(
        Ci.nsITelemetry.DATASET_PRERELEASE_CHANNELS,
        false
      ).parent;
      return events && events.length >= 1;
    },
    "Waiting for recently_closed firefoxview_next telemetry event.",
    200,
    100
  );

  TelemetryTestUtils.assertEvents(
    RECENTLY_CLOSED_EVENT,
    { category: "firefoxview_next" },
    { clear: true, process: "parent" }
  );
}

async function recentlyClosedDismissTelemetry() {
  await TestUtils.waitForCondition(
    () => {
      let events = Services.telemetry.snapshotEvents(
        Ci.nsITelemetry.DATASET_PRERELEASE_CHANNELS,
        false
      ).parent;
      return events && events.length >= 1;
    },
    "Waiting for dismiss_closed_tab firefoxview_next telemetry event.",
    200,
    100
  );

  TelemetryTestUtils.assertEvents(
    DISMISS_CLOSED_TAB_EVENT,
    { category: "firefoxview_next" },
    { clear: true, process: "parent" }
  );
}

async function navigationTelemetry() {
  await TestUtils.waitForCondition(
    () => {
      let events = Services.telemetry.snapshotEvents(
        Ci.nsITelemetry.DATASET_PRERELEASE_CHANNELS,
        false
      ).parent;
      return events && events.length >= 1;
    },
    "Waiting for change_page firefoxview_next telemetry event.",
    200,
    100
  );

  TelemetryTestUtils.assertEvents(
    CHANGE_PAGE_EVENT,
    { category: "firefoxview_next" },
    { clear: true, process: "parent" }
  );
}

async function cardCollapsedTelemetry() {
  await TestUtils.waitForCondition(
    () => {
      let events = Services.telemetry.snapshotEvents(
        Ci.nsITelemetry.DATASET_PRERELEASE_CHANNELS,
        false
      ).parent;
      return events && events.length >= 1;
    },
    "Waiting for card_collapsed firefoxview_next telemetry event.",
    200,
    100
  );

  TelemetryTestUtils.assertEvents(
    CARD_COLLAPSED_EVENT,
    { category: "firefoxview_next" },
    { clear: true, process: "parent" }
  );
}

add_setup(async () => {
  await SpecialPowers.pushPrefEnv({ set: [[FXVIEW_NEXT_ENABLED_PREF, true]] });
  registerCleanupFunction(async () => {
    await SpecialPowers.popPrefEnv();
    clearHistory();
  });
});

/**
 * Asserts that we get the expected order recently-closed tab list items given a known
 * sequence of tab closures
 */
add_task(async function test_list_ordering() {
  let { cleanup, expectedURLs } = await prepareClosedTabs();
  await withFirefoxView({}, async browser => {
    const { document } = browser.contentWindow;
    is(document.location.href, "about:firefoxview-next");
    await clearAllParentTelemetryEvents();
    navigateToCategory(document, "recentlyclosed");
    await navigationTelemetry();
    let [cardMainSlotNode, listItems] = await waitForRecentlyClosedTabsList(
      document
    );

    is(
      cardMainSlotNode.tagName.toLowerCase(),
      "fxview-tab-list",
      "The tab list component is rendered."
    );

    Assert.deepEqual(
      Array.from(listItems).map(el => el.url),
      expectedURLs,
      "The initial list has rendered the expected tab items in the right order"
    );
  });
  await cleanup();
});

add_task(async function test_collapse_card() {
  const { cleanup } = await prepareSingleClosedTab();
  await withFirefoxView({}, async browser => {
    const { document } = browser.contentWindow;
    is(document.location.href, "about:firefoxview-next");

    let recentlyClosedComponent = document.querySelector(
      "view-recentlyclosed[slot=recentlyclosed]"
    );
    let cardContainer = recentlyClosedComponent.cardEl;
    is(
      cardContainer.isExpanded,
      true,
      "The card-container is expanded initially"
    );
    await clearAllParentTelemetryEvents();
    // Click the summary to collapse the details disclosure
    await EventUtils.synthesizeMouseAtCenter(
      cardContainer.summaryEl,
      {},
      content
    );
    is(
      cardContainer.detailsEl.hasAttribute("open"),
      false,
      "The card-container is collapsed"
    );
    await cardCollapsedTelemetry();
    // Click the summary again to expand the details disclosure
    await EventUtils.synthesizeMouseAtCenter(
      cardContainer.summaryEl,
      {},
      content
    );
    is(
      cardContainer.detailsEl.hasAttribute("open"),
      true,
      "The card-container is expanded"
    );
  });
  await cleanup();
});

/**
 * Asserts that an out-of-band update to recently-closed tabs results in the correct update to the tab list
 */
add_task(async function test_list_updates() {
  let { cleanup, expectedURLs } = await prepareClosedTabs();

  await withFirefoxView({}, async browser => {
    const { document } = browser.contentWindow;
    is(document.location.href, "about:firefoxview-next");
    navigateToCategory(document, "recentlyclosed");

    let [listElem, listItems] = await waitForRecentlyClosedTabsList(document);
    Assert.deepEqual(
      Array.from(listItems).map(el => el.url),
      expectedURLs,
      "The initial list has rendered the expected tab items in the right order"
    );

    // the first tab we opened and closed is the last in the list
    let closedTabItem = listItems[listItems.length - 1];
    is(
      closedTabItem.url,
      "http://mochi.test:8888/browser/",
      "Sanity-check the least-recently closed tab is https://example.org/"
    );
    info(
      `Restore the last (least-recently) closed tab ${closedTabItem.url}, closedId: ${closedTabItem.closedId} and wait for sessionstore-closed-objects-changed`
    );
    let promiseClosedObjectsChanged = TestUtils.topicObserved(
      "sessionstore-closed-objects-changed"
    );
    SessionStore.undoCloseById(closedTabItem.closedId);
    await promiseClosedObjectsChanged;
    await openFirefoxView(window);

    // we expect the last item to be removed
    expectedURLs.pop();
    listItems = listElem.rowEls;

    is(
      listItems.length,
      3,
      `Three tabs are shown in the list: ${Array.from(listItems).map(
        el => el.url
      )}, of ${expectedURLs.length} expectedURLs: ${expectedURLs}`
    );
    Assert.deepEqual(
      Array.from(listItems).map(el => el.url),
      expectedURLs,
      "The updated list has rendered the expected tab items in the right order"
    );

    // forget the window the most-recently closed tab was in and verify the list is correctly updated
    closedTabItem = listItems[0];
    promiseClosedObjectsChanged = TestUtils.topicObserved(
      "sessionstore-closed-objects-changed"
    );
    SessionStore.forgetClosedWindowById(closedTabItem.sourceClosedId);
    await promiseClosedObjectsChanged;
    await openFirefoxView(window);

    listItems = listElem.rowEls;
    expectedURLs.shift(); // we expect to have removed the firsts URL from the list
    is(listItems.length, 2, "Two tabs are shown in the list.");
    Assert.deepEqual(
      Array.from(listItems).map(el => el.url),
      expectedURLs,
      "After forgetting the closed window that owned the last recent tab, we have expected tab items in the right order"
    );
  });
  await cleanup();
});

/**
 * Asserts that tabs that have been recently closed can be
 * restored by clicking on the list item
 */
add_task(async function test_restore_tab() {
  let { cleanup, expectedURLs } = await prepareClosedTabs();

  await withFirefoxView({}, async browser => {
    const { document } = browser.contentWindow;
    is(document.location.href, "about:firefoxview-next");
    navigateToCategory(document, "recentlyclosed");

    let [listElem, listItems] = await waitForRecentlyClosedTabsList(document);
    Assert.deepEqual(
      Array.from(listItems).map(el => el.url),
      expectedURLs,
      "The initial list has rendered the expected tab items in the right order"
    );
    let closeTabItem = listItems[0];
    info(
      `Restoring the first closed tab ${closeTabItem.url}, closedId: ${closeTabItem.closedId}, sourceClosedId: ${closeTabItem.sourceClosedId}  and waiting for sessionstore-closed-objects-changed`
    );
    await clearAllParentTelemetryEvents();
    await restore_tab(closeTabItem, browser, closeTabItem.url);
    await recentlyClosedTelemetry();
    await openFirefoxView(window);

    listItems = listElem.rowEls;
    is(listItems.length, 3, "Three tabs are shown in the list.");

    closeTabItem = listItems[listItems.length - 1];
    await clearAllParentTelemetryEvents();
    await restore_tab(closeTabItem, browser, closeTabItem.url);
    await recentlyClosedTelemetry();
    await openFirefoxView(window);

    listItems = listElem.rowEls;
    is(listItems.length, 2, "Two tabs are shown in the list.");

    listItems = listElem.rowEls;
    is(listItems.length, 2, "Two tabs are shown in the list.");
  });
  await cleanup();
});

/**
 * Asserts that tabs that have been recently closed can be
 * dismissed by clicking on their respective dismiss buttons.
 */
add_task(async function test_dismiss_tab() {
  let { cleanup, expectedURLs } = await prepareClosedTabs();

  await withFirefoxView({}, async browser => {
    const { document } = browser.contentWindow;
    navigateToCategory(document, "recentlyclosed");

    let [listElem, listItems] = await waitForRecentlyClosedTabsList(document);
    await clearAllParentTelemetryEvents();

    info("calling dismiss_tab on the top, most-recently closed tab");
    let closedTabItem = listItems[0];

    // dismiss the first tab and verify the list is correctly updated
    await dismiss_tab(closedTabItem);
    await listElem.getUpdateComplete;

    info("check telemetry results");
    await recentlyClosedDismissTelemetry();

    listItems = listElem.rowEls;
    expectedURLs.shift(); // we expect to have removed the first URL from the list
    Assert.deepEqual(
      Array.from(listItems).map(el => el.url),
      expectedURLs,
      "After dismissing the most-recent tab we have expected tab items in the right order"
    );

    // dismiss the last tab and verify the list is correctly updated
    closedTabItem = listItems[listItems.length - 1];
    await dismiss_tab(closedTabItem);
    await listElem.getUpdateComplete;

    listItems = listElem.rowEls;
    expectedURLs.pop(); // we expect to have removed the last URL from the list
    let actualClosedTabCount =
      SessionStore.getClosedTabCount(window) +
      SessionStore.getClosedTabCountFromClosedWindows();
    Assert.equal(
      actualClosedTabCount,
      2,
      "After dismissing the least-recent tab, SessionStore has 2 left"
    );
    Assert.deepEqual(
      Array.from(listItems).map(el => el.url),
      expectedURLs,
      "After dismissing the least-recent tab we have expected tab items in the right order"
    );
  });
  await cleanup();
});

add_task(async function test_empty_states() {
  is(
    SessionStore.getClosedTabCount(window),
    0,
    "Closed tab count after purging session history"
  );
  is(
    SessionStore.getClosedTabCountFromClosedWindows(),
    0,
    "Closed tabs-from-closed-windows count after purging session history"
  );

  await withFirefoxView({}, async browser => {
    const { document } = browser.contentWindow;
    is(document.location.href, "about:firefoxview-next");

    navigateToCategory(document, "recentlyclosed");
    let recentlyClosedComponent = document.querySelector(
      "view-recentlyclosed:not([slot=recentlyclosed])"
    );

    await TestUtils.waitForCondition(() => recentlyClosedComponent.emptyState);
    let emptyStateCard = recentlyClosedComponent.emptyState;
    ok(
      emptyStateCard.headerEl.textContent.includes("Closed a tab too soon"),
      "Initial empty state header has the expected text."
    );
    ok(
      emptyStateCard.descriptionEls[0].textContent.includes(
        "Here you’ll find the tabs you recently closed"
      ),
      "Initial empty state description has the expected text."
    );

    // Test empty state when History mode is set to never remember
    Services.prefs.setBoolPref(NEVER_REMEMBER_HISTORY_PREF, true);
    // Manually update the recentlyclosed component from the test, since changing this setting
    // in about:preferences will require a browser reload
    recentlyClosedComponent.requestUpdate();
    await TestUtils.waitForCondition(
      () => recentlyClosedComponent.fullyUpdated
    );
    emptyStateCard = recentlyClosedComponent.emptyState;
    ok(
      emptyStateCard.headerEl.textContent.includes("Nothing to show"),
      "Empty state with never remember history header has the expected text."
    );
    ok(
      emptyStateCard.descriptionEls[1].textContent.includes(
        "remember your activity as you browse. To change that"
      ),
      "Empty state with never remember history description has the expected text."
    );
    // Reset History mode to Remember
    Services.prefs.setBoolPref(NEVER_REMEMBER_HISTORY_PREF, false);
    gBrowser.removeTab(gBrowser.selectedTab);
  });
});
