import { all, takeLatest } from 'redux-saga/effects'

import { fetchTutorsWorker } from './fetchTutorsWorker'

export function* tutorWatcher() {
  try {
    yield all([takeLatest('search/fetchTutorsRequest', fetchTutorsWorker)])
  } catch (e) {
    // TODO: handle error
  }
}
