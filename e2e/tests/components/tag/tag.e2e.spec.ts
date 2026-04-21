import { test as base, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "tag";

    constructor(page: Page) {
        super(page);
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Tag", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("basic");
        });

        test("All type and color variants", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("basic", { mode: "dark" });
        });

        test("All type and color variants (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("interactive");
        });

        test("Interactive default", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });

        test("Interactive hover solid", async ({ story }) => {
            await story.page
                .getByRole("button", { name: "Primary" })
                .first()
                .hover();
            await compareScreenshot(story, "hover solid");
        });

        test("Interactive hover outline", async ({ story }) => {
            await story.page
                .getByRole("button", { name: "Primary" })
                .last()
                .hover();
            await compareScreenshot(story, "hover outline");
        });

        test("Interactive tablet size", async ({ story }) => {
            await story.page.setViewportSize({ width: 1024, height: 768 });
            await compareScreenshot(story, "tablet");
        });
    });
});
