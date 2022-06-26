import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Tutor } from 'src/types'

import {
  FetchTutorsRequestPayload,
  FetchTutorsSuccessPayload,
  SearchTutorsRequestPayload,
  TutorTypes,
} from './types'

export interface SearchState {
  result: Tutor[]
  fetching: boolean
  filteredResult: Tutor[]
}

const initialState: SearchState = {
  result: [],
  fetching: false,
  filteredResult: [],
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
    [TutorTypes.searchTutorsRequest]: (
      state,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      action: PayloadAction<SearchTutorsRequestPayload>
    ) => {
      state.filteredResult = state.result.filter(
        tutor =>
          tutor.location.includes(action.payload.selectedPlace) &&
          tutor.teachingSubjectsPrice[0] <= action.payload.selectedPrice &&
          tutor.teachingSubjects.includes(action.payload.selectedSubject) &&
          ((action.payload.selectedGenderIndex === 1 && tutor.gender === 'm') ||
            (action.payload.selectedGenderIndex === 2 &&
              tutor.gender === 'f') ||
            (action.payload.selectedGenderIndex === 0 &&
              (tutor.gender === 'm' || tutor.gender === 'f')))
      )
    },
    [TutorTypes.searchTutorsSucceed]: (
      state,
      action: PayloadAction<FetchTutorsSuccessPayload>
    ) => {
      state.fetching = false
      state.result = action.payload.tutors
    },
    [TutorTypes.searchTutorsFailed]: state => {
      state.fetching = false
    },
  },
})

export const {
  fetchTutorsRequest,
  fetchTutorsSucceed,
  fetchTutorsFailed,
  searchTutorsRequest,
  searchTutorsSucceed,
  searchTutorsFailed,
} = tutorSlice.actions

export default tutorSlice.reducer
