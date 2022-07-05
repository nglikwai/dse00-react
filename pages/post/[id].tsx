import dayjs from 'dayjs'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import * as R from 'ramda'
import React, { useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import ChatInputBox from 'src/components/ChatInputBox'
import CrossButton from 'src/components/CrossButton'
import Footer from 'src/components/global/Footer'
import PageWrapper from 'src/components/global/PageWrapper'
import ReviewCard from 'src/components/ReviewCard'
import PATHNAME from 'src/constants/pathname'
import { zIndex } from 'src/constants/zIndex'
import { deletePostRequest } from 'src/redux/post'
import { Post, State } from 'src/types'
import { initializeDayjs } from 'src/utils/urlUtils'
import styled from 'styled-components'

type Props = {
  post: Post
}

const MainPost: NextPage<Props> = ({ post }: Props) => {
  const content = useMemo(() => <ChatInputBox />, [])

  const { t } = useTranslation()

  const router = useRouter()

  const dispatch = useDispatch()

  initializeDayjs()

  const productName = `${t('common.product_name')}`

  const { addedReview, isDelete } = useSelector((state: State) => state.post)

  useEffect(() => {
    return () => {
      router.push('/')
    }
  }, [isDelete, router])

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

  const onClickDelete = () => {
    dispatch(deletePostRequest({ id: router.query.id }))
  }

  return (
    <>
      <NextSeo {...seoConfig} />

      <PageWrapper>
        <Title>{post.title}</Title>
        <CrossButton onClick={onClickDelete} />
        <Header>
          <img src='/static/images/default_avatar.png' width={60} height={60} />
          <UserData>
            <Author> {post.author.username}</Author>
            <Date>{dayjs(post.createdAt).fromNow()}</Date>
          </UserData>
        </Header>

        <Description>{post.description}</Description>
        <ReviewWrapper>
          {post.reviews.map(review => (
            <ReviewCard review={review} key={review.body} />
          ))}
          {!R.isEmpty(addedReview) && <ReviewCard review={addedReview} />}

          {R.isEmpty(post.reviews) && <Description>no comment</Description>}
        </ReviewWrapper>
        <Footer content={content} />
      </PageWrapper>
    </>
  )
}

type Param = {
  query: { id: string }
}
export async function getServerSideProps(param: Param) {
  const res = await fetch(`${PATHNAME.WEB_LINK}/posts/${param.query.id}`)

  const post = await res.json()

  return { props: { post } }
}

export default MainPost

const Title = styled.div`
  position: fixed;
  top: 0;
  margin: 0 60px;
  height: 55px;
  z-index: ${zIndex.postTitle};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
`

const Description = styled.div`
  padding: 40px 20px;
`

const Header = styled.div`
  display: flex;
`

const ReviewWrapper = styled.div``

const UserData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
`

const Author = styled.div``

const Date = styled.div`
  color: #999;
  font-size: 14px;
`
