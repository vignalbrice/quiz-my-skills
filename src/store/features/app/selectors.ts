import { RootState } from "@/store/store";
import { ThemeType } from "@/theme/theme";

export const appSelector = (state: RootState) => state.app;
export const themeSelector = (state: RootState) => state.app.currentTheme;
export const isDarkThemeSelector = (state: RootState) =>
  state.app.currentTheme === ThemeType.dark;
export const isLightThemeSelector = (state: RootState) =>
  state.app.currentTheme === ThemeType.light;
export const progressSelector = (state: RootState) => state.app.progress;