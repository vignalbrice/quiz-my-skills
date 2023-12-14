import React from "react";
import styled from "styled-components";
import { Theme } from "@/theme/theme";

type ContainerProps = {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <StyledContainer className="flex lg:flex-row lg:gap-44 lg:max-w-6xl  lg:w-full lg:m-auto flex-col lg:items-start items-center mt-9">
      {children}
    </StyledContainer>
  );
};

const StyledContainer = styled.div<{
  theme: Theme;
}>``;
export default Container;
