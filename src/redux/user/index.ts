import { createSlice } from '@reduxjs/toolkit'
import { User } from 'src/types'

const initialState: User = {
  reserveNumber: [],
  isTutor: false,
  fetching: false,
  _id: '',
  name: '',
  role: '',
  email: '',
  createdAt: '',
  avatar: { public_id: '', url: '' },
  isLogin: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    confirmReserve: (state, action) => {
      state.reserveNumber = [...state.reserveNumber, action.payload]
    },
    changeIsTutor: state => {
      state.isTutor = !state.isTutor
    },
    loadUserRequest: state => {
      state.fetching = true
    },
    loadUserSuccess: (state, action) => {
      state.isLogin = true
      state.fetching = false
      state._id = action.payload.user.user._id
      state.email = action.payload.user.user.email
      state.role = action.payload.user.user.role
      state.name = action.payload.user.user.name
      state.createdAt = action.payload.user.user.createdAt
      state.avatar = action.payload.user.user.avatar
    },
    loadUserFail: state => {
      state.fetching = false
    },
    logout: state => {
      state.isLogin = false
    },
  },
})

export const {
  confirmReserve,
  changeIsTutor,
  loadUserRequest,
  loadUserSuccess,
  logout,
  loadUserFail,
} = userSlice.actions

export default userSlice.reducer
