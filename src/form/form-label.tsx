import type React from "react";

import { Markup } from "../markup";
import * as styles from "./form-label.styles";
import { PopoverAddon } from "./form-label-addon";
import type { FormLabelProps } from "./types";

export const FormLabel = ({
    id,
    children,
    addon,
    subtitle,
    "data-testid": testId,
    className,
    style,
    ...otherProps
}: FormLabelProps): JSX.Element => {
    // -------------------------------------------------------------------------
    // RENDER FUNCTIONS
    // -------------------------------------------------------------------------
    const renderAddon = () => {
        switch (addon?.type) {
            case "popover":
                return <PopoverAddon addon={addon} />;
            default:
                return null;
        }
    };

    return (
        <styles.LabelContainer
            className={className}
            style={style}
            data-testid={testId}
        >
            <styles.Label id={id} {...otherProps}>
                <Markup inline>
                    {children}
                    {addon && addon.type && renderAddon()}
                </Markup>
            </styles.Label>
            {typeof subtitle === "string" ? (
                <styles.Subtitle
                    id={id ? `${id}-subtitle` : undefined}
                    data-testid={testId ? `${testId}-subtitle` : "subtitle"}
                >
                    {subtitle}
                </styles.Subtitle>
            ) : (
                subtitle
            )}
        </styles.LabelContainer>
    );
};

export const FormErrorMessage = (
    props: React.HTMLAttributes<HTMLElement>
): JSX.Element => {
    return (
        <styles.ErrorMessageContainer>
            <styles.ErrorIcon aria-hidden />
            <styles.ErrorMessage {...props} />
        </styles.ErrorMessageContainer>
    );
};
