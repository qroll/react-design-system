import clsx from "clsx";
import React from "react";

import { Label, Wrapper } from "./tag.style";
import type { TagProps } from "./types";

export const Tag = ({
    type,
    colorType = "black",
    children,
    interactive = false,
    icon,
    iconPosition = "left",
    ...otherProps
}: TagProps): JSX.Element => {
    const getWrapperClassName = () => {
        const baseClass = `wrapper${type.charAt(0).toUpperCase()}${type.slice(
            1
        )}`;
        const colorClass = `${baseClass}${colorType
            .charAt(0)
            .toUpperCase()}${colorType.slice(1)}`;
        return clsx(colorClass, interactive && "wrapperInteractive");
    };

    return (
        <Wrapper
            as={interactive ? "button" : "div"}
            className={getWrapperClassName()}
            {...otherProps}
        >
            {iconPosition === "left" &&
                icon &&
                React.cloneElement(icon, { "aria-hidden": true })}
            <Label role="presentation">{children}</Label>
            {iconPosition === "right" &&
                icon &&
                React.cloneElement(icon, { "aria-hidden": true })}
        </Wrapper>
    );
};
