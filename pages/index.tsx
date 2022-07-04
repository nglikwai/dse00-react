import type { NextPage } from 'next'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import InfiniteScroll from 'react-infinite-scroller'
import { useDispatch, useSelector } from 'react-redux'
import PageWrapper from 'src/components/global/PageWrapper'
import PostCard from 'src/components/PostCard'
import { fetchPostsRequest, fetchPostsSucceed } from 'src/redux/post'
import { Post, State } from 'src/types'
type Props = {
  posts: Post[]
}

const Home: NextPage<Props> = ({ posts = [] }) => {
  const dispatch = useDispatch()

  const { t } = useTranslation()

  const productName = `${t('common.product_name')}`

  const seoConfig = {
    title: productName,
    openGraph: {
      title: productName,
      url: `${process.env.NEXT_PUBLIC_HOST_URL}`,
      images: [
        {
          url: `/apple-touch-icon.png`,
        },
      ],
      description: productName,
      type: 'website',
    },
  }

  const loadFunc = () => {
    dispatch(fetchPostsRequest({ page: currentPage }))
  }

  useEffect(() => {
    dispatch(fetchPostsSucceed({ posts }))
  }, [posts, dispatch])

  const { result, currentPage } = useSelector((state: State) => state.post)

  return (
    <div>
      <NextSeo {...seoConfig} />
      <Head>
        <title>HK01</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1 , maximum-scale=1, user-scale=no'
        />
        <meta name='application-name' content='hk01' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='hk01 App' />
        <meta name='description' content='Best hk01 App in the world' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-config' content='/icons/browserconfig.xml' />
        <meta name='msapplication-TileColor' content='#2B5797' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name='theme-color' content='#000000' />

        <link rel='apple-touch-icon' href='/public/static/images/icon.png' />
        <link
          rel='apple-touch-icon'
          sizes='152x152'
          href='/public/static/images/icon.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/public/static/images/icon.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='167x167'
          href='/public/static/images/icon.png'
        />

        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/public/static/images/icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/public/static/images/icon.png'
        />
        <link rel='manifest' href='/manifest.json' />
        <link
          rel='mask-icon'
          href='/icons/safari-pinned-tab.svg'
          color='#5bbad5'
        />
        <link rel='shortcut icon' href='/public/static/images/icon.png' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500'
        />

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:url' content='https://hk01.vercel.app' />
        <meta name='twitter:title' content='hk01 App' />
        <meta name='twitter:description' content='Best Memo App in the world' />
        <meta name='twitter:image' content='https://hk01.vercel.app' />
        <meta name='twitter:creator' content='@Likwai' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='HK01' />
        <meta property='og:description' content='Best Memo App in the world' />
        <meta property='og:site_name' content='Memo App' />
        <meta property='og:url' content='https://hk01.vercel.app' />
        <meta
          property='og:image'
          content='https://hk01.vercel.app//public/static/images/icon.png'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PageWrapper>
        <InfiniteScroll
          pageStart={0}
          loadMore={loadFunc}
          hasMore={true || false}
          loader={
            <div className='loader' key={0}>
              Loading ...
            </div>
          }
        >
          {result.map(post => (
            <PostCard key={post.title} post={post} />
          ))}
        </InfiniteScroll>
      </PageWrapper>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(
    `https://api-dse00.herokuapp.com/apis/posts?page=1&limit=10`
  )

  const posts = await res.json()

  return { props: { posts } }
}

export default Home
