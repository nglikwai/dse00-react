import type { NextPage } from 'next'
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
  const res = await fetch(`http://localhost:4000/apis/posts?page=1&limit=10`)

  const posts = await res.json()

  return { props: { posts } }
}

export default Home
