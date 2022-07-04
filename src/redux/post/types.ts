import { Post } from 'src/types'

// List of actions available
export enum PostTypes {
  fetchPostsRequest = 'fetchPostsRequest',
  fetchPostsSucceed = 'fetchPostsSucceed',
  fetchPostsFailed = 'fetchPostsFailed',
  postRequest = 'postRequest',
  postSucceed = 'postSucceed',
  postFailed = 'postFailed',
}

export type FetchPostsRequestPayload = { page: number }

export type FetchPostsSuccessPayload = {
  posts: Post[]
}

export type PostRequestPayload = { title: string; description: string }

export type PostSucceedPayload = { status: { post: Post } }
