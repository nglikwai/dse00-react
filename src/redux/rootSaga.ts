import { all, fork } from 'redux-saga/effects'

import { cutoffWatcher } from './cutoff/saga'
import { postWatcher } from './post/saga'

const combineSagas = (sagas: any) =>
  function* rootSaga() {
    try {
      yield all(sagas.map(fork))
    } catch (err) {
      console.log(err)
    }
  }

export const rootSaga = combineSagas([
  // sagas
  postWatcher,
  cutoffWatcher,
])
