import type { NextPage } from 'next'
import React, { useEffect, useMemo } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import { useDispatch, useSelector } from 'react-redux'
import ChatInputBox from 'src/components/ChatInputBox'
import Footer from 'src/components/global/Footer'
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
  theme: { palette: { backgroundColor: string } }
}

const Home: NextPage<Props> = ({ posts = [] }) => {
  const content = useMemo(() => <ChatInputBox />, [])

  const dispatch = useDispatch()

  const loadFunc = () => {
    dispatch(fetchPostsRequest({ page: currentPage }))
  }

  useEffect(() => {
    dispatch(fetchPostsSucceed({ posts }))
  }, [posts, dispatch])

  const { result, currentPage } = useSelector(postSelector)

  return (
    <div>
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
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${PATHNAME.WEB_LINK}/posts?page=1&limit=20`)

  const posts = await res.json()

  return { props: { posts } }
}

export default Home
