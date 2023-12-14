import { appSelector } from "@/store/features/app/selectors";
import { useAppSelector } from "@/store/hooks";
import Colors from "@/theme/colors";
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import theme, { ThemeType } from "@/theme/theme";

const ProgressBar = () => {
  const { progress, currentTheme } = useAppSelector(appSelector);
  console.log(theme[currentTheme as ThemeType].color.secondary);
  return (
    <StyledProgressBarContainer
      className="progress-bar__container"
      animate={{
        backgroundColor:
          currentTheme === ThemeType.dark ? Colors.darkNavy : Colors.white,
        transition: {
          duration: 0.5,
          ease: [0.075, 0.82, 0.165, 1],
        },
      }}
    >
      <StyledProgressBar
        className="progress-bar__progress"
        progress={progress}
        transition={{ duration: 0.5 }}
        animate={{ width: `${progress}%` }}
      ></StyledProgressBar>
    </StyledProgressBarContainer>
  );
};

const StyledProgressBarContainer = styled(motion.div)`
  width: 100%;
  height: 8px;
  display: flex;
  align-items: center;
  border-radius: 4px;
`;

const StyledProgressBar = styled(motion.div)<{
  progress: number;
}>`
  height: 80%;
  background-color: ${Colors.purple};
  margin: auto 0;
  border-radius: 4px;
  width: ${(p) => p.progress}%;
`;

export default ProgressBar;
