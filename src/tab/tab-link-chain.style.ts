import styled, { css } from "styled-components";

import { FadeWrapper } from "../shared/fade-wrapper";
import {
    Border,
    Colour,
    Font,
    MediaQuery,
    Radius,
    Spacing,
} from "../theme/tokens";

export const tokens = {
    chainItem: {
        width: "--fds-internal-tab-chainItem-width",
    },
};

export const Chain = styled.ul`
    display: inline-flex;
    width: 100%;
    list-style-type: none;

    &.fullWidthIndicator::after {
        content: "";
        height: inherit;
        flex-grow: 1;
        /* follows the border in ChainItem */
        border-bottom: ${Border["width-040"]} ${Border.solid} ${Colour.border};
    }
`;

export const ChainItem = styled.li`
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    border-bottom: ${Border["width-040"]} ${Border.solid} ${Colour.border};
    width: var(${tokens.chainItem.width});

    &.active {
        border-color: ${Colour["border-primary"]};
    }

    ${MediaQuery.MaxWidth.sm} {
        flex: 1;
        justify-content: center;
    }
`;

/* keep this separate to contain the ts-styled error */
const padding = css`
    padding: ${Spacing["spacing-16"]} ${Spacing["spacing-16"]}
        ${Spacing["spacing-20"]};
`;

const flexRow = css`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ChainLink = styled.div`
    /* position: relative; */
    ${flexRow}
    flex-direction: row;
    gap: 0.5rem;
    ${padding}
    cursor: pointer;
    width: 100%;
    justify-content: center;

    &.reversed {
        flex-direction: row-reverse;
    }

    &:has(button:focus-visible) {
        outline: 2px solid ${Colour["focus-ring"]};
        outline-offset: -2px;
        border-radius: ${Radius.sm};
    }
`;

export const LabelContainer = styled.div`
    position: relative;
`;

const buttonBase = css`
    ${flexRow}
    border: none;
    background: none;
`;

export const Label = styled.div`
    ${buttonBase}
    position: absolute;
    ${Font["body-baseline-regular"]}
    color: ${Colour["text-subtler"]};
    opacity: 1;

    &.active {
        opacity: 0;
    }
`;

export const BoldLabel = styled.button`
    ${buttonBase}
    ${Font["body-baseline-semibold"]}
    color: ${Colour["text-primary"]};
    opacity: 0;
    outline: none;

    &.active {
        opacity: 1;
    }
`;

export const CustomFadeWrapper = styled(FadeWrapper)`
    [data-id="left-fade-indicator-button"],
    [data-id="right-fade-indicator-button"] {
        margin-bottom: ${Spacing["spacing-4"]};
    }
`;
