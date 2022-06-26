import { PayloadAction } from '@reduxjs/toolkit'
import { call, put } from 'redux-saga/effects'
import { fetchTutorsSucceed } from 'src/redux/tutor'
import { Tutor } from 'src/types'

import { FetchTutorsRequestPayload } from '../types'

export function* fetchTutorsWorker(
  action: PayloadAction<FetchTutorsRequestPayload>
) {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    payload,
  } = action

  try {
    const response = (yield call(() =>
      fetch('https://www.dse00.com/tutor')
    )) as Response

    const tutors = (yield response.json()) as Tutor[]

    yield put(fetchTutorsSucceed({ tutors }))
  } catch (err) {
    // TODO: handle error
    console.log(err)
  }
}
