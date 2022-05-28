import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

const { apiBaseUrl } = publicRuntimeConfig

export const tutorApi = createApi({
  reducerPath: 'tutorApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${apiBaseUrl}` }),
  endpoints: builder => ({
    getTutors: builder.query({
      query: () => `/tutors`,
    }),
  }),
})

export const { useGetTutorsQuery } = tutorApi
