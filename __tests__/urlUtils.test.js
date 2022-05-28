import { buildQuery } from 'src/utils/urlUtils'

describe('utils/urlUtils:buildQuery >', () => {
  const link = 'https://{hostname}/article/{articleKey}'

  it('should return url with queries on proper input', () => {
    const result = buildQuery(link, {
      utm_source: 'share_button',
      utm_medium: 'referral',
      utm_campaign: 'share_web',
    })

    expect(result).toMatchSnapshot()
  })

  it('should return original url on no query input', () => {
    const result = buildQuery(link)

    expect(result).toMatchSnapshot()
  })
})
