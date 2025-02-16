/** Generated from: test/storybook/components/button/button.feature */
import { fixture as test } from "../../config/fixture.ts";

test.describe("Verifying button components", () => {

  test("Accepting cookies modal", { tag: ["@button"] }, async ({ Given, When }) => {
    await Given("I am on the \"contact\" page");
    await When("I allow cookie");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("test/storybook/components/button/button.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
  $world: ({ world }, use) => use(world),
});

const bddFileMeta = {
  "Accepting cookies modal": {"pickleLocation":"4:3","tags":["@button"],"ownTags":["@button"]},
};