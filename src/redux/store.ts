import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from 'src/redux/rootSaga'
import tutorReducer from 'src/redux/tutor'

import { tutorApi } from '../services/tutorApi'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    [tutorApi.reducerPath]: tutorApi.reducer,
    tutor: tutorReducer,
  },
  middleware: getDefaultMiddleware => [
    sagaMiddleware,
    ...getDefaultMiddleware().concat(tutorApi.middleware),
  ],
})

sagaMiddleware.run(rootSaga)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
