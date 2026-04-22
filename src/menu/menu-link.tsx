import { Typography } from "../typography";
import * as styles from "./menu-link.styles";
import type { MenuLinkProps } from "./types";

export const MenuLink = ({
    children,
    "data-testid": testId = "menu-link",
    ...otherProps
}: MenuLinkProps): JSX.Element => {
    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    return (
        <li className={styles.menuLinkDiv}>
            <Typography.LinkMD
                className={styles.link}
                data-testid={testId}
                underlineStyle="none"
                {...otherProps}
            >
                {children}
            </Typography.LinkMD>
        </li>
    );
};

MenuLink.displayName = "Menu.Link";
