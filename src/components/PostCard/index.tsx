import Link from 'next/link'
import React from 'react'
import { Post } from 'src/types'
import { descriptionFilter } from 'src/utils/urlUtils'
import styled from 'styled-components'

import CommentCount from '../CommentCount'

const PostCard = ({ post }: { post: Post }) => {
  return (
    <Link href={`/post/${post._id}`}>
      <Wrapper>
        <CommentCount update={post.updatedAt} count={post.reviews.length} />

        <Title>
          {post.title.substring(0, 60)}
          <Author>- {post.author.username}</Author>
        </Title>

        <Content>
          {descriptionFilter(post.description).substring(0, 60)}
        </Content>
      </Wrapper>
    </Link>
  )
}

export default PostCard

const Wrapper = styled.div`
  :hover {
    background-color: ${({ theme }) => theme.palette.secondaryColor};
  }
  padding: 20px 12px;
  transition: 0.3s;
  cursor: pointer;
  border-radius: 2rem;
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
