import React from "react";
import Option from "./Option";
import { appSelector } from "@/store/features/app/selectors";
import { setSelectedOption } from "@/store/features/app/slice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

type OptionListProps = {
  options: string[];
  answer: string;
};

const OptionList = ({ options, answer }: OptionListProps) => {
  const dispatch = useAppDispatch();
  const selectedOption = useAppSelector(appSelector).selectedOption;

  function onSelectedOption(option: string) {
    if (selectedOption) {
      return;
    }
    dispatch(setSelectedOption(option));
  }

  return (
    <React.Fragment>
      {options.map((option, i) => (
        <Option
          i={i}
          key={`${option}-${i}`}
          answer={answer}
          option={option}
          onSelectedOption={onSelectedOption}
          selectedOption={selectedOption}
        />
      ))}
    </React.Fragment>
  );
};

export default OptionList;
