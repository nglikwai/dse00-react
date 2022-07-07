import { useGesture } from '@use-gesture/react'
import Link from 'next/link'
import IconHeart from 'public/static/images/icon-heart-outline.svg'
import React, { useState } from 'react'
import { Post } from 'src/types'
import { descriptionFilter } from 'src/utils/urlUtils'
import styled, { keyframes } from 'styled-components'

import CommentCount from '../CommentCount'

const PostCard = ({ post, index }: { post: Post; index: number }) => {
  const [isSwipe, setIsSwipe] = useState(false)

  const swipeAction = () => {
    setIsSwipe(true)
    setTimeout(() => {
      setIsSwipe(false)
    }, 1000)
  }

  const bind = useGesture({
    onDrag: state => {
      state.direction[0] < 0 && state.distance[0] > 30 && swipeAction()
    },
  })

  return (
    <OuterWrapper>
      <InnerWrapper isSwipe={isSwipe} {...bind()}>
        <Wrapper index={index % 10}>
          <CommentCount update={post.updatedAt} count={post.reviews.length} />
          <Link href={`/post/${post._id}`}>
            <Title>
              {post.title.substring(0, 60)}
              <Author>- {post.author.username}</Author>
            </Title>
          </Link>
          <Content>
            {post.reviews[0]
              ? post.reviews[post.reviews.length - 1].body
              : descriptionFilter(post.description).substring(0, 60)}
          </Content>
        </Wrapper>
        <ControlButton>
          <IconHeart fill='#ff9999' />
        </ControlButton>
      </InnerWrapper>
    </OuterWrapper>
  )
}

export default PostCard

const rollIn = keyframes`
  0% {transform:translateX(-90px)}
  100% {transform:translateX(0)}
`

const Wrapper = styled(props => <div {...props} />)`
  :hover {
    background-color: ${({ theme }) => theme.palette.secondaryColor};
  }
  padding: 19px 12px;
  cursor: pointer;
  border-radius: 2rem;
  animation: ${rollIn} ${props => props.index / 10}s ease-in;
  transition: 0.5s;
  display: inline-block;
  width: 79%;
  margin: 0 1% 0 0;
`

const ControlButton = styled.div`
  width: 15%;
  align-items: center;
  display: inline;
  padding-left: 30px;
`

const InnerWrapper = styled(props => <div {...props} />)`
  overflow: hidden;
  width: 120%;
  transform: translateX(${props => (props.isSwipe ? '-90' : '0')}px);
  transition: 0.5s;
`

const OuterWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`

const Title = styled.div`
  font-size: 15px;
`

const Author = styled.span`
  color: #ccc;
  font-size: 13px;
  padding: 10px 0;
`

const Content = styled.div`
  color: #ccc;
  font-size: 13.5px;
  padding: 10px 0;
`
