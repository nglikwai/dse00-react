import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Tutor } from 'src/types'

import {
  FetchTutorsRequestPayload,
  FetchTutorsSuccessPayload,
  TutorTypes,
} from './types'

export interface SearchState {
  result: Tutor[]
  fetching: boolean
}

const initialState: SearchState = {
  result: [],
  fetching: false,
}

export const tutorSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    [TutorTypes.fetchTutorsRequest]: (
      state,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      action: PayloadAction<FetchTutorsRequestPayload>
    ) => {
      state.fetching = true
    },
    [TutorTypes.fetchTutorsSucceed]: (
      state,
      action: PayloadAction<FetchTutorsSuccessPayload>
    ) => {
      state.fetching = false
      state.result = action.payload.tutors
    },
    [TutorTypes.fetchTutorsFailed]: state => {
      state.fetching = false
    },
  },
})

export const {
  fetchTutorsRequest,
  fetchTutorsSucceed,
  fetchTutorsFailed,
} = tutorSlice.actions

export default tutorSlice.reducer
