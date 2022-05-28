import { all, takeLatest } from 'redux-saga/effects'

import { fetchTutorsWorker } from './fetchTutorsWorker'

export function* tutorWatcher() {
  try {
    yield all([takeLatest('tutor/fetchTutorsRequest', fetchTutorsWorker)])
  } catch (e) {
    // TODO: handle error
  }
}
