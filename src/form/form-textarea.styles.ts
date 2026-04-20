import styled from "styled-components";

import { Spacing } from "../theme";
import * as styles from "./form-label.styles";

export const LabelContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${Spacing["spacing-4"]};
`;

export const ErrorMessageContainer = styled.div`
    display: flex;
    flex: 1;
    margin-right: ${Spacing["spacing-12"]};
    gap: ${Spacing["spacing-4"]};
`;

export const ErrorMessageLabel = styled(styles.ErrorMessage)`
    margin-top: 0;
`;
