import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "tab";

    public readonly locators: {
        component: {
            firstTab: Locator;
            secondTab: Locator;
            thirdTab: Locator;
            firstPanel: Locator;
            secondPanel: Locator;
        };
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            component: {
                firstTab: page.getByRole("tab", { name: "Section A" }),
                secondTab: page.getByRole("tab", { name: "Section B" }),
                thirdTab: page.getByRole("tab", { name: "Section C" }),
                firstPanel: page.getByTestId("tab-panel-a"),
                secondPanel: page.getByTestId("tab-panel-b"),
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
    test.describe("", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("default");
        });

        test("Mount", async ({ story }) => {
            await expect(story.layout).toMatchAriaSnapshot(`
                    - list:
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
                    - list:
                        - tab "Section A" [selected]
                        - tab "Section B"
                        - tab "Section C"
                    - tabpanel "Section A": Contents of A
                `);

            await compareScreenshot(story, "hover-inactive-tab");
        });
    });
});
