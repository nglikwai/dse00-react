import { Post } from 'src/types'

// List of actions available
export enum PostTypes {
  fetchPostsRequest = 'fetchPostsRequest',
  fetchPostsSucceed = 'fetchPostsSucceed',
  fetchPostsFailed = 'fetchPostsFailed',
  postRequest = 'postRequest',
  postSucceed = 'postSucceed',
  postFailed = 'postFailed',
  reviewSucceed = 'reviewSucceed',
  deletePostRequest = 'deletePostRequest',
  deletePostSucceed = 'deletePostSucceed',
}

export type FetchPostsRequestPayload = { page: number }

export type FetchPostsSuccessPayload = {
  posts: Post[]
}

export type PostRequestPayload = {
  title: string
  description: string
  id: any
  isPost: boolean
}

export type PostSucceedPayload = { status: { post: Post } }
export type ReviewSucceedPayload = { status: { post: Post } }

export type DeletePostsRequestPayload = { id: string | string[] | undefined }
