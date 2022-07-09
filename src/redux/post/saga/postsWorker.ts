import { PayloadAction } from '@reduxjs/toolkit'
import { call, put } from 'redux-saga/effects'
import PATHNAME from 'src/constants/pathname'
import {
  deletePostSucceed,
  fetchPostsSucceed,
  postReplySuccess,
  postSucceed,
  reviewSucceed,
} from 'src/redux/post'
import { Post, Review } from 'src/types'

import {
  DeletePostsRequestPayload,
  FetchPostsRequestPayload,
  PostReplyRequestPayload,
  PostRequestPayload,
} from '../types'

export function* fetchPostsWorker(
  action: PayloadAction<FetchPostsRequestPayload>
) {
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
  const { title, description, id, isPost } = action.payload

  const RequestOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      description,
      body: title,
      post: id,
    }),
  }

  try {
    const response = (yield call(() =>
      isPost
        ? fetch(`${PATHNAME.WEB_LINK}/posts`, RequestOptions)
        : fetch(`${PATHNAME.WEB_LINK}/reviews`, RequestOptions)
    )) as Response

    const status = (yield response.json()) as {
      status: string
      post: Post
      review: Review
    }

    isPost
      ? ((yield put(postSucceed({ status }))) as Post)
      : ((yield put(reviewSucceed({ status }))) as Review)
  } catch (err) {
    // TODO: handle error
    console.log(err)
  }
}

export function* deletePostWorker(
  action: PayloadAction<DeletePostsRequestPayload>
) {
  const RequestOptions = {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }

  try {
    const { id } = action.payload

    yield call(fetch, `${PATHNAME.WEB_LINK}/posts?id=${id}`, RequestOptions)

    yield put(deletePostSucceed(id))
  } catch (err) {
    // TODO: handle error
    console.log(err)
  }
}

export function* postReplyWorker(
  action: PayloadAction<PostReplyRequestPayload>
) {
  const { postId, reviewId, reply } = action.payload

  const RequestOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      postId,
      reviewId,
      reply,
    }),
  }

  try {
    yield call(fetch, `${PATHNAME.WEB_LINK}/posts/reply`, RequestOptions)

    yield put(postReplySuccess({ author: 'DSEJJ', reply, reviewId }))
  } catch (err) {
    // TODO: handle error
    console.log(err)
  }
}
