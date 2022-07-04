import { PayloadAction } from '@reduxjs/toolkit'
import { call, put } from 'redux-saga/effects'
import PATHNAME from 'src/constants/pathname'
import { fetchPostsSucceed, postSucceed } from 'src/redux/post'
import { Post } from 'src/types'

import { FetchPostsRequestPayload, PostRequestPayload } from '../types'

export function* fetchPostsWorker(
  action: PayloadAction<FetchPostsRequestPayload>
) {
  console.log(action.payload.page)
  try {
    const response = (yield call(() =>
      fetch(`${PATHNAME.WEB_LINK}/posts?page=${action.payload.page}&limit=10`)
    )) as Response

    const posts = (yield response.json()) as Post[]

    yield put(fetchPostsSucceed({ posts }))
  } catch (err) {
    // TODO: handle error
    console.log(err)
  }
}

export function* postWorker(action: PayloadAction<PostRequestPayload>) {
  console.log(action.payload)

  const { title, description } = action.payload

  const requestOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: 'testtesttesttest',
      description: '如題',
    }),
  }

  console.log(requestOptions)
  try {
    const response = (yield call(() =>
      fetch(
        `${PATHNAME.WEB_LINK}/posts?title=${title}&description=${description}`,
        requestOptions
      )
    )) as Response

    const status = (yield response.json()) as { status: string; post: Post }

    yield put(postSucceed({ status }))
  } catch (err) {
    // TODO: handle error
    console.log(err)
  }
}
