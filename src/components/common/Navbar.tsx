import React, { useState } from "react";
import Toggle from "@/components/ui/Toggle";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setCurrentTheme } from "@/store/features/app/slice";
import { RubikMediumTitle } from "@/theme/typography";
import Image from "../ui/Image";
import { appSelector } from "@/store/features/app/selectors";
import data from "@/mocks/data.json";
import getBackgroundIconByName from "@/utils/getBackgroundIconByName";
import { ThemeType } from "@/theme/theme";

const NavBar = () => {
  const [checked, setChecked] = useState(false);
  const { subject, currentTheme } = useAppSelector(appSelector);
  const invertedTheme =
    currentTheme === ThemeType.light ? ThemeType.dark : ThemeType.light;
  const selectedSubject = data.quizzes.find((item) => item.title === subject);
  const dispatch = useAppDispatch();

  const toggleTheme = () => {
    dispatch(setCurrentTheme());
    setChecked((prev) => !prev);
  };

  const getMoonIcon = () => {
    return new URL(
      `../../assets/images/icon-moon-${invertedTheme}.svg`,
      import.meta.url
    ).href;
  };
  const getSunIcon = () => {
    return new URL(
      `../../assets/images/icon-sun-${invertedTheme}.svg`,
      import.meta.url
    ).href;
  };

  return (
    <div className="flex justify-between h-20 lg:max-w-6xl lg:w-full lg:m-auto lg:mb-14">
      <div className="left-nav flex gap-2 items-center">
        {subject && selectedSubject && (
          <React.Fragment>
            <StyledBox
              className="flex items-center p-2"
              bg={getBackgroundIconByName(selectedSubject.title)}
            >
              <Image
                className="w-7 h-7"
                src={selectedSubject.icon}
                alt={selectedSubject.title}
              />
            </StyledBox>
            <RubikMediumTitle>{subject}</RubikMediumTitle>
          </React.Fragment>
        )}
      </div>
      <div className="right-nav flex items-center gap-3">
        <Image className="w-8 h-8" src={getSunIcon()} alt="icon-sun-dark" />
        <Toggle value={checked} onClick={toggleTheme} className="w-12" />
        <Image className="w-7 h-7" src={getMoonIcon()} alt="icon-moon-dark" />
      </div>
    </div>
  );
};

const StyledBox = styled.div<{
  bg: string;
}>`
  background: ${({ bg }) => bg};
  border-radius: 4px;
`;

export default NavBar;
