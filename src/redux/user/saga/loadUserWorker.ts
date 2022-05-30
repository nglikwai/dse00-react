import { call, put } from 'redux-saga/effects'
import { loadUserFail, loadUserSuccess } from 'src/redux/user'
import { User } from 'src/types'

export function* loadUserWorker() {
  try {
    const response = (yield call(() =>
      fetch('http://localhost:3000/api/auth/auth')
    )) as Response

    const user = (yield response.json()) as User

    yield put(loadUserSuccess({ user }))
  } catch (err) {
    // TODO: handle error
    yield put(loadUserFail())

    console.log(err)
  }
}
