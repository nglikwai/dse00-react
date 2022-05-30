import { createSlice } from '@reduxjs/toolkit'

export interface SearchState {
  open: boolean
  isLogin: boolean
  loginPage: boolean
  confirmPage: boolean
}

const initialState: SearchState = {
  open: false,
  isLogin: false,
  loginPage: false,
  confirmPage: false,
}

export const pageStatusSlice = createSlice({
  name: 'pageStatus',
  initialState,
  reducers: {
    toggleLoginButtonOpen: state => {
      state.open = !state.open
    },
    toggleLoginPageOpen: (state, action) => {
      state.loginPage = action.payload
    },
    setLogin: state => {
      state.isLogin = true
    },
    setLogout: state => {
      state.isLogin = false
    },

    toggleConfirmPageOpen: state => {
      state.confirmPage = !state.confirmPage
    },
  },
})

export const {
  toggleLoginButtonOpen,
  setLogin,
  setLogout,
  toggleLoginPageOpen,
  toggleConfirmPageOpen,
} = pageStatusSlice.actions

export default pageStatusSlice.reducer
