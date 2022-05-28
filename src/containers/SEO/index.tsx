import getConfig from 'next/config'
import { useRouter } from 'next/router'
import { NextSeo, NextSeoProps } from 'next-seo'
import * as R from 'ramda'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import settings from 'src/constants/settings'

const { publicRuntimeConfig } = getConfig()

const Meta: FC<NextSeoProps> = config => {
  const { asPath } = useRouter()

  const [t] = useTranslation()

  const pathname = R.split('?', asPath)[0]

  const defaultConfig: NextSeoProps = R.mergeDeepRight<any, NextSeoProps>(
    {
      description: t('metadata.default.description'),
      additionalMetaTags: [
        {
          name: 'keywords',
          content: t('metadata.default.keywords'),
        },
      ],
      canonical: publicRuntimeConfig.baseUrl + pathname,
      openGraph: {
        url: publicRuntimeConfig.baseUrl + pathname,
        title: config?.title,
        description: config?.description ?? t('metadata.default.description'),
        images: [
          {
            url: publicRuntimeConfig.baseUrl + settings.defaultOgImage,
          },
        ],
        site_name: t('common.product_name'),
      },
    },
    config
  )

  return <NextSeo {...defaultConfig} />
}

export default Meta
