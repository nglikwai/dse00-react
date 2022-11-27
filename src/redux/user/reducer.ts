import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { LoginPayload, SetIsDownPayload, UserTypes } from './types'

export interface SearchState {
  isDarkmode: boolean
  isdown: boolean
  user?: {}
}

const initialState: SearchState = {
  isDarkmode: false,
  isdown: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    [UserTypes.switchDarkMode]: state => {
      state.isDarkmode = !state.isDarkmode
    },
    [UserTypes.setIsdown]: (state, action: PayloadAction<SetIsDownPayload>) => {
      state.isdown = action.payload
    },
    [UserTypes.login]: (state, action: PayloadAction<LoginPayload>) => {
      state.user = {
        email: action.payload.email,
        password: action.payload.password,
        role:
          action.payload.email === 'admin' &&
          action.payload.password === 'dse00com'
            ? 'admin'
            : 'member',
      }
    },
  },
})

export const { switchDarkMode, setIsdown, login } = userSlice.actions

export const userReducer = userSlice.reducer
