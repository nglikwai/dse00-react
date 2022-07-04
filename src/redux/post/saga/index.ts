import { all, takeLatest } from 'redux-saga/effects'

import { fetchPostsWorker } from './fetchPostsWorker'

export function* postWatcher() {
  try {
    yield all([takeLatest('post/fetchPostsRequest', fetchPostsWorker)])
  } catch (e) {
    // TODO: handle error
  }
}
