import clsx from "clsx";
import { useState } from "react";

import { Typography } from "../typography";
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
        <ul
            className={clsx(
                styles.section,
                showDivider && "menuSectionDivider"
            )}
            data-testid={testId}
            aria-labelledby={internalId}
            {...otherProps}
        >
            {label && (
                <Typography.BodyXS
                    className={styles.label}
                    weight="semibold"
                    id={internalId}
                >
                    {label}
                </Typography.BodyXS>
            )}
            {children}
        </ul>
    );
};

MenuSection.displayName = "Menu.Section";
