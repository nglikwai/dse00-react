import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Article } from 'src/types'

import {
  ArticleTypes,
  FetchArticlesRequestPayload,
  FetchArticlesSuccessPayload,
} from './types'

export interface SearchState {
  result: Article[]
  fetching: boolean
}

const initialState: SearchState = {
  result: [],
  fetching: false,
}

export const articleSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    [ArticleTypes.fetchArticlesRequest]: (
      state,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      action: PayloadAction<FetchArticlesRequestPayload>
    ) => {
      state.fetching = true
    },
    [ArticleTypes.fetchArticlesSucceed]: (
      state,
      action: PayloadAction<FetchArticlesSuccessPayload>
    ) => {
      state.fetching = false
      state.result = action.payload.articles
    },
    [ArticleTypes.fetchArticlesFailed]: state => {
      state.fetching = false
    },
  },
})

export const {
  fetchArticlesRequest,
  fetchArticlesSucceed,
  fetchArticlesFailed,
} = articleSlice.actions

export default articleSlice.reducer
