import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "tab";

    public readonly locators: {
        component: {
            firstTab: Locator;
            secondTab: Locator;
            thirdTab: Locator;
        };
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            component: {
                firstTab: page.getByRole("tab", { name: "Section A" }),
                secondTab: page.getByRole("tab", { name: "Section B" }),
                thirdTab: page.getByRole("tab", { name: "Section C" }),
            },
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, runStory) => {
        const story = new StoryPage(page);
        await runStory(story);
    },
});

test.describe("Tab", () => {
    test.beforeEach(async ({ story }) => {
        await story.init("default");
    });

    test("Default", async ({ story }) => {
        await expect(story.layout).toMatchAriaSnapshot(`
                    - tablist:
                        - tab "Section A" [selected]
                        - tab "Section B"
                        - tab "Section C"
                    - tabpanel "Section A": Contents of A
                `);

        await compareScreenshot(story, "mount");
    });

    test("Hover", async ({ story }) => {
        await story.locators.component.secondTab.hover();

        await expect(story.layout).toMatchAriaSnapshot(`
                    - tablist:
                        - tab "Section A" [selected]
                        - tab "Section B"
                        - tab "Section C"
                    - tabpanel "Section A": Contents of A
                `);

        await compareScreenshot(story, "hover-inactive-tab");
    });

    test("Keyboard navigation", async ({ story }) => {
        await story.locators.component.firstTab.focus();
        await story.page.keyboard.press("ArrowRight");
        await story.page.keyboard.press("ArrowRight");

        await expect(story.locators.component.thirdTab).toBeFocused();

        await story.page.keyboard.press("ArrowLeft");

        await expect(story.locators.component.secondTab).toBeFocused();

        await story.page.keyboard.press("Space");

        await expect(story.locators.component.secondTab).toMatchAriaSnapshot(
            '- tab "Section B" [selected]'
        );
    });

    test.describe("", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("title-addon");
        });

        test("Title addon", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe("", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("long-label", { size: "mobile" });
        });

        test("Long labels", async ({ story }) => {
            await compareScreenshot(story, "truncated");
        });
    });

    test.describe("", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("full-width-indicator");
        });

        test("fullWidthIndicator=true", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe("", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("custom-tab-width");
        });

        test("width=50%", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe("Fade color", () => {
        test("Mobile", async ({ story }) => {
            await story.init("fade-color", { size: "mobile" });
            await compareScreenshot(story, "mount");
        });

        test("Tablet", async ({ story }) => {
            await story.init("fade-color", { size: "tablet" });
            await compareScreenshot(story, "mount");
        });
    });
});
