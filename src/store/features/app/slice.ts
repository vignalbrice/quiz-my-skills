import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { appSliceName, initialState } from "./constants"
import { ThemeType } from "@/theme/theme"

export const appSlice = createSlice({
  name: appSliceName,
  initialState,
  reducers: {
    setCurrentTheme: (state) => {
      state.currentTheme = state.currentTheme === ThemeType.light ? ThemeType.dark : ThemeType.light
    },
    setAnswers: (state, action: PayloadAction<string | null>) => {
      state.answers = action.payload ? [...state.answers, action.payload] : []
    },
    setScore: (state, action: PayloadAction<number>) => {
      state.score = action.payload
    },
    setSelectedOption: (state, action: PayloadAction<string | null>) => {
      state.selectedOption = action.payload;
    },
    setCurrentIndex: (state, action: PayloadAction<number>) => {
      state.currentIndex = action.payload;
    },
    setCurrentOption: (state, action: PayloadAction<number>) => {
      state.currentOption = action.payload;
    },
    setIsShowNextBtn: (state, action: PayloadAction<boolean>) => {
      state.isShowNextBtn = action.payload;
    },
    setSubject: (state, action: PayloadAction<string | null>) => {
      state.subject = action.payload;
    },
    setProgress: (state, action: PayloadAction<number>) => {
      state.progress = state.progress + action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const {
  setCurrentTheme,
  setSelectedOption,
  setCurrentIndex,
  setAnswers,
  setScore,
  setCurrentOption,
  setIsShowNextBtn,
  setSubject,
  setProgress
} = appSlice.actions

export default appSlice.reducer
