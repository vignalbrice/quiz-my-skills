import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { ReactComponent as ErrorIcon } from "@/assets/images/icon-error.svg";
import { ReactComponent as CheckIcon } from "@/assets/images/icon-correct.svg";
import { useAppSelector } from "@/store/hooks";

import { appSelector } from "@/store/features/app/selectors";
import { Theme } from "@/theme/theme";
import Colors from "@/theme/colors";
import Typography from "./Typography";

type CardOptionProps = {
  selectedOption: string | null;
  onSelectedOption: (option: string) => void;
  option: string;
  answer: string;
  i: number;
};

enum OptionColor {
  Green = "green",
  Red = "red",
  Purple = "purple",
  Default = "",
}

const Option = ({
  answer,
  option,
  i,
  onSelectedOption,
  selectedOption,
}: CardOptionProps) => {
  const isShowNextBtn = useAppSelector(appSelector).isShowNextBtn;

  function getCSSPropertyByColor(color: string) {
    switch (color) {
      case OptionColor.Green:
        return {
          background: Colors.green,
          color: Colors.white,
        };
      case OptionColor.Red:
        return {
          background: Colors.red,
          color: Colors.lightGray,
        };
      case OptionColor.Purple:
        return {
          background: Colors.purple,
          color: Colors.lightGray,
        };
      default:
        return {
          background: Colors.lightGray,
          color: Colors.grayNavy,
        };
    }
  }

  function getCSSPropertyByAnswer(item: string) {
    if (isShowNextBtn && answer === item) {
      return getCSSPropertyByColor(OptionColor.Green);
    } else if (selectedOption === item && isShowNextBtn) {
      return getCSSPropertyByColor(OptionColor.Red);
    } else if (selectedOption === item && !isShowNextBtn) {
      return getCSSPropertyByColor(OptionColor.Purple);
    }
    return getCSSPropertyByColor(OptionColor.Default);
  }

  function getAlphabetByIndex(index: number) {
    return String.fromCharCode(65 + index);
  }
  return (
    <Card
      onClick={() => onSelectedOption(option)}
      style={{
        cursor: "pointer",
        border: selectedOption
          ? `3px solid ${getCSSPropertyByAnswer(option).background}`
          : "none",
      }}
    >
      <CardContent>
        <CardContentLeft>
          <IconContainer
            style={{
              background: getCSSPropertyByAnswer(option).background,
            }}
          >
            <Alphabet
              tag="p"
              type="medium"
              className="text-lg"
              style={{
                color: getCSSPropertyByAnswer(option).color,
              }}
            >
              {getAlphabetByIndex(i)}
            </Alphabet>
          </IconContainer>
          <Text tag="p" type="medium" className="lg:text-lg">
            {option}
          </Text>
        </CardContentLeft>
        <CardContentRight>
          {isShowNextBtn &&
            (selectedOption === option && selectedOption !== answer ? (
              <ErrorIcon />
            ) : (
              answer === option && <CheckIcon />
            ))}
        </CardContentRight>
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

const CardContentLeft = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-grow: 1;
`;

const Alphabet = styled(Typography)<{
  theme: Theme;
}>`
  color: ${Colors.grayNavy};
`;

const Text = styled(Typography)``;

const CardContentRight = styled.div``;
export default Option;
