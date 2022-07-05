import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Post } from 'src/types'

import {
  FetchPostsRequestPayload,
  FetchPostsSuccessPayload,
  PostRequestPayload,
  PostSucceedPayload,
  PostTypes,
} from './types'

export interface SearchState {
  result: Post[]
  fetching: boolean
  currentPage: number
  status: string
}

const initialState: SearchState = {
  result: [],
  fetching: false,
  currentPage: 3,
  status: '',
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
    [PostTypes.postRequest]: (
      state,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      action: PayloadAction<PostRequestPayload>
    ) => {
      state.fetching = true
    },
    [PostTypes.postSucceed]: (
      state,
      action: PayloadAction<PostSucceedPayload>
    ) => {
      state.fetching = false
      state.result = [action.payload.status.post].concat(state.result)
    },
  },
})

export const {
  fetchPostsRequest,
  fetchPostsSucceed,
  fetchPostsFailed,
  postRequest,
  postSucceed,
} = postSlice.actions

export default postSlice.reducer
