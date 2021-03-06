import { createAsyncThunk, createSlice, current, PayloadAction } from '@reduxjs/toolkit'

import type { AppState, AppThunk } from '../index'


export interface CounterState {
  value: number
  status: 'idle' | 'loading' | 'failed'
}

const initialState: CounterState = {
  value: 0,
  status: 'idle',
}

export const moodLogSlice = createSlice({
  name: 'moodLog',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    setMoodLog: (state,action) =>{
      return action.payload
    },
    setTitle: (state,action)=>{
      state.title = action.payload
    },
    setDescription: (state,action)=>{
      state.description = action.payload
    },
    setMoodvalue: (state,action)=>{
      state.moodvalue = action.payload
    },
    setAllSymptoms: (state,action) =>{
      console.log(action.payload)
      state.symptoms = action.payload
    },
    setSymptom: (state,action) =>{
      // console.log(Object.keys(action.payload)[0])
      let currentState =JSON.parse(JSON.stringify(current(state.symptoms)))
      current(state.symptoms).forEach((symptom,index)=>{
        if(symptom.name==Object.keys(action.payload)[0]){
          // console.log(current(state.symptoms[index]))
          // currentState[index].value = Object.values(action.payload)[0]
          // console.log(currentState[index])
          
          currentState[index].value = Object.values(action.payload)[0]
          // console.log(Object.values(action.payload)[0])
          // current(state.symptoms[index]) = 
        }
      })
      state.symptoms = currentState

      // state.symptoms[Object.keys(action.payload)[0]] = Object.values(action.payload)[0]
    }
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
})

export const { setMoodLog,setTitle,setDescription,setMoodvalue,setAllSymptoms,setSymptom } = moodLogSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectMoodlog = (state: AppState) => state.moodLog

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const incrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectCount(getState())
    if (currentValue % 2 === 1) {
      dispatch(incrementByAmount(amount))
    }
  }

export default moodLogSlice.reducer