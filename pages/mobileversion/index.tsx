import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Send from 'public/static/images/icon-send.svg'
import * as R from 'ramda'
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import { useDispatch, useSelector } from 'react-redux'
import PostLoader from 'src/components/PostLoader'
import PATHNAME from 'src/constants/pathname'
import {
  fetchPostsRequest,
  fetchPostsSucceed,
  postRequest,
  postSelector,
} from 'src/redux/post'
import { Post } from 'src/types'
import { descriptionFilter } from 'src/utils/urlUtils'
import styled from 'styled-components'

type Props = {
  posts: Post[]
}

const TitleCard = ({ post }: { post: Post }) => {
  return (
    <TitleWrapper>
      <Author>{post.author.username}</Author>
      <Title>{post.title.substring(0, 30)}</Title>
      <Reply>
        {post.reviews[0]
          ? `➥${post.reviews[post.reviews.length - 1].body.substring(0, 60)}`
          : descriptionFilter(post.description).substring(0, 60)}
      </Reply>
    </TitleWrapper>
  )
}

const MobileVersion: NextPage<Props> = ({ posts = [] }) => {
  const dispatch = useDispatch()

  const router = useRouter()

  const [term, setTerm] = useState('')

  useEffect(() => {
    dispatch(fetchPostsSucceed({ posts }))
  }, [posts, dispatch])

  const { result, currentPage } = useSelector(postSelector)

  const loadFunc = () => {
    dispatch(fetchPostsRequest({ page: currentPage }))
  }

  const handleSubmit = () => {
    dispatch(
      postRequest({
        title: term,
        description: '如題',
        id: router.query.id,
        isPost: R.isEmpty(router.query),
      })
    )
    setTerm('')
  }

  return (
    <Wrapper>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadFunc}
        hasMore={true || false}
        loader={<PostLoader key={Math.floor(Math.random())} />}
      >
        {result.map(post => (
          <TitleCard key={post.title} post={post} />
        ))}
      </InfiniteScroll>

      <ReplyBox>
        <TextArea onChange={e => setTerm(e.target.value)} value={term} />
        <SubmitButton disabled={term.length < 11} onClick={handleSubmit}>
          <Send fill={term.length < 11 ? '#ccc' : '#cc0000'} />
        </SubmitButton>
      </ReplyBox>
    </Wrapper>
  )
}

export default MobileVersion

const Wrapper = styled.div`
  font-size: 14px;
`

const TitleWrapper = styled.div`
  padding-bottom: 14px;
`

const Title = styled.div`
  margin: 5px 0px 4px 0px;
  color: #666;
  font-weight: normal;
`

const Reply = styled.div`
  color: #bbb;
`

const Author = styled.div`
  font-weight: 500;
  color: #be0000;
  margin-bottom: 4px;
`

const ReplyBox = styled.div`
  :hover,
  :focus {
    opacity: 0.95;
  }
  position: fixed;
  bottom: 0;
  width: 100%;
  background: rgba(256, 256, 256, 0.9);
  opacity: 0.7;
  display: flex;
  align-items: center;
  padding: 5px;
  border-top: 1px #ddd solid;
`

const TextArea = styled.textarea`
  :focus {
    border: #cc0000 1px solid;
  }
  height: 50px;
  width: 80%;
  border-radius: 2rem;
  box-sizing: border-box;
  border: none;
  padding: 16px 10px;
  font-size: 14px;
`

const SubmitButton = styled.button`
  background-color: transparent;
  border: none;
  width: 40px;
  height: 30px;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export async function getServerSideProps() {
  const res = await fetch(`${PATHNAME.WEB_LINK}/posts?page=1&limit=20`)

  const posts = await res.json()

  return { props: { posts } }
}
