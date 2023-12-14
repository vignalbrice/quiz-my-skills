import { ThemeType } from "@/theme/theme"


export interface AppState {
  currentTheme: string;
  answers: string[];
  score: number;
  selectedOption: string | null;
  currentIndex: number;
  currentOption: number;
  isShowNextBtn: boolean;
  subject: string | null;
  progress: number;
}

export const initialState: AppState = {
  currentTheme: ThemeType.light,
  answers: [],
  score: 0,
  selectedOption: null,
  currentIndex: -1,
  currentOption: 0,
  isShowNextBtn: false,
  subject: null,
  progress: 0,
}

export const appSliceName = "app" as const
