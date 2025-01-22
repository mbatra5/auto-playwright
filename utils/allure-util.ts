import { TestInfo } from '@playwright/test';
import * as allure from 'allure-js-commons';

export async function setAllureMetadata($testInfo: TestInfo) {
  // Extract the full path from test info
  const fullPath = $testInfo.titlePath;
  // Derive the feature name by removing the ".spec.js" suffix
  const featureName = fullPath[0].replace('.feature.spec.js', '');
  // Set the Allure label for the feature
  await allure.label('feature', featureName);
  // Set the Suite label (strip the suffix for cleaner naming)
  let suiteName = featureName;
  await allure.label('suite', suiteName);
  const tags = $testInfo?.tags || [];
  const severityTag = tags.find((tag: string) =>
    tag.startsWith('@critical') ||
    tag.startsWith('@blocker') ||
    tag.startsWith('@normal') ||
    tag.startsWith('@minor') ||
    tag.startsWith('@trivial')
  );
  // Determine severity (default to 'normal' if no tag is found)
  const severity = severityTag ? severityTag.substring(1) : 'normal';

  // Set severity in Allure
  await allure.severity(severity);
}
