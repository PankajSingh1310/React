import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../feautres/CounterSlice.js'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})