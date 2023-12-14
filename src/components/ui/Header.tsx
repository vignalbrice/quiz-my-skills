import { themeSelector } from "@/store/features/app/selectors";
import { useAppSelector } from "@/store/hooks";
import Colors from "@/theme/colors";
import { ThemeType } from "@/theme/theme";
import React from "react";
import styled from "styled-components";
import Typography from "./Typography";

const Header = () => {
  const currentTheme = useAppSelector(themeSelector);

  return (
    <div className="header text-left w-full mb-6">
      <div className="flex flex-col mb-3 lg:mb-9">
        <Title tag="h1" type="light" className="max-md:text-4xl text-6xl">
          Welcome to the
        </Title>
        <SubTitle tag="h2" type="medium" className="max-md:text-4xl text-6xl">
          Frontend Quiz!
        </SubTitle>
      </div>
      <div>
        <Text
          tag="p"
          type="light"
          className="text-base lg:text-lg"
          style={{
            color:
              currentTheme === ThemeType.dark
                ? Colors.lightBluish
                : Colors.grayNavy,
          }}
        >
          Pick a subject to get started.
        </Text>
      </div>
    </div>
  );
};

const Title = styled(Typography)``;
const SubTitle = styled(Typography)``;

const Text = styled(Typography)``;

export default Header;
