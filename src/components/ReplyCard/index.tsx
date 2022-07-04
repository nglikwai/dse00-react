import React from 'react'
import styled from 'styled-components'
type Props = {
  reply: string
  author: string
}

const ReplyCard = ({ reply, author }: Props) => {
  return (
    <Wrapper>
      <img src='/static/images/default_avatar.png' width={25} height={25} />
      <ReviewBody>
        <ReviewAuthor>{author.toUpperCase()}</ReviewAuthor>
        <ReplyBody>{reply}</ReplyBody>
      </ReviewBody>
    </Wrapper>
  )
}

export default ReplyCard

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 0s;
`

const ReviewAuthor = styled.div`
  font-size: 13px;
  font-weight: bold;
  padding-right: 12px;
  opacity: 0.6;
`

const ReviewBody = styled.div`
  padding: 5px 15px;
  background-color: ${({ theme }) => theme.palette.tertiaryColor};
  border-radius: 1rem;
  margin: 4px 12px;
  display: flex;
  align-items: center;
`

const ReplyBody = styled.div`
  font-size: 15px;
`
