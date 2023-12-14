import Colors from "./colors";

export enum ThemeType {
  dark = "dark",
  light = "light",
}


const darktheme = {
  name: ThemeType.dark,
  primary: Colors.navy,
  secondary: Colors.darkNavy,
  subtitle: Colors.lightBluish,
  text: Colors.white,
  option: Colors.darkNavy,
  button: Colors.purple,
  background: Colors.navy,
};

const lightTheme = {
  name: ThemeType.light,
  primary: Colors.lightGray,
  secondary: Colors.grayNavy,
  subtitle: Colors.lightBluish,
  text: Colors.darkNavy,
  option: Colors.white,
  button: Colors.purple,
  background: Colors.white,
};


const defaultTheme = {
  fontSize: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "28px",
    xxl: "36px",
    ["3xl"]: "64px",
    ["4xl"]: "144px",
  },
  borderRadius: {
    small: "8px",
    medium: "10px",
    large: "24px",
    circle: "50%",
  },
};


const theme: ThemeProps = {
  [ThemeType.dark]: {
    color: darktheme,
    ...defaultTheme,
  },
  [ThemeType.light]: {
    color: lightTheme,
    ...defaultTheme,
  },
};


export type Theme = {
  color: typeof lightTheme | typeof darktheme
};

export type ThemeProps = {
  [key in ThemeType]: {
    color: typeof darktheme;
    fontSize: typeof defaultTheme.fontSize;
    borderRadius: typeof defaultTheme.borderRadius;
  };
}


export default theme;