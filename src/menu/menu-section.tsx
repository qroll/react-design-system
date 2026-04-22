import clsx from "clsx";
import { useState } from "react";

import { SimpleIdGenerator } from "../util";
import * as styles from "./menu-section.styles";
import type { MenuSectionProps } from "./types";

export const MenuSection = ({
    children,
    label,
    showDivider = true,
    "data-testid": testId = "menu-section",
    ...otherProps
}: MenuSectionProps): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [internalId] = useState(() => SimpleIdGenerator.generate());

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    return (
        <styles.Section
            className={clsx(showDivider && "menuSectionDivider")}
            data-testid={testId}
            aria-labelledby={internalId}
            {...otherProps}
        >
            {label && (
                <styles.Label weight="semibold" id={internalId}>
                    {label}
                </styles.Label>
            )}
            {children}
        </styles.Section>
    );
};

MenuSection.displayName = "Menu.Section";
