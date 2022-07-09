import { all, takeLatest } from 'redux-saga/effects'

import {
  deletePostWorker,
  fetchPostsWorker,
  postReplyWorker,
  postWorker,
} from './postsWorker'

export function* postWatcher() {
  try {
    yield all([takeLatest('post/fetchPostsRequest', fetchPostsWorker)])
    yield all([takeLatest('post/postRequest', postWorker)])
    yield all([takeLatest('post/deletePostRequest', deletePostWorker)])
    yield all([takeLatest('post/postReplyRequest', postReplyWorker)])
  } catch (e) {
    // TODO: handle error
  }
}
