import { all, takeLatest } from 'redux-saga/effects'

import { deletePostWorker, fetchPostsWorker, postWorker } from './postsWorker'

export function* postWatcher() {
  try {
    yield all([takeLatest('post/fetchPostsRequest', fetchPostsWorker)])
    yield all([takeLatest('post/postRequest', postWorker)])
    yield all([takeLatest('post/deletePostRequest', deletePostWorker)])
  } catch (e) {
    // TODO: handle error
  }
}
