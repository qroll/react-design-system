import styled from "styled-components";

import { Border, Colour, Spacing } from "../theme/tokens";
import { Typography } from "../typography";

export const Section = styled.ul`
    padding: ${Spacing["spacing-8"]} 0;
    margin: 0;
    list-style: none;

    &.menuSectionDivider {
        border-top: ${Border["width-010"]} ${Border["solid"]}
            ${Colour["border"]};
    }
`;

export const Label = styled(Typography.BodyXS)`
    margin: 0 ${Spacing["spacing-16"]} ${Spacing["spacing-8"]};
    color: ${Colour["text-subtler"]};
`;
