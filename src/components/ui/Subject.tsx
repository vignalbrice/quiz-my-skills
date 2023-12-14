import { Quiz } from "@/types/Quiz";
import React from "react";
import Card from "./Card";
import Image from "./Image";
import styled from "styled-components";
import { RubikMediumText } from "@/theme/typography";
import { useAppDispatch } from "@/store/hooks";
import { setCurrentIndex, setSubject } from "@/store/features/app/slice";
import getBackgroundIconByName from "@/utils/getBackgroundIconByName";
import { Theme } from "@/theme/theme";

type SubjectProps = {
  subject: Quiz;
  i: number;
};

const Subject = ({ subject, i }: SubjectProps) => {
  const dispatch = useAppDispatch();

  function onSelectedSubject() {
    dispatch(setCurrentIndex(i));
    dispatch(setSubject(subject.title));
  }

  return (
    <Card onClick={onSelectedSubject} className="cursor-pointer">
      <CardContent>
        <IconContainer
          style={{
            background: getBackgroundIconByName(subject.title),
          }}
        >
          <Image src={subject.icon} alt={subject.title} className="w-7 h-7" />
        </IconContainer>
        <Title>{subject.title}</Title>
      </CardContent>
    </Card>
  );
};
const CardContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled(RubikMediumText)<{
  theme: Theme;
}>`
  color: ${(p) => p.theme.color.text}!important;
`;

export default Subject;
