import { NextPage } from 'next'
import ArrowIcon from 'public/static/images/icon-arrow-right.svg'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { QueryClient } from 'react-query'
import { dehydrate, DehydratedState } from 'react-query/hydration'
import { SSR_QUERY_DEFAULT_OPTS } from 'src/constants/reactQueryConfig'
import { useGetArticlesQuery } from 'src/services/financeCnApi'
import { Article } from 'src/types'

type PageProps = {}

type HomeProps = PageProps & { dehydratedState: DehydratedState }

const Page: FC<PageProps> = () => {
  const { t } = useTranslation()

  const { data, error, isLoading } = useGetArticlesQuery('')

  const articles: Article[] = data?.result ?? []

  if (error) {
    return <div>Error</div>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <span>{t('common.product_name')}</span>
      <ArrowIcon fill='red' />
      <span>Hello World</span>
      <ul>
        {articles.map(article => (
          <li key={article.articleKey}>{article.title}</li>
        ))}
      </ul>
    </div>
  )
}

const Home: NextPage<HomeProps> = () => <Page />

const MemoizedHome: NextPage<HomeProps> = React.memo(Home)

MemoizedHome.getInitialProps = async () => {
  const queryClient = new QueryClient(SSR_QUERY_DEFAULT_OPTS)

  return {
    dehydratedState: dehydrate(queryClient),
  }
}

export default MemoizedHome
