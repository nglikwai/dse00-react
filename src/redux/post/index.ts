import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Post } from 'src/types'

import {
  FetchPostsRequestPayload,
  FetchPostsSuccessPayload,
  PostTypes,
} from './types'

export interface SearchState {
  result: Post[]
  fetching: boolean
  currentPage: number
}

const initialState: SearchState = {
  result: [],
  fetching: false,
  currentPage: 1,
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    [PostTypes.fetchPostsRequest]: (
      state,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      action: PayloadAction<FetchPostsRequestPayload>
    ) => {
      state.fetching = true
    },
    [PostTypes.fetchPostsSucceed]: (
      state,
      action: PayloadAction<FetchPostsSuccessPayload>
    ) => {
      state.fetching = false
      state.result = state.result.concat(action.payload.posts)
      state.currentPage += 1
    },
    [PostTypes.fetchPostsFailed]: state => {
      state.fetching = false
    },
  },
})

export const {
  fetchPostsRequest,
  fetchPostsSucceed,
  fetchPostsFailed,
} = postSlice.actions

export default postSlice.reducer
