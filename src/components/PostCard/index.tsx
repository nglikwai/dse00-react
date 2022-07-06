import Link from 'next/link'
import React from 'react'
import { Post } from 'src/types'
import { descriptionFilter } from 'src/utils/urlUtils'
import styled, { keyframes } from 'styled-components'

import CommentCount from '../CommentCount'

const PostCard = ({ post, index }: { post: Post; index: number }) => {
  return (
    <Link href={`/post/${post._id}`}>
      <Wrapper index={index % 10}>
        <CommentCount update={post.updatedAt} count={post.reviews.length} />

        <Title>
          {post.title.substring(0, 60)}
          <Author>- {post.author.username}</Author>
        </Title>
        <Content>
          {post.reviews[0]
            ? post.reviews[post.reviews.length - 1].body
            : descriptionFilter(post.description).substring(0, 60)}
        </Content>
      </Wrapper>
    </Link>
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
