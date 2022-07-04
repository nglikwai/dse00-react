import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import postReducer from 'src/redux/post'
import { rootSaga } from 'src/redux/rootSaga'

import { PostApi } from '../services/PostApi'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    [PostApi.reducerPath]: PostApi.reducer,
    post: postReducer,
  },
  middleware: getDefaultMiddleware => [
    sagaMiddleware,
    ...getDefaultMiddleware().concat(PostApi.middleware),
  ],
})

sagaMiddleware.run(rootSaga)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
