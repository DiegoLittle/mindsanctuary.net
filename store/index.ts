import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import counterReducer from '../store/slices/counterSlice'
import moodlogReducer from '../store/slices/moodLogSlice'
import settingsReducer from '../store/slices/settingsSlice'

export function makeStore() {
  return configureStore({
    reducer: { counter: counterReducer,moodLog:moodlogReducer,settings:settingsReducer },
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store