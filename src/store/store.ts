import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { appSlice } from "./features/app/slice"

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
