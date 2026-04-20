import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "form";

    public readonly locators: {
        labelBasic: Locator;
        labelSubtitle: Locator;
        labelAddon: Locator;
        labelAddonTrigger: Locator;
        labelAddonPopoverContent: Locator;
        labelDisabled: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            labelBasic: page.getByTestId("label-basic"),
            labelSubtitle: page.getByTestId("label-subtitle"),
            labelAddon: page.getByTestId("label-addon"),
            labelAddonTrigger: page.getByTestId("popover-icon"),
            labelAddonPopoverContent: page.getByTestId(
                "label-addon-popover-content"
            ),
            labelDisabled: page.getByTestId("label-disabled"),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Form.Label", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-label");
        });

        test("Renders all label variants", async ({ story }) => {
            await test.step("All label variants are visible", async () => {
                await expect(story.locators.labelBasic).toBeVisible();
                await expect(story.locators.labelSubtitle).toBeVisible();
                await expect(story.locators.labelAddon).toBeVisible();
                await expect(story.locators.labelDisabled).toBeVisible();
            });

            await test.step("Screenshot matches", async () => {
                await compareScreenshot(story, "label-variants");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-label", { mode: "dark" });
        });

        test("Renders all label variants (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "label-variants-dark");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-label");
        });

        test("Label with subtitle renders subtitle text", async ({ story }) => {
            const subtitle = story.locators.labelSubtitle.getByTestId(
                "label-subtitle-subtitle"
            );

            await expect(subtitle).toBeVisible();
            await expect(subtitle).toHaveText("This is a label subtitle");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-label");
        });

        test("Popover addon opens on click and closes on Escape", async ({
            story,
        }) => {
            await test.step("Popover content is not initially visible", async () => {
                await expect(
                    story.locators.labelAddonPopoverContent
                ).not.toBeVisible();
            });

            await test.step("Popover opens on trigger click", async () => {
                await story.locators.labelAddonTrigger.click();
                await expect(
                    story.locators.labelAddonPopoverContent
                ).toBeVisible();

                await compareScreenshot(story, "label-addon-open", {
                    fullscreen: true,
                });
            });

            await test.step("Popover closes on Escape", async () => {
                await story.page.keyboard.press("Escape");
                await expect(
                    story.locators.labelAddonPopoverContent
                ).not.toBeVisible();
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-label");
        });

        test("Disabled label renders with muted appearance", async ({
            story,
        }) => {
            await expect(story.locators.labelDisabled).toBeVisible();

            await compareScreenshot(story, "label-disabled", {
                locator: story.locators.labelDisabled,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-label", { mode: "dark" });
        });

        test("Disabled label renders with muted appearance (dark mode)", async ({
            story,
        }) => {
            await compareScreenshot(story, "label-disabled-dark", {
                locator: story.locators.labelDisabled,
            });
        });
    });
});
