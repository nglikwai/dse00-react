import { all, takeLatest } from 'redux-saga/effects'

import { fetchCutoffsWorker } from './fetchCutoffsWorker'

export function* cutoffWatcher() {
  try {
    yield all([takeLatest('cutoff/fetchCutoffsRequest', fetchCutoffsWorker)])
  } catch (e) {
    // TODO: handle error
  }
}
