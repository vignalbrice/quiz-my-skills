import colors from "@/theme/colors";
import styled from "styled-components";
import Button from "../Button";

export const SubmitButton = styled(Button)`
  background: ${colors.purple};
  color: ${colors.white}!important;
  font-weight: 500;
  height: 56px;
  border-radius: 12px;
`;
