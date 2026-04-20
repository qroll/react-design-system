import styled from "styled-components";

import { Colour, MediaQuery, Spacing } from "../../theme/tokens";
import { ClickableIcon } from "../clickable-icon";

export const tokens = {
    backgroundColor: "--fds-internal-fadeWrapper-fade-backgroundColor",
};

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
`;

export const Fade = styled.div`
    width: 64px;
    height: 100%;
    top: 0;
    position: absolute;
    pointer-events: none;
    display: flex;
    align-items: center;

    &.fadeLeft {
        left: 0;
        ${MediaQuery.MaxWidth.lg} {
            background-image: linear-gradient(
                to right,
                var(${tokens.backgroundColor}, ${Colour.bg}),
                rgba(255, 255, 255, 0.001)
            );
        }
    }

    &.fadeRight {
        right: 0;
        ${MediaQuery.MaxWidth.lg} {
            background-image: linear-gradient(
                to left,
                var(${tokens.backgroundColor}, ${Colour.bg}),
                rgba(255, 255, 255, 0.001)
            );
        }
    }
`;

export const Content = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    &::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }
`;

export const FadeIndicatorButton = styled(ClickableIcon)`
    display: none;

    ${MediaQuery.MaxWidth.lg} {
        display: flex;
        height: 100%;
        width: 100%;
        padding: unset;
        align-items: center;

        svg {
            color: ${Colour["icon"]};
        }
    }

    &.indicatorLeft {
        justify-content: left;
        padding-left: ${Spacing["spacing-8"]};
    }

    &.indicatorRight {
        justify-content: right;
        padding-right: ${Spacing["spacing-8"]};
    }
`;
