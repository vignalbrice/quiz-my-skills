import React from "react";
import Image from "./Image";
import getBackgroundIconByName from "@/utils/getBackgroundIconByName";
import { RubikMediumTitle } from "@/theme/typography";
import { ScoreCard, ScoreSubject, ScoreTitle } from "./Score";
import styled from "styled-components";
import { appSelector } from "@/store/features/app/selectors";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setAnswers,
  setCurrentIndex,
  setCurrentOption,
  setProgress,
  setScore,
  setSelectedOption,
} from "@/store/features/app/slice";
import { Quiz } from "@/types/Quiz";
import { SubmitButton } from "./SubmitButton";
import Typography from "./Typography";
import colors from "@/theme/colors";

type ResultProps = {
  subject: string | null;
  totalQuestions: number;
  selectedSubject: Quiz;
};

const Result: React.FC<ResultProps> = ({
  subject,
  selectedSubject,
  totalQuestions,
}) => {
  const { score } = useAppSelector(appSelector);
  const dispatch = useAppDispatch();

  function onPlayAgain() {
    dispatch(setCurrentIndex(-1));
    dispatch(setCurrentOption(0));
    dispatch(setSelectedOption(null));
    dispatch(setScore(0));
    dispatch(setAnswers(null));
    dispatch(setProgress(10));
  }

  return (
    <div className="flex flex-col w-full items-center justify-center gap-4 result-card">
      <ScoreCard className="score-card w-full !h-96">
        <ScoreSubject>
          <StyledBox
            className="flex items-center p-2"
            style={{
              backgroundColor: getBackgroundIconByName(selectedSubject.title),
            }}
          >
            <Image
              className="w-7 h-7"
              src={selectedSubject.icon}
              alt={selectedSubject.title}
            />
          </StyledBox>
          <RubikMediumTitle>{subject}</RubikMediumTitle>
        </ScoreSubject>
        <ScoreTitle>{score}</ScoreTitle>
        <ScoreText
          tag="p"
          type="light"
          style={{
            color: colors.lightBluish,
          }}
          className="text-base lg:text-lg"
        >
          out of {totalQuestions}
        </ScoreText>
      </ScoreCard>
      <SubmitButton onClick={onPlayAgain} className="w-full">
        <Text
          tag="p"
          type="italic"
          className="text-base lg:text-lg"
          style={{
            color: colors.white,
          }}
        >
          Play Again
        </Text>
      </SubmitButton>
    </div>
  );
};

const StyledBox = styled.div`
  border-radius: 4px;
`;

const ScoreText = styled(Typography)``;

const Text = styled(Typography)``;

export default Result;
