import AxeBuilder from '@axe-core/playwright';
import type { Page } from '@playwright/test';

export class AxeTest {
constructor(private page: Page) {
    this.page = page
}

 WCAG_AA_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22a', 'wcag22aa'];
 WCAG_AAA_TAGS = ['wcag2a', 'wcag2aa', 'wcag2aaa', 'wcag21aa','wcag21a', 'wcag21aa', 'wcag22a', 'wcag22aa','wcag22aaa' ];

async checkAAGuidelines() {
    return new AxeBuilder({ page: this.page })
        .withTags(this.WCAG_AA_TAGS)
        .analyze();
}

async checkAAAGuidelines() {
    return new AxeBuilder({ page: this.page })
        .withTags(this.WCAG_AAA_TAGS)
        .analyze();
}

async checkAAGuidelinesOnElement(element: string) {
    return new AxeBuilder({ page: this.page })
        .include(element) 
        .withTags(this.WCAG_AA_TAGS)
        .analyze();
}

async checkAAGuidelinesOnElements(elements: string[]) {
    let axeBuilder = new AxeBuilder({ page: this.page });
    elements.forEach(element => axeBuilder = axeBuilder.include(element));
    return axeBuilder.withTags(this.WCAG_AA_TAGS).analyze();
}

async checkAAGuidelinesExcludingElement(element: string) {
    return new AxeBuilder({ page: this.page })
        .exclude(element) // Exclude the specified element
        .withTags(this.WCAG_AA_TAGS)
        .analyze();
}

async checkAAGuidelinesExcludingElements(elements: string[]) {
    let axeBuilder = new AxeBuilder({ page: this.page });
    elements.forEach(selector => axeBuilder = axeBuilder.exclude(selector)); // Exclude multiple elements
    return axeBuilder.withTags(this.WCAG_AA_TAGS).analyze();
}
}
export { expect } from '@playwright/test';