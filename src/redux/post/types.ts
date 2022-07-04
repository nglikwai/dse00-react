import { Post } from 'src/types'

// List of actions available
export enum PostTypes {
  fetchPostsRequest = 'fetchPostsRequest',
  fetchPostsSucceed = 'fetchPostsSucceed',
  fetchPostsFailed = 'fetchPostsFailed',
}

export type FetchPostsRequestPayload = { page: number }

export type FetchPostsSuccessPayload = {
  posts: Post[]
}
