import { all, takeLatest } from 'redux-saga/effects'

import { fetchArticlesWorker } from './fetchArticlesWorker'

export function* articleWatcher() {
  try {
    yield all([takeLatest('article/fetchArticlesRequest', fetchArticlesWorker)])
  } catch (e) {
    // TODO: handle error
  }
}
