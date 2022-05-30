import { all, takeLatest } from 'redux-saga/effects'

import { loadUserWorker } from './loadUserWorker'

export function* loadWatcher() {
  try {
    yield all([takeLatest('user/loadUserRequest', loadUserWorker)])
  } catch (e) {
    // TODO: handle error
  }
}
