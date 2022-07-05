import type { NextPage } from 'next'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import React, { useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import InfiniteScroll from 'react-infinite-scroller'
import { useDispatch, useSelector } from 'react-redux'
import ChatInputBox from 'src/components/ChatInputBox'
import Footer from 'src/components/global/Footer'
import PageWrapper from 'src/components/global/PageWrapper'
import PostCard from 'src/components/PostCard'
import PostLoader from 'src/components/PostLoader'
import PATHNAME from 'src/constants/pathname'
import {
  fetchPostsRequest,
  fetchPostsSucceed,
  postSelector,
} from 'src/redux/post'
import { Post } from 'src/types'
type Props = {
  posts: Post[]
}

const Home: NextPage<Props> = ({ posts = [] }) => {
  const content = useMemo(() => <ChatInputBox />, [])

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

  const { result, currentPage } = useSelector(postSelector)

  return (
    <div>
      <NextSeo {...seoConfig} />
      <Head>
        <title>dse00</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1 , maximum-scale=1, user-scale=no'
        />
        <meta name='application-name' content='dse00' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='dse00 App' />
        <meta name='description' content='Best dse00 App in the world' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-config' content='/icons/browserconfig.xml' />
        <meta name='msapplication-TileColor' content='121212' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name='theme-color' content='#000000' />

        <link rel='apple-touch-icon' href='/static/images/icon.png' />
        <link
          rel='apple-touch-icon'
          sizes='152x152'
          href='/static/images/icon.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/static/images/icon.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='167x167'
          href='/static/images/icon.png'
        />

        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/static/images/icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/static/images/icon.png'
        />
        <link rel='manifest' href='/manifest.json' />
        <link
          rel='mask-icon'
          href='/icons/safari-pinned-tab.svg'
          color='#5bbad5'
        />
        <link rel='shortcut icon' href='/static/images/icon.png' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500'
        />

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:url' content='https://dse00.vercel.app' />
        <meta name='twitter:title' content='dse00 App' />
        <meta name='twitter:description' content='Best Memo App in the world' />
        <meta name='twitter:image' content='https://dse00.vercel.app' />
        <meta name='twitter:creator' content='@Likwai' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='dse00' />
        <meta property='og:description' content='Best Memo App in the world' />
        <meta property='og:site_name' content='Memo App' />
        <meta property='og:url' content='https://dse00.vercel.app' />
        <meta
          property='og:image'
          content='https://dse00.vercel.app/static/images/icon.png'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PageWrapper>
        <InfiniteScroll
          pageStart={0}
          loadMore={loadFunc}
          hasMore={true || false}
          loader={<PostLoader key={Math.floor(Math.random())} />}
        >
          {result.map((post, index) => (
            <PostCard key={post.title} post={post} index={index} />
          ))}
        </InfiniteScroll>
        <Footer content={content} />
      </PageWrapper>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${PATHNAME.WEB_LINK}/posts?page=1&limit=20`)

  const posts = await res.json()

  return { props: { posts } }
}

export default Home
