import { Typography } from "../typography";
import * as styles from "./menu-item.styles";
import type { MenuItemProps } from "./types";

export const MenuItem = ({
    label,
    subLabel,
    children,
    "data-testid": testId = "menu-item",
    ...otherProps
}: MenuItemProps): JSX.Element => {
    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    return (
        <li className={styles.menuItemDiv} data-testid={testId} {...otherProps}>
            {label && (
                <Typography.BodyMD weight="semibold">{label}</Typography.BodyMD>
            )}
            {subLabel && (
                <Typography.BodySM className={styles.subLabel}>
                    {subLabel}
                </Typography.BodySM>
            )}
            {children}
        </li>
    );
};

MenuItem.displayName = "Menu.Item";
