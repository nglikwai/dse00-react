import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Cutoff } from 'src/types'

import {
  CutoffTypes,
  FetchCutoffsRequestPayload,
  FetchCutoffsSuccessPayload,
} from './types'

export interface SearchState {
  result: Cutoff[]
  fetching: boolean
}

const initialState: SearchState = {
  result: [],
  fetching: false,
}

export const cutoffSlice = createSlice({
  name: 'cutoff',
  initialState,
  reducers: {
    [CutoffTypes.fetchCutoffsRequest]: (
      state,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      action: PayloadAction<FetchCutoffsRequestPayload>
    ) => {
      state.fetching = true
    },
    [CutoffTypes.fetchCutoffsSucceed]: (
      state,
      action: PayloadAction<FetchCutoffsSuccessPayload>
    ) => {
      state.fetching = false
      state.result = action.payload.cutoffs
    },
    [CutoffTypes.fetchCutoffsFailed]: state => {
      state.fetching = false
    },
  },
})

export const {
  fetchCutoffsRequest,
  fetchCutoffsSucceed,
  fetchCutoffsFailed,
} = cutoffSlice.actions

export default cutoffSlice.reducer
