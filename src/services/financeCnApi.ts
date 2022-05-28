import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

const { apiBaseUrl } = publicRuntimeConfig

export const financeCnApi = createApi({
  reducerPath: 'financeCnApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${apiBaseUrl}/v1.0` }),
  endpoints: builder => ({
    getArticles: builder.query({
      query: () => `/article/search`,
    }),
  }),
})

export const { useGetArticlesQuery } = financeCnApi
