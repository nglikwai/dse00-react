import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

const { apiBaseUrl } = publicRuntimeConfig

export const PostApi = createApi({
  reducerPath: 'PostApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${apiBaseUrl}` }),
  endpoints: builder => ({
    getPosts: builder.query({
      query: () => `/Posts`,
    }),
  }),
})

export const { useGetPostsQuery } = PostApi
