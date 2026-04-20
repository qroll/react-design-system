"use client";
import { Tab } from "@lifesg/react-design-system/tab";

const LONG_TITLE = "Lorem ipsum dolor sit amet consectetur adipiscing elit";

export default function Story() {
    return (
        <div className="story-column-container">
            <Tab fadeColor={["#3C91EC"]}>
                <Tab.Item title={LONG_TITLE} data-testid="tab-panel-a">
                    <div className="story-padding" data-testid="tab-content-a">
                        Contents of A
                    </div>
                </Tab.Item>
                <Tab.Item title={LONG_TITLE} data-testid="tab-panel-b">
                    <div className="story-padding" data-testid="tab-content-b">
                        Contents of B
                    </div>
                </Tab.Item>
                <Tab.Item title={LONG_TITLE} data-testid="tab-panel-c">
                    <div className="story-padding" data-testid="tab-content-c">
                        Contents of C
                    </div>
                </Tab.Item>
                <Tab.Item title={LONG_TITLE} data-testid="tab-panel-d">
                    <div className="story-padding" data-testid="tab-content-d">
                        Contents of D
                    </div>
                </Tab.Item>
            </Tab>
        </div>
    );
}
