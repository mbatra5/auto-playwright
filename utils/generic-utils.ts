import { Page, BrowserContext } from '@playwright/test';

/**
 * Waits for a new page to open and ensures it is fully loaded.
 * @param context - The browser context.
 * @param triggerAction - A callback function that triggers the opening of a new page.
 * @returns The newly opened page.
 */
export async function waitForNewPage(
  context: BrowserContext,
  triggerAction: () => Promise<void>
): Promise<Page> {
  const [newPage] = await Promise.all([
    context.waitForEvent('page'), // Wait for the new page event.
    triggerAction(), // Perform the action that triggers the new page.
  ]);

  // Wait for the new page to reach the "load" state.
  await newPage.waitForLoadState('load'); // Ensure the page is fully loaded.

  // Optionally log the URL to confirm the new page loaded correctly.
  //console.log(`New page loaded with URL: ${newPage.url()}`);
  return newPage;
}
