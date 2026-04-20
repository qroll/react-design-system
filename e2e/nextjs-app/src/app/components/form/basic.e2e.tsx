"use client";
import { Form } from "@lifesg/react-design-system/form";

export default function Story() {
    return (
        <div className="story-column-container">
            <Form.Label>The form label</Form.Label>
            <Form.Label
                addon={{
                    content:
                        "This is the form label's popover. And this will only be visible if you specify the addon prop",
                    type: "popover",
                }}
            >
                The form label with an addon
            </Form.Label>
            <Form.Label subtitle="This is the subtitle">
                The form label with a subtitle
            </Form.Label>
            <Form.CustomField
                errorMessage="This is the error message"
                id="custom-field"
                label={{
                    children: "This is a custom field",
                    subtitle: "This is the custom field subtitle",
                }}
            >
                <Form.Input id="custom-field-base" />
                <br />
                <Form.Input aria-labelledby="custom-field-label" />
            </Form.CustomField>
            <Form.Textarea
                label={{
                    children: "This is a textarea label",
                    subtitle: "This is the textarea label subtitle",
                }}
            ></Form.Textarea>
        </div>
    );
}
