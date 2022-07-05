import { PayloadAction } from '@reduxjs/toolkit'
import { call, put } from 'redux-saga/effects'
import PATHNAME from 'src/constants/pathname'
import { fetchCutoffsSucceed } from 'src/redux/cutoff'
import { FetchCutoffsRequestPayload } from 'src/redux/cutoff/types'
import { Cutoff } from 'src/types'

export function* fetchCutoffsWorker(
  action: PayloadAction<FetchCutoffsRequestPayload>
) {
  try {
    const response = (yield call(() =>
      fetch(`${PATHNAME.WEB_LINK}/cutoffs?category=${action.payload.category}`)
    )) as Response

    const { cutoffs } = (yield response.json()) as { cutoffs: Cutoff[] }

    yield put(fetchCutoffsSucceed({ cutoffs }))
  } catch (err) {
    // TODO: handle error
    console.log(err)
  }
}
