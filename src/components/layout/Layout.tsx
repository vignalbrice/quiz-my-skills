import useDeviceWidth from "@/hooks/useDeviceWidth";
import React from "react";

// Importing all created components
import NavBar from "../common/Navbar";
import styled from "styled-components";
import theme, { ThemeType } from "@/theme/theme";
import { useAppSelector } from "@/store/hooks";
import { appSelector } from "@/store/features/app/selectors";
import getDeviceSize from "@/utils/getDeviceSize";
import { DeviceSize } from "@/types/DeviceSize";
import { motion } from "framer-motion";

type LayoutProps = {
  children: React.ReactNode;
};

// Pass the child props
export default function Layout({ children }: LayoutProps) {
  const width = useDeviceWidth();
  const { currentTheme } = useAppSelector(appSelector);

  function getBackgroundByDeviceSize(): string {
    switch (getDeviceSize(width)) {
      case DeviceSize.Mobile:
        return new URL(
          `../../assets/images/pattern-background-mobile-${currentTheme}.svg`,
          import.meta.url
        ).href;
      case DeviceSize.Tablet:
        return new URL(
          `../../assets/images/pattern-background-tablet-${currentTheme}.svg`,
          import.meta.url
        ).href;
      case DeviceSize.Desktop:
        return new URL(
          `../../assets/images/pattern-background-desktop-${currentTheme}.svg`,
          import.meta.url
        ).href;
      default:
        return new URL(
          `../../assets/images/pattern-background-desktop-${currentTheme}.svg`,
          import.meta.url
        ).href;
    }
  }

  return (
    <StyledLayout
      className="max-w-screen-sm:py-4 px-6 lg:py-20"
      style={{
        backgroundImage: `url(${getBackgroundByDeviceSize()})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      animate={{
        backgroundColor: theme[currentTheme as ThemeType].color.primary,
        transition: {
          duration: 0.5,
          ease: [0.075, 0.82, 0.165, 1],
        },
      }}
    >
      <NavBar />
      {children}
    </StyledLayout>
  );
}

const StyledLayout = styled(motion.div)`
  width: 100%;
  height: 100%;
`;
