import styled from "styled-components";

import { Border, Colour, Font, MediaQuery, Radius } from "../theme";

// =============================================================================
// STYLING
// =============================================================================

export const Wrapper = styled.div`
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

    &.wrapperSolidGrey {
        background: ${Colour["bg-inverse-subtler"]};
        border: ${Border["width-010"]} ${Border.solid} transparent;
        color: ${Colour["text-inverse"]};

        &.wrapperInteractive {
            cursor: pointer;

            @media (hover: hover) {
                &:hover {
                    background: ${Colour["bg-inverse-hover"]};
                }
            }
        }
    }

    /* Solid type - green */
    &.wrapperSolidGreen {
        background: ${Colour["bg-success-strong"]};
        border: ${Border["width-010"]} ${Border.solid} transparent;
        color: ${Colour["text-inverse"]};

        &.wrapperInteractive {
            cursor: pointer;

            @media (hover: hover) {
                &:hover {
                    background: ${Colour["bg-success-strong-hover"]};
                }
            }
        }
    }

    /* Solid type - red */
    &.wrapperSolidRed {
        background: ${Colour["bg-error-strong"]};
        border: ${Border["width-010"]} ${Border.solid} transparent;
        color: ${Colour["text-inverse"]};

        &.wrapperInteractive {
            cursor: pointer;

            @media (hover: hover) {
                &:hover {
                    background: ${Colour["bg-error-strong-hover"]};
                }
            }
        }
    }

    /* Solid type - blue */
    &.wrapperSolidBlue {
        background: ${Colour["bg-info-strong"]};
        border: ${Border["width-010"]} ${Border.solid} transparent;
        color: ${Colour["text-inverse"]};

        &.wrapperInteractive {
            cursor: pointer;

            @media (hover: hover) {
                &:hover {
                    background: ${Colour["bg-info-strong-hover"]};
                }
            }
        }
    }

    /* Solid type - primary */
    &.wrapperSolidPrimary {
        background: ${Colour["bg-primary"]};
        border: ${Border["width-010"]} ${Border.solid} transparent;
        color: ${Colour["text-inverse"]};

        &.wrapperInteractive {
            cursor: pointer;

            @media (hover: hover) {
                &:hover {
                    background: ${Colour["bg-primary-hover"]};
                }
            }
        }
    }

    /* Solid type - yellow */
    &.wrapperSolidYellow {
        background: ${Colour["bg-warning-strong"]};
        border: ${Border["width-010"]} ${Border.solid} transparent;
        color: ${Colour["text-inverse"]};

        &.wrapperInteractive {
            cursor: pointer;

            @media (hover: hover) {
                &:hover {
                    background: ${Colour["bg-warning-strong-hover"]};
                }
            }
        }
    }

    /* Solid type - default (black) */
    &.wrapperSolidBlack {
        background: ${Colour["bg-inverse"]};
        border: ${Border["width-010"]} ${Border.solid} transparent;
        color: ${Colour["text-inverse"]};

        &.wrapperInteractive {
            cursor: pointer;

            @media (hover: hover) {
                &:hover {
                    background: ${Colour["bg-inverse-hover"]};
                }
            }
        }
    }

    /* Outline type - grey */
    &.wrapperOutlineGrey {
        background: ${Colour["bg-strong"]};
        border: ${Border["width-010"]} ${Border.solid}
            ${Colour["border-strong"]};
        color: ${Colour["text-subtle"]};

        &.wrapperInteractive {
            cursor: pointer;

            @media (hover: hover) {
                &:hover {
                    background: ${Colour["bg-hover-neutral-strong"]};
                }
            }
        }
    }

    /* Outline type - green */
    &.wrapperOutlineGreen {
        background: ${Colour["bg-success"]};
        border: ${Border["width-010"]} ${Border.solid}
            ${Colour["border-success"]};
        color: ${Colour["text-success"]};

        &.wrapperInteractive {
            cursor: pointer;

            @media (hover: hover) {
                &:hover {
                    background: ${Colour["bg-success-hover"]};
                }
            }
        }
    }

    /* Outline type - yellow */
    &.wrapperOutlineYellow {
        background: ${Colour["bg-warning"]};
        border: ${Border["width-010"]} ${Border.solid}
            ${Colour["border-warning"]};
        color: ${Colour["text-warning"]};

        &.wrapperInteractive {
            cursor: pointer;

            @media (hover: hover) {
                &:hover {
                    background: ${Colour["bg-warning-hover"]};
                }
            }
        }
    }

    /* Outline type - red */
    &.wrapperOutlineRed {
        background: ${Colour["bg-error"]};
        border: ${Border["width-010"]} ${Border.solid} ${Colour["border-error"]};
        color: ${Colour["text-error"]};

        &.wrapperInteractive {
            cursor: pointer;

            @media (hover: hover) {
                &:hover {
                    background: ${Colour["bg-error-hover"]};
                }
            }
        }
    }

    /* Outline type - blue */
    &.wrapperOutlineBlue {
        background: ${Colour["bg-info"]};
        border: ${Border["width-010"]} ${Border.solid} ${Colour["border-info"]};
        color: ${Colour["text-info"]};

        &.wrapperInteractive {
            cursor: pointer;

            @media (hover: hover) {
                &:hover {
                    background: ${Colour["bg-info-hover"]};
                }
            }
        }
    }

    /* Outline type - primary */
    &.wrapperOutlinePrimary {
        background: ${Colour["bg-primary-subtlest"]};
        border: ${Border["width-010"]} ${Border.solid}
            ${Colour["border-primary"]};
        color: ${Colour["text-primary"]};

        &.wrapperInteractive {
            cursor: pointer;

            @media (hover: hover) {
                &:hover {
                    background: ${Colour["bg-primary-hover"]};
                }
            }
        }
    }

    /* Outline type - default (black) */
    &.wrapperOutlineBlack {
        background: ${Colour.bg};
        border: ${Border["width-010"]} ${Border.solid} ${Colour.border};
        color: ${Colour.text};

        &.wrapperInteractive {
            cursor: pointer;

            @media (hover: hover) {
                &:hover {
                    background: ${Colour["bg-hover-neutral"]};
                }
            }
        }
    }

    ${MediaQuery.MaxWidth.lg} {
        &.wrapperInteractive {
            ${Font["body-md-semibold"]}
            padding: calc(0.5rem - 1px) 1rem;
        }
    }
`;

export const Label = styled.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`;
