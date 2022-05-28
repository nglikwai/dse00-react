import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import articleReducer from 'src/redux/article'
import { rootSaga } from 'src/redux/rootSaga'

import { financeCnApi } from '../services/financeCnApi'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    [financeCnApi.reducerPath]: financeCnApi.reducer,
    article: articleReducer,
  },
  middleware: getDefaultMiddleware => [
    sagaMiddleware,
    ...getDefaultMiddleware().concat(financeCnApi.middleware),
  ],
})

sagaMiddleware.run(rootSaga)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
