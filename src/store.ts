import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../src/pages/Posts/components/PostPage/postState'
import userReducer from '../src/pages/Users/components/UsersPage/userState'

export const store = configureStore({
  reducer: {
    counterReducer,
    userReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
