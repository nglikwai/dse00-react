import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import updateLocale from 'dayjs/plugin/updateLocale'
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

export const descriptionFilter = (description: string) =>
  description !== '如題' ? description : ''

export const initializeDayjs = () => {
  dayjs.extend(relativeTime)

  dayjs.extend(updateLocale)

  dayjs.updateLocale('en', {
    relativeTime: {
      future: 'in %s',
      past: '%s ',
      s: 'a few seconds',
      m: '%m m',
      mm: '%d m',
      h: '1 h',
      hh: '%d h',
      d: '1 d',
      dd: '%d d',
      M: '1 M',
      MM: '%d M',
      y: '1 Y',
      yy: '%d Y',
    },
  })
}
