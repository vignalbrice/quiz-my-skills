import colors from "@/theme/colors";
import { RubikLightText, RubikMediumTitle } from "@/theme/typography";
import styled from "styled-components";
import Card from "./Card";

export const ScoreCard = styled(Card)`
  background: ${({ theme }) => theme.color.color};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

export const ScoreSubject = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ScoreTitle = styled(RubikMediumTitle)`
  font-size: 88px;
  line-height: 100%;
`;

export const ScoreText = styled(RubikLightText)`
  font-size: 18px;
  line-height: 100%;
  color: ${colors.grayNavy};
`;
