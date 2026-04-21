import { css } from "@linaria/core";

import { Border, Colour, Font, MediaQuery, Radius } from "../theme";

// =============================================================================
// STYLING
// =============================================================================

export const wrapperInteractive = css`
    cursor: pointer;

    ${MediaQuery.MaxWidth.lg} {
        ${Font["body-md-semibold"]}
        padding: calc(0.5rem - 1px) 1rem;
    }
`;

export const wrapper = css`
    border-radius: ${Radius["sm"]};
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${Font["body-xs-semibold"]}
    transition: all 200ms ease;
    cursor: default;
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        flex-shrink: 0;
    }
`;

export const wrapperSolidGrey = css`
    background: ${Colour["bg-inverse-subtler"]};
    border: ${Border["width-010"]} ${Border.solid} transparent;
    color: ${Colour["text-inverse"]};

    &.${wrapperInteractive} {
        @media (hover: hover) {
            &:hover {
                background: ${Colour["bg-inverse-hover"]};
            }
        }
    }
`;

export const wrapperSolidGreen = css`
    background: ${Colour["bg-success-strong"]};
    border: ${Border["width-010"]} ${Border.solid} transparent;
    color: ${Colour["text-inverse"]};

    &.${wrapperInteractive} {
        @media (hover: hover) {
            &:hover {
                background: ${Colour["bg-success-strong-hover"]};
            }
        }
    }
`;

export const wrapperSolidYellow = css`
    background: ${Colour["bg-warning-strong"]};
    border: ${Border["width-010"]} ${Border.solid} transparent;
    color: ${Colour["text-inverse"]};

    &.${wrapperInteractive} {
        @media (hover: hover) {
            &:hover {
                background: ${Colour["bg-warning-strong-hover"]};
            }
        }
    }
`;

export const wrapperSolidRed = css`
    background: ${Colour["bg-error-strong"]};
    border: ${Border["width-010"]} ${Border.solid} transparent;
    color: ${Colour["text-inverse"]};

    &.${wrapperInteractive} {
        @media (hover: hover) {
            &:hover {
                background: ${Colour["bg-error-strong-hover"]};
            }
        }
    }
`;

export const wrapperSolidBlue = css`
    background: ${Colour["bg-info-strong"]};
    border: ${Border["width-010"]} ${Border.solid} transparent;
    color: ${Colour["text-inverse"]};

    &.${wrapperInteractive} {
        @media (hover: hover) {
            &:hover {
                background: ${Colour["bg-info-strong-hover"]};
            }
        }
    }
`;

export const wrapperSolidPrimary = css`
    background: ${Colour["bg-primary"]};
    border: ${Border["width-010"]} ${Border.solid} transparent;
    color: ${Colour["text-inverse"]};

    &.${wrapperInteractive} {
        @media (hover: hover) {
            &:hover {
                background: ${Colour["bg-primary-hover"]};
            }
        }
    }
`;

export const wrapperSolidBlack = css`
    background: ${Colour["bg-inverse"]};
    border: ${Border["width-010"]} ${Border.solid} transparent;
    color: ${Colour["text-inverse"]};

    &.${wrapperInteractive} {
        @media (hover: hover) {
            &:hover {
                background: ${Colour["bg-inverse-hover"]};
            }
        }
    }
`;

export const wrapperOutlineGrey = css`
    background: ${Colour["bg-strong"]};
    border: ${Border["width-010"]} ${Border.solid} ${Colour["border-strong"]};
    color: ${Colour["text-subtle"]};

    &.${wrapperInteractive} {
        @media (hover: hover) {
            &:hover {
                background: ${Colour["bg-hover-neutral-strong"]};
            }
        }
    }
`;

export const wrapperOutlineGreen = css`
    background: ${Colour["bg-success"]};
    border: ${Border["width-010"]} ${Border.solid} ${Colour["border-success"]};
    color: ${Colour["text-success"]};

    &.${wrapperInteractive} {
        @media (hover: hover) {
            &:hover {
                background: ${Colour["bg-success-hover"]};
            }
        }
    }
`;

export const wrapperOutlineYellow = css`
    background: ${Colour["bg-warning"]};
    border: ${Border["width-010"]} ${Border.solid} ${Colour["border-warning"]};
    color: ${Colour["text-warning"]};

    &.${wrapperInteractive} {
        @media (hover: hover) {
            &:hover {
                background: ${Colour["bg-warning-hover"]};
            }
        }
    }
`;

export const wrapperOutlineRed = css`
    background: ${Colour["bg-error"]};
    border: ${Border["width-010"]} ${Border.solid} ${Colour["border-error"]};
    color: ${Colour["text-error"]};

    &.${wrapperInteractive} {
        @media (hover: hover) {
            &:hover {
                background: ${Colour["bg-error-hover"]};
            }
        }
    }
`;

export const wrapperOutlineBlue = css`
    background: ${Colour["bg-info"]};
    border: ${Border["width-010"]} ${Border.solid} ${Colour["border-info"]};
    color: ${Colour["text-info"]};

    &.${wrapperInteractive} {
        @media (hover: hover) {
            &:hover {
                background: ${Colour["bg-info-hover"]};
            }
        }
    }
`;

export const wrapperOutlinePrimary = css`
    background: ${Colour["bg-primary-subtlest"]};
    border: ${Border["width-010"]} ${Border.solid} ${Colour["border-primary"]};
    color: ${Colour["text-primary"]};

    &.${wrapperInteractive} {
        @media (hover: hover) {
            &:hover {
                background: ${Colour["bg-primary-hover"]};
            }
        }
    }
`;

export const wrapperOutlineBlack = css`
    background: ${Colour.bg};
    border: ${Border["width-010"]} ${Border.solid} ${Colour.border};
    color: ${Colour.text};

    &.${wrapperInteractive} {
        @media (hover: hover) {
            &:hover {
                background: ${Colour["bg-hover-neutral"]};
            }
        }
    }
`;

export const label = css`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`;
