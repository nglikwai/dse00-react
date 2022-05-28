import { IStringifyOptions, stringify } from 'qs'

export const buildQuery = (
  path: string,
  queryObject: Record<string, string | string[]>,
  options?: IStringifyOptions
): string =>
  path +
  stringify(queryObject, {
    encode: false,
    arrayFormat: 'comma',
    addQueryPrefix: true,
    ...options,
  })
