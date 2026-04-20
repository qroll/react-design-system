import styled from "styled-components";

import { V3_Spacing } from "../v3_theme";
import * as styles from "./form-label.styles";

export const LabelContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${V3_Spacing["spacing-4"]};
`;

export const ErrorMessageContainer = styled.div`
    display: flex;
    flex: 1;
    margin-right: ${V3_Spacing["spacing-12"]};
    gap: ${V3_Spacing["spacing-4"]};
`;

export const ErrorMessageLabel = styled(styles.ErrorMessage)`
    margin-top: 0;
`;
