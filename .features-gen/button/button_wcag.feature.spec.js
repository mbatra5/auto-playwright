/** Generated from: test/storybook/components/button/button_wcag.feature */
import { fixture as test } from "../../config/fixture.ts";

test.describe("Verifying button accessibility", () => {

  test("Accepting cookies modal", { tag: ["@button", "@accessibility"] }, async ({ Given, When }) => {
    await Given("I am on the \"home\" page for wcag");
    await When("I allow cookie and check for violations");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("test/storybook/components/button/button_wcag.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
  $world: ({ world }, use) => use(world),
});

const bddFileMeta = {
  "Accepting cookies modal": {"pickleLocation":"4:3","tags":["@button","@accessibility"],"ownTags":["@accessibility","@button"]},
};