import { createSlice } from '@reduxjs/toolkit'

import { UserTypes } from './types'

export interface SearchState {
  isDarkmode: boolean
}

const initialState: SearchState = {
  isDarkmode: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    [UserTypes.switchDarkMode]: state => {
      state.isDarkmode = !state.isDarkmode
    },
  },
})

export const { switchDarkMode } = userSlice.actions

export default userSlice.reducer
