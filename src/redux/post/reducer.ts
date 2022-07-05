import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Post, Review } from 'src/types'

import {
  DeletePostsRequestPayload,
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
  addedReview: Review | string
  isDelete: boolean
}

const initialState: SearchState = {
  result: [],
  fetching: false,
  currentPage: 3,
  status: '',
  addedReview: '',
  isDelete: false,
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
    [PostTypes.reviewSucceed]: (state, action: PayloadAction<any>) => {
      state.fetching = false
      state.addedReview = action.payload.status.review
    },
    [PostTypes.deletePostRequest]: (
      state,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      action: PayloadAction<DeletePostsRequestPayload>
    ) => {
      state.fetching = true
    },
    [PostTypes.deletePostSucceed]: (state, action) => {
      state.fetching = false
      state.isDelete = true
      state.result = state.result.filter(post => post._id !== action.payload.id)
    },
  },
})

export const {
  fetchPostsRequest,
  fetchPostsSucceed,
  fetchPostsFailed,
  postRequest,
  postSucceed,
  reviewSucceed,
  deletePostSucceed,
  deletePostRequest,
} = postSlice.actions

export const postReducer = postSlice.reducer
