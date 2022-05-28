import { QUERY_KEYS } from 'src/constants'

export const SSR_QUERY_DEFAULT_OPTS = {
  defaultOptions: {
    queries: {
      cacheTime: Infinity,
    },
  },
}

// data expiry time
export const API_STALE_TIME = {
  [QUERY_KEYS.ARTICLES]: 1000 * 60 * 5,
  [QUERY_KEYS.ARTICLE]: 1000 * 60 * 5,
}

export const API_REFETCH_INTERVAL = {
  [QUERY_KEYS.ARTICLES]: 1000 * 60 * 5,
}
