import { PayloadAction } from '@reduxjs/toolkit'
import { call, put } from 'redux-saga/effects'
import { fetchArticlesSucceed } from 'src/redux/article'
import { Article } from 'src/types'

import { FetchArticlesRequestPayload } from '../types'

export function* fetchArticlesWorker(
  action: PayloadAction<FetchArticlesRequestPayload>
) {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    payload,
  } = action

  try {
    const response = (yield call(() => fetch('/articles'))) as Response

    const articles = (yield response.json()) as Article[]

    yield put(fetchArticlesSucceed({ articles }))
  } catch (err) {
    // TODO: handle error
    console.log(err)
  }
}
