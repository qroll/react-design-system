"use client";
import { Toggle } from "@lifesg/react-design-system/toggle";

export default function Story() {
    return (
        <div className="story-column-container">
            {/* bordered + indicator */}
            <div className="story-row-container">
                <Toggle type="checkbox" indicator>
                    Bordered + indicator
                </Toggle>
                <Toggle type="checkbox" indicator checked>
                    Bordered + indicator checked
                </Toggle>
                <Toggle type="checkbox" indicator disabled>
                    Bordered + indicator disabled
                </Toggle>
                <Toggle type="checkbox" indicator checked disabled>
                    Bordered + indicator checked disabled
                </Toggle>
                <Toggle type="checkbox" indicator error>
                    Bordered + indicator error
                </Toggle>
                <Toggle type="checkbox" indicator error disabled>
                    Bordered + indicator error disabled
                </Toggle>
            </div>

            {/* bordered + no indicator */}
            <div className="story-row-container">
                <Toggle type="checkbox">Bordered</Toggle>
                <Toggle type="checkbox" checked>
                    Bordered checked
                </Toggle>
                <Toggle type="checkbox" disabled>
                    Bordered disabled
                </Toggle>
                <Toggle type="checkbox" checked disabled>
                    Bordered checked disabled
                </Toggle>
                <Toggle type="checkbox" error>
                    Bordered error
                </Toggle>
                <Toggle type="checkbox" error disabled>
                    Bordered error disabled
                </Toggle>
            </div>

            {/* no-border + indicator */}
            <div className="story-row-container">
                <Toggle type="checkbox" indicator styleType="no-border">
                    No-border + indicator
                </Toggle>
                <Toggle type="checkbox" indicator styleType="no-border" checked>
                    No-border + indicator checked
                </Toggle>
                <Toggle
                    type="checkbox"
                    indicator
                    styleType="no-border"
                    disabled
                >
                    No-border + indicator disabled
                </Toggle>
                <Toggle
                    type="checkbox"
                    indicator
                    styleType="no-border"
                    checked
                    disabled
                >
                    No-border + indicator checked disabled
                </Toggle>
                <Toggle type="checkbox" indicator styleType="no-border" error>
                    No-border + indicator error
                </Toggle>
                <Toggle
                    type="checkbox"
                    indicator
                    styleType="no-border"
                    error
                    disabled
                >
                    No-border + indicator error disabled
                </Toggle>
            </div>

            {/* no-border + no indicator */}
            <div className="story-row-container">
                <Toggle type="checkbox" styleType="no-border">
                    No-border
                </Toggle>
                <Toggle type="checkbox" styleType="no-border" checked>
                    No-border checked
                </Toggle>
                <Toggle type="checkbox" styleType="no-border" disabled>
                    No-border disabled
                </Toggle>
                <Toggle type="checkbox" styleType="no-border" checked disabled>
                    No-border checked disabled
                </Toggle>
                <Toggle type="checkbox" styleType="no-border" error>
                    No-border error
                </Toggle>
                <Toggle type="checkbox" styleType="no-border" error disabled>
                    No-border error disabled
                </Toggle>
            </div>

            {/* with sub label */}
            <div className="story-row-container">
                <Toggle
                    type="checkbox"
                    indicator
                    subLabel="This is a sub label"
                >
                    With sub label
                </Toggle>
                <Toggle
                    type="checkbox"
                    indicator
                    checked
                    subLabel="This is a sub label"
                >
                    With sub label checked
                </Toggle>
                <Toggle
                    type="checkbox"
                    indicator
                    disabled
                    subLabel="This is a sub label"
                >
                    With sub label disabled
                </Toggle>
            </div>

            {/* with composite section */}
            <div className="story-row-container">
                <Toggle
                    type="checkbox"
                    indicator
                    compositeSection={{
                        children: <p>Composite section content</p>,
                        collapsible: true,
                        initialExpanded: false,
                    }}
                >
                    With composite (collapsed)
                </Toggle>
                <Toggle
                    type="checkbox"
                    indicator
                    checked
                    compositeSection={{
                        children: <p>Composite section content</p>,
                        collapsible: true,
                        initialExpanded: true,
                    }}
                >
                    With composite (expanded)
                </Toggle>
            </div>

            <div className="story-row-container">
                <Toggle
                    type="checkbox"
                    indicator
                    error
                    compositeSection={{
                        children: <p>Composite section content</p>,
                        collapsible: true,
                        initialExpanded: false,
                        errors: ["Error item 1", "Error item 2"],
                    }}
                >
                    With composite errors (collapsed)
                </Toggle>
                <Toggle
                    type="checkbox"
                    indicator
                    error
                    compositeSection={{
                        children: <p>Composite section content</p>,
                        collapsible: true,
                        initialExpanded: true,
                        errors: ["Error item 1", "Error item 2"],
                    }}
                >
                    With composite errors (expanded)
                </Toggle>
            </div>

            {/* removable */}
            <div className="story-row-container">
                <Toggle type="checkbox" indicator removable>
                    Removable unchecked
                </Toggle>
                <Toggle type="checkbox" indicator removable checked>
                    Removable checked
                </Toggle>
                <Toggle type="checkbox" indicator removable disabled>
                    Removable disabled
                </Toggle>
            </div>
        </div>
    );
}
