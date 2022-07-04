import { all, takeLatest } from 'redux-saga/effects'

import { fetchPostsWorker, postWorker } from './postsWorker'

export function* postWatcher() {
  try {
    yield all([takeLatest('post/fetchPostsRequest', fetchPostsWorker)])
    yield all([takeLatest('post/postRequest', postWorker)])
  } catch (e) {
    // TODO: handle error
  }
}
