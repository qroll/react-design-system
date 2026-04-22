import styled from "styled-components";

import {
    Border,
    Breakpoint,
    Colour,
    MediaQuery,
    Radius,
    Shadow,
} from "../theme/tokens";

export const tokens = {
    panel: {
        maxHeight: "--fds-internal-menu-panel-maxHeight",
        overflow: "--fds-internal-menu-panel-overflow",
    },
} as const;

export const MenuPanel = styled.div`
    border-radius: ${Radius["md"]};
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    background: ${Colour["bg"]};
    box-shadow: ${Shadow["md-subtle"]};

    ${tokens.panel.maxHeight}: initial;
    ${tokens.panel.overflow}: initial;

    --x-spacing: 0px;
    --available-width: calc(100vw - var(--x-spacing) * 2);

    ${MediaQuery.MaxWidth.sm} {
        --x-spacing: ${Breakpoint["sm-margin"]}px;
    }

    ${MediaQuery.MaxWidth.xs} {
        --x-spacing: ${Breakpoint["xs-margin"]}px;
    }

    ${MediaQuery.MaxWidth.xxs} {
        --x-spacing: ${Breakpoint["xxs-margin"]}px;
    }

    min-width: min(15rem, var(--available-width));
    max-width: min(24rem, var(--available-width));
    max-height: var(${tokens.panel.maxHeight});
    overflow-y: var(${tokens.panel.overflow});

    &:focus {
        outline: none;
    }

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${Colour["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${Radius["full"]};
        background-clip: padding-box;
    }
`;
