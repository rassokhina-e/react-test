import { configureStore } from '@reduxjs/toolkit'
import feetbackCounterReducer from '../src/pages/Posts/components/PostPage/feetbackCounter'

export const store = configureStore({
  reducer: {
    feetbackCounter: feetbackCounterReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
