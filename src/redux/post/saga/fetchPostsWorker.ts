import { PayloadAction } from '@reduxjs/toolkit'
import { call, put } from 'redux-saga/effects'
import { fetchPostsSucceed } from 'src/redux/post'
import { Post } from 'src/types'

import { FetchPostsRequestPayload } from '../types'

export function* fetchPostsWorker(
  action: PayloadAction<FetchPostsRequestPayload>
) {
  console.log(action.payload.page)
  try {
    const response = (yield call(() =>
      fetch(
        `https://api-dse00.herokuapp.com/apis/posts?page=${action.payload.page}&limit=10`
      )
    )) as Response

    const posts = (yield response.json()) as Post[]

    yield put(fetchPostsSucceed({ posts }))
  } catch (err) {
    // TODO: handle error
    console.log(err)
  }
}
