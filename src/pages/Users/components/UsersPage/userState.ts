import { createSlice } from '@reduxjs/toolkit'

export interface UserState {
  user: User
}

type User = {
  name: string;
  age: number | null
}

const initialState: UserState = {
  user: {
    name: '',
    age: null
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeUserName: (state, payload) => {
      state.user.name = payload.payload
    }
  },
})

export const { changeUserName } = userSlice.actions

export default userSlice.reducer
