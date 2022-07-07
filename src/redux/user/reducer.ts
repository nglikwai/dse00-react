import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { SetIsDownPayload, UserTypes } from './types'

export interface SearchState {
  isDarkmode: boolean
  isdown: boolean
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
  },
})

export const { switchDarkMode, setIsdown } = userSlice.actions

export const userReducer = userSlice.reducer
