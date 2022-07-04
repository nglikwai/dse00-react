import { PayloadAction } from '@reduxjs/toolkit'
import { call, put } from 'redux-saga/effects'
import PATHNAME from 'src/constants/pathname'
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
        `${PATHNAME.WEB_LINK}/apis/posts?page=${action.payload.page}&limit=10`
      )
    )) as Response

    const posts = (yield response.json()) as Post[]

    yield put(fetchPostsSucceed({ posts }))
  } catch (err) {
    // TODO: handle error
    console.log(err)
  }
}
